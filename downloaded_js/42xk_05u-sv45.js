;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "36059a04-2b87-0d57-bbac-928df9afee14")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 122416, e => {
    "use strict";
    var t = e.i(785328),
        r = e.i(409781),
        a = e.i(869324);
    e.s(["default", 0, () => {
        let e = (0, r.useRef)(null);
        return (0, r.useEffect)(() => {
            let t = e.current?.closest("footer");
            if (!t) return;
            let r = () => (0, a.default)({
                event: "userEvent",
                event_name: "navigation_click",
                properties: {
                    navigation_click_block: "Footer"
                }
            });
            return t.addEventListener("click", r), () => t.removeEventListener("click", r)
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
        r = e.i(409781);
    let a = ({
            children: e
        }) => (0, t.jsx)("li", {
            className: "text-tiny-bold mr-4 text-gray-800 dark:text-gray-200",
            "data-sentry-component": "FooterLegalLink",
            "data-sentry-source-file": "FooterLegalLink.tsx",
            children: e
        }),
        n = ({
            className: e = "",
            width: r = 30,
            height: a = 14
        }) => (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: r,
            height: a,
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
        });
    e.s(["default", 0, ({
        label: e
    }) => {
        let [s, i] = (0, r.useState)(!1);
        return ((0, r.useEffect)(() => {
            i(!0)
        }, []), s) ? (0, t.jsx)(a, {
            "data-sentry-element": "FooterLegalLink",
            "data-sentry-component": "FooterCookieSettingsButton",
            "data-sentry-source-file": "FooterCookieSettingsButton.tsx",
            children: (0, t.jsxs)("div", {
                className: "flex items-center",
                children: [(0, t.jsx)(n, {
                    className: "mr-1",
                    "data-sentry-element": "PrivacyIcon",
                    "data-sentry-source-file": "FooterCookieSettingsButton.tsx"
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
}, 549855, e => {
    "use strict";
    var t = e.i(785328),
        r = e.i(409781);
    let a = ({
            children: e
        }) => (0, t.jsx)("div", {
            className: "mt-6 flex-1",
            "data-sentry-component": "FooterCurrencyContainer",
            "data-sentry-source-file": "FooterCurrencyContainer.tsx",
            children: e
        }),
        n = ({
            children: e
        }) => (0, t.jsx)("div", {
            className: "text-small mb-2 text-gray-600 dark:text-gray-400",
            "data-sentry-component": "FooterTitle",
            "data-sentry-source-file": "FooterTitle.tsx",
            children: e
        });
    var s = e.i(544842),
        i = e.i(65583),
        o = e.i(557749),
        l = e.i(7075),
        u = e.i(433519),
        c = e.i(544923);
    let d = {
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
        h = (0, r.lazy)(() => e.A(755280)),
        f = (0, i.fieldStyles)({
            size: "sm"
        }),
        m = (0, o.selectStyles)({
            size: "sm"
        }),
        y = (0, s.dropdownStyles)(),
        p = {
            none: 0,
            passive: 1,
            focus: 2,
            open: 3
        },
        g = ({
            value: e,
            onActivate: r
        }) => (0, t.jsx)("div", {
            className: f.root(),
            "data-sentry-component": "CurrencySelectPlaceholder",
            "data-sentry-source-file": "FooterCurrencySelector.tsx",
            children: (0, t.jsxs)("button", {
                type: "button",
                className: f.pill({
                    className: m.trigger()
                }),
                "aria-labelledby": "currency-label",
                "aria-haspopup": "listbox",
                "aria-expanded": "false",
                onPointerEnter: () => r?.("passive"),
                onFocus: () => r?.("focus"),
                onClick: () => r?.("open"),
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
                    className: y.caret(),
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
        let [s] = (0, c.default)("location", "US"), [i, o] = (0, c.default)("currency", d[s] || "USD"), {
            dispatch: f,
            state: m
        } = (0, u.default)(), y = (0, l.usePathname)(), [v] = (0, c.default)("experiment_exposure", ""), x = (0, r.useRef)(null), [b, w] = (0, r.useState)("none"), j = e => w(t => p[e] > p[t] ? e : t);
        return (0, r.useEffect)(() => {
            let e = x.current;
            if ("none" !== b || !e) return;
            if ("u" < typeof IntersectionObserver) return void j("passive");
            let t = new IntersectionObserver(e => {
                e.some(e => e.isIntersecting) && j("passive")
            }, {
                rootMargin: "400px"
            });
            return t.observe(e), () => t.disconnect()
        }, [b]), (0, r.useEffect)(() => {
            m.currency !== i && f({
                type: u.CommerceContextAction.UPDATE,
                currency: i
            })
        }, [i, m, f]), (0, t.jsxs)(a, {
            "data-sentry-element": "FooterCurrencyContainer",
            "data-sentry-component": "FooterCurrencySelector",
            "data-sentry-source-file": "FooterCurrencySelector.tsx",
            children: [(0, t.jsx)("span", {
                id: "currency-label",
                children: (0, t.jsx)(n, {
                    "data-sentry-element": "FooterTitle",
                    "data-sentry-source-file": "FooterCurrencySelector.tsx",
                    children: e
                })
            }), (0, t.jsx)("div", {
                ref: x,
                children: "none" === b ? (0, t.jsx)(g, {
                    value: i,
                    onActivate: j
                }) : (0, t.jsx)(r.Suspense, {
                    fallback: (0, t.jsx)(g, {
                        value: i
                    }),
                    children: (0, t.jsx)(h, {
                        value: i,
                        onChange: e => {
                            e && (o(e.toString()), f({
                                type: u.CommerceContextAction.UPDATE,
                                currency: e.toString()
                            }), ((e, t) => {
                                try {
                                    if (!e) return !1;
                                    let r = JSON.parse(decodeURIComponent(e)) ?? {};
                                    return !!r[t] && r[t].hasCurrency
                                } catch (e) {
                                    return console.warn("Error parsing experiment cookie"), !1
                                }
                            })(v, y) && window.location.reload())
                        },
                        autoFocus: "focus" === b || "open" === b,
                        defaultOpen: "open" === b
                    })
                })
            })]
        })
    }], 549855)
}, 724030, e => {
    "use strict";
    var t = e.i(785328),
        r = e.i(654954);
    let a = ({
            children: e
        }) => (0, t.jsx)("li", {
            className: "text-tiny-bold mr-4 text-gray-800 dark:text-gray-200",
            "data-sentry-component": "FooterLanguageLink",
            "data-sentry-source-file": "FooterLanguageLink.tsx",
            children: e
        }),
        n = ({
            children: e
        }) => (0, t.jsx)("ul", {
            className: "flex flex-wrap gap-y-2 whitespace-nowrap",
            "data-sentry-component": "FooterLanguageLinks",
            "data-sentry-source-file": "FooterLanguageLinks.tsx",
            children: e
        });
    var s = e.i(7075);
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
        return (0, t.jsx)(n, {
            "data-sentry-element": "FooterLanguageLinkList",
            "data-sentry-component": "FooterLanguageLinks",
            "data-sentry-source-file": "FooterLanguageLinks.tsx",
            children: i.map((n, s) => (0, t.jsx)(a, {
                "data-sentry-element": "FooterLanguageLink",
                "data-sentry-component": "renderLanguages",
                "data-sentry-source-file": "FooterLanguageLinks.tsx",
                children: (0, t.jsx)(r.default, {
                    href: `/${n.locale}${e}`,
                    className: "hover:text-blue focus-visible:text-blue transition duration-200",
                    "data-testid": n.title,
                    prefetch: !1,
                    "data-sentry-element": "LanguageLink",
                    "data-sentry-source-file": "FooterLanguageLinks.tsx",
                    children: n.title
                })
            }, `language-${n.title}-${s}`))
        })
    }], 724030)
}, 998003, e => {
    "use strict";
    let t;
    var r = e.i(785328),
        a = e.i(321950),
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
            build(e, t, r) {
                let a = t.queryKey,
                    n = t.queryHash ?? (0, o.hashQueryKeyByOptions)(a, t),
                    s = this.get(n);
                return s || (s = new l.Query({
                    client: e,
                    queryKey: a,
                    queryHash: n,
                    options: e.defaultQueryOptions(t),
                    state: r,
                    defaultOptions: e.getQueryDefaults(a)
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
        f = e.i(297652),
        m = class extends h.Removable {
            #t;
            #r;
            #a;
            #n;
            constructor(e) {
                super(), this.#t = e.client, this.mutationId = e.mutationId, this.#a = e.mutationCache, this.#r = [], this.state = e.state || {
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
                this.#r.includes(e) || (this.#r.push(e), this.clearGcTimeout(), this.#a.notify({
                    type: "observerAdded",
                    mutation: this,
                    observer: e
                }))
            }
            removeObserver(e) {
                this.#r = this.#r.filter(t => t !== e), this.scheduleGc(), this.#a.notify({
                    type: "observerRemoved",
                    mutation: this,
                    observer: e
                })
            }
            optionalRemove() {
                this.#r.length || ("pending" === this.state.status ? this.scheduleGc() : this.#a.remove(this))
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
                    r = {
                        client: this.#t,
                        meta: this.options.meta,
                        mutationKey: this.options.mutationKey
                    };
                this.#n = (0, f.createRetryer)({
                    fn: () => this.options.mutationFn ? this.options.mutationFn(e, r) : Promise.reject(Error("No mutationFn found")),
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
                    canRun: () => this.#a.canRun(this)
                });
                let a = "pending" === this.state.status,
                    n = !this.#n.canStart();
                try {
                    if (a) t();
                    else {
                        this.#s({
                            type: "pending",
                            variables: e,
                            isPaused: n
                        }), this.#a.config.onMutate && await this.#a.config.onMutate(e, this, r);
                        let t = await this.options.onMutate?.(e, r);
                        t !== this.state.context && this.#s({
                            type: "pending",
                            context: t,
                            variables: e,
                            isPaused: n
                        })
                    }
                    let s = await this.#n.start();
                    return await this.#a.config.onSuccess?.(s, e, this.state.context, this, r), await this.options.onSuccess?.(s, e, this.state.context, r), await this.#a.config.onSettled?.(s, null, this.state.variables, this.state.context, this, r), await this.options.onSettled?.(s, null, e, this.state.context, r), this.#s({
                        type: "success",
                        data: s
                    }), s
                } catch (t) {
                    try {
                        await this.#a.config.onError?.(t, e, this.state.context, this, r)
                    } catch (e) {
                        Promise.reject(e)
                    }
                    try {
                        await this.options.onError?.(t, e, this.state.context, r)
                    } catch (e) {
                        Promise.reject(e)
                    }
                    try {
                        await this.#a.config.onSettled?.(void 0, t, this.state.variables, this.state.context, this, r)
                    } catch (e) {
                        Promise.reject(e)
                    }
                    try {
                        await this.options.onSettled?.(void 0, t, e, this.state.context, r)
                    } catch (e) {
                        Promise.reject(e)
                    }
                    throw this.#s({
                        type: "error",
                        error: t
                    }), t
                } finally {
                    this.#a.runNext(this)
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
                    this.#r.forEach(t => {
                        t.onMutationUpdate(e)
                    }), this.#a.notify({
                        mutation: this,
                        type: "updated",
                        action: e
                    })
                })
            }
        },
        y = c,
        p = class extends y.Subscribable {
            constructor(e = {}) {
                super(), this.config = e, this.#i = new Set, this.#o = new Map, this.#l = 0
            }
            #i;
            #o;
            #l;
            build(e, t, r) {
                let a = new m({
                    client: e,
                    mutationCache: this,
                    mutationId: ++this.#l,
                    options: e.defaultMutationOptions(t),
                    state: r
                });
                return this.add(a), a
            }
            add(e) {
                this.#i.add(e);
                let t = g(e);
                if ("string" == typeof t) {
                    let r = this.#o.get(t);
                    r ? r.push(e) : this.#o.set(t, [e])
                }
                this.notify({
                    type: "added",
                    mutation: e
                })
            }
            remove(e) {
                if (this.#i.delete(e)) {
                    let t = g(e);
                    if ("string" == typeof t) {
                        let r = this.#o.get(t);
                        if (r)
                            if (r.length > 1) {
                                let t = r.indexOf(e); - 1 !== t && r.splice(t, 1)
                            } else r[0] === e && this.#o.delete(t)
                    }
                }
                this.notify({
                    type: "removed",
                    mutation: e
                })
            }
            canRun(e) {
                let t = g(e);
                if ("string" != typeof t) return !0;
                {
                    let r = this.#o.get(t),
                        a = r?.find(e => "pending" === e.state.status);
                    return !a || a === e
                }
            }
            runNext(e) {
                let t = g(e);
                if ("string" != typeof t) return Promise.resolve();
                {
                    let r = this.#o.get(t)?.find(t => t !== e && t.state.isPaused);
                    return r?.continue() ?? Promise.resolve()
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

    function g(e) {
        return e.options.scope?.id
    }
    var v = e.i(758059),
        x = e.i(655100),
        b = class {
            #u;
            #a;
            #c;
            #d;
            #h;
            #f;
            #m;
            #y;
            constructor(e = {}) {
                this.#u = e.queryCache || new d, this.#a = e.mutationCache || new p, this.#c = e.defaultOptions || {}, this.#d = new Map, this.#h = new Map, this.#f = 0
            }
            mount() {
                this.#f++, 1 === this.#f && (this.#m = v.focusManager.subscribe(async e => {
                    e && (await this.resumePausedMutations(), this.#u.onFocus())
                }), this.#y = x.onlineManager.subscribe(async e => {
                    e && (await this.resumePausedMutations(), this.#u.onOnline())
                }))
            }
            unmount() {
                this.#f--, 0 === this.#f && (this.#m?.(), this.#m = void 0, this.#y?.(), this.#y = void 0)
            }
            isFetching(e) {
                return this.#u.findAll({
                    ...e,
                    fetchStatus: "fetching"
                }).length
            }
            isMutating(e) {
                return this.#a.findAll({
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
                    a = r.state.data;
                return void 0 === a ? this.fetchQuery(e) : (e.revalidateIfStale && r.isStaleByTime((0, o.resolveStaleTime)(t.staleTime, r)) && this.prefetchQuery(t), Promise.resolve(a))
            }
            getQueriesData(e) {
                return this.#u.findAll(e).map(({
                    queryKey: e,
                    state: t
                }) => [e, t.data])
            }
            setQueryData(e, t, r) {
                let a = this.defaultQueryOptions({
                        queryKey: e
                    }),
                    n = this.#u.get(a.queryHash),
                    s = n?.state.data,
                    i = (0, o.functionalUpdate)(t, s);
                if (void 0 !== i) return this.#u.build(this, a).setData(i, {
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
                return Promise.all(u.notifyManager.batch(() => this.#u.findAll(e).map(e => e.cancel(r)))).then(o.noop).catch(o.noop)
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
                    return r.throwOnError || (t = t.catch(o.noop)), "paused" === e.state.fetchStatus ? Promise.resolve() : t
                }))).then(o.noop)
            }
            fetchQuery(e) {
                let t = this.defaultQueryOptions(e);
                void 0 === t.retry && (t.retry = !1);
                let r = this.#u.build(this, t);
                return r.isStaleByTime((0, o.resolveStaleTime)(t.staleTime, r)) ? r.fetch(t) : Promise.resolve(r.state.data)
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
                return x.onlineManager.isOnline() ? this.#a.resumePausedMutations() : Promise.resolve()
            }
            getQueryCache() {
                return this.#u
            }
            getMutationCache() {
                return this.#a
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
                    r = {};
                return t.forEach(t => {
                    (0, o.partialMatchKey)(e, t.queryKey) && Object.assign(r, t.defaultOptions)
                }), r
            }
            setMutationDefaults(e, t) {
                this.#h.set((0, o.hashKey)(e), {
                    mutationKey: e,
                    defaultOptions: t
                })
            }
            getMutationDefaults(e) {
                let t = [...this.#h.values()],
                    r = {};
                return t.forEach(t => {
                    (0, o.partialMatchKey)(e, t.mutationKey) && Object.assign(r, t.defaultOptions)
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
                this.#u.clear(), this.#a.clear()
            }
        },
        w = e.i(317386),
        j = e.i(689326);

    function E() {
        return new b({
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
        return (0, r.jsx)(a.GenesisSessionProvider, {
            "data-sentry-element": "GenesisSessionProvider",
            "data-sentry-component": "GlobalProviders",
            "data-sentry-source-file": "GlobalProviders.tsx",
            children: (0, r.jsx)(n.CommerceContextProvider, {
                "data-sentry-element": "CommerceContextProvider",
                "data-sentry-source-file": "GlobalProviders.tsx",
                children: (0, r.jsxs)(s.QueryClientProvider, {
                    client: j.environmentManager.isServer() ? E() : (t || (t = E()), t),
                    "data-sentry-element": "QueryClientProvider",
                    "data-sentry-source-file": "GlobalProviders.tsx",
                    children: [e, (0, r.jsx)(i, {
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
        r = e.i(409781),
        a = e.i(145694),
        n = e.i(509924),
        s = e.i(740041),
        i = e.i(544923),
        o = e.i(849141);
    let l = "GTM-5V25JL6",
        u = "a9f5fcb3-4c7f-4bb7-93bf-7607ffbdabe0";
    e.s(["default", 0, function({
        locale: e
    }) {
        let [c] = (0, i.default)("location", "US"), [d] = (0, i.default)("currency", "USD"), [h, f] = (0, r.useState)(null), m = (0, r.useCallback)(() => {
            window.OneTrust && window.OneTrust.changeLanguage(s.oneTrustLocaleOverrides[e || "en"])
        }, [e]), y = (0, r.useCallback)(async () => {
            let e = sessionStorage.getItem("UNITY_SESSION"),
                t = "";
            if (e) t = JSON.parse(e)?.user;
            else try {
                let e = await (0, o.getUserFromGenesis)();
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
            y()
        }, [y]), (0, r.useEffect)(() => {
            m()
        }, [m]), (0, t.jsxs)(t.Fragment, {
            children: [u && (0, t.jsx)(a.default, {
                src: "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js",
                charSet: "UTF-8",
                "data-domain-script": u,
                "data-dLayer-ignore": "true",
                strategy: "afterInteractive",
                "data-document-language": "true",
                onReady: m
            }), u && (0, t.jsx)(a.default, {
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
    var r = e.i(785328),
        a = e.i(409781);

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
    async function s(r) {
        let a = "client-l663XvPBsVHc0dQMcaW3uSTIIhOTqE5O";
        if (!r || !a) return;
        let {
            deviceId: s,
            userId: i
        } = n();
        if (s || i) try {
            t ??= e.A(63720).then(({
                Experiment: e
            }) => e.initialize(a));
            let n = await t;
            await n.fetch({
                ...s ? {
                    device_id: s
                } : {},
                ...i ? {
                    user_id: i
                } : {}
            });
            let o = n.variant(r);
            return "string" == typeof o?.value ? o.value : void 0
        } catch (e) {
            console.error("[Client Experiment] error fetching variant", e);
            return
        }
    }
    let i = (0, a.createContext)({});
    e.s(["ExperimentGate", 0, ({
        experimentKey: e,
        targetVariant: t,
        children: n
    }) => {
        let s = (0, a.useContext)(i);
        if (!(e in s)) return null;
        let o = s[e];
        return (void 0 !== o ? o === t : "control" === t) ? (0, r.jsx)(r.Fragment, {
            children: n
        }) : null
    }, "HeaderExperimentsProvider", 0, ({
        items: t,
        children: o
    }) => {
        let l = function(t) {
            let [r, i] = (0, a.useState)({}), o = (0, a.useRef)(new Set);
            return (0, a.useEffect)(() => {
                if (!t) return void i({});
                let r = Array.from(new Set(t.map(e => e && "object" == typeof e && "experimentKey" in e ? e.experimentKey : void 0).filter(e => !!e)));
                if (0 === r.length) return void i({});
                let a = !1;
                return (async () => {
                    let {
                        deviceId: t,
                        userId: l
                    } = n(), u = await Promise.all(r.map(async e => {
                        let t = await s(e);
                        return [e, t]
                    }));
                    if (!a && (i(Object.fromEntries(u)), t || l)) {
                        let {
                            sendExposureEvent: r
                        } = await e.A(486735);
                        if (a) return;
                        for (let [e, a] of u) a && !o.current.has(e) && (o.current.add(e), r(e, a, t, l))
                    }
                })(), () => {
                    a = !0
                }
            }, [t]), r
        }(t);
        return (0, r.jsx)(i.Provider, {
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
        r = e.i(409781),
        a = e.i(425314),
        n = e.i(935862),
        s = e.i(308857),
        i = e.i(514957),
        o = e.i(869324);
    let l = (0, a.default)(() => e.A(191233), {
            loadableGenerated: {
                modules: [807973]
            },
            ssr: !1
        }),
        u = e => {
            var t;
            let r, a = (({
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
            }))({
                action: e,
                level: "header",
                pageDetails: {
                    page_url: (r = (t = document).location).href,
                    page_hostname: r.hostname,
                    page_path: r.pathname,
                    page_query: r.search,
                    page_fragment: r.hash,
                    page_title: t.title
                }
            });
            (0, o.default)(a)
        };
    e.s(["default", 0, ({
        placeholder: e,
        noResultsMessage: a,
        filterTabs: o
    }) => {
        let [c, d] = (0, r.useState)(!1), [h, f] = (0, r.useState)(!1), m = (0, r.useRef)(null), y = (0, r.useCallback)(() => {
            f(!0)
        }, []), p = (0, r.useCallback)(() => {
            d(!0), u("search modal open")
        }, []), g = (0, r.useCallback)(e => {
            d(e), e || (u("search modal close"), requestAnimationFrame(() => {
                m.current?.focus()
            }))
        }, []);
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(s.default, {
                ref: m,
                onClick: p,
                onMouseEnter: y,
                onFocus: y,
                onTouchStart: y,
                icon: (0, t.jsx)("div", {
                    className: "p-2.5",
                    children: (0, t.jsx)(i.default, {
                        as: n.MagnifyingGlass,
                        size: "0.875rem"
                    })
                }),
                "data-sentry-element": "HeaderIconButton",
                "data-sentry-source-file": "MangoHeaderSearch.tsx"
            }), (h || c) && (0, t.jsx)(l, {
                isOpen: c,
                onOpenChange: g,
                placeholder: e,
                noResultsMessage: a,
                filterTabs: o
            })]
        })
    }], 264256)
}, 672515, e => {
    "use strict";
    var t = e.i(785328),
        r = e.i(531834),
        a = e.i(78070),
        n = e.i(514957),
        s = e.i(781583),
        i = e.i(833449),
        o = e.i(686376);
    let l = ({
            title: e,
            description: n,
            onLogout: s,
            onAccount: l,
            image: u,
            accountText: c = "My Account"
        }) => (0, t.jsxs)("div", {
            className: "relative h-[11.75rem] w-full overflow-hidden rounded-xl p-3 shadow-md",
            "data-sentry-component": "HeaderUserSpotlight",
            "data-sentry-source-file": "HeaderUserSpotlight.tsx",
            children: [u && (0, t.jsx)(i.default, {
                src: u.src,
                alt: "",
                fill: !0,
                placeholder: u.placeholder ? "blur" : void 0,
                blurDataURL: u.placeholder || void 0,
                sizes: "(max-width: 768px) 100vw, 20rem",
                className: "absolute inset-0 z-0 object-cover object-center"
            }), (0, t.jsx)("div", {
                className: "absolute inset-0 z-10",
                style: {
                    background: "linear-gradient(180deg, rgba(27, 27, 27, 0.50) 8.12%, rgba(0, 0, 0, 0.50) 59.95%)"
                }
            }), (0, t.jsxs)("div", {
                className: "relative z-20 flex h-full flex-col justify-between",
                children: [(0, t.jsxs)("div", {
                    className: "flex items-start justify-between",
                    children: [(0, t.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [(0, t.jsx)("div", {
                            className: "mango-text-heading-xs text-mango-white",
                            children: e
                        }), (0, t.jsx)("div", {
                            className: "mango-text-body-xs text-mango-gray-400",
                            children: n
                        })]
                    }), (0, t.jsx)(a.default, {
                        icon: (0, t.jsx)(o.SignOut, {}),
                        variant: "outline",
                        size: "xs",
                        onClick: s,
                        "aria-label": "Logout",
                        "data-sentry-element": "Button",
                        "data-sentry-source-file": "HeaderUserSpotlight.tsx"
                    })]
                }), (0, t.jsx)("div", {
                    children: (0, t.jsx)(a.default, {
                        size: "sm",
                        variant: "secondary",
                        icon: (0, t.jsx)(r.User, {}),
                        iconDirection: "left",
                        onClick: l,
                        "data-sentry-element": "Button",
                        "data-sentry-source-file": "HeaderUserSpotlight.tsx",
                        children: c
                    })
                })]
            })]
        }),
        u = ({
            children: e,
            userSpotlight: i,
            signInText: o = "Sign in or create Unity ID",
            onSignIn: u,
            initials: c,
            ariaLabel: d = "Account"
        }) => (0, t.jsx)(s.default, {
            ariaLabel: d,
            icon: c ? (0, t.jsx)("div", {
                className: "mango-text-heading-5xs flex h-9 w-9 items-center justify-center text-white capitalize",
                children: c
            }) : (0, t.jsx)("div", {
                className: "p-2.5",
                children: (0, t.jsx)(n.default, {
                    as: r.User,
                    size: "0.875rem"
                })
            }),
            "data-sentry-element": "HeaderDropdown",
            "data-sentry-component": "HeaderDropdownUser",
            "data-sentry-source-file": "HeaderDropdownUser.tsx",
            children: (0, t.jsxs)("div", {
                className: "flex w-full flex-col gap-4",
                children: [i ? (0, t.jsx)(l, {
                    title: i.title,
                    description: i.description,
                    image: i.image,
                    onLogout: i.onLogout,
                    onAccount: i.onAccount,
                    accountText: i.accountText
                }) : (0, t.jsx)(a.default, {
                    className: "w-full",
                    icon: (0, t.jsx)(r.User, {}),
                    iconDirection: "left",
                    onClick: u,
                    children: o
                }), e]
            })
        });
    var c = e.i(321950),
        d = e.i(393335),
        h = e.i(409781),
        f = e.i(849141);
    e.s(["default", 0, ({
        locale: e,
        userMenu: r,
        children: a
    }) => {
        let {
            user: n,
            signIn: s,
            signOut: i
        } = (({
            locale: e
        } = {}) => {
            let [t, r] = (0, h.useState)(null), [a, n] = (0, h.useState)(!1), {
                genesisSession: s
            } = (0, c.useGenesisSession)(), i = (0, d.usePathname)() || "/";
            (0, h.useEffect)(() => {
                (async () => {
                    n(!0);
                    try {
                        let {
                            users: e
                        } = await (0, f.getUserFromGenesis)();
                        if (e.length > 0) {
                            let t = e[0] ?? {},
                                a = t.name?.givenName,
                                s = t.name?.familyName,
                                i = t.name?.fullName;
                            if (i && (!a || !s)) {
                                let e = i.trim().split(/\s+/);
                                a || (a = e[0] || ""), !s && e.length > 1 && (s = e[e.length - 1] || "")
                            }
                            r({
                                initials: ((e, t, r) => {
                                    let a = t ?? "",
                                        n = r ?? "";
                                    if (e) {
                                        let t = e.split(" ");
                                        a = t[0], n = t.length > 1 ? t[t.length - 1] : ""
                                    }
                                    return `${a[0]??""}${n[0]??""}`
                                })(i, a, s),
                                ...t,
                                name: {
                                    fullName: i || "",
                                    givenName: a || "",
                                    familyName: s || ""
                                }
                            }), n(!1)
                        }
                    } catch (e) {
                        console.error(e)
                    }
                })()
            }, []);
            let o = new URLSearchParams({
                client_id: "cms_unity",
                response_type: "code",
                redirect_uri: "https://unity.com/oauth",
                ...e && {
                    locale: "en" === e ? "en_us" : e
                }
            }).toString();
            return {
                user: t,
                loading: a,
                signIn: () => {
                    sessionStorage.setItem("REDIRECT_PATH", i), window.location.href = `https://api.unity.com/v1/oauth2/authorize?${o}`
                },
                signOut: () => {
                    let e = new URLSearchParams({
                        access_token: s.access_token,
                        post_logout_redirect_uri: `https://unity.com${i}`
                    }).toString();
                    sessionStorage.clear(), window.location.href = `https://api.unity.com/v1/oauth2/end-session?${e}`
                },
                signUp: () => {
                    sessionStorage.setItem("REDIRECT_PATH", i), window.location.href = `https://api.unity.com/v1/oauth2/authorize?${o}&is_reg=true`
                }
            }
        })({
            locale: e
        }), o = n?.name.givenName || "User";
        return (0, t.jsx)(u, {
            signInText: r.signInText,
            ariaLabel: r.accountText || void 0,
            onSignIn: s,
            initials: n?.login ? n?.initials : void 0,
            userSpotlight: n?.login ? {
                title: r.userGreeting ? r.userGreeting.replace(/\{\{\s*name\s*\}\}/g, () => o) : o,
                description: n?.email || "",
                onLogout: i,
                onAccount: () => {
                    window.location.href = "https://cloud.unity.com/account/account-settings"
                },
                accountText: r.accountText || "My Account",
                image: r.spotlightImage
            } : void 0,
            "data-sentry-element": "HeaderDropdownUser",
            "data-sentry-component": "MangoHeaderUser",
            "data-sentry-source-file": "MangoHeaderUser.tsx",
            children: a
        })
    }], 672515)
}, 682232, e => {
    "use strict";
    var t = e.i(833200),
        r = e.i(785328);
    e.s(["default", 0, function({
        locale: e,
        ...a
    }) {
        if (!e) throw Error(void 0);
        return (0, r.jsx)(t.IntlProvider, {
            locale: e,
            ...a
        })
    }])
}, 906003, e => {
    "use strict";
    var t = e.i(785328),
        r = e.i(409781);
    let a = (0, r.lazy)(() => e.A(428768));
    e.s(["default", 0, function(e) {
        return (0, t.jsx)(r.Suspense, {
            fallback: null,
            children: (0, t.jsx)(a, {
                ...e
            })
        })
    }])
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

    function a(e, t, r = !1) {
        return t ? Object.keys(e).filter(e => r ? !t.includes(e) : t.includes(e)).reduce((t, r) => (t[r] = e[r], t), {}) : {}
    }

    function n(e, t, r, a) {
        let n = a && Object.keys(a).length > 0 ? new URL(Object.values(a)[0], e) : new URL(e);
        return t && r && t.forEach(e => {
            r[e] && n.searchParams.set(e, r[e])
        }), n.toString()
    }

    function s(e, t, r, a, s) {
        var i;
        if (!t) return `<${e}></${e}>`;
        let o = (null == (i = t.src) ? void 0 : i.url) ? Object.assign(Object.assign({}, t), {
                src: n(t.src.url, t.src.params, a, s)
            }) : t,
            l = Object.keys(Object.assign(Object.assign({}, o), r)).reduce((e, t) => {
                let a = null == r ? void 0 : r[t],
                    n = o[t],
                    s = null != a ? a : n,
                    i = !0 === s ? t : `${t}="${s}"`;
                return s ? e + ` ${i}` : e
            }, "");
        return `<${e}${l}></${e}>`
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.formatData = r.createHtml = r.formatUrl = void 0, r.formatUrl = n, r.createHtml = s, r.formatData = function(e, t) {
        var r, i, o, l, u;
        let c = a(t, null == (r = e.scripts) ? void 0 : r.reduce((e, t) => [...e, ...Array.isArray(t.params) ? t.params : []], [])),
            d = a(t, null == (o = null == (i = e.html) ? void 0 : i.attributes.src) ? void 0 : o.params),
            h = a(t, [null == (u = null == (l = e.html) ? void 0 : l.attributes.src) ? void 0 : u.slugParam]),
            f = a(t, [...Object.keys(c), ...Object.keys(d), ...Object.keys(h)], !0);
        return Object.assign(Object.assign({}, e), {
            html: e.html ? s(e.html.element, e.html.attributes, f, d, h) : null,
            scripts: e.scripts ? e.scripts.map(e => Object.assign(Object.assign({}, e), {
                url: n(e.url, e.params, c)
            })) : null
        })
    }
}, 880092, (e, t, r) => {
    "use strict";
    var a = e.e && e.e.__rest || function(e, t) {
            var r = {};
            for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && 0 > t.indexOf(a) && (r[a] = e[a]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++) 0 > t.indexOf(a[n]) && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
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
    let s = n(e.r(418704)),
        i = e.r(6154);
    r.GoogleAnalytics = e => {
        var t = a(e, []);
        return (0, i.formatData)(s.default, t)
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
    var a = e.e && e.e.__rest || function(e, t) {
            var r = {};
            for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && 0 > t.indexOf(a) && (r[a] = e[a]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++) 0 > t.indexOf(a[n]) && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
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
    let s = n(e.r(731292)),
        i = e.r(6154);
    r.GoogleMapsEmbed = e => {
        var t = a(e, []);
        return (0, i.formatData)(s.default, t)
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
    var a = e.e && e.e.__rest || function(e, t) {
            var r = {};
            for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && 0 > t.indexOf(a) && (r[a] = e[a]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++) 0 > t.indexOf(a[n]) && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
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
    let s = n(e.r(447716)),
        i = e.r(6154);
    r.YouTubeEmbed = e => {
        var t = a(e, []);
        return (0, i.formatData)(s.default, t)
    }
}, 508751, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.YouTubeEmbed = r.GoogleMapsEmbed = r.GoogleAnalytics = void 0;
    var a = e.r(880092);
    Object.defineProperty(r, "GoogleAnalytics", {
        enumerable: !0,
        get: function() {
            return a.GoogleAnalytics
        }
    });
    var n = e.r(490057);
    Object.defineProperty(r, "GoogleMapsEmbed", {
        enumerable: !0,
        get: function() {
            return n.GoogleMapsEmbed
        }
    });
    var s = e.r(761564);
    Object.defineProperty(r, "YouTubeEmbed", {
        enumerable: !0,
        get: function() {
            return s.YouTubeEmbed
        }
    })
}, 71406, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.default = function({
        html: e,
        height: t = null,
        width: r = null,
        children: s,
        dataNtpc: i = ""
    }) {
        return (0, n.useEffect)(() => {
            i && performance.mark("mark_feature_usage", {
                detail: {
                    feature: `next-third-parties-${i}`
                }
            })
        }, [i]), (0, a.jsxs)(a.Fragment, {
            children: [s, e ? (0, a.jsx)("div", {
                style: {
                    height: null != t ? `${t}px` : "auto",
                    width: null != r ? `${r}px` : "auto"
                },
                "data-ntpc": i,
                dangerouslySetInnerHTML: {
                    __html: e
                }
            }) : null]
        })
    };
    let a = e.r(785328),
        n = e.r(409781)
}, 152458, (e, t, r) => {
    "use strict";
    var a = e.e && e.e.__importDefault || function(e) {
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
        } = e, a = {
            ...r,
            key: t
        }, {
            html: o
        } = (0, s.GoogleMapsEmbed)(a);
        return (0, n.jsx)(i.default, {
            height: a.height || null,
            width: a.width || null,
            html: o,
            dataNtpc: "GoogleMapsEmbed"
        })
    };
    let n = e.r(785328),
        s = e.r(508751),
        i = a(e.r(71406))
}, 848757, (e, t, r) => {
    "use strict";
    var a = e.e && e.e.__importDefault || function(e) {
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
            stylesheets: a
        } = (0, i.YouTubeEmbed)(e);
        return (0, n.jsx)(o.default, {
            height: e.height || null,
            width: e.width || null,
            html: t,
            dataNtpc: "YouTubeEmbed",
            children: null == r ? void 0 : r.map(e => (0, n.jsx)(s.default, {
                src: e.url,
                strategy: l[e.strategy],
                stylesheets: a
            }, e.url))
        })
    };
    let n = e.r(785328),
        s = a(e.r(145694)),
        i = e.r(508751),
        o = a(e.r(71406)),
        l = {
            server: "beforeInteractive",
            client: "afterInteractive",
            idle: "lazyOnload",
            worker: "worker"
        }
}, 967763, (e, t, r) => {
    "use strict";
    var a = e.e && e.e.__importDefault || function(e) {
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
            dataLayerName: a = "dataLayer",
            auth: l,
            preview: u,
            dataLayer: c,
            nonce: d
        } = e;
        o = a;
        let h = new URL(r || "https://www.googletagmanager.com/gtm.js");
        return t && h.searchParams.set("id", t), "dataLayer" !== a && h.searchParams.set("l", a), l && h.searchParams.set("gtm_auth", l), u && (h.searchParams.set("gtm_preview", u), h.searchParams.set("gtm_cookies_win", "x")), (0, s.useEffect)(() => {
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
      })(window,'${a}');`
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
        i = a(e.r(145694)),
        o = "dataLayer";
    r.sendGTMEvent = (e, t) => {
        let r = t || o;
        window[r] = window[r] || [], window[r].push(e)
    }
}, 47350, (e, t, r) => {
    "use strict";
    let a;
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
        return void 0 === a && (a = n), (0, i.useEffect)(() => {
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

          gtag('config', '${t}' ${r?",{ 'debug_mode': true }":""});`
                },
                nonce: l
            }), (0, s.jsx)(o.default, {
                id: "_next-ga",
                src: `https://www.googletagmanager.com/gtag/js?id=${t}`,
                nonce: l
            })]
        })
    }, r.sendGAEvent = function() {
        void 0 === a ? console.warn("@next/third-parties: GA has not been initialized") : window[a] ? window[a].push(arguments) : console.warn(`@next/third-parties: GA dataLayer ${a} does not exist`)
    };
    let s = e.r(785328),
        i = e.r(409781),
        o = n(e.r(145694))
}, 509924, (e, t, r) => {
    "use strict";
    var a = e.e && e.e.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.sendGAEvent = r.GoogleAnalytics = r.sendGTMEvent = r.GoogleTagManager = r.YouTubeEmbed = r.GoogleMapsEmbed = void 0;
    var n = e.r(152458);
    Object.defineProperty(r, "GoogleMapsEmbed", {
        enumerable: !0,
        get: function() {
            return a(n).default
        }
    });
    var s = e.r(848757);
    Object.defineProperty(r, "YouTubeEmbed", {
        enumerable: !0,
        get: function() {
            return a(s).default
        }
    });
    var i = e.r(967763);
    Object.defineProperty(r, "GoogleTagManager", {
        enumerable: !0,
        get: function() {
            return i.GoogleTagManager
        }
    }), Object.defineProperty(r, "sendGTMEvent", {
        enumerable: !0,
        get: function() {
            return i.sendGTMEvent
        }
    });
    var o = e.r(47350);
    Object.defineProperty(r, "GoogleAnalytics", {
        enumerable: !0,
        get: function() {
            return o.GoogleAnalytics
        }
    }), Object.defineProperty(r, "sendGAEvent", {
        enumerable: !0,
        get: function() {
            return o.sendGAEvent
        }
    })
}, 529387, e => {
    "use strict";
    var t = e.i(785328),
        r = e.i(409781),
        a = e.i(393335),
        n = e.i(722978),
        s = e.i(94918),
        i = e.i(825610);
    let o = r.default.forwardRef(({
        isOpen: e,
        active: r,
        panels: a,
        onKeyDown: s,
        panelRefs: i
    }, o) => {
        let l = null !== r && null != a[r],
            u = e && l;
        return (0, t.jsx)("div", {
            ref: o,
            className: (0, n.default)("ease-out-quart absolute top-full right-0 left-0 z-40 grid w-full overflow-hidden rounded-b-[1rem] px-[4.625rem] shadow-2xl backdrop-blur-[24px] transition-[grid-template-rows,min-height,padding,opacity] duration-300", u ? "min-h-[27rem] grid-rows-[1fr] py-10 opacity-100" : "min-h-0 grid-rows-[0fr] py-0 opacity-0"),
            role: "menu",
            "aria-hidden": !u,
            onKeyDown: s,
            style: {
                background: "linear-gradient(0deg, rgba(38, 38, 38, 0.80) -53.45%, rgba(0, 0, 0, 0.80) 91.71%)",
                pointerEvents: u ? "auto" : "none"
            },
            children: (0, t.jsx)("div", {
                className: "relative min-h-0 w-full",
                children: a.map((a, s) => {
                    if (null == a) return null;
                    let o = r === s && e;
                    return (0, t.jsx)("div", {
                        ref: e => {
                            i && (i.current[s] = e)
                        },
                        className: (0, n.default)("ease-out-quart grid w-full grid-cols-12 gap-6 transition-[opacity,translate]", o ? "pointer-events-auto relative translate-y-0 opacity-100 delay-100 duration-300" : "pointer-events-none absolute inset-x-0 top-0 -translate-y-2.5 opacity-0 delay-0 duration-200"),
                        "aria-hidden": !o,
                        children: a
                    }, `mega-menu-panel-${s}`)
                })
            })
        })
    });
    o.displayName = "HeaderMegaMenu", e.s(["default", 0, ({
        items: e,
        panels: l
    }) => {
        let [u, c] = (0, r.useState)(null), [d, h] = (0, r.useState)(!1), f = (0, a.usePathname)(), m = (0, r.useRef)(null), y = (0, r.useRef)([]), p = (0, r.useRef)(null), g = (0, r.useRef)([]);
        (0, r.useEffect)(() => {
            g.current.forEach((e, t) => {
                if (!e) return;
                let r = u === t && d;
                e.querySelectorAll("a[href], button:not([disabled])").forEach(e => {
                    r ? e.removeAttribute("tabindex") : e.setAttribute("tabindex", "-1")
                })
            })
        }, [u, d]), (0, r.useEffect)(() => () => {
            m.current && clearTimeout(m.current)
        }, []), (0, r.useEffect)(() => {
            h(!1), c(null)
        }, [f]);
        let v = () => {
                m.current && clearTimeout(m.current)
            },
            x = e => {
                let t = g.current[e];
                return t ? Array.from(t.querySelectorAll('a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"])')) : []
            };
        return (0, t.jsxs)(t.Fragment, {
            children: [d && null !== u && e[u]?.hasPanel && (0, t.jsx)("div", {
                className: "fixed inset-0 z-10 bg-black/10",
                style: {
                    top: "3rem"
                }
            }), (0, t.jsxs)("div", {
                className: "hidden lg:block",
                role: "menubar",
                tabIndex: -1,
                onBlurCapture: e => {
                    m.current = setTimeout(() => {
                        let t = e.currentTarget,
                            r = document.activeElement;
                        t && r && !t.contains(r) && (h(!1), c(null))
                    }, 150)
                },
                onMouseEnter: v,
                onMouseLeave: () => {
                    m.current = setTimeout(() => {
                        h(!1), c(null)
                    }, 150)
                },
                onKeyDown: e => {
                    "Escape" === e.key && d && (e.preventDefault(), h(!1), c(null), null !== u && y.current[u]?.focus())
                },
                children: [(0, t.jsx)("nav", {
                    children: (0, t.jsx)("ul", {
                        className: "flex",
                        children: e.map((r, a) => (0, t.jsx)("li", {
                            children: (0, t.jsx)(s.Link, {
                                ref: e => {
                                    y.current[a] = e
                                },
                                className: (0, n.default)("mango-text-heading-5xs text-mango-white hover:bg-mango-gray-950 block rounded-xl px-3 py-2", {
                                    "bg-mango-gray-950": u === a && r.hasPanel
                                }),
                                href: r.href,
                                target: "_blank" === r.target ? "_blank" : void 0,
                                onMouseEnter: () => {
                                    var e;
                                    return e = r.hasPanel, void(v(), e ? (c(a), h(!0)) : (c(null), h(!1)))
                                },
                                onKeyDown: t => {
                                    let r;
                                    return r = e[a]?.hasPanel, void("ArrowDown" === t.key && r && (t.preventDefault(), c(a), h(!0), setTimeout(() => {
                                        let e = x(a);
                                        e[0]?.focus()
                                    }, 100)))
                                },
                                "aria-haspopup": r.hasPanel ? "true" : void 0,
                                "aria-expanded": r.hasPanel && u === a && d ? "true" : "false",
                                "data-link-id": `header-nav-item-${a}`,
                                "data-link-location": i.trackingLocation.headerNavigationItem,
                                children: r.title
                            })
                        }, `navigationItem-${r.title}-${a}`))
                    })
                }), (0, t.jsx)(o, {
                    ref: p,
                    isOpen: d,
                    active: u,
                    panels: l,
                    panelRefs: g,
                    onKeyDown: e => {
                        if ("Escape" === e.key) {
                            e.preventDefault(), e.stopPropagation(), h(!1), c(null), null !== u && y.current[u]?.focus();
                            return
                        }
                        if ("Tab" === e.key && d && null !== u) {
                            let t = null === u ? [] : x(u);
                            if (0 === t.length) return;
                            let r = t[0],
                                a = e.target,
                                n = t.indexOf(a);
                            if (-1 === n) return;
                            e.shiftKey ? 0 === n && (e.preventDefault(), h(!1), c(null), y.current[u]?.focus()) : n === t.length - 1 && (e.preventDefault(), r.focus())
                        }
                    },
                    "data-sentry-element": "HeaderMegaMenu",
                    "data-sentry-source-file": "HeaderDesktopNav.tsx"
                })]
            })]
        })
    }], 529387)
}, 781583, e => {
    "use strict";
    var t = e.i(785328),
        r = e.i(409781),
        a = e.i(425314),
        n = e.i(393335),
        s = e.i(308857);
    let i = (0, a.default)(() => e.A(743604), {
        loadableGenerated: {
            modules: [384302]
        },
        ssr: !1
    });
    e.s(["default", 0, ({
        icon: a,
        ariaLabel: o,
        children: l,
        placement: u = "bottom end",
        offset: c = 24,
        className: d,
        onOpen: h
    }) => {
        let [f, m] = (0, r.useState)(!1), [y, p] = (0, r.useState)(!1), [g, v] = (0, r.useState)(!1), x = (0, r.useRef)(null), b = (0, n.usePathname)(), w = () => {
            y || (p(!0), e.A(728899).then(() => v(!0)))
        }, j = e => {
            m(e), h?.(e)
        };
        return (0, r.useEffect)(() => {
            m(!1)
        }, [b]), (0, r.useEffect)(() => {
            if (!f || g) return;
            let e = e => {
                "Escape" === e.key && (m(!1), h?.(!1))
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
        }, [f, g, h]), (0, t.jsxs)(t.Fragment, {
            children: [f && (0, t.jsx)("div", {
                "aria-hidden": "true",
                className: "animate-header-fade-in fixed inset-0 top-0 bg-black/20",
                onClick: () => j(!1)
            }), (0, t.jsx)(s.default, {
                ref: x,
                icon: a,
                isActive: f,
                ariaLabel: o,
                "aria-haspopup": "dialog",
                "aria-expanded": f,
                onMouseEnter: w,
                onFocus: w,
                onTouchStart: w,
                onClick: () => {
                    w(), j(!f)
                },
                "data-sentry-element": "HeaderIconButton",
                "data-sentry-source-file": "HeaderDropdown.tsx"
            }), y && (0, t.jsx)(i, {
                triggerRef: x,
                isOpen: f,
                onOpenChange: j,
                ariaLabel: o,
                placement: u,
                offset: c,
                className: d,
                children: l
            })]
        })
    }])
}, 308857, e => {
    "use strict";
    var t = e.i(785328),
        r = e.i(409781),
        a = e.i(27666),
        n = e.i(722978);
    let s = r.default.forwardRef(({
        icon: e,
        ariaLabel: r,
        isActive: s = !1,
        className: i,
        onClick: o,
        onMouseEnter: l,
        onFocus: u,
        onTouchStart: c,
        "aria-haspopup": d,
        "aria-expanded": h
    }, f) => {
        let m = (0, n.default)("rounded-full transition-colors text-white", "border hover:border-gray-700 focus:border-gray-700", {
            "border border-gray-700": s,
            "border-transparent": !s
        }, i);
        return (0, t.jsx)(a.Button, {
            ref: f,
            "aria-label": r,
            "aria-haspopup": d,
            "aria-expanded": h,
            className: m,
            onPress: o,
            onHoverStart: l,
            onFocus: u,
            children: (0, t.jsx)("div", {
                onTouchStart: c,
                children: e
            })
        })
    });
    s.displayName = "HeaderIconButton", e.s(["default", 0, s])
}, 268056, e => {
    "use strict";
    var t = e.i(785328),
        r = e.i(409781),
        a = e.i(393335),
        n = e.i(722978),
        s = e.i(243306),
        i = e.i(978953),
        o = e.i(752873),
        l = e.i(94918),
        u = e.i(825610),
        c = e.i(78070);
    let d = ({
            title: e,
            href: r,
            target: a,
            hasPanel: s,
            panel: i,
            active: d,
            setActive: f,
            index: m
        }) => (0, t.jsxs)("div", {
            className: "relative py-1.5",
            "data-sentry-component": "HeaderMobileItem",
            "data-sentry-source-file": "HeaderMobile.tsx",
            children: [s ? (0, t.jsxs)("button", {
                onClick: () => f(d ? null : m),
                className: "relative z-10 flex w-full items-center justify-between",
                children: [(0, t.jsx)("p", {
                    className: (0, n.default)("mango-text-heading-2xs ease-out-quart leading-none! text-white transition-[translate,scale] duration-500", d && "translate-x-6 translate-y-1.5 scale-120"),
                    children: e
                }), (0, t.jsx)("span", {
                    className: (0, n.default)("ease-out-quart inline-block transition-[translate,rotate] duration-500", d && "-translate-x-4 translate-y-1.5 rotate-90"),
                    children: (0, t.jsx)(c.default, {
                        decorative: !0,
                        icon: (0, t.jsx)(o.CaretRight, {
                            weight: "fill"
                        }),
                        size: "sm",
                        variant: d ? "secondary" : "ghost"
                    })
                })]
            }) : (0, t.jsx)(l.Link, {
                href: r || "",
                target: "_blank" === a ? "_blank" : void 0,
                className: "relative z-10 flex w-full items-center py-2.5",
                "data-link-location": u.trackingLocation.headerNavigationItem,
                children: (0, t.jsx)("p", {
                    className: "mango-text-heading-2xs leading-none! text-white",
                    children: e
                })
            }), s && null != i && (0, t.jsx)(h, {
                isOpen: d,
                children: i
            }), s && (0, t.jsx)("span", {
                "aria-hidden": !0,
                className: (0, n.default)("ease-out-quart absolute top-[-.25rem] z-1 inline-block h-[calc(100%+.25rem)] w-full rounded-[1rem] bg-[#1B1B1B] shadow-[inset_0px_1px_0px_0px_#424242] transition-[opacity,translate] duration-750", d ? "translate-y-0 opacity-100" : "-translate-y-2.5 opacity-0")
            })]
        }),
        h = ({
            isOpen: e,
            children: r
        }) => (0, t.jsx)("div", {
            inert: !e,
            "aria-hidden": !e,
            className: (0, n.default)("ease-out-quart relative z-10 grid transition-[grid-template-rows,translate] duration-750", e ? "translate-y-0 grid-rows-[1fr]" : "-translate-y-2.5 grid-rows-[0fr]"),
            "data-sentry-component": "HeaderMobilePanelShell",
            "data-sentry-source-file": "HeaderMobile.tsx",
            children: (0, t.jsx)("div", {
                className: "min-h-0 overflow-hidden px-4",
                children: r
            })
        });
    e.s(["default", 0, function({
        items: e,
        panels: o,
        actions: l
    }) {
        let [u, h] = (0, r.useState)(null), [f, m] = (0, r.useState)(!1), y = (0, a.usePathname)(), p = (0, r.useRef)(null), g = (0, r.useRef)(null);
        return (0, r.useEffect)(() => {
            if (f) return document.body.style.overflow = "hidden", () => {
                document.body.style.overflow = ""
            }
        }, [f]), (0, r.useEffect)(() => {
            m(!1)
        }, [y]), (0, r.useEffect)(() => {
            let e = e => {
                let t = e.target;
                p.current && !p.current.contains(t) && g.current && !g.current.contains(t) && m(!1)
            };
            if (f) return document.addEventListener("mousedown", e), () => {
                document.removeEventListener("mousedown", e)
            }
        }, [f]), (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("div", {
                ref: g,
                children: (0, t.jsx)(c.default, {
                    className: "lg:hidden",
                    variant: "secondary",
                    icon: f ? (0, t.jsx)(s.X, {}) : (0, t.jsx)(i.List, {}),
                    size: "sm",
                    onClick: () => m(!f),
                    "data-sentry-element": "Button",
                    "data-sentry-source-file": "HeaderMobile.tsx"
                })
            }), (0, t.jsx)("div", {
                ref: p,
                inert: !f,
                "aria-hidden": !f,
                className: (0, n.default)("absolute top-full left-0 h-[calc(100svh-64px)] w-full overflow-y-auto bg-black lg:hidden", f ? "visible translate-y-0 opacity-100 [transition:opacity_350ms_var(--ease-out-quart),translate_350ms_var(--ease-out-quart),visibility_0s]" : "invisible translate-y-[30px] opacity-0 [transition:opacity_350ms_var(--ease-out-quart),translate_0s_350ms,visibility_0s_350ms]"),
                children: (0, t.jsxs)("div", {
                    className: "mt-10 mb-5 flex flex-col px-4",
                    children: [e.map((e, r) => (0, t.jsx)(d, {
                        ...e,
                        panel: o[r],
                        active: u === r,
                        setActive: h,
                        index: r
                    }, `search-modal-search-result-${e.title}-${r}`)), l]
                })
            })]
        })
    }])
}]);

//# debugId=36059a04-2b87-0d57-bbac-928df9afee14