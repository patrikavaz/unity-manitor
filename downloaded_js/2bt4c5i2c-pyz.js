;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "ff7d341b-aaf1-26c6-7c14-d202c05e6ea6")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 321950, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(409781);
    let n = (0, a.createContext)({});
    e.s(["GenesisSessionProvider", 0, ({
        children: e
    }) => {
        let [o, r] = (0, a.useState)({
            ...JSON.parse(sessionStorage.getItem("UNITY_SESSION") || "{}")
        });
        return (0, t.jsx)(n.Provider, {
            value: {
                genesisSession: o,
                setGenesisSession: r
            },
            "data-sentry-element": "GenesisSessionContext.Provider",
            "data-sentry-component": "GenesisSessionProvider",
            "data-sentry-source-file": "genesis.tsx",
            children: e
        })
    }, "useGenesisSession", 0, () => (0, a.useContext)(n)])
}, 849141, e => {
    "use strict";
    let t = async () => {
        let e = await fetch("https://api.unity.com/v1/oauth2/authorize/logined-users", {
                credentials: "include"
            }),
            t = await e.json();
        if (!e.ok) throw Error(`Fetching user failed with status ${e.status}. Reason: ${JSON.stringify(t.details)}`);
        return t.model
    };
    e.s(["getUserFromGenesis", 0, t])
}, 935862, e => {
    "use strict";
    var t = e.i(409781),
        a = e.i(848662);
    let n = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z"
            }))]
        ]),
        o = t.forwardRef((e, o) => t.createElement(a.default, {
            ref: o,
            ...e,
            weights: n
        }));
    o.displayName = "MagnifyingGlassIcon", e.s(["MagnifyingGlass", 0, o, "MagnifyingGlassIcon", 0, o], 935862)
}, 531834, e => {
    "use strict";
    var t = e.i(409781),
        a = e.i(848662);
    let n = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M227.46,214c-16.52-28.56-43-48.06-73.68-55.09a68,68,0,1,0-51.56,0c-30.64,7-57.16,26.53-73.68,55.09a4,4,0,0,0,6.92,4C55,184.19,89.62,164,128,164s73,20.19,92.54,54a4,4,0,0,0,3.46,2,3.93,3.93,0,0,0,2-.54A4,4,0,0,0,227.46,214ZM68,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,68,96Z"
            }))]
        ]),
        o = t.forwardRef((e, o) => t.createElement(a.default, {
            ref: o,
            ...e,
            weights: n
        }));
    o.displayName = "UserIcon", e.s(["User", 0, o, "UserIcon", 0, o], 531834)
}, 689326, e => {
    "use strict";
    let t;
    var a = e.i(785690),
        n = (t = () => a.isServer, {
            isServer: () => t(),
            setIsServer(e) {
                t = e
            }
        });
    e.s(["environmentManager", 0, n])
}, 758059, 304780, e => {
    "use strict";
    var t = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), () => {
                this.listeners.delete(e), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    };
    e.s(["Subscribable", 0, t], 304780);
    var a = new class extends t {
        #e;
        #t;
        #a;
        constructor() {
            super(), this.#a = e => {
                if ("u" > typeof window && window.addEventListener) {
                    let t = () => e();
                    return window.addEventListener("visibilitychange", t, !1), () => {
                        window.removeEventListener("visibilitychange", t)
                    }
                }
            }
        }
        onSubscribe() {
            this.#t || this.setEventListener(this.#a)
        }
        onUnsubscribe() {
            this.hasListeners() || (this.#t?.(), this.#t = void 0)
        }
        setEventListener(e) {
            this.#a = e, this.#t?.(), this.#t = e(e => {
                "boolean" == typeof e ? this.setFocused(e) : this.onFocus()
            })
        }
        setFocused(e) {
            this.#e !== e && (this.#e = e, this.onFocus())
        }
        onFocus() {
            let e = this.isFocused();
            this.listeners.forEach(t => {
                t(e)
            })
        }
        isFocused() {
            return "boolean" == typeof this.#e ? this.#e : globalThis.document?.visibilityState !== "hidden"
        }
    };
    e.s(["focusManager", 0, a], 758059)
}, 317386, e => {
    "use strict";
    var t = e.i(786459),
        a = e.i(785690);

    function n(e) {
        return e
    }
    e.s(["defaultShouldDehydrateQuery", 0, function(e) {
        return "success" === e.state.status
    }, "hydrate", 0, function(e, o, r) {
        if ("object" != typeof o || null === o) return;
        let i = e.getMutationCache(),
            s = e.getQueryCache(),
            l = r?.defaultOptions?.deserializeData ?? e.getDefaultOptions().hydrate?.deserializeData ?? n,
            d = o.mutations || [],
            g = o.queries || [];
        d.forEach(({
            state: t,
            ...a
        }) => {
            i.build(e, {
                ...e.getDefaultOptions().hydrate?.mutations,
                ...r?.defaultOptions?.mutations,
                ...a
            }, t)
        }), g.forEach(({
            queryKey: n,
            state: o,
            queryHash: i,
            meta: d,
            promise: g,
            dehydratedAt: u,
            queryType: m
        }) => {
            let c = g ? (0, t.tryResolveSync)(g) : void 0,
                p = void 0 === o.data ? c?.data : o.data,
                h = void 0 === p ? p : l(p),
                f = s.get(i),
                b = f?.state.status === "pending",
                y = f?.state.fetchStatus === "fetching";
            if (f) {
                let e = c && void 0 !== u && u > f.state.dataUpdatedAt;
                if (o.dataUpdatedAt > f.state.dataUpdatedAt || e) {
                    let {
                        fetchStatus: e,
                        ...t
                    } = o;
                    f.setState({
                        ...t,
                        data: h,
                        ..."pending" === o.status && void 0 !== h && {
                            status: "success",
                            ...!y && {
                                fetchStatus: "idle"
                            }
                        }
                    })
                }
            } else f = s.build(e, {
                ...e.getDefaultOptions().hydrate?.queries,
                ...r?.defaultOptions?.queries,
                queryKey: n,
                queryHash: i,
                meta: d,
                _type: m
            }, {
                ...o,
                data: h,
                fetchStatus: "idle",
                status: "pending" === o.status && void 0 !== h ? "success" : o.status
            });
            !g || c || b || y || void 0 !== u && !(u > f.state.dataUpdatedAt) || f.fetch(void 0, {
                initialPromise: Promise.resolve(g).then(l)
            }).catch(a.noop)
        })
    }])
}, 664300, e => {
    "use strict";
    let t, a, n, o, r, i;
    var s = e.i(137530).systemSetTimeoutZero,
        l = (t = [], a = 0, n = e => {
            e()
        }, o = e => {
            e()
        }, r = s, {
            batch: e => {
                let i;
                a++;
                try {
                    i = e()
                } finally {
                    let e;
                    --a || (e = t, t = [], e.length && r(() => {
                        o(() => {
                            e.forEach(e => {
                                n(e)
                            })
                        })
                    }))
                }
                return i
            },
            batchCalls: e => (...t) => {
                i(() => {
                    e(...t)
                })
            },
            schedule: i = e => {
                a ? t.push(e) : r(() => {
                    n(e)
                })
            },
            setNotifyFunction: e => {
                n = e
            },
            setBatchNotifyFunction: e => {
                o = e
            },
            setScheduler: e => {
                r = e
            }
        });
    e.s(["notifyManager", 0, l])
}, 655100, e => {
    "use strict";
    var t = e.i(304780),
        a = new class extends t.Subscribable {
            #n = !0;
            #t;
            #a;
            constructor() {
                super(), this.#a = e => {
                    if ("u" > typeof window && window.addEventListener) {
                        let t = () => e(!0),
                            a = () => e(!1);
                        return window.addEventListener("online", t, !1), window.addEventListener("offline", a, !1), () => {
                            window.removeEventListener("online", t), window.removeEventListener("offline", a)
                        }
                    }
                }
            }
            onSubscribe() {
                this.#t || this.setEventListener(this.#a)
            }
            onUnsubscribe() {
                this.hasListeners() || (this.#t?.(), this.#t = void 0)
            }
            setEventListener(e) {
                this.#a = e, this.#t?.(), this.#t = e(this.setOnline.bind(this))
            }
            setOnline(e) {
                this.#n !== e && (this.#n = e, this.listeners.forEach(t => {
                    t(e)
                }))
            }
            isOnline() {
                return this.#n
            }
        };
    e.s(["onlineManager", 0, a])
}, 213278, 297652, 343201, e => {
    "use strict";
    var t = e.i(785690),
        a = e.i(664300),
        n = e.i(758059),
        o = e.i(655100),
        r = e.i(786459),
        i = e.i(689326);

    function s(e) {
        return Math.min(1e3 * 2 ** e, 3e4)
    }

    function l(e) {
        return (e ?? "online") !== "online" || o.onlineManager.isOnline()
    }
    var d = class extends Error {
        constructor(e) {
            super("CancelledError"), this.revert = e?.revert, this.silent = e?.silent
        }
    };

    function g(e) {
        let a, g = !1,
            u = 0,
            m = (0, r.pendingThenable)(),
            c = () => n.focusManager.isFocused() && ("always" === e.networkMode || o.onlineManager.isOnline()) && e.canRun(),
            p = () => l(e.networkMode) && e.canRun(),
            h = e => {
                "pending" === m.status && (a?.(), m.resolve(e))
            },
            f = e => {
                "pending" === m.status && (a?.(), m.reject(e))
            },
            b = () => new Promise(t => {
                a = e => {
                    ("pending" !== m.status || c()) && t(e)
                }, e.onPause?.()
            }).then(() => {
                a = void 0, "pending" === m.status && e.onContinue?.()
            }),
            y = () => {
                let a;
                if ("pending" !== m.status) return;
                let n = 0 === u ? e.initialPromise : void 0;
                try {
                    a = n ?? e.fn()
                } catch (e) {
                    a = Promise.reject(e)
                }
                Promise.resolve(a).then(h).catch(a => {
                    if ("pending" !== m.status) return;
                    let n = e.retry ?? 3 * !i.environmentManager.isServer(),
                        o = e.retryDelay ?? s,
                        r = "function" == typeof o ? o(u, a) : o,
                        l = !0 === n || "number" == typeof n && u < n || "function" == typeof n && n(u, a);
                    g || !l ? f(a) : (u++, e.onFail?.(u, a), (0, t.sleep)(r).then(() => c() ? void 0 : b()).then(() => {
                        g ? f(a) : y()
                    }))
                })
            };
        return {
            promise: m,
            status: () => m.status,
            cancel: t => {
                if ("pending" === m.status) {
                    let a = new d(t);
                    f(a), e.onCancel?.(a)
                }
            },
            continue: () => (a?.(), m),
            cancelRetry: () => {
                g = !0
            },
            continueRetry: () => {
                g = !1
            },
            canStart: p,
            start: () => (p() ? y() : b().then(y), m)
        }
    }
    e.s(["CancelledError", 0, d, "canFetch", 0, l, "createRetryer", 0, g], 297652);
    var u = e.i(137530),
        m = class {
            #o;
            destroy() {
                this.clearGcTimeout()
            }
            scheduleGc() {
                this.clearGcTimeout(), (0, t.isValidTimeout)(this.gcTime) && (this.#o = u.timeoutManager.setTimeout(() => {
                    this.optionalRemove()
                }, this.gcTime))
            }
            updateGcTime(e) {
                this.gcTime = Math.max(this.gcTime || 0, e ?? (i.environmentManager.isServer() ? 1 / 0 : 3e5))
            }
            clearGcTimeout() {
                void 0 !== this.#o && (u.timeoutManager.clearTimeout(this.#o), this.#o = void 0)
            }
        };

    function c(e, {
        pages: t,
        pageParams: a
    }) {
        let n = t.length - 1;
        return t.length > 0 ? e.getNextPageParam(t[n], t, a[n], a) : void 0
    }
    e.s(["Removable", 0, m], 343201);
    var p = class extends m {
        #r;
        #i;
        #s;
        #l;
        #d;
        #g;
        #u;
        #m;
        constructor(e) {
            super(), this.#m = !1, this.#u = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#d = e.client, this.#l = this.#d.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#i = b(this.options), this.state = e.state ?? this.#i, this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get queryType() {
            return this.#r
        }
        get promise() {
            return this.#g?.promise
        }
        setOptions(e) {
            if (this.options = {
                    ...this.#u,
                    ...e
                }, e?._type && (this.#r = e._type), this.updateGcTime(this.options.gcTime), this.state && void 0 === this.state.data) {
                let e = b(this.options);
                void 0 !== e.data && (this.setState(f(e.data, e.dataUpdatedAt)), this.#i = e)
            }
        }
        optionalRemove() {
            this.observers.length || "idle" !== this.state.fetchStatus || this.#l.remove(this)
        }
        setData(e, a) {
            let n = (0, t.replaceData)(this.state.data, e, this.options);
            return this.#c({
                data: n,
                type: "success",
                dataUpdatedAt: a?.updatedAt,
                manual: a?.manual
            }), n
        }
        setState(e) {
            this.#c({
                type: "setState",
                state: e
            })
        }
        cancel(e) {
            let a = this.#g?.promise;
            return this.#g?.cancel(e), a ? a.then(t.noop).catch(t.noop) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        get resetState() {
            return this.#i
        }
        reset() {
            this.destroy(), this.setState(this.resetState)
        }
        isActive() {
            return this.observers.some(e => !1 !== (0, t.resolveQueryBoolean)(e.options.enabled, this))
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === t.skipToken || !this.isFetched()
        }
        isFetched() {
            return this.state.dataUpdateCount + this.state.errorUpdateCount > 0
        }
        isStatic() {
            return this.getObserversCount() > 0 && this.observers.some(e => "static" === (0, t.resolveStaleTime)(e.options.staleTime, this))
        }
        isStale() {
            return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : void 0 === this.state.data || this.state.isInvalidated
        }
        isStaleByTime(e = 0) {
            return void 0 === this.state.data || "static" !== e && (!!this.state.isInvalidated || !(0, t.timeUntilStale)(this.state.dataUpdatedAt, e))
        }
        onFocus() {
            let e = this.observers.find(e => e.shouldFetchOnWindowFocus());
            e?.refetch({
                cancelRefetch: !1
            }), this.#g?.continue()
        }
        onOnline() {
            let e = this.observers.find(e => e.shouldFetchOnReconnect());
            e?.refetch({
                cancelRefetch: !1
            }), this.#g?.continue()
        }
        addObserver(e) {
            this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.#l.notify({
                type: "observerAdded",
                query: this,
                observer: e
            }))
        }
        removeObserver(e) {
            this.observers.includes(e) && (this.observers = this.observers.filter(t => t !== e), this.observers.length || (this.#g && (this.#m || this.#p() ? this.#g.cancel({
                revert: !0
            }) : this.#g.cancelRetry()), this.scheduleGc()), this.#l.notify({
                type: "observerRemoved",
                query: this,
                observer: e
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        #p() {
            return "paused" === this.state.fetchStatus && "pending" === this.state.status
        }
        invalidate() {
            this.state.isInvalidated || this.#c({
                type: "invalidate"
            })
        }
        async fetch(e, a) {
            var n;
            let o;
            if ("idle" !== this.state.fetchStatus && this.#g?.status() !== "rejected") {
                if (void 0 !== this.state.data && a?.cancelRefetch) this.cancel({
                    silent: !0
                });
                else if (this.#g) return this.#g.continueRetry(), this.#g.promise
            }
            if (e && this.setOptions(e), !this.options.queryFn) {
                let e = this.observers.find(e => e.options.queryFn);
                e && this.setOptions(e.options)
            }
            let r = new AbortController,
                i = e => {
                    Object.defineProperty(e, "signal", {
                        enumerable: !0,
                        get: () => (this.#m = !0, r.signal)
                    })
                },
                s = () => {
                    let e, n = (0, t.ensureQueryFn)(this.options, a),
                        o = (i(e = {
                            client: this.#d,
                            queryKey: this.queryKey,
                            meta: this.meta
                        }), e);
                    return (this.#m = !1, this.options.persister) ? this.options.persister(n, o, this) : n(o)
                },
                l = (i(o = {
                    fetchOptions: a,
                    options: this.options,
                    queryKey: this.queryKey,
                    client: this.#d,
                    state: this.state,
                    fetchFn: s
                }), o),
                u = "infinite" === this.#r ? (n = this.options.pages, {
                    onFetch: (e, a) => {
                        let o = e.options,
                            r = e.fetchOptions?.meta?.fetchMore?.direction,
                            i = e.state.data?.pages || [],
                            s = e.state.data?.pageParams || [],
                            l = {
                                pages: [],
                                pageParams: []
                            },
                            d = 0,
                            g = async () => {
                                let a = !1,
                                    g = (0, t.ensureQueryFn)(e.options, e.fetchOptions),
                                    u = async (n, o, r) => {
                                        let i;
                                        if (a) return Promise.reject(e.signal.reason);
                                        if (null == o && n.pages.length) return Promise.resolve(n);
                                        let s = (i = {
                                                client: e.client,
                                                queryKey: e.queryKey,
                                                pageParam: o,
                                                direction: r ? "backward" : "forward",
                                                meta: e.options.meta
                                            }, (0, t.addConsumeAwareSignal)(i, () => e.signal, () => a = !0), i),
                                            l = await g(s),
                                            {
                                                maxPages: d
                                            } = e.options,
                                            u = r ? t.addToStart : t.addToEnd;
                                        return {
                                            pages: u(n.pages, l, d),
                                            pageParams: u(n.pageParams, o, d)
                                        }
                                    };
                                if (r && i.length) {
                                    let e = "backward" === r,
                                        t = {
                                            pages: i,
                                            pageParams: s
                                        },
                                        a = (e ? function(e, {
                                            pages: t,
                                            pageParams: a
                                        }) {
                                            return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, a[0], a) : void 0
                                        } : c)(o, t);
                                    l = await u(t, a, e)
                                } else {
                                    let e = n ?? i.length;
                                    do {
                                        let e = 0 === d ? s[0] ?? o.initialPageParam : c(o, l);
                                        if (d > 0 && null == e) break;
                                        l = await u(l, e), d++
                                    } while (d < e)
                                }
                                return l
                            };
                        e.options.persister ? e.fetchFn = () => e.options.persister?.(g, {
                            client: e.client,
                            queryKey: e.queryKey,
                            meta: e.options.meta,
                            signal: e.signal
                        }, a) : e.fetchFn = g
                    }
                }) : this.options.behavior;
            u?.onFetch(l, this), this.#s = this.state, ("idle" === this.state.fetchStatus || this.state.fetchMeta !== l.fetchOptions?.meta) && this.#c({
                type: "fetch",
                meta: l.fetchOptions?.meta
            }), this.#g = g({
                initialPromise: a?.initialPromise,
                fn: l.fetchFn,
                onCancel: e => {
                    e instanceof d && e.revert && this.setState({
                        ...this.#s,
                        fetchStatus: "idle"
                    }), r.abort()
                },
                onFail: (e, t) => {
                    this.#c({
                        type: "failed",
                        failureCount: e,
                        error: t
                    })
                },
                onPause: () => {
                    this.#c({
                        type: "pause"
                    })
                },
                onContinue: () => {
                    this.#c({
                        type: "continue"
                    })
                },
                retry: l.options.retry,
                retryDelay: l.options.retryDelay,
                networkMode: l.options.networkMode,
                canRun: () => !0
            });
            try {
                let e = await this.#g.start();
                if (void 0 === e) throw Error(`${this.queryHash} data is undefined`);
                return this.setData(e), this.#l.config.onSuccess?.(e, this), this.#l.config.onSettled?.(e, this.state.error, this), e
            } catch (e) {
                if (e instanceof d) {
                    if (e.silent) return this.#g.promise;
                    else if (e.revert) {
                        if (void 0 === this.state.data) throw e;
                        return this.state.data
                    }
                }
                throw this.#c({
                    type: "error",
                    error: e
                }), this.#l.config.onError?.(e, this), this.#l.config.onSettled?.(this.state.data, e, this), e
            } finally {
                this.scheduleGc()
            }
        }
        #c(e) {
            let t = t => {
                switch (e.type) {
                    case "failed":
                        return {
                            ...t, fetchFailureCount: e.failureCount, fetchFailureReason: e.error
                        };
                    case "pause":
                        return {
                            ...t, fetchStatus: "paused"
                        };
                    case "continue":
                        return {
                            ...t, fetchStatus: "fetching"
                        };
                    case "fetch":
                        return {
                            ...t, ...h(t.data, this.options), fetchMeta: e.meta ?? null
                        };
                    case "success":
                        let a = {
                            ...t,
                            ...f(e.data, e.dataUpdatedAt),
                            dataUpdateCount: t.dataUpdateCount + 1,
                            ...!e.manual && {
                                fetchStatus: "idle",
                                fetchFailureCount: 0,
                                fetchFailureReason: null
                            }
                        };
                        return this.#s = e.manual ? a : void 0, a;
                    case "error":
                        let n = e.error;
                        return {
                            ...t, error: n, errorUpdateCount: t.errorUpdateCount + 1, errorUpdatedAt: Date.now(), fetchFailureCount: t.fetchFailureCount + 1, fetchFailureReason: n, fetchStatus: "idle", status: "error", isInvalidated: !0
                        };
                    case "invalidate":
                        return {
                            ...t, isInvalidated: !0
                        };
                    case "setState":
                        return {
                            ...t, ...e.state
                        }
                }
            };
            this.state = t(this.state), a.notifyManager.batch(() => {
                this.observers.forEach(e => {
                    e.onQueryUpdate()
                }), this.#l.notify({
                    query: this,
                    type: "updated",
                    action: e
                })
            })
        }
    };

    function h(e, t) {
        return {
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchStatus: l(t.networkMode) ? "fetching" : "paused",
            ...void 0 === e && {
                error: null,
                status: "pending"
            }
        }
    }

    function f(e, t) {
        return {
            data: e,
            dataUpdatedAt: t ?? Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success"
        }
    }

    function b(e) {
        let t = "function" == typeof e.initialData ? e.initialData() : e.initialData,
            a = void 0 !== t,
            n = a ? "function" == typeof e.initialDataUpdatedAt ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
        return {
            data: t,
            dataUpdateCount: 0,
            dataUpdatedAt: a ? n ?? Date.now() : 0,
            error: null,
            errorUpdateCount: 0,
            errorUpdatedAt: 0,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: null,
            isInvalidated: !1,
            status: a ? "success" : "pending",
            fetchStatus: "idle"
        }
    }
    e.s(["Query", 0, p, "fetchState", 0, h], 213278)
}, 785690, 137530, 786459, e => {
    "use strict";
    var t = {
            setTimeout: (e, t) => setTimeout(e, t),
            clearTimeout: e => clearTimeout(e),
            setInterval: (e, t) => setInterval(e, t),
            clearInterval: e => clearInterval(e)
        },
        a = new class {
            #h = t;
            #f = !1;
            setTimeoutProvider(e) {
                this.#h = e
            }
            setTimeout(e, t) {
                return this.#h.setTimeout(e, t)
            }
            clearTimeout(e) {
                this.#h.clearTimeout(e)
            }
            setInterval(e, t) {
                return this.#h.setInterval(e, t)
            }
            clearInterval(e) {
                this.#h.clearInterval(e)
            }
        };
    e.s(["systemSetTimeoutZero", 0, function(e) {
        setTimeout(e, 0)
    }, "timeoutManager", 0, a], 137530);
    var n = "u" < typeof window || "Deno" in globalThis;

    function o() {}

    function r(e, t) {
        return (t?.queryKeyHashFn || i)(e)
    }

    function i(e) {
        return JSON.stringify(e, (e, t) => g(t) ? Object.keys(t).sort().reduce((e, a) => (e[a] = t[a], e), {}) : t)
    }

    function s(e, t) {
        return e === t || typeof e == typeof t && !!e && !!t && "object" == typeof e && "object" == typeof t && Object.keys(t).every(a => s(e[a], t[a]))
    }
    var l = Object.prototype.hasOwnProperty;

    function d(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length
    }

    function g(e) {
        if (!u(e)) return !1;
        let t = e.constructor;
        if (void 0 === t) return !0;
        let a = t.prototype;
        return !!u(a) && !!a.hasOwnProperty("isPrototypeOf") && Object.getPrototypeOf(e) === Object.prototype
    }

    function u(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }
    var m = Symbol();
    e.s(["addConsumeAwareSignal", 0, function(e, t, a) {
        let n, o = !1;
        return Object.defineProperty(e, "signal", {
            enumerable: !0,
            get: () => (n ??= t(), o || (o = !0, n.aborted ? a() : n.addEventListener("abort", a, {
                once: !0
            })), n)
        }), e
    }, "addToEnd", 0, function(e, t, a = 0) {
        let n = [...e, t];
        return a && n.length > a ? n.slice(1) : n
    }, "addToStart", 0, function(e, t, a = 0) {
        let n = [t, ...e];
        return a && n.length > a ? n.slice(0, -1) : n
    }, "ensureQueryFn", 0, function(e, t) {
        return !e.queryFn && t?.initialPromise ? () => t.initialPromise : e.queryFn && e.queryFn !== m ? e.queryFn : () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
    }, "functionalUpdate", 0, function(e, t) {
        return "function" == typeof e ? e(t) : e
    }, "hashKey", 0, i, "hashQueryKeyByOptions", 0, r, "isServer", 0, n, "isValidTimeout", 0, function(e) {
        return "number" == typeof e && e >= 0 && e !== 1 / 0
    }, "keepPreviousData", 0, function(e) {
        return e
    }, "matchMutation", 0, function(e, t) {
        let {
            exact: a,
            status: n,
            predicate: o,
            mutationKey: r
        } = e;
        if (r) {
            if (!t.options.mutationKey) return !1;
            if (a) {
                if (i(t.options.mutationKey) !== i(r)) return !1
            } else if (!s(t.options.mutationKey, r)) return !1
        }
        return (!n || t.state.status === n) && (!o || !!o(t))
    }, "matchQuery", 0, function(e, t) {
        let {
            type: a = "all",
            exact: n,
            fetchStatus: o,
            predicate: i,
            queryKey: l,
            stale: d
        } = e;
        if (l) {
            if (n) {
                if (t.queryHash !== r(l, t.options)) return !1
            } else if (!s(t.queryKey, l)) return !1
        }
        if ("all" !== a) {
            let e = t.isActive();
            if ("active" === a && !e || "inactive" === a && e) return !1
        }
        return ("boolean" != typeof d || t.isStale() === d) && (!o || o === t.state.fetchStatus) && (!i || !!i(t))
    }, "noop", 0, o, "partialMatchKey", 0, s, "replaceData", 0, function(e, t, a) {
        return "function" == typeof a.structuralSharing ? a.structuralSharing(e, t) : !1 !== a.structuralSharing ? function e(t, a, n = 0) {
            if (t === a) return t;
            if (n > 500) return a;
            let o = d(t) && d(a);
            if (!o && !(g(t) && g(a))) return a;
            let r = (o ? t : Object.keys(t)).length,
                i = o ? a : Object.keys(a),
                s = i.length,
                u = o ? Array(s) : {},
                m = 0;
            for (let d = 0; d < s; d++) {
                let s = o ? d : i[d],
                    g = t[s],
                    c = a[s];
                if (g === c) {
                    u[s] = g, (o ? d < r : l.call(t, s)) && m++;
                    continue
                }
                if (null === g || null === c || "object" != typeof g || "object" != typeof c) {
                    u[s] = c;
                    continue
                }
                let p = e(g, c, n + 1);
                u[s] = p, p === g && m++
            }
            return r === s && m === r ? t : u
        }(e, t) : t
    }, "resolveQueryBoolean", 0, function(e, t) {
        return "function" == typeof e ? e(t) : e
    }, "resolveStaleTime", 0, function(e, t) {
        return "function" == typeof e ? e(t) : e
    }, "shallowEqualObjects", 0, function(e, t) {
        if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
        for (let a in e)
            if (e[a] !== t[a]) return !1;
        return !0
    }, "shouldThrowError", 0, function(e, t) {
        return "function" == typeof e ? e(...t) : !!e
    }, "skipToken", 0, m, "sleep", 0, function(e) {
        return new Promise(t => {
            a.setTimeout(t, e)
        })
    }, "timeUntilStale", 0, function(e, t) {
        return Math.max(e + (t || 0) - Date.now(), 0)
    }], 785690), e.s(["pendingThenable", 0, function() {
        let e, t, a = new Promise((a, n) => {
            e = a, t = n
        });

        function n(e) {
            Object.assign(a, e), delete a.resolve, delete a.reject
        }
        return a.status = "pending", a.catch(() => {}), a.resolve = t => {
            n({
                status: "fulfilled",
                value: t
            }), e(t)
        }, a.reject = e => {
            n({
                status: "rejected",
                reason: e
            }), t(e)
        }, a
    }, "tryResolveSync", 0, function(e) {
        let t;
        if (e.then(e => (t = e, e), o)?.catch(o), void 0 !== t) return {
            data: t
        }
    }], 786459)
}, 818897, e => {
    "use strict";
    var t = e.i(409781),
        a = e.i(785328),
        n = t.createContext(void 0);
    e.s(["QueryClientProvider", 0, ({
        client: e,
        children: o
    }) => (t.useEffect(() => (e.mount(), () => {
        e.unmount()
    }), [e]), (0, a.jsx)(n.Provider, {
        value: e,
        children: o
    })), "useQueryClient", 0, e => {
        let a = t.useContext(n);
        if (e) return e;
        if (!a) throw Error("No QueryClient set, use QueryClientProvider to set one");
        return a
    }])
}, 379726, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var n = {
        bindSnapshot: function() {
            return d
        },
        createAsyncLocalStorage: function() {
            return l
        },
        createSnapshot: function() {
            return g
        }
    };
    for (var o in n) Object.defineProperty(a, o, {
        enumerable: !0,
        get: n[o]
    });
    let r = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
        value: "E504",
        enumerable: !1,
        configurable: !0
    });
    class i {
        disable() {
            throw r
        }
        getStore() {}
        run() {
            throw r
        }
        exit() {
            throw r
        }
        enterWith() {
            throw r
        }
        static bind(e) {
            return e
        }
    }
    let s = "u" > typeof globalThis && globalThis.AsyncLocalStorage;

    function l() {
        return s ? new s : new i
    }

    function d(e) {
        return s ? s.bind(e) : i.bind(e)
    }

    function g() {
        return s ? s.snapshot() : function(e, ...t) {
            return e(...t)
        }
    }
}, 282587, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), Object.defineProperty(a, "workAsyncStorageInstance", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = (0, e.r(379726).createAsyncLocalStorage)()
}, 881466, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), Object.defineProperty(a, "workAsyncStorage", {
        enumerable: !0,
        get: function() {
            return n.workAsyncStorageInstance
        }
    });
    let n = e.r(282587)
}, 331474, (e, t, a) => {
    "use strict";

    function n(e) {
        return e.split("/").map(e => encodeURIComponent(e)).join("/")
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), Object.defineProperty(a, "encodeURIPath", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}, 653107, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), Object.defineProperty(a, "BailoutToCSR", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(682413);

    function o({
        reason: e,
        children: t
    }) {
        if ("u" < typeof window) throw Object.defineProperty(new n.BailoutToCSRError(e), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        return t
    }
}, 12510, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), Object.defineProperty(a, "default", {
        enumerable: !0,
        get: function() {
            return d
        }
    });
    let n = e.r(785328),
        o = e.r(409781),
        r = e.r(653107),
        i = e.r(513720);

    function s(e) {
        return {
            default: e && "default" in e ? e.default : e
        }
    }
    let l = {
            loader: () => Promise.resolve(s(() => null)),
            loading: null,
            ssr: !0
        },
        d = function(e) {
            let t = {
                    ...l,
                    ...e
                },
                a = (0, o.lazy)(() => t.loader().then(s)),
                d = t.loading;

            function g(e) {
                let s = d ? (0, n.jsx)(d, {
                        isLoading: !0,
                        pastDelay: !0,
                        error: null
                    }) : null,
                    l = !t.ssr || !!t.loading,
                    g = l ? o.Suspense : o.Fragment,
                    u = t.ssr ? (0, n.jsxs)(n.Fragment, {
                        children: ["u" < typeof window ? (0, n.jsx)(i.PreloadChunks, {
                            moduleIds: t.modules
                        }) : null, (0, n.jsx)(a, {
                            ...e
                        })]
                    }) : (0, n.jsx)(r.BailoutToCSR, {
                        reason: "next/dynamic",
                        children: (0, n.jsx)(a, {
                            ...e
                        })
                    });
                return (0, n.jsx)(g, {
                    ...l ? {
                        fallback: s
                    } : {},
                    children: u
                })
            }
            return g.displayName = "LoadableComponent", g
        }
}, 425314, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), Object.defineProperty(a, "default", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(836437)._(e.r(12510));

    function o(e, t) {
        let a = {};
        "function" == typeof e && (a.loader = e);
        let o = {
            ...a,
            ...t
        };
        return (0, n.default)({
            ...o,
            modules: o.loadableGenerated?.modules
        })
    }("function" == typeof a.default || "object" == typeof a.default && null !== a.default) && void 0 === a.default.__esModule && (Object.defineProperty(a.default, "__esModule", {
        value: !0
    }), Object.assign(a.default, a), t.exports = a.default)
}, 513720, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), Object.defineProperty(a, "PreloadChunks", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let n = e.r(785328),
        o = e.r(42246),
        r = e.r(881466),
        i = e.r(331474),
        s = e.r(547981);

    function l({
        moduleIds: e
    }) {
        if ("u" > typeof window) return null;
        let t = r.workAsyncStorage.getStore();
        if (void 0 === t) return null;
        let a = [];
        if (t.reactLoadableManifest && e) {
            let n = t.reactLoadableManifest;
            for (let t of e) {
                if (!n[t]) continue;
                let e = n[t].files;
                a.push(...e)
            }
        }
        if (0 === a.length) return null;
        let d = (0, s.getAssetTokenQuery)();
        return (0, n.jsx)(n.Fragment, {
            children: a.map(e => {
                let a = `${t.assetPrefix}/_next/${(0,i.encodeURIPath)(e)}${d}`;
                return e.endsWith(".css") ? (0, n.jsx)("link", {
                    precedence: "dynamic",
                    href: a,
                    rel: "stylesheet",
                    as: "style",
                    nonce: t.nonce
                }, e) : ((0, o.preload)(a, {
                    as: "script",
                    fetchPriority: "low",
                    nonce: t.nonce
                }), null)
            })
        })
    }
}, 416438, e => {
    "use strict";
    var t = e.i(27666),
        a = e.i(467211),
        n = e.i(964059),
        o = e.i(823512),
        r = e.i(726103),
        i = e.i(185559),
        s = e.i(42246),
        l = e.i(409781),
        d = e.i(803258),
        g = e.i(679933),
        u = e.i(429305),
        m = e.i(402801),
        c = e.i(147333);
    let p = (0, l.createContext)(null),
        h = (0, l.forwardRef)(function(e, t) {
            let n = function(e) {
                    let {
                        allowsMultipleExpanded: t = !1,
                        isDisabled: a = !1
                    } = e, [n, o] = (0, d.useControlledState)((0, l.useMemo)(() => e.expandedKeys ? new Set(e.expandedKeys) : void 0, [e.expandedKeys]), (0, l.useMemo)(() => e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : new Set, [e.defaultExpandedKeys]), e.onExpandedChange);
                    return (0, l.useEffect)(() => {
                        if (!t && n.size > 1) {
                            let e = n.values().next().value;
                            null != e && o(new Set([e]))
                        }
                    }), {
                        allowsMultipleExpanded: t,
                        isDisabled: a,
                        expandedKeys: n,
                        setExpandedKeys: o,
                        toggleKey(e) {
                            let a;
                            t ? (a = new Set(n)).has(e) ? a.delete(e) : a.add(e) : a = new Set(n.has(e) ? [] : [e]), o(a)
                        }
                    }
                }(e),
                o = (0, a.useRenderProps)({
                    ...e,
                    defaultClassName: "react-aria-DisclosureGroup",
                    values: {
                        isDisabled: n.isDisabled,
                        state: n
                    }
                }),
                r = (0, g.filterDOMProps)(e, {
                    global: !0
                });
            return l.default.createElement(a.dom.div, {
                ...r,
                ...o,
                ref: t,
                "data-disabled": e.isDisabled || void 0
            }, l.default.createElement(p.Provider, {
                value: n
            }, o.children))
        }),
        f = (0, l.createContext)(null),
        b = (0, l.createContext)(null),
        y = (0, l.createContext)(null),
        v = (0, l.forwardRef)(function(e, m) {
            [e, m] = (0, a.useContextProps)(e, m, f);
            let h = (0, l.useContext)(p),
                {
                    id: v,
                    ...x
                } = e,
                w = (0, o.useId)();
            v ||= w;
            let k = h ? h.expandedKeys.has(v) : e.isExpanded,
                S = function(e) {
                    let [t, a] = (0, d.useControlledState)(e.isExpanded, e.defaultExpanded || !1, e.onExpandedChange), n = (0, l.useCallback)(() => {
                        a(!0)
                    }, [a]), o = (0, l.useCallback)(() => {
                        a(!1)
                    }, [a]), r = (0, l.useCallback)(() => {
                        a(!t)
                    }, [a, t]);
                    return {
                        isExpanded: t,
                        setExpanded: a,
                        expand: n,
                        collapse: o,
                        toggle: r
                    }
                }({
                    ...e,
                    isExpanded: k,
                    onExpandedChange(t) {
                        h && h.toggleKey(v), e.onExpandedChange?.(t)
                    }
                }),
                E = l.default.useRef(null),
                P = e.isDisabled || h?.isDisabled || !1,
                {
                    buttonProps: M,
                    panelProps: C
                } = function(e, t, a) {
                    let {
                        isDisabled: d
                    } = e, g = (0, o.useId)(), u = (0, o.useId)(), m = (0, r.useIsSSR)(), c = (0, l.useRef)(null), p = (0, l.useCallback)(() => {
                        c.current = requestAnimationFrame(() => {
                            a.current && a.current.setAttribute("hidden", "until-found")
                        }), (0, s.flushSync)(() => {
                            t.toggle()
                        })
                    }, [a, t]);
                    (0, n.useEvent)(a, "beforematch", p);
                    let h = (0, l.useRef)(null);
                    return (0, i.useLayoutEffect)(() => {
                        if (c.current && cancelAnimationFrame(c.current), a.current && !m) {
                            let e = a.current;
                            null == h.current || "function" != typeof e.getAnimations ? t.isExpanded ? (e.removeAttribute("hidden"), e.style.setProperty("--disclosure-panel-width", "auto"), e.style.setProperty("--disclosure-panel-height", "auto")) : (e.setAttribute("hidden", "until-found"), e.style.setProperty("--disclosure-panel-width", "0px"), e.style.setProperty("--disclosure-panel-height", "0px")) : t.isExpanded !== h.current && (t.isExpanded ? (e.removeAttribute("hidden"), e.style.setProperty("--disclosure-panel-width", e.scrollWidth + "px"), e.style.setProperty("--disclosure-panel-height", e.scrollHeight + "px"), Promise.all(e.getAnimations().map(e => e.finished)).then(() => {
                                e.style.setProperty("--disclosure-panel-width", "auto"), e.style.setProperty("--disclosure-panel-height", "auto")
                            }).catch(() => {})) : (e.style.setProperty("--disclosure-panel-width", e.scrollWidth + "px"), e.style.setProperty("--disclosure-panel-height", e.scrollHeight + "px"), window.getComputedStyle(e).height, e.style.setProperty("--disclosure-panel-width", "0px"), e.style.setProperty("--disclosure-panel-height", "0px"), Promise.all(e.getAnimations().map(e => e.finished)).then(() => e.setAttribute("hidden", "until-found")).catch(() => {}))), h.current = t.isExpanded
                        }
                    }, [d, a, t.isExpanded, m]), (0, l.useEffect)(() => () => {
                        c.current && cancelAnimationFrame(c.current)
                    }, []), {
                        buttonProps: {
                            id: g,
                            "aria-expanded": t.isExpanded,
                            "aria-controls": u,
                            onPress: e => {
                                d || "keyboard" === e.pointerType || t.toggle()
                            },
                            isDisabled: d,
                            onPressStart(e) {
                                "keyboard" !== e.pointerType || d || t.toggle()
                            }
                        },
                        panelProps: {
                            id: u,
                            role: "group",
                            "aria-labelledby": g,
                            "aria-hidden": !t.isExpanded,
                            hidden: m ? !t.isExpanded : void 0
                        }
                    }
                }({
                    ...e,
                    isExpanded: k,
                    isDisabled: P
                }, S, E),
                {
                    isFocusVisible: A,
                    focusProps: O
                } = (0, c.useFocusRing)({
                    within: !0
                }),
                F = (0, a.useRenderProps)({
                    ...e,
                    id: void 0,
                    defaultClassName: "react-aria-Disclosure",
                    values: {
                        isExpanded: S.isExpanded,
                        isDisabled: P,
                        isFocusVisibleWithin: A,
                        state: S
                    }
                }),
                j = (0, g.filterDOMProps)(x, {
                    global: !0
                });
            return l.default.createElement(a.Provider, {
                values: [
                    [t.ButtonContext, {
                        slots: {
                            [a.DEFAULT_SLOT]: {},
                            trigger: M
                        }
                    }],
                    [y, {
                        panelProps: C,
                        panelRef: E
                    }],
                    [b, S]
                ]
            }, l.default.createElement(a.dom.div, {
                ...(0, u.mergeProps)(j, F, O),
                ref: m,
                "data-expanded": S.isExpanded || void 0,
                "data-disabled": P || void 0,
                "data-focus-visible-within": A || void 0
            }, F.children))
        }),
        x = (0, l.forwardRef)(function(e, n) {
            let {
                role: o = "group"
            } = e, {
                panelProps: r,
                panelRef: i
            } = (0, l.useContext)(y), {
                isFocusVisible: s,
                focusProps: d
            } = (0, c.useFocusRing)({
                within: !0
            }), p = (0, a.useRenderProps)({
                ...e,
                defaultClassName: "react-aria-DisclosurePanel",
                values: {
                    isFocusVisibleWithin: s
                }
            }), h = (0, g.filterDOMProps)(e, {
                global: !0,
                labelable: !0
            });
            return l.default.createElement(a.dom.div, {
                ...(0, u.mergeProps)(h, p, r, d),
                ref: (0, m.mergeRefs)(n, i),
                role: o,
                "data-focus-visible-within": s || void 0
            }, l.default.createElement(a.Provider, {
                values: [
                    [t.ButtonContext, null]
                ]
            }, e.children))
        });
    e.s(["Disclosure", 0, v, "DisclosureGroup", 0, h, "DisclosurePanel", 0, x], 416438)
}, 825585, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(163165),
        n = e.i(94918);
    e.s(["default", 0, e => {
        let {
            target: o = "_self",
            children: r,
            variant: i = "primary",
            href: s,
            icon: l,
            iconDirection: d = "right",
            size: g = "md",
            disabled: u,
            disableAnimation: m = !1,
            onClick: c,
            type: p = "button",
            ariaLabel: h,
            decorative: f,
            role: b,
            className: y,
            id: v,
            tabIndex: x,
            "aria-expanded": w,
            "aria-controls": k,
            "data-link-location": S,
            "data-link-id": E
        } = e, P = l ?? null, M = !!P, C = h ?? (r ? void 0 : M ? `${i} button with icon` : `${i} button`), A = {
            iconLeft: "left" === d ? P ?? void 0 : void 0,
            iconRight: "right" === d ? P ?? void 0 : void 0
        }, O = {
            ...S && {
                "data-link-location": S
            },
            ...E && {
                "data-link-id": E
            }
        };
        return f ? (0, t.jsx)(a.Button, {
            decorative: !0,
            variant: i,
            size: g,
            ...A,
            disableAnimation: m || u,
            className: y,
            role: b,
            id: v,
            tabIndex: x,
            "aria-expanded": w,
            "aria-controls": k,
            ...h && {
                "aria-label": h
            },
            onClick: c,
            ...O,
            children: r
        }) : s ? (0, t.jsx)(a.Button, {
            variant: i,
            size: g,
            ...A,
            disableAnimation: m || u,
            href: s,
            target: o,
            isDisabled: u,
            onPress: c,
            ...C && {
                "aria-label": C
            },
            className: y,
            render: e => (0, t.jsx)(n.Link, {
                ...e,
                href: s,
                role: "button",
                id: v,
                tabIndex: x,
                "aria-expanded": w,
                "aria-controls": k,
                ...O
            }),
            children: r
        }) : (0, t.jsx)(a.Button, {
            variant: i,
            size: g,
            ...A,
            disableAnimation: m,
            isDisabled: u,
            type: p,
            onPress: c,
            id: v,
            "aria-expanded": w,
            "aria-controls": k,
            excludeFromTabOrder: -1 === x || void 0,
            ...C && {
                "aria-label": C
            },
            className: y,
            ...O,
            "data-sentry-element": "MangoButton",
            "data-sentry-component": "Button",
            "data-sentry-source-file": "Button.tsx",
            children: r
        })
    }])
}, 78070, e => {
    "use strict";
    let t = e.i(825585).default;
    e.s(["default", 0, t])
}, 544789, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(722978);
    let n = {
        default: {
            accent: "rgb(0 0 0)",
            accentDark: "rgb(255 255 255)",
            background: "rgb(245 245 245)",
            backgroundDark: "rgb(38 38 38)"
        },
        red: {
            accent: "rgb(255 84 73)",
            accentDark: "rgb(255 84 73)",
            background: "rgb(245 245 245)",
            backgroundDark: "rgb(38 38 38)"
        },
        blue: {
            accent: "rgb(58 91 199)",
            accentDark: "rgb(58 91 199)",
            background: "rgb(245 245 245)",
            backgroundDark: "rgb(38 38 38)"
        },
        yellow: {
            accent: "rgb(255 176 23)",
            accentDark: "rgb(255 176 23)",
            background: "rgb(245 245 245)",
            backgroundDark: "rgb(38 38 38)"
        }
    };
    e.s(["default", 0, ({
        className: e,
        variant: o = "default",
        children: r
    }) => {
        let i = n[o],
            s = (0, a.default)("relative mango-text-caption-md rounded-lg px-2 py-1 uppercase animated-border", "text-black dark:text-white", e);
        return (0, t.jsxs)("div", {
            "aria-label": r,
            style: {
                "--color-accent": i.accent,
                "--color-background": i.background,
                "--color-accent-dark": i.accentDark,
                "--color-background-dark": i.backgroundDark
            },
            className: s,
            "data-sentry-component": "Tag",
            "data-sentry-source-file": "Tag.tsx",
            children: [(0, t.jsx)("span", {
                className: "animated-border-glow"
            }), (0, t.jsx)("span", {
                className: "animated-border-background"
            }), (0, t.jsx)("span", {
                className: "animated-border-text",
                children: r
            })]
        })
    }], 544789)
}, 94918, e => {
    "use strict";
    var t = e.i(603500),
        a = e.i(847764);
    let n = ["en", "fr", "es", "de", "pt", "ru", "cn", "ja", "kr", "vn"],
        {
            Link: o,
            redirect: r,
            usePathname: i,
            useRouter: s
        } = (0, t.createNavigation)({
            locales: n,
            localePrefix: "as-needed",
            defaultLocale: "en"
        }),
        l = (0, a.withProtocolRelativeHrefs)(o);
    e.s(["Link", 0, l, "locales", 0, n, "redirect", 0, r, "usePathname", 0, i, "useRouter", 0, s])
}, 544842, 557749, e => {
    "use strict";
    var t = e.i(837826),
        a = e.i(857080);
    let n = (0, t.tv)({
        slots: {
            popover: [(0, a.overlayStyles)(), ...a.positionedOverlayTransition, "mango:min-w-(--trigger-width) mango:overflow-auto mango:p-2"],
            listBox: "mango:box-border mango:max-h-[inherit] mango:outline-hidden",
            item: ["mango:group/item mango:flex mango:cursor-pointer mango:items-center mango:gap-2", "mango:box-border mango:rounded-full mango:px-4 mango:py-2", "mango:text-body-sm mango:text-black mango:dark:text-white", "mango:outline-hidden", "mango:data-[focused]:bg-gray-100 mango:dark:data-[focused]:bg-gray-700", "mango:data-[disabled]:cursor-not-allowed mango:data-[disabled]:text-gray-400", "mango:dark:data-[disabled]:text-gray-600"],
            itemLabel: "mango:flex-1 mango:truncate mango:group-data-[selected]/item:font-semibold",
            itemCheck: "mango:flex mango:shrink-0",
            caret: ["mango:shrink-0 mango:origin-center", "mango:transition-transform mango:duration-300 mango:ease-standard mango:motion-reduce:transition-none", "mango:group-data-[open]/field:rotate-180", "mango:group-data-[disabled]/field:text-gray-400 mango:dark:group-data-[disabled]/field:text-gray-600"],
            caretButton: ["mango:m-0 mango:flex mango:shrink-0 mango:cursor-pointer mango:appearance-none", "mango:border-0 mango:bg-transparent mango:p-0 mango:outline-hidden", "mango:font-sans mango:text-black mango:dark:text-white", "mango:group-data-[disabled]/field:cursor-not-allowed"]
        }
    });
    e.s(["dropdownStyles", 0, n], 544842);
    let o = (0, t.tv)({
        slots: {
            trigger: "mango:cursor-pointer",
            value: ["mango:min-w-0 mango:flex-1 mango:truncate mango:text-start mango:font-sans", "mango:text-black mango:dark:text-white", "mango:data-[placeholder]:text-gray-600 mango:dark:data-[placeholder]:text-gray-400", "mango:group-data-[disabled]/field:text-gray-400 mango:dark:group-data-[disabled]/field:text-gray-600"]
        },
        variants: {
            size: {
                xs: {
                    value: "mango:text-body-xs"
                },
                sm: {
                    value: "mango:text-body-xs"
                },
                md: {
                    value: "mango:text-body-sm"
                },
                lg: {
                    value: "mango:text-body-base"
                }
            }
        },
        defaultVariants: {
            size: "md"
        }
    });
    e.s(["selectStyles", 0, o], 557749)
}, 65583, e => {
    "use strict";
    var t = e.i(837826);
    let a = (0, t.tv)({
        slots: {
            root: "mango:group/field mango:flex mango:w-full mango:flex-col",
            label: ["mango:mb-[0.6875rem] mango:flex mango:items-center mango:justify-between mango:gap-4", "mango:text-body-sm mango:text-black mango:dark:text-white", "mango:group-data-[disabled]/field:text-gray-400 mango:dark:group-data-[disabled]/field:text-gray-600"],
            labelText: "mango:min-w-0",
            necessity: ["mango:shrink-0 mango:text-gray-600 mango:dark:text-gray-400", "mango:group-data-[disabled]/field:text-gray-400 mango:dark:group-data-[disabled]/field:text-gray-600"],
            pill: ["mango:relative mango:box-border mango:flex mango:w-full mango:gap-3", "mango:border mango:bg-transparent", "mango:m-0 mango:appearance-none mango:text-start mango:font-sans", "mango:transition-colors mango:duration-300 mango:motion-reduce:transition-none", "mango:data-[disabled]:cursor-not-allowed", "mango:data-[disabled]:bg-gray-50 mango:dark:data-[disabled]:bg-gray-900", "mango:data-[disabled]:border-gray-200 mango:dark:data-[disabled]:border-gray-700", "mango:outline-hidden", "mango:data-[focus-visible]:before:pointer-events-none mango:data-[focus-visible]:before:absolute", "mango:data-[focus-visible]:before:box-border mango:data-[focus-visible]:before:-inset-1", "mango:data-[focus-visible]:before:border-2", "mango:data-[focus-visible]:before:border-blue-focus mango:data-[focus-visible]:before:content-['']"],
            input: ["mango:m-0 mango:w-full mango:min-w-0 mango:appearance-none mango:border-0 mango:bg-transparent mango:p-0", "mango:outline-hidden mango:font-sans mango:text-black mango:dark:text-white", "mango:placeholder:text-gray-600 mango:dark:placeholder:text-gray-400", "mango:data-[disabled]:cursor-not-allowed", "mango:data-[disabled]:text-gray-400 mango:dark:data-[disabled]:text-gray-600", "mango:data-[disabled]:placeholder:text-gray-400 mango:dark:data-[disabled]:placeholder:text-gray-600"],
            supportRow: "mango:mt-[0.6875rem] mango:flex mango:items-start mango:justify-between mango:gap-4",
            support: ["mango:text-body-sm mango:flex mango:items-center mango:gap-1.5", "mango:group-data-[disabled]/field:text-gray-400 mango:dark:group-data-[disabled]/field:text-gray-600"],
            icon: ["mango:flex mango:shrink-0", "mango:group-data-[disabled]/field:text-gray-400 mango:dark:group-data-[disabled]/field:text-gray-600"],
            resizeHandle: ["mango:pointer-events-none mango:absolute mango:right-2 mango:bottom-2 mango:size-3.5", "mango:text-black mango:dark:text-white", "mango:group-data-[disabled]/field:text-gray-400 mango:dark:group-data-[disabled]/field:text-gray-600"],
            counter: ["mango:text-body-sm mango:shrink-0 mango:text-gray-600 mango:dark:text-gray-400", "mango:group-data-[disabled]/field:text-gray-400 mango:dark:group-data-[disabled]/field:text-gray-600"]
        },
        variants: {
            size: {
                xs: {
                    pill: "mango:p-3",
                    input: "mango:text-body-xs"
                },
                sm: {
                    pill: "mango:p-3",
                    input: "mango:text-body-xs"
                },
                md: {
                    pill: "mango:p-4",
                    input: "mango:text-body-sm"
                },
                lg: {
                    pill: "mango:px-5 mango:py-4",
                    input: "mango:text-body-base"
                }
            },
            multiline: {
                true: {
                    pill: "mango:items-start mango:rounded-md mango:data-[focus-visible]:before:rounded-md",
                    input: "mango:min-h-24"
                },
                false: {
                    pill: "mango:items-center mango:rounded-full mango:data-[focus-visible]:before:rounded-full"
                }
            },
            resizable: {
                true: {
                    input: "mango:resize-y mango:resizer-blank"
                },
                false: {
                    input: "mango:resize-none"
                }
            },
            validationState: {
                default: {
                    pill: ["mango:border-gray-200 mango:dark:border-gray-700", "mango:data-[hovered]:border-gray-300 mango:dark:data-[hovered]:border-gray-600", "mango:data-[focus-within]:border-blue-500 mango:dark:data-[focus-within]:border-blue-500", "mango:data-[focused]:border-blue-500 mango:dark:data-[focused]:border-blue-500", "mango:group-data-[open]/field:border-blue-500", "mango:dark:group-data-[open]/field:border-blue-500", "mango:data-[hovered]:data-[focus-within]:border-blue-500", "mango:dark:data-[hovered]:data-[focus-within]:border-blue-500", "mango:data-[hovered]:data-[focused]:border-blue-500", "mango:dark:data-[hovered]:data-[focused]:border-blue-500", "mango:group-data-[open]/field:data-[hovered]:border-blue-500", "mango:dark:group-data-[open]/field:data-[hovered]:border-blue-500"],
                    icon: "mango:text-gray-700 mango:dark:text-gray-300",
                    support: "mango:text-gray-600 mango:dark:text-gray-400"
                },
                warning: {
                    pill: "mango:border-warning",
                    icon: "mango:text-warning",
                    support: "mango:text-warning"
                },
                error: {
                    pill: "mango:border-error",
                    icon: "mango:text-error",
                    support: "mango:text-error"
                },
                success: {
                    pill: "mango:border-success",
                    icon: "mango:text-success",
                    support: "mango:text-success"
                }
            }
        },
        defaultVariants: {
            size: "md",
            validationState: "default",
            multiline: !1,
            resizable: !1
        }
    });
    (0, t.tv)({
        base: ["mango:-ml-1 mango:flex mango:shrink-0 mango:items-center mango:gap-1 mango:whitespace-nowrap", "mango:box-border mango:rounded-full mango:px-2 mango:py-1", "mango:font-sans mango:text-black mango:dark:text-white", "mango:group-data-[disabled]/field:text-gray-400 mango:dark:group-data-[disabled]/field:text-gray-600", "mango:data-[disabled]:text-gray-400 mango:dark:data-[disabled]:text-gray-600"],
        variants: {
            size: {
                xs: "mango:text-body-xs",
                sm: "mango:text-body-xs",
                md: "mango:text-body-sm",
                lg: "mango:text-body-base"
            },
            isInteractive: {
                true: ["mango:m-0 mango:-ml-1 mango:cursor-pointer mango:appearance-none mango:border-0 mango:bg-transparent", "mango:outline-hidden mango:transition-colors mango:duration-300 mango:motion-reduce:transition-none", "mango:data-[hovered]:bg-gray-100 mango:dark:data-[hovered]:bg-gray-800", "mango:data-[pressed]:bg-gray-200 mango:dark:data-[pressed]:bg-gray-700", "mango:data-[disabled]:cursor-not-allowed mango:data-[disabled]:bg-transparent"],
                false: ""
            }
        },
        defaultVariants: {
            size: "md",
            isInteractive: !1
        }
    }), e.s(["fieldStyles", 0, a])
}, 434802, e => {
    "use strict";
    var t = e.i(837826);
    let a = ["mango:outline-none", "mango:data-[focus-visible]:outline-2 mango:data-[focus-visible]:outline-solid mango:data-[focus-visible]:-outline-offset-2 mango:data-[focus-visible]:outline-blue-focus"],
        n = (0, t.tv)({
            slots: {
                root: "mango:sticky mango:inset-x-0 mango:top-0 mango:z-50 mango:flex mango:h-16 mango:items-center mango:bg-black mango:lg:h-12",
                container: "mango:container-xl mango:flex mango:h-full mango:items-center mango:justify-between mango:px-6",
                start: "mango:flex mango:items-center mango:gap-9",
                end: "mango:flex mango:items-center mango:gap-3",
                logo: ["mango:-m-2 mango:inline-block mango:rounded-sm mango:p-2 mango:transition-opacity mango:ease-standard mango:motion-reduce:transition-none mango:data-[hovered]:opacity-80", ...a],
                scrim: "mango:fixed mango:inset-x-0 mango:top-12 mango:bottom-0 mango:z-10 mango:hidden mango:bg-black/10 mango:lg:block",
                desktop: "mango:hidden mango:lg:block",
                triggers: "mango:m-0 mango:flex mango:list-none mango:p-0",
                trigger: ["mango:text-heading-5xs mango:block mango:rounded-xl mango:px-3 mango:py-2 mango:text-white mango:no-underline mango:data-[hovered]:bg-gray-950 mango:aria-expanded:bg-gray-950", ...a],
                shell: ["mango:absolute mango:inset-x-0 mango:top-full mango:z-40 mango:grid mango:w-full mango:overflow-hidden mango:rounded-b-2xl mango:px-18.5 mango:shadow-2xl mango:backdrop-blur-[24px]", "mango:bg-[linear-gradient(0deg,rgba(38,38,38,0.8)_-53.45%,rgba(0,0,0,0.8)_91.71%)]", "mango:transition-[grid-template-rows,min-height,padding,opacity] mango:duration-300 mango:ease-standard mango:motion-reduce:transition-none"],
                shellInner: "mango:relative mango:min-h-0 mango:w-full",
                panel: "mango:w-full mango:transition-[opacity,translate] mango:ease-standard mango:motion-reduce:transition-none",
                mobile: "mango:lg:hidden",
                drawer: "mango:absolute mango:top-full mango:left-0 mango:h-[calc(100svh-4rem)] mango:w-full mango:overflow-y-auto mango:bg-black mango:transition-[opacity,translate,visibility] mango:duration-350 mango:ease-standard mango:motion-reduce:transition-none",
                mobileList: "mango:mt-10 mango:mb-5 mango:flex mango:flex-col mango:px-4",
                mobileItem: "mango:group/item mango:relative mango:py-1.5",
                mobileTrigger: ["mango:group/trigger mango:relative mango:z-10 mango:flex mango:w-full mango:cursor-pointer mango:items-center mango:justify-between mango:rounded-xl mango:border-0 mango:bg-transparent mango:p-0 mango:text-left mango:text-white", ...a],
                mobileLink: ["mango:relative mango:z-10 mango:flex mango:w-full mango:items-center mango:rounded-xl mango:py-2.5 mango:text-white mango:no-underline", ...a],
                mobileTitle: "mango:text-heading-2xs mango:block mango:leading-none! mango:text-white",
                mobileTitleMotion: "mango:transition-[translate,scale] mango:duration-500 mango:ease-standard mango:motion-reduce:transition-none mango:group-aria-expanded/trigger:translate-x-6 mango:group-aria-expanded/trigger:translate-y-1.5 mango:group-aria-expanded/trigger:scale-120",
                mobileCaret: "mango:inline-block mango:transition-[translate,rotate] mango:duration-500 mango:ease-standard mango:motion-reduce:transition-none mango:group-aria-expanded/trigger:-translate-x-4 mango:group-aria-expanded/trigger:translate-y-1.5 mango:group-aria-expanded/trigger:rotate-90",
                mobileCaretButton: "mango:group-aria-expanded/trigger:bg-gray-800 mango:group-aria-expanded/trigger:btn-secondary-shadow-default-dark",
                mobilePanel: "mango:relative mango:z-10 mango:h-(--disclosure-panel-height) mango:-translate-y-2.5 mango:overflow-clip mango:transition-[height,translate] mango:duration-750 mango:ease-standard mango:motion-reduce:transition-none mango:group-data-[expanded]/item:translate-y-0",
                mobilePanelContent: "mango:px-4 mango:pt-12.5 mango:pb-5",
                mobileListing: "mango:mt-9 mango:w-full",
                mobileSlab: "mango:pointer-events-none mango:absolute mango:-top-1 mango:z-1 mango:h-[calc(100%+0.25rem)] mango:w-full mango:-translate-y-2.5 mango:rounded-2xl mango:bg-[#1b1b1b] mango:opacity-0 mango:shadow-[inset_0_1px_0_0_#424242] mango:transition-[opacity,translate] mango:duration-750 mango:ease-standard mango:motion-reduce:transition-none mango:group-data-[expanded]/item:translate-y-0 mango:group-data-[expanded]/item:opacity-100",
                mobileActions: "mango:mt-12 mango:flex mango:flex-col mango:gap-6"
            },
            variants: {
                open: {
                    true: {
                        shell: "mango:min-h-108 mango:grid-rows-[1fr] mango:py-10 mango:opacity-100",
                        drawer: "mango:visible mango:translate-y-0 mango:opacity-100"
                    },
                    false: {
                        shell: "mango:pointer-events-none mango:min-h-0 mango:grid-rows-[0fr] mango:py-0 mango:opacity-0",
                        drawer: "mango:invisible mango:translate-y-7.5 mango:opacity-0 mango:delay-[0s,350ms,0s]"
                    }
                },
                active: {
                    true: {
                        panel: "mango:relative mango:translate-y-0 mango:opacity-100 mango:delay-100 mango:duration-300"
                    },
                    false: {
                        panel: "mango:absolute mango:inset-x-0 mango:top-0 mango:-translate-y-2.5 mango:opacity-0 mango:delay-0 mango:duration-200"
                    }
                }
            },
            defaultVariants: {
                open: !1,
                active: !1
            }
        }),
        o = (0, t.tv)({
            slots: {
                menu: "mango:w-full",
                highlight: "mango:hidden mango:xl:col-span-3 mango:xl:block",
                section: "mango:flex mango:flex-col",
                sectionTitle: "mango:text-input mango:text-gray-400",
                sectionLinks: "mango:flex mango:w-full mango:flex-col",
                sectionActions: "mango:flex"
            },
            variants: {
                arrangement: {
                    desktop: {
                        menu: "mango:grid mango:grid-cols-12 mango:gap-6",
                        section: "mango:md:col-span-3",
                        sectionTitle: "mango:mb-6",
                        sectionLinks: "mango:gap-5",
                        sectionActions: "mango:mt-8 mango:flex-wrap mango:gap-2"
                    },
                    dropdown: {
                        menu: "mango:flex mango:flex-col mango:gap-4",
                        section: "mango:not-first:border-t mango:not-first:border-gray-700 mango:not-first:pt-3",
                        sectionTitle: "mango:mb-5",
                        sectionLinks: "mango:gap-1",
                        sectionActions: "mango:mt-3 mango:flex-wrap mango:gap-1"
                    },
                    mobile: {
                        menu: "mango:flex mango:flex-col mango:gap-9",
                        sectionTitle: "mango:mb-4 mango:border-b mango:border-gray-700 mango:pb-2",
                        sectionLinks: "mango:gap-3 mango:pb-4",
                        sectionActions: "mango:flex-col mango:gap-3"
                    }
                }
            },
            defaultVariants: {
                arrangement: "desktop"
            }
        }),
        r = (0, t.tv)({
            slots: {
                link: ["mango:group/link mango:flex mango:items-center mango:text-white mango:no-underline", ...a],
                icon: "mango:flex mango:shrink-0 mango:items-center mango:justify-center",
                body: "mango:flex mango:flex-1 mango:flex-col",
                title: "mango:text-white",
                external: "mango:shrink-0",
                description: "mango:text-body-xs mango:text-gray-400"
            },
            variants: {
                arrangement: {
                    desktop: {
                        link: "mango:gap-4 mango:rounded-lg mango:p-2 mango:transition-colors mango:duration-200 mango:ease-standard mango:motion-reduce:transition-none mango:data-[hovered]:bg-gray-700 mango:data-[focus-visible]:bg-gray-700",
                        icon: "mango:h-10.5 mango:w-10.25 mango:rounded-lg mango:bg-gray-800",
                        title: "mango:flex mango:items-baseline mango:gap-2",
                        external: "mango:self-center"
                    },
                    dropdown: {
                        link: "mango:gap-3 mango:rounded mango:p-1 mango:transition-colors mango:duration-200 mango:ease-standard mango:motion-reduce:transition-none mango:data-[hovered]:bg-gray-700 mango:data-[focus-visible]:bg-gray-700",
                        icon: "mango:h-10.5 mango:w-10.25 mango:rounded-lg mango:bg-gray-800 mango:text-gray-500 mango:transition-colors mango:duration-700 mango:ease-standard mango:motion-reduce:transition-none mango:group-data-[hovered]/link:text-white",
                        title: "mango:text-heading-5xs"
                    },
                    mobile: {
                        link: "mango:gap-3 mango:rounded-lg",
                        icon: "mango:size-10",
                        title: "mango:text-heading-3xs mango:flex mango:items-center mango:gap-2"
                    }
                },
                size: {
                    md: "",
                    lg: ""
                }
            },
            compoundVariants: [{
                arrangement: "desktop",
                size: "md",
                class: {
                    title: "mango:text-heading-5xs"
                }
            }, {
                arrangement: "desktop",
                size: "lg",
                class: {
                    title: "mango:text-heading-2xs"
                }
            }],
            defaultVariants: {
                arrangement: "desktop",
                size: "md"
            }
        }),
        i = (0, t.tv)({
            slots: {
                root: ["group/button mango:group/highlight mango:relative mango:block mango:h-80 mango:overflow-hidden mango:rounded-2xl mango:bg-black mango:p-5 mango:text-white mango:no-underline mango:shadow-[inset_0_1px_0_0_#424242]", ...a],
                media: "mango:absolute mango:inset-0 mango:transition-[scale] mango:duration-400 mango:ease-standard mango:motion-reduce:transition-none mango:group-data-[hovered]/highlight:scale-125",
                content: "mango:relative mango:flex mango:h-full mango:max-w-72 mango:flex-col mango:justify-between",
                copy: "mango:flex mango:flex-col mango:items-start",
                tag: "mango:mb-3",
                title: "mango:text-heading-xs mango:text-white",
                description: "mango:text-body-xs mango:mt-1 mango:text-gray-400",
                action: "mango:translate-y-[200%] mango:transition-[translate] mango:duration-400 mango:ease-standard mango:motion-reduce:transition-none mango:group-data-[focus-visible]/highlight:translate-y-0 mango:group-data-[hovered]/highlight:translate-y-0"
            }
        }),
        s = (0, t.tv)({
            base: ["mango:text-heading-5xs mango:flex mango:size-9 mango:cursor-pointer mango:items-center mango:justify-center mango:rounded-full mango:border mango:border-transparent mango:bg-transparent mango:p-0 mango:text-white", "mango:transition-colors mango:ease-standard mango:motion-reduce:transition-none mango:data-[hovered]:border-gray-700", "mango:outline-none mango:data-[focus-visible]:border-gray-700 mango:data-[focus-visible]:outline-2 mango:data-[focus-visible]:outline-offset-2 mango:data-[focus-visible]:outline-solid mango:data-[focus-visible]:outline-blue-focus"],
            variants: {
                isActive: {
                    true: "mango:border-gray-700"
                }
            },
            defaultVariants: {
                isActive: !1
            }
        }),
        l = (0, t.tv)({
            slots: {
                scrim: "mango:fixed mango:inset-0 mango:bg-black/20 mango:transition-opacity mango:duration-200 mango:ease-standard mango:motion-reduce:transition-none mango:starting:opacity-0",
                popover: "mango:group/popover",
                dialog: ["mango:fixed mango:top-16 mango:left-0 mango:flex mango:w-full mango:flex-col mango:gap-4 mango:overflow-hidden mango:rounded-b-2xl mango:p-3 mango:outline-hidden", "mango:bg-linear-to-t mango:from-[#262626] mango:to-black", "mango:lg:static mango:lg:w-80 mango:lg:rounded-2xl mango:lg:from-black/80 mango:lg:to-gray-900/80 mango:lg:backdrop-blur-[1.5rem]", "mango:transition-[opacity,translate] mango:duration-200 mango:ease-standard mango:motion-reduce:transition-none", "mango:group-data-[entering]/popover:translate-y-2.5 mango:group-data-[entering]/popover:opacity-0"]
            }
        }),
        d = (0, t.tv)({
            slots: {
                root: "mango:relative mango:h-47 mango:w-full mango:overflow-hidden mango:rounded-xl mango:p-3 mango:shadow-md",
                media: "mango:absolute mango:inset-0",
                scrim: "mango:absolute mango:inset-0 mango:bg-[linear-gradient(180deg,rgba(27,27,27,0.5)_8.12%,rgba(0,0,0,0.5)_59.95%)]",
                content: "mango:relative mango:flex mango:h-full mango:flex-col mango:justify-between",
                top: "mango:flex mango:items-start mango:justify-between",
                copy: "mango:flex mango:flex-col mango:gap-1",
                title: "mango:text-heading-xs mango:text-white",
                description: "mango:text-body-xs mango:text-gray-400"
            }
        });
    e.s(["headerDropdownStyles", 0, l, "headerHighlightStyles", 0, i, "headerIconButtonStyles", 0, s, "headerMenuLinkStyles", 0, r, "headerMenuStyles", 0, o, "headerStyles", 0, n, "headerUserSpotlightStyles", 0, d])
}, 571836, e => {
    "use strict";
    var t = e.i(409781);
    let a = (0, t.createContext)("desktop");
    e.s(["HeaderArrangementContext", 0, a, "useHeaderArrangement", 0, () => (0, t.useContext)(a)])
}, 857080, e => {
    "use strict";
    let t = (0, e.i(837826).tv)({
        base: ["mango:box-border mango:rounded-md mango:border", "mango:border-gray-200 mango:bg-white mango:shadow-lg", "mango:dark:border-gray-700 mango:dark:bg-gray-800"]
    });
    e.s(["overlayArrowRotation", 0, ["mango:block", "mango:group-data-[placement=bottom]/arrow:rotate-180", "mango:group-data-[placement=left]/arrow:-rotate-90", "mango:group-data-[placement=right]/arrow:rotate-90"], "overlayStyles", 0, t, "positionedOverlayTransition", 0, ["mango:transition-opacity mango:ease-standard mango:motion-reduce:transition-none", "mango:data-[entering]:opacity-0 mango:data-[entering]:duration-200", "mango:data-[exiting]:opacity-0 mango:data-[exiting]:duration-150"]])
}, 996068, e => {
    "use strict";
    var t = e.i(409781),
        a = e.i(785328);
    let n = (0, t.createContext)(void 0);
    e.s(["MangoThemeProvider", 0, function({
        theme: e,
        children: o
    }) {
        let r = (0, t.useContext)(n);
        return (0, a.jsx)(n.Provider, {
            value: "dark" === e ? "dark" : r,
            children: o
        })
    }, "useMangoTheme", 0, function() {
        return (0, t.useContext)(n)
    }])
}, 327306, e => {
    "use strict";
    var t = e.i(437062),
        a = e.i(409781);
    let n = new Map([
            ["bold", a.createElement(a.Fragment, null, a.createElement("path", {
                d: "M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"
            }))],
            ["duotone", a.createElement(a.Fragment, null, a.createElement("path", {
                d: "M176,128,96,208V48Z",
                opacity: "0.2"
            }), a.createElement("path", {
                d: "M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"
            }))],
            ["fill", a.createElement(a.Fragment, null, a.createElement("path", {
                d: "M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"
            }))],
            ["light", a.createElement(a.Fragment, null, a.createElement("path", {
                d: "M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"
            }))],
            ["regular", a.createElement(a.Fragment, null, a.createElement("path", {
                d: "M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"
            }))],
            ["thin", a.createElement(a.Fragment, null, a.createElement("path", {
                d: "M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"
            }))]
        ]),
        o = a.forwardRef((e, o) => a.createElement(t.w, {
            ref: o,
            ...e,
            weights: n
        }));
    o.displayName = "CaretRightIcon", e.s(["c", 0, o], 327306)
}, 909933, e => {
    "use strict";
    var t = e.i(437062),
        a = e.i(409781);
    let n = new Map([
            ["bold", a.createElement(a.Fragment, null, a.createElement("path", {
                d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"
            }))],
            ["duotone", a.createElement(a.Fragment, null, a.createElement("path", {
                d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
                opacity: "0.2"
            }), a.createElement("path", {
                d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
            }))],
            ["fill", a.createElement(a.Fragment, null, a.createElement("path", {
                d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
            }))],
            ["light", a.createElement(a.Fragment, null, a.createElement("path", {
                d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"
            }))],
            ["regular", a.createElement(a.Fragment, null, a.createElement("path", {
                d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
            }))],
            ["thin", a.createElement(a.Fragment, null, a.createElement("path", {
                d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"
            }))]
        ]),
        o = a.forwardRef((e, o) => a.createElement(t.w, {
            ref: o,
            ...e,
            weights: n
        }));
    o.displayName = "XIcon", e.s(["f", 0, o], 909933)
}, 796573, e => {
    "use strict";
    e.s(["default", 0, function() {
        for (var e, t, a = 0, n = "", o = arguments.length; a < o; a++)(e = arguments[a]) && (t = function e(t) {
            var a, n, o = "";
            if ("string" == typeof t || "number" == typeof t) o += t;
            else if ("object" == typeof t)
                if (Array.isArray(t)) {
                    var r = t.length;
                    for (a = 0; a < r; a++) t[a] && (n = e(t[a])) && (o && (o += " "), o += n)
                } else
                    for (n in t) t[n] && (o && (o += " "), o += n);
            return o
        }(e)) && (n && (n += " "), n += t);
        return n
    }])
}]);

//# debugId=ff7d341b-aaf1-26c6-7c14-d202c05e6ea6