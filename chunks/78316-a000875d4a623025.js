try {
    ! function() {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            i = (new t.Error).stack;
        i && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[i] = "d7a1ae37-7f46-4577-9b4e-5afdc2f7dfe3", t._sentryDebugIdIdentifier = "sentry-dbid-d7a1ae37-7f46-4577-9b4e-5afdc2f7dfe3")
    }()
} catch (t) {}! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
        t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = function(t) {
            for (var i = 1; i < arguments.length; i++) {
                var n = arguments[i];
                if (null != n)
                    for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
            }
            return t
        }({}, t._sentryModuleMetadata[(new t.Error).stack], {
            "_sentryBundlerPluginAppKey:hexagon-web": !0
        })
    } catch (t) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [78316], {
        78316: function(t) {
            t.exports = function() {
                function t(t, i) {
                    (null == i || i > t.length) && (i = t.length);
                    for (var n = 0, e = Array(i); n < i; n++) e[n] = t[n];
                    return e
                }

                function i() {
                    return (i = Object.assign ? Object.assign.bind() : function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var n = arguments[i];
                            for (var e in n)({}).hasOwnProperty.call(n, e) && (t[e] = n[e])
                        }
                        return t
                    }).apply(null, arguments)
                }
                var n = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";

                function e(t) {
                    return ("image-" + t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/, "-$1")
                }
                var r = [
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
                    s = ["format"],
                    h = function() {
                        function h(t, n) {
                            this.options = void 0, this.options = t ? i({}, t.options || {}, n || {}) : i({}, n || {})
                        }
                        var f = h.prototype;
                        return f.withOptions = function(n) {
                            var e = n.baseUrl || this.options.baseUrl,
                                o = {
                                    baseUrl: e
                                };
                            for (var a in n) n.hasOwnProperty(a) && (o[function(i) {
                                for (var n, e = function(i, n) {
                                        var e = "undefined" != typeof Symbol && i[Symbol.iterator] || i["@@iterator"];
                                        if (e) return (e = e.call(i)).next.bind(e);
                                        if (Array.isArray(i) || (e = function(i, n) {
                                                if (i) {
                                                    if ("string" == typeof i) return t(i, void 0);
                                                    var e = ({}).toString.call(i).slice(8, -1);
                                                    return "Object" === e && i.constructor && (e = i.constructor.name), "Map" === e || "Set" === e ? Array.from(i) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? t(i, n) : void 0
                                                }
                                            }(i))) {
                                            e && (i = e);
                                            var r = 0;
                                            return function() {
                                                return r >= i.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: i[r++]
                                                }
                                            }
                                        }
                                        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }(r); !(n = e()).done;) {
                                    var o = n.value,
                                        a = o[0],
                                        s = o[1];
                                    if (i === a || i === s) return a
                                }
                                return i
                            }(a)] = n[a]);
                            return new h(this, i({
                                baseUrl: e
                            }, o))
                        }, f.image = function(t) {
                            return this.withOptions({
                                source: t
                            })
                        }, f.dataset = function(t) {
                            return this.withOptions({
                                dataset: t
                            })
                        }, f.projectId = function(t) {
                            return this.withOptions({
                                projectId: t
                            })
                        }, f.bg = function(t) {
                            return this.withOptions({
                                bg: t
                            })
                        }, f.dpr = function(t) {
                            return this.withOptions(t && 1 !== t ? {
                                dpr: t
                            } : {})
                        }, f.width = function(t) {
                            return this.withOptions({
                                width: t
                            })
                        }, f.height = function(t) {
                            return this.withOptions({
                                height: t
                            })
                        }, f.focalPoint = function(t, i) {
                            return this.withOptions({
                                focalPoint: {
                                    x: t,
                                    y: i
                                }
                            })
                        }, f.maxWidth = function(t) {
                            return this.withOptions({
                                maxWidth: t
                            })
                        }, f.minWidth = function(t) {
                            return this.withOptions({
                                minWidth: t
                            })
                        }, f.maxHeight = function(t) {
                            return this.withOptions({
                                maxHeight: t
                            })
                        }, f.minHeight = function(t) {
                            return this.withOptions({
                                minHeight: t
                            })
                        }, f.size = function(t, i) {
                            return this.withOptions({
                                width: t,
                                height: i
                            })
                        }, f.blur = function(t) {
                            return this.withOptions({
                                blur: t
                            })
                        }, f.sharpen = function(t) {
                            return this.withOptions({
                                sharpen: t
                            })
                        }, f.rect = function(t, i, n, e) {
                            return this.withOptions({
                                rect: {
                                    left: t,
                                    top: i,
                                    width: n,
                                    height: e
                                }
                            })
                        }, f.format = function(t) {
                            return this.withOptions({
                                format: t
                            })
                        }, f.invert = function(t) {
                            return this.withOptions({
                                invert: t
                            })
                        }, f.orientation = function(t) {
                            return this.withOptions({
                                orientation: t
                            })
                        }, f.quality = function(t) {
                            return this.withOptions({
                                quality: t
                            })
                        }, f.forceDownload = function(t) {
                            return this.withOptions({
                                download: t
                            })
                        }, f.flipHorizontal = function() {
                            return this.withOptions({
                                flipHorizontal: !0
                            })
                        }, f.flipVertical = function() {
                            return this.withOptions({
                                flipVertical: !0
                            })
                        }, f.ignoreImageParams = function() {
                            return this.withOptions({
                                ignoreImageParams: !0
                            })
                        }, f.fit = function(t) {
                            if (-1 === o.indexOf(t)) throw Error('Invalid fit mode "' + t + '"');
                            return this.withOptions({
                                fit: t
                            })
                        }, f.crop = function(t) {
                            if (-1 === a.indexOf(t)) throw Error('Invalid crop mode "' + t + '"');
                            return this.withOptions({
                                crop: t
                            })
                        }, f.saturation = function(t) {
                            return this.withOptions({
                                saturation: t
                            })
                        }, f.auto = function(t) {
                            if (-1 === s.indexOf(t)) throw Error('Invalid auto mode "' + t + '"');
                            return this.withOptions({
                                auto: t
                            })
                        }, f.pad = function(t) {
                            return this.withOptions({
                                pad: t
                            })
                        }, f.vanityName = function(t) {
                            return this.withOptions({
                                vanityName: t
                            })
                        }, f.frame = function(t) {
                            if (1 !== t) throw Error('Invalid frame value "' + t + '"');
                            return this.withOptions({
                                frame: t
                            })
                        }, f.url = function() {
                            return function(t) {
                                var o = i({}, t || {}),
                                    a = o.source;
                                delete o.source;
                                var s = function(t) {
                                    var n, r;
                                    if (!t) return null;
                                    if ("string" == typeof t && (r = t, /^https?:\/\//.test("" + r))) n = {
                                        asset: {
                                            _ref: e(t)
                                        }
                                    };
                                    else if ("string" == typeof t) n = {
                                        asset: {
                                            _ref: t
                                        }
                                    };
                                    else if (t && "string" == typeof t._ref) n = {
                                        asset: t
                                    };
                                    else if (t && "string" == typeof t._id) n = {
                                        asset: {
                                            _ref: t._id || ""
                                        }
                                    };
                                    else if (t && t.asset && "string" == typeof t.asset.url) n = {
                                        asset: {
                                            _ref: e(t.asset.url)
                                        }
                                    };
                                    else {
                                        if ("object" != typeof t.asset) return null;
                                        n = i({}, t)
                                    }
                                    return t.crop && (n.crop = t.crop), t.hotspot && (n.hotspot = t.hotspot),
                                        function(t) {
                                            if (t.crop && t.hotspot) return t;
                                            var n = i({}, t);
                                            return n.crop || (n.crop = {
                                                left: 0,
                                                top: 0,
                                                bottom: 0,
                                                right: 0
                                            }), n.hotspot || (n.hotspot = {
                                                x: .5,
                                                y: .5,
                                                height: 1,
                                                width: 1
                                            }), n
                                        }(n)
                                }(a);
                                if (!s) {
                                    if (a && "object" == typeof a && null !== a && a._upload && (!a.asset || !a.asset._ref)) return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8HwQACfsD/QNViZkAAAAASUVORK5CYII=";
                                    throw Error("Unable to resolve image URL from source (" + JSON.stringify(a) + ")")
                                }
                                var h = function(t) {
                                        var i = t.split("-"),
                                            e = i[1],
                                            r = i[2],
                                            o = i[3];
                                        if (!e || !r || !o) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + n + '".');
                                        var a = r.split("x"),
                                            s = a[0],
                                            h = a[1],
                                            f = +s,
                                            u = +h;
                                        if (!(isFinite(f) && isFinite(u))) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + n + '".');
                                        return {
                                            id: e,
                                            width: f,
                                            height: u,
                                            format: o
                                        }
                                    }(s.asset._ref || s.asset._id || ""),
                                    f = Math.round(s.crop.left * h.width),
                                    u = Math.round(s.crop.top * h.height),
                                    p = {
                                        left: f,
                                        top: u,
                                        width: Math.round(h.width - s.crop.right * h.width - f),
                                        height: Math.round(h.height - s.crop.bottom * h.height - u)
                                    },
                                    l = s.hotspot.height * h.height / 2,
                                    d = s.hotspot.width * h.width / 2,
                                    c = s.hotspot.x * h.width,
                                    w = s.hotspot.y * h.height;
                                return o.rect || o.focalPoint || o.ignoreImageParams || o.crop || (o = i({}, o, function(t, i) {
                                        var n, e = i.width,
                                            r = i.height;
                                        if (!(e && r)) return {
                                            width: e,
                                            height: r,
                                            rect: t.crop
                                        };
                                        var o = t.crop,
                                            a = t.hotspot,
                                            s = e / r;
                                        if (o.width / o.height > s) {
                                            var h = Math.round(o.height),
                                                f = Math.round(h * s),
                                                u = Math.max(0, Math.round(o.top)),
                                                p = Math.max(0, Math.round(Math.round((a.right - a.left) / 2 + a.left) - f / 2));
                                            p < o.left ? p = o.left : p + f > o.left + o.width && (p = o.left + o.width - f), n = {
                                                left: p,
                                                top: u,
                                                width: f,
                                                height: h
                                            }
                                        } else {
                                            var l = o.width,
                                                d = Math.round(l / s),
                                                c = Math.max(0, Math.round(o.left)),
                                                w = Math.max(0, Math.round(Math.round((a.bottom - a.top) / 2 + a.top) - d / 2));
                                            w < o.top ? w = o.top : w + d > o.top + o.height && (w = o.top + o.height - d), n = {
                                                left: c,
                                                top: w,
                                                width: l,
                                                height: d
                                            }
                                        }
                                        return {
                                            width: e,
                                            height: r,
                                            rect: n
                                        }
                                    }({
                                        crop: p,
                                        hotspot: {
                                            left: c - d,
                                            top: w - l,
                                            right: c + d,
                                            bottom: w + l
                                        }
                                    }, o))),
                                    function(t) {
                                        var i = (t.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""),
                                            n = t.vanityName ? "/" + t.vanityName : "",
                                            e = t.asset.id + "-" + t.asset.width + "x" + t.asset.height + "." + t.asset.format + n,
                                            o = i + "/images/" + t.projectId + "/" + t.dataset + "/" + e,
                                            a = [];
                                        if (t.rect) {
                                            var s = t.rect,
                                                h = s.left,
                                                f = s.top,
                                                u = s.width,
                                                p = s.height;
                                            (0 !== h || 0 !== f || p !== t.asset.height || u !== t.asset.width) && a.push("rect=" + h + "," + f + "," + u + "," + p)
                                        }
                                        t.bg && a.push("bg=" + t.bg), t.focalPoint && (a.push("fp-x=" + t.focalPoint.x), a.push("fp-y=" + t.focalPoint.y));
                                        var l = [t.flipHorizontal && "h", t.flipVertical && "v"].filter(Boolean).join("");
                                        return (l && a.push("flip=" + l), r.forEach(function(i) {
                                            var n = i[0],
                                                e = i[1];
                                            void 0 !== t[n] ? a.push(e + "=" + encodeURIComponent(t[n])) : void 0 !== t[e] && a.push(e + "=" + encodeURIComponent(t[e]))
                                        }), 0 === a.length) ? o : o + "?" + a.join("&")
                                    }(i({}, o, {
                                        asset: h
                                    }))
                            }(this.options)
                        }, f.toString = function() {
                            return this.url()
                        }, h
                    }();
                return function(t) {
                    if (t && "config" in t && "function" == typeof t.config) {
                        var i = t.config(),
                            n = i.apiHost,
                            e = i.projectId,
                            r = i.dataset;
                        return new h(null, {
                            baseUrl: (n || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
                            projectId: e,
                            dataset: r
                        })
                    }
                    if (t && "clientConfig" in t && "object" == typeof t.clientConfig) {
                        var o = t.clientConfig,
                            a = o.apiHost,
                            s = o.projectId,
                            f = o.dataset;
                        return new h(null, {
                            baseUrl: (a || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
                            projectId: s,
                            dataset: f
                        })
                    }
                    return new h(null, t || {})
                }
            }()
        }
    }
]);