try {
    let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        i = (new t.Error).stack;
    i && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[i] = "d7a1ae37-7f46-4577-9b4e-5afdc2f7dfe3", t._sentryDebugIdIdentifier = "sentry-dbid-d7a1ae37-7f46-4577-9b4e-5afdc2f7dfe3")
} catch (t) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [78316], {
        78316: function(t) {
            t.exports = function() {
                function t(t, i) {
                    (null == i || i > t.length) && (i = t.length);
                    for (var n = 0, r = Array(i); n < i; n++) r[n] = t[n];
                    return r
                }

                function i() {
                    return (i = Object.assign ? Object.assign.bind() : function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var n = arguments[i];
                            for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
                        }
                        return t
                    }).apply(null, arguments)
                }
                var n = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";

                function r(t) {
                    return ("image-" + t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/, "-$1")
                }
                var e = [
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
                    h = ["format"],
                    s = function() {
                        function s(t, n) {
                            this.options = void 0, this.options = t ? i({}, t.options || {}, n || {}) : i({}, n || {})
                        }
                        var f = s.prototype;
                        return f.withOptions = function(n) {
                            var r = n.baseUrl || this.options.baseUrl,
                                o = {
                                    baseUrl: r
                                };
                            for (var a in n) n.hasOwnProperty(a) && (o[function(i) {
                                for (var n, r = function(i, n) {
                                        var r = "undefined" != typeof Symbol && i[Symbol.iterator] || i["@@iterator"];
                                        if (r) return (r = r.call(i)).next.bind(r);
                                        if (Array.isArray(i) || (r = function(i, n) {
                                                if (i) {
                                                    if ("string" == typeof i) return t(i, void 0);
                                                    var r = ({}).toString.call(i).slice(8, -1);
                                                    return "Object" === r && i.constructor && (r = i.constructor.name), "Map" === r || "Set" === r ? Array.from(i) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? t(i, n) : void 0
                                                }
                                            }(i))) {
                                            r && (i = r);
                                            var e = 0;
                                            return function() {
                                                return e >= i.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: i[e++]
                                                }
                                            }
                                        }
                                        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }(e); !(n = r()).done;) {
                                    var o = n.value,
                                        a = o[0],
                                        h = o[1];
                                    if (i === a || i === h) return a
                                }
                                return i
                            }(a)] = n[a]);
                            return new s(this, i({
                                baseUrl: r
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
                        }, f.rect = function(t, i, n, r) {
                            return this.withOptions({
                                rect: {
                                    left: t,
                                    top: i,
                                    width: n,
                                    height: r
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
                            if (-1 === h.indexOf(t)) throw Error('Invalid auto mode "' + t + '"');
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
                                var h = function(t) {
                                    var n, e;
                                    if (!t) return null;
                                    if ("string" == typeof t && (e = t, /^https?:\/\//.test("" + e))) n = {
                                        asset: {
                                            _ref: r(t)
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
                                            _ref: r(t.asset.url)
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
                                if (!h) {
                                    if (a && "object" == typeof a && null !== a && a._upload && (!a.asset || !a.asset._ref)) return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8HwQACfsD/QNViZkAAAAASUVORK5CYII=";
                                    throw Error("Unable to resolve image URL from source (" + JSON.stringify(a) + ")")
                                }
                                var s = function(t) {
                                        var i = t.split("-"),
                                            r = i[1],
                                            e = i[2],
                                            o = i[3];
                                        if (!r || !e || !o) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + n + '".');
                                        var a = e.split("x"),
                                            h = a[0],
                                            s = a[1],
                                            f = +h,
                                            u = +s;
                                        if (!(isFinite(f) && isFinite(u))) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + n + '".');
                                        return {
                                            id: r,
                                            width: f,
                                            height: u,
                                            format: o
                                        }
                                    }(h.asset._ref || h.asset._id || ""),
                                    f = Math.round(h.crop.left * s.width),
                                    u = Math.round(h.crop.top * s.height),
                                    p = {
                                        left: f,
                                        top: u,
                                        width: Math.round(s.width - h.crop.right * s.width - f),
                                        height: Math.round(s.height - h.crop.bottom * s.height - u)
                                    },
                                    c = h.hotspot.height * s.height / 2,
                                    l = h.hotspot.width * s.width / 2,
                                    d = h.hotspot.x * s.width,
                                    w = h.hotspot.y * s.height;
                                return o.rect || o.focalPoint || o.ignoreImageParams || o.crop || (o = i({}, o, function(t, i) {
                                        var n, r = i.width,
                                            e = i.height;
                                        if (!(r && e)) return {
                                            width: r,
                                            height: e,
                                            rect: t.crop
                                        };
                                        var o = t.crop,
                                            a = t.hotspot,
                                            h = r / e;
                                        if (o.width / o.height > h) {
                                            var s = Math.round(o.height),
                                                f = Math.round(s * h),
                                                u = Math.max(0, Math.round(o.top)),
                                                p = Math.max(0, Math.round(Math.round((a.right - a.left) / 2 + a.left) - f / 2));
                                            p < o.left ? p = o.left : p + f > o.left + o.width && (p = o.left + o.width - f), n = {
                                                left: p,
                                                top: u,
                                                width: f,
                                                height: s
                                            }
                                        } else {
                                            var c = o.width,
                                                l = Math.round(c / h),
                                                d = Math.max(0, Math.round(o.left)),
                                                w = Math.max(0, Math.round(Math.round((a.bottom - a.top) / 2 + a.top) - l / 2));
                                            w < o.top ? w = o.top : w + l > o.top + o.height && (w = o.top + o.height - l), n = {
                                                left: d,
                                                top: w,
                                                width: c,
                                                height: l
                                            }
                                        }
                                        return {
                                            width: r,
                                            height: e,
                                            rect: n
                                        }
                                    }({
                                        crop: p,
                                        hotspot: {
                                            left: d - l,
                                            top: w - c,
                                            right: d + l,
                                            bottom: w + c
                                        }
                                    }, o))),
                                    function(t) {
                                        var i = (t.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""),
                                            n = t.vanityName ? "/" + t.vanityName : "",
                                            r = t.asset.id + "-" + t.asset.width + "x" + t.asset.height + "." + t.asset.format + n,
                                            o = i + "/images/" + t.projectId + "/" + t.dataset + "/" + r,
                                            a = [];
                                        if (t.rect) {
                                            var h = t.rect,
                                                s = h.left,
                                                f = h.top,
                                                u = h.width,
                                                p = h.height;
                                            (0 !== s || 0 !== f || p !== t.asset.height || u !== t.asset.width) && a.push("rect=" + s + "," + f + "," + u + "," + p)
                                        }
                                        t.bg && a.push("bg=" + t.bg), t.focalPoint && (a.push("fp-x=" + t.focalPoint.x), a.push("fp-y=" + t.focalPoint.y));
                                        var c = [t.flipHorizontal && "h", t.flipVertical && "v"].filter(Boolean).join("");
                                        return (c && a.push("flip=" + c), e.forEach(function(i) {
                                            var n = i[0],
                                                r = i[1];
                                            void 0 !== t[n] ? a.push(r + "=" + encodeURIComponent(t[n])) : void 0 !== t[r] && a.push(r + "=" + encodeURIComponent(t[r]))
                                        }), 0 === a.length) ? o : o + "?" + a.join("&")
                                    }(i({}, o, {
                                        asset: s
                                    }))
                            }(this.options)
                        }, f.toString = function() {
                            return this.url()
                        }, s
                    }();
                return function(t) {
                    if (t && "config" in t && "function" == typeof t.config) {
                        var i = t.config(),
                            n = i.apiHost,
                            r = i.projectId,
                            e = i.dataset;
                        return new s(null, {
                            baseUrl: (n || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
                            projectId: r,
                            dataset: e
                        })
                    }
                    if (t && "clientConfig" in t && "object" == typeof t.clientConfig) {
                        var o = t.clientConfig,
                            a = o.apiHost,
                            h = o.projectId,
                            f = o.dataset;
                        return new s(null, {
                            baseUrl: (a || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
                            projectId: h,
                            dataset: f
                        })
                    }
                    return new s(null, t || {})
                }
            }()
        }
    }
]);