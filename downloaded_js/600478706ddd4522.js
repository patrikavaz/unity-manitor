(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 781007, e => {
    "use strict";
    var t = e.i(297124),
        a = e.i(672721);
    let i = (0, a.lazy)(() => e.A(310739));

    function n(e) {
        return (0, t.jsx)(a.Suspense, {
            fallback: null,
            children: (0, t.jsx)(i, {
                ...e
            })
        })
    }
    e.s(["default", () => n])
}, 998003, e => {
    "use strict";
    var t = e.i(297124),
        a = e.i(321950),
        i = e.i(433519);

    function n({
        children: e
    }) {
        return (0, t.jsx)(a.GenesisSessionProvider, {
            children: (0, t.jsx)(i.CommerceContextProvider, {
                children: e
            })
        })
    }
    e.s(["default", () => n])
}, 6154, (e, t, a) => {
    "use strict";

    function i(e, t, a = !1) {
        return t ? Object.keys(e).filter(e => a ? !t.includes(e) : t.includes(e)).reduce((t, a) => (t[a] = e[a], t), {}) : {}
    }

    function n(e, t, a, i) {
        let n = i && Object.keys(i).length > 0 ? new URL(Object.values(i)[0], e) : new URL(e);
        return t && a && t.forEach(e => {
            a[e] && n.searchParams.set(e, a[e])
        }), n.toString()
    }

    function r(e, t, a, i, r) {
        var l;
        if (!t) return `<${e}></${e}>`;
        let s = (null == (l = t.src) ? void 0 : l.url) ? Object.assign(Object.assign({}, t), {
                src: n(t.src.url, t.src.params, i, r)
            }) : t,
            o = Object.keys(Object.assign(Object.assign({}, s), a)).reduce((e, t) => {
                let i = null == a ? void 0 : a[t],
                    n = s[t],
                    r = null != i ? i : n,
                    l = !0 === r ? t : `${t}="${r}"`;
                return r ? e + ` ${l}` : e
            }, "");
        return `<${e}${o}></${e}>`
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.formatData = a.createHtml = a.formatUrl = void 0, a.formatUrl = n, a.createHtml = r, a.formatData = function(e, t) {
        var a, l, s, o, c;
        let d = i(t, null == (a = e.scripts) ? void 0 : a.reduce((e, t) => [...e, ...Array.isArray(t.params) ? t.params : []], [])),
            u = i(t, null == (s = null == (l = e.html) ? void 0 : l.attributes.src) ? void 0 : s.params),
            h = i(t, [null == (c = null == (o = e.html) ? void 0 : o.attributes.src) ? void 0 : c.slugParam]),
            f = i(t, [...Object.keys(d), ...Object.keys(u), ...Object.keys(h)], !0);
        return Object.assign(Object.assign({}, e), {
            html: e.html ? r(e.html.element, e.html.attributes, f, u, h) : null,
            scripts: e.scripts ? e.scripts.map(e => Object.assign(Object.assign({}, e), {
                url: n(e.url, e.params, d)
            })) : null
        })
    }
}, 880092, (e, t, a) => {
    "use strict";
    var i = e.e && e.e.__rest || function(e, t) {
            var a = {};
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (a[i] = e[i]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (a[i[n]] = e[i[n]]);
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
    let r = n(e.r(155708)),
        l = e.r(6154);
    a.GoogleAnalytics = e => {
        var t = i(e, []);
        return (0, l.formatData)(r.default, t)
    }
}, 490057, (e, t, a) => {
    "use strict";
    var i = e.e && e.e.__rest || function(e, t) {
            var a = {};
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (a[i] = e[i]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (a[i[n]] = e[i[n]]);
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
    let r = n(e.r(681171)),
        l = e.r(6154);
    a.GoogleMapsEmbed = e => {
        var t = i(e, []);
        return (0, l.formatData)(r.default, t)
    }
}, 761564, (e, t, a) => {
    "use strict";
    var i = e.e && e.e.__rest || function(e, t) {
            var a = {};
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (a[i] = e[i]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (a[i[n]] = e[i[n]]);
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
    let r = n(e.r(861002)),
        l = e.r(6154);
    a.YouTubeEmbed = e => {
        var t = i(e, []);
        return (0, l.formatData)(r.default, t)
    }
}, 508751, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.YouTubeEmbed = a.GoogleMapsEmbed = a.GoogleAnalytics = void 0;
    var i = e.r(880092);
    Object.defineProperty(a, "GoogleAnalytics", {
        enumerable: !0,
        get: function() {
            return i.GoogleAnalytics
        }
    });
    var n = e.r(490057);
    Object.defineProperty(a, "GoogleMapsEmbed", {
        enumerable: !0,
        get: function() {
            return n.GoogleMapsEmbed
        }
    });
    var r = e.r(761564);
    Object.defineProperty(a, "YouTubeEmbed", {
        enumerable: !0,
        get: function() {
            return r.YouTubeEmbed
        }
    })
}, 923832, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = function({
        html: e,
        height: t = null,
        width: a = null,
        children: r,
        dataNtpc: l = ""
    }) {
        return (0, n.useEffect)(() => {
            l && performance.mark("mark_feature_usage", {
                detail: {
                    feature: `next-third-parties-${l}`
                }
            })
        }, [l]), (0, i.jsxs)(i.Fragment, {
            children: [r, e ? (0, i.jsx)("div", {
                style: {
                    height: null != t ? `${t}px` : "auto",
                    width: null != a ? `${a}px` : "auto"
                },
                "data-ntpc": l,
                dangerouslySetInnerHTML: {
                    __html: e
                }
            }) : null]
        })
    };
    let i = e.r(297124),
        n = e.r(672721)
}, 40990, (e, t, a) => {
    "use strict";
    var i = e.e && e.e.__importDefault || function(e) {
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
        } = e, i = {
            ...a,
            key: t
        }, {
            html: s
        } = (0, r.GoogleMapsEmbed)(i);
        return (0, n.jsx)(l.default, {
            height: i.height || null,
            width: i.width || null,
            html: s,
            dataNtpc: "GoogleMapsEmbed"
        })
    };
    let n = e.r(297124),
        r = e.r(508751),
        l = i(e.r(923832))
}, 308370, (e, t, a) => {
    "use strict";
    var i = e.e && e.e.__importDefault || function(e) {
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
            stylesheets: i
        } = (0, l.YouTubeEmbed)(e);
        return (0, n.jsx)(s.default, {
            height: e.height || null,
            width: e.width || null,
            html: t,
            dataNtpc: "YouTubeEmbed",
            children: null == a ? void 0 : a.map(e => (0, n.jsx)(r.default, {
                src: e.url,
                strategy: o[e.strategy],
                stylesheets: i
            }, e.url))
        })
    };
    let n = e.r(297124),
        r = i(e.r(600645)),
        l = e.r(508751),
        s = i(e.r(923832)),
        o = {
            server: "beforeInteractive",
            client: "afterInteractive",
            idle: "lazyOnload",
            worker: "worker"
        }
}, 149753, (e, t, a) => {
    "use strict";
    var i = e.e && e.e.__importDefault || function(e) {
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
            dataLayerName: i = "dataLayer",
            auth: o,
            preview: c,
            dataLayer: d,
            nonce: u
        } = e;
        s = i;
        let h = new URL(a || "https://www.googletagmanager.com/gtm.js");
        return t && h.searchParams.set("id", t), "dataLayer" !== i && h.searchParams.set("l", i), o && h.searchParams.set("gtm_auth", o), c && (h.searchParams.set("gtm_preview", c), h.searchParams.set("gtm_cookies_win", "x")), (0, r.useEffect)(() => {
            performance.mark("mark_feature_usage", {
                detail: {
                    feature: "next-third-parties-gtm"
                }
            })
        }, []), (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(l.default, {
                id: "_next-gtm-init",
                dangerouslySetInnerHTML: {
                    __html: `
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${d?`w[l].push(${JSON.stringify(d)})`:""}
      })(window,'${i}');`
                },
                nonce: u
            }), (0, n.jsx)(l.default, {
                id: "_next-gtm",
                "data-ntpc": "GTM",
                src: h.href,
                nonce: u
            })]
        })
    };
    let n = e.r(297124),
        r = e.r(672721),
        l = i(e.r(600645)),
        s = "dataLayer";
    a.sendGTMEvent = (e, t) => {
        let a = t || s;
        window[a] = window[a] || [], window[a].push(e)
    }
}, 420468, (e, t, a) => {
    "use strict";
    let i;
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
            nonce: o
        } = e;
        return void 0 === i && (i = n), (0, l.useEffect)(() => {
            performance.mark("mark_feature_usage", {
                detail: {
                    feature: "next-third-parties-ga"
                }
            })
        }, []), (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(s.default, {
                id: "_next-ga-init",
                dangerouslySetInnerHTML: {
                    __html: `
          window['${n}'] = window['${n}'] || [];
          function gtag(){window['${n}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}' ${a?",{ 'debug_mode': true }":""});`
                },
                nonce: o
            }), (0, r.jsx)(s.default, {
                id: "_next-ga",
                src: `https://www.googletagmanager.com/gtag/js?id=${t}`,
                nonce: o
            })]
        })
    }, a.sendGAEvent = function() {
        void 0 === i ? console.warn("@next/third-parties: GA has not been initialized") : window[i] ? window[i].push(arguments) : console.warn(`@next/third-parties: GA dataLayer ${i} does not exist`)
    };
    let r = e.r(297124),
        l = e.r(672721),
        s = n(e.r(600645))
}, 89617, (e, t, a) => {
    "use strict";
    var i = e.e && e.e.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.sendGAEvent = a.GoogleAnalytics = a.sendGTMEvent = a.GoogleTagManager = a.YouTubeEmbed = a.GoogleMapsEmbed = void 0;
    var n = e.r(40990);
    Object.defineProperty(a, "GoogleMapsEmbed", {
        enumerable: !0,
        get: function() {
            return i(n).default
        }
    });
    var r = e.r(308370);
    Object.defineProperty(a, "YouTubeEmbed", {
        enumerable: !0,
        get: function() {
            return i(r).default
        }
    });
    var l = e.r(149753);
    Object.defineProperty(a, "GoogleTagManager", {
        enumerable: !0,
        get: function() {
            return l.GoogleTagManager
        }
    }), Object.defineProperty(a, "sendGTMEvent", {
        enumerable: !0,
        get: function() {
            return l.sendGTMEvent
        }
    });
    var s = e.r(420468);
    Object.defineProperty(a, "GoogleAnalytics", {
        enumerable: !0,
        get: function() {
            return s.GoogleAnalytics
        }
    }), Object.defineProperty(a, "sendGAEvent", {
        enumerable: !0,
        get: function() {
            return s.sendGAEvent
        }
    })
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
    e.s(["getUserFromGenesis", () => t])
}, 959440, e => {
    "use strict";
    var t = e.i(297124),
        a = e.i(672721),
        i = e.i(600645),
        n = e.i(89617),
        r = e.i(31588),
        l = e.i(544923),
        s = e.i(849141);
    let o = "GTM-5V25JL6",
        c = "a9f5fcb3-4c7f-4bb7-93bf-7607ffbdabe0";

    function d({
        locale: e
    }) {
        let [d] = (0, l.default)("location", "US"), [u] = (0, l.default)("currency", "USD"), [h, f] = (0, a.useState)(null), g = (0, a.useCallback)(() => {
            window.OneTrust && window.OneTrust.changeLanguage(r.oneTrustLocaleOverrides[e || "en"])
        }, [e]), m = (0, a.useCallback)(async () => {
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
                    environment_locale: d,
                    environment_currency: u
                }
            })
        }, [d, u]);
        return (0, a.useEffect)(() => {
            m()
        }, [m]), (0, a.useEffect)(() => {
            g()
        }, [g]), (0, t.jsxs)(t.Fragment, {
            children: [c && (0, t.jsx)(i.default, {
                src: "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js",
                charSet: "UTF-8",
                "data-domain-script": c,
                "data-dLayer-ignore": "true",
                strategy: "afterInteractive",
                "data-document-language": "true",
                onReady: g
            }), c && (0, t.jsx)(i.default, {
                id: "onetrust-optanon-wrapper",
                strategy: "afterInteractive",
                children: "function OptanonWrapper(){}"
            }), o && h && (0, t.jsx)(n.GoogleTagManager, {
                gtmId: o,
                dataLayer: h
            })]
        })
    }
    e.s(["default", () => d])
}, 595293, e => {
    "use strict";
    e.i(122963);
    var t = e.i(297124),
        a = e.i(672721),
        i = e.i(180573),
        n = e.i(955592),
        r = e.i(472506),
        l = e.i(722978),
        s = e.i(94918),
        o = e.i(825610),
        c = e.i(78070),
        d = e.i(291158),
        u = e.i(278466);
    let h = () => (0, t.jsx)(u.Link, {
        href: "/",
        className: "-m-2 inline-block p-2 transition-opacity hover:opacity-80",
        "data-link-location": o.trackingLocation.headerLogo,
        "data-link-id": "header-logo",
        children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "19",
            height: "22",
            viewBox: "0 0 19 22",
            fill: "none",
            children: (0, t.jsx)("path", {
                d: "M10.3305 3.93605L13.7281 5.94619C13.8503 6.01676 13.8547 6.21254 13.7281 6.28311L9.69098 8.67343C9.56884 8.74627 9.4245 8.74172 9.31124 8.67343L5.27408 6.28311C5.14972 6.21482 5.1475 6.01449 5.27408 5.94619L8.66947 3.93605V0L0 5.13121V15.3936L3.32433 13.4267V9.40646C3.32211 9.26304 3.48644 9.1606 3.60858 9.238L7.64575 11.6283C7.76788 11.7012 7.83672 11.8309 7.83672 11.9652V16.7436C7.83894 16.887 7.67461 16.9894 7.55248 16.912L4.15486 14.9019L0.830529 16.8688L9.5 22L18.1695 16.8688L14.8451 14.9019L11.4475 16.912C11.3276 16.9872 11.1588 16.8893 11.1633 16.7436V11.9652C11.1633 11.8218 11.241 11.6943 11.3543 11.6283L15.3914 9.238C15.5113 9.16287 15.6801 9.25849 15.6757 9.40646V13.4267L19 15.3936V5.13121L10.3305 0V3.93605Z",
                fill: "white"
            })
        })
    });
    var f = e.i(799547),
        g = e.i(544789);
    let m = ({
            children: e,
            className: a
        }) => (0, t.jsx)(g.default, {
            className: a,
            children: e
        }),
        x = ({
            variant: e = "medium",
            href: a,
            title: i,
            tag: n,
            description: r,
            image: s,
            icon: c,
            isExternal: h
        }) => {
            let g = (0, l.default)("text-white flex items-baseline gap-2", {
                "mango-text-heading-5xs": "medium" === e,
                "mango-text-heading-2xs": "large" === e
            });
            return (0, t.jsxs)(u.Link, {
                href: a,
                className: "group relative block overflow-hidden rounded-lg p-2",
                "data-link-location": o.trackingLocation.headerNavigationLink,
                "data-link-id": `header-nav-link-${a.split("/").filter(Boolean).join("-")||"home"}`,
                children: [(0, t.jsx)("div", {
                    className: "absolute inset-0 rounded-lg bg-gray-700 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100"
                }), (0, t.jsxs)("span", {
                    className: "relative z-10 flex items-center gap-4",
                    children: [(c || s) && (0, t.jsx)("span", {
                        className: "flex h-[2.625rem] w-[2.5625rem] shrink-0 items-center justify-center rounded-lg bg-gray-800",
                        children: c ? (0, t.jsx)(d.default, {
                            icon: c,
                            size: "1.5rem",
                            className: "text-white"
                        }) : s && (0, t.jsx)(f.default, {
                            src: s.src,
                            alt: s.alt,
                            width: 22,
                            height: 22,
                            placeholder: "blur",
                            blurDataURL: s.placeholder
                        })
                    }), (0, t.jsxs)("div", {
                        className: "flex-1",
                        children: [(0, t.jsxs)("div", {
                            className: g,
                            children: [(0, t.jsx)("div", {
                                children: i
                            }), n && (0, t.jsx)(m, {
                                children: n
                            }), (0, t.jsx)("div", {
                                className: "self-center",
                                children: h && (0, t.jsx)(d.default, {
                                    icon: "arrow-up-right",
                                    size: "1rem"
                                })
                            })]
                        }), r && (0, t.jsx)("div", {
                            className: "mango-text-body-sm text-gray-400",
                            children: r
                        })]
                    })]
                })]
            })
        },
        p = ({
            href: e,
            title: a,
            className: i,
            icon: n
        }) => {
            let r = (0, l.default)("group flex items-center gap-3 rounded p-1 hover:bg-gray-700 focus:bg-gray-700 transition-colors duration-200 ease-in-out", i);
            return (0, t.jsxs)(u.Link, {
                href: e,
                className: r,
                "data-link-location": o.trackingLocation.headerDropdownLink,
                "data-link-id": `header-dropdown-link-${e.split("/").filter(Boolean).join("-")||"home"}`,
                children: [n && (0, t.jsx)("span", {
                    className: "flex h-[2.625rem] w-[2.5625rem] shrink-0 items-center justify-center rounded-lg bg-gray-800 text-gray-500 transition-all duration-700 ease-in-out group-hover:text-white",
                    children: (0, t.jsx)(d.default, {
                        icon: n
                    })
                }), (0, t.jsx)("span", {
                    className: "mango-text-heading-5xs text-white",
                    children: a
                })]
            })
        },
        v = ({
            title: e,
            panelIndex: a = 0,
            sectionIndex: i = 0,
            links: n = [],
            actions: r = [],
            variant: s = "default"
        }) => {
            let d = (0, l.default)("mango-text-input text-gray-400", {
                    "mb-5": "compact" === s || "dropdown" === s,
                    "mb-6": "default" === s
                }),
                u = (0, l.default)("flex flex-col w-full", {
                    "gap-1": "compact" === s || "dropdown" === s,
                    "gap-5": "default" === s
                }),
                h = (0, l.default)("flex flex-wrap", {
                    "mt-3 gap-1": "compact" === s,
                    "mt-8 gap-2": "default" === s
                });
            return (0, t.jsxs)("div", {
                className: "flex flex-col",
                children: [(0, t.jsx)("div", {
                    className: d,
                    children: e
                }), n.length > 0 && (0, t.jsx)("div", {
                    className: u,
                    children: n.map((e, a) => "dropdown" === s ? (0, t.jsx)(p, {
                        href: e.href,
                        icon: e.icon,
                        title: e.title
                    }, `header-dropdown-menu-link-${e.title}-${a}`) : (0, t.jsx)(x, {
                        variant: "medium",
                        href: e.href,
                        icon: e.icon,
                        title: e.title,
                        tag: e.tag,
                        description: e.description,
                        isExternal: e.isExternal,
                        image: e.image
                    }, `header-dropdown-menu-link-${e.title}-${a}`))
                }), r.length > 0 && (0, t.jsx)("div", {
                    className: h,
                    children: r.map((e, n) => (0, t.jsx)(c.default, {
                        href: e.href,
                        size: "xs",
                        variant: e.variant || "secondary",
                        icon: e.icon,
                        iconDirection: e.iconDirection || "right",
                        "data-link-location": o.trackingLocation.headerDropdownMenuSectionAction,
                        "data-link-id": `header-dropdown-action-${a}-${i}-${n}`,
                        children: e.title
                    }, `header-dropdown-menu-action-${e.title}-${n}`))
                })]
            })
        };
    var j = e.i(946318),
        y = e.i(293723),
        b = e.i(58476),
        k = e.i(614271);
    let w = a.default.forwardRef(({
        icon: e,
        isActive: a = !1,
        className: i,
        onClick: n,
        onMouseEnter: r,
        onFocus: s,
        onTouchStart: o
    }, c) => {
        let d = (0, l.default)("rounded-full transition-colors text-white", "border hover:border-gray-700 focus:border-gray-700", {
            "border border-gray-700": a,
            "border-transparent": !a
        }, i);
        return (0, t.jsx)(k.Button, {
            ref: c,
            className: d,
            onPress: n,
            onHoverStart: r,
            onFocus: s,
            children: (0, t.jsx)("div", {
                onTouchStart: o,
                children: e
            })
        })
    });
    w.displayName = "HeaderIconButton";
    let N = ({
            icon: e,
            children: i,
            placement: n = "bottom end",
            offset: s = 24,
            className: o,
            onOpen: c
        }) => {
            let [d, u] = (0, a.useState)(!1), h = (0, r.usePathname)();
            return (0, a.useEffect)(() => {
                u(!1)
            }, [h]), (0, t.jsxs)(t.Fragment, {
                children: [d && (0, t.jsx)(b.m.div, {
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
                }), (0, t.jsxs)(j.MenuTrigger, {
                    isOpen: d,
                    onOpenChange: e => {
                        u(e), c?.(e)
                    },
                    children: [(0, t.jsx)(w, {
                        icon: e,
                        isActive: d
                    }), (0, t.jsx)(y.Popover, {
                        placement: n,
                        offset: s,
                        className: "dark",
                        children: (0, t.jsx)(b.m.div, {
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
                            className: (0, l.default)("fixed w-full bg-gradient-to-t from-[#262626] to-black max-lg:top-[4rem] max-lg:left-0 lg:static lg:w-80 lg:from-black/80 lg:to-gray-900/80 lg:backdrop-blur-[1.5rem]", "flex flex-col items-center justify-center gap-4 overflow-hidden p-3 outline-hidden max-lg:rounded-b-2xl lg:rounded-2xl", o),
                            children: i
                        })
                    })]
                })]
            })
        },
        _ = ({
            featuredLink: e,
            menus: a
        }) => (0, t.jsx)(N, {
            icon: (0, t.jsx)("div", {
                className: "p-2.5",
                children: (0, t.jsx)(d.default, {
                    icon: "storefront",
                    size: "0.875rem"
                })
            }),
            children: (0, t.jsxs)("div", {
                className: "flex w-full flex-col gap-4",
                children: [e && (0, t.jsx)(x, {
                    variant: "large",
                    href: e.href,
                    title: e.title,
                    description: e.description,
                    image: e.image,
                    icon: e.icon,
                    isExternal: e.isExternal
                }), a.length > 0 && (0, t.jsx)("div", {
                    className: "border-t border-gray-700 pt-3",
                    children: a.map((e, a) => (0, t.jsx)(v, {
                        sectionIndex: a,
                        title: e.title,
                        links: e.links,
                        variant: "dropdown"
                    }, `header-dropdown-menu-${e.title}-${a}`))
                })]
            })
        }),
        L = ({
            title: e,
            description: a,
            onLogout: i,
            onAccount: n,
            image: r,
            accountText: l = "My Account"
        }) => (0, t.jsxs)("div", {
            className: "relative h-[11.75rem] w-full overflow-hidden rounded-xl p-3 shadow-md",
            children: [r && (0, t.jsx)(f.default, {
                src: r.src,
                alt: "",
                fill: !0,
                placeholder: "blur",
                blurDataURL: r.placeholder,
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
                            className: "mango-text-body-sm text-mango-gray-400",
                            children: a
                        })]
                    }), (0, t.jsx)(c.default, {
                        icon: "sign-out",
                        variant: "outline",
                        size: "xs",
                        onClick: i,
                        "aria-label": "Logout"
                    })]
                }), (0, t.jsx)("div", {
                    children: (0, t.jsx)(c.default, {
                        size: "sm",
                        variant: "secondary",
                        icon: "user",
                        iconDirection: "left",
                        onClick: n,
                        children: l
                    })
                })]
            })]
        }),
        E = ({
            menus: e,
            userSpotlight: a,
            signInText: i = "Sign in or create Unity ID",
            onSignIn: n,
            initials: r
        }) => (0, t.jsx)(N, {
            icon: r ? (0, t.jsx)("div", {
                className: "mango-text-heading-5xs flex h-9 w-9 items-center justify-center text-white capitalize",
                children: r
            }) : (0, t.jsx)("div", {
                className: "p-2.5",
                children: (0, t.jsx)(d.default, {
                    icon: "user",
                    size: "0.875rem"
                })
            }),
            children: (0, t.jsxs)("div", {
                className: "flex w-full flex-col gap-4",
                children: [a ? (0, t.jsx)(L, {
                    title: a.title,
                    description: a.description,
                    image: a.image,
                    onLogout: a.onLogout,
                    onAccount: a.onAccount,
                    accountText: a.accountText
                }) : (0, t.jsx)(c.default, {
                    className: "w-full",
                    icon: "user",
                    iconDirection: "left",
                    onClick: n,
                    children: i
                }), e.length > 0 && (0, t.jsx)("div", {
                    className: "border-t border-gray-700 pt-3",
                    children: e.map((e, a) => (0, t.jsx)(v, {
                        sectionIndex: a,
                        title: e.title,
                        links: e.links,
                        actions: e.actions,
                        variant: "compact"
                    }, `header-dropdown-menu-${e.title}-${a}`))
                })]
            })
        });
    var R = e.i(529806);

    function S(e, t) {
        return (0, R.createMotionComponent)(e, t)
    }
    let M = S("div"),
        O = S("p"),
        $ = S("span"),
        T = ({
            tag: e,
            title: a,
            description: i,
            image: n,
            link: r,
            buttonText: l
        }) => (0, t.jsxs)(s.Link, {
            className: "group bg-mango-black relative block h-80 overflow-hidden rounded-2xl p-5 shadow-[0_1px_0_0_#424242_inset]",
            href: r.href,
            target: r.target || "_self",
            children: [n && (0, t.jsx)(f.default, {
                src: n.src,
                alt: "",
                fill: !0,
                sizes: "25vw",
                placeholder: "blur",
                blurDataURL: n.placeholder,
                className: "rounded-2xl object-cover transition-transform duration-[400ms] ease-in-out group-hover:scale-125"
            }), (0, t.jsxs)("div", {
                className: "flex h-full max-w-72 flex-col justify-between",
                children: [(0, t.jsxs)("div", {
                    className: "flex flex-col items-start",
                    children: [e && (0, t.jsx)(m, {
                        className: "mb-3",
                        children: e
                    }), (0, t.jsx)("div", {
                        className: "mango-text-heading-xs text-mango-white",
                        children: a
                    }), i && (0, t.jsx)("div", {
                        className: "mango-text-body-sm text-mango-gray-400 mt-1",
                        children: i
                    })]
                }), l && (0, t.jsx)("div", {
                    className: "translate-y-[200%] transform transition-transform duration-[400ms] ease-in-out group-hover:translate-y-0",
                    children: (0, t.jsx)(c.default, {
                        variant: "secondary",
                        size: "sm",
                        as: "div",
                        children: l
                    })
                })]
            })]
        }),
        U = a.default.forwardRef(({
            isOpen: e,
            active: a,
            panels: i,
            onKeyDown: n,
            panelRefs: r
        }, l) => {
            let s = null !== a && void 0 !== i[a],
                o = {
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
            return (0, t.jsx)(M, {
                ref: l,
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
                animate: e && s ? "visible" : "hidden",
                className: "absolute top-full right-0 left-0 z-40 w-full overflow-hidden rounded-b-[1rem] px-[4.625rem] shadow-2xl backdrop-blur-[24px]",
                role: "menu",
                "aria-hidden": !e || !s,
                onKeyDown: n,
                style: {
                    background: "linear-gradient(0deg, rgba(38, 38, 38, 0.80) -53.45%, rgba(0, 0, 0, 0.80) 91.71%)",
                    pointerEvents: e && s ? "auto" : "none"
                },
                children: (0, t.jsx)("div", {
                    className: "relative w-full",
                    children: i.map((i, n) => {
                        if (!i) return null;
                        let l = a === n && e,
                            s = i.highlightBox;
                        return (0, t.jsxs)(M, {
                            ref: e => {
                                r && (r.current[n] = e)
                            },
                            variants: o,
                            initial: "hidden",
                            animate: l ? "visible" : "hidden",
                            className: "grid w-full grid-cols-12 gap-6",
                            style: {
                                position: l ? "relative" : "absolute",
                                pointerEvents: l ? "auto" : "none"
                            },
                            "aria-hidden": !l,
                            children: [i.sections.map((e, a) => (0, t.jsx)("div", {
                                className: "md:col-span-3",
                                children: (0, t.jsx)(v, {
                                    ...e,
                                    panelIndex: n,
                                    sectionIndex: a
                                })
                            }, `section-${e.title}-${a}`)), s && (0, t.jsx)("div", {
                                className: "hidden xl:col-span-3 xl:block",
                                children: (0, t.jsx)(T, {
                                    ...s
                                })
                            })]
                        }, `mega-menu-panel-${n}`)
                    })
                })
            })
        });
    U.displayName = "HeaderMegaMenu";
    var P = e.i(139307),
        C = e.i(623295);

    function A({
        navigation: e,
        action: i,
        secondaryAction: n,
        utilityNavigationItems: l
    }) {
        let [s, d] = (0, a.useState)(null), [u, h] = (0, a.useState)(!1), f = (0, r.usePathname)(), g = (0, a.useRef)(null), m = (0, a.useRef)(null), x = l ? l.filter(e => "string" != typeof e) : [];
        return (0, a.useEffect)(() => {
            if (u) return document.body.style.overflow = "hidden", () => {
                document.body.style.overflow = ""
            }
        }, [u]), (0, a.useEffect)(() => {
            h(!1)
        }, [f]), (0, a.useEffect)(() => {
            let e = e => {
                let t = e.target;
                g.current && !g.current.contains(t) && m.current && !m.current.contains(t) && h(!1)
            };
            if (u) return document.addEventListener("mousedown", e), () => {
                document.removeEventListener("mousedown", e)
            }
        }, [u]), (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("div", {
                ref: m,
                children: (0, t.jsx)(c.default, {
                    className: "block lg:hidden",
                    variant: "secondary",
                    icon: u ? "x" : "list",
                    size: "sm",
                    onClick: () => h(!u)
                })
            }), (0, t.jsx)(P.AnimatePresence, {
                mode: "wait",
                children: u && (0, t.jsx)(M, {
                    ref: g,
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
                    children: (0, t.jsxs)("div", {
                        className: "mt-10 mb-5 flex flex-col px-4",
                        children: [e.map((e, a) => (0, t.jsx)(D, {
                            ...e,
                            active: s === a,
                            setActive: d,
                            index: a
                        }, `search-modal-search-result-${e.title}-${a}`)), x.length > 0 ? x.map((e, a) => (0, t.jsx)(c.default, {
                            className: `w-full lg:hidden ${0===a?"mt-12":"mt-6"}`,
                            size: "lg",
                            variant: e.variant ?? "primary",
                            href: e.link?.href,
                            target: e.link?.target,
                            "data-link-location": o.trackingLocation.headerMobileAction,
                            "data-link-id": `header-mobile-action-${a}`,
                            children: e.label
                        }, `mobile-action-${a}`)) : (0, t.jsxs)(t.Fragment, {
                            children: [i && (0, t.jsx)(c.default, {
                                className: "mt-12 w-full lg:hidden",
                                size: "lg",
                                href: i.href,
                                target: i.target,
                                "data-link-location": o.trackingLocation.headerMobileAction,
                                "data-link-id": "header-mobile-primary-action",
                                children: i.label
                            }), n && (0, t.jsx)(c.default, {
                                className: "mt-6 w-full lg:hidden",
                                size: "lg",
                                variant: "secondary",
                                href: n.href,
                                target: n.target,
                                "data-link-location": o.trackingLocation.headerMobileSecondaryAction,
                                "data-link-id": "header-mobile-secondary-action",
                                children: n.label
                            })]
                        })]
                    })
                })
            })]
        })
    }
    let D = ({
            title: e,
            link: a,
            listingLabel: i,
            panel: n,
            active: r,
            setActive: l,
            index: d
        }) => {
            let u = !!n;
            return (0, t.jsxs)("div", {
                className: "relative py-1.5",
                children: [u ? (0, t.jsxs)("button", {
                    onClick: () => l(r ? null : d),
                    className: "relative z-10 flex w-full items-center justify-between",
                    children: [(0, t.jsx)(O, {
                        animate: {
                            x: 24 * !!r,
                            y: 6 * !!r,
                            scale: r ? 1.2 : 1
                        },
                        transition: {
                            duration: .5,
                            ease: [.25, 1, .5, 1]
                        },
                        className: "mango-text-heading-2xs leading-none! text-white",
                        children: e
                    }), (0, t.jsx)($, {
                        animate: {
                            x: r ? -16 : 0,
                            y: 6 * !!r,
                            rotate: 90 * !!r
                        },
                        transition: {
                            duration: .5,
                            ease: [.25, 1, .5, 1]
                        },
                        className: "inline-block",
                        children: (0, t.jsx)(c.default, {
                            icon: "caret-right",
                            size: "sm",
                            iconWeight: "fill",
                            variant: r ? "secondary" : "ghost"
                        })
                    })]
                }) : (0, t.jsx)(s.Link, {
                    href: a?.href || "",
                    target: a?.target === "_blank" ? "_blank" : void 0,
                    className: "relative z-10 flex w-full items-center py-2.5",
                    "data-link-location": o.trackingLocation.headerNavigationItem,
                    children: (0, t.jsx)("p", {
                        className: "mango-text-heading-2xs leading-none! text-white",
                        children: e
                    })
                }), (0, t.jsxs)(P.AnimatePresence, {
                    mode: "wait",
                    children: [u && r && n && (0, t.jsx)(I, {
                        panel: n,
                        listingLabel: i,
                        link: a
                    }), u && r && (0, t.jsx)($, {
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
        I = ({
            panel: e,
            listingLabel: a,
            link: i
        }) => (0, t.jsxs)(M, {
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
            children: [(0, t.jsx)("span", {
                "aria-hidden": !0,
                className: "block h-[3.125rem]"
            }), (0, t.jsx)("div", {
                className: "flex flex-col gap-9",
                children: e.sections.map(({
                    title: e,
                    actions: a,
                    mobileActions: i,
                    links: n
                }, r) => (0, t.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    children: [(0, t.jsx)("div", {
                        className: "border-b border-gray-700",
                        children: (0, t.jsx)("p", {
                            className: "mango-text-input mb-2 text-gray-400",
                            children: e
                        })
                    }), (0, t.jsxs)("div", {
                        className: "flex flex-col gap-3",
                        children: [n?.map(({
                            title: e,
                            href: a,
                            icon: i,
                            image: n,
                            isExternal: r
                        }, l) => (0, t.jsxs)(s.Link, {
                            href: a,
                            className: "flex items-center gap-3",
                            "data-link-location": o.trackingLocation.headerMobilePanelLink,
                            "data-link-id": `header-mobile-panel-link-${l}`,
                            children: [(0, t.jsxs)("div", {
                                className: "flex h-[2.5rem] w-[2.5rem] shrink-0 items-center justify-center",
                                children: [i && (0, t.jsx)(C.default, {
                                    icon: i,
                                    size: "1.5rem"
                                }), n && (0, t.jsx)(f.default, {
                                    src: n.src,
                                    alt: n.alt,
                                    height: 24,
                                    width: 24,
                                    placeholder: "blur",
                                    blurDataURL: n.placeholder
                                })]
                            }), (0, t.jsxs)("p", {
                                className: "mango-text-heading-3xs flex items-center gap-2 text-white",
                                children: [e, r && (0, t.jsx)(C.default, {
                                    icon: "arrow-up-right",
                                    size: "1rem"
                                })]
                            })]
                        }, `header-mobile-panel-section-links-${e}-${l}`)), (0, t.jsx)("div", {
                            className: "mt-1 flex flex-col gap-3",
                            children: (i || a)?.map(({
                                title: e,
                                href: a,
                                variant: i,
                                icon: n,
                                iconDirection: r
                            }, l) => (0, t.jsx)(c.default, {
                                href: a,
                                variant: i || "outline",
                                icon: n || void 0,
                                iconDirection: r || "right",
                                size: "xs",
                                "data-link-location": o.trackingLocation.headerMobilePanelAction,
                                "data-link-id": `header-mobile-panel-action-${l}`,
                                children: e
                            }, `header-mobile-panel-section-actions-${e}-${l}`))
                        })]
                    })]
                }, `header-mobile-panel-section-${e}-${r}`))
            }), (0, t.jsx)(c.default, {
                href: i.href,
                className: "mt-9 w-full",
                variant: "secondary",
                icon: "arrow-right",
                size: "lg",
                "data-link-location": o.trackingLocation.headerMobilePanelListing,
                "data-link-id": "header-mobile-panel-listing",
                children: a
            }), (0, t.jsx)("span", {
                "aria-hidden": !0,
                className: "block h-[1.25rem]"
            })]
        });
    var z = e.i(766930);
    let F = ({
        navigation: e = [],
        store: i,
        userMenu: n,
        onSearchOpen: u,
        onSearchHover: f,
        onSearchFocus: g,
        action: m,
        searchButtonRef: x,
        secondaryAction: p,
        utilityNavigationItems: v
    }) => {
        let [j, y] = (0, a.useState)(null), [b, k] = (0, a.useState)(!1), N = (0, r.usePathname)(), L = (0, a.useRef)(null), R = (0, a.useRef)([]), S = (0, a.useRef)(null), M = (0, a.useRef)([]), O = e?.map(e => e.panel) || [], $ = {
            search: e => (0, t.jsx)(w, {
                ref: x,
                onClick: D,
                onMouseEnter: f,
                onFocus: g,
                onTouchStart: f,
                icon: (0, t.jsx)("div", {
                    className: "p-2.5",
                    children: (0, t.jsx)(d.default, {
                        icon: "magnifying-glass",
                        size: "0.875rem"
                    })
                })
            }, `utility-nav-item-search-${e}`),
            store: e => i ? (0, t.jsx)(P.AnimatePresence, {
                mode: "wait",
                children: (0, t.jsx)(_, {
                    ...i
                })
            }, `utility-nav-item-store-${e}`) : null,
            profile: e => n ? (0, t.jsx)(P.AnimatePresence, {
                mode: "wait",
                children: (0, t.jsx)(E, {
                    ...n
                })
            }, `utility-nav-item-profile-${e}`) : null
        };
        (0, a.useEffect)(() => {
            M.current.forEach((e, t) => {
                if (!e) return;
                let a = j === t && b;
                e.querySelectorAll("a[href], button:not([disabled])").forEach(e => {
                    a ? e.removeAttribute("tabindex") : e.setAttribute("tabindex", "-1")
                })
            })
        }, [j, b]), (0, a.useEffect)(() => () => {
            L.current && clearTimeout(L.current)
        }, []), (0, a.useEffect)(() => {
            k(!1), y(null)
        }, [N]);
        let T = () => {
                L.current && clearTimeout(L.current)
            },
            C = e => {
                let t = M.current[e];
                return t ? Array.from(t.querySelectorAll('a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"])')) : []
            },
            D = () => {
                u && u()
            };
        return (0, t.jsx)(z.default, {
            children: (0, t.jsxs)("header", {
                className: "dark sticky top-0 right-0 left-0 z-50 flex h-[4rem] items-center bg-black lg:h-[3rem]",
                children: [b && null !== j && e[j]?.panel && (0, t.jsx)("div", {
                    className: "fixed inset-0 z-10 bg-black/10",
                    style: {
                        top: "3rem"
                    }
                }), (0, t.jsxs)("div", {
                    className: "mango-container flex items-center justify-between px-6 py-1.5",
                    children: [(0, t.jsxs)("div", {
                        className: "flex items-center gap-9",
                        children: [(0, t.jsx)(h, {}), (0, t.jsxs)("div", {
                            className: "hidden lg:block",
                            role: "menubar",
                            tabIndex: -1,
                            onBlurCapture: e => {
                                L.current = setTimeout(() => {
                                    let t = e.currentTarget,
                                        a = document.activeElement;
                                    t && a && !t.contains(a) && (k(!1), y(null))
                                }, 150)
                            },
                            onMouseEnter: T,
                            onMouseLeave: () => {
                                L.current = setTimeout(() => {
                                    k(!1), y(null)
                                }, 150)
                            },
                            onKeyDown: e => {
                                "Escape" === e.key && b && (e.preventDefault(), k(!1), y(null), null !== j && R.current[j]?.focus())
                            },
                            children: [(0, t.jsx)("nav", {
                                children: (0, t.jsx)("ul", {
                                    className: "flex",
                                    children: e.map((a, i) => {
                                        let n = !!a.panel;
                                        return (0, t.jsx)("li", {
                                            children: (0, t.jsx)(s.Link, {
                                                ref: e => {
                                                    R.current[i] = e
                                                },
                                                className: (0, l.default)("mango-text-heading-5xs text-mango-white hover:bg-mango-gray-950 block rounded-xl px-3 py-2", {
                                                    "bg-mango-gray-950": j === i && n
                                                }),
                                                href: a.link?.href,
                                                target: a.link?.target === "_blank" ? "_blank" : void 0,
                                                onMouseEnter: () => {
                                                    T(), n ? (y(i), k(!0)) : (y(null), k(!1))
                                                },
                                                onKeyDown: t => {
                                                    let a;
                                                    return a = e[i]?.panel, void("ArrowDown" === t.key && a && (t.preventDefault(), y(i), k(!0), setTimeout(() => {
                                                        let e = C(i);
                                                        e[0]?.focus()
                                                    }, 100)))
                                                },
                                                "aria-haspopup": n ? "true" : void 0,
                                                "aria-expanded": n && j === i && b ? "true" : "false",
                                                "data-link-id": `header-nav-item-${i}`,
                                                "data-link-location": o.trackingLocation.headerNavigationItem,
                                                children: a.title
                                            })
                                        }, `navigationItem-${a.title}-${i}`)
                                    })
                                })
                            }), (0, t.jsx)(U, {
                                ref: S,
                                isOpen: b,
                                active: j,
                                panels: O,
                                panelRefs: M,
                                onKeyDown: e => {
                                    if ("Escape" === e.key) {
                                        e.preventDefault(), e.stopPropagation(), k(!1), y(null), null !== j && R.current[j]?.focus();
                                        return
                                    }
                                    if ("Tab" === e.key && b && null !== j) {
                                        let t = null === j ? [] : C(j);
                                        if (0 === t.length) return;
                                        let a = t[0],
                                            i = e.target,
                                            n = t.indexOf(i);
                                        if (-1 === n) return;
                                        e.shiftKey ? 0 === n && (e.preventDefault(), k(!1), y(null), R.current[j]?.focus()) : n === t.length - 1 && (e.preventDefault(), a.focus())
                                    }
                                }
                            })]
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [v ? v.map((e, a) => "string" == typeof e ? $[e]?.(a) ?? null : (0, t.jsx)(c.default, {
                            className: "hidden lg:flex",
                            size: "xs",
                            variant: e.variant ?? "primary",
                            href: e.link?.href,
                            target: e.link?.target,
                            "data-link-location": "secondary" === e.variant ? o.trackingLocation.headerSecondaryAction : o.trackingLocation.headerAction,
                            "data-link-id": `header-utility-action-${a}`,
                            children: e.label
                        }, `utility-nav-item-action-${a}`)) : (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(w, {
                                ref: x,
                                onClick: D,
                                onMouseEnter: f,
                                onFocus: g,
                                onTouchStart: f,
                                icon: (0, t.jsx)("div", {
                                    className: "p-2.5",
                                    children: (0, t.jsx)(d.default, {
                                        icon: "magnifying-glass",
                                        size: "0.875rem"
                                    })
                                })
                            }), (0, t.jsx)(P.AnimatePresence, {
                                mode: "wait",
                                children: i && (0, t.jsx)(_, {
                                    ...i
                                })
                            }), (0, t.jsx)(P.AnimatePresence, {
                                mode: "wait",
                                children: n && (0, t.jsx)(E, {
                                    ...n
                                })
                            }), p && (0, t.jsx)(c.default, {
                                className: "hidden lg:flex",
                                size: "xs",
                                variant: "secondary",
                                href: p.href,
                                target: p.target,
                                "data-link-location": o.trackingLocation.headerSecondaryAction,
                                "data-link-id": "header-secondary-action",
                                children: p.label
                            }), m && (0, t.jsx)(c.default, {
                                className: "hidden lg:flex",
                                size: "xs",
                                href: m.href,
                                target: m.target,
                                "data-link-location": o.trackingLocation.headerAction,
                                "data-link-id": "header-primary-action",
                                children: m.label
                            })]
                        }), (0, t.jsx)(A, {
                            navigation: e,
                            action: m,
                            secondaryAction: p,
                            utilityNavigationItems: v
                        })]
                    })]
                })]
            })
        })
    };
    var G = e.i(779712),
        B = e.i(321950),
        H = e.i(849141),
        Y = e.i(869324);
    let K = ({
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
        }),
        V = e => {
            let t = e.location;
            return {
                page_url: t.href,
                page_hostname: t.hostname,
                page_path: t.pathname,
                page_query: t.search,
                page_fragment: t.hash,
                page_title: e.title
            }
        },
        q = (0, i.default)(() => e.A(191233), {
            loadableGenerated: {
                modules: [807973]
            },
            ssr: !1
        });

    function J({
        data: e,
        locale: i
    }) {
        let [l, s] = (0, a.useState)(!1), [o, c] = (0, a.useState)(!1), d = (0, a.useRef)(null), {
            user: u,
            signIn: h,
            signOut: f,
            signUp: g
        } = (({
            locale: e
        } = {}) => {
            let [t, i] = (0, a.useState)(null), [n, l] = (0, a.useState)(!1), {
                genesisSession: s
            } = (0, B.useGenesisSession)(), o = (0, r.usePathname)() || "/";
            (0, a.useEffect)(() => {
                (async () => {
                    l(!0);
                    try {
                        let {
                            users: e
                        } = await (0, H.getUserFromGenesis)();
                        if (e.length > 0) {
                            let t = e[0] ?? {},
                                a = t.name?.givenName,
                                n = t.name?.familyName,
                                r = t.name?.fullName;
                            if (r && (!a || !n)) {
                                let e = r.trim().split(/\s+/);
                                a || (a = e[0] || ""), !n && e.length > 1 && (n = e[e.length - 1] || "")
                            }
                            i({
                                initials: ((e, t, a) => {
                                    let i = t ?? "",
                                        n = a ?? "";
                                    if (e) {
                                        let t = e.split(" ");
                                        i = t[0], n = t.length > 1 ? t[t.length - 1] : ""
                                    }
                                    return `${i[0]??""}${n[0]??""}`
                                })(r, a, n),
                                ...t,
                                name: {
                                    fullName: r || "",
                                    givenName: a || "",
                                    familyName: n || ""
                                }
                            }), l(!1)
                        }
                    } catch (e) {
                        console.error(e)
                    }
                })()
            }, []);
            let c = new URLSearchParams({
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
                    sessionStorage.setItem("REDIRECT_PATH", o), window.location.href = `https://api.unity.com/v1/oauth2/authorize?${c}`
                },
                signOut: () => {
                    let e = new URLSearchParams({
                        access_token: s.access_token,
                        post_logout_redirect_uri: `https://unity.com${o}`
                    }).toString();
                    sessionStorage.clear(), window.location.href = `https://api.unity.com/v1/oauth2/end-session?${e}`
                },
                signUp: () => {
                    sessionStorage.setItem("REDIRECT_PATH", o), window.location.href = `https://api.unity.com/v1/oauth2/authorize?${c}&is_reg=true`
                }
            }
        })({
            locale: i
        }), m = (0, a.useCallback)(() => {
            c(!0)
        }, []), x = (0, a.useCallback)(() => {
            s(!0);
            let e = K({
                action: "search modal open",
                level: "header",
                pageDetails: V(document)
            });
            (0, Y.default)(e)
        }, []), p = (0, a.useCallback)(e => {
            if (s(e), !e) {
                let e = K({
                    action: "search modal close",
                    level: "header",
                    pageDetails: V(document)
                });
                (0, Y.default)(e), requestAnimationFrame(() => {
                    d.current?.focus()
                })
            }
        }, []), v = e?.navigation?.map(e => {
            let t = {
                title: e.title,
                link: e.fieldLink?.linkReference?.href?.current ? {
                    href: e.fieldLink.linkReference.href.current,
                    target: e.fieldLink.linkReference.target
                } : {
                    href: ""
                },
                listingLabel: e.listingLabel
            };
            return e.panel && (t.panel = {
                sections: e.panel.sections?.map(e => ({
                    title: e.title,
                    links: e.links?.map(e => {
                        let t = {
                            title: e.title,
                            description: e.description,
                            tag: e.tag,
                            isExternal: e.isExternal,
                            href: e.fieldLink?.linkReference?.href?.current || ""
                        };
                        return "icon" === e.visualType ? e.icon && (t.icon = e.icon) : "image" === e.visualType && e.image && (t.image = {
                            src: (0, G.urlForImage)(e.image)?.fit("crop").width(30).height(30).dpr(2).url() ?? "",
                            alt: e.image.alt ?? "",
                            placeholder: e.image.asset?.metadata?.lqip ?? ""
                        }), t
                    }) || [],
                    actions: e.actions?.map(e => ({
                        title: e.title,
                        href: e.fieldLink?.linkReference?.href?.current || "",
                        variant: e.variant,
                        icon: e.icon || void 0,
                        iconDirection: e.iconDirection || "right"
                    })) || [],
                    mobileActions: e.mobileActions?.map(e => ({
                        title: e.title,
                        href: e.fieldLink?.linkReference?.href?.current || "",
                        variant: e.variant,
                        icon: e.icon || void 0,
                        iconDirection: e.iconDirection || "right"
                    })) || void 0
                })) || [],
                highlightBox: e.panel.highlightBox ? {
                    tag: e.panel.highlightBox.tag,
                    title: e.panel.highlightBox.title,
                    description: e.panel.highlightBox.description,
                    image: e.panel.highlightBox.image ? {
                        src: (0, G.urlForImage)(e.panel.highlightBox.image)?.fit("crop").width(400).height(400).dpr(2).url() ?? "",
                        placeholder: e.panel.highlightBox.image.asset?.metadata?.lqip || ""
                    } : void 0,
                    link: e.panel.highlightBox.fieldLink?.linkReference?.href?.current ? {
                        href: e.panel.highlightBox.fieldLink.linkReference.href.current
                    } : {
                        href: ""
                    },
                    buttonText: e.panel.highlightBox.buttonText
                } : void 0
            }), t
        }), j = {
            menus: e?.userMenu?.menus?.map(e => ({
                title: e.title,
                links: e.links?.map(e => {
                    let t = {
                        title: e.title,
                        href: e.fieldLink?.linkReference?.href?.current || ""
                    };
                    return "image" === e.visualType && e.image ? t.image = {
                        src: (0, G.urlForImage)(e.image)?.fit("crop").width(30).height(30).dpr(2).url() ?? "",
                        alt: e.image.alt ?? "",
                        placeholder: e.image.asset?.metadata?.lqip ?? ""
                    } : e.icon && (t.icon = e.icon), t
                }) || [],
                actions: e.actions?.map(e => ({
                    title: e.title,
                    href: e.fieldLink?.linkReference?.href?.current || ""
                })) || []
            })) || [],
            signInText: e?.userMenu?.signInText || void 0,
            onSignIn: h,
            initials: u?.login ? u?.initials : void 0,
            userSpotlight: u?.login ? {
                title: e?.userMenu?.userGreeting ? n.default.render(e.userMenu.userGreeting, {
                    name: u?.name.givenName || "User"
                }) : u?.name.givenName || "User",
                description: u?.email || "",
                onLogout: f,
                onAccount: () => {
                    window.location.href = "https://cloud.unity.com/account/account-settings"
                },
                accountText: e?.userMenu?.accountText || "My Account",
                image: e?.userMenu?.userSpotlightImage ? {
                    src: (0, G.urlForImage)(e.userMenu.userSpotlightImage)?.fit("crop").width(768).dpr(2).url() ?? "",
                    placeholder: e.userMenu.userSpotlightImage.asset?.metadata?.lqip ?? ""
                } : void 0
            } : void 0
        }, y = null;
        if (e?.store?.featuredLink) {
            let t = e.store.featuredLink;
            y = {
                title: t.title,
                description: t.description ?? void 0,
                href: t.fieldLink?.linkReference?.href?.current || "",
                isExternal: t.isExternal ?? void 0
            }, "icon" === t.visualType && t.icon && (y.icon = t.icon), "image" === t.visualType && t.image && (y.image = {
                src: (0, G.urlForImage)(t.image)?.fit("crop").width(30).height(30).dpr(2).url() ?? "",
                alt: t.image.alt ?? "",
                placeholder: t.image.asset?.metadata?.lqip ?? ""
            })
        }
        let b = {
                navigation: v,
                store: {
                    featuredLink: y,
                    menus: e?.store?.menus?.map(e => ({
                        title: e.title,
                        links: e.links?.map(e => ({
                            title: e.title,
                            href: e.fieldLink?.linkReference?.href?.current || ""
                        })) || []
                    })) || []
                },
                userMenu: j,
                onSearchOpen: x,
                onSearchHover: m,
                onSearchFocus: m,
                searchButtonRef: d,
                action: e?.action ? {
                    label: e.action.label || "",
                    href: e.action.fieldLink?.linkReference?.href?.current || void 0,
                    target: e.action.fieldLink?.linkReference?.target || void 0
                } : void 0,
                secondaryAction: e?.secondaryAction ? {
                    label: e.secondaryAction.label || "",
                    href: e.secondaryAction.fieldLink?.linkReference?.href?.current || void 0,
                    target: e.secondaryAction.fieldLink?.linkReference?.target || void 0
                } : void 0,
                utilityNavigationItems: (e => {
                    if (e) return e.map(e => "utilityIcon" === e._type ? e.icon : {
                        label: e.label,
                        link: {
                            href: e.fieldLink?.linkReference?.href?.current,
                            target: e.fieldLink?.linkReference?.target
                        },
                        variant: e.variant
                    })
                })(e?.utilityNavigationItems)
            },
            k = e?.search?.filterTabs?.map(e => e) || [];
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(F, {
                ...b
            }), (o || l) && (0, t.jsx)(q, {
                isOpen: l,
                onOpenChange: p,
                placeholder: e?.search?.placeholder,
                noResultsMessage: e?.search?.noResultsMessage,
                filterTabs: k
            })]
        })
    }
    e.s(["default", () => J], 595293)
}, 795687, e => {
    "use strict";
    var t = e.i(297124),
        a = e.i(672721),
        i = e.i(654816),
        n = e.i(799547),
        r = e.i(7075),
        l = e.i(146911),
        s = e.i(299930),
        o = e.i(291158),
        c = e.i(722978),
        d = e.i(869324);
    let u = ({
        children: e,
        hasContainer: a = !0
    }) => {
        let i = (0, c.clsx)("m-auto flex flex-col flex-wrap py-6", {
                container: a
            }, {
                "px-3 md:px-6": !a
            }),
            n = e => {
                e.stopPropagation(), (0, d.default)({
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
                onClick: n,
                onKeyDown: e => {
                    ("Enter" === e.key || " " === e.key) && (e.preventDefault(), n(e))
                },
                className: "bg-gray-100 dark:bg-gray-900",
                style: {
                    cursor: "auto"
                },
                children: (0, t.jsx)("div", {
                    className: i,
                    children: e
                })
            })
        })
    };
    u.Copyright = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "text-tiny text-gray-600 dark:text-gray-400",
        children: e
    }), u.Disclaimer = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "text-tiny w-auto text-gray-600 lg:w-2/4 dark:text-gray-400",
        children: e
    }), u.Language = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "flex flex-col xl:mt-6 xl:basis-2/4",
        children: e
    }), u.LanguageLink = ({
        children: e
    }) => (0, t.jsx)("li", {
        className: "text-tiny-bold mr-4 text-gray-800 dark:text-gray-200",
        children: e
    }), u.LanguageLinks = ({
        children: e
    }) => (0, t.jsx)("ul", {
        className: "flex flex-wrap gap-y-2 whitespace-nowrap",
        children: e
    }), u.LanguageSocialContainer = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "flex flex-col border-b border-gray-200 pb-6 xl:flex-row dark:border-gray-800",
        children: e
    }), u.LegalContainer = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "flex basis-full flex-col",
        children: e
    }), u.LegalLink = ({
        children: e
    }) => (0, t.jsx)("li", {
        className: "text-tiny-bold mr-4 text-gray-800 dark:text-gray-200",
        children: e
    }), u.LegalLinks = ({
        children: e
    }) => (0, t.jsx)("ul", {
        className: "my-4 flex flex-wrap",
        children: e
    }), u.Navigation = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "mb-6 border-b border-gray-200 pb-6 dark:border-gray-800",
        children: e
    }), u.NavigationColumn = ({
        children: e,
        className: a = ""
    }) => {
        let i = (0, c.clsx)("mt-6 flex-[0_50%] md:flex-[0_25%] lg:flex-1", a);
        return (0, t.jsx)("div", {
            className: i,
            children: e
        })
    }, u.NavigationColumns = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "flex flex-wrap",
        children: e
    }), u.NavigationLink = ({
        children: e
    }) => (0, t.jsx)("li", {
        className: "mb-2",
        children: e
    }), u.NavigationLinks = ({
        children: e,
        className: a = ""
    }) => (0, t.jsx)("ul", {
        className: a,
        children: e
    }), u.Social = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "mt-6 flex-1",
        children: e
    }), u.SocialLogo = ({
        children: e
    }) => (0, t.jsx)("li", {
        className: "relative h-6 w-6 cursor-pointer transition-all duration-300 ease-out hover:opacity-80 dark:hover:opacity-70",
        children: e
    }), u.SocialLogos = ({
        children: e
    }) => (0, t.jsx)("ul", {
        className: "flex gap-x-2 xl:flex-1",
        children: e
    }), u.Title = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "text-small mb-2 text-gray-600 dark:text-gray-400",
        children: e
    }), u.SocialCurrencyContainer = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "flex basis-2/4 flex-col md:flex-row",
        children: e
    }), u.CurrencyContainer = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "mt-6 flex-1",
        children: e
    });
    var h = e.i(481392),
        f = e.i(805518);
    let g = ({
        className: e = "",
        width: a = 30,
        height: i = 14
    }) => (0, t.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: a,
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
    var m = e.i(433519),
        x = e.i(544923);
    let p = {
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
        v = [{
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
    e.s(["default", 0, ({
        data: e
    }) => {
        let [c] = (0, x.default)("location", "US"), [d, j] = (0, x.default)("currency", p[c] || "USD"), {
            dispatch: y,
            state: b
        } = (0, m.default)(), {
            social: k,
            navigation: w,
            legal: N,
            currencyLabel: _,
            languageLabel: L
        } = e, [E, R] = (0, a.useState)(!1), S = (0, r.usePathname)(), [M] = (0, x.default)("experiment_exposure", "");
        (0, a.useEffect)(() => {
            R(!0)
        }, []), (0, a.useEffect)(() => {
            b.currency !== d && y({
                type: m.CommerceContextAction.UPDATE,
                currency: d
            })
        }, [d, b, y]);
        let O = (e, a) => {
            if (!e) return null;
            let {
                fieldLink: i,
                title: n
            } = e, r = i?.linkReference?.href?.current || "";
            return (0, t.jsx)(u.NavigationLink, {
                children: (0, t.jsx)(l.default, {
                    size: "tiny",
                    href: r,
                    target: i?.linkReference?.target === "_blank" || i?.linkReference?.target === "_parent" || i?.linkReference?.target === "_top" ? i?.linkReference?.target : "_self",
                    "data-link-location": "Footer",
                    "data-link-id": `footer-nav-link-${a}`,
                    children: n
                })
            }, `navigation-link-${n}-${a}`)
        };
        return (0, t.jsxs)(u, {
            hasContainer: !0,
            children: [(0, t.jsxs)(u.LanguageSocialContainer, {
                children: [(0, t.jsxs)(u.Language, {
                    children: [(0, t.jsx)(u.Title, {
                        children: L
                    }), (0, t.jsx)(u.LanguageLinks, {
                        children: v.map((e, a) => (0, t.jsx)(u.LanguageLink, {
                            children: (0, t.jsx)(s.default, {
                                href: `/${e.locale}${S}`,
                                "data-testid": e.title,
                                prefetch: !1,
                                children: e.title
                            })
                        }, `language-${e.title}-${a}`))
                    })]
                }), (0, t.jsxs)(u.SocialCurrencyContainer, {
                    children: [k && (0, t.jsxs)(u.Social, {
                        children: [(0, t.jsx)(u.Title, {
                            children: k.socialLabel
                        }), (0, t.jsx)(u.SocialLogos, {
                            children: k.logos?.map((e, a) => {
                                if (!e) return null;
                                let {
                                    fieldLink: i,
                                    file: r,
                                    icon: l
                                } = e, s = i?.linkReference?.href?.current || "";
                                return (0, t.jsx)(u.SocialLogo, {
                                    children: (0, t.jsx)("a", {
                                        href: s,
                                        target: i?.linkReference?.target === "_blank" || i?.linkReference?.target === "_parent" || i?.linkReference?.target === "_top" ? i?.linkReference?.target : "_self",
                                        className: "focus-ring relative block h-full",
                                        "data-link-location": "Footer",
                                        "data-link-id": `footer-social-${a}`,
                                        children: l ? (0, t.jsx)(o.default, {
                                            icon: l
                                        }) : (0, t.jsx)(n.default, {
                                            src: r?.file?.asset.url || "",
                                            fill: !0,
                                            alt: r?.alt || "",
                                            className: "dark:invert"
                                        })
                                    })
                                }, `social-logo-${a}`)
                            })
                        })]
                    }), (0, t.jsxs)(u.CurrencyContainer, {
                        children: [(0, t.jsx)("span", {
                            id: "currency-label",
                            children: (0, t.jsx)(u.Title, {
                                children: _
                            })
                        }), (0, t.jsxs)(h.default, {
                            "aria-labelledby": "currency-label",
                            className: "w-full",
                            selectedKey: d,
                            onSelectionChange: e => {
                                e && (j(e.toString()), y({
                                    type: m.CommerceContextAction.UPDATE,
                                    currency: e.toString()
                                }), ((e, t) => {
                                    try {
                                        if (!e) return !1;
                                        let a = JSON.parse(decodeURIComponent(e)) ?? {};
                                        return !!a[t] && a[t].hasCurrency
                                    } catch (e) {
                                        return console.warn("Error parsing experiment cookie"), !1
                                    }
                                })(M, S) && window.location.reload())
                            },
                            children: [(0, t.jsx)(h.default.Item, {
                                children: "BRL"
                            }, "BRL"), (0, t.jsx)(h.default.Item, {
                                children: "CNY"
                            }, "CNY"), (0, t.jsx)(h.default.Item, {
                                children: "JPY"
                            }, "JPY"), (0, t.jsx)(h.default.Item, {
                                children: "KRW"
                            }, "KRW"), (0, t.jsx)(h.default.Item, {
                                children: "USD"
                            }, "USD"), (0, t.jsx)(h.default.Item, {
                                children: "EUR"
                            }, "EUR")]
                        })]
                    })]
                })]
            }), (0, t.jsx)(u.Navigation, {
                children: (0, t.jsx)(u.NavigationColumns, {
                    children: w?.map((e, a) => {
                        if (!e) return null;
                        let {
                            navigationLinks: i,
                            title: n
                        } = e;
                        return (0, t.jsxs)(u.NavigationColumn, {
                            children: [(0, t.jsx)(u.Title, {
                                children: n
                            }), (0, t.jsx)(u.NavigationLinks, {
                                className: "inline-block",
                                children: i?.map(O)
                            })]
                        }, `navigation-column${n}-${a}`)
                    })
                })
            }), (0, t.jsxs)(u.LegalContainer, {
                children: [(0, t.jsx)(u.Copyright, {
                    children: N?.copyright
                }), (0, t.jsxs)(u.LegalLinks, {
                    children: [N.legalLinks?.map((e, a) => {
                        if (!e) return null;
                        let {
                            fieldLink: i,
                            title: n
                        } = e, r = i?.linkReference?.href?.current || "";
                        return (0, t.jsx)(u.LegalLink, {
                            children: (0, t.jsx)(l.default, {
                                size: "tiny",
                                href: r,
                                target: i?.linkReference?.target === "_blank" || i?.linkReference?.target === "_parent" || i?.linkReference?.target === "_top" ? i?.linkReference?.target : "_self",
                                children: n
                            })
                        }, `legal-link-${n}-${a}`)
                    }), E && (0, t.jsx)(u.LegalLink, {
                        children: (0, t.jsxs)("div", {
                            className: "flex items-center",
                            children: [(0, t.jsx)(g, {
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
                                children: e.legal.cookieSettings
                            })]
                        })
                    })]
                }), (0, t.jsx)(u.Disclaimer, {
                    children: (0, t.jsx)(f.default, {
                        children: (0, t.jsx)(i.PortableText, {
                            value: N.disclaimer
                        })
                    })
                })]
            })]
        })
    }], 795687)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3412f8f3-145b-51c4-8558-fe66c42dd602")
    } catch (e) {}
}();
//# debugId=3412f8f3-145b-51c4-8558-fe66c42dd602