(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 154038, e => {
    e.q("/_next/static/media/unity-fallback-1.05foy1lz0fhig.jpg")
}, 594333, e => {
    e.q("/_next/static/media/unity-fallback-2.0od666pl17uax.jpg")
}, 522500, e => {
    e.q("/_next/static/media/unity-fallback-3.01ai2jdgw500k.jpg")
}, 239145, (e, t, a) => {
    t.exports = function(e, t) {
        for (var a = -1, r = null == e ? 0 : e.length, l = Array(r); ++a < r;) l[a] = t(e[a], a, e);
        return l
    }
}, 873021, (e, t, a) => {
    var r = e.r(328042),
        l = e.r(239145),
        i = e.r(778116),
        n = e.r(692558),
        s = 1 / 0,
        o = r ? r.prototype : void 0,
        d = o ? o.toString : void 0;
    t.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (i(t)) return l(t, e) + "";
        if (n(t)) return d ? d.call(t) : "";
        var a = t + "";
        return "0" == a && 1 / t == -s ? "-0" : a
    }
}, 553050, (e, t, a) => {
    var r = e.r(873021);
    t.exports = function(e) {
        return null == e ? "" : r(e)
    }
}, 343346, (e, t, a) => {
    t.exports = function(e, t) {
        return e === t || e != e && t != t
    }
}, 647562, (e, t, a) => {
    var r = e.r(778116),
        l = e.r(692558),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        n = /^\w*$/;
    t.exports = function(e, t) {
        if (r(e)) return !1;
        var a = typeof e;
        return !!("number" == a || "symbol" == a || "boolean" == a || null == e || l(e)) || n.test(e) || !i.test(e) || null != t && e in Object(t)
    }
}, 977902, (e, t, a) => {
    t.exports = e.r(581511)(Object, "create")
}, 708867, (e, t, a) => {
    var r = e.r(977902);
    t.exports = function() {
        this.__data__ = r ? r(null) : {}, this.size = 0
    }
}, 447265, (e, t, a) => {
    t.exports = function(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= !!t, t
    }
}, 150095, (e, t, a) => {
    var r = e.r(977902),
        l = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        var t = this.__data__;
        if (r) {
            var a = t[e];
            return "__lodash_hash_undefined__" === a ? void 0 : a
        }
        return l.call(t, e) ? t[e] : void 0
    }
}, 884942, (e, t, a) => {
    var r = e.r(977902),
        l = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        var t = this.__data__;
        return r ? void 0 !== t[e] : l.call(t, e)
    }
}, 985902, (e, t, a) => {
    var r = e.r(977902);
    t.exports = function(e, t) {
        var a = this.__data__;
        return this.size += +!this.has(e), a[e] = r && void 0 === t ? "__lodash_hash_undefined__" : t, this
    }
}, 298435, (e, t, a) => {
    var r = e.r(708867),
        l = e.r(447265),
        i = e.r(150095),
        n = e.r(884942),
        s = e.r(985902);

    function o(e) {
        var t = -1,
            a = null == e ? 0 : e.length;
        for (this.clear(); ++t < a;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    o.prototype.clear = r, o.prototype.delete = l, o.prototype.get = i, o.prototype.has = n, o.prototype.set = s, t.exports = o
}, 765776, (e, t, a) => {
    t.exports = function() {
        this.__data__ = [], this.size = 0
    }
}, 641664, (e, t, a) => {
    var r = e.r(343346);
    t.exports = function(e, t) {
        for (var a = e.length; a--;)
            if (r(e[a][0], t)) return a;
        return -1
    }
}, 915386, (e, t, a) => {
    var r = e.r(641664),
        l = Array.prototype.splice;
    t.exports = function(e) {
        var t = this.__data__,
            a = r(t, e);
        return !(a < 0) && (a == t.length - 1 ? t.pop() : l.call(t, a, 1), --this.size, !0)
    }
}, 857624, (e, t, a) => {
    var r = e.r(641664);
    t.exports = function(e) {
        var t = this.__data__,
            a = r(t, e);
        return a < 0 ? void 0 : t[a][1]
    }
}, 219301, (e, t, a) => {
    var r = e.r(641664);
    t.exports = function(e) {
        return r(this.__data__, e) > -1
    }
}, 682947, (e, t, a) => {
    var r = e.r(641664);
    t.exports = function(e, t) {
        var a = this.__data__,
            l = r(a, e);
        return l < 0 ? (++this.size, a.push([e, t])) : a[l][1] = t, this
    }
}, 990543, (e, t, a) => {
    var r = e.r(765776),
        l = e.r(915386),
        i = e.r(857624),
        n = e.r(219301),
        s = e.r(682947);

    function o(e) {
        var t = -1,
            a = null == e ? 0 : e.length;
        for (this.clear(); ++t < a;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    o.prototype.clear = r, o.prototype.delete = l, o.prototype.get = i, o.prototype.has = n, o.prototype.set = s, t.exports = o
}, 817416, (e, t, a) => {
    var r = e.r(298435),
        l = e.r(990543),
        i = e.r(764138);
    t.exports = function() {
        this.size = 0, this.__data__ = {
            hash: new r,
            map: new(i || l),
            string: new r
        }
    }
}, 365867, (e, t, a) => {
    t.exports = function(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    }
}, 476501, (e, t, a) => {
    var r = e.r(365867);
    t.exports = function(e, t) {
        var a = e.__data__;
        return r(t) ? a["string" == typeof t ? "string" : "hash"] : a.map
    }
}, 792520, (e, t, a) => {
    var r = e.r(476501);
    t.exports = function(e) {
        var t = r(this, e).delete(e);
        return this.size -= !!t, t
    }
}, 349966, (e, t, a) => {
    var r = e.r(476501);
    t.exports = function(e) {
        return r(this, e).get(e)
    }
}, 649884, (e, t, a) => {
    var r = e.r(476501);
    t.exports = function(e) {
        return r(this, e).has(e)
    }
}, 884711, (e, t, a) => {
    var r = e.r(476501);
    t.exports = function(e, t) {
        var a = r(this, e),
            l = a.size;
        return a.set(e, t), this.size += +(a.size != l), this
    }
}, 158774, (e, t, a) => {
    var r = e.r(817416),
        l = e.r(792520),
        i = e.r(349966),
        n = e.r(649884),
        s = e.r(884711);

    function o(e) {
        var t = -1,
            a = null == e ? 0 : e.length;
        for (this.clear(); ++t < a;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    o.prototype.clear = r, o.prototype.delete = l, o.prototype.get = i, o.prototype.has = n, o.prototype.set = s, t.exports = o
}, 528535, (e, t, a) => {
    var r = e.r(158774);

    function l(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw TypeError("Expected a function");
        var a = function() {
            var r = arguments,
                l = t ? t.apply(this, r) : r[0],
                i = a.cache;
            if (i.has(l)) return i.get(l);
            var n = e.apply(this, r);
            return a.cache = i.set(l, n) || i, n
        };
        return a.cache = new(l.Cache || r), a
    }
    l.Cache = r, t.exports = l
}, 593613, (e, t, a) => {
    var r = e.r(528535);
    t.exports = function(e) {
        var t = r(e, function(e) {
                return 500 === a.size && a.clear(), e
            }),
            a = t.cache;
        return t
    }
}, 837344, (e, t, a) => {
    var r = e.r(593613),
        l = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g;
    t.exports = r(function(e) {
        var t = [];
        return 46 === e.charCodeAt(0) && t.push(""), e.replace(l, function(e, a, r, l) {
            t.push(r ? l.replace(i, "$1") : a || e)
        }), t
    })
}, 6205, (e, t, a) => {
    var r = e.r(778116),
        l = e.r(647562),
        i = e.r(837344),
        n = e.r(553050);
    t.exports = function(e, t) {
        return r(e) ? e : l(e, t) ? [e] : i(n(e))
    }
}, 812232, (e, t, a) => {
    var r = e.r(692558),
        l = 1 / 0;
    t.exports = function(e) {
        if ("string" == typeof e || r(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -l ? "-0" : t
    }
}, 555902, (e, t, a) => {
    var r = e.r(6205),
        l = e.r(812232);
    t.exports = function(e, t) {
        t = r(t, e);
        for (var a = 0, i = t.length; null != e && a < i;) e = e[l(t[a++])];
        return a && a == i ? e : void 0
    }
}, 375194, (e, t, a) => {
    var r = e.r(555902);
    t.exports = function(e, t, a) {
        var l = null == e ? void 0 : r(e, t);
        return void 0 === l ? a : l
    }
}, 641077, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(3931);
    let r = (0, a.createContext)({
        products: []
    });
    e.s(["PageCommerceProvider", 0, function({
        products: e,
        children: l
    }) {
        let i = (0, a.useMemo)(() => ({
            products: e
        }), [e]);
        return (0, t.jsx)(r.Provider, {
            value: i,
            children: l
        })
    }, "usePageCommerce", 0, function() {
        return (0, a.useContext)(r)
    }])
}, 326388, e => {
    "use strict";
    var t = e.i(955592),
        a = e.i(375194),
        r = e.i(433519),
        l = e.i(641077),
        i = e.i(544923);
    let n = (e, t) => t?.country ? e?.country?.toLowerCase().localeCompare(t?.country.toLowerCase()) || 0 : -1,
        s = {
            currency: "USD"
        },
        o = e => e?.text !== null && e?.text !== void 0 || (e?.children ? e.children.every(o) : !!Array.isArray(e) && e.every(o));
    e.s(["default", 0, () => {
        let {
            state: e
        } = (0, r.default)(), {
            products: d
        } = (0, l.usePageCommerce)(), [c] = (0, i.default)("location", "US"), u = t => {
            let a = t?.variantPrices.sort(n),
                r = e => a?.find(t => t.currency?.toLowerCase() === e?.currency?.toLowerCase() && (t.country?.toLowerCase() === c?.toLowerCase() || !t.country))?.price;
            return r(e) ? [r(e), !1] : [r(s), !0]
        }, f = e => {
            if (!e) return {};
            let {
                productVariants: t,
                productKey: a
            } = e, r = {
                productKey: null
            };
            return t?.forEach(e => {
                let [t] = u(e);
                e?.productVariantName && (r[e.productVariantName] = {
                    price: t
                })
            }), r
        }, h = (e, a) => {
            if (!a || !e) return e;
            let r = f(a);
            return t.default.render(e, r)
        }, m = (e, a) => {
            let r;
            if (!a || !e) return e;
            let l = (r = {
                productKey: null
            }, a.forEach(e => {
                if (!e) return {};
                let {
                    productVariants: t
                } = e;
                t?.forEach(e => {
                    let [t] = u(e);
                    e?.productVariantName && (r[e.productVariantName] = {
                        price: t
                    })
                })
            }), r);
            return t.default.render(e, l)
        }, p = (e, r) => {
            if (!r || !e) return e;
            let l = e.match(/{{\s*[\w.-]+\s*}}/g)?.map(e => e?.match(/[\w.-]+/)?.[0] || "");
            if (void 0 === l) return e;
            let i = f(r);
            return r && l?.every(e => (0, a.default)(i, e)) ? t.default.render(e, i) : null
        }, x = (e, t, a = h) => e?.map(e => {
            if (e?._type === "block") return {
                ...e,
                children: x(e.children, t, a)
            };
            if (e?._type !== "span") return e;
            {
                let r = a(e.text, t);
                return {
                    ...e,
                    text: r
                }
            }
        });
        return {
            currency: e.currency,
            location: c,
            appendCommerceData: h,
            appendCommerceDataToPortableText: x,
            renderWithAllVariablesToPortableText: (e, t) => {
                let a = x(e, t, p);
                return o(a) ? a : null
            },
            getPrice: u,
            appendCommerceDataForMultipleProducts: m,
            appendPageCommerceData: e => m(e, d),
            appendPageCommerceDataToPortableText: e => x(e, void 0, e => m(e, d))
        }
    }], 326388)
}, 459923, 570994, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(3931),
        r = e.i(655105),
        l = e.i(828083),
        i = e.i(722978),
        n = e.i(153348),
        s = e.i(955429),
        o = e.i(201763),
        d = e.i(749583);
    let c = (0, l.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        u = ({
            eyebrow: e,
            title: l,
            titleSize: u = "medium",
            description: f,
            backgroundImage: h,
            actions: m = [],
            keyFigures: p,
            video: x,
            mention: g,
            fullScreen: v = !0
        }) => {
            let b = (0, a.useRef)(null),
                y = (0, n.useInView)(b, {
                    once: !0
                }),
                A = (0, s.useReducedMotion)(),
                [j, k] = (0, a.useState)(!1),
                w = (0, i.default)(`font-nohemi mt-24 my-4 ${"small"===u?"mb-6":"mb-8"}`, {
                    "loco-text-heading-xl": "medium" === u,
                    "loco-text-headline": "large" === u,
                    "loco-text-heading-lg": "small" === u
                }),
                N = (0, i.default)("object-cover transition-opacity duration-1000 opacity-100", {
                    "opacity-0": j
                });
            return (0, t.jsxs)("section", {
                ref: b,
                className: "dark relative",
                children: [h && (0, t.jsx)(r.default, {
                    src: h.src,
                    placeholder: "blur",
                    blurDataURL: h.placeholder,
                    fill: !0,
                    alt: "",
                    className: N,
                    sizes: "100vw"
                }), y && !A && x && (0, t.jsx)(c, {
                    url: x || "",
                    playing: !0,
                    loop: !0,
                    muted: !0,
                    playsinline: !0,
                    width: "100%",
                    height: "100%",
                    onReady: () => {
                        k(!0)
                    },
                    config: {
                        hlsOptions: {
                            maxMaxBufferLength: 1,
                            startLevel: 1
                        }
                    },
                    className: "absolute [&>video]:object-cover"
                }, "hero-video"), (0, t.jsx)("div", {
                    className: "absolute h-full w-full",
                    style: {
                        backgroundImage: v ? `
    linear-gradient(180deg, rgba(1, 1, 1, 0.00) 45.08%, rgba(1, 1, 1, 0.00) 49.56%, rgba(1, 1, 1, 0.01) 53.84%, rgba(1, 1, 1, 0.02) 57.92%, rgba(1, 1, 1, 0.04) 61.84%, rgba(1, 1, 1, 0.06) 65.62%, rgba(1, 1, 1, 0.09) 69.27%, rgba(1, 1, 1, 0.12) 72.82%, rgba(1, 1, 1, 0.16) 76.29%, rgba(1, 1, 1, 0.20) 79.7%, rgba(1, 1, 1, 0.24) 83.06%, rgba(1, 1, 1, 0.29) 86.41%, rgba(1, 1, 1, 0.34) 89.75%, rgba(1, 1, 1, 0.39) 93.12%, rgba(1, 1, 1, 0.44) 96.53%, rgba(1, 1, 1, 0.50) 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)` : ""
                    }
                }), (0, t.jsxs)("div", {
                    className: `relative container flex ${v&&"min-h-[calc(100vh-4rem)]"} flex-col py-8 text-white`,
                    children: [(0, t.jsx)("div", {
                        className: "flex grow flex-col justify-stretch",
                        children: (0, t.jsxs)("div", {
                            className: "flex h-full grow flex-col items-center justify-center text-center",
                            children: [e && (0, t.jsx)("div", {
                                className: "loco-caption-lg-semibold",
                                children: e
                            }), (0, t.jsx)("h1", {
                                className: w,
                                children: l
                            }), f && (0, t.jsx)("div", {
                                className: "loco-caption-sm-semibold mt-5",
                                children: f
                            }), m && (0, t.jsx)("div", {
                                className: "mt-6 flex flex-wrap items-center justify-center gap-4",
                                children: m.map((e, a) => {
                                    if (e.link) return (0, t.jsx)(d.default, {
                                        rounded: !0,
                                        hasArrow: !0,
                                        href: e.link.href,
                                        target: e.link.target,
                                        variant: 0 === a ? "primary" : "secondary",
                                        children: e.title
                                    }, `headliner-action-link-${e.title}-${a}`);
                                    if (e.form) {
                                        let r = {
                                            ...e.form.form,
                                            ...e.form.webinarFormParametersContent,
                                            extraFields: e.form.extraFields
                                        };
                                        return (0, t.jsx)("div", {
                                            children: e.form.renderModal({
                                                label: e.title,
                                                form: r
                                            })
                                        }, `headliner-action-modal-${e.title}-${a}`)
                                    }
                                    return null
                                })
                            })]
                        })
                    }), p && (0, t.jsx)(o.default, {
                        keyFigures: p,
                        nested: !0
                    })]
                }), g && (0, t.jsx)("div", {
                    className: "loco-text-body-sm z-10 w-full px-4 py-4 text-center opacity-70 md:absolute md:top-10 md:right-8 md:left-auto md:w-auto md:px-0 md:py-8",
                    children: g
                })]
            })
        };
    e.s(["default", 0, u], 570994);
    var f = e.i(115219);
    e.s(["default", 0, ({
        actions: e = [],
        brandfolder: r,
        mention: l,
        eyebrow: i,
        title: n,
        titleSize: s,
        description: o,
        image: d,
        keyFigures: c,
        isHidden: h
    }) => {
        let {
            mapFormActions: m
        } = (0, f.useFormModal)(e), p = m(e), x = (0, a.useMemo)(() => (c?.data ?? []).map(e => e?.value?.text ? {
            value: {
                type: "text",
                text: e.value.text
            },
            label: e.label
        } : {
            value: {
                type: "icon",
                url: e?.value?.icon?.file?.cdnURL || "",
                description: e?.value?.icon?.caption || ""
            },
            label: e.label
        }), [c]);
        return (0, t.jsx)(t.Fragment, {
            children: !h && (0, t.jsx)(u, {
                actions: p,
                mention: l || "",
                eyebrow: i || "",
                title: n || "",
                titleSize: "small" === s ? "small" : "large" === s ? "large" : "medium",
                description: o || "",
                backgroundImage: {
                    src: d?.asset.url || "",
                    placeholder: d?.asset.metadata?.lqip || ""
                },
                keyFigures: x,
                video: r?.muxHLSURL || ""
            })
        })
    }], 459923)
}, 567134, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(3931),
        r = e.i(722978),
        l = e.i(153348),
        i = e.i(955429),
        n = e.i(655105),
        s = e.i(828083),
        o = e.i(825610),
        d = e.i(783078),
        c = e.i(749583),
        u = e.i(186114),
        f = e.i(595388);
    let h = (0, s.default)(() => e.A(410979), {
        loadableGenerated: {
            modules: [942019]
        },
        ssr: !1
    });
    e.s(["default", 0, ({
        title: e,
        description: s,
        image: m,
        video: p,
        action: x,
        variant: g = "column",
        videoInline: v = !0,
        buttonLabel: b = "Play video",
        blockKey: y,
        titleTag: A = "h3",
        locale: j,
        index: k
    }) => {
        let w = y || o.trackingLocation.uniteCard,
            N = void 0 !== k ? `${w}-${k}` : w,
            _ = (0, a.useRef)(null),
            [R, L] = (0, a.useState)(!1),
            C = (0, l.useInView)(_),
            B = (0, i.useReducedMotion)(),
            P = () => {
                L(!0)
            };
        (0, a.useEffect)(() => {
            v ? L(C) : C || L(!1)
        }, [C, v]);
        let Q = (0, r.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": R && !B && C && p?.src
            }),
            F = "horizontal" === g && x,
            $ = (0, r.default)("flex flex-col", {
                "min-h-[14rem]": "stacked" === g || "column" === g,
                grow: "column" !== g && "horizontal" !== g,
                "min-h-[14rem] xl:min-h-[18rem] xl:flex-row xl:gap-4": "column" === g
            }),
            I = (0, r.default)("rounded-lg bg-gray-100 p-4 dark:bg-gray-900", {
                "h-full": "horizontal" !== g,
                "group h-full relative p-[1px] xl:flex-row xl:gap-6 cursor-pointer": "horizontal" === g && F,
                "h-full relative p-[1px] xl:flex-row xl:gap-6 cursor-auto": "horizontal" === g && !F
            }),
            D = (0, r.default)("relative overflow-hidden rounded-lg", {
                "aspect-video w-full": "horizontal" !== g,
                "aspect-video w-full xl:flex-shrink-0 xl:self-start xl:max-w-1/2": "horizontal" === g
            }),
            E = (0, r.default)("cover absolute object-cover", {
                "transition-transform duration-400 group-hover:scale-110": "horizontal" === g && F
            }),
            z = (0, t.jsxs)("div", {
                ref: _,
                className: I,
                children: ["horizontal" === g && F && (0, t.jsx)("div", {
                    className: "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-400 [background:linear-gradient(to_top,#000_0%,#666_60%,#666_100%)] group-hover:opacity-100"
                }), (0, t.jsxs)("div", {
                    className: (0, r.default)({
                        "relative z-10 flex h-full flex-col gap-6 rounded-lg bg-gray-100 p-3 xl:w-full xl:flex-row dark:bg-gray-900": "horizontal" === g,
                        "flex h-full flex-col justify-between gap-4": "horizontal" !== g
                    }),
                    children: [(m?.src || p?.src) && (0, t.jsxs)("div", {
                        className: D,
                        children: [p?.src && (0, t.jsx)(h, {
                            url: p.src,
                            playing: R && C && !B,
                            loop: !!v,
                            muted: v,
                            playsinline: v && !B,
                            width: "100%",
                            height: "100%",
                            className: "absolute top-0 left-0 [&>video]:object-cover",
                            onReady: () => {
                                v && L(!0)
                            },
                            controls: !v,
                            config: {
                                hlsOptions: {
                                    maxMaxBufferLength: 1,
                                    startLevel: 1
                                }
                            }
                        }), m && (0, t.jsxs)("div", {
                            className: Q,
                            onClick: P,
                            children: [!v && (0, t.jsx)(u.default, {
                                handleIsPlaying: P,
                                className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                label: b,
                                "data-link-location": N,
                                "data-link-id": `${N}-video-play`
                            }), (0, t.jsx)(n.default, {
                                src: m.src,
                                placeholder: m.placeholder ? "blur" : "empty",
                                blurDataURL: m.placeholder,
                                fill: !0,
                                alt: m.alt ?? "",
                                className: E,
                                sizes: `(min-width: ${d.default.Large}px) 33vw, (min-width: ${d.default.Medium}px) 50vw, 100vw`
                            })]
                        })]
                    }), (0, t.jsx)("div", {
                        className: (0, r.default)($),
                        children: "column" !== g && "horizontal" !== g ? (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(A, {
                                className: "loco-text-body-lg-medium -mt-2",
                                children: e
                            }), (0, t.jsxs)("div", {
                                className: "flex shrink-0 grow flex-col justify-between",
                                children: [(0, t.jsx)("div", {
                                    className: "loco-text-body mt-2 whitespace-pre-line text-gray-700 dark:text-gray-400",
                                    children: s
                                }), (x?.href && x?.label || x?.renderModal) && (0, t.jsx)("div", {
                                    className: "mt-8",
                                    children: x?.renderModal ? x.renderModal() : (0, t.jsx)(c.default, {
                                        locale: j,
                                        href: F ? void 0 : x.href,
                                        target: x.target,
                                        outlined: !0,
                                        rounded: !0,
                                        hasArrow: !0,
                                        tag: F ? "span" : "button",
                                        "data-link-location": N,
                                        "data-link-id": `${N}-cta`,
                                        children: x.label
                                    })
                                })]
                            })]
                        }) : "horizontal" === g ? (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(A, {
                                className: "loco-text-body-lg-medium -mt-2 lg:mt-0",
                                children: e
                            }), (0, t.jsxs)("div", {
                                className: "flex shrink-0 grow flex-col justify-between lg:flex-1",
                                children: [(0, t.jsx)("div", {
                                    className: "loco-text-body mt-2 line-clamp-5 whitespace-pre-line text-gray-700 lg:line-clamp-3 lg:text-gray-900 dark:text-gray-400 lg:dark:text-white",
                                    children: s
                                }), (x?.href && x?.label || x?.renderModal) && (0, t.jsx)("div", {
                                    className: "mt-8 lg:mt-6",
                                    children: x?.renderModal ? x.renderModal() : (0, t.jsx)(c.default, {
                                        locale: j,
                                        href: F ? void 0 : x.href,
                                        target: x.target,
                                        outlined: !0,
                                        rounded: !0,
                                        hasArrow: !0,
                                        tag: F ? "span" : "button",
                                        "data-link-location": N,
                                        "data-link-id": `${N}-cta`,
                                        children: x.label
                                    })
                                })]
                            })]
                        }) : (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(A, {
                                className: "loco-text-body-lg-medium -mt-2 xl:w-2/5",
                                children: e
                            }), (0, t.jsxs)("div", {
                                className: "flex shrink-0 grow flex-col justify-between xl:-mt-1 xl:w-3/5",
                                children: [(0, t.jsx)("div", {
                                    className: "loco-text-body mt-1 whitespace-pre-line xl:mt-0",
                                    children: s
                                }), (x?.href && x?.label || x?.renderModal) && (0, t.jsx)("div", {
                                    children: x?.renderModal ? x.renderModal() : (0, t.jsx)(c.default, {
                                        locale: j,
                                        href: F ? void 0 : x.href,
                                        target: x.target,
                                        outlined: !0,
                                        rounded: !0,
                                        hasArrow: !0,
                                        tag: F ? "span" : "button",
                                        "data-link-location": N,
                                        "data-link-id": `${N}-cta`,
                                        children: x.label
                                    })
                                })]
                            })]
                        })
                    })]
                })]
            });
        return F ? (0, t.jsx)(f.Link, {
            href: x.href,
            target: x.target,
            className: "cursor-pointer",
            "data-link-location": N,
            "data-link-id": `${N}-link-wrapper`,
            children: z
        }) : z
    }], 567134)
}, 776910, 814507, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(722978),
        r = e.i(146911);
    let l = ({
        children: e,
        action: l,
        rounded: i = !1,
        isContained: n = !1,
        className: s = ""
    }) => (0, t.jsx)("div", {
        className: (0, a.clsx)("md:px-auto w-full px-4 transition-colors", {
            "bg-gray-100 dark:bg-gray-900": !n
        }, {
            "rounded-br-lg rounded-bl-lg": i && !n
        }, s),
        children: (0, t.jsxs)("div", {
            className: (0, a.clsx)("container m-auto py-3 text-xs leading-4 font-medium text-gray-900 transition-colors dark:text-gray-100", {
                "text-center": i && !n
            }, {
                "my-6 rounded-lg bg-gray-100 dark:bg-gray-900": n
            }),
            children: [e, (0, t.jsx)(r.default, {
                className: "mx-auto mt-0 ml-2 inline-block [&>div>span]:text-xs",
                href: l.href,
                target: l.target,
                size: "tiny",
                underline: !0,
                "data-link-location": "AnnouncementBanner",
                "data-link-id": "announcement-banner-action",
                children: l.title
            })]
        })
    });
    e.s(["default", 0, l], 814507), e.s(["default", 0, ({
        title: e,
        action: a,
        isContained: r = !1,
        theme: i,
        isHidden: n
    }) => {
        let s;
        return (0, t.jsx)(t.Fragment, {
            children: !n && (0, t.jsx)("section", {
                className: "dark" === i ? "dark" : "",
                children: (s = a?.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self", (0, t.jsx)(l, {
                    isContained: r,
                    action: {
                        title: a?.text || "",
                        href: a?.fieldLink?.linkReference?.href?.current || "",
                        target: s
                    },
                    children: e
                }))
            })
        })
    }], 776910)
}, 131564, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(749583),
        r = e.i(722978);
    e.s(["default", 0, ({
        theme: e = "light",
        actions: l,
        description: i,
        title: n,
        padding: s = !0,
        variant: o = "center",
        richText: d
    }) => {
        let c = (0, r.default)({
            dark: "dark" === e
        });
        return (0, t.jsx)("div", {
            className: c,
            children: (0, t.jsx)("div", {
                className: "dark:bg-black",
                children: (0, t.jsxs)("div", {
                    className: `container flex flex-col ${"center"===o&&"items-center text-center"} ${s&&"pt-14 pb-12 md:pt-24"}`,
                    children: [(0, t.jsx)("div", {
                        className: "max-w-3xl",
                        children: n && (0, t.jsx)("h2", {
                            className: "loco-text-heading-md !font-nohemi",
                            children: n
                        })
                    }), (i || d) && (0, t.jsxs)("div", {
                        className: (0, r.default)("loco-text-body-lg [&_a]:text-blue mt-6 text-gray-500", "center" === o || "left" === o ? "max-w-5xl" : "max-w-3xl"),
                        children: [i, d]
                    }), l && (0, t.jsx)("div", {
                        className: "mt-8 flex justify-center gap-4",
                        children: l.map((e, r) => {
                            let l = `title-description-block-action-${e.title}-${r}`;
                            return 0 === r ? (0, t.jsx)(a.default, {
                                href: e.href,
                                target: e.target,
                                outlined: !0,
                                rounded: !0,
                                hasArrow: !0,
                                "data-link-location": "TitleDescriptionBlock",
                                "data-link-id": `title-description-block-action-primary-${r}`,
                                children: e.title
                            }, l) : (0, t.jsx)(a.default, {
                                href: e.href,
                                target: e.target,
                                variant: "secondary",
                                rounded: !0,
                                hasArrow: !0,
                                "data-link-location": "TitleDescriptionBlock",
                                "data-link-id": `title-description-block-action-secondary-${r}`,
                                children: e.title
                            }, l)
                        })
                    })]
                })
            })
        })
    }], 131564)
}, 913890, 577702, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(3931),
        r = e.i(722978),
        l = e.i(567134),
        i = e.i(825610),
        n = e.i(749583);
    let s = ({
        title: e,
        subtitle: a,
        description: r,
        action: l,
        blockKey: s,
        index: o
    }) => {
        let d = s || i.trackingLocation.uniteCardSubscription,
            c = void 0 !== o ? `${d}-${o}` : d;
        return (0, t.jsxs)("div", {
            className: "flex h-80 flex-col justify-between rounded-lg bg-gray-900 p-4 text-white",
            children: [(0, t.jsx)("h3", {
                className: "loco-text-heading-sm -mt-2 md:mr-20",
                children: e
            }), (0, t.jsx)("div", {
                className: "loco-text-body-lg opacity-70",
                children: a
            }), (0, t.jsxs)("div", {
                className: "flex grow flex-col justify-between",
                children: [(0, t.jsx)("div", {
                    className: "loco-text-body mt-8 opacity-70",
                    children: r
                }), (0, t.jsx)("div", {
                    children: (0, t.jsx)(n.default, {
                        href: l?.href,
                        target: l?.target,
                        variant: "primary",
                        outlined: !0,
                        rounded: !0,
                        hasArrow: !0,
                        "data-link-location": c,
                        "data-link-id": `${c}-action`,
                        children: l?.label
                    })
                })]
            })]
        })
    };
    var o = e.i(131564);
    let d = ({
        theme: e = "light",
        title: d,
        description: c,
        filters: u,
        actions: f,
        cards: h,
        variant: m = "column",
        blockKey: p,
        cardsHeading: x
    }) => {
        let [g, v] = (0, a.useState)(u?.[0]?.value || ""), b = (e, a) => {
            let r = {
                uniteCard: l.default,
                cardSubscription: s
            } [e?.type];
            return (0, t.jsx)("div", {
                className: "w-full px-0 py-1 md:w-1/2 md:px-1 md:py-1 lg:w-1/3",
                children: (0, t.jsx)(r, {
                    ...e,
                    variant: m,
                    blockKey: p || i.trackingLocation.uniteCards,
                    titleTag: x,
                    index: a
                })
            }, `${e.title}-${a}`)
        }, y = (0, r.default)({
            dark: "dark" === e || "collapsiblecards" === e
        }), A = (0, r.default)({
            "bg-white dark:bg-black": "light" === e || "dark" === e,
            "bg-transparent": "collapsiblecards" === e
        }), j = (0, r.default)("w-full flex flex-wrap justify-center", {
            "mt-8 pb-10": (!d || !c) && "collapsiblecards" !== e
        });
        return (0, t.jsx)("section", {
            className: y,
            children: (0, t.jsx)("div", {
                className: A,
                children: (0, t.jsxs)("div", {
                    className: "collapsiblecards" === e ? "flex flex-col items-center" : "container flex flex-col items-center",
                    children: [(d || c) && (0, t.jsx)(o.default, {
                        title: d,
                        description: c
                    }), (u && u.length > 0 || f && f.length > 0) && (0, t.jsxs)("div", {
                        className: "mb-8 flex w-full flex-wrap justify-center gap-4",
                        children: [u.map((e, a) => (0, t.jsx)(n.default, {
                            rounded: !0,
                            outlined: !0,
                            onPress: () => {
                                e.onPress && e.onPress(), v(e.value)
                            },
                            active: g.includes(e.value),
                            "data-link-location": p || i.trackingLocation.uniteCardsFilter,
                            "data-link-id": `${p||i.trackingLocation.uniteCardsFilter}-filter-${a}`,
                            children: e.title
                        }, `filter-${e}-${a}`)), f.map((e, a) => (0, t.jsx)(n.default, {
                            href: e.href,
                            rounded: !0,
                            outlined: !0,
                            hasArrow: !0,
                            "data-link-location": p || i.trackingLocation.uniteCardsAction,
                            "data-link-id": `${p||i.trackingLocation.uniteCardsAction}-action-${a}`,
                            children: e.title
                        }, `action-${e}-${a}`))]
                    }), (0, t.jsx)("div", {
                        className: j,
                        children: g ? h.filter(e => e.tags?.includes(g)).map(b) : h.map(b)
                    })]
                })
            })
        })
    };
    e.s(["default", 0, d], 577702);
    var c = e.i(803695),
        u = e.i(998569),
        f = e.i(430215),
        h = e.i(783078);
    let m = ({
        theme: e = "light",
        slides: i,
        variant: n = "short",
        blockKey: o,
        title: d
    }) => {
        let [m, p] = (0, a.useState)(0), x = (0, a.useRef)(null), g = (0, f.default)(`(min-width: ${h.default.Large}px)`), v = "gdc2026" === n, b = (0, r.default)({
            dark: "dark" === e
        }), y = (0, a.useCallback)((e, t) => {
            p(t)
        }, []), A = (0, a.useCallback)(() => {
            x.current && x.current.slickPrev()
        }, []), j = (0, a.useCallback)(() => {
            x.current && x.current.slickNext()
        }, []), k = {
            dots: !1,
            infinite: !1,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: !1,
            beforeChange: y,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1
                }
            }]
        }, w = (e, a) => {
            let r = {
                uniteCard: l.default,
                cardSubscription: s
            } [e.type];
            return (0, t.jsx)("div", {
                className: v ? "col-span-12 h-full" : "col-span-12 md:col-span-6 lg:col-span-4",
                children: (0, t.jsx)(r, {
                    ...e,
                    variant: v ? "horizontal" : n,
                    blockKey: `${o}-${a}`,
                    titleTag: "p"
                })
            }, `carousel-card-${o}-${a}-${e.title}`)
        }, N = () => {
            let a = g ? 2 : 1,
                l = i.length - a + 1;
            return (0, t.jsx)("div", {
                className: "flex gap-2",
                children: Array.from({
                    length: l
                }).map((a, l) => (0, t.jsx)("button", {
                    className: (0, r.default)("h-2 w-2 rounded-full transition-all", m === l ? "bg-white" : "dark" === e ? "bg-gray-600" : "bg-gray-300"),
                    "aria-label": `Go to slide ${l+1}`,
                    "aria-current": m === l ? "true" : "false"
                }, l))
            })
        }, _ = g ? 2 : 1, R = i.length - _ + 1, L = 0 === m, C = m >= R - 1, B = g && i.length > 2 || !g && i.length > 1;
        return v ? (0, t.jsx)("section", {
            className: b,
            children: (0, t.jsx)("div", {
                className: "carousel-cards py-16 dark:bg-black",
                children: (0, t.jsxs)("div", {
                    className: "container",
                    children: [(0, t.jsxs)("div", {
                        className: "mb-8 hidden items-center gap-8 lg:flex",
                        children: [(0, t.jsx)("div", {
                            className: "flex flex-1 items-center",
                            children: d && (0, t.jsx)("h2", {
                                className: "loco-text-heading-xs text-left",
                                children: d
                            })
                        }), B && (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)("div", {
                                className: "flex flex-1 items-center justify-center",
                                children: N()
                            }), (0, t.jsxs)("div", {
                                className: "flex flex-1 items-center justify-end gap-2",
                                children: [(0, t.jsx)(u.default, {
                                    direction: "left",
                                    onPress: A,
                                    ariaLabel: "Previous slide",
                                    variant: "primary",
                                    isDisabled: L
                                }), (0, t.jsx)(u.default, {
                                    onPress: j,
                                    ariaLabel: "Next slide",
                                    variant: "primary",
                                    isDisabled: C
                                })]
                            })]
                        })]
                    }), d && (0, t.jsx)("h2", {
                        className: "loco-text-heading-xl mb-6 text-left lg:hidden",
                        children: d
                    }), (0, a.createElement)(c.default, {
                        ...k,
                        ref: x,
                        key: `slider-${i.length}`,
                        className: "overflow-hidden"
                    }, i.map(w)), B && (0, t.jsxs)("div", {
                        className: "mt-8 flex flex-col items-center gap-4 lg:hidden",
                        children: [N(), (0, t.jsxs)("div", {
                            className: "flex gap-2",
                            children: [(0, t.jsx)(u.default, {
                                direction: "left",
                                onPress: A,
                                ariaLabel: "Previous slide",
                                variant: "primary",
                                isDisabled: L
                            }), (0, t.jsx)(u.default, {
                                onPress: j,
                                ariaLabel: "Next slide",
                                variant: "primary",
                                isDisabled: C
                            })]
                        })]
                    })]
                })
            })
        }) : (0, t.jsx)("section", {
            className: b,
            children: (0, t.jsx)("div", {
                className: "carousel-cards py-16 dark:bg-black",
                children: (0, t.jsxs)("div", {
                    className: "container",
                    children: [(0, t.jsx)("div", {
                        className: "mb-8 flex items-center justify-between",
                        children: B && (0, t.jsxs)(t.Fragment, {
                            children: [N(), (0, t.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, t.jsx)(u.default, {
                                    direction: "left",
                                    onPress: A,
                                    ariaLabel: "Previous slide",
                                    variant: "primary",
                                    isDisabled: L
                                }), (0, t.jsx)(u.default, {
                                    onPress: j,
                                    ariaLabel: "Next slide",
                                    variant: "primary",
                                    isDisabled: C
                                })]
                            })]
                        })
                    }), (0, a.createElement)(c.default, {
                        ...k,
                        ref: x,
                        key: `slider-${i.length}`,
                        className: "overflow-visible"
                    }, i.map(w))]
                })
            })
        })
    };
    var p = e.i(869324),
        x = e.i(115219);
    let g = [{
        src: e.i(154038).default,
        width: 3840,
        height: 2160,
        blurWidth: 8,
        blurHeight: 5,
        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAALCAAFAAgBAREA/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/APLZ9Vnvz+/AYDoDzX//2Q=="
    }, {
        src: e.i(594333).default,
        width: 3840,
        height: 2160,
        blurWidth: 8,
        blurHeight: 5,
        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAALCAAFAAgBAREA/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/APJp1W3tNqjPm9Se2K//2Q=="
    }, {
        src: e.i(522500).default,
        width: 3840,
        height: 2160,
        blurWidth: 8,
        blurHeight: 5,
        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAALCAAFAAgBAREA/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/APONHVbm4jikXKyOAa//2Q=="
    }];
    e.s(["default", 0, ({
        theme: e,
        title: a,
        description: r,
        filters: l,
        actions: i,
        variant: n,
        isCarousel: s,
        cards: o,
        cardsBlog: c,
        newsItems: u,
        blogItems: f,
        blockKey: h,
        isHidden: v,
        cardsHeading: b
    }) => {
        let {
            mapFormActions: y,
            renderModal: A
        } = (0, x.useFormModal)(o?.map(e => e.action).filter(Boolean)), j = (e, t = 0, a = !1) => {
            let r = !!e?.action?.form,
                l = null;
            e?.action ? l = {
                label: e.action?.title,
                href: r ? "" : e.action?.link?.linkReference?.href.current || "",
                target: e.action?.link?.linkReference?.target === "_blank" ? "_blank" : "_self",
                ...r ? {
                    renderModal: () => A({
                        label: e.action?.title ?? "",
                        form: e.action.form
                    })
                } : {}
            } : e?.pageUrl && (l = {
                href: e?.pageUrl?.link?.href?.current || "",
                target: e?.pageUrl?.target === "_blank" ? "_blank" : "_self"
            });
            let i = null;
            if (e?.image) i = {
                src: e.image.file?.asset.url,
                alt: e.image.alt,
                placeholder: e.image.file?.asset.metadata?.lqip
            };
            else if (e?.featuredImage) i = {
                src: e.featuredImage?.file?.asset?.url,
                alt: e.title,
                placeholder: e.featuredImage?.file?.asset?.metadata?.lqip
            };
            else if (a) {
                let a = g[t % 3];
                i = {
                    src: a.src,
                    alt: e.title || "Unity News",
                    placeholder: a.blurDataURL
                }
            }
            return {
                type: e._type || "uniteCard",
                title: e.title,
                subtitle: e.subtitle || "",
                description: e.description || e?.seo?.teaserText || e?.seo?.description || "",
                image: i,
                video: {
                    src: e.brandfolder?.muxHLSURL || ""
                },
                action: l,
                tags: e.tags || [],
                videoInline: e?.videoInline
            }
        }, k = s ? (() => {
            if (!o || 0 === o.length) return c?.length && c?.length > 0 ? c?.map((e, t) => j(e, t)) : [];
            let e = 0,
                t = 0;
            return o.map((a, r) => {
                if ("cardDynamic" === a._type) {
                    if ("news" === a.contentType && u && e < u.length) {
                        let t = u[e],
                            a = e;
                        return e++, j(t, a, !0)
                    }
                    if ("blog" === a.contentType && f && t < f.length) {
                        let e = f[t];
                        return t++, j(e, r)
                    }
                    return null
                }
                return j(a, r)
            }).filter(e => null !== e)
        })() : o?.length && o?.length > 0 ? o?.filter(e => "cardDynamic" !== e._type).map((e, t) => j(e, t)) : c?.length && c?.length > 0 ? c?.map((e, t) => j(e, t)) : [], w = l?.map((e, t) => ({
            title: e.title,
            value: e.value,
            onPress: () => {
                (0, p.default)({
                    event: "userEvent",
                    event_name: "navigation_click",
                    properties: {
                        navigation_type: "internal",
                        navigation_click_text: e.title,
                        navigation_href: window.location.href,
                        navigation_link_location: `cards_block_filter_${t+1}`
                    }
                })
            }
        })) || [];
        return s ? (0, t.jsx)(m, {
            theme: "dark" === e ? "dark" : "light",
            variant: "stacked" === n || "column" === n || "short" === n || "gdc2026" === n ? n : "column",
            slides: k,
            blockKey: h,
            title: a || void 0
        }) : (0, t.jsx)(t.Fragment, {
            children: !v && (0, t.jsx)(d, {
                theme: "dark" === e ? "dark" : "collapsiblecards" === e ? "collapsiblecards" : "light",
                title: a || "",
                description: r,
                filters: w,
                actions: i?.map(e => ({
                    title: e?.title || "",
                    href: e.link?.linkReference?.href.current || "",
                    target: e.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                })) || [],
                variant: "stacked" === n || "column" === n || "short" === n ? n : "column",
                cards: k,
                blockKey: h,
                cardsHeading: "div" === b || "h2" === b || "h3" === b || "h4" === b ? b : a ? "h3" : "h2"
            })
        })
    }], 913890)
}, 4390, e => {
    "use strict";
    let t = e.i(459923).default;
    e.s(["default", 0, t])
}, 686916, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(722990);
    let r = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "w-full bg-black",
        children: e
    });
    r.Content = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "footnote loco-text-body-sm container",
        children: e
    }), e.s(["default", 0, ({
        content: e,
        isHidden: l
    }) => (0, t.jsx)(t.Fragment, {
        children: !l && (0, t.jsx)(r, {
            children: (0, t.jsx)(r.Content, {
                children: (0, t.jsx)(a.PortableText, {
                    value: e,
                    components: e
                })
            })
        })
    })], 686916)
}, 742958, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(722978),
        r = e.i(3931),
        l = e.i(749583),
        i = e.i(828083),
        n = e.i(153348),
        s = e.i(955429),
        o = e.i(655105);
    let d = (0, i.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        c = ({
            title: e,
            eyebrow: i,
            description: c,
            image: u,
            video: f,
            visualPlacement: h,
            action: m,
            blockKey: p,
            cardHeading: x = "p"
        }) => {
            let g = (0, r.useRef)(null),
                [v, b] = (0, r.useState)(!1),
                y = (0, n.useInView)(g, {
                    once: !0
                }),
                A = (0, s.useReducedMotion)(),
                j = (0, a.default)("bg-gray-100 relative h-full rounded-xl overflow-hidden dark:bg-gray-900", {
                    dark: "background" === h
                }),
                k = (0, a.default)("z-0", {
                    "absolute top-0 left-0 w-full h-full": "background" === h,
                    "aspect-video relative mt-8 -mb-8": "default" === h
                }, "background" === h ? "after:content after:absolute after:z-10 after:inset-0 after:bg-gradient-to-b after:from-10% after:from-black after:to-transparent after:opacity-75" : ""),
                w = (0, a.default)("z-10 transition-opacity duration-500 object-cover", {
                    "opacity-0": v && !A && y && f?.src,
                    "": "background" === h
                }),
                N = (0, a.default)("absolute left-0 top-0 [&>video]:object-cover", {
                    "brightness-50 ": "background" === h
                });
            return (0, t.jsx)("div", {
                className: j,
                ref: g,
                children: (0, t.jsxs)("div", {
                    className: "flex h-full flex-col justify-between p-8",
                    children: [(0, t.jsxs)("div", {
                        className: "relative z-10",
                        children: [i && (0, t.jsx)("span", {
                            className: "loco-caption-sm mb-4 block opacity-70",
                            children: i
                        }), e && (0, t.jsx)(x, {
                            className: "loco-text-heading-xs",
                            children: e
                        }), c && (0, t.jsx)("p", {
                            className: "loco-text-body-sm mt-2 max-w-xs opacity-70",
                            children: c
                        }), (m?.href || m?.renderModal) && (0, t.jsx)("div", {
                            className: "mt-8",
                            children: m?.renderModal ? m.renderModal() : (0, t.jsx)(l.default, {
                                href: m.href,
                                rounded: !0,
                                outlined: !0,
                                hasArrow: !0,
                                "data-link-location": `${p}-action-${m.label}`,
                                "data-link-id": `${p}-action`,
                                "data-link-type": "CTA",
                                children: m.label
                            }, `action-${m.label}`)
                        })]
                    }), (0, t.jsxs)("div", {
                        className: k,
                        children: [u?.src && (0, t.jsx)(o.default, {
                            fill: !0,
                            alt: u.alt ?? "",
                            src: u.src,
                            className: w
                        }), y && !A && f?.src && (0, t.jsx)(d, {
                            url: f.src,
                            playing: f.autoplay ?? !0,
                            loop: !0,
                            muted: !0,
                            playsinline: !0,
                            width: "100%",
                            height: "100%",
                            className: N,
                            onReady: () => {
                                b(!0)
                            },
                            config: {
                                hlsOptions: {
                                    maxMaxBufferLength: 1,
                                    startLevel: 1
                                }
                            }
                        })]
                    })]
                })
            })
        },
        u = ({
            cards: e,
            blockKey: r,
            cardsHeading: l
        }) => {
            let i = (0, a.default)("bentoCards_grid", 1 === e.length && "is-single", e.length % 2 == 0 && "is-two-multiple", e.length % 3 == 0 && "is-three-multiple", function(e) {
                if (e <= 1) return !1;
                if (2 === e) return !0;
                if (e % 2 == 0) return !1;
                for (let t = 3; t <= Math.sqrt(e); t += 2)
                    if (e % t == 0) return !1;
                return !0
            }(e.length) && "is-prime");
            return (0, t.jsx)("div", {
                children: (0, t.jsx)("div", {
                    className: i,
                    children: e.map((e, a) => (0, t.jsx)("div", {
                        className: "bentoCards_item",
                        children: (0, t.jsx)(c, {
                            ...e,
                            blockKey: r,
                            cardHeading: l
                        })
                    }, `bento-card-${r}-${a}`))
                })
            })
        };
    var f = e.i(115219);
    e.s(["default", 0, ({
        theme: e,
        blockKey: r,
        isHidden: l,
        cards: i,
        bentoCardsHeading: n
    }) => {
        let {
            renderModal: s
        } = (0, f.useFormModal)(i?.map(e => e.actions?.[0]).filter(Boolean)), o = i?.map(e => {
            let t, a, r, l = e?.actions?.[0],
                i = !!l?.form;
            return {
                title: e.title,
                eyebrow: e.eyebrow || "",
                description: e.description || "",
                visualPlacement: "background" === e.visualPlacement ? "background" : "default",
                image: {
                    src: e?.image?.file?.asset.url ?? "",
                    alt: e?.image?.alt ?? "",
                    placeholder: e?.image?.file?.asset.metadata?.lqip ?? ""
                },
                video: {
                    src: e?.video?.muxHLSURL ?? ""
                },
                action: l ? (t = i ? "" : l.link?.linkReference?.href.current ?? "", a = l.link?.linkReference?.target === "_blank" ? "_blank" : "_self", r = {
                    label: l.title ?? "",
                    href: t,
                    target: a
                }, i ? {
                    ...r,
                    renderModal: () => {
                        let e = l.form || {},
                            t = {
                                title: e.title || "",
                                description: e.description || "",
                                fields: e.fields || [],
                                actions: e.actions || {},
                                sfdcIntegration: l.webinarFormParametersContent?.sfdcIntegration || {}
                            };
                        return s({
                            label: l.title ?? "",
                            form: t
                        })
                    }
                } : r) : null
            }
        }) ?? [], d = (0, a.default)({
            dark: "dark" === e
        });
        return (0, t.jsx)(t.Fragment, {
            children: !l && (0, t.jsx)("div", {
                className: d,
                children: (0, t.jsx)("div", {
                    className: "bg-white dark:bg-black",
                    children: (0, t.jsx)("div", {
                        className: "container py-16",
                        children: (0, t.jsx)(u, {
                            blockKey: r,
                            theme: "dark" === e ? "dark" : "light",
                            cards: o,
                            cardsHeading: "h2" === n || "h3" === n || "h4" === n ? n : "p"
                        })
                    })
                })
            })
        })
    }], 742958)
}, 50184, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(722978),
        r = e.i(153348),
        l = e.i(955429),
        i = e.i(828083),
        n = e.i(655105),
        s = e.i(3931);
    let o = (0, i.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        d = ({
            videoShowcaseA: e,
            videoShowcaseB: i
        }) => {
            let d = (0, s.useRef)(null),
                [c, u] = (0, s.useState)(!1),
                [f, h] = (0, s.useState)(!1),
                m = (0, r.useInView)(d, {
                    once: !0
                }),
                p = (0, l.useReducedMotion)(),
                x = (0, a.default)("transition-opacity duration-500 object-cover", {
                    "opacity-0": c && !p && m && e?.image?.src
                }),
                g = (0, a.default)("transition-opacity duration-500 object-cover", {
                    "opacity-0": f && !p && m && e?.image?.src
                });
            return (0, t.jsxs)("div", {
                className: "w-full",
                ref: d,
                children: [(0, t.jsxs)("div", {
                    className: "relative mx-auto aspect-square max-w-[35vw]",
                    children: [e?.image?.src && (0, t.jsx)(n.default, {
                        fill: !0,
                        alt: e?.image?.alt ?? "",
                        src: e?.image?.src,
                        className: x
                    }), m && !p && e?.video?.src && (0, t.jsx)(o, {
                        url: e.video.src,
                        playing: e.video.autoplay ?? !0,
                        loop: !0,
                        muted: !0,
                        playsinline: !0,
                        width: "100%",
                        height: "100%",
                        className: "absolute top-0 left-0 [&>video]:object-cover",
                        onReady: () => {
                            u(!0)
                        },
                        config: {
                            hlsOptions: {
                                maxMaxBufferLength: 1,
                                startLevel: 1
                            }
                        }
                    })]
                }), (0, t.jsxs)("div", {
                    className: "relative mx-auto -mt-[7vw] aspect-video w-full shadow-[0px_0px_80px_rgba(0,0,0,0.7)]",
                    children: [i?.image?.src && (0, t.jsx)(n.default, {
                        fill: !0,
                        alt: i?.image?.alt ?? "",
                        src: i?.image?.src,
                        className: g
                    }), m && !p && i?.video?.src && (0, t.jsx)(o, {
                        url: i.video.src,
                        playing: i.video.autoplay ?? !0,
                        loop: !0,
                        muted: !0,
                        playsinline: !0,
                        width: "100%",
                        height: "100%",
                        className: "absolute top-0 left-0 [&>video]:object-cover",
                        onReady: () => {
                            h(!0)
                        },
                        config: {
                            hlsOptions: {
                                maxMaxBufferLength: 1,
                                startLevel: 1
                            }
                        }
                    })]
                })]
            })
        };
    e.s(["default", 0, ({
        isHidden: e,
        theme: r,
        videoShowcaseA: l,
        videoShowcaseB: i
    }) => {
        let n = {
                videoShowcaseA: {
                    image: {
                        src: l?.image?.asset.url ?? "",
                        placeholder: l?.image?.asset.metadata?.lqip ?? "",
                        alt: l?.imageAlt ?? ""
                    },
                    video: {
                        src: l?.brandfolder?.muxHLSURL ?? ""
                    }
                },
                videoShowcaseB: {
                    image: {
                        src: i?.image?.asset.url ?? "",
                        placeholder: i?.image?.asset.metadata?.lqip ?? "",
                        alt: i?.imageAlt ?? ""
                    },
                    video: {
                        src: i?.brandfolder?.muxHLSURL ?? ""
                    }
                }
            },
            s = (0, a.default)({
                dark: "dark" === r
            });
        return (0, t.jsx)(t.Fragment, {
            children: !e && (0, t.jsx)("div", {
                className: s,
                children: (0, t.jsx)("div", {
                    className: "bg-white dark:bg-gray-900",
                    children: (0, t.jsx)("div", {
                        className: "container py-28",
                        children: (0, t.jsx)(d, {
                            ...n
                        })
                    })
                })
            })
        })
    }], 50184)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4f00fc3b-ffa3-529e-88ae-6cf7b2a5e38b")
    } catch (e) {}
}();
//# debugId=4f00fc3b-ffa3-529e-88ae-6cf7b2a5e38b