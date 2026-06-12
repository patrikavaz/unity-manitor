(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 824627, t => {
    "use strict";
    var e = function(t, r) {
            return (e = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
            })(t, r)
        },
        r = function() {
            return (r = Object.assign || function(t) {
                for (var e, r = 1, i = arguments.length; r < i; r++)
                    for (var a in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                return t
            }).apply(this, arguments)
        };

    function i(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            i = 0;
        if (r) return r.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && i >= t.length && (t = void 0), {
                    value: t && t[i++],
                    done: !t
                }
            }
        };
        throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function a(t) {
        return this instanceof a ? (this.v = t, this) : new a(t)
    }
    "function" == typeof SuppressedError && SuppressedError, t.s(["__assign", () => r, "__asyncGenerator", 0, function(t, e, r) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var i, n = r.apply(t, e || []),
            o = [];
        return i = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), l("next"), l("throw"), l("return", function(t) {
            return function(e) {
                return Promise.resolve(e).then(t, d)
            }
        }), i[Symbol.asyncIterator] = function() {
            return this
        }, i;

        function l(t, e) {
            n[t] && (i[t] = function(e) {
                return new Promise(function(r, i) {
                    o.push([t, e, r, i]) > 1 || s(t, e)
                })
            }, e && (i[t] = e(i[t])))
        }

        function s(t, e) {
            try {
                var r;
                (r = n[t](e)).value instanceof a ? Promise.resolve(r.value.v).then(c, d) : u(o[0][2], r)
            } catch (t) {
                u(o[0][3], t)
            }
        }

        function c(t) {
            s("next", t)
        }

        function d(t) {
            s("throw", t)
        }

        function u(t, e) {
            t(e), o.shift(), o.length && s(o[0][0], o[0][1])
        }
    }, "__asyncValues", 0, function(t) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var e, r = t[Symbol.asyncIterator];
        return r ? r.call(t) : (t = i(t), e = {}, a("next"), a("throw"), a("return"), e[Symbol.asyncIterator] = function() {
            return this
        }, e);

        function a(r) {
            e[r] = t[r] && function(e) {
                return new Promise(function(i, a) {
                    var n, o, l;
                    n = i, o = a, l = (e = t[r](e)).done, Promise.resolve(e.value).then(function(t) {
                        n({
                            value: t,
                            done: l
                        })
                    }, o)
                })
            }
        }
    }, "__await", 0, a, "__awaiter", 0, function(t, e, r, i) {
        return new(r || (r = Promise))(function(a, n) {
            function o(t) {
                try {
                    s(i.next(t))
                } catch (t) {
                    n(t)
                }
            }

            function l(t) {
                try {
                    s(i.throw(t))
                } catch (t) {
                    n(t)
                }
            }

            function s(t) {
                var e;
                t.done ? a(t.value) : ((e = t.value) instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(o, l)
            }
            s((i = i.apply(t, e || [])).next())
        })
    }, "__extends", 0, function(t, r) {
        if ("function" != typeof r && null !== r) throw TypeError("Class extends value " + String(r) + " is not a constructor or null");

        function i() {
            this.constructor = t
        }
        e(t, r), t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
    }, "__generator", 0, function(t, e) {
        var r, i, a, n = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            },
            o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return o.next = l(0), o.throw = l(1), o.return = l(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function l(l) {
            return function(s) {
                var c = [l, s];
                if (r) throw TypeError("Generator is already executing.");
                for (; o && (o = 0, c[0] && (n = 0)), n;) try {
                    if (r = 1, i && (a = 2 & c[0] ? i.return : c[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, c[1])).done) return a;
                    switch (i = 0, a && (c = [2 & c[0], a.value]), c[0]) {
                        case 0:
                        case 1:
                            a = c;
                            break;
                        case 4:
                            return n.label++, {
                                value: c[1],
                                done: !1
                            };
                        case 5:
                            n.label++, i = c[1], c = [0];
                            continue;
                        case 7:
                            c = n.ops.pop(), n.trys.pop();
                            continue;
                        default:
                            if (!(a = (a = n.trys).length > 0 && a[a.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                n = 0;
                                continue
                            }
                            if (3 === c[0] && (!a || c[1] > a[0] && c[1] < a[3])) {
                                n.label = c[1];
                                break
                            }
                            if (6 === c[0] && n.label < a[1]) {
                                n.label = a[1], a = c;
                                break
                            }
                            if (a && n.label < a[2]) {
                                n.label = a[2], n.ops.push(c);
                                break
                            }
                            a[2] && n.ops.pop(), n.trys.pop();
                            continue
                    }
                    c = e.call(t, n)
                } catch (t) {
                    c = [6, t], i = 0
                } finally {
                    r = a = 0
                }
                if (5 & c[0]) throw c[1];
                return {
                    value: c[0] ? c[1] : void 0,
                    done: !0
                }
            }
        }
    }, "__read", 0, function(t, e) {
        var r = "function" == typeof Symbol && t[Symbol.iterator];
        if (!r) return t;
        var i, a, n = r.call(t),
            o = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(i = n.next()).done;) o.push(i.value)
        } catch (t) {
            a = {
                error: t
            }
        } finally {
            try {
                i && !i.done && (r = n.return) && r.call(n)
            } finally {
                if (a) throw a.error
            }
        }
        return o
    }, "__rest", 0, function(t, e) {
        var r = {};
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && 0 > e.indexOf(i) && (r[i] = t[i]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols)
            for (var a = 0, i = Object.getOwnPropertySymbols(t); a < i.length; a++) 0 > e.indexOf(i[a]) && Object.prototype.propertyIsEnumerable.call(t, i[a]) && (r[i[a]] = t[i[a]]);
        return r
    }, "__spreadArray", 0, function(t, e, r) {
        if (r || 2 == arguments.length)
            for (var i, a = 0, n = e.length; a < n; a++) !i && a in e || (i || (i = Array.prototype.slice.call(e, 0, a)), i[a] = e[a]);
        return t.concat(i || Array.prototype.slice.call(e))
    }, "__values", 0, i])
}, 583796, t => {
    "use strict";
    var e = {
            0: 8203,
            1: 8204,
            2: 8205,
            3: 8290,
            4: 8291,
            5: 8288,
            6: 65279,
            7: 8289,
            8: 119155,
            9: 119156,
            a: 119157,
            b: 119158,
            c: 119159,
            d: 119160,
            e: 119161,
            f: 119162
        },
        r = {
            0: 8203,
            1: 8204,
            2: 8205,
            3: 65279
        },
        i = [, , , , ].fill(String.fromCodePoint(r[0])).join("");
    Object.fromEntries(Object.entries(r).map(t => t.reverse())), Object.fromEntries(Object.entries(e).map(t => t.reverse()));
    var a = `${Object.values(e).map(t=>`\\u{${t.toString(16)}}`).join("")}`,
        n = RegExp(`[${a}]{4,}`, "gu");
    t.s(["C", 0, function(t, e, a = "auto") {
        let n;
        return !0 === a || "auto" === a && (!(!Number.isNaN(Number(t)) || /[a-z]/i.test(t) && !/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(t)) && Date.parse(t) || function(t) {
            try {
                new URL(t, t.startsWith("/") ? "https://acme.com" : void 0)
            } catch {
                return !1
            }
            return !0
        }(t)) ? t : `${t}${n=JSON.stringify(e),`${i}${Array.from(n).map(t=>{let e=t.charCodeAt(0);if(e>255)throw Error(`Only ASCII edit info can be encoded. Error attempting to encode ${n} on character ${t} (${e})`);return Array.from(e.toString(4).padStart(4,"0")).map(t=>String.fromCodePoint(r[t])).join("")}).join("")}`}`
    }, "isRecord", 0, function(t) {
        return "object" == typeof t && null !== t && !Array.isArray(t)
    }, "stegaClean", 0, function(t) {
        var e, r;
        return t && JSON.parse({
            cleaned: (e = JSON.stringify(t)).replace(n, ""),
            encoded: (null == (r = e.match(n)) ? void 0 : r[0]) || ""
        }.cleaned)
    }])
}, 477846, (t, e, r) => {
    t.e, e.exports = function() {
        function t(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, i = Array(e); r < e; r++) i[r] = t[r];
            return i
        }

        function e() {
            return (e = Object.assign.bind()).apply(null, arguments)
        }
        var r = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";

        function i(t) {
            return ("image-" + t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/, "-$1")
        }
        var a = [
                ["width", "w"],
                ["height", "h"],
                ["format", "fm"],
                ["download", "dl"],
                ["blur", "blur"],
                ["sharpen", "sharp"],
                ["invert", "invert"],
                ["orientation", "or"],
                ["minHeight", "min-h"],
                ["maxHeight", "max-h"],
                ["minWidth", "min-w"],
                ["maxWidth", "max-w"],
                ["quality", "q"],
                ["fit", "fit"],
                ["crop", "crop"],
                ["saturation", "sat"],
                ["auto", "auto"],
                ["dpr", "dpr"],
                ["pad", "pad"],
                ["frame", "frame"]
            ],
            n = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
            o = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"],
            l = ["format"],
            s = function() {
                function s(t, r) {
                    this.options = void 0, this.options = t ? e({}, t.options || {}, r || {}) : e({}, r || {})
                }
                var c = s.prototype;
                return c.withOptions = function(r) {
                    var i = r.baseUrl || this.options.baseUrl,
                        n = {
                            baseUrl: i
                        };
                    for (var o in r) r.hasOwnProperty(o) && (n[function(e) {
                        for (var r, i = function(e) {
                                var r = "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (r) return (r = r.call(e)).next.bind(r);
                                if (Array.isArray(e) || (r = function(e) {
                                        if (e) {
                                            if ("string" == typeof e) return t(e, void 0);
                                            var r = ({}).toString.call(e).slice(8, -1);
                                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? t(e, void 0) : void 0
                                        }
                                    }(e))) {
                                    r && (e = r);
                                    var i = 0;
                                    return function() {
                                        return i >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[i++]
                                        }
                                    }
                                }
                                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }(a); !(r = i()).done;) {
                            var n = r.value,
                                o = n[0],
                                l = n[1];
                            if (e === o || e === l) return o
                        }
                        return e
                    }(o)] = r[o]);
                    return new s(this, e({
                        baseUrl: i
                    }, n))
                }, c.image = function(t) {
                    return this.withOptions({
                        source: t
                    })
                }, c.dataset = function(t) {
                    return this.withOptions({
                        dataset: t
                    })
                }, c.projectId = function(t) {
                    return this.withOptions({
                        projectId: t
                    })
                }, c.bg = function(t) {
                    return this.withOptions({
                        bg: t
                    })
                }, c.dpr = function(t) {
                    return this.withOptions(t && 1 !== t ? {
                        dpr: t
                    } : {})
                }, c.width = function(t) {
                    return this.withOptions({
                        width: t
                    })
                }, c.height = function(t) {
                    return this.withOptions({
                        height: t
                    })
                }, c.focalPoint = function(t, e) {
                    return this.withOptions({
                        focalPoint: {
                            x: t,
                            y: e
                        }
                    })
                }, c.maxWidth = function(t) {
                    return this.withOptions({
                        maxWidth: t
                    })
                }, c.minWidth = function(t) {
                    return this.withOptions({
                        minWidth: t
                    })
                }, c.maxHeight = function(t) {
                    return this.withOptions({
                        maxHeight: t
                    })
                }, c.minHeight = function(t) {
                    return this.withOptions({
                        minHeight: t
                    })
                }, c.size = function(t, e) {
                    return this.withOptions({
                        width: t,
                        height: e
                    })
                }, c.blur = function(t) {
                    return this.withOptions({
                        blur: t
                    })
                }, c.sharpen = function(t) {
                    return this.withOptions({
                        sharpen: t
                    })
                }, c.rect = function(t, e, r, i) {
                    return this.withOptions({
                        rect: {
                            left: t,
                            top: e,
                            width: r,
                            height: i
                        }
                    })
                }, c.format = function(t) {
                    return this.withOptions({
                        format: t
                    })
                }, c.invert = function(t) {
                    return this.withOptions({
                        invert: t
                    })
                }, c.orientation = function(t) {
                    return this.withOptions({
                        orientation: t
                    })
                }, c.quality = function(t) {
                    return this.withOptions({
                        quality: t
                    })
                }, c.forceDownload = function(t) {
                    return this.withOptions({
                        download: t
                    })
                }, c.flipHorizontal = function() {
                    return this.withOptions({
                        flipHorizontal: !0
                    })
                }, c.flipVertical = function() {
                    return this.withOptions({
                        flipVertical: !0
                    })
                }, c.ignoreImageParams = function() {
                    return this.withOptions({
                        ignoreImageParams: !0
                    })
                }, c.fit = function(t) {
                    if (-1 === n.indexOf(t)) throw Error('Invalid fit mode "' + t + '"');
                    return this.withOptions({
                        fit: t
                    })
                }, c.crop = function(t) {
                    if (-1 === o.indexOf(t)) throw Error('Invalid crop mode "' + t + '"');
                    return this.withOptions({
                        crop: t
                    })
                }, c.saturation = function(t) {
                    return this.withOptions({
                        saturation: t
                    })
                }, c.auto = function(t) {
                    if (-1 === l.indexOf(t)) throw Error('Invalid auto mode "' + t + '"');
                    return this.withOptions({
                        auto: t
                    })
                }, c.pad = function(t) {
                    return this.withOptions({
                        pad: t
                    })
                }, c.vanityName = function(t) {
                    return this.withOptions({
                        vanityName: t
                    })
                }, c.frame = function(t) {
                    if (1 !== t) throw Error('Invalid frame value "' + t + '"');
                    return this.withOptions({
                        frame: t
                    })
                }, c.url = function() {
                    return function(t) {
                        var n = e({}, t || {}),
                            o = n.source;
                        delete n.source;
                        var l = function(t) {
                            var r, a;
                            if (!t) return null;
                            if ("string" == typeof t && (a = t, /^https?:\/\//.test("" + a))) r = {
                                asset: {
                                    _ref: i(t)
                                }
                            };
                            else if ("string" == typeof t) r = {
                                asset: {
                                    _ref: t
                                }
                            };
                            else if (t && "string" == typeof t._ref) r = {
                                asset: t
                            };
                            else if (t && "string" == typeof t._id) r = {
                                asset: {
                                    _ref: t._id || ""
                                }
                            };
                            else if (t && t.asset && "string" == typeof t.asset.url) r = {
                                asset: {
                                    _ref: i(t.asset.url)
                                }
                            };
                            else {
                                if ("object" != typeof t.asset) return null;
                                r = e({}, t)
                            }
                            return t.crop && (r.crop = t.crop), t.hotspot && (r.hotspot = t.hotspot),
                                function(t) {
                                    if (t.crop && t.hotspot) return t;
                                    var r = e({}, t);
                                    return r.crop || (r.crop = {
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        right: 0
                                    }), r.hotspot || (r.hotspot = {
                                        x: .5,
                                        y: .5,
                                        height: 1,
                                        width: 1
                                    }), r
                                }(r)
                        }(o);
                        if (!l) {
                            if (o && "object" == typeof o && null !== o && o._upload && (!o.asset || !o.asset._ref)) return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8HwQACfsD/QNViZkAAAAASUVORK5CYII=";
                            throw Error("Unable to resolve image URL from source (" + JSON.stringify(o) + ")")
                        }
                        var s = function(t) {
                                var e = t.split("-"),
                                    i = e[1],
                                    a = e[2],
                                    n = e[3];
                                if (!i || !a || !n) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + r + '".');
                                var o = a.split("x"),
                                    l = o[0],
                                    s = o[1],
                                    c = +l,
                                    d = +s;
                                if (!(isFinite(c) && isFinite(d))) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + r + '".');
                                return {
                                    id: i,
                                    width: c,
                                    height: d,
                                    format: n
                                }
                            }(l.asset._ref || l.asset._id || ""),
                            c = Math.round(l.crop.left * s.width),
                            d = Math.round(l.crop.top * s.height),
                            u = {
                                left: c,
                                top: d,
                                width: Math.round(s.width - l.crop.right * s.width - c),
                                height: Math.round(s.height - l.crop.bottom * s.height - d)
                            },
                            f = l.hotspot.height * s.height / 2,
                            h = l.hotspot.width * s.width / 2,
                            p = l.hotspot.x * s.width,
                            m = l.hotspot.y * s.height;
                        return n.rect || n.focalPoint || n.ignoreImageParams || n.crop || (n = e({}, n, function(t, e) {
                                var r, i = e.width,
                                    a = e.height;
                                if (!(i && a)) return {
                                    width: i,
                                    height: a,
                                    rect: t.crop
                                };
                                var n = t.crop,
                                    o = t.hotspot,
                                    l = i / a;
                                if (n.width / n.height > l) {
                                    var s = Math.round(n.height),
                                        c = Math.round(s * l),
                                        d = Math.max(0, Math.round(n.top)),
                                        u = Math.max(0, Math.round(Math.round((o.right - o.left) / 2 + o.left) - c / 2));
                                    u < n.left ? u = n.left : u + c > n.left + n.width && (u = n.left + n.width - c), r = {
                                        left: u,
                                        top: d,
                                        width: c,
                                        height: s
                                    }
                                } else {
                                    var f = n.width,
                                        h = Math.round(f / l),
                                        p = Math.max(0, Math.round(n.left)),
                                        m = Math.max(0, Math.round(Math.round((o.bottom - o.top) / 2 + o.top) - h / 2));
                                    m < n.top ? m = n.top : m + h > n.top + n.height && (m = n.top + n.height - h), r = {
                                        left: p,
                                        top: m,
                                        width: f,
                                        height: h
                                    }
                                }
                                return {
                                    width: i,
                                    height: a,
                                    rect: r
                                }
                            }({
                                crop: u,
                                hotspot: {
                                    left: p - h,
                                    top: m - f,
                                    right: p + h,
                                    bottom: m + f
                                }
                            }, n))),
                            function(t) {
                                var e = (t.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""),
                                    r = t.vanityName ? "/" + t.vanityName : "",
                                    i = t.asset.id + "-" + t.asset.width + "x" + t.asset.height + "." + t.asset.format + r,
                                    n = e + "/images/" + t.projectId + "/" + t.dataset + "/" + i,
                                    o = [];
                                if (t.rect) {
                                    var l = t.rect,
                                        s = l.left,
                                        c = l.top,
                                        d = l.width,
                                        u = l.height;
                                    (0 !== s || 0 !== c || u !== t.asset.height || d !== t.asset.width) && o.push("rect=" + s + "," + c + "," + d + "," + u)
                                }
                                t.bg && o.push("bg=" + t.bg), t.focalPoint && (o.push("fp-x=" + t.focalPoint.x), o.push("fp-y=" + t.focalPoint.y));
                                var f = [t.flipHorizontal && "h", t.flipVertical && "v"].filter(Boolean).join("");
                                return (f && o.push("flip=" + f), a.forEach(function(e) {
                                    var r = e[0],
                                        i = e[1];
                                    void 0 !== t[r] ? o.push(i + "=" + encodeURIComponent(t[r])) : void 0 !== t[i] && o.push(i + "=" + encodeURIComponent(t[i]))
                                }), 0 === o.length) ? n : n + "?" + o.join("&")
                            }(e({}, n, {
                                asset: s
                            }))
                    }(this.options)
                }, c.toString = function() {
                    return this.url()
                }, s
            }();
        return function(t) {
            if (t && "config" in t && "function" == typeof t.config) {
                var e = t.config(),
                    r = e.apiHost,
                    i = e.projectId,
                    a = e.dataset;
                return new s(null, {
                    baseUrl: (r || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
                    projectId: i,
                    dataset: a
                })
            }
            if (t && "clientConfig" in t && "object" == typeof t.clientConfig) {
                var n = t.clientConfig,
                    o = n.apiHost,
                    l = n.projectId,
                    c = n.dataset;
                return new s(null, {
                    baseUrl: (o || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
                    projectId: l,
                    dataset: c
                })
            }
            return new s(null, t || {})
        }
    }()
}, 779712, t => {
    "use strict";
    var e = t.i(591336);
    let r = (0, t.i(477846).default)(e.cdnClient);
    t.s(["urlForImage", 0, t => t ? r.image(t) : null])
}, 529363, 989873, t => {
    "use strict";
    var e = t.i(175602);
    let r = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t;

    function i(t, i, a, n) {
        return t === i && a === n ? e.noop : e => 0 === e || 1 === e ? e : r(function(t, e, i, a, n) {
            let o, l, s = 0;
            do(o = r(l = e + (i - e) / 2, a, n) - t) > 0 ? i = l : e = l; while (Math.abs(o) > 1e-7 && ++s < 12) return l
        }(e, 0, 1, t, a), i, n)
    }
    t.s(["cubicBezier", 0, i], 989873);
    let a = i(.42, 0, 1, 1),
        n = i(0, 0, .58, 1),
        o = i(.42, 0, .58, 1);
    t.s(["easeIn", 0, a, "easeInOut", 0, o, "easeOut", 0, n], 529363)
}, 459923, 570994, t => {
    "use strict";
    var e = t.i(500783),
        r = t.i(3931),
        i = t.i(655105),
        a = t.i(828083),
        n = t.i(722978),
        o = t.i(153348),
        l = t.i(955429),
        s = t.i(201763),
        c = t.i(749583);
    let d = (0, a.default)(() => t.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        u = ({
            eyebrow: t,
            title: a,
            titleSize: u = "medium",
            description: f,
            backgroundImage: h,
            actions: p = [],
            keyFigures: m,
            video: g,
            mention: x,
            fullScreen: y = !0
        }) => {
            let b = (0, r.useRef)(null),
                v = (0, o.useInView)(b, {
                    once: !0
                }),
                w = (0, l.useReducedMotion)(),
                [j, k] = (0, r.useState)(!1),
                O = (0, n.default)(`font-nohemi mt-24 my-4 ${"small"===u?"mb-6":"mb-8"}`, {
                    "loco-text-heading-xl": "medium" === u,
                    "loco-text-headline": "large" === u,
                    "loco-text-heading-lg": "small" === u
                }),
                N = (0, n.default)("object-cover transition-opacity duration-1000 opacity-100", {
                    "opacity-0": j
                });
            return (0, e.jsxs)("section", {
                ref: b,
                className: "dark relative",
                children: [h && (0, e.jsx)(i.default, {
                    src: h.src,
                    placeholder: "blur",
                    blurDataURL: h.placeholder,
                    fill: !0,
                    alt: "",
                    className: N,
                    sizes: "100vw"
                }), v && !w && g && (0, e.jsx)(d, {
                    url: g || "",
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
                }, "hero-video"), (0, e.jsx)("div", {
                    className: "absolute h-full w-full",
                    style: {
                        backgroundImage: y ? `
    linear-gradient(180deg, rgba(1, 1, 1, 0.00) 45.08%, rgba(1, 1, 1, 0.00) 49.56%, rgba(1, 1, 1, 0.01) 53.84%, rgba(1, 1, 1, 0.02) 57.92%, rgba(1, 1, 1, 0.04) 61.84%, rgba(1, 1, 1, 0.06) 65.62%, rgba(1, 1, 1, 0.09) 69.27%, rgba(1, 1, 1, 0.12) 72.82%, rgba(1, 1, 1, 0.16) 76.29%, rgba(1, 1, 1, 0.20) 79.7%, rgba(1, 1, 1, 0.24) 83.06%, rgba(1, 1, 1, 0.29) 86.41%, rgba(1, 1, 1, 0.34) 89.75%, rgba(1, 1, 1, 0.39) 93.12%, rgba(1, 1, 1, 0.44) 96.53%, rgba(1, 1, 1, 0.50) 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)` : ""
                    }
                }), (0, e.jsxs)("div", {
                    className: `relative container flex ${y&&"min-h-[calc(100vh-4rem)]"} flex-col py-8 text-white`,
                    children: [(0, e.jsx)("div", {
                        className: "flex grow flex-col justify-stretch",
                        children: (0, e.jsxs)("div", {
                            className: "flex h-full grow flex-col items-center justify-center text-center",
                            children: [t && (0, e.jsx)("div", {
                                className: "loco-caption-lg-semibold",
                                children: t
                            }), (0, e.jsx)("h1", {
                                className: O,
                                children: a
                            }), f && (0, e.jsx)("div", {
                                className: "loco-caption-sm-semibold mt-5",
                                children: f
                            }), p && (0, e.jsx)("div", {
                                className: "mt-6 flex flex-wrap items-center justify-center gap-4",
                                children: p.map((t, r) => {
                                    if (t.link) return (0, e.jsx)(c.default, {
                                        rounded: !0,
                                        hasArrow: !0,
                                        href: t.link.href,
                                        target: t.link.target,
                                        variant: 0 === r ? "primary" : "secondary",
                                        children: t.title
                                    }, `headliner-action-link-${t.title}-${r}`);
                                    if (t.form) {
                                        let i = {
                                            ...t.form.form,
                                            ...t.form.webinarFormParametersContent,
                                            extraFields: t.form.extraFields
                                        };
                                        return (0, e.jsx)("div", {
                                            children: t.form.renderModal({
                                                label: t.title,
                                                form: i
                                            })
                                        }, `headliner-action-modal-${t.title}-${r}`)
                                    }
                                    return null
                                })
                            })]
                        })
                    }), m && (0, e.jsx)(s.default, {
                        keyFigures: m,
                        nested: !0
                    })]
                }), x && (0, e.jsx)("div", {
                    className: "loco-text-body-sm z-10 w-full px-4 py-4 text-center opacity-70 md:absolute md:top-10 md:right-8 md:left-auto md:w-auto md:px-0 md:py-8",
                    children: x
                })]
            })
        };
    t.s(["default", 0, u], 570994);
    var f = t.i(115219);
    t.s(["default", 0, ({
        actions: t = [],
        brandfolder: i,
        mention: a,
        eyebrow: n,
        title: o,
        titleSize: l,
        description: s,
        image: c,
        keyFigures: d,
        isHidden: h
    }) => {
        let {
            mapFormActions: p
        } = (0, f.useFormModal)(t), m = p(t), g = (0, r.useMemo)(() => (d?.data ?? []).map(t => t?.value?.text ? {
            value: {
                type: "text",
                text: t.value.text
            },
            label: t.label
        } : {
            value: {
                type: "icon",
                url: t?.value?.icon?.file?.cdnURL || "",
                description: t?.value?.icon?.caption || ""
            },
            label: t.label
        }), [d]);
        return (0, e.jsx)(e.Fragment, {
            children: !h && (0, e.jsx)(u, {
                actions: m,
                mention: a || "",
                eyebrow: n || "",
                title: o || "",
                titleSize: "small" === l ? "small" : "large" === l ? "large" : "medium",
                description: s || "",
                backgroundImage: {
                    src: c?.asset.url || "",
                    placeholder: c?.asset.metadata?.lqip || ""
                },
                keyFigures: g,
                video: i?.muxHLSURL || ""
            })
        })
    }], 459923)
}, 164163, t => {
    "use strict";
    var e = t.i(500783),
        r = t.i(722978),
        i = t.i(655105),
        a = t.i(825610),
        n = t.i(749583),
        o = t.i(596889),
        l = t.i(805518);
    t.s(["default", 0, ({
        title: t,
        cards: s,
        layout: c = "four-cards",
        cardVariant: d = "default",
        scroll: u = !1,
        cardsHeading: f
    }) => {
        let h = f || (t ? "h3" : "h2"),
            p = (0, r.clsx)("gap-4 md:gap-8", {
                "grid grid-cols-12": !u,
                "flex overflow-x-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-900 dark:scrollbar-track-gray-900 dark:scrollbar-thumb-gray-100": u
            });
        return (0, e.jsx)("section", {
            className: "bg-white dark:bg-black",
            children: (0, e.jsxs)("div", {
                className: "container py-16",
                children: [t && (0, e.jsx)("h2", {
                    className: "loco-text-heading-md mb-9 text-center",
                    children: t
                }), (0, e.jsx)("div", {
                    className: p,
                    children: s?.map((s, f) => {
                        let p = (0, r.clsx)("flex flex-wrap flex-row", !u && ({
                                "two-cards": "col-span-12 md:col-span-6 [&>div>.card-img]:h-72",
                                "three-cards": "col-span-12 md:col-span-6 lg:col-span-4 [&>div>.card-img]:h-44",
                                "four-cards": "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 [&>div>.card-img]:h-36"
                            })[c], u && ({
                                "two-cards": "mb-6 min-w-[35rem] [&>div>.card-img]:h-72",
                                "three-cards": "mb-6 min-w-[22rem] [&>div>.card-img]:h-44",
                                "four-cards": "mb-6 min-w-[16rem] [&>div>.card-img]:h-36"
                            })[c]),
                            m = (0, r.clsx)("place-self-end", {
                                "px-6 pb-6": "default" === d || "transparent" === d
                            }),
                            g = (0, r.clsx)({
                                "p-6": "default" === d || "transparent" === d,
                                "py-6": "padded" === d
                            }),
                            x = (0, r.clsx)("object-cover", {
                                "rounded-t-xl": "default" === d || "transparent" === d,
                                rounded: "padded" === d
                            }),
                            y = (0, r.clsx)("caption-xs mt-1 text-right text-gray-400", {
                                "mr-1": "padded" !== d
                            });
                        return (0, e.jsxs)(o.default, {
                            className: p,
                            variant: d,
                            children: [(0, e.jsxs)(o.default.Content, {
                                children: [s.image && s.image.src && (0, e.jsxs)(e.Fragment, {
                                    children: [(0, e.jsx)(o.default.Image, {
                                        withinContainer: s.image.withinContainer,
                                        children: (0, e.jsx)(i.default, {
                                            src: s.image.src ?? "",
                                            alt: s.image.alt ?? "",
                                            fill: !0,
                                            className: x,
                                            quality: 100
                                        })
                                    }), s.image.description && (0, e.jsx)(l.default, {
                                        className: y,
                                        children: s.image.description
                                    })]
                                }), (0, e.jsxs)("div", {
                                    className: g,
                                    children: [s.icon && s.icon.src && (0, e.jsx)("div", {
                                        className: "relative mb-5 dark:invert",
                                        children: (0, e.jsx)(i.default, {
                                            src: s.icon.src ?? "",
                                            alt: s.icon.alt ?? "",
                                            quality: 100,
                                            width: 23,
                                            height: 23
                                        })
                                    }), (0, e.jsx)(h, {
                                        className: "loco-text-body-lg-medium mb-4 !font-semibold",
                                        children: s.title
                                    }), s.description && (0, e.jsx)(l.default, {
                                        className: "loco-text-body mb-4",
                                        children: s.description
                                    }), s.richText && (0, e.jsx)(l.default, {
                                        className: "loco-text-body mb-4 text-gray-600 dark:text-gray-300",
                                        children: s.richText
                                    })]
                                })]
                            }), s.actions && (0, e.jsx)("div", {
                                className: m,
                                children: s.actions.map((t, r) => (0, e.jsx)(n.default, {
                                    href: t.href,
                                    target: t.target ?? "_self",
                                    rounded: !0,
                                    hasArrow: !0,
                                    outlined: 0 === r,
                                    className: 0 === r ? "mr-3" : "mt-4",
                                    variant: 0 === r ? "primary" : "secondary",
                                    "data-link-location": a.trackingLocation.cardsAction,
                                    "data-link-id": `${a.trackingLocation.cardsAction}-${r}`,
                                    children: t.title
                                }, `${t.title}-${r}`))
                            })]
                        }, `card-${f}-${t}`)
                    })
                })]
            })
        })
    }], 164163)
}, 14452, t => {
    "use strict";
    var e = t.i(500783),
        r = t.i(722978);
    t.s(["default", 0, ({
        children: t,
        className: i = "",
        tag: a = "div"
    }) => {
        let n = (0, r.default)("loco-text-heading-sm mb-4", i);
        return (0, e.jsx)(a, {
            className: n,
            children: t
        })
    }], 14452)
}, 447452, 667900, 2062, t => {
    "use strict";
    var e = t.i(500783),
        r = t.i(3931),
        i = t.i(722978),
        a = t.i(655105),
        n = t.i(825610),
        o = t.i(387660);
    let l = ({
        children: t,
        tag: r = "div",
        className: a = ""
    }) => {
        let n = (0, i.default)("loco-caption-lg-semibold mb-4", a);
        return (0, e.jsx)(r, {
            className: n,
            children: t
        })
    };
    t.s(["default", 0, l], 667900);
    var s = t.i(749583);
    let c = ({
        children: t,
        className: r = "",
        orientation: a = "horizontal"
    }) => {
        let n = (0, i.default)("flex gap-2 flex-wrap", {
            "flex-col items-start": "vertical" === a
        }, r);
        return (0, e.jsx)("div", {
            className: n,
            children: t
        })
    };
    t.s(["default", 0, c], 2062);
    var d = t.i(14452),
        u = t.i(805518),
        f = t.i(526826),
        h = t.i(766930);
    let p = ({
        features: t,
        transitionTime: i = 8500
    }) => {
        let [a, n] = (0, r.useState)(0), o = (0, r.useRef)(null), l = (0, r.useRef)(null), [c, d] = (0, r.useState)(!1), [u, p] = (0, r.useState)(!1), m = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
            t.forEach(t => {
                t.icon && (new window.Image().src = t.icon, new window.Image().src = t.icon)
            })
        }, [t]), (0, r.useEffect)(() => {
            let t = new IntersectionObserver(([t]) => {
                d(t.intersectionRatio >= .8)
            }, {
                threshold: [0, .8, 1]
            });
            return l.current && t.observe(l.current), () => t.disconnect()
        }, []), (0, r.useEffect)(() => (o.current && clearTimeout(o.current), c && !u && (o.current = setTimeout(() => {
            n(e => (e + 1) % t.length)
        }, i)), () => {
            o.current && clearTimeout(o.current)
        }), [a, t.length, i, c, u]);
        let g = (0, r.useCallback)(e => {
                let r = e === a;
                n(e), p(!0);
                let o = t[e];
                o?.onCardClick && setTimeout(() => {
                    o.onCardClick?.(r)
                }, 0), m.current && clearTimeout(m.current), m.current = setTimeout(() => {
                    p(!1)
                }, i)
            }, [a, t, i]),
            x = (0, r.useCallback)((t, e) => {
                ("Enter" === t.key || " " === t.key) && (t.preventDefault(), g(e))
            }, [g]);
        return (0, r.useEffect)(() => () => {
            m.current && clearTimeout(m.current)
        }, []), (0, e.jsx)(h.default, {
            children: (0, e.jsx)("div", {
                ref: l,
                className: "relative inline-flex w-full flex-col items-start justify-start gap-2 self-stretch px-5 pb-6 md:px-5 md:pb-6 lg:px-0 lg:pb-0 xl:px-20",
                children: t.map((t, r) => {
                    let i = r === a;
                    return (0, e.jsxs)("div", {
                        "data-mobile": "true",
                        "data-show-image": i ? "true" : "false",
                        "data-state": i ? "selected" : "inactive",
                        role: "button",
                        tabIndex: 0,
                        className: `cursor-pointer self-stretch overflow-hidden rounded-lg bg-white ${i?`${t.icon?"lg:pl-36":"lg:pl-10"} p-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04),0px_2px_12px_3px_rgba(0,0,0,0.04)] lg:py-8 lg:pr-10`:"p-6 lg:px-10 lg:py-6"} flex lg:inline-flex lg:items-start ${i?"flex-col":"items-center"} relative justify-start gap-2 transition-all duration-500 ease-out`,
                        onClick: () => g(r),
                        onKeyDown: t => x(t, r),
                        children: [t.icon && i && (0, e.jsx)(f.m.div, {
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
                            children: (0, e.jsx)("div", {
                                className: "flex flex-1 items-center justify-center gap-2.5 self-stretch",
                                children: (0, e.jsx)("img", {
                                    className: "flex-1 self-stretch",
                                    src: t.icon || "https://placehold.co/57x57",
                                    alt: t.title || "Feature icon",
                                    width: 57,
                                    height: 57,
                                    loading: "eager",
                                    style: {
                                        objectFit: "cover",
                                        imageRendering: "auto"
                                    }
                                })
                            })
                        }), t.icon && i && (0, e.jsx)(f.m.div, {
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
                            children: (0, e.jsx)("div", {
                                className: "flex h-full items-center justify-start py-8",
                                children: (0, e.jsx)("img", {
                                    className: "max-h-full w-auto object-contain",
                                    src: t.icon || "",
                                    alt: t.title || "Feature icon",
                                    loading: "eager",
                                    style: {
                                        imageRendering: "auto"
                                    }
                                })
                            })
                        }), (0, e.jsxs)("div", {
                            className: "flex flex-col items-start justify-start gap-[9px] self-stretch lg:inline-flex lg:max-w-[304px] lg:flex-1 lg:flex-col",
                            children: [i && (0, e.jsx)(f.m.div, {
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
                                children: (0, e.jsx)("div", {
                                    className: "flex-1 justify-center text-[10px] leading-[16px] font-medium tracking-[1px] text-gray-700 uppercase md:text-[12px] md:leading-[21px] md:tracking-[1.2px]",
                                    children: t.eyebrow || ""
                                })
                            }), (0, e.jsx)("div", {
                                className: "inline-flex items-center justify-center self-stretch",
                                children: (0, e.jsx)(f.m.div, {
                                    animate: {
                                        color: i ? "#000000" : "#374151"
                                    },
                                    transition: {
                                        type: "spring",
                                        duration: .3,
                                        bounce: .1
                                    },
                                    className: "flex-1 justify-center text-base leading-tight font-medium md:text-[20px] md:leading-[24px]",
                                    children: t.title || "Untitled"
                                })
                            }), i && (0, e.jsx)(f.m.div, {
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
                                children: t.description || ""
                            }), i && (0, e.jsx)(f.m.div, {
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
                                children: (0, e.jsx)(s.default, {
                                    href: t.action?.href || "#",
                                    target: t.action?.target,
                                    variant: "primary",
                                    size: "small",
                                    rounded: !0,
                                    hasArrow: !0,
                                    children: t.action?.label || "Learn More"
                                })
                            })]
                        })]
                    }, r)
                })
            })
        })
    };
    var m = t.i(783078),
        g = t.i(430215),
        x = t.i(224601),
        y = t.i(153348),
        b = t.i(955429),
        v = t.i(828083),
        w = t.i(186114);
    let j = (0, v.default)(() => t.A(410979), {
        loadableGenerated: {
            modules: [942019]
        },
        ssr: !1
    });
    t.s(["default", 0, ({
        actions: t = [],
        aspectRatio: f,
        backgroundImage: h = !1,
        description: v,
        eyebrow: k,
        image: O,
        mediaPosition: N = "right",
        size: _ = "default",
        title: A,
        youtubeVideo: I,
        brandfolderVideo: S,
        videoInline: C = !1,
        buttonLabel: R = "Play Video",
        blockKey: P,
        blockedMessage: E,
        consentButtonLabel: $,
        featureList: M,
        variant: T = "default"
    }) => {
        let L = (0, g.default)(`(max-width: ${m.default.Large}px)`),
            U = (0, r.useRef)(null),
            [F, z] = (0, r.useState)(!1),
            H = (0, y.useInView)(U, {
                once: !0
            }),
            B = (0, b.useReducedMotion)(),
            V = (0, r.useRef)({
                total: 0,
                progress: 0
            }),
            D = M && M.length > 0,
            W = !D && I?.url;
        (0, r.useEffect)(() => {
            C || z(!1)
        }, [H]);
        let q = () => {
                z(!0)
            },
            K = (0, i.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": F && !B && H && S?.src
            }),
            G = (0, i.default)("relative", {
                "py-10 lg:py-24": "gdc2026" === T,
                "lg:py-14": D,
                "lg:py-24": !D && "default" === _ && (!f || "16:9" === f) && "gdc2026" !== T,
                "lg:py-80": !D && "large" === _ && (!f || "16:9" === f),
                "lg:py-40": !D && "large" === _ && "1:1" === f,
                "dark bg-gray-900 overflow-hidden": h,
                "bg-gray-100 dark:bg-black": !h && D,
                "bg-white dark:bg-black": !h && !D
            }),
            J = (0, i.default)("grid grid-flow-row grid-cols-12 place-items-center gap-4", {
                "p-4": "gdc2026" === T,
                "lg:grid-flow-col": !0,
                "lg:container": !f || "16:9" === f
            }),
            Q = (0, i.default)("font-nohemi! text-gray-900 dark:text-gray-100 whitespace-pre-line", {
                "loco-text-heading-md!": "gdc2026" === T
            }),
            Y = (0, i.default)("relative w-full rounded-lg", {
                "aspect-square": "1:1" === f,
                "aspect-video": "16:9" === f,
                "overflow-hidden": !I?.url
            }),
            Z = (0, i.default)("relative col-span-12 flex h-full flex-col w-full items-center lg:items-start", {
                "lg:col-span-8": "gdc2026" === T,
                "lg:col-span-6": "gdc2026" !== T,
                "lg:col-start-1": "left" === N,
                "lg:col-start-5": "right" === N && "gdc2026" === T,
                "lg:col-start-7": "right" === N && "gdc2026" !== T,
                "order-first": !D || !L,
                "order-last": D && L
            }),
            X = (0, i.default)("relative col-span-12 px-5 text-center lg:pb-0 lg:text-left", {
                "lg:col-span-4": "gdc2026" === T,
                "lg:col-span-5": "gdc2026" !== T,
                "pb-6": !(D && L),
                "py-6": D && L,
                "lg:col-start-9": "left" === N && "gdc2026" === T,
                "lg:col-start-8": "left" === N && "gdc2026" !== T && (!f || "16:9" === f),
                "lg:col-start-1": "right" === N && (!f || "16:9" === f),
                "lg:col-start-2": "right" === N && "1:1" === f,
                "order-first": D && L
            }),
            tt = t => {
                let e = V.current.progress / V.current.total * 100 || 0;
                (0, o.pushVideoEvent)({
                    name: t,
                    videoDuration: V.current.total,
                    videoProgress: Number(e)
                })
            };
        return (0, e.jsxs)("section", {
            className: G,
            children: [h && (0, e.jsx)(a.default, {
                src: O.src,
                alt: O.alt,
                fill: !0,
                className: "blur-2xl brightness-[0.2]"
            }), (0, e.jsxs)("div", {
                className: J,
                ref: U,
                children: [D ? (0, e.jsx)("div", {
                    className: Z,
                    children: (0, e.jsx)(p, {
                        features: M
                    })
                }) : W ? (0, e.jsx)("div", {
                    className: Z,
                    children: (0, e.jsx)("div", {
                        className: Y,
                        children: (0, e.jsx)(x.default, {
                            url: I?.url || "",
                            title: I?.title ?? "",
                            blockedMessage: E,
                            consentButtonLabel: $
                        })
                    })
                }) : (0, e.jsxs)("div", {
                    className: Z,
                    children: [(0, e.jsxs)("div", {
                        className: Y,
                        children: [H && !B && S?.src && (0, e.jsx)(j, {
                            url: S.src,
                            playing: F,
                            loop: !!C,
                            muted: C,
                            playsinline: C,
                            width: "100%",
                            height: "100%",
                            onDuration: t => V.current.total = t,
                            onProgress: t => {
                                V.current.progress = 10 * t.played
                            },
                            className: "absolute top-0 left-0 [&>video]:object-cover",
                            onReady: () => {
                                C && z(!0)
                            },
                            controls: !C,
                            onPlay: () => tt("video_play"),
                            onPause: () => tt("video_pause"),
                            config: {
                                hlsOptions: {
                                    maxMaxBufferLength: 1,
                                    startLevel: 1
                                }
                            }
                        }), O.src && (0, e.jsxs)("div", {
                            className: K,
                            onClick: q,
                            children: [S?.src && !C && (0, e.jsx)(w.default, {
                                handleIsPlaying: q,
                                className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                label: R,
                                "data-link-location": P || n.trackingLocation.fullWidthBlockAction,
                                "data-link-id": `${P||n.trackingLocation.fullWidthBlockAction}-video-play`
                            }), (0, e.jsx)(a.default, {
                                src: O.src,
                                alt: O.alt,
                                placeholder: "blur",
                                blurDataURL: O.placeholder,
                                fill: !0
                            })]
                        })]
                    }), O.caption && (0, e.jsx)("div", {
                        className: "loco-text-body-sm-medium z-10 mt-3 mb-6 text-gray-600 lg:mb-3",
                        children: O.caption
                    })]
                }), (0, e.jsxs)("div", {
                    className: X,
                    children: [k && (0, e.jsx)(l, {
                        className: "text-gray-900 dark:text-gray-100",
                        children: k
                    }), (0, e.jsx)(d.default, {
                        tag: "h2",
                        className: Q,
                        children: A
                    }), (0, e.jsx)(u.default, {
                        className: "mb-10 text-gray-900 dark:text-gray-100",
                        children: v
                    }), (0, e.jsx)(c, {
                        className: "justify-center lg:justify-normal",
                        children: t.length > 0 && t.map((t, r) => (0, e.jsx)(s.default, {
                            variant: 0 === r ? "primary" : "secondary",
                            outlined: 0 === r,
                            size: L ? "small" : "medium",
                            rounded: !0,
                            hasArrow: !0,
                            href: t.href,
                            target: t.target,
                            "data-link-location": P ?? n.trackingLocation.fullWidthBlockAction,
                            "data-link-id": `${P??n.trackingLocation.fullWidthBlockAction}-action-${r}`,
                            children: t.label
                        }, `full-width-block-action-${r}`))
                    })]
                })]
            })]
        })
    }], 447452)
}, 649042, t => {
    "use strict";
    var e = t.i(500783),
        r = t.i(3931),
        i = t.i(722990),
        a = t.i(447452),
        n = t.i(775041),
        o = t.i(779712),
        l = t.i(869324);
    t.s(["default", 0, ({
        actions: t,
        backgroundImage: s,
        description: c,
        eyebrow: d,
        image: u,
        mediaAspectRatio: f,
        mediaPosition: h,
        size: p,
        variant: m,
        title: g,
        theme: x,
        youtubeVideo: y,
        brandfolderVideo: b,
        buttonLabel: v,
        videoInline: w,
        blockKey: j,
        isHidden: k,
        consent: O,
        featureList: N,
        productCategoryFilter: _
    }) => {
        let [A] = (0, r.useContext)(n.FiltersContext);
        if (A.categories && A.categories.length > 0 && 1 === A.categories.findIndex(({
                _id: t
            }) => t === A.selectedCategory) && null != A.selectedSubcategory) return null;
        let {
            subcategories: I,
            productCatalogItems: S
        } = A.categories.find(({
            _id: t
        }) => t === A.selectedCategory) || {}, C = null != A.selectedSubcategory ? (I || []).find(({
            _id: t
        }) => t === A.selectedSubcategory) : null, R = !_ || _.categories?.find(t => t._id === A.selectedCategory) != null && (null == C || !_.subcategories || _.subcategories.some(({
            _id: t
        }) => t === A.selectedSubcategory)), P = t?.map(({
            title: t,
            link: e
        }) => {
            let r = e?.linkReference?.target === "_blank" ? "_blank" : "_self";
            return {
                label: t,
                href: e?.linkReference?.href.current || "/",
                target: r
            }
        }), E = N?.map((t, e) => {
            let r;
            return {
                eyebrow: t.eyebrow || "",
                title: t.title || "",
                description: t.description || "",
                action: t.action ? (r = t.action.link?.linkReference?.target === "_blank" ? "_blank" : "_self", {
                    label: t.action.title || "",
                    href: t.action.link?.linkReference?.href.current || "#",
                    target: r
                }) : {
                    label: "",
                    href: "#"
                },
                icon: t.icon?.asset?.url || "",
                onCardClick: t => ((t, e) => {
                    if (!e && N?.[t]) {
                        let e = N[t];
                        (0, l.default)({
                            event: "userEvent",
                            event_name: "navigation_click",
                            properties: {
                                navigation_click_text: e.title || "",
                                link_type: "feature list item",
                                form_name: e.title || "",
                                form_id: `list-item-${t}`,
                                block_title: g
                            }
                        })
                    }
                })(e, t)
            }
        });
        return (0, e.jsx)(e.Fragment, {
            children: !k && R && (0, e.jsx)("section", {
                className: "dark" === x ? "dark" : "",
                children: (0, e.jsx)(a.default, {
                    actions: P,
                    aspectRatio: "16:9" === f ? "16:9" : "1:1" === f ? "1:1" : void 0,
                    backgroundImage: s,
                    description: (0, e.jsx)(i.PortableText, {
                        value: c
                    }),
                    eyebrow: d,
                    image: {
                        src: (0, o.urlForImage)(u?.file?.asset?.url || "")?.auto("format")?.url() || "",
                        placeholder: u?.file?.asset.metadata?.lqip || "",
                        alt: u?.alt || "",
                        caption: u?.caption || ""
                    },
                    mediaPosition: "right" === h ? "right" : "left" === h ? "left" : void 0,
                    size: "large" === p ? "large" : "default" === p ? "default" : void 0,
                    variant: "gdc2026" === m ? "gdc2026" : "default" === m ? "default" : void 0,
                    title: g,
                    youtubeVideo: y,
                    brandfolderVideo: {
                        src: b?.muxHLSURL || ""
                    },
                    videoInline: w,
                    buttonLabel: v,
                    blockKey: j,
                    blockedMessage: O?.blockedMessage,
                    consentButtonLabel: O?.consentButtonLabel || "",
                    featureList: E
                })
            })
        })
    }], 649042)
}, 449758, t => {
    "use strict";
    var e = t.i(500783),
        r = t.i(3931),
        i = t.i(722990),
        a = t.i(164163),
        n = t.i(326388);
    t.s(["default", 0, ({
        title: t,
        layout: o,
        cardVariant: l,
        scroll: s,
        theme: c,
        cardsHeading: d,
        cards: u,
        isHidden: f
    }) => {
        let {
            appendCommerceData: h,
            appendCommerceDataToPortableText: p,
            currency: m
        } = (0, n.default)(), g = (0, r.useMemo)(() => u?.map(t => ({
            type: t._type,
            title: h(t.title, t.productCatalogItem) || "",
            description: h(t.description, t.productCatalogItem) || "",
            richText: (0, e.jsx)(i.PortableText, {
                value: p(t.richText, t.productCatalogItem)
            }),
            image: t.image && {
                src: t.image?.file?.asset.url || "",
                alt: t.image?.alt || "",
                description: t.image?.caption ?? "",
                withinContainer: t.image?.visualOptions?.container
            },
            icon: t.icon && {
                src: t.icon?.file?.asset.url,
                alt: t.icon?.alt || ""
            },
            actions: t.actions?.map(t => {
                let e = t.link?.linkReference?.target === "_blank" ? "_blank" : "_self";
                return {
                    title: t.title || "",
                    href: t.link?.linkReference?.href?.current || "",
                    target: e
                }
            })
        })), [u, h, p]);
        return (0, e.jsx)(e.Fragment, {
            children: !f && (0, e.jsx)("section", {
                className: `${"dark"===c?"dark":""} overflow-hidden`,
                children: (0, e.jsx)(a.default, {
                    layout: "two-cards" === o || "three-cards" === o || "four-cards" === o ? o : "four-cards",
                    cardVariant: "default" === l || "padded" === l || "transparent" === l ? l : "default",
                    scroll: s,
                    title: t || "",
                    cardsHeading: ["h2", "h3", "h4", "div"].includes(d) ? d : void 0,
                    cards: g
                })
            })
        })
    }], 449758)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "0fe24684-dd9e-52bc-b652-471a86fe1d75")
    } catch (e) {}
}();
//# debugId=0fe24684-dd9e-52bc-b652-471a86fe1d75