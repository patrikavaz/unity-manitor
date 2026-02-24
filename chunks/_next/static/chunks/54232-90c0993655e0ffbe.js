! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
        t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = function(t) {
            for (var i = 1; i < arguments.length; i++) {
                var r = arguments[i];
                if (null != r)
                    for (var n in r) r.hasOwnProperty(n) && (t[n] = r[n])
            }
            return t
        }({}, t._sentryModuleMetadata[(new t.Error).stack], {
            "_sentryBundlerPluginAppKey:hexagon-web": !0
        })
    } catch (t) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [54232], {
        54232: function(t) {
            t.exports = function() {
                function t(t, i) {
                    (null == i || i > t.length) && (i = t.length);
                    for (var r = 0, n = Array(i); r < i; r++) n[r] = t[r];
                    return n
                }

                function i() {
                    return (i = Object.assign ? Object.assign.bind() : function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var r = arguments[i];
                            for (var n in r)({}).hasOwnProperty.call(r, n) && (t[n] = r[n])
                        }
                        return t
                    }).apply(null, arguments)
                }
                var r = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";

                function n(t) {
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
                        function s(t, r) {
                            this.options = void 0, this.options = t ? i({}, t.options || {}, r || {}) : i({}, r || {})
                        }
                        var u = s.prototype;
                        return u.withOptions = function(r) {
                            var n = r.baseUrl || this.options.baseUrl,
                                o = {
                                    baseUrl: n
                                };
                            for (var a in r) r.hasOwnProperty(a) && (o[function(i) {
                                for (var r, n = function(i, r) {
                                        var n = "undefined" != typeof Symbol && i[Symbol.iterator] || i["@@iterator"];
                                        if (n) return (n = n.call(i)).next.bind(n);
                                        if (Array.isArray(i) || (n = function(i, r) {
                                                if (i) {
                                                    if ("string" == typeof i) return t(i, void 0);
                                                    var n = ({}).toString.call(i).slice(8, -1);
                                                    return "Object" === n && i.constructor && (n = i.constructor.name), "Map" === n || "Set" === n ? Array.from(i) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? t(i, r) : void 0
                                                }
                                            }(i))) {
                                            n && (i = n);
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
                                    }(e); !(r = n()).done;) {
                                    var o = r.value,
                                        a = o[0],
                                        h = o[1];
                                    if (i === a || i === h) return a
                                }
                                return i
                            }(a)] = r[a]);
                            return new s(this, i({
                                baseUrl: n
                            }, o))
                        }, u.image = function(t) {
                            return this.withOptions({
                                source: t
                            })
                        }, u.dataset = function(t) {
                            return this.withOptions({
                                dataset: t
                            })
                        }, u.projectId = function(t) {
                            return this.withOptions({
                                projectId: t
                            })
                        }, u.bg = function(t) {
                            return this.withOptions({
                                bg: t
                            })
                        }, u.dpr = function(t) {
                            return this.withOptions(t && 1 !== t ? {
                                dpr: t
                            } : {})
                        }, u.width = function(t) {
                            return this.withOptions({
                                width: t
                            })
                        }, u.height = function(t) {
                            return this.withOptions({
                                height: t
                            })
                        }, u.focalPoint = function(t, i) {
                            return this.withOptions({
                                focalPoint: {
                                    x: t,
                                    y: i
                                }
                            })
                        }, u.maxWidth = function(t) {
                            return this.withOptions({
                                maxWidth: t
                            })
                        }, u.minWidth = function(t) {
                            return this.withOptions({
                                minWidth: t
                            })
                        }, u.maxHeight = function(t) {
                            return this.withOptions({
                                maxHeight: t
                            })
                        }, u.minHeight = function(t) {
                            return this.withOptions({
                                minHeight: t
                            })
                        }, u.size = function(t, i) {
                            return this.withOptions({
                                width: t,
                                height: i
                            })
                        }, u.blur = function(t) {
                            return this.withOptions({
                                blur: t
                            })
                        }, u.sharpen = function(t) {
                            return this.withOptions({
                                sharpen: t
                            })
                        }, u.rect = function(t, i, r, n) {
                            return this.withOptions({
                                rect: {
                                    left: t,
                                    top: i,
                                    width: r,
                                    height: n
                                }
                            })
                        }, u.format = function(t) {
                            return this.withOptions({
                                format: t
                            })
                        }, u.invert = function(t) {
                            return this.withOptions({
                                invert: t
                            })
                        }, u.orientation = function(t) {
                            return this.withOptions({
                                orientation: t
                            })
                        }, u.quality = function(t) {
                            return this.withOptions({
                                quality: t
                            })
                        }, u.forceDownload = function(t) {
                            return this.withOptions({
                                download: t
                            })
                        }, u.flipHorizontal = function() {
                            return this.withOptions({
                                flipHorizontal: !0
                            })
                        }, u.flipVertical = function() {
                            return this.withOptions({
                                flipVertical: !0
                            })
                        }, u.ignoreImageParams = function() {
                            return this.withOptions({
                                ignoreImageParams: !0
                            })
                        }, u.fit = function(t) {
                            if (-1 === o.indexOf(t)) throw Error('Invalid fit mode "' + t + '"');
                            return this.withOptions({
                                fit: t
                            })
                        }, u.crop = function(t) {
                            if (-1 === a.indexOf(t)) throw Error('Invalid crop mode "' + t + '"');
                            return this.withOptions({
                                crop: t
                            })
                        }, u.saturation = function(t) {
                            return this.withOptions({
                                saturation: t
                            })
                        }, u.auto = function(t) {
                            if (-1 === h.indexOf(t)) throw Error('Invalid auto mode "' + t + '"');
                            return this.withOptions({
                                auto: t
                            })
                        }, u.pad = function(t) {
                            return this.withOptions({
                                pad: t
                            })
                        }, u.vanityName = function(t) {
                            return this.withOptions({
                                vanityName: t
                            })
                        }, u.frame = function(t) {
                            if (1 !== t) throw Error('Invalid frame value "' + t + '"');
                            return this.withOptions({
                                frame: t
                            })
                        }, u.url = function() {
                            return function(t) {
                                var o = i({}, t || {}),
                                    a = o.source;
                                delete o.source;
                                var h = function(t) {
                                    var r, e;
                                    if (!t) return null;
                                    if ("string" == typeof t && (e = t, /^https?:\/\//.test("" + e))) r = {
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
                                        r = i({}, t)
                                    }
                                    return t.crop && (r.crop = t.crop), t.hotspot && (r.hotspot = t.hotspot),
                                        function(t) {
                                            if (t.crop && t.hotspot) return t;
                                            var r = i({}, t);
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
                                if (!h) {
                                    if (a && "object" == typeof a && null !== a && a._upload && (!a.asset || !a.asset._ref)) return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8HwQACfsD/QNViZkAAAAASUVORK5CYII=";
                                    throw Error("Unable to resolve image URL from source (" + JSON.stringify(a) + ")")
                                }
                                var s = function(t) {
                                        var i = t.split("-"),
                                            n = i[1],
                                            e = i[2],
                                            o = i[3];
                                        if (!n || !e || !o) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + r + '".');
                                        var a = e.split("x"),
                                            h = a[0],
                                            s = a[1],
                                            u = +h,
                                            f = +s;
                                        if (!(isFinite(u) && isFinite(f))) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + r + '".');
                                        return {
                                            id: n,
                                            width: u,
                                            height: f,
                                            format: o
                                        }
                                    }(h.asset._ref || h.asset._id || ""),
                                    u = Math.round(h.crop.left * s.width),
                                    f = Math.round(h.crop.top * s.height),
                                    p = {
                                        left: u,
                                        top: f,
                                        width: Math.round(s.width - h.crop.right * s.width - u),
                                        height: Math.round(s.height - h.crop.bottom * s.height - f)
                                    },
                                    l = h.hotspot.height * s.height / 2,
                                    c = h.hotspot.width * s.width / 2,
                                    d = h.hotspot.x * s.width,
                                    w = h.hotspot.y * s.height;
                                return o.rect || o.focalPoint || o.ignoreImageParams || o.crop || (o = i({}, o, function(t, i) {
                                        var r, n = i.width,
                                            e = i.height;
                                        if (!(n && e)) return {
                                            width: n,
                                            height: e,
                                            rect: t.crop
                                        };
                                        var o = t.crop,
                                            a = t.hotspot,
                                            h = n / e;
                                        if (o.width / o.height > h) {
                                            var s = Math.round(o.height),
                                                u = Math.round(s * h),
                                                f = Math.max(0, Math.round(o.top)),
                                                p = Math.max(0, Math.round(Math.round((a.right - a.left) / 2 + a.left) - u / 2));
                                            p < o.left ? p = o.left : p + u > o.left + o.width && (p = o.left + o.width - u), r = {
                                                left: p,
                                                top: f,
                                                width: u,
                                                height: s
                                            }
                                        } else {
                                            var l = o.width,
                                                c = Math.round(l / h),
                                                d = Math.max(0, Math.round(o.left)),
                                                w = Math.max(0, Math.round(Math.round((a.bottom - a.top) / 2 + a.top) - c / 2));
                                            w < o.top ? w = o.top : w + c > o.top + o.height && (w = o.top + o.height - c), r = {
                                                left: d,
                                                top: w,
                                                width: l,
                                                height: c
                                            }
                                        }
                                        return {
                                            width: n,
                                            height: e,
                                            rect: r
                                        }
                                    }({
                                        crop: p,
                                        hotspot: {
                                            left: d - c,
                                            top: w - l,
                                            right: d + c,
                                            bottom: w + l
                                        }
                                    }, o))),
                                    function(t) {
                                        var i = (t.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""),
                                            r = t.vanityName ? "/" + t.vanityName : "",
                                            n = t.asset.id + "-" + t.asset.width + "x" + t.asset.height + "." + t.asset.format + r,
                                            o = i + "/images/" + t.projectId + "/" + t.dataset + "/" + n,
                                            a = [];
                                        if (t.rect) {
                                            var h = t.rect,
                                                s = h.left,
                                                u = h.top,
                                                f = h.width,
                                                p = h.height;
                                            (0 !== s || 0 !== u || p !== t.asset.height || f !== t.asset.width) && a.push("rect=" + s + "," + u + "," + f + "," + p)
                                        }
                                        t.bg && a.push("bg=" + t.bg), t.focalPoint && (a.push("fp-x=" + t.focalPoint.x), a.push("fp-y=" + t.focalPoint.y));
                                        var l = [t.flipHorizontal && "h", t.flipVertical && "v"].filter(Boolean).join("");
                                        return (l && a.push("flip=" + l), e.forEach(function(i) {
                                            var r = i[0],
                                                n = i[1];
                                            void 0 !== t[r] ? a.push(n + "=" + encodeURIComponent(t[r])) : void 0 !== t[n] && a.push(n + "=" + encodeURIComponent(t[n]))
                                        }), 0 === a.length) ? o : o + "?" + a.join("&")
                                    }(i({}, o, {
                                        asset: s
                                    }))
                            }(this.options)
                        }, u.toString = function() {
                            return this.url()
                        }, s
                    }();
                return function(t) {
                    if (t && "config" in t && "function" == typeof t.config) {
                        var i = t.config(),
                            r = i.apiHost,
                            n = i.projectId,
                            e = i.dataset;
                        return new s(null, {
                            baseUrl: (r || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
                            projectId: n,
                            dataset: e
                        })
                    }
                    if (t && "clientConfig" in t && "object" == typeof t.clientConfig) {
                        var o = t.clientConfig,
                            a = o.apiHost,
                            h = o.projectId,
                            u = o.dataset;
                        return new s(null, {
                            baseUrl: (a || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
                            projectId: h,
                            dataset: u
                        })
                    }
                    return new s(null, t || {})
                }
            }()
        }
    }
]);