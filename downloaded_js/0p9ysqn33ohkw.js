(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 877097, e => {
    "use strict";
    var t = e.i(200241),
        r = e.i(500783);
    e.s(["default", 0, function({
        locale: e,
        ...i
    }) {
        if (!e) throw Error(void 0);
        return (0, r.jsx)(t.IntlProvider, {
            locale: e,
            ...i
        })
    }])
}, 952409, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(3931);
    let i = (0, r.lazy)(() => e.A(661263));
    e.s(["default", 0, function(e) {
        return (0, t.jsx)(r.Suspense, {
            fallback: null,
            children: (0, t.jsx)(i, {
                ...e
            })
        })
    }])
}, 998003, e => {
    "use strict";
    let t;
    var r = e.i(500783),
        i = e.i(321950),
        n = e.i(433519),
        a = e.i(818897);
    e.i(788727);
    var o = function() {
            return null
        },
        s = e.i(785690),
        l = e.i(213278),
        u = e.i(664300),
        c = e.i(304780),
        d = class extends c.Subscribable {
            constructor(e = {}) {
                super(), this.config = e, this.#e = new Map
            }
            #e;
            build(e, t, r) {
                let i = t.queryKey,
                    n = t.queryHash ?? (0, s.hashQueryKeyByOptions)(i, t),
                    a = this.get(n);
                return a || (a = new l.Query({
                    client: e,
                    queryKey: i,
                    queryHash: n,
                    options: e.defaultQueryOptions(t),
                    state: r,
                    defaultOptions: e.getQueryDefaults(i)
                }), this.add(a)), a
            }
            add(e) {
                this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e), this.notify({
                    type: "added",
                    query: e
                }))
            }
            remove(e) {
                let t = this.#e.get(e.queryHash);
                t && (e.destroy(), t === e && this.#e.delete(e.queryHash), this.notify({
                    type: "removed",
                    query: e
                }))
            }
            clear() {
                u.notifyManager.batch(() => {
                    this.getAll().forEach(e => {
                        this.remove(e)
                    })
                })
            }
            get(e) {
                return this.#e.get(e)
            }
            getAll() {
                return [...this.#e.values()]
            }
            find(e) {
                let t = {
                    exact: !0,
                    ...e
                };
                return this.getAll().find(e => (0, s.matchQuery)(t, e))
            }
            findAll(e = {}) {
                let t = this.getAll();
                return Object.keys(e).length > 0 ? t.filter(t => (0, s.matchQuery)(e, t)) : t
            }
            notify(e) {
                u.notifyManager.batch(() => {
                    this.listeners.forEach(t => {
                        t(e)
                    })
                })
            }
            onFocus() {
                u.notifyManager.batch(() => {
                    this.getAll().forEach(e => {
                        e.onFocus()
                    })
                })
            }
            onOnline() {
                u.notifyManager.batch(() => {
                    this.getAll().forEach(e => {
                        e.onOnline()
                    })
                })
            }
        },
        h = e.i(343201),
        f = e.i(404348),
        p = class extends h.Removable {
            #t;
            #r;
            #i;
            #n;
            constructor(e) {
                super(), this.#t = e.client, this.mutationId = e.mutationId, this.#i = e.mutationCache, this.#r = [], this.state = e.state || {
                    context: void 0,
                    data: void 0,
                    error: null,
                    failureCount: 0,
                    failureReason: null,
                    isPaused: !1,
                    status: "idle",
                    variables: void 0,
                    submittedAt: 0
                }, this.setOptions(e.options), this.scheduleGc()
            }
            setOptions(e) {
                this.options = e, this.updateGcTime(this.options.gcTime)
            }
            get meta() {
                return this.options.meta
            }
            addObserver(e) {
                this.#r.includes(e) || (this.#r.push(e), this.clearGcTimeout(), this.#i.notify({
                    type: "observerAdded",
                    mutation: this,
                    observer: e
                }))
            }
            removeObserver(e) {
                this.#r = this.#r.filter(t => t !== e), this.scheduleGc(), this.#i.notify({
                    type: "observerRemoved",
                    mutation: this,
                    observer: e
                })
            }
            optionalRemove() {
                this.#r.length || ("pending" === this.state.status ? this.scheduleGc() : this.#i.remove(this))
            }
            continue () {
                return this.#n?.continue() ?? this.execute(this.state.variables)
            }
            async execute(e) {
                let t = () => {
                        this.#a({
                            type: "continue"
                        })
                    },
                    r = {
                        client: this.#t,
                        meta: this.options.meta,
                        mutationKey: this.options.mutationKey
                    };
                this.#n = (0, f.createRetryer)({
                    fn: () => this.options.mutationFn ? this.options.mutationFn(e, r) : Promise.reject(Error("No mutationFn found")),
                    onFail: (e, t) => {
                        this.#a({
                            type: "failed",
                            failureCount: e,
                            error: t
                        })
                    },
                    onPause: () => {
                        this.#a({
                            type: "pause"
                        })
                    },
                    onContinue: t,
                    retry: this.options.retry ?? 0,
                    retryDelay: this.options.retryDelay,
                    networkMode: this.options.networkMode,
                    canRun: () => this.#i.canRun(this)
                });
                let i = "pending" === this.state.status,
                    n = !this.#n.canStart();
                try {
                    if (i) t();
                    else {
                        this.#a({
                            type: "pending",
                            variables: e,
                            isPaused: n
                        }), this.#i.config.onMutate && await this.#i.config.onMutate(e, this, r);
                        let t = await this.options.onMutate?.(e, r);
                        t !== this.state.context && this.#a({
                            type: "pending",
                            context: t,
                            variables: e,
                            isPaused: n
                        })
                    }
                    let a = await this.#n.start();
                    return await this.#i.config.onSuccess?.(a, e, this.state.context, this, r), await this.options.onSuccess?.(a, e, this.state.context, r), await this.#i.config.onSettled?.(a, null, this.state.variables, this.state.context, this, r), await this.options.onSettled?.(a, null, e, this.state.context, r), this.#a({
                        type: "success",
                        data: a
                    }), a
                } catch (t) {
                    try {
                        await this.#i.config.onError?.(t, e, this.state.context, this, r)
                    } catch (e) {
                        Promise.reject(e)
                    }
                    try {
                        await this.options.onError?.(t, e, this.state.context, r)
                    } catch (e) {
                        Promise.reject(e)
                    }
                    try {
                        await this.#i.config.onSettled?.(void 0, t, this.state.variables, this.state.context, this, r)
                    } catch (e) {
                        Promise.reject(e)
                    }
                    try {
                        await this.options.onSettled?.(void 0, t, e, this.state.context, r)
                    } catch (e) {
                        Promise.reject(e)
                    }
                    throw this.#a({
                        type: "error",
                        error: t
                    }), t
                } finally {
                    this.#i.runNext(this)
                }
            }
            #a(e) {
                this.state = (t => {
                    switch (e.type) {
                        case "failed":
                            return {
                                ...t, failureCount: e.failureCount, failureReason: e.error
                            };
                        case "pause":
                            return {
                                ...t, isPaused: !0
                            };
                        case "continue":
                            return {
                                ...t, isPaused: !1
                            };
                        case "pending":
                            return {
                                ...t, context: e.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: e.isPaused, status: "pending", variables: e.variables, submittedAt: Date.now()
                            };
                        case "success":
                            return {
                                ...t, data: e.data, failureCount: 0, failureReason: null, error: null, status: "success", isPaused: !1
                            };
                        case "error":
                            return {
                                ...t, data: void 0, error: e.error, failureCount: t.failureCount + 1, failureReason: e.error, isPaused: !1, status: "error"
                            }
                    }
                })(this.state), u.notifyManager.batch(() => {
                    this.#r.forEach(t => {
                        t.onMutationUpdate(e)
                    }), this.#i.notify({
                        mutation: this,
                        type: "updated",
                        action: e
                    })
                })
            }
        },
        v = c,
        g = class extends v.Subscribable {
            constructor(e = {}) {
                super(), this.config = e, this.#o = new Set, this.#s = new Map, this.#l = 0
            }
            #o;
            #s;
            #l;
            build(e, t, r) {
                let i = new p({
                    client: e,
                    mutationCache: this,
                    mutationId: ++this.#l,
                    options: e.defaultMutationOptions(t),
                    state: r
                });
                return this.add(i), i
            }
            add(e) {
                this.#o.add(e);
                let t = m(e);
                if ("string" == typeof t) {
                    let r = this.#s.get(t);
                    r ? r.push(e) : this.#s.set(t, [e])
                }
                this.notify({
                    type: "added",
                    mutation: e
                })
            }
            remove(e) {
                if (this.#o.delete(e)) {
                    let t = m(e);
                    if ("string" == typeof t) {
                        let r = this.#s.get(t);
                        if (r)
                            if (r.length > 1) {
                                let t = r.indexOf(e); - 1 !== t && r.splice(t, 1)
                            } else r[0] === e && this.#s.delete(t)
                    }
                }
                this.notify({
                    type: "removed",
                    mutation: e
                })
            }
            canRun(e) {
                let t = m(e);
                if ("string" != typeof t) return !0;
                {
                    let r = this.#s.get(t),
                        i = r?.find(e => "pending" === e.state.status);
                    return !i || i === e
                }
            }
            runNext(e) {
                let t = m(e);
                if ("string" != typeof t) return Promise.resolve();
                {
                    let r = this.#s.get(t)?.find(t => t !== e && t.state.isPaused);
                    return r?.continue() ?? Promise.resolve()
                }
            }
            clear() {
                u.notifyManager.batch(() => {
                    this.#o.forEach(e => {
                        this.notify({
                            type: "removed",
                            mutation: e
                        })
                    }), this.#o.clear(), this.#s.clear()
                })
            }
            getAll() {
                return Array.from(this.#o)
            }
            find(e) {
                let t = {
                    exact: !0,
                    ...e
                };
                return this.getAll().find(e => (0, s.matchMutation)(t, e))
            }
            findAll(e = {}) {
                return this.getAll().filter(t => (0, s.matchMutation)(e, t))
            }
            notify(e) {
                u.notifyManager.batch(() => {
                    this.listeners.forEach(t => {
                        t(e)
                    })
                })
            }
            resumePausedMutations() {
                let e = this.getAll().filter(e => e.state.isPaused);
                return u.notifyManager.batch(() => Promise.all(e.map(e => e.continue().catch(s.noop))))
            }
        };

    function m(e) {
        return e.options.scope?.id
    }
    var y = e.i(758059),
        b = e.i(655100),
        x = class {
            #u;
            #i;
            #c;
            #d;
            #h;
            #f;
            #p;
            #v;
            constructor(e = {}) {
                this.#u = e.queryCache || new d, this.#i = e.mutationCache || new g, this.#c = e.defaultOptions || {}, this.#d = new Map, this.#h = new Map, this.#f = 0
            }
            mount() {
                this.#f++, 1 === this.#f && (this.#p = y.focusManager.subscribe(async e => {
                    e && (await this.resumePausedMutations(), this.#u.onFocus())
                }), this.#v = b.onlineManager.subscribe(async e => {
                    e && (await this.resumePausedMutations(), this.#u.onOnline())
                }))
            }
            unmount() {
                this.#f--, 0 === this.#f && (this.#p?.(), this.#p = void 0, this.#v?.(), this.#v = void 0)
            }
            isFetching(e) {
                return this.#u.findAll({
                    ...e,
                    fetchStatus: "fetching"
                }).length
            }
            isMutating(e) {
                return this.#i.findAll({
                    ...e,
                    status: "pending"
                }).length
            }
            getQueryData(e) {
                let t = this.defaultQueryOptions({
                    queryKey: e
                });
                return this.#u.get(t.queryHash)?.state.data
            }
            ensureQueryData(e) {
                let t = this.defaultQueryOptions(e),
                    r = this.#u.build(this, t),
                    i = r.state.data;
                return void 0 === i ? this.fetchQuery(e) : (e.revalidateIfStale && r.isStaleByTime((0, s.resolveStaleTime)(t.staleTime, r)) && this.prefetchQuery(t), Promise.resolve(i))
            }
            getQueriesData(e) {
                return this.#u.findAll(e).map(({
                    queryKey: e,
                    state: t
                }) => [e, t.data])
            }
            setQueryData(e, t, r) {
                let i = this.defaultQueryOptions({
                        queryKey: e
                    }),
                    n = this.#u.get(i.queryHash),
                    a = n?.state.data,
                    o = (0, s.functionalUpdate)(t, a);
                if (void 0 !== o) return this.#u.build(this, i).setData(o, {
                    ...r,
                    manual: !0
                })
            }
            setQueriesData(e, t, r) {
                return u.notifyManager.batch(() => this.#u.findAll(e).map(({
                    queryKey: e
                }) => [e, this.setQueryData(e, t, r)]))
            }
            getQueryState(e) {
                let t = this.defaultQueryOptions({
                    queryKey: e
                });
                return this.#u.get(t.queryHash)?.state
            }
            removeQueries(e) {
                let t = this.#u;
                u.notifyManager.batch(() => {
                    t.findAll(e).forEach(e => {
                        t.remove(e)
                    })
                })
            }
            resetQueries(e, t) {
                let r = this.#u;
                return u.notifyManager.batch(() => (r.findAll(e).forEach(e => {
                    e.reset()
                }), this.refetchQueries({
                    type: "active",
                    ...e
                }, t)))
            }
            cancelQueries(e, t = {}) {
                let r = {
                    revert: !0,
                    ...t
                };
                return Promise.all(u.notifyManager.batch(() => this.#u.findAll(e).map(e => e.cancel(r)))).then(s.noop).catch(s.noop)
            }
            invalidateQueries(e, t = {}) {
                return u.notifyManager.batch(() => (this.#u.findAll(e).forEach(e => {
                    e.invalidate()
                }), e?.refetchType === "none") ? Promise.resolve() : this.refetchQueries({
                    ...e,
                    type: e?.refetchType ?? e?.type ?? "active"
                }, t))
            }
            refetchQueries(e, t = {}) {
                let r = {
                    ...t,
                    cancelRefetch: t.cancelRefetch ?? !0
                };
                return Promise.all(u.notifyManager.batch(() => this.#u.findAll(e).filter(e => !e.isDisabled() && !e.isStatic()).map(e => {
                    let t = e.fetch(void 0, r);
                    return r.throwOnError || (t = t.catch(s.noop)), "paused" === e.state.fetchStatus ? Promise.resolve() : t
                }))).then(s.noop)
            }
            fetchQuery(e) {
                let t = this.defaultQueryOptions(e);
                void 0 === t.retry && (t.retry = !1);
                let r = this.#u.build(this, t);
                return r.isStaleByTime((0, s.resolveStaleTime)(t.staleTime, r)) ? r.fetch(t) : Promise.resolve(r.state.data)
            }
            prefetchQuery(e) {
                return this.fetchQuery(e).then(s.noop).catch(s.noop)
            }
            fetchInfiniteQuery(e) {
                return e._type = "infinite", this.fetchQuery(e)
            }
            prefetchInfiniteQuery(e) {
                return this.fetchInfiniteQuery(e).then(s.noop).catch(s.noop)
            }
            ensureInfiniteQueryData(e) {
                return e._type = "infinite", this.ensureQueryData(e)
            }
            resumePausedMutations() {
                return b.onlineManager.isOnline() ? this.#i.resumePausedMutations() : Promise.resolve()
            }
            getQueryCache() {
                return this.#u
            }
            getMutationCache() {
                return this.#i
            }
            getDefaultOptions() {
                return this.#c
            }
            setDefaultOptions(e) {
                this.#c = e
            }
            setQueryDefaults(e, t) {
                this.#d.set((0, s.hashKey)(e), {
                    queryKey: e,
                    defaultOptions: t
                })
            }
            getQueryDefaults(e) {
                let t = [...this.#d.values()],
                    r = {};
                return t.forEach(t => {
                    (0, s.partialMatchKey)(e, t.queryKey) && Object.assign(r, t.defaultOptions)
                }), r
            }
            setMutationDefaults(e, t) {
                this.#h.set((0, s.hashKey)(e), {
                    mutationKey: e,
                    defaultOptions: t
                })
            }
            getMutationDefaults(e) {
                let t = [...this.#h.values()],
                    r = {};
                return t.forEach(t => {
                    (0, s.partialMatchKey)(e, t.mutationKey) && Object.assign(r, t.defaultOptions)
                }), r
            }
            defaultQueryOptions(e) {
                if (e._defaulted) return e;
                let t = {
                    ...this.#c.queries,
                    ...this.getQueryDefaults(e.queryKey),
                    ...e,
                    _defaulted: !0
                };
                return t.queryHash || (t.queryHash = (0, s.hashQueryKeyByOptions)(t.queryKey, t)), void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode), void 0 === t.throwOnError && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === s.skipToken && (t.enabled = !1), t
            }
            defaultMutationOptions(e) {
                return e?._defaulted ? e : {
                    ...this.#c.mutations,
                    ...e?.mutationKey && this.getMutationDefaults(e.mutationKey),
                    ...e,
                    _defaulted: !0
                }
            }
            clear() {
                this.#u.clear(), this.#i.clear()
            }
        },
        w = e.i(317386),
        k = e.i(689326);

    function j() {
        return new x({
            defaultOptions: {
                queries: {
                    staleTime: 3e5
                },
                dehydrate: {
                    shouldDehydrateQuery: e => (0, w.defaultShouldDehydrateQuery)(e) || "pending" === e.state.status
                }
            }
        })
    }
    e.s(["default", 0, function({
        children: e
    }) {
        return (0, r.jsx)(i.GenesisSessionProvider, {
            children: (0, r.jsx)(n.CommerceContextProvider, {
                children: (0, r.jsxs)(a.QueryClientProvider, {
                    client: k.environmentManager.isServer() ? j() : (t || (t = j()), t),
                    children: [e, (0, r.jsx)(o, {})]
                })
            })
        })
    }], 998003)
}, 418704, (e, t, r) => {
    t.exports = {
        id: "google-analytics",
        description: "Install a Google Analytics tag on your website",
        website: "https://analytics.google.com/analytics/web/",
        scripts: [{
            url: "https://www.googletagmanager.com/gtag/js",
            params: ["id"],
            strategy: "worker",
            location: "head",
            action: "append"
        }, {
            code: "window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag('js',new Date());gtag('config','${args.id}')",
            strategy: "worker",
            location: "head",
            action: "append"
        }]
    }
}, 6154, (e, t, r) => {
    "use strict";

    function i(e, t, r = !1) {
        return t ? Object.keys(e).filter(e => r ? !t.includes(e) : t.includes(e)).reduce((t, r) => (t[r] = e[r], t), {}) : {}
    }

    function n(e, t, r, i) {
        let n = i && Object.keys(i).length > 0 ? new URL(Object.values(i)[0], e) : new URL(e);
        return t && r && t.forEach(e => {
            r[e] && n.searchParams.set(e, r[e])
        }), n.toString()
    }

    function a(e, t, r, i, a) {
        var o;
        if (!t) return `<${e}></${e}>`;
        let s = (null == (o = t.src) ? void 0 : o.url) ? Object.assign(Object.assign({}, t), {
                src: n(t.src.url, t.src.params, i, a)
            }) : t,
            l = Object.keys(Object.assign(Object.assign({}, s), r)).reduce((e, t) => {
                let i = null == r ? void 0 : r[t],
                    n = s[t],
                    a = null != i ? i : n,
                    o = !0 === a ? t : `${t}="${a}"`;
                return a ? e + ` ${o}` : e
            }, "");
        return `<${e}${l}></${e}>`
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.formatData = r.createHtml = r.formatUrl = void 0, r.formatUrl = n, r.createHtml = a, r.formatData = function(e, t) {
        var r, o, s, l, u;
        let c = i(t, null == (r = e.scripts) ? void 0 : r.reduce((e, t) => [...e, ...Array.isArray(t.params) ? t.params : []], [])),
            d = i(t, null == (s = null == (o = e.html) ? void 0 : o.attributes.src) ? void 0 : s.params),
            h = i(t, [null == (u = null == (l = e.html) ? void 0 : l.attributes.src) ? void 0 : u.slugParam]),
            f = i(t, [...Object.keys(c), ...Object.keys(d), ...Object.keys(h)], !0);
        return Object.assign(Object.assign({}, e), {
            html: e.html ? a(e.html.element, e.html.attributes, f, d, h) : null,
            scripts: e.scripts ? e.scripts.map(e => Object.assign(Object.assign({}, e), {
                url: n(e.url, e.params, c)
            })) : null
        })
    }
}, 880092, (e, t, r) => {
    "use strict";
    var i = e.e && e.e.__rest || function(e, t) {
            var r = {};
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
            return r
        },
        n = e.e && e.e.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.GoogleAnalytics = void 0;
    let a = n(e.r(418704)),
        o = e.r(6154);
    r.GoogleAnalytics = e => {
        var t = i(e, []);
        return (0, o.formatData)(a.default, t)
    }
}, 731292, (e, t, r) => {
    t.exports = {
        id: "google-maps-embed",
        description: "Embed a Google Maps embed on your webpage",
        website: "https://developers.google.com/maps/documentation/embed/get-started",
        html: {
            element: "iframe",
            attributes: {
                loading: "lazy",
                src: {
                    url: "https://www.google.com/maps/embed/v1/place",
                    slugParam: "mode",
                    params: ["key", "q", "center", "zoom", "maptype", "language", "region"]
                },
                referrerpolicy: "no-referrer-when-downgrade",
                frameborder: "0",
                style: "border:0",
                allowfullscreen: !0,
                width: null,
                height: null
            }
        }
    }
}, 490057, (e, t, r) => {
    "use strict";
    var i = e.e && e.e.__rest || function(e, t) {
            var r = {};
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
            return r
        },
        n = e.e && e.e.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.GoogleMapsEmbed = void 0;
    let a = n(e.r(731292)),
        o = e.r(6154);
    r.GoogleMapsEmbed = e => {
        var t = i(e, []);
        return (0, o.formatData)(a.default, t)
    }
}, 447716, (e, t, r) => {
    t.exports = {
        id: "youtube-embed",
        description: "Embed a YouTube embed on your webpage.",
        website: "https://github.com/paulirish/lite-youtube-embed",
        html: {
            element: "lite-youtube",
            attributes: {
                videoid: null,
                playlabel: null
            }
        },
        stylesheets: ["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],
        scripts: [{
            url: "https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js",
            strategy: "idle",
            location: "head",
            action: "append"
        }]
    }
}, 761564, (e, t, r) => {
    "use strict";
    var i = e.e && e.e.__rest || function(e, t) {
            var r = {};
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
            return r
        },
        n = e.e && e.e.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.YouTubeEmbed = void 0;
    let a = n(e.r(447716)),
        o = e.r(6154);
    r.YouTubeEmbed = e => {
        var t = i(e, []);
        return (0, o.formatData)(a.default, t)
    }
}, 634986, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.YouTubeEmbed = r.GoogleMapsEmbed = r.GoogleAnalytics = void 0;
    var i = e.r(880092);
    Object.defineProperty(r, "GoogleAnalytics", {
        enumerable: !0,
        get: function() {
            return i.GoogleAnalytics
        }
    });
    var n = e.r(490057);
    Object.defineProperty(r, "GoogleMapsEmbed", {
        enumerable: !0,
        get: function() {
            return n.GoogleMapsEmbed
        }
    });
    var a = e.r(761564);
    Object.defineProperty(r, "YouTubeEmbed", {
        enumerable: !0,
        get: function() {
            return a.YouTubeEmbed
        }
    })
}, 408651, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.default = function({
        html: e,
        height: t = null,
        width: r = null,
        children: a,
        dataNtpc: o = ""
    }) {
        return (0, n.useEffect)(() => {
            o && performance.mark("mark_feature_usage", {
                detail: {
                    feature: `next-third-parties-${o}`
                }
            })
        }, [o]), (0, i.jsxs)(i.Fragment, {
            children: [a, e ? (0, i.jsx)("div", {
                style: {
                    height: null != t ? `${t}px` : "auto",
                    width: null != r ? `${r}px` : "auto"
                },
                "data-ntpc": o,
                dangerouslySetInnerHTML: {
                    __html: e
                }
            }) : null]
        })
    };
    let i = e.r(500783),
        n = e.r(3931)
}, 819428, (e, t, r) => {
    "use strict";
    var i = e.e && e.e.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.default = function(e) {
        let {
            apiKey: t,
            ...r
        } = e, i = {
            ...r,
            key: t
        }, {
            html: s
        } = (0, a.GoogleMapsEmbed)(i);
        return (0, n.jsx)(o.default, {
            height: i.height || null,
            width: i.width || null,
            html: s,
            dataNtpc: "GoogleMapsEmbed"
        })
    };
    let n = e.r(500783),
        a = e.r(634986),
        o = i(e.r(408651))
}, 503316, (e, t, r) => {
    "use strict";
    var i = e.e && e.e.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.default = function(e) {
        let {
            html: t,
            scripts: r,
            stylesheets: i
        } = (0, o.YouTubeEmbed)(e);
        return (0, n.jsx)(s.default, {
            height: e.height || null,
            width: e.width || null,
            html: t,
            dataNtpc: "YouTubeEmbed",
            children: null == r ? void 0 : r.map(e => (0, n.jsx)(a.default, {
                src: e.url,
                strategy: l[e.strategy],
                stylesheets: i
            }, e.url))
        })
    };
    let n = e.r(500783),
        a = i(e.r(545935)),
        o = e.r(634986),
        s = i(e.r(408651)),
        l = {
            server: "beforeInteractive",
            client: "afterInteractive",
            idle: "lazyOnload",
            worker: "worker"
        }
}, 461334, (e, t, r) => {
    "use strict";
    var i = e.e && e.e.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.sendGTMEvent = void 0, r.GoogleTagManager = function(e) {
        let {
            gtmId: t,
            gtmScriptUrl: r,
            dataLayerName: i = "dataLayer",
            auth: l,
            preview: u,
            dataLayer: c,
            nonce: d
        } = e;
        s = i;
        let h = new URL(r || "https://www.googletagmanager.com/gtm.js");
        return t && h.searchParams.set("id", t), "dataLayer" !== i && h.searchParams.set("l", i), l && h.searchParams.set("gtm_auth", l), u && (h.searchParams.set("gtm_preview", u), h.searchParams.set("gtm_cookies_win", "x")), (0, a.useEffect)(() => {
            performance.mark("mark_feature_usage", {
                detail: {
                    feature: "next-third-parties-gtm"
                }
            })
        }, []), (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(o.default, {
                id: "_next-gtm-init",
                dangerouslySetInnerHTML: {
                    __html: `
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${c?`w[l].push(${JSON.stringify(c)})`:""}
      })(window,'${i}');`
                },
                nonce: d
            }), (0, n.jsx)(o.default, {
                id: "_next-gtm",
                "data-ntpc": "GTM",
                src: h.href,
                nonce: d
            })]
        })
    };
    let n = e.r(500783),
        a = e.r(3931),
        o = i(e.r(545935)),
        s = "dataLayer";
    r.sendGTMEvent = (e, t) => {
        let r = t || s;
        window[r] = window[r] || [], window[r].push(e)
    }
}, 175142, (e, t, r) => {
    "use strict";
    let i;
    var n = e.e && e.e.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.GoogleAnalytics = function(e) {
        let {
            gaId: t,
            debugMode: r,
            dataLayerName: n = "dataLayer",
            nonce: l
        } = e;
        return void 0 === i && (i = n), (0, o.useEffect)(() => {
            performance.mark("mark_feature_usage", {
                detail: {
                    feature: "next-third-parties-ga"
                }
            })
        }, []), (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(s.default, {
                id: "_next-ga-init",
                dangerouslySetInnerHTML: {
                    __html: `
          window['${n}'] = window['${n}'] || [];
          function gtag(){window['${n}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}' ${r?",{ 'debug_mode': true }":""});`
                },
                nonce: l
            }), (0, a.jsx)(s.default, {
                id: "_next-ga",
                src: `https://www.googletagmanager.com/gtag/js?id=${t}`,
                nonce: l
            })]
        })
    }, r.sendGAEvent = function() {
        void 0 === i ? console.warn("@next/third-parties: GA has not been initialized") : window[i] ? window[i].push(arguments) : console.warn(`@next/third-parties: GA dataLayer ${i} does not exist`)
    };
    let a = e.r(500783),
        o = e.r(3931),
        s = n(e.r(545935))
}, 649172, (e, t, r) => {
    "use strict";
    var i = e.e && e.e.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.sendGAEvent = r.GoogleAnalytics = r.sendGTMEvent = r.GoogleTagManager = r.YouTubeEmbed = r.GoogleMapsEmbed = void 0;
    var n = e.r(819428);
    Object.defineProperty(r, "GoogleMapsEmbed", {
        enumerable: !0,
        get: function() {
            return i(n).default
        }
    });
    var a = e.r(503316);
    Object.defineProperty(r, "YouTubeEmbed", {
        enumerable: !0,
        get: function() {
            return i(a).default
        }
    });
    var o = e.r(461334);
    Object.defineProperty(r, "GoogleTagManager", {
        enumerable: !0,
        get: function() {
            return o.GoogleTagManager
        }
    }), Object.defineProperty(r, "sendGTMEvent", {
        enumerable: !0,
        get: function() {
            return o.sendGTMEvent
        }
    });
    var s = e.r(175142);
    Object.defineProperty(r, "GoogleAnalytics", {
        enumerable: !0,
        get: function() {
            return s.GoogleAnalytics
        }
    }), Object.defineProperty(r, "sendGAEvent", {
        enumerable: !0,
        get: function() {
            return s.sendGAEvent
        }
    })
}, 959440, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(3931),
        i = e.i(545935),
        n = e.i(649172),
        a = e.i(740041),
        o = e.i(544923),
        s = e.i(233757);
    let l = "GTM-5V25JL6",
        u = "a9f5fcb3-4c7f-4bb7-93bf-7607ffbdabe0";
    e.s(["default", 0, function({
        locale: e
    }) {
        let [c] = (0, o.default)("location", "US"), [d] = (0, o.default)("currency", "USD"), [h, f] = (0, r.useState)(null), p = (0, r.useCallback)(() => {
            window.OneTrust && window.OneTrust.changeLanguage(a.oneTrustLocaleOverrides[e || "en"])
        }, [e]), v = (0, r.useCallback)(async () => {
            let e = sessionStorage.getItem("UNITY_SESSION"),
                t = "";
            if (e) t = JSON.parse(e)?.user;
            else try {
                let e = await (0, s.getUserFromGenesis)();
                t = e.users[0]?.userId
            } catch (e) {
                console.error("Error fetching user from Genesis:", e)
            }
            f({
                event: "dataLayer-initialized",
                user: {
                    user_unity_id: t,
                    user_logged_in: e ? "yes" : "no"
                },
                environment: {
                    environment_locale: c,
                    environment_currency: d
                }
            })
        }, [c, d]);
        return (0, r.useEffect)(() => {
            v()
        }, [v]), (0, r.useEffect)(() => {
            p()
        }, [p]), (0, t.jsxs)(t.Fragment, {
            children: [u && (0, t.jsx)(i.default, {
                src: "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js",
                charSet: "UTF-8",
                "data-domain-script": u,
                "data-dLayer-ignore": "true",
                strategy: "afterInteractive",
                "data-document-language": "true",
                onReady: p
            }), u && (0, t.jsx)(i.default, {
                id: "onetrust-optanon-wrapper",
                strategy: "afterInteractive",
                children: "function OptanonWrapper(){}"
            }), l && h && (0, t.jsx)(n.GoogleTagManager, {
                gtmId: l,
                dataLayer: h
            })]
        })
    }])
}, 484404, (e, t, r) => {
    ! function(e) {
        "use strict";
        var i = "function",
            n = "undefined",
            a = "object",
            o = "string",
            s = "model",
            l = "name",
            u = "type",
            c = "vendor",
            d = "version",
            h = "architecture",
            f = "console",
            p = "mobile",
            v = "tablet",
            g = "smarttv",
            m = "wearable",
            y = "embedded",
            b = "Amazon",
            x = "Apple",
            w = "ASUS",
            k = "BlackBerry",
            j = "Browser",
            S = "Chrome",
            _ = "Firefox",
            E = "Google",
            C = "Huawei",
            O = "Microsoft",
            P = "Motorola",
            N = "Opera",
            I = "Samsung",
            M = "Sharp",
            A = "Sony",
            T = "Xiaomi",
            L = "Zebra",
            U = "Facebook",
            R = function(e, t) {
                var r = {};
                for (var i in e) t[i] && t[i].length % 2 == 0 ? r[i] = t[i].concat(e[i]) : r[i] = e[i];
                return r
            },
            D = function(e) {
                for (var t = {}, r = 0; r < e.length; r++) t[e[r].toUpperCase()] = e[r];
                return t
            },
            F = function(e, t) {
                return typeof e === o && -1 !== q(t).indexOf(q(e))
            },
            q = function(e) {
                return e.toLowerCase()
            },
            V = function(e, t) {
                if (typeof e === o) return e = e.replace(/^\s\s*/, ""), typeof t === n ? e : e.substring(0, 350)
            },
            K = function(e, t) {
                for (var r, n, o, s, l, u, c = 0; c < t.length && !l;) {
                    var d = t[c],
                        h = t[c + 1];
                    for (r = n = 0; r < d.length && !l;)
                        if (l = d[r++].exec(e))
                            for (o = 0; o < h.length; o++) u = l[++n], typeof(s = h[o]) === a && s.length > 0 ? 2 === s.length ? typeof s[1] == i ? this[s[0]] = s[1].call(this, u) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== i || s[1].exec && s[1].test ? this[s[0]] = u ? u.replace(s[1], s[2]) : void 0 : this[s[0]] = u ? s[1].call(this, u, s[2]) : void 0 : 4 === s.length && (this[s[0]] = u ? s[3].call(this, u.replace(s[1], s[2])) : void 0) : this[s] = u || void 0;
                    c += 2
                }
            },
            $ = function(e, t) {
                for (var r in t)
                    if (typeof t[r] === a && t[r].length > 0) {
                        for (var i = 0; i < t[r].length; i++)
                            if (F(t[r][i], e)) return "?" === r ? void 0 : r
                    } else if (F(t[r], e)) return "?" === r ? void 0 : r;
                return e
            },
            z = {
                ME: "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                2e3: "NT 5.0",
                XP: ["NT 5.1", "NT 5.2"],
                Vista: "NT 6.0",
                7: "NT 6.1",
                8: "NT 6.2",
                8.1: "NT 6.3",
                10: ["NT 6.4", "NT 10.0"],
                RT: "ARM"
            },
            Q = {
                browser: [
                    [/\b(?:crmo|crios)\/([\w\.]+)/i],
                    [d, [l, "Chrome"]],
                    [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                    [d, [l, "Edge"]],
                    [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                    [l, d],
                    [/opios[\/ ]+([\w\.]+)/i],
                    [d, [l, N + " Mini"]],
                    [/\bopr\/([\w\.]+)/i],
                    [d, [l, N]],
                    [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                    [l, d],
                    [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                    [d, [l, "UC" + j]],
                    [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
                    [d, [l, "WeChat(Win) Desktop"]],
                    [/micromessenger\/([\w\.]+)/i],
                    [d, [l, "WeChat"]],
                    [/konqueror\/([\w\.]+)/i],
                    [d, [l, "Konqueror"]],
                    [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                    [d, [l, "IE"]],
                    [/yabrowser\/([\w\.]+)/i],
                    [d, [l, "Yandex"]],
                    [/(avast|avg)\/([\w\.]+)/i],
                    [
                        [l, /(.+)/, "$1 Secure " + j], d
                    ],
                    [/\bfocus\/([\w\.]+)/i],
                    [d, [l, _ + " Focus"]],
                    [/\bopt\/([\w\.]+)/i],
                    [d, [l, N + " Touch"]],
                    [/coc_coc\w+\/([\w\.]+)/i],
                    [d, [l, "Coc Coc"]],
                    [/dolfin\/([\w\.]+)/i],
                    [d, [l, "Dolphin"]],
                    [/coast\/([\w\.]+)/i],
                    [d, [l, N + " Coast"]],
                    [/miuibrowser\/([\w\.]+)/i],
                    [d, [l, "MIUI " + j]],
                    [/fxios\/([-\w\.]+)/i],
                    [d, [l, _]],
                    [/\bqihu|(qi?ho?o?|360)browser/i],
                    [
                        [l, "360 " + j]
                    ],
                    [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                    [
                        [l, /(.+)/, "$1 " + j], d
                    ],
                    [/(comodo_dragon)\/([\w\.]+)/i],
                    [
                        [l, /_/g, " "], d
                    ],
                    [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                    [l, d],
                    [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
                    [l],
                    [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                    [
                        [l, U], d
                    ],
                    [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                    [l, d],
                    [/\bgsa\/([\w\.]+) .*safari\//i],
                    [d, [l, "GSA"]],
                    [/headlesschrome(?:\/([\w\.]+)| )/i],
                    [d, [l, S + " Headless"]],
                    [/ wv\).+(chrome)\/([\w\.]+)/i],
                    [
                        [l, S + " WebView"], d
                    ],
                    [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                    [d, [l, "Android " + j]],
                    [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                    [l, d],
                    [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                    [d, [l, "Mobile Safari"]],
                    [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                    [d, l],
                    [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                    [l, [d, $, {
                        "1.0": "/8",
                        1.2: "/1",
                        1.3: "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                    }]],
                    [/(webkit|khtml)\/([\w\.]+)/i],
                    [l, d],
                    [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                    [
                        [l, "Netscape"], d
                    ],
                    [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                    [d, [l, _ + " Reality"]],
                    [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                    [l, d],
                    [/(cobalt)\/([\w\.]+)/i],
                    [l, [d, /master.|lts./, ""]]
                ],
                cpu: [
                    [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                    [
                        [h, "amd64"]
                    ],
                    [/(ia32(?=;))/i],
                    [
                        [h, q]
                    ],
                    [/((?:i[346]|x)86)[;\)]/i],
                    [
                        [h, "ia32"]
                    ],
                    [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                    [
                        [h, "arm64"]
                    ],
                    [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                    [
                        [h, "armhf"]
                    ],
                    [/windows (ce|mobile); ppc;/i],
                    [
                        [h, "arm"]
                    ],
                    [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                    [
                        [h, /ower/, "", q]
                    ],
                    [/(sun4\w)[;\)]/i],
                    [
                        [h, "sparc"]
                    ],
                    [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                    [
                        [h, q]
                    ]
                ],
                device: [
                    [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                    [s, [c, I],
                        [u, v]
                    ],
                    [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                    [s, [c, I],
                        [u, p]
                    ],
                    [/((ipod|iphone)\d+,\d+)/i],
                    [s, [c, x],
                        [u, p]
                    ],
                    [/(ipad\d+,\d+)/i],
                    [s, [c, x],
                        [u, v]
                    ],
                    [/\((ip(?:hone|od)[\w ]*);/i],
                    [s, [c, x],
                        [u, p]
                    ],
                    [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                    [s, [c, x],
                        [u, v]
                    ],
                    [/(macintosh);/i],
                    [s, [c, x]],
                    [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                    [s, [c, C],
                        [u, v]
                    ],
                    [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                    [s, [c, C],
                        [u, p]
                    ],
                    [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                    [
                        [s, /_/g, " "],
                        [c, T],
                        [u, p]
                    ],
                    [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                    [
                        [s, /_/g, " "],
                        [c, T],
                        [u, v]
                    ],
                    [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                    [s, [c, "OPPO"],
                        [u, p]
                    ],
                    [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                    [s, [c, "Vivo"],
                        [u, p]
                    ],
                    [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                    [s, [c, "Realme"],
                        [u, p]
                    ],
                    [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                    [s, [c, P],
                        [u, p]
                    ],
                    [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                    [s, [c, P],
                        [u, v]
                    ],
                    [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                    [s, [c, "LG"],
                        [u, v]
                    ],
                    [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                    [s, [c, "LG"],
                        [u, p]
                    ],
                    [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                    [s, [c, "Lenovo"],
                        [u, v]
                    ],
                    [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                    [
                        [s, /_/g, " "],
                        [c, "Nokia"],
                        [u, p]
                    ],
                    [/(pixel c)\b/i],
                    [s, [c, E],
                        [u, v]
                    ],
                    [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                    [s, [c, E],
                        [u, p]
                    ],
                    [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                    [s, [c, A],
                        [u, p]
                    ],
                    [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                    [
                        [s, "Xperia Tablet"],
                        [c, A],
                        [u, v]
                    ],
                    [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                    [s, [c, "OnePlus"],
                        [u, p]
                    ],
                    [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                    [s, [c, b],
                        [u, v]
                    ],
                    [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                    [
                        [s, /(.+)/g, "Fire Phone $1"],
                        [c, b],
                        [u, p]
                    ],
                    [/(playbook);[-\w\),; ]+(rim)/i],
                    [s, c, [u, v]],
                    [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                    [s, [c, k],
                        [u, p]
                    ],
                    [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                    [s, [c, w],
                        [u, v]
                    ],
                    [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                    [s, [c, w],
                        [u, p]
                    ],
                    [/(nexus 9)/i],
                    [s, [c, "HTC"],
                        [u, v]
                    ],
                    [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],
                    [c, [s, /_/g, " "],
                        [u, p]
                    ],
                    [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                    [s, [c, "Acer"],
                        [u, v]
                    ],
                    [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                    [s, [c, "Meizu"],
                        [u, p]
                    ],
                    [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                    [s, [c, M],
                        [u, p]
                    ],
                    [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                    [c, s, [u, p]],
                    [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                    [c, s, [u, v]],
                    [/(surface duo)/i],
                    [s, [c, O],
                        [u, v]
                    ],
                    [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                    [s, [c, "Fairphone"],
                        [u, p]
                    ],
                    [/(u304aa)/i],
                    [s, [c, "AT&T"],
                        [u, p]
                    ],
                    [/\bsie-(\w*)/i],
                    [s, [c, "Siemens"],
                        [u, p]
                    ],
                    [/\b(rct\w+) b/i],
                    [s, [c, "RCA"],
                        [u, v]
                    ],
                    [/\b(venue[\d ]{2,7}) b/i],
                    [s, [c, "Dell"],
                        [u, v]
                    ],
                    [/\b(q(?:mv|ta)\w+) b/i],
                    [s, [c, "Verizon"],
                        [u, v]
                    ],
                    [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                    [s, [c, "Barnes & Noble"],
                        [u, v]
                    ],
                    [/\b(tm\d{3}\w+) b/i],
                    [s, [c, "NuVision"],
                        [u, v]
                    ],
                    [/\b(k88) b/i],
                    [s, [c, "ZTE"],
                        [u, v]
                    ],
                    [/\b(nx\d{3}j) b/i],
                    [s, [c, "ZTE"],
                        [u, p]
                    ],
                    [/\b(gen\d{3}) b.+49h/i],
                    [s, [c, "Swiss"],
                        [u, p]
                    ],
                    [/\b(zur\d{3}) b/i],
                    [s, [c, "Swiss"],
                        [u, v]
                    ],
                    [/\b((zeki)?tb.*\b) b/i],
                    [s, [c, "Zeki"],
                        [u, v]
                    ],
                    [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                    [
                        [c, "Dragon Touch"], s, [u, v]
                    ],
                    [/\b(ns-?\w{0,9}) b/i],
                    [s, [c, "Insignia"],
                        [u, v]
                    ],
                    [/\b((nxa|next)-?\w{0,9}) b/i],
                    [s, [c, "NextBook"],
                        [u, v]
                    ],
                    [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                    [
                        [c, "Voice"], s, [u, p]
                    ],
                    [/\b(lvtel\-)?(v1[12]) b/i],
                    [
                        [c, "LvTel"], s, [u, p]
                    ],
                    [/\b(ph-1) /i],
                    [s, [c, "Essential"],
                        [u, p]
                    ],
                    [/\b(v(100md|700na|7011|917g).*\b) b/i],
                    [s, [c, "Envizen"],
                        [u, v]
                    ],
                    [/\b(trio[-\w\. ]+) b/i],
                    [s, [c, "MachSpeed"],
                        [u, v]
                    ],
                    [/\btu_(1491) b/i],
                    [s, [c, "Rotor"],
                        [u, v]
                    ],
                    [/(shield[\w ]+) b/i],
                    [s, [c, "Nvidia"],
                        [u, v]
                    ],
                    [/(sprint) (\w+)/i],
                    [c, s, [u, p]],
                    [/(kin\.[onetw]{3})/i],
                    [
                        [s, /\./g, " "],
                        [c, O],
                        [u, p]
                    ],
                    [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                    [s, [c, L],
                        [u, v]
                    ],
                    [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                    [s, [c, L],
                        [u, p]
                    ],
                    [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                    [c, s, [u, f]],
                    [/droid.+; (shield) bui/i],
                    [s, [c, "Nvidia"],
                        [u, f]
                    ],
                    [/(playstation [345portablevi]+)/i],
                    [s, [c, A],
                        [u, f]
                    ],
                    [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                    [s, [c, O],
                        [u, f]
                    ],
                    [/smart-tv.+(samsung)/i],
                    [c, [u, g]],
                    [/hbbtv.+maple;(\d+)/i],
                    [
                        [s, /^/, "SmartTV"],
                        [c, I],
                        [u, g]
                    ],
                    [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                    [
                        [c, "LG"],
                        [u, g]
                    ],
                    [/(apple) ?tv/i],
                    [c, [s, x + " TV"],
                        [u, g]
                    ],
                    [/crkey/i],
                    [
                        [s, S + "cast"],
                        [c, E],
                        [u, g]
                    ],
                    [/droid.+aft(\w)( bui|\))/i],
                    [s, [c, b],
                        [u, g]
                    ],
                    [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                    [s, [c, M],
                        [u, g]
                    ],
                    [/(bravia[\w ]+)( bui|\))/i],
                    [s, [c, A],
                        [u, g]
                    ],
                    [/(mitv-\w{5}) bui/i],
                    [s, [c, T],
                        [u, g]
                    ],
                    [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
                    [
                        [c, V],
                        [s, V],
                        [u, g]
                    ],
                    [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                    [
                        [u, g]
                    ],
                    [/((pebble))app/i],
                    [c, s, [u, m]],
                    [/droid.+; (glass) \d/i],
                    [s, [c, E],
                        [u, m]
                    ],
                    [/droid.+; (wt63?0{2,3})\)/i],
                    [s, [c, L],
                        [u, m]
                    ],
                    [/(quest( 2)?)/i],
                    [s, [c, U],
                        [u, m]
                    ],
                    [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                    [c, [u, y]],
                    [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                    [s, [u, p]],
                    [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                    [s, [u, v]],
                    [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                    [
                        [u, v]
                    ],
                    [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                    [
                        [u, p]
                    ],
                    [/(android[-\w\. ]{0,9});.+buil/i],
                    [s, [c, "Generic"]]
                ],
                engine: [
                    [/windows.+ edge\/([\w\.]+)/i],
                    [d, [l, "EdgeHTML"]],
                    [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                    [d, [l, "Blink"]],
                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i],
                    [l, d],
                    [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                    [d, l]
                ],
                os: [
                    [/microsoft (windows) (vista|xp)/i],
                    [l, d],
                    [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                    [l, [d, $, z]],
                    [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                    [
                        [l, "Windows"],
                        [d, $, z]
                    ],
                    [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
                    [
                        [d, /_/g, "."],
                        [l, "iOS"]
                    ],
                    [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                    [
                        [l, "Mac OS"],
                        [d, /_/g, "."]
                    ],
                    [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                    [d, l],
                    [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                    [l, d],
                    [/\(bb(10);/i],
                    [d, [l, k]],
                    [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                    [d, [l, "Symbian"]],
                    [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                    [d, [l, _ + " OS"]],
                    [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                    [d, [l, "webOS"]],
                    [/crkey\/([\d\.]+)/i],
                    [d, [l, S + "cast"]],
                    [/(cros) [\w]+ ([\w\.]+\w)/i],
                    [
                        [l, "Chromium OS"], d
                    ],
                    [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                    [l, d],
                    [/(sunos) ?([\w\.\d]*)/i],
                    [
                        [l, "Solaris"], d
                    ],
                    [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i],
                    [l, d]
                ]
            },
            G = function(t, r) {
                if (typeof t === a && (r = t, t = void 0), !(this instanceof G)) return new G(t, r).getResult();
                var i = t || (typeof e !== n && e.navigator && e.navigator.userAgent ? e.navigator.userAgent : ""),
                    f = r ? R(Q, r) : Q;
                return this.getBrowser = function() {
                    var e, t = {};
                    return t[l] = void 0, t[d] = void 0, K.call(t, i, f.browser), t.major = typeof(e = t.version) === o ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0, t
                }, this.getCPU = function() {
                    var e = {};
                    return e[h] = void 0, K.call(e, i, f.cpu), e
                }, this.getDevice = function() {
                    var e = {};
                    return e[c] = void 0, e[s] = void 0, e[u] = void 0, K.call(e, i, f.device), e
                }, this.getEngine = function() {
                    var e = {};
                    return e[l] = void 0, e[d] = void 0, K.call(e, i, f.engine), e
                }, this.getOS = function() {
                    var e = {};
                    return e[l] = void 0, e[d] = void 0, K.call(e, i, f.os), e
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
                    return i
                }, this.setUA = function(e) {
                    return i = typeof e === o && e.length > 350 ? V(e, 350) : e, this
                }, this.setUA(i), this
            };
        G.VERSION = "0.7.33", G.BROWSER = D([l, d, "major"]), G.CPU = D([h]), G.DEVICE = D([s, c, u, f, p, g, v, m, y]), G.ENGINE = G.OS = D([l, d]), t.exports && (r = t.exports = G), r.UAParser = G;
        var B = typeof e !== n && (e.jQuery || e.Zepto);
        if (B && !B.ua) {
            var H = new G;
            B.ua = H.getResult(), B.ua.get = function() {
                return H.getUA()
            }, B.ua.set = function(e) {
                H.setUA(e);
                var t = H.getResult();
                for (var r in t) B.ua[r] = t[r]
            }
        }
    }("object" == typeof window ? window : e.e)
}, 595293, e => {
    "use strict";
    let t, r;
    e.i(788727);
    var i, n, a, o, s, l, u = e.i(500783),
        c = e.i(3931),
        d = e.i(828083),
        h = e.i(955592),
        f = e.i(430907),
        p = e.i(722978),
        v = e.i(94918),
        g = e.i(825610),
        m = e.i(78070),
        y = e.i(291158),
        b = e.i(278466);
    let x = () => (0, u.jsx)(b.Link, {
        href: "/",
        className: "-m-2 inline-block p-2 transition-opacity hover:opacity-80",
        "data-link-location": g.trackingLocation.headerLogo,
        "data-link-id": "header-logo",
        children: (0, u.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "19",
            height: "22",
            viewBox: "0 0 19 22",
            fill: "none",
            children: (0, u.jsx)("path", {
                d: "M10.3305 3.93605L13.7281 5.94619C13.8503 6.01676 13.8547 6.21254 13.7281 6.28311L9.69098 8.67343C9.56884 8.74627 9.4245 8.74172 9.31124 8.67343L5.27408 6.28311C5.14972 6.21482 5.1475 6.01449 5.27408 5.94619L8.66947 3.93605V0L0 5.13121V15.3936L3.32433 13.4267V9.40646C3.32211 9.26304 3.48644 9.1606 3.60858 9.238L7.64575 11.6283C7.76788 11.7012 7.83672 11.8309 7.83672 11.9652V16.7436C7.83894 16.887 7.67461 16.9894 7.55248 16.912L4.15486 14.9019L0.830529 16.8688L9.5 22L18.1695 16.8688L14.8451 14.9019L11.4475 16.912C11.3276 16.9872 11.1588 16.8893 11.1633 16.7436V11.9652C11.1633 11.8218 11.241 11.6943 11.3543 11.6283L15.3914 9.238C15.5113 9.16287 15.6801 9.25849 15.6757 9.40646V13.4267L19 15.3936V5.13121L10.3305 0V3.93605Z",
                fill: "white"
            })
        })
    });
    var w = e.i(655105),
        k = e.i(544789);
    let j = ({
            children: e,
            className: t
        }) => (0, u.jsx)(k.default, {
            className: t,
            children: e
        }),
        S = ({
            variant: e = "medium",
            href: t,
            title: r,
            tag: i,
            description: n,
            image: a,
            icon: o,
            isExternal: s
        }) => {
            let l = (0, p.default)("text-white flex items-baseline gap-2", {
                "mango-text-heading-5xs": "medium" === e,
                "mango-text-heading-2xs": "large" === e
            });
            return (0, u.jsxs)(b.Link, {
                href: t,
                className: "group relative block overflow-hidden rounded-lg p-2",
                "data-link-location": g.trackingLocation.headerNavigationLink,
                "data-link-id": `header-nav-link-${t.split("/").filter(Boolean).join("-")||"home"}`,
                children: [(0, u.jsx)("div", {
                    className: "absolute inset-0 rounded-lg bg-gray-700 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100"
                }), (0, u.jsxs)("span", {
                    className: "relative z-10 flex items-center gap-4",
                    children: [(o || a) && (0, u.jsx)("span", {
                        className: "flex h-[2.625rem] w-[2.5625rem] shrink-0 items-center justify-center rounded-lg bg-gray-800",
                        children: o ? (0, u.jsx)(y.default, {
                            icon: o,
                            size: "1.5rem",
                            className: "text-white"
                        }) : a && (0, u.jsx)(w.default, {
                            src: a.src,
                            alt: a.alt,
                            width: 22,
                            height: 22
                        })
                    }), (0, u.jsxs)("div", {
                        className: "flex-1",
                        children: [(0, u.jsxs)("div", {
                            className: l,
                            children: [(0, u.jsx)("div", {
                                children: r
                            }), i && (0, u.jsx)(j, {
                                children: i
                            }), (0, u.jsx)("div", {
                                className: "self-center",
                                children: s && (0, u.jsx)(y.default, {
                                    icon: "arrow-up-right",
                                    size: "1rem"
                                })
                            })]
                        }), n && (0, u.jsx)("div", {
                            className: "mango-text-body-xs text-gray-400",
                            children: n
                        })]
                    })]
                })]
            })
        },
        _ = ({
            href: e,
            title: t,
            className: r,
            icon: i
        }) => {
            let n = (0, p.default)("group flex items-center gap-3 rounded p-1 hover:bg-gray-700 focus:bg-gray-700 transition-colors duration-200 ease-in-out", r);
            return (0, u.jsxs)(b.Link, {
                href: e,
                className: n,
                "data-link-location": g.trackingLocation.headerDropdownLink,
                "data-link-id": `header-dropdown-link-${e.split("/").filter(Boolean).join("-")||"home"}`,
                children: [i && (0, u.jsx)("span", {
                    className: "flex h-[2.625rem] w-[2.5625rem] shrink-0 items-center justify-center rounded-lg bg-gray-800 text-gray-500 transition-all duration-700 ease-in-out group-hover:text-white",
                    children: (0, u.jsx)(y.default, {
                        icon: i
                    })
                }), (0, u.jsx)("span", {
                    className: "mango-text-heading-5xs text-white",
                    children: t
                })]
            })
        },
        E = ({
            title: e,
            panelIndex: t = 0,
            sectionIndex: r = 0,
            links: i = [],
            actions: n = [],
            variant: a = "default"
        }) => {
            let o = (0, p.default)("mango-text-input text-gray-400", {
                    "mb-5": "compact" === a || "dropdown" === a,
                    "mb-6": "default" === a
                }),
                s = (0, p.default)("flex flex-col w-full", {
                    "gap-1": "compact" === a || "dropdown" === a,
                    "gap-5": "default" === a
                }),
                l = (0, p.default)("flex flex-wrap", {
                    "mt-3 gap-1": "compact" === a,
                    "mt-8 gap-2": "default" === a
                });
            return (0, u.jsxs)("div", {
                className: "flex flex-col",
                children: [(0, u.jsx)("div", {
                    className: o,
                    children: e
                }), i.length > 0 && (0, u.jsx)("div", {
                    className: s,
                    children: i.map((e, t) => "dropdown" === a ? (0, u.jsx)(_, {
                        href: e.href,
                        icon: e.icon,
                        title: e.title
                    }, `header-dropdown-menu-link-${e.title}-${t}`) : (0, u.jsx)(S, {
                        variant: "medium",
                        href: e.href,
                        icon: e.icon,
                        title: e.title,
                        tag: e.tag,
                        description: e.description,
                        isExternal: e.isExternal,
                        image: e.image
                    }, `header-dropdown-menu-link-${e.title}-${t}`))
                }), n.length > 0 && (0, u.jsx)("div", {
                    className: l,
                    children: n.map((e, i) => (0, u.jsx)(m.default, {
                        href: e.href,
                        size: "xs",
                        variant: e.variant || "secondary",
                        icon: e.icon,
                        iconDirection: e.iconDirection || "right",
                        "data-link-location": g.trackingLocation.headerDropdownMenuSectionAction,
                        "data-link-id": `header-dropdown-action-${t}-${r}-${i}`,
                        children: e.title
                    }, `header-dropdown-menu-action-${e.title}-${i}`))
                })]
            })
        };
    var C = e.i(596199),
        O = e.i(820374),
        P = e.i(526826),
        N = e.i(433721);
    let I = c.default.forwardRef(({
        icon: e,
        isActive: t = !1,
        className: r,
        onClick: i,
        onMouseEnter: n,
        onFocus: a,
        onTouchStart: o
    }, s) => {
        let l = (0, p.default)("rounded-full transition-colors text-white", "border hover:border-gray-700 focus:border-gray-700", {
            "border border-gray-700": t,
            "border-transparent": !t
        }, r);
        return (0, u.jsx)(N.Button, {
            ref: s,
            className: l,
            onPress: i,
            onHoverStart: n,
            onFocus: a,
            children: (0, u.jsx)("div", {
                onTouchStart: o,
                children: e
            })
        })
    });
    I.displayName = "HeaderIconButton";
    let M = ({
            icon: e,
            children: t,
            placement: r = "bottom end",
            offset: i = 24,
            className: n,
            onOpen: a
        }) => {
            let [o, s] = (0, c.useState)(!1), l = (0, f.usePathname)();
            return (0, c.useEffect)(() => {
                s(!1)
            }, [l]), (0, u.jsxs)(u.Fragment, {
                children: [o && (0, u.jsx)(P.m.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: .5,
                        ease: [.25, 1, .5, 1]
                    },
                    className: "fixed inset-0 top-0 bg-black/20"
                }), (0, u.jsxs)(C.MenuTrigger, {
                    isOpen: o,
                    onOpenChange: e => {
                        s(e), a?.(e)
                    },
                    children: [(0, u.jsx)(I, {
                        icon: e,
                        isActive: o
                    }), (0, u.jsx)(O.Popover, {
                        placement: r,
                        offset: i,
                        className: "dark",
                        children: (0, u.jsx)(P.m.div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: 10
                            },
                            transition: {
                                duration: .5,
                                ease: [.25, 1, .5, 1]
                            },
                            className: (0, p.default)("fixed w-full bg-gradient-to-t from-[#262626] to-black max-lg:top-[4rem] max-lg:left-0 lg:static lg:w-80 lg:from-black/80 lg:to-gray-900/80 lg:backdrop-blur-[1.5rem]", "flex flex-col items-center justify-center gap-4 overflow-hidden p-3 outline-hidden max-lg:rounded-b-2xl lg:rounded-2xl", n),
                            children: t
                        })
                    })]
                })]
            })
        },
        A = ({
            featuredLink: e,
            menus: t
        }) => (0, u.jsx)(M, {
            icon: (0, u.jsx)("div", {
                className: "p-2.5",
                children: (0, u.jsx)(y.default, {
                    icon: "storefront",
                    size: "0.875rem"
                })
            }),
            children: (0, u.jsxs)("div", {
                className: "flex w-full flex-col gap-4",
                children: [e && (0, u.jsx)(S, {
                    variant: "large",
                    href: e.href,
                    title: e.title,
                    description: e.description,
                    image: e.image,
                    icon: e.icon,
                    isExternal: e.isExternal
                }), t.length > 0 && (0, u.jsx)("div", {
                    className: "border-t border-gray-700 pt-3",
                    children: t.map((e, t) => (0, u.jsx)(E, {
                        sectionIndex: t,
                        title: e.title,
                        links: e.links,
                        variant: "dropdown"
                    }, `header-dropdown-menu-${e.title}-${t}`))
                })]
            })
        }),
        T = ({
            title: e,
            description: t,
            onLogout: r,
            onAccount: i,
            image: n,
            accountText: a = "My Account"
        }) => (0, u.jsxs)("div", {
            className: "relative h-[11.75rem] w-full overflow-hidden rounded-xl p-3 shadow-md",
            children: [n && (0, u.jsx)(w.default, {
                src: n.src,
                alt: "",
                fill: !0,
                placeholder: n.placeholder ? "blur" : void 0,
                blurDataURL: n.placeholder || void 0,
                sizes: "(max-width: 768px) 100vw, 20rem",
                className: "absolute inset-0 z-0 object-cover object-center"
            }), (0, u.jsx)("div", {
                className: "absolute inset-0 z-10",
                style: {
                    background: "linear-gradient(180deg, rgba(27, 27, 27, 0.50) 8.12%, rgba(0, 0, 0, 0.50) 59.95%)"
                }
            }), (0, u.jsxs)("div", {
                className: "relative z-20 flex h-full flex-col justify-between",
                children: [(0, u.jsxs)("div", {
                    className: "flex items-start justify-between",
                    children: [(0, u.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [(0, u.jsx)("div", {
                            className: "mango-text-heading-xs text-mango-white",
                            children: e
                        }), (0, u.jsx)("div", {
                            className: "mango-text-body-xs text-mango-gray-400",
                            children: t
                        })]
                    }), (0, u.jsx)(m.default, {
                        icon: "sign-out",
                        variant: "outline",
                        size: "xs",
                        onClick: r,
                        "aria-label": "Logout"
                    })]
                }), (0, u.jsx)("div", {
                    children: (0, u.jsx)(m.default, {
                        size: "sm",
                        variant: "secondary",
                        icon: "user",
                        iconDirection: "left",
                        onClick: i,
                        children: a
                    })
                })]
            })]
        }),
        L = ({
            menus: e,
            userSpotlight: t,
            signInText: r = "Sign in or create Unity ID",
            onSignIn: i,
            initials: n
        }) => (0, u.jsx)(M, {
            icon: n ? (0, u.jsx)("div", {
                className: "mango-text-heading-5xs flex h-9 w-9 items-center justify-center text-white capitalize",
                children: n
            }) : (0, u.jsx)("div", {
                className: "p-2.5",
                children: (0, u.jsx)(y.default, {
                    icon: "user",
                    size: "0.875rem"
                })
            }),
            children: (0, u.jsxs)("div", {
                className: "flex w-full flex-col gap-4",
                children: [t ? (0, u.jsx)(T, {
                    title: t.title,
                    description: t.description,
                    image: t.image,
                    onLogout: t.onLogout,
                    onAccount: t.onAccount,
                    accountText: t.accountText
                }) : (0, u.jsx)(m.default, {
                    className: "w-full",
                    icon: "user",
                    iconDirection: "left",
                    onClick: i,
                    children: r
                }), e.length > 0 && (0, u.jsx)("div", {
                    className: "border-t border-gray-700 pt-3",
                    children: e.map((e, t) => (0, u.jsx)(E, {
                        sectionIndex: t,
                        title: e.title,
                        links: e.links,
                        actions: e.actions,
                        variant: "compact"
                    }, `header-dropdown-menu-${e.title}-${t}`))
                })]
            })
        });
    var U = e.i(835261);
    let R = ({
            tag: e,
            title: t,
            description: r,
            image: i,
            link: n,
            buttonText: a
        }) => (0, u.jsxs)(v.Link, {
            className: "group bg-mango-black relative block h-80 overflow-hidden rounded-2xl p-5 shadow-[0_1px_0_0_#424242_inset]",
            href: n.href,
            target: n.target || "_self",
            children: [i && (0, u.jsx)(w.default, {
                src: i.src,
                alt: "",
                fill: !0,
                sizes: "25vw",
                placeholder: i.placeholder ? "blur" : void 0,
                blurDataURL: i.placeholder || void 0,
                className: "rounded-2xl object-cover transition-transform duration-[400ms] ease-in-out group-hover:scale-125"
            }), (0, u.jsxs)("div", {
                className: "flex h-full max-w-72 flex-col justify-between",
                children: [(0, u.jsxs)("div", {
                    className: "flex flex-col items-start",
                    children: [e && (0, u.jsx)(j, {
                        className: "mb-3",
                        children: e
                    }), (0, u.jsx)("div", {
                        className: "mango-text-heading-xs text-mango-white",
                        children: t
                    }), r && (0, u.jsx)("div", {
                        className: "mango-text-body-xs text-mango-gray-400 mt-1",
                        children: r
                    })]
                }), a && (0, u.jsx)("div", {
                    className: "translate-y-[200%] transform transition-transform duration-[400ms] ease-in-out group-hover:translate-y-0",
                    children: (0, u.jsx)(m.default, {
                        variant: "secondary",
                        size: "sm",
                        as: "div",
                        children: a
                    })
                })]
            })]
        }),
        D = c.default.forwardRef(({
            isOpen: e,
            active: t,
            panels: r,
            onKeyDown: i,
            panelRefs: n
        }, a) => {
            let o = null !== t && void 0 !== r[t],
                s = {
                    hidden: {
                        opacity: 0,
                        y: -10,
                        transition: {
                            duration: .2,
                            ease: [.25, 1, .5, 1]
                        }
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: .3,
                            delay: .1,
                            ease: [.25, 1, .5, 1]
                        }
                    }
                };
            return (0, u.jsx)(U.div, {
                ref: a,
                variants: {
                    hidden: {
                        opacity: 0,
                        height: 0,
                        minHeight: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        transition: {
                            duration: .3,
                            ease: [.25, 1, .5, 1]
                        }
                    },
                    visible: {
                        opacity: 1,
                        height: "auto",
                        minHeight: "27rem",
                        paddingTop: "2.5rem",
                        paddingBottom: "2.5rem",
                        transition: {
                            duration: .3,
                            ease: [.25, 1, .5, 1]
                        }
                    }
                },
                initial: "hidden",
                animate: e && o ? "visible" : "hidden",
                className: "absolute top-full right-0 left-0 z-40 w-full overflow-hidden rounded-b-[1rem] px-[4.625rem] shadow-2xl backdrop-blur-[24px]",
                role: "menu",
                "aria-hidden": !e || !o,
                onKeyDown: i,
                style: {
                    background: "linear-gradient(0deg, rgba(38, 38, 38, 0.80) -53.45%, rgba(0, 0, 0, 0.80) 91.71%)",
                    pointerEvents: e && o ? "auto" : "none"
                },
                children: (0, u.jsx)("div", {
                    className: "relative w-full",
                    children: r.map((r, i) => {
                        if (!r) return null;
                        let a = t === i && e,
                            o = r.highlightBox;
                        return (0, u.jsxs)(U.div, {
                            ref: e => {
                                n && (n.current[i] = e)
                            },
                            variants: s,
                            initial: "hidden",
                            animate: a ? "visible" : "hidden",
                            className: "grid w-full grid-cols-12 gap-6",
                            style: {
                                position: a ? "relative" : "absolute",
                                pointerEvents: a ? "auto" : "none"
                            },
                            "aria-hidden": !a,
                            children: [r.sections.map((e, t) => (0, u.jsx)("div", {
                                className: "md:col-span-3",
                                children: (0, u.jsx)(E, {
                                    ...e,
                                    panelIndex: i,
                                    sectionIndex: t
                                })
                            }, `section-${e.title}-${t}`)), o && (0, u.jsx)("div", {
                                className: "hidden xl:col-span-3 xl:block",
                                children: (0, u.jsx)(R, {
                                    ...o
                                })
                            })]
                        }, `mega-menu-panel-${i}`)
                    })
                })
            })
        });
    D.displayName = "HeaderMegaMenu";
    var F = e.i(27222),
        q = e.i(936238),
        q = q,
        V = q,
        K = e.i(623295);

    function $({
        navigation: e,
        action: t,
        secondaryAction: r,
        utilityNavigationItems: i
    }) {
        let [n, a] = (0, c.useState)(null), [o, s] = (0, c.useState)(!1), l = (0, f.usePathname)(), d = (0, c.useRef)(null), h = (0, c.useRef)(null), p = i ? i.filter(e => "string" != typeof e) : [];
        return (0, c.useEffect)(() => {
            if (o) return document.body.style.overflow = "hidden", () => {
                document.body.style.overflow = ""
            }
        }, [o]), (0, c.useEffect)(() => {
            s(!1)
        }, [l]), (0, c.useEffect)(() => {
            let e = e => {
                let t = e.target;
                d.current && !d.current.contains(t) && h.current && !h.current.contains(t) && s(!1)
            };
            if (o) return document.addEventListener("mousedown", e), () => {
                document.removeEventListener("mousedown", e)
            }
        }, [o]), (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)("div", {
                ref: h,
                children: (0, u.jsx)(m.default, {
                    className: "block lg:hidden",
                    variant: "secondary",
                    icon: o ? "x" : "list",
                    size: "sm",
                    onClick: () => s(!o)
                })
            }), (0, u.jsx)(F.AnimatePresence, {
                mode: "wait",
                children: o && (0, u.jsx)(U.div, {
                    ref: d,
                    variants: {
                        initial: {
                            y: 30,
                            opacity: 0
                        },
                        enter: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: .35,
                                ease: [.25, 1, .5, 1]
                            }
                        },
                        exit: {
                            opacity: 0,
                            transition: {
                                duration: .35,
                                ease: [.25, 1, .5, 1]
                            }
                        }
                    },
                    initial: "initial",
                    animate: "enter",
                    exit: "exit",
                    className: "absolute top-full left-0 h-[calc(100svh-64px)] w-full overflow-y-auto bg-black lg:hidden",
                    children: (0, u.jsxs)("div", {
                        className: "mt-10 mb-5 flex flex-col px-4",
                        children: [e.map((e, t) => (0, u.jsx)(z, {
                            ...e,
                            active: n === t,
                            setActive: a,
                            index: t
                        }, `search-modal-search-result-${e.title}-${t}`)), p.length > 0 ? p.map((e, t) => (0, u.jsx)(m.default, {
                            className: `w-full lg:hidden ${0===t?"mt-12":"mt-6"}`,
                            size: "lg",
                            variant: e.variant ?? "primary",
                            href: e.link?.href,
                            target: e.link?.target,
                            "data-link-location": g.trackingLocation.headerMobileAction,
                            "data-link-id": `header-mobile-action-${t}`,
                            children: e.label
                        }, `mobile-action-${t}`)) : (0, u.jsxs)(u.Fragment, {
                            children: [t && (0, u.jsx)(m.default, {
                                className: "mt-12 w-full lg:hidden",
                                size: "lg",
                                href: t.href,
                                target: t.target,
                                "data-link-location": g.trackingLocation.headerMobileAction,
                                "data-link-id": "header-mobile-primary-action",
                                children: t.label
                            }), r && (0, u.jsx)(m.default, {
                                className: "mt-6 w-full lg:hidden",
                                size: "lg",
                                variant: "secondary",
                                href: r.href,
                                target: r.target,
                                "data-link-location": g.trackingLocation.headerMobileSecondaryAction,
                                "data-link-id": "header-mobile-secondary-action",
                                children: r.label
                            })]
                        })]
                    })
                })
            })]
        })
    }
    let z = ({
            title: e,
            link: t,
            listingLabel: r,
            panel: i,
            active: n,
            setActive: a,
            index: o
        }) => {
            let s = !!i;
            return (0, u.jsxs)("div", {
                className: "relative py-1.5",
                children: [s ? (0, u.jsxs)("button", {
                    onClick: () => a(n ? null : o),
                    className: "relative z-10 flex w-full items-center justify-between",
                    children: [(0, u.jsx)(q.MotionP, {
                        animate: {
                            x: 24 * !!n,
                            y: 6 * !!n,
                            scale: n ? 1.2 : 1
                        },
                        transition: {
                            duration: .5,
                            ease: [.25, 1, .5, 1]
                        },
                        className: "mango-text-heading-2xs leading-none! text-white",
                        children: e
                    }), (0, u.jsx)(V.MotionSpan, {
                        animate: {
                            x: n ? -16 : 0,
                            y: 6 * !!n,
                            rotate: 90 * !!n
                        },
                        transition: {
                            duration: .5,
                            ease: [.25, 1, .5, 1]
                        },
                        className: "inline-block",
                        children: (0, u.jsx)(m.default, {
                            icon: "caret-right",
                            size: "sm",
                            iconWeight: "fill",
                            variant: n ? "secondary" : "ghost"
                        })
                    })]
                }) : (0, u.jsx)(v.Link, {
                    href: t?.href || "",
                    target: t?.target === "_blank" ? "_blank" : void 0,
                    className: "relative z-10 flex w-full items-center py-2.5",
                    "data-link-location": g.trackingLocation.headerNavigationItem,
                    children: (0, u.jsx)("p", {
                        className: "mango-text-heading-2xs leading-none! text-white",
                        children: e
                    })
                }), (0, u.jsxs)(F.AnimatePresence, {
                    mode: "wait",
                    children: [s && n && i && (0, u.jsx)(Q, {
                        panel: i,
                        listingLabel: r,
                        link: t
                    }), s && n && (0, u.jsx)(V.MotionSpan, {
                        variants: {
                            initial: {
                                y: -10,
                                opacity: 0
                            },
                            enter: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    duration: .75,
                                    ease: [.25, 1, .5, 1]
                                }
                            },
                            exit: {
                                opacity: 0,
                                y: -10,
                                transition: {
                                    duration: .75,
                                    ease: [.25, 1, .5, 1]
                                }
                            }
                        },
                        initial: "initial",
                        animate: "enter",
                        exit: "exit",
                        "aria-hidden": !0,
                        className: "absolute top-[-.25rem] z-1 inline-block h-[calc(100%+.25rem)] w-full rounded-[1rem] bg-[#1B1B1B] shadow-[inset_0px_1px_0px_0px_#424242]"
                    })]
                })]
            })
        },
        Q = ({
            panel: e,
            listingLabel: t,
            link: r
        }) => (0, u.jsxs)(U.div, {
            variants: {
                initial: {
                    height: 0,
                    y: -10
                },
                enter: {
                    height: "auto",
                    y: 0,
                    transition: {
                        duration: .75,
                        ease: [.25, 1, .5, 1]
                    }
                },
                exit: {
                    height: 0,
                    y: -10,
                    transition: {
                        duration: .75,
                        ease: [.25, 1, .5, 1]
                    }
                }
            },
            initial: "initial",
            animate: "enter",
            exit: "exit",
            className: "relative z-10 overflow-hidden px-4",
            children: [(0, u.jsx)("span", {
                "aria-hidden": !0,
                className: "block h-[3.125rem]"
            }), (0, u.jsx)("div", {
                className: "flex flex-col gap-9",
                children: e.sections.map(({
                    title: e,
                    actions: t,
                    mobileActions: r,
                    links: i
                }, n) => (0, u.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    children: [(0, u.jsx)("div", {
                        className: "border-b border-gray-700",
                        children: (0, u.jsx)("p", {
                            className: "mango-text-input mb-2 text-gray-400",
                            children: e
                        })
                    }), (0, u.jsxs)("div", {
                        className: "flex flex-col gap-3",
                        children: [i?.map(({
                            title: e,
                            href: t,
                            icon: r,
                            image: i,
                            isExternal: n
                        }, a) => (0, u.jsxs)(v.Link, {
                            href: t,
                            className: "flex items-center gap-3",
                            "data-link-location": g.trackingLocation.headerMobilePanelLink,
                            "data-link-id": `header-mobile-panel-link-${a}`,
                            children: [(0, u.jsxs)("div", {
                                className: "flex h-[2.5rem] w-[2.5rem] shrink-0 items-center justify-center",
                                children: [r && (0, u.jsx)(K.default, {
                                    icon: r,
                                    size: "1.5rem"
                                }), i && (0, u.jsx)(w.default, {
                                    src: i.src,
                                    alt: i.alt,
                                    height: 24,
                                    width: 24
                                })]
                            }), (0, u.jsxs)("p", {
                                className: "mango-text-heading-3xs flex items-center gap-2 text-white",
                                children: [e, n && (0, u.jsx)(K.default, {
                                    icon: "arrow-up-right",
                                    size: "1rem"
                                })]
                            })]
                        }, `header-mobile-panel-section-links-${e}-${a}`)), (0, u.jsx)("div", {
                            className: "mt-1 flex flex-col gap-3",
                            children: (r || t)?.map(({
                                title: e,
                                href: t,
                                variant: r,
                                icon: i,
                                iconDirection: n
                            }, a) => (0, u.jsx)(m.default, {
                                href: t,
                                variant: r || "outline",
                                icon: i || void 0,
                                iconDirection: n || "right",
                                size: "xs",
                                "data-link-location": g.trackingLocation.headerMobilePanelAction,
                                "data-link-id": `header-mobile-panel-action-${a}`,
                                children: e
                            }, `header-mobile-panel-section-actions-${e}-${a}`))
                        })]
                    })]
                }, `header-mobile-panel-section-${e}-${n}`))
            }), (0, u.jsx)(m.default, {
                href: r.href,
                className: "mt-9 w-full",
                variant: "secondary",
                icon: "arrow-right",
                size: "lg",
                "data-link-location": g.trackingLocation.headerMobilePanelListing,
                "data-link-id": "header-mobile-panel-listing",
                children: t
            }), (0, u.jsx)("span", {
                "aria-hidden": !0,
                className: "block h-[1.25rem]"
            })]
        });
    var G = e.i(766930);
    let B = ({
        navigation: e = [],
        store: t,
        userMenu: r,
        onSearchOpen: i,
        onSearchHover: n,
        onSearchFocus: a,
        action: o,
        searchButtonRef: s,
        secondaryAction: l,
        utilityNavigationItems: d
    }) => {
        let [h, b] = (0, c.useState)(null), [w, k] = (0, c.useState)(!1), j = (0, f.usePathname)(), S = (0, c.useRef)(null), _ = (0, c.useRef)([]), E = (0, c.useRef)(null), C = (0, c.useRef)([]), O = e?.map(e => e.panel) || [], P = {
            search: e => (0, u.jsx)(I, {
                ref: s,
                onClick: T,
                onMouseEnter: n,
                onFocus: a,
                onTouchStart: n,
                icon: (0, u.jsx)("div", {
                    className: "p-2.5",
                    children: (0, u.jsx)(y.default, {
                        icon: "magnifying-glass",
                        size: "0.875rem"
                    })
                })
            }, `utility-nav-item-search-${e}`),
            store: e => t ? (0, u.jsx)(F.AnimatePresence, {
                mode: "wait",
                children: (0, u.jsx)(A, {
                    ...t
                })
            }, `utility-nav-item-store-${e}`) : null,
            profile: e => r ? (0, u.jsx)(F.AnimatePresence, {
                mode: "wait",
                children: (0, u.jsx)(L, {
                    ...r
                })
            }, `utility-nav-item-profile-${e}`) : null
        };
        (0, c.useEffect)(() => {
            C.current.forEach((e, t) => {
                if (!e) return;
                let r = h === t && w;
                e.querySelectorAll("a[href], button:not([disabled])").forEach(e => {
                    r ? e.removeAttribute("tabindex") : e.setAttribute("tabindex", "-1")
                })
            })
        }, [h, w]), (0, c.useEffect)(() => () => {
            S.current && clearTimeout(S.current)
        }, []), (0, c.useEffect)(() => {
            k(!1), b(null)
        }, [j]);
        let N = () => {
                S.current && clearTimeout(S.current)
            },
            M = e => {
                let t = C.current[e];
                return t ? Array.from(t.querySelectorAll('a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"])')) : []
            },
            T = () => {
                i && i()
            };
        return (0, u.jsx)(G.default, {
            children: (0, u.jsxs)("header", {
                className: "dark sticky top-0 right-0 left-0 z-50 flex h-[4rem] items-center bg-black lg:h-[3rem]",
                children: [w && null !== h && e[h]?.panel && (0, u.jsx)("div", {
                    className: "fixed inset-0 z-10 bg-black/10",
                    style: {
                        top: "3rem"
                    }
                }), (0, u.jsxs)("div", {
                    className: "mango-container flex items-center justify-between px-6 py-1.5",
                    children: [(0, u.jsxs)("div", {
                        className: "flex items-center gap-9",
                        children: [(0, u.jsx)(x, {}), (0, u.jsxs)("div", {
                            className: "hidden lg:block",
                            role: "menubar",
                            tabIndex: -1,
                            onBlurCapture: e => {
                                S.current = setTimeout(() => {
                                    let t = e.currentTarget,
                                        r = document.activeElement;
                                    t && r && !t.contains(r) && (k(!1), b(null))
                                }, 150)
                            },
                            onMouseEnter: N,
                            onMouseLeave: () => {
                                S.current = setTimeout(() => {
                                    k(!1), b(null)
                                }, 150)
                            },
                            onKeyDown: e => {
                                "Escape" === e.key && w && (e.preventDefault(), k(!1), b(null), null !== h && _.current[h]?.focus())
                            },
                            children: [(0, u.jsx)("nav", {
                                children: (0, u.jsx)("ul", {
                                    className: "flex",
                                    children: e.map((t, r) => {
                                        let i = !!t.panel;
                                        return (0, u.jsx)("li", {
                                            children: (0, u.jsx)(v.Link, {
                                                ref: e => {
                                                    _.current[r] = e
                                                },
                                                className: (0, p.default)("mango-text-heading-5xs text-mango-white hover:bg-mango-gray-950 block rounded-xl px-3 py-2", {
                                                    "bg-mango-gray-950": h === r && i
                                                }),
                                                href: t.link?.href,
                                                target: t.link?.target === "_blank" ? "_blank" : void 0,
                                                onMouseEnter: () => {
                                                    N(), i ? (b(r), k(!0)) : (b(null), k(!1))
                                                },
                                                onKeyDown: t => {
                                                    let i;
                                                    return i = e[r]?.panel, void("ArrowDown" === t.key && i && (t.preventDefault(), b(r), k(!0), setTimeout(() => {
                                                        let e = M(r);
                                                        e[0]?.focus()
                                                    }, 100)))
                                                },
                                                "aria-haspopup": i ? "true" : void 0,
                                                "aria-expanded": i && h === r && w ? "true" : "false",
                                                "data-link-id": `header-nav-item-${r}`,
                                                "data-link-location": g.trackingLocation.headerNavigationItem,
                                                children: t.title
                                            })
                                        }, `navigationItem-${t.title}-${r}`)
                                    })
                                })
                            }), (0, u.jsx)(D, {
                                ref: E,
                                isOpen: w,
                                active: h,
                                panels: O,
                                panelRefs: C,
                                onKeyDown: e => {
                                    if ("Escape" === e.key) {
                                        e.preventDefault(), e.stopPropagation(), k(!1), b(null), null !== h && _.current[h]?.focus();
                                        return
                                    }
                                    if ("Tab" === e.key && w && null !== h) {
                                        let t = null === h ? [] : M(h);
                                        if (0 === t.length) return;
                                        let r = t[0],
                                            i = e.target,
                                            n = t.indexOf(i);
                                        if (-1 === n) return;
                                        e.shiftKey ? 0 === n && (e.preventDefault(), k(!1), b(null), _.current[h]?.focus()) : n === t.length - 1 && (e.preventDefault(), r.focus())
                                    }
                                }
                            })]
                        })]
                    }), (0, u.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [d ? d.map((e, t) => "string" == typeof e ? P[e]?.(t) ?? null : (0, u.jsx)(m.default, {
                            className: "hidden lg:flex",
                            size: "xs",
                            variant: e.variant ?? "primary",
                            href: e.link?.href,
                            target: e.link?.target,
                            "data-link-location": "secondary" === e.variant ? g.trackingLocation.headerSecondaryAction : g.trackingLocation.headerAction,
                            "data-link-id": `header-utility-action-${t}`,
                            children: e.label
                        }, `utility-nav-item-action-${t}`)) : (0, u.jsxs)(u.Fragment, {
                            children: [(0, u.jsx)(I, {
                                ref: s,
                                onClick: T,
                                onMouseEnter: n,
                                onFocus: a,
                                onTouchStart: n,
                                icon: (0, u.jsx)("div", {
                                    className: "p-2.5",
                                    children: (0, u.jsx)(y.default, {
                                        icon: "magnifying-glass",
                                        size: "0.875rem"
                                    })
                                })
                            }), (0, u.jsx)(F.AnimatePresence, {
                                mode: "wait",
                                children: t && (0, u.jsx)(A, {
                                    ...t
                                })
                            }), (0, u.jsx)(F.AnimatePresence, {
                                mode: "wait",
                                children: r && (0, u.jsx)(L, {
                                    ...r
                                })
                            }), l && (0, u.jsx)(m.default, {
                                className: "hidden lg:flex",
                                size: "xs",
                                variant: "secondary",
                                href: l.href,
                                target: l.target,
                                "data-link-location": g.trackingLocation.headerSecondaryAction,
                                "data-link-id": "header-secondary-action",
                                children: l.label
                            }), o && (0, u.jsx)(m.default, {
                                className: "hidden lg:flex",
                                size: "xs",
                                href: o.href,
                                target: o.target,
                                "data-link-location": g.trackingLocation.headerAction,
                                "data-link-id": "header-primary-action",
                                children: o.label
                            })]
                        }), (0, u.jsx)($, {
                            navigation: e,
                            action: o,
                            secondaryAction: l,
                            utilityNavigationItems: d
                        })]
                    })]
                })]
            })
        })
    };
    var H = e.i(321950),
        W = e.i(233757),
        J = e.i(869324);
    let Y = ({
            action: e,
            level: t,
            pageDetails: r
        }) => ({
            event: "userEvent",
            event_name: "navigation_action",
            properties: {
                ...r,
                navigation_action: e,
                navigation_level: t || ""
            }
        }),
        X = e => {
            let t = e.location;
            return {
                page_url: t.href,
                page_hostname: t.hostname,
                page_path: t.pathname,
                page_query: t.search,
                page_fragment: t.hash,
                page_title: e.title
            }
        };
    var Z = e.i(108051),
        ee = e.i(868319),
        et = function(e, t) {
            return (et = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            })(e, t)
        };

    function er(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function r() {
            this.constructor = e
        }
        et(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }
    var ei = function() {
        return (ei = Object.assign || function(e) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
                for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }).apply(this, arguments)
    };

    function en(e, t, r, i) {
        return new(r || (r = Promise))(function(n, a) {
            function o(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function l(e) {
                var t;
                e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, s)
            }
            l((i = i.apply(e, t || [])).next())
        })
    }

    function ea(e, t) {
        var r, i, n, a = {
                label: 0,
                sent: function() {
                    if (1 & n[0]) throw n[1];
                    return n[1]
                },
                trys: [],
                ops: []
            },
            o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return o.next = s(0), o.throw = s(1), o.return = s(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function s(s) {
            return function(l) {
                var u = [s, l];
                if (r) throw TypeError("Generator is already executing.");
                for (; o && (o = 0, u[0] && (a = 0)), a;) try {
                    if (r = 1, i && (n = 2 & u[0] ? i.return : u[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, u[1])).done) return n;
                    switch (i = 0, n && (u = [2 & u[0], n.value]), u[0]) {
                        case 0:
                        case 1:
                            n = u;
                            break;
                        case 4:
                            return a.label++, {
                                value: u[1],
                                done: !1
                            };
                        case 5:
                            a.label++, i = u[1], u = [0];
                            continue;
                        case 7:
                            u = a.ops.pop(), a.trys.pop();
                            continue;
                        default:
                            if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === u[0] && (!n || u[1] > n[0] && u[1] < n[3])) {
                                a.label = u[1];
                                break
                            }
                            if (6 === u[0] && a.label < n[1]) {
                                a.label = n[1], n = u;
                                break
                            }
                            if (n && a.label < n[2]) {
                                a.label = n[2], a.ops.push(u);
                                break
                            }
                            n[2] && a.ops.pop(), a.trys.pop();
                            continue
                    }
                    u = t.call(e, a)
                } catch (e) {
                    u = [6, e], i = 0
                } finally {
                    r = n = 0
                }
                if (5 & u[0]) throw u[1];
                return {
                    value: u[0] ? u[1] : void 0,
                    done: !0
                }
            }
        }
    }

    function eo(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            r = t && e[t],
            i = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && i >= e.length && (e = void 0), {
                    value: e && e[i++],
                    done: !e
                }
            }
        };
        throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function es(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i, n, a = r.call(e),
            o = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(i = a.next()).done;) o.push(i.value)
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                i && !i.done && (r = a.return) && r.call(a)
            } finally {
                if (n) throw n.error
            }
        }
        return o
    }

    function el(e, t, r) {
        if (r || 2 == arguments.length)
            for (var i, n = 0, a = t.length; n < a; n++) !i && n in t || (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
        return e.concat(i || Array.prototype.slice.call(t))
    }
    "function" == typeof SuppressedError && SuppressedError;
    var eu = "is not",
        ec = "contains",
        ed = "does not contain",
        eh = "less",
        ef = "less or equal",
        ep = "greater",
        ev = "greater or equal",
        eg = "version less",
        em = "version less or equal",
        ey = "version greater",
        eb = "version greater or equal",
        ex = "set is",
        ew = "set is not",
        ek = "set contains",
        ej = "set does not contain",
        eS = "set contains any",
        e_ = "set does not contain any",
        eE = function(e) {
            for (var t = [], r = 0, i = 0; i < e.length; i++) {
                var n = e.charCodeAt(i);
                n < 128 ? t[r++] = n : (n < 2048 ? t[r++] = n >> 6 | 192 : ((64512 & n) == 55296 && i + 1 < e.length && (64512 & e.charCodeAt(i + 1)) == 56320 ? (n = 65536 + ((1023 & n) << 10) + (1023 & e.charCodeAt(++i)), t[r++] = n >> 18 | 240, t[r++] = n >> 12 & 63 | 128) : t[r++] = n >> 12 | 224, t[r++] = n >> 6 & 63 | 128), t[r++] = 63 & n | 128)
            }
            return Uint8Array.from(t)
        },
        eC = function(e, t) {
            void 0 === t && (t = 0);
            for (var r = eE(e), i = r.length, n = i >> 2, a = t, o = 0; o < n; o++) a = eO(eI(r, o << 2), a);
            var s = n << 2,
                l = 0;
            switch (i - s) {
                case 3:
                    l ^= r[s + 2] << 16, l ^= r[s + 1] << 8, l ^= r[s], a ^= l = Math.imul(l = eN(l = Math.imul(l, -0x3361d2af), 15), 0x1b873593);
                    break;
                case 2:
                    l ^= r[s + 1] << 8, l ^= r[s], a ^= l = Math.imul(l = eN(l = Math.imul(l, -0x3361d2af), 15), 0x1b873593);
                    break;
                case 1:
                    l ^= r[s], a ^= l = Math.imul(l = eN(l = Math.imul(l, -0x3361d2af), 15), 0x1b873593)
            }
            return eP(a ^= i) >>> 0
        },
        eO = function(e, t) {
            var r = e,
                i = t;
            return i ^= r = Math.imul(r = eN(r = Math.imul(r, -0x3361d2af), 15), 0x1b873593), (i = Math.imul(i = eN(i, 13), 5)) + -0x19ab949c | 0
        },
        eP = function(e) {
            var t = e;
            return t ^= t >>> 16, t = Math.imul(t, -0x7a143595), t ^= t >>> 13, t = Math.imul(t, -0x3d4d51cb), t ^= t >>> 16
        },
        eN = function(e, t, r) {
            void 0 === r && (r = 32), t > r && (t %= r);
            var i = (e & 0xffffffff << r - t >>> 0) >>> 0 >>> r - t >>> 0;
            return (e << t | i) >>> 0
        },
        eI = function(e, t) {
            return void 0 === t && (t = 0), eM(e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3])
        },
        eM = function(e) {
            return (-0x1000000 & e) >>> 24 | (0xff0000 & e) >>> 8 | (65280 & e) << 8 | (255 & e) << 24
        },
        eA = function(e, t) {
            var r, i;
            if (t && 0 !== t.length) {
                try {
                    for (var n = eo(t), a = n.next(); !a.done; a = n.next()) {
                        var o = a.value;
                        if (!o || !e || "object" != typeof e) return;
                        e = e[o]
                    }
                } catch (e) {
                    r = {
                        error: e
                    }
                } finally {
                    try {
                        a && !a.done && (i = n.return) && i.call(n)
                    } finally {
                        if (r) throw r.error
                    }
                }
                if (null == e) return;
                return e
            }
        },
        eT = "^".concat("(\\d+)\\.(\\d+)", "(\\.").concat("(\\d+)").concat("(-(([-\\w]+\\.?)*))?", ")?$"),
        eL = function() {
            function e(e, t, r, i) {
                void 0 === i && (i = void 0), this.major = e, this.minor = t, this.patch = r, this.preRelease = i
            }
            return e.parse = function(t) {
                if (t) {
                    var r = new RegExp(eT).exec(t);
                    if (r) {
                        var i = Number(r[1]),
                            n = Number(r[2]);
                        if (!(isNaN(i) || isNaN(n))) return new e(i, n, Number(r[4]) || 0, r[5] || void 0)
                    }
                }
            }, e.prototype.compareTo = function(e) {
                if (this.major > e.major) return 1;
                if (this.major < e.major) return -1;
                if (this.minor > e.minor) return 1;
                if (this.minor < e.minor) return -1;
                if (this.patch > e.patch) return 1;
                if (this.patch < e.patch || this.preRelease && !e.preRelease) return -1;
                if (!this.preRelease && e.preRelease) return 1;
                if (this.preRelease && e.preRelease) {
                    if (this.preRelease > e.preRelease) return 1;
                    if (this.preRelease < e.preRelease) return -1
                }
                return 0
            }, e
        }(),
        eU = function() {
            function e() {}
            return e.prototype.evaluate = function(e, t) {
                var r, i, n = {},
                    a = {
                        context: e,
                        result: n
                    };
                try {
                    for (var o = eo(t), s = o.next(); !s.done; s = o.next()) {
                        var l = s.value,
                            u = this.evaluateFlag(a, l);
                        u && (n[l.key] = u)
                    }
                } catch (e) {
                    r = {
                        error: e
                    }
                } finally {
                    try {
                        s && !s.done && (i = o.return) && i.call(o)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return n
            }, e.prototype.evaluateWithTraces = function(e, t) {
                var r, i, n = {},
                    a = {},
                    o = {
                        context: e,
                        result: n
                    };
                try {
                    for (var s = eo(t), l = s.next(); !l.done; l = s.next()) {
                        var u = l.value,
                            c = this.evaluateFlagWithTrace(o, u),
                            d = c.variant,
                            h = c.trace;
                        d && (n[u.key] = d), a[u.key] = h
                    }
                } catch (e) {
                    r = {
                        error: e
                    }
                } finally {
                    try {
                        l && !l.done && (i = s.return) && i.call(s)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return {
                    results: n,
                    traces: a
                }
            }, e.prototype.evaluateFlag = function(e, t) {
                try {
                    for (var r, i, n, a = eo(t.segments), o = a.next(); !o.done; o = a.next()) {
                        var s = o.value;
                        if (n = this.evaluateSegment(e, t, s)) {
                            var l = ei(ei(ei({}, t.metadata), s.metadata), n.metadata);
                            n = ei(ei({}, n), {
                                metadata: l
                            });
                            break
                        }
                    }
                } catch (e) {
                    r = {
                        error: e
                    }
                } finally {
                    try {
                        o && !o.done && (i = a.return) && i.call(a)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return n
            }, e.prototype.evaluateFlagWithTrace = function(e, t) {
                var r, i, n, a, o, s, l, u, c, d, h, f = [];
                try {
                    for (var p = eo(t.segments), v = p.next(); !v.done; v = p.next()) {
                        var g = v.value;
                        if (!g.conditions) {
                            var m = this.bucket(e, g),
                                y = void 0 !== m;
                            f.push({
                                segmentMetadata: g.metadata,
                                conditionsPassed: !0,
                                bucketed: y,
                                bucketVariant: m,
                                conditionResult: void 0,
                                matched: y
                            }), c || void 0 === m || (c = t.variants[m], d = g, h = null == (l = g.metadata) ? void 0 : l.segmentName);
                            continue
                        }
                        var b = [],
                            x = !1;
                        try {
                            for (var w = (n = void 0, eo(g.conditions)), k = w.next(); !k.done; k = w.next()) {
                                var j = k.value,
                                    S = !0,
                                    _ = [];
                                try {
                                    for (var E = (o = void 0, eo(j)), C = E.next(); !C.done; C = E.next()) {
                                        var O = C.value,
                                            P = eA(e, O.selector),
                                            N = this.matchCondition(e, O);
                                        if (_.push({
                                                propValue: P,
                                                condition: O,
                                                matched: N
                                            }), !N) {
                                            S = !1;
                                            break
                                        }
                                    }
                                } catch (e) {
                                    o = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        C && !C.done && (s = E.return) && s.call(E)
                                    } finally {
                                        if (o) throw o.error
                                    }
                                }
                                if (b.push(_), S) {
                                    x = !0;
                                    break
                                }
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                k && !k.done && (a = w.return) && a.call(w)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        var I = !1,
                            M = void 0;
                        x && (M = this.bucket(e, g), I = void 0 !== M), f.push({
                            segmentMetadata: g.metadata,
                            conditionsPassed: x,
                            bucketed: I,
                            bucketVariant: M,
                            conditionResult: b,
                            matched: x && I
                        }), x && void 0 !== M && !c && (c = t.variants[M], d = g, h = null == (u = g.metadata) ? void 0 : u.segmentName)
                    }
                } catch (e) {
                    r = {
                        error: e
                    }
                } finally {
                    try {
                        v && !v.done && (i = p.return) && i.call(p)
                    } finally {
                        if (r) throw r.error
                    }
                }
                if (c && d) {
                    var A = ei(ei(ei({}, t.metadata), d.metadata), c.metadata);
                    c = ei(ei({}, c), {
                        metadata: A
                    })
                }
                var T = {
                    flagKey: t.key,
                    matched: void 0 !== c,
                    matchedSegment: h,
                    steps: f
                };
                return {
                    variant: c,
                    trace: T
                }
            }, e.prototype.evaluateSegment = function(e, t, r) {
                if (!r.conditions) {
                    var i = this.bucket(e, r);
                    return void 0 !== i ? t.variants[i] : void 0
                }
                if (this.evaluateConditions(e, r.conditions)) {
                    var i = this.bucket(e, r);
                    if (void 0 !== i) return t.variants[i]
                }
            }, e.prototype.evaluateConditions = function(e, t) {
                var r, i, n, a;
                try {
                    for (var o = eo(t), s = o.next(); !s.done; s = o.next()) {
                        var l = s.value,
                            u = !0;
                        try {
                            for (var c = (n = void 0, eo(l)), d = c.next(); !d.done; d = c.next()) {
                                var h = d.value;
                                if (!(u = this.matchCondition(e, h))) break
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                d && !d.done && (a = c.return) && a.call(c)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        if (u) return !0
                    }
                } catch (e) {
                    r = {
                        error: e
                    }
                } finally {
                    try {
                        s && !s.done && (i = o.return) && i.call(o)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return !1
            }, e.prototype.matchCondition = function(e, t) {
                var r = eA(e, t.selector);
                if (null == r) return this.matchNull(t.op, t.values);
                if (this.isSetOperator(t.op)) {
                    var i = this.coerceStringArray(r);
                    return !!i && this.matchSet(i, t.op, t.values)
                }
                var n = this.coerceString(r);
                return void 0 !== n && this.matchString(n, t.op, t.values)
            }, e.prototype.getHash = function(e) {
                return eC(e)
            }, e.prototype.bucket = function(e, t) {
                if (!t.bucket) return t.variant;
                var r, i, n, a, o = this.coerceString(eA(e, t.bucket.selector));
                if (!o || 0 === o.length) return t.variant;
                var s = "".concat(t.bucket.salt, "/").concat(o),
                    l = this.getHash(s),
                    u = l % 100,
                    c = Math.floor(l / 100);
                try {
                    for (var d = eo(t.bucket.allocations), h = d.next(); !h.done; h = d.next()) {
                        var f = h.value,
                            p = f.range[0],
                            v = f.range[1];
                        if (u >= p && u < v) try {
                            for (var g = (n = void 0, eo(f.distributions)), m = g.next(); !m.done; m = g.next()) {
                                var y = m.value,
                                    b = y.range[0],
                                    x = y.range[1];
                                if (c >= b && c < x) return y.variant
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                m && !m.done && (a = g.return) && a.call(g)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                    }
                } catch (e) {
                    r = {
                        error: e
                    }
                } finally {
                    try {
                        h && !h.done && (i = d.return) && i.call(d)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return t.variant
            }, e.prototype.matchNull = function(e, t) {
                var r = this.containsNone(t);
                switch (e) {
                    case "is":
                    case ec:
                    case eh:
                    case ef:
                    case ep:
                    case ev:
                    case eg:
                    case em:
                    case ey:
                    case eb:
                    case ex:
                    case ek:
                    case eS:
                        return r;
                    case eu:
                    case ed:
                    case ej:
                    case e_:
                        return !r;
                    default:
                        return !1
                }
            }, e.prototype.matchSet = function(e, t, r) {
                switch (t) {
                    case ex:
                        return this.setEquals(e, r);
                    case ew:
                        return !this.setEquals(e, r);
                    case ek:
                        return this.matchesSetContainsAll(e, r);
                    case ej:
                        return !this.matchesSetContainsAll(e, r);
                    case eS:
                        return this.matchesSetContainsAny(e, r);
                    case e_:
                        return !this.matchesSetContainsAny(e, r);
                    default:
                        return !1
                }
            }, e.prototype.matchString = function(e, t, r) {
                var i = this;
                switch (t) {
                    case "is":
                        return this.matchesIs(e, r);
                    case eu:
                        return !this.matchesIs(e, r);
                    case ec:
                        return this.matchesContains(e, r);
                    case ed:
                        return !this.matchesContains(e, r);
                    case eh:
                    case ef:
                    case ep:
                    case ev:
                        return this.matchesComparable(e, t, r, function(e) {
                            return i.parseNumber(e)
                        }, this.comparator);
                    case eg:
                    case em:
                    case ey:
                    case eb:
                        return this.matchesComparable(e, t, r, function(e) {
                            return eL.parse(e)
                        }, this.versionComparator);
                    case "regex match":
                        return this.matchesRegex(e, r);
                    case "regex does not match":
                        return !this.matchesRegex(e, r);
                    default:
                        return !1
                }
            }, e.prototype.matchesIs = function(e, t) {
                if (this.containsBooleans(t)) {
                    var r = e.toLowerCase();
                    if ("true" === r || "false" === r) return t.some(function(e) {
                        return e.toLowerCase() === r
                    })
                }
                return t.some(function(t) {
                    return e === t
                })
            }, e.prototype.matchesContains = function(e, t) {
                var r, i;
                try {
                    for (var n = eo(t), a = n.next(); !a.done; a = n.next()) {
                        var o = a.value;
                        if (e.toLowerCase().includes(o.toLowerCase())) return !0
                    }
                } catch (e) {
                    r = {
                        error: e
                    }
                } finally {
                    try {
                        a && !a.done && (i = n.return) && i.call(n)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return !1
            }, e.prototype.matchesComparable = function(e, t, r, i, n) {
                var a = this,
                    o = i(e),
                    s = r.map(function(e) {
                        return i(e)
                    }).filter(function(e) {
                        return void 0 !== e
                    });
                return void 0 === o || 0 === s.length ? r.some(function(r) {
                    return a.comparator(e, t, r)
                }) : s.some(function(e) {
                    return n(o, t, e)
                })
            }, e.prototype.comparator = function(e, t, r) {
                switch (t) {
                    case eh:
                    case eg:
                        return e < r;
                    case ef:
                    case em:
                        return e <= r;
                    case ep:
                    case ey:
                        return e > r;
                    case ev:
                    case eb:
                        return e >= r;
                    default:
                        return !1
                }
            }, e.prototype.versionComparator = function(e, t, r) {
                var i = e.compareTo(r);
                switch (t) {
                    case eh:
                    case eg:
                        return i < 0;
                    case ef:
                    case em:
                        return i <= 0;
                    case ep:
                    case ey:
                        return i > 0;
                    case ev:
                    case eb:
                        return i >= 0;
                    default:
                        return !1
                }
            }, e.prototype.matchesRegex = function(e, t) {
                return t.some(function(t) {
                    return !!new RegExp(t).exec(e)
                })
            }, e.prototype.containsNone = function(e) {
                return e.some(function(e) {
                    return "(none)" === e
                })
            }, e.prototype.containsBooleans = function(e) {
                return e.some(function(e) {
                    switch (e.toLowerCase()) {
                        case "true":
                        case "false":
                            return !0;
                        default:
                            return !1
                    }
                })
            }, e.prototype.parseNumber = function(e) {
                var t;
                return null != (t = Number(e)) ? t : void 0
            }, e.prototype.coerceString = function(e) {
                if (null != e) return "object" == typeof e ? JSON.stringify(e) : String(e)
            }, e.prototype.coerceStringArray = function(e) {
                var t = this;
                if (Array.isArray(e)) {
                    var r = e;
                    return r.map(function(e) {
                        return t.coerceString(e)
                    }).filter(Boolean)
                }
                var i = String(e);
                try {
                    var n = JSON.parse(i);
                    if (Array.isArray(n)) {
                        var r = e;
                        return r.map(function(e) {
                            return t.coerceString(e)
                        }).filter(Boolean)
                    }
                    var a = this.coerceString(i);
                    return a ? [a] : void 0
                } catch (e) {
                    var a = this.coerceString(i);
                    return a ? [a] : void 0
                }
            }, e.prototype.isSetOperator = function(e) {
                switch (e) {
                    case ex:
                    case ew:
                    case ek:
                    case ej:
                    case eS:
                    case e_:
                        return !0;
                    default:
                        return !1
                }
            }, e.prototype.setEquals = function(e, t) {
                var r = new Set(e),
                    i = new Set(t);
                return r.size === i.size && el([], es(i), !1).every(function(e) {
                    return r.has(e)
                })
            }, e.prototype.matchesSetContainsAll = function(e, t) {
                var r, i;
                if (e.length < t.length) return !1;
                try {
                    for (var n = eo(t), a = n.next(); !a.done; a = n.next()) {
                        var o = a.value;
                        if (!this.matchesIs(o, e)) return !1
                    }
                } catch (e) {
                    r = {
                        error: e
                    }
                } finally {
                    try {
                        a && !a.done && (i = n.return) && i.call(n)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return !0
            }, e.prototype.matchesSetContainsAny = function(e, t) {
                var r, i;
                try {
                    for (var n = eo(t), a = n.next(); !a.done; a = n.next()) {
                        var o = a.value;
                        if (this.matchesIs(o, e)) return !0
                    }
                } catch (e) {
                    r = {
                        error: e
                    }
                } finally {
                    try {
                        a && !a.done && (i = n.return) && i.call(n)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return !1
            }, e
        }(),
        eR = function(e, t) {
            var r, i, n = ei({}, e),
                a = [],
                o = t || Object.keys(n);
            try {
                for (var s = eo(o), l = s.next(); !l.done; l = s.next()) {
                    var u = l.value,
                        c = eD(u, n);
                    c && a.push.apply(a, el([], es(c), !1))
                }
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    l && !l.done && (i = s.return) && i.call(s)
                } finally {
                    if (r) throw r.error
                }
            }
            return a
        },
        eD = function(e, t, r) {
            void 0 === r && (r = []);
            var i, n, a = t[e];
            if (a) {
                if (!a.dependencies || 0 === a.dependencies.length) return delete t[a.key], [a];
                r.push(a.key);
                var o = [],
                    s = function(e) {
                        if (r.some(function(t) {
                                return t === e
                            })) throw Error("Detected a cycle between flags ".concat(r));
                        var i = eD(e, t, r);
                        i && o.push.apply(o, el([], es(i), !1))
                    };
                try {
                    for (var l = eo(a.dependencies), u = l.next(); !u.done; u = l.next()) {
                        var c = u.value;
                        s(c)
                    }
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        u && !u.done && (n = l.return) && n.call(l)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return o.push(a), r.pop(), delete t[a.key], o
            }
        };
    let eF = "function" == typeof ee.Buffer,
        eq = "function" == typeof TextDecoder ? new TextDecoder : void 0,
        eV = "function" == typeof TextEncoder ? new TextEncoder : void 0,
        eK = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),
        e$ = (r = {}, eK.forEach((e, t) => r[e] = t), r),
        ez = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
        eQ = String.fromCharCode.bind(String),
        eG = "function" == typeof Uint8Array.from ? Uint8Array.from.bind(Uint8Array) : e => new Uint8Array(Array.prototype.slice.call(e, 0)),
        eB = e => e.replace(/=/g, "").replace(/[+\/]/g, e => "+" == e ? "-" : "_"),
        eH = "function" == typeof btoa ? e => btoa(e) : eF ? e => ee.Buffer.from(e, "binary").toString("base64") : e => {
            let t, r, i, n, a = "",
                o = e.length % 3;
            for (let o = 0; o < e.length;) {
                if ((r = e.charCodeAt(o++)) > 255 || (i = e.charCodeAt(o++)) > 255 || (n = e.charCodeAt(o++)) > 255) throw TypeError("invalid character found");
                a += eK[(t = r << 16 | i << 8 | n) >> 18 & 63] + eK[t >> 12 & 63] + eK[t >> 6 & 63] + eK[63 & t]
            }
            return o ? a.slice(0, o - 3) + "===".substring(o) : a
        },
        eW = eF ? e => ee.Buffer.from(e).toString("base64") : e => {
            let t = [];
            for (let r = 0, i = e.length; r < i; r += 4096) t.push(eQ.apply(null, e.subarray(r, r + 4096)));
            return eH(t.join(""))
        },
        eJ = e => {
            if (e.length < 2) {
                var t = e.charCodeAt(0);
                return t < 128 ? e : t < 2048 ? eQ(192 | t >>> 6) + eQ(128 | 63 & t) : eQ(224 | t >>> 12 & 15) + eQ(128 | t >>> 6 & 63) + eQ(128 | 63 & t)
            }
            var t = 65536 + (e.charCodeAt(0) - 55296) * 1024 + (e.charCodeAt(1) - 56320);
            return eQ(240 | t >>> 18 & 7) + eQ(128 | t >>> 12 & 63) + eQ(128 | t >>> 6 & 63) + eQ(128 | 63 & t)
        },
        eY = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
        eX = eF ? e => ee.Buffer.from(e, "utf8").toString("base64") : eV ? e => eW(eV.encode(e)) : e => eH(e.replace(eY, eJ)),
        eZ = (e, t = !1) => t ? eB(eX(e)) : eX(e),
        e0 = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
        e1 = e => {
            switch (e.length) {
                case 4:
                    var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
                    return eQ((t >>> 10) + 55296) + eQ((1023 & t) + 56320);
                case 3:
                    return eQ((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
                default:
                    return eQ((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1))
            }
        },
        e2 = "function" == typeof atob ? e => atob(e.replace(/[^A-Za-z0-9\+\/]/g, "")) : eF ? e => ee.Buffer.from(e, "base64").toString("binary") : e => {
            let t, r, i;
            if (e = e.replace(/\s+/g, ""), !ez.test(e)) throw TypeError("malformed base64.");
            e += "==".slice(2 - (3 & e.length));
            let n = [];
            for (let a = 0; a < e.length;) t = e$[e.charAt(a++)] << 18 | e$[e.charAt(a++)] << 12 | (r = e$[e.charAt(a++)]) << 6 | (i = e$[e.charAt(a++)]), 64 === r ? n.push(eQ(t >> 16 & 255)) : 64 === i ? n.push(eQ(t >> 16 & 255, t >> 8 & 255)) : n.push(eQ(t >> 16 & 255, t >> 8 & 255, 255 & t));
            return n.join("")
        },
        e3 = eF ? e => eG(ee.Buffer.from(e, "base64")) : e => eG(e2(e).split("").map(e => e.charCodeAt(0))),
        e5 = eF ? e => ee.Buffer.from(e, "base64").toString("utf8") : eq ? e => eq.decode(e3(e)) : e => e2(e).replace(e0, e1);
    var e6 = function(e) {
            function t(r, i) {
                var n = e.call(this, i) || this;
                return n.statusCode = r, Object.setPrototypeOf(n, t.prototype), n
            }
            return er(t, e), t
        }(Error),
        e4 = function(e) {
            function t(r) {
                var i = e.call(this, r) || this;
                return Object.setPrototypeOf(i, t.prototype), i
            }
            return er(t, e), t
        }(Error),
        e8 = function() {
            function e(e, t, r) {
                this.deploymentKey = e, this.serverUrl = t, this.httpClient = r
            }
            return e.prototype.getVariants = function(e, t) {
                return en(this, void 0, void 0, function() {
                    var r, i, n, a;
                    return ea(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return r = eZ(JSON.stringify(e), !0), i = {
                                    Authorization: "Api-Key ".concat(this.deploymentKey),
                                    "X-Amp-Exp-User": r
                                }, (null == t ? void 0 : t.flagKeys) && (i["X-Amp-Exp-Flag-Keys"] = eZ(JSON.stringify(t.flagKeys), !0)), (null == t ? void 0 : t.trackingOption) && (i["X-Amp-Exp-Track"] = t.trackingOption), (null == t ? void 0 : t.exposureTrackingOption) && (i["X-Amp-Exp-Exposure-Track"] = t.exposureTrackingOption), n = new URL("".concat(this.serverUrl, "/sdk/v2/vardata?v=0")), (null == t ? void 0 : t.evaluationMode) && n.searchParams.append("eval_mode", null == t ? void 0 : t.evaluationMode), (null == t ? void 0 : t.deliveryMethod) && n.searchParams.append("delivery_method", null == t ? void 0 : t.deliveryMethod), [4, this.httpClient.request({
                                    requestUrl: n.toString(),
                                    method: "GET",
                                    headers: i,
                                    timeoutMillis: null == t ? void 0 : t.timeoutMillis
                                })];
                            case 1:
                                if (200 != (a = o.sent()).status) throw new e6(a.status, "Fetch error response: status=".concat(a.status));
                                return [2, JSON.parse(a.body)]
                        }
                    })
                })
            }, e
        }(),
        e7 = function() {
            function e(e, t, r) {
                this.deploymentKey = e, this.serverUrl = t, this.httpClient = r
            }
            return e.prototype.getFlags = function(e) {
                return en(this, void 0, void 0, function() {
                    var t, r;
                    return ea(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return t = {
                                    Authorization: "Api-Key ".concat(this.deploymentKey)
                                }, (null == e ? void 0 : e.libraryName) && (null == e ? void 0 : e.libraryVersion) && (t["X-Amp-Exp-Library"] = "".concat(e.libraryName, "/").concat(e.libraryVersion)), (null == e ? void 0 : e.user) && (t["X-Amp-Exp-User"] = eZ(JSON.stringify(e.user), !0)), [4, this.httpClient.request({
                                    requestUrl: "".concat(this.serverUrl, "/sdk/v2/flags") + ((null == e ? void 0 : e.deliveryMethod) ? "?delivery_method=".concat(e.deliveryMethod) : ""),
                                    method: "GET",
                                    headers: t,
                                    timeoutMillis: null == e ? void 0 : e.timeoutMillis
                                })];
                            case 1:
                                if (200 != (r = i.sent()).status) throw Error("Flags error response: status=".concat(r.status));
                                return [2, JSON.parse(r.body).reduce(function(e, t) {
                                    return e[t.key] = t, e
                                }, {})]
                        }
                    })
                })
            }, e
        }(),
        e9 = "u" > typeof globalThis ? globalThis : e.g || self,
        te = function() {
            return "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof self ? self : e.g
        },
        tt = function() {
            var e = te();
            if (e) try {
                var t = "EXP_test";
                return e.localStorage.setItem(t, t), e.localStorage.removeItem(t), !0
            } catch (e) {}
            return !1
        },
        tr = function() {
            function e(e, t) {
                this.poller = void 0, this.action = e, this.ms = t
            }
            return e.prototype.start = function() {
                this.poller || (this.poller = e9.setInterval(this.action, this.ms), this.action())
            }, e.prototype.stop = function() {
                this.poller && (e9.clearInterval(this.poller), this.poller = void 0)
            }, e
        }(),
        ti = function() {
            function e() {}
            return e.prototype.getApplicationContext = function() {
                return {
                    versionName: this.versionName,
                    language: tn(),
                    platform: "Web",
                    os: void 0,
                    deviceModel: void 0
                }
            }, e
        }(),
        tn = function() {
            return "u" > typeof navigator && (navigator.languages && navigator.languages[0] || navigator.language) || ""
        },
        ta = function() {
            function e() {
                this.queue = []
            }
            return e.prototype.logEvent = function(e) {
                this.receiver ? this.receiver(e) : this.queue.length < 512 && this.queue.push(e)
            }, e.prototype.setEventReceiver = function(e) {
                this.receiver = e, this.queue.length > 0 && (this.queue.forEach(function(t) {
                    e(t)
                }), this.queue = [])
            }, e
        }(),
        to = function() {
            return (to = Object.assign || function(e) {
                for (var t, r = 1, i = arguments.length; r < i; r++)
                    for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e
            }).apply(this, arguments)
        };

    function ts(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            r = t && e[t],
            i = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && i >= e.length && (e = void 0), {
                    value: e && e[i++],
                    done: !e
                }
            }
        };
        throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function tl(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i, n, a = r.call(e),
            o = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(i = a.next()).done;) o.push(i.value)
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                i && !i.done && (r = a.return) && r.call(a)
            } finally {
                if (n) throw n.error
            }
        }
        return o
    }
    "function" == typeof SuppressedError && SuppressedError;
    var tu = function(e, t) {
        var r, i, n = typeof e;
        if (n !== typeof t) return !1;
        try {
            for (var a = ts(["string", "number", "boolean", "undefined"]), o = a.next(); !o.done; o = a.next())
                if (o.value === n) return e === t
        } catch (e) {
            r = {
                error: e
            }
        } finally {
            try {
                o && !o.done && (i = a.return) && i.call(a)
            } finally {
                if (r) throw r.error
            }
        }
        if (null == e && null == t) return !0;
        if (null == e || null == t || e.length !== t.length) return !1;
        var s = Array.isArray(e),
            l = Array.isArray(t);
        if (s !== l) return !1;
        if (s && l) {
            for (var u = 0; u < e.length; u++)
                if (!tu(e[u], t[u])) return !1
        } else {
            if (!tu(Object.keys(e).sort(), Object.keys(t).sort())) return !1;
            var c = !0;
            return Object.keys(e).forEach(function(r) {
                tu(e[r], t[r]) || (c = !1)
            }), c
        }
        return !0
    };
    Object.entries || (Object.entries = function(e) {
        for (var t = Object.keys(e), r = t.length, i = Array(r); r--;) i[r] = [t[r], e[t[r]]];
        return i
    });
    var tc = function() {
            function e() {
                this.identity = {
                    userProperties: {}
                }, this.listeners = new Set
            }
            return e.prototype.editIdentity = function() {
                var e = this,
                    t = to({}, this.identity.userProperties),
                    r = to(to({}, this.identity), {
                        userProperties: t
                    });
                return {
                    setUserId: function(e) {
                        return r.userId = e, this
                    },
                    setDeviceId: function(e) {
                        return r.deviceId = e, this
                    },
                    setUserProperties: function(e) {
                        return r.userProperties = e, this
                    },
                    setOptOut: function(e) {
                        return r.optOut = e, this
                    },
                    updateUserProperties: function(e) {
                        var t, i, n, a, o, s, l = r.userProperties || {};
                        try {
                            for (var u = ts(Object.entries(e)), c = u.next(); !c.done; c = u.next()) {
                                var d = tl(c.value, 2),
                                    h = d[0],
                                    f = d[1];
                                switch (h) {
                                    case "$set":
                                        try {
                                            for (var p = (n = void 0, ts(Object.entries(f))), v = p.next(); !v.done; v = p.next()) {
                                                var g = tl(v.value, 2),
                                                    m = g[0],
                                                    y = g[1];
                                                l[m] = y
                                            }
                                        } catch (e) {
                                            n = {
                                                error: e
                                            }
                                        } finally {
                                            try {
                                                v && !v.done && (a = p.return) && a.call(p)
                                            } finally {
                                                if (n) throw n.error
                                            }
                                        }
                                        break;
                                    case "$unset":
                                        try {
                                            for (var b = (o = void 0, ts(Object.keys(f))), x = b.next(); !x.done; x = b.next()) {
                                                var m = x.value;
                                                delete l[m]
                                            }
                                        } catch (e) {
                                            o = {
                                                error: e
                                            }
                                        } finally {
                                            try {
                                                x && !x.done && (s = b.return) && s.call(b)
                                            } finally {
                                                if (o) throw o.error
                                            }
                                        }
                                        break;
                                    case "$clearAll":
                                        l = {}
                                }
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                c && !c.done && (i = u.return) && i.call(u)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return r.userProperties = l, this
                    },
                    commit: function() {
                        return e.setIdentity(r), this
                    }
                }
            }, e.prototype.getIdentity = function() {
                return to({}, this.identity)
            }, e.prototype.setIdentity = function(e) {
                var t = to({}, this.identity);
                this.identity = to({}, e), tu(t, this.identity) || this.listeners.forEach(function(t) {
                    t(e)
                })
            }, e.prototype.addIdentityListener = function(e) {
                this.listeners.add(e)
            }, e.prototype.removeIdentityListener = function(e) {
                this.listeners.delete(e)
            }, e
        }(),
        td = "u" > typeof globalThis ? globalThis : e.g,
        th = (function() {
            function e() {
                this.identityStore = new tc, this.eventBridge = new ta, this.applicationContextProvider = new ti
            }
            e.getInstance = function(t) {
                return td.analyticsConnectorInstances || (td.analyticsConnectorInstances = {}), td.analyticsConnectorInstances[t] || (td.analyticsConnectorInstances[t] = new e), td.analyticsConnectorInstances[t]
            }
        }(), e.i(484404));

    function tf(e) {
        this.amplitudeInstance = e
    }

    function tp(e) {
        this.amplitudeInstance = e
    }
    tf.prototype.getUser = function() {
        var e, t, r, i, n, a, o, s, l, u;
        return {
            device_id: null == (t = null == (e = this.amplitudeInstance) ? void 0 : e.options) ? void 0 : t.deviceId,
            user_id: null == (i = null == (r = this.amplitudeInstance) ? void 0 : r.options) ? void 0 : i.userId,
            version: null == (a = null == (n = this.amplitudeInstance) ? void 0 : n.options) ? void 0 : a.versionName,
            language: null == (s = null == (o = this.amplitudeInstance) ? void 0 : o.options) ? void 0 : s.language,
            platform: null == (u = null == (l = this.amplitudeInstance) ? void 0 : l.options) ? void 0 : u.platform,
            os: this.getOs(),
            device_model: this.getDeviceModel()
        }
    }, tf.prototype.getOs = function() {
        var e, t, r, i, n, a;
        return [null == (r = null == (t = null == (e = this.amplitudeInstance) ? void 0 : e._ua) ? void 0 : t.browser) ? void 0 : r.name, null == (a = null == (n = null == (i = this.amplitudeInstance) ? void 0 : i._ua) ? void 0 : n.browser) ? void 0 : a.major].filter(function(e) {
            return null != e
        }).join(" ")
    }, tf.prototype.getDeviceModel = function() {
        var e, t, r;
        return null == (r = null == (t = null == (e = this.amplitudeInstance) ? void 0 : e._ua) ? void 0 : t.os) ? void 0 : r.name
    }, tp.prototype.track = function(e) {
        this.amplitudeInstance.logEvent(e.name, e.properties)
    }, tp.prototype.setUserProperty = function(e) {
        var t, r;
        this.amplitudeInstance.setUserProperties(((t = {})[e.userProperty] = null == (r = e.variant) ? void 0 : r.value, t))
    }, tp.prototype.unsetUserProperty = function(e) {
        var t;
        this.amplitudeInstance._logEvent("$identify", null, null, {
            $unset: ((t = {})[e.userProperty] = "-", t)
        })
    };
    var tv = function() {
        return (tv = Object.assign || function(e) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
                for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }).apply(this, arguments)
    };

    function tg(e, t, r, i) {
        return new(r || (r = Promise))(function(n, a) {
            function o(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function l(e) {
                var t;
                e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, s)
            }
            l((i = i.apply(e, t || [])).next())
        })
    }

    function tm(e, t) {
        var r, i, n, a = {
                label: 0,
                sent: function() {
                    if (1 & n[0]) throw n[1];
                    return n[1]
                },
                trys: [],
                ops: []
            },
            o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return o.next = s(0), o.throw = s(1), o.return = s(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function s(s) {
            return function(l) {
                var u = [s, l];
                if (r) throw TypeError("Generator is already executing.");
                for (; o && (o = 0, u[0] && (a = 0)), a;) try {
                    if (r = 1, i && (n = 2 & u[0] ? i.return : u[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, u[1])).done) return n;
                    switch (i = 0, n && (u = [2 & u[0], n.value]), u[0]) {
                        case 0:
                        case 1:
                            n = u;
                            break;
                        case 4:
                            return a.label++, {
                                value: u[1],
                                done: !1
                            };
                        case 5:
                            a.label++, i = u[1], u = [0];
                            continue;
                        case 7:
                            u = a.ops.pop(), a.trys.pop();
                            continue;
                        default:
                            if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === u[0] && (!n || u[1] > n[0] && u[1] < n[3])) {
                                a.label = u[1];
                                break
                            }
                            if (6 === u[0] && a.label < n[1]) {
                                a.label = n[1], n = u;
                                break
                            }
                            if (n && a.label < n[2]) {
                                a.label = n[2], a.ops.push(u);
                                break
                            }
                            n[2] && a.ops.pop(), a.trys.pop();
                            continue
                    }
                    u = t.call(e, a)
                } catch (e) {
                    u = [6, e], i = 0
                } finally {
                    r = n = 0
                }
                if (5 & u[0]) throw u[1];
                return {
                    value: u[0] ? u[1] : void 0,
                    done: !0
                }
            }
        }
    }

    function ty(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            r = t && e[t],
            i = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && i >= e.length && (e = void 0), {
                    value: e && e[i++],
                    done: !e
                }
            }
        };
        throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function tb(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i, n, a = r.call(e),
            o = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(i = a.next()).done;) o.push(i.value)
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                i && !i.done && (r = a.return) && r.call(a)
            } finally {
                if (n) throw n.error
            }
        }
        return o
    }

    function tx(e, t, r) {
        if (r || 2 == arguments.length)
            for (var i, n = 0, a = t.length; n < a; n++) !i && n in t || (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
        return e.concat(i || Array.prototype.slice.call(t))
    }
    "function" == typeof SuppressedError && SuppressedError;
    var tw = function(e, t) {
            void 0 === t && (t = !1);
            var r, i, n = tS(e, t),
                a = void 0,
                o = e9.document.cookie.split("; ");
            try {
                for (var s = ty(o), l = s.next(); !l.done; l = s.next()) {
                    var u = l.value,
                        c = tb(u.split("=", 2), 2),
                        d = c[0],
                        h = c[1];
                    d === n && (a = decodeURIComponent(h))
                }
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    l && !l.done && (i = s.return) && i.call(s)
                } finally {
                    if (r) throw r.error
                }
            }
            if (a) try {
                if (t) {
                    var f = atob(a);
                    return JSON.parse(decodeURIComponent(f))
                }
                var p = a.split("."),
                    v = void 0;
                return p.length >= 2 && p[1] && (v = atob(p[1])), {
                    deviceId: p[0],
                    userId: v
                }
            } catch (e) {
                return
            }
        },
        tk = function(e) {
            var t = tS(e, !0);
            try {
                var r = e9.localStorage.getItem(t);
                if (!r) return;
                var i = JSON.parse(r);
                if ("object" != typeof i) return;
                return i
            } catch (e) {
                return
            }
        },
        tj = function(e) {
            var t = tS(e, !0);
            try {
                var r = e9.sessionStorage.getItem(t);
                if (!r) return;
                var i = JSON.parse(r);
                if ("object" != typeof i) return;
                return i
            } catch (e) {
                return
            }
        },
        tS = function(e, t) {
            if (t) {
                if ((null == e ? void 0 : e.length) < 10) return;
                return "AMP_".concat(e.substring(0, 10))
            }
            if (!((null == e ? void 0 : e.length) < 6)) return "amp_".concat(e.substring(0, 6))
        },
        t_ = (function() {
            function e(e, t, r) {
                this.type = "integration", this.apiKey = e, this.identityStore = t.identityStore, this.eventBridge = t.eventBridge, this.contextProvider = t.applicationContextProvider, this.timeoutMillis = r, this.loadPersistedState(), r <= 0 && (this.setup = void 0)
            }
            e.prototype.setup = function(e, t) {
                return tg(this, void 0, void 0, function() {
                    return tm(this, function(r) {
                        return (null == e ? void 0 : e.automaticFetchOnAmplitudeIdentityChange) && this.identityStore.addIdentityListener(function() {
                            null == t || t.fetch()
                        }), [2, this.waitForConnectorIdentity(this.timeoutMillis)]
                    })
                })
            }, e.prototype.getUser = function() {
                var e = this.identityStore.getIdentity();
                return {
                    user_id: e.userId,
                    device_id: e.deviceId,
                    user_properties: e.userProperties,
                    version: this.contextProvider.versionName
                }
            }, e.prototype.track = function(e) {
                return !!this.eventBridge.receiver && (this.eventBridge.logEvent({
                    eventType: e.eventType,
                    eventProperties: e.eventProperties
                }), !0)
            }, e.prototype.loadPersistedState = function() {
                if (!this.apiKey || this.apiKey.startsWith("client-")) return !1;
                var e = tw(this.apiKey, !0);
                return !!(e || (e = tw(this.apiKey, !1)) || (e = tk(this.apiKey)) || (e = tj(this.apiKey))) && (this.commitIdentityToConnector(e), !0)
            }, e.prototype.commitIdentityToConnector = function(e) {
                var t = this.identityStore.editIdentity();
                t.setDeviceId(e.deviceId), e.userId && t.setUserId(e.userId), t.commit()
            }, e.prototype.waitForConnectorIdentity = function(e) {
                return tg(this, void 0, void 0, function() {
                    var t, r = this;
                    return tm(this, function(i) {
                        return (t = this.identityStore.getIdentity()).userId || t.deviceId ? [2] : [2, Promise.race([new Promise(function(e) {
                            var t = function() {
                                e(), r.identityStore.removeIdentityListener(t)
                            };
                            r.identityStore.addIdentityListener(t)
                        }), new Promise(function(t, r) {
                            e9.setTimeout(r, e, "Timed out waiting for Amplitude Analytics SDK to initialize.")
                        })])]
                    })
                })
            }
        }(), e9.fetch || function(e, t) {
            return t = t || {}, new Promise(function(r, i) {
                var n = new XMLHttpRequest,
                    a = [],
                    o = [],
                    s = {},
                    l = function() {
                        return {
                            ok: 2 == (n.status / 100 | 0),
                            statusText: n.statusText,
                            status: n.status,
                            url: n.responseURL,
                            text: function() {
                                return Promise.resolve(n.responseText)
                            },
                            json: function() {
                                return Promise.resolve(JSON.parse(n.responseText))
                            },
                            blob: function() {
                                return Promise.resolve(new Blob([n.response]))
                            },
                            clone: l,
                            headers: {
                                keys: function() {
                                    return a
                                },
                                entries: function() {
                                    return o
                                },
                                get: function(e) {
                                    return s[e.toLowerCase()]
                                },
                                has: function(e) {
                                    return e.toLowerCase() in s
                                }
                            }
                        }
                    };
                for (var u in n.open(t.method || "get", e, !0), n.onload = function() {
                        n.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(e, t, r) {
                            a.push(t = t.toLowerCase()), o.push([t, r]), s[t] = s[t] ? s[t] + "," + r : r
                        }), r(l())
                    }, n.onerror = i, n.withCredentials = "include" == t.credentials, t.headers) n.setRequestHeader(u, t.headers[u]);
                n.send(t.body || null)
            })
        }),
        tE = function() {
            function e(e) {
                this.client = e
            }
            return e.prototype.request = function(e) {
                return tg(this, void 0, void 0, function() {
                    return tm(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.client.request(e.requestUrl, e.method, e.headers, null, e.timeoutMillis)];
                            case 1:
                                return [2, t.sent()]
                        }
                    })
                })
            }, e
        }(),
        tC = {
            request: function(e, t, r, i, n) {
                var a;
                return a = tg(void 0, void 0, void 0, function() {
                    var n, a;
                    return tm(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, t_(e, {
                                    method: t,
                                    headers: r,
                                    body: i
                                })];
                            case 1:
                                return a = {
                                    status: (n = o.sent()).status
                                }, [4, n.text()];
                            case 2:
                                return a.body = o.sent(), [2, a]
                        }
                    })
                }), null == n || n <= 0 ? a : new Promise(function(e, t) {
                    e9.setTimeout(function() {
                        t(new e4("Request timeout after " + n + " milliseconds"))
                    }, n), a.then(e, t)
                })
            }
        };
    (i = o || (o = {}))[i.Disable = 0] = "Disable", i[i.Error = 1] = "Error", i[i.Warn = 2] = "Warn", i[i.Info = 3] = "Info", i[i.Debug = 4] = "Debug", i[i.Verbose = 5] = "Verbose", (n = s || (s = {})).LocalStorage = "localStorage", n.InitialVariants = "initialVariants", (a = l || (l = {})).LocalStorage = "storage", a.InitialVariants = "initial", a.SecondaryLocalStorage = "secondary-storage", a.SecondaryInitialVariants = "secondary-initial", a.FallbackInline = "fallback-inline", a.FallbackConfig = "fallback-config", a.LocalEvaluation = "local-evaluation";
    var tO = function(e) {
            return !e || e === l.FallbackInline || e === l.FallbackConfig || e === l.SecondaryInitialVariants
        },
        tP = {
            debug: !1,
            logLevel: o.Error,
            loggerProvider: null,
            instanceName: "$default_instance",
            fallbackVariant: {},
            initialVariants: {},
            initialFlags: void 0,
            source: s.LocalStorage,
            serverUrl: "https://api.lab.amplitude.com",
            flagsServerUrl: "https://flag.lab.amplitude.com",
            serverZone: "US",
            fetchTimeoutMillis: 1e4,
            retryFetchOnFailure: !0,
            throwOnError: !1,
            automaticExposureTracking: !0,
            pollOnStart: !0,
            flagConfigPollingIntervalMillis: 3e5,
            fetchOnStart: !0,
            automaticFetchOnAmplitudeIdentityChange: !1,
            userProvider: null,
            analyticsProvider: null,
            exposureTrackingProvider: null,
            httpClient: tC
        },
        tN = "1.21.0",
        tI = function() {
            function e(e, t) {
                var r, i = this;
                this.isReady = new Promise(function(e) {
                    i.resolve = e
                }), this.config = e, this.client = t;
                var n = null != (r = e.instanceName) ? r : tP.instanceName;
                this.queue = new tA(n), this.cache = new tM(n)
            }
            return e.prototype.ready = function() {
                return this.integration ? this.isReady : Promise.resolve()
            }, e.prototype.setIntegration = function(e) {
                var t = this;
                this.integration && this.integration.teardown && this.integration.teardown(), this.integration = e, e.setup ? this.integration.setup(this.config, this.client).then(function() {
                    t.queue.setTracker(t.integration.track.bind(e)), t.resolve()
                }, function() {
                    t.queue.setTracker(t.integration.track.bind(e)), t.resolve()
                }) : (this.queue.setTracker(this.integration.track.bind(e)), this.resolve())
            }, e.prototype.getUser = function() {
                return this.integration ? this.integration.getUser() : {}
            }, e.prototype.track = function(e, t) {
                if (this.cache.shouldTrack(e, t)) {
                    var r = this.getExposureEvent(e);
                    this.queue.push(r)
                }
            }, e.prototype.getExposureEvent = function(e) {
                var t, r, i, n = {
                    eventType: "$exposure",
                    eventProperties: e
                };
                return (null == (t = e.metadata) ? void 0 : t.exposureEvent) ? n = {
                    eventType: null == (r = e.metadata) ? void 0 : r.exposureEvent,
                    eventProperties: e
                } : (null == (i = e.metadata) ? void 0 : i.deliveryMethod) === "web" && (n = {
                    eventType: "$impression",
                    eventProperties: e
                }), n
            }, e
        }(),
        tM = function() {
            function e(e) {
                this.isSessionStorageAvailable = tT(), this.inMemoryCache = {}, this.identity = {}, this.storageKey = "EXP_sent_v3_".concat(e), this.isSessionStorageAvailable && (e9.sessionStorage.removeItem("EXP_sent_".concat(e)), e9.sessionStorage.removeItem("EXP_sent_v2_".concat(e)))
            }
            return e.prototype.shouldTrack = function(e, t) {
                if ((null == (r = e.metadata) ? void 0 : r.deliveryMethod) === "web") return !0;
                var r, i, n = {
                    userId: null == t ? void 0 : t.user_id,
                    deviceId: null == t ? void 0 : t.device_id
                };
                this.identityEquals(this.identity, n) || this.clearCache(), this.identity = n, this.loadCache();
                var a = e.flag_key in this.inMemoryCache,
                    o = this.inMemoryCache[e.flag_key],
                    s = null != (i = e.variant) ? i : null,
                    l = !1;
                return a && (null != o ? o : null) === s || (l = !0, this.inMemoryCache[e.flag_key] = s), this.storeCache(), l
            }, e.prototype.clearCache = function() {
                this.inMemoryCache = {}, this.isSessionStorageAvailable && e9.sessionStorage.removeItem(this.storageKey)
            }, e.prototype.identityEquals = function(e, t) {
                return e.userId && t.userId ? e.userId === t.userId : !e.userId && !t.userId && e.deviceId === t.deviceId
            }, e.prototype.loadCache = function() {
                if (this.isSessionStorageAvailable) {
                    var e = e9.sessionStorage.getItem(this.storageKey);
                    this.inMemoryCache = e ? JSON.parse(e) : {}
                }
            }, e.prototype.storeCache = function() {
                if (this.isSessionStorageAvailable) try {
                    e9.sessionStorage.setItem(this.storageKey, JSON.stringify(this.inMemoryCache))
                } catch (e) {}
            }, e
        }(),
        tA = function() {
            function e(e, t) {
                void 0 === t && (t = 512), this.isLocalStorageAvailable = tt(), this.inMemoryQueue = [], this.storageKey = "EXP_unsent_".concat(e), this.maxQueueSize = t
            }
            return e.prototype.push = function(e) {
                this.loadQueue(), this.inMemoryQueue.push(e), this.flush(), this.storeQueue()
            }, e.prototype.setTracker = function(e) {
                var t = this;
                this.tracker = e, this.poller = e9.setInterval(function() {
                    t.loadFlushStore()
                }, 1e3), this.loadFlushStore()
            }, e.prototype.flush = function() {
                if (this.tracker && 0 !== this.inMemoryQueue.length) {
                    for (var e = 0; e < this.inMemoryQueue.length; e++) try {
                        if (!this.tracker(this.inMemoryQueue[e])) break
                    } catch (e) {
                        break
                    }
                    this.inMemoryQueue = this.inMemoryQueue.slice(e), 0 === this.inMemoryQueue.length && this.poller && (e9.clearInterval(this.poller), this.poller = void 0)
                }
            }, e.prototype.loadQueue = function() {
                if (this.isLocalStorageAvailable) {
                    var e = e9.localStorage.getItem(this.storageKey);
                    this.inMemoryQueue = e ? JSON.parse(e) : []
                }
            }, e.prototype.storeQueue = function() {
                this.isLocalStorageAvailable && (this.inMemoryQueue.length > this.maxQueueSize && (this.inMemoryQueue = this.inMemoryQueue.slice(this.inMemoryQueue.length - this.maxQueueSize)), e9.localStorage.setItem(this.storageKey, JSON.stringify(this.inMemoryQueue)))
            }, e.prototype.loadFlushStore = function() {
                this.loadQueue(), this.flush(), this.storeQueue()
            }, e
        }(),
        tT = function() {
            var e = te();
            if (e) try {
                var t = "EXP_test";
                return e.sessionStorage.setItem(t, t), e.sessionStorage.removeItem(t), !0
            } catch (e) {}
            return !1
        },
        tL = function() {
            function e(e, t) {
                void 0 === t && (t = o.Error), this.logger = e, this.logLevel = t
            }
            return e.prototype.error = function(e) {
                for (var t, r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
                this.logLevel >= o.Error && (t = this.logger).error.apply(t, tx([e], tb(r), !1))
            }, e.prototype.warn = function(e) {
                for (var t, r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
                this.logLevel >= o.Warn && (t = this.logger).warn.apply(t, tx([e], tb(r), !1))
            }, e.prototype.info = function(e) {
                for (var t, r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
                this.logLevel >= o.Info && (t = this.logger).info.apply(t, tx([e], tb(r), !1))
            }, e.prototype.debug = function(e) {
                for (var t, r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
                this.logLevel >= o.Debug && (t = this.logger).debug.apply(t, tx([e], tb(r), !1))
            }, e.prototype.verbose = function(e) {
                for (var t, r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
                this.logLevel >= o.Verbose && (t = this.logger).verbose.apply(t, tx([e], tb(r), !1))
            }, e
        }(),
        tU = function() {
            function e() {}
            return e.prototype.error = function(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                console.error.apply(console, tx([e], tb(t), !1))
            }, e.prototype.warn = function(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                console.warn.apply(console, tx([e], tb(t), !1))
            }, e.prototype.info = function(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                console.info.apply(console, tx([e], tb(t), !1))
            }, e.prototype.debug = function(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                console.debug.apply(console, tx([e], tb(t), !1))
            }, e.prototype.verbose = function(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                console.debug.apply(console, tx([e], tb(t), !1))
            }, e
        }(),
        tR = function() {
            function e() {
                this.globalScope = te()
            }
            return e.prototype.get = function(e) {
                var t;
                return null == (t = this.globalScope) ? void 0 : t.localStorage.getItem(e)
            }, e.prototype.put = function(e, t) {
                var r;
                null == (r = this.globalScope) || r.localStorage.setItem(e, t)
            }, e.prototype.delete = function(e) {
                var t;
                null == (t = this.globalScope) || t.localStorage.removeItem(e)
            }, e
        }(),
        tD = function(e, t, r) {
            var i = e.substring(e.length - 6);
            return new tK("amp-exp-".concat(t, "-").concat(i), r, t$)
        },
        tF = function(e, t, r) {
            void 0 === r && (r = new tR);
            var i = e.substring(e.length - 6);
            return new tK("amp-exp-".concat(t, "-").concat(i, "-flags"), r)
        },
        tq = function(e, t, r) {
            void 0 === r && (r = new tR);
            var i = e.substring(e.length - 6);
            return new tV("amp-exp-".concat(t, "-").concat(i, "-variants-options"), r)
        },
        tV = function() {
            function e(e, t) {
                this.namespace = e, this.storage = t
            }
            return e.prototype.get = function() {
                return this.value
            }, e.prototype.put = function(e) {
                this.value = e
            }, e.prototype.load = function() {
                var e = this.storage.get(this.namespace);
                e && (this.value = JSON.parse(e))
            }, e.prototype.store = function() {
                void 0 === this.value ? this.storage.delete(this.namespace) : this.storage.put(this.namespace, JSON.stringify(this.value))
            }, e
        }(),
        tK = function() {
            function e(e, t, r) {
                this.cache = {}, this.namespace = e, this.storage = t, this.transformer = r
            }
            return e.prototype.get = function(e) {
                return this.cache[e]
            }, e.prototype.getAll = function() {
                return tv({}, this.cache)
            }, e.prototype.put = function(e, t) {
                this.cache[e] = t
            }, e.prototype.putAll = function(e) {
                var t, r;
                try {
                    for (var i = ty(Object.keys(e)), n = i.next(); !n.done; n = i.next()) {
                        var a = n.value;
                        this.cache[a] = e[a]
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        n && !n.done && (r = i.return) && r.call(i)
                    } finally {
                        if (t) throw t.error
                    }
                }
            }, e.prototype.remove = function(e) {
                delete this.cache[e]
            }, e.prototype.clear = function() {
                this.cache = {}
            }, e.prototype.load = function() {
                var e, t, r, i = this.storage.get(this.namespace);
                try {
                    r = JSON.parse(i) || {}
                } catch (e) {
                    return
                }
                var n = {};
                try {
                    for (var a = ty(Object.keys(r)), o = a.next(); !o.done; o = a.next()) {
                        var s = o.value;
                        try {
                            var l = void 0;
                            (l = this.transformer ? this.transformer(r[s]) : r[s]) && (n[s] = l)
                        } catch (e) {}
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        o && !o.done && (t = a.return) && t.call(a)
                    } finally {
                        if (e) throw e.error
                    }
                }
                this.clear(), this.putAll(n)
            }, e.prototype.store = function(e) {
                void 0 === e && (e = this.cache), this.storage.put(this.namespace, JSON.stringify(e))
            }, e
        }(),
        t$ = function(e) {
            if ("string" == typeof e) return {
                key: e,
                value: e
            };
            if ("object" == typeof e) {
                var t = e.key,
                    r = e.value,
                    i = e.payload,
                    n = e.metadata,
                    a = e.expKey;
                n && n.experimentKey ? a = n.experimentKey : a && ((n = n || {}).experimentKey = a);
                var o = {};
                return t ? o.key = t : r && (o.key = r), r && (o.value = r), n && (o.metadata = n), i && (o.payload = i), a && (o.expKey = a), o
            }
        },
        tz = function() {
            function e() {
                this.globalScope = te()
            }
            return e.prototype.get = function(e) {
                var t;
                return null == (t = this.globalScope) ? void 0 : t.sessionStorage.getItem(e)
            }, e.prototype.put = function(e, t) {
                var r;
                null == (r = this.globalScope) || r.sessionStorage.setItem(e, t)
            }, e.prototype.delete = function(e) {
                var t;
                null == (t = this.globalScope) || t.sessionStorage.removeItem(e)
            }, e
        }(),
        tQ = function(e, t, r, i) {
            var n, a = null == r ? void 0 : r.value,
                o = "[Experiment] ".concat(t);
            return {
                name: "[Experiment] Exposure",
                user: e,
                key: t,
                variant: r,
                userProperty: o,
                properties: {
                    key: t,
                    variant: a,
                    source: i
                },
                userProperties: ((n = {})[o] = a, n)
            }
        },
        tG = function(e) {
            return null == e
        },
        tB = function(e) {
            return !!tG(e) || e && 0 === Object.keys(e).length
        },
        tH = function(e) {
            if (!e || "object" != typeof e) return {};
            var t, r, i = {};
            try {
                for (var n = ty(Object.entries(e)), a = n.next(); !a.done; a = n.next()) {
                    var o = tb(a.value, 2),
                        s = o[0],
                        l = o[1];
                    tG(l) || (i[s] = l)
                }
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (r = n.return) && r.call(n)
                } finally {
                    if (t) throw t.error
                }
            }
            return i
        },
        tW = function(e) {
            var t;
            return (null == (t = null == e ? void 0 : e.metadata) ? void 0 : t.evaluationMode) === "local"
        },
        tJ = function() {
            function e(e, t, r, i) {
                this.started = !1, this.done = !1, this.attempts = e, this.min = t, this.max = r, this.scalar = i
            }
            return e.prototype.start = function(e) {
                return tg(this, void 0, void 0, function() {
                    return tm(this, function(t) {
                        switch (t.label) {
                            case 0:
                                if (this.started) throw Error("Backoff already started");
                                return this.started = !0, [4, this.backoff(e, 0, this.min)];
                            case 1:
                                return t.sent(), [2]
                        }
                    })
                })
            }, e.prototype.cancel = function() {
                this.done = !0, clearTimeout(this.timeoutHandle)
            }, e.prototype.backoff = function(e, t, r) {
                return tg(this, void 0, void 0, function() {
                    var i = this;
                    return tm(this, function(n) {
                        return this.done || (this.timeoutHandle = e9.setTimeout(function() {
                            return tg(i, void 0, void 0, function() {
                                var i, n;
                                return tm(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 2, , 3]), [4, e()];
                                        case 1:
                                            return a.sent(), [3, 3];
                                        case 2:
                                            return a.sent(), (i = t + 1) < this.attempts && (n = Math.min(r * this.scalar, this.max), this.backoff(e, i, n)), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, r)), [2]
                    })
                })
            }, e
        }(),
        tY = function(e) {
            if (!e) return {};
            var t, r, i, n, a = {
                    user: e
                },
                o = te();
            o && (a.page = {
                url: o.location.href
            });
            var s = {};
            if (!e.groups) return a;
            try {
                for (var l = ty(Object.keys(e.groups)), u = l.next(); !u.done; u = l.next()) {
                    var c = u.value,
                        d = e.groups[c];
                    if (d.length > 0 && d[0]) {
                        var h = d[0],
                            f = {
                                group_name: h
                            },
                            p = null == (n = null == (i = e.group_properties) ? void 0 : i[c]) ? void 0 : n[h];
                        p && Object.keys(p).length > 0 && (f.group_properties = p), s[c] = f
                    }
                }
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    u && !u.done && (r = l.return) && r.call(l)
                } finally {
                    if (t) throw t.error
                }
            }
            return Object.keys(s).length > 0 && (a.groups = s), delete a.user.groups, delete a.user.group_properties, a
        },
        tX = function(e) {
            return null == e ? {} : "string" == typeof e ? {
                key: e,
                value: e
            } : e
        },
        tZ = function(e) {
            if (!e) return {};
            var t = void 0;
            e.metadata && (t = e.metadata.experimentKey);
            var r = {};
            return e.key && (r.key = e.key), e.value && (r.value = e.value), e.payload && (r.payload = e.payload), t && (r.expKey = t), e.metadata && (r.metadata = e.metadata), r
        },
        t0 = function() {
            function e(e) {
                this.setProperties = {}, this.unsetProperties = {}, this.analyticsProvider = e
            }
            return e.prototype.track = function(e) {
                this.setProperties[e.key] != e.variant.value && (this.setProperties[e.key] = e.variant.value, delete this.unsetProperties[e.key], this.analyticsProvider.track(e))
            }, e.prototype.setUserProperty = function(e) {
                this.setProperties[e.key] != e.variant.value && this.analyticsProvider.setUserProperty(e)
            }, e.prototype.unsetUserProperty = function(e) {
                this.unsetProperties[e.key] || (this.unsetProperties[e.key] = "unset", delete this.setProperties[e.key], this.analyticsProvider.unsetUserProperty(e))
            }, e
        }(),
        t1 = function() {
            function e(e) {
                this.tracked = {}, this.identity = {}, this.exposureTrackingProvider = e
            }
            return e.prototype.track = function(e, t) {
                var r = {
                    userId: null == t ? void 0 : t.user_id,
                    deviceId: null == t ? void 0 : t.device_id
                };
                this.identityEquals(this.identity, r) || (this.tracked = {}), this.identity = r;
                var i = e.flag_key in this.tracked,
                    n = this.tracked[e.flag_key];
                i && n === e.variant || (this.tracked[e.flag_key] = e.variant, this.exposureTrackingProvider.track(e))
            }, e.prototype.identityEquals = function(e, t) {
                return e.userId === t.userId && e.deviceId === t.deviceId
            }, e
        }(),
        t2 = function() {
            function e(t, r) {
                var i, n, a, o, s, l = this;
                this.engine = new eU, this.isRunning = !1, this.apiKey = t, r = tH(r), this.config = tv(tv(tv({}, tP), r), {
                    serverUrl: (null == r ? void 0 : r.serverUrl) || ((null == (i = null == r ? void 0 : r.serverZone) ? void 0 : i.toLowerCase()) === "eu" ? "https://api.lab.eu.amplitude.com" : tP.serverUrl),
                    flagsServerUrl: (null == r ? void 0 : r.flagsServerUrl) || ((null == (n = null == r ? void 0 : r.serverZone) ? void 0 : n.toLowerCase()) === "eu" ? "https://flag.lab.eu.amplitude.com" : tP.flagsServerUrl),
                    flagConfigPollingIntervalMillis: r.flagConfigPollingIntervalMillis < 6e4 ? 6e4 : null != (a = r.flagConfigPollingIntervalMillis) ? a : tP.flagConfigPollingIntervalMillis
                }), this.logger = new tL(this.config.loggerProvider || new tU, e.getLogLevel(r));
                var u = null == (o = this.config) ? void 0 : o.internalInstanceNameSuffix;
                if (this.isWebExperiment = "web" === u, this.poller = new tr(function() {
                        return tg(l, void 0, void 0, function() {
                            var e;
                            return tm(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 2, , 3]), [4, this.doFlags()];
                                    case 1:
                                        return t.sent(), [3, 3];
                                    case 2:
                                        return e = t.sent(), this.logger.info(e), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, this.config.flagConfigPollingIntervalMillis), this.config.initialVariants)
                    for (var c in this.config.initialVariants) this.config.initialVariants[c] = t$(this.config.initialVariants[c]);
                this.config.userProvider && (this.userProvider = this.config.userProvider), this.config.analyticsProvider && (this.analyticsProvider = new t0(this.config.analyticsProvider)), this.config.exposureTrackingProvider && (this.userSessionExposureTracker = new t1(this.config.exposureTrackingProvider)), this.integrationManager = new tI(this.config, this);
                var d = new tE(this.config.httpClient || tC);
                this.flagApi = new e7(this.apiKey, this.config.flagsServerUrl, d), this.evaluationApi = new e8(this.apiKey, this.config.serverUrl, d);
                var h = u ? "".concat(this.config.instanceName, "-").concat(u) : this.config.instanceName;
                s = this.isWebExperiment ? new tz : new tR, this.variants = tD(this.apiKey, h, s), this.flags = tF(this.apiKey, h, s), this.fetchVariantsOptions = tq(this.apiKey, h, s);
                try {
                    this.flags.load(), this.variants.load(), this.fetchVariantsOptions.load()
                } catch (e) {}
                this.mergeInitialFlagsWithStorage()
            }
            return e.prototype.start = function(e) {
                return tg(this, void 0, void 0, function() {
                    var t, r, i;
                    return tm(this, function(n) {
                        switch (n.label) {
                            case 0:
                                if (this.isRunning) return [2];
                                this.isRunning = !0, this.setUser(e), n.label = 1;
                            case 1:
                                if (n.trys.push([1, 6, , 7]), t = this.doFlags(), !(null == (i = this.config.fetchOnStart) || i)) return [3, 3];
                                return [4, Promise.all([this.fetch(e), t])];
                            case 2:
                                return n.sent(), [3, 5];
                            case 3:
                                return [4, t];
                            case 4:
                                n.sent(), n.label = 5;
                            case 5:
                                return [3, 7];
                            case 6:
                                if (r = n.sent(), this.config.throwOnError) throw r;
                                return [3, 7];
                            case 7:
                                return this.config.pollOnStart && this.poller.start(), [2]
                        }
                    })
                })
            }, e.prototype.stop = function() {
                this.isRunning && (this.poller.stop(), this.isRunning = !1)
            }, e.prototype.fetch = function() {
                return tg(this, arguments, void 0, function(e, t) {
                    var r;
                    return void 0 === e && (e = this.user), tm(this, function(i) {
                        switch (i.label) {
                            case 0:
                                this.setUser(e || {}), i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]), [4, this.fetchInternal(e, this.config.fetchTimeoutMillis, this.config.retryFetchOnFailure, t)];
                            case 2:
                                return i.sent(), [3, 4];
                            case 3:
                                if (r = i.sent(), this.config.throwOnError) throw r;
                                return r instanceof e4 ? this.logger.debug(r) : this.logger.error(r), [3, 4];
                            case 4:
                                return [2, this]
                        }
                    })
                })
            }, e.prototype.variant = function(e, t) {
                if (!this.apiKey) return {
                    value: void 0
                };
                var r, i, n = this.variantAndSource(e, t);
                return this.config.automaticExposureTracking && this.exposureInternal(e, n), this.logger.debug("[Experiment] variant for ".concat(e, " is ").concat((null == (r = n.variant) ? void 0 : r.key) || (null == (i = n.variant) ? void 0 : i.value))), n.variant || {}
            }, e.prototype.exposure = function(e) {
                var t = this.variantAndSource(e);
                this.exposureInternal(e, t)
            }, e.prototype.all = function() {
                if (!this.apiKey) return {};
                var e = this.evaluate();
                for (var t in e) tW(this.flags.get(t)) || delete e[t];
                return tv(tv(tv({}, this.secondaryVariants()), this.sourceVariants()), e)
            }, e.prototype.clear = function() {
                this.variants.clear();
                try {
                    this.variants.store()
                } catch (e) {}
            }, e.prototype.getUser = function() {
                if (!this.user) return this.user;
                if (null == (e = this.user) || !e.user_properties) return tv({}, this.user);
                var e, t = tv({}, this.user.user_properties);
                return tv(tv({}, this.user), {
                    user_properties: t
                })
            }, e.prototype.setUser = function(e) {
                var t;
                if (!e) {
                    this.user = null;
                    return
                }
                if (null == (t = this.user) ? void 0 : t.user_properties) {
                    var r = tv({}, e.user_properties);
                    this.user = tv(tv({}, e), {
                        user_properties: r
                    })
                } else this.user = tv({}, e)
            }, e.prototype.getUserProvider = function() {
                return this.userProvider
            }, e.prototype.setUserProvider = function(e) {
                return this.userProvider = e, this
            }, e.prototype.mergeInitialFlagsWithStorage = function() {
                var e = this;
                this.config.initialFlags && JSON.parse(this.config.initialFlags).forEach(function(t) {
                    e.flags.get(t.key) || e.flags.put(t.key, t)
                })
            }, e.prototype.evaluate = function(e) {
                var t, r, i = this.addContext(this.user),
                    n = eR(this.flags.getAll(), e),
                    a = tY(i),
                    o = this.engine.evaluate(a, n),
                    s = {};
                try {
                    for (var l = ty(Object.keys(o)), u = l.next(); !u.done; u = l.next()) {
                        var c = u.value;
                        s[c] = tZ(o[c])
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        u && !u.done && (r = l.return) && r.call(l)
                    } finally {
                        if (t) throw t.error
                    }
                }
                return s
            }, e.prototype.getEvaluationTraces = function(e) {
                var t = this.addContext(this.user),
                    r = eR(this.flags.getAll(), e),
                    i = tY(t);
                return this.engine.evaluateWithTraces(i, r).traces
            }, e.prototype.variantAndSource = function(e, t) {
                var r = {};
                this.config.source === s.LocalStorage ? r = this.localStorageVariantAndSource(e, t) : this.config.source === s.InitialVariants && (r = this.initialVariantsVariantAndSource(e, t));
                var i = this.flags.get(e);
                return (tW(i) || !r.variant && i) && (r = this.localEvaluationVariantAndSource(e, i, t)), r
            }, e.prototype.localEvaluationVariantAndSource = function(e, t, r) {
                var i, n = {},
                    a = this.evaluate([t.key])[e],
                    o = l.LocalEvaluation,
                    s = null == (i = null == a ? void 0 : a.metadata) ? void 0 : i.default;
                if (!tG(a) && !s) return {
                    variant: tX(a),
                    source: o,
                    hasDefaultVariant: !1
                };
                if (s && (n = {
                        variant: tX(a),
                        source: o,
                        hasDefaultVariant: !0
                    }), !tG(r)) return {
                    variant: tX(r),
                    source: l.FallbackInline,
                    hasDefaultVariant: n.hasDefaultVariant
                };
                var u = this.config.initialVariants[e];
                if (!tG(u)) return {
                    variant: tX(u),
                    source: l.SecondaryInitialVariants,
                    hasDefaultVariant: n.hasDefaultVariant
                };
                var c = tX(this.config.fallbackVariant),
                    d = {
                        variant: c,
                        source: l.FallbackConfig,
                        hasDefaultVariant: n.hasDefaultVariant
                    };
                return tB(c) ? n : d
            }, e.prototype.localStorageVariantAndSource = function(e, t) {
                var r, i = {},
                    n = this.variants.get(e),
                    a = null == (r = null == n ? void 0 : n.metadata) ? void 0 : r.default;
                if (!tG(n) && !a) return {
                    variant: tX(n),
                    source: l.LocalStorage,
                    hasDefaultVariant: !1
                };
                if (a && (i = {
                        variant: tX(n),
                        source: l.LocalStorage,
                        hasDefaultVariant: !0
                    }), !tG(t)) return {
                    variant: tX(t),
                    source: l.FallbackInline,
                    hasDefaultVariant: i.hasDefaultVariant
                };
                var o = this.config.initialVariants[e];
                if (!tG(o)) return {
                    variant: tX(o),
                    source: l.SecondaryInitialVariants,
                    hasDefaultVariant: i.hasDefaultVariant
                };
                var s = tX(this.config.fallbackVariant),
                    u = {
                        variant: s,
                        source: l.FallbackConfig,
                        hasDefaultVariant: i.hasDefaultVariant
                    };
                return tB(s) ? i : u
            }, e.prototype.initialVariantsVariantAndSource = function(e, t) {
                var r, i = {},
                    n = this.config.initialVariants[e];
                if (!tG(n)) return {
                    variant: tX(n),
                    source: l.InitialVariants,
                    hasDefaultVariant: !1
                };
                var a = this.variants.get(e),
                    o = null == (r = null == a ? void 0 : a.metadata) ? void 0 : r.default;
                if (!tG(a) && !o) return {
                    variant: tX(a),
                    source: l.LocalStorage,
                    hasDefaultVariant: !1
                };
                if (o && (i = {
                        variant: tX(a),
                        source: l.LocalStorage,
                        hasDefaultVariant: !0
                    }), !tG(t)) return {
                    variant: tX(t),
                    source: l.FallbackInline,
                    hasDefaultVariant: i.hasDefaultVariant
                };
                var s = tX(this.config.fallbackVariant),
                    u = {
                        variant: s,
                        source: l.FallbackConfig,
                        hasDefaultVariant: i.hasDefaultVariant
                    };
                return tB(s) ? i : u
            }, e.prototype.fetchInternal = function(e, t, r, i) {
                return tg(this, void 0, void 0, function() {
                    var n, a, o;
                    return tm(this, function(s) {
                        switch (s.label) {
                            case 0:
                                if (!this.apiKey) throw Error("Experiment API key is empty");
                                this.logger.debug("[Experiment] Fetch all: retry=".concat(r)), r && this.stopRetries(), s.label = 1;
                            case 1:
                                return s.trys.push([1, 4, , 5]), [4, this.doFetch(e, t, tv({
                                    trackingOption: null == (o = this.fetchVariantsOptions.get()) ? void 0 : o.trackingOption
                                }, i))];
                            case 2:
                                return n = s.sent(), [4, this.storeVariants(n, i)];
                            case 3:
                                return s.sent(), [2, n];
                            case 4:
                                throw a = s.sent(), r && this.shouldRetryFetch(a) && this.startRetries(e, i), a;
                            case 5:
                                return [2]
                        }
                    })
                })
            }, e.prototype.setTracksAssignment = function(e) {
                return tg(this, void 0, void 0, function() {
                    return tm(this, function(t) {
                        return this.fetchVariantsOptions.put(tv(tv({}, this.fetchVariantsOptions.get() || {}), {
                            trackingOption: e ? "track" : "no-track"
                        })), this.fetchVariantsOptions.store(), [2]
                    })
                })
            }, e.prototype.cleanUserPropsForFetch = function(e) {
                var t = tv({}, e);
                return delete t.cookie, t
            }, e.prototype.doFetch = function(e, t, r) {
                return tg(this, void 0, void 0, function() {
                    var i, n, a, o, s, l, u;
                    return tm(this, function(c) {
                        switch (c.label) {
                            case 0:
                                return [4, this.addContextOrWait(e)];
                            case 1:
                                return e = c.sent(), e = this.cleanUserPropsForFetch(e), this.logger.debug("[Experiment] Fetch variants for user: ", e), [4, this.evaluationApi.getVariants(e, tv({
                                    timeoutMillis: t
                                }, r))];
                            case 2:
                                i = c.sent(), n = {};
                                try {
                                    for (o = (a = ty(Object.keys(i))).next(); !o.done; o = a.next()) n[s = o.value] = tZ(i[s])
                                } catch (e) {
                                    l = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        o && !o.done && (u = a.return) && u.call(a)
                                    } finally {
                                        if (l) throw l.error
                                    }
                                }
                                return this.logger.debug("[Experiment] Received variants: ", n), [2, n]
                        }
                    })
                })
            }, e.prototype.doFlags = function() {
                return tg(this, void 0, void 0, function() {
                    var e, t, r;
                    return tm(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (i.trys.push([0, 4, , 5]), e = void 0, !this.isWebExperiment) return [3, 2];
                                return [4, this.addContextOrWait(this.getUser())];
                            case 1:
                                e = i.sent(), i.label = 2;
                            case 2:
                                return [4, this.flagApi.getFlags({
                                    libraryName: "experiment-js-client",
                                    libraryVersion: tN,
                                    timeoutMillis: this.config.fetchTimeoutMillis,
                                    deliveryMethod: this.isWebExperiment ? "web" : void 0,
                                    user: (null == e ? void 0 : e.user_id) || (null == e ? void 0 : e.device_id) ? {
                                        user_id: null == e ? void 0 : e.user_id,
                                        device_id: null == e ? void 0 : e.device_id
                                    } : void 0
                                })];
                            case 3:
                                return t = i.sent(), this.flags.clear(), this.flags.putAll(t), [3, 5];
                            case 4:
                                if ((r = i.sent()) instanceof e4) {
                                    if (this.logger.debug(r), this.config.throwOnError) throw r
                                } else throw r;
                                return [3, 5];
                            case 5:
                                try {
                                    this.flags.store()
                                } catch (e) {}
                                return this.mergeInitialFlagsWithStorage(), [2]
                        }
                    })
                })
            }, e.prototype.storeVariants = function(e, t) {
                return tg(this, void 0, void 0, function() {
                    var r, i, n, a;
                    return tm(this, function(o) {
                        for (a in 0 === (r = t && t.flagKeys ? t.flagKeys : []).length && this.variants.clear(), i = function(t) {
                                r = r.filter(function(e) {
                                    return e !== t
                                }), n.variants.put(t, e[t])
                            }, n = this, e) i(a);
                        for (a in r) this.variants.remove(a);
                        try {
                            this.variants.store()
                        } catch (e) {}
                        return this.logger.debug("[Experiment] Stored variants: ", e), [2]
                    })
                })
            }, e.prototype.startRetries = function(e, t) {
                return tg(this, void 0, void 0, function() {
                    var r = this;
                    return tm(this, function(i) {
                        return this.logger.debug("[Experiment] Retry fetch"), this.retriesBackoff = new tJ(8, 500, 1e4, 1.5), this.retriesBackoff.start(function() {
                            return tg(r, void 0, void 0, function() {
                                return tm(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return [4, this.fetchInternal(e, 1e4, !1, t)];
                                        case 1:
                                            return r.sent(), [2]
                                    }
                                })
                            })
                        }), [2]
                    })
                })
            }, e.prototype.stopRetries = function() {
                this.retriesBackoff && this.retriesBackoff.cancel()
            }, e.prototype.addContext = function(e) {
                var t, r = null == (t = this.userProvider) ? void 0 : t.getUser(),
                    i = this.integrationManager.getUser(),
                    n = tv(tv(tv({}, null == r ? void 0 : r.user_properties), i.user_properties), null == e ? void 0 : e.user_properties);
                return tv(tv(tv(tv({
                    library: "experiment-js-client/".concat(tN)
                }, r), i), e), {
                    user_properties: n
                })
            }, e.prototype.addContextOrWait = function(e) {
                return tg(this, void 0, void 0, function() {
                    return tm(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.integrationManager.ready()];
                            case 1:
                                return t.sent(), [2, this.addContext(e)]
                        }
                    })
                })
            }, e.prototype.sourceVariants = function() {
                return this.config.source == s.LocalStorage ? this.variants.getAll() : this.config.source == s.InitialVariants ? this.config.initialVariants : void 0
            }, e.prototype.secondaryVariants = function() {
                return this.config.source == s.LocalStorage ? this.config.initialVariants : this.config.source == s.InitialVariants ? this.variants.getAll() : void 0
            }, e.prototype.exposureInternal = function(e, t) {
                if (null == (n = null == (i = null == (r = t.variant) ? void 0 : r.metadata) ? void 0 : i.trackExposure) || n) {
                    this.legacyExposureInternal(e, t.variant, t.source);
                    var r, i, n, a, o, s, l, u, c, d = {
                            flag_key: e
                        },
                        h = tO(t.source);
                    if (!h || t.hasDefaultVariant) {
                        (null == (a = t.variant) ? void 0 : a.expKey) && (d.experiment_key = null == (o = t.variant) ? void 0 : o.expKey);
                        var f = null == (s = t.variant) ? void 0 : s.metadata;
                        if (h || (null == f ? void 0 : f.default) || ((null == (l = t.variant) ? void 0 : l.key) ? d.variant = t.variant.key : (null == (u = t.variant) ? void 0 : u.value) && (d.variant = t.variant.value)), f && (d.metadata = f), this.isWebExperiment && (d.time = Date.now()), this.isWebExperiment) {
                            var p = te();
                            if (null == p ? void 0 : p.location) try {
                                var v = p.location.href;
                                d.metadata.url = v.split("?")[0] || ""
                            } catch (e) {}
                        }
                        var g = this.addContext(this.getUser());
                        null == (c = this.userSessionExposureTracker) || c.track(d, g), this.integrationManager.track(d, g)
                    }
                }
            }, e.prototype.legacyExposureInternal = function(e, t, r) {
                var i, n, a, o, s;
                if (this.analyticsProvider) {
                    var l = tQ(this.addContext(this.getUser()), e, t, r);
                    !tO(r) && (null == t ? void 0 : t.value) ? (null == t ? void 0 : t.value) && (null == (o = null == (a = this.analyticsProvider) ? void 0 : a.setUserProperty) || o.call(a, l), null == (s = this.analyticsProvider) || s.track(l)) : null == (n = null == (i = this.analyticsProvider) ? void 0 : i.unsetUserProperty) || n.call(i, l)
                }
            }, e.getLogLevel = function(e) {
                var t;
                return !0 === e.debug ? o.Debug : null != (t = e.logLevel) ? t : o.Error
            }, e.prototype.shouldRetryFetch = function(e) {
                return !(e instanceof e6) || e.statusCode < 400 || e.statusCode >= 500 || 429 === e.statusCode
            }, e.prototype.addPlugin = function(e) {
                "integration" === e.type && this.integrationManager.setIntegration(e)
            }, e
        }(),
        t3 = function() {
            function e(e, t) {
                var r, i, n;
                this.globalScope = te(), this.userAgent = void 0 !== (null == (r = this.globalScope) ? void 0 : r.navigator) ? null == (i = this.globalScope) ? void 0 : i.navigator.userAgent : void 0, this.ua = new th.UAParser(this.userAgent).getResult(), this.localStorage = new tR, this.sessionStorage = new tz, this.userProvider = e, this.apiKey = t, this.storageKey = "EXP_".concat(null == (n = this.apiKey) ? void 0 : n.slice(0, 10), "_DEFAULT_USER_PROVIDER")
            }
            return e.prototype.getUser = function() {
                var e, t, r, i, n, a = (null == (e = this.userProvider) ? void 0 : e.getUser()) || {};
                return tv({
                    language: this.getLanguage(),
                    platform: "Web",
                    os: this.getOs(this.ua),
                    device_model: this.getDeviceModel(this.ua),
                    device_category: null != (r = null == (t = this.ua.device) ? void 0 : t.type) ? r : "desktop",
                    referring_url: null == (n = null == (i = this.globalScope) ? void 0 : i.document) ? void 0 : n.referrer.replace(/\/$/, ""),
                    cookie: this.getCookie(),
                    browser: this.getBrowser(this.ua),
                    landing_url: this.getLandingUrl(),
                    first_seen: this.getFirstSeen(),
                    url_param: this.getUrlParam(),
                    user_agent: this.userAgent
                }, a)
            }, e.prototype.getLanguage = function() {
                return "u" > typeof navigator && (navigator.languages && navigator.languages[0] || navigator.language) || ""
            }, e.prototype.getOs = function(e) {
                var t, r;
                return [null == (t = e.browser) ? void 0 : t.name, null == (r = e.browser) ? void 0 : r.major].filter(function(e) {
                    return null != e
                }).join(" ")
            }, e.prototype.getDeviceModel = function(e) {
                var t;
                return null == (t = e.os) ? void 0 : t.name
            }, e.prototype.getBrowser = function(e) {
                var t, r = null == (t = e.browser) ? void 0 : t.name;
                return (null == r ? void 0 : r.includes("Chrom")) && (r = "Chrome"), (null == r ? void 0 : r.includes("Firefox")) && (r = "Firefox"), (null == r ? void 0 : r.includes("Safari")) && (r = "Safari"), (null == r ? void 0 : r.includes("Edge")) && (r = "Edge"), (null == r ? void 0 : r.includes("Opera")) && (r = "Opera"), r
            }, e.prototype.getCookie = function() {
                var e, t, r, i, n;
                if (null == (t = null == (e = this.globalScope) ? void 0 : e.document) ? void 0 : t.cookie) return Object.fromEntries(null == (n = null == (i = null == (r = this.globalScope) ? void 0 : r.document) ? void 0 : i.cookie) ? void 0 : n.split("; ").map(function(e) {
                    return e.split("=")
                }))
            }, e.prototype.getLandingUrl = function() {
                var e, t;
                try {
                    var r = JSON.parse(this.sessionStorage.get(this.storageKey) || "{}");
                    return r.landing_url || (r.landing_url = null == (t = null == (e = this.globalScope) ? void 0 : e.location) ? void 0 : t.href.replace(/\/$/, ""), this.sessionStorage.put(this.storageKey, JSON.stringify(r))), r.landing_url
                } catch (e) {
                    return
                }
            }, e.prototype.getFirstSeen = function() {
                try {
                    var e = JSON.parse(this.localStorage.get(this.storageKey) || "{}");
                    return e.first_seen || (e.first_seen = (Date.now() / 1e3).toString(), this.localStorage.put(this.storageKey, JSON.stringify(e))), e.first_seen
                } catch (e) {
                    return
                }
            }, e.prototype.getUrlParam = function() {
                if (this.globalScope) {
                    var e, t, r, i = {};
                    try {
                        var n = new URL(this.globalScope.location.href);
                        try {
                            for (var a = ty(n.searchParams), o = a.next(); !o.done; o = a.next()) {
                                var s = tb(o.value, 2),
                                    l = s[0],
                                    u = s[1];
                                i[l] = tx(tx([], tb(null != (r = i[l]) ? r : []), !1), tb(u.split(",")), !1)
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                o && !o.done && (t = a.return) && t.call(a)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                    } catch (e) {
                        return
                    }
                    return Object.entries(i).reduce(function(e, t) {
                        var r = tb(t, 2),
                            i = r[0],
                            n = r[1];
                        return e[i] = 1 == n.length ? n[0] : n, e
                    }, {})
                }
            }, e
        }();
    e9.experimentInstances = {};
    var t5 = e9.experimentInstances,
        t6 = function(e, t) {
            var r, i = (null == (r = t) ? void 0 : r.instanceName) || tP.instanceName,
                n = null == t ? void 0 : t.internalInstanceNameSuffix;
            return n ? "".concat(i, ".").concat(e, ".").concat(n) : "".concat(i, ".").concat(e)
        },
        t4 = function(e, t, r) {
            var i = t6(e, t),
                n = t5[i];
            return n ? n : (n = new t2(e, tv(tv({}, t), {
                userProvider: new t3(null == t ? void 0 : t.userProvider, e)
            })), r && n.addPlugin(r()), t5[i] = n, n)
        };

    function t8() {}

    function t7() {
        let e = function(e) {
                if ("u" < typeof document) return;
                let t = document.cookie.split("; ").find(t => t.startsWith(`${e}=`));
                return t ? t.split("=").slice(1).join("=") : void 0
            }("AMP_a331ddf18d"),
            t = e ? function(e) {
                try {
                    let t = decodeURIComponent(atob(e));
                    return JSON.parse(t)
                } catch {
                    try {
                        let t = decodeURIComponent(e);
                        return JSON.parse(t)
                    } catch {
                        return
                    }
                }
            }(e) : void 0;
        return {
            deviceId: t?.device_id || t?.deviceId,
            userId: t?.user_id || t?.userId
        }
    }
    async function t9(e) {
        let r = "client-l663XvPBsVHc0dQMcaW3uSTIIhOTqE5O";
        if (!e || !r) return;
        let {
            deviceId: i,
            userId: n
        } = t7();
        if (i || n) {
            t || (t = t4(r, void 0));
            try {
                await t.fetch({
                    ...i ? {
                        device_id: i
                    } : {},
                    ...n ? {
                        user_id: n
                    } : {}
                });
                let r = t.variant(e);
                return "string" == typeof r?.value ? r.value : void 0
            } catch (e) {
                console.error("[Client Experiment] error fetching variant", e);
                return
            }
        }
    }
    t8.prototype.getUser = function() {
        return {}
    }, t8.prototype.start = function(e) {
        return tg(this, void 0, void 0, function() {
            return tm(this, function(e) {
                return [2]
            })
        })
    }, t8.prototype.stop = function() {}, t8.prototype.setUser = function(e) {}, t8.prototype.fetch = function(e, t) {
        return tg(this, void 0, void 0, function() {
            return tm(this, function(e) {
                return [2, this]
            })
        })
    }, t8.prototype.getUserProvider = function() {
        return null
    }, t8.prototype.setUserProvider = function(e) {
        return this
    }, t8.prototype.variant = function(e, t) {
        return tP.fallbackVariant
    }, t8.prototype.all = function() {
        return {}
    }, t8.prototype.clear = function() {}, t8.prototype.exposure = function(e) {};
    let re = (0, d.default)(() => e.A(191233), {
        loadableGenerated: {
            modules: [807973]
        },
        ssr: !1
    });
    e.s(["default", 0, function({
        header: e,
        locale: t
    }) {
        let [r, i] = (0, c.useState)(!1), [n, a] = (0, c.useState)(!1), o = (0, c.useRef)(null), {
            user: s,
            signIn: l,
            signOut: d
        } = (({
            locale: e
        } = {}) => {
            let [t, r] = (0, c.useState)(null), [i, n] = (0, c.useState)(!1), {
                genesisSession: a
            } = (0, H.useGenesisSession)(), o = (0, f.usePathname)() || "/";
            (0, c.useEffect)(() => {
                (async () => {
                    n(!0);
                    try {
                        let {
                            users: e
                        } = await (0, W.getUserFromGenesis)();
                        if (e.length > 0) {
                            let t = e[0] ?? {},
                                i = t.name?.givenName,
                                a = t.name?.familyName,
                                o = t.name?.fullName;
                            if (o && (!i || !a)) {
                                let e = o.trim().split(/\s+/);
                                i || (i = e[0] || ""), !a && e.length > 1 && (a = e[e.length - 1] || "")
                            }
                            r({
                                initials: ((e, t, r) => {
                                    let i = t ?? "",
                                        n = r ?? "";
                                    if (e) {
                                        let t = e.split(" ");
                                        i = t[0], n = t.length > 1 ? t[t.length - 1] : ""
                                    }
                                    return `${i[0]??""}${n[0]??""}`
                                })(o, i, a),
                                ...t,
                                name: {
                                    fullName: o || "",
                                    givenName: i || "",
                                    familyName: a || ""
                                }
                            }), n(!1)
                        }
                    } catch (e) {
                        console.error(e)
                    }
                })()
            }, []);
            let s = new URLSearchParams({
                client_id: "cms_unity",
                response_type: "code",
                redirect_uri: "https://unity.com/oauth",
                ...e && {
                    locale: "en" === e ? "en_us" : e
                }
            }).toString();
            return {
                user: t,
                loading: i,
                signIn: () => {
                    sessionStorage.setItem("REDIRECT_PATH", o), window.location.href = `https://api.unity.com/v1/oauth2/authorize?${s}`
                },
                signOut: () => {
                    let e = new URLSearchParams({
                        access_token: a.access_token,
                        post_logout_redirect_uri: `https://unity.com${o}`
                    }).toString();
                    sessionStorage.clear(), window.location.href = `https://api.unity.com/v1/oauth2/end-session?${e}`
                },
                signUp: () => {
                    sessionStorage.setItem("REDIRECT_PATH", o), window.location.href = `https://api.unity.com/v1/oauth2/authorize?${s}&is_reg=true`
                }
            }
        })({
            locale: t
        }), p = e?.utilityNavigationItems, v = function(e) {
            let [t, r] = (0, c.useState)({}), i = (0, c.useRef)(new Set);
            return (0, c.useEffect)(() => {
                if (!e) return void r({});
                let t = Array.from(new Set(e.map(e => e && "object" == typeof e && "experimentKey" in e ? e.experimentKey : void 0).filter(e => !!e)));
                if (0 === t.length) return void r({});
                let n = !1;
                return (async () => {
                    let {
                        deviceId: e,
                        userId: a
                    } = t7(), o = await Promise.all(t.map(async e => {
                        let t = await t9(e);
                        return [e, t]
                    }));
                    if (!n && (r(Object.fromEntries(o)), e || a))
                        for (let [t, r] of o) r && !i.current.has(t) && (i.current.add(t), (0, Z.sendExposureEvent)(t, r, e, a))
                })(), () => {
                    n = !0
                }
            }, [e]), t
        }(p), g = (0, c.useCallback)(() => {
            a(!0)
        }, []), m = (0, c.useCallback)(() => {
            i(!0);
            let e = Y({
                action: "search modal open",
                level: "header",
                pageDetails: X(document)
            });
            (0, J.default)(e)
        }, []), y = (0, c.useCallback)(e => {
            if (i(e), !e) {
                let e = Y({
                    action: "search modal close",
                    level: "header",
                    pageDetails: X(document)
                });
                (0, J.default)(e), requestAnimationFrame(() => {
                    o.current?.focus()
                })
            }
        }, []), b = {
            menus: e?.userMenu?.menus ?? [],
            signInText: e?.userMenu?.signInText,
            onSignIn: l,
            initials: s?.login ? s?.initials : void 0,
            userSpotlight: s?.login ? {
                title: e?.userMenu?.userGreeting ? h.default.render(e.userMenu.userGreeting, {
                    name: s?.name.givenName || "User"
                }) : s?.name.givenName || "User",
                description: s?.email || "",
                onLogout: d,
                onAccount: () => {
                    window.location.href = "https://cloud.unity.com/account/account-settings"
                },
                accountText: e?.userMenu?.accountText || "My Account",
                image: e?.userMenu?.spotlightImage
            } : void 0
        }, x = (0, c.useMemo)(() => {
            if (p) return p.filter(e => {
                if ("string" == typeof e) return !0;
                let t = "experimentKey" in e ? e.experimentKey : void 0,
                    r = "targetVariant" in e ? e.targetVariant : void 0;
                if (!t || !r) return !0;
                if (!(t in v)) return !1;
                let i = v[t];
                return void 0 !== i ? i === r : "control" === r
            })
        }, [p, v]), w = {
            navigation: e?.navigation,
            store: e?.store,
            userMenu: b,
            onSearchOpen: m,
            onSearchHover: g,
            onSearchFocus: g,
            searchButtonRef: o,
            action: e?.action,
            secondaryAction: e?.secondaryAction,
            utilityNavigationItems: x
        };
        return (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(B, {
                ...w
            }), (n || r) && (0, u.jsx)(re, {
                isOpen: r,
                onOpenChange: y,
                placeholder: e?.search?.placeholder ?? void 0,
                noResultsMessage: e?.search?.noResultsMessage ?? void 0,
                filterTabs: e?.searchFilterTabs ?? []
            })]
        })
    }], 595293)
}, 643686, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(722978),
        i = e.i(869324);
    let n = ({
        children: e,
        hasContainer: n = !0
    }) => {
        let a = (0, r.clsx)("m-auto flex flex-col flex-wrap py-6", {
                container: n
            }, {
                "px-3 md:px-6": !n
            }),
            o = e => {
                e.stopPropagation(), (0, i.default)({
                    event: "userEvent",
                    event_name: "navigation_click",
                    properties: {
                        navigation_click_block: "Footer"
                    }
                })
            };
        return (0, t.jsx)("footer", {
            className: "dark",
            children: (0, t.jsx)("div", {
                role: "button",
                tabIndex: 0,
                "aria-label": "Activate to engage with footer navigation",
                onClick: o,
                onKeyDown: e => {
                    ("Enter" === e.key || " " === e.key) && (e.preventDefault(), o(e))
                },
                className: "bg-gray-100 dark:bg-gray-900",
                style: {
                    cursor: "auto"
                },
                children: (0, t.jsx)("div", {
                    className: a,
                    children: e
                })
            })
        })
    };
    n.Copyright = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "text-tiny text-gray-600 dark:text-gray-400",
        children: e
    }), n.Disclaimer = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "text-tiny w-auto text-gray-600 lg:w-2/4 dark:text-gray-400",
        children: e
    }), n.Language = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "flex flex-col xl:mt-6 xl:basis-2/4",
        children: e
    }), n.LanguageLink = ({
        children: e
    }) => (0, t.jsx)("li", {
        className: "text-tiny-bold mr-4 text-gray-800 dark:text-gray-200",
        children: e
    }), n.LanguageLinks = ({
        children: e
    }) => (0, t.jsx)("ul", {
        className: "flex flex-wrap gap-y-2 whitespace-nowrap",
        children: e
    }), n.LanguageSocialContainer = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "flex flex-col border-b border-gray-200 pb-6 xl:flex-row dark:border-gray-800",
        children: e
    }), n.LegalContainer = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "flex basis-full flex-col",
        children: e
    }), n.LegalLink = ({
        children: e
    }) => (0, t.jsx)("li", {
        className: "text-tiny-bold mr-4 text-gray-800 dark:text-gray-200",
        children: e
    }), n.LegalLinks = ({
        children: e
    }) => (0, t.jsx)("ul", {
        className: "my-4 flex flex-wrap",
        children: e
    }), n.Navigation = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "mb-6 border-b border-gray-200 pb-6 dark:border-gray-800",
        children: e
    }), n.NavigationColumn = ({
        children: e,
        className: i = ""
    }) => {
        let n = (0, r.clsx)("mt-6 flex-[0_50%] md:flex-[0_25%] lg:flex-1", i);
        return (0, t.jsx)("div", {
            className: n,
            children: e
        })
    }, n.NavigationColumns = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "flex flex-wrap",
        children: e
    }), n.NavigationLink = ({
        children: e
    }) => (0, t.jsx)("li", {
        className: "mb-2",
        children: e
    }), n.NavigationLinks = ({
        children: e,
        className: r = ""
    }) => (0, t.jsx)("ul", {
        className: r,
        children: e
    }), n.Social = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "mt-6 flex-1",
        children: e
    }), n.SocialLogo = ({
        children: e
    }) => (0, t.jsx)("li", {
        className: "relative h-6 w-6 cursor-pointer transition-all duration-300 ease-out hover:opacity-80 dark:hover:opacity-70",
        children: e
    }), n.SocialLogos = ({
        children: e
    }) => (0, t.jsx)("ul", {
        className: "flex gap-x-2 xl:flex-1",
        children: e
    }), n.Title = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "text-small mb-2 text-gray-600 dark:text-gray-400",
        children: e
    }), n.SocialCurrencyContainer = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "flex basis-2/4 flex-col md:flex-row",
        children: e
    }), n.CurrencyContainer = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "mt-6 flex-1",
        children: e
    }), e.s(["default", 0, n], 643686)
}, 267747, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(643686);
    e.s(["default", 0, ({
        children: e
    }) => (0, t.jsx)(r.default, {
        children: e
    })])
}, 724030, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(133601),
        i = e.i(643686),
        n = e.i(7075);
    let a = [{
        title: "English",
        locale: "en"
    }, {
        title: "Deutsch",
        locale: "de"
    }, {
        title: "日本語",
        locale: "ja"
    }, {
        title: "Français",
        locale: "fr"
    }, {
        title: "Português",
        locale: "pt"
    }, {
        title: "中文",
        locale: "cn"
    }, {
        title: "Español",
        locale: "es"
    }, {
        title: "Русский",
        locale: "ru"
    }, {
        title: "한국어",
        locale: "kr"
    }];
    e.s(["default", 0, () => {
        let e = (0, n.usePathname)();
        return (0, t.jsx)(i.default.LanguageLinks, {
            children: a.map((n, a) => (0, t.jsx)(i.default.LanguageLink, {
                children: (0, t.jsx)(r.default, {
                    href: `/${n.locale}${e}`,
                    "data-testid": n.title,
                    prefetch: !1,
                    children: n.title
                })
            }, `language-${n.title}-${a}`))
        })
    }])
}, 549855, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(3931),
        i = e.i(643686),
        n = e.i(481392),
        a = e.i(7075),
        o = e.i(433519),
        s = e.i(544923);
    let l = {
        EU: "EUR",
        HR: "EUR",
        CY: "EUR",
        CZ: "EUR",
        DK: "EUR",
        EE: "EUR",
        FI: "EUR",
        GR: "EUR",
        IE: "EUR",
        IT: "EUR",
        LV: "EUR",
        LT: "EUR",
        MT: "EUR",
        NL: "EUR",
        NO: "EUR",
        PL: "EUR",
        SK: "EUR",
        SI: "EUR",
        SE: "EUR",
        BE: "EUR",
        FR: "EUR",
        LU: "EUR",
        AT: "EUR",
        DE: "EUR",
        LI: "EUR",
        CH: "EUR",
        PT: "EUR",
        ES: "EUR",
        AD: "EUR",
        ME: "EUR",
        SM: "EUR",
        VA: "EUR",
        GF: "EUR",
        GP: "EUR",
        MQ: "EUR",
        YT: "EUR",
        MC: "EUR",
        RE: "EUR",
        BL: "EUR",
        MF: "EUR",
        PM: "EUR",
        UA: "EUR",
        BR: "BRL",
        CN: "CNY",
        JP: "JPY",
        KR: "KRW",
        US: "USD"
    };
    e.s(["default", 0, ({
        currencyLabel: e
    }) => {
        let [u] = (0, s.default)("location", "US"), [c, d] = (0, s.default)("currency", l[u] || "USD"), {
            dispatch: h,
            state: f
        } = (0, o.default)(), p = (0, a.usePathname)(), [v] = (0, s.default)("experiment_exposure", "");
        return (0, r.useEffect)(() => {
            f.currency !== c && h({
                type: o.CommerceContextAction.UPDATE,
                currency: c
            })
        }, [c, f, h]), (0, t.jsxs)(i.default.CurrencyContainer, {
            children: [(0, t.jsx)("span", {
                id: "currency-label",
                children: (0, t.jsx)(i.default.Title, {
                    children: e
                })
            }), (0, t.jsxs)(n.default, {
                "aria-labelledby": "currency-label",
                className: "w-full",
                selectedKey: c,
                onSelectionChange: e => {
                    e && (d(e.toString()), h({
                        type: o.CommerceContextAction.UPDATE,
                        currency: e.toString()
                    }), ((e, t) => {
                        try {
                            if (!e) return !1;
                            let r = JSON.parse(decodeURIComponent(e)) ?? {};
                            return !!r[t] && r[t].hasCurrency
                        } catch (e) {
                            return console.warn("Error parsing experiment cookie"), !1
                        }
                    })(v, p) && window.location.reload())
                },
                children: [(0, t.jsx)(n.default.Item, {
                    children: "BRL"
                }, "BRL"), (0, t.jsx)(n.default.Item, {
                    children: "CNY"
                }, "CNY"), (0, t.jsx)(n.default.Item, {
                    children: "JPY"
                }, "JPY"), (0, t.jsx)(n.default.Item, {
                    children: "KRW"
                }, "KRW"), (0, t.jsx)(n.default.Item, {
                    children: "USD"
                }, "USD"), (0, t.jsx)(n.default.Item, {
                    children: "EUR"
                }, "EUR")]
            })]
        })
    }], 549855)
}, 193731, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(3931),
        i = e.i(643686);
    let n = ({
        className: e = "",
        width: r = 30,
        height: i = 14
    }) => (0, t.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: r,
        height: i,
        viewBox: "0 0 30 14",
        className: e,
        children: (0, t.jsxs)("g", {
            children: [(0, t.jsx)("g", {
                id: "final---dec.11-2020_1_",
                children: (0, t.jsx)("g", {
                    id: "_x30_208-our-toggle_2_",
                    transform: "translate(-1275.000000, -200.000000)",
                    children: (0, t.jsx)("g", {
                        id: "Final-Copy-2_2_",
                        transform: "translate(1275.000000, 200.000000)",
                        children: (0, t.jsx)("path", {
                            style: {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                fill: "#FFFFFF"
                            },
                            d: "M7.4,12.8h6.8l3.1-11.6H7.4C4.2,1.2,1.6,3.8,1.6,7S4.2,12.8,7.4,12.8z"
                        })
                    })
                })
            }), (0, t.jsx)("g", {
                id: "final---dec.11-2020",
                children: (0, t.jsx)("g", {
                    id: "_x30_208-our-toggle",
                    transform: "translate(-1275.000000, -200.000000)",
                    children: (0, t.jsxs)("g", {
                        id: "Final-Copy-2",
                        transform: "translate(1275.000000, 200.000000)",
                        children: [(0, t.jsx)("path", {
                            style: {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                fill: "#0066FF"
                            },
                            d: "M22.6,0H7.4c-3.9,0-7,3.1-7,7s3.1,7,7,7h15.2c3.9,0,7-3.1,7-7S26.4,0,22.6,0z M1.6,7c0-3.2,2.6-5.8,5.8-5.8 h9.9l-3.1,11.6H7.4C4.2,12.8,1.6,10.2,1.6,7z"
                        }), (0, t.jsx)("path", {
                            id: "x",
                            style: {
                                fill: "#FFFFFF"
                            },
                            d: "M24.6,4c0.2,0.2,0.2,0.6,0,0.8l0,0L22.5,7l2.2,2.2c0.2,0.2,0.2,0.6,0,0.8c-0.2,0.2-0.6,0.2-0.8,0 l0,0l-2.2-2.2L19.5,10c-0.2,0.2-0.6,0.2-0.8,0c-0.2-0.2-0.2-0.6,0-0.8l0,0L20.8,7l-2.2-2.2c-0.2-0.2-0.2-0.6,0-0.8 c0.2-0.2,0.6-0.2,0.8,0l0,0l2.2,2.2L23.8,4C24,3.8,24.4,3.8,24.6,4z"
                        }), (0, t.jsx)("path", {
                            id: "y",
                            style: {
                                fill: "#0066FF"
                            },
                            d: "M12.7,4.1c0.2,0.2,0.3,0.6,0.1,0.8l0,0L8.6,9.8C8.5,9.9,8.4,10,8.3,10c-0.2,0.1-0.5,0.1-0.7-0.1l0,0 L5.4,7.7c-0.2-0.2-0.2-0.6,0-0.8c0.2-0.2,0.6-0.2,0.8,0l0,0L8,8.6l3.8-4.5C12,3.9,12.4,3.9,12.7,4.1z"
                        })]
                    })
                })
            })]
        })
    });
    e.s(["default", 0, ({
        label: e
    }) => {
        let [a, o] = (0, r.useState)(!1);
        return ((0, r.useEffect)(() => {
            o(!0)
        }, []), a) ? (0, t.jsx)(i.default.LegalLink, {
            children: (0, t.jsxs)("div", {
                className: "flex items-center",
                children: [(0, t.jsx)(n, {
                    className: "mr-1"
                }), (0, t.jsx)("div", {
                    id: "ot-sdk-btn",
                    style: {
                        fontSize: "inherit",
                        lineHeight: "inherit"
                    },
                    className: "ot-sdk-show-settings focus-ring hover:!text-blue focus:!text-blue dark:hover:!text-blue dark:focus:!text-blue !border-none !bg-transparent !p-0 !text-gray-800 transition duration-200 hover:ease-in-out dark:!text-gray-200",
                    tabIndex: 0,
                    role: "button",
                    children: e
                })]
            })
        }) : null
    }], 193731)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "002acc23-9fe9-5c7f-818d-a139e95abd80")
    } catch (e) {}
}();
//# debugId=002acc23-9fe9-5c7f-818d-a139e95abd80