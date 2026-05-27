(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 480880, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(3931);
    e.s(["default", 0, ({
        blocks: e,
        blockMap: a,
        ...r
    }) => (0, t.jsx)(t.Fragment, {
        children: e?.map((e, i) => {
            let s = e?._type,
                n = a[s];
            return e.isHidden ? null : n ? (0, t.jsx)("div", {
                children: l.default.createElement(n, {
                    key: `block-${i}`,
                    ...e,
                    blockIndex: i + 1,
                    blockType: s,
                    blockKey: `${s}-${i}`,
                    ...r
                })
            }, `block-${i}`) : void 0
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
        i = Object.defineProperties,
        s = Object.getOwnPropertyDescriptors,
        n = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        c = Object.prototype.propertyIsEnumerable,
        d = (e, t, l) => t in e ? r(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: l
        }) : e[t] = l;
    let u = (0, t.forwardRef)((e, r) => t.default.createElement(l.default, i(((e, t) => {
        for (var l in t || (t = {})) o.call(t, l) && d(e, l, t[l]);
        if (n)
            for (var l of n(t)) c.call(t, l) && d(e, l, t[l]);
        return e
    })({
        ref: r
    }, e), s({
        weights: a
    }))));
    u.displayName = "Info", e.s(["Info", 0, u], 985904)
}, 401861, 841889, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(722978),
        a = e.i(3931),
        r = e.i(985904),
        i = e.i(146911);
    let s = ({
            title: e,
            text: s,
            action: n,
            truncate: o,
            className: c = "",
            isContained: d,
            dismiss: u
        }) => {
            let f = (0, a.useMemo)(() => `unity-alert-${s?.substring(0,30).replaceAll(" ","_")}`, [s]),
                [m, x] = (0, a.useState)(!0),
                [h, g] = (0, a.useState)(!1);
            return ((0, a.useEffect)(() => {
                localStorage?.getItem(f) && g(!0)
            }, [f]), h) ? null : (0, t.jsx)("div", {
                className: (0, l.clsx)({
                    container: d
                }),
                children: (0, t.jsxs)("div", {
                    className: (0, l.clsx)("dark:bg-blue/10 relative flex w-full flex-col justify-between gap-4 bg-sky-100 py-4 pr-5 pl-11 text-sm text-gray-900 transition-colors sm:flex-row", {
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
                                className: (0, l.clsx)({
                                    "line-clamp-4 sm:line-clamp-2": o?.enabled && m
                                }),
                                children: s
                            }), o?.enabled && (0, t.jsx)("button", {
                                onClick: () => x(!m),
                                className: "text-tiny shadow-underline-sm hover:text-blue hover:shadow-underline focus:text-blue dark:hover:text-blue text-black transition duration-200 dark:text-white",
                                children: m ? o.seeMoreLabel : o.seeLessLabel
                            })]
                        })]
                    }), (n?.href || u?.enabled) && (0, t.jsxs)("div", {
                        className: "sm:auto inline-flex w-fit items-center gap-4 [&>*]:whitespace-nowrap",
                        children: [n && (0, t.jsx)(i.default, {
                            className: "mx-auto mt-0 inline-block whitespace-nowrap",
                            href: n.href,
                            target: n.target || "_self",
                            size: "tiny",
                            underline: !0,
                            children: n.title
                        }), u?.enabled && (0, t.jsx)("button", {
                            onClick: () => {
                                g(!0), localStorage.setItem(f, Date.now().toString())
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
            theme: i,
            truncate: n,
            dismiss: o,
            isContained: c,
            isHidden: d,
            spacing: u
        }) => {
            let f = (0, l.clsx)({
                "pt-10": u?.top
            }, {
                "pb-10": u?.bottom
            }, {
                "dark bg-black": "dark" === i
            });
            return d || !a ? null : (0, t.jsx)("section", {
                className: f,
                children: (0, t.jsx)(s, {
                    title: e,
                    text: a,
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
        l = e.i(447093),
        a = e.i(31588);
    e.s(["useMTBanner", 0, function(e, r = []) {
        var i, s;
        let n, o, c, d, u, f = (0, t.usePathname)(),
            m = (0, l.useLocale)(),
            x = m !== a.defaultLocale ? f.replace(`/${m}`, "") : f;
        return {
            shouldDisplayMTBanner: m !== a.defaultLocale && e?.translationType === "MT" && !r.includes(x),
            updatedBlocks: (i = e.blocks ?? [], s = e.machineTranslationDisclaimer, n = i.reduce((e, t, l) => ["hero", "alternateNavigation", "headliner"].includes(t._type) ? l : e, -1), o = [...i], c = o[n + 1]?._type === "alternateNavigationAnchor" || o[n + 1]?._type === "anchorButton" ? o[n + 2] : o[n + 1], d = c?.theme ?? null, u = {
                _type: "alert",
                text: s?.text,
                isContained: !0,
                spacing: {
                    bottom: !0,
                    top: !0
                },
                ...d && {
                    theme: d
                },
                action: {
                    text: s?.action?.title,
                    fieldLink: {
                        linkReference: {
                            href: {
                                current: `${window.location.origin}${x}`
                            },
                            target: "_self"
                        }
                    }
                }
            }, -1 === n ? o.unshift(u) : o.splice(n + 1, 0, u), o),
            redirectPathName: x
        }
    }], 246916)
}, 239145, (e, t, l) => {
    t.exports = function(e, t) {
        for (var l = -1, a = null == e ? 0 : e.length, r = Array(a); ++l < a;) r[l] = t(e[l], l, e);
        return r
    }
}, 873021, (e, t, l) => {
    var a = e.r(328042),
        r = e.r(239145),
        i = e.r(778116),
        s = e.r(692558),
        n = 1 / 0,
        o = a ? a.prototype : void 0,
        c = o ? o.toString : void 0;
    t.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (i(t)) return r(t, e) + "";
        if (s(t)) return c ? c.call(t) : "";
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
}, 430215, e => {
    "use strict";
    var t = e.i(3931);
    e.s(["default", 0, e => {
        let [l, a] = (0, t.useState)(!1);
        return (0, t.useEffect)(() => {
            let t = window.matchMedia(e);
            t.matches !== l && a(t.matches);
            let r = () => a(t.matches);
            return window.addEventListener("resize", r), () => window.removeEventListener("resize", r)
        }, [l, e]), l
    }])
}, 647562, (e, t, l) => {
    var a = e.r(778116),
        r = e.r(692558),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        s = /^\w*$/;
    t.exports = function(e, t) {
        if (a(e)) return !1;
        var l = typeof e;
        return !!("number" == l || "symbol" == l || "boolean" == l || null == e || r(e)) || s.test(e) || !i.test(e) || null != t && e in Object(t)
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
        i = e.r(150095),
        s = e.r(884942),
        n = e.r(985902);

    function o(e) {
        var t = -1,
            l = null == e ? 0 : e.length;
        for (this.clear(); ++t < l;) {
            var a = e[t];
            this.set(a[0], a[1])
        }
    }
    o.prototype.clear = a, o.prototype.delete = r, o.prototype.get = i, o.prototype.has = s, o.prototype.set = n, t.exports = o
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
        i = e.r(857624),
        s = e.r(219301),
        n = e.r(682947);

    function o(e) {
        var t = -1,
            l = null == e ? 0 : e.length;
        for (this.clear(); ++t < l;) {
            var a = e[t];
            this.set(a[0], a[1])
        }
    }
    o.prototype.clear = a, o.prototype.delete = r, o.prototype.get = i, o.prototype.has = s, o.prototype.set = n, t.exports = o
}, 817416, (e, t, l) => {
    var a = e.r(298435),
        r = e.r(990543),
        i = e.r(764138);
    t.exports = function() {
        this.size = 0, this.__data__ = {
            hash: new a,
            map: new(i || r),
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
        i = e.r(349966),
        s = e.r(649884),
        n = e.r(884711);

    function o(e) {
        var t = -1,
            l = null == e ? 0 : e.length;
        for (this.clear(); ++t < l;) {
            var a = e[t];
            this.set(a[0], a[1])
        }
    }
    o.prototype.clear = a, o.prototype.delete = r, o.prototype.get = i, o.prototype.has = s, o.prototype.set = n, t.exports = o
}, 528535, (e, t, l) => {
    var a = e.r(158774);

    function r(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw TypeError("Expected a function");
        var l = function() {
            var a = arguments,
                r = t ? t.apply(this, a) : a[0],
                i = l.cache;
            if (i.has(r)) return i.get(r);
            var s = e.apply(this, a);
            return l.cache = i.set(r, s) || i, s
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
        i = /\\(\\)?/g;
    t.exports = a(function(e) {
        var t = [];
        return 46 === e.charCodeAt(0) && t.push(""), e.replace(r, function(e, l, a, r) {
            t.push(a ? r.replace(i, "$1") : l || e)
        }), t
    })
}, 6205, (e, t, l) => {
    var a = e.r(778116),
        r = e.r(647562),
        i = e.r(837344),
        s = e.r(553050);
    t.exports = function(e, t) {
        return a(e) ? e : r(e, t) ? [e] : i(s(e))
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
        for (var l = 0, i = t.length; null != e && l < i;) e = e[r(t[l++])];
        return l && l == i ? e : void 0
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
        let i = (0, l.useMemo)(() => ({
            products: e
        }), [e]);
        return (0, t.jsx)(a.Provider, {
            value: i,
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
        i = e.i(544923);
    let s = (e, t) => t?.country ? e?.country?.toLowerCase().localeCompare(t?.country.toLowerCase()) || 0 : -1,
        n = {
            currency: "USD"
        },
        o = e => e?.text !== null && e?.text !== void 0 || (e?.children ? e.children.every(o) : !!Array.isArray(e) && e.every(o));
    e.s(["default", 0, () => {
        let {
            state: e
        } = (0, a.default)(), {
            products: c
        } = (0, r.usePageCommerce)(), [d] = (0, i.default)("location", "US"), u = t => {
            let l = t?.variantPrices.sort(s),
                a = e => l?.find(t => t.currency?.toLowerCase() === e?.currency?.toLowerCase() && (t.country?.toLowerCase() === d?.toLowerCase() || !t.country))?.price;
            return a(e) ? [a(e), !1] : [a(n), !0]
        }, f = e => {
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
        }, m = (e, l) => {
            if (!l || !e) return e;
            let a = f(l);
            return t.default.render(e, a)
        }, x = (e, l) => {
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
        }, h = (e, a) => {
            if (!a || !e) return e;
            let r = e.match(/{{\s*[\w\.-]+\s*}}/g)?.map(e => e?.match(/[\w\.-]+/)?.[0] || "");
            if (void 0 === r) return e;
            let i = f(a);
            return a && r?.every(e => (0, l.default)(i, e)) ? t.default.render(e, i) : null
        }, g = (e, t, l = m) => e?.map(e => {
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
            location: d,
            appendCommerceData: m,
            appendCommerceDataToPortableText: g,
            renderWithAllVariablesToPortableText: (e, t) => {
                let l = g(e, t, h);
                return o(l) ? l : null
            },
            getPrice: u,
            appendCommerceDataForMultipleProducts: x,
            appendPageCommerceData: e => x(e, c),
            appendPageCommerceDataToPortableText: e => g(e, void 0, e => x(e, c))
        }
    }], 326388)
}, 996332, 422664, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(722978),
        a = e.i(655105);
    let r = ({
            size: e = "m",
            url: r,
            alt: i = "profile picture"
        }) => {
            let {
                width: s,
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
            } [e], o = (0, l.default)("inline-block", "rounded-full overflow-hidden relative shrink-0 mr-3 hidden lg:block md:block");
            return (0, t.jsx)("div", {
                className: o,
                children: (0, t.jsx)(a.default, {
                    src: r,
                    alt: i,
                    width: s,
                    height: n
                })
            })
        },
        i = ({
            avatar: e,
            name: a,
            company: i,
            role: s,
            size: n = "m"
        }) => {
            let o = (0, l.default)("text-gray-900 dark:text-gray-100 pb-1", {
                    "loco-caption-lg-semibold": "m" === n,
                    "loco-caption-sm-semibold": "s" === n || "xs" === n || "xxs" === n
                }),
                c = (0, l.default)("text-gray-700 dark:text-gray-300 tracking-normal", {
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
                        className: o,
                        children: [a?.toUpperCase(), " ", i && a && "/" || "", " ", i?.toUpperCase()]
                    }), (0, t.jsx)("span", {
                        className: c,
                        children: s
                    })]
                })]
            })
        };
    e.s(["default", 0, i], 422664);
    let s = ({
        content: e,
        author: a,
        className: r = "",
        textClassName: s = ""
    }) => {
        let n = (0, l.default)("p-6 rounded-xl", r),
            o = (0, l.default)("mb-6 text-gray-800 dark:text-gray-200", s);
        return (0, t.jsxs)("div", {
            className: n,
            children: [(0, t.jsx)("div", {
                className: o,
                children: e
            }), (0, t.jsx)(i, {
                ...a
            })]
        })
    };
    e.s(["default", 0, ({
        title: e,
        testimonials: a,
        layout: r = "one-layout",
        testimonialVariant: i = "default",
        className: n = ""
    }) => {
        let o = (0, l.default)({
                "one-layout": "col-span-12",
                "two-layout": "col-span-12 md:col-span-6 flex",
                "three-layout": "col-span-12 md:col-span-6 lg:col-span-4 flex"
            } [r]),
            c = (0, l.default)("one-layout" !== r && "flex flex-col justify-between w-full", {
                "bg-gray-100 dark:bg-gray-900": "default" === i
            }, {
                "border border-gray-200 dark:border-gray-700": "outlined" === i && !e
            }),
            d = (0, l.default)({
                "auto-rows-fr": "one-layout" !== r
            }, "grid grid-cols-12 gap-4", n),
            u = (0, l.default)("container py-0 md:py-16", {
                "bg-gray-100 dark:bg-gray-900 rounded-2xl": e,
                "border border-gray-200 dark:border-gray-700 bg-transparent": "outlined" === i && e
            }),
            f = (0, l.default)({
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
                children: a?.map((e, l) => {
                    let {
                        content: a,
                        author: r,
                        _key: i
                    } = e;
                    return (0, t.jsx)("div", {
                        className: o,
                        children: (0, t.jsx)(s, {
                            content: a,
                            author: r,
                            className: c,
                            textClassName: f
                        })
                    }, `${i}-${l}`)
                })
            })]
        })
    }], 996332)
}, 787213, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(996332);
    e.s(["default", 0, ({
        title: e,
        layout: a,
        testimonialVariant: r,
        testimonials: i,
        theme: s,
        hideAuthorImage: n,
        isHidden: o
    }) => {
        let c = i?.map((e, t) => ({
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
                className: "dark" === s ? "dark" : "",
                children: (0, t.jsx)("div", {
                    className: "dark:bg-gray-900",
                    children: (0, t.jsx)(l.default, {
                        testimonials: c,
                        title: e,
                        layout: "two-layout" === a ? "two-layout" : "three-layout" === a ? "three-layout" : "one-layout",
                        testimonialVariant: "outlined" === r ? "outlined" : "default"
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
        isHidden: i,
        verticalHeadingClass: s,
        productCatalogItems: n,
        htmlTableContent: o
    }) => {
        let {
            appendCommerceDataForMultipleProducts: c
        } = (0, r.default)(), d = (0, l.useCallback)(e => {
            let t = c(e, n);
            return t || e
        }, [n, c]), u = (0, l.useMemo)(() => {
            let e = o.rows.map(e => (e.cells = e.cells.map(e => d(e)), e));
            return {
                ...o,
                rows: e
            }
        }, [o, d]);
        return (0, t.jsx)(t.Fragment, {
            children: !i && (0, t.jsx)("section", {
                className: "dark" === e ? "dark" : "",
                children: (0, t.jsx)("div", {
                    className: "mx-auto max-w-7xl p-6 dark:bg-black",
                    children: (0, t.jsx)(a.default, {
                        verticalHeadingClass: s || "",
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
            listStyle: i = "check"
        }) => {
            let s = (0, l.default)("loco-text-body [&_h4]:mb-0", {
                "checkmark-list-green": "check" === i,
                "plus-list": "plus" === i
            });
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("div", {
                    className: "loco-caption-sm-semibold mb-2 text-gray-700 dark:text-gray-300",
                    children: e
                }), (0, t.jsx)(a.default, {
                    className: s,
                    children: r
                })]
            })
        },
        i = ({
            title: e = "",
            descriptions: l = [],
            treshold: a,
            pricing: i
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
                    title: i?.title || "",
                    content: i?.content || ""
                })
            })]
        }),
        s = ({
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
                            children: (0, t.jsx)(i, {
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
    }) => e ? null : (0, t.jsx)(s, {
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
        let i = (0, l.clsx)({
            default: "bg-white dark:bg-gray-900 rounded-xl",
            padded: "p-6 bg-white dark:bg-gray-900 rounded-xl",
            transparent: ""
        } [r], a);
        return (0, t.jsx)("div", {
            className: i,
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
        i = e.i(481392),
        s = e.i(828083),
        n = e.i(783078);
    let o = (0, s.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        c = ({
            containerRef: e,
            lqip: a
        }) => {
            let r = (0, l.useRef)(null),
                i = (0, l.useRef)(null),
                s = "pointer-events-none absolute inset-0 hidden h-full w-full opacity-80 blur-2xl lg:block [will-change:filter]";
            return ((0, l.useEffect)(() => {
                let t, l = r.current,
                    a = e.current;
                if (!l || !a) return;
                let s = l.getContext("2d");
                if (!s) return;
                let n = a.querySelector("video"),
                    o = () => {
                        n && a.contains(n) || (n = a.querySelector("video"));
                        let e = n,
                            l = i.current;
                        if (e) {
                            e.crossOrigin || (e.crossOrigin = "anonymous");
                            try {
                                s.drawImage(e, 0, 0, 32, 32), l && (l.style.transform = `scale(${1.01+1e-6*Math.random()})`)
                            } catch {}
                        }
                        t = requestAnimationFrame(o)
                    };
                return t = requestAnimationFrame(o), () => cancelAnimationFrame(t)
            }, [e, a]), a) ? (0, t.jsx)("div", {
                className: s,
                style: {
                    backgroundImage: `url(${a})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transform: "scale(1.05)"
                },
                "aria-hidden": "true"
            }) : (0, t.jsx)("div", {
                ref: i,
                className: s,
                "aria-hidden": "true",
                children: (0, t.jsx)("canvas", {
                    ref: r,
                    width: 32,
                    height: 32,
                    className: "h-full w-full"
                })
            })
        };
    var d = e.i(185462),
        u = e.i(224601);
    let f = ({
        children: e,
        className: l = "",
        size: i = "default",
        variant: s = "default",
        image: n,
        keyFigures: o
    }) => {
        let c = (0, r.clsx)("relative grid grid-cols-12", l, {
                dark: !!n
            }),
            u = (0, r.clsx)("relative col-span-12 mx-auto lg:container", {
                "lg:py-32 lg:pb-10": "gdc2026" !== s && "default" === i,
                "lg:py-16 lg:pb-5": "gdc2026" !== s && "slim" === i,
                "py-0 lg:py-20 max-w-[82rem]": "gdc2026" === s
            }),
            f = (0, r.clsx)({
                "flex flex-col lg:flex-row-reverse": "gdc2026" !== s,
                "grid grid-cols-12 gap-6": "gdc2026" === s
            });
        return (0, t.jsxs)("section", {
            className: c,
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
                    className: f,
                    children: e
                }), o && o.length > 0 && (0, t.jsx)("div", {
                    className: "mx-6 lg:mx-0",
                    children: (0, t.jsx)(d.default, {
                        keyFigures: o,
                        nested: !0
                    })
                })]
            })]
        })
    };
    f.Actions = ({
        children: e,
        variant: l = "default"
    }) => (0, t.jsx)("div", {
        className: "gdc2026" === l ? "flex flex-col items-center lg:items-start gap-3 pb-3.5 lg:pb-16 lg:flex-row" : "flex flex-col items-start gap-3 pb-3.5 xl:flex-row",
        children: e
    }), f.AlternateActions = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "loco-text-body-sm flex flex-row items-center gap-2 pl-10 text-gray-600 md:pl-8",
        children: e
    }), f.Body = ({
        children: e,
        variant: l = "default"
    }) => (0, t.jsx)("div", {
        className: "gdc2026" === l ? "loco-text-body-lg" : "loco-text-body-lg mb-6",
        children: e
    }), f.Content = ({
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
    }, f.Overline = ({
        children: e,
        className: l
    }) => {
        let a = (0, r.default)("loco-caption-lg-semibold mb-3 text-gray-500 dark:text-gray-300", l);
        return (0, t.jsx)("div", {
            className: a,
            children: e
        })
    }, f.Title = ({
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
    }, f.Pricing = ({
        data: e = [],
        onSelectionChange: a,
        selectedKey: r
    }) => {
        let s = (0, l.useMemo)(() => e.find(e => e.key === r), [e, r]);
        return (0, l.useEffect)(() => {
            let t = !r || !s,
                l = e?.[0]?.key;
            t && a && l && a(l)
        }, [e, r, a, s]), (0, t.jsx)(t.Fragment, {
            children: !!e.length && (0, t.jsx)("div", {
                className: "mb-6 flex",
                children: (0, t.jsxs)("div", {
                    children: [(0, t.jsxs)("div", {
                        className: "mb-2",
                        children: [(0, t.jsx)("span", {
                            className: "loco-text-heading-xs mr-1 font-semibold",
                            children: s?.price
                        }), (0, t.jsx)("span", {
                            className: "loco-text-body-sm",
                            children: s?.suffixPrice
                        })]
                    }), e.length > 1 && (0, t.jsx)(i.default, {
                        selectedKey: r,
                        onSelectionChange: a,
                        children: e.map(({
                            key: e,
                            label: l
                        }) => (0, t.jsx)(i.default.Item, {
                            children: l
                        }, e))
                    })]
                })
            })
        })
    }, f.Media = ({
        media: e,
        className: i = "",
        variant: s = "default"
    }) => {
        let {
            image: d,
            video: u
        } = e || {}, [f, m] = (0, l.useState)(!1), x = (0, l.useRef)(null), h = "gdc2026" === s ? "object-cover" : "object-contain", g = (0, r.default)("relative flex grow", {
            "m-4 h-full": "gdc2026" !== s,
            "w-full h-[22rem] lg:h-full lg:w-auto lg:m-4": "gdc2026" === s
        }, i), p = (0, r.default)("relative h-full w-full overflow-hidden", {
            "rounded-3xl": "gdc2026" !== s,
            "lg:rounded-3xl": "gdc2026" === s
        }), v = (0, r.default)("flex items-center", {
            "flex-1 justify-center lg:justify-start": "gdc2026" !== s,
            "w-full col-span-12 lg:col-span-8 justify-center order-1 lg:order-2": "gdc2026" === s
        }), b = (e, l) => d?.asset.url ? (0, t.jsx)(a.default, {
            src: d.asset.url,
            alt: e,
            fill: !0,
            className: (0, r.default)("absolute h-full", h, l),
            sizes: `(min-width: ${n.default.Large}px) 33vw, (min-width: ${n.default.Medium}px) 50vw, 100vw`,
            placeholder: d.asset.metadata?.lqip ? "blur" : "empty",
            blurDataURL: d.asset.metadata?.lqip || void 0
        }) : null;
        return (0, t.jsx)("div", {
            className: v,
            children: (d || u) && (0, t.jsxs)("div", {
                className: g,
                children: [(0, t.jsx)(c, {
                    containerRef: x,
                    lqip: f ? void 0 : d?.asset?.metadata?.lqip
                }), (0, t.jsxs)("div", {
                    ref: x,
                    className: p,
                    children: [d?.asset.url && !u && b("Hero image", void 0), u && d?.asset.url && !f && b("Video thumbnail", "z-10"), u && (0, t.jsx)("div", {
                        className: "h-full w-full self-center",
                        children: (0, t.jsx)(o, {
                            url: u?.muxHLSURL || "",
                            playing: !0,
                            loop: !0,
                            muted: !0,
                            playsinline: !0,
                            width: "100%",
                            height: "100%",
                            className: (0, r.default)("absolute top-0 h-full", {
                                "[&>video]:object-cover": "gdc2026" === s,
                                "[&>video]:object-contain": "gdc2026" !== s
                            }),
                            onReady: () => m(!0),
                            onBuffer: () => m(!1),
                            onBufferEnd: () => m(!0)
                        })
                    })]
                })]
            })
        })
    }, f.YouTubeVideo = ({
        className: e,
        title: l,
        url: a,
        autoplay: i,
        blockedMessage: s,
        consentButtonLabel: n
    }) => {
        let o = (0, r.default)("relative flex grow md:h-auto md:content-center md:mx-8 md:rounded-3xl md:overflow-hidden", e);
        return a && l ? (0, t.jsx)("div", {
            className: "flex flex-1",
            children: (0, t.jsx)("div", {
                className: o,
                children: (0, t.jsx)(u.default, {
                    autoplay: i,
                    title: l,
                    url: a,
                    blockedMessage: s,
                    consentButtonLabel: n
                })
            })
        }) : null
    }, e.s(["default", 0, f], 447533);
    var m = e.i(749583),
        x = e.i(278466),
        h = e.i(115219);
    let g = ({
        linkText: e,
        separatorText: l,
        actionLinks: a
    }) => {
        let r = window.navigator.userAgent,
            i = null;
        if (-1 !== r.indexOf("Win") ? i = "windows" : -1 !== r.indexOf("Mac") ? i = "mac" : -1 !== r.indexOf("Linux") && (i = "linux"), !i) return null;
        let s = [];
        if (a && a.length > 0)
            for (let e of a) e.os.toLowerCase() !== i.toLowerCase() && s.push({
                label: e.os,
                url: e.href
            });
        return a ? (0, t.jsxs)("div", {
            className: "loco-text-body-sm flex flex-row items-center gap-2 pl-10 text-gray-600 md:pl-8",
            children: [e, " ", s.map((e, a) => (0, t.jsxs)("span", {
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
        y = e.i(447093);
    e.s(["default", 0, ({
        eyebrow: e,
        title: a,
        description: r,
        actions: i = [],
        media: s,
        backgroundImage: n,
        size: o,
        variant: c,
        keyFigures: d,
        theme: u,
        youtubeVideo: j,
        isHidden: k,
        showAlterativeOSLinks: w,
        alternativeOSLinkSettings: N
    }) => {
        let _, L = -1 !== (_ = window.navigator.userAgent).indexOf("Win") ? "Windows" : -1 !== _.indexOf("Mac") ? "Mac" : -1 !== _.indexOf("Linux") ? "Linux" : "Unknown",
            R = (0, l.useRef)(null),
            {
                state: C
            } = (0, p.default)(),
            M = (0, y.useLocale)(),
            $ = {
                ...C,
                locale: (0, b.default)(M)
            },
            {
                mapFormActions: A
            } = (0, h.useFormModal)(i),
            T = (0, l.useMemo)(() => A(i) || [], [i, A]),
            S = n?.asset?.url ? {
                src: n.asset.url,
                alt: "Hero background image"
            } : void 0,
            F = (0, l.useMemo)(() => (d?.data ?? []).map(e => e?.value?.text ? {
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
            }), [d]);
        (0, l.useEffect)(() => {
            if (!R.current) {
                let e = document.createElement("a");
                e.style.display = "none", document.body.appendChild(e), R.current = e
            }
            return () => {
                R.current && document.body.contains(R.current) && document.body.removeChild(R.current)
            }
        }, []);
        let P = c ?? void 0,
            z = (e, a, r) => {
                let i = a?.form;
                if (!i) return null;
                let s = {
                    ...i.form,
                    ...i.webinarFormParametersContent,
                    extraFields: i.extraFields
                };
                return (0, t.jsx)(l.default.Fragment, {
                    children: i.renderModal({
                        label: e.title,
                        form: s
                    })
                }, `hero-action-form-${e.title}-${r}`)
            },
            I = e => {
                let t = e.link?.linkReference?.href?.current,
                    l = t ? (0, v.default)(t, $, e.extendLink) : t,
                    a = e.secondaryLink?.linkReference?.href?.current,
                    r = e.link?.linkReference?.target || "_self",
                    i = x.locales.find(e => window.location.pathname === `/${e}` || window.location.pathname.startsWith(`/${e}/`)) ?? "en";
                l && (l.endsWith(".exe") || l.endsWith(".dmg") ? R.current && (R.current.href = l, R.current.download = "", R.current.target = r, R.current.click()) : "_blank" === r ? window.open(l, "_blank") : window.location.href = l), a && setTimeout(() => {
                    let e = a.replace(/^\//, "");
                    window.location.href = `/${i}/${e}`
                }, 1e3), e?.callback && e.callback()
            },
            B = i?.filter(e => !e.operatingSystem || e.operatingSystem === L) || [],
            O = i?.filter(e => !!e.operatingSystem && "Unknown" !== e.operatingSystem) || [];
        return (0, t.jsx)(t.Fragment, {
            children: !k && (0, t.jsx)("section", {
                className: "dark" === u ? "dark" : "",
                children: (0, t.jsx)("div", {
                    className: "dark:bg-black",
                    children: (0, t.jsxs)(f, {
                        image: S,
                        size: "slim" === o ? "slim" : "default" === o ? "default" : void 0,
                        variant: P,
                        keyFigures: F,
                        children: [s && (0, t.jsx)(f.Media, {
                            media: s,
                            variant: P
                        }), !s && j && (0, t.jsx)(f.YouTubeVideo, {
                            autoplay: !0,
                            url: j?.url,
                            title: j?.title,
                            blockedMessage: j?.consent?.blockedMessage,
                            consentButtonLabel: j?.consent?.consentButtonLabel || ""
                        }), (0, t.jsxs)(f.Content, {
                            variant: P,
                            children: [(0, t.jsx)(f.Overline, {
                                children: e
                            }), (0, t.jsx)(f.Title, {
                                variant: P,
                                children: a
                            }), (0, t.jsx)(f.Body, {
                                variant: P,
                                children: r
                            }), (0, t.jsx)("div", {
                                className: "xl:hidden",
                                children: (0, t.jsx)(f.Actions, {
                                    variant: P,
                                    children: B.map((e, a) => {
                                        let r = T[a],
                                            i = e.link?.linkReference?.href?.current || "",
                                            s = (0, v.default)(i, $, e.extendLink);
                                        e.link?.linkReference?.target;
                                        let n = 0 === a,
                                            o = i.endsWith(".exe") || i.endsWith(".dmg"),
                                            c = !!e.secondaryLink?.linkReference?.href?.current,
                                            d = s && !o && !c;
                                        return r?.form ? z(e, r, a) : (0, t.jsxs)(l.default.Fragment, {
                                            children: [n && (0, t.jsx)(m.default, {
                                                size: "medium",
                                                variant: e.buttonType,
                                                rounded: !0,
                                                ...d && {
                                                    href: s
                                                },
                                                onPress: () => I(e),
                                                hasArrow: !0,
                                                "data-link-location": "HeroBlock",
                                                "data-link-id": `HeroBlock-action-${a}`,
                                                children: e.title
                                            }), n && w && (0, t.jsx)(g, {
                                                linkText: N?.linkText ?? "Download for",
                                                separatorText: N?.separatorText ?? "or",
                                                actionLinks: O.map(e => ({
                                                    os: e.operatingSystem,
                                                    href: e.link?.linkReference?.href?.current || "#"
                                                }))
                                            }), !n && (0, t.jsx)("div", {
                                                className: "ml-1 flex flex-col gap-4",
                                                children: (0, t.jsx)(m.default, {
                                                    size: "medium",
                                                    variant: e.buttonType,
                                                    rounded: !0,
                                                    ...d && {
                                                        href: s
                                                    },
                                                    onPress: () => I(e),
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
                                children: [(0, t.jsx)(f.Actions, {
                                    variant: P,
                                    children: B.map((e, l) => {
                                        let a = T[l],
                                            r = e.link?.linkReference?.href?.current || "",
                                            i = (0, v.default)(r, $, e.extendLink);
                                        e.link?.linkReference?.target;
                                        let s = r.endsWith(".exe") || r.endsWith(".dmg"),
                                            n = !!e.secondaryLink?.linkReference?.href?.current,
                                            o = i && !s && !n;
                                        return a?.form ? z(e, a, l) : (0, t.jsx)(m.default, {
                                            size: "medium",
                                            variant: e.buttonType,
                                            rounded: !0,
                                            ...o && {
                                                href: i
                                            },
                                            onPress: () => I(e),
                                            hasArrow: !0,
                                            "data-link-location": "HeroBlock",
                                            "data-link-id": `HeroBlock-action-${l}`,
                                            children: e.title
                                        }, e.link?.linkReference?.title || l)
                                    })
                                }), w && B[0] && (0, t.jsx)(g, {
                                    linkText: N?.linkText ?? "Download for",
                                    separatorText: N?.separatorText ?? "or",
                                    actionLinks: O.map(e => ({
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
        i = e.i(722978);
    let s = ({
            overline: e,
            variant: l = "default"
        }) => {
            let a = "products" === l;
            return (0, t.jsx)("div", {
                className: (0, i.default)("loco-caption-lg-semibold mb-2 lg:mb-3", {
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
        o = ({
            body: e,
            variant: l = "default"
        }) => (0, t.jsx)("div", {
            className: (0, i.default)("loco-text-body-lg mb-6 lg:mb-12", {
                "md:w-2/3": "products" === l
            }),
            children: e
        });
    var c = e.i(749583);
    let d = ({
            actions: e,
            variant: a = "default"
        }) => {
            let r = "products" === a;
            return (0, t.jsx)("div", {
                className: "flex flex-col flex-wrap items-start justify-start gap-y-4 md:flex-row md:gap-2",
                children: e.map((e, a) => e.renderModal ? (0, t.jsx)(l.default.Fragment, {
                    children: e.renderModal()
                }, a) : (0, t.jsx)(c.default, {
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
            actions: c,
            image: u,
            className: f,
            variant: m = "default"
        }) => {
            let x = (0, i.default)("container relative grid col-span-12 py-8 lg:py-12 px-4 lg:px-16 rounded-xl overflow-hidden", {
                    dark: !!u
                }, f),
                h = "products" === m;
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
                            className: (0, i.default)("scale-105 object-cover", {
                                blur: !h
                            })
                        }), (0, t.jsxs)("div", {
                            className: x,
                            children: [(0, t.jsx)(s, {
                                overline: e,
                                variant: m
                            }), (0, t.jsx)(n, {
                                title: l
                            }), (0, t.jsx)(o, {
                                body: a,
                                variant: m
                            }), (0, t.jsx)(d, {
                                actions: c,
                                variant: m
                            })]
                        })]
                    })
                })
            })
        };
    var f = e.i(829150),
        m = e.i(433519),
        x = e.i(775041),
        h = e.i(115219);
    e.s(["default", 0, ({
        overline: e,
        title: r,
        body: i,
        actions: s,
        image: n,
        theme: o,
        isHidden: c,
        variant: d,
        productCatalogItem: g,
        productCategoryFilter: p
    }) => {
        let [v] = (0, l.useContext)(x.FiltersContext), {
            state: b
        } = (0, m.default)(), y = {
            ...b,
            product: g?.productKey,
            variant: null
        }, {
            renderModal: j,
            extraFields: k
        } = (0, h.useFormModal)(s), w = (0, l.useMemo)(() => s ? s.map(e => (e => {
            if (!e) return null;
            let t = !!e.form,
                l = e.link?.linkReference?.href?.current,
                a = t ? "" : l ? (0, f.default)(l, y, e.extendLink) : "";
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
                    renderModal: () => j({
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
        })(e)).filter(e => !!e) : [], [s, y, j, k]), {
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
            children: !c && L && (0, t.jsx)("section", {
                className: "dark" === o ? "dark" : "",
                children: (0, t.jsx)(u, {
                    overline: e,
                    title: r || "",
                    body: (0, t.jsx)(a.PortableText, {
                        value: i
                    }),
                    actions: w,
                    image: R,
                    variant: d
                })
            })
        })
    }], 32382)
}, 529363, 989873, e => {
    "use strict";
    var t = e.i(175602);
    let l = (e, t, l) => (((1 - 3 * l + 3 * t) * e + (3 * l - 6 * t)) * e + 3 * t) * e;

    function a(e, a, r, i) {
        return e === a && r === i ? t.noop : t => 0 === t || 1 === t ? t : l(function(e, t, a, r, i) {
            let s, n, o = 0;
            do(s = l(n = t + (a - t) / 2, r, i) - e) > 0 ? a = n : t = n; while (Math.abs(s) > 1e-7 && ++o < 12) return n
        }(t, 0, 1, e, r), a, i)
    }
    e.s(["cubicBezier", 0, a], 989873);
    let r = a(.42, 0, 1, 1),
        i = a(0, 0, .58, 1),
        s = a(.42, 0, .58, 1);
    e.s(["easeIn", 0, r, "easeInOut", 0, s, "easeOut", 0, i], 529363)
}, 164163, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(722978),
        a = e.i(655105),
        r = e.i(825610),
        i = e.i(749583),
        s = e.i(596889),
        n = e.i(805518);
    e.s(["default", 0, ({
        title: e,
        cards: o,
        layout: c = "four-cards",
        cardVariant: d = "default",
        scroll: u = !1,
        cardsHeading: f
    }) => {
        let m = f || (e ? "h3" : "h2"),
            x = (0, l.clsx)("gap-4 md:gap-8", {
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
                    className: x,
                    children: o?.map((o, f) => {
                        let x = (0, l.clsx)("flex flex-wrap flex-row", !u && ({
                                "two-cards": "col-span-12 md:col-span-6 [&>div>.card-img]:h-72",
                                "three-cards": "col-span-12 md:col-span-6 lg:col-span-4 [&>div>.card-img]:h-44",
                                "four-cards": "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 [&>div>.card-img]:h-36"
                            })[c], u && ({
                                "two-cards": "mb-6 min-w-[35rem] [&>div>.card-img]:h-72",
                                "three-cards": "mb-6 min-w-[22rem] [&>div>.card-img]:h-44",
                                "four-cards": "mb-6 min-w-[16rem] [&>div>.card-img]:h-36"
                            })[c]),
                            h = (0, l.clsx)("place-self-end", {
                                "px-6 pb-6": "default" === d || "transparent" === d
                            }),
                            g = (0, l.clsx)({
                                "p-6": "default" === d || "transparent" === d,
                                "py-6": "padded" === d
                            }),
                            p = (0, l.clsx)("object-cover", {
                                "rounded-t-xl": "default" === d || "transparent" === d,
                                rounded: "padded" === d
                            }),
                            v = (0, l.clsx)("caption-xs mt-1 text-right text-gray-400", {
                                "mr-1": "padded" !== d
                            });
                        return (0, t.jsxs)(s.default, {
                            className: x,
                            variant: d,
                            children: [(0, t.jsxs)(s.default.Content, {
                                children: [o.image && o.image.src && (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsx)(s.default.Image, {
                                        withinContainer: o.image.withinContainer,
                                        children: (0, t.jsx)(a.default, {
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
                                        children: (0, t.jsx)(a.default, {
                                            src: o.icon.src ?? "",
                                            alt: o.icon.alt ?? "",
                                            quality: 100,
                                            width: 23,
                                            height: 23
                                        })
                                    }), (0, t.jsx)(m, {
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
                                className: h,
                                children: o.actions.map((e, l) => (0, t.jsx)(i.default, {
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
                        }, `card-${f}-${e}`)
                    })
                })]
            })
        })
    }], 164163)
}, 14452, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(722978);
    e.s(["default", 0, ({
        children: e,
        className: a = "",
        tag: r = "div"
    }) => {
        let i = (0, l.default)("loco-text-heading-sm mb-4", a);
        return (0, t.jsx)(r, {
            className: i,
            children: e
        })
    }], 14452)
}, 447452, 667900, 2062, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(3931),
        a = e.i(722978),
        r = e.i(655105),
        i = e.i(825610),
        s = e.i(387660);
    let n = ({
        children: e,
        tag: l = "div",
        className: r = ""
    }) => {
        let i = (0, a.default)("loco-caption-lg-semibold mb-4", r);
        return (0, t.jsx)(l, {
            className: i,
            children: e
        })
    };
    e.s(["default", 0, n], 667900);
    var o = e.i(749583);
    let c = ({
        children: e,
        className: l = "",
        orientation: r = "horizontal"
    }) => {
        let i = (0, a.default)("flex gap-2 flex-wrap", {
            "flex-col items-start": "vertical" === r
        }, l);
        return (0, t.jsx)("div", {
            className: i,
            children: e
        })
    };
    e.s(["default", 0, c], 2062);
    var d = e.i(14452),
        u = e.i(805518),
        f = e.i(526826),
        m = e.i(766930);
    let x = ({
        features: e,
        transitionTime: a = 8500
    }) => {
        let [r, i] = (0, l.useState)(0), s = (0, l.useRef)(null), n = (0, l.useRef)(null), [c, d] = (0, l.useState)(!1), [u, x] = (0, l.useState)(!1), h = (0, l.useRef)(null);
        (0, l.useEffect)(() => {
            e.forEach(e => {
                e.icon && (new window.Image().src = e.icon, new window.Image().src = e.icon)
            })
        }, [e]), (0, l.useEffect)(() => {
            let e = new IntersectionObserver(([e]) => {
                d(e.intersectionRatio >= .8)
            }, {
                threshold: [0, .8, 1]
            });
            return n.current && e.observe(n.current), () => e.disconnect()
        }, []), (0, l.useEffect)(() => (s.current && clearTimeout(s.current), c && !u && (s.current = setTimeout(() => {
            i(t => (t + 1) % e.length)
        }, a)), () => {
            s.current && clearTimeout(s.current)
        }), [r, e.length, a, c, u]);
        let g = (0, l.useCallback)(t => {
                let l = t === r;
                i(t), x(!0);
                let s = e[t];
                s?.onCardClick && setTimeout(() => {
                    s.onCardClick?.(l)
                }, 0), h.current && clearTimeout(h.current), h.current = setTimeout(() => {
                    x(!1)
                }, a)
            }, [r, e, a]),
            p = (0, l.useCallback)((e, t) => {
                ("Enter" === e.key || " " === e.key) && (e.preventDefault(), g(t))
            }, [g]);
        return (0, l.useEffect)(() => () => {
            h.current && clearTimeout(h.current)
        }, []), (0, t.jsx)(m.default, {
            children: (0, t.jsx)("div", {
                ref: n,
                className: "relative inline-flex w-full flex-col items-start justify-start gap-2 self-stretch px-5 pb-6 md:px-5 md:pb-6 lg:px-0 lg:pb-0 xl:px-20",
                children: e.map((e, l) => {
                    let a = l === r;
                    return (0, t.jsxs)("div", {
                        "data-mobile": "true",
                        "data-show-image": a ? "true" : "false",
                        "data-state": a ? "selected" : "inactive",
                        role: "button",
                        tabIndex: 0,
                        className: `cursor-pointer self-stretch overflow-hidden rounded-lg bg-white ${a?`${e.icon?"lg:pl-36":"lg:pl-10"} p-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04),0px_2px_12px_3px_rgba(0,0,0,0.04)] lg:py-8 lg:pr-10`:"p-6 lg:px-10 lg:py-6"} flex lg:inline-flex lg:items-start ${a?"flex-col":"items-center"} relative justify-start gap-2 transition-all duration-500 ease-out`,
                        onClick: () => g(l),
                        onKeyDown: e => p(e, l),
                        children: [e.icon && a && (0, t.jsx)(f.m.div, {
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
                        }), e.icon && a && (0, t.jsx)(f.m.div, {
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
                            children: [a && (0, t.jsx)(f.m.div, {
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
                                children: (0, t.jsx)(f.m.div, {
                                    animate: {
                                        color: a ? "#000000" : "#374151"
                                    },
                                    transition: {
                                        type: "spring",
                                        duration: .3,
                                        bounce: .1
                                    },
                                    className: "flex-1 justify-center text-base leading-tight font-medium md:text-[20px] md:leading-[24px]",
                                    children: e.title || "Untitled"
                                })
                            }), a && (0, t.jsx)(f.m.div, {
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
                            }), a && (0, t.jsx)(f.m.div, {
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
                    }, l)
                })
            })
        })
    };
    var h = e.i(783078),
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
        aspectRatio: f,
        backgroundImage: m = !1,
        description: y,
        eyebrow: w,
        image: N,
        mediaPosition: _ = "right",
        size: L = "default",
        title: R,
        youtubeVideo: C,
        brandfolderVideo: M,
        videoInline: $ = !1,
        buttonLabel: A = "Play Video",
        blockKey: T,
        blockedMessage: S,
        consentButtonLabel: F,
        featureList: P,
        variant: z = "default"
    }) => {
        let I = (0, g.default)(`(max-width: ${h.default.Large}px)`),
            B = (0, l.useRef)(null),
            [O, E] = (0, l.useState)(!1),
            U = (0, v.useInView)(B, {
                once: !0
            }),
            D = (0, b.useReducedMotion)(),
            V = (0, l.useRef)({
                total: 0,
                progress: 0
            }),
            Z = P && P.length > 0,
            q = !Z && C?.url;
        (0, l.useEffect)(() => {
            $ || E(!1)
        }, [U]);
        let H = () => {
                E(!0)
            },
            W = (0, a.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": O && !D && U && M?.src
            }),
            K = (0, a.default)("relative", {
                "py-10 lg:py-24": "gdc2026" === z,
                "lg:py-14": Z,
                "lg:py-24": !Z && "default" === L && (!f || "16:9" === f) && "gdc2026" !== z,
                "lg:py-80": !Z && "large" === L && (!f || "16:9" === f),
                "lg:py-40": !Z && "large" === L && "1:1" === f,
                "dark bg-gray-900 overflow-hidden": m,
                "bg-gray-100 dark:bg-black": !m && Z,
                "bg-white dark:bg-black": !m && !Z
            }),
            G = (0, a.default)("grid grid-flow-row grid-cols-12 place-items-center gap-4", {
                "p-4": "gdc2026" === z,
                "lg:grid-flow-col": !0,
                "lg:container": !f || "16:9" === f
            }),
            Y = (0, a.default)("font-nohemi! text-gray-900 dark:text-gray-100 whitespace-pre-line", {
                "loco-text-heading-md!": "gdc2026" === z
            }),
            J = (0, a.default)("relative w-full rounded-lg", {
                "aspect-square": "1:1" === f,
                "aspect-video": "16:9" === f,
                "overflow-hidden": !C?.url
            }),
            Q = (0, a.default)("relative col-span-12 flex h-full flex-col w-full items-center lg:items-start", {
                "lg:col-span-8": "gdc2026" === z,
                "lg:col-span-6": "gdc2026" !== z,
                "lg:col-start-1": "left" === _,
                "lg:col-start-5": "right" === _ && "gdc2026" === z,
                "lg:col-start-7": "right" === _ && "gdc2026" !== z,
                "order-first": !Z || !I,
                "order-last": Z && I
            }),
            X = (0, a.default)("relative col-span-12 px-5 text-center lg:pb-0 lg:text-left", {
                "lg:col-span-4": "gdc2026" === z,
                "lg:col-span-5": "gdc2026" !== z,
                "pb-6": !(Z && I),
                "py-6": Z && I,
                "lg:col-start-9": "left" === _ && "gdc2026" === z,
                "lg:col-start-8": "left" === _ && "gdc2026" !== z && (!f || "16:9" === f),
                "lg:col-start-1": "right" === _ && (!f || "16:9" === f),
                "lg:col-start-2": "right" === _ && "1:1" === f,
                "order-first": Z && I
            }),
            ee = e => {
                let t = V.current.progress / V.current.total * 100 || 0;
                (0, s.pushVideoEvent)({
                    name: e,
                    videoDuration: V.current.total,
                    videoProgress: Number(t)
                })
            };
        return (0, t.jsxs)("section", {
            className: K,
            children: [m && (0, t.jsx)(r.default, {
                src: N.src,
                alt: N.alt,
                fill: !0,
                className: "blur-2xl brightness-[0.2]"
            }), (0, t.jsxs)("div", {
                className: G,
                ref: B,
                children: [Z ? (0, t.jsx)("div", {
                    className: Q,
                    children: (0, t.jsx)(x, {
                        features: P
                    })
                }) : q ? (0, t.jsx)("div", {
                    className: Q,
                    children: (0, t.jsx)("div", {
                        className: J,
                        children: (0, t.jsx)(p.default, {
                            url: C?.url || "",
                            title: C?.title ?? "",
                            blockedMessage: S,
                            consentButtonLabel: F
                        })
                    })
                }) : (0, t.jsxs)("div", {
                    className: Q,
                    children: [(0, t.jsxs)("div", {
                        className: J,
                        children: [U && !D && M?.src && (0, t.jsx)(k, {
                            url: M.src,
                            playing: O,
                            loop: !!$,
                            muted: $,
                            playsinline: $,
                            width: "100%",
                            height: "100%",
                            onDuration: e => V.current.total = e,
                            onProgress: e => {
                                V.current.progress = 10 * e.played
                            },
                            className: "absolute top-0 left-0 [&>video]:object-cover",
                            onReady: () => {
                                $ && E(!0)
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
                                "data-link-location": T || i.trackingLocation.fullWidthBlockAction,
                                "data-link-id": `${T||i.trackingLocation.fullWidthBlockAction}-video-play`
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
                    className: X,
                    children: [w && (0, t.jsx)(n, {
                        className: "text-gray-900 dark:text-gray-100",
                        children: w
                    }), (0, t.jsx)(d.default, {
                        tag: "h2",
                        className: Y,
                        children: R
                    }), (0, t.jsx)(u.default, {
                        className: "mb-10 text-gray-900 dark:text-gray-100",
                        children: y
                    }), (0, t.jsx)(c, {
                        className: "justify-center lg:justify-normal",
                        children: e.length > 0 && e.map((e, l) => (0, t.jsx)(o.default, {
                            variant: 0 === l ? "primary" : "secondary",
                            outlined: 0 === l,
                            size: I ? "small" : "medium",
                            rounded: !0,
                            hasArrow: !0,
                            href: e.href,
                            target: e.target,
                            "data-link-location": T ?? i.trackingLocation.fullWidthBlockAction,
                            "data-link-id": `${T??i.trackingLocation.fullWidthBlockAction}-action-${l}`,
                            children: e.label
                        }, `full-width-block-action-${l}`))
                    })]
                })]
            })]
        })
    }], 447452)
}, 649042, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(3931),
        a = e.i(722990),
        r = e.i(447452),
        i = e.i(775041),
        s = e.i(779712),
        n = e.i(869324);
    e.s(["default", 0, ({
        actions: e,
        backgroundImage: o,
        description: c,
        eyebrow: d,
        image: u,
        mediaAspectRatio: f,
        mediaPosition: m,
        size: x,
        variant: h,
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
        let [R] = (0, l.useContext)(i.FiltersContext);
        if (R.categories && R.categories.length > 0 && 1 === R.categories.findIndex(({
                _id: e
            }) => e === R.selectedCategory) && null != R.selectedSubcategory) return null;
        let {
            subcategories: C,
            productCatalogItems: M
        } = R.categories.find(({
            _id: e
        }) => e === R.selectedCategory) || {}, $ = null != R.selectedSubcategory ? (C || []).find(({
            _id: e
        }) => e === R.selectedSubcategory) : null, A = !L || L.categories?.find(e => e._id === R.selectedCategory) != null && (null == $ || !L.subcategories || L.subcategories.some(({
            _id: e
        }) => e === R.selectedSubcategory)), T = e?.map(({
            title: e,
            link: t
        }) => {
            let l = t?.linkReference?.target === "_blank" ? "_blank" : "_self";
            return {
                label: e,
                href: t?.linkReference?.href.current || "/",
                target: l
            }
        }), S = _?.map((e, t) => {
            let l;
            return {
                eyebrow: e.eyebrow || "",
                title: e.title || "",
                description: e.description || "",
                action: e.action ? (l = e.action.link?.linkReference?.target === "_blank" ? "_blank" : "_self", {
                    label: e.action.title || "",
                    href: e.action.link?.linkReference?.href.current || "#",
                    target: l
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
                    actions: T,
                    aspectRatio: "16:9" === f ? "16:9" : "1:1" === f ? "1:1" : void 0,
                    backgroundImage: o,
                    description: (0, t.jsx)(a.PortableText, {
                        value: c
                    }),
                    eyebrow: d,
                    image: {
                        src: (0, s.urlForImage)(u?.file?.asset?.url || "")?.auto("format")?.url() || "",
                        placeholder: u?.file?.asset.metadata?.lqip || "",
                        alt: u?.alt || "",
                        caption: u?.caption || ""
                    },
                    mediaPosition: "right" === m ? "right" : "left" === m ? "left" : void 0,
                    size: "large" === x ? "large" : "default" === x ? "default" : void 0,
                    variant: "gdc2026" === h ? "gdc2026" : "default" === h ? "default" : void 0,
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
                    featureList: S
                })
            })
        })
    }], 649042)
}, 449758, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(3931),
        a = e.i(722990),
        r = e.i(164163),
        i = e.i(326388);
    e.s(["default", 0, ({
        title: e,
        layout: s,
        cardVariant: n,
        scroll: o,
        theme: c,
        cardsHeading: d,
        cards: u,
        isHidden: f
    }) => {
        let {
            appendCommerceData: m,
            appendCommerceDataToPortableText: x,
            currency: h
        } = (0, i.default)(), g = (0, l.useMemo)(() => u?.map(e => ({
            type: e._type,
            title: m(e.title, e.productCatalogItem) || "",
            description: m(e.description, e.productCatalogItem) || "",
            richText: (0, t.jsx)(a.PortableText, {
                value: x(e.richText, e.productCatalogItem)
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
        })), [u, m, x]);
        return (0, t.jsx)(t.Fragment, {
            children: !f && (0, t.jsx)("section", {
                className: `${"dark"===c?"dark":""} overflow-hidden`,
                children: (0, t.jsx)(r.default, {
                    layout: "two-cards" === s || "three-cards" === s || "four-cards" === s ? s : "four-cards",
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
        l = e.i(722978),
        a = e.i(153348),
        r = e.i(955429),
        i = e.i(828083),
        s = e.i(655105),
        n = e.i(3931),
        o = e.i(998569),
        c = e.i(278466);
    let d = (0, i.default)(() => e.A(410979), {
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
            let [i, s] = (0, n.useState)(!1);
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
                            children: (0, t.jsx)(o.default, {
                                direction: "right",
                                ariaLabel: r.label,
                                variant: "secondary",
                                isForcedHover: i,
                                tag: "span"
                            })
                        })]
                    })]
                }), (0, t.jsx)(c.Link, {
                    className: "absolute top-0 left-0 z-10 h-full w-full",
                    href: r.href,
                    title: r.label,
                    onMouseOver: () => {
                        s(!0)
                    },
                    onMouseLeave: () => {
                        s(!1)
                    }
                })]
            })
        },
        f = ({
            image: e,
            video: i
        }) => {
            let o = (0, n.useRef)(null),
                [c, u] = (0, n.useState)(!1),
                f = (0, a.useInView)(o),
                m = (0, r.useReducedMotion)(),
                x = (0, l.default)("absolute cover z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": c && !m && f && i.src
                });
            return (0, t.jsxs)("div", {
                className: "relative aspect-video overflow-hidden rounded-2xl",
                ref: o,
                children: [(0, t.jsx)(s.default, {
                    src: e.src,
                    placeholder: "blur",
                    blurDataURL: e.placeholder,
                    fill: !0,
                    alt: e.alt ?? "",
                    className: x
                }), f && !m && i.src && (0, t.jsx)(d, {
                    url: i.src,
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
        m = ({
            image: e,
            video: i
        }) => {
            let o = (0, n.useRef)(null),
                [c, u] = (0, n.useState)(!1),
                f = (0, a.useInView)(o),
                m = (0, r.useReducedMotion)(),
                x = (0, l.default)("absolute cover z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": c && !m && f && i.src
                });
            return (0, t.jsxs)("div", {
                className: "pointer-events-none absolute top-0 left-0 h-full w-full object-cover opacity-30",
                ref: o,
                children: [(0, t.jsx)(s.default, {
                    src: e.src,
                    placeholder: "blur",
                    blurDataURL: e.placeholder,
                    fill: !0,
                    alt: e.alt ?? "",
                    className: x
                }), f && !m && i.src && (0, t.jsx)(d, {
                    url: i.src,
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
        x = ({
            tagline: e,
            visual: a,
            background: r,
            benefits: i = [],
            theme: s
        }) => {
            let n = (0, l.default)("relative bg-gray-100 px-4 pb-10 pt-8 lg:px-8 lg:pt-44", {
                "dark bg-gray-900": !s || "dark" === s
            });
            return (0, t.jsxs)("div", {
                className: n,
                children: [r && (0, t.jsx)(m, {
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
                        children: (0, t.jsx)(f, {
                            ...a
                        })
                    }), i && (0, t.jsx)("div", {
                        className: "col-start-1 col-end-13 row-start-3 mt-14 md:mt-[10rem] lg:col-start-5 lg:col-end-13",
                        children: (0, t.jsx)("div", {
                            className: "lg:grid lg:grid-cols-8 lg:gap-2",
                            children: (0, t.jsx)("div", {
                                className: "lg:col-start-1 lg:col-end-9",
                                children: i.map((e, l) => (0, t.jsx)(u, {
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
        isHidden: i,
        theme: s
    }) => (0, t.jsx)(t.Fragment, {
        children: !i && (0, t.jsx)(x, {
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
            theme: "dark" === s ? "dark" : "light"
        })
    })], 81636);
    var h = e.i(749583);
    let g = (0, i.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        p = ({
            title: e,
            description: i,
            image: o,
            video: c,
            actions: d
        }) => {
            let u = (0, n.useRef)(null),
                [f, m] = (0, n.useState)(!1),
                x = (0, a.useInView)(u, {
                    once: !0
                }),
                p = (0, r.useReducedMotion)(),
                v = (0, l.default)("z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": f && !p && x && c.src
                });
            return (0, t.jsx)("section", {
                className: "dark bg-gray-900",
                children: (0, t.jsxs)("div", {
                    ref: u,
                    className: "relative box-border flex min-h-screen flex-col items-center justify-center p-5",
                    children: [o && o.src && (0, t.jsx)(s.default, {
                        fill: !0,
                        alt: o.alt ?? "",
                        src: o.src,
                        className: v
                    }), x && !p && c.src && (0, t.jsx)(g, {
                        url: c.src,
                        playing: !0,
                        loop: !0,
                        muted: !0,
                        playsinline: !0,
                        width: "100%",
                        height: "100%",
                        className: "absolute top-0 left-0 brightness-50 [&>video]:object-cover",
                        onReady: () => {
                            m(!0)
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
                        }), i && (0, t.jsx)("div", {
                            className: "loco-text-body-lg mt-2 opacity-70",
                            children: i
                        }), d && (0, t.jsxs)("div", {
                            className: "mt-6 flex justify-center gap-4",
                            children: [" ", d.map((e, l) => {
                                if (e.link) return (0, t.jsx)(h.default, {
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
        actions: i,
        isHidden: s
    }) => {
        let {
            mapFormActions: n
        } = (0, v.useFormModal)(i), o = n(i);
        return (0, t.jsx)(t.Fragment, {
            children: !s && (0, t.jsx)(p, {
                title: e,
                description: l,
                image: {
                    src: a?.asset.url || "",
                    placeholder: a?.asset.metadata.lqip || ""
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
    let k = (0, i.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        w = ({
            slide: e,
            index: r,
            isActive: i,
            preferReducedMotion: o,
            isVisuallyActive: c,
            clickCallback: d,
            blurredBackground: u
        }) => {
            let f = (0, n.useRef)(null),
                [m, x] = (0, n.useState)(!1),
                h = (0, a.useInView)(f, {
                    once: !0
                }),
                g = (0, l.default)("relative aspect-video overflow-hidden rounded-2xl duration-500", {
                    "opacity-30": !c && !i
                }),
                p = (0, l.default)("absolute h-full w-full transition-opacity duration-500 z-[-1]"),
                v = (0, l.default)("absolute h-full w-full transition-opacity duration-500", {
                    "opacity-0": m && i && !o && h && e.video.src,
                    "object-contain": u
                });
            return (0, t.jsxs)("div", {
                className: g,
                ref: f,
                onClick: () => {
                    !i && d && d()
                },
                children: [e.mention && (0, t.jsx)("div", {
                    className: "absolute bottom-0 left-0 z-10 p-3 opacity-70",
                    children: e.mention
                }), e.image && e.image.src && !u ? (0, t.jsx)(s.default, {
                    src: e.image.src,
                    placeholder: "blur",
                    blurDataURL: e.image.placeholder,
                    fill: !0,
                    alt: e.image.alt,
                    className: v
                }) : (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(s.default, {
                        src: e.image.placeholder,
                        placeholder: "blur",
                        blurDataURL: e.image.placeholder,
                        fill: !0,
                        alt: e.image.alt,
                        className: p
                    }), (0, t.jsx)(s.default, {
                        src: e.image.src,
                        placeholder: "blur",
                        blurDataURL: e.image.placeholder,
                        fill: !0,
                        alt: e.image.alt,
                        className: v
                    })]
                }), h && !o && i && e.video.src && (0, t.jsx)(k, {
                    url: e.video.src,
                    playing: !0,
                    loop: !0,
                    muted: !0,
                    playsinline: !0,
                    width: "100%",
                    height: "100%",
                    className: "[&>video]:object-cover",
                    onReady: () => {
                        x(!0)
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
            blurredBackground: i
        }) => {
            let [s, c] = (0, n.useState)(void 0), [d, u] = (0, n.useState)(void 0), [f, m] = (0, n.useState)(1), [x, g] = (0, n.useState)(0), [p, v] = (0, n.useState)(0), b = (0, n.useRef)(null), k = (0, n.useRef)(null), N = (0, n.useRef)(null), _ = (0, r.useReducedMotion)();
            (0, n.useEffect)(() => {
                k.current && N.current && (c(k.current), u(N.current))
            }, [k, N]);
            let L = (0, n.useCallback)((e, t) => {
                    m(t + 1), v(t)
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
                $ = {
                    dots: !1,
                    infinite: !0,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: !1
                },
                A = (0, n.useMemo)(() => a.map((e, l) => (0, t.jsx)("div", {
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
                            children: (0, t.jsx)(h.default, {
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
                    isActive: x === l,
                    isVisuallyActive: p === l,
                    preferReducedMotion: _,
                    clickCallback: M,
                    blurredBackground: i
                }, l)), [a, x, p, _, M]);
            return (0, t.jsx)("section", {
                className: "dark bg-black py-12",
                children: (0, t.jsxs)("div", {
                    className: "container md:max-w-none lg:pr-0",
                    children: [e && (0, t.jsx)(j.default, {
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
                                        children: (0, t.jsx)(y.default, {
                                            ...$,
                                            asNavFor: s,
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
                                children: `${f<10?"0":""}${f} / ${a.length<10?"0":""}${a.length}`
                            }), (0, t.jsx)(y.default, {
                                className: "carousel-text-visual_text mt-4 lg:mt-0",
                                ...$,
                                draggable: !1,
                                asNavFor: d,
                                beforeChange: L,
                                afterChange: R,
                                fade: !0,
                                ref: k,
                                children: A
                            }), a.length > 1 && (0, t.jsxs)("div", {
                                className: "absolute bottom-0 left-3 flex gap-2",
                                children: [(0, t.jsx)(o.default, {
                                    direction: "left",
                                    onPress: C,
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
        title: l,
        action: a,
        slides: r,
        slidesBlog: i,
        slidesActionLabel: s = "View Post",
        isHidden: n
    }) => {
        let o = e => {
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
                        title: s,
                        href: e?.pageUrl?.link?.href?.current || "",
                        target: "_self"
                    } : null
                }
            },
            c = r?.map(o) || [],
            d = i?.map(o) || [],
            u = c.length > 0 ? c : d.length > 0 ? d : [];
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
        a = e.i(278466),
        r = e.i(722978);
    let i = ({
        logos: e
    }) => (0, t.jsx)("div", {
        className: "container my-8",
        children: (0, t.jsx)("div", {
            className: "grid w-full grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5",
            children: e?.map((e, i) => {
                let s = (0, r.default)("rounded bg-gray-100 p-4  md:p-8", {
                    "hover:bg-white transition-all ease-in-out duration-1000": e?.action?.href
                });
                return (0, t.jsxs)("div", {
                    children: [!e.action?.href && (0, t.jsx)("div", {
                        className: s,
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
                            className: s,
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
                }, `logos-bank-logo-${i}`)
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
            children: !l && (0, t.jsx)(i, {
                logos: a
            })
        })
    }], 314669)
}, 583877, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(447093),
        a = e.i(722978),
        r = e.i(3931);
    let i = () => (0, t.jsx)("svg", {
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
        s = () => (0, t.jsx)("svg", {
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
            footer: o
        }) => {
            let [c, d] = (0, r.useState)(a);
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
                            children: l
                        })]
                    }), (0, t.jsx)("div", {
                        children: c ? (0, t.jsx)(s, {}) : (0, t.jsx)(i, {})
                    })]
                }), (0, t.jsxs)("div", {
                    className: "flex flex-col px-6 pb-6 md:ml-[19rem]",
                    children: [n?.map(e => {
                        let {
                            title: l,
                            startTime: a,
                            endTime: r
                        } = e, i = r ? `${a} - ${r}` : a;
                        return (0, t.jsxs)("div", {
                            className: "flex flex-col gap-2 pt-6 first:mt-4 first:border-t first:border-gray-300 sm:flex-row dark:first:border-gray-700",
                            children: [i && (0, t.jsx)("div", {
                                className: "loco-text-body-sm w-36 shrink-0 text-gray-600 dark:text-gray-400",
                                children: i
                            }), l && (0, t.jsx)("div", {
                                className: "loco-text-body-md text-black dark:text-white",
                                children: l
                            })]
                        }, `agenda-event-${l}-${a}`)
                    }), (0, t.jsx)("div", {
                        className: "loco-text-body-sm pt-6 text-gray-600 italic dark:text-gray-400",
                        children: o
                    })]
                })]
            })
        },
        o = ({
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
        let i = (0, l.useLocale)();
        return a ? null : (0, t.jsx)(o, {
            theme: "dark" === e ? "dark" : "light",
            agendaCards: r?.map(e => ({
                date: e?.date ? new Intl.DateTimeFormat(i, {
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC"
                }).format(new Date(e.date)) : "",
                dayOfWeek: e?.date ? new Intl.DateTimeFormat(i, {
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
        i = e.i(192207),
        s = e.i(526826),
        n = e.i(3931),
        o = e.i(722978),
        c = e.i(828083),
        d = e.i(655105),
        u = e.i(783078),
        f = e.i(749583),
        m = e.i(186114),
        x = e.i(430215),
        h = e.i(195051),
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
            let R = (0, x.default)(`(min-width: ${u.default.Medium}px)`),
                C = (0, n.useRef)(null),
                [M, $] = (0, n.useState)(!1),
                A = (0, l.useInView)(C),
                T = (0, a.useReducedMotion)(),
                S = null;
            "youtube" === g ? S = (0, c.default)(() => e.A(269100), {
                loadableGenerated: {
                    modules: [346003]
                },
                ssr: !1
            }) : "brandfolder" === g && (S = (0, c.default)(() => e.A(410979), {
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
            }), z = (0, i.useTransform)(P, [0, 1], ["60%", "100%"]), I = (0, i.useTransform)(P, [0, 1], [1.75, 1]), B = (0, i.useTransform)(P, [0, 1], ["brightness(50%)", "brightness(100%)"]), O = () => {
                k && "brandfolder" === g && $(!0)
            }, E = () => {
                $(!0)
            }, U = (0, o.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": M && !T && A && j?.src
            });
            return (0, t.jsxs)("div", {
                ref: C,
                className: "flex flex-col gap-4 border-t border-gray-300 p-6 md:flex-row dark:border-gray-800 dark:bg-black [&_.consent]:md:justify-start [&_.consent>div.text]:md:w-11/12",
                children: [R && (0, t.jsx)("div", {
                    className: "md:w-[50%]",
                    children: (0, t.jsxs)(s.m.div, {
                        style: {
                            width: z,
                            filter: B
                        },
                        className: "relative aspect-video overflow-hidden rounded-lg",
                        children: [(0, t.jsxs)(s.m.div, {
                            style: {
                                scale: I
                            },
                            className: "relative h-full w-full",
                            children: [j && (0, t.jsx)(t.Fragment, {
                                children: A && !T && j?.src && S && (0, t.jsx)(S, {
                                    url: j.src,
                                    playing: M,
                                    loop: k && "brandfolder" === g,
                                    muted: k && "brandfolder" === g,
                                    playsinline: k && "brandfolder" === g,
                                    width: "100%",
                                    height: "100%",
                                    className: "[&>video]:object-cover",
                                    onReady: O,
                                    onPlay: E,
                                    controls: !k || "brandfolder" !== g,
                                    config: F
                                })
                            }), y && (0, t.jsxs)("div", {
                                className: U,
                                onClick: E,
                                children: [j?.src && (!k || "brandfolder" !== g) && (0, t.jsx)(m.default, {
                                    handleIsPlaying: E,
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
                        }), j?.src?.includes("youtube.com") && (0, t.jsx)(h.default, {
                            blockedMessage: N,
                            consentButtonLabel: _
                        })]
                    })
                }), !R && (0, t.jsxs)("div", {
                    className: "relative aspect-video overflow-hidden rounded-lg md:hidden",
                    children: [(0, t.jsxs)("div", {
                        className: "relative h-full w-full",
                        children: [j && (0, t.jsx)(t.Fragment, {
                            children: A && !T && j?.src && S && (0, t.jsx)(S, {
                                url: j.src,
                                playing: M,
                                loop: k && "brandfolder" === g,
                                muted: k && "brandfolder" === g,
                                playsinline: k && "brandfolder" === g,
                                width: "100%",
                                height: "100%",
                                className: "[&>video]:object-cover",
                                onReady: O,
                                onPlay: E,
                                controls: !k && "brandfolder" !== g,
                                config: F
                            })
                        }), y && (0, t.jsxs)("div", {
                            className: U,
                            onClick: E,
                            children: [j?.src && (!k || "brandfolder" !== g) && (0, t.jsx)(m.default, {
                                handleIsPlaying: E,
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
                    }), j?.src?.includes("youtube.com") && (0, t.jsx)(h.default, {
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
                            children: (0, t.jsx)(f.default, {
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
                i = (0, o.default)("w-full", {
                    dark: "dark" === e
                });
            return (0, t.jsx)(g.default, {
                children: (0, t.jsx)("div", {
                    ref: r,
                    className: i,
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
        let i = l?.map(b);
        return (0, t.jsx)(t.Fragment, {
            children: !a && (0, t.jsx)(v, {
                theme: "dark" === e ? "dark" : "light",
                features: i,
                featuresHeading: "h2" === r || "h4" === r ? r : "h3"
            })
        })
    }], 277965)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d6832a6b-09b5-5554-866a-db12946b85bd")
    } catch (e) {}
}();
//# debugId=d6832a6b-09b5-5554-866a-db12946b85bd