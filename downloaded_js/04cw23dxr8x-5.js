(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 740041, e => {
    "use strict";
    let t = {
        en: "en",
        fr: "fr",
        es: "es",
        de: "de",
        pt: "pt",
        ru: "ru",
        cn: "zh",
        ja: "ja",
        kr: "ko"
    };
    e.s(["defaultLocale", 0, "en", "localePrefix", 0, "as-needed", "localeToIETFTag", 0, t, "locales", 0, ["en", "fr", "es", "de", "pt", "ru", "cn", "ja", "kr"], "oneTrustLocaleOverrides", 0, t])
}, 825610, e => {
    "use strict";
    e.s(["trackingLocation", 0, {
        headerNavigationItem: "HeaderNavigationItem",
        headerSecondaryAction: "HeaderSecondaryAction",
        headerAction: "HeaderAction",
        headerDropdownMenuSectionAction: "HeaderDropdownMenuSectionAction",
        headerLogo: "HeaderLogo",
        headerNavigationLink: "HeaderNavigationLink",
        headerDropdownLink: "HeaderDropdownLink",
        headerMobileAction: "HeaderMobileAction",
        headerMobileSecondaryAction: "HeaderMobileSecondaryAction",
        headerMobilePanelLink: "HeaderMobilePanelLink",
        headerMobilePanelAction: "HeaderMobilePanelAction",
        headerMobilePanelListing: "HeaderMobilePanelListing",
        productFeatureCard: "ProductFeatureCard",
        productCardAction: "ProductCardAction",
        productCardFooterAction: "ProductCardFooterAction",
        pricingCardAction: "PricingCardAction",
        accordionAction: "AccordionAction",
        alertAction: "AlertAction",
        announcementBannerAction: "AnnouncementBannerAction",
        comparisonTableAction: "ComparisonTableAction",
        contentOverviewBack: "ContentOverviewBack",
        contentHeaderBack: "ContentHeaderBack",
        deluxeAnnouncementBannerAction: "DeluxeAnnouncementBannerAction",
        eventCardAction: "EventCardAction",
        featuredEventCardAction: "FeaturedEventCardAction",
        featureListAction: "FeatureListAction",
        fullWidthBlockAction: "FullWidthBlockAction",
        heroAction: "HeroAction",
        cardsAction: "CardsAction",
        uniteCard: "UniteCard",
        uniteCardSubscription: "UniteCardSubscription",
        uniteCards: "UniteCards",
        uniteCardsFilter: "UniteCardsFilter",
        uniteCardsAction: "UniteCardsAction",
        legalPageHeroAction: "LegalPageHeroAction",
        quickLinksAction: "QuickLinksAction",
        sectionTitleAction: "SectionTitleAction",
        spotlightAction: "SpotlightAction",
        bentoBoxCardAction: "BentoBoxCardAction",
        wayfinderCard: "WayfinderCard",
        wayfinderDismissButton: "WayfinderDismissButton",
        wayfinderDismissOutside: "WayfinderDismissOutside"
    }])
}, 7075, e => {
    "use strict";
    var t = e.i(918143),
        r = e.i(999721),
        n = e.i(200241),
        o = r["use".trim()],
        i = e.i(621757);

    function f(e) {
        let t;
        return ("object" == typeof e ? null == e.host && null == e.hostname : !/^[a-z]+:/i.test(e)) && (null == (t = "object" == typeof e ? e.pathname : e) || !!t.startsWith("/"))
    }

    function a(e, t) {
        return e.replace(RegExp(`^${t}`), "") || "/"
    }

    function u(e, t) {
        return t === e || t.startsWith(`${e}/`)
    }

    function s(e, t, r) {
        return "string" == typeof e ? e : e[t] || r
    }

    function l(e) {
        let t = function() {
                try {
                    return "true" === i.default.env._next_intl_trailing_slash
                } catch {
                    return !1
                }
            }(),
            [r, ...n] = e.split("#"),
            o = n.join("#"),
            f = r;
        if ("/" !== f) {
            let e = f.endsWith("/");
            t && !e ? f += "/" : !t && e && (f = f.slice(0, -1))
        }
        return o && (f += "#" + o), f
    }

    function c(e, t) {
        let r, n = l(e),
            o = l(t);
        return (r = n.replace(/\/\[\[(\.\.\.[^\]]+)\]\]/g, "(?:/(.*))?").replace(/\[\[(\.\.\.[^\]]+)\]\]/g, "(?:/(.*))?").replace(/\[(\.\.\.[^\]]+)\]/g, "(.+)").replace(/\[([^\]]+)\]/g, "([^/]+)"), RegExp(`^${r}$`)).test(o)
    }

    function h(e, t) {
        return "never" !== t.mode && t.prefixes?.[e] || "/" + e
    }

    function p(e) {
        return e.includes("[[...")
    }

    function d(e) {
        return e.includes("[...")
    }

    function y(e) {
        return e.includes("[")
    }

    function g(e, t) {
        let r = e.split("/"),
            n = t.split("/"),
            o = Math.max(r.length, n.length);
        for (let e = 0; e < o; e++) {
            let t = r[e],
                o = n[e];
            if (!t && o) return -1;
            if (t && !o) return 1;
            if (t || o) {
                if (!y(t) && y(o)) return -1;
                if (y(t) && !y(o)) return 1;
                if (!d(t) && d(o)) return -1;
                if (d(t) && !d(o)) return 1;
                if (!p(t) && p(o)) return -1;
                if (p(t) && !p(o)) return 1
            }
        }
        return 0
    }
    var m = e.i(761720);

    function b(e) {
        let t = new URLSearchParams;
        for (let [r, n] of Object.entries(e)) Array.isArray(n) ? n.forEach(e => {
            t.append(r, String(e))
        }) : t.set(r, String(n));
        return "?" + t.toString()
    }

    function v(e, t, r, n) {
        if (!e || n === r || null == n || !t) return;
        let o = function(e, t = window.location.pathname) {
                return "/" === e ? t : t.replace(e, "")
            }(t),
            {
                name: i,
                ...f
            } = e;
        f.path || (f.path = "" !== o ? o : "/");
        let a = `${i}=${n};`;
        for (let [e, t] of Object.entries(f)) a += `${"maxAge"===e?"max-age":e}`, "boolean" != typeof t && (a += "=" + t), a += ";";
        document.cookie = a
    }
    var A = e.i(210139),
        w = (0, r.forwardRef)(function({
            href: e,
            locale: r,
            localeCookie: o,
            onClick: i,
            prefetch: f,
            ...a
        }, u) {
            let s = (0, n.useLocale)(),
                l = null != r && r !== s,
                c = (0, t.usePathname)();
            return l && (f = !1), (0, A.jsx)(m.default, {
                ref: u,
                href: e,
                hrefLang: l ? r : void 0,
                onClick: function(e) {
                    v(o, c, s, r), i && i(e)
                },
                prefetch: f,
                ...a
            })
        }),
        E = e.i(740041);
    let {
        Link: x,
        redirect: B,
        usePathname: C,
        useRouter: L
    } = function(e) {
        let {
            Link: i,
            config: p,
            getPathname: d,
            ...y
        } = function(e, n) {
            var i, a, u;
            let c = {
                    ...i = n || {},
                    localePrefix: "object" == typeof(u = i.localePrefix) ? u : {
                        mode: u || "always"
                    },
                    localeCookie: !!((a = i.localeCookie) ?? 1) && {
                        name: "NEXT_LOCALE",
                        sameSite: "lax",
                        ..."object" == typeof a && a
                    },
                    localeDetection: i.localeDetection ?? !0,
                    alternateLinks: i.alternateLinks ?? !0
                },
                p = c.pathnames,
                d = (0, r.forwardRef)(function({
                    href: t,
                    locale: r,
                    ...n
                }, i) {
                    let a, u;
                    "object" == typeof t ? (a = t.pathname, u = t.params) : a = t;
                    let s = f(t),
                        l = e(),
                        h = "function" == typeof l.then ? o(l) : l,
                        d = s ? y({
                            locale: r || h,
                            href: null == p ? a : {
                                pathname: a,
                                params: u
                            },
                            forcePrefix: null != r || void 0
                        }) : a;
                    return (0, A.jsx)(w, {
                        ref: i,
                        href: "object" == typeof t ? {
                            ...t,
                            pathname: d
                        } : d,
                        locale: r,
                        localeCookie: c.localeCookie,
                        ...n
                    })
                });

            function y(e) {
                let t, {
                    forcePrefix: r,
                    href: n,
                    locale: o
                } = e;
                return null == p ? "object" == typeof n ? (t = n.pathname, n.query && (t += b(n.query))) : t = n : t = function({
                        pathname: e,
                        locale: t,
                        params: r,
                        pathnames: n,
                        query: o
                    }) {
                        function i(e) {
                            let i, f = n[e];
                            return f ? (i = s(f, t, e), r && Object.entries(r).forEach(([e, t]) => {
                                let r, n;
                                Array.isArray(t) ? (r = `(\\[)?\\[...${e}\\](\\])?`, n = t.map(e => String(e)).join("/")) : (r = `\\[${e}\\]`, n = String(t)), i = i.replace(RegExp(r, "g"), n)
                            }), i = new URL(i = i.replace(/\[\[\.\.\..+\]\]/g, ""), "http://l").pathname) : i = e, i = l(i), o && (i += b(o)), i
                        }
                        if ("string" == typeof e) return i(e);
                        {
                            let {
                                pathname: t,
                                ...r
                            } = e;
                            return {
                                ...r,
                                pathname: i(t)
                            }
                        }
                    }({
                        locale: o,
                        ..."string" == typeof n ? {
                            pathname: n
                        } : n,
                        pathnames: c.pathnames
                    }),
                    function(e, t, r, n) {
                        var o, i;
                        let a, u, {
                            mode: s
                        } = r.localePrefix;
                        if (void 0 !== n) a = n;
                        else if (f(e)) {
                            let e = r.domains?.find(e => e.locales.includes(t)),
                                n = e?.localePrefix || s;
                            "always" === n ? a = !0 : "as-needed" === n && (a = e ? t !== e.defaultLocale : t !== r.defaultLocale)
                        }
                        return a ? (o = h(t, r.localePrefix), i = e, u = o, /^\/(\?.*)?$/.test(i) && (i = i.slice(1)), u += i) : e
                    }(t, o, c, r)
            }

            function g(e) {
                return function(t, ...r) {
                    return e(y(t), ...r)
                }
            }
            return {
                config: c,
                Link: d,
                redirect: g(t.redirect),
                permanentRedirect: g(t.permanentRedirect),
                getPathname: y
            }
        }(n.useLocale, e);
        return {
            ...y,
            Link: i,
            usePathname: function() {
                let e, o, i = (e = (0, t.usePathname)(), o = (0, n.useLocale)(), (0, r.useMemo)(() => {
                        if (!e) return e;
                        let t = e,
                            r = h(o, p.localePrefix);
                        if (u(r, e)) t = a(e, r);
                        else if ("never" !== p.localePrefix.mode && p.localePrefix.prefixes) {
                            let r = "/" + o;
                            u(r, e) && (t = a(e, r))
                        }
                        return t
                    }, [p.localePrefix, o, e])),
                    f = (0, n.useLocale)();
                return (0, r.useMemo)(() => i && p.pathnames ? function(e, t, r) {
                    let n = Object.keys(r).sort(g),
                        o = decodeURI(t);
                    for (let t of n) {
                        let n = r[t];
                        if ("string" == typeof n) {
                            if (c(n, o)) return t
                        } else if (c(s(n, e, t), o)) return t
                    }
                    return t
                }(f, i, p.pathnames) : i, [f, i])
            },
            useRouter: function() {
                let e = (0, t.useRouter)(),
                    o = (0, n.useLocale)(),
                    i = (0, t.usePathname)();
                return (0, r.useMemo)(() => {
                    function t(e) {
                        return function(t, r) {
                            let {
                                locale: n,
                                ...f
                            } = r || {}, a = [d({
                                href: t,
                                locale: n || o,
                                forcePrefix: null != n || void 0
                            })];
                            Object.keys(f).length > 0 && a.push(f), v(p.localeCookie, i, o, n), e(...a)
                        }
                    }
                    return {
                        ...e,
                        push: t(e.push),
                        replace: t(e.replace),
                        prefetch: t(e.prefetch)
                    }
                }, [o, i, e])
            },
            getPathname: d
        }
    }({
        locales: E.locales,
        localePrefix: E.localePrefix,
        defaultLocale: E.defaultLocale
    });
    e.s(["Link", 0, x, "usePathname", 0, C], 7075)
}, 991567, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "BailoutToCSR", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(774573);

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
}, 842142, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "PreloadChunks", {
        enumerable: !0,
        get: function() {
            return u
        }
    });
    let n = e.r(210139),
        o = e.r(795816),
        i = e.r(156117),
        f = e.r(289512),
        a = e.r(282018);

    function u({
        moduleIds: e
    }) {
        if ("u" > typeof window) return null;
        let t = i.workAsyncStorage.getStore();
        if (void 0 === t) return null;
        let r = [];
        if (t.reactLoadableManifest && e) {
            let n = t.reactLoadableManifest;
            for (let t of e) {
                if (!n[t]) continue;
                let e = n[t].files;
                r.push(...e)
            }
        }
        if (0 === r.length) return null;
        let s = (0, a.getAssetTokenQuery)();
        return (0, n.jsx)(n.Fragment, {
            children: r.map(e => {
                let r = `${t.assetPrefix}/_next/${(0,f.encodeURIPath)(e)}${s}`;
                return e.endsWith(".css") ? (0, n.jsx)("link", {
                    precedence: "dynamic",
                    href: r,
                    rel: "stylesheet",
                    as: "style",
                    nonce: t.nonce
                }, e) : ((0, o.preload)(r, {
                    as: "script",
                    fetchPriority: "low",
                    nonce: t.nonce
                }), null)
            })
        })
    }
}, 930320, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let n = e.r(210139),
        o = e.r(999721),
        i = e.r(991567),
        f = e.r(842142);

    function a(e) {
        return {
            default: e && "default" in e ? e.default : e
        }
    }
    let u = {
            loader: () => Promise.resolve(a(() => null)),
            loading: null,
            ssr: !0
        },
        s = function(e) {
            let t = {
                    ...u,
                    ...e
                },
                r = (0, o.lazy)(() => t.loader().then(a)),
                s = t.loading;

            function l(e) {
                let a = s ? (0, n.jsx)(s, {
                        isLoading: !0,
                        pastDelay: !0,
                        error: null
                    }) : null,
                    u = !t.ssr || !!t.loading,
                    l = u ? o.Suspense : o.Fragment,
                    c = t.ssr ? (0, n.jsxs)(n.Fragment, {
                        children: ["u" < typeof window ? (0, n.jsx)(f.PreloadChunks, {
                            moduleIds: t.modules
                        }) : null, (0, n.jsx)(r, {
                            ...e
                        })]
                    }) : (0, n.jsx)(i.BailoutToCSR, {
                        reason: "next/dynamic",
                        children: (0, n.jsx)(r, {
                            ...e
                        })
                    });
                return (0, n.jsx)(l, {
                    ...u ? {
                        fallback: a
                    } : {},
                    children: c
                })
            }
            return l.displayName = "LoadableComponent", l
        }
}, 71871, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(481258)._(e.r(930320));

    function o(e, t) {
        let r = {};
        "function" == typeof e && (r.loader = e);
        let o = {
            ...r,
            ...t
        };
        return (0, n.default)({
            ...o,
            modules: o.loadableGenerated?.modules
        })
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 600634, e => {
    "use strict";
    var t = e.i(210139),
        r = e.i(783789);
    let n = () => e.A(932235).then(e => e.default);
    e.s(["default", 0, ({
        children: e
    }) => (0, t.jsx)(r.LazyMotion, {
        features: n,
        strict: !0,
        children: e
    })])
}, 766930, 777137, e => {
    "use strict";
    var t = e.i(600634),
        r = e.i(210139),
        n = e.i(783789);
    let o = () => e.A(734013).then(e => e.default);
    e.s(["default", 0, ({
        children: e
    }) => (0, r.jsx)(n.LazyMotion, {
        features: o,
        strict: !0,
        children: e
    })], 777137);
    let i = t.default;
    e.s(["default", 0, i], 766930)
}, 291158, e => {
    "use strict";
    let t = e.i(623295).default;
    e.s(["default", 0, t])
}, 181675, (e, t, r) => {
    var n = {
            675: function(e, t) {
                "use strict";
                t.byteLength = function(e) {
                    var t = u(e),
                        r = t[0],
                        n = t[1];
                    return (r + n) * 3 / 4 - n
                }, t.toByteArray = function(e) {
                    var t, r, i = u(e),
                        f = i[0],
                        a = i[1],
                        s = new o((f + a) * 3 / 4 - a),
                        l = 0,
                        c = a > 0 ? f - 4 : f;
                    for (r = 0; r < c; r += 4) t = n[e.charCodeAt(r)] << 18 | n[e.charCodeAt(r + 1)] << 12 | n[e.charCodeAt(r + 2)] << 6 | n[e.charCodeAt(r + 3)], s[l++] = t >> 16 & 255, s[l++] = t >> 8 & 255, s[l++] = 255 & t;
                    return 2 === a && (t = n[e.charCodeAt(r)] << 2 | n[e.charCodeAt(r + 1)] >> 4, s[l++] = 255 & t), 1 === a && (t = n[e.charCodeAt(r)] << 10 | n[e.charCodeAt(r + 1)] << 4 | n[e.charCodeAt(r + 2)] >> 2, s[l++] = t >> 8 & 255, s[l++] = 255 & t), s
                }, t.fromByteArray = function(e) {
                    for (var t, n = e.length, o = n % 3, i = [], f = 0, a = n - o; f < a; f += 16383) i.push(function(e, t, n) {
                        for (var o, i = [], f = t; f < n; f += 3) o = (e[f] << 16 & 0xff0000) + (e[f + 1] << 8 & 65280) + (255 & e[f + 2]), i.push(r[o >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]);
                        return i.join("")
                    }(e, f, f + 16383 > a ? a : f + 16383));
                    return 1 === o ? i.push(r[(t = e[n - 1]) >> 2] + r[t << 4 & 63] + "==") : 2 === o && i.push(r[(t = (e[n - 2] << 8) + e[n - 1]) >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="), i.join("")
                };
                for (var r = [], n = [], o = "u" > typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", f = 0, a = i.length; f < a; ++f) r[f] = i[f], n[i.charCodeAt(f)] = f;

                function u(e) {
                    var t = e.length;
                    if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                    var r = e.indexOf("="); - 1 === r && (r = t);
                    var n = r === t ? 0 : 4 - r % 4;
                    return [r, n]
                }
                n[45] = 62, n[95] = 63
            },
            72: function(e, t, r) {
                "use strict";
                var n = r(675),
                    o = r(783),
                    i = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

                function f(e) {
                    if (e > 0x7fffffff) throw RangeError('The value "' + e + '" is invalid for option "size"');
                    var t = new Uint8Array(e);
                    return Object.setPrototypeOf(t, a.prototype), t
                }

                function a(e, t, r) {
                    if ("number" == typeof e) {
                        if ("string" == typeof t) throw TypeError('The "string" argument must be of type string. Received type number');
                        return l(e)
                    }
                    return u(e, t, r)
                }

                function u(e, t, r) {
                    if ("string" == typeof e) {
                        var n = e,
                            o = t;
                        if (("string" != typeof o || "" === o) && (o = "utf8"), !a.isEncoding(o)) throw TypeError("Unknown encoding: " + o);
                        var i = 0 | p(n, o),
                            u = f(i),
                            s = u.write(n, o);
                        return s !== i && (u = u.slice(0, s)), u
                    }
                    if (ArrayBuffer.isView(e)) return c(e);
                    if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                    if (O(e, ArrayBuffer) || e && O(e.buffer, ArrayBuffer) || "u" > typeof SharedArrayBuffer && (O(e, SharedArrayBuffer) || e && O(e.buffer, SharedArrayBuffer))) return function(e, t, r) {
                        var n;
                        if (t < 0 || e.byteLength < t) throw RangeError('"offset" is outside of buffer bounds');
                        if (e.byteLength < t + (r || 0)) throw RangeError('"length" is outside of buffer bounds');
                        return Object.setPrototypeOf(n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r), a.prototype), n
                    }(e, t, r);
                    if ("number" == typeof e) throw TypeError('The "value" argument must not be of type number. Received type number');
                    var l = e.valueOf && e.valueOf();
                    if (null != l && l !== e) return a.from(l, t, r);
                    var d = function(e) {
                        if (a.isBuffer(e)) {
                            var t = 0 | h(e.length),
                                r = f(t);
                            return 0 === r.length || e.copy(r, 0, 0, t), r
                        }
                        return void 0 !== e.length ? "number" != typeof e.length || function(e) {
                            return e != e
                        }(e.length) ? f(0) : c(e) : "Buffer" === e.type && Array.isArray(e.data) ? c(e.data) : void 0
                    }(e);
                    if (d) return d;
                    if ("u" > typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return a.from(e[Symbol.toPrimitive]("string"), t, r);
                    throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
                }

                function s(e) {
                    if ("number" != typeof e) throw TypeError('"size" argument must be of type number');
                    if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"')
                }

                function l(e) {
                    return s(e), f(e < 0 ? 0 : 0 | h(e))
                }

                function c(e) {
                    for (var t = e.length < 0 ? 0 : 0 | h(e.length), r = f(t), n = 0; n < t; n += 1) r[n] = 255 & e[n];
                    return r
                }
                t.Buffer = a, t.SlowBuffer = function(e) {
                    return +e != e && (e = 0), a.alloc(+e)
                }, t.INSPECT_MAX_BYTES = 50, t.kMaxLength = 0x7fffffff, a.TYPED_ARRAY_SUPPORT = function() {
                    try {
                        var e = new Uint8Array(1),
                            t = {
                                foo: function() {
                                    return 42
                                }
                            };
                        return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
                    } catch (e) {
                        return !1
                    }
                }(), !a.TYPED_ARRAY_SUPPORT && "u" > typeof console && "function" == typeof console.error && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(a.prototype, "parent", {
                    enumerable: !0,
                    get: function() {
                        if (a.isBuffer(this)) return this.buffer
                    }
                }), Object.defineProperty(a.prototype, "offset", {
                    enumerable: !0,
                    get: function() {
                        if (a.isBuffer(this)) return this.byteOffset
                    }
                }), a.poolSize = 8192, a.from = function(e, t, r) {
                    return u(e, t, r)
                }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array), a.alloc = function(e, t, r) {
                    return (s(e), e <= 0) ? f(e) : void 0 !== t ? "string" == typeof r ? f(e).fill(t, r) : f(e).fill(t) : f(e)
                }, a.allocUnsafe = function(e) {
                    return l(e)
                }, a.allocUnsafeSlow = function(e) {
                    return l(e)
                };

                function h(e) {
                    if (e >= 0x7fffffff) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                    return 0 | e
                }

                function p(e, t) {
                    if (a.isBuffer(e)) return e.length;
                    if (ArrayBuffer.isView(e) || O(e, ArrayBuffer)) return e.byteLength;
                    if ("string" != typeof e) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                    var r = e.length,
                        n = arguments.length > 2 && !0 === arguments[2];
                    if (!n && 0 === r) return 0;
                    for (var o = !1;;) switch (t) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return r;
                        case "utf8":
                        case "utf-8":
                            return C(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * r;
                        case "hex":
                            return r >>> 1;
                        case "base64":
                            return P(e).length;
                        default:
                            if (o) return n ? -1 : C(e).length;
                            t = ("" + t).toLowerCase(), o = !0
                    }
                }

                function d(e, t, r) {
                    var o, i, f, a = !1;
                    if ((void 0 === t || t < 0) && (t = 0), t > this.length || ((void 0 === r || r > this.length) && (r = this.length), r <= 0 || (r >>>= 0) <= (t >>>= 0))) return "";
                    for (e || (e = "utf8");;) switch (e) {
                        case "hex":
                            return function(e, t, r) {
                                var n = e.length;
                                (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                                for (var o = "", i = t; i < r; ++i) o += T[e[i]];
                                return o
                            }(this, t, r);
                        case "utf8":
                        case "utf-8":
                            return b(this, t, r);
                        case "ascii":
                            return function(e, t, r) {
                                var n = "";
                                r = Math.min(e.length, r);
                                for (var o = t; o < r; ++o) n += String.fromCharCode(127 & e[o]);
                                return n
                            }(this, t, r);
                        case "latin1":
                        case "binary":
                            return function(e, t, r) {
                                var n = "";
                                r = Math.min(e.length, r);
                                for (var o = t; o < r; ++o) n += String.fromCharCode(e[o]);
                                return n
                            }(this, t, r);
                        case "base64":
                            return o = this, i = t, f = r, 0 === i && f === o.length ? n.fromByteArray(o) : n.fromByteArray(o.slice(i, f));
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return function(e, t, r) {
                                for (var n = e.slice(t, r), o = "", i = 0; i < n.length; i += 2) o += String.fromCharCode(n[i] + 256 * n[i + 1]);
                                return o
                            }(this, t, r);
                        default:
                            if (a) throw TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), a = !0
                    }
                }

                function y(e, t, r) {
                    var n = e[t];
                    e[t] = e[r], e[r] = n
                }

                function g(e, t, r, n, o) {
                    var i;
                    if (0 === e.length) return -1;
                    if ("string" == typeof r ? (n = r, r = 0) : r > 0x7fffffff ? r = 0x7fffffff : r < -0x80000000 && (r = -0x80000000), (i = r *= 1) != i && (r = o ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length)
                        if (o) return -1;
                        else r = e.length - 1;
                    else if (r < 0)
                        if (!o) return -1;
                        else r = 0;
                    if ("string" == typeof t && (t = a.from(t, n)), a.isBuffer(t)) return 0 === t.length ? -1 : m(e, t, r, n, o);
                    if ("number" == typeof t) {
                        if (t &= 255, "function" == typeof Uint8Array.prototype.indexOf)
                            if (o) return Uint8Array.prototype.indexOf.call(e, t, r);
                            else return Uint8Array.prototype.lastIndexOf.call(e, t, r);
                        return m(e, [t], r, n, o)
                    }
                    throw TypeError("val must be string, number or Buffer")
                }

                function m(e, t, r, n, o) {
                    var i, f = 1,
                        a = e.length,
                        u = t.length;
                    if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                        if (e.length < 2 || t.length < 2) return -1;
                        f = 2, a /= 2, u /= 2, r /= 2
                    }

                    function s(e, t) {
                        return 1 === f ? e[t] : e.readUInt16BE(t * f)
                    }
                    if (o) {
                        var l = -1;
                        for (i = r; i < a; i++)
                            if (s(e, i) === s(t, -1 === l ? 0 : i - l)) {
                                if (-1 === l && (l = i), i - l + 1 === u) return l * f
                            } else - 1 !== l && (i -= i - l), l = -1
                    } else
                        for (r + u > a && (r = a - u), i = r; i >= 0; i--) {
                            for (var c = !0, h = 0; h < u; h++)
                                if (s(e, i + h) !== s(t, h)) {
                                    c = !1;
                                    break
                                } if (c) return i
                        }
                    return -1
                }
                a.isBuffer = function(e) {
                    return null != e && !0 === e._isBuffer && e !== a.prototype
                }, a.compare = function(e, t) {
                    if (O(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), O(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), !a.isBuffer(e) || !a.isBuffer(t)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                    if (e === t) return 0;
                    for (var r = e.length, n = t.length, o = 0, i = Math.min(r, n); o < i; ++o)
                        if (e[o] !== t[o]) {
                            r = e[o], n = t[o];
                            break
                        } return r < n ? -1 : +(n < r)
                }, a.isEncoding = function(e) {
                    switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, a.concat = function(e, t) {
                    if (!Array.isArray(e)) throw TypeError('"list" argument must be an Array of Buffers');
                    if (0 === e.length) return a.alloc(0);
                    if (void 0 === t)
                        for (r = 0, t = 0; r < e.length; ++r) t += e[r].length;
                    var r, n = a.allocUnsafe(t),
                        o = 0;
                    for (r = 0; r < e.length; ++r) {
                        var i = e[r];
                        if (O(i, Uint8Array) && (i = a.from(i)), !a.isBuffer(i)) throw TypeError('"list" argument must be an Array of Buffers');
                        i.copy(n, o), o += i.length
                    }
                    return n
                }, a.byteLength = p, a.prototype._isBuffer = !0, a.prototype.swap16 = function() {
                    var e = this.length;
                    if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                    for (var t = 0; t < e; t += 2) y(this, t, t + 1);
                    return this
                }, a.prototype.swap32 = function() {
                    var e = this.length;
                    if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                    for (var t = 0; t < e; t += 4) y(this, t, t + 3), y(this, t + 1, t + 2);
                    return this
                }, a.prototype.swap64 = function() {
                    var e = this.length;
                    if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                    for (var t = 0; t < e; t += 8) y(this, t, t + 7), y(this, t + 1, t + 6), y(this, t + 2, t + 5), y(this, t + 3, t + 4);
                    return this
                }, a.prototype.toString = function() {
                    var e = this.length;
                    return 0 === e ? "" : 0 == arguments.length ? b(this, 0, e) : d.apply(this, arguments)
                }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(e) {
                    if (!a.isBuffer(e)) throw TypeError("Argument must be a Buffer");
                    return this === e || 0 === a.compare(this, e)
                }, a.prototype.inspect = function() {
                    var e = "",
                        r = t.INSPECT_MAX_BYTES;
                    return e = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (e += " ... "), "<Buffer " + e + ">"
                }, i && (a.prototype[i] = a.prototype.inspect), a.prototype.compare = function(e, t, r, n, o) {
                    if (O(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), !a.isBuffer(e)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                    if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), t < 0 || r > e.length || n < 0 || o > this.length) throw RangeError("out of range index");
                    if (n >= o && t >= r) return 0;
                    if (n >= o) return -1;
                    if (t >= r) return 1;
                    if (t >>>= 0, r >>>= 0, n >>>= 0, o >>>= 0, this === e) return 0;
                    for (var i = o - n, f = r - t, u = Math.min(i, f), s = this.slice(n, o), l = e.slice(t, r), c = 0; c < u; ++c)
                        if (s[c] !== l[c]) {
                            i = s[c], f = l[c];
                            break
                        } return i < f ? -1 : +(f < i)
                }, a.prototype.includes = function(e, t, r) {
                    return -1 !== this.indexOf(e, t, r)
                }, a.prototype.indexOf = function(e, t, r) {
                    return g(this, e, t, r, !0)
                }, a.prototype.lastIndexOf = function(e, t, r) {
                    return g(this, e, t, r, !1)
                };

                function b(e, t, r) {
                    r = Math.min(e.length, r);
                    for (var n = [], o = t; o < r;) {
                        var i, f, a, u, s = e[o],
                            l = null,
                            c = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
                        if (o + c <= r) switch (c) {
                            case 1:
                                s < 128 && (l = s);
                                break;
                            case 2:
                                (192 & (i = e[o + 1])) == 128 && (u = (31 & s) << 6 | 63 & i) > 127 && (l = u);
                                break;
                            case 3:
                                i = e[o + 1], f = e[o + 2], (192 & i) == 128 && (192 & f) == 128 && (u = (15 & s) << 12 | (63 & i) << 6 | 63 & f) > 2047 && (u < 55296 || u > 57343) && (l = u);
                                break;
                            case 4:
                                i = e[o + 1], f = e[o + 2], a = e[o + 3], (192 & i) == 128 && (192 & f) == 128 && (192 & a) == 128 && (u = (15 & s) << 18 | (63 & i) << 12 | (63 & f) << 6 | 63 & a) > 65535 && u < 1114112 && (l = u)
                        }
                        null === l ? (l = 65533, c = 1) : l > 65535 && (l -= 65536, n.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), n.push(l), o += c
                    }
                    var h = n,
                        p = h.length;
                    if (p <= 4096) return String.fromCharCode.apply(String, h);
                    for (var d = "", y = 0; y < p;) d += String.fromCharCode.apply(String, h.slice(y, y += 4096));
                    return d
                }

                function v(e, t, r) {
                    if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
                    if (e + t > r) throw RangeError("Trying to access beyond buffer length")
                }

                function A(e, t, r, n, o, i) {
                    if (!a.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
                    if (t > o || t < i) throw RangeError('"value" argument is out of bounds');
                    if (r + n > e.length) throw RangeError("Index out of range")
                }

                function w(e, t, r, n, o, i) {
                    if (r + n > e.length || r < 0) throw RangeError("Index out of range")
                }

                function E(e, t, r, n, i) {
                    return t *= 1, r >>>= 0, i || w(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), o.write(e, t, r, n, 23, 4), r + 4
                }

                function x(e, t, r, n, i) {
                    return t *= 1, r >>>= 0, i || w(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), o.write(e, t, r, n, 52, 8), r + 8
                }
                a.prototype.write = function(e, t, r, n) {
                    if (void 0 === t) n = "utf8", r = this.length, t = 0;
                    else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;
                    else if (isFinite(t)) t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
                    else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    var o, i, f, a, u, s, l, c, h = this.length - t;
                    if ((void 0 === r || r > h) && (r = h), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw RangeError("Attempt to write outside buffer bounds");
                    n || (n = "utf8");
                    for (var p = !1;;) switch (n) {
                        case "hex":
                            return function(e, t, r, n) {
                                r = Number(r) || 0;
                                var o = e.length - r;
                                n ? (n = Number(n)) > o && (n = o) : n = o;
                                var i = t.length;
                                n > i / 2 && (n = i / 2);
                                for (var f = 0; f < n; ++f) {
                                    var a, u = parseInt(t.substr(2 * f, 2), 16);
                                    if ((a = u) != a) break;
                                    e[r + f] = u
                                }
                                return f
                            }(this, e, t, r);
                        case "utf8":
                        case "utf-8":
                            return o = t, i = r, k(C(e, this.length - o), this, o, i);
                        case "ascii":
                            return f = t, a = r, k(L(e), this, f, a);
                        case "latin1":
                        case "binary":
                            return function(e, t, r, n) {
                                return k(L(t), e, r, n)
                            }(this, e, t, r);
                        case "base64":
                            return u = t, s = r, k(P(e), this, u, s);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return l = t, c = r, k(function(e, t) {
                                for (var r, n, o = [], i = 0; i < e.length && !((t -= 2) < 0); ++i) n = (r = e.charCodeAt(i)) >> 8, o.push(r % 256), o.push(n);
                                return o
                            }(e, this.length - l), this, l, c);
                        default:
                            if (p) throw TypeError("Unknown encoding: " + n);
                            n = ("" + n).toLowerCase(), p = !0
                    }
                }, a.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                }, a.prototype.slice = function(e, t) {
                    var r = this.length;
                    e = ~~e, t = void 0 === t ? r : ~~t, e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e);
                    var n = this.subarray(e, t);
                    return Object.setPrototypeOf(n, a.prototype), n
                }, a.prototype.readUIntLE = function(e, t, r) {
                    e >>>= 0, t >>>= 0, r || v(e, t, this.length);
                    for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256);) n += this[e + i] * o;
                    return n
                }, a.prototype.readUIntBE = function(e, t, r) {
                    e >>>= 0, t >>>= 0, r || v(e, t, this.length);
                    for (var n = this[e + --t], o = 1; t > 0 && (o *= 256);) n += this[e + --t] * o;
                    return n
                }, a.prototype.readUInt8 = function(e, t) {
                    return e >>>= 0, t || v(e, 1, this.length), this[e]
                }, a.prototype.readUInt16LE = function(e, t) {
                    return e >>>= 0, t || v(e, 2, this.length), this[e] | this[e + 1] << 8
                }, a.prototype.readUInt16BE = function(e, t) {
                    return e >>>= 0, t || v(e, 2, this.length), this[e] << 8 | this[e + 1]
                }, a.prototype.readUInt32LE = function(e, t) {
                    return e >>>= 0, t || v(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 0x1000000 * this[e + 3]
                }, a.prototype.readUInt32BE = function(e, t) {
                    return e >>>= 0, t || v(e, 4, this.length), 0x1000000 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                }, a.prototype.readIntLE = function(e, t, r) {
                    e >>>= 0, t >>>= 0, r || v(e, t, this.length);
                    for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256);) n += this[e + i] * o;
                    return n >= (o *= 128) && (n -= Math.pow(2, 8 * t)), n
                }, a.prototype.readIntBE = function(e, t, r) {
                    e >>>= 0, t >>>= 0, r || v(e, t, this.length);
                    for (var n = t, o = 1, i = this[e + --n]; n > 0 && (o *= 256);) i += this[e + --n] * o;
                    return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i
                }, a.prototype.readInt8 = function(e, t) {
                    return (e >>>= 0, t || v(e, 1, this.length), 128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e]
                }, a.prototype.readInt16LE = function(e, t) {
                    e >>>= 0, t || v(e, 2, this.length);
                    var r = this[e] | this[e + 1] << 8;
                    return 32768 & r ? 0xffff0000 | r : r
                }, a.prototype.readInt16BE = function(e, t) {
                    e >>>= 0, t || v(e, 2, this.length);
                    var r = this[e + 1] | this[e] << 8;
                    return 32768 & r ? 0xffff0000 | r : r
                }, a.prototype.readInt32LE = function(e, t) {
                    return e >>>= 0, t || v(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                }, a.prototype.readInt32BE = function(e, t) {
                    return e >>>= 0, t || v(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                }, a.prototype.readFloatLE = function(e, t) {
                    return e >>>= 0, t || v(e, 4, this.length), o.read(this, e, !0, 23, 4)
                }, a.prototype.readFloatBE = function(e, t) {
                    return e >>>= 0, t || v(e, 4, this.length), o.read(this, e, !1, 23, 4)
                }, a.prototype.readDoubleLE = function(e, t) {
                    return e >>>= 0, t || v(e, 8, this.length), o.read(this, e, !0, 52, 8)
                }, a.prototype.readDoubleBE = function(e, t) {
                    return e >>>= 0, t || v(e, 8, this.length), o.read(this, e, !1, 52, 8)
                }, a.prototype.writeUIntLE = function(e, t, r, n) {
                    if (e *= 1, t >>>= 0, r >>>= 0, !n) {
                        var o = Math.pow(2, 8 * r) - 1;
                        A(this, e, t, r, o, 0)
                    }
                    var i = 1,
                        f = 0;
                    for (this[t] = 255 & e; ++f < r && (i *= 256);) this[t + f] = e / i & 255;
                    return t + r
                }, a.prototype.writeUIntBE = function(e, t, r, n) {
                    if (e *= 1, t >>>= 0, r >>>= 0, !n) {
                        var o = Math.pow(2, 8 * r) - 1;
                        A(this, e, t, r, o, 0)
                    }
                    var i = r - 1,
                        f = 1;
                    for (this[t + i] = 255 & e; --i >= 0 && (f *= 256);) this[t + i] = e / f & 255;
                    return t + r
                }, a.prototype.writeUInt8 = function(e, t, r) {
                    return e *= 1, t >>>= 0, r || A(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
                }, a.prototype.writeUInt16LE = function(e, t, r) {
                    return e *= 1, t >>>= 0, r || A(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                }, a.prototype.writeUInt16BE = function(e, t, r) {
                    return e *= 1, t >>>= 0, r || A(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                }, a.prototype.writeUInt32LE = function(e, t, r) {
                    return e *= 1, t >>>= 0, r || A(this, e, t, 4, 0xffffffff, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
                }, a.prototype.writeUInt32BE = function(e, t, r) {
                    return e *= 1, t >>>= 0, r || A(this, e, t, 4, 0xffffffff, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                }, a.prototype.writeIntLE = function(e, t, r, n) {
                    if (e *= 1, t >>>= 0, !n) {
                        var o = Math.pow(2, 8 * r - 1);
                        A(this, e, t, r, o - 1, -o)
                    }
                    var i = 0,
                        f = 1,
                        a = 0;
                    for (this[t] = 255 & e; ++i < r && (f *= 256);) e < 0 && 0 === a && 0 !== this[t + i - 1] && (a = 1), this[t + i] = (e / f | 0) - a & 255;
                    return t + r
                }, a.prototype.writeIntBE = function(e, t, r, n) {
                    if (e *= 1, t >>>= 0, !n) {
                        var o = Math.pow(2, 8 * r - 1);
                        A(this, e, t, r, o - 1, -o)
                    }
                    var i = r - 1,
                        f = 1,
                        a = 0;
                    for (this[t + i] = 255 & e; --i >= 0 && (f *= 256);) e < 0 && 0 === a && 0 !== this[t + i + 1] && (a = 1), this[t + i] = (e / f | 0) - a & 255;
                    return t + r
                }, a.prototype.writeInt8 = function(e, t, r) {
                    return e *= 1, t >>>= 0, r || A(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
                }, a.prototype.writeInt16LE = function(e, t, r) {
                    return e *= 1, t >>>= 0, r || A(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                }, a.prototype.writeInt16BE = function(e, t, r) {
                    return e *= 1, t >>>= 0, r || A(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                }, a.prototype.writeInt32LE = function(e, t, r) {
                    return e *= 1, t >>>= 0, r || A(this, e, t, 4, 0x7fffffff, -0x80000000), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
                }, a.prototype.writeInt32BE = function(e, t, r) {
                    return e *= 1, t >>>= 0, r || A(this, e, t, 4, 0x7fffffff, -0x80000000), e < 0 && (e = 0xffffffff + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                }, a.prototype.writeFloatLE = function(e, t, r) {
                    return E(this, e, t, !0, r)
                }, a.prototype.writeFloatBE = function(e, t, r) {
                    return E(this, e, t, !1, r)
                }, a.prototype.writeDoubleLE = function(e, t, r) {
                    return x(this, e, t, !0, r)
                }, a.prototype.writeDoubleBE = function(e, t, r) {
                    return x(this, e, t, !1, r)
                }, a.prototype.copy = function(e, t, r, n) {
                    if (!a.isBuffer(e)) throw TypeError("argument should be a Buffer");
                    if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r || 0 === e.length || 0 === this.length) return 0;
                    if (t < 0) throw RangeError("targetStart out of bounds");
                    if (r < 0 || r >= this.length) throw RangeError("Index out of range");
                    if (n < 0) throw RangeError("sourceEnd out of bounds");
                    n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                    var o = n - r;
                    if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, r, n);
                    else if (this === e && r < t && t < n)
                        for (var i = o - 1; i >= 0; --i) e[i + t] = this[i + r];
                    else Uint8Array.prototype.set.call(e, this.subarray(r, n), t);
                    return o
                }, a.prototype.fill = function(e, t, r, n) {
                    if ("string" == typeof e) {
                        if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw TypeError("encoding must be a string");
                        if ("string" == typeof n && !a.isEncoding(n)) throw TypeError("Unknown encoding: " + n);
                        if (1 === e.length) {
                            var o, i = e.charCodeAt(0);
                            ("utf8" === n && i < 128 || "latin1" === n) && (e = i)
                        }
                    } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
                    if (t < 0 || this.length < t || this.length < r) throw RangeError("Out of range index");
                    if (r <= t) return this;
                    if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
                        for (o = t; o < r; ++o) this[o] = e;
                    else {
                        var f = a.isBuffer(e) ? e : a.from(e, n),
                            u = f.length;
                        if (0 === u) throw TypeError('The value "' + e + '" is invalid for argument "value"');
                        for (o = 0; o < r - t; ++o) this[o + t] = f[o % u]
                    }
                    return this
                };
                var B = /[^+/0-9A-Za-z-_]/g;

                function C(e, t) {
                    t = t || 1 / 0;
                    for (var r, n = e.length, o = null, i = [], f = 0; f < n; ++f) {
                        if ((r = e.charCodeAt(f)) > 55295 && r < 57344) {
                            if (!o) {
                                if (r > 56319 || f + 1 === n) {
                                    (t -= 3) > -1 && i.push(239, 191, 189);
                                    continue
                                }
                                o = r;
                                continue
                            }
                            if (r < 56320) {
                                (t -= 3) > -1 && i.push(239, 191, 189), o = r;
                                continue
                            }
                            r = (o - 55296 << 10 | r - 56320) + 65536
                        } else o && (t -= 3) > -1 && i.push(239, 191, 189);
                        if (o = null, r < 128) {
                            if ((t -= 1) < 0) break;
                            i.push(r)
                        } else if (r < 2048) {
                            if ((t -= 2) < 0) break;
                            i.push(r >> 6 | 192, 63 & r | 128)
                        } else if (r < 65536) {
                            if ((t -= 3) < 0) break;
                            i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                        } else if (r < 1114112) {
                            if ((t -= 4) < 0) break;
                            i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                        } else throw Error("Invalid code point")
                    }
                    return i
                }

                function L(e) {
                    for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                    return t
                }

                function P(e) {
                    return n.toByteArray(function(e) {
                        if ((e = (e = e.split("=")[0]).trim().replace(B, "")).length < 2) return "";
                        for (; e.length % 4 != 0;) e += "=";
                        return e
                    }(e))
                }

                function k(e, t, r, n) {
                    for (var o = 0; o < n && !(o + r >= t.length) && !(o >= e.length); ++o) t[o + r] = e[o];
                    return o
                }

                function O(e, t) {
                    return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
                }
                var T = function() {
                    for (var e = "0123456789abcdef", t = Array(256), r = 0; r < 16; ++r)
                        for (var n = 16 * r, o = 0; o < 16; ++o) t[n + o] = e[r] + e[o];
                    return t
                }()
            },
            783: function(e, t) {
                t.read = function(e, t, r, n, o) {
                    var i, f, a = 8 * o - n - 1,
                        u = (1 << a) - 1,
                        s = u >> 1,
                        l = -7,
                        c = r ? o - 1 : 0,
                        h = r ? -1 : 1,
                        p = e[t + c];
                    for (c += h, i = p & (1 << -l) - 1, p >>= -l, l += a; l > 0; i = 256 * i + e[t + c], c += h, l -= 8);
                    for (f = i & (1 << -l) - 1, i >>= -l, l += n; l > 0; f = 256 * f + e[t + c], c += h, l -= 8);
                    if (0 === i) i = 1 - s;
                    else {
                        if (i === u) return f ? NaN : 1 / 0 * (p ? -1 : 1);
                        f += Math.pow(2, n), i -= s
                    }
                    return (p ? -1 : 1) * f * Math.pow(2, i - n)
                }, t.write = function(e, t, r, n, o, i) {
                    var f, a, u, s = 8 * i - o - 1,
                        l = (1 << s) - 1,
                        c = l >> 1,
                        h = 5960464477539062e-23 * (23 === o),
                        p = n ? 0 : i - 1,
                        d = n ? 1 : -1,
                        y = +(t < 0 || 0 === t && 1 / t < 0);
                    for (isNaN(t = Math.abs(t)) || t === 1 / 0 ? (a = +!!isNaN(t), f = l) : (f = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -f)) < 1 && (f--, u *= 2), f + c >= 1 ? t += h / u : t += h * Math.pow(2, 1 - c), t * u >= 2 && (f++, u /= 2), f + c >= l ? (a = 0, f = l) : f + c >= 1 ? (a = (t * u - 1) * Math.pow(2, o), f += c) : (a = t * Math.pow(2, c - 1) * Math.pow(2, o), f = 0)); o >= 8; e[r + p] = 255 & a, p += d, a /= 256, o -= 8);
                    for (f = f << o | a, s += o; s > 0; e[r + p] = 255 & f, p += d, f /= 256, s -= 8);
                    e[r + p - d] |= 128 * y
                }
            }
        },
        o = {};

    function i(e) {
        var t = o[e];
        if (void 0 !== t) return t.exports;
        var r = o[e] = {
                exports: {}
            },
            f = !0;
        try {
            n[e](r, r.exports, i), f = !1
        } finally {
            f && delete o[e]
        }
        return r.exports
    }
    i.ab = "/ROOT/node_modules/.pnpm/next@16.2.6_@babel+core@7.28.4_@opentelemetry+api@1.9.0_@playwright+test@1.56.1_babel-p_b72cec2415733c48a7449cac7cc4745f/node_modules/next/dist/compiled/buffer/", t.exports = i(72)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "db61901d-ea98-5560-9b36-43764da45075")
    } catch (e) {}
}();
//# debugId=db61901d-ea98-5560-9b36-43764da45075