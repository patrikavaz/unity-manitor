;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "2c5b0d03-8c7d-9751-a235-5925bb3f6dbe")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 309578, 920618, 414542, 993448, 997629, 432764, 134454, 419369, 435682, 267269, 390740, 39561, 530598, 764580, 96342, 636933, 413007, 377656, 523299, 919610, 932881, 762783, 319074, 981317, 5053, 989542, 597968, 445972, 351384, 551364, 597121, 121284, 390391, 820899, 798844, 108922, 511091, 89268, 85971, 143829, 785509, 646162, 151348, e => {
    "use strict";
    let t, n, r, i, s, o, a, c, u = "11.1.0";
    e.s(["SDK_VERSION", 0, u], 920618);
    let l = globalThis;

    function p() {
        return d(l), l
    }

    function d(e) {
        let t = e.__SENTRY__ = e.__SENTRY__ || {};
        return t.version = t.version || u, t[u] = t[u] || {}
    }

    function _(e, t, n = l) {
        let r = n.__SENTRY__ = n.__SENTRY__ || {},
            i = r[u] = r[u] || {};
        return i[e] || (i[e] = t())
    }
    e.s(["GLOBAL_OBJ", 0, l], 414542), e.s(["getGlobalSingleton", 0, _, "getMainCarrier", 0, p, "getSentryCarrier", 0, d], 993448);
    let f = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
    e.s(["DEBUG_BUILD", 0, f], 997629);
    let g = {};

    function h(e) {
        if (!("console" in l)) return e();
        let t = l.console,
            n = {},
            r = Object.keys(g);
        r.forEach(e => {
            let r = g[e];
            n[e] = t[e], t[e] = r
        });
        try {
            return e()
        } finally {
            r.forEach(e => {
                t[e] = n[e]
            })
        }
    }

    function m() {
        return E().enabled
    }

    function S(e, ...t) {
        f && m() && h(() => {
            l.console[e](`Sentry Logger [${e}]:`, ...t)
        })
    }

    function E() {
        return f ? _("loggerSettings", () => ({
            enabled: !1
        })) : {
            enabled: !1
        }
    }
    let y = {
        enable: function() {
            E().enabled = !0
        },
        disable: function() {
            E().enabled = !1
        },
        isEnabled: m,
        log: function(...e) {
            S("log", ...e)
        },
        warn: function(...e) {
            S("warn", ...e)
        },
        error: function(...e) {
            S("error", ...e)
        }
    };
    e.s(["CONSOLE_LEVELS", 0, ["debug", "info", "warn", "error", "log", "assert", "trace"], "consoleSandbox", 0, h, "debug", 0, y, "originalConsoleMethods", 0, g], 432764);
    let T = Object.prototype.toString;

    function b(e) {
        switch (T.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
            case "[object WebAssembly.Exception]":
                return !0;
            default:
                return k(e, Error)
        }
    }

    function I(e, t) {
        return T.call(e) === `[object ${t}]`
    }

    function v(e) {
        return I(e, "String")
    }

    function N(e) {
        return "object" == typeof e && null !== e && "__sentry_template_string__" in e && "__sentry_template_values__" in e
    }

    function R(e) {
        return null === e || N(e) || "object" != typeof e && "function" != typeof e
    }

    function A(e) {
        return I(e, "Object")
    }

    function x(e) {
        return "object" == typeof e && null !== e
    }

    function O(e) {
        return "u" > typeof Event && k(e, Event)
    }

    function C(e) {
        return I(e, "RegExp")
    }

    function P(e) {
        return !!(e?.then && "function" == typeof e.then)
    }

    function k(e, t) {
        try {
            return e instanceof t
        } catch {
            return !1
        }
    }

    function M(e, t, n) {
        try {
            Object.defineProperty(e, t, {
                value: n,
                writable: !0,
                configurable: !0
            })
        } catch {
            f && y.log(`Failed to add non-enumerable property "${String(t)}" to object`, e)
        }
    }

    function D(e, t) {
        try {
            let n = t.prototype || {};
            e.prototype = t.prototype = n, M(e, "__sentry_original__", t)
        } catch {}
    }

    function w(e) {
        if (b(e)) return {
            message: e.message,
            name: e.name,
            stack: e.stack,
            ...U(e)
        };
        if (O(e)) {
            let {
                type: t,
                target: n,
                currentTarget: r,
                detail: i
            } = e;
            return {
                type: t,
                target: n,
                currentTarget: r,
                ...i ? {
                    detail: i
                } : {},
                ...U(e)
            }
        }
        return e
    }

    function U(e) {
        return x(e) ? Object.fromEntries(Object.entries(e)) : {}
    }

    function L(e) {
        if (void 0 !== t) return t ? t(e) : e();
        let n = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
        return n in l && "function" == typeof l[n] ? (t = l[n])(e) : (t = null, e())
    }

    function j() {
        return L(() => Math.random())
    }

    function $() {
        return L(() => Date.now())
    }
    e.s(["isDOMError", 0, function(e) {
        return I(e, "DOMError")
    }, "isDOMException", 0, function(e) {
        return I(e, "DOMException")
    }, "isError", 0, b, "isErrorEvent", 0, function(e) {
        return I(e, "ErrorEvent")
    }, "isEvent", 0, O, "isInstanceOf", 0, k, "isObjectLike", 0, x, "isParameterizedString", 0, N, "isPlainObject", 0, A, "isPrimitive", 0, R, "isRegExp", 0, C, "isRequest", 0, function(e) {
        return "u" > typeof Request && k(e, Request)
    }, "isString", 0, v, "isThenable", 0, P], 134454), e.s(["addNonEnumerableProperty", 0, M, "convertToPlainObject", 0, w, "extractExceptionKeysForMessage", 0, function(e) {
        let t = Object.keys(w(e));
        return t.sort(), t[0] ? t.join(", ") : "[object has no keys]"
    }, "fill", 0, function(e, t, n) {
        if (!(t in e)) return;
        let r = e[t];
        if ("function" != typeof r) return;
        let i = n(r);
        "function" == typeof i && D(i, r);
        try {
            e[t] = i
        } catch {
            f && y.log(`Failed to replace method "${t}" in object`, e)
        }
    }, "getOriginalFunction", 0, function(e) {
        return e.__sentry_original__
    }, "markFunctionWrapped", 0, D], 419369), e.s(["safeDateNow", 0, $, "safeMathRandom", 0, j, "withRandomSafeContext", 0, L], 435682);
    let B = Symbol.for("sentry.skipNormalization"),
        Y = Symbol.for("sentry.overrideNormalizationDepth"),
        F = /\(error: (.*)\)/,
        G = /captureMessage|captureException/;

    function H(...e) {
        let t = e.sort((e, t) => e[0] - t[0]).map(e => e[1]);
        return (e, n = 0, r = 0) => {
            let i = [],
                s = e.split("\n");
            for (let e = n; e < s.length; e++) {
                let n = s[e];
                n.length > 1024 && (n = n.slice(0, 1024));
                let o = F.test(n) ? n.replace(F, "$1") : n;
                if (!o.includes("Error: ")) {
                    for (let e of t) {
                        let t = e(o);
                        if (t) {
                            i.push(t);
                            break
                        }
                    }
                    if (i.length >= 50 + r) break
                }
            }
            var o = i.slice(r);
            if (!o.length) return [];
            let a = Array.from(o);
            return /sentryWrapped/.test(K(a).function || "") && a.pop(), a.reverse(), G.test(K(a).function || "") && (a.pop(), G.test(K(a).function || "") && a.pop()), a.slice(0, 50).map(e => ({
                ...e,
                filename: e.filename || K(a).filename,
                function: e.function || "?"
            }))
        }
    }

    function K(e) {
        return e[e.length - 1] || {}
    }
    let W = "<anonymous>";

    function z(e) {
        try {
            if (!e || "function" != typeof e) return W;
            return e.name || W
        } catch {
            return W
        }
    }

    function V(e) {
        let t = e?.startsWith("file://") ? e.slice(7) : e;
        return t?.match(/\/[A-Z]:/) && (t = t.slice(1)), t
    }

    function J(e, t = 100, n = 1 / 0) {
        try {
            return function e(t, n, r = 1 / 0, i = 1 / 0, s = function() {
                let e = new WeakSet;
                return [function(t) {
                    return !!e.has(t) || (e.add(t), !1)
                }, function(t) {
                    e.delete(t)
                }]
            }()) {
                let o, [a, c] = s;
                if (null == n || ["boolean", "string"].includes(typeof n) || "number" == typeof n && Number.isFinite(n)) return n;
                let u = q(t, n);
                if (!u.startsWith("[object ")) return u;
                if (n[B]) return n;
                let l = (o = n[Y], "number" == typeof o ? o : void 0),
                    p = void 0 !== l ? l : r;
                if (0 === p) return u.replace("object ", "");
                if (a(n)) return "[Circular ~]";
                if (n && "function" == typeof n.toJSON) try {
                    let t = n.toJSON();
                    return e("", t, p - 1, i, s)
                } catch {}
                let d = Array.isArray(n) ? [] : {},
                    _ = 0,
                    f = w(n);
                for (let t in f) {
                    if (!Object.prototype.hasOwnProperty.call(f, t)) continue;
                    if (_ >= i) {
                        d[t] = "[MaxProperties ~]";
                        break
                    }
                    let n = f[t];
                    d[t] = e(t, n, p - 1, i, s), _++
                }
                return c(n), d
            }("", e, t, n)
        } catch (e) {
            return {
                ERROR: `**non-serializable** (${e})`
            }
        }
    }

    function q(t, r) {
        try {
            var i;
            let t;
            if (n) {
                let e = n(r);
                if (e) return e
            }
            if (r === e.g) return "[Global]";
            if ("number" == typeof r && !Number.isFinite(r)) return `[${r}]`;
            if ("function" == typeof r) return `[Function: ${z(r)}]`;
            if ("symbol" == typeof r) return `[${String(r)}]`;
            if ("bigint" == typeof r) return `[BigInt: ${String(r)}]`;
            let s = (i = r, t = Object.getPrototypeOf(i), t?.constructor ? t.constructor.name : "null prototype");
            return `[object ${s}]`
        } catch (e) {
            return `**non-serializable** (${e})`
        }
    }

    function Q(e, t = 0) {
        return "string" != typeof e || 0 === t || e.length <= t ? e : `${e.slice(0,t)}...`
    }

    function X(e, t, n = !1) {
        return !!v(e) && (C(t) ? t.test(e) : v(t) ? n ? e === t : e.includes(t) : "function" == typeof t && t(e))
    }

    function Z(e = l.crypto || l.msCrypto) {
        try {
            if (e?.randomUUID) return L(() => e.randomUUID()).replace(/-/g, "")
        } catch {}
        return r || (r = "10000000100040008000100000000000"), r.replace(/[018]/g, e => (e ^ (15 & 16 * j()) >> e / 4).toString(16))
    }

    function ee(e) {
        return e.exception?.values?.[0]
    }

    function et(e, t) {
        let n = e.exception?.values,
            r = n?.find(e => e.mechanism?.exception_id === 0) ?? n?.[0];
        r && en(r, t)
    }

    function en(e, t) {
        let n = e.mechanism;
        e.mechanism = {
            type: "generic",
            handled: !0,
            ...n,
            ...t
        }, t && "data" in t && (e.mechanism.data = {
            ...n?.data,
            ...t.data
        })
    }

    function er() {
        return $() / 1e3
    }

    function ei() {
        return (i ?? (i = function() {
            let {
                performance: e
            } = l;
            if (!e?.now || !e.timeOrigin) return er;
            let t = e.timeOrigin;
            return () => (t + L(() => e.now())) / 1e3
        }()))()
    }
    e.s(["UNKNOWN_FUNCTION", 0, "?", "createStackParser", 0, H, "getFramesFromEvent", 0, function(e) {
        let t = e.exception;
        if (t) {
            let e = [];
            try {
                return t.values.forEach(t => {
                    t.stacktrace.frames && e.push(...t.stacktrace.frames)
                }), e
            } catch {}
        }
    }, "getFunctionName", 0, z, "normalizeStackTracePath", 0, V, "stackParserFromStackParserOptions", 0, function(e) {
        return Array.isArray(e) ? H(...e) : e
    }], 267269), e.s(["normalize", 0, J, "normalizeToSize", 0, function e(t, n = 3, r = 102400) {
        let i = J(t, n);
        return ~-encodeURI(JSON.stringify(i)).split(/%..|./).length > r ? e(t, n - 1, r) : i
    }, "setNormalizeStringifier", 0, function(e) {
        n = e
    }, "stringifyValue", 0, q], 390740), e.s(["isMatchingPattern", 0, X, "safeJoin", 0, function(e, t) {
        if (!Array.isArray(e)) return "";
        let n = [];
        for (let t = 0; t < e.length; t++) {
            let r = e[t];
            R(r) ? n.push(String(r)) : r instanceof Error ? n.push(r.message ? `${r.name}: ${r.message}` : r.name) : n.push(q(void 0, r))
        }
        return n.join(t)
    }, "snipLine", 0, function(e, t) {
        let n = e,
            r = n.length;
        if (r <= 150) return n;
        t > r && (t = r);
        let i = Math.max(t - 60, 0);
        i < 5 && (i = 0);
        let s = Math.min(i + 140, r);
        return s > r - 5 && (s = r), s === r && (i = Math.max(s - 140, 0)), n = n.slice(i, s), i > 0 && (n = `'{snip} ${n}`), s < r && (n += " {snip}"), n
    }, "stringMatchesSomePattern", 0, function(e, t = [], n = !1) {
        for (let r of t)
            if (X(e, r, n)) return !0;
        return !1
    }, "truncate", 0, Q], 39561), e.s(["addExceptionMechanism", 0, function(e, t) {
        let n = ee(e);
        n && en(n, t)
    }, "addExceptionMechanismToCapturedException", 0, et, "addExceptionTypeValue", 0, function(e, t, n) {
        let r = e.exception = e.exception || {},
            i = r.values = r.values || [],
            s = i[0] = i[0] || {};
        s.value || (s.value = t || ""), s.type || (s.type = n || "Error")
    }, "checkOrSetAlreadyCaught", 0, function(e) {
        if (function(e) {
                try {
                    return e.__sentry_captured__
                } catch {}
            }(e)) return !0;
        try {
            M(e, "__sentry_captured__", !0)
        } catch {}
        return !1
    }, "getEventDescription", 0, function(e) {
        let {
            message: t,
            event_id: n
        } = e;
        if (t) return t;
        let r = ee(e);
        return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
    }, "uuid4", 0, Z], 530598);
    let es = null;

    function eo(e) {
        let t = ei(),
            n = {
                sid: Z(),
                init: !0,
                timestamp: t,
                started: t,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => {
                    var e;
                    return e = n, {
                        sid: `${e.sid}`,
                        init: e.init,
                        started: new Date(1e3 * e.started).toISOString(),
                        timestamp: new Date(1e3 * e.timestamp).toISOString(),
                        status: e.status,
                        errors: e.errors,
                        did: "number" == typeof e.did || "string" == typeof e.did ? `${e.did}` : void 0,
                        duration: e.duration,
                        abnormal_mechanism: e.abnormal_mechanism,
                        attrs: {
                            release: e.release,
                            environment: e.environment,
                            ip_address: e.ipAddress,
                            user_agent: e.userAgent
                        }
                    }
                }
            };
        return e && ea(n, e), n
    }

    function ea(e, t = {}) {
        if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || ei(), t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = 32 === t.sid.length ? t.sid : Z()), void 0 !== t.init && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), "number" == typeof t.started && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
        else if ("number" == typeof t.duration) e.duration = t.duration;
        else {
            let t = e.timestamp - e.started;
            e.duration = t >= 0 ? t : 0
        }
        t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), "number" == typeof t.errors && (e.errors = t.errors), t.status && (e.status = t.status)
    }

    function ec(e, t) {
        let n = {};
        t ? n = {
            status: t
        } : "ok" === e.status && (n = {
            status: "exited"
        }), ea(e, n)
    }

    function eu(e, t, n = 2) {
        if (!t || "object" != typeof t || n <= 0) return t;
        if (e && 0 === Object.keys(t).length) return e;
        let r = {
            ...e
        };
        for (let e in t) Object.prototype.hasOwnProperty.call(t, e) && (r[e] = eu(r[e], t[e], n - 1));
        return r
    }

    function el() {
        return Z()
    }

    function ep() {
        return Z().substring(16)
    }
    e.s(["browserPerformanceTimeOrigin", 0, function() {
        return null === es && (es = function() {
            let {
                performance: e
            } = l;
            if (!e?.now) return;
            let t = L(() => e.now()),
                n = $(),
                r = e.timeOrigin;
            return "number" == typeof r && 3e5 > Math.abs(r + t - n) ? r : n - t
        }()), es
    }, "dateTimestampInSeconds", 0, er, "timestampInSeconds", 0, ei], 764580), e.s(["closeSession", 0, ec, "makeSession", 0, eo, "updateSession", 0, ea], 96342), e.s(["merge", 0, eu], 636933), e.s(["generateSpanId", 0, ep, "generateTraceId", 0, el], 413007);
    class ed {
        constructor() {
            this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, M(this, "refs", {}), this._propagationContext = {
                traceId: el(),
                sampleRand: j()
            }
        }
        clone() {
            let e = new ed;
            return e._breadcrumbs = [...this._breadcrumbs], e._tags = {
                ...this._tags
            }, e._attributes = {
                ...this._attributes
            }, e._extra = {
                ...this._extra
            }, e._contexts = {
                ...this._contexts
            }, this._contexts.flags && (e._contexts.flags = {
                values: [...this._contexts.flags.values]
            }), e._user = this._user, e._level = this._level, e._session = this._session, e._transactionName = this._transactionName, e._fingerprint = this._fingerprint, e._eventProcessors = [...this._eventProcessors], e._attachments = [...this._attachments], e._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata
            }, e._propagationContext = {
                ...this._propagationContext
            }, e._client = this._client, e._lastEventId = this._lastEventId, e._conversationId = this._conversationId, e.refs = {
                ...this.refs
            }, e
        }
        setClient(e) {
            this._client = e
        }
        setLastEventId(e) {
            this._lastEventId = e
        }
        getClient() {
            return this._client
        }
        lastEventId() {
            return this._lastEventId
        }
        addScopeListener(e) {
            this._scopeListeners.push(e)
        }
        addEventProcessor(e) {
            return this._eventProcessors.push(e), this
        }
        setUser(e) {
            return this._user = e || {
                email: void 0,
                id: void 0,
                ip_address: void 0,
                username: void 0
            }, this._session && ea(this._session, {
                user: e
            }), this._notifyScopeListeners(), this
        }
        getUser() {
            return this._user
        }
        setConversationId(e) {
            return this._conversationId = e || void 0, this._notifyScopeListeners(), this
        }
        setTags(e) {
            return this._tags = {
                ...this._tags,
                ...e
            }, this._notifyScopeListeners(), this
        }
        setTag(e, t) {
            return this.setTags({
                [e]: t
            })
        }
        setAttributes(e) {
            return this._attributes = {
                ...this._attributes,
                ...e
            }, this._notifyScopeListeners(), this
        }
        setAttribute(e, t) {
            return this.setAttributes({
                [e]: t
            })
        }
        removeAttribute(e) {
            return e in this._attributes && (delete this._attributes[e], this._notifyScopeListeners()), this
        }
        setExtras(e) {
            return this._extra = {
                ...this._extra,
                ...e
            }, this._notifyScopeListeners(), this
        }
        setExtra(e, t) {
            return this._extra = {
                ...this._extra,
                [e]: t
            }, this._notifyScopeListeners(), this
        }
        setFingerprint(e) {
            return this._fingerprint = e, this._notifyScopeListeners(), this
        }
        setLevel(e) {
            return this._level = e, this._notifyScopeListeners(), this
        }
        setTransactionName(e) {
            return this._transactionName = e, this._notifyScopeListeners(), this
        }
        setContext(e, t) {
            return null === t ? delete this._contexts[e] : this._contexts[e] = t, this._notifyScopeListeners(), this
        }
        setSession(e) {
            return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
        }
        getSession() {
            return this._session
        }
        update(e) {
            if (!e) return this;
            let t = "function" == typeof e ? e(this) : e,
                {
                    tags: n,
                    attributes: r,
                    extra: i,
                    user: s,
                    contexts: o,
                    level: a,
                    fingerprint: c = [],
                    propagationContext: u,
                    conversationId: l
                } = (t instanceof ed ? t.getScopeData() : A(t) ? e : void 0) || {};
            return this._tags = {
                ...this._tags,
                ...n
            }, this._attributes = {
                ...this._attributes,
                ...r
            }, this._extra = {
                ...this._extra,
                ...i
            }, this._contexts = {
                ...this._contexts,
                ...o
            }, s && Object.keys(s).length && (this._user = s), a && (this._level = a), c.length && (this._fingerprint = c), u && (this._propagationContext = u), l && (this._conversationId = l), this
        }
        addBreadcrumb(e, t) {
            let n = "number" == typeof t ? t : 100;
            if (n <= 0) return this;
            let r = {
                timestamp: er(),
                ...e,
                message: e.message ? Q(e.message, 2048) : e.message
            };
            return this._breadcrumbs.push(r), this._breadcrumbs.length > n && (this._breadcrumbs = this._breadcrumbs.slice(-n)), this._notifyScopeListeners(), this
        }
        getLastBreadcrumb() {
            return this._breadcrumbs[this._breadcrumbs.length - 1]
        }
        clearBreadcrumbs() {
            return this._breadcrumbs = [], this._notifyScopeListeners(), this
        }
        addAttachment(e) {
            return this._attachments.push(e), this
        }
        clearAttachments() {
            return this._attachments = [], this
        }
        getScopeData() {
            return {
                breadcrumbs: this._breadcrumbs,
                attachments: this._attachments,
                contexts: this._contexts,
                tags: this._tags,
                attributes: this._attributes,
                extra: this._extra,
                user: this._user,
                level: this._level,
                fingerprint: this._fingerprint || [],
                eventProcessors: this._eventProcessors,
                propagationContext: this._propagationContext,
                sdkProcessingMetadata: this._sdkProcessingMetadata,
                transactionName: this._transactionName,
                conversationId: this._conversationId
            }
        }
        setSDKProcessingMetadata(e) {
            return this._sdkProcessingMetadata = eu(this._sdkProcessingMetadata, e, 2), this
        }
        setPropagationContext(e) {
            return this._propagationContext = e, this
        }
        getPropagationContext() {
            return this._propagationContext
        }
        captureException(e, t) {
            let n = t?.event_id || Z();
            if (!this._client) return f && y.warn("No client configured on scope - will not capture exception!"), n;
            let r = Error("Sentry syntheticException");
            return this._client.captureException(e, {
                originalException: e,
                syntheticException: r,
                ...t,
                event_id: n
            }, this), n
        }
        captureMessage(e, t, n) {
            let r = n?.event_id || Z();
            if (!this._client) return f && y.warn("No client configured on scope - will not capture message!"), r;
            let i = n?.syntheticException ?? Error(e);
            return this._client.captureMessage(e, t, {
                originalException: e,
                syntheticException: i,
                ...n,
                event_id: r
            }, this), r
        }
        captureEvent(e, t) {
            let n = e.event_id || t?.event_id || Z();
            return this._client ? this._client.captureEvent(e, {
                ...t,
                event_id: n
            }, this) : f && y.warn("No client configured on scope - will not capture event!"), n
        }
        _notifyScopeListeners() {
            this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(e => {
                e(this)
            }), this._notifyingListeners = !1)
        }
    }
    let e_ = "__SENTRY_SUPPRESS_TRACING__";
    e.s(["SUPPRESS_TRACING_KEY", 0, e_], 377656);
    let ef = e => e instanceof Promise && !e[eg],
        eg = Symbol("chained PromiseLike"),
        eh = (e, t, n) => {
            let r = e.then(e => (t(e), e), e => {
                throw n(e), e
            });
            return ef(r) && ef(e) ? r : em(e, r)
        },
        em = (e, t) => {
            if (!t) return e;
            let n = !1;
            for (let r in e) {
                if (r in t) continue;
                n = !0;
                let i = e[r];
                "function" == typeof i ? Object.defineProperty(t, r, {
                    value: (...t) => i.apply(e, t),
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[r] = i
            }
            return n && Object.assign(t, {
                [eg]: !0
            }), t
        };
    e.s(["chainAndCopyPromiseLike", 0, eh], 523299);
    class eS {
        constructor(e, t) {
            let n, r;
            n = e || new ed, r = t || new ed, this._stack = [{
                scope: n
            }], this._isolationScope = r
        }
        withScope(e) {
            let t, n = this._pushScope();
            try {
                t = e(n)
            } catch (e) {
                throw this._popScope(), e
            }
            return P(t) ? eh(t, () => this._popScope(), () => this._popScope()) : (this._popScope(), t)
        }
        getClient() {
            return this.getStackTop().client
        }
        getScope() {
            return this.getStackTop().scope
        }
        getIsolationScope() {
            return this._isolationScope
        }
        getStackTop() {
            return this._stack[this._stack.length - 1]
        }
        _pushScope() {
            let e = this.getScope().clone();
            return this._stack.push({
                client: this.getClient(),
                scope: e
            }), e
        }
        _popScope() {
            return !(this._stack.length <= 1) && !!this._stack.pop()
        }
    }

    function eE() {
        let e = d(p());
        return e.stack = e.stack || new eS(_("defaultCurrentScope", () => new ed), _("defaultIsolationScope", () => new ed))
    }

    function ey(e) {
        return eE().withScope(e)
    }

    function eT(e, t) {
        let n = eE();
        return n.withScope(() => (n.getStackTop().scope = e, t(e)))
    }

    function eb(e) {
        return eE().withScope(() => e(eE().getIsolationScope()))
    }

    function eI(e) {
        return ey(t => {
            t.setSDKProcessingMetadata({
                [e_]: !0
            });
            let n = e();
            return t.setSDKProcessingMetadata({
                [e_]: void 0
            }), n
        })
    }

    function ev(e) {
        let t = d(e);
        return t.acs ? t.acs : {
            suppressTracing: eI,
            withIsolationScope: eb,
            withScope: ey,
            withSetScope: eT,
            withSetIsolationScope: (e, t) => eb(t),
            getCurrentScope: () => eE().getScope(),
            getIsolationScope: () => eE().getIsolationScope()
        }
    }

    function eN() {
        return d(p()).externalPropagationContextProvider?.()
    }

    function eR() {
        return ev(p()).getCurrentScope()
    }

    function eA() {
        return ev(p()).getIsolationScope()
    }

    function ex() {
        return _("globalScope", () => new ed)
    }

    function eO() {
        return eR().getClient()
    }

    function eC(e) {
        let t = eN();
        if (t) return {
            trace_id: t.traceId,
            span_id: t.spanId
        };
        let {
            traceId: n,
            parentSpanId: r,
            propagationSpanId: i
        } = e.getPropagationContext(), s = {
            trace_id: n,
            span_id: i || ep()
        };
        return r && (s.parent_span_id = r), s
    }
    e.s(["getAsyncContextStrategy", 0, ev], 919610), e.s(["getClient", 0, eO, "getCurrentScope", 0, eR, "getExternalPropagationContext", 0, eN, "getGlobalScope", 0, ex, "getIsolationScope", 0, eA, "getTraceContextFromScope", 0, eC, "hasExternalPropagationContext", 0, function() {
        return void 0 !== d(p()).externalPropagationContextProvider
    }, "withScope", 0, function(...e) {
        let t = ev(p());
        if (2 === e.length) {
            let [n, r] = e;
            return n ? t.withSetScope(n, r) : t.withScope(r)
        }
        return t.withScope(e[0])
    }], 932881);
    let eP = "production";
    e.s(["DEFAULT_ENVIRONMENT", 0, eP], 762783);
    let ek = Symbol.for("SentryCallbackError");

    function eM(e, t, n) {
        let r;
        try {
            r = t()
        } catch (t) {
            return eD(e, t, n)
        }
        return P(r) ? r.then(void 0, t => eD(e, t, n)) : r
    }

    function eD(e, t, n) {
        return f && y.error(e, t), n(t)
    }

    function ew(e) {
        return new eL(t => {
            t(e)
        })
    }

    function eU(e) {
        return new eL((t, n) => {
            n(e)
        })
    }
    e.s(["CALLBACK_ERROR", 0, ek, "safeCallback", 0, eM], 319074);
    class eL {
        constructor(e) {
            this._state = 0, this._handlers = [], this._runExecutor(e)
        }
        then(e, t) {
            return new eL((n, r) => {
                this._handlers.push([!1, t => {
                    if (e) try {
                        n(e(t))
                    } catch (e) {
                        r(e)
                    } else n(t)
                }, e => {
                    if (t) try {
                        n(t(e))
                    } catch (e) {
                        r(e)
                    } else r(e)
                }]), this._executeHandlers()
            })
        } catch (e) {
            return this.then(e => e, e)
        } finally(e) {
            return new eL((t, n) => {
                let r, i;
                return this.then(t => {
                    i = !1, r = t, e && e()
                }, t => {
                    i = !0, r = t, e && e()
                }).then(() => {
                    i ? n(r) : t(r)
                })
            })
        }
        _executeHandlers() {
            if (0 === this._state) return;
            let e = this._handlers.slice();
            this._handlers = [], e.forEach(e => {
                e[0] || (1 === this._state && e[1](this._value), 2 === this._state && e[2](this._value), e[0] = !0)
            })
        }
        _runExecutor(e) {
            let t = (e, t) => {
                    if (0 === this._state) {
                        if (P(t)) return void t.then(n, r);
                        this._state = e, this._value = t, this._executeHandlers()
                    }
                },
                n = e => {
                    t(1, e)
                },
                r = e => {
                    t(2, e)
                };
            try {
                e(n, r)
            } catch (e) {
                r(e)
            }
        }
    }

    function ej(e) {
        let t = l._sentryDebugIds,
            n = l._debugIds;
        if (!t && !n) return {};
        let r = t ? Object.keys(t) : [],
            i = n ? Object.keys(n) : [];
        if (c && r.length === o && i.length === a) return c;
        o = r.length, a = i.length, c = {}, s || (s = {});
        let u = (t, n) => {
            for (let r of t) {
                let t = n[r],
                    i = s?.[r];
                if (i && c && t) c[i[0]] = t, s && (s[r] = [i[0], t]);
                else if (t) {
                    let n = e(r);
                    for (let e = n.length - 1; e >= 0; e--) {
                        let i = n[e],
                            o = i?.filename;
                        if (o && c && s) {
                            c[o] = t, s[r] = [o, t];
                            break
                        }
                    }
                }
            }
        };
        return t && u(r, t), n && u(i, n), c
    }
    e.s(["rejectedSyncPromise", 0, eU, "resolvedSyncPromise", 0, ew], 981317), e.s(["getDebugImagesForResources", 0, function(e, t) {
        let n = ej(e);
        if (!n) return [];
        let r = [];
        for (let e of t) {
            let t = V(e);
            t && n[t] && r.push({
                type: "sourcemap",
                code_file: e,
                debug_id: n[t]
            })
        }
        return r
    }, "getFilenameToDebugIdMap", 0, ej], 5053);
    let e$ = /^o(\d+)\./,
        eB = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;

    function eY(e, t = !1) {
        let {
            host: n,
            path: r,
            pass: i,
            port: s,
            projectId: o,
            protocol: a,
            publicKey: c
        } = e;
        return `${a}://${c}${t&&i?`:${i}`:""}@${n}${s?`:${s}`:""}/${r?`${r}/`:r}${o}`
    }

    function eF(e) {
        let t = eB.exec(e);
        if (!t) return void h(() => {
            console.error(`Invalid Sentry Dsn: ${e}`)
        });
        let [n, r, i = "", s = "", o = "", a = ""] = t.slice(1), c = "", u = a, l = u.split("/");
        if (l.length > 1 && (c = l.slice(0, -1).join("/"), u = l.pop()), u) {
            let e = u.match(/^\d+/);
            e && (u = e[0])
        }
        return eG({
            host: s,
            pass: i,
            path: c,
            projectId: u,
            port: o,
            protocol: n,
            publicKey: r
        })
    }

    function eG(e) {
        return {
            protocol: e.protocol,
            publicKey: e.publicKey || "",
            pass: e.pass || "",
            host: e.host,
            port: e.port || "",
            path: e.path || "",
            projectId: e.projectId
        }
    }

    function eH(e) {
        let t, n = e.getOptions(),
            {
                host: r
            } = e.getDsn() || {};
        if (n.orgId) t = String(n.orgId);
        else {
            let e;
            r && (e = r.match(e$), t = e?.[1])
        }
        return t
    }

    function eK(e, t) {
        for (let n of e[1]) {
            let e = n[0].type;
            if (t(n, e)) return !0
        }
        return !1
    }

    function eW(e) {
        let t = d(l);
        return t.encodePolyfill ? t.encodePolyfill(e) : new TextEncoder().encode(e)
    }
    e.s(["dsnFromString", 0, eF, "dsnToString", 0, eY, "extractOrgIdFromClient", 0, eH, "makeDsn", 0, function(e) {
        let t = "string" == typeof e ? eF(e) : eG(e);
        if (t && function(e) {
                if (!f) return !0;
                let {
                    port: t,
                    projectId: n,
                    protocol: r
                } = e;
                return !["protocol", "publicKey", "host", "projectId"].find(t => !e[t] && (y.error(`Invalid Sentry Dsn: ${t} missing`), !0)) && (n.match(/^\d+$/) ? "http" !== r && "https" !== r ? (y.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1) : !(t && isNaN(parseInt(t, 10))) || (y.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1) : (y.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1))
            }(t)) return t
    }], 989542);
    let ez = {
        sessions: "session",
        event: "error",
        client_report: "internal",
        user_report: "default",
        profile_chunk: "profile",
        replay_event: "replay",
        replay_recording: "replay",
        check_in: "monitor",
        raw_security: "security",
        log: "log_item",
        trace_metric: "metric"
    };

    function eV(e) {
        return "replay_event" === e ? "replay" : e || "error"
    }

    function eJ(e, t = !1) {
        let n = {};
        for (let [r, i] of Object.entries(e ?? {})) {
            let e = function(e, t) {
                let {
                    value: n,
                    unit: r
                } = "object" == typeof e && null != e && !Array.isArray(e) && Object.keys(e).includes("value") ? e : {
                    value: e,
                    unit: void 0
                }, i = function(e) {
                    if (Array.isArray(e)) return {
                        value: e,
                        type: "array"
                    };
                    let t = "string" == typeof e ? "string" : "boolean" == typeof e ? "boolean" : "number" != typeof e || Number.isNaN(e) ? null : Number.isInteger(e) ? "integer" : "double";
                    if (t) return {
                        value: e,
                        type: t
                    }
                }(n), s = r && "string" == typeof r ? {
                    unit: r
                } : {};
                if (i) return {
                    ...i,
                    ...s
                };
                if (!t || "skip-undefined" === t && void 0 === n) return;
                let o = "";
                try {
                    o = JSON.stringify(n) ?? ""
                } catch {}
                return {
                    value: o,
                    type: "string",
                    ...s
                }
            }(i, t);
            e && (n[r] = e)
        }
        return n
    }

    function eq(e) {
        return "string" == typeof e ? 2 * e.length : "boolean" == typeof e ? 4 : 8 * ("number" == typeof e)
    }
    e.s(["addItemToEnvelope", 0, function(e, t) {
        let [n, r] = e;
        return [n, [...r, t]]
    }, "createAttachmentEnvelopeItem", 0, function(e) {
        let t = "string" == typeof e.data ? eW(e.data) : e.data;
        return [{
            type: "attachment",
            length: t.length,
            filename: e.filename,
            content_type: e.contentType,
            attachment_type: e.attachmentType
        }, t]
    }, "createEnvelope", 0, function(e, t = []) {
        return [e, t]
    }, "createEventEnvelopeHeaders", 0, function(e, t, n, r) {
        let i = e.sdkProcessingMetadata?.dynamicSamplingContext;
        return {
            event_id: e.event_id,
            sent_at: new Date($()).toISOString(),
            ...t && {
                sdk: t
            },
            ...!!n && r && {
                dsn: eY(r)
            },
            ...i && {
                trace: i
            }
        }
    }, "envelopeContainsItemType", 0, function(e, t) {
        return eK(e, (e, n) => t.includes(n))
    }, "envelopeItemTypeToDataCategory", 0, function(e) {
        return e in ez ? ez[e] : e
    }, "forEachEnvelopeItem", 0, eK, "getDataCategoryByType", 0, eV, "getSdkMetadataForEnvelopeHeader", 0, function(e) {
        if (!e?.sdk) return;
        let {
            name: t,
            version: n
        } = e.sdk;
        return {
            name: t,
            version: n
        }
    }, "serializeEnvelope", 0, function(e) {
        let [t, n] = e, r = JSON.stringify(t);

        function i(e) {
            "string" == typeof r ? r = "string" == typeof e ? r + e : [eW(r), e] : r.push("string" == typeof e ? eW(e) : e)
        }
        for (let e of n) {
            let [t, n] = e;
            if (i(`
${JSON.stringify(t)}
`), "string" == typeof n || n instanceof Uint8Array) i(n);
            else {
                let e;
                try {
                    e = JSON.stringify(n)
                } catch {
                    e = JSON.stringify(J(n))
                }
                i(e)
            }
        }
        return "string" == typeof r ? r : function(e) {
            let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
                n = 0;
            for (let r of e) t.set(r, n), n += r.length;
            return t
        }(r)
    }], 597968), e.s(["estimateTypedAttributesSizeInBytes", 0, function(e) {
        if (!e) return 0;
        let t = 0;
        for (let [n, r] of Object.entries(e)) {
            t += 2 * n.length, t += 2 * r.type.length, t += (r.unit?.length ?? 0) * 2;
            let e = r.value;
            Array.isArray(e) ? t += eq(e[0]) * e.length : R(e) ? t += eq(e) : t += 100
        }
        return t
    }, "serializeAttributes", 0, eJ], 445972);
    let eQ = "sentry.segment.name.source";
    e.s(["BROWSER_NAVIGATION_ID", 0, "browser.navigation.id", "BROWSER_NAVIGATION_TYPE", 0, "browser.navigation.type", "BROWSER_PAINT_TYPE", 0, "browser.paint.type", "BROWSER_WEB_VITAL_INP_INTERACTION_TYPE", 0, "browser.web_vital.inp.interaction_type", "BROWSER_WEB_VITAL_INP_TARGET", 0, "browser.web_vital.inp.target", "CODE_FILE_PATH", 0, "code.file.path", "CODE_FUNCTION_NAME", 0, "code.function.name", "HTTP_REQUEST_HEADER_KEY_BASE", 0, "http.request.header", "HTTP_REQUEST_METHOD", 0, "http.request.method", "HTTP_REQUEST_SAME_ORIGIN", 0, "http.request.same_origin", "HTTP_RESPONSE_BODY_SIZE", 0, "http.response.body.size", "HTTP_RESPONSE_SIZE", 0, "http.response.size", "HTTP_RESPONSE_STATUS_CODE", 0, "http.response.status_code", "HTTP_ROUTE", 0, "http.route", "NETWORK_CONNECTION_EFFECTIVE_TYPE", 0, "network.connection.effective_type", "NETWORK_CONNECTION_RTT", 0, "network.connection.rtt", "NETWORK_CONNECTION_TYPE", 0, "network.connection.type", "SENTRY_IDLE_SPAN_FINISH_REASON", 0, "sentry.idle_span_finish_reason", "SENTRY_IS_LOCALHOST", 0, "sentry.is_localhost", "SENTRY_OP", 0, "sentry.op", "SENTRY_ORIGIN", 0, "sentry.origin", "SENTRY_REPLAY_ID", 0, "sentry.replay_id", "SENTRY_SDK_NAME", 0, "sentry.sdk.name", "SENTRY_SDK_VERSION", 0, "sentry.sdk.version", "SENTRY_SEGMENT_ID", 0, "sentry.segment.id", "SENTRY_SEGMENT_NAME", 0, "sentry.segment.name", "SENTRY_SEGMENT_NAME_SOURCE", 0, eQ, "SENTRY_TRACE_LIFECYCLE", 0, "sentry.trace_lifecycle", "SENTRY_TRANSACTION", 0, "sentry.transaction", "SERVER_ADDRESS", 0, "server.address", "SERVER_PORT", 0, "server.port", "UI_COMPONENT_NAME", 0, "ui.component_name", "URL_DOMAIN", 0, "url.domain", "URL_FRAGMENT", 0, "url.fragment", "URL_FULL", 0, "url.full", "URL_PATH", 0, "url.path", "URL_PORT", 0, "url.port", "URL_QUERY", 0, "url.query", "URL_SCHEME", 0, "url.scheme", "URL_TEMPLATE", 0, "url.template", "USER_AGENT_ORIGINAL", 0, "user_agent.original"], 351384);
    let eX = "sentry.sample_rate",
        eZ = "sentry.previous_trace_sample_rate",
        e0 = "sentry.op",
        e1 = "sentry.origin",
        e9 = "sentry.status.message";
    e.s(["GEN_AI_CONVERSATION_ID_ATTRIBUTE", 0, "gen_ai.conversation.id", "SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME", 0, "sentry.exclusive_time", "SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD", 0, "http.request.method", "SEMANTIC_ATTRIBUTE_PROFILE_ID", 0, "sentry.profile_id", "SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME", 0, "sentry.custom_span_name", "SEMANTIC_ATTRIBUTE_SENTRY_ENVIRONMENT", 0, "sentry.environment", "SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON", 0, "sentry.idle_span_finish_reason", "SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT", 0, "sentry.measurement_unit", "SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE", 0, "sentry.measurement_value", "SEMANTIC_ATTRIBUTE_SENTRY_OP", 0, e0, "SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN", 0, e1, "SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE", 0, eZ, "SEMANTIC_ATTRIBUTE_SENTRY_RELEASE", 0, "sentry.release", "SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE", 0, eX, "SEMANTIC_ATTRIBUTE_SENTRY_SDK_INTEGRATIONS", 0, "sentry.sdk.integrations", "SEMANTIC_ATTRIBUTE_SENTRY_STATUS_MESSAGE", 0, e9, "SEMANTIC_ATTRIBUTE_USER_EMAIL", 0, "user.email", "SEMANTIC_ATTRIBUTE_USER_ID", 0, "user.id", "SEMANTIC_ATTRIBUTE_USER_IP_ADDRESS", 0, "user.ip_address", "SEMANTIC_ATTRIBUTE_USER_USERNAME", 0, "user.name", "SEMANTIC_LINK_ATTRIBUTE_LINK_TYPE", 0, "sentry.link.type"], 551364);
    let e2 = ["ok", "deadline_exceeded", "unauthenticated", "permission_denied", "not_found", "resource_exhausted", "invalid_argument", "unimplemented", "unavailable", "internal_error", "unknown_error", "cancelled", "already_exists", "failed_precondition", "aborted", "out_of_range", "data_loss"];

    function e4(e) {
        return "ok" !== e && e2.includes(e)
    }

    function e3(e) {
        try {
            let t = l.WeakRef;
            if ("function" == typeof t) return new t(e)
        } catch {}
        return e
    }

    function e5(e) {
        if (e) {
            if ("object" == typeof e && "deref" in e && "function" == typeof e.deref) try {
                return e.deref()
            } catch {
                return
            }
            return e
        }
    }
    e.s(["SPAN_STATUS_ERROR", 0, 2, "SPAN_STATUS_OK", 0, 1, "SPAN_STATUS_UNSET", 0, 0, "isStatusErrorMessageValid", 0, e4, "setHttpStatus", 0, function(e, t) {
        e.setAttribute("http.response.status_code", t);
        let n = function(e) {
            if (e < 400 && e >= 100) return {
                code: 1
            };
            if (e >= 400 && e < 500) switch (e) {
                case 401:
                    return {
                        code: 2, message: "unauthenticated"
                    };
                case 403:
                    return {
                        code: 2, message: "permission_denied"
                    };
                case 404:
                    return {
                        code: 2, message: "not_found"
                    };
                case 409:
                    return {
                        code: 2, message: "already_exists"
                    };
                case 413:
                    return {
                        code: 2, message: "failed_precondition"
                    };
                case 429:
                    return {
                        code: 2, message: "resource_exhausted"
                    };
                case 499:
                    return {
                        code: 2, message: "cancelled"
                    };
                default:
                    return {
                        code: 2, message: "invalid_argument"
                    }
            }
            if (e >= 500 && e < 600) switch (e) {
                case 501:
                    return {
                        code: 2, message: "unimplemented"
                    };
                case 503:
                    return {
                        code: 2, message: "unavailable"
                    };
                case 504:
                    return {
                        code: 2, message: "deadline_exceeded"
                    }
            }
            return {
                code: 2,
                message: "internal_error"
            }
        }(t);
        "unknown_error" !== n.message && e.setStatus(n)
    }], 597121);
    let e8 = "_sentryScope",
        e6 = "_sentryIsolationScope",
        e7 = Symbol.for("sentry.tracerProviderSpan");

    function te(e) {
        return {
            scope: e[e8],
            isolationScope: e5(e[e6])
        }
    }
    e.s(["getCapturedScopesOnSpan", 0, te, "setCapturedScopesOnSpan", 0, function(e, t, n) {
        e && (M(e, e6, e3(n)), M(e, e8, t))
    }, "spanIsTracerProviderSpan", 0, function(e) {
        return !0 === e[e7]
    }], 121284);
    let tt = "sentry-";

    function tn(e) {
        let t = tr(e);
        if (!t) return;
        let n = Object.entries(t).reduce((e, [t, n]) => (t.startsWith(tt) && (e[t.slice(tt.length)] = n), e), {});
        return Object.keys(n).length > 0 ? n : void 0
    }

    function tr(e) {
        if (e && (v(e) || Array.isArray(e))) return Array.isArray(e) ? e.reduce((e, t) => (Object.entries(ti(t)).forEach(([t, n]) => {
            e[t] = n
        }), e), {}) : ti(e)
    }

    function ti(e) {
        return e.split(",").map(e => {
            let t = e.indexOf("=");
            return -1 === t ? [] : [e.slice(0, t), e.slice(t + 1)].map(e => {
                try {
                    return decodeURIComponent(e.trim())
                } catch {
                    return
                }
            })
        }).reduce((e, [t, n]) => (t && n && (e[t] = n), e), {})
    }

    function ts(e) {
        if ("boolean" == typeof e) return Number(e);
        let t = "string" == typeof e ? parseFloat(e) : e;
        if (!("number" != typeof t || isNaN(t)) && !(t < 0) && !(t > 1)) return t
    }
    e.s(["SENTRY_BAGGAGE_KEY_PREFIX", 0, tt, "baggageHeaderToDynamicSamplingContext", 0, tn, "dynamicSamplingContextToSentryBaggageHeader", 0, function(e) {
        if (e) {
            var t = Object.entries(e).reduce((e, [t, n]) => (n && (e[`${tt}${t}`] = n), e), {});
            return 0 !== Object.keys(t).length ? Object.entries(t).reduce((e, [t, n], r) => {
                let i = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`,
                    s = 0 === r ? i : `${e},${i}`;
                return s.length > 8192 ? (f && y.warn(`Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`), e) : s
            }, "") : void 0
        }
    }, "parseBaggageHeader", 0, tr], 390391), e.s(["parseSampleRate", 0, ts], 820899);
    let to = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

    function ta(e = el(), t = ep(), n) {
        let r = "";
        return void 0 !== n && (r = n ? "-1" : "-0"), `${e}-${t}${r}`
    }

    function tc(e = el(), t = ep(), n) {
        return `00-${e}-${t}-${n?"01":"00"}`
    }
    e.s(["TRACEPARENT_REGEXP", 0, to, "generateSentryTraceHeader", 0, ta, "generateTraceparentHeader", 0, tc, "propagationContextFromHeaders", 0, function(e, t) {
        let n = function(e) {
                let t;
                if (!e) return;
                let n = e.match(to);
                if (n) return "1" === n[3] ? t = !0 : "0" === n[3] && (t = !1), {
                    traceId: n[1],
                    parentSampled: t,
                    parentSpanId: n[2]
                }
            }(e),
            r = tn(t);
        if (!n?.traceId) return {
            traceId: el(),
            sampleRand: j()
        };
        let i = function(e, t) {
            let n = ts(t?.sample_rand);
            if (void 0 !== n) return n;
            let r = ts(t?.sample_rate);
            return r && e?.parentSampled !== void 0 ? e.parentSampled ? j() * r : r + j() * (1 - r) : j()
        }(n, r);
        r && (r.sample_rand = i.toString());
        let {
            traceId: s,
            parentSpanId: o,
            parentSampled: a
        } = n;
        return {
            traceId: s,
            parentSpanId: o,
            sampled: a,
            dsc: r || {},
            sampleRand: i
        }
    }, "shouldContinueTrace", 0, function(e, t) {
        let n = eH(e);
        return t && n && t !== n ? (y.log(`Won't continue trace because org IDs don't match (incoming baggage: ${t}, SDK options: ${n})`), !1) : !e.getOptions().strictTraceContinuation || (!t || !!n) && (!!t || !n) || (y.log(`Starting a new trace because strict trace continuation is enabled but one org ID is missing (incoming baggage: ${t}, Sentry client: ${n})`), !1)
    }], 798844);
    let tu = "span";

    function tl(e) {
        return e5(e.refs[tu])
    }

    function tp(e) {
        let {
            spanId: t,
            traceId: n,
            isRemote: r
        } = e.spanContext(), i = r ? t : th(e).parent_span_id, s = te(e).scope;
        return {
            parent_span_id: i,
            span_id: r ? s?.getPropagationContext().propagationSpanId || ep() : t,
            trace_id: n
        }
    }

    function td(e) {
        return e && e.length > 0 ? e.map(({
            context: {
                spanId: e,
                traceId: t,
                traceFlags: n,
                ...r
            },
            attributes: i
        }) => ({
            span_id: e,
            trace_id: t,
            sampled: 1 === n,
            attributes: i,
            ...r
        })) : void 0
    }

    function t_(e) {
        return e?.length ? e.map(({
            context: {
                spanId: e,
                traceId: t,
                traceFlags: n
            },
            attributes: r
        }) => ({
            span_id: e,
            trace_id: t,
            sampled: 1 === n,
            attributes: r
        })) : void 0
    }

    function tf(e) {
        return "number" == typeof e ? tg(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? tg(e.getTime()) : ei()
    }

    function tg(e) {
        return e > 0x2540be3ff ? e / 1e3 : e
    }

    function th(e) {
        if (tE(e)) return e.getStaticSpanJSON();
        let {
            spanId: t,
            traceId: n
        } = e.spanContext();
        if (tS(e)) {
            let {
                attributes: r,
                startTime: i,
                name: s,
                endTime: o,
                status: a,
                links: c
            } = e;
            return {
                span_id: t,
                trace_id: n,
                data: r,
                description: s,
                parent_span_id: tm(e),
                start_timestamp: tf(i),
                timestamp: tf(o) || void 0,
                status: tT(a),
                op: r[e0],
                origin: r[e1],
                links: td(c)
            }
        }
        return {
            span_id: t,
            trace_id: n,
            start_timestamp: 0,
            status: "ok",
            data: {}
        }
    }

    function tm(e) {
        return "parentSpanId" in e ? e.parentSpanId : "parentSpanContext" in e ? e.parentSpanContext?.spanId : void 0
    }

    function tS(e) {
        return !!e.attributes && !!e.startTime && !!e.name && !!e.endTime && !!e.status
    }

    function tE(e) {
        return "function" == typeof e.getSpanJSON
    }

    function ty(e) {
        let {
            traceFlags: t
        } = e.spanContext();
        return 1 === t
    }

    function tT(e) {
        return e && 0 !== e.code && 1 !== e.code ? e.message && e4(e.message) ? e.message : "internal_error" : "ok"
    }

    function tb(e) {
        return e && 1 !== e.code && 0 !== e.code && "cancelled" !== e.message ? "error" : "ok"
    }

    function tI(e, t) {
        let n = "error" === tb(t) ? t?.message : void 0;
        return {
            ...n && {
                [e9]: n
            },
            ...e
        }
    }
    e.s(["_getSpanForScope", 0, tl, "_setSpanForScope", 0, function(e, t) {
        t ? e.refs[tu] = e3(t) : delete e.refs[tu]
    }], 108922);
    let tv = "_sentryChildSpans",
        tN = "_sentryRootSpan",
        tR = tA;

    function tA(e) {
        return e[tN] || e
    }

    function tx(e) {
        return e === tA(e)
    }

    function tO(e) {
        let t = ev(p());
        return t.getActiveSpan ? t.getActiveSpan(e) : tl(e || eR())
    }
    e.s(["INTERNAL_getSegmentSpan", 0, tA, "INTERNAL_setSegmentNameSourceIfSegment", 0, function(e, t) {
        tx(e) && e.setAttribute(eQ, t)
    }, "TRACE_FLAG_NONE", 0, 0, "TRACE_FLAG_SAMPLED", 0, 1, "addChildSpanToSpan", 0, function(e, t) {
        let n = e[tN] || e;
        M(t, tN, n), t.setAttribute(eQ, void 0), !ty(e) || (e.isRecording() || n.isRecording()) && (e[tv] ? e[tv].add(t) : M(e, tv, new Set([t])))
    }, "addStatusMessageAttribute", 0, tI, "convertSpanLinksForEnvelope", 0, td, "getActiveSpan", 0, tO, "getRootSpan", 0, tR, "getSimpleStatus", 0, tb, "getSpanDescendants", 0, function(e) {
        let t = new Set;
        return ! function e(n) {
            if (!t.has(n) && ty(n))
                for (let r of (t.add(n), n[tv] ? Array.from(n[tv]) : [])) e(r)
        }(e), Array.from(t)
    }, "getStatusMessage", 0, tT, "getStreamedSpanLinks", 0, t_, "removeChildSpanFromSpan", 0, function(e, t) {
        e[tv] && e[tv].delete(t)
    }, "spanIsSampled", 0, ty, "spanIsSegment", 0, tx, "spanTimeInputToSeconds", 0, tf, "spanToJSON", 0, function(e) {
        if (tE(e)) return e.getSpanJSON();
        let {
            spanId: t,
            traceId: n
        } = e.spanContext();
        if (tS(e)) {
            let {
                attributes: r,
                startTime: i,
                name: s,
                endTime: o,
                status: a,
                links: c
            } = e;
            return {
                name: s,
                span_id: t,
                trace_id: n,
                parent_span_id: tm(e),
                start_timestamp: tf(i),
                end_timestamp: tf(o) || void 0,
                is_segment: tx(e),
                status: tb(a),
                attributes: tI(r, a),
                links: t_(c)
            }
        }
        return {
            span_id: t,
            trace_id: n,
            start_timestamp: 0,
            name: "",
            status: "ok",
            is_segment: tx(e),
            attributes: {}
        }
    }, "spanToStaticSpanJSON", 0, th, "spanToTraceContext", 0, tp, "spanToTraceHeader", 0, function(e) {
        let {
            traceId: t,
            spanId: n
        } = e.spanContext();
        return ta(t, n, ty(e))
    }, "spanToTraceparentHeader", 0, function(e) {
        let {
            traceId: t,
            spanId: n
        } = e.spanContext();
        return tc(t, n, ty(e))
    }, "spanToTransactionTraceContext", 0, function(e) {
        let {
            spanId: t,
            traceId: n
        } = e.spanContext(), {
            data: r,
            op: i,
            parent_span_id: s,
            status: o,
            origin: a,
            links: c
        } = th(e);
        return {
            parent_span_id: s,
            span_id: t,
            trace_id: n,
            data: r,
            op: i,
            status: o,
            origin: a,
            links: c
        }
    }, "streamedSpanJsonToSerializedSpan", 0, function(e) {
        return {
            ...e,
            end_timestamp: e.end_timestamp ?? e.start_timestamp,
            attributes: eJ(e.attributes),
            links: e.links?.map(e => ({
                ...e,
                attributes: eJ(e.attributes)
            }))
        }
    }], 511091);
    let tC = new WeakMap;

    function tP(e) {
        return R(e) ? void 0 : e
    }

    function tk(e, t, n) {
        let r = tP(t.originalException),
            i = r && tC.get(r);
        if (!i) return;
        let s = e.contexts?.trace;
        (s?.trace_id ?? (n && eC(n).trace_id)) === i.trace_id && (e.contexts = {
            ...e.contexts,
            trace: {
                ...s,
                ...i
            }
        })
    }

    function tM(e) {
        if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
        let t = e || eO()?.getOptions();
        return !!t && (null != t.tracesSampleRate || !!t.tracesSampler)
    }
    e.s(["applyEscapedErrorSpanToEvent", 0, tk, "recordEscapedErrorSpan", 0, function(e, t) {
        let n = tP(e);
        !n || !ty(t) || tC.has(n) || tC.set(n, tp(t))
    }], 89268), e.s(["hasSpansEnabled", 0, tM], 85971);
    let tD = Symbol.for("sentry.nonRecordingSpan");

    function tw(e) {
        return !!e && !0 === e[tD]
    }
    e.s(["SentryNonRecordingSpan", 0, class {
        constructor(e = {}) {
            this._traceId = e.traceId || el(), this._spanId = e.spanId || ep(), this.dropReason = e.dropReason, M(this, tD, !0)
        }
        spanContext() {
            return {
                spanId: this._spanId,
                traceId: this._traceId,
                traceFlags: 0
            }
        }
        end(e) {}
        setAttribute(e, t) {
            return this
        }
        setAttributes(e) {
            return this
        }
        setStatus(e) {
            return this
        }
        updateName(e) {
            return this
        }
        isRecording() {
            return !1
        }
        addEvent(e, t, n) {
            return this
        }
        addLink(e) {
            return this
        }
        addLinks(e) {
            return this
        }
        recordException(e, t) {}
    }, "spanIsNonRecordingSpan", 0, tw], 143829);
    let tU = "_frozenDsc";

    function tL(e, t) {
        let n = t.getOptions(),
            {
                publicKey: r
            } = t.getDsn() || {},
            i = {
                environment: n.environment || eP,
                release: n.release,
                public_key: r,
                trace_id: e,
                org_id: eH(t)
            };
        return t.emit("createDsc", i), i
    }

    function tj(e, t) {
        if (eN()) return;
        let n = t.getPropagationContext();
        return n.dsc || tL(n.traceId, e)
    }

    function t$(e) {
        let t = eO();
        if (!t) return {};
        let n = tR(e),
            r = th(n),
            i = r.data,
            s = n.spanContext().traceState,
            o = s?.get("sentry.sample_rate") ?? i[eX] ?? i[eZ];

        function a(e) {
            return ("number" == typeof o || "string" == typeof o) && (e.sample_rate = `${o}`), e
        }
        let c = n[tU];
        if (c) return a(c);
        let u = tw(n),
            l = u && "ignored" === n.dropReason;
        if (u && (!tM(t.getOptions()) || l)) {
            let e = te(n).scope,
                r = e && tj(t, e);
            if (r) {
                let e = {
                    ...r
                };
                return l && (e.sampled = "false"), a(e)
            }
        }
        let p = s?.get("sentry.dsc"),
            d = p && tn(p);
        if (d) return a(d);
        let _ = tL(e.spanContext().traceId, t),
            f = i[eQ],
            g = r.description;
        return "url" !== f && g && (_.transaction = g), tM() && (_.sampled = String(ty(n)), _.sample_rand = s?.get("sentry.sample_rand") ?? te(n).scope?.getPropagationContext().sampleRand.toString()), a(_), t.emit("createDsc", _, n), _
    }

    function tB(e, t) {
        var n, r, i, s, o, a;
        let c, {
            fingerprint: u,
            breadcrumbs: l,
            sdkProcessingMetadata: p
        } = t;
        (function(e, t) {
            let {
                extra: n,
                tags: r,
                user: i,
                contexts: s,
                level: o,
                transactionName: a
            } = t;
            Object.keys(n).length && (e.extra = {
                ...n,
                ...e.extra
            }), Object.keys(r).length && (e.tags = {
                ...r,
                ...e.tags
            }), Object.keys(i).length && (e.user = {
                ...i,
                ...e.user
            }), Object.keys(s).length && (e.contexts = {
                ...s,
                ...e.contexts
            }), o && (e.level = o), a && "transaction" !== e.type && (e.transaction = a)
        })(e, t), n = e, r = u, n.fingerprint = n.fingerprint ? Array.isArray(n.fingerprint) ? n.fingerprint : [n.fingerprint] : [], r && (n.fingerprint = n.fingerprint.concat(r)), n.fingerprint.length || delete n.fingerprint, i = e, s = l, c = [...i.breadcrumbs || [], ...s], i.breadcrumbs = c.length ? c : void 0, o = e, a = p, o.sdkProcessingMetadata = {
            ...o.sdkProcessingMetadata,
            ...a
        }
    }

    function tY(e, t) {
        let {
            extra: n,
            tags: r,
            attributes: i,
            user: s,
            contexts: o,
            level: a,
            sdkProcessingMetadata: c,
            breadcrumbs: u,
            fingerprint: l,
            eventProcessors: p,
            attachments: d,
            propagationContext: _,
            transactionName: f
        } = t;
        tF(e, "extra", n), tF(e, "tags", r), tF(e, "attributes", i), tF(e, "user", s), tF(e, "contexts", o), e.sdkProcessingMetadata = eu(e.sdkProcessingMetadata, c, 2), a && (e.level = a), f && (e.transactionName = f), u.length && (e.breadcrumbs = [...e.breadcrumbs, ...u]), l.length && (e.fingerprint = [...e.fingerprint, ...l]), p.length && (e.eventProcessors = [...e.eventProcessors, ...p]), d.length && (e.attachments = [...e.attachments, ...d]), e.propagationContext = {
            ...e.propagationContext,
            ..._
        }
    }

    function tF(e, t, n) {
        e[t] = eu(e[t], n, 1)
    }

    function tG(e, t) {
        let n = ex().getScopeData();
        return e && tY(n, e.getScopeData()), t && tY(n, t.getScopeData()), n
    }

    function tH(e, t) {
        e.contexts = {
            trace: tp(t),
            ...e.contexts
        }, e.sdkProcessingMetadata = {
            dynamicSamplingContext: t$(t),
            ...e.sdkProcessingMetadata
        };
        let n = th(tR(t)).description;
        n && !e.transaction && "transaction" === e.type && (e.transaction = n)
    }

    function tK(e) {
        if (e) {
            var t;
            return (t = e) instanceof ed || "function" == typeof t || Object.keys(e).some(e => tW.includes(e)) ? {
                captureContext: e
            } : e
        }
    }
    e.s(["freezeDscOnSpan", 0, function(e, t) {
        M(e, tU, t)
    }, "getDynamicSamplingContextFromScope", 0, tj, "getDynamicSamplingContextFromSpan", 0, t$], 785509), e.s(["applyScopeDataToEvent", 0, tB, "applySpanToEvent", 0, tH, "getCombinedScopeData", 0, tG], 646162);
    let tW = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"];

    function tz() {
        let e = eA(),
            t = eR().getSession() || e.getSession();
        t && ec(t), tV(), e.setSession()
    }

    function tV() {
        let e = eA(),
            t = eO(),
            n = e.getSession();
        n && t && t.captureSession(n)
    }
    e.s(["parseEventHintOrCaptureContext", 0, tK, "prepareEvent", 0, function(e, t, n, r, i, s) {
        var o, a, c;
        let u, {
                normalizeDepth: l = 3,
                normalizeMaxBreadth: p = 1e3
            } = e,
            d = {
                ...t,
                event_id: t.event_id || n.event_id || Z(),
                timestamp: t.timestamp || er()
            },
            _ = n.integrations || e.integrations.map(e => e.name);
        (function(e, t) {
            let {
                environment: n,
                release: r,
                dist: i,
                maxValueLength: s
            } = t;
            e.environment = e.environment || n || eP, !e.release && r && (e.release = r), !e.dist && i && (e.dist = i);
            let o = e.request;
            o?.url && s && (o.url = Q(o.url, s)), s && e.exception?.values?.forEach(e => {
                e.value && (e.value = Q(e.value, s))
            })
        })(d, e), o = d, (a = _).length > 0 && (o.sdk = o.sdk || {}, o.sdk.integrations = [...o.sdk.integrations || [], ...a]), i && i.emit("applyFrameMetadata", t), void 0 === t.type && (c = d, u = ej(e.stackParser), c.exception?.values?.forEach(e => {
            e.stacktrace?.frames?.forEach(e => {
                e.filename && (e.debug_id = u[e.filename])
            })
        }));
        let g = function(e, t) {
            if (!t) return e;
            let n = e ? e.clone() : new ed;
            return n.update(t), n
        }(r, n.captureContext);
        n.mechanism && et(d, n.mechanism);
        let h = i ? i.getEventProcessors() : [],
            m = tG(s, g),
            S = [...n.attachments || [], ...m.attachments];
        S.length && (n.attachments = S), tB(d, m);
        let E = tO(g);
        E && tH(d, E), tk(d, n, g);
        let T = [...h, ...m.eventProcessors];
        return (n.data && !0 === n.data.__sentry__ ? ew(d) : function(e, t, n, r = 0, i) {
            try {
                let s = function e(t, n, r, i, s) {
                    let o = r[i];
                    if (!t || !o) return t;
                    let a = `Event processor "${o.id||"?"}"`,
                        c = !1,
                        u = eM(f ? `${a} threw an error, dropping event:` : "", () => o({
                            ...t
                        }, n), () => (c = !0, null));
                    return (f && null === u && y.log(`${a} dropped event`), P(u)) ? u.then(t => t ? e(t, n, r, i + 1, s) : (s?.(c ? "callback_error" : "event_processor"), null)) : u ? e(u, n, r, i + 1, s) : (s?.(c ? "callback_error" : "event_processor"), null)
                }(t, n, e, r, i);
                return P(s) ? s : ew(s)
            } catch (e) {
                return eU(e)
            }
        }(T, d, n, 0, e => {
            i && (i.recordDroppedEvent(e, eV(t.type)), "transaction" === t.type && i.recordDroppedEvent(e, "span", 1 + (t.spans || []).length))
        })).then(e => e ? (function(e) {
            let t = {};
            if (e.exception?.values?.forEach(e => {
                    e.stacktrace?.frames?.forEach(e => {
                        e.debug_id && (e.abs_path ? t[e.abs_path] = e.debug_id : e.filename && (t[e.filename] = e.debug_id), delete e.debug_id)
                    })
                }), 0 === Object.keys(t).length) return;
            e.debug_meta = e.debug_meta || {}, e.debug_meta.images = e.debug_meta.images || [];
            let n = e.debug_meta.images;
            Object.entries(t).forEach(([e, t]) => {
                n.push({
                    type: "sourcemap",
                    code_file: e,
                    debug_id: t
                })
            })
        }(e), "number" == typeof l && l > 0) ? function(e, t, n) {
            if (!e) return null;
            let r = {
                ...e,
                ...e.breadcrumbs && {
                    breadcrumbs: e.breadcrumbs.map(e => ({
                        ...e,
                        ...e.data && {
                            data: J(e.data, t, n)
                        }
                    }))
                },
                ...e.user && {
                    user: J(e.user, t, n)
                },
                ...e.contexts && {
                    contexts: J(e.contexts, t, n)
                },
                ...e.extra && {
                    extra: J(e.extra, t, n)
                }
            };
            return e.contexts?.trace && r.contexts && (r.contexts.trace = e.contexts.trace, e.contexts.trace.data && (r.contexts.trace.data = J(e.contexts.trace.data, t, n))), e.spans && (r.spans = e.spans.map(e => ({
                ...e,
                ...e.data && {
                    data: J(e.data, t, n)
                }
            }))), e.contexts?.flags && r.contexts && (r.contexts.flags = J(e.contexts.flags, 3, n)), r
        }(e, l, p) : e : null)
    }], 151348), e.s(["addEventProcessor", 0, function(e) {
        eA().addEventProcessor(e)
    }, "captureEvent", 0, function(e, t) {
        return eR().captureEvent(e, t)
    }, "captureException", 0, function(e, t) {
        return eR().captureException(e, tK(t))
    }, "captureSession", 0, function(e = !1) {
        e ? tz() : tV()
    }, "isEnabled", 0, function() {
        let e = eO();
        return e?.getOptions().enabled !== !1 && !!e?.getTransport()
    }, "setContext", 0, function(e, t) {
        eA().setContext(e, t)
    }, "startSession", 0, function(e) {
        let t = eA(),
            {
                user: n
            } = tG(t, eR()),
            {
                userAgent: r
            } = l.navigator || {},
            i = eo({
                user: n,
                ...r && {
                    userAgent: r
                },
                ...e
            }),
            s = t.getSession();
        return s?.status === "ok" && ea(s, {
            status: "exited"
        }), tz(), t.setSession(i), i
    }], 309578)
}]);

//# debugId=2c5b0d03-8c7d-9751-a235-5925bb3f6dbe