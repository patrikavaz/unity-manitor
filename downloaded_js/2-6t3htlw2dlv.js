;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "e3a32f0d-3e98-e732-4193-18265b28572e")
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
        let [r, i] = (0, a.useState)({
            ...JSON.parse(sessionStorage.getItem("UNITY_SESSION") || "{}")
        });
        return (0, t.jsx)(n.Provider, {
            value: {
                genesisSession: r,
                setGenesisSession: i
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
}, 752873, e => {
    "use strict";
    var t = e.i(409781),
        a = e.i(848662);
    let n = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M176,128,96,208V48Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"
            }))]
        ]),
        r = t.forwardRef((e, r) => t.createElement(a.default, {
            ref: r,
            ...e,
            weights: n
        }));
    r.displayName = "CaretRightIcon", e.s(["CaretRight", 0, r, "CaretRightIcon", 0, r], 752873)
}, 978953, e => {
    "use strict";
    var t = e.i(409781),
        a = e.i(848662);
    let n = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M216,64V192H40V64Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM40,68H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z"
            }))]
        ]),
        r = t.forwardRef((e, r) => t.createElement(a.default, {
            ref: r,
            ...e,
            weights: n
        }));
    r.displayName = "ListIcon", e.s(["List", 0, r, "ListIcon", 0, r], 978953)
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
        r = t.forwardRef((e, r) => t.createElement(a.default, {
            ref: r,
            ...e,
            weights: n
        }));
    r.displayName = "MagnifyingGlassIcon", e.s(["MagnifyingGlass", 0, r, "MagnifyingGlassIcon", 0, r], 935862)
}, 686376, e => {
    "use strict";
    var t = e.i(409781),
        a = e.i(848662);
    let n = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M124,216a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V40A12,12,0,0,1,48,28h64a12,12,0,0,1,0,24H60V204h52A12,12,0,0,1,124,216Zm108.49-96.49-40-40a12,12,0,0,0-17,17L195,116H112a12,12,0,0,0,0,24h83l-19.52,19.51a12,12,0,0,0,17,17l40-40A12,12,0,0,0,232.49,119.51Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M224,56V200a16,16,0,0,1-16,16H48V40H208A16,16,0,0,1,224,56Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40A8,8,0,0,0,176,88v32H112a8,8,0,0,0,0,16h64v32a8,8,0,0,0,13.66,5.66l40-40A8,8,0,0,0,229.66,122.34Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M118,216a6,6,0,0,1-6,6H48a6,6,0,0,1-6-6V40a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H54V210h58A6,6,0,0,1,118,216Zm110.24-92.24-40-40a6,6,0,0,0-8.48,8.48L209.51,122H112a6,6,0,0,0,0,12h97.51l-29.75,29.76a6,6,0,1,0,8.48,8.48l40-40A6,6,0,0,0,228.24,123.76Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M116,216a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H52V212h60A4,4,0,0,1,116,216Zm110.83-90.83-40-40a4,4,0,0,0-5.66,5.66L214.34,124H112a4,4,0,0,0,0,8H214.34l-33.17,33.17a4,4,0,0,0,5.66,5.66l40-40A4,4,0,0,0,226.83,125.17Z"
            }))]
        ]),
        r = t.forwardRef((e, r) => t.createElement(a.default, {
            ref: r,
            ...e,
            weights: n
        }));
    r.displayName = "SignOutIcon", e.s(["SignOut", 0, r, "SignOutIcon", 0, r], 686376)
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
        r = t.forwardRef((e, r) => t.createElement(a.default, {
            ref: r,
            ...e,
            weights: n
        }));
    r.displayName = "UserIcon", e.s(["User", 0, r, "UserIcon", 0, r], 531834)
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
    }, "hydrate", 0, function(e, r, i) {
        if ("object" != typeof r || null === r) return;
        let o = e.getMutationCache(),
            s = e.getQueryCache(),
            l = i?.defaultOptions?.deserializeData ?? e.getDefaultOptions().hydrate?.deserializeData ?? n,
            d = r.mutations || [],
            u = r.queries || [];
        d.forEach(({
            state: t,
            ...a
        }) => {
            o.build(e, {
                ...e.getDefaultOptions().hydrate?.mutations,
                ...i?.defaultOptions?.mutations,
                ...a
            }, t)
        }), u.forEach(({
            queryKey: n,
            state: r,
            queryHash: o,
            meta: d,
            promise: u,
            dehydratedAt: c,
            queryType: g
        }) => {
            let m = u ? (0, t.tryResolveSync)(u) : void 0,
                h = void 0 === r.data ? m?.data : r.data,
                p = void 0 === h ? h : l(h),
                f = s.get(o),
                y = f?.state.status === "pending",
                b = f?.state.fetchStatus === "fetching";
            if (f) {
                let e = m && void 0 !== c && c > f.state.dataUpdatedAt;
                if (r.dataUpdatedAt > f.state.dataUpdatedAt || e) {
                    let {
                        fetchStatus: e,
                        ...t
                    } = r;
                    f.setState({
                        ...t,
                        data: p,
                        ..."pending" === r.status && void 0 !== p && {
                            status: "success",
                            ...!b && {
                                fetchStatus: "idle"
                            }
                        }
                    })
                }
            } else f = s.build(e, {
                ...e.getDefaultOptions().hydrate?.queries,
                ...i?.defaultOptions?.queries,
                queryKey: n,
                queryHash: o,
                meta: d,
                _type: g
            }, {
                ...r,
                data: p,
                fetchStatus: "idle",
                status: "pending" === r.status && void 0 !== p ? "success" : r.status
            });
            !u || m || y || b || void 0 !== c && !(c > f.state.dataUpdatedAt) || f.fetch(void 0, {
                initialPromise: Promise.resolve(u).then(l)
            }).catch(a.noop)
        })
    }])
}, 664300, e => {
    "use strict";
    let t, a, n, r, i, o;
    var s = e.i(137530).systemSetTimeoutZero,
        l = (t = [], a = 0, n = e => {
            e()
        }, r = e => {
            e()
        }, i = s, {
            batch: e => {
                let o;
                a++;
                try {
                    o = e()
                } finally {
                    let e;
                    --a || (e = t, t = [], e.length && i(() => {
                        r(() => {
                            e.forEach(e => {
                                n(e)
                            })
                        })
                    }))
                }
                return o
            },
            batchCalls: e => (...t) => {
                o(() => {
                    e(...t)
                })
            },
            schedule: o = e => {
                a ? t.push(e) : i(() => {
                    n(e)
                })
            },
            setNotifyFunction: e => {
                n = e
            },
            setBatchNotifyFunction: e => {
                r = e
            },
            setScheduler: e => {
                i = e
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
        r = e.i(655100),
        i = e.i(786459),
        o = e.i(689326);

    function s(e) {
        return Math.min(1e3 * 2 ** e, 3e4)
    }

    function l(e) {
        return (e ?? "online") !== "online" || r.onlineManager.isOnline()
    }
    var d = class extends Error {
        constructor(e) {
            super("CancelledError"), this.revert = e?.revert, this.silent = e?.silent
        }
    };

    function u(e) {
        let a, u = !1,
            c = 0,
            g = (0, i.pendingThenable)(),
            m = () => n.focusManager.isFocused() && ("always" === e.networkMode || r.onlineManager.isOnline()) && e.canRun(),
            h = () => l(e.networkMode) && e.canRun(),
            p = e => {
                "pending" === g.status && (a?.(), g.resolve(e))
            },
            f = e => {
                "pending" === g.status && (a?.(), g.reject(e))
            },
            y = () => new Promise(t => {
                a = e => {
                    ("pending" !== g.status || m()) && t(e)
                }, e.onPause?.()
            }).then(() => {
                a = void 0, "pending" === g.status && e.onContinue?.()
            }),
            b = () => {
                let a;
                if ("pending" !== g.status) return;
                let n = 0 === c ? e.initialPromise : void 0;
                try {
                    a = n ?? e.fn()
                } catch (e) {
                    a = Promise.reject(e)
                }
                Promise.resolve(a).then(p).catch(a => {
                    if ("pending" !== g.status) return;
                    let n = e.retry ?? 3 * !o.environmentManager.isServer(),
                        r = e.retryDelay ?? s,
                        i = "function" == typeof r ? r(c, a) : r,
                        l = !0 === n || "number" == typeof n && c < n || "function" == typeof n && n(c, a);
                    u || !l ? f(a) : (c++, e.onFail?.(c, a), (0, t.sleep)(i).then(() => m() ? void 0 : y()).then(() => {
                        u ? f(a) : b()
                    }))
                })
            };
        return {
            promise: g,
            status: () => g.status,
            cancel: t => {
                if ("pending" === g.status) {
                    let a = new d(t);
                    f(a), e.onCancel?.(a)
                }
            },
            continue: () => (a?.(), g),
            cancelRetry: () => {
                u = !0
            },
            continueRetry: () => {
                u = !1
            },
            canStart: h,
            start: () => (h() ? b() : y().then(b), g)
        }
    }
    e.s(["CancelledError", 0, d, "canFetch", 0, l, "createRetryer", 0, u], 297652);
    var c = e.i(137530),
        g = class {
            #r;
            destroy() {
                this.clearGcTimeout()
            }
            scheduleGc() {
                this.clearGcTimeout(), (0, t.isValidTimeout)(this.gcTime) && (this.#r = c.timeoutManager.setTimeout(() => {
                    this.optionalRemove()
                }, this.gcTime))
            }
            updateGcTime(e) {
                this.gcTime = Math.max(this.gcTime || 0, e ?? (o.environmentManager.isServer() ? 1 / 0 : 3e5))
            }
            clearGcTimeout() {
                void 0 !== this.#r && (c.timeoutManager.clearTimeout(this.#r), this.#r = void 0)
            }
        };

    function m(e, {
        pages: t,
        pageParams: a
    }) {
        let n = t.length - 1;
        return t.length > 0 ? e.getNextPageParam(t[n], t, a[n], a) : void 0
    }
    e.s(["Removable", 0, g], 343201);
    var h = class extends g {
        #i;
        #o;
        #s;
        #l;
        #d;
        #u;
        #c;
        #g;
        constructor(e) {
            super(), this.#g = !1, this.#c = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#d = e.client, this.#l = this.#d.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#o = y(this.options), this.state = e.state ?? this.#o, this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get queryType() {
            return this.#i
        }
        get promise() {
            return this.#u?.promise
        }
        setOptions(e) {
            if (this.options = {
                    ...this.#c,
                    ...e
                }, e?._type && (this.#i = e._type), this.updateGcTime(this.options.gcTime), this.state && void 0 === this.state.data) {
                let e = y(this.options);
                void 0 !== e.data && (this.setState(f(e.data, e.dataUpdatedAt)), this.#o = e)
            }
        }
        optionalRemove() {
            this.observers.length || "idle" !== this.state.fetchStatus || this.#l.remove(this)
        }
        setData(e, a) {
            let n = (0, t.replaceData)(this.state.data, e, this.options);
            return this.#m({
                data: n,
                type: "success",
                dataUpdatedAt: a?.updatedAt,
                manual: a?.manual
            }), n
        }
        setState(e) {
            this.#m({
                type: "setState",
                state: e
            })
        }
        cancel(e) {
            let a = this.#u?.promise;
            return this.#u?.cancel(e), a ? a.then(t.noop).catch(t.noop) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        get resetState() {
            return this.#o
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
            }), this.#u?.continue()
        }
        onOnline() {
            let e = this.observers.find(e => e.shouldFetchOnReconnect());
            e?.refetch({
                cancelRefetch: !1
            }), this.#u?.continue()
        }
        addObserver(e) {
            this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.#l.notify({
                type: "observerAdded",
                query: this,
                observer: e
            }))
        }
        removeObserver(e) {
            this.observers.includes(e) && (this.observers = this.observers.filter(t => t !== e), this.observers.length || (this.#u && (this.#g || this.#h() ? this.#u.cancel({
                revert: !0
            }) : this.#u.cancelRetry()), this.scheduleGc()), this.#l.notify({
                type: "observerRemoved",
                query: this,
                observer: e
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        #h() {
            return "paused" === this.state.fetchStatus && "pending" === this.state.status
        }
        invalidate() {
            this.state.isInvalidated || this.#m({
                type: "invalidate"
            })
        }
        async fetch(e, a) {
            var n;
            let r;
            if ("idle" !== this.state.fetchStatus && this.#u?.status() !== "rejected") {
                if (void 0 !== this.state.data && a?.cancelRefetch) this.cancel({
                    silent: !0
                });
                else if (this.#u) return this.#u.continueRetry(), this.#u.promise
            }
            if (e && this.setOptions(e), !this.options.queryFn) {
                let e = this.observers.find(e => e.options.queryFn);
                e && this.setOptions(e.options)
            }
            let i = new AbortController,
                o = e => {
                    Object.defineProperty(e, "signal", {
                        enumerable: !0,
                        get: () => (this.#g = !0, i.signal)
                    })
                },
                s = () => {
                    let e, n = (0, t.ensureQueryFn)(this.options, a),
                        r = (o(e = {
                            client: this.#d,
                            queryKey: this.queryKey,
                            meta: this.meta
                        }), e);
                    return (this.#g = !1, this.options.persister) ? this.options.persister(n, r, this) : n(r)
                },
                l = (o(r = {
                    fetchOptions: a,
                    options: this.options,
                    queryKey: this.queryKey,
                    client: this.#d,
                    state: this.state,
                    fetchFn: s
                }), r),
                c = "infinite" === this.#i ? (n = this.options.pages, {
                    onFetch: (e, a) => {
                        let r = e.options,
                            i = e.fetchOptions?.meta?.fetchMore?.direction,
                            o = e.state.data?.pages || [],
                            s = e.state.data?.pageParams || [],
                            l = {
                                pages: [],
                                pageParams: []
                            },
                            d = 0,
                            u = async () => {
                                let a = !1,
                                    u = (0, t.ensureQueryFn)(e.options, e.fetchOptions),
                                    c = async (n, r, i) => {
                                        let o;
                                        if (a) return Promise.reject(e.signal.reason);
                                        if (null == r && n.pages.length) return Promise.resolve(n);
                                        let s = (o = {
                                                client: e.client,
                                                queryKey: e.queryKey,
                                                pageParam: r,
                                                direction: i ? "backward" : "forward",
                                                meta: e.options.meta
                                            }, (0, t.addConsumeAwareSignal)(o, () => e.signal, () => a = !0), o),
                                            l = await u(s),
                                            {
                                                maxPages: d
                                            } = e.options,
                                            c = i ? t.addToStart : t.addToEnd;
                                        return {
                                            pages: c(n.pages, l, d),
                                            pageParams: c(n.pageParams, r, d)
                                        }
                                    };
                                if (i && o.length) {
                                    let e = "backward" === i,
                                        t = {
                                            pages: o,
                                            pageParams: s
                                        },
                                        a = (e ? function(e, {
                                            pages: t,
                                            pageParams: a
                                        }) {
                                            return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, a[0], a) : void 0
                                        } : m)(r, t);
                                    l = await c(t, a, e)
                                } else {
                                    let e = n ?? o.length;
                                    do {
                                        let e = 0 === d ? s[0] ?? r.initialPageParam : m(r, l);
                                        if (d > 0 && null == e) break;
                                        l = await c(l, e), d++
                                    } while (d < e)
                                }
                                return l
                            };
                        e.options.persister ? e.fetchFn = () => e.options.persister?.(u, {
                            client: e.client,
                            queryKey: e.queryKey,
                            meta: e.options.meta,
                            signal: e.signal
                        }, a) : e.fetchFn = u
                    }
                }) : this.options.behavior;
            c?.onFetch(l, this), this.#s = this.state, ("idle" === this.state.fetchStatus || this.state.fetchMeta !== l.fetchOptions?.meta) && this.#m({
                type: "fetch",
                meta: l.fetchOptions?.meta
            }), this.#u = u({
                initialPromise: a?.initialPromise,
                fn: l.fetchFn,
                onCancel: e => {
                    e instanceof d && e.revert && this.setState({
                        ...this.#s,
                        fetchStatus: "idle"
                    }), i.abort()
                },
                onFail: (e, t) => {
                    this.#m({
                        type: "failed",
                        failureCount: e,
                        error: t
                    })
                },
                onPause: () => {
                    this.#m({
                        type: "pause"
                    })
                },
                onContinue: () => {
                    this.#m({
                        type: "continue"
                    })
                },
                retry: l.options.retry,
                retryDelay: l.options.retryDelay,
                networkMode: l.options.networkMode,
                canRun: () => !0
            });
            try {
                let e = await this.#u.start();
                if (void 0 === e) throw Error(`${this.queryHash} data is undefined`);
                return this.setData(e), this.#l.config.onSuccess?.(e, this), this.#l.config.onSettled?.(e, this.state.error, this), e
            } catch (e) {
                if (e instanceof d) {
                    if (e.silent) return this.#u.promise;
                    else if (e.revert) {
                        if (void 0 === this.state.data) throw e;
                        return this.state.data
                    }
                }
                throw this.#m({
                    type: "error",
                    error: e
                }), this.#l.config.onError?.(e, this), this.#l.config.onSettled?.(this.state.data, e, this), e
            } finally {
                this.scheduleGc()
            }
        }
        #m(e) {
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
                            ...t, ...p(t.data, this.options), fetchMeta: e.meta ?? null
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

    function p(e, t) {
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

    function y(e) {
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
    e.s(["Query", 0, h, "fetchState", 0, p], 213278)
}, 785690, 137530, 786459, e => {
    "use strict";
    var t = {
            setTimeout: (e, t) => setTimeout(e, t),
            clearTimeout: e => clearTimeout(e),
            setInterval: (e, t) => setInterval(e, t),
            clearInterval: e => clearInterval(e)
        },
        a = new class {
            #p = t;
            #f = !1;
            setTimeoutProvider(e) {
                this.#p = e
            }
            setTimeout(e, t) {
                return this.#p.setTimeout(e, t)
            }
            clearTimeout(e) {
                this.#p.clearTimeout(e)
            }
            setInterval(e, t) {
                return this.#p.setInterval(e, t)
            }
            clearInterval(e) {
                this.#p.clearInterval(e)
            }
        };
    e.s(["systemSetTimeoutZero", 0, function(e) {
        setTimeout(e, 0)
    }, "timeoutManager", 0, a], 137530);
    var n = "u" < typeof window || "Deno" in globalThis;

    function r() {}

    function i(e, t) {
        return (t?.queryKeyHashFn || o)(e)
    }

    function o(e) {
        return JSON.stringify(e, (e, t) => u(t) ? Object.keys(t).sort().reduce((e, a) => (e[a] = t[a], e), {}) : t)
    }

    function s(e, t) {
        return e === t || typeof e == typeof t && !!e && !!t && "object" == typeof e && "object" == typeof t && Object.keys(t).every(a => s(e[a], t[a]))
    }
    var l = Object.prototype.hasOwnProperty;

    function d(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length
    }

    function u(e) {
        if (!c(e)) return !1;
        let t = e.constructor;
        if (void 0 === t) return !0;
        let a = t.prototype;
        return !!c(a) && !!a.hasOwnProperty("isPrototypeOf") && Object.getPrototypeOf(e) === Object.prototype
    }

    function c(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }
    var g = Symbol();
    e.s(["addConsumeAwareSignal", 0, function(e, t, a) {
        let n, r = !1;
        return Object.defineProperty(e, "signal", {
            enumerable: !0,
            get: () => (n ??= t(), r || (r = !0, n.aborted ? a() : n.addEventListener("abort", a, {
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
        return !e.queryFn && t?.initialPromise ? () => t.initialPromise : e.queryFn && e.queryFn !== g ? e.queryFn : () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
    }, "functionalUpdate", 0, function(e, t) {
        return "function" == typeof e ? e(t) : e
    }, "hashKey", 0, o, "hashQueryKeyByOptions", 0, i, "isServer", 0, n, "isValidTimeout", 0, function(e) {
        return "number" == typeof e && e >= 0 && e !== 1 / 0
    }, "keepPreviousData", 0, function(e) {
        return e
    }, "matchMutation", 0, function(e, t) {
        let {
            exact: a,
            status: n,
            predicate: r,
            mutationKey: i
        } = e;
        if (i) {
            if (!t.options.mutationKey) return !1;
            if (a) {
                if (o(t.options.mutationKey) !== o(i)) return !1
            } else if (!s(t.options.mutationKey, i)) return !1
        }
        return (!n || t.state.status === n) && (!r || !!r(t))
    }, "matchQuery", 0, function(e, t) {
        let {
            type: a = "all",
            exact: n,
            fetchStatus: r,
            predicate: o,
            queryKey: l,
            stale: d
        } = e;
        if (l) {
            if (n) {
                if (t.queryHash !== i(l, t.options)) return !1
            } else if (!s(t.queryKey, l)) return !1
        }
        if ("all" !== a) {
            let e = t.isActive();
            if ("active" === a && !e || "inactive" === a && e) return !1
        }
        return ("boolean" != typeof d || t.isStale() === d) && (!r || r === t.state.fetchStatus) && (!o || !!o(t))
    }, "noop", 0, r, "partialMatchKey", 0, s, "replaceData", 0, function(e, t, a) {
        return "function" == typeof a.structuralSharing ? a.structuralSharing(e, t) : !1 !== a.structuralSharing ? function e(t, a, n = 0) {
            if (t === a) return t;
            if (n > 500) return a;
            let r = d(t) && d(a);
            if (!r && !(u(t) && u(a))) return a;
            let i = (r ? t : Object.keys(t)).length,
                o = r ? a : Object.keys(a),
                s = o.length,
                c = r ? Array(s) : {},
                g = 0;
            for (let d = 0; d < s; d++) {
                let s = r ? d : o[d],
                    u = t[s],
                    m = a[s];
                if (u === m) {
                    c[s] = u, (r ? d < i : l.call(t, s)) && g++;
                    continue
                }
                if (null === u || null === m || "object" != typeof u || "object" != typeof m) {
                    c[s] = m;
                    continue
                }
                let h = e(u, m, n + 1);
                c[s] = h, h === u && g++
            }
            return i === s && g === i ? t : c
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
    }, "skipToken", 0, g, "sleep", 0, function(e) {
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
        if (e.then(e => (t = e, e), r)?.catch(r), void 0 !== t) return {
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
        children: r
    }) => (t.useEffect(() => (e.mount(), () => {
        e.unmount()
    }), [e]), (0, a.jsx)(n.Provider, {
        value: e,
        children: r
    })), "useQueryClient", 0, e => {
        let a = t.useContext(n);
        if (e) return e;
        if (!a) throw Error("No QueryClient set, use QueryClientProvider to set one");
        return a
    }])
}, 544842, 557749, e => {
    "use strict";
    var t = e.i(837826);
    let a = (0, t.tv)({
            base: ["mango:box-border mango:rounded-md mango:border", "mango:border-gray-200 mango:bg-white mango:shadow-lg", "mango:dark:border-gray-700 mango:dark:bg-gray-800"]
        }),
        n = (0, t.tv)({
            slots: {
                popover: [a(), "mango:transition-opacity mango:ease-standard mango:motion-reduce:transition-none", "mango:data-[entering]:opacity-0 mango:data-[entering]:duration-200", "mango:data-[exiting]:opacity-0 mango:data-[exiting]:duration-150", "mango:min-w-(--trigger-width) mango:overflow-auto mango:p-2"],
                listBox: "mango:box-border mango:max-h-[inherit] mango:outline-hidden",
                item: ["mango:group/item mango:flex mango:cursor-pointer mango:items-center mango:gap-2", "mango:box-border mango:rounded-full mango:px-4 mango:py-2", "mango:text-body-sm mango:text-black mango:dark:text-white", "mango:outline-hidden", "mango:data-[focused]:bg-gray-100 mango:dark:data-[focused]:bg-gray-700", "mango:data-[disabled]:cursor-not-allowed mango:data-[disabled]:text-gray-400", "mango:dark:data-[disabled]:text-gray-600"],
                itemLabel: "mango:flex-1 mango:truncate mango:group-data-[selected]/item:font-semibold",
                itemCheck: "mango:flex mango:shrink-0",
                caret: ["mango:shrink-0 mango:origin-center", "mango:transition-transform mango:duration-300 mango:ease-standard mango:motion-reduce:transition-none", "mango:group-data-[open]/field:rotate-180", "mango:group-data-[disabled]/field:text-gray-400 mango:dark:group-data-[disabled]/field:text-gray-600"],
                caretButton: ["mango:m-0 mango:flex mango:shrink-0 mango:cursor-pointer mango:appearance-none", "mango:border-0 mango:bg-transparent mango:p-0 mango:outline-hidden", "mango:font-sans mango:text-black mango:dark:text-white", "mango:group-data-[disabled]/field:cursor-not-allowed"]
            }
        });
    e.s(["dropdownStyles", 0, n], 544842);
    let r = (0, t.tv)({
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
    e.s(["selectStyles", 0, r], 557749)
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
}]);

//# debugId=e3a32f0d-3e98-e732-4193-18265b28572e