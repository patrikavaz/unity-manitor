;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "892a89fa-4672-d966-bd3c-baf6f9bd607b")
    } catch (e) {}
}();
(() => {
    "use strict";
    (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 417480, e => {
        var t = e.i(230452);
        let a = (0, e.i(312591).default)(() => e.A(752893), {
            loadableGenerated: {
                modules: [700721]
            }
        });
        var r = {
                0: 8203,
                1: 8204,
                2: 8205,
                3: 8290,
                4: 8291,
                5: 8288,
                6: 65279,
                7: 8289,
                8: 119155,
                9: 119156,
                a: 119157,
                b: 119158,
                c: 119159,
                d: 119160,
                e: 119161,
                f: 119162
            },
            l = {
                0: 8203,
                1: 8204,
                2: 8205,
                3: 65279
            },
            n = {
                0: String.fromCodePoint(l[0]),
                1: String.fromCodePoint(l[1]),
                2: String.fromCodePoint(l[2]),
                3: String.fromCodePoint(l[3])
            };
        [, , , , ].fill(String.fromCodePoint(l[0])).join(""), Object.fromEntries(Object.entries(n).map(e => [e[1], +e[0]])), Object.fromEntries(Object.entries(r).map(e => e.reverse()));
        var o = `${Object.values(r).map(e=>`\\u{${e.toString(16)}}`).join("")}`,
            i = RegExp(`[${o}]{4,}`, "gu"),
            s = e.i(195377);
        e.s(["default", 0, ({
            labels: e,
            tools: r,
            optionKey: l,
            optionTitle: n
        }) => (0, t.jsx)(a, {
            labels: e,
            tools: r,
            onSubmit: e => {
                var t, a;
                return (0, s.m)({
                    ...e,
                    optionKey: l,
                    optionTitle: n && JSON.parse({
                        cleaned: (t = JSON.stringify(n)).replace(i, ""),
                        encoded: (null == (a = t.match(i)) ? void 0 : a[0]) || ""
                    }.cleaned)
                })
            }
        })], 417480)
    }, 339860, e => {
        var t = e.i(312591);
        let a = (0, t.default)(() => e.A(966746), {
                loadableGenerated: {
                    modules: [970287]
                }
            }),
            r = (0, t.default)(() => e.A(214974), {
                loadableGenerated: {
                    modules: [721223]
                }
            }),
            l = (0, t.default)(() => e.A(291172), {
                loadableGenerated: {
                    modules: [576717]
                }
            }),
            n = (0, t.default)(() => e.A(307596), {
                loadableGenerated: {
                    modules: [678729]
                }
            }),
            o = (0, t.default)(() => e.A(593549), {
                loadableGenerated: {
                    modules: [867829]
                }
            }),
            i = (0, t.default)(() => e.A(664894), {
                loadableGenerated: {
                    modules: [615890]
                }
            }),
            s = (0, t.default)(() => e.A(707796), {
                loadableGenerated: {
                    modules: [262635]
                }
            }),
            d = (0, t.default)(() => e.A(914883), {
                loadableGenerated: {
                    modules: [594611]
                }
            }),
            u = (0, t.default)(() => e.A(517906), {
                loadableGenerated: {
                    modules: [917028]
                }
            }),
            c = (0, t.default)(() => e.A(736617), {
                loadableGenerated: {
                    modules: [392684]
                }
            }),
            f = (0, t.default)(() => e.A(712703), {
                loadableGenerated: {
                    modules: [539785]
                }
            }),
            m = (0, t.default)(() => e.A(271798), {
                loadableGenerated: {
                    modules: [319869]
                }
            }),
            p = (0, t.default)(() => e.A(879537), {
                loadableGenerated: {
                    modules: [948504]
                }
            }),
            b = (0, t.default)(() => e.A(329548), {
                loadableGenerated: {
                    modules: [291181]
                }
            }),
            g = (0, t.default)(() => e.A(200737), {
                loadableGenerated: {
                    modules: [615863]
                }
            }),
            h = (0, t.default)(() => e.A(405160), {
                loadableGenerated: {
                    modules: [623207]
                }
            }),
            y = (0, t.default)(() => e.A(732288), {
                loadableGenerated: {
                    modules: [10191]
                }
            }),
            V = (0, t.default)(() => e.A(967457), {
                loadableGenerated: {
                    modules: [996591]
                }
            }),
            A = (0, t.default)(() => e.A(601861), {
                loadableGenerated: {
                    modules: [527831]
                }
            }),
            H = (0, t.default)(() => e.A(822623), {
                loadableGenerated: {
                    modules: [89635]
                }
            }),
            v = (0, t.default)(() => e.A(409101), {
                loadableGenerated: {
                    modules: [16479]
                }
            }),
            M = (0, t.default)(() => e.A(775896), {
                loadableGenerated: {
                    modules: [369446]
                }
            }),
            x = (0, t.default)(() => e.A(818042), {
                loadableGenerated: {
                    modules: [531058]
                }
            }),
            E = (0, t.default)(() => e.A(520526), {
                loadableGenerated: {
                    modules: [408657]
                }
            }),
            w = (0, t.default)(() => e.A(254009), {
                loadableGenerated: {
                    modules: [877873]
                }
            }),
            k = (0, t.default)(() => e.A(976780), {
                loadableGenerated: {
                    modules: [355279]
                }
            }),
            Z = (0, t.default)(() => e.A(248625), {
                loadableGenerated: {
                    modules: [63496]
                }
            }),
            L = (0, t.default)(() => e.A(10200), {
                loadableGenerated: {
                    modules: [122289]
                }
            }),
            C = (0, t.default)(() => e.A(217368), {
                loadableGenerated: {
                    modules: [354884]
                }
            }),
            P = (0, t.default)(() => e.A(879742), {
                loadableGenerated: {
                    modules: [494131]
                }
            }),
            j = (0, t.default)(() => e.A(376659), {
                loadableGenerated: {
                    modules: [735556]
                }
            });
        e.s(["LazyAccordion", 0, v, "LazyAnimatedOutlines", 0, M, "LazyBentoBox", 0, x, "LazyChartPicker", 0, E, "LazyContentHeader", 0, w, "LazyDynamicAccordion", 0, k, "LazyEvents", 0, Z, "LazyHeadlinerBlock", 0, a, "LazyMangoAlertBlock", 0, r, "LazyMangoAlternateNavigationBlock", 0, l, "LazyMangoCallToActionBlock", 0, n, "LazyMangoCardsClient", 0, o, "LazyMangoCarouselBlockClient", 0, p, "LazyMangoCommercePortableText", 0, H, "LazyMangoComparisonTableBlock", 0, i, "LazyMangoContactBlock", 0, s, "LazyMangoDeluxeAnnouncementBannerBlock", 0, d, "LazyMangoFeatureListBlockClient", 0, b, "LazyMangoFeedbackBlock", 0, u, "LazyMangoFilteredContentGridClient", 0, c, "LazyMangoFullWidthBlockClient", 0, g, "LazyMangoHeroBlockClient", 0, h, "LazyMangoMarkdownTableBlock", 0, f, "LazyMangoMediaBlockClient", 0, y, "LazyMangoPricingCardsBlockClient", 0, V, "LazyMangoReportMenuBlock", 0, m, "LazyMangoSpotlightBlockClient", 0, A, "LazySpeakerCardGrid", 0, L, "LazyStatement", 0, C, "LazyTableOfContent", 0, P, "LazyTestimonials", 0, j])
    }, 555959, e => {
        let t = (0, e.i(312591).default)(() => e.A(246259), {
            loadableGenerated: {
                modules: [88021]
            }
        });
        e.s(["default", 0, t])
    }, 527232, e => {
        var t = e.i(230452),
            a = e.i(491902),
            r = e.i(266828);
        e.s(["default", 0, ({
            tracking: e,
            ...l
        }) => (0, t.jsx)(a.default, {
            ...l,
            "data-link-location": e.location,
            "data-link-id": e.id,
            "data-link-url": (0, r.f)()
        })])
    }, 575146, e => {
        var t = e.i(230452),
            a = e.i(516830);
        let r = (0, a.createContext)({
            isGated: !1,
            setIsGated: () => {},
            formSubmitted: !1,
            setFormSubmitted: () => {}
        });
        e.s(["GateContextProvider", 0, ({
            children: e
        }) => {
            let [l, n] = (0, a.useState)(!1), [o, i] = (0, a.useState)(!1);
            return (0, t.jsx)(r.Provider, {
                value: {
                    isGated: o,
                    setIsGated: i,
                    formSubmitted: l,
                    setFormSubmitted: n
                },
                children: e
            })
        }, "useGateContext", 0, () => (0, a.useContext)(r)])
    }, 641077, e => {
        var t = e.i(230452),
            a = e.i(516830);
        let r = (0, a.createContext)({
            products: []
        });
        e.s(["PageCommerceProvider", 0, function({
            products: e,
            children: l
        }) {
            let n = (0, a.useMemo)(() => ({
                products: e
            }), [e]);
            return (0, t.jsx)(r.Provider, {
                value: n,
                children: l
            })
        }, "usePageCommerce", 0, function() {
            return (0, a.useContext)(r)
        }])
    }, 195377, e => {
        var t = e.i(849141);
        let a = "voterID";
        async function r() {
            try {
                let e = await (0, t.f)();
                return e.users[0]?.userId ?? null
            } catch {
                return null
            }
        }
        async function l(e, t, a) {
            let l, n = 0 === (l = [...(function() {
                    let e = new Map;
                    if ("u" < typeof document) return e;
                    for (let t of document.cookie.split("; ").filter(Boolean)) {
                        let [a, r] = t.split("=", 2);
                        if (void 0 === r) continue;
                        let l = a.trim(),
                            n = decodeURIComponent(r);
                        e.set(l, n)
                    }
                    return e
                })().keys()].filter(e => e.startsWith("AMP_") && !e.startsWith("AMP_MKTG_"))).length ? null : l[0].slice(4) || null,
                o = await r(),
                i = {
                    voterID: a,
                    timestamp: new Date().toISOString(),
                    voteValue: t,
                    ...void 0 !== e ? {
                        formId: e
                    } : {},
                    pageUrl: window.location.href,
                    ...n ? {
                        amplitudeId: n
                    } : {},
                    ...o ? {
                        unityUserId: o
                    } : {}
                },
                s = await fetch("https://proxy-prd.hexagon.unity.com/api/feedback-vote", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(i)
                });
            if (!s.ok) {
                let e = "";
                try {
                    let t = await s.json();
                    e = t.details ?? t.error ?? ""
                } catch {}
                throw Error(e ? `Feedback vote failed (${s.status}): ${e}` : `Feedback vote failed: ${s.status}`)
            }
        }
        async function n(e) {
            let t = new AbortController,
                a = setTimeout(() => t.abort(), 1e4),
                r = await fetch(new URL("/api/prompt-feedback", "https://proxy-prd.hexagon.unity.com/api/feedback-vote"), {
                    method: "POST",
                    signal: t.signal,
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        comment: e.comment,
                        outcome: e.outcome,
                        agent: e.agent,
                        optionKey: e.optionKey,
                        optionTitle: e.optionTitle,
                        pagePath: window.location.pathname,
                        timestamp: new Date().toISOString()
                    })
                }).finally(() => clearTimeout(a));
            if (!r.ok) throw Error(`Prompt feedback failed: ${r.status}`)
        }
        e.s(["t", 0, function() {
            try {
                let e = localStorage.getItem(a);
                if (e) return e;
                let t = crypto.randomUUID();
                return localStorage.setItem(a, t), t
            } catch {
                return ""
            }
        }, "G", 0, function(e, t) {
            try {
                let a = `voteValue_${e}`,
                    r = localStorage.getItem(a);
                if (r) return r;
                return localStorage.setItem(a, t), t
            } catch {
                return t
            }
        }, "c", 0, function(e) {
            try {
                return localStorage.getItem(`voteValue_${e}`)
            } catch {
                return null
            }
        }, "i", 0, l, "m", 0, n])
    }, 554206, e => {
        var t = e.i(516830),
            a = e.i(844929);
        let r = new Map([
                ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                    d: "M200,28H160a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20h40a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28Zm-4,176H164V52h32ZM96,28H56A20,20,0,0,0,36,48V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V48A20,20,0,0,0,96,28ZM92,204H60V52H92Z"
                }))],
                ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                    d: "M208,48V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h40A8,8,0,0,1,208,48ZM96,40H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V48A8,8,0,0,0,96,40Z",
                    opacity: "0.2"
                }), t.createElement("path", {
                    d: "M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"
                }))],
                ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                    d: "M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"
                }))],
                ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                    d: "M200,34H160a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14h40a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm2,174a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2ZM96,34H56A14,14,0,0,0,42,48V208a14,14,0,0,0,14,14H96a14,14,0,0,0,14-14V48A14,14,0,0,0,96,34Zm2,174a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H96a2,2,0,0,1,2,2Z"
                }))],
                ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                    d: "M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"
                }))],
                ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                    d: "M200,36H160a12,12,0,0,0-12,12V208a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm4,172a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4ZM96,36H56A12,12,0,0,0,44,48V208a12,12,0,0,0,12,12H96a12,12,0,0,0,12-12V48A12,12,0,0,0,96,36Zm4,172a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H96a4,4,0,0,1,4,4Z"
                }))]
            ]),
            l = t.forwardRef((e, l) => t.createElement(a.f, {
                ref: l,
                ...e,
                weights: r
            }));
        l.displayName = "PauseIcon", e.s(["Pause", 0, l, "PauseIcon", 0, l], 554206)
    }, 980986, e => {
        var t = e.i(516830),
            a = e.i(844929);
        let r = new Map([
                ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                    d: "M234.49,111.07,90.41,22.94A20,20,0,0,0,60,39.87V216.13a20,20,0,0,0,30.41,16.93l144.08-88.13a19.82,19.82,0,0,0,0-33.86ZM84,208.85V47.15L216.16,128Z"
                }))],
                ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                    d: "M228.23,134.69,84.15,222.81A8,8,0,0,1,72,216.12V39.88a8,8,0,0,1,12.15-6.69l144.08,88.12A7.82,7.82,0,0,1,228.23,134.69Z",
                    opacity: "0.2"
                }), t.createElement("path", {
                    d: "M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"
                }))],
                ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                    d: "M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"
                }))],
                ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                    d: "M231.36,116.19,87.28,28.06a14,14,0,0,0-14.18-.27A13.69,13.69,0,0,0,66,39.87V216.13a13.69,13.69,0,0,0,7.1,12.08,14,14,0,0,0,14.18-.27l144.08-88.13a13.82,13.82,0,0,0,0-23.62Zm-6.26,13.38L81,217.7a2,2,0,0,1-2.06,0,1.78,1.78,0,0,1-1-1.61V39.87a1.78,1.78,0,0,1,1-1.61A2.06,2.06,0,0,1,80,38a2,2,0,0,1,1,.31L225.1,126.43a1.82,1.82,0,0,1,0,3.14Z"
                }))],
                ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                    d: "M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"
                }))],
                ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                    d: "M230.32,117.9,86.24,29.79a11.91,11.91,0,0,0-12.17-.23A11.71,11.71,0,0,0,68,39.89V216.11a11.71,11.71,0,0,0,6.07,10.33,11.91,11.91,0,0,0,12.17-.23L230.32,138.1a11.82,11.82,0,0,0,0-20.2Zm-4.18,13.37L82.06,219.39a4,4,0,0,1-4.07.07,3.77,3.77,0,0,1-2-3.35V39.89a3.77,3.77,0,0,1,2-3.35,4,4,0,0,1,4.07.07l144.08,88.12a3.8,3.8,0,0,1,0,6.54Z"
                }))]
            ]),
            l = t.forwardRef((e, l) => t.createElement(a.f, {
                ref: l,
                ...e,
                weights: r
            }));
        l.displayName = "PlayIcon", e.s(["Play", 0, l, "PlayIcon", 0, l], 980986)
    }, 717714, e => {
        var t = e.i(876009),
            a = e.i(494004),
            r = e.i(516830);
        e.s(["f", 0, function() {
            t.E.current || (0, a.f)();
            let [e] = (0, r.useState)(t.d.current);
            return e
        }])
    }, 825455, e => {
        var t = e.i(516830),
            a = e.i(513038);
        let r = {
            some: 0,
            all: 1
        };
        e.s(["f", 0, function(e, {
            root: l,
            margin: n,
            amount: o,
            once: i = !1,
            initial: s = !1
        } = {}) {
            let [d, u] = (0, t.useState)(s);
            return (0, t.useEffect)(() => {
                if (!e.current || i && d) return;
                let t = {
                    root: l && l.current || void 0,
                    margin: n,
                    amount: o
                };
                return function(e, t, {
                    root: l,
                    margin: n,
                    amount: o = "some"
                } = {}) {
                    let i = (0, a.f)(e),
                        s = new WeakMap,
                        d = new IntersectionObserver(e => {
                            e.forEach(e => {
                                let a = s.get(e.target);
                                if (!!a !== e.isIntersecting)
                                    if (e.isIntersecting) {
                                        let a = t(e.target, e);
                                        "function" == typeof a ? s.set(e.target, a) : d.unobserve(e.target)
                                    } else "function" == typeof a && (a(e), s.delete(e.target))
                            })
                        }, {
                            root: l,
                            rootMargin: n,
                            threshold: "number" == typeof o ? o : r[o]
                        });
                    return i.forEach(e => d.observe(e)), () => d.disconnect()
                }(e.current, () => (u(!0), i ? void 0 : () => u(!1)), t)
            }, [l, e, n, i, o]), d
        }], 825455)
    }, 494004, 876009, e => {
        let t = {
                current: null
            },
            a = {
                current: !1
            };
        e.s(["E", 0, a, "d", 0, t], 876009);
        let r = "u" > typeof window;
        e.s(["f", 0, function() {
            if (a.current = !0, r)
                if (window.matchMedia) {
                    let e = window.matchMedia("(prefers-reduced-motion)"),
                        a = () => t.current = e.matches;
                    e.addEventListener("change", a), a()
                } else t.current = !1
        }], 494004)
    }, 513038, e => {
        e.s(["f", 0, function(e, t, a) {
            if (null == e) return [];
            if (e instanceof EventTarget) return [e];
            if ("string" == typeof e) {
                let r = document;
                t && (r = t.current);
                let l = a?.[e] ?? r.querySelectorAll(e);
                return l ? Array.from(l) : []
            }
            return Array.from(e).filter(e => null != e)
        }])
    }, 82557, e => {
        var t = e.i(361610),
            a = e.i(996471),
            r = e.i(107256);
        e.s(["f", 0, function(e, l) {
            let n = (0, t.f)(e, {
                    labelable: !0
                }),
                {
                    hoverProps: o
                } = (0, r.f)({
                    onHoverStart: () => l?.open(!0),
                    onHoverEnd: () => l?.close()
                });
            return {
                tooltipProps: (0, a.f)(n, o, {
                    role: "tooltip"
                })
            }
        }])
    }, 86721, e => {
        var t = e.i(528837),
            a = e.i(996471),
            r = e.i(835349),
            l = e.i(107256),
            n = e.i(81407),
            o = e.i(516830);
        e.s(["f", 0, function(e, i, s) {
            let {
                isDisabled: d,
                trigger: u,
                shouldCloseOnPress: c = !0
            } = e, f = (0, n.H)(), m = (0, o.useRef)(!1), p = (0, o.useRef)(!1), b = () => {
                (m.current || p.current) && i.open(p.current)
            }, g = e => {
                m.current || p.current || i.close(e)
            };
            (0, o.useEffect)(() => {
                let e = e => {
                    s && s.current && "Escape" === e.key && (e.stopPropagation(), i.close(!0))
                };
                if (i.isOpen) return document.addEventListener("keydown", e, !0), () => {
                    document.removeEventListener("keydown", e, !0)
                }
            }, [s, i]);
            let h = () => {
                    c && (p.current = !1, m.current = !1, g(!0))
                },
                {
                    hoverProps: y
                } = (0, l.f)({
                    isDisabled: d,
                    onHoverStart: () => {
                        "focus" !== u && ("pointer" === (0, t.E)() ? m.current = !0 : m.current = !1, b())
                    },
                    onHoverEnd: () => {
                        "focus" !== u && (p.current = !1, m.current = !1, g())
                    }
                }),
                {
                    focusableProps: V
                } = (0, r.F)({
                    isDisabled: d,
                    onFocus: () => {
                        (0, t.v)() && (p.current = !0, b())
                    },
                    onBlur: () => {
                        p.current = !1, m.current = !1, g(!0)
                    }
                }, s);
            return {
                triggerProps: {
                    "aria-describedby": i.isOpen ? f : void 0,
                    ...(0, a.f)(V, y, {
                        onPointerDown: h,
                        onKeyDown: h
                    }),
                    tabIndex: void 0
                },
                tooltipProps: {
                    id: f
                }
            }
        }])
    }, 949877, e => {
        var t = e.i(982391),
            a = e.i(516830);
        e.s(["f", 0, function(e) {
            let [r, l] = (0, t.f)(e.isOpen, e.defaultOpen || !1, e.onOpenChange), n = (0, a.useCallback)(() => {
                l(!0)
            }, [l]), o = (0, a.useCallback)(() => {
                l(!1)
            }, [l]), i = (0, a.useCallback)(() => {
                l(!r)
            }, [l, r]);
            return {
                isOpen: r,
                setOpen: l,
                open: n,
                close: o,
                toggle: i
            }
        }])
    }, 145038, e => {
        var t = e.i(949877),
            a = e.i(516830);
        let r = {},
            l = 0,
            n = !1,
            o = null,
            i = null;
        e.s(["f", 0, function(e = {}) {
            let {
                delay: s = 1500,
                closeDelay: d = 500
            } = e, {
                isOpen: u,
                open: c,
                close: f
            } = (0, t.f)(e), m = (0, a.useMemo)(() => `${++l}`, []), p = (0, a.useRef)(null), b = (0, a.useRef)(f), g = () => {
                r[m] = V
            }, h = () => {
                for (let e in r) e !== m && (r[e](!0), delete r[e])
            }, y = () => {
                p.current && clearTimeout(p.current), p.current = null, h(), g(), n = !0, c(), o && (clearTimeout(o), o = null), i && (clearTimeout(i), i = null)
            }, V = e => {
                e || d <= 0 ? (p.current && clearTimeout(p.current), p.current = null, b.current()) : p.current || (p.current = setTimeout(() => {
                    p.current = null, b.current()
                }, d)), o && (clearTimeout(o), o = null), n && (i && clearTimeout(i), i = setTimeout(() => {
                    delete r[m], i = null, n = !1
                }, Math.max(500, d)))
            };
            return (0, a.useEffect)(() => {
                b.current = f
            }, [f]), (0, a.useEffect)(() => () => {
                p.current && clearTimeout(p.current), r[m] && delete r[m]
            }, [m]), {
                isOpen: u,
                open: e => {
                    e || !(s > 0) || p.current ? y() : (h(), g(), u || n ? u || y() : (o && clearTimeout(o), o = setTimeout(() => {
                        o = null, n = !0, y()
                    }, s)))
                },
                close: V
            }
        }])
    }, 868767, e => {
        var t = e.i(230452),
            a = e.i(516830),
            r = e.i(145038),
            l = e.i(82557),
            n = e.i(86721),
            o = e.i(996471),
            i = e.i(722978);
        let s = ({
            state: e,
            content: a,
            hasArrow: r,
            placement: n,
            ...s
        }) => {
            let {
                tooltipProps: d
            } = (0, l.f)(s, e);
            return (0, t.jsx)("span", {
                className: (0, i.U)("text-tiny absolute z-10 w-max max-w-[180px] rounded-lg bg-white p-4 text-left text-gray-900 drop-shadow-lg dark:bg-gray-800 dark:text-gray-100", (e => {
                    switch (e) {
                        case "top":
                            return "left-1/2 translate-x-[-50%] -top-1/2 translate-y-[-105%]";
                        case "left":
                            return "left-0 translate-x-[-105%] top-1/2 translate-y-[-50%]";
                        case "right":
                            return "left-[100%] top-1/2 translate-y-[-50%] ml-3.5";
                        default:
                            return "left-1/2 translate-x-[-50%] top-[100%] mt-3.5"
                    }
                })(n), r && (e => {
                    switch (e) {
                        case "top":
                            return "after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:content-[''] after:absolute after:border-[6px] after:border-x-transparent after:border-b-transparent after:border-t-white dark:after:border-t-gray-800";
                        case "left":
                            return "after:content-[''] after:absolute after:top-1/2 after:right-0 after:translate-x-[12px] after:-translate-y-1/2 after:border-[6px] after:border-y-transparent after:border-r-transparent after:border-l-white dark:after:border-l-gray-800";
                        case "right":
                            return "before:content-[''] before:absolute before:top-1/2 before:right-[100%] before:-translate-y-1/2 before:border-[6px] before:border-y-transparent before:border-l-transparent before:border-r-white dark:before:border-r-gray-800";
                        default:
                            return "before:left-1/2 before:top-0 before:-translate-y-[12px]  before:-translate-x-1/2 before:content-[''] before:absolute before:border-[6px] before:border-x-transparent before:border-t-transparent before:border-b-white dark:before:border-b-gray-800"
                    }
                })(n)),
                style: {
                    wordBreak: "break-word",
                    overflowWrap: "break-word"
                },
                ...(0, o.f)(s, d),
                children: a
            })
        };
        e.s(["default", 0, ({
            content: e,
            placement: l = "bottom",
            hasArrow: o = !0,
            tooltipOptions: i = {
                delay: 300,
                closeDelay: 0,
                isDisabled: !1
            },
            children: d
        }) => {
            let u = (0, r.f)(i),
                c = (0, a.useRef)(null),
                {
                    triggerProps: f,
                    tooltipProps: m
                } = (0, n.f)(i, u, c);
            return (0, t.jsxs)("span", {
                className: "relative",
                children: [(0, t.jsx)("span", {
                    ref: c,
                    ...f,
                    children: d
                }), u.isOpen && (0, t.jsx)(s, {
                    state: u,
                    content: e,
                    placement: l,
                    hasArrow: o,
                    ...m
                })]
            })
        }])
    }, 880749, e => {
        var t = e.i(230452),
            a = e.i(516830),
            r = e.i(26494),
            l = e.i(722978),
            n = e.i(825455),
            o = e.i(717714),
            i = e.i(554206),
            s = e.i(980986),
            d = e.i(514957),
            u = e.i(78070);
        let c = (0, e.i(312591).default)(() => e.A(297223), {
                loadableGenerated: {
                    modules: [238774]
                },
                ssr: !1
            }),
            f = ({
                url: e,
                playing: a = !0,
                isActive: r = !0,
                loop: l = !0,
                muted: n = !0,
                playsinline: o = !0,
                controls: i = !1,
                onReady: s,
                onPlaying: d,
                className: u,
                style: f
            }) => (0, t.jsx)(c, {
                src: e,
                playing: r && a,
                loop: l,
                muted: n,
                playsInline: o,
                controls: i,
                width: "100%",
                height: "100%",
                className: u ?? "object-cover [--media-object-fit:cover]",
                style: f,
                onReady: s,
                onPlaying: d && (e => {
                    let t = e.currentTarget;
                    d(t.nativeEl ?? t)
                })
            }),
            m = {
                "top-right": "absolute top-3 right-3 z-20",
                "top-left": "absolute top-3 left-3 z-20",
                "bottom-right": "absolute bottom-3 right-3 z-20",
                "bottom-left": "absolute bottom-3 left-3 z-20",
                center: "absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
            },
            p = {
                "top-right": "xs",
                "top-left": "xs",
                "bottom-right": "xs",
                "bottom-left": "xs",
                center: "md"
            },
            b = ({
                position: e,
                isPlaying: a,
                onToggle: r
            }) => (0, t.jsx)("span", {
                className: m[e],
                children: (0, t.jsx)(u.f, {
                    disableAnimation: !0,
                    icon: a ? (0, t.jsx)(i.Pause, {
                        weight: "fill"
                    }) : (0, t.jsx)(s.Play, {
                        weight: "fill"
                    }),
                    variant: "secondary",
                    size: p[e],
                    onClick: r,
                    ariaLabel: a ? "Pause video" : "Play video"
                })
            }),
            g = ({
                poster: e,
                posterSizes: a,
                posterPriority: n,
                visible: o,
                onClick: i,
                showPlayBadge: u,
                dim: c
            }) => {
                let f = (0, l.U)("absolute inset-0 transition-opacity duration-500", o ? "opacity-100 z-10" : "pointer-events-none opacity-0"),
                    m = (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(r.default, {
                            src: e.src,
                            alt: e.alt ?? "",
                            fill: !0,
                            sizes: a,
                            priority: n,
                            className: (0, l.U)("object-cover", c && "brightness-75"),
                            ...e.placeholder ? {
                                placeholder: "blur",
                                blurDataURL: e.placeholder
                            } : {}
                        }), u && (0, t.jsx)("span", {
                            className: "absolute inset-0 flex items-center justify-center",
                            children: (0, t.jsx)("span", {
                                className: "dark:bg-mango-black/90 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black shadow-md transition-transform group-hover:scale-110 group-focus-visible:scale-110 dark:text-white",
                                children: (0, t.jsx)(d.f, {
                                    as: s.Play,
                                    size: "1.5rem",
                                    weight: "fill"
                                })
                            })
                        })]
                    });
                return i ? (0, t.jsx)("button", {
                    type: "button",
                    "aria-label": "Play video",
                    className: `group block w-full ${f}`,
                    onClick: i,
                    children: m
                }) : (0, t.jsx)("div", {
                    className: f,
                    children: m
                })
            };
        e.s(["default", 0, ({
            src: e,
            mode: r = "click-to-play",
            poster: l,
            posterSizes: i = "100vw",
            posterPriority: s = !1,
            controls: d,
            isActive: u = !0,
            onPlayingChange: c,
            onReady: m,
            onPlaying: p,
            className: h
        }) => {
            let y = (0, a.useRef)(null),
                V = (0, n.f)(y, {
                    once: !0
                }),
                A = (0, o.f)(),
                H = "click-to-play" === r,
                v = "autoplay" === r,
                [M, x] = (0, a.useState)(v),
                [E, w] = (0, a.useState)(!1),
                [k, Z] = (0, a.useState)(v),
                L = e => {
                    x(e), e && Z(!0), c?.(e)
                },
                C = H ? M : V && !A,
                P = !!l?.src && !(E && k),
                j = d ? "string" == typeof d ? d : M ? d.playing : d.paused : "none",
                z = H ? () => L(!0) : void 0;
            return (0, t.jsxs)("div", {
                ref: y,
                className: h ?? "relative aspect-video w-full overflow-hidden rounded-2xl bg-mango-black",
                children: [C && (0, t.jsx)(f, {
                    url: e,
                    isActive: u,
                    playing: M,
                    loop: !H,
                    muted: !H,
                    playsinline: !H,
                    controls: H,
                    onReady: () => {
                        w(!0), m?.()
                    },
                    onPlaying: p
                }), l?.src && (0, t.jsx)(g, {
                    poster: l,
                    posterSizes: i,
                    posterPriority: s,
                    visible: P,
                    onClick: z,
                    showPlayBadge: H,
                    dim: H
                }), "none" !== j && E && (0, t.jsx)(b, {
                    position: j,
                    isPlaying: M,
                    onToggle: () => L(!M)
                })]
            })
        }], 880749)
    }, 913207, e => {
        let t = (0, e.i(312591).default)(() => e.A(535534), {
            loadableGenerated: {
                modules: [188678]
            }
        });
        e.s(["default", 0, t])
    }, 514957, e => {
        var t = e.i(230452),
            a = e.i(722978);
        e.s(["f", 0, ({
            as: e,
            className: r,
            size: l = "1.5rem",
            weight: n = "regular"
        }) => (0, t.jsx)("div", {
            style: {
                height: l,
                width: l,
                color: "inherit"
            },
            children: (0, t.jsx)(e, {
                size: l,
                className: (0, a.U)("text-inherit", r),
                weight: n
            })
        })])
    }, 945263, e => {
        var t = e.i(163165),
            a = e.i(838064),
            r = e.i(242042),
            l = e.i(516830);
        let n = new Map([
                ["bold", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M216,28H88A12,12,0,0,0,76,40V76H40A12,12,0,0,0,28,88V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V180h36a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28ZM156,204H52V100H156Zm48-48H180V88a12,12,0,0,0-12-12H100V52H204Z"
                }))],
                ["duotone", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M216,40V168H168V88H88V40Z",
                    opacity: "0.2"
                }), l.createElement("path", {
                    d: "M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"
                }))],
                ["fill", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z"
                }))],
                ["light", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M216,34H88a6,6,0,0,0-6,6V82H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H168a6,6,0,0,0,6-6V174h42a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34ZM162,210H46V94H162Zm48-48H174V88a6,6,0,0,0-6-6H94V46H210Z"
                }))],
                ["regular", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"
                }))],
                ["thin", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M216,36H88a4,4,0,0,0-4,4V84H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H168a4,4,0,0,0,4-4V172h44a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36ZM164,212H44V92H164Zm48-48H172V88a4,4,0,0,0-4-4H92V44H212Z"
                }))]
            ]),
            o = l.forwardRef((e, t) => l.createElement(r.w, {
                ref: t,
                ...e,
                weights: n
            }));
        o.displayName = "CopyIcon";
        var i = e.i(230452);
        e.s(["CopyCodeButton", 0, function({
            code: e,
            copyLabel: r,
            copiedLabel: n
        }) {
            let [s, d] = (0, l.useState)(!1), [u, c] = (0, l.useState)(!1), f = (0, l.useRef)(void 0), m = (0, l.useRef)(void 0);
            (0, l.useEffect)(() => () => {
                clearTimeout(f.current), clearTimeout(m.current)
            }, []);
            let p = async () => {
                try {
                    await navigator.clipboard.writeText(e)
                } catch {
                    return
                }
                d(!0), c(!1), clearTimeout(m.current), m.current = setTimeout(() => c(!0), 100), clearTimeout(f.current), f.current = setTimeout(() => {
                    d(!1), c(!1)
                }, 2e3)
            };
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(t.Button, {
                    variant: "outline",
                    size: "sm",
                    "aria-label": r,
                    iconLeft: s ? (0, i.jsx)(a.f, {
                        size: 12,
                        "aria-hidden": !0
                    }) : (0, i.jsx)(o, {
                        size: 12,
                        "aria-hidden": !0
                    }),
                    onPress: p
                }), (0, i.jsx)("span", {
                    role: "status",
                    className: "mango:sr-only",
                    children: u ? n : ""
                })]
            })
        }], 945263)
    }, 838064, e => {
        var t = e.i(242042),
            a = e.i(516830);
        let r = new Map([
                ["bold", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"
                }))],
                ["duotone", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",
                    opacity: "0.2"
                }), a.createElement("path", {
                    d: "M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"
                }))],
                ["fill", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"
                }))],
                ["light", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z"
                }))],
                ["regular", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"
                }))],
                ["thin", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z"
                }))]
            ]),
            l = a.forwardRef((e, l) => a.createElement(t.w, {
                ref: l,
                ...e,
                weights: r
            }));
        l.displayName = "CheckIcon", e.s(["f", 0, l], 838064)
    }])
})();

//# debugId=892a89fa-4672-d966-bd3c-baf6f9bd607b