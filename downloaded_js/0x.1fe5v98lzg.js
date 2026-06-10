(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 480880, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(3931);
    e.s(["default", 0, ({
        blocks: e,
        blockMap: r,
        ...l
    }) => (0, t.jsx)(t.Fragment, {
        children: e?.map((e, s) => {
            let i = e?._type,
                n = r[i];
            return e.isHidden ? null : n ? (0, t.jsx)("div", {
                children: a.default.createElement(n, {
                    key: `block-${s}`,
                    ...e,
                    blockIndex: s + 1,
                    blockType: i,
                    blockKey: `${i}-${s}`,
                    ...l
                })
            }, `block-${s}`) : void 0
        })
    })])
}, 985904, e => {
    "use strict";
    var t = e.i(3931),
        a = e.i(389240);
    let r = new Map([
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
    var l = Object.defineProperty,
        s = Object.defineProperties,
        i = Object.getOwnPropertyDescriptors,
        n = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        c = (e, t, a) => t in e ? l(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: a
        }) : e[t] = a;
    let u = (0, t.forwardRef)((e, l) => t.default.createElement(a.default, s(((e, t) => {
        for (var a in t || (t = {})) o.call(t, a) && c(e, a, t[a]);
        if (n)
            for (var a of n(t)) d.call(t, a) && c(e, a, t[a]);
        return e
    })({
        ref: l
    }, e), i({
        weights: r
    }))));
    u.displayName = "Info", e.s(["Info", 0, u], 985904)
}, 146911, e => {
    "use strict";
    let t = e.i(976317).default;
    e.s(["default", 0, t])
}, 401861, 841889, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(722978),
        r = e.i(3931),
        l = e.i(985904),
        s = e.i(146911);
    let i = ({
            title: e,
            text: i,
            action: n,
            truncate: o,
            className: d = "",
            isContained: c,
            dismiss: u
        }) => {
            let m = (0, r.useMemo)(() => `unity-alert-${i?.substring(0,30).replaceAll(" ","_")}`, [i]),
                [f, h] = (0, r.useState)(!0),
                [x, p] = (0, r.useState)(!1);
            return ((0, r.useEffect)(() => {
                localStorage?.getItem(m) && p(!0)
            }, [m]), x) ? null : (0, t.jsx)("div", {
                className: (0, a.clsx)({
                    container: c
                }),
                children: (0, t.jsxs)("div", {
                    className: (0, a.clsx)("dark:bg-blue/10 relative flex w-full flex-col justify-between gap-4 bg-sky-100 py-4 pr-5 pl-11 text-sm text-gray-900 transition-colors sm:flex-row", {
                        flex: u?.enabled
                    }, {
                        "rounded-lg": c
                    }, d),
                    children: [(0, t.jsx)(l.Info, {
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
                                p(!0), localStorage.setItem(m, Date.now().toString())
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
            text: r,
            action: l,
            theme: s,
            truncate: n,
            dismiss: o,
            isContained: d,
            isHidden: c,
            spacing: u
        }) => {
            let m = (0, a.clsx)({
                "pt-10": u?.top
            }, {
                "pb-10": u?.bottom
            }, {
                "dark bg-black": "dark" === s
            });
            return c || !r ? null : (0, t.jsx)("section", {
                className: m,
                children: (0, t.jsx)(i, {
                    title: e,
                    text: r,
                    isContained: d,
                    truncate: n || {},
                    dismiss: o || {},
                    action: l && {
                        title: l?.text || "",
                        href: l?.fieldLink?.linkReference?.href?.current || "",
                        target: l?.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self"
                    }
                })
            })
        };
    e.s(["default", 0, n], 841889), e.s(["default", 0, n], 401861)
}, 246916, e => {
    "use strict";
    var t = e.i(430907),
        a = e.i(200241),
        r = e.i(740041);
    e.s(["useMTBanner", 0, function(e, l = []) {
        var s, i;
        let n, o, d, c, u, m = (0, t.usePathname)(),
            f = (0, a.useLocale)(),
            h = f !== r.defaultLocale ? m.replace(`/${f}`, "") : m;
        return {
            shouldDisplayMTBanner: f !== r.defaultLocale && e?.translationType === "MT" && !l.includes(h),
            updatedBlocks: (s = e.blocks ?? [], i = e.machineTranslationDisclaimer, n = s.reduce((e, t, a) => ["hero", "alternateNavigation", "headliner"].includes(t._type) ? a : e, -1), o = [...s], d = o[n + 1]?._type === "alternateNavigationAnchor" || o[n + 1]?._type === "anchorButton" ? o[n + 2] : o[n + 1], c = d?.theme ?? null, u = {
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
            }, -1 === n ? o.unshift(u) : o.splice(n + 1, 0, u), o),
            redirectPathName: h
        }
    }], 246916)
}, 239145, (e, t, a) => {
    t.exports = function(e, t) {
        for (var a = -1, r = null == e ? 0 : e.length, l = Array(r); ++a < r;) l[a] = t(e[a], a, e);
        return l
    }
}, 873021, (e, t, a) => {
    var r = e.r(328042),
        l = e.r(239145),
        s = e.r(778116),
        i = e.r(692558),
        n = 1 / 0,
        o = r ? r.prototype : void 0,
        d = o ? o.toString : void 0;
    t.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (s(t)) return l(t, e) + "";
        if (i(t)) return d ? d.call(t) : "";
        var a = t + "";
        return "0" == a && 1 / t == -n ? "-0" : a
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
}, 430215, e => {
    "use strict";
    var t = e.i(3931);
    e.s(["default", 0, e => {
        let [a, r] = (0, t.useState)(!1);
        return (0, t.useEffect)(() => {
            let t = window.matchMedia(e);
            t.matches !== a && r(t.matches);
            let l = () => r(t.matches);
            return window.addEventListener("resize", l), () => window.removeEventListener("resize", l)
        }, [a, e]), a
    }])
}, 647562, (e, t, a) => {
    var r = e.r(778116),
        l = e.r(692558),
        s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        i = /^\w*$/;
    t.exports = function(e, t) {
        if (r(e)) return !1;
        var a = typeof e;
        return !!("number" == a || "symbol" == a || "boolean" == a || null == e || l(e)) || i.test(e) || !s.test(e) || null != t && e in Object(t)
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
        s = e.r(150095),
        i = e.r(884942),
        n = e.r(985902);

    function o(e) {
        var t = -1,
            a = null == e ? 0 : e.length;
        for (this.clear(); ++t < a;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    o.prototype.clear = r, o.prototype.delete = l, o.prototype.get = s, o.prototype.has = i, o.prototype.set = n, t.exports = o
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
        s = e.r(857624),
        i = e.r(219301),
        n = e.r(682947);

    function o(e) {
        var t = -1,
            a = null == e ? 0 : e.length;
        for (this.clear(); ++t < a;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    o.prototype.clear = r, o.prototype.delete = l, o.prototype.get = s, o.prototype.has = i, o.prototype.set = n, t.exports = o
}, 817416, (e, t, a) => {
    var r = e.r(298435),
        l = e.r(990543),
        s = e.r(764138);
    t.exports = function() {
        this.size = 0, this.__data__ = {
            hash: new r,
            map: new(s || l),
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
        s = e.r(349966),
        i = e.r(649884),
        n = e.r(884711);

    function o(e) {
        var t = -1,
            a = null == e ? 0 : e.length;
        for (this.clear(); ++t < a;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    o.prototype.clear = r, o.prototype.delete = l, o.prototype.get = s, o.prototype.has = i, o.prototype.set = n, t.exports = o
}, 528535, (e, t, a) => {
    var r = e.r(158774);

    function l(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw TypeError("Expected a function");
        var a = function() {
            var r = arguments,
                l = t ? t.apply(this, r) : r[0],
                s = a.cache;
            if (s.has(l)) return s.get(l);
            var i = e.apply(this, r);
            return a.cache = s.set(l, i) || s, i
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
        s = /\\(\\)?/g;
    t.exports = r(function(e) {
        var t = [];
        return 46 === e.charCodeAt(0) && t.push(""), e.replace(l, function(e, a, r, l) {
            t.push(r ? l.replace(s, "$1") : a || e)
        }), t
    })
}, 6205, (e, t, a) => {
    var r = e.r(778116),
        l = e.r(647562),
        s = e.r(837344),
        i = e.r(553050);
    t.exports = function(e, t) {
        return r(e) ? e : l(e, t) ? [e] : s(i(e))
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
        for (var a = 0, s = t.length; null != e && a < s;) e = e[l(t[a++])];
        return a && a == s ? e : void 0
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
        let s = (0, a.useMemo)(() => ({
            products: e
        }), [e]);
        return (0, t.jsx)(r.Provider, {
            value: s,
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
        s = e.i(544923);
    let i = (e, t) => t?.country ? e?.country?.toLowerCase().localeCompare(t?.country.toLowerCase()) || 0 : -1,
        n = {
            currency: "USD"
        },
        o = e => e?.text !== null && e?.text !== void 0 || (e?.children ? e.children.every(o) : !!Array.isArray(e) && e.every(o));
    e.s(["default", 0, () => {
        let {
            state: e
        } = (0, r.default)(), {
            products: d
        } = (0, l.usePageCommerce)(), [c] = (0, s.default)("location", "US"), u = t => {
            let a = t?.variantPrices.sort(i),
                r = e => a?.find(t => t.currency?.toLowerCase() === e?.currency?.toLowerCase() && (t.country?.toLowerCase() === c?.toLowerCase() || !t.country))?.price;
            return r(e) ? [r(e), !1] : [r(n), !0]
        }, m = e => {
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
        }, f = (e, a) => {
            if (!a || !e) return e;
            let r = m(a);
            return t.default.render(e, r)
        }, h = (e, a) => {
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
        }, x = (e, r) => {
            if (!r || !e) return e;
            let l = e.match(/{{\s*[\w.-]+\s*}}/g)?.map(e => e?.match(/[\w.-]+/)?.[0] || "");
            if (void 0 === l) return e;
            let s = m(r);
            return r && l?.every(e => (0, a.default)(s, e)) ? t.default.render(e, s) : null
        }, p = (e, t, a = f) => e?.map(e => {
            if (e?._type === "block") return {
                ...e,
                children: p(e.children, t, a)
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
            appendCommerceData: f,
            appendCommerceDataToPortableText: p,
            renderWithAllVariablesToPortableText: (e, t) => {
                let a = p(e, t, x);
                return o(a) ? a : null
            },
            getPrice: u,
            appendCommerceDataForMultipleProducts: h,
            appendPageCommerceData: e => h(e, d),
            appendPageCommerceDataToPortableText: e => p(e, void 0, e => h(e, d))
        }
    }], 326388)
}, 996332, 422664, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(722978),
        r = e.i(655105);
    let l = ({
            size: e = "m",
            url: l,
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
                children: (0, t.jsx)(r.default, {
                    src: l,
                    alt: s,
                    width: i,
                    height: n
                })
            })
        },
        s = ({
            avatar: e,
            name: r,
            company: s,
            role: i,
            size: n = "m"
        }) => {
            let o = (0, a.default)("text-gray-900 dark:text-gray-100 pb-1", {
                    "loco-caption-lg-semibold": "m" === n,
                    "loco-caption-sm-semibold": "s" === n || "xs" === n || "xxs" === n
                }),
                d = (0, a.default)("text-gray-700 dark:text-gray-300 tracking-normal", {
                    "loco-text-body-xs-semibold": "m" === n,
                    "loco-text-body-sm-medium": "s" === n || "xs" === n || "xxs" === n
                });
            return (0, t.jsxs)("div", {
                className: "flex items-center",
                children: [e && (0, t.jsx)(l, {
                    url: e,
                    size: n,
                    alt: r
                }), (0, t.jsxs)("div", {
                    className: "flex flex-col",
                    children: [(0, t.jsxs)("span", {
                        className: o,
                        children: [r?.toUpperCase(), " ", s && r && "/" || "", " ", s?.toUpperCase()]
                    }), (0, t.jsx)("span", {
                        className: d,
                        children: i
                    })]
                })]
            })
        };
    e.s(["default", 0, s], 422664);
    let i = ({
        content: e,
        author: r,
        className: l = "",
        textClassName: i = ""
    }) => {
        let n = (0, a.default)("p-6 rounded-xl", l),
            o = (0, a.default)("mb-6 text-gray-800 dark:text-gray-200", i);
        return (0, t.jsxs)("div", {
            className: n,
            children: [(0, t.jsx)("div", {
                className: o,
                children: e
            }), (0, t.jsx)(s, {
                ...r
            })]
        })
    };
    e.s(["default", 0, ({
        title: e,
        testimonials: r,
        layout: l = "one-layout",
        testimonialVariant: s = "default",
        className: n = ""
    }) => {
        let o = (0, a.default)({
                "one-layout": "col-span-12",
                "two-layout": "col-span-12 md:col-span-6 flex",
                "three-layout": "col-span-12 md:col-span-6 lg:col-span-4 flex"
            } [l]),
            d = (0, a.default)("one-layout" !== l && "flex flex-col justify-between w-full", {
                "bg-gray-100 dark:bg-gray-900": "default" === s
            }, {
                "border border-gray-200 dark:border-gray-700": "outlined" === s && !e
            }),
            c = (0, a.default)({
                "auto-rows-fr": "one-layout" !== l
            }, "grid grid-cols-12 gap-4", n),
            u = (0, a.default)("container py-0 md:py-16", {
                "bg-gray-100 dark:bg-gray-900 rounded-2xl": e,
                "border border-gray-200 dark:border-gray-700 bg-transparent": "outlined" === s && e
            }),
            m = (0, a.default)({
                "loco-text-body-sm-medium": "two-layout" === l || "three-layout" === l,
                "loco-text-body-lg-medium": "one-layout" === l
            });
        return (0, t.jsxs)("div", {
            className: u,
            children: [e && (0, t.jsx)("div", {
                className: "loco-text-heading-sm p-6",
                children: e
            }), (0, t.jsx)("div", {
                className: c,
                children: r?.map((e, a) => {
                    let {
                        content: r,
                        author: l,
                        _key: s
                    } = e;
                    return (0, t.jsx)("div", {
                        className: o,
                        children: (0, t.jsx)(i, {
                            content: r,
                            author: l,
                            className: d,
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
        layout: r,
        testimonialVariant: l,
        testimonials: s,
        theme: i,
        hideAuthorImage: n,
        isHidden: o
    }) => {
        let d = s?.map((e, t) => ({
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
                        testimonials: d,
                        title: e,
                        layout: "two-layout" === r ? "two-layout" : "three-layout" === r ? "three-layout" : "one-layout",
                        testimonialVariant: "outlined" === l ? "outlined" : "default"
                    })
                })
            })
        })
    }], 787213)
}, 725751, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(3931),
        r = e.i(210310),
        l = e.i(326388);
    e.s(["default", 0, ({
        theme: e,
        isHidden: s,
        verticalHeadingClass: i,
        productCatalogItems: n,
        htmlTableContent: o
    }) => {
        let {
            appendCommerceDataForMultipleProducts: d
        } = (0, l.default)(), c = (0, a.useCallback)(e => {
            let t = d(e, n);
            return t || e
        }, [n, d]), u = (0, a.useMemo)(() => {
            let e = o.rows.map(e => (e.cells = e.cells.map(e => c(e)), e));
            return {
                ...o,
                rows: e
            }
        }, [o, c]);
        return (0, t.jsx)(t.Fragment, {
            children: !s && (0, t.jsx)("section", {
                className: "dark" === e ? "dark" : "",
                children: (0, t.jsx)("div", {
                    className: "mx-auto max-w-7xl p-6 dark:bg-black",
                    children: (0, t.jsx)(r.default, {
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
        r = e.i(805518);
    let l = ({
            title: e,
            content: l,
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
                }), (0, t.jsx)(r.default, {
                    className: i,
                    children: l
                })]
            })
        },
        s = ({
            title: e = "",
            descriptions: a = [],
            treshold: r,
            pricing: s
        }) => (0, t.jsxs)("div", {
            className: "flex h-full flex-col justify-between rounded-lg bg-gray-100 p-6 lg:w-96 dark:bg-gray-800",
            children: [(0, t.jsxs)("div", {
                className: "grow pb-8",
                children: [(0, t.jsx)("div", {
                    className: "loco-text-heading-sm mb-8 text-black dark:text-white",
                    children: e
                }), (0, t.jsx)("div", {
                    children: a?.map((a, r) => (0, t.jsx)("div", {
                        className: "flex flex-col pb-8",
                        children: (0, t.jsx)(l, {
                            title: a.title,
                            content: a.content,
                            listStyle: a.listStyle
                        })
                    }, `card-plan-${e}-${r}`))
                }), (0, t.jsx)(l, {
                    title: r?.title || "",
                    content: r?.content || ""
                })]
            }), (0, t.jsx)("div", {
                className: "min-h-[6rem]",
                children: (0, t.jsx)(l, {
                    title: s?.title || "",
                    content: s?.content || ""
                })
            })]
        }),
        i = ({
            theme: e = "light",
            cards: r = []
        }) => {
            let l = (0, a.default)({
                dark: "dark" === e
            });
            return (0, t.jsx)("section", {
                className: l,
                children: (0, t.jsx)("div", {
                    className: "bg-white pt-8 pb-20 dark:bg-black",
                    children: (0, t.jsx)("div", {
                        className: "container flex flex-col flex-wrap gap-2 lg:flex-row lg:justify-center",
                        children: r.map((e, a) => (0, t.jsx)("div", {
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
        cards: r
    }) => e ? null : (0, t.jsx)(i, {
        theme: "dark" === a ? "dark" : "light",
        cards: r.map(e => ({
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
        r = e.i(722990),
        l = e.i(655105),
        s = e.i(722978);
    let i = ({
            overline: e,
            variant: a = "default"
        }) => {
            let r = "products" === a;
            return (0, t.jsx)("div", {
                className: (0, s.default)("loco-caption-lg-semibold mb-2 lg:mb-3", {
                    "text-white": r,
                    "text-gray-700 dark:text-gray-300": !r
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
    var d = e.i(749583);
    let c = ({
            actions: e,
            variant: r = "default"
        }) => {
            let l = "products" === r;
            return (0, t.jsx)("div", {
                className: "flex flex-col flex-wrap items-start justify-start gap-y-4 md:flex-row md:gap-2",
                children: e.map((e, r) => e.renderModal ? (0, t.jsx)(a.default.Fragment, {
                    children: e.renderModal()
                }, r) : (0, t.jsx)(d.default, {
                    size: "large",
                    variant: 0 === r ? "primary" : "secondary",
                    rounded: !0,
                    hasArrow: !0,
                    outlined: !l && 0 === r,
                    className: "w-auto justify-center",
                    href: e.href,
                    target: e.target,
                    children: e.label
                }, r))
            })
        },
        u = ({
            overline: e,
            title: a,
            body: r,
            actions: d,
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
                        children: [u && (0, t.jsx)(l.default, {
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
                                body: r,
                                variant: f
                            }), (0, t.jsx)(c, {
                                actions: d,
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
        title: l,
        body: s,
        actions: i,
        image: n,
        theme: o,
        isHidden: d,
        variant: c,
        productCatalogItem: p,
        productCategoryFilter: g
    }) => {
        let [v] = (0, a.useContext)(h.FiltersContext), {
            state: b
        } = (0, f.default)(), y = {
            ...b,
            product: p?.productKey,
            variant: null
        }, {
            renderModal: j,
            extraFields: k
        } = (0, x.useFormModal)(i), w = (0, a.useMemo)(() => i ? i.map(e => (e => {
            if (!e) return null;
            let t = !!e.form,
                a = e.link?.linkReference?.href?.current,
                r = t ? "" : a ? (0, m.default)(a, y, e.extendLink) : "";
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
                href: r,
                target: e?.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
            }
        })(e)).filter(e => !!e) : [], [i, y, j, k]), {
            subcategories: N
        } = v.categories?.find(({
            _id: e
        }) => e === v.selectedCategory) || {}, _ = null != v.selectedSubcategory ? (N || []).find(({
            _id: e
        }) => e === v.selectedSubcategory) : null, L = !g || g.categories?.find(e => e._id === v.selectedCategory) != null && (null == _ || !g.subcategories || g.subcategories.some(({
            _id: e
        }) => e === v.selectedSubcategory)), C = n ? {
            url: n?.file?.asset.url || "",
            alt: n.alt
        } : void 0;
        return (0, t.jsx)(t.Fragment, {
            children: !d && L && (0, t.jsx)("section", {
                className: "dark" === o ? "dark" : "",
                children: (0, t.jsx)(u, {
                    overline: e,
                    title: l || "",
                    body: (0, t.jsx)(r.PortableText, {
                        value: s
                    }),
                    actions: w,
                    image: C,
                    variant: c
                })
            })
        })
    }], 32382)
}, 529363, 989873, e => {
    "use strict";
    var t = e.i(175602);
    let a = (e, t, a) => (((1 - 3 * a + 3 * t) * e + (3 * a - 6 * t)) * e + 3 * t) * e;

    function r(e, r, l, s) {
        return e === r && l === s ? t.noop : t => 0 === t || 1 === t ? t : a(function(e, t, r, l, s) {
            let i, n, o = 0;
            do(i = a(n = t + (r - t) / 2, l, s) - e) > 0 ? r = n : t = n; while (Math.abs(i) > 1e-7 && ++o < 12) return n
        }(t, 0, 1, e, l), r, s)
    }
    e.s(["cubicBezier", 0, r], 989873);
    let l = r(.42, 0, 1, 1),
        s = r(0, 0, .58, 1),
        i = r(.42, 0, .58, 1);
    e.s(["easeIn", 0, l, "easeInOut", 0, i, "easeOut", 0, s], 529363)
}, 164163, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(722978),
        r = e.i(655105),
        l = e.i(825610),
        s = e.i(749583),
        i = e.i(596889),
        n = e.i(805518);
    e.s(["default", 0, ({
        title: e,
        cards: o,
        layout: d = "four-cards",
        cardVariant: c = "default",
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
                            })[d], u && ({
                                "two-cards": "mb-6 min-w-[35rem] [&>div>.card-img]:h-72",
                                "three-cards": "mb-6 min-w-[22rem] [&>div>.card-img]:h-44",
                                "four-cards": "mb-6 min-w-[16rem] [&>div>.card-img]:h-36"
                            })[d]),
                            x = (0, a.clsx)("place-self-end", {
                                "px-6 pb-6": "default" === c || "transparent" === c
                            }),
                            p = (0, a.clsx)({
                                "p-6": "default" === c || "transparent" === c,
                                "py-6": "padded" === c
                            }),
                            g = (0, a.clsx)("object-cover", {
                                "rounded-t-xl": "default" === c || "transparent" === c,
                                rounded: "padded" === c
                            }),
                            v = (0, a.clsx)("caption-xs mt-1 text-right text-gray-400", {
                                "mr-1": "padded" !== c
                            });
                        return (0, t.jsxs)(i.default, {
                            className: h,
                            variant: c,
                            children: [(0, t.jsxs)(i.default.Content, {
                                children: [o.image && o.image.src && (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsx)(i.default.Image, {
                                        withinContainer: o.image.withinContainer,
                                        children: (0, t.jsx)(r.default, {
                                            src: o.image.src ?? "",
                                            alt: o.image.alt ?? "",
                                            fill: !0,
                                            className: g,
                                            quality: 100
                                        })
                                    }), o.image.description && (0, t.jsx)(n.default, {
                                        className: v,
                                        children: o.image.description
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: p,
                                    children: [o.icon && o.icon.src && (0, t.jsx)("div", {
                                        className: "relative mb-5 dark:invert",
                                        children: (0, t.jsx)(r.default, {
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
                                    "data-link-location": l.trackingLocation.cardsAction,
                                    "data-link-id": `${l.trackingLocation.cardsAction}-${a}`,
                                    children: e.title
                                }, `${e.title}-${a}`))
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
        a = e.i(3931),
        r = e.i(722990),
        l = e.i(164163),
        s = e.i(326388);
    e.s(["default", 0, ({
        title: e,
        layout: i,
        cardVariant: n,
        scroll: o,
        theme: d,
        cardsHeading: c,
        cards: u,
        isHidden: m
    }) => {
        let {
            appendCommerceData: f,
            appendCommerceDataToPortableText: h,
            currency: x
        } = (0, s.default)(), p = (0, a.useMemo)(() => u?.map(e => ({
            type: e._type,
            title: f(e.title, e.productCatalogItem) || "",
            description: f(e.description, e.productCatalogItem) || "",
            richText: (0, t.jsx)(r.PortableText, {
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
                className: `${"dark"===d?"dark":""} overflow-hidden`,
                children: (0, t.jsx)(l.default, {
                    layout: "two-cards" === i || "three-cards" === i || "four-cards" === i ? i : "four-cards",
                    cardVariant: "default" === n || "padded" === n || "transparent" === n ? n : "default",
                    scroll: o,
                    title: e || "",
                    cardsHeading: ["h2", "h3", "h4", "div"].includes(c) ? c : void 0,
                    cards: p
                })
            })
        })
    }], 449758)
}, 81636, 673300, 5124, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(722978),
        r = e.i(153348),
        l = e.i(955429),
        s = e.i(828083),
        i = e.i(655105),
        n = e.i(3931),
        o = e.i(998569),
        d = e.i(278466);
    let c = (0, s.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        u = ({
            title: e,
            titleTag: a,
            description: r,
            action: l
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
                            children: r
                        }), (0, t.jsx)("div", {
                            className: "shrink-0 text-right",
                            children: (0, t.jsx)(o.default, {
                                direction: "right",
                                ariaLabel: l.label,
                                variant: "secondary",
                                isForcedHover: s,
                                tag: "span"
                            })
                        })]
                    })]
                }), (0, t.jsx)(d.Link, {
                    className: "absolute top-0 left-0 z-10 h-full w-full",
                    href: l.href,
                    title: l.label,
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
                [d, u] = (0, n.useState)(!1),
                m = (0, r.useInView)(o),
                f = (0, l.useReducedMotion)(),
                h = (0, a.default)("absolute cover z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": d && !f && m && s.src
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
            let o = (0, n.useRef)(null),
                [d, u] = (0, n.useState)(!1),
                m = (0, r.useInView)(o),
                f = (0, l.useReducedMotion)(),
                h = (0, a.default)("absolute cover z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": d && !f && m && s.src
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
            visual: r,
            background: l,
            benefits: s = [],
            theme: i
        }) => {
            let n = (0, a.default)("relative bg-gray-100 px-4 pb-10 pt-8 lg:px-8 lg:pt-44", {
                "dark bg-gray-900": !i || "dark" === i
            });
            return (0, t.jsxs)("div", {
                className: n,
                children: [l && (0, t.jsx)(f, {
                    ...l
                }), (0, t.jsxs)("div", {
                    className: "relative z-10 md:grid md:grid-cols-12 md:gap-2",
                    children: [(0, t.jsx)("div", {
                        className: "relative row-start-1 md:col-start-1 md:col-end-13 lg:col-start-1 lg:col-end-9",
                        children: (0, t.jsx)("p", {
                            className: "loco-text-heading-md",
                            children: e
                        })
                    }), r && (0, t.jsx)("div", {
                        className: "relative col-start-1 col-end-5 row-start-2 mt-14",
                        children: (0, t.jsx)(m, {
                            ...r
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
        background: r,
        benefits: l,
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
            background: r ? {
                image: {
                    src: r?.image?.asset.url || "",
                    placeholder: r?.image?.asset.metadata?.lqip || ""
                },
                video: {
                    src: r?.brandfolder?.muxHLSURL || ""
                }
            } : null,
            benefits: l?.map(e => ({
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
    let p = (0, s.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        g = ({
            title: e,
            description: s,
            image: o,
            video: d,
            actions: c
        }) => {
            let u = (0, n.useRef)(null),
                [m, f] = (0, n.useState)(!1),
                h = (0, r.useInView)(u, {
                    once: !0
                }),
                g = (0, l.useReducedMotion)(),
                v = (0, a.default)("z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": m && !g && h && d.src
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
                    }), h && !g && d.src && (0, t.jsx)(p, {
                        url: d.src,
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
                            children: [" ", c.map((e, a) => {
                                if (e.link) return (0, t.jsx)(x.default, {
                                    href: e.link.href,
                                    target: e.link.target,
                                    variant: 0 === a ? "primary" : "secondary",
                                    rounded: !0,
                                    hasArrow: !0,
                                    children: e.title
                                }, `full-screen-visual-action-link-${e.title}-${a}`);
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
        image: r,
        brandfolder: l,
        actions: s,
        isHidden: i
    }) => {
        let {
            mapFormActions: n
        } = (0, v.useFormModal)(s), o = n(s);
        return (0, t.jsx)(t.Fragment, {
            children: !i && (0, t.jsx)(g, {
                title: e,
                description: a,
                image: {
                    src: r?.asset.url || "",
                    placeholder: r?.asset.metadata.lqip || ""
                },
                video: {
                    src: l?.muxHLSURL || ""
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
            index: l,
            isActive: s,
            preferReducedMotion: o,
            isVisuallyActive: d,
            clickCallback: c,
            blurredBackground: u
        }) => {
            let m = (0, n.useRef)(null),
                [f, h] = (0, n.useState)(!1),
                x = (0, r.useInView)(m, {
                    once: !0
                }),
                p = (0, a.default)("relative aspect-video overflow-hidden rounded-2xl duration-500", {
                    "opacity-30": !d && !s
                }),
                g = (0, a.default)("absolute h-full w-full transition-opacity duration-500 z-[-1]"),
                v = (0, a.default)("absolute h-full w-full transition-opacity duration-500", {
                    "opacity-0": f && s && !o && x && e.video.src,
                    "object-contain": u
                });
            return (0, t.jsxs)("div", {
                className: p,
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
                        className: g
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
                }, `slide-video-${l}`)]
            }, `carousel-text-visual-${l}`)
        },
        N = ({
            title: e,
            action: a,
            slides: r,
            blurredBackground: s
        }) => {
            let [i, d] = (0, n.useState)(void 0), [c, u] = (0, n.useState)(void 0), [m, f] = (0, n.useState)(1), [h, p] = (0, n.useState)(0), [g, v] = (0, n.useState)(0), b = (0, n.useRef)(null), k = (0, n.useRef)(null), N = (0, n.useRef)(null), _ = (0, l.useReducedMotion)();
            (0, n.useEffect)(() => {
                k.current && N.current && (d(k.current), u(N.current))
            }, [k, N]);
            let L = (0, n.useCallback)((e, t) => {
                    f(t + 1), v(t)
                }, []),
                C = (0, n.useCallback)(e => {
                    p(e)
                }, []),
                M = (0, n.useCallback)(() => {
                    k.current && N.current && k.current.slickPrev()
                }, []),
                R = (0, n.useCallback)(() => {
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
                A = (0, n.useMemo)(() => r.map((e, a) => (0, t.jsx)("div", {
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
                }, a)), [r]),
                S = (0, n.useMemo)(() => r.map((e, a) => (0, t.jsx)(w, {
                    slide: e,
                    index: a,
                    isActive: h === a,
                    isVisuallyActive: g === a,
                    preferReducedMotion: _,
                    clickCallback: R,
                    blurredBackground: s
                }, a)), [r, h, g, _, R]);
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
                            children: [r.length > 1 && (0, t.jsx)("span", {
                                className: "loco-text-body-md text-blue mx-2.5 mt-2.5 mb-4 block lg:mt-0",
                                children: `${m<10?"0":""}${m} / ${r.length<10?"0":""}${r.length}`
                            }), (0, t.jsx)(y.default, {
                                className: "carousel-text-visual_text mt-4 lg:mt-0",
                                ...$,
                                draggable: !1,
                                asNavFor: c,
                                beforeChange: L,
                                afterChange: C,
                                fade: !0,
                                ref: k,
                                children: A
                            }), r.length > 1 && (0, t.jsxs)("div", {
                                className: "absolute bottom-0 left-3 flex gap-2",
                                children: [(0, t.jsx)(o.default, {
                                    direction: "left",
                                    onPress: M,
                                    ariaLabel: "Prev",
                                    variant: "primary"
                                }), (0, t.jsx)(o.default, {
                                    onPress: R,
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
        action: r,
        slides: l,
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
            d = l?.map(o) || [],
            c = s?.map(o) || [],
            u = d.length > 0 ? d : c.length > 0 ? c : [];
        return (0, t.jsx)(t.Fragment, {
            children: !n && (0, t.jsx)(N, {
                title: a || "",
                action: r ? {
                    title: r.title || "",
                    href: r.link?.linkReference?.href.current || "",
                    target: r.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
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
        r = e.i(278466),
        l = e.i(722978);
    let s = ({
        logos: e
    }) => (0, t.jsx)("div", {
        className: "container my-8",
        children: (0, t.jsx)("div", {
            className: "grid w-full grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5",
            children: e?.map((e, s) => {
                let i = (0, l.default)("rounded bg-gray-100 p-4  md:p-8", {
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
                    }), e.action?.href && (0, t.jsx)(r.Link, {
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
        let r = e?.map(e => ({
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
                logos: r
            })
        })
    }], 314669)
}, 583877, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(200241),
        r = e.i(722978),
        l = e.i(3931);
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
            defaultOpen: r,
            activities: n,
            footer: o
        }) => {
            let [d, c] = (0, l.useState)(r);
            return (0, t.jsxs)("details", {
                open: d,
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
                            children: a
                        })]
                    }), (0, t.jsx)("div", {
                        children: d ? (0, t.jsx)(i, {}) : (0, t.jsx)(s, {})
                    })]
                }), (0, t.jsxs)("div", {
                    className: "flex flex-col px-6 pb-6 md:ml-[19rem]",
                    children: [n?.map(e => {
                        let {
                            title: a,
                            startTime: r,
                            endTime: l
                        } = e, s = l ? `${r} - ${l}` : r;
                        return (0, t.jsxs)("div", {
                            className: "flex flex-col gap-2 pt-6 first:mt-4 first:border-t first:border-gray-300 sm:flex-row dark:first:border-gray-700",
                            children: [s && (0, t.jsx)("div", {
                                className: "loco-text-body-sm w-36 shrink-0 text-gray-600 dark:text-gray-400",
                                children: s
                            }), a && (0, t.jsx)("div", {
                                className: "loco-text-body-md text-black dark:text-white",
                                children: a
                            })]
                        }, `agenda-event-${a}-${r}`)
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
            let l = (0, r.default)({
                dark: "dark" === e
            });
            return (0, t.jsx)("section", {
                className: l,
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
        isHidden: r,
        agendaCards: l
    }) => {
        let s = (0, a.useLocale)();
        return r ? null : (0, t.jsx)(o, {
            theme: "dark" === e ? "dark" : "light",
            agendaCards: l?.map(e => ({
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
        r = e.i(955429),
        l = e.i(376936),
        s = e.i(192207),
        i = e.i(526826),
        n = e.i(3931),
        o = e.i(722978),
        d = e.i(828083),
        c = e.i(655105),
        u = e.i(783078),
        m = e.i(749583),
        f = e.i(186114),
        h = e.i(430215),
        x = e.i(195051),
        p = e.i(766930);
    let g = ({
            provider: p,
            title: g,
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
                M = (0, n.useRef)(null),
                [R, $] = (0, n.useState)(!1),
                A = (0, a.useInView)(M),
                S = (0, r.useReducedMotion)(),
                T = null;
            "youtube" === p ? T = (0, d.default)(() => e.A(269100), {
                loadableGenerated: {
                    modules: [346003]
                },
                ssr: !1
            }) : "brandfolder" === p && (T = (0, d.default)(() => e.A(410979), {
                loadableGenerated: {
                    modules: [942019]
                },
                ssr: !1
            }));
            let P = {};
            "brandfolder" === p && (P = {
                hlsOptions: {
                    maxMaxBufferLength: 1,
                    qualityStartLevel: 1
                }
            });
            let {
                scrollYProgress: F
            } = (0, l.useScroll)({
                target: M,
                offset: ["start end", "end end"]
            }), z = (0, s.useTransform)(F, [0, 1], ["60%", "100%"]), I = (0, s.useTransform)(F, [0, 1], [1.75, 1]), O = (0, s.useTransform)(F, [0, 1], ["brightness(50%)", "brightness(100%)"]), E = () => {
                k && "brandfolder" === p && $(!0)
            }, Z = () => {
                $(!0)
            }, U = (0, o.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": R && !S && A && j?.src
            });
            return (0, t.jsxs)("div", {
                ref: M,
                className: "flex flex-col gap-4 border-t border-gray-300 p-6 md:flex-row dark:border-gray-800 dark:bg-black [&_.consent]:md:justify-start [&_.consent>div.text]:md:w-11/12",
                children: [C && (0, t.jsx)("div", {
                    className: "md:w-[50%]",
                    children: (0, t.jsxs)(i.m.div, {
                        style: {
                            width: z,
                            filter: O
                        },
                        className: "relative aspect-video overflow-hidden rounded-lg",
                        children: [(0, t.jsxs)(i.m.div, {
                            style: {
                                scale: I
                            },
                            className: "relative h-full w-full",
                            children: [j && (0, t.jsx)(t.Fragment, {
                                children: A && !S && j?.src && T && (0, t.jsx)(T, {
                                    url: j.src,
                                    playing: R,
                                    loop: k && "brandfolder" === p,
                                    muted: k && "brandfolder" === p,
                                    playsinline: k && "brandfolder" === p,
                                    width: "100%",
                                    height: "100%",
                                    className: "[&>video]:object-cover",
                                    onReady: E,
                                    onPlay: Z,
                                    controls: !k || "brandfolder" !== p,
                                    config: P
                                })
                            }), y && (0, t.jsxs)("div", {
                                className: U,
                                onClick: Z,
                                children: [j?.src && (!k || "brandfolder" !== p) && (0, t.jsx)(f.default, {
                                    handleIsPlaying: Z,
                                    className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                    label: w
                                }), (0, t.jsx)(c.default, {
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
                                playing: R,
                                loop: k && "brandfolder" === p,
                                muted: k && "brandfolder" === p,
                                playsinline: k && "brandfolder" === p,
                                width: "100%",
                                height: "100%",
                                className: "[&>video]:object-cover",
                                onReady: E,
                                onPlay: Z,
                                controls: !k && "brandfolder" !== p,
                                config: P
                            })
                        }), y && (0, t.jsxs)("div", {
                            className: U,
                            onClick: Z,
                            children: [j?.src && (!k || "brandfolder" !== p) && (0, t.jsx)(f.default, {
                                handleIsPlaying: Z,
                                className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                label: w
                            }), (0, t.jsx)(c.default, {
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
                        children: g
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
            featuresHeading: r = "h3"
        }) => {
            let l = (0, n.useRef)(null),
                s = (0, o.default)("w-full", {
                    dark: "dark" === e
                });
            return (0, t.jsx)(p.default, {
                children: (0, t.jsx)("div", {
                    ref: l,
                    className: s,
                    children: a && a.map((e, a) => (0, t.jsx)(g, {
                        ...e,
                        heading: r
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
        isHidden: r,
        featuresHeading: l
    }) => {
        let s = a?.map(b);
        return (0, t.jsx)(t.Fragment, {
            children: !r && (0, t.jsx)(v, {
                theme: "dark" === e ? "dark" : "light",
                features: s,
                featuresHeading: "h2" === l || "h4" === l ? l : "h3"
            })
        })
    }], 277965)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c4a29cf8-ae9c-5048-aa0c-716dd02ca5bc")
    } catch (e) {}
}();
//# debugId=c4a29cf8-ae9c-5048-aa0c-716dd02ca5bc