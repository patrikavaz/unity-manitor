(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 480880, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(3931);
    e.s(["default", 0, ({
        blocks: e,
        blockMap: n,
        ...o
    }) => (0, t.jsx)(t.Fragment, {
        children: e?.map((e, i) => {
            let a = e?._type,
                l = n[a];
            return e.isHidden ? null : l ? (0, t.jsx)("div", {
                children: r.default.createElement(l, {
                    key: `block-${i}`,
                    ...e,
                    blockIndex: i + 1,
                    blockType: a,
                    blockKey: `${a}-${i}`,
                    ...o
                })
            }, `block-${i}`) : void 0
        })
    })])
}, 239145, (e, t, r) => {
    t.exports = function(e, t) {
        for (var r = -1, n = null == e ? 0 : e.length, o = Array(n); ++r < n;) o[r] = t(e[r], r, e);
        return o
    }
}, 873021, (e, t, r) => {
    var n = e.r(328042),
        o = e.r(239145),
        i = e.r(778116),
        a = e.r(692558),
        l = 1 / 0,
        s = n ? n.prototype : void 0,
        u = s ? s.toString : void 0;
    t.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (i(t)) return o(t, e) + "";
        if (a(t)) return u ? u.call(t) : "";
        var r = t + "";
        return "0" == r && 1 / t == -l ? "-0" : r
    }
}, 553050, (e, t, r) => {
    var n = e.r(873021);
    t.exports = function(e) {
        return null == e ? "" : n(e)
    }
}, 343346, (e, t, r) => {
    t.exports = function(e, t) {
        return e === t || e != e && t != t
    }
}, 430215, e => {
    "use strict";
    var t = e.i(3931);
    e.s(["default", 0, e => {
        let [r, n] = (0, t.useState)(!1);
        return (0, t.useEffect)(() => {
            let t = window.matchMedia(e);
            t.matches !== r && n(t.matches);
            let o = () => n(t.matches);
            return window.addEventListener("resize", o), () => window.removeEventListener("resize", o)
        }, [r, e]), r
    }])
}, 647562, (e, t, r) => {
    var n = e.r(778116),
        o = e.r(692558),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
    t.exports = function(e, t) {
        if (n(e)) return !1;
        var r = typeof e;
        return !!("number" == r || "symbol" == r || "boolean" == r || null == e || o(e)) || a.test(e) || !i.test(e) || null != t && e in Object(t)
    }
}, 977902, (e, t, r) => {
    t.exports = e.r(581511)(Object, "create")
}, 708867, (e, t, r) => {
    var n = e.r(977902);
    t.exports = function() {
        this.__data__ = n ? n(null) : {}, this.size = 0
    }
}, 447265, (e, t, r) => {
    t.exports = function(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= !!t, t
    }
}, 150095, (e, t, r) => {
    var n = e.r(977902),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        var t = this.__data__;
        if (n) {
            var r = t[e];
            return "__lodash_hash_undefined__" === r ? void 0 : r
        }
        return o.call(t, e) ? t[e] : void 0
    }
}, 884942, (e, t, r) => {
    var n = e.r(977902),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        var t = this.__data__;
        return n ? void 0 !== t[e] : o.call(t, e)
    }
}, 985902, (e, t, r) => {
    var n = e.r(977902);
    t.exports = function(e, t) {
        var r = this.__data__;
        return this.size += +!this.has(e), r[e] = n && void 0 === t ? "__lodash_hash_undefined__" : t, this
    }
}, 298435, (e, t, r) => {
    var n = e.r(708867),
        o = e.r(447265),
        i = e.r(150095),
        a = e.r(884942),
        l = e.r(985902);

    function s(e) {
        var t = -1,
            r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    s.prototype.clear = n, s.prototype.delete = o, s.prototype.get = i, s.prototype.has = a, s.prototype.set = l, t.exports = s
}, 765776, (e, t, r) => {
    t.exports = function() {
        this.__data__ = [], this.size = 0
    }
}, 641664, (e, t, r) => {
    var n = e.r(343346);
    t.exports = function(e, t) {
        for (var r = e.length; r--;)
            if (n(e[r][0], t)) return r;
        return -1
    }
}, 915386, (e, t, r) => {
    var n = e.r(641664),
        o = Array.prototype.splice;
    t.exports = function(e) {
        var t = this.__data__,
            r = n(t, e);
        return !(r < 0) && (r == t.length - 1 ? t.pop() : o.call(t, r, 1), --this.size, !0)
    }
}, 857624, (e, t, r) => {
    var n = e.r(641664);
    t.exports = function(e) {
        var t = this.__data__,
            r = n(t, e);
        return r < 0 ? void 0 : t[r][1]
    }
}, 219301, (e, t, r) => {
    var n = e.r(641664);
    t.exports = function(e) {
        return n(this.__data__, e) > -1
    }
}, 682947, (e, t, r) => {
    var n = e.r(641664);
    t.exports = function(e, t) {
        var r = this.__data__,
            o = n(r, e);
        return o < 0 ? (++this.size, r.push([e, t])) : r[o][1] = t, this
    }
}, 990543, (e, t, r) => {
    var n = e.r(765776),
        o = e.r(915386),
        i = e.r(857624),
        a = e.r(219301),
        l = e.r(682947);

    function s(e) {
        var t = -1,
            r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    s.prototype.clear = n, s.prototype.delete = o, s.prototype.get = i, s.prototype.has = a, s.prototype.set = l, t.exports = s
}, 817416, (e, t, r) => {
    var n = e.r(298435),
        o = e.r(990543),
        i = e.r(764138);
    t.exports = function() {
        this.size = 0, this.__data__ = {
            hash: new n,
            map: new(i || o),
            string: new n
        }
    }
}, 365867, (e, t, r) => {
    t.exports = function(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    }
}, 476501, (e, t, r) => {
    var n = e.r(365867);
    t.exports = function(e, t) {
        var r = e.__data__;
        return n(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
    }
}, 792520, (e, t, r) => {
    var n = e.r(476501);
    t.exports = function(e) {
        var t = n(this, e).delete(e);
        return this.size -= !!t, t
    }
}, 349966, (e, t, r) => {
    var n = e.r(476501);
    t.exports = function(e) {
        return n(this, e).get(e)
    }
}, 649884, (e, t, r) => {
    var n = e.r(476501);
    t.exports = function(e) {
        return n(this, e).has(e)
    }
}, 884711, (e, t, r) => {
    var n = e.r(476501);
    t.exports = function(e, t) {
        var r = n(this, e),
            o = r.size;
        return r.set(e, t), this.size += +(r.size != o), this
    }
}, 158774, (e, t, r) => {
    var n = e.r(817416),
        o = e.r(792520),
        i = e.r(349966),
        a = e.r(649884),
        l = e.r(884711);

    function s(e) {
        var t = -1,
            r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    s.prototype.clear = n, s.prototype.delete = o, s.prototype.get = i, s.prototype.has = a, s.prototype.set = l, t.exports = s
}, 528535, (e, t, r) => {
    var n = e.r(158774);

    function o(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw TypeError("Expected a function");
        var r = function() {
            var n = arguments,
                o = t ? t.apply(this, n) : n[0],
                i = r.cache;
            if (i.has(o)) return i.get(o);
            var a = e.apply(this, n);
            return r.cache = i.set(o, a) || i, a
        };
        return r.cache = new(o.Cache || n), r
    }
    o.Cache = n, t.exports = o
}, 593613, (e, t, r) => {
    var n = e.r(528535);
    t.exports = function(e) {
        var t = n(e, function(e) {
                return 500 === r.size && r.clear(), e
            }),
            r = t.cache;
        return t
    }
}, 837344, (e, t, r) => {
    var n = e.r(593613),
        o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g;
    t.exports = n(function(e) {
        var t = [];
        return 46 === e.charCodeAt(0) && t.push(""), e.replace(o, function(e, r, n, o) {
            t.push(n ? o.replace(i, "$1") : r || e)
        }), t
    })
}, 6205, (e, t, r) => {
    var n = e.r(778116),
        o = e.r(647562),
        i = e.r(837344),
        a = e.r(553050);
    t.exports = function(e, t) {
        return n(e) ? e : o(e, t) ? [e] : i(a(e))
    }
}, 812232, (e, t, r) => {
    var n = e.r(692558),
        o = 1 / 0;
    t.exports = function(e) {
        if ("string" == typeof e || n(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -o ? "-0" : t
    }
}, 555902, (e, t, r) => {
    var n = e.r(6205),
        o = e.r(812232);
    t.exports = function(e, t) {
        t = n(t, e);
        for (var r = 0, i = t.length; null != e && r < i;) e = e[o(t[r++])];
        return r && r == i ? e : void 0
    }
}, 375194, (e, t, r) => {
    var n = e.r(555902);
    t.exports = function(e, t, r) {
        var o = null == e ? void 0 : n(e, t);
        return void 0 === o ? r : o
    }
}, 326388, e => {
    "use strict";
    var t = e.i(955592),
        r = e.i(375194),
        n = e.i(433519),
        o = e.i(544923);
    let i = (e, t) => t?.country ? e?.country?.toLowerCase().localeCompare(t?.country.toLowerCase()) || 0 : -1,
        a = {
            currency: "USD"
        },
        l = e => e?.text !== null && e?.text !== void 0 || (e?.children ? e.children.every(l) : !!Array.isArray(e) && e.every(l));
    e.s(["default", 0, () => {
        let {
            state: e
        } = (0, n.default)(), [s] = (0, o.default)("location", "US"), u = t => {
            let r = t?.variantPrices.sort(i),
                n = e => r?.find(t => t.currency?.toLowerCase() === e?.currency?.toLowerCase() && (t.country?.toLowerCase() === s?.toLowerCase() || !t.country))?.price;
            return n(e) ? [n(e), !1] : [n(a), !0]
        }, c = e => {
            if (!e) return {};
            let {
                productVariants: t,
                productKey: r
            } = e, n = {
                productKey: null
            };
            return t?.forEach(e => {
                let [t] = u(e);
                e?.productVariantName && (n[e.productVariantName] = {
                    price: t
                })
            }), n
        }, f = (e, r) => {
            if (!r || !e) return e;
            let n = c(r);
            return t.default.render(e, n)
        }, d = (e, n) => {
            if (!n || !e) return e;
            let o = e.match(/{{\s*[\w\.-]+\s*}}/g)?.map(e => e?.match(/[\w\.-]+/)?.[0] || "");
            if (void 0 === o) return e;
            let i = c(n);
            return n && o?.every(e => (0, r.default)(i, e)) ? t.default.render(e, i) : null
        }, p = (e, t, r = f) => e?.map(e => {
            if (e?._type === "block") return {
                ...e,
                children: p(e.children, t, r)
            };
            if (e?._type !== "span") return e;
            {
                let n = r(e.text, t);
                return {
                    ...e,
                    text: n
                }
            }
        });
        return {
            currency: e.currency,
            location: s,
            appendCommerceData: f,
            appendCommerceDataToPortableText: p,
            renderWithAllVariablesToPortableText: (e, t) => {
                let r = p(e, t, d);
                return l(r) ? r : null
            },
            getPrice: u,
            appendCommerceDataForMultipleProducts: (e, r) => {
                let n;
                if (!r || !e) return e;
                let o = (n = {
                    productKey: null
                }, r.forEach(e => {
                    if (!e) return {};
                    let {
                        productVariants: t
                    } = e;
                    t?.forEach(e => {
                        let [t] = u(e);
                        e?.productVariantName && (n[e.productVariantName] = {
                            price: t
                        })
                    })
                }), n);
                return t.default.render(e, o)
            }
        }
    }], 326388)
}, 376936, 997413, 192207, e => {
    "use strict";
    let t, r;
    var n = e.i(134026),
        o = e.i(348367),
        i = e.i(3931),
        a = e.i(175602),
        l = e.i(347248);

    function s(e, t) {
        let r, n = () => {
            let {
                currentTime: n
            } = t, o = (null === n ? 0 : n.value) / 100;
            r !== o && e(o), r = o
        };
        return l.frame.preUpdate(n, !0), () => (0, l.cancelFrame)(n)
    }
    var u = e.i(815965),
        c = e.i(361979),
        f = e.i(369710);
    let d = new WeakMap,
        p = (e, t, r) => (n, o) => o && o[0] ? o[0][e + "Size"] : (0, c.isSVGElement)(n) && "getBBox" in n ? n.getBBox()[t] : n[r],
        h = p("inline", "width", "offsetWidth"),
        g = p("block", "height", "offsetHeight");

    function m({
        target: e,
        borderBoxSize: t
    }) {
        d.get(e)?.forEach(r => {
            r(e, {
                get width() {
                    return h(e, t)
                },
                get height() {
                    return g(e, t)
                }
            })
        })
    }

    function v(e) {
        e.forEach(m)
    }
    let y = new Set;
    var x = e.i(747113),
        b = e.i(795153);
    let w = () => ({
            current: 0,
            offset: [],
            progress: 0,
            scrollLength: 0,
            targetOffset: 0,
            targetLength: 0,
            containerLength: 0,
            velocity: 0
        }),
        _ = {
            x: {
                length: "Width",
                position: "Left"
            },
            y: {
                length: "Height",
                position: "Top"
            }
        };

    function E(e, t, r, n) {
        let o = r[t],
            {
                length: i,
                position: a
            } = _[t],
            l = o.current,
            s = r.time;
        o.current = e[`scroll${a}`], o.scrollLength = e[`scroll${i}`] - e[`client${i}`], o.offset.length = 0, o.offset[0] = 0, o.offset[1] = o.scrollLength, o.progress = (0, x.progress)(0, o.scrollLength, o.current);
        let u = n - s;
        o.velocity = u > 50 ? 0 : (0, b.velocityPerSecond)(o.current - l, u)
    }
    e.i(788727);
    var L = e.i(279126),
        j = e.i(668617),
        z = e.i(483032),
        C = e.i(812064);
    let k = {
        start: 0,
        center: .5,
        end: 1
    };

    function N(e, t, r = 0) {
        let n = 0;
        if (e in k && (e = k[e]), "string" == typeof e) {
            let t = parseFloat(e);
            e.endsWith("px") ? n = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? n = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? n = t / 100 * document.documentElement.clientHeight : e = t
        }
        return "number" == typeof e && (n = t * e), r + n
    }
    let O = [0, 0],
        S = [
            [0, 0],
            [1, 1]
        ],
        M = {
            x: 0,
            y: 0
        },
        W = new WeakMap,
        T = new WeakMap,
        V = new WeakMap,
        A = e => e === document.scrollingElement ? window : e;

    function $(e, {
        container: n = document.scrollingElement,
        ...o
    } = {}) {
        if (!n) return a.noop;
        let i = V.get(n);
        i || (i = new Set, V.set(n, i));
        let s = function(e, t, r, n = {}) {
            return {
                measure: t => {
                    ! function(e, t = e, r) {
                        if (r.x.targetOffset = 0, r.y.targetOffset = 0, t !== e) {
                            let n = t;
                            for (; n && n !== e;) r.x.targetOffset += n.offsetLeft, r.y.targetOffset += n.offsetTop, n = n.offsetParent
                        }
                        r.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, r.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, r.x.containerLength = e.clientWidth, r.y.containerLength = e.clientHeight
                    }(e, n.target, r), E(e, "x", r, t), E(e, "y", r, t), r.time = t, (n.offset || n.target) && function(e, t, r) {
                        let {
                            offset: n = S
                        } = r, {
                            target: o = e,
                            axis: i = "y"
                        } = r, a = "y" === i ? "height" : "width", l = o !== e ? function(e, t) {
                            let r = {
                                    x: 0,
                                    y: 0
                                },
                                n = e;
                            for (; n && n !== t;)
                                if ((0, C.isHTMLElement)(n)) r.x += n.offsetLeft, r.y += n.offsetTop, n = n.offsetParent;
                                else if ("svg" === n.tagName) {
                                let e = n.getBoundingClientRect(),
                                    t = (n = n.parentElement).getBoundingClientRect();
                                r.x += e.left - t.left, r.y += e.top - t.top
                            } else if (n instanceof SVGGraphicsElement) {
                                let {
                                    x: e,
                                    y: t
                                } = n.getBBox();
                                r.x += e, r.y += t;
                                let o = null,
                                    i = n.parentNode;
                                for (; !o;) "svg" === i.tagName && (o = i), i = n.parentNode;
                                n = o
                            } else break;
                            return r
                        }(o, e) : M, s = o === e ? {
                            width: e.scrollWidth,
                            height: e.scrollHeight
                        } : "getBBox" in o && "svg" !== o.tagName ? o.getBBox() : {
                            width: o.clientWidth,
                            height: o.clientHeight
                        }, u = {
                            width: e.clientWidth,
                            height: e.clientHeight
                        };
                        t[i].offset.length = 0;
                        let c = !t[i].interpolate,
                            f = n.length;
                        for (let e = 0; e < f; e++) {
                            let r = function(e, t, r, n) {
                                let o = Array.isArray(e) ? e : O,
                                    i = 0;
                                return "number" == typeof e ? o = [e, e] : "string" == typeof e && (o = (e = e.trim()).includes(" ") ? e.split(" ") : [e, k[e] ? e : "0"]), (i = N(o[0], r, n)) - N(o[1], t)
                            }(n[e], u[a], s[a], l[i]);
                            c || r === t[i].interpolatorOffsets[e] || (c = !0), t[i].offset[e] = r
                        }
                        c && (t[i].interpolate = (0, L.interpolate)(t[i].offset, (0, j.defaultOffset)(n), {
                            clamp: !1
                        }), t[i].interpolatorOffsets = [...t[i].offset]), t[i].progress = (0, z.clamp)(0, 1, t[i].interpolate(t[i].current))
                    }(e, r, n)
                },
                notify: () => t(r)
            }
        }(n, e, {
            time: 0,
            x: w(),
            y: w()
        }, o);
        if (i.add(s), !W.has(n)) {
            let e, o = () => {
                    for (let e of i) e.measure(l.frameData.timestamp);
                    l.frame.preUpdate(a)
                },
                a = () => {
                    for (let e of i) e.notify()
                },
                s = () => l.frame.read(o);
            W.set(n, s);
            let u = A(n);
            window.addEventListener("resize", s, {
                passive: !0
            }), n !== document.documentElement && T.set(n, "function" == typeof n ? (y.add(n), r || (r = () => {
                let e = {
                    get width() {
                        return window.innerWidth
                    },
                    get height() {
                        return window.innerHeight
                    }
                };
                y.forEach(t => t(e))
            }, window.addEventListener("resize", r)), () => {
                y.delete(n), y.size || "function" != typeof r || (window.removeEventListener("resize", r), r = void 0)
            }) : (!t && "u" > typeof ResizeObserver && (t = new ResizeObserver(v)), (e = (0, f.resolveElements)(n)).forEach(e => {
                let r = d.get(e);
                r || (r = new Set, d.set(e, r)), r.add(s), t?.observe(e)
            }), () => {
                e.forEach(e => {
                    let r = d.get(e);
                    r?.delete(s), r?.size || t?.unobserve(e)
                })
            })), u.addEventListener("scroll", s, {
                passive: !0
            }), s()
        }
        let u = W.get(n);
        return l.frame.read(u, !1, !0), () => {
            (0, l.cancelFrame)(u);
            let e = V.get(n);
            if (!e || (e.delete(s), e.size)) return;
            let t = W.get(n);
            W.delete(n), t && (A(n).removeEventListener("scroll", t), T.get(n)?.(), window.removeEventListener("resize", t))
        }
    }
    let B = new Map;

    function P({
        source: e,
        container: t,
        ...r
    }) {
        var n;
        let o, i, {
            axis: a
        } = r;
        e && (t = e);
        let l = B.get(t) ?? new Map;
        B.set(t, l);
        let s = r.target ?? "self",
            c = l.get(s) ?? {},
            f = a + (r.offset ?? []).join(",");
        return c[f] || (c[f] = !r.target && (0, u.supportsScrollTimeline)() ? new ScrollTimeline({
            source: t,
            axis: a
        }) : (n = {
            container: t,
            ...r
        }, o = {
            value: 0
        }, i = $(e => {
            o.value = 100 * e[n.axis].progress
        }, n), {
            currentTime: o,
            cancel: i
        })), c[f]
    }
    var R = e.i(165780),
        F = e.i(148473);
    let H = () => ({
            scrollX: (0, n.motionValue)(0),
            scrollY: (0, n.motionValue)(0),
            scrollXProgress: (0, n.motionValue)(0),
            scrollYProgress: (0, n.motionValue)(0)
        }),
        U = e => !!e && !e.current;
    e.s(["useScroll", 0, function({
        container: e,
        target: t,
        ...r
    } = {}) {
        let n = (0, R.useConstant)(H),
            l = (0, i.useRef)(null),
            u = (0, i.useRef)(!1),
            c = (0, i.useCallback)(() => (l.current = function(e, {
                axis: t = "y",
                container: r = document.scrollingElement,
                ...n
            } = {}) {
                var o, i;
                let l;
                if (!r) return a.noop;
                let u = {
                    axis: t,
                    container: r,
                    ...n
                };
                return "function" == typeof e ? (o = e, i = u, 2 === o.length ? $(e => {
                    o(e[i.axis].progress, e)
                }, i) : s(o, P(i))) : (l = P(u), e.attachTimeline({
                    timeline: u.target ? void 0 : l,
                    observe: e => (e.pause(), s(t => {
                        e.time = e.iterationDuration * t
                    }, l))
                }))
            }((e, {
                x: t,
                y: r
            }) => {
                n.scrollX.set(t.current), n.scrollXProgress.set(t.progress), n.scrollY.set(r.current), n.scrollYProgress.set(r.progress)
            }, {
                ...r,
                container: e?.current || void 0,
                target: t?.current || void 0
            }), () => {
                l.current?.()
            }), [e, t, JSON.stringify(r.offset)]);
        return (0, F.useIsomorphicLayoutEffect)(() => {
            if (u.current = !1, !(U(e) || U(t))) return c();
            u.current = !0
        }, [c]), (0, i.useEffect)(() => u.current ? ((0, o.invariant)(!U(e), "Container ref is defined but not hydrated", "use-scroll-ref"), (0, o.invariant)(!U(t), "Target ref is defined but not hydrated", "use-scroll-ref"), c()) : void 0, [c]), n
    }], 376936);
    var I = e.i(339967);

    function D(e) {
        let t = (0, R.useConstant)(() => (0, n.motionValue)(e)),
            {
                isStatic: r
            } = (0, i.useContext)(I.MotionConfigContext);
        if (r) {
            let [, r] = (0, i.useState)(e);
            (0, i.useEffect)(() => t.on("change", r), [])
        }
        return t
    }

    function K(e, t) {
        let r = D(t()),
            n = () => r.set(t());
        return n(), (0, F.useIsomorphicLayoutEffect)(() => {
            let t = () => l.frame.preRender(n, !1, !0),
                r = e.map(e => e.on("change", t));
            return () => {
                r.forEach(e => e()), (0, l.cancelFrame)(n)
            }
        }), r
    }

    function G(e, t) {
        let r = (0, R.useConstant)(() => []);
        return K(e, () => {
            r.length = 0;
            let n = e.length;
            for (let t = 0; t < n; t++) r[t] = e[t].get();
            return t(r)
        })
    }
    e.s(["useMotionValue", 0, D], 997413), e.s(["useTransform", 0, function(e, t, r, o) {
        if ("function" == typeof e) {
            let t;
            return n.collectMotionValues.current = [], e(), t = K(n.collectMotionValues.current, e), n.collectMotionValues.current = void 0, t
        }
        let i = "function" == typeof t ? t : function(...e) {
            let t = !Array.isArray(e[0]),
                r = t ? 0 : -1,
                n = e[0 + r],
                o = e[1 + r],
                i = e[2 + r],
                a = e[3 + r],
                l = (0, L.interpolate)(o, i, a);
            return t ? l(n) : l
        }(t, r, o);
        return Array.isArray(e) ? G(e, i) : G([e], ([e]) => i(e))
    }], 192207)
}, 4390, 570994, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(3931),
        n = e.i(655105),
        o = e.i(828083),
        i = e.i(722978),
        a = e.i(153348),
        l = e.i(955429),
        s = e.i(201763),
        u = e.i(749583);
    let c = (0, o.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        f = ({
            eyebrow: e,
            title: o,
            titleSize: f = "medium",
            description: d,
            backgroundImage: p,
            actions: h = [],
            keyFigures: g,
            video: m,
            mention: v,
            fullScreen: y = !0
        }) => {
            let x = (0, r.useRef)(null),
                b = (0, a.useInView)(x, {
                    once: !0
                }),
                w = (0, l.useReducedMotion)(),
                [_, E] = (0, r.useState)(!1),
                L = (0, i.default)(`font-nohemi mt-24 my-4 ${"small"===f?"mb-6":"mb-8"}`, {
                    "loco-text-heading-xl": "medium" === f,
                    "loco-text-headline": "large" === f,
                    "loco-text-heading-lg": "small" === f
                }),
                j = (0, i.default)("object-cover transition-opacity duration-1000 opacity-100", {
                    "opacity-0": _
                });
            return (0, t.jsxs)("section", {
                ref: x,
                className: "dark relative",
                children: [p && (0, t.jsx)(n.default, {
                    src: p.src,
                    placeholder: "blur",
                    blurDataURL: p.placeholder,
                    fill: !0,
                    alt: "",
                    className: j,
                    sizes: "100vw"
                }), b && !w && m && (0, t.jsx)(c, {
                    url: m || "",
                    playing: !0,
                    loop: !0,
                    muted: !0,
                    playsinline: !0,
                    width: "100%",
                    height: "100%",
                    onReady: () => {
                        E(!0)
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
                        backgroundImage: y ? `
    linear-gradient(180deg, rgba(1, 1, 1, 0.00) 45.08%, rgba(1, 1, 1, 0.00) 49.56%, rgba(1, 1, 1, 0.01) 53.84%, rgba(1, 1, 1, 0.02) 57.92%, rgba(1, 1, 1, 0.04) 61.84%, rgba(1, 1, 1, 0.06) 65.62%, rgba(1, 1, 1, 0.09) 69.27%, rgba(1, 1, 1, 0.12) 72.82%, rgba(1, 1, 1, 0.16) 76.29%, rgba(1, 1, 1, 0.20) 79.7%, rgba(1, 1, 1, 0.24) 83.06%, rgba(1, 1, 1, 0.29) 86.41%, rgba(1, 1, 1, 0.34) 89.75%, rgba(1, 1, 1, 0.39) 93.12%, rgba(1, 1, 1, 0.44) 96.53%, rgba(1, 1, 1, 0.50) 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)` : ""
                    }
                }), (0, t.jsxs)("div", {
                    className: `relative container flex ${y&&"min-h-[calc(100vh-4rem)]"} flex-col py-8 text-white`,
                    children: [(0, t.jsx)("div", {
                        className: "flex grow flex-col justify-stretch",
                        children: (0, t.jsxs)("div", {
                            className: "flex h-full grow flex-col items-center justify-center text-center",
                            children: [e && (0, t.jsx)("div", {
                                className: "loco-caption-lg-semibold",
                                children: e
                            }), (0, t.jsx)("h1", {
                                className: L,
                                children: o
                            }), d && (0, t.jsx)("div", {
                                className: "loco-caption-sm-semibold mt-5",
                                children: d
                            }), h && (0, t.jsx)("div", {
                                className: "mt-6 flex flex-wrap items-center justify-center gap-4",
                                children: h.map((e, r) => {
                                    if (e.link) return (0, t.jsx)(u.default, {
                                        rounded: !0,
                                        hasArrow: !0,
                                        href: e.link.href,
                                        target: e.link.target,
                                        variant: 0 === r ? "primary" : "secondary",
                                        children: e.title
                                    }, `headliner-action-link-${e.title}-${r}`);
                                    if (e.form) {
                                        let n = {
                                            ...e.form.form,
                                            ...e.form.webinarFormParametersContent,
                                            extraFields: e.form.extraFields
                                        };
                                        return (0, t.jsx)("div", {
                                            children: e.form.renderModal({
                                                label: e.title,
                                                form: n
                                            })
                                        }, `headliner-action-modal-${e.title}-${r}`)
                                    }
                                    return null
                                })
                            })]
                        })
                    }), g && (0, t.jsx)(s.default, {
                        keyFigures: g,
                        nested: !0
                    })]
                }), v && (0, t.jsx)("div", {
                    className: "loco-text-body-sm z-10 w-full px-4 py-4 text-center opacity-70 md:absolute md:top-10 md:right-8 md:left-auto md:w-auto md:px-0 md:py-8",
                    children: v
                })]
            })
        };
    e.s(["default", 0, f], 570994);
    var d = e.i(115219);
    e.s(["default", 0, ({
        actions: e = [],
        brandfolder: n,
        mention: o,
        eyebrow: i,
        title: a,
        titleSize: l,
        description: s,
        image: u,
        keyFigures: c,
        isHidden: p
    }) => {
        let {
            mapFormActions: h
        } = (0, d.useFormModal)(e), g = h(e), m = (0, r.useMemo)(() => (c?.data ?? []).map(e => e?.value?.text ? {
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
            children: !p && (0, t.jsx)(f, {
                actions: g,
                mention: o || "",
                eyebrow: i || "",
                title: a || "",
                titleSize: "small" === l ? "small" : "large" === l ? "large" : "medium",
                description: s || "",
                backgroundImage: {
                    src: u?.asset.url || "",
                    placeholder: u?.asset.metadata?.lqip || ""
                },
                keyFigures: m,
                video: n?.muxHLSURL || ""
            })
        })
    }], 4390)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "05f1b796-ccc5-5dbb-bf8f-823c2aa84373")
    } catch (e) {}
}();
//# debugId=05f1b796-ccc5-5dbb-bf8f-823c2aa84373