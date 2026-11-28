;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "3a9b9833-1c7b-29e7-822e-ecef4f17ed03")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, [122416, e => {
    var t = e.i(230452),
        a = e.i(516830),
        n = e.i(869324);
    e.s(["default", 0, () => {
        let e = (0, a.useRef)(null);
        return (0, a.useEffect)(() => {
            let t = e.current?.closest("footer");
            if (!t) return;
            let a = () => (0, n.U)({
                event: "userEvent",
                event_name: "navigation_click",
                properties: {
                    navigation_click_block: "Footer"
                }
            });
            return t.addEventListener("click", a), () => t.removeEventListener("click", a)
        }, []), (0, t.jsx)("span", {
            ref: e,
            hidden: !0
        })
    }])
}, 193731, e => {
    var t = e.i(230452),
        a = e.i(516830);
    e.i(442917);
    var n = e.i(262670);
    let r = ({
            className: e = "",
            width: a = 30,
            height: n = 14
        }) => (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: a,
            height: n,
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
                                d: "M22.6,0H7.4c-3.9,0-7,3.1-7,7s3.1,7,7,7h15.2c3.9,0,7-3.1,7-7S26.4,0,22.6,0z M1.6,7c0-3.2,2.6-5.8,5.8-5.8\n       h9.9l-3.1,11.6H7.4C4.2,12.8,1.6,10.2,1.6,7z"
                            }), (0, t.jsx)("path", {
                                id: "x",
                                style: {
                                    fill: "#FFFFFF"
                                },
                                d: "M24.6,4c0.2,0.2,0.2,0.6,0,0.8l0,0L22.5,7l2.2,2.2c0.2,0.2,0.2,0.6,0,0.8c-0.2,0.2-0.6,0.2-0.8,0\n       l0,0l-2.2-2.2L19.5,10c-0.2,0.2-0.6,0.2-0.8,0c-0.2-0.2-0.2-0.6,0-0.8l0,0L20.8,7l-2.2-2.2c-0.2-0.2-0.2-0.6,0-0.8\n       c0.2-0.2,0.6-0.2,0.8,0l0,0l2.2,2.2L23.8,4C24,3.8,24.4,3.8,24.6,4z"
                            }), (0, t.jsx)("path", {
                                id: "y",
                                style: {
                                    fill: "#0066FF"
                                },
                                d: "M12.7,4.1c0.2,0.2,0.3,0.6,0.1,0.8l0,0L8.6,9.8C8.5,9.9,8.4,10,8.3,10c-0.2,0.1-0.5,0.1-0.7-0.1l0,0\n       L5.4,7.7c-0.2-0.2-0.2-0.6,0-0.8c0.2-0.2,0.6-0.2,0.8,0l0,0L8,8.6l3.8-4.5C12,3.9,12.4,3.9,12.7,4.1z"
                            })]
                        })
                    })
                })]
            })
        }),
        i = () => {
            window.OneTrust?.ToggleInfoDisplay()
        };
    e.s(["default", 0, ({
        label: e
    }) => {
        let [s, l] = (0, a.useState)(!1);
        return ((0, a.useEffect)(() => {
            l(!0)
        }, []), s) ? (0, t.jsxs)(n.f, {
            id: "ot-sdk-btn",
            onPress: i,
            children: [(0, t.jsx)(r, {}), e]
        }) : null
    }], 193731)
}, 549855, e => {
    var t = e.i(230452),
        a = e.i(516830);
    e.i(442917);
    var n = e.i(915357),
        r = e.i(544842),
        i = e.i(65583),
        s = e.i(557749),
        l = e.i(7075),
        o = e.i(433519),
        u = e.i(544923);
    let c = {
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
        },
        d = (0, a.lazy)(() => e.A(755280)),
        h = (0, i.f)({
            size: "sm"
        }),
        m = (0, s.f)({
            size: "sm"
        }),
        f = (0, r.f)(),
        g = {
            none: 0,
            passive: 1,
            focus: 2,
            open: 3
        },
        p = ({
            value: e,
            onActivate: a
        }) => (0, t.jsx)("div", {
            className: h.root(),
            children: (0, t.jsxs)("button", {
                type: "button",
                className: h.pill({
                    className: m.trigger()
                }),
                "aria-labelledby": "currency-label",
                "aria-haspopup": "listbox",
                "aria-expanded": "false",
                onPointerEnter: () => a?.("passive"),
                onFocus: () => a?.("focus"),
                onClick: () => a?.("open"),
                children: [(0, t.jsx)("span", {
                    className: m.value(),
                    children: e
                }), (0, t.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1rem",
                    height: "1rem",
                    fill: "currentColor",
                    viewBox: "0 0 256 256",
                    "aria-hidden": "true",
                    className: f.caret(),
                    children: (0, t.jsx)("path", {
                        d: "M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"
                    })
                })]
            })
        });
    e.s(["default", 0, ({
        currencyLabel: e
    }) => {
        let [r] = (0, u.f)("location", "US"), [i, s] = (0, u.f)("currency", c[r] || "USD"), {
            dispatch: h,
            state: m
        } = (0, o.U)(), f = (0, l.usePathname)(), [y] = (0, u.f)("experiment_exposure", ""), v = (0, a.useRef)(null), [b, x] = (0, a.useState)("none"), j = e => x(t => g[e] > g[t] ? e : t);
        return (0, a.useEffect)(() => {
            let e = v.current;
            if ("none" !== b || !e) return;
            if ("u" < typeof IntersectionObserver) return void j("passive");
            let t = new IntersectionObserver(e => {
                e.some(e => e.isIntersecting) && j("passive")
            }, {
                rootMargin: "400px"
            });
            return t.observe(e), () => t.disconnect()
        }, [b]), (0, a.useEffect)(() => {
            m.currency !== i && h({
                type: o.n.UPDATE,
                currency: i
            })
        }, [i, m, h]), (0, t.jsx)(n.s, {
            title: (0, t.jsx)("span", {
                id: "currency-label",
                children: e
            }),
            children: (0, t.jsx)("div", {
                ref: v,
                children: "none" === b ? (0, t.jsx)(p, {
                    value: i,
                    onActivate: j
                }) : (0, t.jsx)(a.Suspense, {
                    fallback: (0, t.jsx)(p, {
                        value: i
                    }),
                    children: (0, t.jsx)(d, {
                        value: i,
                        onChange: e => {
                            e && (s(e.toString()), h({
                                type: o.n.UPDATE,
                                currency: e.toString()
                            }), ((e, t) => {
                                try {
                                    if (!e) return !1;
                                    let a = JSON.parse(decodeURIComponent(e)) ?? {};
                                    return !!a[t] && a[t].hasCurrency
                                } catch (e) {
                                    return console.warn("Error parsing experiment cookie"), !1
                                }
                            })(y, f) && window.location.reload())
                        },
                        autoFocus: "focus" === b || "open" === b,
                        defaultOpen: "open" === b
                    })
                })
            })
        })
    }], 549855)
}, 724030, e => {
    var t = e.i(230452),
        a = e.i(491902),
        n = e.i(81052);
    e.i(442917);
    var r = e.i(262670),
        i = e.i(915357),
        s = e.i(7075);
    let l = [{
            title: "English",
            locale: "en"
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
        }, {
            title: "Tiếng Việt",
            locale: "vn"
        }],
        o = new Set(["ru", "vn"]);
    e.s(["default", 0, () => {
        let e = (0, s.usePathname)(),
            u = (0, n.X)();
        return (0, t.jsx)(i.c, {
            layout: "inline",
            children: l.map((n, i) => {
                let s = `/${n.locale}${e}`;
                return (0, t.jsx)(r.f, {
                    href: s,
                    "data-testid": n.title,
                    className: o.has(n.locale) && n.locale !== u ? "font-[system-ui,sans-serif]" : void 0,
                    render: e => (0, t.jsx)(a.default, {
                        ...e,
                        href: s,
                        prefetch: !1
                    }),
                    children: n.title
                }, `language-${n.title}-${i}`)
            })
        })
    }])
}, 998003, e => {
    let t;
    var a = e.i(230452),
        n = e.i(321950),
        r = e.i(433519),
        i = e.i(728559),
        s = function() {
            return null
        },
        l = e.i(785690),
        o = e.i(213278),
        u = e.i(664300),
        c = e.i(304780),
        d = class extends c.f {
            constructor(e = {}) {
                super(), this.config = e, this.#e = new Map
            }
            #e;
            build(e, t, a) {
                let n = t.queryKey,
                    r = t.queryHash ?? (0, l.J)(n, t),
                    i = this.get(r);
                return i || (i = new o.X({
                    client: e,
                    queryKey: n,
                    queryHash: r,
                    options: e.defaultQueryOptions(t),
                    state: a,
                    defaultOptions: e.getQueryDefaults(n)
                }), this.add(i)), i
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
                u.f.batch(() => {
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
                return this.getAll().find(e => (0, l.N)(t, e))
            }
            findAll(e = {}) {
                let t = this.getAll();
                return Object.keys(e).length > 0 ? t.filter(t => (0, l.N)(e, t)) : t
            }
            notify(e) {
                u.f.batch(() => {
                    this.listeners.forEach(t => {
                        t(e)
                    })
                })
            }
            onFocus() {
                u.f.batch(() => {
                    this.getAll().forEach(e => {
                        e.onFocus()
                    })
                })
            }
            onOnline() {
                u.f.batch(() => {
                    this.getAll().forEach(e => {
                        e.onOnline()
                    })
                })
            }
        },
        h = e.i(343201),
        m = e.i(297652),
        f = class extends h.f {
            #t;
            #a;
            #n;
            #r;
            constructor(e) {
                super(), this.#t = e.client, this.mutationId = e.mutationId, this.#n = e.mutationCache, this.#a = [], this.state = e.state || {
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
                this.#a.includes(e) || (this.#a.push(e), this.clearGcTimeout(), this.#n.notify({
                    type: "observerAdded",
                    mutation: this,
                    observer: e
                }))
            }
            removeObserver(e) {
                this.#a = this.#a.filter(t => t !== e), this.scheduleGc(), this.#n.notify({
                    type: "observerRemoved",
                    mutation: this,
                    observer: e
                })
            }
            optionalRemove() {
                this.#a.length || ("pending" === this.state.status ? this.scheduleGc() : this.#n.remove(this))
            }
            continue () {
                return this.#r?.continue() ?? this.execute(this.state.variables)
            }
            async execute(e) {
                let t = () => {
                        this.#i({
                            type: "continue"
                        })
                    },
                    a = {
                        client: this.#t,
                        meta: this.options.meta,
                        mutationKey: this.options.mutationKey
                    };
                this.#r = (0, m.v)({
                    fn: () => this.options.mutationFn ? this.options.mutationFn(e, a) : Promise.reject(Error("No mutationFn found")),
                    onFail: (e, t) => {
                        this.#i({
                            type: "failed",
                            failureCount: e,
                            error: t
                        })
                    },
                    onPause: () => {
                        this.#i({
                            type: "pause"
                        })
                    },
                    onContinue: t,
                    retry: this.options.retry ?? 0,
                    retryDelay: this.options.retryDelay,
                    networkMode: this.options.networkMode,
                    canRun: () => this.#n.canRun(this)
                });
                let n = "pending" === this.state.status,
                    r = !this.#r.canStart();
                try {
                    if (n) t();
                    else {
                        this.#i({
                            type: "pending",
                            variables: e,
                            isPaused: r
                        }), this.#n.config.onMutate && await this.#n.config.onMutate(e, this, a);
                        let t = await this.options.onMutate?.(e, a);
                        t !== this.state.context && this.#i({
                            type: "pending",
                            context: t,
                            variables: e,
                            isPaused: r
                        })
                    }
                    let i = await this.#r.start();
                    return await this.#n.config.onSuccess?.(i, e, this.state.context, this, a), await this.options.onSuccess?.(i, e, this.state.context, a), await this.#n.config.onSettled?.(i, null, this.state.variables, this.state.context, this, a), await this.options.onSettled?.(i, null, e, this.state.context, a), this.#i({
                        type: "success",
                        data: i
                    }), i
                } catch (t) {
                    try {
                        await this.#n.config.onError?.(t, e, this.state.context, this, a)
                    } catch (e) {
                        Promise.reject(e)
                    }
                    try {
                        await this.options.onError?.(t, e, this.state.context, a)
                    } catch (e) {
                        Promise.reject(e)
                    }
                    try {
                        await this.#n.config.onSettled?.(void 0, t, this.state.variables, this.state.context, this, a)
                    } catch (e) {
                        Promise.reject(e)
                    }
                    try {
                        await this.options.onSettled?.(void 0, t, e, this.state.context, a)
                    } catch (e) {
                        Promise.reject(e)
                    }
                    throw this.#i({
                        type: "error",
                        error: t
                    }), t
                } finally {
                    this.#n.runNext(this)
                }
            }
            #i(e) {
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
                })(this.state), u.f.batch(() => {
                    this.#a.forEach(t => {
                        t.onMutationUpdate(e)
                    }), this.#n.notify({
                        mutation: this,
                        type: "updated",
                        action: e
                    })
                })
            }
        },
        g = c,
        p = class extends g.f {
            constructor(e = {}) {
                super(), this.config = e, this.#s = new Set, this.#l = new Map, this.#o = 0
            }
            #s;
            #l;
            #o;
            build(e, t, a) {
                let n = new f({
                    client: e,
                    mutationCache: this,
                    mutationId: ++this.#o,
                    options: e.defaultMutationOptions(t),
                    state: a
                });
                return this.add(n), n
            }
            add(e) {
                this.#s.add(e);
                let t = y(e);
                if ("string" == typeof t) {
                    let a = this.#l.get(t);
                    a ? a.push(e) : this.#l.set(t, [e])
                }
                this.notify({
                    type: "added",
                    mutation: e
                })
            }
            remove(e) {
                if (this.#s.delete(e)) {
                    let t = y(e);
                    if ("string" == typeof t) {
                        let a = this.#l.get(t);
                        if (a)
                            if (a.length > 1) {
                                let t = a.indexOf(e); - 1 !== t && a.splice(t, 1)
                            } else a[0] === e && this.#l.delete(t)
                    }
                }
                this.notify({
                    type: "removed",
                    mutation: e
                })
            }
            canRun(e) {
                let t = y(e);
                if ("string" != typeof t) return !0;
                {
                    let a = this.#l.get(t),
                        n = a?.find(e => "pending" === e.state.status);
                    return !n || n === e
                }
            }
            runNext(e) {
                let t = y(e);
                if ("string" != typeof t) return Promise.resolve();
                {
                    let a = this.#l.get(t)?.find(t => t !== e && t.state.isPaused);
                    return a?.continue() ?? Promise.resolve()
                }
            }
            clear() {
                u.f.batch(() => {
                    this.#s.forEach(e => {
                        this.notify({
                            type: "removed",
                            mutation: e
                        })
                    }), this.#s.clear(), this.#l.clear()
                })
            }
            getAll() {
                return Array.from(this.#s)
            }
            find(e) {
                let t = {
                    exact: !0,
                    ...e
                };
                return this.getAll().find(e => (0, l.L)(t, e))
            }
            findAll(e = {}) {
                return this.getAll().filter(t => (0, l.L)(e, t))
            }
            notify(e) {
                u.f.batch(() => {
                    this.listeners.forEach(t => {
                        t(e)
                    })
                })
            }
            resumePausedMutations() {
                let e = this.getAll().filter(e => e.state.isPaused);
                return u.f.batch(() => Promise.all(e.map(e => e.continue().catch(l.z))))
            }
        };

    function y(e) {
        return e.options.scope?.id
    }
    var v = e.i(758059),
        b = e.i(655100),
        x = class {
            #u;
            #n;
            #c;
            #d;
            #h;
            #m;
            #f;
            #g;
            constructor(e = {}) {
                this.#u = e.queryCache || new d, this.#n = e.mutationCache || new p, this.#c = e.defaultOptions || {}, this.#d = new Map, this.#h = new Map, this.#m = 0
            }
            mount() {
                this.#m++, 1 === this.#m && (this.#f = v.f.subscribe(async e => {
                    e && (await this.resumePausedMutations(), this.#u.onFocus())
                }), this.#g = b.f.subscribe(async e => {
                    e && (await this.resumePausedMutations(), this.#u.onOnline())
                }))
            }
            unmount() {
                this.#m--, 0 === this.#m && (this.#f?.(), this.#f = void 0, this.#g?.(), this.#g = void 0)
            }
            isFetching(e) {
                return this.#u.findAll({
                    ...e,
                    fetchStatus: "fetching"
                }).length
            }
            isMutating(e) {
                return this.#n.findAll({
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
                    a = this.#u.build(this, t),
                    n = a.state.data;
                return void 0 === n ? this.fetchQuery(e) : (e.revalidateIfStale && a.isStaleByTime((0, l.H)(t.staleTime, a)) && this.prefetchQuery(t), Promise.resolve(n))
            }
            getQueriesData(e) {
                return this.#u.findAll(e).map(({
                    queryKey: e,
                    state: t
                }) => [e, t.data])
            }
            setQueryData(e, t, a) {
                let n = this.defaultQueryOptions({
                        queryKey: e
                    }),
                    r = this.#u.get(n.queryHash),
                    i = r?.state.data,
                    s = (0, l.b)(t, i);
                if (void 0 !== s) return this.#u.build(this, n).setData(s, {
                    ...a,
                    manual: !0
                })
            }
            setQueriesData(e, t, a) {
                return u.f.batch(() => this.#u.findAll(e).map(({
                    queryKey: e
                }) => [e, this.setQueryData(e, t, a)]))
            }
            getQueryState(e) {
                let t = this.defaultQueryOptions({
                    queryKey: e
                });
                return this.#u.get(t.queryHash)?.state
            }
            removeQueries(e) {
                let t = this.#u;
                u.f.batch(() => {
                    t.findAll(e).forEach(e => {
                        t.remove(e)
                    })
                })
            }
            resetQueries(e, t) {
                let a = this.#u;
                return u.f.batch(() => (a.findAll(e).forEach(e => {
                    e.reset()
                }), this.refetchQueries({
                    type: "active",
                    ...e
                }, t)))
            }
            cancelQueries(e, t = {}) {
                let a = {
                    revert: !0,
                    ...t
                };
                return Promise.all(u.f.batch(() => this.#u.findAll(e).map(e => e.cancel(a)))).then(l.z).catch(l.z)
            }
            invalidateQueries(e, t = {}) {
                return u.f.batch(() => (this.#u.findAll(e).forEach(e => {
                    e.invalidate()
                }), e?.refetchType === "none") ? Promise.resolve() : this.refetchQueries({
                    ...e,
                    type: e?.refetchType ?? e?.type ?? "active"
                }, t))
            }
            refetchQueries(e, t = {}) {
                let a = {
                    ...t,
                    cancelRefetch: t.cancelRefetch ?? !0
                };
                return Promise.all(u.f.batch(() => this.#u.findAll(e).filter(e => !e.isDisabled() && !e.isStatic()).map(e => {
                    let t = e.fetch(void 0, a);
                    return a.throwOnError || (t = t.catch(l.z)), "paused" === e.state.fetchStatus ? Promise.resolve() : t
                }))).then(l.z)
            }
            fetchQuery(e) {
                let t = this.defaultQueryOptions(e);
                void 0 === t.retry && (t.retry = !1);
                let a = this.#u.build(this, t);
                return a.isStaleByTime((0, l.H)(t.staleTime, a)) ? a.fetch(t) : Promise.resolve(a.state.data)
            }
            prefetchQuery(e) {
                return this.fetchQuery(e).then(l.z).catch(l.z)
            }
            fetchInfiniteQuery(e) {
                return e._type = "infinite", this.fetchQuery(e)
            }
            prefetchInfiniteQuery(e) {
                return this.fetchInfiniteQuery(e).then(l.z).catch(l.z)
            }
            ensureInfiniteQueryData(e) {
                return e._type = "infinite", this.ensureQueryData(e)
            }
            resumePausedMutations() {
                return b.f.isOnline() ? this.#n.resumePausedMutations() : Promise.resolve()
            }
            getQueryCache() {
                return this.#u
            }
            getMutationCache() {
                return this.#n
            }
            getDefaultOptions() {
                return this.#c
            }
            setDefaultOptions(e) {
                this.#c = e
            }
            setQueryDefaults(e, t) {
                this.#d.set((0, l.q)(e), {
                    queryKey: e,
                    defaultOptions: t
                })
            }
            getQueryDefaults(e) {
                let t = [...this.#d.values()],
                    a = {};
                return t.forEach(t => {
                    (0, l.P)(e, t.queryKey) && Object.assign(a, t.defaultOptions)
                }), a
            }
            setMutationDefaults(e, t) {
                this.#h.set((0, l.q)(e), {
                    mutationKey: e,
                    defaultOptions: t
                })
            }
            getMutationDefaults(e) {
                let t = [...this.#h.values()],
                    a = {};
                return t.forEach(t => {
                    (0, l.P)(e, t.mutationKey) && Object.assign(a, t.defaultOptions)
                }), a
            }
            defaultQueryOptions(e) {
                if (e._defaulted) return e;
                let t = {
                    ...this.#c.queries,
                    ...this.getQueryDefaults(e.queryKey),
                    ...e,
                    _defaulted: !0
                };
                return t.queryHash || (t.queryHash = (0, l.J)(t.queryKey, t)), void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode), void 0 === t.throwOnError && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === l.V && (t.enabled = !1), t
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
                this.#u.clear(), this.#n.clear()
            }
        },
        j = e.i(317386),
        w = e.i(689326);

    function E() {
        return new x({
            defaultOptions: {
                queries: {
                    staleTime: 3e5
                },
                dehydrate: {
                    shouldDehydrateQuery: e => (0, j.I)(e) || "pending" === e.state.status
                }
            }
        })
    }
    e.s(["default", 0, function({
        children: e
    }) {
        return (0, a.jsx)(n.i, {
            children: (0, a.jsx)(r.E, {
                children: (0, a.jsxs)(i.P, {
                    client: w.f.isServer() ? E() : (t || (t = E()), t),
                    children: [e, (0, a.jsx)(s, {})]
                })
            })
        })
    }], 998003)
}, 959440, e => {
    var t = e.i(230452),
        a = e.i(516830),
        n = e.i(954755),
        r = e.i(898392),
        i = e.i(740041),
        s = e.i(544923),
        l = e.i(849141);
    let o = "GTM-5V25JL6",
        u = "a9f5fcb3-4c7f-4bb7-93bf-7607ffbdabe0";
    e.s(["default", 0, function({
        locale: e
    }) {
        let [c] = (0, s.f)("location", "US"), [d] = (0, s.f)("currency", "USD"), [h, m] = (0, a.useState)(null), f = (0, a.useCallback)(() => {
            window.OneTrust && window.OneTrust.changeLanguage(i.o[e || "en"])
        }, [e]), g = (0, a.useCallback)(async () => {
            let e = sessionStorage.getItem("UNITY_SESSION"),
                t = "";
            if (e) t = JSON.parse(e)?.user;
            else try {
                let e = await (0, l.f)();
                t = e.users[0]?.userId
            } catch (e) {
                console.error("Error fetching user from Genesis:", e)
            }
            m({
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
        return (0, a.useEffect)(() => {
            g()
        }, [g]), (0, a.useEffect)(() => {
            f()
        }, [f]), (0, t.jsxs)(t.Fragment, {
            children: [u && (0, t.jsx)(n.default, {
                src: "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js",
                charSet: "UTF-8",
                "data-domain-script": u,
                "data-dLayer-ignore": "true",
                strategy: "afterInteractive",
                "data-document-language": "true",
                onReady: f
            }), u && (0, t.jsx)(n.default, {
                id: "onetrust-optanon-wrapper",
                strategy: "afterInteractive",
                children: "function OptanonWrapper(){}"
            }), o && h && (0, t.jsx)(r.GoogleTagManager, {
                gtmId: o,
                dataLayer: h
            })]
        })
    }])
}, 532413, e => {
    var t = e.i(516830),
        a = e.i(688745);
    e.s(["default", 0, () => ((0, t.useEffect)(() => {
        0 === performance.getEntriesByName(a.c).length && performance.mark(a.c)
    }, []), null)])
}, 70607, e => {
    let t;
    var a = e.i(230452),
        n = e.i(516830);
    e.i(726386);
    var r = e.i(184400),
        r = r;

    function i() {
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
    async function s(a) {
        let n = "client-l663XvPBsVHc0dQMcaW3uSTIIhOTqE5O";
        if (!a || !n) return;
        let {
            deviceId: r,
            userId: s
        } = i();
        if (r || s) try {
            t ??= e.A(63720).then(({
                Experiment: e
            }) => e.initialize(n));
            let i = await t;
            await i.fetch({
                ...r ? {
                    device_id: r
                } : {},
                ...s ? {
                    user_id: s
                } : {}
            });
            let l = i.variant(a);
            return "string" == typeof l?.value ? l.value : void 0
        } catch (e) {
            console.error("[Client Experiment] error fetching variant", e);
            return
        }
    }
    let l = (0, n.createContext)({}),
        o = (e, t) => {
            let {
                experimentKey: a,
                targetVariant: n
            } = t;
            return !a || !n || a in e && (e[a] ?? "control") === n
        };
    e.s(["ExperimentGate", 0, ({
        experimentKey: e,
        targetVariant: t,
        children: r
    }) => o((0, n.useContext)(l), {
        experimentKey: e,
        targetVariant: t
    }) ? (0, a.jsx)(a.Fragment, {
        children: r
    }) : null, "ExperimentHeader", 0, ({
        navigation: e = [],
        ...t
    }) => {
        let i = (0, n.useContext)(l);
        return (0, a.jsx)(r.default, {
            ...t,
            navigation: e.filter(e => o(i, e)).map(({
                experimentKey: e,
                targetVariant: t,
                ...a
            }) => a)
        })
    }, "HeaderExperimentsProvider", 0, ({
        items: t,
        children: r
    }) => {
        let o = function(t) {
            let [a, r] = (0, n.useState)({}), l = (0, n.useRef)(new Set);
            return (0, n.useEffect)(() => {
                if (!t) return void r({});
                let a = Array.from(new Set(t.map(e => e && "object" == typeof e && "experimentKey" in e ? e.experimentKey : void 0).filter(e => !!e)));
                if (0 === a.length) return void r({});
                let n = !1;
                return (async () => {
                    let {
                        deviceId: t,
                        userId: o
                    } = i(), u = await Promise.all(a.map(async e => {
                        let t = await s(e);
                        return [e, t]
                    }));
                    if (!n && (r(Object.fromEntries(u)), t || o)) {
                        let {
                            sendExposureEvent: a
                        } = await e.A(486735);
                        if (n) return;
                        for (let [e, n] of u) n && !l.current.has(e) && (l.current.add(e), a(e, n, t, o))
                    }
                })(), () => {
                    n = !0
                }
            }, [t]), a
        }(t);
        return (0, a.jsx)(l.Provider, {
            value: o,
            children: r
        })
    }], 70607)
}, 264256, e => {
    var t = e.i(230452),
        a = e.i(516830),
        n = e.i(312591),
        r = e.i(201214);
    e.i(726386);
    var i = e.i(568233),
        s = e.i(869324);
    let l = (0, n.default)(() => e.A(191233), {
            loadableGenerated: {
                modules: [807973]
            },
            ssr: !1
        }),
        o = e => {
            var t;
            let a, n = (({
                action: e,
                level: t,
                pageDetails: a
            }) => ({
                event: "userEvent",
                event_name: "navigation_action",
                properties: {
                    ...a,
                    navigation_action: e,
                    navigation_level: t || ""
                }
            }))({
                action: e,
                level: "header",
                pageDetails: {
                    page_url: (a = (t = document).location).href,
                    page_hostname: a.hostname,
                    page_path: a.pathname,
                    page_query: a.search,
                    page_fragment: a.hash,
                    page_title: t.title
                }
            });
            (0, s.U)(n)
        };
    e.s(["default", 0, ({
        placeholder: e,
        noResultsMessage: n,
        filterTabs: s,
        icon: u
    }) => {
        let [c, d] = (0, a.useState)(!1), [h, m] = (0, a.useState)(!1), f = (0, a.useRef)(null), g = (0, a.useCallback)(() => {
            m(!0)
        }, []), p = (0, a.useCallback)(() => {
            d(!0), o("search modal open")
        }, []), y = (0, a.useCallback)(e => {
            d(e), e || (o("search modal close"), requestAnimationFrame(() => {
                f.current?.focus()
            }))
        }, []);
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(i.f, {
                ref: f,
                "aria-label": "Search",
                onPress: p,
                onHoverStart: g,
                onFocus: g,
                onPressStart: g,
                icon: u ?? (0, t.jsx)(r.MagnifyingGlass, {
                    "aria-hidden": !0,
                    size: 14
                })
            }), (h || c) && (0, t.jsx)(l, {
                isOpen: c,
                onOpenChange: y,
                placeholder: e,
                noResultsMessage: n,
                filterTabs: s
            })]
        })
    }], 264256)
}, 672515, e => {
    var t = e.i(230452),
        a = e.i(486089),
        n = e.i(78070);
    e.i(726386);
    var r = e.i(276254),
        i = e.i(758012),
        i = i,
        s = e.i(321950),
        l = e.i(627055),
        o = e.i(516830),
        u = e.i(849141);
    e.s(["default", 0, ({
        locale: e,
        userMenu: c,
        icon: d,
        children: h
    }) => {
        let {
            user: m,
            signIn: f,
            signOut: g
        } = (({
            locale: e
        } = {}) => {
            let [t, a] = (0, o.useState)(null), [n, r] = (0, o.useState)(!1), {
                genesisSession: i
            } = (0, s.X)(), c = (0, l.usePathname)() || "/";
            (0, o.useEffect)(() => {
                (async () => {
                    r(!0);
                    try {
                        let {
                            users: e
                        } = await (0, u.f)();
                        if (e.length > 0) {
                            let t = e[0] ?? {},
                                n = t.name?.givenName,
                                i = t.name?.familyName,
                                s = t.name?.fullName;
                            if (s && (!n || !i)) {
                                let e = s.trim().split(/\s+/);
                                n || (n = e[0] || ""), !i && e.length > 1 && (i = e[e.length - 1] || "")
                            }
                            a({
                                initials: ((e, t, a) => {
                                    let n = t ?? "",
                                        r = a ?? "";
                                    if (e) {
                                        let t = e.split(" ");
                                        n = t[0], r = t.length > 1 ? t[t.length - 1] : ""
                                    }
                                    return `${n[0]??""}${r[0]??""}`
                                })(s, n, i),
                                ...t,
                                name: {
                                    fullName: s || "",
                                    givenName: n || "",
                                    familyName: i || ""
                                }
                            }), r(!1)
                        }
                    } catch (e) {
                        console.error(e)
                    }
                })()
            }, []);
            let d = new URLSearchParams({
                client_id: "cms_unity",
                response_type: "code",
                redirect_uri: "https://unity.com/oauth",
                ...e && {
                    locale: "en" === e ? "en_us" : e
                }
            }).toString();
            return {
                user: t,
                loading: n,
                signIn: () => {
                    sessionStorage.setItem("REDIRECT_PATH", c), window.location.href = `https://api.unity.com/v1/oauth2/authorize?${d}`
                },
                signOut: () => {
                    let e = new URLSearchParams({
                        access_token: i.access_token,
                        post_logout_redirect_uri: `https://unity.com${c}`
                    }).toString();
                    sessionStorage.clear(), window.location.href = `https://api.unity.com/v1/oauth2/end-session?${e}`
                },
                signUp: () => {
                    sessionStorage.setItem("REDIRECT_PATH", c), window.location.href = `https://api.unity.com/v1/oauth2/authorize?${d}&is_reg=true`
                }
            }
        })({
            locale: e
        }), p = m?.name.givenName || "User";
        return (0, t.jsxs)(r.HeaderDropdown, {
            "aria-label": c.accountText || "Account",
            icon: m?.login ? (0, t.jsx)("span", {
                className: "capitalize",
                children: m.initials
            }) : d ?? (0, t.jsx)(a.User, {
                "aria-hidden": !0,
                size: 14
            }),
            children: [m?.login ? (0, t.jsx)(i.f, {
                title: c.userGreeting ? c.userGreeting.replace(/\{\{\s*name\s*\}\}/g, () => p) : p,
                description: m.email || "",
                image: c.spotlightImage,
                onLogout: g,
                onAccount: () => {
                    window.location.href = "https://cloud.unity.com/account/account-settings"
                },
                accountLabel: c.accountText || "My Account"
            }) : (0, t.jsx)(n.f, {
                className: "w-full",
                icon: (0, t.jsx)(a.User, {}),
                iconDirection: "left",
                onClick: f,
                children: c.signInText || "Sign in or create Unity ID"
            }), h]
        })
    }], 672515)
}, 980592, (e, t, a) => {
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = function({
        html: e,
        height: t = null,
        width: a = null,
        children: i,
        dataNtpc: s = ""
    }) {
        return (0, r.useEffect)(() => {
            s && performance.mark("mark_feature_usage", {
                detail: {
                    feature: `next-third-parties-${s}`
                }
            })
        }, [s]), (0, n.jsxs)(n.Fragment, {
            children: [i, e ? (0, n.jsx)("div", {
                style: {
                    height: null != t ? `${t}px` : "auto",
                    width: null != a ? `${a}px` : "auto"
                },
                "data-ntpc": s,
                dangerouslySetInnerHTML: {
                    __html: e
                }
            }) : null]
        })
    };
    let n = e.r(230452),
        r = e.r(516830)
}, 713903, (e, t, a) => {
    let n;
    var r = e.e && e.e.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.GoogleAnalytics = function(e) {
        let {
            gaId: t,
            debugMode: a,
            dataLayerName: r = "dataLayer",
            nonce: o
        } = e;
        return void 0 === n && (n = r), (0, s.useEffect)(() => {
            performance.mark("mark_feature_usage", {
                detail: {
                    feature: "next-third-parties-ga"
                }
            })
        }, []), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.default, {
                id: "_next-ga-init",
                dangerouslySetInnerHTML: {
                    __html: `
          window['${r}'] = window['${r}'] || [];
          function gtag(){window['${r}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}' ${a?",{ 'debug_mode': true }":""});`
                },
                nonce: o
            }), (0, i.jsx)(l.default, {
                id: "_next-ga",
                src: `https://www.googletagmanager.com/gtag/js?id=${t}`,
                nonce: o
            })]
        })
    }, a.sendGAEvent = function() {
        void 0 === n ? console.warn("@next/third-parties: GA has not been initialized") : window[n] ? window[n].push(arguments) : console.warn(`@next/third-parties: GA dataLayer ${n} does not exist`)
    };
    let i = e.r(230452),
        s = e.r(516830),
        l = r(e.r(954755))
}, 280525, (e, t, a) => {
    var n = e.e && e.e.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = function(e) {
        let {
            apiKey: t,
            ...a
        } = e, n = {
            ...a,
            key: t
        }, {
            html: l
        } = (0, i.GoogleMapsEmbed)(n);
        return (0, r.jsx)(s.default, {
            height: n.height || null,
            width: n.width || null,
            html: l,
            dataNtpc: "GoogleMapsEmbed"
        })
    };
    let r = e.r(230452),
        i = e.r(508751),
        s = n(e.r(980592))
}, 22923, (e, t, a) => {
    var n = e.e && e.e.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.sendGTMEvent = void 0, a.GoogleTagManager = function(e) {
        let {
            gtmId: t,
            gtmScriptUrl: a,
            dataLayerName: n = "dataLayer",
            auth: o,
            preview: u,
            dataLayer: c,
            nonce: d
        } = e;
        l = n;
        let h = new URL(a || "https://www.googletagmanager.com/gtm.js");
        return t && h.searchParams.set("id", t), "dataLayer" !== n && h.searchParams.set("l", n), o && h.searchParams.set("gtm_auth", o), u && (h.searchParams.set("gtm_preview", u), h.searchParams.set("gtm_cookies_win", "x")), (0, i.useEffect)(() => {
            performance.mark("mark_feature_usage", {
                detail: {
                    feature: "next-third-parties-gtm"
                }
            })
        }, []), (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(s.default, {
                id: "_next-gtm-init",
                dangerouslySetInnerHTML: {
                    __html: `
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${c?`w[l].push(${JSON.stringify(c)})`:""}
      })(window,'${n}');`
                },
                nonce: d
            }), (0, r.jsx)(s.default, {
                id: "_next-gtm",
                "data-ntpc": "GTM",
                src: h.href,
                nonce: d
            })]
        })
    };
    let r = e.r(230452),
        i = e.r(516830),
        s = n(e.r(954755)),
        l = "dataLayer";
    a.sendGTMEvent = (e, t) => {
        let a = t || l;
        window[a] = window[a] || [], window[a].push(e)
    }
}, 898392, (e, t, a) => {
    var n = e.e && e.e.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.sendGAEvent = a.GoogleAnalytics = a.sendGTMEvent = a.GoogleTagManager = a.YouTubeEmbed = a.GoogleMapsEmbed = void 0;
    var r = e.r(280525);
    Object.defineProperty(a, "GoogleMapsEmbed", {
        enumerable: !0,
        get: function() {
            return n(r).default
        }
    });
    var i = e.r(257407);
    Object.defineProperty(a, "YouTubeEmbed", {
        enumerable: !0,
        get: function() {
            return n(i).default
        }
    });
    var s = e.r(22923);
    Object.defineProperty(a, "GoogleTagManager", {
        enumerable: !0,
        get: function() {
            return s.GoogleTagManager
        }
    }), Object.defineProperty(a, "sendGTMEvent", {
        enumerable: !0,
        get: function() {
            return s.sendGTMEvent
        }
    });
    var l = e.r(713903);
    Object.defineProperty(a, "GoogleAnalytics", {
        enumerable: !0,
        get: function() {
            return l.GoogleAnalytics
        }
    }), Object.defineProperty(a, "sendGAEvent", {
        enumerable: !0,
        get: function() {
            return l.sendGAEvent
        }
    })
}, 257407, (e, t, a) => {
    var n = e.e && e.e.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = function(e) {
        let {
            html: t,
            scripts: a,
            stylesheets: n
        } = (0, s.YouTubeEmbed)(e);
        return (0, r.jsx)(l.default, {
            height: e.height || null,
            width: e.width || null,
            html: t,
            dataNtpc: "YouTubeEmbed",
            children: null == a ? void 0 : a.map(e => (0, r.jsx)(i.default, {
                src: e.url,
                strategy: o[e.strategy],
                stylesheets: n
            }, e.url))
        })
    };
    let r = e.r(230452),
        i = n(e.r(954755)),
        s = e.r(508751),
        l = n(e.r(980592)),
        o = {
            server: "beforeInteractive",
            client: "afterInteractive",
            idle: "lazyOnload",
            worker: "worker"
        }
}, 281450, e => {
    var t = e.i(81052),
        a = e.i(230452);
    e.s(["default", 0, function({
        locale: e,
        ...n
    }) {
        if (!e) throw Error(void 0);
        return (0, a.jsx)(t.R, {
            locale: e,
            ...n
        })
    }])
}, 235200, e => {
    var t = e.i(230452),
        a = e.i(516830);
    let n = (0, a.lazy)(() => e.A(65265));
    e.s(["default", 0, function(e) {
        return (0, t.jsx)(a.Suspense, {
            fallback: null,
            children: (0, t.jsx)(n, {
                ...e
            })
        })
    }])
}, 508751, (e, t, a) => {
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.YouTubeEmbed = a.GoogleMapsEmbed = a.GoogleAnalytics = void 0;
    var n = e.r(880092);
    Object.defineProperty(a, "GoogleAnalytics", {
        enumerable: !0,
        get: function() {
            return n.GoogleAnalytics
        }
    });
    var r = e.r(490057);
    Object.defineProperty(a, "GoogleMapsEmbed", {
        enumerable: !0,
        get: function() {
            return r.GoogleMapsEmbed
        }
    });
    var i = e.r(761564);
    Object.defineProperty(a, "YouTubeEmbed", {
        enumerable: !0,
        get: function() {
            return i.YouTubeEmbed
        }
    })
}, 880092, (e, t, a) => {
    var n = e.e && e.e.__rest || function(e, t) {
            var a = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (a[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) 0 > t.indexOf(n[r]) && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (a[n[r]] = e[n[r]]);
            return a
        },
        r = e.e && e.e.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.GoogleAnalytics = void 0;
    let i = r(e.r(418704)),
        s = e.r(6154);
    a.GoogleAnalytics = e => {
        var t = n(e, []);
        return (0, s.formatData)(i.default, t)
    }
}, 490057, (e, t, a) => {
    var n = e.e && e.e.__rest || function(e, t) {
            var a = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (a[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) 0 > t.indexOf(n[r]) && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (a[n[r]] = e[n[r]]);
            return a
        },
        r = e.e && e.e.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.GoogleMapsEmbed = void 0;
    let i = r(e.r(731292)),
        s = e.r(6154);
    a.GoogleMapsEmbed = e => {
        var t = n(e, []);
        return (0, s.formatData)(i.default, t)
    }
}, 761564, (e, t, a) => {
    var n = e.e && e.e.__rest || function(e, t) {
            var a = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (a[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) 0 > t.indexOf(n[r]) && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (a[n[r]] = e[n[r]]);
            return a
        },
        r = e.e && e.e.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.YouTubeEmbed = void 0;
    let i = r(e.r(447716)),
        s = e.r(6154);
    a.YouTubeEmbed = e => {
        var t = n(e, []);
        return (0, s.formatData)(i.default, t)
    }
}, 6154, (e, t, a) => {
    function n(e, t, a = !1) {
        return t ? Object.keys(e).filter(e => a ? !t.includes(e) : t.includes(e)).reduce((t, a) => (t[a] = e[a], t), {}) : {}
    }

    function r(e, t, a, n) {
        let r = n && Object.keys(n).length > 0 ? new URL(Object.values(n)[0], e) : new URL(e);
        return t && a && t.forEach(e => {
            a[e] && r.searchParams.set(e, a[e])
        }), r.toString()
    }

    function i(e, t, a, n, i) {
        var s;
        if (!t) return `<${e}></${e}>`;
        let l = (null == (s = t.src) ? void 0 : s.url) ? Object.assign(Object.assign({}, t), {
                src: r(t.src.url, t.src.params, n, i)
            }) : t,
            o = Object.keys(Object.assign(Object.assign({}, l), a)).reduce((e, t) => {
                let n = null == a ? void 0 : a[t],
                    r = l[t],
                    i = null != n ? n : r,
                    s = !0 === i ? t : `${t}="${i}"`;
                return i ? e + ` ${s}` : e
            }, "");
        return `<${e}${o}></${e}>`
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.formatData = a.createHtml = a.formatUrl = void 0, a.formatUrl = r, a.createHtml = i, a.formatData = function(e, t) {
        var a, s, l, o, u;
        let c = n(t, null == (a = e.scripts) ? void 0 : a.reduce((e, t) => [...e, ...Array.isArray(t.params) ? t.params : []], [])),
            d = n(t, null == (l = null == (s = e.html) ? void 0 : s.attributes.src) ? void 0 : l.params),
            h = n(t, [null == (u = null == (o = e.html) ? void 0 : o.attributes.src) ? void 0 : u.slugParam]),
            m = n(t, [...Object.keys(c), ...Object.keys(d), ...Object.keys(h)], !0);
        return Object.assign(Object.assign({}, e), {
            html: e.html ? i(e.html.element, e.html.attributes, m, d, h) : null,
            scripts: e.scripts ? e.scripts.map(e => Object.assign(Object.assign({}, e), {
                url: r(e.url, e.params, c)
            })) : null
        })
    }
}, 569514, 922221, e => {
    var t = e.i(230452);
    let a = (0, e.i(837826).f)({
        slots: {
            background: "mango:bg-gray-100 mango:dark:bg-gray-950",
            container: "mango:container-md mango:flex mango:flex-col mango:divide-y mango:divide-gray-200 mango:dark:divide-gray-800",
            utilities: "mango:grid mango:gap-x-6 mango:gap-y-6 mango:py-6 mango:md:grid-cols-2 mango:xl:grid-cols-4",
            navigation: "mango:grid mango:grid-cols-2 mango:gap-x-6 mango:gap-y-6 mango:py-6 mango:md:grid-cols-4 mango:lg:grid-flow-col mango:lg:auto-cols-fr mango:lg:grid-cols-none",
            legal: "mango:flex mango:flex-col mango:gap-4 mango:py-6",
            copyright: "mango:text-body-xs mango:m-0 mango:text-gray-600 mango:dark:text-gray-400",
            disclaimer: "mango:prose mango:text-body-xs mango:text-gray-600 mango:lg:w-1/2 mango:dark:text-gray-400 mango:[--mango-prose-paragraph-gap:0.5rem]",
            group: "mango:flex mango:flex-col mango:gap-2",
            groupTitle: "mango:text-body-sm mango:text-gray-600 mango:dark:text-gray-400",
            links: "mango:m-0 mango:list-none mango:p-0",
            link: "mango:text-body-xs mango:flex mango:w-fit mango:items-center mango:gap-2 mango:cursor-pointer mango:rounded-xs mango:border-0 mango:bg-transparent mango:p-0 mango:text-left mango:text-black mango:no-underline mango:outline-none mango:transition-colors mango:ease-standard mango:motion-reduce:transition-none mango:data-[hovered]:text-blue-500 mango:dark:data-[hovered]:text-blue-focus mango:data-[focus-visible]:outline-2 mango:data-[focus-visible]:outline-solid mango:data-[focus-visible]:outline-blue-focus mango:dark:text-white"
        },
        variants: {
            wide: {
                true: {
                    group: "mango:md:col-span-2"
                }
            },
            layout: {
                stack: {
                    links: "mango:flex mango:flex-col mango:gap-2"
                },
                inline: {
                    links: "mango:flex mango:flex-wrap mango:gap-x-4 mango:gap-y-2"
                },
                icons: {
                    links: "mango:flex mango:gap-2 mango:*:size-6 mango:*:*:size-full"
                }
            }
        },
        defaultVariants: {
            wide: !1,
            layout: "stack"
        }
    });
    e.s(["f", 0, a], 922221);
    var n = e.i(9946),
        r = e.i(977496);

    function i({
        children: e,
        className: s,
        ...l
    }) {
        let o = a().link({
            className: s
        });
        return (0, t.jsx)("li", {
            children: l.href ? (0, t.jsx)(r.L, {
                ...l,
                className: o,
                children: e
            }) : (0, t.jsx)(n.K, {
                ...l,
                className: o,
                children: e
            })
        })
    }
    var s = e.i(94918);
    e.s(["default", 0, ({
        href: e,
        render: a,
        ...n
    }) => (0, t.jsx)(i, {
        ...n,
        href: e,
        render: a ?? (e ? a => (0, t.jsx)(s.Link, {
            ...a,
            href: e
        }) : void 0)
    })], 569514)
}, 262670, e => {
    var t = e.i(569514);
    e.s(["f", () => t.default])
}, 442917, e => {
    e.i(569514), e.s([])
}, 184400, e => {
    var t = e.i(230452),
        a = e.i(996068),
        n = e.i(434802),
        r = e.i(571836);
    let i = ({
        title: e,
        panel: t,
        listingLabel: a,
        ...n
    }) => ({
        title: e,
        panel: t,
        listingLabel: a,
        link: n
    });
    var s = e.i(641156),
        l = e.i(516830),
        o = e.i(977496),
        u = e.i(942606);
    let c = (0, n.u)();

    function d({
        navigation: e
    }) {
        let [a, n] = (0, l.useState)(null), h = (0, l.useRef)(void 0), m = (0, l.useRef)([]), f = (0, l.useRef)([]), g = (0, l.useId)();
        (0, l.useEffect)(() => () => clearTimeout(h.current), []), (0, s.f)(null !== a, () => n(null));
        let p = () => clearTimeout(h.current),
            y = e => Array.from(f.current[e]?.querySelectorAll('a[href], button:not([disabled]), [tabindex="0"]') ?? []),
            v = () => {
                null !== a && m.current[a]?.focus(), n(null)
            };
        return (0, t.jsxs)(t.Fragment, {
            children: [null !== a && (0, t.jsx)("div", {
                "aria-hidden": "true",
                className: c.scrim()
            }), (0, t.jsxs)("nav", {
                className: c.desktop(),
                onMouseEnter: p,
                onMouseLeave: () => {
                    h.current = setTimeout(() => n(null), 150)
                },
                onKeyDown: t => {
                    let r = m.current.indexOf(t.target);
                    if ("ArrowDown" === t.key && -1 !== r && e[r]?.panel) {
                        t.preventDefault(), (0, u.flushSync)(() => n(r)), y(r)[0]?.focus();
                        return
                    }
                    if (null !== a) {
                        if ("Escape" === t.key) {
                            t.preventDefault(), v();
                            return
                        }
                        if ("Tab" === t.key) {
                            let e = y(a),
                                n = e.indexOf(t.target);
                            if (-1 === n) return;
                            t.shiftKey && 0 === n ? (t.preventDefault(), v()) : t.shiftKey || n !== e.length - 1 || (t.preventDefault(), e[0].focus())
                        }
                    }
                },
                onBlur: e => {
                    let t = e.relatedTarget;
                    t instanceof Node && !e.currentTarget.contains(t) && n(null)
                },
                onClickCapture: e => {
                    e.target.closest("a") && n(null)
                },
                children: [(0, t.jsx)("ul", {
                    className: c.triggers(),
                    children: e.map((e, r) => {
                        let s, {
                                title: l,
                                panel: u,
                                link: d
                            } = i(e),
                            {
                                render: h,
                                ...f
                            } = d;
                        return (0, t.jsx)("li", {
                            children: (0, t.jsx)(o.L, {
                                ...f,
                                ref: e => {
                                    m.current[r] = e
                                },
                                className: c.trigger(),
                                onMouseEnter: e => {
                                    f.onMouseEnter?.(e), p(), n(u ? r : null)
                                },
                                render: u ? (s = {
                                    "aria-expanded": a === r,
                                    "aria-controls": `${g}-panel-${r}`
                                }, function(e, a) {
                                    let n = {
                                        ...e,
                                        ...s
                                    };
                                    if (h) return h(n, a);
                                    let {
                                        children: r,
                                        ...i
                                    } = n;
                                    return "href" in i ? (0, t.jsx)("a", {
                                        ...i,
                                        children: r
                                    }) : (0, t.jsx)("span", {
                                        ...i,
                                        children: r
                                    })
                                }) : h,
                                children: l
                            })
                        }, r)
                    })
                }), (0, t.jsx)("div", {
                    className: c.shell({
                        open: null !== a
                    }),
                    children: (0, t.jsx)("div", {
                        className: c.shellInner(),
                        children: (0, t.jsx)(r.E, {
                            value: "desktop",
                            children: e.map(({
                                panel: e
                            }, n) => e && (0, t.jsx)("div", {
                                id: `${g}-panel-${n}`,
                                ref: e => {
                                    f.current[n] = e
                                },
                                inert: a !== n,
                                className: c.panel({
                                    active: a === n
                                }),
                                children: e
                            }, n))
                        })
                    })
                })]
            })]
        })
    }
    var h = e.i(870866),
        m = e.i(768043),
        f = e.i(790472),
        g = e.i(520111),
        p = e.i(163165),
        y = e.i(242042);
    let v = new Map([
            ["bold", l.createElement(l.Fragment, null, l.createElement("path", {
                d: "M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"
            }))],
            ["duotone", l.createElement(l.Fragment, null, l.createElement("path", {
                d: "M216,64V192H40V64Z",
                opacity: "0.2"
            }), l.createElement("path", {
                d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
            }))],
            ["fill", l.createElement(l.Fragment, null, l.createElement("path", {
                d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"
            }))],
            ["light", l.createElement(l.Fragment, null, l.createElement("path", {
                d: "M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"
            }))],
            ["regular", l.createElement(l.Fragment, null, l.createElement("path", {
                d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
            }))],
            ["thin", l.createElement(l.Fragment, null, l.createElement("path", {
                d: "M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM40,68H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z"
            }))]
        ]),
        b = l.forwardRef((e, t) => l.createElement(y.w, {
            ref: t,
            ...e,
            weights: v
        }));
    b.displayName = "ListIcon";
    var x = e.i(9946),
        j = e.i(745364);
    let w = (0, n.u)();

    function E({
        navigation: e,
        actions: a,
        menuLabel: n
    }) {
        let [u, c] = (0, l.useState)(!1), [d, h] = (0, l.useState)(!1), y = () => h(!0), v = (0, l.useRef)(null), M = (0, l.useId)();
        return (0, s.f)(u, () => c(!1)), (0, l.useEffect)(() => {
            if (!u) return;
            let {
                overflow: e
            } = document.body.style;
            return document.body.style.overflow = "hidden", () => {
                document.body.style.overflow = e
            }
        }, [u]), (0, l.useEffect)(() => {
            if (!u) return;
            let e = e => {
                v.current?.contains(e.target) || c(!1)
            };
            return document.addEventListener("pointerdown", e, !0), () => document.removeEventListener("pointerdown", e, !0)
        }, [u]), (0, t.jsxs)("div", {
            ref: v,
            className: w.mobile(),
            children: [(0, t.jsx)(p.Button, {
                variant: "secondary",
                size: "sm",
                iconLeft: u ? (0, t.jsx)(f.f, {
                    "aria-hidden": !0
                }) : (0, t.jsx)(b, {
                    "aria-hidden": !0
                }),
                "aria-label": n,
                "aria-expanded": u,
                "aria-controls": M,
                onPressStart: y,
                onHoverStart: y,
                onPress: () => c(!u)
            }), (0, t.jsx)("div", {
                id: M,
                inert: !u,
                className: w.drawer({
                    open: u
                }),
                onClickCapture: e => {
                    e.target.closest("a") && c(!1)
                },
                children: d && (0, t.jsx)("nav", {
                    children: (0, t.jsx)(r.E, {
                        value: "mobile",
                        children: (0, t.jsxs)(j.T, {
                            className: w.mobileList(),
                            children: [e.map((e, a) => {
                                let {
                                    title: n,
                                    panel: r,
                                    listingLabel: s,
                                    link: l
                                } = i(e);
                                return r ? (0, t.jsxs)(j.l, {
                                    id: a,
                                    className: w.mobileItem(),
                                    children: [(0, t.jsxs)(x.K, {
                                        slot: "trigger",
                                        className: w.mobileTrigger(),
                                        children: [(0, t.jsx)("span", {
                                            className: w.mobileTitle({
                                                className: w.mobileTitleMotion()
                                            }),
                                            children: n
                                        }), (0, t.jsx)("span", {
                                            className: w.mobileCaret(),
                                            children: (0, t.jsx)(p.Button, {
                                                decorative: !0,
                                                variant: "ghost",
                                                size: "sm",
                                                iconLeft: (0, t.jsx)(m.c, {
                                                    weight: "fill",
                                                    "aria-hidden": !0
                                                }),
                                                disableAnimation: !0,
                                                className: w.mobileCaretButton()
                                            })
                                        })]
                                    }), (0, t.jsx)(j.B, {
                                        className: w.mobilePanel(),
                                        children: (0, t.jsxs)("div", {
                                            className: w.mobilePanelContent(),
                                            children: [r, s && (0, t.jsx)(p.Button, {
                                                ...l,
                                                variant: "secondary",
                                                size: "lg",
                                                iconRight: (0, t.jsx)(g.c, {
                                                    "aria-hidden": !0
                                                }),
                                                className: w.mobileListing(),
                                                children: s
                                            })]
                                        })
                                    }), (0, t.jsx)("span", {
                                        "aria-hidden": "true",
                                        className: w.mobileSlab()
                                    })]
                                }, a) : (0, t.jsx)("div", {
                                    className: w.mobileItem(),
                                    children: (0, t.jsx)(o.L, {
                                        ...l,
                                        className: w.mobileLink(),
                                        children: (0, t.jsx)("span", {
                                            className: w.mobileTitle(),
                                            children: n
                                        })
                                    })
                                }, a)
                            }), a && (0, t.jsx)("div", {
                                className: w.mobileActions(),
                                children: a
                            })]
                        })
                    })
                })
            })]
        })
    }

    function M({
        navigation: e = [],
        logo: r,
        utilities: i,
        mobileActions: s,
        menuLabel: l = "Menu",
        className: o
    }) {
        let u = (0, n.u)();
        return (0, t.jsx)("header", {
            className: u.root({
                className: ["dark", o]
            }),
            children: (0, t.jsx)(a.MangoThemeProvider, {
                theme: "dark",
                children: (0, t.jsxs)("div", {
                    className: u.container(),
                    children: [(0, t.jsxs)("div", {
                        className: u.start(),
                        children: [r ?? (0, t.jsx)(h.f, {
                            href: "/"
                        }), (0, t.jsx)(d, {
                            navigation: e
                        })]
                    }), (0, t.jsxs)("div", {
                        className: u.end(),
                        children: [i, (0, t.jsx)(E, {
                            navigation: e,
                            actions: s,
                            menuLabel: l
                        })]
                    })]
                })
            })
        })
    }
    var _ = e.i(825610),
        O = e.i(704190),
        C = e.i(401287);
    e.s(["default", 0, ({
        navigation: e,
        logo: a,
        ...n
    }) => (0, t.jsx)(M, {
        ...n,
        logo: a ?? (0, t.jsx)(O.default, {
            "data-link-location": _.f.headerLogo,
            "data-link-id": "header-logo"
        }),
        navigation: e?.map(e => ({
            ...e,
            render: e.render ?? (0, C.f)(e.href)
        }))
    })], 184400)
}, 978578, e => {
    var t = e.i(230452),
        a = e.i(26494),
        n = e.i(163165),
        r = e.i(434802),
        i = e.i(977496);

    function s({
        title: e,
        description: a,
        tag: l,
        media: o,
        actionLabel: u,
        className: c,
        ...d
    }) {
        let h = (0, r.E)();
        return (0, t.jsxs)(i.L, {
            ...d,
            className: h.root({
                className: c
            }),
            children: [o && (0, t.jsx)("span", {
                className: h.media(),
                children: o
            }), (0, t.jsxs)("span", {
                className: h.content(),
                children: [(0, t.jsxs)("span", {
                    className: h.copy(),
                    children: [l && (0, t.jsx)("span", {
                        className: h.tag(),
                        children: l
                    }), (0, t.jsx)("span", {
                        className: h.title(),
                        children: e
                    }), a && (0, t.jsx)("span", {
                        className: h.description(),
                        children: a
                    })]
                }), u && (0, t.jsx)("span", {
                    className: h.action(),
                    children: (0, t.jsx)(n.Button, {
                        decorative: !0,
                        variant: "secondary",
                        size: "sm",
                        children: u
                    })
                })]
            })]
        })
    }
    var l = e.i(544789),
        o = e.i(401287);
    e.s(["default", 0, ({
        tag: e,
        image: n,
        href: r,
        render: i,
        ...u
    }) => (0, t.jsx)(s, {
        ...u,
        href: r,
        render: i ?? (0, o.f)(r),
        tag: e && (0, t.jsx)(l.f, {
            children: e
        }),
        media: n && (0, t.jsx)(a.default, {
            src: n.src,
            alt: "",
            fill: !0,
            sizes: "25vw",
            className: "object-cover"
        })
    })], 978578)
}, 642475, e => {
    var t = e.i(230452),
        a = e.i(26494),
        n = e.i(547734),
        r = e.i(544789),
        i = e.i(401287);
    e.s(["default", 0, ({
        tag: e,
        image: s,
        icon: l,
        href: o,
        render: u,
        ...c
    }) => (0, t.jsx)(n.HeaderMenuLink, {
        ...c,
        href: o,
        render: u ?? (0, i.f)(o),
        tag: e && (0, t.jsx)(r.f, {
            children: e
        }),
        icon: l ?? (s && (0, t.jsx)(a.default, {
            src: s.src,
            alt: s.alt,
            width: 24,
            height: 24
        }))
    })])
}, 726386, 758012, e => {
    e.i(184400), e.i(704190), e.i(642475), e.i(978578);
    var t = e.i(230452),
        a = e.i(26494),
        n = e.i(163165),
        r = e.i(434802),
        i = e.i(242042),
        s = e.i(516830);
    let l = new Map([
            ["bold", s.createElement(s.Fragment, null, s.createElement("path", {
                d: "M124,216a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V40A12,12,0,0,1,48,28h64a12,12,0,0,1,0,24H60V204h52A12,12,0,0,1,124,216Zm108.49-96.49-40-40a12,12,0,0,0-17,17L195,116H112a12,12,0,0,0,0,24h83l-19.52,19.51a12,12,0,0,0,17,17l40-40A12,12,0,0,0,232.49,119.51Z"
            }))],
            ["duotone", s.createElement(s.Fragment, null, s.createElement("path", {
                d: "M224,56V200a16,16,0,0,1-16,16H48V40H208A16,16,0,0,1,224,56Z",
                opacity: "0.2"
            }), s.createElement("path", {
                d: "M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"
            }))],
            ["fill", s.createElement(s.Fragment, null, s.createElement("path", {
                d: "M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40A8,8,0,0,0,176,88v32H112a8,8,0,0,0,0,16h64v32a8,8,0,0,0,13.66,5.66l40-40A8,8,0,0,0,229.66,122.34Z"
            }))],
            ["light", s.createElement(s.Fragment, null, s.createElement("path", {
                d: "M118,216a6,6,0,0,1-6,6H48a6,6,0,0,1-6-6V40a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H54V210h58A6,6,0,0,1,118,216Zm110.24-92.24-40-40a6,6,0,0,0-8.48,8.48L209.51,122H112a6,6,0,0,0,0,12h97.51l-29.75,29.76a6,6,0,1,0,8.48,8.48l40-40A6,6,0,0,0,228.24,123.76Z"
            }))],
            ["regular", s.createElement(s.Fragment, null, s.createElement("path", {
                d: "M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"
            }))],
            ["thin", s.createElement(s.Fragment, null, s.createElement("path", {
                d: "M116,216a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H52V212h60A4,4,0,0,1,116,216Zm110.83-90.83-40-40a4,4,0,0,0-5.66,5.66L214.34,124H112a4,4,0,0,0,0,8H214.34l-33.17,33.17a4,4,0,0,0,5.66,5.66l40-40A4,4,0,0,0,226.83,125.17Z"
            }))]
        ]),
        o = s.forwardRef((e, t) => s.createElement(i.w, {
            ref: t,
            ...e,
            weights: l
        }));
    o.displayName = "SignOutIcon";
    let u = new Map([
            ["bold", s.createElement(s.Fragment, null, s.createElement("path", {
                d: "M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z"
            }))],
            ["duotone", s.createElement(s.Fragment, null, s.createElement("path", {
                d: "M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z",
                opacity: "0.2"
            }), s.createElement("path", {
                d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
            }))],
            ["fill", s.createElement(s.Fragment, null, s.createElement("path", {
                d: "M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"
            }))],
            ["light", s.createElement(s.Fragment, null, s.createElement("path", {
                d: "M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z"
            }))],
            ["regular", s.createElement(s.Fragment, null, s.createElement("path", {
                d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
            }))],
            ["thin", s.createElement(s.Fragment, null, s.createElement("path", {
                d: "M227.46,214c-16.52-28.56-43-48.06-73.68-55.09a68,68,0,1,0-51.56,0c-30.64,7-57.16,26.53-73.68,55.09a4,4,0,0,0,6.92,4C55,184.19,89.62,164,128,164s73,20.19,92.54,54a4,4,0,0,0,3.46,2,3.93,3.93,0,0,0,2-.54A4,4,0,0,0,227.46,214ZM68,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,68,96Z"
            }))]
        ]),
        c = s.forwardRef((e, t) => s.createElement(i.w, {
            ref: t,
            ...e,
            weights: u
        }));
    c.displayName = "UserIcon";
    let d = (0, r.b)();

    function h({
        title: e,
        description: a,
        media: r,
        onLogout: i,
        onAccount: s,
        accountLabel: l = "My Account",
        logoutLabel: u = "Log out",
        className: m
    }) {
        return (0, t.jsxs)("div", {
            className: d.root({
                className: m
            }),
            children: [r && (0, t.jsx)("div", {
                className: d.media(),
                children: r
            }), (0, t.jsx)("div", {
                "aria-hidden": "true",
                className: d.scrim()
            }), (0, t.jsxs)("div", {
                className: d.content(),
                children: [(0, t.jsxs)("div", {
                    className: d.top(),
                    children: [(0, t.jsxs)("div", {
                        className: d.copy(),
                        children: [(0, t.jsx)("div", {
                            className: d.title(),
                            children: e
                        }), (0, t.jsx)("div", {
                            className: d.description(),
                            children: a
                        })]
                    }), (0, t.jsx)(n.Button, {
                        variant: "outline",
                        size: "xs",
                        iconLeft: (0, t.jsx)(o, {
                            "aria-hidden": !0
                        }),
                        "aria-label": u,
                        onPress: i
                    })]
                }), (0, t.jsx)("div", {
                    children: (0, t.jsx)(n.Button, {
                        variant: "secondary",
                        size: "sm",
                        iconLeft: (0, t.jsx)(c, {
                            "aria-hidden": !0
                        }),
                        onPress: s,
                        children: l
                    })
                })]
            })]
        })
    }
    e.s(["f", 0, ({
        image: e,
        ...n
    }) => (0, t.jsx)(h, {
        ...n,
        media: e && (0, t.jsx)(a.default, {
            src: e.src,
            alt: "",
            fill: !0,
            sizes: "(max-width: 768px) 100vw, 20rem",
            className: "object-cover object-center"
        })
    })], 758012), e.s([], 726386)
}, 401287, e => {
    var t = e.i(230452),
        a = e.i(94918);
    e.s(["f", 0, e => e ? n => (0, t.jsx)(a.Link, {
        ...n,
        href: e
    }) : void 0])
}, 915357, e => {
    e.i(796573), e.i(996068);
    var t = e.i(922221),
        a = e.i(230452);
    e.s(["s", 0, function({
        title: e,
        children: n,
        wide: r,
        className: i
    }) {
        let s = (0, t.f)({
            wide: r
        });
        return (0, a.jsxs)("div", {
            className: s.group({
                className: i
            }),
            children: [(0, a.jsx)("div", {
                className: s.groupTitle(),
                children: e
            }), n]
        })
    }, "c", 0, function({
        layout: e,
        children: n,
        className: r
    }) {
        return (0, a.jsx)("ul", {
            className: (0, t.f)({
                layout: e
            }).links({
                className: r
            }),
            children: n
        })
    }])
}, 276254, e => {
    var t = e.i(434802),
        a = e.i(641156),
        n = e.i(568233),
        r = e.i(516830),
        i = e.i(230452);
    let s = (0, t.p)();
    e.s(["HeaderDropdown", 0, function({
        icon: t,
        "aria-label": l,
        children: o,
        placement: u = "bottom end",
        offset: c = 24,
        className: d,
        onOpenChange: h
    }) {
        let [m, f] = (0, r.useState)(!1), [g, p] = (0, r.useState)(null), y = (0, r.useRef)(null), v = e => {
            e !== m && (f(e), h?.(e))
        };
        (0, a.f)(m, () => v(!1));
        let b = () => {
            g || e.A(276473).then(e => e.default).then(e => p(() => e), () => f(!1))
        };
        return (0, r.useEffect)(() => {
            if (!m || g) return;
            let e = e => {
                "Escape" === e.key && (f(!1), h?.(!1))
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
        }, [m, g, h]), (0, i.jsxs)(i.Fragment, {
            children: [m && (0, i.jsx)("div", {
                "aria-hidden": "true",
                className: s.scrim(),
                onClick: () => v(!1)
            }), (0, i.jsx)(n.f, {
                ref: y,
                icon: t,
                "aria-label": l,
                "aria-haspopup": "dialog",
                "aria-expanded": m,
                isActive: m,
                onHoverStart: b,
                onFocus: b,
                onPressStart: b,
                onPress: () => v(!m)
            }), g && (0, i.jsx)(g, {
                triggerRef: y,
                isOpen: m,
                onOpenChange: v,
                "aria-label": l,
                placement: u,
                offset: c,
                className: d,
                children: o
            })]
        })
    }])
}, 568233, e => {
    var t = e.i(434802),
        a = e.i(9946),
        n = e.i(230452);
    e.s(["f", 0, function({
        icon: e,
        isActive: r,
        className: i,
        ...s
    }) {
        return (0, n.jsx)(a.K, {
            ...s,
            className: (0, t.k)({
                isActive: r,
                className: i
            }),
            children: e
        })
    }])
}, 870866, 704190, e => {
    var t = e.i(434802),
        a = e.i(977496),
        n = e.i(230452);

    function r({
        "aria-label": e = "Unity",
        className: i,
        ...s
    }) {
        return (0, n.jsx)(a.L, {
            ...s,
            "aria-label": e,
            className: (0, t.u)().logo({
                className: i
            }),
            children: (0, n.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "19",
                height: "22",
                viewBox: "0 0 19 22",
                fill: "none",
                "aria-hidden": "true",
                children: (0, n.jsx)("path", {
                    d: "M10.3305 3.93605L13.7281 5.94619C13.8503 6.01676 13.8547 6.21254 13.7281 6.28311L9.69098 8.67343C9.56884 8.74627 9.4245 8.74172 9.31124 8.67343L5.27408 6.28311C5.14972 6.21482 5.1475 6.01449 5.27408 5.94619L8.66947 3.93605V0L0 5.13121V15.3936L3.32433 13.4267V9.40646C3.32211 9.26304 3.48644 9.1606 3.60858 9.238L7.64575 11.6283C7.76788 11.7012 7.83672 11.8309 7.83672 11.9652V16.7436C7.83894 16.887 7.67461 16.9894 7.55248 16.912L4.15486 14.9019L0.830529 16.8688L9.5 22L18.1695 16.8688L14.8451 14.9019L11.4475 16.912C11.3276 16.9872 11.1588 16.8893 11.1633 16.7436V11.9652C11.1633 11.8218 11.241 11.6943 11.3543 11.6283L15.3914 9.238C15.5113 9.16287 15.6801 9.25849 15.6757 9.40646V13.4267L19 15.3936V5.13121L10.3305 0V3.93605Z",
                    fill: "white"
                })
            })
        })
    }
    e.s(["f", 0, r], 870866);
    var i = e.i(401287);
    e.s(["default", 0, ({
        href: e = "/",
        render: t,
        ...a
    }) => (0, n.jsx)(r, {
        ...a,
        href: e,
        render: t ?? (0, i.f)(e)
    })], 704190)
}, 547734, e => {
    var t = e.i(434802),
        a = e.i(571836),
        n = e.i(242042),
        r = e.i(516830);
    let i = new Map([
            ["bold", r.createElement(r.Fragment, null, r.createElement("path", {
                d: "M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"
            }))],
            ["duotone", r.createElement(r.Fragment, null, r.createElement("path", {
                d: "M192,64V168L88,64Z",
                opacity: "0.2"
            }), r.createElement("path", {
                d: "M192,56H88a8,8,0,0,0-5.66,13.66L128.69,116,58.34,186.34a8,8,0,0,0,11.32,11.32L140,127.31l46.34,46.35A8,8,0,0,0,200,168V64A8,8,0,0,0,192,56Zm-8,92.69-38.34-38.34h0L107.31,72H184Z"
            }))],
            ["fill", r.createElement(r.Fragment, null, r.createElement("path", {
                d: "M200,64V168a8,8,0,0,1-13.66,5.66L140,127.31,69.66,197.66a8,8,0,0,1-11.32-11.32L128.69,116,82.34,69.66A8,8,0,0,1,88,56H192A8,8,0,0,1,200,64Z"
            }))],
            ["light", r.createElement(r.Fragment, null, r.createElement("path", {
                d: "M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"
            }))],
            ["regular", r.createElement(r.Fragment, null, r.createElement("path", {
                d: "M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"
            }))],
            ["thin", r.createElement(r.Fragment, null, r.createElement("path", {
                d: "M196,64V168a4,4,0,0,1-8,0V73.66L66.83,194.83a4,4,0,0,1-5.66-5.66L182.34,68H88a4,4,0,0,1,0-8H192A4,4,0,0,1,196,64Z"
            }))]
        ]),
        s = r.forwardRef((e, t) => r.createElement(n.w, {
            ref: t,
            ...e,
            weights: i
        }));
    s.displayName = "ArrowUpRightIcon";
    var l = e.i(977496),
        o = e.i(230452);
    e.s(["HeaderMenu", 0, function({
        children: e,
        highlight: n,
        className: r
    }) {
        let i = (0, a.R)(),
            s = (0, t.V)({
                arrangement: i
            });
        return (0, o.jsxs)("div", {
            className: s.menu({
                className: r
            }),
            children: [e, n && "desktop" === i && (0, o.jsx)("div", {
                className: s.highlight(),
                children: n
            })]
        })
    }, "HeaderMenuLink", 0, function({
        title: e,
        description: n,
        tag: r,
        icon: i,
        isExternal: u,
        size: c,
        className: d,
        ...h
    }) {
        let m = (0, a.R)(),
            f = "dropdown" === m && "lg" === c ? "desktop" : m,
            g = (0, t.A)({
                arrangement: f,
                size: c
            }),
            p = u && (0, o.jsx)(s, {
                "aria-hidden": !0,
                size: "1rem",
                className: g.external()
            });
        return (0, o.jsx)(l.L, {
            ...h,
            className: g.link({
                className: d
            }),
            children: "desktop" === f ? (0, o.jsxs)(o.Fragment, {
                children: [i && (0, o.jsx)("span", {
                    className: g.icon(),
                    children: i
                }), (0, o.jsxs)("span", {
                    className: g.body(),
                    children: [(0, o.jsxs)("span", {
                        className: g.title(),
                        children: [(0, o.jsx)("span", {
                            children: e
                        }), r, p]
                    }), n && (0, o.jsx)("span", {
                        className: g.description(),
                        children: n
                    })]
                })]
            }) : (0, o.jsxs)(o.Fragment, {
                children: [(i || "mobile" === f) && (0, o.jsx)("span", {
                    className: g.icon(),
                    children: i
                }), (0, o.jsxs)("span", {
                    className: g.title(),
                    children: [e, "mobile" === f && p]
                })]
            })
        })
    }, "HeaderMenuSection", 0, function({
        title: e,
        children: n,
        actions: r,
        mobileActions: i,
        className: s
    }) {
        let l = (0, a.R)(),
            u = (0, t.V)({
                arrangement: l
            }),
            c = "mobile" === l ? i ?? r : r;
        return (0, o.jsxs)("div", {
            className: u.section({
                className: s
            }),
            children: [(0, o.jsx)("div", {
                className: u.sectionTitle(),
                children: e
            }), (0, o.jsx)("div", {
                className: u.sectionLinks(),
                children: n
            }), c && (0, o.jsx)("div", {
                className: u.sectionActions(),
                children: c
            })]
        })
    }], 547734)
}, 641156, e => {
    var t = e.i(516830);
    e.s(["f", 0, function(e, a) {
        (0, t.useEffect)(() => {
            if (e) return window.addEventListener("popstate", a), () => window.removeEventListener("popstate", a)
        }, [e, a])
    }])
}], 418704, (e, t, a) => {
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
}, 731292, (e, t, a) => {
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
}, 447716, (e, t, a) => {
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
}]);

//# debugId=3a9b9833-1c7b-29e7-822e-ecef4f17ed03