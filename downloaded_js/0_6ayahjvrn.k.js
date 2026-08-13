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
                for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var a in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                return t
            }).apply(this, arguments)
        };

    function n(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            n = 0;
        if (r) return r.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && n >= t.length && (t = void 0), {
                    value: t && t[n++],
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
        var n, i = r.apply(t, e || []),
            o = [];
        return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), l("next"), l("throw"), l("return", function(t) {
            return function(e) {
                return Promise.resolve(e).then(t, u)
            }
        }), n[Symbol.asyncIterator] = function() {
            return this
        }, n;

        function l(t, e) {
            i[t] && (n[t] = function(e) {
                return new Promise(function(r, n) {
                    o.push([t, e, r, n]) > 1 || s(t, e)
                })
            }, e && (n[t] = e(n[t])))
        }

        function s(t, e) {
            try {
                var r;
                (r = i[t](e)).value instanceof a ? Promise.resolve(r.value.v).then(c, u) : h(o[0][2], r)
            } catch (t) {
                h(o[0][3], t)
            }
        }

        function c(t) {
            s("next", t)
        }

        function u(t) {
            s("throw", t)
        }

        function h(t, e) {
            t(e), o.shift(), o.length && s(o[0][0], o[0][1])
        }
    }, "__asyncValues", 0, function(t) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var e, r = t[Symbol.asyncIterator];
        return r ? r.call(t) : (t = n(t), e = {}, a("next"), a("throw"), a("return"), e[Symbol.asyncIterator] = function() {
            return this
        }, e);

        function a(r) {
            e[r] = t[r] && function(e) {
                return new Promise(function(n, a) {
                    var i, o, l;
                    i = n, o = a, l = (e = t[r](e)).done, Promise.resolve(e.value).then(function(t) {
                        i({
                            value: t,
                            done: l
                        })
                    }, o)
                })
            }
        }
    }, "__await", 0, a, "__awaiter", 0, function(t, e, r, n) {
        return new(r || (r = Promise))(function(a, i) {
            function o(t) {
                try {
                    s(n.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function l(t) {
                try {
                    s(n.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function s(t) {
                var e;
                t.done ? a(t.value) : ((e = t.value) instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(o, l)
            }
            s((n = n.apply(t, e || [])).next())
        })
    }, "__extends", 0, function(t, r) {
        if ("function" != typeof r && null !== r) throw TypeError("Class extends value " + String(r) + " is not a constructor or null");

        function n() {
            this.constructor = t
        }
        e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
    }, "__generator", 0, function(t, e) {
        var r, n, a, i = {
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
                for (; o && (o = 0, c[0] && (i = 0)), i;) try {
                    if (r = 1, n && (a = 2 & c[0] ? n.return : c[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, c[1])).done) return a;
                    switch (n = 0, a && (c = [2 & c[0], a.value]), c[0]) {
                        case 0:
                        case 1:
                            a = c;
                            break;
                        case 4:
                            return i.label++, {
                                value: c[1],
                                done: !1
                            };
                        case 5:
                            i.label++, n = c[1], c = [0];
                            continue;
                        case 7:
                            c = i.ops.pop(), i.trys.pop();
                            continue;
                        default:
                            if (!(a = (a = i.trys).length > 0 && a[a.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                i = 0;
                                continue
                            }
                            if (3 === c[0] && (!a || c[1] > a[0] && c[1] < a[3])) {
                                i.label = c[1];
                                break
                            }
                            if (6 === c[0] && i.label < a[1]) {
                                i.label = a[1], a = c;
                                break
                            }
                            if (a && i.label < a[2]) {
                                i.label = a[2], i.ops.push(c);
                                break
                            }
                            a[2] && i.ops.pop(), i.trys.pop();
                            continue
                    }
                    c = e.call(t, i)
                } catch (t) {
                    c = [6, t], n = 0
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
        var n, a, i = r.call(t),
            o = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(n = i.next()).done;) o.push(n.value)
        } catch (t) {
            a = {
                error: t
            }
        } finally {
            try {
                n && !n.done && (r = i.return) && r.call(i)
            } finally {
                if (a) throw a.error
            }
        }
        return o
    }, "__rest", 0, function(t, e) {
        var r = {};
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && 0 > e.indexOf(n) && (r[n] = t[n]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols)
            for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++) 0 > e.indexOf(n[a]) && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (r[n[a]] = t[n[a]]);
        return r
    }, "__spreadArray", 0, function(t, e, r) {
        if (r || 2 == arguments.length)
            for (var n, a = 0, i = e.length; a < i; a++) !n && a in e || (n || (n = Array.prototype.slice.call(e, 0, a)), n[a] = e[a]);
        return t.concat(n || Array.prototype.slice.call(e))
    }, "__values", 0, n])
}, 686049, t => {
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
        n = {
            0: String.fromCodePoint(r[0]),
            1: String.fromCodePoint(r[1]),
            2: String.fromCodePoint(r[2]),
            3: String.fromCodePoint(r[3])
        },
        a = [, , , , ].fill(String.fromCodePoint(r[0])).join("");
    Object.fromEntries(Object.entries(n).map(t => [t[1], +t[0]])), Object.fromEntries(Object.entries(e).map(t => t.reverse()));
    var i = `${Object.values(e).map(t=>`\\u{${t.toString(16)}}`).join("")}`,
        o = RegExp(`[${i}]{4,}`, "gu");
    t.s(["isRecord", 0, function(t) {
        return "object" == typeof t && null !== t && !Array.isArray(t)
    }, "stegaClean", 0, function(t) {
        var e, r;
        return t && JSON.parse({
            cleaned: (e = JSON.stringify(t)).replace(o, ""),
            encoded: (null == (r = e.match(o)) ? void 0 : r[0]) || ""
        }.cleaned)
    }, "y", 0, function(t, e, r = "auto") {
        return !0 === r || "auto" === r && (!(!Number.isNaN(Number(t)) || /[a-z]/i.test(t) && !/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(t)) && Date.parse(t) || function(t) {
            try {
                new URL(t, t.startsWith("/") ? "https://acme.com" : void 0)
            } catch {
                return !1
            }
            return !0
        }(t)) ? t : `${t}${function(t){let e=JSON.stringify(t),r=new TextEncoder().encode(e),i="";for(let t=0;t<r.length;t++){let e=r[t];i+=n[e>>6&3]+n[e>>4&3]+n[e>>2&3]+n[3&e]}return a+i}(e)}`
    }])
}, 477846, (t, e, r) => {
    t.e, e.exports = function() {
        function t(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
            return n
        }

        function e() {
            return (e = Object.assign.bind()).apply(null, arguments)
        }
        var r = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";

        function n(t) {
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
            i = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
            o = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"],
            l = ["format"],
            s = function() {
                function s(t, r) {
                    this.options = void 0, this.options = t ? e({}, t.options || {}, r || {}) : e({}, r || {})
                }
                var c = s.prototype;
                return c.withOptions = function(r) {
                    var n = r.baseUrl || this.options.baseUrl,
                        i = {
                            baseUrl: n
                        };
                    for (var o in r) r.hasOwnProperty(o) && (i[function(e) {
                        for (var r, n = function(e) {
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
                                    var n = 0;
                                    return function() {
                                        return n >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[n++]
                                        }
                                    }
                                }
                                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }(a); !(r = n()).done;) {
                            var i = r.value,
                                o = i[0],
                                l = i[1];
                            if (e === o || e === l) return o
                        }
                        return e
                    }(o)] = r[o]);
                    return new s(this, e({
                        baseUrl: n
                    }, i))
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
                }, c.rect = function(t, e, r, n) {
                    return this.withOptions({
                        rect: {
                            left: t,
                            top: e,
                            width: r,
                            height: n
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
                    if (-1 === i.indexOf(t)) throw Error('Invalid fit mode "' + t + '"');
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
                        var i = e({}, t || {}),
                            o = i.source;
                        delete i.source;
                        var l = function(t) {
                            var r, a;
                            if (!t) return null;
                            if ("string" == typeof t && (a = t, /^https?:\/\//.test("" + a))) r = {
                                asset: {
                                    _ref: n(t)
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
                                    _ref: n(t.asset.url)
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
                                    n = e[1],
                                    a = e[2],
                                    i = e[3];
                                if (!n || !a || !i) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + r + '".');
                                var o = a.split("x"),
                                    l = o[0],
                                    s = o[1],
                                    c = +l,
                                    u = +s;
                                if (!(isFinite(c) && isFinite(u))) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + r + '".');
                                return {
                                    id: n,
                                    width: c,
                                    height: u,
                                    format: i
                                }
                            }(l.asset._ref || l.asset._id || ""),
                            c = Math.round(l.crop.left * s.width),
                            u = Math.round(l.crop.top * s.height),
                            h = {
                                left: c,
                                top: u,
                                width: Math.round(s.width - l.crop.right * s.width - c),
                                height: Math.round(s.height - l.crop.bottom * s.height - u)
                            },
                            p = l.hotspot.height * s.height / 2,
                            f = l.hotspot.width * s.width / 2,
                            d = l.hotspot.x * s.width,
                            m = l.hotspot.y * s.height;
                        return i.rect || i.focalPoint || i.ignoreImageParams || i.crop || (i = e({}, i, function(t, e) {
                                var r, n = e.width,
                                    a = e.height;
                                if (!(n && a)) return {
                                    width: n,
                                    height: a,
                                    rect: t.crop
                                };
                                var i = t.crop,
                                    o = t.hotspot,
                                    l = n / a;
                                if (i.width / i.height > l) {
                                    var s = Math.round(i.height),
                                        c = Math.round(s * l),
                                        u = Math.max(0, Math.round(i.top)),
                                        h = Math.max(0, Math.round(Math.round((o.right - o.left) / 2 + o.left) - c / 2));
                                    h < i.left ? h = i.left : h + c > i.left + i.width && (h = i.left + i.width - c), r = {
                                        left: h,
                                        top: u,
                                        width: c,
                                        height: s
                                    }
                                } else {
                                    var p = i.width,
                                        f = Math.round(p / l),
                                        d = Math.max(0, Math.round(i.left)),
                                        m = Math.max(0, Math.round(Math.round((o.bottom - o.top) / 2 + o.top) - f / 2));
                                    m < i.top ? m = i.top : m + f > i.top + i.height && (m = i.top + i.height - f), r = {
                                        left: d,
                                        top: m,
                                        width: p,
                                        height: f
                                    }
                                }
                                return {
                                    width: n,
                                    height: a,
                                    rect: r
                                }
                            }({
                                crop: h,
                                hotspot: {
                                    left: d - f,
                                    top: m - p,
                                    right: d + f,
                                    bottom: m + p
                                }
                            }, i))),
                            function(t) {
                                var e = (t.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""),
                                    r = t.vanityName ? "/" + t.vanityName : "",
                                    n = t.asset.id + "-" + t.asset.width + "x" + t.asset.height + "." + t.asset.format + r,
                                    i = e + "/images/" + t.projectId + "/" + t.dataset + "/" + n,
                                    o = [];
                                if (t.rect) {
                                    var l = t.rect,
                                        s = l.left,
                                        c = l.top,
                                        u = l.width,
                                        h = l.height;
                                    (0 !== s || 0 !== c || h !== t.asset.height || u !== t.asset.width) && o.push("rect=" + s + "," + c + "," + u + "," + h)
                                }
                                t.bg && o.push("bg=" + t.bg), t.focalPoint && (o.push("fp-x=" + t.focalPoint.x), o.push("fp-y=" + t.focalPoint.y));
                                var p = [t.flipHorizontal && "h", t.flipVertical && "v"].filter(Boolean).join("");
                                return (p && o.push("flip=" + p), a.forEach(function(e) {
                                    var r = e[0],
                                        n = e[1];
                                    void 0 !== t[r] ? o.push(n + "=" + encodeURIComponent(t[r])) : void 0 !== t[n] && o.push(n + "=" + encodeURIComponent(t[n]))
                                }), 0 === o.length) ? i : i + "?" + o.join("&")
                            }(e({}, i, {
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
                    n = e.projectId,
                    a = e.dataset;
                return new s(null, {
                    baseUrl: (r || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
                    projectId: n,
                    dataset: a
                })
            }
            if (t && "clientConfig" in t && "object" == typeof t.clientConfig) {
                var i = t.clientConfig,
                    o = i.apiHost,
                    l = i.projectId,
                    c = i.dataset;
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
}, 210643, t => {
    "use strict";
    var e = t.i(499531),
        r = t.i(848662);
    let n = new Map([
            ["bold", e.createElement(e.Fragment, null, e.createElement("path", {
                d: "M200,28H160a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20h40a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28Zm-4,176H164V52h32ZM96,28H56A20,20,0,0,0,36,48V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V48A20,20,0,0,0,96,28ZM92,204H60V52H92Z"
            }))],
            ["duotone", e.createElement(e.Fragment, null, e.createElement("path", {
                d: "M208,48V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h40A8,8,0,0,1,208,48ZM96,40H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V48A8,8,0,0,0,96,40Z",
                opacity: "0.2"
            }), e.createElement("path", {
                d: "M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"
            }))],
            ["fill", e.createElement(e.Fragment, null, e.createElement("path", {
                d: "M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"
            }))],
            ["light", e.createElement(e.Fragment, null, e.createElement("path", {
                d: "M200,34H160a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14h40a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm2,174a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2ZM96,34H56A14,14,0,0,0,42,48V208a14,14,0,0,0,14,14H96a14,14,0,0,0,14-14V48A14,14,0,0,0,96,34Zm2,174a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H96a2,2,0,0,1,2,2Z"
            }))],
            ["regular", e.createElement(e.Fragment, null, e.createElement("path", {
                d: "M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"
            }))],
            ["thin", e.createElement(e.Fragment, null, e.createElement("path", {
                d: "M200,36H160a12,12,0,0,0-12,12V208a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm4,172a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4ZM96,36H56A12,12,0,0,0,44,48V208a12,12,0,0,0,12,12H96a12,12,0,0,0,12-12V48A12,12,0,0,0,96,36Zm4,172a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H96a4,4,0,0,1,4,4Z"
            }))]
        ]),
        a = e.forwardRef((t, a) => e.createElement(r.default, {
            ref: a,
            ...t,
            weights: n
        }));
    a.displayName = "PauseIcon", t.s(["Pause", 0, a, "PauseIcon", 0, a], 210643)
}, 846891, t => {
    "use strict";
    var e = t.i(499531),
        r = t.i(848662);
    let n = new Map([
            ["bold", e.createElement(e.Fragment, null, e.createElement("path", {
                d: "M234.49,111.07,90.41,22.94A20,20,0,0,0,60,39.87V216.13a20,20,0,0,0,30.41,16.93l144.08-88.13a19.82,19.82,0,0,0,0-33.86ZM84,208.85V47.15L216.16,128Z"
            }))],
            ["duotone", e.createElement(e.Fragment, null, e.createElement("path", {
                d: "M228.23,134.69,84.15,222.81A8,8,0,0,1,72,216.12V39.88a8,8,0,0,1,12.15-6.69l144.08,88.12A7.82,7.82,0,0,1,228.23,134.69Z",
                opacity: "0.2"
            }), e.createElement("path", {
                d: "M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"
            }))],
            ["fill", e.createElement(e.Fragment, null, e.createElement("path", {
                d: "M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"
            }))],
            ["light", e.createElement(e.Fragment, null, e.createElement("path", {
                d: "M231.36,116.19,87.28,28.06a14,14,0,0,0-14.18-.27A13.69,13.69,0,0,0,66,39.87V216.13a13.69,13.69,0,0,0,7.1,12.08,14,14,0,0,0,14.18-.27l144.08-88.13a13.82,13.82,0,0,0,0-23.62Zm-6.26,13.38L81,217.7a2,2,0,0,1-2.06,0,1.78,1.78,0,0,1-1-1.61V39.87a1.78,1.78,0,0,1,1-1.61A2.06,2.06,0,0,1,80,38a2,2,0,0,1,1,.31L225.1,126.43a1.82,1.82,0,0,1,0,3.14Z"
            }))],
            ["regular", e.createElement(e.Fragment, null, e.createElement("path", {
                d: "M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"
            }))],
            ["thin", e.createElement(e.Fragment, null, e.createElement("path", {
                d: "M230.32,117.9,86.24,29.79a11.91,11.91,0,0,0-12.17-.23A11.71,11.71,0,0,0,68,39.89V216.11a11.71,11.71,0,0,0,6.07,10.33,11.91,11.91,0,0,0,12.17-.23L230.32,138.1a11.82,11.82,0,0,0,0-20.2Zm-4.18,13.37L82.06,219.39a4,4,0,0,1-4.07.07,3.77,3.77,0,0,1-2-3.35V39.89a3.77,3.77,0,0,1,2-3.35,4,4,0,0,1,4.07.07l144.08,88.12a3.8,3.8,0,0,1,0,6.54Z"
            }))]
        ]),
        a = e.forwardRef((t, a) => e.createElement(r.default, {
            ref: a,
            ...t,
            weights: n
        }));
    a.displayName = "PlayIcon", t.s(["Play", 0, a, "PlayIcon", 0, a], 846891)
}, 690019, t => {
    "use strict";
    var e = t.i(14666),
        r = t.i(722978);
    let n = {
        xs: "mango-container-xs",
        sm: "mango-container-sm",
        md: "mango-container-md",
        lg: "mango-container-lg",
        xl: "mango-container"
    };
    t.s(["MANGO_DEFAULT_BLOCK_PADDING", 0, {
        top: "pt-[2.75rem]",
        bottom: "pb-[2.75rem]"
    }, "default", 0, ({
        children: t,
        className: a,
        style: i,
        theme: o = "light",
        padding: l,
        defaultBlockPadding: s,
        nested: c = !1,
        container: u
    }) => {
        let h = (0, r.default)(l?.top ? ({
            none: "pt-0",
            xs: "md:pt-8 pt-6",
            sm: "md:pt-20 pt-[2.75rem]",
            md: "md:pt-[9.25rem] pt-16",
            lg: "md:pt-[11.25rem] pt-[6rem]"
        })[l.top] : s.top, l?.bottom ? ({
            none: "pb-0",
            xs: "md:pb-8 pb-6",
            sm: "md:pb-20 pb-[2.75rem]",
            md: "md:pb-[9.25rem] pb-16",
            lg: "md:pb-[11.25rem] pb-[6rem]"
        })[l.bottom] : s.bottom);
        if (c) return (0, e.jsx)(e.Fragment, {
            children: t
        });
        let p = u ? (0, e.jsx)("div", {
                className: n[u],
                children: t
            }) : t,
            f = (0, r.default)({
                dark: "dark" === o
            });
        return (0, e.jsx)("section", {
            className: f,
            children: (0, e.jsx)("div", {
                className: (0, r.default)(a, h),
                style: i,
                children: p
            })
        })
    }])
}, 651235, t => {
    "use strict";
    let e = t.i(690019).default;
    t.s(["default", 0, e])
}, 809076, t => {
    "use strict";
    var e = t.i(14666),
        r = t.i(499531),
        n = t.i(74038),
        a = t.i(722978),
        i = t.i(131581),
        o = t.i(124576),
        l = t.i(210643),
        s = t.i(846891),
        c = t.i(291158),
        u = t.i(78070);
    let h = (0, t.i(10747).default)(() => t.A(104688), {
            loadableGenerated: {
                modules: [425687]
            },
            ssr: !1
        }),
        p = ({
            url: t,
            playing: r = !0,
            isActive: n = !0,
            loop: a = !0,
            muted: i = !0,
            playsinline: o = !0,
            controls: l = !1,
            onReady: s,
            className: c,
            style: u
        }) => (0, e.jsx)(h, {
            url: t,
            playing: n && r,
            loop: a,
            muted: i,
            playsinline: o,
            controls: l,
            width: "100%",
            height: "100%",
            className: c ?? "[&>video]:object-cover",
            style: u,
            onReady: s
        }),
        f = {
            "top-right": "absolute top-3 right-3 z-20",
            "top-left": "absolute top-3 left-3 z-20",
            "bottom-right": "absolute bottom-3 right-3 z-20",
            "bottom-left": "absolute bottom-3 left-3 z-20",
            center: "absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
        },
        d = {
            "top-right": "xs",
            "top-left": "xs",
            "bottom-right": "xs",
            "bottom-left": "xs",
            center: "md"
        },
        m = ({
            position: t,
            isPlaying: r,
            onToggle: n
        }) => (0, e.jsx)("span", {
            className: f[t],
            children: (0, e.jsx)(u.default, {
                disableAnimation: !0,
                icon: r ? (0, e.jsx)(l.Pause, {
                    weight: "fill"
                }) : (0, e.jsx)(s.Play, {
                    weight: "fill"
                }),
                iconWeight: "fill",
                variant: "secondary",
                size: d[t],
                onClick: n,
                ariaLabel: r ? "Pause video" : "Play video"
            })
        }),
        g = ({
            poster: t,
            posterSizes: r,
            posterPriority: i,
            visible: o,
            onClick: l,
            showPlayBadge: u,
            dim: h
        }) => {
            let p = (0, a.default)("absolute inset-0 transition-opacity duration-500", o ? "opacity-100 z-10" : "pointer-events-none opacity-0"),
                f = (0, e.jsxs)(e.Fragment, {
                    children: [(0, e.jsx)(n.default, {
                        src: t.src,
                        alt: t.alt ?? "",
                        fill: !0,
                        sizes: r,
                        priority: i,
                        className: (0, a.default)("object-cover", h && "brightness-75"),
                        ...t.placeholder ? {
                            placeholder: "blur",
                            blurDataURL: t.placeholder
                        } : {}
                    }), u && (0, e.jsx)("span", {
                        className: "absolute inset-0 flex items-center justify-center",
                        children: (0, e.jsx)("span", {
                            className: "dark:bg-mango-black/90 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black shadow-md transition-transform group-hover:scale-110 group-focus-visible:scale-110 dark:text-white",
                            children: (0, e.jsx)(c.default, {
                                as: s.Play,
                                size: "1.5rem",
                                weight: "fill"
                            })
                        })
                    })]
                });
            return l ? (0, e.jsx)("button", {
                type: "button",
                "aria-label": "Play video",
                className: `group block w-full ${p}`,
                onClick: l,
                children: f
            }) : (0, e.jsx)("div", {
                className: p,
                children: f
            })
        };
    t.s(["default", 0, ({
        src: t,
        mode: n = "click-to-play",
        poster: a,
        posterSizes: l = "100vw",
        posterPriority: s = !1,
        controls: c,
        isActive: u = !0,
        onPlayingChange: h,
        className: f
    }) => {
        let d = (0, r.useRef)(null),
            y = (0, i.useInView)(d, {
                once: !0
            }),
            b = (0, o.useReducedMotion)(),
            w = "click-to-play" === n,
            v = "autoplay" === n,
            [A, x] = (0, r.useState)(v),
            [E, j] = (0, r.useState)(!1),
            [O, M] = (0, r.useState)(v),
            V = t => {
                x(t), t && M(!0), h?.(t)
            },
            H = w ? A : y && !b,
            Z = !!a?.src && !(E && O),
            P = c ? "string" == typeof c ? c : A ? c.playing : c.paused : "none",
            I = w ? () => V(!0) : void 0;
        return (0, e.jsxs)("div", {
            ref: d,
            className: f ?? "relative aspect-video w-full overflow-hidden rounded-2xl bg-mango-black",
            children: [H && (0, e.jsx)(p, {
                url: t,
                isActive: u,
                playing: A,
                loop: !w,
                muted: !w,
                playsinline: !w,
                controls: w,
                onReady: () => j(!0)
            }), a?.src && (0, e.jsx)(g, {
                poster: a,
                posterSizes: l,
                posterPriority: s,
                visible: Z,
                onClick: I,
                showPlayBadge: w,
                dim: w
            }), "none" !== P && E && (0, e.jsx)(m, {
                position: P,
                isPlaying: A,
                onToggle: () => V(!A)
            })]
        })
    }], 809076)
}, 350747, t => {
    "use strict";
    let e = t.i(809076).default;
    t.s(["default", 0, e])
}, 106984, t => {
    "use strict";
    var e = t.i(499531),
        r = t.i(848662);
    let n = new Map([
            ["bold", e.createElement(e.Fragment, null, e.createElement("path", {
                d: "M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"
            }))],
            ["duotone", e.createElement(e.Fragment, null, e.createElement("path", {
                d: "M208,96l-80,80L48,96Z",
                opacity: "0.2"
            }), e.createElement("path", {
                d: "M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"
            }))],
            ["fill", e.createElement(e.Fragment, null, e.createElement("path", {
                d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"
            }))],
            ["light", e.createElement(e.Fragment, null, e.createElement("path", {
                d: "M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"
            }))],
            ["regular", e.createElement(e.Fragment, null, e.createElement("path", {
                d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"
            }))],
            ["thin", e.createElement(e.Fragment, null, e.createElement("path", {
                d: "M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"
            }))]
        ]),
        a = e.forwardRef((t, a) => e.createElement(r.default, {
            ref: a,
            ...t,
            weights: n
        }));
    a.displayName = "CaretDownIcon", t.s(["CaretDown", 0, a, "CaretDownIcon", 0, a], 106984)
}, 729e3, t => {
    "use strict";
    var e = t.i(499531),
        r = t.i(848662);
    let n = new Map([
            ["bold", e.createElement(e.Fragment, null, e.createElement("path", {
                d: "M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"
            }))],
            ["duotone", e.createElement(e.Fragment, null, e.createElement("path", {
                d: "M208,160H48l80-80Z",
                opacity: "0.2"
            }), e.createElement("path", {
                d: "M213.66,154.34l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,48,168H208a8,8,0,0,0,5.66-13.66ZM67.31,152,128,91.31,188.69,152Z"
            }))],
            ["fill", e.createElement(e.Fragment, null, e.createElement("path", {
                d: "M215.39,163.06A8,8,0,0,1,208,168H48a8,8,0,0,1-5.66-13.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,215.39,163.06Z"
            }))],
            ["light", e.createElement(e.Fragment, null, e.createElement("path", {
                d: "M212.24,164.24a6,6,0,0,1-8.48,0L128,88.49,52.24,164.24a6,6,0,0,1-8.48-8.48l80-80a6,6,0,0,1,8.48,0l80,80A6,6,0,0,1,212.24,164.24Z"
            }))],
            ["regular", e.createElement(e.Fragment, null, e.createElement("path", {
                d: "M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"
            }))],
            ["thin", e.createElement(e.Fragment, null, e.createElement("path", {
                d: "M210.83,162.83a4,4,0,0,1-5.66,0L128,85.66,50.83,162.83a4,4,0,0,1-5.66-5.66l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,210.83,162.83Z"
            }))]
        ]),
        a = e.forwardRef((t, a) => e.createElement(r.default, {
            ref: a,
            ...t,
            weights: n
        }));
    a.displayName = "CaretUpIcon", t.s(["CaretUp", 0, a, "CaretUpIcon", 0, a], 729e3)
}, 694983, t => {
    "use strict";
    var e = t.i(14666),
        r = t.i(722990),
        n = t.i(722978),
        a = t.i(691156),
        i = t.i(131564);
    let o = ({
        title: t,
        faqs: r,
        blockKey: o,
        theme: l
    }) => {
        let s = (0, n.default)("pb-28", {
            "dark bg-black": "dark" === l
        });
        return (0, e.jsxs)("section", {
            className: s,
            children: [(0, e.jsx)(i.default, {
                title: t
            }), (0, e.jsx)("div", {
                className: "container grid gap-1",
                children: r?.map((r, n) => (0, e.jsx)(a.default, {
                    title: r.question,
                    blockKey: `${o}-${t}-${n}`,
                    children: r.answer
                }, `faq-${t}-${n}`))
            })]
        })
    };
    t.s(["default", 0, ({
        title: t,
        faqs: n,
        blockKey: a,
        isHidden: i,
        theme: l
    }) => (0, e.jsx)(e.Fragment, {
        children: !i && (0, e.jsx)(o, {
            theme: "dark" === l ? "dark" : "light",
            title: t,
            faqs: n?.map(t => ({
                question: t.question,
                answer: (0, e.jsx)(r.PortableText, {
                    value: t.answer
                })
            })),
            blockKey: a
        })
    })], 694983)
}, 104688, t => {
    t.v(e => Promise.all(["static/chunks/156ajvr423zmj.js"].map(e => t.l(e))).then(() => e(425687)))
}, 70909, t => {
    t.v(e => Promise.all(["static/chunks/0xj6bqa5ymboh.js"].map(e => t.l(e))).then(() => e(376839)))
}, 440574, t => {
    t.v(e => Promise.all(["static/chunks/0dxyia2ts7431.js"].map(e => t.l(e))).then(() => e(33857)))
}, 574228, t => {
    t.v(e => Promise.all(["static/chunks/0bcyd6ixa4w04.js"].map(e => t.l(e))).then(() => e(10770)))
}]);