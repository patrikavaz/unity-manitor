(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 240046, (r, t, e) => {
    t.exports = function(r) {
        return r
    }
}, 865799, (r, t, e) => {
    t.exports = function(r, t, e) {
        switch (e.length) {
            case 0:
                return r.call(t);
            case 1:
                return r.call(t, e[0]);
            case 2:
                return r.call(t, e[0], e[1]);
            case 3:
                return r.call(t, e[0], e[1], e[2])
        }
        return r.apply(t, e)
    }
}, 911818, (r, t, e) => {
    var n = Date.now;
    t.exports = function(r) {
        var t = 0,
            e = 0;
        return function() {
            var o = n(),
                a = 16 - (o - e);
            if (e = o, a > 0) {
                if (++t >= 800) return arguments[0]
            } else t = 0;
            return r.apply(void 0, arguments)
        }
    }
}, 830747, (r, t, e) => {
    t.exports = function(r) {
        return function() {
            return r
        }
    }
}, 599568, (r, t, e) => {
    var n = r.r(581511);
    t.exports = function() {
        try {
            var r = n(Object, "defineProperty");
            return r({}, "", {}), r
        } catch (r) {}
    }()
}, 317508, (r, t, e) => {
    var n = r.r(830747),
        o = r.r(599568),
        a = r.r(240046);
    t.exports = o ? function(r, t) {
        return o(r, "toString", {
            configurable: !0,
            enumerable: !1,
            value: n(t),
            writable: !0
        })
    } : a
}, 108749, (r, t, e) => {
    var n = r.r(317508);
    t.exports = r.r(911818)(n)
}, 531766, (r, t, e) => {
    t.exports = function(r, t) {
        for (var e = -1, n = null == r ? 0 : r.length; ++e < n && !1 !== t(r[e], e, r););
        return r
    }
}, 860059, (r, t, e) => {
    var n = /^(?:0|[1-9]\d*)$/;
    t.exports = function(r, t) {
        var e = typeof r;
        return !!(t = null == t ? 0x1fffffffffffff : t) && ("number" == e || "symbol" != e && n.test(r)) && r > -1 && r % 1 == 0 && r < t
    }
}, 184414, (r, t, e) => {
    var n = r.r(865799),
        o = Math.max;
    t.exports = function(r, t, e) {
        return t = o(void 0 === t ? r.length - 1 : t, 0),
            function() {
                for (var a = arguments, i = -1, u = o(a.length - t, 0), s = Array(u); ++i < u;) s[i] = a[t + i];
                i = -1;
                for (var l = Array(t + 1); ++i < t;) l[i] = a[i];
                return l[t] = e(s), n(r, this, l)
            }
    }
}, 616073, (r, t, e) => {
    var n = r.r(843031);
    t.exports = n && new n
}, 647503, (r, t, e) => {
    var n = r.r(240046),
        o = r.r(616073);
    t.exports = o ? function(r, t) {
        return o.set(r, t), r
    } : n
}, 808690, (r, t, e) => {
    var n = r.r(878524),
        o = Object.create;
    t.exports = function() {
        function r() {}
        return function(t) {
            if (!n(t)) return {};
            if (o) return o(t);
            r.prototype = t;
            var e = new r;
            return r.prototype = void 0, e
        }
    }()
}, 150692, (r, t, e) => {
    var n = r.r(808690),
        o = r.r(878524);
    t.exports = function(r) {
        return function() {
            var t = arguments;
            switch (t.length) {
                case 0:
                    return new r;
                case 1:
                    return new r(t[0]);
                case 2:
                    return new r(t[0], t[1]);
                case 3:
                    return new r(t[0], t[1], t[2]);
                case 4:
                    return new r(t[0], t[1], t[2], t[3]);
                case 5:
                    return new r(t[0], t[1], t[2], t[3], t[4]);
                case 6:
                    return new r(t[0], t[1], t[2], t[3], t[4], t[5]);
                case 7:
                    return new r(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
            }
            var e = n(r.prototype),
                a = r.apply(e, t);
            return o(a) ? a : e
        }
    }
}, 154193, (r, t, e) => {
    var n = r.r(150692),
        o = r.r(78974);
    t.exports = function(r, t, e) {
        var a = 1 & t,
            i = n(r);
        return function t() {
            return (this && this !== o && this instanceof t ? i : r).apply(a ? e : this, arguments)
        }
    }
}, 669249, (r, t, e) => {
    var n = Math.max;
    t.exports = function(r, t, e, o) {
        for (var a = -1, i = r.length, u = e.length, s = -1, l = t.length, f = n(i - u, 0), c = Array(l + f), p = !o; ++s < l;) c[s] = t[s];
        for (; ++a < u;)(p || a < i) && (c[e[a]] = r[a]);
        for (; f--;) c[s++] = r[a++];
        return c
    }
}, 392010, (r, t, e) => {
    var n = Math.max;
    t.exports = function(r, t, e, o) {
        for (var a = -1, i = r.length, u = -1, s = e.length, l = -1, f = t.length, c = n(i - s, 0), p = Array(c + f), v = !o; ++a < c;) p[a] = r[a];
        for (var _ = a; ++l < f;) p[_ + l] = t[l];
        for (; ++u < s;)(v || a < i) && (p[_ + e[u]] = r[a++]);
        return p
    }
}, 678304, (r, t, e) => {
    t.exports = function(r, t) {
        for (var e = r.length, n = 0; e--;) r[e] === t && ++n;
        return n
    }
}, 631347, (r, t, e) => {
    t.exports = function() {}
}, 698686, (r, t, e) => {
    function n(r) {
        this.__wrapped__ = r, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 0xffffffff, this.__views__ = []
    }
    n.prototype = r.r(808690)(r.r(631347).prototype), n.prototype.constructor = n, t.exports = n
}, 435673, (r, t, e) => {
    t.exports = function() {}
}, 560579, (r, t, e) => {
    var n = r.r(616073),
        o = r.r(435673);
    t.exports = n ? function(r) {
        return n.get(r)
    } : o
}, 293281, (r, t, e) => {
    t.exports = {}
}, 272640, (r, t, e) => {
    var n = r.r(293281),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(r) {
        for (var t = r.name + "", e = n[t], a = o.call(n, t) ? e.length : 0; a--;) {
            var i = e[a],
                u = i.func;
            if (null == u || u == r) return i.name
        }
        return t
    }
}, 297211, (r, t, e) => {
    function n(r, t) {
        this.__wrapped__ = r, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
    }
    n.prototype = r.r(808690)(r.r(631347).prototype), n.prototype.constructor = n, t.exports = n
}, 370592, (r, t, e) => {
    t.exports = function(r, t) {
        var e = -1,
            n = r.length;
        for (t || (t = Array(n)); ++e < n;) t[e] = r[e];
        return t
    }
}, 852109, (r, t, e) => {
    var n = r.r(698686),
        o = r.r(297211),
        a = r.r(370592);
    t.exports = function(r) {
        if (r instanceof n) return r.clone();
        var t = new o(r.__wrapped__, r.__chain__);
        return t.__actions__ = a(r.__actions__), t.__index__ = r.__index__, t.__values__ = r.__values__, t
    }
}, 611309, (r, t, e) => {
    var n = r.r(698686),
        o = r.r(297211),
        a = r.r(631347),
        i = r.r(778116),
        u = r.r(394022),
        s = r.r(852109),
        l = Object.prototype.hasOwnProperty;

    function f(r) {
        if (u(r) && !i(r) && !(r instanceof n)) {
            if (r instanceof o) return r;
            if (l.call(r, "__wrapped__")) return s(r)
        }
        return new o(r)
    }
    f.prototype = a.prototype, f.prototype.constructor = f, t.exports = f
}, 610903, (r, t, e) => {
    var n = r.r(698686),
        o = r.r(560579),
        a = r.r(272640),
        i = r.r(611309);
    t.exports = function(r) {
        var t = a(r),
            e = i[t];
        if ("function" != typeof e || !(t in n.prototype)) return !1;
        if (r === e) return !0;
        var u = o(e);
        return !!u && r === u[0]
    }
}, 569923, (r, t, e) => {
    var n = r.r(647503);
    t.exports = r.r(911818)(n)
}, 434891, (r, t, e) => {
    var n = /\{\n\/\* \[wrapped with (.+)\] \*/,
        o = /,? & /;
    t.exports = function(r) {
        var t = r.match(n);
        return t ? t[1].split(o) : []
    }
}, 790131, (r, t, e) => {
    var n = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
    t.exports = function(r, t) {
        var e = t.length;
        if (!e) return r;
        var o = e - 1;
        return t[o] = (e > 1 ? "& " : "") + t[o], t = t.join(e > 2 ? ", " : " "), r.replace(n, "{\n/* [wrapped with " + t + "] */\n")
    }
}, 753269, (r, t, e) => {
    t.exports = function(r, t, e, n) {
        for (var o = r.length, a = e + (n ? 1 : -1); n ? a-- : ++a < o;)
            if (t(r[a], a, r)) return a;
        return -1
    }
}, 254849, (r, t, e) => {
    t.exports = function(r) {
        return r != r
    }
}, 193170, (r, t, e) => {
    t.exports = function(r, t, e) {
        for (var n = e - 1, o = r.length; ++n < o;)
            if (r[n] === t) return n;
        return -1
    }
}, 125863, (r, t, e) => {
    var n = r.r(753269),
        o = r.r(254849),
        a = r.r(193170);
    t.exports = function(r, t, e) {
        return t == t ? a(r, t, e) : n(r, o, e)
    }
}, 584058, (r, t, e) => {
    var n = r.r(125863);
    t.exports = function(r, t) {
        return !!(null == r ? 0 : r.length) && n(r, t, 0) > -1
    }
}, 621923, (r, t, e) => {
    var n = r.r(531766),
        o = r.r(584058),
        a = [
            ["ary", 128],
            ["bind", 1],
            ["bindKey", 2],
            ["curry", 8],
            ["curryRight", 16],
            ["flip", 512],
            ["partial", 32],
            ["partialRight", 64],
            ["rearg", 256]
        ];
    t.exports = function(r, t) {
        return n(a, function(e) {
            var n = "_." + e[0];
            t & e[1] && !o(r, n) && r.push(n)
        }), r.sort()
    }
}, 777948, (r, t, e) => {
    var n = r.r(434891),
        o = r.r(790131),
        a = r.r(108749),
        i = r.r(621923);
    t.exports = function(r, t, e) {
        var u = t + "";
        return a(r, o(u, i(n(u), e)))
    }
}, 713442, (r, t, e) => {
    var n = r.r(610903),
        o = r.r(569923),
        a = r.r(777948);
    t.exports = function(r, t, e, i, u, s, l, f, c, p) {
        var v = 8 & t;
        t |= v ? 32 : 64, 4 & (t &= ~(v ? 64 : 32)) || (t &= -4);
        var _ = [r, t, u, v ? s : void 0, v ? l : void 0, v ? void 0 : s, v ? void 0 : l, f, c, p],
            h = e.apply(void 0, _);
        return n(r) && o(h, _), h.placeholder = i, a(h, r, t)
    }
}, 943203, (r, t, e) => {
    t.exports = function(r) {
        return r.placeholder
    }
}, 737022, (r, t, e) => {
    var n = r.r(370592),
        o = r.r(860059),
        a = Math.min;
    t.exports = function(r, t) {
        for (var e = r.length, i = a(t.length, e), u = n(r); i--;) {
            var s = t[i];
            r[i] = o(s, e) ? u[s] : void 0
        }
        return r
    }
}, 913599, (r, t, e) => {
    var n = "__lodash_placeholder__";
    t.exports = function(r, t) {
        for (var e = -1, o = r.length, a = 0, i = []; ++e < o;) {
            var u = r[e];
            (u === t || u === n) && (r[e] = n, i[a++] = e)
        }
        return i
    }
}, 141920, (r, t, e) => {
    var n = r.r(669249),
        o = r.r(392010),
        a = r.r(678304),
        i = r.r(150692),
        u = r.r(713442),
        s = r.r(943203),
        l = r.r(737022),
        f = r.r(913599),
        c = r.r(78974);
    t.exports = function r(t, e, p, v, _, h, d, g, x, y) {
        var E = 128 & e,
            S = 1 & e,
            T = 2 & e,
            A = 24 & e,
            b = 512 & e,
            w = T ? void 0 : i(t);

        function C() {
            for (var L = arguments.length, R = Array(L), O = L; O--;) R[O] = arguments[O];
            if (A) var m = s(C),
                B = a(R, m);
            if (v && (R = n(R, v, _, A)), h && (R = o(R, h, d, A)), L -= B, A && L < y) {
                var U = f(R, m);
                return u(t, e, r, C.placeholder, p, R, U, g, x, y - L)
            }
            var G = S ? p : this,
                I = T ? G[t] : t;
            return L = R.length, g ? R = l(R, g) : b && L > 1 && R.reverse(), E && x < L && (R.length = x), this && this !== c && this instanceof C && (I = w || i(I)), I.apply(G, R)
        }
        return C
    }
}, 50962, (r, t, e) => {
    var n = r.r(865799),
        o = r.r(150692),
        a = r.r(141920),
        i = r.r(713442),
        u = r.r(943203),
        s = r.r(913599),
        l = r.r(78974);
    t.exports = function(r, t, e) {
        var f = o(r);

        function c() {
            for (var o = arguments.length, p = Array(o), v = o, _ = u(c); v--;) p[v] = arguments[v];
            var h = o < 3 && p[0] !== _ && p[o - 1] !== _ ? [] : s(p, _);
            return (o -= h.length) < e ? i(r, t, a, c.placeholder, void 0, p, h, void 0, void 0, e - o) : n(this && this !== l && this instanceof c ? f : r, this, p)
        }
        return c
    }
}, 890892, (r, t, e) => {
    var n = r.r(865799),
        o = r.r(150692),
        a = r.r(78974);
    t.exports = function(r, t, e, i) {
        var u = 1 & t,
            s = o(r);
        return function t() {
            for (var o = -1, l = arguments.length, f = -1, c = i.length, p = Array(c + l); ++f < c;) p[f] = i[f];
            for (; l--;) p[f++] = arguments[++o];
            return n(this && this !== a && this instanceof t ? s : r, u ? e : this, p)
        }
    }
}, 767257, (r, t, e) => {
    var n = r.r(669249),
        o = r.r(392010),
        a = r.r(913599),
        i = "__lodash_placeholder__",
        u = Math.min;
    t.exports = function(r, t) {
        var e = r[1],
            s = t[1],
            l = e | s,
            f = l < 131,
            c = 128 == s && 8 == e || 128 == s && 256 == e && r[7].length <= t[8] || 384 == s && t[7].length <= t[8] && 8 == e;
        if (!(f || c)) return r;
        1 & s && (r[2] = t[2], l |= 1 & e ? 0 : 4);
        var p = t[3];
        if (p) {
            var v = r[3];
            r[3] = v ? n(v, p, t[4]) : p, r[4] = v ? a(r[3], i) : t[4]
        }
        return (p = t[5]) && (v = r[5], r[5] = v ? o(v, p, t[6]) : p, r[6] = v ? a(r[5], i) : t[6]), (p = t[7]) && (r[7] = p), 128 & s && (r[8] = null == r[8] ? t[8] : u(r[8], t[8])), null == r[9] && (r[9] = t[9]), r[0] = t[0], r[1] = l, r
    }
}, 860205, (r, t, e) => {
    var n = /\s/;
    t.exports = function(r) {
        for (var t = r.length; t-- && n.test(r.charAt(t)););
        return t
    }
}, 798430, (r, t, e) => {
    var n = r.r(860205),
        o = /^\s+/;
    t.exports = function(r) {
        return r ? r.slice(0, n(r) + 1).replace(o, "") : r
    }
}, 868922, (r, t, e) => {
    var n = r.r(798430),
        o = r.r(878524),
        a = r.r(692558),
        i = 0 / 0,
        u = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        f = parseInt;
    t.exports = function(r) {
        if ("number" == typeof r) return r;
        if (a(r)) return i;
        if (o(r)) {
            var t = "function" == typeof r.valueOf ? r.valueOf() : r;
            r = o(t) ? t + "" : t
        }
        if ("string" != typeof r) return 0 === r ? r : +r;
        r = n(r);
        var e = s.test(r);
        return e || l.test(r) ? f(r.slice(2), e ? 2 : 8) : u.test(r) ? i : +r
    }
}, 682437, (r, t, e) => {
    var n = r.r(868922),
        o = 1 / 0;
    t.exports = function(r) {
        return r ? (r = n(r)) === o || r === -o ? (r < 0 ? -1 : 1) * 17976931348623157e292 : r == r ? r : 0 : 0 === r ? r : 0
    }
}, 16379, (r, t, e) => {
    var n = r.r(682437);
    t.exports = function(r) {
        var t = n(r),
            e = t % 1;
        return t == t ? e ? t - e : t : 0
    }
}, 852580, (r, t, e) => {
    var n = r.r(647503),
        o = r.r(154193),
        a = r.r(50962),
        i = r.r(141920),
        u = r.r(890892),
        s = r.r(560579),
        l = r.r(767257),
        f = r.r(569923),
        c = r.r(777948),
        p = r.r(16379),
        v = Math.max;
    t.exports = function(r, t, e, _, h, d, g, x) {
        var y = 2 & t;
        if (!y && "function" != typeof r) throw TypeError("Expected a function");
        var E = _ ? _.length : 0;
        if (E || (t &= -97, _ = h = void 0), g = void 0 === g ? g : v(p(g), 0), x = void 0 === x ? x : p(x), E -= h ? h.length : 0, 64 & t) {
            var S = _,
                T = h;
            _ = h = void 0
        }
        var A = y ? void 0 : s(r),
            b = [r, t, e, _, h, S, T, d, g, x];
        if (A && l(b, A), r = b[0], t = b[1], e = b[2], _ = b[3], h = b[4], (x = b[9] = void 0 === b[9] ? y ? 0 : r.length : v(b[9] - E, 0)) || !(24 & t) || (t &= -25), t && 1 != t) w = 8 == t || 16 == t ? a(r, t, x) : 32 != t && 33 != t || h.length ? i.apply(void 0, b) : u(r, t, e, _);
        else var w = o(r, t, e);
        return c((A ? n : f)(w, b), r, t)
    }
}, 414462, (r, t, e) => {
    var n = r.r(852580);

    function o(r, t, e) {
        var a = n(r, 16, void 0, void 0, void 0, void 0, void 0, t = e ? void 0 : t);
        return a.placeholder = o.placeholder, a
    }
    o.placeholder = {}, t.exports = o
}, 105836, (r, t, e) => {
    t.exports = function(r, t) {
        for (var e = -1, n = t.length, o = r.length; ++e < n;) r[o + e] = t[e];
        return r
    }
}, 351263, (r, t, e) => {
    var n = r.r(328042),
        o = r.r(410090),
        a = r.r(778116),
        i = n ? n.isConcatSpreadable : void 0;
    t.exports = function(r) {
        return a(r) || o(r) || !!(i && r && r[i])
    }
}, 601362, (r, t, e) => {
    var n = r.r(105836),
        o = r.r(351263);
    t.exports = function r(t, e, a, i, u) {
        var s = -1,
            l = t.length;
        for (a || (a = o), u || (u = []); ++s < l;) {
            var f = t[s];
            e > 0 && a(f) ? e > 1 ? r(f, e - 1, a, i, u) : n(u, f) : i || (u[u.length] = f)
        }
        return u
    }
}, 840779, (r, t, e) => {
    var n = r.r(601362);
    t.exports = function(r) {
        return (null == r ? 0 : r.length) ? n(r, 1) : []
    }
}, 650016, (r, t, e) => {
    var n = r.r(840779),
        o = r.r(184414),
        a = r.r(108749);
    t.exports = function(r) {
        return a(o(r, void 0, n), r + "")
    }
}, 814654, (r, t, e) => {
    var n = r.r(297211),
        o = r.r(650016),
        a = r.r(560579),
        i = r.r(272640),
        u = r.r(778116),
        s = r.r(610903);
    t.exports = function(r) {
        return o(function(t) {
            var e = t.length,
                o = e,
                l = n.prototype.thru;
            for (r && t.reverse(); o--;) {
                var f = t[o];
                if ("function" != typeof f) throw TypeError("Expected a function");
                if (l && !c && "wrapper" == i(f)) var c = new n([], !0)
            }
            for (o = c ? o : e; ++o < e;) {
                var p = i(f = t[o]),
                    v = "wrapper" == p ? a(f) : void 0;
                c = v && s(v[0]) && 424 == v[1] && !v[4].length && 1 == v[9] ? c[i(v[0])].apply(c, v[3]) : 1 == f.length && s(f) ? c[p]() : c.thru(f)
            }
            return function() {
                var r = arguments,
                    n = r[0];
                if (c && 1 == r.length && u(n)) return c.plant(n).value();
                for (var o = 0, a = e ? t[o].apply(this, r) : n; ++o < e;) a = t[o].call(this, a);
                return a
            }
        })
    }
}, 116657, (r, t, e) => {
    t.exports = r.r(814654)()
}, 775041, r => {
    "use strict";
    var t, e = r.i(3931),
        n = r.i(414462),
        o = r.i(116657);
    let a = {
        categories: [],
        subcategories: [],
        selectedSubcategory: null,
        selectedCategory: "",
        allSubcategoriesLabel: ""
    };
    var i = ((t = {}).SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY", t.SET_SUBCATEGORIES = "SET_SUBCATEGORIES", t.SET_SELECTED_SUBCATEGORY = "SET_SELECTED_SUBCATEGORY", t.SET_ALL_SUBCATEGORIES_LABEL = "SET_ALL_SUBCATEGORIES_LABEL", t.INIT_FROM_URL_PARAMS = "INIT_FROM_URL_PARAMS", t);
    let u = (0, e.createContext)([a, () => {}]);
    u.displayName = "FiltersContext";
    let s = (0, n.default)((r, t) => {
        let {
            type: e,
            payload: n
        } = t;
        switch (e) {
            case "SET_SELECTED_CATEGORY": {
                let t, {
                        categoryId: e,
                        subcategoryId: a
                    } = n,
                    {
                        subcategories: i,
                        allSubcategoriesLabel: u = "",
                        localizedAllSubcategoriesLabel: l
                    } = r.categories.find(({
                        _id: r
                    }) => r === e) || {},
                    f = i ?? [];
                if (void 0 === a) {
                    let r = f.find(r => r.makeDefaultLandingSubcategory);
                    t = r?._id ?? null
                } else t = a;
                return (0, o.default)(s({
                    type: "SET_SUBCATEGORIES",
                    payload: f
                }), s({
                    type: "SET_SELECTED_SUBCATEGORY",
                    payload: t
                }), s({
                    type: "SET_ALL_SUBCATEGORIES_LABEL",
                    payload: l ?? u
                }), r => ({
                    ...r,
                    selectedCategory: e
                }))(r)
            }
            case "SET_SUBCATEGORIES":
                return {
                    ...r, subcategories: n
                };
            case "SET_SELECTED_SUBCATEGORY":
                return {
                    ...r, selectedSubcategory: n
                };
            case "SET_ALL_SUBCATEGORIES_LABEL":
                return {
                    ...r, allSubcategoriesLabel: n
                };
            case "INIT_FROM_URL_PARAMS": {
                let {
                    categoryParam: t,
                    subcategoryParam: e
                } = n, o = r.categories.find(({
                    label: r
                }) => r?.toLowerCase() === t) || r.categories[0];
                if (!o) return r;
                let a = o.subcategories ?? [],
                    {
                        _id: i,
                        allSubcategoriesLabel: u = "",
                        localizedAllSubcategoriesLabel: s
                    } = o,
                    l = null;
                if (e) {
                    let r = a.find(r => r.label?.toLowerCase() === e);
                    l = r?._id ?? null
                }
                if (null === l) {
                    let r = a.find(r => r.makeDefaultLandingSubcategory);
                    l = r?._id ?? null
                }
                return {
                    ...r,
                    selectedCategory: i,
                    subcategories: a,
                    selectedSubcategory: l,
                    allSubcategoriesLabel: s ?? u
                }
            }
            default:
                return r
        }
    });
    r.s(["FiltersActionType", () => i, "FiltersContext", 0, u, "default", 0, r => (0, e.useReducer)(s, {
        ...a,
        ...r
    }, r => {
        let t = r.categories[0];
        if (!t) return r;
        let e = t.subcategories ?? [],
            {
                _id: n,
                allSubcategoriesLabel: o = "",
                localizedAllSubcategoriesLabel: a
            } = t,
            i = e.find(r => r.makeDefaultLandingSubcategory);
        return {
            ...r,
            selectedCategory: n,
            subcategories: e,
            selectedSubcategory: i?._id ?? null,
            allSubcategoriesLabel: a ?? o
        }
    })])
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3805ad5d-6a47-5655-baa0-b3df4ad73461")
    } catch (e) {}
}();
//# debugId=3805ad5d-6a47-5655-baa0-b3df4ad73461