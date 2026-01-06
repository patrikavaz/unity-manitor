try {
    let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        i = (new t.Error).stack;
    i && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[i] = "d7a1ae37-7f46-4577-9b4e-5afdc2f7dfe3", t._sentryDebugIdIdentifier = "sentry-dbid-d7a1ae37-7f46-4577-9b4e-5afdc2f7dfe3")
} catch (t) {} {
    let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], {
        "_sentryBundlerPluginAppKey:hexagon-web": !0
    })
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [78316], {
        78316: function(t) {
            t.exports = function() {
                function t(t, i) {
                    (null == i || i > t.length) && (i = t.length);
                    for (var e = 0, n = Array(i); e < i; e++) n[e] = t[e];
                    return n
                }

                function i() {
                    return (i = Object.assign ? Object.assign.bind() : function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var e = arguments[i];
                            for (var n in e)({}).hasOwnProperty.call(e, n) && (t[n] = e[n])
                        }
                        return t
                    }).apply(null, arguments)
                }
                var e = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";

                function n(t) {
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
                        function h(t, e) {
                            this.options = void 0, this.options = t ? i({}, t.options || {}, e || {}) : i({}, e || {})
                        }
                        var f = h.prototype;
                        return f.withOptions = function(e) {
                            var n = e.baseUrl || this.options.baseUrl,
                                o = {
                                    baseUrl: n
                                };
                            for (var a in e) e.hasOwnProperty(a) && (o[function(i) {
                                for (var e, n = function(i, e) {
                                        var n = "undefined" != typeof Symbol && i[Symbol.iterator] || i["@@iterator"];
                                        if (n) return (n = n.call(i)).next.bind(n);
                                        if (Array.isArray(i) || (n = function(i, e) {
                                                if (i) {
                                                    if ("string" == typeof i) return t(i, void 0);
                                                    var n = ({}).toString.call(i).slice(8, -1);
                                                    return "Object" === n && i.constructor && (n = i.constructor.name), "Map" === n || "Set" === n ? Array.from(i) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? t(i, e) : void 0
                                                }
                                            }(i))) {
                                            n && (i = n);
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
                                    }(r); !(e = n()).done;) {
                                    var o = e.value,
                                        a = o[0],
                                        s = o[1];
                                    if (i === a || i === s) return a
                                }
                                return i
                            }(a)] = e[a]);
                            return new h(this, i({
                                baseUrl: n
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
                        }, f.rect = function(t, i, e, n) {
                            return this.withOptions({
                                rect: {
                                    left: t,
                                    top: i,
                                    width: e,
                                    height: n
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
                                    var e, r;
                                    if (!t) return null;
                                    if ("string" == typeof t && (r = t, /^https?:\/\//.test("" + r))) e = {
                                        asset: {
                                            _ref: n(t)
                                        }
                                    };
                                    else if ("string" == typeof t) e = {
                                        asset: {
                                            _ref: t
                                        }
                                    };
                                    else if (t && "string" == typeof t._ref) e = {
                                        asset: t
                                    };
                                    else if (t && "string" == typeof t._id) e = {
                                        asset: {
                                            _ref: t._id || ""
                                        }
                                    };
                                    else if (t && t.asset && "string" == typeof t.asset.url) e = {
                                        asset: {
                                            _ref: n(t.asset.url)
                                        }
                                    };
                                    else {
                                        if ("object" != typeof t.asset) return null;
                                        e = i({}, t)
                                    }
                                    return t.crop && (e.crop = t.crop), t.hotspot && (e.hotspot = t.hotspot),
                                        function(t) {
                                            if (t.crop && t.hotspot) return t;
                                            var e = i({}, t);
                                            return e.crop || (e.crop = {
                                                left: 0,
                                                top: 0,
                                                bottom: 0,
                                                right: 0
                                            }), e.hotspot || (e.hotspot = {
                                                x: .5,
                                                y: .5,
                                                height: 1,
                                                width: 1
                                            }), e
                                        }(e)
                                }(a);
                                if (!s) {
                                    if (a && "object" == typeof a && null !== a && a._upload && (!a.asset || !a.asset._ref)) return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8HwQACfsD/QNViZkAAAAASUVORK5CYII=";
                                    throw Error("Unable to resolve image URL from source (" + JSON.stringify(a) + ")")
                                }
                                var h = function(t) {
                                        var i = t.split("-"),
                                            n = i[1],
                                            r = i[2],
                                            o = i[3];
                                        if (!n || !r || !o) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + e + '".');
                                        var a = r.split("x"),
                                            s = a[0],
                                            h = a[1],
                                            f = +s,
                                            u = +h;
                                        if (!(isFinite(f) && isFinite(u))) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + e + '".');
                                        return {
                                            id: n,
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
                                        var e, n = i.width,
                                            r = i.height;
                                        if (!(n && r)) return {
                                            width: n,
                                            height: r,
                                            rect: t.crop
                                        };
                                        var o = t.crop,
                                            a = t.hotspot,
                                            s = n / r;
                                        if (o.width / o.height > s) {
                                            var h = Math.round(o.height),
                                                f = Math.round(h * s),
                                                u = Math.max(0, Math.round(o.top)),
                                                p = Math.max(0, Math.round(Math.round((a.right - a.left) / 2 + a.left) - f / 2));
                                            p < o.left ? p = o.left : p + f > o.left + o.width && (p = o.left + o.width - f), e = {
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
                                            w < o.top ? w = o.top : w + d > o.top + o.height && (w = o.top + o.height - d), e = {
                                                left: c,
                                                top: w,
                                                width: l,
                                                height: d
                                            }
                                        }
                                        return {
                                            width: n,
                                            height: r,
                                            rect: e
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
                                            e = t.vanityName ? "/" + t.vanityName : "",
                                            n = t.asset.id + "-" + t.asset.width + "x" + t.asset.height + "." + t.asset.format + e,
                                            o = i + "/images/" + t.projectId + "/" + t.dataset + "/" + n,
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
                                            var e = i[0],
                                                n = i[1];
                                            void 0 !== t[e] ? a.push(n + "=" + encodeURIComponent(t[e])) : void 0 !== t[n] && a.push(n + "=" + encodeURIComponent(t[n]))
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
                            e = i.apiHost,
                            n = i.projectId,
                            r = i.dataset;
                        return new h(null, {
                            baseUrl: (e || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
                            projectId: n,
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