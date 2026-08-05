(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 23167, (t, e, r) => {
    var n = {
            675: function(t, e) {
                "use strict";
                e.byteLength = function(t) {
                    var e = u(t),
                        r = e[0],
                        n = e[1];
                    return (r + n) * 3 / 4 - n
                }, e.toByteArray = function(t) {
                    var e, r, o = u(t),
                        a = o[0],
                        s = o[1],
                        f = new i((a + s) * 3 / 4 - s),
                        l = 0,
                        c = s > 0 ? a - 4 : a;
                    for (r = 0; r < c; r += 4) e = n[t.charCodeAt(r)] << 18 | n[t.charCodeAt(r + 1)] << 12 | n[t.charCodeAt(r + 2)] << 6 | n[t.charCodeAt(r + 3)], f[l++] = e >> 16 & 255, f[l++] = e >> 8 & 255, f[l++] = 255 & e;
                    return 2 === s && (e = n[t.charCodeAt(r)] << 2 | n[t.charCodeAt(r + 1)] >> 4, f[l++] = 255 & e), 1 === s && (e = n[t.charCodeAt(r)] << 10 | n[t.charCodeAt(r + 1)] << 4 | n[t.charCodeAt(r + 2)] >> 2, f[l++] = e >> 8 & 255, f[l++] = 255 & e), f
                }, e.fromByteArray = function(t) {
                    for (var e, n = t.length, i = n % 3, o = [], a = 0, s = n - i; a < s; a += 16383) o.push(function(t, e, n) {
                        for (var i, o = [], a = e; a < n; a += 3) i = (t[a] << 16 & 0xff0000) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), o.push(r[i >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
                        return o.join("")
                    }(t, a, a + 16383 > s ? s : a + 16383));
                    return 1 === i ? o.push(r[(e = t[n - 1]) >> 2] + r[e << 4 & 63] + "==") : 2 === i && o.push(r[(e = (t[n - 2] << 8) + t[n - 1]) >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="), o.join("")
                };
                for (var r = [], n = [], i = "u" > typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, s = o.length; a < s; ++a) r[a] = o[a], n[o.charCodeAt(a)] = a;

                function u(t) {
                    var e = t.length;
                    if (e % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                    var r = t.indexOf("="); - 1 === r && (r = e);
                    var n = r === e ? 0 : 4 - r % 4;
                    return [r, n]
                }
                n[45] = 62, n[95] = 63
            },
            72: function(t, e, r) {
                "use strict";
                var n = r(675),
                    i = r(783),
                    o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

                function a(t) {
                    if (t > 0x7fffffff) throw RangeError('The value "' + t + '" is invalid for option "size"');
                    var e = new Uint8Array(t);
                    return Object.setPrototypeOf(e, s.prototype), e
                }

                function s(t, e, r) {
                    if ("number" == typeof t) {
                        if ("string" == typeof e) throw TypeError('The "string" argument must be of type string. Received type number');
                        return l(t)
                    }
                    return u(t, e, r)
                }

                function u(t, e, r) {
                    if ("string" == typeof t) {
                        var n = t,
                            i = e;
                        if (("string" != typeof i || "" === i) && (i = "utf8"), !s.isEncoding(i)) throw TypeError("Unknown encoding: " + i);
                        var o = 0 | p(n, i),
                            u = a(o),
                            f = u.write(n, i);
                        return f !== o && (u = u.slice(0, f)), u
                    }
                    if (ArrayBuffer.isView(t)) return c(t);
                    if (null == t) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                    if (L(t, ArrayBuffer) || t && L(t.buffer, ArrayBuffer) || "u" > typeof SharedArrayBuffer && (L(t, SharedArrayBuffer) || t && L(t.buffer, SharedArrayBuffer))) return function(t, e, r) {
                        var n;
                        if (e < 0 || t.byteLength < e) throw RangeError('"offset" is outside of buffer bounds');
                        if (t.byteLength < e + (r || 0)) throw RangeError('"length" is outside of buffer bounds');
                        return Object.setPrototypeOf(n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r), s.prototype), n
                    }(t, e, r);
                    if ("number" == typeof t) throw TypeError('The "value" argument must not be of type number. Received type number');
                    var l = t.valueOf && t.valueOf();
                    if (null != l && l !== t) return s.from(l, e, r);
                    var d = function(t) {
                        if (s.isBuffer(t)) {
                            var e = 0 | h(t.length),
                                r = a(e);
                            return 0 === r.length || t.copy(r, 0, 0, e), r
                        }
                        return void 0 !== t.length ? "number" != typeof t.length || function(t) {
                            return t != t
                        }(t.length) ? a(0) : c(t) : "Buffer" === t.type && Array.isArray(t.data) ? c(t.data) : void 0
                    }(t);
                    if (d) return d;
                    if ("u" > typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return s.from(t[Symbol.toPrimitive]("string"), e, r);
                    throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
                }

                function f(t) {
                    if ("number" != typeof t) throw TypeError('"size" argument must be of type number');
                    if (t < 0) throw RangeError('The value "' + t + '" is invalid for option "size"')
                }

                function l(t) {
                    return f(t), a(t < 0 ? 0 : 0 | h(t))
                }

                function c(t) {
                    for (var e = t.length < 0 ? 0 : 0 | h(t.length), r = a(e), n = 0; n < e; n += 1) r[n] = 255 & t[n];
                    return r
                }
                e.Buffer = s, e.SlowBuffer = function(t) {
                    return +t != t && (t = 0), s.alloc(+t)
                }, e.INSPECT_MAX_BYTES = 50, e.kMaxLength = 0x7fffffff, s.TYPED_ARRAY_SUPPORT = function() {
                    try {
                        var t = new Uint8Array(1),
                            e = {
                                foo: function() {
                                    return 42
                                }
                            };
                        return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
                    } catch (t) {
                        return !1
                    }
                }(), !s.TYPED_ARRAY_SUPPORT && "u" > typeof console && "function" == typeof console.error && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(s.prototype, "parent", {
                    enumerable: !0,
                    get: function() {
                        if (s.isBuffer(this)) return this.buffer
                    }
                }), Object.defineProperty(s.prototype, "offset", {
                    enumerable: !0,
                    get: function() {
                        if (s.isBuffer(this)) return this.byteOffset
                    }
                }), s.poolSize = 8192, s.from = function(t, e, r) {
                    return u(t, e, r)
                }, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array), s.alloc = function(t, e, r) {
                    return (f(t), t <= 0) ? a(t) : void 0 !== e ? "string" == typeof r ? a(t).fill(e, r) : a(t).fill(e) : a(t)
                }, s.allocUnsafe = function(t) {
                    return l(t)
                }, s.allocUnsafeSlow = function(t) {
                    return l(t)
                };

                function h(t) {
                    if (t >= 0x7fffffff) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                    return 0 | t
                }

                function p(t, e) {
                    if (s.isBuffer(t)) return t.length;
                    if (ArrayBuffer.isView(t) || L(t, ArrayBuffer)) return t.byteLength;
                    if ("string" != typeof t) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                    var r = t.length,
                        n = arguments.length > 2 && !0 === arguments[2];
                    if (!n && 0 === r) return 0;
                    for (var i = !1;;) switch (e) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return r;
                        case "utf8":
                        case "utf-8":
                            return S(t).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * r;
                        case "hex":
                            return r >>> 1;
                        case "base64":
                            return T(t).length;
                        default:
                            if (i) return n ? -1 : S(t).length;
                            e = ("" + e).toLowerCase(), i = !0
                    }
                }

                function d(t, e, r) {
                    var i, o, a, s = !1;
                    if ((void 0 === e || e < 0) && (e = 0), e > this.length || ((void 0 === r || r > this.length) && (r = this.length), r <= 0 || (r >>>= 0) <= (e >>>= 0))) return "";
                    for (t || (t = "utf8");;) switch (t) {
                        case "hex":
                            return function(t, e, r) {
                                var n = t.length;
                                (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                                for (var i = "", o = e; o < r; ++o) i += B[t[o]];
                                return i
                            }(this, e, r);
                        case "utf8":
                        case "utf-8":
                            return v(this, e, r);
                        case "ascii":
                            return function(t, e, r) {
                                var n = "";
                                r = Math.min(t.length, r);
                                for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
                                return n
                            }(this, e, r);
                        case "latin1":
                        case "binary":
                            return function(t, e, r) {
                                var n = "";
                                r = Math.min(t.length, r);
                                for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
                                return n
                            }(this, e, r);
                        case "base64":
                            return i = this, o = e, a = r, 0 === o && a === i.length ? n.fromByteArray(i) : n.fromByteArray(i.slice(o, a));
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return function(t, e, r) {
                                for (var n = t.slice(e, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                                return i
                            }(this, e, r);
                        default:
                            if (s) throw TypeError("Unknown encoding: " + t);
                            t = (t + "").toLowerCase(), s = !0
                    }
                }

                function y(t, e, r) {
                    var n = t[e];
                    t[e] = t[r], t[r] = n
                }

                function g(t, e, r, n, i) {
                    var o;
                    if (0 === t.length) return -1;
                    if ("string" == typeof r ? (n = r, r = 0) : r > 0x7fffffff ? r = 0x7fffffff : r < -0x80000000 && (r = -0x80000000), (o = r *= 1) != o && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length)
                        if (i) return -1;
                        else r = t.length - 1;
                    else if (r < 0)
                        if (!i) return -1;
                        else r = 0;
                    if ("string" == typeof e && (e = s.from(e, n)), s.isBuffer(e)) return 0 === e.length ? -1 : m(t, e, r, n, i);
                    if ("number" == typeof e) {
                        if (e &= 255, "function" == typeof Uint8Array.prototype.indexOf)
                            if (i) return Uint8Array.prototype.indexOf.call(t, e, r);
                            else return Uint8Array.prototype.lastIndexOf.call(t, e, r);
                        return m(t, [e], r, n, i)
                    }
                    throw TypeError("val must be string, number or Buffer")
                }

                function m(t, e, r, n, i) {
                    var o, a = 1,
                        s = t.length,
                        u = e.length;
                    if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                        if (t.length < 2 || e.length < 2) return -1;
                        a = 2, s /= 2, u /= 2, r /= 2
                    }

                    function f(t, e) {
                        return 1 === a ? t[e] : t.readUInt16BE(e * a)
                    }
                    if (i) {
                        var l = -1;
                        for (o = r; o < s; o++)
                            if (f(t, o) === f(e, -1 === l ? 0 : o - l)) {
                                if (-1 === l && (l = o), o - l + 1 === u) return l * a
                            } else - 1 !== l && (o -= o - l), l = -1
                    } else
                        for (r + u > s && (r = s - u), o = r; o >= 0; o--) {
                            for (var c = !0, h = 0; h < u; h++)
                                if (f(t, o + h) !== f(e, h)) {
                                    c = !1;
                                    break
                                } if (c) return o
                        }
                    return -1
                }
                s.isBuffer = function(t) {
                    return null != t && !0 === t._isBuffer && t !== s.prototype
                }, s.compare = function(t, e) {
                    if (L(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), L(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(t) || !s.isBuffer(e)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                    if (t === e) return 0;
                    for (var r = t.length, n = e.length, i = 0, o = Math.min(r, n); i < o; ++i)
                        if (t[i] !== e[i]) {
                            r = t[i], n = e[i];
                            break
                        } return r < n ? -1 : +(n < r)
                }, s.isEncoding = function(t) {
                    switch (String(t).toLowerCase()) {
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
                }, s.concat = function(t, e) {
                    if (!Array.isArray(t)) throw TypeError('"list" argument must be an Array of Buffers');
                    if (0 === t.length) return s.alloc(0);
                    if (void 0 === e)
                        for (r = 0, e = 0; r < t.length; ++r) e += t[r].length;
                    var r, n = s.allocUnsafe(e),
                        i = 0;
                    for (r = 0; r < t.length; ++r) {
                        var o = t[r];
                        if (L(o, Uint8Array) && (o = s.from(o)), !s.isBuffer(o)) throw TypeError('"list" argument must be an Array of Buffers');
                        o.copy(n, i), i += o.length
                    }
                    return n
                }, s.byteLength = p, s.prototype._isBuffer = !0, s.prototype.swap16 = function() {
                    var t = this.length;
                    if (t % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                    for (var e = 0; e < t; e += 2) y(this, e, e + 1);
                    return this
                }, s.prototype.swap32 = function() {
                    var t = this.length;
                    if (t % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                    for (var e = 0; e < t; e += 4) y(this, e, e + 3), y(this, e + 1, e + 2);
                    return this
                }, s.prototype.swap64 = function() {
                    var t = this.length;
                    if (t % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                    for (var e = 0; e < t; e += 8) y(this, e, e + 7), y(this, e + 1, e + 6), y(this, e + 2, e + 5), y(this, e + 3, e + 4);
                    return this
                }, s.prototype.toString = function() {
                    var t = this.length;
                    return 0 === t ? "" : 0 == arguments.length ? v(this, 0, t) : d.apply(this, arguments)
                }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(t) {
                    if (!s.isBuffer(t)) throw TypeError("Argument must be a Buffer");
                    return this === t || 0 === s.compare(this, t)
                }, s.prototype.inspect = function() {
                    var t = "",
                        r = e.INSPECT_MAX_BYTES;
                    return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">"
                }, o && (s.prototype[o] = s.prototype.inspect), s.prototype.compare = function(t, e, r, n, i) {
                    if (L(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(t)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                    if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length) throw RangeError("out of range index");
                    if (n >= i && e >= r) return 0;
                    if (n >= i) return -1;
                    if (e >= r) return 1;
                    if (e >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0, this === t) return 0;
                    for (var o = i - n, a = r - e, u = Math.min(o, a), f = this.slice(n, i), l = t.slice(e, r), c = 0; c < u; ++c)
                        if (f[c] !== l[c]) {
                            o = f[c], a = l[c];
                            break
                        } return o < a ? -1 : +(a < o)
                }, s.prototype.includes = function(t, e, r) {
                    return -1 !== this.indexOf(t, e, r)
                }, s.prototype.indexOf = function(t, e, r) {
                    return g(this, t, e, r, !0)
                }, s.prototype.lastIndexOf = function(t, e, r) {
                    return g(this, t, e, r, !1)
                };

                function v(t, e, r) {
                    r = Math.min(t.length, r);
                    for (var n = [], i = e; i < r;) {
                        var o, a, s, u, f = t[i],
                            l = null,
                            c = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1;
                        if (i + c <= r) switch (c) {
                            case 1:
                                f < 128 && (l = f);
                                break;
                            case 2:
                                (192 & (o = t[i + 1])) == 128 && (u = (31 & f) << 6 | 63 & o) > 127 && (l = u);
                                break;
                            case 3:
                                o = t[i + 1], a = t[i + 2], (192 & o) == 128 && (192 & a) == 128 && (u = (15 & f) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (u < 55296 || u > 57343) && (l = u);
                                break;
                            case 4:
                                o = t[i + 1], a = t[i + 2], s = t[i + 3], (192 & o) == 128 && (192 & a) == 128 && (192 & s) == 128 && (u = (15 & f) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && u < 1114112 && (l = u)
                        }
                        null === l ? (l = 65533, c = 1) : l > 65535 && (l -= 65536, n.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), n.push(l), i += c
                    }
                    var h = n,
                        p = h.length;
                    if (p <= 4096) return String.fromCharCode.apply(String, h);
                    for (var d = "", y = 0; y < p;) d += String.fromCharCode.apply(String, h.slice(y, y += 4096));
                    return d
                }

                function b(t, e, r) {
                    if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
                    if (t + e > r) throw RangeError("Trying to access beyond buffer length")
                }

                function w(t, e, r, n, i, o) {
                    if (!s.isBuffer(t)) throw TypeError('"buffer" argument must be a Buffer instance');
                    if (e > i || e < o) throw RangeError('"value" argument is out of bounds');
                    if (r + n > t.length) throw RangeError("Index out of range")
                }

                function x(t, e, r, n, i, o) {
                    if (r + n > t.length || r < 0) throw RangeError("Index out of range")
                }

                function A(t, e, r, n, o) {
                    return e *= 1, r >>>= 0, o || x(t, e, r, 4, 34028234663852886e22, -34028234663852886e22), i.write(t, e, r, n, 23, 4), r + 4
                }

                function E(t, e, r, n, o) {
                    return e *= 1, r >>>= 0, o || x(t, e, r, 8, 17976931348623157e292, -17976931348623157e292), i.write(t, e, r, n, 52, 8), r + 8
                }
                s.prototype.write = function(t, e, r, n) {
                    if (void 0 === e) n = "utf8", r = this.length, e = 0;
                    else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;
                    else if (isFinite(e)) e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
                    else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    var i, o, a, s, u, f, l, c, h = this.length - e;
                    if ((void 0 === r || r > h) && (r = h), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw RangeError("Attempt to write outside buffer bounds");
                    n || (n = "utf8");
                    for (var p = !1;;) switch (n) {
                        case "hex":
                            return function(t, e, r, n) {
                                r = Number(r) || 0;
                                var i = t.length - r;
                                n ? (n = Number(n)) > i && (n = i) : n = i;
                                var o = e.length;
                                n > o / 2 && (n = o / 2);
                                for (var a = 0; a < n; ++a) {
                                    var s, u = parseInt(e.substr(2 * a, 2), 16);
                                    if ((s = u) != s) break;
                                    t[r + a] = u
                                }
                                return a
                            }(this, t, e, r);
                        case "utf8":
                        case "utf-8":
                            return i = e, o = r, k(S(t, this.length - i), this, i, o);
                        case "ascii":
                            return a = e, s = r, k(M(t), this, a, s);
                        case "latin1":
                        case "binary":
                            return function(t, e, r, n) {
                                return k(M(e), t, r, n)
                            }(this, t, e, r);
                        case "base64":
                            return u = e, f = r, k(T(t), this, u, f);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return l = e, c = r, k(function(t, e) {
                                for (var r, n, i = [], o = 0; o < t.length && !((e -= 2) < 0); ++o) n = (r = t.charCodeAt(o)) >> 8, i.push(r % 256), i.push(n);
                                return i
                            }(t, this.length - l), this, l, c);
                        default:
                            if (p) throw TypeError("Unknown encoding: " + n);
                            n = ("" + n).toLowerCase(), p = !0
                    }
                }, s.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                }, s.prototype.slice = function(t, e) {
                    var r = this.length;
                    t = ~~t, e = void 0 === e ? r : ~~e, t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
                    var n = this.subarray(t, e);
                    return Object.setPrototypeOf(n, s.prototype), n
                }, s.prototype.readUIntLE = function(t, e, r) {
                    t >>>= 0, e >>>= 0, r || b(t, e, this.length);
                    for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i;
                    return n
                }, s.prototype.readUIntBE = function(t, e, r) {
                    t >>>= 0, e >>>= 0, r || b(t, e, this.length);
                    for (var n = this[t + --e], i = 1; e > 0 && (i *= 256);) n += this[t + --e] * i;
                    return n
                }, s.prototype.readUInt8 = function(t, e) {
                    return t >>>= 0, e || b(t, 1, this.length), this[t]
                }, s.prototype.readUInt16LE = function(t, e) {
                    return t >>>= 0, e || b(t, 2, this.length), this[t] | this[t + 1] << 8
                }, s.prototype.readUInt16BE = function(t, e) {
                    return t >>>= 0, e || b(t, 2, this.length), this[t] << 8 | this[t + 1]
                }, s.prototype.readUInt32LE = function(t, e) {
                    return t >>>= 0, e || b(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 0x1000000 * this[t + 3]
                }, s.prototype.readUInt32BE = function(t, e) {
                    return t >>>= 0, e || b(t, 4, this.length), 0x1000000 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                }, s.prototype.readIntLE = function(t, e, r) {
                    t >>>= 0, e >>>= 0, r || b(t, e, this.length);
                    for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i;
                    return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n
                }, s.prototype.readIntBE = function(t, e, r) {
                    t >>>= 0, e >>>= 0, r || b(t, e, this.length);
                    for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256);) o += this[t + --n] * i;
                    return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
                }, s.prototype.readInt8 = function(t, e) {
                    return (t >>>= 0, e || b(t, 1, this.length), 128 & this[t]) ? -((255 - this[t] + 1) * 1) : this[t]
                }, s.prototype.readInt16LE = function(t, e) {
                    t >>>= 0, e || b(t, 2, this.length);
                    var r = this[t] | this[t + 1] << 8;
                    return 32768 & r ? 0xffff0000 | r : r
                }, s.prototype.readInt16BE = function(t, e) {
                    t >>>= 0, e || b(t, 2, this.length);
                    var r = this[t + 1] | this[t] << 8;
                    return 32768 & r ? 0xffff0000 | r : r
                }, s.prototype.readInt32LE = function(t, e) {
                    return t >>>= 0, e || b(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                }, s.prototype.readInt32BE = function(t, e) {
                    return t >>>= 0, e || b(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                }, s.prototype.readFloatLE = function(t, e) {
                    return t >>>= 0, e || b(t, 4, this.length), i.read(this, t, !0, 23, 4)
                }, s.prototype.readFloatBE = function(t, e) {
                    return t >>>= 0, e || b(t, 4, this.length), i.read(this, t, !1, 23, 4)
                }, s.prototype.readDoubleLE = function(t, e) {
                    return t >>>= 0, e || b(t, 8, this.length), i.read(this, t, !0, 52, 8)
                }, s.prototype.readDoubleBE = function(t, e) {
                    return t >>>= 0, e || b(t, 8, this.length), i.read(this, t, !1, 52, 8)
                }, s.prototype.writeUIntLE = function(t, e, r, n) {
                    if (t *= 1, e >>>= 0, r >>>= 0, !n) {
                        var i = Math.pow(2, 8 * r) - 1;
                        w(this, t, e, r, i, 0)
                    }
                    var o = 1,
                        a = 0;
                    for (this[e] = 255 & t; ++a < r && (o *= 256);) this[e + a] = t / o & 255;
                    return e + r
                }, s.prototype.writeUIntBE = function(t, e, r, n) {
                    if (t *= 1, e >>>= 0, r >>>= 0, !n) {
                        var i = Math.pow(2, 8 * r) - 1;
                        w(this, t, e, r, i, 0)
                    }
                    var o = r - 1,
                        a = 1;
                    for (this[e + o] = 255 & t; --o >= 0 && (a *= 256);) this[e + o] = t / a & 255;
                    return e + r
                }, s.prototype.writeUInt8 = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
                }, s.prototype.writeUInt16LE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
                }, s.prototype.writeUInt16BE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
                }, s.prototype.writeUInt32LE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 4, 0xffffffff, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
                }, s.prototype.writeUInt32BE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 4, 0xffffffff, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
                }, s.prototype.writeIntLE = function(t, e, r, n) {
                    if (t *= 1, e >>>= 0, !n) {
                        var i = Math.pow(2, 8 * r - 1);
                        w(this, t, e, r, i - 1, -i)
                    }
                    var o = 0,
                        a = 1,
                        s = 0;
                    for (this[e] = 255 & t; ++o < r && (a *= 256);) t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1), this[e + o] = (t / a | 0) - s & 255;
                    return e + r
                }, s.prototype.writeIntBE = function(t, e, r, n) {
                    if (t *= 1, e >>>= 0, !n) {
                        var i = Math.pow(2, 8 * r - 1);
                        w(this, t, e, r, i - 1, -i)
                    }
                    var o = r - 1,
                        a = 1,
                        s = 0;
                    for (this[e + o] = 255 & t; --o >= 0 && (a *= 256);) t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1), this[e + o] = (t / a | 0) - s & 255;
                    return e + r
                }, s.prototype.writeInt8 = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
                }, s.prototype.writeInt16LE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
                }, s.prototype.writeInt16BE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
                }, s.prototype.writeInt32LE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 4, 0x7fffffff, -0x80000000), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
                }, s.prototype.writeInt32BE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 4, 0x7fffffff, -0x80000000), t < 0 && (t = 0xffffffff + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
                }, s.prototype.writeFloatLE = function(t, e, r) {
                    return A(this, t, e, !0, r)
                }, s.prototype.writeFloatBE = function(t, e, r) {
                    return A(this, t, e, !1, r)
                }, s.prototype.writeDoubleLE = function(t, e, r) {
                    return E(this, t, e, !0, r)
                }, s.prototype.writeDoubleBE = function(t, e, r) {
                    return E(this, t, e, !1, r)
                }, s.prototype.copy = function(t, e, r, n) {
                    if (!s.isBuffer(t)) throw TypeError("argument should be a Buffer");
                    if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r || 0 === t.length || 0 === this.length) return 0;
                    if (e < 0) throw RangeError("targetStart out of bounds");
                    if (r < 0 || r >= this.length) throw RangeError("Index out of range");
                    if (n < 0) throw RangeError("sourceEnd out of bounds");
                    n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
                    var i = n - r;
                    if (this === t && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(e, r, n);
                    else if (this === t && r < e && e < n)
                        for (var o = i - 1; o >= 0; --o) t[o + e] = this[o + r];
                    else Uint8Array.prototype.set.call(t, this.subarray(r, n), e);
                    return i
                }, s.prototype.fill = function(t, e, r, n) {
                    if ("string" == typeof t) {
                        if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw TypeError("encoding must be a string");
                        if ("string" == typeof n && !s.isEncoding(n)) throw TypeError("Unknown encoding: " + n);
                        if (1 === t.length) {
                            var i, o = t.charCodeAt(0);
                            ("utf8" === n && o < 128 || "latin1" === n) && (t = o)
                        }
                    } else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
                    if (e < 0 || this.length < e || this.length < r) throw RangeError("Out of range index");
                    if (r <= e) return this;
                    if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t)
                        for (i = e; i < r; ++i) this[i] = t;
                    else {
                        var a = s.isBuffer(t) ? t : s.from(t, n),
                            u = a.length;
                        if (0 === u) throw TypeError('The value "' + t + '" is invalid for argument "value"');
                        for (i = 0; i < r - e; ++i) this[i + e] = a[i % u]
                    }
                    return this
                };
                var C = /[^+/0-9A-Za-z-_]/g;

                function S(t, e) {
                    e = e || 1 / 0;
                    for (var r, n = t.length, i = null, o = [], a = 0; a < n; ++a) {
                        if ((r = t.charCodeAt(a)) > 55295 && r < 57344) {
                            if (!i) {
                                if (r > 56319 || a + 1 === n) {
                                    (e -= 3) > -1 && o.push(239, 191, 189);
                                    continue
                                }
                                i = r;
                                continue
                            }
                            if (r < 56320) {
                                (e -= 3) > -1 && o.push(239, 191, 189), i = r;
                                continue
                            }
                            r = (i - 55296 << 10 | r - 56320) + 65536
                        } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                        if (i = null, r < 128) {
                            if ((e -= 1) < 0) break;
                            o.push(r)
                        } else if (r < 2048) {
                            if ((e -= 2) < 0) break;
                            o.push(r >> 6 | 192, 63 & r | 128)
                        } else if (r < 65536) {
                            if ((e -= 3) < 0) break;
                            o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                        } else if (r < 1114112) {
                            if ((e -= 4) < 0) break;
                            o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                        } else throw Error("Invalid code point")
                    }
                    return o
                }

                function M(t) {
                    for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                    return e
                }

                function T(t) {
                    return n.toByteArray(function(t) {
                        if ((t = (t = t.split("=")[0]).trim().replace(C, "")).length < 2) return "";
                        for (; t.length % 4 != 0;) t += "=";
                        return t
                    }(t))
                }

                function k(t, e, r, n) {
                    for (var i = 0; i < n && !(i + r >= e.length) && !(i >= t.length); ++i) e[i + r] = t[i];
                    return i
                }

                function L(t, e) {
                    return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
                }
                var B = function() {
                    for (var t = "0123456789abcdef", e = Array(256), r = 0; r < 16; ++r)
                        for (var n = 16 * r, i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
                    return e
                }()
            },
            783: function(t, e) {
                e.read = function(t, e, r, n, i) {
                    var o, a, s = 8 * i - n - 1,
                        u = (1 << s) - 1,
                        f = u >> 1,
                        l = -7,
                        c = r ? i - 1 : 0,
                        h = r ? -1 : 1,
                        p = t[e + c];
                    for (c += h, o = p & (1 << -l) - 1, p >>= -l, l += s; l > 0; o = 256 * o + t[e + c], c += h, l -= 8);
                    for (a = o & (1 << -l) - 1, o >>= -l, l += n; l > 0; a = 256 * a + t[e + c], c += h, l -= 8);
                    if (0 === o) o = 1 - f;
                    else {
                        if (o === u) return a ? NaN : 1 / 0 * (p ? -1 : 1);
                        a += Math.pow(2, n), o -= f
                    }
                    return (p ? -1 : 1) * a * Math.pow(2, o - n)
                }, e.write = function(t, e, r, n, i, o) {
                    var a, s, u, f = 8 * o - i - 1,
                        l = (1 << f) - 1,
                        c = l >> 1,
                        h = 5960464477539062e-23 * (23 === i),
                        p = n ? 0 : o - 1,
                        d = n ? 1 : -1,
                        y = +(e < 0 || 0 === e && 1 / e < 0);
                    for (isNaN(e = Math.abs(e)) || e === 1 / 0 ? (s = +!!isNaN(e), a = l) : (a = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), a + c >= 1 ? e += h / u : e += h * Math.pow(2, 1 - c), e * u >= 2 && (a++, u /= 2), a + c >= l ? (s = 0, a = l) : a + c >= 1 ? (s = (e * u - 1) * Math.pow(2, i), a += c) : (s = e * Math.pow(2, c - 1) * Math.pow(2, i), a = 0)); i >= 8; t[r + p] = 255 & s, p += d, s /= 256, i -= 8);
                    for (a = a << i | s, f += i; f > 0; t[r + p] = 255 & a, p += d, a /= 256, f -= 8);
                    t[r + p - d] |= 128 * y
                }
            }
        },
        i = {};

    function o(t) {
        var e = i[t];
        if (void 0 !== e) return e.exports;
        var r = i[t] = {
                exports: {}
            },
            a = !0;
        try {
            n[t](r, r.exports, o), a = !1
        } finally {
            a && delete i[t]
        }
        return r.exports
    }
    o.ab = "/ROOT/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@playwright+test@1.61.1_babel-p_796ef0dfc3422f91e6a090c40d5cf9e8/node_modules/next/dist/compiled/buffer/", e.exports = o(72)
}, 740041, t => {
    "use strict";
    let e = {
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
    t.s(["defaultLocale", 0, "en", "localePrefix", 0, "as-needed", "localeToIETFTag", 0, e, "locales", 0, ["en", "fr", "es", "de", "pt", "ru", "cn", "ja", "kr"], "oneTrustLocaleOverrides", 0, e])
}, 494004, 876009, t => {
    "use strict";
    let e = {
            current: null
        },
        r = {
            current: !1
        };
    t.s(["hasReducedMotionListener", 0, r, "prefersReducedMotion", 0, e], 876009);
    let n = "u" > typeof window;
    t.s(["initPrefersReducedMotion", 0, function() {
        if (r.current = !0, n)
            if (window.matchMedia) {
                let t = window.matchMedia("(prefers-reduced-motion)"),
                    r = () => e.current = t.matches;
                t.addEventListener("change", r), r()
            } else e.current = !1
    }], 494004)
}, 513038, t => {
    "use strict";
    t.s(["resolveElements", 0, function(t, e, r) {
        if (null == t) return [];
        if (t instanceof EventTarget) return [t];
        if ("string" == typeof t) {
            let n = document;
            e && (n = e.current);
            let i = r?.[t] ?? n.querySelectorAll(t);
            return i ? Array.from(i) : []
        }
        return Array.from(t).filter(t => null != t)
    }])
}, 731268, t => {
    "use strict";
    let e = (0, t.i(499531).createContext)({
        strict: !1
    });
    t.s(["LazyContext", 0, e])
}, 481522, t => {
    "use strict";
    let e = (0, t.i(499531).createContext)({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
    });
    t.s(["MotionConfigContext", 0, e])
}, 570606, t => {
    "use strict";
    var e, r, n = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        i = (e = function(t) {
            return n.test(t) || 111 === t.charCodeAt(0) && 110 === t.charCodeAt(1) && 91 > t.charCodeAt(2)
        }, r = Object.create(null), function(t) {
            return void 0 === r[t] && (r[t] = e(t)), r[t]
        });
    t.s(["default", 0, i], 570606)
}, 428483, 466327, 668087, 297953, 782555, 246373, t => {
    "use strict";
    var e, r = t.i(499531);
    let n = (0, r.createContext)({});
    t.s(["MotionContext", 0, n], 428483);
    var i = t.i(587377),
        o = t.i(653425);

    function a(t) {
        return Array.isArray(t) ? t.join(" ") : t
    }
    t.s(["useCreateMotionContext", 0, function(t) {
        let {
            initial: e,
            animate: s
        } = function(t, e) {
            if ((0, i.isControllingVariants)(t)) {
                let {
                    initial: e,
                    animate: r
                } = t;
                return {
                    initial: !1 === e || (0, o.isVariantLabel)(e) ? e : void 0,
                    animate: (0, o.isVariantLabel)(r) ? r : void 0
                }
            }
            return !1 !== t.inherit ? e : {}
        }(t, (0, r.useContext)(n));
        return (0, r.useMemo)(() => ({
            initial: e,
            animate: s
        }), [a(e), a(s)])
    }], 466327);
    var s = t.i(140926),
        u = t.i(880925),
        f = t.i(493559);
    let l = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    });

    function c(t, e, r) {
        for (let n in e)(0, s.isMotionValue)(e[n]) || (0, u.isForcedMotionValue)(n, r) || (t[n] = e[n])
    }
    t.s(["createHtmlRenderState", 0, l], 668087);
    var h = t.i(734225),
        p = t.i(997214);
    let d = () => ({
        ...l(),
        attrs: {}
    });
    t.s(["createSvgRenderState", 0, d], 297953);
    let y = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);

    function g(t) {
        return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || y.has(t)
    }
    let m = t => !g(t);
    try {
        e = t.r(570606).default, "function" == typeof e && (m = t => t.startsWith("on") ? !g(t) : e(t))
    } catch {}
    var v = t.i(737328);
    t.s(["useRender", 0, function(t, e, n, {
        latestValues: i
    }, o, a = !1, u) {
        let y = (u ?? (0, v.isSVGComponent)(t) ? function(t, e, n, i) {
                let o = (0, r.useMemo)(() => {
                    let r = d();
                    return (0, h.buildSVGAttrs)(r, e, (0, p.isSVGTag)(i), t.transformTemplate, t.style), {
                        ...r.attrs,
                        style: {
                            ...r.style
                        }
                    }
                }, [e]);
                if (t.style) {
                    let e = {};
                    c(e, t.style, t), o.style = {
                        ...e,
                        ...o.style
                    }
                }
                return o
            } : function(t, e) {
                let n, i, o = {},
                    a = (n = t.style || {}, c(i = {}, n, t), Object.assign(i, function({
                        transformTemplate: t
                    }, e) {
                        return (0, r.useMemo)(() => {
                            let r = l();
                            return (0, f.buildHTMLStyles)(r, e, t), Object.assign({}, r.vars, r.style)
                        }, [e])
                    }(t, e)), i);
                return t.drag && !1 !== t.dragListener && (o.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (o.tabIndex = 0), o.style = a, o
            })(e, i, o, t),
            b = function(t, e, r) {
                let n = {};
                for (let i in t)("values" !== i || "object" != typeof t.values) && !(0, s.isMotionValue)(t[i]) && (m(i) || !0 === r && g(i) || !e && !g(i) || t.draggable && i.startsWith("onDrag")) && (n[i] = t[i]);
                return n
            }(e, "string" == typeof t, a),
            w = t !== r.Fragment ? {
                ...b,
                ...y,
                ref: n
            } : {},
            {
                children: x
            } = e,
            A = (0, r.useMemo)(() => (0, s.isMotionValue)(x) ? x.get() : x, [x]);
        return (0, r.createElement)(t, {
            ...w,
            children: A
        })
    }], 782555);
    var b = t.i(268162);
    t.s(["scrapeHTMLMotionValuesFromProps", () => b.scrapeMotionValuesFromProps], 246373)
}, 416007, t => {
    "use strict";
    var e = t.i(499531);
    t.s(["useConstant", 0, function(t) {
        let r = (0, e.useRef)(null);
        return null === r.current && (r.current = t()), r.current
    }])
}, 855096, 230548, 442647, 626022, 730324, 989867, t => {
    "use strict";
    var e = t.i(246373),
        r = t.i(766438),
        n = t.i(587377),
        i = t.i(819673),
        o = t.i(923792),
        a = t.i(499531),
        s = t.i(428483),
        u = t.i(820847),
        f = t.i(416007);
    let l = t => (e, l) => {
        let c = (0, a.useContext)(s.MotionContext),
            h = (0, a.useContext)(u.PresenceContext),
            p = () => (function({
                scrapeMotionValuesFromProps: t,
                createRenderState: e
            }, a, s, u) {
                return {
                    latestValues: function(t, e, a, s) {
                        let u = {},
                            f = s(t, {});
                        for (let t in f) u[t] = (0, r.resolveMotionValue)(f[t]);
                        let {
                            initial: l,
                            animate: c
                        } = t, h = (0, n.isControllingVariants)(t), p = (0, n.isVariantNode)(t);
                        e && p && !h && !1 !== t.inherit && (void 0 === l && (l = e.initial), void 0 === c && (c = e.animate));
                        let d = !!a && !1 === a.initial,
                            y = (d = d || !1 === l) ? c : l;
                        if (y && "boolean" != typeof y && !(0, i.isAnimationControls)(y)) {
                            let e = Array.isArray(y) ? y : [y];
                            for (let r = 0; r < e.length; r++) {
                                let n = (0, o.resolveVariantFromProps)(t, e[r]);
                                if (n) {
                                    let {
                                        transitionEnd: t,
                                        transition: e,
                                        ...r
                                    } = n;
                                    for (let t in r) {
                                        let e = r[t];
                                        if (Array.isArray(e)) {
                                            let t = d ? e.length - 1 : 0;
                                            e = e[t]
                                        }
                                        null !== e && (u[t] = e)
                                    }
                                    for (let e in t) u[e] = t[e]
                                }
                            }
                        }
                        return u
                    }(a, s, u, t),
                    renderState: e()
                }
            })(t, e, c, h);
        return l ? p() : (0, f.useConstant)(p)
    };
    var c = t.i(668087);
    let h = l({
        scrapeMotionValuesFromProps: e.scrapeHTMLMotionValuesFromProps,
        createRenderState: c.createHtmlRenderState
    });
    t.s(["useHTMLVisualState", 0, h], 855096);
    var p = t.i(185747),
        p = p,
        d = t.i(297953);
    let y = l({
        scrapeMotionValuesFromProps: p.scrapeMotionValuesFromProps,
        createRenderState: d.createSvgRenderState
    });
    t.s(["useSVGVisualState", 0, y], 230548);
    var g = t.i(453311);
    let m = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        },
        v = !1;

    function b() {
        return ! function() {
            if (v) return;
            let t = {};
            for (let e in m) t[e] = {
                isEnabled: t => m[e].some(e => !!t[e])
            };
            (0, g.setFeatureDefinitions)(t), v = !0
        }(), (0, g.getFeatureDefinitions)()
    }
    t.s(["getInitializedFeatureDefinitions", 0, b], 442647), t.s(["loadFeatures", 0, function(t) {
        let e = b();
        for (let r in t) e[r] = {
            ...e[r],
            ...t[r]
        };
        (0, g.setFeatureDefinitions)(e)
    }], 626022);
    let w = Symbol.for("motionComponentSymbol");
    t.s(["motionComponentSymbol", 0, w], 730324), t.s(["useMotionRef", 0, function(t, e, r) {
        let n = (0, a.useRef)(r);
        (0, a.useInsertionEffect)(() => {
            n.current = r
        });
        let i = (0, a.useRef)(null);
        return (0, a.useCallback)(r => {
            r && t.onMount?.(r), e && (r ? e.mount(r) : e.unmount());
            let o = n.current;
            if ("function" == typeof o)
                if (r) {
                    let t = o(r);
                    "function" == typeof t && (i.current = t)
                } else i.current ? (i.current(), i.current = null) : o(r);
            else o && (o.current = r)
        }, [e])
    }], 989867)
}, 129766, t => {
    "use strict";
    var e = t.i(499531);
    let r = "u" > typeof window ? e.useLayoutEffect : e.useEffect;
    t.s(["useIsomorphicLayoutEffect", 0, r], 129766)
}, 926993, 319623, t => {
    "use strict";
    var e = t.i(296305);
    t.i(203217);
    var r = t.i(14666),
        n = t.i(499531),
        i = t.i(963864),
        o = t.i(731268),
        a = t.i(481522),
        s = t.i(428483),
        u = t.i(466327),
        f = t.i(782555),
        l = t.i(737328),
        c = t.i(855096),
        h = t.i(230548),
        p = t.i(442647),
        d = t.i(626022),
        y = t.i(730324),
        g = t.i(989867),
        m = t.i(182526),
        v = t.i(820847),
        b = t.i(210907),
        w = t.i(112366),
        x = t.i(129766);

    function A(t, {
        forwardMotionProps: e = !1,
        type: E
    } = {}, C, S) {
        C && (0, d.loadFeatures)(C);
        let M = E ? "svg" === E : (0, l.isSVGComponent)(t),
            T = M ? h.useSVGVisualState : c.useHTMLVisualState;

        function k(l, c) {
            let h, d = {
                    ...(0, n.useContext)(a.MotionConfigContext),
                    ...l,
                    layoutId: function({
                        layoutId: t
                    }) {
                        let e = (0, n.useContext)(i.LayoutGroupContext).id;
                        return e && void 0 !== t ? e + "-" + t : t
                    }(l)
                },
                {
                    isStatic: y
                } = d,
                A = (0, u.useCreateMotionContext)(l),
                E = T(l, y);
            if (!y && "u" > typeof window) {
                (0, n.useContext)(o.LazyContext).strict;
                let e = function(t) {
                    let {
                        drag: e,
                        layout: r
                    } = (0, p.getInitializedFeatureDefinitions)();
                    if (!e && !r) return {};
                    let n = {
                        ...e,
                        ...r
                    };
                    return {
                        MeasureLayout: e?.isEnabled(t) || r?.isEnabled(t) ? n.MeasureLayout : void 0,
                        ProjectionNode: n.ProjectionNode
                    }
                }(d);
                h = e.MeasureLayout, A.visualElement = function(t, e, r, i, u, f) {
                    let {
                        visualElement: l
                    } = (0, n.useContext)(s.MotionContext), c = (0, n.useContext)(o.LazyContext), h = (0, n.useContext)(v.PresenceContext), p = (0, n.useContext)(a.MotionConfigContext), d = p.reducedMotion, y = p.skipAnimations, g = (0, n.useRef)(null), A = (0, n.useRef)(!1);
                    i = i || c.renderer, !g.current && i && (g.current = i(t, {
                        visualState: e,
                        parent: l,
                        props: r,
                        presenceContext: h,
                        blockInitialAnimation: !!h && !1 === h.initial,
                        reducedMotionConfig: d,
                        skipAnimations: y,
                        isSVG: f
                    }), A.current && g.current && (g.current.manuallyAnimateOnMount = !0));
                    let E = g.current,
                        C = (0, n.useContext)(b.SwitchLayoutGroupContext);
                    E && !E.projection && u && ("html" === E.type || "svg" === E.type) && function(t, e, r, n) {
                        let {
                            layoutId: i,
                            layout: o,
                            drag: a,
                            dragConstraints: s,
                            layoutScroll: u,
                            layoutRoot: f,
                            layoutAnchor: l,
                            layoutCrossfade: c
                        } = e;
                        t.projection = new r(t.latestValues, e["data-framer-portal-id"] ? void 0 : function t(e) {
                            if (e) return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                        }(t.parent)), t.projection.setOptions({
                            layoutId: i,
                            layout: o,
                            alwaysMeasureLayout: !!a || s && (0, w.isRefObject)(s),
                            visualElement: t,
                            animationType: "string" == typeof o ? o : "both",
                            initialPromotionConfig: n,
                            crossfade: c,
                            layoutScroll: u,
                            layoutRoot: f,
                            layoutAnchor: l
                        })
                    }(g.current, r, u, C);
                    let S = (0, n.useRef)(!1);
                    (0, n.useInsertionEffect)(() => {
                        E && S.current && E.update(r, h)
                    });
                    let M = r[m.optimizedAppearDataAttribute],
                        T = (0, n.useRef)(!!M && "u" > typeof window && !window.MotionHandoffIsComplete?.(M) && window.MotionHasOptimisedAnimation?.(M));
                    return (0, x.useIsomorphicLayoutEffect)(() => {
                        A.current = !0, E && (S.current = !0, window.MotionIsMounted = !0, E.updateFeatures(), E.scheduleRenderMicrotask(), T.current && E.animationState && E.animationState.animateChanges())
                    }), (0, n.useEffect)(() => {
                        E && (!T.current && E.animationState && E.animationState.animateChanges(), T.current && (queueMicrotask(() => {
                            window.MotionHandoffMarkAsComplete?.(M)
                        }), T.current = !1), E.enteringChildren = void 0)
                    }), E
                }(t, E, d, S, e.ProjectionNode, M)
            }
            return (0, r.jsxs)(s.MotionContext.Provider, {
                value: A,
                children: [h && A.visualElement ? (0, r.jsx)(h, {
                    visualElement: A.visualElement,
                    ...d
                }) : null, (0, f.useRender)(t, l, (0, g.useMotionRef)(E, A.visualElement, c), E, y, e, M)]
            })
        }
        k.displayName = `motion.${"string"==typeof t?t:`create(${t.displayName??t.name??""})`}`;
        let L = (0, n.forwardRef)(k);
        return L[y.motionComponentSymbol] = t, L
    }

    function E(t, e) {
        if ("u" < typeof Proxy) return A;
        let r = new Map,
            n = (r, n) => A(r, n, t, e);
        return new Proxy((t, e) => n(t, e), {
            get: (i, o) => "create" === o ? n : (r.has(o) || r.set(o, A(o, void 0, t, e)), r.get(o))
        })
    }
    t.s(["createMotionComponent", 0, A], 319623);
    var C = t.i(263422),
        S = t.i(948395),
        M = t.i(159313),
        T = t.i(596995);
    let k = E({
            ...C.animations,
            ...M.gestureAnimations,
            ...S.drag,
            ...T.layout
        }, e.createDomVisualElement),
        L = E();
    t.s(["m", 0, L, "motion", 0, k], 926993)
}, 305892, t => {
    "use strict";
    var e = t.i(14666),
        r = t.i(499531),
        n = t.i(731268),
        i = t.i(626022);

    function o(t) {
        return "function" == typeof t
    }
    t.s(["LazyMotion", 0, function({
        children: t,
        features: a,
        strict: s = !1
    }) {
        let [, u] = (0, r.useState)(!o(a)), f = (0, r.useRef)(void 0);
        if (!o(a)) {
            let {
                renderer: t,
                ...e
            } = a;
            f.current = t, (0, i.loadFeatures)(e)
        }
        return (0, r.useEffect)(() => {
            o(a) && a().then(({
                renderer: t,
                ...e
            }) => {
                (0, i.loadFeatures)(e), f.current = t, u(!0)
            })
        }, []), (0, e.jsx)(n.LazyContext.Provider, {
            value: {
                renderer: f.current,
                strict: s
            },
            children: t
        })
    }])
}, 600634, t => {
    "use strict";
    var e = t.i(14666),
        r = t.i(305892);
    let n = () => t.A(337752).then(t => t.default);
    t.s(["default", 0, ({
        children: t
    }) => (0, e.jsx)(r.LazyMotion, {
        features: n,
        strict: !0,
        children: t
    })])
}, 766930, 777137, t => {
    "use strict";
    var e = t.i(600634),
        r = t.i(14666),
        n = t.i(305892);
    let i = () => t.A(734013).then(t => t.default);
    t.s(["default", 0, ({
        children: t
    }) => (0, r.jsx)(n.LazyMotion, {
        features: i,
        strict: !0,
        children: t
    })], 777137);
    let o = e.default;
    t.s(["default", 0, o], 766930)
}, 7075, t => {
    "use strict";
    var e = t.i(445734),
        r = t.i(740041);
    let {
        Link: n,
        redirect: i,
        usePathname: o,
        useRouter: a
    } = (0, e.createNavigation)({
        locales: r.locales,
        localePrefix: r.localePrefix,
        defaultLocale: r.defaultLocale
    });
    t.s(["Link", 0, n, "usePathname", 0, o])
}]);