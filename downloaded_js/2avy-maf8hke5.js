;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "40c1491d-c7e4-8534-6eb5-cddbfb68fc60")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, [427075, e => {
            let t, n, r, i, a, o, s, l, u, c, d, f, p, h, m, g, v, b, y, w, _, S, E, k, T, x, C, O, P, N, A, L, R, I, M, D, z, U;
            var j, F, $, B, H, q, V, W, Q, G, K, X, Y, J, Z, ee, et, en, er, ei, ea, eo, es, el, eu = e.i(353508),
                ec = e.i(432764),
                ed = e.i(414542),
                ef = e.i(920618);

            function ep(e, t, n = [t], r = "npm") {
                let i = (e._metadata = e._metadata || {}).sdk = e._metadata.sdk || {};
                i.name || (i.name = `sentry.javascript.${t}`, i.packages = n.map(e => ({
                    name: `${r}:@sentry/${e}`,
                    version: ef.f
                })), i.version = ef.f)
            }
            var eh = e.i(309578),
                em = e.i(932881),
                eg = e.i(997629);
            let ev = [];

            function eb(e, t) {
                for (let n of t) n?.afterAllSetup && n.afterAllSetup(e)
            }

            function ey(e, t, n) {
                if (n[t.name]) {
                    eg.f && ec.h.log(`Integration skipped because it was already installed: ${t.name}`);
                    return
                }
                if (n[t.name] = t, ev.includes(t.name) || "function" != typeof t.setupOnce || (t.setupOnce(), ev.push(t.name)), t.setup && "function" == typeof t.setup && t.setup(e), "function" == typeof t.preprocessEvent) {
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
                }), eg.f && ec.h.log(`Integration installed: ${t.name}`)
            }

            function ew(e) {
                let t = [];
                e.message && t.push(e.message);
                try {
                    let n = e.exception.values[e.exception.values.length - 1];
                    n?.value && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`))
                } catch {}
                return t
            }
            var e_ = e.i(530598),
                eS = e.i(39561);
            let eE = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/, /can't redefine non-configurable property "solana"/, /vv\(\)\.getRestrictions is not a function/, /Can't find variable: _AutofillCallbackHandler/, /Object Not Found Matching Id:\d+, MethodName:simulateEvent/, /Java exception was raised during method invocation$/, /Java object is gone$/];

            function ek(e = {}, t = {}) {
                return {
                    allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
                    denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
                    ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...e.disableErrorDefaults ? [] : eE],
                    ignoreTransactions: [...e.ignoreTransactions || [], ...t.ignoreTransactions || []]
                }
            }

            function eT(e) {
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
                    return eg.f && ec.h.error(`Cannot extract url for event ${(0,e_.N)(e)}`), null
                }
            }
            var ex = e.i(419369);
            let eC = new WeakMap;
            var eO = e.i(551364),
                eP = e.i(511091),
                eN = e.i(319074),
                eA = e.i(764580);

            function eL(e, t) {
                let n = (0, em.l)(),
                    r = (0, em.V)();
                if (!n) return;
                let {
                    beforeBreadcrumb: i = null,
                    maxBreadcrumbs: a = 100
                } = n.getOptions();
                if (a <= 0) return;
                let o = {
                        timestamp: (0, eA.i)(),
                        ...e
                    },
                    s = i ? (0, eN.E)(eg.f ? "The `beforeBreadcrumb` callback threw an error, dropping the breadcrumb:" : "", () => (0, ec.D)(() => i(o, t)), () => null) : o;
                null !== s && (n.emit && n.emit("beforeAddBreadcrumb", s, t), r.addBreadcrumb(s, a))
            }
            var eR = e.i(267269);
            let eI = {},
                eM = {};

            function eD(e, t) {
                return eI[e] = eI[e] || [], eI[e].push(t), () => {
                    let n = eI[e];
                    if (n) {
                        let e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
                    }
                }
            }

            function ez(e, t) {
                if (!eM[e]) {
                    eM[e] = !0;
                    try {
                        t()
                    } catch (t) {
                        eg.f && ec.h.error(`Error while instrumenting ${e}`, t)
                    }
                }
            }

            function eU(e, t) {
                let n = e && eI[e];
                if (n)
                    for (let r of n) try {
                        r(t)
                    } catch (t) {
                        eg.f && ec.h.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${(0,eR.n)(r)}
Error:`, t)
                    }
            }
            let ej = new Set([]),
                eF = new Set;

            function e$() {
                "console" in ed.f && ec.u.forEach(function(e) {
                    !eF.has(e) && e in ed.f.console && (eF.add(e), (0, ex.Q)(ed.f.console, e, function(t) {
                        return ec.r[e] = t,
                            function(...t) {
                                let n = t[0],
                                    r = ec.r[e],
                                    i = ej.size && "string" == typeof n && (0, eS.$)(n, ej);
                                i || eU("console", {
                                    args: t,
                                    level: e
                                }), (!i || eg.f && ec.h.isEnabled()) && r?.apply(ed.f.console, t)
                            }
                    }))
                })
            }

            function eB(e) {
                return "util" in ed.f && "function" == typeof ed.f.util.format ? ed.f.util.format(...e) : (0, eS.c)(e, " ")
            }

            function eH(e, t) {
                let n = (0, eR.s)(e),
                    r = (0, eR.s)(t);
                if (!n || !r) return !n && !r;
                if (r.length !== n.length) return !1;
                for (let e = 0; e < r.length; e++) {
                    let t = r[e],
                        i = n[e];
                    if (t.filename !== i.filename || t.lineno !== i.lineno || t.colno !== i.colno || t.function !== i.function) return !1
                }
                return !0
            }

            function eq(e, t) {
                let n = e.fingerprint,
                    r = t.fingerprint;
                if (!n || !r) return !n && !r;
                try {
                    return n.join("") === r.join("")
                } catch {
                    return !1
                }
            }

            function eV(e) {
                return e.exception?.values?.[0]
            }
            var eW = e.i(390740),
                eQ = e.i(989542),
                eG = e.i(762783),
                eK = e.i(597968),
                eX = e.i(396450),
                eY = e.i(445972),
                eJ = e.i(993448),
                eZ = e.i(134454),
                e0 = e.i(646162),
                e1 = e.i(785509);

            function e2() {
                let e;
                return "u" > typeof window && (!(!("u" > typeof __SENTRY_BROWSER_BUNDLE__ && __SENTRY_BROWSER_BUNDLE__) && "[object process]" === Object.prototype.toString.call(void 0 !== eu.default ? eu.default : 0)) || (e = ed.f.process, e?.type === "renderer"))
            }

            function e3(e, t) {
                var n, r, i, a, o;
                let s, l, u = t ?? (o = e, e4().get(o)) ?? [];
                if (0 === u.length) return;
                let c = e.getOptions(),
                    d = (n = c._metadata, r = c.tunnel, i = e.getDsn(), a = e.getDataCollectionOptions().userInfo, s = {}, n?.sdk && (s.sdk = {
                        name: n.sdk.name,
                        version: n.sdk.version
                    }), r && i && (s.dsn = (0, eQ._)(i)), (0, eK.H)(s, [(l = a ? "auto" : "never", [{
                        type: "log",
                        item_count: u.length,
                        content_type: "application/vnd.sentry.items.log+json"
                    }, {
                        version: 2,
                        ...e2() && {
                            ingest_settings: {
                                infer_ip: l,
                                infer_user_agent: l
                            }
                        },
                        items: u
                    }])]));
                e4().set(e, []), e.emit("flushLogs"), e.sendEnvelope(d)
            }

            function e4() {
                return (0, eJ.u)("clientToLogBufferMap", () => new WeakMap)
            }

            function e5(e, t) {
                var n, r, i, a, o;
                let s, l, u = t ?? (o = e, e6().get(o)) ?? [];
                if (0 === u.length) return;
                let c = e.getOptions(),
                    d = (n = c._metadata, r = c.tunnel, i = e.getDsn(), a = e.getDataCollectionOptions().userInfo, s = {}, n?.sdk && (s.sdk = {
                        name: n.sdk.name,
                        version: n.sdk.version
                    }), r && i && (s.dsn = (0, eQ._)(i)), (0, eK.H)(s, [(l = a ? "auto" : "never", [{
                        type: "trace_metric",
                        item_count: u.length,
                        content_type: "application/vnd.sentry.items.trace-metric+json"
                    }, {
                        version: 2,
                        ...e2() && {
                            ingest_settings: {
                                infer_ip: l,
                                infer_user_agent: l
                            }
                        },
                        items: u
                    }])]));
                e6().set(e, []), e.emit("flushMetrics"), e.sendEnvelope(d)
            }

            function e6() {
                return (0, eJ.u)("clientToMetricBufferMap", () => new WeakMap)
            }
            var e8 = e.i(96342);

            function e9(e) {
                return !!e && "function" == typeof e && "_static" in e && !!e._static
            }
            let e7 = !1;

            function te(e, t) {
                let n = (0, eN.E)(eg.f ? "The `beforeSendSpan` callback threw an error, sending the span unmodified:" : "", () => t(e), () => e);
                return n || (e7 || ((0, ec.D)(() => {
                    console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.")
                }), e7 = !0), e)
            }

            function tt(e, t) {
                let n = t.getDataCollectionOptions().userInfo ? "auto" : "never";
                return [{
                    type: "span",
                    item_count: e.length,
                    content_type: "application/vnd.sentry.items.span.v2+json"
                }, {
                    version: 2,
                    ingest_settings: e2() ? {
                        infer_ip: n,
                        infer_user_agent: n
                    } : void 0,
                    items: e
                }]
            }

            function tn(e) {
                return "stream" === e.getOptions().traceLifecycle
            }

            function tr(e) {
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
                return (0, eP.g)(t)
            }
            var ti = e.i(981317);

            function ta(e) {
                return "object" == typeof e && "function" == typeof e.unref && e.unref(), e
            }
            let to = Symbol.for("SentryBufferFullError");

            function ts(e = 100) {
                let t = new Set;
                return {
                    get $() {
                        return Array.from(t)
                    },
                    add: function(n) {
                        if (!(t.size < e)) return (0, ti.K)(to);
                        let r = n();
                        return t.add(r), r.then(() => {
                            t.delete(r)
                        }, () => {
                            t.delete(r)
                        }), r
                    },
                    drain: function(e) {
                        if (!t.size) return (0, ti.Y)(!0);
                        let n = Promise.allSettled(Array.from(t)).then(() => !0);
                        return e ? Promise.race([n, new Promise(t => ta(setTimeout(() => t(!1), e)))]) : n
                    }
                }
            }
            var tl = e.i(636933),
                tu = e.i(820899),
                tc = e.i(151348);

            function td(e) {
                ec.h.log(`Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`)
            }

            function tf(e, t) {
                if (!t?.length) return !1;
                for (let r of t) {
                    var n;
                    if ("string" == typeof(n = r) || n instanceof RegExp) {
                        if (e.description && (0, eS.w)(e.description, r)) return eg.f && td(e), !0;
                        continue
                    }
                    let t = !!r.attributes && Object.keys(r.attributes).length > 0;
                    if (!r.name && !r.op && !t) continue;
                    let i = !r.name || e.description && (0, eS.w)(e.description, r.name),
                        a = !r.op || e.op && (0, eS.w)(e.op, r.op),
                        o = !r.attributes || Object.entries(r.attributes).every(([t, n]) => (function(e, t) {
                            return "string" == typeof e && ("string" == typeof t || t instanceof RegExp) ? (0, eS.w)(e, t) : Array.isArray(e) && Array.isArray(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e === t
                        })(e.attributes?.[t], n));
                    if (i && a && o) return eg.f && td(e), !0
                }
                return !1
            }
            let tp = {
                    request: !0,
                    response: !0
                },
                th = ["incomingRequest", "outgoingRequest", "incomingResponse", "outgoingResponse"],
                tm = !0,
                tg = !0,
                tv = !0,
                tb = !0,
                ty = "Not capturing exception because it's already been captured.",
                tw = "Discarded session because of missing or non-string release",
                t_ = Symbol.for("SentryInternalError"),
                tS = Symbol.for("SentryDoNotSendEventError");

            function tE(e) {
                return {
                    message: e,
                    [t_]: !0
                }
            }

            function tk(e) {
                return {
                    message: e,
                    [tS]: !0
                }
            }

            function tT(e) {
                return (0, eZ.t)(e) && t_ in e
            }

            function tx(e) {
                return (0, eZ.t)(e) && tS in e
            }

            function tC(e, t, n, r, i) {
                let a, o = 0,
                    s = !1;
                e.on(n, () => {
                    o = 0, clearTimeout(a), s = !1
                }), e.on(t, t => {
                    if ((o += r(t)) >= 8e5) i(e);
                    else if (!s) {
                        let t = e.getOptions()._flushInterval ?? 5e3;
                        t > 0 && (s = !0, a = ta(setTimeout(() => {
                            i(e)
                        }, t)))
                    }
                }), e.on("flush", () => {
                    i(e)
                })
            }
            class tO {
                constructor(e) {
                    let t;
                    this._options = {
                        attachStacktrace: !0,
                        ...e,
                        traceLifecycle: "static" === e.traceLifecycle ? "static" : "stream"
                    }, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], this._promiseBuffer = ts(e.transportOptions?.bufferSize ?? 64), this._dataCollection = {
                        userInfo: (t = e.dataCollection ?? {}).userInfo ?? !0,
                        cookies: t.cookies ?? !0,
                        httpHeaders: function(e) {
                            return void 0 === e ? {
                                ...tp
                            } : "boolean" == typeof e || "allow" in e || "deny" in e ? {
                                request: e,
                                response: e
                            } : {
                                request: e.request ?? tp.request,
                                response: e.response ?? tp.response
                            }
                        }(t.httpHeaders),
                        httpBodies: t.httpBodies ?? th,
                        urlQueryParams: t.urlQueryParams ?? !0,
                        graphQL: {
                            document: t.graphQL?.document ?? tm,
                            variables: t.graphQL?.variables ?? tg
                        },
                        genAI: {
                            inputs: t.genAI?.inputs ?? tv,
                            outputs: t.genAI?.outputs ?? tb
                        },
                        databaseQueryData: t.databaseQueryData ?? !0,
                        queues: t.queues ?? !0,
                        stackFrameVariables: t.stackFrameVariables ?? !0,
                        frameContextLines: t.frameContextLines ?? 5
                    }, this._unhandledSessionStatus = "crashed", e.dsn ? this._dsn = (0, eQ.p)(e.dsn) : eg.f && ec.h.warn("No DSN provided, client will not send events.");
                    let {
                        beforeSendSpan: n,
                        traceLifecycle: r
                    } = this._options;
                    if (eg.f && n && e9(n) !== ("static" === r) && (0, ec.D)(() => {
                            console.warn(`Ignoring \`beforeSendSpan\`: ${"static"===r?"wrap it with":"remove"} \`Sentry.withStaticSpan\` to use it with \`traceLifecycle: "${r}"\`.`)
                        }), this._dsn) {
                        var i, a, o;
                        let t, n, r, s = (i = this._dsn, a = e.tunnel, o = e._metadata ? e._metadata.sdk : void 0, a || `${t=i.protocol?`${i.protocol}:`:"",n=i.port?`:${i.port}`:"",`${t}//${i.host}${n}${i.path?`/${i.path}`:""}/api/`}${i.projectId}/envelope/?${r={sentry_version:"7"},i.publicKey&&(r.sentry_key=i.publicKey),o&&(r.sentry_client=`
                            $ {
                                o.name
                            }
                            /${o.version}`),new URLSearchParams(r).toString()}`);this._transport=e.transport({tunnel:this._options.tunnel,recordDroppedEvent:this.recordDroppedEvent.bind(this),...e.transportOptions,url:s})}tC(this,"afterCaptureLog","flushLogs",tL,e3),tC(this,"afterCaptureMetric","flushMetrics",tA,e5)}captureException(e,t,n){let r=(0,e_.c)();if((0,e_.n)(e))return eg.f&&ec.h.log(ty),r;let i={event_id:r,...t};return this._process(()=>this.eventFromException(e,i).then(e=>this._captureEvent(e,i,n)).then(e=>e),"error"),i.event_id}captureMessage(e,t,n,r){let i={event_id:(0,e_.c)(),...n},a=(0,eZ.S)(e)?e:String(e),o=(0,eZ.n)(e),s=o?this.eventFromMessage(a,t,i):this.eventFromException(e,i);return this._process(()=>s.then(e=>this._captureEvent(e,i,r)),o?"unknown":"error"),i.event_id}captureEvent(e,t,n){let r=(0,e_.c)();if(t?.originalException&&(0,e_.n)(t.originalException))return eg.f&&ec.h.log(ty),r;let i={event_id:r,...t},a=e.sdkProcessingMetadata||{},o=a.capturedSpanScope,s=a.capturedSpanIsolationScope,l=(0,eK.p)(e.type);return this._process(()=>this._captureEvent(e,i,o||n,s),l),i.event_id}captureSession(e){this.sendSession(e),(0,e8.d)(e,{init:!1})}getDsn(){return this._dsn}getOptions(){return this._options}getDataCollectionOptions(){return this._dataCollection}getSdkMetadata(){return this._options._metadata}getTransport(){return this._transport}async flush(e){let t=this._transport;if(this.emit("flush"),!t)return!0;let n=await this._isClientDoneProcessing(e),r=await t.flush(e);return n&&r}async close(e){let t=await this.flush(e);return this.getOptions().enabled=!1,this.emit("close"),t}getEventProcessors(){return this._eventProcessors}addEventProcessor(e){this._eventProcessors.push(e)}init(){if(this._isEnabled()||this._options.integrations.some(({name:e})=>e.startsWith("Spotlight"))){var e;this._setupIntegrations(),"stream"===(e=this._options).traceLifecycle&&(e.beforeSendTransaction||e.ignoreTransactions?.length)&&(0,ec.D)(()=>{console.warn("[Sentry] `beforeSendTransaction` and `ignoreTransactions` are ignored with `traceLifecycle: 'stream'` (enabled by default). Use `beforeSendSpan` and `ignoreSpans` instead, or set `traceLifecycle: 'static'`.")})}}getIntegrationByName(e){return this._integrations[e]}getIntegrationNames(){return Object.keys(this._integrations)}addIntegration(e){let t=this._integrations[e.name];!t&&e.beforeSetup&&e.beforeSetup(this),ey(this,e,this._integrations),t||eb(this,[e])}sendEvent(e,t={}){var n,r,i;let a,o,s,l;this.emit("beforeSendEvent",e,t);let u=function(e,t){if("transaction"!==e.type||!e.spans?.length||!e.sdkProcessingMetadata?.hasGenAiSpans||tn(t))return;let n=[],r=[];for(let t of e.spans)t.op?.startsWith("gen_ai.")?n.push(tr(t)):r.push(t);if(0!==n.length)return e.spans=r,tt(n,t)}(e,this),c=(n=this._dsn,r=this._options._metadata,i=this._options.tunnel,a=(0,eK.X)(r),o=e.type&&"replay_event"!==e.type?e.type:"event",!function(e,t){if(!t)return;let n=e.sdk||{};e.sdk={...n,name:n.name||t.name,version:n.version||t.version,integrations:[...e.sdk?.integrations||[],...t.integrations||[]],packages:[...e.sdk?.packages||[],...t.packages||[]],settings:e.sdk?.settings||t.settings?{...e.sdk?.settings,...t.settings}:void 0}}(e,r?.sdk),s=(0,eK.w)(e,a,i,n),delete e.sdkProcessingMetadata,l=[{type:o},e],(0,eK.H)(s,[l]));for(let e of t.attachments||[])c=(0,eK.S)(c,(0,eK.i)(e));u&&(c=(0,eK.S)(c,u)),this.sendEnvelope(c).then(t=>this.emit("afterSendEvent",e,t))}sendSession(e){var t,n,r;let i,a,o,{release:s,environment:l=eG.f}=this._options;if("aggregates"in e){let t=e.attrs||{};if(!t.release&&!s){eg.f&&ec.h.warn(tw);return}t.release=t.release||s,t.environment=t.environment||l,e.attrs=t}else{if(!e.release&&!s){eg.f&&ec.h.warn(tw);return}e.release=e.release||s,e.environment=e.environment||l}this.emit("beforeSendSession",e);let u=(t=this._dsn,n=this._options._metadata,r=this._options.tunnel,i=(0,eK.X)(n),a={sent_at:new Date((0,eX.D)()).toISOString(),...i&&{sdk:i},...!!r&&t&&{dsn:(0,eQ._)(t)}},o="aggregates"in e?[{type:"sessions"},e]:[{type:"session"},e.toJSON()],(0,eK.H)(a,[o]));this.sendEnvelope(u)}recordDroppedEvent(e,t,n=1){if(this._options.sendClientReports){let r=`${e}:${t}`;eg.f&&ec.h.log(`Recording outcome: "${r}"${n>1?` (${n} times)`:""}`),this._outcomes[r]=(this._outcomes[r]||0)+n}}on(e,t){let n=this._hooks[e]=this._hooks[e]||new Set,r=(...e)=>t(...e);return n.add(r),()=>{n.delete(r)}}emit(e,...t){let n=this._hooks[e];n&&n.forEach(e=>e(...t))}async sendEnvelope(e){if(this.emit("beforeEnvelope",e),this._isEnabled()&&this._transport)try{let t=await this._transport.send(e);return this.emit("afterEnvelope",e),t}catch(e){return eg.f&&ec.h.error("Error while sending envelope:",e),{}}return eg.f&&ec.h.error("Transport disabled"),{}}registerCleanup(e){}dispose(){}_setupIntegrations(){var e;let t,{integrations:n}=this._options;this._integrations=(e=this,t={},n.forEach(t=>{t?.beforeSetup&&t.beforeSetup(e)}),n.forEach(n=>{n&&ey(e,n,t)}),t),eb(this,n)}_updateSessionFromEvent(e,t){let n="fatal"===t.level,r=!1,i=t.exception?.values;if(i){for(let e of(r=!0,n=!1,i))if(e.mechanism?.handled===!1){n=!0;break}}let a="ok"===e.status;(a&&0===e.errors||a&&n)&&((0,e8.d)(e,{...n&&{status:this._unhandledSessionStatus},errors:e.errors||Number(r||n)}),this.captureSession(e))}async _isClientDoneProcessing(e){let t=0;for(;!e||t<e;){if(await new Promise(e=>setTimeout(e,1)),!this._numProcessing)return!0;t++}return!1}_isEnabled(){return!1!==this.getOptions().enabled&&void 0!==this._transport}_prepareEvent(e,t,n,r){let i=this.getOptions(),a=this.getIntegrationNames();return!t.integrations&&a.length&&(t.integrations=a),this.emit("preprocessEvent",e,t),e.type||r.setLastEventId(e.event_id||t.event_id),(0,tc.H)(i,e,t,n,this,r).then(e=>(null===e||(this.emit("postprocessEvent",e,t),e.contexts={trace:{...e.contexts?.trace,...(0,em.i)(n)},...e.contexts},e.sdkProcessingMetadata={dynamicSamplingContext:(0,e1.H)(this,n),...e.sdkProcessingMetadata}),e))}_captureEvent(e,t={},n=(0,em.d)(),r=(0,em.V)()){return eg.f&&tP(e)&&ec.h.log(`Captured error event \`${ew(e)[0]||"<unknown>"}\``),this._processEvent(e,t,n,r).then(e=>e.event_id,e=>{eg.f&&(tx(e)?ec.h.log(e.message):tT(e)?ec.h.warn(e.message):ec.h.warn(e))})}_processEvent(e,t,n,r){let i=this.getOptions(),{sampleRate:a}=i,o=tN(e),s=tP(e),l=e.type||"error",u=`before send for type \`${l}\``,c="before_send",d=void 0===a?void 0:(0,tu.f)(a),f=(0,eK.p)(e.type);return this._prepareEvent(e,t,n,r).then(e=>{if(null===e)throw tk("An event processor returned `null`, will not send event.");return t.data?.__sentry__===!0?e:function(e,t){let n=`${t} must return \`null\` or a valid event.`;if((0,eZ.l)(e))return e.then(e=>{if(!(0,eZ.d)(e)&&null!==e)throw tE(n);return e},e=>{throw tE(`${t} rejected with ${e}`)});if(!(0,eZ.d)(e)&&null!==e)throw tE(n);return e}(function(e,t,n,r,i){let{beforeSend:a,ignoreSpans:o,beforeSendTransaction:s}=t,l=e9(t.beforeSendSpan)&&t.beforeSendSpan,u=n;if(tP(u)&&a){let e=u;return(0,eN.E)(eg.f?"The `beforeSend` callback threw an error, dropping the event:":"",()=>a(e,r),()=>(i(),null))}if(tN(u)){if(l||o){let t=function(e){let{trace_id:t,parent_span_id:n,span_id:r,status:i,origin:a,data:o,op:s}=e.contexts?.trace??{};return{data:o??{},description:e.transaction,op:s,parent_span_id:n,span_id:r??"",start_timestamp:e.start_timestamp??0,status:i??"ok",timestamp:e.timestamp,trace_id:t??"",origin:a,profile_id:o?.[eO.q],exclusive_time:o?.[eO._],measurements:e.measurements,is_segment:!0}}(u);if(o?.length&&tf({description:t.description,op:t.op,attributes:t.data},o))return null;if(l){let e=te(t,l);u=(0,tl.f)(n,{type:"transaction",timestamp:e.timestamp,start_timestamp:e.start_timestamp,transaction:e.description,contexts:{trace:{trace_id:e.trace_id,span_id:e.span_id,parent_span_id:e.parent_span_id,op:e.op,status:e.status,origin:e.origin,data:{...e.data,...e.profile_id&&{[eO.q]:e.profile_id},...e.exclusive_time&&{[eO._]:e.exclusive_time}}}},measurements:e.measurements})}if(u.spans){let t=[],n=u.spans;for(let e of n){if(o?.length&&tf({description:e.description,op:e.op,attributes:e.data},o)){!function(e,t){let n=t.parent_span_id,r=t.span_id;if(n)for(let t of e)t.parent_span_id===r&&(t.parent_span_id=n)}(n,e);continue}l?t.push(te(e,l)):t.push(e)}let r=u.spans.length-t.length;r&&e.recordDroppedEvent("before_send","span",r),u.spans=t}}if(s){if(u.spans){let e=u.spans.length;u.sdkProcessingMetadata={...n.sdkProcessingMetadata,spanCountBeforeProcessing:e}}return(0,eN.E)(eg.f?"The `beforeSendTransaction` callback threw an error, dropping the event:":"",()=>s(u,r),()=>(i(),null))}}return u}(this,i,e,t,()=>{c="callback_error"}),u)}).then(i=>{if(null===i){if(this.recordDroppedEvent(c,f),o){let t=e.spans||[];this.recordDroppedEvent(c,"span",1+t.length)}let t="callback_error"===c?"threw an error":"returned `null`";throw tk(`${u} ${t}, will not send event.`)}let l=n.getSession()||r.getSession();if(s&&l&&this._updateSessionFromEvent(l,i),s&&"number"==typeof d&&(0,eX.T)()>d)throw this.recordDroppedEvent("sample_rate","error"),tk(`Discarding event because it's not included in the random sample (sampling rate = ${a})`);if(o){let e=(i.sdkProcessingMetadata?.spanCountBeforeProcessing||0)-(i.spans?i.spans.length:0);e>0&&this.recordDroppedEvent("before_send","span",e)}let p=i.transaction_info;return o&&p&&i.transaction!==e.transaction&&(i.transaction_info={...p,source:"custom"}),this.sendEvent(i,t),i}).then(null,e=>{if(tx(e)||tT(e))throw e;throw this.captureException(e,{mechanism:{handled:!1,type:"internal"},data:{__sentry__:!0},originalException:e}),tE(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
                            Reason: $ {
                                e
                            }
                            `)})}_process(e,t){this._numProcessing++,this._promiseBuffer.add(e).then(e=>(this._numProcessing--,e),e=>(this._numProcessing--,e===to&&this.recordDroppedEvent("queue_overflow",t),e))}_clearOutcomes(){let e=this._outcomes;return this._outcomes={},Object.entries(e).map(([e,t])=>{let[n,r]=e.split(":");return{reason:n,category:r,quantity:t}})}_flushOutcomes(){var e;let t;eg.f&&ec.h.log("Flushing outcomes...");let n=this._clearOutcomes();if(0===n.length){eg.f&&ec.h.log("No outcomes to send");return}if(!this._dsn){eg.f&&ec.h.log("No dsn provided, will not send outcomes");return}eg.f&&ec.h.log("Sending outcomes:",n);let r=(e=this._options.tunnel&&(0,eQ._)(this._dsn),t=[{type:"client_report"},{timestamp:(0,eA.i)(),discarded_events:n}],(0,eK.H)(e?{dsn:e}:{},[t]));this.sendEnvelope(r)}}function tP(e){return void 0===e.type}function tN(e){return"transaction"===e.type}function tA(e){let t=0;return e.name&&(t+=2*e.name.length),(t+=8)+tR(e.attributes)}function tL(e){let t=0;return e.message&&(t+=2*e.message.length),t+tR(e.attributes)}function tR(e){if(!e)return 0;let t=0;return Object.values(e).forEach(e=>{Array.isArray(e)?t+=e.length*tI(e[0]):(0,eZ.n)(e)?t+=tI(e):t+=100}),t}function tI(e){return"string"==typeof e?2*e.length:"number"==typeof e?8:4*("boolean"==typeof e)}function tM(e){"aggregates"in e?e.attrs?.ip_address===void 0&&(e.attrs={...e.attrs,ip_address:"{{auto}}"}):void 0===e.ipAddress&&(e.ipAddress="{{auto}}")}function tD(e){return(0,eZ.b)(e)&&"__sentry_fetch_url_host__"in e&&"string"==typeof e.__sentry_fetch_url_host__?`
                            $ {
                                e.message
                            }($ {
                                e.__sentry_fetch_url_host__
                            })`:e.message}function tz(e,t){var n,r;let i,a,o=tj(e,t),s={type:(n=t,!(i=n?.name)&&t$(n)?n.message&&Array.isArray(n.message)&&2==n.message.length?n.message[0]:"WebAssembly.Exception":i),value:(r=t,a=r?.message,t$(r)?Array.isArray(r.message)&&2==r.message.length?r.message[1]:"wasm exception":a?a.error&&"string"==typeof a.error.message?tD(a.error):tD(r):"No error message")};return o.length&&(s.stacktrace={frames:o}),void 0===s.type&&""===s.value&&(s.value="Unrecoverable error caught"),s}function tU(e,t){return{exception:{values:[tz(e,t)]}}}function tj(e,t){var n,r;let i=t.stacktrace||t.stack||"",a=(n=t)&&tF.test(n.message)?1:0,o="number"==typeof(r=t).framesToPop?r.framesToPop:0;try{return e(i,a,o)}catch{}return[]}let tF=/Minified React error #\d+;/i;function t$(e){return"u">typeof WebAssembly&&void 0!==WebAssembly.Exception&&e instanceof WebAssembly.Exception}function tB(e,t,n,r,i){let a;if((0,eZ.u)(t)&&t.error)return tU(e,t.error);if((0,eZ.U)(t)||(0,eZ.a)(t)){if("stack"in t){a=tU(e,t);let i=a.exception?.values?.[0];if(r&&n&&i&&!i.stacktrace){let t=tj(e,n);t.length&&(i.stacktrace={frames:t},(0,e_.o)(a,{synthetic:!0}))}}else{let i=t.name||((0,eZ.U)(t)?"DOMError":"DOMException"),o=t.message?`
                            $ {
                                i
                            }: $ {
                                t.message
                            }
                            `:i;a=tH(e,o,n,r),(0,e_.T)(a,o)}return a}if((0,eZ.b)(t))return tU(e,t);if((0,eZ.d)(t)||(0,eZ.z)(t))return a=function(e,t,n,r){let i=(0,em.l)(),a=i?.getOptions().normalizeDepth,o=Object.values(t).find(eZ.b),s={__serialized__:(0,eW.B)(t,a)};if(o)return{exception:{values:[tz(e,o)]},extra:s};let l={exception:{values:[{type:(0,eZ.z)(t)?t.constructor.name:r?"UnhandledRejection":"Error",value:function(e,{isUnhandledRejection:t}){let n=(0,ex.v)(e),r=t?"promise rejection":"exception";if((0,eZ.u)(e))return`
                            Event`ErrorEvent\` captured as ${r} with message \`${e.message}\``;
                            if ((0, eZ.z)(e)) {
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
            }, extra: s
        };
        if (n) {
            let t = tj(e, n);
            t.length && (l.exception.values[0].stacktrace = {
                frames: t
            })
        }
        return l
    }(e, t, n, i), (0, e_.o)(a, {
        synthetic: !0
    }), a;
    let o = String(t);
    return a = tH(e, o, n, r), (0, e_.T)(a, o, void 0), (0, e_.o)(a, {
        synthetic: !0
    }), a
}

function tH(e, t, n, r) {
    let i = {};
    if (r && n) {
        let r = tj(e, n);
        r.length && (i.exception = {
            values: [{
                value: t,
                stacktrace: {
                    frames: r
                }
            }]
        }), (0, e_.o)(i, {
            synthetic: !0
        })
    }
    if ((0, eZ.S)(t)) {
        let {
            __sentry_template_string__: e,
            __sentry_template_values__: n
        } = t;
        return i.logentry = {
            message: e,
            params: n
        }, i
    }
    return i.message = t, i
}
let tq = ed.f;

function tV() {
    try {
        return tq.document?.location.href ?? ""
    } catch {
        return ""
    }
}
let tW = ed.f, tQ = 0, tG = [];

function tK(e) {
    if (tQ > 0) return !0;
    let t = e ? tG.findIndex(t => {
        var n, r;
        return n = t, r = e, n.msg === r.msg && n.url === r.url && n.line === r.line && n.column === r.column
    }) : -1;
    return -1 !== t && (tG.splice(t, 1), !0)
}

function tX(e, t = {}) {
    if ("function" != typeof e) return e;
    try {
        if (Object.prototype.hasOwnProperty.call(e, "__sentry_wrapped__")) {
            let t = e.__sentry_wrapped__;
            if ("function" == typeof t) return t;
            return e
        }
        if ((0, ex.R)(e)) return e
    } catch {
        return e
    }
    let n = function(...n) {
        ed.f._sentryWrappedDepth = (ed.f._sentryWrappedDepth || 0) + 1;
        try {
            let r = n.map(e => tX(e, t));
            return e.apply(this, r)
        } catch (e) {
            throw tQ++, setTimeout(() => {
                tQ--
            }), (0, em.h)(r => {
                r.addEventProcessor(e => (t.mechanism && ((0, e_.T)(e, void 0, void 0), (0, e_.o)(e, t.mechanism)), e.extra = {
                    ...e.extra,
                    arguments: n
                }, e)), (0, eh.y)(e)
            }), e
        } finally {
            ed.f._sentryWrappedDepth = (ed.f._sentryWrappedDepth || 0) - 1
        }
    };
    try {
        for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t])
    } catch {}(0, ex.u)(n, e), (0, ex.O)(e, "__sentry_wrapped__", n);
    try {
        Object.getOwnPropertyDescriptor(n, "name").configurable && Object.defineProperty(n, "name", {
            get: () => e.name
        })
    } catch {}
    return n
}

function tY() {
    let e = tV(),
        {
            referrer: t
        } = tW.document || {},
        {
            userAgent: n
        } = tW.navigator || {};
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
class tJ extends tO {
    constructor(e) {
        var t;
        let n = (t = e, {
            release: "string" == typeof __SENTRY_RELEASE__ ? __SENTRY_RELEASE__ : tW.SENTRY_RELEASE?.id,
            sendClientReports: !0,
            parentSpanIsAlwaysRootSpan: !0,
            ...t
        });
        ep(n, "browser", ["browser"], tW.SENTRY_SDK_SOURCE || "npm"), super(n), this._unhandledSessionStatus = "unhandled";
        let {
            userInfo: r
        } = this.getDataCollectionOptions();
        n._metadata?.sdk && (n._metadata.sdk.settings = {
            infer_ip: r ? "auto" : "never",
            ...n._metadata.sdk.settings
        });
        let {
            sendClientReports: i
        } = this._options;
        tW.document && tW.document.addEventListener("visibilitychange", () => {
            "hidden" === tW.document.visibilityState && (i && this._flushOutcomes(), queueMicrotask(() => {
                this.flush()
            }))
        }), r && this.on("beforeSendSession", tM)
    }
    eventFromException(e, t) {
        var n, r;
        let i;
        return n = this._options.stackParser, r = this._options.attachStacktrace, i = tB(n, e, t?.syntheticException || void 0, r), (0, e_.o)(i), i.level = "error", t?.event_id && (i.event_id = t.event_id), (0, ti.Y)(i)
    }
    eventFromMessage(e, t = "info", n) {
        return function(e, t, n = "info", r, i) {
            let a = tH(e, t, r?.syntheticException || void 0, i);
            return a.level = n, r?.event_id && (a.event_id = r.event_id), (0, ti.Y)(a)
        }(this._options.stackParser, e, t, n, this._options.attachStacktrace)
    }
    _prepareEvent(e, t, n, r) {
        return e.platform = e.platform || "javascript", super._prepareEvent(e, t, n, r)
    }
}
let tZ = ed.f;

function t0(e) {
    return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
}

function t1(e, t) {
    return (0, eZ.t)(e) && !!e[t]
}

function t2(e) {
    return "string" == typeof e ? e : e ? t1(e, "url") ? e.url : e.toString ? e.toString() : "" : ""
}

function t3(e) {
    if (void 0 !== e) return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : void 0
}
var t4 = e.i(351384);
let t5 = "[Filtered]", t6 = ["auth", "token", "secret", "session", "password", "passwd", "pwd", "key", "jwt", "bearer", "sso", "saml", "csrf", "xsrf", "credentials", "sid", "identity", "set-cookie", "cookie"];

function t8(e, t, n) {
    if (!1 === t) return !0;
    let r = e.toLowerCase();
    if ((null != n ? [...t6, ...n] : t6).some(e => r.includes(e))) return !0;
    if (!0 === t) return !1;
    let i = ("deny" in t ? t.deny : t.allow).some(e => r.includes(e.toLowerCase()));
    return "deny" in t ? i : !i
}

function t9(e, t, n) {
    if (!1 === t) return {};
    let r = {};
    for (let i of Object.keys(e)) r[i] = t8(i, t, n) ? t5 : e[i];
    return r
}

function t7(e, t) {
    if (e && !1 !== t) return e.split("&").map(e => {
        let n = e.indexOf("="),
            r = -1 === n ? e : e.slice(0, n),
            i = new URLSearchParams(`${r}=`).keys().next().value;
        return void 0 !== i && t8(i, t) ? `${r}=${t5}` : e
    }).join("&")
}

function ne(e) {
    return (e ?? (0, em.l)())?.getDataCollectionOptions().urlQueryParams ?? !0
}

function nt(e, t) {
    return void 0 === e ? void 0 : function(e, t) {
        let n = e.indexOf("#"),
            r = -1 === n ? e.length : n,
            i = e.indexOf("?");
        if (-1 === i || i > r) return e;
        let a = e.slice(0, i),
            o = e.slice(i + 1, r),
            s = e.slice(r),
            l = t7(o, t);
        return l ? `${a}?${l}${s}` : `${a}${s}`
    }(e, ne(t))
}

function nn(e) {
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

function nr(e, t = !0) {
    if (e.startsWith("data:")) {
        let n = e.match(/^data:([^;,]+)/),
            r = n ? n[1] : "text/plain",
            i = e.includes(";base64,"),
            a = e.indexOf(","),
            o = "";
        if (t && -1 !== a) {
            let t = e.slice(a + 1);
            o = t.length > 10 ? `${t.slice(0,10)}... [truncated]` : t
        }
        return `data:${r}${i?",base64":""}${o?`,${o}`:""}`
    }
    return e
}

function ni() {
    if (!tq.document) return;
    let e = eU.bind(null, "dom"),
        t = na(e, !0);
    tq.document.addEventListener("click", t, !1), tq.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(t => {
        let n = tq[t]?.prototype;
        n?.hasOwnProperty?.("addEventListener") && ((0, ex.Q)(n, "addEventListener", function(t) {
            return function(n, r, i) {
                if ("click" === n || "keypress" == n) try {
                    let r = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
                        a = r[n] = r[n] || {
                            refCount: 0
                        };
                    if (!a.handler) {
                        let r = na(e);
                        a.handler = r, t.call(this, n, r, i)
                    }
                    a.refCount++
                } catch {}
                return t.call(this, n, r, i)
            }
        }), (0, ex.Q)(n, "removeEventListener", function(e) {
            return function(t, n, r) {
                if ("click" === t || "keypress" == t) try {
                    let n = this.__sentry_instrumentation_handlers__ || {},
                        i = n[t];
                    i && (i.refCount--, i.refCount <= 0 && (e.call(this, t, i.handler, r), i.handler = void 0, delete n[t]), 0 === Object.keys(n).length && delete this.__sentry_instrumentation_handlers__)
                } catch {}
                return e.call(this, t, n, r)
            }
        }))
    })
}

function na(e, i = !1) {
    return a => {
        var o;
        if (!a || a._sentryCaptured) return;
        let s = function(e) {
            try {
                return e.target
            } catch {
                return null
            }
        }(a);
        if (o = a.type, "keypress" === o && (!s?.tagName || "INPUT" !== s.tagName && "TEXTAREA" !== s.tagName && !s.isContentEditable && 1)) return;
        (0, ex.O)(a, "_sentryCaptured", !0), s && !s._sentryId && (0, ex.O)(s, "_sentryId", (0, e_.c)());
        let l = "keypress" === a.type ? "input" : a.type;
        ! function(e) {
            if (e.type !== n) return !1;
            try {
                if (!e.target || e.target._sentryId !== r) return !1
            } catch {}
            return !0
        }(a) && (e({
            event: a,
            name: l,
            global: i
        }), n = a.type, r = s ? s._sentryId : void 0), clearTimeout(t), t = tq.setTimeout(() => {
            r = void 0, n = void 0
        }, 1e3)
    }
}
let no = "__sentry_xhr_v3__";

function ns() {
    if (!tq.XMLHttpRequest) return;
    let e = XMLHttpRequest.prototype;
    e.open = new Proxy(e.open, {
        apply(e, t, n) {
            let r = Error(),
                i = 1e3 * (0, eA.R)(),
                a = (0, eZ.Z)(n[0]) ? n[0].toUpperCase() : void 0,
                o = function(e) {
                    if ((0, eZ.Z)(e)) return e;
                    try {
                        return e.toString()
                    } catch {}
                }(n[1]);
            if (!a || !o) return e.apply(t, n);
            t[no] = {
                method: a,
                url: o,
                request_headers: {}
            }, "POST" === a && o.match(/sentry_key/) && (t.__sentry_own_request__ = !0);
            let s = () => {
                let e = t[no];
                if (e && 4 === t.readyState) {
                    try {
                        e.status_code = t.status
                    } catch {}
                    eU("xhr", {
                        endTimestamp: 1e3 * (0, eA.R)(),
                        startTimestamp: i,
                        xhr: t,
                        virtualError: r
                    }), r = void 0, t.removeEventListener("readystatechange", s)
                }
            };
            return "onreadystatechange" in t && "function" == typeof t.onreadystatechange ? t.onreadystatechange = new Proxy(t.onreadystatechange, {
                apply: (e, t, n) => (s(), e.apply(t, n))
            }) : t.addEventListener("readystatechange", s), t.setRequestHeader = new Proxy(t.setRequestHeader, {
                apply(e, t, n) {
                    let [r, i] = n, a = t[no];
                    return a && (0, eZ.Z)(r) && (0, eZ.Z)(i) && (a.request_headers[r.toLowerCase()] = i), e.apply(t, n)
                }
            }), e.apply(t, n)
        }
    }), e.send = new Proxy(e.send, {
        apply(e, t, n) {
            let r = t[no];
            return r && (void 0 !== n[0] && (r.body = n[0]), eU("xhr", {
                startTimestamp: 1e3 * (0, eA.R)(),
                xhr: t
            })), e.apply(t, n)
        }
    })
}

function nl(e) {
    let t = "history";
    eD(t, e), ez(t, nu)
}

function nu() {
    function e(e) {
        return function(...t) {
            let n = t.length > 2 ? t[2] : void 0;
            if (n) {
                let r = i,
                    a = function(e) {
                        try {
                            return new URL(e, tq.location.origin).toString()
                        } catch {
                            return e
                        }
                    }(String(n));
                if (i = a, r === a) return e.apply(this, t);
                eU("history", {
                    from: r,
                    to: a
                })
            }
            return e.apply(this, t)
        }
    }
    tq.addEventListener("popstate", () => {
        let e = tq.location.href,
            t = i;
        i = e, t === e || eU("history", {
            from: t,
            to: e
        })
    }), "history" in tq && tq.history && ((0, ex.Q)(tq.history, "pushState", e), (0, ex.Q)(tq.history, "replaceState", e))
}
let nc = {};
try {
    "u" > typeof Node && (nc.parentNode = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode").get), "u" > typeof Element && (nc.tagName = Object.getOwnPropertyDescriptor(Element.prototype, "tagName").get, nc.id = Object.getOwnPropertyDescriptor(Element.prototype, "id").get, nc.className = Object.getOwnPropertyDescriptor(Element.prototype, "className").get, nc.getAttribute = Element.prototype.getAttribute), "u" > typeof HTMLElement && (nc.dataset = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "dataset").get)
} catch {}

function nd(e, t, n) {
    let r = nc[t];
    if (r) try {
        return r.call(e, n)
    } catch {}
    let i = e[t];
    return "function" == typeof i ? i.call(e, n) : i
}

function nf(e, t = {}) {
    if (!e) return "<unknown>";
    try {
        let n, r = e,
            i = [],
            a = 0,
            o = 0,
            s = Array.isArray(t) ? t : t.keyAttrs,
            l = !Array.isArray(t) && t.maxStringLength || 80;
        for (; r && a++ < 5 && (n = function(e, t) {
                let n = [],
                    r = nd(e, "tagName");
                if (!r) return "";
                if ("u" > typeof HTMLElement && e instanceof HTMLElement) {
                    let t = nd(e, "dataset");
                    if (t) {
                        if (t.sentryComponent) return t.sentryComponent;
                        if (t.sentryElement) return t.sentryElement
                    }
                }
                n.push(r.toLowerCase());
                let i = t?.length ? t.filter(t => nd(e, "getAttribute", t)).map(t => [t, nd(e, "getAttribute", t)]) : null;
                if (i?.length) i.forEach(e => {
                    n.push(`[${e[0]}="${e[1]}"]`)
                });
                else {
                    let t = nd(e, "id");
                    t && n.push(`#${t}`);
                    let r = nd(e, "className");
                    if (r && (0, eZ.Z)(r))
                        for (let e of r.split(/\s+/)) n.push(`.${e}`)
                }
                for (let t of ["aria-label", "type", "name", "title", "alt"]) {
                    let r = nd(e, "getAttribute", t);
                    r && n.push(`[${t}="${r}"]`)
                }
                return n.join("")
            }(r, s), "html" !== n && (!(a > 1) || !(o + 3 * i.length + n.length >= l)));) i.push(n), o += n.length, r = nd(r, "parentNode");
        return i.reverse().join(" > ")
    } catch {
        return "<unknown>"
    }
}

function np(e, t = 5) {
    if (!ed.f.HTMLElement) return null;
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
let nh = "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(",");

function nm(e) {
    return function(...t) {
        let n = t[0];
        return t[0] = tX(n, {
            mechanism: {
                handled: !1,
                type: `auto.browser.browserapierrors.${(0,eR.n)(e)}`
            }
        }), e.apply(this, t)
    }
}

function ng(e) {
    return function(t) {
        return e.apply(this, [tX(t, {
            mechanism: {
                data: {
                    handler: (0, eR.n)(e)
                },
                handled: !1,
                type: "auto.browser.browserapierrors.requestAnimationFrame"
            }
        })])
    }
}

function nv(e) {
    return function(...t) {
        let n = this;
        return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(e => {
            e in n && "function" == typeof n[e] && (0, ex.Q)(n, e, function(t) {
                let n = {
                        mechanism: {
                            data: {
                                handler: (0, eR.n)(t)
                            },
                            handled: !1,
                            type: `auto.browser.browserapierrors.xhr.${e}`
                        }
                    },
                    r = (0, ex.R)(t);
                return r && (n.mechanism.data.handler = (0, eR.n)(r)), tX(t, n)
            })
        }), e.apply(this, t)
    }
}

function nb(e, t, n) {
    tq.document && tq.addEventListener(e, t, n)
}

function ny(e, t, n) {
    tq.document && tq.removeEventListener(e, t, n)
}
e.i(121284);

function nw(e, t) {
    let n = e.attributes ?? (e.attributes = {});
    Object.entries(t).forEach(([e, t]) => {
        null == t || e in n || (n[e] = t)
    })
}

function n_() {
    try {
        let e = tW.Intl;
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
let nS = null;

function nE() {
    nS = ed.f.onerror, ed.f.onerror = function(e, t, n, r, i) {
        return eU("error", {
            column: r,
            error: i,
            line: n,
            msg: e,
            url: t
        }), !!nS && nS.apply(this, arguments)
    }, ed.f.onerror.__SENTRY_INSTRUMENTED__ = !0
}
let nk = null;

function nT() {
    nk = ed.f.onunhandledrejection, ed.f.onunhandledrejection = function(e) {
        return eU("unhandledrejection", e), !nk || nk.apply(this, arguments)
    }, ed.f.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
}

function nx(e) {}

function nC() {
    let e = (0, em.l)();
    return e?.getOptions() || {
        stackParser: () => [],
        attachStacktrace: !1
    }
}

function nO(e) {
    return Array.isArray(e.errors)
}

function nP(e, t, n) {
    e.mechanism = {
        handled: !0,
        type: "auto.core.linked_errors",
        ...nO(n) && {
            is_exception_group: !0
        },
        ...e.mechanism,
        exception_id: t
    }
}

function nN(e, t, n, r) {
    e.mechanism = {
        handled: !0,
        ...e.mechanism,
        type: "chained",
        source: t,
        exception_id: n,
        parent_id: r
    }
}

function nA(e, t, n, r) {
    let i = {
        filename: e,
        function: "<anonymous>" === t ? eR.z : t,
        in_app: !0
    };
    return void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i
}
let nL = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i, nR = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, nI = /\((\S*)(?::(\d+))(?::(\d+))\)/, nM = /at (.+?) ?\(data:(.+?),/, nD = [30, e => {
    let t = e.match(nM);
    if (t) return {
        filename: `<data:${t[2]}>`,
        function: t[1]
    };
    let n = nL.exec(e);
    if (n) {
        let [, e, t, r] = n;
        return nA(e, eR.z, +t, +r)
    }
    let r = nR.exec(e);
    if (r) {
        if (r[2]?.indexOf("eval") === 0) {
            let e = nI.exec(r[2]);
            e && (r[2] = e[1], r[3] = e[2], r[4] = e[3])
        }
        let [e, t] = n$(r[1] || eR.z, r[2]);
        return nA(t, e, r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0)
    }
}], nz = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, nU = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, nj = [50, e => {
    let t = nz.exec(e);
    if (t) {
        if (t[3] && t[3].indexOf(" > eval") > -1) {
            let e = nU.exec(t[3]);
            e && (t[1] = t[1] || "eval", t[3] = e[1], t[4] = e[2], t[5] = "")
        }
        let e = t[3],
            n = t[1] || eR.z;
        return [n, e] = n$(n, e), nA(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
    }
}], nF = (0, eR.O)(nD, nj), n$ = (e, t) => {
    let n = -1 !== e.indexOf("safari-extension"),
        r = -1 !== e.indexOf("safari-web-extension");
    return n || r ? [-1 !== e.indexOf("@") ? e.split("@")[0] : eR.z, n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
}, nB = {};

function nH(e, t = function(e) {
    let t = nB[e];
    if (t) return t;
    let n = tq[e];
    if (t0(n)) return nB[e] = n.bind(tq);
    let r = tq.document;
    if (r && "function" == typeof r.createElement) try {
        let t = r.createElement("iframe");
        t.hidden = !0, r.head.appendChild(t);
        let i = t.contentWindow;
        i?.[e] && (n = i[e]), r.head.removeChild(t)
    } catch (e) {}
    return n ? nB[e] = n.bind(tq) : n
}("fetch")) {
    let n = 0,
        r = 0;
    async function i(i) {
        let a = i.body.length;
        n += a, r++;
        let o = {
            body: i.body,
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
            throw nB.fetch = void 0, e
        } finally {
            n -= a, r--
        }
    }
    return function(e, t, n = ts(e.bufferSize || 64)) {
        let r = {};
        return {
            send: function(i) {
                let a = [];
                if ((0, eK.E)(i, (t, n) => {
                        let i = (0, eK.h)(n);
                        ! function(e, t, n = (0, eX.D)()) {
                            return (e[t] || e.all || 0) > n
                        }(r, i) ? a.push(t): e.recordDroppedEvent("ratelimit_backoff", i)
                    }), 0 === a.length) return Promise.resolve({});
                let o = (0, eK.H)(i[0], a),
                    s = t => {
                        if ((0, eK.Q)(o, ["client_report"])) {
                            eg.f && ec.h.warn(`Dropping client report. Will not send outcomes (reason: ${t}).`);
                            return
                        }(0, eK.E)(o, (n, r) => {
                            e.recordDroppedEvent(t, (0, eK.h)(r))
                        })
                    };
                return n.add(() => t({
                    body: (0, eK.k)(o)
                }).then(e => (413 === e.statusCode ? (eg.f && ec.h.error("Sentry responded with status code 413. Envelope was discarded due to exceeding size limits."), s("send_error")) : (eg.f && void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode >= 300) && ec.h.warn(`Sentry responded with status code ${e.statusCode} to sent event.`), r = function(e, {
                    statusCode: t,
                    headers: n
                }, r = (0, eX.D)()) {
                    let i = {
                            ...e
                        },
                        a = n?.["x-sentry-rate-limits"],
                        o = n?.["retry-after"];
                    if (a)
                        for (let e of a.trim().split(",")) {
                            let [t, n, , , a] = e.split(":", 5), o = parseInt(t, 10), s = (isNaN(o) ? 60 : o) * 1e3;
                            if (n)
                                for (let e of n.split(";")) "metric_bucket" === e ? (!a || a.split(";").includes("custom")) && (i[e] = r + s) : i[e] = r + s;
                            else i.all = r + s
                        } else o ? i.all = r + function(e, t = (0, eX.D)()) {
                            let n = parseInt(`${e}`, 10);
                            if (!isNaN(n)) return 1e3 * n;
                            let r = Date.parse(`${e}`);
                            return isNaN(r) ? 6e4 : r - t
                        }(o, r) : 429 === t && (i.all = r + 6e4);
                    return i
                }(r, e)), e), e => {
                    throw s("network_error"), eg.f && ec.h.error("Encountered error running transport request:", e), e
                })).then(e => e, e => {
                    if (e === to) return eg.f && ec.h.error("Skipped sending event because buffer is full."), s("queue_overflow"), Promise.resolve({});
                    throw e
                })
            },
            flush: e => n.drain(e)
        }
    }(e, i, ts(e.bufferSize || 40))
}
let nq = /^HTML(\w*)Element$/;

function nV(e) {
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
        if (nq.test(n)) return `[HTMLElement: ${nf(e)}]`
    }
}

function nW(e) {
    let t;
    return [((e = {}) => {
        let t;
        return {
            name: "EventFilters",
            setup(n) {
                t = ek(e, n.getOptions())
            },
            processEvent: (n, r, i) => (t || (t = ek(e, i.getOptions())), ! function(e, t) {
                if (e.type) {
                    if ("transaction" === e.type && function(e, t) {
                            if (!t?.length) return !1;
                            let n = e.transaction;
                            return !!n && (0, eS.$)(n, t)
                        }(e, t.ignoreTransactions)) return eg.f && ec.h.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${(0,e_.N)(e)}`), !0
                } else {
                    var n, r, i;
                    if (n = e, r = t.ignoreErrors, r?.length && ew(n).some(e => (0, eS.$)(e, r))) return eg.f && ec.h.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${(0,e_.N)(e)}`), !0;
                    if (i = e, i.exception?.values?.length && !i.message && !i.exception.values.some(e => e.stacktrace || e.type && "Error" !== e.type || e.value)) return eg.f && ec.h.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${(0,e_.N)(e)}`), !0;
                    if (function(e, t) {
                            if (!t?.length) return !1;
                            let n = eT(e);
                            return !!n && (0, eS.$)(n, t)
                        }(e, t.denyUrls)) return eg.f && ec.h.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${(0,e_.N)(e)}.
Url: ${eT(e)}`), !0;
                    if (! function(e, t) {
                            if (!t?.length) return !0;
                            let n = eT(e);
                            return !n || (0, eS.$)(n, t)
                        }(e, t.allowUrls)) return eg.f && ec.h.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${(0,e_.N)(e)}.
Url: ${eT(e)}`), !0
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
                    let n, r = (0, ex.R)(this);
                    try {
                        eC.has((0, em.l)()) && void 0 !== r && (n = r)
                    } catch {}
                    return e.apply(n ?? this, t)
                }
            } catch {}
        },
        setup(e) {
            eC.set(e, !0)
        }
    }, {
        name: "ConversationId",
        setup(e) {
            e.on("spanStart", e => {
                let t = (0, em.d)().getScopeData(),
                    n = (0, em.V)().getScopeData(),
                    r = t.conversationId || n.conversationId;
                if (r) {
                    let {
                        op: t,
                        data: n,
                        description: i
                    } = (0, eP.U)(e);
                    if (!t?.startsWith("gen_ai.") && !n["ai.operationId"] && !i?.startsWith("ai.")) return;
                    e.setAttribute(eO.E, r)
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
                t.setTimeout && (0, ex.Q)(tW, "setTimeout", nm), t.setInterval && (0, ex.Q)(tW, "setInterval", nm), t.requestAnimationFrame && (0, ex.Q)(tW, "requestAnimationFrame", ng), t.XMLHttpRequest && "XMLHttpRequest" in tW && (0, ex.Q)(XMLHttpRequest.prototype, "send", nv);
                let e = t.eventTarget;
                e && (Array.isArray(e) ? e : nh).forEach(e => {
                    var n, r;
                    let i;
                    return n = e, r = t, i = tW[n]?.prototype, void(i?.hasOwnProperty?.("addEventListener") && ((0, ex.Q)(i, "addEventListener", function(e) {
                        return function(t, i, a) {
                            var o, s, l, u;
                            try {
                                o = i, "function" == typeof o.handleEvent && (i.handleEvent = tX(i.handleEvent, {
                                    mechanism: {
                                        data: {
                                            handler: (0, eR.n)(i),
                                            target: n
                                        },
                                        handled: !1,
                                        type: "auto.browser.browserapierrors.handleEvent"
                                    }
                                }))
                            } catch {}
                            return r.unregisterOriginalCallbacks && (s = this, l = t, u = i, s && "object" == typeof s && "removeEventListener" in s && "function" == typeof s.removeEventListener && s.removeEventListener(l, u)), e.apply(this, [t, tX(i, {
                                mechanism: {
                                    data: {
                                        handler: (0, eR.n)(i),
                                        target: n
                                    },
                                    handled: !1,
                                    type: "auto.browser.browserapierrors.addEventListener"
                                }
                            }), a])
                        }
                    }), (0, ex.Q)(i, "removeEventListener", function(e) {
                        return function(t, n, r) {
                            try {
                                if (Object.prototype.hasOwnProperty.call(n, "__sentry_wrapped__")) {
                                    let i = n.__sentry_wrapped__;
                                    i && e.call(this, t, i, r)
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
                var n, r, i, a, o, s, l;
                let u, c;
                t.dom && (eD("dom", (n = e, r = t.dom, function(e) {
                    let t, i;
                    if ((0, em.l)() !== n) return;
                    let a = "object" == typeof r ? r.serializeAttribute : void 0,
                        o = "object" == typeof r && "number" == typeof r.maxStringLength ? r.maxStringLength : void 0;
                    o && o > 1024 && (o = 1024), "string" == typeof a && (a = [a]);
                    try {
                        var s;
                        let n = e.event,
                            r = (s = n) && s.target ? n.target : n;
                        t = nf(r, {
                            keyAttrs: a,
                            maxStringLength: o
                        }), i = np(r)
                    } catch {
                        t = "<unknown>"
                    }
                    if (0 === t.length) return;
                    let l = {
                        category: `ui.${e.name}`,
                        message: t
                    };
                    i && (l.data = {
                        "ui.component_name": i
                    }), eL(l, {
                        event: e.event,
                        name: e.name,
                        global: e.global
                    })
                })), ez("dom", ni)), t.xhr && (eD("xhr", (i = e, function(e) {
                    if ((0, em.l)() !== i) return;
                    let {
                        startTimestamp: t,
                        endTimestamp: n
                    } = e, r = e.xhr[no];
                    if (!t || !n || !r) return;
                    let {
                        method: a,
                        url: o,
                        status_code: s,
                        body: l
                    } = r, u = {
                        xhr: e.xhr,
                        input: l,
                        startTimestamp: t,
                        endTimestamp: n
                    }, c = {
                        category: "xhr",
                        data: {
                            method: a,
                            url: o,
                            status_code: s
                        },
                        type: "http",
                        level: t3(s)
                    };
                    i.emit("beforeOutgoingRequestBreadcrumb", c, u), eL(c, u)
                })), ez("xhr", ns)), t.fetch && (o = (a = e, function(e) {
                    if ((0, em.l)() !== a) return;
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
                                i = {
                                    category: "fetch",
                                    data: e.fetchData,
                                    level: "error",
                                    type: "http"
                                };
                            a.emit("beforeOutgoingRequestBreadcrumb", i, r), eL(i, r)
                        } else {
                            let r = e.response,
                                i = {
                                    ...e.fetchData,
                                    status_code: r?.status
                                },
                                o = {
                                    input: e.args,
                                    response: r,
                                    startTimestamp: t,
                                    endTimestamp: n
                                },
                                s = {
                                    category: "fetch",
                                    data: i,
                                    type: "http",
                                    level: t3(i.status_code)
                                };
                            a.emit("beforeOutgoingRequestBreadcrumb", s, o), eL(s, o)
                        }
                }), c = eD(u = "fetch", o), ez(u, () => void((!e2() || function() {
                    if ("string" == typeof EdgeRuntime) return !0;
                    if (! function() {
                            if (!("fetch" in tZ)) return !1;
                            try {
                                return new Headers, new Request("data:,"), new Response, !0
                            } catch {
                                return !1
                            }
                        }()) return !1;
                    if (t0(tZ.fetch)) return !0;
                    let e = !1,
                        t = tZ.document;
                    if (t && "function" == typeof t.createElement) try {
                        let n = t.createElement("iframe");
                        n.hidden = !0, t.head.appendChild(n), n.contentWindow?.fetch && (e = t0(n.contentWindow.fetch)), t.head.removeChild(n)
                    } catch (e) {
                        eg.f && ec.h.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
                    }
                    return e
                }()) && (0, ex.Q)(ed.f, "fetch", function(e) {
                    return new Proxy(e, {
                        apply(e, t, n) {
                            let r = Error(),
                                {
                                    method: i,
                                    url: a
                                } = function(e) {
                                    if (0 === e.length) return {
                                        method: "GET",
                                        url: ""
                                    };
                                    if (2 === e.length) {
                                        let [t, n] = e;
                                        return {
                                            url: t2(t),
                                            method: t1(n, "method") ? String(n.method).toUpperCase() : (0, eZ.G)(t) && t1(t, "method") ? String(t.method).toUpperCase() : "GET"
                                        }
                                    }
                                    let t = e[0];
                                    return {
                                        url: t2(t),
                                        method: t1(t, "method") ? String(t.method).toUpperCase() : "GET"
                                    }
                                }(n),
                                o = {
                                    args: n,
                                    fetchData: {
                                        method: i,
                                        url: a
                                    },
                                    startTimestamp: 1e3 * (0, eA.R)(),
                                    virtualError: r,
                                    headers: function(e) {
                                        let [t, n] = e;
                                        try {
                                            if ("object" == typeof n && null !== n && "headers" in n && n.headers) return new Headers(n.headers);
                                            if ((0, eZ.G)(t)) return new Headers(t.headers)
                                        } catch {}
                                    }(n)
                                };
                            return eU("fetch", {
                                ...o
                            }), Reflect.apply(e, ed.f, n).then(async e => (eU("fetch", {
                                ...o,
                                endTimestamp: 1e3 * (0, eA.R)(),
                                response: e
                            }), e), e => {
                                eU("fetch", {
                                    ...o,
                                    endTimestamp: 1e3 * (0, eA.R)(),
                                    error: e
                                }), (0, eZ.b)(e) && void 0 === e.stack && (e.stack = r.stack, (0, ex.O)(e, "framesToPop", 1));
                                let t = (0, em.l)(),
                                    n = t?.getOptions().enhanceFetchErrorMessages ?? "always";
                                if (!1 !== n && (0, eZ.b)(e) && "TypeError" === e.name && ("Failed to fetch" === e.message || "Load failed" === e.message || "NetworkError when attempting to fetch resource." === e.message)) try {
                                    let t = new URL(o.fetchData.url).host;
                                    "always" === n ? e.message = `${e.message} (${t})` : (0, ex.O)(e, "__sentry_fetch_url_host__", t)
                                } catch {}
                                throw e
                            })
                        }
                    })
                })))), t.history && nl((s = e, function(e) {
                    if ((0, em.l)() !== s) return;
                    let t = e.from,
                        n = e.to,
                        r = nn(tW.location.href),
                        i = t ? nn(t) : void 0,
                        a = nn(n);
                    i?.path || (i = r), r.protocol === a.protocol && r.host === a.host && (n = a.relative), r.protocol === i.protocol && r.host === i.host && (t = i.relative), eL({
                        category: "navigation",
                        data: {
                            from: t,
                            to: n
                        }
                    })
                })), t.sentry && e.on("beforeSendEvent", (l = e, function(e) {
                    (0, em.l)() === l && eL({
                        category: `sentry.${"transaction"===e.type?"transaction":"event"}`,
                        event_id: e.event_id,
                        level: e.level,
                        message: (0, e_.N)(e)
                    }, {
                        event: e
                    })
                }))
            }
        }
    })(), ((e = {}) => {
        let t = new Set(e.levels || ec.u);
        return {
            name: "Console",
            setup(n) {
                let r, i, a = (i = eD(r = "console", ({
                    args: e,
                    level: r
                }) => {
                    (0, em.l)() === n && t.has(r) && function(e, t) {
                        let n = {
                            category: "console",
                            data: {
                                arguments: t,
                                logger: "console"
                            },
                            level: "warn" === e ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(e) ? e : "log",
                            message: eB(t)
                        };
                        if ("assert" === e)
                            if (!1 !== t[0]) return;
                            else {
                                let e = t.slice(1);
                                n.message = e.length > 0 ? `Assertion failed: ${eB(e)}` : "Assertion failed", n.data.arguments = e
                            } eL(n, {
                            input: t,
                            level: e
                        })
                    }(r, e)
                }), ez(r, e$), i);
                if (n.registerCleanup(a), e.filter) {
                    let t = function(e) {
                        for (let t of e) ej.add(t);
                        return () => {
                            for (let t of e) ej.delete(t)
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
                let i, a;
                t.onerror && (n = e, eD(i = "error", e => {
                    var t, r, i, a;
                    let o, s, l, u, c, {
                        stackParser: d,
                        attachStacktrace: f
                    } = nC();
                    if ((0, em.l)() !== n || tK(e)) return;
                    let {
                        msg: p,
                        url: h,
                        line: m,
                        column: g,
                        error: v
                    } = e, b = (t = tB(d, v || p, void 0, f, !1), r = h, i = m, a = g, 0 === (c = (u = (l = (s = (o = t.exception = t.exception || {}).values = o.values || [])[0] = s[0] || {}).stacktrace = l.stacktrace || {}).frames = u.frames || []).length && c.push({
                        colno: a,
                        lineno: i,
                        filename: function(e) {
                            if ((0, eZ.Z)(e) && 0 !== e.length) return e.startsWith("data:") ? `<${nr(e,!1)}>` : e
                        }(r) ?? tV(),
                        function: eR.z,
                        in_app: !0
                    }), t);
                    b.level = "error", (0, eh.f)(b, {
                        originalException: v,
                        mechanism: {
                            handled: !1,
                            type: "auto.browser.global_handlers.onerror"
                        }
                    })
                }), ez(i, nE), nx("onerror")), t.onunhandledrejection && (r = e, eD(a = "unhandledrejection", e => {
                    var t;
                    let {
                        stackParser: n,
                        attachStacktrace: i
                    } = nC();
                    if ((0, em.l)() !== r || tK()) return;
                    let a = function(e) {
                            if ((0, eZ.n)(e)) return e;
                            try {
                                if ("reason" in e) return e.reason;
                                if ("detail" in e && "reason" in e.detail) return e.detail.reason
                            } catch {}
                            return e
                        }(e),
                        o = (0, eZ.n)(a) ? (t = a, {
                            exception: {
                                values: [{
                                    type: "UnhandledRejection",
                                    value: `Non-Error promise rejection captured with value: ${String(t)}`
                                }]
                            }
                        }) : tB(n, a, void 0, i, !0);
                    o.level = "error", (0, eh.f)(o, {
                        originalException: a,
                        mechanism: {
                            handled: !1,
                            type: "auto.browser.global_handlers.onunhandledrejection"
                        }
                    })
                }), ez(a, nT), nx("onunhandledrejection"))
            }
        }
    })(), ((e = {}) => {
        let t = e.limit || 5,
            n = e.key || "cause";
        return {
            name: "LinkedErrors",
            preprocessEvent(e, r, i) {
                ! function(e, t, n, r, i, a) {
                    if (!i.exception?.values || !a || !(0, eZ.b)(a.originalException)) return;
                    let o = i.exception.values.length > 0 ? i.exception.values[i.exception.values.length - 1] : void 0;
                    o && (i.exception.values = function e(t, n, r, i, a, o, s, l) {
                        if (o.length >= r + 1) return o;
                        let u = [...o];
                        if ((0, eZ.b)(i[a])) {
                            nP(s, l, i);
                            let o = t(n, i[a]),
                                c = u.length;
                            nN(o, a, c, l), u = e(t, n, r, i[a], a, [o, ...u], o, c)
                        }
                        return nO(i) && i.errors.forEach((o, c) => {
                            if ((0, eZ.b)(o)) {
                                nP(s, l, i);
                                let d = t(n, o),
                                    f = u.length;
                                nN(d, `errors[${c}]`, f, l), u = e(t, n, r, o, a, [d, ...u], d, f)
                            }
                        }), u
                    }(e, t, r, a.originalException, n, i.exception.values, o, 0))
                }(tz, i.getOptions().stackParser, n, t, e, r)
            }
        }
    })(), {
        name: "Dedupe",
        processEvent(e) {
            if (e.type) return e;
            try {
                var n, r, i, a, o, s;
                let l, u, c, d;
                if (n = e, (r = t) && (i = n, a = r, l = i.message, u = a.message, (l || u) && (!l || u) && (l || !u) && l === u && eq(i, a) && eH(i, a) && 1 || (o = n, c = eV(s = r), d = eV(o), c && d && c.type === d.type && c.value === d.value && eq(o, s) && eH(o, s)))) return eg.f && ec.h.warn("Event dropped due to being a duplicate of previously captured event."), null
            } catch {}
            return t = e
        }
    }, {
        name: "HttpContext",
        preprocessEvent(e, t, n) {
            if (!tW.navigator && !tW.location && !tW.document) return;
            let {
                url: r,
                headers: i
            } = tY(), a = n.getDataCollectionOptions().httpHeaders.request, o = Object.entries(e.request?.headers ?? {}).filter(([e]) => !(e in i)), s = {
                ...t9(i, a),
                ...Object.fromEntries(o)
            };
            e.request = {
                url: r,
                ...e.request,
                ...Object.keys(s).length > 0 ? {
                    headers: s
                } : {
                    headers: void 0
                }
            }
        },
        processSpan(e, t) {
            if (!tW.navigator && !tW.location && !tW.document) return;
            let n = tY(),
                r = t9(n.headers, t.getDataCollectionOptions().httpHeaders.request),
                i = r.Referer,
                {
                    hostname: a,
                    protocol: o
                } = tW.location || {};
            nw(e, {
                [t4.r]: r["User-Agent"],
                [t4.e]: "file:" === o || "localhost" === a || "127.0.0.1" === a || "[::1]" === a || !!a?.endsWith(".localhost"),
                ...e.is_segment && {
                    [t4.V]: e.attributes?.[t4.n] !== "http.client" ? nt(n.url) : void 0,
                    [`${t4.y}.referer`]: i ? [i] : void 0
                }
            })
        }
    }, {
        name: "CultureContext",
        preprocessEvent(e) {
            let t = n_();
            t && (e.contexts = {
                ...e.contexts,
                culture: {
                    ...t,
                    ...e.contexts?.culture
                }
            })
        },
        processSegmentSpan(e) {
            let t = n_();
            t && nw(e, {
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
                if (void 0 === tW.document) return;
                (0, eh.M)({
                    ignoreDuration: !0
                });
                let e = !1;
                (e => {
                    let t = tq.requestIdleCallback || tq.setTimeout;
                    if (tq.document?.visibilityState === "hidden") e();
                    else {
                        let n = !1,
                            r = () => {
                                n || (e(), n = !0)
                            };
                        nb("visibilitychange", r, {
                            once: !0,
                            capture: !0
                        }), t(() => {
                            r(), ny("visibilitychange", r, {
                                capture: !0
                            })
                        })
                    }
                })(() => {
                    e || ((0, eh.L)(), e = !0)
                });
                let n = (0, em.V)(),
                    r = n.getUser();
                n.addScopeListener(t => {
                    let n = t.getUser();
                    (r?.id !== n?.id || r?.ip_address !== n?.ip_address) && (r = n, e && (0, eh.L)())
                }), "route" === t && nl(({
                    from: t,
                    to: n
                }) => {
                    t !== n && ((0, eh.M)({
                        ignoreDuration: !0
                    }), (0, eh.L)(), e = !0)
                })
            }
        }
    })()]
}
var nQ = e.i(516830);

function nG(e) {
    return (0, eZ.d)(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e ? "[SyntheticEvent]" : nV(e)
}
e.i(85971), e.i(108922); e.i(919610), e.i(185658); e.i(523299), e.i(89268); e.i(413007), e.i(798844), e.i(143829); e.i(597121); e.i(377656);
let nK = -1, nX = new Set, nY = e => {
    if ("hidden" === document.visibilityState) {
        if ("visibilitychange" === e.type)
            for (let e of nX) e();
        isFinite(nK) || (nK = "visibilitychange" === e.type ? e.timeStamp : 0, removeEventListener("prerenderingchange", nY, !0))
    }
}, nJ = new WeakMap, nZ = e => {
    document.prerendering ? addEventListener("prerenderingchange", e, !0) : e()
}, n0 = 0, n1 = () => a ? n0 : performance.interactionCount ?? 0; class n2 {
    u = 0;
    v = [];
    m = new Map;
    p;
    T;
    _() {
        return n1() - this.u
    }
    M() {
        this.u = n1(), this.v.length = 0, this.m.clear()
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
let n3 = e => {
    document.prerendering ? nZ(() => n3(e)) : "complete" !== document.readyState ? addEventListener("load", () => n3(e), !0) : setTimeout(e)
}; class n4 {
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
new n4(5), new n4(5); ed.f; ed.f; ed.f;
let n5 = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;

function n6(...e) {
    let t = "",
        n = !1;
    for (let r = e.length - 1; r >= -1 && !n; r--) {
        let i = r >= 0 ? e[r] : "/";
        i && (t = `${i}/${t}`, n = "/" === i.charAt(0))
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

function n8(e) {
    let t = 0;
    for (; t < e.length && "" === e[t]; t++);
    let n = e.length - 1;
    for (; n >= 0 && "" === e[n]; n--);
    return t > n ? [] : e.slice(t, n - t + 1)
}
let n9 = /\/_next\/static\/chunks\/(main-|main-app-|polyfills-|webpack-|framework-|framework\.)[0-9a-f]+\.js(:\d+)*$/, n7 = (new n4(100), ed.f), re = !1, rt = ed.f;

function rn(e) {
    return {
        ...e,
        path: "path" in e && Array.isArray(e.path) ? e.path.join(".") : void 0,
        keys: "keys" in e ? JSON.stringify(e.keys) : void 0,
        unionErrors: "unionErrors" in e ? JSON.stringify(e.unionErrors) : void 0
    }
}
let rr = "u" > typeof globalThis ? globalThis : e.g, ri = "_faroInternal", ra = {
    api: {
        pushLog: () => {},
        pushError: () => {},
        changeStacktraceParser: () => {},
        getStacktraceParser: () => void 0,
        pushMeasurement: () => {},
        pushTraces: () => {},
        getOTEL: () => void 0,
        getTraceContext: () => void 0,
        initOTEL: () => {},
        isOTELInitialized: () => !1,
        setUser: () => {},
        resetUser: () => {},
        setSession: () => {},
        resetSession: () => {},
        getSession: () => void 0,
        setView: () => {},
        getView: () => void 0,
        setPage: () => {},
        getPage: () => void 0,
        pushEvent: () => {},
        startUserAction: () => void 0,
        getActiveUserAction: () => void 0
    }
};

function ro(e) {
    return (ro = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function rs(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function rl(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? rs(Object(n), !0).forEach(function(t) {
            ! function(e, t, n) {
                var r;
                (r = function(e, t) {
                    if ("object" != ro(e) || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != ro(r)) return r;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(t, "string"), (t = "symbol" == ro(r) ? r : r + "") in e) ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }): e[t] = n
            }(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rs(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
    }
    return e
}

function ru(e, t) {
    return typeof e === t
}

function rc(e, t) {
    return Object.prototype.toString.call(e) === `[object ${t}]`
}

function rd(e, t) {
    try {
        return e instanceof t
    } catch (e) {
        return !1
    }
}
let rf = e => ru(e, "number") && !isNaN(e) || ru(e, "bigint"), rp = e => !ru(e, "null") && ru(e, "object"), rh = e => rc(e, "Array"), rm = "u" > typeof Event, rg = "u" > typeof Error;

function rv(e) {
    return null == e || (rh(e) || ru(e, "string") ? 0 === e.length : !!rp(e) && 0 === Object.keys(e).length)
}
let rb = new WeakMap;

function ry(e) {
    let t = rb.get(e);
    if (!t) {
        let n = [],
            r = [];
        t = {
            addSessionUpdateListener: e => {
                n.push(e)
            },
            removeSessionUpdateListener: e => {
                n = n.filter(t => t !== e)
            },
            notifySessionUpdate: e => {
                n.forEach(t => t(e))
            },
            shouldCapture: () => r.every(e => e()),
            addCaptureFilter: e => {
                r.push(e)
            },
            removeCaptureFilter: e => {
                r = r.filter(t => t !== e)
            }
        }, rb.set(e, t)
    }
    return t
}
var rw = class {
    constructor(e, t, n) {
        this.metas = e, this.transports = t, this.onActivate = n, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = e => {
            var t, n, r, i, a;
            let o = this.pending;
            if ("overrides" === e.type) {
                this.pending = {
                    reset: null != (i = null == o ? void 0 : o.reset) && i,
                    inheritOverrides: null == (a = null == o ? void 0 : o.inheritOverrides) || a,
                    session: rl(rl({}, null == o ? void 0 : o.session), {}, {
                        overrides: rl(rl({}, null == o ? void 0 : o.session.overrides), e.overrides)
                    })
                };
                return
            }
            let s = e.session,
                l = rv(s) || null != s && "id" in s && !s.id,
                u = null != (t = null == s ? void 0 : s.overrides) ? t : null == o ? void 0 : o.session.overrides;
            this.pending = {
                reset: l || !(null == s ? void 0 : s.id) && null != (n = null == o ? void 0 : o.reset) && n,
                inheritOverrides: (!!e.overrides || (null == s ? void 0 : s.overrides) === void 0) && (null == (r = null == o ? void 0 : o.inheritOverrides) || r),
                session: {
                    id: null == s ? void 0 : s.id,
                    attributes: (null == s ? void 0 : s.attributes) && rl({}, s.attributes),
                    overrides: e.overrides ? rl(rl({}, null == o ? void 0 : o.session.overrides), e.overrides) : u && rl({}, u)
                }
            }
        }, this.activate = () => {
            this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
    }
    initialize() {
        var e, t;
        this.waiting = !0, ry(this.metas).addSessionUpdateListener(this.recordUpdate), ry(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null == (e = (t = this.metas).addCaptureListener) || e.call(t, this.activate), this.activate()
    }
    destroy() {
        var e, t;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), ry(this.metas).removeSessionUpdateListener(this.recordUpdate), null == (e = (t = this.metas).removeCaptureListener) || e.call(t, this.activate), ry(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
    }
};

function r_(e = ra) {
    var t, n, r;
    let i = e.config.sessionTracking,
        a = null != (t = null != (n = null == i || null == (r = i.sampler) ? void 0 : r.call(i, {
            metas: e.metas.value
        })) ? n : null == i ? void 0 : i.samplingRate) ? t : 1,
        o = "number" == typeof a ? Math.min(1, Math.max(0, a)) : 0;
    if (!(o > 0)) return !1;
    if (1 === o) return !0;
    try {
        let e = "u" > typeof window ? window.crypto : void 0;
        if ("function" == typeof(null == e ? void 0 : e.getRandomValues)) {
            let t = new Uint32Array(1);
            return e.getRandomValues(t), t[0] / 0x100000000 < o
        }
    } catch (e) {}
    return Math.random() < o
}
let rS = "sessionStorage", rE = "localStorage";

function rk(e) {
    try {
        let t;
        t = window[e];
        let n = "__faro_storage_test__";
        return t.setItem(n, n), t.removeItem(n), !0
    } catch (n) {
        var t;
        return null == (t = ra.internalLogger) || t.info(`Web storage of type ${e} is not available. Reason: ${n}`), !1
    }
}

function rT(e, t) {
    return rN(t) ? window[t].getItem(e) : null
}

function rx(e, t, n) {
    if (rN(n)) try {
        window[n].setItem(e, t)
    } catch (e) {}
}

function rC(e, t) {
    rN(t) && window[t].removeItem(e)
}
let rO = rk(rE), rP = rk(rS);

function rN(e) {
    return e === rE ? rO : e === rS && rP
}
let rA = "com.grafana.faro.session", rL = {
    enabled: !0,
    persistent: !1,
    maxSessionPersistenceTime: 9e5
}, rR = "session_start", rI = "session_resume";

function rM() {
    return Date.now()
}

function rD() {
    return "u" > typeof performance && "function" == typeof performance.now ? performance.now() : Date.now()
}

function rz() {
    return (new Date).toISOString()
}

function rU(e) {
    return new Date(e).toISOString()
}

function rj(e, t) {
    if (e === t) return !0;
    if (ru(e, "number") && isNaN(e)) return ru(t, "number") && isNaN(t);
    let n = rh(e),
        r = rh(t);
    if (n !== r) return !1;
    if (n && r) {
        let n = e.length;
        if (n !== t.length) return !1;
        for (let r = n; 0 != r--;)
            if (!rj(e[r], t[r])) return !1;
        return !0
    }
    let i = rp(e),
        a = rp(t);
    if (i !== a) return !1;
    if (e && t && i && a) {
        let n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (let e of n)
            if (!r.includes(e)) return !1;
        for (let r of n)
            if (!rj(e[r], t[r])) return !1;
        return !0
    }
    return !1
}

function rF(e = 10) {
    let t = new Uint32Array(e),
        n = "u" > typeof globalThis ? globalThis.crypto : void 0;
    if (null == n ? void 0 : n.getRandomValues) n.getRandomValues(t);
    else
        for (let n = 0; n < e; n++) t[n] = Math.floor(0x100000000 * Math.random());
    let r = "";
    for (let n = 0; n < e; n++) r += "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789" [t[n] % 59];
    return r
}

function r$({
    sessionId: e,
    started: t,
    lastActivity: n,
    isSampled: r = !0
} = {}, i = ra) {
    var a;
    let o = rM(),
        s = null == (a = i.config) || null == (a = a.sessionTracking) ? void 0 : a.generateSessionId;
    return null == e && (e = "function" == typeof s ? s() : rF()), {
        sessionId: e,
        lastActivity: null != n ? n : o,
        started: null != t ? t : o,
        isSampled: r
    }
}

function rB(e) {
    if (null == e) return !1;
    let t = rM();
    return t - e.started < 144e5 && t - e.lastActivity < 9e5
}

function rH({
    fetchUserSession: e,
    storeUserSession: t,
    adoptSession: n,
    updateInterval: r = 0
}, i = ra) {
    let a = 0;
    return function({
        forceSessionExtend: o = !1,
        refreshActivity: s = !0
    } = {}) {
        var l, u, c, d, f, p;
        if (!e || !t) return;
        let h = rM();
        if (!o && h < a && a - h <= r) return;
        let m = i.config.sessionTracking,
            g = null == m ? void 0 : m.persistent;
        if (g && !rO || !g && !rP) return;
        let v = e();
        if (a = Math.min(h + r, (null != (l = null == v ? void 0 : v.started) ? l : h) + 144e5, (null != (u = null == v ? void 0 : v.lastActivity) ? u : h) + 9e5), !1 === o && rB(v)) {
            s && t(rl(rl({}, v), {}, {
                lastActivity: h
            }));
            let e = null == (c = i.metas.value.session) ? void 0 : c.id;
            null != n && null != v.sessionMeta && v.sessionId !== e && n(v.sessionMeta)
        } else {
            let e = rV(r$({
                isSampled: r_(i)
            }, i), v, i);
            a = h + r, t(e), null == (d = i.api) || d.setSession(e.sessionMeta), null == m || null == (f = m.onSessionChange) || f.call(m, null != (p = null == v ? void 0 : v.sessionMeta) ? p : null, e.sessionMeta)
        }
    }
}

function rq({
    fetchUserSession: e,
    storeUserSession: t,
    updateInterval: n = 0
}) {
    let r, i = 0;
    return a => {
        let o = rM();
        if (a === r && o < i && i - o <= n) return;
        r = a, i = o + n;
        let s = e();
        (null == s ? void 0 : s.sessionId) === a && rB(s) && t(rl(rl({}, s), {}, {
            lastActivity: o
        }))
    }
}

function rV(e, t, n = ra) {
    var r, i, a, o, s, l;
    let u = rl(rl({}, e), {}, {
            sessionMeta: {
                id: e.sessionId,
                attributes: function(e) {
                    let t = {};
                    for (let n of Object.keys(e)) {
                        let r = e[n];
                        void 0 !== r && (t[n] = r)
                    }
                    return t
                }(rl(rl(rl({}, null == (r = n.config.sessionTracking) || null == (r = r.session) ? void 0 : r.attributes), null != (i = null == (a = n.metas.value.session) ? void 0 : a.attributes) ? i : {}), {}, {
                    isSampled: e.isSampled.toString()
                }))
            }
        }),
        c = null != (o = null == (s = n.metas.value.session) ? void 0 : s.overrides) ? o : null == t || null == (l = t.sessionMeta) ? void 0 : l.overrides;
    rv(c) || (u.sessionMeta.overrides = c);
    let d = null == t ? void 0 : t.sessionId;
    return null != d && (u.sessionMeta.attributes.previousSession = d), u
}

function rW({
    fetchUserSession: e,
    storeUserSession: t
}, n = ra) {
    let r = !1;
    return function(i) {
        if (r) return;
        let a = i.session,
            o = e(),
            s = null == a ? void 0 : a.id,
            l = null == a ? void 0 : a.attributes,
            u = null == a ? void 0 : a.overrides,
            c = null == o ? void 0 : o.sessionMeta,
            d = null == c ? void 0 : c.overrides,
            f = !!u && !rj(u, d),
            p = !!l && !rj(l, null == c ? void 0 : c.attributes);
        if (a && s !== (null == o ? void 0 : o.sessionId) || p || f) {
            var h, m;
            let e = null != o && s === o.sessionId,
                i = e ? rV(o, o, n) : rV(r$({
                    sessionId: s,
                    isSampled: r_(n)
                }, n), o, n),
                a = null == o || null == (h = o.sessionMeta) || null == (h = h.attributes) ? void 0 : h.previousSession;
            e && null != a && a !== i.sessionId && (i.sessionMeta.attributes.previousSession = a), (null == (m = i.sessionMeta.attributes) ? void 0 : m.previousSession) === i.sessionId && delete i.sessionMeta.attributes.previousSession, t(i),
                function(e, t, n = {}, r = {}) {
                    var i, a, o;
                    if (!t) return;
                    let s = n.serviceName,
                        l = null != (i = null != (a = r.serviceName) ? a : null == (o = e.metas.value.app) ? void 0 : o.name) ? i : "";
                    s && s !== l && e.api.pushEvent("service_name_override", {
                        serviceName: s,
                        previousServiceName: l
                    })
                }(n, f, u, d), r = !0;
            try {
                n.api.setSession(i.sessionMeta)
            } finally {
                r = !1
            }
        }
    }
}

function rQ(e = {}) {
    let t;
    return JSON.stringify(null != e ? e : {}, (t = new WeakSet, function(e, n) {
        if (rp(n) && null !== n) {
            if (t.has(n)) return null;
            t.add(n)
        }
        return n
    }))
}

function rG(e = {}) {
    let t = {};
    for (let [n, r] of Object.entries(e)) t[n] = rp(r) && null !== r ? rQ(r) : String(r);
    return t
}
var rK = class e {
    constructor(t = ra) {
        this.context = t, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = e => {
            this.adopting = !0;
            try {
                var t;
                null == (t = this.context.api) || t.setSession(e)
            } finally {
                this.adopting = !1
            }
        }, this.updateSession = ({
            refreshActivity: e = !0
        } = {}) => this.updateUserSession({
            refreshActivity: e
        }), this.recordActivity = rq({
            fetchUserSession: e.fetchUserSession,
            storeUserSession: e.storeUserSession,
            updateInterval: 1e3
        }), this.updateUserSession = rH({
            fetchUserSession: e.fetchUserSession,
            storeUserSession: e.storeUserSession,
            adoptSession: this.adoptSession,
            updateInterval: 1e3
        }, t), this.init()
    }
    static removeUserSession() {
        rC(rA, e.storageTypeLocal)
    }
    static storeUserSession(t) {
        rx(rA, rQ(t), e.storageTypeLocal)
    }
    static fetchUserSession() {
        let t = rT(rA, e.storageTypeLocal);
        return t ? JSON.parse(t) : null
    }
    init() {
        document.addEventListener("visibilitychange", () => {
            if ("visible" === document.visibilityState) {
                var e;
                this.updateSession({
                    refreshActivity: !1
                });
                let t = null == (e = this.context.api) || null == (e = e.getSession()) ? void 0 : e.id;
                t && this.recordActivity(t)
            }
        }), this.context.metas.addListener(rW({
            fetchUserSession: e.fetchUserSession,
            storeUserSession: e.storeUserSession
        }, this.context))
    }
}; rK.storageTypeLocal = rE;
var rX = class e {
    constructor(t = ra) {
        this.context = t, this.isAdopting = () => !1, this.updateSession = ({
            refreshActivity: e = !0
        } = {}) => this.updateUserSession({
            refreshActivity: e
        }), this.recordActivity = rq({
            fetchUserSession: e.fetchUserSession,
            storeUserSession: e.storeUserSession,
            updateInterval: 1e3
        }), this.updateUserSession = rH({
            fetchUserSession: e.fetchUserSession,
            storeUserSession: e.storeUserSession,
            updateInterval: 1e3
        }, t), this.init()
    }
    static removeUserSession() {
        rC(rA, e.storageTypeSession)
    }
    static storeUserSession(t) {
        rx(rA, rQ(t), e.storageTypeSession)
    }
    static fetchUserSession() {
        let t = rT(rA, e.storageTypeSession);
        return t ? JSON.parse(t) : null
    }
    init() {
        document.addEventListener("visibilitychange", () => {
            if ("visible" === document.visibilityState) {
                var e;
                this.updateSession({
                    refreshActivity: !1
                });
                let t = null == (e = this.context.api) || null == (e = e.getSession()) ? void 0 : e.id;
                t && this.recordActivity(t)
            }
        }), this.context.metas.addListener(rW({
            fetchUserSession: e.fetchUserSession,
            storeUserSession: e.storeUserSession
        }, this.context))
    }
};

function rY(e) {
    return (null == e ? void 0 : e.persistent) ? rK : rX
}

function rJ() {}
rX.storageTypeSession = rS;
let rZ = {
    debug: rJ,
    error: rJ,
    info: rJ,
    prefix: "Faro",
    warn: rJ
};

function r0(e) {
    return (r0 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function r1(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function r2(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? r1(Object(n), !0).forEach(function(t) {
            ! function(e, t, n) {
                var r;
                (r = function(e, t) {
                    if ("object" != r0(e) || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != r0(r)) return r;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(t, "string"), (t = "symbol" == r0(r) ? r : r + "") in e) ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }): e[t] = n
            }(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r1(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
    }
    return e
}
let r3 = r2({}, console);
var r4 = class {
    constructor() {
        this.unpatchedConsole = r3, this.internalLogger = rZ, this.config = {}, this.metas = {}
    }
    logDebug(...e) {
        this.internalLogger.debug(`${this.name}
`, ...e)
    }
    logInfo(...e) {
        this.internalLogger.info(`${this.name}
`, ...e)
    }
    logWarn(...e) {
        this.internalLogger.warn(`${this.name}
`, ...e)
    }
    logError(...e) {
        this.internalLogger.error(`${this.name}
`, ...e)
    }
}, r5 = class extends r4 {
    constructor(...e) {
        super(...e), this.api = {}, this.transports = {}
    }
};
let r6 = "2.14.0";
var r8 = class extends r5 {
    constructor(...e) {
        super(...e), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = r6, this.isAdoptingSession = () => !1
    }
    sendSessionStartEvent(e) {
        var t, n;
        let r = e.session;
        if (r && r.id !== (null == (t = this.notifiedSession) ? void 0 : t.id)) {
            if (this.isAdoptingSession()) {
                this.notifiedSession = r;
                return
            }
            if (this.notifiedSession && this.notifiedSession.id === (null == (n = r.attributes) ? void 0 : n.previousSession)) {
                this.api.pushEvent("session_extend", {}, void 0, {
                    skipDedupe: !0
                }), this.notifiedSession = r;
                return
            }
            this.notifiedSession = r, this.api.pushEvent(rR, {}, void 0, {
                skipDedupe: !0
            })
        }
    }
    createInitialSession(e, t, n) {
        var r, i, a, o, s, l, u, c, d;
        let f, p, h = null == n ? void 0 : n.session,
            m = e.fetchUserSession();
        if (t.persistent && t.maxSessionPersistenceTime && m) {
            let e = rM();
            m.lastActivity < e - t.maxSessionPersistenceTime && (rK.removeUserSession(), m = null)
        }
        let g = rB(m);
        if ((null == n ? void 0 : n.reset) || !g || (null == h ? void 0 : h.id) && h.id !== (null == m ? void 0 : m.sessionId)) {
            let e = (p = r$({
                    sessionId: (null == n ? void 0 : n.reset) ? void 0 : null != (a = null == h ? void 0 : h.id) ? a : null == (o = t.session) ? void 0 : o.id,
                    isSampled: r_(this)
                }, this)).sessionId,
                r = n && g ? null == m || null == (s = m.sessionMeta) ? void 0 : s.overrides : void 0,
                i = r ? rl(rl({}, null == (l = t.session) ? void 0 : l.overrides), r) : null == (u = t.session) ? void 0 : u.overrides;
            p.sessionMeta = rl({
                id: e,
                attributes: rl({
                    isSampled: p.isSampled.toString()
                }, null == (c = t.session) ? void 0 : c.attributes)
            }, i ? {
                overrides: i
            } : {}), f = rR
        } else {
            let e = null == m ? void 0 : m.sessionId;
            p = r$({
                sessionId: e,
                isSampled: m.isSampled || !1,
                started: null == m ? void 0 : m.started
            }, this);
            let n = null == m ? void 0 : m.sessionMeta,
                a = rl(rl({}, null == (r = t.session) ? void 0 : r.overrides), null == n ? void 0 : n.overrides);
            p.sessionMeta = rl(rl({}, t.session), {}, {
                id: e,
                attributes: rl(rl(rl({}, null == (i = t.session) ? void 0 : i.attributes), null == n ? void 0 : n.attributes), {}, {
                    isSampled: p.isSampled.toString()
                }),
                overrides: a
            }), f = rI
        }
        if (h && (p.sessionMeta = rl(rl({}, p.sessionMeta), {}, {
                attributes: rl(rl(rl({}, null == (d = p.sessionMeta) ? void 0 : d.attributes), h.attributes), {}, {
                    isSampled: p.isSampled.toString()
                })
            }), h.overrides)) {
            let e = (null == n ? void 0 : n.inheritOverrides) ? rl(rl({}, p.sessionMeta.overrides), h.overrides) : h.overrides;
            Object.keys(e).length > 0 ? p.sessionMeta.overrides = e : delete p.sessionMeta.overrides
        }
        return {
            initialSession: p,
            lifecycleType: f
        }
    }
    registerBeforeSendHook(e) {
        var t;
        this.beforeSendHook = t => {
            var n, r, i, a;
            let o = null == (n = t.meta.session) ? void 0 : n.id;
            o && !this.transports.isPaused() && e(o);
            let s = null == (r = t.meta.session) ? void 0 : r.attributes;
            if (s && (null == s ? void 0 : s.isSampled) === "true") {
                let e = JSON.parse(JSON.stringify(t)),
                    n = null == (i = e.meta.session) ? void 0 : i.attributes;
                return null == n || delete n.isSampled, 0 === Object.keys(null != n ? n : {}).length && (null == (a = e.meta.session) || delete a.attributes), e
            }
            return null
        }, null == (t = this.transports) || t.addBeforeSendHooks(this.beforeSendHook)
    }
    initialize() {
        var e;
        this.logDebug("init session instrumentation");
        let t = document.prerendering;
        if ((null == (e = this.config.sessionTracking) ? void 0 : e.enabled) && (t || this.prerenderSession)) {
            null != this.prerenderSession || (this.prerenderSession = new rw(this.metas, this.transports, e => {
                this.prerenderSession = void 0, this.initializeSession(e)
            })), this.prerenderSession.initialize();
            return
        }
        this.initializeSession()
    }
    initializeSession(e) {
        let t = this.config.sessionTracking;
        if (null == t ? void 0 : t.enabled) {
            var n, r;
            let i = rY(t),
                a = new i(this);
            this.isAdoptingSession = a.isAdopting, this.registerBeforeSendHook(a.recordActivity);
            let {
                initialSession: o,
                lifecycleType: s
            } = this.createInitialSession(i, t, e);
            i.storeUserSession(o);
            let l = o.sessionMeta;
            this.notifiedSession = l, this.api.setSession(l), this.captureListener = () => {
                this.transports.isPaused() || a.updateSession({
                    refreshActivity: !1
                })
            }, null == (n = (r = this.metas).addCaptureListener) || n.call(r, this.captureListener), s === rR && this.api.pushEvent(rR, {}, void 0, {
                skipDedupe: !0
            }), s === rI && this.api.pushEvent(rI, {}, void 0, {
                skipDedupe: !0
            })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
    }
    destroy() {
        var e, t, n;
        null == (e = this.prerenderSession) || e.destroy(), this.captureListener && (null == (t = (n = this.metas).removeCaptureListener) || t.call(n, this.captureListener), this.captureListener = void 0), this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
    }
};
let r9 = "http-request-start", r7 = "http-request-end";
var ie = class e {
    constructor() {
        this.subscribers = []
    }
    subscribe(e) {
        return this.subscribers.push(e), {
            unsubscribe: () => this.unsubscribe(e)
        }
    }
    unsubscribe(e) {
        this.subscribers = this.subscribers.filter(t => t !== e)
    }
    notify(e) {
        this.subscribers.forEach(t => t(e))
    }
    first() {
        let t = new e,
            n = e => {
                t.notify(e), r.unsubscribe()
            },
            r = this.subscribe(n),
            i = t.unsubscribe.bind(t);
        return this.withUnsubscribeOverride(t, i, n)
    }
    takeWhile(t) {
        let n = new e,
            r = e => {
                t(e) ? n.notify(e) : n.unsubscribe(r)
            };
        this.subscribe(r);
        let i = n.unsubscribe.bind(n);
        return this.withUnsubscribeOverride(n, i, r)
    }
    filter(t) {
        let n = new e,
            r = e => {
                t(e) && n.notify(e)
            };
        this.subscribe(r);
        let i = n.unsubscribe.bind(n);
        return this.withUnsubscribeOverride(n, i, r)
    }
    merge(...t) {
        let n = new e,
            r = [];
        t.forEach(e => {
            let t = e.subscribe(e => {
                n.notify(e)
            });
            r.push(t)
        });
        let i = n.unsubscribeAll.bind(n);
        return n.unsubscribe = () => {
            r.forEach(e => e.unsubscribe()), i()
        }, n
    }
    withUnsubscribeOverride(e, t, n) {
        return e.unsubscribe = e => {
            t(e), this.unsubscribe(n)
        }, e
    }
    unsubscribeAll() {
        this.subscribers = []
    }
};
let it = ((j = {}).TRACE = "trace", j.DEBUG = "debug", j.INFO = "info", j.LOG = "log", j.WARN = "warn", j.ERROR = "error", j), ir = ["trace", "debug", "info", "log", "warn", "error"], ii = !1, ia = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i, io = e => e.map(e => rp(e) ? rQ(e) : String(e)).join(" ");

function is(e, t, n, r) {
    let i = {
        filename: e || document.location.href,
        function: t || "?"
    };
    return void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i
}
let il = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, iu = /\((\S*)(?::(\d+))(?::(\d+))\)/, ic = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, id = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, ip = "safari-extension", ih = /Minified React error #\d+;/i;

function im(e, t) {
    let n = null == e ? void 0 : e.includes(ip),
        r = !n && (null == e ? void 0 : e.includes("safari-web-extension"));
    return n || r ? [(null == e ? void 0 : e.includes("@")) ? e.split("@")[0] : e, n ? `${ip}:${t}` : `safari-web-extension:${t}`] : [e, t]
}

function ig(e) {
    let t = [];
    e.stacktrace ? t = e.stacktrace.split("\n").filter((e, t) => t % 2 == 0) : e.stack && (t = e.stack.split("\n"));
    let n = t.reduce((t, n, r) => {
        let i, a, o, s, l;
        if (n.length > 1024) return t;
        if (i = il.exec(n)) {
            if (a = i[1], o = i[2], s = i[3], l = i[4], null == o ? void 0 : o.startsWith("eval")) {
                let e = iu.exec(o);
                e && (o = e[1], s = e[2], l = e[3])
            }
            o = (null == o ? void 0 : o.startsWith("address at ")) ? o.substring(11) : o, [a, o] = im(a, o)
        } else if (i = ic.exec(n)) {
            if (a = i[1], o = i[3], s = i[4], l = i[5], o && o.includes(" > eval")) {
                let e = id.exec(o);
                e && (a = a || "eval", o = e[1], s = e[2])
            } else 0 === r && !l && rf(e.columnNumber) && (l = String(e.columnNumber + 1));
            [a, o] = im(a, o)
        }
        return (o || a) && t.push(is(o, a, s ? Number(s) : void 0, l ? Number(l) : void 0)), t
    }, []);
    return ih.test(e.message) ? n.slice(1) : n
}

function iv(e) {
    let t, n, r, i, a = [];
    if (rc(e, "ErrorEvent") && e.error) t = e.error.message, n = e.error.name, a = ig(e.error);
    else if ((r = rc(e, "DOMError")) || rc(e, "DOMException")) {
        let {
            name: i,
            message: a
        } = e;
        n = null != i ? i : r ? "DOMError" : "DOMException", t = a ? `${n}: ${a}` : n
    } else if (rg && rd(e, Error)) n = e.name, t = e.message, a = ig(e);
    else(rp(e) || (i = rm && rd(e, Event))) && (n = i ? e.constructor.name : void 0, t = `Non-Error exception captured with keys: ${Object.keys(e)}`);
    return [t, n, a]
}

function ib(e) {
    let t, n, [r, i, a, o, s] = e,
        l = [],
        u = ru(r, "string"),
        c = is(i, "?", a, o);
    if (s || !u)[t, n, l] = iv(null != s ? s : r), 0 === l.length && (l = [c]);
    else if (u) {
        var d, f;
        let e, i;
        [t, n] = (i = null != (d = null == (e = r.match(ia)) ? void 0 : e[1]) ? d : "Error", [null != (f = null == e ? void 0 : e[2]) ? f : r, i]), l = [c]
    }
    return {
        value: t,
        type: n,
        stackFrames: l
    }
}

function iy(e, t) {
    let n;
    return (n = e[0], rg && rd(n, Error)) ? ib(e) : {
        value: t(e)
    }
}
let iw = e => e.map(e => {
    try {
        return String(e)
    } catch (e) {
        return ""
    }
}).join(" ");
var i_ = class e extends r5 {
    constructor(...e) {
        super(...e), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = r6, this.errorSerializer = iw
    }
    initialize() {
        var t, n;
        let r = this.config.consoleInstrumentation,
            i = (null == r ? void 0 : r.serializeErrors) || !!(null == r ? void 0 : r.errorSerializer);
        this.errorSerializer = i ? null != (t = null == r ? void 0 : r.errorSerializer) ? t : io : iw;
        let a = null != (n = null == r ? void 0 : r.disabledLevels) ? n : e.defaultDisabledLevels,
            s = function(e) {
                if (o || (o = new ie), !ii) {
                    let t = null != e ? e : r3;
                    ir.forEach(e => {
                        console[e] = (...n) => {
                            var r;
                            o.notify({
                                type: "console",
                                level: e,
                                args: n
                            }), null == (r = t[e]) || r.apply(console, n)
                        }
                    }), ii = !0
                }
                return o
            }(this.unpatchedConsole);
        this.subscription = s.subscribe(({
            level: t,
            args: n
        }) => {
            if (!a.includes(t)) try {
                if (t !== it.ERROR || (null == r ? void 0 : r.consoleErrorAsLog))
                    if (t === it.ERROR && (null == r ? void 0 : r.consoleErrorAsLog)) {
                        let {
                            value: r,
                            type: i,
                            stackFrames: a
                        } = iy(n, this.errorSerializer);
                        this.api.pushLog(r ? [e.consoleErrorPrefix + r] : n, {
                            level: t,
                            context: {
                                value: null != r ? r : "",
                                type: null != i ? i : "",
                                stackFrames: (null == a ? void 0 : a.length) ? io(a) : ""
                            }
                        })
                    } else this.api.pushLog(n, {
                        level: t
                    });
                else {
                    let {
                        value: t,
                        type: r,
                        stackFrames: i
                    } = iy(n, this.errorSerializer);
                    if (t && !r && !i) return void this.api.pushError(Error(e.consoleErrorPrefix + t));
                    this.api.pushError(Error(e.consoleErrorPrefix + t), {
                        type: r,
                        stackFrames: i
                    })
                }
            } catch (e) {
                this.logError(e)
            }
        })
    }
    destroy() {
        var e;
        null == (e = this.subscription) || e.unsubscribe(), this.subscription = void 0
    }
}; i_.defaultDisabledLevels = [it.DEBUG, it.TRACE, it.LOG], i_.consoleErrorPrefix = "console.error: ";
let iS = [];
var iE = class extends r5 {
    constructor(...e) {
        super(...e), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = r6
    }
    initialize() {
        var e, t;
        let n, r;
        this.logDebug("Initializing"), e = this.api, n = window.onerror, window.onerror = (...t) => {
            try {
                let {
                    value: n,
                    type: r,
                    stackFrames: i
                } = ib(t), a = t[4];
                if (n) {
                    let t = {
                        type: r,
                        stackFrames: i
                    };
                    null != a && (t.originalError = a), e.pushError(Error(n), t)
                }
            } finally {
                null == n || n.apply(window, t)
            }
        }, t = this.api, r = e => {
            var n, r;
            let i, a, o, s = e;
            s.reason ? s = e.reason : (null == (n = e.detail) ? void 0 : n.reason) && (s = null == (r = e.detail) ? void 0 : r.reason);
            let l = [];
            rp(i = s) || ru(i, "function") ? [a, o, l] = iv(s) : (a = `Non-Error promise rejection captured with value: ${String(s)}`, o = "UnhandledRejection"), a && t.pushError(Error(a), {
                type: o,
                stackFrames: l
            })
        }, window.addEventListener("unhandledrejection", r), iS.push(r)
    }
};
let ik = "unknown";
var iT = class extends r5 {
    constructor(...e) {
        super(...e), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = r6, this.waitingForActivation = !1, this.sendViewChangedEvent = e => {
            var t, n, r, i;
            if (this.waitingForActivation || document.prerendering) return;
            let a = e.view;
            if (a && a.name !== (null == (t = this.notifiedView) ? void 0 : t.name)) {
                let e = null != (n = null == (r = this.notifiedView) ? void 0 : r.name) ? n : ik;
                this.notifiedView = a, this.api.pushEvent("view_changed", {
                    fromView: e,
                    toView: null != (i = a.name) ? i : ik
                }, void 0, {
                    skipDedupe: !0
                })
            }
        }, this.prerenderListener = () => {
            window.queueMicrotask(() => {
                this.waitingForActivation && (this.waitingForActivation = !1, this.sendViewChangedEvent(this.metas.value))
            })
        }
    }
    initialize() {
        this.metas.addListener(this.sendViewChangedEvent), document.prerendering && (this.waitingForActivation = !0, document.addEventListener("prerenderingchange", this.prerenderListener, {
            once: !0
        }))
    }
    destroy() {
        this.waitingForActivation = !1, this.metas.removeListener(this.sendViewChangedEvent), document.removeEventListener("prerenderingchange", this.prerenderListener)
    }
}; class ix {
    t;
    o = 0;
    i = [];
    l(e) {
        if (e.hadRecentInput) return;
        let t = this.i[0],
            n = this.i.at(-1);
        this.o && t && n && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (this.o += e.value, this.i.push(e)) : (this.o = e.value, this.i = [e]), this.t?.(e)
    }
}
let iC = () => {
    let e = performance.getEntriesByType("navigation")[0];
    if (e && e.responseStart > 0 && e.responseStart < performance.now()) return e
}, iO = e => {
    if ("loading" === document.readyState) return "loading";
    let t = iC();
    if (t) {
        if (e < t.domInteractive) return "loading";
        if (0 === t.domContentLoadedEventStart || e < t.domContentLoadedEventStart) return "dom-interactive";
        if (0 === t.domComplete || e < t.domComplete) return "dom-content-loaded"
    }
    return "complete"
}, iP = e => {
    let t = e.nodeName;
    return 1 === e.nodeType ? t.toLowerCase() : t.toUpperCase().replace(/^#/, "")
}, iN = e => {
    let t = "";
    try {
        for (; 9 !== e?.nodeType;) {
            let n = e,
                r = n.id ? "#" + n.id : [iP(n), ...Array.from(n.classList ?? []).sort()].join(".");
            if (t.length + r.length > 99) return t || r;
            if (t = t ? r + ">" + t : r, n.id) break;
            e = n.parentNode
        }
    } catch {}
    return t
}, iA = new WeakMap;

function iL(e, t) {
    let n = iA.get(t);
    return n || (n = new WeakMap, iA.set(t, n)), n.get(e) || n.set(e, new t), n.get(e)
}
let iR = -1, iI = e => {
    addEventListener("pageshow", t => {
        t.persisted && (iR = t.timeStamp, e(t))
    }, !0)
}, iM = (e, t, n, r) => {
    let i, a;
    return o => {
        let s;
        t.value >= 0 && (o || r) && ((a = t.value - (i ?? 0)) || void 0 === i) && (i = t.value, t.delta = a, s = t.value, t.rating = s > n[1] ? "poor" : s > n[0] ? "needs-improvement" : "good", e(t))
    }
}, iD = e => {
    requestAnimationFrame(() => requestAnimationFrame(() => e()))
}, iz = () => iC()?.activationStart ?? 0, iU = -1, ij = new Set, iF = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0, i$ = e => {
    if ("hidden" === document.visibilityState) {
        if ("visibilitychange" === e.type)
            for (let e of ij) e();
        isFinite(iU) || (iU = "visibilitychange" === e.type ? e.timeStamp : 0, removeEventListener("prerenderingchange", i$, !0))
    }
}, iB = (e = !1) => {
    if (e && (iU = 1 / 0), iU < 0) {
        let e = iz();
        iU = (document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find(t => "hidden" === t.name && t.startTime >= e)?.startTime) ?? iF(), addEventListener("visibilitychange", i$, !0), addEventListener("prerenderingchange", i$, !0), iI(() => {
            setTimeout(() => {
                iU = iF()
            })
        })
    }
    return {
        get firstHiddenTime() {
            return iU
        },
        onHidden(e) {
            ij.add(e)
        }
    }
}, iH = (e, t = -1, n, r = 0, i, a, o) => {
    let s = iC(),
        l = s?.navigationId || 0,
        u = "navigate";
    return n ? u = n : iR >= 0 ? u = "back-forward-cache" : s && (document.prerendering || iz() > 0 ? u = "prerender" : document.wasDiscarded ? u = "restore" : s.type && (u = s.type.replace(/_/g, "-"))), {
        name: e,
        value: t,
        rating: "good",
        delta: 0,
        entries: [],
        id: `v6-${Date.now()}-${Math.floor(0x82f79cd8fff*Math.random())+1e12}`,
        navigationType: u,
        navigationId: r || l,
        navigationInteractionId: i,
        navigationURL: a || s?.name,
        navigationStartTime: o || 0
    }
}, iq = (e, t, n = {}) => {
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
}, iV = e => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && e && e.reportSoftNavs, iW = (e, t) => {
    if (e.set(t.navigationId, t), e.size > 2) {
        let t = e.keys().next().value;
        void 0 !== t && e.delete(t)
    }
}, iQ = e => {
    let t = !1;
    return () => {
        t || (e(), t = !0)
    }
}; class iG {
    u
}
let iK = e => {
    document.prerendering ? addEventListener("prerenderingchange", e, !0) : e()
}, iX = [1800, 3e3], iY = (e, t = {}) => {
    let n = iV(t);
    iK(() => {
        let r = iL(t, iG),
            i = iB(),
            a, o = iH("FCP"),
            s = iq(["paint"], e => {
                for (let t of e) "first-contentful-paint" === t.name && (s.disconnect(), t.startTime < i.firstHiddenTime && (o.value = Math.max(t.startTime - iz(), 0), o.entries.push(t), o.navigationId = t.navigationId || o.navigationId, a(!0)))
            });
        s && (a = iM(e, o, iX, t.reportAllChanges), iI(n => {
            a = iM(e, o = iH("FCP", -1, "back-forward-cache", o.navigationId, o.navigationInteractionId, o.navigationURL, iR), iX, t.reportAllChanges), iD(() => {
                o.value = performance.now() - n.timeStamp, a(!0)
            })
        })), n && iq(["soft-navigation"], n => {
            n.forEach(n => {
                r.u && n.navigationId && iW(r.u, n), (a = iM(e, o = iH("FCP", Math.max((n.presentationTime || n.paintTime || 0) - n.startTime, 0), "soft-navigation", n.navigationId, n.interactionId, n.name, n.startTime), iX, t.reportAllChanges))(!0)
            })
        }, t)
    })
}, iJ = [.1, .25], iZ = e => e.find(e => 1 === e.node?.nodeType) || e[0], i0 = 0, i1 = 1 / 0, i2 = 0, i3 = e => {
    for (let t of e) t.interactionId && (i1 = Math.min(i1, t.interactionId), i0 = (i2 = Math.max(i2, t.interactionId)) ? (i2 - i1) / 7 + 1 : 0)
}, i4 = () => s ? i0 : performance.interactionCount ?? 0; class i5 {
    h = 0;
    v = [];
    p = new Map;
    m;
    M;
    T() {
        return i4() - this.h
    }
    D() {
        this.h = i4(), this.v.length = 0, this.p.clear()
    }
    S(e) {
        let t = this.T(),
            n = Math.min(this.v.length - 1, Math.floor(t / 50));
        return t && -1 === n && ("soft-navigation" === e || "back-forward-cache" === e) ? {
            k: 8,
            id: -1,
            entries: []
        } : this.v[n]
    }
    l(e) {
        if (this.m?.(e), !e.interactionId) return;
        let t = this.v.at(-1),
            n = this.p.get(e.interactionId);
        if (n || this.v.length < 10 || e.duration > t.k) {
            if (n ? e.duration > n.k ? (n.entries = [e], n.k = e.duration) : e.duration === n.k && e.startTime === n.entries[0].startTime && n.entries.push(e) : (n = {
                    id: e.interactionId,
                    entries: [e],
                    k: e.duration
                }, this.p.set(n.id, n), this.v.push(n)), this.v.sort((e, t) => t.k - e.k), this.v.length > 10)
                for (let e of this.v.splice(10)) this.p.delete(e.id);
            this.M?.(n)
        }
    }
}
let i6 = e => {
    let t = 1e3 * ("requestIdleCallback" in globalThis),
        n = globalThis.requestIdleCallback || setTimeout,
        r = globalThis.cancelIdleCallback || clearTimeout;
    if ("hidden" === document.visibilityState) e();
    else {
        let i = iQ(e),
            a = -1,
            o = () => {
                r(a), i()
            };
        addEventListener("visibilitychange", o, {
            once: !0,
            capture: !0
        }), a = n(() => {
            removeEventListener("visibilitychange", o, {
                capture: !0
            }), i()
        }, {
            timeout: t
        })
    }
}, i8 = [200, 500]; class i9 {
    m;
    u;
    l(e) {
        this.m?.(e)
    }
}
let i7 = [2500, 4e3], ae = 50, at = []; iq(["resource"], e => {
    for (let t of e) at.push(t), at.length > ae && at.shift()
});
let an = [800, 1800], ar = e => {
    document.prerendering ? iK(() => ar(e)) : "complete" !== document.readyState ? addEventListener("load", () => ar(e), !0) : setTimeout(e)
}, ai = "load_state", aa = "time_to_first_byte";
var ao = class {
    constructor(e, t) {
        this.corePushMeasurement = e, this.webVitalConfig = t
    }
    initialize() {
        this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
    }
    measureCLS() {
        var e;
        ((e, t = {}) => {
            let n = iL(t = Object.assign({}, t), ix),
                r = new WeakMap;
            n.t = e => {
                if (e?.sources?.length) {
                    let n = iZ(e.sources),
                        i = n?.node;
                    if (i) {
                        let e = t.generateTarget?.(i) ?? iN(i);
                        r.set(n, e)
                    }
                }
            }, ((e, t = {}) => {
                let n = iB();
                iY(iQ(() => {
                    let r, i = iH("CLS", 0),
                        a = iL(t, ix),
                        o = (n, o, s, l, u) => {
                            i = iH("CLS", 0, n, o, s, l, u), a.o = 0, r = iM(e, i, iJ, t.reportAllChanges)
                        },
                        s = (e = !1) => {
                            a.o > i.value && (i.value = a.o, i.entries = a.i), r(e)
                        },
                        l = e => {
                            s(!0), o("soft-navigation", e.navigationId, e.interactionId, e.name, e.startTime)
                        },
                        u = e => {
                            for (let t of e) "soft-navigation" !== t.entryType ? a.l(t) : l(t);
                            s()
                        },
                        c = ["layout-shift"];
                    iV(t) && c.push("soft-navigation");
                    let d = iq(c, u);
                    d && (r = iM(e, i, iJ, t.reportAllChanges), n.onHidden(() => {
                        u(d.takeRecords()), r(!0)
                    }), iI(() => {
                        o("back-forward-cache", i.navigationId, i.navigationInteractionId, i.navigationURL, iR), iD(r)
                    }), setTimeout(r))
                }))
            })(t => {
                e((e => {
                    let t = {};
                    if (e.entries.length) {
                        let n = e.entries.reduce((e, t) => e.value > t.value ? e : t);
                        if (n?.sources?.length) {
                            let e = iZ(n.sources);
                            e && (t = {
                                largestShiftTarget: r.get(e),
                                largestShiftTime: n.startTime,
                                largestShiftValue: n.value,
                                largestShiftSource: e,
                                largestShiftEntry: n,
                                loadState: iO(n.startTime)
                            })
                        }
                    }
                    return Object.assign(e, {
                        attribution: t
                    })
                })(t))
            }, t)
        })(e => {
            let {
                loadState: t,
                largestShiftValue: n,
                largestShiftTime: r,
                largestShiftTarget: i
            } = e.attribution, a = this.buildInitialValues(e);
            this.addIfPresent(a, "largest_shift_value", n), this.addIfPresent(a, "largest_shift_time", r);
            let o = this.buildInitialContext(e);
            this.addIfPresent(o, ai, t), this.addIfPresent(o, "largest_shift_target", i), this.pushMeasurement(a, o)
        }, {
            reportAllChanges: null == (e = this.webVitalConfig) ? void 0 : e.reportAllChanges
        })
    }
    measureFCP() {
        var e;
        ((e, t = {}) => {
            let n = iL(t = Object.assign({}, t), iG);
            iV(t) && (n.u = new Map), iY(t => {
                e((e => {
                    let t = {
                        timeToFirstByte: 0,
                        firstByteToFCP: e.value,
                        loadState: iO(iR)
                    };
                    if ("soft-navigation" !== e.navigationType) {
                        if (e.entries.length) {
                            let n = iC(),
                                r = e.entries.at(-1);
                            if (n) {
                                let i = Math.max(0, n.responseStart - (n.activationStart || 0));
                                t = {
                                    timeToFirstByte: i,
                                    firstByteToFCP: e.value - i,
                                    loadState: iO(e.entries[0].startTime),
                                    navigationEntry: n,
                                    fcpEntry: r
                                }
                            }
                        }
                    } else {
                        let r = n.u?.get(e.navigationId);
                        r && (t = {
                            timeToFirstByte: 0,
                            firstByteToFCP: e.value,
                            loadState: "complete",
                            navigationEntry: r
                        })
                    }
                    return Object.assign(e, {
                        attribution: t
                    })
                })(t))
            }, t)
        })(e => {
            let {
                firstByteToFCP: t,
                timeToFirstByte: n,
                loadState: r
            } = e.attribution, i = this.buildInitialValues(e);
            this.addIfPresent(i, "first_byte_to_fcp", t), this.addIfPresent(i, aa, n);
            let a = this.buildInitialContext(e);
            this.addIfPresent(a, ai, r), this.pushMeasurement(i, a)
        }, {
            reportAllChanges: null == (e = this.webVitalConfig) ? void 0 : e.reportAllChanges
        })
    }
    measureINP() {
        var e;
        ((e, t = {}) => {
            let n = iL(t = Object.assign({}, t), i5),
                r = [],
                i = [],
                a = 0,
                o = new WeakMap,
                l = new WeakMap,
                u = !1,
                c = () => {
                    u || (u = !0, i6(d))
                },
                d = () => {
                    let e = new Set(n.v.map(e => o.get(e.entries[0]))),
                        t = i.length - 10;
                    i = i.filter((n, r) => r >= t || e.has(n));
                    let s = new Set;
                    for (let e of i)
                        for (let t of f(e.startTime, e.processingEnd)) s.add(t);
                    let l = r.length - 10;
                    r = r.filter((e, t) => s.has(e) || t >= l && e.startTime > a), u = !1
                };
            n.m = e => {
                let n, r = e.startTime + e.duration;
                a = Math.max(a, e.processingEnd);
                for (let a = i.length - 1; a >= 0; a--) {
                    let o = i[a];
                    if (8 >= Math.abs(r - o.renderTime)) {
                        (n = o).startTime = Math.min(e.startTime, n.startTime), n.processingStart = Math.min(e.processingStart, n.processingStart), n.processingEnd = Math.max(e.processingEnd, n.processingEnd), t.includeProcessedEventEntries && n.entries.push(e);
                        break
                    }
                }
                n || (n = {
                    startTime: e.startTime,
                    processingStart: e.processingStart,
                    processingEnd: e.processingEnd,
                    renderTime: r,
                    entries: t.includeProcessedEventEntries ? [e] : []
                }, i.push(n)), e.interactionId && o.set(e, n), c()
            }, n.M = e => {
                if (!l.get(e)) {
                    let n = e.entries.find(e => e.target)?.target;
                    if (n) {
                        let r = t.generateTarget?.(n) ?? iN(n);
                        l.set(e, r)
                    } else {
                        let t = e.entries.find(e => e.targetSelector)?.targetSelector;
                        t && l.set(e, t)
                    }
                }
            };
            let f = (e, t) => {
                let n = [];
                for (let i of r)
                    if (!(i.startTime + i.duration < e)) {
                        if (i.startTime > t) break;
                        n.push(i)
                    } return n
            };
            iq(["long-animation-frame"], e => {
                r = r.concat(e), c()
            }, t), ((e, t = {}) => {
                if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
                let n = iB();
                iK(() => {
                    "interactionCount" in performance || s || (s = iq(["event"], i3, {
                        durationThreshold: 0
                    }));
                    let r, i = iH("INP"),
                        a = iL(t, i5),
                        o = (n, o, s, l, u) => {
                            a.D(), r = iM(e, i = iH("INP", -1, n, o, s, l, u), i8, t.reportAllChanges)
                        },
                        l = () => {
                            let e = a.S(i.navigationType);
                            e && e.k !== i.value && (i.value = e.k, i.entries = e.entries, r())
                        },
                        u = e => {
                            l(), r(!0), o("soft-navigation", e.navigationId, e.interactionId, e.name, e.startTime)
                        },
                        c = (e, t = !1) => {
                            i6(() => {
                                for (let t of e) "soft-navigation" !== t.entryType ? a.l(t) : u(t);
                                l(), t && r(!0)
                            })
                        },
                        d = ["event", "first-input"];
                    iV(t) && d.push("soft-navigation");
                    let f = iq(d, c, {
                        ...t,
                        durationThreshold: t.durationThreshold ?? 40
                    });
                    r = iM(e, i, i8, t.reportAllChanges), f && (n.onHidden(() => {
                        c(f.takeRecords(), !0)
                    }), iI(() => {
                        o("back-forward-cache", i.navigationId, i.navigationInteractionId, i.navigationURL, iR)
                    }))
                })
            })(t => {
                e((e => {
                    if (0 === e.entries.length) {
                        let t = e.navigationStartTime || 0,
                            n = {
                                processedEventEntries: [],
                                longAnimationFrameEntries: [],
                                inputDelay: 0,
                                processingDuration: 0,
                                presentationDelay: e.value,
                                loadState: iO(t)
                            };
                        return Object.assign(e, {
                            attribution: n
                        })
                    }
                    let t = e.entries[0],
                        r = o.get(t),
                        i = Math.max(r.processingStart, t.startTime),
                        a = Math.max(t.startTime + t.duration, i),
                        s = Math.min(r.processingEnd, a),
                        u = r.entries.sort((e, t) => e.processingStart - t.processingStart),
                        c = f(t.startTime, s),
                        d = n.p.get(t.interactionId),
                        p = {
                            interactionTarget: l.get(d),
                            interactionType: t.name.startsWith("key") ? "keyboard" : "pointer",
                            interactionTime: t.startTime,
                            nextPaintTime: a,
                            processedEventEntries: u,
                            longAnimationFrameEntries: c,
                            inputDelay: i - t.startTime,
                            processingDuration: s - i,
                            presentationDelay: a - s,
                            loadState: iO(t.startTime),
                            longestScript: void 0,
                            totalScriptDuration: void 0,
                            totalStyleAndLayoutDuration: void 0,
                            totalPaintDuration: void 0,
                            totalUnattributedDuration: void 0
                        };
                    return (e => {
                        let t = e.interactionTime,
                            n = e.nextPaintTime;
                        if (!e.longAnimationFrameEntries?.length || !t || !n) return;
                        let r = e.inputDelay,
                            i = e.processingDuration,
                            a, o, s = 0,
                            l = 0,
                            u = 0,
                            c = 0;
                        for (let n of e.longAnimationFrameEntries)
                            for (let e of (l = l + n.startTime + n.duration - n.styleAndLayoutStart, n.scripts)) {
                                let n = e.startTime + e.duration;
                                if (n < t) continue;
                                let u = n - Math.max(t, e.startTime),
                                    d = e.duration ? u / e.duration * e.forcedStyleAndLayoutDuration : 0;
                                s += u - d, l += d, u > c && (o = e.startTime < t + r ? "input-delay" : e.startTime >= t + r + i ? "presentation-delay" : "processing-duration", a = e, c = u)
                            }
                        let d = e.longAnimationFrameEntries.at(-1),
                            f = d ? d.startTime + d.duration : 0;
                        f >= t + r + i && (u = n - f), a && o && (e.longestScript = {
                            entry: a,
                            subpart: o,
                            intersectingDuration: c
                        }), e.totalScriptDuration = s, e.totalStyleAndLayoutDuration = l, e.totalPaintDuration = u, e.totalUnattributedDuration = n - t - s - l - u
                    })(p), Object.assign(e, {
                        attribution: p
                    })
                })(t))
            }, t)
        })(e => {
            var t;
            let {
                interactionTime: n,
                presentationDelay: r,
                inputDelay: i,
                processingDuration: a,
                nextPaintTime: o,
                loadState: s,
                interactionTarget: l,
                interactionType: u,
                totalScriptDuration: c,
                totalStyleAndLayoutDuration: d,
                totalPaintDuration: f,
                totalUnattributedDuration: p,
                longestScript: h
            } = e.attribution, m = this.buildInitialValues(e);
            this.addIfPresent(m, "interaction_time", n), this.addIfPresent(m, "presentation_delay", r), this.addIfPresent(m, "input_delay", i), this.addIfPresent(m, "processing_duration", a), this.addIfPresent(m, "next_paint_time", o), this.addNumberIfDefined(m, "total_script_duration", c), this.addNumberIfDefined(m, "total_style_and_layout_duration", d), this.addNumberIfDefined(m, "total_paint_duration", f), this.addNumberIfDefined(m, "total_unattributed_duration", p), this.addNumberIfDefined(m, "longest_script_intersecting_duration", null == h ? void 0 : h.intersectingDuration);
            let g = this.buildInitialContext(e);
            this.addIfPresent(g, ai, s), this.addIfPresent(g, "interaction_target", l), this.addIfPresent(g, "interaction_type", u), this.addIfPresent(g, "longest_script_subpart", null == h ? void 0 : h.subpart), this.addIfPresent(g, "longest_script_invoker_type", null == h ? void 0 : h.entry.invokerType), (null == (t = this.webVitalConfig) ? void 0 : t.trackAttributionSources) && (this.addIfPresent(g, "longest_script_invoker", null == h ? void 0 : h.entry.invoker), this.addIfPresent(g, "longest_script_source_url", null == h ? void 0 : h.entry.sourceURL), this.addIfPresent(g, "longest_script_source_function_name", null == h ? void 0 : h.entry.sourceFunctionName), this.addIfPresent(g, "longest_script_source_char_position", (null == h ? void 0 : h.entry.sourceCharPosition) !== void 0 ? String(h.entry.sourceCharPosition) : void 0)), this.pushMeasurement(m, g)
        }, {
            reportAllChanges: null == (e = this.webVitalConfig) ? void 0 : e.reportAllChanges
        })
    }
    measureLCP() {
        var e;
        ((e, t = {}) => {
            null != (t = Object.assign({}, t)).resourceBufferSize && (ae = t.resourceBufferSize);
            let n = iL(t, i9),
                r = new WeakMap;
            iV(t) && (n.u = new Map), n.m = e => {
                let n = e.element;
                if (n) {
                    let i = t.generateTarget?.(n) ?? iN(n);
                    r.set(e, i)
                } else e.id && r.set(e, `#${e.id}`)
            }, ((e, t = {}) => {
                let n = !1,
                    r = iV(t);
                iK(() => {
                    let i, a = iB(),
                        o = iH("LCP"),
                        s = iL(t, i9),
                        l = (r, s, l, u, c) => {
                            i = iM(e, o = iH("LCP", -1, r, s, l, u, c), i7, t.reportAllChanges), n = !1, "soft-navigation" === r && (a = iB(!0))
                        },
                        u = e => {
                            s.u && e.navigationId && iW(s.u, e), n || i(!0), l("soft-navigation", e.navigationId, e.interactionId, e.name, e.startTime);
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
                                if ("largest-contentful-paint" === n.entryType) e = Math.max(n.startTime - iz(), 0), s.l(n), t = [n];
                                else if ("interaction-contentful-paint" === n.entryType) {
                                    if (!o.navigationId || "interactionId" in n && n.interactionId != o.navigationInteractionId) continue;
                                    e = Math.max((r = n.largestContentfulPaint?.renderTime || 0) - n.startTime, 0), n.largestContentfulPaint && (s.l(n.largestContentfulPaint), t = [n.largestContentfulPaint])
                                }
                                r < a.firstHiddenTime && (o.value = e, o.entries = t, i())
                            }
                        },
                        d = ["largest-contentful-paint"];
                    r && d.push("interaction-contentful-paint", "soft-navigation");
                    let f = iq(d, c);
                    if (f) {
                        i = iM(e, o, i7, t.reportAllChanges);
                        let a = ["keydown", "click", "visibilitychange"],
                            s = e => {
                                if (e.isTrusted && !n) {
                                    let e = o.id;
                                    i6(() => {
                                        if (!n) {
                                            if (!r)
                                                for (let e of (f.disconnect(), a)) removeEventListener(e, s, {
                                                    capture: !0
                                                });
                                            e === o.id && (n = !0, i(!0))
                                        }
                                    })
                                }
                            };
                        for (let e of a) addEventListener(e, s, {
                            capture: !0
                        });
                        iI(r => {
                            l("back-forward-cache", o.navigationId, o.navigationInteractionId, o.navigationURL, iR), i = iM(e, o, i7, t.reportAllChanges), iD(() => {
                                o.value = performance.now() - r.timeStamp, n = !0, i(!0)
                            })
                        })
                    }
                })
            })(t => {
                e((e => {
                    let t = {
                        timeToFirstByte: 0,
                        resourceLoadDelay: 0,
                        resourceLoadDuration: 0,
                        elementRenderDelay: e.value
                    };
                    if (e.entries.length) {
                        let i, a = e.entries.at(-1),
                            o = e => e.name === a.url && (e.requestStart || e.startTime) <= a.startTime,
                            s = a.url && (at.findLast(o) || performance.getEntriesByType("resource").findLast(o));
                        t.target = r.get(a), t.lcpEntry = a, a.url && (t.url = a.url), s && (t.lcpResourceEntry = s);
                        let l = 0,
                            u = 0;
                        if ("soft-navigation" !== e.navigationType ? (i = iC(), l = i?.activationStart ?? 0, u = i?.responseStart ?? 0) : (l = e.navigationStartTime || 0, i = n.u?.get(e.navigationId)), i) {
                            let n = Math.max(0, u - l),
                                r = Math.max(n, s ? (s.requestStart || s.startTime) - l : 0),
                                a = Math.min(e.value, Math.max(r, s ? s.responseEnd - l : 0));
                            t = {
                                ...t,
                                timeToFirstByte: n,
                                resourceLoadDelay: r - n,
                                resourceLoadDuration: a - r,
                                elementRenderDelay: e.value - a,
                                navigationEntry: i
                            }
                        }
                    }
                    return Object.assign(e, {
                        attribution: t
                    })
                })(t))
            }, t)
        })(e => {
            var t;
            let {
                elementRenderDelay: n,
                resourceLoadDelay: r,
                resourceLoadDuration: i,
                timeToFirstByte: a,
                target: o,
                url: s,
                lcpResourceEntry: l
            } = e.attribution, u = this.buildInitialValues(e);
            this.addIfPresent(u, "element_render_delay", n), this.addIfPresent(u, "resource_load_delay", r), this.addIfPresent(u, "resource_load_duration", i), this.addIfPresent(u, aa, a);
            let c = this.buildInitialContext(e);
            this.addIfPresent(c, "element", o), (null == (t = this.webVitalConfig) ? void 0 : t.trackAttributionSources) && (this.addIfPresent(c, "resource_url", s), this.addIfPresent(c, "resource_delivery_type", null == l ? void 0 : l.deliveryType), this.addIfPresent(c, "resource_initiator_type", null == l ? void 0 : l.initiatorType)), this.pushMeasurement(u, c)
        }, {
            reportAllChanges: null == (e = this.webVitalConfig) ? void 0 : e.reportAllChanges
        })
    }
    measureTTFB() {
        var e;
        ((e, t = {}) => {
            ((e, t = {}) => {
                let n = iV(t),
                    r = iH("TTFB"),
                    i = iM(e, r, an, t.reportAllChanges);
                ar(() => {
                    let a = iC();
                    if (a) {
                        let o = a.responseStart;
                        r.value = Math.max(o - iz(), 0), r.entries = [a], i(!0), iI(() => {
                            (i = iM(e, r = iH("TTFB", 0, "back-forward-cache", r.navigationId, r.navigationInteractionId, r.navigationURL, iR), an, t.reportAllChanges))(!0)
                        }), n && iq(["soft-navigation"], n => {
                            n.forEach(n => {
                                n.navigationId && ((r = iH("TTFB", 0, "soft-navigation", n.navigationId, n.interactionId, n.name, n.startTime)).entries = [n], (i = iM(e, r, an, t.reportAllChanges))(!0))
                            })
                        }, t)
                    }
                })
            })(t => {
                e((e => {
                    let t = e.entries[0],
                        n = {
                            waitingDuration: 0,
                            cacheDuration: 0,
                            dnsDuration: 0,
                            connectionDuration: 0,
                            requestDuration: 0,
                            navigationEntry: t
                        };
                    if (e.entries.length && t instanceof PerformanceNavigationTiming) {
                        let r = t.activationStart || 0,
                            i = Math.max((t.workerStart || t.fetchStart || 0) - r, 0),
                            a = Math.max(t.domainLookupStart - r, 0),
                            o = Math.max(t.connectStart - r, 0),
                            s = Math.max(t.connectEnd - r, 0);
                        n = {
                            waitingDuration: i,
                            cacheDuration: a - i,
                            dnsDuration: o - a,
                            connectionDuration: s - o,
                            requestDuration: e.value - s,
                            navigationEntry: t
                        }
                    }
                    return Object.assign(e, {
                        attribution: n
                    })
                })(t))
            }, t)
        })(e => {
            let {
                dnsDuration: t,
                connectionDuration: n,
                requestDuration: r,
                waitingDuration: i,
                cacheDuration: a
            } = e.attribution, o = this.buildInitialValues(e);
            this.addIfPresent(o, "dns_duration", t), this.addIfPresent(o, "connection_duration", n), this.addIfPresent(o, "request_duration", r), this.addIfPresent(o, "waiting_duration", i), this.addIfPresent(o, "cache_duration", a);
            let s = this.buildInitialContext(e);
            this.pushMeasurement(o, s)
        }, {
            reportAllChanges: null == (e = this.webVitalConfig) ? void 0 : e.reportAllChanges
        })
    }
    buildInitialValues(e) {
        return {
            [e.name.toLowerCase()]: e.value,
            delta: e.delta
        }
    }
    buildInitialContext(e) {
        var t;
        let n = null != (t = rT("com.grafana.faro.lastNavigationId", rS)) ? t : ik;
        return {
            id: e.id,
            rating: e.rating,
            navigation_type: e.navigationType,
            navigation_entry_id: n
        }
    }
    pushMeasurement(e, t) {
        this.corePushMeasurement({
            type: "web-vitals",
            values: e
        }, {
            context: t
        })
    }
    addIfPresent(e, t, n) {
        n && (e[t] = n)
    }
    addNumberIfDefined(e, t, n) {
        void 0 !== n && (e[t] = n)
    }
}, as = class extends r5 {
    constructor(...e) {
        super(...e), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = r6
    }
    initialize() {
        this.logDebug("Initializing"), new ao(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
    }
};
let al = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

function au(e = []) {
    for (let t of e)
        if ("traceparent" === t.name) {
            if (!al.test(t.description)) continue;
            let [, e, n] = t.description.split("-");
            if (null != e && null != n) return {
                traceId: e,
                spanId: n
            };
            break
        }
}

function ac(e, t = {
    wallNow: Date.now(),
    monoNow: performance.now()
}) {
    let {
        wallNow: n,
        monoNow: r
    } = t;
    return Math.min(n, n - (r - e))
}

function ad(e) {
    let t, {
        connectEnd: n,
        connectStart: r,
        decodedBodySize: i,
        domainLookupEnd: a,
        domainLookupStart: o,
        duration: s,
        encodedBodySize: l,
        fetchStart: u,
        initiatorType: c,
        name: d,
        nextHopProtocol: f,
        redirectEnd: p,
        redirectStart: h,
        renderBlockingStatus: m,
        requestStart: g,
        responseEnd: v,
        responseStart: b,
        responseStatus: y,
        secureConnectionStart: w,
        transferSize: _,
        workerStart: S
    } = e;
    return {
        name: d,
        httpHost: function(e) {
            try {
                return new URL(e).host || ik
            } catch (e) {
                return ik
            }
        }(d),
        duration: af(s),
        tcpHandshakeTime: af(n - r),
        dnsLookupTime: af(a - o),
        tlsNegotiationTime: af(n - w),
        responseStatus: af(y),
        redirectTime: af(p - h),
        requestTime: af(b - g),
        responseTime: af(v - b),
        fetchTime: af(v - u),
        serviceWorkerTime: af(S > 0 ? u - S : 0),
        decodedBodySize: af(i),
        encodedBodySize: af(l),
        cacheHitStatus: (t = "fullLoad", 0 === _ ? i > 0 && (t = "cache") : null != y ? 304 === y && (t = "conditionalFetch") : l > 0 && _ < l && (t = "conditionalFetch"), t),
        renderBlockingStatus: af(m),
        protocol: f,
        initiatorType: c,
        visibilityState: document.visibilityState,
        ttfb: af(b - g),
        transferSize: af(_)
    }
}

function af(e) {
    return null == e ? ik : "number" == typeof e ? Math.round(e > 0 ? e : 0).toString() : e.toString()
}

function ap(e = "") {
    return ra.transports.transports.flatMap(e => e.getIgnoreUrls()).some(t => e && null != e.match(t))
}

function ah(e) {
    return ru(e, "string") ? e : e instanceof URL ? e.href : !rv(e) && ru(null == e ? void 0 : e.toString, "function") ? e.toString() : void 0
}
let am = {
    initiatorType: ["xmlhttprequest", "fetch"]
};

function ag(e, t, n, r, i, a, o) {
    try {
        var s = e[a](o),
            l = s.value
    } catch (e) {
        n(e);
        return
    }
    s.done ? t(l) : Promise.resolve(l).then(r, i)
}

function av(e) {
    return function() {
        var t = this,
            n = arguments;
        return new Promise(function(r, i) {
            var a = e.apply(t, n);

            function o(e) {
                ag(a, r, i, o, s, "next", e)
            }

            function s(e) {
                ag(a, r, i, o, s, "throw", e)
            }
            o(void 0)
        })
    }
}
let ab = new ie;
var ay = class extends r5 {
    constructor(...e) {
        super(...e), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = r6
    }
    initialize() {
        var e = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let t = !1,
            n = () => {
                var n = av(function*() {
                    let n, r, i;
                    if (t) return;
                    let a = e.api.pushEvent,
                        {
                            faroNavigationId: o
                        } = yield(r = new Promise(e => {
                            n = e
                        }), new PerformanceObserver(e => {
                            var t;
                            let [r] = e.getEntries();
                            if (null == r || ap(r.name)) return;
                            let i = r.toJSON(),
                                o = au(null == i ? void 0 : i.serverTiming),
                                s = null != (t = rT("com.grafana.faro.lastNavigationId", rS)) ? t : ik,
                                l = rl(rl({}, function(e) {
                                    var t;
                                    let {
                                        activationStart: n,
                                        domComplete: r,
                                        domContentLoadedEventEnd: i,
                                        domContentLoadedEventStart: a,
                                        domInteractive: o,
                                        fetchStart: s,
                                        loadEventEnd: l,
                                        loadEventStart: u,
                                        responseStart: c,
                                        type: d
                                    } = e, f = (null == (t = performance.timing) ? void 0 : t.domLoading) != null ? performance.timing.domLoading - performance.timeOrigin : null;
                                    return rl(rl({}, ad(e)), {}, {
                                        pageLoadTime: af(r - s),
                                        documentParsingTime: af(f ? o - f : null),
                                        domProcessingTime: af(r - o),
                                        domContentLoadHandlerTime: af(i - a),
                                        onLoadTime: af(l - u),
                                        ttfb: af(Math.max(c - (null != n ? n : 0), 0)),
                                        type: d
                                    })
                                }(i)), {}, {
                                    faroNavigationId: rF(),
                                    faroPreviousNavigationId: s
                                });
                            rx("com.grafana.faro.lastNavigationId", l.faroNavigationId, rS), a("faro.performance.navigation", l, void 0, {
                                spanContext: o,
                                timestampOverwriteMs: ac(i.startTime)
                            }), n(l)
                        }).observe({
                            type: "navigation",
                            buffered: !0
                        }), r);
                    t || null == o || (i = e.config.trackResources, new PerformanceObserver(e => {
                        let t = e.getEntries(),
                            n = {
                                wallNow: Date.now(),
                                monoNow: performance.now()
                            };
                        for (let e of t) {
                            if (ap(e.name)) continue;
                            null == ab || ab.notify({
                                type: "resource"
                            });
                            let t = e.toJSON(),
                                r = au(null == t ? void 0 : t.serverTiming);
                            (null == i && function(e, t = {}) {
                                for (let [n, r] of Object.entries(t)) {
                                    let t = e[n];
                                    if (null == t) return !1;
                                    if (rh(r)) return r.includes(t);
                                    return t === r
                                }
                                return !0
                            }(t, am) || i) && a("faro.performance.resource", rl(rl({}, ad(t)), {}, {
                                faroNavigationId: o,
                                faroResourceId: rF()
                            }), void 0, {
                                spanContext: r,
                                timestampOverwriteMs: ac(t.startTime, n)
                            })
                        }
                    }).observe({
                        type: "resource",
                        buffered: !0
                    }))
                });
                if ("complete" === document.readyState) n();
                else {
                    let e = () => {
                        "complete" === document.readyState && (n(), document.removeEventListener("readystatechange", e))
                    };
                    document.addEventListener("readystatechange", e)
                }
            };
        this.cancelInitialization = () => {
            t = !0, document.removeEventListener("prerenderingchange", n)
        }, document.prerendering ? document.addEventListener("prerenderingchange", n, {
            once: !0
        }) : n()
    }
    destroy() {
        var e;
        null == (e = this.cancelInitialization) || e.call(this), this.cancelInitialization = void 0
    }
};
let aw = "data-faro-user-action-name";

function a_(e) {
    return `data-${(e.startsWith("data-")?e.slice(5):e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
}

function aS(e, t = 100, n = rJ) {
    if (void 0 === e) return t;
    let r = 0 / 0;
    try {
        r = "string" == typeof e && "" === e.trim() ? 0 / 0 : Number(e)
    } catch (e) {}
    return !Number.isFinite(r) || r <= 0 ? (n(`initialActivityTimeout must be a finite number greater than zero; using ${t} ms`), t) : r > 1e3 ? (n("initialActivityTimeout cannot exceed 1000 ms; clamping to the maximum"), 1e3) : r
}

function aE(e, t, n) {
    return void 0 !== e && window.clearTimeout(e), window.setTimeout(() => {
        t()
    }, n)
}

function ak(e) {
    return e.type === r7
}

function aT() {
    return l || (l = new ie), u || (u = new MutationObserver((e, t) => {
        l.notify({
            type: "dom-mutation"
        })
    })).observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
    }), l
}
aw.replace(/-name$/, "-timeout");
let ax = "fetch", aC = !1;

function aO() {
    if (c) return c;

    function e(e) {
        c.notify({
            type: r9,
            request: e
        })
    }

    function t(e) {
        c.notify({
            type: r7,
            request: e
        })
    }
    return c = new ie, aC || (function({
        onRequestEnd: e,
        onRequestStart: t
    }) {
        f || (f = window.fetch), window.fetch = function() {
            var n, r;
            let i = null != (n = ah(arguments[0])) ? n : "",
                a = ap(i),
                o = (null != (r = arguments[1]) ? r : {}).method,
                s = rF();
            return a || t({
                url: i,
                method: o,
                requestId: s,
                apiType: ax
            }), f.apply(this, arguments).then(t => (a || e({
                url: i,
                method: o,
                requestId: s,
                apiType: ax
            }), t)).catch(t => {
                throw a || e({
                    url: i,
                    method: o,
                    requestId: s,
                    apiType: ax
                }), t
            })
        }
    }({
        onRequestStart: e,
        onRequestEnd: t
    }), function({
        onRequestStart: e,
        onRequestEnd: t
    }) {
        d || (d = XMLHttpRequest.prototype.open), XMLHttpRequest.prototype.open = function() {
            let n = arguments[1],
                r = ap(n),
                i = arguments[0],
                a = rF();
            this.addEventListener("loadstart", function() {
                r || e({
                    url: n,
                    method: i,
                    requestId: a,
                    apiType: "xhr"
                })
            }), this.addEventListener("load", function() {
                r || t({
                    url: n,
                    method: i,
                    requestId: a,
                    apiType: "xhr"
                })
            }), this.addEventListener("error", function() {
                r || t({
                    url: n,
                    method: i,
                    requestId: a,
                    apiType: "xhr"
                })
            }), this.addEventListener("abort", function() {
                r || t({
                    url: n,
                    method: i,
                    requestId: a,
                    apiType: "xhr"
                })
            }), d.apply(this, arguments)
        }
    }({
        onRequestStart: e,
        onRequestEnd: t
    }), aC = !0), c
}
let aP = !1, aN = ((F = {})[F.Started = 0] = "Started", F[F.Halted = 1] = "Halted", F[F.Cancelled = 2] = "Cancelled", F[F.Ended = 3] = "Ended", F);
var aA = class {
    constructor(e, t, n = 100) {
        this.userAction = e, this.logDebug = t, this.initialActivityTimeout = n, this.http = aO(), this.dom = aT(), this.perf = (p || (p = new ie), aP || (ab.subscribe(e => {
            "resource" === e.type && p.notify({
                type: "resource-entry"
            })
        }), aP = !0), p), this.isValid = !1, this.runningRequests = new Map
    }
    attach() {
        this.allMonitorsSub = new ie().merge(this.http, this.dom, this.perf).takeWhile(() => [aN.Started, aN.Halted].includes(this.userAction.getState())).filter(e => this.userAction.getState() !== aN.Halted || !!(ak(e) && this.runningRequests.has(e.request.requestId))).subscribe(e => {
            e.type === r9 && this.runningRequests.set(e.request.requestId, e.request), ak(e) && this.runningRequests.delete(e.request.requestId), ak(e) ? this.userAction.getState() === aN.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        }), this.stateSub = this.userAction.filter(e => [aN.Ended, aN.Cancelled].includes(e)).first().subscribe(() => this.cleanup()), this.startupTid = aE(this.startupTid, () => {
            this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }, this.initialActivityTimeout)
    }
    scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout(() => {
            this.userAction.getState() === aN.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }, 100)
    }
    haltAction() {
        this.userAction.getState() === aN.Started && (this.userAction.halt(), this.startHaltTimeout())
    }
    startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = aE(this.haltTid, () => {
            this.userAction.getState() === aN.Halted && this.endAction()
        }, 1e4)
    }
    endAction() {
        this.userAction.end(), this.cleanup()
    }
    cancelAction() {
        this.userAction.cancel(), this.cleanup()
    }
    cleanup() {
        var e, t;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null == (e = this.allMonitorsSub) || e.unsubscribe(), null == (t = this.stateSub) || t.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
    }
    clearTimer(e) {
        void 0 !== e && window.clearTimeout(e)
    }
};
let aL = "normal";
var aR = class {
    constructor() {
        this.buffer = []
    }
    addItem(e) {
        this.buffer.push(e)
    }
    flushBuffer(e) {
        if (ru(e, "function"))
            for (let t of this.buffer) e(t);
        this.buffer.length = 0
    }
    size() {
        return this.buffer.length
    }
}, aI = class extends ie {
    constructor({
        name: e,
        parentId: t,
        trigger: n,
        transports: r,
        attributes: i,
        trackUserActionsExcludeItem: a,
        importance: o = aL,
        pushEvent: s
    }) {
        super(), this.name = e, this.attributes = i, this.id = rF(), this.trigger = n, this.parentId = null != t ? t : this.id, this.trackUserActionsExcludeItem = a, this.importance = o, this._pushEvent = s, this._itemBuffer = new aR, this._transports = r, this._state = 0, this._start()
    }
    addItem(e) {
        return 0 === this._state && (this._itemBuffer.addItem(e), !0)
    }
    _start() {
        this._state = 0, 0 === this._state && (this.startTime = rM(), this._startTimeMono = rD())
    }
    halt() {
        0 === this._state && (this._state = 1, this.notify(this._state))
    }
    cancel() {
        0 === this._state && this._itemBuffer.flushBuffer(e => {
            this._transports.execute(e)
        }), this._state = 2, this.notify(this._state)
    }
    end() {
        if (2 === this._state) return;
        let e = rM(),
            t = rD() - this._startTimeMono;
        this._state = 3, this._itemBuffer.flushBuffer(e => {
            var t, n;
            if (t = e, (null == (n = this.trackUserActionsExcludeItem) ? void 0 : n(t)) || "measurement" === t.type && "web-vitals" === t.payload.type) return void this._transports.execute(e);
            let r = r2(r2({}, e), {}, {
                payload: r2(r2({}, e.payload), {}, {
                    action: {
                        parentId: this.id,
                        name: this.name
                    }
                })
            });
            this._transports.execute(r)
        }), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", r2({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: e.toString(),
            userActionDuration: t.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
        }, rG(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: e => (e.action = {
                id: this.id,
                name: this.name
            }, e)
        })
    }
    getState() {
        return this._state
    }
};
let aM = new ie;

function aD(e, t) {
    return !!e && (null == e ? void 0 : e.getState()) === 0 && (e.addItem(t), !0)
}
var az = class extends r5 {
    constructor(...e) {
        super(...e), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = r6
    }
    initialize() {
        let {
            processUserEvent: e,
            processUserActionStarted: t
        } = function(e, t = rJ) {
            var n;
            let {
                api: r,
                config: i,
                internalLogger: a
            } = e, o = aS(null == (n = i.userActionsInstrumentation) ? void 0 : n.initialActivityTimeout, 100, t);
            return {
                processUserEvent: function(e) {
                    var t, n, a, o;
                    let s, l, u = null != (t = null == (n = i.userActionsInstrumentation) ? void 0 : n.dataAttributeName) ? t : aw,
                        c = e.target;
                    if (!(c instanceof Element)) return;
                    let d = function(e, t) {
                            let n = e;
                            for (; n;) {
                                if (n.hasAttribute(t)) return n;
                                n = n.parentElement
                            }
                            return null
                        }(c, a_(u)),
                        f = function(e, t) {
                            if (!e) return;
                            let n = a_(t).slice(5).replace(/-(.)/g, (e, t) => t.toUpperCase()),
                                r = e.dataset;
                            for (let e in r)
                                if (e === n) return r[e]
                        }(d, u);
                    if (!d || !f) return;
                    let p = (a = d, o = u, null === (l = a.getAttribute((s = a_(o)).endsWith("-name") ? `${s.slice(0,-5)}-timeout` : `${s}-timeout`)) ? void 0 : Number(l));
                    r.startUserAction(f, {}, {
                        triggerName: e.type,
                        initialActivityTimeout: p
                    })
                },
                processUserActionStarted: function(e, n) {
                    let r = aS(n, o, t);
                    new aA(e, a.debug, r).attach()
                }
            }
        }(ra, e => this.logWarn(e));
        this._processUserEvent = e, this._processKeydown = t => {
            [" ", "Enter"].includes(t.key) && e(t)
        }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = aM.subscribe(({
            type: e,
            userAction: n,
            initialActivityTimeout: r
        }) => {
            "user_action_start" === e && t(n, r)
        })
    }
    destroy() {
        var e;
        this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null == (e = this._userActionSub) || e.unsubscribe()
    }
}, aU = class extends r5 {
    constructor() {
        super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = r6, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
    }
    initialize() {
        document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
    }
    destroy() {
        document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
    }
    securitypolicyviolationHandler(e) {
        let t = {
            blockedURI: e.blockedURI,
            columnNumber: e.columnNumber,
            disposition: e.disposition,
            documentURI: e.documentURI,
            effectiveDirective: e.effectiveDirective,
            lineNumber: e.lineNumber,
            originalPolicy: e.originalPolicy,
            referrer: e.referrer,
            sample: e.sample,
            sourceFile: e.sourceFile,
            statusCode: e.statusCode,
            violatedDirective: e.violatedDirective
        };
        this.api.pushEvent("securitypolicyviolation", rG(t))
    }
}, aj = class extends ie {
    constructor(e, t) {
        var n, r, i, a;
        super(), this._tracking = !1, this.eventsObservable = e, this._options = {
            inactivityMs: null != (n = null == t ? void 0 : t.inactivityMs) ? n : 100,
            drainTimeoutMs: null != (r = null == t ? void 0 : t.drainTimeoutMs) ? r : 1e4,
            isOperationStart: null != (i = null == t ? void 0 : t.isOperationStart) ? i : () => void 0,
            isOperationEnd: null != (a = null == t ? void 0 : t.isOperationEnd) ? a : () => void 0
        }, this._initialize()
    }
    _initialize() {
        this.eventsObservable.filter(() => this._tracking).subscribe(e => {
            var t, n, r;
            this._lastEventTime = rD(), null == (t = this._currentEvents) || t.push(e);
            let i = this._options.isOperationStart(e);
            i && (null == (n = this._activeOperations) || n.set(i, !0));
            let a = this._options.isOperationEnd(e);
            a && (null == (r = this._activeOperations) || r.delete(a)), this._scheduleInactivityCheck()
        })
    }
    startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = rD(), this._lastEventTime = this._startTime, this.notify({
            message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
    }
    stopTracking() {
        let e;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), e = this.hasActiveOperations() ? rD() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
            message: "tracking-ended",
            events: this._currentEvents,
            duration: e
        })
    }
    _scheduleInactivityCheck() {
        this._inactivityTid = aF(this._inactivityTid, () => {
            this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }, this._options.inactivityMs)
    }
    _startDrainTimeout() {
        this._drainTid = aF(this._drainTid, () => {
            this.stopTracking()
        }, this._options.drainTimeoutMs)
    }
    hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
    }
    _clearTimer(e) {
        e && clearTimeout(e)
    }
};

function aF(e, t, n) {
    return e && clearTimeout(e), e = setTimeout(() => {
        t()
    }, n)
}
let a$ = new Set, aB = new Map, aH = !1;
var aq = class extends r5 {
    constructor(...e) {
        super(...e), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = r6
    }
    initialize() {
        var e;
        let t = aO(),
            n = aT(),
            r = function() {
                function e(e, t) {
                    let n = null != t ? t : location.href;
                    n !== g && (m.notify({
                        type: "url-change",
                        from: g,
                        to: n,
                        trigger: e
                    }), g = n)
                }
                if (m || (m = new ie, g = location.href), !aH)
                    if ("navigation" in window && "NavigateEvent" in window) {
                        _ = t => {
                            try {
                                let n = null == t ? void 0 : t.destination;
                                (null == n ? void 0 : n.sameDocument) && "string" == typeof n.url && e("navigate", n.url)
                            } catch (e) {}
                        }, window.navigation.addEventListener("navigate", _);
                        let t = window.NavigateEvent;
                        t && t.prototype && "function" == typeof t.prototype.intercept && (S || (S = t.prototype.intercept), t.prototype.intercept = function(t) {
                            try {
                                let t = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                                    n = null === this || void 0 === this ? void 0 : this.destination;
                                t && n && !1 === n.sameDocument && "string" == typeof n.url && e("navigate-intercept", n.url)
                            } catch (e) {}
                            return S.call(this, t)
                        }), aH = !0
                    } else v || (v = window.history.pushState), window.history.pushState = function(...t) {
                        let n = v.apply(window.history, t);
                        return e("pushState"), n
                    }, b || (b = window.history.replaceState), window.history.replaceState = function(...t) {
                        let n = b.apply(window.history, t);
                        return e("replaceState"), n
                    }, y = () => e("popstate"), w = () => e("hashchange"), window.addEventListener("popstate", y), window.addEventListener("hashchange", w), aH = !0;
                return m
            }(),
            i = (e = ["pointerdown", "keydown"], h || (h = new ie), e.forEach(e => {
                if (!a$.has(e)) {
                    let t = () => {
                        h.notify({
                            type: "interaction",
                            name: e
                        })
                    };
                    window.addEventListener(e, t), a$.add(e), aB.set(e, t)
                }
            }), h),
            a = new aj(new ie().merge(t, n, r), {
                inactivityMs: 100,
                drainTimeoutMs: 1e4,
                isOperationStart: e => e.type === r9 ? e.request.requestId : void 0,
                isOperationEnd: e => e.type === r7 ? e.request.requestId : void 0
            });
        a.filter(e => "tracking-ended" === e.message).subscribe(e => {
            var t, n, r;
            if ((null == (t = e.events) ? void 0 : t.some(e => "url-change" === e.type)) && (null == (n = e.events) ? void 0 : n.some(e => "dom-mutation" === e.type))) {
                let t = null == (r = e.events) ? void 0 : r.find(e => "url-change" === e.type);
                ra.api.pushEvent("faro.navigation", {
                    fromUrl: null == t ? void 0 : t.from,
                    toUrl: null == t ? void 0 : t.to,
                    sameDocument: String(!0),
                    duration: e.duration
                })
            }
        }), i.subscribe(() => {
            a.startTracking()
        })
    }
};

function aV(e = {}) {
    let t = [new az, new iE, new as, new r8, new iT, new aq];
    return !1 !== e.enablePerformanceInstrumentation && t.unshift(new ay), !1 !== e.enableContentSecurityPolicyInstrumentation && t.push(new aU), !1 !== e.captureConsole && t.push(new i_), t
}

function aW(e) {
    return {
        frames: ig(e)
    }
}
var aQ = e.i(798539);

function aG() {
    let e = "u" > typeof navigator ? navigator.userAgent : "";
    return E === e && k || (k = new aQ.UAParser(e).getResult(), E = e), k
}
let aK = () => {
    let {
        browser: e,
        os: t,
        ua: n
    } = aG(), {
        name: r,
        version: i
    } = e, {
        name: a,
        version: o
    } = t, s = navigator.language, l = n.includes("Mobi"), u = function() {
        if (r && i && "userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
    }();
    return {
        browser: {
            name: null != r ? r : ik,
            version: null != i ? i : ik,
            os: `${null!=a?a:ik} ${null!=o?o:ik}`,
            userAgent: null != n ? n : ik,
            language: null != s ? s : ik,
            mobile: l,
            brands: null != u ? u : ik,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
        }
    }
}, aX = () => {
    let {
        name: e,
        version: t
    } = aG().os;
    if (!e && !t) return {};
    let n = {};
    return e && (n.name = e), t && (n.version = t), {
        os: n
    }
}, aY = () => ({
    sdk: {
        name: "faro-web",
        version: r6
    }
}), aJ = () => {
    let e = window.k6;
    return {
        k6: rl({
            isK6Browser: !0
        }, (null == e ? void 0 : e.testRunId) && {
            testRunId: null == e ? void 0 : e.testRunId
        })
    }
};

function aZ(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
            if (({}).hasOwnProperty.call(e, r)) {
                if (t.includes(r)) continue;
                n[r] = e[r]
            } return n
    }(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) n = a[r], t.includes(n) || ({}).propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
}
let a0 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/, a1 = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/, a2 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/, a3 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], a4 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], a5 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function a6({
    weekday: e,
    day: t,
    month: n,
    year: r,
    hour: i,
    minute: a,
    second: o
}) {
    if (r < 1900 || t < 1 || i > 23 || a > 59 || o > 60) return;
    let s = 60 === o,
        l = new Date(0);
    if (l.setUTCFullYear(r, n, t), l.setUTCHours(i, a, s ? 59 : o, 0), l.getUTCDay() === e && l.getUTCDate() === t && l.getUTCMonth() === n && l.getUTCFullYear() === r && l.getUTCHours() === i && l.getUTCMinutes() === a && l.getUTCSeconds() === (s ? 59 : o)) return l.getTime() + 1e3 * !!s
}
var a8 = class {
    constructor(e) {
        this.options = e, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
    }
    reserve() {
        var e, t = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        let n = this.sequence++,
            r = !1,
            i = () => {
                !r && (r = !0, this.admitted--)
            };
        return {
            deliver: (e = av(function*(e) {
                let r, i = t.options.getNow(),
                    a = 0;
                for (;;) {
                    var o, s, l;
                    let u = t.options.retry.maxAttempts - a,
                        c = yield t.runAttempt(() => e(u, t.unloading), a > 0);
                    if (a += c.attemptsMade, "success" === c.kind) return {
                        kind: "success",
                        attempts: a,
                        elapsedTimeMs: t.options.getNow() - i
                    };
                    if (r = c.failure, "terminal" === c.kind || t.unloading) return {
                        kind: "terminal",
                        attempts: a,
                        elapsedTimeMs: t.options.getNow() - i,
                        failure: r
                    };
                    if (a >= t.options.retry.maxAttempts) return {
                        kind: "terminal",
                        attempts: a,
                        elapsedTimeMs: t.options.getNow() - i,
                        failure: r,
                        reason: "retries-exhausted"
                    };
                    if (null != c.retryAfterMs && c.retryAfterMs > t.options.retry.maxBackoffMs) return {
                        kind: "terminal",
                        attempts: a,
                        elapsedTimeMs: t.options.getNow() - i,
                        failure: r,
                        reason: "retry-after-too-long"
                    };
                    let d = Math.min(null != (o = c.retryAfterMs) ? o : t.options.retry.initialBackoffMs * Math.pow(t.options.retry.backoffMultiplier, a - 1), t.options.retry.maxBackoffMs);
                    if (null == (s = (l = t.options).onRetry) || s.call(l, d, a + 1), yield t.waitForTurn(n, d)) {
                        let n = t.options.retry.maxAttempts - a,
                            r = yield t.runAttempt(() => e(n, !0));
                        return a += r.attemptsMade, {
                            kind: "success" === r.kind ? "success" : "terminal",
                            attempts: a,
                            elapsedTimeMs: t.options.getNow() - i,
                            failure: "success" === r.kind ? void 0 : r.failure
                        }
                    }
                }
            }), function(t) {
                return e.apply(this, arguments)
            }),
            release: i
        }
    }
    flush() {
        this.unloading = !0, this.nextSendAt = 0;
        let e = this.waiting.splice(0);
        for (let t of (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), e)) t.resolve(!0);
        this.runNextAttempt()
    }
    resume() {
        this.unloading = !1
    }
    runAttempt(e, t = !1) {
        return new Promise((n, r) => {
            let i = () => {
                this.inProgress++;
                let t = () => {
                    this.inProgress--, this.runNextAttempt()
                };
                e().then(e => {
                    t(), n(e)
                }, e => {
                    t(), r(e)
                })
            };
            this.attemptQueue.push({
                run: i,
                isRedelivery: t
            }), this.runNextAttempt()
        })
    }
    runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
            let e = this.options.getNow(),
                t = this.attemptQueue.findIndex(({
                    isRedelivery: t
                }) => this.unloading || !t || e >= this.nextSendAt);
            if (t < 0) {
                this.redeliveryTimer = setTimeout(() => {
                    this.redeliveryTimer = void 0, this.runNextAttempt()
                }, Math.max(0, this.nextSendAt - e));
                return
            }
            let [n] = this.attemptQueue.splice(t, 1);
            n.isRedelivery && !this.unloading && (this.nextSendAt = e + 1), n.run()
        }
    }
    waitForTurn(e, t) {
        let n = Math.min(t * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise(t => {
            this.waiting.push({
                sequence: e,
                readyAt: this.options.getNow() + n,
                resolve: t
            }), this.waiting.sort((e, t) => e.readyAt === t.readyAt ? e.sequence - t.sequence : e.readyAt - t.readyAt), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        })
    }
    scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        let e = this.waiting[0],
            t = e.readyAt;
        this.waitingTimer = setTimeout(() => {
            this.waitingTimer = void 0;
            let t = this.waiting.indexOf(e);
            t >= 0 && this.waiting.splice(t, 1), e.resolve(!1), this.scheduleNext()
        }, Math.max(0, t - this.options.getNow()))
    }
}, a9 = class extends r4 {
    isBatched() {
        return !1
    }
    getIgnoreUrls() {
        return []
    }
};

function a7(e) {
    let {
        size: t,
        concurrency: n
    } = e, r = [], i = 0, a = () => {
        if (i < n && r.length) {
            let {
                producer: e,
                resolve: t,
                reject: n
            } = r.shift();
            i++, e().then(e => {
                i--, a(), t(e)
            }, e => {
                i--, a(), n(e)
            })
        }
    };
    return {
        add: e => {
            if (r.length + i >= t) throw Error("Task buffer full");
            return new Promise((t, n) => {
                r.push({
                    producer: e,
                    resolve: t,
                    reject: n
                }), a()
            })
        }
    }
}
let oe = (($ = {}).EXCEPTION = "exception", $.LOG = "log", $.MEASUREMENT = "measurement", $.TRACE = "trace", $.EVENT = "event", $), ot = {
    exception: "exceptions",
    log: "logs",
    measurement: "measurements",
    trace: "traces",
    event: "events"
}, on = ["headers"], or = ["keepalive", "signal"], oi = new Set([408, 425, 429, 500, 502, 503, 504]), oa = new Set([429, 503]), oo = 0, os = 0;
var ol = class extends Error {}, ou = class extends a9 {
    constructor(e) {
        var t, n, r, i, a, o, s, l, u, c, d, f, p, h, m, g, v;
        super(), this.options = e, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = r6, this.pendingCustomSends = 0, this.getNow = null != (t = e.getNow) ? t : Date.now, this.requestTimeoutMs = null != (n = e.requestTimeoutMs) ? n : 1e4, this.compressionEnabled = null != (r = e.requestCompression) && r && "u" > typeof CompressionStream, e.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "u" < typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new a8({
            bufferSize: null != (i = e.bufferSize) ? i : 30,
            concurrency: null != (a = e.concurrency) ? a : 5,
            retry: {
                maxAttempts: null != (o = null == (s = e.retry) ? void 0 : s.maxAttempts) ? o : 3,
                initialBackoffMs: null != (l = null != (u = null == (c = e.retry) ? void 0 : c.initialBackoffMs) ? u : e.defaultRateLimitBackoffMs) ? l : 1e3,
                maxBackoffMs: null != (d = null == (f = e.retry) ? void 0 : f.maxBackoffMs) ? d : 3e4,
                backoffMultiplier: null != (p = null == (h = e.retry) ? void 0 : h.backoffMultiplier) ? p : 2
            },
            getNow: this.getNow,
            getRandom: null != (m = e.getRandom) ? m : Math.random,
            onRetry: (e, t) => {
                this.logDebug(`Retrying failed request after ${e}ms. Attempt ${t}.`)
            }
        }), this.customPromiseBuffer = a7({
            size: null != (g = e.bufferSize) ? g : 30,
            concurrency: null != (v = e.concurrency) ? v : 5
        }), this.defaultPromiseBuffer = {
            add: e => {
                if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(e);
                let t = this.deliveryQueue.reserve();
                if (!t) throw Error("Task buffer full");
                return this.runBufferedTask(t, e)
            }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "u" > typeof window && (window.addEventListener("pagehide", () => this.deliveryQueue.flush()), window.addEventListener("pageshow", e => {
            e.persisted && this.deliveryQueue.resume()
        }))
    }
    send(e) {
        var t = this;
        return av(function*() {
            let n = t.promiseBuffer;
            if (n === t.defaultPromiseBuffer && n.add === t.defaultBufferAdd) return void(yield t.deliver(e));
            t.pendingCustomSends++;
            try {
                yield n.add(() => t.deliver(e))
            } catch (e) {
                t.logError("Permanent delivery failure", {
                    error: e,
                    attempts: 0,
                    elapsedTimeMs: 0
                })
            } finally {
                t.pendingCustomSends--
            }
        })()
    }
    runBufferedTask(e, t) {
        return av(function*() {
            let n;
            try {
                return yield e.deliver(av(function*() {
                    return n = yield t(), {
                        kind: "success",
                        attemptsMade: 1
                    }
                })), n
            } finally {
                e.release()
            }
        })()
    }
    deliver(e) {
        var t = this;
        return av(function*() {
            let n = t.deliveryQueue.reserve();
            if (!n) return void t.logError("Permanent delivery failure", {
                error: "Reliable delivery queue is full",
                attempts: 0,
                elapsedTimeMs: 0
            });
            try {
                let r = yield t.prepareRequest(e), i = yield n.deliver((e, n) => t.performAttempt(r, e, n));
                "terminal" === i.kind && t.logError("retries-exhausted" === i.reason ? "Delivery retries exhausted" : "Permanent delivery failure", rl(rl({}, i.failure), {}, {
                    reason: i.reason,
                    attempts: i.attempts,
                    elapsedTimeMs: i.elapsedTimeMs
                }))
            } catch (e) {
                t.logError("Permanent delivery failure", {
                    error: e,
                    attempts: 0,
                    elapsedTimeMs: 0
                })
            } finally {
                n.release()
            }
        })()
    }
    getIgnoreUrls() {
        var e;
        return [this.options.url].concat(null != (e = this.config.ignoreUrls) ? e : [])
    }
    isBatched() {
        return !0
    }
    prepareRequest(e) {
        var t = this;
        return av(function*() {
            var n, r;
            let i, a = (i = {
                    meta: {}
                }, void 0 !== e[0] && (i.meta = e[0].meta), e.forEach(e => {
                    switch (e.type) {
                        case "log":
                        case "event":
                        case "exception":
                        case "measurement": {
                            let t = ot[e.type],
                                n = i[t];
                            i = r2(r2({}, i), {}, {
                                [t]: void 0 === n ? [e.payload] : [...n, e.payload]
                            });
                            break
                        }
                        case "trace":
                            i = r2(r2({}, i), {}, {
                                traces: function(e, t) {
                                    var n, r;
                                    if (void 0 === t) return e;
                                    if (void 0 === e) return {
                                        resourceSpans: t
                                    };
                                    let i = null == (n = e.resourceSpans) ? void 0 : n[0];
                                    if (void 0 === i) return e;
                                    let a = (null == i ? void 0 : i.scopeSpans) || [],
                                        o = (null == t || null == (r = t[0]) ? void 0 : r.scopeSpans) || [];
                                    return r2(r2({}, e), {}, {
                                        resourceSpans: [r2(r2({}, i), {}, {
                                            scopeSpans: [...a, ...o]
                                        })]
                                    })
                                }(i.traces, e.payload.resourceSpans)
                            })
                    }
                }), i),
                o = null == (n = a.meta.session) ? void 0 : n.id,
                s = JSON.stringify(a),
                l = null != (r = t.options.requestOptions) ? r : {},
                {
                    headers: u = {}
                } = l,
                c = aZ(l, on),
                {
                    keepalive: d,
                    signal: f
                } = c,
                p = aZ(c, or),
                h = {};
            for (let [e, t] of Object.entries(u)) h[e] = "function" == typeof t ? yield t(): t;
            let m = s,
                g = "u" < typeof TextEncoder ? s.length : new TextEncoder().encode(s).byteLength,
                v = {};
            return t.compressionEnabled && (g = (m = yield t.compress(s)).size, v["Content-Encoding"] = "gzip"), {
                bodySize: g,
                sessionId: o,
                requestInit: rl({
                    method: "POST",
                    headers: rl(rl(rl(rl(rl({
                        "Content-Type": "application/json"
                    }, v), h), t.options.apiKey ? {
                        "x-api-key": t.options.apiKey
                    } : {}), o ? {
                        "x-faro-session-id": o
                    } : {}), {}, {
                        "Idempotency-Key": rF(20)
                    }),
                    body: m
                }, p)
            }
        })()
    }
    performAttempt(e, t, n) {
        var r = this;
        return av(function*() {
            var i, a;
            let o = null == (i = r.options.requestOptions) ? void 0 : i.signal;
            if (null == o ? void 0 : o.aborted) return {
                kind: "terminal",
                failure: {
                    error: o.reason
                },
                attemptsMade: 0
            };
            let s = 0;
            try {
                let i = yield r.fetchWithKeepaliveFallback(e.requestInit, e.bodySize, !!n || (null == (a = r.options.requestOptions) ? void 0 : a.keepalive), t, () => s++);
                if (r.handleResponse(i, e.sessionId), i.status >= 200 && i.status < 300) return {
                    kind: "success",
                    attemptsMade: s
                };
                let o = {
                    status: i.status
                };
                if (!oi.has(i.status) || n) return {
                    kind: "terminal",
                    failure: o,
                    attemptsMade: s
                };
                return {
                    kind: "retry",
                    failure: o,
                    attemptsMade: s,
                    retryAfterMs: oa.has(i.status) ? r.getRetryAfterDelayMs(i) : void 0
                }
            } catch (t) {
                let e = {
                    error: t
                };
                if ((null == o ? void 0 : o.aborted) || !r.isFetchNetworkError(t) || n) return {
                    kind: "terminal",
                    failure: e,
                    attemptsMade: s
                };
                return {
                    kind: "retry",
                    failure: e,
                    attemptsMade: s
                }
            }
        })()
    }
    fetchWithKeepaliveFallback(e, t, n, r, i) {
        var a = this;
        return av(function*() {
            let o = a.getNow(),
                s = a.reserveKeepalive(t, n);
            try {
                return yield a.fetchWithTimeout(rl(rl({}, e), {}, {
                    keepalive: s.keepalive
                }), a.requestTimeoutMs, i)
            } catch (t) {
                var l;
                if (s.keepalive && r > 1 && a.isFetchNetworkError(t) && !(t instanceof ol) && !(null == (l = a.options.requestOptions) || null == (l = l.signal) ? void 0 : l.aborted)) {
                    a.logDebug("Retrying failed keepalive request with keepalive disabled.");
                    let t = a.requestTimeoutMs - (a.getNow() - o);
                    return a.fetchWithTimeout(rl(rl({}, e), {}, {
                        keepalive: !1
                    }), t, i)
                }
                throw t
            } finally {
                s.release()
            }
        })()
    }
    fetchWithTimeout(e, t, n) {
        var r = this;
        return av(function*() {
            var i;
            let a = null == (i = r.options.requestOptions) ? void 0 : i.signal;
            if (r.requestTimeoutMs <= 0 || "u" < typeof AbortController) return n(), fetch(r.options.url, rl(rl({}, e), {}, {
                signal: a
            }));
            if (t <= 0) throw new ol("Request timed out");
            let o = new AbortController,
                s = () => o.abort(null == a ? void 0 : a.reason);
            null == a || a.addEventListener("abort", s, {
                once: !0
            });
            let l = !1,
                u = setTimeout(() => {
                    l = !0, o.abort()
                }, t);
            try {
                return n(), yield fetch(r.options.url, rl(rl({}, e), {}, {
                    signal: o.signal
                }))
            } catch (e) {
                if (l && !(null == a ? void 0 : a.aborted)) throw new ol("Request timed out");
                throw e
            } finally {
                clearTimeout(u), null == a || a.removeEventListener("abort", s)
            }
        })()
    }
    getRetryAfterDelayMs(e) {
        let t = e.headers.get("Retry-After");
        if (!t) return;
        if (/^\d+$/.test(t)) {
            let e = 1e3 * Number(t);
            return Number.isFinite(e) ? e : 1 / 0
        }
        let n = this.getNow(),
            r = function(e, t) {
                let n = a0.exec(e);
                if (n) {
                    let [, e, t, r, i, a, o, s] = n;
                    return a6({
                        weekday: a3.indexOf(e),
                        day: Number(t),
                        month: a5.indexOf(r),
                        year: Number(i),
                        hour: Number(a),
                        minute: Number(o),
                        second: Number(s)
                    })
                }
                let r = a1.exec(e);
                if (r) {
                    let [, e, n, i, a, o, s, l] = r, u = new Date(t);
                    if (Number.isNaN(u.getTime())) return;
                    let c = u.getUTCFullYear(),
                        d = 100 * Math.floor(c / 100) + Number(a);
                    d < c && (d += 100);
                    let f = a5.indexOf(i),
                        p = {
                            month: f,
                            day: Number(n),
                            hour: Number(o),
                            minute: Number(s),
                            second: Number(l),
                            millisecond: 0
                        },
                        h = {
                            month: u.getUTCMonth(),
                            day: u.getUTCDate(),
                            hour: u.getUTCHours(),
                            minute: u.getUTCMinutes(),
                            second: u.getUTCSeconds(),
                            millisecond: u.getUTCMilliseconds()
                        };
                    return (d > c + 50 || d === c + 50 && (p.month - h.month || p.day - h.day || p.hour - h.hour || p.minute - h.minute || p.second - h.second || p.millisecond - h.millisecond) > 0) && (d -= 100), a6({
                        weekday: a4.indexOf(e),
                        day: Number(n),
                        month: f,
                        year: d,
                        hour: Number(o),
                        minute: Number(s),
                        second: Number(l)
                    })
                }
                let i = a2.exec(e);
                if (!i) return;
                let [, a, o, s, l, u, c, d, f] = i;
                return a6({
                    weekday: a3.indexOf(a),
                    day: Number(null != s ? s : l),
                    month: a5.indexOf(o),
                    year: Number(f),
                    hour: Number(u),
                    minute: Number(c),
                    second: Number(d)
                })
            }(t, n);
        return null == r ? void 0 : Math.max(0, r - n)
    }
    reserveKeepalive(e, t) {
        if (!1 === t || e > 6e4 || oo + e > 6e4 || os >= 9) return {
            keepalive: !1,
            release: rJ
        };
        oo += e, os++;
        let n = !1;
        return {
            keepalive: !0,
            release: () => {
                !n && (n = !0, oo -= e, os--)
            }
        }
    }
    handleResponse(e, t) {
        202 === e.status && "invalid" === e.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), t), e.text().catch(rJ)
    }
    isFetchNetworkError(e) {
        return e instanceof TypeError || e instanceof ol || e instanceof DOMException && "AbortError" === e.name
    }
    compress(e) {
        return av(function*() {
            let t = new ReadableStream({
                    start(t) {
                        t.enqueue(new TextEncoder().encode(e)), t.close()
                    }
                }).pipeThrough(new CompressionStream("gzip")),
                n = [],
                r = t.getReader();
            for (;;) {
                let {
                    done: e,
                    value: t
                } = yield r.read();
                if (e) return new Blob(n);
                n.push(t)
            }
        })()
    }
    extendFaroSession(e, t, n) {
        var r, i;
        let a = e.sessionTracking;
        if (!(null == a ? void 0 : a.enabled)) return void t("Session expired.");
        let {
            fetchUserSession: o,
            storeUserSession: s
        } = rY(a), l = null == (r = this.metas.value.session) ? void 0 : r.id, u = null == (i = o()) ? void 0 : i.sessionId;
        n && n === l && n === u ? (rH({
            fetchUserSession: o,
            storeUserSession: s
        })({
            forceSessionExtend: !0
        }), t("Session expired; created new session.")) : t("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
    }
};

function oc(e = r3, t = 1) {
    return t > 0 && (rZ.error = t >= 1 ? function(...t) {
        e.error(`${rZ.prefix}
`, ...t)
    } : rJ, rZ.warn = t >= 2 ? function(...t) {
        e.warn(`${rZ.prefix}
`, ...t)
    } : rJ, rZ.info = t >= 3 ? function(...t) {
        e.info(`${rZ.prefix}
`, ...t)
    } : rJ, rZ.debug = t >= 4 ? function(...t) {
        e.debug(`${rZ.prefix}
`, ...t)
    } : rJ), rZ
}
let od = {
    enabled: !0,
    sendTimeout: 250,
    itemLimit: 50
}, of = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"], op = new WeakSet;

function oh(e) {
    return op.add(e), e
}

function om(e, t) {
    if (e.capture) return oh(e.capture(t));
    let n = oh(e.value);
    return null == t || t(), n
}
var og = class {
    constructor(e, t) {
        var n, r;
        this.signalBuffer = [], this.itemLimit = null != (n = null == t ? void 0 : t.itemLimit) ? n : 50, this.sendTimeout = null != (r = null == t ? void 0 : t.sendTimeout) ? r : 250, this.paused = (null == t ? void 0 : t.paused) || !1, this.sendFn = e, this.paused || this.start(), "u" > typeof document && document.addEventListener("visibilitychange", () => {
            "hidden" === document.visibilityState && this.flush()
        })
    }
    addItem(e) {
        !this.paused && (this.signalBuffer.push(e), this.signalBuffer.length >= this.itemLimit && this.flush())
    }
    start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval(() => this.flush(), this.sendTimeout))
    }
    pause() {
        this.paused = !0, clearInterval(this.flushInterval)
    }
    groupItems(e) {
        let t = new Map;
        return e.forEach(e => {
            let n = JSON.stringify(e.meta),
                r = t.get(n);
            r = void 0 === r ? [e] : [...r, e], t.set(n, r)
        }), Array.from(t.values())
    }
    flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        let e = this.signalBuffer;
        this.signalBuffer = [];
        try {
            this.groupItems(e).forEach(this.sendFn)
        } catch (t) {
            throw this.signalBuffer = [...e, ...this.signalBuffer], this.trimBufferToLimit(), t
        }
    }
    trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
    }
};
let ov = r3;

function ob(e) {
    return (ob = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function oy(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function ow(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? oy(Object(n), !0).forEach(function(t) {
            ! function(e, t, n) {
                var r;
                (r = function(e, t) {
                    if ("object" != ob(e) || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != ob(r)) return r;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(t, "string"), (t = "symbol" == ob(r) ? r : r + "") in e) ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }): e[t] = n
            }(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oy(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
    }
    return e
}

function o_(e) {
    return ru(e, "string") ? {
        stringValue: e
    } : rf(e) && Number.isInteger(e) ? {
        intValue: e
    } : rf(e) ? {
        doubleValue: e
    } : ru(e, "boolean") ? {
        boolValue: e
    } : rh(e) ? {
        arrayValue: {
            values: e.map(o_)
        }
    } : e instanceof Uint8Array ? {
        bytesValue: e
    } : rp(e) ? {
        kvlistValue: {
            values: Object.entries(e).map(([e, t]) => oS(e, t)).filter(oE)
        }
    } : {}
}

function oS(e, t) {
    if (null != t && "" !== t) return {
        key: e,
        value: o_(t)
    }
}

function oE(e) {
    return !!e && "string" == typeof(null == e ? void 0 : e.key) && void 0 !== (null == e ? void 0 : e.value)
}
var ok = e.i(798902);

function oT(e) {
    let {
        browser: t,
        sdk: n,
        app: r
    } = e.meta;
    return {
        attributes: [oS("browser.mobile", null == t ? void 0 : t.mobile), oS(ok.q, null == t ? void 0 : t.userAgent), oS("browser.language", null == t ? void 0 : t.language), oS("browser.brands", null == t ? void 0 : t.brands), oS("browser.platform", null == t ? void 0 : t.os), oS("browser.name", null == t ? void 0 : t.name), oS("browser.version", null == t ? void 0 : t.version), oS("browser.screen_width", null == t ? void 0 : t.viewportWidth), oS("browser.screen_height", null == t ? void 0 : t.viewportHeight), oS(ok.u, null == n ? void 0 : n.name), oS(ok.I, null == n ? void 0 : n.version), n ? oS(ok.a, ok.Z) : void 0, oS(ok.x, null == r ? void 0 : r.name), oS(ok.r, null == r ? void 0 : r.version), oS("service.namespace", null == r ? void 0 : r.namespace), oS("deployment.environment.name", null == r ? void 0 : r.environment)].filter(oE)
    }
}

function ox(e, t) {
    return "function" == typeof t ? o_(t(e)) : void 0
}
var oC = class {
    constructor({
        internalLogger: e,
        customOtlpTransform: t,
        transportItem: n
    }) {
        this.resourceSpans = [], this.internalLogger = e, this.resourceLogs = [], this.getLogTransforms = function(e, t) {
            function n(e) {
                return {
                    scope: {
                        name: "@grafana/faro-web-sdk",
                        version: r6
                    },
                    logRecords: [r(e)]
                }
            }

            function r(n) {
                let {
                    type: r
                } = n;
                switch (r) {
                    case oe.LOG:
                        return function(e) {
                            var t, n;
                            let {
                                meta: r,
                                payload: o
                            } = e, s = a(o.timestamp), l = o_(o.message);
                            return ow(ow({
                                timeUnixNano: s
                            }, function(e) {
                                switch (e) {
                                    case it.TRACE:
                                        return {
                                            severityNumber: 1, severityText: "TRACE"
                                        };
                                    case it.DEBUG:
                                        return {
                                            severityNumber: 5, severityText: "DEBUG"
                                        };
                                    case it.INFO:
                                        return {
                                            severityNumber: 9, severityText: "INFO"
                                        };
                                    case it.LOG:
                                        return {
                                            severityNumber: 10, severityText: "INFO2"
                                        };
                                    case it.WARN:
                                        return {
                                            severityNumber: 13, severityText: "WARN"
                                        };
                                    case it.ERROR:
                                        return {
                                            severityNumber: 17, severityText: "ERROR"
                                        }
                                }
                            }(o.level)), {}, {
                                body: l,
                                attributes: [...i(r), oS("faro.log.context", o.context)].filter(oE),
                                traceId: null == (t = o.trace) ? void 0 : t.trace_id,
                                spanId: null == (n = o.trace) ? void 0 : n.span_id
                            })
                        }(n);
                    case oe.EXCEPTION:
                        return function(e) {
                            var n, r;
                            let {
                                meta: o,
                                payload: s
                            } = e, l = a(s.timestamp), u = ox(e, null == t ? void 0 : t.createErrorLogBody);
                            return ow(ow({
                                timeUnixNano: l
                            }, u ? {
                                body: u
                            } : {}), {}, {
                                attributes: [...i(o), oS(ok.M, s.type), oS(ok.h, s.value), oS("faro.error.stacktrace", s.stacktrace), oS("faro.error.context", s.context)].filter(oE),
                                traceId: null == (n = s.trace) ? void 0 : n.trace_id,
                                spanId: null == (r = s.trace) ? void 0 : r.span_id
                            })
                        }(n);
                    case oe.EVENT:
                        return function(e) {
                            var t, n;
                            let {
                                meta: r,
                                payload: o
                            } = e;
                            return {
                                timeUnixNano: a(o.timestamp),
                                body: o_(o.name),
                                attributes: [...i(r), oS("event.name", o.name), oS("event.domain", o.domain), oS("event.attributes", o.attributes)].filter(oE),
                                traceId: null == (t = o.trace) ? void 0 : t.trace_id,
                                spanId: null == (n = o.trace) ? void 0 : n.span_id
                            }
                        }(n);
                    case oe.MEASUREMENT:
                        return function(e) {
                            var n, r;
                            let {
                                meta: o,
                                payload: s
                            } = e, l = a(s.timestamp), [u, c] = Object.entries(s.values).flat(), d = ox(e, null == t ? void 0 : t.createMeasurementLogBody);
                            return ow(ow({
                                timeUnixNano: l
                            }, d ? {
                                body: d
                            } : {}), {}, {
                                attributes: [...i(o), oS("measurement.type", s.type), oS("measurement.name", u), oS("measurement.value", c), oS("faro.measurement.context", s.context)].filter(oE),
                                traceId: null == (n = s.trace) ? void 0 : n.trace_id,
                                spanId: null == (r = s.trace) ? void 0 : r.span_id
                            })
                        }(n);
                    default:
                        return null == e || e.error(`Unknown TransportItemType: ${r}`), {}
                }
            }

            function i(e) {
                let {
                    view: t,
                    page: n,
                    session: r,
                    user: i
                } = e;
                return [oS("view.name", null == t ? void 0 : t.name), oS(ok.v, null == n ? void 0 : n.url), oS("page.id", null == n ? void 0 : n.id), oS("page.attributes", null == n ? void 0 : n.attributes), oS("session.id", null == r ? void 0 : r.id), oS("session.attributes", null == r ? void 0 : r.attributes), oS("user.id", null == i ? void 0 : i.id), oS("user.name", null == i ? void 0 : i.username), oS("user.email", null == i ? void 0 : i.email), oS("user.full_name", null == i ? void 0 : i.fullName), oS("user.roles", null == i ? void 0 : i.roles), oS("user.hash", null == i ? void 0 : i.hash), oS("user.attributes", null == i ? void 0 : i.attributes)].filter(oE)
            }

            function a(e) {
                return 1e6 * Date.parse(e)
            }
            return {
                toResourceLog: function(e) {
                    return {
                        resource: oT(e),
                        scopeLogs: [n(e)]
                    }
                },
                toScopeLog: n,
                toLogRecord: r
            }
        }(this.internalLogger, t), this.getTraceTransforms = (this.internalLogger, {
            toResourceSpan: function(e) {
                var t;
                let n = oT(e),
                    r = null == (t = e.payload.resourceSpans) || null == (t = t[0]) ? void 0 : t.scopeSpans;
                return {
                    resource: n,
                    scopeSpans: null != r ? r : []
                }
            }
        }), n && this.addResourceItem(n)
    }
    getPayload() {
        return {
            resourceLogs: this.resourceLogs,
            resourceSpans: this.resourceSpans
        }
    }
    addResourceItem(e) {
        var t, n, r;
        let {
            type: i
        } = e;
        try {
            switch (i) {
                case oe.LOG:
                case oe.EXCEPTION:
                case oe.EVENT:
                case oe.MEASUREMENT: {
                    let {
                        toLogRecord: n,
                        toResourceLog: r
                    } = this.getLogTransforms;
                    0 === this.resourceLogs.length ? this.resourceLogs = [r(e)] : null == (t = this.resourceLogs[0]) || null == (t = t.scopeLogs[0]) || t.logRecords.push(n(e));
                    break
                }
                case oe.TRACE: {
                    let {
                        toResourceSpan: t
                    } = this.getTraceTransforms;
                    this.resourceSpans.push(t(e));
                    break
                }
                default:
                    null == (n = this.internalLogger) || n.error(`Unknown TransportItemType: ${i}`)
            }
        } catch (e) {
            null == (r = this.internalLogger) || r.error(e)
        }
    }
};

function oO(e, t, n, r, i, a, o) {
    try {
        var s = e[a](o),
            l = s.value
    } catch (e) {
        n(e);
        return
    }
    s.done ? t(l) : Promise.resolve(l).then(r, i)
}

function oP(e) {
    return function() {
        var t = this,
            n = arguments;
        return new Promise(function(r, i) {
            var a = e.apply(t, n);

            function o(e) {
                oO(a, r, i, o, s, "next", e)
            }

            function s(e) {
                oO(a, r, i, o, s, "throw", e)
            }
            o(void 0)
        })
    }
}
let oN = ["headers"];
var oA = class extends a9 {
    constructor(e) {
        var t, n, r;
        super(), this.options = e, this.name = "@grafana/faro-web-sdk:transport-otlp-http", this.version = r6, this.sendingTracesDisabledUntil = new Date, this.sendingLogsDisabledUntil = new Date, this.rateLimitBackoffMs = null != (t = e.defaultRateLimitBackoffMs) ? t : 5e3, this.promiseBuffer = a7({
            size: null != (n = null == e ? void 0 : e.bufferSize) ? n : 30,
            concurrency: null != (r = null == e ? void 0 : e.concurrency) ? r : 5
        })
    }
    getIgnoreUrls() {
        var e;
        let {
            tracesURL: t = "",
            logsURL: n = ""
        } = this.options;
        return [t, n].filter(Boolean).concat(null != (e = this.config.ignoreUrls) ? e : [])
    }
    isBatched() {
        return !0
    }
    send(e) {
        var t = this;
        return oP(function*() {
            let n = new oC({
                internalLogger: t.internalLogger,
                customOtlpTransform: t.options.otlpTransform
            });
            e.forEach(e => n.addResourceItem(e)), yield t.sendPayload(n.getPayload())
        })()
    }
    sendPayload(e) {
        var t = this;
        return oP(function*() {
            try {
                let {
                    tracesURL: n = "",
                    logsURL: r = ""
                } = t.options;
                for (let [i, a] of Object.entries(e)) {
                    let e;
                    if (!(rh(a) && a.length > 0)) continue;
                    let o = e => {},
                        s = "";
                    switch (i) {
                        case "resourceSpans":
                            s = n, e = t.sendingTracesDisabledUntil, o = e => {
                                t.sendingTracesDisabledUntil = e
                            };
                            break;
                        case "resourceLogs":
                            s = r, e = t.sendingLogsDisabledUntil, o = e => {
                                t.sendingLogsDisabledUntil = e
                            }
                    }
                    if (e && e > new Date(Date.now())) return void t.logWarn(`Dropping transport item due to too many requests. Backoff until ${e}`);
                    let l = JSON.stringify({
                            [i]: a
                        }),
                        {
                            requestOptions: u,
                            apiKey: c
                        } = t.options,
                        d = null != u ? u : {},
                        {
                            headers: f = {}
                        } = d,
                        p = function(e, t) {
                            if (null == e) return {};
                            var n, r, i = function(e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if (({}).hasOwnProperty.call(e, r)) {
                                        if (t.includes(r)) continue;
                                        n[r] = e[r]
                                    } return n
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var a = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < a.length; r++) n = a[r], t.includes(n) || ({}).propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                            }
                            return i
                        }(d, oN);
                    s && (yield t.promiseBuffer.add(oP(function*() {
                        let n = {};
                        for (let [e, t] of Object.entries(f)) n[e] = "function" == typeof t ? yield Promise.resolve(t()): t;
                        return fetch(s, ow({
                            method: "POST",
                            headers: ow(ow({
                                "Content-Type": "application/json"
                            }, n), c ? {
                                "x-api-key": c
                            } : {}),
                            body: l,
                            keepalive: l.length <= 6e4
                        }, null != p ? p : {})).then(n => (429 === n.status && (o(t.getRetryAfterDate(n)), t.logWarn(`Too many requests, backing off until ${e}`)), n.text().catch(rJ), n)).catch(e => {
                            t.logError("Failed sending payload to the receiver\n", JSON.parse(l), e)
                        })
                    })))
                }
            } catch (e) {
                t.logError(e)
            }
        })()
    }
    getRetryAfterDate(e) {
        let t = Date.now(),
            n = e.headers.get("Retry-After");
        if (n) {
            let e = Number(n);
            if (!isNaN(e)) return new Date(1e3 * e + t);
            let r = Date.parse(n);
            if (!isNaN(r)) return new Date(r)
        }
        return new Date(t + this.rateLimitBackoffMs)
    }
}, oL = class {
    constructor(e, t) {
        this.processor = e, this.metas = t
    }
    forceFlush() {
        return this.processor.forceFlush()
    }
    onStart(e, t) {
        var n;
        let r = this.metas.value.session;
        (null == r ? void 0 : r.id) && (e.attributes["session.id"] = r.id);
        let i = null != (n = this.metas.value.user) ? n : {};
        i.email && (e.attributes["user.email"] = i.email), i.id && (e.attributes["user.id"] = i.id), i.username && (e.attributes["user.name"] = i.username), i.fullName && (e.attributes["user.full_name"] = i.fullName), i.roles && (e.attributes["user.roles"] = i.roles.split(",").map(e => e.trim())), i.hash && (e.attributes["user.hash"] = i.hash), this.processor.onStart(e, t)
    }
    onEnd(e) {
        this.processor.onEnd(e)
    }
    shutdown() {
        return this.processor.shutdown()
    }
}, oR = class {
    constructor(e, t) {
        this.propagator = e, this.shouldOmitTraceContext = t
    }
    inject(e, t, n) {
        this.shouldOmitTraceContext() || this.propagator.inject(e, t, n)
    }
    extract(e, t, n) {
        return this.propagator.extract(e, t, n)
    }
    fields() {
        return this.propagator.fields()
    }
}, oI = e.i(400533);
(B = Z || (Z = {}))[B.SUCCESS = 0] = "SUCCESS", B[B.FAILED = 1] = "FAILED";
var oM = e.i(466986), oD = e.i(426393), oz = class {
    constructor(e) {
        this.config = e
    }
    export (e, t) {
        let n = (0, oD.createExportTraceServiceRequest)(e, oM.JSON_ENCODER);
        this.config.api.pushTraces(n),
            function(e = [], t) {
                for (let i of e) {
                    let {
                        scopeSpans: e
                    } = i;
                    for (let i of e) {
                        let {
                            scope: e,
                            spans: a = []
                        } = i;
                        for (let i of a) {
                            var n, r;
                            if (i.kind !== oI.ESpanKind.SPAN_KIND_CLIENT) continue;
                            let a = {
                                    traceId: i.traceId.toString(),
                                    spanId: i.spanId.toString()
                                },
                                o = {};
                            for (let e of i.attributes) o[e.key] = String(Object.values(e.value)[0]);
                            Number.isNaN(i.endTimeUnixNano) || Number.isNaN(i.startTimeUnixNano) || (o.duration_ns = String(Number(i.endTimeUnixNano) - Number(i.startTimeUnixNano)));
                            let s = (null != (n = null == e ? void 0 : e.name) ? n : "").indexOf("-"),
                                l = ik;
                            (null == e ? void 0 : e.name) && (-1 === s && (l = null != (r = e.name.split("/")[1]) ? r : e.name), s > -1 && (l = null == e ? void 0 : e.name.substring(s + 1))), t.pushEvent(`faro.tracing.${l}`, o, void 0, {
                                spanContext: a,
                                timestampOverwriteMs: Number(i.endTimeUnixNano) / 1e6,
                                customPayloadTransformer: e => {
                                    if (null != o["faro.action.user.name"] && null != o["faro.action.user.parentId"]) {
                                        var t, n;
                                        e.action = {
                                            name: o["faro.action.user.name"],
                                            parentId: o["faro.action.user.parentId"]
                                        }, null == (t = e.attributes) || delete t["faro.action.user.name"], null == (n = e.attributes) || delete n["faro.action.user.parentId"]
                                    }
                                    return e
                                }
                            })
                        }
                    }
                }
            }(n.resourceSpans, this.config.api), t({
                code: Z.SUCCESS
            })
    }
    shutdown() {
        return Promise.resolve(void 0)
    }
}, oU = e.i(122625), oj = e.i(926070), oF = e.i(399086);
(H = ee || (ee = {}))[H.INTERNAL = 0] = "INTERNAL", H[H.SERVER = 1] = "SERVER", H[H.CLIENT = 2] = "CLIENT", H[H.PRODUCER = 3] = "PRODUCER", H[H.CONSUMER = 4] = "CONSUMER", (q = et || (et = {}))[q.UNSET = 0] = "UNSET", q[q.OK = 1] = "OK", q[q.ERROR = 2] = "ERROR";
var o$ = e.i(280041); class oB {}
class oH {
    addCallback(e) {}
    removeCallback(e) {}
}
let oq = new class {
    createGauge(e, t) {
        return oW
    }
    createHistogram(e, t) {
        return oQ
    }
    createCounter(e, t) {
        return oV
    }
    createUpDownCounter(e, t) {
        return oG
    }
    createObservableGauge(e, t) {
        return oX
    }
    createObservableCounter(e, t) {
        return oK
    }
    createObservableUpDownCounter(e, t) {
        return oY
    }
    addBatchObservableCallback(e, t) {}
    removeBatchObservableCallback(e) {}
}, oV = new class extends oB {
    add(e, t) {}
}, oW = new class extends oB {
    record(e, t) {}
}, oQ = new class extends oB {
    record(e, t) {}
}, oG = new class extends oB {
    add(e, t) {}
}, oK = new class extends oH {}, oX = new class extends oH {}, oY = new class extends oH {}, oJ = new class {
    getMeter(e, t, n) {
        return oq
    }
};
var oZ = e.i(336092), o0 = e.i(130252);
let o1 = "metrics", o2 = (class e {
    static getInstance() {
        return this._instance || (this._instance = new e), this._instance
    }
    setGlobalMeterProvider(e) {
        return (0, oZ.P)(o1, e, o0.f.instance())
    }
    getMeterProvider() {
        return (0, oZ.S)(o1) || oJ
    }
    getMeter(e, t, n) {
        return this.getMeterProvider().getMeter(e, t, n)
    }
    disable() {
        (0, oZ.Y)(o1, o0.f.instance())
    }
}).getInstance(), o3 = Symbol.for("io.opentelemetry.js.api.logs"), o4 = globalThis; class o5 {
    emit(e) {}
    enabled() {
        return !1
    }
}
let o6 = new o5, o8 = new class {
    getLogger(e, t, n) {
        return new o5
    }
}; class o9 {
    constructor(e, t, n, r) {
        this._provider = e, this.name = t, this.version = n, this.options = r
    }
    emit(e) {
        this._getLogger().emit(e)
    }
    enabled(e) {
        return this._getLogger().enabled(e)
    }
    _getLogger() {
        if (this._delegate) return this._delegate;
        let e = this._provider._getDelegateLogger(this.name, this.version, this.options);
        return e ? (this._delegate = e, this._delegate) : o6
    }
}
class o7 {
    getLogger(e, t, n) {
        var r;
        return null != (r = this._getDelegateLogger(e, t, n)) ? r : new o9(this, e, t, n)
    }
    _getDelegate() {
        var e;
        return null != (e = this._delegate) ? e : o8
    }
    _setDelegate(e) {
        this._delegate = e
    }
    _getDelegateLogger(e, t, n) {
        var r;
        return null == (r = this._delegate) ? void 0 : r.getLogger(e, t, n)
    }
}
let se = (class e {
    constructor() {
        this._proxyLoggerProvider = new o7
    }
    static getInstance() {
        return this._instance || (this._instance = new e), this._instance
    }
    setGlobalLoggerProvider(e) {
        return o4[o3] ? this.getLoggerProvider() : (o4[o3] = t => 1 === t ? e : o8, this._proxyLoggerProvider._setDelegate(e), e)
    }
    getLoggerProvider() {
        var e, t;
        return null != (t = null == (e = o4[o3]) ? void 0 : e.call(o4, 1)) ? t : this._proxyLoggerProvider
    }
    getLogger(e, t, n) {
        return this.getLoggerProvider().getLogger(e, t, n)
    }
    disable() {
        delete o4[o3], this._proxyLoggerProvider = new o7
    }
}).getInstance(), st = console.error.bind(console);

function sn(e, t, n) {
    let r = !!e[t] && Object.prototype.propertyIsEnumerable.call(e, t);
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: r,
        writable: !0,
        value: n
    })
}
let sr = (e, t, n) => {
    if (!e || !e[t]) return void st("no original function " + String(t) + " to wrap");
    if (!n) {
        st("no wrapper function"), st(Error().stack);
        return
    }
    let r = e[t];
    if ("function" != typeof r || "function" != typeof n) return void st("original object and wrapper must be functions");
    let i = n(r, t);
    return sn(i, "__original", r), sn(i, "__unwrap", () => {
        e[t] === i && sn(e, t, r)
    }), sn(i, "__wrapped", !0), sn(e, t, i), i
}, si = (e, t, n) => {
    if (e) Array.isArray(e) || (e = [e]);
    else {
        st("must provide one or more modules to patch"), st(Error().stack);
        return
    }
    t && Array.isArray(t) ? e.forEach(e => {
        t.forEach(t => {
            sr(e, t, n)
        })
    }) : st("must provide one or more functions to wrap on modules")
}, sa = (e, t) => {
    if (!e || !e[t]) {
        st("no function to unwrap."), st(Error().stack);
        return
    }
    let n = e[t];
    n.__unwrap ? n.__unwrap() : st("no original to unwrap to -- has " + String(t) + " already been unwrapped?")
}, so = (e, t) => {
    if (e) Array.isArray(e) || (e = [e]);
    else {
        st("must provide one or more modules to patch"), st(Error().stack);
        return
    }
    t && Array.isArray(t) ? e.forEach(e => {
        t.forEach(t => {
            sa(e, t)
        })
    }) : st("must provide one or more functions to unwrap on modules")
};

function ss(e) {
    e && e.logger && ("function" != typeof e.logger ? st("new logger isn't a function, not replacing") : st = e.logger)
}
ss.wrap = sr, ss.massWrap = si, ss.unwrap = sa, ss.massUnwrap = so; class sl {
    _config = {};
    _tracer;
    _meter;
    _logger;
    _diag;
    instrumentationName;
    instrumentationVersion;
    constructor(e, t, n) {
        this.instrumentationName = e, this.instrumentationVersion = t, this.setConfig(n), this._diag = o$.f.createComponentLogger({
            namespace: e
        }), this._tracer = oF.f.getTracer(e, t), this._meter = o2.getMeter(e, t), this._logger = se.getLogger(e, t), this._updateMetricInstruments()
    }
    _wrap = sr;
    _unwrap = sa;
    _massWrap = si;
    _massUnwrap = so;
    get meter() {
        return this._meter
    }
    setMeterProvider(e) {
        this._meter = e.getMeter(this.instrumentationName, this.instrumentationVersion), this._updateMetricInstruments()
    }
    get logger() {
        return this._logger
    }
    setLoggerProvider(e) {
        this._logger = e.getLogger(this.instrumentationName, this.instrumentationVersion)
    }
    getModuleDefinitions() {
        let e = this.init() ?? [];
        return Array.isArray(e) ? e : [e]
    }
    _updateMetricInstruments() {}
    getConfig() {
        return this._config
    }
    setConfig(e) {
        this._config = {
            enabled: !0,
            ...e
        }
    }
    setTracerProvider(e) {
        this._tracer = e.getTracer(this.instrumentationName, this.instrumentationVersion)
    }
    get tracer() {
        return this._tracer
    }
    _runSpanCustomizationHook(e, t, n, r) {
        if (e) try {
            e(n, r)
        } catch (e) {
            this._diag.error("Error running span customization hook due to exception in handler", {
                triggerName: t
            }, e)
        }
    }
}
class su extends sl {
    constructor(e, t, n) {
        super(e, t, n), this._config.enabled && this.enable()
    }
}

function sc(e, t, n) {
    let r, i;
    try {
        i = e()
    } catch (e) {
        r = e
    } finally {
        if (t(r, i), r && !n) throw r;
        return i
    }
}
var sd = e.i(178452), sf = e.i(329390), sp = e.i(581638);

function sh(e, t, n, r = !0) {
    if (t in n && "number" == typeof n[t] && !(r && 0 === n[t])) return e.addEvent(t, n[t])
}

function sm(e, t, n = !1, r, i) {
    if (void 0 === r && (r = 0 !== t[en.START_TIME]), n || (sh(e, en.FETCH_START, t, r), sh(e, en.DOMAIN_LOOKUP_START, t, r), sh(e, en.DOMAIN_LOOKUP_END, t, r), sh(e, en.CONNECT_START, t, r), sh(e, en.SECURE_CONNECTION_START, t, r), sh(e, en.CONNECT_END, t, r), sh(e, en.REQUEST_START, t, r), sh(e, en.RESPONSE_START, t, r), sh(e, en.RESPONSE_END, t, r)), !i) {
        let n = t[en.ENCODED_BODY_SIZE];
        void 0 !== n && e.setAttribute("http.response_content_length", n);
        let r = t[en.DECODED_BODY_SIZE];
        void 0 !== r && n !== r && e.setAttribute("http.response_content_length_uncompressed", r)
    }
}

function sg() {
    return "u" > typeof location ? location.origin : void 0
}

function sv(e, t, n, r, i = new WeakSet, a) {
    var o, s, l, u, c, d;
    let f, p, h, m = sb(e),
        g = (o = e = m.toString(), s = t, l = n, u = r, c = i, d = a, f = (0, sd.O)(s), p = (0, sd.O)(l), (h = u.filter(e => {
            let t = (0, sd.O)((0, sd.N)(e[en.FETCH_START])),
                n = (0, sd.O)((0, sd.N)(e[en.RESPONSE_END]));
            return e.initiatorType.toLowerCase() === (d || "xmlhttprequest") && e.name === o && t >= f && n <= p
        })).length > 0 && (h = h.filter(e => !c.has(e))), h);
    if (0 === g.length) return {
        mainRequest: void 0
    };
    if (1 === g.length) return {
        mainRequest: g[0]
    };
    let v = g.slice().sort((e, t) => {
        let n = e[en.FETCH_START],
            r = t[en.FETCH_START];
        return n > r ? 1 : n < r ? -1 : 0
    });
    if (m.origin === sg() || !(v.length > 1)) return {
        mainRequest: g[0]
    };
    {
        let e = v[0],
            t = function(e, t, n) {
                let r, i = (0, sd.O)(n),
                    a = (0, sd.O)((0, sd.N)(t)),
                    o = e[1],
                    s = e.length;
                for (let t = 1; t < s; t++) {
                    let n = e[t],
                        s = (0, sd.O)((0, sd.N)(n[en.FETCH_START])),
                        l = i - (0, sd.O)((0, sd.N)(n[en.RESPONSE_END]));
                    s >= a && (!r || l < r) && (r = l, o = n)
                }
                return o
            }(v, e[en.RESPONSE_END], n),
            r = e[en.RESPONSE_END];
        return t[en.FETCH_START] < r && (t = e, e = void 0), {
            corsPreFlightRequest: e,
            mainRequest: t
        }
    }
}

function sb(e) {
    if ("function" == typeof URL) return new URL(e, "u" > typeof document ? document.baseURI : "u" > typeof location ? location.href : void 0);
    let t = (O || (O = document.createElement("a")), O);
    return t.href = e, t
}

function sy(e, t) {
    let n = t || [];
    return ("string" == typeof n || n instanceof RegExp) && (n = [n]), sb(e).origin === sg() || n.some(t => (0, sf.c)(e, t))
}(V = en || (en = {})).CONNECT_END = "connectEnd", V.CONNECT_START = "connectStart", V.DECODED_BODY_SIZE = "decodedBodySize", V.DOM_COMPLETE = "domComplete", V.DOM_CONTENT_LOADED_EVENT_END = "domContentLoadedEventEnd", V.DOM_CONTENT_LOADED_EVENT_START = "domContentLoadedEventStart", V.DOM_INTERACTIVE = "domInteractive", V.DOMAIN_LOOKUP_END = "domainLookupEnd", V.DOMAIN_LOOKUP_START = "domainLookupStart", V.ENCODED_BODY_SIZE = "encodedBodySize", V.FETCH_START = "fetchStart", V.LOAD_EVENT_END = "loadEventEnd", V.LOAD_EVENT_START = "loadEventStart", V.NAVIGATION_START = "navigationStart", V.REDIRECT_END = "redirectEnd", V.REDIRECT_START = "redirectStart", V.REQUEST_START = "requestStart", V.RESPONSE_END = "responseEnd", V.RESPONSE_START = "responseStart", V.SECURE_CONNECTION_START = "secureConnectionStart", V.START_TIME = "startTime", V.UNLOAD_EVENT_END = "unloadEventEnd", V.UNLOAD_EVENT_START = "unloadEventStart", (W = er || (er = {})).METHOD_OPEN = "open", W.METHOD_SEND = "send", W.EVENT_ABORT = "abort", W.EVENT_ERROR = "error", W.EVENT_LOAD = "loaded", W.EVENT_TIMEOUT = "timeout";
var sw = e.i(636600);
let s_ = o$.f.createComponentLogger({
    namespace: "@opentelemetry/opentelemetry-instrumentation-xml-http-request/utils"
}), sS = new TextEncoder;

function sE(e) {
    return sS.encode(e).byteLength
}
let sk = {
    CONNECT: !0,
    DELETE: !0,
    GET: !0,
    HEAD: !0,
    OPTIONS: !0,
    PATCH: !0,
    POST: !0,
    PUT: !0,
    TRACE: !0,
    QUERY: !0
}, sT = {
    "https:": "443",
    "http:": "80"
}, sx = "0.222.0"; class sC extends su {
    component = "xml-http-request";
    version = sx;
    moduleName = this.component;
    _tasksCount = 0;
    _xhrMem = new WeakMap;
    _usedResources = new WeakSet;
    constructor(e = {}) {
        super("@opentelemetry/instrumentation-xml-http-request", sx, e)
    }
    init() {}
    _addHeaders(e, t) {
        if (!sy(sb(t).href, this.getConfig().propagateTraceHeaderCorsUrls)) {
            let e = {};
            oU.f.inject(oj.f.active(), e), Object.keys(e).length > 0 && this._diag.debug("headers inject skipped due to CORS policy");
            return
        }
        let n = {};
        oU.f.inject(oj.f.active(), n), Object.keys(n).forEach(t => {
            e.setRequestHeader(t, String(n[t]))
        })
    }
    _addChildSpan(e, t) {
        oj.f.with(oF.f.setSpan(oj.f.active(), e), () => {
            let e = this.tracer.startSpan("CORS Preflight", {
                startTime: t[en.FETCH_START]
            });
            sm(e, t, this.getConfig().ignoreNetworkEvents, void 0, !0), e.end(t[en.RESPONSE_END])
        })
    }
    _addFinalSpanAttributes(e, t) {
        t.status && e.setAttribute(ok.i, t.status)
    }
    _applyAttributesAfterXHR(e, t) {
        let n = this.getConfig().applyCustomAttributesOnSpan;
        "function" == typeof n && sc(() => n(e, t), e => {
            e && this._diag.error("applyCustomAttributesOnSpan", e)
        }, !0)
    }
    _addResourceObserver(e, t) {
        let n = this._xhrMem.get(e);
        n && "function" == typeof PerformanceObserver && "function" == typeof PerformanceResourceTiming && (n.createdResources = {
            observer: new PerformanceObserver(e => {
                let r = e.getEntries(),
                    i = sb(t);
                r.forEach(e => {
                    "xmlhttprequest" === e.initiatorType && e.name === i.href && n.createdResources && n.createdResources.entries.push(e)
                })
            }),
            entries: []
        }, n.createdResources.observer.observe({
            entryTypes: ["resource"]
        }))
    }
    _clearResources() {
        0 === this._tasksCount && this.getConfig().clearTimingResources && (sp.f.clearResourceTimings(), this._xhrMem = new WeakMap, this._usedResources = new WeakSet)
    }
    _findResourceAndAddNetworkEvents(e, t, n, r, i) {
        if (!n || !r || !i || !e.createdResources) return;
        let a = e.createdResources.entries;
        a && a.length || (a = sp.f.getEntriesByType("resource"));
        let o = sv(sb(n).href, r, i, a, this._usedResources);
        if (o.mainRequest) {
            let e = o.mainRequest;
            this._markResourceAsUsed(e);
            let n = o.corsPreFlightRequest;
            n && (this._addChildSpan(t, n), this._markResourceAsUsed(n)), sm(t, e, this.getConfig().ignoreNetworkEvents, void 0, !0)
        }
    }
    _cleanPreviousSpanInformation(e) {
        let t = this._xhrMem.get(e);
        if (t) {
            let n = t.callbackToRemoveEvents;
            n && n(), this._xhrMem.delete(e)
        }
    }
    _createSpan(e, t, n) {
        let r, i, a, o = sb(t);
        if ((0, sf.Q)(o.href, this.getConfig().ignoreUrls)) return void this._diag.debug("ignoring span as url matches ignored url");
        let s = {},
            l = (r = function() {
                if (void 0 === P) {
                    let e = (0, sw.d)("OTEL_INSTRUMENTATION_HTTP_KNOWN_METHODS");
                    e && e.length > 0 ? (P = {}, e.forEach(e => {
                        P[e] = !0
                    })) : P = sk
                }
                return P
            }(), (i = n.toUpperCase()) in r ? i : "_OTHER");
        s[ok.U] = l, l !== n && (s[ok.O] = n), s[ok.v] = o.toString(), s[ok.$] = o.hostname;
        let u = (a = Number(o.port || sT[o.protocol])) && !isNaN(a) ? a : void 0;
        u && (s[ok.w] = u);
        let c = this.tracer.startSpan(l, {
            kind: ee.CLIENT,
            attributes: s
        });
        return c.addEvent(er.METHOD_OPEN), this._cleanPreviousSpanInformation(e), this._xhrMem.set(e, {
            span: c,
            spanUrl: t
        }), c
    }
    _markResourceAsUsed(e) {
        this._usedResources.add(e)
    }
    _patchOpen() {
        return e => {
            let t = this;
            return function(...n) {
                if (!t._isEnabled) return e.apply(this, n);
                let r = n[0],
                    i = n[1];
                return t._createSpan(this, i, r), e.apply(this, n)
            }
        }
    }
    _patchSend() {
        let e = this;

        function t(t, n, r, i) {
            let a = e._xhrMem.get(n);
            if (!a) return;
            if (a.status = n.status, a.statusText = n.statusText, e._xhrMem.delete(n), a.span) {
                let t = a.span;
                e._applyAttributesAfterXHR(t, n), r ? i && (t.setStatus({
                    code: et.ERROR,
                    message: i
                }), t.setAttribute(ok.Q, i)) : a.status && a.status >= 400 && (t.setStatus({
                    code: et.ERROR
                }), t.setAttribute(ok.Q, String(a.status)))
            }
            let o = (0, sd.G)(),
                s = Date.now();
            setTimeout(() => {
                ! function(t, n, r, i) {
                    let a = n.callbackToRemoveEvents;
                    "function" == typeof a && a();
                    let {
                        span: o,
                        spanUrl: s,
                        sendStartTime: l
                    } = n;
                    o && (e._findResourceAndAddNetworkEvents(n, o, s, l, r), o.addEvent(t, i), e._addFinalSpanAttributes(o, n), o.end(i), e._tasksCount--), e._clearResources()
                }(t, a, o, s)
            }, 300)
        }

        function n() {
            t(er.EVENT_ERROR, this, !0, "error")
        }

        function r() {
            t(er.EVENT_ABORT, this, !1)
        }

        function i() {
            t(er.EVENT_TIMEOUT, this, !0, "timeout")
        }

        function a() {
            this.status < 299 ? t(er.EVENT_LOAD, this, !1) : t(er.EVENT_ERROR, this, !1)
        }
        return t => function(...o) {
            if (!e._isEnabled) return t.apply(this, o);
            let s = e._xhrMem.get(this);
            if (!s) return t.apply(this, o);
            let l = s.span,
                u = s.spanUrl;
            if (l && u) {
                if (e.getConfig().measureRequestSize && o?.[0]) {
                    var c, d;
                    let e = (d = c = o[0], "u" > typeof Document && d instanceof Document) ? new XMLSerializer().serializeToString(document).length : "string" == typeof c ? sE(c) : c instanceof Blob ? c.size : c instanceof FormData ? function(e) {
                        let t = 0;
                        for (let [n, r] of e.entries()) t += n.length, r instanceof Blob ? t += r.size : t += r.length;
                        return t
                    }(c) : c instanceof URLSearchParams ? sE(c.toString()) : void 0 !== c.byteLength ? c.byteLength : void s_.warn("unknown body type");
                    void 0 !== e && l.setAttribute("http.request.body.size", e)
                }
                oj.f.with(oF.f.setSpan(oj.f.active(), l), () => {
                    e._tasksCount++, s.sendStartTime = (0, sd.G)(), l.addEvent(er.METHOD_SEND), this.addEventListener("abort", r), this.addEventListener("error", n), this.addEventListener("load", a), this.addEventListener("timeout", i), s.callbackToRemoveEvents = () => {
                        let t;
                        this.removeEventListener("abort", r), this.removeEventListener("error", n), this.removeEventListener("load", a), this.removeEventListener("timeout", i), (t = e._xhrMem.get(this)) && (t.callbackToRemoveEvents = void 0), s.createdResources && s.createdResources.observer.disconnect()
                    }, e._addHeaders(this, u), e._addResourceObserver(this, u)
                })
            }
            return t.apply(this, o)
        }
    }
    enable() {
        if (!this._isEnabled) {
            if (this._isXhrPatched) {
                this._diag.debug("reactivating existing patch on", this.moduleName, this.version), this._isEnabled = !0;
                return
            }
            try {
                this._diag.debug("applying patch to", this.moduleName, this.version), this._wrap(XMLHttpRequest.prototype, "open", this._patchOpen()), this._wrap(XMLHttpRequest.prototype, "send", this._patchSend()), this._isXhrPatched = !0, this._isEnabled = !0
            } catch (e) {
                this._unwrap(XMLHttpRequest.prototype, "open"), this._unwrap(XMLHttpRequest.prototype, "send"), this._diag.warn("Failed to patch globalThis.XMLHttpRequest; instrumentation will not be enabled. Another script may have locked globalThis.XMLHttpRequest via Object.defineProperty.", e)
            }
        }
    }
    disable() {
        this._isEnabled && (this._isEnabled = !1, this._tasksCount = 0, this._xhrMem = new WeakMap, this._usedResources = new WeakSet)
    }
}
var sO = class extends sC {
    constructor(e = {}) {
        super(e), this.parentCreateSpan = this._createSpan.bind(this)
    }
    _patchOpen() {
        return e => {
            let t = this;
            return function(...n) {
                let r;
                try {
                    let e = n[0],
                        i = ah(n[1]);
                    r = t.parentCreateSpan(this, i, e)
                } catch (e) {
                    ra.internalLogger.error(e)
                }
                let i = ra.api.getActiveUserAction();
                return r && i && (null == i ? void 0 : i.getState()) === aN.Started && (r.setAttribute("faro.action.user.name", i.name), r.setAttribute("faro.action.user.parentId", i.parentId)), e.apply(this, n)
            }
        }
    }
};

function sP(e, t) {
    null != t && (0 === t || t >= 400 && t < 600) && e.setStatus({
        code: et.ERROR
    })
}

function sN(e) {
    return (sN = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function sA(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function sL(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? sA(Object(n), !0).forEach(function(t) {
            ! function(e, t, n) {
                var r;
                (r = function(e, t) {
                    if ("object" != sN(e) || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != sN(r)) return r;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(t, "string"), (t = "symbol" == sN(r) ? r : r + "") in e) ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }): e[t] = n
            }(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sA(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
    }
    return e
}
let sR = o$.f.createComponentLogger({
    namespace: "@opentelemetry/opentelemetry-instrumentation-fetch/utils"
}), sI = new TextEncoder;

function sM(e) {
    return sI.encode(e).byteLength
}
let sD = {
    CONNECT: !0,
    DELETE: !0,
    GET: !0,
    HEAD: !0,
    OPTIONS: !0,
    PATCH: !0,
    POST: !0,
    PUT: !0,
    TRACE: !0,
    QUERY: !0
}, sz = {
    "https:": "443",
    "http:": "80"
}, sU = "0.222.0", sj = "u" > typeof PerformanceObserver; class sF extends su {
    component = "fetch";
    version = sU;
    moduleName = this.component;
    _usedResources = new WeakSet;
    _tasksCount = 0;
    constructor(e = {}) {
        super("@opentelemetry/instrumentation-fetch", sU, e)
    }
    init() {}
    _addChildSpan(e, t) {
        let n = this.tracer.startSpan("CORS Preflight", {
            startTime: t[en.FETCH_START]
        }, oF.f.setSpan(oj.f.active(), e));
        sm(n, t, this.getConfig().ignoreNetworkEvents, void 0, !0), n.end(t[en.RESPONSE_END])
    }
    _addFinalSpanAttributes(e, t) {
        let n, r = sb(t.url);
        e.setAttribute(ok.i, t.status), e.setAttribute(ok.$, r.hostname);
        let i = (n = Number(r.port || sz[r.protocol])) && !isNaN(n) ? n : void 0;
        i && e.setAttribute(ok.w, i)
    }
    _addHeaders(e, t) {
        if (!sy(t, this.getConfig().propagateTraceHeaderCorsUrls)) {
            let e = {};
            oU.f.inject(oj.f.active(), e), Object.keys(e).length > 0 && this._diag.debug("headers inject skipped due to CORS policy");
            return
        }
        if (e instanceof Request) oU.f.inject(oj.f.active(), e.headers, {
            set: (e, t, n) => e.set(t, "string" == typeof n ? n : String(n))
        });
        else {
            let t = new Headers(e.headers);
            oU.f.inject(oj.f.active(), t, {
                set: (e, t, n) => e.set(t, "string" == typeof n ? n : String(n))
            }), e.headers = t
        }
    }
    _clearResources() {
        0 === this._tasksCount && this.getConfig().clearTimingResources && (performance.clearResourceTimings(), this._usedResources = new WeakSet)
    }
    _createSpan(e, t = {}) {
        var n;
        let r, i;
        if (sf.Q(e, this.getConfig().ignoreUrls)) return void this._diag.debug("ignoring span as url matches ignored url");
        let a = {},
            o = t.method,
            s = (n = t.method || "GET", r = function() {
                if (void 0 === N) {
                    let e = (0, sw.d)("OTEL_INSTRUMENTATION_HTTP_KNOWN_METHODS");
                    e && e.length > 0 ? (N = {}, e.forEach(e => {
                        N[e] = !0
                    })) : N = sD
                }
                return N
            }(), (i = n.toUpperCase()) in r ? i : "_OTHER");
        return a[ok.U] = s, s !== o && (a[ok.O] = o), a[ok.v] = e, this.tracer.startSpan(s, {
            kind: ee.CLIENT,
            attributes: a
        })
    }
    _findResourceAndAddNetworkEvents(e, t, n) {
        let r = t.entries;
        if (!r.length) {
            if (!performance.getEntriesByType) return;
            r = performance.getEntriesByType("resource")
        }
        let i = sv(t.spanUrl, t.startTime, n, r, this._usedResources, "fetch");
        if (i.mainRequest) {
            let t = i.mainRequest;
            this._markResourceAsUsed(t);
            let n = i.corsPreFlightRequest;
            n && (this._addChildSpan(e, n), this._markResourceAsUsed(n)), sm(e, t, this.getConfig().ignoreNetworkEvents, void 0, !0)
        }
    }
    _markResourceAsUsed(e) {
        this._usedResources.add(e)
    }
    _endSpan(e, t, n) {
        let r = sd.R(Date.now()),
            i = sd.G();
        this._addFinalSpanAttributes(e, n), n.status >= 400 && (e.setStatus({
            code: et.ERROR
        }), e.setAttribute(ok.Q, String(n.status))), setTimeout(() => {
            t.observer?.disconnect(), this._findResourceAndAddNetworkEvents(e, t, i), this._tasksCount--, this._clearResources(), e.end(r)
        }, 300)
    }
    _patchConstructor() {
        return e => {
            let t = this;
            return function(...n) {
                let r;
                if (!t._isEnabled) return e.apply(this, n);
                let i = this,
                    a = sb(n[0] instanceof Request ? n[0].url : String(n[0])).href;
                r = n[0] instanceof Request ? null != n[1] ? new Request(n[0], n[1]) : n[0] : n[1] || {};
                let o = t._createSpan(a, r);
                if (!o) return e.apply(this, n);
                let s = t._prepareSpanData(a);

                function l(e, n) {
                    t._applyAttributesAfterFetch(e, r, n), t._endSpan(e, s, {
                        status: n.status || 0,
                        statusText: n.message,
                        url: a
                    })
                }

                function u(e, n) {
                    t._applyAttributesAfterFetch(e, r, n), n.status >= 200 && n.status < 400 ? t._endSpan(e, s, n) : t._endSpan(e, s, {
                        status: n.status,
                        statusText: n.statusText,
                        url: a
                    })
                }

                function c(e, n) {
                    try {
                        let t = n.clone().body;
                        if (t) {
                            let r = t.getReader(),
                                i = () => {
                                    r.read().then(({
                                        done: t
                                    }) => {
                                        t ? u(e, n) : i()
                                    }, t => {
                                        l(e, t)
                                    })
                                };
                            i()
                        } else u(e, n)
                    } catch (n) {
                        t._diag.error("Failed to read fetch response body", n), t._endSpan(e, s, {
                            status: 0,
                            url: a
                        })
                    }
                    return n
                }

                function d(e, n) {
                    try {
                        l(e, n)
                    } catch (r) {
                        t._diag.error("Failed to end span on fetch error", r), t._endSpan(e, s, {
                            status: n.status || 0,
                            url: a
                        })
                    }
                    throw n
                }
                return t.getConfig().measureRequestSize && (function(...e) {
                    if (e[0] instanceof URL || "string" == typeof e[0]) {
                        let t = e[1];
                        if (!t?.body) return Promise.resolve();
                        if (!(t.body instanceof ReadableStream)) return Promise.resolve(function(e) {
                            return "u" > typeof Document && e instanceof Document ? new XMLSerializer().serializeToString(document).length : "string" == typeof e ? sM(e) : e instanceof Blob ? e.size : e instanceof FormData ? function(e) {
                                let t = 0;
                                for (let [n, r] of e.entries()) t += n.length, r instanceof Blob ? t += r.size : t += r.length;
                                return t
                            }(e) : e instanceof URLSearchParams ? sM(e.toString()) : void 0 !== e.byteLength ? e.byteLength : void sR.warn("unknown body type")
                        }(t.body));
                        {
                            let {
                                body: e,
                                length: n
                            } = function(e) {
                                let t;
                                if (!e.pipeThrough) return sR.warn("Platform has ReadableStream but not pipeThrough!"), {
                                    body: e,
                                    length: Promise.resolve(void 0)
                                };
                                let n = 0,
                                    r = new Promise(e => {
                                        t = e
                                    }),
                                    i = new TransformStream({
                                        start() {},
                                        async transform(e, t) {
                                            let r = await e;
                                            n += r.byteLength, t.enqueue(e)
                                        },
                                        flush() {
                                            t(n)
                                        }
                                    });
                                return {
                                    body: e.pipeThrough(i),
                                    length: r
                                }
                            }(t.body);
                            return t.body = e, n
                        }
                    } {
                        let t = e[0];
                        return t?.body ? t.clone().text().then(e => sM(e)) : Promise.resolve()
                    }
                })(...n).then(e => {
                    e && o.setAttribute("http.request.body.size", e)
                }).catch(e => {
                    t._diag.warn("getFetchBodyLength", e)
                }), oj.f.with(oF.f.setSpan(oj.f.active(), o), () => (t._callRequestHook(o, r), t._addHeaders(r, a), t._tasksCount++, e.apply(i, r instanceof Request ? [r] : [a, r]).then(c.bind(i, o), d.bind(i, o))))
            }
        }
    }
    _applyAttributesAfterFetch(e, t, n) {
        let r = this.getConfig().applyCustomAttributesOnSpan;
        r && sc(() => r(e, t, n), e => {
            e && this._diag.error("applyCustomAttributesOnSpan", e)
        }, !0)
    }
    _callRequestHook(e, t) {
        let n = this.getConfig().requestHook;
        n && sc(() => n(e, t), e => {
            e && this._diag.error("requestHook", e)
        }, !0)
    }
    _prepareSpanData(e) {
        let t = sd.G(),
            n = [];
        if ("function" != typeof PerformanceObserver) return {
            entries: n,
            startTime: t,
            spanUrl: e
        };
        let r = new PerformanceObserver(t => {
            t.getEntries().forEach(t => {
                "fetch" === t.initiatorType && t.name === e && n.push(t)
            })
        });
        return r.observe({
            entryTypes: ["resource"]
        }), {
            entries: n,
            observer: r,
            startTime: t,
            spanUrl: e
        }
    }
    enable() {
        if (!sj) return void this._diag.warn("this instrumentation is intended for web usage only, it does not instrument server-side fetch()");
        if (!this._isEnabled) {
            if (this._isFetchPatched) {
                this._diag.debug("fetch constructor already patched"), this._isEnabled = !0;
                return
            }
            try {
                this._wrap(globalThis, "fetch", this._patchConstructor()), this._isFetchPatched = !0, this._isEnabled = !0
            } catch (e) {
                this._diag.warn("Failed to patch globalThis.fetch; instrumentation will not be enabled. Another script may have locked globalThis.fetch via Object.defineProperty.", e)
            }
        }
    }
    disable() {
        !sj || this._isEnabled && (this._isEnabled = !1, this._usedResources = new WeakSet)
    }
}
let s$ = ["fetchInstrumentationOptions", "xhrInstrumentationOptions"];

function sB(e = {}) {
    var t;
    return (null == (t = e.attributes) ? void 0 : t.isSampled) === "true"
}(Q = ei || (ei = {}))[Q.NOT_RECORD = 0] = "NOT_RECORD", Q[Q.RECORD = 1] = "RECORD", Q[Q.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
var sH = e.i(708331), sq = e.i(131007), sV = e.i(57271);
let sW = (0, sV.z)("OpenTelemetry SDK Context Key SUPPRESS_TRACING"), sQ = "[_0-9a-z-*/]", sG = `[a-z]${sQ}{0,255}`, sK = `[a-z0-9]${sQ}{0,240}@[a-z]${sQ}{0,13}`, sX = RegExp(`^(?:${sG}|${sK})$`), sY = /^[ -~]{0,255}[!-~]$/, sJ = /,|=/;

function sZ(e) {
    return sY.test(e) && !sJ.test(e)
}
class s0 {
    _length;
    _rawTraceState;
    _internalState;
    constructor(e) {
        this._rawTraceState = "string" == typeof e ? e : "", this._length = this._rawTraceState.length
    }
    set(e, t) {
        if (!sX.test(e) || !sZ(t)) return this;
        let n = this._getState(),
            r = n.get(e),
            i = this._length;
        if ("string" == typeof r ? i += t.length - r.length : i += e.length + t.length + (n.size > 0 ? 2 : 1), i > 512) return this;
        let a = new Map(n);
        return a.delete(e), a.set(e, t), this._fromState(a, i)
    }
    unset(e) {
        let t = this._getState(),
            n = t.get(e);
        if ("string" != typeof n) return this;
        let r = this._length - (e.length + n.length + 1);
        t.size > 1 && (r -= 1);
        let i = new Map(t);
        return i.delete(e), this._fromState(i, r)
    }
    get(e) {
        return this._getState().get(e)
    }
    serialize() {
        let e = "",
            t = 0;
        for (let n of this._getState()) t > 0 && (e = "," + e), e = `${n[0]}=${n[1]}` + e, t++;
        return e
    }
    _getState() {
        if (this._internalState) return this._internalState;
        let e = this._rawTraceState.split(","),
            t = new Map,
            n = 0;
        for (let r of e) {
            let e = r.trim(),
                i = e.indexOf("=");
            if (-1 === i) continue;
            let a = e.slice(0, i),
                o = e.slice(i + 1);
            if (!sX.test(a) || !sZ(o)) continue;
            let s = n + e.length + +(t.size > 0);
            if (!(s > 512) && (t.set(a, o), n = s, t.size >= 32)) break
        }
        return this._length = n, this._internalState = new Map(Array.from(t.entries()).reverse()), this._internalState
    }
    _fromState(e, t) {
        let n = Object.create(s0.prototype);
        return n._internalState = e, n._length = t, n
    }
}
let s1 = "traceparent", s2 = "tracestate", s3 = RegExp("^\\s?((?!ff)[\\da-f]{2})-((?![0]{32})[\\da-f]{32})-((?![0]{16})[\\da-f]{16})-([\\da-f]{2})(-.*)?\\s?$"); class s4 {
    inject(e, t, n) {
        let r = oF.f.getSpanContext(e);
        if (!r || !0 === e.getValue(sW) || !(0, sH.e)(r)) return;
        let i = `00-${r.traceId}-${r.spanId}-0${Number(r.traceFlags||sq.f.NONE).toString(16)}`;
        n.set(t, s1, i), r.traceState && n.set(t, s2, r.traceState.serialize())
    }
    extract(e, t, n) {
        let r, i = n.get(t, s1);
        if (!i) return e;
        let a = Array.isArray(i) ? i[0] : i;
        if ("string" != typeof a) return e;
        let o = (r = s3.exec(a)) && ("00" !== r[1] || !r[5]) ? {
            traceId: r[2],
            spanId: r[3],
            traceFlags: parseInt(r[4], 16)
        } : null;
        if (!o) return e;
        o.isRemote = !0;
        let s = n.get(t, s2);
        if (s) {
            let e = Array.isArray(s) ? s.join(",") : s;
            o.traceState = new s0("string" == typeof e ? e : void 0)
        }
        return oF.f.setSpanContext(e, o)
    }
    fields() {
        return [s1, s2]
    }
}
let s5 = {
    [ok.u]: "opentelemetry",
    "process.runtime.name": "browser",
    [ok.a]: ok.Z,
    [ok.I]: "2.9.0"
}, s6 = e => null !== e && "object" == typeof e && "function" == typeof e.then; class s8 {
    _rawAttributes;
    _asyncAttributesPending = !1;
    _schemaUrl;
    _memoizedAttributes;
    static FromAttributeList(e, t) {
        let n = new s8({}, t);
        return n._rawAttributes = s7(e), n._asyncAttributesPending = e.filter(([e, t]) => s6(t)).length > 0, n
    }
    constructor(e, t) {
        let n = e.attributes ?? {};
        this._rawAttributes = Object.entries(n).map(([e, t]) => (s6(t) && (this._asyncAttributesPending = !0), [e, t])), this._rawAttributes = s7(this._rawAttributes), this._schemaUrl = function(e) {
            if ("string" == typeof e || void 0 === e) return e;
            o$.f.warn("Schema URL must be string or undefined, got %s. Schema URL will be ignored.", e)
        }(t?.schemaUrl)
    }
    get asyncAttributesPending() {
        return this._asyncAttributesPending
    }
    async waitForAsyncAttributes() {
        if (this.asyncAttributesPending) {
            for (let e = 0; e < this._rawAttributes.length; e++) {
                let [t, n] = this._rawAttributes[e];
                this._rawAttributes[e] = [t, s6(n) ? await n : n]
            }
            this._asyncAttributesPending = !1
        }
    }
    get attributes() {
        if (this.asyncAttributesPending && o$.f.error("Accessing resource attributes before async attributes settled"), this._memoizedAttributes) return this._memoizedAttributes;
        let e = {};
        for (let [t, n] of this._rawAttributes) {
            if (s6(n)) {
                o$.f.debug(`Unsettled resource attribute ${t} skipped`);
                continue
            }
            null != n && (e[t] ??= n)
        }
        return this._asyncAttributesPending || (this._memoizedAttributes = e), e
    }
    getRawAttributes() {
        return this._rawAttributes
    }
    get schemaUrl() {
        return this._schemaUrl
    }
    merge(e) {
        var t, n;
        let r, i, a;
        if (null == e) return this;
        let o = (t = this, n = e, r = t?.schemaUrl, a = void 0 === (i = n?.schemaUrl) || "" === i, void 0 === r || "" === r ? i : a || r === i ? r : void o$.f.warn('Schema URL merge conflict: old resource has "%s", updating resource has "%s". Resulting resource will have undefined Schema URL.', r, i));
        return s8.FromAttributeList([...e.getRawAttributes(), ...this.getRawAttributes()], o ? {
            schemaUrl: o
        } : void 0)
    }
}

function s9(e, t) {
    return s8.FromAttributeList(Object.entries(e), t)
}

function s7(e) {
    return e.map(([e, t]) => s6(t) ? [e, t.catch(t => {
        o$.f.debug("promise rejection for resource attribute: %s - %s", e, t)
    })] : [e, t])
}

function le(e) {}
class lt {
    _promise;
    _resolve;
    _reject;
    constructor() {
        this._promise = new Promise((e, t) => {
            this._resolve = e, this._reject = t
        })
    }
    get promise() {
        return this._promise
    }
    resolve(e) {
        this._resolve(e)
    }
    reject(e) {
        this._reject(e)
    }
}
class ln {
    _isCalled = !1;
    _deferred = new lt;
    _callback;
    _that;
    constructor(e, t) {
        this._callback = e, this._that = t
    }
    get isCalled() {
        return this._isCalled
    }
    get promise() {
        return this._deferred.promise
    }
    call(...e) {
        if (!this._isCalled) {
            this._isCalled = !0;
            try {
                Promise.resolve(this._callback.call(this._that, ...e)).then(e => this._deferred.resolve(e), e => this._deferred.reject(e))
            } catch (e) {
                this._deferred.reject(e)
            }
        }
        return this._deferred.promise
    }
}

function lr(e) {
    try {
        var t;
        o$.f.error((t = e, "string" == typeof t ? t : JSON.stringify(function(e) {
            let t = {},
                n = e;
            for (; null !== n;) Object.getOwnPropertyNames(n).forEach(e => {
                if (t[e]) return;
                let r = n[e];
                r && (t[e] = String(r))
            }), n = Object.getPrototypeOf(n);
            return t
        }(t))))
    } catch {}
}(G = ea || (ea = {}))[G.SUCCESS = 0] = "SUCCESS", G[G.FAILED = 1] = "FAILED";
let li = (0, sV.z)("OpenTelemetry SDK Context Key SUPPRESS_TRACING");

function la(e) {
    return !0 === e.getValue(li)
}
let lo = "otel.span.sampling_result", ls = new Map; class ll {
    processedSpans;
    queueSize;
    queueSizeCallback;
    standardAttrs;
    droppedAttrs;
    constructor(e, t, n) {
        let r = ls.get(e) ?? 0;
        if (ls.set(e, r + 1), this.standardAttrs = {
                "otel.component.type": e,
                "otel.component.name": `${e}/${r}`
            }, this.droppedAttrs = {
                ...this.standardAttrs,
                [ok.Q]: "queue_full"
            }, this.processedSpans = t.createCounter("otel.sdk.processor.span.processed", {
                unit: "{span}",
                description: "The number of spans for which the processing has finished, either successful or failed."
            }), n) {
            let {
                capacity: e,
                getQueueSize: r
            } = n;
            t.createUpDownCounter("otel.sdk.processor.span.queue.capacity", {
                unit: "{span}",
                description: "The maximum number of spans the queue of a given instance of an SDK span processor can hold."
            }).add(e, this.standardAttrs), this.queueSize = t.createObservableUpDownCounter("otel.sdk.processor.span.queue.size", {
                unit: "{span}",
                description: "The number of spans in the queue of a given instance of an SDK span processor."
            }), this.queueSizeCallback = e => e.observe(r(), this.standardAttrs), this.queueSize.addCallback(this.queueSizeCallback)
        }
    }
    dropSpans(e) {
        this.processedSpans.add(e, this.droppedAttrs)
    }
    finishSpans(e, t) {
        if (!t) return void this.processedSpans.add(e, this.standardAttrs);
        let n = {
            ...this.standardAttrs,
            [ok.Q]: t.name
        };
        this.processedSpans.add(e, n)
    }
    shutdown() {
        this.queueSize && this.queueSizeCallback && this.queueSize.removeCallback(this.queueSizeCallback)
    }
}
class lu {
    _maxExportBatchSize;
    _maxQueueSize;
    _scheduledDelayMillis;
    _exportTimeoutMillis;
    _exporter;
    _metrics;
    _isExporting = !1;
    _finishedSpans = [];
    _timer;
    _shutdownOnce;
    _droppedSpansCount = 0;
    constructor(e) {
        this._exporter = e.exporter, this._maxExportBatchSize = e.maxExportBatchSize ?? 512, this._maxQueueSize = e.maxQueueSize ?? 2048, this._scheduledDelayMillis = e.scheduledDelayMillis ?? 5e3, this._exportTimeoutMillis = e.exportTimeoutMillis ?? 3e4, this._shutdownOnce = new ln(this._shutdown, this), this._maxExportBatchSize > this._maxQueueSize && (o$.f.warn("BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize"), this._maxExportBatchSize = this._maxQueueSize);
        let t = e.selfObsMeterProvider ? e.selfObsMeterProvider.getMeter("@opentelemetry/sdk-trace") : oq;
        this._metrics = new ll("batching_span_processor", t, {
            capacity: this._maxQueueSize,
            getQueueSize: () => this._finishedSpans.length
        })
    }
    forceFlush() {
        return this._shutdownOnce.isCalled ? this._shutdownOnce.promise : this._flushAll()
    }
    onStart(e, t) {}
    onEnd(e) {
        this._shutdownOnce.isCalled || (e.spanContext().traceFlags & sq.f.SAMPLED) != 0 && this._addToBuffer(e)
    }
    shutdown() {
        return this._shutdownOnce.call()
    }
    _shutdown() {
        return Promise.resolve().then(() => this.onShutdown()).then(() => this._flushAll()).then(() => (this._metrics.shutdown(), this._exporter.shutdown()))
    }
    _addToBuffer(e) {
        if (this._finishedSpans.length >= this._maxQueueSize) {
            0 === this._droppedSpansCount && o$.f.debug("maxQueueSize reached, dropping spans"), this._droppedSpansCount++, this._metrics.dropSpans(1);
            return
        }
        this._droppedSpansCount > 0 && (o$.f.warn(`Dropped ${this._droppedSpansCount} spans because maxQueueSize reached`), this._droppedSpansCount = 0), this._finishedSpans.push(e), this._maybeStartTimer()
    }
    _flushAll() {
        return new Promise((e, t) => {
            let n = [],
                r = Math.ceil(this._finishedSpans.length / this._maxExportBatchSize);
            for (let e = 0; e < r; e++) n.push(this._flushOneBatch());
            Promise.all(n).then(() => {
                e()
            }).catch(t)
        })
    }
    _flushOneBatch() {
        return (this._clearTimer(), 0 === this._finishedSpans.length) ? Promise.resolve() : new Promise((e, t) => {
            let n = setTimeout(() => {
                t(Error("Timeout"))
            }, this._exportTimeoutMillis);
            oj.f.with(oj.f.active().setValue(li, !0), () => {
                let r;
                this._finishedSpans.length <= this._maxExportBatchSize ? (r = this._finishedSpans, this._finishedSpans = []) : r = this._finishedSpans.splice(0, this._maxExportBatchSize);
                let i = () => this._exporter.export(r, i => {
                        clearTimeout(n), this._metrics.finishSpans(r.length, i.error), i.code === ea.SUCCESS ? e() : t(i.error ?? Error("BatchSpanProcessor: span export failed"))
                    }),
                    a = null;
                for (let e = 0, t = r.length; e < t; e++) {
                    let t = r[e];
                    t.resource.asyncAttributesPending && t.resource.waitForAsyncAttributes && (a ??= []).push(t.resource.waitForAsyncAttributes())
                }
                null === a ? i() : Promise.all(a).then(i, e => {
                    lr(e), t(e)
                })
            })
        })
    }
    _maybeStartTimer() {
        if (this._isExporting) return;
        let e = () => {
            this._isExporting = !0, this._flushOneBatch().finally(() => {
                this._isExporting = !1, this._finishedSpans.length > 0 && (this._clearTimer(), this._maybeStartTimer())
            }).catch(e => {
                this._isExporting = !1, lr(e)
            })
        };
        if (this._finishedSpans.length >= this._maxExportBatchSize) return e();
        void 0 === this._timer && (this._timer = setTimeout(() => e(), this._scheduledDelayMillis), "number" != typeof this._timer && this._timer.unref())
    }
    _clearTimer() {
        void 0 !== this._timer && (clearTimeout(this._timer), this._timer = void 0)
    }
}
class lc extends lu {
    _visibilityChangeListener;
    _pageHideListener;
    constructor(e) {
        super(e), this.onInit(e)
    }
    onInit(e) {
        !0 !== e.disableAutoFlushOnDocumentHide && "u" > typeof document && (this._visibilityChangeListener = () => {
            "hidden" === document.visibilityState && this.forceFlush().catch(e => {
                lr(e)
            })
        }, this._pageHideListener = () => {
            this.forceFlush().catch(e => {
                lr(e)
            })
        }, document.addEventListener("visibilitychange", this._visibilityChangeListener), document.addEventListener("pagehide", this._pageHideListener))
    }
    onShutdown() {
        "u" > typeof document && (this._visibilityChangeListener && document.removeEventListener("visibilitychange", this._visibilityChangeListener), this._pageHideListener && document.removeEventListener("pagehide", this._pageHideListener))
    }
}
class ld extends lc {
    constructor(e, t) {
        for (let [e, n] of(t || (t = {}), [
                ["maxExportBatchSize", "OTEL_BSP_MAX_EXPORT_BATCH_SIZE"],
                ["maxQueueSize", "OTEL_BSP_MAX_QUEUE_SIZE"],
                ["scheduledDelayMillis", "OTEL_BSP_SCHEDULE_DELAY"],
                ["exportTimeoutMillis", "OTEL_BSP_EXPORT_TIMEOUT"]
            ]))
            if (void 0 === t[e]) {
                let r = le(n);
                void 0 !== r && (t[e] = r)
            } super({
            exporter: e,
            ...t
        })
    }
}
let lf = Function.prototype.toString, lp = lf.call(Object), lh = Object.getPrototypeOf, lm = Object.prototype, lg = lm.hasOwnProperty, lv = Symbol ? Symbol.toStringTag : void 0, lb = lm.toString;

function ly(e) {
    var t, n, r;
    if (null == (t = e) || "object" != typeof t || "[object Object]" !== (null == (n = e) ? void 0 === n ? "[object Undefined]" : "[object Null]" : lv && lv in Object(n) ? function(e) {
            let t = lg.call(e, lv),
                n = e[lv],
                r = !1;
            try {
                e[lv] = void 0, r = !0
            } catch {}
            let i = lb.call(e);
            return r && (t ? e[lv] = n : delete e[lv]), i
        }(n) : (r = n, lb.call(r)))) return !1;
    let i = lh(e);
    if (null === i) return !0;
    let a = lg.call(i, "constructor") && i.constructor;
    return "function" == typeof a && a instanceof a && lf.call(a) === lp
}

function lw(e) {
    return lS(e) ? e.slice() : e
}

function l_(e, t, n) {
    let r = n.get(e[t]) || [];
    for (let n = 0, i = r.length; n < i; n++) {
        let i = r[n];
        if (i.key === t && i.obj === e) return !0
    }
    return !1
}

function lS(e) {
    return Array.isArray(e)
}

function lE(e) {
    return "function" == typeof e
}

function lk(e) {
    return !lT(e) && !lS(e) && !lE(e) && "object" == typeof e
}

function lT(e) {
    return "string" == typeof e || "number" == typeof e || "boolean" == typeof e || void 0 === e || e instanceof Date || e instanceof RegExp || null === e
}
class lx {
    shouldSample() {
        return {
            decision: ei.NOT_RECORD
        }
    }
    toString() {
        return "AlwaysOffSampler"
    }
}
class lC {
    shouldSample() {
        return {
            decision: ei.RECORD_AND_SAMPLED
        }
    }
    toString() {
        return "AlwaysOnSampler"
    }
}
class lO {
    _root;
    _remoteParentSampled;
    _remoteParentNotSampled;
    _localParentSampled;
    _localParentNotSampled;
    constructor(e) {
        this._root = e.root, this._root || (lr(Error("ParentBasedSampler must have a root sampler configured")), this._root = new lC), this._remoteParentSampled = e.remoteParentSampled ?? new lC, this._remoteParentNotSampled = e.remoteParentNotSampled ?? new lx, this._localParentSampled = e.localParentSampled ?? new lC, this._localParentNotSampled = e.localParentNotSampled ?? new lx
    }
    shouldSample(e, t, n, r, i, a) {
        let o = oF.f.getSpanContext(e);
        return o && (0, sH.e)(o) ? o.isRemote ? o.traceFlags & sq.f.SAMPLED ? this._remoteParentSampled.shouldSample(e, t, n, r, i, a) : this._remoteParentNotSampled.shouldSample(e, t, n, r, i, a) : o.traceFlags & sq.f.SAMPLED ? this._localParentSampled.shouldSample(e, t, n, r, i, a) : this._localParentNotSampled.shouldSample(e, t, n, r, i, a) : this._root.shouldSample(e, t, n, r, i, a)
    }
    toString() {
        return `ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`
    }
}
class lP {
    _ratio;
    _upperBound;
    constructor(e = 0) {
        this._ratio = this._normalize(e), this._upperBound = 1 === this._ratio ? 0x100000000 : Math.floor(0xffffffff * this._ratio)
    }
    shouldSample(e, t) {
        return {
            decision: (0, sH.k)(t) && this._accumulate(t) < this._upperBound ? ei.RECORD_AND_SAMPLED : ei.NOT_RECORD
        }
    }
    toString() {
        return `TraceIdRatioBased{${this._ratio}}`
    }
    _normalize(e) {
        return "number" != typeof e || isNaN(e) ? 0 : e >= 1 ? 1 : e <= 0 ? 0 : e
    }
    _accumulate(e) {
        let t = 0;
        for (let n = 0; n < 32; n += 8) {
            let r = 0;
            for (let t = 0; t < 8; t++) {
                let i = e.charCodeAt(n + t);
                r = r << 4 | (i < 58 ? i - 48 : i < 71 ? i - 55 : i - 87)
            }
            t = (t ^ r) >>> 0
        }
        return t
    }
}

function lN() {
    let e = le("OTEL_TRACES_SAMPLER_ARG");
    return null == e ? (o$.f.error("OTEL_TRACES_SAMPLER_ARG is blank, defaulting to 1."), 1) : e < 0 || e > 1 ? (o$.f.error(`OTEL_TRACES_SAMPLER_ARG=${e} was given, but it is out of range ([0..1]), defaulting to 1.`), 1) : e
}(K = eo || (eo = {})).AlwaysOff = "always_off", K.AlwaysOn = "always_on", K.ParentBasedAlwaysOff = "parentbased_always_off", K.ParentBasedAlwaysOn = "parentbased_always_on", K.ParentBasedTraceIdRatio = "parentbased_traceidratio", K.TraceIdRatio = "traceidratio";
let lA = {
    [ok.u]: "opentelemetry",
    "process.runtime.name": "browser",
    [ok.a]: ok.Z,
    [ok.I]: "2.12.0"
}, lL = e => null !== e && "object" == typeof e && "function" == typeof e.then; class lR {
    _rawAttributes;
    _asyncAttributesPending = !1;
    _schemaUrl;
    _memoizedAttributes;
    static FromAttributeList(e, t) {
        let n = new lR({}, t);
        return n._rawAttributes = lI(e), n._asyncAttributesPending = e.filter(([e, t]) => lL(t)).length > 0, n
    }
    constructor(e, t) {
        let n = e.attributes ?? {};
        this._rawAttributes = Object.entries(n).map(([e, t]) => (lL(t) && (this._asyncAttributesPending = !0), [e, t])), this._rawAttributes = lI(this._rawAttributes), this._schemaUrl = function(e) {
            if ("string" == typeof e || void 0 === e) return e;
            o$.f.warn("Schema URL must be string or undefined, got %s. Schema URL will be ignored.", e)
        }(t?.schemaUrl)
    }
    get asyncAttributesPending() {
        return this._asyncAttributesPending
    }
    async waitForAsyncAttributes() {
        if (this.asyncAttributesPending) {
            for (let e = 0; e < this._rawAttributes.length; e++) {
                let [t, n] = this._rawAttributes[e];
                this._rawAttributes[e] = [t, lL(n) ? await n : n]
            }
            this._asyncAttributesPending = !1
        }
    }
    get attributes() {
        if (this.asyncAttributesPending && o$.f.error("Accessing resource attributes before async attributes settled"), this._memoizedAttributes) return this._memoizedAttributes;
        let e = {};
        for (let [t, n] of this._rawAttributes) {
            if (lL(n)) {
                o$.f.debug(`Unsettled resource attribute ${t} skipped`);
                continue
            }
            null != n && (e[t] ??= n)
        }
        return this._asyncAttributesPending || (this._memoizedAttributes = e), e
    }
    getRawAttributes() {
        return this._rawAttributes
    }
    get schemaUrl() {
        return this._schemaUrl
    }
    merge(e) {
        var t, n;
        let r, i, a;
        if (null == e) return this;
        let o = (t = this, n = e, r = t?.schemaUrl, a = void 0 === (i = n?.schemaUrl) || "" === i, void 0 === r || "" === r ? i : a || r === i ? r : void o$.f.warn('Schema URL merge conflict: old resource has "%s", updating resource has "%s". Resulting resource will have undefined Schema URL.', r, i));
        return lR.FromAttributeList([...e.getRawAttributes(), ...this.getRawAttributes()], o ? {
            schemaUrl: o
        } : void 0)
    }
}

function lI(e) {
    return e.map(([e, t]) => lL(t) ? [e, t.catch(t => {
        o$.f.debug("promise rejection for resource attribute: %s - %s", e, t)
    })] : [e, t])
}(X = es || (es = {}))[X.NOT_RECORD = 0] = "NOT_RECORD", X[X.RECORD = 1] = "RECORD", X[X.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
var lM = e.i(466540);

function lD(e) {
    let t = {};
    if ("object" != typeof e || null == e) return t;
    for (let r in e) {
        var n;
        if (!Object.prototype.hasOwnProperty.call(e, r)) continue;
        if ("string" != typeof(n = r) || "" === n) {
            o$.f.warn(`Invalid attribute key: ${r}`);
            continue
        }
        let i = e[r];
        if (!lz(i)) {
            o$.f.warn(`Invalid attribute value set for key: ${r}`);
            continue
        }
        Array.isArray(i) ? t[r] = i.slice() : t[r] = i
    }
    return t
}

function lz(e) {
    return null == e || (Array.isArray(e) ? function(e) {
        let t;
        for (let n of e) {
            if (null == n) continue;
            let e = typeof n;
            if (e !== t) {
                if (!t && lU(e)) {
                    t = e;
                    continue
                }
                return !1
            }
        }
        return !0
    }(e) : lU(typeof e))
}

function lU(e) {
    switch (e) {
        case "number":
        case "boolean":
        case "string":
            return !0
    }
    return !1
}
let lj = performance;

function lF(e) {
    return [Math.trunc(e / 1e3), Math.round(e % 1e3 * 1e6)]
}

function l$(e) {
    return Array.isArray(e) && 2 === e.length && "number" == typeof e[0] && "number" == typeof e[1]
}

function lB(e) {
    return l$(e) || "number" == typeof e || e instanceof Date
}

function lH(e, t) {
    let n = [e[0] + t[0], e[1] + t[1]];
    return n[1] >= 1e9 && (n[1] -= 1e9, n[0] += 1), n
}
let lq = Symbol.for("nodejs.util.inspect.custom");

function lV(e) {
    let t = {};
    for (let [n, r] of e.getRawAttributes()) "function" != typeof r?.then && null != r && (t[n] ??= r);
    return t
}

function lW(e, t, n, r, i) {
    if ("number" == typeof n && n < 0) {
        let t = `[${e}]`;
        return r?.stylize ? r.stylize(t, "special") : t
    }
    if ("function" != typeof i || !r) return t;
    let a = {
        ...r,
        depth: null == r.depth ? r.depth : r.depth - 1
    };
    return `${e} ${i(t,a)}`
}
class lQ {
    _spanContext;
    kind;
    parentSpanContext;
    attributes = {};
    links = [];
    events = [];
    startTime;
    resource;
    instrumentationScope;
    _droppedAttributesCount = 0;
    _droppedEventsCount = 0;
    _droppedLinksCount = 0;
    _attributesCount = 0;
    name;
    status = {
        code: et.UNSET
    };
    endTime = [0, 0];
    _ended = !1;
    _duration = [-1, -1];
    _spanProcessor;
    _spanLimits;
    _attributeValueLengthLimit;
    _recordEndMetrics;
    _performanceStartTime;
    _performanceOffset;
    _startTimeProvided;
    constructor(e) {
        let t = Date.now();
        if (this._spanContext = e.spanContext, this._performanceStartTime = lj.now(), this._performanceOffset = t - (this._performanceStartTime + lj.timeOrigin), this._startTimeProvided = null != e.startTime, this._spanLimits = e.spanLimits, this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit ?? 0, this._spanProcessor = e.spanProcessor, this.name = e.name, this.parentSpanContext = e.parentSpanContext, this.kind = e.kind, e.links)
            for (let t of e.links) this.addLink(t);
        this.startTime = this._getTime(e.startTime ?? t), this.resource = e.resource, this.instrumentationScope = e.scope, this._recordEndMetrics = e.recordEndMetrics, null != e.attributes && this.setAttributes(e.attributes), this._spanProcessor.onStart(this, e.context)
    }
    spanContext() {
        return this._spanContext
    }
    setAttribute(e, t) {
        if (null == t || this._isSpanEnded()) return this;
        if (0 === e.length) return o$.f.warn(`Invalid attribute key: ${e}`), this;
        if (!lz(t)) return o$.f.warn(`Invalid attribute value set for key: ${e}`), this;
        let {
            attributeCountLimit: n
        } = this._spanLimits, r = !Object.prototype.hasOwnProperty.call(this.attributes, e);
        return void 0 !== n && this._attributesCount >= n && r ? this._droppedAttributesCount++ : (this.attributes[e] = this._truncateToSize(t), r && this._attributesCount++), this
    }
    setAttributes(e) {
        for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && this.setAttribute(t, e[t]);
        return this
    }
    addEvent(e, t, n) {
        if (this._isSpanEnded()) return this;
        let {
            eventCountLimit: r
        } = this._spanLimits;
        if (0 === r) return o$.f.warn("No events allowed."), this._droppedEventsCount++, this;
        void 0 !== r && this.events.length >= r && (0 === this._droppedEventsCount && o$.f.debug("Dropping extra events."), this.events.shift(), this._droppedEventsCount++), lB(t) && (lB(n) || (n = t), t = void 0);
        let i = lD(t),
            {
                attributePerEventCountLimit: a
            } = this._spanLimits,
            o = {},
            s = 0,
            l = 0;
        for (let e in i) {
            if (!Object.prototype.hasOwnProperty.call(i, e)) continue;
            let t = i[e];
            if (void 0 !== a && l >= a) {
                s++;
                continue
            }
            o[e] = this._truncateToSize(t), l++
        }
        return this.events.push({
            name: e,
            attributes: o,
            time: this._getTime(n),
            droppedAttributesCount: s
        }), this
    }
    addLink(e) {
        if (this._isSpanEnded()) return this;
        let {
            linkCountLimit: t
        } = this._spanLimits;
        if (0 === t) return this._droppedLinksCount++, this;
        void 0 !== t && this.links.length >= t && (0 === this._droppedLinksCount && o$.f.debug("Dropping extra links."), this.links.shift(), this._droppedLinksCount++);
        let {
            attributePerLinkCountLimit: n
        } = this._spanLimits, r = lD(e.attributes), i = {}, a = 0, o = 0;
        for (let e in r) {
            if (!Object.prototype.hasOwnProperty.call(r, e)) continue;
            let t = r[e];
            if (void 0 !== n && o >= n) {
                a++;
                continue
            }
            i[e] = this._truncateToSize(t), o++
        }
        let s = {
            context: e.context
        };
        return o > 0 && (s.attributes = i), a > 0 && (s.droppedAttributesCount = a), this.links.push(s), this
    }
    addLinks(e) {
        for (let t of e) this.addLink(t);
        return this
    }
    setStatus(e) {
        if (this._isSpanEnded() || e.code === et.UNSET || this.status.code === et.OK) return this;
        let t = {
            code: e.code
        };
        return e.code === et.ERROR && ("string" == typeof e.message ? t.message = e.message : null != e.message && o$.f.warn(`Dropping invalid status.message of type '${typeof e.message}', expected 'string'`)), this.status = t, this
    }
    updateName(e) {
        return this._isSpanEnded() || (this.name = e), this
    }
    end(e) {
        var t, n;
        let r, i;
        this._isSpanEnded() ? o$.f.error(`${this.name} ${this._spanContext.traceId}-${this._spanContext.spanId} - You can only call end() on a span once.`) : (this.endTime = this._getTime(e), this._duration = (t = this.startTime, r = (n = this.endTime)[0] - t[0], (i = n[1] - t[1]) < 0 && (r -= 1, i += 1e9), [r, i]), this._duration[0] < 0 && (o$.f.warn("Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.", this.startTime, this.endTime), this.endTime = this.startTime.slice(), this._duration = [0, 0]), this._droppedEventsCount > 0 && o$.f.warn(`Dropped ${this._droppedEventsCount} events because eventCountLimit reached`), this._droppedLinksCount > 0 && o$.f.warn(`Dropped ${this._droppedLinksCount} links because linkCountLimit reached`), this._spanProcessor.onEnding && this._spanProcessor.onEnding(this), this._recordEndMetrics?.(), this._ended = !0, this._spanProcessor.onEnd(this))
    }
    _getTime(e) {
        if ("number" == typeof e && e <= lj.now()) {
            var t;
            return t = e + this._performanceOffset, lH(lF(lj.timeOrigin), lF("number" == typeof t ? t : lj.now()))
        }
        if ("number" == typeof e) return lF(e);
        if (e instanceof Date) return lF(e.getTime());
        if (l$(e)) return e;
        if (this._startTimeProvided) return lF(Date.now());
        let n = lj.now() - this._performanceStartTime;
        return lH(this.startTime, lF(n))
    }
    isRecording() {
        return !1 === this._ended
    }
    recordException(e, t) {
        let n = {};
        "string" == typeof e ? n[ok.h] = e : e && (e.code ? n[ok.M] = e.code.toString() : e.name && (n[ok.M] = e.name), e.message && (n[ok.h] = e.message), e.stack && (n[ok.y] = e.stack)), n[ok.M] || n[ok.h] ? this.addEvent("exception", n, t) : o$.f.warn(`Failed to record an exception ${e}`)
    }
    get duration() {
        return this._duration
    }
    get ended() {
        return this._ended
    }
    get droppedAttributesCount() {
        return this._droppedAttributesCount
    }
    get droppedEventsCount() {
        return this._droppedEventsCount
    }
    get droppedLinksCount() {
        return this._droppedLinksCount
    }
    _isSpanEnded() {
        if (this._ended) {
            let e = Error(`Operation attempted on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`);
            o$.f.warn(`Cannot execute the operation on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`, e)
        }
        return this._ended
    }
    _truncateToLimitUtil(e, t) {
        return e.length <= t ? e : e.substring(0, t)
    }
    _truncateToSize(e) {
        let t = this._attributeValueLengthLimit;
        return t <= 0 ? (o$.f.warn(`Attribute value limit must be positive, got ${t}`), e) : "string" == typeof e ? this._truncateToLimitUtil(e, t) : Array.isArray(e) ? e.map(e => "string" == typeof e ? this._truncateToLimitUtil(e, t) : e) : e
    } [lq](e, t, n) {
        return lW("SpanImpl", {
            name: this.name,
            kind: this.kind,
            spanContext: this._spanContext,
            parentSpanContext: this.parentSpanContext,
            status: this.status,
            startTime: this.startTime,
            endTime: this.endTime,
            duration: this._duration,
            ended: this._ended,
            attributes: this.attributes,
            events: this.events,
            links: this.links,
            droppedAttributesCount: this._droppedAttributesCount,
            droppedEventsCount: this._droppedEventsCount,
            droppedLinksCount: this._droppedLinksCount,
            instrumentationScope: this.instrumentationScope,
            resource: {
                attributes: lV(this.resource)
            }
        }, e, t, n)
    }
}
class lG {
    startedSpans;
    liveSpans;
    constructor(e) {
        this.startedSpans = e.createCounter("otel.sdk.span.started", {
            unit: "{span}",
            description: "The number of created spans."
        }), this.liveSpans = e.createUpDownCounter("otel.sdk.span.live", {
            unit: "{span}",
            description: "The number of currently live spans."
        })
    }
    startSpan(e, t) {
        var n;
        let r = function(e) {
            switch (e) {
                case ei.RECORD_AND_SAMPLED:
                    return "RECORD_AND_SAMPLE";
                case ei.RECORD:
                    return "RECORD_ONLY";
                case ei.NOT_RECORD:
                    return "DROP"
            }
        }(t);
        if (this.startedSpans.add(1, {
                "otel.span.parent.origin": (n = e) ? n.isRemote ? "remote" : "local" : "none",
                [lo]: r
            }), t === ei.NOT_RECORD) return () => {};
        let i = {
            [lo]: r
        };
        return this.liveSpans.add(1, i), () => {
            this.liveSpans.add(-1, i)
        }
    }
}
class lK {
    _sampler;
    _spanLimits;
    _idGenerator;
    instrumentationScope;
    _resource;
    _spanProcessor;
    _tracerMetrics;
    constructor(e, t) {
        this.instrumentationScope = e, this._sampler = t.sampler, this._spanLimits = t.spanLimits, this._resource = t.resource, this._idGenerator = t.idGenerator, this._spanProcessor = t.spanProcessor;
        let n = t.meterProvider.getMeter("@opentelemetry/sdk-trace", "2.12.0");
        this._tracerMetrics = new lG(n)
    }
    startSpan(e, t = {}, n = oj.f.active()) {
        let r, i, a;
        t.root && (n = oF.f.deleteSpan(n));
        let o = oF.f.getSpan(n);
        if (la(n)) return o$.f.debug("Instrumentation suppressed, returning Noop Span"), oF.f.wrapSpanContext(lM.c);
        let s = o?.spanContext(),
            l = this._idGenerator.generateSpanId();
        s && oF.f.isSpanContextValid(s) ? (i = s.traceId, a = s.traceState, r = s) : i = this._idGenerator.generateTraceId();
        let u = t.kind ?? ee.INTERNAL,
            c = (t.links ?? []).map(e => ({
                context: e.context,
                attributes: lD(e.attributes)
            })),
            d = lD(t.attributes),
            f = this._sampler.shouldSample(n, i, e, u, d, c),
            p = this._tracerMetrics.startSpan(s, f.decision);
        a = f.traceState ?? a;
        let h = {
            traceId: i,
            spanId: l,
            traceFlags: f.decision === es.RECORD_AND_SAMPLED ? sq.f.SAMPLED : sq.f.NONE,
            traceState: a
        };
        if (f.decision === es.NOT_RECORD) return o$.f.debug("Recording is off, propagating context in a non-recording span"), oF.f.wrapSpanContext(h);
        let m = lD(Object.assign(d, f.attributes));
        return new lQ({
            resource: this._resource,
            scope: this.instrumentationScope,
            context: n,
            spanContext: h,
            name: e,
            kind: u,
            links: c,
            parentSpanContext: r,
            attributes: m,
            startTime: t.startTime,
            spanProcessor: this._spanProcessor,
            spanLimits: this._spanLimits,
            recordEndMetrics: p
        })
    }
    startActiveSpan(e, t, n, r) {
        let i, a, o;
        if (arguments.length < 2) return;
        2 == arguments.length ? o = t : 3 == arguments.length ? (i = t, o = n) : (i = t, a = n, o = r);
        let s = a ?? oj.f.active(),
            l = this.startSpan(e, i, s),
            u = oF.f.setSpan(s, l);
        return oj.f.with(u, o, void 0, l)
    } [lq](e, t, n) {
        return lW("Tracer", {
            instrumentationScope: this.instrumentationScope,
            resource: {
                attributes: lV(this._resource)
            },
            spanLimits: this._spanLimits
        }, e, t, n)
    }
}
class lX {
    _spanProcessors;
    constructor(e) {
        this._spanProcessors = e
    }
    forceFlush() {
        let e = [];
        for (let t of this._spanProcessors) e.push(t.forceFlush());
        return new Promise(t => {
            Promise.all(e).then(() => {
                t()
            }).catch(e => {
                lr(e || Error("MultiSpanProcessor: forceFlush failed")), t()
            })
        })
    }
    onStart(e, t) {
        for (let n of this._spanProcessors) n.onStart(e, t)
    }
    onEnding(e) {
        for (let t of this._spanProcessors) t.onEnding && t.onEnding(e)
    }
    onEnd(e) {
        for (let t of this._spanProcessors) t.onEnd(e)
    }
    shutdown() {
        let e = [];
        for (let t of this._spanProcessors) e.push(t.shutdown());
        return new Promise((t, n) => {
            Promise.all(e).then(() => {
                t()
            }, n)
        })
    }
}
let lY = new Uint8Array(16), lJ = new Uint8Array(8), lZ = Array.from({
    length: 256
}, (e, t) => t.toString(16).padStart(2, "0"));

function l0(e) {
    for (let t = 0; t < e.length; t++) e[t] = 256 * Math.random() >>> 0;
    for (let t = 0; t < e.length; t++)
        if (e[t] > 0) return;
    e[e.length - 1] = 1
}

function l1(e) {
    let t = "";
    for (let n = 0; n < e.length; n++) t += lZ[e[n]];
    return t
}
class l2 {
    generateTraceId() {
        return l0(lY), l1(lY)
    }
    generateSpanId() {
        return l0(lJ), l1(lJ)
    }
}(Y = el || (el = {}))[Y.resolved = 0] = "resolved", Y[Y.timeout = 1] = "timeout", Y[Y.error = 2] = "error", Y[Y.unresolved = 3] = "unresolved"; class l3 {
    _resource;
    _activeSpanProcessor;
    _forceFlushTimeoutMillis;
    _tracerOptions;
    _tracers = new Map;
    constructor(e = {}) {
        var t;
        this._forceFlushTimeoutMillis = e.forceFlushTimeoutMillis ?? 3e4, this._resource = e.resource ?? (t = {
            [ok.x]: function() {
                if (void 0 === L) try {
                    let e = globalThis.process.argv0;
                    L = e ? `unknown_service:${e}` : "unknown_service"
                } catch {
                    L = "unknown_service"
                }
                return L
            }(),
            [ok.a]: lA[ok.a],
            [ok.u]: lA[ok.u],
            [ok.I]: lA[ok.I]
        }, lR.FromAttributeList(Object.entries(t), void 0));
        let n = e.spanProcessors ?? [];
        this._activeSpanProcessor = new lX(n), this._tracerOptions = {
            resource: this._resource,
            sampler: e.sampler ?? new lO({
                root: new lC
            }),
            spanLimits: {
                attributeCountLimit: e.spanLimits?.attributeCountLimit ?? 128,
                attributeValueLengthLimit: e.spanLimits?.attributeValueLengthLimit ?? 1 / 0,
                eventCountLimit: e.spanLimits?.eventCountLimit ?? 128,
                linkCountLimit: e.spanLimits?.linkCountLimit ?? 128,
                attributePerEventCountLimit: e.spanLimits?.attributePerEventCountLimit ?? 128,
                attributePerLinkCountLimit: e.spanLimits?.attributePerLinkCountLimit ?? 128
            },
            idGenerator: e.idGenerator || new l2,
            spanProcessor: this._activeSpanProcessor,
            meterProvider: e.meterProvider ?? {
                getMeter: () => oq
            }
        }
    }
    getTracer(e, t, n) {
        let r = `${e}@${t||""}:${n?.schemaUrl||""}`;
        return this._tracers.has(r) || this._tracers.set(r, new lK({
            name: e,
            version: t,
            schemaUrl: n?.schemaUrl
        }, this._tracerOptions)), this._tracers.get(r)
    }
    forceFlush(e) {
        let t = e?.timeoutMillis ?? this._forceFlushTimeoutMillis,
            n = this._activeSpanProcessor._spanProcessors.map(e => new Promise(n => {
                let r, i = setTimeout(() => {
                    n(Error(`Span processor did not completed within timeout period of ${t} ms`)), r = el.timeout
                }, t);
                e.forceFlush().then(() => {
                    clearTimeout(i), r !== el.timeout && n(r = el.resolved)
                }).catch(e => {
                    clearTimeout(i), r = el.error, n(e)
                })
            }));
        return new Promise((e, t) => {
            Promise.all(n).then(n => {
                let r = n.filter(e => e !== el.resolved);
                r.length > 0 ? t(r) : e()
            }).catch(e => t([e]))
        })
    }
    shutdown() {
        return this._activeSpanProcessor.shutdown()
    } [lq](e, t, n) {
        let r = this._activeSpanProcessor._spanProcessors;
        return lW("TracerProvider", {
            resource: {
                attributes: lV(this._resource)
            },
            tracers: Array.from(this._tracers.keys()),
            spanProcessors: r.map(e => e.constructor?.name ?? "SpanProcessor")
        }, e, t, n)
    }
}
class l4 extends l3 {
    constructor(e = {}) {
        let t, n = function(...e) {
            let t = e.shift(),
                n = new WeakMap;
            for (; e.length > 0;) t = function e(t, n, r = 0, i) {
                let a;
                if (!(r > 20)) {
                    if (r++, lT(t) || lT(n) || lE(n)) a = lw(n);
                    else if (lS(t)) {
                        if (a = t.slice(), lS(n))
                            for (let e = 0, t = n.length; e < t; e++) a.push(lw(n[e]));
                        else if (lk(n)) {
                            let e = Object.keys(n);
                            for (let t = 0, r = e.length; t < r; t++) {
                                let r = e[t];
                                "__proto__" !== r && "constructor" !== r && "prototype" !== r && (a[r] = lw(n[r]))
                            }
                        }
                    } else if (lk(t))
                        if (lk(n)) {
                            var o, s;
                            if (o = t, s = n, !(ly(o) && ly(s))) return n;
                            a = Object.assign({}, t);
                            let l = Object.keys(n);
                            for (let o = 0, s = l.length; o < s; o++) {
                                let s = l[o];
                                if ("__proto__" === s || "constructor" === s || "prototype" === s) continue;
                                let u = n[s];
                                if (lT(u)) void 0 === u ? delete a[s] : a[s] = u;
                                else {
                                    let o = a[s];
                                    if (l_(t, s, i) || l_(n, s, i)) delete a[s];
                                    else {
                                        if (lk(o) && lk(u)) {
                                            let e = i.get(o) || [],
                                                r = i.get(u) || [];
                                            e.push({
                                                obj: t,
                                                key: s
                                            }), r.push({
                                                obj: n,
                                                key: s
                                            }), i.set(o, e), i.set(u, r)
                                        }
                                        a[s] = e(a[s], u, r, i)
                                    }
                                }
                            }
                        } else a = n;
                    return a
                }
            }(t, e.shift(), 0, n);
            return t
        }({}, {
            sampler: function() {
                let e = (void 0) ?? eo.ParentBasedAlwaysOn;
                switch (e) {
                    case eo.AlwaysOn:
                        return new lC;
                    case eo.AlwaysOff:
                        return new lx;
                    case eo.ParentBasedAlwaysOn:
                        return new lO({
                            root: new lC
                        });
                    case eo.ParentBasedAlwaysOff:
                        return new lO({
                            root: new lx
                        });
                    case eo.TraceIdRatio:
                        return new lP(lN());
                    case eo.ParentBasedTraceIdRatio:
                        return new lO({
                            root: new lP(lN())
                        });
                    default:
                        return o$.f.error(`OTEL_TRACES_SAMPLER value "${e}" invalid, defaulting to "${eo.ParentBasedAlwaysOn}".`), new lO({
                            root: new lC
                        })
                }
            }(),
            forceFlushTimeoutMillis: 3e4,
            generalLimits: {
                attributeValueLengthLimit: le("OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? 1 / 0,
                attributeCountLimit: le("OTEL_ATTRIBUTE_COUNT_LIMIT") ?? 128
            },
            spanLimits: {
                attributeValueLengthLimit: le("OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? 1 / 0,
                attributeCountLimit: le("OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT") ?? 128,
                linkCountLimit: le("OTEL_SPAN_LINK_COUNT_LIMIT") ?? 128,
                eventCountLimit: le("OTEL_SPAN_EVENT_COUNT_LIMIT") ?? 128,
                attributePerEventCountLimit: le("OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT") ?? 128,
                attributePerLinkCountLimit: le("OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT") ?? 128
            }
        }, ((t = Object.assign({}, e.spanLimits)).attributeCountLimit = e.spanLimits?.attributeCountLimit ?? e.generalLimits?.attributeCountLimit ?? le("OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT") ?? le("OTEL_ATTRIBUTE_COUNT_LIMIT") ?? 128, t.attributeValueLengthLimit = e.spanLimits?.attributeValueLengthLimit ?? e.generalLimits?.attributeValueLengthLimit ?? le("OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? le("OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? 1 / 0, Object.assign({}, e, {
            spanLimits: t
        })));
        delete n.generalLimits, super(n)
    }
}
class l5 {
    _enabled = !1;
    _currentContext = sV.C;
    _bindFunction(e = sV.C, t) {
        let n = this,
            r = function(...r) {
                return n.with(e, () => t.apply(this, r))
            };
        return Object.defineProperty(r, "length", {
            enumerable: !1,
            configurable: !0,
            writable: !1,
            value: t.length
        }), r
    }
    active() {
        return this._currentContext
    }
    bind(e, t) {
        return (void 0 === e && (e = this.active()), "function" == typeof t) ? this._bindFunction(e, t) : t
    }
    disable() {
        return this._currentContext = sV.C, this._enabled = !1, this
    }
    enable() {
        return this._enabled || (this._enabled = !0, this._currentContext = sV.C), this
    }
    with(e, t, n, ...r) {
        let i = this._currentContext;
        this._currentContext = e || sV.C;
        try {
            return t.call(n, ...r)
        } finally {
            this._currentContext = i
        }
    }
}
class l6 {
    _propagators;
    _fields;
    constructor(e = {}) {
        this._propagators = e.propagators ?? [];
        let t = new Set;
        for (let e of this._propagators)
            for (let n of "function" == typeof e.fields ? e.fields() : []) t.add(n);
        this._fields = Array.from(t)
    }
    inject(e, t, n) {
        for (let r of this._propagators) try {
            r.inject(e, t, n)
        } catch (e) {
            o$.f.warn(`Failed to inject with ${r.constructor.name}. Err: ${e.message}`)
        }
    }
    extract(e, t, n) {
        return this._propagators.reduce((e, r) => {
            try {
                return r.extract(e, t, n)
            } catch (e) {
                o$.f.warn(`Failed to extract with ${r.constructor.name}. Err: ${e.message}`)
            }
            return e
        }, e)
    }
    fields() {
        return this._fields.slice()
    }
}
let l8 = "baggage";
var l9 = e.i(681242);

function l7(e, t, n, r) {
    let i = 0;
    for (; i < e.length && n < 180;) {
        let a = e.indexOf(",", i),
            o = -1 === a ? e.length : a,
            s = o - i;
        if (s <= 4096) {
            let a = function(e) {
                let t, n, r;
                if (!e) return;
                let i = e.indexOf(";"),
                    a = -1 === i ? e : e.substring(0, i),
                    o = a.indexOf("=");
                if (o <= 0) return;
                let s = a.substring(0, o).trim(),
                    l = a.substring(o + 1).trim();
                if (s && l) {
                    try {
                        t = decodeURIComponent(s), n = decodeURIComponent(l)
                    } catch {
                        return
                    }
                    if (-1 !== i && i < e.length - 1) {
                        let t = e.substring(i + 1);
                        r = (0, l9.h)(t)
                    }
                    return {
                        key: t,
                        value: n,
                        metadata: r
                    }
                }
            }(e.substring(i, o));
            if (a) {
                let e = +(0 !== n) + s;
                if (r + e > 8192) break;
                t[a.key] = a.metadata ? {
                    value: a.value,
                    metadata: a.metadata
                } : {
                    value: a.value
                }, n++, r += e
            }
        }
        if (-1 === a) break;
        i = a + 1
    }
    return [n, r]
}
class ue {
    inject(e, t, n) {
        let r = oU.f.getBaggage(e);
        if (!r || la(e)) return;
        let i = r.getAllEntries().map(([e, t]) => {
            let n = `${encodeURIComponent(e)}=${encodeURIComponent(t.value)}`;
            return void 0 !== t.metadata && (n += ";" + t.metadata.toString()), n
        }).filter(e => e.length <= 4096).slice(0, 180).reduce((e, t) => {
            let n = `${e}${""!==e?",":""}${t}`;
            return n.length > 8192 ? e : n
        }, "");
        i.length > 0 && n.set(t, l8, i)
    }
    extract(e, t, n) {
        let r = n.get(t, l8);
        if (!r) return e;
        let i = {},
            a = 0,
            o = 0;
        if (Array.isArray(r))
            for (let e = 0; e < r.length; e++)[a, o] = l7(r[e], i, a, o);
        else [a] = l7(r, i, a, o);
        return 0 === a ? e : oU.f.setBaggage(e, oU.f.createBaggage(i))
    }
    fields() {
        return [l8]
    }
}
let ut = "[_0-9a-z-*/]", un = `[a-z]${ut}{0,255}`, ur = `[a-z0-9]${ut}{0,240}@[a-z]${ut}{0,13}`, ui = RegExp(`^(?:${un}|${ur})$`), ua = /^[ -~]{0,255}[!-~]$/, uo = /,|=/;

function us(e) {
    return ua.test(e) && !uo.test(e)
}
class ul {
    _length;
    _rawTraceState;
    _internalState;
    constructor(e) {
        this._rawTraceState = "string" == typeof e ? e : "", this._length = this._rawTraceState.length
    }
    set(e, t) {
        if (!ui.test(e) || !us(t)) return this;
        let n = this._getState(),
            r = n.get(e),
            i = this._length;
        if ("string" == typeof r ? i += t.length - r.length : i += e.length + t.length + (n.size > 0 ? 2 : 1), i > 512) return this;
        let a = new Map(n);
        return a.delete(e), a.set(e, t), this._fromState(a, i)
    }
    unset(e) {
        let t = this._getState(),
            n = t.get(e);
        if ("string" != typeof n) return this;
        let r = this._length - (e.length + n.length + 1);
        t.size > 1 && (r -= 1);
        let i = new Map(t);
        return i.delete(e), this._fromState(i, r)
    }
    get(e) {
        return this._getState().get(e)
    }
    serialize() {
        let e = "",
            t = 0;
        for (let n of this._getState()) t > 0 && (e = "," + e), e = `${n[0]}=${n[1]}` + e, t++;
        return e
    }
    _getState() {
        if (this._internalState) return this._internalState;
        let e = this._rawTraceState.split(","),
            t = new Map,
            n = 0;
        for (let r of e) {
            let e = r.trim(),
                i = e.indexOf("=");
            if (-1 === i) continue;
            let a = e.slice(0, i),
                o = e.slice(i + 1);
            if (!ui.test(a) || !us(o)) continue;
            let s = n + e.length + +(t.size > 0);
            if (!(s > 512) && (t.set(a, o), n = s, t.size >= 32)) break
        }
        return this._length = n, this._internalState = new Map(Array.from(t.entries()).reverse()), this._internalState
    }
    _fromState(e, t) {
        let n = Object.create(ul.prototype);
        return n._internalState = e, n._length = t, n
    }
}
let uu = "traceparent", uc = "tracestate", ud = RegExp("^\\s?((?!ff)[\\da-f]{2})-((?![0]{32})[\\da-f]{32})-((?![0]{16})[\\da-f]{16})-([\\da-f]{2})(-.*)?\\s?$"); class uf {
    inject(e, t, n) {
        let r = oF.f.getSpanContext(e);
        if (!r || la(e) || !(0, sH.e)(r)) return;
        let i = `00-${r.traceId}-${r.spanId}-0${Number(r.traceFlags||sq.f.NONE).toString(16)}`;
        n.set(t, uu, i), r.traceState && n.set(t, uc, r.traceState.serialize())
    }
    extract(e, t, n) {
        let r, i = n.get(t, uu);
        if (!i) return e;
        let a = Array.isArray(i) ? i[0] : i;
        if ("string" != typeof a) return e;
        let o = (r = ud.exec(a)) && ("00" !== r[1] || !r[5]) ? {
            traceId: r[2],
            spanId: r[3],
            traceFlags: parseInt(r[4], 16)
        } : null;
        if (!o) return e;
        o.isRemote = !0;
        let s = n.get(t, uc);
        if (s) {
            let e = Array.isArray(s) ? s.join(",") : s;
            o.traceState = new ul("string" == typeof e ? e : void 0)
        }
        return oF.f.setSpanContext(e, o)
    }
    fields() {
        return [uu, uc]
    }
}
class up extends l4 {
    constructor(e = {}) {
        super(e)
    }
    register(e = {}) {
        oF.f.setGlobalTracerProvider(this),
            function(e) {
                if (null !== e) {
                    if (void 0 === e) return oU.f.setGlobalPropagator(new l6({
                        propagators: [new uf, new ue]
                    }));
                    oU.f.setGlobalPropagator(e)
                }
            }(e.propagator),
            function(e) {
                if (null !== e) {
                    if (void 0 === e) {
                        let e = new l5;
                        e.enable(), oj.f.setGlobalContextManager(e);
                        return
                    }
                    e.enable(), oj.f.setGlobalContextManager(e)
                }
            }(e.contextManager)
    }
}
var uh = class e extends r5 {
    constructor(e = {}) {
        super(), this.options = e, this.name = "@grafana/faro-web-tracing", this.version = r6
    }
    initialize() {
        var t, n, r, i, a;
        let o = this.options,
            s = {};
        this.config.app.name && (s[ok.x] = this.config.app.name), this.config.app.namespace && (s["service.namespace"] = this.config.app.namespace), this.config.app.version && (s[ok.r] = this.config.app.version), this.config.app.environment && (s["deployment.environment.name"] = this.config.app.environment, s["deployment.environment"] = this.config.app.environment);
        let l = this.metas.value.browser;
        rh(null == l ? void 0 : l.brands) && (s["browser.brands"] = l.brands.map(e => e.brand)), (null == l ? void 0 : l.language) && (s["browser.language"] = l.language), "boolean" == typeof(null == l ? void 0 : l.mobile) && (s["browser.mobile"] = !!l.mobile), (null == l ? void 0 : l.os) && (s["browser.platform"] = l.os), (null == l ? void 0 : l.userAgent) && (s[ok.q] = l.userAgent), s["process.runtime.name"] = "browser", s["process.runtime.version"] = null == (t = this.metas.value.browser) ? void 0 : t.userAgent, s["telemetry.distro.name"] = "faro-web-sdk", s["telemetry.distro.version"] = r6, Object.assign(s, o.resourceAttributes);
        let u = new up({
                resource: s9({
                    [ok.x]: function() {
                        if (void 0 === A) try {
                            let e = globalThis.process.argv0;
                            A = e ? `unknown_service:${e}` : "unknown_service"
                        } catch {
                            A = "unknown_service"
                        }
                        return A
                    }(),
                    [ok.a]: s5[ok.a],
                    [ok.u]: s5[ok.u],
                    [ok.I]: s5[ok.I]
                }).merge(s9(s)),
                sampler: {
                    shouldSample: () => {
                        var e;
                        return (null == (e = this.config.sessionTracking) ? void 0 : e.enabled) && document.prerendering ? {
                            decision: ei.NOT_RECORD
                        } : {
                            decision: function(e = {}) {
                                return sB(e) ? ei.RECORD_AND_SAMPLED : ei.NOT_RECORD
                            }(om(this.metas).session)
                        }
                    }
                },
                spanProcessors: [null != (n = o.spanProcessor) ? n : new oL(new ld(new oz({
                    api: this.api
                }), {
                    scheduledDelayMillis: e.SCHEDULED_BATCH_DELAY_MS,
                    maxExportBatchSize: 30
                }), this.metas)]
            }),
            c = !0 === o.omitTraceContextForUnsampledSessions;
        u.register({
            propagator: new oR(null != (r = o.propagator) ? r : new s4, () => this.transports.isPaused() || c && !sB(this.api.getSession())),
            contextManager: o.contextManager
        });
        let {
            propagateTraceHeaderCorsUrls: d,
            fetchInstrumentationOptions: f,
            xhrInstrumentationOptions: p
        } = null != (i = this.options.instrumentationOptions) ? i : {};
        ! function(e) {
            let t = e.tracerProvider || oF.f.getTracerProvider(),
                n = e.meterProvider || o2.getMeterProvider(),
                r = e.loggerProvider || se.getLoggerProvider(),
                i = e.instrumentations?.flat() ?? [];
            for (let e = 0, a = i.length; e < a; e++) {
                let a = i[e];
                t && a.setTracerProvider(t), n && a.setMeterProvider(n), r && a.setLoggerProvider && a.setLoggerProvider(r), a.getConfig().enabled || a.enable()
            }
        }({
            instrumentations: null != (a = o.instrumentations) ? a : function(e = {}) {
                var t, n, r, i, a;
                let {
                    fetchInstrumentationOptions: o,
                    xhrInstrumentationOptions: s
                } = e, l = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = function(e, t) {
                        if (null == e) return {};
                        var n = {};
                        for (var r in e)
                            if (({}).hasOwnProperty.call(e, r)) {
                                if (t.includes(r)) continue;
                                n[r] = e[r]
                            } return n
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < a.length; r++) n = a[r], t.includes(n) || ({}).propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                    return i
                }(e, s$), u = (t = o, sL(sL(sL({}, l), {}, {
                    ignoreNetworkEvents: !0
                }, t), {}, {
                    applyCustomAttributesOnSpan: (n = null == t ? void 0 : t.applyCustomAttributesOnSpan, (e, t, r) => {
                        sP(e, r instanceof Error ? 0 : r.status), null == n || n(e, t, r)
                    }),
                    requestHook: (r = null == t ? void 0 : t.requestHook, (e, t) => {
                        let n = ra.api.getActiveUserAction();
                        n && (null == n ? void 0 : n.getState()) === aN.Started && (e.setAttribute("faro.action.user.name", n.name), e.setAttribute("faro.action.user.parentId", n.parentId)), null == r || r(e, t)
                    })
                })), c = (i = s, sL(sL(sL({}, l), {}, {
                    ignoreNetworkEvents: !0
                }, i), {}, {
                    applyCustomAttributesOnSpan: (a = null == i ? void 0 : i.applyCustomAttributesOnSpan, (e, t) => {
                        sP(e, t.status), null == a || a(e, t)
                    })
                }));
                return [new sF(u), new sO(c)]
            }({
                ignoreUrls: this.getIgnoreUrls(),
                propagateTraceHeaderCorsUrls: d,
                fetchInstrumentationOptions: f,
                xhrInstrumentationOptions: p
            })
        }), this.api.initOTEL(oF.f, oj.f)
    }
    getIgnoreUrls() {
        return this.transports.transports.flatMap(e => e.getIgnoreUrls())
    }
}; uh.SCHEDULED_BATCH_DELAY_MS = 1e3;
var um = e.i(688745);
let ug = (J = () => ra.api.getOTEL()?.trace.getTracer("hexagon-navigation"), I = e => {
    clearTimeout(e.idle), clearTimeout(e.final), e.span.end(e.pending.size > 0 ? Date.now() : e.lastActivity), R === e && (R = void 0)
}, M = e => {
    clearTimeout(e.idle), e.idle = setTimeout(() => I(e), 1e3)
}, D = sV.C, {
    start: (e, t) => {
        let n = J();
        if (!n) return;
        R && I(R);
        let r = n.startSpan("navigation", {
                attributes: {
                    "url.full": new URL(e, document.baseURI).href,
                    "navigation.from": document.URL,
                    "navigation.type": t
                }
            }, sV.C),
            i = {
                span: r,
                context: oF.f.setSpan(sV.C, r),
                pending: new Set,
                lastActivity: Date.now()
            };
        i.final = setTimeout(() => I(i), 3e4), R = i, M(i)
    },
    onRequestStart: e => {
        let t = R;
        t && e.spanContext().traceId === t.span.spanContext().traceId && (t.pending.add(e), clearTimeout(t.idle))
    },
    onRequestEnd: e => {
        let t = R;
        t?.pending.delete(e) && (t.lastActivity = Date.now(), 0 === t.pending.size && M(t))
    },
    contextManager: z = {
        active: () => D === sV.C && R ? R.context : D,
        with: (e, t, n, ...r) => {
            let i = D;
            D = e ?? sV.C;
            try {
                return t.call(n, ...r)
            } finally {
                D = i
            }
        },
        bind: (e, t) => "function" != typeof t ? t : function(...n) {
            return z.with(e, () => t.apply(this, n))
        },
        enable: () => z,
        disable: () => (D = sV.C, z)
    }
}), uv = ug.start, ub = e => `${window.location.origin}/api/otlp/${e}`, uy = async () => {
    let [, e] = await Promise.all([new Promise(e => {
        let t = () => setTimeout(e, 0);
        "complete" === document.readyState ? t() : window.addEventListener("load", t, {
            once: !0
        })
    }), new Promise(e => {
        let t = () => performance.getEntriesByName(um.c)[0]?.startTime,
            n = new PerformanceObserver(() => {
                let r = t();
                void 0 !== r && (n.disconnect(), e(r))
            });
        n.observe({
            type: "mark",
            buffered: !0
        }), setTimeout(() => {
            n.disconnect(), e(t())
        }, 3e4)
    })]), [t] = performance.getEntriesByType("navigation"), n = ra.api.getOTEL()?.trace.getTracer("hexagon-document-load");
    t && n && (0, um.n)(n, t, e)
}; globalThis._sentryRouteManifest = '{"dynamicRoutes":[{"path":"/:locale/410","regex":"^/([^/]+)/410$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/:rest*?","regex":"^/([^/]+)(?:/(.*))?$","paramNames":["locale","rest"],"hasOptionalPrefix":true},{"path":"/:locale/archive/blog/:slug*?","regex":"^/([^/]+)/archive/blog(?:/(.*))?$","paramNames":["locale","slug"],"hasOptionalPrefix":true},{"path":"/:locale/archive/news/:slug*","regex":"^/([^/]+)/archive/news/(.+)$","paramNames":["locale","slug"],"hasOptionalPrefix":true},{"path":"/:locale/archive/resources/:slug*","regex":"^/([^/]+)/archive/resources/(.+)$","paramNames":["locale","slug"],"hasOptionalPrefix":true},{"path":"/:locale/careers","regex":"^/([^/]+)/careers$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/careers/positions","regex":"^/([^/]+)/careers/positions$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/contact-us","regex":"^/([^/]+)/contact-us$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/data-deletion-request","regex":"^/([^/]+)/data-deletion-request$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/data-request","regex":"^/([^/]+)/data-request$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/data-request-v2","regex":"^/([^/]+)/data-request-v2$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/glossary","regex":"^/([^/]+)/glossary$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/home-experiment/:slug*","regex":"^/([^/]+)/home-experiment/(.+)$","paramNames":["locale","slug"],"hasOptionalPrefix":true},{"path":"/:locale/oauth","regex":"^/([^/]+)/oauth$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/opt-out-request","regex":"^/([^/]+)/opt-out-request$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/releases/editor","regex":"^/([^/]+)/releases/editor$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/releases/editor/alpha","regex":"^/([^/]+)/releases/editor/alpha$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/releases/editor/alpha/:version","regex":"^/([^/]+)/releases/editor/alpha/([^/]+)$","paramNames":["locale","version"],"hasOptionalPrefix":true},{"path":"/:locale/releases/editor/archive","regex":"^/([^/]+)/releases/editor/archive$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/releases/editor/beta","regex":"^/([^/]+)/releases/editor/beta$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/releases/editor/beta/:version","regex":"^/([^/]+)/releases/editor/beta/([^/]+)$","paramNames":["locale","version"],"hasOptionalPrefix":true},{"path":"/:locale/releases/editor/beta/guide-beta-testing","regex":"^/([^/]+)/releases/editor/beta/guide-beta-testing$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/releases/editor/latest","regex":"^/([^/]+)/releases/editor/latest$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/releases/editor/whats-new","regex":"^/([^/]+)/releases/editor/whats-new$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/releases/editor/whats-new/:version","regex":"^/([^/]+)/releases/editor/whats-new/([^/]+)$","paramNames":["locale","version"],"hasOptionalPrefix":true},{"path":"/:locale/search","regex":"^/([^/]+)/search$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/unity-release/latest","regex":"^/([^/]+)/unity-release/latest$","paramNames":["locale"],"hasOptionalPrefix":true}],"staticRoutes":[],"isrRoutes":["/:locale/:rest*?","/:locale/archive/resources/:slug*","/:locale/home-experiment/:slug*","/:locale/releases/editor/alpha/:version","/:locale/releases/editor/beta/:version","/:locale/releases/editor/whats-new/:version"]}', globalThis._sentryNextJsVersion = "16.4.2", (U = function(e) {
    var t, n, r, i, a, o;
    let s = [],
        l = oc(e.unpatchedConsole, e.internalLoggerLevel);
    e.transports ? ((e.url || e.apiKey) && l.error('if "transports" is defined, "url" and "apiKey" should not be defined'), s.push(...e.transports)) : e.url ? s.push(new ou({
        url: e.url,
        apiKey: e.apiKey,
        requestCompression: e.requestCompression
    })) : l.error('either "url" or "transports" must be defined');
    let {
        dedupe: u = !0,
        eventDomain: c = "browser",
        globalObjectKey: d = "faro",
        instrumentations: f = aV(),
        internalLoggerLevel: p = 1,
        isolate: h = !1,
        logArgsSerializer: m = iw,
        metas: g = function(e) {
            var t, n, r;
            let {
                page: i,
                generatePageId: a
            } = null != (t = null == e ? void 0 : e.pageTracking) ? t : {}, o = [aK, aX, function({
                generatePageId: e,
                initialPageMeta: t
            } = {}) {
                return () => {
                    let n = location.href;
                    return ru(e, "function") && T !== n && (T = n, x = e(location)), {
                        page: rl(rl({
                            url: n
                        }, x ? {
                            id: x
                        } : {}), t)
                    }
                }
            }({
                generatePageId: a,
                initialPageMeta: i
            }), ...null != (n = e.metas) ? n : [], aY];
            return rp(null == (r = window) ? void 0 : r.k6) ? [...o, aJ] : o
        }(e),
        paused: v = !1,
        preventGlobalExposure: b = !1,
        unpatchedConsole: y = r3,
        url: w,
        experimental: _
    } = e, S = aZ(e, of), E = null != (t = null == _ ? void 0 : _.trackNavigation) && t, k = {
        dataAttributeName: a_(null != (n = null == (r = e.userActionsInstrumentation) ? void 0 : r.dataAttributeName) ? n : aw),
        excludeItem: null == (i = e.userActionsInstrumentation) ? void 0 : i.excludeItem,
        initialActivityTimeout: aS(null == (a = e.userActionsInstrumentation) ? void 0 : a.initialActivityTimeout, 100, e => l.warn(e))
    };
    return rl(rl({}, S), {}, {
        batching: rl(rl({}, od), e.batching),
        dedupe: u,
        globalObjectKey: d,
        instrumentations: function(e, {
            experimental: t
        }) {
            var n;
            let r = null != (n = null == t ? void 0 : t.trackNavigation) && n;
            return e.filter(e => "@grafana/faro-web-sdk:instrumentation-navigation" !== e.name || !!r)
        }(f, e),
        internalLoggerLevel: p,
        isolate: h,
        logArgsSerializer: m,
        metas: g,
        parseStacktrace: aW,
        paused: v,
        preventGlobalExposure: b,
        transports: s,
        unpatchedConsole: y,
        eventDomain: c,
        ignoreUrls: [...null != (o = e.ignoreUrls) ? o : [], ...w ? [w] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: rl(rl(rl({}, rL), e.sessionTracking), function({
            trackGeolocation: e,
            sessionTracking: t
        }) {
            var n;
            let r = {};
            return (ru(e, "boolean") && (r.geoLocationTrackingEnabled = e), rv(r)) ? {} : {
                session: rl(rl({}, null != (n = null == t ? void 0 : t.session) ? n : {}), {}, {
                    overrides: r
                })
            }
        }({
            trackGeolocation: e.trackGeolocation,
            sessionTracking: e.sessionTracking
        })),
        userActionsInstrumentation: k,
        experimental: {
            trackNavigation: E
        }
    })
}({
    app: {
        name: "unity-services-hexagon-web-browser",
        environment: "prd"
    },
    instrumentations: [...aV(), new uh({
        contextManager: ug.contextManager,
        instrumentationOptions: {
            fetchInstrumentationOptions: {
                requestHook: ug.onRequestStart,
                applyCustomAttributesOnSpan: ug.onRequestEnd
            }
        }
    })],
    transports: [new oA({
        logsURL: ub("logs"),
        tracesURL: ub("traces"),
        otlpTransform: {
            createErrorLogBody: ({
                payload: e
            }) => `${e.type}: ${e.value}`,
            createMeasurementLogBody: ({
                payload: e
            }) => `${e.type}: ${Object.entries(e.values).map(([e,t])=>`${e}=${t}`).join(" ")}`
        }
    })]
})) && function(e) {
    var t, n, r, i, a;
    let o, s, l, u, c, d, f, p, h, m, g, v, b, y, w, _, S, E, k, T, x, O, P, N = ov = null != (t = e.unpatchedConsole) ? t : ov,
        A = oc(N, e.internalLoggerLevel);
    if (ri in rr && !e.isolate) return A.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
    A.debug("Initializing");
    let L = (s = [], l = [], u = [], c = 0, d = 0, f = () => s.reduce((e, t) => Object.assign(e, ru(t, "function") ? t() : t), {}), p = () => {
            if (l.length) {
                let e = f();
                l.forEach(t => t(e))
            }
        }, {
            add: (...e) => {
                A.debug("Adding metas\n", e), s.push(...e), p()
            },
            remove: (...e) => {
                A.debug("Removing metas\n", e), s = s.filter(t => !e.includes(t)), p()
            },
            addListener: e => {
                A.debug("Adding metas listener\n", e), l.push(e)
            },
            removeListener: e => {
                A.debug("Removing metas listener\n", e), l = l.filter(t => t !== e)
            },
            capture: e => {
                var t;
                let n = void 0 !== o,
                    r = null != (t = o) ? t : u;
                n || (o = r, c = 0, d = r.length);
                try {
                    for (; c < d;) {
                        let e = r[c++];
                        null == e || e()
                    }
                    let t = oh(f());
                    return null == e || e(), t
                } finally {
                    n || (o = void 0)
                }
            },
            addCaptureListener: e => {
                u.push(e)
            },
            removeCaptureListener: e => {
                u = u.filter(t => t !== e)
            },
            get value() {
                return f()
            }
        }),
        R = (A.debug("Initializing transports"), m = [], g = [], v = t => {
            let n = t;
            for (let t of g) {
                let r = n.map(t).filter(Boolean);
                if (0 === r.length) return [];
                n = function(e, t) {
                    if (t.preserveOriginalError)
                        for (let t of e) "exception" === t.type && delete t.payload.originalError;
                    return e
                }(r, e)
            }
            return n
        }, (null == (n = e.batching) ? void 0 : n.enabled) && (h = new og(e => {
            let t = v(e);
            if (0 !== t.length)
                for (let e of m) A.debug(`Transporting item using ${e.name}
`, t), e.isBatched() && e.send(t)
        }, {
            sendTimeout: e.batching.sendTimeout,
            itemLimit: e.batching.itemLimit,
            paused: e.paused
        })), {
            add: (...t) => {
                A.debug("Adding transports"), t.forEach(t => {
                    (A.debug(`Adding "${t.name}" transport`), m.some(e => e === t)) ? A.warn(`Transport ${t.name} is already added`): (t.unpatchedConsole = N, t.internalLogger = A, t.config = e, t.metas = L, m.push(t))
                })
            },
            addBeforeSendHooks: (...e) => {
                A.debug("Adding beforeSendHooks\n", g), e.forEach(e => {
                    e && g.push(e)
                })
            },
            getBeforeSendHooks: () => [...g],
            execute: t => {
                var n, r, i, a, o;
                if (!e.paused && ry(L).shouldCapture()) {
                    if (o = t.meta, !op.has(o)) {
                        let n = null == (r = L.value.session) ? void 0 : r.id,
                            o = om(L);
                        if (e.paused) return;
                        let s = r2({}, t.meta);
                        (null == (i = s.session) ? void 0 : i.id) === n && (null == (a = o.session) ? void 0 : a.id) !== n && (void 0 === o.session ? delete s.session : s.session = o.session), t = r2(r2({}, t), {}, {
                            meta: oh(s)
                        })
                    }(null == (n = e.batching) ? void 0 : n.enabled) && (null == h || h.addItem(t)), (t => {
                        var n, r;
                        if ((null == (n = e.batching) ? void 0 : n.enabled) && m.every(e => e.isBatched())) return;
                        let [i] = v([t]);
                        if (void 0 !== i)
                            for (let t of m) A.debug(`Transporting item using ${t.name}
`, i), t.isBatched() ? (null == (r = e.batching) ? void 0 : r.enabled) || t.send([i]) : t.send(i)
                    })(t)
                }
            },
            isPaused: () => e.paused,
            pause: () => {
                A.debug("Pausing transports"), null == h || h.pause(), e.paused = !0
            },
            remove: (...e) => {
                A.debug("Removing transports"), e.forEach(e => {
                    A.debug(`Removing "${e.name}" transport`);
                    let t = m.indexOf(e); - 1 === t ? A.warn(`Transport "${e.name}" is not added`) : m.splice(t, 1)
                })
            },
            removeBeforeSendHooks: (...e) => {
                A.debug("Removing beforeSendHooks"), g = g.filter(t => !e.includes(t))
            },
            get transports() {
                return [...m]
            },
            unpause: () => {
                A.debug("Unpausing transports"), null == h || h.start(), e.paused = !1
            }
        }),
        I = (A.debug("Initializing API"), b = null, y = function({
            transports: e,
            internalLogger: t,
            config: n,
            pushEvent: r
        }) {
            var i;
            let a, o = null == (i = n.userActionsInstrumentation) ? void 0 : i.excludeItem,
                s = () => a;
            return {
                startUserAction: (n, i, l) => {
                    if (void 0 !== s()) return void t.error("Attempted to create a new user action while one is already running. This is not possible.");
                    {
                        let t = new aI({
                            name: n,
                            transports: e,
                            attributes: i,
                            trigger: (null == l ? void 0 : l.triggerName) || "faroApiCall",
                            importance: (null == l ? void 0 : l.importance) || aL,
                            trackUserActionsExcludeItem: o,
                            pushEvent: r
                        });
                        return t.filter(e => [3, 2].includes(e)).first().subscribe(() => {
                            a = void 0
                        }), aM.notify({
                            type: "user_action_start",
                            userAction: t,
                            initialActivityTimeout: null == l ? void 0 : l.initialActivityTimeout
                        }), a = t
                    }
                },
                getActiveUserAction: s
            }
        }({
            transports: R,
            config: e,
            internalLogger: A,
            pushEvent: (e, t, n, r) => {
                b ? b(e, t, n, r) : A.warn("pushEventImpl is not initialized. Event dropped:", {
                    name: e,
                    attributes: t,
                    domain: n,
                    options: r
                })
            }
        }), A.debug("Initializing traces API"), _ = {
            getOTEL: () => w,
            getTraceContext: () => {
                let e = null == w ? void 0 : w.trace.getSpanContext(w.context.active());
                return e ? {
                    trace_id: e.traceId,
                    span_id: e.spanId
                } : void 0
            },
            initOTEL: (e, t) => {
                A.debug("Initializing OpenTelemetry"), w = {
                    trace: e,
                    context: t
                }
            },
            isOTELInitialized: () => !!w,
            pushTraces: e => {
                try {
                    if (!ry(L).shouldCapture()) return;
                    let t = {
                        type: "trace",
                        payload: e,
                        meta: om(L)
                    };
                    A.debug("Pushing trace\n", t), R.execute(t)
                } catch (e) {
                    A.error("Error pushing trace\n", e)
                }
            }
        }, b = (E = function({
            internalLogger: e,
            config: t,
            metas: n,
            transports: r,
            tracesApi: i,
            userActionsApi: a
        }) {
            let o = null;
            return {
                pushEvent: (s, l, u, {
                    skipDedupe: c,
                    spanContext: d,
                    timestampOverwriteMs: f,
                    customPayloadTransformer: p = e => e
                } = {}) => {
                    try {
                        let h;
                        if (!ry(n).shouldCapture()) return;
                        let m = rG(l),
                            g = p({
                                name: s,
                                domain: null != u ? u : t.eventDomain,
                                attributes: rv(m) ? void 0 : m,
                                timestamp: f ? rU(f) : rz(),
                                trace: d ? {
                                    trace_id: d.traceId,
                                    span_id: d.spanId
                                } : i.getTraceContext()
                            }),
                            v = {
                                name: g.name,
                                attributes: g.attributes,
                                domain: g.domain
                            };
                        if (!c && t.dedupe && (h = o, !ru(h, "null")) && rj(v, o)) return void e.debug("Skipping event push because it is the same as the last one\n", g);
                        let b = o,
                            y = om(n);
                        if (o !== b && !c && t.dedupe && rj(v, o)) return;
                        o = v;
                        let w = {
                            meta: y,
                            payload: g,
                            type: "event"
                        };
                        e.debug("Pushing event\n", w), aD(a.getActiveUserAction(), w) || r.execute(w)
                    } catch (t) {
                        e.error("Error pushing event", t)
                    }
                }
            }
        }(S = {
            unpatchedConsole: N,
            internalLogger: A,
            userActionsApi: y,
            config: e,
            metas: L,
            transports: R,
            tracesApi: _
        })).pushEvent, r2(r2(r2(r2(r2(r2(r2({}, _), function({
            internalLogger: e,
            config: t,
            metas: n,
            transports: r,
            tracesApi: i,
            userActionsApi: a
        }) {
            var o;
            e.debug("Initializing exceptions API");
            let s = null;
            C = null != (o = t.parseStacktrace) ? o : C;
            let l = t => {
                    e.debug("Changing stacktrace parser"), C = null != t ? t : C
                },
                {
                    ignoreErrors: u = [],
                    preserveOriginalError: c
                } = t;
            return l(t.parseStacktrace), {
                changeStacktraceParser: l,
                getStacktraceParser: () => C,
                pushError: (o, {
                    skipDedupe: l,
                    stackFrames: d,
                    type: f,
                    context: p,
                    spanContext: h,
                    timestampOverwriteMs: m,
                    originalError: g,
                    fingerprint: v,
                    fatal: b
                } = {}) => {
                    if (! function(e, t) {
                            var n;
                            let {
                                message: r,
                                name: i,
                                stack: a
                            } = t;
                            return n = r + " " + i + " " + a, e.some(e => ru(e, "string") ? n.includes(e) : !!n.match(e))
                        }(u, null != g ? g : o)) try {
                        var y, w, _;
                        let u, S, E;
                        if (!ry(n).shouldCapture()) return;
                        let k = rG(r2(r2({}, ((S = E = (_ = null != g ? g : o).cause, rg && rd(S, Error)) ? E = _.cause.toString() : null !== E && (rp(_.cause) || rh(_.cause)) ? E = rQ(_.cause) : null != E && (E = _.cause.toString()), null == E ? {} : {
                                cause: E
                            })), null != p ? p : {})),
                            T = r2(r2(r2(r2({
                                type: f || o.name || "Error",
                                value: o.message,
                                timestamp: m ? rU(m) : rz(),
                                trace: h ? {
                                    trace_id: h.traceId,
                                    span_id: h.spanId
                                } : i.getTraceContext()
                            }, rv(k) ? {} : {
                                context: k
                            }), c ? {
                                originalError: g
                            } : {}), v ? {
                                fingerprint: v
                            } : {}), void 0 !== b ? {
                                fatal: b
                            } : {});
                        (null == (d = null != (y = d) ? y : o.stack ? null == C ? void 0 : C(o).frames : void 0) ? void 0 : d.length) && (T.stacktrace = {
                            frames: d
                        });
                        let x = {
                            type: T.type,
                            value: T.value,
                            stacktrace: T.stacktrace,
                            context: T.context,
                            fingerprint: T.fingerprint,
                            fatal: null != (w = T.fatal) && w
                        };
                        if (!l && t.dedupe && (u = s, !ru(u, "null")) && rj(x, s)) return void e.debug("Skipping error push because it is the same as the last one\n", T);
                        let O = s,
                            P = om(n);
                        if (s !== O && !l && t.dedupe && rj(x, s)) return;
                        s = x;
                        let N = {
                            meta: P,
                            payload: T,
                            type: "exception"
                        };
                        e.debug("Pushing exception\n", N), aD(a.getActiveUserAction(), N) || r.execute(N)
                    } catch (t) {
                        e.error("Error pushing event", t)
                    }
                }
            }
        }(S)), function({
            internalLogger: e,
            metas: t
        }) {
            let n, r, i, a;
            e.debug("Initializing meta API");
            let o = e => {
                    r && t.remove(r), r = {
                        user: e
                    }, t.add(r)
                },
                s = (e, r) => {
                    var i;
                    let a = null == r ? void 0 : r.overrides,
                        o = a ? {
                            overrides: r2(r2({}, null == n || null == (i = n.session) ? void 0 : i.overrides), a)
                        } : {};
                    n && t.remove(n), n = {
                        session: r2(r2({}, rv(e) ? void 0 : e), o)
                    }, t.add(n)
                },
                l = (e, n) => {
                    ry(t).notifySessionUpdate({
                        type: "replace",
                        session: e,
                        overrides: null == n ? void 0 : n.overrides
                    }), s(e, n)
                },
                u = () => t.value.session,
                c = () => t.value.page;
            return {
                setUser: o,
                resetUser: o,
                setSession: l,
                resetSession: l,
                getSession: u,
                setView: (e, n) => {
                    var r;
                    if ((null == n ? void 0 : n.overrides) && (ry(t).notifySessionUpdate({
                            type: "overrides",
                            overrides: n.overrides
                        }), s(u(), {
                            overrides: n.overrides
                        })), (null == i || null == (r = i.view) ? void 0 : r.name) === (null == e ? void 0 : e.name)) return;
                    let a = i;
                    i = {
                        view: e
                    }, t.add(i), a && t.remove(a)
                },
                getView: () => t.value.view,
                setPage: e => {
                    var n;
                    let r = ru(e, "string") ? r2(r2({}, null != (n = null == a ? void 0 : a.page) ? n : c()), {}, {
                        id: e
                    }) : e;
                    a && t.remove(a), a = {
                        page: r
                    }, t.add(a)
                },
                getPage: c
            }
        }(S)), function({
            internalLogger: e,
            config: t,
            metas: n,
            transports: r,
            tracesApi: i,
            userActionsApi: a
        }) {
            var o;
            e.debug("Initializing logs API");
            let s = null,
                l = null != (o = t.logArgsSerializer) ? o : iw;
            return {
                pushLog: (o, {
                    context: u,
                    level: c,
                    skipDedupe: d,
                    spanContext: f,
                    timestampOverwriteMs: p
                } = {}) => {
                    try {
                        let h;
                        if (!ry(n).shouldCapture()) return;
                        let m = rG(u),
                            g = {
                                message: l(o),
                                level: null != c ? c : "log",
                                context: rv(m) ? void 0 : m,
                                timestamp: p ? rU(p) : rz(),
                                trace: f ? {
                                    trace_id: f.traceId,
                                    span_id: f.spanId
                                } : i.getTraceContext()
                            },
                            v = {
                                message: g.message,
                                level: g.level,
                                context: g.context
                            };
                        if (!d && t.dedupe && (h = s, !ru(h, "null")) && rj(v, s)) return void e.debug("Skipping log push because it is the same as the last one\n", g);
                        let b = s,
                            y = om(n);
                        if (s !== b && !d && t.dedupe && rj(v, s)) return;
                        s = v;
                        let w = {
                            type: "log",
                            payload: g,
                            meta: y
                        };
                        e.debug("Pushing log\n", w), aD(a.getActiveUserAction(), w) || r.execute(w)
                    } catch (t) {
                        e.error("Error pushing log\n", t)
                    }
                }
            }
        }(S)), function({
            internalLogger: e,
            config: t,
            metas: n,
            transports: r,
            tracesApi: i,
            userActionsApi: a
        }) {
            e.debug("Initializing measurements API");
            let o = null;
            return {
                pushMeasurement: (s, {
                    skipDedupe: l,
                    context: u,
                    spanContext: c,
                    timestampOverwriteMs: d
                } = {}) => {
                    try {
                        let f;
                        if (!ry(n).shouldCapture()) return;
                        let p = rG(u),
                            h = r2(r2({}, s), {}, {
                                trace: c ? {
                                    trace_id: c.traceId,
                                    span_id: c.spanId
                                } : i.getTraceContext(),
                                timestamp: d ? rU(d) : rz(),
                                context: rv(p) ? void 0 : p
                            }),
                            m = {
                                type: h.type,
                                values: h.values,
                                context: h.context
                            };
                        if (!l && t.dedupe && (f = o, !ru(f, "null")) && rj(m, o)) return void e.debug("Skipping measurement push because it is the same as the last one\n", h);
                        let g = o,
                            v = om(n);
                        if (o !== g && !l && t.dedupe && rj(m, o)) return;
                        o = m;
                        let b = {
                            type: "measurement",
                            payload: h,
                            meta: v
                        };
                        e.debug("Pushing measurement\n", b), aD(a.getActiveUserAction(), b) || r.execute(b)
                    } catch (t) {
                        e.error("Error pushing measurement\n", t)
                    }
                }
            }
        }(S)), E), y)),
        M = (A.debug("Initializing instrumentations"), k = [], {
            add: (...t) => {
                A.debug("Adding instrumentations"), t.forEach(t => {
                    (A.debug(`Adding "${t.name}" instrumentation`), k.some(e => e.name === t.name)) ? A.warn(`Instrumentation ${t.name} is already added`): (t.unpatchedConsole = N, t.internalLogger = A, t.config = e, t.metas = L, t.transports = R, t.api = I, k.push(t), t.initialize())
                })
            },
            get instrumentations() {
                return [...k]
            },
            remove: (...e) => {
                A.debug("Removing instrumentations"), e.forEach(e => {
                    var t, n;
                    A.debug(`Removing "${e.name}" instrumentation`);
                    let r = k.reduce((t, n, r) => null === t && n.name === e.name ? r : null, null);
                    null === r ? A.warn(`Instrumentation "${e.name}" is not added`) : (null == (t = (n = k[r]).destroy) || t.call(n), k.splice(r, 1))
                })
            }
        }),
        D = (A.debug("Initializing Faro"), (r = ra = {
            api: I,
            config: e,
            instrumentations: M,
            internalLogger: A,
            metas: L,
            pause: R.pause,
            transports: R,
            unpatchedConsole: N,
            unpause: R.unpause
        }).config.isolate ? r.internalLogger.debug("Skipping registering internal Faro instance on global object") : (r.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(rr, ri, {
            configurable: !1,
            enumerable: !1,
            writable: !1,
            value: r
        })), ! function(e) {
            if (e.config.preventGlobalExposure) e.internalLogger.debug("Skipping registering public Faro instance in the global scope");
            else {
                if (e.internalLogger.debug(`Registering public faro reference in the global scope using "${e.config.globalObjectKey}" key`), e.config.globalObjectKey in rr) return e.internalLogger.warn(`Skipping global registration due to key "${e.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
                Object.defineProperty(rr, e.config.globalObjectKey, {
                    configurable: !1,
                    writable: !1,
                    value: e
                })
            }
        }(ra), ra);
    x = (T = D.config.app.name) ? null == rr ? void 0 : rr[`__faroGitHash_${T}`] : void 0, O = {
        sdk: {
            version: r6,
            name: "faro"
        },
        app: r2({
            bundleId: T && function(e) {
                let t = `__faroBundleId_${e}`,
                    n = null == rr ? void 0 : rr[t];
                if ("string" == typeof n && "" !== n) return n;
                let r = "u" > typeof window ? window[t] : void 0;
                if ("string" == typeof r && "" !== r) return r
            }(T)
        }, void 0 !== x ? {
            gitHash: x
        } : {})
    }, (P = null == (i = D.config.sessionTracking) ? void 0 : i.session) && D.api.setSession(P), D.config.app && (O.app = r2(r2({}, D.config.app), O.app)), D.config.user && (O.user = D.config.user), D.config.view && (O.view = D.config.view), D.metas.add(O, ...null != (a = D.config.metas) ? a : []), D.transports.add(...D.config.transports), D.transports.addBeforeSendHooks(D.config.beforeSend), D.instrumentations.add(...D.config.instrumentations)
}(U), uy(), ! function(e) {
    let t, n, r, i, a, o, s;
    re && (0, ec.D)(() => {
        console.warn("[@sentry/nextjs] You are calling `Sentry.init()` more than once on the client. This can happen if you have both a `sentry.client.config.ts` and a `instrumentation-client.ts` file with `Sentry.init()` calls. It is recommended to call `Sentry.init()` once in `instrumentation-client.ts`.")
    }), re = !0, e.debug && (0, ec.D)(() => {
        console.warn("[@sentry/nextjs] You have enabled `debug: true`, but Sentry debug logging was removed from your bundle (likely via `webpack.treeshake.removeDebugLogging: true`). Set that option to `false` to see Sentry debug output.")
    });
    let l = {
        environment: e.environment || eu.default.env.SENTRY_ENVIRONMENT || eu.default.env.NEXT_PUBLIC_VERCEL_TARGET_ENV || eu.default.env.NEXT_PUBLIC_VERCEL_ENV || "production",
        defaultIntegrations: (r = nW(e), i = rt._sentryRewriteFramesAssetPrefixPath || "", a = eu.default.env._sentryAssetPrefix || rt._sentryAssetPrefix, o = eu.default.env._sentryBasePath || rt._sentryBasePath, s = "true" === eu.default.env._experimentalThirdPartyOriginStackFrames || "true" === rt._experimentalThirdPartyOriginStackFrames, r.push((({
            assetPrefix: e,
            basePath: t,
            rewriteFramesAssetPrefixPath: n,
            experimentalThirdPartyOriginStackFrames: r
        }) => ({
            ...((e = {}) => {
                let t = e.root,
                    n = e.prefix || "app:///",
                    r = "window" in ed.f && !!ed.f.window,
                    i = e.iteratee || function({
                        isBrowser: e,
                        root: t,
                        prefix: n
                    }) {
                        return r => {
                            if (!r.filename) return r;
                            let i = /^[a-zA-Z]:\\/.test(r.filename) || r.filename.includes("\\") && !r.filename.includes("/"),
                                a = /^\//.test(r.filename);
                            if (e) {
                                if (t) {
                                    let e = r.filename;
                                    0 === e.indexOf(t) && (r.filename = e.replace(t, n))
                                }
                            } else if (i || a) {
                                let e, a, o = i ? r.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : r.filename,
                                    s = t ? function(e, t) {
                                        e = n6(e).slice(1), t = n6(t).slice(1);
                                        let n = n8(e.split("/")),
                                            r = n8(t.split("/")),
                                            i = Math.min(n.length, r.length),
                                            a = i;
                                        for (let e = 0; e < i; e++)
                                            if (n[e] !== r[e]) {
                                                a = e;
                                                break
                                            } let o = [];
                                        for (let e = a; e < n.length; e++) o.push("..");
                                        return (o = o.concat(r.slice(a))).join("/")
                                    }(t, o) : (e = o.length > 1024 ? `<truncated>${o.slice(-1024)}` : o, (a = n5.exec(e)) ? a.slice(1) : [])[2] || "";
                                r.filename = `${n}${s}`
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
                                                        frames: t?.frames?.map(e => i(e))
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
                iteratee: i => {
                    if (r) {
                        let n = "u" > typeof window && window.location ? window.location.origin : "";
                        if (i.filename?.startsWith(n) && !i.filename.endsWith(".js")) return i;
                        if (e) i.filename?.startsWith(e) && (i.filename = i.filename.replace(e, "app://"));
                        else if (t) try {
                            let {
                                origin: e
                            } = new URL(i.filename);
                            e === n && (i.filename = i.filename?.replace(e, "app://").replace(t, ""))
                        } catch {}
                    } else try {
                        let {
                            origin: e
                        } = new URL(i.filename);
                        i.filename = i.filename?.replace(e, "app://").replace(n, "")
                    } catch {}
                    return r ? i.filename?.includes("/_next") && (i.filename = decodeURI(i.filename)) : i.filename?.startsWith("app:///_next") && (i.filename = decodeURI(i.filename)), i.filename?.match(n9) && (i.in_app = !1), i
                }
            }),
            name: "NextjsClientStackFrameNormalization"
        }))({
            assetPrefix: a,
            basePath: o,
            rewriteFramesAssetPrefixPath: i,
            experimentalThirdPartyOriginStackFrames: s
        })), r),
        release: "cca48e902bf28ee2408d4d3f389ca06818763c50",
        ...e
    };
    ! function(e) {
        let t = eu.default.env._sentryRewritesTunnelPath || n7._sentryRewritesTunnelPath;
        if (t && e.dsn) {
            let n = (0, eQ.o)(e.dsn);
            if (!n) return;
            let r = n.host.match(/^o(\d+)\.ingest(?:\.([a-z]{2}))?\.sentry\.io$/);
            if (r) {
                let i = r[1],
                    a = r[2],
                    o = `${t}?o=${i}&p=${n.projectId}`;
                a && (o += `&r=${a}`), e.tunnel = o
            }
        }
    }(l), ep(l, "nextjs", ["nextjs", "react"]), l.ignoreSpans = [...l.ignoreSpans || [], /^\/404$/], ep(t = {
        ...l
    }, "react"), (0, eh.g)("react", {
        version: nQ.version
    }), n = function(e = {}) {
        var t;
        let n, r = !e.skipBrowserExtensionCheck && !! function() {
                if (void 0 === tW.window || tW.nw) return !1;
                let e = tW.chrome || tW.browser;
                if (!e?.runtime?.id) return !1;
                let t = tV();
                return !(tW === tW.top && /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(t))
            }(),
            i = null == e.defaultIntegrations ? nW() : e.defaultIntegrations,
            a = function(e) {
                let t, n, r = e.defaultIntegrations || [],
                    i = e.integrations;
                if (r.forEach(e => {
                        e.isDefaultInstance = !0
                    }), Array.isArray(i)) t = [...r, ...i];
                else if ("function" == typeof i) {
                    let e = i(r);
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
                defaultIntegrations: i
            }),
            o = {
                ...e,
                enabled: !r && e.enabled,
                stackParser: (0, eR.E)(e.stackParser || nF),
                integrations: a,
                transport: e.transport || nH
            };
        return (0, eW.Q)(nV), !0 === o.debug && (eg.f ? ec.h.enable() : (0, ec.D)(() => {
            console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
        })), (0, em.d)().update(o.initialScope), t = n = new tJ(o), (0, em.d)().setClient(t), n.init(), n
    }(t), (0, eW.Q)(nG);
    let u = (e, t) => (function e(t, n, r = 0) {
        if (!(0, eZ.b)(t)) return !1;
        let i = t.digest;
        return !!("string" == typeof i && n(i)) || r < 5 && "cause" in t && e(t.cause, n, r + 1)
    })(t?.originalException, e => e.startsWith("NEXT_REDIRECT;")) || e.exception?.values?.[0]?.value === "NEXT_REDIRECT" ? null : e;
    u.id = "NextRedirectErrorFilter", (0, eh.A)(u);
    try {
        (0, em.J)().setTag("turbopack", !0)
    } catch {}
}({
    dsn: eu.default.env.SENTRY_DSN || "https://ce7d682306884c779d3c5d683a430b07@o488710.ingest.sentry.io/4503931302641664",
    environment: eu.default.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT || "production",
    integrations: e => [...e.filter(e => "BrowserTracing" !== e.name), ((e = {}) => {
        let t = e.limit ?? 10;
        return {
            name: "ZodErrors",
            processEvent: (n, r) => (function(e, t = !1, n, r) {
                var i;
                if (!n.exception?.values || !r.originalException || (i = r.originalException, !((0, eZ.b)(i) && "ZodError" === i.name && Array.isArray(i.issues))) || 0 === r.originalException.issues.length) return n;
                try {
                    let i = (t ? r.originalException.issues : r.originalException.issues.slice(0, e)).map(rn);
                    return t && (Array.isArray(r.attachments) || (r.attachments = []), r.attachments.push({
                        filename: "zod_issues.json",
                        data: JSON.stringify({
                            issues: i
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
                                    return `Failed to validate keys: ${(0,eS.k)(n.join(", "),100)}`
                                }(r.originalException)
                            }, ...n.exception.values.slice(1)]
                        },
                        extra: {
                            ...n.extra,
                            "zoderror.issues": i.slice(0, e)
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
    denyUrls: [/\/scripttemplates\/otSDKStub\.js/, /\/gtm\.js/],
    ignoreErrors: [/reading 'M_ID'/]
}), e.s(["onRouterTransitionStart", 0, (e, t) => {
    uv(e, t)
}], 427075)
}, 799615, e => {
var t, n, r, i = e.i(926070),
    a = e.i(57271);
let o = (0, a.z)("OpenTelemetry SDK Context Key SUPPRESS_TRACING");

function s(e) {
    return e.setValue(o, !0)
}

function l(e) {
    return !0 === e.getValue(o)
}
var u = e.i(122625);
let c = "baggage";
var d = e.i(681242);

function f(e) {
    let t, n, r;
    if (!e) return;
    let i = e.indexOf(";"),
        a = -1 === i ? e : e.substring(0, i),
        o = a.indexOf("=");
    if (o <= 0) return;
    let s = a.substring(0, o).trim(),
        l = a.substring(o + 1).trim();
    if (s && l) {
        try {
            t = decodeURIComponent(s), n = decodeURIComponent(l)
        } catch {
            return
        }
        if (-1 !== i && i < e.length - 1) {
            let t = e.substring(i + 1);
            r = (0, d.h)(t)
        }
        return {
            key: t,
            value: n,
            metadata: r
        }
    }
}

function p(e, t, n, r) {
    let i = 0;
    for (; i < e.length && n < 180;) {
        let a = e.indexOf(",", i),
            o = -1 === a ? e.length : a,
            s = o - i;
        if (s <= 4096) {
            let a = f(e.substring(i, o));
            if (a) {
                let e = +(0 !== n) + s;
                if (r + e > 8192) break;
                t[a.key] = a.metadata ? {
                    value: a.value,
                    metadata: a.metadata
                } : {
                    value: a.value
                }, n++, r += e
            }
        }
        if (-1 === a) break;
        i = a + 1
    }
    return [n, r]
}
var h = e.i(280041);

function m(e) {
    return null == e || (Array.isArray(e) ? function(e) {
        let t;
        for (let n of e) {
            if (null == n) continue;
            let e = typeof n;
            if (e !== t) {
                if (!t && g(e)) {
                    t = e;
                    continue
                }
                return !1
            }
        }
        return !0
    }(e) : g(typeof e))
}

function g(e) {
    switch (e) {
        case "number":
        case "boolean":
        case "string":
            return !0
    }
    return !1
}

function v() {
    return e => {
        var t;
        h.f.error("string" == typeof(t = e) ? t : JSON.stringify(function(e) {
            let t = {},
                n = e;
            for (; null !== n;) Object.getOwnPropertyNames(n).forEach(e => {
                if (t[e]) return;
                let r = n[e];
                r && (t[e] = String(r))
            }), n = Object.getPrototypeOf(n);
            return t
        }(t)))
    }
}
let b = v();
var y = e.i(178452);
(t = n || (n = {}))[t.SUCCESS = 0] = "SUCCESS", t[t.FAILED = 1] = "FAILED";
var w = e.i(798902);
let _ = {
        [w.u]: "opentelemetry",
        "process.runtime.name": "browser",
        [w.a]: w.Z,
        [w.I]: "2.11.0"
    },
    S = globalThis;
var E = e.i(636600),
    k = e.i(581638),
    T = e.i(708331),
    x = e.i(399086),
    C = e.i(131007);
let O = "[_0-9a-z-*/]",
    P = `[a-z]${O}{0,255}`,
    N = `[a-z0-9]${O}{0,240}@[a-z]${O}{0,13}`,
    A = RegExp(`^(?:${P}|${N})$`),
    L = /^[ -~]{0,255}[!-~]$/,
    R = /,|=/;

function I(e) {
    return L.test(e) && !R.test(e)
}
class M {
    _length;
    _rawTraceState;
    _internalState;
    constructor(e) {
        this._rawTraceState = "string" == typeof e ? e : "", this._length = this._rawTraceState.length
    }
    set(e, t) {
        if (!A.test(e) || !I(t)) return this;
        let n = this._getState(),
            r = n.get(e),
            i = this._length;
        if ("string" == typeof r ? i += t.length - r.length : i += e.length + t.length + (n.size > 0 ? 2 : 1), i > 512) return this;
        let a = new Map(n);
        return a.delete(e), a.set(e, t), this._fromState(a, i)
    }
    unset(e) {
        let t = this._getState(),
            n = t.get(e);
        if ("string" != typeof n) return this;
        let r = this._length - (e.length + n.length + 1);
        t.size > 1 && (r -= 1);
        let i = new Map(t);
        return i.delete(e), this._fromState(i, r)
    }
    get(e) {
        return this._getState().get(e)
    }
    serialize() {
        let e = "",
            t = 0;
        for (let n of this._getState()) t > 0 && (e = "," + e), e = `${n[0]}=${n[1]}` + e, t++;
        return e
    }
    _getState() {
        if (this._internalState) return this._internalState;
        let e = this._rawTraceState.split(","),
            t = new Map,
            n = 0;
        for (let r of e) {
            let e = r.trim(),
                i = e.indexOf("=");
            if (-1 === i) continue;
            let a = e.slice(0, i),
                o = e.slice(i + 1);
            if (!A.test(a) || !I(o)) continue;
            let s = n + e.length + +(t.size > 0);
            if (!(s > 512) && (t.set(a, o), n = s, t.size >= 32)) break
        }
        return this._length = n, this._internalState = new Map(Array.from(t.entries()).reverse()), this._internalState
    }
    _fromState(e, t) {
        let n = Object.create(M.prototype);
        return n._internalState = e, n._length = t, n
    }
}
let D = "traceparent",
    z = "tracestate",
    U = RegExp("^\\s?((?!ff)[\\da-f]{2})-((?![0]{32})[\\da-f]{32})-((?![0]{16})[\\da-f]{16})-([\\da-f]{2})(-.*)?\\s?$");

function j(e) {
    let t = U.exec(e);
    return !t || "00" === t[1] && t[5] ? null : {
        traceId: t[2],
        spanId: t[3],
        traceFlags: parseInt(t[4], 16)
    }
}
let F = (0, a.z)("OpenTelemetry SDK Context Key RPC_METADATA");
(r || (r = {})).HTTP = "http";
let $ = Function.prototype.toString,
    B = $.call(Object),
    H = Object.getPrototypeOf,
    q = Object.prototype,
    V = q.hasOwnProperty,
    W = Symbol ? Symbol.toStringTag : void 0,
    Q = q.toString;

function G(e) {
    var t, n, r;
    if (null == (t = e) || "object" != typeof t || "[object Object]" !== (null == (n = e) ? void 0 === n ? "[object Undefined]" : "[object Null]" : W && W in Object(n) ? function(e) {
            let t = V.call(e, W),
                n = e[W],
                r = !1;
            try {
                e[W] = void 0, r = !0
            } catch {}
            let i = Q.call(e);
            return r && (t ? e[W] = n : delete e[W]), i
        }(n) : (r = n, Q.call(r)))) return !1;
    let i = H(e);
    if (null === i) return !0;
    let a = V.call(i, "constructor") && i.constructor;
    return "function" == typeof a && a instanceof a && $.call(a) === B
}

function K(e) {
    return Y(e) ? e.slice() : e
}

function X(e, t, n) {
    let r = n.get(e[t]) || [];
    for (let n = 0, i = r.length; n < i; n++) {
        let i = r[n];
        if (i.key === t && i.obj === e) return !0
    }
    return !1
}

function Y(e) {
    return Array.isArray(e)
}

function J(e) {
    return "function" == typeof e
}

function Z(e) {
    return !ee(e) && !Y(e) && !J(e) && "object" == typeof e
}

function ee(e) {
    return "string" == typeof e || "number" == typeof e || "boolean" == typeof e || void 0 === e || e instanceof Date || e instanceof RegExp || null === e
}
class et extends Error {
    constructor(e) {
        super(e), Object.setPrototypeOf(this, et.prototype)
    }
}
var en = e.i(329390);
class er {
    _promise;
    _resolve;
    _reject;
    constructor() {
        this._promise = new Promise((e, t) => {
            this._resolve = e, this._reject = t
        })
    }
    get promise() {
        return this._promise
    }
    resolve(e) {
        this._resolve(e)
    }
    reject(e) {
        this._reject(e)
    }
}
var ei = e.i(321611);
let ea = {
    ALL: ei.f.ALL,
    VERBOSE: ei.f.VERBOSE,
    DEBUG: ei.f.DEBUG,
    INFO: ei.f.INFO,
    WARN: ei.f.WARN,
    ERROR: ei.f.ERROR,
    NONE: ei.f.NONE
};
e.s(["AnchoredClock", 0, class {
    _monotonicClock;
    _epochMillis;
    _performanceMillis;
    constructor(e, t) {
        this._monotonicClock = t, this._epochMillis = e.now(), this._performanceMillis = t.now()
    }
    now() {
        let e = this._monotonicClock.now() - this._performanceMillis;
        return this._epochMillis + e
    }
}, "BindOnceFuture", 0, class {
    _isCalled = !1;
    _deferred = new er;
    _callback;
    _that;
    constructor(e, t) {
        this._callback = e, this._that = t
    }
    get isCalled() {
        return this._isCalled
    }
    get promise() {
        return this._deferred.promise
    }
    call(...e) {
        if (!this._isCalled) {
            this._isCalled = !0;
            try {
                Promise.resolve(this._callback.call(this._that, ...e)).then(e => this._deferred.resolve(e), e => this._deferred.reject(e))
            } catch (e) {
                this._deferred.reject(e)
            }
        }
        return this._deferred.promise
    }
}, "CompositePropagator", 0, class {
    _propagators;
    _fields;
    constructor(e = {}) {
        this._propagators = e.propagators ?? [];
        let t = new Set;
        for (let e of this._propagators)
            for (let n of "function" == typeof e.fields ? e.fields() : []) t.add(n);
        this._fields = Array.from(t)
    }
    inject(e, t, n) {
        for (let r of this._propagators) try {
            r.inject(e, t, n)
        } catch (e) {
            h.f.warn(`Failed to inject with ${r.constructor.name}. Err: ${e.message}`)
        }
    }
    extract(e, t, n) {
        return this._propagators.reduce((e, r) => {
            try {
                return r.extract(e, t, n)
            } catch (e) {
                h.f.warn(`Failed to extract with ${r.constructor.name}. Err: ${e.message}`)
            }
            return e
        }, e)
    }
    fields() {
        return this._fields.slice()
    }
}, "ExportResultCode", 0, n, "RPCType", 0, r, "SDK_INFO", 0, _, "TRACE_PARENT_HEADER", 0, D, "TRACE_STATE_HEADER", 0, z, "TimeoutError", 0, et, "TraceState", 0, M, "W3CBaggagePropagator", 0, class {
    inject(e, t, n) {
        let r = u.f.getBaggage(e);
        if (!r || l(e)) return;
        let i = r.getAllEntries().map(([e, t]) => {
            let n = `${encodeURIComponent(e)}=${encodeURIComponent(t.value)}`;
            return void 0 !== t.metadata && (n += ";" + t.metadata.toString()), n
        }).filter(e => e.length <= 4096).slice(0, 180).reduce((e, t) => {
            let n = `${e}${""!==e?",":""}${t}`;
            return n.length > 8192 ? e : n
        }, "");
        i.length > 0 && n.set(t, c, i)
    }
    extract(e, t, n) {
        let r = n.get(t, c);
        if (!r) return e;
        let i = {},
            a = 0,
            o = 0;
        if (Array.isArray(r))
            for (let e = 0; e < r.length; e++)[a, o] = p(r[e], i, a, o);
        else [a] = p(r, i, a, o);
        return 0 === a ? e : u.f.setBaggage(e, u.f.createBaggage(i))
    }
    fields() {
        return [c]
    }
}, "W3CTraceContextPropagator", 0, class {
    inject(e, t, n) {
        let r = x.f.getSpanContext(e);
        if (!r || l(e) || !(0, T.e)(r)) return;
        let i = `00-${r.traceId}-${r.spanId}-0${Number(r.traceFlags||C.f.NONE).toString(16)}`;
        n.set(t, D, i), r.traceState && n.set(t, z, r.traceState.serialize())
    }
    extract(e, t, n) {
        let r = n.get(t, D);
        if (!r) return e;
        let i = Array.isArray(r) ? r[0] : r;
        if ("string" != typeof i) return e;
        let a = j(i);
        if (!a) return e;
        a.isRemote = !0;
        let o = n.get(t, z);
        if (o) {
            let e = Array.isArray(o) ? o.join(",") : o;
            a.traceState = new M("string" == typeof e ? e : void 0)
        }
        return x.f.setSpanContext(e, a)
    }
    fields() {
        return [D, z]
    }
}, "_globalThis", 0, S, "addHrTimes", () => y.r, "callWithTimeout", 0, function(e, t) {
    let n;
    return Promise.race([e, new Promise(function(e, r) {
        n = setTimeout(function() {
            r(new et("Operation timed out."))
        }, t)
    })]).then(e => (clearTimeout(n), e), e => {
        throw clearTimeout(n), e
    })
}, "deleteRPCMetadata", 0, function(e) {
    return e.deleteValue(F)
}, "diagLogLevelFromString", 0, function(e) {
    if (null == e) return;
    let t = ea[e.toUpperCase()];
    return null == t ? (h.f.warn(`Unknown log level "${e}", expected one of ${Object.keys(ea)}, using default`), ei.f.INFO) : t
}, "getBooleanFromEnv", () => E.r, "getNumberFromEnv", () => E.A, "getRPCMetadata", 0, function(e) {
    return e.getValue(F)
}, "getStringFromEnv", () => E.O, "getStringListFromEnv", () => E.d, "getTimeOrigin", () => y.i, "globalErrorHandler", 0, function(e) {
    try {
        b(e)
    } catch {}
}, "hrTime", () => y.G, "hrTimeDuration", () => y.A, "hrTimeToMicroseconds", () => y.u, "hrTimeToMilliseconds", () => y.H, "hrTimeToNanoseconds", () => y.O, "hrTimeToSeconds", () => y.t, "hrTimeToTimeStamp", () => y.c, "internal", 0, {
    _export: function(e, t) {
        return new Promise(n => {
            i.f.with(s(i.f.active()), () => {
                e.export(t, n)
            })
        })
    }
}, "isAttributeValue", 0, m, "isTimeInput", () => y.B, "isTimeInputHrTime", () => y.k, "isTracingSuppressed", 0, l, "isUrlIgnored", () => en.Q, "loggingErrorHandler", 0, v, "merge", 0, function(...e) {
    let t = e.shift(),
        n = new WeakMap;
    for (; e.length > 0;) t = function e(t, n, r = 0, i) {
        let a;
        if (!(r > 20)) {
            if (r++, ee(t) || ee(n) || J(n)) a = K(n);
            else if (Y(t)) {
                if (a = t.slice(), Y(n))
                    for (let e = 0, t = n.length; e < t; e++) a.push(K(n[e]));
                else if (Z(n)) {
                    let e = Object.keys(n);
                    for (let t = 0, r = e.length; t < r; t++) {
                        let r = e[t];
                        "__proto__" !== r && "constructor" !== r && "prototype" !== r && (a[r] = K(n[r]))
                    }
                }
            } else if (Z(t))
                if (Z(n)) {
                    var o, s;
                    if (o = t, s = n, !(G(o) && G(s))) return n;
                    a = Object.assign({}, t);
                    let l = Object.keys(n);
                    for (let o = 0, s = l.length; o < s; o++) {
                        let s = l[o];
                        if ("__proto__" === s || "constructor" === s || "prototype" === s) continue;
                        let u = n[s];
                        if (ee(u)) void 0 === u ? delete a[s] : a[s] = u;
                        else {
                            let o = a[s];
                            if (X(t, s, i) || X(n, s, i)) delete a[s];
                            else {
                                if (Z(o) && Z(u)) {
                                    let e = i.get(o) || [],
                                        r = i.get(u) || [];
                                    e.push({
                                        obj: t,
                                        key: s
                                    }), r.push({
                                        obj: n,
                                        key: s
                                    }), i.set(o, e), i.set(u, r)
                                }
                                a[s] = e(a[s], u, r, i)
                            }
                        }
                    }
                } else a = n;
            return a
        }
    }(t, e.shift(), 0, n);
    return t
}, "millisToHrTime", () => y.R, "otperformance", () => k.f, "parseKeyPairsIntoRecord", 0, function(e) {
    let t = {};
    return "string" == typeof e && e.length > 0 && e.split(",").forEach(e => {
        let n = f(e);
        void 0 !== n && n.value.length > 0 && (t[n.key] = n.value)
    }), t
}, "parseTraceParent", 0, j, "sanitizeAttributes", 0, function(e) {
    let t = {};
    if ("object" != typeof e || null == e) return t;
    for (let r in e) {
        var n;
        if (!Object.prototype.hasOwnProperty.call(e, r)) continue;
        if ("string" != typeof(n = r) || "" === n) {
            h.f.warn(`Invalid attribute key: ${r}`);
            continue
        }
        let i = e[r];
        if (!m(i)) {
            h.f.warn(`Invalid attribute value set for key: ${r}`);
            continue
        }
        Array.isArray(i) ? t[r] = i.slice() : t[r] = i
    }
    return t
}, "setGlobalErrorHandler", 0, function(e) {
    b = e
}, "setRPCMetadata", 0, function(e, t) {
    return e.setValue(F, t)
}, "suppressTracing", 0, s, "timeInputToHrTime", () => y.N, "unrefTimer", 0, function(e) {
    "number" != typeof e && e.unref()
}, "unsuppressTracing", 0, function(e) {
    return e.deleteValue(o)
}, "urlMatches", () => en.c], 799615)
}, 364520, (e, t, n) => {
function r(e) {
    return e >= 48 && e <= 57 ? e - 48 : e >= 97 && e <= 102 ? e - 87 : e - 55
}
Object.defineProperty(n, "__esModule", {
    value: !0
}), n.hexToBinary = void 0, n.hexToBinary = function(e) {
    let t = new Uint8Array(e.length / 2),
        n = 0;
    for (let i = 0; i < e.length; i += 2) {
        let a = r(e.charCodeAt(i)),
            o = r(e.charCodeAt(i + 1));
        t[n++] = a << 4 | o
    }
    return t
}
}, 191779, (e, t, n) => {
function r(e, t) {
    return Object.keys(e).map(n => i(n, e[n], t))
}

function i(e, t, n) {
    return {
        key: e,
        value: a(t, n)
    }
}

function a(e, t) {
    let n = typeof e;
    if ("string" === n) return {
        stringValue: e
    };
    if ("number" === n) return Number.isInteger(e) ? {
        intValue: e
    } : {
        doubleValue: e
    };
    if ("boolean" === n) return {
        boolValue: e
    };
    if (e instanceof Uint8Array) return {
        bytesValue: t.encodeUint8Array(e)
    };
    if (Array.isArray(e)) {
        let n = Array(e.length);
        for (let r = 0; r < e.length; r++) n[r] = a(e[r], t);
        return {
            arrayValue: {
                values: n
            }
        }
    }
    if ("object" === n && null != e) {
        let n = Object.keys(e),
            r = Array(n.length);
        for (let i = 0; i < n.length; i++) r[i] = {
            key: n[i],
            value: a(e[n[i]], t)
        };
        return {
            kvlistValue: {
                values: r
            }
        }
    }
    return {}
}
Object.defineProperty(n, "__esModule", {
    value: !0
}), n.toAnyValue = n.toKeyValue = n.toAttributes = n.createInstrumentationScope = n.createResource = void 0, n.createResource = function(e, t) {
    let n = {
            attributes: r(e.attributes, t),
            droppedAttributesCount: 0
        },
        i = e.schemaUrl;
    return i && "" !== i && (n.schemaUrl = i), n
}, n.createInstrumentationScope = function(e, t) {
    let n = {
        name: e.name,
        version: e.version
    };
    return e.attributes && Object.keys(e.attributes).length > 0 && (n.attributes = r(e.attributes, t), n.droppedAttributesCount = e.droppedAttributesCount ?? 0), n
}, n.toAttributes = r, n.toKeyValue = i, n.toAnyValue = a
}, 466986, (e, t, n) => {
var r = e.i(798619);
Object.defineProperty(n, "__esModule", {
    value: !0
}), n.JSON_ENCODER = n.PROTOBUF_ENCODER = n.encodeAsString = n.encodeAsLongBits = n.toLongBits = n.hrTimeToNanos = void 0;
let i = e.r(799615),
    a = e.r(364520);

function o(e) {
    let t = BigInt(1e9);
    return BigInt(Math.trunc(e[0])) * t + BigInt(Math.trunc(e[1]))
}

function s(e) {
    return {
        low: Number(BigInt.asUintN(32, e)),
        high: Number(BigInt.asUintN(32, e >> BigInt(32)))
    }
}

function l(e) {
    return s(o(e))
}

function u(e) {
    return o(e).toString()
}
n.hrTimeToNanos = o, n.toLongBits = s, n.encodeAsLongBits = l, n.encodeAsString = u;
let c = "u" > typeof BigInt ? u : i.hrTimeToNanoseconds;

function d(e) {
    return e
}
n.PROTOBUF_ENCODER = {
    encodeHrTime: l,
    encodeSpanContext: a.hexToBinary,
    encodeOptionalSpanContext: function(e) {
        if (void 0 !== e) return (0, a.hexToBinary)(e)
    },
    encodeUint8Array: d
}, n.JSON_ENCODER = {
    encodeHrTime: c,
    encodeSpanContext: d,
    encodeOptionalSpanContext: d,
    encodeUint8Array: e => {
        if (void 0 !== r.Buffer) return r.Buffer.from(e).toString("base64");
        let t = Array(e.length);
        for (let n = 0; n < e.length; n++) t[n] = String.fromCharCode(e[n]);
        return btoa(t.join(""))
    }
}
}, 400533, (e, t, n) => {
var r, i, a, o;
Object.defineProperty(n, "__esModule", {
    value: !0
}), n.EStatusCode = n.ESpanKind = void 0, (a = r || (n.ESpanKind = r = {}))[a.SPAN_KIND_UNSPECIFIED = 0] = "SPAN_KIND_UNSPECIFIED", a[a.SPAN_KIND_INTERNAL = 1] = "SPAN_KIND_INTERNAL", a[a.SPAN_KIND_SERVER = 2] = "SPAN_KIND_SERVER", a[a.SPAN_KIND_CLIENT = 3] = "SPAN_KIND_CLIENT", a[a.SPAN_KIND_PRODUCER = 4] = "SPAN_KIND_PRODUCER", a[a.SPAN_KIND_CONSUMER = 5] = "SPAN_KIND_CONSUMER", (o = i || (n.EStatusCode = i = {}))[o.STATUS_CODE_UNSET = 0] = "STATUS_CODE_UNSET", o[o.STATUS_CODE_OK = 1] = "STATUS_CODE_OK", o[o.STATUS_CODE_ERROR = 2] = "STATUS_CODE_ERROR"
}, 426393, (e, t, n) => {
Object.defineProperty(n, "__esModule", {
    value: !0
}), n.createExportTraceServiceRequest = n.toOtlpSpanEvent = n.toOtlpLink = n.sdkSpanToOtlpSpan = void 0;
let r = e.r(191779);

function i(e, t) {
    let n = 255 & e | 256;
    return t && (n |= 512), n
}

function a(e, t) {
    let n = e.spanContext(),
        a = e.status,
        l = e.parentSpanContext?.spanId ? t.encodeSpanContext(e.parentSpanContext?.spanId) : void 0;
    return {
        traceId: t.encodeSpanContext(n.traceId),
        spanId: t.encodeSpanContext(n.spanId),
        parentSpanId: l,
        traceState: n.traceState?.serialize(),
        name: e.name,
        kind: null == e.kind ? 0 : e.kind + 1,
        startTimeUnixNano: t.encodeHrTime(e.startTime),
        endTimeUnixNano: t.encodeHrTime(e.endTime),
        attributes: (0, r.toAttributes)(e.attributes, t),
        droppedAttributesCount: e.droppedAttributesCount,
        events: e.events.map(e => s(e, t)),
        droppedEventsCount: e.droppedEventsCount,
        status: {
            code: a.code,
            message: a.message
        },
        links: e.links.map(e => o(e, t)),
        droppedLinksCount: e.droppedLinksCount,
        flags: i(n.traceFlags, e.parentSpanContext?.isRemote)
    }
}

function o(e, t) {
    return {
        attributes: e.attributes ? (0, r.toAttributes)(e.attributes, t) : [],
        spanId: t.encodeSpanContext(e.context.spanId),
        traceId: t.encodeSpanContext(e.context.traceId),
        traceState: e.context.traceState?.serialize(),
        droppedAttributesCount: e.droppedAttributesCount || 0,
        flags: i(e.context.traceFlags, e.context.isRemote)
    }
}

function s(e, t) {
    return {
        attributes: e.attributes ? (0, r.toAttributes)(e.attributes, t) : [],
        name: e.name,
        timeUnixNano: t.encodeHrTime(e.time),
        droppedAttributesCount: e.droppedAttributesCount || 0
    }
}
n.sdkSpanToOtlpSpan = a, n.toOtlpLink = o, n.toOtlpSpanEvent = s, n.createExportTraceServiceRequest = function(e, t) {
    return {
        resourceSpans: function(e, t) {
            let n = function(e) {
                    let t = new Map;
                    for (let n of e) {
                        let e = t.get(n.resource);
                        e || (e = new Map, t.set(n.resource, e));
                        let r = `${n.instrumentationScope.name}@${n.instrumentationScope.version||""}:${n.instrumentationScope.schemaUrl||""}`,
                            i = e.get(r);
                        i || (i = [], e.set(r, i)), i.push(n)
                    }
                    return t
                }(e),
                i = [],
                o = n.entries(),
                s = o.next();
            for (; !s.done;) {
                let [e, n] = s.value, l = [], u = n.values(), c = u.next();
                for (; !c.done;) {
                    let e = c.value;
                    if (e.length > 0) {
                        let n = e.map(e => a(e, t));
                        l.push({
                            scope: (0, r.createInstrumentationScope)(e[0].instrumentationScope, t),
                            spans: n,
                            schemaUrl: e[0].instrumentationScope.schemaUrl
                        })
                    }
                    c = u.next()
                }
                let d = (0, r.createResource)(e, t),
                    f = {
                        resource: d,
                        scopeSpans: l,
                        schemaUrl: d.schemaUrl
                    };
                i.push(f), s = o.next()
            }
            return i
        }(e, t)
    }
}
}, 798902, 926070, 681242, 122625, 280041, 581638, 178452, 636600, 329390, e => {
e.s(["Q", 0, "error.type", "h", 0, "exception.message", "y", 0, "exception.stacktrace", "M", 0, "exception.type", "U", 0, "http.request.method", "O", 0, "http.request.method_original", "i", 0, "http.response.status_code", "$", 0, "server.address", "w", 0, "server.port", "x", 0, "service.name", "r", 0, "service.version", "a", 0, "telemetry.sdk.language", "u", 0, "telemetry.sdk.name", "I", 0, "telemetry.sdk.version", "v", 0, "url.full", "q", 0, "user_agent.original", "Z", 0, "webjs"], 798902);
var t = e.i(843152);
let n = t.f.getInstance();
e.s(["f", 0, n], 926070);
var r = e.i(336092);
let i = {
        get(e, t) {
            if (null != e) return e[t]
        },
        keys: e => null == e ? [] : Object.keys(e)
    },
    a = {
        set(e, t, n) {
            null != e && (e[t] = n)
        }
    },
    o = (0, e.i(57271).z)("OpenTelemetry Baggage Key");

function s(e) {
    return e.getValue(o) || void 0
}

function l() {
    return s(t.f.getInstance().active())
}

function u(e, t) {
    return e.setValue(o, t)
}

function c(e) {
    return e.deleteValue(o)
}
var d = e.i(130252);
class f {
    constructor(e) {
        this._entries = e ? new Map(e) : new Map
    }
    getEntry(e) {
        let t = this._entries.get(e);
        if (t) return Object.assign({}, t)
    }
    getAllEntries() {
        return Array.from(this._entries.entries())
    }
    setEntry(e, t) {
        let n = new f(this._entries);
        return n._entries.set(e, t), n
    }
    removeEntry(e) {
        let t = new f(this._entries);
        return t._entries.delete(e), t
    }
    removeEntries(...e) {
        let t = new f(this._entries);
        for (let n of e) t._entries.delete(n);
        return t
    }
    clear() {
        return new f
    }
}
let p = Symbol("BaggageEntryMetadata"),
    h = d.f.instance();

function m(e = {}) {
    return new f(new Map(Object.entries(e)))
}
e.s(["h", 0, function(e) {
    return "string" != typeof e && (h.error(`Cannot create baggage metadata from unknown type: ${typeof e}`), e = ""), {
        __TYPE__: p,
        toString: () => e
    }
}, "a", 0, m], 681242);
let g = "propagation",
    v = new class {
        inject(e, t) {}
        extract(e, t) {
            return e
        }
        fields() {
            return []
        }
    },
    b = (class e {
        constructor() {
            this.createBaggage = m, this.getBaggage = s, this.getActiveBaggage = l, this.setBaggage = u, this.deleteBaggage = c
        }
        static getInstance() {
            return this._instance || (this._instance = new e), this._instance
        }
        setGlobalPropagator(e) {
            return (0, r.P)(g, e, d.f.instance())
        }
        inject(e, t, n = a) {
            return this._getGlobalPropagator().inject(e, t, n)
        }
        extract(e, t, n = i) {
            return this._getGlobalPropagator().extract(e, t, n)
        }
        fields() {
            return this._getGlobalPropagator().fields()
        }
        disable() {
            (0, r.Y)(g, d.f.instance())
        }
        _getGlobalPropagator() {
            return (0, r.S)(g) || v
        }
    }).getInstance();
e.s(["f", 0, b], 122625);
let y = d.f.instance();
e.s(["f", 0, y], 280041);
let w = performance;

function _(e) {
    return [Math.trunc(e / 1e3), Math.round(e % 1e3 * 1e6)]
}

function S(e) {
    return k(_(w.timeOrigin), _("number" == typeof e ? e : w.now()))
}

function E(e) {
    return Array.isArray(e) && 2 === e.length && "number" == typeof e[0] && "number" == typeof e[1]
}

function k(e, t) {
    let n = [e[0] + t[0], e[1] + t[1]];
    return n[1] >= 1e9 && (n[1] -= 1e9, n[0] += 1), n
}

function T(e, t) {
    return "string" == typeof t ? e === t : !!e.match(t)
}
e.s(["f", 0, w], 581638), e.s(["r", 0, k, "i", 0, function() {
    return w.timeOrigin
}, "G", 0, S, "A", 0, function(e, t) {
    let n = t[0] - e[0],
        r = t[1] - e[1];
    return r < 0 && (n -= 1, r += 1e9), [n, r]
}, "u", 0, function(e) {
    return 1e6 * e[0] + e[1] / 1e3
}, "H", 0, function(e) {
    return 1e3 * e[0] + e[1] / 1e6
}, "O", 0, function(e) {
    return 1e9 * e[0] + e[1]
}, "t", 0, function(e) {
    return e[0] + e[1] / 1e9
}, "c", 0, function(e) {
    let t = `${"0".repeat(9)}${e[1]}Z`,
        n = t.substring(t.length - 9 - 1);
    return new Date(1e3 * e[0]).toISOString().replace("000Z", n)
}, "B", 0, function(e) {
    return E(e) || "number" == typeof e || e instanceof Date
}, "k", 0, E, "R", 0, _, "N", 0, function(e) {
    if (E(e)) return e;
    if ("number" == typeof e)
        if (e < w.timeOrigin / 2) return S(e);
        else return _(e);
    if (e instanceof Date) return _(e.getTime());
    throw TypeError("Invalid input type")
}], 178452), e.s(["r", 0, function(e) {}, "A", 0, function(e) {}, "O", 0, function(e) {}, "d", 0, function(e) {}], 636600), e.s(["Q", 0, function(e, t) {
    if (!t) return !1;
    for (let n of t)
        if (T(e, n)) return !0;
    return !1
}, "c", 0, T], 329390)
}, 535422, (e, t, n) => {
Object.defineProperty(n, "__esModule", {
    value: !0
}), Object.defineProperty(n, "appBootstrap", {
    enumerable: !0,
    get: function() {
        return a
    }
});
let r = e.r(528068),
    i = e.r(532518);

function a(e) {
    var t, n;
    let a = (0, r.getAssetPrefix)();
    t = self.__next_s, n = () => {
        e(a)
    }, t && t.length ? t.reduce((e, [t, n]) => e.then(() => new Promise((e, r) => {
        let a = document.createElement("script");
        n && (0, i.setAttributesFromProps)(a, n), t ? (a.src = t, a.onload = () => e(), a.onerror = r) : n && (a.innerHTML = n.children, setTimeout(e)), document.head.appendChild(a)
    })), Promise.resolve()).catch(e => {
        console.error(e)
    }).then(() => {
        n()
    }) : n()
}
window.next = {
    version: "16.4.2",
    appDir: !0
}, ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
}), Object.assign(n.default, n), t.exports = n.default)
}, 232854, (e, t, n) => {
Object.defineProperty(n, "__esModule", {
    value: !0
}), e.r(587696), ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
}), Object.assign(n.default, n), t.exports = n.default)
}, 322253, (e, t, n) => {
let r, i, a, o;
Object.defineProperty(n, "__esModule", {
    value: !0
}), Object.defineProperty(n, "hydrate", {
    enumerable: !0,
    get: function() {
        return F
    }
});
let s = e.r(836437),
    l = e.r(230452);
e.r(232854);
let u = s._(e.r(351069)),
    c = s._(e.r(516830)),
    d = e.r(65843),
    f = e.r(159881),
    p = e.r(211414),
    h = e.r(565166),
    m = e.r(735115),
    g = e.r(439102),
    v = e.r(940895),
    b = s._(e.r(685620)),
    y = e.r(853835);
e.r(608205);
let w = e.r(837269),
    _ = e.r(232401),
    S = e.r(726587),
    E = e.r(739044),
    k = d.createFromReadableStream,
    T = d.createFromFetch,
    x = document,
    C = self.__next_instant_test ? self.__next_instant_test : void 0,
    O = new TextEncoder,
    P = !1,
    N = !1,
    A = null;

function L(e) {
    if (0 === e[0]) a = [];
    else if (1 === e[0]) {
        if (!a) throw Error("Unexpected server data: missing bootstrap script.");
        o ? o.enqueue(O.encode(e[1])) : a.push(e[1])
    } else if (2 === e[0]) A = e[1];
    else if (3 === e[0]) {
        if (!a) throw Error("Unexpected server data: missing bootstrap script.");
        let n = atob(e[1]),
            r = new Uint8Array(n.length);
        for (var t = 0; t < n.length; t++) r[t] = n.charCodeAt(t);
        o ? o.enqueue(r) : a.push(r)
    }
}
let R = function() {
    o && !N && (o.close(), N = !0, a = void 0), P = !0
};
"loading" === document.readyState ? document.addEventListener("DOMContentLoaded", R, !1) : setTimeout(R);
let I = self.__next_f = self.__next_f || [];
I.forEach(L), I.length = 0, I.push = L;
let M = new ReadableStream({
    start(e) {
        a && (a.forEach(t => {
            e.enqueue("string" == typeof t ? O.encode(t) : t)
        }), P && !N) && (null === e.desiredSize || e.desiredSize < 0 ? C || e.error(Error("The connection to the page was unexpectedly closed, possibly due to the stop button being clicked, loss of Wi-Fi, or an unstable internet connection.")) : e.close(), N = !0, a = void 0), o = e
    }
});
if (C) i = Promise.resolve(T(C, {
    callServer: m.callServer,
    findSourceMapURL: g.findSourceMapURL,
    debugChannel: r,
    unstable_allowPartialStream: !0
})).then(async e => (0, w.createInitialRSCPayloadFromFallbackPrerender)(await C, e));
else if (window.__NEXT_CLIENT_RESUME) {
    let e = window.__NEXT_CLIENT_RESUME;
    i = Promise.resolve(T(e, {
        callServer: m.callServer,
        findSourceMapURL: g.findSourceMapURL,
        debugChannel: r
    })).then(async t => (0, w.createInitialRSCPayloadFromFallbackPrerender)(await e, t))
} else i = k(M, {
    callServer: m.callServer,
    findSourceMapURL: g.findSourceMapURL,
    debugChannel: r,
    startTime: 0
});

function D({
    initialRSCPayload: e,
    actionQueue: t,
    webSocket: n,
    staticIndicatorState: r
}) {
    return (0, l.jsx)(b.default, {
        actionQueue: t,
        globalErrorState: e.G,
        webSocket: n,
        staticIndicatorState: r
    })
}
let z = c.default.Fragment;

function U({
    children: e
}) {
    return e
}
let j = {
    onDefaultTransitionIndicator: function() {
        return () => {}
    },
    onRecoverableError: p.onRecoverableError,
    onCaughtError: h.onCaughtError,
    onUncaughtError: h.onUncaughtError
};
async function F(e, t) {
    let n, r, a = await i;
    a.b ? (0, S.setNavigationBuildId)(a.b) : (0, S.setNavigationBuildId)((0, _.getDeploymentId)()), (0, E.initializeRouterTransitionModules)(e);
    let o = Date.now(),
        s = (0, v.createMutableActionQueue)((0, y.createInitialRouterState)({
            navigatedAt: o,
            initialRSCPayload: a,
            initialFlightStreamForCache: null,
            location: window.location
        })),
        d = (0, l.jsx)(z, {
            children: (0, l.jsx)(f.HeadManagerContext.Provider, {
                value: {
                    appDir: !0
                },
                children: (0, l.jsx)(U, {
                    children: (0, l.jsx)(D, {
                        initialRSCPayload: a,
                        actionQueue: s,
                        webSocket: r,
                        staticIndicatorState: n
                    })
                })
            })
        });
    "__next_error__" === document.documentElement.id ? u.default.createRoot(x, j).render(d) : c.default.startTransition(() => {
        u.default.hydrateRoot(x, d, {
            ...j,
            formState: A
        })
    })
}("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
}), Object.assign(n.default, n), t.exports = n.default)
}, 384515, (e, t, n) => {
Object.defineProperty(n, "__esModule", {
    value: !0
}), e.r(691717);
let r = e.r(535422);
e.r(211414), window.next.turbopack = !0, self.__webpack_hash__ = "";
let i = e.r(397876);
(0, r.appBootstrap)(t => {
    let {
        hydrate: n
    } = e.r(322253);
    n(i, t)
}), ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
}), Object.assign(n.default, n), t.exports = n.default)
}, 528068, (e, t, n) => {
Object.defineProperty(n, "__esModule", {
    value: !0
}), Object.defineProperty(n, "getAssetPrefix", {
    enumerable: !0,
    get: function() {
        return i
    }
});
let r = e.r(869551);

function i() {
    let e = document.currentScript;
    if (!(e instanceof HTMLScriptElement)) throw new r.InvariantError(`Expected document.currentScript to be a <script> element. Received ${e} instead.`);
    let {
        pathname: t
    } = new URL(e.src), n = t.indexOf("/_next/");
    if (-1 === n) throw new r.InvariantError(`Expected document.currentScript src to contain '/_next/'. Received ${e.src} instead.`);
    return t.slice(0, n)
}("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
}), Object.assign(n.default, n), t.exports = n.default)
}, 185504, (e, t, n) => {
Object.defineProperty(n, "__esModule", {
    value: !0
}), Object.defineProperty(n, "AppRouterAnnouncer", {
    enumerable: !0,
    get: function() {
        return o
    }
});
let r = e.r(516830),
    i = e.r(942606),
    a = "next-route-announcer";

function o({
    tree: e
}) {
    let [t, n] = (0, r.useState)(null);
    (0, r.useEffect)(() => (n(function() {
        let e = document.getElementsByName(a)[0];
        if (e?.shadowRoot?.childNodes[0]) return e.shadowRoot.childNodes[0];
        {
            let e = document.createElement(a);
            e.style.cssText = "position:absolute";
            let t = document.createElement("div");
            return t.ariaLive = "assertive", t.id = "__next-route-announcer__", t.role = "alert", t.style.cssText = "position:absolute;border:0;height:1px;margin:-1px;padding:0;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap;word-wrap:normal", e.attachShadow({
                mode: "open"
            }).appendChild(t), document.body.appendChild(e), t
        }
    }()), () => {
        let e = document.getElementsByTagName(a)[0];
        e?.isConnected && document.body.removeChild(e)
    }), []);
    let [s, l] = (0, r.useState)(""), u = (0, r.useRef)(void 0);
    return (0, r.useEffect)(() => {
        let e = "";
        if (document.title) e = document.title;
        else {
            let t = document.querySelector("h1");
            t && (e = t.innerText || t.textContent || "")
        }
        void 0 !== u.current && u.current !== e && l(e), u.current = e
    }, [e]), t ? (0, i.createPortal)(s, t) : null
}("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
}), Object.assign(n.default, n), t.exports = n.default)
}, 685620, (e, t, n) => {
Object.defineProperty(n, "__esModule", {
    value: !0
}), Object.defineProperty(n, "default", {
    enumerable: !0,
    get: function() {
        return z
    }
});
let r = e.r(836437),
    i = e.r(56421),
    a = e.r(230452),
    o = i._(e.r(516830)),
    s = e.r(608205),
    l = e.r(537120),
    u = e.r(225696),
    c = e.r(874999),
    d = e.r(791975),
    f = e.r(188505),
    p = e.r(185504),
    h = e.r(34373),
    m = e.r(83256),
    g = e.r(706490),
    v = e.r(392109),
    b = e.r(565988),
    y = e.r(703808),
    w = e.r(940895),
    _ = e.r(603457),
    S = e.r(997137),
    E = e.r(499779),
    k = e.r(196365),
    T = r._(e.r(578883)),
    x = r._(e.r(623719)),
    C = e.r(119157);
e.r(232401);
let O = {};

function P() {
    if (void 0 === window.navigation) return !1;
    let e = window.navigation.activation?.entry,
        t = window.navigation.currentEntry;
    return null != e && null != t && e.key !== t.key && window.history.state?.__NA === !0
}
let N = !1,
    A = !1;

function L(e) {
    if (e) {
        if (!e.__NA) return void window.location.reload();
        (0, _.traverse)(window.location.href, e.__PRIVATE_NEXTJS_INTERNALS_TREE)
    }
}

function R({
    appRouterState: e
}) {
    return (0, o.useInsertionEffect)(() => {
        let {
            tree: t,
            pushRef: n,
            canonicalUrl: r,
            renderedSearch: i
        } = e;
        if (!N && (N = !0, P())) return void(0, f.setLastCommittedTree)(t);
        let a = {
            ...n.preserveCustomHistoryState ? window.history.state : {},
            __NA: !0,
            __PRIVATE_NEXTJS_INTERNALS_TREE: {
                tree: t,
                renderedSearch: i
            }
        };
        n.pendingPush && (0, l.createHrefFromUrl)(new URL(window.location.href)) !== r ? (n.pendingPush = !1, window.history.pushState(a, "", r)) : window.history.replaceState(a, "", r), (0, f.setLastCommittedTree)(t)
    }, [e]), (0, o.useEffect)(() => {
        (0, k.pingVisibleLinks)(e.nextUrl, e.root)
    }, [e.nextUrl, e.root]), null
}

function I(e) {
    null == e && (e = {});
    let t = window.history.state,
        n = t?.__NA;
    n && (e.__NA = n);
    let r = t?.__PRIVATE_NEXTJS_INTERNALS_TREE;
    return r && (e.__PRIVATE_NEXTJS_INTERNALS_TREE = r), e
}

function M({
    headRenderTree: e
}) {
    let t = e.data.rsc,
        n = e.data.prefetchRsc,
        r = null !== n ? n : t;
    return (0, o.useDeferredValue)(t, r)
}

function D({
    actionQueue: e,
    globalError: t,
    webSocket: n,
    staticIndicatorState: r
}) {
    let i = (0, d.useActionQueue)(e),
        {
            canonicalUrl: l
        } = i,
        {
            searchParams: f,
            pathname: y
        } = (0, o.useMemo)(() => {
            let e = new URL(l, "u" < typeof window ? "http://n" : window.location.href);
            return {
                searchParams: e.searchParams,
                pathname: (0, v.hasBasePath)(e.pathname) ? (0, g.removeBasePath)(e.pathname) : e.pathname
            }
        }, [l]);
    (0, o.useEffect)(() => {
        let e = (0, b.extractSourcePageFromFlightRouterState)(i.tree);
        void 0 !== e ? window.next.__internal_src_page = e : delete window.next.__internal_src_page
    }, [i.tree]), (0, o.useEffect)(() => {
        function e(e) {
            e.persisted && window.history.state?.__PRIVATE_NEXTJS_INTERNALS_TREE && (O.pendingMpaPath = void 0, (0, _.restore)(new URL(window.location.href), window.history.state.__PRIVATE_NEXTJS_INTERNALS_TREE))
        }
        return window.addEventListener("pageshow", e), () => {
            window.removeEventListener("pageshow", e)
        }
    }, []), (0, o.useEffect)(() => {
        function e(e) {
            let t = "reason" in e ? e.reason : e.error;
            if ((0, E.isRedirectError)(t)) {
                e.preventDefault();
                let n = (0, S.getURLFromRedirectError)(t);
                "push" === (0, S.getRedirectTypeFromError)(t) ? w.publicAppRouterInstance.push(n, {}): w.publicAppRouterInstance.replace(n, {})
            }
        }
        return window.addEventListener("error", e), window.addEventListener("unhandledrejection", e), () => {
            window.removeEventListener("error", e), window.removeEventListener("unhandledrejection", e)
        }
    }, []);
    let {
        pushRef: k
    } = i;
    if (k.mpaNavigation) {
        if (O.pendingMpaPath !== l) {
            let e = window.location;
            k.pendingPush ? e.assign(l) : e.replace(l), O.pendingMpaPath = l
        }
        throw m.unresolvedThenable
    }(0, o.useEffect)(() => {
        let e = window.history.pushState.bind(window.history),
            t = window.history.replaceState.bind(window.history),
            n = e => {
                let t = window.location.href,
                    n = window.history.state?.__PRIVATE_NEXTJS_INTERNALS_TREE;
                (0, _.restore)(new URL(e ?? t, t), n)
            };
        window.history.pushState = function(t, r, i) {
            return t?.__NA || t?._N || (t = I(t), i && n(i)), e(t, r, i)
        }, window.history.replaceState = function(e, r, i) {
            return e?.__NA || e?._N || (e = I(e), i && n(i)), t(e, r, i)
        };
        let r = e => L(e.state);
        return window.addEventListener("popstate", r), !A && (A = !0, P() && L(window.history.state)), () => {
            window.history.pushState = e, window.history.replaceState = t, window.removeEventListener("popstate", r)
        }
    }, []);
    let {
        root: x,
        tree: N,
        nextUrl: z,
        scrollRef: U,
        previousNextUrl: j
    } = i, F = (0, o.useMemo)(() => (0, b.getSelectedParams)(N), [N]), $ = (0, o.useMemo)(() => ({
        parentTree: N,
        parentRenderTree: x.tree,
        parentSegmentPath: null,
        parentParams: {},
        parentLoadingData: null,
        debugNameContext: "/",
        url: l,
        isActive: !0
    }), [N, x, l]), B = (0, o.useMemo)(() => ({
        tree: N,
        scrollRef: U,
        nextUrl: z,
        previousNextUrl: j
    }), [N, U, z, j]), H = (0, a.jsx)(M, {
        headRenderTree: x.head
    }, (0, u.createHeadKey)(x.head.varyPath)), q = (0, a.jsxs)(h.RedirectBoundary, {
        children: [H, (0, a.jsx)(C.RootLayoutBoundary, {
            children: x.tree.data.rsc
        }), (0, a.jsx)(p.AppRouterAnnouncer, {
            tree: N
        })]
    });
    return q = (0, a.jsx)(T.default, {
        errorComponent: t[0],
        errorStyles: t[1],
        children: q
    }), (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(R, {
            appRouterState: i
        }), null, (0, a.jsx)(c.NavigationPromisesContext.Provider, {
            value: null,
            children: (0, a.jsx)(c.PathParamsContext.Provider, {
                value: F,
                children: (0, a.jsx)(c.PathnameContext.Provider, {
                    value: y,
                    children: (0, a.jsx)(c.SearchParamsContext.Provider, {
                        value: f,
                        children: (0, a.jsx)(s.GlobalLayoutRouterContext.Provider, {
                            value: B,
                            children: (0, a.jsx)(s.AppRouterContext.Provider, {
                                value: w.publicAppRouterInstance,
                                children: (0, a.jsx)(s.LayoutRouterContext.Provider, {
                                    value: $,
                                    children: q
                                })
                            })
                        })
                    })
                })
            })
        })]
    })
}

function z({
    actionQueue: e,
    globalErrorState: t,
    webSocket: n,
    staticIndicatorState: r
}) {
    (0, y.useNavFailureHandler)();
    let i = (0, a.jsx)(D, {
        actionQueue: e,
        globalError: t,
        webSocket: n,
        staticIndicatorState: r
    });
    return (0, a.jsx)(T.default, {
        errorComponent: x.default,
        children: i
    })
}("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
}), Object.assign(n.default, n), t.exports = n.default)
}, 720943, (e, t, n) => {
Object.defineProperty(n, "__esModule", {
    value: !0
});
var r = {
    WarningIcon: function() {
        return l
    },
    errorStyles: function() {
        return o
    },
    errorThemeCss: function() {
        return s
    }
};
for (var i in r) Object.defineProperty(n, i, {
    enumerable: !0,
    get: r[i]
});
e.r(836437);
let a = e.r(230452);
e.r(516830);
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
    s = `
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

function l() {
    return (0, a.jsx)("svg", {
        width: "32",
        height: "32",
        viewBox: "-0.2 -1.5 32 32",
        fill: "none",
        style: o.icon,
        children: (0, a.jsx)("path", {
            d: "M16.9328 0C18.0839 0.000116771 19.1334 0.658832 19.634 1.69531L31.4299 26.1309C32.0708 27.4588 31.1036 28.9999 29.6291 29H2.00215C0.527541 29 -0.439628 27.4588 0.201371 26.1309L11.9973 1.69531C12.4979 0.658823 13.5474 7.75066e-05 14.6984 0H16.9328ZM3.59493 26H28.0363L16.9328 3H14.6984L3.59493 26ZM15.8156 19C16.9202 19.0001 17.8156 19.8955 17.8156 21C17.8156 22.1045 16.9202 22.9999 15.8156 23C14.7111 23 13.8156 22.1046 13.8156 21C13.8156 19.8954 14.7111 19 15.8156 19ZM17.3156 16.5H14.3156V8.5H17.3156V16.5Z",
            fill: "var(--next-error-title)"
        })
    })
}("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
}), Object.assign(n.default, n), t.exports = n.default)
}, 623719, (e, t, n) => {
Object.defineProperty(n, "__esModule", {
    value: !0
}), Object.defineProperty(n, "default", {
    enumerable: !0,
    get: function() {
        return o
    }
}), e.r(836437);
let r = e.r(230452);
e.r(516830);
let i = e.r(525072),
    a = e.r(720943),
    o = function({
        error: e
    }) {
        let t = e?.digest,
            n = !!t;
        return (0, i.handleISRError)({
            error: e
        }), (0, r.jsxs)("html", {
            id: "__next_error__",
            children: [(0, r.jsx)("head", {
                children: (0, r.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: a.errorThemeCss
                    }
                })
            }), (0, r.jsxs)("body", {
                children: [(0, r.jsx)("div", {
                    style: a.errorStyles.container,
                    children: (0, r.jsxs)("div", {
                        style: a.errorStyles.card,
                        children: [(0, r.jsx)(a.WarningIcon, {}), (0, r.jsx)("h1", {
                            style: a.errorStyles.title,
                            children: "This page couldn’t load"
                        }), (0, r.jsx)("p", {
                            style: a.errorStyles.message,
                            children: n ? "A server error occurred. Reload to try again." : "Reload to try again, or go back."
                        }), (0, r.jsxs)("div", {
                            style: a.errorStyles.buttonGroup,
                            children: [(0, r.jsx)("form", {
                                style: a.errorStyles.form,
                                children: (0, r.jsx)("button", {
                                    type: "submit",
                                    style: a.errorStyles.button,
                                    children: "Reload"
                                })
                            }), !n && (0, r.jsx)("button", {
                                type: "button",
                                style: a.errorStyles.buttonSecondary,
                                onClick: () => {
                                    window.history.length > 1 ? window.history.back() : window.location.href = "/"
                                },
                                children: "Back"
                            })]
                        })]
                    })
                }), t && (0, r.jsxs)("p", {
                    style: a.errorStyles.digestFooter,
                    children: ["ERROR ", t]
                })]
            })]
        })
    };
("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
}), Object.assign(n.default, n), t.exports = n.default)
}, 750953, (e, t, n) => {
Object.defineProperty(n, "__esModule", {
    value: !0
});
var r = {
    GracefulDegradeBoundary: function() {
        return s
    },
    default: function() {
        return l
    }
};
for (var i in r) Object.defineProperty(n, i, {
    enumerable: !0,
    get: r[i]
});
let a = e.r(230452),
    o = e.r(516830);
class s extends o.Component {
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
        }(document.documentElement)), e) ? (0, a.jsx)("html", {
            ref: this.htmlRef,
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
                __html: this.rootHtml
            }
        }) : this.props.children
    }
}
let l = s;
("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
}), Object.assign(n.default, n), t.exports = n.default)
}, 578883, (e, t, n) => {
Object.defineProperty(n, "__esModule", {
    value: !0
}), Object.defineProperty(n, "default", {
    enumerable: !0,
    get: function() {
        return u
    }
});
let r = e.r(836437),
    i = e.r(230452);
e.r(516830);
let a = r._(e.r(750953)),
    o = e.r(698119),
    s = e.r(647364),
    l = "u" > typeof window && (0, s.isBot)(window.navigator.userAgent);

function u({
    children: e,
    errorComponent: t,
    errorStyles: n,
    errorScripts: r
}) {
    return l ? (0, i.jsx)(a.default, {
        children: e
    }) : (0, i.jsx)(o.ErrorBoundary, {
        errorComponent: t,
        errorStyles: n,
        errorScripts: r,
        children: e
    })
}("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
}), Object.assign(n.default, n), t.exports = n.default)
}, 853835, (e, t, n) => {
Object.defineProperty(n, "__esModule", {
    value: !0
}), Object.defineProperty(n, "createInitialRouterState", {
    enumerable: !0,
    get: function() {
        return f
    }
});
let r = e.r(537120),
    i = e.r(565988),
    a = e.r(760059),
    o = e.r(437092),
    s = e.r(245596),
    l = e.r(242588),
    u = e.r(609898),
    c = e.r(569039),
    d = e.r(89601);

function f({
    navigatedAt: e,
    initialRSCPayload: t,
    initialFlightStreamForCache: n,
    location: p
}) {
    let {
        c: h,
        t: m,
        q: g,
        i: v,
        S: b,
        s: y,
        l: w,
        r: _,
        p: S,
        d: E
    } = t, k = h.join("/"), T = (0, a.transportNodeToFlightRouterState)(m.t, g), x = p ? (0, r.createHrefFromUrl)(p) : k, C = (0, l.createNavigationSeed)(e, null, m, null, !0, null, g, null, E ?? u.UnknownDynamicStaleTime), O = C.root, P = (0, o.createInitialRenderTreeForHydration)(e, O, C.dynamicStaleAt);
    return null !== p && ((0, d.discoverKnownRoute)(Date.now(), p.pathname, p.search, null, null, O, v, x, C.renderedSearch, b, !1), void 0 !== y ? void 0 !== w && null != n ? Promise.resolve(w).then(async e => {
        if (0 === e) return void n.cancel();
        let t = await (0, c.decodeStageUntilBoundary)(n, e, void 0);
        null !== t && (0, s.spawnStaticStageCacheWrite)(Date.now(), t, !0, null, T, g, s.segmentCacheMap)
    }).catch(() => {}) : ((0, s.spawnStaticStageCacheWrite)(Date.now(), {
        t: m,
        r: _,
        s: y
    }, !1, null, T, g, s.segmentCacheMap), n?.cancel()) : n?.cancel(), null != S && (0, s.writeRuntimePrefetchStreamIntoCache)(Date.now(), S, T, g, s.segmentCacheMap).catch(() => {})), {
        tree: P.tree.route,
        root: (0, s.createRootRouteTree)(P.tree.node, P.head.node),
        pushRef: {
            pendingPush: !1,
            mpaNavigation: !1,
            preserveCustomHistoryState: !0
        },
        scrollRef: {
            scrollRef: null,
            forceScroll: !1,
            onlyHashChange: !1,
            hashFragment: null
        },
        canonicalUrl: x,
        renderedSearch: g,
        nextUrl: ((0, i.extractPathFromFlightRouterState)(T) || p?.pathname) ?? null,
        previousNextUrl: null,
        debugInfo: null
    }
}("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
}), Object.assign(n.default, n), t.exports = n.default)
}, 565166, (e, t, n) => {
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
for (var i in r) Object.defineProperty(n, i, {
    enumerable: !0,
    get: r[i]
});
let a = e.r(836437),
    o = e.r(811144),
    s = e.r(296804),
    l = e.r(105662),
    u = e.r(698119),
    c = a._(e.r(623719)),
    d = {
        decorateDevError: e => e,
        handleClientError: () => {},
        originConsoleError: console.error.bind(console)
    };

function f(e, t) {
    let n, r, i = t.errorBoundary?.constructor;
    if (n = n || i === u.ErrorBoundaryHandler && t.errorBoundary.props.errorComponent === c.default) return h(e, r);
    (0, s.isBailoutToCSRError)(e) || (0, o.isNextRouterError)(e) || d.originConsoleError(e)
}

function p(e) {
    h(e)
}

function h(e, t) {
    (0, s.isBailoutToCSRError)(e) || (0, o.isNextRouterError)(e) || (0, l.reportGlobalError)(e)
}("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
}), Object.assign(n.default, n), t.exports = n.default)
}, 211414, (e, t, n) => {
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
for (var i in r) Object.defineProperty(n, i, {
    enumerable: !0,
    get: r[i]
});
let a = e.r(836437),
    o = e.r(296804),
    s = a._(e.r(197092)),
    l = e.r(105662),
    u = new WeakSet;

function c(e) {
    return u.has(e)
}
let d = e => {
    let t = (0, s.default)(e) && "cause" in e ? e.cause : e;
    (0, o.isBailoutToCSRError)(t) || (0, l.reportGlobalError)(t)
};
("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
}), Object.assign(n.default, n), t.exports = n.default)
}, 105662, (e, t, n) => {
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
}, 691717, (e, t, n) => {
Object.defineProperty(n, "__esModule", {
    value: !0
});
let r = (0, e.r(232401).getDeploymentId)();
globalThis.NEXT_DEPLOYMENT_ID = r, ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
}), Object.assign(n.default, n), t.exports = n.default)
}, 524444, (e, t, n) => {
var r, i = e.i(353508),
    a = e.r(353710),
    o = e.r(516830),
    s = e.r(942606);

function l(e) {
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
    if (c(e) !== e) throw Error(l(188))
}

function h(e, t, n, r, i, a) {
    for (; null !== e;) {
        if ((5 === e.tag || 27 === e.tag || 6 === e.tag) && n(e, r, i, a) || (22 !== e.tag || null === e.memoizedState) && (t || 5 !== e.tag && 27 !== e.tag) && h(e.child, t, n, r, i, a)) return !0;
        e = e.sibling
    }
    return !1
}

function m(e) {
    for (e = e.return; null !== e;) {
        if (3 === e.tag || 5 === e.tag || 27 === e.tag) return e;
        e = e.return
    }
    return null
}

function g(e) {
    var t = !1;
    for (e = e.return; null !== e && (4 === e.tag && (t = !0), 3 !== e.tag && 5 !== e.tag && 27 !== e.tag);) e = e.return;
    return t
}

function v(e) {
    var t = [null, null],
        n = m(e);
    return null === n || function e(t, n, r, i) {
        for (; null !== r;) {
            if (r === n) i.foundSelf = !0;
            else if (5 === r.tag || 27 === r.tag || 6 === r.tag) {
                if (i.foundSelf) return t[1] = r, !0;
                t[0] = r
            } else if ((22 !== r.tag || null === r.memoizedState) && e(t, n, r.child, i)) return !0;
            r = r.sibling
        }
        return !1
    }(t, e, n.child, {
        foundSelf: !1
    }), t
}

function b(e) {
    switch (e.tag) {
        case 5:
        case 27:
        case 6:
            return e.stateNode;
        case 3:
            return e.stateNode.containerInfo;
        default:
            throw Error(l(559))
    }
}
var y = null,
    w = null;

function _(e, t, n) {
    return e === n || e === t && (y = e, !0)
}

function S(e, t, n) {
    return e === n ? (w = e, !1) : e === t && (null !== w && (y = e), !0)
}

function E(e) {
    if (null === e) return null;
    do e = null === e ? null : e.return; while (e && 5 !== e.tag && 27 !== e.tag && 3 !== e.tag) return e || null
}

function k(e, t, n) {
    for (var r = 0, i = e; i; i = n(i)) r++;
    i = 0;
    for (var a = t; a; a = n(a)) i++;
    for (; 0 < r - i;) e = n(e), r--;
    for (; 0 < i - r;) t = n(t), i--;
    for (; r--;) {
        if (e === t || null !== t && e === t.alternate) return e;
        e = n(e), t = n(t)
    }
    return null
}
var T = Object.assign,
    x = Symbol.for("react.element"),
    C = Symbol.for("react.transitional.element"),
    O = Symbol.for("react.portal"),
    P = Symbol.for("react.fragment"),
    N = Symbol.for("react.strict_mode"),
    A = Symbol.for("react.profiler"),
    L = Symbol.for("react.consumer"),
    R = Symbol.for("react.context"),
    I = Symbol.for("react.forward_ref"),
    M = Symbol.for("react.suspense"),
    D = Symbol.for("react.suspense_list"),
    z = Symbol.for("react.memo"),
    U = Symbol.for("react.lazy");
Symbol.for("react.scope");
var j = Symbol.for("react.activity"),
    F = Symbol.for("react.legacy_hidden");
Symbol.for("react.tracing_marker");
var $ = Symbol.for("react.memo_cache_sentinel"),
    B = Symbol.for("react.view_transition"),
    H = Symbol.for("react.recoverable"),
    q = Symbol.iterator;

function V(e) {
    return null === e || "object" != typeof e ? null : "function" == typeof(e = q && e[q] || e["@@iterator"]) ? e : null
}
var W = Symbol.for("react.client.reference"),
    Q = Array.isArray,
    G = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    X = {
        pending: !1,
        data: null,
        method: null,
        action: null
    },
    Y = [],
    J = -1;

function Z(e) {
    return {
        current: e
    }
}

function ee(e) {
    0 > J || (e.current = Y[J], Y[J] = null, J--)
}

function et(e, t) {
    Y[++J] = e.current, e.current = t
}
var en = Z(null),
    er = Z(null),
    ei = Z(null),
    ea = Z(null);

function eo(e, t) {
    switch (et(ei, t), et(er, e), et(en, null), t.nodeType) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? cy(e) : 0;
            break;
        default:
            if (e = t.tagName, t = t.namespaceURI) e = cw(t = cy(t), e);
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
    ee(en), et(en, e)
}

function es() {
    ee(en), ee(er), ee(ei)
}

function el(e) {
    var t = e.memoizedState;
    null !== t && (dz._currentValue = t.memoizedState, et(ea, e));
    var n = cw(t = en.current, e.type);
    t !== n && (et(er, e), et(en, n))
}

function eu(e) {
    er.current === e && (ee(en), ee(er)), ea.current === e && (ee(ea), dz._currentValue = X)
}

function ec(e) {
    if (void 0 === tZ) try {
        throw Error()
    } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        tZ = t && t[1] || "", t0 = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : ""
    }
    return "\n" + tZ + e + t0
}
var ed = !1;

function ef(e, t) {
    if (!e || ed) return "";
    ed = !0;
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
                                var i = Object.getOwnPropertyDescriptor(e.prototype, "props");
                                Object.defineProperty(e.prototype, "props", {
                                    configurable: !0,
                                    set: function() {
                                        throw Error()
                                    }
                                }), n = !0, new e
                            } finally {
                                n && (void 0 !== i ? Object.defineProperty(e.prototype, "props", i) : delete e.prototype.props)
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
        var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
        i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
            value: "DetermineComponentFrameRoot"
        });
        var a = r.DetermineComponentFrameRoot(),
            o = a[0],
            s = a[1];
        if (o && s) {
            var l = o.split("\n"),
                u = s.split("\n");
            for (i = r = 0; r < l.length && !l[r].includes("DetermineComponentFrameRoot");) r++;
            for (; i < u.length && !u[i].includes("DetermineComponentFrameRoot");) i++;
            if (r === l.length || i === u.length)
                for (r = l.length - 1, i = u.length - 1; 1 <= r && 0 <= i && l[r] !== u[i];) i--;
            for (; 1 <= r && 0 <= i; r--, i--)
                if (l[r] !== u[i]) {
                    if (1 !== r || 1 !== i)
                        do
                            if (r--, i--, 0 > i || l[r] !== u[i]) {
                                var c = "\n" + l[r].replace(" at new ", " at ");
                                return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c
                            } while (1 <= r && 0 <= i) break
                }
        }
    } finally {
        ed = !1, Error.prepareStackTrace = n
    }
    return (n = e ? e.displayName || e.name : "") ? ec(n) : ""
}

function ep(e) {
    try {
        var t = "",
            n = null;
        do t += function(e, t) {
            switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    return ec(e.type);
                case 16:
                    return ec("Lazy");
                case 13:
                    return e.child !== t && null !== t ? ec("Suspense Fallback") : ec("Suspense");
                case 19:
                    return ec("SuspenseList");
                case 0:
                case 15:
                    return ef(e.type, !1);
                case 11:
                    return ef(e.type.render, !1);
                case 1:
                    return ef(e.type, !0);
                case 31:
                    return ec("Activity");
                case 30:
                    return ec("ViewTransition");
                default:
                    return ""
            }
        }(e, n), n = e, e = e.return; while (e) return t
    } catch (e) {
        return "\nError generating stack: " + e.message + "\n" + e.stack
    }
}
var eh = Object.prototype.hasOwnProperty,
    em = a.unstable_scheduleCallback,
    eg = a.unstable_cancelCallback,
    ev = a.unstable_shouldYield,
    eb = a.unstable_requestPaint,
    ey = a.unstable_now,
    ew = a.unstable_getCurrentPriorityLevel,
    e_ = a.unstable_ImmediatePriority,
    eS = a.unstable_UserBlockingPriority,
    eE = a.unstable_NormalPriority,
    ek = a.unstable_LowPriority,
    eT = a.unstable_IdlePriority,
    ex = (a.log, a.unstable_setDisableYieldValue, null),
    eC = null,
    eO = Math.clz32 ? Math.clz32 : function(e) {
        return 0 == (e >>>= 0) ? 32 : 31 - (eP(e) / eN | 0) | 0
    },
    eP = Math.log,
    eN = Math.LN2,
    eA = 256,
    eL = 262144,
    eR = 4194304;

function eI(e) {
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
            return e & -e;
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

function eM(e, t, n) {
    var r = e.pendingLanes;
    if (0 === r) return 0;
    var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
    e = e.warmLanes;
    var s = 0x7ffffff & r;
    return 0 !== s ? 0 != (r = s & ~a) ? i = eI(r) : 0 != (o &= s) ? i = eI(o) : n || 0 != (n = s & ~e) && (i = eI(n)) : 0 != (s = r & ~a) ? i = eI(s) : 0 !== o ? i = eI(o) : n || 0 != (n = r & ~e) && (i = eI(n)), 0 === i ? 0 : 0 !== t && t !== i && 0 == (t & a) && ((a = i & -i) >= (n = t & -t) || 32 === a && 0 != (4194048 & n)) ? t : i
}

function eD(e, t) {
    return 0 == (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t)
}

function ez(e, t) {
    0 != (8 & t) && (t |= 32 & t);
    var n = e.entangledLanes;
    if (0 !== n)
        for (e = e.entanglements, n &= t; 0 < n;) {
            var r = 31 - eO(n),
                i = 1 << r;
            t |= e[r], n &= ~i
        }
    return t
}

function eU() {
    var e = eR;
    return 0 == (0x3c00000 & (eR <<= 1)) && (eR = 4194304), e
}

function ej(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function eF(e, t) {
    e.pendingLanes |= t, 0x10000000 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
}

function e$(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var r = 31 - eO(t);
    e.entangledLanes |= t, e.entanglements[r] = 0x40000000 | e.entanglements[r] | 261930 & n
}

function eB(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - eO(n),
            i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
}

function eH(e, t) {
    var n = t & -t;
    return 0 != ((n = 0 != (42 & n) ? 1 : eq(n)) & (e.suspendedLanes | t)) ? 0 : n
}

function eq(e) {
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

function eV(e) {
    return 2 < (e &= -e) ? 8 < e ? 0 != (0x7ffffff & e) ? 32 : 0x10000000 : 8 : 2
}

function eW() {
    var e = K.p;
    return 0 !== e ? e : void 0 === (e = window.event) ? 32 : dJ(e.type)
}

function eQ(e, t) {
    var n = K.p;
    try {
        return K.p = e, t()
    } finally {
        K.p = n
    }
}
var eG = Math.random().toString(36).slice(2),
    eK = "__reactFiber$" + eG,
    eX = "__reactProps$" + eG,
    eY = "__reactContainer$" + eG,
    eJ = "__reactEvents$" + eG,
    eZ = "__reactListeners$" + eG,
    e0 = "__reactHandles$" + eG,
    e1 = "__reactResources$" + eG,
    e2 = "__reactMarker$" + eG,
    e3 = "__reactLoad$" + eG;

function e4(e) {
    delete e[eK], delete e[eX], delete e[eZ], delete e[e0]
}

function e5(e) {
    var t;
    if (t = e[eK]) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[eY] || n[eK]) {
            if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                for (e = dn(e); null !== e;) {
                    if (n = e[eK]) return n;
                    e = dn(e)
                }
            return t
        }
        n = (e = n).parentNode
    }
    return null
}

function e6(e) {
    if (e = e[eK] || e[eY]) {
        var t = e.tag;
        if (5 === t || 6 === t || 13 === t || 31 === t || 26 === t || 27 === t || 3 === t) return e
    }
    return null
}

function e8(e) {
    var t = e.tag;
    if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
    throw Error(l(33))
}

function e9(e) {
    var t = e[e1];
    return t || (t = e[e1] = {
        hoistableStyles: new Map,
        hoistableScripts: new Map
    }), t
}

function e7(e) {
    e[e2] = !0
}

function te(e) {
    e[e3] = void 0
}
var tt = new Set,
    tn = {};

function tr(e, t) {
    ti(e, t), ti(e + "Capture", t)
}

function ti(e, t) {
    for (tn[e] = t, e = 0; e < t.length; e++) tt.add(t[e])
}
var ta = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
    to = {},
    ts = {},
    tl = !1;

function tu() {
    var e = tl;
    return tl = !1, e
}

function tc(e, t, n) {
    if (eh.call(ts, t) || !eh.call(to, t) && (ta.test(t) ? ts[t] = !0 : (to[t] = !0, !1)))
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

function td(e, t, n) {
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

function tf(e, t, n, r) {
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

function tp(e) {
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

function th(e) {
    var t = e.type;
    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
}

function tm(e) {
    if (!e._valueTracker) {
        var t = th(e) ? "checked" : "value";
        e._valueTracker = function(e, t, n) {
            var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
            if (!e.hasOwnProperty(t) && void 0 !== r && "function" == typeof r.get && "function" == typeof r.set) {
                var i = r.get,
                    a = r.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                        return i.call(this)
                    },
                    set: function(e) {
                        n = "" + e, a.call(this, e)
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

function tg(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = th(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
}
var tv = /[\n"\\]/g;

function tb(e) {
    return e.replace(tv, function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " "
    })
}

function ty(e, t, n, r, i, a, o, s) {
    e.name = "", null != o && "function" != typeof o && "symbol" != typeof o && "boolean" != typeof o ? e.type = o : e.removeAttribute("type"), null != t ? "number" === o ? (0 === t && "" === e.value || e.value != t) && (e.value = "" + tp(t)) : e.value !== "" + tp(t) && (e.value = "" + tp(t)) : "submit" !== o && "reset" !== o || e.removeAttribute("value"), null != t ? "number" === o && e.value == t ? t_(e, tp(e.value)) : t_(e, tp(t)) : null != n ? t_(e, tp(n)) : null != r && e.removeAttribute("value"), null == i && null != a && (e.defaultChecked = !!a), null != i && (e.checked = i && "function" != typeof i && "symbol" != typeof i), null != s && "function" != typeof s && "symbol" != typeof s && "boolean" != typeof s ? e.name = "" + tp(s) : e.removeAttribute("name")
}

function tw(e, t, n, r, i, a, o, s) {
    if (null != a && "function" != typeof a && "symbol" != typeof a && "boolean" != typeof a && (e.type = a), null != t || null != n) {
        if (("submit" === a || "reset" === a) && null == t) return void tm(e);
        n = null != n ? "" + tp(n) : "", t = null != t ? "" + tp(t) : n, s || t === e.value || (e.value = t), e.defaultValue = t
    }
    r = "function" != typeof(r = null != r ? r : i) && "symbol" != typeof r && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, null != o && "function" != typeof o && "symbol" != typeof o && "boolean" != typeof o && (e.name = o), tm(e)
}

function t_(e, t) {
    e.defaultValue !== "" + t && (e.defaultValue = "" + t)
}

function tS(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + tp(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return
            }
            null !== t || e[i].disabled || (t = e[i])
        }
        null !== t && (t.selected = !0)
    }
}

function tE(e, t, n) {
    if (null != t && ((t = "" + tp(t)) !== e.value && (e.value = t), null == n)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return
    }
    e.defaultValue = null != n ? "" + tp(n) : ""
}

function tk(e, t, n, r) {
    if (null == t) {
        if (null != r) {
            if (null != n) throw Error(l(92));
            if (Q(r)) {
                if (1 < r.length) throw Error(l(93));
                r = r[0]
            }
            n = r
        }
        null == n && (n = ""), t = n
    }
    e.defaultValue = n = tp(t), (r = e.textContent) === n && "" !== r && null !== r && (e.value = r), tm(e)
}

function tT(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var tx = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

function tC(e, t, n) {
    var r = 0 === t.indexOf("--");
    null == n || "boolean" == typeof n || "" === n ? r ? e.setProperty(t, "") : "float" === t ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : "number" != typeof n || 0 === n || tx.has(t) ? "float" === t ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px"
}

function tO(e, t, n) {
    if (null != t && "object" != typeof t) throw Error(l(62));
    if (e = e.style, null != n) {
        for (var r in n) !n.hasOwnProperty(r) || null != t && t.hasOwnProperty(r) || (0 === r.indexOf("--") ? e.setProperty(r, "") : "float" === r ? e.cssFloat = "" : e[r] = "", tl = !0);
        for (var i in t) r = t[i], t.hasOwnProperty(i) && n[i] !== r && (tC(e, i, r), tl = !0)
    } else
        for (var a in t) t.hasOwnProperty(a) && tC(e, a, t[a])
}

function tP(e) {
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
var tN = new Map([
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
    tA = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

function tL(e) {
    return tA.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
}

function tR() {}
var tI = null;

function tM(e) {
    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
}
var tD = null,
    tz = null;

function tU(e) {
    var t = e6(e);
    if (t && (e = t.stateNode)) {
        var n = e[eX] || null;
        switch (e = t.stateNode, t.type) {
            case "input":
                if (ty(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, "radio" === n.type && null != t) {
                    for (n = e; n.parentNode;) n = n.parentNode;
                    for (n = n.querySelectorAll('input[name="' + tb("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var i = r[eX] || null;
                            if (!i) throw Error(l(90));
                            ty(r, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name)
                        }
                    }
                    for (t = 0; t < n.length; t++)(r = n[t]).form === e.form && tg(r)
                }
                break;
            case "textarea":
                tE(e, n.value, n.defaultValue);
                break;
            case "select":
                null != (t = n.value) && tS(e, !!n.multiple, t, !1)
        }
    }
}
var tj = !1;

function tF(e, t, n) {
    if (tj) return e(t, n);
    tj = !0;
    try {
        return e(t)
    } finally {
        if (tj = !1, (null !== tD || null !== tz) && (ud(), tD && (t = tD, e = tz, tz = tD = null, tU(t), e)))
            for (t = 0; t < e.length; t++) tU(e[t])
    }
}

function t$(e, t) {
    var n = e.stateNode;
    if (null === n) return null;
    var r = n[eX] || null;
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
    if (n && "function" != typeof n) throw Error(l(231, t, typeof n));
    return n
}
var tB = "u" > typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
    tH = !1;
if (tB) try {
    var tq = {};
    Object.defineProperty(tq, "passive", {
        get: function() {
            tH = !0
        }
    }), window.addEventListener("test", tq, tq), window.removeEventListener("test", tq, tq)
} catch (e) {
    tH = !1
}
var tV = null,
    tW = null,
    tQ = null;

function tG() {
    if (tQ) return tQ;
    var e, t, n = tW,
        r = n.length,
        i = "value" in tV ? tV.value : tV.textContent,
        a = i.length;
    for (e = 0; e < r && n[e] === i[e]; e++);
    var o = r - e;
    for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
    return tQ = i.slice(e, 1 < t ? 1 - t : void 0)
}

function tK(e) {
    var t = e.keyCode;
    return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
}

function tX() {
    return !0
}

function tY() {
    return !1
}

function tJ(e) {
    function t(t, n, r, i, a) {
        for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
        return this.isDefaultPrevented = (null != i.defaultPrevented ? i.defaultPrevented : !1 === i.returnValue) ? tX : tY, this.isPropagationStopped = tY, this
    }
    return T(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = tX)
        },
        stopPropagation: function() {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = tX)
        },
        persist: function() {},
        isPersistent: tX
    }), t
}
var tZ, t0, t1, t2, t3, t4 = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    t5 = tJ(t4),
    t6 = T({}, t4, {
        view: 0,
        detail: 0
    }),
    t8 = tJ(t6),
    t9 = T({}, t6, {
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
        getModifierState: nu,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== t3 && (t3 && "mousemove" === e.type ? (t1 = e.screenX - t3.screenX, t2 = e.screenY - t3.screenY) : t2 = t1 = 0, t3 = e), t1)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : t2
        }
    }),
    t7 = tJ(t9),
    ne = tJ(T({}, t9, {
        dataTransfer: 0
    })),
    nt = tJ(T({}, t6, {
        relatedTarget: 0
    })),
    nn = tJ(T({}, t4, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })),
    nr = tJ(T({}, t4, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    })),
    ni = tJ(T({}, t4, {
        data: 0
    })),
    na = {
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
    no = {
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
    ns = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function nl(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = ns[e]) && !!t[e]
}

function nu() {
    return nl
}
var nc = tJ(T({}, t6, {
        key: function(e) {
            if (e.key) {
                var t = na[e.key] || e.key;
                if ("Unidentified" !== t) return t
            }
            return "keypress" === e.type ? 13 === (e = tK(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? no[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: nu,
        charCode: function(e) {
            return "keypress" === e.type ? tK(e) : 0
        },
        keyCode: function(e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        },
        which: function(e) {
            return "keypress" === e.type ? tK(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        }
    })),
    nd = tJ(T({}, t9, {
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
    nf = tJ(T({}, t4, {
        submitter: 0
    })),
    np = tJ(T({}, t6, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: nu
    })),
    nh = tJ(T({}, t4, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })),
    nm = tJ(T({}, t9, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })),
    ng = tJ(T({}, t4, {
        newState: 0,
        oldState: 0,
        source: 0
    })),
    nv = [9, 13, 27, 32],
    nb = tB && "CompositionEvent" in window,
    ny = null;
tB && "documentMode" in document && (ny = document.documentMode);
var nw = tB && "TextEvent" in window && !ny,
    n_ = tB && (!nb || ny && 8 < ny && 11 >= ny),
    nS = !1;

function nE(e, t) {
    switch (e) {
        case "keyup":
            return -1 !== nv.indexOf(t.keyCode);
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

function nk(e) {
    return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
}
var nT = !1,
    nx = {
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

function nC(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return "input" === t ? !!nx[e.type] : "textarea" === t
}

function nO(e, t, n, r) {
    tD ? tz ? tz.push(r) : tz = [r] : tD = r, 0 < (t = ci(t, "onChange")).length && (n = new t5("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var nP = null,
    nN = null;

function nA(e) {
    u6(e, 0)
}

function nL(e) {
    if (tg(e8(e))) return e
}

function nR(e, t) {
    if ("change" === e) return t
}
var nI = !1;
if (tB) {
    if (tB) {
        var nM = "oninput" in document;
        if (!nM) {
            var nD = document.createElement("div");
            nD.setAttribute("oninput", "return;"), nM = "function" == typeof nD.oninput
        }
        r = nM
    } else r = !1;
    nI = r && (!document.documentMode || 9 < document.documentMode)
}

function nz() {
    nP && (nP.detachEvent("onpropertychange", nU), nN = nP = null)
}

function nU(e) {
    if ("value" === e.propertyName && nL(nN)) {
        var t = [];
        nO(t, nN, e, tM(e)), tF(nA, t)
    }
}

function nj(e, t, n) {
    "focusin" === e ? (nz(), nP = t, nN = n, nP.attachEvent("onpropertychange", nU)) : "focusout" === e && nz()
}

function nF(e) {
    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return nL(nN)
}

function n$(e, t) {
    if ("click" === e) return nL(t)
}

function nB(e, t) {
    if ("input" === e || "change" === e) return nL(t)
}
var nH = "function" == typeof Object.is ? Object.is : function(e, t) {
    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
};

function nq(e, t) {
    if (nH(e, t)) return !0;
    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!eh.call(t, i) || !nH(e[i], t[i])) return !1
    }
    return !0
}

function nV(e) {
    if (void 0 === (e = e || ("u" > typeof document ? document : void 0))) return null;
    try {
        return e.activeElement || e.body
    } catch (t) {
        return e.body
    }
}

function nW(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function nQ(e, t) {
    var n, r = nW(e);
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
        r = nW(r)
    }
}

function nG(e) {
    e = null != e && null != e.ownerDocument && null != e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
    for (var t = nV(e.document); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = "string" == typeof t.contentWindow.location.href
        } catch (e) {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = nV(e.document)
    }
    return t
}

function nK(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
}
var nX = tB && "documentMode" in document && 11 >= document.documentMode,
    nY = null,
    nJ = null,
    nZ = null,
    n0 = !1;

function n1(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    n0 || null == nY || nY !== nV(r) || (r = "selectionStart" in (r = nY) && nK(r) ? {
        start: r.selectionStart,
        end: r.selectionEnd
    } : {
        anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }, nZ && nq(nZ, r) || (nZ = r, 0 < (r = ci(nJ, "onSelect")).length && (t = new t5("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = nY)))
}

function n2(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var n3 = {
        animationcancel: n2("Animation", "AnimationCancel"),
        animationend: n2("Animation", "AnimationEnd"),
        animationiteration: n2("Animation", "AnimationIteration"),
        animationstart: n2("Animation", "AnimationStart"),
        transitionrun: n2("Transition", "TransitionRun"),
        transitionstart: n2("Transition", "TransitionStart"),
        transitioncancel: n2("Transition", "TransitionCancel"),
        transitionend: n2("Transition", "TransitionEnd")
    },
    n4 = {},
    n5 = {};

function n6(e) {
    if (n4[e]) return n4[e];
    if (!n3[e]) return e;
    var t, n = n3[e];
    for (t in n)
        if (n.hasOwnProperty(t) && t in n5) return n4[e] = n[t];
    return e
}
tB && (n5 = document.createElement("div").style, "AnimationEvent" in window || (delete n3.animationcancel.animation, delete n3.animationend.animation, delete n3.animationiteration.animation, delete n3.animationstart.animation), "TransitionEvent" in window || delete n3.transitionend.transition);
var n8 = n6("animationcancel"),
    n9 = n6("animationend"),
    n7 = n6("animationiteration"),
    re = n6("animationstart"),
    rt = n6("transitionrun"),
    rn = n6("transitionstart"),
    rr = n6("transitioncancel"),
    ri = n6("transitionend"),
    ra = new Map,
    ro = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function rs(e, t) {
    ra.set(e, t), tr(t, [e])
}
ro.push("scrollEnd");
var rl = 0;

function ru(e, t) {
    return null != e.name && "auto" !== e.name ? e.name : null !== t.autoName ? t.autoName : t.autoName = e = "_" + (e = l3.identifierPrefix) + "t_" + (rl++).toString(32) + "_"
}

function rc(e) {
    if (null == e || "string" == typeof e) return e;
    var t = null,
        n = ut;
    if (null !== n)
        for (var r = 0; r < n.length; r++) {
            var i = e[n[r]];
            if (null != i) {
                if ("none" === i) return "none";
                t = null == t ? i : t + " " + i
            }
        }
    return null == t ? e.default : t
}

function rd(e, t) {
    return e = rc(e), null == (t = rc(t)) ? "auto" === e ? null : e : "auto" === t ? null : t
}
var rf = "function" == typeof reportError ? reportError : function(e) {
        if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
            var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: "object" == typeof e && null !== e && "string" == typeof e.message ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t)) return
        } else if ("object" == typeof i.default && "function" == typeof i.default.emit) return void i.default.emit("uncaughtException", e);
        console.error(e)
    },
    rp = [],
    rh = 0,
    rm = 0;

function rg() {
    for (var e = rh, t = rm = rh = 0; t < e;) {
        var n = rp[t];
        rp[t++] = null;
        var r = rp[t];
        rp[t++] = null;
        var i = rp[t];
        rp[t++] = null;
        var a = rp[t];
        if (rp[t++] = null, null !== r && null !== i) {
            var o = r.pending;
            null === o ? i.next = i : (i.next = o.next, o.next = i), r.pending = i
        }
        0 !== a && rw(n, i, a)
    }
}

function rv(e, t, n, r) {
    rp[rh++] = e, rp[rh++] = t, rp[rh++] = n, rp[rh++] = r, rm |= r, e.lanes |= r, null !== (e = e.alternate) && (e.lanes |= r)
}

function rb(e, t, n, r) {
    return rv(e, t, n, r), r_(e)
}

function ry(e, t) {
    return rv(e, null, null, t), r_(e)
}

function rw(e, t, n) {
    e.lanes |= n;
    var r = e.alternate;
    null !== r && (r.lanes |= n);
    for (var i = !1, a = e.return; null !== a;) a.childLanes |= n, null !== (r = a.alternate) && (r.childLanes |= n), 22 === a.tag && (null === (e = a.stateNode) || 1 & e._visibility || (i = !0)), e = a, a = a.return;
    return 3 === e.tag ? (a = e.stateNode, i && null !== t && (i = 31 - eO(n), null === (r = (e = a.hiddenUpdates)[i]) ? e[i] = [t] : r.push(t), t.lane = 0x20000000 | n), a) : null
}

function r_(e) {
    if (50 < un) throw un = 0, ur = null, Error(l(185));
    for (var t = e.return; null !== t;) t = (e = t).return;
    return 3 === e.tag ? e.stateNode : null
}
var rS = {};

function rE(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function rk(e, t, n, r) {
    return new rE(e, t, n, r)
}

function rT(e) {
    return !(!(e = e.prototype) || !e.isReactComponent)
}

function rx(e, t) {
    var n = e.alternate;
    return null === n ? ((n = rk(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 0x47f00000 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n
}

function rC(e, t) {
    e.flags &= 0x47f00002;
    var n = e.alternate;
    return null === n ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, e.dependencies = null === (t = n.dependencies) ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }), e
}

function rO(e, t, n, r, i, a) {
    var o = 0;
    if ("function" == typeof(r = e)) rT(r) && (o = 1);
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
    }(e, n, en.current) ? "html" === e || "head" === e || "body" === e ? 27 : 5 : 26;
    else e: switch (r) {
        case j:
            return (e = rk(31, n, t, i)).elementType = j, e.lanes = a, e;
        case P:
            return rP(n.children, i, a, t);
        case N:
            o = 8, i |= 24;
            break;
        case A:
            return (e = rk(12, n, t, 2 | i)).elementType = A, e.lanes = a, e;
        case M:
            return (e = rk(13, n, t, i)).elementType = M, e.lanes = a, e;
        case D:
            return (e = rk(19, n, t, i)).elementType = D, e.lanes = a, e;
        case F:
        case B:
            return (e = rk(30, n, t, e = 32 | i)).elementType = B, e.lanes = a, e.stateNode = {
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
                case L:
                    o = 9;
                    break e;
                case I:
                    o = 11;
                    break e;
                case z:
                    o = 14;
                    break e;
                case U:
                    o = 16, r = null;
                    break e
            }
            o = 29, n = Error(l(130, null === e ? "null" : typeof e, "")), r = null
    }
    return (t = rk(o, n, t, i)).elementType = e, t.type = r, t.lanes = a, t
}

function rP(e, t, n, r) {
    return (e = rk(7, e, r, t)).lanes = n, e
}

function rN(e, t, n) {
    return (e = rk(6, e, null, t)).lanes = n, e
}

function rA(e) {
    var t = rk(18, null, null, 0);
    return t.stateNode = e, t
}

function rL(e, t, n) {
    return (t = rk(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}
var rR = new WeakMap;

function rI(e, t) {
    if ("object" == typeof e && null !== e) {
        var n = rR.get(e);
        return void 0 !== n ? n : (t = {
            value: e,
            source: t,
            stack: ep(t)
        }, rR.set(e, t), t)
    }
    return {
        value: e,
        source: t,
        stack: ep(t)
    }
}
var rM = [],
    rD = 0,
    rz = null,
    rU = 0,
    rj = [],
    rF = 0,
    r$ = null,
    rB = 1,
    rH = "";

function rq(e, t) {
    rM[rD++] = rU, rM[rD++] = rz, rz = e, rU = t
}

function rV(e, t, n) {
    rj[rF++] = rB, rj[rF++] = rH, rj[rF++] = r$, r$ = e;
    var r = rB;
    e = rH;
    var i = 32 - eO(r) - 1;
    r &= ~(1 << i), n += 1;
    var a = 32 - eO(t) + i;
    if (30 < a) {
        var o = i - i % 5;
        a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, rB = 1 << 32 - eO(t) + i | n << i | r, rH = a + e
    } else rB = 1 << a | n << i | r, rH = e
}

function rW(e) {
    null !== e.return && (rq(e, 1), rV(e, 1, 0))
}

function rQ(e) {
    for (; e === rz;) rz = rM[--rD], rM[rD] = null, rU = rM[--rD], rM[rD] = null;
    for (; e === r$;) r$ = rj[--rF], rj[rF] = null, rH = rj[--rF], rj[rF] = null, rB = rj[--rF], rj[rF] = null
}

function rG(e, t) {
    rj[rF++] = rB, rj[rF++] = rH, rj[rF++] = r$, rB = t.id, rH = t.overflow, r$ = e
}
var rK = null,
    rX = null,
    rY = !1,
    rJ = null,
    rZ = !1,
    r0 = Error(l(519));

function r1(e) {
    var t = Error(l(418, 1 < arguments.length && void 0 !== arguments[1] && arguments[1] ? "text" : "HTML", ""));
    throw r8(rI(t, e)), r0
}

function r2(e) {
    var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
    switch (t[eK] = e, t[eX] = r, n) {
        case "dialog":
            u8("cancel", t), u8("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            u8("load", t);
            break;
        case "video":
        case "audio":
            for (n = 0; n < u4.length; n++) u8(u4[n], t);
            break;
        case "source":
            u8("error", t);
            break;
        case "img":
        case "image":
        case "link":
            u8("error", t), u8("load", t);
            break;
        case "details":
            u8("toggle", t);
            break;
        case "input":
            u8("invalid", t), tw(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
            break;
        case "select":
            u8("invalid", t);
            break;
        case "textarea":
            u8("invalid", t), tk(t, r.value, r.defaultValue, r.children)
    }
    "string" != typeof(n = r.children) && "number" != typeof n && "bigint" != typeof n || t.textContent === "" + n || !0 === r.suppressHydrationWarning || cc(t.textContent, n) ? (null != r.popover && (u8("beforetoggle", t), u8("toggle", t)), null != r.onScroll && u8("scroll", t), null != r.onScrollEnd && u8("scrollend", t), null != r.onClick && (t.onclick = tR), t = !0) : t = !1, t || r1(e, !0)
}

function r3(e) {
    for (rK = e.return; rK;) switch (rK.tag) {
        case 5:
        case 31:
        case 13:
            rZ = !1;
            return;
        case 27:
        case 3:
            rZ = !0;
            return;
        default:
            rK = rK.return
    }
}

function r4(e) {
    if (e !== rK) return !1;
    if (!rY) return r3(e), rY = !0, !1;
    var t, n = e.tag;
    if ((t = 3 !== n && 27 !== n) && ((t = 5 === n) && (t = "form" === (t = e.type) || "button" === t || cS(e.type, e.memoizedProps)), t = !t), t && rX && r1(e), r3(e), 13 === n) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(l(317));
        rX = dt(e)
    } else if (31 === n) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(l(317));
        rX = dt(e)
    } else 27 === n ? (n = rX, cN(e.type) ? (e = de, de = null, rX = e) : rX = n) : rX = rK ? c7(e.stateNode.nextSibling) : null;
    return !0
}

function r5() {
    rX = rK = null, rY = !1
}

function r6() {
    var e = rJ;
    return null !== e && (null === lK ? lK = e : lK.push.apply(lK, e), rJ = null), e
}

function r8(e) {
    null === rJ ? rJ = [e] : rJ.push(e)
}
var r9 = Z(null),
    r7 = null,
    ie = null;

function it(e, t, n) {
    et(r9, t._currentValue), t._currentValue = n
}

function ir(e) {
    e._currentValue = r9.current, ee(r9)
}

function ii(e, t, n) {
    for (; null !== e;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function ia(e, t, n, r) {
    var i = e.child;
    for (null !== i && (i.return = e); null !== i;) {
        var a = i.dependencies;
        if (null !== a) {
            var o = i.child;
            a = a.firstContext;
            e: for (; null !== a;) {
                var s = a;
                a = i;
                for (var u = 0; u < t.length; u++)
                    if (s.context === t[u]) {
                        a.lanes |= n, null !== (s = a.alternate) && (s.lanes |= n), ii(a.return, n, e), r || (o = null);
                        break e
                    } a = s.next
            }
        } else if (18 === i.tag) {
            if (null === (o = i.return)) throw Error(l(341));
            o.lanes |= n, null !== (a = o.alternate) && (a.lanes |= n), ii(o, n, e), o = null
        } else 13 === i.tag && null !== i.memoizedState && null === i.memoizedState.dehydrated ? (i.lanes |= n, null !== (o = i.alternate) && (o.lanes |= n), ii(i.return, n, e), o = null !== (o = i.child) ? o.sibling : null) : o = i.child;
        if (null !== o) o.return = i;
        else
            for (o = i; null !== o;) {
                if (o === e) {
                    o = null;
                    break
                }
                if (null !== (i = o.sibling)) {
                    i.return = o.return, o = i;
                    break
                }
                o = o.return
            }
        i = o
    }
}

function io(e, t, n, r) {
    e = null;
    for (var i = t, a = !1; null !== i;) {
        if (!a) {
            if (0 != (524288 & i.flags)) a = !0;
            else if (0 != (262144 & i.flags)) break
        }
        if (10 === i.tag) {
            var o = i.alternate;
            if (null === o) throw Error(l(387));
            if (null !== (o = o.memoizedProps)) {
                var s = i.type;
                nH(i.pendingProps.value, o.value) || (null !== e ? e.push(s) : e = [s])
            }
        } else if (i === ea.current) {
            if (null === (o = i.alternate)) throw Error(l(387));
            o.memoizedState.memoizedState !== i.memoizedState.memoizedState && (null !== e ? e.push(dz) : e = [dz])
        }
        i = i.return
    }
    return null !== e && ia(t, e, n, r), t.flags |= 262144, null !== e
}

function is(e) {
    for (e = e.firstContext; null !== e;) {
        if (!nH(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next
    }
    return !1
}

function il(e) {
    r7 = e, ie = null, null !== (e = e.dependencies) && (e.firstContext = null)
}

function iu(e) {
    return id(r7, e)
}

function ic(e, t) {
    return null === r7 && il(e), id(e, t)
}

function id(e, t) {
    var n = t._currentValue;
    if (t = {
            context: t,
            memoizedValue: n,
            next: null
        }, null === ie) {
        if (null === e) throw Error(l(308));
        ie = t, e.dependencies = {
            lanes: 0,
            firstContext: t
        }, e.flags |= 524288
    } else ie = ie.next = t;
    return n
}
var ip = "u" > typeof AbortController ? AbortController : function() {
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
    ih = a.unstable_scheduleCallback,
    im = a.unstable_NormalPriority,
    ig = {
        $$typeof: R,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };

function iv() {
    return {
        controller: new ip,
        data: new Map,
        refCount: 0
    }
}

function ib(e) {
    e.refCount--, 0 === e.refCount && ih(im, function() {
        e.controller.abort()
    })
}

function iy(e, t) {
    if (0 != (4194048 & e.pendingLanes)) {
        var n = e.transitionTypes;
        for (null === n && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
            var r = t[e]; - 1 === n.indexOf(r) && n.push(r)
        }
    }
}
var iw = null,
    i_ = null,
    iS = 0,
    iE = 0,
    ik = null;

function iT() {
    if (0 == --iS && (iw = null, null !== i_)) {
        null !== ik && (ik.status = "fulfilled");
        var e = i_;
        i_ = null, iE = 0, ik = null;
        for (var t = 0; t < e.length; t++)(0, e[t])()
    }
}
var ix = G.S;
G.S = function(e, t) {
    if (lJ = ey(), "object" == typeof t && null !== t && "function" == typeof t.then && function(e) {
            if (null === i_) {
                var t = i_ = [];
                iS = 0, iE = u0(), ik = {
                    status: "pending",
                    value: void 0,
                    then: function(e) {
                        t.push(e)
                    }
                }
            }
            iS++, e.then(iT, iT)
        }(t), null !== iw)
        for (var n = u$; null !== n;) iy(n, iw), n = n.next;
    if (null !== (n = e.types)) {
        for (var r = u$; null !== r;) iy(r, n), r = r.next;
        if (0 !== iE) {
            null === (r = iw) && (r = iw = []);
            for (var i = 0; i < n.length; i++) {
                var a = n[i]; - 1 === r.indexOf(a) && r.push(a)
            }
        }
    }
    null !== ix && ix(e, t)
};
var iC = Z(null);

function iO() {
    var e = iC.current;
    return null !== e ? e : lR.pooledCache
}

function iP(e, t) {
    null === t ? et(iC, iC.current) : et(iC, t.pool)
}

function iN() {
    var e = iO();
    return null === e ? null : {
        parent: ig._currentValue,
        pool: e
    }
}
var iA = Error(l(460)),
    iL = Error(l(474)),
    iR = Error(l(542)),
    iI = {
        then: function() {}
    };

function iM(e) {
    return "fulfilled" === (e = e.status) || "rejected" === e
}

function iD(e, t, n) {
    switch (void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(tR, tR), t = n), t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            if (iF(e = t.reason), void 0 === e && !("reason" in t)) throw Error(l(600));
            throw e;
        default:
            if ("string" == typeof t.status) t.then(tR, tR);
            else {
                if (null !== (e = lR) && 100 < e.shellSuspendCounter) throw Error(l(482));
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
                    throw iF(e = t.reason), e
            }
            throw iU = t, iA
    }
}

function iz(e) {
    try {
        return (0, e._init)(e._payload)
    } catch (e) {
        if (null !== e && "object" == typeof e && "function" == typeof e.then) throw iU = e, iA;
        throw e
    }
}
var iU = null;

function ij() {
    if (null === iU) throw Error(l(459));
    var e = iU;
    return iU = null, e
}

function iF(e) {
    if (e === iA || e === iR) throw Error(l(483))
}
var i$ = null,
    iB = 0;

function iH(e) {
    var t = iB;
    return iB += 1, null === i$ && (i$ = []), iD(i$, e, t)
}

function iq(e, t) {
    e.ref = void 0 !== (t = t.props.ref) ? t : null
}

function iV(e, t) {
    if (t.$$typeof === x) throw Error(l(525));
    throw Error(l(31, "[object Object]" === (e = Object.prototype.toString.call(t)) ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function iW(e) {
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

    function i(e, t) {
        return (e = rx(e, t)).index = 0, e.sibling = null, e
    }

    function a(t, n, r) {
        return (t.index = r, e) ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 0x8000002, n) : (t.flags |= 1048576, n)
    }

    function o(t) {
        return e && null === t.alternate && (t.flags |= 0x8000002), t
    }

    function s(e, t, n, r) {
        return null === t || 6 !== t.tag ? (t = rN(n, e.mode, r)).return = e : (t = i(t, n)).return = e, t
    }

    function u(e, t, n, r) {
        var a = n.type;
        return a === P ? (iq(e = d(e, t, n.props.children, r, n.key), n), e) : (null !== t && (t.elementType === a || "object" == typeof a && null !== a && a.$$typeof === U && iz(a) === t.type) ? iq(t = i(t, n.props), n) : iq(t = rO(n.type, n.key, n.props, null, e.mode, r), n), t.return = e, t)
    }

    function c(e, t, n, r) {
        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = rL(n, e.mode, r)).return = e : (t = i(t, n.children || [])).return = e, t
    }

    function d(e, t, n, r, a) {
        return null === t || 7 !== t.tag ? (t = rP(n, e.mode, r, a)).return = e : (t = i(t, n)).return = e, t
    }

    function f(e, t, n) {
        if ("string" == typeof t && "" !== t || "number" == typeof t || "bigint" == typeof t) return (t = rN("" + t, e.mode, n)).return = e, t;
        if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
                case C:
                    return iq(n = rO(t.type, t.key, t.props, null, e.mode, n), t), n.return = e, n;
                case O:
                    return (t = rL(t, e.mode, n)).return = e, t;
                case U:
                    return f(e, t = iz(t), n)
            }
            if (Q(t) || V(t)) return (t = rP(t, e.mode, n, null)).return = e, t;
            if ("function" == typeof t.then) return f(e, iH(t), n);
            if (t.$$typeof === R) return f(e, ic(e, t), n);
            iV(e, t)
        }
        return null
    }

    function p(e, t, n, r) {
        var i = null !== t ? t.key : null;
        if ("string" == typeof n && "" !== n || "number" == typeof n || "bigint" == typeof n) return null !== i ? null : s(e, t, "" + n, r);
        if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
                case C:
                    return n.key === i ? u(e, t, n, r) : null;
                case O:
                    return n.key === i ? c(e, t, n, r) : null;
                case U:
                    return p(e, t, n = iz(n), r)
            }
            if (Q(n) || V(n)) return null !== i ? null : d(e, t, n, r, null);
            if ("function" == typeof n.then) return p(e, t, iH(n), r);
            if (n.$$typeof === R) return p(e, t, ic(e, n), r);
            iV(e, n)
        }
        return null
    }

    function h(e, t, n, r, i) {
        if ("string" == typeof r && "" !== r || "number" == typeof r || "bigint" == typeof r) return s(t, e = e.get(n) || null, "" + r, i);
        if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
                case C:
                    return u(t, e = e.get(null === r.key ? n : r.key) || null, r, i);
                case O:
                    return c(t, e = e.get(null === r.key ? n : r.key) || null, r, i);
                case U:
                    return h(e, t, n, r = iz(r), i)
            }
            if (Q(r) || V(r)) return d(t, e = e.get(n) || null, r, i, null);
            if ("function" == typeof r.then) return h(e, t, n, iH(r), i);
            if (r.$$typeof === R) return h(e, t, n, ic(t, r), i);
            iV(t, r)
        }
        return null
    }
    return function(s, u, c, d) {
        try {
            iB = 0;
            var m = function s(u, c, d, m) {
                if ("object" == typeof d && null !== d && d.type === P && null === d.key && void 0 === d.props.ref && (d = d.props.children), "object" == typeof d && null !== d) {
                    switch (d.$$typeof) {
                        case C:
                            e: {
                                for (var g = d.key; null !== c;) {
                                    if (c.key === g) {
                                        if ((g = d.type) === P) {
                                            if (7 === c.tag) {
                                                n(u, c.sibling), iq(m = i(c, d.props.children), d), m.return = u, u = m;
                                                break e
                                            }
                                        } else if (c.elementType === g || "object" == typeof g && null !== g && g.$$typeof === U && iz(g) === c.type) {
                                            n(u, c.sibling), iq(m = i(c, d.props), d), m.return = u, u = m;
                                            break e
                                        }
                                        n(u, c);
                                        break
                                    }
                                    t(u, c), c = c.sibling
                                }
                                d.type === P ? iq(m = rP(d.props.children, u.mode, m, d.key), d) : iq(m = rO(d.type, d.key, d.props, null, u.mode, m), d),
                                m.return = u,
                                u = m
                            }
                            return o(u);
                        case O:
                            e: {
                                for (g = d.key; null !== c;) {
                                    if (c.key === g)
                                        if (4 === c.tag && c.stateNode.containerInfo === d.containerInfo && c.stateNode.implementation === d.implementation) {
                                            n(u, c.sibling), (m = i(c, d.children || [])).return = u, u = m;
                                            break e
                                        } else {
                                            n(u, c);
                                            break
                                        } t(u, c), c = c.sibling
                                }(m = rL(d, u.mode, m)).return = u,
                                u = m
                            }
                            return o(u);
                        case U:
                            return s(u, c, d = iz(d), m)
                    }
                    if (Q(d)) return function(i, o, s, l) {
                        for (var u = null, c = null, d = o, m = o = 0, g = null; null !== d && m < s.length; m++) {
                            d.index > m ? (g = d, d = null) : g = d.sibling;
                            var v = p(i, d, s[m], l);
                            if (null === v) {
                                null === d && (d = g);
                                break
                            }
                            e && d && null === v.alternate && t(i, d), o = a(v, o, m), null === c ? u = v : c.sibling = v, c = v, d = g
                        }
                        if (m === s.length) return n(i, d), rY && rq(i, m), u;
                        if (null === d) {
                            for (; m < s.length; m++) null !== (d = f(i, s[m], l)) && (o = a(d, o, m), null === c ? u = d : c.sibling = d, c = d);
                            return rY && rq(i, m), u
                        }
                        for (d = r(d); m < s.length; m++) null !== (g = h(d, i, m, s[m], l)) && (e && null !== (v = g.alternate) && d.delete(null === v.key ? m : v.key), o = a(g, o, m), null === c ? u = g : c.sibling = g, c = g);
                        return e && d.forEach(function(e) {
                            return t(i, e)
                        }), rY && rq(i, m), u
                    }(u, c, d, m);
                    if (V(d)) {
                        if ("function" != typeof(g = V(d))) throw Error(l(150));
                        return function(i, o, s, u) {
                            if (null == s) throw Error(l(151));
                            for (var c = null, d = null, m = o, g = o = 0, v = null, b = s.next(); null !== m && !b.done; g++, b = s.next()) {
                                m.index > g ? (v = m, m = null) : v = m.sibling;
                                var y = p(i, m, b.value, u);
                                if (null === y) {
                                    null === m && (m = v);
                                    break
                                }
                                e && m && null === y.alternate && t(i, m), o = a(y, o, g), null === d ? c = y : d.sibling = y, d = y, m = v
                            }
                            if (b.done) return n(i, m), rY && rq(i, g), c;
                            if (null === m) {
                                for (; !b.done; g++, b = s.next()) null !== (b = f(i, b.value, u)) && (o = a(b, o, g), null === d ? c = b : d.sibling = b, d = b);
                                return rY && rq(i, g), c
                            }
                            for (m = r(m); !b.done; g++, b = s.next()) null !== (b = h(m, i, g, b.value, u)) && (e && null !== (v = b.alternate) && m.delete(null === v.key ? g : v.key), o = a(b, o, g), null === d ? c = b : d.sibling = b, d = b);
                            return e && m.forEach(function(e) {
                                return t(i, e)
                            }), rY && rq(i, g), c
                        }(u, c, d = g.call(d), m)
                    }
                    if ("function" == typeof d.then) return s(u, c, iH(d), m);
                    if (d.$$typeof === R) return s(u, c, ic(u, d), m);
                    iV(u, d)
                }
                return "string" == typeof d && "" !== d || "number" == typeof d || "bigint" == typeof d ? (d = "" + d, null !== c && 6 === c.tag ? (n(u, c.sibling), (m = i(c, d)).return = u) : (n(u, c), (m = rN(d, u.mode, m)).return = u), o(u = m)) : n(u, c)
            }(s, u, c, d);
            return i$ = null, m
        } catch (e) {
            if (e === iA || e === iR) throw e;
            var g = rk(29, e, null, s.mode);
            return g.lanes = d, g.return = s, g
        } finally {}
    }
}
var iQ = iW(!0),
    iG = iW(!1),
    iK = !1;

function iX(e) {
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

function iY(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
    })
}

function iJ(e) {
    return {
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function iZ(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (r = r.shared, 0 != (2 & lL)) {
        var i = r.pending;
        return null === i ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = r_(e), rw(e, null, n), t
    }
    return rv(e, r, t, n), r_(e)
}

function i0(e, t, n) {
    if (null !== (t = t.updateQueue) && (t = t.shared, 0 != (4194048 & n))) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, eB(e, n)
    }
}

function i1(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (null !== r && n === (r = r.updateQueue)) {
        var i = null,
            a = null;
        if (null !== (n = n.firstBaseUpdate)) {
            do {
                var o = {
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: null,
                    next: null
                };
                null === a ? i = a = o : a = a.next = o, n = n.next
            } while (null !== n) null === a ? i = a = t : a = a.next = t
        } else i = a = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: a,
            shared: r.shared,
            callbacks: r.callbacks
        }, e.updateQueue = n;
        return
    }
    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}
var i2 = !1;

function i3() {
    if (i2) {
        var e = ik;
        if (null !== e) throw e
    }
}

function i4(e, t, n, r) {
    i2 = !1;
    var i = e.updateQueue;
    iK = !1;
    var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
    if (null !== s) {
        i.shared.pending = null;
        var l = s,
            u = l.next;
        l.next = null, null === o ? a = u : o.next = u, o = l;
        var c = e.alternate;
        null !== c && (s = (c = c.updateQueue).lastBaseUpdate) !== o && (null === s ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = l)
    }
    if (null !== a) {
        var d = i.baseState;
        for (o = 0, c = u = l = null, s = a;;) {
            var f = -0x20000001 & s.lane,
                p = f !== s.lane;
            if (p ? (lM & f) === f : (r & f) === f) {
                0 !== f && f === iE && (i2 = !0), null !== c && (c = c.next = {
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: null,
                    next: null
                });
                e: {
                    var h = e,
                        m = s;
                    switch (f = t, m.tag) {
                        case 1:
                            if ("function" == typeof(h = m.payload)) {
                                d = h.call(n, d, f);
                                break e
                            }
                            d = h;
                            break e;
                        case 3:
                            h.flags = -65537 & h.flags | 128;
                        case 0:
                            if (null == (f = "function" == typeof(h = m.payload) ? h.call(n, d, f) : h)) break e;
                            d = T({}, d, f);
                            break e;
                        case 2:
                            iK = !0
                    }
                }
                null !== (f = s.callback) && (e.flags |= 64, p && (e.flags |= 8192), null === (p = i.callbacks) ? i.callbacks = [f] : p.push(f))
            } else p = {
                lane: f,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null
            }, null === c ? (u = c = p, l = d) : c = c.next = p, o |= f;
            if (null === (s = s.next))
                if (null === (s = i.shared.pending)) break;
                else s = (p = s).next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null
        }
        null === c && (l = d), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, null === a && (i.shared.lanes = 0), lH |= o, e.lanes = o, e.memoizedState = d
    }
}

function i5(e, t) {
    if ("function" != typeof e) throw Error(l(191, e));
    e.call(t)
}

function i6(e, t) {
    var n = e.callbacks;
    if (null !== n)
        for (e.callbacks = null, e = 0; e < n.length; e++) i5(n[e], t)
}
var i8 = Z(null),
    i9 = Z(0);

function i7(e, t) {
    et(i9, e = l$), et(i8, t), l$ = e | t.baseLanes
}

function ae() {
    et(i9, l$), et(i8, i8.current)
}

function at() {
    l$ = i9.current, ee(i8), ee(i9)
}
var an = Z(null),
    ar = null;

function ai(e) {
    var t = e.alternate;
    et(au, 1 & au.current), et(an, e), null === ar && (null === t || null !== i8.current ? ar = e : null !== t.memoizedState && (ar = e))
}

function aa(e) {
    et(au, au.current), et(an, e), null === ar && (ar = e)
}

function ao(e) {
    22 === e.tag ? (et(au, au.current), et(an, e), null === ar && (ar = e)) : as()
}

function as() {
    et(au, au.current), et(an, an.current)
}

function al(e) {
    ee(an), ar === e && (ar = null), ee(au)
}
var au = Z(0);

function ac(e, t) {
    et(an, an.current), et(au, t)
}

function ad(e) {
    ee(au), ee(an), ar === e && (ar = null)
}

function af(e) {
    for (var t = e; null !== t;) {
        if (13 === t.tag) {
            var n = t.memoizedState;
            if (null !== n && (null === (n = n.dehydrated) || c8(n) || c9(n))) return t
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
var ap = 0,
    ah = null,
    am = null,
    ag = null,
    av = !1,
    ab = !1,
    ay = !1,
    aw = 0,
    a_ = 0,
    aS = null,
    aE = 0;

function ak() {
    throw Error(l(321))
}

function aT(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!nH(e[n], t[n])) return !1;
    return !0
}

function ax(e, t, n, r, i, a) {
    return ap = a, ah = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, G.H = null === e || null === e.memoizedState ? oL : oR, ay = !1, a = n(r, i), ay = !1, ab && (a = aO(t, n, r, i)), aC(e), a
}

function aC(e) {
    G.H = oA;
    var t = null !== am && null !== am.next;
    if (ap = 0, ag = am = ah = null, av = !1, a_ = 0, aS = null, t) throw Error(l(300));
    null === e || oK || null !== (e = e.dependencies) && is(e) && (oK = !0)
}

function aO(e, t, n, r) {
    ah = e;
    var i = 0;
    do {
        if (ab && (aS = null), a_ = 0, ab = !1, 25 <= i) throw Error(l(301));
        if (i += 1, ag = am = null, null != e.updateQueue) {
            var a = e.updateQueue;
            a.lastEffect = null, a.events = null, a.stores = null, null != a.memoCache && (a.memoCache.index = 0)
        }
        G.H = oI, a = t(n, r)
    } while (ab) return a
}

function aP() {
    var e = G.H,
        t = e.useState()[0];
    return t = "function" == typeof t.then ? aD(t) : t, e = e.useState()[0], (null !== am ? am.memoizedState : null) !== e && (ah.flags |= 1024), t
}

function aN() {
    var e = 0 !== aw;
    return aw = 0, e
}

function aA(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n
}

function aL(e) {
    if (av) {
        for (e = e.memoizedState; null !== e;) {
            var t = e.queue;
            null !== t && (t.pending = null), e = e.next
        }
        av = !1
    }
    ap = 0, ag = am = ah = null, ab = !1, a_ = aw = 0, aS = null
}

function aR() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return null === ag ? ah.memoizedState = ag = e : ag = ag.next = e, ag
}

function aI() {
    if (null === am) {
        var e = ah.alternate;
        e = null !== e ? e.memoizedState : null
    } else e = am.next;
    var t = null === ag ? ah.memoizedState : ag.next;
    if (null !== t) ag = t, am = e;
    else {
        if (null === e) {
            if (null === ah.alternate) throw Error(l(467));
            throw Error(l(310))
        }
        e = {
            memoizedState: (am = e).memoizedState,
            baseState: am.baseState,
            baseQueue: am.baseQueue,
            queue: am.queue,
            next: null
        }, null === ag ? ah.memoizedState = ag = e : ag = ag.next = e
    }
    return ag
}

function aM() {
    return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
    }
}

function aD(e) {
    var t = a_;
    return a_ += 1, null === aS && (aS = []), e = iD(aS, e, t), t = ah, null === (null === ag ? t.memoizedState : ag.next) && (G.H = null === (t = t.alternate) || null === t.memoizedState ? oL : oR), e
}

function az(e) {
    if (null !== e && "object" == typeof e) {
        if ("function" == typeof e.then) return aD(e);
        if (e.$$typeof === H) return;
        if (e.$$typeof === R) return iu(e)
    }
    throw Error(l(438, String(e)))
}

function aU(e) {
    var t = null,
        n = ah.updateQueue;
    if (null !== n && (t = n.memoCache), null == t) {
        var r = ah.alternate;
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
        }), null === n && (n = aM(), ah.updateQueue = n), n.memoCache = t, void 0 === (n = t.data[t.index]))
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = $;
    return t.index++, n
}

function aj(e, t) {
    return "function" == typeof t ? t(e) : t
}

function aF(e) {
    return a$(aI(), am, e)
}

function a$(e, t, n) {
    var r = e.queue;
    if (null === r) throw Error(l(311));
    r.lastRenderedReducer = n;
    var i = e.baseQueue,
        a = r.pending;
    if (null !== a) {
        if (null !== i) {
            var o = i.next;
            i.next = a.next, a.next = o
        }
        t.baseQueue = i = a, r.pending = null
    }
    if (a = e.baseState, null === i) e.memoizedState = a;
    else {
        t = i.next;
        var s = o = null,
            u = null,
            c = t,
            d = !1;
        do {
            var f = -0x20000001 & c.lane;
            if (f !== c.lane ? (lM & f) === f : (ap & f) === f) {
                var p = c.revertLane;
                if (0 === p) null !== u && (u = u.next = {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }), f === iE && (d = !0);
                else if ((ap & p) === p) {
                    c = c.next, p === iE && (d = !0);
                    continue
                } else f = {
                    lane: 0,
                    revertLane: c.revertLane,
                    gesture: null,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }, null === u ? (s = u = f, o = a) : u = u.next = f, ah.lanes |= p, lH |= p;
                f = c.action, ay && n(a, f), a = c.hasEagerState ? c.eagerState : n(a, f)
            } else p = {
                lane: f,
                revertLane: c.revertLane,
                gesture: c.gesture,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null
            }, null === u ? (s = u = p, o = a) : u = u.next = p, ah.lanes |= f, lH |= f;
            c = c.next
        } while (null !== c && c !== t) if (null === u ? o = a : u.next = s, !nH(a, e.memoizedState) && (oK = !0, d && null !== (n = ik))) throw n;
        e.memoizedState = a, e.baseState = o, e.baseQueue = u, r.lastRenderedState = a
    }
    return null === i && (r.lanes = 0), [e.memoizedState, r.dispatch]
}

function aB(e) {
    var t = aI(),
        n = t.queue;
    if (null === n) throw Error(l(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        a = t.memoizedState;
    if (null !== i) {
        n.pending = null;
        var o = i = i.next;
        do a = e(a, o.action), o = o.next; while (o !== i) nH(a, t.memoizedState) || (oK = !0), t.memoizedState = a, null === t.baseQueue && (t.baseState = a), n.lastRenderedState = a
    }
    return [a, r]
}

function aH(e, t, n) {
    var r = ah,
        i = aI(),
        a = rY;
    if (a) {
        if (void 0 === n) throw Error(l(407));
        n = n()
    } else n = t();
    var o = !nH((am || i).memoizedState, n);
    if (o && (i.memoizedState = n, oK = !0), i = i.queue, oi(aW.bind(null, r, i, e), [e]), a7((e = i.getSnapshot !== t || o || null !== ag && 0 != (1 & ag.memoizedState.tag)) ? 9 : 8, {
            destroy: void 0
        }, aV.bind(null, r, i, n, t), null), e) {
        if (r.flags |= 2048, null === lR) throw Error(l(349));
        a || 0 != (127 & ap) || aq(r, t, n)
    }
    return n
}

function aq(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, null === (t = ah.updateQueue) ? (t = aM(), ah.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
}

function aV(e, t, n, r) {
    t.value = n, t.getSnapshot = r, aQ(t) && aG(e)
}

function aW(e, t, n) {
    return n(function() {
        aQ(t) && aG(e)
    })
}

function aQ(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !nH(e, n)
    } catch (e) {
        return !0
    }
}

function aG(e) {
    var t = ry(e, 2);
    null !== t && us(t, e, 2)
}

function aK(e) {
    var t = aR();
    return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: aj,
        lastRenderedState: e
    }, t
}

function aX(e, t, n, r) {
    return e.baseState = n, a$(e, am, "function" == typeof r ? r : aj)
}

function aY(e, t, n, r, i) {
    if (oO(e)) throw Error(l(485));
    if (null !== (e = t.action)) {
        var a = {
            payload: i,
            action: e,
            next: null,
            isTransition: !0,
            status: "pending",
            value: null,
            reason: null,
            listeners: [],
            then: function(e) {
                a.listeners.push(e)
            }
        };
        null !== G.T ? n(!0) : a.isTransition = !1, r(a), null === (n = t.pending) ? (a.next = t.pending = a, aJ(t, a)) : (a.next = n.next, t.pending = n.next = a)
    }
}

function aJ(e, t) {
    var n = t.action,
        r = t.payload,
        i = e.state;
    if (t.isTransition) {
        var a = G.T,
            o = {};
        o.types = null !== a ? a.types : null, G.T = o;
        try {
            var s = n(i, r),
                l = G.S;
            null !== l && l(o, s), aZ(e, t, s)
        } catch (n) {
            a1(e, t, n)
        } finally {
            null !== a && null !== o.types && (a.types = o.types), G.T = a
        }
    } else try {
        a = n(i, r), aZ(e, t, a)
    } catch (n) {
        a1(e, t, n)
    }
}

function aZ(e, t, n) {
    null !== n && "object" == typeof n && "function" == typeof n.then ? n.then(function(n) {
        a0(e, t, n)
    }, function(n) {
        return a1(e, t, n)
    }) : a0(e, t, n)
}

function a0(e, t, n) {
    t.status = "fulfilled", t.value = n, a2(t), e.state = n, null !== (t = e.pending) && ((n = t.next) === t ? e.pending = null : (n = n.next, t.next = n, aJ(e, n)))
}

function a1(e, t, n) {
    var r = e.pending;
    if (e.pending = null, null !== r) {
        r = r.next;
        do t.status = "rejected", t.reason = n, a2(t), t = t.next; while (t !== r)
    }
    e.action = null
}

function a2(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++)(0, e[t])()
}

function a3(e, t) {
    return t
}

function a4(e, t) {
    if (rY) {
        var n = lR.formState;
        if (null !== n) {
            e: {
                var r = ah;
                if (rY) {
                    if (rX) {
                        t: {
                            for (var i = rX, a = rZ; 8 !== i.nodeType;)
                                if (!a || null === (i = c7(i.nextSibling))) {
                                    i = null;
                                    break t
                                } i = "F!" === (a = i.data) || "F" === a ? i : null
                        }
                        if (i) {
                            rX = c7(i.nextSibling), r = "F!" === i.data;
                            break e
                        }
                    }
                    r1(r)
                }
                r = !1
            }
            r && (t = n[0])
        }
    }
    return (n = aR()).memoizedState = n.baseState = t, r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: a3,
        lastRenderedState: t
    }, n.queue = r, n = oT.bind(null, ah, r), r.dispatch = n, r = aK(!1), a = oC.bind(null, ah, !1, r.queue), r = aR(), i = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
    }, r.queue = i, n = aY.bind(null, ah, i, a, n), i.dispatch = n, r.memoizedState = e, [t, n, !1]
}

function a5(e) {
    return a6(aI(), am, e)
}

function a6(e, t, n) {
    if (t = a$(e, t, a3)[0], e = aF(aj)[0], "object" == typeof t && null !== t && "function" == typeof t.then) try {
        var r = aD(t)
    } catch (e) {
        if (e === iA) throw iR;
        throw e
    } else r = t;
    var i = (t = aI()).queue,
        a = i.dispatch;
    return n !== t.memoizedState && (ah.flags |= 2048, a7(9, {
        destroy: void 0
    }, a8.bind(null, i, n), null)), [r, a, e]
}

function a8(e, t) {
    e.action = t
}

function a9(e) {
    var t = aI(),
        n = am;
    if (null !== n) return a6(t, n, e);
    aI(), t = t.memoizedState;
    var r = (n = aI()).queue.dispatch;
    return n.memoizedState = e, [t, r, !1]
}

function a7(e, t, n, r) {
    return e = {
        tag: e,
        create: n,
        deps: r,
        inst: t,
        next: null
    }, null === (t = ah.updateQueue) && (t = aM(), ah.updateQueue = t), null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
}

function oe() {
    return aI().memoizedState
}

function ot(e, t, n, r) {
    var i = aR();
    ah.flags |= e, i.memoizedState = a7(1 | t, {
        destroy: void 0
    }, n, void 0 === r ? null : r)
}

function on(e, t, n, r) {
    var i = aI();
    r = void 0 === r ? null : r;
    var a = i.memoizedState.inst;
    null !== am && null !== r && aT(r, am.memoizedState.deps) ? i.memoizedState = a7(t, a, n, r) : (ah.flags |= e, i.memoizedState = a7(1 | t, a, n, r))
}

function or(e, t) {
    ot(8390656, 8, e, t)
}

function oi(e, t) {
    on(2048, 8, e, t)
}

function oa(e) {
    var t = aI().memoizedState,
        n = {
            ref: t,
            nextImpl: e
        };
    ah.flags |= 4;
    var r = ah.updateQueue;
    if (null === r) r = aM(), ah.updateQueue = r, r.events = [n];
    else {
        var i = r.events;
        null === i ? r.events = [n] : i.push(n)
    }
    return function() {
        if (0 != (2 & lL)) throw Error(l(440));
        return t.impl.apply(void 0, arguments)
    }
}

function oo(e, t) {
    return on(4, 2, e, t)
}

function os(e, t) {
    return on(4, 4, e, t)
}

function ol(e, t) {
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

function ou(e, t, n) {
    n = null != n ? n.concat([e]) : null, on(4, 4, ol.bind(null, t, e), n)
}

function oc() {}

function od(e, t) {
    var n = aI();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== t && aT(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function of(e, t) {
    var n = aI();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== t && aT(t, r[1]) ? r[0] : (n.memoizedState = [r = e(), t], r)
}

function op(e, t, n) {
    return void 0 === n || 0 != (0x40000000 & ap) && 0 == (261930 & lM) ? e.memoizedState = t : (e.memoizedState = n, e = ua(), ah.lanes |= e, lH |= e, n)
}

function oh(e, t, n, r) {
    return nH(n, t) ? n : null !== i8.current ? (nH(e = op(e, n, r), t) || (oK = !0), e) : 0 == (106 & ap) || 0 != (0x40000000 & ap) && 0 == (261930 & lM) ? (oK = !0, e.memoizedState = n) : (e = ua(), ah.lanes |= e, lH |= e, t)
}

function om(e, t, n, r, i) {
    var a = K.p;
    K.p = 0 !== a && 8 > a ? a : 8;
    var o = G.T,
        s = {};
    s.types = null !== o ? o.types : null, G.T = s, oC(e, !1, t, n);
    try {
        var l = i(),
            u = G.S;
        if (null !== u && u(s, l), null !== l && "object" == typeof l && "function" == typeof l.then) {
            var c, d, f = (c = [], d = {
                status: "pending",
                value: null,
                reason: null,
                then: function(e) {
                    c.push(e)
                }
            }, l.then(function() {
                d.status = "fulfilled", d.value = r;
                for (var e = 0; e < c.length; e++)(0, c[e])(r)
            }, function(e) {
                for (d.status = "rejected", d.reason = e, e = 0; e < c.length; e++)(0, c[e])(void 0)
            }), d);
            ox(e, t, f, ui())
        } else ox(e, t, r, ui())
    } catch (n) {
        ox(e, t, {
            then: function() {},
            status: "rejected",
            reason: n
        }, ui())
    } finally {
        K.p = a, null !== o && null !== s.types && (o.types = s.types), G.T = o
    }
}

function og() {}

function ov(e, t, n, r) {
    if (5 !== e.tag) throw Error(l(476));
    var i = ob(e).queue;
    om(e, i, t, X, null === n ? og : function() {
        return oy(e), n(r)
    })
}

function ob(e) {
    var t = e.memoizedState;
    if (null !== t) return t;
    var n = {};
    return (t = {
        memoizedState: X,
        baseState: X,
        baseQueue: null,
        queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: aj,
            lastRenderedState: X
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
            lastRenderedReducer: aj,
            lastRenderedState: n
        },
        next: null
    }, e.memoizedState = t, null !== (e = e.alternate) && (e.memoizedState = t), t
}

function oy(e) {
    var t = ob(e);
    null === t.next && (t = e.alternate.memoizedState), ox(e, t.next.queue, {}, ui())
}

function ow() {
    return iu(dz)
}

function o_() {
    return aI().memoizedState
}

function oS() {
    return aI().memoizedState
}

function oE(e) {
    for (var t = e.return; null !== t;) {
        switch (t.tag) {
            case 24:
            case 3:
                var n = ui(),
                    r = iZ(t, e = iJ(n), n);
                null !== r && (us(r, t, n), i0(r, t, n)), t = {
                    cache: iv()
                }, e.payload = t;
                return
        }
        t = t.return
    }
}

function ok(e, t, n) {
    var r = ui();
    n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    }, oO(e) ? oP(t, n) : null !== (n = rb(e, t, n, r)) && (us(n, e, r), oN(n, t, r))
}

function oT(e, t, n) {
    ox(e, t, n, ui())
}

function ox(e, t, n, r) {
    var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (oO(e)) oP(t, i);
    else {
        var a = e.alternate;
        if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer)) try {
            var o = t.lastRenderedState,
                s = a(o, n);
            if (i.hasEagerState = !0, i.eagerState = s, nH(s, o)) return rv(e, t, i, 0), null === lR && rg(), !1
        } catch (e) {} finally {}
        if (null !== (n = rb(e, t, i, r))) return us(n, e, r), oN(n, t, r), !0
    }
    return !1
}

function oC(e, t, n, r) {
    if (r = {
            lane: 2,
            revertLane: u0(),
            gesture: null,
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, oO(e)) {
        if (t) throw Error(l(479))
    } else null !== (t = rb(e, n, r, 2)) && us(t, e, 2)
}

function oO(e) {
    var t = e.alternate;
    return e === ah || null !== t && t === ah
}

function oP(e, t) {
    ab = av = !0;
    var n = e.pending;
    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function oN(e, t, n) {
    if (0 != (4194048 & n)) {
        var r = t.lanes;
        r &= e.pendingLanes, t.lanes = n |= r, eB(e, n)
    }
}
var oA = {
        readContext: iu,
        use: az,
        useCallback: ak,
        useContext: ak,
        useEffect: ak,
        useImperativeHandle: ak,
        useLayoutEffect: ak,
        useInsertionEffect: ak,
        useMemo: ak,
        useReducer: ak,
        useRef: ak,
        useState: ak,
        useDebugValue: ak,
        useDeferredValue: ak,
        useTransition: ak,
        useSyncExternalStore: ak,
        useId: ak,
        useHostTransitionStatus: ak,
        useFormState: ak,
        useActionState: ak,
        useOptimistic: ak,
        useMemoCache: ak,
        useCacheRefresh: ak,
        useEffectEvent: ak
    },
    oL = {
        readContext: iu,
        use: az,
        useCallback: function(e, t) {
            return aR().memoizedState = [e, void 0 === t ? null : t], e
        },
        useContext: iu,
        useEffect: or,
        useImperativeHandle: function(e, t, n) {
            n = null != n ? n.concat([e]) : null, ot(4194308, 4, ol.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return ot(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            ot(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = aR();
            t = void 0 === t ? null : t;
            var r = e();
            return n.memoizedState = [r, t], r
        },
        useReducer: function(e, t, n) {
            var r = aR();
            if (void 0 !== n) var i = n(t);
            else i = t;
            return r.memoizedState = r.baseState = i, r.queue = e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: i
            }, e = e.dispatch = ok.bind(null, ah, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            return aR().memoizedState = {
                current: e
            }
        },
        useState: function(e) {
            var t = (e = aK(e)).queue,
                n = oT.bind(null, ah, t);
            return t.dispatch = n, [e.memoizedState, n]
        },
        useDebugValue: oc,
        useDeferredValue: function(e, t) {
            return op(aR(), e, t)
        },
        useTransition: function() {
            var e = aK(!1);
            return e = om.bind(null, ah, e.queue, !0, !1), aR().memoizedState = e, [!1, e]
        },
        useSyncExternalStore: function(e, t, n) {
            var r = ah,
                i = aR();
            if (rY) {
                if (void 0 === n) throw Error(l(407));
                n = n()
            } else {
                if (n = t(), null === lR) throw Error(l(349));
                0 != (127 & lM) || aq(r, t, n)
            }
            i.memoizedState = n;
            var a = {
                value: n,
                getSnapshot: t
            };
            return i.queue = a, or(aW.bind(null, r, a, e), [e]), r.flags |= 2048, a7(9, {
                destroy: void 0
            }, aV.bind(null, r, a, n, t), null), n
        },
        useId: function() {
            var e = aR(),
                t = lR.identifierPrefix;
            if (rY) {
                var n = rH,
                    r = rB;
                t = "_" + t + "R_" + (n = (r & ~(1 << 32 - eO(r) - 1)).toString(32) + n), 0 < (n = aw++) && (t += "H" + n.toString(32)), t += "_"
            } else t = "_" + t + "r_" + (n = aE++).toString(32) + "_";
            return e.memoizedState = t
        },
        useHostTransitionStatus: ow,
        useFormState: a4,
        useActionState: a4,
        useOptimistic: function(e) {
            var t = aR();
            t.memoizedState = t.baseState = e;
            var n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = n, t = oC.bind(null, ah, !0, n), n.dispatch = t, [e, t]
        },
        useMemoCache: aU,
        useCacheRefresh: function() {
            return aR().memoizedState = oE.bind(null, ah)
        },
        useEffectEvent: function(e) {
            var t = aR(),
                n = {
                    impl: e
                };
            return t.memoizedState = n,
                function() {
                    if (0 != (2 & lL)) throw Error(l(440));
                    return n.impl.apply(void 0, arguments)
                }
        }
    },
    oR = {
        readContext: iu,
        use: az,
        useCallback: od,
        useContext: iu,
        useEffect: oi,
        useImperativeHandle: ou,
        useInsertionEffect: oo,
        useLayoutEffect: os,
        useMemo: of,
        useReducer: aF,
        useRef: oe,
        useState: function() {
            return aF(aj)
        },
        useDebugValue: oc,
        useDeferredValue: function(e, t) {
            return oh(aI(), am.memoizedState, e, t)
        },
        useTransition: function() {
            var e = aF(aj)[0],
                t = aI().memoizedState;
            return ["boolean" == typeof e ? e : aD(e), t]
        },
        useSyncExternalStore: aH,
        useId: o_,
        useHostTransitionStatus: ow,
        useFormState: a5,
        useActionState: a5,
        useOptimistic: function(e, t) {
            return aX(aI(), am, e, t)
        },
        useMemoCache: aU,
        useCacheRefresh: oS,
        useEffectEvent: oa
    },
    oI = {
        readContext: iu,
        use: az,
        useCallback: od,
        useContext: iu,
        useEffect: oi,
        useImperativeHandle: ou,
        useInsertionEffect: oo,
        useLayoutEffect: os,
        useMemo: of,
        useReducer: aB,
        useRef: oe,
        useState: function() {
            return aB(aj)
        },
        useDebugValue: oc,
        useDeferredValue: function(e, t) {
            var n = aI();
            return null === am ? op(n, e, t) : oh(n, am.memoizedState, e, t)
        },
        useTransition: function() {
            var e = aB(aj)[0],
                t = aI().memoizedState;
            return ["boolean" == typeof e ? e : aD(e), t]
        },
        useSyncExternalStore: aH,
        useId: o_,
        useHostTransitionStatus: ow,
        useFormState: a9,
        useActionState: a9,
        useOptimistic: function(e, t) {
            var n = aI();
            return null !== am ? aX(n, am, e, t) : (n.baseState = e, [e, n.queue.dispatch])
        },
        useMemoCache: aU,
        useCacheRefresh: oS,
        useEffectEvent: oa
    };

function oM(e, t, n, r) {
    n = null == (n = n(r, t = e.memoizedState)) ? t : T({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
}
var oD = {
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ui(),
            i = iJ(r);
        i.payload = t, null != n && (i.callback = n), null !== (t = iZ(e, i, r)) && (us(t, e, r), i0(t, e, r))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ui(),
            i = iJ(r);
        i.tag = 1, i.payload = t, null != n && (i.callback = n), null !== (t = iZ(e, i, r)) && (us(t, e, r), i0(t, e, r))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ui(),
            r = iJ(n);
        r.tag = 2, null != t && (r.callback = t), null !== (t = iZ(e, r, n)) && (us(t, e, n), i0(t, e, n))
    }
};

function oz(e, t, n, r, i, a, o) {
    return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, o) : !t.prototype || !t.prototype.isPureReactComponent || !nq(n, r) || !nq(i, a)
}

function oU(e, t, n, r) {
    e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && oD.enqueueReplaceState(t, t.state, null)
}

function oj(e, t) {
    var n = t;
    if ("ref" in t)
        for (var r in n = {}, t) "ref" !== r && (n[r] = t[r]);
    if (e = e.defaultProps)
        for (var i in n === t && (n = T({}, n)), e) void 0 === n[i] && (n[i] = e[i]);
    return n
}

function oF(e) {
    rf(e)
}

function o$(e) {
    console.error(e)
}

function oB(e) {
    rf(e)
}

function oH(e, t) {
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

function oq(e, t, n) {
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

function oV(e, t, n) {
    return (n = iJ(n)).tag = 3, n.payload = {
        element: null
    }, n.callback = function() {
        oH(e, t)
    }, n
}

function oW(e) {
    return (e = iJ(e)).tag = 3, e
}

function oQ(e, t, n, r) {
    var i = n.type.getDerivedStateFromError;
    if ("function" == typeof i) {
        var a = r.value;
        e.payload = function() {
            return i(a)
        }, e.callback = function() {
            oq(t, n, r)
        }
    }
    var o = n.stateNode;
    null !== o && "function" == typeof o.componentDidCatch && (e.callback = function() {
        oq(t, n, r), "function" != typeof i && (null === l1 ? l1 = new Set([this]) : l1.add(this));
        var e = r.stack;
        this.componentDidCatch(r.value, {
            componentStack: null !== e ? e : ""
        })
    })
}
var oG = Error(l(461)),
    oK = !1;

function oX(e, t, n, r) {
    t.child = null === e ? iG(t, null, n, r) : iQ(t, e.child, n, r)
}

function oY(e, t, n, r, i) {
    n = n.render;
    var a = t.ref;
    if ("ref" in r) {
        var o = {};
        for (var s in r) "ref" !== s && (o[s] = r[s])
    } else o = r;
    return (il(t), r = ax(e, t, n, o, a, i), s = aN(), null === e || oK) ? (rY && s && rW(t), t.flags |= 1, oX(e, t, r, i), t.child) : (aA(e, t, i), sp(e, t, i))
}

function oJ(e, t, n, r, i) {
    if (null === e) {
        var a = n.type;
        return "function" != typeof a || rT(a) || void 0 !== a.defaultProps || null !== n.compare ? ((e = rO(n.type, null, r, t, t.mode, i)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = a, oZ(e, t, a, r, i))
    }
    if (a = e.child, !sh(e, i)) {
        var o = a.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : nq)(o, r) && e.ref === t.ref) return sp(e, t, i)
    }
    return t.flags |= 1, (e = rx(a, r)).ref = t.ref, e.return = t, t.child = e
}

function oZ(e, t, n, r, i) {
    if (null !== e) {
        var a = e.memoizedProps;
        if (nq(a, r) && e.ref === t.ref)
            if (oK = !1, t.pendingProps = r = a, !sh(e, i)) return t.lanes = e.lanes, sp(e, t, i);
            else 0 != (131072 & e.flags) && (oK = !0)
    }
    return o6(e, t, n, r, i)
}

function o0(e, t, n, r) {
    var i = r.children,
        a = null !== e ? e.memoizedState : null;
    if (null === e && null === t.stateNode && (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }), "hidden" === r.mode) {
        if (0 != (128 & t.flags)) {
            if (a = null !== a ? a.baseLanes | n : n, null !== e) {
                for (r = t.child = e.child, i = 0; null !== r;) i = i | r.lanes | r.childLanes, r = r.sibling;
                r = i & ~a
            } else r = 0, t.child = null;
            return o2(e, t, a, n, r)
        }
        if (0 == (0x20000000 & n)) return r = t.lanes = 0x20000000, o2(e, t, null !== a ? a.baseLanes | n : n, n, r);
        t.memoizedState = {
            baseLanes: 0,
            cachePool: null
        }, null !== e && iP(t, null !== a ? a.cachePool : null), null !== a ? i7(t, a) : ae(), ao(t)
    } else null !== a ? (iP(t, a.cachePool), i7(t, a), as(), t.memoizedState = null) : (null !== e && iP(t, null), ae(), as());
    return oX(e, t, i, n), t.child
}

function o1(e, t) {
    return null !== e && 22 === e.tag || null !== t.stateNode || (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
    }), t.sibling
}

function o2(e, t, n, r, i) {
    var a = iO();
    return t.memoizedState = {
        baseLanes: n,
        cachePool: a = null === a ? null : {
            parent: ig._currentValue,
            pool: a
        }
    }, null !== e && iP(t, null), ae(), ao(t), null !== e && io(e, t, r, !0), t.childLanes = i, null
}

function o3(e, t) {
    return (t = sa({
        mode: t.mode,
        children: t.children
    }, e.mode)).ref = e.ref, e.child = t, t.return = e, t
}

function o4(e, t, n) {
    return iQ(t, e.child, null, n), e = o3(t, t.pendingProps), e.flags |= 2, al(t), t.memoizedState = null, e
}

function o5(e, t) {
    var n = t.ref;
    if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
    else {
        if ("function" != typeof n && "object" != typeof n) throw Error(l(284));
        (null === e || e.ref !== n) && (t.flags |= 4194816)
    }
}

function o6(e, t, n, r, i) {
    return (il(t), n = ax(e, t, n, r, void 0, i), r = aN(), null === e || oK) ? (rY && r && rW(t), t.flags |= 1, oX(e, t, n, i), t.child) : (aA(e, t, i), sp(e, t, i))
}

function o8(e, t, n, r, i, a) {
    return (il(t), t.updateQueue = null, n = aO(t, r, n, i), aC(e), r = aN(), null === e || oK) ? (rY && r && rW(t), t.flags |= 1, oX(e, t, n, a), t.child) : (aA(e, t, a), sp(e, t, a))
}

function o9(e, t, n, r, i) {
    if (il(t), null === t.stateNode) {
        var a = rS,
            o = n.contextType;
        "object" == typeof o && null !== o && (a = iu(o)), t.memoizedState = null !== (a = new n(r, a)).state && void 0 !== a.state ? a.state : null, a.updater = oD, t.stateNode = a, a._reactInternals = t, (a = t.stateNode).props = r, a.state = t.memoizedState, a.refs = {}, iX(t), o = n.contextType, a.context = "object" == typeof o && null !== o ? iu(o) : rS, a.state = t.memoizedState, "function" == typeof(o = n.getDerivedStateFromProps) && (oM(t, n, o, r), a.state = t.memoizedState), "function" == typeof n.getDerivedStateFromProps || "function" == typeof a.getSnapshotBeforeUpdate || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || (o = a.state, "function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), o !== a.state && oD.enqueueReplaceState(a, a.state, null), i4(t, r, a, i), i3(), a.state = t.memoizedState), "function" == typeof a.componentDidMount && (t.flags |= 4194308), r = !0
    } else if (null === e) {
        a = t.stateNode;
        var s = t.memoizedProps,
            l = oj(n, s);
        a.props = l;
        var u = a.context,
            c = n.contextType;
        o = rS, "object" == typeof c && null !== c && (o = iu(c));
        var d = n.getDerivedStateFromProps;
        c = "function" == typeof d || "function" == typeof a.getSnapshotBeforeUpdate, s = t.pendingProps !== s, c || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (s || u !== o) && oU(t, a, r, o), iK = !1;
        var f = t.memoizedState;
        a.state = f, i4(t, r, a, i), i3(), u = t.memoizedState, s || f !== u || iK ? ("function" == typeof d && (oM(t, n, d, r), u = t.memoizedState), (l = iK || oz(t, n, l, r, f, u, o)) ? (c || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || ("function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()), "function" == typeof a.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof a.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), a.props = r, a.state = u, a.context = o, r = l) : ("function" == typeof a.componentDidMount && (t.flags |= 4194308), r = !1)
    } else {
        a = t.stateNode, iY(e, t), c = oj(n, o = t.memoizedProps), a.props = c, d = t.pendingProps, f = a.context, u = n.contextType, l = rS, "object" == typeof u && null !== u && (l = iu(u)), (u = "function" == typeof(s = n.getDerivedStateFromProps) || "function" == typeof a.getSnapshotBeforeUpdate) || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (o !== d || f !== l) && oU(t, a, r, l), iK = !1, f = t.memoizedState, a.state = f, i4(t, r, a, i), i3();
        var p = t.memoizedState;
        o !== d || f !== p || iK || null !== e && null !== e.dependencies && is(e.dependencies) ? ("function" == typeof s && (oM(t, n, s, r), p = t.memoizedState), (c = iK || oz(t, n, c, r, f, p, l) || null !== e && null !== e.dependencies && is(e.dependencies)) ? (u || "function" != typeof a.UNSAFE_componentWillUpdate && "function" != typeof a.componentWillUpdate || ("function" == typeof a.componentWillUpdate && a.componentWillUpdate(r, p, l), "function" == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, p, l)), "function" == typeof a.componentDidUpdate && (t.flags |= 4), "function" == typeof a.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof a.componentDidUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof a.getSnapshotBeforeUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = l, r = c) : ("function" != typeof a.componentDidUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof a.getSnapshotBeforeUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return a = r, o5(e, t), r = 0 != (128 & t.flags), a || r ? (a = t.stateNode, n = r && "function" != typeof n.getDerivedStateFromError ? null : a.render(), t.flags |= 1, null !== e && r ? (t.child = iQ(t, e.child, null, i), t.child = iQ(t, null, n, i)) : oX(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = sp(e, t, i), e
}

function o7(e, t, n, r) {
    return r5(), t.flags |= 256, oX(e, t, n, r), t.child
}
var se = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
};

function st(e) {
    return {
        baseLanes: e,
        cachePool: iN()
    }
}

function sn(e, t, n) {
    return e = null !== e ? e.childLanes & ~n : 0, t && (e |= lW), e
}

function sr(e, t, n) {
    var r, i = t.pendingProps,
        a = !1,
        o = 0 != (128 & t.flags);
    if ((r = o) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & au.current)), r && (a = !0, t.flags &= -129), r = 0 != (32 & t.flags), t.flags &= -33, null === e) {
        if (rY) {
            if (a ? ai(t) : as(), (e = rX) ? null !== (e = null !== (e = c6(e, rZ)) && "&" !== e.data ? e : null) && (t.memoizedState = {
                    dehydrated: e,
                    treeContext: null !== r$ ? {
                        id: rB,
                        overflow: rH
                    } : null,
                    retryLane: 0x20000000,
                    hydrationErrors: null
                }, (n = rA(e)).return = t, t.child = n, rK = t, rX = null) : e = null, null === e) throw r1(t);
            return c9(e) ? t.lanes = 32 : t.lanes = 0x20000000, null
        }
        return (o = i.children, i = i.fallback, a) ? (as(), o = sa({
            mode: "hidden",
            children: o
        }, a = t.mode), i = rP(i, a, n, null), o.return = t, i.return = t, o.sibling = i, t.child = o, (i = t.child).memoizedState = st(n), i.childLanes = sn(e, r, n), t.memoizedState = se, o1(null, i)) : (ai(t), si(t, o))
    }
    var s = e.memoizedState;
    if (null !== s) {
        var u = s.dehydrated;
        if (null !== u) {
            var c = e,
                d = t,
                f = o,
                p = r,
                h = i,
                m = u,
                g = s,
                v = n;
            if (f) return 256 & d.flags ? (ai(d), d.flags &= -257, so(c, d, v)) : null !== d.memoizedState ? (as(), d.child = c.child, d.flags |= 128, null) : (as(), m = h.fallback, g = d.mode, h = sa({
                mode: "visible",
                children: h.children
            }, g), m = rP(m, g, v, null), m.flags |= 2, h.return = d, m.return = d, h.sibling = m, d.child = h, iQ(d, c.child, null, v), (h = d.child).memoizedState = st(v), h.childLanes = sn(c, p, v), d.memoizedState = se, o1(null, h));
            if (ai(d), c9(m)) {
                if (p = m.nextSibling && m.nextSibling.dataset) var b = p.dgst;
                return "" !== (p = b) && ((h = Error(l(419))).stack = "", h.digest = p, r8({
                    value: h,
                    source: null,
                    stack: null
                })), so(c, d, v)
            }
            if (oK || io(c, d, v, !1), p = 0 != (v & c.childLanes), oK || p) {
                if (null !== i8.current) return so(c, d, v);
                if (null !== (p = lR) && 0 !== (h = eH(p, v)) && h !== g.retryLane) throw g.retryLane = h, ry(c, h), us(p, c, h), oG;
                return c8(m) || ub(), so(c, d, v)
            }
            return c8(m) ? (d.flags |= 192, d.child = c.child, null) : (c = g.treeContext, rX = c7(m.nextSibling), rK = d, rY = !0, rJ = null, rZ = !1, null !== c && rG(d, c), d = si(d, h.children), d.flags |= 0x8001000, d)
        }
    }
    return a ? (as(), a = i.fallback, o = t.mode, u = (s = e.child).sibling, (i = rx(s, {
        mode: "hidden",
        children: i.children
    })).subtreeFlags = 0x47f00000 & s.subtreeFlags, null !== u ? a = rx(u, a) : (a = rP(a, o, n, null), a.flags |= 2), a.return = t, i.return = t, i.sibling = a, t.child = i, o1(null, i), i = t.child, null === (a = e.child.memoizedState) ? a = st(n) : (null !== (o = a.cachePool) ? (s = ig._currentValue, o = o.parent !== s ? {
        parent: s,
        pool: s
    } : o) : o = iN(), a = {
        baseLanes: a.baseLanes | n,
        cachePool: o
    }), i.memoizedState = a, i.childLanes = sn(e, r, n), t.memoizedState = se, o1(e.child, i)) : (ai(t), e = (n = e.child).sibling, (n = rx(n, {
        mode: "visible",
        children: i.children
    })).return = t, n.sibling = null, null !== e && (null === (r = t.deletions) ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n)
}

function si(e, t) {
    return (t = sa({
        mode: "visible",
        children: t
    }, e.mode)).return = e, e.child = t
}

function sa(e, t) {
    return (e = rk(22, e, null, t)).lanes = 0, e
}

function so(e, t, n) {
    return iQ(t, e.child, null, n), e = si(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function ss(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    null !== r && (r.lanes |= t), ii(e.return, t, n)
}

function sl(e) {
    for (var t = null; null !== e;) {
        var n = e.alternate;
        null !== n && null === af(n) && (t = e), e = e.sibling
    }
    return t
}

function su(e, t, n, r, i, a) {
    var o = e.memoizedState;
    null === o ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
        treeForkCount: a
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a)
}

function sc(e) {
    var t = e.child;
    for (e.child = null; null !== t;) {
        var n = t.sibling;
        t.sibling = e.child, e.child = t, t = n
    }
}

function sd(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
    r = r.children;
    var o = au.current;
    if (128 & t.flags) return ac(t, o), null;
    var s = 0 != (2 & o);
    if (s ? (o = 1 & o | 2, t.flags |= 128) : o &= 1, ac(t, o), "backwards" === i && null !== e ? (sc(e), oX(e, t, r, n), sc(e)) : oX(e, t, r, n), r = rY ? rU : 0, !s && null !== e && 0 != (128 & e.flags)) e: for (e = t.child; null !== e;) {
        if (13 === e.tag) null !== e.memoizedState && ss(e, n, t);
        else if (19 === e.tag) ss(e, n, t);
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
    switch (i) {
        case "backwards":
            null === (n = sl(t.child)) ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null, sc(t)), su(t, !0, i, null, a, r);
            break;
        case "unstable_legacy-backwards":
            for (n = null, i = t.child, t.child = null; null !== i;) {
                if (null !== (e = i.alternate) && null === af(e)) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            su(t, !0, n, null, a, r);
            break;
        case "together":
            su(t, !1, null, null, void 0, r);
            break;
        case "independent":
            t.memoizedState = null;
            break;
        default:
            null === (n = sl(t.child)) ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), su(t, !1, i, n, a, r)
    }
    return t.child
}

function sf(e, t, n) {
    var r = t.pendingProps;
    return it(t, t.type, r.value), oX(e, t, r.children, n), t.child
}

function sp(e, t, n) {
    if (null !== e && (t.dependencies = e.dependencies), lH |= t.lanes, 0 == (n & t.childLanes)) {
        if (null === e) return null;
        else if (io(e, t, n, !1), 0 == (n & t.childLanes)) return null
    }
    if (null !== e && t.child !== e.child) throw Error(l(153));
    if (null !== t.child) {
        for (n = rx(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = rx(e, e.pendingProps)).return = t;
        n.sibling = null
    }
    return t.child
}

function sh(e, t) {
    return 0 != (e.lanes & t) || !!(null !== (e = e.dependencies) && is(e))
}

function sm(e, t, n) {
    if (null !== e)
        if (e.memoizedProps !== t.pendingProps) oK = !0;
        else {
            if (!sh(e, n) && 0 == (128 & t.flags)) return oK = !1,
                function(e, t, n) {
                    switch (t.tag) {
                        case 3:
                            eo(t, t.stateNode.containerInfo), it(t, ig, e.memoizedState.cache), r5();
                            break;
                        case 27:
                        case 5:
                            el(t);
                            break;
                        case 4:
                            eo(t, t.stateNode.containerInfo);
                            break;
                        case 10:
                            it(t, t.type, t.memoizedProps.value);
                            break;
                        case 31:
                            if (null !== t.memoizedState) return t.flags |= 128, aa(t), null;
                            break;
                        case 13:
                            var r = t.memoizedState;
                            if (null !== r) {
                                if (null !== r.dehydrated) return ai(t), t.flags |= 128, null;
                                r = io(e, t, n, !1);
                                var i = t.child.childLanes;
                                if (r || 0 != (n & i)) return sr(e, t, n);
                                return ai(t), null !== (e = sp(e, t, n)) ? e.sibling : null
                            }
                            ai(t);
                            break;
                        case 19:
                            if (128 & t.flags) return sd(e, t, n);
                            if (i = 0 != (128 & e.flags), (r = 0 != (n & t.childLanes)) || (io(e, t, n, !1), r = 0 != (n & t.childLanes)), i) {
                                if (r) return sd(e, t, n);
                                t.flags |= 128
                            }
                            if (null !== (i = t.memoizedState) && (i.rendering = null, i.tail = null, i.lastEffect = null), ac(t, au.current), !r) return null;
                            break;
                        case 22:
                            return t.lanes = 0, o0(e, t, n, t.pendingProps);
                        case 24:
                            it(t, ig, e.memoizedState.cache)
                    }
                    return sp(e, t, n)
                }(e, t, n);
            oK = 0 != (131072 & e.flags)
        }
    else oK = !1, rY && 0 != (1048576 & t.flags) && rV(t, rU, t.index);
    switch (t.lanes = 0, t.tag) {
        case 16:
            e: {
                var r = t.pendingProps;
                if (e = iz(t.elementType), t.type = e, "function" == typeof e) rT(e) ? (r = oj(e, r), t.tag = 1, t = o9(null, t, e, r, n)) : (t.tag = 0, t = o6(null, t, e, r, n));
                else {
                    if (null != e) {
                        var i = e.$$typeof;
                        if (i === I) {
                            t.tag = 11, t = oY(null, t, e, r, n);
                            break e
                        }
                        if (i === z) {
                            t.tag = 14, t = oJ(null, t, e, r, n);
                            break e
                        }
                        if (i === R) {
                            t.tag = 10, t.type = e, t = sf(null, t, n);
                            break e
                        }
                    }
                    throw Error(l(306, t = function e(t) {
                        if (null == t) return null;
                        if ("function" == typeof t) return t.$$typeof === W ? null : t.displayName || t.name || null;
                        if ("string" == typeof t) return t;
                        switch (t) {
                            case P:
                                return "Fragment";
                            case A:
                                return "Profiler";
                            case N:
                                return "StrictMode";
                            case M:
                                return "Suspense";
                            case D:
                                return "SuspenseList";
                            case j:
                                return "Activity";
                            case B:
                                return "ViewTransition"
                        }
                        if ("object" == typeof t) switch (t.$$typeof) {
                            case O:
                                return "Portal";
                            case R:
                                return t.displayName || "Context";
                            case L:
                                return (t._context.displayName || "Context") + ".Consumer";
                            case I:
                                var n = t.render;
                                return (t = t.displayName) || (t = "" !== (t = n.displayName || n.name || "") ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
                            case z:
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
            return o6(e, t, t.type, t.pendingProps, n);
        case 1:
            return i = oj(r = t.type, t.pendingProps), o9(e, t, r, i, n);
        case 3:
            e: {
                if (eo(t, t.stateNode.containerInfo), null === e) throw Error(l(387));r = t.pendingProps;
                var a = t.memoizedState;i = a.element,
                iY(e, t),
                i4(t, r, null, n);
                var o = t.memoizedState;
                if (it(t, ig, r = o.cache), r !== a.cache && ia(t, [ig], n, !0), i3(), r = o.element, a.isDehydrated)
                    if (a = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache
                        }, t.updateQueue.baseState = a, t.memoizedState = a, 256 & t.flags) {
                        t = o7(e, t, r, n);
                        break e
                    } else if (r !== i) {
                    r8(i = rI(Error(l(424)), t)), t = o7(e, t, r, n);
                    break e
                } else
                    for (rX = c7((e = 9 === (e = t.stateNode.containerInfo).nodeType ? e.body : "HTML" === e.nodeName ? e.ownerDocument.body : e).firstChild), rK = t, rY = !0, rJ = null, rZ = !0, n = iG(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 0x8001000, n = n.sibling;
                else {
                    if (r5(), r === i) {
                        t = sp(e, t, n);
                        break e
                    }
                    oX(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 26:
            return o5(e, t), null === e ? (n = dp(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : rY || (t.stateNode = c_(t.type, t.pendingProps, ei.current, t)) : t.memoizedState = dp(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
        case 27:
            return el(t), null === e && rY && (r = t.stateNode = dr(t.type, t.pendingProps, ei.current), rK = t, rZ = !0, i = rX, cN(t.type) ? (de = i, rX = c7(r.firstChild)) : rX = i), oX(e, t, t.pendingProps.children, n), o5(e, t), null === e && (t.flags |= 4194304), t.child;
        case 5:
            return null === e && rY && ((i = r = rX) && (null !== (r = function(e, t, n, r) {
                for (; 1 === e.nodeType;) {
                    if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                        if (!r && ("INPUT" !== e.nodeName || "hidden" !== e.type)) break
                    } else if (r) {
                        if (!e[e2]) switch (t) {
                            case "meta":
                                if (!e.hasAttribute("itemprop")) break;
                                return e;
                            case "link":
                                if ("stylesheet" === (i = e.getAttribute("rel")) && e.hasAttribute("data-precedence") || i !== n.rel || e.getAttribute("href") !== (null == n.href || "" === n.href ? null : n.href) || e.getAttribute("crossorigin") !== (null == n.crossOrigin ? null : n.crossOrigin) || e.getAttribute("title") !== (null == n.title ? null : n.title)) break;
                                return e;
                            case "style":
                                if (e.hasAttribute("data-precedence")) break;
                                return e;
                            case "script":
                                if (((i = e.getAttribute("src")) !== (null == n.src ? null : n.src) || e.getAttribute("type") !== (null == n.type ? null : n.type) || e.getAttribute("crossorigin") !== (null == n.crossOrigin ? null : n.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                                return e;
                            default:
                                return e
                        }
                    } else {
                        if ("input" !== t || "hidden" !== e.type) return e;
                        var i = null == n.name ? null : "" + n.name;
                        if ("hidden" === n.type && e.getAttribute("name") === i) return e
                    }
                    if (null === (e = c7(e.nextSibling))) break
                }
                return null
            }(r, t.type, t.pendingProps, rZ)) ? (t.stateNode = r, rK = t, rX = c7(r.firstChild), rZ = !1, i = !0) : i = !1), i || r1(t)), el(t), i = t.type, a = t.pendingProps, o = null !== e ? e.memoizedProps : null, r = a.children, cS(i, a) ? r = null : null !== o && cS(i, o) && (t.flags |= 32), null !== t.memoizedState && (dz._currentValue = i = ax(e, t, aP, null, null, n)), o5(e, t), oX(e, t, r, n), t.child;
        case 6:
            return null === e && rY && ((e = n = rX) && (null !== (n = function(e, t, n) {
                if ("" === t) return null;
                for (; 3 !== e.nodeType;)
                    if ((1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) && !n || null === (e = c7(e.nextSibling))) return null;
                return e
            }(n, t.pendingProps, rZ)) ? (t.stateNode = n, rK = t, rX = null, e = !0) : e = !1), e || r1(t)), null;
        case 13:
            return sr(e, t, n);
        case 4:
            return eo(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = iQ(t, null, r, n) : oX(e, t, r, n), t.child;
        case 11:
            return oY(e, t, t.type, t.pendingProps, n);
        case 7:
            return r = t.pendingProps, o5(e, t), oX(e, t, r, n), t.child;
        case 8:
        case 12:
            return oX(e, t, t.pendingProps.children, n), t.child;
        case 10:
            return sf(e, t, n);
        case 9:
            return i = t.type._context, r = t.pendingProps.children, il(t), r = r(i = iu(i)), t.flags |= 1, oX(e, t, r, n), t.child;
        case 14:
            return oJ(e, t, t.type, t.pendingProps, n);
        case 15:
            return oZ(e, t, t.type, t.pendingProps, n);
        case 19:
            return sd(e, t, n);
        case 31:
            var s = e,
                u = t,
                c = n,
                d = u.pendingProps,
                f = 0 != (128 & u.flags);
            if (u.flags &= -129, null === s) {
                if (rY) {
                    if ("hidden" === d.mode) return s = o3(u, d), u.lanes = 0x20000000, s.memoizedState = {
                        baseLanes: 0,
                        cachePool: null
                    }, o1(null, s);
                    if (aa(u), (s = rX) ? null !== (s = null !== (s = c6(s, rZ)) && "&" === s.data ? s : null) && (u.memoizedState = {
                            dehydrated: s,
                            treeContext: null !== r$ ? {
                                id: rB,
                                overflow: rH
                            } : null,
                            retryLane: 0x20000000,
                            hydrationErrors: null
                        }, (c = rA(s)).return = u, u.child = c, rK = u, rX = null) : s = null, null === s) throw r1(u);
                    return u.lanes = 0x20000000, null
                }
                return o3(u, d)
            }
            var p = s.memoizedState;
            if (null !== p) {
                var h = p.dehydrated;
                if (aa(u), f)
                    if (256 & u.flags) u.flags &= -257, u = o4(s, u, c);
                    else if (null !== u.memoizedState) u.child = s.child, u.flags |= 128, u = null;
                else throw Error(l(558));
                else if (oK || io(s, u, c, !1), f = 0 != (c & s.childLanes), oK || f) {
                    if (null === i8.current) {
                        if (null !== (d = lR) && 0 !== (h = eH(d, c)) && h !== p.retryLane) throw p.retryLane = h, ry(s, h), us(d, s, h), oG;
                        ub()
                    }
                    u = o4(s, u, c)
                } else s = p.treeContext, rX = c7(h.nextSibling), rK = u, rY = !0, rJ = null, rZ = !1, null !== s && rG(u, s), u = o3(u, d), u.flags |= 0x8001000;
                return u
            }
            return (s = rx(s.child, {
                mode: d.mode,
                children: d.children
            })).ref = u.ref, u.child = s, s.return = u, s;
        case 22:
            return o0(e, t, n, t.pendingProps);
        case 24:
            return il(t), r = iu(ig), null === e ? (null === (i = iO()) && (i = lR, a = iv(), i.pooledCache = a, a.refCount++, null !== a && (i.pooledCacheLanes |= n), i = a), t.memoizedState = {
                parent: r,
                cache: i
            }, iX(t), it(t, ig, i)) : (0 != (e.lanes & n) && (iY(e, t), i4(t, null, null, n), i3()), i = e.memoizedState, a = t.memoizedState, i.parent !== r ? (i = {
                parent: r,
                cache: r
            }, t.memoizedState = i, 0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = i), it(t, ig, r)) : (it(t, ig, r = a.cache), r !== i.cache && ia(t, [ig], n, !0))), oX(e, t, t.pendingProps.children, n), t.child;
        case 30:
            return null === t.stateNode && (t.stateNode = {
                autoName: null,
                paired: null,
                clones: null,
                ref: null
            }), null != (r = t.pendingProps).name && "auto" !== r.name ? t.flags |= null === e ? 0x1202000 : 0x1200000 : rY && rW(t), null !== e && e.memoizedProps.name !== r.name ? t.flags |= 4194816 : o5(e, t), oX(e, t, r.children, n), t.child;
        case 29:
            throw t.pendingProps
    }
    throw Error(l(156, t.tag))
}

function sg(e) {
    e.flags |= 4
}

function sv(e, t, n, r, i) {
    var a;
    if ((a = 0 != (32 & e.mode)) && (a = null === n ? dx(t, r) : dx(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet)), a) {
        if (e.flags |= 0x1000000, (0x13ffff40 & i) === i)
            if (e.stateNode.complete) e.flags |= 8192;
            else if (um()) e.flags |= 8192;
        else throw iU = iI, iL
    } else e.flags &= -0x1000001
}

function sb(e, t) {
    if ("stylesheet" !== t.type || 0 != (4 & t.state.loading)) e.flags &= -0x1000001;
    else if (e.flags |= 0x1000000, !dC(t))
        if (um()) e.flags |= 8192;
        else throw iU = iI, iL
}

function sy(e, t) {
    null !== t && (e.flags |= 4), 16384 & e.flags && (t = 22 !== e.tag ? eU() : 0x20000000, e.lanes |= t, lQ |= t)
}

function sw(e, t) {
    if (!rY) switch (e.tailMode) {
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

function s_(e) {
    var t = null !== e.alternate && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; null !== i;) n |= i.lanes | i.childLanes, r |= 0x47f00000 & i.subtreeFlags, r |= 0x47f00000 & i.flags, i.return = e, i = i.sibling;
    else
        for (i = e.child; null !== i;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function sS(e, t) {
    switch (rQ(t), t.tag) {
        case 3:
            ir(ig), es();
            break;
        case 26:
        case 27:
        case 5:
            eu(t);
            break;
        case 4:
            es();
            break;
        case 31:
            null !== t.memoizedState && al(t);
            break;
        case 13:
            al(t);
            break;
        case 19:
            ad(t);
            break;
        case 10:
            ir(t.type);
            break;
        case 22:
        case 23:
            al(t), at(), null !== e && ee(iC);
            break;
        case 24:
            ir(ig)
    }
}

function sE(e, t) {
    try {
        var n = t.updateQueue,
            r = null !== n ? n.lastEffect : null;
        if (null !== r) {
            var i = r.next;
            n = i;
            do {
                if ((n.tag & e) === e) {
                    r = void 0;
                    var a = n.create;
                    n.inst.destroy = r = a()
                }
                n = n.next
            } while (n !== i)
        }
    } catch (e) {
        uM(t, t.return, e)
    }
}

function sk(e, t, n) {
    try {
        var r = t.updateQueue,
            i = null !== r ? r.lastEffect : null;
        if (null !== i) {
            var a = i.next;
            r = a;
            do {
                if ((r.tag & e) === e) {
                    var o = r.inst,
                        s = o.destroy;
                    if (void 0 !== s) {
                        o.destroy = void 0, i = t;
                        try {
                            s()
                        } catch (e) {
                            uM(i, n, e)
                        }
                    }
                }
                r = r.next
            } while (r !== a)
        }
    } catch (e) {
        uM(t, t.return, e)
    }
}

function sT(e) {
    var t = e.updateQueue;
    if (null !== t) {
        var n = e.stateNode;
        try {
            i6(t, n)
        } catch (t) {
            uM(e, e.return, t)
        }
    }
}

function sx(e, t, n) {
    n.props = oj(e.type, e.memoizedProps), n.state = e.memoizedState;
    try {
        n.componentWillUnmount()
    } catch (n) {
        uM(e, t, n)
    }
}

function sC(e, t) {
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
                    var i = e.stateNode,
                        a = ru(e.memoizedProps, i);
                    (null === i.ref || i.ref.name !== a) && (i.ref = cF(a)), r = i.ref;
                    break;
                case 7:
                    if (null === e.stateNode) {
                        var o = new c$(e);
                        h(e.child, !1, c2, o, void 0, void 0), e.stateNode = o
                    }
                    r = e.stateNode;
                    break;
                default:
                    r = e.stateNode
            }
            "function" == typeof n ? e.refCleanup = n(r) : n.current = r
        }
    } catch (n) {
        uM(e, t, n)
    }
}

function sO(e, t) {
    var n = e.ref,
        r = e.refCleanup;
    if (null !== n)
        if ("function" == typeof r) try {
            r()
        } catch (n) {
            uM(e, t, n)
        } finally {
            e.refCleanup = null, null != (e = e.alternate) && (e.refCleanup = null)
        } else if ("function" == typeof n) try {
            n(null)
        } catch (n) {
            uM(e, t, n)
        } else n.current = null
}

function sP(e, t) {
    if ((5 === e.tag || 27 === e.tag || 6 === e.tag) && null === e.alternate && null !== t)
        for (var n = 0; n < t.length; n++) c4(e.stateNode, t[n])
}

function sN(e) {
    for (var t = e.return; null !== t && (sR(t) && c4(e.stateNode, t.stateNode), !sL(t));) t = t.return
}

function sA(e) {
    for (var t = e.return; null !== t && (sR(t) && function(e, t) {
            var n = t._eventListeners;
            if (null !== n)
                for (var r = 0; r < n.length; r++) {
                    var i = n[r];
                    e.removeEventListener(i.type, i.attachedListener, cq(i.optionsOrUseCapture))
                }
            3 !== e.nodeType && (null !== (n = t._observers) && n.forEach(function(n) {
                "string" == typeof n.rootMargin ? (cJ.push({
                    fragmentInstance: t,
                    observer: n,
                    instance: e
                }), cZ || (cZ = !0, function(e) {
                    cC(function() {
                        cC(function(t) {
                            return e(t)
                        })
                    })
                }(function() {
                    cZ = !1;
                    var e = cJ;
                    cJ = [];
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        n.observer.unobserve(n.instance)
                    }
                }))) : n.unobserve(e)
            }), null != e.reactFragments && e.reactFragments.delete(t))
        }(e.stateNode, t.stateNode), !sL(t));) t = t.return
}

function sL(e) {
    return 5 === e.tag || 3 === e.tag || 27 === e.tag
}

function sR(e) {
    return e && 7 === e.tag && null !== e.stateNode
}

function sI(e) {
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
        uM(e, e.return, t)
    }
}

function sM(e, t, n) {
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
                    var i = null,
                        a = null,
                        o = null,
                        s = null,
                        u = null,
                        c = null,
                        d = null;
                    for (h in n) {
                        var f = n[h];
                        if (n.hasOwnProperty(h) && null != f) switch (h) {
                            case "checked":
                            case "value":
                                break;
                            case "defaultValue":
                                u = f;
                            default:
                                r.hasOwnProperty(h) || cd(e, t, h, null, r, f)
                        }
                    }
                    for (var p in r) {
                        var h = r[p];
                        if (f = n[p], r.hasOwnProperty(p) && (null != h || null != f)) switch (p) {
                            case "type":
                                h !== f && (tl = !0), a = h;
                                break;
                            case "name":
                                h !== f && (tl = !0), i = h;
                                break;
                            case "checked":
                                h !== f && (tl = !0), c = h;
                                break;
                            case "defaultChecked":
                                h !== f && (tl = !0), d = h;
                                break;
                            case "value":
                                h !== f && (tl = !0), o = h;
                                break;
                            case "defaultValue":
                                h !== f && (tl = !0), s = h;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (null != h) throw Error(l(137, t));
                                break;
                            default:
                                h !== f && cd(e, t, p, h, r, f)
                        }
                    }
                    ty(e, o, s, u, c, d, a, i);
                    return;
                case "select":
                    for (a in h = o = s = p = null, n)
                        if (u = n[a], n.hasOwnProperty(a) && null != u) switch (a) {
                            case "value":
                                break;
                            case "multiple":
                                h = u;
                            default:
                                r.hasOwnProperty(a) || cd(e, t, a, null, r, u)
                        }
                    for (i in r)
                        if (a = r[i], u = n[i], r.hasOwnProperty(i) && (null != a || null != u)) switch (i) {
                            case "value":
                                a !== u && (tl = !0), p = a;
                                break;
                            case "defaultValue":
                                a !== u && (tl = !0), s = a;
                                break;
                            case "multiple":
                                a !== u && (tl = !0), o = a;
                            default:
                                a !== u && cd(e, t, i, a, r, u)
                        }
                    t = s, n = o, r = h, null != p ? tS(e, !!n, p, !1) : !!r != !!n && (null != t ? tS(e, !!n, t, !0) : tS(e, !!n, n ? [] : "", !1));
                    return;
                case "textarea":
                    for (s in h = p = null, n)
                        if (i = n[s], n.hasOwnProperty(s) && null != i && !r.hasOwnProperty(s)) switch (s) {
                            case "value":
                            case "children":
                                break;
                            default:
                                cd(e, t, s, null, r, i)
                        }
                    for (o in r)
                        if (i = r[o], a = n[o], r.hasOwnProperty(o) && (null != i || null != a)) switch (o) {
                            case "value":
                                i !== a && (tl = !0), p = i;
                                break;
                            case "defaultValue":
                                i !== a && (tl = !0), h = i;
                                break;
                            case "children":
                                break;
                            case "dangerouslySetInnerHTML":
                                if (null != i) throw Error(l(91));
                                break;
                            default:
                                i !== a && cd(e, t, o, i, r, a)
                        }
                    tE(e, p, h);
                    return;
                case "option":
                    for (var m in n) p = n[m], n.hasOwnProperty(m) && null != p && !r.hasOwnProperty(m) && ("selected" === m ? e.selected = !1 : cd(e, t, m, null, r, p));
                    for (u in r) p = r[u], h = n[u], r.hasOwnProperty(u) && p !== h && (null != p || null != h) && ("selected" === u ? (p !== h && (tl = !0), e.selected = p && "function" != typeof p && "symbol" != typeof p) : cd(e, t, u, p, r, h));
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
                    for (var g in n) p = n[g], n.hasOwnProperty(g) && null != p && !r.hasOwnProperty(g) && cd(e, t, g, null, r, p);
                    for (c in r)
                        if (p = r[c], h = n[c], r.hasOwnProperty(c) && p !== h && (null != p || null != h)) switch (c) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (null != p) throw Error(l(137, t));
                                break;
                            default:
                                cd(e, t, c, p, r, h)
                        }
                    return;
                default:
                    if (tP(t)) {
                        for (var v in n) p = n[v], n.hasOwnProperty(v) && void 0 !== p && !r.hasOwnProperty(v) && cf(e, t, v, void 0, r, p);
                        for (d in r) p = r[d], h = n[d], r.hasOwnProperty(d) && p !== h && (void 0 !== p || void 0 !== h) && cf(e, t, d, p, r, h);
                        return
                    }
            }
            for (var b in n) p = n[b], n.hasOwnProperty(b) && null != p && !r.hasOwnProperty(b) && cd(e, t, b, null, r, p);
            for (f in r) p = r[f], h = n[f], r.hasOwnProperty(f) && p !== h && (null != p || null != h) && cd(e, t, f, p, r, h)
        })(r, e.type, n, t), r[eX] = t
    } catch (t) {
        uM(e, e.return, t)
    }
}

function sD(e) {
    return 5 === e.tag || 3 === e.tag || 26 === e.tag || 27 === e.tag && cN(e.type) || 4 === e.tag
}

function sz(e) {
    e: for (;;) {
        for (; null === e.sibling;) {
            if (null === e.return || sD(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
            if (27 === e.tag && cN(e.type) || 2 & e.flags || null === e.child || 4 === e.tag) continue e;
            e.child.return = e, e = e.child
        }
        if (!(2 & e.flags)) return e.stateNode
    }
}

function sU(e, t, n, r) {
    var i = e.tag;
    if (5 === i || 6 === i) i = e.stateNode, t ? n.insertBefore(i, t) : n.appendChild(i), sP(e, r), tl = !0;
    else if (4 !== i && (27 === i && (sP(e, r), r = null, cN(e.type) && (n = e.stateNode)), null !== (e = e.child)))
        for (sU(e, t, n, r), e = e.sibling; null !== e;) sU(e, t, n, r), e = e.sibling
}

function sj(e) {
    var t = e.stateNode,
        n = e.memoizedProps;
    try {
        for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
        cp(t, r, n), t[eK] = e, t[eX] = n
    } catch (t) {
        uM(e, e.return, t)
    }
}
var sF = !1,
    s$ = null;

function sB(e) {
    (30 === e.tag || 0 != (0x2000000 & e.subtreeFlags)) && (sF = !0)
}
var sH = null;

function sq() {
    var e = sH;
    return sH = null, e
}
var sV = 0;

function sW(e, t, n, r, i) {
    return sV = 0,
        function e(t, n, r, i, a) {
            for (var o = !1; null !== t;) {
                if (5 === t.tag) {
                    var s = t.stateNode;
                    if (null !== i) {
                        var l = cD(s);
                        i.push(l), l.view && (o = !0)
                    } else o || cD(s).view && (o = !0);
                    sF = !0, cR(s, 0 === sV ? n : n + "_" + sV, r), sV++
                } else(22 !== t.tag || null === t.memoizedState) && (30 === t.tag && a || e(t.child, n, r, i, a) && (o = !0));
                t = t.sibling
            }
            return o
        }(e.child, t, n, r, i)
}

function sQ(e, t) {
    for (; null !== e;) 5 === e.tag ? cI(e.stateNode, e.memoizedProps) : (22 !== e.tag || null === e.memoizedState) && (30 === e.tag && t || sQ(e.child, t)), e = e.sibling
}

function sG(e) {
    if (0 != (0x1200000 & e.subtreeFlags))
        for (e = e.child; null !== e;) {
            if ((22 !== e.tag || null === e.memoizedState) && (sG(e), 30 === e.tag && 0 != (0x1200000 & e.flags) && e.stateNode.paired)) {
                var t = e.memoizedProps;
                if (null == t.name || "auto" === t.name) throw Error(l(544));
                var n = t.name;
                "none" !== (t = rd(t.default, t.share)) && (sW(e, n, t, null, !1) || sQ(e.child, !1))
            }
            e = e.sibling
        }
}

function sK(e, t) {
    if (30 === e.tag) {
        var n = e.stateNode,
            r = e.memoizedProps,
            i = ru(r, n),
            a = rd(r.default, n.paired ? r.share : r.enter);
        "none" !== a ? sW(e, i, a, null, !1) ? (sG(e), n.paired || t || uo(e, r.onEnter)) : sQ(e.child, !1) : sG(e)
    } else if (0 != (0x2000000 & e.subtreeFlags))
        for (e = e.child; null !== e;) sK(e, t), e = e.sibling;
    else sG(e)
}

function sX(e) {
    if (null !== s$ && 0 !== s$.size) {
        var t = s$;
        if (0 != (0x1200000 & e.subtreeFlags))
            for (e = e.child; null !== e;) {
                if (22 !== e.tag || null === e.memoizedState) {
                    if (30 === e.tag && 0 != (0x1200000 & e.flags)) {
                        var n = e.memoizedProps,
                            r = n.name;
                        if (null != r && "auto" !== r) {
                            var i = t.get(r);
                            if (void 0 !== i) {
                                var a = rd(n.default, n.share);
                                if ("none" !== a && (sW(e, r, a, null, !1) ? (i.paired = a = e.stateNode, a.paired = i, uo(e, n.onShare)) : sQ(e.child, !1)), t.delete(r), 0 === t.size) break
                            }
                        }
                    }
                    sX(e)
                }
                e = e.sibling
            }
    }
}

function sY(e) {
    if (30 === e.tag) {
        var t = e.memoizedProps,
            n = ru(t, e.stateNode),
            r = null !== s$ ? s$.get(n) : void 0,
            i = rd(t.default, void 0 !== r ? t.share : t.exit);
        "none" !== i && (sW(e, n, i, null, !1) ? void 0 !== r ? (r.paired = i = e.stateNode, i.paired = r, s$.delete(n), uo(e, t.onShare)) : uo(e, t.onExit) : sQ(e.child, !1)), null !== s$ && sX(e)
    } else if (0 != (0x2000000 & e.subtreeFlags))
        for (e = e.child; null !== e;) sY(e), e = e.sibling;
    else null !== s$ && sX(e)
}

function sJ(e) {
    if (0 != (0x1200000 & e.subtreeFlags))
        for (e = e.child; null !== e;) {
            if (22 !== e.tag || null === e.memoizedState) {
                if (30 === e.tag && 0 != (0x1200000 & e.flags)) {
                    var t = e.stateNode;
                    null !== t.paired && (t.paired = null, sQ(e.child, !1))
                }
                sJ(e)
            }
            e = e.sibling
        }
}

function sZ(e) {
    if (30 === e.tag) e.stateNode.paired = null, sQ(e.child, !1), sJ(e);
    else if (0 != (0x2000000 & e.subtreeFlags))
        for (e = e.child; null !== e;) sZ(e), e = e.sibling;
    else sJ(e)
}

function s0(e, t, n, r, i, a, o) {
    for (var s = !1; null !== t;) {
        if (5 === t.tag) {
            var l = t.stateNode;
            if (null !== a && sV < a.length) {
                var u, c = a[sV],
                    d = cD(l);
                if ((c.view || d.view) && (s = !0), u = 0 == (4 & e.flags))
                    if (d.clip) u = !0;
                    else {
                        u = c.rect;
                        var f = d.rect;
                        u = u.y !== f.y || u.x !== f.x || u.height !== f.height || u.width !== f.width
                    } u && (e.flags |= 4), d.abs ? d = !c.abs : (c = c.rect, d = d.rect, d = c.height !== d.height || c.width !== d.width), d && (e.flags |= 32)
            } else e.flags |= 32;
            0 != (4 & e.flags) && cR(l, 0 === sV ? n : n + "_" + sV, i), s && 0 != (4 & e.flags) || (null === sH && (sH = []), sH.push(l, 0 === sV ? r : r + "_" + sV, t.memoizedProps)), sV++
        } else(22 !== t.tag || null === t.memoizedState) && (30 === t.tag && o ? e.flags |= 32 & t.flags : s0(e, t.child, n, r, i, a, o) && (s = !0));
        t = t.sibling
    }
    return s
}
var s1 = !1,
    s2 = !1,
    s3 = !1,
    s4 = !1,
    s5 = "function" == typeof WeakSet ? WeakSet : Set,
    s6 = null,
    s8 = !1,
    s9 = !1,
    s7 = !1,
    le = !1;

function lt(e) {
    for (; null !== s6;) {
        var t = s6,
            n = e,
            r = t.alternate,
            i = t.flags;
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
                if (0 != (1024 & i) && null !== r) {
                    n = void 0, i = r.memoizedProps, r = r.memoizedState;
                    var a = t.stateNode;
                    try {
                        var o = oj(t.type, i);
                        n = a.getSnapshotBeforeUpdate(o, r), a.__reactInternalSnapshotBeforeUpdate = n
                    } catch (e) {
                        uM(t, t.return, e)
                    }
                }
                break;
            case 3:
                if (0 != (1024 & i)) {
                    if (9 === (n = (r = t.stateNode.containerInfo).nodeType)) c5(r);
                    else if (1 === n) switch (r.nodeName) {
                        case "HEAD":
                        case "HTML":
                        case "BODY":
                            c5(r);
                            break;
                        default:
                            r.textContent = ""
                    }
                }
                break;
            case 30:
                n && null !== r && (n = ru(r.memoizedProps, r.stateNode), "none" !== (i = rd((i = t.memoizedProps).default, i.update)) && sW(r, n, i, r.memoizedState = [], !0));
                break;
            default:
                if (0 != (1024 & i)) throw Error(l(163))
        }
        if (null !== (r = t.sibling)) {
            r.return = t.return, s6 = r;
            break
        }
        s6 = t.return
    }
}

function ln(e, t, n) {
    var r = n.flags;
    switch (n.tag) {
        case 0:
        case 11:
        case 15:
            lv(e, n), 4 & r && sE(5, n);
            break;
        case 1:
            if (lv(e, n), 4 & r)
                if (e = n.stateNode, null === t) try {
                    e.componentDidMount()
                } catch (e) {
                    uM(n, n.return, e)
                } else {
                    var i = oj(n.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (e) {
                        uM(n, n.return, e)
                    }
                }
            64 & r && sT(n), 512 & r && sC(n, n.return);
            break;
        case 3:
            if (lv(e, n), 64 & r && null !== (e = n.updateQueue)) {
                if (t = null, null !== n.child) switch (n.child.tag) {
                    case 27:
                    case 5:
                    case 1:
                        t = n.child.stateNode
                }
                try {
                    i6(e, t)
                } catch (e) {
                    uM(n, n.return, e)
                }
            }
            break;
        case 27:
            null === t && 4 & r && sj(n);
        case 26:
        case 5:
            lv(e, n), null === t && 4 & r && sI(n), 512 & r && sC(n, n.return);
            break;
        case 12:
            lv(e, n);
            break;
        case 31:
            lv(e, n), 4 & r && ll(e, n);
            break;
        case 13:
            lv(e, n), 4 & r && lu(e, n), 64 & r && null !== (e = n.memoizedState) && null !== (e = e.dehydrated) && function(e, t) {
                var n = e.ownerDocument;
                if ("$~" === e.data) e._reactRetry = t;
                else if ("$?" !== e.data || "loading" !== n.readyState) t();
                else {
                    var r = function() {
                        t(), n.removeEventListener("DOMContentLoaded", r)
                    };
                    n.addEventListener("DOMContentLoaded", r), e._reactRetry = r
                }
            }(e, n = uj.bind(null, n));
            break;
        case 22:
            if (!(r = null !== n.memoizedState || s1)) {
                var a = null !== t && null !== t.memoizedState || s2;
                t = s1, i = s2, s1 = r, (s2 = a) && !i ? (r = 2, 0 != (8772 & n.subtreeFlags) && (r |= 1), function e(t, n, r) {
                    for (r = 0 != (8772 & n.subtreeFlags) ? r : -2 & r, n = n.child; null !== n;) {
                        var i = n.alternate,
                            a = t,
                            o = n,
                            s = o.flags,
                            l = 0 != (1 & r);
                        switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                e(a, o, r), sE(4, o);
                                break;
                            case 1:
                                if (e(a, o, r), "function" == typeof(a = (i = o).stateNode).componentDidMount) try {
                                    a.componentDidMount()
                                } catch (e) {
                                    uM(i, i.return, e)
                                }
                                if (null !== (a = (i = o).updateQueue)) {
                                    var u = i.stateNode;
                                    try {
                                        var c = a.shared.hiddenCallbacks;
                                        if (null !== c)
                                            for (a.shared.hiddenCallbacks = null, a = 0; a < c.length; a++) i5(c[a], u)
                                    } catch (e) {
                                        uM(i, i.return, e)
                                    }
                                }
                                l && 64 & s && sT(o), sC(o, o.return);
                                break;
                            case 27:
                                0 != (2 & r) && sj(o);
                            case 5:
                                5 !== o.tag && 27 !== o.tag || sN(o), e(a, o, r), l && null === i && 4 & s && sI(o), sC(o, o.return);
                                break;
                            case 6:
                                sN(o);
                                break;
                            case 26:
                                u = o.stateNode, null !== o.memoizedState || null === u || s1 || dT(du(u.ownerDocument), o.type, u), e(a, o, r), l && null === i && 4 & s && sI(o), sC(o, o.return);
                                break;
                            case 12:
                                e(a, o, r);
                                break;
                            case 31:
                                e(a, o, r), l && 4 & s && ll(a, o);
                                break;
                            case 13:
                                e(a, o, r), l && 4 & s && lu(a, o);
                                break;
                            case 22:
                                null === o.memoizedState && e(a, o, r), sC(o, o.return);
                                break;
                            case 30:
                                e(a, o, r), sC(o, o.return);
                                break;
                            case 7:
                                sC(o, o.return);
                            default:
                                e(a, o, r)
                        }
                        n = n.sibling
                    }
                }(e, n, r)) : lv(e, n), s1 = t, s2 = i
            }
            break;
        case 30:
            lv(e, n), 512 & r && sC(n, n.return);
            break;
        case 7:
            512 & r && sC(n, n.return);
        default:
            lv(e, n)
    }
}

function lr(e, t) {
    for (e = e.child; null !== e;)(function e(t, n) {
        switch (t.tag) {
            case 5:
            case 26:
                try {
                    var r = t.stateNode;
                    if (n) {
                        var i = r.style;
                        "function" == typeof i.setProperty ? i.setProperty("display", "none", "important") : i.display = "none"
                    } else {
                        var a = t.stateNode,
                            o = t.memoizedProps.style,
                            s = null != o && o.hasOwnProperty("display") ? o.display : null;
                        a.style.display = null == s || "boolean" == typeof s ? "" : ("" + s).trim()
                    }
                } catch (e) {
                    uM(t, t.return, e)
                }! function t(n, r) {
                    if (0x4000000 & n.subtreeFlags)
                        for (n = n.child; null !== n;) {
                            e: {
                                var i = n;
                                switch (i.tag) {
                                    case 4:
                                        e(i, r);
                                        break e;
                                    case 22:
                                        null === i.memoizedState && t(i, r);
                                        break e;
                                    default:
                                        t(i, r)
                                }
                            }
                            n = n.sibling
                        }
                }(t, n);
                break;
            case 6:
                try {
                    t.stateNode.nodeValue = n ? "" : t.memoizedProps, tl = !0
                } catch (e) {
                    uM(t, t.return, e)
                }
                break;
            case 18:
                try {
                    var l = t.stateNode;
                    n ? cL(l, !0) : cL(t.stateNode, !1)
                } catch (e) {
                    uM(t, t.return, e)
                }
                break;
            case 22:
            case 23:
                null === t.memoizedState && lr(t, n);
                break;
            default:
                lr(t, n)
        }
    })(e, t), e = e.sibling
}
var li = null,
    la = !1;

function lo(e, t, n) {
    for (n = n.child; null !== n;) ls(e, t, n), n = n.sibling
}

function ls(e, t, n) {
    if (eC && "function" == typeof eC.onCommitFiberUnmount) try {
        eC.onCommitFiberUnmount(ex, n)
    } catch (e) {}
    switch (n.tag) {
        case 26:
            s2 || sO(n, t), lo(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !s2 && (n = n.stateNode).parentNode.removeChild(n);
            break;
        case 27:
            s2 || sO(n, t), sA(n);
            var r = li,
                i = la;
            cN(n.type) && (li = n.stateNode, la = !1), lo(e, t, n), di(n.stateNode, n.type, n.memoizedProps), li = r, la = i;
            break;
        case 5:
            s2 || sO(n, t), sA(n);
        case 6:
            if (6 === n.tag && sA(n), r = li, i = la, li = null, lo(e, t, n), li = r, la = i, null !== li)
                if (la) try {
                    (9 === li.nodeType ? li.body : "HTML" === li.nodeName ? li.ownerDocument.body : li).removeChild(n.stateNode), tl = !0
                } catch (e) {
                    uM(n, t, e)
                } else try {
                    li.removeChild(n.stateNode), tl = !0
                } catch (e) {
                    uM(n, t, e)
                }
            break;
        case 18:
            null !== li && (la ? (cA(9 === (e = li).nodeType ? e.body : "HTML" === e.nodeName ? e.ownerDocument.body : e, n.stateNode), fo(e)) : cA(li, n.stateNode));
            break;
        case 4:
            r = li, i = la, li = n.stateNode.containerInfo, la = !0, lo(e, t, n), li = r, la = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            sk(2, n, t), s2 || sk(4, n, t), lo(e, t, n);
            break;
        case 1:
            s2 || (sO(n, t), "function" == typeof(r = n.stateNode).componentWillUnmount && sx(n, t, r)), lo(e, t, n);
            break;
        case 21:
        default:
            lo(e, t, n);
            break;
        case 22:
            s2 = (r = s2) || null !== n.memoizedState, lo(e, t, n), s2 = r;
            break;
        case 30:
            sO(n, t), lo(e, t, n);
            break;
        case 7:
            s2 || sO(n, t), lo(e, t, n)
    }
}

function ll(e, t) {
    if (null === t.memoizedState && null !== (e = t.alternate) && null !== (e = e.memoizedState)) {
        e = e.dehydrated;
        try {
            fo(e)
        } catch (e) {
            uM(t, t.return, e)
        }
    }
}

function lu(e, t) {
    if (null === t.memoizedState && null !== (e = t.alternate) && null !== (e = e.memoizedState) && null !== (e = e.dehydrated)) try {
        fo(e)
    } catch (e) {
        uM(t, t.return, e)
    }
}

function lc(e, t) {
    var n = function(e) {
        switch (e.tag) {
            case 31:
            case 13:
            case 19:
                var t = e.stateNode;
                return null === t && (t = e.stateNode = new s5), t;
            case 22:
                return null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new s5), t;
            default:
                throw Error(l(435, e.tag))
        }
    }(e);
    t.forEach(function(t) {
        if (!n.has(t)) {
            n.add(t);
            var r = uF.bind(null, e, t);
            t.then(r, r)
        }
    })
}

function ld(e, t, n) {
    var r = t.deletions;
    if (null !== r)
        for (var i = 0; i < r.length; i++) {
            var a = r[i],
                o = e,
                s = t,
                u = s;
            e: for (; null !== u;) {
                switch (u.tag) {
                    case 27:
                        if (cN(u.type)) {
                            li = u.stateNode, la = !1;
                            break e
                        }
                        break;
                    case 5:
                        li = u.stateNode, la = !1;
                        break e;
                    case 3:
                    case 4:
                        li = u.stateNode.containerInfo, la = !0;
                        break e
                }
                u = u.return
            }
            if (null === li) throw Error(l(160));
            ls(o, s, a), li = null, la = !1, null !== (o = a.alternate) && (o.return = null), a.return = null
        }
    if (13886 & t.subtreeFlags)
        for (t = t.child; null !== t;) lp(t, e, n), t = t.sibling
}
var lf = null;

function lp(e, t, n) {
    var r = e.alternate,
        i = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (4 & i && null !== (r = null !== (r = e.updateQueue) ? r.events : null))
                for (var a = 0; a < r.length; a++) {
                    var o = r[a];
                    o.ref.impl = o.nextImpl
                }
            ld(t, e, n), lh(e), 4 & i && (sk(3, e, e.return), sE(3, e), sk(5, e, e.return));
            break;
        case 1:
            ld(t, e, n), lh(e), 512 & i && (s2 || null === r || sO(r, r.return)), 64 & i && s1 && null !== (e = e.updateQueue) && null !== (t = e.callbacks) && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = null === n ? t : n.concat(t));
            break;
        case 26:
            if (a = lf, ld(t, e, n), lh(e), 512 & i && (s2 || null === r || sO(r, r.return)), 4 & i)
                if (i = null !== r ? r.memoizedState : null, n = e.memoizedState, null === r)
                    if (null === n)
                        if (null === e.stateNode)
                            if (s1) e.stateNode = c_(e.type, e.memoizedProps, t.containerInfo, e);
                            else {
                                e: {
                                    t = e.type,
                                    n = e.memoizedProps,
                                    i = a.ownerDocument || a;t: switch (t) {
                                        case "title":
                                            (!(r = i.getElementsByTagName("title")[0]) || r[e2] || r[eK] || "http://www.w3.org/2000/svg" === r.namespaceURI || r.hasAttribute("itemprop")) && (r = i.createElement(t), i.head.insertBefore(r, i.querySelector("head > title"))), cp(r, t, n), r[eK] = e, e7(r), t = r;
                                            break e;
                                        case "link":
                                            if (a = dk("link", "href", i).get(t + (n.href || ""))) {
                                                for (o = 0; o < a.length; o++)
                                                    if ((r = a[o]).getAttribute("href") === (null == n.href || "" === n.href ? null : n.href) && r.getAttribute("rel") === (null == n.rel ? null : n.rel) && r.getAttribute("title") === (null == n.title ? null : n.title) && r.getAttribute("crossorigin") === (null == n.crossOrigin ? null : n.crossOrigin)) {
                                                        a.splice(o, 1);
                                                        break t
                                                    }
                                            }
                                            cp(r = i.createElement(t), t, n), i.head.appendChild(r);
                                            break;
                                        case "meta":
                                            if (a = dk("meta", "content", i).get(t + (n.content || ""))) {
                                                for (o = 0; o < a.length; o++)
                                                    if ((r = a[o]).getAttribute("content") === (null == n.content ? null : "" + n.content) && r.getAttribute("name") === (null == n.name ? null : n.name) && r.getAttribute("property") === (null == n.property ? null : n.property) && r.getAttribute("http-equiv") === (null == n.httpEquiv ? null : n.httpEquiv) && r.getAttribute("charset") === (null == n.charSet ? null : n.charSet)) {
                                                        a.splice(o, 1);
                                                        break t
                                                    }
                                            }
                                            cp(r = i.createElement(t), t, n), i.head.appendChild(r);
                                            break;
                                        default:
                                            throw Error(l(468, t))
                                    }
                                    r[eK] = e,
                                    e7(r),
                                    t = r
                                }
                                e.stateNode = t
                            }
            else s1 || dT(a, e.type, e.stateNode);
            else e.stateNode = dy(a, n, e.memoizedProps);
            else i !== n ? (null === i ? null === (t = r.stateNode) || s2 || t.parentNode.removeChild(t) : i.count--, null === n ? s1 || dT(a, e.type, e.stateNode) : dy(a, n, e.memoizedProps)) : null === n && null !== e.stateNode && sM(e, e.memoizedProps, r.memoizedProps);
            break;
        case 27:
            ld(t, e, n), lh(e), 512 & i && (s2 || null === r || sO(r, r.return)), null !== r && 4 & i && sM(e, e.memoizedProps, r.memoizedProps);
            break;
        case 5:
            if (a = s3, s3 = !1, ld(t, e, n), s3 = a, lh(e), 512 & i && (s2 || null === r || sO(r, r.return)), 32 & e.flags) {
                t = e.stateNode;
                try {
                    tT(t, ""), tl = !0
                } catch (t) {
                    uM(e, e.return, t)
                }
            }
            4 & i && null != e.stateNode && (t = e.memoizedProps, sM(e, t, null !== r ? r.memoizedProps : t)), 1024 & i && (s4 = !0);
            break;
        case 6:
            if (ld(t, e, n), lh(e), 4 & i) {
                if (null === e.stateNode) throw Error(l(162));
                t = e.memoizedProps, n = e.stateNode;
                try {
                    n.nodeValue = t, tl = !0
                } catch (t) {
                    uM(e, e.return, t)
                }
            }
            break;
        case 3:
            if (tl = !1, dE = null, a = lf, lf = du(t.containerInfo), ld(t, e, n), lf = a, lh(e), 4 & i && null !== r && r.memoizedState.isDehydrated) try {
                fo(t.containerInfo)
            } catch (t) {
                uM(e, e.return, t)
            }
            s4 && (s4 = !1, function e(t) {
                if (1024 & t.subtreeFlags)
                    for (t = t.child; null !== t;) {
                        var n = t;
                        e(n), 5 === n.tag && 1024 & n.flags && (n = n.stateNode, dV = !0, n.reset(), dV = !1), t = t.sibling
                    }
            }(e)), tl = !1;
            break;
        case 4:
            i = s3, s3 = s1, r = tu(), a = lf, lf = du(e.stateNode.containerInfo), ld(t, e, n), lh(e), lf = a, tl && s9 && (s7 = !0), tl = r, s3 = i;
            break;
        case 12:
            ld(t, e, n), lh(e);
            break;
        case 31:
        case 19:
            ld(t, e, n), lh(e), 4 & i && null !== (t = e.updateQueue) && (e.updateQueue = null, lc(e, t));
            break;
        case 13:
            ld(t, e, n), lh(e), 8192 & e.child.flags && null !== e.memoizedState != (null !== r && null !== r.memoizedState) && (lY = ey()), 4 & i && null !== (t = e.updateQueue) && (e.updateQueue = null, lc(e, t));
            break;
        case 22:
            a = null !== e.memoizedState, o = null !== r && null !== r.memoizedState;
            var s = s1,
                u = s2,
                c = s3;
            s1 = s || a, s3 = c || a, s2 = u || o, ld(t, e, n), s2 = u, s3 = c, s1 = s, lh(e), 8192 & i && ((t = e.stateNode)._visibility = a ? -2 & t._visibility : 1 | t._visibility, !a || null === r || o || s1 || s2 || (t = o || s2, n = s1, r = s2, s1 = a || s1, s2 = t, function e(t, n) {
                for (t = t.child; null !== t;) {
                    var r = t;
                    switch (r.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            sk(4, r, r.return), e(r, n);
                            break;
                        case 1:
                            sO(r, r.return);
                            var i = r.stateNode;
                            "function" == typeof i.componentWillUnmount && sx(r, r.return, i), e(r, n);
                            break;
                        case 27:
                            0 != (2 & n) && di(r.stateNode, r.type, r.memoizedProps);
                        case 5:
                            sO(r, r.return), 5 !== r.tag && 27 !== r.tag || sA(r), e(r, n);
                            break;
                        case 6:
                            sA(r);
                            break;
                        case 26:
                            sO(r, r.return), i = r.stateNode, null !== r.memoizedState || null === i || s2 || i.parentNode.removeChild(i), e(r, n);
                            break;
                        case 22:
                            null === r.memoizedState && e(r, n);
                            break;
                        case 30:
                            sO(r, r.return), e(r, n);
                            break;
                        case 7:
                            sO(r, r.return);
                        default:
                            e(r, n)
                    }
                    t = t.sibling
                }
            }(e, 2), s1 = n, s2 = r), !a && s3 || lr(e, a)), 4 & i && null !== (t = e.updateQueue) && null !== (n = t.retryQueue) && (t.retryQueue = null, lc(e, n));
            break;
        case 30:
            512 & i && (s2 || null === r || sO(r, r.return)), i = tu(), a = s9, o = (0x13ffff00 & n) === n, s = e.memoizedProps, s9 = o && "none" !== rd(s.default, s.update), ld(t, e, n), lh(e), o && null !== r && tl && (e.flags |= 4), s9 = a, tl = i;
            break;
        case 21:
            break;
        case 7:
            512 & i && (s2 || null === r || sO(r, r.return)), r && null !== r.stateNode && (r.stateNode._fragmentFiber = e);
        default:
            ld(t, e, n), lh(e)
    }
}

function lh(e) {
    var t = e.flags;
    if (2 & t) {
        try {
            for (var n, r = e.return; null !== r;) {
                if (sD(r)) {
                    n = r;
                    break
                }
                r = r.return
            }
            r = null;
            for (var i = e.return; null !== i;) {
                if (sR(i)) {
                    var a = i.stateNode;
                    null === r ? r = [a] : r.push(a)
                }
                if (sL(i)) break;
                i = i.return
            }
            var o = r;
            if (null == n) throw Error(l(160));
            switch (n.tag) {
                case 27:
                    var s = n.stateNode,
                        u = sz(e);
                    sU(e, u, s, o);
                    break;
                case 5:
                    var c = n.stateNode;
                    32 & n.flags && (tT(c, ""), n.flags &= -33);
                    var d = sz(e);
                    sU(e, d, c, o);
                    break;
                case 3:
                case 4:
                    var f = n.stateNode.containerInfo,
                        p = sz(e);
                    ! function e(t, n, r, i) {
                        var a = t.tag;
                        if (5 === a || 6 === a) a = t.stateNode, n ? (9 === r.nodeType ? r.body : "HTML" === r.nodeName ? r.ownerDocument.body : r).insertBefore(a, n) : ((n = 9 === r.nodeType ? r.body : "HTML" === r.nodeName ? r.ownerDocument.body : r).appendChild(a), null != (r = r._reactRootContainer) || null !== n.onclick || (n.onclick = tR)), sP(t, i), tl = !0;
                        else if (4 !== a && (27 === a && (sP(t, i), i = null, cN(t.type) && (r = t.stateNode, n = null)), null !== (t = t.child)))
                            for (e(t, n, r, i), t = t.sibling; null !== t;) e(t, n, r, i), t = t.sibling
                    }(e, p, f, o);
                    break;
                default:
                    throw Error(l(161))
            }
        } catch (t) {
            uM(e, e.return, t)
        }
        e.flags &= -3
    }
    4096 & t && (e.flags &= -4097)
}

function lm(e, t) {
    if (9270 & t.subtreeFlags)
        for (t = t.child; null !== t;) lg(t, e), t = t.sibling;
    else ! function e(t, n) {
        for (t = t.child; null !== t;) {
            if (30 === t.tag) {
                var r = t.memoizedProps,
                    i = t.stateNode,
                    a = ru(r, i),
                    o = rd(r.default, r.update);
                if (n) var s = null === (i = i.clones) ? null : i.map(cz);
                else s = t.memoizedState, t.memoizedState = null;
                i = t;
                var l = t.child;
                sV = 0, a = s0(i, l, a, a, o, s, !1), 0 != (4 & t.flags) && a && (n || uo(t, r.onUpdate))
            } else 0 != (0x2000000 & t.subtreeFlags) && e(t, n);
            t = t.sibling
        }
    }(t, !1)
}

function lg(e, t) {
    var n = e.alternate;
    if (null === n) sK(e, !1);
    else switch (e.tag) {
        case 3:
            if (le = s8 = !1, sq(), lm(t, e), !s8 && !s7) {
                if (null !== (e = sH))
                    for (var r = 0; r < e.length; r += 3) {
                        n = e[r];
                        var i = e[r + 1];
                        cI(n, e[r + 2]), null !== (n = n.ownerDocument.documentElement) && n.animate({
                            opacity: [0, 0],
                            pointerEvents: ["none", "none"]
                        }, {
                            duration: 0,
                            fill: "forwards",
                            pseudoElement: "::view-transition-group(" + i + ")"
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
                })), le = !0
            }
            sH = null;
            break;
        case 5:
        default:
            lm(t, e);
            break;
        case 4:
            r = s8, s8 = !1, lm(t, e), s8 && (s7 = !0), s8 = r;
            break;
        case 22:
            null === e.memoizedState && (null !== n.memoizedState ? sK(e, !1) : lm(t, e));
            break;
        case 30:
            r = s8, i = sq(), s8 = !1, lm(t, e), s8 && (e.flags |= 4);
            var a = e.memoizedProps,
                o = e.stateNode;
            t = ru(a, o), o = ru(n.memoizedProps, o);
            var s = rd(a.default, a.update);
            "none" === s ? t = !1 : (a = n.memoizedState, n.memoizedState = null, n = e.child, sV = 0, t = s0(e, n, t, o, s, a, !0), sV !== (null === a ? 0 : a.length) && (e.flags |= 32)), 0 != (4 & e.flags) && t ? (uo(e, e.memoizedProps.onUpdate), sH = i) : null !== i && (i.push.apply(i, sH), sH = i), s8 = 0 != (32 & e.flags) || r
    }
}

function lv(e, t) {
    if (8772 & t.subtreeFlags)
        for (t = t.child; null !== t;) ln(e, t.alternate, t), t = t.sibling
}

function lb(e, t) {
    var n = null;
    null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool), e = null, null !== t.memoizedState && null !== t.memoizedState.cachePool && (e = t.memoizedState.cachePool.pool), e !== n && (null != e && e.refCount++, null != n && ib(n))
}

function ly(e, t) {
    e = null, null !== t.alternate && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && ib(e))
}

function lw(e, t, n, r) {
    var i = (0x13ffff00 & n) === n;
    if (t.subtreeFlags & (i ? 10262 : 10256))
        for (t = t.child; null !== t;) l_(e, t, n, r), t = t.sibling;
    else i && function e(t) {
        for (t = t.child; null !== t;) 30 === t.tag ? sQ(t.child, !1) : 0 != (0x2000000 & t.subtreeFlags) && e(t), t = t.sibling
    }(t)
}

function l_(e, t, n, r) {
    var i = (0x13ffff00 & n) === n;
    i && null === t.alternate && null !== t.return && null !== t.return.alternate && sZ(t);
    var a = t.flags;
    switch (t.tag) {
        case 0:
        case 11:
        case 15:
            lw(e, t, n, r), 2048 & a && sE(9, t);
            break;
        case 1:
        case 31:
        case 13:
        default:
            lw(e, t, n, r);
            break;
        case 3:
            lw(e, t, n, r), i && le && ("root" === (e = 9 === (e = e.containerInfo).nodeType ? e.body : "HTML" === e.nodeName ? e.ownerDocument.body : e).style.viewTransitionName && (e.style.viewTransitionName = ""), null !== (e = e.ownerDocument.documentElement) && "none" === e.style.viewTransitionName && (e.style.viewTransitionName = "")), 2048 & a && (a = null, null !== t.alternate && (a = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== a && (t.refCount++, null != a && ib(a)));
            break;
        case 12:
            if (2048 & a) {
                lw(e, t, n, r), a = t.stateNode;
                try {
                    var o = t.memoizedProps,
                        s = o.id,
                        l = o.onPostCommit;
                    "function" == typeof l && l(s, null === t.alternate ? "mount" : "update", a.passiveEffectDuration, -0)
                } catch (e) {
                    uM(t, t.return, e)
                }
            } else lw(e, t, n, r);
            break;
        case 23:
            break;
        case 22:
            o = t.stateNode, s = t.alternate, null !== t.memoizedState ? (i && null !== s && null === s.memoizedState && sZ(s), 2 & o._visibility ? lw(e, t, n, r) : lS(e, t)) : (i && null !== s && null !== s.memoizedState && sZ(t), 2 & o._visibility ? lw(e, t, n, r) : (o._visibility |= 2, function e(t, n, r, i, a) {
                for (a = a && 0 != (10256 & n.subtreeFlags), n = n.child; null !== n;) {
                    var o = n,
                        s = o.flags;
                    switch (o.tag) {
                        case 0:
                        case 11:
                        case 15:
                            e(t, o, r, i, a), sE(8, o);
                            break;
                        case 23:
                            break;
                        case 22:
                            var l = o.stateNode;
                            null !== o.memoizedState ? 2 & l._visibility ? e(t, o, r, i, a) : lS(t, o) : (l._visibility |= 2, e(t, o, r, i, a)), a && 2048 & s && lb(o.alternate, o);
                            break;
                        case 24:
                            e(t, o, r, i, a), a && 2048 & s && ly(o.alternate, o);
                            break;
                        default:
                            e(t, o, r, i, a)
                    }
                    n = n.sibling
                }
            }(e, t, n, r, 0 != (10256 & t.subtreeFlags)))), 2048 & a && lb(s, t);
            break;
        case 24:
            lw(e, t, n, r), 2048 & a && ly(t.alternate, t);
            break;
        case 30:
            i && null !== (a = t.alternate) && (sQ(a.child, !0), sQ(t.child, !0)), lw(e, t, n, r)
    }
}

function lS(e, t) {
    if (10256 & t.subtreeFlags)
        for (t = t.child; null !== t;) {
            var n = t,
                r = n.flags;
            switch (n.tag) {
                case 22:
                    lS(e, n), 2048 & r && lb(n.alternate, n);
                    break;
                case 24:
                    lS(e, n), 2048 & r && ly(n.alternate, n);
                    break;
                default:
                    lS(e, n)
            }
            t = t.sibling
        }
}
var lE = 8192;

function lk(e, t, n) {
    if (e.subtreeFlags & lE)
        for (e = e.child; null !== e;) lT(e, t, n), e = e.sibling
}

function lT(e, t, n) {
    switch (e.tag) {
        case 26:
            lk(e, t, n), e.flags & lE && (null !== e.memoizedState ? function(e, t, n, r) {
                if ("stylesheet" === n.type && ("string" != typeof r.media || !1 !== matchMedia(r.media).matches) && 0 == (4 & n.state.loading)) {
                    if (null === n.instance) {
                        var i = dh(r.href),
                            a = t.querySelector(dm(i));
                        if (a) {
                            null !== (t = a._p) && "object" == typeof t && "function" == typeof t.then && (e.count++, e = dL.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, e7(a);
                            return
                        }
                        a = t.ownerDocument || t, r = dg(r), (i = ds.get(i)) && d_(r, i), e7(a = a.createElement("link"));
                        var o = a;
                        o._p = new Promise(function(e, t) {
                            o.onload = e, o.onerror = t
                        }), cp(a, "link", r), n.instance = a
                    }
                    null === e.stylesheets && (e.stylesheets = new Map), e.stylesheets.set(n, t), (t = n.state.preload) && 0 == (3 & n.state.loading) && (e.count++, n = dL.bind(e), t.addEventListener("load", n), t.addEventListener("error", n))
                }
            }(n, lf, e.memoizedState, e.memoizedProps) : (e = e.stateNode, (0x13ffff40 & t) === t && dP(n, e)));
            break;
        case 5:
            lk(e, t, n), e.flags & lE && (e = e.stateNode, (0x13ffff40 & t) === t && dP(n, e));
            break;
        case 3:
        case 4:
            var r = lf;
            lf = du(e.stateNode.containerInfo), lk(e, t, n), lf = r;
            break;
        case 22:
            null === e.memoizedState && (null !== (r = e.alternate) && null !== r.memoizedState ? (r = lE, lE = 0x1000000, lk(e, t, n), lE = r) : lk(e, t, n));
            break;
        case 30:
            if (0 != (e.flags & lE) && null != (r = e.memoizedProps.name) && "auto" !== r) {
                var i = e.stateNode;
                i.paired = null, null === s$ && (s$ = new Map), s$.set(r, i)
            }
            lk(e, t, n);
            break;
        default:
            lk(e, t, n)
    }
}

function lx(e) {
    var t = e.alternate;
    if (null !== t && null !== (e = t.child)) {
        t.child = null;
        do t = e.sibling, e.sibling = null, e = t; while (null !== e)
    }
}

function lC(e) {
    var t = e.deletions;
    if (0 != (16 & e.flags)) {
        if (null !== t)
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                s6 = r, lP(r, e)
            }
        lx(e)
    }
    if (10256 & e.subtreeFlags)
        for (e = e.child; null !== e;) lO(e), e = e.sibling
}

function lO(e) {
    switch (e.tag) {
        case 0:
        case 11:
        case 15:
            lC(e), 2048 & e.flags && sk(9, e, e.return);
            break;
        case 3:
        case 12:
        default:
            lC(e);
            break;
        case 22:
            var t = e.stateNode;
            null !== e.memoizedState && 2 & t._visibility && (null === e.return || 13 !== e.return.tag) ? (t._visibility &= -3, function e(t) {
                var n = t.deletions;
                if (0 != (16 & t.flags)) {
                    if (null !== n)
                        for (var r = 0; r < n.length; r++) {
                            var i = n[r];
                            s6 = i, lP(i, t)
                        }
                    lx(t)
                }
                for (t = t.child; null !== t;) {
                    switch ((n = t).tag) {
                        case 0:
                        case 11:
                        case 15:
                            sk(8, n, n.return), e(n);
                            break;
                        case 22:
                            2 & (r = n.stateNode)._visibility && (r._visibility &= -3, e(n));
                            break;
                        default:
                            e(n)
                    }
                    t = t.sibling
                }
            }(e)) : lC(e)
    }
}

function lP(e, t) {
    for (; null !== s6;) {
        var n = s6;
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
                sk(8, n, t);
                break;
            case 23:
            case 22:
                if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
                    var r = n.memoizedState.cachePool.pool;
                    null != r && r.refCount++
                }
                break;
            case 24:
                ib(n.memoizedState.cache)
        }
        if (null !== (r = n.child)) r.return = n, s6 = r;
        else
            for (n = e; null !== s6;) {
                var i = (r = s6).sibling,
                    a = r.return;
                if (! function e(t) {
                        var n = t.alternate;
                        null !== n && (t.alternate = null, e(n)), t.child = null, t.deletions = null, t.sibling = null, 5 === t.tag && null !== (n = t.stateNode) && e4(n), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
                    }(r), r === n) {
                    s6 = null;
                    break
                }
                if (null !== i) {
                    i.return = a, s6 = i;
                    break
                }
                s6 = a
            }
    }
}
var lN = {
        getCacheForType: function(e) {
            var t = iu(ig),
                n = t.data.get(e);
            return void 0 === n && (n = e(), t.data.set(e, n)), n
        },
        cacheSignal: function() {
            return iu(ig).controller.signal
        }
    },
    lA = "function" == typeof WeakMap ? WeakMap : Map,
    lL = 0,
    lR = null,
    lI = null,
    lM = 0,
    lD = 0,
    lz = null,
    lU = !1,
    lj = !1,
    lF = !1,
    l$ = 0,
    lB = 0,
    lH = 0,
    lq = 0,
    lV = 0,
    lW = 0,
    lQ = 0,
    lG = null,
    lK = null,
    lX = !1,
    lY = 0,
    lJ = 0,
    lZ = 1 / 0,
    l0 = null,
    l1 = null,
    l2 = 0,
    l3 = null,
    l4 = null,
    l5 = 0,
    l6 = 0,
    l8 = null,
    l9 = null,
    l7 = null,
    ue = null,
    ut = null,
    un = 0,
    ur = null;

function ui() {
    return 0 != (2 & lL) && 0 !== lM ? lM & -lM : null !== G.T ? u0() : eW()
}

function ua() {
    if (0 === lW)
        if (0 == (0x20000000 & lM) || rY) {
            var e = eL;
            0 == (3932160 & (eL <<= 1)) && (eL = 262144), lW = e
        } else lW = 0x20000000;
    return null !== (e = an.current) && (e.flags |= 32), lW
}

function uo(e, t) {
    if (null != t) {
        var n = e.stateNode,
            r = n.ref;
        null === r && (r = n.ref = cF(ru(e.memoizedProps, n))), null === ue && (ue = []), ue.push(t.bind(null, r))
    }
}

function us(e, t, n) {
    (e === lR && (2 === lD || 9 === lD) || null !== e.cancelPendingCommit) && (up(e, 0), uc(e, lM, lW, !1)), eF(e, n), (0 == (2 & lL) || e !== lR) && (e === lR && (0 == (2 & lL) && (lq |= n), 4 === lB && uc(e, lM, lW, !1)), uQ(e))
}

function ul(e, t, n) {
    if (0 != (6 & lL)) throw Error(l(327));
    for (var r = !n && 0 == (127 & t) && 0 == (t & e.expiredLanes) || eD(e, t), i = r ? function(e, t) {
            var n = lL;
            lL |= 2;
            var r = ug(),
                i = uv();
            lR !== e || lM !== t ? (l0 = null, lZ = ey() + 500, up(e, t)) : lj = eD(e, t);
            e: for (;;) try {
                if (0 !== lD && null !== lI) {
                    t = lI;
                    var a = lz;
                    t: switch (lD) {
                        case 1:
                            lD = 0, lz = null, uS(e, t, a, 1);
                            break;
                        case 2:
                        case 9:
                            if (iM(a)) {
                                lD = 0, lz = null, u_(t);
                                break
                            }
                            t = function() {
                                2 !== lD && 9 !== lD || lR !== e || (lD = 7), uQ(e)
                            }, a.then(t, t);
                            break e;
                        case 3:
                            lD = 7;
                            break e;
                        case 4:
                            lD = 5;
                            break e;
                        case 7:
                            iM(a) ? (lD = 0, lz = null, u_(t)) : (lD = 0, lz = null, uS(e, t, a, 7));
                            break;
                        case 5:
                            var o = null;
                            switch (lI.tag) {
                                case 26:
                                    o = lI.memoizedState;
                                case 5:
                                case 27:
                                    var s = lI;
                                    if (o ? dC(o) : s.stateNode.complete) {
                                        lD = 0, lz = null;
                                        var u = s.sibling;
                                        if (null !== u) lI = u;
                                        else {
                                            var c = s.return;
                                            null !== c ? (lI = c, uE(c)) : lI = null
                                        }
                                        break t
                                    }
                            }
                            lD = 0, lz = null, uS(e, t, a, 5);
                            break;
                        case 6:
                            lD = 0, lz = null, uS(e, t, a, 6);
                            break;
                        case 8:
                            uf(), lB = 6;
                            break e;
                        default:
                            throw Error(l(462))
                    }
                }
                for (; null !== lI && !ev();) uw(lI);
                break
            } catch (t) {
                uh(e, t)
            }
            return (ie = r7 = null, G.H = r, G.A = i, lL = n, null !== lI) ? 0 : (lR = null, lM = 0, rg(), lB)
        }(e, t) : uy(e, t, !0), a = r;;) {
        if (0 === i) lj && !r && uc(e, t, 0, !1);
        else {
            if (n = e.current.alternate, a && ! function(e) {
                    for (var t = e;;) {
                        var n = t.tag;
                        if ((0 === n || 11 === n || 15 === n) && 16384 & t.flags && null !== (n = t.updateQueue) && null !== (n = n.stores))
                            for (var r = 0; r < n.length; r++) {
                                var i = n[r],
                                    a = i.getSnapshot;
                                i = i.value;
                                try {
                                    if (!nH(a(), i)) return !1
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
                i = uy(e, t, !1), a = !1;
                continue
            }
            if (2 === i) {
                if (a = t, e.errorRecoveryDisabledLanes & a) var o = 0;
                else o = 0 != (o = -0x20000001 & e.pendingLanes) ? o : 0x20000000 & o ? 0x20000000 : 0;
                if (0 !== o) {
                    t = o;
                    e: {
                        i = lG;
                        var s = e.current.memoizedState.isDehydrated;
                        if (s && (up(e, o).flags |= 256), 6 === (o = uy(e, o, !1))) s || (e.errorRecoveryDisabledLanes = e.errorRecoveryDisabledLanes | a | lW);
                        else if (2 !== o) {
                            if (lF && !s) {
                                e.errorRecoveryDisabledLanes |= a, lq |= a, i = 4;
                                break e
                            }
                            a = lK, lK = i, null !== a && (null === lK ? lK = a : lK.push.apply(lK, a))
                        }
                        i = o
                    }
                    if (a = !1, 2 !== i) continue
                }
            }
            if (1 === i) {
                up(e, 0), uc(e, t, 0, !0);
                break
            }
            e: {
                switch (r = e, a = i) {
                    case 0:
                    case 1:
                        throw Error(l(345));
                    case 4:
                        if ((4194048 & t) !== t && (0x3c00000 & t) !== t) break;
                    case 6:
                        uc(r, t, lW, !lU);
                        break e;
                    case 2:
                        lK = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(l(329))
                }
                if ((0x3c00000 & t) === t && 10 < (i = lY + 300 - ey())) {
                    if (uc(r, t, lW, !lU), 0 !== eM(r, 0, !0)) break e;
                    l5 = t, r.timeoutHandle = ck(uu.bind(null, r, n, lK, l0, lX, t, lW, lq, lQ, lU, a, "Throttled", -0, 0), i);
                    break e
                }
                uu(r, n, lK, l0, lX, t, lW, lq, lQ, lU, a, null, -0, 0)
            }
        }
        break
    }
    uQ(e)
}

function uu(e, t, n, r, i, a, o, s, l, u, c, d, f, p) {
    e.timeoutHandle = -1;
    var h, m, g = t.subtreeFlags,
        v = (0x13ffff00 & a) === a;
    if (d = null, (v || 8192 & g || 0x1002000 == (0x1002000 & g)) && (s$ = null, lT(t, a, d = {
            stylesheets: null,
            count: 0,
            imgCount: 0,
            imgBytes: 0,
            suspenseyImages: [],
            waitingForImages: !0,
            waitingForViewTransition: !1,
            unsuspend: tR
        }), v && (g = d, null != (v = (9 === (v = e.containerInfo).nodeType ? v : v.ownerDocument).__reactViewTransition) && (g.count++, g.waitingForViewTransition = !0, g = dL.bind(g), v.finished.then(g, g))), null !== (h = d, m = g = (0x3c00000 & a) === a ? lY - ey() : (4194048 & a) === a ? lJ - ey() : 0, h.stylesheets && 0 === h.count && dM(h, h.stylesheets), g = 0 < h.count || 0 < h.imgCount ? function(e) {
            var t = setTimeout(function() {
                if (h.stylesheets && dM(h, h.stylesheets), h.unsuspend) {
                    var e = h.unsuspend;
                    h.unsuspend = null, e()
                }
            }, 6e4 + m);
            0 < h.imgBytes && 0 === dN && (dN = 62500 * function() {
                if ("function" == typeof performance.getEntriesByType) {
                    for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
                        var i = n[r],
                            a = i.transferSize,
                            o = i.initiatorType,
                            s = i.duration;
                        if (a && s && cm(o)) {
                            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
                                var l = n[r],
                                    u = l.startTime;
                                if (u > s) break;
                                var c = l.transferSize,
                                    d = l.initiatorType;
                                c && cm(d) && (o += c * ((l = l.responseEnd) < s ? 1 : (s - u) / (l - u)))
                            }
                            if (--r, t += 8 * (a + o) / (i.duration / 1e3), 10 < ++e) break
                        }
                    }
                    if (0 < e) return t / e / 1e6
                }
                return navigator.connection && "number" == typeof(e = navigator.connection.downlink) ? e : 5
            }());
            var n = setTimeout(function() {
                if (h.waitingForImages = !1, 0 === h.count && (h.stylesheets && dM(h, h.stylesheets), h.unsuspend)) {
                    var e = h.unsuspend;
                    h.unsuspend = null, e()
                }
            }, (h.imgBytes > dN ? 50 : 800) + m);
            return h.unsuspend = e,
                function() {
                    h.unsuspend = null, clearTimeout(t), clearTimeout(n)
                }
        } : null))) {
        l5 = a, e.cancelPendingCommit = g(uT.bind(null, e, t, a, n, r, i, o, s, l, u, c, d, null, f, p)), uc(e, a, o, !u);
        return
    }
    uT(e, t, a, n, r, i, o, s, l, u, c, d)
}

function uc(e, t, n, r) {
    t = ez(e, t) & ~lV & ~lq, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
    for (var i = t; 0 < i;) {
        var a = 31 - eO(i),
            o = 1 << a;
        r[a] = -1, i &= ~o
    }
    0 !== n && e$(e, n, t)
}

function ud() {
    return 0 != (6 & lL) || (uG(0, !1), !1)
}

function uf() {
    if (null !== lI) {
        if (0 === lD) var e = lI.return;
        else e = lI, ie = r7 = null, aL(e), i$ = null, iB = 0, e = lI;
        for (; null !== e;) sS(e.alternate, e), e = e.return;
        lI = null
    }
}

function up(e, t) {
    var n = e.timeoutHandle;
    return -1 !== n && (e.timeoutHandle = -1, cT(n)), null !== (n = e.cancelPendingCommit) && (e.cancelPendingCommit = null, n()), l5 = 0, uf(), lR = e, lI = n = rx(e.current, null), lM = t, lD = 0, lz = null, lU = !1, lj = eD(e, t), lF = !1, lQ = lW = lV = lq = lH = lB = 0, lK = lG = null, lX = !1, l$ = ez(e, t), rg(), n
}

function uh(e, t) {
    ah = null, G.H = oA, t === iA || t === iR ? (t = ij(), lD = 3) : t === iL ? (t = ij(), lD = 4) : lD = t === oG ? 8 : null !== t && "object" == typeof t && "function" == typeof t.then ? 6 : 1, lz = t, null === lI && (lB = 1, oH(e, rI(t, e.current)))
}

function um() {
    var e = an.current;
    return null === e || ((4194048 & lM) === lM ? null === ar : ((0x3c00000 & lM) === lM || 0 != (0x20000000 & lM)) && e === ar)
}

function ug() {
    var e = G.H;
    return G.H = oA, null === e ? oA : e
}

function uv() {
    var e = G.A;
    return G.A = lN, e
}

function ub() {
    lB = 4, lU || (4194048 & lM) !== lM && null !== an.current || (lj = !0), 0 == (0x7ffffff & lH) && 0 == (0x7ffffff & lq) || null === lR || uc(lR, lM, lW, !1)
}

function uy(e, t, n) {
    var r = lL;
    lL |= 2;
    var i = ug(),
        a = uv();
    (lR !== e || lM !== t) && (l0 = null, up(e, t)), t = !1;
    var o = lB;
    e: for (;;) try {
        if (0 !== lD && null !== lI) {
            var s = lI,
                l = lz;
            switch (lD) {
                case 8:
                    uf(), o = 6;
                    break e;
                case 3:
                case 2:
                case 9:
                case 6:
                    null === an.current && (t = !0);
                    var u = lD;
                    if (lD = 0, lz = null, uS(e, s, l, u), n && lj) {
                        o = 0;
                        break e
                    }
                    break;
                default:
                    u = lD, lD = 0, lz = null, uS(e, s, l, u)
            }
        }(function() {
            for (; null !== lI;) uw(lI)
        })(), o = lB;
        break
    } catch (t) {
        uh(e, t)
    }
    return t && e.shellSuspendCounter++, ie = r7 = null, lL = r, G.H = i, G.A = a, null === lI && (lR = null, lM = 0, rg()), o
}

function uw(e) {
    var t = sm(e.alternate, e, l$);
    e.memoizedProps = e.pendingProps, null === t ? uE(e) : lI = t
}

function u_(e) {
    var t = e,
        n = t.alternate;
    switch (t.tag) {
        case 15:
        case 0:
            t = o8(n, t, t.pendingProps, t.type, void 0, lM);
            break;
        case 11:
            t = o8(n, t, t.pendingProps, t.type.render, t.ref, lM);
            break;
        case 5:
            aL(t);
            var r = t;
            r === rK && (rY ? (r3(r), 5 === r.tag && null != r.stateNode && (rX = r.stateNode)) : (r3(r), rY = !0));
        default:
            sS(n, t), t = sm(n, t = lI = rC(t, l$), l$)
    }
    e.memoizedProps = e.pendingProps, null === t ? uE(e) : lI = t
}

function uS(e, t, n, r) {
    ie = r7 = null, aL(t), i$ = null, iB = 0;
    var i = t.return;
    try {
        if (function(e, t, n, r, i) {
                if (n.flags |= 32768, null !== r && "object" == typeof r && "function" == typeof r.then) {
                    if (null !== (t = n.alternate) && io(t, n, i, !0), null !== (n = an.current)) {
                        switch (n.tag) {
                            case 31:
                            case 13:
                            case 19:
                                return null === ar ? ub() : null === n.alternate && 0 === lB && (lB = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, r === iI ? n.flags |= 16384 : (null === (t = n.updateQueue) ? n.updateQueue = new Set([r]) : t.add(r), uD(e, r, i)), !1;
                            case 22:
                                return n.flags |= 65536, r === iI ? n.flags |= 16384 : (null === (t = n.updateQueue) ? (t = {
                                    transitions: null,
                                    markerInstances: null,
                                    retryQueue: new Set([r])
                                }, n.updateQueue = t) : null === (n = t.retryQueue) ? t.retryQueue = new Set([r]) : n.add(r), uD(e, r, i)), !1
                        }
                        throw Error(l(435, n.tag))
                    }
                    return uD(e, r, i), ub(), !1
                }
                if (rY) return null !== (t = an.current) ? (0 == (65536 & t.flags) && (t.flags |= 256), t.flags |= 65536, t.lanes = i, r !== r0 && r8(rI(e = Error(l(422), {
                    cause: r
                }), n))) : (r !== r0 && r8(rI(t = Error(l(423), {
                    cause: r
                }), n)), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, r = rI(r, n), i = oV(e.stateNode, r, i), i1(e, i), 4 !== lB && (lB = 2)), !1;
                var a = Error(l(520), {
                    cause: r
                });
                if (a = rI(a, n), null === lG ? lG = [a] : lG.push(a), 4 !== lB && (lB = 2), null === t) return !0;
                r = rI(r, n), n = t;
                do {
                    switch (n.tag) {
                        case 3:
                            return n.flags |= 65536, e = i & -i, n.lanes |= e, e = oV(n.stateNode, r, e), i1(n, e), !1;
                        case 1:
                            if (t = n.type, a = n.stateNode, 0 == (128 & n.flags) && ("function" == typeof t.getDerivedStateFromError || null !== a && "function" == typeof a.componentDidCatch && (null === l1 || !l1.has(a)))) return n.flags |= 65536, i &= -i, n.lanes |= i, oQ(i = oW(i), e, n, r), i1(n, i), !1;
                            break;
                        case 22:
                            if (null !== n.memoizedState) return n.flags |= 65536, !1
                    }
                    n = n.return
                } while (null !== n) return !1
            }(e, i, t, n, lM)) {
            lB = 1, oH(e, rI(n, e.current)), lI = null;
            return
        }
    } catch (t) {
        if (null !== i) throw lI = i, t;
        lB = 1, oH(e, rI(n, e.current)), lI = null;
        return
    }
    32768 & t.flags ? (rY || 1 === r ? e = !0 : lj || 0 != (0x20000000 & lM) ? e = !1 : (lU = e = !0, (2 === r || 9 === r || 3 === r || 6 === r) && null !== (r = an.current) && 13 === r.tag && (r.flags |= 16384)), uk(t, e)) : uE(t)
}

function uE(e) {
    var t = e;
    do {
        if (0 != (32768 & t.flags)) return void uk(t, lU);
        e = t.return;
        var n = function(e, t, n) {
            var r = t.pendingProps;
            switch (rQ(t), t.tag) {
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
                    return s_(t), null;
                case 3:
                    return n = t.stateNode, r = null, null !== e && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), ir(ig), es(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (null === e || null === e.child) && (r4(t) ? sg(t) : null === e || e.memoizedState.isDehydrated && 0 == (256 & t.flags) || (t.flags |= 1024, r6())), s_(t), null;
                case 26:
                    var i = t.type,
                        a = t.memoizedState;
                    return null === e ? (sg(t), null !== a ? (s_(t), sb(t, a)) : (s_(t), sv(t, i, null, r, n))) : a ? a !== e.memoizedState ? (sg(t), s_(t), sb(t, a)) : (s_(t), t.flags &= -0x1000001) : ((e = e.memoizedProps) !== r && sg(t), s_(t), sv(t, i, e, r, n)), null;
                case 27:
                    if (eu(t), n = ei.current, i = t.type, null !== e && null != t.stateNode) e.memoizedProps !== r && sg(t);
                    else {
                        if (!r) {
                            if (null === t.stateNode) throw Error(l(166));
                            return s_(t), t.subtreeFlags &= -0x2000001, null
                        }
                        e = en.current, r4(t) ? r2(t) : (t.stateNode = e = dr(i, r, n), sg(t))
                    }
                    return s_(t), t.subtreeFlags &= -0x2000001, null;
                case 5:
                    if (eu(t), i = t.type, null !== e && null != t.stateNode) e.memoizedProps !== r && sg(t);
                    else {
                        if (!r) {
                            if (null === t.stateNode) throw Error(l(166));
                            return s_(t), t.subtreeFlags &= -0x2000001, null
                        }
                        if (a = en.current, r4(t)) r2(t);
                        else {
                            var o = cb(ei.current);
                            switch (a) {
                                case 1:
                                    a = o.createElementNS("http://www.w3.org/2000/svg", i);
                                    break;
                                case 2:
                                    a = o.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                                    break;
                                default:
                                    switch (i) {
                                        case "svg":
                                            a = o.createElementNS("http://www.w3.org/2000/svg", i);
                                            break;
                                        case "math":
                                            a = o.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                                            break;
                                        case "script":
                                            (a = o.createElement("div")).innerHTML = "<script></script>", a = a.removeChild(a.firstChild);
                                            break;
                                        case "select":
                                            a = "string" == typeof r.is ? o.createElement("select", {
                                                is: r.is
                                            }) : o.createElement("select"), r.multiple ? a.multiple = !0 : r.size && (a.size = r.size);
                                            break;
                                        default:
                                            a = "string" == typeof r.is ? o.createElement(i, {
                                                is: r.is
                                            }) : o.createElement(i)
                                    }
                            }
                            a[eK] = t, a[eX] = r;
                            e: for (o = t.child; null !== o;) {
                                if (5 === o.tag || 6 === o.tag) a.appendChild(o.stateNode);
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
                            switch (t.stateNode = a, cp(a, i, r), i) {
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
                            r && sg(t)
                        }
                    }
                    return s_(t), t.subtreeFlags &= -0x2000001, sv(t, t.type, null === e ? null : e.memoizedProps, t.pendingProps, n), null;
                case 6:
                    if (e && null != t.stateNode) e.memoizedProps !== r && sg(t);
                    else {
                        if ("string" != typeof r && null === t.stateNode) throw Error(l(166));
                        if (e = ei.current, r4(t)) {
                            if (e = t.stateNode, n = t.memoizedProps, r = null, null !== (i = rK)) switch (i.tag) {
                                case 27:
                                case 5:
                                    r = i.memoizedProps
                            }
                            e[eK] = t, (e = !!(e.nodeValue === n || null !== r && !0 === r.suppressHydrationWarning || cc(e.nodeValue, n))) || r1(t, !0)
                        } else(e = cb(e).createTextNode(r))[eK] = t, t.stateNode = e
                    }
                    return s_(t), null;
                case 31:
                    if (n = t.memoizedState, null === e || null !== e.memoizedState) {
                        if (r = r4(t), null !== n) {
                            if (null === e) {
                                if (!r) throw Error(l(318));
                                if (!(e = null !== (e = t.memoizedState) ? e.dehydrated : null)) throw Error(l(557));
                                e[eK] = t
                            } else r5(), 0 == (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                            s_(t), e = !1
                        } else n = r6(), null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = n), e = !0;
                        if (!e) {
                            if (256 & t.flags) return al(t), t;
                            return al(t), null
                        }
                        if (0 != (128 & t.flags)) throw Error(l(558))
                    }
                    return s_(t), null;
                case 13:
                    if (r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                        if (i = r4(t), null !== r && null !== r.dehydrated) {
                            if (null === e) {
                                if (!i) throw Error(l(318));
                                if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(l(317));
                                i[eK] = t
                            } else r5(), 0 == (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                            s_(t), i = !1
                        } else i = r6(), null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = i), i = !0;
                        if (!i) {
                            if (256 & t.flags) return al(t), t;
                            return al(t), null
                        }
                    }
                    if (al(t), 0 != (128 & t.flags)) return t.lanes = n, t;
                    return n = null !== r, e = null !== e && null !== e.memoizedState, n && (r = t.child, i = null, null !== r.alternate && null !== r.alternate.memoizedState && null !== r.alternate.memoizedState.cachePool && (i = r.alternate.memoizedState.cachePool.pool), a = null, null !== r.memoizedState && null !== r.memoizedState.cachePool && (a = r.memoizedState.cachePool.pool), a !== i && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), sy(t, t.updateQueue), s_(t), null;
                case 4:
                    return es(), null === e && ce(t.stateNode.containerInfo), t.flags |= 0x4000000, s_(t), null;
                case 10:
                    return ir(t.type), s_(t), null;
                case 19:
                    if (ad(t), null === (r = t.memoizedState)) return s_(t), null;
                    if (i = 0 != (128 & t.flags), null === (a = r.rendering))
                        if (i) sw(r, !1);
                        else {
                            if (0 !== lB || null !== e && 0 != (128 & e.flags))
                                for (e = t.child; null !== e;) {
                                    if (null !== (a = af(e))) {
                                        for (t.flags |= 128, sw(r, !1), t.updateQueue = e = a.updateQueue, sy(t, e), t.subtreeFlags = 0, e = n, n = t.child; null !== n;) rC(n, e), n = n.sibling;
                                        return ac(t, 1 & au.current | 2), rY && rq(t, r.treeForkCount), t.child
                                    }
                                    e = e.sibling
                                }
                            null !== r.tail && ey() > lZ && (t.flags |= 128, i = !0, sw(r, !1), t.lanes = 4194304)
                        }
                    else {
                        if (!i)
                            if (null !== (e = af(a))) {
                                if (t.flags |= 128, i = !0, t.updateQueue = e = e.updateQueue, sy(t, e), sw(r, !0), null === r.tail && "collapsed" !== r.tailMode && "visible" !== r.tailMode && !a.alternate && !rY) return s_(t), null
                            } else 2 * ey() - r.renderingStartTime > lZ && 0x20000000 !== n && (t.flags |= 128, i = !0, sw(r, !1), t.lanes = 4194304);
                        r.isBackwards ? (a.sibling = t.child, t.child = a) : (null !== (e = r.last) ? e.sibling = a : t.child = a, r.last = a)
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
                        return r.rendering = e, r.tail = e.sibling, r.renderingStartTime = ey(), e.sibling = null, a = au.current, a = i ? 1 & a | 2 : 1 & a, "visible" === r.tailMode || "collapsed" === r.tailMode || !n || rY ? ac(t, a) : (n = a, et(an, t), et(au, n), null === ar && (ar = t)), rY && rq(t, r.treeForkCount), e
                    }
                    return s_(t), null;
                case 22:
                case 23:
                    return al(t), at(), r = null !== t.memoizedState, null !== e ? null !== e.memoizedState !== r && (t.flags |= 8192) : r && (t.flags |= 8192), r ? 0 != (0x20000000 & n) && 0 == (128 & t.flags) && (s_(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : s_(t), null !== (n = t.updateQueue) && sy(t, n.retryQueue), n = null, null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool), r = null, null !== t.memoizedState && null !== t.memoizedState.cachePool && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), null !== e && ee(iC), null;
                case 24:
                    return n = null, null !== e && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), ir(ig), s_(t), null;
                case 25:
                    return null;
                case 30:
                    return t.flags |= 0x2000000, s_(t), null
            }
            throw Error(l(156, t.tag))
        }(t.alternate, t, l$);
        if (null !== n) {
            lI = n;
            return
        }
        if (null !== (t = t.sibling)) {
            lI = t;
            return
        }
        lI = t = e
    } while (null !== t) 0 === lB && (lB = 5)
}

function uk(e, t) {
    do {
        var n = function(e, t) {
            switch (rQ(t), t.tag) {
                case 1:
                    return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                case 3:
                    return ir(ig), es(), 0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                case 26:
                case 27:
                case 5:
                    return eu(t), null;
                case 31:
                    if (null !== t.memoizedState) {
                        if (al(t), null === t.alternate) throw Error(l(340));
                        r5()
                    }
                    return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                case 13:
                    if (al(t), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                        if (null === t.alternate) throw Error(l(340));
                        r5()
                    }
                    return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                case 19:
                    return ad(t), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, null !== (e = t.memoizedState) && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
                case 4:
                    return es(), null;
                case 10:
                    return ir(t.type), null;
                case 22:
                case 23:
                    return al(t), at(), null !== e && ee(iC), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                case 24:
                    return ir(ig), null;
                default:
                    return null
            }
        }(e.alternate, e);
        if (null !== n) {
            n.flags &= 32767, lI = n;
            return
        }
        if (null !== (n = e.return) && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && null !== (e = e.sibling)) {
            lI = e;
            return
        }
        lI = e = n
    } while (null !== e) lB = 6, lI = null
}

function uT(e, t, n, r, i, a, o, s, u, c, d, f) {
    e.cancelPendingCommit = null;
    do uL(); while (0 !== l2) if (0 != (6 & lL)) throw Error(l(327));
    if (null !== t) {
        if (t === e.current) throw Error(l(177));
        e === lR && (lI = lR = null, lM = 0), l4 = t, l3 = e, l5 = n, l8 = i, l9 = r,
            function(e, t, n, r, i, a, o) {
                var s, l = t.lanes | t.childLanes;
                if (l6 = l, ! function(e, t, n, r, i, a) {
                        var o = e.pendingLanes;
                        e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
                        var s = e.entanglements,
                            l = e.expirationTimes,
                            u = e.hiddenUpdates;
                        for (n = o & ~n; 0 < n;) {
                            var c = 31 - eO(n),
                                d = 1 << c;
                            s[c] = 0, l[c] = -1;
                            var f = u[c];
                            if (null !== f)
                                for (u[c] = null, c = 0; c < f.length; c++) {
                                    var p = f[c];
                                    null !== p && (p.lane &= -0x20000001)
                                }
                            n &= ~d
                        }
                        0 !== r && e$(e, r, 0), 0 !== a && 0 === i && 0 !== e.tag && (e.suspendedLanes |= a & ~(o & ~t))
                    }(e, n, l |= rm, r, i, a), ue = null, (0x13ffff00 & n) === n ? (s = e.transitionTypes, e.transitionTypes = null, ut = s, r = 10262) : (ut = null, r = 10256), 0 != (t.subtreeFlags & r) || 0 != (t.flags & r) ? (e.callbackNode = null, e.callbackPriority = 0, em(eE, function() {
                        return uR(), null
                    })) : (e.callbackNode = null, e.callbackPriority = 0), sF = !1, r = 0 != (13878 & t.flags), 0 != (13878 & t.subtreeFlags) || r) {
                    r = G.T, G.T = null, i = K.p, K.p = 2, a = lL, lL |= 4;
                    try {
                        ! function(e, t, n) {
                            if (e = e.containerInfo, cg = dV, nK(e = nG(e))) {
                                if ("selectionStart" in e) var r = {
                                    start: e.selectionStart,
                                    end: e.selectionEnd
                                };
                                else e: {
                                    var i = (r = (r = e.ownerDocument) && r.defaultView || window).getSelection && r.getSelection();
                                    if (i && 0 !== i.rangeCount) {
                                        r = i.anchorNode;
                                        var a, o = i.anchorOffset,
                                            s = i.focusNode;
                                        i = i.focusOffset;
                                        try {
                                            r.nodeType, s.nodeType
                                        } catch (e) {
                                            r = null;
                                            break e
                                        }
                                        var l = 0,
                                            u = -1,
                                            c = -1,
                                            d = 0,
                                            f = 0,
                                            p = e,
                                            h = null;
                                        t: for (;;) {
                                            for (; p !== r || 0 !== o && 3 !== p.nodeType || (u = l + o), p !== s || 0 !== i && 3 !== p.nodeType || (c = l + i), 3 === p.nodeType && (l += p.nodeValue.length), null !== (a = p.firstChild);) h = p, p = a;
                                            for (;;) {
                                                if (p === e) break t;
                                                if (h === r && ++d === o && (u = l), h === s && ++f === i && (c = l), null !== (a = p.nextSibling)) break;
                                                h = (p = h).parentNode
                                            }
                                            p = a
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
                            for (cv = {
                                    focusedElem: e,
                                    selectionRange: r
                                }, dV = !1, n = (0x13ffff00 & n) === n, s6 = t, t = n ? 9270 : 1024; null !== s6;) {
                                if (e = s6, n && null !== (r = e.deletions))
                                    for (o = 0; o < r.length; o++) n && sY(r[o]);
                                if (null === e.alternate && 0 != (2 & e.flags)) n && sB(e), lt(n);
                                else {
                                    if (22 === e.tag) {
                                        if (r = e.alternate, null !== e.memoizedState) {
                                            null !== r && null === r.memoizedState && n && sY(r), lt(n);
                                            continue
                                        } else if (null !== r && null !== r.memoizedState) {
                                            n && sB(e), lt(n);
                                            continue
                                        }
                                    }
                                    r = e.child, 0 != (e.subtreeFlags & t) && null !== r ? (r.return = e, s6 = r) : (n && function e(t) {
                                        for (t = t.child; null !== t;) {
                                            if (30 === t.tag) {
                                                var n = t.memoizedProps,
                                                    r = ru(n, t.stateNode);
                                                n = rd(n.default, n.update), t.flags &= -5, "none" !== n && sW(t, r, n, t.memoizedState = [], !1)
                                            } else 0 != (0x2000000 & t.subtreeFlags) && e(t);
                                            t = t.sibling
                                        }
                                    }(e), lt(n))
                                }
                            }
                            s$ = null
                        }(e, t, n)
                    } finally {
                        lL = a, K.p = i, G.T = r
                    }
                }
                l2 = 1, sF ? l7 = function(e, t, n, r, i, a, o, s, l) {
                    var u = 9 === t.nodeType ? t : t.ownerDocument;
                    try {
                        var c = u.startViewTransition({
                            update: function() {
                                var t = u.defaultView,
                                    n = t.navigation && t.navigation.transition,
                                    o = u.fonts.status;
                                r();
                                var s = [];
                                if ("loaded" === o && (u.documentElement.clientHeight, "loading" === u.fonts.status && s.push(u.fonts.ready)), o = s.length, null !== e)
                                    for (var l = e.suspenseyImages, c = 0, d = 0; d < l.length; d++) {
                                        var f = l[d];
                                        if (!f.complete) {
                                            var p = f.getBoundingClientRect();
                                            if (0 < p.bottom && 0 < p.right && p.top < t.innerHeight && p.left < t.innerWidth) {
                                                if ((c += dO(f)) > dN) {
                                                    s.length = o;
                                                    break
                                                }
                                                f = new Promise(cU.bind(f)), s.push(f)
                                            }
                                        }
                                    }
                                return 0 < s.length ? (t = Promise.race([Promise.all(s), new Promise(function(e) {
                                    return setTimeout(e, 500)
                                })]).then(i, i), (n ? Promise.allSettled([n.finished, t]) : t).then(a, a)) : (i(), n) ? n.finished.then(a, a) : void a()
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
                                    i = r.pseudoElement;
                                if (null != i && i.startsWith("::view-transition")) {
                                    d.push(n), n = r.getKeyframes();
                                    for (var a = i = void 0, s = !0, l = 0; l < n.length; l++) {
                                        var c = n[l],
                                            f = c.width;
                                        if (void 0 === i) i = f;
                                        else if (i !== f) {
                                            s = !1;
                                            break
                                        }
                                        if (f = c.height, void 0 === a) a = f;
                                        else if (a !== f) {
                                            s = !1;
                                            break
                                        }
                                        delete c.width, delete c.height, "none" === c.transform && delete c.transform
                                    }
                                    s && void 0 !== i && void 0 !== a && (r.setKeyframes(n), (s = getComputedStyle(r.target, r.pseudoElement)).width !== i || s.height !== a) && ((s = n[0]).width = i, s.height = a, (s = n[n.length - 1]).width = i, s.height = a, r.setKeyframes(n))
                                }
                            }
                            o()
                        }, function(e) {
                            u.__reactViewTransition === c && (u.__reactViewTransition = null);
                            try {
                                "object" == typeof e && null !== e && "InvalidStateError" === e.name && ("View transition was skipped because document visibility state is hidden." === e.message || "Skipping view transition because document visibility state has become hidden." === e.message || "Skipping view transition because viewport size changed." === e.message || "Transition was aborted because of invalid state" === e.message) && (e = null), null !== e && l(e)
                            } finally {
                                r(), i(), o()
                            }
                        }), c.finished.finally(function() {
                            for (var e = 0; e < d.length; e++) d[e].cancel();
                            u.__reactViewTransition === c && (u.__reactViewTransition = null), s()
                        }), c
                    } catch (e) {
                        return r(), i(), o(), null
                    }
                }(o, e.containerInfo, ut, uO, uP, uC, uN, uR, ux) : (uO(), uP(), uN())
            }(e, t, n, o, s, u, f)
    }
}

function ux(e) {
    0 !== l2 && (0, l3.onRecoverableError)(e, {
        componentStack: null
    })
}

function uC() {
    3 === l2 && (l2 = 0, lg(l4, l3), l2 = 4)
}

function uO() {
    if (1 === l2) {
        l2 = 0;
        var e = l3,
            t = l4,
            n = l5,
            r = 0 != (13878 & t.flags);
        if (0 != (13878 & t.subtreeFlags) || r) {
            r = G.T, G.T = null;
            var i = K.p;
            K.p = 2;
            var a = lL;
            lL |= 4;
            try {
                s9 = s7 = !1, lp(t, e, n), n = cv;
                var o = nG(e.containerInfo),
                    s = n.focusedElem,
                    l = n.selectionRange;
                if (o !== s && s && s.ownerDocument && function e(t, n) {
                        return !!t && !!n && (t === n || (!t || 3 !== t.nodeType) && (n && 3 === n.nodeType ? e(t, n.parentNode) : "contains" in t ? t.contains(n) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n))))
                    }(s.ownerDocument.documentElement, s)) {
                    if (null !== l && nK(s)) {
                        var u = l.start,
                            c = l.end;
                        if (void 0 === c && (c = u), "selectionStart" in s) s.selectionStart = u, s.selectionEnd = Math.min(c, s.value.length);
                        else {
                            var d = s.ownerDocument || document,
                                f = d && d.defaultView || window;
                            if (f.getSelection) {
                                var p = f.getSelection(),
                                    h = s.textContent.length,
                                    m = Math.min(l.start, h),
                                    g = void 0 === l.end ? m : Math.min(l.end, h);
                                !p.extend && m > g && (o = g, g = m, m = o);
                                var v = nQ(s, m),
                                    b = nQ(s, g);
                                if (v && b && (1 !== p.rangeCount || p.anchorNode !== v.node || p.anchorOffset !== v.offset || p.focusNode !== b.node || p.focusOffset !== b.offset)) {
                                    var y = d.createRange();
                                    y.setStart(v.node, v.offset), p.removeAllRanges(), m > g ? (p.addRange(y), p.extend(b.node, b.offset)) : (y.setEnd(b.node, b.offset), p.addRange(y))
                                }
                            }
                        }
                    }
                    for (d = [], p = s; p = p.parentNode;) 1 === p.nodeType && d.push({
                        element: p,
                        left: p.scrollLeft,
                        top: p.scrollTop
                    });
                    for ("function" == typeof s.focus && s.focus(), s = 0; s < d.length; s++) {
                        var w = d[s];
                        w.element.scrollLeft = w.left, w.element.scrollTop = w.top
                    }
                }
                dV = !!cg, cv = cg = null
            } finally {
                lL = a, K.p = i, G.T = r
            }
        }
        e.current = t, l2 = 2
    }
}

function uP() {
    if (2 === l2) {
        l2 = 0;
        var e = l3,
            t = l4,
            n = 0 != (8772 & t.flags);
        if (0 != (8772 & t.subtreeFlags) || n) {
            n = G.T, G.T = null;
            var r = K.p;
            K.p = 2;
            var i = lL;
            lL |= 4;
            try {
                ln(e, t.alternate, t)
            } finally {
                lL = i, K.p = r, G.T = n
            }
        }
        l2 = 3
    }
}

function uN() {
    if (4 === l2 || 3 === l2) {
        l2 = 0;
        var e = l7;
        l7 = null, eb();
        var t = l3,
            n = l4,
            r = l5,
            i = l9,
            a = (0x13ffff00 & r) === r ? 10262 : 10256;
        if (0 != (n.subtreeFlags & a) || 0 != (n.flags & a) ? l2 = 5 : (l2 = 0, l4 = l3 = null, uA(t, t.pendingLanes)), 0 === (a = t.pendingLanes) && (l1 = null), eV(r), n = n.stateNode, eC && "function" == typeof eC.onCommitFiberRoot) try {
            eC.onCommitFiberRoot(ex, n, void 0, 128 == (128 & n.current.flags))
        } catch (e) {}
        if (null !== i) {
            n = G.T, a = K.p, K.p = 2, G.T = null;
            try {
                for (var o = t.onRecoverableError, s = 0; s < i.length; s++) {
                    var l = i[s];
                    o(l.value, {
                        componentStack: l.stack
                    })
                }
            } finally {
                G.T = n, K.p = a
            }
        }
        if (i = ue, o = ut, ut = null, null !== i && (ue = null, null === o && (o = []), null !== e))
            for (l = 0; l < i.length; l++) void 0 !== (n = (0, i[l])(o)) && e.finished.finally(n);
        0 != (3 & l5) && uL(), uQ(t), a = t.pendingLanes, 0 != (261930 & r) && 0 != (42 & a) ? t === ur ? un++ : (un = 0, ur = t) : (un = 0, ur = null), uG(0, !1)
    }
}

function uA(e, t) {
    0 == (e.pooledCacheLanes &= t) && null != (t = e.pooledCache) && (e.pooledCache = null, ib(t))
}

function uL() {
    return null !== l7 && (l7.skipTransition(), l7 = null), uO(), uP(), uN(), uR()
}

function uR() {
    if (5 !== l2) return !1;
    var e = l3,
        t = l6;
    l6 = 0;
    var n = eV(l5),
        r = G.T,
        i = K.p;
    try {
        K.p = 32 > n ? 32 : n, G.T = null, n = l8, l8 = null;
        var a = l3,
            o = l5;
        if (l2 = 0, l4 = l3 = null, l5 = 0, 0 != (6 & lL)) throw Error(l(331));
        var s = lL;
        if (lL |= 4, lO(a.current), l_(a, a.current, o, n), lL = s, uG(0, !1), eC && "function" == typeof eC.onPostCommitFiberRoot) try {
            eC.onPostCommitFiberRoot(ex, a)
        } catch (e) {}
        return !0
    } finally {
        K.p = i, G.T = r, uA(e, t)
    }
}

function uI(e, t, n) {
    t = rI(n, t), t = oV(e.stateNode, t, 2), null !== (e = iZ(e, t, 2)) && (eF(e, 2), uQ(e))
}

function uM(e, t, n) {
    if (3 === e.tag) uI(e, e, n);
    else
        for (; null !== t;) {
            if (3 === t.tag) {
                uI(t, e, n);
                break
            }
            if (1 === t.tag) {
                var r = t.stateNode;
                if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === l1 || !l1.has(r))) {
                    e = rI(n, e), null !== (r = iZ(t, n = oW(2), 2)) && (oQ(n, r, t, e), eF(r, 2), uQ(r));
                    break
                }
            }
            t = t.return
        }
}

function uD(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
        r = e.pingCache = new lA;
        var i = new Set;
        r.set(t, i)
    } else void 0 === (i = r.get(t)) && (i = new Set, r.set(t, i));
    i.has(n) || (lF = !0, i.add(n), e = uz.bind(null, e, t, n), t.then(e, e))
}

function uz(e, t, n) {
    var r = e.pingCache;
    null !== r && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, lR === e && (lM & n) === n && ((4 === lB || 3 === lB && (0x3c00000 & lM) === lM && 300 > ey() - lY) && 0 == (2 & lL) ? up(e, 0) : lV |= n, lQ === lM && (lQ = 0)), uQ(e)
}

function uU(e, t) {
    0 === t && (t = eU()), null !== (e = ry(e, t)) && (eF(e, t), uQ(e))
}

function uj(e) {
    var t = e.memoizedState,
        n = 0;
    null !== t && (n = t.retryLane), uU(e, n)
}

function uF(e, t) {
    var n = 0;
    switch (e.tag) {
        case 31:
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            null !== i && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        case 22:
            r = e.stateNode._retryCache;
            break;
        default:
            throw Error(l(314))
    }
    null !== r && r.delete(t), uU(e, n)
}
var u$ = null,
    uB = null,
    uH = !1,
    uq = !1,
    uV = !1,
    uW = 0;

function uQ(e) {
    e !== uB && null === e.next && (null === uB ? u$ = uB = e : uB = uB.next = e), uq = !0, uH || (uH = !0, cO(function() {
        0 != (6 & lL) ? em(e_, uK) : uX()
    }))
}

function uG(e, t) {
    if (!uV && uq) {
        uV = !0;
        do
            for (var n = !1, r = u$; null !== r;) {
                if (!t)
                    if (0 !== e) {
                        var i = r.pendingLanes;
                        if (0 === i) var a = 0;
                        else {
                            var o = r.suspendedLanes,
                                s = r.pingedLanes;
                            a = 0xc000095 & (a = (1 << 31 - eO(42 | e) + 1) - 1 & (i & ~(o & ~s))) ? 0xc000095 & a | 1 : a ? 2 | a : 0
                        }
                        0 !== a && (n = !0, uZ(r, a))
                    } else a = lM, 0 == (3 & (a = eM(r, r === lR ? a : 0, null !== r.cancelPendingCommit || -1 !== r.timeoutHandle))) || eD(r, a) || (n = !0, uZ(r, a));
                r = r.next
            }
        while (n) uV = !1
    }
}

function uK() {
    uX()
}

function uX() {
    uq = uH = !1;
    var e, t = 0;
    0 === uW || ((e = window.event) && "popstate" === e.type ? e === cE || (cE = e, 0) : (cE = null, 1)) || (t = uW);
    for (var n = ey(), r = null, i = u$; null !== i;) {
        var a = i.next,
            o = uY(i, n);
        0 === o ? (i.next = null, null === r ? u$ = a : r.next = a, null === a && (uB = r)) : (r = i, (0 !== t || 0 != (3 & o)) && (uq = !0)), i = a
    }
    0 !== l2 && 5 !== l2 || uG(t, !1), 0 !== uW && (uW = 0)
}

function uY(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = -0x3c00001 & e.pendingLanes; 0 < a;) {
        var o = 31 - eO(a),
            s = 1 << o,
            l = i[o]; - 1 === l ? (0 == (s & n) || 0 != (s & r)) && (i[o] = function(e, t) {
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
        }(s, t)) : l <= t && (e.expiredLanes |= s), a &= ~s
    }
    if (t = lR, n = lM, n = eM(e, e === t ? n : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle), r = e.callbackNode, 0 === n || e === t && (2 === lD || 9 === lD) || null !== e.cancelPendingCommit) return null !== r && null !== r && eg(r), e.callbackNode = null, e.callbackPriority = 0;
    if (0 == (3 & n) || eD(e, n)) {
        if ((t = n & -n) === e.callbackPriority) return t;
        switch (null !== r && eg(r), eV(n)) {
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
        return n = em(n, r = uJ.bind(null, e)), e.callbackPriority = t, e.callbackNode = n, t
    }
    return null !== r && null !== r && eg(r), e.callbackPriority = 2, e.callbackNode = null, 2
}

function uJ(e, t) {
    if (0 !== l2 && 5 !== l2) return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (uL() && e.callbackNode !== n) return null;
    var r = lM;
    return 0 === (r = eM(e, e === lR ? r : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle)) ? null : (ul(e, r, t), uY(e, ey()), null != e.callbackNode && e.callbackNode === n ? uJ.bind(null, e) : null)
}

function uZ(e, t) {
    if (uL()) return null;
    ul(e, t, !0)
}

function u0() {
    if (0 === uW) {
        var e = iE;
        0 === e && (e = eA, 0 == (261888 & (eA <<= 1)) && (eA = 256)), uW = e
    }
    return uW
}

function u1(e) {
    return null == e || "symbol" == typeof e || "boolean" == typeof e ? null : "function" == typeof e ? e : tL(e)
}
for (var u2 = 0; u2 < ro.length; u2++) {
    var u3 = ro[u2];
    rs(u3.toLowerCase(), "on" + (u3[0].toUpperCase() + u3.slice(1)))
}
rs(n8, "onAnimationCancel"), rs(n9, "onAnimationEnd"), rs(n7, "onAnimationIteration"), rs(re, "onAnimationStart"), rs("dblclick", "onDoubleClick"), rs("focusin", "onFocus"), rs("focusout", "onBlur"), rs(rt, "onTransitionRun"), rs(rn, "onTransitionStart"), rs(rr, "onTransitionCancel"), rs(ri, "onTransitionEnd"), ti("onMouseEnter", ["mouseout", "mouseover"]), ti("onMouseLeave", ["mouseout", "mouseover"]), ti("onPointerEnter", ["pointerout", "pointerover"]), ti("onPointerLeave", ["pointerout", "pointerover"]), tr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), tr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), tr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), tr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), tr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), tr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var u4 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    u5 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(u4));

function u6(e, t) {
    t = 0 != (4 & t);
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var a = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var s = r[o],
                        l = s.instance,
                        u = s.currentTarget;
                    if (s = s.listener, l !== a && i.isPropagationStopped()) break e;
                    a = s, i.currentTarget = u;
                    try {
                        a(i)
                    } catch (e) {
                        rf(e)
                    }
                    i.currentTarget = null, a = l
                } else
                    for (o = 0; o < r.length; o++) {
                        if (l = (s = r[o]).instance, u = s.currentTarget, s = s.listener, l !== a && i.isPropagationStopped()) break e;
                        a = s, i.currentTarget = u;
                        try {
                            a(i)
                        } catch (e) {
                            rf(e)
                        }
                        i.currentTarget = null, a = l
                    }
        }
    }
}

function u8(e, t) {
    var n = t[eJ];
    void 0 === n && (n = t[eJ] = new Set);
    var r = e + "__bubble";
    n.has(r) || (ct(t, e, 2, !1), n.add(r))
}

function u9(e, t, n) {
    var r = 0;
    t && (r |= 4), ct(n, e, r, t)
}
var u7 = "_reactListening" + Math.random().toString(36).slice(2);

function ce(e) {
    if (!e[u7]) {
        e[u7] = !0, tt.forEach(function(t) {
            "selectionchange" !== t && (u5.has(t) || u9(t, !1, e), u9(t, !0, e))
        });
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[u7] || (t[u7] = !0, u9("selectionchange", !1, t))
    }
}

function ct(e, t, n, r) {
    switch (dJ(t)) {
        case 2:
            var i = dW;
            break;
        case 8:
            i = dQ;
            break;
        default:
            i = dG
    }
    n = i.bind(null, t, n, e), i = void 0, tH && ("touchstart" === t || "touchmove" === t || "wheel" === t) && (i = !0), r ? void 0 !== i ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : void 0 !== i ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}

function cn(e, t, n, r, i) {
    var a = r;
    if (0 == (1 & t) && 0 == (2 & t) && null !== r) e: for (;;) {
        if (null === r) return;
        var o = r.tag;
        if (3 === o || 4 === o) {
            var s = r.stateNode.containerInfo;
            if (s === i) break;
            if (4 === o)
                for (o = r.return; null !== o;) {
                    var l = o.tag;
                    if ((3 === l || 4 === l) && o.stateNode.containerInfo === i) return;
                    o = o.return
                }
            for (; null !== s;) {
                if (null === (o = e5(s))) return;
                if (5 === (l = o.tag) || 6 === l || 26 === l || 27 === l) {
                    r = a = o;
                    continue e
                }
                s = s.parentNode
            }
        }
        r = r.return
    }
    tF(function() {
        var r = a,
            i = tM(n),
            o = [];
        e: {
            var s = ra.get(e);
            if (void 0 !== s) {
                var l = t5,
                    u = e;
                switch (e) {
                    case "keypress":
                        if (0 === tK(n)) break e;
                    case "keydown":
                    case "keyup":
                        l = nc;
                        break;
                    case "focusin":
                        u = "focus", l = nt;
                        break;
                    case "focusout":
                        u = "blur", l = nt;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        l = nt;
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
                        l = t7;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        l = ne;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        l = np;
                        break;
                    case n8:
                    case n9:
                    case n7:
                    case re:
                        l = nn;
                        break;
                    case ri:
                        l = nh;
                        break;
                    case "scroll":
                    case "scrollend":
                        l = t8;
                        break;
                    case "wheel":
                        l = nm;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        l = nr;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        l = nd;
                        break;
                    case "submit":
                        l = nf;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        l = ng
                }
                var d = 0 != (4 & t),
                    f = !d && ("scroll" === e || "scrollend" === e || "toggle" === e || "beforetoggle" === e),
                    p = d ? null !== s ? s + "Capture" : null : s;
                d = [];
                for (var h, m = r; null !== m;) {
                    var g = m;
                    if (h = g.stateNode, 5 !== (g = g.tag) && 26 !== g && 27 !== g || null === h || null === p || null != (g = t$(m, p)) && d.push(cr(m, g, h)), f) break;
                    m = m.return
                }
                0 < d.length && (s = new l(s, u, null, n, i), o.push({
                    event: s,
                    listeners: d
                }))
            }
        }
        if (0 == (7 & t)) {
            l = "mouseover" === e || "pointerover" === e, s = "mouseout" === e || "pointerout" === e, !(l && n !== tI && (u = n.relatedTarget || n.fromElement) && (e5(u) || u[eY])) && (s || l) && (u = i.window === i ? i : (l = i.ownerDocument) ? l.defaultView || l.parentWindow : window, s ? (l = n.relatedTarget || n.toElement, s = r, null !== (l = l ? e5(l) : null) && (f = c(l), d = l.tag, l !== f || 5 !== d && 27 !== d && 6 !== d) && (l = null)) : (s = null, l = r), s !== l && (d = t7, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", ("pointerout" === e || "pointerover" === e) && (d = nd, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = null == s ? u : e8(s), h = null == l ? u : e8(l), (u = new d(g, m + "leave", s, n, i)).target = f, u.relatedTarget = h, g = null, e5(i) === r && ((d = new d(p, m + "enter", l, n, i)).target = h, d.relatedTarget = f, g = d), f = g, d = s && l ? k(s, l, ca) : null, null !== s && co(o, u, s, d, !1), null !== l && null !== f && co(o, f, l, d, !0)));
            e: {
                if ("select" === (l = (s = r ? e8(r) : window).nodeName && s.nodeName.toLowerCase()) || "input" === l && "file" === s.type) var v, b = nR;
                else if (nC(s))
                    if (nI) b = nB;
                    else {
                        b = nF;
                        var y = nj
                    }
                else(l = s.nodeName) && "input" === l.toLowerCase() && ("checkbox" === s.type || "radio" === s.type) ? b = n$ : r && tP(r.elementType) && (b = nR);
                if (b && (b = b(e, r))) {
                    nO(o, b, n, i);
                    break e
                }
                y && y(e, s, r)
            }
            switch (y = r ? e8(r) : window, e) {
                case "focusin":
                    (nC(y) || "true" === y.contentEditable) && (nY = y, nJ = r, nZ = null);
                    break;
                case "focusout":
                    nZ = nJ = nY = null;
                    break;
                case "mousedown":
                    n0 = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    n0 = !1, n1(o, n, i);
                    break;
                case "selectionchange":
                    if (nX) break;
                case "keydown":
                case "keyup":
                    n1(o, n, i)
            }
            if (nb) t: {
                switch (e) {
                    case "compositionstart":
                        var w = "onCompositionStart";
                        break t;
                    case "compositionend":
                        w = "onCompositionEnd";
                        break t;
                    case "compositionupdate":
                        w = "onCompositionUpdate";
                        break t
                }
                w = void 0
            }
            else nT ? nE(e, n) && (w = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (w = "onCompositionStart");
            w && (n_ && "ko" !== n.locale && (nT || "onCompositionStart" !== w ? "onCompositionEnd" === w && nT && (v = tG()) : (tW = "value" in (tV = i) ? tV.value : tV.textContent, nT = !0)), 0 < (y = ci(r, w)).length && (w = new ni(w, e, null, n, i), o.push({
                event: w,
                listeners: y
            }), v ? w.data = v : null !== (v = nk(n)) && (w.data = v))), (v = nw ? function(e, t) {
                switch (e) {
                    case "compositionend":
                        return nk(t);
                    case "keypress":
                        if (32 !== t.which) return null;
                        return nS = !0, " ";
                    case "textInput":
                        return " " === (e = t.data) && nS ? null : e;
                    default:
                        return null
                }
            }(e, n) : function(e, t) {
                if (nT) return "compositionend" === e || !nb && nE(e, t) ? (e = tG(), tQ = tW = tV = null, nT = !1, e) : null;
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
                        return n_ && "ko" !== t.locale ? null : t.data
                }
            }(e, n)) && 0 < (w = ci(r, "onBeforeInput")).length && (y = new ni("onBeforeInput", "beforeinput", null, n, i), o.push({
                event: y,
                listeners: w
            }), y.data = v);
            var _ = e;
            if ("submit" === _ && r && r.stateNode === i) {
                var S = u1((i[eX] || null).action),
                    E = n.submitter;
                E && null !== (_ = (_ = E[eX] || null) ? u1(_.formAction) : E.getAttribute("formAction")) && (S = _, E = null);
                var T = new t5("action", "action", null, n, i);
                o.push({
                    event: T,
                    listeners: [{
                        instance: null,
                        listener: function() {
                            if (n.defaultPrevented) {
                                if (0 !== uW) {
                                    var e = new FormData(i, E);
                                    ov(r, {
                                        pending: !0,
                                        data: e,
                                        method: i.method,
                                        action: S
                                    }, null, e)
                                }
                            } else "function" == typeof S && (T.preventDefault(), ov(r, {
                                pending: !0,
                                data: e = new FormData(i, E),
                                method: i.method,
                                action: S
                            }, S, e))
                        },
                        currentTarget: i
                    }]
                })
            }
        }
        u6(o, t)
    })
}

function cr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function ci(e, t) {
    for (var n = t + "Capture", r = []; null !== e;) {
        var i = e,
            a = i.stateNode;
        if (5 !== (i = i.tag) && 26 !== i && 27 !== i || null === a || (null != (i = t$(e, n)) && r.unshift(cr(e, i, a)), null != (i = t$(e, t)) && r.push(cr(e, i, a))), 3 === e.tag) return r;
        e = e.return
    }
    return []
}

function ca(e) {
    if (null === e) return null;
    do e = e.return; while (e && 5 !== e.tag && 27 !== e.tag) return e || null
}

function co(e, t, n, r, i) {
    for (var a = t._reactName, o = []; null !== n && n !== r;) {
        var s = n,
            l = s.alternate,
            u = s.stateNode;
        if (s = s.tag, null !== l && l === r) break;
        5 !== s && 26 !== s && 27 !== s || null === u || (l = u, i ? null != (u = t$(n, a)) && o.unshift(cr(n, u, l)) : i || null != (u = t$(n, a)) && o.push(cr(n, u, l))), n = n.return
    }
    0 !== o.length && e.push({
        event: t,
        listeners: o
    })
}
var cs = /\r\n?/g,
    cl = /\u0000|\uFFFD/g;

function cu(e) {
    return ("string" == typeof e ? e : "" + e).replace(cs, "\n").replace(cl, "")
}

function cc(e, t) {
    return t = cu(t), cu(e) === t
}

function cd(e, t, n, r, i, a) {
    switch (n) {
        case "children":
            if ("string" == typeof r) "body" === t || "textarea" === t && "" === r || tT(e, r);
            else {
                if ("number" != typeof r && "bigint" != typeof r) return;
                "body" !== t && tT(e, "" + r)
            }
            break;
        case "className":
            td(e, "class", r);
            break;
        case "tabIndex":
            td(e, "tabindex", r);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            td(e, n, r);
            break;
        case "style":
            tO(e, r, a);
            return;
        case "data":
            if ("object" !== t) {
                td(e, "data", r);
                break
            }
        case "src":
        case "href":
            if ("" === r && ("a" !== t || "href" !== n) || null == r || "function" == typeof r || "symbol" == typeof r || "boolean" == typeof r) {
                e.removeAttribute(n);
                break
            }
            r = tL(r), e.setAttribute(n, r);
            break;
        case "action":
        case "formAction":
            if ("function" == typeof r) {
                e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            }
            if ("function" == typeof a && ("formAction" === n ? ("input" !== t && cd(e, t, "name", i.name, i, null), cd(e, t, "formEncType", i.formEncType, i, null), cd(e, t, "formMethod", i.formMethod, i, null), cd(e, t, "formTarget", i.formTarget, i, null)) : (cd(e, t, "encType", i.encType, i, null), cd(e, t, "method", i.method, i, null), cd(e, t, "target", i.target, i, null))), null == r || "symbol" == typeof r || "boolean" == typeof r) {
                e.removeAttribute(n);
                break
            }
            r = tL(r), e.setAttribute(n, r);
            break;
        case "onClick":
            null != r && (e.onclick = tR);
            return;
        case "onScroll":
            null != r && u8("scroll", e);
            return;
        case "onScrollEnd":
            null != r && u8("scrollend", e);
            return;
        case "dangerouslySetInnerHTML":
            if (null != r) {
                if ("object" != typeof r || !("__html" in r)) throw Error(l(61));
                if (null != (n = r.__html)) {
                    if (null != i.children) throw Error(l(60));
                    (null != a ? a.__html : void 0) !== n && (e.innerHTML = n)
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
            n = tL(r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
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
            u8("beforetoggle", e), u8("toggle", e), tc(e, "popover", r);
            break;
        case "xlinkActuate":
            tf(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
            break;
        case "xlinkArcrole":
            tf(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
            break;
        case "xlinkRole":
            tf(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
            break;
        case "xlinkShow":
            tf(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
            break;
        case "xlinkTitle":
            tf(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
            break;
        case "xlinkType":
            tf(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
            break;
        case "xmlBase":
            tf(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
            break;
        case "xmlLang":
            tf(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
            break;
        case "xmlSpace":
            tf(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
            break;
        case "is":
            tc(e, "is", r);
            break;
        case "innerText":
        case "textContent":
            return;
        default:
            if (2 < n.length && ("o" === n[0] || "O" === n[0]) && ("n" === n[1] || "N" === n[1])) return;
            tc(e, n = tN.get(n) || n, r)
    }
    tl = !0
}

function cf(e, t, n, r, i, a) {
    switch (n) {
        case "style":
            tO(e, r, a);
            return;
        case "dangerouslySetInnerHTML":
            if (null != r) {
                if ("object" != typeof r || !("__html" in r)) throw Error(l(61));
                if (null != (n = r.__html)) {
                    if (null != i.children) throw Error(l(60));
                    (null != a ? a.__html : void 0) !== n && (e.innerHTML = n)
                }
            }
            break;
        case "children":
            if ("string" == typeof r) tT(e, r);
            else {
                if ("number" != typeof r && "bigint" != typeof r) return;
                tT(e, "" + r)
            }
            break;
        case "onScroll":
            null != r && u8("scroll", e);
            return;
        case "onScrollEnd":
            null != r && u8("scrollend", e);
            return;
        case "onClick":
            null != r && (e.onclick = tR);
            return;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
        case "innerText":
        case "textContent":
            return;
        default:
            if (!tn.hasOwnProperty(n)) e: {
                if ("o" === n[0] && "n" === n[1] && (i = n.endsWith("Capture"), a = n.slice(2, i ? n.length - 7 : void 0), "function" == typeof(t = null != (t = e[eX] || null) ? t[n] : null) && e.removeEventListener(a, t, i), "function" == typeof r)) {
                    "function" != typeof t && null !== t && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(a, r, i);
                    break e
                }
                tl = !0,
                n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : tc(e, n, r)
            }
            return
    }
    tl = !0
}

function cp(e, t, n) {
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
            u8("error", e), u8("load", e);
            var r, i = !1,
                a = !1;
            for (r in n)
                if (n.hasOwnProperty(r)) {
                    var o = n[r];
                    if (null != o) switch (r) {
                        case "src":
                            i = !0;
                            break;
                        case "srcSet":
                            a = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(l(137, t));
                        default:
                            cd(e, t, r, o, n, null)
                    }
                } a && cd(e, t, "srcSet", n.srcSet, n, null), i && cd(e, t, "src", n.src, n, null);
            return;
        case "input":
            u8("invalid", e);
            var s = r = o = a = null,
                u = null,
                c = null;
            for (i in n)
                if (n.hasOwnProperty(i)) {
                    var d = n[i];
                    if (null != d) switch (i) {
                        case "name":
                            a = d;
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
                            s = d;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (null != d) throw Error(l(137, t));
                            break;
                        default:
                            cd(e, t, i, d, n, null)
                    }
                } tw(e, r, s, u, c, o, a, !1);
            return;
        case "select":
            for (a in u8("invalid", e), i = o = r = null, n)
                if (n.hasOwnProperty(a) && null != (s = n[a])) switch (a) {
                    case "value":
                        r = s;
                        break;
                    case "defaultValue":
                        o = s;
                        break;
                    case "multiple":
                        i = s;
                    default:
                        cd(e, t, a, s, n, null)
                }
            t = r, n = o, e.multiple = !!i, null != t ? tS(e, !!i, t, !1) : null != n && tS(e, !!i, n, !0);
            return;
        case "textarea":
            for (o in u8("invalid", e), r = a = i = null, n)
                if (n.hasOwnProperty(o) && null != (s = n[o])) switch (o) {
                    case "value":
                        i = s;
                        break;
                    case "defaultValue":
                        a = s;
                        break;
                    case "children":
                        r = s;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (null != s) throw Error(l(91));
                        break;
                    default:
                        cd(e, t, o, s, n, null)
                }
            tk(e, i, a, r);
            return;
        case "option":
            for (u in n) n.hasOwnProperty(u) && null != (i = n[u]) && ("selected" === u ? e.selected = i && "function" != typeof i && "symbol" != typeof i : cd(e, t, u, i, n, null));
            return;
        case "dialog":
            u8("beforetoggle", e), u8("toggle", e), u8("cancel", e), u8("close", e);
            break;
        case "iframe":
        case "object":
            u8("load", e);
            break;
        case "video":
        case "audio":
            for (i = 0; i < u4.length; i++) u8(u4[i], e);
            break;
        case "image":
            u8("error", e), u8("load", e);
            break;
        case "details":
            u8("toggle", e);
            break;
        case "embed":
        case "source":
        case "link":
            u8("error", e), u8("load", e);
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
                if (n.hasOwnProperty(c) && null != (i = n[c])) switch (c) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(l(137, t));
                    default:
                        cd(e, t, c, i, n, null)
                }
            return;
        default:
            if (tP(t)) {
                for (d in n) n.hasOwnProperty(d) && void 0 !== (i = n[d]) && cf(e, t, d, i, n, void 0);
                return
            }
    }
    for (s in n) n.hasOwnProperty(s) && null != (i = n[s]) && cd(e, t, s, i, n, null)
}
var ch = {};

function cm(e) {
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
var cg = null,
    cv = null;

function cb(e) {
    return 9 === e.nodeType ? e : e.ownerDocument
}

function cy(e) {
    switch (e) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
    }
}

function cw(e, t) {
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

function c_(e, t, n, r) {
    return (n = cb(n).createElement(e))[eK] = r, n[eX] = t, cp(n, e, t), e7(n), n
}

function cS(e, t) {
    return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "bigint" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
}
var cE = null,
    ck = "function" == typeof setTimeout ? setTimeout : void 0,
    cT = "function" == typeof clearTimeout ? clearTimeout : void 0,
    cx = "function" == typeof Promise ? Promise : void 0,
    cC = "function" == typeof requestAnimationFrame ? requestAnimationFrame : ck,
    cO = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== cx ? function(e) {
        return cx.resolve(null).then(e).catch(cP)
    } : ck;

function cP(e) {
    setTimeout(function() {
        throw e
    })
}

function cN(e) {
    return "head" === e
}

function cA(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && 8 === i.nodeType)
            if ("/$" === (n = i.data) || "/&" === n) {
                if (0 === r) {
                    e.removeChild(i), fo(t);
                    return
                }
                r--
            } else if ("$" === n || "$?" === n || "$~" === n || "$!" === n || "&" === n) r++;
        else if ("html" === n) da(e.ownerDocument.documentElement);
        else if ("head" === n) {
            da(n = e.ownerDocument.head);
            for (var a = n.firstChild; a;) {
                var o = a.nextSibling,
                    s = a.nodeName;
                a[e2] || "SCRIPT" === s || "STYLE" === s || "LINK" === s && "stylesheet" === a.rel.toLowerCase() || n.removeChild(a), a = o
            }
        } else "body" === n && da(e.ownerDocument.body);
        n = i
    } while (n) fo(t)
}

function cL(e, t) {
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

function cR(e, t, n) {
    if (t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t, e.style.viewTransitionName = t, null != n && (e.style.viewTransitionClass = n), "inline" === (n = getComputedStyle(e)).display) {
        if (1 === (t = e.getClientRects()).length) var r = 1;
        else
            for (var i = r = 0; i < t.length; i++) {
                var a = t[i];
                0 < a.width && 0 < a.height && r++
            }
        1 === r && ((e = e.style).display = 1 === t.length ? "inline-block" : "block", e.marginTop = "-" + n.paddingTop, e.marginBottom = "-" + n.paddingBottom)
    }
}

function cI(e, t) {
    e = e.style;
    var n = null != (t = t.style) ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
    e.viewTransitionName = null == n || "boolean" == typeof n ? "" : ("" + n).trim(), n = null != t ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, e.viewTransitionClass = null == n || "boolean" == typeof n ? "" : ("" + n).trim(), "inline-block" === e.display && (null == t ? e.display = e.margin = "" : (n = t.display, e.display = null == n || "boolean" == typeof n ? "" : n, null != (n = t.margin) ? e.margin = n : (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = null == n || "boolean" == typeof n ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = null == t || "boolean" == typeof t ? "" : t)))
}

function cM(e, t, n) {
    return n = n.ownerDocument.defaultView, {
        rect: e,
        abs: "absolute" === t.position || "fixed" === t.position,
        clip: "none" !== t.clipPath || "visible" !== t.overflow || "none" !== t.filter || "none" !== t.mask || "none" !== t.mask || "0px" !== t.borderRadius,
        view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
    }
}

function cD(e) {
    return cM(e.getBoundingClientRect(), getComputedStyle(e), e)
}

function cz(e) {
    var t = e.getBoundingClientRect();
    return cM(t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height), getComputedStyle(e), e)
}

function cU(e) {
    this.addEventListener("load", e), this.addEventListener("error", e)
}

function cj(e, t) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")"
}

function cF(e) {
    return {
        name: e,
        group: new cj("group", e),
        imagePair: new cj("image-pair", e),
        old: new cj("old", e),
        new: new cj("new", e)
    }
}

function c$(e) {
    this._fragmentFiber = e, this._observers = this._eventListeners = null
}

function cB(e, t, n, r) {
    return b(e).addEventListener(t, n, r), !1
}

function cH(e, t, n, r) {
    return b(e).removeEventListener(t, n, r), !1
}

function cq(e) {
    return null != e && "boolean" != typeof e && (!0 === e.once || e.signal instanceof AbortSignal) ? {
        capture: e.capture,
        passive: e.passive
    } : e
}

function cV(e) {
    return null == e ? "c=0" : "boolean" == typeof e ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0")
}

function cW(e, t, n, r) {
    if (0 === e.length) return -1;
    r = cV(r);
    for (var i = 0; i < e.length; i++) {
        var a = e[i];
        if (a.type === t && a.listener === n && cV(a.optionsOrUseCapture) === r) return i
    }
    return -1
}

function cQ(e, t) {
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
    }(e = b(e), t)
}

function cG(e, t) {
    return t.push(e), !1
}

function cK(e, t) {
    return 6 !== e.tag && !!((e = b(e)) === t || e.contains(t)) && (t.blur(), !0)
}

function cX(e, t) {
    return 6 !== e.tag && (e = b(e), t.observe(e), !1)
}

function cY(e, t) {
    return 6 !== e.tag && (e = b(e), t.unobserve(e), !1)
}
cj.prototype.animate = function(e, t) {
    return (t = "number" == typeof t ? {
        duration: t
    } : T({}, t)).pseudoElement = this._selector, this._scope.animate(e, t)
}, cj.prototype.getAnimations = function() {
    for (var e = this._scope, t = this._selector, n = e.getAnimations({
            subtree: !0
        }), r = [], i = 0; i < n.length; i++) {
        var a = n[i].effect;
        null !== a && a.target === e && a.pseudoElement === t && r.push(n[i])
    }
    return r
}, cj.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector)
}, c$.prototype.addEventListener = function(e, t, n) {
    var r = null,
        i = null;
    if (null == n || "boolean" == typeof n || null === (r = n.signal || null) || !r.aborted) {
        null === this._eventListeners && (this._eventListeners = []);
        var a = this._eventListeners;
        if (-1 === cW(a, e, t, n)) {
            var o = this,
                s = t;
            null != n && "boolean" != typeof n && !0 === n.once && (s = function(r) {
                o.removeEventListener(e, t, n), "function" == typeof t ? t.call(this, r) : t.handleEvent(r)
            }), null !== r && (i = o.removeEventListener.bind(o, e, t, n), r.addEventListener("abort", i, {
                once: !0
            }), i = r.removeEventListener.bind(r, "abort", i)), r = cq(n), a.push({
                type: e,
                listener: t,
                optionsOrUseCapture: n,
                attachedListener: s,
                cleanup: i
            }), h(this._fragmentFiber.child, !1, cB, e, s, r)
        }
        this._eventListeners = a
    }
}, c$.prototype.removeEventListener = function(e, t, n) {
    var r = this._eventListeners;
    if (null !== r && -1 !== (t = cW(r, e, t, n))) {
        var i = r[t];
        n = i.attachedListener;
        var a = i.cleanup;
        i = cq(i.optionsOrUseCapture), h(this._fragmentFiber.child, !1, cH, e, n, i), r.splice(t, 1), null !== a && a()
    }
}, c$.prototype.dispatchEvent = function(e) {
    var t = m(this._fragmentFiber);
    if (null === t) return !0;
    t = b(t);
    var n = this._eventListeners;
    if (null !== n && 0 < n.length || !e.bubbles) {
        var r = 9 === t.nodeType ? t.createComment("") : document.createTextNode("");
        if (n)
            for (var i = 0; i < n.length; i++) {
                var a = n[i];
                r.addEventListener(a.type, a.attachedListener, cq(a.optionsOrUseCapture))
            }
        if (t.appendChild(r), e = r.dispatchEvent(e), n)
            for (i = 0; i < n.length; i++) a = n[i], r.removeEventListener(a.type, a.attachedListener, cq(a.optionsOrUseCapture));
        return t.removeChild(r), e
    }
    return t.dispatchEvent(e)
}, c$.prototype.focus = function(e) {
    h(this._fragmentFiber.child, !0, cQ, e, void 0, void 0)
}, c$.prototype.focusLast = function(e) {
    var t = [];
    h(this._fragmentFiber.child, !0, cG, t, void 0, void 0);
    for (var n = t.length - 1; 0 <= n && !cQ(t[n], e); n--);
}, c$.prototype.blur = function() {
    var e = m(this._fragmentFiber);
    null !== e && null !== (e = cb(e = b(e)).activeElement) && h(this._fragmentFiber.child, !1, cK, e, void 0, void 0)
}, c$.prototype.observeUsing = function(e) {
    null === this._observers && (this._observers = new Set), this._observers.add(e), h(this._fragmentFiber.child, !1, cX, e, void 0, void 0)
}, c$.prototype.unobserveUsing = function(e) {
    var t = this._observers;
    if (null !== t && t.has(e)) {
        t.delete(e), h(this._fragmentFiber.child, !1, cY, e, void 0, void 0);
        for (var n = t = 0; n < cJ.length; n++) {
            var r = cJ[n];
            r.fragmentInstance === this && r.observer === e ? e.unobserve(r.instance) : cJ[t++] = r
        }
        cJ.length = t
    }
};
var cJ = [],
    cZ = !1;

function c0(e, t) {
    if (6 === e.tag) {
        var n = (e = e.stateNode).ownerDocument.createRange();
        n.selectNodeContents(e), t.push.apply(t, n.getClientRects())
    } else e = b(e), t.push.apply(t, e.getClientRects());
    return !1
}

function c1(e, t) {
    var n = e.ownerDocument.createRange();
    n.selectNodeContents(e), e = n.getBoundingClientRect(), window.scrollTo(window.scrollX + e.left, t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight)
}

function c2(e, t) {
    return c3(e = b(e), t), !1
}

function c3(e, t) {
    null == e.reactFragments && (e.reactFragments = new Set), e.reactFragments.add(t)
}

function c4(e, t) {
    var n = t._eventListeners;
    if (null !== n)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            e.addEventListener(i.type, i.attachedListener, cq(i.optionsOrUseCapture))
        }
    3 !== e.nodeType && (null !== (n = t._observers) && n.forEach(function(n) {
        for (var r = 0, i = 0; i < cJ.length; i++) {
            var a = cJ[i];
            (a.fragmentInstance !== t || a.observer !== n || a.instance !== e) && (cJ[r++] = a)
        }
        cJ.length = r, n.observe(e)
    }), c3(e, t))
}

function c5(e) {
    var t = e.firstChild;
    for (t && 10 === t.nodeType && (t = t.nextSibling); t;) {
        var n = t;
        switch (t = t.nextSibling, n.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                c5(n), e4(n);
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

function c6(e, t) {
    for (; 8 !== e.nodeType;)
        if ((1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) && !t || null === (e = c7(e.nextSibling))) return null;
    return e
}

function c8(e) {
    return "$?" === e.data || "$~" === e.data
}

function c9(e) {
    return "$!" === e.data || "$?" === e.data && "loading" !== e.ownerDocument.readyState
}

function c7(e) {
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
c$.prototype.getClientRects = function() {
    var e = [];
    return h(this._fragmentFiber.child, !1, c0, e, void 0, void 0), e
}, c$.prototype.getRootNode = function(e) {
    var t = m(this._fragmentFiber);
    return null === t ? this : b(t).getRootNode(e)
}, c$.prototype.compareDocumentPosition = function(e) {
    var t = m(this._fragmentFiber);
    if (null === t) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    h(this._fragmentFiber.child, !1, cG, n, void 0, void 0);
    var r = b(t);
    if (0 === n.length) {
        if (n = r, g(this._fragmentFiber)) {
            e: {
                for (t = this._fragmentFiber.return; null !== t;) {
                    if (4 === t.tag) {
                        t = t.stateNode.containerInfo;
                        break e
                    }
                    if (3 === t.tag || 5 === t.tag || 27 === t.tag) break;
                    t = t.return
                }
                t = null
            }
            null != t && (n = t)
        }
        t = this._fragmentFiber;
        var i = r = n.compareDocumentPosition(e);
        return n === e ? i = Node.DOCUMENT_POSITION_CONTAINS : r & Node.DOCUMENT_POSITION_CONTAINED_BY && (i = null === (n = v(t)[1]) ? Node.DOCUMENT_POSITION_PRECEDING : 0 === (e = b(n).compareDocumentPosition(e)) || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING), i | Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
    }
    t = b(n[0]), i = b(n[n.length - 1]);
    var a = g(this._fragmentFiber) ? t.parentElement : r;
    if (null == a) return Node.DOCUMENT_POSITION_DISCONNECTED;
    r = a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, a = a.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var o = t.compareDocumentPosition(e),
        s = i.compareDocumentPosition(e),
        l = o & Node.DOCUMENT_POSITION_CONTAINED_BY || s & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return s = r && a && o & Node.DOCUMENT_POSITION_FOLLOWING && s & Node.DOCUMENT_POSITION_PRECEDING, (t = r && t === e || a && i === e || l || s ? Node.DOCUMENT_POSITION_CONTAINED_BY : (r || t !== e) && (a || i !== e) ? o : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC) & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || function(e, t, n, r, i) {
        var a = e5(i);
        if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
            if (n = !!a) e: {
                for (; null !== a;) {
                    if (7 === a.tag && (a === t || a.alternate === t)) {
                        n = !0;
                        break e
                    }
                    a = a.return
                }
                n = !1
            }
            return n
        }
        if (e & Node.DOCUMENT_POSITION_CONTAINS) {
            if (null === a) {
                e: {
                    for (a = t.return; null !== a;) {
                        if (3 === a.tag) {
                            a = a.stateNode.containerInfo;
                            break e
                        }
                        a = a.return
                    }
                    a = null
                }
                return null !== a && i.contains(a)
            }
            e: {
                for (a = t, t = m(t); null !== a;) {
                    if ((5 === a.tag || 3 === a.tag || 27 === a.tag) && (a === t || a.alternate === t)) {
                        a = !0;
                        break e
                    }
                    a = a.return
                }
                a = !1
            }
            return a
        }
        return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!a) && !(t = a === n) && (null === (t = k(n, a, E)) ? t = !1 : (h(t, !0, _, a, n), a = y, y = null, t = null !== a)), t) : !!(e & Node.DOCUMENT_POSITION_FOLLOWING) && ((t = !!a) && !(t = a === r) && (null === (t = k(r, a, E)) ? t = !1 : (h(t, !0, S, a, r), a = y, w = y = null, t = null !== a)), t)
    }(t, this._fragmentFiber, n[0], n[n.length - 1], e) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
}, c$.prototype.scrollIntoView = function(e) {
    if ("object" == typeof e) throw Error(l(566));
    var t = [];
    h(this._fragmentFiber.child, !1, cG, t, void 0, void 0);
    var n = !1 !== e;
    if (0 === t.length) {
        var r = v(this._fragmentFiber);
        if (null === (r = n ? r[1] || r[0] || m(this._fragmentFiber) : r[0] || r[1])) return;
        if (6 === r.tag) return void c1(e = b(r), n);
        if (9 !== (r = b(r)).nodeType) {
            if (11 === r.nodeType) {
                null !== (n = "host" in r ? r.host : null) && n.scrollIntoView(e);
                return
            }
            r.scrollIntoView(e)
        }
    }
    for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length);) {
        var i = t[r];
        6 === i.tag ? c1(i = b(i), n) : b(i).scrollIntoView(e), r += n ? -1 : 1
    }
};
var de = null;

function dt(e) {
    e = e.nextSibling;
    for (var t = 0; e;) {
        if (8 === e.nodeType) {
            var n = e.data;
            if ("/$" === n || "/&" === n) {
                if (0 === t) return c7(e.nextSibling);
                t--
            } else "$" !== n && "$!" !== n && "$?" !== n && "$~" !== n && "&" !== n || t++
        }
        e = e.nextSibling
    }
    return null
}

function dn(e) {
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

function dr(e, t, n) {
    switch (t = cb(n), e) {
        case "html":
            if (!(e = t.documentElement)) throw Error(l(452));
            return e;
        case "head":
            if (!(e = t.head)) throw Error(l(453));
            return e;
        case "body":
            if (!(e = t.body)) throw Error(l(454));
            return e;
        default:
            throw Error(l(451))
    }
}

function di(e, t, n) {
    for (var r in n) {
        var i = n[r];
        n.hasOwnProperty(r) && null != i && cd(e, t, r, null, ch, i)
    }
    null != n.dangerouslySetInnerHTML && (e.textContent = ""), e.onclick === tR && (e.onclick = null), e4(e)
}

function da(e) {
    for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
    e4(e)
}
var ds = new Map,
    dl = new Set;

function du(e) {
    if ("function" == typeof e.getRootNode) {
        var t = e.getRootNode();
        if (9 === t.nodeType || 11 === t.nodeType) return t
    }
    return 9 === e.nodeType ? e : e.ownerDocument
}
var dc = K.d;
K.d = {
    f: function() {
        var e = dc.f(),
            t = ud();
        return e || t
    },
    r: function(e) {
        var t = e6(e);
        null !== t && 5 === t.tag && "form" === t.type ? oy(t) : dc.r(e)
    },
    D: function(e) {
        dc.D(e), df("dns-prefetch", e, null)
    },
    C: function(e, t) {
        dc.C(e, t), df("preconnect", e, t)
    },
    L: function(e, t, n) {
        if (dc.L(e, t, n), dd && e && t) {
            var r = 'link[rel="preload"][as="' + tb(t) + '"]';
            "image" === t && n && n.imageSrcSet ? (r += '[imagesrcset="' + tb(n.imageSrcSet) + '"]', "string" == typeof n.imageSizes && (r += '[imagesizes="' + tb(n.imageSizes) + '"]')) : r += '[href="' + tb(e) + '"]';
            var i = r;
            switch (t) {
                case "style":
                    i = dh(e);
                    break;
                case "script":
                    i = dv(e)
            }
            if (!(ds.has(i) || (e = T({
                    rel: "preload",
                    href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                    as: t
                }, n), ds.set(i, e), null !== dd.querySelector(r) || "style" === t && dd.querySelector(dm(i)) || "script" === t && dd.querySelector(db(i))))) {
                var a = dd.createElement("link");
                cp(a, "link", e), "style" === t && (a[e3] = !0, a.onload = a.onerror = function() {
                    te(a)
                }), e7(a), dd.head.appendChild(a)
            }
        }
    },
    m: function(e, t) {
        if (dc.m(e, t), dd && e) {
            var n = t && "string" == typeof t.as ? t.as : "script",
                r = 'link[rel="modulepreload"][as="' + tb(n) + '"][href="' + tb(e) + '"]',
                i = r;
            switch (n) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    i = dv(e)
            }
            if (!ds.has(i) && (e = T({
                    rel: "modulepreload",
                    href: e
                }, t), ds.set(i, e), null === dd.querySelector(r))) {
                switch (n) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (dd.querySelector(db(i))) return
                }
                cp(n = dd.createElement("link"), "link", e), e7(n), dd.head.appendChild(n)
            }
        }
    },
    X: function(e, t) {
        if (dc.X(e, t), dd && e) {
            var n = e9(dd).hoistableScripts,
                r = dv(e),
                i = n.get(r);
            i || ((i = dd.querySelector(db(r))) || (e = T({
                src: e,
                async: !0
            }, t), (t = ds.get(r)) && dS(e, t), e7(i = dd.createElement("script")), cp(i, "link", e), dd.head.appendChild(i)), i = {
                type: "script",
                instance: i,
                count: 1,
                state: null
            }, n.set(r, i))
        }
    },
    S: function(e, t, n) {
        if (dc.S(e, t, n), dd && e) {
            var r = e9(dd).hoistableStyles,
                i = dh(e);
            t = t || "default";
            var a = r.get(i);
            if (!a) {
                var o = {
                    loading: 0,
                    preload: null
                };
                if (a = dd.querySelector(dm(i))) o.loading = 5;
                else {
                    e = T({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, n), (n = ds.get(i)) && d_(e, n);
                    var s = a = dd.createElement("link");
                    e7(s), cp(s, "link", e), s._p = new Promise(function(e, t) {
                        s.onload = e, s.onerror = t
                    }), s.addEventListener("load", function() {
                        o.loading |= 1
                    }), s.addEventListener("error", function() {
                        o.loading |= 2
                    }), o.loading |= 4, dw(a, t, dd)
                }
                a = {
                    type: "stylesheet",
                    instance: a,
                    count: 1,
                    state: o
                }, r.set(i, a)
            }
        }
    },
    M: function(e, t) {
        if (dc.M(e, t), dd && e) {
            var n = e9(dd).hoistableScripts,
                r = dv(e),
                i = n.get(r);
            i || ((i = dd.querySelector(db(r))) || (e = T({
                src: e,
                async: !0,
                type: "module"
            }, t), (t = ds.get(r)) && dS(e, t), e7(i = dd.createElement("script")), cp(i, "link", e), dd.head.appendChild(i)), i = {
                type: "script",
                instance: i,
                count: 1,
                state: null
            }, n.set(r, i))
        }
    }
};
var dd = "u" < typeof document ? null : document;

function df(e, t, n) {
    if (dd && "string" == typeof t && t) {
        var r = tb(t);
        r = 'link[rel="' + e + '"][href="' + r + '"]', "string" == typeof n && (r += '[crossorigin="' + n + '"]'), dl.has(r) || (dl.add(r), e = {
            rel: e,
            crossOrigin: n,
            href: t
        }, null === dd.querySelector(r) && (cp(t = dd.createElement("link"), "link", e), e7(t), dd.head.appendChild(t)))
    }
}

function dp(e, t, n, r) {
    var i = (i = ei.current) ? du(i) : null;
    if (!i) throw Error(l(446));
    switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return "string" == typeof n.precedence && "string" == typeof n.href ? (n = dh(n.href), (r = (t = e9(i).hoistableStyles).get(n)) || (r = {
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
                e = dh(n.href);
                var a = e9(i).hoistableStyles,
                    o = a.get(e);
                if (o || (i = i.ownerDocument || i, o = {
                        type: "stylesheet",
                        instance: null,
                        count: 0,
                        state: {
                            loading: 0,
                            preload: null
                        }
                    }, a.set(e, o), (a = i.querySelector(dm(e))) ? a._p || (o.instance = a, o.state.loading = 5) : ((a = ds.get(e)) || (a = {
                        rel: "preload",
                        as: "style",
                        href: n.href,
                        crossOrigin: n.crossOrigin,
                        integrity: n.integrity,
                        media: n.media,
                        hrefLang: n.hrefLang,
                        referrerPolicy: n.referrerPolicy
                    }, ds.set(e, a)), function(e, t, n, r) {
                        if (t = e.querySelector('link[rel="preload"][as="style"][' + t + "]")) {
                            if (!0 !== t[e3]) {
                                r.loading = 1;
                                return
                            }
                        } else(t = e.createElement("link"))[e3] = !0, t.onload = t.onerror = te.bind(null, t), cp(t, "link", n), e7(t), e.head.appendChild(t);
                        r.preload = t, t.addEventListener("load", function() {
                            return r.loading |= 1
                        }), t.addEventListener("error", function() {
                            return r.loading |= 2
                        })
                    }(i, e, a, o.state))), t && null === r) throw Error(l(528, ""));
                return o
            }
            if (t && null !== r) throw Error(l(529, ""));
            return null;
        case "script":
            return t = n.async, "string" == typeof(n = n.src) && t && "function" != typeof t && "symbol" != typeof t ? (n = dv(n), (r = (t = e9(i).hoistableScripts).get(n)) || (r = {
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
            throw Error(l(444, e))
    }
}

function dh(e) {
    return 'href="' + tb(e) + '"'
}

function dm(e) {
    return 'link[rel="stylesheet"][' + e + "]"
}

function dg(e) {
    return T({}, e, {
        "data-precedence": e.precedence,
        precedence: null
    })
}

function dv(e) {
    return '[src="' + tb(e) + '"]'
}

function db(e) {
    return "script[async]" + e
}

function dy(e, t, n) {
    if (t.count++, null === t.instance) switch (t.type) {
        case "style":
            var r = e.querySelector('style[data-href~="' + tb(n.href) + '"]');
            if (r) return t.instance = r, e7(r), r;
            var i = T({}, n, {
                "data-href": n.href,
                "data-precedence": n.precedence,
                href: null,
                precedence: null
            });
            return e7(r = (e.ownerDocument || e).createElement("style")), cp(r, "style", i), dw(r, n.precedence, e), t.instance = r;
        case "stylesheet":
            i = dh(n.href);
            var a = e.querySelector(dm(i));
            if (a) return t.state.loading |= 4, t.instance = a, e7(a), a;
            r = dg(n), (i = ds.get(i)) && d_(r, i), e7(a = (e.ownerDocument || e).createElement("link"));
            var o = a;
            return o._p = new Promise(function(e, t) {
                o.onload = e, o.onerror = t
            }), cp(a, "link", r), t.state.loading |= 4, dw(a, n.precedence, e), t.instance = a;
        case "script":
            if (a = dv(n.src), i = e.querySelector(db(a))) return t.instance = i, e7(i), i;
            return r = n, (i = ds.get(a)) && dS(r = T({}, n), i), e7(i = (e = e.ownerDocument || e).createElement("script")), cp(i, "link", r), e.head.appendChild(i), t.instance = i;
        case "void":
            return null;
        default:
            throw Error(l(443, t.type))
    }
    return "stylesheet" === t.type && 0 == (4 & t.state.loading) && (r = t.instance, t.state.loading |= 4, dw(r, n.precedence, e)), t.instance
}

function dw(e, t, n) {
    for (var r = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;
        else if (a !== i) break
    }
    a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild)
}

function d_(e, t) {
    null == e.crossOrigin && (e.crossOrigin = t.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), null == e.title && (e.title = t.title)
}

function dS(e, t) {
    null == e.crossOrigin && (e.crossOrigin = t.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), null == e.integrity && (e.integrity = t.integrity)
}
var dE = null;

function dk(e, t, n) {
    if (null === dE) {
        var r = new Map,
            i = dE = new Map;
        i.set(n, r)
    } else(r = (i = dE).get(n)) || (r = new Map, i.set(n, r));
    if (r.has(e)) return r;
    for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
        var a = n[i];
        if (!(a[e2] || a[eK] || "link" === e && "stylesheet" === a.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== a.namespaceURI) {
            var o = a.getAttribute(t) || "";
            o = e + o;
            var s = r.get(o);
            s ? s.push(a) : r.set(o, [a])
        }
    }
    return r
}

function dT(e, t, n) {
    (e = e.ownerDocument || e).head.insertBefore(n, "title" === t ? e.querySelector("head > title") : null)
}

function dx(e, t) {
    return "img" === e && null != t.src && "" !== t.src && null == t.onLoad && "lazy" !== t.loading
}

function dC(e) {
    return "stylesheet" !== e.type || 0 != (3 & e.state.loading)
}

function dO(e) {
    return (e.width || 100) * (e.height || 100) * ("number" == typeof devicePixelRatio ? devicePixelRatio : 1) * .25
}

function dP(e, t) {
    "function" == typeof t.decode && (e.imgCount++, t.complete || (e.imgBytes += dO(t), e.suspenseyImages.push(t)), e = dR.bind(e), t.decode().then(e, e))
}
var dN = 0;

function dA(e) {
    if (0 === e.count && (0 === e.imgCount || !e.waitingForImages)) {
        if (e.stylesheets) dM(e, e.stylesheets);
        else if (e.unsuspend) {
            var t = e.unsuspend;
            e.unsuspend = null, t()
        }
    }
}

function dL() {
    this.count--, dA(this)
}

function dR() {
    this.imgCount--, dA(this)
}
var dI = null;

function dM(e, t) {
    e.stylesheets = null, null !== e.unsuspend && (e.count++, dI = new Map, t.forEach(dD, e), dI = null, dL.call(e))
}

function dD(e, t) {
    if (!(4 & t.state.loading)) {
        var n = dI.get(e);
        if (n) var r = n.get(null);
        else {
            n = new Map, dI.set(e, n);
            for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
                var o = i[a];
                ("LINK" === o.nodeName || "not all" !== o.getAttribute("media")) && (n.set(o.dataset.precedence, o), r = o)
            }
            r && n.set(null, r)
        }
        o = (i = t.instance).getAttribute("data-precedence"), (a = n.get(o) || r) === r && n.set(null, i), n.set(o, i), this.count++, r = dL.bind(this), i.addEventListener("load", r), i.addEventListener("error", r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = 9 === e.nodeType ? e.head : e).insertBefore(i, e.firstChild), t.state.loading |= 4
    }
}
var dz = {
    $$typeof: R,
    Provider: null,
    Consumer: null,
    _currentValue: X,
    _currentValue2: X,
    _threadCount: 0
};

function dU(e, t, n, r, i, a, o, s, l) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ej(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ej(0), this.hiddenUpdates = ej(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = l, this.transitionTypes = null, this.incompleteTransitions = new Map
}

function dj(e, t, n, r, i, a, o, s, l, u, c, d) {
    return e = new dU(e, t, n, o, l, u, c, d, s), t = 1, !0 === a && (t |= 24), a = rk(3, null, null, t), e.current = a, a.stateNode = e, t = iv(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: t
    }, iX(a), e
}

function dF(e, t, n, r, i, a) {
    i = i ? rS : rS, null === r.context ? r.context = i : r.pendingContext = i, (r = iJ(t)).payload = {
        element: n
    }, null !== (a = void 0 === a ? null : a) && (r.callback = a), null !== (n = iZ(e, r, t)) && (us(n, e, t), i0(n, e, t))
}

function d$(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t
    }
}

function dB(e, t) {
    d$(e, t), (e = e.alternate) && d$(e, t)
}

function dH(e) {
    if (13 === e.tag || 31 === e.tag) {
        var t = ry(e, 0x4000000);
        null !== t && us(t, e, 0x4000000), dB(e, 0x4000000)
    }
}

function dq(e) {
    if (13 === e.tag || 31 === e.tag) {
        var t = ui(),
            n = ry(e, t = eq(t));
        null !== n && us(n, e, t), dB(e, t)
    }
}
var dV = !0;

function dW(e, t, n, r) {
    var i = G.T;
    G.T = null;
    var a = K.p;
    try {
        K.p = 2, dG(e, t, n, r)
    } finally {
        K.p = a, G.T = i
    }
}

function dQ(e, t, n, r) {
    var i = G.T;
    G.T = null;
    var a = K.p;
    try {
        K.p = 8, dG(e, t, n, r)
    } finally {
        K.p = a, G.T = i
    }
}

function dG(e, t, n, r) {
    if (dV) {
        var i = dK(r);
        if (null === i) cn(e, t, r, dX, n), d8(e, r);
        else if (function(e, t, n, r, i) {
                switch (t) {
                    case "focusin":
                        return d0 = d9(d0, e, t, n, r, i), !0;
                    case "dragenter":
                        return d1 = d9(d1, e, t, n, r, i), !0;
                    case "mouseover":
                        return d2 = d9(d2, e, t, n, r, i), !0;
                    case "pointerover":
                        var a = i.pointerId;
                        return d3.set(a, d9(d3.get(a) || null, e, t, n, r, i)), !0;
                    case "gotpointercapture":
                        return a = i.pointerId, d4.set(a, d9(d4.get(a) || null, e, t, n, r, i)), !0
                }
                return !1
            }(i, e, t, n, r)) r.stopPropagation();
        else if (d8(e, r), 4 & t && -1 < d6.indexOf(e)) {
            for (; null !== i;) {
                var a = e6(i);
                if (null !== a) switch (a.tag) {
                    case 3:
                        if ((a = a.stateNode).current.memoizedState.isDehydrated) {
                            var o = eI(a.pendingLanes);
                            if (0 !== o) {
                                var s = a;
                                for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
                                    var l = 1 << 31 - eO(o);
                                    s.entanglements[1] |= l, o &= ~l
                                }
                                uQ(a), 0 == (6 & lL) && (lZ = ey() + 500, uG(0, !1))
                            }
                        }
                        break;
                    case 31:
                    case 13:
                        null !== (s = ry(a, 2)) && us(s, a, 2), ud(), dB(a, 2)
                }
                if (null === (a = dK(r)) && cn(e, t, r, dX, n), a === i) break;
                i = a
            }
            null !== i && r.stopPropagation()
        } else cn(e, t, r, null, n)
    }
}

function dK(e) {
    return dY(e = tM(e))
}
var dX = null;

function dY(e) {
    if (dX = null, null !== (e = e5(e))) {
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
    return dX = e, null
}

function dJ(e) {
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
            switch (ew()) {
                case e_:
                    return 2;
                case eS:
                    return 8;
                case eE:
                case ek:
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
var dZ = !1,
    d0 = null,
    d1 = null,
    d2 = null,
    d3 = new Map,
    d4 = new Map,
    d5 = [],
    d6 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

function d8(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            d0 = null;
            break;
        case "dragenter":
        case "dragleave":
            d1 = null;
            break;
        case "mouseover":
        case "mouseout":
            d2 = null;
            break;
        case "pointerover":
        case "pointerout":
            d3.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            d4.delete(t.pointerId)
    }
}

function d9(e, t, n, r, i, a) {
    return null === e || e.nativeEvent !== a ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [i]
    }, null !== t && null !== (t = e6(t)) && dH(t)) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== i && -1 === t.indexOf(i) && t.push(i)), e
}

function d7(e) {
    var t = e5(e.target);
    if (null !== t) {
        var n = c(t);
        if (null !== n) {
            if (13 === (t = n.tag)) {
                if (null !== (t = d(n))) {
                    e.blockedOn = t, eQ(e.priority, function() {
                        dq(n)
                    });
                    return
                }
            } else if (31 === t) {
                if (null !== (t = f(n))) {
                    e.blockedOn = t, eQ(e.priority, function() {
                        dq(n)
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

function fe(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = dK(e.nativeEvent);
        if (null !== n) return null !== (t = e6(n)) && dH(t), e.blockedOn = n, !1;
        var r = new(n = e.nativeEvent).constructor(n.type, n);
        tI = r, n.target.dispatchEvent(r), tI = null, t.shift()
    }
    return !0
}

function ft(e, t, n) {
    fe(e) && n.delete(t)
}

function fn() {
    dZ = !1, null !== d0 && fe(d0) && (d0 = null), null !== d1 && fe(d1) && (d1 = null), null !== d2 && fe(d2) && (d2 = null), d3.forEach(ft), d4.forEach(ft)
}

function fr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, dZ || (dZ = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, fn)))
}
var fi = null;

function fa(e) {
    fi !== e && (fi = e, a.unstable_scheduleCallback(a.unstable_NormalPriority, function() {
        fi === e && (fi = null);
        for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
                r = e[t + 1],
                i = e[t + 2];
            if ("function" != typeof r)
                if (null === dY(r || n)) continue;
                else break;
            var a = e6(n);
            null !== a && (e.splice(t, 3), t -= 3, ov(a, {
                pending: !0,
                data: i,
                method: n.method,
                action: r
            }, r, i))
        }
    }))
}

function fo(e) {
    function t(t) {
        return fr(t, e)
    }
    null !== d0 && fr(d0, e), null !== d1 && fr(d1, e), null !== d2 && fr(d2, e), d3.forEach(t), d4.forEach(t);
    for (var n = 0; n < d5.length; n++) {
        var r = d5[n];
        r.blockedOn === e && (r.blockedOn = null)
    }
    for (; 0 < d5.length && null === (n = d5[0]).blockedOn;) d7(n), null === n.blockedOn && d5.shift();
    if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
        for (r = 0; r < n.length; r += 3) {
            var i = n[r],
                a = n[r + 1],
                o = i[eX] || null;
            if ("function" == typeof a) o || fa(n);
            else if (o) {
                var s = null;
                if (a && a.hasAttribute("formAction")) {
                    if (i = a, o = a[eX] || null) s = o.formAction;
                    else if (null !== dY(i)) continue
                } else s = o.action;
                "function" == typeof s ? n[r + 1] = s : (n.splice(r, 3), r -= 3), fa(n)
            }
        }
}

function fs() {
    function e(e) {
        e.canIntercept && "react-transition" === e.info && e.intercept({
            handler: function() {
                return new Promise(function(e) {
                    return i = e
                })
            },
            focusReset: "manual",
            scroll: "manual"
        })
    }

    function t() {
        null !== i && (i(), i = null), r || setTimeout(n, 20)
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
            i = null;
        return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100),
            function() {
                r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), null !== i && (i(), i = null)
            }
    }
}

function fl(e) {
    this._internalRoot = e
}

function fu(e) {
    this._internalRoot = e
}
fu.prototype.render = fl.prototype.render = function(e) {
    var t = this._internalRoot;
    if (null === t) throw Error(l(409));
    dF(t.current, ui(), e, t, null, null)
}, fu.prototype.unmount = fl.prototype.unmount = function() {
    var e = this._internalRoot;
    if (null !== e) {
        this._internalRoot = null;
        var t = e.containerInfo;
        dF(e.current, 2, null, e, null, null), ud(), t[eY] = null
    }
}, fu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = eW();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < d5.length && 0 !== t && t < d5[n].priority; n++);
        d5.splice(n, 0, e), 0 === n && d7(e)
    }
};
var fc = o.version;
if ("19.3.0-canary-278794d7-20261002" !== fc) throw Error(l(527, fc, "19.3.0-canary-278794d7-20261002"));
if (K.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (void 0 === t) {
            if ("function" == typeof e.render) throw Error(l(188));
            throw Error(l(268, e = Object.keys(e).join(",")))
        }
        return null === (e = null !== (e = function(e) {
            var t = e.alternate;
            if (!t) {
                if (null === (t = c(e))) throw Error(l(188));
                return t !== e ? null : e
            }
            for (var n = e, r = t;;) {
                var i = n.return;
                if (null === i) break;
                var a = i.alternate;
                if (null === a) {
                    if (null !== (r = i.return)) {
                        n = r;
                        continue
                    }
                    break
                }
                if (i.child === a.child) {
                    for (a = i.child; a;) {
                        if (a === n) return p(i), e;
                        if (a === r) return p(i), t;
                        a = a.sibling
                    }
                    throw Error(l(188))
                }
                if (n.return !== r.return) n = i, r = a;
                else {
                    for (var o = !1, s = i.child; s;) {
                        if (s === n) {
                            o = !0, n = i, r = a;
                            break
                        }
                        if (s === r) {
                            o = !0, r = i, n = a;
                            break
                        }
                        s = s.sibling
                    }
                    if (!o) {
                        for (s = a.child; s;) {
                            if (s === n) {
                                o = !0, n = a, r = i;
                                break
                            }
                            if (s === r) {
                                o = !0, r = a, n = i;
                                break
                            }
                            s = s.sibling
                        }
                        if (!o) throw Error(l(189))
                    }
                }
                if (n.alternate !== r) throw Error(l(190))
            }
            if (3 !== n.tag) throw Error(l(188));
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
    var fd = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fd.isDisabled && fd.supportsFiber) try {
        ex = fd.inject({
            bundleType: 0,
            version: "19.3.0-canary-278794d7-20261002",
            rendererPackageName: "react-dom",
            currentDispatcherRef: G,
            reconcilerVersion: "19.3.0-canary-278794d7-20261002"
        }), eC = fd
    } catch (e) {}
}
n.createRoot = function(e, t) {
    if (!u(e)) throw Error(l(299));
    var n = !1,
        r = "",
        i = oF,
        a = o$,
        o = oB;
    return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onUncaughtError && (i = t.onUncaughtError), void 0 !== t.onCaughtError && (a = t.onCaughtError), void 0 !== t.onRecoverableError && (o = t.onRecoverableError)), t = dj(e, 1, !1, null, null, n, r, null, i, a, o, fs), e[eY] = t.current, ce(e), new fl(t)
}, n.hydrateRoot = function(e, t, n) {
    if (!u(e)) throw Error(l(299));
    var r, i = !1,
        a = "",
        o = oF,
        s = o$,
        c = oB,
        d = null;
    return null != n && (!0 === n.unstable_strictMode && (i = !0), void 0 !== n.identifierPrefix && (a = n.identifierPrefix), void 0 !== n.onUncaughtError && (o = n.onUncaughtError), void 0 !== n.onCaughtError && (s = n.onCaughtError), void 0 !== n.onRecoverableError && (c = n.onRecoverableError), void 0 !== n.formState && (d = n.formState)), (t = dj(e, 1, !0, t, null != n ? n : null, i, a, d, o, s, c, fs)).context = (r = null, rS), n = t.current, (a = iJ(i = eq(i = ui()))).callback = null, iZ(n, a, i), n = i, t.current.lanes = n, eF(t, n), uQ(t), e[eY] = t.current, ce(e), new fu(t)
}, n.version = "19.3.0-canary-278794d7-20261002"
}, 351069, (e, t, n) => {
! function e() {
    if ("u" > typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
    } catch (e) {
        console.error(e)
    }
}(), t.exports = e.r(524444)
}, 17317, (e, t, n) => {
function r(e, t) {
    var n = e.length;
    for (e.push(t); 0 < n;) {
        var r = n - 1 >>> 1,
            i = e[r];
        if (0 < o(i, t)) e[r] = t, e[n] = i, n = r;
        else break
    }
}

function i(e) {
    return 0 === e.length ? null : e[0]
}

function a(e) {
    if (0 === e.length) return null;
    var t = e[0],
        n = e.pop();
    if (n !== t) {
        e[0] = n;
        for (var r = 0, i = e.length, a = i >>> 1; r < a;) {
            var s = 2 * (r + 1) - 1,
                l = e[s],
                u = s + 1,
                c = e[u];
            if (0 > o(l, n)) u < i && 0 > o(c, l) ? (e[r] = c, e[u] = n, r = u) : (e[r] = l, e[s] = n, r = s);
            else if (u < i && 0 > o(c, n)) e[r] = c, e[u] = n, r = u;
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
    var s, l = performance;
    n.unstable_now = function() {
        return l.now()
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
    h = null,
    m = 3,
    g = !1,
    v = !1,
    b = !1,
    y = !1,
    w = "function" == typeof setTimeout ? setTimeout : null,
    _ = "function" == typeof clearTimeout ? clearTimeout : null,
    S = "u" > typeof setImmediate ? setImmediate : null;

function E(e) {
    for (var t = i(f); null !== t;) {
        if (null === t.callback) a(f);
        else if (t.startTime <= e) a(f), t.sortIndex = t.expirationTime, r(d, t);
        else break;
        t = i(f)
    }
}

function k(e) {
    if (b = !1, E(e), !v)
        if (null !== i(d)) v = !0, T || (T = !0, s());
        else {
            var t = i(f);
            null !== t && R(k, t.startTime - e)
        }
}
var T = !1,
    x = -1,
    C = 5,
    O = -1;

function P() {
    return !!y || !(n.unstable_now() - O < C)
}

function N() {
    if (y = !1, T) {
        var e = n.unstable_now();
        O = e;
        var t = !0;
        try {
            e: {
                v = !1,
                b && (b = !1, _(x), x = -1),
                g = !0;
                var r = m;
                try {
                    t: {
                        for (E(e), h = i(d); null !== h && !(h.expirationTime > e && P());) {
                            var o = h.callback;
                            if ("function" == typeof o) {
                                h.callback = null, m = h.priorityLevel;
                                var l = o(h.expirationTime <= e);
                                if (e = n.unstable_now(), "function" == typeof l) {
                                    h.callback = l, E(e), t = !0;
                                    break t
                                }
                                h === i(d) && a(d), E(e)
                            } else a(d);
                            h = i(d)
                        }
                        if (null !== h) t = !0;
                        else {
                            var u = i(f);
                            null !== u && R(k, u.startTime - e), t = !1
                        }
                    }
                    break e
                }
                finally {
                    h = null, m = r, g = !1
                }
            }
        }
        finally {
            t ? s() : T = !1
        }
    }
}
if ("function" == typeof S) s = function() {
    S(N)
};
else if ("u" > typeof MessageChannel) {
    var A = new MessageChannel,
        L = A.port2;
    A.port1.onmessage = N, s = function() {
        L.postMessage(null)
    }
} else s = function() {
    w(N, 0)
};

function R(e, t) {
    x = w(function() {
        e(n.unstable_now())
    }, t)
}
n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(e) {
    e.callback = null
}, n.unstable_forceFrameRate = function(e) {
    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : C = 0 < e ? Math.floor(1e3 / e) : 5
}, n.unstable_getCurrentPriorityLevel = function() {
    return m
}, n.unstable_next = function(e) {
    switch (m) {
        case 1:
        case 2:
        case 3:
            var t = 3;
            break;
        default:
            t = m
    }
    var n = m;
    m = t;
    try {
        return e()
    } finally {
        m = n
    }
}, n.unstable_requestPaint = function() {
    y = !0
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
    var n = m;
    m = e;
    try {
        return t()
    } finally {
        m = n
    }
}, n.unstable_scheduleCallback = function(e, t, a) {
    var o = n.unstable_now();
    switch (a = "object" == typeof a && null !== a && "number" == typeof(a = a.delay) && 0 < a ? o + a : o, e) {
        case 1:
            var l = -1;
            break;
        case 2:
            l = 250;
            break;
        case 5:
            l = 0x3fffffff;
            break;
        case 4:
            l = 1e4;
            break;
        default:
            l = 5e3
    }
    return l = a + l, e = {
        id: p++,
        callback: t,
        priorityLevel: e,
        startTime: a,
        expirationTime: l,
        sortIndex: -1
    }, a > o ? (e.sortIndex = a, r(f, e), null === i(d) && e === i(f) && (b ? (_(x), x = -1) : b = !0, R(k, a - o))) : (e.sortIndex = l, r(d, e), v || g || (v = !0, T || (T = !0, s()))), e
}, n.unstable_shouldYield = P, n.unstable_wrapCallback = function(e) {
    var t = m;
    return function() {
        var n = m;
        m = t;
        try {
            return e.apply(this, arguments)
        } finally {
            m = n
        }
    }
}
}, 353710, (e, t, n) => {
t.exports = e.r(17317)
}, 197092, (e, t, n) => {
Object.defineProperty(n, "__esModule", {
    value: !0
});
var r = {
    default: function() {
        return o
    },
    getProperError: function() {
        return s
    }
};
for (var i in r) Object.defineProperty(n, i, {
    enumerable: !0,
    get: r[i]
});
let a = e.r(468532);

function o(e) {
    return "object" == typeof e && null !== e && "name" in e && "message" in e
}

function s(e) {
    let t;
    return o(e) ? e : Error((0, a.isPlainObject)(e) ? (t = new WeakSet, JSON.stringify(e, (e, n) => {
        if ("object" == typeof n && null !== n) {
            if (t.has(n)) return "[Circular]";
            t.add(n)
        }
        return n
    })) : e + "")
}
}, 397876, (e, t, n) => {
{
    let n = e.f({
        "private-next-instrumentation-client": {
            id: () => 427075,
            module: () => e.r(427075)
        }
    })("private-next-instrumentation-client");
    t.exports = Array.isArray(n) ? n : [n]
}
}, 468532, (e, t, n) => {
Object.defineProperty(n, "__esModule", {
    value: !0
});
var r = {
    getObjectClassLabel: function() {
        return a
    },
    isPlainObject: function() {
        return o
    }
};
for (var i in r) Object.defineProperty(n, i, {
    enumerable: !0,
    get: r[i]
});

function a(e) {
    return Object.prototype.toString.call(e)
}

function o(e) {
    if ("[object Object]" !== a(e)) return !1;
    let t = Object.getPrototypeOf(e);
    return null === t || t.hasOwnProperty("isPrototypeOf")
}
}], 587696, (e, t, n) => {
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
}, 798539, (e, t, n) => {
    ! function(r) {
        "use strict";
        var i = "function",
            a = "undefined",
            o = "object",
            s = "string",
            l = "major",
            u = "model",
            c = "name",
            d = "type",
            f = "vendor",
            p = "version",
            h = "architecture",
            m = "console",
            g = "mobile",
            v = "tablet",
            b = "smarttv",
            y = "wearable",
            w = "embedded",
            _ = "Amazon",
            S = "Apple",
            E = "ASUS",
            k = "BlackBerry",
            T = "Browser",
            x = "Chrome",
            C = "Firefox",
            O = "Google",
            P = "Honor",
            N = "Huawei",
            A = "Microsoft",
            L = "Motorola",
            R = "Nvidia",
            I = "OnePlus",
            M = "Opera",
            D = "OPPO",
            z = "Samsung",
            U = "Sharp",
            j = "Sony",
            F = "Xiaomi",
            $ = "Zebra",
            B = "Facebook",
            H = "Chromium OS",
            q = "Mac OS",
            V = " Browser",
            W = function(e, t) {
                var n = {};
                for (var r in e) t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
                return n
            },
            Q = function(e) {
                for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
                return t
            },
            G = function(e, t) {
                return typeof e === s && -1 !== K(t).indexOf(K(e))
            },
            K = function(e) {
                return e.toLowerCase()
            },
            X = function(e, t) {
                if (typeof e === s) return e = e.replace(/^\s\s*/, ""), typeof t === a ? e : e.substring(0, 500)
            },
            Y = function(e, t) {
                for (var n, r, a, s, l, u, c = 0; c < t.length && !l;) {
                    var d = t[c],
                        f = t[c + 1];
                    for (n = r = 0; n < d.length && !l && d[n];)
                        if (l = d[n++].exec(e))
                            for (a = 0; a < f.length; a++) u = l[++r], typeof(s = f[a]) === o && s.length > 0 ? 2 === s.length ? typeof s[1] == i ? this[s[0]] = s[1].call(this, u) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== i || s[1].exec && s[1].test ? this[s[0]] = u ? u.replace(s[1], s[2]) : void 0 : this[s[0]] = u ? s[1].call(this, u, s[2]) : void 0 : 4 === s.length && (this[s[0]] = u ? s[3].call(this, u.replace(s[1], s[2])) : void 0) : this[s] = u || void 0;
                    c += 2
                }
            },
            J = function(e, t) {
                for (var n in t)
                    if (typeof t[n] === o && t[n].length > 0) {
                        for (var r = 0; r < t[n].length; r++)
                            if (G(t[n][r], e)) return "?" === n ? void 0 : n
                    } else if (G(t[n], e)) return "?" === n ? void 0 : n;
                return t.hasOwnProperty("*") ? t["*"] : e
            },
            Z = {
                ME: "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                2e3: "NT 5.0",
                XP: ["NT 5.1", "NT 5.2"],
                Vista: "NT 6.0",
                7: "NT 6.1",
                8: "NT 6.2",
                "8.1": "NT 6.3",
                10: ["NT 6.4", "NT 10.0"],
                RT: "ARM"
            },
            ee = {
                browser: [
                    [/\b(?:crmo|crios)\/([\w\.]+)/i],
                    [p, [c, "Chrome"]],
                    [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                    [p, [c, "Edge"]],
                    [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                    [c, p],
                    [/opios[\/ ]+([\w\.]+)/i],
                    [p, [c, M + " Mini"]],
                    [/\bop(?:rg)?x\/([\w\.]+)/i],
                    [p, [c, M + " GX"]],
                    [/\bopr\/([\w\.]+)/i],
                    [p, [c, M]],
                    [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                    [p, [c, "Baidu"]],
                    [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
                    [p, [c, "Maxthon"]],
                    [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                    [c, p],
                    [/quark(?:pc)?\/([-\w\.]+)/i],
                    [p, [c, "Quark"]],
                    [/\bddg\/([\w\.]+)/i],
                    [p, [c, "DuckDuckGo"]],
                    [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                    [p, [c, "UC" + T]],
                    [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
                    [p, [c, "WeChat"]],
                    [/konqueror\/([\w\.]+)/i],
                    [p, [c, "Konqueror"]],
                    [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                    [p, [c, "IE"]],
                    [/ya(?:search)?browser\/([\w\.]+)/i],
                    [p, [c, "Yandex"]],
                    [/slbrowser\/([\w\.]+)/i],
                    [p, [c, "Smart Lenovo " + T]],
                    [/(avast|avg)\/([\w\.]+)/i],
                    [
                        [c, /(.+)/, "$1 Secure " + T], p
                    ],
                    [/\bfocus\/([\w\.]+)/i],
                    [p, [c, C + " Focus"]],
                    [/\bopt\/([\w\.]+)/i],
                    [p, [c, M + " Touch"]],
                    [/coc_coc\w+\/([\w\.]+)/i],
                    [p, [c, "Coc Coc"]],
                    [/dolfin\/([\w\.]+)/i],
                    [p, [c, "Dolphin"]],
                    [/coast\/([\w\.]+)/i],
                    [p, [c, M + " Coast"]],
                    [/miuibrowser\/([\w\.]+)/i],
                    [p, [c, "MIUI" + V]],
                    [/fxios\/([\w\.-]+)/i],
                    [p, [c, C]],
                    [/\bqihoobrowser\/?([\w\.]*)/i],
                    [p, [c, "360"]],
                    [/\b(qq)\/([\w\.]+)/i],
                    [
                        [c, /(.+)/, "$1Browser"], p
                    ],
                    [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
                    [
                        [c, /(.+)/, "$1" + V], p
                    ],
                    [/samsungbrowser\/([\w\.]+)/i],
                    [p, [c, z + " Internet"]],
                    [/metasr[\/ ]?([\d\.]+)/i],
                    [p, [c, "Sogou Explorer"]],
                    [/(sogou)mo\w+\/([\d\.]+)/i],
                    [
                        [c, "Sogou Mobile"], p
                    ],
                    [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
                    [c, p],
                    [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
                    [c],
                    [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
                    [p, c],
                    [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                    [
                        [c, B], p
                    ],
                    [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                    [c, p],
                    [/\bgsa\/([\w\.]+) .*safari\//i],
                    [p, [c, "GSA"]],
                    [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                    [p, [c, "TikTok"]],
                    [/headlesschrome(?:\/([\w\.]+)| )/i],
                    [p, [c, x + " Headless"]],
                    [/ wv\).+(chrome)\/([\w\.]+)/i],
                    [
                        [c, x + " WebView"], p
                    ],
                    [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                    [p, [c, "Android " + T]],
                    [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                    [c, p],
                    [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                    [p, [c, "Mobile Safari"]],
                    [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                    [p, c],
                    [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                    [c, [p, J, {
                        "1.0": "/8",
                        "1.2": "/1",
                        "1.3": "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                    }]],
                    [/(webkit|khtml)\/([\w\.]+)/i],
                    [c, p],
                    [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                    [
                        [c, "Netscape"], p
                    ],
                    [/(wolvic|librewolf)\/([\w\.]+)/i],
                    [c, p],
                    [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                    [p, [c, C + " Reality"]],
                    [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
                    [c, [p, /_/g, "."]],
                    [/(cobalt)\/([\w\.]+)/i],
                    [c, [p, /master.|lts./, ""]]
                ],
                cpu: [
                    [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
                    [
                        [h, "amd64"]
                    ],
                    [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
                    [
                        [h, "ia32"]
                    ],
                    [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
                    [
                        [h, "arm64"]
                    ],
                    [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
                    [
                        [h, "armhf"]
                    ],
                    [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
                    [
                        [h, "arm"]
                    ],
                    [/((ppc|powerpc)(64)?)( mac|;|\))/i],
                    [
                        [h, /ower/, "", K]
                    ],
                    [/ sun4\w[;\)]/i],
                    [
                        [h, "sparc"]
                    ],
                    [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
                    [
                        [h, K]
                    ]
                ],
                device: [
                    [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                    [u, [f, z],
                        [d, v]
                    ],
                    [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
                    [u, [f, z],
                        [d, g]
                    ],
                    [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                    [u, [f, S],
                        [d, g]
                    ],
                    [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                    [u, [f, S],
                        [d, v]
                    ],
                    [/(macintosh);/i],
                    [u, [f, S]],
                    [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                    [u, [f, U],
                        [d, g]
                    ],
                    [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
                    [u, [f, P],
                        [d, v]
                    ],
                    [/honor([-\w ]+)[;\)]/i],
                    [u, [f, P],
                        [d, g]
                    ],
                    [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
                    [u, [f, N],
                        [d, v]
                    ],
                    [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                    [u, [f, N],
                        [d, g]
                    ],
                    [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
                    [
                        [u, /_/g, " "],
                        [f, F],
                        [d, v]
                    ],
                    [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
                    [
                        [u, /_/g, " "],
                        [f, F],
                        [d, g]
                    ],
                    [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                    [u, [f, D],
                        [d, g]
                    ],
                    [/\b(opd2(\d{3}a?))(?: bui|\))/i],
                    [u, [f, J, {
                            OnePlus: ["304", "403", "203"],
                            "*": D
                        }],
                        [d, v]
                    ],
                    [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                    [u, [f, "Vivo"],
                        [d, g]
                    ],
                    [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                    [u, [f, "Realme"],
                        [d, g]
                    ],
                    [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                    [u, [f, L],
                        [d, g]
                    ],
                    [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                    [u, [f, L],
                        [d, v]
                    ],
                    [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                    [u, [f, "LG"],
                        [d, v]
                    ],
                    [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
                    [u, [f, "LG"],
                        [d, g]
                    ],
                    [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
                    [u, [f, "Lenovo"],
                        [d, v]
                    ],
                    [/(nokia) (t[12][01])/i],
                    [f, u, [d, v]],
                    [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
                    [
                        [u, /_/g, " "],
                        [d, g],
                        [f, "Nokia"]
                    ],
                    [/(pixel (c|tablet))\b/i],
                    [u, [f, O],
                        [d, v]
                    ],
                    [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                    [u, [f, O],
                        [d, g]
                    ],
                    [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                    [u, [f, j],
                        [d, g]
                    ],
                    [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                    [
                        [u, "Xperia Tablet"],
                        [f, j],
                        [d, v]
                    ],
                    [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                    [u, [f, I],
                        [d, g]
                    ],
                    [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                    [u, [f, _],
                        [d, v]
                    ],
                    [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                    [
                        [u, /(.+)/g, "Fire Phone $1"],
                        [f, _],
                        [d, g]
                    ],
                    [/(playbook);[-\w\),; ]+(rim)/i],
                    [u, f, [d, v]],
                    [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                    [u, [f, k],
                        [d, g]
                    ],
                    [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                    [u, [f, E],
                        [d, v]
                    ],
                    [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                    [u, [f, E],
                        [d, g]
                    ],
                    [/(nexus 9)/i],
                    [u, [f, "HTC"],
                        [d, v]
                    ],
                    [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                    [f, [u, /_/g, " "],
                        [d, g]
                    ],
                    [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
                    [u, [f, "TCL"],
                        [d, v]
                    ],
                    [/(itel) ((\w+))/i],
                    [
                        [f, K], u, [d, J, {
                            tablet: ["p10001l", "w7001"],
                            "*": "mobile"
                        }]
                    ],
                    [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                    [u, [f, "Acer"],
                        [d, v]
                    ],
                    [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                    [u, [f, "Meizu"],
                        [d, g]
                    ],
                    [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                    [u, [f, "Ulefone"],
                        [d, g]
                    ],
                    [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
                    [u, [f, "Energizer"],
                        [d, g]
                    ],
                    [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
                    [u, [f, "Cat"],
                        [d, g]
                    ],
                    [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
                    [u, [f, "Smartfren"],
                        [d, g]
                    ],
                    [/droid.+; (a(?:015|06[35]|142p?))/i],
                    [u, [f, "Nothing"],
                        [d, g]
                    ],
                    [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
                    [u, [f, "Archos"],
                        [d, v]
                    ],
                    [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
                    [u, [f, "Archos"],
                        [d, g]
                    ],
                    [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
                    [f, u, [d, v]],
                    [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
                    [f, u, [d, g]],
                    [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                    [f, u, [d, v]],
                    [/(surface duo)/i],
                    [u, [f, A],
                        [d, v]
                    ],
                    [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                    [u, [f, "Fairphone"],
                        [d, g]
                    ],
                    [/(u304aa)/i],
                    [u, [f, "AT&T"],
                        [d, g]
                    ],
                    [/\bsie-(\w*)/i],
                    [u, [f, "Siemens"],
                        [d, g]
                    ],
                    [/\b(rct\w+) b/i],
                    [u, [f, "RCA"],
                        [d, v]
                    ],
                    [/\b(venue[\d ]{2,7}) b/i],
                    [u, [f, "Dell"],
                        [d, v]
                    ],
                    [/\b(q(?:mv|ta)\w+) b/i],
                    [u, [f, "Verizon"],
                        [d, v]
                    ],
                    [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                    [u, [f, "Barnes & Noble"],
                        [d, v]
                    ],
                    [/\b(tm\d{3}\w+) b/i],
                    [u, [f, "NuVision"],
                        [d, v]
                    ],
                    [/\b(k88) b/i],
                    [u, [f, "ZTE"],
                        [d, v]
                    ],
                    [/\b(nx\d{3}j) b/i],
                    [u, [f, "ZTE"],
                        [d, g]
                    ],
                    [/\b(gen\d{3}) b.+49h/i],
                    [u, [f, "Swiss"],
                        [d, g]
                    ],
                    [/\b(zur\d{3}) b/i],
                    [u, [f, "Swiss"],
                        [d, v]
                    ],
                    [/\b((zeki)?tb.*\b) b/i],
                    [u, [f, "Zeki"],
                        [d, v]
                    ],
                    [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                    [
                        [f, "Dragon Touch"], u, [d, v]
                    ],
                    [/\b(ns-?\w{0,9}) b/i],
                    [u, [f, "Insignia"],
                        [d, v]
                    ],
                    [/\b((nxa|next)-?\w{0,9}) b/i],
                    [u, [f, "NextBook"],
                        [d, v]
                    ],
                    [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                    [
                        [f, "Voice"], u, [d, g]
                    ],
                    [/\b(lvtel\-)?(v1[12]) b/i],
                    [
                        [f, "LvTel"], u, [d, g]
                    ],
                    [/\b(ph-1) /i],
                    [u, [f, "Essential"],
                        [d, g]
                    ],
                    [/\b(v(100md|700na|7011|917g).*\b) b/i],
                    [u, [f, "Envizen"],
                        [d, v]
                    ],
                    [/\b(trio[-\w\. ]+) b/i],
                    [u, [f, "MachSpeed"],
                        [d, v]
                    ],
                    [/\btu_(1491) b/i],
                    [u, [f, "Rotor"],
                        [d, v]
                    ],
                    [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
                    [u, [f, R],
                        [d, v]
                    ],
                    [/(sprint) (\w+)/i],
                    [f, u, [d, g]],
                    [/(kin\.[onetw]{3})/i],
                    [
                        [u, /\./g, " "],
                        [f, A],
                        [d, g]
                    ],
                    [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                    [u, [f, $],
                        [d, v]
                    ],
                    [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                    [u, [f, $],
                        [d, g]
                    ],
                    [/smart-tv.+(samsung)/i],
                    [f, [d, b]],
                    [/hbbtv.+maple;(\d+)/i],
                    [
                        [u, /^/, "SmartTV"],
                        [f, z],
                        [d, b]
                    ],
                    [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                    [
                        [f, "LG"],
                        [d, b]
                    ],
                    [/(apple) ?tv/i],
                    [f, [u, S + " TV"],
                        [d, b]
                    ],
                    [/crkey/i],
                    [
                        [u, x + "cast"],
                        [f, O],
                        [d, b]
                    ],
                    [/droid.+aft(\w+)( bui|\))/i],
                    [u, [f, _],
                        [d, b]
                    ],
                    [/(shield \w+ tv)/i],
                    [u, [f, R],
                        [d, b]
                    ],
                    [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                    [u, [f, U],
                        [d, b]
                    ],
                    [/(bravia[\w ]+)( bui|\))/i],
                    [u, [f, j],
                        [d, b]
                    ],
                    [/(mi(tv|box)-?\w+) bui/i],
                    [u, [f, F],
                        [d, b]
                    ],
                    [/Hbbtv.*(technisat) (.*);/i],
                    [f, u, [d, b]],
                    [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                    [
                        [f, X],
                        [u, X],
                        [d, b]
                    ],
                    [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
                    [u, [d, b]],
                    [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                    [
                        [d, b]
                    ],
                    [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                    [f, u, [d, m]],
                    [/droid.+; (shield)( bui|\))/i],
                    [u, [f, R],
                        [d, m]
                    ],
                    [/(playstation \w+)/i],
                    [u, [f, j],
                        [d, m]
                    ],
                    [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                    [u, [f, A],
                        [d, m]
                    ],
                    [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
                    [u, [f, z],
                        [d, y]
                    ],
                    [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
                    [f, u, [d, y]],
                    [/(ow(?:19|20)?we?[1-3]{1,3})/i],
                    [u, [f, D],
                        [d, y]
                    ],
                    [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                    [u, [f, S],
                        [d, y]
                    ],
                    [/(opwwe\d{3})/i],
                    [u, [f, I],
                        [d, y]
                    ],
                    [/(moto 360)/i],
                    [u, [f, L],
                        [d, y]
                    ],
                    [/(smartwatch 3)/i],
                    [u, [f, j],
                        [d, y]
                    ],
                    [/(g watch r)/i],
                    [u, [f, "LG"],
                        [d, y]
                    ],
                    [/droid.+; (wt63?0{2,3})\)/i],
                    [u, [f, $],
                        [d, y]
                    ],
                    [/droid.+; (glass) \d/i],
                    [u, [f, O],
                        [d, y]
                    ],
                    [/(pico) (4|neo3(?: link|pro)?)/i],
                    [f, u, [d, y]],
                    [/; (quest( \d| pro)?)/i],
                    [u, [f, B],
                        [d, y]
                    ],
                    [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                    [f, [d, w]],
                    [/(aeobc)\b/i],
                    [u, [f, _],
                        [d, w]
                    ],
                    [/(homepod).+mac os/i],
                    [u, [f, S],
                        [d, w]
                    ],
                    [/windows iot/i],
                    [
                        [d, w]
                    ],
                    [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
                    [u, [d, g]],
                    [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                    [u, [d, v]],
                    [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                    [
                        [d, v]
                    ],
                    [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                    [
                        [d, g]
                    ],
                    [/droid .+?; ([\w\. -]+)( bui|\))/i],
                    [u, [f, "Generic"]]
                ],
                engine: [
                    [/windows.+ edge\/([\w\.]+)/i],
                    [p, [c, "EdgeHTML"]],
                    [/(arkweb)\/([\w\.]+)/i],
                    [c, p],
                    [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                    [p, [c, "Blink"]],
                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                    [c, p],
                    [/ladybird\//i],
                    [
                        [c, "LibWeb"]
                    ],
                    [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                    [p, c]
                ],
                os: [
                    [/microsoft (windows) (vista|xp)/i],
                    [c, p],
                    [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
                    [c, [p, J, Z]],
                    [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                    [
                        [p, J, Z],
                        [c, "Windows"]
                    ],
                    [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                    [
                        [p, /_/g, "."],
                        [c, "iOS"]
                    ],
                    [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                    [
                        [c, q],
                        [p, /_/g, "."]
                    ],
                    [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                    [p, c],
                    [/(ubuntu) ([\w\.]+) like android/i],
                    [
                        [c, /(.+)/, "$1 Touch"], p
                    ],
                    [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
                    [c, p],
                    [/\(bb(10);/i],
                    [p, [c, k]],
                    [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
                    [p, [c, "Symbian"]],
                    [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                    [p, [c, C + " OS"]],
                    [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                    [p, [c, "webOS"]],
                    [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                    [p, [c, "watchOS"]],
                    [/crkey\/([\d\.]+)/i],
                    [p, [c, x + "cast"]],
                    [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                    [
                        [c, H], p
                    ],
                    [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                    [c, p],
                    [/(sunos) ?([\w\.\d]*)/i],
                    [
                        [c, "Solaris"], p
                    ],
                    [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                    [c, p]
                ]
            },
            et = function(e, t) {
                if (typeof e === o && (t = e, e = void 0), !(this instanceof et)) return new et(e, t).getResult();
                var n = typeof r !== a && r.navigator ? r.navigator : void 0,
                    m = e || (n && n.userAgent ? n.userAgent : ""),
                    b = n && n.userAgentData ? n.userAgentData : void 0,
                    y = t ? W(ee, t) : ee,
                    w = n && n.userAgent == m;
                return this.getBrowser = function() {
                    var e, t = {};
                    return t[c] = void 0, t[p] = void 0, Y.call(t, m, y.browser), t[l] = typeof(e = t[p]) === s ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0, w && n && n.brave && typeof n.brave.isBrave == i && (t[c] = "Brave"), t
                }, this.getCPU = function() {
                    var e = {};
                    return e[h] = void 0, Y.call(e, m, y.cpu), e
                }, this.getDevice = function() {
                    var e = {};
                    return e[f] = void 0, e[u] = void 0, e[d] = void 0, Y.call(e, m, y.device), w && !e[d] && b && b.mobile && (e[d] = g), w && "Macintosh" == e[u] && n && typeof n.standalone !== a && n.maxTouchPoints && n.maxTouchPoints > 2 && (e[u] = "iPad", e[d] = v), e
                }, this.getEngine = function() {
                    var e = {};
                    return e[c] = void 0, e[p] = void 0, Y.call(e, m, y.engine), e
                }, this.getOS = function() {
                    var e = {};
                    return e[c] = void 0, e[p] = void 0, Y.call(e, m, y.os), w && !e[c] && b && b.platform && "Unknown" != b.platform && (e[c] = b.platform.replace(/chrome os/i, H).replace(/macos/i, q)), e
                }, this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }, this.getUA = function() {
                    return m
                }, this.setUA = function(e) {
                    return m = typeof e === s && e.length > 500 ? X(e, 500) : e, this
                }, this.setUA(m), this
            };
        if (et.VERSION = "1.0.41", et.BROWSER = Q([c, p, l]), et.CPU = Q([h]), et.DEVICE = Q([u, f, d, m, g, b, v, y, w]), et.ENGINE = et.OS = Q([c, p]), typeof n !== a) t.exports && (n = t.exports = et), n.UAParser = et;
        else if (typeof define === i && define.amd) e.r, void 0 !== et && e.v(et);
        else typeof r !== a && (r.UAParser = et);
        var en = typeof r !== a && (r.jQuery || r.Zepto);
        if (en && !en.ua) {
            var er = new et;
            en.ua = er.getResult(), en.ua.get = function() {
                return er.getUA()
            }, en.ua.set = function(e) {
                er.setUA(e);
                var t = er.getResult();
                for (var n in t) en.ua[n] = t[n]
            }
        }
    }("object" == typeof window ? window : e.e)
}]);

//# debugId=40c1491d-c7e4-8534-6eb5-cddbfb68fc60