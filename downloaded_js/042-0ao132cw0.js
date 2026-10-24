;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "76c6d3ac-0790-8f55-b110-f352a6af8343")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 122416, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(409781),
        r = e.i(869324);
    e.s(["default", 0, () => {
        let e = (0, a.useRef)(null);
        return (0, a.useEffect)(() => {
            let t = e.current?.closest("footer");
            if (!t) return;
            let a = () => (0, r.default)({
                event: "userEvent",
                event_name: "navigation_click",
                properties: {
                    navigation_click_block: "Footer"
                }
            });
            return t.addEventListener("click", a), () => t.removeEventListener("click", a)
        }, []), (0, t.jsx)("span", {
            ref: e,
            hidden: !0,
            "data-sentry-component": "FooterClickTracker",
            "data-sentry-source-file": "FooterClickTracker.tsx"
        })
    }])
}, 193731, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(409781);
    e.i(442917);
    var r = e.i(262670);
    let n = ({
            className: e = "",
            width: a = 30,
            height: r = 14
        }) => (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: a,
            height: r,
            viewBox: "0 0 30 14",
            className: e,
            "data-sentry-element": "svg",
            "data-sentry-component": "PrivacyIcon",
            "data-sentry-source-file": "PrivacyIcon.tsx",
            children: (0, t.jsxs)("g", {
                "data-sentry-element": "g",
                "data-sentry-source-file": "PrivacyIcon.tsx",
                children: [(0, t.jsx)("g", {
                    id: "final---dec.11-2020_1_",
                    "data-sentry-element": "g",
                    "data-sentry-source-file": "PrivacyIcon.tsx",
                    children: (0, t.jsx)("g", {
                        id: "_x30_208-our-toggle_2_",
                        transform: "translate(-1275.000000, -200.000000)",
                        "data-sentry-element": "g",
                        "data-sentry-source-file": "PrivacyIcon.tsx",
                        children: (0, t.jsx)("g", {
                            id: "Final-Copy-2_2_",
                            transform: "translate(1275.000000, 200.000000)",
                            "data-sentry-element": "g",
                            "data-sentry-source-file": "PrivacyIcon.tsx",
                            children: (0, t.jsx)("path", {
                                style: {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    fill: "#FFFFFF"
                                },
                                d: "M7.4,12.8h6.8l3.1-11.6H7.4C4.2,1.2,1.6,3.8,1.6,7S4.2,12.8,7.4,12.8z",
                                "data-sentry-element": "path",
                                "data-sentry-source-file": "PrivacyIcon.tsx"
                            })
                        })
                    })
                }), (0, t.jsx)("g", {
                    id: "final---dec.11-2020",
                    "data-sentry-element": "g",
                    "data-sentry-source-file": "PrivacyIcon.tsx",
                    children: (0, t.jsx)("g", {
                        id: "_x30_208-our-toggle",
                        transform: "translate(-1275.000000, -200.000000)",
                        "data-sentry-element": "g",
                        "data-sentry-source-file": "PrivacyIcon.tsx",
                        children: (0, t.jsxs)("g", {
                            id: "Final-Copy-2",
                            transform: "translate(1275.000000, 200.000000)",
                            "data-sentry-element": "g",
                            "data-sentry-source-file": "PrivacyIcon.tsx",
                            children: [(0, t.jsx)("path", {
                                style: {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    fill: "#0066FF"
                                },
                                d: "M22.6,0H7.4c-3.9,0-7,3.1-7,7s3.1,7,7,7h15.2c3.9,0,7-3.1,7-7S26.4,0,22.6,0z M1.6,7c0-3.2,2.6-5.8,5.8-5.8\n       h9.9l-3.1,11.6H7.4C4.2,12.8,1.6,10.2,1.6,7z",
                                "data-sentry-element": "path",
                                "data-sentry-source-file": "PrivacyIcon.tsx"
                            }), (0, t.jsx)("path", {
                                id: "x",
                                style: {
                                    fill: "#FFFFFF"
                                },
                                d: "M24.6,4c0.2,0.2,0.2,0.6,0,0.8l0,0L22.5,7l2.2,2.2c0.2,0.2,0.2,0.6,0,0.8c-0.2,0.2-0.6,0.2-0.8,0\n       l0,0l-2.2-2.2L19.5,10c-0.2,0.2-0.6,0.2-0.8,0c-0.2-0.2-0.2-0.6,0-0.8l0,0L20.8,7l-2.2-2.2c-0.2-0.2-0.2-0.6,0-0.8\n       c0.2-0.2,0.6-0.2,0.8,0l0,0l2.2,2.2L23.8,4C24,3.8,24.4,3.8,24.6,4z",
                                "data-sentry-element": "path",
                                "data-sentry-source-file": "PrivacyIcon.tsx"
                            }), (0, t.jsx)("path", {
                                id: "y",
                                style: {
                                    fill: "#0066FF"
                                },
                                d: "M12.7,4.1c0.2,0.2,0.3,0.6,0.1,0.8l0,0L8.6,9.8C8.5,9.9,8.4,10,8.3,10c-0.2,0.1-0.5,0.1-0.7-0.1l0,0\n       L5.4,7.7c-0.2-0.2-0.2-0.6,0-0.8c0.2-0.2,0.6-0.2,0.8,0l0,0L8,8.6l3.8-4.5C12,3.9,12.4,3.9,12.7,4.1z",
                                "data-sentry-element": "path",
                                "data-sentry-source-file": "PrivacyIcon.tsx"
                            })]
                        })
                    })
                })]
            })
        }),
        s = () => {
            window.OneTrust?.ToggleInfoDisplay()
        };
    e.s(["default", 0, ({
        label: e
    }) => {
        let [i, o] = (0, a.useState)(!1);
        return ((0, a.useEffect)(() => {
            o(!0)
        }, []), i) ? (0, t.jsxs)(r.FooterLink, {
            id: "ot-sdk-btn",
            onPress: s,
            "data-sentry-element": "FooterLink",
            "data-sentry-component": "FooterCookieSettingsButton",
            "data-sentry-source-file": "FooterCookieSettingsButton.tsx",
            children: [(0, t.jsx)(n, {
                "data-sentry-element": "PrivacyIcon",
                "data-sentry-source-file": "FooterCookieSettingsButton.tsx"
            }), e]
        }) : null
    }], 193731)
}, 549855, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(409781);
    e.i(442917);
    var r = e.i(915357),
        n = e.i(544842),
        s = e.i(65583),
        i = e.i(557749),
        o = e.i(7075),
        l = e.i(433519),
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
        h = (0, s.fieldStyles)({
            size: "sm"
        }),
        m = (0, i.selectStyles)({
            size: "sm"
        }),
        f = (0, n.dropdownStyles)(),
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
            "data-sentry-component": "CurrencySelectPlaceholder",
            "data-sentry-source-file": "FooterCurrencySelector.tsx",
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
                    "data-sentry-element": "svg",
                    "data-sentry-source-file": "FooterCurrencySelector.tsx",
                    children: (0, t.jsx)("path", {
                        d: "M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z",
                        "data-sentry-element": "path",
                        "data-sentry-source-file": "FooterCurrencySelector.tsx"
                    })
                })]
            })
        });
    e.s(["default", 0, ({
        currencyLabel: e
    }) => {
        let [n] = (0, u.default)("location", "US"), [s, i] = (0, u.default)("currency", c[n] || "USD"), {
            dispatch: h,
            state: m
        } = (0, l.default)(), f = (0, o.usePathname)(), [y] = (0, u.default)("experiment_exposure", ""), v = (0, a.useRef)(null), [x, b] = (0, a.useState)("none"), j = e => b(t => g[e] > g[t] ? e : t);
        return (0, a.useEffect)(() => {
            let e = v.current;
            if ("none" !== x || !e) return;
            if ("u" < typeof IntersectionObserver) return void j("passive");
            let t = new IntersectionObserver(e => {
                e.some(e => e.isIntersecting) && j("passive")
            }, {
                rootMargin: "400px"
            });
            return t.observe(e), () => t.disconnect()
        }, [x]), (0, a.useEffect)(() => {
            m.currency !== s && h({
                type: l.CommerceContextAction.UPDATE,
                currency: s
            })
        }, [s, m, h]), (0, t.jsx)(r.FooterGroup, {
            title: (0, t.jsx)("span", {
                id: "currency-label",
                children: e
            }),
            "data-sentry-element": "FooterGroup",
            "data-sentry-component": "FooterCurrencySelector",
            "data-sentry-source-file": "FooterCurrencySelector.tsx",
            children: (0, t.jsx)("div", {
                ref: v,
                children: "none" === x ? (0, t.jsx)(p, {
                    value: s,
                    onActivate: j
                }) : (0, t.jsx)(a.Suspense, {
                    fallback: (0, t.jsx)(p, {
                        value: s
                    }),
                    children: (0, t.jsx)(d, {
                        value: s,
                        onChange: e => {
                            e && (i(e.toString()), h({
                                type: l.CommerceContextAction.UPDATE,
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
                        autoFocus: "focus" === x || "open" === x,
                        defaultOpen: "open" === x
                    })
                })
            })
        })
    }], 549855)
}, 724030, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(654954);
    e.i(442917);
    var r = e.i(262670),
        n = e.i(915357),
        s = e.i(7075);
    let i = [{
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
    }];
    e.s(["default", 0, () => {
        let e = (0, s.usePathname)();
        return (0, t.jsx)(n.FooterLinks, {
            layout: "inline",
            "data-sentry-element": "FooterLinks",
            "data-sentry-component": "FooterLanguageLinks",
            "data-sentry-source-file": "FooterLanguageLinks.tsx",
            children: i.map((n, s) => {
                let i = `/${n.locale}${e}`;
                return (0, t.jsx)(r.FooterLink, {
                    href: i,
                    "data-testid": n.title,
                    render: e => (0, t.jsx)(a.default, {
                        ...e,
                        href: i,
                        prefetch: !1
                    }),
                    "data-sentry-element": "FooterLink",
                    "data-sentry-component": "renderLanguages",
                    "data-sentry-source-file": "FooterLanguageLinks.tsx",
                    children: n.title
                }, `language-${n.title}-${s}`)
            })
        })
    }])
}, 998003, e => {
    "use strict";
    let t;
    var a = e.i(785328),
        r = e.i(321950),
        n = e.i(433519),
        s = e.i(818897),
        i = function() {
            return null
        },
        o = e.i(785690),
        l = e.i(213278),
        u = e.i(664300),
        c = e.i(304780),
        d = class extends c.Subscribable {
            constructor(e = {}) {
                super(), this.config = e, this.#e = new Map
            }
            #e;
            build(e, t, a) {
                let r = t.queryKey,
                    n = t.queryHash ?? (0, o.hashQueryKeyByOptions)(r, t),
                    s = this.get(n);
                return s || (s = new l.Query({
                    client: e,
                    queryKey: r,
                    queryHash: n,
                    options: e.defaultQueryOptions(t),
                    state: a,
                    defaultOptions: e.getQueryDefaults(r)
                }), this.add(s)), s
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
                return this.getAll().find(e => (0, o.matchQuery)(t, e))
            }
            findAll(e = {}) {
                let t = this.getAll();
                return Object.keys(e).length > 0 ? t.filter(t => (0, o.matchQuery)(e, t)) : t
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
        m = e.i(297652),
        f = class extends h.Removable {
            #t;
            #a;
            #r;
            #n;
            constructor(e) {
                super(), this.#t = e.client, this.mutationId = e.mutationId, this.#r = e.mutationCache, this.#a = [], this.state = e.state || {
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
                this.#a.includes(e) || (this.#a.push(e), this.clearGcTimeout(), this.#r.notify({
                    type: "observerAdded",
                    mutation: this,
                    observer: e
                }))
            }
            removeObserver(e) {
                this.#a = this.#a.filter(t => t !== e), this.scheduleGc(), this.#r.notify({
                    type: "observerRemoved",
                    mutation: this,
                    observer: e
                })
            }
            optionalRemove() {
                this.#a.length || ("pending" === this.state.status ? this.scheduleGc() : this.#r.remove(this))
            }
            continue () {
                return this.#n?.continue() ?? this.execute(this.state.variables)
            }
            async execute(e) {
                let t = () => {
                        this.#s({
                            type: "continue"
                        })
                    },
                    a = {
                        client: this.#t,
                        meta: this.options.meta,
                        mutationKey: this.options.mutationKey
                    };
                this.#n = (0, m.createRetryer)({
                    fn: () => this.options.mutationFn ? this.options.mutationFn(e, a) : Promise.reject(Error("No mutationFn found")),
                    onFail: (e, t) => {
                        this.#s({
                            type: "failed",
                            failureCount: e,
                            error: t
                        })
                    },
                    onPause: () => {
                        this.#s({
                            type: "pause"
                        })
                    },
                    onContinue: t,
                    retry: this.options.retry ?? 0,
                    retryDelay: this.options.retryDelay,
                    networkMode: this.options.networkMode,
                    canRun: () => this.#r.canRun(this)
                });
                let r = "pending" === this.state.status,
                    n = !this.#n.canStart();
                try {
                    if (r) t();
                    else {
                        this.#s({
                            type: "pending",
                            variables: e,
                            isPaused: n
                        }), this.#r.config.onMutate && await this.#r.config.onMutate(e, this, a);
                        let t = await this.options.onMutate?.(e, a);
                        t !== this.state.context && this.#s({
                            type: "pending",
                            context: t,
                            variables: e,
                            isPaused: n
                        })
                    }
                    let s = await this.#n.start();
                    return await this.#r.config.onSuccess?.(s, e, this.state.context, this, a), await this.options.onSuccess?.(s, e, this.state.context, a), await this.#r.config.onSettled?.(s, null, this.state.variables, this.state.context, this, a), await this.options.onSettled?.(s, null, e, this.state.context, a), this.#s({
                        type: "success",
                        data: s
                    }), s
                } catch (t) {
                    try {
                        await this.#r.config.onError?.(t, e, this.state.context, this, a)
                    } catch (e) {
                        Promise.reject(e)
                    }
                    try {
                        await this.options.onError?.(t, e, this.state.context, a)
                    } catch (e) {
                        Promise.reject(e)
                    }
                    try {
                        await this.#r.config.onSettled?.(void 0, t, this.state.variables, this.state.context, this, a)
                    } catch (e) {
                        Promise.reject(e)
                    }
                    try {
                        await this.options.onSettled?.(void 0, t, e, this.state.context, a)
                    } catch (e) {
                        Promise.reject(e)
                    }
                    throw this.#s({
                        type: "error",
                        error: t
                    }), t
                } finally {
                    this.#r.runNext(this)
                }
            }
            #s(e) {
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
                    this.#a.forEach(t => {
                        t.onMutationUpdate(e)
                    }), this.#r.notify({
                        mutation: this,
                        type: "updated",
                        action: e
                    })
                })
            }
        },
        g = c,
        p = class extends g.Subscribable {
            constructor(e = {}) {
                super(), this.config = e, this.#i = new Set, this.#o = new Map, this.#l = 0
            }
            #i;
            #o;
            #l;
            build(e, t, a) {
                let r = new f({
                    client: e,
                    mutationCache: this,
                    mutationId: ++this.#l,
                    options: e.defaultMutationOptions(t),
                    state: a
                });
                return this.add(r), r
            }
            add(e) {
                this.#i.add(e);
                let t = y(e);
                if ("string" == typeof t) {
                    let a = this.#o.get(t);
                    a ? a.push(e) : this.#o.set(t, [e])
                }
                this.notify({
                    type: "added",
                    mutation: e
                })
            }
            remove(e) {
                if (this.#i.delete(e)) {
                    let t = y(e);
                    if ("string" == typeof t) {
                        let a = this.#o.get(t);
                        if (a)
                            if (a.length > 1) {
                                let t = a.indexOf(e); - 1 !== t && a.splice(t, 1)
                            } else a[0] === e && this.#o.delete(t)
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
                    let a = this.#o.get(t),
                        r = a?.find(e => "pending" === e.state.status);
                    return !r || r === e
                }
            }
            runNext(e) {
                let t = y(e);
                if ("string" != typeof t) return Promise.resolve();
                {
                    let a = this.#o.get(t)?.find(t => t !== e && t.state.isPaused);
                    return a?.continue() ?? Promise.resolve()
                }
            }
            clear() {
                u.notifyManager.batch(() => {
                    this.#i.forEach(e => {
                        this.notify({
                            type: "removed",
                            mutation: e
                        })
                    }), this.#i.clear(), this.#o.clear()
                })
            }
            getAll() {
                return Array.from(this.#i)
            }
            find(e) {
                let t = {
                    exact: !0,
                    ...e
                };
                return this.getAll().find(e => (0, o.matchMutation)(t, e))
            }
            findAll(e = {}) {
                return this.getAll().filter(t => (0, o.matchMutation)(e, t))
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
                return u.notifyManager.batch(() => Promise.all(e.map(e => e.continue().catch(o.noop))))
            }
        };

    function y(e) {
        return e.options.scope?.id
    }
    var v = e.i(758059),
        x = e.i(655100),
        b = class {
            #u;
            #r;
            #c;
            #d;
            #h;
            #m;
            #f;
            #g;
            constructor(e = {}) {
                this.#u = e.queryCache || new d, this.#r = e.mutationCache || new p, this.#c = e.defaultOptions || {}, this.#d = new Map, this.#h = new Map, this.#m = 0
            }
            mount() {
                this.#m++, 1 === this.#m && (this.#f = v.focusManager.subscribe(async e => {
                    e && (await this.resumePausedMutations(), this.#u.onFocus())
                }), this.#g = x.onlineManager.subscribe(async e => {
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
                return this.#r.findAll({
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
                    r = a.state.data;
                return void 0 === r ? this.fetchQuery(e) : (e.revalidateIfStale && a.isStaleByTime((0, o.resolveStaleTime)(t.staleTime, a)) && this.prefetchQuery(t), Promise.resolve(r))
            }
            getQueriesData(e) {
                return this.#u.findAll(e).map(({
                    queryKey: e,
                    state: t
                }) => [e, t.data])
            }
            setQueryData(e, t, a) {
                let r = this.defaultQueryOptions({
                        queryKey: e
                    }),
                    n = this.#u.get(r.queryHash),
                    s = n?.state.data,
                    i = (0, o.functionalUpdate)(t, s);
                if (void 0 !== i) return this.#u.build(this, r).setData(i, {
                    ...a,
                    manual: !0
                })
            }
            setQueriesData(e, t, a) {
                return u.notifyManager.batch(() => this.#u.findAll(e).map(({
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
                u.notifyManager.batch(() => {
                    t.findAll(e).forEach(e => {
                        t.remove(e)
                    })
                })
            }
            resetQueries(e, t) {
                let a = this.#u;
                return u.notifyManager.batch(() => (a.findAll(e).forEach(e => {
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
                return Promise.all(u.notifyManager.batch(() => this.#u.findAll(e).map(e => e.cancel(a)))).then(o.noop).catch(o.noop)
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
                let a = {
                    ...t,
                    cancelRefetch: t.cancelRefetch ?? !0
                };
                return Promise.all(u.notifyManager.batch(() => this.#u.findAll(e).filter(e => !e.isDisabled() && !e.isStatic()).map(e => {
                    let t = e.fetch(void 0, a);
                    return a.throwOnError || (t = t.catch(o.noop)), "paused" === e.state.fetchStatus ? Promise.resolve() : t
                }))).then(o.noop)
            }
            fetchQuery(e) {
                let t = this.defaultQueryOptions(e);
                void 0 === t.retry && (t.retry = !1);
                let a = this.#u.build(this, t);
                return a.isStaleByTime((0, o.resolveStaleTime)(t.staleTime, a)) ? a.fetch(t) : Promise.resolve(a.state.data)
            }
            prefetchQuery(e) {
                return this.fetchQuery(e).then(o.noop).catch(o.noop)
            }
            fetchInfiniteQuery(e) {
                return e._type = "infinite", this.fetchQuery(e)
            }
            prefetchInfiniteQuery(e) {
                return this.fetchInfiniteQuery(e).then(o.noop).catch(o.noop)
            }
            ensureInfiniteQueryData(e) {
                return e._type = "infinite", this.ensureQueryData(e)
            }
            resumePausedMutations() {
                return x.onlineManager.isOnline() ? this.#r.resumePausedMutations() : Promise.resolve()
            }
            getQueryCache() {
                return this.#u
            }
            getMutationCache() {
                return this.#r
            }
            getDefaultOptions() {
                return this.#c
            }
            setDefaultOptions(e) {
                this.#c = e
            }
            setQueryDefaults(e, t) {
                this.#d.set((0, o.hashKey)(e), {
                    queryKey: e,
                    defaultOptions: t
                })
            }
            getQueryDefaults(e) {
                let t = [...this.#d.values()],
                    a = {};
                return t.forEach(t => {
                    (0, o.partialMatchKey)(e, t.queryKey) && Object.assign(a, t.defaultOptions)
                }), a
            }
            setMutationDefaults(e, t) {
                this.#h.set((0, o.hashKey)(e), {
                    mutationKey: e,
                    defaultOptions: t
                })
            }
            getMutationDefaults(e) {
                let t = [...this.#h.values()],
                    a = {};
                return t.forEach(t => {
                    (0, o.partialMatchKey)(e, t.mutationKey) && Object.assign(a, t.defaultOptions)
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
                return t.queryHash || (t.queryHash = (0, o.hashQueryKeyByOptions)(t.queryKey, t)), void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode), void 0 === t.throwOnError && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === o.skipToken && (t.enabled = !1), t
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
                this.#u.clear(), this.#r.clear()
            }
        },
        j = e.i(317386),
        w = e.i(689326);

    function E() {
        return new b({
            defaultOptions: {
                queries: {
                    staleTime: 3e5
                },
                dehydrate: {
                    shouldDehydrateQuery: e => (0, j.defaultShouldDehydrateQuery)(e) || "pending" === e.state.status
                }
            }
        })
    }
    e.s(["default", 0, function({
        children: e
    }) {
        return (0, a.jsx)(r.GenesisSessionProvider, {
            "data-sentry-element": "GenesisSessionProvider",
            "data-sentry-component": "GlobalProviders",
            "data-sentry-source-file": "GlobalProviders.tsx",
            children: (0, a.jsx)(n.CommerceContextProvider, {
                "data-sentry-element": "CommerceContextProvider",
                "data-sentry-source-file": "GlobalProviders.tsx",
                children: (0, a.jsxs)(s.QueryClientProvider, {
                    client: w.environmentManager.isServer() ? E() : (t || (t = E()), t),
                    "data-sentry-element": "QueryClientProvider",
                    "data-sentry-source-file": "GlobalProviders.tsx",
                    children: [e, (0, a.jsx)(i, {
                        "data-sentry-element": "ReactQueryDevtools",
                        "data-sentry-source-file": "GlobalProviders.tsx"
                    })]
                })
            })
        })
    }], 998003)
}, 959440, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(409781),
        r = e.i(145694),
        n = e.i(509924),
        s = e.i(740041),
        i = e.i(544923),
        o = e.i(849141);
    let l = "GTM-5V25JL6",
        u = "a9f5fcb3-4c7f-4bb7-93bf-7607ffbdabe0";
    e.s(["default", 0, function({
        locale: e
    }) {
        let [c] = (0, i.default)("location", "US"), [d] = (0, i.default)("currency", "USD"), [h, m] = (0, a.useState)(null), f = (0, a.useCallback)(() => {
            window.OneTrust && window.OneTrust.changeLanguage(s.oneTrustLocaleOverrides[e || "en"])
        }, [e]), g = (0, a.useCallback)(async () => {
            let e = sessionStorage.getItem("UNITY_SESSION"),
                t = "";
            if (e) t = JSON.parse(e)?.user;
            else try {
                let e = await (0, o.getUserFromGenesis)();
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
            children: [u && (0, t.jsx)(r.default, {
                src: "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js",
                charSet: "UTF-8",
                "data-domain-script": u,
                "data-dLayer-ignore": "true",
                strategy: "afterInteractive",
                "data-document-language": "true",
                onReady: f
            }), u && (0, t.jsx)(r.default, {
                id: "onetrust-optanon-wrapper",
                strategy: "afterInteractive",
                children: "function OptanonWrapper(){}"
            }), l && h && (0, t.jsx)(n.GoogleTagManager, {
                gtmId: l,
                dataLayer: h
            })]
        })
    }])
}, 70607, e => {
    "use strict";
    let t;
    var a = e.i(785328),
        r = e.i(409781);

    function n() {
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
        let r = "client-l663XvPBsVHc0dQMcaW3uSTIIhOTqE5O";
        if (!a || !r) return;
        let {
            deviceId: s,
            userId: i
        } = n();
        if (s || i) try {
            t ??= e.A(63720).then(({
                Experiment: e
            }) => e.initialize(r));
            let n = await t;
            await n.fetch({
                ...s ? {
                    device_id: s
                } : {},
                ...i ? {
                    user_id: i
                } : {}
            });
            let o = n.variant(a);
            return "string" == typeof o?.value ? o.value : void 0
        } catch (e) {
            console.error("[Client Experiment] error fetching variant", e);
            return
        }
    }
    let i = (0, r.createContext)({});
    e.s(["ExperimentGate", 0, ({
        experimentKey: e,
        targetVariant: t,
        children: n
    }) => {
        let s = (0, r.useContext)(i);
        if (!(e in s)) return null;
        let o = s[e];
        return (void 0 !== o ? o === t : "control" === t) ? (0, a.jsx)(a.Fragment, {
            children: n
        }) : null
    }, "HeaderExperimentsProvider", 0, ({
        items: t,
        children: o
    }) => {
        let l = function(t) {
            let [a, i] = (0, r.useState)({}), o = (0, r.useRef)(new Set);
            return (0, r.useEffect)(() => {
                if (!t) return void i({});
                let a = Array.from(new Set(t.map(e => e && "object" == typeof e && "experimentKey" in e ? e.experimentKey : void 0).filter(e => !!e)));
                if (0 === a.length) return void i({});
                let r = !1;
                return (async () => {
                    let {
                        deviceId: t,
                        userId: l
                    } = n(), u = await Promise.all(a.map(async e => {
                        let t = await s(e);
                        return [e, t]
                    }));
                    if (!r && (i(Object.fromEntries(u)), t || l)) {
                        let {
                            sendExposureEvent: a
                        } = await e.A(486735);
                        if (r) return;
                        for (let [e, r] of u) r && !o.current.has(e) && (o.current.add(e), a(e, r, t, l))
                    }
                })(), () => {
                    r = !0
                }
            }, [t]), a
        }(t);
        return (0, a.jsx)(i.Provider, {
            value: l,
            "data-sentry-element": "AssignmentsContext.Provider",
            "data-sentry-component": "HeaderExperimentsProvider",
            "data-sentry-source-file": "HeaderExperiments.tsx",
            children: o
        })
    }], 70607)
}, 264256, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(409781),
        r = e.i(425314),
        n = e.i(935862);
    e.i(726386);
    var s = e.i(568233),
        i = e.i(869324);
    let o = (0, r.default)(() => e.A(191233), {
            loadableGenerated: {
                modules: [807973]
            },
            ssr: !1
        }),
        l = e => {
            var t;
            let a, r = (({
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
            (0, i.default)(r)
        };
    e.s(["default", 0, ({
        placeholder: e,
        noResultsMessage: r,
        filterTabs: i
    }) => {
        let [u, c] = (0, a.useState)(!1), [d, h] = (0, a.useState)(!1), m = (0, a.useRef)(null), f = (0, a.useCallback)(() => {
            h(!0)
        }, []), g = (0, a.useCallback)(() => {
            c(!0), l("search modal open")
        }, []), p = (0, a.useCallback)(e => {
            c(e), e || (l("search modal close"), requestAnimationFrame(() => {
                m.current?.focus()
            }))
        }, []);
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(s.HeaderIconButton, {
                ref: m,
                "aria-label": "Search",
                onPress: g,
                onHoverStart: f,
                onFocus: f,
                onPressStart: f,
                icon: (0, t.jsx)(n.MagnifyingGlass, {
                    "aria-hidden": !0,
                    size: 14
                }),
                "data-sentry-element": "HeaderIconButton",
                "data-sentry-source-file": "MangoHeaderSearch.tsx"
            }), (d || u) && (0, t.jsx)(o, {
                isOpen: u,
                onOpenChange: p,
                placeholder: e,
                noResultsMessage: r,
                filterTabs: i
            })]
        })
    }], 264256)
}, 672515, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(531834),
        r = e.i(78070);
    e.i(726386);
    var n = e.i(276254),
        s = e.i(758012),
        s = s,
        i = e.i(321950),
        o = e.i(393335),
        l = e.i(409781),
        u = e.i(849141);
    e.s(["default", 0, ({
        locale: e,
        userMenu: c,
        children: d
    }) => {
        let {
            user: h,
            signIn: m,
            signOut: f
        } = (({
            locale: e
        } = {}) => {
            let [t, a] = (0, l.useState)(null), [r, n] = (0, l.useState)(!1), {
                genesisSession: s
            } = (0, i.useGenesisSession)(), c = (0, o.usePathname)() || "/";
            (0, l.useEffect)(() => {
                (async () => {
                    n(!0);
                    try {
                        let {
                            users: e
                        } = await (0, u.getUserFromGenesis)();
                        if (e.length > 0) {
                            let t = e[0] ?? {},
                                r = t.name?.givenName,
                                s = t.name?.familyName,
                                i = t.name?.fullName;
                            if (i && (!r || !s)) {
                                let e = i.trim().split(/\s+/);
                                r || (r = e[0] || ""), !s && e.length > 1 && (s = e[e.length - 1] || "")
                            }
                            a({
                                initials: ((e, t, a) => {
                                    let r = t ?? "",
                                        n = a ?? "";
                                    if (e) {
                                        let t = e.split(" ");
                                        r = t[0], n = t.length > 1 ? t[t.length - 1] : ""
                                    }
                                    return `${r[0]??""}${n[0]??""}`
                                })(i, r, s),
                                ...t,
                                name: {
                                    fullName: i || "",
                                    givenName: r || "",
                                    familyName: s || ""
                                }
                            }), n(!1)
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
                loading: r,
                signIn: () => {
                    sessionStorage.setItem("REDIRECT_PATH", c), window.location.href = `https://api.unity.com/v1/oauth2/authorize?${d}`
                },
                signOut: () => {
                    let e = new URLSearchParams({
                        access_token: s.access_token,
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
        }), g = h?.name.givenName || "User";
        return (0, t.jsxs)(n.HeaderDropdown, {
            "aria-label": c.accountText || "Account",
            icon: h?.login ? (0, t.jsx)("span", {
                className: "capitalize",
                children: h.initials
            }) : (0, t.jsx)(a.User, {
                "aria-hidden": !0,
                size: 14
            }),
            "data-sentry-element": "HeaderDropdown",
            "data-sentry-component": "MangoHeaderUser",
            "data-sentry-source-file": "MangoHeaderUser.tsx",
            children: [h?.login ? (0, t.jsx)(s.default, {
                title: c.userGreeting ? c.userGreeting.replace(/\{\{\s*name\s*\}\}/g, () => g) : g,
                description: h.email || "",
                image: c.spotlightImage,
                onLogout: f,
                onAccount: () => {
                    window.location.href = "https://cloud.unity.com/account/account-settings"
                },
                accountLabel: c.accountText || "My Account"
            }) : (0, t.jsx)(r.default, {
                className: "w-full",
                icon: (0, t.jsx)(a.User, {}),
                iconDirection: "left",
                onClick: m,
                children: c.signInText || "Sign in or create Unity ID"
            }), d]
        })
    }], 672515)
}, 682232, e => {
    "use strict";
    var t = e.i(833200),
        a = e.i(785328);
    e.s(["default", 0, function({
        locale: e,
        ...r
    }) {
        if (!e) throw Error(void 0);
        return (0, a.jsx)(t.IntlProvider, {
            locale: e,
            ...r
        })
    }])
}, 906003, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(409781);
    let r = (0, a.lazy)(() => e.A(428768));
    e.s(["default", 0, function(e) {
        return (0, t.jsx)(a.Suspense, {
            fallback: null,
            children: (0, t.jsx)(r, {
                ...e
            })
        })
    }])
}, 418704, (e, t, a) => {
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
}, 6154, (e, t, a) => {
    "use strict";

    function r(e, t, a = !1) {
        return t ? Object.keys(e).filter(e => a ? !t.includes(e) : t.includes(e)).reduce((t, a) => (t[a] = e[a], t), {}) : {}
    }

    function n(e, t, a, r) {
        let n = r && Object.keys(r).length > 0 ? new URL(Object.values(r)[0], e) : new URL(e);
        return t && a && t.forEach(e => {
            a[e] && n.searchParams.set(e, a[e])
        }), n.toString()
    }

    function s(e, t, a, r, s) {
        var i;
        if (!t) return `<${e}></${e}>`;
        let o = (null == (i = t.src) ? void 0 : i.url) ? Object.assign(Object.assign({}, t), {
                src: n(t.src.url, t.src.params, r, s)
            }) : t,
            l = Object.keys(Object.assign(Object.assign({}, o), a)).reduce((e, t) => {
                let r = null == a ? void 0 : a[t],
                    n = o[t],
                    s = null != r ? r : n,
                    i = !0 === s ? t : `${t}="${s}"`;
                return s ? e + ` ${i}` : e
            }, "");
        return `<${e}${l}></${e}>`
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.formatData = a.createHtml = a.formatUrl = void 0, a.formatUrl = n, a.createHtml = s, a.formatData = function(e, t) {
        var a, i, o, l, u;
        let c = r(t, null == (a = e.scripts) ? void 0 : a.reduce((e, t) => [...e, ...Array.isArray(t.params) ? t.params : []], [])),
            d = r(t, null == (o = null == (i = e.html) ? void 0 : i.attributes.src) ? void 0 : o.params),
            h = r(t, [null == (u = null == (l = e.html) ? void 0 : l.attributes.src) ? void 0 : u.slugParam]),
            m = r(t, [...Object.keys(c), ...Object.keys(d), ...Object.keys(h)], !0);
        return Object.assign(Object.assign({}, e), {
            html: e.html ? s(e.html.element, e.html.attributes, m, d, h) : null,
            scripts: e.scripts ? e.scripts.map(e => Object.assign(Object.assign({}, e), {
                url: n(e.url, e.params, c)
            })) : null
        })
    }
}, 880092, (e, t, a) => {
    "use strict";
    var r = e.e && e.e.__rest || function(e, t) {
            var a = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (a[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++) 0 > t.indexOf(r[n]) && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]]);
            return a
        },
        n = e.e && e.e.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.GoogleAnalytics = void 0;
    let s = n(e.r(418704)),
        i = e.r(6154);
    a.GoogleAnalytics = e => {
        var t = r(e, []);
        return (0, i.formatData)(s.default, t)
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
}, 490057, (e, t, a) => {
    "use strict";
    var r = e.e && e.e.__rest || function(e, t) {
            var a = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (a[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++) 0 > t.indexOf(r[n]) && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]]);
            return a
        },
        n = e.e && e.e.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.GoogleMapsEmbed = void 0;
    let s = n(e.r(731292)),
        i = e.r(6154);
    a.GoogleMapsEmbed = e => {
        var t = r(e, []);
        return (0, i.formatData)(s.default, t)
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
}, 761564, (e, t, a) => {
    "use strict";
    var r = e.e && e.e.__rest || function(e, t) {
            var a = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (a[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++) 0 > t.indexOf(r[n]) && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]]);
            return a
        },
        n = e.e && e.e.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.YouTubeEmbed = void 0;
    let s = n(e.r(447716)),
        i = e.r(6154);
    a.YouTubeEmbed = e => {
        var t = r(e, []);
        return (0, i.formatData)(s.default, t)
    }
}, 508751, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.YouTubeEmbed = a.GoogleMapsEmbed = a.GoogleAnalytics = void 0;
    var r = e.r(880092);
    Object.defineProperty(a, "GoogleAnalytics", {
        enumerable: !0,
        get: function() {
            return r.GoogleAnalytics
        }
    });
    var n = e.r(490057);
    Object.defineProperty(a, "GoogleMapsEmbed", {
        enumerable: !0,
        get: function() {
            return n.GoogleMapsEmbed
        }
    });
    var s = e.r(761564);
    Object.defineProperty(a, "YouTubeEmbed", {
        enumerable: !0,
        get: function() {
            return s.YouTubeEmbed
        }
    })
}, 71406, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = function({
        html: e,
        height: t = null,
        width: a = null,
        children: s,
        dataNtpc: i = ""
    }) {
        return (0, n.useEffect)(() => {
            i && performance.mark("mark_feature_usage", {
                detail: {
                    feature: `next-third-parties-${i}`
                }
            })
        }, [i]), (0, r.jsxs)(r.Fragment, {
            children: [s, e ? (0, r.jsx)("div", {
                style: {
                    height: null != t ? `${t}px` : "auto",
                    width: null != a ? `${a}px` : "auto"
                },
                "data-ntpc": i,
                dangerouslySetInnerHTML: {
                    __html: e
                }
            }) : null]
        })
    };
    let r = e.r(785328),
        n = e.r(409781)
}, 152458, (e, t, a) => {
    "use strict";
    var r = e.e && e.e.__importDefault || function(e) {
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
        } = e, r = {
            ...a,
            key: t
        }, {
            html: o
        } = (0, s.GoogleMapsEmbed)(r);
        return (0, n.jsx)(i.default, {
            height: r.height || null,
            width: r.width || null,
            html: o,
            dataNtpc: "GoogleMapsEmbed"
        })
    };
    let n = e.r(785328),
        s = e.r(508751),
        i = r(e.r(71406))
}, 848757, (e, t, a) => {
    "use strict";
    var r = e.e && e.e.__importDefault || function(e) {
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
            stylesheets: r
        } = (0, i.YouTubeEmbed)(e);
        return (0, n.jsx)(o.default, {
            height: e.height || null,
            width: e.width || null,
            html: t,
            dataNtpc: "YouTubeEmbed",
            children: null == a ? void 0 : a.map(e => (0, n.jsx)(s.default, {
                src: e.url,
                strategy: l[e.strategy],
                stylesheets: r
            }, e.url))
        })
    };
    let n = e.r(785328),
        s = r(e.r(145694)),
        i = e.r(508751),
        o = r(e.r(71406)),
        l = {
            server: "beforeInteractive",
            client: "afterInteractive",
            idle: "lazyOnload",
            worker: "worker"
        }
}, 967763, (e, t, a) => {
    "use strict";
    var r = e.e && e.e.__importDefault || function(e) {
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
            dataLayerName: r = "dataLayer",
            auth: l,
            preview: u,
            dataLayer: c,
            nonce: d
        } = e;
        o = r;
        let h = new URL(a || "https://www.googletagmanager.com/gtm.js");
        return t && h.searchParams.set("id", t), "dataLayer" !== r && h.searchParams.set("l", r), l && h.searchParams.set("gtm_auth", l), u && (h.searchParams.set("gtm_preview", u), h.searchParams.set("gtm_cookies_win", "x")), (0, s.useEffect)(() => {
            performance.mark("mark_feature_usage", {
                detail: {
                    feature: "next-third-parties-gtm"
                }
            })
        }, []), (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(i.default, {
                id: "_next-gtm-init",
                dangerouslySetInnerHTML: {
                    __html: `
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${c?`w[l].push(${JSON.stringify(c)})`:""}
      })(window,'${r}');`
                },
                nonce: d
            }), (0, n.jsx)(i.default, {
                id: "_next-gtm",
                "data-ntpc": "GTM",
                src: h.href,
                nonce: d
            })]
        })
    };
    let n = e.r(785328),
        s = e.r(409781),
        i = r(e.r(145694)),
        o = "dataLayer";
    a.sendGTMEvent = (e, t) => {
        let a = t || o;
        window[a] = window[a] || [], window[a].push(e)
    }
}, 47350, (e, t, a) => {
    "use strict";
    let r;
    var n = e.e && e.e.__importDefault || function(e) {
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
            dataLayerName: n = "dataLayer",
            nonce: l
        } = e;
        return void 0 === r && (r = n), (0, i.useEffect)(() => {
            performance.mark("mark_feature_usage", {
                detail: {
                    feature: "next-third-parties-ga"
                }
            })
        }, []), (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(o.default, {
                id: "_next-ga-init",
                dangerouslySetInnerHTML: {
                    __html: `
          window['${n}'] = window['${n}'] || [];
          function gtag(){window['${n}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}' ${a?",{ 'debug_mode': true }":""});`
                },
                nonce: l
            }), (0, s.jsx)(o.default, {
                id: "_next-ga",
                src: `https://www.googletagmanager.com/gtag/js?id=${t}`,
                nonce: l
            })]
        })
    }, a.sendGAEvent = function() {
        void 0 === r ? console.warn("@next/third-parties: GA has not been initialized") : window[r] ? window[r].push(arguments) : console.warn(`@next/third-parties: GA dataLayer ${r} does not exist`)
    };
    let s = e.r(785328),
        i = e.r(409781),
        o = n(e.r(145694))
}, 509924, (e, t, a) => {
    "use strict";
    var r = e.e && e.e.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.sendGAEvent = a.GoogleAnalytics = a.sendGTMEvent = a.GoogleTagManager = a.YouTubeEmbed = a.GoogleMapsEmbed = void 0;
    var n = e.r(152458);
    Object.defineProperty(a, "GoogleMapsEmbed", {
        enumerable: !0,
        get: function() {
            return r(n).default
        }
    });
    var s = e.r(848757);
    Object.defineProperty(a, "YouTubeEmbed", {
        enumerable: !0,
        get: function() {
            return r(s).default
        }
    });
    var i = e.r(967763);
    Object.defineProperty(a, "GoogleTagManager", {
        enumerable: !0,
        get: function() {
            return i.GoogleTagManager
        }
    }), Object.defineProperty(a, "sendGTMEvent", {
        enumerable: !0,
        get: function() {
            return i.sendGTMEvent
        }
    });
    var o = e.r(47350);
    Object.defineProperty(a, "GoogleAnalytics", {
        enumerable: !0,
        get: function() {
            return o.GoogleAnalytics
        }
    }), Object.defineProperty(a, "sendGAEvent", {
        enumerable: !0,
        get: function() {
            return o.sendGAEvent
        }
    })
}, 569514, 922221, e => {
    "use strict";
    var t = e.i(785328);
    let a = (0, e.i(837826).tv)({
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
            link: "mango:text-body-xs mango:flex mango:w-fit mango:items-center mango:gap-2 mango:cursor-pointer mango:rounded-xs mango:border-0 mango:bg-transparent mango:p-0 mango:text-left mango:text-black mango:no-underline mango:outline-none mango:transition-colors mango:ease-standard mango:motion-reduce:transition-none mango:data-[hovered]:text-blue-500 mango:data-[focus-visible]:outline-2 mango:data-[focus-visible]:outline-solid mango:data-[focus-visible]:outline-blue-focus mango:dark:text-white"
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
    e.s(["footerStyles", 0, a], 922221);
    var r = e.i(27666),
        n = e.i(13882);

    function s({
        children: e,
        className: i,
        ...o
    }) {
        let l = a().link({
            className: i
        });
        return (0, t.jsx)("li", {
            children: o.href ? (0, t.jsx)(n.Link, {
                ...o,
                className: l,
                children: e
            }) : (0, t.jsx)(r.Button, {
                ...o,
                className: l,
                children: e
            })
        })
    }
    var i = e.i(94918);
    e.s(["default", 0, ({
        href: e,
        render: a,
        ...r
    }) => (0, t.jsx)(s, {
        ...r,
        href: e,
        render: a ?? (e ? a => (0, t.jsx)(i.Link, {
            ...a,
            href: e
        }) : void 0),
        "data-sentry-element": "MangoFooterLink",
        "data-sentry-component": "FooterLink",
        "data-sentry-source-file": "FooterLink.tsx"
    })], 569514)
}, 262670, e => {
    "use strict";
    var t = e.i(569514);
    e.s(["FooterLink", () => t.default])
}, 442917, e => {
    "use strict";
    e.i(569514), e.s([])
}, 184400, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(996068),
        r = e.i(434802),
        n = e.i(571836);
    let s = ({
        title: e,
        panel: t,
        listingLabel: a,
        ...r
    }) => ({
        title: e,
        panel: t,
        listingLabel: a,
        link: r
    });
    var i = e.i(108728),
        o = e.i(409781),
        l = e.i(13882),
        u = e.i(42246);
    let c = (0, r.headerStyles)();

    function d({
        navigation: e
    }) {
        let [a, r] = (0, o.useState)(null), h = (0, o.useRef)(void 0), m = (0, o.useRef)([]), f = (0, o.useRef)([]), g = (0, o.useId)();
        (0, o.useEffect)(() => () => clearTimeout(h.current), []), (0, i.useCloseOnHistoryNavigation)(null !== a, () => r(null));
        let p = () => clearTimeout(h.current),
            y = e => Array.from(f.current[e]?.querySelectorAll('a[href], button:not([disabled]), [tabindex="0"]') ?? []),
            v = () => {
                null !== a && m.current[a]?.focus(), r(null)
            };
        return (0, t.jsxs)(t.Fragment, {
            children: [null !== a && (0, t.jsx)("div", {
                "aria-hidden": "true",
                className: c.scrim()
            }), (0, t.jsxs)("nav", {
                className: c.desktop(),
                onMouseEnter: p,
                onMouseLeave: () => {
                    h.current = setTimeout(() => r(null), 150)
                },
                onKeyDown: t => {
                    let n = m.current.indexOf(t.target);
                    if ("ArrowDown" === t.key && -1 !== n && e[n]?.panel) {
                        t.preventDefault(), (0, u.flushSync)(() => r(n)), y(n)[0]?.focus();
                        return
                    }
                    if (null !== a) {
                        if ("Escape" === t.key) {
                            t.preventDefault(), v();
                            return
                        }
                        if ("Tab" === t.key) {
                            let e = y(a),
                                r = e.indexOf(t.target);
                            if (-1 === r) return;
                            t.shiftKey && 0 === r ? (t.preventDefault(), v()) : t.shiftKey || r !== e.length - 1 || (t.preventDefault(), e[0].focus())
                        }
                    }
                },
                onBlur: e => {
                    let t = e.relatedTarget;
                    t instanceof Node && !e.currentTarget.contains(t) && r(null)
                },
                onClickCapture: e => {
                    e.target.closest("a") && r(null)
                },
                children: [(0, t.jsx)("ul", {
                    className: c.triggers(),
                    children: e.map((e, n) => {
                        let i, {
                                title: o,
                                panel: u,
                                link: d
                            } = s(e),
                            {
                                render: h,
                                ...f
                            } = d;
                        return (0, t.jsx)("li", {
                            children: (0, t.jsx)(l.Link, {
                                ...f,
                                ref: e => {
                                    m.current[n] = e
                                },
                                className: c.trigger(),
                                onMouseEnter: e => {
                                    f.onMouseEnter?.(e), p(), r(u ? n : null)
                                },
                                render: u ? (i = {
                                    "aria-expanded": a === n,
                                    "aria-controls": `${g}-panel-${n}`
                                }, function(e, a) {
                                    let r = {
                                        ...e,
                                        ...i
                                    };
                                    if (h) return h(r, a);
                                    let {
                                        children: n,
                                        ...s
                                    } = r;
                                    return "href" in s ? (0, t.jsx)("a", {
                                        ...s,
                                        children: n
                                    }) : (0, t.jsx)("span", {
                                        ...s,
                                        children: n
                                    })
                                }) : h,
                                children: o
                            })
                        }, n)
                    })
                }), (0, t.jsx)("div", {
                    className: c.shell({
                        open: null !== a
                    }),
                    children: (0, t.jsx)("div", {
                        className: c.shellInner(),
                        children: (0, t.jsx)(n.HeaderArrangementContext, {
                            value: "desktop",
                            children: e.map(({
                                panel: e
                            }, r) => e && (0, t.jsx)("div", {
                                id: `${g}-panel-${r}`,
                                ref: e => {
                                    f.current[r] = e
                                },
                                inert: a !== r,
                                className: c.panel({
                                    active: a === r
                                }),
                                children: e
                            }, r))
                        })
                    })
                })]
            })]
        })
    }
    var h = e.i(870866),
        m = e.i(909933),
        f = e.i(49527),
        g = e.i(163165),
        p = e.i(327306),
        y = e.i(437062);
    let v = new Map([
            ["bold", o.createElement(o.Fragment, null, o.createElement("path", {
                d: "M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"
            }))],
            ["duotone", o.createElement(o.Fragment, null, o.createElement("path", {
                d: "M216,64V192H40V64Z",
                opacity: "0.2"
            }), o.createElement("path", {
                d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
            }))],
            ["fill", o.createElement(o.Fragment, null, o.createElement("path", {
                d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"
            }))],
            ["light", o.createElement(o.Fragment, null, o.createElement("path", {
                d: "M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"
            }))],
            ["regular", o.createElement(o.Fragment, null, o.createElement("path", {
                d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
            }))],
            ["thin", o.createElement(o.Fragment, null, o.createElement("path", {
                d: "M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM40,68H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z"
            }))]
        ]),
        x = o.forwardRef((e, t) => o.createElement(y.w, {
            ref: t,
            ...e,
            weights: v
        }));
    x.displayName = "ListIcon";
    var b = e.i(27666),
        j = e.i(416438);
    let w = (0, r.headerStyles)();

    function E({
        navigation: e,
        actions: a,
        menuLabel: r
    }) {
        let [u, c] = (0, o.useState)(!1), d = (0, o.useRef)(null), h = (0, o.useId)();
        return (0, i.useCloseOnHistoryNavigation)(u, () => c(!1)), (0, o.useEffect)(() => {
            if (!u) return;
            let {
                overflow: e
            } = document.body.style;
            return document.body.style.overflow = "hidden", () => {
                document.body.style.overflow = e
            }
        }, [u]), (0, o.useEffect)(() => {
            if (!u) return;
            let e = e => {
                d.current?.contains(e.target) || c(!1)
            };
            return document.addEventListener("pointerdown", e, !0), () => document.removeEventListener("pointerdown", e, !0)
        }, [u]), (0, t.jsxs)("div", {
            ref: d,
            className: w.mobile(),
            children: [(0, t.jsx)(g.Button, {
                variant: "secondary",
                size: "sm",
                iconLeft: u ? (0, t.jsx)(m.f, {
                    "aria-hidden": !0
                }) : (0, t.jsx)(x, {
                    "aria-hidden": !0
                }),
                "aria-label": r,
                "aria-expanded": u,
                "aria-controls": h,
                onPress: () => c(!u)
            }), (0, t.jsx)("div", {
                id: h,
                inert: !u,
                className: w.drawer({
                    open: u
                }),
                onClickCapture: e => {
                    e.target.closest("a") && c(!1)
                },
                children: (0, t.jsx)("nav", {
                    children: (0, t.jsx)(n.HeaderArrangementContext, {
                        value: "mobile",
                        children: (0, t.jsxs)(j.DisclosureGroup, {
                            className: w.mobileList(),
                            children: [e.map((e, a) => {
                                let {
                                    title: r,
                                    panel: n,
                                    listingLabel: i,
                                    link: o
                                } = s(e);
                                return n ? (0, t.jsxs)(j.Disclosure, {
                                    id: a,
                                    className: w.mobileItem(),
                                    children: [(0, t.jsxs)(b.Button, {
                                        slot: "trigger",
                                        className: w.mobileTrigger(),
                                        children: [(0, t.jsx)("span", {
                                            className: w.mobileTitle({
                                                className: w.mobileTitleMotion()
                                            }),
                                            children: r
                                        }), (0, t.jsx)("span", {
                                            className: w.mobileCaret(),
                                            children: (0, t.jsx)(g.Button, {
                                                decorative: !0,
                                                variant: "ghost",
                                                size: "sm",
                                                iconLeft: (0, t.jsx)(p.c, {
                                                    weight: "fill",
                                                    "aria-hidden": !0
                                                }),
                                                disableAnimation: !0,
                                                className: w.mobileCaretButton()
                                            })
                                        })]
                                    }), (0, t.jsx)(j.DisclosurePanel, {
                                        className: w.mobilePanel(),
                                        children: (0, t.jsxs)("div", {
                                            className: w.mobilePanelContent(),
                                            children: [n, i && (0, t.jsx)(g.Button, {
                                                ...o,
                                                variant: "secondary",
                                                size: "lg",
                                                iconRight: (0, t.jsx)(f.c, {
                                                    "aria-hidden": !0
                                                }),
                                                className: w.mobileListing(),
                                                children: i
                                            })]
                                        })
                                    }), (0, t.jsx)("span", {
                                        "aria-hidden": "true",
                                        className: w.mobileSlab()
                                    })]
                                }, a) : (0, t.jsx)("div", {
                                    className: w.mobileItem(),
                                    children: (0, t.jsx)(l.Link, {
                                        ...o,
                                        className: w.mobileLink(),
                                        children: (0, t.jsx)("span", {
                                            className: w.mobileTitle(),
                                            children: r
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
        logo: n,
        utilities: s,
        mobileActions: i,
        menuLabel: o = "Menu",
        className: l
    }) {
        let u = (0, r.headerStyles)();
        return (0, t.jsx)("header", {
            className: u.root({
                className: ["dark", l]
            }),
            children: (0, t.jsx)(a.MangoThemeProvider, {
                theme: "dark",
                children: (0, t.jsxs)("div", {
                    className: u.container(),
                    children: [(0, t.jsxs)("div", {
                        className: u.start(),
                        children: [n ?? (0, t.jsx)(h.HeaderLogo, {
                            href: "/"
                        }), (0, t.jsx)(d, {
                            navigation: e
                        })]
                    }), (0, t.jsxs)("div", {
                        className: u.end(),
                        children: [s, (0, t.jsx)(E, {
                            navigation: e,
                            actions: i,
                            menuLabel: o
                        })]
                    })]
                })
            })
        })
    }
    var C = e.i(825610),
        H = e.i(704190),
        O = e.i(401287);
    e.s(["default", 0, ({
        navigation: e,
        logo: a,
        ...r
    }) => (0, t.jsx)(M, {
        ...r,
        logo: a ?? (0, t.jsx)(H.default, {
            "data-link-location": C.trackingLocation.headerLogo,
            "data-link-id": "header-logo"
        }),
        navigation: e?.map(e => ({
            ...e,
            render: e.render ?? (0, O.renderLink)(e.href)
        })),
        "data-sentry-element": "MangoHeader",
        "data-sentry-component": "Header",
        "data-sentry-source-file": "Header.tsx"
    })], 184400)
}, 978578, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(833449),
        r = e.i(163165),
        n = e.i(434802),
        s = e.i(13882);

    function i({
        title: e,
        description: a,
        tag: o,
        media: l,
        actionLabel: u,
        className: c,
        ...d
    }) {
        let h = (0, n.headerHighlightStyles)();
        return (0, t.jsxs)(s.Link, {
            ...d,
            className: h.root({
                className: c
            }),
            children: [l && (0, t.jsx)("span", {
                className: h.media(),
                children: l
            }), (0, t.jsxs)("span", {
                className: h.content(),
                children: [(0, t.jsxs)("span", {
                    className: h.copy(),
                    children: [o && (0, t.jsx)("span", {
                        className: h.tag(),
                        children: o
                    }), (0, t.jsx)("span", {
                        className: h.title(),
                        children: e
                    }), a && (0, t.jsx)("span", {
                        className: h.description(),
                        children: a
                    })]
                }), u && (0, t.jsx)("span", {
                    className: h.action(),
                    children: (0, t.jsx)(r.Button, {
                        decorative: !0,
                        variant: "secondary",
                        size: "sm",
                        children: u
                    })
                })]
            })]
        })
    }
    var o = e.i(544789),
        l = e.i(401287);
    e.s(["default", 0, ({
        tag: e,
        image: r,
        href: n,
        render: s,
        ...u
    }) => (0, t.jsx)(i, {
        ...u,
        href: n,
        render: s ?? (0, l.renderLink)(n),
        tag: e && (0, t.jsx)(o.default, {
            children: e
        }),
        media: r && (0, t.jsx)(a.default, {
            src: r.src,
            alt: "",
            fill: !0,
            sizes: "25vw",
            className: "object-cover"
        }),
        "data-sentry-element": "MangoHeaderHighlight",
        "data-sentry-component": "HeaderHighlight",
        "data-sentry-source-file": "HeaderHighlight.tsx"
    })], 978578)
}, 642475, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(833449),
        r = e.i(547734),
        n = e.i(544789),
        s = e.i(401287);
    e.s(["default", 0, ({
        tag: e,
        image: i,
        icon: o,
        href: l,
        render: u,
        ...c
    }) => (0, t.jsx)(r.HeaderMenuLink, {
        ...c,
        href: l,
        render: u ?? (0, s.renderLink)(l),
        tag: e && (0, t.jsx)(n.default, {
            children: e
        }),
        icon: o ?? (i && (0, t.jsx)(a.default, {
            src: i.src,
            alt: i.alt,
            width: 24,
            height: 24
        })),
        "data-sentry-element": "MangoHeaderMenuLink",
        "data-sentry-component": "HeaderMenuLink",
        "data-sentry-source-file": "HeaderMenuLink.tsx"
    })])
}, 726386, 758012, e => {
    "use strict";
    e.i(184400), e.i(704190), e.i(642475), e.i(978578);
    var t = e.i(785328),
        a = e.i(833449),
        r = e.i(163165),
        n = e.i(434802),
        s = e.i(437062),
        i = e.i(409781);
    let o = new Map([
            ["bold", i.createElement(i.Fragment, null, i.createElement("path", {
                d: "M124,216a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V40A12,12,0,0,1,48,28h64a12,12,0,0,1,0,24H60V204h52A12,12,0,0,1,124,216Zm108.49-96.49-40-40a12,12,0,0,0-17,17L195,116H112a12,12,0,0,0,0,24h83l-19.52,19.51a12,12,0,0,0,17,17l40-40A12,12,0,0,0,232.49,119.51Z"
            }))],
            ["duotone", i.createElement(i.Fragment, null, i.createElement("path", {
                d: "M224,56V200a16,16,0,0,1-16,16H48V40H208A16,16,0,0,1,224,56Z",
                opacity: "0.2"
            }), i.createElement("path", {
                d: "M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"
            }))],
            ["fill", i.createElement(i.Fragment, null, i.createElement("path", {
                d: "M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40A8,8,0,0,0,176,88v32H112a8,8,0,0,0,0,16h64v32a8,8,0,0,0,13.66,5.66l40-40A8,8,0,0,0,229.66,122.34Z"
            }))],
            ["light", i.createElement(i.Fragment, null, i.createElement("path", {
                d: "M118,216a6,6,0,0,1-6,6H48a6,6,0,0,1-6-6V40a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H54V210h58A6,6,0,0,1,118,216Zm110.24-92.24-40-40a6,6,0,0,0-8.48,8.48L209.51,122H112a6,6,0,0,0,0,12h97.51l-29.75,29.76a6,6,0,1,0,8.48,8.48l40-40A6,6,0,0,0,228.24,123.76Z"
            }))],
            ["regular", i.createElement(i.Fragment, null, i.createElement("path", {
                d: "M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"
            }))],
            ["thin", i.createElement(i.Fragment, null, i.createElement("path", {
                d: "M116,216a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H52V212h60A4,4,0,0,1,116,216Zm110.83-90.83-40-40a4,4,0,0,0-5.66,5.66L214.34,124H112a4,4,0,0,0,0,8H214.34l-33.17,33.17a4,4,0,0,0,5.66,5.66l40-40A4,4,0,0,0,226.83,125.17Z"
            }))]
        ]),
        l = i.forwardRef((e, t) => i.createElement(s.w, {
            ref: t,
            ...e,
            weights: o
        }));
    l.displayName = "SignOutIcon";
    let u = new Map([
            ["bold", i.createElement(i.Fragment, null, i.createElement("path", {
                d: "M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z"
            }))],
            ["duotone", i.createElement(i.Fragment, null, i.createElement("path", {
                d: "M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z",
                opacity: "0.2"
            }), i.createElement("path", {
                d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
            }))],
            ["fill", i.createElement(i.Fragment, null, i.createElement("path", {
                d: "M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"
            }))],
            ["light", i.createElement(i.Fragment, null, i.createElement("path", {
                d: "M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z"
            }))],
            ["regular", i.createElement(i.Fragment, null, i.createElement("path", {
                d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
            }))],
            ["thin", i.createElement(i.Fragment, null, i.createElement("path", {
                d: "M227.46,214c-16.52-28.56-43-48.06-73.68-55.09a68,68,0,1,0-51.56,0c-30.64,7-57.16,26.53-73.68,55.09a4,4,0,0,0,6.92,4C55,184.19,89.62,164,128,164s73,20.19,92.54,54a4,4,0,0,0,3.46,2,3.93,3.93,0,0,0,2-.54A4,4,0,0,0,227.46,214ZM68,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,68,96Z"
            }))]
        ]),
        c = i.forwardRef((e, t) => i.createElement(s.w, {
            ref: t,
            ...e,
            weights: u
        }));
    c.displayName = "UserIcon";
    let d = (0, n.headerUserSpotlightStyles)();

    function h({
        title: e,
        description: a,
        media: n,
        onLogout: s,
        onAccount: i,
        accountLabel: o = "My Account",
        logoutLabel: u = "Log out",
        className: m
    }) {
        return (0, t.jsxs)("div", {
            className: d.root({
                className: m
            }),
            children: [n && (0, t.jsx)("div", {
                className: d.media(),
                children: n
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
                    }), (0, t.jsx)(r.Button, {
                        variant: "outline",
                        size: "xs",
                        iconLeft: (0, t.jsx)(l, {
                            "aria-hidden": !0
                        }),
                        "aria-label": u,
                        onPress: s
                    })]
                }), (0, t.jsx)("div", {
                    children: (0, t.jsx)(r.Button, {
                        variant: "secondary",
                        size: "sm",
                        iconLeft: (0, t.jsx)(c, {
                            "aria-hidden": !0
                        }),
                        onPress: i,
                        children: o
                    })
                })]
            })]
        })
    }
    e.s(["default", 0, ({
        image: e,
        ...r
    }) => (0, t.jsx)(h, {
        ...r,
        media: e && (0, t.jsx)(a.default, {
            src: e.src,
            alt: "",
            fill: !0,
            sizes: "(max-width: 768px) 100vw, 20rem",
            className: "object-cover object-center"
        }),
        "data-sentry-element": "MangoHeaderUserSpotlight",
        "data-sentry-component": "HeaderUserSpotlight",
        "data-sentry-source-file": "HeaderUserSpotlight.tsx"
    })], 758012), e.s([], 726386)
}, 401287, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(94918);
    e.s(["renderLink", 0, e => e ? r => (0, t.jsx)(a.Link, {
        ...r,
        href: e
    }) : void 0])
}, 915357, e => {
    "use strict";
    e.i(796573), e.i(996068);
    var t = e.i(922221),
        a = e.i(785328);
    e.s(["FooterGroup", 0, function({
        title: e,
        children: r,
        wide: n,
        className: s
    }) {
        let i = (0, t.footerStyles)({
            wide: n
        });
        return (0, a.jsxs)("div", {
            className: i.group({
                className: s
            }),
            children: [(0, a.jsx)("div", {
                className: i.groupTitle(),
                children: e
            }), r]
        })
    }, "FooterLinks", 0, function({
        layout: e,
        children: r,
        className: n
    }) {
        return (0, a.jsx)("ul", {
            className: (0, t.footerStyles)({
                layout: e
            }).links({
                className: n
            }),
            children: r
        })
    }])
}, 276254, e => {
    "use strict";
    var t = e.i(434802),
        a = e.i(108728),
        r = e.i(568233),
        n = e.i(409781),
        s = e.i(785328);
    let i = (0, t.headerDropdownStyles)();
    e.s(["HeaderDropdown", 0, function({
        icon: t,
        "aria-label": o,
        children: l,
        placement: u = "bottom end",
        offset: c = 24,
        className: d,
        onOpenChange: h
    }) {
        let [m, f] = (0, n.useState)(!1), [g, p] = (0, n.useState)(null), y = (0, n.useRef)(null), v = e => {
            e !== m && (f(e), h?.(e))
        };
        (0, a.useCloseOnHistoryNavigation)(m, () => v(!1));
        let x = () => {
            g || e.A(276473).then(e => e.default).then(e => p(() => e), () => f(!1))
        };
        return (0, n.useEffect)(() => {
            if (!m || g) return;
            let e = e => {
                "Escape" === e.key && (f(!1), h?.(!1))
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
        }, [m, g, h]), (0, s.jsxs)(s.Fragment, {
            children: [m && (0, s.jsx)("div", {
                "aria-hidden": "true",
                className: i.scrim(),
                onClick: () => v(!1)
            }), (0, s.jsx)(r.HeaderIconButton, {
                ref: y,
                icon: t,
                "aria-label": o,
                "aria-haspopup": "dialog",
                "aria-expanded": m,
                isActive: m,
                onHoverStart: x,
                onFocus: x,
                onPressStart: x,
                onPress: () => v(!m)
            }), g && (0, s.jsx)(g, {
                triggerRef: y,
                isOpen: m,
                onOpenChange: v,
                "aria-label": o,
                placement: u,
                offset: c,
                className: d,
                children: l
            })]
        })
    }])
}, 568233, e => {
    "use strict";
    var t = e.i(434802),
        a = e.i(27666),
        r = e.i(785328);
    e.s(["HeaderIconButton", 0, function({
        icon: e,
        isActive: n,
        className: s,
        ...i
    }) {
        return (0, r.jsx)(a.Button, {
            ...i,
            className: (0, t.headerIconButtonStyles)({
                isActive: n,
                className: s
            }),
            children: e
        })
    }])
}, 870866, 704190, e => {
    "use strict";
    var t = e.i(434802),
        a = e.i(13882),
        r = e.i(785328);

    function n({
        "aria-label": e = "Unity",
        className: s,
        ...i
    }) {
        return (0, r.jsx)(a.Link, {
            ...i,
            "aria-label": e,
            className: (0, t.headerStyles)().logo({
                className: s
            }),
            children: (0, r.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "19",
                height: "22",
                viewBox: "0 0 19 22",
                fill: "none",
                "aria-hidden": "true",
                children: (0, r.jsx)("path", {
                    d: "M10.3305 3.93605L13.7281 5.94619C13.8503 6.01676 13.8547 6.21254 13.7281 6.28311L9.69098 8.67343C9.56884 8.74627 9.4245 8.74172 9.31124 8.67343L5.27408 6.28311C5.14972 6.21482 5.1475 6.01449 5.27408 5.94619L8.66947 3.93605V0L0 5.13121V15.3936L3.32433 13.4267V9.40646C3.32211 9.26304 3.48644 9.1606 3.60858 9.238L7.64575 11.6283C7.76788 11.7012 7.83672 11.8309 7.83672 11.9652V16.7436C7.83894 16.887 7.67461 16.9894 7.55248 16.912L4.15486 14.9019L0.830529 16.8688L9.5 22L18.1695 16.8688L14.8451 14.9019L11.4475 16.912C11.3276 16.9872 11.1588 16.8893 11.1633 16.7436V11.9652C11.1633 11.8218 11.241 11.6943 11.3543 11.6283L15.3914 9.238C15.5113 9.16287 15.6801 9.25849 15.6757 9.40646V13.4267L19 15.3936V5.13121L10.3305 0V3.93605Z",
                    fill: "white"
                })
            })
        })
    }
    e.s(["HeaderLogo", 0, n], 870866);
    var s = e.i(401287);
    e.s(["default", 0, ({
        href: e = "/",
        render: t,
        ...a
    }) => (0, r.jsx)(n, {
        ...a,
        href: e,
        render: t ?? (0, s.renderLink)(e),
        "data-sentry-element": "MangoHeaderLogo",
        "data-sentry-component": "HeaderLogo",
        "data-sentry-source-file": "HeaderLogo.tsx"
    })], 704190)
}, 547734, e => {
    "use strict";
    var t = e.i(434802),
        a = e.i(571836),
        r = e.i(437062),
        n = e.i(409781);
    let s = new Map([
            ["bold", n.createElement(n.Fragment, null, n.createElement("path", {
                d: "M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"
            }))],
            ["duotone", n.createElement(n.Fragment, null, n.createElement("path", {
                d: "M192,64V168L88,64Z",
                opacity: "0.2"
            }), n.createElement("path", {
                d: "M192,56H88a8,8,0,0,0-5.66,13.66L128.69,116,58.34,186.34a8,8,0,0,0,11.32,11.32L140,127.31l46.34,46.35A8,8,0,0,0,200,168V64A8,8,0,0,0,192,56Zm-8,92.69-38.34-38.34h0L107.31,72H184Z"
            }))],
            ["fill", n.createElement(n.Fragment, null, n.createElement("path", {
                d: "M200,64V168a8,8,0,0,1-13.66,5.66L140,127.31,69.66,197.66a8,8,0,0,1-11.32-11.32L128.69,116,82.34,69.66A8,8,0,0,1,88,56H192A8,8,0,0,1,200,64Z"
            }))],
            ["light", n.createElement(n.Fragment, null, n.createElement("path", {
                d: "M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"
            }))],
            ["regular", n.createElement(n.Fragment, null, n.createElement("path", {
                d: "M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"
            }))],
            ["thin", n.createElement(n.Fragment, null, n.createElement("path", {
                d: "M196,64V168a4,4,0,0,1-8,0V73.66L66.83,194.83a4,4,0,0,1-5.66-5.66L182.34,68H88a4,4,0,0,1,0-8H192A4,4,0,0,1,196,64Z"
            }))]
        ]),
        i = n.forwardRef((e, t) => n.createElement(r.w, {
            ref: t,
            ...e,
            weights: s
        }));
    i.displayName = "ArrowUpRightIcon";
    var o = e.i(13882),
        l = e.i(785328);
    e.s(["HeaderMenu", 0, function({
        children: e,
        highlight: r,
        className: n
    }) {
        let s = (0, a.useHeaderArrangement)(),
            i = (0, t.headerMenuStyles)({
                arrangement: s
            });
        return (0, l.jsxs)("div", {
            className: i.menu({
                className: n
            }),
            children: [e, r && "desktop" === s && (0, l.jsx)("div", {
                className: i.highlight(),
                children: r
            })]
        })
    }, "HeaderMenuLink", 0, function({
        title: e,
        description: r,
        tag: n,
        icon: s,
        isExternal: u,
        size: c,
        className: d,
        ...h
    }) {
        let m = (0, a.useHeaderArrangement)(),
            f = "dropdown" === m && "lg" === c ? "desktop" : m,
            g = (0, t.headerMenuLinkStyles)({
                arrangement: f,
                size: c
            }),
            p = u && (0, l.jsx)(i, {
                "aria-hidden": !0,
                size: "1rem",
                className: g.external()
            });
        return (0, l.jsx)(o.Link, {
            ...h,
            className: g.link({
                className: d
            }),
            children: "desktop" === f ? (0, l.jsxs)(l.Fragment, {
                children: [s && (0, l.jsx)("span", {
                    className: g.icon(),
                    children: s
                }), (0, l.jsxs)("span", {
                    className: g.body(),
                    children: [(0, l.jsxs)("span", {
                        className: g.title(),
                        children: [(0, l.jsx)("span", {
                            children: e
                        }), n, p]
                    }), r && (0, l.jsx)("span", {
                        className: g.description(),
                        children: r
                    })]
                })]
            }) : (0, l.jsxs)(l.Fragment, {
                children: [(s || "mobile" === f) && (0, l.jsx)("span", {
                    className: g.icon(),
                    children: s
                }), (0, l.jsxs)("span", {
                    className: g.title(),
                    children: [e, "mobile" === f && p]
                })]
            })
        })
    }, "HeaderMenuSection", 0, function({
        title: e,
        children: r,
        actions: n,
        mobileActions: s,
        className: i
    }) {
        let o = (0, a.useHeaderArrangement)(),
            u = (0, t.headerMenuStyles)({
                arrangement: o
            }),
            c = "mobile" === o ? s ?? n : n;
        return (0, l.jsxs)("div", {
            className: u.section({
                className: i
            }),
            children: [(0, l.jsx)("div", {
                className: u.sectionTitle(),
                children: e
            }), (0, l.jsx)("div", {
                className: u.sectionLinks(),
                children: r
            }), c && (0, l.jsx)("div", {
                className: u.sectionActions(),
                children: c
            })]
        })
    }], 547734)
}, 108728, e => {
    "use strict";
    var t = e.i(409781);
    e.s(["useCloseOnHistoryNavigation", 0, function(e, a) {
        (0, t.useEffect)(() => {
            if (e) return window.addEventListener("popstate", a), () => window.removeEventListener("popstate", a)
        }, [e, a])
    }])
}]);

//# debugId=76c6d3ac-0790-8f55-b110-f352a6af8343