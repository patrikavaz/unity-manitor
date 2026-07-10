(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 239145, (e, t, l) => {
    t.exports = function(e, t) {
        for (var l = -1, a = null == e ? 0 : e.length, r = Array(a); ++l < a;) r[l] = t(e[l], l, e);
        return r
    }
}, 873021, (e, t, l) => {
    var a = e.r(328042),
        r = e.r(239145),
        s = e.r(778116),
        i = e.r(692558),
        n = 1 / 0,
        d = a ? a.prototype : void 0,
        o = d ? d.toString : void 0;
    t.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (s(t)) return r(t, e) + "";
        if (i(t)) return o ? o.call(t) : "";
        var l = t + "";
        return "0" == l && 1 / t == -n ? "-0" : l
    }
}, 553050, (e, t, l) => {
    var a = e.r(873021);
    t.exports = function(e) {
        return null == e ? "" : a(e)
    }
}, 343346, (e, t, l) => {
    t.exports = function(e, t) {
        return e === t || e != e && t != t
    }
}, 647562, (e, t, l) => {
    var a = e.r(778116),
        r = e.r(692558),
        s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        i = /^\w*$/;
    t.exports = function(e, t) {
        if (a(e)) return !1;
        var l = typeof e;
        return !!("number" == l || "symbol" == l || "boolean" == l || null == e || r(e)) || i.test(e) || !s.test(e) || null != t && e in Object(t)
    }
}, 977902, (e, t, l) => {
    t.exports = e.r(581511)(Object, "create")
}, 708867, (e, t, l) => {
    var a = e.r(977902);
    t.exports = function() {
        this.__data__ = a ? a(null) : {}, this.size = 0
    }
}, 447265, (e, t, l) => {
    t.exports = function(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= !!t, t
    }
}, 150095, (e, t, l) => {
    var a = e.r(977902),
        r = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        var t = this.__data__;
        if (a) {
            var l = t[e];
            return "__lodash_hash_undefined__" === l ? void 0 : l
        }
        return r.call(t, e) ? t[e] : void 0
    }
}, 884942, (e, t, l) => {
    var a = e.r(977902),
        r = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        var t = this.__data__;
        return a ? void 0 !== t[e] : r.call(t, e)
    }
}, 985902, (e, t, l) => {
    var a = e.r(977902);
    t.exports = function(e, t) {
        var l = this.__data__;
        return this.size += +!this.has(e), l[e] = a && void 0 === t ? "__lodash_hash_undefined__" : t, this
    }
}, 298435, (e, t, l) => {
    var a = e.r(708867),
        r = e.r(447265),
        s = e.r(150095),
        i = e.r(884942),
        n = e.r(985902);

    function d(e) {
        var t = -1,
            l = null == e ? 0 : e.length;
        for (this.clear(); ++t < l;) {
            var a = e[t];
            this.set(a[0], a[1])
        }
    }
    d.prototype.clear = a, d.prototype.delete = r, d.prototype.get = s, d.prototype.has = i, d.prototype.set = n, t.exports = d
}, 765776, (e, t, l) => {
    t.exports = function() {
        this.__data__ = [], this.size = 0
    }
}, 641664, (e, t, l) => {
    var a = e.r(343346);
    t.exports = function(e, t) {
        for (var l = e.length; l--;)
            if (a(e[l][0], t)) return l;
        return -1
    }
}, 915386, (e, t, l) => {
    var a = e.r(641664),
        r = Array.prototype.splice;
    t.exports = function(e) {
        var t = this.__data__,
            l = a(t, e);
        return !(l < 0) && (l == t.length - 1 ? t.pop() : r.call(t, l, 1), --this.size, !0)
    }
}, 857624, (e, t, l) => {
    var a = e.r(641664);
    t.exports = function(e) {
        var t = this.__data__,
            l = a(t, e);
        return l < 0 ? void 0 : t[l][1]
    }
}, 219301, (e, t, l) => {
    var a = e.r(641664);
    t.exports = function(e) {
        return a(this.__data__, e) > -1
    }
}, 682947, (e, t, l) => {
    var a = e.r(641664);
    t.exports = function(e, t) {
        var l = this.__data__,
            r = a(l, e);
        return r < 0 ? (++this.size, l.push([e, t])) : l[r][1] = t, this
    }
}, 990543, (e, t, l) => {
    var a = e.r(765776),
        r = e.r(915386),
        s = e.r(857624),
        i = e.r(219301),
        n = e.r(682947);

    function d(e) {
        var t = -1,
            l = null == e ? 0 : e.length;
        for (this.clear(); ++t < l;) {
            var a = e[t];
            this.set(a[0], a[1])
        }
    }
    d.prototype.clear = a, d.prototype.delete = r, d.prototype.get = s, d.prototype.has = i, d.prototype.set = n, t.exports = d
}, 817416, (e, t, l) => {
    var a = e.r(298435),
        r = e.r(990543),
        s = e.r(764138);
    t.exports = function() {
        this.size = 0, this.__data__ = {
            hash: new a,
            map: new(s || r),
            string: new a
        }
    }
}, 365867, (e, t, l) => {
    t.exports = function(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    }
}, 476501, (e, t, l) => {
    var a = e.r(365867);
    t.exports = function(e, t) {
        var l = e.__data__;
        return a(t) ? l["string" == typeof t ? "string" : "hash"] : l.map
    }
}, 792520, (e, t, l) => {
    var a = e.r(476501);
    t.exports = function(e) {
        var t = a(this, e).delete(e);
        return this.size -= !!t, t
    }
}, 349966, (e, t, l) => {
    var a = e.r(476501);
    t.exports = function(e) {
        return a(this, e).get(e)
    }
}, 649884, (e, t, l) => {
    var a = e.r(476501);
    t.exports = function(e) {
        return a(this, e).has(e)
    }
}, 884711, (e, t, l) => {
    var a = e.r(476501);
    t.exports = function(e, t) {
        var l = a(this, e),
            r = l.size;
        return l.set(e, t), this.size += +(l.size != r), this
    }
}, 158774, (e, t, l) => {
    var a = e.r(817416),
        r = e.r(792520),
        s = e.r(349966),
        i = e.r(649884),
        n = e.r(884711);

    function d(e) {
        var t = -1,
            l = null == e ? 0 : e.length;
        for (this.clear(); ++t < l;) {
            var a = e[t];
            this.set(a[0], a[1])
        }
    }
    d.prototype.clear = a, d.prototype.delete = r, d.prototype.get = s, d.prototype.has = i, d.prototype.set = n, t.exports = d
}, 528535, (e, t, l) => {
    var a = e.r(158774);

    function r(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw TypeError("Expected a function");
        var l = function() {
            var a = arguments,
                r = t ? t.apply(this, a) : a[0],
                s = l.cache;
            if (s.has(r)) return s.get(r);
            var i = e.apply(this, a);
            return l.cache = s.set(r, i) || s, i
        };
        return l.cache = new(r.Cache || a), l
    }
    r.Cache = a, t.exports = r
}, 593613, (e, t, l) => {
    var a = e.r(528535);
    t.exports = function(e) {
        var t = a(e, function(e) {
                return 500 === l.size && l.clear(), e
            }),
            l = t.cache;
        return t
    }
}, 837344, (e, t, l) => {
    var a = e.r(593613),
        r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        s = /\\(\\)?/g;
    t.exports = a(function(e) {
        var t = [];
        return 46 === e.charCodeAt(0) && t.push(""), e.replace(r, function(e, l, a, r) {
            t.push(a ? r.replace(s, "$1") : l || e)
        }), t
    })
}, 6205, (e, t, l) => {
    var a = e.r(778116),
        r = e.r(647562),
        s = e.r(837344),
        i = e.r(553050);
    t.exports = function(e, t) {
        return a(e) ? e : r(e, t) ? [e] : s(i(e))
    }
}, 812232, (e, t, l) => {
    var a = e.r(692558),
        r = 1 / 0;
    t.exports = function(e) {
        if ("string" == typeof e || a(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -r ? "-0" : t
    }
}, 555902, (e, t, l) => {
    var a = e.r(6205),
        r = e.r(812232);
    t.exports = function(e, t) {
        t = a(t, e);
        for (var l = 0, s = t.length; null != e && l < s;) e = e[r(t[l++])];
        return l && l == s ? e : void 0
    }
}, 375194, (e, t, l) => {
    var a = e.r(555902);
    t.exports = function(e, t, l) {
        var r = null == e ? void 0 : a(e, t);
        return void 0 === r ? l : r
    }
}, 641077, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(3931);
    let a = (0, l.createContext)({
        products: []
    });
    e.s(["PageCommerceProvider", 0, function({
        products: e,
        children: r
    }) {
        let s = (0, l.useMemo)(() => ({
            products: e
        }), [e]);
        return (0, t.jsx)(a.Provider, {
            value: s,
            children: r
        })
    }, "usePageCommerce", 0, function() {
        return (0, l.useContext)(a)
    }])
}, 326388, e => {
    "use strict";
    var t = e.i(955592),
        l = e.i(375194),
        a = e.i(433519),
        r = e.i(641077),
        s = e.i(544923);
    let i = (e, t) => t?.country ? e?.country?.toLowerCase().localeCompare(t?.country.toLowerCase()) || 0 : -1,
        n = {
            currency: "USD"
        },
        d = e => e?.text !== null && e?.text !== void 0 || (e?.children ? e.children.every(d) : !!Array.isArray(e) && e.every(d));
    e.s(["default", 0, () => {
        let {
            state: e
        } = (0, a.default)(), {
            products: o
        } = (0, r.usePageCommerce)(), [c] = (0, s.default)("location", "US"), u = t => {
            let l = t?.variantPrices.sort(i),
                a = e => l?.find(t => t.currency?.toLowerCase() === e?.currency?.toLowerCase() && (t.country?.toLowerCase() === c?.toLowerCase() || !t.country))?.price;
            return a(e) ? [a(e), !1] : [a(n), !0]
        }, m = e => {
            if (!e) return {};
            let {
                productVariants: t,
                productKey: l
            } = e, a = {
                productKey: null
            };
            return t?.forEach(e => {
                let [t] = u(e);
                e?.productVariantName && (a[e.productVariantName] = {
                    price: t
                })
            }), a
        }, f = (e, l) => {
            if (!l || !e) return e;
            let a = m(l);
            return t.default.render(e, a)
        }, h = (e, l) => {
            let a;
            if (!l || !e) return e;
            let r = (a = {
                productKey: null
            }, l.forEach(e => {
                if (!e) return {};
                let {
                    productVariants: t
                } = e;
                t?.forEach(e => {
                    let [t] = u(e);
                    e?.productVariantName && (a[e.productVariantName] = {
                        price: t
                    })
                })
            }), a);
            return t.default.render(e, r)
        }, x = (e, a) => {
            if (!a || !e) return e;
            let r = e.match(/{{\s*[\w.-]+\s*}}/g)?.map(e => e?.match(/[\w.-]+/)?.[0] || "");
            if (void 0 === r) return e;
            let s = m(a);
            return a && r?.every(e => (0, l.default)(s, e)) ? t.default.render(e, s) : null
        }, g = (e, t, l = f) => e?.map(e => {
            if (e?._type === "block") return {
                ...e,
                children: g(e.children, t, l)
            };
            if (e?._type !== "span") return e;
            {
                let a = l(e.text, t);
                return {
                    ...e,
                    text: a
                }
            }
        });
        return {
            currency: e.currency,
            location: c,
            appendCommerceData: f,
            appendCommerceDataToPortableText: g,
            renderWithAllVariablesToPortableText: (e, t) => {
                let l = g(e, t, x);
                return d(l) ? l : null
            },
            getPrice: u,
            appendCommerceDataForMultipleProducts: h,
            appendPageCommerceData: e => h(e, o),
            appendPageCommerceDataToPortableText: e => g(e, void 0, e => h(e, o))
        }
    }], 326388)
}, 146911, e => {
    "use strict";
    let t = e.i(976317).default;
    e.s(["default", 0, t])
}, 480880, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(3931);
    e.s(["default", 0, ({
        blocks: e,
        blockMap: a,
        ...r
    }) => (0, t.jsx)(t.Fragment, {
        children: e?.map((e, s) => {
            let i = e?._type,
                n = a[i];
            return e.isHidden ? null : n ? (0, t.jsx)("div", {
                children: l.default.createElement(n, {
                    key: `block-${s}`,
                    ...e,
                    blockIndex: s + 1,
                    blockType: i,
                    blockKey: `${i}-${s}`,
                    ...r
                })
            }, `block-${s}`) : void 0
        })
    })])
}, 985904, e => {
    "use strict";
    var t = e.i(3931),
        l = e.i(389240);
    let a = new Map([
        ["bold", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"
        }))],
        ["duotone", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
            opacity: "0.2"
        }), t.default.createElement("path", {
            d: "M144,176a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176Zm88-48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM124,96a12,12,0,1,0-12-12A12,12,0,0,0,124,96Z"
        }))],
        ["fill", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z"
        }))],
        ["light", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M142,176a6,6,0,0,1-6,6,14,14,0,0,1-14-14V128a2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14v40a2,2,0,0,0,2,2A6,6,0,0,1,142,176ZM124,94a10,10,0,1,0-10-10A10,10,0,0,0,124,94Zm106,34A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"
        }))],
        ["regular", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"
        }))],
        ["thin", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M140,176a4,4,0,0,1-4,4,12,12,0,0,1-12-12V128a4,4,0,0,0-4-4,4,4,0,0,1,0-8,12,12,0,0,1,12,12v40a4,4,0,0,0,4,4A4,4,0,0,1,140,176ZM124,92a8,8,0,1,0-8-8A8,8,0,0,0,124,92Zm104,36A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"
        }))]
    ]);
    var r = Object.defineProperty,
        s = Object.defineProperties,
        i = Object.getOwnPropertyDescriptors,
        n = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable,
        c = (e, t, l) => t in e ? r(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: l
        }) : e[t] = l;
    let u = (0, t.forwardRef)((e, r) => t.default.createElement(l.default, s(((e, t) => {
        for (var l in t || (t = {})) d.call(t, l) && c(e, l, t[l]);
        if (n)
            for (var l of n(t)) o.call(t, l) && c(e, l, t[l]);
        return e
    })({
        ref: r
    }, e), i({
        weights: a
    }))));
    u.displayName = "Info", e.s(["Info", 0, u], 985904)
}, 246916, e => {
    "use strict";
    var t = e.i(430907),
        l = e.i(200241),
        a = e.i(740041);
    e.s(["useMTBanner", 0, function(e, r = []) {
        var s, i;
        let n, d, o, c, u, m = (0, t.usePathname)(),
            f = (0, l.useLocale)(),
            h = f !== a.defaultLocale ? m.replace(`/${f}`, "") : m;
        return {
            shouldDisplayMTBanner: f !== a.defaultLocale && e?.translationType === "MT" && !r.includes(h),
            updatedBlocks: (s = e.blocks ?? [], i = e.machineTranslationDisclaimer, n = s.reduce((e, t, l) => ["hero", "alternateNavigation", "headliner"].includes(t._type) ? l : e, -1), d = [...s], o = d[n + 1]?._type === "alternateNavigationAnchor" || d[n + 1]?._type === "anchorButton" ? d[n + 2] : d[n + 1], c = o?.theme ?? null, u = {
                _type: "alert",
                text: i?.text,
                isContained: !0,
                spacing: {
                    bottom: !0,
                    top: !0
                },
                ...c && {
                    theme: c
                },
                action: {
                    text: i?.action?.title,
                    fieldLink: {
                        linkReference: {
                            href: {
                                current: `${window.location.origin}${h}`
                            },
                            target: "_self"
                        }
                    }
                }
            }, -1 === n ? d.unshift(u) : d.splice(n + 1, 0, u), d),
            redirectPathName: h
        }
    }], 246916)
}, 401861, 841889, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(722978),
        a = e.i(3931),
        r = e.i(985904),
        s = e.i(146911);
    let i = ({
            title: e,
            text: i,
            action: n,
            truncate: d,
            className: o = "",
            isContained: c,
            dismiss: u
        }) => {
            let m = (0, a.useMemo)(() => `unity-alert-${i?.substring(0,30).replaceAll(" ","_")}`, [i]),
                [f, h] = (0, a.useState)(!0),
                [x, g] = (0, a.useState)(!1);
            return ((0, a.useEffect)(() => {
                localStorage?.getItem(m) && g(!0)
            }, [m]), x) ? null : (0, t.jsx)("div", {
                className: (0, l.clsx)({
                    container: c
                }),
                children: (0, t.jsxs)("div", {
                    className: (0, l.clsx)("dark:bg-blue/10 relative flex w-full flex-col justify-between gap-4 bg-sky-100 py-4 pr-5 pl-11 text-sm text-gray-900 transition-colors sm:flex-row", {
                        flex: u?.enabled
                    }, {
                        "rounded-lg": c
                    }, o),
                    children: [(0, t.jsx)(r.Info, {
                        size: 18,
                        className: "ph-fill fill-blue absolute top-5 left-[1rem]",
                        weight: "fill"
                    }), (0, t.jsxs)("div", {
                        className: "",
                        children: [e && (0, t.jsx)("div", {
                            className: "text-small-bold",
                            children: e
                        }), (0, t.jsxs)("div", {
                            children: [(0, t.jsx)("div", {
                                className: (0, l.clsx)({
                                    "line-clamp-4 sm:line-clamp-2": d?.enabled && f
                                }),
                                children: i
                            }), d?.enabled && (0, t.jsx)("button", {
                                onClick: () => h(!f),
                                className: "text-tiny shadow-underline-sm hover:text-blue hover:shadow-underline focus:text-blue dark:hover:text-blue text-black transition duration-200 dark:text-white",
                                children: f ? d.seeMoreLabel : d.seeLessLabel
                            })]
                        })]
                    }), (n?.href || u?.enabled) && (0, t.jsxs)("div", {
                        className: "sm:auto inline-flex w-fit items-center gap-4 [&>*]:whitespace-nowrap",
                        children: [n && (0, t.jsx)(s.default, {
                            className: "mx-auto mt-0 inline-block whitespace-nowrap",
                            href: n.href,
                            target: n.target || "_self",
                            size: "tiny",
                            underline: !0,
                            children: n.title
                        }), u?.enabled && (0, t.jsx)("button", {
                            onClick: () => {
                                g(!0), localStorage.setItem(m, Date.now().toString())
                            },
                            className: "text-tiny shadow-underline-sm hover:text-blue hover:shadow-underline focus:text-blue dark:hover:text-blue text-black transition duration-200 dark:text-white",
                            children: u?.dismissLabel ?? "Dismiss"
                        })]
                    })]
                })
            })
        },
        n = ({
            title: e,
            text: a,
            action: r,
            theme: s,
            truncate: n,
            dismiss: d,
            isContained: o,
            isHidden: c,
            spacing: u
        }) => {
            let m = (0, l.clsx)({
                "pt-10": u?.top
            }, {
                "pb-10": u?.bottom
            }, {
                "dark bg-black": "dark" === s
            });
            return c || !a ? null : (0, t.jsx)("section", {
                className: m,
                children: (0, t.jsx)(i, {
                    title: e,
                    text: a,
                    isContained: o,
                    truncate: n || {},
                    dismiss: d || {},
                    action: r && {
                        title: r?.text || "",
                        href: r?.fieldLink?.linkReference?.href?.current || "",
                        target: r?.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self"
                    }
                })
            })
        };
    e.s(["default", 0, n], 841889), e.s(["default", 0, n], 401861)
}, 787213, 422664, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(722978),
        a = e.i(655105);
    let r = ({
            size: e = "m",
            url: r,
            alt: s = "profile picture"
        }) => {
            let {
                width: i,
                height: n
            } = {
                m: {
                    width: 64,
                    height: 64
                },
                s: {
                    width: 48,
                    height: 48
                },
                xs: {
                    width: 40,
                    height: 40
                },
                xxs: {
                    width: 40,
                    height: 40
                }
            } [e], d = (0, l.default)("inline-block", "rounded-full overflow-hidden relative shrink-0 mr-3 hidden lg:block md:block");
            return (0, t.jsx)("div", {
                className: d,
                children: (0, t.jsx)(a.default, {
                    src: r,
                    alt: s,
                    width: i,
                    height: n
                })
            })
        },
        s = ({
            avatar: e,
            name: a,
            company: s,
            role: i,
            size: n = "m"
        }) => {
            let d = (0, l.default)("text-gray-900 dark:text-gray-100 pb-1", {
                    "loco-caption-lg-semibold": "m" === n,
                    "loco-caption-sm-semibold": "s" === n || "xs" === n || "xxs" === n
                }),
                o = (0, l.default)("text-gray-700 dark:text-gray-300 tracking-normal", {
                    "loco-text-body-xs-semibold": "m" === n,
                    "loco-text-body-sm-medium": "s" === n || "xs" === n || "xxs" === n
                });
            return (0, t.jsxs)("div", {
                className: "flex items-center",
                children: [e && (0, t.jsx)(r, {
                    url: e,
                    size: n,
                    alt: a
                }), (0, t.jsxs)("div", {
                    className: "flex flex-col",
                    children: [(0, t.jsxs)("span", {
                        className: d,
                        children: [a?.toUpperCase(), " ", s && a && "/" || "", " ", s?.toUpperCase()]
                    }), (0, t.jsx)("span", {
                        className: o,
                        children: i
                    })]
                })]
            })
        };
    e.s(["default", 0, s], 422664);
    let i = ({
            content: e,
            author: a,
            className: r = "",
            textClassName: i = ""
        }) => {
            let n = (0, l.default)("p-6 rounded-xl", r),
                d = (0, l.default)("mb-6 text-gray-800 dark:text-gray-200", i);
            return (0, t.jsxs)("div", {
                className: n,
                children: [(0, t.jsx)("div", {
                    className: d,
                    children: e
                }), (0, t.jsx)(s, {
                    ...a
                })]
            })
        },
        n = ({
            title: e,
            testimonials: a,
            layout: r = "one-layout",
            testimonialVariant: s = "default",
            className: n = ""
        }) => {
            let d = (0, l.default)({
                    "one-layout": "col-span-12",
                    "two-layout": "col-span-12 md:col-span-6 flex",
                    "three-layout": "col-span-12 md:col-span-6 lg:col-span-4 flex"
                } [r]),
                o = (0, l.default)("one-layout" !== r && "flex flex-col justify-between w-full", {
                    "bg-gray-100 dark:bg-gray-900": "default" === s
                }, {
                    "border border-gray-200 dark:border-gray-700": "outlined" === s && !e
                }),
                c = (0, l.default)({
                    "auto-rows-fr": "one-layout" !== r
                }, "grid grid-cols-12 gap-4", n),
                u = (0, l.default)("container py-0 md:py-16", {
                    "bg-gray-100 dark:bg-gray-900 rounded-2xl": e,
                    "border border-gray-200 dark:border-gray-700 bg-transparent": "outlined" === s && e
                }),
                m = (0, l.default)({
                    "loco-text-body-sm-medium": "two-layout" === r || "three-layout" === r,
                    "loco-text-body-lg-medium": "one-layout" === r
                });
            return (0, t.jsxs)("div", {
                className: u,
                children: [e && (0, t.jsx)("div", {
                    className: "loco-text-heading-sm p-6",
                    children: e
                }), (0, t.jsx)("div", {
                    className: c,
                    children: a?.map((e, l) => {
                        let {
                            content: a,
                            author: r,
                            _key: s
                        } = e;
                        return (0, t.jsx)("div", {
                            className: d,
                            children: (0, t.jsx)(i, {
                                content: a,
                                author: r,
                                className: o,
                                textClassName: m
                            })
                        }, `${s}-${l}`)
                    })
                })]
            })
        };
    e.s(["default", 0, ({
        title: e,
        layout: l,
        testimonialVariant: a,
        testimonials: r,
        theme: s,
        hideAuthorImage: i,
        isHidden: d
    }) => {
        let o = r?.map((e, t) => ({
            content: e?.content,
            author: {
                name: e?.author.name,
                company: e?.author.company,
                role: e?.author.role,
                avatar: e?.author.avatar?.file?.asset?.url
            },
            key: t
        })) ?? [];
        return (0, t.jsx)(t.Fragment, {
            children: !d && (0, t.jsx)("section", {
                className: "dark" === s ? "dark" : "",
                children: (0, t.jsx)("div", {
                    className: "dark:bg-gray-900",
                    children: (0, t.jsx)(n, {
                        testimonials: o,
                        title: e,
                        layout: "two-layout" === l ? "two-layout" : "three-layout" === l ? "three-layout" : "one-layout",
                        testimonialVariant: "outlined" === a ? "outlined" : "default"
                    })
                })
            })
        })
    }], 787213)
}, 725751, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(3931),
        a = e.i(210310),
        r = e.i(326388);
    e.s(["default", 0, ({
        theme: e,
        isHidden: s,
        verticalHeadingClass: i,
        productCatalogItems: n,
        htmlTableContent: d
    }) => {
        let {
            appendCommerceDataForMultipleProducts: o
        } = (0, r.default)(), c = (0, l.useCallback)(e => {
            let t = o(e, n);
            return t || e
        }, [n, o]), u = (0, l.useMemo)(() => {
            let e = d.rows.map(e => (e.cells = e.cells.map(e => c(e)), e));
            return {
                ...d,
                rows: e
            }
        }, [d, c]);
        return (0, t.jsx)(t.Fragment, {
            children: !s && (0, t.jsx)("section", {
                className: "dark" === e ? "dark" : "",
                children: (0, t.jsx)("div", {
                    className: "mx-auto max-w-7xl p-6 dark:bg-black",
                    children: (0, t.jsx)(a.default, {
                        verticalHeadingClass: i || "",
                        table: u
                    })
                })
            })
        })
    }], 725751)
}, 123849, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(722978),
        a = e.i(805518);
    let r = ({
            title: e,
            content: r,
            listStyle: s = "check"
        }) => {
            let i = (0, l.default)("loco-text-body [&_h4]:mb-0", {
                "checkmark-list-green": "check" === s,
                "plus-list": "plus" === s
            });
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("div", {
                    className: "loco-caption-sm-semibold mb-2 text-gray-700 dark:text-gray-300",
                    children: e
                }), (0, t.jsx)(a.default, {
                    className: i,
                    children: r
                })]
            })
        },
        s = ({
            title: e = "",
            descriptions: l = [],
            treshold: a,
            pricing: s
        }) => (0, t.jsxs)("div", {
            className: "flex h-full flex-col justify-between rounded-lg bg-gray-100 p-6 lg:w-96 dark:bg-gray-800",
            children: [(0, t.jsxs)("div", {
                className: "grow pb-8",
                children: [(0, t.jsx)("div", {
                    className: "loco-text-heading-sm mb-8 text-black dark:text-white",
                    children: e
                }), (0, t.jsx)("div", {
                    children: l?.map((l, a) => (0, t.jsx)("div", {
                        className: "flex flex-col pb-8",
                        children: (0, t.jsx)(r, {
                            title: l.title,
                            content: l.content,
                            listStyle: l.listStyle
                        })
                    }, `card-plan-${e}-${a}`))
                }), (0, t.jsx)(r, {
                    title: a?.title || "",
                    content: a?.content || ""
                })]
            }), (0, t.jsx)("div", {
                className: "min-h-[6rem]",
                children: (0, t.jsx)(r, {
                    title: s?.title || "",
                    content: s?.content || ""
                })
            })]
        }),
        i = ({
            theme: e = "light",
            cards: a = []
        }) => {
            let r = (0, l.default)({
                dark: "dark" === e
            });
            return (0, t.jsx)("section", {
                className: r,
                children: (0, t.jsx)("div", {
                    className: "bg-white pt-8 pb-20 dark:bg-black",
                    children: (0, t.jsx)("div", {
                        className: "container flex flex-col flex-wrap gap-2 lg:flex-row lg:justify-center",
                        children: a.map((e, l) => (0, t.jsx)("div", {
                            children: (0, t.jsx)(s, {
                                ...e
                            })
                        }, `card-plan-${e.title}-${l}`))
                    })
                })
            })
        };
    var n = e.i(722990);
    e.s(["default", 0, ({
        isHidden: e,
        theme: l,
        cards: a
    }) => e ? null : (0, t.jsx)(i, {
        theme: "dark" === l ? "dark" : "light",
        cards: a.map(e => ({
            title: e.title ?? "",
            descriptions: e.descriptions?.map(e => {
                let l = e?.listStyle === "plus" ? "plus" : "check";
                return {
                    title: e?.title ?? "",
                    content: (0, t.jsx)(n.PortableText, {
                        value: e?.content
                    }),
                    listStyle: l
                }
            }) || [],
            treshold: {
                title: e?.treshold?.title ?? "",
                content: (0, t.jsx)(n.PortableText, {
                    value: e.treshold?.content
                })
            },
            pricing: {
                title: e.pricing?.title ?? "",
                content: (0, t.jsx)(n.PortableText, {
                    value: e.pricing?.content
                })
            }
        }))
    })], 123849)
}, 596889, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(722978);
    let a = ({
        children: e,
        className: a = "",
        variant: r = "default"
    }) => {
        let s = (0, l.clsx)({
            default: "bg-white dark:bg-gray-900 rounded-xl",
            padded: "p-6 bg-white dark:bg-gray-900 rounded-xl",
            transparent: ""
        } [r], a);
        return (0, t.jsx)("div", {
            className: s,
            children: e
        })
    };
    a.Content = ({
        children: e,
        className: l = "w-full"
    }) => (0, t.jsx)("div", {
        className: l,
        children: e
    }), a.Image = ({
        children: e,
        withinContainer: a
    }) => {
        let r = (0, l.clsx)("card-img relative w-full", {
            "[&>img]:!static !h-auto": a
        });
        return (0, t.jsx)("div", {
            className: r,
            children: e
        })
    }, e.s(["default", 0, a], 596889)
}, 893171, 447533, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(3931),
        a = e.i(655105),
        r = e.i(722978),
        s = e.i(481392),
        i = e.i(828083),
        n = e.i(783078);
    let d = (0, i.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        o = ({
            containerRef: e,
            lqip: a
        }) => {
            let r = (0, l.useRef)(null),
                s = (0, l.useRef)(null),
                i = "pointer-events-none absolute inset-0 hidden h-full w-full opacity-80 blur-2xl lg:block [will-change:filter]";
            return ((0, l.useEffect)(() => {
                let t, l = r.current,
                    a = e.current;
                if (!l || !a) return;
                let i = l.getContext("2d");
                if (!i) return;
                let n = a.querySelector("video"),
                    d = () => {
                        n && a.contains(n) || (n = a.querySelector("video"));
                        let e = n,
                            l = s.current;
                        if (e) {
                            e.crossOrigin || (e.crossOrigin = "anonymous");
                            try {
                                i.drawImage(e, 0, 0, 32, 32), l && (l.style.transform = `scale(${1.01+1e-6*Math.random()})`)
                            } catch {}
                        }
                        t = requestAnimationFrame(d)
                    };
                return t = requestAnimationFrame(d), () => cancelAnimationFrame(t)
            }, [e, a]), a) ? (0, t.jsx)("div", {
                className: i,
                style: {
                    backgroundImage: `url(${a})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transform: "scale(1.05)"
                },
                "aria-hidden": "true"
            }) : (0, t.jsx)("div", {
                ref: s,
                className: i,
                "aria-hidden": "true",
                children: (0, t.jsx)("canvas", {
                    ref: r,
                    width: 32,
                    height: 32,
                    className: "h-full w-full"
                })
            })
        };
    var c = e.i(185462),
        u = e.i(224601);
    let m = ({
        children: e,
        className: l = "",
        size: s = "default",
        variant: i = "default",
        image: n,
        keyFigures: d
    }) => {
        let o = (0, r.clsx)("relative grid grid-cols-12", l, {
                dark: !!n
            }),
            u = (0, r.clsx)("relative col-span-12 mx-auto lg:container", {
                "lg:py-32 lg:pb-10": "gdc2026" !== i && "default" === s,
                "lg:py-16 lg:pb-5": "gdc2026" !== i && "slim" === s,
                "py-0 lg:py-20 max-w-[82rem]": "gdc2026" === i
            }),
            m = (0, r.clsx)({
                "flex flex-col lg:flex-row-reverse": "gdc2026" !== i,
                "grid grid-cols-12 gap-6": "gdc2026" === i
            });
        return (0, t.jsxs)("section", {
            className: o,
            children: [n && (0, t.jsx)(a.default, {
                src: n.src,
                alt: n.alt,
                fill: !0,
                className: "object-cover",
                quality: 100,
                sizes: "100vw"
            }), (0, t.jsxs)("div", {
                className: u,
                children: [(0, t.jsx)("div", {
                    className: m,
                    children: e
                }), d && d.length > 0 && (0, t.jsx)("div", {
                    className: "mx-6 lg:mx-0",
                    children: (0, t.jsx)(c.default, {
                        keyFigures: d,
                        nested: !0
                    })
                })]
            })]
        })
    };
    m.Actions = ({
        children: e,
        variant: l = "default"
    }) => (0, t.jsx)("div", {
        className: "gdc2026" === l ? "flex flex-col items-center lg:items-start gap-3 pb-3.5 lg:pb-16 lg:flex-row" : "flex flex-col items-start gap-3 pb-3.5 xl:flex-row",
        children: e
    }), m.AlternateActions = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "loco-text-body-sm flex flex-row items-center gap-2 pl-10 text-gray-600 md:pl-8",
        children: e
    }), m.Body = ({
        children: e,
        variant: l = "default"
    }) => (0, t.jsx)("div", {
        className: "gdc2026" === l ? "loco-text-body-lg" : "loco-text-body-lg mb-6",
        children: e
    }), m.Content = ({
        children: e,
        variant: l = "default"
    }) => {
        let a = (0, r.default)({
            "flex-1 pt-10 pr-8": "gdc2026" !== l,
            "w-full col-span-12 lg:col-span-4 px-4 pb-6 gap-6 items-center lg:gap-9 lg:items-start lg:px-0 lg:pb-0 lg:pt-8 flex flex-col order-2 lg:order-1 text-center lg:text-left": "gdc2026" === l
        });
        return (0, t.jsx)("div", {
            className: a,
            style: "gdc2026" === l ? {
                gap: "2.3125rem"
            } : void 0,
            children: e
        })
    }, m.Overline = ({
        children: e,
        className: l
    }) => {
        let a = (0, r.default)("loco-caption-lg-semibold mb-3 text-gray-500 dark:text-gray-300", l);
        return (0, t.jsx)("div", {
            className: a,
            children: e
        })
    }, m.Title = ({
        children: e,
        variant: l = "default"
    }) => {
        let a = (0, r.default)("!font-nohemi text-black dark:text-white", {
            "loco-text-heading-md mb-6": "gdc2026" !== l,
            "loco-text-heading-4xl break-normal lg:[word-spacing:100vw]": "gdc2026" === l
        });
        return (0, t.jsx)("h1", {
            className: a,
            children: e
        })
    }, m.Pricing = ({
        data: e = [],
        onSelectionChange: a,
        selectedKey: r
    }) => {
        let i = (0, l.useMemo)(() => e.find(e => e.key === r), [e, r]);
        return (0, l.useEffect)(() => {
            let t = !r || !i,
                l = e?.[0]?.key;
            t && a && l && a(l)
        }, [e, r, a, i]), (0, t.jsx)(t.Fragment, {
            children: !!e.length && (0, t.jsx)("div", {
                className: "mb-6 flex",
                children: (0, t.jsxs)("div", {
                    children: [(0, t.jsxs)("div", {
                        className: "mb-2",
                        children: [(0, t.jsx)("span", {
                            className: "loco-text-heading-xs mr-1 font-semibold",
                            children: i?.price
                        }), (0, t.jsx)("span", {
                            className: "loco-text-body-sm",
                            children: i?.suffixPrice
                        })]
                    }), e.length > 1 && (0, t.jsx)(s.default, {
                        selectedKey: r,
                        onSelectionChange: a,
                        children: e.map(({
                            key: e,
                            label: l
                        }) => (0, t.jsx)(s.default.Item, {
                            children: l
                        }, e))
                    })]
                })
            })
        })
    }, m.Media = ({
        media: e,
        className: s = "",
        variant: i = "default"
    }) => {
        let {
            image: c,
            video: u
        } = e || {}, [m, f] = (0, l.useState)(!1), h = (0, l.useRef)(null), x = "gdc2026" === i ? "object-cover" : "object-contain", g = (0, r.default)("relative flex grow", {
            "m-4 h-full": "gdc2026" !== i,
            "w-full h-[22rem] lg:h-full lg:w-auto lg:m-4": "gdc2026" === i
        }, s), p = (0, r.default)("relative h-full w-full overflow-hidden", {
            "rounded-3xl": "gdc2026" !== i,
            "lg:rounded-3xl": "gdc2026" === i
        }), v = (0, r.default)("flex items-center", {
            "flex-1 justify-center lg:justify-start": "gdc2026" !== i,
            "w-full col-span-12 lg:col-span-8 justify-center order-1 lg:order-2": "gdc2026" === i
        }), b = (e, l) => c?.asset.url ? (0, t.jsx)(a.default, {
            src: c.asset.url,
            alt: e,
            fill: !0,
            className: (0, r.default)("absolute h-full", x, l),
            sizes: `(min-width: ${n.default.Large}px) 33vw, (min-width: ${n.default.Medium}px) 50vw, 100vw`,
            placeholder: c.asset.metadata?.lqip ? "blur" : "empty",
            blurDataURL: c.asset.metadata?.lqip || void 0
        }) : null;
        return (0, t.jsx)("div", {
            className: v,
            children: (c || u) && (0, t.jsxs)("div", {
                className: g,
                children: [(0, t.jsx)(o, {
                    containerRef: h,
                    lqip: m ? void 0 : c?.asset?.metadata?.lqip
                }), (0, t.jsxs)("div", {
                    ref: h,
                    className: p,
                    children: [c?.asset.url && !u && b("Hero image", void 0), u && c?.asset.url && !m && b("Video thumbnail", "z-10"), u && (0, t.jsx)("div", {
                        className: "h-full w-full self-center",
                        children: (0, t.jsx)(d, {
                            url: u?.muxHLSURL || "",
                            playing: !0,
                            loop: !0,
                            muted: !0,
                            playsinline: !0,
                            width: "100%",
                            height: "100%",
                            className: (0, r.default)("absolute top-0 h-full", {
                                "[&>video]:object-cover": "gdc2026" === i,
                                "[&>video]:object-contain": "gdc2026" !== i
                            }),
                            onReady: () => f(!0),
                            onBuffer: () => f(!1),
                            onBufferEnd: () => f(!0)
                        })
                    })]
                })]
            })
        })
    }, m.YouTubeVideo = ({
        className: e,
        title: l,
        url: a,
        autoplay: s,
        blockedMessage: i,
        consentButtonLabel: n
    }) => {
        let d = (0, r.default)("relative flex grow md:h-auto md:content-center md:mx-8 md:rounded-3xl md:overflow-hidden", e);
        return a && l ? (0, t.jsx)("div", {
            className: "flex flex-1",
            children: (0, t.jsx)("div", {
                className: d,
                children: (0, t.jsx)(u.default, {
                    autoplay: s,
                    title: l,
                    url: a,
                    blockedMessage: i,
                    consentButtonLabel: n
                })
            })
        }) : null
    }, e.s(["default", 0, m], 447533);
    var f = e.i(749583),
        h = e.i(595388),
        x = e.i(115219);
    let g = ({
        linkText: e,
        separatorText: l,
        actionLinks: a
    }) => {
        let r = window.navigator.userAgent,
            s = null;
        if (-1 !== r.indexOf("Win") ? s = "windows" : -1 !== r.indexOf("Mac") ? s = "mac" : -1 !== r.indexOf("Linux") && (s = "linux"), !s) return null;
        let i = [];
        if (a && a.length > 0)
            for (let e of a) e.os.toLowerCase() !== s.toLowerCase() && i.push({
                label: e.os,
                url: e.href
            });
        return a ? (0, t.jsxs)("div", {
            className: "loco-text-body-sm flex flex-row items-center gap-2 pl-10 text-gray-600 md:pl-8",
            children: [e, " ", i.map((e, a) => (0, t.jsxs)("span", {
                children: [a > 0 ? (0, t.jsxs)("span", {
                    className: "text-gray-600",
                    children: [" ", l, " "]
                }) : "", (0, t.jsx)("a", {
                    href: e.url,
                    className: "text-blue underline",
                    children: e.label
                })]
            }, e.label))]
        }) : null
    };
    var p = e.i(433519),
        v = e.i(829150),
        b = e.i(434438),
        j = e.i(200241);
    e.s(["default", 0, ({
        eyebrow: e,
        title: a,
        description: r,
        actions: s = [],
        media: i,
        backgroundImage: n,
        size: d,
        variant: o,
        keyFigures: c,
        theme: u,
        youtubeVideo: y,
        isHidden: k,
        showAlterativeOSLinks: w,
        alternativeOSLinkSettings: N
    }) => {
        let _, L = -1 !== (_ = window.navigator.userAgent).indexOf("Win") ? "Windows" : -1 !== _.indexOf("Mac") ? "Mac" : -1 !== _.indexOf("Linux") ? "Linux" : "Unknown",
            R = (0, l.useRef)(null),
            {
                state: C
            } = (0, p.default)(),
            M = (0, j.useLocale)(),
            A = {
                ...C,
                locale: (0, b.default)(M)
            },
            {
                mapFormActions: $
            } = (0, x.useFormModal)(s),
            T = (0, l.useMemo)(() => $(s) || [], [s, $]),
            S = n?.asset?.url ? {
                src: n.asset.url,
                alt: "Hero background image"
            } : void 0,
            F = (0, l.useMemo)(() => (c?.data ?? []).map(e => e?.value?.text ? {
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
        (0, l.useEffect)(() => {
            if (!R.current) {
                let e = document.createElement("a");
                e.style.display = "none", document.body.appendChild(e), R.current = e
            }
            return () => {
                R.current && document.body.contains(R.current) && document.body.removeChild(R.current)
            }
        }, []);
        let P = o ?? void 0,
            z = (e, a, r) => {
                let s = a?.form;
                if (!s) return null;
                let i = {
                    ...s.form,
                    ...s.webinarFormParametersContent,
                    extraFields: s.extraFields
                };
                return (0, t.jsx)(l.default.Fragment, {
                    children: s.renderModal({
                        label: e.title,
                        form: i
                    })
                }, `hero-action-form-${e.title}-${r}`)
            },
            O = e => {
                let t = e.link?.linkReference?.href?.current,
                    l = t ? (0, v.default)(t, A, e.extendLink) : t,
                    a = e.secondaryLink?.linkReference?.href?.current,
                    r = e.link?.linkReference?.target || "_self",
                    s = h.locales.find(e => window.location.pathname === `/${e}` || window.location.pathname.startsWith(`/${e}/`)) ?? "en";
                l && (l.endsWith(".exe") || l.endsWith(".dmg") ? R.current && (R.current.href = l, R.current.download = "", R.current.target = r, R.current.click()) : "_blank" === r ? window.open(l, "_blank") : window.location.href = l), a && setTimeout(() => {
                    let e = a.replace(/^\//, "");
                    window.location.href = `/${s}/${e}`
                }, 1e3), e?.callback && e.callback()
            },
            I = s?.filter(e => !e.operatingSystem || e.operatingSystem === L) || [],
            B = s?.filter(e => !!e.operatingSystem && "Unknown" !== e.operatingSystem) || [];
        return (0, t.jsx)(t.Fragment, {
            children: !k && (0, t.jsx)("section", {
                className: "dark" === u ? "dark" : "",
                children: (0, t.jsx)("div", {
                    className: "dark:bg-black",
                    children: (0, t.jsxs)(m, {
                        image: S,
                        size: "slim" === d ? "slim" : "default" === d ? "default" : void 0,
                        variant: P,
                        keyFigures: F,
                        children: [i && (0, t.jsx)(m.Media, {
                            media: i,
                            variant: P
                        }), !i && y && (0, t.jsx)(m.YouTubeVideo, {
                            autoplay: !0,
                            url: y?.url,
                            title: y?.title,
                            blockedMessage: y?.consent?.blockedMessage,
                            consentButtonLabel: y?.consent?.consentButtonLabel || ""
                        }), (0, t.jsxs)(m.Content, {
                            variant: P,
                            children: [(0, t.jsx)(m.Overline, {
                                children: e
                            }), (0, t.jsx)(m.Title, {
                                variant: P,
                                children: a
                            }), (0, t.jsx)(m.Body, {
                                variant: P,
                                children: r
                            }), (0, t.jsx)("div", {
                                className: "xl:hidden",
                                children: (0, t.jsx)(m.Actions, {
                                    variant: P,
                                    children: I.map((e, a) => {
                                        let r = T[a],
                                            s = e.link?.linkReference?.href?.current || "",
                                            i = (0, v.default)(s, A, e.extendLink),
                                            n = 0 === a,
                                            d = s.endsWith(".exe") || s.endsWith(".dmg"),
                                            o = !!e.secondaryLink?.linkReference?.href?.current,
                                            c = i && !d && !o;
                                        return r?.form ? z(e, r, a) : (0, t.jsxs)(l.default.Fragment, {
                                            children: [n && (0, t.jsx)(f.default, {
                                                size: "medium",
                                                variant: e.buttonType,
                                                rounded: !0,
                                                ...c && {
                                                    href: i
                                                },
                                                onPress: () => O(e),
                                                hasArrow: !0,
                                                "data-link-location": "HeroBlock",
                                                "data-link-id": `HeroBlock-action-${a}`,
                                                children: e.title
                                            }), n && w && (0, t.jsx)(g, {
                                                linkText: N?.linkText ?? "Download for",
                                                separatorText: N?.separatorText ?? "or",
                                                actionLinks: B.map(e => ({
                                                    os: e.operatingSystem,
                                                    href: e.link?.linkReference?.href?.current || "#"
                                                }))
                                            }), !n && (0, t.jsx)("div", {
                                                className: "ml-1 flex flex-col gap-4",
                                                children: (0, t.jsx)(f.default, {
                                                    size: "medium",
                                                    variant: e.buttonType,
                                                    rounded: !0,
                                                    ...c && {
                                                        href: i
                                                    },
                                                    onPress: () => O(e),
                                                    hasArrow: !0,
                                                    "data-link-location": "HeroBlock",
                                                    "data-link-id": `HeroBlock-action-${a}`,
                                                    children: e.title
                                                })
                                            })]
                                        }, e.link?.linkReference?.title || a)
                                    })
                                })
                            }), (0, t.jsxs)("div", {
                                className: "hidden xl:block",
                                children: [(0, t.jsx)(m.Actions, {
                                    variant: P,
                                    children: I.map((e, l) => {
                                        let a = T[l],
                                            r = e.link?.linkReference?.href?.current || "",
                                            s = (0, v.default)(r, A, e.extendLink),
                                            i = r.endsWith(".exe") || r.endsWith(".dmg"),
                                            n = !!e.secondaryLink?.linkReference?.href?.current,
                                            d = s && !i && !n;
                                        return a?.form ? z(e, a, l) : (0, t.jsx)(f.default, {
                                            size: "medium",
                                            variant: e.buttonType,
                                            rounded: !0,
                                            ...d && {
                                                href: s
                                            },
                                            onPress: () => O(e),
                                            hasArrow: !0,
                                            "data-link-location": "HeroBlock",
                                            "data-link-id": `HeroBlock-action-${l}`,
                                            children: e.title
                                        }, e.link?.linkReference?.title || l)
                                    })
                                }), w && I[0] && (0, t.jsx)(g, {
                                    linkText: N?.linkText ?? "Download for",
                                    separatorText: N?.separatorText ?? "or",
                                    actionLinks: B.map(e => ({
                                        os: e.operatingSystem,
                                        href: e.link?.linkReference?.href?.current || "#"
                                    }))
                                })]
                            })]
                        })]
                    })
                })
            })
        })
    }], 893171)
}, 32382, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(3931),
        a = e.i(722990),
        r = e.i(655105),
        s = e.i(722978);
    let i = ({
            overline: e,
            variant: l = "default"
        }) => {
            let a = "products" === l;
            return (0, t.jsx)("div", {
                className: (0, s.default)("loco-caption-lg-semibold mb-2 lg:mb-3", {
                    "text-white": a,
                    "text-gray-700 dark:text-gray-300": !a
                }),
                children: e
            })
        },
        n = ({
            title: e
        }) => (0, t.jsx)("div", {
            className: "loco-text-heading-md !font-nohemi mb-5 md:w-2/3 lg:mb-6",
            children: e
        }),
        d = ({
            body: e,
            variant: l = "default"
        }) => (0, t.jsx)("div", {
            className: (0, s.default)("loco-text-body-lg mb-6 lg:mb-12", {
                "md:w-2/3": "products" === l
            }),
            children: e
        });
    var o = e.i(749583);
    let c = ({
            actions: e,
            variant: a = "default"
        }) => {
            let r = "products" === a;
            return (0, t.jsx)("div", {
                className: "flex flex-col flex-wrap items-start justify-start gap-y-4 md:flex-row md:gap-2",
                children: e.map((e, a) => e.renderModal ? (0, t.jsx)(l.default.Fragment, {
                    children: e.renderModal()
                }, a) : (0, t.jsx)(o.default, {
                    size: "large",
                    variant: 0 === a ? "primary" : "secondary",
                    rounded: !0,
                    hasArrow: !0,
                    outlined: !r && 0 === a,
                    className: "w-auto justify-center",
                    href: e.href,
                    target: e.target,
                    children: e.label
                }, a))
            })
        },
        u = ({
            overline: e,
            title: l,
            body: a,
            actions: o,
            image: u,
            className: m,
            variant: f = "default"
        }) => {
            let h = (0, s.default)("container relative grid col-span-12 py-8 lg:py-12 px-4 lg:px-16 rounded-xl overflow-hidden", {
                    dark: !!u
                }, m),
                x = "products" === f;
            return (0, t.jsx)("div", {
                className: "bg-white py-16 dark:bg-black",
                children: (0, t.jsx)("div", {
                    className: "container",
                    children: (0, t.jsxs)("div", {
                        className: "relative grid grid-cols-12 overflow-hidden rounded-xl px-4 py-8 lg:px-16 lg:py-12",
                        children: [u && (0, t.jsx)(r.default, {
                            src: u.url,
                            alt: u.alt || "",
                            fill: !0,
                            className: (0, s.default)("scale-105 object-cover", {
                                blur: !x
                            })
                        }), (0, t.jsxs)("div", {
                            className: h,
                            children: [(0, t.jsx)(i, {
                                overline: e,
                                variant: f
                            }), (0, t.jsx)(n, {
                                title: l
                            }), (0, t.jsx)(d, {
                                body: a,
                                variant: f
                            }), (0, t.jsx)(c, {
                                actions: o,
                                variant: f
                            })]
                        })]
                    })
                })
            })
        };
    var m = e.i(829150),
        f = e.i(433519),
        h = e.i(775041),
        x = e.i(115219);
    e.s(["default", 0, ({
        overline: e,
        title: r,
        body: s,
        actions: i,
        image: n,
        theme: d,
        isHidden: o,
        variant: c,
        productCatalogItem: g,
        productCategoryFilter: p
    }) => {
        let [v] = (0, l.useContext)(h.FiltersContext), {
            state: b
        } = (0, f.default)(), j = {
            ...b,
            product: g?.productKey,
            variant: null
        }, {
            renderModal: y,
            extraFields: k
        } = (0, x.useFormModal)(i), w = (0, l.useMemo)(() => i ? i.map(e => (e => {
            if (!e) return null;
            let t = !!e.form,
                l = e.link?.linkReference?.href?.current,
                a = t ? "" : l ? (0, m.default)(l, j, e.extendLink) : "";
            if (t) {
                let t = e.form || {},
                    l = {
                        ...t,
                        title: t.title || "",
                        description: t.description || "",
                        fields: t.fields || [],
                        sfdcIntegration: t.sfdcIntegration || e.webinarFormParametersContent?.sfdcIntegration || {},
                        extraFields: k
                    };
                return {
                    label: e.title || "",
                    href: "",
                    target: e.link?.linkReference?.target || "_self",
                    renderModal: () => y({
                        label: e.title || "",
                        form: l
                    })
                }
            }
            return {
                label: e.title || "",
                href: a,
                target: e?.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
            }
        })(e)).filter(e => !!e) : [], [i, j, y, k]), {
            subcategories: N
        } = v.categories?.find(({
            _id: e
        }) => e === v.selectedCategory) || {}, _ = null != v.selectedSubcategory ? (N || []).find(({
            _id: e
        }) => e === v.selectedSubcategory) : null, L = !p || p.categories?.find(e => e._id === v.selectedCategory) != null && (null == _ || !p.subcategories || p.subcategories.some(({
            _id: e
        }) => e === v.selectedSubcategory)), R = n ? {
            url: n?.file?.asset.url || "",
            alt: n.alt
        } : void 0;
        return (0, t.jsx)(t.Fragment, {
            children: !o && L && (0, t.jsx)("section", {
                className: "dark" === d ? "dark" : "",
                children: (0, t.jsx)(u, {
                    overline: e,
                    title: r || "",
                    body: (0, t.jsx)(a.PortableText, {
                        value: s
                    }),
                    actions: w,
                    image: R,
                    variant: c
                })
            })
        })
    }], 32382)
}, 529363, 989873, e => {
    "use strict";
    var t = e.i(175602);
    let l = (e, t, l) => (((1 - 3 * l + 3 * t) * e + (3 * l - 6 * t)) * e + 3 * t) * e;

    function a(e, a, r, s) {
        return e === a && r === s ? t.noop : t => 0 === t || 1 === t ? t : l(function(e, t, a, r, s) {
            let i, n, d = 0;
            do(i = l(n = t + (a - t) / 2, r, s) - e) > 0 ? a = n : t = n; while (Math.abs(i) > 1e-7 && ++d < 12) return n
        }(t, 0, 1, e, r), a, s)
    }
    e.s(["cubicBezier", 0, a], 989873);
    let r = a(.42, 0, 1, 1),
        s = a(0, 0, .58, 1),
        i = a(.42, 0, .58, 1);
    e.s(["easeIn", 0, r, "easeInOut", 0, i, "easeOut", 0, s], 529363)
}, 164163, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(722978),
        a = e.i(655105),
        r = e.i(825610),
        s = e.i(749583),
        i = e.i(596889),
        n = e.i(805518);
    e.s(["default", 0, ({
        title: e,
        cards: d,
        layout: o = "four-cards",
        cardVariant: c = "default",
        scroll: u = !1,
        cardsHeading: m
    }) => {
        let f = m || (e ? "h3" : "h2"),
            h = (0, l.clsx)("gap-4 md:gap-8", {
                "grid grid-cols-12": !u,
                "flex overflow-x-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-900 dark:scrollbar-track-gray-900 dark:scrollbar-thumb-gray-100": u
            });
        return (0, t.jsx)("section", {
            className: "bg-white dark:bg-black",
            children: (0, t.jsxs)("div", {
                className: "container py-16",
                children: [e && (0, t.jsx)("h2", {
                    className: "loco-text-heading-md mb-9 text-center",
                    children: e
                }), (0, t.jsx)("div", {
                    className: h,
                    children: d?.map((d, m) => {
                        let h = (0, l.clsx)("flex flex-wrap flex-row", !u && ({
                                "two-cards": "col-span-12 md:col-span-6 [&>div>.card-img]:h-72",
                                "three-cards": "col-span-12 md:col-span-6 lg:col-span-4 [&>div>.card-img]:h-44",
                                "four-cards": "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 [&>div>.card-img]:h-36"
                            })[o], u && ({
                                "two-cards": "mb-6 min-w-[35rem] [&>div>.card-img]:h-72",
                                "three-cards": "mb-6 min-w-[22rem] [&>div>.card-img]:h-44",
                                "four-cards": "mb-6 min-w-[16rem] [&>div>.card-img]:h-36"
                            })[o]),
                            x = (0, l.clsx)("place-self-end", {
                                "px-6 pb-6": "default" === c || "transparent" === c
                            }),
                            g = (0, l.clsx)({
                                "p-6": "default" === c || "transparent" === c,
                                "py-6": "padded" === c
                            }),
                            p = (0, l.clsx)("object-cover", {
                                "rounded-t-xl": "default" === c || "transparent" === c,
                                rounded: "padded" === c
                            }),
                            v = (0, l.clsx)("caption-xs mt-1 text-right text-gray-400", {
                                "mr-1": "padded" !== c
                            });
                        return (0, t.jsxs)(i.default, {
                            className: h,
                            variant: c,
                            children: [(0, t.jsxs)(i.default.Content, {
                                children: [d.image && d.image.src && (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsx)(i.default.Image, {
                                        withinContainer: d.image.withinContainer,
                                        children: (0, t.jsx)(a.default, {
                                            src: d.image.src ?? "",
                                            alt: d.image.alt ?? "",
                                            fill: !0,
                                            className: p,
                                            quality: 100
                                        })
                                    }), d.image.description && (0, t.jsx)(n.default, {
                                        className: v,
                                        children: d.image.description
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: g,
                                    children: [d.icon && d.icon.src && (0, t.jsx)("div", {
                                        className: "relative mb-5 dark:invert",
                                        children: (0, t.jsx)(a.default, {
                                            src: d.icon.src ?? "",
                                            alt: d.icon.alt ?? "",
                                            quality: 100,
                                            width: 23,
                                            height: 23
                                        })
                                    }), (0, t.jsx)(f, {
                                        className: "loco-text-body-lg-medium mb-4 !font-semibold",
                                        children: d.title
                                    }), d.description && (0, t.jsx)(n.default, {
                                        className: "loco-text-body mb-4",
                                        children: d.description
                                    }), d.richText && (0, t.jsx)(n.default, {
                                        className: "loco-text-body mb-4 text-gray-600 dark:text-gray-300",
                                        children: d.richText
                                    })]
                                })]
                            }), d.actions && (0, t.jsx)("div", {
                                className: x,
                                children: d.actions.map((e, l) => (0, t.jsx)(s.default, {
                                    href: e.href,
                                    target: e.target ?? "_self",
                                    rounded: !0,
                                    hasArrow: !0,
                                    outlined: 0 === l,
                                    className: 0 === l ? "mr-3" : "mt-4",
                                    variant: 0 === l ? "primary" : "secondary",
                                    "data-link-location": r.trackingLocation.cardsAction,
                                    "data-link-id": `${r.trackingLocation.cardsAction}-${l}`,
                                    children: e.title
                                }, `${e.title}-${l}`))
                            })]
                        }, `card-${m}-${e}`)
                    })
                })]
            })
        })
    }], 164163)
}, 449758, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(3931),
        a = e.i(722990),
        r = e.i(164163),
        s = e.i(326388);
    e.s(["default", 0, ({
        title: e,
        layout: i,
        cardVariant: n,
        scroll: d,
        theme: o,
        cardsHeading: c,
        cards: u,
        isHidden: m
    }) => {
        let {
            appendCommerceData: f,
            appendCommerceDataToPortableText: h,
            currency: x
        } = (0, s.default)(), g = (0, l.useMemo)(() => u?.map(e => ({
            type: e._type,
            title: f(e.title, e.productCatalogItem) || "",
            description: f(e.description, e.productCatalogItem) || "",
            richText: (0, t.jsx)(a.PortableText, {
                value: h(e.richText, e.productCatalogItem)
            }),
            image: e.image && {
                src: e.image?.file?.asset.url || "",
                alt: e.image?.alt || "",
                description: e.image?.caption ?? "",
                withinContainer: e.image?.visualOptions?.container
            },
            icon: e.icon && {
                src: e.icon?.file?.asset.url,
                alt: e.icon?.alt || ""
            },
            actions: e.actions?.map(e => {
                let t = e.link?.linkReference?.target === "_blank" ? "_blank" : "_self";
                return {
                    title: e.title || "",
                    href: e.link?.linkReference?.href?.current || "",
                    target: t
                }
            })
        })), [u, f, h]);
        return (0, t.jsx)(t.Fragment, {
            children: !m && (0, t.jsx)("section", {
                className: `${"dark"===o?"dark":""} overflow-hidden`,
                children: (0, t.jsx)(r.default, {
                    layout: "two-cards" === i || "three-cards" === i || "four-cards" === i ? i : "four-cards",
                    cardVariant: "default" === n || "padded" === n || "transparent" === n ? n : "default",
                    scroll: d,
                    title: e || "",
                    cardsHeading: ["h2", "h3", "h4", "div"].includes(c) ? c : void 0,
                    cards: g
                })
            })
        })
    }], 449758)
}, 81636, 673300, 5124, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(722978),
        a = e.i(153348),
        r = e.i(955429),
        s = e.i(828083),
        i = e.i(655105),
        n = e.i(3931),
        d = e.i(998569),
        o = e.i(595388);
    let c = (0, s.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        u = ({
            title: e,
            titleTag: l,
            description: a,
            action: r
        }) => {
            let [s, i] = (0, n.useState)(!1);
            return (0, t.jsxs)("div", {
                className: "relative border-t border-solid border-gray-700",
                children: [(0, t.jsxs)("div", {
                    className: "pt-2 pb-8 md:flex md:gap-2",
                    children: [(0, t.jsx)(l || "h2", {
                        className: "loco-text-heading-xs md:w-6/12",
                        children: e
                    }), (0, t.jsxs)("div", {
                        className: "mt-4 flex justify-between gap-4 md:mt-0 md:w-6/12",
                        children: [(0, t.jsx)("p", {
                            className: "loco-text-body-sm max-w-md opacity-70",
                            children: a
                        }), (0, t.jsx)("div", {
                            className: "shrink-0 text-right",
                            children: (0, t.jsx)(d.default, {
                                direction: "right",
                                ariaLabel: r.label,
                                variant: "secondary",
                                isForcedHover: s,
                                tag: "span"
                            })
                        })]
                    })]
                }), (0, t.jsx)(o.Link, {
                    className: "absolute top-0 left-0 z-10 h-full w-full",
                    href: r.href,
                    title: r.label,
                    onMouseOver: () => {
                        i(!0)
                    },
                    onMouseLeave: () => {
                        i(!1)
                    }
                })]
            })
        },
        m = ({
            image: e,
            video: s
        }) => {
            let d = (0, n.useRef)(null),
                [o, u] = (0, n.useState)(!1),
                m = (0, a.useInView)(d),
                f = (0, r.useReducedMotion)(),
                h = (0, l.default)("absolute cover z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": o && !f && m && s.src
                });
            return (0, t.jsxs)("div", {
                className: "relative aspect-video overflow-hidden rounded-2xl",
                ref: d,
                children: [(0, t.jsx)(i.default, {
                    src: e.src,
                    placeholder: "blur",
                    blurDataURL: e.placeholder,
                    fill: !0,
                    alt: e.alt ?? "",
                    className: h
                }), m && !f && s.src && (0, t.jsx)(c, {
                    url: s.src,
                    playing: !0,
                    loop: !0,
                    muted: !0,
                    playsinline: !0,
                    width: "100%",
                    height: "100%",
                    className: "[&>video]:object-cover",
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
            })
        },
        f = ({
            image: e,
            video: s
        }) => {
            let d = (0, n.useRef)(null),
                [o, u] = (0, n.useState)(!1),
                m = (0, a.useInView)(d),
                f = (0, r.useReducedMotion)(),
                h = (0, l.default)("absolute cover z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": o && !f && m && s.src
                });
            return (0, t.jsxs)("div", {
                className: "pointer-events-none absolute top-0 left-0 h-full w-full object-cover opacity-30",
                ref: d,
                children: [(0, t.jsx)(i.default, {
                    src: e.src,
                    placeholder: "blur",
                    blurDataURL: e.placeholder,
                    fill: !0,
                    alt: e.alt ?? "",
                    className: h
                }), m && !f && s.src && (0, t.jsx)(c, {
                    url: s.src,
                    playing: !0,
                    loop: !0,
                    muted: !0,
                    playsinline: !0,
                    width: "100%",
                    height: "100%",
                    className: "[&>video]:object-cover",
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
            })
        },
        h = ({
            tagline: e,
            visual: a,
            background: r,
            benefits: s = [],
            theme: i
        }) => {
            let n = (0, l.default)("relative bg-gray-100 px-4 pb-10 pt-8 lg:px-8 lg:pt-44", {
                "dark bg-gray-900": !i || "dark" === i
            });
            return (0, t.jsxs)("div", {
                className: n,
                children: [r && (0, t.jsx)(f, {
                    ...r
                }), (0, t.jsxs)("div", {
                    className: "relative z-10 md:grid md:grid-cols-12 md:gap-2",
                    children: [(0, t.jsx)("div", {
                        className: "relative row-start-1 md:col-start-1 md:col-end-13 lg:col-start-1 lg:col-end-9",
                        children: (0, t.jsx)("p", {
                            className: "loco-text-heading-md",
                            children: e
                        })
                    }), a && (0, t.jsx)("div", {
                        className: "relative col-start-1 col-end-5 row-start-2 mt-14",
                        children: (0, t.jsx)(m, {
                            ...a
                        })
                    }), s && (0, t.jsx)("div", {
                        className: "col-start-1 col-end-13 row-start-3 mt-14 md:mt-[10rem] lg:col-start-5 lg:col-end-13",
                        children: (0, t.jsx)("div", {
                            className: "lg:grid lg:grid-cols-8 lg:gap-2",
                            children: (0, t.jsx)("div", {
                                className: "lg:col-start-1 lg:col-end-9",
                                children: s.map((e, l) => (0, t.jsx)(u, {
                                    ...e
                                }, l))
                            })
                        })
                    })]
                })]
            })
        };
    e.s(["default", 0, ({
        tagline: e,
        visual: l,
        background: a,
        benefits: r,
        isHidden: s,
        theme: i
    }) => (0, t.jsx)(t.Fragment, {
        children: !s && (0, t.jsx)(h, {
            tagline: e,
            visual: l ? {
                image: {
                    src: l?.visualImage?.asset.url || "",
                    placeholder: l?.visualImage?.asset.metadata?.lqip || "",
                    alt: ""
                },
                video: {
                    src: l?.brandfolder?.muxHLSURL || ""
                }
            } : null,
            background: a ? {
                image: {
                    src: a?.image?.asset.url || "",
                    placeholder: a?.image?.asset.metadata?.lqip || ""
                },
                video: {
                    src: a?.brandfolder?.muxHLSURL || ""
                }
            } : null,
            benefits: r?.map(e => ({
                title: e.title,
                description: e.description || "",
                action: {
                    label: e.title,
                    href: e.link?.linkReference?.href.current || "#",
                    target: e.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                }
            })),
            theme: "dark" === i ? "dark" : "light"
        })
    })], 81636);
    var x = e.i(749583);
    let g = (0, s.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        p = ({
            title: e,
            description: s,
            image: d,
            video: o,
            actions: c
        }) => {
            let u = (0, n.useRef)(null),
                [m, f] = (0, n.useState)(!1),
                h = (0, a.useInView)(u, {
                    once: !0
                }),
                p = (0, r.useReducedMotion)(),
                v = (0, l.default)("z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": m && !p && h && o.src
                });
            return (0, t.jsx)("section", {
                className: "dark bg-gray-900",
                children: (0, t.jsxs)("div", {
                    ref: u,
                    className: "relative box-border flex min-h-screen flex-col items-center justify-center p-5",
                    children: [d && d.src && (0, t.jsx)(i.default, {
                        fill: !0,
                        alt: d.alt ?? "",
                        src: d.src,
                        className: v
                    }), h && !p && o.src && (0, t.jsx)(g, {
                        url: o.src,
                        playing: !0,
                        loop: !0,
                        muted: !0,
                        playsinline: !0,
                        width: "100%",
                        height: "100%",
                        className: "absolute top-0 left-0 brightness-50 [&>video]:object-cover",
                        onReady: () => {
                            f(!0)
                        },
                        config: {
                            hlsOptions: {
                                maxMaxBufferLength: 1,
                                startLevel: 1
                            }
                        }
                    }), (0, t.jsxs)("div", {
                        className: "relative z-10 max-w-3xl text-center text-white",
                        children: [(0, t.jsx)("h2", {
                            className: "loco-text-heading-md",
                            children: e
                        }), s && (0, t.jsx)("div", {
                            className: "loco-text-body-lg mt-2 opacity-70",
                            children: s
                        }), c && (0, t.jsxs)("div", {
                            className: "mt-6 flex justify-center gap-4",
                            children: [" ", c.map((e, l) => {
                                if (e.link) return (0, t.jsx)(x.default, {
                                    href: e.link.href,
                                    target: e.link.target,
                                    variant: 0 === l ? "primary" : "secondary",
                                    rounded: !0,
                                    hasArrow: !0,
                                    children: e.title
                                }, `full-screen-visual-action-link-${e.title}-${l}`);
                                if (e.form) {
                                    let a = {
                                        ...e.form.form,
                                        ...e.form.webinarFormParametersContent,
                                        extraFields: e.form.extraFields
                                    };
                                    return (0, t.jsx)("div", {
                                        children: e.form.renderModal({
                                            label: e.title,
                                            form: a
                                        })
                                    }, `full-screen-visual-action-modal-${e.title}-${l}`)
                                }
                            }), " "]
                        })]
                    })]
                })
            })
        };
    var v = e.i(115219);
    let b = ({
        title: e,
        description: l,
        image: a,
        brandfolder: r,
        actions: s,
        isHidden: i
    }) => {
        let {
            mapFormActions: n
        } = (0, v.useFormModal)(s), d = n(s);
        return (0, t.jsx)(t.Fragment, {
            children: !i && (0, t.jsx)(p, {
                title: e,
                description: l,
                image: {
                    src: a?.asset.url || "",
                    placeholder: a?.asset.metadata.lqip || ""
                },
                video: {
                    src: r?.muxHLSURL || ""
                },
                actions: d
            })
        })
    };
    e.s(["FullScreenVisualBlockSuspense", 0, e => (0, t.jsx)(n.default.Suspense, {
        fallback: (0, t.jsx)("div", {
            className: "h-screen w-full bg-black"
        }),
        children: (0, t.jsx)(b, {
            ...e
        })
    })], 673300);
    var j = e.i(803695),
        y = e.i(131564);
    let k = (0, s.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        w = ({
            slide: e,
            index: r,
            isActive: s,
            preferReducedMotion: d,
            isVisuallyActive: o,
            clickCallback: c,
            blurredBackground: u
        }) => {
            let m = (0, n.useRef)(null),
                [f, h] = (0, n.useState)(!1),
                x = (0, a.useInView)(m, {
                    once: !0
                }),
                g = (0, l.default)("relative aspect-video overflow-hidden rounded-2xl duration-500", {
                    "opacity-30": !o && !s
                }),
                p = (0, l.default)("absolute h-full w-full transition-opacity duration-500 z-[-1]"),
                v = (0, l.default)("absolute h-full w-full transition-opacity duration-500", {
                    "opacity-0": f && s && !d && x && e.video.src,
                    "object-contain": u
                });
            return (0, t.jsxs)("div", {
                className: g,
                ref: m,
                onClick: () => {
                    !s && c && c()
                },
                children: [e.mention && (0, t.jsx)("div", {
                    className: "absolute bottom-0 left-0 z-10 p-3 opacity-70",
                    children: e.mention
                }), e.image && e.image.src && !u ? (0, t.jsx)(i.default, {
                    src: e.image.src,
                    placeholder: "blur",
                    blurDataURL: e.image.placeholder,
                    fill: !0,
                    alt: e.image.alt,
                    className: v
                }) : (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(i.default, {
                        src: e.image.placeholder,
                        placeholder: "blur",
                        blurDataURL: e.image.placeholder,
                        fill: !0,
                        alt: e.image.alt,
                        className: p
                    }), (0, t.jsx)(i.default, {
                        src: e.image.src,
                        placeholder: "blur",
                        blurDataURL: e.image.placeholder,
                        fill: !0,
                        alt: e.image.alt,
                        className: v
                    })]
                }), x && !d && s && e.video.src && (0, t.jsx)(k, {
                    url: e.video.src,
                    playing: !0,
                    loop: !0,
                    muted: !0,
                    playsinline: !0,
                    width: "100%",
                    height: "100%",
                    className: "[&>video]:object-cover",
                    onReady: () => {
                        h(!0)
                    },
                    config: {
                        hlsOptions: {
                            maxMaxBufferLength: 1,
                            startLevel: 1
                        }
                    }
                }, `slide-video-${r}`)]
            }, `carousel-text-visual-${r}`)
        },
        N = ({
            title: e,
            action: l,
            slides: a,
            blurredBackground: s
        }) => {
            let [i, o] = (0, n.useState)(void 0), [c, u] = (0, n.useState)(void 0), [m, f] = (0, n.useState)(1), [h, g] = (0, n.useState)(0), [p, v] = (0, n.useState)(0), b = (0, n.useRef)(null), k = (0, n.useRef)(null), N = (0, n.useRef)(null), _ = (0, r.useReducedMotion)();
            (0, n.useEffect)(() => {
                k.current && N.current && (o(k.current), u(N.current))
            }, [k, N]);
            let L = (0, n.useCallback)((e, t) => {
                    f(t + 1), v(t)
                }, []),
                R = (0, n.useCallback)(e => {
                    g(e)
                }, []),
                C = (0, n.useCallback)(() => {
                    k.current && N.current && k.current.slickPrev()
                }, []),
                M = (0, n.useCallback)(() => {
                    k.current && N.current && k.current.slickNext()
                }, []),
                A = {
                    dots: !1,
                    infinite: !0,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: !1
                },
                $ = (0, n.useMemo)(() => a.map((e, l) => (0, t.jsx)("div", {
                    children: (0, t.jsxs)("div", {
                        className: "max-w-lg",
                        children: [(0, t.jsx)("h3", {
                            className: "loco-text-heading-xs",
                            children: e.title
                        }), e.author && (0, t.jsx)("p", {
                            className: "loco-text-body mt-6 opacity-70",
                            children: e.author
                        }), (0, t.jsx)("p", {
                            className: "loco-text-body mt-6 opacity-70",
                            children: e.description
                        }), e.action && e.action?.href && e.action?.title && (0, t.jsx)("div", {
                            className: "mt-6 mb-6",
                            children: (0, t.jsx)(x.default, {
                                href: e.action.href,
                                target: e.action.target,
                                rounded: !0,
                                outlined: !0,
                                hasArrow: !0,
                                children: e.action?.title
                            })
                        })]
                    })
                }, l)), [a]),
                T = (0, n.useMemo)(() => a.map((e, l) => (0, t.jsx)(w, {
                    slide: e,
                    index: l,
                    isActive: h === l,
                    isVisuallyActive: p === l,
                    preferReducedMotion: _,
                    clickCallback: M,
                    blurredBackground: s
                }, l)), [a, h, p, _, M]);
            return (0, t.jsx)("section", {
                className: "dark bg-black py-12",
                children: (0, t.jsxs)("div", {
                    className: "container md:max-w-none lg:pr-0",
                    children: [e && (0, t.jsx)(y.default, {
                        title: e,
                        actions: l ? [l] : []
                    }), (0, t.jsxs)("div", {
                        className: "relative mt-8 lg:grid lg:grid-cols-12 lg:gap-2",
                        ref: b,
                        children: [(0, t.jsx)("div", {
                            className: "relative col-start-4 col-end-13 row-start-1",
                            children: (0, t.jsx)("div", {
                                className: "overflow-hidden rounded-2xl lg:rounded-tr-none lg:rounded-br-none",
                                children: (0, t.jsx)("div", {
                                    className: "lg:grid lg:grid-cols-9 lg:gap-2",
                                    children: (0, t.jsx)("div", {
                                        className: "lg:col-span-8",
                                        children: (0, t.jsx)(j.default, {
                                            ...A,
                                            asNavFor: i,
                                            useTransform: !1,
                                            ref: N,
                                            className: "carousel-text-visual_visual m-0",
                                            children: T
                                        })
                                    })
                                })
                            })
                        }), (0, t.jsxs)("div", {
                            className: "relative col-start-1 col-end-4 row-start-1 pb-10",
                            children: [a.length > 1 && (0, t.jsx)("span", {
                                className: "loco-text-body-md text-blue mx-2.5 mt-2.5 mb-4 block lg:mt-0",
                                children: `${m<10?"0":""}${m} / ${a.length<10?"0":""}${a.length}`
                            }), (0, t.jsx)(j.default, {
                                className: "carousel-text-visual_text mt-4 lg:mt-0",
                                ...A,
                                draggable: !1,
                                asNavFor: c,
                                beforeChange: L,
                                afterChange: R,
                                fade: !0,
                                ref: k,
                                children: $
                            }), a.length > 1 && (0, t.jsxs)("div", {
                                className: "absolute bottom-0 left-3 flex gap-2",
                                children: [(0, t.jsx)(d.default, {
                                    direction: "left",
                                    onPress: C,
                                    ariaLabel: "Prev",
                                    variant: "primary"
                                }), (0, t.jsx)(d.default, {
                                    onPress: M,
                                    ariaLabel: "Next",
                                    variant: "primary"
                                })]
                            })]
                        })]
                    })]
                })
            })
        };
    e.s(["default", 0, ({
        blurredBackground: e = !1,
        title: l,
        action: a,
        slides: r,
        slidesBlog: s,
        slidesActionLabel: i = "View Post",
        isHidden: n
    }) => {
        let d = e => {
                let t, l = (e, t) => e?.length > t ? `${e.substring(0,t)}...` : e;
                return {
                    title: e.title || "",
                    author: e.author || "",
                    description: e.description || l(e?.seo?.teaserText, 250) || l(e?.seo?.description, 250) || "",
                    mention: e.mention || "",
                    image: {
                        src: e.image?.file?.asset.url || e.featuredImage?.file?.asset.url || "",
                        placeholder: e.image?.file?.asset.metadata?.lqip || e.featuredImage?.file?.asset.metadata?.lqip || "",
                        alt: e.image?.alt || e.featuredImage?.alt || ""
                    },
                    video: {
                        src: e.brandfolder?.muxHLSURL || ""
                    },
                    action: e.action ? (t = {
                        ...e.action,
                        title: e.action.title || ""
                    }, {
                        title: t?.title || "",
                        href: t?.link?.linkReference?.href.current || "",
                        target: t?.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                    }) : e?.pageUrl ? {
                        title: i,
                        href: e?.pageUrl?.link?.href?.current || "",
                        target: "_self"
                    } : null
                }
            },
            o = r?.map(d) || [],
            c = s?.map(d) || [],
            u = o.length > 0 ? o : c.length > 0 ? c : [];
        return (0, t.jsx)(t.Fragment, {
            children: !n && (0, t.jsx)(N, {
                title: l || "",
                action: a ? {
                    title: a.title || "",
                    href: a.link?.linkReference?.href.current || "",
                    target: a.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                } : null,
                slides: u,
                blurredBackground: e
            })
        })
    }], 5124)
}, 314669, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(655105),
        a = e.i(595388),
        r = e.i(722978);
    let s = ({
        logos: e
    }) => (0, t.jsx)("div", {
        className: "container my-8",
        children: (0, t.jsx)("div", {
            className: "grid w-full grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5",
            children: e?.map((e, s) => {
                let i = (0, r.default)("rounded bg-gray-100 p-4  md:p-8", {
                    "hover:bg-white transition-all ease-in-out duration-1000": e?.action?.href
                });
                return (0, t.jsxs)("div", {
                    children: [!e.action?.href && (0, t.jsx)("div", {
                        className: i,
                        children: (0, t.jsx)("div", {
                            className: "relative aspect-square w-full",
                            children: (0, t.jsx)(l.default, {
                                src: e.src || "",
                                alt: e.alt || "",
                                placeholder: "blur",
                                blurDataURL: e.placeholder,
                                className: "rounded-lg object-contain",
                                fill: !0
                            })
                        })
                    }), e.action?.href && (0, t.jsx)(a.Link, {
                        href: e.action.href,
                        target: e.action.target || "_self",
                        children: (0, t.jsx)("div", {
                            className: i,
                            children: (0, t.jsx)("div", {
                                className: "relative aspect-square w-full",
                                children: (0, t.jsx)(l.default, {
                                    src: e.src || "",
                                    alt: e.alt || "",
                                    placeholder: "blur",
                                    blurDataURL: e.placeholder,
                                    className: "rounded-lg object-contain",
                                    fill: !0
                                })
                            })
                        })
                    })]
                }, `logos-bank-logo-${s}`)
            })
        })
    });
    e.s(["default", 0, ({
        logos: e,
        isHidden: l
    }) => {
        let a = e?.map(e => ({
            src: e?.image?.file?.asset.url,
            alt: e?.image?.alt || "",
            placeholder: e?.image?.file?.asset.metadata?.lqip,
            action: {
                href: e?.action?.href.current,
                target: e?.action?.target
            }
        }));
        return (0, t.jsx)(t.Fragment, {
            children: !l && (0, t.jsx)(s, {
                logos: a
            })
        })
    }], 314669)
}, 583877, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(200241),
        a = e.i(722978),
        r = e.i(3931);
    let s = () => (0, t.jsx)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, t.jsx)("path", {
                d: "M2.5 8H13.5M8 2.5V13.5",
                stroke: "#4C4C4C",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        }),
        i = () => (0, t.jsx)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, t.jsx)("path", {
                d: "M2.5 8H13.5",
                stroke: "black",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        }),
        n = ({
            date: e,
            dayOfWeek: l,
            defaultOpen: a,
            activities: n,
            footer: d
        }) => {
            let [o, c] = (0, r.useState)(a);
            return (0, t.jsxs)("details", {
                open: o,
                onToggle: e => {
                    c(e.target.open)
                },
                className: "rounded-lg bg-gray-100 dark:bg-gray-800",
                children: [(0, t.jsxs)("summary", {
                    className: "flex cursor-pointer items-center p-6",
                    children: [(0, t.jsxs)("div", {
                        className: "flex w-full flex-col md:flex-row md:items-center",
                        children: [(0, t.jsx)("div", {
                            className: "loco-text-body text-gray-600 md:w-[19rem] dark:text-gray-400",
                            children: e
                        }), (0, t.jsx)("div", {
                            className: "loco-text-body-lg-medium text-gray-800 capitalize dark:text-gray-200",
                            children: l
                        })]
                    }), (0, t.jsx)("div", {
                        children: o ? (0, t.jsx)(i, {}) : (0, t.jsx)(s, {})
                    })]
                }), (0, t.jsxs)("div", {
                    className: "flex flex-col px-6 pb-6 md:ml-[19rem]",
                    children: [n?.map(e => {
                        let {
                            title: l,
                            startTime: a,
                            endTime: r
                        } = e, s = r ? `${a} - ${r}` : a;
                        return (0, t.jsxs)("div", {
                            className: "flex flex-col gap-2 pt-6 first:mt-4 first:border-t first:border-gray-300 sm:flex-row dark:first:border-gray-700",
                            children: [s && (0, t.jsx)("div", {
                                className: "loco-text-body-sm w-36 shrink-0 text-gray-600 dark:text-gray-400",
                                children: s
                            }), l && (0, t.jsx)("div", {
                                className: "loco-text-body-md text-black dark:text-white",
                                children: l
                            })]
                        }, `agenda-event-${l}-${a}`)
                    }), (0, t.jsx)("div", {
                        className: "loco-text-body-sm pt-6 text-gray-600 italic dark:text-gray-400",
                        children: d
                    })]
                })]
            })
        },
        d = ({
            theme: e,
            agendaCards: l
        }) => {
            let r = (0, a.default)({
                dark: "dark" === e
            });
            return (0, t.jsx)("section", {
                className: r,
                children: (0, t.jsx)("div", {
                    className: "bg-white py-10 md:py-20 dark:bg-gray-900",
                    children: (0, t.jsx)("div", {
                        className: "container flex flex-col gap-2",
                        children: l.map((e, l) => (0, t.jsx)(n, {
                            defaultOpen: 0 === l,
                            ...e
                        }, `agenda-card-${e.date}-${e.dayOfWeek}-${l}`))
                    })
                })
            })
        };
    e.s(["default", 0, ({
        theme: e = "light",
        isHidden: a,
        agendaCards: r
    }) => {
        let s = (0, l.useLocale)();
        return a ? null : (0, t.jsx)(d, {
            theme: "dark" === e ? "dark" : "light",
            agendaCards: r?.map(e => ({
                date: e?.date ? new Intl.DateTimeFormat(s, {
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC"
                }).format(new Date(e.date)) : "",
                dayOfWeek: e?.date ? new Intl.DateTimeFormat(s, {
                    weekday: "long",
                    timeZone: "UTC"
                }).format(new Date(e.date)) : "",
                footer: e?.footer || "",
                activities: e?.activities?.map(e => ({
                    title: e.title,
                    startTime: e.startTime,
                    endTime: e.endTime
                })) || []
            })) || []
        })
    }], 583877)
}, 277965, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(153348),
        a = e.i(955429),
        r = e.i(376936),
        s = e.i(192207),
        i = e.i(526826),
        n = e.i(3931),
        d = e.i(722978),
        o = e.i(828083),
        c = e.i(655105),
        u = e.i(783078),
        m = e.i(749583),
        f = e.i(186114),
        h = e.i(430215),
        x = e.i(195051),
        g = e.i(766930);
    let p = ({
            provider: g,
            title: p,
            description: v,
            action: b,
            image: j,
            video: y,
            videoInline: k = !1,
            buttonLabel: w = "Play video",
            blockedMessage: N,
            consentButtonLabel: _,
            heading: L = "h3"
        }) => {
            let R = (0, h.default)(`(min-width: ${u.default.Medium}px)`),
                C = (0, n.useRef)(null),
                [M, A] = (0, n.useState)(!1),
                $ = (0, l.useInView)(C),
                T = (0, a.useReducedMotion)(),
                S = null;
            "youtube" === g ? S = (0, o.default)(() => e.A(269100), {
                loadableGenerated: {
                    modules: [346003]
                },
                ssr: !1
            }) : "brandfolder" === g && (S = (0, o.default)(() => e.A(410979), {
                loadableGenerated: {
                    modules: [942019]
                },
                ssr: !1
            }));
            let F = {};
            "brandfolder" === g && (F = {
                hlsOptions: {
                    maxMaxBufferLength: 1,
                    qualityStartLevel: 1
                }
            });
            let {
                scrollYProgress: P
            } = (0, r.useScroll)({
                target: C,
                offset: ["start end", "end end"]
            }), z = (0, s.useTransform)(P, [0, 1], ["60%", "100%"]), O = (0, s.useTransform)(P, [0, 1], [1.75, 1]), I = (0, s.useTransform)(P, [0, 1], ["brightness(50%)", "brightness(100%)"]), B = () => {
                k && "brandfolder" === g && A(!0)
            }, U = () => {
                A(!0)
            }, E = (0, d.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": M && !T && $ && y?.src
            });
            return (0, t.jsxs)("div", {
                ref: C,
                className: "flex flex-col gap-4 border-t border-gray-300 p-6 md:flex-row dark:border-gray-800 dark:bg-black [&_.consent]:md:justify-start [&_.consent>div.text]:md:w-11/12",
                children: [R && (0, t.jsx)("div", {
                    className: "md:w-[50%]",
                    children: (0, t.jsxs)(i.m.div, {
                        style: {
                            width: z,
                            filter: I
                        },
                        className: "relative aspect-video overflow-hidden rounded-lg",
                        children: [(0, t.jsxs)(i.m.div, {
                            style: {
                                scale: O
                            },
                            className: "relative h-full w-full",
                            children: [y && (0, t.jsx)(t.Fragment, {
                                children: $ && !T && y?.src && S && (0, t.jsx)(S, {
                                    url: y.src,
                                    playing: M,
                                    loop: k && "brandfolder" === g,
                                    muted: k && "brandfolder" === g,
                                    playsinline: k && "brandfolder" === g,
                                    width: "100%",
                                    height: "100%",
                                    className: "[&>video]:object-cover",
                                    onReady: B,
                                    onPlay: U,
                                    controls: !k || "brandfolder" !== g,
                                    config: F
                                })
                            }), j && (0, t.jsxs)("div", {
                                className: E,
                                onClick: U,
                                children: [y?.src && (!k || "brandfolder" !== g) && (0, t.jsx)(f.default, {
                                    handleIsPlaying: U,
                                    className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                    label: w
                                }), (0, t.jsx)(c.default, {
                                    src: j.src,
                                    placeholder: "blur",
                                    blurDataURL: j.placeholder,
                                    fill: !0,
                                    alt: j.alt ?? "",
                                    className: "cover absolute object-cover brightness-75",
                                    sizes: `(min-width: ${u.default.Large}px) 33vw, (min-width: ${u.default.Medium}px) 50vw, 100vw`
                                })]
                            })]
                        }), y?.src?.includes("youtube.com") && (0, t.jsx)(x.default, {
                            blockedMessage: N,
                            consentButtonLabel: _
                        })]
                    })
                }), !R && (0, t.jsxs)("div", {
                    className: "relative aspect-video overflow-hidden rounded-lg md:hidden",
                    children: [(0, t.jsxs)("div", {
                        className: "relative h-full w-full",
                        children: [y && (0, t.jsx)(t.Fragment, {
                            children: $ && !T && y?.src && S && (0, t.jsx)(S, {
                                url: y.src,
                                playing: M,
                                loop: k && "brandfolder" === g,
                                muted: k && "brandfolder" === g,
                                playsinline: k && "brandfolder" === g,
                                width: "100%",
                                height: "100%",
                                className: "[&>video]:object-cover",
                                onReady: B,
                                onPlay: U,
                                controls: !k && "brandfolder" !== g,
                                config: F
                            })
                        }), j && (0, t.jsxs)("div", {
                            className: E,
                            onClick: U,
                            children: [y?.src && (!k || "brandfolder" !== g) && (0, t.jsx)(f.default, {
                                handleIsPlaying: U,
                                className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                label: w
                            }), (0, t.jsx)(c.default, {
                                src: j.src,
                                placeholder: "blur",
                                blurDataURL: j.placeholder,
                                fill: !0,
                                alt: j.alt ?? "",
                                className: "cover absolute object-cover brightness-75",
                                sizes: `(min-width: ${u.default.Large}px) 33vw, (min-width: ${u.default.Medium}px) 50vw, 100vw`
                            })]
                        })]
                    }), y?.src?.includes("youtube.com") && (0, t.jsx)(x.default, {
                        blockedMessage: N,
                        consentButtonLabel: _
                    })]
                }), (0, t.jsx)("div", {
                    className: "md:ml-5 md:w-[25%]",
                    children: (0, t.jsx)(L, {
                        className: "loco-text-body-lg-medium",
                        children: p
                    })
                }), (0, t.jsx)("div", {
                    className: "flex grow flex-col md:w-[50%]",
                    children: (0, t.jsxs)("div", {
                        className: "flex shrink-0 grow flex-col justify-between",
                        children: [(0, t.jsx)("div", {
                            className: "loco-text-body text-gray-700 dark:text-gray-400",
                            children: v
                        }), (0, t.jsx)("div", {
                            className: "mt-8",
                            children: (0, t.jsx)(m.default, {
                                href: b?.href,
                                target: b?.target,
                                outlined: !0,
                                rounded: !0,
                                hasArrow: !0,
                                children: b?.label
                            })
                        })]
                    })
                })]
            })
        },
        v = ({
            theme: e = "light",
            features: l = [],
            featuresHeading: a = "h3"
        }) => {
            let r = (0, n.useRef)(null),
                s = (0, d.default)("w-full", {
                    dark: "dark" === e
                });
            return (0, t.jsx)(g.default, {
                children: (0, t.jsx)("div", {
                    ref: r,
                    className: s,
                    children: l && l.map((e, l) => (0, t.jsx)(p, {
                        ...e,
                        heading: a
                    }, l))
                })
            })
        },
        b = e => {
            let t = null;
            return "brandfolder" === e.provider ? t = "brandfolder" : "youtube" === e.provider && (t = "youtube"), {
                title: e?.title ?? "",
                description: e?.description ?? "",
                action: e?.action ? {
                    label: e.action.title ?? "",
                    href: e.action.link?.linkReference?.href.current ?? "",
                    target: e.action.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                } : null,
                video: {
                    src: ("brandfolder" === e.provider ? e.brandfolder?.muxHLSURL : e.youtube_url) ?? null
                },
                videoInline: e.videoInline,
                image: e.image && {
                    src: e.image?.file?.asset.url ?? "",
                    alt: e.image?.alt ?? "",
                    placeholder: e.image?.file?.asset.metadata?.lqip ?? ""
                } || null,
                provider: t,
                buttonLabel: e.buttonLabel,
                blockedMessage: e.consent?.blockedMessage,
                consentButtonLabel: e.consent?.consentButtonLabel
            }
        };
    e.s(["default", 0, ({
        theme: e,
        features: l,
        isHidden: a,
        featuresHeading: r
    }) => {
        let s = l?.map(b);
        return (0, t.jsx)(t.Fragment, {
            children: !a && (0, t.jsx)(v, {
                theme: "dark" === e ? "dark" : "light",
                features: s,
                featuresHeading: "h2" === r || "h4" === r ? r : "h3"
            })
        })
    }], 277965)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "fc9fde78-1198-59b3-8088-685db50bef70")
    } catch (e) {}
}();
//# debugId=fc9fde78-1198-59b3-8088-685db50bef70