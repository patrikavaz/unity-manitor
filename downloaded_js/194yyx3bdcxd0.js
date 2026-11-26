;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "c976f0d1-ba6f-fb68-9886-174718f00e46")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 309578, 920618, 414542, 993448, 997629, 432764, 134454, 419369, 396450, 267269, 390740, 39561, 530598, 764580, 96342, 636933, 413007, 377656, 523299, 919610, 932881, 762783, 319074, 981317, 989542, 597968, 445972, 351384, 551364, 597121, 121284, 185658, 820899, 798844, 108922, 511091, 89268, 85971, 143829, 785509, 646162, 151348, t => {
    "use strict";
    let e, n, r, i, s, o, a, u, c = "11.1.0";
    t.s(["f", 0, c], 920618);
    let l = globalThis;

    function f() {
        return p(l), l
    }

    function p(t) {
        let e = t.__SENTRY__ = t.__SENTRY__ || {};
        return e.version = e.version || c, e[c] = e[c] || {}
    }

    function d(t, e, n = l) {
        let r = n.__SENTRY__ = n.__SENTRY__ || {},
            i = r[c] = r[c] || {};
        return i[t] || (i[t] = e())
    }
    t.s(["f", 0, l], 414542), t.s(["u", 0, d, "t", 0, f, "y", 0, p], 993448), t.s(["f", 0, !1], 997629);
    let h = {};

    function _(t) {
        if (!("console" in l)) return t();
        let e = l.console,
            n = {},
            r = Object.keys(h);
        r.forEach(t => {
            let r = h[t];
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

    function g(t) {}

    function m() {
        return {
            enabled: !1
        }
    }
    let y = {
        enable: function() {
            m().enabled = !0
        },
        disable: function() {
            m().enabled = !1
        },
        isEnabled: function() {
            return m().enabled
        },
        log: function(...t) {
            g("log", ...t)
        },
        warn: function(...t) {
            g("warn", ...t)
        },
        error: function(...t) {
            g("error", ...t)
        }
    };
    t.s(["u", 0, ["debug", "info", "warn", "error", "log", "assert", "trace"], "D", 0, _, "h", 0, y, "r", 0, h], 432764);
    let b = Object.prototype.toString;

    function v(t) {
        switch (b.call(t)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
            case "[object WebAssembly.Exception]":
                return !0;
            default:
                return P(t, Error)
        }
    }

    function S(t, e) {
        return b.call(t) === `[object ${e}]`
    }

    function x(t) {
        return S(t, "String")
    }

    function k(t) {
        return "object" == typeof t && null !== t && "__sentry_template_string__" in t && "__sentry_template_values__" in t
    }

    function E(t) {
        return null === t || k(t) || "object" != typeof t && "function" != typeof t
    }

    function w(t) {
        return S(t, "Object")
    }

    function I(t) {
        return "object" == typeof t && null !== t
    }

    function O(t) {
        return "u" > typeof Event && P(t, Event)
    }

    function C(t) {
        return S(t, "RegExp")
    }

    function A(t) {
        return !!(t?.then && "function" == typeof t.then)
    }

    function P(t, e) {
        try {
            return t instanceof e
        } catch {
            return !1
        }
    }

    function j(t, e, n) {
        try {
            Object.defineProperty(t, e, {
                value: n,
                writable: !0,
                configurable: !0
            })
        } catch {}
    }

    function $(t, e) {
        try {
            let n = e.prototype || {};
            t.prototype = e.prototype = n, j(t, "__sentry_original__", e)
        } catch {}
    }

    function D(t) {
        if (v(t)) return {
            message: t.message,
            name: t.name,
            stack: t.stack,
            ...N(t)
        };
        if (O(t)) {
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
                ...N(t)
            }
        }
        return t
    }

    function N(t) {
        return I(t) ? Object.fromEntries(Object.entries(t)) : {}
    }

    function R(t) {
        if (void 0 !== e) return e ? e(t) : t();
        let n = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
        return n in l && "function" == typeof l[n] ? (e = l[n])(t) : (e = null, t())
    }

    function M() {
        return R(() => Math.random())
    }

    function T() {
        return R(() => Date.now())
    }
    t.s(["U", 0, function(t) {
        return S(t, "DOMError")
    }, "a", 0, function(t) {
        return S(t, "DOMException")
    }, "b", 0, v, "u", 0, function(t) {
        return S(t, "ErrorEvent")
    }, "z", 0, O, "v", 0, P, "t", 0, I, "S", 0, k, "d", 0, w, "n", 0, E, "C", 0, C, "G", 0, function(t) {
        return "u" > typeof Request && P(t, Request)
    }, "Z", 0, x, "l", 0, A], 134454), t.s(["O", 0, j, "F", 0, D, "v", 0, function(t) {
        let e = Object.keys(D(t));
        return e.sort(), e[0] ? e.join(", ") : "[object has no keys]"
    }, "Q", 0, function(t, e, n) {
        if (!(e in t)) return;
        let r = t[e];
        if ("function" != typeof r) return;
        let i = n(r);
        "function" == typeof i && $(i, r);
        try {
            t[e] = i
        } catch {}
    }, "R", 0, function(t) {
        return t.__sentry_original__
    }, "u", 0, $], 419369), t.s(["D", 0, T, "T", 0, M, "j", 0, R], 396450);
    let L = Symbol.for("sentry.skipNormalization"),
        U = Symbol.for("sentry.overrideNormalizationDepth"),
        J = /\(error: (.*)\)/,
        K = /captureMessage|captureException/;

    function W(...t) {
        let e = t.sort((t, e) => t[0] - e[0]).map(t => t[1]);
        return (t, n = 0, r = 0) => {
            let i = [],
                s = t.split("\n");
            for (let t = n; t < s.length; t++) {
                let n = s[t];
                n.length > 1024 && (n = n.slice(0, 1024));
                let o = J.test(n) ? n.replace(J, "$1") : n;
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
            return /sentryWrapped/.test(z(a).function || "") && a.pop(), a.reverse(), K.test(z(a).function || "") && (a.pop(), K.test(z(a).function || "") && a.pop()), a.slice(0, 50).map(t => ({
                ...t,
                filename: t.filename || z(a).filename,
                function: t.function || "?"
            }))
        }
    }

    function z(t) {
        return t[t.length - 1] || {}
    }
    let q = "<anonymous>";

    function F(t) {
        try {
            if (!t || "function" != typeof t) return q;
            return t.name || q
        } catch {
            return q
        }
    }

    function B(t, e = 100, n = 1 / 0) {
        try {
            return function t(e, n, r = 1 / 0, i = 1 / 0, s = function() {
                let t = new WeakSet;
                return [function(e) {
                    return !!t.has(e) || (t.add(e), !1)
                }, function(e) {
                    t.delete(e)
                }]
            }()) {
                let o, [a, u] = s;
                if (null == n || ["boolean", "string"].includes(typeof n) || "number" == typeof n && Number.isFinite(n)) return n;
                let c = Y(e, n);
                if (!c.startsWith("[object ")) return c;
                if (n[L]) return n;
                let l = "number" == typeof(o = n[U]) ? o : void 0,
                    f = void 0 !== l ? l : r;
                if (0 === f) return c.replace("object ", "");
                if (a(n)) return "[Circular ~]";
                if (n && "function" == typeof n.toJSON) try {
                    let e = n.toJSON();
                    return t("", e, f - 1, i, s)
                } catch {}
                let p = Array.isArray(n) ? [] : {},
                    d = 0,
                    h = D(n);
                for (let e in h) {
                    if (!Object.prototype.hasOwnProperty.call(h, e)) continue;
                    if (d >= i) {
                        p[e] = "[MaxProperties ~]";
                        break
                    }
                    let n = h[e];
                    p[e] = t(e, n, f - 1, i, s), d++
                }
                return u(n), p
            }("", t, e, n)
        } catch (t) {
            return {
                ERROR: `**non-serializable** (${t})`
            }
        }
    }

    function Y(e, r) {
        try {
            var i;
            let e;
            if (n) {
                let t = n(r);
                if (t) return t
            }
            if (r === t.g) return "[Global]";
            if ("number" == typeof r && !Number.isFinite(r)) return `[${r}]`;
            if ("function" == typeof r) return `[Function: ${F(r)}]`;
            if ("symbol" == typeof r) return `[${String(r)}]`;
            if ("bigint" == typeof r) return `[BigInt: ${String(r)}]`;
            let s = (i = r, e = Object.getPrototypeOf(i), e?.constructor ? e.constructor.name : "null prototype");
            return `[object ${s}]`
        } catch (t) {
            return `**non-serializable** (${t})`
        }
    }

    function H(t, e = 0) {
        return "string" != typeof t || 0 === e || t.length <= e ? t : `${t.slice(0,e)}...`
    }

    function Z(t, e, n = !1) {
        return !!x(t) && (C(e) ? e.test(t) : x(e) ? n ? t === e : t.includes(e) : "function" == typeof e && e(t))
    }

    function G(t = l.crypto || l.msCrypto) {
        try {
            if (t?.randomUUID) return R(() => t.randomUUID()).replace(/-/g, "")
        } catch {}
        return r || (r = "10000000100040008000100000000000"), r.replace(/[018]/g, t => (t ^ (15 & 16 * M()) >> t / 4).toString(16))
    }

    function Q(t) {
        return t.exception?.values?.[0]
    }

    function V(t, e) {
        let n = t.exception?.values,
            r = n?.find(t => t.mechanism?.exception_id === 0) ?? n?.[0];
        r && X(r, e)
    }

    function X(t, e) {
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

    function tt() {
        return T() / 1e3
    }

    function te() {
        return (i ?? (i = function() {
            let {
                performance: t
            } = l;
            if (!t?.now || !t.timeOrigin) return tt;
            let e = t.timeOrigin;
            return () => (e + R(() => t.now())) / 1e3
        }()))()
    }
    t.s(["z", 0, "?", "O", 0, W, "s", 0, function(t) {
        let e = t.exception;
        if (e) {
            let t = [];
            try {
                return e.values.forEach(e => {
                    e.stacktrace.frames && t.push(...e.stacktrace.frames)
                }), t
            } catch {}
        }
    }, "n", 0, F, "y", 0, function(t) {
        let e = t?.startsWith("file://") ? t.slice(7) : t;
        return e?.match(/\/[A-Z]:/) && (e = e.slice(1)), e
    }, "E", 0, function(t) {
        return Array.isArray(t) ? W(...t) : t
    }], 267269), t.s(["S", 0, B, "B", 0, function t(e, n = 3, r = 102400) {
        let i = B(e, n);
        return ~-encodeURI(JSON.stringify(i)).split(/%..|./).length > r ? t(e, n - 1, r) : i
    }, "Q", 0, function(t) {
        n = t
    }, "W", 0, Y], 390740), t.s(["w", 0, Z, "c", 0, function(t, e) {
        if (!Array.isArray(t)) return "";
        let n = [];
        for (let e = 0; e < t.length; e++) {
            let r = t[e];
            E(r) ? n.push(String(r)) : r instanceof Error ? n.push(r.message ? `${r.name}: ${r.message}` : r.name) : n.push(Y(void 0, r))
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
            if (Z(t, r, n)) return !0;
        return !1
    }, "k", 0, H], 39561), t.s(["o", 0, function(t, e) {
        let n = Q(t);
        n && X(n, e)
    }, "v", 0, V, "T", 0, function(t, e, n) {
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
            j(t, "__sentry_captured__", !0)
        } catch {}
        return !1
    }, "N", 0, function(t) {
        let {
            message: e,
            event_id: n
        } = t;
        if (e) return e;
        let r = Q(t);
        return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
    }, "c", 0, G], 530598);
    let tn = null;

    function tr(t) {
        let e = te(),
            n = {
                sid: G(),
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
        return t && ti(n, t), n
    }

    function ti(t, e = {}) {
        if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), t.did || e.did || (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || te(), e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = 32 === e.sid.length ? e.sid : G()), void 0 !== e.init && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), "number" == typeof e.started && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
        else if ("number" == typeof e.duration) t.duration = e.duration;
        else {
            let e = t.timestamp - t.started;
            t.duration = e >= 0 ? e : 0
        }
        e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), "number" == typeof e.errors && (t.errors = e.errors), e.status && (t.status = e.status)
    }

    function ts(t, e) {
        let n = {};
        e ? n = {
            status: e
        } : "ok" === t.status && (n = {
            status: "exited"
        }), ti(t, n)
    }

    function to(t, e, n = 2) {
        if (!e || "object" != typeof e || n <= 0) return e;
        if (t && 0 === Object.keys(e).length) return t;
        let r = {
            ...t
        };
        for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = to(r[t], e[t], n - 1));
        return r
    }

    function ta() {
        return G()
    }

    function tu() {
        return G().substring(16)
    }
    t.s(["D", 0, function() {
        return null === tn && (tn = function() {
            let {
                performance: t
            } = l;
            if (!t?.now) return;
            let e = R(() => t.now()),
                n = T(),
                r = t.timeOrigin;
            return "number" == typeof r && 3e5 > Math.abs(r + e - n) ? r : n - e
        }()), tn
    }, "i", 0, tt, "R", 0, te], 764580), t.s(["n", 0, ts, "r", 0, tr, "d", 0, ti], 96342), t.s(["f", 0, to], 636933), t.s(["d", 0, tu, "u", 0, ta], 413007);
    class tc {
        constructor() {
            this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, j(this, "refs", {}), this._propagationContext = {
                traceId: ta(),
                sampleRand: M()
            }
        }
        clone() {
            let t = new tc;
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
            }, this._session && ti(this._session, {
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
                    fingerprint: u = [],
                    propagationContext: c,
                    conversationId: l
                } = (e instanceof tc ? e.getScopeData() : w(e) ? t : void 0) || {};
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
            }, s && Object.keys(s).length && (this._user = s), a && (this._level = a), u.length && (this._fingerprint = u), c && (this._propagationContext = c), l && (this._conversationId = l), this
        }
        addBreadcrumb(t, e) {
            let n = "number" == typeof e ? e : 100;
            if (n <= 0) return this;
            let r = {
                timestamp: tt(),
                ...t,
                message: t.message ? H(t.message, 2048) : t.message
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
            return this._sdkProcessingMetadata = to(this._sdkProcessingMetadata, t, 2), this
        }
        setPropagationContext(t) {
            return this._propagationContext = t, this
        }
        getPropagationContext() {
            return this._propagationContext
        }
        captureException(t, e) {
            let n = e?.event_id || G();
            if (!this._client) return n;
            let r = Error("Sentry syntheticException");
            return this._client.captureException(t, {
                originalException: t,
                syntheticException: r,
                ...e,
                event_id: n
            }, this), n
        }
        captureMessage(t, e, n) {
            let r = n?.event_id || G();
            if (!this._client) return r;
            let i = n?.syntheticException ?? Error(t);
            return this._client.captureMessage(t, e, {
                originalException: t,
                syntheticException: i,
                ...n,
                event_id: r
            }, this), r
        }
        captureEvent(t, e) {
            let n = t.event_id || e?.event_id || G();
            return this._client && this._client.captureEvent(t, {
                ...e,
                event_id: n
            }, this), n
        }
        _notifyScopeListeners() {
            this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(t => {
                t(this)
            }), this._notifyingListeners = !1)
        }
    }
    let tl = "__SENTRY_SUPPRESS_TRACING__";
    t.s(["f", 0, tl], 377656);
    let tf = t => t instanceof Promise && !t[tp],
        tp = Symbol("chained PromiseLike"),
        td = (t, e, n) => {
            let r = t.then(t => (e(t), t), t => {
                throw n(t), t
            });
            return tf(r) && tf(t) ? r : th(t, r)
        },
        th = (t, e) => {
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
                [tp]: !0
            }), e
        };
    t.s(["f", 0, td], 523299);
    class t_ {
        constructor(t, e) {
            let n, r;
            n = t || new tc, r = e || new tc, this._stack = [{
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
            return A(e) ? td(e, () => this._popScope(), () => this._popScope()) : (this._popScope(), e)
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

    function tg() {
        let t = p(f());
        return t.stack = t.stack || new t_(d("defaultCurrentScope", () => new tc), d("defaultIsolationScope", () => new tc))
    }

    function tm(t) {
        return tg().withScope(t)
    }

    function ty(t, e) {
        let n = tg();
        return n.withScope(() => (n.getStackTop().scope = t, e(t)))
    }

    function tb(t) {
        return tg().withScope(() => t(tg().getIsolationScope()))
    }

    function tv(t) {
        return tm(e => {
            e.setSDKProcessingMetadata({
                [tl]: !0
            });
            let n = t();
            return e.setSDKProcessingMetadata({
                [tl]: void 0
            }), n
        })
    }

    function tS(t) {
        let e = p(t);
        return e.acs ? e.acs : {
            suppressTracing: tv,
            withIsolationScope: tb,
            withScope: tm,
            withSetScope: ty,
            withSetIsolationScope: (t, e) => tb(e),
            getCurrentScope: () => tg().getScope(),
            getIsolationScope: () => tg().getIsolationScope()
        }
    }

    function tx() {
        return p(f()).externalPropagationContextProvider?.()
    }

    function tk() {
        return tS(f()).getCurrentScope()
    }

    function tE() {
        return tS(f()).getIsolationScope()
    }

    function tw() {
        return d("globalScope", () => new tc)
    }

    function tI() {
        return tk().getClient()
    }

    function tO(t) {
        let e = tx();
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
            span_id: i || tu()
        };
        return r && (s.parent_span_id = r), s
    }
    t.s(["f", 0, tS], 919610), t.s(["l", 0, tI, "d", 0, tk, "k", 0, tx, "J", 0, tw, "V", 0, tE, "i", 0, tO, "K", 0, function() {
        return void 0 !== p(f()).externalPropagationContextProvider
    }, "h", 0, function(...t) {
        let e = tS(f());
        if (2 === t.length) {
            let [n, r] = t;
            return n ? e.withSetScope(n, r) : e.withScope(r)
        }
        return e.withScope(t[0])
    }], 932881);
    let tC = "production";
    t.s(["f", 0, tC], 762783);
    let tA = Symbol.for("SentryCallbackError");

    function tP(t, e, n) {
        let r;
        try {
            r = e()
        } catch (e) {
            return function(t, e, n) {
                return n(e)
            }(t, e, n)
        }
        return A(r) ? r.then(void 0, e => (function(t, e, n) {
            return n(e)
        })(t, e, n)) : r
    }

    function tj(t) {
        return new tD(e => {
            e(t)
        })
    }

    function t$(t) {
        return new tD((e, n) => {
            n(t)
        })
    }
    t.s(["G", 0, tA, "E", 0, tP], 319074);
    class tD {
        constructor(t) {
            this._state = 0, this._handlers = [], this._runExecutor(t)
        }
        then(t, e) {
            return new tD((n, r) => {
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
            return new tD((e, n) => {
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
                        if (A(e)) return void e.then(n, r);
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
    t.s(["K", 0, t$, "Y", 0, tj], 981317);
    let tN = /^o(\d+)\./,
        tR = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;

    function tM(t, e = !1) {
        let {
            host: n,
            path: r,
            pass: i,
            port: s,
            projectId: o,
            protocol: a,
            publicKey: u
        } = t;
        return `${a}://${u}${e&&i?`:${i}`:""}@${n}${s?`:${s}`:""}/${r?`${r}/`:r}${o}`
    }

    function tT(t) {
        let e = tR.exec(t);
        if (!e) return void _(() => {
            console.error(`Invalid Sentry Dsn: ${t}`)
        });
        let [n, r, i = "", s = "", o = "", a = ""] = e.slice(1), u = "", c = a, l = c.split("/");
        if (l.length > 1 && (u = l.slice(0, -1).join("/"), c = l.pop()), c) {
            let t = c.match(/^\d+/);
            t && (c = t[0])
        }
        return tL({
            host: s,
            pass: i,
            path: u,
            projectId: c,
            port: o,
            protocol: n,
            publicKey: r
        })
    }

    function tL(t) {
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

    function tU(t) {
        let e, n = t.getOptions(),
            {
                host: r
            } = t.getDsn() || {};
        if (n.orgId) e = String(n.orgId);
        else {
            let t;
            r && (t = r.match(tN), e = t?.[1])
        }
        return e
    }

    function tJ(t, e) {
        for (let n of t[1]) {
            let t = n[0].type;
            if (e(n, t)) return !0
        }
        return !1
    }

    function tK(t) {
        let e = p(l);
        return e.encodePolyfill ? e.encodePolyfill(t) : new TextEncoder().encode(t)
    }
    t.s(["o", 0, tT, "_", 0, tM, "T", 0, tU, "p", 0, function(t) {
        let e = "string" == typeof t ? tT(t) : tL(t);
        if (e && 1) return e
    }], 989542);
    let tW = {
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

    function tz(t) {
        return "replay_event" === t ? "replay" : t || "error"
    }

    function tq(t, e = !1) {
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

    function tF(t) {
        return "string" == typeof t ? 2 * t.length : "boolean" == typeof t ? 4 : 8 * ("number" == typeof t)
    }
    t.s(["S", 0, function(t, e) {
        let [n, r] = t;
        return [n, [...r, e]]
    }, "i", 0, function(t) {
        let e = "string" == typeof t.data ? tK(t.data) : t.data;
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
            sent_at: new Date(T()).toISOString(),
            ...e && {
                sdk: e
            },
            ...!!n && r && {
                dsn: tM(r)
            },
            ...i && {
                trace: i
            }
        }
    }, "Q", 0, function(t, e) {
        return tJ(t, (t, n) => e.includes(n))
    }, "h", 0, function(t) {
        return t in tW ? tW[t] : t
    }, "E", 0, tJ, "p", 0, tz, "X", 0, function(t) {
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
            "string" == typeof r ? r = "string" == typeof t ? r + t : [tK(r), t] : r.push("string" == typeof t ? tK(t) : t)
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
                    t = JSON.stringify(B(n))
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
            Array.isArray(t) ? e += tF(t[0]) * t.length : E(t) ? e += tF(t) : e += 100
        }
        return e
    }, "w", 0, tq], 445972);
    let tB = "sentry.segment.name.source";
    t.s(["a", 0, "browser.navigation.id", "g", 0, "browser.navigation.type", "R", 0, "browser.paint.type", "W", 0, "browser.web_vital.inp.interaction_type", "H", 0, "browser.web_vital.inp.target", "X", 0, "code.file.path", "K", 0, "code.function.name", "y", 0, "http.request.header", "l", 0, "http.request.method", "o", 0, "http.request.same_origin", "v", 0, "http.response.body.size", "x", 0, "http.response.size", "L", 0, "http.response.status_code", "C", 0, "http.route", "D", 0, "network.connection.effective_type", "Q", 0, "network.connection.rtt", "Y", 0, "network.connection.type", "m", 0, "sentry.idle_span_finish_reason", "e", 0, "sentry.is_localhost", "n", 0, "sentry.op", "j", 0, "sentry.origin", "f", 0, "sentry.replay_id", "A", 0, "sentry.sdk.name", "d", 0, "sentry.sdk.version", "w", 0, "sentry.segment.id", "z", 0, "sentry.segment.name", "O", 0, tB, "S", 0, "sentry.trace_lifecycle", "i", 0, "sentry.transaction", "U", 0, "server.address", "k", 0, "server.port", "T", 0, "ui.component_name", "b", 0, "url.domain", "E", 0, "url.fragment", "V", 0, "url.full", "Z", 0, "url.path", "c", 0, "url.port", "p", 0, "url.query", "h", 0, "url.scheme", "q", 0, "url.template", "r", 0, "user_agent.original"], 351384);
    let tY = "sentry.sample_rate",
        tH = "sentry.previous_trace_sample_rate",
        tZ = "sentry.op",
        tG = "sentry.origin",
        tQ = "sentry.status.message";
    t.s(["E", 0, "gen_ai.conversation.id", "_", 0, "sentry.exclusive_time", "G", 0, "http.request.method", "q", 0, "sentry.profile_id", "j", 0, "sentry.custom_span_name", "F", 0, "sentry.environment", "i", 0, "sentry.idle_span_finish_reason", "B", 0, "sentry.measurement_unit", "x", 0, "sentry.measurement_value", "o", 0, tZ, "u", 0, tG, "t", 0, tH, "e", 0, "sentry.release", "s", 0, tY, "h", 0, "sentry.sdk.integrations", "Z", 0, tQ, "v", 0, "user.email", "J", 0, "user.id", "w", 0, "user.ip_address", "r", 0, "user.name", "S", 0, "sentry.link.type"], 551364);
    let tV = ["ok", "deadline_exceeded", "unauthenticated", "permission_denied", "not_found", "resource_exhausted", "invalid_argument", "unimplemented", "unavailable", "internal_error", "unknown_error", "cancelled", "already_exists", "failed_precondition", "aborted", "out_of_range", "data_loss"];

    function tX(t) {
        return "ok" !== t && tV.includes(t)
    }

    function t0(t) {
        try {
            let e = l.WeakRef;
            if ("function" == typeof e) return new e(t)
        } catch {}
        return t
    }

    function t1(t) {
        if (t) {
            if ("object" == typeof t && "deref" in t && "function" == typeof t.deref) try {
                return t.deref()
            } catch {
                return
            }
            return t
        }
    }
    t.s(["r", 0, 2, "b", 0, 1, "s", 0, 0, "g", 0, tX, "x", 0, function(t, e) {
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
    let t9 = "_sentryScope",
        t2 = "_sentryIsolationScope",
        t4 = Symbol.for("sentry.tracerProviderSpan");

    function t3(t) {
        return {
            scope: t[t9],
            isolationScope: t1(t[t2])
        }
    }
    t.s(["C", 0, t3, "q", 0, function(t, e, n) {
        t && (j(t, t2, t0(n)), j(t, t9, e))
    }, "I", 0, function(t) {
        return !0 === t[t4]
    }], 121284);
    let t5 = "sentry-";

    function t8(t) {
        let e = t6(t);
        if (!e) return;
        let n = Object.entries(e).reduce((t, [e, n]) => (e.startsWith(t5) && (t[e.slice(t5.length)] = n), t), {});
        return Object.keys(n).length > 0 ? n : void 0
    }

    function t6(t) {
        if (t && (x(t) || Array.isArray(t))) return Array.isArray(t) ? t.reduce((t, e) => (Object.entries(t7(e)).forEach(([e, n]) => {
            t[e] = n
        }), t), {}) : t7(t)
    }

    function t7(t) {
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

    function et(t) {
        if ("boolean" == typeof t) return Number(t);
        let e = "string" == typeof t ? parseFloat(t) : t;
        if (!("number" != typeof e || isNaN(e)) && !(e < 0) && !(e > 1)) return e
    }
    t.s(["p", 0, t5, "T", 0, t8, "N", 0, function(t) {
        if (t) {
            var e = Object.entries(t).reduce((t, [e, n]) => (n && (t[`${t5}${e}`] = n), t), {});
            return 0 !== Object.keys(e).length ? Object.entries(e).reduce((t, [e, n], r) => {
                let i = `${encodeURIComponent(e)}=${encodeURIComponent(n)}`,
                    s = 0 === r ? i : `${t},${i}`;
                return s.length > 8192 ? t : s
            }, "") : void 0
        }
    }, "O", 0, t6], 185658), t.s(["f", 0, et], 820899);
    let ee = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

    function en(t = ta(), e = tu(), n) {
        let r = "";
        return void 0 !== n && (r = n ? "-1" : "-0"), `${t}-${e}${r}`
    }

    function er(t = ta(), e = tu(), n) {
        return `00-${t}-${e}-${n?"01":"00"}`
    }
    t.s(["v", 0, ee, "J", 0, en, "z", 0, er, "C", 0, function(t, e) {
        let n = function(t) {
                let e;
                if (!t) return;
                let n = t.match(ee);
                if (n) return "1" === n[3] ? e = !0 : "0" === n[3] && (e = !1), {
                    traceId: n[1],
                    parentSampled: e,
                    parentSpanId: n[2]
                }
            }(t),
            r = t8(e);
        if (!n?.traceId) return {
            traceId: ta(),
            sampleRand: M()
        };
        let i = function(t, e) {
            let n = et(e?.sample_rand);
            if (void 0 !== n) return n;
            let r = et(e?.sample_rate);
            return r && t?.parentSampled !== void 0 ? t.parentSampled ? M() * r : r + M() * (1 - r) : M()
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
        let n = tU(t);
        return e && n && e !== n ? (y.log(`Won't continue trace because org IDs don't match (incoming baggage: ${e}, SDK options: ${n})`), !1) : !t.getOptions().strictTraceContinuation || (!e || !!n) && (!!e || !n) || (y.log(`Starting a new trace because strict trace continuation is enabled but one org ID is missing (incoming baggage: ${e}, Sentry client: ${n})`), !1)
    }], 798844);
    let ei = "span";

    function es(t) {
        return t1(t.refs[ei])
    }

    function eo(t) {
        let {
            spanId: e,
            traceId: n,
            isRemote: r
        } = t.spanContext(), i = r ? e : ef(t).parent_span_id, s = t3(t).scope;
        return {
            parent_span_id: i,
            span_id: r ? s?.getPropagationContext().propagationSpanId || tu() : e,
            trace_id: n
        }
    }

    function ea(t) {
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

    function eu(t) {
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

    function ec(t) {
        return "number" == typeof t ? el(t) : Array.isArray(t) ? t[0] + t[1] / 1e9 : t instanceof Date ? el(t.getTime()) : te()
    }

    function el(t) {
        return t > 0x2540be3ff ? t / 1e3 : t
    }

    function ef(t) {
        if (eh(t)) return t.getStaticSpanJSON();
        let {
            spanId: e,
            traceId: n
        } = t.spanContext();
        if (ed(t)) {
            let {
                attributes: r,
                startTime: i,
                name: s,
                endTime: o,
                status: a,
                links: u
            } = t;
            return {
                span_id: e,
                trace_id: n,
                data: r,
                description: s,
                parent_span_id: ep(t),
                start_timestamp: ec(i),
                timestamp: ec(o) || void 0,
                status: eg(a),
                op: r[tZ],
                origin: r[tG],
                links: ea(u)
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

    function ep(t) {
        return "parentSpanId" in t ? t.parentSpanId : "parentSpanContext" in t ? t.parentSpanContext?.spanId : void 0
    }

    function ed(t) {
        return !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status
    }

    function eh(t) {
        return "function" == typeof t.getSpanJSON
    }

    function e_(t) {
        let {
            traceFlags: e
        } = t.spanContext();
        return 1 === e
    }

    function eg(t) {
        return t && 0 !== t.code && 1 !== t.code ? t.message && tX(t.message) ? t.message : "internal_error" : "ok"
    }

    function em(t) {
        return t && 1 !== t.code && 0 !== t.code && "cancelled" !== t.message ? "error" : "ok"
    }

    function ey(t, e) {
        let n = "error" === em(e) ? e?.message : void 0;
        return {
            ...n && {
                [tQ]: n
            },
            ...t
        }
    }
    t.s(["c", 0, es, "_", 0, function(t, e) {
        e ? t.refs[ei] = t0(e) : delete t.refs[ei]
    }], 108922);
    let eb = "_sentryChildSpans",
        ev = "_sentryRootSpan",
        eS = ex;

    function ex(t) {
        return t[ev] || t
    }

    function ek(t) {
        return t === ex(t)
    }

    function eE(t) {
        let e = tS(f());
        return e.getActiveSpan ? e.getActiveSpan(t) : es(t || tk())
    }
    t.s(["_", 0, ex, "V", 0, function(t, e) {
        ek(t) && t.setAttribute(tB, e)
    }, "i", 0, 0, "n", 0, 1, "P", 0, function(t, e) {
        let n = t[ev] || t;
        j(e, ev, n), e.setAttribute(tB, void 0), !e_(t) || (t.isRecording() || n.isRecording()) && (t[eb] ? t[eb].add(e) : j(t, eb, new Set([e])))
    }, "t", 0, ey, "Q", 0, ea, "j", 0, eE, "e", 0, eS, "X", 0, em, "C", 0, function(t) {
        let e = new Set;
        return ! function t(n) {
            if (!e.has(n) && e_(n))
                for (let r of (e.add(n), n[eb] ? Array.from(n[eb]) : [])) t(r)
        }(t), Array.from(e)
    }, "M", 0, eg, "D", 0, eu, "W", 0, function(t, e) {
        t[eb] && t[eb].delete(e)
    }, "S", 0, e_, "Z", 0, ek, "k", 0, ec, "l", 0, function(t) {
        if (eh(t)) return t.getSpanJSON();
        let {
            spanId: e,
            traceId: n
        } = t.spanContext();
        if (ed(t)) {
            let {
                attributes: r,
                startTime: i,
                name: s,
                endTime: o,
                status: a,
                links: u
            } = t;
            return {
                name: s,
                span_id: e,
                trace_id: n,
                parent_span_id: ep(t),
                start_timestamp: ec(i),
                end_timestamp: ec(o) || void 0,
                is_segment: ek(t),
                status: em(a),
                attributes: ey(r, a),
                links: eu(u)
            }
        }
        return {
            span_id: e,
            trace_id: n,
            start_timestamp: 0,
            name: "",
            status: "ok",
            is_segment: ek(t),
            attributes: {}
        }
    }, "U", 0, ef, "m", 0, eo, "N", 0, function(t) {
        let {
            traceId: e,
            spanId: n
        } = t.spanContext();
        return en(e, n, e_(t))
    }, "o", 0, function(t) {
        let {
            traceId: e,
            spanId: n
        } = t.spanContext();
        return er(e, n, e_(t))
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
            links: u
        } = ef(t);
        return {
            parent_span_id: s,
            span_id: e,
            trace_id: n,
            data: r,
            op: i,
            status: o,
            origin: a,
            links: u
        }
    }, "g", 0, function(t) {
        return {
            ...t,
            end_timestamp: t.end_timestamp ?? t.start_timestamp,
            attributes: tq(t.attributes),
            links: t.links?.map(t => ({
                ...t,
                attributes: tq(t.attributes)
            }))
        }
    }], 511091);
    let ew = new WeakMap;

    function eI(t) {
        return E(t) ? void 0 : t
    }

    function eO(t, e, n) {
        let r = eI(e.originalException),
            i = r && ew.get(r);
        if (!i) return;
        let s = t.contexts?.trace;
        (s?.trace_id ?? (n && tO(n).trace_id)) === i.trace_id && (t.contexts = {
            ...t.contexts,
            trace: {
                ...s,
                ...i
            }
        })
    }

    function eC(t) {
        return !1
    }
    t.s(["h", 0, eO, "z", 0, function(t, e) {
        let n = eI(t);
        !n || !e_(e) || ew.has(n) || ew.set(n, eo(e))
    }], 89268), t.s(["f", 0, eC], 85971);
    let eA = Symbol.for("sentry.nonRecordingSpan");

    function eP(t) {
        return !!t && !0 === t[eA]
    }
    t.s(["f", 0, class {
        constructor(t = {}) {
            this._traceId = t.traceId || ta(), this._spanId = t.spanId || tu(), this.dropReason = t.dropReason, j(this, eA, !0)
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
    }, "p", 0, eP], 143829);
    let ej = "_frozenDsc";

    function e$(t, e) {
        let n = e.getOptions(),
            {
                publicKey: r
            } = e.getDsn() || {},
            i = {
                environment: n.environment || tC,
                release: n.release,
                public_key: r,
                trace_id: t,
                org_id: tU(e)
            };
        return e.emit("createDsc", i), i
    }

    function eD(t, e) {
        if (tx()) return;
        let n = e.getPropagationContext();
        return n.dsc || e$(n.traceId, t)
    }

    function eN(t) {
        let e = tI();
        if (!e) return {};
        let n = eS(t),
            r = ef(n),
            i = r.data,
            s = n.spanContext().traceState,
            o = s?.get("sentry.sample_rate") ?? i[tY] ?? i[tH];

        function a(t) {
            return ("number" == typeof o || "string" == typeof o) && (t.sample_rate = `${o}`), t
        }
        let u = n[ej];
        if (u) return a(u);
        let c = eP(n),
            l = c && "ignored" === n.dropReason;
        if (c && (!eC(e.getOptions()) || l)) {
            let t = t3(n).scope,
                r = t && eD(e, t);
            if (r) {
                let t = {
                    ...r
                };
                return l && (t.sampled = "false"), a(t)
            }
        }
        let f = s?.get("sentry.dsc"),
            p = f && t8(f);
        if (p) return a(p);
        let d = e$(t.spanContext().traceId, e),
            h = i[tB],
            _ = r.description;
        return "url" !== h && _ && (d.transaction = _), eC() && (d.sampled = String(e_(n)), d.sample_rand = s?.get("sentry.sample_rand") ?? t3(n).scope?.getPropagationContext().sampleRand.toString()), a(d), e.emit("createDsc", d, n), d
    }

    function eR(t, e) {
        var n, r, i, s, o, a;
        let u, {
            fingerprint: c,
            breadcrumbs: l,
            sdkProcessingMetadata: f
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
        })(t, e), n = t, r = c, n.fingerprint = n.fingerprint ? Array.isArray(n.fingerprint) ? n.fingerprint : [n.fingerprint] : [], r && (n.fingerprint = n.fingerprint.concat(r)), n.fingerprint.length || delete n.fingerprint, i = t, s = l, u = [...i.breadcrumbs || [], ...s], i.breadcrumbs = u.length ? u : void 0, o = t, a = f, o.sdkProcessingMetadata = {
            ...o.sdkProcessingMetadata,
            ...a
        }
    }

    function eM(t, e) {
        let {
            extra: n,
            tags: r,
            attributes: i,
            user: s,
            contexts: o,
            level: a,
            sdkProcessingMetadata: u,
            breadcrumbs: c,
            fingerprint: l,
            eventProcessors: f,
            attachments: p,
            propagationContext: d,
            transactionName: h
        } = e;
        eT(t, "extra", n), eT(t, "tags", r), eT(t, "attributes", i), eT(t, "user", s), eT(t, "contexts", o), t.sdkProcessingMetadata = to(t.sdkProcessingMetadata, u, 2), a && (t.level = a), h && (t.transactionName = h), c.length && (t.breadcrumbs = [...t.breadcrumbs, ...c]), l.length && (t.fingerprint = [...t.fingerprint, ...l]), f.length && (t.eventProcessors = [...t.eventProcessors, ...f]), p.length && (t.attachments = [...t.attachments, ...p]), t.propagationContext = {
            ...t.propagationContext,
            ...d
        }
    }

    function eT(t, e, n) {
        t[e] = to(t[e], n, 1)
    }

    function eL(t, e) {
        let n = tw().getScopeData();
        return t && eM(n, t.getScopeData()), e && eM(n, e.getScopeData()), n
    }

    function eU(t, e) {
        t.contexts = {
            trace: eo(e),
            ...t.contexts
        }, t.sdkProcessingMetadata = {
            dynamicSamplingContext: eN(e),
            ...t.sdkProcessingMetadata
        };
        let n = ef(eS(e)).description;
        n && !t.transaction && "transaction" === t.type && (t.transaction = n)
    }

    function eJ(t) {
        if (t) {
            var e;
            return (e = t) instanceof tc || "function" == typeof e || Object.keys(t).some(t => eK.includes(t)) ? {
                captureContext: t
            } : t
        }
    }
    t.s(["m", 0, function(t, e) {
        j(t, ej, e)
    }, "H", 0, eD, "O", 0, eN], 785509), t.s(["Y", 0, eR, "n", 0, eU, "Z", 0, eL], 646162);
    let eK = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"];

    function eW() {
        let t = tE(),
            e = tk().getSession() || t.getSession();
        e && ts(e), ez(), t.setSession()
    }

    function ez() {
        let t = tE(),
            e = tI(),
            n = t.getSession();
        n && e && e.captureSession(n)
    }
    t.s(["a", 0, eJ, "H", 0, function(t, e, n, r, i, c) {
        var f, p, d;
        let h, {
                normalizeDepth: _ = 3,
                normalizeMaxBreadth: g = 1e3
            } = t,
            m = {
                ...e,
                event_id: e.event_id || n.event_id || G(),
                timestamp: e.timestamp || tt()
            },
            y = n.integrations || t.integrations.map(t => t.name);
        (function(t, e) {
            let {
                environment: n,
                release: r,
                dist: i,
                maxValueLength: s
            } = e;
            t.environment = t.environment || n || tC, !t.release && r && (t.release = r), !t.dist && i && (t.dist = i);
            let o = t.request;
            o?.url && s && (o.url = H(o.url, s)), s && t.exception?.values?.forEach(t => {
                t.value && (t.value = H(t.value, s))
            })
        })(m, t), f = m, (p = y).length > 0 && (f.sdk = f.sdk || {}, f.sdk.integrations = [...f.sdk.integrations || [], ...p]), i && i.emit("applyFrameMetadata", e), void 0 === e.type && (d = m, h = function(t) {
            let e = l._sentryDebugIds,
                n = l._debugIds;
            if (!e && !n) return {};
            let r = e ? Object.keys(e) : [],
                i = n ? Object.keys(n) : [];
            if (u && r.length === o && i.length === a) return u;
            o = r.length, a = i.length, u = {}, s || (s = {});
            let c = (e, n) => {
                for (let r of e) {
                    let e = n[r],
                        i = s?.[r];
                    if (i && u && e) u[i[0]] = e, s && (s[r] = [i[0], e]);
                    else if (e) {
                        let n = t(r);
                        for (let t = n.length - 1; t >= 0; t--) {
                            let i = n[t],
                                o = i?.filename;
                            if (o && u && s) {
                                u[o] = e, s[r] = [o, e];
                                break
                            }
                        }
                    }
                }
            };
            return e && c(r, e), n && c(i, n), u
        }(t.stackParser), d.exception?.values?.forEach(t => {
            t.stacktrace?.frames?.forEach(t => {
                t.filename && (t.debug_id = h[t.filename])
            })
        }));
        let b = function(t, e) {
            if (!e) return t;
            let n = t ? t.clone() : new tc;
            return n.update(e), n
        }(r, n.captureContext);
        n.mechanism && V(m, n.mechanism);
        let v = i ? i.getEventProcessors() : [],
            S = eL(c, b),
            x = [...n.attachments || [], ...S.attachments];
        x.length && (n.attachments = x), eR(m, S);
        let k = eE(b);
        k && eU(m, k), eO(m, n, b);
        let E = [...v, ...S.eventProcessors];
        return (n.data && !0 === n.data.__sentry__ ? tj(m) : function(t, e, n, r = 0, i) {
            try {
                let s = function t(e, n, r, i, s) {
                    let o = r[i];
                    if (!e || !o) return e;
                    o.id;
                    let a = !1,
                        u = tP("", () => o({
                            ...e
                        }, n), () => (a = !0, null));
                    return A(u) ? u.then(e => e ? t(e, n, r, i + 1, s) : (s?.(a ? "callback_error" : "event_processor"), null)) : u ? t(u, n, r, i + 1, s) : (s?.(a ? "callback_error" : "event_processor"), null)
                }(e, n, t, r, i);
                return A(s) ? s : tj(s)
            } catch (t) {
                return t$(t)
            }
        }(E, m, n, 0, t => {
            i && (i.recordDroppedEvent(t, tz(e.type)), "transaction" === e.type && i.recordDroppedEvent(t, "span", 1 + (e.spans || []).length))
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
        }(t), "number" == typeof _ && _ > 0) ? function(t, e, n) {
            if (!t) return null;
            let r = {
                ...t,
                ...t.breadcrumbs && {
                    breadcrumbs: t.breadcrumbs.map(t => ({
                        ...t,
                        ...t.data && {
                            data: B(t.data, e, n)
                        }
                    }))
                },
                ...t.user && {
                    user: B(t.user, e, n)
                },
                ...t.contexts && {
                    contexts: B(t.contexts, e, n)
                },
                ...t.extra && {
                    extra: B(t.extra, e, n)
                }
            };
            return t.contexts?.trace && r.contexts && (r.contexts.trace = t.contexts.trace, t.contexts.trace.data && (r.contexts.trace.data = B(t.contexts.trace.data, e, n))), t.spans && (r.spans = t.spans.map(t => ({
                ...t,
                ...t.data && {
                    data: B(t.data, e, n)
                }
            }))), t.contexts?.flags && r.contexts && (r.contexts.flags = B(t.contexts.flags, 3, n)), r
        }(t, _, g) : t : null)
    }], 151348), t.s(["A", 0, function(t) {
        tE().addEventProcessor(t)
    }, "f", 0, function(t, e) {
        return tk().captureEvent(t, e)
    }, "y", 0, function(t, e) {
        return tk().captureException(t, eJ(e))
    }, "L", 0, function(t = !1) {
        t ? eW() : ez()
    }, "B", 0, function() {
        let t = tI();
        return t?.getOptions().enabled !== !1 && !!t?.getTransport()
    }, "g", 0, function(t, e) {
        tE().setContext(t, e)
    }, "M", 0, function(t) {
        let e = tE(),
            {
                user: n
            } = eL(e, tk()),
            {
                userAgent: r
            } = l.navigator || {},
            i = tr({
                user: n,
                ...r && {
                    userAgent: r
                },
                ...t
            }),
            s = e.getSession();
        return s?.status === "ok" && ti(s, {
            status: "exited"
        }), eW(), e.setSession(i), i
    }], 309578)
}]);

//# debugId=c976f0d1-ba6f-fb68-9886-174718f00e46