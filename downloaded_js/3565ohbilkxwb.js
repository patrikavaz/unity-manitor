(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 621737, (e, t, r) => {
    "use strict";
    e.i(913836), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function() {
            return y
        }
    });
    let n = e.r(836437),
        o = e.r(56421),
        i = e.r(785328),
        a = o._(e.r(409781)),
        l = n._(e.r(42246)),
        s = n._(e.r(811275)),
        u = e.r(943910),
        c = e.r(532450),
        d = e.r(64838),
        f = e.r(519992),
        p = n._(e.r(199274)),
        h = e.r(363863),
        m = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            qualities: [75],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };

    function g(e, t, r, n, o, i, a) {
        let l = e?.src;
        e && e["data-loaded-src"] !== l && (e["data-loaded-src"] = l, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && o(!0), r?.current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let n = !1,
                        o = !1;
                    r.current({
                        ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => n,
                        isPropagationStopped: () => o,
                        persist: () => {},
                        preventDefault: () => {
                            n = !0, t.preventDefault()
                        },
                        stopPropagation: () => {
                            o = !0, t.stopPropagation()
                        }
                    })
                }
                n?.current && n.current(e)
            }
        }))
    }

    function b(e) {
        return a.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let v = "u" < typeof window ? a.useEffect : a.useLayoutEffect,
        E = (0, a.forwardRef)(({
            src: e,
            srcSet: t,
            sizes: r,
            height: n,
            width: o,
            decoding: l,
            className: s,
            style: u,
            fetchPriority: c,
            placeholder: d,
            loading: f,
            unoptimized: p,
            fill: m,
            onLoadRef: E,
            onLoadingCompleteRef: N,
            setBlurComplete: y,
            setShowAltText: w,
            sizesInput: _,
            onLoad: R,
            onError: S,
            ...T
        }, C) => {
            let x = (0, a.useRef)(!1),
                O = (0, a.useRef)(null);
            v(() => {
                let {
                    current: e
                } = x, {
                    current: t
                } = O;
                e || null === t || (S && (t.src = t.src), t.complete && g(t, d, E, N, y, p, _), x.current = !0)
            }, [e, d, E, N, S, p, _]);
            let P = (0, h.useMergedRef)(C, O);
            return (0, i.jsx)("img", {
                ...T,
                ...b(c),
                loading: f,
                width: o,
                height: n,
                decoding: l,
                "data-nimg": m ? "fill" : "1",
                className: s,
                style: u,
                sizes: r,
                srcSet: t,
                src: e,
                ref: P,
                onLoad: e => {
                    g(e.currentTarget, d, E, N, y, p, _)
                },
                onError: e => {
                    w(!0), "empty" !== d && y(!0), S && S(e)
                }
            })
        });

    function N({
        isAppRouter: e,
        imgAttributes: t
    }) {
        let r = {
            as: "image",
            imageSrcSet: t.srcSet,
            imageSizes: t.sizes,
            crossOrigin: t.crossOrigin,
            referrerPolicy: t.referrerPolicy,
            ...b(t.fetchPriority)
        };
        return e && l.default.preload ? (l.default.preload(t.src, r), null) : (0, i.jsx)(s.default, {
            children: (0, i.jsx)("link", {
                rel: "preload",
                href: t.srcSet ? void 0 : t.src,
                ...r
            }, "__nimg-" + t.src + t.srcSet + t.sizes)
        })
    }
    let y = (0, a.forwardRef)((e, t) => {
        let r = (0, a.useContext)(f.RouterContext),
            n = (0, a.useContext)(d.ImageConfigContext),
            o = (0, a.useMemo)(() => {
                let e = m || n || c.imageConfigDefault,
                    t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                    r = e.deviceSizes.sort((e, t) => e - t),
                    o = e.qualities?.sort((e, t) => e - t);
                return {
                    ...e,
                    allSizes: t,
                    deviceSizes: r,
                    qualities: o,
                    localPatterns: "u" < typeof window ? n?.localPatterns : e.localPatterns
                }
            }, [n]),
            {
                onLoad: l,
                onLoadingComplete: s
            } = e,
            h = (0, a.useRef)(l);
        (0, a.useEffect)(() => {
            h.current = l
        }, [l]);
        let g = (0, a.useRef)(s);
        (0, a.useEffect)(() => {
            g.current = s
        }, [s]);
        let [b, v] = (0, a.useState)(!1), [y, w] = (0, a.useState)(!1), {
            props: _,
            meta: R
        } = (0, u.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: o,
            blurComplete: b,
            showAltText: y
        });
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(E, {
                ..._,
                unoptimized: R.unoptimized,
                placeholder: R.placeholder,
                fill: R.fill,
                onLoadRef: h,
                onLoadingCompleteRef: g,
                setBlurComplete: v,
                setShowAltText: w,
                sizesInput: e.sizes,
                ref: t
            }), R.preload ? (0, i.jsx)(N, {
                isAppRouter: !r,
                imgAttributes: _
            }) : null]
        })
    });
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 817323, (e, t, r) => {
    "use strict";

    function n(e, t) {
        let r = e || 75;
        return t?.qualities?.length ? t.qualities.reduce((e, t) => Math.abs(t - r) < Math.abs(e - r) ? t : e, t.qualities[0]) : r
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}, 199274, (e, t, r) => {
    "use strict";
    e.i(913836), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = e.r(817323),
        o = e.r(547981);

    function i({
        config: e,
        src: t,
        width: r,
        quality: a
    }) {
        let l = (0, o.getDeploymentId)();
        if (t.startsWith("/") && !t.startsWith("//"))
            if (t.includes("/_next/static/immutable") && !(0, o.getAssetToken)()) l = void 0;
            else {
                let e = t.indexOf("?");
                if (-1 !== e) {
                    let r = new URLSearchParams(t.slice(e + 1)),
                        n = r.get("dpl");
                    if (n) {
                        l = n, r.delete("dpl");
                        let o = r.toString();
                        t = t.slice(0, e) + (o ? "?" + o : "")
                    }
                }
            } if (t.startsWith("/") && t.includes("?") && e.localPatterns?.length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search) throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: !1,
            configurable: !0
        });
        let s = (0, n.findClosestQuality)(a, e);
        return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${s}${t.startsWith("/")&&l?`&dpl=${l}`:""}`
    }
    i.__next_img_default = !0;
    let a = i
}, 811275, (e, t, r) => {
    "use strict";
    e.i(913836), Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return m
        },
        defaultHead: function() {
            return d
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let i = e.r(836437),
        a = e.r(56421),
        l = e.r(785328),
        s = a._(e.r(409781)),
        u = i._(e.r(67094)),
        c = e.r(477706);

    function d() {
        return [(0, l.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0, l.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }

    function f(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === s.default.Fragment ? e.concat(s.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    let p = ["name", "httpEquiv", "charSet", "itemProp"];

    function h(e) {
        let t, r, n, o;
        return e.reduce(f, []).reverse().concat(d().reverse()).filter((t = new Set, r = new Set, n = new Set, o = {}, e => {
            let i = !0,
                a = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                a = !0;
                let r = e.key.slice(e.key.indexOf("$") + 1);
                t.has(r) ? i = !1 : t.add(r)
            }
            switch (e.type) {
                case "title":
                case "base":
                    r.has(e.type) ? i = !1 : r.add(e.type);
                    break;
                case "meta":
                    for (let t = 0, r = p.length; t < r; t++) {
                        let r = p[t];
                        if (e.props.hasOwnProperty(r))
                            if ("charSet" === r) n.has(r) ? i = !1 : n.add(r);
                            else {
                                let t = e.props[r],
                                    n = o[r] || new Set;
                                ("name" !== r || !a) && n.has(t) ? i = !1 : (n.add(t), o[r] = n)
                            }
                    }
            }
            return i
        })).reverse().map((e, t) => {
            let r = e.key || t;
            return s.default.cloneElement(e, {
                key: r
            })
        })
    }
    let m = function({
        children: e
    }) {
        let t = (0, s.useContext)(c.HeadManagerContext);
        return (0, l.jsx)(u.default, {
            reduceComponentsToState: h,
            headManager: t,
            children: e
        })
    };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 97145, (e, t, r) => {
    "use strict";

    function n({
        widthInt: e,
        heightInt: t,
        blurWidth: r,
        blurHeight: o,
        blurDataURL: i,
        objectFit: a
    }) {
        let l = r ? 40 * r : e,
            s = o ? 40 * o : t,
            u = l && s ? `viewBox='0 0 ${l} ${s}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${u}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${i}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}, 532450, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        VALID_LOADERS: function() {
            return i
        },
        imageConfigDefault: function() {
            return a
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
        a = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 14400,
            formats: ["image/webp"],
            maximumDiskCacheSize: void 0,
            maximumRedirects: 3,
            maximumResponseBody: 5e7,
            dangerouslyAllowLocalIP: !1,
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "attachment",
            localPatterns: void 0,
            remotePatterns: [],
            qualities: [75],
            unoptimized: !1,
            customCacheHandler: !1
        }
}, 943910, (e, t, r) => {
    "use strict";
    e.i(913836), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function() {
            return u
        }
    });
    let n = e.r(547981),
        o = e.r(97145),
        i = e.r(532450),
        a = ["-moz-initial", "fill", "none", "scale-down", void 0];

    function l(e) {
        return void 0 !== e.default
    }

    function s(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
    }

    function u({
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: c = !1,
        preload: d = !1,
        loading: f,
        className: p,
        quality: h,
        width: m,
        height: g,
        fill: b = !1,
        style: v,
        overrideSrc: E,
        onLoad: N,
        onLoadingComplete: y,
        placeholder: w = "empty",
        blurDataURL: _,
        fetchPriority: R,
        decoding: S = "async",
        layout: T,
        objectFit: C,
        objectPosition: x,
        lazyBoundary: O,
        lazyRoot: P,
        ...L
    }, k) {
        var j;
        let M, A, I, {
                imgConf: F,
                showAltText: D,
                blurComplete: z,
                defaultLoader: $
            } = k,
            W = F || i.imageConfigDefault;
        if ("allSizes" in W) M = W;
        else {
            let e = [...W.deviceSizes, ...W.imageSizes].sort((e, t) => e - t),
                t = W.deviceSizes.sort((e, t) => e - t),
                r = W.qualities?.sort((e, t) => e - t);
            M = {
                ...W,
                allSizes: e,
                deviceSizes: t,
                qualities: r
            }
        }
        if (void 0 === $) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: !1,
            configurable: !0
        });
        let U = L.loader || $;
        delete L.loader, delete L.srcSet;
        let q = "__next_img_default" in U;
        if (q) {
            if ("custom" === M.loader) throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: !1,
                configurable: !0
            })
        } else {
            let e = U;
            U = t => {
                let {
                    config: r,
                    ...n
                } = t;
                return e(n)
            }
        }
        if (T) {
            "fill" === T && (b = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            } [T];
            e && (v = {
                ...v,
                ...e
            });
            let r = {
                responsive: "100vw",
                fill: "100vw"
            } [T];
            r && !t && (t = r)
        }
        let K = "",
            B = s(m),
            G = s(g);
        if ((j = e) && "object" == typeof j && (l(j) || void 0 !== j.src)) {
            let t = l(e) ? e.default : e;
            if (!t.src) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: !1,
                configurable: !0
            });
            if (!t.height || !t.width) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: !1,
                configurable: !0
            });
            if (A = t.blurWidth, I = t.blurHeight, _ = _ || t.blurDataURL, K = t.src, !b)
                if (B || G) {
                    if (B && !G) {
                        let e = B / t.width;
                        G = Math.round(t.height * e)
                    } else if (!B && G) {
                        let e = G / t.height;
                        B = Math.round(t.width * e)
                    }
                } else B = t.width, G = t.height
        }
        let H = !c && !d && ("lazy" === f || void 0 === f);
        (!(e = "string" == typeof e ? e : K) || e.startsWith("data:") || e.startsWith("blob:")) && (r = !0, H = !1), M.unoptimized && (r = !0), q && !M.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0);
        let X = s(h),
            V = Object.assign(b ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: C,
                objectPosition: x
            } : {}, D ? {} : {
                color: "transparent"
            }, v),
            J = z || "empty" === w ? null : "blur" === w ? `url("data:image/svg+xml;charset=utf-8,${(0,o.getImageBlurSvg)({widthInt:B,heightInt:G,blurWidth:A,blurHeight:I,blurDataURL:_||"",objectFit:V.objectFit})}")` : `url("${w}")`,
            Q = a.includes(V.objectFit) ? "fill" === V.objectFit ? "100% 100%" : "cover" : V.objectFit,
            Y = J ? {
                backgroundSize: Q,
                backgroundPosition: V.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: J
            } : {},
            Z = function({
                config: e,
                src: t,
                unoptimized: r,
                width: o,
                quality: i,
                sizes: a,
                loader: l
            }) {
                if (r) {
                    if (t.startsWith("/") && !t.startsWith("//")) {
                        let e = (0, n.getDeploymentId)();
                        if (t.includes("/_next/static/immutable") && !(0, n.getAssetToken)()) e = void 0;
                        else if (e) {
                            let r = t.indexOf("?");
                            if (-1 !== r) {
                                let n = new URLSearchParams(t.slice(r + 1));
                                n.get("dpl") || (n.append("dpl", e), t = t.slice(0, r) + "?" + n.toString())
                            } else t += `?dpl=${e}`
                        }
                    }
                    return {
                        src: t,
                        srcSet: void 0,
                        sizes: void 0
                    }
                }
                let {
                    widths: s,
                    kind: u
                } = function({
                    deviceSizes: e,
                    allSizes: t
                }, r, n) {
                    if (n) {
                        let r = /(^|\s)(1?\d?\d)vw/g,
                            o = [];
                        for (let e; e = r.exec(n);) o.push(parseInt(e[2]));
                        if (o.length) {
                            let r = .01 * Math.min(...o);
                            return {
                                widths: t.filter(t => t >= e[0] * r),
                                kind: "w"
                            }
                        }
                        return {
                            widths: t,
                            kind: "w"
                        }
                    }
                    return "number" != typeof r ? {
                        widths: e,
                        kind: "w"
                    } : {
                        widths: [...new Set([r, 2 * r].map(e => t.find(t => t >= e) || t[t.length - 1]))],
                        kind: "x"
                    }
                }(e, o, a), c = s.length - 1;
                return {
                    sizes: a || "w" !== u ? a : "100vw",
                    srcSet: s.map((r, n) => `${l({config:e,src:t,quality:i,width:r})} ${"w"===u?r:n+1}${u}`).join(", "),
                    src: l({
                        config: e,
                        src: t,
                        quality: i,
                        width: s[c]
                    })
                }
            }({
                config: M,
                src: e,
                unoptimized: r,
                width: B,
                quality: X,
                sizes: t,
                loader: U
            }),
            ee = H ? "lazy" : f;
        return {
            props: {
                ...L,
                loading: ee,
                fetchPriority: R,
                width: B,
                height: G,
                decoding: S,
                className: p,
                style: {
                    ...V,
                    ...Y
                },
                sizes: Z.sizes,
                srcSet: Z.srcSet,
                src: E || Z.src
            },
            meta: {
                unoptimized: r,
                preload: d || c,
                placeholder: w,
                fill: b
            }
        }
    }
}, 64838, (e, t, r) => {
    "use strict";
    e.i(913836), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let n = e.r(836437)._(e.r(409781)),
        o = e.r(532450),
        i = n.default.createContext(o.imageConfigDefault)
}, 20881, (e, t, r) => {
    "use strict";
    e.i(913836), Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return c
        },
        getImageProps: function() {
            return u
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let i = e.r(836437),
        a = e.r(943910),
        l = e.r(621737),
        s = i._(e.r(199274));

    function u(e) {
        let {
            props: t
        } = (0, a.getImgProps)(e, {
            defaultLoader: s.default,
            imgConf: {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                qualities: [75],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !1
            }
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return {
            props: t
        }
    }
    let c = l.Image
}, 833449, (e, t, r) => {
    t.exports = e.r(20881)
}, 67094, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let n = e.r(409781),
        o = "u" < typeof window,
        i = o ? () => {} : n.useLayoutEffect,
        a = o ? () => {} : n.useEffect;

    function l(e) {
        let {
            headManager: t,
            reduceComponentsToState: r
        } = e;

        function l() {
            if (t && t.mountedInstances) {
                let e = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(r(e))
            }
        }
        return o && (t?.mountedInstances?.add(e.children), l()), i(() => (t?.mountedInstances?.add(e.children), () => {
            t?.mountedInstances?.delete(e.children)
        })), i(() => (t && (t._pendingUpdate = l), () => {
            t && (t._pendingUpdate = l)
        })), a(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
            t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
        })), null
    }
}, 675815, 193777, e => {
    "use strict";
    var t = e.i(776050),
        r = e.i(950011);
    class n {
        constructor(e, t, r, n) {
            this._walkerStack = [], this._currentSetFor = new Set, this._acceptNode = e => {
                if (e.nodeType === Node.ELEMENT_NODE) {
                    let t = e.shadowRoot;
                    if (t) {
                        let e = this._doc.createTreeWalker(t, this.whatToShow, {
                            acceptNode: this._acceptNode
                        });
                        return this._walkerStack.unshift(e), NodeFilter.FILTER_ACCEPT
                    }
                    if ("function" == typeof this.filter) return this.filter(e);
                    if (this.filter?.acceptNode) return this.filter.acceptNode(e);
                    else if (null === this.filter) return NodeFilter.FILTER_ACCEPT
                }
                return NodeFilter.FILTER_SKIP
            }, this._doc = e, this.root = t, this.filter = n ?? null, this.whatToShow = r ?? NodeFilter.SHOW_ALL, this._currentNode = t, this._walkerStack.unshift(e.createTreeWalker(t, r, this._acceptNode));
            const o = t.shadowRoot;
            if (o) {
                const e = this._doc.createTreeWalker(o, this.whatToShow, {
                    acceptNode: this._acceptNode
                });
                this._walkerStack.unshift(e)
            }
        }
        get currentNode() {
            return this._currentNode
        }
        set currentNode(e) {
            if (!(0, t.nodeContains)(this.root, e)) throw Error("Cannot set currentNode to a node that is not contained by the root node.");
            let r = [],
                n = e,
                o = e;
            for (this._currentNode = e; n && n !== this.root;)
                if (n.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                    let e = n,
                        t = this._doc.createTreeWalker(e, this.whatToShow, {
                            acceptNode: this._acceptNode
                        });
                    r.push(t), t.currentNode = o, this._currentSetFor.add(t), n = o = e.host
                } else n = n.parentNode;
            let i = this._doc.createTreeWalker(this.root, this.whatToShow, {
                acceptNode: this._acceptNode
            });
            r.push(i), i.currentNode = o, this._currentSetFor.add(i), this._walkerStack = r
        }
        get doc() {
            return this._doc
        }
        firstChild() {
            let e = this.currentNode,
                r = this.nextNode();
            return (0, t.nodeContains)(e, r) ? (r && (this.currentNode = r), r) : (this.currentNode = e, null)
        }
        lastChild() {
            let e = this._walkerStack[0].lastChild();
            return e && (this.currentNode = e), e
        }
        nextNode() {
            let e = this._walkerStack[0].nextNode();
            if (e) {
                if (e.shadowRoot) {
                    let t;
                    if ("function" == typeof this.filter ? t = this.filter(e) : this.filter?.acceptNode && (t = this.filter.acceptNode(e)), t === NodeFilter.FILTER_ACCEPT) return this.currentNode = e, e;
                    let r = this.nextNode();
                    return r && (this.currentNode = r), r
                }
                return e && (this.currentNode = e), e
            }
            if (!(this._walkerStack.length > 1)) return null;
            {
                this._walkerStack.shift();
                let e = this.nextNode();
                return e && (this.currentNode = e), e
            }
        }
        previousNode() {
            let e = this._walkerStack[0];
            if (e.currentNode === e.root) {
                if (this._currentSetFor.has(e) && (this._currentSetFor.delete(e), this._walkerStack.length > 1)) {
                    this._walkerStack.shift();
                    let e = this.previousNode();
                    return e && (this.currentNode = e), e
                }
                return null
            }
            let t = e.previousNode();
            if (t) {
                if (t.shadowRoot) {
                    let e;
                    if ("function" == typeof this.filter ? e = this.filter(t) : this.filter?.acceptNode && (e = this.filter.acceptNode(t)), e === NodeFilter.FILTER_ACCEPT) return t && (this.currentNode = t), t;
                    let r = this.lastChild();
                    return r && (this.currentNode = r), r
                }
                return t && (this.currentNode = t), t
            }
            if (!(this._walkerStack.length > 1)) return null;
            {
                this._walkerStack.shift();
                let e = this.previousNode();
                return e && (this.currentNode = e), e
            }
        }
        nextSibling() {
            return null
        }
        previousSibling() {
            return null
        }
        parentNode() {
            return null
        }
    }

    function o(e, t, o, i) {
        return (0, r.shadowDOM)() ? new n(e, t, o, i) : e.createTreeWalker(t, o, i)
    }
    e.s(["createShadowTreeWalker", 0, o], 193777);
    var i = e.i(799163),
        a = e.i(816862),
        l = e.i(575414),
        s = e.i(904960),
        u = e.i(424690),
        c = e.i(185559),
        d = e.i(409781);
    let f = d.default.createContext(null),
        p = "react-aria-focus-scope-restore",
        h = null;

    function m(e) {
        return e[0].parentElement
    }

    function g(e) {
        let t = x.getTreeNode(h);
        for (; t && t.scopeRef !== e;) {
            if (t.contain) return !1;
            t = t.parent
        }
        return !0
    }

    function b(e, r) {
        return !!e && !!r && r.some(r => (0, t.nodeContains)(r, e))
    }

    function v(e, t = null) {
        if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
        for (let {
                scopeRef: r
            }
            of x.traverse(x.getTreeNode(t)))
            if (r && b(e, r.current)) return !0;
        return !1
    }

    function E(e, t) {
        let r = x.getTreeNode(t)?.parent;
        for (; r;) {
            if (r.scopeRef === e) return !0;
            r = r.parent
        }
        return !1
    }

    function N(e, t = !1) {
        if (null == e || t) {
            if (null != e) try {
                e.focus()
            } catch {}
        } else try {
            (0, i.focusSafely)(e)
        } catch {}
    }

    function y(e, t = !0) {
        let r = e[0].previousElementSibling,
            n = m(e),
            o = S(n, {
                tabbable: t
            }, e);
        o.currentNode = r;
        let i = o.nextNode();
        return t && !i && ((o = S(n = m(e), {
            tabbable: !1
        }, e)).currentNode = r, i = o.nextNode()), i
    }

    function w(e, t = !0) {
        N(y(e, t))
    }

    function _(e) {
        let t = x.getTreeNode(h);
        for (; t && t.scopeRef !== e;) {
            if (t.nodeToRestore) return !1;
            t = t.parent
        }
        return t?.scopeRef === e
    }

    function R(e) {
        e.dispatchEvent(new CustomEvent(p, {
            bubbles: !0,
            cancelable: !0
        })) && N(e)
    }

    function S(e, r, n) {
        let i = r?.tabbable ? u.isTabbable : u.isFocusable,
            a = e?.nodeType === Node.ELEMENT_NODE ? e : null,
            s = (0, l.getOwnerDocument)(a),
            c = o(s, e || s, NodeFilter.SHOW_ELEMENT, {
                acceptNode: e => (0, t.nodeContains)(r?.from, e) || r?.tabbable && "INPUT" === e.tagName && "radio" === e.getAttribute("type") && (! function(e) {
                    if (e.checked) return !0;
                    let t = function(e) {
                        if (!e.form) return Array.from((0, l.getOwnerDocument)(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)).filter(e => !e.form);
                        let t = e.form.elements.namedItem(e.name),
                            r = (0, l.getOwnerWindow)(e);
                        return t instanceof r.RadioNodeList ? Array.from(t).filter(e => e instanceof r.HTMLInputElement) : t instanceof r.HTMLInputElement ? [t] : []
                    }(e);
                    return t.length > 0 && !t.some(e => e.checked)
                }(e) || "INPUT" === c.currentNode.tagName && "radio" === c.currentNode.type && c.currentNode.name === e.name) ? NodeFilter.FILTER_REJECT : i(e) && (!n || b(e, n)) && (!r?.accept || r.accept(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            });
        return r?.from && (c.currentNode = r.from), c
    }

    function T(e) {
        let t, r;
        do(t = e.lastChild()) && (r = t); while (t) return r
    }
    class C {
        constructor(e) {
            this.children = new Set, this.contain = !1, this.scopeRef = e.scopeRef
        }
        addChild(e) {
            this.children.add(e), e.parent = this
        }
        removeChild(e) {
            this.children.delete(e), e.parent = void 0
        }
    }
    let x = new class e {
        constructor() {
            this.fastMap = new Map, this.root = new C({
                scopeRef: null
            }), this.fastMap.set(null, this.root)
        }
        get size() {
            return this.fastMap.size
        }
        getTreeNode(e) {
            return this.fastMap.get(e)
        }
        addTreeNode(e, t, r) {
            let n = this.fastMap.get(t ?? null);
            if (!n) return;
            let o = new C({
                scopeRef: e
            });
            n.addChild(o), o.parent = n, this.fastMap.set(e, o), r && (o.nodeToRestore = r)
        }
        addNode(e) {
            this.fastMap.set(e.scopeRef, e)
        }
        removeTreeNode(e) {
            if (null === e) return;
            let t = this.fastMap.get(e);
            if (!t) return;
            let r = t.parent;
            for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && b(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
            let n = t.children;
            r && (r.removeChild(t), n.size > 0 && n.forEach(e => r && r.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
            if (null != e.scopeRef && (yield e), e.children.size > 0)
                for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
            let t = new e;
            for (let e of this.traverse()) t.addTreeNode(e.scopeRef, e.parent?.scopeRef ?? null, e.nodeToRestore);
            return t
        }
    };
    e.s(["FocusScope", 0, function(e) {
        var r, n, o, i, u, T, O, P, L, k;
        let j, M, A, I, {
                children: F,
                contain: D,
                restoreFocus: z,
                autoFocus: $
            } = e,
            W = (0, d.useRef)(null),
            U = (0, d.useRef)(null),
            q = (0, d.useRef)([]),
            {
                parentNode: K
            } = (0, d.useContext)(f) || {},
            B = (0, d.useMemo)(() => new C({
                scopeRef: q
            }), [q]);
        (0, c.useLayoutEffect)(() => {
            let e = K || x.root;
            if (x.getTreeNode(e.scopeRef) && h && !E(h, e.scopeRef)) {
                let t = x.getTreeNode(h);
                t && (e = t)
            }
            e.addChild(B), x.addNode(B)
        }, [B, K]), (0, c.useLayoutEffect)(() => {
            let e = x.getTreeNode(q);
            e && (e.contain = !!D)
        }, [D]), (0, c.useLayoutEffect)(() => {
            let e = W.current?.nextSibling,
                t = [],
                r = e => e.stopPropagation();
            for (; e && e !== U.current;) t.push(e), e.addEventListener(p, r), e = e.nextSibling;
            return q.current = t, () => {
                for (let e of t) e.removeEventListener(p, r)
            }
        }, [F]), r = q, n = z, o = D, (0, c.useLayoutEffect)(() => {
            if (n || o) return;
            let e = r.current,
                i = (0, l.getOwnerDocument)(e ? e[0] : void 0),
                a = e => {
                    let n = (0, t.getEventTarget)(e);
                    b(n, r.current) ? h = r : v(n) || (h = null)
                };
            return i.addEventListener("focusin", a, !1), e?.forEach(e => e.addEventListener("focusin", a, !1)), () => {
                i.removeEventListener("focusin", a, !1), e?.forEach(e => e.removeEventListener("focusin", a, !1))
            }
        }, [r, n, o]), i = q, u = D, j = (0, d.useRef)(void 0), M = (0, d.useRef)(void 0), (0, c.useLayoutEffect)(() => {
            let e = i.current;
            if (!u) {
                M.current && (cancelAnimationFrame(M.current), M.current = void 0);
                return
            }
            let r = (0, l.getOwnerDocument)(e ? e[0] : void 0),
                n = e => {
                    if ("Tab" !== e.key || e.altKey || e.ctrlKey || e.metaKey || !g(i) || e.isComposing) return;
                    let n = (0, t.getActiveElement)(r),
                        o = i.current;
                    if (!o || !b(n, o)) return;
                    let a = S(m(o), {
                        tabbable: !0
                    }, o);
                    if (!n) return;
                    a.currentNode = n;
                    let s = e.shiftKey ? a.previousNode() : a.nextNode();
                    s || (a.currentNode = e.shiftKey ? o[o.length - 1].nextElementSibling : o[0].previousElementSibling, s = e.shiftKey ? a.previousNode() : a.nextNode()), e.preventDefault(), s && (N(s, !0), s instanceof(0, l.getOwnerWindow)(s).HTMLInputElement && s.select())
                },
                o = e => {
                    (!h || E(h, i)) && b((0, t.getEventTarget)(e), i.current) ? (h = i, j.current = (0, t.getEventTarget)(e)) : g(i) && !v((0, t.getEventTarget)(e), i) ? j.current ? j.current.focus() : h && h.current && w(h.current) : g(i) && (j.current = (0, t.getEventTarget)(e))
                },
                c = e => {
                    M.current && cancelAnimationFrame(M.current), M.current = requestAnimationFrame(() => {
                        let n = (0, a.getInteractionModality)(),
                            o = ("virtual" === n || null === n) && (0, s.isAndroid)() && (0, s.isChrome)(),
                            l = (0, t.getActiveElement)(r);
                        if (!o && l && g(i) && !v(l, i)) {
                            h = i;
                            let r = (0, t.getEventTarget)(e);
                            r && r.isConnected ? (j.current = r, j.current?.focus()) : h.current && w(h.current)
                        }
                    })
                };
            return r.addEventListener("keydown", n, !1), r.addEventListener("focusin", o, !1), e?.forEach(e => e.addEventListener("focusin", o, !1)), e?.forEach(e => e.addEventListener("focusout", c, !1)), () => {
                r.removeEventListener("keydown", n, !1), r.removeEventListener("focusin", o, !1), e?.forEach(e => e.removeEventListener("focusin", o, !1)), e?.forEach(e => e.removeEventListener("focusout", c, !1))
            }
        }, [i, u]), (0, c.useLayoutEffect)(() => () => {
            M.current && cancelAnimationFrame(M.current)
        }, [M]), T = q, O = z, P = D, A = (0, d.useRef)("u" > typeof document ? (0, t.getActiveElement)((0, l.getOwnerDocument)(T.current ? T.current[0] : void 0)) : null), (0, c.useLayoutEffect)(() => {
            let e = T.current,
                r = (0, l.getOwnerDocument)(e ? e[0] : void 0);
            if (!O || P) return;
            let n = () => {
                (!h || E(h, T)) && b((0, t.getActiveElement)(r), T.current) && (h = T)
            };
            return r.addEventListener("focusin", n, !1), e?.forEach(e => e.addEventListener("focusin", n, !1)), () => {
                r.removeEventListener("focusin", n, !1), e?.forEach(e => e.removeEventListener("focusin", n, !1))
            }
        }, [T, P]), (0, c.useLayoutEffect)(() => {
            let e = (0, l.getOwnerDocument)(T.current ? T.current[0] : void 0);
            if (!O) return;
            let t = t => {
                if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !g(T) || t.isComposing) return;
                let r = e.activeElement;
                if (!v(r, T) || !_(T)) return;
                let n = x.getTreeNode(T);
                if (!n) return;
                let o = n.nodeToRestore,
                    i = S(e.body, {
                        tabbable: !0
                    });
                i.currentNode = r;
                let a = t.shiftKey ? i.previousNode() : i.nextNode();
                if (o && o.isConnected && o !== e.body || (o = void 0, n.nodeToRestore = void 0), (!a || !v(a, T)) && o) {
                    i.currentNode = o;
                    do a = t.shiftKey ? i.previousNode() : i.nextNode(); while (v(a, T))(t.preventDefault(), t.stopPropagation(), a) ? N(a, !0): v(o) ? N(o, !0) : r.blur()
                }
            };
            return P || e.addEventListener("keydown", t, !0), () => {
                P || e.removeEventListener("keydown", t, !0)
            }
        }, [T, O, P]), (0, c.useLayoutEffect)(() => {
            let e = (0, l.getOwnerDocument)(T.current ? T.current[0] : void 0);
            if (!O) return;
            let r = x.getTreeNode(T);
            if (r) return r.nodeToRestore = A.current ?? void 0, () => {
                let r = x.getTreeNode(T);
                if (!r) return;
                let n = r.nodeToRestore,
                    o = (0, t.getActiveElement)(e);
                if (O && n && (o && v(o, T) || o === e.body && _(T))) {
                    let t = x.clone();
                    requestAnimationFrame(() => {
                        if (e.activeElement === e.body) {
                            let e = t.getTreeNode(T);
                            for (; e;) {
                                if (e.nodeToRestore && e.nodeToRestore.isConnected) return void R(e.nodeToRestore);
                                e = e.parent
                            }
                            for (e = t.getTreeNode(T); e;) {
                                if (e.scopeRef && e.scopeRef.current && x.getTreeNode(e.scopeRef)) return void R(y(e.scopeRef.current, !0));
                                e = e.parent
                            }
                        }
                    })
                }
            }
        }, [T, O]), L = q, k = $, I = d.default.useRef(k), (0, d.useEffect)(() => {
            if (I.current) {
                h = L;
                let e = (0, l.getOwnerDocument)(L.current ? L.current[0] : void 0);
                !b((0, t.getActiveElement)(e), h.current) && L.current && w(L.current)
            }
            I.current = !1
        }, [L]), (0, d.useEffect)(() => {
            let e = (0, t.getActiveElement)((0, l.getOwnerDocument)(q.current ? q.current[0] : void 0)),
                r = null;
            if (b(e, q.current)) {
                for (let t of x.traverse()) t.scopeRef && b(e, t.scopeRef.current) && (r = t);
                r === x.getTreeNode(q) && (h = r.scopeRef)
            }
        }, [q]), (0, c.useLayoutEffect)(() => () => {
            let e = x.getTreeNode(q)?.parent?.scopeRef ?? null;
            (q === h || E(q, h)) && (!e || x.getTreeNode(e)) && (h = e), x.removeTreeNode(q)
        }, [q]);
        let G = (0, d.useMemo)(() => {
                var e;
                return e = q, {
                    focusNext(r = {}) {
                        let n = e.current,
                            {
                                from: o,
                                tabbable: i,
                                wrap: a,
                                accept: s
                            } = r,
                            u = o || (0, t.getActiveElement)((0, l.getOwnerDocument)(n[0] ?? void 0)),
                            c = n[0].previousElementSibling,
                            d = S(m(n), {
                                tabbable: i,
                                accept: s
                            }, n);
                        d.currentNode = b(u, n) ? u : c;
                        let f = d.nextNode();
                        return !f && a && (d.currentNode = c, f = d.nextNode()), f && N(f, !0), f
                    },
                    focusPrevious(r = {}) {
                        let n = e.current,
                            {
                                from: o,
                                tabbable: i,
                                wrap: a,
                                accept: s
                            } = r,
                            u = o || (0, t.getActiveElement)((0, l.getOwnerDocument)(n[0] ?? void 0)),
                            c = n[n.length - 1].nextElementSibling,
                            d = S(m(n), {
                                tabbable: i,
                                accept: s
                            }, n);
                        d.currentNode = b(u, n) ? u : c;
                        let f = d.previousNode();
                        return !f && a && (d.currentNode = c, f = d.previousNode()), f && N(f, !0), f
                    },
                    focusFirst(t = {}) {
                        let r = e.current,
                            {
                                tabbable: n,
                                accept: o
                            } = t,
                            i = S(m(r), {
                                tabbable: n,
                                accept: o
                            }, r);
                        i.currentNode = r[0].previousElementSibling;
                        let a = i.nextNode();
                        return a && N(a, !0), a
                    },
                    focusLast(t = {}) {
                        let r = e.current,
                            {
                                tabbable: n,
                                accept: o
                            } = t,
                            i = S(m(r), {
                                tabbable: n,
                                accept: o
                            }, r);
                        i.currentNode = r[r.length - 1].nextElementSibling;
                        let a = i.previousNode();
                        return a && N(a, !0), a
                    }
                }
            }, []),
            H = (0, d.useMemo)(() => ({
                focusManager: G,
                parentNode: B
            }), [B, G]);
        return d.default.createElement(f.Provider, {
            value: H
        }, d.default.createElement("span", {
            "data-focus-scope-start": !0,
            hidden: !0,
            ref: W
        }), F, d.default.createElement("span", {
            "data-focus-scope-end": !0,
            hidden: !0,
            ref: U
        }))
    }, "createFocusManager", 0, function(e, r = {}) {
        return {
            focusNext(n = {}) {
                let o = e.current;
                if (!o) return null;
                let {
                    from: i,
                    tabbable: a = r.tabbable,
                    wrap: s = r.wrap,
                    accept: u = r.accept
                } = n, c = i || (0, t.getActiveElement)((0, l.getOwnerDocument)(o)), d = S(o, {
                    tabbable: a,
                    accept: u
                });
                (0, t.nodeContains)(o, c) && (d.currentNode = c);
                let f = d.nextNode();
                return !f && s && (d.currentNode = o, f = d.nextNode()), f && N(f, !0), f
            },
            focusPrevious(n = r) {
                let o = e.current;
                if (!o) return null;
                let {
                    from: i,
                    tabbable: a = r.tabbable,
                    wrap: s = r.wrap,
                    accept: u = r.accept
                } = n, c = i || (0, t.getActiveElement)((0, l.getOwnerDocument)(o)), d = S(o, {
                    tabbable: a,
                    accept: u
                });
                if ((0, t.nodeContains)(o, c)) d.currentNode = c;
                else {
                    let e = T(d);
                    return e && N(e, !0), e ?? null
                }
                let f = d.previousNode();
                if (!f && s) {
                    d.currentNode = o;
                    let e = T(d);
                    if (!e) return null;
                    f = e
                }
                return f && N(f, !0), f ?? null
            },
            focusFirst(t = r) {
                let n = e.current;
                if (!n) return null;
                let {
                    tabbable: o = r.tabbable,
                    accept: i = r.accept
                } = t, a = S(n, {
                    tabbable: o,
                    accept: i
                }).nextNode();
                return a && N(a, !0), a
            },
            focusLast(t = r) {
                let n = e.current;
                if (!n) return null;
                let {
                    tabbable: o = r.tabbable,
                    accept: i = r.accept
                } = t, a = T(S(n, {
                    tabbable: o,
                    accept: i
                }));
                return a && N(a, !0), a ?? null
            }
        }
    }, "getFocusableTreeWalker", 0, S, "isElementInChildOfActiveScope", 0, function(e) {
        return v(e, h)
    }], 675815)
}, 803258, e => {
    "use strict";
    e.i(913836);
    var t = e.i(409781);
    let r = "u" > typeof document ? t.default.useInsertionEffect ?? t.default.useLayoutEffect : () => {};
    e.s(["useControlledState", 0, function(e, n, o) {
        let [i, a] = (0, t.useState)(e || n), l = (0, t.useRef)(i), s = (0, t.useRef)(void 0 !== e), u = void 0 !== e;
        (0, t.useEffect)(() => {
            s.current, s.current = u
        }, [u]);
        let c = u ? e : i;
        r(() => {
            l.current = c
        });
        let [, d] = (0, t.useReducer)(() => ({}), {});
        return [c, (0, t.useCallback)((e, ...t) => {
            let r = "function" == typeof e ? e(l.current) : e;
            Object.is(l.current, r) || (l.current = r, a(r), d(), o?.(r, ...t))
        }, [o])]
    }])
}]);