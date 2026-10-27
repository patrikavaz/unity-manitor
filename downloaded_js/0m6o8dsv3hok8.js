;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "aad44963-8014-663d-b876-9425c20f0b40")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 309578, 920618, 414542, 993448, 997629, 432764, 134454, 419369, 396450, 267269, 390740, 39561, 530598, 764580, 96342, 636933, 413007, 377656, 523299, 919610, 932881, 762783, 319074, 981317, 5053, 989542, 597968, 445972, 351384, 551364, 597121, 121284, 185658, 820899, 798844, 108922, 511091, 89268, 85971, 143829, 785509, 646162, 151348, t => {
    "use strict";
    let e, n, r, i, s, o, a, c, u = "11.1.0";
    t.s(["f", 0, u], 920618);
    let l = globalThis;

    function p() {
        return f(l), l
    }

    function f(t) {
        let e = t.__SENTRY__ = t.__SENTRY__ || {};
        return e.version = e.version || u, e[u] = e[u] || {}
    }

    function d(t, e, n = l) {
        let r = n.__SENTRY__ = n.__SENTRY__ || {},
            i = r[u] = r[u] || {};
        return i[t] || (i[t] = e())
    }
    t.s(["f", 0, l], 414542), t.s(["u", 0, d, "t", 0, p, "y", 0, f], 993448);
    let h = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
    t.s(["f", 0, h], 997629);
    let _ = {};

    function g(t) {
        if (!("console" in l)) return t();
        let e = l.console,
            n = {},
            r = Object.keys(_);
        r.forEach(t => {
            let r = _[t];
            n[t] = e[t], e[t] = r
        });
        try {
            return t()
        } finally {
            r.forEach(t => {
                e[t] = n[t]
            })
        }
    }

    function m() {
        return b().enabled
    }

    function y(t, ...e) {
        h && m() && g(() => {
            l.console[t](`Sentry Logger [${t}]:`, ...e)
        })
    }

    function b() {
        return h ? d("loggerSettings", () => ({
            enabled: !1
        })) : {
            enabled: !1
        }
    }
    let v = {
        enable: function() {
            b().enabled = !0
        },
        disable: function() {
            b().enabled = !1
        },
        isEnabled: m,
        log: function(...t) {
            y("log", ...t)
        },
        warn: function(...t) {
            y("warn", ...t)
        },
        error: function(...t) {
            y("error", ...t)
        }
    };
    t.s(["u", 0, ["debug", "info", "warn", "error", "log", "assert", "trace"], "D", 0, g, "h", 0, v, "r", 0, _], 432764);
    let S = Object.prototype.toString;

    function x(t) {
        switch (S.call(t)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
            case "[object WebAssembly.Exception]":
                return !0;
            default:
                return P(t, Error)
        }
    }

    function k(t, e) {
        return S.call(t) === `[object ${e}]`
    }

    function E(t) {
        return k(t, "String")
    }

    function I(t) {
        return "object" == typeof t && null !== t && "__sentry_template_string__" in t && "__sentry_template_values__" in t
    }

    function w(t) {
        return null === t || I(t) || "object" != typeof t && "function" != typeof t
    }

    function O(t) {
        return k(t, "Object")
    }

    function C(t) {
        return "object" == typeof t && null !== t
    }

    function A(t) {
        return "u" > typeof Event && P(t, Event)
    }

    function $(t) {
        return k(t, "RegExp")
    }

    function j(t) {
        return !!(t?.then && "function" == typeof t.then)
    }

    function P(t, e) {
        try {
            return t instanceof e
        } catch {
            return !1
        }
    }

    function N(t, e, n) {
        try {
            Object.defineProperty(t, e, {
                value: n,
                writable: !0,
                configurable: !0
            })
        } catch {
            h && v.log(`Failed to add non-enumerable property "${String(e)}" to object`, t)
        }
    }

    function D(t, e) {
        try {
            let n = e.prototype || {};
            t.prototype = e.prototype = n, N(t, "__sentry_original__", e)
        } catch {}
    }

    function R(t) {
        if (x(t)) return {
            message: t.message,
            name: t.name,
            stack: t.stack,
            ...T(t)
        };
        if (A(t)) {
            let {
                type: e,
                target: n,
                currentTarget: r,
                detail: i
            } = t;
            return {
                type: e,
                target: n,
                currentTarget: r,
                ...i ? {
                    detail: i
                } : {},
                ...T(t)
            }
        }
        return t
    }

    function T(t) {
        return C(t) ? Object.fromEntries(Object.entries(t)) : {}
    }

    function M(t) {
        if (void 0 !== e) return e ? e(t) : t();
        let n = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
        return n in l && "function" == typeof l[n] ? (e = l[n])(t) : (e = null, t())
    }

    function L() {
        return M(() => Math.random())
    }

    function U() {
        return M(() => Date.now())
    }
    t.s(["U", 0, function(t) {
        return k(t, "DOMError")
    }, "a", 0, function(t) {
        return k(t, "DOMException")
    }, "b", 0, x, "u", 0, function(t) {
        return k(t, "ErrorEvent")
    }, "z", 0, A, "v", 0, P, "t", 0, C, "S", 0, I, "d", 0, O, "n", 0, w, "C", 0, $, "G", 0, function(t) {
        return "u" > typeof Request && P(t, Request)
    }, "Z", 0, E, "l", 0, j], 134454), t.s(["O", 0, N, "F", 0, R, "v", 0, function(t) {
        let e = Object.keys(R(t));
        return e.sort(), e[0] ? e.join(", ") : "[object has no keys]"
    }, "Q", 0, function(t, e, n) {
        if (!(e in t)) return;
        let r = t[e];
        if ("function" != typeof r) return;
        let i = n(r);
        "function" == typeof i && D(i, r);
        try {
            t[e] = i
        } catch {
            h && v.log(`Failed to replace method "${e}" in object`, t)
        }
    }, "R", 0, function(t) {
        return t.__sentry_original__
    }, "u", 0, D], 419369), t.s(["D", 0, U, "T", 0, L, "j", 0, M], 396450);
    let J = Symbol.for("sentry.skipNormalization"),
        K = Symbol.for("sentry.overrideNormalizationDepth"),
        z = /\(error: (.*)\)/,
        W = /captureMessage|captureException/;

    function Y(...t) {
        let e = t.sort((t, e) => t[0] - e[0]).map(t => t[1]);
        return (t, n = 0, r = 0) => {
            let i = [],
                s = t.split("\n");
            for (let t = n; t < s.length; t++) {
                let n = s[t];
                n.length > 1024 && (n = n.slice(0, 1024));
                let o = z.test(n) ? n.replace(z, "$1") : n;
                if (!o.includes("Error: ")) {
                    for (let t of e) {
                        let e = t(o);
                        if (e) {
                            i.push(e);
                            break
                        }
                    }
                    if (i.length >= 50 + r) break
                }
            }
            var o = i.slice(r);
            if (!o.length) return [];
            let a = Array.from(o);
            return /sentryWrapped/.test(F(a).function || "") && a.pop(), a.reverse(), W.test(F(a).function || "") && (a.pop(), W.test(F(a).function || "") && a.pop()), a.slice(0, 50).map(t => ({
                ...t,
                filename: t.filename || F(a).filename,
                function: t.function || "?"
            }))
        }
    }

    function F(t) {
        return t[t.length - 1] || {}
    }
    let q = "<anonymous>";

    function B(t) {
        try {
            if (!t || "function" != typeof t) return q;
            return t.name || q
        } catch {
            return q
        }
    }

    function G(t) {
        let e = t?.startsWith("file://") ? t.slice(7) : t;
        return e?.match(/\/[A-Z]:/) && (e = e.slice(1)), e
    }

    function H(t, e = 100, n = 1 / 0) {
        try {
            return function t(e, n, r = 1 / 0, i = 1 / 0, s = function() {
                let t = new WeakSet;
                return [function(e) {
                    return !!t.has(e) || (t.add(e), !1)
                }, function(e) {
                    t.delete(e)
                }]
            }()) {
                let o, [a, c] = s;
                if (null == n || ["boolean", "string"].includes(typeof n) || "number" == typeof n && Number.isFinite(n)) return n;
                let u = Z(e, n);
                if (!u.startsWith("[object ")) return u;
                if (n[J]) return n;
                let l = "number" == typeof(o = n[K]) ? o : void 0,
                    p = void 0 !== l ? l : r;
                if (0 === p) return u.replace("object ", "");
                if (a(n)) return "[Circular ~]";
                if (n && "function" == typeof n.toJSON) try {
                    let e = n.toJSON();
                    return t("", e, p - 1, i, s)
                } catch {}
                let f = Array.isArray(n) ? [] : {},
                    d = 0,
                    h = R(n);
                for (let e in h) {
                    if (!Object.prototype.hasOwnProperty.call(h, e)) continue;
                    if (d >= i) {
                        f[e] = "[MaxProperties ~]";
                        break
                    }
                    let n = h[e];
                    f[e] = t(e, n, p - 1, i, s), d++
                }
                return c(n), f
            }("", t, e, n)
        } catch (t) {
            return {
                ERROR: `**non-serializable** (${t})`
            }
        }
    }

    function Z(e, r) {
        try {
            var i;
            let e;
            if (n) {
                let t = n(r);
                if (t) return t
            }
            if (r === t.g) return "[Global]";
            if ("number" == typeof r && !Number.isFinite(r)) return `[${r}]`;
            if ("function" == typeof r) return `[Function: ${B(r)}]`;
            if ("symbol" == typeof r) return `[${String(r)}]`;
            if ("bigint" == typeof r) return `[BigInt: ${String(r)}]`;
            let s = (i = r, e = Object.getPrototypeOf(i), e?.constructor ? e.constructor.name : "null prototype");
            return `[object ${s}]`
        } catch (t) {
            return `**non-serializable** (${t})`
        }
    }

    function Q(t, e = 0) {
        return "string" != typeof t || 0 === e || t.length <= e ? t : `${t.slice(0,e)}...`
    }

    function V(t, e, n = !1) {
        return !!E(t) && ($(e) ? e.test(t) : E(e) ? n ? t === e : t.includes(e) : "function" == typeof e && e(t))
    }

    function X(t = l.crypto || l.msCrypto) {
        try {
            if (t?.randomUUID) return M(() => t.randomUUID()).replace(/-/g, "")
        } catch {}
        return r || (r = "10000000100040008000100000000000"), r.replace(/[018]/g, t => (t ^ (15 & 16 * L()) >> t / 4).toString(16))
    }

    function tt(t) {
        return t.exception?.values?.[0]
    }

    function te(t, e) {
        let n = t.exception?.values,
            r = n?.find(t => t.mechanism?.exception_id === 0) ?? n?.[0];
        r && tn(r, e)
    }

    function tn(t, e) {
        let n = t.mechanism;
        t.mechanism = {
            type: "generic",
            handled: !0,
            ...n,
            ...e
        }, e && "data" in e && (t.mechanism.data = {
            ...n?.data,
            ...e.data
        })
    }

    function tr() {
        return U() / 1e3
    }

    function ti() {
        return (i ?? (i = function() {
            let {
                performance: t
            } = l;
            if (!t?.now || !t.timeOrigin) return tr;
            let e = t.timeOrigin;
            return () => (e + M(() => t.now())) / 1e3
        }()))()
    }
    t.s(["z", 0, "?", "O", 0, Y, "s", 0, function(t) {
        let e = t.exception;
        if (e) {
            let t = [];
            try {
                return e.values.forEach(e => {
                    e.stacktrace.frames && t.push(...e.stacktrace.frames)
                }), t
            } catch {}
        }
    }, "n", 0, B, "y", 0, G, "E", 0, function(t) {
        return Array.isArray(t) ? Y(...t) : t
    }], 267269), t.s(["S", 0, H, "B", 0, function t(e, n = 3, r = 102400) {
        let i = H(e, n);
        return ~-encodeURI(JSON.stringify(i)).split(/%..|./).length > r ? t(e, n - 1, r) : i
    }, "Q", 0, function(t) {
        n = t
    }, "W", 0, Z], 390740), t.s(["w", 0, V, "c", 0, function(t, e) {
        if (!Array.isArray(t)) return "";
        let n = [];
        for (let e = 0; e < t.length; e++) {
            let r = t[e];
            w(r) ? n.push(String(r)) : r instanceof Error ? n.push(r.message ? `${r.name}: ${r.message}` : r.name) : n.push(Z(void 0, r))
        }
        return n.join(e)
    }, "u", 0, function(t, e) {
        let n = t,
            r = n.length;
        if (r <= 150) return n;
        e > r && (e = r);
        let i = Math.max(e - 60, 0);
        i < 5 && (i = 0);
        let s = Math.min(i + 140, r);
        return s > r - 5 && (s = r), s === r && (i = Math.max(s - 140, 0)), n = n.slice(i, s), i > 0 && (n = `'{snip} ${n}`), s < r && (n += " {snip}"), n
    }, "$", 0, function(t, e = [], n = !1) {
        for (let r of e)
            if (V(t, r, n)) return !0;
        return !1
    }, "k", 0, Q], 39561), t.s(["o", 0, function(t, e) {
        let n = tt(t);
        n && tn(n, e)
    }, "v", 0, te, "T", 0, function(t, e, n) {
        let r = t.exception = t.exception || {},
            i = r.values = r.values || [],
            s = i[0] = i[0] || {};
        s.value || (s.value = e || ""), s.type || (s.type = n || "Error")
    }, "n", 0, function(t) {
        if (function(t) {
                try {
                    return t.__sentry_captured__
                } catch {}
            }(t)) return !0;
        try {
            N(t, "__sentry_captured__", !0)
        } catch {}
        return !1
    }, "N", 0, function(t) {
        let {
            message: e,
            event_id: n
        } = t;
        if (e) return e;
        let r = tt(t);
        return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
    }, "c", 0, X], 530598);
    let ts = null;

    function to(t) {
        let e = ti(),
            n = {
                sid: X(),
                init: !0,
                timestamp: e,
                started: e,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => {
                    var t;
                    return t = n, {
                        sid: `${t.sid}`,
                        init: t.init,
                        started: new Date(1e3 * t.started).toISOString(),
                        timestamp: new Date(1e3 * t.timestamp).toISOString(),
                        status: t.status,
                        errors: t.errors,
                        did: "number" == typeof t.did || "string" == typeof t.did ? `${t.did}` : void 0,
                        duration: t.duration,
                        abnormal_mechanism: t.abnormal_mechanism,
                        attrs: {
                            release: t.release,
                            environment: t.environment,
                            ip_address: t.ipAddress,
                            user_agent: t.userAgent
                        }
                    }
                }
            };
        return t && ta(n, t), n
    }

    function ta(t, e = {}) {
        if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), t.did || e.did || (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || ti(), e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = 32 === e.sid.length ? e.sid : X()), void 0 !== e.init && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), "number" == typeof e.started && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
        else if ("number" == typeof e.duration) t.duration = e.duration;
        else {
            let e = t.timestamp - t.started;
            t.duration = e >= 0 ? e : 0
        }
        e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), "number" == typeof e.errors && (t.errors = e.errors), e.status && (t.status = e.status)
    }

    function tc(t, e) {
        let n = {};
        e ? n = {
            status: e
        } : "ok" === t.status && (n = {
            status: "exited"
        }), ta(t, n)
    }

    function tu(t, e, n = 2) {
        if (!e || "object" != typeof e || n <= 0) return e;
        if (t && 0 === Object.keys(e).length) return t;
        let r = {
            ...t
        };
        for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = tu(r[t], e[t], n - 1));
        return r
    }

    function tl() {
        return X()
    }

    function tp() {
        return X().substring(16)
    }
    t.s(["D", 0, function() {
        return null === ts && (ts = function() {
            let {
                performance: t
            } = l;
            if (!t?.now) return;
            let e = M(() => t.now()),
                n = U(),
                r = t.timeOrigin;
            return "number" == typeof r && 3e5 > Math.abs(r + e - n) ? r : n - e
        }()), ts
    }, "i", 0, tr, "R", 0, ti], 764580), t.s(["n", 0, tc, "r", 0, to, "d", 0, ta], 96342), t.s(["f", 0, tu], 636933), t.s(["d", 0, tp, "u", 0, tl], 413007);
    class tf {
        constructor() {
            this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, N(this, "refs", {}), this._propagationContext = {
                traceId: tl(),
                sampleRand: L()
            }
        }
        clone() {
            let t = new tf;
            return t._breadcrumbs = [...this._breadcrumbs], t._tags = {
                ...this._tags
            }, t._attributes = {
                ...this._attributes
            }, t._extra = {
                ...this._extra
            }, t._contexts = {
                ...this._contexts
            }, this._contexts.flags && (t._contexts.flags = {
                values: [...this._contexts.flags.values]
            }), t._user = this._user, t._level = this._level, t._session = this._session, t._transactionName = this._transactionName, t._fingerprint = this._fingerprint, t._eventProcessors = [...this._eventProcessors], t._attachments = [...this._attachments], t._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata
            }, t._propagationContext = {
                ...this._propagationContext
            }, t._client = this._client, t._lastEventId = this._lastEventId, t._conversationId = this._conversationId, t.refs = {
                ...this.refs
            }, t
        }
        setClient(t) {
            this._client = t
        }
        setLastEventId(t) {
            this._lastEventId = t
        }
        getClient() {
            return this._client
        }
        lastEventId() {
            return this._lastEventId
        }
        addScopeListener(t) {
            this._scopeListeners.push(t)
        }
        addEventProcessor(t) {
            return this._eventProcessors.push(t), this
        }
        setUser(t) {
            return this._user = t || {
                email: void 0,
                id: void 0,
                ip_address: void 0,
                username: void 0
            }, this._session && ta(this._session, {
                user: t
            }), this._notifyScopeListeners(), this
        }
        getUser() {
            return this._user
        }
        setConversationId(t) {
            return this._conversationId = t || void 0, this._notifyScopeListeners(), this
        }
        setTags(t) {
            return this._tags = {
                ...this._tags,
                ...t
            }, this._notifyScopeListeners(), this
        }
        setTag(t, e) {
            return this.setTags({
                [t]: e
            })
        }
        setAttributes(t) {
            return this._attributes = {
                ...this._attributes,
                ...t
            }, this._notifyScopeListeners(), this
        }
        setAttribute(t, e) {
            return this.setAttributes({
                [t]: e
            })
        }
        removeAttribute(t) {
            return t in this._attributes && (delete this._attributes[t], this._notifyScopeListeners()), this
        }
        setExtras(t) {
            return this._extra = {
                ...this._extra,
                ...t
            }, this._notifyScopeListeners(), this
        }
        setExtra(t, e) {
            return this._extra = {
                ...this._extra,
                [t]: e
            }, this._notifyScopeListeners(), this
        }
        setFingerprint(t) {
            return this._fingerprint = t, this._notifyScopeListeners(), this
        }
        setLevel(t) {
            return this._level = t, this._notifyScopeListeners(), this
        }
        setTransactionName(t) {
            return this._transactionName = t, this._notifyScopeListeners(), this
        }
        setContext(t, e) {
            return null === e ? delete this._contexts[t] : this._contexts[t] = e, this._notifyScopeListeners(), this
        }
        setSession(t) {
            return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
        }
        getSession() {
            return this._session
        }
        update(t) {
            if (!t) return this;
            let e = "function" == typeof t ? t(this) : t,
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
                } = (e instanceof tf ? e.getScopeData() : O(e) ? t : void 0) || {};
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
        addBreadcrumb(t, e) {
            let n = "number" == typeof e ? e : 100;
            if (n <= 0) return this;
            let r = {
                timestamp: tr(),
                ...t,
                message: t.message ? Q(t.message, 2048) : t.message
            };
            return this._breadcrumbs.push(r), this._breadcrumbs.length > n && (this._breadcrumbs = this._breadcrumbs.slice(-n)), this._notifyScopeListeners(), this
        }
        getLastBreadcrumb() {
            return this._breadcrumbs[this._breadcrumbs.length - 1]
        }
        clearBreadcrumbs() {
            return this._breadcrumbs = [], this._notifyScopeListeners(), this
        }
        addAttachment(t) {
            return this._attachments.push(t), this
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
        setSDKProcessingMetadata(t) {
            return this._sdkProcessingMetadata = tu(this._sdkProcessingMetadata, t, 2), this
        }
        setPropagationContext(t) {
            return this._propagationContext = t, this
        }
        getPropagationContext() {
            return this._propagationContext
        }
        captureException(t, e) {
            let n = e?.event_id || X();
            if (!this._client) return h && v.warn("No client configured on scope - will not capture exception!"), n;
            let r = Error("Sentry syntheticException");
            return this._client.captureException(t, {
                originalException: t,
                syntheticException: r,
                ...e,
                event_id: n
            }, this), n
        }
        captureMessage(t, e, n) {
            let r = n?.event_id || X();
            if (!this._client) return h && v.warn("No client configured on scope - will not capture message!"), r;
            let i = n?.syntheticException ?? Error(t);
            return this._client.captureMessage(t, e, {
                originalException: t,
                syntheticException: i,
                ...n,
                event_id: r
            }, this), r
        }
        captureEvent(t, e) {
            let n = t.event_id || e?.event_id || X();
            return this._client ? this._client.captureEvent(t, {
                ...e,
                event_id: n
            }, this) : h && v.warn("No client configured on scope - will not capture event!"), n
        }
        _notifyScopeListeners() {
            this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(t => {
                t(this)
            }), this._notifyingListeners = !1)
        }
    }
    let td = "__SENTRY_SUPPRESS_TRACING__";
    t.s(["f", 0, td], 377656);
    let th = t => t instanceof Promise && !t[t_],
        t_ = Symbol("chained PromiseLike"),
        tg = (t, e, n) => {
            let r = t.then(t => (e(t), t), t => {
                throw n(t), t
            });
            return th(r) && th(t) ? r : tm(t, r)
        },
        tm = (t, e) => {
            if (!e) return t;
            let n = !1;
            for (let r in t) {
                if (r in e) continue;
                n = !0;
                let i = t[r];
                "function" == typeof i ? Object.defineProperty(e, r, {
                    value: (...e) => i.apply(t, e),
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = i
            }
            return n && Object.assign(e, {
                [t_]: !0
            }), e
        };
    t.s(["f", 0, tg], 523299);
    class ty {
        constructor(t, e) {
            let n, r;
            n = t || new tf, r = e || new tf, this._stack = [{
                scope: n
            }], this._isolationScope = r
        }
        withScope(t) {
            let e, n = this._pushScope();
            try {
                e = t(n)
            } catch (t) {
                throw this._popScope(), t
            }
            return j(e) ? tg(e, () => this._popScope(), () => this._popScope()) : (this._popScope(), e)
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
            let t = this.getScope().clone();
            return this._stack.push({
                client: this.getClient(),
                scope: t
            }), t
        }
        _popScope() {
            return !(this._stack.length <= 1) && !!this._stack.pop()
        }
    }

    function tb() {
        let t = f(p());
        return t.stack = t.stack || new ty(d("defaultCurrentScope", () => new tf), d("defaultIsolationScope", () => new tf))
    }

    function tv(t) {
        return tb().withScope(t)
    }

    function tS(t, e) {
        let n = tb();
        return n.withScope(() => (n.getStackTop().scope = t, e(t)))
    }

    function tx(t) {
        return tb().withScope(() => t(tb().getIsolationScope()))
    }

    function tk(t) {
        return tv(e => {
            e.setSDKProcessingMetadata({
                [td]: !0
            });
            let n = t();
            return e.setSDKProcessingMetadata({
                [td]: void 0
            }), n
        })
    }

    function tE(t) {
        let e = f(t);
        return e.acs ? e.acs : {
            suppressTracing: tk,
            withIsolationScope: tx,
            withScope: tv,
            withSetScope: tS,
            withSetIsolationScope: (t, e) => tx(e),
            getCurrentScope: () => tb().getScope(),
            getIsolationScope: () => tb().getIsolationScope()
        }
    }

    function tI() {
        return f(p()).externalPropagationContextProvider?.()
    }

    function tw() {
        return tE(p()).getCurrentScope()
    }

    function tO() {
        return tE(p()).getIsolationScope()
    }

    function tC() {
        return d("globalScope", () => new tf)
    }

    function tA() {
        return tw().getClient()
    }

    function t$(t) {
        let e = tI();
        if (e) return {
            trace_id: e.traceId,
            span_id: e.spanId
        };
        let {
            traceId: n,
            parentSpanId: r,
            propagationSpanId: i
        } = t.getPropagationContext(), s = {
            trace_id: n,
            span_id: i || tp()
        };
        return r && (s.parent_span_id = r), s
    }
    t.s(["f", 0, tE], 919610), t.s(["l", 0, tA, "d", 0, tw, "k", 0, tI, "J", 0, tC, "V", 0, tO, "i", 0, t$, "K", 0, function() {
        return void 0 !== f(p()).externalPropagationContextProvider
    }, "h", 0, function(...t) {
        let e = tE(p());
        if (2 === t.length) {
            let [n, r] = t;
            return n ? e.withSetScope(n, r) : e.withScope(r)
        }
        return e.withScope(t[0])
    }], 932881);
    let tj = "production";
    t.s(["f", 0, tj], 762783);
    let tP = Symbol.for("SentryCallbackError");

    function tN(t, e, n) {
        let r;
        try {
            r = e()
        } catch (e) {
            return tD(t, e, n)
        }
        return j(r) ? r.then(void 0, e => tD(t, e, n)) : r
    }

    function tD(t, e, n) {
        return h && v.error(t, e), n(e)
    }

    function tR(t) {
        return new tM(e => {
            e(t)
        })
    }

    function tT(t) {
        return new tM((e, n) => {
            n(t)
        })
    }
    t.s(["G", 0, tP, "E", 0, tN], 319074);
    class tM {
        constructor(t) {
            this._state = 0, this._handlers = [], this._runExecutor(t)
        }
        then(t, e) {
            return new tM((n, r) => {
                this._handlers.push([!1, e => {
                    if (t) try {
                        n(t(e))
                    } catch (t) {
                        r(t)
                    } else n(e)
                }, t => {
                    if (e) try {
                        n(e(t))
                    } catch (t) {
                        r(t)
                    } else r(t)
                }]), this._executeHandlers()
            })
        } catch (t) {
            return this.then(t => t, t)
        } finally(t) {
            return new tM((e, n) => {
                let r, i;
                return this.then(e => {
                    i = !1, r = e, t && t()
                }, e => {
                    i = !0, r = e, t && t()
                }).then(() => {
                    i ? n(r) : e(r)
                })
            })
        }
        _executeHandlers() {
            if (0 === this._state) return;
            let t = this._handlers.slice();
            this._handlers = [], t.forEach(t => {
                t[0] || (1 === this._state && t[1](this._value), 2 === this._state && t[2](this._value), t[0] = !0)
            })
        }
        _runExecutor(t) {
            let e = (t, e) => {
                    if (0 === this._state) {
                        if (j(e)) return void e.then(n, r);
                        this._state = t, this._value = e, this._executeHandlers()
                    }
                },
                n = t => {
                    e(1, t)
                },
                r = t => {
                    e(2, t)
                };
            try {
                t(n, r)
            } catch (t) {
                r(t)
            }
        }
    }

    function tL(t) {
        let e = l._sentryDebugIds,
            n = l._debugIds;
        if (!e && !n) return {};
        let r = e ? Object.keys(e) : [],
            i = n ? Object.keys(n) : [];
        if (c && r.length === o && i.length === a) return c;
        o = r.length, a = i.length, c = {}, s || (s = {});
        let u = (e, n) => {
            for (let r of e) {
                let e = n[r],
                    i = s?.[r];
                if (i && c && e) c[i[0]] = e, s && (s[r] = [i[0], e]);
                else if (e) {
                    let n = t(r);
                    for (let t = n.length - 1; t >= 0; t--) {
                        let i = n[t],
                            o = i?.filename;
                        if (o && c && s) {
                            c[o] = e, s[r] = [o, e];
                            break
                        }
                    }
                }
            }
        };
        return e && u(r, e), n && u(i, n), c
    }
    t.s(["K", 0, tT, "Y", 0, tR], 981317), t.s(["r", 0, function(t, e) {
        let n = tL(t);
        if (!n) return [];
        let r = [];
        for (let t of e) {
            let e = G(t);
            e && n[e] && r.push({
                type: "sourcemap",
                code_file: t,
                debug_id: n[e]
            })
        }
        return r
    }, "b", 0, tL], 5053);
    let tU = /^o(\d+)\./,
        tJ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;

    function tK(t, e = !1) {
        let {
            host: n,
            path: r,
            pass: i,
            port: s,
            projectId: o,
            protocol: a,
            publicKey: c
        } = t;
        return `${a}://${c}${e&&i?`:${i}`:""}@${n}${s?`:${s}`:""}/${r?`${r}/`:r}${o}`
    }

    function tz(t) {
        let e = tJ.exec(t);
        if (!e) return void g(() => {
            console.error(`Invalid Sentry Dsn: ${t}`)
        });
        let [n, r, i = "", s = "", o = "", a = ""] = e.slice(1), c = "", u = a, l = u.split("/");
        if (l.length > 1 && (c = l.slice(0, -1).join("/"), u = l.pop()), u) {
            let t = u.match(/^\d+/);
            t && (u = t[0])
        }
        return tW({
            host: s,
            pass: i,
            path: c,
            projectId: u,
            port: o,
            protocol: n,
            publicKey: r
        })
    }

    function tW(t) {
        return {
            protocol: t.protocol,
            publicKey: t.publicKey || "",
            pass: t.pass || "",
            host: t.host,
            port: t.port || "",
            path: t.path || "",
            projectId: t.projectId
        }
    }

    function tY(t) {
        let e, n = t.getOptions(),
            {
                host: r
            } = t.getDsn() || {};
        if (n.orgId) e = String(n.orgId);
        else {
            let t;
            r && (t = r.match(tU), e = t?.[1])
        }
        return e
    }

    function tF(t, e) {
        for (let n of t[1]) {
            let t = n[0].type;
            if (e(n, t)) return !0
        }
        return !1
    }

    function tq(t) {
        let e = f(l);
        return e.encodePolyfill ? e.encodePolyfill(t) : new TextEncoder().encode(t)
    }
    t.s(["o", 0, tz, "_", 0, tK, "T", 0, tY, "p", 0, function(t) {
        let e = "string" == typeof t ? tz(t) : tW(t);
        if (e && function(t) {
                if (!h) return !0;
                let {
                    port: e,
                    projectId: n,
                    protocol: r
                } = t;
                return !["protocol", "publicKey", "host", "projectId"].find(e => !t[e] && (v.error(`Invalid Sentry Dsn: ${e} missing`), !0)) && (n.match(/^\d+$/) ? "http" !== r && "https" !== r ? (v.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1) : !(e && isNaN(parseInt(e, 10))) || (v.error(`Invalid Sentry Dsn: Invalid port ${e}`), !1) : (v.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1))
            }(e)) return e
    }], 989542);
    let tB = {
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

    function tG(t) {
        return "replay_event" === t ? "replay" : t || "error"
    }

    function tH(t, e = !1) {
        let n = {};
        for (let [r, i] of Object.entries(t ?? {})) {
            let t = function(t, e) {
                let {
                    value: n,
                    unit: r
                } = "object" == typeof t && null != t && !Array.isArray(t) && Object.keys(t).includes("value") ? t : {
                    value: t,
                    unit: void 0
                }, i = function(t) {
                    if (Array.isArray(t)) return {
                        value: t,
                        type: "array"
                    };
                    let e = "string" == typeof t ? "string" : "boolean" == typeof t ? "boolean" : "number" != typeof t || Number.isNaN(t) ? null : Number.isInteger(t) ? "integer" : "double";
                    if (e) return {
                        value: t,
                        type: e
                    }
                }(n), s = r && "string" == typeof r ? {
                    unit: r
                } : {};
                if (i) return {
                    ...i,
                    ...s
                };
                if (!e || "skip-undefined" === e && void 0 === n) return;
                let o = "";
                try {
                    o = JSON.stringify(n) ?? ""
                } catch {}
                return {
                    value: o,
                    type: "string",
                    ...s
                }
            }(i, e);
            t && (n[r] = t)
        }
        return n
    }

    function tZ(t) {
        return "string" == typeof t ? 2 * t.length : "boolean" == typeof t ? 4 : 8 * ("number" == typeof t)
    }
    t.s(["S", 0, function(t, e) {
        let [n, r] = t;
        return [n, [...r, e]]
    }, "i", 0, function(t) {
        let e = "string" == typeof t.data ? tq(t.data) : t.data;
        return [{
            type: "attachment",
            length: e.length,
            filename: t.filename,
            content_type: t.contentType,
            attachment_type: t.attachmentType
        }, e]
    }, "H", 0, function(t, e = []) {
        return [t, e]
    }, "w", 0, function(t, e, n, r) {
        let i = t.sdkProcessingMetadata?.dynamicSamplingContext;
        return {
            event_id: t.event_id,
            sent_at: new Date(U()).toISOString(),
            ...e && {
                sdk: e
            },
            ...!!n && r && {
                dsn: tK(r)
            },
            ...i && {
                trace: i
            }
        }
    }, "Q", 0, function(t, e) {
        return tF(t, (t, n) => e.includes(n))
    }, "h", 0, function(t) {
        return t in tB ? tB[t] : t
    }, "E", 0, tF, "p", 0, tG, "X", 0, function(t) {
        if (!t?.sdk) return;
        let {
            name: e,
            version: n
        } = t.sdk;
        return {
            name: e,
            version: n
        }
    }, "k", 0, function(t) {
        let [e, n] = t, r = JSON.stringify(e);

        function i(t) {
            "string" == typeof r ? r = "string" == typeof t ? r + t : [tq(r), t] : r.push("string" == typeof t ? tq(t) : t)
        }
        for (let t of n) {
            let [e, n] = t;
            if (i(`
${JSON.stringify(e)}
`), "string" == typeof n || n instanceof Uint8Array) i(n);
            else {
                let t;
                try {
                    t = JSON.stringify(n)
                } catch {
                    t = JSON.stringify(H(n))
                }
                i(t)
            }
        }
        return "string" == typeof r ? r : function(t) {
            let e = new Uint8Array(t.reduce((t, e) => t + e.length, 0)),
                n = 0;
            for (let r of t) e.set(r, n), n += r.length;
            return e
        }(r)
    }], 597968), t.s(["Z", 0, function(t) {
        if (!t) return 0;
        let e = 0;
        for (let [n, r] of Object.entries(t)) {
            e += 2 * n.length, e += 2 * r.type.length, e += (r.unit?.length ?? 0) * 2;
            let t = r.value;
            Array.isArray(t) ? e += tZ(t[0]) * t.length : w(t) ? e += tZ(t) : e += 100
        }
        return e
    }, "w", 0, tH], 445972);
    let tQ = "sentry.segment.name.source";
    t.s(["a", 0, "browser.navigation.id", "g", 0, "browser.navigation.type", "R", 0, "browser.paint.type", "W", 0, "browser.web_vital.inp.interaction_type", "H", 0, "browser.web_vital.inp.target", "X", 0, "code.file.path", "K", 0, "code.function.name", "y", 0, "http.request.header", "l", 0, "http.request.method", "o", 0, "http.request.same_origin", "v", 0, "http.response.body.size", "x", 0, "http.response.size", "L", 0, "http.response.status_code", "C", 0, "http.route", "D", 0, "network.connection.effective_type", "Q", 0, "network.connection.rtt", "Y", 0, "network.connection.type", "m", 0, "sentry.idle_span_finish_reason", "e", 0, "sentry.is_localhost", "n", 0, "sentry.op", "j", 0, "sentry.origin", "f", 0, "sentry.replay_id", "A", 0, "sentry.sdk.name", "d", 0, "sentry.sdk.version", "w", 0, "sentry.segment.id", "z", 0, "sentry.segment.name", "O", 0, tQ, "S", 0, "sentry.trace_lifecycle", "i", 0, "sentry.transaction", "U", 0, "server.address", "k", 0, "server.port", "T", 0, "ui.component_name", "b", 0, "url.domain", "E", 0, "url.fragment", "V", 0, "url.full", "Z", 0, "url.path", "c", 0, "url.port", "p", 0, "url.query", "h", 0, "url.scheme", "q", 0, "url.template", "r", 0, "user_agent.original"], 351384);
    let tV = "sentry.sample_rate",
        tX = "sentry.previous_trace_sample_rate",
        t0 = "sentry.op",
        t1 = "sentry.origin",
        t9 = "sentry.status.message";
    t.s(["E", 0, "gen_ai.conversation.id", "_", 0, "sentry.exclusive_time", "G", 0, "http.request.method", "q", 0, "sentry.profile_id", "j", 0, "sentry.custom_span_name", "F", 0, "sentry.environment", "i", 0, "sentry.idle_span_finish_reason", "B", 0, "sentry.measurement_unit", "x", 0, "sentry.measurement_value", "o", 0, t0, "u", 0, t1, "t", 0, tX, "e", 0, "sentry.release", "s", 0, tV, "h", 0, "sentry.sdk.integrations", "Z", 0, t9, "v", 0, "user.email", "J", 0, "user.id", "w", 0, "user.ip_address", "r", 0, "user.name", "S", 0, "sentry.link.type"], 551364);
    let t2 = ["ok", "deadline_exceeded", "unauthenticated", "permission_denied", "not_found", "resource_exhausted", "invalid_argument", "unimplemented", "unavailable", "internal_error", "unknown_error", "cancelled", "already_exists", "failed_precondition", "aborted", "out_of_range", "data_loss"];

    function t4(t) {
        return "ok" !== t && t2.includes(t)
    }

    function t3(t) {
        try {
            let e = l.WeakRef;
            if ("function" == typeof e) return new e(t)
        } catch {}
        return t
    }

    function t5(t) {
        if (t) {
            if ("object" == typeof t && "deref" in t && "function" == typeof t.deref) try {
                return t.deref()
            } catch {
                return
            }
            return t
        }
    }
    t.s(["r", 0, 2, "b", 0, 1, "s", 0, 0, "g", 0, t4, "x", 0, function(t, e) {
        t.setAttribute("http.response.status_code", e);
        let n = function(t) {
            if (t < 400 && t >= 100) return {
                code: 1
            };
            if (t >= 400 && t < 500) switch (t) {
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
            if (t >= 500 && t < 600) switch (t) {
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
        }(e);
        "unknown_error" !== n.message && t.setStatus(n)
    }], 597121);
    let t8 = "_sentryScope",
        t6 = "_sentryIsolationScope",
        t7 = Symbol.for("sentry.tracerProviderSpan");

    function et(t) {
        return {
            scope: t[t8],
            isolationScope: t5(t[t6])
        }
    }
    t.s(["C", 0, et, "q", 0, function(t, e, n) {
        t && (N(t, t6, t3(n)), N(t, t8, e))
    }, "I", 0, function(t) {
        return !0 === t[t7]
    }], 121284);
    let ee = "sentry-";

    function en(t) {
        let e = er(t);
        if (!e) return;
        let n = Object.entries(e).reduce((t, [e, n]) => (e.startsWith(ee) && (t[e.slice(ee.length)] = n), t), {});
        return Object.keys(n).length > 0 ? n : void 0
    }

    function er(t) {
        if (t && (E(t) || Array.isArray(t))) return Array.isArray(t) ? t.reduce((t, e) => (Object.entries(ei(e)).forEach(([e, n]) => {
            t[e] = n
        }), t), {}) : ei(t)
    }

    function ei(t) {
        return t.split(",").map(t => {
            let e = t.indexOf("=");
            return -1 === e ? [] : [t.slice(0, e), t.slice(e + 1)].map(t => {
                try {
                    return decodeURIComponent(t.trim())
                } catch {
                    return
                }
            })
        }).reduce((t, [e, n]) => (e && n && (t[e] = n), t), {})
    }

    function es(t) {
        if ("boolean" == typeof t) return Number(t);
        let e = "string" == typeof t ? parseFloat(t) : t;
        if (!("number" != typeof e || isNaN(e)) && !(e < 0) && !(e > 1)) return e
    }
    t.s(["p", 0, ee, "T", 0, en, "N", 0, function(t) {
        if (t) {
            var e = Object.entries(t).reduce((t, [e, n]) => (n && (t[`${ee}${e}`] = n), t), {});
            return 0 !== Object.keys(e).length ? Object.entries(e).reduce((t, [e, n], r) => {
                let i = `${encodeURIComponent(e)}=${encodeURIComponent(n)}`,
                    s = 0 === r ? i : `${t},${i}`;
                return s.length > 8192 ? (h && v.warn(`Not adding key: ${e} with val: ${n} to baggage header due to exceeding baggage size limits.`), t) : s
            }, "") : void 0
        }
    }, "O", 0, er], 185658), t.s(["f", 0, es], 820899);
    let eo = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

    function ea(t = tl(), e = tp(), n) {
        let r = "";
        return void 0 !== n && (r = n ? "-1" : "-0"), `${t}-${e}${r}`
    }

    function ec(t = tl(), e = tp(), n) {
        return `00-${t}-${e}-${n?"01":"00"}`
    }
    t.s(["v", 0, eo, "J", 0, ea, "z", 0, ec, "C", 0, function(t, e) {
        let n = function(t) {
                let e;
                if (!t) return;
                let n = t.match(eo);
                if (n) return "1" === n[3] ? e = !0 : "0" === n[3] && (e = !1), {
                    traceId: n[1],
                    parentSampled: e,
                    parentSpanId: n[2]
                }
            }(t),
            r = en(e);
        if (!n?.traceId) return {
            traceId: tl(),
            sampleRand: L()
        };
        let i = function(t, e) {
            let n = es(e?.sample_rand);
            if (void 0 !== n) return n;
            let r = es(e?.sample_rate);
            return r && t?.parentSampled !== void 0 ? t.parentSampled ? L() * r : r + L() * (1 - r) : L()
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
    }, "E", 0, function(t, e) {
        let n = tY(t);
        return e && n && e !== n ? (v.log(`Won't continue trace because org IDs don't match (incoming baggage: ${e}, SDK options: ${n})`), !1) : !t.getOptions().strictTraceContinuation || (!e || !!n) && (!!e || !n) || (v.log(`Starting a new trace because strict trace continuation is enabled but one org ID is missing (incoming baggage: ${e}, Sentry client: ${n})`), !1)
    }], 798844);
    let eu = "span";

    function el(t) {
        return t5(t.refs[eu])
    }

    function ep(t) {
        let {
            spanId: e,
            traceId: n,
            isRemote: r
        } = t.spanContext(), i = r ? e : eg(t).parent_span_id, s = et(t).scope;
        return {
            parent_span_id: i,
            span_id: r ? s?.getPropagationContext().propagationSpanId || tp() : e,
            trace_id: n
        }
    }

    function ef(t) {
        return t && t.length > 0 ? t.map(({
            context: {
                spanId: t,
                traceId: e,
                traceFlags: n,
                ...r
            },
            attributes: i
        }) => ({
            span_id: t,
            trace_id: e,
            sampled: 1 === n,
            attributes: i,
            ...r
        })) : void 0
    }

    function ed(t) {
        return t?.length ? t.map(({
            context: {
                spanId: t,
                traceId: e,
                traceFlags: n
            },
            attributes: r
        }) => ({
            span_id: t,
            trace_id: e,
            sampled: 1 === n,
            attributes: r
        })) : void 0
    }

    function eh(t) {
        return "number" == typeof t ? e_(t) : Array.isArray(t) ? t[0] + t[1] / 1e9 : t instanceof Date ? e_(t.getTime()) : ti()
    }

    function e_(t) {
        return t > 0x2540be3ff ? t / 1e3 : t
    }

    function eg(t) {
        if (eb(t)) return t.getStaticSpanJSON();
        let {
            spanId: e,
            traceId: n
        } = t.spanContext();
        if (ey(t)) {
            let {
                attributes: r,
                startTime: i,
                name: s,
                endTime: o,
                status: a,
                links: c
            } = t;
            return {
                span_id: e,
                trace_id: n,
                data: r,
                description: s,
                parent_span_id: em(t),
                start_timestamp: eh(i),
                timestamp: eh(o) || void 0,
                status: eS(a),
                op: r[t0],
                origin: r[t1],
                links: ef(c)
            }
        }
        return {
            span_id: e,
            trace_id: n,
            start_timestamp: 0,
            status: "ok",
            data: {}
        }
    }

    function em(t) {
        return "parentSpanId" in t ? t.parentSpanId : "parentSpanContext" in t ? t.parentSpanContext?.spanId : void 0
    }

    function ey(t) {
        return !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status
    }

    function eb(t) {
        return "function" == typeof t.getSpanJSON
    }

    function ev(t) {
        let {
            traceFlags: e
        } = t.spanContext();
        return 1 === e
    }

    function eS(t) {
        return t && 0 !== t.code && 1 !== t.code ? t.message && t4(t.message) ? t.message : "internal_error" : "ok"
    }

    function ex(t) {
        return t && 1 !== t.code && 0 !== t.code && "cancelled" !== t.message ? "error" : "ok"
    }

    function ek(t, e) {
        let n = "error" === ex(e) ? e?.message : void 0;
        return {
            ...n && {
                [t9]: n
            },
            ...t
        }
    }
    t.s(["c", 0, el, "_", 0, function(t, e) {
        e ? t.refs[eu] = t3(e) : delete t.refs[eu]
    }], 108922);
    let eE = "_sentryChildSpans",
        eI = "_sentryRootSpan",
        ew = eO;

    function eO(t) {
        return t[eI] || t
    }

    function eC(t) {
        return t === eO(t)
    }

    function eA(t) {
        let e = tE(p());
        return e.getActiveSpan ? e.getActiveSpan(t) : el(t || tw())
    }
    t.s(["_", 0, eO, "V", 0, function(t, e) {
        eC(t) && t.setAttribute(tQ, e)
    }, "i", 0, 0, "n", 0, 1, "P", 0, function(t, e) {
        let n = t[eI] || t;
        N(e, eI, n), e.setAttribute(tQ, void 0), !ev(t) || (t.isRecording() || n.isRecording()) && (t[eE] ? t[eE].add(e) : N(t, eE, new Set([e])))
    }, "t", 0, ek, "Q", 0, ef, "j", 0, eA, "e", 0, ew, "X", 0, ex, "C", 0, function(t) {
        let e = new Set;
        return ! function t(n) {
            if (!e.has(n) && ev(n))
                for (let r of (e.add(n), n[eE] ? Array.from(n[eE]) : [])) t(r)
        }(t), Array.from(e)
    }, "M", 0, eS, "D", 0, ed, "W", 0, function(t, e) {
        t[eE] && t[eE].delete(e)
    }, "S", 0, ev, "Z", 0, eC, "k", 0, eh, "l", 0, function(t) {
        if (eb(t)) return t.getSpanJSON();
        let {
            spanId: e,
            traceId: n
        } = t.spanContext();
        if (ey(t)) {
            let {
                attributes: r,
                startTime: i,
                name: s,
                endTime: o,
                status: a,
                links: c
            } = t;
            return {
                name: s,
                span_id: e,
                trace_id: n,
                parent_span_id: em(t),
                start_timestamp: eh(i),
                end_timestamp: eh(o) || void 0,
                is_segment: eC(t),
                status: ex(a),
                attributes: ek(r, a),
                links: ed(c)
            }
        }
        return {
            span_id: e,
            trace_id: n,
            start_timestamp: 0,
            name: "",
            status: "ok",
            is_segment: eC(t),
            attributes: {}
        }
    }, "U", 0, eg, "m", 0, ep, "N", 0, function(t) {
        let {
            traceId: e,
            spanId: n
        } = t.spanContext();
        return ea(e, n, ev(t))
    }, "o", 0, function(t) {
        let {
            traceId: e,
            spanId: n
        } = t.spanContext();
        return ec(e, n, ev(t))
    }, "K", 0, function(t) {
        let {
            spanId: e,
            traceId: n
        } = t.spanContext(), {
            data: r,
            op: i,
            parent_span_id: s,
            status: o,
            origin: a,
            links: c
        } = eg(t);
        return {
            parent_span_id: s,
            span_id: e,
            trace_id: n,
            data: r,
            op: i,
            status: o,
            origin: a,
            links: c
        }
    }, "g", 0, function(t) {
        return {
            ...t,
            end_timestamp: t.end_timestamp ?? t.start_timestamp,
            attributes: tH(t.attributes),
            links: t.links?.map(t => ({
                ...t,
                attributes: tH(t.attributes)
            }))
        }
    }], 511091);
    let e$ = new WeakMap;

    function ej(t) {
        return w(t) ? void 0 : t
    }

    function eP(t, e, n) {
        let r = ej(e.originalException),
            i = r && e$.get(r);
        if (!i) return;
        let s = t.contexts?.trace;
        (s?.trace_id ?? (n && t$(n).trace_id)) === i.trace_id && (t.contexts = {
            ...t.contexts,
            trace: {
                ...s,
                ...i
            }
        })
    }

    function eN(t) {
        if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
        let e = t || tA()?.getOptions();
        return !!e && (null != e.tracesSampleRate || !!e.tracesSampler)
    }
    t.s(["h", 0, eP, "z", 0, function(t, e) {
        let n = ej(t);
        !n || !ev(e) || e$.has(n) || e$.set(n, ep(e))
    }], 89268), t.s(["f", 0, eN], 85971);
    let eD = Symbol.for("sentry.nonRecordingSpan");

    function eR(t) {
        return !!t && !0 === t[eD]
    }
    t.s(["f", 0, class {
        constructor(t = {}) {
            this._traceId = t.traceId || tl(), this._spanId = t.spanId || tp(), this.dropReason = t.dropReason, N(this, eD, !0)
        }
        spanContext() {
            return {
                spanId: this._spanId,
                traceId: this._traceId,
                traceFlags: 0
            }
        }
        end(t) {}
        setAttribute(t, e) {
            return this
        }
        setAttributes(t) {
            return this
        }
        setStatus(t) {
            return this
        }
        updateName(t) {
            return this
        }
        isRecording() {
            return !1
        }
        addEvent(t, e, n) {
            return this
        }
        addLink(t) {
            return this
        }
        addLinks(t) {
            return this
        }
        recordException(t, e) {}
    }, "p", 0, eR], 143829);
    let eT = "_frozenDsc";

    function eM(t, e) {
        let n = e.getOptions(),
            {
                publicKey: r
            } = e.getDsn() || {},
            i = {
                environment: n.environment || tj,
                release: n.release,
                public_key: r,
                trace_id: t,
                org_id: tY(e)
            };
        return e.emit("createDsc", i), i
    }

    function eL(t, e) {
        if (tI()) return;
        let n = e.getPropagationContext();
        return n.dsc || eM(n.traceId, t)
    }

    function eU(t) {
        let e = tA();
        if (!e) return {};
        let n = ew(t),
            r = eg(n),
            i = r.data,
            s = n.spanContext().traceState,
            o = s?.get("sentry.sample_rate") ?? i[tV] ?? i[tX];

        function a(t) {
            return ("number" == typeof o || "string" == typeof o) && (t.sample_rate = `${o}`), t
        }
        let c = n[eT];
        if (c) return a(c);
        let u = eR(n),
            l = u && "ignored" === n.dropReason;
        if (u && (!eN(e.getOptions()) || l)) {
            let t = et(n).scope,
                r = t && eL(e, t);
            if (r) {
                let t = {
                    ...r
                };
                return l && (t.sampled = "false"), a(t)
            }
        }
        let p = s?.get("sentry.dsc"),
            f = p && en(p);
        if (f) return a(f);
        let d = eM(t.spanContext().traceId, e),
            h = i[tQ],
            _ = r.description;
        return "url" !== h && _ && (d.transaction = _), eN() && (d.sampled = String(ev(n)), d.sample_rand = s?.get("sentry.sample_rand") ?? et(n).scope?.getPropagationContext().sampleRand.toString()), a(d), e.emit("createDsc", d, n), d
    }

    function eJ(t, e) {
        var n, r, i, s, o, a;
        let c, {
            fingerprint: u,
            breadcrumbs: l,
            sdkProcessingMetadata: p
        } = e;
        (function(t, e) {
            let {
                extra: n,
                tags: r,
                user: i,
                contexts: s,
                level: o,
                transactionName: a
            } = e;
            Object.keys(n).length && (t.extra = {
                ...n,
                ...t.extra
            }), Object.keys(r).length && (t.tags = {
                ...r,
                ...t.tags
            }), Object.keys(i).length && (t.user = {
                ...i,
                ...t.user
            }), Object.keys(s).length && (t.contexts = {
                ...s,
                ...t.contexts
            }), o && (t.level = o), a && "transaction" !== t.type && (t.transaction = a)
        })(t, e), n = t, r = u, n.fingerprint = n.fingerprint ? Array.isArray(n.fingerprint) ? n.fingerprint : [n.fingerprint] : [], r && (n.fingerprint = n.fingerprint.concat(r)), n.fingerprint.length || delete n.fingerprint, i = t, s = l, c = [...i.breadcrumbs || [], ...s], i.breadcrumbs = c.length ? c : void 0, o = t, a = p, o.sdkProcessingMetadata = {
            ...o.sdkProcessingMetadata,
            ...a
        }
    }

    function eK(t, e) {
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
            attachments: f,
            propagationContext: d,
            transactionName: h
        } = e;
        ez(t, "extra", n), ez(t, "tags", r), ez(t, "attributes", i), ez(t, "user", s), ez(t, "contexts", o), t.sdkProcessingMetadata = tu(t.sdkProcessingMetadata, c, 2), a && (t.level = a), h && (t.transactionName = h), u.length && (t.breadcrumbs = [...t.breadcrumbs, ...u]), l.length && (t.fingerprint = [...t.fingerprint, ...l]), p.length && (t.eventProcessors = [...t.eventProcessors, ...p]), f.length && (t.attachments = [...t.attachments, ...f]), t.propagationContext = {
            ...t.propagationContext,
            ...d
        }
    }

    function ez(t, e, n) {
        t[e] = tu(t[e], n, 1)
    }

    function eW(t, e) {
        let n = tC().getScopeData();
        return t && eK(n, t.getScopeData()), e && eK(n, e.getScopeData()), n
    }

    function eY(t, e) {
        t.contexts = {
            trace: ep(e),
            ...t.contexts
        }, t.sdkProcessingMetadata = {
            dynamicSamplingContext: eU(e),
            ...t.sdkProcessingMetadata
        };
        let n = eg(ew(e)).description;
        n && !t.transaction && "transaction" === t.type && (t.transaction = n)
    }

    function eF(t) {
        if (t) {
            var e;
            return (e = t) instanceof tf || "function" == typeof e || Object.keys(t).some(t => eq.includes(t)) ? {
                captureContext: t
            } : t
        }
    }
    t.s(["m", 0, function(t, e) {
        N(t, eT, e)
    }, "H", 0, eL, "O", 0, eU], 785509), t.s(["Y", 0, eJ, "n", 0, eY, "Z", 0, eW], 646162);
    let eq = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"];

    function eB() {
        let t = tO(),
            e = tw().getSession() || t.getSession();
        e && tc(e), eG(), t.setSession()
    }

    function eG() {
        let t = tO(),
            e = tA(),
            n = t.getSession();
        n && e && e.captureSession(n)
    }
    t.s(["a", 0, eF, "H", 0, function(t, e, n, r, i, s) {
        var o, a, c;
        let u, {
                normalizeDepth: l = 3,
                normalizeMaxBreadth: p = 1e3
            } = t,
            f = {
                ...e,
                event_id: e.event_id || n.event_id || X(),
                timestamp: e.timestamp || tr()
            },
            d = n.integrations || t.integrations.map(t => t.name);
        (function(t, e) {
            let {
                environment: n,
                release: r,
                dist: i,
                maxValueLength: s
            } = e;
            t.environment = t.environment || n || tj, !t.release && r && (t.release = r), !t.dist && i && (t.dist = i);
            let o = t.request;
            o?.url && s && (o.url = Q(o.url, s)), s && t.exception?.values?.forEach(t => {
                t.value && (t.value = Q(t.value, s))
            })
        })(f, t), o = f, (a = d).length > 0 && (o.sdk = o.sdk || {}, o.sdk.integrations = [...o.sdk.integrations || [], ...a]), i && i.emit("applyFrameMetadata", e), void 0 === e.type && (c = f, u = tL(t.stackParser), c.exception?.values?.forEach(t => {
            t.stacktrace?.frames?.forEach(t => {
                t.filename && (t.debug_id = u[t.filename])
            })
        }));
        let _ = function(t, e) {
            if (!e) return t;
            let n = t ? t.clone() : new tf;
            return n.update(e), n
        }(r, n.captureContext);
        n.mechanism && te(f, n.mechanism);
        let g = i ? i.getEventProcessors() : [],
            m = eW(s, _),
            y = [...n.attachments || [], ...m.attachments];
        y.length && (n.attachments = y), eJ(f, m);
        let b = eA(_);
        b && eY(f, b), eP(f, n, _);
        let S = [...g, ...m.eventProcessors];
        return (n.data && !0 === n.data.__sentry__ ? tR(f) : function(t, e, n, r = 0, i) {
            try {
                let s = function t(e, n, r, i, s) {
                    let o = r[i];
                    if (!e || !o) return e;
                    let a = `Event processor "${o.id||"?"}"`,
                        c = !1,
                        u = tN(h ? `${a} threw an error, dropping event:` : "", () => o({
                            ...e
                        }, n), () => (c = !0, null));
                    return (h && null === u && v.log(`${a} dropped event`), j(u)) ? u.then(e => e ? t(e, n, r, i + 1, s) : (s?.(c ? "callback_error" : "event_processor"), null)) : u ? t(u, n, r, i + 1, s) : (s?.(c ? "callback_error" : "event_processor"), null)
                }(e, n, t, r, i);
                return j(s) ? s : tR(s)
            } catch (t) {
                return tT(t)
            }
        }(S, f, n, 0, t => {
            i && (i.recordDroppedEvent(t, tG(e.type)), "transaction" === e.type && i.recordDroppedEvent(t, "span", 1 + (e.spans || []).length))
        })).then(t => t ? (function(t) {
            let e = {};
            if (t.exception?.values?.forEach(t => {
                    t.stacktrace?.frames?.forEach(t => {
                        t.debug_id && (t.abs_path ? e[t.abs_path] = t.debug_id : t.filename && (e[t.filename] = t.debug_id), delete t.debug_id)
                    })
                }), 0 === Object.keys(e).length) return;
            t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
            let n = t.debug_meta.images;
            Object.entries(e).forEach(([t, e]) => {
                n.push({
                    type: "sourcemap",
                    code_file: t,
                    debug_id: e
                })
            })
        }(t), "number" == typeof l && l > 0) ? function(t, e, n) {
            if (!t) return null;
            let r = {
                ...t,
                ...t.breadcrumbs && {
                    breadcrumbs: t.breadcrumbs.map(t => ({
                        ...t,
                        ...t.data && {
                            data: H(t.data, e, n)
                        }
                    }))
                },
                ...t.user && {
                    user: H(t.user, e, n)
                },
                ...t.contexts && {
                    contexts: H(t.contexts, e, n)
                },
                ...t.extra && {
                    extra: H(t.extra, e, n)
                }
            };
            return t.contexts?.trace && r.contexts && (r.contexts.trace = t.contexts.trace, t.contexts.trace.data && (r.contexts.trace.data = H(t.contexts.trace.data, e, n))), t.spans && (r.spans = t.spans.map(t => ({
                ...t,
                ...t.data && {
                    data: H(t.data, e, n)
                }
            }))), t.contexts?.flags && r.contexts && (r.contexts.flags = H(t.contexts.flags, 3, n)), r
        }(t, l, p) : t : null)
    }], 151348), t.s(["A", 0, function(t) {
        tO().addEventProcessor(t)
    }, "f", 0, function(t, e) {
        return tw().captureEvent(t, e)
    }, "y", 0, function(t, e) {
        return tw().captureException(t, eF(e))
    }, "L", 0, function(t = !1) {
        t ? eB() : eG()
    }, "B", 0, function() {
        let t = tA();
        return t?.getOptions().enabled !== !1 && !!t?.getTransport()
    }, "g", 0, function(t, e) {
        tO().setContext(t, e)
    }, "M", 0, function(t) {
        let e = tO(),
            {
                user: n
            } = eW(e, tw()),
            {
                userAgent: r
            } = l.navigator || {},
            i = to({
                user: n,
                ...r && {
                    userAgent: r
                },
                ...t
            }),
            s = e.getSession();
        return s?.status === "ok" && ta(s, {
            status: "exited"
        }), eB(), e.setSession(i), i
    }], 309578)
}]);

//# debugId=aad44963-8014-663d-b876-9425c20f0b40