(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 369710, t => {
    "use strict";
    t.s(["resolveElements", 0, function(t, e, r) {
        if (t instanceof EventTarget) return [t];
        if ("string" == typeof t) {
            let n = document;
            e && (n = e.current);
            let o = r?.[t] ?? n.querySelectorAll(t);
            return o ? Array.from(o) : []
        }
        return Array.from(t)
    }])
}, 368244, 309674, t => {
    "use strict";
    var e = t.i(474610);
    let r = {
            current: null
        },
        n = {
            current: !1
        };
    t.s(["hasReducedMotionListener", 0, n, "prefersReducedMotion", 0, r], 309674), t.s(["initPrefersReducedMotion", 0, function() {
        if (n.current = !0, e.isBrowser)
            if (window.matchMedia) {
                let t = window.matchMedia("(prefers-reduced-motion)"),
                    e = () => r.current = t.matches;
                t.addEventListener("change", e), e()
            } else r.current = !1
    }], 368244)
}, 153348, t => {
    "use strict";
    var e = t.i(999721),
        r = t.i(369710);
    let n = {
        some: 0,
        all: 1
    };
    t.s(["useInView", 0, function(t, {
        root: o,
        margin: i,
        amount: a,
        once: l = !1,
        initial: s = !1
    } = {}) {
        let [u, c] = (0, e.useState)(s);
        return (0, e.useEffect)(() => {
            if (!t.current || l && u) return;
            let e = {
                root: o && o.current || void 0,
                margin: i,
                amount: a
            };
            return function(t, e, {
                root: o,
                margin: i,
                amount: a = "some"
            } = {}) {
                let l = (0, r.resolveElements)(t),
                    s = new WeakMap,
                    u = new IntersectionObserver(t => {
                        t.forEach(t => {
                            let r = s.get(t.target);
                            if (!!r !== t.isIntersecting)
                                if (t.isIntersecting) {
                                    let r = e(t.target, t);
                                    "function" == typeof r ? s.set(t.target, r) : u.unobserve(t.target)
                                } else "function" == typeof r && (r(t), s.delete(t.target))
                        })
                    }, {
                        root: o,
                        rootMargin: i,
                        threshold: "number" == typeof a ? a : n[a]
                    });
                return l.forEach(t => u.observe(t)), () => u.disconnect()
            }(t.current, () => (c(!0), l ? void 0 : () => c(!1)), e)
        }, [o, t, i, l, a]), u
    }], 153348)
}, 955429, t => {
    "use strict";
    var e = t.i(999721),
        r = t.i(368244),
        n = t.i(309674);
    t.s(["useReducedMotion", 0, function() {
        n.hasReducedMotionListener.current || (0, r.initPrefersReducedMotion)();
        let [t] = (0, e.useState)(n.prefersReducedMotion.current);
        return t
    }])
}, 824627, t => {
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
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
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

    function o(t) {
        return this instanceof o ? (this.v = t, this) : new o(t)
    }
    "function" == typeof SuppressedError && SuppressedError, t.s(["__assign", () => r, "__asyncGenerator", 0, function(t, e, r) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var n, i = r.apply(t, e || []),
            a = [];
        return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), l("next"), l("throw"), l("return", function(t) {
            return function(e) {
                return Promise.resolve(e).then(t, c)
            }
        }), n[Symbol.asyncIterator] = function() {
            return this
        }, n;

        function l(t, e) {
            i[t] && (n[t] = function(e) {
                return new Promise(function(r, n) {
                    a.push([t, e, r, n]) > 1 || s(t, e)
                })
            }, e && (n[t] = e(n[t])))
        }

        function s(t, e) {
            try {
                var r;
                (r = i[t](e)).value instanceof o ? Promise.resolve(r.value.v).then(u, c) : f(a[0][2], r)
            } catch (t) {
                f(a[0][3], t)
            }
        }

        function u(t) {
            s("next", t)
        }

        function c(t) {
            s("throw", t)
        }

        function f(t, e) {
            t(e), a.shift(), a.length && s(a[0][0], a[0][1])
        }
    }, "__asyncValues", 0, function(t) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var e, r = t[Symbol.asyncIterator];
        return r ? r.call(t) : (t = n(t), e = {}, o("next"), o("throw"), o("return"), e[Symbol.asyncIterator] = function() {
            return this
        }, e);

        function o(r) {
            e[r] = t[r] && function(e) {
                return new Promise(function(n, o) {
                    var i, a, l;
                    i = n, a = o, l = (e = t[r](e)).done, Promise.resolve(e.value).then(function(t) {
                        i({
                            value: t,
                            done: l
                        })
                    }, a)
                })
            }
        }
    }, "__await", 0, o, "__awaiter", 0, function(t, e, r, n) {
        return new(r || (r = Promise))(function(o, i) {
            function a(t) {
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
                t.done ? o(t.value) : ((e = t.value) instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(a, l)
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
        var r, n, o, i = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
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
                var u = [l, s];
                if (r) throw TypeError("Generator is already executing.");
                for (; a && (a = 0, u[0] && (i = 0)), i;) try {
                    if (r = 1, n && (o = 2 & u[0] ? n.return : u[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, u[1])).done) return o;
                    switch (n = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                        case 0:
                        case 1:
                            o = u;
                            break;
                        case 4:
                            return i.label++, {
                                value: u[1],
                                done: !1
                            };
                        case 5:
                            i.label++, n = u[1], u = [0];
                            continue;
                        case 7:
                            u = i.ops.pop(), i.trys.pop();
                            continue;
                        default:
                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                i = 0;
                                continue
                            }
                            if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                i.label = u[1];
                                break
                            }
                            if (6 === u[0] && i.label < o[1]) {
                                i.label = o[1], o = u;
                                break
                            }
                            if (o && i.label < o[2]) {
                                i.label = o[2], i.ops.push(u);
                                break
                            }
                            o[2] && i.ops.pop(), i.trys.pop();
                            continue
                    }
                    u = e.call(t, i)
                } catch (t) {
                    u = [6, t], n = 0
                } finally {
                    r = o = 0
                }
                if (5 & u[0]) throw u[1];
                return {
                    value: u[0] ? u[1] : void 0,
                    done: !0
                }
            }
        }
    }, "__read", 0, function(t, e) {
        var r = "function" == typeof Symbol && t[Symbol.iterator];
        if (!r) return t;
        var n, o, i = r.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value)
        } catch (t) {
            o = {
                error: t
            }
        } finally {
            try {
                n && !n.done && (r = i.return) && r.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    }, "__rest", 0, function(t, e) {
        var r = {};
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && 0 > e.indexOf(n) && (r[n] = t[n]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols)
            for (var o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++) 0 > e.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]]);
        return r
    }, "__spreadArray", 0, function(t, e, r) {
        if (r || 2 == arguments.length)
            for (var n, o = 0, i = e.length; o < i; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
        return t.concat(n || Array.prototype.slice.call(e))
    }, "__values", 0, n])
}, 511587, t => {
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
        n = [, , , , ].fill(String.fromCodePoint(r[0])).join("");
    Object.fromEntries(Object.entries(r).map(t => t.reverse())), Object.fromEntries(Object.entries(e).map(t => t.reverse()));
    var o = `${Object.values(e).map(t=>`\\u{${t.toString(16)}}`).join("")}`,
        i = RegExp(`[${o}]{4,}`, "gu");
    t.s(["C", 0, function(t, e, o = "auto") {
        let i;
        return !0 === o || "auto" === o && (!(!Number.isNaN(Number(t)) || /[a-z]/i.test(t) && !/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(t)) && Date.parse(t) || function(t) {
            try {
                new URL(t, t.startsWith("/") ? "https://acme.com" : void 0)
            } catch {
                return !1
            }
            return !0
        }(t)) ? t : `${t}${i=JSON.stringify(e),`${n}${Array.from(i).map(t=>{let e=t.charCodeAt(0);if(e>255)throw Error(`Only ASCII edit info can be encoded. Error attempting to encode ${i} on character ${t} (${e})`);return Array.from(e.toString(4).padStart(4,"0")).map(t=>String.fromCodePoint(r[t])).join("")}).join("")}`}`
    }, "isRecord", 0, function(t) {
        return "object" == typeof t && null !== t && !Array.isArray(t)
    }, "stegaClean", 0, function(t) {
        var e, r;
        return t && JSON.parse({
            cleaned: (e = JSON.stringify(t)).replace(i, ""),
            encoded: (null == (r = e.match(i)) ? void 0 : r[0]) || ""
        }.cleaned)
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
        var o = [
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
            a = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"],
            l = ["format"],
            s = function() {
                function s(t, r) {
                    this.options = void 0, this.options = t ? e({}, t.options || {}, r || {}) : e({}, r || {})
                }
                var u = s.prototype;
                return u.withOptions = function(r) {
                    var n = r.baseUrl || this.options.baseUrl,
                        i = {
                            baseUrl: n
                        };
                    for (var a in r) r.hasOwnProperty(a) && (i[function(e) {
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
                            }(o); !(r = n()).done;) {
                            var i = r.value,
                                a = i[0],
                                l = i[1];
                            if (e === a || e === l) return a
                        }
                        return e
                    }(a)] = r[a]);
                    return new s(this, e({
                        baseUrl: n
                    }, i))
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
                }, u.focalPoint = function(t, e) {
                    return this.withOptions({
                        focalPoint: {
                            x: t,
                            y: e
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
                }, u.size = function(t, e) {
                    return this.withOptions({
                        width: t,
                        height: e
                    })
                }, u.blur = function(t) {
                    return this.withOptions({
                        blur: t
                    })
                }, u.sharpen = function(t) {
                    return this.withOptions({
                        sharpen: t
                    })
                }, u.rect = function(t, e, r, n) {
                    return this.withOptions({
                        rect: {
                            left: t,
                            top: e,
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
                    if (-1 === i.indexOf(t)) throw Error('Invalid fit mode "' + t + '"');
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
                    if (-1 === l.indexOf(t)) throw Error('Invalid auto mode "' + t + '"');
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
                        var i = e({}, t || {}),
                            a = i.source;
                        delete i.source;
                        var l = function(t) {
                            var r, o;
                            if (!t) return null;
                            if ("string" == typeof t && (o = t, /^https?:\/\//.test("" + o))) r = {
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
                        }(a);
                        if (!l) {
                            if (a && "object" == typeof a && null !== a && a._upload && (!a.asset || !a.asset._ref)) return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8HwQACfsD/QNViZkAAAAASUVORK5CYII=";
                            throw Error("Unable to resolve image URL from source (" + JSON.stringify(a) + ")")
                        }
                        var s = function(t) {
                                var e = t.split("-"),
                                    n = e[1],
                                    o = e[2],
                                    i = e[3];
                                if (!n || !o || !i) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + r + '".');
                                var a = o.split("x"),
                                    l = a[0],
                                    s = a[1],
                                    u = +l,
                                    c = +s;
                                if (!(isFinite(u) && isFinite(c))) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + r + '".');
                                return {
                                    id: n,
                                    width: u,
                                    height: c,
                                    format: i
                                }
                            }(l.asset._ref || l.asset._id || ""),
                            u = Math.round(l.crop.left * s.width),
                            c = Math.round(l.crop.top * s.height),
                            f = {
                                left: u,
                                top: c,
                                width: Math.round(s.width - l.crop.right * s.width - u),
                                height: Math.round(s.height - l.crop.bottom * s.height - c)
                            },
                            p = l.hotspot.height * s.height / 2,
                            h = l.hotspot.width * s.width / 2,
                            d = l.hotspot.x * s.width,
                            m = l.hotspot.y * s.height;
                        return i.rect || i.focalPoint || i.ignoreImageParams || i.crop || (i = e({}, i, function(t, e) {
                                var r, n = e.width,
                                    o = e.height;
                                if (!(n && o)) return {
                                    width: n,
                                    height: o,
                                    rect: t.crop
                                };
                                var i = t.crop,
                                    a = t.hotspot,
                                    l = n / o;
                                if (i.width / i.height > l) {
                                    var s = Math.round(i.height),
                                        u = Math.round(s * l),
                                        c = Math.max(0, Math.round(i.top)),
                                        f = Math.max(0, Math.round(Math.round((a.right - a.left) / 2 + a.left) - u / 2));
                                    f < i.left ? f = i.left : f + u > i.left + i.width && (f = i.left + i.width - u), r = {
                                        left: f,
                                        top: c,
                                        width: u,
                                        height: s
                                    }
                                } else {
                                    var p = i.width,
                                        h = Math.round(p / l),
                                        d = Math.max(0, Math.round(i.left)),
                                        m = Math.max(0, Math.round(Math.round((a.bottom - a.top) / 2 + a.top) - h / 2));
                                    m < i.top ? m = i.top : m + h > i.top + i.height && (m = i.top + i.height - h), r = {
                                        left: d,
                                        top: m,
                                        width: p,
                                        height: h
                                    }
                                }
                                return {
                                    width: n,
                                    height: o,
                                    rect: r
                                }
                            }({
                                crop: f,
                                hotspot: {
                                    left: d - h,
                                    top: m - p,
                                    right: d + h,
                                    bottom: m + p
                                }
                            }, i))),
                            function(t) {
                                var e = (t.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""),
                                    r = t.vanityName ? "/" + t.vanityName : "",
                                    n = t.asset.id + "-" + t.asset.width + "x" + t.asset.height + "." + t.asset.format + r,
                                    i = e + "/images/" + t.projectId + "/" + t.dataset + "/" + n,
                                    a = [];
                                if (t.rect) {
                                    var l = t.rect,
                                        s = l.left,
                                        u = l.top,
                                        c = l.width,
                                        f = l.height;
                                    (0 !== s || 0 !== u || f !== t.asset.height || c !== t.asset.width) && a.push("rect=" + s + "," + u + "," + c + "," + f)
                                }
                                t.bg && a.push("bg=" + t.bg), t.focalPoint && (a.push("fp-x=" + t.focalPoint.x), a.push("fp-y=" + t.focalPoint.y));
                                var p = [t.flipHorizontal && "h", t.flipVertical && "v"].filter(Boolean).join("");
                                return (p && a.push("flip=" + p), o.forEach(function(e) {
                                    var r = e[0],
                                        n = e[1];
                                    void 0 !== t[r] ? a.push(n + "=" + encodeURIComponent(t[r])) : void 0 !== t[n] && a.push(n + "=" + encodeURIComponent(t[n]))
                                }), 0 === a.length) ? i : i + "?" + a.join("&")
                            }(e({}, i, {
                                asset: s
                            }))
                    }(this.options)
                }, u.toString = function() {
                    return this.url()
                }, s
            }();
        return function(t) {
            if (t && "config" in t && "function" == typeof t.config) {
                var e = t.config(),
                    r = e.apiHost,
                    n = e.projectId,
                    o = e.dataset;
                return new s(null, {
                    baseUrl: (r || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
                    projectId: n,
                    dataset: o
                })
            }
            if (t && "clientConfig" in t && "object" == typeof t.clientConfig) {
                var i = t.clientConfig,
                    a = i.apiHost,
                    l = i.projectId,
                    u = i.dataset;
                return new s(null, {
                    baseUrl: (a || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
                    projectId: l,
                    dataset: u
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
}, 690019, t => {
    "use strict";
    var e = t.i(210139),
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
        className: o,
        style: i,
        theme: a = "light",
        padding: l,
        defaultBlockPadding: s,
        nested: u = !1,
        container: c
    }) => {
        let f = (0, r.default)(l?.top ? ({
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
        if (u) return (0, e.jsx)(e.Fragment, {
            children: t
        });
        let p = c ? (0, e.jsx)("div", {
                className: n[c],
                children: t
            }) : t,
            h = (0, r.default)({
                dark: "dark" === a
            });
        return (0, e.jsx)("section", {
            className: h,
            children: (0, e.jsx)("div", {
                className: (0, r.default)(o, f),
                style: i,
                children: p
            })
        })
    }])
}, 651235, t => {
    "use strict";
    let e = t.i(690019).default;
    t.s(["default", 0, e])
}, 538376, t => {
    "use strict";
    var e = t.i(999721),
        r = t.i(389240);
    let n = new Map([
        ["bold", e.default.createElement(e.default.Fragment, null, e.default.createElement("path", {
            d: "M234.49,111.07,90.41,22.94A20,20,0,0,0,60,39.87V216.13a20,20,0,0,0,30.41,16.93l144.08-88.13a19.82,19.82,0,0,0,0-33.86ZM84,208.85V47.15L216.16,128Z"
        }))],
        ["duotone", e.default.createElement(e.default.Fragment, null, e.default.createElement("path", {
            d: "M228.23,134.69,84.15,222.81A8,8,0,0,1,72,216.12V39.88a8,8,0,0,1,12.15-6.69l144.08,88.12A7.82,7.82,0,0,1,228.23,134.69Z",
            opacity: "0.2"
        }), e.default.createElement("path", {
            d: "M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"
        }))],
        ["fill", e.default.createElement(e.default.Fragment, null, e.default.createElement("path", {
            d: "M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"
        }))],
        ["light", e.default.createElement(e.default.Fragment, null, e.default.createElement("path", {
            d: "M231.36,116.19,87.28,28.06a14,14,0,0,0-14.18-.27A13.69,13.69,0,0,0,66,39.87V216.13a13.69,13.69,0,0,0,7.1,12.08,14,14,0,0,0,14.18-.27l144.08-88.13a13.82,13.82,0,0,0,0-23.62Zm-6.26,13.38L81,217.7a2,2,0,0,1-2.06,0,1.78,1.78,0,0,1-1-1.61V39.87a1.78,1.78,0,0,1,1-1.61A2.06,2.06,0,0,1,80,38a2,2,0,0,1,1,.31L225.1,126.43a1.82,1.82,0,0,1,0,3.14Z"
        }))],
        ["regular", e.default.createElement(e.default.Fragment, null, e.default.createElement("path", {
            d: "M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"
        }))],
        ["thin", e.default.createElement(e.default.Fragment, null, e.default.createElement("path", {
            d: "M230.32,117.9,86.24,29.79a11.91,11.91,0,0,0-12.17-.23A11.71,11.71,0,0,0,68,39.89V216.11a11.71,11.71,0,0,0,6.07,10.33,11.91,11.91,0,0,0,12.17-.23L230.32,138.1a11.82,11.82,0,0,0,0-20.2Zm-4.18,13.37L82.06,219.39a4,4,0,0,1-4.07.07,3.77,3.77,0,0,1-2-3.35V39.89a3.77,3.77,0,0,1,2-3.35,4,4,0,0,1,4.07.07l144.08,88.12a3.8,3.8,0,0,1,0,6.54Z"
        }))]
    ]);
    var o = Object.defineProperty,
        i = Object.defineProperties,
        a = Object.getOwnPropertyDescriptors,
        l = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        c = (t, e, r) => e in t ? o(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[e] = r;
    let f = (0, e.forwardRef)((t, o) => e.default.createElement(r.default, i(((t, e) => {
        for (var r in e || (e = {})) s.call(e, r) && c(t, r, e[r]);
        if (l)
            for (var r of l(e)) u.call(e, r) && c(t, r, e[r]);
        return t
    })({
        ref: o
    }, t), a({
        weights: n
    }))));
    f.displayName = "Play", t.s(["Play", 0, f], 538376)
}, 998858, t => {
    "use strict";
    var e = t.i(999721),
        r = t.i(389240);
    let n = new Map([
        ["bold", e.default.createElement(e.default.Fragment, null, e.default.createElement("path", {
            d: "M200,28H160a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20h40a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28Zm-4,176H164V52h32ZM96,28H56A20,20,0,0,0,36,48V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V48A20,20,0,0,0,96,28ZM92,204H60V52H92Z"
        }))],
        ["duotone", e.default.createElement(e.default.Fragment, null, e.default.createElement("path", {
            d: "M208,48V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h40A8,8,0,0,1,208,48ZM96,40H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V48A8,8,0,0,0,96,40Z",
            opacity: "0.2"
        }), e.default.createElement("path", {
            d: "M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"
        }))],
        ["fill", e.default.createElement(e.default.Fragment, null, e.default.createElement("path", {
            d: "M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"
        }))],
        ["light", e.default.createElement(e.default.Fragment, null, e.default.createElement("path", {
            d: "M200,34H160a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14h40a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm2,174a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2ZM96,34H56A14,14,0,0,0,42,48V208a14,14,0,0,0,14,14H96a14,14,0,0,0,14-14V48A14,14,0,0,0,96,34Zm2,174a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H96a2,2,0,0,1,2,2Z"
        }))],
        ["regular", e.default.createElement(e.default.Fragment, null, e.default.createElement("path", {
            d: "M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"
        }))],
        ["thin", e.default.createElement(e.default.Fragment, null, e.default.createElement("path", {
            d: "M200,36H160a12,12,0,0,0-12,12V208a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm4,172a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4ZM96,36H56A12,12,0,0,0,44,48V208a12,12,0,0,0,12,12H96a12,12,0,0,0,12-12V48A12,12,0,0,0,96,36Zm4,172a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H96a4,4,0,0,1,4,4Z"
        }))]
    ]);
    var o = Object.defineProperty,
        i = Object.defineProperties,
        a = Object.getOwnPropertyDescriptors,
        l = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        c = (t, e, r) => e in t ? o(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[e] = r;
    let f = (0, e.forwardRef)((t, o) => e.default.createElement(r.default, i(((t, e) => {
        for (var r in e || (e = {})) s.call(e, r) && c(t, r, e[r]);
        if (l)
            for (var r of l(e)) u.call(e, r) && c(t, r, e[r]);
        return t
    })({
        ref: o
    }, t), a({
        weights: n
    }))));
    f.displayName = "Pause", t.s(["Pause", 0, f], 998858)
}, 880749, t => {
    "use strict";
    var e = t.i(210139),
        r = t.i(999721),
        n = t.i(166511),
        o = t.i(722978),
        i = t.i(153348),
        a = t.i(955429),
        l = t.i(998858),
        s = t.i(538376),
        u = t.i(291158),
        c = t.i(78070);
    let f = (0, t.i(71871).default)(() => t.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        p = ({
            url: t,
            playing: r = !0,
            isActive: n = !0,
            loop: o = !0,
            muted: i = !0,
            playsinline: a = !0,
            controls: l = !1,
            onReady: s,
            className: u,
            style: c
        }) => (0, e.jsx)(f, {
            url: t,
            playing: n && r,
            loop: o,
            muted: i,
            playsinline: a,
            controls: l,
            width: "100%",
            height: "100%",
            className: u ?? "[&>video]:object-cover",
            style: c,
            onReady: s
        }),
        h = {
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
            className: h[t],
            children: (0, e.jsx)(c.default, {
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
        y = ({
            poster: t,
            posterSizes: r,
            posterPriority: i,
            visible: a,
            onClick: l,
            showPlayBadge: c,
            dim: f
        }) => {
            let p = (0, o.default)("absolute inset-0 transition-opacity duration-500", a ? "opacity-100 z-10" : "pointer-events-none opacity-0"),
                h = (0, e.jsxs)(e.Fragment, {
                    children: [(0, e.jsx)(n.default, {
                        src: t.src,
                        alt: t.alt ?? "",
                        fill: !0,
                        sizes: r,
                        priority: i,
                        className: (0, o.default)("object-cover", f && "brightness-75"),
                        ...t.placeholder ? {
                            placeholder: "blur",
                            blurDataURL: t.placeholder
                        } : {}
                    }), c && (0, e.jsx)("span", {
                        className: "absolute inset-0 flex items-center justify-center",
                        children: (0, e.jsx)("span", {
                            className: "dark:bg-mango-black/90 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black shadow-md transition-transform group-hover:scale-110 group-focus-visible:scale-110 dark:text-white",
                            children: (0, e.jsx)(u.default, {
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
                children: h
            }) : (0, e.jsx)("div", {
                className: p,
                children: h
            })
        };
    t.s(["default", 0, ({
        src: t,
        mode: n = "click-to-play",
        poster: o,
        posterSizes: l = "100vw",
        posterPriority: s = !1,
        controls: u,
        isActive: c = !0,
        onPlayingChange: f,
        className: h
    }) => {
        let d = (0, r.useRef)(null),
            g = (0, i.useInView)(d, {
                once: !0
            }),
            b = (0, a.useReducedMotion)(),
            v = "click-to-play" === n,
            w = "autoplay" === n,
            [O, A] = (0, r.useState)(w),
            [x, j] = (0, r.useState)(!1),
            [E, M] = (0, r.useState)(w),
            V = t => {
                A(t), t && M(!0), f?.(t)
            },
            P = v ? O : g && !b,
            H = !!o?.src && !(x && E),
            S = u ? "string" == typeof u ? u : O ? u.playing : u.paused : "none",
            I = v ? () => V(!0) : void 0;
        return (0, e.jsxs)("div", {
            ref: d,
            className: h ?? "relative aspect-video w-full overflow-hidden rounded-2xl bg-mango-black",
            children: [P && (0, e.jsx)(p, {
                url: t,
                isActive: c,
                playing: O,
                loop: !v,
                muted: !v,
                playsinline: !v,
                controls: v,
                onReady: () => j(!0)
            }), o?.src && (0, e.jsx)(y, {
                poster: o,
                posterSizes: l,
                posterPriority: s,
                visible: H,
                onClick: I,
                showPlayBadge: v,
                dim: v
            }), "none" !== S && x && (0, e.jsx)(m, {
                position: S,
                isPlaying: O,
                onToggle: () => V(!O)
            })]
        })
    }], 880749)
}, 350747, t => {
    "use strict";
    let e = t.i(880749).default;
    t.s(["default", 0, e])
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "695ef4dd-0699-5caf-8af5-0c010ac70856")
    } catch (e) {}
}();
//# debugId=695ef4dd-0699-5caf-8af5-0c010ac70856