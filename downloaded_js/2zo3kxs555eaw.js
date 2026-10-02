;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "2254146a-02cd-a924-fd51-70ed72cdc992")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 427075, e => {
            "use strict";
            let t, n, r, a, i, o, l, s, u, c, d, f, p, m, h, g, v, y, b, _;
            var S = e.i(913836),
                E = e.i(432764),
                w = e.i(414542),
                T = e.i(920618);

            function k(e, t, n = [t], r = "npm") {
                let a = (e._metadata = e._metadata || {}).sdk = e._metadata.sdk || {};
                a.name || (a.name = `sentry.javascript.${t}`, a.packages = n.map(e => ({
                    name: `${r}:@sentry/${e}`,
                    version: T.SDK_VERSION
                })), a.version = T.SDK_VERSION)
            }
            var N = e.i(309578),
                x = e.i(932881),
                P = e.i(997629);
            let C = [];

            function O(e, t) {
                for (let n of t) n?.afterAllSetup && n.afterAllSetup(e)
            }

            function I(e, t, n) {
                if (n[t.name]) {
                    P.DEBUG_BUILD && E.debug.log(`Integration skipped because it was already installed: ${t.name}`);
                    return
                }
                if (n[t.name] = t, C.includes(t.name) || "function" != typeof t.setupOnce || (t.setupOnce(), C.push(t.name)), t.setup && "function" == typeof t.setup && t.setup(e), "function" == typeof t.preprocessEvent) {
                    let n = t.preprocessEvent.bind(t);
                    e.on("preprocessEvent", (t, r) => n(t, r, e))
                }
                if ("function" == typeof t.processEvent) {
                    let n = t.processEvent.bind(t),
                        r = Object.assign((t, r) => n(t, r, e), {
                            id: t.name
                        });
                    e.addEventProcessor(r)
                } ["processSpan", "processSegmentSpan"].forEach(n => {
                    let r = t[n];
                    "function" == typeof r && e.on(n, n => r.call(t, n, e))
                }), P.DEBUG_BUILD && E.debug.log(`Integration installed: ${t.name}`)
            }

            function R(e) {
                let t = [];
                e.message && t.push(e.message);
                try {
                    let n = e.exception.values[e.exception.values.length - 1];
                    n?.value && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`))
                } catch {}
                return t
            }
            var L = e.i(530598),
                A = e.i(39561);
            let D = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/, /can't redefine non-configurable property "solana"/, /vv\(\)\.getRestrictions is not a function/, /Can't find variable: _AutofillCallbackHandler/, /Object Not Found Matching Id:\d+, MethodName:simulateEvent/, /Java exception was raised during method invocation$/, /Java object is gone$/];

            function M(e = {}, t = {}) {
                return {
                    allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
                    denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
                    ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...e.disableErrorDefaults ? [] : D],
                    ignoreTransactions: [...e.ignoreTransactions || [], ...t.ignoreTransactions || []]
                }
            }

            function U(e) {
                try {
                    let t = [...e.exception?.values ?? []].reverse().find(e => e.mechanism?.parent_id === void 0 && e.stacktrace?.frames?.length),
                        n = t?.stacktrace?.frames;
                    return n ? function(e = []) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null
                        }
                        return null
                    }(n) : null
                } catch {
                    return P.DEBUG_BUILD && E.debug.error(`Cannot extract url for event ${(0,L.getEventDescription)(e)}`), null
                }
            }
            var z = e.i(419369);
            let B = new WeakMap;
            var F = e.i(551364),
                j = e.i(511091),
                $ = e.i(319074),
                G = e.i(764580);

            function H(e, t) {
                let n = (0, x.getClient)(),
                    r = (0, x.getIsolationScope)();
                if (!n) return;
                let {
                    beforeBreadcrumb: a = null,
                    maxBreadcrumbs: i = 100
                } = n.getOptions();
                if (i <= 0) return;
                let o = {
                        timestamp: (0, G.dateTimestampInSeconds)(),
                        ...e
                    },
                    l = a ? (0, $.safeCallback)(P.DEBUG_BUILD ? "The `beforeBreadcrumb` callback threw an error, dropping the breadcrumb:" : "", () => (0, E.consoleSandbox)(() => a(o, t)), () => null) : o;
                null !== l && (n.emit && n.emit("beforeAddBreadcrumb", l, t), r.addBreadcrumb(l, i))
            }
            var q = e.i(267269);
            let W = {},
                Y = {};

            function V(e, t) {
                return W[e] = W[e] || [], W[e].push(t), () => {
                    let n = W[e];
                    if (n) {
                        let e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
                    }
                }
            }

            function J(e, t) {
                if (!Y[e]) {
                    Y[e] = !0;
                    try {
                        t()
                    } catch (t) {
                        P.DEBUG_BUILD && E.debug.error(`Error while instrumenting ${e}`, t)
                    }
                }
            }

            function Q(e, t) {
                let n = e && W[e];
                if (n)
                    for (let r of n) try {
                        r(t)
                    } catch (t) {
                        P.DEBUG_BUILD && E.debug.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${(0,q.getFunctionName)(r)}
Error:`, t)
                    }
            }
            let K = new Set([]),
                X = new Set;

            function Z() {
                "console" in w.GLOBAL_OBJ && E.CONSOLE_LEVELS.forEach(function(e) {
                    !X.has(e) && e in w.GLOBAL_OBJ.console && (X.add(e), (0, z.fill)(w.GLOBAL_OBJ.console, e, function(t) {
                        return E.originalConsoleMethods[e] = t,
                            function(...t) {
                                let n = t[0],
                                    r = E.originalConsoleMethods[e],
                                    a = K.size && "string" == typeof n && (0, A.stringMatchesSomePattern)(n, K);
                                a || Q("console", {
                                    args: t,
                                    level: e
                                }), (!a || P.DEBUG_BUILD && E.debug.isEnabled()) && r?.apply(w.GLOBAL_OBJ.console, t)
                            }
                    }))
                })
            }

            function ee(e) {
                return "util" in w.GLOBAL_OBJ && "function" == typeof w.GLOBAL_OBJ.util.format ? w.GLOBAL_OBJ.util.format(...e) : (0, A.safeJoin)(e, " ")
            }

            function et(e, t) {
                let n = (0, q.getFramesFromEvent)(e),
                    r = (0, q.getFramesFromEvent)(t);
                if (!n || !r) return !n && !r;
                if (r.length !== n.length) return !1;
                for (let e = 0; e < r.length; e++) {
                    let t = r[e],
                        a = n[e];
                    if (t.filename !== a.filename || t.lineno !== a.lineno || t.colno !== a.colno || t.function !== a.function) return !1
                }
                return !0
            }

            function en(e, t) {
                let n = e.fingerprint,
                    r = t.fingerprint;
                if (!n || !r) return !n && !r;
                try {
                    return n.join("") === r.join("")
                } catch {
                    return !1
                }
            }

            function er(e) {
                return e.exception?.values?.[0]
            }
            var ea = e.i(390740),
                ei = e.i(989542),
                eo = e.i(762783),
                el = e.i(597968),
                es = e.i(435682),
                eu = e.i(445972),
                ec = e.i(993448),
                ed = e.i(134454),
                ef = e.i(646162),
                ep = e.i(785509);

            function em() {
                let e;
                return "u" > typeof window && (!(!("u" > typeof __SENTRY_BROWSER_BUNDLE__ && __SENTRY_BROWSER_BUNDLE__) && "[object process]" === Object.prototype.toString.call(void 0 !== S.default ? S.default : 0)) || (e = w.GLOBAL_OBJ.process, e?.type === "renderer"))
            }

            function eh(e, t) {
                var n, r, a, i, o;
                let l, s, u = t ?? (o = e, eg().get(o)) ?? [];
                if (0 === u.length) return;
                let c = e.getOptions(),
                    d = (n = c._metadata, r = c.tunnel, a = e.getDsn(), i = e.getDataCollectionOptions().userInfo, l = {}, n?.sdk && (l.sdk = {
                        name: n.sdk.name,
                        version: n.sdk.version
                    }), r && a && (l.dsn = (0, ei.dsnToString)(a)), (0, el.createEnvelope)(l, [(s = i ? "auto" : "never", [{
                        type: "log",
                        item_count: u.length,
                        content_type: "application/vnd.sentry.items.log+json"
                    }, {
                        version: 2,
                        ...em() && {
                            ingest_settings: {
                                infer_ip: s,
                                infer_user_agent: s
                            }
                        },
                        items: u
                    }])]));
                eg().set(e, []), e.emit("flushLogs"), e.sendEnvelope(d)
            }

            function eg() {
                return (0, ec.getGlobalSingleton)("clientToLogBufferMap", () => new WeakMap)
            }

            function ev(e, t) {
                var n, r, a, i, o;
                let l, s, u = t ?? (o = e, ey().get(o)) ?? [];
                if (0 === u.length) return;
                let c = e.getOptions(),
                    d = (n = c._metadata, r = c.tunnel, a = e.getDsn(), i = e.getDataCollectionOptions().userInfo, l = {}, n?.sdk && (l.sdk = {
                        name: n.sdk.name,
                        version: n.sdk.version
                    }), r && a && (l.dsn = (0, ei.dsnToString)(a)), (0, el.createEnvelope)(l, [(s = i ? "auto" : "never", [{
                        type: "trace_metric",
                        item_count: u.length,
                        content_type: "application/vnd.sentry.items.trace-metric+json"
                    }, {
                        version: 2,
                        ...em() && {
                            ingest_settings: {
                                infer_ip: s,
                                infer_user_agent: s
                            }
                        },
                        items: u
                    }])]));
                ey().set(e, []), e.emit("flushMetrics"), e.sendEnvelope(d)
            }

            function ey() {
                return (0, ec.getGlobalSingleton)("clientToMetricBufferMap", () => new WeakMap)
            }
            var eb = e.i(96342);

            function e_(e) {
                return !!e && "function" == typeof e && "_static" in e && !!e._static
            }
            let eS = !1;

            function eE(e, t) {
                let n = (0, $.safeCallback)(P.DEBUG_BUILD ? "The `beforeSendSpan` callback threw an error, sending the span unmodified:" : "", () => t(e), () => e);
                return n || (eS || ((0, E.consoleSandbox)(() => {
                    console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.")
                }), eS = !0), e)
            }

            function ew(e, t, n) {
                var r;
                let a = n.getOptions(),
                    i = n.getDsn(),
                    o = a.tunnel,
                    l = (0, el.getSdkMetadataForEnvelopeHeader)(a._metadata),
                    s = {
                        sent_at: new Date((0, es.safeDateNow)()).toISOString(),
                        ...!!(r = t).trace_id && !!r.public_key && {
                            trace: t
                        },
                        ...l && {
                            sdk: l
                        },
                        ...!!o && i && {
                            dsn: (0, ei.dsnToString)(i)
                        }
                    };
                return (0, el.createEnvelope)(s, [eT(e, n)])
            }

            function eT(e, t) {
                let n = t.getDataCollectionOptions().userInfo ? "auto" : "never";
                return [{
                    type: "span",
                    item_count: e.length,
                    content_type: "application/vnd.sentry.items.span.v2+json"
                }, {
                    version: 2,
                    ingest_settings: em() ? {
                        infer_ip: n,
                        infer_user_agent: n
                    } : void 0,
                    items: e
                }]
            }

            function ek(e) {
                return "stream" === e.getOptions().traceLifecycle
            }

            function eN(e) {
                let t = {
                    trace_id: e.trace_id,
                    span_id: e.span_id,
                    parent_span_id: e.parent_span_id,
                    name: e.description || "",
                    start_timestamp: e.start_timestamp,
                    end_timestamp: e.timestamp,
                    status: e.status && "ok" !== e.status && "cancelled" !== e.status ? "error" : "ok",
                    is_segment: !1,
                    attributes: {
                        ...e.data
                    },
                    links: e.links
                };
                return (0, j.streamedSpanJsonToSerializedSpan)(t)
            }
            var ex = e.i(981317);

            function eP(e) {
                return "object" == typeof e && "function" == typeof e.unref && e.unref(), e
            }
            let eC = Symbol.for("SentryBufferFullError");

            function eO(e = 100) {
                let t = new Set;
                return {
                    get $() {
                        return Array.from(t)
                    },
                    add: function(n) {
                        if (!(t.size < e)) return (0, ex.rejectedSyncPromise)(eC);
                        let r = n();
                        return t.add(r), r.then(() => {
                            t.delete(r)
                        }, () => {
                            t.delete(r)
                        }), r
                    },
                    drain: function(e) {
                        if (!t.size) return (0, ex.resolvedSyncPromise)(!0);
                        let n = Promise.allSettled(Array.from(t)).then(() => !0);
                        return e ? Promise.race([n, new Promise(t => eP(setTimeout(() => t(!1), e)))]) : n
                    }
                }
            }
            var eI = e.i(636933),
                eR = e.i(820899),
                eL = e.i(151348);

            function eA(e) {
                E.debug.log(`Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`)
            }

            function eD(e, t) {
                if (!t?.length) return !1;
                for (let r of t) {
                    var n;
                    if ("string" == typeof(n = r) || n instanceof RegExp) {
                        if (e.description && (0, A.isMatchingPattern)(e.description, r)) return P.DEBUG_BUILD && eA(e), !0;
                        continue
                    }
                    let t = !!r.attributes && Object.keys(r.attributes).length > 0;
                    if (!r.name && !r.op && !t) continue;
                    let a = !r.name || e.description && (0, A.isMatchingPattern)(e.description, r.name),
                        i = !r.op || e.op && (0, A.isMatchingPattern)(e.op, r.op),
                        o = !r.attributes || Object.entries(r.attributes).every(([t, n]) => (function(e, t) {
                            return "string" == typeof e && ("string" == typeof t || t instanceof RegExp) ? (0, A.isMatchingPattern)(e, t) : Array.isArray(e) && Array.isArray(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e === t
                        })(e.attributes?.[t], n));
                    if (a && i && o) return P.DEBUG_BUILD && eA(e), !0
                }
                return !1
            }
            let eM = {
                    request: !0,
                    response: !0
                },
                eU = ["incomingRequest", "outgoingRequest", "incomingResponse", "outgoingResponse"],
                ez = !0,
                eB = !0,
                eF = !0,
                ej = !0,
                e$ = "Not capturing exception because it's already been captured.",
                eG = "Discarded session because of missing or non-string release",
                eH = Symbol.for("SentryInternalError"),
                eq = Symbol.for("SentryDoNotSendEventError");

            function eW(e) {
                return {
                    message: e,
                    [eH]: !0
                }
            }

            function eY(e) {
                return {
                    message: e,
                    [eq]: !0
                }
            }

            function eV(e) {
                return (0, ed.isObjectLike)(e) && eH in e
            }

            function eJ(e) {
                return (0, ed.isObjectLike)(e) && eq in e
            }

            function eQ(e, t, n, r, a) {
                let i, o = 0,
                    l = !1;
                e.on(n, () => {
                    o = 0, clearTimeout(i), l = !1
                }), e.on(t, t => {
                    if ((o += r(t)) >= 8e5) a(e);
                    else if (!l) {
                        let t = e.getOptions()._flushInterval ?? 5e3;
                        t > 0 && (l = !0, i = eP(setTimeout(() => {
                            a(e)
                        }, t)))
                    }
                }), e.on("flush", () => {
                    a(e)
                })
            }
            class eK {
                constructor(e) {
                    this._options = {
                        attachStacktrace: !0,
                        ...e,
                        traceLifecycle: "static" === e.traceLifecycle ? "static" : "stream"
                    }, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], this._promiseBuffer = eO(e.transportOptions?.bufferSize ?? 64), this._dataCollection = function(e) {
                        let t = e.dataCollection ?? {};
                        return {
                            userInfo: t.userInfo ?? !0,
                            cookies: t.cookies ?? !0,
                            httpHeaders: function(e) {
                                return void 0 === e ? {
                                    ...eM
                                } : "boolean" == typeof e || "allow" in e || "deny" in e ? {
                                    request: e,
                                    response: e
                                } : {
                                    request: e.request ?? eM.request,
                                    response: e.response ?? eM.response
                                }
                            }(t.httpHeaders),
                            httpBodies: t.httpBodies ?? eU,
                            urlQueryParams: t.urlQueryParams ?? !0,
                            graphQL: {
                                document: t.graphQL?.document ?? ez,
                                variables: t.graphQL?.variables ?? eB
                            },
                            genAI: {
                                inputs: t.genAI?.inputs ?? eF,
                                outputs: t.genAI?.outputs ?? ej
                            },
                            databaseQueryData: t.databaseQueryData ?? !0,
                            queues: t.queues ?? !0,
                            stackFrameVariables: t.stackFrameVariables ?? !0,
                            frameContextLines: t.frameContextLines ?? 5
                        }
                    }(e), this._unhandledSessionStatus = "crashed", e.dsn ? this._dsn = (0, ei.makeDsn)(e.dsn) : P.DEBUG_BUILD && E.debug.warn("No DSN provided, client will not send events.");
                    const {
                        beforeSendSpan: t,
                        traceLifecycle: n
                    } = this._options;
                    if (P.DEBUG_BUILD && t && e_(t) !== ("static" === n) && (0, E.consoleSandbox)(() => {
                            console.warn(`Ignoring \`beforeSendSpan\`: ${"static"===n?"wrap it with":"remove"} \`Sentry.withStaticSpan\` to use it with \`traceLifecycle: "${n}"\`.`)
                        }), this._dsn) {
                        const t = function(e, t, n) {
                            let r, a, i;
                            return t || `${r=e.protocol?`${e.protocol}:`:"",a=e.port?`:${e.port}`:"",`${r}//${e.host}${a}${e.path?`/${e.path}`:""}/api/`}${e.projectId}/envelope/?${i={sentry_version:"7"},e.publicKey&&(i.sentry_key=e.publicKey),n&&(i.sentry_client=`
                            $ {
                                n.name
                            }
                            /${n.version}`),new URLSearchParams(i).toString()}`}(this._dsn,e.tunnel,e._metadata?e._metadata.sdk:void 0);this._transport=e.transport({tunnel:this._options.tunnel,recordDroppedEvent:this.recordDroppedEvent.bind(this),...e.transportOptions,url:t})}eQ(this,"afterCaptureLog","flushLogs",e1,eh),eQ(this,"afterCaptureMetric","flushMetrics",e0,ev)}captureException(e,t,n){let r=(0,L.uuid4)();if((0,L.checkOrSetAlreadyCaught)(e))return P.DEBUG_BUILD&&E.debug.log(e$),r;let a={event_id:r,...t};return this._process(()=>this.eventFromException(e,a).then(e=>this._captureEvent(e,a,n)).then(e=>e),"error"),a.event_id}captureMessage(e,t,n,r){let a={event_id:(0,L.uuid4)(),...n},i=(0,ed.isParameterizedString)(e)?e:String(e),o=(0,ed.isPrimitive)(e),l=o?this.eventFromMessage(i,t,a):this.eventFromException(e,a);return this._process(()=>l.then(e=>this._captureEvent(e,a,r)),o?"unknown":"error"),a.event_id}captureEvent(e,t,n){let r=(0,L.uuid4)();if(t?.originalException&&(0,L.checkOrSetAlreadyCaught)(t.originalException))return P.DEBUG_BUILD&&E.debug.log(e$),r;let a={event_id:r,...t},i=e.sdkProcessingMetadata||{},o=i.capturedSpanScope,l=i.capturedSpanIsolationScope,s=(0,el.getDataCategoryByType)(e.type);return this._process(()=>this._captureEvent(e,a,o||n,l),s),a.event_id}captureSession(e){this.sendSession(e),(0,eb.updateSession)(e,{init:!1})}getDsn(){return this._dsn}getOptions(){return this._options}getDataCollectionOptions(){return this._dataCollection}getSdkMetadata(){return this._options._metadata}getTransport(){return this._transport}async flush(e){let t=this._transport;if(this.emit("flush"),!t)return!0;let n=await this._isClientDoneProcessing(e),r=await t.flush(e);return n&&r}async close(e){let t=await this.flush(e);return this.getOptions().enabled=!1,this.emit("close"),t}getEventProcessors(){return this._eventProcessors}addEventProcessor(e){this._eventProcessors.push(e)}init(){if(this._isEnabled()||this._options.integrations.some(({name:e})=>e.startsWith("Spotlight"))){var e;this._setupIntegrations(),"stream"===(e=this._options).traceLifecycle&&(e.beforeSendTransaction||e.ignoreTransactions?.length)&&(0,E.consoleSandbox)(()=>{console.warn("[Sentry] `beforeSendTransaction` and `ignoreTransactions` are ignored with `traceLifecycle: 'stream'` (enabled by default). Use `beforeSendSpan` and `ignoreSpans` instead, or set `traceLifecycle: 'static'`.")})}}getIntegrationByName(e){return this._integrations[e]}getIntegrationNames(){return Object.keys(this._integrations)}addIntegration(e){let t=this._integrations[e.name];!t&&e.beforeSetup&&e.beforeSetup(this),I(this,e,this._integrations),t||O(this,[e])}sendEvent(e,t={}){var n,r,a;let i,o,l,s;this.emit("beforeSendEvent",e,t);let u=function(e,t){if("transaction"!==e.type||!e.spans?.length||!e.sdkProcessingMetadata?.hasGenAiSpans||ek(t))return;let n=[],r=[];for(let t of e.spans)t.op?.startsWith("gen_ai.")?n.push(eN(t)):r.push(t);if(0!==n.length)return e.spans=r,eT(n,t)}(e,this),c=(n=this._dsn,r=this._options._metadata,a=this._options.tunnel,i=(0,el.getSdkMetadataForEnvelopeHeader)(r),o=e.type&&"replay_event"!==e.type?e.type:"event",!function(e,t){if(!t)return;let n=e.sdk||{};e.sdk={...n,name:n.name||t.name,version:n.version||t.version,integrations:[...e.sdk?.integrations||[],...t.integrations||[]],packages:[...e.sdk?.packages||[],...t.packages||[]],settings:e.sdk?.settings||t.settings?{...e.sdk?.settings,...t.settings}:void 0}}(e,r?.sdk),l=(0,el.createEventEnvelopeHeaders)(e,i,a,n),delete e.sdkProcessingMetadata,s=[{type:o},e],(0,el.createEnvelope)(l,[s]));for(let e of t.attachments||[])c=(0,el.addItemToEnvelope)(c,(0,el.createAttachmentEnvelopeItem)(e));u&&(c=(0,el.addItemToEnvelope)(c,u)),this.sendEnvelope(c).then(t=>this.emit("afterSendEvent",e,t))}sendSession(e){var t,n,r;let a,i,o,{release:l,environment:s=eo.DEFAULT_ENVIRONMENT}=this._options;if("aggregates"in e){let t=e.attrs||{};if(!t.release&&!l){P.DEBUG_BUILD&&E.debug.warn(eG);return}t.release=t.release||l,t.environment=t.environment||s,e.attrs=t}else{if(!e.release&&!l){P.DEBUG_BUILD&&E.debug.warn(eG);return}e.release=e.release||l,e.environment=e.environment||s}this.emit("beforeSendSession",e);let u=(t=this._dsn,n=this._options._metadata,r=this._options.tunnel,a=(0,el.getSdkMetadataForEnvelopeHeader)(n),i={sent_at:new Date((0,es.safeDateNow)()).toISOString(),...a&&{sdk:a},...!!r&&t&&{dsn:(0,ei.dsnToString)(t)}},o="aggregates"in e?[{type:"sessions"},e]:[{type:"session"},e.toJSON()],(0,el.createEnvelope)(i,[o]));this.sendEnvelope(u)}recordDroppedEvent(e,t,n=1){if(this._options.sendClientReports){let r=`${e}:${t}`;P.DEBUG_BUILD&&E.debug.log(`Recording outcome: "${r}"${n>1?` (${n} times)`:""}`),this._outcomes[r]=(this._outcomes[r]||0)+n}}on(e,t){let n=this._hooks[e]=this._hooks[e]||new Set,r=(...e)=>t(...e);return n.add(r),()=>{n.delete(r)}}emit(e,...t){let n=this._hooks[e];n&&n.forEach(e=>e(...t))}async sendEnvelope(e){if(this.emit("beforeEnvelope",e),this._isEnabled()&&this._transport)try{let t=await this._transport.send(e);return this.emit("afterEnvelope",e),t}catch(e){return P.DEBUG_BUILD&&E.debug.error("Error while sending envelope:",e),{}}return P.DEBUG_BUILD&&E.debug.error("Transport disabled"),{}}registerCleanup(e){}dispose(){}_setupIntegrations(){var e;let t,{integrations:n}=this._options;this._integrations=(e=this,t={},n.forEach(t=>{t?.beforeSetup&&t.beforeSetup(e)}),n.forEach(n=>{n&&I(e,n,t)}),t),O(this,n)}_updateSessionFromEvent(e,t){let n="fatal"===t.level,r=!1,a=t.exception?.values;if(a){for(let e of(r=!0,n=!1,a))if(e.mechanism?.handled===!1){n=!0;break}}let i="ok"===e.status;(i&&0===e.errors||i&&n)&&((0,eb.updateSession)(e,{...n&&{status:this._unhandledSessionStatus},errors:e.errors||Number(r||n)}),this.captureSession(e))}async _isClientDoneProcessing(e){let t=0;for(;!e||t<e;){if(await new Promise(e=>setTimeout(e,1)),!this._numProcessing)return!0;t++}return!1}_isEnabled(){return!1!==this.getOptions().enabled&&void 0!==this._transport}_prepareEvent(e,t,n,r){let a=this.getOptions(),i=this.getIntegrationNames();return!t.integrations&&i.length&&(t.integrations=i),this.emit("preprocessEvent",e,t),e.type||r.setLastEventId(e.event_id||t.event_id),(0,eL.prepareEvent)(a,e,t,n,this,r).then(e=>(null===e||(this.emit("postprocessEvent",e,t),e.contexts={trace:{...e.contexts?.trace,...(0,x.getTraceContextFromScope)(n)},...e.contexts},e.sdkProcessingMetadata={dynamicSamplingContext:(0,ep.getDynamicSamplingContextFromScope)(this,n),...e.sdkProcessingMetadata}),e))}_captureEvent(e,t={},n=(0,x.getCurrentScope)(),r=(0,x.getIsolationScope)()){return P.DEBUG_BUILD&&eX(e)&&E.debug.log(`Captured error event \`${R(e)[0]||"<unknown>"}\``),this._processEvent(e,t,n,r).then(e=>e.event_id,e=>{P.DEBUG_BUILD&&(eJ(e)?E.debug.log(e.message):eV(e)?E.debug.warn(e.message):E.debug.warn(e))})}_processEvent(e,t,n,r){let a=this.getOptions(),{sampleRate:i}=a,o=eZ(e),l=eX(e),s=e.type||"error",u=`before send for type \`${s}\``,c="before_send",d=void 0===i?void 0:(0,eR.parseSampleRate)(i),f=(0,el.getDataCategoryByType)(e.type);return this._prepareEvent(e,t,n,r).then(e=>{if(null===e)throw eY("An event processor returned `null`, will not send event.");return t.data?.__sentry__===!0?e:function(e,t){let n=`${t} must return \`null\` or a valid event.`;if((0,ed.isThenable)(e))return e.then(e=>{if(!(0,ed.isPlainObject)(e)&&null!==e)throw eW(n);return e},e=>{throw eW(`${t} rejected with ${e}`)});if(!(0,ed.isPlainObject)(e)&&null!==e)throw eW(n);return e}(function(e,t,n,r,a){let{beforeSend:i,ignoreSpans:o,beforeSendTransaction:l}=t,s=e_(t.beforeSendSpan)&&t.beforeSendSpan,u=n;if(eX(u)&&i){let e=u;return(0,$.safeCallback)(P.DEBUG_BUILD?"The `beforeSend` callback threw an error, dropping the event:":"",()=>i(e,r),()=>(a(),null))}if(eZ(u)){if(s||o){let t=function(e){let{trace_id:t,parent_span_id:n,span_id:r,status:a,origin:i,data:o,op:l}=e.contexts?.trace??{};return{data:o??{},description:e.transaction,op:l,parent_span_id:n,span_id:r??"",start_timestamp:e.start_timestamp??0,status:a??"ok",timestamp:e.timestamp,trace_id:t??"",origin:i,profile_id:o?.[F.SEMANTIC_ATTRIBUTE_PROFILE_ID],exclusive_time:o?.[F.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME],measurements:e.measurements,is_segment:!0}}(u);if(o?.length&&eD({description:t.description,op:t.op,attributes:t.data},o))return null;if(s){let e=eE(t,s);u=(0,eI.merge)(n,{type:"transaction",timestamp:e.timestamp,start_timestamp:e.start_timestamp,transaction:e.description,contexts:{trace:{trace_id:e.trace_id,span_id:e.span_id,parent_span_id:e.parent_span_id,op:e.op,status:e.status,origin:e.origin,data:{...e.data,...e.profile_id&&{[F.SEMANTIC_ATTRIBUTE_PROFILE_ID]:e.profile_id},...e.exclusive_time&&{[F.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]:e.exclusive_time}}}},measurements:e.measurements})}if(u.spans){let t=[],n=u.spans;for(let e of n){if(o?.length&&eD({description:e.description,op:e.op,attributes:e.data},o)){!function(e,t){let n=t.parent_span_id,r=t.span_id;if(n)for(let t of e)t.parent_span_id===r&&(t.parent_span_id=n)}(n,e);continue}s?t.push(eE(e,s)):t.push(e)}let r=u.spans.length-t.length;r&&e.recordDroppedEvent("before_send","span",r),u.spans=t}}if(l){if(u.spans){let e=u.spans.length;u.sdkProcessingMetadata={...n.sdkProcessingMetadata,spanCountBeforeProcessing:e}}return(0,$.safeCallback)(P.DEBUG_BUILD?"The `beforeSendTransaction` callback threw an error, dropping the event:":"",()=>l(u,r),()=>(a(),null))}}return u}(this,a,e,t,()=>{c="callback_error"}),u)}).then(a=>{if(null===a){if(this.recordDroppedEvent(c,f),o){let t=e.spans||[];this.recordDroppedEvent(c,"span",1+t.length)}let t="callback_error"===c?"threw an error":"returned `null`";throw eY(`${u} ${t}, will not send event.`)}let s=n.getSession()||r.getSession();if(l&&s&&this._updateSessionFromEvent(s,a),l&&"number"==typeof d&&(0,es.safeMathRandom)()>d)throw this.recordDroppedEvent("sample_rate","error"),eY(`Discarding event because it's not included in the random sample (sampling rate = ${i})`);if(o){let e=(a.sdkProcessingMetadata?.spanCountBeforeProcessing||0)-(a.spans?a.spans.length:0);e>0&&this.recordDroppedEvent("before_send","span",e)}let p=a.transaction_info;return o&&p&&a.transaction!==e.transaction&&(a.transaction_info={...p,source:"custom"}),this.sendEvent(a,t),a}).then(null,e=>{if(eJ(e)||eV(e))throw e;throw this.captureException(e,{mechanism:{handled:!1,type:"internal"},data:{__sentry__:!0},originalException:e}),eW(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
                            Reason: $ {
                                e
                            }
                            `)})}_process(e,t){this._numProcessing++,this._promiseBuffer.add(e).then(e=>(this._numProcessing--,e),e=>(this._numProcessing--,e===eC&&this.recordDroppedEvent("queue_overflow",t),e))}_clearOutcomes(){let e=this._outcomes;return this._outcomes={},Object.entries(e).map(([e,t])=>{let[n,r]=e.split(":");return{reason:n,category:r,quantity:t}})}_flushOutcomes(){var e;let t;P.DEBUG_BUILD&&E.debug.log("Flushing outcomes...");let n=this._clearOutcomes();if(0===n.length){P.DEBUG_BUILD&&E.debug.log("No outcomes to send");return}if(!this._dsn){P.DEBUG_BUILD&&E.debug.log("No dsn provided, will not send outcomes");return}P.DEBUG_BUILD&&E.debug.log("Sending outcomes:",n);let r=(e=this._options.tunnel&&(0,ei.dsnToString)(this._dsn),t=[{type:"client_report"},{timestamp:(0,G.dateTimestampInSeconds)(),discarded_events:n}],(0,el.createEnvelope)(e?{dsn:e}:{},[t]));this.sendEnvelope(r)}}function eX(e){return void 0===e.type}function eZ(e){return"transaction"===e.type}function e0(e){let t=0;return e.name&&(t+=2*e.name.length),(t+=8)+e2(e.attributes)}function e1(e){let t=0;return e.message&&(t+=2*e.message.length),t+e2(e.attributes)}function e2(e){if(!e)return 0;let t=0;return Object.values(e).forEach(e=>{Array.isArray(e)?t+=e.length*e3(e[0]):(0,ed.isPrimitive)(e)?t+=e3(e):t+=100}),t}function e3(e){return"string"==typeof e?2*e.length:"number"==typeof e?8:4*("boolean"==typeof e)}function e4(e){"aggregates"in e?e.attrs?.ip_address===void 0&&(e.attrs={...e.attrs,ip_address:"{{auto}}"}):void 0===e.ipAddress&&(e.ipAddress="{{auto}}")}function e5(e){return(0,ed.isError)(e)&&"__sentry_fetch_url_host__"in e&&"string"==typeof e.__sentry_fetch_url_host__?`
                            $ {
                                e.message
                            }($ {
                                e.__sentry_fetch_url_host__
                            })`:e.message}function e8(e,t){var n,r;let a,i,o=e9(e,t),l={type:(n=t,!(a=n?.name)&&te(n)?n.message&&Array.isArray(n.message)&&2==n.message.length?n.message[0]:"WebAssembly.Exception":a),value:(r=t,i=r?.message,te(r)?Array.isArray(r.message)&&2==r.message.length?r.message[1]:"wasm exception":i?i.error&&"string"==typeof i.error.message?e5(i.error):e5(r):"No error message")};return o.length&&(l.stacktrace={frames:o}),void 0===l.type&&""===l.value&&(l.value="Unrecoverable error caught"),l}function e6(e,t){return{exception:{values:[e8(e,t)]}}}function e9(e,t){var n,r;let a=t.stacktrace||t.stack||"",i=(n=t)&&e7.test(n.message)?1:0,o="number"==typeof(r=t).framesToPop?r.framesToPop:0;try{return e(a,i,o)}catch{}return[]}let e7=/Minified React error #\d+;/i;function te(e){return"u">typeof WebAssembly&&void 0!==WebAssembly.Exception&&e instanceof WebAssembly.Exception}function tt(e,t,n,r,a){let i;if((0,ed.isErrorEvent)(t)&&t.error)return e6(e,t.error);if((0,ed.isDOMError)(t)||(0,ed.isDOMException)(t)){if("stack"in t){i=e6(e,t);let a=i.exception?.values?.[0];if(r&&n&&a&&!a.stacktrace){let t=e9(e,n);t.length&&(a.stacktrace={frames:t},(0,L.addExceptionMechanism)(i,{synthetic:!0}))}}else{let a=t.name||((0,ed.isDOMError)(t)?"DOMError":"DOMException"),o=t.message?`
                            $ {
                                a
                            }: $ {
                                t.message
                            }
                            `:a;i=tn(e,o,n,r),(0,L.addExceptionTypeValue)(i,o)}return i}if((0,ed.isError)(t))return e6(e,t);if((0,ed.isPlainObject)(t)||(0,ed.isEvent)(t))return i=function(e,t,n,r){let a=(0,x.getClient)(),i=a?.getOptions().normalizeDepth,o=Object.values(t).find(ed.isError),l={__serialized__:(0,ea.normalizeToSize)(t,i)};if(o)return{exception:{values:[e8(e,o)]},extra:l};let s={exception:{values:[{type:(0,ed.isEvent)(t)?t.constructor.name:r?"UnhandledRejection":"Error",value:function(e,{isUnhandledRejection:t}){let n=(0,z.extractExceptionKeysForMessage)(e),r=t?"promise rejection":"exception";if((0,ed.isErrorEvent)(e))return`
                            Event`ErrorEvent\` captured as ${r} with message \`${e.message}\``;
                            if ((0, ed.isEvent)(e)) {
                                let t = function(e) {
                                    try {
                                        let t = Object.getPrototypeOf(e);
                                        return t ? t.constructor.name : void 0
                                    } catch {}
                                }(e);
                                return `Event \`${t}\` (type=${e.type}) captured as ${r}`
                            }
                            return `Object captured as ${r} with keys: ${n}`
                        }(t, {
                            isUnhandledRejection: r
                        })
                    }]
            }, extra: l
        };
        if (n) {
            let t = e9(e, n);
            t.length && (s.exception.values[0].stacktrace = {
                frames: t
            })
        }
        return s
    }(e, t, n, a), (0, L.addExceptionMechanism)(i, {
        synthetic: !0
    }), i;
    let o = String(t);
    return i = tn(e, o, n, r), (0, L.addExceptionTypeValue)(i, o, void 0), (0, L.addExceptionMechanism)(i, {
        synthetic: !0
    }), i
}

function tn(e, t, n, r) {
    let a = {};
    if (r && n) {
        let r = e9(e, n);
        r.length && (a.exception = {
            values: [{
                value: t,
                stacktrace: {
                    frames: r
                }
            }]
        }), (0, L.addExceptionMechanism)(a, {
            synthetic: !0
        })
    }
    if ((0, ed.isParameterizedString)(t)) {
        let {
            __sentry_template_string__: e,
            __sentry_template_values__: n
        } = t;
        return a.logentry = {
            message: e,
            params: n
        }, a
    }
    return a.message = t, a
}
let tr = w.GLOBAL_OBJ;

function ta() {
    try {
        return tr.document?.location.href ?? ""
    } catch {
        return ""
    }
}
let ti = w.GLOBAL_OBJ,
    to = 0,
    tl = [];

function ts(e) {
    if (to > 0) return !0;
    let t = e ? tl.findIndex(t => {
        var n, r;
        return n = t, r = e, n.msg === r.msg && n.url === r.url && n.line === r.line && n.column === r.column
    }) : -1;
    return -1 !== t && (tl.splice(t, 1), !0)
}

function tu(e, t = {}) {
    if ("function" != typeof e) return e;
    try {
        if (Object.prototype.hasOwnProperty.call(e, "__sentry_wrapped__")) {
            let t = e.__sentry_wrapped__;
            if ("function" == typeof t) return t;
            return e
        }
        if ((0, z.getOriginalFunction)(e)) return e
    } catch {
        return e
    }
    let n = function(...n) {
        w.GLOBAL_OBJ._sentryWrappedDepth = (w.GLOBAL_OBJ._sentryWrappedDepth || 0) + 1;
        try {
            let r = n.map(e => tu(e, t));
            return e.apply(this, r)
        } catch (e) {
            throw to++, setTimeout(() => {
                to--
            }), (0, x.withScope)(r => {
                r.addEventProcessor(e => (t.mechanism && ((0, L.addExceptionTypeValue)(e, void 0, void 0), (0, L.addExceptionMechanism)(e, t.mechanism)), e.extra = {
                    ...e.extra,
                    arguments: n
                }, e)), (0, N.captureException)(e)
            }), e
        } finally {
            w.GLOBAL_OBJ._sentryWrappedDepth = (w.GLOBAL_OBJ._sentryWrappedDepth || 0) - 1
        }
    };
    try {
        for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t])
    } catch {}(0, z.markFunctionWrapped)(n, e), (0, z.addNonEnumerableProperty)(e, "__sentry_wrapped__", n);
    try {
        Object.getOwnPropertyDescriptor(n, "name").configurable && Object.defineProperty(n, "name", {
            get: () => e.name
        })
    } catch {}
    return n
}

function tc() {
    let e = ta(),
        {
            referrer: t
        } = ti.document || {},
        {
            userAgent: n
        } = ti.navigator || {};
    return {
        url: e,
        headers: {
            ...t && {
                Referer: t
            },
            ...n && {
                "User-Agent": n
            }
        }
    }
}
class td extends eK {
    constructor(e) {
        const t = function(e) {
            return {
                release: "string" == typeof __SENTRY_RELEASE__ ? __SENTRY_RELEASE__ : ti.SENTRY_RELEASE?.id,
                sendClientReports: !0,
                parentSpanIsAlwaysRootSpan: !0,
                ...e
            }
        }(e);
        k(t, "browser", ["browser"], ti.SENTRY_SDK_SOURCE || "npm"), super(t), this._unhandledSessionStatus = "unhandled";
        const {
            userInfo: n
        } = this.getDataCollectionOptions();
        t._metadata?.sdk && (t._metadata.sdk.settings = {
            infer_ip: n ? "auto" : "never",
            ...t._metadata.sdk.settings
        });
        const {
            sendClientReports: r
        } = this._options;
        ti.document && ti.document.addEventListener("visibilitychange", () => {
            "hidden" === ti.document.visibilityState && (r && this._flushOutcomes(), queueMicrotask(() => {
                this.flush()
            }))
        }), n && this.on("beforeSendSession", e4)
    }
    eventFromException(e, t) {
        var n, r;
        let a;
        return n = this._options.stackParser, r = this._options.attachStacktrace, a = tt(n, e, t?.syntheticException || void 0, r), (0, L.addExceptionMechanism)(a), a.level = "error", t?.event_id && (a.event_id = t.event_id), (0, ex.resolvedSyncPromise)(a)
    }
    eventFromMessage(e, t = "info", n) {
        return function(e, t, n = "info", r, a) {
            let i = tn(e, t, r?.syntheticException || void 0, a);
            return i.level = n, r?.event_id && (i.event_id = r.event_id), (0, ex.resolvedSyncPromise)(i)
        }(this._options.stackParser, e, t, n, this._options.attachStacktrace)
    }
    _prepareEvent(e, t, n, r) {
        return e.platform = e.platform || "javascript", super._prepareEvent(e, t, n, r)
    }
}
let tf = w.GLOBAL_OBJ;

function tp(e) {
    return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
}

function tm(e) {
    let t = "fetch",
        n = V(t, e);
    return J(t, () => void((!em() || function() {
        if ("string" == typeof EdgeRuntime) return !0;
        if (! function() {
                if (!("fetch" in tf)) return !1;
                try {
                    return new Headers, new Request("data:,"), new Response, !0
                } catch {
                    return !1
                }
            }()) return !1;
        if (tp(tf.fetch)) return !0;
        let e = !1,
            t = tf.document;
        if (t && "function" == typeof t.createElement) try {
            let n = t.createElement("iframe");
            n.hidden = !0, t.head.appendChild(n), n.contentWindow?.fetch && (e = tp(n.contentWindow.fetch)), t.head.removeChild(n)
        } catch (e) {
            P.DEBUG_BUILD && E.debug.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
        }
        return e
    }()) && (0, z.fill)(w.GLOBAL_OBJ, "fetch", function(e) {
        return new Proxy(e, {
            apply(e, t, n) {
                let r = Error(),
                    {
                        method: a,
                        url: i
                    } = function(e) {
                        if (0 === e.length) return {
                            method: "GET",
                            url: ""
                        };
                        if (2 === e.length) {
                            let [t, n] = e;
                            return {
                                url: tg(t),
                                method: th(n, "method") ? String(n.method).toUpperCase() : (0, ed.isRequest)(t) && th(t, "method") ? String(t.method).toUpperCase() : "GET"
                            }
                        }
                        let t = e[0];
                        return {
                            url: tg(t),
                            method: th(t, "method") ? String(t.method).toUpperCase() : "GET"
                        }
                    }(n),
                    o = {
                        args: n,
                        fetchData: {
                            method: a,
                            url: i
                        },
                        startTimestamp: 1e3 * (0, G.timestampInSeconds)(),
                        virtualError: r,
                        headers: function(e) {
                            let [t, n] = e;
                            try {
                                if ("object" == typeof n && null !== n && "headers" in n && n.headers) return new Headers(n.headers);
                                if ((0, ed.isRequest)(t)) return new Headers(t.headers)
                            } catch {}
                        }(n)
                    };
                return Q("fetch", {
                    ...o
                }), Reflect.apply(e, w.GLOBAL_OBJ, n).then(async e => (Q("fetch", {
                    ...o,
                    endTimestamp: 1e3 * (0, G.timestampInSeconds)(),
                    response: e
                }), e), e => {
                    Q("fetch", {
                        ...o,
                        endTimestamp: 1e3 * (0, G.timestampInSeconds)(),
                        error: e
                    }), (0, ed.isError)(e) && void 0 === e.stack && (e.stack = r.stack, (0, z.addNonEnumerableProperty)(e, "framesToPop", 1));
                    let t = (0, x.getClient)(),
                        n = t?.getOptions().enhanceFetchErrorMessages ?? "always";
                    if (!1 !== n && (0, ed.isError)(e) && "TypeError" === e.name && ("Failed to fetch" === e.message || "Load failed" === e.message || "NetworkError when attempting to fetch resource." === e.message)) try {
                        let t = new URL(o.fetchData.url).host;
                        "always" === n ? e.message = `${e.message} (${t})` : (0, z.addNonEnumerableProperty)(e, "__sentry_fetch_url_host__", t)
                    } catch {}
                    throw e
                })
            }
        })
    }))), n
}

function th(e, t) {
    return (0, ed.isObjectLike)(e) && !!e[t]
}

function tg(e) {
    return "string" == typeof e ? e : e ? th(e, "url") ? e.url : e.toString ? e.toString() : "" : ""
}

function tv(e) {
    if (void 0 !== e) return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : void 0
}
var ty = e.i(351384);
let tb = "[Filtered]",
    t_ = ["auth", "token", "secret", "session", "password", "passwd", "pwd", "key", "jwt", "bearer", "sso", "saml", "csrf", "xsrf", "credentials", "sid", "identity", "set-cookie", "cookie"];

function tS(e, t, n) {
    if (!1 === t) return !0;
    let r = e.toLowerCase();
    if ((null != n ? [...t_, ...n] : t_).some(e => r.includes(e))) return !0;
    if (!0 === t) return !1;
    let a = ("deny" in t ? t.deny : t.allow).some(e => r.includes(e.toLowerCase()));
    return "deny" in t ? a : !a
}

function tE(e, t, n) {
    if (!1 === t) return {};
    let r = {};
    for (let a of Object.keys(e)) r[a] = tS(a, t, n) ? tb : e[a];
    return r
}

function tw(e, t) {
    if (e && !1 !== t) return e.split("&").map(e => {
        let n = e.indexOf("="),
            r = -1 === n ? e : e.slice(0, n),
            a = new URLSearchParams(`${r}=`).keys().next().value;
        return void 0 !== a && tS(a, t) ? `${r}=${tb}` : e
    }).join("&")
}

function tT(e) {
    return (e ?? (0, x.getClient)())?.getDataCollectionOptions().urlQueryParams ?? !0
}

function tk(e, t) {
    return void 0 === e ? void 0 : function(e, t) {
        let n = e.indexOf("#"),
            r = -1 === n ? e.length : n,
            a = e.indexOf("?");
        if (-1 === a || a > r) return e;
        let i = e.slice(0, a),
            o = e.slice(a + 1, r),
            l = e.slice(r),
            s = tw(o, t);
        return s ? `${i}?${s}${l}` : `${i}${l}`
    }(e, tT(t))
}

function tN(e, t) {
    return e ? tw(e, tT(t)) : void 0
}

function tx(e) {
    return "isRelative" in e
}

function tP(e, t) {
    let n = 0 >= e.indexOf("://") && 0 !== e.indexOf("//"),
        r = t ?? (n ? "thismessage:/" : void 0);
    try {
        if ("canParse" in URL && !URL.canParse(e, r)) return;
        let t = new URL(e, r);
        if (n) return {
            isRelative: n,
            pathname: t.pathname,
            search: t.search,
            hash: t.hash
        };
        return t
    } catch {}
}

function tC(e) {
    return e?.replace(/^\?/, "") || void 0
}

function tO(e) {
    return e?.replace(/^#/, "") || void 0
}

function tI(e, t) {
    try {
        return new URL(e, t).hostname || void 0
    } catch {
        return
    }
}

function tR(e) {
    if (!e) return {};
    let t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!t) return {};
    let n = t[6] || "",
        r = t[8] || "";
    return {
        host: t[4],
        path: t[5],
        protocol: t[2],
        search: n,
        hash: r,
        relative: t[5] + n + r
    }
}

function tL(e, t = !0) {
    if (e.startsWith("data:")) {
        let n = e.match(/^data:([^;,]+)/),
            r = n ? n[1] : "text/plain",
            a = e.includes(";base64,"),
            i = e.indexOf(","),
            o = "";
        if (t && -1 !== i) {
            let t = e.slice(i + 1);
            o = t.length > 10 ? `${t.slice(0,10)}... [truncated]` : t
        }
        return `data:${r}${a?",base64":""}${o?`,${o}`:""}`
    }
    return e
}

function tA() {
    if (!tr.document) return;
    let e = Q.bind(null, "dom"),
        t = tD(e, !0);
    tr.document.addEventListener("click", t, !1), tr.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(t => {
        let n = tr[t]?.prototype;
        n?.hasOwnProperty?.("addEventListener") && ((0, z.fill)(n, "addEventListener", function(t) {
            return function(n, r, a) {
                if ("click" === n || "keypress" == n) try {
                    let r = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
                        i = r[n] = r[n] || {
                            refCount: 0
                        };
                    if (!i.handler) {
                        let r = tD(e);
                        i.handler = r, t.call(this, n, r, a)
                    }
                    i.refCount++
                } catch {}
                return t.call(this, n, r, a)
            }
        }), (0, z.fill)(n, "removeEventListener", function(e) {
            return function(t, n, r) {
                if ("click" === t || "keypress" == t) try {
                    let n = this.__sentry_instrumentation_handlers__ || {},
                        a = n[t];
                    a && (a.refCount--, a.refCount <= 0 && (e.call(this, t, a.handler, r), a.handler = void 0, delete n[t]), 0 === Object.keys(n).length && delete this.__sentry_instrumentation_handlers__)
                } catch {}
                return e.call(this, t, n, r)
            }
        }))
    })
}

function tD(e, a = !1) {
    return i => {
        var o;
        if (!i || i._sentryCaptured) return;
        let l = function(e) {
            try {
                return e.target
            } catch {
                return null
            }
        }(i);
        if (o = i.type, "keypress" === o && (!l?.tagName || "INPUT" !== l.tagName && "TEXTAREA" !== l.tagName && !l.isContentEditable && 1)) return;
        (0, z.addNonEnumerableProperty)(i, "_sentryCaptured", !0), l && !l._sentryId && (0, z.addNonEnumerableProperty)(l, "_sentryId", (0, L.uuid4)());
        let s = "keypress" === i.type ? "input" : i.type;
        ! function(e) {
            if (e.type !== n) return !1;
            try {
                if (!e.target || e.target._sentryId !== r) return !1
            } catch {}
            return !0
        }(i) && (e({
            event: i,
            name: s,
            global: a
        }), n = i.type, r = l ? l._sentryId : void 0), clearTimeout(t), t = tr.setTimeout(() => {
            r = void 0, n = void 0
        }, 1e3)
    }
}
let tM = "__sentry_xhr_v3__";

function tU(e) {
    V("xhr", e), J("xhr", tz)
}

function tz() {
    if (!tr.XMLHttpRequest) return;
    let e = XMLHttpRequest.prototype;
    e.open = new Proxy(e.open, {
        apply(e, t, n) {
            let r = Error(),
                a = 1e3 * (0, G.timestampInSeconds)(),
                i = (0, ed.isString)(n[0]) ? n[0].toUpperCase() : void 0,
                o = function(e) {
                    if ((0, ed.isString)(e)) return e;
                    try {
                        return e.toString()
                    } catch {}
                }(n[1]);
            if (!i || !o) return e.apply(t, n);
            t[tM] = {
                method: i,
                url: o,
                request_headers: {}
            }, "POST" === i && o.match(/sentry_key/) && (t.__sentry_own_request__ = !0);
            let l = () => {
                let e = t[tM];
                if (e && 4 === t.readyState) {
                    try {
                        e.status_code = t.status
                    } catch {}
                    Q("xhr", {
                        endTimestamp: 1e3 * (0, G.timestampInSeconds)(),
                        startTimestamp: a,
                        xhr: t,
                        virtualError: r
                    }), r = void 0, t.removeEventListener("readystatechange", l)
                }
            };
            return "onreadystatechange" in t && "function" == typeof t.onreadystatechange ? t.onreadystatechange = new Proxy(t.onreadystatechange, {
                apply: (e, t, n) => (l(), e.apply(t, n))
            }) : t.addEventListener("readystatechange", l), t.setRequestHeader = new Proxy(t.setRequestHeader, {
                apply(e, t, n) {
                    let [r, a] = n, i = t[tM];
                    return i && (0, ed.isString)(r) && (0, ed.isString)(a) && (i.request_headers[r.toLowerCase()] = a), e.apply(t, n)
                }
            }), e.apply(t, n)
        }
    }), e.send = new Proxy(e.send, {
        apply(e, t, n) {
            let r = t[tM];
            return r && (void 0 !== n[0] && (r.body = n[0]), Q("xhr", {
                startTimestamp: 1e3 * (0, G.timestampInSeconds)(),
                xhr: t
            })), e.apply(t, n)
        }
    })
}

function tB(e) {
    let t = "history";
    V(t, e), J(t, tF)
}

function tF() {
    function e(e) {
        return function(...t) {
            let n = t.length > 2 ? t[2] : void 0;
            if (n) {
                let r = a,
                    i = function(e) {
                        try {
                            return new URL(e, tr.location.origin).toString()
                        } catch {
                            return e
                        }
                    }(String(n));
                if (a = i, r === i) return e.apply(this, t);
                Q("history", {
                    from: r,
                    to: i
                })
            }
            return e.apply(this, t)
        }
    }
    tr.addEventListener("popstate", () => {
        let e = tr.location.href,
            t = a;
        a = e, t === e || Q("history", {
            from: t,
            to: e
        })
    }), "history" in tr && tr.history && ((0, z.fill)(tr.history, "pushState", e), (0, z.fill)(tr.history, "replaceState", e))
}
let tj = {};
try {
    "u" > typeof Node && (tj.parentNode = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode").get), "u" > typeof Element && (tj.tagName = Object.getOwnPropertyDescriptor(Element.prototype, "tagName").get, tj.id = Object.getOwnPropertyDescriptor(Element.prototype, "id").get, tj.className = Object.getOwnPropertyDescriptor(Element.prototype, "className").get, tj.getAttribute = Element.prototype.getAttribute), "u" > typeof HTMLElement && (tj.dataset = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "dataset").get)
} catch {}

function t$(e, t, n) {
    let r = tj[t];
    if (r) try {
        return r.call(e, n)
    } catch {}
    let a = e[t];
    return "function" == typeof a ? a.call(e, n) : a
}

function tG(e, t = {}) {
    if (!e) return "<unknown>";
    try {
        let n, r = e,
            a = [],
            i = 0,
            o = 0,
            l = Array.isArray(t) ? t : t.keyAttrs,
            s = !Array.isArray(t) && t.maxStringLength || 80;
        for (; r && i++ < 5 && (n = function(e, t) {
                let n = [],
                    r = t$(e, "tagName");
                if (!r) return "";
                if ("u" > typeof HTMLElement && e instanceof HTMLElement) {
                    let t = t$(e, "dataset");
                    if (t) {
                        if (t.sentryComponent) return t.sentryComponent;
                        if (t.sentryElement) return t.sentryElement
                    }
                }
                n.push(r.toLowerCase());
                let a = t?.length ? t.filter(t => t$(e, "getAttribute", t)).map(t => [t, t$(e, "getAttribute", t)]) : null;
                if (a?.length) a.forEach(e => {
                    n.push(`[${e[0]}="${e[1]}"]`)
                });
                else {
                    let t = t$(e, "id");
                    t && n.push(`#${t}`);
                    let r = t$(e, "className");
                    if (r && (0, ed.isString)(r))
                        for (let e of r.split(/\s+/)) n.push(`.${e}`)
                }
                for (let t of ["aria-label", "type", "name", "title", "alt"]) {
                    let r = t$(e, "getAttribute", t);
                    r && n.push(`[${t}="${r}"]`)
                }
                return n.join("")
            }(r, l), "html" !== n && (!(i > 1) || !(o + 3 * a.length + n.length >= s)));) a.push(n), o += n.length, r = t$(r, "parentNode");
        return a.reverse().join(" > ")
    } catch {
        return "<unknown>"
    }
}

function tH(e, t = 5) {
    if (!w.GLOBAL_OBJ.HTMLElement) return null;
    let n = e;
    for (let e = 0; e < t && n; e++) {
        if (n instanceof HTMLElement) {
            if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
            if (n.dataset.sentryElement) return n.dataset.sentryElement
        }
        n = n.parentNode
    }
    return null
}
let tq = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
    tW = "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(",");

function tY(e) {
    return function(...t) {
        let n = t[0];
        return t[0] = tu(n, {
            mechanism: {
                handled: !1,
                type: `auto.browser.browserapierrors.${(0,q.getFunctionName)(e)}`
            }
        }), e.apply(this, t)
    }
}

function tV(e) {
    return function(t) {
        return e.apply(this, [tu(t, {
            mechanism: {
                data: {
                    handler: (0, q.getFunctionName)(e)
                },
                handled: !1,
                type: "auto.browser.browserapierrors.requestAnimationFrame"
            }
        })])
    }
}

function tJ(e) {
    return function(...t) {
        let n = this;
        return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(e => {
            e in n && "function" == typeof n[e] && (0, z.fill)(n, e, function(t) {
                let n = {
                        mechanism: {
                            data: {
                                handler: (0, q.getFunctionName)(t)
                            },
                            handled: !1,
                            type: `auto.browser.browserapierrors.xhr.${e}`
                        }
                    },
                    r = (0, z.getOriginalFunction)(t);
                return r && (n.mechanism.data.handler = (0, q.getFunctionName)(r)), tu(t, n)
            })
        }), e.apply(this, t)
    }
}

function tQ(e, t, n) {
    tr.document && tr.addEventListener(e, t, n)
}

function tK(e, t, n) {
    tr.document && tr.removeEventListener(e, t, n)
}
let tX = (e = !0) => {
        let t = tr.performance?.getEntriesByType?.("navigation")[0];
        if (!e || t && t.responseStart > 0 && t.responseStart < performance.now()) return t
    },
    tZ = () => {
        let e = tX();
        return e?.activationStart ?? 0
    },
    t0 = -1,
    t1 = new Set,
    t2 = e => {
        if (tr.document?.visibilityState === "hidden" && t0 > -1) {
            if ("visibilitychange" === e.type)
                for (let e of t1) e();
            isFinite(t0) || (t0 = "visibilitychange" === e.type ? e.timeStamp : 0, tK("prerenderingchange", t2, !0))
        }
    };
var t3 = e.i(121284);

function t4(e, t) {
    var n;
    let r, a = (0, j.spanToJSON)(e),
        i = (0, j.INTERNAL_getSegmentSpan)(e),
        o = (0, j.spanToJSON)(i),
        {
            isolationScope: l,
            scope: s
        } = (0, t3.getCapturedScopesOnSpan)(e),
        u = (0, ef.getCombinedScopeData)(l, s);
    t5(a, t8(o, t, u)), t.emit("preprocessSpan", a), a.is_segment && (t5(a, function(e) {
        let t = {},
            {
                response: n,
                profile: r,
                cloud_resource: a,
                culture: i,
                state: o
            } = e;
        if (n && (null != n.status_code && (t["http.response.status_code"] = n.status_code), null != n.body_size && (t["http.response.body.size"] = n.body_size)), r && (r.profile_id && (t["sentry.profile_id"] = r.profile_id), r.profiler_id && (t["sentry.profiler_id"] = r.profiler_id)), a)
            for (let [e, n] of Object.entries(a)) null != n && (t[e] = n);
        i && (i.locale && (t["culture.locale"] = i.locale), i.timezone && (t["culture.timezone"] = i.timezone)), o?.state && "string" == typeof o.state.type && (t["state.type"] = o.state.type);
        let l = e.angular;
        if (l) {
            let e = l.version;
            ("string" == typeof e || "number" == typeof e) && (t["angular.version"] = e)
        }
        let s = e.react;
        if (s) {
            let e = s.version;
            ("string" == typeof e || "number" == typeof e) && (t["react.version"] = e)
        }
        return t
    }(u.contexts)), n = a, (r = t.getIntegrationNames()).length && t5(n, {
        [F.SEMANTIC_ATTRIBUTE_SENTRY_SDK_INTEGRATIONS]: r
    }), t.emit("processSegmentSpan", a)), t.emit("processSpan", a);
    let {
        beforeSendSpan: c,
        traceLifecycle: d
    } = t.getOptions(), f = "static" !== d && c && !e_(c) ? eE(a, c) : a;
    return {
        ...(0, j.streamedSpanJsonToSerializedSpan)(f),
        _segmentSpan: i
    }
}

function t5(e, t) {
    let n = e.attributes ?? (e.attributes = {});
    Object.entries(t).forEach(([e, t]) => {
        null == t || e in n || (n[e] = t)
    })
}

function t8(e, t, n, r = !0) {
    let a = t.getSdkMetadata(),
        {
            release: i,
            environment: o
        } = t.getOptions();
    return {
        [ty.SENTRY_TRACE_LIFECYCLE]: "stream",
        [ty.SENTRY_SEGMENT_NAME]: e.name,
        [ty.SENTRY_SEGMENT_ID]: e.span_id,
        [ty.SENTRY_SDK_NAME]: a?.sdk?.name,
        [ty.SENTRY_SDK_VERSION]: a?.sdk?.version,
        [F.SEMANTIC_ATTRIBUTE_SENTRY_RELEASE]: i,
        [F.SEMANTIC_ATTRIBUTE_SENTRY_ENVIRONMENT]: o || eo.DEFAULT_ENVIRONMENT,
        [F.SEMANTIC_ATTRIBUTE_USER_ID]: n.user?.id,
        [F.SEMANTIC_ATTRIBUTE_USER_EMAIL]: n.user?.email,
        [F.SEMANTIC_ATTRIBUTE_USER_IP_ADDRESS]: n.user?.ip_address,
        [F.SEMANTIC_ATTRIBUTE_USER_USERNAME]: n.user?.username,
        ...r ? n.attributes : void 0
    }
}

function t6() {
    try {
        let e = ti.Intl;
        if (!e) return;
        let t = e.DateTimeFormat().resolvedOptions();
        return {
            locale: t.locale,
            timezone: t.timeZone,
            calendar: t.calendar
        }
    } catch {
        return
    }
}
let t9 = null;

function t7(e) {
    let t = "error";
    V(t, e), J(t, ne)
}

function ne() {
    t9 = w.GLOBAL_OBJ.onerror, w.GLOBAL_OBJ.onerror = function(e, t, n, r, a) {
        return Q("error", {
            column: r,
            error: a,
            line: n,
            msg: e,
            url: t
        }), !!t9 && t9.apply(this, arguments)
    }, w.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = !0
}
let nt = null;

function nn(e) {
    let t = "unhandledrejection";
    V(t, e), J(t, nr)
}

function nr() {
    nt = w.GLOBAL_OBJ.onunhandledrejection, w.GLOBAL_OBJ.onunhandledrejection = function(e) {
        return Q("unhandledrejection", e), !nt || nt.apply(this, arguments)
    }, w.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
}

function na(e) {
    tq && E.debug.log(`Global Handler attached: ${e}`)
}

function ni() {
    let e = (0, x.getClient)();
    return e?.getOptions() || {
        stackParser: () => [],
        attachStacktrace: !1
    }
}

function no(e) {
    return Array.isArray(e.errors)
}

function nl(e, t, n) {
    e.mechanism = {
        handled: !0,
        type: "auto.core.linked_errors",
        ...no(n) && {
            is_exception_group: !0
        },
        ...e.mechanism,
        exception_id: t
    }
}

function ns(e, t, n, r) {
    e.mechanism = {
        handled: !0,
        ...e.mechanism,
        type: "chained",
        source: t,
        exception_id: n,
        parent_id: r
    }
}

function nu(e, t, n, r) {
    let a = {
        filename: e,
        function: "<anonymous>" === t ? q.UNKNOWN_FUNCTION : t,
        in_app: !0
    };
    return void 0 !== n && (a.lineno = n), void 0 !== r && (a.colno = r), a
}
let nc = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
    nd = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    nf = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    np = /at (.+?) ?\(data:(.+?),/,
    nm = [30, e => {
        let t = e.match(np);
        if (t) return {
            filename: `<data:${t[2]}>`,
            function: t[1]
        };
        let n = nc.exec(e);
        if (n) {
            let [, e, t, r] = n;
            return nu(e, q.UNKNOWN_FUNCTION, +t, +r)
        }
        let r = nd.exec(e);
        if (r) {
            if (r[2]?.indexOf("eval") === 0) {
                let e = nf.exec(r[2]);
                e && (r[2] = e[1], r[3] = e[2], r[4] = e[3])
            }
            let [e, t] = nb(r[1] || q.UNKNOWN_FUNCTION, r[2]);
            return nu(t, e, r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0)
        }
    }],
    nh = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    ng = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    nv = [50, e => {
        let t = nh.exec(e);
        if (t) {
            if (t[3] && t[3].indexOf(" > eval") > -1) {
                let e = ng.exec(t[3]);
                e && (t[1] = t[1] || "eval", t[3] = e[1], t[4] = e[2], t[5] = "")
            }
            let e = t[3],
                n = t[1] || q.UNKNOWN_FUNCTION;
            return [n, e] = nb(n, e), nu(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
        }
    }],
    ny = (0, q.createStackParser)(nm, nv),
    nb = (e, t) => {
        let n = -1 !== e.indexOf("safari-extension"),
            r = -1 !== e.indexOf("safari-web-extension");
        return n || r ? [-1 !== e.indexOf("@") ? e.split("@")[0] : q.UNKNOWN_FUNCTION, n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
    },
    n_ = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
    nS = {};

function nE(e, t = function(e) {
    let t = nS[e];
    if (t) return t;
    let n = tr[e];
    if (tp(n)) return nS[e] = n.bind(tr);
    let r = tr.document;
    if (r && "function" == typeof r.createElement) try {
        let t = r.createElement("iframe");
        t.hidden = !0, r.head.appendChild(t);
        let a = t.contentWindow;
        a?.[e] && (n = a[e]), r.head.removeChild(t)
    } catch (t) {
        n_ && E.debug.warn(`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `, t)
    }
    return n ? nS[e] = n.bind(tr) : n
}("fetch")) {
    let n = 0,
        r = 0;
    async function a(a) {
        let i = a.body.length;
        n += i, r++;
        let o = {
            body: a.body,
            method: "POST",
            referrerPolicy: "strict-origin",
            headers: e.headers,
            keepalive: n <= 6e4 && r < 15,
            ...e.fetchOptions
        };
        try {
            let n = await t(e.url, o);
            return {
                statusCode: n.status,
                headers: {
                    "x-sentry-rate-limits": n.headers.get("X-Sentry-Rate-Limits"),
                    "retry-after": n.headers.get("Retry-After")
                }
            }
        } catch (e) {
            throw nS.fetch = void 0, e
        } finally {
            n -= i, r--
        }
    }
    return function(e, t, n = eO(e.bufferSize || 64)) {
        let r = {};
        return {
            send: function(a) {
                let i = [];
                if ((0, el.forEachEnvelopeItem)(a, (t, n) => {
                        let a = (0, el.envelopeItemTypeToDataCategory)(n);
                        ! function(e, t, n = (0, es.safeDateNow)()) {
                            return (e[t] || e.all || 0) > n
                        }(r, a) ? i.push(t): e.recordDroppedEvent("ratelimit_backoff", a)
                    }), 0 === i.length) return Promise.resolve({});
                let o = (0, el.createEnvelope)(a[0], i),
                    l = t => {
                        if ((0, el.envelopeContainsItemType)(o, ["client_report"])) {
                            P.DEBUG_BUILD && E.debug.warn(`Dropping client report. Will not send outcomes (reason: ${t}).`);
                            return
                        }(0, el.forEachEnvelopeItem)(o, (n, r) => {
                            e.recordDroppedEvent(t, (0, el.envelopeItemTypeToDataCategory)(r))
                        })
                    };
                return n.add(() => t({
                    body: (0, el.serializeEnvelope)(o)
                }).then(e => (413 === e.statusCode ? (P.DEBUG_BUILD && E.debug.error("Sentry responded with status code 413. Envelope was discarded due to exceeding size limits."), l("send_error")) : (P.DEBUG_BUILD && void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode >= 300) && E.debug.warn(`Sentry responded with status code ${e.statusCode} to sent event.`), r = function(e, {
                    statusCode: t,
                    headers: n
                }, r = (0, es.safeDateNow)()) {
                    let a = {
                            ...e
                        },
                        i = n?.["x-sentry-rate-limits"],
                        o = n?.["retry-after"];
                    if (i)
                        for (let e of i.trim().split(",")) {
                            let [t, n, , , i] = e.split(":", 5), o = parseInt(t, 10), l = (isNaN(o) ? 60 : o) * 1e3;
                            if (n)
                                for (let e of n.split(";")) "metric_bucket" === e ? (!i || i.split(";").includes("custom")) && (a[e] = r + l) : a[e] = r + l;
                            else a.all = r + l
                        } else o ? a.all = r + function(e, t = (0, es.safeDateNow)()) {
                            let n = parseInt(`${e}`, 10);
                            if (!isNaN(n)) return 1e3 * n;
                            let r = Date.parse(`${e}`);
                            return isNaN(r) ? 6e4 : r - t
                        }(o, r) : 429 === t && (a.all = r + 6e4);
                    return a
                }(r, e)), e), e => {
                    throw l("network_error"), P.DEBUG_BUILD && E.debug.error("Encountered error running transport request:", e), e
                })).then(e => e, e => {
                    if (e === eC) return P.DEBUG_BUILD && E.debug.error("Skipped sending event because buffer is full."), l("queue_overflow"), Promise.resolve({});
                    throw e
                })
            },
            flush: e => n.drain(e)
        }
    }(e, a, eO(e.bufferSize || 40))
}
let nw = /^HTML(\w*)Element$/;

function nT(e) {
    if ("u" > typeof window && e === window) return "[Window]";
    if ("u" > typeof document && e === document) return "[Document]";
    if (function(e) {
            if ("u" < typeof Element) return !1;
            try {
                return e instanceof Element
            } catch {
                return !1
            }
        }(e)) {
        let t, n = (t = Object.getPrototypeOf(e), t?.constructor ? t.constructor.name : "null prototype");
        if (nw.test(n)) return `[HTMLElement: ${tG(e)}]`
    }
}

function nk(e) {
    let t;
    return [((e = {}) => {
        let t;
        return {
            name: "EventFilters",
            setup(n) {
                t = M(e, n.getOptions())
            },
            processEvent: (n, r, a) => (t || (t = M(e, a.getOptions())), ! function(e, t) {
                if (e.type) {
                    if ("transaction" === e.type && function(e, t) {
                            if (!t?.length) return !1;
                            let n = e.transaction;
                            return !!n && (0, A.stringMatchesSomePattern)(n, t)
                        }(e, t.ignoreTransactions)) return P.DEBUG_BUILD && E.debug.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${(0,L.getEventDescription)(e)}`), !0
                } else {
                    var n, r, a;
                    if (n = e, r = t.ignoreErrors, r?.length && R(n).some(e => (0, A.stringMatchesSomePattern)(e, r))) return P.DEBUG_BUILD && E.debug.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${(0,L.getEventDescription)(e)}`), !0;
                    if (a = e, a.exception?.values?.length && !a.message && !a.exception.values.some(e => e.stacktrace || e.type && "Error" !== e.type || e.value)) return P.DEBUG_BUILD && E.debug.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${(0,L.getEventDescription)(e)}`), !0;
                    if (function(e, t) {
                            if (!t?.length) return !1;
                            let n = U(e);
                            return !!n && (0, A.stringMatchesSomePattern)(n, t)
                        }(e, t.denyUrls)) return P.DEBUG_BUILD && E.debug.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${(0,L.getEventDescription)(e)}.
Url: ${U(e)}`), !0;
                    if (! function(e, t) {
                            if (!t?.length) return !0;
                            let n = U(e);
                            return !n || (0, A.stringMatchesSomePattern)(n, t)
                        }(e, t.allowUrls)) return P.DEBUG_BUILD && E.debug.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${(0,L.getEventDescription)(e)}.
Url: ${U(e)}`), !0
                }
                return !1
            }(n, t) ? n : null)
        }
    })(), {
        name: "FunctionToString",
        setupOnce() {
            let e = Function.prototype.toString;
            try {
                Function.prototype.toString = function(...t) {
                    let n, r = (0, z.getOriginalFunction)(this);
                    try {
                        B.has((0, x.getClient)()) && void 0 !== r && (n = r)
                    } catch {}
                    return e.apply(n ?? this, t)
                }
            } catch {}
        },
        setup(e) {
            B.set(e, !0)
        }
    }, {
        name: "ConversationId",
        setup(e) {
            e.on("spanStart", e => {
                let t = (0, x.getCurrentScope)().getScopeData(),
                    n = (0, x.getIsolationScope)().getScopeData(),
                    r = t.conversationId || n.conversationId;
                if (r) {
                    let {
                        op: t,
                        data: n,
                        description: a
                    } = (0, j.spanToStaticSpanJSON)(e);
                    if (!t?.startsWith("gen_ai.") && !n["ai.operationId"] && !a?.startsWith("ai.")) return;
                    e.setAttribute(F.GEN_AI_CONVERSATION_ID_ATTRIBUTE, r)
                }
            })
        }
    }, ((e = {}) => {
        let t = {
            XMLHttpRequest: !0,
            eventTarget: !0,
            requestAnimationFrame: !0,
            setInterval: !0,
            setTimeout: !0,
            unregisterOriginalCallbacks: !1,
            ...e
        };
        return {
            name: "BrowserApiErrors",
            setupOnce() {
                t.setTimeout && (0, z.fill)(ti, "setTimeout", tY), t.setInterval && (0, z.fill)(ti, "setInterval", tY), t.requestAnimationFrame && (0, z.fill)(ti, "requestAnimationFrame", tV), t.XMLHttpRequest && "XMLHttpRequest" in ti && (0, z.fill)(XMLHttpRequest.prototype, "send", tJ);
                let e = t.eventTarget;
                e && (Array.isArray(e) ? e : tW).forEach(e => {
                    var n, r;
                    let a;
                    return n = e, r = t, a = ti[n]?.prototype, void(a?.hasOwnProperty?.("addEventListener") && ((0, z.fill)(a, "addEventListener", function(e) {
                        return function(t, a, i) {
                            var o, l, s, u;
                            try {
                                o = a, "function" == typeof o.handleEvent && (a.handleEvent = tu(a.handleEvent, {
                                    mechanism: {
                                        data: {
                                            handler: (0, q.getFunctionName)(a),
                                            target: n
                                        },
                                        handled: !1,
                                        type: "auto.browser.browserapierrors.handleEvent"
                                    }
                                }))
                            } catch {}
                            return r.unregisterOriginalCallbacks && (l = this, s = t, u = a, l && "object" == typeof l && "removeEventListener" in l && "function" == typeof l.removeEventListener && l.removeEventListener(s, u)), e.apply(this, [t, tu(a, {
                                mechanism: {
                                    data: {
                                        handler: (0, q.getFunctionName)(a),
                                        target: n
                                    },
                                    handled: !1,
                                    type: "auto.browser.browserapierrors.addEventListener"
                                }
                            }), i])
                        }
                    }), (0, z.fill)(a, "removeEventListener", function(e) {
                        return function(t, n, r) {
                            try {
                                if (Object.prototype.hasOwnProperty.call(n, "__sentry_wrapped__")) {
                                    let a = n.__sentry_wrapped__;
                                    a && e.call(this, t, a, r)
                                }
                            } catch {}
                            return e.call(this, t, n, r)
                        }
                    })))
                })
            }
        }
    })(), ((e = {}) => {
        let t = {
            dom: !0,
            fetch: !0,
            history: !0,
            sentry: !0,
            xhr: !0,
            ...e
        };
        return {
            name: "Breadcrumbs",
            setup(e) {
                var n, r, a, i, o, l;
                t.dom && (V("dom", (n = e, r = t.dom, function(e) {
                    let t, a;
                    if ((0, x.getClient)() !== n) return;
                    let i = "object" == typeof r ? r.serializeAttribute : void 0,
                        o = "object" == typeof r && "number" == typeof r.maxStringLength ? r.maxStringLength : void 0;
                    o && o > 1024 && (tq && E.debug.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${o} was configured. Sentry will use 1024 instead.`), o = 1024), "string" == typeof i && (i = [i]);
                    try {
                        var l;
                        let n = e.event,
                            r = (l = n) && l.target ? n.target : n;
                        t = tG(r, {
                            keyAttrs: i,
                            maxStringLength: o
                        }), a = tH(r)
                    } catch {
                        t = "<unknown>"
                    }
                    if (0 === t.length) return;
                    let s = {
                        category: `ui.${e.name}`,
                        message: t
                    };
                    a && (s.data = {
                        "ui.component_name": a
                    }), H(s, {
                        event: e.event,
                        name: e.name,
                        global: e.global
                    })
                })), J("dom", tA)), t.xhr && tU((a = e, function(e) {
                    if ((0, x.getClient)() !== a) return;
                    let {
                        startTimestamp: t,
                        endTimestamp: n
                    } = e, r = e.xhr[tM];
                    if (!t || !n || !r) return;
                    let {
                        method: i,
                        url: o,
                        status_code: l,
                        body: s
                    } = r, u = {
                        xhr: e.xhr,
                        input: s,
                        startTimestamp: t,
                        endTimestamp: n
                    }, c = {
                        category: "xhr",
                        data: {
                            method: i,
                            url: o,
                            status_code: l
                        },
                        type: "http",
                        level: tv(l)
                    };
                    a.emit("beforeOutgoingRequestBreadcrumb", c, u), H(c, u)
                })), t.fetch && tm((i = e, function(e) {
                    if ((0, x.getClient)() !== i) return;
                    let {
                        startTimestamp: t,
                        endTimestamp: n
                    } = e;
                    if (n && (!e.fetchData.url.match(/sentry_key/) || "POST" !== e.fetchData.method))
                        if (e.error) {
                            let r = {
                                    data: e.error,
                                    input: e.args,
                                    startTimestamp: t,
                                    endTimestamp: n
                                },
                                a = {
                                    category: "fetch",
                                    data: e.fetchData,
                                    level: "error",
                                    type: "http"
                                };
                            i.emit("beforeOutgoingRequestBreadcrumb", a, r), H(a, r)
                        } else {
                            let r = e.response,
                                a = {
                                    ...e.fetchData,
                                    status_code: r?.status
                                },
                                o = {
                                    input: e.args,
                                    response: r,
                                    startTimestamp: t,
                                    endTimestamp: n
                                },
                                l = {
                                    category: "fetch",
                                    data: a,
                                    type: "http",
                                    level: tv(a.status_code)
                                };
                            i.emit("beforeOutgoingRequestBreadcrumb", l, o), H(l, o)
                        }
                })), t.history && tB((o = e, function(e) {
                    if ((0, x.getClient)() !== o) return;
                    let t = e.from,
                        n = e.to,
                        r = tR(ti.location.href),
                        a = t ? tR(t) : void 0,
                        i = tR(n);
                    a?.path || (a = r), r.protocol === i.protocol && r.host === i.host && (n = i.relative), r.protocol === a.protocol && r.host === a.host && (t = a.relative), H({
                        category: "navigation",
                        data: {
                            from: t,
                            to: n
                        }
                    })
                })), t.sentry && e.on("beforeSendEvent", (l = e, function(e) {
                    (0, x.getClient)() === l && H({
                        category: `sentry.${"transaction"===e.type?"transaction":"event"}`,
                        event_id: e.event_id,
                        level: e.level,
                        message: (0, L.getEventDescription)(e)
                    }, {
                        event: e
                    })
                }))
            }
        }
    })(), ((e = {}) => {
        let t = new Set(e.levels || E.CONSOLE_LEVELS);
        return {
            name: "Console",
            setup(n) {
                let r, a, i = (a = V(r = "console", ({
                    args: e,
                    level: r
                }) => {
                    (0, x.getClient)() === n && t.has(r) && function(e, t) {
                        let n = {
                            category: "console",
                            data: {
                                arguments: t,
                                logger: "console"
                            },
                            level: "warn" === e ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(e) ? e : "log",
                            message: ee(t)
                        };
                        if ("assert" === e)
                            if (!1 !== t[0]) return;
                            else {
                                let e = t.slice(1);
                                n.message = e.length > 0 ? `Assertion failed: ${ee(e)}` : "Assertion failed", n.data.arguments = e
                            } H(n, {
                            input: t,
                            level: e
                        })
                    }(r, e)
                }), J(r, Z), a);
                if (n.registerCleanup(i), e.filter) {
                    let t = function(e) {
                        for (let t of e) K.add(t);
                        return () => {
                            for (let t of e) K.delete(t)
                        }
                    }(e.filter);
                    n.registerCleanup(t)
                }
            }
        }
    })(), ((e = {}) => {
        let t = {
            onerror: !0,
            onunhandledrejection: !0,
            ...e
        };
        return {
            name: "GlobalHandlers",
            setupOnce() {
                Error.stackTraceLimit = 50
            },
            setup(e) {
                var n, r;
                t.onerror && (n = e, t7(e => {
                    var t, r, a, i;
                    let o, l, s, u, c, {
                        stackParser: d,
                        attachStacktrace: f
                    } = ni();
                    if ((0, x.getClient)() !== n || ts(e)) return;
                    let {
                        msg: p,
                        url: m,
                        line: h,
                        column: g,
                        error: v
                    } = e, y = (t = tt(d, v || p, void 0, f, !1), r = m, a = h, i = g, 0 === (c = (u = (s = (l = (o = t.exception = t.exception || {}).values = o.values || [])[0] = l[0] || {}).stacktrace = s.stacktrace || {}).frames = u.frames || []).length && c.push({
                        colno: i,
                        lineno: a,
                        filename: function(e) {
                            if ((0, ed.isString)(e) && 0 !== e.length) return e.startsWith("data:") ? `<${tL(e,!1)}>` : e
                        }(r) ?? ta(),
                        function: q.UNKNOWN_FUNCTION,
                        in_app: !0
                    }), t);
                    y.level = "error", (0, N.captureEvent)(y, {
                        originalException: v,
                        mechanism: {
                            handled: !1,
                            type: "auto.browser.global_handlers.onerror"
                        }
                    })
                }), na("onerror")), t.onunhandledrejection && (r = e, nn(e => {
                    var t;
                    let {
                        stackParser: n,
                        attachStacktrace: a
                    } = ni();
                    if ((0, x.getClient)() !== r || ts()) return;
                    let i = function(e) {
                            if ((0, ed.isPrimitive)(e)) return e;
                            try {
                                if ("reason" in e) return e.reason;
                                if ("detail" in e && "reason" in e.detail) return e.detail.reason
                            } catch {}
                            return e
                        }(e),
                        o = (0, ed.isPrimitive)(i) ? (t = i, {
                            exception: {
                                values: [{
                                    type: "UnhandledRejection",
                                    value: `Non-Error promise rejection captured with value: ${String(t)}`
                                }]
                            }
                        }) : tt(n, i, void 0, a, !0);
                    o.level = "error", (0, N.captureEvent)(o, {
                        originalException: i,
                        mechanism: {
                            handled: !1,
                            type: "auto.browser.global_handlers.onunhandledrejection"
                        }
                    })
                }), na("onunhandledrejection"))
            }
        }
    })(), ((e = {}) => {
        let t = e.limit || 5,
            n = e.key || "cause";
        return {
            name: "LinkedErrors",
            preprocessEvent(e, r, a) {
                ! function(e, t, n, r, a, i) {
                    if (!a.exception?.values || !i || !(0, ed.isError)(i.originalException)) return;
                    let o = a.exception.values.length > 0 ? a.exception.values[a.exception.values.length - 1] : void 0;
                    o && (a.exception.values = function e(t, n, r, a, i, o, l, s) {
                        if (o.length >= r + 1) return o;
                        let u = [...o];
                        if ((0, ed.isError)(a[i])) {
                            nl(l, s, a);
                            let o = t(n, a[i]),
                                c = u.length;
                            ns(o, i, c, s), u = e(t, n, r, a[i], i, [o, ...u], o, c)
                        }
                        return no(a) && a.errors.forEach((o, c) => {
                            if ((0, ed.isError)(o)) {
                                nl(l, s, a);
                                let d = t(n, o),
                                    f = u.length;
                                ns(d, `errors[${c}]`, f, s), u = e(t, n, r, o, i, [d, ...u], d, f)
                            }
                        }), u
                    }(e, t, r, i.originalException, n, a.exception.values, o, 0))
                }(e8, a.getOptions().stackParser, n, t, e, r)
            }
        }
    })(), {
        name: "Dedupe",
        processEvent(e) {
            if (e.type) return e;
            try {
                var n, r, a, i, o, l;
                let s, u, c, d;
                if (n = e, (r = t) && (a = n, i = r, s = a.message, u = i.message, (s || u) && (!s || u) && (s || !u) && s === u && en(a, i) && et(a, i) && 1 || (o = n, l = r, c = er(l), d = er(o), c && d && c.type === d.type && c.value === d.value && en(o, l) && et(o, l)))) return P.DEBUG_BUILD && E.debug.warn("Event dropped due to being a duplicate of previously captured event."), null
            } catch {}
            return t = e
        }
    }, {
        name: "HttpContext",
        preprocessEvent(e, t, n) {
            if (!ti.navigator && !ti.location && !ti.document) return;
            let {
                url: r,
                headers: a
            } = tc(), i = n.getDataCollectionOptions().httpHeaders.request, o = Object.entries(e.request?.headers ?? {}).filter(([e]) => !(e in a)), l = {
                ...tE(a, i),
                ...Object.fromEntries(o)
            };
            e.request = {
                url: r,
                ...e.request,
                ...Object.keys(l).length > 0 ? {
                    headers: l
                } : {
                    headers: void 0
                }
            }
        },
        processSpan(e, t) {
            if (!ti.navigator && !ti.location && !ti.document) return;
            let n = tc(),
                r = tE(n.headers, t.getDataCollectionOptions().httpHeaders.request),
                a = r.Referer,
                {
                    hostname: i,
                    protocol: o
                } = ti.location || {};
            t5(e, {
                [ty.USER_AGENT_ORIGINAL]: r["User-Agent"],
                [ty.SENTRY_IS_LOCALHOST]: "file:" === o || "localhost" === i || "127.0.0.1" === i || "[::1]" === i || !!i?.endsWith(".localhost"),
                ...e.is_segment && {
                    [ty.URL_FULL]: e.attributes?.[ty.SENTRY_OP] !== "http.client" ? tk(n.url) : void 0,
                    [`${ty.HTTP_REQUEST_HEADER_KEY_BASE}.referer`]: a ? [a] : void 0
                }
            })
        }
    }, {
        name: "CultureContext",
        preprocessEvent(e) {
            let t = t6();
            t && (e.contexts = {
                ...e.contexts,
                culture: {
                    ...t,
                    ...e.contexts?.culture
                }
            })
        },
        processSegmentSpan(e) {
            let t = t6();
            t && t5(e, {
                "culture.locale": t.locale,
                "culture.timezone": t.timezone,
                "culture.calendar": t.calendar
            })
        }
    }, ((e = {}) => {
        let t = e.lifecycle ?? "page";
        return {
            name: "BrowserSession",
            setupOnce() {
                if (void 0 === ti.document) {
                    tq && E.debug.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
                    return
                }(0, N.startSession)({
                    ignoreDuration: !0
                });
                let e = !1;
                (e => {
                    let t = tr.requestIdleCallback || tr.setTimeout;
                    if (tr.document?.visibilityState === "hidden") e();
                    else {
                        let n = !1,
                            r = () => {
                                n || (e(), n = !0)
                            };
                        tQ("visibilitychange", r, {
                            once: !0,
                            capture: !0
                        }), t(() => {
                            r(), tK("visibilitychange", r, {
                                capture: !0
                            })
                        })
                    }
                })(() => {
                    e || ((0, N.captureSession)(), e = !0)
                });
                let n = (0, x.getIsolationScope)(),
                    r = n.getUser();
                n.addScopeListener(t => {
                    let n = t.getUser();
                    (r?.id !== n?.id || r?.ip_address !== n?.ip_address) && (r = n, e && (0, N.captureSession)())
                }), "route" === t && tB(({
                    from: t,
                    to: n
                }) => {
                    t !== n && ((0, N.startSession)({
                        ignoreDuration: !0
                    }), (0, N.captureSession)(), e = !0)
                })
            }
        }
    })()]
}
var nN = e.i(409781);

function nx(e) {
    return (0, ed.isPlainObject)(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e ? "[SyntheticEvent]" : nT(e)
}
let nP = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
var nC = e.i(85971),
    nO = e.i(108922);
class nI {
    constructor(e, t) {
        this._traceBuckets = new Map, this._client = e;
        const {
            maxSpanLimit: n,
            flushInterval: r,
            maxTraceWeightInBytes: a
        } = t ?? {};
        this._maxSpanLimit = n && n > 0 && n <= 1e3 ? n : 1e3, this._flushInterval = r && r > 0 ? r : 5e3, this._maxTraceWeight = a && a > 0 ? a : 5e6, this._client.on("flush", () => {
            this.drain()
        }), this._client.on("close", () => {
            this._traceBuckets.forEach(e => {
                clearTimeout(e.timeout)
            }), this._traceBuckets.clear()
        })
    }
    add(e) {
        let t = e.trace_id,
            n = this._traceBuckets.get(t);
        n || (n = {
            spans: new Set,
            size: 0,
            timeout: eP(setTimeout(() => {
                this.flush(t)
            }, this._flushInterval))
        }, this._traceBuckets.set(t, n)), n.spans.add(e), n.size += function(e) {
            let t;
            if (t = 156 + 2 * e.name.length + (0, eu.estimateTypedAttributesSizeInBytes)(e.attributes), e.links && e.links.length > 0) {
                let n = e.links[0],
                    r = n?.attributes;
                t += (100 + (r ? (0, eu.estimateTypedAttributesSizeInBytes)(r) : 0)) * e.links.length
            }
            return t
        }(e), (n.spans.size >= this._maxSpanLimit || n.size >= this._maxTraceWeight) && this.flush(t)
    }
    drain() {
        this._traceBuckets.size && (P.DEBUG_BUILD && E.debug.log(`Flushing span tree map with ${this._traceBuckets.size} traces`), this._traceBuckets.forEach((e, t) => {
            this.flush(t)
        }))
    }
    flush(e) {
        let t = this._traceBuckets.get(e);
        if (!t) return;
        if (!t.spans.size) return void this._removeTrace(e);
        let n = Array.from(t.spans),
            r = n[0]?._segmentSpan;
        if (!r) {
            P.DEBUG_BUILD && E.debug.warn("No segment span reference found on span JSON, cannot compute DSC"), this._removeTrace(e);
            return
        }
        let a = (0, ep.getDynamicSamplingContextFromSpan)(r),
            i = n.map(e => {
                let {
                    _segmentSpan: t,
                    ...n
                } = e;
                return n
            }),
            o = ew(i, a, this._client);
        P.DEBUG_BUILD && E.debug.log(`Sending span envelope for trace ${e} with ${i.length} spans`), this._client.sendEnvelope(o).then(null, e => {
            P.DEBUG_BUILD && E.debug.error("Error while sending streamed span envelope:", e)
        }), this._removeTrace(e)
    }
    _removeTrace(e) {
        let t = this._traceBuckets.get(e);
        t && clearTimeout(t.timeout), this._traceBuckets.delete(e)
    }
}
let nR = "SpanStreaming";
var nL = e.i(919610),
    nA = e.i(390391);
e.i(523299), e.i(89268);
var nD = e.i(413007),
    nM = e.i(798844),
    nU = e.i(143829);

function nz(e, t, n, r = (0, j.getActiveSpan)()) {
    let a = r && (0, j.getRootSpan)(r);
    a && (P.DEBUG_BUILD && E.debug.log(`[Measurement] Setting measurement on root span: ${e} = ${t} ${n}`), a.addEvent(e, {
        [F.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: t,
        [F.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: n
    }))
}

function nB(e) {
    if (!e || 0 === e.length) return;
    let t = {};
    return e.forEach(e => {
        let n = e.attributes || {},
            r = n[F.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT],
            a = n[F.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE];
        "string" == typeof r && "number" == typeof a && (t[e.name] = {
            value: a,
            unit: r
        })
    }), t
}

function nF() {
    return (0, ec.getSentryCarrier)((0, ec.getMainCarrier)()).segmentSpanCaptureStrategy
}
class nj {
    constructor(e = {}) {
        this._traceId = e.traceId || (0, nD.generateTraceId)(), this._spanId = e.spanId || (0, nD.generateSpanId)(), this._startTime = e.startTimestamp || (0, G.timestampInSeconds)(), this._links = e.links, this._attributes = {}, this.setAttributes({
            [F.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "manual",
            [F.SEMANTIC_ATTRIBUTE_SENTRY_OP]: e.op,
            ...e.attributes
        }), this._name = e.name, e.parentSpanId && (this._parentSpanId = e.parentSpanId), "sampled" in e && (this._sampled = e.sampled), this._events = [], this._isStandaloneSpan = e.isStandalone
    }
    addLink(e) {
        return this._frozen || (this._links ? this._links.push(e) : this._links = [e]), this
    }
    addLinks(e) {
        return this._frozen || (this._links ? this._links.push(...e) : this._links = e), this
    }
    recordException(e, t) {}
    spanContext() {
        let {
            _spanId: e,
            _traceId: t,
            _sampled: n
        } = this;
        return {
            spanId: e,
            traceId: t,
            traceFlags: n ? j.TRACE_FLAG_SAMPLED : j.TRACE_FLAG_NONE
        }
    }
    setAttribute(e, t) {
        return this._frozen || (e !== ty.SENTRY_SEGMENT_NAME_SOURCE || void 0 === t || (0, j.spanIsSegment)(this) ? void 0 === t ? delete this._attributes[e] : this._attributes[e] = t : P.DEBUG_BUILD && E.debug.warn("[Tracing] Ignoring name source on a child span: this attribute is only valid on the root span.")), this
    }
    setAttributes(e) {
        return Object.keys(e).forEach(t => this.setAttribute(t, e[t])), this
    }
    updateStartTime(e) {
        this._frozen || (this._startTime = (0, j.spanTimeInputToSeconds)(e))
    }
    setStatus(e) {
        return this._frozen || (this._status = e), this
    }
    updateName(e) {
        return this._frozen || (this._name = e, (0, j.INTERNAL_setSegmentNameSourceIfSegment)(this, "custom")), this
    }
    end(e) {
        this._endTime || (this._endTime = (0, j.spanTimeInputToSeconds)(e), function(e) {
            if (!P.DEBUG_BUILD) return;
            let {
                description: t = "< unknown name >",
                op: n = "< unknown op >"
            } = (0, j.spanToStaticSpanJSON)(e), {
                spanId: r
            } = e.spanContext(), a = (0, j.getRootSpan)(e) === e, i = `[Tracing] Finishing "${n}" ${a?"root ":""}span "${t}" with ID ${r}`;
            E.debug.log(i)
        }(this), this._onSpanEnded(), this._frozen = (0, t3.spanIsTracerProviderSpan)(this))
    }
    getStaticSpanJSON() {
        return {
            data: this._attributes,
            description: this._name,
            op: this._attributes[F.SEMANTIC_ATTRIBUTE_SENTRY_OP],
            parent_span_id: this._parentSpanId,
            span_id: this._spanId,
            start_timestamp: this._startTime,
            status: (0, j.getStatusMessage)(this._status),
            timestamp: this._endTime,
            trace_id: this._traceId,
            origin: this._attributes[F.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
            profile_id: this._attributes[F.SEMANTIC_ATTRIBUTE_PROFILE_ID],
            exclusive_time: this._attributes[F.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME],
            measurements: nB(this._events),
            links: (0, j.convertSpanLinksForEnvelope)(this._links)
        }
    }
    getSpanJSON() {
        return {
            name: this._name ?? "",
            span_id: this._spanId,
            trace_id: this._traceId,
            parent_span_id: this._parentSpanId,
            start_timestamp: this._startTime,
            end_timestamp: this._endTime,
            is_segment: (0, j.spanIsSegment)(this),
            status: (0, j.getSimpleStatus)(this._status),
            attributes: (0, j.addStatusMessageAttribute)(this._attributes, this._status),
            links: (0, j.getStreamedSpanLinks)(this._links)
        }
    }
    isRecording() {
        return !this._endTime && !!this._sampled
    }
    addEvent(e, t, n) {
        if (this._frozen) return this;
        P.DEBUG_BUILD && E.debug.log("[Tracing] Adding an event to span:", e);
        let r = n$(t) ? t : n || (0, G.timestampInSeconds)(),
            a = n$(t) ? {} : t || {},
            i = {
                name: e,
                time: (0, j.spanTimeInputToSeconds)(r),
                attributes: a
            };
        return this._events.push(i), this
    }
    isStandaloneSpan() {
        return !!this._isStandaloneSpan
    }
    _onSpanEnded() {
        let e = (0, x.getClient)();
        if (e?.emit("spanEnd", this), this._isStandaloneSpan) return e ? this._sampled ? void
        function(e, t) {
            let {
                beforeSendSpan: n,
                traceLifecycle: r
            } = t.getOptions();
            if ("static" === r && e_(n)) {
                let r = function(e, t, n) {
                        let r = (0, j.spanToStaticSpanJSON)(e),
                            a = (0, j.INTERNAL_getSegmentSpan)(e),
                            i = (0, j.spanToJSON)(a),
                            {
                                isolationScope: o,
                                scope: l
                            } = (0, t3.getCapturedScopesOnSpan)(e);
                        return Object.entries(t8(i, t, (0, ef.getCombinedScopeData)(o, l), !1)).forEach(([e, t]) => {
                            null == t || e in r.data || (r.data[e] = t)
                        }), eN(eE(r, n))
                    }(e, t, n),
                    a = (0, ep.getDynamicSamplingContextFromSpan)(e);
                t.sendEnvelope(ew([r], a, t));
                return
            }
            let {
                _segmentSpan: a,
                ...i
            } = t4(e, t), o = (0, ep.getDynamicSamplingContextFromSpan)(a);
            t.sendEnvelope(ew([i], o, t))
        }(this, e): (P.DEBUG_BUILD && E.debug.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."), void e.recordDroppedEvent("sample_rate", "span")): void 0;
        e?.emit("afterSpanEnd", this);
        let t = (0, j.getRootSpan)(this);
        if (t !== this) {
            let e = nF();
            if (e) {
                let n = (0, t3.getCapturedScopesOnSpan)(this).scope || (0, x.getCurrentScope)();
                e.onChildSpanEnded(this, t, e => this._convertSpanToTransaction(e), n)
            }
            return
        }
        if (e && ek(e)) return void e.emit("afterSegmentSpanEnd", this);
        let n = (0, t3.getCapturedScopesOnSpan)(this).scope || (0, x.getCurrentScope)(),
            r = nF();
        if (r) r.onSegmentSpanEnded(e => this._convertSpanToTransaction(e), n);
        else {
            let e = this._convertSpanToTransaction();
            e && n.captureEvent(e)
        }
    }
    _convertSpanToTransaction(e = {}) {
        if (!nG((0, j.spanToStaticSpanJSON)(this))) return;
        this._name || (P.DEBUG_BUILD && E.debug.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>");
        let {
            scope: t,
            isolationScope: n
        } = (0, t3.getCapturedScopesOnSpan)(this), r = t?.getScopeData().sdkProcessingMetadata?.normalizedRequest;
        if (!0 !== this._sampled) return;
        e.onSpanCaptured?.(this);
        let a = [];
        for (let t of (0, j.getSpanDescendants)(this)) {
            var i;
            if (t === this || (i = t) instanceof nj && i.isStandaloneSpan() || e.isSpanAlreadyCaptured?.(t)) continue;
            let n = (0, j.spanToStaticSpanJSON)(t);
            nG(n) && (e.onSpanCaptured?.(t), a.push(n))
        }
        let o = this._attributes[ty.SENTRY_SEGMENT_NAME_SOURCE];
        delete this._attributes[F.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
        let l = !1;
        a.forEach(e => {
            delete e.data[F.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME], e.op?.startsWith("gen_ai.") && (l = !0)
        });
        let s = {
                contexts: {
                    trace: (0, j.spanToTransactionTraceContext)(this)
                },
                spans: a.length > 1e3 ? a.sort((e, t) => e.start_timestamp - t.start_timestamp).slice(0, 1e3) : a,
                start_timestamp: this._startTime,
                timestamp: this._endTime,
                transaction: this._name,
                type: "transaction",
                sdkProcessingMetadata: {
                    capturedSpanScope: t,
                    capturedSpanIsolationScope: n,
                    dynamicSamplingContext: (0, ep.getDynamicSamplingContextFromSpan)(this),
                    hasGenAiSpans: l
                },
                request: r,
                ...o && {
                    transaction_info: {
                        source: o
                    }
                }
            },
            u = nB(this._events);
        return u && Object.keys(u).length && (P.DEBUG_BUILD && E.debug.log("[Measurements] Adding measurements to transaction event", JSON.stringify(u, void 0, 2)), s.measurements = u), s
    }
}

function n$(e) {
    return e && "number" == typeof e || e instanceof Date || Array.isArray(e)
}

function nG(e) {
    return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id
}
var nH = e.i(597121),
    nq = e.i(377656);

function nW(e) {
    let t = function(e) {
            let t = {
                isStandalone: e.experimental?.standalone,
                ...e
            };
            if (e.op && (t.attributes = {
                    [F.SEMANTIC_ATTRIBUTE_SENTRY_OP]: e.op,
                    ...e.attributes
                }), e.startTime) {
                let n = {
                    ...t
                };
                return n.startTimestamp = (0, j.spanTimeInputToSeconds)(e.startTime), delete n.startTime, n
            }
            return t
        }(e),
        {
            forceTransaction: n,
            parentSpan: r,
            scope: a
        } = e;
    return (a ? e => (0, x.withScope)(a, e) : void 0 !== r ? e => nY(r, e) : e => e())(() => {
        var i, o;
        let l, s = (0, x.getCurrentScope)(),
            u = function(e, t) {
                if (t) return t;
                if (null === t) return;
                let n = (0, j.getActiveSpan)(e);
                if (!n) return;
                let r = (0, x.getClient)();
                return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan ? (0, j.getRootSpan)(n) : n
            }(a ?? s, r),
            c = (0, x.getClient)();
        return e.onlyIfParent && !u ? (i = s, o = c, o?.recordDroppedEvent("no_parent_span", "span"), l = new nU.SentryNonRecordingSpan({
            traceId: i.getPropagationContext().traceId
        }), (0, t3.setCapturedScopesOnSpan)(l, i, (0, x.getIsolationScope)()), l) : function({
            parentSpan: e,
            spanArguments: t,
            forceTransaction: n,
            scope: r
        }) {
            var a, i;
            let o, l, s = (0, x.getIsolationScope)(),
                u = {
                    scope: r,
                    parentSpan: e
                };
            (0, x.getClient)()?.emit("prepareSpanScope", u);
            let {
                scope: c,
                parentSpan: d
            } = u;
            if (!(0, nC.hasSpansEnabled)()) {
                let e = c.getPropagationContext(),
                    t = d ? d.spanContext().traceId : e.traceId,
                    r = new nU.SentryNonRecordingSpan({
                        traceId: t
                    });
                return d && !n && (0, j.addChildSpanToSpan)(d, r), (0, t3.setCapturedScopesOnSpan)(r, c, s), r
            }
            let f = (0, x.getClient)();
            if (a = f, i = t, o = a?.getOptions().ignoreSpans, a && ek(a) && o?.length && eD({
                    description: i.name || "",
                    op: i.attributes?.[F.SEMANTIC_ATTRIBUTE_SENTRY_OP] || i.op,
                    attributes: i.attributes
                }, o)) {
                nV(c) || f?.recordDroppedEvent("ignored", "span");
                let e = new nU.SentryNonRecordingSpan({
                    dropReason: "ignored",
                    traceId: d?.spanContext().traceId ?? c.getPropagationContext().traceId
                });
                return d && !n && (0, j.addChildSpanToSpan)(d, e), (0, t3.setCapturedScopesOnSpan)(e, c, s), e
            }
            if (d && !n) l = function(e, t, n, r) {
                let {
                    spanId: a,
                    traceId: i
                } = e.spanContext(), o = nV(t), l = !o && (0, j.spanIsSampled)(e), s = l ? new nj({
                    ...n,
                    parentSpanId: a,
                    traceId: i,
                    sampled: l
                }) : new nU.SentryNonRecordingSpan({
                    traceId: i
                });
                (0, j.addChildSpanToSpan)(e, s), (0, t3.setCapturedScopesOnSpan)(s, t, r);
                let u = (0, x.getClient)();
                return u && (ek(u) && (0, nU.spanIsNonRecordingSpan)(s) && ((0, nU.spanIsNonRecordingSpan)(e) && e.dropReason ? (s.dropReason = e.dropReason, u.recordDroppedEvent(e.dropReason, "span")) : o || (s.dropReason = "sample_rate", u.recordDroppedEvent("sample_rate", "span"))), u.emit("spanStart", s)), s
            }(d, c, t, s), (0, j.addChildSpanToSpan)(d, l);
            else if (d) {
                let e = (0, ep.getDynamicSamplingContextFromSpan)(d),
                    {
                        traceId: n,
                        spanId: r
                    } = d.spanContext(),
                    a = (0, j.spanIsSampled)(d);
                l = nQ({
                    traceId: n,
                    parentSpanId: r,
                    ...t
                }, c, s, a), (0, ep.freezeDscOnSpan)(l, e)
            } else {
                let {
                    traceId: e,
                    dsc: n,
                    parentSpanId: r,
                    sampled: a,
                    sampleRand: i
                } = c.getPropagationContext();
                if (l = nQ({
                        traceId: e,
                        parentSpanId: r,
                        ...t
                    }, c, s, a), n) {
                    let e = 0 === Object.keys(n).length && void 0 !== i ? {
                        sample_rand: i.toString()
                    } : n;
                    (0, ep.freezeDscOnSpan)(l, e)
                }
            }
            return ! function(e) {
                if (!P.DEBUG_BUILD) return;
                let {
                    description: t = "< unknown name >",
                    op: n = "< unknown op >",
                    parent_span_id: r
                } = (0, j.spanToStaticSpanJSON)(e), {
                    spanId: a
                } = e.spanContext(), i = (0, j.spanIsSampled)(e), o = (0, j.getRootSpan)(e), l = o === e, s = `[Tracing] Starting ${i?"sampled":"unsampled"} ${l?"root ":""}span`, u = [`op: ${n}`, `name: ${t}`, `ID: ${a}`];
                if (r && u.push(`parent ID: ${r}`), !l) {
                    let {
                        op: e,
                        description: t
                    } = (0, j.spanToStaticSpanJSON)(o);
                    u.push(`root ID: ${o.spanContext().spanId}`), e && u.push(`root op: ${e}`), t && u.push(`root description: ${t}`)
                }
                E.debug.log(`${s}
  ${u.join("\n  ")}`)
            }(l), l
        }({
            parentSpan: u,
            spanArguments: t,
            forceTransaction: n,
            scope: s
        })
    })
}

function nY(e, t) {
    let n = nJ();
    return n.withActiveSpan ? n.withActiveSpan(e, t) : (0, x.withScope)(n => ((0, nO._setSpanForScope)(n, e || void 0), t(n)))
}

function nV(e = (0, x.getCurrentScope)()) {
    let t = nJ();
    return t.isTracingSuppressed ? t.isTracingSuppressed(e) : !0 === e.getScopeData().sdkProcessingMetadata[nq.SUPPRESS_TRACING_KEY]
}

function nJ() {
    let e = (0, ec.getMainCarrier)();
    return (0, nL.getAsyncContextStrategy)(e)
}

function nQ(e, t, n, r) {
    let a = (0, x.getClient)(),
        i = a?.getOptions() || {},
        {
            name: o = ""
        } = e,
        l = {
            spanAttributes: {
                ...e.attributes
            },
            spanName: o,
            parentSampled: r
        };
    a?.emit("beforeSampling", l, {
        decision: !1
    });
    let s = l.parentSampled ?? r,
        u = l.spanAttributes,
        c = t.getPropagationContext(),
        d = nV(t),
        [f, p, m, h] = d ? [!1] : function(e, t, n) {
            if (!(0, nC.hasSpansEnabled)(e)) return [!1];
            let r = function(e, t) {
                let {
                    tracesSampler: n,
                    tracesSampleRate: r
                } = e;
                if ("function" == typeof n) {
                    let e = (0, $.safeCallback)(P.DEBUG_BUILD ? "The `tracesSampler` callback threw an error, falling back to the parent sampling decision or `tracesSampleRate`:" : "", () => [n({
                        ...t,
                        inheritOrSampleWith: e => "number" == typeof t.parentSampleRate ? t.parentSampleRate : "boolean" == typeof t.parentSampled ? Number(t.parentSampled) : e
                    }), !0], () => void 0);
                    if (e) return e
                }
                return void 0 !== t.parentSampled ? [t.parentSampled] : void 0 !== r ? [r, !0] : void 0
            }(e, t);
            if (!r) return [!1, void 0, void 0, "callback_error"];
            let [a, i] = r, o = (0, eR.parseSampleRate)(a);
            if (void 0 === o) return P.DEBUG_BUILD && E.debug.warn(`[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(a)} of type ${JSON.stringify(typeof a)}.`), [!1];
            if (!o) return P.DEBUG_BUILD && E.debug.log(`[Tracing] Discarding transaction because ${"function"==typeof e.tracesSampler?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), [!1, o, i];
            let l = n < o;
            return !l && P.DEBUG_BUILD && E.debug.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(a)})`), [l, o, i]
        }(i, {
            name: o,
            parentSampled: s,
            attributes: u,
            normalizedRequest: n.getScopeData().sdkProcessingMetadata.normalizedRequest,
            parentSampleRate: (0, eR.parseSampleRate)(c.dsc?.sample_rate)
        }, c.sampleRand),
        g = new nj({
            ...e,
            attributes: {
                [ty.SENTRY_SEGMENT_NAME_SOURCE]: "custom",
                [F.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]: void 0 !== p && m ? p : void 0,
                ...u
            },
            sampled: f
        });
    return f || !a || d || (P.DEBUG_BUILD && E.debug.log("[Tracing] Discarding root span because its trace was not chosen to be sampled."), a.recordDroppedEvent(h || "sample_rate", ek(a) ? "span" : "transaction")), (0, t3.setCapturedScopesOnSpan)(g, t, n), a && a.emit("spanStart", g), g
}

function nK(e) {
    return (0, nU.spanIsNonRecordingSpan)(e) && "ignored" === e.dropReason
}
let nX = new WeakSet;

function nZ(e = (0, x.getClient)()) {
    !(!e || nX.has(e)) && ek(e) && (nX.add(e), e.addIntegration(((e = {}) => {
        let t = e.flushOnSegmentEnd ?? !0;
        return {
            name: nR,
            setup(e) {
                if (!ek(e)) {
                    P.DEBUG_BUILD && E.debug.log(`[${nR}] \`traceLifecycle\` is "static", skipping setup.`);
                    return
                }
                let n = new nI(e);
                e.on("afterSpanEnd", t => {
                    (0, j.spanIsSampled)(t) && n.add(t4(t, e))
                }), e.on("flushTraceSpans", e => {
                    n.flush(e)
                }), t && e.on("afterSegmentSpanEnd", e => {
                    let t = e.spanContext().traceId;
                    eP(setTimeout(() => {
                        n.flush(t)
                    }, 500))
                })
            }
        }
    })()))
}

function n0(e) {
    return nZ(), nW(e)
}
let n1 = {
        idleTimeout: 1e3,
        finalTimeout: 3e4,
        childSpanTimeout: 15e3
    },
    n2 = "pageload",
    n3 = "navigation",
    n4 = "browser.unload_event",
    n5 = "browser.redirect",
    n8 = "browser.dom_content_loaded_event",
    n6 = "browser.load_event",
    n9 = "browser.connect",
    n7 = "browser.tls_ssl",
    re = "browser.cache",
    rt = "browser.dns",
    rn = "browser.request",
    rr = "browser.response",
    ra = "http.client",
    ri = "Pageload",
    ro = "Navigation",
    rl = "Main UI thread blocked",
    rs = "Largest contentful paint",
    ru = "Layout shift",
    rc = {
        [re]: "Cache lookup",
        [rt]: "DNS lookup",
        [n9]: "Connect",
        [n7]: "TLS handshake",
        [n5]: "Redirect",
        [rn]: "Request",
        [rr]: "Response",
        [n4]: "Unload event",
        [n8]: "DOMContentLoaded event",
        [n6]: "Load event"
    },
    rd = !1,
    rf = /Googlebot|Google-InspectionTool|Storebot-Google|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Facebot|facebookexternalhit|LinkedInBot|Twitterbot|Applebot/i;

function rp() {
    let e = tr.navigator;
    return !!e?.userAgent && rf.test(e.userAgent)
}
let rm = -1,
    rh = e => {
        addEventListener("pageshow", t => {
            t.persisted && (rm = t.timeStamp, e(t))
        }, !0)
    },
    rg = (e, t, n, r) => {
        let a, i;
        return o => {
            let l;
            t.value >= 0 && (o || r) && ((i = t.value - (a ?? 0)) || void 0 === a) && (a = t.value, t.delta = i, l = t.value, t.rating = l > n[1] ? "poor" : l > n[0] ? "needs-improvement" : "good", e(t))
        }
    },
    rv = e => {
        requestAnimationFrame(() => requestAnimationFrame(() => e()))
    },
    ry = () => {
        let e = performance.getEntriesByType("navigation")[0];
        if (e && e.responseStart > 0 && e.responseStart < performance.now()) return e
    },
    rb = () => ry()?.activationStart ?? 0,
    r_ = -1,
    rS = new Set,
    rE = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
    rw = e => {
        if ("hidden" === document.visibilityState) {
            if ("visibilitychange" === e.type)
                for (let e of rS) e();
            isFinite(r_) || (r_ = "visibilitychange" === e.type ? e.timeStamp : 0, removeEventListener("prerenderingchange", rw, !0))
        }
    },
    rT = (e = !1) => {
        if (e && (r_ = 1 / 0), r_ < 0) {
            let e = rb();
            r_ = (document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find(t => "hidden" === t.name && t.startTime >= e)?.startTime) ?? rE(), addEventListener("visibilitychange", rw, !0), addEventListener("prerenderingchange", rw, !0), rh(() => {
                setTimeout(() => {
                    r_ = rE()
                })
            })
        }
        return {
            get firstHiddenTime() {
                return r_
            },
            onHidden(e) {
                rS.add(e)
            }
        }
    },
    rk = (e, t = -1, n, r = 0, a, i, o) => {
        let l = ry(),
            s = l?.navigationId || 0,
            u = "navigate";
        return n ? u = n : rm >= 0 ? u = "back-forward-cache" : l && (document.prerendering || rb() > 0 ? u = "prerender" : document.wasDiscarded ? u = "restore" : l.type && (u = l.type.replace(/_/g, "-"))), {
            name: e,
            value: t,
            rating: "good",
            delta: 0,
            entries: [],
            id: `v6-${Date.now()}-${Math.floor(0x82f79cd8fff*Math.random())+1e12}`,
            navigationType: u,
            navigationId: r || s,
            navigationInteractionId: a,
            navigationURL: i || l?.name,
            navigationStartTime: o || 0
        }
    },
    rN = new WeakMap;

function rx(e, t) {
    let n = rN.get(t);
    return n || (n = new WeakMap, rN.set(t, n)), n.get(e) || n.set(e, new t), n.get(e)
}
class rP {
    t;
    i = 0;
    o = [];
    h(e) {
        if (e.hadRecentInput) return;
        let t = this.o[0],
            n = this.o.at(-1);
        this.i && t && n && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (this.i += e.value, this.o.push(e)) : (this.i = e.value, this.o = [e]), this.t?.(e)
    }
}
let rC = (e, t, n = {}) => {
        try {
            let r = e.filter(e => PerformanceObserver.supportedEntryTypes.includes(e));
            if (r.length > 0) {
                let e = new PerformanceObserver(e => {
                    queueMicrotask(() => {
                        let n = e.getEntries();
                        r.length > 1 && n.sort((e, t) => e.startTime + e.duration - (t.startTime + t.duration)), t(n)
                    })
                });
                for (let t of r) e.observe({
                    type: t,
                    buffered: !0,
                    ...n
                });
                return e
            }
        } catch {}
    },
    rO = e => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && e && e.reportSoftNavs,
    rI = (e, t) => {
        if (e.set(t.navigationId, t), e.size > 2) {
            let t = e.keys().next().value;
            void 0 !== t && e.delete(t)
        }
    },
    rR = e => {
        let t = !1;
        return () => {
            t || (e(), t = !0)
        }
    };
class rL {
    l
}
let rA = e => {
        document.prerendering ? addEventListener("prerenderingchange", e, !0) : e()
    },
    rD = [1800, 3e3],
    rM = (e, t = {}) => {
        let n = rO(t);
        rA(() => {
            let r = rx(t, rL),
                a = rT(),
                i, o = rk("FCP"),
                l = rC(["paint"], e => {
                    for (let t of e) "first-contentful-paint" === t.name && (l.disconnect(), t.startTime < a.firstHiddenTime && (o.value = Math.max(t.startTime - rb(), 0), o.entries.push(t), o.navigationId = t.navigationId || o.navigationId, i(!0)))
                });
            l && (i = rg(e, o, rD, t.reportAllChanges), rh(n => {
                i = rg(e, o = rk("FCP", -1, "back-forward-cache", o.navigationId, o.navigationInteractionId, o.navigationURL, rm), rD, t.reportAllChanges), rv(() => {
                    o.value = performance.now() - n.timeStamp, i(!0)
                })
            })), n && rC(["soft-navigation"], n => {
                n.forEach(n => {
                    r.l && n.navigationId && rI(r.l, n), (i = rg(e, o = rk("FCP", Math.max((n.presentationTime || n.paintTime || 0) - n.startTime, 0), "soft-navigation", n.navigationId, n.interactionId, n.name, n.startTime), rD, t.reportAllChanges))(!0)
                })
            }, t)
        })
    },
    rU = [.1, .25],
    rz = 0,
    rB = 1 / 0,
    rF = 0,
    rj = e => {
        for (let t of e) t.interactionId && (rB = Math.min(rB, t.interactionId), rz = (rF = Math.max(rF, t.interactionId)) ? (rF - rB) / 7 + 1 : 0)
    },
    r$ = () => i ? rz : performance.interactionCount ?? 0;
class rG {
    u = 0;
    v = [];
    m = new Map;
    p;
    T;
    _() {
        return r$() - this.u
    }
    M() {
        this.u = r$(), this.v.length = 0, this.m.clear()
    }
    L(e) {
        let t = this._(),
            n = Math.min(this.v.length - 1, Math.floor(t / 50));
        return t && -1 === n && ("soft-navigation" === e || "back-forward-cache" === e) ? {
            P: 8,
            id: -1,
            entries: []
        } : this.v[n]
    }
    h(e) {
        if (this.p?.(e), !e.interactionId) return;
        let t = this.v.at(-1),
            n = this.m.get(e.interactionId);
        if (n || this.v.length < 10 || e.duration > t.P) {
            if (n ? e.duration > n.P ? (n.entries = [e], n.P = e.duration) : e.duration === n.P && e.startTime === n.entries[0].startTime && n.entries.push(e) : (n = {
                    id: e.interactionId,
                    entries: [e],
                    P: e.duration
                }, this.m.set(n.id, n), this.v.push(n)), this.v.sort((e, t) => t.P - e.P), this.v.length > 10)
                for (let e of this.v.splice(10)) this.m.delete(e.id);
            this.T?.(n)
        }
    }
}
let rH = e => {
        let t = 1e3 * ("requestIdleCallback" in globalThis),
            n = globalThis.requestIdleCallback || setTimeout,
            r = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) e();
        else {
            let a = rR(e),
                i = -1,
                o = () => {
                    r(i), a()
                };
            addEventListener("visibilitychange", o, {
                once: !0,
                capture: !0
            }), i = n(() => {
                removeEventListener("visibilitychange", o, {
                    capture: !0
                }), a()
            }, {
                timeout: t
            })
        }
    },
    rq = [200, 500];
class rW {
    p;
    l;
    h(e) {
        this.p?.(e)
    }
}
let rY = [2500, 4e3],
    rV = [800, 1800],
    rJ = e => {
        document.prerendering ? rA(() => rJ(e)) : "complete" !== document.readyState ? addEventListener("load", () => rJ(e), !0) : setTimeout(e)
    },
    rQ = {},
    rK = {},
    rX = {},
    rZ = !1,
    r0 = !1;

function r1(e, t = !1) {
    return an("cls", e, r6, o, t)
}

function r2(e, t = !1) {
    return an("lcp", e, r9, l, t)
}

function r3(e) {
    return an("inp", e, at, u)
}

function r4(e, t) {
    return ar(e, t), rK[e] || (function(e) {
        let t = {
            type: e,
            buffered: !0
        };
        "event" === e && (t.durationThreshold = 0);
        try {
            PerformanceObserver.supportedEntryTypes.includes(e) && new PerformanceObserver(t => {
                Promise.resolve().then(() => {
                    r5(e, {
                        entries: t.getEntries()
                    })
                })
            }).observe(t)
        } catch {}
    }(e), rK[e] = !0), aa(e, t)
}

function r5(e, t) {
    let n = rQ[e];
    if (n?.length)
        for (let r of n) try {
            r(t)
        } catch (t) {
            n_ && E.debug.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${(0,q.getFunctionName)(r)}
Error:`, t)
        }
}

function r8(e) {
    return t => {
        (r0 || "back-forward-cache" !== t.navigationType) && e(t)
    }
}

function r6() {
    return ((e, t = {}) => {
        let n = rT();
        rM(rR(() => {
            let r, a = rk("CLS", 0),
                i = rx(t, rP),
                o = (n, o, l, s, u) => {
                    a = rk("CLS", 0, n, o, l, s, u), i.i = 0, r = rg(e, a, rU, t.reportAllChanges)
                },
                l = (e = !1) => {
                    i.i > a.value && (a.value = i.i, a.entries = i.o), r(e)
                },
                s = e => {
                    l(!0), o("soft-navigation", e.navigationId, e.interactionId, e.name, e.startTime)
                },
                u = e => {
                    for (let t of e) "soft-navigation" !== t.entryType ? i.h(t) : s(t);
                    l()
                },
                c = ["layout-shift"];
            rO(t) && c.push("soft-navigation");
            let d = rC(c, u);
            d && (r = rg(e, a, rU, t.reportAllChanges), n.onHidden(() => {
                u(d.takeRecords()), r(!0)
            }), rh(() => {
                o("back-forward-cache", a.navigationId, a.navigationInteractionId, a.navigationURL, rm), rv(r)
            }), setTimeout(r))
        }))
    })(r8(e => {
        r5("cls", {
            metric: e
        }), o = e
    }), {
        reportAllChanges: !rZ && !r0,
        reportSoftNavs: rZ
    })
}

function r9() {
    return ((e, t = {}) => {
        let n = !1,
            r = rO(t);
        rA(() => {
            let a, i = rT(),
                o = rk("LCP"),
                l = rx(t, rW),
                s = (r, l, s, u, c) => {
                    a = rg(e, o = rk("LCP", -1, r, l, s, u, c), rY, t.reportAllChanges), n = !1, "soft-navigation" === r && (i = rT(!0))
                },
                u = e => {
                    l.l && e.navigationId && rI(l.l, e), n || a(!0), s("soft-navigation", e.navigationId, e.interactionId, e.name, e.startTime);
                    let t = e.getLargestInteractionContentfulPaint?.();
                    t && c([t])
                },
                c = e => {
                    for (let n of (t.reportAllChanges || r || (e = e.slice(-1)), e)) {
                        if (!n) continue;
                        if ("soft-navigation" === n.entryType) {
                            u(n);
                            continue
                        }
                        let e = 0,
                            t = [],
                            r = n.startTime;
                        if ("largest-contentful-paint" === n.entryType) e = Math.max(n.startTime - rb(), 0), l.h(n), t = [n];
                        else if ("interaction-contentful-paint" === n.entryType) {
                            if (!o.navigationId || "interactionId" in n && n.interactionId != o.navigationInteractionId) continue;
                            e = Math.max((r = n.largestContentfulPaint?.renderTime || 0) - n.startTime, 0), n.largestContentfulPaint && (l.h(n.largestContentfulPaint), t = [n.largestContentfulPaint])
                        }
                        r < i.firstHiddenTime && (o.value = e, o.entries = t, a())
                    }
                },
                d = ["largest-contentful-paint"];
            r && d.push("interaction-contentful-paint", "soft-navigation");
            let f = rC(d, c);
            if (f) {
                a = rg(e, o, rY, t.reportAllChanges);
                let i = ["keydown", "click", "visibilitychange"],
                    l = e => {
                        if (e.isTrusted && !n) {
                            let e = o.id;
                            rH(() => {
                                if (!n) {
                                    if (!r)
                                        for (let e of (f.disconnect(), i)) removeEventListener(e, l, {
                                            capture: !0
                                        });
                                    e === o.id && (n = !0, a(!0))
                                }
                            })
                        }
                    };
                for (let e of i) addEventListener(e, l, {
                    capture: !0
                });
                rh(r => {
                    s("back-forward-cache", o.navigationId, o.navigationInteractionId, o.navigationURL, rm), a = rg(e, o, rY, t.reportAllChanges), rv(() => {
                        o.value = performance.now() - r.timeStamp, n = !0, a(!0)
                    })
                })
            }
        })
    })(r8(e => {
        r5("lcp", {
            metric: e
        }), l = e
    }), {
        reportAllChanges: !rZ && !r0,
        reportSoftNavs: rZ
    })
}

function r7() {
    return ((e, t = {}) => {
        let n = rO(t),
            r = rk("TTFB"),
            a = rg(e, r, rV, t.reportAllChanges);
        rJ(() => {
            let i = ry();
            if (i) {
                let o = i.responseStart;
                r.value = Math.max(o - rb(), 0), r.entries = [i], a(!0), rh(() => {
                    (a = rg(e, r = rk("TTFB", 0, "back-forward-cache", r.navigationId, r.navigationInteractionId, r.navigationURL, rm), rV, t.reportAllChanges))(!0)
                }), n && rC(["soft-navigation"], n => {
                    n.forEach(n => {
                        n.navigationId && ((r = rk("TTFB", 0, "soft-navigation", n.navigationId, n.interactionId, n.name, n.startTime)).entries = [n], (a = rg(e, r, rV, t.reportAllChanges))(!0))
                    })
                }, t)
            }
        })
    })(r8(e => {
        r5("ttfb", {
            metric: e
        }), s = e
    }))
}

function ae() {
    return rM(r8(e => {
        r5("fcp", {
            metric: e
        }), c = e
    }))
}

function at() {
    return ((e, t = {}) => {
        if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
        let n = rT();
        rA(() => {
            "interactionCount" in performance || i || (i = rC(["event"], rj, {
                durationThreshold: 0
            }));
            let r, a = rk("INP"),
                o = rx(t, rG),
                l = (n, i, l, s, u) => {
                    o.M(), r = rg(e, a = rk("INP", -1, n, i, l, s, u), rq, t.reportAllChanges)
                },
                s = () => {
                    let e = o.L(a.navigationType);
                    e && e.P !== a.value && (a.value = e.P, a.entries = e.entries, r())
                },
                u = e => {
                    s(), r(!0), l("soft-navigation", e.navigationId, e.interactionId, e.name, e.startTime)
                },
                c = (e, t = !1) => {
                    rH(() => {
                        for (let t of e) "soft-navigation" !== t.entryType ? o.h(t) : u(t);
                        s(), t && r(!0)
                    })
                },
                d = ["event", "first-input"];
            rO(t) && d.push("soft-navigation");
            let f = rC(d, c, {
                ...t,
                durationThreshold: t.durationThreshold ?? 40
            });
            r = rg(e, a, rq, t.reportAllChanges), f && (n.onHidden(() => {
                c(f.takeRecords(), !0)
            }), rh(() => {
                l("back-forward-cache", a.navigationId, a.navigationInteractionId, a.navigationURL, rm)
            }))
        })
    })(r8(e => {
        r5("inp", {
            metric: e
        }), u = e
    }), {
        reportSoftNavs: rZ
    })
}

function an(e, t, n, r, a = !1) {
    return ar(e, t), rK[e] || (rK[e] = !0, Promise.resolve().then(() => {
        rX[e] = n()
    })), r && t({
        metric: r
    }), aa(e, t, a)
}

function ar(e, t) {
    rQ[e] = rQ[e] || [], rQ[e].push(t)
}

function aa(e, t, n = !1) {
    return () => {
        n && rX[e]?.();
        let r = rQ[e];
        if (!r) return;
        let a = r.indexOf(t); - 1 !== a && r.splice(a, 1)
    }
}

function ai(e) {
    return "duration" in e
}

function ao(e) {
    return "number" == typeof e && isFinite(e)
}

function al(e, t, n, {
    ...r
}) {
    let a = (0, j.spanToStaticSpanJSON)(e).start_timestamp;
    return a && a > t && "function" == typeof e.updateStartTime && e.updateStartTime(t), nY(e, () => {
        let e = n0({
            startTime: t,
            ...r
        });
        return e && e.end(n), e
    })
}

function as() {
    return tr.addEventListener && tr.performance
}

function au(e) {
    return e / 1e3
}

function ac(e) {
    try {
        return PerformanceObserver.supportedEntryTypes.includes(e)
    } catch {
        return !1
    }
}

function ad(e) {
    return e ? (((0, G.browserPerformanceTimeOrigin)() || performance.timeOrigin) + e) / 1e3 : e
}

function af(e) {
    let t = {};
    if (void 0 != e.nextHopProtocol) {
        let {
            name: n,
            version: r
        } = function(e) {
            let t = "unknown",
                n = "unknown",
                r = "";
            for (let a of e) {
                if ("/" === a) {
                    [t, n] = e.split("/");
                    break
                }
                if (!isNaN(Number(a))) {
                    t = "h" === r ? "http" : r, n = e.split(r)[1];
                    break
                }
                r += a
            }
            return r === e && (t = r), {
                name: t,
                version: n
            }
        }(e.nextHopProtocol);
        t["network.protocol.version"] = r, t["network.protocol.name"] = n
    }
    return (0, G.browserPerformanceTimeOrigin)() || as()?.timeOrigin ? Object.fromEntries(Object.entries({
        ...t,
        "http.request.redirect_start": ad(e.redirectStart),
        "http.request.redirect_end": ad(e.redirectEnd),
        "http.request.worker_start": ad(e.workerStart),
        "http.request.fetch_start": ad(e.fetchStart),
        "http.request.domain_lookup_start": ad(e.domainLookupStart),
        "http.request.domain_lookup_end": ad(e.domainLookupEnd),
        "http.request.connect_start": ad(e.connectStart),
        "http.request.secure_connection_start": ad(e.secureConnectionStart),
        "http.request.connection_end": ad(e.connectEnd),
        "http.request.request_start": ad(e.requestStart),
        "http.request.response_start": ad(e.responseStart),
        "http.request.response_end": ad(e.responseEnd),
        "http.request.time_to_first_byte": null != e.responseStart ? e.responseStart / 1e3 : void 0
    }).filter(([, e]) => null != e)) : t
}
let ap = 0,
    am = {
        secureConnection: n7,
        fetch: re,
        domainLookup: rt,
        unloadEvent: n4,
        redirect: n5,
        connect: n9,
        domContentLoadedEvent: n8,
        loadEvent: n6
    };

function ah(e, t, n, r, a) {
    var i;
    let o = t["secureConnection" === (i = n) ? "connectEnd" : "fetch" === i ? "domainLookupStart" : `${i}End`],
        l = t[`${n}Start`];
    if (!l || !o) return;
    let s = am[n];
    al(e, r + au(l), r + au(o), {
        name: a ? rc[s] : t.name,
        attributes: {
            [ty.SENTRY_OP]: s,
            [F.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics",
            [ty.URL_FULL]: tk(t.name),
            ..."redirect" === n && null != t.redirectCount ? {
                "http.redirect_count": t.redirectCount
            } : {}
        }
    })
}
let ag = [],
    av = new Map,
    ay = "<unknown>",
    ab = new Map,
    a_ = {
        click: "click",
        pointerdown: "click",
        pointerup: "click",
        mousedown: "click",
        mouseup: "click",
        touchstart: "click",
        touchend: "click",
        mouseover: "hover",
        mouseout: "hover",
        mouseenter: "hover",
        mouseleave: "hover",
        pointerover: "hover",
        pointerout: "hover",
        pointerenter: "hover",
        pointerleave: "hover",
        dragstart: "drag",
        dragend: "drag",
        drag: "drag",
        dragenter: "drag",
        dragleave: "drag",
        dragover: "drag",
        drop: "drag",
        keydown: "press",
        keyup: "press",
        keypress: "press",
        input: "press"
    };
class aS {
    constructor(e) {
        this._maxSize = e, this._cache = new Map
    }
    get size() {
        return this._cache.size
    }
    get(e) {
        let t = this._cache.get(e);
        if (void 0 !== t) return this._cache.delete(e), this._cache.set(e, t), t
    }
    set(e, t) {
        if (this._cache.size >= this._maxSize) {
            let e = this._cache.keys().next().value;
            this._cache.delete(e)
        }
        this._cache.set(e, t)
    }
    remove(e) {
        let t = this._cache.get(e);
        return t && this._cache.delete(e), t
    }
    clear() {
        this._cache.clear()
    }
    keys() {
        return Array.from(this._cache.keys())
    }
    values() {
        let e = [];
        return this._cache.forEach(t => e.push(t)), e
    }
}
let aE = new aS(5),
    aw = new aS(5),
    aT = !1;

function ak(e, t) {
    return 5 >= Math.abs(e - t)
}

function aN() {
    try {
        return PerformanceObserver.supportedEntryTypes.includes("soft-navigation") && "function" == typeof tr.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint
    } catch {
        return !1
    }
}

function ax(e) {
    return null != e && e > 0 && e <= 6e4
}
let aP = {};

function aC() {
    m = void 0, h = void 0, g = void 0, aP = {}
}

function aO(e) {
    let t, n, {
            name: r,
            op: a,
            origin: i,
            metricName: o,
            value: l,
            attributes: s,
            parentSpan: u,
            startTime: c,
            endTime: d,
            standalone: f,
            softNavigationId: p,
            navigationType: m
        } = e,
        h = u && (0, j.getRootSpan)(u),
        g = h ? (0, j.spanToJSON)(h).name : (0, x.getCurrentScope)().getScopeData().transactionName,
        v = {
            [F.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: i,
            [F.SEMANTIC_ATTRIBUTE_SENTRY_OP]: a,
            [F.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: 0,
            [`browser.web_vital.${o}.value`]: l,
            [ty.SENTRY_TRANSACTION]: g,
            [ty.SENTRY_SEGMENT_NAME]: g,
            [ty.USER_AGENT_ORIGINAL]: tr.navigator?.userAgent,
            ...s
        };
    u && "pageload" === (0, j.spanToJSON)(u).attributes[F.SEMANTIC_ATTRIBUTE_SENTRY_OP] && (v["sentry.pageload.span_id"] = u.spanContext().spanId), null != p && (v[ty.BROWSER_NAVIGATION_ID] = p), m && (v[ty.BROWSER_NAVIGATION_TYPE] = m), f && Object.assign(v, (t = (0, x.getClient)()?.getIntegrationByName("Replay"), (n = t?.getReplayId(!0)) ? {
        [ty.SENTRY_REPLAY_ID]: n,
        "sentry._internal.replay_is_buffering": "buffer" === t.getRecordingMode() || void 0
    } : {}));
    let y = n0({
        name: r,
        attributes: v,
        startTime: c,
        parentSpan: u,
        experimental: f ? {
            standalone: !0
        } : void 0
    });
    y && y.end(d ?? c)
}

function aI(e, t) {
    let n, r = !1;

    function a() {
        !r && n && t(n), r = !0
    }
    tQ("visibilitychange", e => {
        tr.document?.visibilityState === "hidden" && (() => {
            a()
        })()
    }, {
        capture: !0
    });
    let i = e.on("beforeStartNavigationSpan", (e, t) => {
            t?.isRedirect || (a(), i(), o())
        }),
        o = e.on("afterStartPageLoadSpan", e => {
            n = e, o()
        })
}
let aR = {
        click: "ui.interaction.click",
        hover: "ui.interaction.hover",
        drag: "ui.interaction.drag",
        press: "ui.interaction.press"
    },
    aL = {
        click: "Click",
        hover: "Hover",
        drag: "Drag",
        press: "Key press"
    };

function aA(e, t, n) {
    let r, a;
    e.on("afterStartPageLoadSpan", e => {
        r = e
    }), e.on("spanStart", e => {
        let t = (0, j.spanToJSON)(e).attributes;
        t?.[F.SEMANTIC_ATTRIBUTE_SENTRY_OP] === n3 && "back-forward-cache" === t[ty.BROWSER_NAVIGATION_TYPE] && (a = e)
    }), t(({
        metric: e
    }) => {
        let t = function(e) {
            if ("soft-navigation" !== e.navigationType) return;
            let t = aw.get(e.navigationId);
            return t || (null != e.navigationInteractionId ? aE.get(e.navigationInteractionId) : void 0)
        }(e);
        "soft-navigation" === e.navigationType ? t ? n(e, t, e.navigationId) : n_ && E.debug.log(`[SoftNav] Dropping ${e.name} for uncorrelated soft navigation ${e.navigationId}`) : "back-forward-cache" === e.navigationType ? n(e, a, void 0) : n(e, r, void 0)
    })
}

function aD(e, t, n, r, a, i) {
    if (!ax(e)) return;
    n_ && E.debug.log(`Sending LCP span (${e})`);
    let o = (0, G.browserPerformanceTimeOrigin)() || 0,
        l = au(o + (i || 0)),
        s = t ? au(o + t.startTime) : l + au(e),
        u = t ? tG(t.element) : void 0,
        c = t?.element ? tH(t.element) : null,
        d = (0, x.getClient)(),
        f = d && ek(d) ? c || rs : u ?? rs,
        p = {};
    u && (p["browser.web_vital.lcp.element"] = u), c && (p[ty.UI_COMPONENT_NAME] = c), t?.id && (p["browser.web_vital.lcp.id"] = t.id), t?.url && (p["browser.web_vital.lcp.url"] = t.url), t?.loadTime != null && (p["browser.web_vital.lcp.load_time"] = t.loadTime), t?.renderTime != null && (p["browser.web_vital.lcp.render_time"] = t.renderTime), t?.size != null && (p["browser.web_vital.lcp.size"] = t.size), aO({
        name: f,
        op: "ui.webvital.lcp",
        origin: "auto.http.browser.lcp",
        metricName: "lcp",
        value: e,
        attributes: p,
        parentSpan: n,
        startTime: l,
        endTime: s,
        softNavigationId: r,
        navigationType: a
    })
}

function aM(e, t, n, r, a, i) {
    n_ && E.debug.log(`Sending CLS span (${e})`);
    let o = (0, G.browserPerformanceTimeOrigin)(),
        l = t?.startTime ?? i ?? 0,
        s = o ? au(o + l) : (0, G.timestampInSeconds)(),
        u = t?.sources[0]?.node,
        c = t ? tG(u) : void 0,
        d = u ? tH(u) : null,
        f = (0, x.getClient)(),
        p = f && ek(f) ? d || ru : c ?? ru,
        m = {};
    d && (m[ty.UI_COMPONENT_NAME] = d), t?.sources && t.sources.forEach((e, t) => {
        m[`browser.web_vital.cls.source.${t+1}`] = tG(e.node)
    }), aO({
        name: p,
        op: "ui.webvital.cls",
        origin: "auto.http.browser.cls",
        metricName: "cls",
        value: e,
        attributes: m,
        parentSpan: n,
        startTime: s,
        softNavigationId: r,
        navigationType: a
    })
}

function aU(e) {
    return null != e.value && 60 >= au(e.value)
}

function az(e) {
    return e.entries.find(t => t.duration === e.value && a_[t.name])
}

function aB(e, t, n = !1, r, a, i) {
    var o;
    n_ && E.debug.log(`Sending INP span (${e})`);
    let l = au((0, G.browserPerformanceTimeOrigin)() + (t?.startTime ?? i?.navigationStartTime ?? 0)),
        s = au(e),
        u = t && a_[t.name],
        c = u || "click",
        d = t && (null != (o = t.interactionId) ? av.get(o) : void 0),
        f = (0, j.getActiveSpan)(),
        p = f ? (0, j.getRootSpan)(f) : void 0,
        m = r || d?.span || p,
        h = d?.elementName || (t ? tG(t.target) : void 0),
        g = t?.target ? tH(t.target) : null,
        v = (0, x.getClient)(),
        y = !!v && ek(v),
        b = aL[c],
        _ = y ? g || b : h ?? "Interaction to next paint",
        S = {
            [F.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: t?.duration ?? e
        };
    h && h !== ay && (S[ty.BROWSER_WEB_VITAL_INP_TARGET] = h), u && (S[ty.BROWSER_WEB_VITAL_INP_INTERACTION_TYPE] = u), g && (S[ty.UI_COMPONENT_NAME] = g), aO({
        name: _,
        op: aR[c],
        origin: "auto.http.browser.inp",
        metricName: "inp",
        value: e,
        attributes: S,
        startTime: l,
        endTime: l + s,
        navigationType: i?.navigationType,
        parentSpan: m,
        standalone: n,
        softNavigationId: a
    })
}
let aF = "WebVitals",
    aj = "sentry_previous_trace";

function a$(e) {
    return 1 === e.traceFlags
}

function aG(e = {}) {
    let t = e.client || (0, x.getClient)();
    if (!(0, N.isEnabled)() || !t) return {};
    let n = (0, ec.getMainCarrier)(),
        r = (0, nL.getAsyncContextStrategy)(n);
    if (r.getTraceData) return r.getTraceData(e);
    let a = e.scope || (0, x.getCurrentScope)(),
        i = e.span || (0, j.getActiveSpan)(),
        o = (0, nU.spanIsNonRecordingSpan)(i) && !(0, nC.hasSpansEnabled)(t.getOptions());
    if (!i && (0, x.hasExternalPropagationContext)()) return {};
    let l = i && !o ? (0, j.spanToTraceHeader)(i) : function(e) {
            let {
                traceId: t,
                sampled: n,
                propagationSpanId: r
            } = e.getPropagationContext();
            return (0, nM.generateSentryTraceHeader)(t, r, n)
        }(a),
        s = i ? (0, ep.getDynamicSamplingContextFromSpan)(i) : (0, ep.getDynamicSamplingContextFromScope)(t, a),
        u = (0, nA.dynamicSamplingContextToSentryBaggageHeader)(s);
    if (!nM.TRACEPARENT_REGEXP.test(l)) return E.debug.warn("Invalid sentry-trace data. Cannot generate trace data"), {};
    let c = {
        "sentry-trace": l,
        baggage: u
    };
    return e.propagateTraceparent && (c.traceparent = i && !o ? (0, j.spanToTraceparentHeader)(i) : function(e) {
        let {
            traceId: t,
            sampled: n,
            propagationSpanId: r
        } = e.getPropagationContext();
        return (0, nM.generateTraceparentHeader)(t, r, n)
    }(a)), c
}

function aH(e) {
    return "string" == typeof e && e.split(",").some(e => e.trim().startsWith(nA.SENTRY_BAGGAGE_KEY_PREFIX))
}

function aq(e, t, n, r, a, i) {
    let o = {
        [ty.URL_FULL]: tk(tL(e), a),
        type: "fetch",
        [ty.HTTP_REQUEST_METHOD]: n,
        [F.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: r,
        [ty.SENTRY_OP]: ra,
        [ty.URL_DOMAIN]: i
    };
    return t && (tx(t) || (o[ty.URL_FULL] = tk(tL(t.href), a), o[ty.SERVER_ADDRESS] = t.hostname, o[ty.SERVER_PORT] = t.port ? Number(t.port) : void 0), o[ty.URL_QUERY] = tN(tC(t.search), a), o[ty.URL_FRAGMENT] = tO(t.hash)), o
}
let aW = new WeakMap;

function aY(e, t, n = !1) {
    let r = e.toLowerCase();
    for (let a of t)
        if ((0, ed.isString)(a)) {
            let e = a.toLowerCase();
            if (n ? r === e : r.includes(e)) return !0
        } else if ((0, ed.isRegExp)(a) && (function(e) {
            let t = `${e.flags.replace(/[gy]/g,"")}${e.ignoreCase?"":"i"}`;
            if (t === e.flags) return e;
            let n = aW.get(e);
            if (n) return n;
            let r = new RegExp(e.source, t);
            return aW.set(e, r), r
        })(a).test(e)) return !0;
    return !1
}

function aV(e) {
    try {
        return new URL(e, ti.location.origin).href
    } catch {
        return
    }
}

function aJ(e) {
    try {
        return new Headers(e)
    } catch {
        return
    }
}
let aQ = {
    traceFetch: !0,
    traceXHR: !0,
    enableHTTPTimings: !0
};

function aK(e, t) {
    let n = (0, j.spanToJSON)(e).attributes[ty.URL_FULL];
    if (!n || "string" != typeof n) return;
    let r = () => void setTimeout(a);
    if (ek(t)) {
        let t = e.end.bind(e);
        e.end = e => {
            let n = e ?? (0, G.timestampInSeconds)(),
                i = !1,
                o = () => {
                    i || (i = !0, setTimeout(a), t(n), clearTimeout(l))
                };
            r = o;
            let l = setTimeout(o, 300)
        }
    }
    let a = r4("resource", ({
        entries: t
    }) => {
        t.forEach(t => {
            "resource" === t.entryType && "initiatorType" in t && "string" == typeof t.nextHopProtocol && ("fetch" === t.initiatorType || "xmlhttprequest" === t.initiatorType) && t.name.endsWith(n) && (e.setAttributes(af(t)), r())
        })
    })
}
let aX = {
    ...n1,
    instrumentNavigation: !0,
    instrumentBfcacheRestore: !0,
    instrumentPageLoad: !0,
    markBackgroundSpan: !0,
    enableLongTask: !0,
    enableLongAnimationFrame: !0,
    enableInp: !0,
    ignoreResourceSpans: [],
    detectRedirects: !0,
    linkPreviousTrace: "in-memory",
    consistentTraceSampling: !1,
    enableReportPageLoaded: !1,
    ...aQ
};

function aZ(e, t, n) {
    let r = t.name === ri;
    (0, x.getCurrentScope)().setTransactionName(r ? ti.location?.pathname : t.name);
    let a = (0, G.browserPerformanceTimeOrigin)(),
        i = {
            ...t,
            startTime: t.startTime ?? (a ? a / 1e3 : void 0)
        };
    e.emit("startPageLoadSpan", i, n);
    let o = e[a3];
    return o && e.emit("afterStartPageLoadSpan", o), o
}

function a0(e, t, n) {
    let {
        url: r,
        isRedirect: a
    } = n || {};
    e.emit("beforeStartNavigationSpan", t, {
        isRedirect: a,
        url: r
    }), e.emit("startNavigationSpan", t, {
        isRedirect: a,
        url: r
    });
    let i = (0, x.getCurrentScope)(),
        o = t.name === ro;
    return i.setTransactionName(o ? r && tP(r)?.pathname || ti.location?.pathname : t.name), r && !a && i.setSDKProcessingMetadata({
        normalizedRequest: {
            ...tc(),
            url: r
        }
    }), e[a3]
}

function a1(e) {
    let t = ti.document,
        n = t?.querySelector(`meta[name=${e}]`);
    return n?.getAttribute("content") || void 0
}

function a2(e) {
    let t = ti.performance?.getEntriesByType?.("navigation")[0],
        n = t?.serverTiming?.find(t => t.name === e);
    return n?.description
}
let a3 = "_sentry_idleSpan";

function a4(e, t) {
    (0, z.addNonEnumerableProperty)(e, a3, t)
}

function a5(e) {
    try {
        return new URL(e, tr.location.origin).toString()
    } catch {
        return e
    }
}
let a8 = w.GLOBAL_OBJ,
    a6 = null,
    a9 = new Map,
    a7 = new Map;

function ie(e) {
    if (void 0 === e) return 2;
    if (!e.startsWith(":")) return 0;
    let t = e.substring(1);
    return t.endsWith("*?") ? 4 : t.endsWith("*") ? 3 : 1
}

function it(e, t) {
    let n = e.split("/").filter(Boolean),
        r = t.split("/").filter(Boolean),
        a = Math.min(n.length, r.length) + 1;
    for (let e = 0; e < a; e++) {
        let t = ie(n[e]) - ie(r[e]);
        if (0 !== t) return t
    }
    return 0
}

function ir(e) {
    if (a9.has(e)) return a9.get(e) ?? null;
    try {
        let t = new RegExp(e);
        return a9.set(e, t), t
    } catch (t) {
        return nP && E.debug.warn("Could not compile regex", {
            regexString: e,
            error: t
        }), null
    }
}

function ia() {
    if (!a8?._sentryRouteManifest || "string" != typeof a8._sentryRouteManifest) return null;
    let e = a8._sentryRouteManifest;
    if (a6 && b === e) return a6;
    a9.clear(), a7.clear();
    let t = {
        staticRoutes: [],
        dynamicRoutes: [],
        isrRoutes: []
    };
    try {
        if (t = JSON.parse(e), !Array.isArray(t.staticRoutes) || !Array.isArray(t.dynamicRoutes)) return null;
        return a6 = t, b = e, t
    } catch {
        return nP && E.debug.warn("Could not extract route manifest"), null
    }
}
let ii = e => {
    let t = ia();
    if (!t) return;
    let n = e.length > 1 && e.endsWith("/") ? e.slice(0, -1) : e;
    if (a7.has(n)) return a7.get(n);
    let {
        staticRoutes: r,
        dynamicRoutes: a
    } = t;
    if (!Array.isArray(r) || !Array.isArray(a)) return;
    let i = (function(e, t, n) {
        let r = [];
        if (t.some(t => t.path === e)) return [e];
        for (let t of n)
            if (t.regex) {
                let n = ir(t.regex);
                n?.test(e) && r.push(t.path)
            } if (!e.startsWith("/:")) {
            for (let t of n)
                if (t.hasOptionalPrefix && t.regex) {
                    let n = "/" === e ? "/SENTRY_OPTIONAL_PREFIX" : `/SENTRY_OPTIONAL_PREFIX${e}`,
                        a = ir(t.regex);
                    a?.test(n) && r.push(t.path)
                }
        }
        return r
    })(n, r, a).sort(it)[0];
    return a7.set(n, i), i
};

function io(e) {
    return e.length > 1 && e.endsWith("/") ? e.slice(0, -1) : e
}

function il(e, t, n) {
    e.setAttributes({
        [ty.URL_PATH]: t,
        [ty.URL_FULL]: tk(a5(n))
    })
}
let is = "router-patch",
    iu = {
        current: void 0
    },
    ic = w.GLOBAL_OBJ,
    id = w.GLOBAL_OBJ,
    ip = new WeakSet;

function im(e, t, n) {
    ip.has(t) || (ip.add(t), ["back", "forward", "push", "replace"].forEach(r => {
        t?.[r] && (t[r] = new Proxy(t[r], {
            apply(t, a, i) {
                if ("router-patch" !== is) return t.apply(a, i);
                if ("back" === r || "forward" === r) {
                    var o;
                    return o = `router.${r}`, clearTimeout(y), v = {
                        navigationType: o,
                        startTime: (0, G.timestampInSeconds)()
                    }, y = setTimeout(() => {
                        v = void 0
                    }, 1e3), t.apply(a, i)
                }
                let l = i[0],
                    s = S.default.env._sentryBasePath ?? id._sentryBasePath,
                    u = s && "string" == typeof l && l.startsWith("/") && !l.startsWith(s) ? `${s}${l}` : l,
                    c = io(function(e) {
                        try {
                            return new URL(e, "http://example.com/").pathname
                        } catch {
                            return "/"
                        }
                    }(u)),
                    d = ii(c);
                return n.current = a0(e, {
                    name: d ?? (ek(e) ? ro : c),
                    attributes: {
                        [ty.SENTRY_OP]: n3,
                        [F.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.navigation.nextjs.app_router_instrumentation",
                        [ty.SENTRY_SEGMENT_NAME_SOURCE]: d ? "route" : "url",
                        "navigation.type": `router.${r}`,
                        ...d && {
                            [ty.URL_TEMPLATE]: d
                        }
                    }
                }, {
                    url: a5(u)
                }), t.apply(a, i)
            }
        }))
    }))
}
let ih = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;

function ig(...e) {
    let t = "",
        n = !1;
    for (let r = e.length - 1; r >= -1 && !n; r--) {
        let a = r >= 0 ? e[r] : "/";
        a && (t = `${a}/${t}`, n = "/" === a.charAt(0))
    }
    return t = (function(e, t) {
        let n = 0;
        for (let t = e.length - 1; t >= 0; t--) {
            let r = e[t];
            "." === r ? e.splice(t, 1) : ".." === r ? (e.splice(t, 1), n++) : n && (e.splice(t, 1), n--)
        }
        if (t)
            for (; n--;) e.unshift("..");
        return e
    })(t.split("/").filter(e => !!e), !n).join("/"), (n ? "/" : "") + t || "."
}

function iv(e) {
    let t = 0;
    for (; t < e.length && "" === e[t]; t++);
    let n = e.length - 1;
    for (; n >= 0 && "" === e[n]; n--);
    return t > n ? [] : e.slice(t, n - t + 1)
}
let iy = /\/_next\/static\/chunks\/(main-|main-app-|polyfills-|webpack-|framework-|framework\.)[0-9a-f]+\.js(:\d+)*$/,
    ib = new aS(100),
    i_ = w.GLOBAL_OBJ,
    iS = !1,
    iE = w.GLOBAL_OBJ;
var iw = e.i(5053);
let iT = "window" in w.GLOBAL_OBJ && w.GLOBAL_OBJ.window === w.GLOBAL_OBJ && "u" < typeof importScripts,
    ik = String(0),
    iN = iT ? "main" : "worker",
    ix = !1;

function iP(e) {
    e.setAttribute("thread.id", ik), e.setAttribute("thread.name", iN)
}
class iC {
    constructor() {
        this._client = void 0, this._profiler = void 0, this._chunkTimer = void 0, this._profilerId = void 0, this._isRunning = !1, this._sessionSampled = !1, this._lifecycleMode = void 0, this._activeRootSpanIds = new Set, this._rootSpanTimeouts = new Map
    }
    initialize(e) {
        let t = e.getOptions().profileLifecycle,
            n = function(e) {
                if (ix) return tq && E.debug.log("[Profiling] Profiling has been disabled for the duration of the current user session as the JS Profiler could not be started."), !1;
                if ("trace" !== e.profileLifecycle && "manual" !== e.profileLifecycle) return tq && E.debug.warn("[Profiling] Session not sampled. Invalid `profileLifecycle` option."), !1;
                let t = e.profileSessionSampleRate;
                return ("number" != typeof t && "boolean" != typeof t || "number" == typeof t && isNaN(t) ? (tq && E.debug.warn(`[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`), 1) : !0 !== t && !1 !== t && (t < 0 || t > 1) && (tq && E.debug.warn(`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${t}.`), 1)) ? (tq && E.debug.warn("[Profiling] Discarding profile because of invalid profileSessionSampleRate."), !1) : t ? Math.random() <= t : (tq && E.debug.log("[Profiling] Discarding profile because profileSessionSampleRate is not defined or set to 0"), !1)
            }(e.getOptions());
        tq && E.debug.log(`[Profiling] Initializing profiler (lifecycle='${t}').`), !n && tq && E.debug.log("[Profiling] Session not sampled. Skipping lifecycle profiler initialization."), this._profilerId = (0, L.uuid4)(), this._client = e, this._sessionSampled = n, this._lifecycleMode = t, "trace" === t && this._setupTraceLifecycleListeners(e), e.on("spanStart", e => {
            this._isRunning && iP(e)
        })
    }
    start() {
        if ("trace" === this._lifecycleMode) {
            tq && E.debug.warn('[Profiling] `profileLifecycle` is set to "trace". Calls to `uiProfiler.start()` are ignored in trace mode.');
            return
        }
        if (this._isRunning) {
            tq && E.debug.warn("[Profiling] Profile session is already running, `uiProfiler.start()` is a no-op.");
            return
        }
        if (!this._sessionSampled) {
            tq && E.debug.warn("[Profiling] Session is not sampled, `uiProfiler.start()` is a no-op.");
            return
        }
        this._beginProfiling()
    }
    stop() {
        if ("trace" === this._lifecycleMode) {
            tq && E.debug.warn('[Profiling] `profileLifecycle` is set to "trace". Calls to `uiProfiler.stop()` are ignored in trace mode.');
            return
        }
        if (!this._isRunning) {
            tq && E.debug.warn("[Profiling] Profiler is not running, `uiProfiler.stop()` is a no-op.");
            return
        }
        this._endProfiling()
    }
    notifyRootSpanActive(e) {
        if ("trace" !== this._lifecycleMode || !this._sessionSampled) return;
        let t = e.spanContext().spanId;
        if (!t || this._activeRootSpanIds.has(t)) return;
        this._registerTraceRootSpan(t);
        let n = this._activeRootSpanIds.size;
        1 === n && (tq && E.debug.log("[Profiling] Detected already active root span during setup. Active root spans now:", n), this._beginProfiling()), this._isRunning && iP(e)
    }
    _beginProfiling() {
        if (!this._isRunning) {
            if (this._isRunning = !0, tq && E.debug.log("[Profiling] Started profiling with profiler ID:", this._profilerId), (0, x.getGlobalScope)().setContext("profile", {
                    profiler_id: this._profilerId
                }), this._startProfilerInstance(), !this._profiler) {
                tq && E.debug.log("[Profiling] Failed to start JS Profiler; stopping."), this._resetProfilerInfo();
                return
            }
            this._startPeriodicChunking()
        }
    }
    _endProfiling() {
        this._isRunning && (this._isRunning = !1, this._chunkTimer && (clearTimeout(this._chunkTimer), this._chunkTimer = void 0), this._clearAllRootSpanTimeouts(), this._collectCurrentChunk().catch(e => {
            tq && E.debug.error("[Profiling] Failed to collect current profile chunk on `stop()`:", e)
        }), "manual" === this._lifecycleMode && (0, x.getGlobalScope)().setContext("profile", {}))
    }
    _setupTraceLifecycleListeners(e) {
        e.on("spanStart", e => {
            if (!this._sessionSampled) {
                tq && E.debug.log("[Profiling] Span not profiled because of negative sampling decision for user session.");
                return
            }
            if (e !== (0, j.getRootSpan)(e)) return;
            if (!e.isRecording()) {
                tq && E.debug.log("[Profiling] Discarding profile because root span was not sampled.");
                return
            }
            let t = e.spanContext().spanId;
            if (!t || this._activeRootSpanIds.has(t)) return;
            this._registerTraceRootSpan(t);
            let n = this._activeRootSpanIds.size;
            1 === n && (tq && E.debug.log(`[Profiling] Root span ${t} started. Profiling active while there are active root spans (count=${n}).`), this._beginProfiling())
        }), e.on("spanEnd", e => {
            if (!this._sessionSampled) return;
            let t = e.spanContext().spanId;
            if (!t || !this._activeRootSpanIds.has(t)) return;
            this._activeRootSpanIds.delete(t);
            let n = this._activeRootSpanIds.size;
            tq && E.debug.log(`[Profiling] Root span with ID ${t} ended. Will continue profiling for as long as there are active root spans (currently: ${n}).`), 0 === n && (this._collectCurrentChunk().catch(e => {
                tq && E.debug.error("[Profiling] Failed to collect current profile chunk on last `spanEnd`:", e)
            }), this._endProfiling())
        })
    }
    _resetProfilerInfo() {
        this._isRunning = !1, (0, x.getGlobalScope)().setContext("profile", {})
    }
    _clearAllRootSpanTimeouts() {
        this._rootSpanTimeouts.forEach(e => clearTimeout(e)), this._rootSpanTimeouts.clear()
    }
    _registerTraceRootSpan(e) {
        this._activeRootSpanIds.add(e);
        let t = setTimeout(() => this._onRootSpanTimeout(e), 3e5);
        this._rootSpanTimeouts.set(e, t)
    }
    _startProfilerInstance() {
        if (this._profiler?.stopped === !1) return;
        let e = function() {
            let e = ti.Profiler;
            if ("function" != typeof e) {
                tq && E.debug.log("[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object.");
                return
            }
            let t = Math.floor(3e3);
            try {
                return new e({
                    sampleInterval: 10,
                    maxBufferSize: t
                })
            } catch {
                tq && (E.debug.log("[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header."), E.debug.log("[Profiling] Disabling profiling for current user session.")), ix = !0
            }
        }();
        if (!e) {
            tq && E.debug.log("[Profiling] Failed to start JS Profiler.");
            return
        }
        this._profiler = e
    }
    _startPeriodicChunking() {
        this._isRunning && (this._chunkTimer = setTimeout(() => {
            if (this._collectCurrentChunk().catch(e => {
                    tq && E.debug.error("[Profiling] Failed to collect current profile chunk during periodic chunking:", e)
                }), this._isRunning) {
                if (this._startProfilerInstance(), !this._profiler) return void this._resetProfilerInfo();
                this._startPeriodicChunking()
            }
        }, 6e4))
    }
    _onRootSpanTimeout(e) {
        !this._rootSpanTimeouts.has(e) || (this._rootSpanTimeouts.delete(e), this._activeRootSpanIds.has(e) && (tq && E.debug.log(`[Profiling] Reached 5-minute timeout for root span ${e}. You likely started a manual root span that never called \`.end()\`.`), this._activeRootSpanIds.delete(e), 0 === this._activeRootSpanIds.size && this._endProfiling()))
    }
    async _collectCurrentChunk() {
        let e = this._profiler;
        if (this._profiler = void 0, e) try {
            let t = await e.stop(),
                n = function(e, t, n) {
                    var r;
                    let a, i, o;
                    if (null == e) throw TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${e} instead.`);
                    let l = function(e) {
                            let t = [];
                            for (let n = 0; n < e.frames.length; n++) {
                                let r = e.frames[n];
                                r && (t[n] = {
                                    function: r.name,
                                    abs_path: "number" == typeof r.resourceId ? e.resources[r.resourceId] : void 0,
                                    lineno: r.line,
                                    colno: r.column
                                })
                            }
                            let n = [];
                            for (let t = 0; t < e.stacks.length; t++) {
                                let r = e.stacks[t];
                                if (!r) continue;
                                let a = [],
                                    i = r;
                                for (; i;) a.push(i.frameId), i = void 0 === i.parentId ? void 0 : e.stacks[i.parentId];
                                n[t] = a
                            }
                            let r = (0, G.browserPerformanceTimeOrigin)(),
                                a = "number" == typeof performance.timeOrigin ? performance.timeOrigin : r || 0,
                                i = a - (r || a),
                                o = [];
                            for (let t = 0; t < e.samples.length; t++) {
                                let n = e.samples[t];
                                if (!n) continue;
                                let r = (a + (n.timestamp - i)) / 1e3;
                                o[t] = {
                                    stack_id: n.stackId ?? 0,
                                    thread_id: ik,
                                    timestamp: r
                                }
                            }
                            return {
                                frames: t,
                                stacks: n,
                                samples: o,
                                thread_metadata: {
                                    [ik]: {
                                        name: iN
                                    }
                                }
                            }
                        }(e),
                        s = t.getOptions(),
                        u = t.getSdkMetadata?.()?.sdk;
                    return {
                        chunk_id: (0, L.uuid4)(),
                        client_sdk: {
                            name: u?.name ?? "sentry.javascript.browser",
                            version: u?.version ?? "0.0.0"
                        },
                        profiler_id: n || (0, L.uuid4)(),
                        platform: "javascript",
                        version: "2",
                        release: s.release ?? "",
                        environment: s.environment ?? "production",
                        debug_meta: {
                            images: (r = e.resources, a = (0, x.getClient)(), i = a?.getOptions(), (o = i?.stackParser) ? (0, iw.getDebugImagesForResources)(o, r) : [])
                        },
                        profile: l
                    }
                }(t, this._client, this._profilerId),
                r = function(e) {
                    try {
                        if (!e || "object" != typeof e) return {
                            reason: "chunk is not an object"
                        };
                        let t = e => "string" == typeof e && /^[a-f0-9]{32}$/.test(e);
                        if (!t(e.profiler_id)) return {
                            reason: "missing or invalid profiler_id"
                        };
                        if (!t(e.chunk_id)) return {
                            reason: "missing or invalid chunk_id"
                        };
                        if (!e.client_sdk) return {
                            reason: "missing client_sdk metadata"
                        };
                        let n = e.profile;
                        if (!n) return {
                            reason: "missing profile data"
                        };
                        if (!Array.isArray(n.frames) || !n.frames.length) return {
                            reason: "profile has no frames"
                        };
                        if (!Array.isArray(n.stacks) || !n.stacks.length) return {
                            reason: "profile has no stacks"
                        };
                        if (!Array.isArray(n.samples) || !n.samples.length) return {
                            reason: "profile has no samples"
                        };
                        return {
                            valid: !0
                        }
                    } catch (e) {
                        return {
                            reason: `unknown validation error: ${e}`
                        }
                    }
                }(n);
            if ("reason" in r) {
                tq && E.debug.log("[Profiling] Discarding invalid profile chunk (this is probably a bug in the SDK):", r.reason);
                return
            }
            this._sendProfileChunk(n), tq && E.debug.log("[Profiling] Collected browser profile chunk.")
        } catch (e) {
            tq && E.debug.log("[Profiling] Error while stopping JS Profiler for chunk:", e)
        }
    }
    _sendProfileChunk(e) {
        let t = this._client,
            n = (0, el.getSdkMetadataForEnvelopeHeader)(t.getSdkMetadata?.()),
            r = t.getDsn(),
            a = t.getOptions().tunnel,
            i = (0, el.createEnvelope)({
                event_id: (0, L.uuid4)(),
                sent_at: new Date().toISOString(),
                ...n && {
                    sdk: n
                },
                ...!!a && r && {
                    dsn: (0, ei.dsnToString)(r)
                }
            }, [
                [{
                    type: "profile_chunk",
                    platform: "javascript"
                }, e]
            ]);
        t.sendEnvelope(i).then(null, e => {
            tq && E.debug.error("Error while sending profile chunk envelope:", e)
        })
    }
}

function iO(e) {
    return {
        ...e,
        path: "path" in e && Array.isArray(e.path) ? e.path.join(".") : void 0,
        keys: "keys" in e ? JSON.stringify(e.keys) : void 0,
        unionErrors: "unionErrors" in e ? JSON.stringify(e.unionErrors) : void 0
    }
}
globalThis._sentryRouteManifest = '{"dynamicRoutes":[{"path":"/:locale","regex":"^/([^/]+)$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/:rest*","regex":"^/([^/]+)/(.+)$","paramNames":["locale","rest"],"hasOptionalPrefix":true},{"path":"/:locale/archive/blog/:slug*?","regex":"^/([^/]+)/archive/blog(?:/(.*))?$","paramNames":["locale","slug"],"hasOptionalPrefix":true},{"path":"/:locale/archive/news/:slug*","regex":"^/([^/]+)/archive/news/(.+)$","paramNames":["locale","slug"],"hasOptionalPrefix":true},{"path":"/:locale/archive/resources/:slug*","regex":"^/([^/]+)/archive/resources/(.+)$","paramNames":["locale","slug"],"hasOptionalPrefix":true},{"path":"/:locale/careers","regex":"^/([^/]+)/careers$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/careers/positions","regex":"^/([^/]+)/careers/positions$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/contact-us","regex":"^/([^/]+)/contact-us$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/data-deletion-request","regex":"^/([^/]+)/data-deletion-request$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/data-request","regex":"^/([^/]+)/data-request$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/data-request-v2","regex":"^/([^/]+)/data-request-v2$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/download/:slug*?","regex":"^/([^/]+)/download(?:/(.*))?$","paramNames":["locale","slug"],"hasOptionalPrefix":true},{"path":"/:locale/glossary","regex":"^/([^/]+)/glossary$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/glossary/:slug*","regex":"^/([^/]+)/glossary/(.+)$","paramNames":["locale","slug"],"hasOptionalPrefix":true},{"path":"/:locale/home-experiment/:slug*","regex":"^/([^/]+)/home-experiment/(.+)$","paramNames":["locale","slug"],"hasOptionalPrefix":true},{"path":"/:locale/legal/:slug*?","regex":"^/([^/]+)/legal(?:/(.*))?$","paramNames":["locale","slug"],"hasOptionalPrefix":true},{"path":"/:locale/oauth","regex":"^/([^/]+)/oauth$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/opt-out-request","regex":"^/([^/]+)/opt-out-request$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/products","regex":"^/([^/]+)/products$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/products/unity-engine","regex":"^/([^/]+)/products/unity-engine$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/releases/editor","regex":"^/([^/]+)/releases/editor$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/releases/editor/alpha","regex":"^/([^/]+)/releases/editor/alpha$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/releases/editor/alpha/:version","regex":"^/([^/]+)/releases/editor/alpha/([^/]+)$","paramNames":["locale","version"],"hasOptionalPrefix":true},{"path":"/:locale/releases/editor/archive","regex":"^/([^/]+)/releases/editor/archive$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/releases/editor/beta","regex":"^/([^/]+)/releases/editor/beta$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/releases/editor/beta/:version","regex":"^/([^/]+)/releases/editor/beta/([^/]+)$","paramNames":["locale","version"],"hasOptionalPrefix":true},{"path":"/:locale/releases/editor/beta/guide-beta-testing","regex":"^/([^/]+)/releases/editor/beta/guide-beta-testing$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/releases/editor/latest","regex":"^/([^/]+)/releases/editor/latest$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/releases/editor/whats-new","regex":"^/([^/]+)/releases/editor/whats-new$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/releases/editor/whats-new/:version","regex":"^/([^/]+)/releases/editor/whats-new/([^/]+)$","paramNames":["locale","version"],"hasOptionalPrefix":true},{"path":"/:locale/resources/:slug*","regex":"^/([^/]+)/resources/(.+)$","paramNames":["locale","slug"],"hasOptionalPrefix":true},{"path":"/:locale/roadmap","regex":"^/([^/]+)/roadmap$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/search","regex":"^/([^/]+)/search$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/unity/:slug*?","regex":"^/([^/]+)/unity(?:/(.*))?$","paramNames":["locale","slug"],"hasOptionalPrefix":true},{"path":"/:locale/unity-release/latest","regex":"^/([^/]+)/unity-release/latest$","paramNames":["locale"],"hasOptionalPrefix":true}],"staticRoutes":[],"isrRoutes":["/:locale/:rest*","/:locale/archive/resources/:slug*","/:locale/download/:slug*?","/:locale/glossary/:slug*","/:locale/home-experiment/:slug*","/:locale/legal/:slug*?","/:locale/releases/editor/whats-new/:version","/:locale/resources/:slug*","/:locale/unity/:slug*?"]}', globalThis._sentryNextJsVersion = "16.3.2", ! function(e) {
    let t, n, r, a, i, o, l;
    iS && (0, E.consoleSandbox)(() => {
        console.warn("[@sentry/nextjs] You are calling `Sentry.init()` more than once on the client. This can happen if you have both a `sentry.client.config.ts` and a `instrumentation-client.ts` file with `Sentry.init()` calls. It is recommended to call `Sentry.init()` once in `instrumentation-client.ts`.")
    }), iS = !0, !nP && e.debug && (0, E.consoleSandbox)(() => {
        console.warn("[@sentry/nextjs] You have enabled `debug: true`, but Sentry debug logging was removed from your bundle (likely via `webpack.treeshake.removeDebugLogging: true`). Set that option to `false` to see Sentry debug output.")
    }), ("u" < typeof __SENTRY_TRACING__ || __SENTRY_TRACING__) && function() {
        ti.document && function(e) {
            let t = ii(e) || e,
                n = ib.get(t);
            if (void 0 !== n) return n;
            let r = ia();
            if (!r?.isrRoutes || !Array.isArray(r.isrRoutes) || 0 === r.isrRoutes.length) return ib.set(t, !1), !1;
            let a = r.isrRoutes.includes(t);
            return ib.set(t, a), a
        }(ti.location.pathname) && (e("sentry-trace"), e("baggage"));

        function e(e) {
            try {
                let t = ti.document.querySelector(`meta[name="${e}"]`);
                t && t.remove()
            } catch {}
        }
    }();
    let u = {
        environment: e.environment || S.default.env.SENTRY_ENVIRONMENT || S.default.env.NEXT_PUBLIC_VERCEL_TARGET_ENV || S.default.env.NEXT_PUBLIC_VERCEL_ENV || "production",
        defaultIntegrations: (r = nk(e), ("u" < typeof __SENTRY_TRACING__ || __SENTRY_TRACING__) && r.push(function(e = {}) {
            let t = ((e = {}) => {
                    let t, n;
                    "enableElementTiming" in e && (0, E.consoleSandbox)(() => {
                        console.warn("[Sentry] `enableElementTiming` is deprecated and no longer has any effect. Use the standalone `elementTimingIntegration` instead.")
                    });
                    let r = ti.document,
                        {
                            enableInp: a,
                            enableLongTask: i,
                            enableLongAnimationFrame: o,
                            webVitals: l,
                            beforeStartSpan: u,
                            idleTimeout: v,
                            finalTimeout: y,
                            childSpanTimeout: b,
                            markBackgroundSpan: _,
                            traceFetch: S,
                            traceXHR: T,
                            shouldCreateSpanForRequest: k,
                            enableHTTPTimings: N,
                            ignoreResourceSpans: C,
                            instrumentPageLoad: O,
                            instrumentNavigation: I,
                            instrumentBfcacheRestore: R,
                            detectRedirects: L,
                            linkPreviousTrace: A,
                            consistentTraceSampling: D,
                            enableReportPageLoaded: M,
                            onRequestSpanStart: U,
                            onRequestSpanEnd: z
                        } = {
                            ...aX,
                            ...e
                        },
                        B = rp();

                    function $(e, t, a = !0, i) {
                        let o = "pageload" === t.op,
                            l = t.name,
                            s = u ? u(t) : t,
                            c = tP(i || ta()),
                            d = {
                                ...c?.pathname && {
                                    [ty.URL_PATH]: c.pathname
                                },
                                ...c && !tx(c) && {
                                    [ty.URL_FULL]: tk(c.href)
                                },
                                ...s.attributes
                            };
                        if (l !== s.name && (d[ty.SENTRY_SEGMENT_NAME_SOURCE] = "custom"), s.attributes = d, !a) {
                            let e = (0, G.dateTimestampInSeconds)();
                            n0({
                                ...s,
                                startTime: e
                            }).end(e);
                            return
                        }
                        let f = function(e, t = {}) {
                            let n, r, a = (0, x.getClient)();
                            nZ(a);
                            let i = new Map,
                                o = !1,
                                l = "externalFinish",
                                s = !t.disableAutoFinish,
                                u = [],
                                {
                                    idleTimeout: c = n1.idleTimeout,
                                    finalTimeout: d = n1.finalTimeout,
                                    childSpanTimeout: f = n1.childSpanTimeout,
                                    trimIdleSpanEndTimestamp: p = !0
                                } = t,
                                m = (0, x.getCurrentScope)();
                            if (!a || !(0, nC.hasSpansEnabled)()) {
                                let e = new nU.SentryNonRecordingSpan({
                                    traceId: m.getPropagationContext().traceId
                                });
                                return (0, t3.setCapturedScopesOnSpan)(e, m, (0, x.getIsolationScope)()), e
                            }
                            let h = (0, j.getActiveSpan)(),
                                g = nW(e);

                            function v() {
                                n && (clearTimeout(n), n = void 0)
                            }

                            function y() {
                                r && (clearTimeout(r), r = void 0)
                            }

                            function b(e) {
                                v(), n = setTimeout(() => {
                                    !o && 0 === i.size && s && (l = "idleTimeout", g.end(e))
                                }, c)
                            }

                            function _(e) {
                                y(), r = setTimeout(() => {
                                    !o && s && (l = "heartbeatFailed", g.end(e))
                                }, f)
                            }

                            function S(e) {
                                o = !0, i.clear(), u.forEach(e => e()), (0, nO._setSpanForScope)(m, h);
                                let t = (0, j.spanToStaticSpanJSON)(g),
                                    {
                                        start_timestamp: n
                                    } = t;
                                if (!n) return;
                                t.data[F.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON] || g.setAttribute(F.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, l);
                                let r = t.status;
                                r && "unknown" !== r || g.setStatus({
                                    code: nH.SPAN_STATUS_OK
                                }), E.debug.log(`[Tracing] Idle span "${t.op}" finished`);
                                let a = (0, j.getSpanDescendants)(g).filter(e => e !== g),
                                    s = 0;
                                a.forEach(t => {
                                    t.isRecording() && (t.setStatus({
                                        code: nH.SPAN_STATUS_ERROR,
                                        message: "cancelled"
                                    }), t.end(e), P.DEBUG_BUILD && E.debug.log("[Tracing] Cancelling span since span ended early", JSON.stringify(t, void 0, 2)));
                                    let {
                                        timestamp: n = 0,
                                        start_timestamp: r = 0
                                    } = (0, j.spanToStaticSpanJSON)(t), a = r <= e, i = n - r <= (d + c) / 1e3;
                                    if (P.DEBUG_BUILD) {
                                        let e = JSON.stringify(t, void 0, 2);
                                        a ? i || E.debug.log("[Tracing] Discarding span since it finished after idle span final timeout", e) : E.debug.log("[Tracing] Discarding span since it happened after idle span was finished", e)
                                    }(!i || !a) && ((0, j.removeChildSpanFromSpan)(g, t), s++)
                                }), s > 0 && g.setAttribute("sentry.idle_span_discarded_spans", s)
                            }
                            return (0, nO._setSpanForScope)((0, x.getCurrentScope)(), g), P.DEBUG_BUILD && E.debug.log("[Tracing] Started span is an idle span"), g.end = new Proxy(g.end, {
                                apply(e, t, n) {
                                    if (a.emit("beforeIdleSpanEnd", g), (0, nU.spanIsNonRecordingSpan)(t)) return;
                                    let [r, ...i] = n, o = r || (0, G.timestampInSeconds)(), l = (0, j.spanTimeInputToSeconds)(o), s = (0, j.getSpanDescendants)(g).filter(e => e !== g), u = (0, j.spanToStaticSpanJSON)(g);
                                    if (!s.length || !p) return S(l), Reflect.apply(e, t, [l, ...i]);
                                    let c = a.getOptions().ignoreSpans,
                                        f = s?.reduce((e, t) => {
                                            let n = (0, j.spanToStaticSpanJSON)(t);
                                            return !n.timestamp || c && eD({
                                                description: n.description,
                                                op: n.op,
                                                attributes: n.data
                                            }, c) ? e : e ? Math.max(e, n.timestamp) : n.timestamp
                                        }, void 0),
                                        m = u.start_timestamp,
                                        h = Math.min(m ? m + d / 1e3 : 1 / 0, Math.max(m || -1 / 0, Math.min(l, f || 1 / 0)));
                                    return S(h), Reflect.apply(e, t, [h, ...i])
                                }
                            }), u.push(a.on("spanStart", e => {
                                var t;
                                !(o || e === g || (0, j.spanToJSON)(e).end_timestamp || e instanceof nj && e.isStandaloneSpan()) && (0, j.getSpanDescendants)(g).includes(e) && (t = e.spanContext().spanId, v(), i.set(t, !0), _((0, G.timestampInSeconds)() + f / 1e3))
                            })), u.push(a.on("spanEnd", e => {
                                if (!o) {
                                    var t;
                                    t = e.spanContext().spanId, i.has(t) && i.delete(t), 0 === i.size && (b((0, G.timestampInSeconds)() + c / 1e3), y())
                                }
                            })), u.push(a.on("idleSpanEnableAutoFinish", e => {
                                e === g && (s = !0, b(), i.size && _())
                            })), t.disableAutoFinish || b(), setTimeout(() => {
                                o || (g.setStatus({
                                    code: nH.SPAN_STATUS_ERROR,
                                    message: "deadline_exceeded"
                                }), l = "finalTimeout", g.end())
                            }, d), g
                        }(s, {
                            idleTimeout: v,
                            finalTimeout: y,
                            childSpanTimeout: b,
                            disableAutoFinish: o,
                            trimIdleSpanEndTimestamp: !M
                        });

                        function p() {
                            r && ["interactive", "complete"].includes(r.readyState) && (e.emit("idleSpanEnableAutoFinish", f), r.removeEventListener("readystatechange", p))
                        }
                        o && M && (n = f), a4(e, f), o && !M && r && (r.addEventListener("readystatechange", p), p())
                    }
                    return {
                        name: "BrowserTracing",
                        setup(e) {
                            if (B) {
                                tq && E.debug.log("[Tracing] Skipping browserTracingIntegration setup for bot user agent.");
                                return
                            }

                            function a() {
                                let e = (0, j.getActiveSpan)(),
                                    t = e && (0, j.getRootSpan)(e);
                                if (t) {
                                    let e = "internal_error";
                                    P.DEBUG_BUILD && E.debug.log(`[Tracing] Root span: ${e} -> Global error occurred`), t.setStatus({
                                        code: nH.SPAN_STATUS_ERROR,
                                        message: e
                                    })
                                }
                            }
                            if (rd || (rd = !0, t7(a), nn(a)), o && w.GLOBAL_OBJ.PerformanceObserver && PerformanceObserver.supportedEntryTypes?.includes("long-animation-frame") ? new PerformanceObserver(e => {
                                    let t = (0, j.getActiveSpan)();
                                    if (t)
                                        for (let n of e.getEntries()) {
                                            if (!n.scripts[0]) continue;
                                            let e = au((0, G.browserPerformanceTimeOrigin)() + n.startTime),
                                                {
                                                    start_timestamp: r,
                                                    attributes: {
                                                        [ty.SENTRY_OP]: a
                                                    }
                                                } = (0, j.spanToJSON)(t);
                                            if ("navigation" === a && r && e < r) continue;
                                            let i = au(n.duration),
                                                o = {
                                                    [F.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics"
                                                },
                                                {
                                                    invoker: l,
                                                    invokerType: s,
                                                    sourceURL: u,
                                                    sourceFunctionName: c,
                                                    sourceCharPosition: d
                                                } = n.scripts[0];
                                            o["browser.script.invoker"] = l, o["browser.script.invoker_type"] = s, u && (o[ty.CODE_FILE_PATH] = u), c && (o[ty.CODE_FUNCTION_NAME] = c), -1 !== d && (o["browser.script.source_char_position"] = d), al(t, e, e + i, {
                                                name: rl,
                                                op: "ui.long_animation_frame",
                                                attributes: o
                                            })
                                        }
                                }).observe({
                                    type: "long-animation-frame",
                                    buffered: !0
                                }) : i && r4("longtask", ({
                                    entries: e
                                }) => {
                                    let t = (0, j.getActiveSpan)();
                                    if (!t) return;
                                    let {
                                        attributes: n,
                                        start_timestamp: r
                                    } = (0, j.spanToJSON)(t);
                                    for (let a of e) {
                                        let e = au((0, G.browserPerformanceTimeOrigin)() + a.startTime),
                                            i = au(a.duration);
                                        "navigation" === n[ty.SENTRY_OP] && r && e < r || al(t, e, e + i, {
                                            name: rl,
                                            op: "ui.long_task",
                                            attributes: {
                                                [F.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics"
                                            }
                                        })
                                    }
                                }), L && r) {
                                let e = () => {
                                    t = (0, G.timestampInSeconds)()
                                };
                                addEventListener("click", e, {
                                    capture: !0
                                }), addEventListener("keydown", e, {
                                    capture: !0,
                                    passive: !0
                                })
                            }

                            function l() {
                                let t = e[a3];
                                t && !(0, j.spanToJSON)(t).end_timestamp && (tq && E.debug.log(`[Tracing] Finishing current active span with op: ${(0,j.spanToJSON)(t).attributes[ty.SENTRY_OP]}`), t.setAttribute(ty.SENTRY_IDLE_SPAN_FINISH_REASON, "cancelled"), t.end())
                            }
                            e.on("beforeIdleSpanEnd", t => {
                                if (e[a3] !== t) return;
                                ! function(e, t) {
                                    let n = as(),
                                        r = (0, G.browserPerformanceTimeOrigin)();
                                    if (!n?.getEntries || !r) return;
                                    let {
                                        spanStreamingEnabled: a,
                                        ignoreResourceSpans: i
                                    } = t, o = au(r), l = n.getEntries(), {
                                        attributes: s,
                                        start_timestamp: u
                                    } = (0, j.spanToJSON)(e);
                                    l.slice(ap).forEach(t => {
                                            var n, r, l, c, d, f, p, m;
                                            let h = au(t.startTime),
                                                g = au(Math.max(0, t.duration));
                                            if ("navigation" !== s[ty.SENTRY_OP] || !u || !(o + h < u)) switch (t.entryType) {
                                                case "navigation":
                                                    ah(n = e, r = t, "unloadEvent", l = o, c = a), ah(n, r, "redirect", l, c), ah(n, r, "domContentLoadedEvent", l, c), ah(n, r, "loadEvent", l, c), ah(n, r, "connect", l, c), ah(n, r, "secureConnection", l, c), ah(n, r, "fetch", l, c), ah(n, r, "domainLookup", l, c),
                                                        function(e, t, n, r) {
                                                            let a = n + au(t.requestStart),
                                                                i = n + au(t.responseEnd),
                                                                o = n + au(t.responseStart);
                                                            if (t.responseEnd) {
                                                                let n = tk(t.name);
                                                                al(e, a, i, {
                                                                    name: r ? rc[rn] : t.name,
                                                                    attributes: {
                                                                        [ty.SENTRY_OP]: rn,
                                                                        [F.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics",
                                                                        [ty.URL_FULL]: n
                                                                    }
                                                                }), al(e, o, i, {
                                                                    name: r ? rc[rr] : t.name,
                                                                    attributes: {
                                                                        [ty.SENTRY_OP]: rr,
                                                                        [F.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics",
                                                                        [ty.URL_FULL]: n
                                                                    }
                                                                })
                                                            }
                                                        }(n, r, l, c);
                                                    break;
                                                case "paint":
                                                    let v;
                                                    d = e, f = t, p = h, m = g, al(d, v = o + p, v + m, {
                                                        name: f.name,
                                                        attributes: {
                                                            [ty.SENTRY_OP]: "browser.paint",
                                                            [F.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.resource.browser.metrics",
                                                            [ty.BROWSER_PAINT_TYPE]: f.name
                                                        }
                                                    });
                                                    break;
                                                case "resource":
                                                    ! function(e, t, n, r, a, i, o, l) {
                                                        var s, u;
                                                        if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType) return;
                                                        let c = t.initiatorType ? `resource.${t.initiatorType}` : "resource.other";
                                                        if (o?.includes(c)) return;
                                                        let d = {
                                                                [F.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.resource.browser.metrics"
                                                            },
                                                            f = tR(n);
                                                        f.protocol && (d[ty.URL_SCHEME] = f.protocol.split(":").pop());
                                                        let p = f.host?.replace(/^.*@/, "");
                                                        p && (d[ty.SERVER_ADDRESS] = p);
                                                        let m = p?.replace(/:\d+$/, "");
                                                        m && (d[ty.URL_DOMAIN] = m), d[ty.HTTP_REQUEST_SAME_ORIGIN] = n.includes(tr.location.origin), d[ty.URL_FULL] = tk(n), s = t, u = d, [
                                                            ["responseStatus", ty.HTTP_RESPONSE_STATUS_CODE],
                                                            ["transferSize", ty.HTTP_RESPONSE_SIZE],
                                                            ["encodedBodySize", ty.HTTP_RESPONSE_BODY_SIZE],
                                                            ["decodedBodySize", "http.response.body.decoded_size"],
                                                            ["renderBlockingStatus", "resource.render_blocking_status"],
                                                            ["deliveryType", "http.response_delivery_type"]
                                                        ].forEach(([e, t]) => {
                                                            let n = s[e];
                                                            null != n && ("number" == typeof n && n < 0x7fffffff || "string" == typeof n) && (u[t] = n)
                                                        });
                                                        let h = {
                                                                ...d,
                                                                ...af(t)
                                                            },
                                                            g = i + r;
                                                        al(e, g, g + a, {
                                                            name: l ? m || "Resource" : n.replace(tr.location.origin, ""),
                                                            op: c,
                                                            attributes: h
                                                        })
                                                    }(e, t, t.name, h, g, o, i, a)
                                            }
                                        }), ap = Math.max(l.length - 1, 0),
                                        function(e, t) {
                                            let n = tr.navigator;
                                            if (!n) return;
                                            let r = n.connection;
                                            r && (r.effectiveType && e.setAttribute(t ? ty.NETWORK_CONNECTION_EFFECTIVE_TYPE : "effectiveConnectionType", r.effectiveType), r.type && e.setAttribute(t ? ty.NETWORK_CONNECTION_TYPE : "connectionType", r.type), ao(r.rtt) && (t ? e.setAttribute(ty.NETWORK_CONNECTION_RTT, r.rtt) : "pageload" === (0, j.spanToJSON)(e).attributes[ty.SENTRY_OP] && nz("connection.rtt", r.rtt, "millisecond"))), ao(n.deviceMemory) && (t ? e.setAttribute("device.memory.estimated_capacity", n.deviceMemory) : e.setAttribute("deviceMemory", `${n.deviceMemory} GB`)), ao(n.hardwareConcurrency) && (t ? e.setAttribute("device.processor_count", n.hardwareConcurrency) : e.setAttribute("hardwareConcurrency", String(n.hardwareConcurrency)))
                                        }(e, a)
                                }(t, {
                                    ignoreResourceSpans: C,
                                    spanStreamingEnabled: ek(e)
                                }), a4(e, void 0);
                                let r = (0, x.getCurrentScope)(),
                                    a = r.getPropagationContext();
                                r.setPropagationContext({
                                    ...a,
                                    traceId: t.spanContext().traceId,
                                    sampled: (0, j.spanIsSampled)(t),
                                    dsc: (0, ep.getDynamicSamplingContextFromSpan)(t)
                                }), n === t && (n = void 0)
                            }), e.on("startNavigationSpan", (n, r) => {
                                if ((0, x.getClient)() !== e) return;
                                if (r?.isRedirect) {
                                    tq && E.debug.warn("[Tracing] Detected redirect, navigation span will not be the root span, but a child span."), $(e, {
                                        op: "navigation.redirect",
                                        ...n
                                    }, !1, r.url);
                                    return
                                }
                                t = void 0, l();
                                let a = (0, x.getCurrentScope)();
                                a.setPropagationContext({
                                    traceId: (0, nD.generateTraceId)(),
                                    sampleRand: Math.random(),
                                    propagationSpanId: (0, nC.hasSpansEnabled)() ? void 0 : (0, nD.generateSpanId)()
                                }), a.setSDKProcessingMetadata({
                                    normalizedRequest: void 0
                                }), $(e, {
                                    op: n3,
                                    ...n,
                                    parentSpan: null
                                }, !0, r?.url)
                            }), e.on("startPageLoadSpan", (t, n = {}) => {
                                if ((0, x.getClient)() !== e) return;
                                l();
                                let r = n.sentryTrace || a1("sentry-trace") || a2("sentry-trace"),
                                    a = n.baggage || a1("baggage") || a2("baggage"),
                                    i = (0, nM.propagationContextFromHeaders)(r, a),
                                    o = (0, x.getCurrentScope)();
                                o.setPropagationContext(i), (0, nC.hasSpansEnabled)() || (o.getPropagationContext().propagationSpanId = (0, nD.generateSpanId)()), o.setSDKProcessingMetadata({
                                    normalizedRequest: tc()
                                }), $(e, {
                                    op: n2,
                                    ...t
                                })
                            }), e.on("endPageloadSpan", () => {
                                M && n && (n.setAttribute(ty.SENTRY_IDLE_SPAN_FINISH_REASON, "reportPageLoaded"), n.end())
                            }), ti.addEventListener?.("pagehide", () => {
                                let t = e[a3];
                                t && !(0, j.spanToJSON)(t).end_timestamp && (t.setAttribute(ty.SENTRY_IDLE_SPAN_FINISH_REASON, "documentHidden"), t.end()), e.flush()
                            })
                        },
                        afterAllSetup(e) {
                            if (B) return;
                            if (nZ(e), e.addIntegration && !e.getIntegrationByName?.(aF)) {
                                let t = l?.ignore ?? [];
                                e.addIntegration(((e = {}) => {
                                    let {
                                        ignore: t = [],
                                        softNavigations: n = !0,
                                        bfcacheNavigations: r = !0
                                    } = e, a = new Set(t);
                                    return {
                                        name: aF,
                                        setup(e) {
                                            let t = ek(e),
                                                i = n && t && aN(),
                                                o = r && t,
                                                l = i || o;
                                            i && (rZ = !0, function(e) {
                                                if (aT || !aN()) return;
                                                aT = !0;
                                                let t = e => {
                                                    e.isTrusted && (p = e.timeStamp)
                                                };
                                                tr.addEventListener("click", t, {
                                                    capture: !0,
                                                    passive: !0
                                                }), tr.addEventListener("keydown", t, {
                                                    capture: !0,
                                                    passive: !0
                                                }), e.on("spanStart", e => {
                                                    if ((0, j.spanToJSON)(e).attributes?.[F.SEMANTIC_ATTRIBUTE_SENTRY_OP] !== "navigation") return;
                                                    d = void 0;
                                                    let t = p;
                                                    if (null != t) {
                                                        if (f?.interactionTimestamp === t) {
                                                            aE.set(f.interactionId, e), f = void 0;
                                                            return
                                                        }
                                                        d = {
                                                            span: e,
                                                            interactionTimestamp: t
                                                        }
                                                    }
                                                });
                                                let n = ({
                                                    entries: e
                                                }) => {
                                                    for (let t of e) {
                                                        if (!ai(t) || !t.interactionId) continue;
                                                        let e = d;
                                                        if (e && ak(t.startTime, e.interactionTimestamp)) {
                                                            aE.set(t.interactionId, e.span), d = void 0;
                                                            continue
                                                        }!aE.get(t.interactionId) && null != p && ak(t.startTime, p) && (f = {
                                                            interactionId: t.interactionId,
                                                            interactionTimestamp: p
                                                        })
                                                    }
                                                };
                                                r4("event", n), r4("first-input", n), r4("soft-navigation", ({
                                                    entries: e
                                                }) => {
                                                    for (let t of e) {
                                                        let e = aE.get(t.interactionId);
                                                        if (!e) {
                                                            n_ && E.debug.log(`[SoftNav] No navigation span found for soft navigation ${t.navigationId}`, t);
                                                            continue
                                                        }
                                                        aw.set(t.navigationId, e), e.setAttribute(ty.BROWSER_NAVIGATION_ID, t.navigationId)
                                                    }
                                                })
                                            }(e)), o && (r0 = !0);
                                            let u = !t && !a.has("cls"),
                                                v = !t && !a.has("lcp"),
                                                y = function({
                                                    trackCls: e,
                                                    trackLcp: t
                                                }) {
                                                    if (as() && (0, G.browserPerformanceTimeOrigin)()) {
                                                        let n = t ? r2(({
                                                                metric: e
                                                            }) => {
                                                                let t = e.entries[e.entries.length - 1];
                                                                t && ax(e.value) && (aP.lcp = {
                                                                    value: e.value,
                                                                    unit: "millisecond"
                                                                }, m = t)
                                                            }, !0) : void 0,
                                                            r = e ? r1(({
                                                                metric: e
                                                            }) => {
                                                                let t = e.entries[e.entries.length - 1];
                                                                t && (aP.cls = {
                                                                    value: e.value,
                                                                    unit: ""
                                                                }, h = t)
                                                            }, !0) : void 0,
                                                            a = an("ttfb", ({
                                                                metric: e
                                                            }) => {
                                                                g = e.navigationType, e.entries[e.entries.length - 1] && (aP.ttfb = {
                                                                    value: e.value,
                                                                    unit: "millisecond"
                                                                })
                                                            }, r7, s),
                                                            i = an("fcp", ({
                                                                metric: e
                                                            }) => {
                                                                g = e.navigationType, aP.fcp = {
                                                                    value: e.value,
                                                                    unit: "millisecond"
                                                                }
                                                            }, ae, c),
                                                            o = r4("paint", ({
                                                                entries: e
                                                            }) => {
                                                                let t = (() => {
                                                                    if (tr.document && t0 < 0) {
                                                                        let e = tZ();
                                                                        t0 = (tr.document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").filter(t => "hidden" === t.name && t.startTime > e)[0]?.startTime) ?? (tr.document?.visibilityState !== "hidden" || tr.document?.prerendering ? 1 / 0 : 0), tQ("visibilitychange", t2, !0), tQ("prerenderingchange", t2, !0)
                                                                    }
                                                                    return {
                                                                        get firstHiddenTime() {
                                                                            return t0
                                                                        },
                                                                        onHidden(e) {
                                                                            t1.add(e)
                                                                        }
                                                                    }
                                                                })();
                                                                for (let n of e) "first-paint" === n.name && n.startTime < t.firstHiddenTime && (aP.fp = {
                                                                    value: n.startTime,
                                                                    unit: "millisecond"
                                                                })
                                                            });
                                                        return () => {
                                                            a(), i(), o(), n?.(), r?.()
                                                        }
                                                    }
                                                    return () => void 0
                                                }({
                                                    trackCls: u,
                                                    trackLcp: v,
                                                    client: e
                                                }),
                                                b = new WeakSet;
                                            e.on("afterStartPageLoadSpan", e => {
                                                b.add(e)
                                            }), e.on("spanEnd", e => {
                                                b.delete(e) && (y(), function(e, t) {
                                                    let n = (0, G.browserPerformanceTimeOrigin)();
                                                    if (!as()?.getEntries || !n) return aC();
                                                    let {
                                                        spanStreamingEnabled: r,
                                                        recordClsOnPageloadSpan: a,
                                                        recordLcpOnPageloadSpan: i
                                                    } = t, o = au(n);
                                                    if ("pageload" === (0, j.spanToJSON)(e).attributes[ty.SENTRY_OP]) {
                                                        let n;
                                                        if (function(e) {
                                                                let t = tX(!1);
                                                                if (!t) return;
                                                                let {
                                                                    responseStart: n,
                                                                    requestStart: r
                                                                } = t;
                                                                r <= n && (e["ttfb.requestTime"] = {
                                                                    value: n - r,
                                                                    unit: "millisecond"
                                                                })
                                                            }(aP), (n = aP.fp) && (n.value = Math.max(n.value - tZ(), 0)), r) {
                                                            let t = (t, n, r) => {
                                                                let a = r ?? `browser.web_vital.${t}.value`;
                                                                e.setAttribute(a, n), n_ && E.debug.log("Setting web vital attribute", {
                                                                    [a]: n
                                                                }, "on pageload span")
                                                            };
                                                            ["ttfb", "fp", "fcp"].forEach(e => {
                                                                aP[e] && t(e, aP[e].value)
                                                            }), aP["ttfb.requestTime"] && t("ttfb.requestTime", aP["ttfb.requestTime"].value, "browser.web_vital.ttfb.request_time")
                                                        } else {
                                                            var l, s;
                                                            a || delete aP.cls, i || delete aP.lcp, Object.entries(aP).forEach(([t, n]) => {
                                                                nz(t, n.value, n.unit, e)
                                                            }), l = e, s = t, m && s.recordLcpOnPageloadSpan && (m.element && l.setAttribute("lcp.element", tG(m.element)), m.id && l.setAttribute("lcp.id", m.id), m.url && l.setAttribute("lcp.url", m.url.trim().slice(0, 200)), null != m.loadTime && l.setAttribute("lcp.loadTime", m.loadTime), null != m.renderTime && l.setAttribute("lcp.renderTime", m.renderTime), l.setAttribute("lcp.size", m.size)), h?.sources && s.recordClsOnPageloadSpan && h.sources.forEach((e, t) => l.setAttribute(`cls.source.${t+1}`, tG(e.node)))
                                                        }
                                                        g && e.setAttribute(ty.BROWSER_NAVIGATION_TYPE, g), e.setAttribute(r ? "browser.performance.time_origin" : "performance.timeOrigin", o), e.setAttribute(r ? "browser.performance.navigation.activation_start" : "performance.activationStart", tZ())
                                                    }
                                                    aC()
                                                }(e, {
                                                    recordClsOnPageloadSpan: u,
                                                    recordLcpOnPageloadSpan: v,
                                                    spanStreamingEnabled: t
                                                }))
                                            }), t && (a.has("lcp") || function(e, t = !1) {
                                                let n, r;
                                                if (!ac("largest-contentful-paint")) return;
                                                if (t) return aA(e, r2, (e, t, n) => {
                                                    let r = e.entries[e.entries.length - 1];
                                                    aD(e.value, r, t, n, e.navigationType, e.navigationStartTime)
                                                });
                                                let a = 0,
                                                    i = r2(({
                                                        metric: e
                                                    }) => {
                                                        r = e.navigationType;
                                                        let t = e.entries[e.entries.length - 1];
                                                        t && ax(e.value) && (a = e.value, n = t)
                                                    }, !0);
                                                aI(e, e => {
                                                    aD(a, n, e, void 0, r), i()
                                                })
                                            }(e, l), a.has("cls") || function(e, t = !1) {
                                                let n, r;
                                                if (!ac("layout-shift")) return;
                                                if (t) return aA(e, r1, (e, t, n) => {
                                                    let r = e.entries[e.entries.length - 1];
                                                    aM(e.value, r, t, n, e.navigationType, e.navigationStartTime)
                                                });
                                                let a = 0,
                                                    i = r1(({
                                                        metric: e
                                                    }) => {
                                                        r = e.navigationType;
                                                        let t = e.entries[e.entries.length - 1];
                                                        t && (a = e.value, n = t)
                                                    }, !0);
                                                aI(e, e => {
                                                    aM(a, n, e, void 0, r), i()
                                                })
                                            }(e, l)), a.has("inp") || function(e, t = !1) {
                                                if (!as() || !(0, G.browserPerformanceTimeOrigin)()) return;
                                                let n = !ek(e);
                                                t ? aA(e, r3, (e, t, r) => {
                                                    aU(e) && aB(e.value, az(e), n, t, r, e)
                                                }) : r3(({
                                                    metric: e
                                                }) => {
                                                    aU(e) && aB(e.value, az(e), n, void 0, void 0, e)
                                                })
                                            }(e, l)
                                        },
                                        afterAllSetup() {
                                            a.has("inp") || function() {
                                                let e = Object.keys(a_);

                                                function t(e) {
                                                    let t = e.target;
                                                    if (!t) return;
                                                    let n = tG(t),
                                                        r = Math.round(e.timeStamp);
                                                    if (n && n !== ay && !ab.has(r) && (ab.set(r, n), ab.size > 50)) {
                                                        let e = ab.keys().next().value;
                                                        void 0 !== e && ab.delete(e)
                                                    }
                                                }
                                                em() && e.forEach(e => {
                                                    tr.addEventListener(e, t, {
                                                        capture: !0,
                                                        passive: !0
                                                    })
                                                });
                                                let n = ({
                                                    entries: e
                                                }) => {
                                                    let t = (0, j.getActiveSpan)(),
                                                        n = t && (0, j.getRootSpan)(t);
                                                    e.forEach(e => {
                                                        if (!ai(e)) return;
                                                        let t = e.interactionId;
                                                        if (null == t || av.has(t)) return;
                                                        let r = e.target ? tG(e.target) : function(e) {
                                                            let t = Math.round(e.startTime),
                                                                n = ab.get(t);
                                                            if (!n)
                                                                for (let e = -5; e <= 5; e++) {
                                                                    let r = ab.get(t + e);
                                                                    if (r) {
                                                                        n = r;
                                                                        break
                                                                    }
                                                                }
                                                            return n || ay
                                                        }(e);
                                                        if (ag.length > 10) {
                                                            let e = ag.shift();
                                                            av.delete(e)
                                                        }
                                                        ag.push(t), av.set(t, {
                                                            span: n,
                                                            elementName: r
                                                        })
                                                    })
                                                };
                                                r4("event", n), r4("first-input", n)
                                            }()
                                        }
                                    }
                                })({
                                    ...l,
                                    ignore: a || t.includes("inp") ? t : [...t, "inp"]
                                }))
                            }
                            let n = ta();
                            "off" !== A && function(e, {
                                    linkPreviousTrace: t,
                                    consistentTraceSampling: n
                                }) {
                                    let r = "session-storage" === t,
                                        a = r ? function() {
                                            try {
                                                let e = ti.sessionStorage?.getItem(aj);
                                                return JSON.parse(e)
                                            } catch {
                                                return
                                            }
                                        }() : void 0;
                                    e.on("spanStart", e => {
                                        if ((0, j.getRootSpan)(e) !== e) return;
                                        let t = (0, x.getCurrentScope)().getPropagationContext();
                                        a = function(e, t, n) {
                                            let r = (0, j.spanToJSON)(t),
                                                a = {
                                                    spanContext: t.spanContext(),
                                                    startTimestamp: r.start_timestamp,
                                                    sampleRate: function() {
                                                        try {
                                                            let e = Number(r.attributes[F.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE] ?? n.dsc?.sample_rate);
                                                            return Number.isNaN(e) ? 0 : e
                                                        } catch {
                                                            return 0
                                                        }
                                                    }(),
                                                    sampleRand: n.sampleRand
                                                };
                                            if (!e) return a;
                                            let i = e.spanContext;
                                            return i.traceId === r.trace_id ? e : (Date.now() / 1e3 - e.startTimestamp <= 3600 && (tq && E.debug.log(`Adding previous_trace \`${JSON.stringify(i)}\` link to span \`${JSON.stringify({op:r.attributes[ty.SENTRY_OP],...t.spanContext()})}\``), t.addLink({
                                                context: i,
                                                attributes: {
                                                    [F.SEMANTIC_LINK_ATTRIBUTE_LINK_TYPE]: "previous_trace"
                                                }
                                            }), t.setAttribute("sentry.previous_trace", `${i.traceId}-${i.spanId}-${+!!a$(i)}`)), a)
                                        }(a, e, t), r && function(e) {
                                            try {
                                                ti.sessionStorage.setItem(aj, JSON.stringify(e))
                                            } catch (e) {
                                                tq && E.debug.warn("Could not store previous trace in sessionStorage", e)
                                            }
                                        }(a)
                                    });
                                    let i = !0;
                                    n && e.on("beforeSampling", e => {
                                        if (!a) return;
                                        let t = (0, x.getCurrentScope)(),
                                            n = t.getPropagationContext();
                                        if (i && n.parentSpanId) {
                                            i = !1;
                                            return
                                        }
                                        t.setPropagationContext({
                                            ...n,
                                            dsc: {
                                                ...n.dsc,
                                                sample_rate: String(a.sampleRate),
                                                sampled: String(a$(a.spanContext))
                                            },
                                            sampleRand: a.sampleRand
                                        }), e.parentSampled = a$(a.spanContext), e.parentSampleRate = a.sampleRate, e.spanAttributes = {
                                            ...e.spanAttributes,
                                            [F.SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE]: a.sampleRate
                                        }
                                    })
                                }(e, {
                                    linkPreviousTrace: A,
                                    consistentTraceSampling: D
                                }), ti.location && (O && aZ(e, {
                                    name: ek(e) ? ri : ti.location.pathname,
                                    attributes: {
                                        [ty.SENTRY_SEGMENT_NAME_SOURCE]: "url",
                                        [ty.SENTRY_ORIGIN]: "auto.pageload.browser"
                                    }
                                }), I && tB(({
                                    to: r,
                                    from: a
                                }) => {
                                    var i, o;
                                    let l, s;
                                    if (void 0 === a && void 0 !== n && -1 !== n.indexOf(r)) {
                                        n = void 0;
                                        return
                                    }
                                    n = void 0;
                                    let u = tP(r),
                                        c = e[a3],
                                        d = c && L && (i = c, o = t, l = (0, j.spanToJSON)(i), !((s = (0, G.dateTimestampInSeconds)()) - l.start_timestamp > 1.5) && (!o || !(s - o <= 1.5)));
                                    a0(e, {
                                        name: ek(e) ? ro : u?.pathname || ti.location.pathname,
                                        attributes: {
                                            [ty.SENTRY_SEGMENT_NAME_SOURCE]: "url",
                                            [ty.SENTRY_ORIGIN]: "auto.navigation.browser"
                                        }
                                    }, {
                                        url: r,
                                        isRedirect: d
                                    })
                                }), R && ti.addEventListener?.("pageshow", t => {
                                    t.persisted && (n = void 0, a0(e, {
                                        name: ek(e) ? ro : ti.location?.pathname || "/",
                                        attributes: {
                                            [ty.SENTRY_SEGMENT_NAME_SOURCE]: "url",
                                            [ty.SENTRY_ORIGIN]: "auto.navigation.browser.bfcache",
                                            [ty.BROWSER_NAVIGATION_TYPE]: "back-forward-cache"
                                        }
                                    }, {
                                        url: ti.location?.href
                                    }))
                                })), _ && (ti.document ? ti.document.addEventListener("visibilitychange", () => {
                                    let e = (0, j.getActiveSpan)();
                                    if (!e) return;
                                    let t = (0, j.getRootSpan)(e);
                                    if (ti.document.hidden && t) {
                                        let e = "cancelled",
                                            {
                                                attributes: {
                                                    [ty.SENTRY_OP]: n
                                                },
                                                status: r
                                            } = (0, j.spanToJSON)(t);
                                        tq && E.debug.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${n}`), "ok" === r && t.setStatus({
                                            code: nH.SPAN_STATUS_ERROR,
                                            message: e
                                        }), t.setAttribute("sentry.cancellation_reason", "document.hidden"), t.end()
                                    }
                                }) : tq && E.debug.warn("[Tracing] Could not set up background tab detection due to lack of global document")),
                                function(e, t) {
                                    let {
                                        traceFetch: n,
                                        traceXHR: r,
                                        shouldCreateSpanForRequest: a,
                                        enableHTTPTimings: i,
                                        tracePropagationTargets: o,
                                        onRequestSpanStart: l,
                                        onRequestSpanEnd: s
                                    } = {
                                        ...aQ,
                                        ...t
                                    }, u = "function" == typeof a ? a : e => !0, c = e => (function(e, t) {
                                        let n = ta();
                                        if (n) {
                                            let r, a;
                                            try {
                                                r = new URL(e, n), a = new URL(n).origin
                                            } catch {
                                                return !1
                                            }
                                            let i = r.origin === a;
                                            return t ? aY(r.toString(), t) || i && aY(r.pathname, t) : i
                                        } {
                                            let n = !!e.match(/^\/(?!\/)/);
                                            return t ? aY(e, t) : n
                                        }
                                    })(e, o), d = {}, f = e.getOptions().propagateTraceparent;
                                    n && tm(t => {
                                        let n = function(e, t, n, r, a) {
                                            if (!e.fetchData) return;
                                            let {
                                                method: i,
                                                url: o
                                            } = e.fetchData, l = (0, nC.hasSpansEnabled)() && t(o);
                                            if (e.endTimestamp) {
                                                var s, u, c;
                                                let t = e.fetchData.__span;
                                                if (!t) return;
                                                let n = r[t];
                                                n && (l && (function(e, t) {
                                                    if (t.response) {
                                                        (0, nH.setHttpStatus)(e, t.response.status);
                                                        let n = t.response?.headers?.get("content-length");
                                                        if (n) {
                                                            let t = parseInt(n);
                                                            t > 0 && e.setAttribute(ty.HTTP_RESPONSE_BODY_SIZE, t)
                                                        }
                                                    } else t.error && e.setStatus({
                                                        code: nH.SPAN_STATUS_ERROR,
                                                        message: "internal_error"
                                                    });
                                                    e.end()
                                                }(n, e), s = n, u = e, c = a, c?.onRequestSpanEnd?.(s, {
                                                    headers: u.response?.headers,
                                                    error: u.error
                                                })), delete r[t]);
                                                return
                                            }
                                            let {
                                                spanOrigin: d = "auto.http.browser",
                                                propagateTraceparent: f = !1,
                                                urlBase: p
                                            } = a ?? {}, m = (0, x.getClient)(), h = !!(0, j.getActiveSpan)(), g = h || !!m && ek(m), v = l && g ? nW(function(e, t, n, r, a) {
                                                let i = !!r && ek(r),
                                                    o = tI(e, a);
                                                if (e.startsWith("data:")) {
                                                    let a = tL(e);
                                                    return {
                                                        name: i ? t : `${t} ${a}`,
                                                        attributes: aq(e, void 0, t, n, r, o)
                                                    }
                                                }
                                                let l = tP(e),
                                                    s = l ? function(e) {
                                                        if (tx(e)) return e.pathname;
                                                        let t = new URL(e);
                                                        return t.search = "", t.hash = "", ["80", "443"].includes(t.port) && (t.port = ""), t.password && (t.password = "%filtered%"), t.username && (t.username = "%filtered%"), t.toString()
                                                    }(l) : e;
                                                return {
                                                    name: i ? o ? `${t} ${o}` : t : `${t} ${s}`,
                                                    attributes: aq(e, l, t, n, r, o)
                                                }
                                            }(o, i, d, m, p)) : new nU.SentryNonRecordingSpan, y = nK(v) && h ? void 0 : v;
                                            if (l && !g && m?.recordDroppedEvent("no_parent_span", "span"), e.fetchData.__span = v.spanContext().spanId, r[v.spanContext().spanId] = v, n(e.fetchData.url)) {
                                                let t = e.args[0],
                                                    n = {
                                                        ...e.args[1] || {}
                                                    },
                                                    r = function(e, t, n, r) {
                                                        var a, i;
                                                        let o = aG({
                                                                span: n,
                                                                propagateTraceparent: r
                                                            }),
                                                            l = o["sentry-trace"],
                                                            s = o.baggage,
                                                            u = o.traceparent;
                                                        if (!l) return;
                                                        let c = t.headers || ((0, ed.isRequest)(e) ? e.headers : void 0);
                                                        if (!c) return {
                                                            "sentry-trace": l,
                                                            ...s && {
                                                                baggage: s
                                                            },
                                                            ...u && {
                                                                traceparent: u
                                                            }
                                                        };
                                                        if (a = c, "u" > typeof Headers && (0, ed.isInstanceOf)(a, Headers)) {
                                                            let e = new Headers(c);
                                                            if (e.get("sentry-trace") || e.set("sentry-trace", l), r && u && !e.get("traceparent") && e.set("traceparent", u), s) {
                                                                let t = e.get("baggage");
                                                                t ? aH(t) || e.set("baggage", `${t},${s}`) : e.set("baggage", s)
                                                            }
                                                            return e
                                                        }
                                                        if (Array.isArray(i = c) && i.every(e => Array.isArray(e) && 2 === e.length && "string" == typeof e[0])) {
                                                            let e = [...c];
                                                            e.find(e => "sentry-trace" === e[0]) || e.push(["sentry-trace", l]), r && u && !e.find(e => "traceparent" === e[0]) && e.push(["traceparent", u]);
                                                            let t = c.find(e => "baggage" === e[0] && "string" == typeof e[1] && aH(e[1]));
                                                            return s && !t && e.push(["baggage", s]), e
                                                        } {
                                                            let e = "sentry-trace" in c ? c["sentry-trace"] : void 0,
                                                                t = "traceparent" in c ? c.traceparent : void 0,
                                                                n = "baggage" in c ? c.baggage : void 0,
                                                                a = n ? Array.isArray(n) ? [...n] : [n] : [],
                                                                i = n && (Array.isArray(n) ? n.find(e => aH(e)) : aH(n));
                                                            s && !i && a.push(s);
                                                            let o = Object.assign({}, c, {
                                                                "sentry-trace": e ?? l,
                                                                ...a.length > 0 && {
                                                                    baggage: a.join(",")
                                                                }
                                                            });
                                                            return r && u && !t && (o.traceparent = u), o
                                                        }
                                                    }(t, n, (0, nC.hasSpansEnabled)() && g ? y : void 0, f);
                                                r && (e.args[1] = n, n.headers = r)
                                            }
                                            if (m) {
                                                let t = {
                                                    input: e.args,
                                                    response: e.response,
                                                    startTimestamp: e.startTimestamp,
                                                    endTimestamp: e.endTimestamp
                                                };
                                                m.emit("beforeOutgoingRequestSpan", v, t)
                                            }
                                            return v
                                        }(t, u, c, d, {
                                            propagateTraceparent: f,
                                            onRequestSpanEnd: s,
                                            urlBase: ti.location?.origin
                                        });
                                        if (n) {
                                            let r = aV(t.fetchData.url),
                                                a = r ? tR(r).host?.replace(/^.*@/, "") : void 0,
                                                o = r ? tL(r) : void 0;
                                            n.setAttributes({
                                                [ty.URL_FULL]: tk(o),
                                                [ty.SERVER_ADDRESS]: a
                                            }), i && aK(n, e), l?.(n, {
                                                headers: t.headers
                                            })
                                        }
                                    }), r && tU(t => {
                                        let n = function(e, t, n, r, a, i) {
                                            let o = e.xhr,
                                                l = o?.[tM];
                                            if (!o || o.__sentry_own_request__ || !l) return;
                                            let {
                                                url: s,
                                                method: u
                                            } = l, c = (0, nC.hasSpansEnabled)() && t(s);
                                            if (e.endTimestamp) {
                                                let t = o.__sentry_xhr_span_id__;
                                                if (!t) return;
                                                let n = r[t];
                                                n && (c && void 0 !== l.status_code && ((0, nH.setHttpStatus)(n, l.status_code), n.end(), i?.(n, {
                                                    headers: aJ(function(e) {
                                                        let t;
                                                        try {
                                                            t = e.getAllResponseHeaders()
                                                        } catch (t) {
                                                            return n_ && E.debug.error(t, "Failed to get xhr response headers", e), {}
                                                        }
                                                        return t ? t.split("\r\n").reduce((e, t) => {
                                                            let [n, r] = t.split(": ");
                                                            return r && (e[n.toLowerCase()] = r), e
                                                        }, {}) : {}
                                                    }(o)),
                                                    error: e.error
                                                })), delete r[t]);
                                                return
                                            }
                                            let d = aV(s),
                                                f = d ? tR(d) : tR(s),
                                                p = d ? tL(d) : void 0,
                                                m = tL(s.split(/[?#]/, 1)[0]),
                                                h = (0, x.getClient)(),
                                                g = !!(0, j.getActiveSpan)(),
                                                v = g || !!h && ek(h),
                                                y = f?.host?.replace(/^.*@/, ""),
                                                b = tI(d || s),
                                                _ = b ? `${u} ${b}` : u,
                                                S = c && v ? n0({
                                                    name: h && ek(h) ? _ : `${u} ${m}`,
                                                    attributes: {
                                                        type: "xhr",
                                                        [ty.HTTP_REQUEST_METHOD]: u,
                                                        [ty.URL_FULL]: tk(p),
                                                        [ty.SERVER_ADDRESS]: y,
                                                        [ty.URL_DOMAIN]: b,
                                                        [F.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser",
                                                        [ty.SENTRY_OP]: ra,
                                                        [ty.URL_QUERY]: tN(tC(f?.search)),
                                                        [ty.URL_FRAGMENT]: tO(f?.hash)
                                                    }
                                                }) : new nU.SentryNonRecordingSpan,
                                                w = nK(S) && g ? void 0 : S;
                                            return c && !v && h?.recordDroppedEvent("no_parent_span", "span"), o.__sentry_xhr_span_id__ = S.spanContext().spanId, r[o.__sentry_xhr_span_id__] = S, n(s) && function(e, t, n) {
                                                let {
                                                    "sentry-trace": r,
                                                    baggage: a,
                                                    traceparent: i
                                                } = aG({
                                                    span: t,
                                                    propagateTraceparent: n
                                                });
                                                r && function(e, t, n, r) {
                                                    let a = e.__sentry_xhr_v3__?.request_headers;
                                                    if (!a?.["sentry-trace"] && e.setRequestHeader) try {
                                                        if (e.setRequestHeader("sentry-trace", t), r && !a?.traceparent && e.setRequestHeader("traceparent", r), n) {
                                                            let t = a?.baggage;
                                                            t && t.split(",").some(e => e.trim().startsWith("sentry-")) || e.setRequestHeader("baggage", n)
                                                        }
                                                    } catch {}
                                                }(e, r, a, i)
                                            }(o, (0, nC.hasSpansEnabled)() && v ? w : void 0, a), h && h.emit("beforeOutgoingRequestSpan", S, e), S
                                        }(t, u, c, d, f, s);
                                        n && (i && aK(n, e), l?.(n, {
                                            headers: aJ(t.xhr.__sentry_xhr_v3__?.request_headers)
                                        }))
                                    })
                                }(e, {
                                    traceFetch: S,
                                    traceXHR: T,
                                    tracePropagationTargets: e.getOptions().tracePropagationTargets,
                                    shouldCreateSpanForRequest: k,
                                    enableHTTPTimings: N,
                                    onRequestSpanStart: U,
                                    onRequestSpanEnd: z
                                })
                        }
                    }
                })({
                    ...e,
                    instrumentNavigation: !1,
                    instrumentPageLoad: !1,
                    onRequestSpanStart(...t) {
                        let [n, {
                            headers: r
                        }] = t;
                        return r?.get("next-router-prefetch") && n?.setAttribute("http.request.prefetch", !0), e.onRequestSpanStart?.(...t)
                    }
                }),
                {
                    instrumentPageLoad: n = !0,
                    instrumentNavigation: r = !0
                } = e;
            return {
                ...t,
                afterAllSetup(e) {
                    !rp() && (r && function(e) {
                        if (!ti.document.getElementById("__NEXT_DATA__")) {
                            let t, n, r;
                            _ = (t, n) => {
                                let r = S.default.env._sentryBasePath ?? id._sentryBasePath,
                                    a = r && t.startsWith("/") && !t.startsWith(r) ? `${r}${t}` : t,
                                    i = io(new URL(a, ti.location.href).pathname),
                                    o = ii(i),
                                    l = o ?? (ek(e) ? ro : i);
                                "router-patch" === is && (is = "transition-start-hook");
                                let s = iu.current;
                                s ? (s.updateName(l), s.setAttributes({
                                    "navigation.type": `router.${n}`,
                                    [ty.SENTRY_SEGMENT_NAME_SOURCE]: o ? "route" : "url",
                                    ...o && {
                                        [ty.URL_TEMPLATE]: o
                                    }
                                }), il(s, i, a), iu.current = void 0) : a0(e, {
                                    name: l,
                                    attributes: {
                                        [ty.SENTRY_OP]: n3,
                                        [F.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.navigation.nextjs.app_router_instrumentation",
                                        [ty.SENTRY_SEGMENT_NAME_SOURCE]: o ? "route" : "url",
                                        "navigation.type": `router.${n}`,
                                        ...o && {
                                            [ty.URL_TEMPLATE]: o
                                        }
                                    }
                                }, {
                                    url: a5(a)
                                })
                            }, ti.addEventListener("popstate", () => {
                                let t, n = io(ti.location.pathname),
                                    r = ii(n),
                                    a = r ?? (ek(e) ? ro : n),
                                    i = (clearTimeout(y), t = v, v = void 0, t);
                                !i && iu.current?.isRecording() ? (iu.current.updateName(a), iu.current.setAttribute(ty.SENTRY_SEGMENT_NAME_SOURCE, r ? "route" : "url"), r && iu.current.setAttribute(ty.URL_TEMPLATE, r), il(iu.current, n, ti.location.href)) : iu.current = a0(e, {
                                    name: a,
                                    startTime: i?.startTime,
                                    attributes: {
                                        [F.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.navigation.nextjs.app_router_instrumentation",
                                        [ty.SENTRY_SEGMENT_NAME_SOURCE]: r ? "route" : "url",
                                        "navigation.type": i?.navigationType ?? "browser.popstate",
                                        ...r && {
                                            [ty.URL_TEMPLATE]: r
                                        }
                                    }
                                }, {
                                    url: ti.location.href
                                })
                            }), t = !1, n = 0, r = setInterval(() => {
                                n++;
                                let a = ic?.next?.router;
                                if (t || n > 500) clearInterval(r);
                                else if (a) {
                                    clearInterval(r), t = !0, im(e, a, iu);
                                    let n = ic.next;
                                    n && (ic.next = new Proxy(n, {
                                        set: (t, n, r) => ("router" === n && "object" == typeof r && null !== r && im(e, r, iu), t[n] = r, !0)
                                    }))
                                }
                            }, 20)
                        }
                    }(e), t.afterAllSetup(e), n && function(e) {
                        if (ti.document.getElementById("__NEXT_DATA__")) ! function(e) {
                            let {
                                route: t,
                                params: n,
                                sentryTrace: r,
                                baggage: a
                            } = function() {
                                let e, t = ti.document.getElementById("__NEXT_DATA__");
                                if (t?.innerHTML) try {
                                    e = JSON.parse(t.innerHTML)
                                } catch {
                                    nP && E.debug.warn("Could not extract __NEXT_DATA__")
                                }
                                if (!e) return {};
                                let n = {},
                                    {
                                        page: r,
                                        query: a,
                                        props: i
                                    } = e;
                                return n.route = r, n.params = a, i?.pageProps && (n.sentryTrace = i.pageProps._sentryTraceData, n.baggage = i.pageProps._sentryBaggage), n
                            }(), i = (0, nA.parseBaggageHeader)(a), o = t || (ek(e) ? ri : ti.location.pathname);
                            i?.["sentry-transaction"] && "/_error" === o && (o = (o = i["sentry-transaction"]).replace(/^(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS|TRACE|CONNECT)\s+/i, "")), aZ(e, {
                                name: o,
                                attributes: {
                                    [ty.SENTRY_OP]: n2,
                                    [F.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.pageload.nextjs.pages_router_instrumentation",
                                    [ty.SENTRY_SEGMENT_NAME_SOURCE]: t ? "route" : "url",
                                    ...t && {
                                        [ty.URL_TEMPLATE]: t
                                    },
                                    ...n && {
                                        ...n
                                    }
                                }
                            }, {
                                sentryTrace: r,
                                baggage: a
                            })
                        }(e);
                        else {
                            let t, n;
                            aZ(e, {
                                name: (n = ii(t = io(ti.location.pathname))) ?? (ek(e) ? ri : t),
                                attributes: {
                                    [ty.SENTRY_OP]: n2,
                                    [F.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.pageload.nextjs.app_router_instrumentation",
                                    [ty.SENTRY_SEGMENT_NAME_SOURCE]: n ? "route" : "url",
                                    ...n && {
                                        [ty.URL_TEMPLATE]: n
                                    }
                                }
                            })
                        }
                    }(e))
                }
            }
        }()), a = iE._sentryRewriteFramesAssetPrefixPath || "", i = S.default.env._sentryAssetPrefix || iE._sentryAssetPrefix, o = S.default.env._sentryBasePath || iE._sentryBasePath, l = "true" === S.default.env._experimentalThirdPartyOriginStackFrames || "true" === iE._experimentalThirdPartyOriginStackFrames, r.push((({
            assetPrefix: e,
            basePath: t,
            rewriteFramesAssetPrefixPath: n,
            experimentalThirdPartyOriginStackFrames: r
        }) => ({
            ...((e = {}) => {
                let t = e.root,
                    n = e.prefix || "app:///",
                    r = "window" in w.GLOBAL_OBJ && !!w.GLOBAL_OBJ.window,
                    a = e.iteratee || function({
                        isBrowser: e,
                        root: t,
                        prefix: n
                    }) {
                        return r => {
                            if (!r.filename) return r;
                            let a = /^[a-zA-Z]:\\/.test(r.filename) || r.filename.includes("\\") && !r.filename.includes("/"),
                                i = /^\//.test(r.filename);
                            if (e) {
                                if (t) {
                                    let e = r.filename;
                                    0 === e.indexOf(t) && (r.filename = e.replace(t, n))
                                }
                            } else if (a || i) {
                                let e, i, o = a ? r.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : r.filename,
                                    l = t ? function(e, t) {
                                        e = ig(e).slice(1), t = ig(t).slice(1);
                                        let n = iv(e.split("/")),
                                            r = iv(t.split("/")),
                                            a = Math.min(n.length, r.length),
                                            i = a;
                                        for (let e = 0; e < a; e++)
                                            if (n[e] !== r[e]) {
                                                i = e;
                                                break
                                            } let o = [];
                                        for (let e = i; e < n.length; e++) o.push("..");
                                        return (o = o.concat(r.slice(i))).join("/")
                                    }(t, o) : (e = o.length > 1024 ? `<truncated>${o.slice(-1024)}` : o, (i = ih.exec(e)) ? i.slice(1) : [])[2] || "";
                                r.filename = `${n}${l}`
                            }
                            return r
                        }
                    }({
                        isBrowser: r,
                        root: t,
                        prefix: n
                    });
                return {
                    name: "RewriteFrames",
                    processEvent(e) {
                        let t = e;
                        return e.exception && Array.isArray(e.exception.values) && (t = function(e) {
                            try {
                                return {
                                    ...e,
                                    exception: {
                                        ...e.exception,
                                        values: e.exception.values.map(e => {
                                            var t;
                                            return {
                                                ...e,
                                                ...e.stacktrace && {
                                                    stacktrace: {
                                                        ...t = e.stacktrace,
                                                        frames: t?.frames?.map(e => a(e))
                                                    }
                                                }
                                            }
                                        })
                                    }
                                }
                            } catch {
                                return e
                            }
                        }(t)), t
                    }
                }
            })({
                iteratee: a => {
                    if (r) {
                        let n = "u" > typeof window && window.location ? window.location.origin : "";
                        if (a.filename?.startsWith(n) && !a.filename.endsWith(".js")) return a;
                        if (e) a.filename?.startsWith(e) && (a.filename = a.filename.replace(e, "app://"));
                        else if (t) try {
                            let {
                                origin: e
                            } = new URL(a.filename);
                            e === n && (a.filename = a.filename?.replace(e, "app://").replace(t, ""))
                        } catch {}
                    } else try {
                        let {
                            origin: e
                        } = new URL(a.filename);
                        a.filename = a.filename?.replace(e, "app://").replace(n, "")
                    } catch {}
                    return r ? a.filename?.includes("/_next") && (a.filename = decodeURI(a.filename)) : a.filename?.startsWith("app:///_next") && (a.filename = decodeURI(a.filename)), a.filename?.match(iy) && (a.in_app = !1), a
                }
            }),
            name: "NextjsClientStackFrameNormalization"
        }))({
            assetPrefix: i,
            basePath: o,
            rewriteFramesAssetPrefixPath: a,
            experimentalThirdPartyOriginStackFrames: l
        })), r),
        release: "dd9ed1e831deaa7bdfbceb98a0c535c381822fc1",
        ...e
    };
    ! function(e) {
        let t = S.default.env._sentryRewritesTunnelPath || i_._sentryRewritesTunnelPath;
        if (t && e.dsn) {
            let n = (0, ei.dsnFromString)(e.dsn);
            if (!n) return;
            let r = n.host.match(/^o(\d+)\.ingest(?:\.([a-z]{2}))?\.sentry\.io$/);
            if (r) {
                let a = r[1],
                    i = r[2],
                    o = `${t}?o=${a}&p=${n.projectId}`;
                i && (o += `&r=${i}`), e.tunnel = o, nP && E.debug.log(`Tunneling events to "${o}"`)
            } else nP && E.debug.warn("Provided DSN is not a Sentry SaaS DSN. Will not tunnel events.")
        }
    }(u), k(u, "nextjs", ["nextjs", "react"]), u.ignoreSpans = [...u.ignoreSpans || [], /^\/404$/], k(t = {
        ...u
    }, "react"), (0, N.setContext)("react", {
        version: nN.version
    }), n = function(e = {}) {
        var t;
        let n, r = !e.skipBrowserExtensionCheck && !! function() {
                if (void 0 === ti.window || ti.nw) return !1;
                let e = ti.chrome || ti.browser;
                if (!e?.runtime?.id) return !1;
                let t = ta();
                return !(ti === ti.top && /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(t))
            }() && (tq && (0, E.consoleSandbox)(() => {
                console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/")
            }), !0),
            a = null == e.defaultIntegrations ? nk() : e.defaultIntegrations,
            i = function(e) {
                let t, n, r = e.defaultIntegrations || [],
                    a = e.integrations;
                if (r.forEach(e => {
                        e.isDefaultInstance = !0
                    }), Array.isArray(a)) t = [...r, ...a];
                else if ("function" == typeof a) {
                    let e = a(r);
                    t = Array.isArray(e) ? e : [e]
                } else t = r;
                return n = {}, t.forEach(e => {
                    let {
                        name: t
                    } = e, r = n[t];
                    r && !r.isDefaultInstance && e.isDefaultInstance || (n[t] = e)
                }), Object.values(n)
            }({
                integrations: e.integrations,
                defaultIntegrations: a
            }),
            o = {
                ...e,
                enabled: !r && e.enabled,
                stackParser: (0, q.stackParserFromStackParserOptions)(e.stackParser || ny),
                integrations: i,
                transport: e.transport || nE
            };
        return (0, ea.setNormalizeStringifier)(nT), !0 === o.debug && (P.DEBUG_BUILD ? E.debug.enable() : (0, E.consoleSandbox)(() => {
            console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
        })), (0, x.getCurrentScope)().update(o.initialScope), t = n = new td(o), (0, x.getCurrentScope)().setClient(t), n.init(), n
    }(t), (0, ea.setNormalizeStringifier)(nx);
    let b = (e, t) => (function e(t, n, r = 0) {
        if (!(0, ed.isError)(t)) return !1;
        let a = t.digest;
        return !!("string" == typeof a && n(a)) || r < 5 && "cause" in t && e(t.cause, n, r + 1)
    })(t?.originalException, e => e.startsWith("NEXT_REDIRECT;")) || e.exception?.values?.[0]?.value === "NEXT_REDIRECT" ? null : e;
    b.id = "NextRedirectErrorFilter", (0, N.addEventProcessor)(b);
    try {
        (0, x.getGlobalScope)().setTag("turbopack", !0)
    } catch {}
}({
    dsn: S.default.env.SENTRY_DSN || "https://ce7d682306884c779d3c5d683a430b07@o488710.ingest.sentry.io/4503931302641664",
    environment: S.default.env.VERCEL_ENV || S.default.env.NEXT_PUBLIC_VERCEL_ENV,
    integrations: [{
        name: "BrowserProfiling",
        setup(e) {
            let t = e.getOptions(),
                n = new iC;
            t.profileLifecycle || (t.profileLifecycle = "manual");
            let r = (0, j.getActiveSpan)(),
                a = r && (0, j.getRootSpan)(r),
                i = t.profileLifecycle;
            if (e.on("startUIProfiler", () => n.start()), e.on("stopUIProfiler", () => n.stop()), "manual" === i) n.initialize(e);
            else if ("trace" === i) {
                if (!(0, nC.hasSpansEnabled)(t)) {
                    tq && E.debug.warn("[Profiling] `profileLifecycle` is 'trace' but tracing is disabled. Set a `tracesSampleRate` or `tracesSampler` to enable span tracing.");
                    return
                }
                n.initialize(e), a && n.notifyRootSpanActive(a), ti.setTimeout(() => {
                    let e = (0, j.getActiveSpan)(),
                        t = e && (0, j.getRootSpan)(e);
                    t && n.notifyRootSpanActive(t)
                }, 0)
            }
        }
    }, ((e = {}) => {
        let t = e.limit ?? 10;
        return {
            name: "ZodErrors",
            processEvent: (n, r) => (function(e, t = !1, n, r) {
                var a;
                if (!n.exception?.values || !r.originalException || (a = r.originalException, !((0, ed.isError)(a) && "ZodError" === a.name && Array.isArray(a.issues))) || 0 === r.originalException.issues.length) return n;
                try {
                    let a = (t ? r.originalException.issues : r.originalException.issues.slice(0, e)).map(iO);
                    return t && (Array.isArray(r.attachments) || (r.attachments = []), r.attachments.push({
                        filename: "zod_issues.json",
                        data: JSON.stringify({
                            issues: a
                        })
                    })), {
                        ...n,
                        exception: {
                            ...n.exception,
                            values: [{
                                ...n.exception.values[0],
                                value: function(e) {
                                    let t = new Set;
                                    for (let n of e.issues) {
                                        let e = n.path.map(e => "number" == typeof e ? "<array>" : e).join(".");
                                        e.length > 0 && t.add(e)
                                    }
                                    let n = Array.from(t);
                                    if (0 === n.length) {
                                        let t = "variable";
                                        if (e.issues.length > 0) {
                                            let n = e.issues[0];
                                            void 0 !== n && "expected" in n && "string" == typeof n.expected && (t = n.expected)
                                        }
                                        return `Failed to validate ${t}`
                                    }
                                    return `Failed to validate keys: ${(0,A.truncate)(n.join(", "),100)}`
                                }(r.originalException)
                            }, ...n.exception.values.slice(1)]
                        },
                        extra: {
                            ...n.extra,
                            "zoderror.issues": a.slice(0, e)
                        }
                    }
                } catch (e) {
                    return {
                        ...n,
                        extra: {
                            ...n.extra,
                            "zoderrors sentry integration parse error": {
                                message: "an exception was thrown while processing ZodError within applyZodErrorsToEvent()",
                                error: e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : "unknown"
                            }
                        }
                    }
                }
            })(t, e.saveZodIssuesAsAttachment, n, r)
        }
    })()],
    sampleRate: .9,
    tracesSampleRate: .005,
    profileSessionSampleRate: .005
}), e.s(["onRouterTransitionStart", 0, function(e, t) {
    _ && _(e, t)
}], 427075)
}, 367198, (e, t, n) => {
    "use strict";
    {
        let n = e.f({
            "private-next-instrumentation-client": {
                id: () => 427075,
                module: () => e.r(427075)
            }
        })("private-next-instrumentation-client");
        t.exports = Array.isArray(n) ? n : [n]
    }
}, 776027, (e, t, n) => {
    "trimStart" in String.prototype || (String.prototype.trimStart = String.prototype.trimLeft), "trimEnd" in String.prototype || (String.prototype.trimEnd = String.prototype.trimRight), "description" in Symbol.prototype || Object.defineProperty(Symbol.prototype, "description", {
        configurable: !0,
        get: function() {
            var e = /\((.*)\)/.exec(this.toString());
            return e ? e[1] : void 0
        }
    }), Array.prototype.flat || (Array.prototype.flat = function(e, t) {
        return t = this.concat.apply([], this), e > 1 && t.some(Array.isArray) ? t.flat(e - 1) : t
    }, Array.prototype.flatMap = function(e, t) {
        return this.map(e, t).flat()
    }), Promise.prototype.finally || (Promise.prototype.finally = function(e) {
        if ("function" != typeof e) return this.then(e, e);
        var t = this.constructor || Promise;
        return this.then(function(n) {
            return t.resolve(e()).then(function() {
                return n
            })
        }, function(n) {
            return t.resolve(e()).then(function() {
                throw n
            })
        })
    }), Object.fromEntries || (Object.fromEntries = function(e) {
        return Array.from(e).reduce(function(e, t) {
            return e[t[0]] = t[1], e
        }, {})
    }), Array.prototype.at || (Array.prototype.at = function(e) {
        var t = Math.trunc(e) || 0;
        if (t < 0 && (t += this.length), !(t < 0 || t >= this.length)) return this[t]
    }), Object.hasOwn || (Object.hasOwn = function(e, t) {
        if (null == e) throw TypeError("Cannot convert undefined or null to object");
        return Object.prototype.hasOwnProperty.call(Object(e), t)
    }), "canParse" in URL || (URL.canParse = function(e, t) {
        try {
            return new URL(e, t), !0
        } catch (e) {
            return !1
        }
    })
}, 493451, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), e.r(776027), ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }), Object.assign(n.default, n), t.exports = n.default)
}, 473297, (e, t, n) => {
    "use strict";

    function r(e, t) {
        var n = e.length;
        for (e.push(t); 0 < n;) {
            var r = n - 1 >>> 1,
                a = e[r];
            if (0 < o(a, t)) e[r] = t, e[n] = a, n = r;
            else break
        }
    }

    function a(e) {
        return 0 === e.length ? null : e[0]
    }

    function i(e) {
        if (0 === e.length) return null;
        var t = e[0],
            n = e.pop();
        if (n !== t) {
            e[0] = n;
            for (var r = 0, a = e.length, i = a >>> 1; r < i;) {
                var l = 2 * (r + 1) - 1,
                    s = e[l],
                    u = l + 1,
                    c = e[u];
                if (0 > o(s, n)) u < a && 0 > o(c, s) ? (e[r] = c, e[u] = n, r = u) : (e[r] = s, e[l] = n, r = l);
                else if (u < a && 0 > o(c, n)) e[r] = c, e[u] = n, r = u;
                else break
            }
        }
        return t
    }

    function o(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id
    }
    if (n.unstable_now = void 0, "object" == typeof performance && "function" == typeof performance.now) {
        var l, s = performance;
        n.unstable_now = function() {
            return s.now()
        }
    } else {
        var u = Date,
            c = u.now();
        n.unstable_now = function() {
            return u.now() - c
        }
    }
    var d = [],
        f = [],
        p = 1,
        m = null,
        h = 3,
        g = !1,
        v = !1,
        y = !1,
        b = !1,
        _ = "function" == typeof setTimeout ? setTimeout : null,
        S = "function" == typeof clearTimeout ? clearTimeout : null,
        E = "u" > typeof setImmediate ? setImmediate : null;

    function w(e) {
        for (var t = a(f); null !== t;) {
            if (null === t.callback) i(f);
            else if (t.startTime <= e) i(f), t.sortIndex = t.expirationTime, r(d, t);
            else break;
            t = a(f)
        }
    }

    function T(e) {
        if (y = !1, w(e), !v)
            if (null !== a(d)) v = !0, k || (k = !0, l());
            else {
                var t = a(f);
                null !== t && L(T, t.startTime - e)
            }
    }
    var k = !1,
        N = -1,
        x = 5,
        P = -1;

    function C() {
        return !!b || !(n.unstable_now() - P < x)
    }

    function O() {
        if (b = !1, k) {
            var e = n.unstable_now();
            P = e;
            var t = !0;
            try {
                e: {
                    v = !1,
                    y && (y = !1, S(N), N = -1),
                    g = !0;
                    var r = h;
                    try {
                        t: {
                            for (w(e), m = a(d); null !== m && !(m.expirationTime > e && C());) {
                                var o = m.callback;
                                if ("function" == typeof o) {
                                    m.callback = null, h = m.priorityLevel;
                                    var s = o(m.expirationTime <= e);
                                    if (e = n.unstable_now(), "function" == typeof s) {
                                        m.callback = s, w(e), t = !0;
                                        break t
                                    }
                                    m === a(d) && i(d), w(e)
                                } else i(d);
                                m = a(d)
                            }
                            if (null !== m) t = !0;
                            else {
                                var u = a(f);
                                null !== u && L(T, u.startTime - e), t = !1
                            }
                        }
                        break e
                    }
                    finally {
                        m = null, h = r, g = !1
                    }
                }
            }
            finally {
                t ? l() : k = !1
            }
        }
    }
    if ("function" == typeof E) l = function() {
        E(O)
    };
    else if ("u" > typeof MessageChannel) {
        var I = new MessageChannel,
            R = I.port2;
        I.port1.onmessage = O, l = function() {
            R.postMessage(null)
        }
    } else l = function() {
        _(O, 0)
    };

    function L(e, t) {
        N = _(function() {
            e(n.unstable_now())
        }, t)
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(e) {
        e.callback = null
    }, n.unstable_forceFrameRate = function(e) {
        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : x = 0 < e ? Math.floor(1e3 / e) : 5
    }, n.unstable_getCurrentPriorityLevel = function() {
        return h
    }, n.unstable_next = function(e) {
        switch (h) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default:
                t = h
        }
        var n = h;
        h = t;
        try {
            return e()
        } finally {
            h = n
        }
    }, n.unstable_requestPaint = function() {
        b = !0
    }, n.unstable_runWithPriority = function(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                e = 3
        }
        var n = h;
        h = e;
        try {
            return t()
        } finally {
            h = n
        }
    }, n.unstable_scheduleCallback = function(e, t, i) {
        var o = n.unstable_now();
        switch (i = "object" == typeof i && null !== i && "number" == typeof(i = i.delay) && 0 < i ? o + i : o, e) {
            case 1:
                var s = -1;
                break;
            case 2:
                s = 250;
                break;
            case 5:
                s = 0x3fffffff;
                break;
            case 4:
                s = 1e4;
                break;
            default:
                s = 5e3
        }
        return s = i + s, e = {
            id: p++,
            callback: t,
            priorityLevel: e,
            startTime: i,
            expirationTime: s,
            sortIndex: -1
        }, i > o ? (e.sortIndex = i, r(f, e), null === a(d) && e === a(f) && (y ? (S(N), N = -1) : y = !0, L(T, i - o))) : (e.sortIndex = s, r(d, e), v || g || (v = !0, k || (k = !0, l()))), e
    }, n.unstable_shouldYield = C, n.unstable_wrapCallback = function(e) {
        var t = h;
        return function() {
            var n = h;
            h = t;
            try {
                return e.apply(this, arguments)
            } finally {
                h = n
            }
        }
    }
}, 321530, (e, t, n) => {
    "use strict";
    t.exports = e.r(473297)
}, 80171, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "appBootstrap", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let r = e.r(324443),
        a = e.r(595384);

    function i(e) {
        var t, n;
        let i = (0, r.getAssetPrefix)();
        t = self.__next_s, n = () => {
            e(i)
        }, t && t.length ? t.reduce((e, [t, n]) => e.then(() => new Promise((e, r) => {
            let i = document.createElement("script");
            n && (0, a.setAttributesFromProps)(i, n), t ? (i.src = t, i.onload = () => e(), i.onerror = r) : n && (i.innerHTML = n.children, setTimeout(e)), document.head.appendChild(i)
        })), Promise.resolve()).catch(e => {
            console.error(e)
        }).then(() => {
            n()
        }) : n()
    }
    window.next = {
        version: "16.3.2",
        appDir: !0
    }, ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }), Object.assign(n.default, n), t.exports = n.default)
}, 301380, (e, t, n) => {
    "use strict";
    let r, a, i, o;
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "hydrate", {
        enumerable: !0,
        get: function() {
            return F
        }
    });
    let l = e.r(836437),
        s = e.r(785328);
    e.r(493451);
    let u = l._(e.r(943352)),
        c = l._(e.r(409781)),
        d = e.r(77821),
        f = e.r(477706),
        p = e.r(537883),
        m = e.r(49832),
        h = e.r(952268),
        g = e.r(897716),
        v = e.r(643251),
        y = l._(e.r(632635)),
        b = e.r(994644);
    e.r(751887);
    let _ = e.r(665956),
        S = e.r(547981),
        E = e.r(499940),
        w = e.r(372814),
        T = d.createFromReadableStream,
        k = d.createFromFetch,
        N = document,
        x = self.__next_instant_test ? self.__next_instant_test : void 0,
        P = new TextEncoder,
        C = !1,
        O = !1,
        I = null;

    function R(e) {
        if (0 === e[0]) i = [];
        else if (1 === e[0]) {
            if (!i) throw Object.defineProperty(Error("Unexpected server data: missing bootstrap script."), "__NEXT_ERROR_CODE", {
                value: "E18",
                enumerable: !1,
                configurable: !0
            });
            o ? o.enqueue(P.encode(e[1])) : i.push(e[1])
        } else if (2 === e[0]) I = e[1];
        else if (3 === e[0]) {
            if (!i) throw Object.defineProperty(Error("Unexpected server data: missing bootstrap script."), "__NEXT_ERROR_CODE", {
                value: "E18",
                enumerable: !1,
                configurable: !0
            });
            let n = atob(e[1]),
                r = new Uint8Array(n.length);
            for (var t = 0; t < n.length; t++) r[t] = n.charCodeAt(t);
            o ? o.enqueue(r) : i.push(r)
        }
    }
    let L = function() {
        o && !O && (o.close(), O = !0, i = void 0), C = !0
    };
    "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", L, !1) : setTimeout(L);
    let A = self.__next_f = self.__next_f || [];
    A.forEach(R), A.length = 0, A.push = R;
    let D = new ReadableStream({
        start(e) {
            i && (i.forEach(t => {
                e.enqueue("string" == typeof t ? P.encode(t) : t)
            }), C && !O) && (null === e.desiredSize || e.desiredSize < 0 ? x || e.error(Object.defineProperty(Error("The connection to the page was unexpectedly closed, possibly due to the stop button being clicked, loss of Wi-Fi, or an unstable internet connection."), "__NEXT_ERROR_CODE", {
                value: "E117",
                enumerable: !1,
                configurable: !0
            })) : e.close(), O = !0, i = void 0), o = e
        }
    });
    if (x) a = Promise.resolve(k(x, {
        callServer: h.callServer,
        findSourceMapURL: g.findSourceMapURL,
        debugChannel: r,
        unstable_allowPartialStream: !0
    })).then(async e => (0, _.createInitialRSCPayloadFromFallbackPrerender)(await x, e));
    else if (window.__NEXT_CLIENT_RESUME) {
        let e = window.__NEXT_CLIENT_RESUME;
        a = Promise.resolve(k(e, {
            callServer: h.callServer,
            findSourceMapURL: g.findSourceMapURL,
            debugChannel: r
        })).then(async t => (0, _.createInitialRSCPayloadFromFallbackPrerender)(await e, t))
    } else a = T(D, {
        callServer: h.callServer,
        findSourceMapURL: g.findSourceMapURL,
        debugChannel: r,
        startTime: 0
    });

    function M({
        initialRSCPayload: e,
        actionQueue: t,
        webSocket: n,
        staticIndicatorState: r
    }) {
        return (0, s.jsx)(y.default, {
            actionQueue: t,
            globalErrorState: e.G,
            webSocket: n,
            staticIndicatorState: r
        })
    }
    let U = c.default.Fragment;

    function z({
        children: e
    }) {
        return e
    }
    let B = {
        onDefaultTransitionIndicator: function() {
            return () => {}
        },
        onRecoverableError: p.onRecoverableError,
        onCaughtError: m.onCaughtError,
        onUncaughtError: m.onUncaughtError
    };
    async function F(e, t) {
        let n, r, i = await a;
        i.b ? (0, E.setNavigationBuildId)(i.b) : (0, E.setNavigationBuildId)((0, S.getDeploymentId)()), (0, w.initializeRouterTransitionModules)(e);
        let o = Date.now(),
            l = (0, v.createMutableActionQueue)((0, b.createInitialRouterState)({
                navigatedAt: o,
                initialRSCPayload: i,
                initialFlightStreamForCache: null,
                location: window.location
            })),
            d = (0, s.jsx)(U, {
                children: (0, s.jsx)(f.HeadManagerContext.Provider, {
                    value: {
                        appDir: !0
                    },
                    children: (0, s.jsx)(z, {
                        children: (0, s.jsx)(M, {
                            initialRSCPayload: i,
                            actionQueue: l,
                            webSocket: r,
                            staticIndicatorState: n
                        })
                    })
                })
            });
        "__next_error__" === document.documentElement.id ? u.default.createRoot(N, B).render(d) : c.default.startTransition(() => {
            u.default.hydrateRoot(N, d, {
                ...B,
                formState: I
            })
        })
    }("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }), Object.assign(n.default, n), t.exports = n.default)
}, 702369, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), e.r(579606);
    let r = e.r(80171);
    e.r(537883), window.next.turbopack = !0, self.__webpack_hash__ = "";
    let a = e.r(367198);
    (0, r.appBootstrap)(t => {
        let {
            hydrate: n
        } = e.r(301380);
        n(a, t)
    }), ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }), Object.assign(n.default, n), t.exports = n.default)
}, 324443, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "getAssetPrefix", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let r = e.r(157682);

    function a() {
        let e = document.currentScript;
        if (!(e instanceof HTMLScriptElement)) throw Object.defineProperty(new r.InvariantError(`Expected document.currentScript to be a <script> element. Received ${e} instead.`), "__NEXT_ERROR_CODE", {
            value: "E783",
            enumerable: !1,
            configurable: !0
        });
        let {
            pathname: t
        } = new URL(e.src), n = t.indexOf("/_next/");
        if (-1 === n) throw Object.defineProperty(new r.InvariantError(`Expected document.currentScript src to contain '/_next/'. Received ${e.src} instead.`), "__NEXT_ERROR_CODE", {
            value: "E784",
            enumerable: !1,
            configurable: !0
        });
        return t.slice(0, n)
    }("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }), Object.assign(n.default, n), t.exports = n.default)
}, 12954, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "AppRouterAnnouncer", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let r = e.r(409781),
        a = e.r(42246),
        i = "next-route-announcer";

    function o({
        tree: e
    }) {
        let [t, n] = (0, r.useState)(null);
        (0, r.useEffect)(() => (n(function() {
            let e = document.getElementsByName(i)[0];
            if (e?.shadowRoot?.childNodes[0]) return e.shadowRoot.childNodes[0];
            {
                let e = document.createElement(i);
                e.style.cssText = "position:absolute";
                let t = document.createElement("div");
                return t.ariaLive = "assertive", t.id = "__next-route-announcer__", t.role = "alert", t.style.cssText = "position:absolute;border:0;height:1px;margin:-1px;padding:0;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap;word-wrap:normal", e.attachShadow({
                    mode: "open"
                }).appendChild(t), document.body.appendChild(e), t
            }
        }()), () => {
            let e = document.getElementsByTagName(i)[0];
            e?.isConnected && document.body.removeChild(e)
        }), []);
        let [l, s] = (0, r.useState)(""), u = (0, r.useRef)(void 0);
        return (0, r.useEffect)(() => {
            let e = "";
            if (document.title) e = document.title;
            else {
                let t = document.querySelector("h1");
                t && (e = t.innerText || t.textContent || "")
            }
            void 0 !== u.current && u.current !== e && s(e), u.current = e
        }, [e]), t ? (0, a.createPortal)(l, t) : null
    }("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }), Object.assign(n.default, n), t.exports = n.default)
}, 632635, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "default", {
        enumerable: !0,
        get: function() {
            return L
        }
    });
    let r = e.r(836437),
        a = e.r(56421),
        i = e.r(785328),
        o = a._(e.r(409781)),
        l = e.r(751887),
        s = e.r(793211),
        u = e.r(261111),
        c = e.r(613764),
        d = e.r(523930),
        f = e.r(696295),
        p = e.r(12954),
        m = e.r(334955),
        h = e.r(92307),
        g = e.r(371286),
        v = e.r(784181),
        y = e.r(57126),
        b = e.r(434295),
        _ = e.r(149265),
        S = e.r(643251),
        E = e.r(849117),
        w = e.r(347388),
        T = e.r(178321),
        k = r._(e.r(540421)),
        N = r._(e.r(345199)),
        x = e.r(177721);
    e.r(547981);
    let P = {};

    function C({
        appRouterState: e
    }) {
        return (0, o.useInsertionEffect)(() => {
            let {
                tree: t,
                pushRef: n,
                canonicalUrl: r,
                renderedSearch: a
            } = e, i = {
                ...n.preserveCustomHistoryState ? window.history.state : {},
                __NA: !0,
                __PRIVATE_NEXTJS_INTERNALS_TREE: {
                    tree: t,
                    renderedSearch: a
                }
            };
            n.pendingPush && (0, u.createHrefFromUrl)(new URL(window.location.href)) !== r ? (n.pendingPush = !1, window.history.pushState(i, "", r)) : window.history.replaceState(i, "", r), (0, f.setLastCommittedTree)(t)
        }, [e]), (0, o.useEffect)(() => {
            (0, T.pingVisibleLinks)(e.nextUrl, e.tree)
        }, [e.nextUrl, e.tree]), null
    }

    function O(e) {
        null == e && (e = {});
        let t = window.history.state,
            n = t?.__NA;
        n && (e.__NA = n);
        let r = t?.__PRIVATE_NEXTJS_INTERNALS_TREE;
        return r && (e.__PRIVATE_NEXTJS_INTERNALS_TREE = r), e
    }

    function I({
        headCacheNode: e
    }) {
        let t = null !== e ? e.head : null,
            n = null !== e ? e.prefetchHead : null,
            r = null !== n ? n : t;
        return (0, o.useDeferredValue)(t, r)
    }

    function R({
        actionQueue: e,
        globalError: t,
        webSocket: n,
        staticIndicatorState: r
    }) {
        let a, u = (0, d.useActionQueue)(e),
            {
                canonicalUrl: f
            } = u,
            {
                searchParams: _,
                pathname: T
            } = (0, o.useMemo)(() => {
                let e = new URL(f, "u" < typeof window ? "http://n" : window.location.href);
                return {
                    searchParams: e.searchParams,
                    pathname: (0, y.hasBasePath)(e.pathname) ? (0, v.removeBasePath)(e.pathname) : e.pathname
                }
            }, [f]);
        (0, o.useEffect)(() => {
            let e = (0, b.extractSourcePageFromFlightRouterState)(u.tree);
            void 0 !== e ? window.next.__internal_src_page = e : delete window.next.__internal_src_page
        }, [u.tree]), (0, o.useEffect)(() => {
            function e(e) {
                e.persisted && window.history.state?.__PRIVATE_NEXTJS_INTERNALS_TREE && (P.pendingMpaPath = void 0, (0, d.dispatchAppRouterAction)({
                    type: s.ACTION_RESTORE,
                    url: new URL(window.location.href),
                    historyState: window.history.state.__PRIVATE_NEXTJS_INTERNALS_TREE
                }))
            }
            return window.addEventListener("pageshow", e), () => {
                window.removeEventListener("pageshow", e)
            }
        }, []), (0, o.useEffect)(() => {
            function e(e) {
                let t = "reason" in e ? e.reason : e.error;
                if ((0, w.isRedirectError)(t)) {
                    e.preventDefault();
                    let n = (0, E.getURLFromRedirectError)(t);
                    "push" === (0, E.getRedirectTypeFromError)(t) ? S.publicAppRouterInstance.push(n, {}): S.publicAppRouterInstance.replace(n, {})
                }
            }
            return window.addEventListener("error", e), window.addEventListener("unhandledrejection", e), () => {
                window.removeEventListener("error", e), window.removeEventListener("unhandledrejection", e)
            }
        }, []);
        let {
            pushRef: N
        } = u;
        if (N.mpaNavigation) {
            if (P.pendingMpaPath !== f) {
                let e = window.location;
                N.pendingPush ? e.assign(f) : e.replace(f), P.pendingMpaPath = f
            }
            throw g.unresolvedThenable
        }(0, o.useEffect)(() => {
            let e = window.history.pushState.bind(window.history),
                t = window.history.replaceState.bind(window.history),
                n = e => {
                    let t = window.location.href,
                        n = window.history.state?.__PRIVATE_NEXTJS_INTERNALS_TREE;
                    (0, o.startTransition)(() => {
                        (0, d.dispatchAppRouterAction)({
                            type: s.ACTION_RESTORE,
                            url: new URL(e ?? t, t),
                            historyState: n
                        })
                    })
                };
            window.history.pushState = function(t, r, a) {
                return t?.__NA || t?._N || (t = O(t), a && n(a)), e(t, r, a)
            }, window.history.replaceState = function(e, r, a) {
                return e?.__NA || e?._N || (e = O(e), a && n(a)), t(e, r, a)
            };
            let r = e => {
                if (e.state) {
                    if (!e.state.__NA) return void window.location.reload();
                    (0, o.startTransition)(() => {
                        (0, S.dispatchTraverseAction)(window.location.href, e.state.__PRIVATE_NEXTJS_INTERNALS_TREE)
                    })
                }
            };
            return window.addEventListener("popstate", r), () => {
                window.history.pushState = e, window.history.replaceState = t, window.removeEventListener("popstate", r)
            }
        }, []);
        let {
            cache: L,
            tree: A,
            nextUrl: D,
            focusAndScrollRef: M,
            previousNextUrl: U
        } = u, z = (0, o.useMemo)(() => (0, h.findHeadInCache)(L, A[1]), [L, A]), B = (0, o.useMemo)(() => (0, b.getSelectedParams)(A), [A]), F = (0, o.useMemo)(() => ({
            parentTree: A,
            parentCacheNode: L,
            parentSegmentPath: null,
            parentParams: {},
            parentLoadingData: null,
            debugNameContext: "/",
            url: f,
            isActive: !0
        }), [A, L, f]), j = (0, o.useMemo)(() => ({
            tree: A,
            focusAndScrollRef: M,
            nextUrl: D,
            previousNextUrl: U
        }), [A, M, D, U]);
        if (null !== z) {
            let [e, t, n] = z;
            a = (0, i.jsx)(I, {
                headCacheNode: e
            }, "u" < typeof window ? n : t)
        } else a = null;
        let $ = (0, i.jsxs)(m.RedirectBoundary, {
            children: [a, (0, i.jsx)(x.RootLayoutBoundary, {
                children: L.rsc
            }), (0, i.jsx)(p.AppRouterAnnouncer, {
                tree: A
            })]
        });
        return $ = (0, i.jsx)(k.default, {
            errorComponent: t[0],
            errorStyles: t[1],
            children: $
        }), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(C, {
                appRouterState: u
            }), null, (0, i.jsx)(c.NavigationPromisesContext.Provider, {
                value: null,
                children: (0, i.jsx)(c.PathParamsContext.Provider, {
                    value: B,
                    children: (0, i.jsx)(c.PathnameContext.Provider, {
                        value: T,
                        children: (0, i.jsx)(c.SearchParamsContext.Provider, {
                            value: _,
                            children: (0, i.jsx)(l.GlobalLayoutRouterContext.Provider, {
                                value: j,
                                children: (0, i.jsx)(l.AppRouterContext.Provider, {
                                    value: S.publicAppRouterInstance,
                                    children: (0, i.jsx)(l.LayoutRouterContext.Provider, {
                                        value: F,
                                        children: $
                                    })
                                })
                            })
                        })
                    })
                })
            })]
        })
    }

    function L({
        actionQueue: e,
        globalErrorState: t,
        webSocket: n,
        staticIndicatorState: r
    }) {
        (0, _.useNavFailureHandler)();
        let a = (0, i.jsx)(R, {
            actionQueue: e,
            globalError: t,
            webSocket: n,
            staticIndicatorState: r
        });
        return (0, i.jsx)(k.default, {
            errorComponent: N.default,
            children: a
        })
    }("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }), Object.assign(n.default, n), t.exports = n.default)
}, 568034, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = {
        WarningIcon: function() {
            return s
        },
        errorStyles: function() {
            return o
        },
        errorThemeCss: function() {
            return l
        }
    };
    for (var a in r) Object.defineProperty(n, a, {
        enumerable: !0,
        get: r[a]
    });
    e.r(836437);
    let i = e.r(785328);
    e.r(409781);
    let o = {
            container: {
                fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            },
            card: {
                marginTop: "-32px",
                maxWidth: "325px",
                padding: "32px 28px",
                textAlign: "left"
            },
            icon: {
                marginBottom: "24px"
            },
            title: {
                fontSize: "24px",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                lineHeight: "32px",
                margin: "0 0 12px 0",
                color: "var(--next-error-title)"
            },
            message: {
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "21px",
                margin: "0 0 20px 0",
                color: "var(--next-error-message)"
            },
            form: {
                margin: 0
            },
            buttonGroup: {
                display: "flex",
                gap: "8px",
                alignItems: "center"
            },
            button: {
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: "32px",
                padding: "0 12px",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "20px",
                borderRadius: "6px",
                cursor: "pointer",
                color: "var(--next-error-btn-text)",
                background: "var(--next-error-btn-bg)",
                border: "var(--next-error-btn-border)"
            },
            buttonSecondary: {
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: "32px",
                padding: "0 12px",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "20px",
                borderRadius: "6px",
                cursor: "pointer",
                color: "var(--next-error-btn-secondary-text)",
                background: "var(--next-error-btn-secondary-bg)",
                border: "var(--next-error-btn-secondary-border)"
            },
            digestFooter: {
                position: "fixed",
                bottom: "32px",
                left: "0",
                right: "0",
                textAlign: "center",
                fontFamily: 'ui-monospace,SFMono-Regular,"SF Mono",Menlo,Consolas,monospace',
                fontSize: "12px",
                lineHeight: "18px",
                fontWeight: 400,
                margin: "0",
                color: "var(--next-error-digest)"
            }
        },
        l = `
:root {
  --next-error-bg: #fff;
  --next-error-text: #171717;
  --next-error-title: #171717;
  --next-error-message: #171717;
  --next-error-digest: #666666;
  --next-error-btn-text: #fff;
  --next-error-btn-bg: #171717;
  --next-error-btn-border: none;
  --next-error-btn-secondary-text: #171717;
  --next-error-btn-secondary-bg: transparent;
  --next-error-btn-secondary-border: 1px solid rgba(0,0,0,0.08);
}
@media (prefers-color-scheme: dark) {
  :root {
    --next-error-bg: #0a0a0a;
    --next-error-text: #ededed;
    --next-error-title: #ededed;
    --next-error-message: #ededed;
    --next-error-digest: #a0a0a0;
    --next-error-btn-text: #0a0a0a;
    --next-error-btn-bg: #ededed;
    --next-error-btn-border: none;
    --next-error-btn-secondary-text: #ededed;
    --next-error-btn-secondary-bg: transparent;
    --next-error-btn-secondary-border: 1px solid rgba(255,255,255,0.14);
  }
}
body { margin: 0; color: var(--next-error-text); background: var(--next-error-bg); }
`.replace(/\n\s*/g, "");

    function s() {
        return (0, i.jsx)("svg", {
            width: "32",
            height: "32",
            viewBox: "-0.2 -1.5 32 32",
            fill: "none",
            style: o.icon,
            children: (0, i.jsx)("path", {
                d: "M16.9328 0C18.0839 0.000116771 19.1334 0.658832 19.634 1.69531L31.4299 26.1309C32.0708 27.4588 31.1036 28.9999 29.6291 29H2.00215C0.527541 29 -0.439628 27.4588 0.201371 26.1309L11.9973 1.69531C12.4979 0.658823 13.5474 7.75066e-05 14.6984 0H16.9328ZM3.59493 26H28.0363L16.9328 3H14.6984L3.59493 26ZM15.8156 19C16.9202 19.0001 17.8156 19.8955 17.8156 21C17.8156 22.1045 16.9202 22.9999 15.8156 23C14.7111 23 13.8156 22.1046 13.8156 21C13.8156 19.8954 14.7111 19 15.8156 19ZM17.3156 16.5H14.3156V8.5H17.3156V16.5Z",
                fill: "var(--next-error-title)"
            })
        })
    }("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }), Object.assign(n.default, n), t.exports = n.default)
}, 345199, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "default", {
        enumerable: !0,
        get: function() {
            return o
        }
    }), e.r(836437);
    let r = e.r(785328);
    e.r(409781);
    let a = e.r(497491),
        i = e.r(568034),
        o = function({
            error: e
        }) {
            let t = e?.digest,
                n = !!t;
            return (0, a.handleISRError)({
                error: e
            }), (0, r.jsxs)("html", {
                id: "__next_error__",
                children: [(0, r.jsx)("head", {
                    children: (0, r.jsx)("style", {
                        dangerouslySetInnerHTML: {
                            __html: i.errorThemeCss
                        }
                    })
                }), (0, r.jsxs)("body", {
                    children: [(0, r.jsx)("div", {
                        style: i.errorStyles.container,
                        children: (0, r.jsxs)("div", {
                            style: i.errorStyles.card,
                            children: [(0, r.jsx)(i.WarningIcon, {}), (0, r.jsx)("h1", {
                                style: i.errorStyles.title,
                                children: "This page couldn’t load"
                            }), (0, r.jsx)("p", {
                                style: i.errorStyles.message,
                                children: n ? "A server error occurred. Reload to try again." : "Reload to try again, or go back."
                            }), (0, r.jsxs)("div", {
                                style: i.errorStyles.buttonGroup,
                                children: [(0, r.jsx)("form", {
                                    style: i.errorStyles.form,
                                    children: (0, r.jsx)("button", {
                                        type: "submit",
                                        style: i.errorStyles.button,
                                        children: "Reload"
                                    })
                                }), !n && (0, r.jsx)("button", {
                                    type: "button",
                                    style: i.errorStyles.buttonSecondary,
                                    onClick: () => {
                                        window.history.length > 1 ? window.history.back() : window.location.href = "/"
                                    },
                                    children: "Back"
                                })]
                            })]
                        })
                    }), t && (0, r.jsxs)("p", {
                        style: i.errorStyles.digestFooter,
                        children: ["ERROR ", t]
                    })]
                })]
            })
        };
    ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }), Object.assign(n.default, n), t.exports = n.default)
}, 49832, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = {
        onCaughtError: function() {
            return f
        },
        onUncaughtError: function() {
            return p
        }
    };
    for (var a in r) Object.defineProperty(n, a, {
        enumerable: !0,
        get: r[a]
    });
    let i = e.r(836437),
        o = e.r(125039),
        l = e.r(682413),
        s = e.r(844142),
        u = e.r(989489),
        c = i._(e.r(345199)),
        d = {
            decorateDevError: e => e,
            handleClientError: () => {},
            originConsoleError: console.error.bind(console)
        };

    function f(e, t) {
        let n, r = t.errorBoundary?.constructor;
        if (n = n || r === u.ErrorBoundaryHandler && t.errorBoundary.props.errorComponent === c.default) return p(e);
        (0, l.isBailoutToCSRError)(e) || (0, o.isNextRouterError)(e) || d.originConsoleError(e)
    }

    function p(e) {
        (0, l.isBailoutToCSRError)(e) || (0, o.isNextRouterError)(e) || (0, s.reportGlobalError)(e)
    }("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }), Object.assign(n.default, n), t.exports = n.default)
}, 265211, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = {
        GracefulDegradeBoundary: function() {
            return l
        },
        default: function() {
            return s
        }
    };
    for (var a in r) Object.defineProperty(n, a, {
        enumerable: !0,
        get: r[a]
    });
    let i = e.r(785328),
        o = e.r(409781);
    class l extends o.Component {
        constructor(e) {
            super(e), this.state = {
                hasError: !1
            }, this.rootHtml = "", this.htmlAttributes = {}, this.htmlRef = (0, o.createRef)()
        }
        static getDerivedStateFromError(e) {
            return {
                hasError: !0
            }
        }
        componentDidMount() {
            let e = this.htmlRef.current;
            this.state.hasError && e && Object.entries(this.htmlAttributes).forEach(([t, n]) => {
                e.setAttribute(t, n)
            })
        }
        render() {
            let {
                hasError: e
            } = this.state;
            return ("u" > typeof window && !this.rootHtml && (this.rootHtml = document.documentElement.innerHTML, this.htmlAttributes = function(e) {
                let t = {};
                for (let n = 0; n < e.attributes.length; n++) {
                    let r = e.attributes[n];
                    t[r.name] = r.value
                }
                return t
            }(document.documentElement)), e) ? (0, i.jsx)("html", {
                ref: this.htmlRef,
                suppressHydrationWarning: !0,
                dangerouslySetInnerHTML: {
                    __html: this.rootHtml
                }
            }) : this.props.children
        }
    }
    let s = l;
    ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }), Object.assign(n.default, n), t.exports = n.default)
}, 540421, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "default", {
        enumerable: !0,
        get: function() {
            return u
        }
    });
    let r = e.r(836437),
        a = e.r(785328);
    e.r(409781);
    let i = r._(e.r(265211)),
        o = e.r(989489),
        l = e.r(724246),
        s = "u" > typeof window && (0, l.isBot)(window.navigator.userAgent);

    function u({
        children: e,
        errorComponent: t,
        errorStyles: n,
        errorScripts: r
    }) {
        return s ? (0, a.jsx)(i.default, {
            children: e
        }) : (0, a.jsx)(o.ErrorBoundary, {
            errorComponent: t,
            errorStyles: n,
            errorScripts: r,
            children: e
        })
    }("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }), Object.assign(n.default, n), t.exports = n.default)
}, 994644, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "createInitialRouterState", {
        enumerable: !0,
        get: function() {
            return f
        }
    });
    let r = e.r(261111),
        a = e.r(434295),
        i = e.r(665956),
        o = e.r(203480),
        l = e.r(889669),
        s = e.r(112999),
        u = e.r(639031),
        c = e.r(502418),
        d = e.r(918175);

    function f({
        navigatedAt: e,
        initialRSCPayload: t,
        initialFlightStreamForCache: n,
        location: p
    }) {
        let {
            c: m,
            f: h,
            q: g,
            i: v,
            S: y,
            s: b,
            l: _,
            h: S,
            r: E,
            p: w,
            d: T
        } = t, k = m.join("/"), {
            tree: N,
            seedData: x,
            head: P
        } = (0, i.getFlightDataPartsFromPath)(h[0]), C = p ? (0, r.createHrefFromUrl)(p) : k, O = {
            metadataVaryPath: null,
            treeDivergedFromBase: !1
        }, I = (0, l.convertRootFlightRouterStateToRouteTree)(N, g, O), R = O.metadataVaryPath, L = (0, o.createInitialCacheNodeForHydration)(e, I, x, P, (0, u.computeDynamicStaleAt)(e, T ?? u.UnknownDynamicStaleTime));
        if (null !== p && null !== R) {
            if ((0, d.discoverKnownRoute)(Date.now(), p.pathname, p.search, null, null, I, R, v, C, y, !1), null !== x && void 0 !== b)
                if (void 0 !== _ && null != n) Promise.resolve(_).then(async e => {
                    let t = await (0, c.decodeStageUntilBoundary)(n, e, void 0),
                        r = Date.now(),
                        a = await (0, l.resolveStaleAt)(r, t.s);
                    (0, l.writePrerenderResponseIntoCache)(r, s.FetchStrategy.PPR, t.f, void 0, t.h, t.r ?? null, a, N, g, !0, l.segmentCacheMap)
                }).catch(() => {});
                else {
                    let e = Date.now();
                    (0, l.resolveStaleAt)(e, b).then(t => {
                        (0, l.writePrerenderResponseIntoCache)(e, s.FetchStrategy.PPR, h, void 0, S, E ?? null, t, N, g, !1, l.segmentCacheMap)
                    }).catch(() => {}), n?.cancel()
                }
            else n?.cancel();
            null != w && (0, l.processRuntimePrefetchStream)(Date.now(), w, N, g).then(e => {
                null !== e && (0, l.writeDynamicRenderResponseIntoCache)(Date.now(), s.FetchStrategy.PPRRuntime, e.flightDatas, e.buildId, e.isResponsePartial, e.headVaryParams, e.rootVaryParamsIterable, e.staleAt, e.navigationSeed, null, l.segmentCacheMap)
            }).catch(() => {})
        }
        return {
            tree: L.route,
            cache: L.node,
            pushRef: {
                pendingPush: !1,
                mpaNavigation: !1,
                preserveCustomHistoryState: !0
            },
            focusAndScrollRef: {
                scrollRef: null,
                forceScroll: !1,
                onlyHashChange: !1,
                hashFragment: null
            },
            canonicalUrl: C,
            renderedSearch: g,
            nextUrl: ((0, a.extractPathFromFlightRouterState)(N) || p?.pathname) ?? null,
            previousNextUrl: null,
            debugInfo: null
        }
    }("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }), Object.assign(n.default, n), t.exports = n.default)
}, 92307, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "findHeadInCache", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let r = e.r(60954),
        a = e.r(381685);

    function i(e, t) {
        return function e(t, n, i, o) {
            if (0 === Object.keys(n).length) return [t, i, o];
            let l = Object.keys(n).filter(e => "children" !== e);
            "children" in n && l.unshift("children");
            let s = t.slots;
            if (null !== s)
                for (let t of l) {
                    let [o, l] = n[t];
                    if (o === r.DEFAULT_SEGMENT_KEY) continue;
                    let u = s[t];
                    if (!u) continue;
                    let c = e(u, l, i + "/" + (0, a.createRouterCacheKey)(o), i + "/" + (0, a.createRouterCacheKey)(o, !0));
                    if (c) return c
                }
            return null
        }(e, t, "", "")
    }("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }), Object.assign(n.default, n), t.exports = n.default)
}, 579606, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    let r = (0, e.r(547981).getDeploymentId)();
    globalThis.NEXT_DEPLOYMENT_ID = r, ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }), Object.assign(n.default, n), t.exports = n.default)
}, 373774, (e, t, n) => {
    "use strict";
    var r, a = e.i(913836),
        i = e.r(321530),
        o = e.r(409781),
        l = e.r(42246);

    function s(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function u(e) {
        return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
    }

    function c(e) {
        for (var t = e, n = t; n && !n.alternate;) 0 != (4098 & (t = n).flags) && (e = t.return), n = t.return;
        for (; t.return;) t = t.return;
        return 3 === t.tag ? e : null
    }

    function d(e) {
        if (13 === e.tag) {
            var t = e.memoizedState;
            if (null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t) return t.dehydrated
        }
        return null
    }

    function f(e) {
        if (31 === e.tag) {
            var t = e.memoizedState;
            if (null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t) return t.dehydrated
        }
        return null
    }

    function p(e) {
        if (c(e) !== e) throw Error(s(188))
    }

    function m(e, t, n, r, a, i) {
        for (; null !== e;) {
            if ((5 === e.tag || 6 === e.tag) && n(e, r, a, i) || (22 !== e.tag || null === e.memoizedState) && (t || 5 !== e.tag) && m(e.child, t, n, r, a, i)) return !0;
            e = e.sibling
        }
        return !1
    }

    function h(e) {
        for (e = e.return; null !== e;) {
            if (3 === e.tag || 5 === e.tag) return e;
            e = e.return
        }
        return null
    }

    function g(e) {
        switch (e.tag) {
            case 5:
            case 6:
                return e.stateNode;
            case 3:
                return e.stateNode.containerInfo;
            default:
                throw Error(s(559))
        }
    }
    var v = null,
        y = null;

    function b(e) {
        return v = e, !0
    }

    function _(e, t, n) {
        return e === n || e === t && (v = e, !0)
    }

    function S(e, t, n) {
        return e === n ? (y = e, !1) : e === t && (null !== y && (v = e), !0)
    }

    function E(e) {
        if (null === e) return null;
        do e = null === e ? null : e.return; while (e && 5 !== e.tag && 27 !== e.tag && 3 !== e.tag) return e || null
    }

    function w(e, t, n) {
        for (var r = 0, a = e; a; a = n(a)) r++;
        a = 0;
        for (var i = t; i; i = n(i)) a++;
        for (; 0 < r - a;) e = n(e), r--;
        for (; 0 < a - r;) t = n(t), a--;
        for (; r--;) {
            if (e === t || null !== t && e === t.alternate) return e;
            e = n(e), t = n(t)
        }
        return null
    }
    var T = Object.assign,
        k = Symbol.for("react.element"),
        N = Symbol.for("react.transitional.element"),
        x = Symbol.for("react.portal"),
        P = Symbol.for("react.fragment"),
        C = Symbol.for("react.strict_mode"),
        O = Symbol.for("react.profiler"),
        I = Symbol.for("react.consumer"),
        R = Symbol.for("react.context"),
        L = Symbol.for("react.forward_ref"),
        A = Symbol.for("react.suspense"),
        D = Symbol.for("react.suspense_list"),
        M = Symbol.for("react.memo"),
        U = Symbol.for("react.lazy");
    Symbol.for("react.scope");
    var z = Symbol.for("react.activity"),
        B = Symbol.for("react.legacy_hidden");
    Symbol.for("react.tracing_marker");
    var F = Symbol.for("react.memo_cache_sentinel"),
        j = Symbol.for("react.view_transition"),
        $ = Symbol.for("react.recoverable"),
        G = Symbol.iterator;

    function H(e) {
        return null === e || "object" != typeof e ? null : "function" == typeof(e = G && e[G] || e["@@iterator"]) ? e : null
    }
    var q = Symbol.for("react.client.reference"),
        W = Array.isArray,
        Y = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        V = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        J = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        Q = [],
        K = -1;

    function X(e) {
        return {
            current: e
        }
    }

    function Z(e) {
        0 > K || (e.current = Q[K], Q[K] = null, K--)
    }

    function ee(e, t) {
        Q[++K] = e.current, e.current = t
    }
    var et = X(null),
        en = X(null),
        er = X(null),
        ea = X(null);

    function ei(e, t) {
        switch (ee(er, t), ee(en, e), ee(et, null), t.nodeType) {
            case 9:
            case 11:
                e = (e = t.documentElement) && (e = e.namespaceURI) ? cm(e) : 0;
                break;
            default:
                if (e = t.tagName, t = t.namespaceURI) e = ch(t = cm(t), e);
                else switch (e) {
                    case "svg":
                        e = 1;
                        break;
                    case "math":
                        e = 2;
                        break;
                    default:
                        e = 0
                }
        }
        Z(et), ee(et, e)
    }

    function eo() {
        Z(et), Z(en), Z(er)
    }

    function el(e) {
        var t = e.memoizedState;
        null !== t && (dx._currentValue = t.memoizedState, ee(ea, e));
        var n = ch(t = et.current, e.type);
        t !== n && (ee(en, e), ee(et, n))
    }

    function es(e) {
        en.current === e && (Z(et), Z(en)), ea.current === e && (Z(ea), dx._currentValue = J)
    }

    function eu(e) {
        if (void 0 === tK) try {
            throw Error()
        } catch (e) {
            var t = e.stack.trim().match(/\n( *(at )?)/);
            tK = t && t[1] || "", tX = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return "\n" + tK + e + tX
    }
    var ec = !1;

    function ed(e, t) {
        if (!e || ec) return "";
        ec = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var r = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var n = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(n.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), "object" == typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(n, [])
                                } catch (e) {
                                    var r = e
                                }
                                Reflect.construct(e, [], n)
                            } else {
                                try {
                                    n.call()
                                } catch (e) {
                                    r = e
                                }
                                n = !1;
                                try {
                                    var a = Object.getOwnPropertyDescriptor(e.prototype, "props");
                                    Object.defineProperty(e.prototype, "props", {
                                        configurable: !0,
                                        set: function() {
                                            throw Error()
                                        }
                                    }), n = !0, new e
                                } finally {
                                    n && (void 0 !== a ? Object.defineProperty(e.prototype, "props", a) : delete e.prototype.props)
                                }
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (e) {
                                r = e
                            }(n = e()) && "function" == typeof n.catch && n.catch(function() {})
                        }
                    } catch (e) {
                        if (e && r && "string" == typeof e.stack) return [e.stack, r.stack]
                    }
                    return [null, null]
                }
            };
            r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var a = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
            a && a.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var i = r.DetermineComponentFrameRoot(),
                o = i[0],
                l = i[1];
            if (o && l) {
                var s = o.split("\n"),
                    u = l.split("\n");
                for (a = r = 0; r < s.length && !s[r].includes("DetermineComponentFrameRoot");) r++;
                for (; a < u.length && !u[a].includes("DetermineComponentFrameRoot");) a++;
                if (r === s.length || a === u.length)
                    for (r = s.length - 1, a = u.length - 1; 1 <= r && 0 <= a && s[r] !== u[a];) a--;
                for (; 1 <= r && 0 <= a; r--, a--)
                    if (s[r] !== u[a]) {
                        if (1 !== r || 1 !== a)
                            do
                                if (r--, a--, 0 > a || s[r] !== u[a]) {
                                    var c = "\n" + s[r].replace(" at new ", " at ");
                                    return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c
                                } while (1 <= r && 0 <= a) break
                    }
            }
        } finally {
            ec = !1, Error.prepareStackTrace = n
        }
        return (n = e ? e.displayName || e.name : "") ? eu(n) : ""
    }

    function ef(e) {
        try {
            var t = "",
                n = null;
            do t += function(e, t) {
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        return eu(e.type);
                    case 16:
                        return eu("Lazy");
                    case 13:
                        return e.child !== t && null !== t ? eu("Suspense Fallback") : eu("Suspense");
                    case 19:
                        return eu("SuspenseList");
                    case 0:
                    case 15:
                        return ed(e.type, !1);
                    case 11:
                        return ed(e.type.render, !1);
                    case 1:
                        return ed(e.type, !0);
                    case 31:
                        return eu("Activity");
                    case 30:
                        return eu("ViewTransition");
                    default:
                        return ""
                }
            }(e, n), n = e, e = e.return; while (e) return t
        } catch (e) {
            return "\nError generating stack: " + e.message + "\n" + e.stack
        }
    }
    var ep = Object.prototype.hasOwnProperty,
        em = i.unstable_scheduleCallback,
        eh = i.unstable_cancelCallback,
        eg = i.unstable_shouldYield,
        ev = i.unstable_requestPaint,
        ey = i.unstable_now,
        eb = i.unstable_getCurrentPriorityLevel,
        e_ = i.unstable_ImmediatePriority,
        eS = i.unstable_UserBlockingPriority,
        eE = i.unstable_NormalPriority,
        ew = i.unstable_LowPriority,
        eT = i.unstable_IdlePriority,
        ek = (i.log, i.unstable_setDisableYieldValue, null),
        eN = null,
        ex = Math.clz32 ? Math.clz32 : function(e) {
            return 0 == (e >>>= 0) ? 32 : 31 - (eP(e) / eC | 0) | 0
        },
        eP = Math.log,
        eC = Math.LN2,
        eO = 256,
        eI = 262144,
        eR = 4194304;

    function eL(e) {
        var t = 42 & e;
        if (0 !== t) return t;
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
                return 261888 & e;
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return 3932160 & e;
            case 4194304:
            case 8388608:
            case 0x1000000:
            case 0x2000000:
                return 0x3c00000 & e;
            case 0x4000000:
                return 0x4000000;
            case 0x8000000:
                return 0x8000000;
            case 0x10000000:
                return 0x10000000;
            case 0x20000000:
                return 0x20000000;
            case 0x40000000:
                return 0;
            default:
                return e
        }
    }

    function eA(e, t, n) {
        var r = e.pendingLanes;
        if (0 === r) return 0;
        var a = 0,
            i = e.suspendedLanes,
            o = e.pingedLanes;
        e = e.warmLanes;
        var l = 0x7ffffff & r;
        return 0 !== l ? 0 != (r = l & ~i) ? a = eL(r) : 0 != (o &= l) ? a = eL(o) : n || 0 != (n = l & ~e) && (a = eL(n)) : 0 != (l = r & ~i) ? a = eL(l) : 0 !== o ? a = eL(o) : n || 0 != (n = r & ~e) && (a = eL(n)), 0 === a ? 0 : 0 !== t && t !== a && 0 == (t & i) && ((i = a & -a) >= (n = t & -t) || 32 === i && 0 != (4194048 & n)) ? t : a
    }

    function eD(e, t) {
        return 0 == (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t)
    }

    function eM() {
        var e = eR;
        return 0 == (0x3c00000 & (eR <<= 1)) && (eR = 4194304), e
    }

    function eU(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t
    }

    function ez(e, t) {
        e.pendingLanes |= t, 0x10000000 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
    }

    function eB(e, t, n) {
        e.pendingLanes |= t, e.suspendedLanes &= ~t;
        var r = 31 - ex(t);
        e.entangledLanes |= t, e.entanglements[r] = 0x40000000 | e.entanglements[r] | 261930 & n
    }

    function eF(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n;) {
            var r = 31 - ex(n),
                a = 1 << r;
            a & t | e[r] & t && (e[r] |= t), n &= ~a
        }
    }

    function ej(e, t) {
        var n = t & -t;
        return 0 != ((n = 0 != (42 & n) ? 1 : e$(n)) & (e.suspendedLanes | t)) ? 0 : n
    }

    function e$(e) {
        switch (e) {
            case 2:
                e = 1;
                break;
            case 8:
                e = 4;
                break;
            case 32:
                e = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 0x1000000:
            case 0x2000000:
                e = 128;
                break;
            case 0x10000000:
                e = 0x8000000;
                break;
            default:
                e = 0
        }
        return e
    }

    function eG(e) {
        return 2 < (e &= -e) ? 8 < e ? 0 != (0x7ffffff & e) ? 32 : 0x10000000 : 8 : 2
    }

    function eH() {
        var e = V.p;
        return 0 !== e ? e : void 0 === (e = window.event) ? 32 : d$(e.type)
    }

    function eq(e, t) {
        var n = V.p;
        try {
            return V.p = e, t()
        } finally {
            V.p = n
        }
    }
    var eW = Math.random().toString(36).slice(2),
        eY = "__reactFiber$" + eW,
        eV = "__reactProps$" + eW,
        eJ = "__reactContainer$" + eW,
        eQ = "__reactEvents$" + eW,
        eK = "__reactListeners$" + eW,
        eX = "__reactHandles$" + eW,
        eZ = "__reactResources$" + eW,
        e0 = "__reactMarker$" + eW,
        e1 = "__reactLoad$" + eW;

    function e2(e) {
        delete e[eY], delete e[eV], delete e[eK], delete e[eX]
    }

    function e3(e) {
        var t;
        if (t = e[eY]) return t;
        for (var n = e.parentNode; n;) {
            if (t = n[eJ] || n[eY]) {
                if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                    for (e = c2(e); null !== e;) {
                        if (n = e[eY]) return n;
                        e = c2(e)
                    }
                return t
            }
            n = (e = n).parentNode
        }
        return null
    }

    function e4(e) {
        if (e = e[eY] || e[eJ]) {
            var t = e.tag;
            if (5 === t || 6 === t || 13 === t || 31 === t || 26 === t || 27 === t || 3 === t) return e
        }
        return null
    }

    function e5(e) {
        var t = e.tag;
        if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
        throw Error(s(33))
    }

    function e8(e) {
        var t = e[eZ];
        return t || (t = e[eZ] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), t
    }

    function e6(e) {
        e[e0] = !0
    }

    function e9(e) {
        e[e1] = void 0
    }
    var e7 = new Set,
        te = {};

    function tt(e, t) {
        tn(e, t), tn(e + "Capture", t)
    }

    function tn(e, t) {
        for (te[e] = t, e = 0; e < t.length; e++) e7.add(t[e])
    }
    var tr = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        ta = {},
        ti = {},
        to = !1;

    function tl() {
        var e = to;
        return to = !1, e
    }

    function ts(e, t, n) {
        if (ep.call(ti, t) || !ep.call(ta, t) && (tr.test(t) ? ti[t] = !0 : (ta[t] = !0, !1)))
            if (null === n) e.removeAttribute(t);
            else {
                switch (typeof n) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        e.removeAttribute(t);
                        return;
                    case "boolean":
                        var r = t.toLowerCase().slice(0, 5);
                        if ("data-" !== r && "aria-" !== r) return void e.removeAttribute(t)
                }
                e.setAttribute(t, n)
            }
    }

    function tu(e, t, n) {
        if (null === n) e.removeAttribute(t);
        else {
            switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(t);
                    return
            }
            e.setAttribute(t, n)
        }
    }

    function tc(e, t, n, r) {
        if (null === r) e.removeAttribute(n);
        else {
            switch (typeof r) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(n);
                    return
            }
            e.setAttributeNS(t, n, r)
        }
    }

    function td(e) {
        switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
                return e;
            default:
                return ""
        }
    }

    function tf(e) {
        var t = e.type;
        return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
    }

    function tp(e) {
        if (!e._valueTracker) {
            var t = tf(e) ? "checked" : "value";
            e._valueTracker = function(e, t, n) {
                var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
                if (!e.hasOwnProperty(t) && void 0 !== r && "function" == typeof r.get && "function" == typeof r.set) {
                    var a = r.get,
                        i = r.set;
                    return Object.defineProperty(e, t, {
                        configurable: !0,
                        get: function() {
                            return a.call(this)
                        },
                        set: function(e) {
                            n = "" + e, i.call(this, e)
                        }
                    }), Object.defineProperty(e, t, {
                        enumerable: r.enumerable
                    }), {
                        getValue: function() {
                            return n
                        },
                        setValue: function(e) {
                            n = "" + e
                        },
                        stopTracking: function() {
                            e._valueTracker = null, delete e[t]
                        }
                    }
                }
            }(e, t, "" + e[t])
        }
    }

    function tm(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            r = "";
        return e && (r = tf(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
    }
    var th = /[\n"\\]/g;

    function tg(e) {
        return e.replace(th, function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        })
    }

    function tv(e, t, n, r, a, i, o, l) {
        e.name = "", null != o && "function" != typeof o && "symbol" != typeof o && "boolean" != typeof o ? e.type = o : e.removeAttribute("type"), null != t ? "number" === o ? (0 === t && "" === e.value || e.value != t) && (e.value = "" + td(t)) : e.value !== "" + td(t) && (e.value = "" + td(t)) : "submit" !== o && "reset" !== o || e.removeAttribute("value"), null != t ? "number" === o && e.value == t ? tb(e, td(e.value)) : tb(e, td(t)) : null != n ? tb(e, td(n)) : null != r && e.removeAttribute("value"), null == a && null != i && (e.defaultChecked = !!i), null != a && (e.checked = a && "function" != typeof a && "symbol" != typeof a), null != l && "function" != typeof l && "symbol" != typeof l && "boolean" != typeof l ? e.name = "" + td(l) : e.removeAttribute("name")
    }

    function ty(e, t, n, r, a, i, o, l) {
        if (null != i && "function" != typeof i && "symbol" != typeof i && "boolean" != typeof i && (e.type = i), null != t || null != n) {
            if (("submit" === i || "reset" === i) && null == t) return void tp(e);
            n = null != n ? "" + td(n) : "", t = null != t ? "" + td(t) : n, l || t === e.value || (e.value = t), e.defaultValue = t
        }
        r = "function" != typeof(r = null != r ? r : a) && "symbol" != typeof r && !!r, e.checked = l ? e.checked : !!r, e.defaultChecked = !!r, null != o && "function" != typeof o && "symbol" != typeof o && "boolean" != typeof o && (e.name = o), tp(e)
    }

    function tb(e, t) {
        e.defaultValue !== "" + t && (e.defaultValue = "" + t)
    }

    function t_(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + td(n), t = null, a = 0; a < e.length; a++) {
                if (e[a].value === n) {
                    e[a].selected = !0, r && (e[a].defaultSelected = !0);
                    return
                }
                null !== t || e[a].disabled || (t = e[a])
            }
            null !== t && (t.selected = !0)
        }
    }

    function tS(e, t, n) {
        if (null != t && ((t = "" + td(t)) !== e.value && (e.value = t), null == n)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = null != n ? "" + td(n) : ""
    }

    function tE(e, t, n, r) {
        if (null == t) {
            if (null != r) {
                if (null != n) throw Error(s(92));
                if (W(r)) {
                    if (1 < r.length) throw Error(s(93));
                    r = r[0]
                }
                n = r
            }
            null == n && (n = ""), t = n
        }
        e.defaultValue = n = td(t), (r = e.textContent) === n && "" !== r && null !== r && (e.value = r), tp(e)
    }

    function tw(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) {
                n.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var tT = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function tk(e, t, n) {
        var r = 0 === t.indexOf("--");
        null == n || "boolean" == typeof n || "" === n ? r ? e.setProperty(t, "") : "float" === t ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : "number" != typeof n || 0 === n || tT.has(t) ? "float" === t ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px"
    }

    function tN(e, t, n) {
        if (null != t && "object" != typeof t) throw Error(s(62));
        if (e = e.style, null != n) {
            for (var r in n) !n.hasOwnProperty(r) || null != t && t.hasOwnProperty(r) || (0 === r.indexOf("--") ? e.setProperty(r, "") : "float" === r ? e.cssFloat = "" : e[r] = "", to = !0);
            for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && (tk(e, a, r), to = !0)
        } else
            for (var i in t) t.hasOwnProperty(i) && tk(e, i, t[i])
    }

    function tx(e) {
        if (-1 === e.indexOf("-")) return !1;
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var tP = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["maskType", "mask-type"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        tC = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function tO(e) {
        return tC.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }

    function tI() {}
    var tR = null;

    function tL(e) {
        return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
    }
    var tA = null,
        tD = null;

    function tM(e) {
        var t = e4(e);
        if (t && (e = t.stateNode)) {
            var n = e[eV] || null;
            switch (e = t.stateNode, t.type) {
                case "input":
                    if (tv(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, "radio" === n.type && null != t) {
                        for (n = e; n.parentNode;) n = n.parentNode;
                        for (n = n.querySelectorAll('input[name="' + tg("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                            var r = n[t];
                            if (r !== e && r.form === e.form) {
                                var a = r[eV] || null;
                                if (!a) throw Error(s(90));
                                tv(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name)
                            }
                        }
                        for (t = 0; t < n.length; t++)(r = n[t]).form === e.form && tm(r)
                    }
                    break;
                case "textarea":
                    tS(e, n.value, n.defaultValue);
                    break;
                case "select":
                    null != (t = n.value) && t_(e, !!n.multiple, t, !1)
            }
        }
    }
    var tU = !1;

    function tz(e, t, n) {
        if (tU) return e(t, n);
        tU = !0;
        try {
            return e(t)
        } finally {
            if (tU = !1, (null !== tA || null !== tD) && (uo(), tA && (t = tA, e = tD, tD = tA = null, tM(t), e)))
                for (t = 0; t < e.length; t++) tM(e[t])
        }
    }

    function tB(e, t) {
        var n = e.stateNode;
        if (null === n) return null;
        var r = n[eV] || null;
        if (null === r) return null;
        switch (n = r[t], t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) || (r = "button" !== (e = e.type) && "input" !== e && "select" !== e && "textarea" !== e), e = !r;
                break;
            default:
                e = !1
        }
        if (e) return null;
        if (n && "function" != typeof n) throw Error(s(231, t, typeof n));
        return n
    }
    var tF = "u" > typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
        tj = !1;
    if (tF) try {
        var t$ = {};
        Object.defineProperty(t$, "passive", {
            get: function() {
                tj = !0
            }
        }), window.addEventListener("test", t$, t$), window.removeEventListener("test", t$, t$)
    } catch (e) {
        tj = !1
    }
    var tG = null,
        tH = null,
        tq = null;

    function tW() {
        if (tq) return tq;
        var e, t, n = tH,
            r = n.length,
            a = "value" in tG ? tG.value : tG.textContent,
            i = a.length;
        for (e = 0; e < r && n[e] === a[e]; e++);
        var o = r - e;
        for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
        return tq = a.slice(e, 1 < t ? 1 - t : void 0)
    }

    function tY(e) {
        var t = e.keyCode;
        return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
    }

    function tV() {
        return !0
    }

    function tJ() {
        return !1
    }

    function tQ(e) {
        function t(t, n, r, a, i) {
            for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = i, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(a) : a[o]);
            return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? tV : tJ, this.isPropagationStopped = tJ, this
        }
        return T(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = tV)
            },
            stopPropagation: function() {
                var e = this.nativeEvent;
                e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = tV)
            },
            persist: function() {},
            isPersistent: tV
        }), t
    }
    var tK, tX, tZ, t0, t1, t2 = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        t3 = tQ(t2),
        t4 = T({}, t2, {
            view: 0,
            detail: 0
        }),
        t5 = tQ(t4),
        t8 = T({}, t4, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: nl,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== t1 && (t1 && "mousemove" === e.type ? (tZ = e.screenX - t1.screenX, t0 = e.screenY - t1.screenY) : t0 = tZ = 0, t1 = e), tZ)
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : t0
            }
        }),
        t6 = tQ(t8),
        t9 = tQ(T({}, t8, {
            dataTransfer: 0
        })),
        t7 = tQ(T({}, t4, {
            relatedTarget: 0
        })),
        ne = tQ(T({}, t2, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        })),
        nt = tQ(T({}, t2, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        })),
        nn = tQ(T({}, t2, {
            data: 0
        })),
        nr = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        na = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        ni = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function no(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = ni[e]) && !!t[e]
    }

    function nl() {
        return no
    }
    var ns = tQ(T({}, t4, {
            key: function(e) {
                if (e.key) {
                    var t = nr[e.key] || e.key;
                    if ("Unidentified" !== t) return t
                }
                return "keypress" === e.type ? 13 === (e = tY(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? na[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: nl,
            charCode: function(e) {
                return "keypress" === e.type ? tY(e) : 0
            },
            keyCode: function(e) {
                return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            },
            which: function(e) {
                return "keypress" === e.type ? tY(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            }
        })),
        nu = tQ(T({}, t8, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        })),
        nc = tQ(T({}, t2, {
            submitter: 0
        })),
        nd = tQ(T({}, t4, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: nl
        })),
        nf = tQ(T({}, t2, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        })),
        np = tQ(T({}, t8, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        })),
        nm = tQ(T({}, t2, {
            newState: 0,
            oldState: 0
        })),
        nh = [9, 13, 27, 32],
        ng = tF && "CompositionEvent" in window,
        nv = null;
    tF && "documentMode" in document && (nv = document.documentMode);
    var ny = tF && "TextEvent" in window && !nv,
        nb = tF && (!ng || nv && 8 < nv && 11 >= nv),
        n_ = !1;

    function nS(e, t) {
        switch (e) {
            case "keyup":
                return -1 !== nh.indexOf(t.keyCode);
            case "keydown":
                return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function nE(e) {
        return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
    }
    var nw = !1,
        nT = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };

    function nk(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!nT[e.type] : "textarea" === t
    }

    function nN(e, t, n, r) {
        tA ? tD ? tD.push(r) : tD = [r] : tA = r, 0 < (t = u7(t, "onChange")).length && (n = new t3("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }))
    }
    var nx = null,
        nP = null;

    function nC(e) {
        u1(e, 0)
    }

    function nO(e) {
        if (tm(e5(e))) return e
    }

    function nI(e, t) {
        if ("change" === e) return t
    }
    var nR = !1;
    if (tF) {
        if (tF) {
            var nL = "oninput" in document;
            if (!nL) {
                var nA = document.createElement("div");
                nA.setAttribute("oninput", "return;"), nL = "function" == typeof nA.oninput
            }
            r = nL
        } else r = !1;
        nR = r && (!document.documentMode || 9 < document.documentMode)
    }

    function nD() {
        nx && (nx.detachEvent("onpropertychange", nM), nP = nx = null)
    }

    function nM(e) {
        if ("value" === e.propertyName && nO(nP)) {
            var t = [];
            nN(t, nP, e, tL(e)), tz(nC, t)
        }
    }

    function nU(e, t, n) {
        "focusin" === e ? (nD(), nx = t, nP = n, nx.attachEvent("onpropertychange", nM)) : "focusout" === e && nD()
    }

    function nz(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e) return nO(nP)
    }

    function nB(e, t) {
        if ("click" === e) return nO(t)
    }

    function nF(e, t) {
        if ("input" === e || "change" === e) return nO(t)
    }
    var nj = "function" == typeof Object.is ? Object.is : function(e, t) {
        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
    };

    function n$(e, t) {
        if (nj(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!ep.call(t, a) || !nj(e[a], t[a])) return !1
        }
        return !0
    }

    function nG(e) {
        if (void 0 === (e = e || ("u" > typeof document ? document : void 0))) return null;
        try {
            return e.activeElement || e.body
        } catch (t) {
            return e.body
        }
    }

    function nH(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function nq(e, t) {
        var n, r = nH(e);
        for (e = 0; r;) {
            if (3 === r.nodeType) {
                if (n = e + r.textContent.length, e <= t && n >= t) return {
                    node: r,
                    offset: t - e
                };
                e = n
            }
            e: {
                for (; r;) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break e
                    }
                    r = r.parentNode
                }
                r = void 0
            }
            r = nH(r)
        }
    }

    function nW(e) {
        e = null != e && null != e.ownerDocument && null != e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
        for (var t = nG(e.document); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = "string" == typeof t.contentWindow.location.href
            } catch (e) {
                n = !1
            }
            if (n) e = t.contentWindow;
            else break;
            t = nG(e.document)
        }
        return t
    }

    function nY(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
    }
    var nV = tF && "documentMode" in document && 11 >= document.documentMode,
        nJ = null,
        nQ = null,
        nK = null,
        nX = !1;

    function nZ(e, t, n) {
        var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
        nX || null == nJ || nJ !== nG(r) || (r = "selectionStart" in (r = nJ) && nY(r) ? {
            start: r.selectionStart,
            end: r.selectionEnd
        } : {
            anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }, nK && n$(nK, r) || (nK = r, 0 < (r = u7(nQ, "onSelect")).length && (t = new t3("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
        }), t.target = nJ)))
    }

    function n0(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
    }
    var n1 = {
            animationend: n0("Animation", "AnimationEnd"),
            animationiteration: n0("Animation", "AnimationIteration"),
            animationstart: n0("Animation", "AnimationStart"),
            transitionrun: n0("Transition", "TransitionRun"),
            transitionstart: n0("Transition", "TransitionStart"),
            transitioncancel: n0("Transition", "TransitionCancel"),
            transitionend: n0("Transition", "TransitionEnd")
        },
        n2 = {},
        n3 = {};

    function n4(e) {
        if (n2[e]) return n2[e];
        if (!n1[e]) return e;
        var t, n = n1[e];
        for (t in n)
            if (n.hasOwnProperty(t) && t in n3) return n2[e] = n[t];
        return e
    }
    tF && (n3 = document.createElement("div").style, "AnimationEvent" in window || (delete n1.animationend.animation, delete n1.animationiteration.animation, delete n1.animationstart.animation), "TransitionEvent" in window || delete n1.transitionend.transition);
    var n5 = n4("animationend"),
        n8 = n4("animationiteration"),
        n6 = n4("animationstart"),
        n9 = n4("transitionrun"),
        n7 = n4("transitionstart"),
        re = n4("transitioncancel"),
        rt = n4("transitionend"),
        rn = new Map,
        rr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

    function ra(e, t) {
        rn.set(e, t), tt(t, [e])
    }
    rr.push("scrollEnd");
    var ri = 0;

    function ro(e, t) {
        return null != e.name && "auto" !== e.name ? e.name : null !== t.autoName ? t.autoName : t.autoName = e = "_" + (e = sX.identifierPrefix) + "t_" + (ri++).toString(32) + "_"
    }

    function rl(e) {
        if (null == e || "string" == typeof e) return e;
        var t = null,
            n = s8;
        if (null !== n)
            for (var r = 0; r < n.length; r++) {
                var a = e[n[r]];
                if (null != a) {
                    if ("none" === a) return "none";
                    t = null == t ? a : t + " " + a
                }
            }
        return null == t ? e.default : t
    }

    function rs(e, t) {
        return e = rl(e), null == (t = rl(t)) ? "auto" === e ? null : e : "auto" === t ? null : t
    }
    var ru = "function" == typeof reportError ? reportError : function(e) {
            if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
                var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: "object" == typeof e && null !== e && "string" == typeof e.message ? String(e.message) : String(e),
                    error: e
                });
                if (!window.dispatchEvent(t)) return
            } else if ("object" == typeof a.default && "function" == typeof a.default.emit) return void a.default.emit("uncaughtException", e);
            console.error(e)
        },
        rc = [],
        rd = 0,
        rf = 0;

    function rp() {
        for (var e = rd, t = rf = rd = 0; t < e;) {
            var n = rc[t];
            rc[t++] = null;
            var r = rc[t];
            rc[t++] = null;
            var a = rc[t];
            rc[t++] = null;
            var i = rc[t];
            if (rc[t++] = null, null !== r && null !== a) {
                var o = r.pending;
                null === o ? a.next = a : (a.next = o.next, o.next = a), r.pending = a
            }
            0 !== i && rv(n, a, i)
        }
    }

    function rm(e, t, n, r) {
        rc[rd++] = e, rc[rd++] = t, rc[rd++] = n, rc[rd++] = r, rf |= r, e.lanes |= r, null !== (e = e.alternate) && (e.lanes |= r)
    }

    function rh(e, t, n, r) {
        return rm(e, t, n, r), ry(e)
    }

    function rg(e, t) {
        return rm(e, null, null, t), ry(e)
    }

    function rv(e, t, n) {
        e.lanes |= n;
        var r = e.alternate;
        null !== r && (r.lanes |= n);
        for (var a = !1, i = e.return; null !== i;) i.childLanes |= n, null !== (r = i.alternate) && (r.childLanes |= n), 22 === i.tag && (null === (e = i.stateNode) || 1 & e._visibility || (a = !0)), e = i, i = i.return;
        return 3 === e.tag ? (i = e.stateNode, a && null !== t && (a = 31 - ex(n), null === (r = (e = i.hiddenUpdates)[a]) ? e[a] = [t] : r.push(t), t.lane = 0x20000000 | n), i) : null
    }

    function ry(e) {
        if (50 < s6) throw s6 = 0, s9 = null, Error(s(185));
        for (var t = e.return; null !== t;) t = (e = t).return;
        return 3 === e.tag ? e.stateNode : null
    }
    var rb = {};

    function r_(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function rS(e, t, n, r) {
        return new r_(e, t, n, r)
    }

    function rE(e) {
        return !(!(e = e.prototype) || !e.isReactComponent)
    }

    function rw(e, t) {
        var n = e.alternate;
        return null === n ? ((n = rS(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 0x47f00000 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n
    }

    function rT(e, t) {
        e.flags &= 0x47f00002;
        var n = e.alternate;
        return null === n ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, e.dependencies = null === (t = n.dependencies) ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }), e
    }

    function rk(e, t, n, r, a, i) {
        var o = 0;
        if ("function" == typeof(r = e)) rE(r) && (o = 1);
        else if ("string" == typeof r) o = ! function(e, t, n) {
            if (1 === n || null != t.itemProp) return !1;
            switch (e) {
                case "meta":
                case "title":
                    return !0;
                case "style":
                    if ("string" != typeof t.precedence || "string" != typeof t.href || "" === t.href) break;
                    return !0;
                case "link":
                    if ("string" != typeof t.rel || "string" != typeof t.href || "" === t.href || t.onLoad || t.onError) break;
                    if ("stylesheet" === t.rel) return e = t.disabled, "string" == typeof t.precedence && null == e;
                    return !0;
                case "script":
                    if (t.async && "function" != typeof t.async && "symbol" != typeof t.async && !t.onLoad && !t.onError && t.src && "string" == typeof t.src) return !0
            }
            return !1
        }(e, n, et.current) ? "html" === e || "head" === e || "body" === e ? 27 : 5 : 26;
        else e: switch (r) {
            case z:
                return (e = rS(31, n, t, a)).elementType = z, e.lanes = i, e;
            case P:
                return rN(n.children, a, i, t);
            case C:
                o = 8, a |= 24;
                break;
            case O:
                return (e = rS(12, n, t, 2 | a)).elementType = O, e.lanes = i, e;
            case A:
                return (e = rS(13, n, t, a)).elementType = A, e.lanes = i, e;
            case D:
                return (e = rS(19, n, t, a)).elementType = D, e.lanes = i, e;
            case B:
            case j:
                return (e = rS(30, n, t, e = 32 | a)).elementType = j, e.lanes = i, e.stateNode = {
                    autoName: null,
                    paired: null,
                    clones: null,
                    ref: null
                }, e;
            default:
                if ("object" == typeof r && null !== r) switch (r.$$typeof) {
                    case R:
                        o = 10;
                        break e;
                    case I:
                        o = 9;
                        break e;
                    case L:
                        o = 11;
                        break e;
                    case M:
                        o = 14;
                        break e;
                    case U:
                        o = 16, r = null;
                        break e
                }
                o = 29, n = Error(s(130, null === e ? "null" : typeof e, "")), r = null
        }
        return (t = rS(o, n, t, a)).elementType = e, t.type = r, t.lanes = i, t
    }

    function rN(e, t, n, r) {
        return (e = rS(7, e, r, t)).lanes = n, e
    }

    function rx(e, t, n) {
        return (e = rS(6, e, null, t)).lanes = n, e
    }

    function rP(e) {
        var t = rS(18, null, null, 0);
        return t.stateNode = e, t
    }

    function rC(e, t, n) {
        return (t = rS(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }
    var rO = new WeakMap;

    function rI(e, t) {
        if ("object" == typeof e && null !== e) {
            var n = rO.get(e);
            return void 0 !== n ? n : (t = {
                value: e,
                source: t,
                stack: ef(t)
            }, rO.set(e, t), t)
        }
        return {
            value: e,
            source: t,
            stack: ef(t)
        }
    }
    var rR = [],
        rL = 0,
        rA = null,
        rD = 0,
        rM = [],
        rU = 0,
        rz = null,
        rB = 1,
        rF = "";

    function rj(e, t) {
        rR[rL++] = rD, rR[rL++] = rA, rA = e, rD = t
    }

    function r$(e, t, n) {
        rM[rU++] = rB, rM[rU++] = rF, rM[rU++] = rz, rz = e;
        var r = rB;
        e = rF;
        var a = 32 - ex(r) - 1;
        r &= ~(1 << a), n += 1;
        var i = 32 - ex(t) + a;
        if (30 < i) {
            var o = a - a % 5;
            i = (r & (1 << o) - 1).toString(32), r >>= o, a -= o, rB = 1 << 32 - ex(t) + a | n << a | r, rF = i + e
        } else rB = 1 << i | n << a | r, rF = e
    }

    function rG(e) {
        null !== e.return && (rj(e, 1), r$(e, 1, 0))
    }

    function rH(e) {
        for (; e === rA;) rA = rR[--rL], rR[rL] = null, rD = rR[--rL], rR[rL] = null;
        for (; e === rz;) rz = rM[--rU], rM[rU] = null, rF = rM[--rU], rM[rU] = null, rB = rM[--rU], rM[rU] = null
    }

    function rq(e, t) {
        rM[rU++] = rB, rM[rU++] = rF, rM[rU++] = rz, rB = t.id, rF = t.overflow, rz = e
    }
    var rW = null,
        rY = null,
        rV = !1,
        rJ = null,
        rQ = !1,
        rK = Error(s(519));

    function rX(e) {
        var t = Error(s(418, 1 < arguments.length && void 0 !== arguments[1] && arguments[1] ? "text" : "HTML", ""));
        throw r4(rI(t, e)), rK
    }

    function rZ(e) {
        var t = e.stateNode,
            n = e.type,
            r = e.memoizedProps;
        switch (t[eY] = e, t[eV] = r, n) {
            case "dialog":
                u2("cancel", t), u2("close", t);
                break;
            case "iframe":
            case "object":
            case "embed":
                u2("load", t);
                break;
            case "video":
            case "audio":
                for (n = 0; n < uZ.length; n++) u2(uZ[n], t);
                break;
            case "source":
                u2("error", t);
                break;
            case "img":
            case "image":
            case "link":
                u2("error", t), u2("load", t);
                break;
            case "details":
                u2("toggle", t);
                break;
            case "input":
                u2("invalid", t), ty(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
                break;
            case "select":
                u2("invalid", t);
                break;
            case "textarea":
                u2("invalid", t), tE(t, r.value, r.defaultValue, r.children)
        }
        "string" != typeof(n = r.children) && "number" != typeof n && "bigint" != typeof n || t.textContent === "" + n || !0 === r.suppressHydrationWarning || ci(t.textContent, n) ? (null != r.popover && (u2("beforetoggle", t), u2("toggle", t)), null != r.onScroll && u2("scroll", t), null != r.onScrollEnd && u2("scrollend", t), null != r.onClick && (t.onclick = tI), t = !0) : t = !1, t || rX(e, !0)
    }

    function r0(e) {
        for (rW = e.return; rW;) switch (rW.tag) {
            case 5:
            case 31:
            case 13:
                rQ = !1;
                return;
            case 27:
            case 3:
                rQ = !0;
                return;
            default:
                rW = rW.return
        }
    }

    function r1(e) {
        if (e !== rW) return !1;
        if (!rV) return r0(e), rV = !0, !1;
        var t, n = e.tag;
        if ((t = 3 !== n && 27 !== n) && ((t = 5 === n) && (t = "form" === (t = e.type) || "button" === t || cg(e.type, e.memoizedProps)), t = !t), t && rY && rX(e), r0(e), 13 === n) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(s(317));
            rY = c1(e)
        } else if (31 === n) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(s(317));
            rY = c1(e)
        } else 27 === n ? (n = rY, cw(e.type) ? (e = c0, c0 = null, rY = e) : rY = n) : rY = rW ? cZ(e.stateNode.nextSibling) : null;
        return !0
    }

    function r2() {
        rY = rW = null, rV = !1
    }

    function r3() {
        var e = rJ;
        return null !== e && (null === sH ? sH = e : sH.push.apply(sH, e), rJ = null), e
    }

    function r4(e) {
        null === rJ ? rJ = [e] : rJ.push(e)
    }
    var r5 = X(null),
        r8 = null,
        r6 = null;

    function r9(e, t, n) {
        ee(r5, t._currentValue), t._currentValue = n
    }

    function r7(e) {
        e._currentValue = r5.current, Z(r5)
    }

    function ae(e, t, n) {
        for (; null !== e;) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return
        }
    }

    function at(e, t, n, r) {
        var a = e.child;
        for (null !== a && (a.return = e); null !== a;) {
            var i = a.dependencies;
            if (null !== i) {
                var o = a.child;
                i = i.firstContext;
                e: for (; null !== i;) {
                    var l = i;
                    i = a;
                    for (var u = 0; u < t.length; u++)
                        if (l.context === t[u]) {
                            i.lanes |= n, null !== (l = i.alternate) && (l.lanes |= n), ae(i.return, n, e), r || (o = null);
                            break e
                        } i = l.next
                }
            } else if (18 === a.tag) {
                if (null === (o = a.return)) throw Error(s(341));
                o.lanes |= n, null !== (i = o.alternate) && (i.lanes |= n), ae(o, n, e), o = null
            } else 13 === a.tag && null !== a.memoizedState && null === a.memoizedState.dehydrated ? (a.lanes |= n, null !== (o = a.alternate) && (o.lanes |= n), ae(a.return, n, e), o = null !== (o = a.child) ? o.sibling : null) : o = a.child;
            if (null !== o) o.return = a;
            else
                for (o = a; null !== o;) {
                    if (o === e) {
                        o = null;
                        break
                    }
                    if (null !== (a = o.sibling)) {
                        a.return = o.return, o = a;
                        break
                    }
                    o = o.return
                }
            a = o
        }
    }

    function an(e, t, n, r) {
        e = null;
        for (var a = t, i = !1; null !== a;) {
            if (!i) {
                if (0 != (524288 & a.flags)) i = !0;
                else if (0 != (262144 & a.flags)) break
            }
            if (10 === a.tag) {
                var o = a.alternate;
                if (null === o) throw Error(s(387));
                if (null !== (o = o.memoizedProps)) {
                    var l = a.type;
                    nj(a.pendingProps.value, o.value) || (null !== e ? e.push(l) : e = [l])
                }
            } else if (a === ea.current) {
                if (null === (o = a.alternate)) throw Error(s(387));
                o.memoizedState.memoizedState !== a.memoizedState.memoizedState && (null !== e ? e.push(dx) : e = [dx])
            }
            a = a.return
        }
        return null !== e && at(t, e, n, r), t.flags |= 262144, null !== e
    }

    function ar(e) {
        for (e = e.firstContext; null !== e;) {
            if (!nj(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next
        }
        return !1
    }

    function aa(e) {
        r8 = e, r6 = null, null !== (e = e.dependencies) && (e.firstContext = null)
    }

    function ai(e) {
        return al(r8, e)
    }

    function ao(e, t) {
        return null === r8 && aa(e), al(e, t)
    }

    function al(e, t) {
        var n = t._currentValue;
        if (t = {
                context: t,
                memoizedValue: n,
                next: null
            }, null === r6) {
            if (null === e) throw Error(s(308));
            r6 = t, e.dependencies = {
                lanes: 0,
                firstContext: t
            }, e.flags |= 524288
        } else r6 = r6.next = t;
        return n
    }
    var as = "u" > typeof AbortController ? AbortController : function() {
            var e = [],
                t = this.signal = {
                    aborted: !1,
                    addEventListener: function(t, n) {
                        e.push(n)
                    }
                };
            this.abort = function() {
                t.aborted = !0, e.forEach(function(e) {
                    return e()
                })
            }
        },
        au = i.unstable_scheduleCallback,
        ac = i.unstable_NormalPriority,
        ad = {
            $$typeof: R,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function af() {
        return {
            controller: new as,
            data: new Map,
            refCount: 0
        }
    }

    function ap(e) {
        e.refCount--, 0 === e.refCount && au(ac, function() {
            e.controller.abort()
        })
    }

    function am(e, t) {
        if (0 != (4194048 & e.pendingLanes)) {
            var n = e.transitionTypes;
            for (null === n && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
                var r = t[e]; - 1 === n.indexOf(r) && n.push(r)
            }
        }
    }
    var ah = null,
        ag = null,
        av = 0,
        ay = 0,
        ab = null;

    function a_() {
        if (0 == --av && (ah = null, null !== ag)) {
            null !== ab && (ab.status = "fulfilled");
            var e = ag;
            ag = null, ay = 0, ab = null;
            for (var t = 0; t < e.length; t++)(0, e[t])()
        }
    }
    var aS = Y.S;
    Y.S = function(e, t) {
        if (sY = ey(), "object" == typeof t && null !== t && "function" == typeof t.then && function(e) {
                if (null === ag) {
                    var t = ag = [];
                    av = 0, ay = uJ(), ab = {
                        status: "pending",
                        value: void 0,
                        then: function(e) {
                            t.push(e)
                        }
                    }
                }
                av++, e.then(a_, a_)
            }(t), null !== ah)
            for (var n = uM; null !== n;) am(n, ah), n = n.next;
        if (null !== (n = e.types)) {
            for (var r = uM; null !== r;) am(r, n), r = r.next;
            if (0 !== ay) {
                null === (r = ah) && (r = ah = []);
                for (var a = 0; a < n.length; a++) {
                    var i = n[a]; - 1 === r.indexOf(i) && r.push(i)
                }
            }
        }
        null !== aS && aS(e, t)
    };
    var aE = X(null);

    function aw() {
        var e = aE.current;
        return null !== e ? e : sP.pooledCache
    }

    function aT(e, t) {
        null === t ? ee(aE, aE.current) : ee(aE, t.pool)
    }

    function ak() {
        var e = aw();
        return null === e ? null : {
            parent: ad._currentValue,
            pool: e
        }
    }
    var aN = Error(s(460)),
        ax = Error(s(474)),
        aP = Error(s(542)),
        aC = {
            then: function() {}
        };

    function aO(e) {
        return "fulfilled" === (e = e.status) || "rejected" === e
    }

    function aI(e, t, n) {
        switch (void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(tI, tI), t = n), t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                if (aD(e = t.reason), void 0 === e && !("reason" in t)) throw Error(s(600));
                throw e;
            default:
                if ("string" == typeof t.status) t.then(tI, tI);
                else {
                    if (null !== (e = sP) && 100 < e.shellSuspendCounter) throw Error(s(482));
                    (e = t).status = "pending", e.then(function(e) {
                        if ("pending" === t.status) {
                            var n = t;
                            n.status = "fulfilled", n.value = e
                        }
                    }, function(e) {
                        if ("pending" === t.status) {
                            var n = t;
                            n.status = "rejected", n.reason = e
                        }
                    })
                }
                switch (t.status) {
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        throw aD(e = t.reason), e
                }
                throw aL = t, aN
        }
    }

    function aR(e) {
        try {
            return (0, e._init)(e._payload)
        } catch (e) {
            if (null !== e && "object" == typeof e && "function" == typeof e.then) throw aL = e, aN;
            throw e
        }
    }
    var aL = null;

    function aA() {
        if (null === aL) throw Error(s(459));
        var e = aL;
        return aL = null, e
    }

    function aD(e) {
        if (e === aN || e === aP) throw Error(s(483))
    }
    var aM = null,
        aU = 0;

    function az(e) {
        var t = aU;
        return aU += 1, null === aM && (aM = []), aI(aM, e, t)
    }

    function aB(e, t) {
        e.ref = void 0 !== (t = t.props.ref) ? t : null
    }

    function aF(e, t) {
        if (t.$$typeof === k) throw Error(s(525));
        throw Error(s(31, "[object Object]" === (e = Object.prototype.toString.call(t)) ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }

    function aj(e) {
        function t(t, n) {
            if (e) {
                var r = t.deletions;
                null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
            }
        }

        function n(n, r) {
            if (!e) return null;
            for (; null !== r;) t(n, r), r = r.sibling;
            return null
        }

        function r(e) {
            for (var t = new Map; null !== e;) null === e.key ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
            return t
        }

        function a(e, t) {
            return (e = rw(e, t)).index = 0, e.sibling = null, e
        }

        function i(t, n, r) {
            return (t.index = r, e) ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 0x8000002, n) : (t.flags |= 1048576, n)
        }

        function o(t) {
            return e && null === t.alternate && (t.flags |= 0x8000002), t
        }

        function l(e, t, n, r) {
            return null === t || 6 !== t.tag ? (t = rx(n, e.mode, r)).return = e : (t = a(t, n)).return = e, t
        }

        function u(e, t, n, r) {
            var i = n.type;
            return i === P ? (aB(e = d(e, t, n.props.children, r, n.key), n), e) : (null !== t && (t.elementType === i || "object" == typeof i && null !== i && i.$$typeof === U && aR(i) === t.type) ? aB(t = a(t, n.props), n) : aB(t = rk(n.type, n.key, n.props, null, e.mode, r), n), t.return = e, t)
        }

        function c(e, t, n, r) {
            return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = rC(n, e.mode, r)).return = e : (t = a(t, n.children || [])).return = e, t
        }

        function d(e, t, n, r, i) {
            return null === t || 7 !== t.tag ? (t = rN(n, e.mode, r, i)).return = e : (t = a(t, n)).return = e, t
        }

        function f(e, t, n) {
            if ("string" == typeof t && "" !== t || "number" == typeof t || "bigint" == typeof t) return (t = rx("" + t, e.mode, n)).return = e, t;
            if ("object" == typeof t && null !== t) {
                switch (t.$$typeof) {
                    case N:
                        return aB(n = rk(t.type, t.key, t.props, null, e.mode, n), t), n.return = e, n;
                    case x:
                        return (t = rC(t, e.mode, n)).return = e, t;
                    case U:
                        return f(e, t = aR(t), n)
                }
                if (W(t) || H(t)) return (t = rN(t, e.mode, n, null)).return = e, t;
                if ("function" == typeof t.then) return f(e, az(t), n);
                if (t.$$typeof === R) return f(e, ao(e, t), n);
                aF(e, t)
            }
            return null
        }

        function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if ("string" == typeof n && "" !== n || "number" == typeof n || "bigint" == typeof n) return null !== a ? null : l(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
                switch (n.$$typeof) {
                    case N:
                        return n.key === a ? u(e, t, n, r) : null;
                    case x:
                        return n.key === a ? c(e, t, n, r) : null;
                    case U:
                        return p(e, t, n = aR(n), r)
                }
                if (W(n) || H(n)) return null !== a ? null : d(e, t, n, r, null);
                if ("function" == typeof n.then) return p(e, t, az(n), r);
                if (n.$$typeof === R) return p(e, t, ao(e, n), r);
                aF(e, n)
            }
            return null
        }

        function m(e, t, n, r, a) {
            if ("string" == typeof r && "" !== r || "number" == typeof r || "bigint" == typeof r) return l(t, e = e.get(n) || null, "" + r, a);
            if ("object" == typeof r && null !== r) {
                switch (r.$$typeof) {
                    case N:
                        return u(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                    case x:
                        return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                    case U:
                        return m(e, t, n, r = aR(r), a)
                }
                if (W(r) || H(r)) return d(t, e = e.get(n) || null, r, a, null);
                if ("function" == typeof r.then) return m(e, t, n, az(r), a);
                if (r.$$typeof === R) return m(e, t, n, ao(t, r), a);
                aF(t, r)
            }
            return null
        }
        return function(l, u, c, d) {
            try {
                aU = 0;
                var h = function l(u, c, d, h) {
                    if ("object" == typeof d && null !== d && d.type === P && null === d.key && void 0 === d.props.ref && (d = d.props.children), "object" == typeof d && null !== d) {
                        switch (d.$$typeof) {
                            case N:
                                e: {
                                    for (var g = d.key; null !== c;) {
                                        if (c.key === g) {
                                            if ((g = d.type) === P) {
                                                if (7 === c.tag) {
                                                    n(u, c.sibling), aB(h = a(c, d.props.children), d), h.return = u, u = h;
                                                    break e
                                                }
                                            } else if (c.elementType === g || "object" == typeof g && null !== g && g.$$typeof === U && aR(g) === c.type) {
                                                n(u, c.sibling), aB(h = a(c, d.props), d), h.return = u, u = h;
                                                break e
                                            }
                                            n(u, c);
                                            break
                                        }
                                        t(u, c), c = c.sibling
                                    }
                                    d.type === P ? aB(h = rN(d.props.children, u.mode, h, d.key), d) : aB(h = rk(d.type, d.key, d.props, null, u.mode, h), d),
                                    h.return = u,
                                    u = h
                                }
                                return o(u);
                            case x:
                                e: {
                                    for (g = d.key; null !== c;) {
                                        if (c.key === g)
                                            if (4 === c.tag && c.stateNode.containerInfo === d.containerInfo && c.stateNode.implementation === d.implementation) {
                                                n(u, c.sibling), (h = a(c, d.children || [])).return = u, u = h;
                                                break e
                                            } else {
                                                n(u, c);
                                                break
                                            } t(u, c), c = c.sibling
                                    }(h = rC(d, u.mode, h)).return = u,
                                    u = h
                                }
                                return o(u);
                            case U:
                                return l(u, c, d = aR(d), h)
                        }
                        if (W(d)) return function(a, o, l, s) {
                            for (var u = null, c = null, d = o, h = o = 0, g = null; null !== d && h < l.length; h++) {
                                d.index > h ? (g = d, d = null) : g = d.sibling;
                                var v = p(a, d, l[h], s);
                                if (null === v) {
                                    null === d && (d = g);
                                    break
                                }
                                e && d && null === v.alternate && t(a, d), o = i(v, o, h), null === c ? u = v : c.sibling = v, c = v, d = g
                            }
                            if (h === l.length) return n(a, d), rV && rj(a, h), u;
                            if (null === d) {
                                for (; h < l.length; h++) null !== (d = f(a, l[h], s)) && (o = i(d, o, h), null === c ? u = d : c.sibling = d, c = d);
                                return rV && rj(a, h), u
                            }
                            for (d = r(d); h < l.length; h++) null !== (g = m(d, a, h, l[h], s)) && (e && null !== (v = g.alternate) && d.delete(null === v.key ? h : v.key), o = i(g, o, h), null === c ? u = g : c.sibling = g, c = g);
                            return e && d.forEach(function(e) {
                                return t(a, e)
                            }), rV && rj(a, h), u
                        }(u, c, d, h);
                        if (H(d)) {
                            if ("function" != typeof(g = H(d))) throw Error(s(150));
                            return function(a, o, l, u) {
                                if (null == l) throw Error(s(151));
                                for (var c = null, d = null, h = o, g = o = 0, v = null, y = l.next(); null !== h && !y.done; g++, y = l.next()) {
                                    h.index > g ? (v = h, h = null) : v = h.sibling;
                                    var b = p(a, h, y.value, u);
                                    if (null === b) {
                                        null === h && (h = v);
                                        break
                                    }
                                    e && h && null === b.alternate && t(a, h), o = i(b, o, g), null === d ? c = b : d.sibling = b, d = b, h = v
                                }
                                if (y.done) return n(a, h), rV && rj(a, g), c;
                                if (null === h) {
                                    for (; !y.done; g++, y = l.next()) null !== (y = f(a, y.value, u)) && (o = i(y, o, g), null === d ? c = y : d.sibling = y, d = y);
                                    return rV && rj(a, g), c
                                }
                                for (h = r(h); !y.done; g++, y = l.next()) null !== (y = m(h, a, g, y.value, u)) && (e && null !== (v = y.alternate) && h.delete(null === v.key ? g : v.key), o = i(y, o, g), null === d ? c = y : d.sibling = y, d = y);
                                return e && h.forEach(function(e) {
                                    return t(a, e)
                                }), rV && rj(a, g), c
                            }(u, c, d = g.call(d), h)
                        }
                        if ("function" == typeof d.then) return l(u, c, az(d), h);
                        if (d.$$typeof === R) return l(u, c, ao(u, d), h);
                        aF(u, d)
                    }
                    return "string" == typeof d && "" !== d || "number" == typeof d || "bigint" == typeof d ? (d = "" + d, null !== c && 6 === c.tag ? (n(u, c.sibling), (h = a(c, d)).return = u) : (n(u, c), (h = rx(d, u.mode, h)).return = u), o(u = h)) : n(u, c)
                }(l, u, c, d);
                return aM = null, h
            } catch (e) {
                if (e === aN || e === aP) throw e;
                var g = rS(29, e, null, l.mode);
                return g.lanes = d, g.return = l, g
            } finally {}
        }
    }
    var a$ = aj(!0),
        aG = aj(!1),
        aH = !1;

    function aq(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }

    function aW(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }

    function aY(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function aV(e, t, n) {
        var r = e.updateQueue;
        if (null === r) return null;
        if (r = r.shared, 0 != (2 & sx)) {
            var a = r.pending;
            return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, t = ry(e), rv(e, null, n), t
        }
        return rm(e, r, t, n), ry(e)
    }

    function aJ(e, t, n) {
        if (null !== (t = t.updateQueue) && (t = t.shared, 0 != (4194048 & n))) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, eF(e, n)
        }
    }

    function aQ(e, t) {
        var n = e.updateQueue,
            r = e.alternate;
        if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
                i = null;
            if (null !== (n = n.firstBaseUpdate)) {
                do {
                    var o = {
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: null,
                        next: null
                    };
                    null === i ? a = i = o : i = i.next = o, n = n.next
                } while (null !== n) null === i ? a = i = t : i = i.next = t
            } else a = i = t;
            n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: i,
                shared: r.shared,
                callbacks: r.callbacks
            }, e.updateQueue = n;
            return
        }
        null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
    }
    var aK = !1;

    function aX() {
        if (aK) {
            var e = ab;
            if (null !== e) throw e
        }
    }

    function aZ(e, t, n, r) {
        aK = !1;
        var a = e.updateQueue;
        aH = !1;
        var i = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            l = a.shared.pending;
        if (null !== l) {
            a.shared.pending = null;
            var s = l,
                u = s.next;
            s.next = null, null === o ? i = u : o.next = u, o = s;
            var c = e.alternate;
            null !== c && (l = (c = c.updateQueue).lastBaseUpdate) !== o && (null === l ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = s)
        }
        if (null !== i) {
            var d = a.baseState;
            for (o = 0, c = u = s = null, l = i;;) {
                var f = -0x20000001 & l.lane,
                    p = f !== l.lane;
                if (p ? (sO & f) === f : (r & f) === f) {
                    0 !== f && f === ay && (aK = !0), null !== c && (c = c.next = {
                        lane: 0,
                        tag: l.tag,
                        payload: l.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var m = e,
                            h = l;
                        switch (f = t, h.tag) {
                            case 1:
                                if ("function" == typeof(m = h.payload)) {
                                    d = m.call(n, d, f);
                                    break e
                                }
                                d = m;
                                break e;
                            case 3:
                                m.flags = -65537 & m.flags | 128;
                            case 0:
                                if (null == (f = "function" == typeof(m = h.payload) ? m.call(n, d, f) : m)) break e;
                                d = T({}, d, f);
                                break e;
                            case 2:
                                aH = !0
                        }
                    }
                    null !== (f = l.callback) && (e.flags |= 64, p && (e.flags |= 8192), null === (p = a.callbacks) ? a.callbacks = [f] : p.push(f))
                } else p = {
                    lane: f,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                }, null === c ? (u = c = p, s = d) : c = c.next = p, o |= f;
                if (null === (l = l.next))
                    if (null === (l = a.shared.pending)) break;
                    else l = (p = l).next, p.next = null, a.lastBaseUpdate = p, a.shared.pending = null
            }
            null === c && (s = d), a.baseState = s, a.firstBaseUpdate = u, a.lastBaseUpdate = c, null === i && (a.shared.lanes = 0), sz |= o, e.lanes = o, e.memoizedState = d
        }
    }

    function a0(e, t) {
        if ("function" != typeof e) throw Error(s(191, e));
        e.call(t)
    }

    function a1(e, t) {
        var n = e.callbacks;
        if (null !== n)
            for (e.callbacks = null, e = 0; e < n.length; e++) a0(n[e], t)
    }
    var a2 = X(null),
        a3 = X(0);

    function a4(e, t) {
        ee(a3, e = sM), ee(a2, t), sM = e | t.baseLanes
    }

    function a5() {
        ee(a3, sM), ee(a2, a2.current)
    }

    function a8() {
        sM = a3.current, Z(a2), Z(a3)
    }
    var a6 = X(null),
        a9 = null;

    function a7(e) {
        var t = e.alternate;
        ee(ii, 1 & ii.current), ee(a6, e), null === a9 && (null === t || null !== a2.current ? a9 = e : null !== t.memoizedState && (a9 = e))
    }

    function ie(e) {
        ee(ii, ii.current), ee(a6, e), null === a9 && (a9 = e)
    }

    function it(e) {
        22 === e.tag ? (ee(ii, ii.current), ee(a6, e), null === a9 && (a9 = e)) : ir()
    }

    function ir() {
        ee(ii, ii.current), ee(a6, a6.current)
    }

    function ia(e) {
        Z(a6), a9 === e && (a9 = null), Z(ii)
    }
    var ii = X(0);

    function io(e, t) {
        ee(a6, a6.current), ee(ii, t)
    }

    function il(e) {
        Z(ii), Z(a6), a9 === e && (a9 = null)
    }

    function is(e) {
        for (var t = e; null !== t;) {
            if (13 === t.tag) {
                var n = t.memoizedState;
                if (null !== n && (null === (n = n.dehydrated) || cK(n) || cX(n))) return t
            } else if (19 === t.tag && "independent" !== t.memoizedProps.revealOrder) {
                if (0 != (128 & t.flags)) return t
            } else if (null !== t.child) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; null === t.sibling;) {
                if (null === t.return || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }
    var iu = 0,
        ic = null,
        id = null,
        ip = null,
        im = !1,
        ih = !1,
        ig = !1,
        iv = 0,
        iy = 0,
        ib = null,
        i_ = 0;

    function iS() {
        throw Error(s(321))
    }

    function iE(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!nj(e[n], t[n])) return !1;
        return !0
    }

    function iw(e, t, n, r, a, i) {
        return iu = i, ic = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Y.H = null === e || null === e.memoizedState ? oC : oO, ig = !1, i = n(r, a), ig = !1, ih && (i = ik(t, n, r, a)), iT(e), i
    }

    function iT(e) {
        Y.H = oP;
        var t = null !== id && null !== id.next;
        if (iu = 0, ip = id = ic = null, im = !1, iy = 0, ib = null, t) throw Error(s(300));
        null === e || oW || null !== (e = e.dependencies) && ar(e) && (oW = !0)
    }

    function ik(e, t, n, r) {
        ic = e;
        var a = 0;
        do {
            if (ih && (ib = null), iy = 0, ih = !1, 25 <= a) throw Error(s(301));
            if (a += 1, ip = id = null, null != e.updateQueue) {
                var i = e.updateQueue;
                i.lastEffect = null, i.events = null, i.stores = null, null != i.memoCache && (i.memoCache.index = 0)
            }
            Y.H = oI, i = t(n, r)
        } while (ih) return i
    }

    function iN() {
        var e = Y.H,
            t = e.useState()[0];
        return t = "function" == typeof t.then ? iL(t) : t, e = e.useState()[0], (null !== id ? id.memoizedState : null) !== e && (ic.flags |= 1024), t
    }

    function ix() {
        var e = 0 !== iv;
        return iv = 0, e
    }

    function iP(e, t, n) {
        t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n
    }

    function iC(e) {
        if (im) {
            for (e = e.memoizedState; null !== e;) {
                var t = e.queue;
                null !== t && (t.pending = null), e = e.next
            }
            im = !1
        }
        iu = 0, ip = id = ic = null, ih = !1, iy = iv = 0, ib = null
    }

    function iO() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return null === ip ? ic.memoizedState = ip = e : ip = ip.next = e, ip
    }

    function iI() {
        if (null === id) {
            var e = ic.alternate;
            e = null !== e ? e.memoizedState : null
        } else e = id.next;
        var t = null === ip ? ic.memoizedState : ip.next;
        if (null !== t) ip = t, id = e;
        else {
            if (null === e) {
                if (null === ic.alternate) throw Error(s(467));
                throw Error(s(310))
            }
            e = {
                memoizedState: (id = e).memoizedState,
                baseState: id.baseState,
                baseQueue: id.baseQueue,
                queue: id.queue,
                next: null
            }, null === ip ? ic.memoizedState = ip = e : ip = ip.next = e
        }
        return ip
    }

    function iR() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }

    function iL(e) {
        var t = iy;
        return iy += 1, null === ib && (ib = []), e = aI(ib, e, t), t = ic, null === (null === ip ? t.memoizedState : ip.next) && (Y.H = null === (t = t.alternate) || null === t.memoizedState ? oC : oO), e
    }

    function iA(e) {
        if (null !== e && "object" == typeof e) {
            if ("function" == typeof e.then) return iL(e);
            if (e.$$typeof === $) return;
            if (e.$$typeof === R) return ai(e)
        }
        throw Error(s(438, String(e)))
    }

    function iD(e) {
        var t = null,
            n = ic.updateQueue;
        if (null !== n && (t = n.memoCache), null == t) {
            var r = ic.alternate;
            null !== r && null !== (r = r.updateQueue) && null != (r = r.memoCache) && (t = {
                data: r.data.map(function(e) {
                    return e.slice()
                }),
                index: 0
            })
        }
        if (null == t && (t = {
                data: [],
                index: 0
            }), null === n && (n = iR(), ic.updateQueue = n), n.memoCache = t, void 0 === (n = t.data[t.index]))
            for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = F;
        return t.index++, n
    }

    function iM(e, t) {
        return "function" == typeof t ? t(e) : t
    }

    function iU(e) {
        return iz(iI(), id, e)
    }

    function iz(e, t, n) {
        var r = e.queue;
        if (null === r) throw Error(s(311));
        r.lastRenderedReducer = n;
        var a = e.baseQueue,
            i = r.pending;
        if (null !== i) {
            if (null !== a) {
                var o = a.next;
                a.next = i.next, i.next = o
            }
            t.baseQueue = a = i, r.pending = null
        }
        if (i = e.baseState, null === a) e.memoizedState = i;
        else {
            t = a.next;
            var l = o = null,
                u = null,
                c = t,
                d = !1;
            do {
                var f = -0x20000001 & c.lane;
                if (f !== c.lane ? (sO & f) === f : (iu & f) === f) {
                    var p = c.revertLane;
                    if (0 === p) null !== u && (u = u.next = {
                        lane: 0,
                        revertLane: 0,
                        gesture: null,
                        action: c.action,
                        hasEagerState: c.hasEagerState,
                        eagerState: c.eagerState,
                        next: null
                    }), f === ay && (d = !0);
                    else if ((iu & p) === p) {
                        c = c.next, p === ay && (d = !0);
                        continue
                    } else f = {
                        lane: 0,
                        revertLane: c.revertLane,
                        gesture: null,
                        action: c.action,
                        hasEagerState: c.hasEagerState,
                        eagerState: c.eagerState,
                        next: null
                    }, null === u ? (l = u = f, o = i) : u = u.next = f, ic.lanes |= p, sz |= p;
                    f = c.action, ig && n(i, f), i = c.hasEagerState ? c.eagerState : n(i, f)
                } else p = {
                    lane: f,
                    revertLane: c.revertLane,
                    gesture: c.gesture,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }, null === u ? (l = u = p, o = i) : u = u.next = p, ic.lanes |= f, sz |= f;
                c = c.next
            } while (null !== c && c !== t) if (null === u ? o = i : u.next = l, !nj(i, e.memoizedState) && (oW = !0, d && null !== (n = ab))) throw n;
            e.memoizedState = i, e.baseState = o, e.baseQueue = u, r.lastRenderedState = i
        }
        return null === a && (r.lanes = 0), [e.memoizedState, r.dispatch]
    }

    function iB(e) {
        var t = iI(),
            n = t.queue;
        if (null === n) throw Error(s(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
        if (null !== a) {
            n.pending = null;
            var o = a = a.next;
            do i = e(i, o.action), o = o.next; while (o !== a) nj(i, t.memoizedState) || (oW = !0), t.memoizedState = i, null === t.baseQueue && (t.baseState = i), n.lastRenderedState = i
        }
        return [i, r]
    }

    function iF(e, t, n) {
        var r = ic,
            a = iI(),
            i = rV;
        if (i) {
            if (void 0 === n) throw Error(s(407));
            n = n()
        } else n = t();
        var o = !nj((id || a).memoizedState, n);
        if (o && (a.memoizedState = n, oW = !0), a = a.queue, ot(iG.bind(null, r, a, e), [e]), i8((e = a.getSnapshot !== t || o || null !== ip && 0 != (1 & ip.memoizedState.tag)) ? 9 : 8, {
                destroy: void 0
            }, i$.bind(null, r, a, n, t), null), e) {
            if (r.flags |= 2048, null === sP) throw Error(s(349));
            i || 0 != (127 & iu) || ij(r, t, n)
        }
        return n
    }

    function ij(e, t, n) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: n
        }, null === (t = ic.updateQueue) ? (t = iR(), ic.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
    }

    function i$(e, t, n, r) {
        t.value = n, t.getSnapshot = r, iH(t) && iq(e)
    }

    function iG(e, t, n) {
        return n(function() {
            iH(t) && iq(e)
        })
    }

    function iH(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !nj(e, n)
        } catch (e) {
            return !0
        }
    }

    function iq(e) {
        var t = rg(e, 2);
        null !== t && un(t, e, 2)
    }

    function iW(e) {
        var t = iO();
        return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: iM,
            lastRenderedState: e
        }, t
    }

    function iY(e, t, n, r) {
        return e.baseState = n, iz(e, id, "function" == typeof r ? r : iM)
    }

    function iV(e, t, n, r, a) {
        if (ok(e)) throw Error(s(485));
        if (null !== (e = t.action)) {
            var i = {
                payload: a,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(e) {
                    i.listeners.push(e)
                }
            };
            null !== Y.T ? n(!0) : i.isTransition = !1, r(i), null === (n = t.pending) ? (i.next = t.pending = i, iJ(t, i)) : (i.next = n.next, t.pending = n.next = i)
        }
    }

    function iJ(e, t) {
        var n = t.action,
            r = t.payload,
            a = e.state;
        if (t.isTransition) {
            var i = Y.T,
                o = {};
            o.types = null !== i ? i.types : null, Y.T = o;
            try {
                var l = n(a, r),
                    s = Y.S;
                null !== s && s(o, l), iQ(e, t, l)
            } catch (n) {
                iX(e, t, n)
            } finally {
                null !== i && null !== o.types && (i.types = o.types), Y.T = i
            }
        } else try {
            i = n(a, r), iQ(e, t, i)
        } catch (n) {
            iX(e, t, n)
        }
    }

    function iQ(e, t, n) {
        null !== n && "object" == typeof n && "function" == typeof n.then ? n.then(function(n) {
            iK(e, t, n)
        }, function(n) {
            return iX(e, t, n)
        }) : iK(e, t, n)
    }

    function iK(e, t, n) {
        t.status = "fulfilled", t.value = n, iZ(t), e.state = n, null !== (t = e.pending) && ((n = t.next) === t ? e.pending = null : (n = n.next, t.next = n, iJ(e, n)))
    }

    function iX(e, t, n) {
        var r = e.pending;
        if (e.pending = null, null !== r) {
            r = r.next;
            do t.status = "rejected", t.reason = n, iZ(t), t = t.next; while (t !== r)
        }
        e.action = null
    }

    function iZ(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)(0, e[t])()
    }

    function i0(e, t) {
        return t
    }

    function i1(e, t) {
        if (rV) {
            var n = sP.formState;
            if (null !== n) {
                e: {
                    var r = ic;
                    if (rV) {
                        if (rY) {
                            t: {
                                for (var a = rY, i = rQ; 8 !== a.nodeType;)
                                    if (!i || null === (a = cZ(a.nextSibling))) {
                                        a = null;
                                        break t
                                    } a = "F!" === (i = a.data) || "F" === i ? a : null
                            }
                            if (a) {
                                rY = cZ(a.nextSibling), r = "F!" === a.data;
                                break e
                            }
                        }
                        rX(r)
                    }
                    r = !1
                }
                r && (t = n[0])
            }
        }
        return (n = iO()).memoizedState = n.baseState = t, r = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: i0,
            lastRenderedState: t
        }, n.queue = r, n = oE.bind(null, ic, r), r.dispatch = n, r = iW(!1), i = oT.bind(null, ic, !1, r.queue), r = iO(), a = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        }, r.queue = a, n = iV.bind(null, ic, a, i, n), a.dispatch = n, r.memoizedState = e, [t, n, !1]
    }

    function i2(e) {
        return i3(iI(), id, e)
    }

    function i3(e, t, n) {
        if (t = iz(e, t, i0)[0], e = iU(iM)[0], "object" == typeof t && null !== t && "function" == typeof t.then) try {
            var r = iL(t)
        } catch (e) {
            if (e === aN) throw aP;
            throw e
        } else r = t;
        var a = (t = iI()).queue,
            i = a.dispatch;
        return n !== t.memoizedState && (ic.flags |= 2048, i8(9, {
            destroy: void 0
        }, i4.bind(null, a, n), null)), [r, i, e]
    }

    function i4(e, t) {
        e.action = t
    }

    function i5(e) {
        var t = iI(),
            n = id;
        if (null !== n) return i3(t, n, e);
        iI(), t = t.memoizedState;
        var r = (n = iI()).queue.dispatch;
        return n.memoizedState = e, [t, r, !1]
    }

    function i8(e, t, n, r) {
        return e = {
            tag: e,
            create: n,
            deps: r,
            inst: t,
            next: null
        }, null === (t = ic.updateQueue) && (t = iR(), ic.updateQueue = t), null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
    }

    function i6() {
        return iI().memoizedState
    }

    function i9(e, t, n, r) {
        var a = iO();
        ic.flags |= e, a.memoizedState = i8(1 | t, {
            destroy: void 0
        }, n, void 0 === r ? null : r)
    }

    function i7(e, t, n, r) {
        var a = iI();
        r = void 0 === r ? null : r;
        var i = a.memoizedState.inst;
        null !== id && null !== r && iE(r, id.memoizedState.deps) ? a.memoizedState = i8(t, i, n, r) : (ic.flags |= e, a.memoizedState = i8(1 | t, i, n, r))
    }

    function oe(e, t) {
        i9(8390656, 8, e, t)
    }

    function ot(e, t) {
        i7(2048, 8, e, t)
    }

    function on(e) {
        var t = iI().memoizedState,
            n = {
                ref: t,
                nextImpl: e
            };
        ic.flags |= 4;
        var r = ic.updateQueue;
        if (null === r) r = iR(), ic.updateQueue = r, r.events = [n];
        else {
            var a = r.events;
            null === a ? r.events = [n] : a.push(n)
        }
        return function() {
            if (0 != (2 & sx)) throw Error(s(440));
            return t.impl.apply(void 0, arguments)
        }
    }

    function or(e, t) {
        return i7(4, 2, e, t)
    }

    function oa(e, t) {
        return i7(4, 4, e, t)
    }

    function oi(e, t) {
        if ("function" == typeof t) {
            var n = t(e = e());
            return function() {
                "function" == typeof n ? n() : t(null)
            }
        }
        if (null != t) return t.current = e = e(),
            function() {
                t.current = null
            }
    }

    function oo(e, t, n) {
        n = null != n ? n.concat([e]) : null, i7(4, 4, oi.bind(null, t, e), n)
    }

    function ol() {}

    function os(e, t) {
        var n = iI();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== t && iE(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
    }

    function ou(e, t) {
        var n = iI();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== t && iE(t, r[1]) ? r[0] : (n.memoizedState = [r = e(), t], r)
    }

    function oc(e, t, n) {
        return void 0 === n || 0 != (0x40000000 & iu) && 0 == (261930 & sO) ? e.memoizedState = t : (e.memoizedState = n, e = ue(), ic.lanes |= e, sz |= e, n)
    }

    function od(e, t, n, r) {
        return nj(n, t) ? n : null !== a2.current ? (nj(e = oc(e, n, r), t) || (oW = !0), e) : 0 == (106 & iu) || 0 != (0x40000000 & iu) && 0 == (261930 & sO) ? (oW = !0, e.memoizedState = n) : (e = ue(), ic.lanes |= e, sz |= e, t)
    }

    function of(e, t, n, r, a) {
        var i = V.p;
        V.p = 0 !== i && 8 > i ? i : 8;
        var o = Y.T,
            l = {};
        l.types = null !== o ? o.types : null, Y.T = l, oT(e, !1, t, n);
        try {
            var s = a(),
                u = Y.S;
            if (null !== u && u(l, s), null !== s && "object" == typeof s && "function" == typeof s.then) {
                var c, d, f = (c = [], d = {
                    status: "pending",
                    value: null,
                    reason: null,
                    then: function(e) {
                        c.push(e)
                    }
                }, s.then(function() {
                    d.status = "fulfilled", d.value = r;
                    for (var e = 0; e < c.length; e++)(0, c[e])(r)
                }, function(e) {
                    for (d.status = "rejected", d.reason = e, e = 0; e < c.length; e++)(0, c[e])(void 0)
                }), d);
                ow(e, t, f, s7())
            } else ow(e, t, r, s7())
        } catch (n) {
            ow(e, t, {
                then: function() {},
                status: "rejected",
                reason: n
            }, s7())
        } finally {
            V.p = i, null !== o && null !== l.types && (o.types = l.types), Y.T = o
        }
    }

    function op() {}

    function om(e, t, n, r) {
        if (5 !== e.tag) throw Error(s(476));
        var a = oh(e).queue;
        of(e, a, t, J, null === n ? op : function() {
            return og(e), n(r)
        })
    }

    function oh(e) {
        var t = e.memoizedState;
        if (null !== t) return t;
        var n = {};
        return (t = {
            memoizedState: J,
            baseState: J,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: iM,
                lastRenderedState: J
            },
            next: null
        }).next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: iM,
                lastRenderedState: n
            },
            next: null
        }, e.memoizedState = t, null !== (e = e.alternate) && (e.memoizedState = t), t
    }

    function og(e) {
        var t = oh(e);
        null === t.next && (t = e.alternate.memoizedState), ow(e, t.next.queue, {}, s7())
    }

    function ov() {
        return ai(dx)
    }

    function oy() {
        return iI().memoizedState
    }

    function ob() {
        return iI().memoizedState
    }

    function o_(e) {
        for (var t = e.return; null !== t;) {
            switch (t.tag) {
                case 24:
                case 3:
                    var n = s7(),
                        r = aV(t, e = aY(n), n);
                    null !== r && (un(r, t, n), aJ(r, t, n)), t = {
                        cache: af()
                    }, e.payload = t;
                    return
            }
            t = t.return
        }
    }

    function oS(e, t, n) {
        var r = s7();
        n = {
            lane: r,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, ok(e) ? oN(t, n) : null !== (n = rh(e, t, n, r)) && (un(n, e, r), ox(n, t, r))
    }

    function oE(e, t, n) {
        ow(e, t, n, s7())
    }

    function ow(e, t, n, r) {
        var a = {
            lane: r,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (ok(e)) oN(t, a);
        else {
            var i = e.alternate;
            if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer)) try {
                var o = t.lastRenderedState,
                    l = i(o, n);
                if (a.hasEagerState = !0, a.eagerState = l, nj(l, o)) return rm(e, t, a, 0), null === sP && rp(), !1
            } catch (e) {} finally {}
            if (null !== (n = rh(e, t, a, r))) return un(n, e, r), ox(n, t, r), !0
        }
        return !1
    }

    function oT(e, t, n, r) {
        if (r = {
                lane: 2,
                revertLane: uJ(),
                gesture: null,
                action: r,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, ok(e)) {
            if (t) throw Error(s(479))
        } else null !== (t = rh(e, n, r, 2)) && un(t, e, 2)
    }

    function ok(e) {
        var t = e.alternate;
        return e === ic || null !== t && t === ic
    }

    function oN(e, t) {
        ih = im = !0;
        var n = e.pending;
        null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
    }

    function ox(e, t, n) {
        if (0 != (4194048 & n)) {
            var r = t.lanes;
            r &= e.pendingLanes, t.lanes = n |= r, eF(e, n)
        }
    }
    var oP = {
            readContext: ai,
            use: iA,
            useCallback: iS,
            useContext: iS,
            useEffect: iS,
            useImperativeHandle: iS,
            useLayoutEffect: iS,
            useInsertionEffect: iS,
            useMemo: iS,
            useReducer: iS,
            useRef: iS,
            useState: iS,
            useDebugValue: iS,
            useDeferredValue: iS,
            useTransition: iS,
            useSyncExternalStore: iS,
            useId: iS,
            useHostTransitionStatus: iS,
            useFormState: iS,
            useActionState: iS,
            useOptimistic: iS,
            useMemoCache: iS,
            useCacheRefresh: iS,
            useEffectEvent: iS
        },
        oC = {
            readContext: ai,
            use: iA,
            useCallback: function(e, t) {
                return iO().memoizedState = [e, void 0 === t ? null : t], e
            },
            useContext: ai,
            useEffect: oe,
            useImperativeHandle: function(e, t, n) {
                n = null != n ? n.concat([e]) : null, i9(4194308, 4, oi.bind(null, t, e), n)
            },
            useLayoutEffect: function(e, t) {
                return i9(4194308, 4, e, t)
            },
            useInsertionEffect: function(e, t) {
                i9(4, 2, e, t)
            },
            useMemo: function(e, t) {
                var n = iO();
                t = void 0 === t ? null : t;
                var r = e();
                return n.memoizedState = [r, t], r
            },
            useReducer: function(e, t, n) {
                var r = iO();
                if (void 0 !== n) var a = n(t);
                else a = t;
                return r.memoizedState = r.baseState = a, r.queue = e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: a
                }, e = e.dispatch = oS.bind(null, ic, e), [r.memoizedState, e]
            },
            useRef: function(e) {
                return iO().memoizedState = {
                    current: e
                }
            },
            useState: function(e) {
                var t = (e = iW(e)).queue,
                    n = oE.bind(null, ic, t);
                return t.dispatch = n, [e.memoizedState, n]
            },
            useDebugValue: ol,
            useDeferredValue: function(e, t) {
                return oc(iO(), e, t)
            },
            useTransition: function() {
                var e = iW(!1);
                return e = of.bind(null, ic, e.queue, !0, !1), iO().memoizedState = e, [!1, e]
            },
            useSyncExternalStore: function(e, t, n) {
                var r = ic,
                    a = iO();
                if (rV) {
                    if (void 0 === n) throw Error(s(407));
                    n = n()
                } else {
                    if (n = t(), null === sP) throw Error(s(349));
                    0 != (127 & sO) || ij(r, t, n)
                }
                a.memoizedState = n;
                var i = {
                    value: n,
                    getSnapshot: t
                };
                return a.queue = i, oe(iG.bind(null, r, i, e), [e]), r.flags |= 2048, i8(9, {
                    destroy: void 0
                }, i$.bind(null, r, i, n, t), null), n
            },
            useId: function() {
                var e = iO(),
                    t = sP.identifierPrefix;
                if (rV) {
                    var n = rF,
                        r = rB;
                    t = "_" + t + "R_" + (n = (r & ~(1 << 32 - ex(r) - 1)).toString(32) + n), 0 < (n = iv++) && (t += "H" + n.toString(32)), t += "_"
                } else t = "_" + t + "r_" + (n = i_++).toString(32) + "_";
                return e.memoizedState = t
            },
            useHostTransitionStatus: ov,
            useFormState: i1,
            useActionState: i1,
            useOptimistic: function(e) {
                var t = iO();
                t.memoizedState = t.baseState = e;
                var n = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = n, t = oT.bind(null, ic, !0, n), n.dispatch = t, [e, t]
            },
            useMemoCache: iD,
            useCacheRefresh: function() {
                return iO().memoizedState = o_.bind(null, ic)
            },
            useEffectEvent: function(e) {
                var t = iO(),
                    n = {
                        impl: e
                    };
                return t.memoizedState = n,
                    function() {
                        if (0 != (2 & sx)) throw Error(s(440));
                        return n.impl.apply(void 0, arguments)
                    }
            }
        },
        oO = {
            readContext: ai,
            use: iA,
            useCallback: os,
            useContext: ai,
            useEffect: ot,
            useImperativeHandle: oo,
            useInsertionEffect: or,
            useLayoutEffect: oa,
            useMemo: ou,
            useReducer: iU,
            useRef: i6,
            useState: function() {
                return iU(iM)
            },
            useDebugValue: ol,
            useDeferredValue: function(e, t) {
                return od(iI(), id.memoizedState, e, t)
            },
            useTransition: function() {
                var e = iU(iM)[0],
                    t = iI().memoizedState;
                return ["boolean" == typeof e ? e : iL(e), t]
            },
            useSyncExternalStore: iF,
            useId: oy,
            useHostTransitionStatus: ov,
            useFormState: i2,
            useActionState: i2,
            useOptimistic: function(e, t) {
                return iY(iI(), id, e, t)
            },
            useMemoCache: iD,
            useCacheRefresh: ob,
            useEffectEvent: on
        },
        oI = {
            readContext: ai,
            use: iA,
            useCallback: os,
            useContext: ai,
            useEffect: ot,
            useImperativeHandle: oo,
            useInsertionEffect: or,
            useLayoutEffect: oa,
            useMemo: ou,
            useReducer: iB,
            useRef: i6,
            useState: function() {
                return iB(iM)
            },
            useDebugValue: ol,
            useDeferredValue: function(e, t) {
                var n = iI();
                return null === id ? oc(n, e, t) : od(n, id.memoizedState, e, t)
            },
            useTransition: function() {
                var e = iB(iM)[0],
                    t = iI().memoizedState;
                return ["boolean" == typeof e ? e : iL(e), t]
            },
            useSyncExternalStore: iF,
            useId: oy,
            useHostTransitionStatus: ov,
            useFormState: i5,
            useActionState: i5,
            useOptimistic: function(e, t) {
                var n = iI();
                return null !== id ? iY(n, id, e, t) : (n.baseState = e, [e, n.queue.dispatch])
            },
            useMemoCache: iD,
            useCacheRefresh: ob,
            useEffectEvent: on
        };

    function oR(e, t, n, r) {
        n = null == (n = n(r, t = e.memoizedState)) ? t : T({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
    }
    var oL = {
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = s7(),
                a = aY(r);
            a.payload = t, null != n && (a.callback = n), null !== (t = aV(e, a, r)) && (un(t, e, r), aJ(t, e, r))
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = s7(),
                a = aY(r);
            a.tag = 1, a.payload = t, null != n && (a.callback = n), null !== (t = aV(e, a, r)) && (un(t, e, r), aJ(t, e, r))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = s7(),
                r = aY(n);
            r.tag = 2, null != t && (r.callback = t), null !== (t = aV(e, r, n)) && (un(t, e, n), aJ(t, e, n))
        }
    };

    function oA(e, t, n, r, a, i, o) {
        return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, i, o) : !t.prototype || !t.prototype.isPureReactComponent || !n$(n, r) || !n$(a, i)
    }

    function oD(e, t, n, r) {
        e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && oL.enqueueReplaceState(t, t.state, null)
    }

    function oM(e, t) {
        var n = t;
        if ("ref" in t)
            for (var r in n = {}, t) "ref" !== r && (n[r] = t[r]);
        if (e = e.defaultProps)
            for (var a in n === t && (n = T({}, n)), e) void 0 === n[a] && (n[a] = e[a]);
        return n
    }

    function oU(e) {
        ru(e)
    }

    function oz(e) {
        console.error(e)
    }

    function oB(e) {
        ru(e)
    }

    function oF(e, t) {
        try {
            (0, e.onUncaughtError)(t.value, {
                componentStack: t.stack
            })
        } catch (e) {
            setTimeout(function() {
                throw e
            })
        }
    }

    function oj(e, t, n) {
        try {
            (0, e.onCaughtError)(n.value, {
                componentStack: n.stack,
                errorBoundary: 1 === t.tag ? t.stateNode : null
            })
        } catch (e) {
            setTimeout(function() {
                throw e
            })
        }
    }

    function o$(e, t, n) {
        return (n = aY(n)).tag = 3, n.payload = {
            element: null
        }, n.callback = function() {
            oF(e, t)
        }, n
    }

    function oG(e) {
        return (e = aY(e)).tag = 3, e
    }

    function oH(e, t, n, r) {
        var a = n.type.getDerivedStateFromError;
        if ("function" == typeof a) {
            var i = r.value;
            e.payload = function() {
                return a(i)
            }, e.callback = function() {
                oj(t, n, r)
            }
        }
        var o = n.stateNode;
        null !== o && "function" == typeof o.componentDidCatch && (e.callback = function() {
            oj(t, n, r), "function" != typeof a && (null === sQ ? sQ = new Set([this]) : sQ.add(this));
            var e = r.stack;
            this.componentDidCatch(r.value, {
                componentStack: null !== e ? e : ""
            })
        })
    }
    var oq = Error(s(461)),
        oW = !1;

    function oY(e, t, n, r) {
        t.child = null === e ? aG(t, null, n, r) : a$(t, e.child, n, r)
    }

    function oV(e, t, n, r, a) {
        n = n.render;
        var i = t.ref;
        if ("ref" in r) {
            var o = {};
            for (var l in r) "ref" !== l && (o[l] = r[l])
        } else o = r;
        return (aa(t), r = iw(e, t, n, o, i, a), l = ix(), null === e || oW) ? (rV && l && rG(t), t.flags |= 1, oY(e, t, r, a), t.child) : (iP(e, t, a), lc(e, t, a))
    }

    function oJ(e, t, n, r, a) {
        if (null === e) {
            var i = n.type;
            return "function" != typeof i || rE(i) || void 0 !== i.defaultProps || null !== n.compare ? ((e = rk(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = i, oQ(e, t, i, r, a))
        }
        if (i = e.child, !ld(e, a)) {
            var o = i.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : n$)(o, r) && e.ref === t.ref) return lc(e, t, a)
        }
        return t.flags |= 1, (e = rw(i, r)).ref = t.ref, e.return = t, t.child = e
    }

    function oQ(e, t, n, r, a) {
        if (null !== e) {
            var i = e.memoizedProps;
            if (n$(i, r) && e.ref === t.ref)
                if (oW = !1, t.pendingProps = r = i, !ld(e, a)) return t.lanes = e.lanes, lc(e, t, a);
                else 0 != (131072 & e.flags) && (oW = !0)
        }
        return o3(e, t, n, r, a)
    }

    function oK(e, t, n, r) {
        var a = r.children,
            i = null !== e ? e.memoizedState : null;
        if (null === e && null === t.stateNode && (t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }), "hidden" === r.mode) {
            if (0 != (128 & t.flags)) {
                if (i = null !== i ? i.baseLanes | n : n, null !== e) {
                    for (r = t.child = e.child, a = 0; null !== r;) a = a | r.lanes | r.childLanes, r = r.sibling;
                    r = a & ~i
                } else r = 0, t.child = null;
                return oZ(e, t, i, n, r)
            }
            if (0 == (0x20000000 & n)) return r = t.lanes = 0x20000000, oZ(e, t, null !== i ? i.baseLanes | n : n, n, r);
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, null !== e && aT(t, null !== i ? i.cachePool : null), null !== i ? a4(t, i) : a5(), it(t)
        } else null !== i ? (aT(t, i.cachePool), a4(t, i), ir(), t.memoizedState = null) : (null !== e && aT(t, null), a5(), ir());
        return oY(e, t, a, n), t.child
    }

    function oX(e, t) {
        return null !== e && 22 === e.tag || null !== t.stateNode || (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }), t.sibling
    }

    function oZ(e, t, n, r, a) {
        var i = aw();
        return t.memoizedState = {
            baseLanes: n,
            cachePool: i = null === i ? null : {
                parent: ad._currentValue,
                pool: i
            }
        }, null !== e && aT(t, null), a5(), it(t), null !== e && an(e, t, r, !0), t.childLanes = a, null
    }

    function o0(e, t) {
        return (t = ln({
            mode: t.mode,
            children: t.children
        }, e.mode)).ref = e.ref, e.child = t, t.return = e, t
    }

    function o1(e, t, n) {
        return a$(t, e.child, null, n), e = o0(t, t.pendingProps), e.flags |= 2, ia(t), t.memoizedState = null, e
    }

    function o2(e, t) {
        var n = t.ref;
        if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
        else {
            if ("function" != typeof n && "object" != typeof n) throw Error(s(284));
            (null === e || e.ref !== n) && (t.flags |= 4194816)
        }
    }

    function o3(e, t, n, r, a) {
        return (aa(t), n = iw(e, t, n, r, void 0, a), r = ix(), null === e || oW) ? (rV && r && rG(t), t.flags |= 1, oY(e, t, n, a), t.child) : (iP(e, t, a), lc(e, t, a))
    }

    function o4(e, t, n, r, a, i) {
        return (aa(t), t.updateQueue = null, n = ik(t, r, n, a), iT(e), r = ix(), null === e || oW) ? (rV && r && rG(t), t.flags |= 1, oY(e, t, n, i), t.child) : (iP(e, t, i), lc(e, t, i))
    }

    function o5(e, t, n, r, a) {
        if (aa(t), null === t.stateNode) {
            var i = rb,
                o = n.contextType;
            "object" == typeof o && null !== o && (i = ai(o)), t.memoizedState = null !== (i = new n(r, i)).state && void 0 !== i.state ? i.state : null, i.updater = oL, t.stateNode = i, i._reactInternals = t, (i = t.stateNode).props = r, i.state = t.memoizedState, i.refs = {}, aq(t), o = n.contextType, i.context = "object" == typeof o && null !== o ? ai(o) : rb, i.state = t.memoizedState, "function" == typeof(o = n.getDerivedStateFromProps) && (oR(t, n, o, r), i.state = t.memoizedState), "function" == typeof n.getDerivedStateFromProps || "function" == typeof i.getSnapshotBeforeUpdate || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || (o = i.state, "function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), o !== i.state && oL.enqueueReplaceState(i, i.state, null), aZ(t, r, i, a), aX(), i.state = t.memoizedState), "function" == typeof i.componentDidMount && (t.flags |= 4194308), r = !0
        } else if (null === e) {
            i = t.stateNode;
            var l = t.memoizedProps,
                s = oM(n, l);
            i.props = s;
            var u = i.context,
                c = n.contextType;
            o = rb, "object" == typeof c && null !== c && (o = ai(c));
            var d = n.getDerivedStateFromProps;
            c = "function" == typeof d || "function" == typeof i.getSnapshotBeforeUpdate, l = t.pendingProps !== l, c || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (l || u !== o) && oD(t, i, r, o), aH = !1;
            var f = t.memoizedState;
            i.state = f, aZ(t, r, i, a), aX(), u = t.memoizedState, l || f !== u || aH ? ("function" == typeof d && (oR(t, n, d, r), u = t.memoizedState), (s = aH || oA(t, n, s, r, f, u, o)) ? (c || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || ("function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" == typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = o, r = s) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), r = !1)
        } else {
            i = t.stateNode, aW(e, t), c = oM(n, o = t.memoizedProps), i.props = c, d = t.pendingProps, f = i.context, u = n.contextType, s = rb, "object" == typeof u && null !== u && (s = ai(u)), (u = "function" == typeof(l = n.getDerivedStateFromProps) || "function" == typeof i.getSnapshotBeforeUpdate) || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (o !== d || f !== s) && oD(t, i, r, s), aH = !1, f = t.memoizedState, i.state = f, aZ(t, r, i, a), aX();
            var p = t.memoizedState;
            o !== d || f !== p || aH || null !== e && null !== e.dependencies && ar(e.dependencies) ? ("function" == typeof l && (oR(t, n, l, r), p = t.memoizedState), (c = aH || oA(t, n, c, r, f, p, s) || null !== e && null !== e.dependencies && ar(e.dependencies)) ? (u || "function" != typeof i.UNSAFE_componentWillUpdate && "function" != typeof i.componentWillUpdate || ("function" == typeof i.componentWillUpdate && i.componentWillUpdate(r, p, s), "function" == typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, p, s)), "function" == typeof i.componentDidUpdate && (t.flags |= 4), "function" == typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof i.componentDidUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), i.props = r, i.state = p, i.context = s, r = c) : ("function" != typeof i.componentDidUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
        }
        return i = r, o2(e, t), r = 0 != (128 & t.flags), i || r ? (i = t.stateNode, n = r && "function" != typeof n.getDerivedStateFromError ? null : i.render(), t.flags |= 1, null !== e && r ? (t.child = a$(t, e.child, null, a), t.child = a$(t, null, n, a)) : oY(e, t, n, a), t.memoizedState = i.state, e = t.child) : e = lc(e, t, a), e
    }

    function o8(e, t, n, r) {
        return r2(), t.flags |= 256, oY(e, t, n, r), t.child
    }
    var o6 = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function o9(e) {
        return {
            baseLanes: e,
            cachePool: ak()
        }
    }

    function o7(e, t, n) {
        return e = null !== e ? e.childLanes & ~n : 0, t && (e |= sj), e
    }

    function le(e, t, n) {
        var r, a = t.pendingProps,
            i = !1,
            o = 0 != (128 & t.flags);
        if ((r = o) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & ii.current)), r && (i = !0, t.flags &= -129), r = 0 != (32 & t.flags), t.flags &= -33, null === e) {
            if (rV) {
                if (i ? a7(t) : ir(), (e = rY) ? null !== (e = null !== (e = cQ(e, rQ)) && "&" !== e.data ? e : null) && (t.memoizedState = {
                        dehydrated: e,
                        treeContext: null !== rz ? {
                            id: rB,
                            overflow: rF
                        } : null,
                        retryLane: 0x20000000,
                        hydrationErrors: null
                    }, (n = rP(e)).return = t, t.child = n, rW = t, rY = null) : e = null, null === e) throw rX(t);
                return cX(e) ? t.lanes = 32 : t.lanes = 0x20000000, null
            }
            return (o = a.children, a = a.fallback, i) ? (ir(), o = ln({
                mode: "hidden",
                children: o
            }, i = t.mode), a = rN(a, i, n, null), o.return = t, a.return = t, o.sibling = a, t.child = o, (a = t.child).memoizedState = o9(n), a.childLanes = o7(e, r, n), t.memoizedState = o6, oX(null, a)) : (a7(t), lt(t, o))
        }
        var l = e.memoizedState;
        if (null !== l) {
            var u = l.dehydrated;
            if (null !== u) {
                var c = e,
                    d = t,
                    f = o,
                    p = r,
                    m = a,
                    h = u,
                    g = l,
                    v = n;
                if (f) return 256 & d.flags ? (a7(d), d.flags &= -257, lr(c, d, v)) : null !== d.memoizedState ? (ir(), d.child = c.child, d.flags |= 128, null) : (ir(), h = m.fallback, g = d.mode, m = ln({
                    mode: "visible",
                    children: m.children
                }, g), h = rN(h, g, v, null), h.flags |= 2, m.return = d, h.return = d, m.sibling = h, d.child = m, a$(d, c.child, null, v), (m = d.child).memoizedState = o9(v), m.childLanes = o7(c, p, v), d.memoizedState = o6, oX(null, m));
                if (a7(d), cX(h)) {
                    if (p = h.nextSibling && h.nextSibling.dataset) var y = p.dgst;
                    return "" !== (p = y) && ((m = Error(s(419))).stack = "", m.digest = p, r4({
                        value: m,
                        source: null,
                        stack: null
                    })), lr(c, d, v)
                }
                if (oW || an(c, d, v, !1), p = 0 != (v & c.childLanes), oW || p) {
                    if (null !== a2.current) return lr(c, d, v);
                    if (null !== (p = sP) && 0 !== (m = ej(p, v)) && m !== g.retryLane) throw g.retryLane = m, rg(c, m), un(p, c, m), oq;
                    return cK(h) || up(), lr(c, d, v)
                }
                return cK(h) ? (d.flags |= 192, d.child = c.child, null) : (c = g.treeContext, rY = cZ(h.nextSibling), rW = d, rV = !0, rJ = null, rQ = !1, null !== c && rq(d, c), d = lt(d, m.children), d.flags |= 0x8001000, d)
            }
        }
        return i ? (ir(), i = a.fallback, o = t.mode, u = (l = e.child).sibling, (a = rw(l, {
            mode: "hidden",
            children: a.children
        })).subtreeFlags = 0x47f00000 & l.subtreeFlags, null !== u ? i = rw(u, i) : (i = rN(i, o, n, null), i.flags |= 2), i.return = t, a.return = t, a.sibling = i, t.child = a, oX(null, a), a = t.child, null === (i = e.child.memoizedState) ? i = o9(n) : (null !== (o = i.cachePool) ? (l = ad._currentValue, o = o.parent !== l ? {
            parent: l,
            pool: l
        } : o) : o = ak(), i = {
            baseLanes: i.baseLanes | n,
            cachePool: o
        }), a.memoizedState = i, a.childLanes = o7(e, r, n), t.memoizedState = o6, oX(e.child, a)) : (a7(t), e = (n = e.child).sibling, (n = rw(n, {
            mode: "visible",
            children: a.children
        })).return = t, n.sibling = null, null !== e && (null === (r = t.deletions) ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n)
    }

    function lt(e, t) {
        return (t = ln({
            mode: "visible",
            children: t
        }, e.mode)).return = e, e.child = t
    }

    function ln(e, t) {
        return (e = rS(22, e, null, t)).lanes = 0, e
    }

    function lr(e, t, n) {
        return a$(t, e.child, null, n), e = lt(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
    }

    function la(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        null !== r && (r.lanes |= t), ae(e.return, t, n)
    }

    function li(e) {
        for (var t = null; null !== e;) {
            var n = e.alternate;
            null !== n && null === is(n) && (t = e), e = e.sibling
        }
        return t
    }

    function lo(e, t, n, r, a, i) {
        var o = e.memoizedState;
        null === o ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: a,
            treeForkCount: i
        } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a, o.treeForkCount = i)
    }

    function ll(e) {
        var t = e.child;
        for (e.child = null; null !== t;) {
            var n = t.sibling;
            t.sibling = e.child, e.child = t, t = n
        }
    }

    function ls(e, t, n) {
        var r = t.pendingProps,
            a = r.revealOrder,
            i = r.tail;
        r = r.children;
        var o = ii.current;
        if (128 & t.flags) return io(t, o), null;
        var l = 0 != (2 & o);
        if (l ? (o = 1 & o | 2, t.flags |= 128) : o &= 1, io(t, o), "backwards" === a && null !== e ? (ll(e), oY(e, t, r, n), ll(e)) : oY(e, t, r, n), r = rV ? rD : 0, !l && null !== e && 0 != (128 & e.flags)) e: for (e = t.child; null !== e;) {
            if (13 === e.tag) null !== e.memoizedState && la(e, n, t);
            else if (19 === e.tag) la(e, n, t);
            else if (null !== e.child) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break;
            for (; null === e.sibling;) {
                if (null === e.return || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        switch (a) {
            case "backwards":
                null === (n = li(t.child)) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null, ll(t)), lo(t, !0, a, null, i, r);
                break;
            case "unstable_legacy-backwards":
                for (n = null, a = t.child, t.child = null; null !== a;) {
                    if (null !== (e = a.alternate) && null === is(e)) {
                        t.child = a;
                        break
                    }
                    e = a.sibling, a.sibling = n, n = a, a = e
                }
                lo(t, !0, n, null, i, r);
                break;
            case "together":
                lo(t, !1, null, null, void 0, r);
                break;
            case "independent":
                t.memoizedState = null;
                break;
            default:
                null === (n = li(t.child)) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), lo(t, !1, a, n, i, r)
        }
        return t.child
    }

    function lu(e, t, n) {
        var r = t.pendingProps;
        return r9(t, t.type, r.value), oY(e, t, r.children, n), t.child
    }

    function lc(e, t, n) {
        if (null !== e && (t.dependencies = e.dependencies), sz |= t.lanes, 0 == (n & t.childLanes)) {
            if (null === e) return null;
            else if (an(e, t, n, !1), 0 == (n & t.childLanes)) return null
        }
        if (null !== e && t.child !== e.child) throw Error(s(153));
        if (null !== t.child) {
            for (n = rw(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = rw(e, e.pendingProps)).return = t;
            n.sibling = null
        }
        return t.child
    }

    function ld(e, t) {
        return 0 != (e.lanes & t) || !!(null !== (e = e.dependencies) && ar(e))
    }

    function lf(e, t, n) {
        if (null !== e)
            if (e.memoizedProps !== t.pendingProps) oW = !0;
            else {
                if (!ld(e, n) && 0 == (128 & t.flags)) return oW = !1,
                    function(e, t, n) {
                        switch (t.tag) {
                            case 3:
                                ei(t, t.stateNode.containerInfo), r9(t, ad, e.memoizedState.cache), r2();
                                break;
                            case 27:
                            case 5:
                                el(t);
                                break;
                            case 4:
                                ei(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                r9(t, t.type, t.memoizedProps.value);
                                break;
                            case 31:
                                if (null !== t.memoizedState) return t.flags |= 128, ie(t), null;
                                break;
                            case 13:
                                var r = t.memoizedState;
                                if (null !== r) {
                                    if (null !== r.dehydrated) return a7(t), t.flags |= 128, null;
                                    r = an(e, t, n, !1);
                                    var a = t.child.childLanes;
                                    if (r || 0 != (n & a)) return le(e, t, n);
                                    return a7(t), null !== (e = lc(e, t, n)) ? e.sibling : null
                                }
                                a7(t);
                                break;
                            case 19:
                                if (128 & t.flags) return ls(e, t, n);
                                if (a = 0 != (128 & e.flags), (r = 0 != (n & t.childLanes)) || (an(e, t, n, !1), r = 0 != (n & t.childLanes)), a) {
                                    if (r) return ls(e, t, n);
                                    t.flags |= 128
                                }
                                if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), io(t, ii.current), !r) return null;
                                break;
                            case 22:
                                return t.lanes = 0, oK(e, t, n, t.pendingProps);
                            case 24:
                                r9(t, ad, e.memoizedState.cache)
                        }
                        return lc(e, t, n)
                    }(e, t, n);
                oW = 0 != (131072 & e.flags)
            }
        else oW = !1, rV && 0 != (1048576 & t.flags) && r$(t, rD, t.index);
        switch (t.lanes = 0, t.tag) {
            case 16:
                e: {
                    var r = t.pendingProps;
                    if (e = aR(t.elementType), t.type = e, "function" == typeof e) rE(e) ? (r = oM(e, r), t.tag = 1, t = o5(null, t, e, r, n)) : (t.tag = 0, t = o3(null, t, e, r, n));
                    else {
                        if (null != e) {
                            var a = e.$$typeof;
                            if (a === L) {
                                t.tag = 11, t = oV(null, t, e, r, n);
                                break e
                            }
                            if (a === M) {
                                t.tag = 14, t = oJ(null, t, e, r, n);
                                break e
                            }
                            if (a === R) {
                                t.tag = 10, t.type = e, t = lu(null, t, n);
                                break e
                            }
                        }
                        throw Error(s(306, t = function e(t) {
                            if (null == t) return null;
                            if ("function" == typeof t) return t.$$typeof === q ? null : t.displayName || t.name || null;
                            if ("string" == typeof t) return t;
                            switch (t) {
                                case P:
                                    return "Fragment";
                                case O:
                                    return "Profiler";
                                case C:
                                    return "StrictMode";
                                case A:
                                    return "Suspense";
                                case D:
                                    return "SuspenseList";
                                case z:
                                    return "Activity";
                                case j:
                                    return "ViewTransition"
                            }
                            if ("object" == typeof t) switch (t.$$typeof) {
                                case x:
                                    return "Portal";
                                case R:
                                    return t.displayName || "Context";
                                case I:
                                    return (t._context.displayName || "Context") + ".Consumer";
                                case L:
                                    var n = t.render;
                                    return (t = t.displayName) || (t = "" !== (t = n.displayName || n.name || "") ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
                                case M:
                                    return null !== (n = t.displayName || null) ? n : e(t.type) || "Memo";
                                case U:
                                    n = t._payload, t = t._init;
                                    try {
                                        return e(t(n))
                                    } catch (e) {}
                            }
                            return null
                        }(e) || e, ""))
                    }
                }
                return t;
            case 0:
                return o3(e, t, t.type, t.pendingProps, n);
            case 1:
                return a = oM(r = t.type, t.pendingProps), o5(e, t, r, a, n);
            case 3:
                e: {
                    if (ei(t, t.stateNode.containerInfo), null === e) throw Error(s(387));r = t.pendingProps;
                    var i = t.memoizedState;a = i.element,
                    aW(e, t),
                    aZ(t, r, null, n);
                    var o = t.memoizedState;
                    if (r9(t, ad, r = o.cache), r !== i.cache && at(t, [ad], n, !0), aX(), r = o.element, i.isDehydrated)
                        if (i = {
                                element: r,
                                isDehydrated: !1,
                                cache: o.cache
                            }, t.updateQueue.baseState = i, t.memoizedState = i, 256 & t.flags) {
                            t = o8(e, t, r, n);
                            break e
                        } else if (r !== a) {
                        r4(a = rI(Error(s(424)), t)), t = o8(e, t, r, n);
                        break e
                    } else
                        for (rY = cZ((e = 9 === (e = t.stateNode.containerInfo).nodeType ? e.body : "HTML" === e.nodeName ? e.ownerDocument.body : e).firstChild), rW = t, rV = !0, rJ = null, rQ = !0, n = aG(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 0x8001000, n = n.sibling;
                    else {
                        if (r2(), r === a) {
                            t = lc(e, t, n);
                            break e
                        }
                        oY(e, t, r, n)
                    }
                    t = t.child
                }
                return t;
            case 26:
                return o2(e, t), null === e ? (n = dn(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : rV || (n = t.type, e = t.pendingProps, (r = cp(er.current).createElement(n))[eY] = t, r[eV] = e, cs(r, n, e), e6(r), t.stateNode = r) : t.memoizedState = dn(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
            case 27:
                return el(t), null === e && rV && (r = t.stateNode = c3(t.type, t.pendingProps, er.current), rW = t, rQ = !0, a = rY, cw(t.type) ? (c0 = a, rY = cZ(r.firstChild)) : rY = a), oY(e, t, t.pendingProps.children, n), o2(e, t), null === e && (t.flags |= 4194304), t.child;
            case 5:
                return null === e && rV && ((a = r = rY) && (null !== (r = function(e, t, n, r) {
                    for (; 1 === e.nodeType;) {
                        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                            if (!r && ("INPUT" !== e.nodeName || "hidden" !== e.type)) break
                        } else if (r) {
                            if (!e[e0]) switch (t) {
                                case "meta":
                                    if (!e.hasAttribute("itemprop")) break;
                                    return e;
                                case "link":
                                    if ("stylesheet" === (a = e.getAttribute("rel")) && e.hasAttribute("data-precedence") || a !== n.rel || e.getAttribute("href") !== (null == n.href || "" === n.href ? null : n.href) || e.getAttribute("crossorigin") !== (null == n.crossOrigin ? null : n.crossOrigin) || e.getAttribute("title") !== (null == n.title ? null : n.title)) break;
                                    return e;
                                case "style":
                                    if (e.hasAttribute("data-precedence")) break;
                                    return e;
                                case "script":
                                    if (((a = e.getAttribute("src")) !== (null == n.src ? null : n.src) || e.getAttribute("type") !== (null == n.type ? null : n.type) || e.getAttribute("crossorigin") !== (null == n.crossOrigin ? null : n.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                                    return e;
                                default:
                                    return e
                            }
                        } else {
                            if ("input" !== t || "hidden" !== e.type) return e;
                            var a = null == n.name ? null : "" + n.name;
                            if ("hidden" === n.type && e.getAttribute("name") === a) return e
                        }
                        if (null === (e = cZ(e.nextSibling))) break
                    }
                    return null
                }(r, t.type, t.pendingProps, rQ)) ? (t.stateNode = r, rW = t, rY = cZ(r.firstChild), rQ = !1, a = !0) : a = !1), a || rX(t)), el(t), a = t.type, i = t.pendingProps, o = null !== e ? e.memoizedProps : null, r = i.children, cg(a, i) ? r = null : null !== o && cg(a, o) && (t.flags |= 32), null !== t.memoizedState && (dx._currentValue = a = iw(e, t, iN, null, null, n)), o2(e, t), oY(e, t, r, n), t.child;
            case 6:
                return null === e && rV && ((e = n = rY) && (null !== (n = function(e, t, n) {
                    if ("" === t) return null;
                    for (; 3 !== e.nodeType;)
                        if ((1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) && !n || null === (e = cZ(e.nextSibling))) return null;
                    return e
                }(n, t.pendingProps, rQ)) ? (t.stateNode = n, rW = t, rY = null, e = !0) : e = !1), e || rX(t)), null;
            case 13:
                return le(e, t, n);
            case 4:
                return ei(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = a$(t, null, r, n) : oY(e, t, r, n), t.child;
            case 11:
                return oV(e, t, t.type, t.pendingProps, n);
            case 7:
                return r = t.pendingProps, o2(e, t), oY(e, t, r, n), t.child;
            case 8:
            case 12:
                return oY(e, t, t.pendingProps.children, n), t.child;
            case 10:
                return lu(e, t, n);
            case 9:
                return a = t.type._context, r = t.pendingProps.children, aa(t), r = r(a = ai(a)), t.flags |= 1, oY(e, t, r, n), t.child;
            case 14:
                return oJ(e, t, t.type, t.pendingProps, n);
            case 15:
                return oQ(e, t, t.type, t.pendingProps, n);
            case 19:
                return ls(e, t, n);
            case 31:
                var l = e,
                    u = t,
                    c = n,
                    d = u.pendingProps,
                    f = 0 != (128 & u.flags);
                if (u.flags &= -129, null === l) {
                    if (rV) {
                        if ("hidden" === d.mode) return l = o0(u, d), u.lanes = 0x20000000, oX(null, l);
                        if (ie(u), (l = rY) ? null !== (l = null !== (l = cQ(l, rQ)) && "&" === l.data ? l : null) && (u.memoizedState = {
                                dehydrated: l,
                                treeContext: null !== rz ? {
                                    id: rB,
                                    overflow: rF
                                } : null,
                                retryLane: 0x20000000,
                                hydrationErrors: null
                            }, (c = rP(l)).return = u, u.child = c, rW = u, rY = null) : l = null, null === l) throw rX(u);
                        return u.lanes = 0x20000000, null
                    }
                    return o0(u, d)
                }
                var p = l.memoizedState;
                if (null !== p) {
                    var m = p.dehydrated;
                    if (ie(u), f)
                        if (256 & u.flags) u.flags &= -257, u = o1(l, u, c);
                        else if (null !== u.memoizedState) u.child = l.child, u.flags |= 128, u = null;
                    else throw Error(s(558));
                    else if (oW || an(l, u, c, !1), f = 0 != (c & l.childLanes), oW || f) {
                        if (null === a2.current) {
                            if (null !== (d = sP) && 0 !== (m = ej(d, c)) && m !== p.retryLane) throw p.retryLane = m, rg(l, m), un(d, l, m), oq;
                            up()
                        }
                        u = o1(l, u, c)
                    } else l = p.treeContext, rY = cZ(m.nextSibling), rW = u, rV = !0, rJ = null, rQ = !1, null !== l && rq(u, l), u = o0(u, d), u.flags |= 0x8001000;
                    return u
                }
                return (l = rw(l.child, {
                    mode: d.mode,
                    children: d.children
                })).ref = u.ref, u.child = l, l.return = u, l;
            case 22:
                return oK(e, t, n, t.pendingProps);
            case 24:
                return aa(t), r = ai(ad), null === e ? (null === (a = aw()) && (a = sP, i = af(), a.pooledCache = i, i.refCount++, null !== i && (a.pooledCacheLanes |= n), a = i), t.memoizedState = {
                    parent: r,
                    cache: a
                }, aq(t), r9(t, ad, a)) : (0 != (e.lanes & n) && (aW(e, t), aZ(t, null, null, n), aX()), a = e.memoizedState, i = t.memoizedState, a.parent !== r ? (a = {
                    parent: r,
                    cache: r
                }, t.memoizedState = a, 0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = a), r9(t, ad, r)) : (r9(t, ad, r = i.cache), r !== a.cache && at(t, [ad], n, !0))), oY(e, t, t.pendingProps.children, n), t.child;
            case 30:
                return null === t.stateNode && (t.stateNode = {
                    autoName: null,
                    paired: null,
                    clones: null,
                    ref: null
                }), null != (r = t.pendingProps).name && "auto" !== r.name ? t.flags |= null === e ? 0x1202000 : 0x1200000 : rV && rG(t), null !== e && e.memoizedProps.name !== r.name ? t.flags |= 4194816 : o2(e, t), oY(e, t, r.children, n), t.child;
            case 29:
                throw t.pendingProps
        }
        throw Error(s(156, t.tag))
    }

    function lp(e) {
        e.flags |= 4
    }

    function lm(e, t, n, r, a) {
        var i;
        if ((i = 0 != (32 & e.mode)) && (i = null === n ? dg(t, r) : dg(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet)), i) {
            if (e.flags |= 0x1000000, (0x13ffff40 & a) === a)
                if (e.stateNode.complete) e.flags |= 8192;
                else if (uc()) e.flags |= 8192;
            else throw aL = aC, ax
        } else e.flags &= -0x1000001
    }

    function lh(e, t) {
        if ("stylesheet" !== t.type || 0 != (4 & t.state.loading)) e.flags &= -0x1000001;
        else if (e.flags |= 0x1000000, !dv(t))
            if (uc()) e.flags |= 8192;
            else throw aL = aC, ax
    }

    function lg(e, t) {
        null !== t && (e.flags |= 4), 16384 & e.flags && (t = 22 !== e.tag ? eM() : 0x20000000, e.lanes |= t, s$ |= t)
    }

    function lv(e, t) {
        if (!rV) switch (e.tailMode) {
            case "visible":
                break;
            case "collapsed":
                for (var n = e.tail, r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null;
                break;
            default:
                for (t = e.tail, n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                null === n ? e.tail = null : n.sibling = null
        }
    }

    function ly(e) {
        var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
        if (t)
            for (var a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= 0x47f00000 & a.subtreeFlags, r |= 0x47f00000 & a.flags, a.return = e, a = a.sibling;
        else
            for (a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t
    }

    function lb(e, t) {
        switch (rH(t), t.tag) {
            case 3:
                r7(ad), eo();
                break;
            case 26:
            case 27:
            case 5:
                es(t);
                break;
            case 4:
                eo();
                break;
            case 31:
                null !== t.memoizedState && ia(t);
                break;
            case 13:
                ia(t);
                break;
            case 19:
                il(t);
                break;
            case 10:
                r7(t.type);
                break;
            case 22:
            case 23:
                ia(t), a8(), null !== e && Z(aE);
                break;
            case 24:
                r7(ad)
        }
    }

    function l_(e, t) {
        try {
            var n = t.updateQueue,
                r = null !== n ? n.lastEffect : null;
            if (null !== r) {
                var a = r.next;
                n = a;
                do {
                    if ((n.tag & e) === e) {
                        r = void 0;
                        var i = n.create;
                        n.inst.destroy = r = i()
                    }
                    n = n.next
                } while (n !== a)
            }
        } catch (e) {
            uO(t, t.return, e)
        }
    }

    function lS(e, t, n) {
        try {
            var r = t.updateQueue,
                a = null !== r ? r.lastEffect : null;
            if (null !== a) {
                var i = a.next;
                r = i;
                do {
                    if ((r.tag & e) === e) {
                        var o = r.inst,
                            l = o.destroy;
                        if (void 0 !== l) {
                            o.destroy = void 0, a = t;
                            try {
                                l()
                            } catch (e) {
                                uO(a, n, e)
                            }
                        }
                    }
                    r = r.next
                } while (r !== i)
            }
        } catch (e) {
            uO(t, t.return, e)
        }
    }

    function lE(e) {
        var t = e.updateQueue;
        if (null !== t) {
            var n = e.stateNode;
            try {
                a1(t, n)
            } catch (t) {
                uO(e, e.return, t)
            }
        }
    }

    function lw(e, t, n) {
        n.props = oM(e.type, e.memoizedProps), n.state = e.memoizedState;
        try {
            n.componentWillUnmount()
        } catch (n) {
            uO(e, t, n)
        }
    }

    function lT(e, t) {
        try {
            var n = e.ref;
            if (null !== n) {
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var r = e.stateNode;
                        break;
                    case 30:
                        var a = e.stateNode,
                            i = ro(e.memoizedProps, a);
                        (null === a.ref || a.ref.name !== i) && (a.ref = cL(i)), r = a.ref;
                        break;
                    case 7:
                        if (null === e.stateNode) {
                            var o = new cA(e);
                            m(e.child, !1, cW, o, void 0, void 0), e.stateNode = o
                        }
                        r = e.stateNode;
                        break;
                    default:
                        r = e.stateNode
                }
                "function" == typeof n ? e.refCleanup = n(r) : n.current = r
            }
        } catch (n) {
            uO(e, t, n)
        }
    }

    function lk(e, t) {
        var n = e.ref,
            r = e.refCleanup;
        if (null !== n)
            if ("function" == typeof r) try {
                r()
            } catch (n) {
                uO(e, t, n)
            } finally {
                e.refCleanup = null, null != (e = e.alternate) && (e.refCleanup = null)
            } else if ("function" == typeof n) try {
                n(null)
            } catch (n) {
                uO(e, t, n)
            } else n.current = null
    }

    function lN(e) {
        var t = e.type,
            n = e.memoizedProps,
            r = e.stateNode;
        try {
            switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    n.autoFocus && r.focus();
                    break;
                case "img":
                    n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet)
            }
        } catch (t) {
            uO(e, e.return, t)
        }
    }

    function lx(e, t, n) {
        try {
            var r = e.stateNode;
            (function(e, t, n, r) {
                switch (t) {
                    case "div":
                    case "span":
                    case "svg":
                    case "path":
                    case "a":
                    case "g":
                    case "p":
                    case "li":
                        break;
                    case "input":
                        var a = null,
                            i = null,
                            o = null,
                            l = null,
                            u = null,
                            c = null,
                            d = null;
                        for (m in n) {
                            var f = n[m];
                            if (n.hasOwnProperty(m) && null != f) switch (m) {
                                case "checked":
                                case "value":
                                    break;
                                case "defaultValue":
                                    u = f;
                                default:
                                    r.hasOwnProperty(m) || co(e, t, m, null, r, f)
                            }
                        }
                        for (var p in r) {
                            var m = r[p];
                            if (f = n[p], r.hasOwnProperty(p) && (null != m || null != f)) switch (p) {
                                case "type":
                                    m !== f && (to = !0), i = m;
                                    break;
                                case "name":
                                    m !== f && (to = !0), a = m;
                                    break;
                                case "checked":
                                    m !== f && (to = !0), c = m;
                                    break;
                                case "defaultChecked":
                                    m !== f && (to = !0), d = m;
                                    break;
                                case "value":
                                    m !== f && (to = !0), o = m;
                                    break;
                                case "defaultValue":
                                    m !== f && (to = !0), l = m;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (null != m) throw Error(s(137, t));
                                    break;
                                default:
                                    m !== f && co(e, t, p, m, r, f)
                            }
                        }
                        tv(e, o, l, u, c, d, i, a);
                        return;
                    case "select":
                        for (i in m = o = l = p = null, n)
                            if (u = n[i], n.hasOwnProperty(i) && null != u) switch (i) {
                                case "value":
                                    break;
                                case "multiple":
                                    m = u;
                                default:
                                    r.hasOwnProperty(i) || co(e, t, i, null, r, u)
                            }
                        for (a in r)
                            if (i = r[a], u = n[a], r.hasOwnProperty(a) && (null != i || null != u)) switch (a) {
                                case "value":
                                    i !== u && (to = !0), p = i;
                                    break;
                                case "defaultValue":
                                    i !== u && (to = !0), l = i;
                                    break;
                                case "multiple":
                                    i !== u && (to = !0), o = i;
                                default:
                                    i !== u && co(e, t, a, i, r, u)
                            }
                        t = l, n = o, r = m, null != p ? t_(e, !!n, p, !1) : !!r != !!n && (null != t ? t_(e, !!n, t, !0) : t_(e, !!n, n ? [] : "", !1));
                        return;
                    case "textarea":
                        for (l in m = p = null, n)
                            if (a = n[l], n.hasOwnProperty(l) && null != a && !r.hasOwnProperty(l)) switch (l) {
                                case "value":
                                case "children":
                                    break;
                                default:
                                    co(e, t, l, null, r, a)
                            }
                        for (o in r)
                            if (a = r[o], i = n[o], r.hasOwnProperty(o) && (null != a || null != i)) switch (o) {
                                case "value":
                                    a !== i && (to = !0), p = a;
                                    break;
                                case "defaultValue":
                                    a !== i && (to = !0), m = a;
                                    break;
                                case "children":
                                    break;
                                case "dangerouslySetInnerHTML":
                                    if (null != a) throw Error(s(91));
                                    break;
                                default:
                                    a !== i && co(e, t, o, a, r, i)
                            }
                        tS(e, p, m);
                        return;
                    case "option":
                        for (var h in n) p = n[h], n.hasOwnProperty(h) && null != p && !r.hasOwnProperty(h) && ("selected" === h ? e.selected = !1 : co(e, t, h, null, r, p));
                        for (u in r) p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (null != p || null != m) && ("selected" === u ? (p !== m && (to = !0), e.selected = p && "function" != typeof p && "symbol" != typeof p) : co(e, t, u, p, r, m));
                        return;
                    case "img":
                    case "link":
                    case "area":
                    case "base":
                    case "br":
                    case "col":
                    case "embed":
                    case "hr":
                    case "keygen":
                    case "meta":
                    case "param":
                    case "source":
                    case "track":
                    case "wbr":
                    case "menuitem":
                        for (var g in n) p = n[g], n.hasOwnProperty(g) && null != p && !r.hasOwnProperty(g) && co(e, t, g, null, r, p);
                        for (c in r)
                            if (p = r[c], m = n[c], r.hasOwnProperty(c) && p !== m && (null != p || null != m)) switch (c) {
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (null != p) throw Error(s(137, t));
                                    break;
                                default:
                                    co(e, t, c, p, r, m)
                            }
                        return;
                    default:
                        if (tx(t)) {
                            for (var v in n) p = n[v], n.hasOwnProperty(v) && void 0 !== p && !r.hasOwnProperty(v) && cl(e, t, v, void 0, r, p);
                            for (d in r) p = r[d], m = n[d], r.hasOwnProperty(d) && p !== m && (void 0 !== p || void 0 !== m) && cl(e, t, d, p, r, m);
                            return
                        }
                }
                for (var y in n) p = n[y], n.hasOwnProperty(y) && null != p && !r.hasOwnProperty(y) && co(e, t, y, null, r, p);
                for (f in r) p = r[f], m = n[f], r.hasOwnProperty(f) && p !== m && (null != p || null != m) && co(e, t, f, p, r, m)
            })(r, e.type, n, t), r[eV] = t
        } catch (t) {
            uO(e, e.return, t)
        }
    }

    function lP(e, t) {
        if ((5 === e.tag || 6 === e.tag) && null === e.alternate && null !== t)
            for (var n = 0; n < t.length; n++) cV(e.stateNode, t[n])
    }

    function lC(e) {
        for (var t = e.return; null !== t;) {
            if (lI(t)) {
                var n = t.stateNode,
                    r = e.stateNode;
                if (3 !== r.nodeType) {
                    var a = n._eventListeners;
                    if (null !== a)
                        for (var i = 0; i < a.length; i++) {
                            var o = a[i];
                            r.removeEventListener(o.type, o.listener, o.optionsOrUseCapture)
                        }
                    null != r.reactFragments && r.reactFragments.delete(n)
                }
            }
            if (lO(t)) break;
            t = t.return
        }
    }

    function lO(e) {
        return 5 === e.tag || 3 === e.tag || 26 === e.tag || 27 === e.tag && cw(e.type) || 4 === e.tag
    }

    function lI(e) {
        return e && 7 === e.tag && null !== e.stateNode
    }

    function lR(e) {
        e: for (;;) {
            for (; null === e.sibling;) {
                if (null === e.return || lO(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                if (27 === e.tag && cw(e.type) || 2 & e.flags || null === e.child || 4 === e.tag) continue e;
                e.child.return = e, e = e.child
            }
            if (!(2 & e.flags)) return e.stateNode
        }
    }

    function lL(e, t, n, r) {
        var a = e.tag;
        if (5 === a || 6 === a) a = e.stateNode, t ? n.insertBefore(a, t) : n.appendChild(a), lP(e, r), to = !0;
        else if (4 !== a && (27 === a && cw(e.type) && (n = e.stateNode), null !== (e = e.child)))
            for (lL(e, t, n, r), e = e.sibling; null !== e;) lL(e, t, n, r), e = e.sibling
    }

    function lA(e) {
        var t = e.stateNode,
            n = e.memoizedProps;
        try {
            for (var r = e.type, a = t.attributes; a.length;) t.removeAttributeNode(a[0]);
            cs(t, r, n), t[eY] = e, t[eV] = n
        } catch (t) {
            uO(e, e.return, t)
        }
    }
    var lD = !1,
        lM = null;

    function lU(e) {
        (30 === e.tag || 0 != (0x2000000 & e.subtreeFlags)) && (lD = !0)
    }
    var lz = null;

    function lB() {
        var e = lz;
        return lz = null, e
    }
    var lF = 0;

    function lj(e, t, n, r, a) {
        return lF = 0,
            function e(t, n, r, a, i) {
                for (var o = !1; null !== t;) {
                    if (5 === t.tag) {
                        var l = t.stateNode;
                        if (null !== a) {
                            var s = cC(l);
                            a.push(s), s.view && (o = !0)
                        } else o || cC(l).view && (o = !0);
                        lD = !0, cN(l, 0 === lF ? n : n + "_" + lF, r), lF++
                    } else(22 !== t.tag || null === t.memoizedState) && (30 === t.tag && i || e(t.child, n, r, a, i) && (o = !0));
                    t = t.sibling
                }
                return o
            }(e.child, t, n, r, a)
    }

    function l$(e, t) {
        for (; null !== e;) 5 === e.tag ? cx(e.stateNode, e.memoizedProps) : (22 !== e.tag || null === e.memoizedState) && (30 === e.tag && t || l$(e.child, t)), e = e.sibling
    }

    function lG(e) {
        if (0 != (0x1200000 & e.subtreeFlags))
            for (e = e.child; null !== e;) {
                if ((22 !== e.tag || null === e.memoizedState) && (lG(e), 30 === e.tag && 0 != (0x1200000 & e.flags) && e.stateNode.paired)) {
                    var t = e.memoizedProps;
                    if (null == t.name || "auto" === t.name) throw Error(s(544));
                    var n = t.name;
                    "none" !== (t = rs(t.default, t.share)) && (lj(e, n, t, null, !1) || l$(e.child, !1))
                }
                e = e.sibling
            }
    }

    function lH(e, t) {
        if (30 === e.tag) {
            var n = e.stateNode,
                r = e.memoizedProps,
                a = ro(r, n),
                i = rs(r.default, n.paired ? r.share : r.enter);
            "none" !== i ? lj(e, a, i, null, !1) ? (lG(e), n.paired || t || ut(e, r.onEnter)) : l$(e.child, !1) : lG(e)
        } else if (0 != (0x2000000 & e.subtreeFlags))
            for (e = e.child; null !== e;) lH(e, t), e = e.sibling;
        else lG(e)
    }

    function lq(e) {
        if (null !== lM && 0 !== lM.size) {
            var t = lM;
            if (0 != (0x1200000 & e.subtreeFlags))
                for (e = e.child; null !== e;) {
                    if (22 !== e.tag || null === e.memoizedState) {
                        if (30 === e.tag && 0 != (0x1200000 & e.flags)) {
                            var n = e.memoizedProps,
                                r = n.name;
                            if (null != r && "auto" !== r) {
                                var a = t.get(r);
                                if (void 0 !== a) {
                                    var i = rs(n.default, n.share);
                                    if ("none" !== i && (lj(e, r, i, null, !1) ? (a.paired = i = e.stateNode, i.paired = a, ut(e, n.onShare)) : l$(e.child, !1)), t.delete(r), 0 === t.size) break
                                }
                            }
                        }
                        lq(e)
                    }
                    e = e.sibling
                }
        }
    }

    function lW(e) {
        if (30 === e.tag) {
            var t = e.memoizedProps,
                n = ro(t, e.stateNode),
                r = null !== lM ? lM.get(n) : void 0,
                a = rs(t.default, void 0 !== r ? t.share : t.exit);
            "none" !== a && (lj(e, n, a, null, !1) ? void 0 !== r ? (r.paired = a = e.stateNode, a.paired = r, lM.delete(n), ut(e, t.onShare)) : ut(e, t.onExit) : l$(e.child, !1)), null !== lM && lq(e)
        } else if (0 != (0x2000000 & e.subtreeFlags))
            for (e = e.child; null !== e;) lW(e), e = e.sibling;
        else null !== lM && lq(e)
    }

    function lY(e) {
        if (0 != (0x1200000 & e.subtreeFlags))
            for (e = e.child; null !== e;) {
                if (22 !== e.tag || null === e.memoizedState) {
                    if (30 === e.tag && 0 != (0x1200000 & e.flags)) {
                        var t = e.stateNode;
                        null !== t.paired && (t.paired = null, l$(e.child, !1))
                    }
                    lY(e)
                }
                e = e.sibling
            }
    }

    function lV(e) {
        if (30 === e.tag) e.stateNode.paired = null, l$(e.child, !1), lY(e);
        else if (0 != (0x2000000 & e.subtreeFlags))
            for (e = e.child; null !== e;) lV(e), e = e.sibling;
        else lY(e)
    }

    function lJ(e, t, n, r, a, i, o) {
        for (var l = !1; null !== t;) {
            if (5 === t.tag) {
                var s = t.stateNode;
                if (null !== i && lF < i.length) {
                    var u, c = i[lF],
                        d = cC(s);
                    if ((c.view || d.view) && (l = !0), u = 0 == (4 & e.flags))
                        if (d.clip) u = !0;
                        else {
                            u = c.rect;
                            var f = d.rect;
                            u = u.y !== f.y || u.x !== f.x || u.height !== f.height || u.width !== f.width
                        } u && (e.flags |= 4), d.abs ? d = !c.abs : (c = c.rect, d = d.rect, d = c.height !== d.height || c.width !== d.width), d && (e.flags |= 32)
                } else e.flags |= 32;
                0 != (4 & e.flags) && cN(s, 0 === lF ? n : n + "_" + lF, a), l && 0 != (4 & e.flags) || (null === lz && (lz = []), lz.push(s, 0 === lF ? r : r + "_" + lF, t.memoizedProps)), lF++
            } else(22 !== t.tag || null === t.memoizedState) && (30 === t.tag && o ? e.flags |= 32 & t.flags : lJ(e, t.child, n, r, a, i, o) && (l = !0));
            t = t.sibling
        }
        return l
    }
    var lQ = !1,
        lK = !1,
        lX = !1,
        lZ = !1,
        l0 = "function" == typeof WeakSet ? WeakSet : Set,
        l1 = null,
        l2 = !1,
        l3 = !1,
        l4 = !1,
        l5 = !1;

    function l8(e) {
        for (; null !== l1;) {
            var t = l1,
                n = e,
                r = t.alternate,
                a = t.flags;
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                case 5:
                case 26:
                case 27:
                case 6:
                case 4:
                case 17:
                    break;
                case 1:
                    if (0 != (1024 & a) && null !== r) {
                        n = void 0, a = r.memoizedProps, r = r.memoizedState;
                        var i = t.stateNode;
                        try {
                            var o = oM(t.type, a);
                            n = i.getSnapshotBeforeUpdate(o, r), i.__reactInternalSnapshotBeforeUpdate = n
                        } catch (e) {
                            uO(t, t.return, e)
                        }
                    }
                    break;
                case 3:
                    if (0 != (1024 & a)) {
                        if (9 === (n = (r = t.stateNode.containerInfo).nodeType)) cJ(r);
                        else if (1 === n) switch (r.nodeName) {
                            case "HEAD":
                            case "HTML":
                            case "BODY":
                                cJ(r);
                                break;
                            default:
                                r.textContent = ""
                        }
                    }
                    break;
                case 30:
                    n && null !== r && (n = ro(r.memoizedProps, r.stateNode), "none" !== (a = rs((a = t.memoizedProps).default, a.update)) && lj(r, n, a, r.memoizedState = [], !0));
                    break;
                default:
                    if (0 != (1024 & a)) throw Error(s(163))
            }
            if (null !== (r = t.sibling)) {
                r.return = t.return, l1 = r;
                break
            }
            l1 = t.return
        }
    }

    function l6(e, t, n) {
        var r = n.flags;
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
                sf(e, n), 4 & r && l_(5, n);
                break;
            case 1:
                if (sf(e, n), 4 & r)
                    if (e = n.stateNode, null === t) try {
                        e.componentDidMount()
                    } catch (e) {
                        uO(n, n.return, e)
                    } else {
                        var a = oM(n.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate)
                        } catch (e) {
                            uO(n, n.return, e)
                        }
                    }
                64 & r && lE(n), 512 & r && lT(n, n.return);
                break;
            case 3:
                if (sf(e, n), 64 & r && null !== (e = n.updateQueue)) {
                    if (t = null, null !== n.child) switch (n.child.tag) {
                        case 27:
                        case 5:
                        case 1:
                            t = n.child.stateNode
                    }
                    try {
                        a1(e, t)
                    } catch (e) {
                        uO(n, n.return, e)
                    }
                }
                break;
            case 27:
                null === t && 4 & r && lA(n);
            case 26:
            case 5:
                sf(e, n), null === t && 4 & r && lN(n), 512 & r && lT(n, n.return);
                break;
            case 12:
                sf(e, n);
                break;
            case 31:
                sf(e, n), 4 & r && sr(e, n);
                break;
            case 13:
                sf(e, n), 4 & r && sa(e, n), 64 & r && null !== (e = n.memoizedState) && null !== (e = e.dehydrated) && function(e, t) {
                    var n = e.ownerDocument;
                    if ("$~" === e.data) e._reactRetry = t;
                    else if ("$?" !== e.data || "loading" !== n.readyState) t();
                    else {
                        var r = function() {
                            t(), n.removeEventListener("DOMContentLoaded", r)
                        };
                        n.addEventListener("DOMContentLoaded", r), e._reactRetry = r
                    }
                }(e, n = uA.bind(null, n));
                break;
            case 22:
                if (!(r = null !== n.memoizedState || lQ)) {
                    var i = null !== t && null !== t.memoizedState || lK;
                    t = lQ, a = lK, lQ = r, (lK = i) && !a ? (r = 2, 0 != (8772 & n.subtreeFlags) && (r |= 1), function e(t, n, r) {
                        for (r = 0 != (8772 & n.subtreeFlags) ? r : -2 & r, n = n.child; null !== n;) {
                            var a = n.alternate,
                                i = t,
                                o = n,
                                l = o.flags,
                                s = 0 != (1 & r);
                            switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    e(i, o, r), l_(4, o);
                                    break;
                                case 1:
                                    if (e(i, o, r), "function" == typeof(i = (a = o).stateNode).componentDidMount) try {
                                        i.componentDidMount()
                                    } catch (e) {
                                        uO(a, a.return, e)
                                    }
                                    if (null !== (i = (a = o).updateQueue)) {
                                        var u = a.stateNode;
                                        try {
                                            var c = i.shared.hiddenCallbacks;
                                            if (null !== c)
                                                for (i.shared.hiddenCallbacks = null, i = 0; i < c.length; i++) a0(c[i], u)
                                        } catch (e) {
                                            uO(a, a.return, e)
                                        }
                                    }
                                    s && 64 & l && lE(o), lT(o, o.return);
                                    break;
                                case 27:
                                    0 != (2 & r) && lA(o);
                                case 26:
                                case 5:
                                    if (5 === o.tag) {
                                        u = o;
                                        for (var d = u.return; null !== d && (lI(d) && cV(u.stateNode, d.stateNode), !lO(d));) d = d.return
                                    }
                                    e(i, o, r), s && null === a && 4 & l && lN(o), lT(o, o.return);
                                    break;
                                case 12:
                                    e(i, o, r);
                                    break;
                                case 31:
                                    e(i, o, r), s && 4 & l && sr(i, o);
                                    break;
                                case 13:
                                    e(i, o, r), s && 4 & l && sa(i, o);
                                    break;
                                case 22:
                                    null === o.memoizedState && e(i, o, r), lT(o, o.return);
                                    break;
                                case 30:
                                    e(i, o, r), lT(o, o.return);
                                    break;
                                case 7:
                                    lT(o, o.return);
                                default:
                                    e(i, o, r)
                            }
                            n = n.sibling
                        }
                    }(e, n, r)) : sf(e, n), lQ = t, lK = a
                }
                break;
            case 30:
                sf(e, n), 512 & r && lT(n, n.return);
                break;
            case 7:
                512 & r && lT(n, n.return);
            default:
                sf(e, n)
        }
    }

    function l9(e, t) {
        for (e = e.child; null !== e;)(function e(t, n) {
            switch (t.tag) {
                case 5:
                case 26:
                    try {
                        var r = t.stateNode;
                        if (n) {
                            var a = r.style;
                            "function" == typeof a.setProperty ? a.setProperty("display", "none", "important") : a.display = "none"
                        } else {
                            var i = t.stateNode,
                                o = t.memoizedProps.style,
                                l = null != o && o.hasOwnProperty("display") ? o.display : null;
                            i.style.display = null == l || "boolean" == typeof l ? "" : ("" + l).trim()
                        }
                    } catch (e) {
                        uO(t, t.return, e)
                    }! function t(n, r) {
                        if (0x4000000 & n.subtreeFlags)
                            for (n = n.child; null !== n;) {
                                e: {
                                    var a = n;
                                    switch (a.tag) {
                                        case 4:
                                            e(a, r);
                                            break e;
                                        case 22:
                                            null === a.memoizedState && t(a, r);
                                            break e;
                                        default:
                                            t(a, r)
                                    }
                                }
                                n = n.sibling
                            }
                    }(t, n);
                    break;
                case 6:
                    try {
                        t.stateNode.nodeValue = n ? "" : t.memoizedProps, to = !0
                    } catch (e) {
                        uO(t, t.return, e)
                    }
                    break;
                case 18:
                    try {
                        var s = t.stateNode;
                        n ? ck(s, !0) : ck(t.stateNode, !1)
                    } catch (e) {
                        uO(t, t.return, e)
                    }
                    break;
                case 22:
                case 23:
                    null === t.memoizedState && l9(t, n);
                    break;
                default:
                    l9(t, n)
            }
        })(e, t), e = e.sibling
    }
    var l7 = null,
        se = !1;

    function st(e, t, n) {
        for (n = n.child; null !== n;) sn(e, t, n), n = n.sibling
    }

    function sn(e, t, n) {
        if (eN && "function" == typeof eN.onCommitFiberUnmount) try {
            eN.onCommitFiberUnmount(ek, n)
        } catch (e) {}
        switch (n.tag) {
            case 26:
                lK || lk(n, t), st(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
                break;
            case 27:
                lK || lk(n, t);
                var r = l7,
                    a = se;
                cw(n.type) && (l7 = n.stateNode, se = !1), st(e, t, n), c4(n.stateNode, n.type, n.memoizedProps), l7 = r, se = a;
                break;
            case 5:
                lK || lk(n, t), 5 !== n.tag && 6 !== n.tag || lC(n);
            case 6:
                if (r = l7, a = se, l7 = null, st(e, t, n), l7 = r, se = a, null !== l7)
                    if (se) try {
                        (9 === l7.nodeType ? l7.body : "HTML" === l7.nodeName ? l7.ownerDocument.body : l7).removeChild(n.stateNode), to = !0
                    } catch (e) {
                        uO(n, t, e)
                    } else try {
                        l7.removeChild(n.stateNode), to = !0
                    } catch (e) {
                        uO(n, t, e)
                    }
                break;
            case 18:
                null !== l7 && (se ? (cT(9 === (e = l7).nodeType ? e.body : "HTML" === e.nodeName ? e.ownerDocument.body : e, n.stateNode), d8(e)) : cT(l7, n.stateNode));
                break;
            case 4:
                r = l7, a = se, l7 = n.stateNode.containerInfo, se = !0, st(e, t, n), l7 = r, se = a;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                lS(2, n, t), lK || lS(4, n, t), st(e, t, n);
                break;
            case 1:
                lK || (lk(n, t), "function" == typeof(r = n.stateNode).componentWillUnmount && lw(n, t, r)), st(e, t, n);
                break;
            case 21:
            default:
                st(e, t, n);
                break;
            case 22:
                lK = (r = lK) || null !== n.memoizedState, st(e, t, n), lK = r;
                break;
            case 30:
                lk(n, t), st(e, t, n);
                break;
            case 7:
                lK || lk(n, t), st(e, t, n)
        }
    }

    function sr(e, t) {
        if (null === t.memoizedState && null !== (e = t.alternate) && null !== (e = e.memoizedState)) {
            e = e.dehydrated;
            try {
                d8(e)
            } catch (e) {
                uO(t, t.return, e)
            }
        }
    }

    function sa(e, t) {
        if (null === t.memoizedState && null !== (e = t.alternate) && null !== (e = e.memoizedState) && null !== (e = e.dehydrated)) try {
            d8(e)
        } catch (e) {
            uO(t, t.return, e)
        }
    }

    function si(e, t) {
        var n = function(e) {
            switch (e.tag) {
                case 31:
                case 13:
                case 19:
                    var t = e.stateNode;
                    return null === t && (t = e.stateNode = new l0), t;
                case 22:
                    return null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new l0), t;
                default:
                    throw Error(s(435, e.tag))
            }
        }(e);
        t.forEach(function(t) {
            if (!n.has(t)) {
                n.add(t);
                var r = uD.bind(null, e, t);
                t.then(r, r)
            }
        })
    }

    function so(e, t, n) {
        var r = t.deletions;
        if (null !== r)
            for (var a = 0; a < r.length; a++) {
                var i = r[a],
                    o = e,
                    l = t,
                    u = l;
                e: for (; null !== u;) {
                    switch (u.tag) {
                        case 27:
                            if (cw(u.type)) {
                                l7 = u.stateNode, se = !1;
                                break e
                            }
                            break;
                        case 5:
                            l7 = u.stateNode, se = !1;
                            break e;
                        case 3:
                        case 4:
                            l7 = u.stateNode.containerInfo, se = !0;
                            break e
                    }
                    u = u.return
                }
                if (null === l7) throw Error(s(160));
                sn(o, l, i), l7 = null, se = !1, null !== (o = i.alternate) && (o.return = null), i.return = null
            }
        if (13886 & t.subtreeFlags)
            for (t = t.child; null !== t;) ss(t, e, n), t = t.sibling
    }
    var sl = null;

    function ss(e, t, n) {
        var r = e.alternate,
            a = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (4 & a && null !== (r = null !== (r = e.updateQueue) ? r.events : null))
                    for (var i = 0; i < r.length; i++) {
                        var o = r[i];
                        o.ref.impl = o.nextImpl
                    }
                so(t, e, n), su(e), 4 & a && (lS(3, e, e.return), l_(3, e), lS(5, e, e.return));
                break;
            case 1:
                so(t, e, n), su(e), 512 & a && (lK || null === r || lk(r, r.return)), 64 & a && lQ && null !== (e = e.updateQueue) && null !== (t = e.callbacks) && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = null === n ? t : n.concat(t));
                break;
            case 26:
                if (i = sl, so(t, e, n), su(e), 512 & a && (lK || null === r || lk(r, r.return)), 4 & a)
                    if (n = null !== r ? r.memoizedState : null, t = e.memoizedState, null === r)
                        if (null === t)
                            if (null === e.stateNode) {
                                e: {
                                    t = e.type,
                                    n = e.memoizedProps,
                                    r = i.ownerDocument || i;t: switch (t) {
                                        case "title":
                                            (!(a = r.getElementsByTagName("title")[0]) || a[e0] || a[eY] || "http://www.w3.org/2000/svg" === a.namespaceURI || a.hasAttribute("itemprop")) && (a = r.createElement(t), r.head.insertBefore(a, r.querySelector("head > title"))), cs(a, t, n), a[eY] = e, e6(a), t = a;
                                            break e;
                                        case "link":
                                            if (i = dm("link", "href", r).get(t + (n.href || ""))) {
                                                for (o = 0; o < i.length; o++)
                                                    if ((a = i[o]).getAttribute("href") === (null == n.href || "" === n.href ? null : n.href) && a.getAttribute("rel") === (null == n.rel ? null : n.rel) && a.getAttribute("title") === (null == n.title ? null : n.title) && a.getAttribute("crossorigin") === (null == n.crossOrigin ? null : n.crossOrigin)) {
                                                        i.splice(o, 1);
                                                        break t
                                                    }
                                            }
                                            cs(a = r.createElement(t), t, n), r.head.appendChild(a);
                                            break;
                                        case "meta":
                                            if (i = dm("meta", "content", r).get(t + (n.content || ""))) {
                                                for (o = 0; o < i.length; o++)
                                                    if ((a = i[o]).getAttribute("content") === (null == n.content ? null : "" + n.content) && a.getAttribute("name") === (null == n.name ? null : n.name) && a.getAttribute("property") === (null == n.property ? null : n.property) && a.getAttribute("http-equiv") === (null == n.httpEquiv ? null : n.httpEquiv) && a.getAttribute("charset") === (null == n.charSet ? null : n.charSet)) {
                                                        i.splice(o, 1);
                                                        break t
                                                    }
                                            }
                                            cs(a = r.createElement(t), t, n), r.head.appendChild(a);
                                            break;
                                        default:
                                            throw Error(s(468, t))
                                    }
                                    a[eY] = e,
                                    e6(a),
                                    t = a
                                }
                                e.stateNode = t
                            }
                else dh(i, e.type, e.stateNode);
                else e.stateNode = du(i, t, e.memoizedProps);
                else n !== t ? (null === n ? null !== r.stateNode && (n = r.stateNode).parentNode.removeChild(n) : n.count--, null === t ? dh(i, e.type, e.stateNode) : du(i, t, e.memoizedProps)) : null === t && null !== e.stateNode && lx(e, e.memoizedProps, r.memoizedProps);
                break;
            case 27:
                so(t, e, n), su(e), 512 & a && (lK || null === r || lk(r, r.return)), null !== r && 4 & a && lx(e, e.memoizedProps, r.memoizedProps);
                break;
            case 5:
                if (i = lX, lX = !1, so(t, e, n), lX = i, su(e), 512 & a && (lK || null === r || lk(r, r.return)), 32 & e.flags) {
                    t = e.stateNode;
                    try {
                        tw(t, ""), to = !0
                    } catch (t) {
                        uO(e, e.return, t)
                    }
                }
                4 & a && null != e.stateNode && (t = e.memoizedProps, lx(e, t, null !== r ? r.memoizedProps : t)), 1024 & a && (lZ = !0);
                break;
            case 6:
                if (so(t, e, n), su(e), 4 & a) {
                    if (null === e.stateNode) throw Error(s(162));
                    t = e.memoizedProps, n = e.stateNode;
                    try {
                        n.nodeValue = t, to = !0
                    } catch (t) {
                        uO(e, e.return, t)
                    }
                }
                break;
            case 3:
                if (to = !1, dp = null, i = sl, sl = c9(t.containerInfo), so(t, e, n), sl = i, su(e), 4 & a && null !== r && r.memoizedState.isDehydrated) try {
                    d8(t.containerInfo)
                } catch (t) {
                    uO(e, e.return, t)
                }
                lZ && (lZ = !1, function e(t) {
                    if (1024 & t.subtreeFlags)
                        for (t = t.child; null !== t;) {
                            var n = t;
                            e(n), 5 === n.tag && 1024 & n.flags && (n = n.stateNode, dD = !0, n.reset(), dD = !1), t = t.sibling
                        }
                }(e)), to = !1;
                break;
            case 4:
                r = lX, lX = lQ, a = tl(), i = sl, sl = c9(e.stateNode.containerInfo), so(t, e, n), su(e), sl = i, to && l3 && (l4 = !0), to = a, lX = r;
                break;
            case 12:
                so(t, e, n), su(e);
                break;
            case 31:
            case 19:
                so(t, e, n), su(e), 4 & a && null !== (t = e.updateQueue) && (e.updateQueue = null, si(e, t));
                break;
            case 13:
                so(t, e, n), su(e), 8192 & e.child.flags && null !== e.memoizedState != (null !== r && null !== r.memoizedState) && (sW = ey()), 4 & a && null !== (t = e.updateQueue) && (e.updateQueue = null, si(e, t));
                break;
            case 22:
                i = null !== e.memoizedState, o = null !== r && null !== r.memoizedState;
                var l = lQ,
                    u = lK,
                    c = lX;
                lQ = l || i, lX = c || i, lK = u || o, so(t, e, n), lK = u, lX = c, lQ = l, su(e), 8192 & a && ((t = e.stateNode)._visibility = i ? -2 & t._visibility : 1 | t._visibility, i && (null === r || o || lQ || lK || function e(t, n) {
                    for (t = t.child; null !== t;) {
                        var r = t;
                        switch (r.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                lS(4, r, r.return), e(r, n);
                                break;
                            case 1:
                                lk(r, r.return);
                                var a = r.stateNode;
                                "function" == typeof a.componentWillUnmount && lw(r, r.return, a), e(r, n);
                                break;
                            case 27:
                                0 != (2 & n) && c4(r.stateNode, r.type, r.memoizedProps);
                            case 26:
                            case 5:
                                lk(r, r.return), 5 !== r.tag && 6 !== r.tag || lC(r), e(r, n);
                                break;
                            case 22:
                                null === r.memoizedState && e(r, n);
                                break;
                            case 30:
                                lk(r, r.return), e(r, n);
                                break;
                            case 7:
                                lk(r, r.return);
                            default:
                                e(r, n)
                        }
                        t = t.sibling
                    }
                }(e, 2)), !i && lX || l9(e, i)), 4 & a && null !== (t = e.updateQueue) && null !== (n = t.retryQueue) && (t.retryQueue = null, si(e, n));
                break;
            case 30:
                512 & a && (lK || null === r || lk(r, r.return)), a = tl(), i = l3, o = (0x13ffff00 & n) === n, l = e.memoizedProps, l3 = o && "none" !== rs(l.default, l.update), so(t, e, n), su(e), o && null !== r && to && (e.flags |= 4), l3 = i, to = a;
                break;
            case 21:
                break;
            case 7:
                r && null !== r.stateNode && (r.stateNode._fragmentFiber = e);
            default:
                so(t, e, n), su(e)
        }
    }

    function su(e) {
        var t = e.flags;
        if (2 & t) {
            try {
                for (var n, r = null, a = e.return; null !== a;) {
                    if (lI(a)) {
                        var i = a.stateNode;
                        null === r ? r = [i] : r.push(i)
                    }
                    if (lO(a)) {
                        n = a;
                        break
                    }
                    a = a.return
                }
                if (null == n) throw Error(s(160));
                switch (n.tag) {
                    case 27:
                        var o = n.stateNode,
                            l = lR(e);
                        lL(e, l, o, r);
                        break;
                    case 5:
                        var u = n.stateNode;
                        32 & n.flags && (tw(u, ""), n.flags &= -33);
                        var c = lR(e);
                        lL(e, c, u, r);
                        break;
                    case 3:
                    case 4:
                        var d = n.stateNode.containerInfo,
                            f = lR(e);
                        ! function e(t, n, r, a) {
                            var i = t.tag;
                            if (5 === i || 6 === i) i = t.stateNode, n ? (9 === r.nodeType ? r.body : "HTML" === r.nodeName ? r.ownerDocument.body : r).insertBefore(i, n) : ((n = 9 === r.nodeType ? r.body : "HTML" === r.nodeName ? r.ownerDocument.body : r).appendChild(i), null != (r = r._reactRootContainer) || null !== n.onclick || (n.onclick = tI)), lP(t, a), to = !0;
                            else if (4 !== i && (27 === i && cw(t.type) && (r = t.stateNode, n = null), null !== (t = t.child)))
                                for (e(t, n, r, a), t = t.sibling; null !== t;) e(t, n, r, a), t = t.sibling
                        }(e, f, d, r);
                        break;
                    default:
                        throw Error(s(161))
                }
            } catch (t) {
                uO(e, e.return, t)
            }
            e.flags &= -3
        }
        4096 & t && (e.flags &= -4097)
    }

    function sc(e, t) {
        if (9270 & t.subtreeFlags)
            for (t = t.child; null !== t;) sd(t, e), t = t.sibling;
        else ! function e(t, n) {
            for (t = t.child; null !== t;) {
                if (30 === t.tag) {
                    var r = t.memoizedProps,
                        a = t.stateNode,
                        i = ro(r, a),
                        o = rs(r.default, r.update);
                    if (n) var l = null === (a = a.clones) ? null : a.map(cO);
                    else l = t.memoizedState, t.memoizedState = null;
                    a = t;
                    var s = t.child;
                    lF = 0, i = lJ(a, s, i, i, o, l, !1), 0 != (4 & t.flags) && i && (n || ut(t, r.onUpdate))
                } else 0 != (0x2000000 & t.subtreeFlags) && e(t, n);
                t = t.sibling
            }
        }(t, !1)
    }

    function sd(e, t) {
        var n = e.alternate;
        if (null === n) lH(e, !1);
        else switch (e.tag) {
            case 3:
                if (l5 = l2 = !1, lB(), sc(t, e), !l2 && !l4) {
                    if (null !== (e = lz))
                        for (var r = 0; r < e.length; r += 3) {
                            n = e[r];
                            var a = e[r + 1];
                            cx(n, e[r + 2]), null !== (n = n.ownerDocument.documentElement) && n.animate({
                                opacity: [0, 0],
                                pointerEvents: ["none", "none"]
                            }, {
                                duration: 0,
                                fill: "forwards",
                                pseudoElement: "::view-transition-group(" + a + ")"
                            })
                        }
                    null !== (e = 9 === (e = t.containerInfo).nodeType ? e.documentElement : e.ownerDocument.documentElement) && "" === e.style.viewTransitionName && (e.style.viewTransitionName = "none", e.animate({
                        opacity: [0, 0],
                        pointerEvents: ["none", "none"]
                    }, {
                        duration: 0,
                        fill: "forwards",
                        pseudoElement: "::view-transition-group(root)"
                    }), e.animate({
                        width: [0, 0],
                        height: [0, 0]
                    }, {
                        duration: 0,
                        fill: "forwards",
                        pseudoElement: "::view-transition"
                    })), l5 = !0
                }
                lz = null;
                break;
            case 5:
            default:
                sc(t, e);
                break;
            case 4:
                r = l2, l2 = !1, sc(t, e), l2 && (l4 = !0), l2 = r;
                break;
            case 22:
                null === e.memoizedState && (null !== n.memoizedState ? lH(e, !1) : sc(t, e));
                break;
            case 30:
                r = l2, a = lB(), l2 = !1, sc(t, e), l2 && (e.flags |= 4);
                var i = e.memoizedProps,
                    o = e.stateNode;
                t = ro(i, o), o = ro(n.memoizedProps, o);
                var l = rs(i.default, i.update);
                "none" === l ? t = !1 : (i = n.memoizedState, n.memoizedState = null, n = e.child, lF = 0, t = lJ(e, n, t, o, l, i, !0), lF !== (null === i ? 0 : i.length) && (e.flags |= 32)), 0 != (4 & e.flags) && t ? (ut(e, e.memoizedProps.onUpdate), lz = a) : null !== a && (a.push.apply(a, lz), lz = a), l2 = 0 != (32 & e.flags) || r
        }
    }

    function sf(e, t) {
        if (8772 & t.subtreeFlags)
            for (t = t.child; null !== t;) l6(e, t.alternate, t), t = t.sibling
    }

    function sp(e, t) {
        var n = null;
        null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool), e = null, null !== t.memoizedState && null !== t.memoizedState.cachePool && (e = t.memoizedState.cachePool.pool), e !== n && (null != e && e.refCount++, null != n && ap(n))
    }

    function sm(e, t) {
        e = null, null !== t.alternate && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && ap(e))
    }

    function sh(e, t, n, r) {
        var a = (0x13ffff00 & n) === n;
        if (t.subtreeFlags & (a ? 10262 : 10256))
            for (t = t.child; null !== t;) sg(e, t, n, r), t = t.sibling;
        else a && function e(t) {
            for (t = t.child; null !== t;) 30 === t.tag ? l$(t.child, !1) : 0 != (0x2000000 & t.subtreeFlags) && e(t), t = t.sibling
        }(t)
    }

    function sg(e, t, n, r) {
        var a = (0x13ffff00 & n) === n;
        a && null === t.alternate && null !== t.return && null !== t.return.alternate && lV(t);
        var i = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                sh(e, t, n, r), 2048 & i && l_(9, t);
                break;
            case 1:
            case 31:
            case 13:
            default:
                sh(e, t, n, r);
                break;
            case 3:
                sh(e, t, n, r), a && l5 && ("root" === (e = 9 === (e = e.containerInfo).nodeType ? e.body : "HTML" === e.nodeName ? e.ownerDocument.body : e).style.viewTransitionName && (e.style.viewTransitionName = ""), null !== (e = e.ownerDocument.documentElement) && "none" === e.style.viewTransitionName && (e.style.viewTransitionName = "")), 2048 & i && (i = null, null !== t.alternate && (i = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== i && (t.refCount++, null != i && ap(i)));
                break;
            case 12:
                if (2048 & i) {
                    sh(e, t, n, r), i = t.stateNode;
                    try {
                        var o = t.memoizedProps,
                            l = o.id,
                            s = o.onPostCommit;
                        "function" == typeof s && s(l, null === t.alternate ? "mount" : "update", i.passiveEffectDuration, -0)
                    } catch (e) {
                        uO(t, t.return, e)
                    }
                } else sh(e, t, n, r);
                break;
            case 23:
                break;
            case 22:
                o = t.stateNode, l = t.alternate, null !== t.memoizedState ? (a && null !== l && null === l.memoizedState && lV(l), 2 & o._visibility ? sh(e, t, n, r) : sv(e, t)) : (a && null !== l && null !== l.memoizedState && lV(t), 2 & o._visibility ? sh(e, t, n, r) : (o._visibility |= 2, function e(t, n, r, a, i) {
                    for (i = i && 0 != (10256 & n.subtreeFlags), n = n.child; null !== n;) {
                        var o = n,
                            l = o.flags;
                        switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                e(t, o, r, a, i), l_(8, o);
                                break;
                            case 23:
                                break;
                            case 22:
                                var s = o.stateNode;
                                null !== o.memoizedState ? 2 & s._visibility ? e(t, o, r, a, i) : sv(t, o) : (s._visibility |= 2, e(t, o, r, a, i)), i && 2048 & l && sp(o.alternate, o);
                                break;
                            case 24:
                                e(t, o, r, a, i), i && 2048 & l && sm(o.alternate, o);
                                break;
                            default:
                                e(t, o, r, a, i)
                        }
                        n = n.sibling
                    }
                }(e, t, n, r, 0 != (10256 & t.subtreeFlags)))), 2048 & i && sp(l, t);
                break;
            case 24:
                sh(e, t, n, r), 2048 & i && sm(t.alternate, t);
                break;
            case 30:
                a && null !== (i = t.alternate) && (l$(i.child, !0), l$(t.child, !0)), sh(e, t, n, r)
        }
    }

    function sv(e, t) {
        if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t;) {
                var n = t,
                    r = n.flags;
                switch (n.tag) {
                    case 22:
                        sv(e, n), 2048 & r && sp(n.alternate, n);
                        break;
                    case 24:
                        sv(e, n), 2048 & r && sm(n.alternate, n);
                        break;
                    default:
                        sv(e, n)
                }
                t = t.sibling
            }
    }
    var sy = 8192;

    function sb(e, t, n) {
        if (e.subtreeFlags & sy)
            for (e = e.child; null !== e;) s_(e, t, n), e = e.sibling
    }

    function s_(e, t, n) {
        switch (e.tag) {
            case 26:
                sb(e, t, n), e.flags & sy && (null !== e.memoizedState ? function(e, t, n, r) {
                    if ("stylesheet" === n.type && ("string" != typeof r.media || !1 !== matchMedia(r.media).matches) && 0 == (4 & n.state.loading)) {
                        if (null === n.instance) {
                            var a = dr(r.href),
                                i = t.querySelector(da(a));
                            if (i) {
                                null !== (t = i._p) && "object" == typeof t && "function" == typeof t.then && (e.count++, e = dE.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, e6(i);
                                return
                            }
                            i = t.ownerDocument || t, r = di(r), (a = c8.get(a)) && dd(r, a), e6(i = i.createElement("link"));
                            var o = i;
                            o._p = new Promise(function(e, t) {
                                o.onload = e, o.onerror = t
                            }), cs(i, "link", r), n.instance = i
                        }
                        null === e.stylesheets && (e.stylesheets = new Map), e.stylesheets.set(n, t), (t = n.state.preload) && 0 == (3 & n.state.loading) && (e.count++, n = dE.bind(e), t.addEventListener("load", n), t.addEventListener("error", n))
                    }
                }(n, sl, e.memoizedState, e.memoizedProps) : (e = e.stateNode, (0x13ffff40 & t) === t && db(n, e)));
                break;
            case 5:
                sb(e, t, n), e.flags & sy && (e = e.stateNode, (0x13ffff40 & t) === t && db(n, e));
                break;
            case 3:
            case 4:
                var r = sl;
                sl = c9(e.stateNode.containerInfo), sb(e, t, n), sl = r;
                break;
            case 22:
                null === e.memoizedState && (null !== (r = e.alternate) && null !== r.memoizedState ? (r = sy, sy = 0x1000000, sb(e, t, n), sy = r) : sb(e, t, n));
                break;
            case 30:
                if (0 != (e.flags & sy) && null != (r = e.memoizedProps.name) && "auto" !== r) {
                    var a = e.stateNode;
                    a.paired = null, null === lM && (lM = new Map), lM.set(r, a)
                }
                sb(e, t, n);
                break;
            default:
                sb(e, t, n)
        }
    }

    function sS(e) {
        var t = e.alternate;
        if (null !== t && null !== (e = t.child)) {
            t.child = null;
            do t = e.sibling, e.sibling = null, e = t; while (null !== e)
        }
    }

    function sE(e) {
        var t = e.deletions;
        if (0 != (16 & e.flags)) {
            if (null !== t)
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    l1 = r, sT(r, e)
                }
            sS(e)
        }
        if (10256 & e.subtreeFlags)
            for (e = e.child; null !== e;) sw(e), e = e.sibling
    }

    function sw(e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                sE(e), 2048 & e.flags && lS(9, e, e.return);
                break;
            case 3:
            case 12:
            default:
                sE(e);
                break;
            case 22:
                var t = e.stateNode;
                null !== e.memoizedState && 2 & t._visibility && (null === e.return || 13 !== e.return.tag) ? (t._visibility &= -3, function e(t) {
                    var n = t.deletions;
                    if (0 != (16 & t.flags)) {
                        if (null !== n)
                            for (var r = 0; r < n.length; r++) {
                                var a = n[r];
                                l1 = a, sT(a, t)
                            }
                        sS(t)
                    }
                    for (t = t.child; null !== t;) {
                        switch ((n = t).tag) {
                            case 0:
                            case 11:
                            case 15:
                                lS(8, n, n.return), e(n);
                                break;
                            case 22:
                                2 & (r = n.stateNode)._visibility && (r._visibility &= -3, e(n));
                                break;
                            default:
                                e(n)
                        }
                        t = t.sibling
                    }
                }(e)) : sE(e)
        }
    }

    function sT(e, t) {
        for (; null !== l1;) {
            var n = l1;
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    lS(8, n, t);
                    break;
                case 23:
                case 22:
                    if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
                        var r = n.memoizedState.cachePool.pool;
                        null != r && r.refCount++
                    }
                    break;
                case 24:
                    ap(n.memoizedState.cache)
            }
            if (null !== (r = n.child)) r.return = n, l1 = r;
            else
                for (n = e; null !== l1;) {
                    var a = (r = l1).sibling,
                        i = r.return;
                    if (! function e(t) {
                            var n = t.alternate;
                            null !== n && (t.alternate = null, e(n)), t.child = null, t.deletions = null, t.sibling = null, 5 === t.tag && null !== (n = t.stateNode) && e2(n), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
                        }(r), r === n) {
                        l1 = null;
                        break
                    }
                    if (null !== a) {
                        a.return = i, l1 = a;
                        break
                    }
                    l1 = i
                }
        }
    }
    var sk = {
            getCacheForType: function(e) {
                var t = ai(ad),
                    n = t.data.get(e);
                return void 0 === n && (n = e(), t.data.set(e, n)), n
            },
            cacheSignal: function() {
                return ai(ad).controller.signal
            }
        },
        sN = "function" == typeof WeakMap ? WeakMap : Map,
        sx = 0,
        sP = null,
        sC = null,
        sO = 0,
        sI = 0,
        sR = null,
        sL = !1,
        sA = !1,
        sD = !1,
        sM = 0,
        sU = 0,
        sz = 0,
        sB = 0,
        sF = 0,
        sj = 0,
        s$ = 0,
        sG = null,
        sH = null,
        sq = !1,
        sW = 0,
        sY = 0,
        sV = 1 / 0,
        sJ = null,
        sQ = null,
        sK = 0,
        sX = null,
        sZ = null,
        s0 = 0,
        s1 = 0,
        s2 = null,
        s3 = null,
        s4 = null,
        s5 = null,
        s8 = null,
        s6 = 0,
        s9 = null;

    function s7() {
        return 0 != (2 & sx) && 0 !== sO ? sO & -sO : null !== Y.T ? uJ() : eH()
    }

    function ue() {
        if (0 === sj)
            if (0 == (0x20000000 & sO) || rV) {
                var e = eI;
                0 == (3932160 & (eI <<= 1)) && (eI = 262144), sj = e
            } else sj = 0x20000000;
        return null !== (e = a6.current) && (e.flags |= 32), sj
    }

    function ut(e, t) {
        if (null != t) {
            var n = e.stateNode,
                r = n.ref;
            null === r && (r = n.ref = cL(ro(e.memoizedProps, n))), null === s5 && (s5 = []), s5.push(t.bind(null, r))
        }
    }

    function un(e, t, n) {
        (e === sP && (2 === sI || 9 === sI) || null !== e.cancelPendingCommit) && (us(e, 0), ui(e, sO, sj, !1)), ez(e, n), (0 == (2 & sx) || e !== sP) && (e === sP && (0 == (2 & sx) && (sB |= n), 4 === sU && ui(e, sO, sj, !1)), u$(e))
    }

    function ur(e, t, n) {
        if (0 != (6 & sx)) throw Error(s(327));
        for (var r = !n && 0 == (127 & t) && 0 == (t & e.expiredLanes) || eD(e, t), a = r ? function(e, t) {
                var n = sx;
                sx |= 2;
                var r = ud(),
                    a = uf();
                sP !== e || sO !== t ? (sJ = null, sV = ey() + 500, us(e, t)) : sA = eD(e, t);
                e: for (;;) try {
                    if (0 !== sI && null !== sC) {
                        t = sC;
                        var i = sR;
                        t: switch (sI) {
                            case 1:
                                sI = 0, sR = null, uv(e, t, i, 1);
                                break;
                            case 2:
                            case 9:
                                if (aO(i)) {
                                    sI = 0, sR = null, ug(t);
                                    break
                                }
                                t = function() {
                                    2 !== sI && 9 !== sI || sP !== e || (sI = 7), u$(e)
                                }, i.then(t, t);
                                break e;
                            case 3:
                                sI = 7;
                                break e;
                            case 4:
                                sI = 5;
                                break e;
                            case 7:
                                aO(i) ? (sI = 0, sR = null, ug(t)) : (sI = 0, sR = null, uv(e, t, i, 7));
                                break;
                            case 5:
                                var o = null;
                                switch (sC.tag) {
                                    case 26:
                                        o = sC.memoizedState;
                                    case 5:
                                    case 27:
                                        var l = sC;
                                        if (o ? dv(o) : l.stateNode.complete) {
                                            sI = 0, sR = null;
                                            var u = l.sibling;
                                            if (null !== u) sC = u;
                                            else {
                                                var c = l.return;
                                                null !== c ? (sC = c, uy(c)) : sC = null
                                            }
                                            break t
                                        }
                                }
                                sI = 0, sR = null, uv(e, t, i, 5);
                                break;
                            case 6:
                                sI = 0, sR = null, uv(e, t, i, 6);
                                break;
                            case 8:
                                ul(), sU = 6;
                                break e;
                            default:
                                throw Error(s(462))
                        }
                    }
                    for (; null !== sC && !eg();) uh(sC);
                    break
                } catch (t) {
                    uu(e, t)
                }
                return (r6 = r8 = null, Y.H = r, Y.A = a, sx = n, null !== sC) ? 0 : (sP = null, sO = 0, rp(), sU)
            }(e, t) : um(e, t, !0), i = r;;) {
            if (0 === a) sA && !r && ui(e, t, 0, !1);
            else {
                if (n = e.current.alternate, i && ! function(e) {
                        for (var t = e;;) {
                            var n = t.tag;
                            if ((0 === n || 11 === n || 15 === n) && 16384 & t.flags && null !== (n = t.updateQueue) && null !== (n = n.stores))
                                for (var r = 0; r < n.length; r++) {
                                    var a = n[r],
                                        i = a.getSnapshot;
                                    a = a.value;
                                    try {
                                        if (!nj(i(), a)) return !1
                                    } catch (e) {
                                        return !1
                                    }
                                }
                            if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                            else {
                                if (t === e) break;
                                for (; null === t.sibling;) {
                                    if (null === t.return || t.return === e) return !0;
                                    t = t.return
                                }
                                t.sibling.return = t.return, t = t.sibling
                            }
                        }
                        return !0
                    }(n)) {
                    a = um(e, t, !1), i = !1;
                    continue
                }
                if (2 === a) {
                    if (i = t, e.errorRecoveryDisabledLanes & i) var o = 0;
                    else o = 0 != (o = -0x20000001 & e.pendingLanes) ? o : 0x20000000 & o ? 0x20000000 : 0;
                    if (0 !== o) {
                        t = o;
                        e: {
                            a = sG;
                            var l = e.current.memoizedState.isDehydrated;
                            if (l && (us(e, o).flags |= 256), 2 !== (o = um(e, o, !1)) && 6 !== o) {
                                if (sD && !l) {
                                    e.errorRecoveryDisabledLanes |= i, sB |= i, a = 4;
                                    break e
                                }
                                i = sH, sH = a, null !== i && (null === sH ? sH = i : sH.push.apply(sH, i))
                            }
                            a = o
                        }
                        if (i = !1, 2 !== a) continue
                    }
                }
                if (1 === a) {
                    us(e, 0), ui(e, t, 0, !0);
                    break
                }
                e: {
                    switch (r = e, i = a) {
                        case 0:
                        case 1:
                            throw Error(s(345));
                        case 4:
                            if ((4194048 & t) !== t && (0x3c00000 & t) !== t) break;
                        case 6:
                            ui(r, t, sj, !sL);
                            break e;
                        case 2:
                            sH = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(s(329))
                    }
                    if ((0x3c00000 & t) === t && 10 < (a = sW + 300 - ey())) {
                        if (ui(r, t, sj, !sL), 0 !== eA(r, 0, !0)) break e;
                        s0 = t, r.timeoutHandle = cy(ua.bind(null, r, n, sH, sJ, sq, t, sj, sB, s$, sL, i, "Throttled", -0, 0), a);
                        break e
                    }
                    ua(r, n, sH, sJ, sq, t, sj, sB, s$, sL, i, null, -0, 0)
                }
            }
            break
        }
        u$(e)
    }

    function ua(e, t, n, r, a, i, o, l, s, u, c, d, f, p) {
        e.timeoutHandle = -1;
        var m, h, g = t.subtreeFlags,
            v = (0x13ffff00 & i) === i;
        if (d = null, (v || 8192 & g || 0x1002000 == (0x1002000 & g)) && (lM = null, s_(t, i, d = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: tI
            }), v && (g = d, null != (v = (9 === (v = e.containerInfo).nodeType ? v : v.ownerDocument).__reactViewTransition) && (g.count++, g.waitingForViewTransition = !0, g = dE.bind(g), v.finished.then(g, g))), null !== (m = d, h = g = (0x3c00000 & i) === i ? sW - ey() : (4194048 & i) === i ? sY - ey() : 0, m.stylesheets && 0 === m.count && dk(m, m.stylesheets), g = 0 < m.count || 0 < m.imgCount ? function(e) {
                var t = setTimeout(function() {
                    if (m.stylesheets && dk(m, m.stylesheets), m.unsuspend) {
                        var e = m.unsuspend;
                        m.unsuspend = null, e()
                    }
                }, 6e4 + h);
                0 < m.imgBytes && 0 === d_ && (d_ = 62500 * function() {
                    if ("function" == typeof performance.getEntriesByType) {
                        for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
                            var a = n[r],
                                i = a.transferSize,
                                o = a.initiatorType,
                                l = a.duration;
                            if (i && l && cc(o)) {
                                for (o = 0, l = a.responseEnd, r += 1; r < n.length; r++) {
                                    var s = n[r],
                                        u = s.startTime;
                                    if (u > l) break;
                                    var c = s.transferSize,
                                        d = s.initiatorType;
                                    c && cc(d) && (o += c * ((s = s.responseEnd) < l ? 1 : (l - u) / (s - u)))
                                }
                                if (--r, t += 8 * (i + o) / (a.duration / 1e3), 10 < ++e) break
                            }
                        }
                        if (0 < e) return t / e / 1e6
                    }
                    return navigator.connection && "number" == typeof(e = navigator.connection.downlink) ? e : 5
                }());
                var n = setTimeout(function() {
                    if (m.waitingForImages = !1, 0 === m.count && (m.stylesheets && dk(m, m.stylesheets), m.unsuspend)) {
                        var e = m.unsuspend;
                        m.unsuspend = null, e()
                    }
                }, (m.imgBytes > d_ ? 50 : 800) + h);
                return m.unsuspend = e,
                    function() {
                        m.unsuspend = null, clearTimeout(t), clearTimeout(n)
                    }
            } : null))) {
            s0 = i, e.cancelPendingCommit = g(u_.bind(null, e, t, i, n, r, a, o, l, s, u, c, d, null, f, p)), ui(e, i, o, !u);
            return
        }
        u_(e, t, i, n, r, a, o, l, s, u, c, d)
    }

    function ui(e, t, n, r) {
        t &= ~sF, t &= ~sB, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
        for (var a = t; 0 < a;) {
            var i = 31 - ex(a),
                o = 1 << i;
            r[i] = -1, a &= ~o
        }
        0 !== n && eB(e, n, t)
    }

    function uo() {
        return 0 != (6 & sx) || (uG(0, !1), !1)
    }

    function ul() {
        if (null !== sC) {
            if (0 === sI) var e = sC.return;
            else e = sC, r6 = r8 = null, iC(e), aM = null, aU = 0, e = sC;
            for (; null !== e;) lb(e.alternate, e), e = e.return;
            sC = null
        }
    }

    function us(e, t) {
        var n = e.timeoutHandle; - 1 !== n && (e.timeoutHandle = -1, cb(n)), null !== (n = e.cancelPendingCommit) && (e.cancelPendingCommit = null, n()), s0 = 0, ul(), sP = e, sC = n = rw(e.current, null), sO = t, sI = 0, sR = null, sL = !1, sA = eD(e, t), sD = !1, s$ = sj = sF = sB = sz = sU = 0, sH = sG = null, sq = !1, 0 != (8 & t) && (t |= 32 & t);
        var r = e.entangledLanes;
        if (0 !== r)
            for (e = e.entanglements, r &= t; 0 < r;) {
                var a = 31 - ex(r),
                    i = 1 << a;
                t |= e[a], r &= ~i
            }
        return sM = t, rp(), n
    }

    function uu(e, t) {
        ic = null, Y.H = oP, t === aN || t === aP ? (t = aA(), sI = 3) : t === ax ? (t = aA(), sI = 4) : sI = t === oq ? 8 : null !== t && "object" == typeof t && "function" == typeof t.then ? 6 : 1, sR = t, null === sC && (sU = 1, oF(e, rI(t, e.current)))
    }

    function uc() {
        var e = a6.current;
        return null === e || ((4194048 & sO) === sO ? null === a9 : ((0x3c00000 & sO) === sO || 0 != (0x20000000 & sO)) && e === a9)
    }

    function ud() {
        var e = Y.H;
        return Y.H = oP, null === e ? oP : e
    }

    function uf() {
        var e = Y.A;
        return Y.A = sk, e
    }

    function up() {
        sU = 4, sL || (4194048 & sO) !== sO && null !== a6.current || (sA = !0), 0 == (0x7ffffff & sz) && 0 == (0x7ffffff & sB) || null === sP || ui(sP, sO, sj, !1)
    }

    function um(e, t, n) {
        var r = sx;
        sx |= 2;
        var a = ud(),
            i = uf();
        (sP !== e || sO !== t) && (sJ = null, us(e, t)), t = !1;
        var o = sU;
        e: for (;;) try {
            if (0 !== sI && null !== sC) {
                var l = sC,
                    s = sR;
                switch (sI) {
                    case 8:
                        ul(), o = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        null === a6.current && (t = !0);
                        var u = sI;
                        if (sI = 0, sR = null, uv(e, l, s, u), n && sA) {
                            o = 0;
                            break e
                        }
                        break;
                    default:
                        u = sI, sI = 0, sR = null, uv(e, l, s, u)
                }
            }(function() {
                for (; null !== sC;) uh(sC)
            })(), o = sU;
            break
        } catch (t) {
            uu(e, t)
        }
        return t && e.shellSuspendCounter++, r6 = r8 = null, sx = r, Y.H = a, Y.A = i, null === sC && (sP = null, sO = 0, rp()), o
    }

    function uh(e) {
        var t = lf(e.alternate, e, sM);
        e.memoizedProps = e.pendingProps, null === t ? uy(e) : sC = t
    }

    function ug(e) {
        var t = e,
            n = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = o4(n, t, t.pendingProps, t.type, void 0, sO);
                break;
            case 11:
                t = o4(n, t, t.pendingProps, t.type.render, t.ref, sO);
                break;
            case 5:
                iC(t);
                var r = t;
                r === rW && (rV ? (r0(r), 5 === r.tag && null != r.stateNode && (rY = r.stateNode)) : (r0(r), rV = !0));
            default:
                lb(n, t), t = lf(n, t = sC = rT(t, sM), sM)
        }
        e.memoizedProps = e.pendingProps, null === t ? uy(e) : sC = t
    }

    function uv(e, t, n, r) {
        r6 = r8 = null, iC(t), aM = null, aU = 0;
        var a = t.return;
        try {
            if (function(e, t, n, r, a) {
                    if (n.flags |= 32768, null !== r && "object" == typeof r && "function" == typeof r.then) {
                        if (null !== (t = n.alternate) && an(t, n, a, !0), null !== (n = a6.current)) {
                            switch (n.tag) {
                                case 31:
                                case 13:
                                case 19:
                                    return null === a9 ? up() : null === n.alternate && 0 === sU && (sU = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === aC ? n.flags |= 16384 : (null === (t = n.updateQueue) ? n.updateQueue = new Set([r]) : t.add(r), uI(e, r, a)), !1;
                                case 22:
                                    return n.flags |= 65536, r === aC ? n.flags |= 16384 : (null === (t = n.updateQueue) ? (t = {
                                        transitions: null,
                                        markerInstances: null,
                                        retryQueue: new Set([r])
                                    }, n.updateQueue = t) : null === (n = t.retryQueue) ? t.retryQueue = new Set([r]) : n.add(r), uI(e, r, a)), !1
                            }
                            throw Error(s(435, n.tag))
                        }
                        return uI(e, r, a), up(), !1
                    }
                    if (rV) return null !== (t = a6.current) ? (0 == (65536 & t.flags) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== rK && r4(rI(e = Error(s(422), {
                        cause: r
                    }), n))) : (r !== rK && r4(rI(t = Error(s(423), {
                        cause: r
                    }), n)), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, r = rI(r, n), a = o$(e.stateNode, r, a), aQ(e, a), 4 !== sU && (sU = 2)), !1;
                    var i = Error(s(520), {
                        cause: r
                    });
                    if (i = rI(i, n), null === sG ? sG = [i] : sG.push(i), 4 !== sU && (sU = 2), null === t) return !0;
                    r = rI(r, n), n = t;
                    do {
                        switch (n.tag) {
                            case 3:
                                return n.flags |= 65536, e = a & -a, n.lanes |= e, e = o$(n.stateNode, r, e), aQ(n, e), !1;
                            case 1:
                                if (t = n.type, i = n.stateNode, 0 == (128 & n.flags) && ("function" == typeof t.getDerivedStateFromError || null !== i && "function" == typeof i.componentDidCatch && (null === sQ || !sQ.has(i)))) return n.flags |= 65536, a &= -a, n.lanes |= a, oH(a = oG(a), e, n, r), aQ(n, a), !1;
                                break;
                            case 22:
                                if (null !== n.memoizedState) return n.flags |= 65536, !1
                        }
                        n = n.return
                    } while (null !== n) return !1
                }(e, a, t, n, sO)) {
                sU = 1, oF(e, rI(n, e.current)), sC = null;
                return
            }
        } catch (t) {
            if (null !== a) throw sC = a, t;
            sU = 1, oF(e, rI(n, e.current)), sC = null;
            return
        }
        32768 & t.flags ? (rV || 1 === r ? e = !0 : sA || 0 != (0x20000000 & sO) ? e = !1 : (sL = e = !0, (2 === r || 9 === r || 3 === r || 6 === r) && null !== (r = a6.current) && 13 === r.tag && (r.flags |= 16384)), ub(t, e)) : uy(t)
    }

    function uy(e) {
        var t = e;
        do {
            if (0 != (32768 & t.flags)) return void ub(t, sL);
            e = t.return;
            var n = function(e, t, n) {
                var r = t.pendingProps;
                switch (rH(t), t.tag) {
                    case 16:
                    case 15:
                    case 0:
                    case 11:
                    case 7:
                    case 8:
                    case 12:
                    case 9:
                    case 14:
                    case 1:
                        return ly(t), null;
                    case 3:
                        return n = t.stateNode, r = null, null !== e && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), r7(ad), eo(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (null === e || null === e.child) && (r1(t) ? lp(t) : null === e || e.memoizedState.isDehydrated && 0 == (256 & t.flags) || (t.flags |= 1024, r3())), ly(t), null;
                    case 26:
                        var a = t.type,
                            i = t.memoizedState;
                        return null === e ? (lp(t), null !== i ? (ly(t), lh(t, i)) : (ly(t), lm(t, a, null, r, n))) : i ? i !== e.memoizedState ? (lp(t), ly(t), lh(t, i)) : (ly(t), t.flags &= -0x1000001) : ((e = e.memoizedProps) !== r && lp(t), ly(t), lm(t, a, e, r, n)), null;
                    case 27:
                        if (es(t), n = er.current, a = t.type, null !== e && null != t.stateNode) e.memoizedProps !== r && lp(t);
                        else {
                            if (!r) {
                                if (null === t.stateNode) throw Error(s(166));
                                return ly(t), t.subtreeFlags &= -0x2000001, null
                            }
                            e = et.current, r1(t) ? rZ(t) : (t.stateNode = e = c3(a, r, n), lp(t))
                        }
                        return ly(t), t.subtreeFlags &= -0x2000001, null;
                    case 5:
                        if (es(t), a = t.type, null !== e && null != t.stateNode) e.memoizedProps !== r && lp(t);
                        else {
                            if (!r) {
                                if (null === t.stateNode) throw Error(s(166));
                                return ly(t), t.subtreeFlags &= -0x2000001, null
                            }
                            if (i = et.current, r1(t)) rZ(t);
                            else {
                                var o = cp(er.current);
                                switch (i) {
                                    case 1:
                                        i = o.createElementNS("http://www.w3.org/2000/svg", a);
                                        break;
                                    case 2:
                                        i = o.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                                        break;
                                    default:
                                        switch (a) {
                                            case "svg":
                                                i = o.createElementNS("http://www.w3.org/2000/svg", a);
                                                break;
                                            case "math":
                                                i = o.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                                                break;
                                            case "script":
                                                (i = o.createElement("div")).innerHTML = "<script></script>", i = i.removeChild(i.firstChild);
                                                break;
                                            case "select":
                                                i = "string" == typeof r.is ? o.createElement("select", {
                                                    is: r.is
                                                }) : o.createElement("select"), r.multiple ? i.multiple = !0 : r.size && (i.size = r.size);
                                                break;
                                            default:
                                                i = "string" == typeof r.is ? o.createElement(a, {
                                                    is: r.is
                                                }) : o.createElement(a)
                                        }
                                }
                                i[eY] = t, i[eV] = r;
                                e: for (o = t.child; null !== o;) {
                                    if (5 === o.tag || 6 === o.tag) i.appendChild(o.stateNode);
                                    else if (4 !== o.tag && 27 !== o.tag && null !== o.child) {
                                        o.child.return = o, o = o.child;
                                        continue
                                    }
                                    if (o === t) break;
                                    for (; null === o.sibling;) {
                                        if (null === o.return || o.return === t) break e;
                                        o = o.return
                                    }
                                    o.sibling.return = o.return, o = o.sibling
                                }
                                switch (t.stateNode = i, cs(i, a, r), a) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        r = !!r.autoFocus;
                                        break;
                                    case "img":
                                        r = !0;
                                        break;
                                    default:
                                        r = !1
                                }
                                r && lp(t)
                            }
                        }
                        return ly(t), t.subtreeFlags &= -0x2000001, lm(t, t.type, null === e ? null : e.memoizedProps, t.pendingProps, n), null;
                    case 6:
                        if (e && null != t.stateNode) e.memoizedProps !== r && lp(t);
                        else {
                            if ("string" != typeof r && null === t.stateNode) throw Error(s(166));
                            if (e = er.current, r1(t)) {
                                if (e = t.stateNode, n = t.memoizedProps, r = null, null !== (a = rW)) switch (a.tag) {
                                    case 27:
                                    case 5:
                                        r = a.memoizedProps
                                }
                                e[eY] = t, (e = !!(e.nodeValue === n || null !== r && !0 === r.suppressHydrationWarning || ci(e.nodeValue, n))) || rX(t, !0)
                            } else(e = cp(e).createTextNode(r))[eY] = t, t.stateNode = e
                        }
                        return ly(t), null;
                    case 31:
                        if (n = t.memoizedState, null === e || null !== e.memoizedState) {
                            if (r = r1(t), null !== n) {
                                if (null === e) {
                                    if (!r) throw Error(s(318));
                                    if (!(e = null !== (e = t.memoizedState) ? e.dehydrated : null)) throw Error(s(557));
                                    e[eY] = t
                                } else r2(), 0 == (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                ly(t), e = !1
                            } else n = r3(), null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = n), e = !0;
                            if (!e) {
                                if (256 & t.flags) return ia(t), t;
                                return ia(t), null
                            }
                            if (0 != (128 & t.flags)) throw Error(s(558))
                        }
                        return ly(t), null;
                    case 13:
                        if (r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                            if (a = r1(t), null !== r && null !== r.dehydrated) {
                                if (null === e) {
                                    if (!a) throw Error(s(318));
                                    if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null)) throw Error(s(317));
                                    a[eY] = t
                                } else r2(), 0 == (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                ly(t), a = !1
                            } else a = r3(), null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = a), a = !0;
                            if (!a) {
                                if (256 & t.flags) return ia(t), t;
                                return ia(t), null
                            }
                        }
                        if (ia(t), 0 != (128 & t.flags)) return t.lanes = n, t;
                        return n = null !== r, e = null !== e && null !== e.memoizedState, n && (r = t.child, a = null, null !== r.alternate && null !== r.alternate.memoizedState && null !== r.alternate.memoizedState.cachePool && (a = r.alternate.memoizedState.cachePool.pool), i = null, null !== r.memoizedState && null !== r.memoizedState.cachePool && (i = r.memoizedState.cachePool.pool), i !== a && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), lg(t, t.updateQueue), ly(t), null;
                    case 4:
                        return eo(), null === e && u5(t.stateNode.containerInfo), t.flags |= 0x4000000, ly(t), null;
                    case 10:
                        return r7(t.type), ly(t), null;
                    case 19:
                        if (il(t), null === (r = t.memoizedState)) return ly(t), null;
                        if (a = 0 != (128 & t.flags), null === (i = r.rendering))
                            if (a) lv(r, !1);
                            else {
                                if (0 !== sU || null !== e && 0 != (128 & e.flags))
                                    for (e = t.child; null !== e;) {
                                        if (null !== (i = is(e))) {
                                            for (t.flags |= 128, lv(r, !1), t.updateQueue = e = i.updateQueue, lg(t, e), t.subtreeFlags = 0, e = n, n = t.child; null !== n;) rT(n, e), n = n.sibling;
                                            return io(t, 1 & ii.current | 2), rV && rj(t, r.treeForkCount), t.child
                                        }
                                        e = e.sibling
                                    }
                                null !== r.tail && ey() > sV && (t.flags |= 128, a = !0, lv(r, !1), t.lanes = 4194304)
                            }
                        else {
                            if (!a)
                                if (null !== (e = is(i))) {
                                    if (t.flags |= 128, a = !0, t.updateQueue = e = e.updateQueue, lg(t, e), lv(r, !0), null === r.tail && "collapsed" !== r.tailMode && "visible" !== r.tailMode && !i.alternate && !rV) return ly(t), null
                                } else 2 * ey() - r.renderingStartTime > sV && 0x20000000 !== n && (t.flags |= 128, a = !0, lv(r, !1), t.lanes = 4194304);
                            r.isBackwards ? (i.sibling = t.child, t.child = i) : (null !== (e = r.last) ? e.sibling = i : t.child = i, r.last = i)
                        }
                        if (null !== r.tail) {
                            e = r.tail;
                            e: {
                                for (n = e; null !== n;) {
                                    if (null !== n.alternate) {
                                        n = !1;
                                        break e
                                    }
                                    n = n.sibling
                                }
                                n = !0
                            }
                            return r.rendering = e, r.tail = e.sibling, r.renderingStartTime = ey(), e.sibling = null, i = ii.current, i = a ? 1 & i | 2 : 1 & i, "visible" === r.tailMode || "collapsed" === r.tailMode || !n || rV ? io(t, i) : (n = i, ee(a6, t), ee(ii, n), null === a9 && (a9 = t)), rV && rj(t, r.treeForkCount), e
                        }
                        return ly(t), null;
                    case 22:
                    case 23:
                        return ia(t), a8(), r = null !== t.memoizedState, null !== e ? null !== e.memoizedState !== r && (t.flags |= 8192) : r && (t.flags |= 8192), r ? 0 != (0x20000000 & n) && 0 == (128 & t.flags) && (ly(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : ly(t), null !== (n = t.updateQueue) && lg(t, n.retryQueue), n = null, null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool), r = null, null !== t.memoizedState && null !== t.memoizedState.cachePool && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), null !== e && Z(aE), null;
                    case 24:
                        return n = null, null !== e && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), r7(ad), ly(t), null;
                    case 25:
                        return null;
                    case 30:
                        return t.flags |= 0x2000000, ly(t), null
                }
                throw Error(s(156, t.tag))
            }(t.alternate, t, sM);
            if (null !== n) {
                sC = n;
                return
            }
            if (null !== (t = t.sibling)) {
                sC = t;
                return
            }
            sC = t = e
        } while (null !== t) 0 === sU && (sU = 5)
    }

    function ub(e, t) {
        do {
            var n = function(e, t) {
                switch (rH(t), t.tag) {
                    case 1:
                        return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                    case 3:
                        return r7(ad), eo(), 0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                    case 26:
                    case 27:
                    case 5:
                        return es(t), null;
                    case 31:
                        if (null !== t.memoizedState) {
                            if (ia(t), null === t.alternate) throw Error(s(340));
                            r2()
                        }
                        return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                    case 13:
                        if (ia(t), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                            if (null === t.alternate) throw Error(s(340));
                            r2()
                        }
                        return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                    case 19:
                        return il(t), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, null !== (e = t.memoizedState) && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
                    case 4:
                        return eo(), null;
                    case 10:
                        return r7(t.type), null;
                    case 22:
                    case 23:
                        return ia(t), a8(), null !== e && Z(aE), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                    case 24:
                        return r7(ad), null;
                    default:
                        return null
                }
            }(e.alternate, e);
            if (null !== n) {
                n.flags &= 32767, sC = n;
                return
            }
            if (null !== (n = e.return) && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && null !== (e = e.sibling)) {
                sC = e;
                return
            }
            sC = e = n
        } while (null !== e) sU = 6, sC = null
    }

    function u_(e, t, n, r, a, i, o, l, u, c, d, f) {
        e.cancelPendingCommit = null;
        do ux(); while (0 !== sK) if (0 != (6 & sx)) throw Error(s(327));
        if (null !== t) {
            if (t === e.current) throw Error(s(177));
            e === sP && (sC = sP = null, sO = 0), sZ = t, sX = e, s0 = n, s2 = a, s3 = r,
                function(e, t, n, r, a, i, o) {
                    var l, s = t.lanes | t.childLanes;
                    if (s1 = s, ! function(e, t, n, r, a, i) {
                            var o = e.pendingLanes;
                            e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
                            var l = e.entanglements,
                                s = e.expirationTimes,
                                u = e.hiddenUpdates;
                            for (n = o & ~n; 0 < n;) {
                                var c = 31 - ex(n),
                                    d = 1 << c;
                                l[c] = 0, s[c] = -1;
                                var f = u[c];
                                if (null !== f)
                                    for (u[c] = null, c = 0; c < f.length; c++) {
                                        var p = f[c];
                                        null !== p && (p.lane &= -0x20000001)
                                    }
                                n &= ~d
                            }
                            0 !== r && eB(e, r, 0), 0 !== i && 0 === a && 0 !== e.tag && (e.suspendedLanes |= i & ~(o & ~t))
                        }(e, n, s |= rf, r, a, i), s5 = null, (0x13ffff00 & n) === n ? (l = e.transitionTypes, e.transitionTypes = null, s8 = l, r = 10262) : (s8 = null, r = 10256), 0 != (t.subtreeFlags & r) || 0 != (t.flags & r) ? (e.callbackNode = null, e.callbackPriority = 0, em(eE, function() {
                            return uP(), null
                        })) : (e.callbackNode = null, e.callbackPriority = 0), lD = !1, r = 0 != (13878 & t.flags), 0 != (13878 & t.subtreeFlags) || r) {
                        r = Y.T, Y.T = null, a = V.p, V.p = 2, i = sx, sx |= 4;
                        try {
                            ! function(e, t, n) {
                                if (e = e.containerInfo, cd = dD, nY(e = nW(e))) {
                                    if ("selectionStart" in e) var r = {
                                        start: e.selectionStart,
                                        end: e.selectionEnd
                                    };
                                    else e: {
                                        var a = (r = (r = e.ownerDocument) && r.defaultView || window).getSelection && r.getSelection();
                                        if (a && 0 !== a.rangeCount) {
                                            r = a.anchorNode;
                                            var i, o = a.anchorOffset,
                                                l = a.focusNode;
                                            a = a.focusOffset;
                                            try {
                                                r.nodeType, l.nodeType
                                            } catch (e) {
                                                r = null;
                                                break e
                                            }
                                            var s = 0,
                                                u = -1,
                                                c = -1,
                                                d = 0,
                                                f = 0,
                                                p = e,
                                                m = null;
                                            t: for (;;) {
                                                for (; p !== r || 0 !== o && 3 !== p.nodeType || (u = s + o), p !== l || 0 !== a && 3 !== p.nodeType || (c = s + a), 3 === p.nodeType && (s += p.nodeValue.length), null !== (i = p.firstChild);) m = p, p = i;
                                                for (;;) {
                                                    if (p === e) break t;
                                                    if (m === r && ++d === o && (u = s), m === l && ++f === a && (c = s), null !== (i = p.nextSibling)) break;
                                                    m = (p = m).parentNode
                                                }
                                                p = i
                                            }
                                            r = -1 === u || -1 === c ? null : {
                                                start: u,
                                                end: c
                                            }
                                        } else r = null
                                    }
                                    r = r || {
                                        start: 0,
                                        end: 0
                                    }
                                } else r = null;
                                for (cf = {
                                        focusedElem: e,
                                        selectionRange: r
                                    }, dD = !1, n = (0x13ffff00 & n) === n, l1 = t, t = n ? 9270 : 1024; null !== l1;) {
                                    if (e = l1, n && null !== (r = e.deletions))
                                        for (o = 0; o < r.length; o++) n && lW(r[o]);
                                    if (null === e.alternate && 0 != (2 & e.flags)) n && lU(e), l8(n);
                                    else {
                                        if (22 === e.tag) {
                                            if (r = e.alternate, null !== e.memoizedState) {
                                                null !== r && null === r.memoizedState && n && lW(r), l8(n);
                                                continue
                                            } else if (null !== r && null !== r.memoizedState) {
                                                n && lU(e), l8(n);
                                                continue
                                            }
                                        }
                                        r = e.child, 0 != (e.subtreeFlags & t) && null !== r ? (r.return = e, l1 = r) : (n && function e(t) {
                                            for (t = t.child; null !== t;) {
                                                if (30 === t.tag) {
                                                    var n = t.memoizedProps,
                                                        r = ro(n, t.stateNode);
                                                    n = rs(n.default, n.update), t.flags &= -5, "none" !== n && lj(t, r, n, t.memoizedState = [], !1)
                                                } else 0 != (0x2000000 & t.subtreeFlags) && e(t);
                                                t = t.sibling
                                            }
                                        }(e), l8(n))
                                    }
                                }
                                lM = null
                            }(e, t, n)
                        } finally {
                            sx = i, V.p = a, Y.T = r
                        }
                    }
                    sK = 1, lD ? s4 = function(e, t, n, r, a, i, o, l, s) {
                        var u = 9 === t.nodeType ? t : t.ownerDocument;
                        try {
                            var c = u.startViewTransition({
                                update: function() {
                                    var t = u.defaultView,
                                        n = t.navigation && t.navigation.transition,
                                        o = u.fonts.status;
                                    r();
                                    var l = [];
                                    if ("loaded" === o && (u.documentElement.clientHeight, "loading" === u.fonts.status && l.push(u.fonts.ready)), o = l.length, null !== e)
                                        for (var s = e.suspenseyImages, c = 0, d = 0; d < s.length; d++) {
                                            var f = s[d];
                                            if (!f.complete) {
                                                var p = f.getBoundingClientRect();
                                                if (0 < p.bottom && 0 < p.right && p.top < t.innerHeight && p.left < t.innerWidth) {
                                                    if ((c += dy(f)) > d_) {
                                                        l.length = o;
                                                        break
                                                    }
                                                    f = new Promise(cI.bind(f)), l.push(f)
                                                }
                                            }
                                        }
                                    return 0 < l.length ? (t = Promise.race([Promise.all(l), new Promise(function(e) {
                                        return setTimeout(e, 500)
                                    })]).then(a, a), (n ? Promise.allSettled([n.finished, t]) : t).then(i, i)) : (a(), n) ? n.finished.then(i, i) : void i()
                                },
                                types: n
                            });
                            u.__reactViewTransition = c;
                            var d = [];
                            return c.ready.then(function() {
                                for (var e = u.documentElement.getAnimations({
                                        subtree: !0
                                    }), t = 0; t < e.length; t++) {
                                    var n = e[t],
                                        r = n.effect,
                                        a = r.pseudoElement;
                                    if (null != a && a.startsWith("::view-transition")) {
                                        d.push(n), n = r.getKeyframes();
                                        for (var i = a = void 0, l = !0, s = 0; s < n.length; s++) {
                                            var c = n[s],
                                                f = c.width;
                                            if (void 0 === a) a = f;
                                            else if (a !== f) {
                                                l = !1;
                                                break
                                            }
                                            if (f = c.height, void 0 === i) i = f;
                                            else if (i !== f) {
                                                l = !1;
                                                break
                                            }
                                            delete c.width, delete c.height, "none" === c.transform && delete c.transform
                                        }
                                        l && void 0 !== a && void 0 !== i && (r.setKeyframes(n), (l = getComputedStyle(r.target, r.pseudoElement)).width !== a || l.height !== i) && ((l = n[0]).width = a, l.height = i, (l = n[n.length - 1]).width = a, l.height = i, r.setKeyframes(n))
                                    }
                                }
                                o()
                            }, function(e) {
                                u.__reactViewTransition === c && (u.__reactViewTransition = null);
                                try {
                                    "object" == typeof e && null !== e && "InvalidStateError" === e.name && ("View transition was skipped because document visibility state is hidden." === e.message || "Skipping view transition because document visibility state has become hidden." === e.message || "Skipping view transition because viewport size changed." === e.message || "Transition was aborted because of invalid state" === e.message) && (e = null), null !== e && s(e)
                                } finally {
                                    r(), a(), o()
                                }
                            }), c.finished.finally(function() {
                                for (var e = 0; e < d.length; e++) d[e].cancel();
                                u.__reactViewTransition === c && (u.__reactViewTransition = null), l()
                            }), c
                        } catch (e) {
                            return r(), a(), o(), null
                        }
                    }(o, e.containerInfo, s8, uw, uT, uE, uk, uP, uS) : (uw(), uT(), uk())
                }(e, t, n, o, l, u, f)
        }
    }

    function uS(e) {
        0 !== sK && (0, sX.onRecoverableError)(e, {
            componentStack: null
        })
    }

    function uE() {
        3 === sK && (sK = 0, sd(sZ, sX), sK = 4)
    }

    function uw() {
        if (1 === sK) {
            sK = 0;
            var e = sX,
                t = sZ,
                n = s0,
                r = 0 != (13878 & t.flags);
            if (0 != (13878 & t.subtreeFlags) || r) {
                r = Y.T, Y.T = null;
                var a = V.p;
                V.p = 2;
                var i = sx;
                sx |= 4;
                try {
                    l3 = l4 = !1, ss(t, e, n), n = cf;
                    var o = nW(e.containerInfo),
                        l = n.focusedElem,
                        s = n.selectionRange;
                    if (o !== l && l && l.ownerDocument && function e(t, n) {
                            return !!t && !!n && (t === n || (!t || 3 !== t.nodeType) && (n && 3 === n.nodeType ? e(t, n.parentNode) : "contains" in t ? t.contains(n) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n))))
                        }(l.ownerDocument.documentElement, l)) {
                        if (null !== s && nY(l)) {
                            var u = s.start,
                                c = s.end;
                            if (void 0 === c && (c = u), "selectionStart" in l) l.selectionStart = u, l.selectionEnd = Math.min(c, l.value.length);
                            else {
                                var d = l.ownerDocument || document,
                                    f = d && d.defaultView || window;
                                if (f.getSelection) {
                                    var p = f.getSelection(),
                                        m = l.textContent.length,
                                        h = Math.min(s.start, m),
                                        g = void 0 === s.end ? h : Math.min(s.end, m);
                                    !p.extend && h > g && (o = g, g = h, h = o);
                                    var v = nq(l, h),
                                        y = nq(l, g);
                                    if (v && y && (1 !== p.rangeCount || p.anchorNode !== v.node || p.anchorOffset !== v.offset || p.focusNode !== y.node || p.focusOffset !== y.offset)) {
                                        var b = d.createRange();
                                        b.setStart(v.node, v.offset), p.removeAllRanges(), h > g ? (p.addRange(b), p.extend(y.node, y.offset)) : (b.setEnd(y.node, y.offset), p.addRange(b))
                                    }
                                }
                            }
                        }
                        for (d = [], p = l; p = p.parentNode;) 1 === p.nodeType && d.push({
                            element: p,
                            left: p.scrollLeft,
                            top: p.scrollTop
                        });
                        for ("function" == typeof l.focus && l.focus(), l = 0; l < d.length; l++) {
                            var _ = d[l];
                            _.element.scrollLeft = _.left, _.element.scrollTop = _.top
                        }
                    }
                    dD = !!cd, cf = cd = null
                } finally {
                    sx = i, V.p = a, Y.T = r
                }
            }
            e.current = t, sK = 2
        }
    }

    function uT() {
        if (2 === sK) {
            sK = 0;
            var e = sX,
                t = sZ,
                n = 0 != (8772 & t.flags);
            if (0 != (8772 & t.subtreeFlags) || n) {
                n = Y.T, Y.T = null;
                var r = V.p;
                V.p = 2;
                var a = sx;
                sx |= 4;
                try {
                    l6(e, t.alternate, t)
                } finally {
                    sx = a, V.p = r, Y.T = n
                }
            }
            sK = 3
        }
    }

    function uk() {
        if (4 === sK || 3 === sK) {
            sK = 0;
            var e = s4;
            s4 = null, ev();
            var t = sX,
                n = sZ,
                r = s0,
                a = s3,
                i = (0x13ffff00 & r) === r ? 10262 : 10256;
            if (0 != (n.subtreeFlags & i) || 0 != (n.flags & i) ? sK = 5 : (sK = 0, sZ = sX = null, uN(t, t.pendingLanes)), 0 === (i = t.pendingLanes) && (sQ = null), eG(r), n = n.stateNode, eN && "function" == typeof eN.onCommitFiberRoot) try {
                eN.onCommitFiberRoot(ek, n, void 0, 128 == (128 & n.current.flags))
            } catch (e) {}
            if (null !== a) {
                n = Y.T, i = V.p, V.p = 2, Y.T = null;
                try {
                    for (var o = t.onRecoverableError, l = 0; l < a.length; l++) {
                        var s = a[l];
                        o(s.value, {
                            componentStack: s.stack
                        })
                    }
                } finally {
                    Y.T = n, V.p = i
                }
            }
            if (a = s5, o = s8, s8 = null, null !== a && (s5 = null, null === o && (o = []), null !== e))
                for (s = 0; s < a.length; s++) void 0 !== (n = (0, a[s])(o)) && e.finished.finally(n);
            0 != (3 & s0) && ux(), u$(t), i = t.pendingLanes, 0 != (261930 & r) && 0 != (42 & i) ? t === s9 ? s6++ : (s6 = 0, s9 = t) : (s6 = 0, s9 = null), uG(0, !1)
        }
    }

    function uN(e, t) {
        0 == (e.pooledCacheLanes &= t) && null != (t = e.pooledCache) && (e.pooledCache = null, ap(t))
    }

    function ux() {
        return null !== s4 && (s4.skipTransition(), s4 = null), uw(), uT(), uk(), uP()
    }

    function uP() {
        if (5 !== sK) return !1;
        var e = sX,
            t = s1;
        s1 = 0;
        var n = eG(s0),
            r = Y.T,
            a = V.p;
        try {
            V.p = 32 > n ? 32 : n, Y.T = null, n = s2, s2 = null;
            var i = sX,
                o = s0;
            if (sK = 0, sZ = sX = null, s0 = 0, 0 != (6 & sx)) throw Error(s(331));
            var l = sx;
            if (sx |= 4, sw(i.current), sg(i, i.current, o, n), sx = l, uG(0, !1), eN && "function" == typeof eN.onPostCommitFiberRoot) try {
                eN.onPostCommitFiberRoot(ek, i)
            } catch (e) {}
            return !0
        } finally {
            V.p = a, Y.T = r, uN(e, t)
        }
    }

    function uC(e, t, n) {
        t = rI(n, t), t = o$(e.stateNode, t, 2), null !== (e = aV(e, t, 2)) && (ez(e, 2), u$(e))
    }

    function uO(e, t, n) {
        if (3 === e.tag) uC(e, e, n);
        else
            for (; null !== t;) {
                if (3 === t.tag) {
                    uC(t, e, n);
                    break
                }
                if (1 === t.tag) {
                    var r = t.stateNode;
                    if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === sQ || !sQ.has(r))) {
                        e = rI(n, e), null !== (r = aV(t, n = oG(2), 2)) && (oH(n, r, t, e), ez(r, 2), u$(r));
                        break
                    }
                }
                t = t.return
            }
    }

    function uI(e, t, n) {
        var r = e.pingCache;
        if (null === r) {
            r = e.pingCache = new sN;
            var a = new Set;
            r.set(t, a)
        } else void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a));
        a.has(n) || (sD = !0, a.add(n), e = uR.bind(null, e, t, n), t.then(e, e))
    }

    function uR(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, sP === e && (sO & n) === n && ((4 === sU || 3 === sU && (0x3c00000 & sO) === sO && 300 > ey() - sW) && 0 == (2 & sx) ? us(e, 0) : sF |= n, s$ === sO && (s$ = 0)), u$(e)
    }

    function uL(e, t) {
        0 === t && (t = eM()), null !== (e = rg(e, t)) && (ez(e, t), u$(e))
    }

    function uA(e) {
        var t = e.memoizedState,
            n = 0;
        null !== t && (n = t.retryLane), uL(e, n)
    }

    function uD(e, t) {
        var n = 0;
        switch (e.tag) {
            case 31:
            case 13:
                var r = e.stateNode,
                    a = e.memoizedState;
                null !== a && (n = a.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            case 22:
                r = e.stateNode._retryCache;
                break;
            default:
                throw Error(s(314))
        }
        null !== r && r.delete(t), uL(e, n)
    }
    var uM = null,
        uU = null,
        uz = !1,
        uB = !1,
        uF = !1,
        uj = 0;

    function u$(e) {
        e !== uU && null === e.next && (null === uU ? uM = uU = e : uU = uU.next = e), uB = !0, uz || (uz = !0, cS(function() {
            0 != (6 & sx) ? em(e_, uH) : uq()
        }))
    }

    function uG(e, t) {
        if (!uF && uB) {
            uF = !0;
            do
                for (var n = !1, r = uM; null !== r;) {
                    if (!t)
                        if (0 !== e) {
                            var a = r.pendingLanes;
                            if (0 === a) var i = 0;
                            else {
                                var o = r.suspendedLanes,
                                    l = r.pingedLanes;
                                i = 0xc000095 & (i = (1 << 31 - ex(42 | e) + 1) - 1 & (a & ~(o & ~l))) ? 0xc000095 & i | 1 : i ? 2 | i : 0
                            }
                            0 !== i && (n = !0, uV(r, i))
                        } else i = sO, 0 == (3 & (i = eA(r, r === sP ? i : 0, null !== r.cancelPendingCommit || -1 !== r.timeoutHandle))) || eD(r, i) || (n = !0, uV(r, i));
                    r = r.next
                }
            while (n) uF = !1
        }
    }

    function uH() {
        uq()
    }

    function uq() {
        uB = uz = !1;
        var e, t = 0;
        0 === uj || ((e = window.event) && "popstate" === e.type ? e === cv || (cv = e, 0) : (cv = null, 1)) || (t = uj);
        for (var n = ey(), r = null, a = uM; null !== a;) {
            var i = a.next,
                o = uW(a, n);
            0 === o ? (a.next = null, null === r ? uM = i : r.next = i, null === i && (uU = r)) : (r = a, (0 !== t || 0 != (3 & o)) && (uB = !0)), a = i
        }
        0 !== sK && 5 !== sK || uG(t, !1), 0 !== uj && (uj = 0)
    }

    function uW(e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = -0x3c00001 & e.pendingLanes; 0 < i;) {
            var o = 31 - ex(i),
                l = 1 << o,
                s = a[o]; - 1 === s ? (0 == (l & n) || 0 != (l & r)) && (a[o] = function(e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 4:
                    case 8:
                    case 64:
                        return t + 250;
                    case 16:
                    case 32:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                        return t + 5e3;
                    default:
                        return -1
                }
            }(l, t)) : s <= t && (e.expiredLanes |= l), i &= ~l
        }
        if (t = sP, n = sO, n = eA(e, e === t ? n : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle), r = e.callbackNode, 0 === n || e === t && (2 === sI || 9 === sI) || null !== e.cancelPendingCommit) return null !== r && null !== r && eh(r), e.callbackNode = null, e.callbackPriority = 0;
        if (0 == (3 & n) || eD(e, n)) {
            if ((t = n & -n) === e.callbackPriority) return t;
            switch (null !== r && eh(r), eG(n)) {
                case 2:
                case 8:
                    n = eS;
                    break;
                case 32:
                default:
                    n = eE;
                    break;
                case 0x10000000:
                    n = eT
            }
            return n = em(n, r = uY.bind(null, e)), e.callbackPriority = t, e.callbackNode = n, t
        }
        return null !== r && null !== r && eh(r), e.callbackPriority = 2, e.callbackNode = null, 2
    }

    function uY(e, t) {
        if (0 !== sK && 5 !== sK) return e.callbackNode = null, e.callbackPriority = 0, null;
        var n = e.callbackNode;
        if (ux() && e.callbackNode !== n) return null;
        var r = sO;
        return 0 === (r = eA(e, e === sP ? r : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle)) ? null : (ur(e, r, t), uW(e, ey()), null != e.callbackNode && e.callbackNode === n ? uY.bind(null, e) : null)
    }

    function uV(e, t) {
        if (ux()) return null;
        ur(e, t, !0)
    }

    function uJ() {
        if (0 === uj) {
            var e = ay;
            0 === e && (e = eO, 0 == (261888 & (eO <<= 1)) && (eO = 256)), uj = e
        }
        return uj
    }

    function uQ(e) {
        return null == e || "symbol" == typeof e || "boolean" == typeof e ? null : "function" == typeof e ? e : tO(e)
    }
    for (var uK = 0; uK < rr.length; uK++) {
        var uX = rr[uK];
        ra(uX.toLowerCase(), "on" + (uX[0].toUpperCase() + uX.slice(1)))
    }
    ra(n5, "onAnimationEnd"), ra(n8, "onAnimationIteration"), ra(n6, "onAnimationStart"), ra("dblclick", "onDoubleClick"), ra("focusin", "onFocus"), ra("focusout", "onBlur"), ra(n9, "onTransitionRun"), ra(n7, "onTransitionStart"), ra(re, "onTransitionCancel"), ra(rt, "onTransitionEnd"), tn("onMouseEnter", ["mouseout", "mouseover"]), tn("onMouseLeave", ["mouseout", "mouseover"]), tn("onPointerEnter", ["pointerout", "pointerover"]), tn("onPointerLeave", ["pointerout", "pointerover"]), tt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), tt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), tt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), tt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), tt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), tt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var uZ = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        u0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(uZ));

    function u1(e, t) {
        t = 0 != (4 & t);
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                a = r.event;
            r = r.listeners;
            e: {
                var i = void 0;
                if (t)
                    for (var o = r.length - 1; 0 <= o; o--) {
                        var l = r[o],
                            s = l.instance,
                            u = l.currentTarget;
                        if (l = l.listener, s !== i && a.isPropagationStopped()) break e;
                        i = l, a.currentTarget = u;
                        try {
                            i(a)
                        } catch (e) {
                            ru(e)
                        }
                        a.currentTarget = null, i = s
                    } else
                        for (o = 0; o < r.length; o++) {
                            if (s = (l = r[o]).instance, u = l.currentTarget, l = l.listener, s !== i && a.isPropagationStopped()) break e;
                            i = l, a.currentTarget = u;
                            try {
                                i(a)
                            } catch (e) {
                                ru(e)
                            }
                            a.currentTarget = null, i = s
                        }
            }
        }
    }

    function u2(e, t) {
        var n = t[eQ];
        void 0 === n && (n = t[eQ] = new Set);
        var r = e + "__bubble";
        n.has(r) || (u8(t, e, 2, !1), n.add(r))
    }

    function u3(e, t, n) {
        var r = 0;
        t && (r |= 4), u8(n, e, r, t)
    }
    var u4 = "_reactListening" + Math.random().toString(36).slice(2);

    function u5(e) {
        if (!e[u4]) {
            e[u4] = !0, e7.forEach(function(t) {
                "selectionchange" !== t && (u0.has(t) || u3(t, !1, e), u3(t, !0, e))
            });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[u4] || (t[u4] = !0, u3("selectionchange", !1, t))
        }
    }

    function u8(e, t, n, r) {
        switch (d$(t)) {
            case 2:
                var a = dM;
                break;
            case 8:
                a = dU;
                break;
            default:
                a = dz
        }
        n = a.bind(null, t, n, e), a = void 0, tj && ("touchstart" === t || "touchmove" === t || "wheel" === t) && (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, {
            capture: !0,
            passive: a
        }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {
            passive: a
        }) : e.addEventListener(t, n, !1)
    }

    function u6(e, t, n, r, a) {
        var i = r;
        if (0 == (1 & t) && 0 == (2 & t) && null !== r) e: for (;;) {
            if (null === r) return;
            var o = r.tag;
            if (3 === o || 4 === o) {
                var l = r.stateNode.containerInfo;
                if (l === a) break;
                if (4 === o)
                    for (o = r.return; null !== o;) {
                        var s = o.tag;
                        if ((3 === s || 4 === s) && o.stateNode.containerInfo === a) return;
                        o = o.return
                    }
                for (; null !== l;) {
                    if (null === (o = e3(l))) return;
                    if (5 === (s = o.tag) || 6 === s || 26 === s || 27 === s) {
                        r = i = o;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
        tz(function() {
            var r = i,
                a = tL(n),
                o = [];
            e: {
                var l = rn.get(e);
                if (void 0 !== l) {
                    var s = t3,
                        u = e;
                    switch (e) {
                        case "keypress":
                            if (0 === tY(n)) break e;
                        case "keydown":
                        case "keyup":
                            s = ns;
                            break;
                        case "focusin":
                            u = "focus", s = t7;
                            break;
                        case "focusout":
                            u = "blur", s = t7;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            s = t7;
                            break;
                        case "click":
                            if (2 === n.button) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            s = t6;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            s = t9;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            s = nd;
                            break;
                        case n5:
                        case n8:
                        case n6:
                            s = ne;
                            break;
                        case rt:
                            s = nf;
                            break;
                        case "scroll":
                        case "scrollend":
                            s = t5;
                            break;
                        case "wheel":
                            s = np;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            s = nt;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            s = nu;
                            break;
                        case "submit":
                            s = nc;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            s = nm
                    }
                    var d = 0 != (4 & t),
                        f = !d && ("scroll" === e || "scrollend" === e),
                        p = d ? null !== l ? l + "Capture" : null : l;
                    d = [];
                    for (var m, h = r; null !== h;) {
                        var g = h;
                        if (m = g.stateNode, 5 !== (g = g.tag) && 26 !== g && 27 !== g || null === m || null === p || null != (g = tB(h, p)) && d.push(u9(h, g, m)), f) break;
                        h = h.return
                    }
                    0 < d.length && (l = new s(l, u, null, n, a), o.push({
                        event: l,
                        listeners: d
                    }))
                }
            }
            if (0 == (7 & t)) {
                s = "mouseover" === e || "pointerover" === e, l = "mouseout" === e || "pointerout" === e, !(s && n !== tR && (u = n.relatedTarget || n.fromElement) && (e3(u) || u[eJ])) && (l || s) && (u = a.window === a ? a : (s = a.ownerDocument) ? s.defaultView || s.parentWindow : window, l ? (s = n.relatedTarget || n.toElement, l = r, null !== (s = s ? e3(s) : null) && (f = c(s), d = s.tag, s !== f || 5 !== d && 27 !== d && 6 !== d) && (s = null)) : (l = null, s = r), l !== s && (d = t6, g = "onMouseLeave", p = "onMouseEnter", h = "mouse", ("pointerout" === e || "pointerover" === e) && (d = nu, g = "onPointerLeave", p = "onPointerEnter", h = "pointer"), f = null == l ? u : e5(l), m = null == s ? u : e5(s), (u = new d(g, h + "leave", l, n, a)).target = f, u.relatedTarget = m, g = null, e3(a) === r && ((d = new d(p, h + "enter", s, n, a)).target = m, d.relatedTarget = f, g = d), f = g, d = l && s ? w(l, s, ce) : null, null !== l && ct(o, u, l, d, !1), null !== s && null !== f && ct(o, f, s, d, !0)));
                e: {
                    if ("select" === (s = (l = r ? e5(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === s && "file" === l.type) var v, y = nI;
                    else if (nk(l))
                        if (nR) y = nF;
                        else {
                            y = nz;
                            var b = nU
                        }
                    else(s = l.nodeName) && "input" === s.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) ? y = nB : r && tx(r.elementType) && (y = nI);
                    if (y && (y = y(e, r))) {
                        nN(o, y, n, a);
                        break e
                    }
                    b && b(e, l, r)
                }
                switch (b = r ? e5(r) : window, e) {
                    case "focusin":
                        (nk(b) || "true" === b.contentEditable) && (nJ = b, nQ = r, nK = null);
                        break;
                    case "focusout":
                        nK = nQ = nJ = null;
                        break;
                    case "mousedown":
                        nX = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        nX = !1, nZ(o, n, a);
                        break;
                    case "selectionchange":
                        if (nV) break;
                    case "keydown":
                    case "keyup":
                        nZ(o, n, a)
                }
                if (ng) t: {
                    switch (e) {
                        case "compositionstart":
                            var _ = "onCompositionStart";
                            break t;
                        case "compositionend":
                            _ = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            _ = "onCompositionUpdate";
                            break t
                    }
                    _ = void 0
                }
                else nw ? nS(e, n) && (_ = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (_ = "onCompositionStart");
                _ && (nb && "ko" !== n.locale && (nw || "onCompositionStart" !== _ ? "onCompositionEnd" === _ && nw && (v = tW()) : (tH = "value" in (tG = a) ? tG.value : tG.textContent, nw = !0)), 0 < (b = u7(r, _)).length && (_ = new nn(_, e, null, n, a), o.push({
                    event: _,
                    listeners: b
                }), v ? _.data = v : null !== (v = nE(n)) && (_.data = v))), (v = ny ? function(e, t) {
                    switch (e) {
                        case "compositionend":
                            return nE(t);
                        case "keypress":
                            if (32 !== t.which) return null;
                            return n_ = !0, " ";
                        case "textInput":
                            return " " === (e = t.data) && n_ ? null : e;
                        default:
                            return null
                    }
                }(e, n) : function(e, t) {
                    if (nw) return "compositionend" === e || !ng && nS(e, t) ? (e = tW(), tq = tH = tG = null, nw = !1, e) : null;
                    switch (e) {
                        case "paste":
                        default:
                            return null;
                        case "keypress":
                            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                if (t.char && 1 < t.char.length) return t.char;
                                if (t.which) return String.fromCharCode(t.which)
                            }
                            return null;
                        case "compositionend":
                            return nb && "ko" !== t.locale ? null : t.data
                    }
                }(e, n)) && 0 < (_ = u7(r, "onBeforeInput")).length && (b = new nn("onBeforeInput", "beforeinput", null, n, a), o.push({
                    event: b,
                    listeners: _
                }), b.data = v);
                var S = e;
                if ("submit" === S && r && r.stateNode === a) {
                    var E = uQ((a[eV] || null).action),
                        T = n.submitter;
                    T && null !== (S = (S = T[eV] || null) ? uQ(S.formAction) : T.getAttribute("formAction")) && (E = S, T = null);
                    var k = new t3("action", "action", null, n, a);
                    o.push({
                        event: k,
                        listeners: [{
                            instance: null,
                            listener: function() {
                                if (n.defaultPrevented) {
                                    if (0 !== uj) {
                                        var e = new FormData(a, T);
                                        om(r, {
                                            pending: !0,
                                            data: e,
                                            method: a.method,
                                            action: E
                                        }, null, e)
                                    }
                                } else "function" == typeof E && (k.preventDefault(), om(r, {
                                    pending: !0,
                                    data: e = new FormData(a, T),
                                    method: a.method,
                                    action: E
                                }, E, e))
                            },
                            currentTarget: a
                        }]
                    })
                }
            }
            u1(o, t)
        })
    }

    function u9(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }

    function u7(e, t) {
        for (var n = t + "Capture", r = []; null !== e;) {
            var a = e,
                i = a.stateNode;
            if (5 !== (a = a.tag) && 26 !== a && 27 !== a || null === i || (null != (a = tB(e, n)) && r.unshift(u9(e, a, i)), null != (a = tB(e, t)) && r.push(u9(e, a, i))), 3 === e.tag) return r;
            e = e.return
        }
        return []
    }

    function ce(e) {
        if (null === e) return null;
        do e = e.return; while (e && 5 !== e.tag && 27 !== e.tag) return e || null
    }

    function ct(e, t, n, r, a) {
        for (var i = t._reactName, o = []; null !== n && n !== r;) {
            var l = n,
                s = l.alternate,
                u = l.stateNode;
            if (l = l.tag, null !== s && s === r) break;
            5 !== l && 26 !== l && 27 !== l || null === u || (s = u, a ? null != (u = tB(n, i)) && o.unshift(u9(n, u, s)) : a || null != (u = tB(n, i)) && o.push(u9(n, u, s))), n = n.return
        }
        0 !== o.length && e.push({
            event: t,
            listeners: o
        })
    }
    var cn = /\r\n?/g,
        cr = /\u0000|\uFFFD/g;

    function ca(e) {
        return ("string" == typeof e ? e : "" + e).replace(cn, "\n").replace(cr, "")
    }

    function ci(e, t) {
        return t = ca(t), ca(e) === t
    }

    function co(e, t, n, r, a, i) {
        switch (n) {
            case "children":
                if ("string" == typeof r) "body" === t || "textarea" === t && "" === r || tw(e, r);
                else {
                    if ("number" != typeof r && "bigint" != typeof r) return;
                    "body" !== t && tw(e, "" + r)
                }
                break;
            case "className":
                tu(e, "class", r);
                break;
            case "tabIndex":
                tu(e, "tabindex", r);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                tu(e, n, r);
                break;
            case "style":
                tN(e, r, i);
                return;
            case "data":
                if ("object" !== t) {
                    tu(e, "data", r);
                    break
                }
            case "src":
            case "href":
                if ("" === r && ("a" !== t || "href" !== n) || null == r || "function" == typeof r || "symbol" == typeof r || "boolean" == typeof r) {
                    e.removeAttribute(n);
                    break
                }
                r = tO(r), e.setAttribute(n, r);
                break;
            case "action":
            case "formAction":
                if ("function" == typeof r) {
                    e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                }
                if ("function" == typeof i && ("formAction" === n ? ("input" !== t && co(e, t, "name", a.name, a, null), co(e, t, "formEncType", a.formEncType, a, null), co(e, t, "formMethod", a.formMethod, a, null), co(e, t, "formTarget", a.formTarget, a, null)) : (co(e, t, "encType", a.encType, a, null), co(e, t, "method", a.method, a, null), co(e, t, "target", a.target, a, null))), null == r || "symbol" == typeof r || "boolean" == typeof r) {
                    e.removeAttribute(n);
                    break
                }
                r = tO(r), e.setAttribute(n, r);
                break;
            case "onClick":
                null != r && (e.onclick = tI);
                return;
            case "onScroll":
                null != r && u2("scroll", e);
                return;
            case "onScrollEnd":
                null != r && u2("scrollend", e);
                return;
            case "dangerouslySetInnerHTML":
                if (null != r) {
                    if ("object" != typeof r || !("__html" in r)) throw Error(s(61));
                    if (null != (n = r.__html)) {
                        if (null != a.children) throw Error(s(60));
                        (null != i ? i.__html : void 0) !== n && (e.innerHTML = n)
                    }
                }
                break;
            case "multiple":
                e.multiple = r && "function" != typeof r && "symbol" != typeof r;
                break;
            case "muted":
                e.muted = r && "function" != typeof r && "symbol" != typeof r;
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
            case "autoFocus":
                break;
            case "xlinkHref":
                if (null == r || "function" == typeof r || "boolean" == typeof r || "symbol" == typeof r) {
                    e.removeAttribute("xlink:href");
                    break
                }
                n = tO(r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                null != r && "function" != typeof r && "symbol" != typeof r ? e.setAttribute(n, r) : e.removeAttribute(n);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "credentialless":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                r && "function" != typeof r && "symbol" != typeof r ? e.setAttribute(n, "") : e.removeAttribute(n);
                break;
            case "capture":
            case "download":
                !0 === r ? e.setAttribute(n, "") : !1 !== r && null != r && "function" != typeof r && "symbol" != typeof r ? e.setAttribute(n, r) : e.removeAttribute(n);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                null != r && "function" != typeof r && "symbol" != typeof r && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
                break;
            case "rowSpan":
            case "start":
                null == r || "function" == typeof r || "symbol" == typeof r || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
                break;
            case "popover":
                u2("beforetoggle", e), u2("toggle", e), ts(e, "popover", r);
                break;
            case "xlinkActuate":
                tc(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
                break;
            case "xlinkArcrole":
                tc(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
                break;
            case "xlinkRole":
                tc(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
                break;
            case "xlinkShow":
                tc(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
                break;
            case "xlinkTitle":
                tc(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
                break;
            case "xlinkType":
                tc(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
                break;
            case "xmlBase":
                tc(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
                break;
            case "xmlLang":
                tc(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
                break;
            case "xmlSpace":
                tc(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
                break;
            case "is":
                ts(e, "is", r);
                break;
            case "innerText":
            case "textContent":
                return;
            default:
                if (2 < n.length && ("o" === n[0] || "O" === n[0]) && ("n" === n[1] || "N" === n[1])) return;
                ts(e, n = tP.get(n) || n, r)
        }
        to = !0
    }

    function cl(e, t, n, r, a, i) {
        switch (n) {
            case "style":
                tN(e, r, i);
                return;
            case "dangerouslySetInnerHTML":
                if (null != r) {
                    if ("object" != typeof r || !("__html" in r)) throw Error(s(61));
                    if (null != (n = r.__html)) {
                        if (null != a.children) throw Error(s(60));
                        (null != i ? i.__html : void 0) !== n && (e.innerHTML = n)
                    }
                }
                break;
            case "children":
                if ("string" == typeof r) tw(e, r);
                else {
                    if ("number" != typeof r && "bigint" != typeof r) return;
                    tw(e, "" + r)
                }
                break;
            case "onScroll":
                null != r && u2("scroll", e);
                return;
            case "onScrollEnd":
                null != r && u2("scrollend", e);
                return;
            case "onClick":
                null != r && (e.onclick = tI);
                return;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
            case "innerText":
            case "textContent":
                return;
            default:
                if (!te.hasOwnProperty(n)) e: {
                    if ("o" === n[0] && "n" === n[1] && (a = n.endsWith("Capture"), i = n.slice(2, a ? n.length - 7 : void 0), "function" == typeof(t = null != (t = e[eV] || null) ? t[n] : null) && e.removeEventListener(i, t, a), "function" == typeof r)) {
                        "function" != typeof t && null !== t && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(i, r, a);
                        break e
                    }
                    to = !0,
                    n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : ts(e, n, r)
                }
                return
        }
        to = !0
    }

    function cs(e, t, n) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                u2("error", e), u2("load", e);
                var r, a = !1,
                    i = !1;
                for (r in n)
                    if (n.hasOwnProperty(r)) {
                        var o = n[r];
                        if (null != o) switch (r) {
                            case "src":
                                a = !0;
                                break;
                            case "srcSet":
                                i = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(s(137, t));
                            default:
                                co(e, t, r, o, n, null)
                        }
                    } i && co(e, t, "srcSet", n.srcSet, n, null), a && co(e, t, "src", n.src, n, null);
                return;
            case "input":
                u2("invalid", e);
                var l = r = o = i = null,
                    u = null,
                    c = null;
                for (a in n)
                    if (n.hasOwnProperty(a)) {
                        var d = n[a];
                        if (null != d) switch (a) {
                            case "name":
                                i = d;
                                break;
                            case "type":
                                o = d;
                                break;
                            case "checked":
                                u = d;
                                break;
                            case "defaultChecked":
                                c = d;
                                break;
                            case "value":
                                r = d;
                                break;
                            case "defaultValue":
                                l = d;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (null != d) throw Error(s(137, t));
                                break;
                            default:
                                co(e, t, a, d, n, null)
                        }
                    } ty(e, r, l, u, c, o, i, !1);
                return;
            case "select":
                for (i in u2("invalid", e), a = o = r = null, n)
                    if (n.hasOwnProperty(i) && null != (l = n[i])) switch (i) {
                        case "value":
                            r = l;
                            break;
                        case "defaultValue":
                            o = l;
                            break;
                        case "multiple":
                            a = l;
                        default:
                            co(e, t, i, l, n, null)
                    }
                t = r, n = o, e.multiple = !!a, null != t ? t_(e, !!a, t, !1) : null != n && t_(e, !!a, n, !0);
                return;
            case "textarea":
                for (o in u2("invalid", e), r = i = a = null, n)
                    if (n.hasOwnProperty(o) && null != (l = n[o])) switch (o) {
                        case "value":
                            a = l;
                            break;
                        case "defaultValue":
                            i = l;
                            break;
                        case "children":
                            r = l;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (null != l) throw Error(s(91));
                            break;
                        default:
                            co(e, t, o, l, n, null)
                    }
                tE(e, a, i, r);
                return;
            case "option":
                for (u in n) n.hasOwnProperty(u) && null != (a = n[u]) && ("selected" === u ? e.selected = a && "function" != typeof a && "symbol" != typeof a : co(e, t, u, a, n, null));
                return;
            case "dialog":
                u2("beforetoggle", e), u2("toggle", e), u2("cancel", e), u2("close", e);
                break;
            case "iframe":
            case "object":
                u2("load", e);
                break;
            case "video":
            case "audio":
                for (a = 0; a < uZ.length; a++) u2(uZ[a], e);
                break;
            case "image":
                u2("error", e), u2("load", e);
                break;
            case "details":
                u2("toggle", e);
                break;
            case "embed":
            case "source":
            case "link":
                u2("error", e), u2("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (c in n)
                    if (n.hasOwnProperty(c) && null != (a = n[c])) switch (c) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(s(137, t));
                        default:
                            co(e, t, c, a, n, null)
                    }
                return;
            default:
                if (tx(t)) {
                    for (d in n) n.hasOwnProperty(d) && void 0 !== (a = n[d]) && cl(e, t, d, a, n, void 0);
                    return
                }
        }
        for (l in n) n.hasOwnProperty(l) && null != (a = n[l]) && co(e, t, l, a, n, null)
    }
    var cu = {};

    function cc(e) {
        switch (e) {
            case "css":
            case "script":
            case "font":
            case "img":
            case "image":
            case "input":
            case "link":
                return !0;
            default:
                return !1
        }
    }
    var cd = null,
        cf = null;

    function cp(e) {
        return 9 === e.nodeType ? e : e.ownerDocument
    }

    function cm(e) {
        switch (e) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function ch(e, t) {
        if (0 === e) switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
        }
        return 1 === e && "foreignObject" === t ? 0 : e
    }

    function cg(e, t) {
        return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "bigint" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
    }
    var cv = null,
        cy = "function" == typeof setTimeout ? setTimeout : void 0,
        cb = "function" == typeof clearTimeout ? clearTimeout : void 0,
        c_ = "function" == typeof Promise ? Promise : void 0,
        cS = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== c_ ? function(e) {
            return c_.resolve(null).then(e).catch(cE)
        } : cy;

    function cE(e) {
        setTimeout(function() {
            throw e
        })
    }

    function cw(e) {
        return "head" === e
    }

    function cT(e, t) {
        var n = t,
            r = 0;
        do {
            var a = n.nextSibling;
            if (e.removeChild(n), a && 8 === a.nodeType)
                if ("/$" === (n = a.data) || "/&" === n) {
                    if (0 === r) {
                        e.removeChild(a), d8(t);
                        return
                    }
                    r--
                } else if ("$" === n || "$?" === n || "$~" === n || "$!" === n || "&" === n) r++;
            else if ("html" === n) c5(e.ownerDocument.documentElement);
            else if ("head" === n) {
                c5(n = e.ownerDocument.head);
                for (var i = n.firstChild; i;) {
                    var o = i.nextSibling,
                        l = i.nodeName;
                    i[e0] || "SCRIPT" === l || "STYLE" === l || "LINK" === l && "stylesheet" === i.rel.toLowerCase() || n.removeChild(i), i = o
                }
            } else "body" === n && c5(e.ownerDocument.body);
            n = a
        } while (n) d8(t)
    }

    function ck(e, t) {
        var n = e;
        e = 0;
        do {
            var r = n.nextSibling;
            if (1 === n.nodeType ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", "" === n.getAttribute("style") && n.removeAttribute("style")) : 3 === n.nodeType && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && 8 === r.nodeType)
                if ("/$" === (n = r.data))
                    if (0 === e) break;
                    else e--;
            else "$" !== n && "$?" !== n && "$~" !== n && "$!" !== n || e++;
            n = r
        } while (n)
    }

    function cN(e, t, n) {
        if (t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t, e.style.viewTransitionName = t, null != n && (e.style.viewTransitionClass = n), "inline" === (n = getComputedStyle(e)).display) {
            if (1 === (t = e.getClientRects()).length) var r = 1;
            else
                for (var a = r = 0; a < t.length; a++) {
                    var i = t[a];
                    0 < i.width && 0 < i.height && r++
                }
            1 === r && ((e = e.style).display = 1 === t.length ? "inline-block" : "block", e.marginTop = "-" + n.paddingTop, e.marginBottom = "-" + n.paddingBottom)
        }
    }

    function cx(e, t) {
        e = e.style;
        var n = null != (t = t.style) ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
        e.viewTransitionName = null == n || "boolean" == typeof n ? "" : ("" + n).trim(), n = null != t ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, e.viewTransitionClass = null == n || "boolean" == typeof n ? "" : ("" + n).trim(), "inline-block" === e.display && (null == t ? e.display = e.margin = "" : (n = t.display, e.display = null == n || "boolean" == typeof n ? "" : n, null != (n = t.margin) ? e.margin = n : (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = null == n || "boolean" == typeof n ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = null == t || "boolean" == typeof t ? "" : t)))
    }

    function cP(e, t, n) {
        return n = n.ownerDocument.defaultView, {
            rect: e,
            abs: "absolute" === t.position || "fixed" === t.position,
            clip: "none" !== t.clipPath || "visible" !== t.overflow || "none" !== t.filter || "none" !== t.mask || "none" !== t.mask || "0px" !== t.borderRadius,
            view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
        }
    }

    function cC(e) {
        return cP(e.getBoundingClientRect(), getComputedStyle(e), e)
    }

    function cO(e) {
        var t = e.getBoundingClientRect();
        return cP(t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height), getComputedStyle(e), e)
    }

    function cI(e) {
        this.addEventListener("load", e), this.addEventListener("error", e)
    }

    function cR(e, t) {
        this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")"
    }

    function cL(e) {
        return {
            name: e,
            group: new cR("group", e),
            imagePair: new cR("image-pair", e),
            old: new cR("old", e),
            new: new cR("new", e)
        }
    }

    function cA(e) {
        this._fragmentFiber = e, this._observers = this._eventListeners = null
    }

    function cD(e, t, n, r) {
        return g(e).addEventListener(t, n, r), !1
    }

    function cM(e, t, n, r) {
        return g(e).removeEventListener(t, n, r), !1
    }

    function cU(e) {
        return null == e ? "0" : "boolean" == typeof e ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0")
    }

    function cz(e, t, n, r) {
        if (0 === e.length) return -1;
        r = cU(r);
        for (var a = 0; a < e.length; a++) {
            var i = e[a];
            if (i.type === t && i.listener === n && cU(i.optionsOrUseCapture) === r) return a
        }
        return -1
    }

    function cB(e, t) {
        return 6 !== e.tag && function(e, t) {
            function n() {
                r = !0
            }
            if (e.ownerDocument.activeElement === e) return !0;
            var r = !1;
            try {
                e.ownerDocument.addEventListener("focus", n, !0), (e.focus || HTMLElement.prototype.focus).call(e, t)
            } finally {
                e.ownerDocument.removeEventListener("focus", n, !0)
            }
            return r
        }(e = g(e), t)
    }

    function cF(e, t) {
        return t.push(e), !1
    }

    function cj(e, t) {
        return 6 !== e.tag && !!((e = g(e)) === t || e.contains(t)) && (t.blur(), !0)
    }

    function c$(e, t) {
        return 6 !== e.tag && (e = g(e), t.observe(e), !1)
    }

    function cG(e, t) {
        return 6 !== e.tag && (e = g(e), t.unobserve(e), !1)
    }

    function cH(e, t) {
        if (6 === e.tag) {
            var n = (e = e.stateNode).ownerDocument.createRange();
            n.selectNodeContents(e), t.push.apply(t, n.getClientRects())
        } else e = g(e), t.push.apply(t, e.getClientRects());
        return !1
    }

    function cq(e, t) {
        var n = e.ownerDocument.createRange();
        n.selectNodeContents(e), e = n.getBoundingClientRect(), window.scrollTo(window.scrollX + e.left, t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight)
    }

    function cW(e, t) {
        return cY(e = g(e), t), !1
    }

    function cY(e, t) {
        null == e.reactFragments && (e.reactFragments = new Set), e.reactFragments.add(t)
    }

    function cV(e, t) {
        if (3 !== e.nodeType) {
            var n = t._eventListeners;
            if (null !== n)
                for (var r = 0; r < n.length; r++) {
                    var a = n[r];
                    e.addEventListener(a.type, a.listener, a.optionsOrUseCapture)
                }
            null !== t._observers && t._observers.forEach(function(t) {
                t.observe(e)
            }), cY(e, t)
        }
    }

    function cJ(e) {
        var t = e.firstChild;
        for (t && 10 === t.nodeType && (t = t.nextSibling); t;) {
            var n = t;
            switch (t = t.nextSibling, n.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    cJ(n), e2(n);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if ("stylesheet" === n.rel.toLowerCase()) continue
            }
            e.removeChild(n)
        }
    }

    function cQ(e, t) {
        for (; 8 !== e.nodeType;)
            if ((1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) && !t || null === (e = cZ(e.nextSibling))) return null;
        return e
    }

    function cK(e) {
        return "$?" === e.data || "$~" === e.data
    }

    function cX(e) {
        return "$!" === e.data || "$?" === e.data && "loading" !== e.ownerDocument.readyState
    }

    function cZ(e) {
        for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
                if ("$" === (t = e.data) || "$!" === t || "$?" === t || "$~" === t || "&" === t || "F!" === t || "F" === t) break;
                if ("/$" === t || "/&" === t) return null
            }
        }
        return e
    }
    cR.prototype.animate = function(e, t) {
        return (t = "number" == typeof t ? {
            duration: t
        } : T({}, t)).pseudoElement = this._selector, this._scope.animate(e, t)
    }, cR.prototype.getAnimations = function() {
        for (var e = this._scope, t = this._selector, n = e.getAnimations({
                subtree: !0
            }), r = [], a = 0; a < n.length; a++) {
            var i = n[a].effect;
            null !== i && i.target === e && i.pseudoElement === t && r.push(n[a])
        }
        return r
    }, cR.prototype.getComputedStyle = function() {
        return getComputedStyle(this._scope, this._selector)
    }, cA.prototype.addEventListener = function(e, t, n) {
        null === this._eventListeners && (this._eventListeners = []);
        var r = this._eventListeners; - 1 === cz(r, e, t, n) && (r.push({
            type: e,
            listener: t,
            optionsOrUseCapture: n
        }), m(this._fragmentFiber.child, !1, cD, e, t, n)), this._eventListeners = r
    }, cA.prototype.removeEventListener = function(e, t, n) {
        var r = this._eventListeners;
        null != r && 0 < r.length && (m(this._fragmentFiber.child, !1, cM, e, t, n), e = cz(r, e, t, n), null !== this._eventListeners && this._eventListeners.splice(e, 1))
    }, cA.prototype.dispatchEvent = function(e) {
        var t = h(this._fragmentFiber);
        if (null === t) return !0;
        t = g(t);
        var n = this._eventListeners;
        if (null !== n && 0 < n.length || !e.bubbles) {
            var r = document.createTextNode("");
            if (n)
                for (var a = 0; a < n.length; a++) {
                    var i = n[a];
                    r.addEventListener(i.type, i.listener, i.optionsOrUseCapture)
                }
            if (t.appendChild(r), e = r.dispatchEvent(e), n)
                for (a = 0; a < n.length; a++) i = n[a], r.removeEventListener(i.type, i.listener, i.optionsOrUseCapture);
            return t.removeChild(r), e
        }
        return t.dispatchEvent(e)
    }, cA.prototype.focus = function(e) {
        m(this._fragmentFiber.child, !0, cB, e, void 0, void 0)
    }, cA.prototype.focusLast = function(e) {
        var t = [];
        m(this._fragmentFiber.child, !0, cF, t, void 0, void 0);
        for (var n = t.length - 1; 0 <= n && !cB(t[n], e); n--);
    }, cA.prototype.blur = function() {
        var e = h(this._fragmentFiber);
        if (null !== e) {
            var t = cp(e = g(e)).activeElement;
            null !== t && e.contains(t) && m(this._fragmentFiber.child, !1, cj, t, void 0, void 0)
        }
    }, cA.prototype.observeUsing = function(e) {
        null === this._observers && (this._observers = new Set), this._observers.add(e), m(this._fragmentFiber.child, !1, c$, e, void 0, void 0)
    }, cA.prototype.unobserveUsing = function(e) {
        var t = this._observers;
        null !== t && t.has(e) && (t.delete(e), m(this._fragmentFiber.child, !1, cG, e, void 0, void 0))
    }, cA.prototype.getClientRects = function() {
        var e = [];
        return m(this._fragmentFiber.child, !1, cH, e, void 0, void 0), e
    }, cA.prototype.getRootNode = function(e) {
        var t = h(this._fragmentFiber);
        return null === t ? this : g(t).getRootNode(e)
    }, cA.prototype.compareDocumentPosition = function(e) {
        var t = h(this._fragmentFiber);
        if (null === t) return Node.DOCUMENT_POSITION_DISCONNECTED;
        var n = [];
        m(this._fragmentFiber.child, !1, cF, n, void 0, void 0);
        var r = g(t);
        if (0 === n.length) {
            n = this._fragmentFiber;
            var a = r.compareDocumentPosition(e);
            return t = a, r === e ? t = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (m(n.sibling, !1, b), n = v, v = null, t = null === n ? Node.DOCUMENT_POSITION_PRECEDING : 0 === (e = g(n).compareDocumentPosition(e)) || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING), t | Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
        }
        t = g(n[0]), a = g(n[n.length - 1]);
        for (var i = !1, o = this._fragmentFiber.return; null !== o && (4 === o.tag && (i = !0), 3 !== o.tag && 5 !== o.tag);) o = o.return;
        if (null == (i = i ? t.parentElement : r)) return Node.DOCUMENT_POSITION_DISCONNECTED;
        r = i.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, i = i.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_CONTAINED_BY, o = t.compareDocumentPosition(e);
        var l = a.compareDocumentPosition(e),
            s = o & Node.DOCUMENT_POSITION_CONTAINED_BY || l & Node.DOCUMENT_POSITION_CONTAINED_BY;
        return l = r && i && o & Node.DOCUMENT_POSITION_FOLLOWING && l & Node.DOCUMENT_POSITION_PRECEDING, (t = r && t === e || i && a === e || s || l ? Node.DOCUMENT_POSITION_CONTAINED_BY : (r || t !== e) && (i || a !== e) ? o : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC) & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || function(e, t, n, r, a) {
            var i = e3(a);
            if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
                if (n = !!i) e: {
                    for (; null !== i;) {
                        if (7 === i.tag && (i === t || i.alternate === t)) {
                            n = !0;
                            break e
                        }
                        i = i.return
                    }
                    n = !1
                }
                return n
            }
            if (e & Node.DOCUMENT_POSITION_CONTAINS) {
                if (null === i) return i = a.ownerDocument, a === i || a === i.body;
                e: {
                    for (i = t, t = h(t); null !== i;) {
                        if ((5 === i.tag || 3 === i.tag) && (i === t || i.alternate === t)) {
                            i = !0;
                            break e
                        }
                        i = i.return
                    }
                    i = !1
                }
                return i
            }
            return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!i) && !(t = i === n) && (null === (t = w(n, i, E)) ? t = !1 : (m(t, !0, _, i, n), i = v, v = null, t = null !== i)), t) : !!(e & Node.DOCUMENT_POSITION_FOLLOWING) && ((t = !!i) && !(t = i === r) && (null === (t = w(r, i, E)) ? t = !1 : (m(t, !0, S, i, r), i = v, y = v = null, t = null !== i)), t)
        }(t, this._fragmentFiber, n[0], n[n.length - 1], e) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
    }, cA.prototype.scrollIntoView = function(e) {
        if ("object" == typeof e) throw Error(s(566));
        var t = [];
        m(this._fragmentFiber.child, !1, cF, t, void 0, void 0);
        var n = !1 !== e;
        if (0 === t.length) {
            var r = this._fragmentFiber,
                a = [null, null],
                i = h(r);
            if (null !== i && function e(t, n, r) {
                    for (var a = 3 < arguments.length && void 0 !== arguments[3] && arguments[3]; null !== r;) {
                        if (r === n)
                            if (a = !0, !r.sibling) return !0;
                            else r = r.sibling;
                        if (5 === r.tag || 6 === r.tag) {
                            if (a) return t[1] = r, !0;
                            t[0] = r
                        } else if ((22 !== r.tag || null === r.memoizedState) && e(t, n, r.child, a)) return !0;
                        r = r.sibling
                    }
                    return !1
                }(a, r, i.child), null === (r = n ? a[1] || a[0] || h(this._fragmentFiber) : a[0] || a[1])) return;
            if (6 === r.tag) return void cq(e = g(r), n);
            if (9 !== (r = g(r)).nodeType) {
                if (11 === r.nodeType) {
                    null !== (n = "host" in r ? r.host : null) && n.scrollIntoView(e);
                    return
                }
                r.scrollIntoView(e)
            }
        }
        for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length);) 6 === (a = t[r]).tag ? cq(a = g(a), n) : g(a).scrollIntoView(e), r += n ? -1 : 1
    };
    var c0 = null;

    function c1(e) {
        e = e.nextSibling;
        for (var t = 0; e;) {
            if (8 === e.nodeType) {
                var n = e.data;
                if ("/$" === n || "/&" === n) {
                    if (0 === t) return cZ(e.nextSibling);
                    t--
                } else "$" !== n && "$!" !== n && "$?" !== n && "$~" !== n && "&" !== n || t++
            }
            e = e.nextSibling
        }
        return null
    }

    function c2(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (8 === e.nodeType) {
                var n = e.data;
                if ("$" === n || "$!" === n || "$?" === n || "$~" === n || "&" === n) {
                    if (0 === t) return e;
                    t--
                } else "/$" !== n && "/&" !== n || t++
            }
            e = e.previousSibling
        }
        return null
    }

    function c3(e, t, n) {
        switch (t = cp(n), e) {
            case "html":
                if (!(e = t.documentElement)) throw Error(s(452));
                return e;
            case "head":
                if (!(e = t.head)) throw Error(s(453));
                return e;
            case "body":
                if (!(e = t.body)) throw Error(s(454));
                return e;
            default:
                throw Error(s(451))
        }
    }

    function c4(e, t, n) {
        for (var r in n) {
            var a = n[r];
            n.hasOwnProperty(r) && null != a && co(e, t, r, null, cu, a)
        }
        null != n.dangerouslySetInnerHTML && (e.textContent = ""), e.onclick === tI && (e.onclick = null), e2(e)
    }

    function c5(e) {
        for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
        e2(e)
    }
    var c8 = new Map,
        c6 = new Set;

    function c9(e) {
        if ("function" == typeof e.getRootNode) {
            var t = e.getRootNode();
            if (9 === t.nodeType || 11 === t.nodeType) return t
        }
        return 9 === e.nodeType ? e : e.ownerDocument
    }
    var c7 = V.d;
    V.d = {
        f: function() {
            var e = c7.f(),
                t = uo();
            return e || t
        },
        r: function(e) {
            var t = e4(e);
            null !== t && 5 === t.tag && "form" === t.type ? og(t) : c7.r(e)
        },
        D: function(e) {
            c7.D(e), dt("dns-prefetch", e, null)
        },
        C: function(e, t) {
            c7.C(e, t), dt("preconnect", e, t)
        },
        L: function(e, t, n) {
            if (c7.L(e, t, n), de && e && t) {
                var r = 'link[rel="preload"][as="' + tg(t) + '"]';
                "image" === t && n && n.imageSrcSet ? (r += '[imagesrcset="' + tg(n.imageSrcSet) + '"]', "string" == typeof n.imageSizes && (r += '[imagesizes="' + tg(n.imageSizes) + '"]')) : r += '[href="' + tg(e) + '"]';
                var a = r;
                switch (t) {
                    case "style":
                        a = dr(e);
                        break;
                    case "script":
                        a = dl(e)
                }
                if (!(c8.has(a) || (e = T({
                        rel: "preload",
                        href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                        as: t
                    }, n), c8.set(a, e), null !== de.querySelector(r) || "style" === t && de.querySelector(da(a)) || "script" === t && de.querySelector(ds(a))))) {
                    var i = de.createElement("link");
                    cs(i, "link", e), "style" === t && (i[e1] = !0, i.onload = i.onerror = function() {
                        e9(i)
                    }), e6(i), de.head.appendChild(i)
                }
            }
        },
        m: function(e, t) {
            if (c7.m(e, t), de && e) {
                var n = t && "string" == typeof t.as ? t.as : "script",
                    r = 'link[rel="modulepreload"][as="' + tg(n) + '"][href="' + tg(e) + '"]',
                    a = r;
                switch (n) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        a = dl(e)
                }
                if (!c8.has(a) && (e = T({
                        rel: "modulepreload",
                        href: e
                    }, t), c8.set(a, e), null === de.querySelector(r))) {
                    switch (n) {
                        case "audioworklet":
                        case "paintworklet":
                        case "serviceworker":
                        case "sharedworker":
                        case "worker":
                        case "script":
                            if (de.querySelector(ds(a))) return
                    }
                    cs(n = de.createElement("link"), "link", e), e6(n), de.head.appendChild(n)
                }
            }
        },
        X: function(e, t) {
            if (c7.X(e, t), de && e) {
                var n = e8(de).hoistableScripts,
                    r = dl(e),
                    a = n.get(r);
                a || ((a = de.querySelector(ds(r))) || (e = T({
                    src: e,
                    async: !0
                }, t), (t = c8.get(r)) && df(e, t), e6(a = de.createElement("script")), cs(a, "link", e), de.head.appendChild(a)), a = {
                    type: "script",
                    instance: a,
                    count: 1,
                    state: null
                }, n.set(r, a))
            }
        },
        S: function(e, t, n) {
            if (c7.S(e, t, n), de && e) {
                var r = e8(de).hoistableStyles,
                    a = dr(e);
                t = t || "default";
                var i = r.get(a);
                if (!i) {
                    var o = {
                        loading: 0,
                        preload: null
                    };
                    if (i = de.querySelector(da(a))) o.loading = 5;
                    else {
                        e = T({
                            rel: "stylesheet",
                            href: e,
                            "data-precedence": t
                        }, n), (n = c8.get(a)) && dd(e, n);
                        var l = i = de.createElement("link");
                        e6(l), cs(l, "link", e), l._p = new Promise(function(e, t) {
                            l.onload = e, l.onerror = t
                        }), l.addEventListener("load", function() {
                            o.loading |= 1
                        }), l.addEventListener("error", function() {
                            o.loading |= 2
                        }), o.loading |= 4, dc(i, t, de)
                    }
                    i = {
                        type: "stylesheet",
                        instance: i,
                        count: 1,
                        state: o
                    }, r.set(a, i)
                }
            }
        },
        M: function(e, t) {
            if (c7.M(e, t), de && e) {
                var n = e8(de).hoistableScripts,
                    r = dl(e),
                    a = n.get(r);
                a || ((a = de.querySelector(ds(r))) || (e = T({
                    src: e,
                    async: !0,
                    type: "module"
                }, t), (t = c8.get(r)) && df(e, t), e6(a = de.createElement("script")), cs(a, "link", e), de.head.appendChild(a)), a = {
                    type: "script",
                    instance: a,
                    count: 1,
                    state: null
                }, n.set(r, a))
            }
        }
    };
    var de = "u" < typeof document ? null : document;

    function dt(e, t, n) {
        if (de && "string" == typeof t && t) {
            var r = tg(t);
            r = 'link[rel="' + e + '"][href="' + r + '"]', "string" == typeof n && (r += '[crossorigin="' + n + '"]'), c6.has(r) || (c6.add(r), e = {
                rel: e,
                crossOrigin: n,
                href: t
            }, null === de.querySelector(r) && (cs(t = de.createElement("link"), "link", e), e6(t), de.head.appendChild(t)))
        }
    }

    function dn(e, t, n, r) {
        var a = (a = er.current) ? c9(a) : null;
        if (!a) throw Error(s(446));
        switch (e) {
            case "meta":
            case "title":
                return null;
            case "style":
                return "string" == typeof n.precedence && "string" == typeof n.href ? (n = dr(n.href), (r = (t = e8(a).hoistableStyles).get(n)) || (r = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, t.set(n, r)), r) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if ("stylesheet" === n.rel && "string" == typeof n.href && "string" == typeof n.precedence) {
                    e = dr(n.href);
                    var i = e8(a).hoistableStyles,
                        o = i.get(e);
                    if (o || (a = a.ownerDocument || a, o = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, i.set(e, o), (i = a.querySelector(da(e))) ? i._p || (o.instance = i, o.state.loading = 5) : ((i = c8.get(e)) || (i = {
                            rel: "preload",
                            as: "style",
                            href: n.href,
                            crossOrigin: n.crossOrigin,
                            integrity: n.integrity,
                            media: n.media,
                            hrefLang: n.hrefLang,
                            referrerPolicy: n.referrerPolicy
                        }, c8.set(e, i)), function(e, t, n, r) {
                            if (t = e.querySelector('link[rel="preload"][as="style"][' + t + "]")) {
                                if (!0 !== t[e1]) {
                                    r.loading = 1;
                                    return
                                }
                            } else(t = e.createElement("link"))[e1] = !0, t.onload = t.onerror = e9.bind(null, t), cs(t, "link", n), e6(t), e.head.appendChild(t);
                            r.preload = t, t.addEventListener("load", function() {
                                return r.loading |= 1
                            }), t.addEventListener("error", function() {
                                return r.loading |= 2
                            })
                        }(a, e, i, o.state))), t && null === r) throw Error(s(528, ""));
                    return o
                }
                if (t && null !== r) throw Error(s(529, ""));
                return null;
            case "script":
                return t = n.async, "string" == typeof(n = n.src) && t && "function" != typeof t && "symbol" != typeof t ? (n = dl(n), (r = (t = e8(a).hoistableScripts).get(n)) || (r = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, t.set(n, r)), r) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(s(444, e))
        }
    }

    function dr(e) {
        return 'href="' + tg(e) + '"'
    }

    function da(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }

    function di(e) {
        return T({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }

    function dl(e) {
        return '[src="' + tg(e) + '"]'
    }

    function ds(e) {
        return "script[async]" + e
    }

    function du(e, t, n) {
        if (t.count++, null === t.instance) switch (t.type) {
            case "style":
                var r = e.querySelector('style[data-href~="' + tg(n.href) + '"]');
                if (r) return t.instance = r, e6(r), r;
                var a = T({}, n, {
                    "data-href": n.href,
                    "data-precedence": n.precedence,
                    href: null,
                    precedence: null
                });
                return e6(r = (e.ownerDocument || e).createElement("style")), cs(r, "style", a), dc(r, n.precedence, e), t.instance = r;
            case "stylesheet":
                a = dr(n.href);
                var i = e.querySelector(da(a));
                if (i) return t.state.loading |= 4, t.instance = i, e6(i), i;
                r = di(n), (a = c8.get(a)) && dd(r, a), e6(i = (e.ownerDocument || e).createElement("link"));
                var o = i;
                return o._p = new Promise(function(e, t) {
                    o.onload = e, o.onerror = t
                }), cs(i, "link", r), t.state.loading |= 4, dc(i, n.precedence, e), t.instance = i;
            case "script":
                if (i = dl(n.src), a = e.querySelector(ds(i))) return t.instance = a, e6(a), a;
                return r = n, (a = c8.get(i)) && df(r = T({}, n), a), e6(a = (e = e.ownerDocument || e).createElement("script")), cs(a, "link", r), e.head.appendChild(a), t.instance = a;
            case "void":
                return null;
            default:
                throw Error(s(443, t.type))
        }
        return "stylesheet" === t.type && 0 == (4 & t.state.loading) && (r = t.instance, t.state.loading |= 4, dc(r, n.precedence, e)), t.instance
    }

    function dc(e, t, n) {
        for (var r = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = r.length ? r[r.length - 1] : null, i = a, o = 0; o < r.length; o++) {
            var l = r[o];
            if (l.dataset.precedence === t) i = l;
            else if (i !== a) break
        }
        i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild)
    }

    function dd(e, t) {
        null == e.crossOrigin && (e.crossOrigin = t.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), null == e.title && (e.title = t.title)
    }

    function df(e, t) {
        null == e.crossOrigin && (e.crossOrigin = t.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), null == e.integrity && (e.integrity = t.integrity)
    }
    var dp = null;

    function dm(e, t, n) {
        if (null === dp) {
            var r = new Map,
                a = dp = new Map;
            a.set(n, r)
        } else(r = (a = dp).get(n)) || (r = new Map, a.set(n, r));
        if (r.has(e)) return r;
        for (r.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
            var i = n[a];
            if (!(i[e0] || i[eY] || "link" === e && "stylesheet" === i.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== i.namespaceURI) {
                var o = i.getAttribute(t) || "";
                o = e + o;
                var l = r.get(o);
                l ? l.push(i) : r.set(o, [i])
            }
        }
        return r
    }

    function dh(e, t, n) {
        (e = e.ownerDocument || e).head.insertBefore(n, "title" === t ? e.querySelector("head > title") : null)
    }

    function dg(e, t) {
        return "img" === e && null != t.src && "" !== t.src && null == t.onLoad && "lazy" !== t.loading
    }

    function dv(e) {
        return "stylesheet" !== e.type || 0 != (3 & e.state.loading)
    }

    function dy(e) {
        return (e.width || 100) * (e.height || 100) * ("number" == typeof devicePixelRatio ? devicePixelRatio : 1) * .25
    }

    function db(e, t) {
        "function" == typeof t.decode && (e.imgCount++, t.complete || (e.imgBytes += dy(t), e.suspenseyImages.push(t)), e = dw.bind(e), t.decode().then(e, e))
    }
    var d_ = 0;

    function dS(e) {
        if (0 === e.count && (0 === e.imgCount || !e.waitingForImages)) {
            if (e.stylesheets) dk(e, e.stylesheets);
            else if (e.unsuspend) {
                var t = e.unsuspend;
                e.unsuspend = null, t()
            }
        }
    }

    function dE() {
        this.count--, dS(this)
    }

    function dw() {
        this.imgCount--, dS(this)
    }
    var dT = null;

    function dk(e, t) {
        e.stylesheets = null, null !== e.unsuspend && (e.count++, dT = new Map, t.forEach(dN, e), dT = null, dE.call(e))
    }

    function dN(e, t) {
        if (!(4 & t.state.loading)) {
            var n = dT.get(e);
            if (n) var r = n.get(null);
            else {
                n = new Map, dT.set(e, n);
                for (var a = e.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < a.length; i++) {
                    var o = a[i];
                    ("LINK" === o.nodeName || "not all" !== o.getAttribute("media")) && (n.set(o.dataset.precedence, o), r = o)
                }
                r && n.set(null, r)
            }
            o = (a = t.instance).getAttribute("data-precedence"), (i = n.get(o) || r) === r && n.set(null, a), n.set(o, a), this.count++, r = dE.bind(this), a.addEventListener("load", r), a.addEventListener("error", r), i ? i.parentNode.insertBefore(a, i.nextSibling) : (e = 9 === e.nodeType ? e.head : e).insertBefore(a, e.firstChild), t.state.loading |= 4
        }
    }
    var dx = {
        $$typeof: R,
        Provider: null,
        Consumer: null,
        _currentValue: J,
        _currentValue2: J,
        _threadCount: 0
    };

    function dP(e, t, n, r, a, i, o, l, s) {
        this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = eU(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = eU(0), this.hiddenUpdates = eU(null), this.identifierPrefix = r, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.transitionTypes = null, this.incompleteTransitions = new Map
    }

    function dC(e, t, n, r, a, i, o, l, s, u, c, d) {
        return e = new dP(e, t, n, o, s, u, c, d, l), t = 1, !0 === i && (t |= 24), i = rS(3, null, null, t), e.current = i, i.stateNode = e, t = af(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: t
        }, aq(i), e
    }

    function dO(e, t, n, r, a, i) {
        a = a ? rb : rb, null === r.context ? r.context = a : r.pendingContext = a, (r = aY(t)).payload = {
            element: n
        }, null !== (i = void 0 === i ? null : i) && (r.callback = i), null !== (n = aV(e, r, t)) && (un(n, e, t), aJ(n, e, t))
    }

    function dI(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t
        }
    }

    function dR(e, t) {
        dI(e, t), (e = e.alternate) && dI(e, t)
    }

    function dL(e) {
        if (13 === e.tag || 31 === e.tag) {
            var t = rg(e, 0x4000000);
            null !== t && un(t, e, 0x4000000), dR(e, 0x4000000)
        }
    }

    function dA(e) {
        if (13 === e.tag || 31 === e.tag) {
            var t = s7(),
                n = rg(e, t = e$(t));
            null !== n && un(n, e, t), dR(e, t)
        }
    }
    var dD = !0;

    function dM(e, t, n, r) {
        var a = Y.T;
        Y.T = null;
        var i = V.p;
        try {
            V.p = 2, dz(e, t, n, r)
        } finally {
            V.p = i, Y.T = a
        }
    }

    function dU(e, t, n, r) {
        var a = Y.T;
        Y.T = null;
        var i = V.p;
        try {
            V.p = 8, dz(e, t, n, r)
        } finally {
            V.p = i, Y.T = a
        }
    }

    function dz(e, t, n, r) {
        if (dD) {
            var a = dB(r);
            if (null === a) u6(e, t, r, dF, n), dK(e, r);
            else if (function(e, t, n, r, a) {
                    switch (t) {
                        case "focusin":
                            return dH = dX(dH, e, t, n, r, a), !0;
                        case "dragenter":
                            return dq = dX(dq, e, t, n, r, a), !0;
                        case "mouseover":
                            return dW = dX(dW, e, t, n, r, a), !0;
                        case "pointerover":
                            var i = a.pointerId;
                            return dY.set(i, dX(dY.get(i) || null, e, t, n, r, a)), !0;
                        case "gotpointercapture":
                            return i = a.pointerId, dV.set(i, dX(dV.get(i) || null, e, t, n, r, a)), !0
                    }
                    return !1
                }(a, e, t, n, r)) r.stopPropagation();
            else if (dK(e, r), 4 & t && -1 < dQ.indexOf(e)) {
                for (; null !== a;) {
                    var i = e4(a);
                    if (null !== i) switch (i.tag) {
                        case 3:
                            if ((i = i.stateNode).current.memoizedState.isDehydrated) {
                                var o = eL(i.pendingLanes);
                                if (0 !== o) {
                                    var l = i;
                                    for (l.pendingLanes |= 2, l.entangledLanes |= 2; o;) {
                                        var s = 1 << 31 - ex(o);
                                        l.entanglements[1] |= s, o &= ~s
                                    }
                                    u$(i), 0 == (6 & sx) && (sV = ey() + 500, uG(0, !1))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            null !== (l = rg(i, 2)) && un(l, i, 2), uo(), dR(i, 2)
                    }
                    if (null === (i = dB(r)) && u6(e, t, r, dF, n), i === a) break;
                    a = i
                }
                null !== a && r.stopPropagation()
            } else u6(e, t, r, null, n)
        }
    }

    function dB(e) {
        return dj(e = tL(e))
    }
    var dF = null;

    function dj(e) {
        if (dF = null, null !== (e = e3(e))) {
            var t = c(e);
            if (null === t) e = null;
            else {
                var n = t.tag;
                if (13 === n) {
                    if (null !== (e = d(t))) return e;
                    e = null
                } else if (31 === n) {
                    if (null !== (e = f(t))) return e;
                    e = null
                } else if (3 === n) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                    e = null
                } else t !== e && (e = null)
            }
        }
        return dF = e, null
    }

    function d$(e) {
        switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "fullscreenerror":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "resize":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (eb()) {
                    case e_:
                        return 2;
                    case eS:
                        return 8;
                    case eE:
                    case ew:
                        return 32;
                    case eT:
                        return 0x10000000;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var dG = !1,
        dH = null,
        dq = null,
        dW = null,
        dY = new Map,
        dV = new Map,
        dJ = [],
        dQ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function dK(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                dH = null;
                break;
            case "dragenter":
            case "dragleave":
                dq = null;
                break;
            case "mouseover":
            case "mouseout":
                dW = null;
                break;
            case "pointerover":
            case "pointerout":
                dY.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                dV.delete(t.pointerId)
        }
    }

    function dX(e, t, n, r, a, i) {
        return null === e || e.nativeEvent !== i ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: i,
            targetContainers: [a]
        }, null !== t && null !== (t = e4(t)) && dL(t)) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a)), e
    }

    function dZ(e) {
        var t = e3(e.target);
        if (null !== t) {
            var n = c(t);
            if (null !== n) {
                if (13 === (t = n.tag)) {
                    if (null !== (t = d(n))) {
                        e.blockedOn = t, eq(e.priority, function() {
                            dA(n)
                        });
                        return
                    }
                } else if (31 === t) {
                    if (null !== (t = f(n))) {
                        e.blockedOn = t, eq(e.priority, function() {
                            dA(n)
                        });
                        return
                    }
                } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }

    function d0(e) {
        if (null !== e.blockedOn) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var n = dB(e.nativeEvent);
            if (null !== n) return null !== (t = e4(n)) && dL(t), e.blockedOn = n, !1;
            var r = new(n = e.nativeEvent).constructor(n.type, n);
            tR = r, n.target.dispatchEvent(r), tR = null, t.shift()
        }
        return !0
    }

    function d1(e, t, n) {
        d0(e) && n.delete(t)
    }

    function d2() {
        dG = !1, null !== dH && d0(dH) && (dH = null), null !== dq && d0(dq) && (dq = null), null !== dW && d0(dW) && (dW = null), dY.forEach(d1), dV.forEach(d1)
    }

    function d3(e, t) {
        e.blockedOn === t && (e.blockedOn = null, dG || (dG = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, d2)))
    }
    var d4 = null;

    function d5(e) {
        d4 !== e && (d4 = e, i.unstable_scheduleCallback(i.unstable_NormalPriority, function() {
            d4 === e && (d4 = null);
            for (var t = 0; t < e.length; t += 3) {
                var n = e[t],
                    r = e[t + 1],
                    a = e[t + 2];
                if ("function" != typeof r)
                    if (null === dj(r || n)) continue;
                    else break;
                var i = e4(n);
                null !== i && (e.splice(t, 3), t -= 3, om(i, {
                    pending: !0,
                    data: a,
                    method: n.method,
                    action: r
                }, r, a))
            }
        }))
    }

    function d8(e) {
        function t(t) {
            return d3(t, e)
        }
        null !== dH && d3(dH, e), null !== dq && d3(dq, e), null !== dW && d3(dW, e), dY.forEach(t), dV.forEach(t);
        for (var n = 0; n < dJ.length; n++) {
            var r = dJ[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
        for (; 0 < dJ.length && null === (n = dJ[0]).blockedOn;) dZ(n), null === n.blockedOn && dJ.shift();
        if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
            for (r = 0; r < n.length; r += 3) {
                var a = n[r],
                    i = n[r + 1],
                    o = a[eV] || null;
                if ("function" == typeof i) o || d5(n);
                else if (o) {
                    var l = null;
                    if (i && i.hasAttribute("formAction")) {
                        if (a = i, o = i[eV] || null) l = o.formAction;
                        else if (null !== dj(a)) continue
                    } else l = o.action;
                    "function" == typeof l ? n[r + 1] = l : (n.splice(r, 3), r -= 3), d5(n)
                }
            }
    }

    function d6() {
        function e(e) {
            e.canIntercept && "react-transition" === e.info && e.intercept({
                handler: function() {
                    return new Promise(function(e) {
                        return a = e
                    })
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }

        function t() {
            null !== a && (a(), a = null), r || setTimeout(n, 20)
        }

        function n() {
            if (!r && !navigation.transition) {
                var e = navigation.currentEntry;
                e && null != e.url && navigation.navigate(e.url, {
                    state: e.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if ("object" == typeof navigation) {
            var r = !1,
                a = null;
            return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100),
                function() {
                    r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), null !== a && (a(), a = null)
                }
        }
    }

    function d9(e) {
        this._internalRoot = e
    }

    function d7(e) {
        this._internalRoot = e
    }
    d7.prototype.render = d9.prototype.render = function(e) {
        var t = this._internalRoot;
        if (null === t) throw Error(s(409));
        dO(t.current, s7(), e, t, null, null)
    }, d7.prototype.unmount = d9.prototype.unmount = function() {
        var e = this._internalRoot;
        if (null !== e) {
            this._internalRoot = null;
            var t = e.containerInfo;
            dO(e.current, 2, null, e, null, null), uo(), t[eJ] = null
        }
    }, d7.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = eH();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var n = 0; n < dJ.length && 0 !== t && t < dJ[n].priority; n++);
            dJ.splice(n, 0, e), 0 === n && dZ(e)
        }
    };
    var fe = o.version;
    if ("19.3.0-canary-cbb046ab-20260731" !== fe) throw Error(s(527, fe, "19.3.0-canary-cbb046ab-20260731"));
    if (V.findDOMNode = function(e) {
            var t = e._reactInternals;
            if (void 0 === t) {
                if ("function" == typeof e.render) throw Error(s(188));
                throw Error(s(268, e = Object.keys(e).join(",")))
            }
            return null === (e = null !== (e = function(e) {
                var t = e.alternate;
                if (!t) {
                    if (null === (t = c(e))) throw Error(s(188));
                    return t !== e ? null : e
                }
                for (var n = e, r = t;;) {
                    var a = n.return;
                    if (null === a) break;
                    var i = a.alternate;
                    if (null === i) {
                        if (null !== (r = a.return)) {
                            n = r;
                            continue
                        }
                        break
                    }
                    if (a.child === i.child) {
                        for (i = a.child; i;) {
                            if (i === n) return p(a), e;
                            if (i === r) return p(a), t;
                            i = i.sibling
                        }
                        throw Error(s(188))
                    }
                    if (n.return !== r.return) n = a, r = i;
                    else {
                        for (var o = !1, l = a.child; l;) {
                            if (l === n) {
                                o = !0, n = a, r = i;
                                break
                            }
                            if (l === r) {
                                o = !0, r = a, n = i;
                                break
                            }
                            l = l.sibling
                        }
                        if (!o) {
                            for (l = i.child; l;) {
                                if (l === n) {
                                    o = !0, n = i, r = a;
                                    break
                                }
                                if (l === r) {
                                    o = !0, r = i, n = a;
                                    break
                                }
                                l = l.sibling
                            }
                            if (!o) throw Error(s(189))
                        }
                    }
                    if (n.alternate !== r) throw Error(s(190))
                }
                if (3 !== n.tag) throw Error(s(188));
                return n.stateNode.current === n ? e : t
            }(t)) ? function e(t) {
                var n = t.tag;
                if (5 === n || 26 === n || 27 === n || 6 === n) return t;
                for (t = t.child; null !== t;) {
                    if (null !== (n = e(t))) return n;
                    t = t.sibling
                }
                return null
            }(e) : null) ? null : e.stateNode
        }, "u" > typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var ft = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ft.isDisabled && ft.supportsFiber) try {
            ek = ft.inject({
                bundleType: 0,
                version: "19.3.0-canary-cbb046ab-20260731",
                rendererPackageName: "react-dom",
                currentDispatcherRef: Y,
                reconcilerVersion: "19.3.0-canary-cbb046ab-20260731"
            }), eN = ft
        } catch (e) {}
    }
    n.createRoot = function(e, t) {
        if (!u(e)) throw Error(s(299));
        var n = !1,
            r = "",
            a = oU,
            i = oz,
            o = oB;
        return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onUncaughtError && (a = t.onUncaughtError), void 0 !== t.onCaughtError && (i = t.onCaughtError), void 0 !== t.onRecoverableError && (o = t.onRecoverableError)), t = dC(e, 1, !1, null, null, n, r, null, a, i, o, d6), e[eJ] = t.current, u5(e), new d9(t)
    }, n.hydrateRoot = function(e, t, n) {
        if (!u(e)) throw Error(s(299));
        var r, a = !1,
            i = "",
            o = oU,
            l = oz,
            c = oB,
            d = null;
        return null != n && (!0 === n.unstable_strictMode && (a = !0), void 0 !== n.identifierPrefix && (i = n.identifierPrefix), void 0 !== n.onUncaughtError && (o = n.onUncaughtError), void 0 !== n.onCaughtError && (l = n.onCaughtError), void 0 !== n.onRecoverableError && (c = n.onRecoverableError), void 0 !== n.formState && (d = n.formState)), (t = dC(e, 1, !0, t, null != n ? n : null, a, i, d, o, l, c, d6)).context = (r = null, rb), n = t.current, (i = aY(a = e$(a = s7()))).callback = null, aV(n, i, a), n = a, t.current.lanes = n, ez(t, n), u$(t), e[eJ] = t.current, u5(e), new d7(t)
    }, n.version = "19.3.0-canary-cbb046ab-20260731"
}, 943352, (e, t, n) => {
    "use strict";
    ! function e() {
        if ("u" > typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
        } catch (e) {
            console.error(e)
        }
    }(), t.exports = e.r(373774)
}, 730726, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = {
        getObjectClassLabel: function() {
            return i
        },
        isPlainObject: function() {
            return o
        }
    };
    for (var a in r) Object.defineProperty(n, a, {
        enumerable: !0,
        get: r[a]
    });

    function i(e) {
        return Object.prototype.toString.call(e)
    }

    function o(e) {
        if ("[object Object]" !== i(e)) return !1;
        let t = Object.getPrototypeOf(e);
        return null === t || t.hasOwnProperty("isPrototypeOf")
    }
}, 101319, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = {
        default: function() {
            return o
        },
        getProperError: function() {
            return l
        }
    };
    for (var a in r) Object.defineProperty(n, a, {
        enumerable: !0,
        get: r[a]
    });
    let i = e.r(730726);

    function o(e) {
        return "object" == typeof e && null !== e && "name" in e && "message" in e
    }

    function l(e) {
        let t;
        return o(e) ? e : Object.defineProperty(Error((0, i.isPlainObject)(e) ? (t = new WeakSet, JSON.stringify(e, (e, n) => {
            if ("object" == typeof n && null !== n) {
                if (t.has(n)) return "[Circular]";
                t.add(n)
            }
            return n
        })) : e + ""), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        })
    }
}, 844142, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "reportGlobalError", {
        enumerable: !0,
        get: function() {
            return r
        }
    });
    let r = "function" == typeof reportError ? reportError : e => {
        globalThis.console.error(e)
    };
    ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }), Object.assign(n.default, n), t.exports = n.default)
}, 537883, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = {
        isRecoverableError: function() {
            return c
        },
        onRecoverableError: function() {
            return d
        }
    };
    for (var a in r) Object.defineProperty(n, a, {
        enumerable: !0,
        get: r[a]
    });
    let i = e.r(836437),
        o = e.r(682413),
        l = i._(e.r(101319)),
        s = e.r(844142),
        u = new WeakSet;

    function c(e) {
        return u.has(e)
    }
    let d = e => {
        let t = (0, l.default)(e) && "cause" in e ? e.cause : e;
        (0, o.isBailoutToCSRError)(t) || (0, s.reportGlobalError)(t)
    };
    ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }), Object.assign(n.default, n), t.exports = n.default)
}]);

//# debugId=2254146a-02cd-a924-fd51-70ed72cdc992