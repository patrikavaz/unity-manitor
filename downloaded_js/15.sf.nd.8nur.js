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
                    for (var n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
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

    function n(t) {
        return this instanceof n ? (this.v = t, this) : new n(t)
    }
    "function" == typeof SuppressedError && SuppressedError, t.s(["__assign", () => r, "__asyncGenerator", 0, function(t, e, r) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var i, o = r.apply(t, e || []),
            a = [];
        return i = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), l("next"), l("throw"), l("return", function(t) {
            return function(e) {
                return Promise.resolve(e).then(t, u)
            }
        }), i[Symbol.asyncIterator] = function() {
            return this
        }, i;

        function l(t, e) {
            o[t] && (i[t] = function(e) {
                return new Promise(function(r, i) {
                    a.push([t, e, r, i]) > 1 || s(t, e)
                })
            }, e && (i[t] = e(i[t])))
        }

        function s(t, e) {
            try {
                var r;
                (r = o[t](e)).value instanceof n ? Promise.resolve(r.value.v).then(c, u) : f(a[0][2], r)
            } catch (t) {
                f(a[0][3], t)
            }
        }

        function c(t) {
            s("next", t)
        }

        function u(t) {
            s("throw", t)
        }

        function f(t, e) {
            t(e), a.shift(), a.length && s(a[0][0], a[0][1])
        }
    }, "__asyncValues", 0, function(t) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var e, r = t[Symbol.asyncIterator];
        return r ? r.call(t) : (t = i(t), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
            return this
        }, e);

        function n(r) {
            e[r] = t[r] && function(e) {
                return new Promise(function(i, n) {
                    var o, a, l;
                    o = i, a = n, l = (e = t[r](e)).done, Promise.resolve(e.value).then(function(t) {
                        o({
                            value: t,
                            done: l
                        })
                    }, a)
                })
            }
        }
    }, "__await", 0, n, "__awaiter", 0, function(t, e, r, i) {
        return new(r || (r = Promise))(function(n, o) {
            function a(t) {
                try {
                    s(i.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function l(t) {
                try {
                    s(i.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function s(t) {
                var e;
                t.done ? n(t.value) : ((e = t.value) instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(a, l)
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
        var r, i, n, o = {
                label: 0,
                sent: function() {
                    if (1 & n[0]) throw n[1];
                    return n[1]
                },
                trys: [],
                ops: []
            },
            a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return a.next = l(0), a.throw = l(1), a.return = l(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function l(l) {
            return function(s) {
                var c = [l, s];
                if (r) throw TypeError("Generator is already executing.");
                for (; a && (a = 0, c[0] && (o = 0)), o;) try {
                    if (r = 1, i && (n = 2 & c[0] ? i.return : c[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, c[1])).done) return n;
                    switch (i = 0, n && (c = [2 & c[0], n.value]), c[0]) {
                        case 0:
                        case 1:
                            n = c;
                            break;
                        case 4:
                            return o.label++, {
                                value: c[1],
                                done: !1
                            };
                        case 5:
                            o.label++, i = c[1], c = [0];
                            continue;
                        case 7:
                            c = o.ops.pop(), o.trys.pop();
                            continue;
                        default:
                            if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                o = 0;
                                continue
                            }
                            if (3 === c[0] && (!n || c[1] > n[0] && c[1] < n[3])) {
                                o.label = c[1];
                                break
                            }
                            if (6 === c[0] && o.label < n[1]) {
                                o.label = n[1], n = c;
                                break
                            }
                            if (n && o.label < n[2]) {
                                o.label = n[2], o.ops.push(c);
                                break
                            }
                            n[2] && o.ops.pop(), o.trys.pop();
                            continue
                    }
                    c = e.call(t, o)
                } catch (t) {
                    c = [6, t], i = 0
                } finally {
                    r = n = 0
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
        var i, n, o = r.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
        } catch (t) {
            n = {
                error: t
            }
        } finally {
            try {
                i && !i.done && (r = o.return) && r.call(o)
            } finally {
                if (n) throw n.error
            }
        }
        return a
    }, "__rest", 0, function(t, e) {
        var r = {};
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && 0 > e.indexOf(i) && (r[i] = t[i]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols)
            for (var n = 0, i = Object.getOwnPropertySymbols(t); n < i.length; n++) 0 > e.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(t, i[n]) && (r[i[n]] = t[i[n]]);
        return r
    }, "__spreadArray", 0, function(t, e, r) {
        if (r || 2 == arguments.length)
            for (var i, n = 0, o = e.length; n < o; n++) !i && n in e || (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
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
    var n = `${Object.values(e).map(t=>`\\u{${t.toString(16)}}`).join("")}`,
        o = RegExp(`[${n}]{4,}`, "gu");
    t.s(["C", 0, function(t, e, n = "auto") {
        let o;
        return !0 === n || "auto" === n && (!(!Number.isNaN(Number(t)) || /[a-z]/i.test(t) && !/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(t)) && Date.parse(t) || function(t) {
            try {
                new URL(t, t.startsWith("/") ? "https://acme.com" : void 0)
            } catch {
                return !1
            }
            return !0
        }(t)) ? t : `${t}${o=JSON.stringify(e),`${i}${Array.from(o).map(t=>{let e=t.charCodeAt(0);if(e>255)throw Error(`Only ASCII edit info can be encoded. Error attempting to encode ${o} on character ${t} (${e})`);return Array.from(e.toString(4).padStart(4,"0")).map(t=>String.fromCodePoint(r[t])).join("")}).join("")}`}`
    }, "isRecord", 0, function(t) {
        return "object" == typeof t && null !== t && !Array.isArray(t)
    }, "stegaClean", 0, function(t) {
        var e, r;
        return t && JSON.parse({
            cleaned: (e = JSON.stringify(t)).replace(o, ""),
            encoded: (null == (r = e.match(o)) ? void 0 : r[0]) || ""
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
        var n = [
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
            o = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
            a = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"],
            l = ["format"],
            s = function() {
                function s(t, r) {
                    this.options = void 0, this.options = t ? e({}, t.options || {}, r || {}) : e({}, r || {})
                }
                var c = s.prototype;
                return c.withOptions = function(r) {
                    var i = r.baseUrl || this.options.baseUrl,
                        o = {
                            baseUrl: i
                        };
                    for (var a in r) r.hasOwnProperty(a) && (o[function(e) {
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
                            }(n); !(r = i()).done;) {
                            var o = r.value,
                                a = o[0],
                                l = o[1];
                            if (e === a || e === l) return a
                        }
                        return e
                    }(a)] = r[a]);
                    return new s(this, e({
                        baseUrl: i
                    }, o))
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
                    if (-1 === o.indexOf(t)) throw Error('Invalid fit mode "' + t + '"');
                    return this.withOptions({
                        fit: t
                    })
                }, c.crop = function(t) {
                    if (-1 === a.indexOf(t)) throw Error('Invalid crop mode "' + t + '"');
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
                        var o = e({}, t || {}),
                            a = o.source;
                        delete o.source;
                        var l = function(t) {
                            var r, n;
                            if (!t) return null;
                            if ("string" == typeof t && (n = t, /^https?:\/\//.test("" + n))) r = {
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
                        }(a);
                        if (!l) {
                            if (a && "object" == typeof a && null !== a && a._upload && (!a.asset || !a.asset._ref)) return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8HwQACfsD/QNViZkAAAAASUVORK5CYII=";
                            throw Error("Unable to resolve image URL from source (" + JSON.stringify(a) + ")")
                        }
                        var s = function(t) {
                                var e = t.split("-"),
                                    i = e[1],
                                    n = e[2],
                                    o = e[3];
                                if (!i || !n || !o) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + r + '".');
                                var a = n.split("x"),
                                    l = a[0],
                                    s = a[1],
                                    c = +l,
                                    u = +s;
                                if (!(isFinite(c) && isFinite(u))) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + r + '".');
                                return {
                                    id: i,
                                    width: c,
                                    height: u,
                                    format: o
                                }
                            }(l.asset._ref || l.asset._id || ""),
                            c = Math.round(l.crop.left * s.width),
                            u = Math.round(l.crop.top * s.height),
                            f = {
                                left: c,
                                top: u,
                                width: Math.round(s.width - l.crop.right * s.width - c),
                                height: Math.round(s.height - l.crop.bottom * s.height - u)
                            },
                            d = l.hotspot.height * s.height / 2,
                            h = l.hotspot.width * s.width / 2,
                            p = l.hotspot.x * s.width,
                            g = l.hotspot.y * s.height;
                        return o.rect || o.focalPoint || o.ignoreImageParams || o.crop || (o = e({}, o, function(t, e) {
                                var r, i = e.width,
                                    n = e.height;
                                if (!(i && n)) return {
                                    width: i,
                                    height: n,
                                    rect: t.crop
                                };
                                var o = t.crop,
                                    a = t.hotspot,
                                    l = i / n;
                                if (o.width / o.height > l) {
                                    var s = Math.round(o.height),
                                        c = Math.round(s * l),
                                        u = Math.max(0, Math.round(o.top)),
                                        f = Math.max(0, Math.round(Math.round((a.right - a.left) / 2 + a.left) - c / 2));
                                    f < o.left ? f = o.left : f + c > o.left + o.width && (f = o.left + o.width - c), r = {
                                        left: f,
                                        top: u,
                                        width: c,
                                        height: s
                                    }
                                } else {
                                    var d = o.width,
                                        h = Math.round(d / l),
                                        p = Math.max(0, Math.round(o.left)),
                                        g = Math.max(0, Math.round(Math.round((a.bottom - a.top) / 2 + a.top) - h / 2));
                                    g < o.top ? g = o.top : g + h > o.top + o.height && (g = o.top + o.height - h), r = {
                                        left: p,
                                        top: g,
                                        width: d,
                                        height: h
                                    }
                                }
                                return {
                                    width: i,
                                    height: n,
                                    rect: r
                                }
                            }({
                                crop: f,
                                hotspot: {
                                    left: p - h,
                                    top: g - d,
                                    right: p + h,
                                    bottom: g + d
                                }
                            }, o))),
                            function(t) {
                                var e = (t.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""),
                                    r = t.vanityName ? "/" + t.vanityName : "",
                                    i = t.asset.id + "-" + t.asset.width + "x" + t.asset.height + "." + t.asset.format + r,
                                    o = e + "/images/" + t.projectId + "/" + t.dataset + "/" + i,
                                    a = [];
                                if (t.rect) {
                                    var l = t.rect,
                                        s = l.left,
                                        c = l.top,
                                        u = l.width,
                                        f = l.height;
                                    (0 !== s || 0 !== c || f !== t.asset.height || u !== t.asset.width) && a.push("rect=" + s + "," + c + "," + u + "," + f)
                                }
                                t.bg && a.push("bg=" + t.bg), t.focalPoint && (a.push("fp-x=" + t.focalPoint.x), a.push("fp-y=" + t.focalPoint.y));
                                var d = [t.flipHorizontal && "h", t.flipVertical && "v"].filter(Boolean).join("");
                                return (d && a.push("flip=" + d), n.forEach(function(e) {
                                    var r = e[0],
                                        i = e[1];
                                    void 0 !== t[r] ? a.push(i + "=" + encodeURIComponent(t[r])) : void 0 !== t[i] && a.push(i + "=" + encodeURIComponent(t[i]))
                                }), 0 === a.length) ? o : o + "?" + a.join("&")
                            }(e({}, o, {
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
                    n = e.dataset;
                return new s(null, {
                    baseUrl: (r || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
                    projectId: i,
                    dataset: n
                })
            }
            if (t && "clientConfig" in t && "object" == typeof t.clientConfig) {
                var o = t.clientConfig,
                    a = o.apiHost,
                    l = o.projectId,
                    c = o.dataset;
                return new s(null, {
                    baseUrl: (a || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
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
}, 14452, t => {
    "use strict";
    var e = t.i(500783),
        r = t.i(722978);
    t.s(["default", 0, ({
        children: t,
        className: i = "",
        tag: n = "div"
    }) => {
        let o = (0, r.default)("loco-text-heading-sm mb-4", i);
        return (0, e.jsx)(n, {
            className: o,
            children: t
        })
    }], 14452)
}, 649042, 667900, 2062, t => {
    "use strict";
    var e = t.i(500783),
        r = t.i(3931),
        i = t.i(722990),
        n = t.i(722978),
        o = t.i(655105),
        a = t.i(825610),
        l = t.i(387660);
    let s = ({
        children: t,
        tag: r = "div",
        className: i = ""
    }) => {
        let o = (0, n.default)("loco-caption-lg-semibold mb-4", i);
        return (0, e.jsx)(r, {
            className: o,
            children: t
        })
    };
    t.s(["default", 0, s], 667900);
    var c = t.i(749583);
    let u = ({
        children: t,
        className: r = "",
        orientation: i = "horizontal"
    }) => {
        let o = (0, n.default)("flex gap-2 flex-wrap", {
            "flex-col items-start": "vertical" === i
        }, r);
        return (0, e.jsx)("div", {
            className: o,
            children: t
        })
    };
    t.s(["default", 0, u], 2062);
    var f = t.i(14452),
        d = t.i(805518),
        h = t.i(526826),
        p = t.i(766930);
    let g = ({
        features: t,
        transitionTime: i = 8500
    }) => {
        let [n, o] = (0, r.useState)(0), a = (0, r.useRef)(null), l = (0, r.useRef)(null), [s, u] = (0, r.useState)(!1), [f, d] = (0, r.useState)(!1), g = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
            t.forEach(t => {
                t.icon && (new window.Image().src = t.icon, new window.Image().src = t.icon)
            })
        }, [t]), (0, r.useEffect)(() => {
            let t = new IntersectionObserver(([t]) => {
                u(t.intersectionRatio >= .8)
            }, {
                threshold: [0, .8, 1]
            });
            return l.current && t.observe(l.current), () => t.disconnect()
        }, []), (0, r.useEffect)(() => (a.current && clearTimeout(a.current), s && !f && (a.current = setTimeout(() => {
            o(e => (e + 1) % t.length)
        }, i)), () => {
            a.current && clearTimeout(a.current)
        }), [n, t.length, i, s, f]);
        let m = (0, r.useCallback)(e => {
                let r = e === n;
                o(e), d(!0);
                let a = t[e];
                a?.onCardClick && setTimeout(() => {
                    a.onCardClick?.(r)
                }, 0), g.current && clearTimeout(g.current), g.current = setTimeout(() => {
                    d(!1)
                }, i)
            }, [n, t, i]),
            y = (0, r.useCallback)((t, e) => {
                ("Enter" === t.key || " " === t.key) && (t.preventDefault(), m(e))
            }, [m]);
        return (0, r.useEffect)(() => () => {
            g.current && clearTimeout(g.current)
        }, []), (0, e.jsx)(p.default, {
            children: (0, e.jsx)("div", {
                ref: l,
                className: "relative inline-flex w-full flex-col items-start justify-start gap-2 self-stretch px-5 pb-6 md:px-5 md:pb-6 lg:px-0 lg:pb-0 xl:px-20",
                children: t.map((t, r) => {
                    let i = r === n;
                    return (0, e.jsxs)("div", {
                        "data-mobile": "true",
                        "data-show-image": i ? "true" : "false",
                        "data-state": i ? "selected" : "inactive",
                        role: "button",
                        tabIndex: 0,
                        className: `cursor-pointer self-stretch overflow-hidden rounded-lg bg-white ${i?`${t.icon?"lg:pl-36":"lg:pl-10"} p-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04),0px_2px_12px_3px_rgba(0,0,0,0.04)] lg:py-8 lg:pr-10`:"p-6 lg:px-10 lg:py-6"} flex lg:inline-flex lg:items-start ${i?"flex-col":"items-center"} relative justify-start gap-2 transition-all duration-500 ease-out`,
                        onClick: () => m(r),
                        onKeyDown: t => y(t, r),
                        children: [t.icon && i && (0, e.jsx)(h.m.div, {
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
                        }), t.icon && i && (0, e.jsx)(h.m.div, {
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
                            children: [i && (0, e.jsx)(h.m.div, {
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
                                children: (0, e.jsx)(h.m.div, {
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
                            }), i && (0, e.jsx)(h.m.div, {
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
                            }), i && (0, e.jsx)(h.m.div, {
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
                                children: (0, e.jsx)(c.default, {
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
        y = t.i(430215),
        x = t.i(224601),
        b = t.i(153348),
        v = t.i(955429),
        w = t.i(828083),
        j = t.i(186114);
    let O = (0, w.default)(() => t.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        _ = ({
            actions: t = [],
            aspectRatio: i,
            backgroundImage: h = !1,
            description: p,
            eyebrow: w,
            image: _,
            mediaPosition: k = "right",
            size: A = "default",
            title: N,
            youtubeVideo: I,
            brandfolderVideo: S,
            videoInline: C = !1,
            buttonLabel: E = "Play Video",
            blockKey: P,
            blockedMessage: R,
            consentButtonLabel: M,
            featureList: $,
            variant: U = "default"
        }) => {
            let T = (0, y.default)(`(max-width: ${m.default.Large}px)`),
                L = (0, r.useRef)(null),
                [H, z] = (0, r.useState)(!1),
                B = (0, b.useInView)(L, {
                    once: !0
                }),
                V = (0, v.useReducedMotion)(),
                W = (0, r.useRef)({
                    total: 0,
                    progress: 0
                }),
                F = $ && $.length > 0,
                D = !F && I?.url;
            (0, r.useEffect)(() => {
                C || z(!1)
            }, [B]);
            let q = () => {
                    z(!0)
                },
                K = (0, n.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                    "opacity-0 pointer-events-none": H && !V && B && S?.src
                }),
                G = (0, n.default)("relative", {
                    "py-10 lg:py-24": "gdc2026" === U,
                    "lg:py-14": F,
                    "lg:py-24": !F && "default" === A && (!i || "16:9" === i) && "gdc2026" !== U,
                    "lg:py-80": !F && "large" === A && (!i || "16:9" === i),
                    "lg:py-40": !F && "large" === A && "1:1" === i,
                    "dark bg-gray-900 overflow-hidden": h,
                    "bg-gray-100 dark:bg-black": !h && F,
                    "bg-white dark:bg-black": !h && !F
                }),
                J = (0, n.default)("grid grid-flow-row grid-cols-12 place-items-center gap-4", {
                    "p-4": "gdc2026" === U,
                    "lg:grid-flow-col": !0,
                    "lg:container": !i || "16:9" === i
                }),
                Q = (0, n.default)("font-nohemi! text-gray-900 dark:text-gray-100 whitespace-pre-line", {
                    "loco-text-heading-md!": "gdc2026" === U
                }),
                Y = (0, n.default)("relative w-full rounded-lg", {
                    "aspect-square": "1:1" === i,
                    "aspect-video": "16:9" === i,
                    "overflow-hidden": !I?.url
                }),
                Z = (0, n.default)("relative col-span-12 flex h-full flex-col w-full items-center lg:items-start", {
                    "lg:col-span-8": "gdc2026" === U,
                    "lg:col-span-6": "gdc2026" !== U,
                    "lg:col-start-1": "left" === k,
                    "lg:col-start-5": "right" === k && "gdc2026" === U,
                    "lg:col-start-7": "right" === k && "gdc2026" !== U,
                    "order-first": !F || !T,
                    "order-last": F && T
                }),
                X = (0, n.default)("relative col-span-12 px-5 text-center lg:pb-0 lg:text-left", {
                    "lg:col-span-4": "gdc2026" === U,
                    "lg:col-span-5": "gdc2026" !== U,
                    "pb-6": !(F && T),
                    "py-6": F && T,
                    "lg:col-start-9": "left" === k && "gdc2026" === U,
                    "lg:col-start-8": "left" === k && "gdc2026" !== U && (!i || "16:9" === i),
                    "lg:col-start-1": "right" === k && (!i || "16:9" === i),
                    "lg:col-start-2": "right" === k && "1:1" === i,
                    "order-first": F && T
                }),
                tt = t => {
                    let e = W.current.progress / W.current.total * 100 || 0;
                    (0, l.pushVideoEvent)({
                        name: t,
                        videoDuration: W.current.total,
                        videoProgress: Number(e)
                    })
                };
            return (0, e.jsxs)("section", {
                className: G,
                children: [h && (0, e.jsx)(o.default, {
                    src: _.src,
                    alt: _.alt,
                    fill: !0,
                    className: "blur-2xl brightness-[0.2]"
                }), (0, e.jsxs)("div", {
                    className: J,
                    ref: L,
                    children: [F ? (0, e.jsx)("div", {
                        className: Z,
                        children: (0, e.jsx)(g, {
                            features: $
                        })
                    }) : D ? (0, e.jsx)("div", {
                        className: Z,
                        children: (0, e.jsx)("div", {
                            className: Y,
                            children: (0, e.jsx)(x.default, {
                                url: I?.url || "",
                                title: I?.title ?? "",
                                blockedMessage: R,
                                consentButtonLabel: M
                            })
                        })
                    }) : (0, e.jsxs)("div", {
                        className: Z,
                        children: [(0, e.jsxs)("div", {
                            className: Y,
                            children: [B && !V && S?.src && (0, e.jsx)(O, {
                                url: S.src,
                                playing: H,
                                loop: !!C,
                                muted: C,
                                playsinline: C,
                                width: "100%",
                                height: "100%",
                                onDuration: t => W.current.total = t,
                                onProgress: t => {
                                    W.current.progress = 10 * t.played
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
                            }), _.src && (0, e.jsxs)("div", {
                                className: K,
                                onClick: q,
                                children: [S?.src && !C && (0, e.jsx)(j.default, {
                                    handleIsPlaying: q,
                                    className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                    label: E,
                                    "data-link-location": P || a.trackingLocation.fullWidthBlockAction,
                                    "data-link-id": `${P||a.trackingLocation.fullWidthBlockAction}-video-play`
                                }), (0, e.jsx)(o.default, {
                                    src: _.src,
                                    alt: _.alt,
                                    placeholder: "blur",
                                    blurDataURL: _.placeholder,
                                    fill: !0
                                })]
                            })]
                        }), _.caption && (0, e.jsx)("div", {
                            className: "loco-text-body-sm-medium z-10 mt-3 mb-6 text-gray-600 lg:mb-3",
                            children: _.caption
                        })]
                    }), (0, e.jsxs)("div", {
                        className: X,
                        children: [w && (0, e.jsx)(s, {
                            className: "text-gray-900 dark:text-gray-100",
                            children: w
                        }), (0, e.jsx)(f.default, {
                            tag: "h2",
                            className: Q,
                            children: N
                        }), (0, e.jsx)(d.default, {
                            className: "mb-10 text-gray-900 dark:text-gray-100",
                            children: p
                        }), (0, e.jsx)(u, {
                            className: "justify-center lg:justify-normal",
                            children: t.length > 0 && t.map((t, r) => (0, e.jsx)(c.default, {
                                variant: 0 === r ? "primary" : "secondary",
                                outlined: 0 === r,
                                size: T ? "small" : "medium",
                                rounded: !0,
                                hasArrow: !0,
                                href: t.href,
                                target: t.target,
                                "data-link-location": P ?? a.trackingLocation.fullWidthBlockAction,
                                "data-link-id": `${P??a.trackingLocation.fullWidthBlockAction}-action-${r}`,
                                children: t.label
                            }, `full-width-block-action-${r}`))
                        })]
                    })]
                })]
            })
        };
    var k = t.i(775041),
        A = t.i(779712),
        N = t.i(869324);
    t.s(["default", 0, ({
        actions: t,
        backgroundImage: n,
        description: o,
        eyebrow: a,
        image: l,
        mediaAspectRatio: s,
        mediaPosition: c,
        size: u,
        variant: f,
        title: d,
        theme: h,
        youtubeVideo: p,
        brandfolderVideo: g,
        buttonLabel: m,
        videoInline: y,
        blockKey: x,
        isHidden: b,
        consent: v,
        featureList: w,
        productCategoryFilter: j
    }) => {
        let [O] = (0, r.useContext)(k.FiltersContext);
        if (O.categories && O.categories.length > 0 && 1 === O.categories.findIndex(({
                _id: t
            }) => t === O.selectedCategory) && null != O.selectedSubcategory) return null;
        let {
            subcategories: I,
            productCatalogItems: S
        } = O.categories.find(({
            _id: t
        }) => t === O.selectedCategory) || {}, C = null != O.selectedSubcategory ? (I || []).find(({
            _id: t
        }) => t === O.selectedSubcategory) : null, E = !j || j.categories?.find(t => t._id === O.selectedCategory) != null && (null == C || !j.subcategories || j.subcategories.some(({
            _id: t
        }) => t === O.selectedSubcategory)), P = t?.map(({
            title: t,
            link: e
        }) => {
            let r = e?.linkReference?.target === "_blank" ? "_blank" : "_self";
            return {
                label: t,
                href: e?.linkReference?.href.current || "/",
                target: r
            }
        }), R = w?.map((t, e) => {
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
                    if (!e && w?.[t]) {
                        let e = w[t];
                        (0, N.default)({
                            event: "userEvent",
                            event_name: "navigation_click",
                            properties: {
                                navigation_click_text: e.title || "",
                                link_type: "feature list item",
                                form_name: e.title || "",
                                form_id: `list-item-${t}`,
                                block_title: d
                            }
                        })
                    }
                })(e, t)
            }
        });
        return (0, e.jsx)(e.Fragment, {
            children: !b && E && (0, e.jsx)("section", {
                className: "dark" === h ? "dark" : "",
                children: (0, e.jsx)(_, {
                    actions: P,
                    aspectRatio: "16:9" === s ? "16:9" : "1:1" === s ? "1:1" : void 0,
                    backgroundImage: n,
                    description: (0, e.jsx)(i.PortableText, {
                        value: o
                    }),
                    eyebrow: a,
                    image: {
                        src: (0, A.urlForImage)(l?.file?.asset?.url || "")?.auto("format")?.url() || "",
                        placeholder: l?.file?.asset.metadata?.lqip || "",
                        alt: l?.alt || "",
                        caption: l?.caption || ""
                    },
                    mediaPosition: "right" === c ? "right" : "left" === c ? "left" : void 0,
                    size: "large" === u ? "large" : "default" === u ? "default" : void 0,
                    variant: "gdc2026" === f ? "gdc2026" : "default" === f ? "default" : void 0,
                    title: d,
                    youtubeVideo: p,
                    brandfolderVideo: {
                        src: g?.muxHLSURL || ""
                    },
                    videoInline: y,
                    buttonLabel: m,
                    blockKey: x,
                    blockedMessage: v?.blockedMessage,
                    consentButtonLabel: v?.consentButtonLabel || "",
                    featureList: R
                })
            })
        })
    }], 649042)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "70576554-7ab9-5d77-8951-06eca1595512")
    } catch (e) {}
}();
//# debugId=70576554-7ab9-5d77-8951-06eca1595512