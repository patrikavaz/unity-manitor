(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 330826, 800987, 336017, 245859, t => {
    "use strict";
    let e = "10.53.1";
    t.s(["SDK_VERSION", 0, e], 800987);
    let n = globalThis;

    function r(t) {
        let n = t.__SENTRY__ = t.__SENTRY__ || {};
        return n.version = n.version || e, n[e] = n[e] || {}
    }
    t.s(["GLOBAL_OBJ", 0, n], 336017), t.s(["getGlobalSingleton", 0, function(t, r, i = n) {
        let s = i.__SENTRY__ = i.__SENTRY__ || {},
            a = s[e] = s[e] || {};
        return a[t] || (a[t] = r())
    }, "getMainCarrier", 0, function() {
        return r(n), n
    }, "getSentryCarrier", 0, r], 330826);
    let i = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
    t.s(["DEBUG_BUILD", 0, i], 245859)
}, 730950, t => {
    "use strict";
    var e = t.i(330826),
        n = t.i(245859),
        r = t.i(336017);
    let i = {};

    function s(t) {
        if (!("console" in r.GLOBAL_OBJ)) return t();
        let e = r.GLOBAL_OBJ.console,
            n = {},
            s = Object.keys(i);
        s.forEach(t => {
            let r = i[t];
            n[t] = e[t], e[t] = r
        });
        try {
            return t()
        } finally {
            s.forEach(t => {
                e[t] = n[t]
            })
        }
    }

    function a() {
        return c().enabled
    }

    function o(t, ...e) {
        n.DEBUG_BUILD && a() && s(() => {
            r.GLOBAL_OBJ.console[t](`Sentry Logger [${t}]:`, ...e)
        })
    }

    function c() {
        return n.DEBUG_BUILD ? (0, e.getGlobalSingleton)("loggerSettings", () => ({
            enabled: !1
        })) : {
            enabled: !1
        }
    }
    t.s(["CONSOLE_LEVELS", 0, ["debug", "info", "warn", "error", "log", "assert", "trace"], "consoleSandbox", 0, s, "debug", 0, {
        enable: function() {
            c().enabled = !0
        },
        disable: function() {
            c().enabled = !1
        },
        isEnabled: a,
        log: function(...t) {
            o("log", ...t)
        },
        warn: function(...t) {
            o("warn", ...t)
        },
        error: function(...t) {
            o("error", ...t)
        }
    }, "originalConsoleMethods", 0, i])
}, 136531, 627784, t => {
    "use strict";
    let e = Object.prototype.toString;

    function n(t, n) {
        return e.call(t) === `[object ${n}]`
    }

    function r(t) {
        return n(t, "String")
    }

    function i(t) {
        return "object" == typeof t && null !== t && "__sentry_template_string__" in t && "__sentry_template_values__" in t
    }

    function s(t) {
        return n(t, "Object")
    }

    function a(t, e) {
        try {
            return t instanceof e
        } catch {
            return !1
        }
    }
    t.s(["isDOMError", 0, function(t) {
        return n(t, "DOMError")
    }, "isDOMException", 0, function(t) {
        return n(t, "DOMException")
    }, "isElement", 0, function(t) {
        return "u" > typeof Element && a(t, Element)
    }, "isError", 0, function(t) {
        switch (e.call(t)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
            case "[object WebAssembly.Exception]":
                return !0;
            default:
                return a(t, Error)
        }
    }, "isErrorEvent", 0, function(t) {
        return n(t, "ErrorEvent")
    }, "isEvent", 0, function(t) {
        return "u" > typeof Event && a(t, Event)
    }, "isInstanceOf", 0, a, "isParameterizedString", 0, i, "isPlainObject", 0, s, "isPrimitive", 0, function(t) {
        return null === t || i(t) || "object" != typeof t && "function" != typeof t
    }, "isRegExp", 0, function(t) {
        return n(t, "RegExp")
    }, "isRequest", 0, function(t) {
        return "u" > typeof Request && a(t, Request)
    }, "isString", 0, r, "isSyntheticEvent", 0, function(t) {
        return s(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
    }, "isThenable", 0, function(t) {
        return !!(t?.then && "function" == typeof t.then)
    }, "isVueViewModel", 0, function(t) {
        return !!("object" == typeof t && null !== t && (t.__isVue || t._isVue || t.__v_isVNode))
    }], 627784);
    let o = t.i(336017).GLOBAL_OBJ;
    t.s(["getComponentName", 0, function(t, e = 5) {
        if (!o.HTMLElement) return null;
        let n = t;
        for (let t = 0; t < e && n; t++) {
            if (n instanceof HTMLElement) {
                if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
                if (n.dataset.sentryElement) return n.dataset.sentryElement
            }
            n = n.parentNode
        }
        return null
    }, "getLocationHref", 0, function() {
        try {
            return o.document.location.href
        } catch {
            return ""
        }
    }, "htmlTreeAsString", 0, function(t, e = {}) {
        if (!t) return "<unknown>";
        try {
            let n, i = t,
                s = [],
                a = 0,
                c = 0,
                u = Array.isArray(e) ? e : e.keyAttrs,
                l = !Array.isArray(e) && e.maxStringLength || 80;
            for (; i && a++ < 5 && (n = function(t, e) {
                    let n = [];
                    if (!t?.tagName) return "";
                    if (o.HTMLElement && t instanceof HTMLElement && t.dataset) {
                        if (t.dataset.sentryComponent) return t.dataset.sentryComponent;
                        if (t.dataset.sentryElement) return t.dataset.sentryElement
                    }
                    n.push(t.tagName.toLowerCase());
                    let i = e?.length ? e.filter(e => t.getAttribute(e)).map(e => [e, t.getAttribute(e)]) : null;
                    if (i?.length) i.forEach(t => {
                        n.push(`[${t[0]}="${t[1]}"]`)
                    });
                    else {
                        t.id && n.push(`#${t.id}`);
                        let e = t.className;
                        if (e && r(e))
                            for (let t of e.split(/\s+/)) n.push(`.${t}`)
                    }
                    for (let e of ["aria-label", "type", "name", "title", "alt"]) {
                        let r = t.getAttribute(e);
                        r && n.push(`[${e}="${r}"]`)
                    }
                    return n.join("")
                }(i, u), "html" !== n && (!(a > 1) || !(c + 3 * s.length + n.length >= l)));) s.push(n), c += n.length, i = i.parentNode;
            return s.reverse().join(" > ")
        } catch {
            return "<unknown>"
        }
    }], 136531)
}, 569959, 935545, 778011, 399639, 192261, 981379, 720994, 365330, 338640, 790122, 121492, 867997, 666041, 809302, 593321, 473295, 347437, 721549, 784553, 204566, 276782, 908408, 787331, 682603, 310559, 144150, 743064, 445674, 562043, 514302, 59429, 174274, 413144, 856447, 268371, 189271, 284591, 136598, 838153, t => {
    "use strict";
    let e, n, r, i, s, a, o, c;
    var u = t.i(330826),
        l = t.i(245859),
        p = t.i(136531),
        d = t.i(730950),
        f = t.i(627784);

    function _(t, e, n) {
        try {
            Object.defineProperty(t, e, {
                value: n,
                writable: !0,
                configurable: !0
            })
        } catch {
            l.DEBUG_BUILD && d.debug.log(`Failed to add non-enumerable property "${String(e)}" to object`, t)
        }
    }

    function g(t, e) {
        try {
            let n = e.prototype || {};
            t.prototype = e.prototype = n, _(t, "__sentry_original__", e)
        } catch {}
    }

    function h(t) {
        if ((0, f.isError)(t)) return {
            message: t.message,
            name: t.name,
            stack: t.stack,
            ...S(t)
        };
        if (!(0, f.isEvent)(t)) return t;
        {
            let e = {
                type: t.type,
                target: m(t.target),
                currentTarget: m(t.currentTarget),
                ...S(t)
            };
            return "u" > typeof CustomEvent && (0, f.isInstanceOf)(t, CustomEvent) && (e.detail = t.detail), e
        }
    }

    function m(t) {
        try {
            return (0, f.isElement)(t) ? (0, p.htmlTreeAsString)(t) : Object.prototype.toString.call(t)
        } catch {
            return "<unknown>"
        }
    }

    function S(t) {
        return "object" == typeof t && null !== t ? Object.fromEntries(Object.entries(t)) : {}
    }
    t.s(["addNonEnumerableProperty", 0, _, "convertToPlainObject", 0, h, "extractExceptionKeysForMessage", 0, function(t) {
        let e = Object.keys(h(t));
        return e.sort(), e[0] ? e.join(", ") : "[object has no keys]"
    }, "fill", 0, function(t, e, n) {
        if (!(e in t)) return;
        let r = t[e];
        if ("function" != typeof r) return;
        let i = n(r);
        "function" == typeof i && g(i, r);
        try {
            t[e] = i
        } catch {
            l.DEBUG_BUILD && d.debug.log(`Failed to replace method "${e}" in object`, t)
        }
    }, "getOriginalFunction", 0, function(t) {
        return t.__sentry_original__
    }, "markFunctionWrapped", 0, g], 935545);
    var y = t.i(336017);

    function b(t) {
        if (void 0 !== e) return e ? e(t) : t();
        let n = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"),
            r = y.GLOBAL_OBJ;
        return n in r && "function" == typeof r[n] ? (e = r[n])(t) : (e = null, t())
    }

    function E() {
        return b(() => Math.random())
    }

    function T() {
        return b(() => Date.now())
    }
    t.s(["safeDateNow", 0, T, "safeMathRandom", 0, E, "withRandomSafeContext", 0, b], 778011);
    let v = /\(error: (.*)\)/,
        I = /captureMessage|captureException/;

    function A(...t) {
        let e = t.sort((t, e) => t[0] - e[0]).map(t => t[1]);
        return (t, n = 0, r = 0) => {
            let i = [],
                s = t.split("\n");
            for (let t = n; t < s.length; t++) {
                let n = s[t];
                n.length > 1024 && (n = n.slice(0, 1024));
                let a = v.test(n) ? n.replace(v, "$1") : n;
                if (!a.includes("Error: ")) {
                    for (let t of e) {
                        let e = t(a);
                        if (e) {
                            i.push(e);
                            break
                        }
                    }
                    if (i.length >= 50 + r) break
                }
            }
            var a = i.slice(r);
            if (!a.length) return [];
            let o = Array.from(a);
            return /sentryWrapped/.test(x(o).function || "") && o.pop(), o.reverse(), I.test(x(o).function || "") && (o.pop(), I.test(x(o).function || "") && o.pop()), o.slice(0, 50).map(t => ({
                ...t,
                filename: t.filename || x(o).filename,
                function: t.function || "?"
            }))
        }
    }

    function x(t) {
        return t[t.length - 1] || {}
    }
    let N = "<anonymous>";

    function C(t) {
        try {
            if (!t || "function" != typeof t) return N;
            return t.name || N
        } catch {
            return N
        }
    }

    function O(t) {
        return "__v_isVNode" in t && t.__v_isVNode ? "[VueVNode]" : "[VueViewModel]"
    }

    function D(t) {
        let e = t?.startsWith("file://") ? t.slice(7) : t;
        return e?.match(/\/[A-Z]:/) && (e = e.slice(1)), e
    }

    function R(t, e = 0) {
        return "string" != typeof t || 0 === e || t.length <= e ? t : `${t.slice(0,e)}...`
    }

    function k(t, e, n = !1) {
        return !!(0, f.isString)(t) && ((0, f.isRegExp)(e) ? e.test(t) : (0, f.isString)(e) ? n ? t === e : t.includes(e) : "function" == typeof e && e(t))
    }

    function L(t = function() {
        let t = y.GLOBAL_OBJ;
        return t.crypto || t.msCrypto
    }()) {
        try {
            if (t?.randomUUID) return b(() => t.randomUUID()).replace(/-/g, "")
        } catch {}
        return n || (n = "10000000100040008000100000000000"), n.replace(/[018]/g, t => (t ^ (15 & 16 * E()) >> t / 4).toString(16))
    }

    function w(t) {
        return t.exception?.values?.[0]
    }

    function B(t, e) {
        let n = w(t);
        if (!n) return;
        let r = n.mechanism;
        if (n.mechanism = {
                type: "generic",
                handled: !0,
                ...r,
                ...e
            }, e && "data" in e) {
            let t = {
                ...r?.data,
                ...e.data
            };
            n.mechanism.data = t
        }
    }

    function U() {
        return T() / 1e3
    }

    function M() {
        return (r ?? (r = function() {
            let {
                performance: t
            } = y.GLOBAL_OBJ;
            if (!t?.now || !t.timeOrigin) return U;
            let e = t.timeOrigin;
            return () => (e + b(() => t.now())) / 1e3
        }()))()
    }
    t.s(["UNKNOWN_FUNCTION", 0, "?", "createStackParser", 0, A, "getFramesFromEvent", 0, function(t) {
        let e = t.exception;
        if (e) {
            let t = [];
            try {
                return e.values.forEach(e => {
                    e.stacktrace.frames && t.push(...e.stacktrace.frames)
                }), t
            } catch {}
        }
    }, "getFunctionName", 0, C, "getVueInternalName", 0, O, "normalizeStackTracePath", 0, D, "stackParserFromStackParserOptions", 0, function(t) {
        return Array.isArray(t) ? A(...t) : t
    }], 399639), t.s(["isMatchingPattern", 0, k, "safeJoin", 0, function(t, e) {
        if (!Array.isArray(t)) return "";
        let n = [];
        for (let e = 0; e < t.length; e++) {
            let r = t[e];
            try {
                (0, f.isVueViewModel)(r) ? n.push(O(r)): n.push(String(r))
            } catch {
                n.push("[value cannot be serialized]")
            }
        }
        return n.join(e)
    }, "snipLine", 0, function(t, e) {
        let n = t,
            r = n.length;
        if (r <= 150) return n;
        e > r && (e = r);
        let i = Math.max(e - 60, 0);
        i < 5 && (i = 0);
        let s = Math.min(i + 140, r);
        return s > r - 5 && (s = r), s === r && (i = Math.max(s - 140, 0)), n = n.slice(i, s), i > 0 && (n = `'{snip} ${n}`), s < r && (n += " {snip}"), n
    }, "stringMatchesSomePattern", 0, function(t, e = [], n = !1) {
        for (let r of e)
            if (k(t, r, n)) return !0;
        return !1
    }, "truncate", 0, R], 192261), t.s(["addExceptionMechanism", 0, B, "addExceptionTypeValue", 0, function(t, e, n) {
        let r = t.exception = t.exception || {},
            i = r.values = r.values || [],
            s = i[0] = i[0] || {};
        s.value || (s.value = e || ""), s.type || (s.type = n || "Error")
    }, "checkOrSetAlreadyCaught", 0, function(t) {
        if (function(t) {
                try {
                    return t.__sentry_captured__
                } catch {}
            }(t)) return !0;
        try {
            _(t, "__sentry_captured__", !0)
        } catch {}
        return !1
    }, "getEventDescription", 0, function(t) {
        let {
            message: e,
            event_id: n
        } = t;
        if (e) return e;
        let r = w(t);
        return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
    }, "uuid4", 0, L], 981379);
    let P = null;

    function $(t) {
        let e = M(),
            n = {
                sid: L(),
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
        return t && j(n, t), n
    }

    function j(t, e = {}) {
        if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), t.did || e.did || (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || M(), e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = 32 === e.sid.length ? e.sid : L()), void 0 !== e.init && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), "number" == typeof e.started && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
        else if ("number" == typeof e.duration) t.duration = e.duration;
        else {
            let e = t.timestamp - t.started;
            t.duration = e >= 0 ? e : 0
        }
        e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), "number" == typeof e.errors && (t.errors = e.errors), e.status && (t.status = e.status)
    }

    function G(t, e) {
        let n = {};
        e ? n = {
            status: e
        } : "ok" === t.status && (n = {
            status: "exited"
        }), j(t, n)
    }

    function F(t, e, n = 2) {
        if (!e || "object" != typeof e || n <= 0) return e;
        if (t && 0 === Object.keys(e).length) return t;
        let r = {
            ...t
        };
        for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = F(r[t], e[t], n - 1));
        return r
    }

    function J() {
        return L()
    }

    function Y() {
        return L().substring(16)
    }
    t.s(["browserPerformanceTimeOrigin", 0, function() {
        return null === P && (P = function() {
            let {
                performance: t
            } = y.GLOBAL_OBJ;
            if (!t?.now) return;
            let e = b(() => t.now()),
                n = T(),
                r = t.timeOrigin;
            if ("number" == typeof r && 3e5 > Math.abs(r + e - n)) return r;
            let i = t.timing?.navigationStart;
            return "number" == typeof i && 3e5 > Math.abs(i + e - n) ? i : n - e
        }()), P
    }, "dateTimestampInSeconds", 0, U, "timestampInSeconds", 0, M], 720994), t.s(["closeSession", 0, G, "makeSession", 0, $, "updateSession", 0, j], 365330), t.s(["merge", 0, F], 338640), t.s(["generateSpanId", 0, Y, "generateTraceId", 0, J], 790122);
    let V = "_sentrySpan";

    function H(t, e) {
        e ? _(t, V, e) : delete t[V]
    }

    function z(t) {
        return t[V]
    }
    t.s(["_getSpanForScope", 0, z, "_setSpanForScope", 0, H], 121492);
    class K {
        constructor() {
            this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
                traceId: J(),
                sampleRand: E()
            }
        }
        clone() {
            let t = new K;
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
            }, t._client = this._client, t._lastEventId = this._lastEventId, t._conversationId = this._conversationId, H(t, z(this)), t
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
            }, this._session && j(this._session, {
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
                    contexts: a,
                    level: o,
                    fingerprint: c = [],
                    propagationContext: u,
                    conversationId: l
                } = (e instanceof K ? e.getScopeData() : (0, f.isPlainObject)(e) ? t : void 0) || {};
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
                ...a
            }, s && Object.keys(s).length && (this._user = s), o && (this._level = o), c.length && (this._fingerprint = c), u && (this._propagationContext = u), l && (this._conversationId = l), this
        }
        clear() {
            return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, H(this, void 0), this._attachments = [], this.setPropagationContext({
                traceId: J(),
                sampleRand: E()
            }), this._notifyScopeListeners(), this
        }
        addBreadcrumb(t, e) {
            let n = "number" == typeof e ? e : 100;
            if (n <= 0) return this;
            let r = {
                timestamp: U(),
                ...t,
                message: t.message ? R(t.message, 2048) : t.message
            };
            return this._breadcrumbs.push(r), this._breadcrumbs.length > n && (this._breadcrumbs = this._breadcrumbs.slice(-n), this._client?.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this
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
                span: z(this),
                conversationId: this._conversationId
            }
        }
        setSDKProcessingMetadata(t) {
            return this._sdkProcessingMetadata = F(this._sdkProcessingMetadata, t, 2), this
        }
        setPropagationContext(t) {
            return this._propagationContext = t, this
        }
        getPropagationContext() {
            return this._propagationContext
        }
        captureException(t, e) {
            let n = e?.event_id || L();
            if (!this._client) return l.DEBUG_BUILD && d.debug.warn("No client configured on scope - will not capture exception!"), n;
            let r = Error("Sentry syntheticException");
            return this._client.captureException(t, {
                originalException: t,
                syntheticException: r,
                ...e,
                event_id: n
            }, this), n
        }
        captureMessage(t, e, n) {
            let r = n?.event_id || L();
            if (!this._client) return l.DEBUG_BUILD && d.debug.warn("No client configured on scope - will not capture message!"), r;
            let i = n?.syntheticException ?? Error(t);
            return this._client.captureMessage(t, e, {
                originalException: t,
                syntheticException: i,
                ...n,
                event_id: r
            }, this), r
        }
        captureEvent(t, e) {
            let n = t.event_id || e?.event_id || L();
            return this._client ? this._client.captureEvent(t, {
                ...e,
                event_id: n
            }, this) : l.DEBUG_BUILD && d.debug.warn("No client configured on scope - will not capture event!"), n
        }
        _notifyScopeListeners() {
            this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(t => {
                t(this)
            }), this._notifyingListeners = !1)
        }
    }
    let W = t => t instanceof Promise && !t[q],
        q = Symbol("chained PromiseLike");
    class X {
        constructor(t, e) {
            let n, r;
            n = t || new K, r = e || new K, this._stack = [{
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
            if ((0, f.isThenable)(e)) {
                var r, i, s;
                let t;
                return r = e, i = () => this._popScope(), s = () => this._popScope(), W(t = r.then(t => (i(t), t), t => {
                    throw s(t), t
                })) && W(r) ? t : ((t, e) => {
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
                        [q]: !0
                    }), e
                })(r, t)
            }
            return this._popScope(), e
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

    function Q() {
        let t = (0, u.getMainCarrier)(),
            e = (0, u.getSentryCarrier)(t);
        return e.stack = e.stack || new X((0, u.getGlobalSingleton)("defaultCurrentScope", () => new K), (0, u.getGlobalSingleton)("defaultIsolationScope", () => new K))
    }

    function Z(t) {
        return Q().withScope(t)
    }

    function tt(t, e) {
        let n = Q();
        return n.withScope(() => (n.getStackTop().scope = t, e(t)))
    }

    function te(t) {
        return Q().withScope(() => t(Q().getIsolationScope()))
    }

    function tn(t) {
        let e = (0, u.getSentryCarrier)(t);
        return e.acs ? e.acs : {
            withIsolationScope: te,
            withScope: Z,
            withSetScope: tt,
            withSetIsolationScope: (t, e) => te(e),
            getCurrentScope: () => Q().getScope(),
            getIsolationScope: () => Q().getIsolationScope()
        }
    }

    function tr() {
        return tn((0, u.getMainCarrier)()).getCurrentScope()
    }

    function ti() {
        return tn((0, u.getMainCarrier)()).getIsolationScope()
    }

    function ts() {
        return (0, u.getGlobalSingleton)("globalScope", () => new K)
    }

    function ta(...t) {
        let e = tn((0, u.getMainCarrier)());
        if (2 === t.length) {
            let [n, r] = t;
            return n ? e.withSetScope(n, r) : e.withScope(r)
        }
        return e.withScope(t[0])
    }

    function to() {
        return tr().getClient()
    }
    t.s(["getAsyncContextStrategy", 0, tn], 867997), t.s(["getClient", 0, to, "getCurrentScope", 0, tr, "getGlobalScope", 0, ts, "getIsolationScope", 0, ti, "getTraceContextFromScope", 0, function(t) {
        let e = i?.();
        if (e) return {
            trace_id: e.traceId,
            span_id: e.spanId
        };
        let {
            traceId: n,
            parentSpanId: r,
            propagationSpanId: s
        } = t.getPropagationContext(), a = {
            trace_id: n,
            span_id: s || Y()
        };
        return r && (a.parent_span_id = r), a
    }, "hasExternalPropagationContext", 0, function() {
        return void 0 !== i
    }, "withIsolationScope", 0, function(...t) {
        let e = tn((0, u.getMainCarrier)());
        if (2 === t.length) {
            let [n, r] = t;
            return n ? e.withSetIsolationScope(n, r) : e.withIsolationScope(r)
        }
        return e.withIsolationScope(t[0])
    }, "withScope", 0, ta], 666041);
    let tc = "sentry.source",
        tu = "sentry.sample_rate",
        tl = "sentry.previous_trace_sample_rate",
        tp = "sentry.op",
        td = "sentry.origin",
        tf = "sentry.measurement_unit",
        t_ = "sentry.measurement_value",
        tg = "sentry.custom_span_name",
        th = "sentry.profile_id",
        tm = "sentry.exclusive_time";
    t.s(["GEN_AI_CONVERSATION_ID_ATTRIBUTE", 0, "gen_ai.conversation.id", "SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME", 0, tm, "SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD", 0, "http.request.method", "SEMANTIC_ATTRIBUTE_PROFILE_ID", 0, th, "SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME", 0, tg, "SEMANTIC_ATTRIBUTE_SENTRY_ENVIRONMENT", 0, "sentry.environment", "SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON", 0, "sentry.idle_span_finish_reason", "SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT", 0, tf, "SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE", 0, t_, "SEMANTIC_ATTRIBUTE_SENTRY_OP", 0, tp, "SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN", 0, td, "SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE", 0, tl, "SEMANTIC_ATTRIBUTE_SENTRY_RELEASE", 0, "sentry.release", "SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE", 0, tu, "SEMANTIC_ATTRIBUTE_SENTRY_SDK_NAME", 0, "sentry.sdk.name", "SEMANTIC_ATTRIBUTE_SENTRY_SDK_VERSION", 0, "sentry.sdk.version", "SEMANTIC_ATTRIBUTE_SENTRY_SEGMENT_ID", 0, "sentry.segment.id", "SEMANTIC_ATTRIBUTE_SENTRY_SEGMENT_NAME", 0, "sentry.segment.name", "SEMANTIC_ATTRIBUTE_SENTRY_SOURCE", 0, tc, "SEMANTIC_ATTRIBUTE_URL_FULL", 0, "url.full", "SEMANTIC_ATTRIBUTE_USER_EMAIL", 0, "user.email", "SEMANTIC_ATTRIBUTE_USER_ID", 0, "user.id", "SEMANTIC_ATTRIBUTE_USER_IP_ADDRESS", 0, "user.ip_address", "SEMANTIC_ATTRIBUTE_USER_USERNAME", 0, "user.name", "SEMANTIC_LINK_ATTRIBUTE_LINK_TYPE", 0, "sentry.link.type"], 809302);
    let tS = "sentry-";

    function ty(t) {
        let e = tb(t);
        if (!e) return;
        let n = Object.entries(e).reduce((t, [e, n]) => (e.startsWith(tS) && (t[e.slice(tS.length)] = n), t), {});
        return Object.keys(n).length > 0 ? n : void 0
    }

    function tb(t) {
        if (t && ((0, f.isString)(t) || Array.isArray(t))) return Array.isArray(t) ? t.reduce((t, e) => (Object.entries(tE(e)).forEach(([e, n]) => {
            t[e] = n
        }), t), {}) : tE(t)
    }

    function tE(t) {
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

    function tT(t) {
        if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
        let e = t || to()?.getOptions();
        return !!e && (null != e.tracesSampleRate || !!e.tracesSampler)
    }

    function tv(t) {
        d.debug.log(`Ignoring span ${t.op} - ${t.description} because it matches \`ignoreSpans\`.`)
    }

    function tI(t, e) {
        if (!e?.length) return !1;
        for (let r of e) {
            var n;
            if ("string" == typeof(n = r) || n instanceof RegExp) {
                if (t.description && k(t.description, r)) return l.DEBUG_BUILD && tv(t), !0;
                continue
            }
            let e = !!r.attributes && Object.keys(r.attributes).length > 0;
            if (!r.name && !r.op && !e) continue;
            let i = !r.name || t.description && k(t.description, r.name),
                s = !r.op || t.op && k(t.op, r.op),
                a = !r.attributes || Object.entries(r.attributes).every(([e, n]) => (function(t, e) {
                    return "string" == typeof t && ("string" == typeof e || e instanceof RegExp) ? k(t, e) : Array.isArray(t) && Array.isArray(e) ? t.length === e.length && t.every((t, n) => t === e[n]) : t === e
                })(t.attributes?.[e], n));
            if (i && s && a) return l.DEBUG_BUILD && tv(t), !0
        }
        return !1
    }

    function tA(t) {
        return "stream" === t.getOptions().traceLifecycle
    }

    function tx(t) {
        if ("boolean" == typeof t) return Number(t);
        let e = "string" == typeof t ? parseFloat(t) : t;
        if (!("number" != typeof e || isNaN(e)) && !(e < 0) && !(e > 1)) return e
    }

    function tN(t, e = !1) {
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
                let a = "";
                try {
                    a = JSON.stringify(n) ?? ""
                } catch {}
                return {
                    value: a,
                    type: "string",
                    ...s
                }
            }(i, e);
            t && (n[r] = t)
        }
        return n
    }
    t.s(["SENTRY_BAGGAGE_KEY_PREFIX", 0, tS, "baggageHeaderToDynamicSamplingContext", 0, ty, "dynamicSamplingContextToSentryBaggageHeader", 0, function(t) {
        if (t) {
            var e = Object.entries(t).reduce((t, [e, n]) => (n && (t[`${tS}${e}`] = n), t), {});
            return 0 !== Object.keys(e).length ? Object.entries(e).reduce((t, [e, n], r) => {
                let i = `${encodeURIComponent(e)}=${encodeURIComponent(n)}`,
                    s = 0 === r ? i : `${t},${i}`;
                return s.length > 8192 ? (l.DEBUG_BUILD && d.debug.warn(`Not adding key: ${e} with val: ${n} to baggage header due to exceeding baggage size limits.`), t) : s
            }, "") : void 0
        }
    }, "parseBaggageHeader", 0, tb], 593321), t.s(["hasSpansEnabled", 0, tT], 473295), t.s(["reparentChildSpans", 0, function(t, e) {
        let n = e.parent_span_id,
            r = e.span_id;
        if (n)
            for (let e of t) e.parent_span_id === r && (e.parent_span_id = n)
    }, "shouldIgnoreSpan", 0, tI], 347437), t.s(["hasSpanStreamingEnabled", 0, tA], 721549), t.s(["parseSampleRate", 0, tx], 784553), t.s(["serializeAttributes", 0, tN], 204566), t.s(["SPAN_STATUS_ERROR", 0, 2, "SPAN_STATUS_OK", 0, 1, "SPAN_STATUS_UNSET", 0, 0, "setHttpStatus", 0, function(t, e) {
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
    }], 276782);
    let tC = "_sentryScope",
        tO = "_sentryIsolationScope";

    function tD(t, e, n) {
        t && (_(t, tO, function(t) {
            try {
                let e = y.GLOBAL_OBJ.WeakRef;
                if ("function" == typeof e) return new e(t)
            } catch {}
            return t
        }(n)), _(t, tC, e))
    }

    function tR(t) {
        return {
            scope: t[tC],
            isolationScope: function(t) {
                if (t) {
                    if ("object" == typeof t && "deref" in t && "function" == typeof t.deref) try {
                        return t.deref()
                    } catch {
                        return
                    }
                    return t
                }
            }(t[tO])
        }
    }
    t.s(["getCapturedScopesOnSpan", 0, tR, "setCapturedScopesOnSpan", 0, tD], 908408);
    let tk = /^o(\d+)\./,
        tL = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;

    function tw(t, e = !1) {
        let {
            host: n,
            path: r,
            pass: i,
            port: s,
            projectId: a,
            protocol: o,
            publicKey: c
        } = t;
        return `${o}://${c}${e&&i?`:${i}`:""}@${n}${s?`:${s}`:""}/${r?`${r}/`:r}${a}`
    }

    function tB(t) {
        let e = tL.exec(t);
        if (!e) return void(0, d.consoleSandbox)(() => {
            console.error(`Invalid Sentry Dsn: ${t}`)
        });
        let [n, r, i = "", s = "", a = "", o = ""] = e.slice(1), c = "", u = o, l = u.split("/");
        if (l.length > 1 && (c = l.slice(0, -1).join("/"), u = l.pop()), u) {
            let t = u.match(/^\d+/);
            t && (u = t[0])
        }
        return tU({
            host: s,
            pass: i,
            path: c,
            projectId: u,
            port: a,
            protocol: n,
            publicKey: r
        })
    }

    function tU(t) {
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

    function tM(t) {
        let e, n = t.getOptions(),
            {
                host: r
            } = t.getDsn() || {};
        if (n.orgId) e = String(n.orgId);
        else {
            let t;
            r && (t = r.match(tk), e = t?.[1])
        }
        return e
    }
    t.s(["dsnFromString", 0, tB, "dsnToString", 0, tw, "extractOrgIdFromClient", 0, tM, "makeDsn", 0, function(t) {
        let e = "string" == typeof t ? tB(t) : tU(t);
        if (e && function(t) {
                if (!l.DEBUG_BUILD) return !0;
                let {
                    port: e,
                    projectId: n,
                    protocol: r
                } = t;
                return !["protocol", "publicKey", "host", "projectId"].find(e => !t[e] && (d.debug.error(`Invalid Sentry Dsn: ${e} missing`), !0)) && (n.match(/^\d+$/) ? "http" !== r && "https" !== r ? (d.debug.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1) : !(e && isNaN(parseInt(e, 10))) || (d.debug.error(`Invalid Sentry Dsn: Invalid port ${e}`), !1) : (d.debug.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1))
            }(e)) return e
    }], 787331);
    let tP = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

    function t$(t = J(), e = Y(), n) {
        let r = "";
        return void 0 !== n && (r = n ? "-1" : "-0"), `${t}-${e}${r}`
    }

    function tj(t = J(), e = Y(), n) {
        return `00-${t}-${e}-${n?"01":"00"}`
    }
    t.s(["TRACEPARENT_REGEXP", 0, tP, "generateSentryTraceHeader", 0, t$, "generateTraceparentHeader", 0, tj, "propagationContextFromHeaders", 0, function(t, e) {
        let n = function(t) {
                let e;
                if (!t) return;
                let n = t.match(tP);
                if (n) return "1" === n[3] ? e = !0 : "0" === n[3] && (e = !1), {
                    traceId: n[1],
                    parentSampled: e,
                    parentSpanId: n[2]
                }
            }(t),
            r = ty(e);
        if (!n?.traceId) return {
            traceId: J(),
            sampleRand: E()
        };
        let i = function(t, e) {
            let n = tx(e?.sample_rand);
            if (void 0 !== n) return n;
            let r = tx(e?.sample_rate);
            return r && t?.parentSampled !== void 0 ? t.parentSampled ? E() * r : r + E() * (1 - r) : E()
        }(n, r);
        r && (r.sample_rand = i.toString());
        let {
            traceId: s,
            parentSpanId: a,
            parentSampled: o
        } = n;
        return {
            traceId: s,
            parentSpanId: a,
            sampled: o,
            dsc: r || {},
            sampleRand: i
        }
    }, "shouldContinueTrace", 0, function(t, e) {
        let n = tM(t);
        return e && n && e !== n ? (d.debug.log(`Won't continue trace because org IDs don't match (incoming baggage: ${e}, SDK options: ${n})`), !1) : !t.getOptions().strictTraceContinuation || (!e || !!n) && (!!e || !n) || (d.debug.log(`Starting a new trace because strict trace continuation is enabled but one org ID is missing (incoming baggage: ${e}, Sentry client: ${n})`), !1)
    }], 682603);
    let tG = !1;

    function tF(t) {
        let {
            spanId: e,
            traceId: n
        } = t.spanContext(), {
            data: r,
            op: i,
            parent_span_id: s,
            status: a,
            origin: o,
            links: c
        } = tK(t);
        return {
            parent_span_id: s,
            span_id: e,
            trace_id: n,
            data: r,
            op: i,
            status: a,
            origin: o,
            links: c
        }
    }

    function tJ(t) {
        let {
            spanId: e,
            traceId: n,
            isRemote: r
        } = t.spanContext(), i = r ? e : tK(t).parent_span_id, s = tR(t).scope;
        return {
            parent_span_id: i,
            span_id: r ? s?.getPropagationContext().propagationSpanId || Y() : e,
            trace_id: n
        }
    }

    function tY(t) {
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

    function tV(t) {
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

    function tH(t) {
        return "number" == typeof t ? tz(t) : Array.isArray(t) ? t[0] + t[1] / 1e9 : t instanceof Date ? tz(t.getTime()) : M()
    }

    function tz(t) {
        return t > 0x2540be3ff ? t / 1e3 : t
    }

    function tK(t) {
        if (tX(t)) return t.getSpanJSON();
        let {
            spanId: e,
            traceId: n
        } = t.spanContext();
        if (tq(t)) {
            let {
                attributes: r,
                startTime: i,
                name: s,
                endTime: a,
                status: o,
                links: c
            } = t;
            return {
                span_id: e,
                trace_id: n,
                data: r,
                description: s,
                parent_span_id: tW(t),
                start_timestamp: tH(i),
                timestamp: tH(a) || void 0,
                status: tZ(o),
                op: r[tp],
                origin: r[td],
                links: tY(c)
            }
        }
        return {
            span_id: e,
            trace_id: n,
            start_timestamp: 0,
            data: {}
        }
    }

    function tW(t) {
        return "parentSpanId" in t ? t.parentSpanId : "parentSpanContext" in t ? t.parentSpanContext?.spanId : void 0
    }

    function tq(t) {
        return !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status
    }

    function tX(t) {
        return "function" == typeof t.getSpanJSON
    }

    function tQ(t) {
        let {
            traceFlags: e
        } = t.spanContext();
        return 1 === e
    }

    function tZ(t) {
        if (t && 0 !== t.code) return 1 === t.code ? "ok" : t.message || "internal_error"
    }

    function t0(t) {
        return t && 1 !== t.code && 0 !== t.code && "cancelled" !== t.message ? "error" : "ok"
    }
    let t1 = "_sentryChildSpans",
        t3 = "_sentryRootSpan";

    function t4(t, e) {
        let n = t[t3] || t;
        _(e, t3, n), t[t1] ? t[t1].add(e) : _(t, t1, new Set([e]))
    }

    function t2(t) {
        let e = new Set;
        return ! function t(n) {
            if (!e.has(n) && tQ(n))
                for (let r of (e.add(n), n[t1] ? Array.from(n[t1]) : [])) t(r)
        }(t), Array.from(e)
    }
    let t5 = t9;

    function t9(t) {
        return t[t3] || t
    }

    function t7() {
        let t = tn((0, u.getMainCarrier)());
        return t.getActiveSpan ? t.getActiveSpan() : z(tr())
    }

    function t6() {
        tG || ((0, d.consoleSandbox)(() => {
            console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.")
        }), tG = !0)
    }
    t.s(["INTERNAL_getSegmentSpan", 0, t9, "TRACE_FLAG_NONE", 0, 0, "TRACE_FLAG_SAMPLED", 0, 1, "addChildSpanToSpan", 0, t4, "convertSpanLinksForEnvelope", 0, tY, "getActiveSpan", 0, t7, "getRootSpan", 0, t5, "getSimpleStatusMessage", 0, t0, "getSpanDescendants", 0, t2, "getStatusMessage", 0, tZ, "getStreamedSpanLinks", 0, tV, "removeChildSpanFromSpan", 0, function(t, e) {
        t[t1] && t[t1].delete(e)
    }, "showSpanDropWarning", 0, t6, "spanIsSampled", 0, tQ, "spanTimeInputToSeconds", 0, tH, "spanToJSON", 0, tK, "spanToStreamedSpanJSON", 0, function(t) {
        if (tX(t)) return t.getStreamedSpanJSON();
        let {
            spanId: e,
            traceId: n
        } = t.spanContext();
        if (tq(t)) {
            let {
                attributes: r,
                startTime: i,
                name: s,
                endTime: a,
                status: o,
                links: c
            } = t;
            return {
                name: s,
                span_id: e,
                trace_id: n,
                parent_span_id: tW(t),
                start_timestamp: tH(i),
                end_timestamp: tH(a),
                is_segment: t === t9(t),
                status: t0(o),
                attributes: r,
                links: tV(c)
            }
        }
        return {
            span_id: e,
            trace_id: n,
            start_timestamp: 0,
            name: "",
            end_timestamp: 0,
            status: "ok",
            is_segment: t === t9(t)
        }
    }, "spanToTraceContext", 0, tJ, "spanToTraceHeader", 0, function(t) {
        let {
            traceId: e,
            spanId: n
        } = t.spanContext();
        return t$(e, n, tQ(t))
    }, "spanToTraceparentHeader", 0, function(t) {
        let {
            traceId: e,
            spanId: n
        } = t.spanContext();
        return tj(e, n, tQ(t))
    }, "spanToTransactionTraceContext", 0, tF, "streamedSpanJsonToSerializedSpan", 0, function(t) {
        return {
            ...t,
            attributes: tN(t.attributes),
            links: t.links?.map(t => ({
                ...t,
                attributes: tN(t.attributes)
            }))
        }
    }], 310559);
    let t8 = "production";
    t.s(["DEFAULT_ENVIRONMENT", 0, t8], 144150);
    let et = "_frozenDsc";

    function ee(t, e) {
        _(t, et, e)
    }

    function en(t, e) {
        let n = e.getOptions(),
            {
                publicKey: r
            } = e.getDsn() || {},
            i = {
                environment: n.environment || t8,
                release: n.release,
                public_key: r,
                trace_id: t,
                org_id: tM(e)
            };
        return e.emit("createDsc", i), i
    }

    function er(t) {
        let e = to();
        if (!e) return {};
        let n = t5(t),
            r = tK(n),
            i = r.data,
            s = n.spanContext().traceState,
            a = s?.get("sentry.sample_rate") ?? i[tu] ?? i[tl];

        function o(t) {
            return ("number" == typeof a || "string" == typeof a) && (t.sample_rate = `${a}`), t
        }
        let c = n[et];
        if (c) return o(c);
        let u = s?.get("sentry.dsc"),
            l = u && ty(u);
        if (l) return o(l);
        let p = en(t.spanContext().traceId, e),
            d = i[tc] ?? i["sentry.span.source"],
            f = r.description;
        return "url" !== d && f && (p.transaction = f), tT() && (p.sampled = String(tQ(n)), p.sample_rand = s?.get("sentry.sample_rand") ?? tR(n).scope?.getPropagationContext().sampleRand.toString()), o(p), e.emit("createDsc", p, n), p
    }
    t.s(["freezeDscOnSpan", 0, ee, "getDynamicSamplingContextFromScope", 0, function(t, e) {
        let n = e.getPropagationContext();
        return n.dsc || en(n.traceId, t)
    }, "getDynamicSamplingContextFromSpan", 0, er], 743064);
    class ei {
        constructor(t = {}) {
            this._traceId = t.traceId || J(), this._spanId = t.spanId || Y(), this.dropReason = t.dropReason
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
    }

    function es(t) {
        return !!t && "function" == typeof t && "_streamed" in t && !!t._streamed
    }
    t.s(["SentryNonRecordingSpan", 0, ei], 445674), t.s(["isStreamedBeforeSendSpanCallback", 0, es], 562043);
    let ea = Symbol.for("sentry.skipNormalization"),
        eo = Symbol.for("sentry.overrideNormalizationDepth");

    function ec(e, n = 100, r = Infinity) {
        try {
            return function e(n, r, i = Infinity, s = Infinity, a = function() {
                let t = new WeakSet;
                return [function(e) {
                    return !!t.has(e) || (t.add(e), !1)
                }, function(e) {
                    t.delete(e)
                }]
            }()) {
                let o, [c, u] = a;
                if (null == r || ["boolean", "string"].includes(typeof r) || "number" == typeof r && Number.isFinite(r)) return r;
                let l = function(e, n) {
                    try {
                        var r;
                        let i;
                        if ("domain" === e && n && "object" == typeof n && n._events) return "[Domain]";
                        if ("domainEmitter" === e) return "[DomainEmitter]";
                        if (n === t.g) return "[Global]";
                        if ("u" > typeof window && n === window) return "[Window]";
                        if ("u" > typeof document && n === document) return "[Document]";
                        if ((0, f.isVueViewModel)(n)) return O(n);
                        if ((0, f.isSyntheticEvent)(n)) return "[SyntheticEvent]";
                        if ("number" == typeof n && !Number.isFinite(n)) return `[${n}]`;
                        if ("function" == typeof n) return `[Function: ${C(n)}]`;
                        if ("symbol" == typeof n) return `[${String(n)}]`;
                        if ("bigint" == typeof n) return `[BigInt: ${String(n)}]`;
                        let s = (r = n, i = Object.getPrototypeOf(r), i?.constructor ? i.constructor.name : "null prototype");
                        if (/^HTML(\w*)Element$/.test(s)) return `[HTMLElement: ${s}]`;
                        return `[object ${s}]`
                    } catch (t) {
                        return `**non-serializable** (${t})`
                    }
                }(n, r);
                if (!l.startsWith("[object ")) return l;
                if (r[ea]) return r;
                let p = (o = r[eo], "number" == typeof o ? o : void 0),
                    d = void 0 !== p ? p : i;
                if (0 === d) return l.replace("object ", "");
                if (c(r)) return "[Circular ~]";
                if (r && "function" == typeof r.toJSON) try {
                    let t = r.toJSON();
                    return e("", t, d - 1, s, a)
                } catch {}
                let _ = Array.isArray(r) ? [] : {},
                    g = 0,
                    m = h(r);
                for (let t in m) {
                    if (!Object.prototype.hasOwnProperty.call(m, t)) continue;
                    if (g >= s) {
                        _[t] = "[MaxProperties ~]";
                        break
                    }
                    let n = m[t];
                    _[t] = e(t, n, d - 1, s, a), g++
                }
                return u(r), _
            }("", e, n, r)
        } catch (t) {
            return {
                ERROR: `**non-serializable** (${t})`
            }
        }
    }

    function eu(t, e = []) {
        return [t, e]
    }

    function el(t, e) {
        for (let n of t[1]) {
            let t = n[0].type;
            if (e(n, t)) return !0
        }
        return !1
    }

    function ep(t) {
        let e = (0, u.getSentryCarrier)(y.GLOBAL_OBJ);
        return e.encodePolyfill ? e.encodePolyfill(t) : new TextEncoder().encode(t)
    }

    function ed(t) {
        return [{
            type: "span"
        }, t]
    }
    t.s(["normalize", 0, ec, "normalizeToSize", 0, function t(e, n = 3, r = 102400) {
        let i = ec(e, n);
        return ~-encodeURI(JSON.stringify(i)).split(/%..|./).length > r ? t(e, n - 1, r) : i
    }], 514302);
    let ef = {
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

    function e_(t) {
        if (!t?.sdk) return;
        let {
            name: e,
            version: n
        } = t.sdk;
        return {
            name: e,
            version: n
        }
    }

    function eg(t, e, n, r) {
        let i = t.sdkProcessingMetadata?.dynamicSamplingContext;
        return {
            event_id: t.event_id,
            sent_at: new Date().toISOString(),
            ...e && {
                sdk: e
            },
            ...!!n && r && {
                dsn: tw(r)
            },
            ...i && {
                trace: i
            }
        }
    }

    function eh(t, e) {
        let n = er(t[0]),
            r = e?.getDsn(),
            i = e?.getOptions().tunnel,
            s = {
                sent_at: new Date().toISOString(),
                ...!!n.trace_id && !!n.public_key && {
                    trace: n
                },
                ...!!i && r && {
                    dsn: tw(r)
                }
            },
            {
                beforeSendSpan: a,
                ignoreSpans: o
            } = e?.getOptions() || {},
            c = o?.length ? t.filter(t => {
                let e = tK(t);
                return !tI({
                    description: e.description,
                    op: e.op,
                    attributes: e.data
                }, o)
            }) : t,
            u = t.length - c.length;
        u && e?.recordDroppedEvent("before_send", "span", u);
        let l = a ? t => {
                let e = tK(t),
                    n = es(a) ? e : a(e);
                return n || (t6(), e)
            } : tK,
            p = [];
        for (let t of c) {
            let e = l(t);
            e && p.push(ed(e))
        }
        return eu(s, p)
    }

    function em(t) {
        if (!t || 0 === t.length) return;
        let e = {};
        return t.forEach(t => {
            let n = t.attributes || {},
                r = n[tf],
                i = n[t_];
            "string" == typeof r && "number" == typeof i && (e[t.name] = {
                value: i,
                unit: r
            })
        }), e
    }
    t.s(["addItemToEnvelope", 0, function(t, e) {
        let [n, r] = t;
        return [n, [...r, e]]
    }, "createAttachmentEnvelopeItem", 0, function(t) {
        let e = "string" == typeof t.data ? ep(t.data) : t.data;
        return [{
            type: "attachment",
            length: e.length,
            filename: t.filename,
            content_type: t.contentType,
            attachment_type: t.attachmentType
        }, e]
    }, "createEnvelope", 0, eu, "createEventEnvelopeHeaders", 0, eg, "createSpanEnvelopeItem", 0, ed, "envelopeContainsItemType", 0, function(t, e) {
        return el(t, (t, n) => e.includes(n))
    }, "envelopeItemTypeToDataCategory", 0, function(t) {
        return t in ef ? ef[t] : t
    }, "forEachEnvelopeItem", 0, el, "getSdkMetadataForEnvelopeHeader", 0, e_, "serializeEnvelope", 0, function(t) {
        let [e, n] = t, r = JSON.stringify(e);

        function i(t) {
            "string" == typeof r ? r = "string" == typeof t ? r + t : [ep(r), t] : r.push("string" == typeof t ? ep(t) : t)
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
                    t = JSON.stringify(ec(n))
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
    }], 59429), t.s(["createEventEnvelope", 0, function(t, e, n, r) {
        let i = e_(n),
            s = t.type && "replay_event" !== t.type ? t.type : "event";
        ! function(t, e) {
            if (!e) return;
            let n = t.sdk || {};
            t.sdk = {
                ...n,
                name: n.name || e.name,
                version: n.version || e.version,
                integrations: [...t.sdk?.integrations || [], ...e.integrations || []],
                packages: [...t.sdk?.packages || [], ...e.packages || []],
                settings: t.sdk?.settings || e.settings ? {
                    ...t.sdk?.settings,
                    ...e.settings
                } : void 0
            }
        }(t, n?.sdk);
        let a = eg(t, i, r, e);
        return delete t.sdkProcessingMetadata, eu(a, [
            [{
                type: s
            }, t]
        ])
    }, "createSessionEnvelope", 0, function(t, e, n, r) {
        let i = e_(n);
        return eu({
            sent_at: new Date().toISOString(),
            ...i && {
                sdk: i
            },
            ...!!r && e && {
                dsn: tw(e)
            }
        }, ["aggregates" in t ? [{
            type: "sessions"
        }, t] : [{
            type: "session"
        }, t.toJSON()]])
    }, "createSpanEnvelope", 0, eh], 174274), t.s(["setMeasurement", 0, function(t, e, n, r = t7()) {
        let i = r && t5(r);
        i && (l.DEBUG_BUILD && d.debug.log(`[Measurement] Setting measurement on root span: ${t} = ${e} ${n}`), i.addEvent(t, {
            [t_]: e,
            [tf]: n
        }))
    }, "timedEventsToMeasurements", 0, em], 413144);
    class eS {
        constructor(t = {}) {
            this._traceId = t.traceId || J(), this._spanId = t.spanId || Y(), this._startTime = t.startTimestamp || M(), this._links = t.links, this._attributes = {}, this.setAttributes({
                [td]: "manual",
                [tp]: t.op,
                ...t.attributes
            }), this._name = t.name, t.parentSpanId && (this._parentSpanId = t.parentSpanId), "sampled" in t && (this._sampled = t.sampled), t.endTimestamp && (this._endTime = t.endTimestamp), this._events = [], this._isStandaloneSpan = t.isStandalone, this._endTime && this._onSpanEnded()
        }
        addLink(t) {
            return this._links ? this._links.push(t) : this._links = [t], this
        }
        addLinks(t) {
            return this._links ? this._links.push(...t) : this._links = t, this
        }
        recordException(t, e) {}
        spanContext() {
            let {
                _spanId: t,
                _traceId: e,
                _sampled: n
            } = this;
            return {
                spanId: t,
                traceId: e,
                traceFlags: +!!n
            }
        }
        setAttribute(t, e) {
            return void 0 === e ? delete this._attributes[t] : this._attributes[t] = e, this
        }
        setAttributes(t) {
            return Object.keys(t).forEach(e => this.setAttribute(e, t[e])), this
        }
        updateStartTime(t) {
            this._startTime = tH(t)
        }
        setStatus(t) {
            return this._status = t, this
        }
        updateName(t) {
            return this._name = t, this.setAttribute(tc, "custom"), this
        }
        end(t) {
            this._endTime || (this._endTime = tH(t), function(t) {
                if (!l.DEBUG_BUILD) return;
                let {
                    description: e = "< unknown name >",
                    op: n = "< unknown op >"
                } = tK(t), {
                    spanId: r
                } = t.spanContext(), i = t5(t) === t, s = `[Tracing] Finishing "${n}" ${i?"root ":""}span "${e}" with ID ${r}`;
                d.debug.log(s)
            }(this), this._onSpanEnded())
        }
        getSpanJSON() {
            return {
                data: this._attributes,
                description: this._name,
                op: this._attributes[tp],
                parent_span_id: this._parentSpanId,
                span_id: this._spanId,
                start_timestamp: this._startTime,
                status: tZ(this._status),
                timestamp: this._endTime,
                trace_id: this._traceId,
                origin: this._attributes[td],
                profile_id: this._attributes[th],
                exclusive_time: this._attributes[tm],
                measurements: em(this._events),
                is_segment: this._isStandaloneSpan && t5(this) === this || void 0,
                segment_id: this._isStandaloneSpan ? t5(this).spanContext().spanId : void 0,
                links: tY(this._links)
            }
        }
        getStreamedSpanJSON() {
            return {
                name: this._name ?? "",
                span_id: this._spanId,
                trace_id: this._traceId,
                parent_span_id: this._parentSpanId,
                start_timestamp: this._startTime,
                end_timestamp: this._endTime ?? this._startTime,
                is_segment: this._isStandaloneSpan || this === t5(this),
                status: t0(this._status),
                attributes: this._attributes,
                links: tV(this._links)
            }
        }
        isRecording() {
            return !this._endTime && !!this._sampled
        }
        addEvent(t, e, n) {
            l.DEBUG_BUILD && d.debug.log("[Tracing] Adding an event to span:", t);
            let r = ey(e) ? e : n || M(),
                i = ey(e) ? {} : e || {},
                s = {
                    name: t,
                    time: tH(r),
                    attributes: i
                };
            return this._events.push(s), this
        }
        isStandaloneSpan() {
            return !!this._isStandaloneSpan
        }
        _onSpanEnded() {
            let t = to();
            if (t && (t.emit("spanEnd", this), this._isStandaloneSpan || t.emit("afterSpanEnd", this)), !(this._isStandaloneSpan || this === t5(this))) return;
            if (this._isStandaloneSpan) return void(this._sampled ? function(t) {
                let e = to();
                if (!e) return;
                let n = t[1];
                n && 0 !== n.length ? e.sendEnvelope(t) : e.recordDroppedEvent("before_send", "span")
            }(eh([this], t)) : (l.DEBUG_BUILD && d.debug.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."), t && t.recordDroppedEvent("sample_rate", "span")));
            if (t && tA(t)) return void t.emit("afterSegmentSpanEnd", this);
            let e = this._convertSpanToTransaction();
            e && (tR(this).scope || tr()).captureEvent(e)
        }
        _convertSpanToTransaction() {
            if (!eb(tK(this))) return;
            this._name || (l.DEBUG_BUILD && d.debug.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>");
            let {
                scope: t,
                isolationScope: e
            } = tR(this), n = t?.getScopeData().sdkProcessingMetadata?.normalizedRequest;
            if (!0 !== this._sampled) return;
            let r = t2(this).filter(t => {
                    var e;
                    return t !== this && !((e = t) instanceof eS && e.isStandaloneSpan())
                }).map(t => tK(t)).filter(eb),
                i = this._attributes[tc];
            delete this._attributes[tg];
            let s = !1;
            r.forEach(t => {
                delete t.data[tg], t.op?.startsWith("gen_ai.") && (s = !0)
            });
            let a = {
                    contexts: {
                        trace: tF(this)
                    },
                    spans: r.length > 1e3 ? r.sort((t, e) => t.start_timestamp - e.start_timestamp).slice(0, 1e3) : r,
                    start_timestamp: this._startTime,
                    timestamp: this._endTime,
                    transaction: this._name,
                    type: "transaction",
                    sdkProcessingMetadata: {
                        capturedSpanScope: t,
                        capturedSpanIsolationScope: e,
                        dynamicSamplingContext: er(this),
                        hasGenAiSpans: s
                    },
                    request: n,
                    ...i && {
                        transaction_info: {
                            source: i
                        }
                    }
                },
                o = em(this._events);
            return o && Object.keys(o).length && (l.DEBUG_BUILD && d.debug.log("[Measurements] Adding measurements to transaction event", JSON.stringify(o, void 0, 2)), a.measurements = o), a
        }
    }

    function ey(t) {
        return t && "number" == typeof t || t instanceof Date || Array.isArray(t)
    }

    function eb(t) {
        return !!t.start_timestamp && !!t.timestamp && !!t.span_id && !!t.trace_id
    }

    function eE(t, e) {
        let n = eT();
        return n.withActiveSpan ? n.withActiveSpan(t, e) : ta(n => (H(n, t || void 0), e(n)))
    }

    function eT() {
        return tn((0, u.getMainCarrier)())
    }

    function ev(t, e, n) {
        let r = to(),
            i = r?.getOptions() || {},
            {
                name: s = ""
            } = t,
            a = {
                spanAttributes: {
                    ...t.attributes
                },
                spanName: s,
                parentSampled: n
            };
        r?.emit("beforeSampling", a, {
            decision: !1
        });
        let o = a.parentSampled ?? n,
            c = a.spanAttributes,
            u = e.getPropagationContext(),
            p = eI(e),
            [f, _, g] = p ? [!1] : function(t, e, n) {
                let r, i;
                if (!tT(t)) return [!1];
                "function" == typeof t.tracesSampler ? (r = t.tracesSampler({
                    ...e,
                    inheritOrSampleWith: t => "number" == typeof e.parentSampleRate ? e.parentSampleRate : "boolean" == typeof e.parentSampled ? Number(e.parentSampled) : t
                }), i = !0) : void 0 !== e.parentSampled ? r = e.parentSampled : void 0 !== t.tracesSampleRate && (r = t.tracesSampleRate, i = !0);
                let s = tx(r);
                if (void 0 === s) return l.DEBUG_BUILD && d.debug.warn(`[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(r)} of type ${JSON.stringify(typeof r)}.`), [!1];
                if (!s) return l.DEBUG_BUILD && d.debug.log(`[Tracing] Discarding transaction because ${"function"==typeof t.tracesSampler?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), [!1, s, i];
                let a = n < s;
                return !a && l.DEBUG_BUILD && d.debug.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(r)})`), [a, s, i]
            }(i, {
                name: s,
                parentSampled: o,
                attributes: c,
                parentSampleRate: tx(u.dsc?.sample_rate)
            }, u.sampleRand),
            h = new eS({
                ...t,
                attributes: {
                    [tc]: "custom",
                    [tu]: void 0 !== _ && g ? _ : void 0,
                    ...c
                },
                sampled: f
            });
        return f || !r || p || (l.DEBUG_BUILD && d.debug.log("[Tracing] Discarding root span because its trace was not chosen to be sampled."), r.recordDroppedEvent("sample_rate", tA(r) ? "span" : "transaction")), r && r.emit("spanStart", h), h
    }

    function eI(t) {
        return !0 === t.getScopeData().sdkProcessingMetadata.__SENTRY_SUPPRESS_TRACING__
    }

    function eA(t) {
        return new eN(e => {
            e(t)
        })
    }

    function ex(t) {
        return new eN((e, n) => {
            n(t)
        })
    }
    t.s(["SentrySpan", 0, eS], 856447), t.s(["startInactiveSpan", 0, function(t) {
        let e = eT();
        if (e.startInactiveSpan) return e.startInactiveSpan(t);
        let n = function(t) {
                let e = {
                    isStandalone: (t.experimental || {}).standalone,
                    ...t
                };
                if (t.startTime) {
                    let n = {
                        ...e
                    };
                    return n.startTimestamp = tH(t.startTime), delete n.startTime, n
                }
                return e
            }(t),
            {
                forceTransaction: r,
                parentSpan: i
            } = t;
        return (t.scope ? e => ta(t.scope, e) : void 0 !== i ? t => eE(i, t) : t => t())(() => {
            let e = tr(),
                s = function(t, e) {
                    if (e) return e;
                    if (null === e) return;
                    let n = z(t);
                    if (!n) return;
                    let r = to();
                    return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan ? t5(n) : n
                }(e, i),
                a = to();
            return t.onlyIfParent && !s ? (a?.recordDroppedEvent("no_parent_span", "span"), new ei) : function({
                parentSpan: t,
                spanArguments: e,
                forceTransaction: n,
                scope: r
            }) {
                var i, s;
                let a, o;
                if (!tT()) {
                    let r = new ei;
                    if (n || !t) {
                        let t = {
                            sampled: "false",
                            sample_rate: "0",
                            transaction: e.name,
                            ...er(r)
                        };
                        ee(r, t)
                    }
                    return r
                }
                let c = to();
                if (i = c, s = e, o = i?.getOptions().ignoreSpans, i && tA(i) && o?.length && tI({
                        description: s.name || "",
                        op: s.attributes?.[tp] || s.op,
                        attributes: s.attributes
                    }, o)) return eI(r) || c?.recordDroppedEvent("ignored", "span"), new ei({
                    dropReason: "ignored",
                    traceId: t?.spanContext().traceId ?? r.getPropagationContext().traceId
                });
                let u = ti();
                if (t && !n) a = function(t, e, n) {
                    let {
                        spanId: r,
                        traceId: i
                    } = t.spanContext(), s = eI(e), a = !s && tQ(t), o = a ? new eS({
                        ...n,
                        parentSpanId: r,
                        traceId: i,
                        sampled: a
                    }) : new ei({
                        traceId: i
                    });
                    t4(t, o);
                    let c = to();
                    return c && (tA(c) && o instanceof ei && (t instanceof ei && t.dropReason ? (o.dropReason = t.dropReason, c.recordDroppedEvent(t.dropReason, "span")) : s || (o.dropReason = "sample_rate", c.recordDroppedEvent("sample_rate", "span"))), c.emit("spanStart", o), n.endTimestamp && (c.emit("spanEnd", o), c.emit("afterSpanEnd", o))), o
                }(t, r, e), t4(t, a);
                else if (t) {
                    let n = er(t),
                        {
                            traceId: i,
                            spanId: s
                        } = t.spanContext(),
                        o = tQ(t);
                    ee(a = ev({
                        traceId: i,
                        parentSpanId: s,
                        ...e
                    }, r, o), n)
                } else {
                    let {
                        traceId: t,
                        dsc: n,
                        parentSpanId: i,
                        sampled: s
                    } = {
                        ...u.getPropagationContext(),
                        ...r.getPropagationContext()
                    };
                    a = ev({
                        traceId: t,
                        parentSpanId: i,
                        ...e
                    }, r, s), n && ee(a, n)
                }
                return ! function(t) {
                    if (!l.DEBUG_BUILD) return;
                    let {
                        description: e = "< unknown name >",
                        op: n = "< unknown op >",
                        parent_span_id: r
                    } = tK(t), {
                        spanId: i
                    } = t.spanContext(), s = tQ(t), a = t5(t), o = a === t, c = `[Tracing] Starting ${s?"sampled":"unsampled"} ${o?"root ":""}span`, u = [`op: ${n}`, `name: ${e}`, `ID: ${i}`];
                    if (r && u.push(`parent ID: ${r}`), !o) {
                        let {
                            op: t,
                            description: e
                        } = tK(a);
                        u.push(`root ID: ${a.spanContext().spanId}`), t && u.push(`root op: ${t}`), e && u.push(`root description: ${e}`)
                    }
                    d.debug.log(`${c}
  ${u.join("\n  ")}`)
                }(a), tD(a, r, u), a
            }({
                parentSpan: s,
                spanArguments: n,
                forceTransaction: r,
                scope: e
            })
        })
    }, "startNewTrace", 0, function(t) {
        let e = eT();
        return e.startNewTrace ? e.startNewTrace(t) : ta(e => (e.setPropagationContext({
            traceId: J(),
            sampleRand: E()
        }), l.DEBUG_BUILD && d.debug.log(`Starting a new trace with id ${e.getPropagationContext().traceId}`), eE(null, t)))
    }, "withActiveSpan", 0, eE], 268371);
    class eN {
        constructor(t) {
            this._state = 0, this._handlers = [], this._runExecutor(t)
        }
        then(t, e) {
            return new eN((n, r) => {
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
            return new eN((e, n) => {
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
                        if ((0, f.isThenable)(e)) return void e.then(n, r);
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

    function eC(t) {
        let e = y.GLOBAL_OBJ._sentryDebugIds,
            n = y.GLOBAL_OBJ._debugIds;
        if (!e && !n) return {};
        let r = e ? Object.keys(e) : [],
            i = n ? Object.keys(n) : [];
        if (c && r.length === a && i.length === o) return c;
        a = r.length, o = i.length, c = {}, s || (s = {});
        let u = (e, n) => {
            for (let r of e) {
                let e = n[r],
                    i = s?.[r];
                if (i && c && e) c[i[0]] = e, s && (s[r] = [i[0], e]);
                else if (e) {
                    let n = t(r);
                    for (let t = n.length - 1; t >= 0; t--) {
                        let i = n[t],
                            a = i?.filename;
                        if (a && c && s) {
                            c[a] = e, s[r] = [a, e];
                            break
                        }
                    }
                }
            }
        };
        return e && u(r, e), n && u(i, n), c
    }

    function eO(t, e) {
        var n, r, i, s, a, o, c, u;
        let l, p, {
            fingerprint: d,
            span: f,
            breadcrumbs: _,
            sdkProcessingMetadata: g
        } = e;
        (function(t, e) {
            let {
                extra: n,
                tags: r,
                user: i,
                contexts: s,
                level: a,
                transactionName: o
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
            }), a && (t.level = a), o && "transaction" !== t.type && (t.transaction = o)
        })(t, e), f && ((n = t).contexts = {
            trace: tJ(r = f),
            ...n.contexts
        }, n.sdkProcessingMetadata = {
            dynamicSamplingContext: er(r),
            ...n.sdkProcessingMetadata
        }, (l = tK(t5(r)).description) && !n.transaction && "transaction" === n.type && (n.transaction = l)), i = t, s = d, i.fingerprint = i.fingerprint ? Array.isArray(i.fingerprint) ? i.fingerprint : [i.fingerprint] : [], s && (i.fingerprint = i.fingerprint.concat(s)), i.fingerprint.length || delete i.fingerprint, a = t, o = _, p = [...a.breadcrumbs || [], ...o], a.breadcrumbs = p.length ? p : void 0, c = t, u = g, c.sdkProcessingMetadata = {
            ...c.sdkProcessingMetadata,
            ...u
        }
    }

    function eD(t, e) {
        let {
            extra: n,
            tags: r,
            attributes: i,
            user: s,
            contexts: a,
            level: o,
            sdkProcessingMetadata: c,
            breadcrumbs: u,
            fingerprint: l,
            eventProcessors: p,
            attachments: d,
            propagationContext: f,
            transactionName: _,
            span: g
        } = e;
        eR(t, "extra", n), eR(t, "tags", r), eR(t, "attributes", i), eR(t, "user", s), eR(t, "contexts", a), t.sdkProcessingMetadata = F(t.sdkProcessingMetadata, c, 2), o && (t.level = o), _ && (t.transactionName = _), g && (t.span = g), u.length && (t.breadcrumbs = [...t.breadcrumbs, ...u]), l.length && (t.fingerprint = [...t.fingerprint, ...l]), p.length && (t.eventProcessors = [...t.eventProcessors, ...p]), d.length && (t.attachments = [...t.attachments, ...d]), t.propagationContext = {
            ...t.propagationContext,
            ...f
        }
    }

    function eR(t, e, n) {
        t[e] = F(t[e], n, 1)
    }

    function ek(t, e) {
        let n = ts().getScopeData();
        return t && eD(n, t.getScopeData()), e && eD(n, e.getScopeData()), n
    }

    function eL(t) {
        if (t) {
            var e;
            return (e = t) instanceof K || "function" == typeof e || Object.keys(t).some(t => ew.includes(t)) ? {
                captureContext: t
            } : t
        }
    }
    t.s(["rejectedSyncPromise", 0, ex, "resolvedSyncPromise", 0, eA], 189271), t.s(["getDebugImagesForResources", 0, function(t, e) {
        let n = eC(t);
        if (!n) return [];
        let r = [];
        for (let t of e) {
            let e = D(t);
            e && n[e] && r.push({
                type: "sourcemap",
                code_file: t,
                debug_id: n[e]
            })
        }
        return r
    }, "getFilenameToDebugIdMap", 0, eC], 284591), t.s(["applyScopeDataToEvent", 0, eO, "getCombinedScopeData", 0, ek], 136598);
    let ew = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"];

    function eB() {
        let t = ti(),
            e = tr().getSession() || t.getSession();
        e && G(e), eU(), t.setSession()
    }

    function eU() {
        let t = ti(),
            e = to(),
            n = t.getSession();
        n && e && e.captureSession(n)
    }
    t.s(["parseEventHintOrCaptureContext", 0, eL, "prepareEvent", 0, function(t, e, n, r, i, s) {
        var a, o, c;
        let u, {
                normalizeDepth: p = 3,
                normalizeMaxBreadth: _ = 1e3
            } = t,
            g = {
                ...e,
                event_id: e.event_id || n.event_id || L(),
                timestamp: e.timestamp || U()
            },
            h = n.integrations || t.integrations.map(t => t.name);
        (function(t, e) {
            let {
                environment: n,
                release: r,
                dist: i,
                maxValueLength: s
            } = e;
            t.environment = t.environment || n || t8, !t.release && r && (t.release = r), !t.dist && i && (t.dist = i);
            let a = t.request;
            a?.url && s && (a.url = R(a.url, s)), s && t.exception?.values?.forEach(t => {
                t.value && (t.value = R(t.value, s))
            })
        })(g, t), a = g, (o = h).length > 0 && (a.sdk = a.sdk || {}, a.sdk.integrations = [...a.sdk.integrations || [], ...o]), i && i.emit("applyFrameMetadata", e), void 0 === e.type && (c = g, u = eC(t.stackParser), c.exception?.values?.forEach(t => {
            t.stacktrace?.frames?.forEach(t => {
                t.filename && (t.debug_id = u[t.filename])
            })
        }));
        let m = function(t, e) {
            if (!e) return t;
            let n = t ? t.clone() : new K;
            return n.update(e), n
        }(r, n.captureContext);
        n.mechanism && B(g, n.mechanism);
        let S = i ? i.getEventProcessors() : [],
            y = ek(s, m),
            b = [...n.attachments || [], ...y.attachments];
        b.length && (n.attachments = b), eO(g, y);
        let E = [...S, ...y.eventProcessors];
        return (n.data && !0 === n.data.__sentry__ ? eA(g) : function(t, e, n, r = 0) {
            try {
                let i = function t(e, n, r, i) {
                    let s = r[i];
                    if (!e || !s) return e;
                    let a = s({
                        ...e
                    }, n);
                    return (l.DEBUG_BUILD && null === a && d.debug.log(`Event processor "${s.id||"?"}" dropped event`), (0, f.isThenable)(a)) ? a.then(e => t(e, n, r, i + 1)) : t(a, n, r, i + 1)
                }(e, n, t, r);
                return (0, f.isThenable)(i) ? i : eA(i)
            } catch (t) {
                return ex(t)
            }
        }(E, g, n)).then(t => (t && function(t) {
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
        }(t), "number" == typeof p && p > 0) ? function(t, e, n) {
            if (!t) return null;
            let r = {
                ...t,
                ...t.breadcrumbs && {
                    breadcrumbs: t.breadcrumbs.map(t => ({
                        ...t,
                        ...t.data && {
                            data: ec(t.data, e, n)
                        }
                    }))
                },
                ...t.user && {
                    user: ec(t.user, e, n)
                },
                ...t.contexts && {
                    contexts: ec(t.contexts, e, n)
                },
                ...t.extra && {
                    extra: ec(t.extra, e, n)
                }
            };
            return t.contexts?.trace && r.contexts && (r.contexts.trace = t.contexts.trace, t.contexts.trace.data && (r.contexts.trace.data = ec(t.contexts.trace.data, e, n))), t.spans && (r.spans = t.spans.map(t => ({
                ...t,
                ...t.data && {
                    data: ec(t.data, e, n)
                }
            }))), t.contexts?.flags && r.contexts && (r.contexts.flags = ec(t.contexts.flags, 3, n)), r
        }(t, p, _) : t)
    }], 838153), t.s(["addEventProcessor", 0, function(t) {
        ti().addEventProcessor(t)
    }, "captureEvent", 0, function(t, e) {
        return tr().captureEvent(t, e)
    }, "captureException", 0, function(t, e) {
        return tr().captureException(t, eL(e))
    }, "captureSession", 0, function(t = !1) {
        t ? eB() : eU()
    }, "isEnabled", 0, function() {
        let t = to();
        return t?.getOptions().enabled !== !1 && !!t?.getTransport()
    }, "setContext", 0, function(t, e) {
        ti().setContext(t, e)
    }, "startSession", 0, function(t) {
        let e = ti(),
            {
                user: n
            } = ek(e, tr()),
            {
                userAgent: r
            } = y.GLOBAL_OBJ.navigator || {},
            i = $({
                user: n,
                ...r && {
                    userAgent: r
                },
                ...t
            }),
            s = e.getSession();
        return s?.status === "ok" && j(s, {
            status: "exited"
        }), eB(), e.setSession(i), i
    }], 569959)
}]);