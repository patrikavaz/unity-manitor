(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 480880, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(3931);
    e.s(["default", 0, ({
        blocks: e,
        blockMap: l,
        ...r
    }) => (0, t.jsx)(t.Fragment, {
        children: e?.map((e, s) => {
            let i = e?._type,
                n = l[i];
            return e.isHidden ? null : n ? (0, t.jsx)("div", {
                children: a.default.createElement(n, {
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
        a = e.i(389240);
    let l = new Map([
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
        o = Object.prototype.hasOwnProperty,
        c = Object.prototype.propertyIsEnumerable,
        d = (e, t, a) => t in e ? r(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: a
        }) : e[t] = a;
    let u = (0, t.forwardRef)((e, r) => t.default.createElement(a.default, s(((e, t) => {
        for (var a in t || (t = {})) o.call(t, a) && d(e, a, t[a]);
        if (n)
            for (var a of n(t)) c.call(t, a) && d(e, a, t[a]);
        return e
    })({
        ref: r
    }, e), i({
        weights: l
    }))));
    u.displayName = "Info", e.s(["Info", 0, u], 985904)
}, 401861, 841889, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(722978),
        l = e.i(3931),
        r = e.i(985904),
        s = e.i(146911);
    let i = ({
            title: e,
            text: i,
            action: n,
            truncate: o,
            className: c = "",
            isContained: d,
            dismiss: u
        }) => {
            let m = (0, l.useMemo)(() => `unity-alert-${i?.substring(0,30).replaceAll(" ","_")}`, [i]),
                [f, h] = (0, l.useState)(!0),
                [x, g] = (0, l.useState)(!1);
            return ((0, l.useEffect)(() => {
                localStorage?.getItem(m) && g(!0)
            }, [m]), x) ? null : (0, t.jsx)("div", {
                className: (0, a.clsx)({
                    container: d
                }),
                children: (0, t.jsxs)("div", {
                    className: (0, a.clsx)("dark:bg-blue/10 relative flex w-full flex-col justify-between gap-4 bg-sky-100 py-4 pr-5 pl-11 text-sm text-gray-900 transition-colors sm:flex-row", {
                        flex: u?.enabled
                    }, {
                        "rounded-lg": d
                    }, c),
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
                                className: (0, a.clsx)({
                                    "line-clamp-4 sm:line-clamp-2": o?.enabled && f
                                }),
                                children: i
                            }), o?.enabled && (0, t.jsx)("button", {
                                onClick: () => h(!f),
                                className: "text-tiny shadow-underline-sm hover:text-blue hover:shadow-underline focus:text-blue dark:hover:text-blue text-black transition duration-200 dark:text-white",
                                children: f ? o.seeMoreLabel : o.seeLessLabel
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
            text: l,
            action: r,
            theme: s,
            truncate: n,
            dismiss: o,
            isContained: c,
            isHidden: d,
            spacing: u
        }) => {
            let m = (0, a.clsx)({
                "pt-10": u?.top
            }, {
                "pb-10": u?.bottom
            }, {
                "dark bg-black": "dark" === s
            });
            return d || !l ? null : (0, t.jsx)("section", {
                className: m,
                children: (0, t.jsx)(i, {
                    title: e,
                    text: l,
                    isContained: c,
                    truncate: n || {},
                    dismiss: o || {},
                    action: r && {
                        title: r?.text || "",
                        href: r?.fieldLink?.linkReference?.href?.current || "",
                        target: r?.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self"
                    }
                })
            })
        };
    e.s(["default", 0, n], 841889), e.s(["default", 0, n], 401861)
}, 246916, e => {
    "use strict";
    var t = e.i(430907),
        a = e.i(447093),
        l = e.i(31588);
    e.s(["useMTBanner", 0, function(e, r = []) {
        var s, i;
        let n, o, c, d, u, m = (0, t.usePathname)(),
            f = (0, a.useLocale)(),
            h = f !== l.defaultLocale ? m.replace(`/${f}`, "") : m;
        return {
            shouldDisplayMTBanner: f !== l.defaultLocale && e?.translationType === "MT" && !r.includes(h),
            updatedBlocks: (s = e.blocks ?? [], i = e.machineTranslationDisclaimer, n = s.reduce((e, t, a) => ["hero", "alternateNavigation", "headliner"].includes(t._type) ? a : e, -1), o = [...s], c = o[n + 1]?._type === "alternateNavigationAnchor" || o[n + 1]?._type === "anchorButton" ? o[n + 2] : o[n + 1], d = c?.theme ?? null, u = {
                _type: "alert",
                text: i?.text,
                isContained: !0,
                spacing: {
                    bottom: !0,
                    top: !0
                },
                ...d && {
                    theme: d
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
            }, -1 === n ? o.unshift(u) : o.splice(n + 1, 0, u), o),
            redirectPathName: h
        }
    }], 246916)
}, 239145, (e, t, a) => {
    t.exports = function(e, t) {
        for (var a = -1, l = null == e ? 0 : e.length, r = Array(l); ++a < l;) r[a] = t(e[a], a, e);
        return r
    }
}, 873021, (e, t, a) => {
    var l = e.r(328042),
        r = e.r(239145),
        s = e.r(778116),
        i = e.r(692558),
        n = 1 / 0,
        o = l ? l.prototype : void 0,
        c = o ? o.toString : void 0;
    t.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (s(t)) return r(t, e) + "";
        if (i(t)) return c ? c.call(t) : "";
        var a = t + "";
        return "0" == a && 1 / t == -n ? "-0" : a
    }
}, 553050, (e, t, a) => {
    var l = e.r(873021);
    t.exports = function(e) {
        return null == e ? "" : l(e)
    }
}, 343346, (e, t, a) => {
    t.exports = function(e, t) {
        return e === t || e != e && t != t
    }
}, 430215, e => {
    "use strict";
    var t = e.i(3931);
    e.s(["default", 0, e => {
        let [a, l] = (0, t.useState)(!1);
        return (0, t.useEffect)(() => {
            let t = window.matchMedia(e);
            t.matches !== a && l(t.matches);
            let r = () => l(t.matches);
            return window.addEventListener("resize", r), () => window.removeEventListener("resize", r)
        }, [a, e]), a
    }])
}, 647562, (e, t, a) => {
    var l = e.r(778116),
        r = e.r(692558),
        s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        i = /^\w*$/;
    t.exports = function(e, t) {
        if (l(e)) return !1;
        var a = typeof e;
        return !!("number" == a || "symbol" == a || "boolean" == a || null == e || r(e)) || i.test(e) || !s.test(e) || null != t && e in Object(t)
    }
}, 977902, (e, t, a) => {
    t.exports = e.r(581511)(Object, "create")
}, 708867, (e, t, a) => {
    var l = e.r(977902);
    t.exports = function() {
        this.__data__ = l ? l(null) : {}, this.size = 0
    }
}, 447265, (e, t, a) => {
    t.exports = function(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= !!t, t
    }
}, 150095, (e, t, a) => {
    var l = e.r(977902),
        r = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        var t = this.__data__;
        if (l) {
            var a = t[e];
            return "__lodash_hash_undefined__" === a ? void 0 : a
        }
        return r.call(t, e) ? t[e] : void 0
    }
}, 884942, (e, t, a) => {
    var l = e.r(977902),
        r = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        var t = this.__data__;
        return l ? void 0 !== t[e] : r.call(t, e)
    }
}, 985902, (e, t, a) => {
    var l = e.r(977902);
    t.exports = function(e, t) {
        var a = this.__data__;
        return this.size += +!this.has(e), a[e] = l && void 0 === t ? "__lodash_hash_undefined__" : t, this
    }
}, 298435, (e, t, a) => {
    var l = e.r(708867),
        r = e.r(447265),
        s = e.r(150095),
        i = e.r(884942),
        n = e.r(985902);

    function o(e) {
        var t = -1,
            a = null == e ? 0 : e.length;
        for (this.clear(); ++t < a;) {
            var l = e[t];
            this.set(l[0], l[1])
        }
    }
    o.prototype.clear = l, o.prototype.delete = r, o.prototype.get = s, o.prototype.has = i, o.prototype.set = n, t.exports = o
}, 765776, (e, t, a) => {
    t.exports = function() {
        this.__data__ = [], this.size = 0
    }
}, 641664, (e, t, a) => {
    var l = e.r(343346);
    t.exports = function(e, t) {
        for (var a = e.length; a--;)
            if (l(e[a][0], t)) return a;
        return -1
    }
}, 915386, (e, t, a) => {
    var l = e.r(641664),
        r = Array.prototype.splice;
    t.exports = function(e) {
        var t = this.__data__,
            a = l(t, e);
        return !(a < 0) && (a == t.length - 1 ? t.pop() : r.call(t, a, 1), --this.size, !0)
    }
}, 857624, (e, t, a) => {
    var l = e.r(641664);
    t.exports = function(e) {
        var t = this.__data__,
            a = l(t, e);
        return a < 0 ? void 0 : t[a][1]
    }
}, 219301, (e, t, a) => {
    var l = e.r(641664);
    t.exports = function(e) {
        return l(this.__data__, e) > -1
    }
}, 682947, (e, t, a) => {
    var l = e.r(641664);
    t.exports = function(e, t) {
        var a = this.__data__,
            r = l(a, e);
        return r < 0 ? (++this.size, a.push([e, t])) : a[r][1] = t, this
    }
}, 990543, (e, t, a) => {
    var l = e.r(765776),
        r = e.r(915386),
        s = e.r(857624),
        i = e.r(219301),
        n = e.r(682947);

    function o(e) {
        var t = -1,
            a = null == e ? 0 : e.length;
        for (this.clear(); ++t < a;) {
            var l = e[t];
            this.set(l[0], l[1])
        }
    }
    o.prototype.clear = l, o.prototype.delete = r, o.prototype.get = s, o.prototype.has = i, o.prototype.set = n, t.exports = o
}, 817416, (e, t, a) => {
    var l = e.r(298435),
        r = e.r(990543),
        s = e.r(764138);
    t.exports = function() {
        this.size = 0, this.__data__ = {
            hash: new l,
            map: new(s || r),
            string: new l
        }
    }
}, 365867, (e, t, a) => {
    t.exports = function(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    }
}, 476501, (e, t, a) => {
    var l = e.r(365867);
    t.exports = function(e, t) {
        var a = e.__data__;
        return l(t) ? a["string" == typeof t ? "string" : "hash"] : a.map
    }
}, 792520, (e, t, a) => {
    var l = e.r(476501);
    t.exports = function(e) {
        var t = l(this, e).delete(e);
        return this.size -= !!t, t
    }
}, 349966, (e, t, a) => {
    var l = e.r(476501);
    t.exports = function(e) {
        return l(this, e).get(e)
    }
}, 649884, (e, t, a) => {
    var l = e.r(476501);
    t.exports = function(e) {
        return l(this, e).has(e)
    }
}, 884711, (e, t, a) => {
    var l = e.r(476501);
    t.exports = function(e, t) {
        var a = l(this, e),
            r = a.size;
        return a.set(e, t), this.size += +(a.size != r), this
    }
}, 158774, (e, t, a) => {
    var l = e.r(817416),
        r = e.r(792520),
        s = e.r(349966),
        i = e.r(649884),
        n = e.r(884711);

    function o(e) {
        var t = -1,
            a = null == e ? 0 : e.length;
        for (this.clear(); ++t < a;) {
            var l = e[t];
            this.set(l[0], l[1])
        }
    }
    o.prototype.clear = l, o.prototype.delete = r, o.prototype.get = s, o.prototype.has = i, o.prototype.set = n, t.exports = o
}, 528535, (e, t, a) => {
    var l = e.r(158774);

    function r(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw TypeError("Expected a function");
        var a = function() {
            var l = arguments,
                r = t ? t.apply(this, l) : l[0],
                s = a.cache;
            if (s.has(r)) return s.get(r);
            var i = e.apply(this, l);
            return a.cache = s.set(r, i) || s, i
        };
        return a.cache = new(r.Cache || l), a
    }
    r.Cache = l, t.exports = r
}, 593613, (e, t, a) => {
    var l = e.r(528535);
    t.exports = function(e) {
        var t = l(e, function(e) {
                return 500 === a.size && a.clear(), e
            }),
            a = t.cache;
        return t
    }
}, 837344, (e, t, a) => {
    var l = e.r(593613),
        r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        s = /\\(\\)?/g;
    t.exports = l(function(e) {
        var t = [];
        return 46 === e.charCodeAt(0) && t.push(""), e.replace(r, function(e, a, l, r) {
            t.push(l ? r.replace(s, "$1") : a || e)
        }), t
    })
}, 6205, (e, t, a) => {
    var l = e.r(778116),
        r = e.r(647562),
        s = e.r(837344),
        i = e.r(553050);
    t.exports = function(e, t) {
        return l(e) ? e : r(e, t) ? [e] : s(i(e))
    }
}, 812232, (e, t, a) => {
    var l = e.r(692558),
        r = 1 / 0;
    t.exports = function(e) {
        if ("string" == typeof e || l(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -r ? "-0" : t
    }
}, 555902, (e, t, a) => {
    var l = e.r(6205),
        r = e.r(812232);
    t.exports = function(e, t) {
        t = l(t, e);
        for (var a = 0, s = t.length; null != e && a < s;) e = e[r(t[a++])];
        return a && a == s ? e : void 0
    }
}, 375194, (e, t, a) => {
    var l = e.r(555902);
    t.exports = function(e, t, a) {
        var r = null == e ? void 0 : l(e, t);
        return void 0 === r ? a : r
    }
}, 641077, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(3931);
    let l = (0, a.createContext)({
        products: []
    });
    e.s(["PageCommerceProvider", 0, function({
        products: e,
        children: r
    }) {
        let s = (0, a.useMemo)(() => ({
            products: e
        }), [e]);
        return (0, t.jsx)(l.Provider, {
            value: s,
            children: r
        })
    }, "usePageCommerce", 0, function() {
        return (0, a.useContext)(l)
    }])
}, 326388, e => {
    "use strict";
    var t = e.i(955592),
        a = e.i(375194),
        l = e.i(433519),
        r = e.i(641077),
        s = e.i(544923);
    let i = (e, t) => t?.country ? e?.country?.toLowerCase().localeCompare(t?.country.toLowerCase()) || 0 : -1,
        n = {
            currency: "USD"
        },
        o = e => e?.text !== null && e?.text !== void 0 || (e?.children ? e.children.every(o) : !!Array.isArray(e) && e.every(o));
    e.s(["default", 0, () => {
        let {
            state: e
        } = (0, l.default)(), {
            products: c
        } = (0, r.usePageCommerce)(), [d] = (0, s.default)("location", "US"), u = t => {
            let a = t?.variantPrices.sort(i),
                l = e => a?.find(t => t.currency?.toLowerCase() === e?.currency?.toLowerCase() && (t.country?.toLowerCase() === d?.toLowerCase() || !t.country))?.price;
            return l(e) ? [l(e), !1] : [l(n), !0]
        }, m = e => {
            if (!e) return {};
            let {
                productVariants: t,
                productKey: a
            } = e, l = {
                productKey: null
            };
            return t?.forEach(e => {
                let [t] = u(e);
                e?.productVariantName && (l[e.productVariantName] = {
                    price: t
                })
            }), l
        }, f = (e, a) => {
            if (!a || !e) return e;
            let l = m(a);
            return t.default.render(e, l)
        }, h = (e, a) => {
            let l;
            if (!a || !e) return e;
            let r = (l = {
                productKey: null
            }, a.forEach(e => {
                if (!e) return {};
                let {
                    productVariants: t
                } = e;
                t?.forEach(e => {
                    let [t] = u(e);
                    e?.productVariantName && (l[e.productVariantName] = {
                        price: t
                    })
                })
            }), l);
            return t.default.render(e, r)
        }, x = (e, l) => {
            if (!l || !e) return e;
            let r = e.match(/{{\s*[\w\.-]+\s*}}/g)?.map(e => e?.match(/[\w\.-]+/)?.[0] || "");
            if (void 0 === r) return e;
            let s = m(l);
            return l && r?.every(e => (0, a.default)(s, e)) ? t.default.render(e, s) : null
        }, g = (e, t, a = f) => e?.map(e => {
            if (e?._type === "block") return {
                ...e,
                children: g(e.children, t, a)
            };
            if (e?._type !== "span") return e;
            {
                let l = a(e.text, t);
                return {
                    ...e,
                    text: l
                }
            }
        });
        return {
            currency: e.currency,
            location: d,
            appendCommerceData: f,
            appendCommerceDataToPortableText: g,
            renderWithAllVariablesToPortableText: (e, t) => {
                let a = g(e, t, x);
                return o(a) ? a : null
            },
            getPrice: u,
            appendCommerceDataForMultipleProducts: h,
            appendPageCommerceData: e => h(e, c),
            appendPageCommerceDataToPortableText: e => g(e, void 0, e => h(e, c))
        }
    }], 326388)
}, 996332, 422664, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(722978),
        l = e.i(655105);
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
            } [e], o = (0, a.default)("inline-block", "rounded-full overflow-hidden relative shrink-0 mr-3 hidden lg:block md:block");
            return (0, t.jsx)("div", {
                className: o,
                children: (0, t.jsx)(l.default, {
                    src: r,
                    alt: s,
                    width: i,
                    height: n
                })
            })
        },
        s = ({
            avatar: e,
            name: l,
            company: s,
            role: i,
            size: n = "m"
        }) => {
            let o = (0, a.default)("text-gray-900 dark:text-gray-100 pb-1", {
                    "loco-caption-lg-semibold": "m" === n,
                    "loco-caption-sm-semibold": "s" === n || "xs" === n || "xxs" === n
                }),
                c = (0, a.default)("text-gray-700 dark:text-gray-300 tracking-normal", {
                    "loco-text-body-xs-semibold": "m" === n,
                    "loco-text-body-sm-medium": "s" === n || "xs" === n || "xxs" === n
                });
            return (0, t.jsxs)("div", {
                className: "flex items-center",
                children: [e && (0, t.jsx)(r, {
                    url: e,
                    size: n,
                    alt: l
                }), (0, t.jsxs)("div", {
                    className: "flex flex-col",
                    children: [(0, t.jsxs)("span", {
                        className: o,
                        children: [l?.toUpperCase(), " ", s && l && "/" || "", " ", s?.toUpperCase()]
                    }), (0, t.jsx)("span", {
                        className: c,
                        children: i
                    })]
                })]
            })
        };
    e.s(["default", 0, s], 422664);
    let i = ({
        content: e,
        author: l,
        className: r = "",
        textClassName: i = ""
    }) => {
        let n = (0, a.default)("p-6 rounded-xl", r),
            o = (0, a.default)("mb-6 text-gray-800 dark:text-gray-200", i);
        return (0, t.jsxs)("div", {
            className: n,
            children: [(0, t.jsx)("div", {
                className: o,
                children: e
            }), (0, t.jsx)(s, {
                ...l
            })]
        })
    };
    e.s(["default", 0, ({
        title: e,
        testimonials: l,
        layout: r = "one-layout",
        testimonialVariant: s = "default",
        className: n = ""
    }) => {
        let o = (0, a.default)({
                "one-layout": "col-span-12",
                "two-layout": "col-span-12 md:col-span-6 flex",
                "three-layout": "col-span-12 md:col-span-6 lg:col-span-4 flex"
            } [r]),
            c = (0, a.default)("one-layout" !== r && "flex flex-col justify-between w-full", {
                "bg-gray-100 dark:bg-gray-900": "default" === s
            }, {
                "border border-gray-200 dark:border-gray-700": "outlined" === s && !e
            }),
            d = (0, a.default)({
                "auto-rows-fr": "one-layout" !== r
            }, "grid grid-cols-12 gap-4", n),
            u = (0, a.default)("container py-0 md:py-16", {
                "bg-gray-100 dark:bg-gray-900 rounded-2xl": e,
                "border border-gray-200 dark:border-gray-700 bg-transparent": "outlined" === s && e
            }),
            m = (0, a.default)({
                "loco-text-body-sm-medium": "two-layout" === r || "three-layout" === r,
                "loco-text-body-lg-medium": "one-layout" === r
            });
        return (0, t.jsxs)("div", {
            className: u,
            children: [e && (0, t.jsx)("div", {
                className: "loco-text-heading-sm p-6",
                children: e
            }), (0, t.jsx)("div", {
                className: d,
                children: l?.map((e, a) => {
                    let {
                        content: l,
                        author: r,
                        _key: s
                    } = e;
                    return (0, t.jsx)("div", {
                        className: o,
                        children: (0, t.jsx)(i, {
                            content: l,
                            author: r,
                            className: c,
                            textClassName: m
                        })
                    }, `${s}-${a}`)
                })
            })]
        })
    }], 996332)
}, 787213, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(996332);
    e.s(["default", 0, ({
        title: e,
        layout: l,
        testimonialVariant: r,
        testimonials: s,
        theme: i,
        hideAuthorImage: n,
        isHidden: o
    }) => {
        let c = s?.map((e, t) => ({
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
            children: !o && (0, t.jsx)("section", {
                className: "dark" === i ? "dark" : "",
                children: (0, t.jsx)("div", {
                    className: "dark:bg-gray-900",
                    children: (0, t.jsx)(a.default, {
                        testimonials: c,
                        title: e,
                        layout: "two-layout" === l ? "two-layout" : "three-layout" === l ? "three-layout" : "one-layout",
                        testimonialVariant: "outlined" === r ? "outlined" : "default"
                    })
                })
            })
        })
    }], 787213)
}, 725751, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(3931),
        l = e.i(210310),
        r = e.i(326388);
    e.s(["default", 0, ({
        theme: e,
        isHidden: s,
        verticalHeadingClass: i,
        productCatalogItems: n,
        htmlTableContent: o
    }) => {
        let {
            appendCommerceDataForMultipleProducts: c
        } = (0, r.default)(), d = (0, a.useCallback)(e => {
            let t = c(e, n);
            return t || e
        }, [n, c]), u = (0, a.useMemo)(() => {
            let e = o.rows.map(e => (e.cells = e.cells.map(e => d(e)), e));
            return {
                ...o,
                rows: e
            }
        }, [o, d]);
        return (0, t.jsx)(t.Fragment, {
            children: !s && (0, t.jsx)("section", {
                className: "dark" === e ? "dark" : "",
                children: (0, t.jsx)("div", {
                    className: "mx-auto max-w-7xl p-6 dark:bg-black",
                    children: (0, t.jsx)(l.default, {
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
        a = e.i(722978),
        l = e.i(805518);
    let r = ({
            title: e,
            content: r,
            listStyle: s = "check"
        }) => {
            let i = (0, a.default)("loco-text-body [&_h4]:mb-0", {
                "checkmark-list-green": "check" === s,
                "plus-list": "plus" === s
            });
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("div", {
                    className: "loco-caption-sm-semibold mb-2 text-gray-700 dark:text-gray-300",
                    children: e
                }), (0, t.jsx)(l.default, {
                    className: i,
                    children: r
                })]
            })
        },
        s = ({
            title: e = "",
            descriptions: a = [],
            treshold: l,
            pricing: s
        }) => (0, t.jsxs)("div", {
            className: "flex h-full flex-col justify-between rounded-lg bg-gray-100 p-6 lg:w-96 dark:bg-gray-800",
            children: [(0, t.jsxs)("div", {
                className: "grow pb-8",
                children: [(0, t.jsx)("div", {
                    className: "loco-text-heading-sm mb-8 text-black dark:text-white",
                    children: e
                }), (0, t.jsx)("div", {
                    children: a?.map((a, l) => (0, t.jsx)("div", {
                        className: "flex flex-col pb-8",
                        children: (0, t.jsx)(r, {
                            title: a.title,
                            content: a.content,
                            listStyle: a.listStyle
                        })
                    }, `card-plan-${e}-${l}`))
                }), (0, t.jsx)(r, {
                    title: l?.title || "",
                    content: l?.content || ""
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
            cards: l = []
        }) => {
            let r = (0, a.default)({
                dark: "dark" === e
            });
            return (0, t.jsx)("section", {
                className: r,
                children: (0, t.jsx)("div", {
                    className: "bg-white pt-8 pb-20 dark:bg-black",
                    children: (0, t.jsx)("div", {
                        className: "container flex flex-col flex-wrap gap-2 lg:flex-row lg:justify-center",
                        children: l.map((e, a) => (0, t.jsx)("div", {
                            children: (0, t.jsx)(s, {
                                ...e
                            })
                        }, `card-plan-${e.title}-${a}`))
                    })
                })
            })
        };
    var n = e.i(722990);
    e.s(["default", 0, ({
        isHidden: e,
        theme: a,
        cards: l
    }) => e ? null : (0, t.jsx)(i, {
        theme: "dark" === a ? "dark" : "light",
        cards: l.map(e => ({
            title: e.title ?? "",
            descriptions: e.descriptions?.map(e => {
                let a = e?.listStyle === "plus" ? "plus" : "check";
                return {
                    title: e?.title ?? "",
                    content: (0, t.jsx)(n.PortableText, {
                        value: e?.content
                    }),
                    listStyle: a
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
}, 32382, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(3931),
        l = e.i(722990),
        r = e.i(655105),
        s = e.i(722978);
    let i = ({
            overline: e,
            variant: a = "default"
        }) => {
            let l = "products" === a;
            return (0, t.jsx)("div", {
                className: (0, s.default)("loco-caption-lg-semibold mb-2 lg:mb-3", {
                    "text-white": l,
                    "text-gray-700 dark:text-gray-300": !l
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
        o = ({
            body: e,
            variant: a = "default"
        }) => (0, t.jsx)("div", {
            className: (0, s.default)("loco-text-body-lg mb-6 lg:mb-12", {
                "md:w-2/3": "products" === a
            }),
            children: e
        });
    var c = e.i(749583);
    let d = ({
            actions: e,
            variant: l = "default"
        }) => {
            let r = "products" === l;
            return (0, t.jsx)("div", {
                className: "flex flex-col flex-wrap items-start justify-start gap-y-4 md:flex-row md:gap-2",
                children: e.map((e, l) => e.renderModal ? (0, t.jsx)(a.default.Fragment, {
                    children: e.renderModal()
                }, l) : (0, t.jsx)(c.default, {
                    size: "large",
                    variant: 0 === l ? "primary" : "secondary",
                    rounded: !0,
                    hasArrow: !0,
                    outlined: !r && 0 === l,
                    className: "w-auto justify-center",
                    href: e.href,
                    target: e.target,
                    children: e.label
                }, l))
            })
        },
        u = ({
            overline: e,
            title: a,
            body: l,
            actions: c,
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
                                title: a
                            }), (0, t.jsx)(o, {
                                body: l,
                                variant: f
                            }), (0, t.jsx)(d, {
                                actions: c,
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
        theme: o,
        isHidden: c,
        variant: d,
        productCatalogItem: g,
        productCategoryFilter: p
    }) => {
        let [v] = (0, a.useContext)(h.FiltersContext), {
            state: b
        } = (0, f.default)(), y = {
            ...b,
            product: g?.productKey,
            variant: null
        }, {
            renderModal: j,
            extraFields: k
        } = (0, x.useFormModal)(i), w = (0, a.useMemo)(() => i ? i.map(e => (e => {
            if (!e) return null;
            let t = !!e.form,
                a = e.link?.linkReference?.href?.current,
                l = t ? "" : a ? (0, m.default)(a, y, e.extendLink) : "";
            if (t) {
                let t = e.form || {},
                    a = {
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
                    renderModal: () => j({
                        label: e.title || "",
                        form: a
                    })
                }
            }
            return {
                label: e.title || "",
                href: l,
                target: e?.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
            }
        })(e)).filter(e => !!e) : [], [i, y, j, k]), {
            subcategories: N
        } = v.categories?.find(({
            _id: e
        }) => e === v.selectedCategory) || {}, _ = null != v.selectedSubcategory ? (N || []).find(({
            _id: e
        }) => e === v.selectedSubcategory) : null, L = !p || p.categories?.find(e => e._id === v.selectedCategory) != null && (null == _ || !p.subcategories || p.subcategories.some(({
            _id: e
        }) => e === v.selectedSubcategory)), C = n ? {
            url: n?.file?.asset.url || "",
            alt: n.alt
        } : void 0;
        return (0, t.jsx)(t.Fragment, {
            children: !c && L && (0, t.jsx)("section", {
                className: "dark" === o ? "dark" : "",
                children: (0, t.jsx)(u, {
                    overline: e,
                    title: r || "",
                    body: (0, t.jsx)(l.PortableText, {
                        value: s
                    }),
                    actions: w,
                    image: C,
                    variant: d
                })
            })
        })
    }], 32382)
}, 529363, 989873, e => {
    "use strict";
    var t = e.i(175602);
    let a = (e, t, a) => (((1 - 3 * a + 3 * t) * e + (3 * a - 6 * t)) * e + 3 * t) * e;

    function l(e, l, r, s) {
        return e === l && r === s ? t.noop : t => 0 === t || 1 === t ? t : a(function(e, t, l, r, s) {
            let i, n, o = 0;
            do(i = a(n = t + (l - t) / 2, r, s) - e) > 0 ? l = n : t = n; while (Math.abs(i) > 1e-7 && ++o < 12) return n
        }(t, 0, 1, e, r), l, s)
    }
    e.s(["cubicBezier", 0, l], 989873);
    let r = l(.42, 0, 1, 1),
        s = l(0, 0, .58, 1),
        i = l(.42, 0, .58, 1);
    e.s(["easeIn", 0, r, "easeInOut", 0, i, "easeOut", 0, s], 529363)
}, 164163, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(722978),
        l = e.i(655105),
        r = e.i(825610),
        s = e.i(749583),
        i = e.i(596889),
        n = e.i(805518);
    e.s(["default", 0, ({
        title: e,
        cards: o,
        layout: c = "four-cards",
        cardVariant: d = "default",
        scroll: u = !1,
        cardsHeading: m
    }) => {
        let f = m || (e ? "h3" : "h2"),
            h = (0, a.clsx)("gap-4 md:gap-8", {
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
                    children: o?.map((o, m) => {
                        let h = (0, a.clsx)("flex flex-wrap flex-row", !u && ({
                                "two-cards": "col-span-12 md:col-span-6 [&>div>.card-img]:h-72",
                                "three-cards": "col-span-12 md:col-span-6 lg:col-span-4 [&>div>.card-img]:h-44",
                                "four-cards": "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 [&>div>.card-img]:h-36"
                            })[c], u && ({
                                "two-cards": "mb-6 min-w-[35rem] [&>div>.card-img]:h-72",
                                "three-cards": "mb-6 min-w-[22rem] [&>div>.card-img]:h-44",
                                "four-cards": "mb-6 min-w-[16rem] [&>div>.card-img]:h-36"
                            })[c]),
                            x = (0, a.clsx)("place-self-end", {
                                "px-6 pb-6": "default" === d || "transparent" === d
                            }),
                            g = (0, a.clsx)({
                                "p-6": "default" === d || "transparent" === d,
                                "py-6": "padded" === d
                            }),
                            p = (0, a.clsx)("object-cover", {
                                "rounded-t-xl": "default" === d || "transparent" === d,
                                rounded: "padded" === d
                            }),
                            v = (0, a.clsx)("caption-xs mt-1 text-right text-gray-400", {
                                "mr-1": "padded" !== d
                            });
                        return (0, t.jsxs)(i.default, {
                            className: h,
                            variant: d,
                            children: [(0, t.jsxs)(i.default.Content, {
                                children: [o.image && o.image.src && (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsx)(i.default.Image, {
                                        withinContainer: o.image.withinContainer,
                                        children: (0, t.jsx)(l.default, {
                                            src: o.image.src ?? "",
                                            alt: o.image.alt ?? "",
                                            fill: !0,
                                            className: p,
                                            quality: 100
                                        })
                                    }), o.image.description && (0, t.jsx)(n.default, {
                                        className: v,
                                        children: o.image.description
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: g,
                                    children: [o.icon && o.icon.src && (0, t.jsx)("div", {
                                        className: "relative mb-5 dark:invert",
                                        children: (0, t.jsx)(l.default, {
                                            src: o.icon.src ?? "",
                                            alt: o.icon.alt ?? "",
                                            quality: 100,
                                            width: 23,
                                            height: 23
                                        })
                                    }), (0, t.jsx)(f, {
                                        className: "loco-text-body-lg-medium mb-4 !font-semibold",
                                        children: o.title
                                    }), o.description && (0, t.jsx)(n.default, {
                                        className: "loco-text-body mb-4",
                                        children: o.description
                                    }), o.richText && (0, t.jsx)(n.default, {
                                        className: "loco-text-body mb-4 text-gray-600 dark:text-gray-300",
                                        children: o.richText
                                    })]
                                })]
                            }), o.actions && (0, t.jsx)("div", {
                                className: x,
                                children: o.actions.map((e, a) => (0, t.jsx)(s.default, {
                                    href: e.href,
                                    target: e.target ?? "_self",
                                    rounded: !0,
                                    hasArrow: !0,
                                    outlined: 0 === a,
                                    className: 0 === a ? "mr-3" : "mt-4",
                                    variant: 0 === a ? "primary" : "secondary",
                                    "data-link-location": r.trackingLocation.cardsAction,
                                    "data-link-id": `${r.trackingLocation.cardsAction}-${a}`,
                                    children: e.title
                                }, `${e.title}-${a}`))
                            })]
                        }, `card-${m}-${e}`)
                    })
                })]
            })
        })
    }], 164163)
}, 14452, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(722978);
    e.s(["default", 0, ({
        children: e,
        className: l = "",
        tag: r = "div"
    }) => {
        let s = (0, a.default)("loco-text-heading-sm mb-4", l);
        return (0, t.jsx)(r, {
            className: s,
            children: e
        })
    }], 14452)
}, 447452, 667900, 2062, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(3931),
        l = e.i(722978),
        r = e.i(655105),
        s = e.i(825610),
        i = e.i(387660);
    let n = ({
        children: e,
        tag: a = "div",
        className: r = ""
    }) => {
        let s = (0, l.default)("loco-caption-lg-semibold mb-4", r);
        return (0, t.jsx)(a, {
            className: s,
            children: e
        })
    };
    e.s(["default", 0, n], 667900);
    var o = e.i(749583);
    let c = ({
        children: e,
        className: a = "",
        orientation: r = "horizontal"
    }) => {
        let s = (0, l.default)("flex gap-2 flex-wrap", {
            "flex-col items-start": "vertical" === r
        }, a);
        return (0, t.jsx)("div", {
            className: s,
            children: e
        })
    };
    e.s(["default", 0, c], 2062);
    var d = e.i(14452),
        u = e.i(805518),
        m = e.i(526826),
        f = e.i(766930);
    let h = ({
        features: e,
        transitionTime: l = 8500
    }) => {
        let [r, s] = (0, a.useState)(0), i = (0, a.useRef)(null), n = (0, a.useRef)(null), [c, d] = (0, a.useState)(!1), [u, h] = (0, a.useState)(!1), x = (0, a.useRef)(null);
        (0, a.useEffect)(() => {
            e.forEach(e => {
                e.icon && (new window.Image().src = e.icon, new window.Image().src = e.icon)
            })
        }, [e]), (0, a.useEffect)(() => {
            let e = new IntersectionObserver(([e]) => {
                d(e.intersectionRatio >= .8)
            }, {
                threshold: [0, .8, 1]
            });
            return n.current && e.observe(n.current), () => e.disconnect()
        }, []), (0, a.useEffect)(() => (i.current && clearTimeout(i.current), c && !u && (i.current = setTimeout(() => {
            s(t => (t + 1) % e.length)
        }, l)), () => {
            i.current && clearTimeout(i.current)
        }), [r, e.length, l, c, u]);
        let g = (0, a.useCallback)(t => {
                let a = t === r;
                s(t), h(!0);
                let i = e[t];
                i?.onCardClick && setTimeout(() => {
                    i.onCardClick?.(a)
                }, 0), x.current && clearTimeout(x.current), x.current = setTimeout(() => {
                    h(!1)
                }, l)
            }, [r, e, l]),
            p = (0, a.useCallback)((e, t) => {
                ("Enter" === e.key || " " === e.key) && (e.preventDefault(), g(t))
            }, [g]);
        return (0, a.useEffect)(() => () => {
            x.current && clearTimeout(x.current)
        }, []), (0, t.jsx)(f.default, {
            children: (0, t.jsx)("div", {
                ref: n,
                className: "relative inline-flex w-full flex-col items-start justify-start gap-2 self-stretch px-5 pb-6 md:px-5 md:pb-6 lg:px-0 lg:pb-0 xl:px-20",
                children: e.map((e, a) => {
                    let l = a === r;
                    return (0, t.jsxs)("div", {
                        "data-mobile": "true",
                        "data-show-image": l ? "true" : "false",
                        "data-state": l ? "selected" : "inactive",
                        role: "button",
                        tabIndex: 0,
                        className: `cursor-pointer self-stretch overflow-hidden rounded-lg bg-white ${l?`${e.icon?"lg:pl-36":"lg:pl-10"} p-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04),0px_2px_12px_3px_rgba(0,0,0,0.04)] lg:py-8 lg:pr-10`:"p-6 lg:px-10 lg:py-6"} flex lg:inline-flex lg:items-start ${l?"flex-col":"items-center"} relative justify-start gap-2 transition-all duration-500 ease-out`,
                        onClick: () => g(a),
                        onKeyDown: e => p(e, a),
                        children: [e.icon && l && (0, t.jsx)(m.m.div, {
                            initial: {
                                opacity: 0,
                                scale: .8
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                type: "spring",
                                duration: .2,
                                bounce: .1,
                                delay: 0
                            },
                            className: "inline-flex h-14 w-14 items-center justify-start gap-2.5 lg:hidden",
                            children: (0, t.jsx)("div", {
                                className: "flex flex-1 items-center justify-center gap-2.5 self-stretch",
                                children: (0, t.jsx)("img", {
                                    className: "flex-1 self-stretch",
                                    src: e.icon || "https://placehold.co/57x57",
                                    alt: e.title || "Feature icon",
                                    width: 57,
                                    height: 57,
                                    loading: "eager",
                                    style: {
                                        objectFit: "cover",
                                        imageRendering: "auto"
                                    }
                                })
                            })
                        }), e.icon && l && (0, t.jsx)(m.m.div, {
                            initial: {
                                opacity: 0,
                                x: -10
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                type: "spring",
                                duration: .5,
                                bounce: .1,
                                delay: .1
                            },
                            className: "pointer-events-none absolute inset-y-0 left-[-38px] hidden lg:flex",
                            children: (0, t.jsx)("div", {
                                className: "flex h-full items-center justify-start py-8",
                                children: (0, t.jsx)("img", {
                                    className: "max-h-full w-auto object-contain",
                                    src: e.icon || "",
                                    alt: e.title || "Feature icon",
                                    loading: "eager",
                                    style: {
                                        imageRendering: "auto"
                                    }
                                })
                            })
                        }), (0, t.jsxs)("div", {
                            className: "flex flex-col items-start justify-start gap-[9px] self-stretch lg:inline-flex lg:max-w-[304px] lg:flex-1 lg:flex-col",
                            children: [l && (0, t.jsx)(m.m.div, {
                                initial: {
                                    opacity: 0,
                                    y: -.5
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    type: "spring",
                                    duration: .3,
                                    bounce: .1
                                },
                                className: "inline-flex w-64 items-center justify-center",
                                children: (0, t.jsx)("div", {
                                    className: "flex-1 justify-center text-[10px] leading-[16px] font-medium tracking-[1px] text-gray-700 uppercase md:text-[12px] md:leading-[21px] md:tracking-[1.2px]",
                                    children: e.eyebrow || ""
                                })
                            }), (0, t.jsx)("div", {
                                className: "inline-flex items-center justify-center self-stretch",
                                children: (0, t.jsx)(m.m.div, {
                                    animate: {
                                        color: l ? "#000000" : "#374151"
                                    },
                                    transition: {
                                        type: "spring",
                                        duration: .3,
                                        bounce: .1
                                    },
                                    className: "flex-1 justify-center text-base leading-tight font-medium md:text-[20px] md:leading-[24px]",
                                    children: e.title || "Untitled"
                                })
                            }), l && (0, t.jsx)(m.m.div, {
                                initial: {
                                    opacity: 0,
                                    y: 1
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    type: "spring",
                                    duration: .3,
                                    bounce: .1
                                },
                                className: "justify-start self-stretch text-xs font-normal text-gray-700 md:text-[14px] md:leading-[21px]",
                                children: e.description || ""
                            }), l && (0, t.jsx)(m.m.div, {
                                initial: {
                                    opacity: 0,
                                    y: 1
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    type: "spring",
                                    duration: .3,
                                    bounce: .1
                                },
                                className: "flex flex-col items-start justify-start self-stretch pt-3",
                                children: (0, t.jsx)(o.default, {
                                    href: e.action?.href || "#",
                                    target: e.action?.target,
                                    variant: "primary",
                                    size: "small",
                                    rounded: !0,
                                    hasArrow: !0,
                                    children: e.action?.label || "Learn More"
                                })
                            })]
                        })]
                    }, a)
                })
            })
        })
    };
    var x = e.i(783078),
        g = e.i(430215),
        p = e.i(224601),
        v = e.i(153348),
        b = e.i(955429),
        y = e.i(828083),
        j = e.i(186114);
    let k = (0, y.default)(() => e.A(410979), {
        loadableGenerated: {
            modules: [942019]
        },
        ssr: !1
    });
    e.s(["default", 0, ({
        actions: e = [],
        aspectRatio: m,
        backgroundImage: f = !1,
        description: y,
        eyebrow: w,
        image: N,
        mediaPosition: _ = "right",
        size: L = "default",
        title: C,
        youtubeVideo: R,
        brandfolderVideo: M,
        videoInline: $ = !1,
        buttonLabel: A = "Play Video",
        blockKey: S,
        blockedMessage: T,
        consentButtonLabel: P,
        featureList: I,
        variant: F = "default"
    }) => {
        let z = (0, g.default)(`(max-width: ${x.default.Large}px)`),
            E = (0, a.useRef)(null),
            [O, B] = (0, a.useState)(!1),
            D = (0, v.useInView)(E, {
                once: !0
            }),
            V = (0, b.useReducedMotion)(),
            U = (0, a.useRef)({
                total: 0,
                progress: 0
            }),
            Z = I && I.length > 0,
            q = !Z && R?.url;
        (0, a.useEffect)(() => {
            $ || B(!1)
        }, [D]);
        let H = () => {
                B(!0)
            },
            W = (0, l.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": O && !V && D && M?.src
            }),
            K = (0, l.default)("relative", {
                "py-10 lg:py-24": "gdc2026" === F,
                "lg:py-14": Z,
                "lg:py-24": !Z && "default" === L && (!m || "16:9" === m) && "gdc2026" !== F,
                "lg:py-80": !Z && "large" === L && (!m || "16:9" === m),
                "lg:py-40": !Z && "large" === L && "1:1" === m,
                "dark bg-gray-900 overflow-hidden": f,
                "bg-gray-100 dark:bg-black": !f && Z,
                "bg-white dark:bg-black": !f && !Z
            }),
            G = (0, l.default)("grid grid-flow-row grid-cols-12 place-items-center gap-4", {
                "p-4": "gdc2026" === F,
                "lg:grid-flow-col": !0,
                "lg:container": !m || "16:9" === m
            }),
            J = (0, l.default)("font-nohemi! text-gray-900 dark:text-gray-100 whitespace-pre-line", {
                "loco-text-heading-md!": "gdc2026" === F
            }),
            Q = (0, l.default)("relative w-full rounded-lg", {
                "aspect-square": "1:1" === m,
                "aspect-video": "16:9" === m,
                "overflow-hidden": !R?.url
            }),
            X = (0, l.default)("relative col-span-12 flex h-full flex-col w-full items-center lg:items-start", {
                "lg:col-span-8": "gdc2026" === F,
                "lg:col-span-6": "gdc2026" !== F,
                "lg:col-start-1": "left" === _,
                "lg:col-start-5": "right" === _ && "gdc2026" === F,
                "lg:col-start-7": "right" === _ && "gdc2026" !== F,
                "order-first": !Z || !z,
                "order-last": Z && z
            }),
            Y = (0, l.default)("relative col-span-12 px-5 text-center lg:pb-0 lg:text-left", {
                "lg:col-span-4": "gdc2026" === F,
                "lg:col-span-5": "gdc2026" !== F,
                "pb-6": !(Z && z),
                "py-6": Z && z,
                "lg:col-start-9": "left" === _ && "gdc2026" === F,
                "lg:col-start-8": "left" === _ && "gdc2026" !== F && (!m || "16:9" === m),
                "lg:col-start-1": "right" === _ && (!m || "16:9" === m),
                "lg:col-start-2": "right" === _ && "1:1" === m,
                "order-first": Z && z
            }),
            ee = e => {
                let t = U.current.progress / U.current.total * 100 || 0;
                (0, i.pushVideoEvent)({
                    name: e,
                    videoDuration: U.current.total,
                    videoProgress: Number(t)
                })
            };
        return (0, t.jsxs)("section", {
            className: K,
            children: [f && (0, t.jsx)(r.default, {
                src: N.src,
                alt: N.alt,
                fill: !0,
                className: "blur-2xl brightness-[0.2]"
            }), (0, t.jsxs)("div", {
                className: G,
                ref: E,
                children: [Z ? (0, t.jsx)("div", {
                    className: X,
                    children: (0, t.jsx)(h, {
                        features: I
                    })
                }) : q ? (0, t.jsx)("div", {
                    className: X,
                    children: (0, t.jsx)("div", {
                        className: Q,
                        children: (0, t.jsx)(p.default, {
                            url: R?.url || "",
                            title: R?.title ?? "",
                            blockedMessage: T,
                            consentButtonLabel: P
                        })
                    })
                }) : (0, t.jsxs)("div", {
                    className: X,
                    children: [(0, t.jsxs)("div", {
                        className: Q,
                        children: [D && !V && M?.src && (0, t.jsx)(k, {
                            url: M.src,
                            playing: O,
                            loop: !!$,
                            muted: $,
                            playsinline: $,
                            width: "100%",
                            height: "100%",
                            onDuration: e => U.current.total = e,
                            onProgress: e => {
                                U.current.progress = 10 * e.played
                            },
                            className: "absolute top-0 left-0 [&>video]:object-cover",
                            onReady: () => {
                                $ && B(!0)
                            },
                            controls: !$,
                            onPlay: () => ee("video_play"),
                            onPause: () => ee("video_pause"),
                            config: {
                                hlsOptions: {
                                    maxMaxBufferLength: 1,
                                    startLevel: 1
                                }
                            }
                        }), N.src && (0, t.jsxs)("div", {
                            className: W,
                            onClick: H,
                            children: [M?.src && !$ && (0, t.jsx)(j.default, {
                                handleIsPlaying: H,
                                className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                label: A,
                                "data-link-location": S || s.trackingLocation.fullWidthBlockAction,
                                "data-link-id": `${S||s.trackingLocation.fullWidthBlockAction}-video-play`
                            }), (0, t.jsx)(r.default, {
                                src: N.src,
                                alt: N.alt,
                                placeholder: "blur",
                                blurDataURL: N.placeholder,
                                fill: !0
                            })]
                        })]
                    }), N.caption && (0, t.jsx)("div", {
                        className: "loco-text-body-sm-medium z-10 mt-3 mb-6 text-gray-600 lg:mb-3",
                        children: N.caption
                    })]
                }), (0, t.jsxs)("div", {
                    className: Y,
                    children: [w && (0, t.jsx)(n, {
                        className: "text-gray-900 dark:text-gray-100",
                        children: w
                    }), (0, t.jsx)(d.default, {
                        tag: "h2",
                        className: J,
                        children: C
                    }), (0, t.jsx)(u.default, {
                        className: "mb-10 text-gray-900 dark:text-gray-100",
                        children: y
                    }), (0, t.jsx)(c, {
                        className: "justify-center lg:justify-normal",
                        children: e.length > 0 && e.map((e, a) => (0, t.jsx)(o.default, {
                            variant: 0 === a ? "primary" : "secondary",
                            outlined: 0 === a,
                            size: z ? "small" : "medium",
                            rounded: !0,
                            hasArrow: !0,
                            href: e.href,
                            target: e.target,
                            "data-link-location": S ?? s.trackingLocation.fullWidthBlockAction,
                            "data-link-id": `${S??s.trackingLocation.fullWidthBlockAction}-action-${a}`,
                            children: e.label
                        }, `full-width-block-action-${a}`))
                    })]
                })]
            })]
        })
    }], 447452)
}, 649042, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(3931),
        l = e.i(722990),
        r = e.i(447452),
        s = e.i(775041),
        i = e.i(779712),
        n = e.i(869324);
    e.s(["default", 0, ({
        actions: e,
        backgroundImage: o,
        description: c,
        eyebrow: d,
        image: u,
        mediaAspectRatio: m,
        mediaPosition: f,
        size: h,
        variant: x,
        title: g,
        theme: p,
        youtubeVideo: v,
        brandfolderVideo: b,
        buttonLabel: y,
        videoInline: j,
        blockKey: k,
        isHidden: w,
        consent: N,
        featureList: _,
        productCategoryFilter: L
    }) => {
        let [C] = (0, a.useContext)(s.FiltersContext);
        if (C.categories && C.categories.length > 0 && 1 === C.categories.findIndex(({
                _id: e
            }) => e === C.selectedCategory) && null != C.selectedSubcategory) return null;
        let {
            subcategories: R,
            productCatalogItems: M
        } = C.categories.find(({
            _id: e
        }) => e === C.selectedCategory) || {}, $ = null != C.selectedSubcategory ? (R || []).find(({
            _id: e
        }) => e === C.selectedSubcategory) : null, A = !L || L.categories?.find(e => e._id === C.selectedCategory) != null && (null == $ || !L.subcategories || L.subcategories.some(({
            _id: e
        }) => e === C.selectedSubcategory)), S = e?.map(({
            title: e,
            link: t
        }) => {
            let a = t?.linkReference?.target === "_blank" ? "_blank" : "_self";
            return {
                label: e,
                href: t?.linkReference?.href.current || "/",
                target: a
            }
        }), T = _?.map((e, t) => {
            let a;
            return {
                eyebrow: e.eyebrow || "",
                title: e.title || "",
                description: e.description || "",
                action: e.action ? (a = e.action.link?.linkReference?.target === "_blank" ? "_blank" : "_self", {
                    label: e.action.title || "",
                    href: e.action.link?.linkReference?.href.current || "#",
                    target: a
                }) : {
                    label: "",
                    href: "#"
                },
                icon: e.icon?.asset?.url || "",
                onCardClick: e => ((e, t) => {
                    if (!t && _?.[e]) {
                        let t = _[e];
                        (0, n.default)({
                            event: "userEvent",
                            event_name: "navigation_click",
                            properties: {
                                navigation_click_text: t.title || "",
                                link_type: "feature list item",
                                form_name: t.title || "",
                                form_id: `list-item-${e}`,
                                block_title: g
                            }
                        })
                    }
                })(t, e)
            }
        });
        return (0, t.jsx)(t.Fragment, {
            children: !w && A && (0, t.jsx)("section", {
                className: "dark" === p ? "dark" : "",
                children: (0, t.jsx)(r.default, {
                    actions: S,
                    aspectRatio: "16:9" === m ? "16:9" : "1:1" === m ? "1:1" : void 0,
                    backgroundImage: o,
                    description: (0, t.jsx)(l.PortableText, {
                        value: c
                    }),
                    eyebrow: d,
                    image: {
                        src: (0, i.urlForImage)(u?.file?.asset?.url || "")?.auto("format")?.url() || "",
                        placeholder: u?.file?.asset.metadata?.lqip || "",
                        alt: u?.alt || "",
                        caption: u?.caption || ""
                    },
                    mediaPosition: "right" === f ? "right" : "left" === f ? "left" : void 0,
                    size: "large" === h ? "large" : "default" === h ? "default" : void 0,
                    variant: "gdc2026" === x ? "gdc2026" : "default" === x ? "default" : void 0,
                    title: g,
                    youtubeVideo: v,
                    brandfolderVideo: {
                        src: b?.muxHLSURL || ""
                    },
                    videoInline: j,
                    buttonLabel: y,
                    blockKey: k,
                    blockedMessage: N?.blockedMessage,
                    consentButtonLabel: N?.consentButtonLabel || "",
                    featureList: T
                })
            })
        })
    }], 649042)
}, 449758, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(3931),
        l = e.i(722990),
        r = e.i(164163),
        s = e.i(326388);
    e.s(["default", 0, ({
        title: e,
        layout: i,
        cardVariant: n,
        scroll: o,
        theme: c,
        cardsHeading: d,
        cards: u,
        isHidden: m
    }) => {
        let {
            appendCommerceData: f,
            appendCommerceDataToPortableText: h,
            currency: x
        } = (0, s.default)(), g = (0, a.useMemo)(() => u?.map(e => ({
            type: e._type,
            title: f(e.title, e.productCatalogItem) || "",
            description: f(e.description, e.productCatalogItem) || "",
            richText: (0, t.jsx)(l.PortableText, {
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
                className: `${"dark"===c?"dark":""} overflow-hidden`,
                children: (0, t.jsx)(r.default, {
                    layout: "two-cards" === i || "three-cards" === i || "four-cards" === i ? i : "four-cards",
                    cardVariant: "default" === n || "padded" === n || "transparent" === n ? n : "default",
                    scroll: o,
                    title: e || "",
                    cardsHeading: ["h2", "h3", "h4", "div"].includes(d) ? d : void 0,
                    cards: g
                })
            })
        })
    }], 449758)
}, 81636, 673300, 5124, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(722978),
        l = e.i(153348),
        r = e.i(955429),
        s = e.i(828083),
        i = e.i(655105),
        n = e.i(3931),
        o = e.i(998569),
        c = e.i(278466);
    let d = (0, s.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        u = ({
            title: e,
            titleTag: a,
            description: l,
            action: r
        }) => {
            let [s, i] = (0, n.useState)(!1);
            return (0, t.jsxs)("div", {
                className: "relative border-t border-solid border-gray-700",
                children: [(0, t.jsxs)("div", {
                    className: "pt-2 pb-8 md:flex md:gap-2",
                    children: [(0, t.jsx)(a || "h2", {
                        className: "loco-text-heading-xs md:w-6/12",
                        children: e
                    }), (0, t.jsxs)("div", {
                        className: "mt-4 flex justify-between gap-4 md:mt-0 md:w-6/12",
                        children: [(0, t.jsx)("p", {
                            className: "loco-text-body-sm max-w-md opacity-70",
                            children: l
                        }), (0, t.jsx)("div", {
                            className: "shrink-0 text-right",
                            children: (0, t.jsx)(o.default, {
                                direction: "right",
                                ariaLabel: r.label,
                                variant: "secondary",
                                isForcedHover: s,
                                tag: "span"
                            })
                        })]
                    })]
                }), (0, t.jsx)(c.Link, {
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
            let o = (0, n.useRef)(null),
                [c, u] = (0, n.useState)(!1),
                m = (0, l.useInView)(o),
                f = (0, r.useReducedMotion)(),
                h = (0, a.default)("absolute cover z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": c && !f && m && s.src
                });
            return (0, t.jsxs)("div", {
                className: "relative aspect-video overflow-hidden rounded-2xl",
                ref: o,
                children: [(0, t.jsx)(i.default, {
                    src: e.src,
                    placeholder: "blur",
                    blurDataURL: e.placeholder,
                    fill: !0,
                    alt: e.alt ?? "",
                    className: h
                }), m && !f && s.src && (0, t.jsx)(d, {
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
            let o = (0, n.useRef)(null),
                [c, u] = (0, n.useState)(!1),
                m = (0, l.useInView)(o),
                f = (0, r.useReducedMotion)(),
                h = (0, a.default)("absolute cover z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": c && !f && m && s.src
                });
            return (0, t.jsxs)("div", {
                className: "pointer-events-none absolute top-0 left-0 h-full w-full object-cover opacity-30",
                ref: o,
                children: [(0, t.jsx)(i.default, {
                    src: e.src,
                    placeholder: "blur",
                    blurDataURL: e.placeholder,
                    fill: !0,
                    alt: e.alt ?? "",
                    className: h
                }), m && !f && s.src && (0, t.jsx)(d, {
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
            visual: l,
            background: r,
            benefits: s = [],
            theme: i
        }) => {
            let n = (0, a.default)("relative bg-gray-100 px-4 pb-10 pt-8 lg:px-8 lg:pt-44", {
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
                    }), l && (0, t.jsx)("div", {
                        className: "relative col-start-1 col-end-5 row-start-2 mt-14",
                        children: (0, t.jsx)(m, {
                            ...l
                        })
                    }), s && (0, t.jsx)("div", {
                        className: "col-start-1 col-end-13 row-start-3 mt-14 md:mt-[10rem] lg:col-start-5 lg:col-end-13",
                        children: (0, t.jsx)("div", {
                            className: "lg:grid lg:grid-cols-8 lg:gap-2",
                            children: (0, t.jsx)("div", {
                                className: "lg:col-start-1 lg:col-end-9",
                                children: s.map((e, a) => (0, t.jsx)(u, {
                                    ...e
                                }, a))
                            })
                        })
                    })]
                })]
            })
        };
    e.s(["default", 0, ({
        tagline: e,
        visual: a,
        background: l,
        benefits: r,
        isHidden: s,
        theme: i
    }) => (0, t.jsx)(t.Fragment, {
        children: !s && (0, t.jsx)(h, {
            tagline: e,
            visual: a ? {
                image: {
                    src: a?.visualImage?.asset.url || "",
                    placeholder: a?.visualImage?.asset.metadata?.lqip || "",
                    alt: ""
                },
                video: {
                    src: a?.brandfolder?.muxHLSURL || ""
                }
            } : null,
            background: l ? {
                image: {
                    src: l?.image?.asset.url || "",
                    placeholder: l?.image?.asset.metadata?.lqip || ""
                },
                video: {
                    src: l?.brandfolder?.muxHLSURL || ""
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
            image: o,
            video: c,
            actions: d
        }) => {
            let u = (0, n.useRef)(null),
                [m, f] = (0, n.useState)(!1),
                h = (0, l.useInView)(u, {
                    once: !0
                }),
                p = (0, r.useReducedMotion)(),
                v = (0, a.default)("z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": m && !p && h && c.src
                });
            return (0, t.jsx)("section", {
                className: "dark bg-gray-900",
                children: (0, t.jsxs)("div", {
                    ref: u,
                    className: "relative box-border flex min-h-screen flex-col items-center justify-center p-5",
                    children: [o && o.src && (0, t.jsx)(i.default, {
                        fill: !0,
                        alt: o.alt ?? "",
                        src: o.src,
                        className: v
                    }), h && !p && c.src && (0, t.jsx)(g, {
                        url: c.src,
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
                        }), d && (0, t.jsxs)("div", {
                            className: "mt-6 flex justify-center gap-4",
                            children: [" ", d.map((e, a) => {
                                if (e.link) return (0, t.jsx)(x.default, {
                                    href: e.link.href,
                                    target: e.link.target,
                                    variant: 0 === a ? "primary" : "secondary",
                                    rounded: !0,
                                    hasArrow: !0,
                                    children: e.title
                                }, `full-screen-visual-action-link-${e.title}-${a}`);
                                if (e.form) {
                                    let l = {
                                        ...e.form.form,
                                        ...e.form.webinarFormParametersContent,
                                        extraFields: e.form.extraFields
                                    };
                                    return (0, t.jsx)("div", {
                                        children: e.form.renderModal({
                                            label: e.title,
                                            form: l
                                        })
                                    }, `full-screen-visual-action-modal-${e.title}-${a}`)
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
        description: a,
        image: l,
        brandfolder: r,
        actions: s,
        isHidden: i
    }) => {
        let {
            mapFormActions: n
        } = (0, v.useFormModal)(s), o = n(s);
        return (0, t.jsx)(t.Fragment, {
            children: !i && (0, t.jsx)(p, {
                title: e,
                description: a,
                image: {
                    src: l?.asset.url || "",
                    placeholder: l?.asset.metadata.lqip || ""
                },
                video: {
                    src: r?.muxHLSURL || ""
                },
                actions: o
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
    var y = e.i(803695),
        j = e.i(131564);
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
            preferReducedMotion: o,
            isVisuallyActive: c,
            clickCallback: d,
            blurredBackground: u
        }) => {
            let m = (0, n.useRef)(null),
                [f, h] = (0, n.useState)(!1),
                x = (0, l.useInView)(m, {
                    once: !0
                }),
                g = (0, a.default)("relative aspect-video overflow-hidden rounded-2xl duration-500", {
                    "opacity-30": !c && !s
                }),
                p = (0, a.default)("absolute h-full w-full transition-opacity duration-500 z-[-1]"),
                v = (0, a.default)("absolute h-full w-full transition-opacity duration-500", {
                    "opacity-0": f && s && !o && x && e.video.src,
                    "object-contain": u
                });
            return (0, t.jsxs)("div", {
                className: g,
                ref: m,
                onClick: () => {
                    !s && d && d()
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
                }), x && !o && s && e.video.src && (0, t.jsx)(k, {
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
            action: a,
            slides: l,
            blurredBackground: s
        }) => {
            let [i, c] = (0, n.useState)(void 0), [d, u] = (0, n.useState)(void 0), [m, f] = (0, n.useState)(1), [h, g] = (0, n.useState)(0), [p, v] = (0, n.useState)(0), b = (0, n.useRef)(null), k = (0, n.useRef)(null), N = (0, n.useRef)(null), _ = (0, r.useReducedMotion)();
            (0, n.useEffect)(() => {
                k.current && N.current && (c(k.current), u(N.current))
            }, [k, N]);
            let L = (0, n.useCallback)((e, t) => {
                    f(t + 1), v(t)
                }, []),
                C = (0, n.useCallback)(e => {
                    g(e)
                }, []),
                R = (0, n.useCallback)(() => {
                    k.current && N.current && k.current.slickPrev()
                }, []),
                M = (0, n.useCallback)(() => {
                    k.current && N.current && k.current.slickNext()
                }, []),
                $ = {
                    dots: !1,
                    infinite: !0,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: !1
                },
                A = (0, n.useMemo)(() => l.map((e, a) => (0, t.jsx)("div", {
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
                }, a)), [l]),
                S = (0, n.useMemo)(() => l.map((e, a) => (0, t.jsx)(w, {
                    slide: e,
                    index: a,
                    isActive: h === a,
                    isVisuallyActive: p === a,
                    preferReducedMotion: _,
                    clickCallback: M,
                    blurredBackground: s
                }, a)), [l, h, p, _, M]);
            return (0, t.jsx)("section", {
                className: "dark bg-black py-12",
                children: (0, t.jsxs)("div", {
                    className: "container md:max-w-none lg:pr-0",
                    children: [e && (0, t.jsx)(j.default, {
                        title: e,
                        actions: a ? [a] : []
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
                                        children: (0, t.jsx)(y.default, {
                                            ...$,
                                            asNavFor: i,
                                            useTransform: !1,
                                            ref: N,
                                            className: "carousel-text-visual_visual m-0",
                                            children: S
                                        })
                                    })
                                })
                            })
                        }), (0, t.jsxs)("div", {
                            className: "relative col-start-1 col-end-4 row-start-1 pb-10",
                            children: [l.length > 1 && (0, t.jsx)("span", {
                                className: "loco-text-body-md text-blue mx-2.5 mt-2.5 mb-4 block lg:mt-0",
                                children: `${m<10?"0":""}${m} / ${l.length<10?"0":""}${l.length}`
                            }), (0, t.jsx)(y.default, {
                                className: "carousel-text-visual_text mt-4 lg:mt-0",
                                ...$,
                                draggable: !1,
                                asNavFor: d,
                                beforeChange: L,
                                afterChange: C,
                                fade: !0,
                                ref: k,
                                children: A
                            }), l.length > 1 && (0, t.jsxs)("div", {
                                className: "absolute bottom-0 left-3 flex gap-2",
                                children: [(0, t.jsx)(o.default, {
                                    direction: "left",
                                    onPress: R,
                                    ariaLabel: "Prev",
                                    variant: "primary"
                                }), (0, t.jsx)(o.default, {
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
        title: a,
        action: l,
        slides: r,
        slidesBlog: s,
        slidesActionLabel: i = "View Post",
        isHidden: n
    }) => {
        let o = e => {
                let t, a = (e, t) => e?.length > t ? `${e.substring(0,t)}...` : e;
                return {
                    title: e.title || "",
                    author: e.author || "",
                    description: e.description || a(e?.seo?.teaserText, 250) || a(e?.seo?.description, 250) || "",
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
            c = r?.map(o) || [],
            d = s?.map(o) || [],
            u = c.length > 0 ? c : d.length > 0 ? d : [];
        return (0, t.jsx)(t.Fragment, {
            children: !n && (0, t.jsx)(N, {
                title: a || "",
                action: l ? {
                    title: l.title || "",
                    href: l.link?.linkReference?.href.current || "",
                    target: l.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                } : null,
                slides: u,
                blurredBackground: e
            })
        })
    }], 5124)
}, 314669, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(655105),
        l = e.i(278466),
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
                            children: (0, t.jsx)(a.default, {
                                src: e.src || "",
                                alt: e.alt || "",
                                placeholder: "blur",
                                blurDataURL: e.placeholder,
                                className: "rounded-lg object-contain",
                                fill: !0
                            })
                        })
                    }), e.action?.href && (0, t.jsx)(l.Link, {
                        href: e.action.href,
                        target: e.action.target || "_self",
                        children: (0, t.jsx)("div", {
                            className: i,
                            children: (0, t.jsx)("div", {
                                className: "relative aspect-square w-full",
                                children: (0, t.jsx)(a.default, {
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
        isHidden: a
    }) => {
        let l = e?.map(e => ({
            src: e?.image?.file?.asset.url,
            alt: e?.image?.alt || "",
            placeholder: e?.image?.file?.asset.metadata?.lqip,
            action: {
                href: e?.action?.href.current,
                target: e?.action?.target
            }
        }));
        return (0, t.jsx)(t.Fragment, {
            children: !a && (0, t.jsx)(s, {
                logos: l
            })
        })
    }], 314669)
}, 583877, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(447093),
        l = e.i(722978),
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
            dayOfWeek: a,
            defaultOpen: l,
            activities: n,
            footer: o
        }) => {
            let [c, d] = (0, r.useState)(l);
            return (0, t.jsxs)("details", {
                open: c,
                onToggle: e => {
                    d(e.target.open)
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
                            children: a
                        })]
                    }), (0, t.jsx)("div", {
                        children: c ? (0, t.jsx)(i, {}) : (0, t.jsx)(s, {})
                    })]
                }), (0, t.jsxs)("div", {
                    className: "flex flex-col px-6 pb-6 md:ml-[19rem]",
                    children: [n?.map(e => {
                        let {
                            title: a,
                            startTime: l,
                            endTime: r
                        } = e, s = r ? `${l} - ${r}` : l;
                        return (0, t.jsxs)("div", {
                            className: "flex flex-col gap-2 pt-6 first:mt-4 first:border-t first:border-gray-300 sm:flex-row dark:first:border-gray-700",
                            children: [s && (0, t.jsx)("div", {
                                className: "loco-text-body-sm w-36 shrink-0 text-gray-600 dark:text-gray-400",
                                children: s
                            }), a && (0, t.jsx)("div", {
                                className: "loco-text-body-md text-black dark:text-white",
                                children: a
                            })]
                        }, `agenda-event-${a}-${l}`)
                    }), (0, t.jsx)("div", {
                        className: "loco-text-body-sm pt-6 text-gray-600 italic dark:text-gray-400",
                        children: o
                    })]
                })]
            })
        },
        o = ({
            theme: e,
            agendaCards: a
        }) => {
            let r = (0, l.default)({
                dark: "dark" === e
            });
            return (0, t.jsx)("section", {
                className: r,
                children: (0, t.jsx)("div", {
                    className: "bg-white py-10 md:py-20 dark:bg-gray-900",
                    children: (0, t.jsx)("div", {
                        className: "container flex flex-col gap-2",
                        children: a.map((e, a) => (0, t.jsx)(n, {
                            defaultOpen: 0 === a,
                            ...e
                        }, `agenda-card-${e.date}-${e.dayOfWeek}-${a}`))
                    })
                })
            })
        };
    e.s(["default", 0, ({
        theme: e = "light",
        isHidden: l,
        agendaCards: r
    }) => {
        let s = (0, a.useLocale)();
        return l ? null : (0, t.jsx)(o, {
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
        a = e.i(153348),
        l = e.i(955429),
        r = e.i(376936),
        s = e.i(192207),
        i = e.i(526826),
        n = e.i(3931),
        o = e.i(722978),
        c = e.i(828083),
        d = e.i(655105),
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
            image: y,
            video: j,
            videoInline: k = !1,
            buttonLabel: w = "Play video",
            blockedMessage: N,
            consentButtonLabel: _,
            heading: L = "h3"
        }) => {
            let C = (0, h.default)(`(min-width: ${u.default.Medium}px)`),
                R = (0, n.useRef)(null),
                [M, $] = (0, n.useState)(!1),
                A = (0, a.useInView)(R),
                S = (0, l.useReducedMotion)(),
                T = null;
            "youtube" === g ? T = (0, c.default)(() => e.A(269100), {
                loadableGenerated: {
                    modules: [346003]
                },
                ssr: !1
            }) : "brandfolder" === g && (T = (0, c.default)(() => e.A(410979), {
                loadableGenerated: {
                    modules: [942019]
                },
                ssr: !1
            }));
            let P = {};
            "brandfolder" === g && (P = {
                hlsOptions: {
                    maxMaxBufferLength: 1,
                    qualityStartLevel: 1
                }
            });
            let {
                scrollYProgress: I
            } = (0, r.useScroll)({
                target: R,
                offset: ["start end", "end end"]
            }), F = (0, s.useTransform)(I, [0, 1], ["60%", "100%"]), z = (0, s.useTransform)(I, [0, 1], [1.75, 1]), E = (0, s.useTransform)(I, [0, 1], ["brightness(50%)", "brightness(100%)"]), O = () => {
                k && "brandfolder" === g && $(!0)
            }, B = () => {
                $(!0)
            }, D = (0, o.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": M && !S && A && j?.src
            });
            return (0, t.jsxs)("div", {
                ref: R,
                className: "flex flex-col gap-4 border-t border-gray-300 p-6 md:flex-row dark:border-gray-800 dark:bg-black [&_.consent]:md:justify-start [&_.consent>div.text]:md:w-11/12",
                children: [C && (0, t.jsx)("div", {
                    className: "md:w-[50%]",
                    children: (0, t.jsxs)(i.m.div, {
                        style: {
                            width: F,
                            filter: E
                        },
                        className: "relative aspect-video overflow-hidden rounded-lg",
                        children: [(0, t.jsxs)(i.m.div, {
                            style: {
                                scale: z
                            },
                            className: "relative h-full w-full",
                            children: [j && (0, t.jsx)(t.Fragment, {
                                children: A && !S && j?.src && T && (0, t.jsx)(T, {
                                    url: j.src,
                                    playing: M,
                                    loop: k && "brandfolder" === g,
                                    muted: k && "brandfolder" === g,
                                    playsinline: k && "brandfolder" === g,
                                    width: "100%",
                                    height: "100%",
                                    className: "[&>video]:object-cover",
                                    onReady: O,
                                    onPlay: B,
                                    controls: !k || "brandfolder" !== g,
                                    config: P
                                })
                            }), y && (0, t.jsxs)("div", {
                                className: D,
                                onClick: B,
                                children: [j?.src && (!k || "brandfolder" !== g) && (0, t.jsx)(f.default, {
                                    handleIsPlaying: B,
                                    className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                    label: w
                                }), (0, t.jsx)(d.default, {
                                    src: y.src,
                                    placeholder: "blur",
                                    blurDataURL: y.placeholder,
                                    fill: !0,
                                    alt: y.alt ?? "",
                                    className: "cover absolute object-cover brightness-75",
                                    sizes: `(min-width: ${u.default.Large}px) 33vw, (min-width: ${u.default.Medium}px) 50vw, 100vw`
                                })]
                            })]
                        }), j?.src?.includes("youtube.com") && (0, t.jsx)(x.default, {
                            blockedMessage: N,
                            consentButtonLabel: _
                        })]
                    })
                }), !C && (0, t.jsxs)("div", {
                    className: "relative aspect-video overflow-hidden rounded-lg md:hidden",
                    children: [(0, t.jsxs)("div", {
                        className: "relative h-full w-full",
                        children: [j && (0, t.jsx)(t.Fragment, {
                            children: A && !S && j?.src && T && (0, t.jsx)(T, {
                                url: j.src,
                                playing: M,
                                loop: k && "brandfolder" === g,
                                muted: k && "brandfolder" === g,
                                playsinline: k && "brandfolder" === g,
                                width: "100%",
                                height: "100%",
                                className: "[&>video]:object-cover",
                                onReady: O,
                                onPlay: B,
                                controls: !k && "brandfolder" !== g,
                                config: P
                            })
                        }), y && (0, t.jsxs)("div", {
                            className: D,
                            onClick: B,
                            children: [j?.src && (!k || "brandfolder" !== g) && (0, t.jsx)(f.default, {
                                handleIsPlaying: B,
                                className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                label: w
                            }), (0, t.jsx)(d.default, {
                                src: y.src,
                                placeholder: "blur",
                                blurDataURL: y.placeholder,
                                fill: !0,
                                alt: y.alt ?? "",
                                className: "cover absolute object-cover brightness-75",
                                sizes: `(min-width: ${u.default.Large}px) 33vw, (min-width: ${u.default.Medium}px) 50vw, 100vw`
                            })]
                        })]
                    }), j?.src?.includes("youtube.com") && (0, t.jsx)(x.default, {
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
            features: a = [],
            featuresHeading: l = "h3"
        }) => {
            let r = (0, n.useRef)(null),
                s = (0, o.default)("w-full", {
                    dark: "dark" === e
                });
            return (0, t.jsx)(g.default, {
                children: (0, t.jsx)("div", {
                    ref: r,
                    className: s,
                    children: a && a.map((e, a) => (0, t.jsx)(p, {
                        ...e,
                        heading: l
                    }, a))
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
        features: a,
        isHidden: l,
        featuresHeading: r
    }) => {
        let s = a?.map(b);
        return (0, t.jsx)(t.Fragment, {
            children: !l && (0, t.jsx)(v, {
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
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "0aa0aaf0-1f88-5302-bf31-b4d76f6af070")
    } catch (e) {}
}();
//# debugId=0aa0aaf0-1f88-5302-bf31-b4d76f6af070