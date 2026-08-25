(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 621737, (e, t, r) => {
    "use strict";
    e.i(913836), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function() {
            return E
        }
    });
    let o = e.r(836437),
        i = e.r(56421),
        n = e.r(785328),
        l = i._(e.r(409781)),
        s = o._(e.r(42246)),
        a = o._(e.r(811275)),
        u = e.r(943910),
        c = e.r(532450),
        d = e.r(64838),
        f = e.r(519992),
        p = o._(e.r(199274)),
        m = e.r(363863),
        g = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            qualities: [75],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };

    function h(e, t, r, o, i, n, l) {
        let s = e?.src;
        e && e["data-loaded-src"] !== s && (e["data-loaded-src"] = s, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && i(!0), r?.current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let o = !1,
                        i = !1;
                    r.current({
                        ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => o,
                        isPropagationStopped: () => i,
                        persist: () => {},
                        preventDefault: () => {
                            o = !0, t.preventDefault()
                        },
                        stopPropagation: () => {
                            i = !0, t.stopPropagation()
                        }
                    })
                }
                o?.current && o.current(e)
            }
        }))
    }

    function b(e) {
        return l.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let y = "u" < typeof window ? l.useEffect : l.useLayoutEffect,
        w = (0, l.forwardRef)(({
            src: e,
            srcSet: t,
            sizes: r,
            height: o,
            width: i,
            decoding: s,
            className: a,
            style: u,
            fetchPriority: c,
            placeholder: d,
            loading: f,
            unoptimized: p,
            fill: g,
            onLoadRef: w,
            onLoadingCompleteRef: v,
            setBlurComplete: E,
            setShowAltText: x,
            sizesInput: O,
            onLoad: _,
            onError: C,
            ...P
        }, S) => {
            let R = (0, l.useRef)(!1),
                j = (0, l.useRef)(null);
            y(() => {
                let {
                    current: e
                } = R, {
                    current: t
                } = j;
                e || null === t || (C && (t.src = t.src), t.complete && h(t, d, w, v, E, p, O), R.current = !0)
            }, [e, d, w, v, C, p, O]);
            let z = (0, m.useMergedRef)(S, j);
            return (0, n.jsx)("img", {
                ...P,
                ...b(c),
                loading: f,
                width: i,
                height: o,
                decoding: s,
                "data-nimg": g ? "fill" : "1",
                className: a,
                style: u,
                sizes: r,
                srcSet: t,
                src: e,
                ref: z,
                onLoad: e => {
                    h(e.currentTarget, d, w, v, E, p, O)
                },
                onError: e => {
                    x(!0), "empty" !== d && E(!0), C && C(e)
                }
            })
        });

    function v({
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
        return e && s.default.preload ? (s.default.preload(t.src, r), null) : (0, n.jsx)(a.default, {
            children: (0, n.jsx)("link", {
                rel: "preload",
                href: t.srcSet ? void 0 : t.src,
                ...r
            }, "__nimg-" + t.src + t.srcSet + t.sizes)
        })
    }
    let E = (0, l.forwardRef)((e, t) => {
        let r = (0, l.useContext)(f.RouterContext),
            o = (0, l.useContext)(d.ImageConfigContext),
            i = (0, l.useMemo)(() => {
                let e = g || o || c.imageConfigDefault,
                    t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                    r = e.deviceSizes.sort((e, t) => e - t),
                    i = e.qualities?.sort((e, t) => e - t);
                return {
                    ...e,
                    allSizes: t,
                    deviceSizes: r,
                    qualities: i,
                    localPatterns: "u" < typeof window ? o?.localPatterns : e.localPatterns
                }
            }, [o]),
            {
                onLoad: s,
                onLoadingComplete: a
            } = e,
            m = (0, l.useRef)(s);
        (0, l.useEffect)(() => {
            m.current = s
        }, [s]);
        let h = (0, l.useRef)(a);
        (0, l.useEffect)(() => {
            h.current = a
        }, [a]);
        let [b, y] = (0, l.useState)(!1), [E, x] = (0, l.useState)(!1), {
            props: O,
            meta: _
        } = (0, u.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: i,
            blurComplete: b,
            showAltText: E
        });
        return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(w, {
                ...O,
                unoptimized: _.unoptimized,
                placeholder: _.placeholder,
                fill: _.fill,
                onLoadRef: m,
                onLoadingCompleteRef: h,
                setBlurComplete: y,
                setShowAltText: x,
                sizesInput: e.sizes,
                ref: t
            }), _.preload ? (0, n.jsx)(v, {
                isAppRouter: !r,
                imgAttributes: O
            }) : null]
        })
    });
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 817323, (e, t, r) => {
    "use strict";

    function o(e, t) {
        let r = e || 75;
        return t?.qualities?.length ? t.qualities.reduce((e, t) => Math.abs(t - r) < Math.abs(e - r) ? t : e, t.qualities[0]) : r
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function() {
            return o
        }
    })
}, 199274, (e, t, r) => {
    "use strict";
    e.i(913836), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let o = e.r(817323),
        i = e.r(547981);

    function n({
        config: e,
        src: t,
        width: r,
        quality: l
    }) {
        let s = (0, i.getDeploymentId)();
        if (t.startsWith("/") && !t.startsWith("//"))
            if (t.includes("/_next/static/immutable") && !(0, i.getAssetToken)()) s = void 0;
            else {
                let e = t.indexOf("?");
                if (-1 !== e) {
                    let r = new URLSearchParams(t.slice(e + 1)),
                        o = r.get("dpl");
                    if (o) {
                        s = o, r.delete("dpl");
                        let i = r.toString();
                        t = t.slice(0, e) + (i ? "?" + i : "")
                    }
                }
            } if (t.startsWith("/") && t.includes("?") && e.localPatterns?.length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search) throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: !1,
            configurable: !0
        });
        let a = (0, o.findClosestQuality)(l, e);
        return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${a}${t.startsWith("/")&&s?`&dpl=${s}`:""}`
    }
    n.__next_img_default = !0;
    let l = n
}, 811275, (e, t, r) => {
    "use strict";
    e.i(913836), Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var o = {
        default: function() {
            return g
        },
        defaultHead: function() {
            return d
        }
    };
    for (var i in o) Object.defineProperty(r, i, {
        enumerable: !0,
        get: o[i]
    });
    let n = e.r(836437),
        l = e.r(56421),
        s = e.r(785328),
        a = l._(e.r(409781)),
        u = n._(e.r(67094)),
        c = e.r(477706);

    function d() {
        return [(0, s.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0, s.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }

    function f(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    let p = ["name", "httpEquiv", "charSet", "itemProp"];

    function m(e) {
        let t, r, o, i;
        return e.reduce(f, []).reverse().concat(d().reverse()).filter((t = new Set, r = new Set, o = new Set, i = {}, e => {
            let n = !0,
                l = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                l = !0;
                let r = e.key.slice(e.key.indexOf("$") + 1);
                t.has(r) ? n = !1 : t.add(r)
            }
            switch (e.type) {
                case "title":
                case "base":
                    r.has(e.type) ? n = !1 : r.add(e.type);
                    break;
                case "meta":
                    for (let t = 0, r = p.length; t < r; t++) {
                        let r = p[t];
                        if (e.props.hasOwnProperty(r))
                            if ("charSet" === r) o.has(r) ? n = !1 : o.add(r);
                            else {
                                let t = e.props[r],
                                    o = i[r] || new Set;
                                ("name" !== r || !l) && o.has(t) ? n = !1 : (o.add(t), i[r] = o)
                            }
                    }
            }
            return n
        })).reverse().map((e, t) => {
            let r = e.key || t;
            return a.default.cloneElement(e, {
                key: r
            })
        })
    }
    let g = function({
        children: e
    }) {
        let t = (0, a.useContext)(c.HeadManagerContext);
        return (0, s.jsx)(u.default, {
            reduceComponentsToState: m,
            headManager: t,
            children: e
        })
    };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 97145, (e, t, r) => {
    "use strict";

    function o({
        widthInt: e,
        heightInt: t,
        blurWidth: r,
        blurHeight: i,
        blurDataURL: n,
        objectFit: l
    }) {
        let s = r ? 40 * r : e,
            a = i ? 40 * i : t,
            u = s && a ? `viewBox='0 0 ${s} ${a}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${u}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${u?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return o
        }
    })
}, 532450, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var o = {
        VALID_LOADERS: function() {
            return n
        },
        imageConfigDefault: function() {
            return l
        }
    };
    for (var i in o) Object.defineProperty(r, i, {
        enumerable: !0,
        get: o[i]
    });
    let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
        l = {
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
    let o = e.r(547981),
        i = e.r(97145),
        n = e.r(532450),
        l = ["-moz-initial", "fill", "none", "scale-down", void 0];

    function s(e) {
        return void 0 !== e.default
    }

    function a(e) {
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
        quality: m,
        width: g,
        height: h,
        fill: b = !1,
        style: y,
        overrideSrc: w,
        onLoad: v,
        onLoadingComplete: E,
        placeholder: x = "empty",
        blurDataURL: O,
        fetchPriority: _,
        decoding: C = "async",
        layout: P,
        objectFit: S,
        objectPosition: R,
        lazyBoundary: j,
        lazyRoot: z,
        ...L
    }, T) {
        var M;
        let I, k, A, {
                imgConf: N,
                showAltText: H,
                blurComplete: D,
                defaultLoader: B
            } = T,
            $ = N || n.imageConfigDefault;
        if ("allSizes" in $) I = $;
        else {
            let e = [...$.deviceSizes, ...$.imageSizes].sort((e, t) => e - t),
                t = $.deviceSizes.sort((e, t) => e - t),
                r = $.qualities?.sort((e, t) => e - t);
            I = {
                ...$,
                allSizes: e,
                deviceSizes: t,
                qualities: r
            }
        }
        if (void 0 === B) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: !1,
            configurable: !0
        });
        let W = L.loader || B;
        delete L.loader, delete L.srcSet;
        let F = "__next_img_default" in W;
        if (F) {
            if ("custom" === I.loader) throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: !1,
                configurable: !0
            })
        } else {
            let e = W;
            W = t => {
                let {
                    config: r,
                    ...o
                } = t;
                return e(o)
            }
        }
        if (P) {
            "fill" === P && (b = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            } [P];
            e && (y = {
                ...y,
                ...e
            });
            let r = {
                responsive: "100vw",
                fill: "100vw"
            } [P];
            r && !t && (t = r)
        }
        let U = "",
            q = a(g),
            G = a(h);
        if ((M = e) && "object" == typeof M && (s(M) || void 0 !== M.src)) {
            let t = s(e) ? e.default : e;
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
            if (k = t.blurWidth, A = t.blurHeight, O = O || t.blurDataURL, U = t.src, !b)
                if (q || G) {
                    if (q && !G) {
                        let e = q / t.width;
                        G = Math.round(t.height * e)
                    } else if (!q && G) {
                        let e = G / t.height;
                        q = Math.round(t.width * e)
                    }
                } else q = t.width, G = t.height
        }
        let V = !c && !d && ("lazy" === f || void 0 === f);
        (!(e = "string" == typeof e ? e : U) || e.startsWith("data:") || e.startsWith("blob:")) && (r = !0, V = !1), I.unoptimized && (r = !0), F && !I.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0);
        let X = a(m),
            Y = Object.assign(b ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: S,
                objectPosition: R
            } : {}, H ? {} : {
                color: "transparent"
            }, y),
            K = D || "empty" === x ? null : "blur" === x ? `url("data:image/svg+xml;charset=utf-8,${(0,i.getImageBlurSvg)({widthInt:q,heightInt:G,blurWidth:k,blurHeight:A,blurDataURL:O||"",objectFit:Y.objectFit})}")` : `url("${x}")`,
            J = l.includes(Y.objectFit) ? "fill" === Y.objectFit ? "100% 100%" : "cover" : Y.objectFit,
            Q = K ? {
                backgroundSize: J,
                backgroundPosition: Y.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: K
            } : {},
            Z = function({
                config: e,
                src: t,
                unoptimized: r,
                width: i,
                quality: n,
                sizes: l,
                loader: s
            }) {
                if (r) {
                    if (t.startsWith("/") && !t.startsWith("//")) {
                        let e = (0, o.getDeploymentId)();
                        if (t.includes("/_next/static/immutable") && !(0, o.getAssetToken)()) e = void 0;
                        else if (e) {
                            let r = t.indexOf("?");
                            if (-1 !== r) {
                                let o = new URLSearchParams(t.slice(r + 1));
                                o.get("dpl") || (o.append("dpl", e), t = t.slice(0, r) + "?" + o.toString())
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
                    widths: a,
                    kind: u
                } = function({
                    deviceSizes: e,
                    allSizes: t
                }, r, o) {
                    if (o) {
                        let r = /(^|\s)(1?\d?\d)vw/g,
                            i = [];
                        for (let e; e = r.exec(o);) i.push(parseInt(e[2]));
                        if (i.length) {
                            let r = .01 * Math.min(...i);
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
                }(e, i, l), c = a.length - 1;
                return {
                    sizes: l || "w" !== u ? l : "100vw",
                    srcSet: a.map((r, o) => `${s({config:e,src:t,quality:n,width:r})} ${"w"===u?r:o+1}${u}`).join(", "),
                    src: s({
                        config: e,
                        src: t,
                        quality: n,
                        width: a[c]
                    })
                }
            }({
                config: I,
                src: e,
                unoptimized: r,
                width: q,
                quality: X,
                sizes: t,
                loader: W
            }),
            ee = V ? "lazy" : f;
        return {
            props: {
                ...L,
                loading: ee,
                fetchPriority: _,
                width: q,
                height: G,
                decoding: C,
                className: p,
                style: {
                    ...Y,
                    ...Q
                },
                sizes: Z.sizes,
                srcSet: Z.srcSet,
                src: w || Z.src
            },
            meta: {
                unoptimized: r,
                preload: d || c,
                placeholder: x,
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
            return n
        }
    });
    let o = e.r(836437)._(e.r(409781)),
        i = e.r(532450),
        n = o.default.createContext(i.imageConfigDefault)
}, 20881, (e, t, r) => {
    "use strict";
    e.i(913836), Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var o = {
        default: function() {
            return c
        },
        getImageProps: function() {
            return u
        }
    };
    for (var i in o) Object.defineProperty(r, i, {
        enumerable: !0,
        get: o[i]
    });
    let n = e.r(836437),
        l = e.r(943910),
        s = e.r(621737),
        a = n._(e.r(199274));

    function u(e) {
        let {
            props: t
        } = (0, l.getImgProps)(e, {
            defaultLoader: a.default,
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
    let c = s.Image
}, 833449, (e, t, r) => {
    t.exports = e.r(20881)
}, 67094, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let o = e.r(409781),
        i = "u" < typeof window,
        n = i ? () => {} : o.useLayoutEffect,
        l = i ? () => {} : o.useEffect;

    function s(e) {
        let {
            headManager: t,
            reduceComponentsToState: r
        } = e;

        function s() {
            if (t && t.mountedInstances) {
                let e = o.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(r(e))
            }
        }
        return i && (t?.mountedInstances?.add(e.children), s()), n(() => (t?.mountedInstances?.add(e.children), () => {
            t?.mountedInstances?.delete(e.children)
        })), n(() => (t && (t._pendingUpdate = s), () => {
            t && (t._pendingUpdate = s)
        })), l(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
            t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
        })), null
    }
}, 852120, e => {
    "use strict";
    var t = e.i(409781);
    let r = (0, t.createContext)({});
    e.s(["useUNSAFE_PortalContext", 0, function() {
        return (0, t.useContext)(r) ?? {}
    }])
}, 975950, e => {
    "use strict";
    var t = e.i(904960),
        r = e.i(776050),
        o = e.i(747922);
    let i = {
            top: "top",
            bottom: "top",
            left: "left",
            right: "left"
        },
        n = {
            top: "bottom",
            bottom: "top",
            left: "right",
            right: "left"
        },
        l = {
            top: "left",
            left: "top"
        },
        s = {
            top: "height",
            left: "width"
        },
        a = {
            width: "totalWidth",
            height: "totalHeight"
        },
        u = {};

    function c(e, r) {
        let o = 0,
            i = 0,
            n = 0,
            l = 0,
            s = 0,
            a = 0,
            u = {},
            c = (r?.scale ?? 1) > 1;
        if ("BODY" === e.tagName || "HTML" === e.tagName) {
            let t = document.documentElement;
            n = t.clientWidth, l = t.clientHeight, o = r?.width ?? n, i = r?.height ?? l, u.top = t.scrollTop || e.scrollTop, u.left = t.scrollLeft || e.scrollLeft, r && (s = r.offsetTop, a = r.offsetLeft)
        } else({
            width: o,
            height: i,
            top: s,
            left: a
        } = h(e, !1)), u.top = e.scrollTop, u.left = e.scrollLeft, n = o, l = i;
        return (0, t.isWebKit)() && ("BODY" === e.tagName || "HTML" === e.tagName) && c && (u.top = 0, u.left = 0, s = r?.pageTop ?? 0, a = r?.pageLeft ?? 0), {
            width: o,
            height: i,
            totalWidth: n,
            totalHeight: l,
            scroll: u,
            top: s,
            left: a
        }
    }

    function d(e, t, r, o, n, l, a) {
        let u = n.scroll[e] ?? 0,
            c = o[s[e]],
            d = a[e] + o.scroll[i[e]] + l,
            f = a[e] + o.scroll[i[e]] + c - l,
            p = t - u + o.scroll[i[e]] + a[e] - o[i[e]],
            m = t - u + r + o.scroll[i[e]] + a[e] - o[i[e]];
        return p < d ? d - p : m > f ? Math.max(f - m, d - p) : 0
    }

    function f(e) {
        if (u[e]) return u[e];
        let [t, r] = e.split(" "), o = i[t] || "right", n = l[o];
        i[r] || (r = "center");
        let a = s[o],
            c = s[n];
        return u[e] = {
            placement: t,
            crossPlacement: r,
            axis: o,
            crossAxis: n,
            size: a,
            crossSize: c
        }, u[e]
    }

    function p(e, t, r, i, l, s, u, c, d, f, p) {
        let {
            placement: m,
            crossPlacement: g,
            axis: h,
            crossAxis: b,
            size: y,
            crossSize: w
        } = i, v = {};
        v[b] = e[b] ?? 0, "center" === g ? v[b] += ((e[w] ?? 0) - (r[w] ?? 0)) / 2 : g !== b && (v[b] += (e[w] ?? 0) - (r[w] ?? 0)), v[b] += s;
        let E = e[b] - r[w] + d + f,
            x = e[b] + e[w] - d - f;
        if (v[b] = (0, o.clamp)(v[b], E, x), m === h) {
            let t = c ? p[y] : p[a[y]];
            v[n[h]] = Math.floor(t - e[h] + l)
        } else v[h] = Math.floor(e[h] + e[y] + l);
        return v
    }

    function m(e, t, r, o, i, l, s, a) {
        let {
            placement: u,
            axis: c,
            size: d
        } = l;
        return u === c ? Math.max(0, r[c] - (s.scroll[c] ?? 0) - (e[c] + (a ? t[c] : 0)) - (o[c] ?? 0) - o[n[c]] - i) : Math.max(0, e[d] + e[c] + (a ? t[c] : 0) - r[c] - r[d] + (s.scroll[c] ?? 0) - (o[c] ?? 0) - o[n[c]] - i)
    }

    function g(e, t) {
        let {
            top: r,
            left: o,
            width: i,
            height: n
        } = e.getBoundingClientRect();
        return t && e instanceof e.ownerDocument.defaultView.HTMLElement && (i = e.offsetWidth, n = e.offsetHeight), {
            top: r,
            left: o,
            width: i,
            height: n
        }
    }

    function h(e, t, r) {
        let {
            top: o,
            left: i,
            width: n,
            height: l
        } = r || g(e, t), {
            scrollTop: s,
            scrollLeft: a,
            clientTop: u,
            clientLeft: c
        } = document.documentElement;
        return {
            top: o + s - u,
            left: i + a - c,
            width: n,
            height: l
        }
    }

    function b(e, t, r, o) {
        let i, n = window.getComputedStyle(e);
        if ("fixed" === n.position) i = o || g(e, r);
        else {
            i = h(e, r, o);
            let n = h(t, r),
                l = window.getComputedStyle(t);
            n.top += (parseInt(l.borderTopWidth, 10) || 0) - t.scrollTop, n.left += (parseInt(l.borderLeftWidth, 10) || 0) - t.scrollLeft, i.top -= n.top, i.left -= n.left
        }
        return i.top -= parseInt(n.marginTop, 10) || 0, i.left -= parseInt(n.marginLeft, 10) || 0, i
    }

    function y(e) {
        let t = window.getComputedStyle(e);
        return "none" !== t.transform || /transform|perspective/.test(t.willChange) || "none" !== t.filter || "paint" === t.contain || "backdropFilter" in t && "none" !== t.backdropFilter || "WebkitBackdropFilter" in t && "none" !== t.WebkitBackdropFilter
    }
    e.s(["calculatePosition", 0, function(e) {
        let t, l, {
                placement: s,
                targetNode: u,
                overlayNode: w,
                scrollNode: v,
                padding: E,
                shouldFlip: x,
                boundaryElement: O,
                offset: _,
                crossOffset: C,
                maxHeight: P,
                arrowSize: S = 0,
                arrowBoundaryOffset: R = 0,
                targetRect: j
            } = e,
            z = "u" > typeof document ? window.visualViewport : null,
            L = w instanceof HTMLElement ? function(e) {
                let t = e.offsetParent;
                if (t && t === document.body && "static" === window.getComputedStyle(t).position && !y(t) && (t = document.documentElement), null == t)
                    for (t = e.parentElement; t && !y(t);) t = t.parentElement;
                return t || document.documentElement
            }(w) : document.documentElement,
            T = L === document.documentElement,
            M = window.getComputedStyle(L).position,
            I = T ? h(u, !1, j) : b(u, L, !1, j);
        if (!T) {
            let {
                marginTop: e,
                marginLeft: t
            } = window.getComputedStyle(u);
            I.top += parseInt(e, 10) || 0, I.left += parseInt(t, 10) || 0
        }
        let k = h(w, !0),
            A = {
                top: parseInt((t = window.getComputedStyle(w)).marginTop, 10) || 0,
                bottom: parseInt(t.marginBottom, 10) || 0,
                left: parseInt(t.marginLeft, 10) || 0,
                right: parseInt(t.marginRight, 10) || 0
            };
        k.width += (A.left ?? 0) + (A.right ?? 0), k.height += (A.top ?? 0) + (A.bottom ?? 0), v.scrollTop, v.scrollLeft, v.scrollWidth, v.scrollHeight;
        let N = c(O, z),
            H = c(L, z);
        if ("BODY" !== O.tagName && "HTML" !== O.tagName || T) l = ("BODY" === O.tagName || "HTML" === O.tagName) && T ? {
            top: 0,
            left: 0,
            width: 0,
            height: 0
        } : b(O, L, !1);
        else {
            let e = g(L, !1);
            l = {
                top: -(e.top - N.top),
                left: -(e.left - N.left),
                width: 0,
                height: 0
            }
        }
        return function(e, t, r, l, s, u, c, g, h, b, y, w, v, E, x, O, _) {
            var C, P, S;
            let R, j, z, L = f(e),
                {
                    size: T,
                    crossAxis: M,
                    crossSize: I,
                    placement: k,
                    crossPlacement: A
                } = L,
                N = p(t, c, r, L, b, y, h, w, E, x, g),
                H = b,
                D = m(c, h, t, l, s + b, L, g, O);
            if (u && r[T] > D) {
                let e = f(`${n[k]} ${A}`),
                    o = p(t, c, r, e, b, y, h, w, E, x, g);
                m(c, h, t, l, s + b, e, g, O) > D && (L = e, N = o, H = b)
            }
            let B = "bottom";
            "top" === L.axis ? "top" === L.placement ? B = "top" : "bottom" === L.placement && (B = "bottom") : "top" === L.crossAxis && ("top" === L.crossPlacement ? B = "bottom" : "bottom" === L.crossPlacement && (B = "top"));
            let $ = d(M, N[M], r[I], c, g, s, h);
            N[M] += $;
            let W = (C = N, P = r.height, S = B, R = (null != C.top ? C.top : g[a.height] - (C.bottom ?? 0) - P) - (g.scroll.top ?? 0), j = O ? h.top : 0, z = {
                top: Math.max(c.top + j, (_?.offsetTop ?? c.top) + j),
                bottom: Math.min(c.top + c.height + j, (_?.offsetTop ?? 0) + (_?.height ?? 0))
            }, "top" !== S ? Math.max(0, z.bottom - R - ((l.top ?? 0) + (l.bottom ?? 0) + s)) : Math.max(0, R + P - z.top - ((l.top ?? 0) + (l.bottom ?? 0) + s)));
            v && v < W && (W = v), r.height = Math.min(r.height, W), $ = d(M, (N = p(t, c, r, L, H, y, h, w, E, x, g))[M], r[I], c, g, s, h), N[M] += $;
            let F = {},
                U = t[M] - N[M] - l[i[M]],
                q = U + .5 * t[I],
                G = E / 2 + x,
                V = "left" === i[M] ? (l.left ?? 0) + (l.right ?? 0) : (l.top ?? 0) + (l.bottom ?? 0),
                X = r[I] - V - E / 2 - x,
                Y = t[M] + E / 2 - (N[M] + l[i[M]]),
                K = t[M] + t[I] - E / 2 - (N[M] + l[i[M]]),
                J = (0, o.clamp)(q, Y, K);
            F[M] = (0, o.clamp)(J, G, X), ({
                placement: k,
                crossPlacement: A
            } = L), E ? U = F[M] : "right" === A ? U += t[I] : "center" === A && (U += t[I] / 2);
            let Q = "left" === k || "top" === k ? r[T] : 0,
                Z = {
                    x: "top" === k || "bottom" === k ? U : Q,
                    y: "left" === k || "right" === k ? U : Q
                };
            return {
                position: N,
                maxHeight: W,
                arrowOffsetLeft: F.left,
                arrowOffsetTop: F.top,
                placement: k,
                triggerAnchorPoint: Z
            }
        }(s, I, k, A, E, x, N, H, l, _, C, !!M && "static" !== M, P, S, R, (0, r.nodeContains)(O, L), z)
    }, "getRect", 0, g])
}, 101933, e => {
    "use strict";
    var t = e.i(776050),
        r = e.i(409781);
    let o = new WeakMap;
    e.s(["onCloseMap", 0, o, "useCloseOnScroll", 0, function(e) {
        let {
            triggerRef: i,
            isOpen: n,
            onClose: l
        } = e;
        (0, r.useEffect)(() => {
            if (!n || null === l) return;
            let e = e => {
                let r = (0, t.getEventTarget)(e);
                if (!i.current || r instanceof Node && !(0, t.nodeContains)(r, i.current) || r instanceof HTMLInputElement || r instanceof HTMLTextAreaElement) return;
                let n = l || o.get(i.current);
                n && n()
            };
            return window.addEventListener("scroll", e, !0), () => {
                window.removeEventListener("scroll", e, !0)
            }
        }, [n, l, i])
    }])
}, 879537, e => {
    "use strict";
    var t = e.i(975950),
        r = e.i(776050),
        o = e.i(101933),
        i = e.i(185559),
        n = e.i(876728),
        l = e.i(138381),
        s = e.i(409781);
    let a = "u" > typeof document ? window.visualViewport : null;
    e.s(["useOverlayPosition", 0, function(e) {
        var u;
        let {
            direction: c
        } = (0, n.useLocale)(), {
            arrowSize: d,
            targetRef: f,
            overlayRef: p,
            arrowRef: m,
            scrollRef: g = p,
            placement: h = "bottom",
            containerPadding: b = 12,
            shouldFlip: y = !0,
            boundaryElement: w = "u" > typeof document ? document.body : null,
            offset: v = 0,
            crossOffset: E = 0,
            shouldUpdatePosition: x = !0,
            isOpen: O = !0,
            onClose: _,
            maxHeight: C,
            arrowBoundaryOffset: P = 0,
            getTargetRect: S
        } = e, [R, j] = (0, s.useState)(null), z = [x, h, p.current, f.current, m?.current, g.current, b, y, w, v, E, O, c, C, P, d], L = (0, s.useRef)(a?.scale);
        (0, s.useEffect)(() => {
            O && (L.current = a?.scale)
        }, [O]);
        let T = (0, s.useCallback)(() => {
            var e;
            if (!1 === x || !O || !p.current || !f.current || !w || a?.scale !== L.current) return;
            let o = null;
            if (g.current && (0, r.isFocusWithin)(g.current)) {
                let e = (0, r.getActiveElement)()?.getBoundingClientRect(),
                    t = g.current.getBoundingClientRect();
                (o = {
                    type: "top",
                    offset: (e?.top ?? 0) - t.top
                }).offset > t.height / 2 && (o.type = "bottom", o.offset = (e?.bottom ?? 0) - t.bottom)
            }
            let i = p.current;
            !C && p.current && (i.style.top = "0px", i.style.bottom = "", i.style.maxHeight = (window.visualViewport?.height ?? window.innerHeight) + "px");
            let n = (0, t.calculatePosition)({
                placement: (e = h, "rtl" === c ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right")),
                overlayNode: p.current,
                targetNode: f.current,
                scrollNode: g.current || p.current,
                padding: b,
                shouldFlip: y,
                boundaryElement: w,
                offset: v,
                crossOffset: E,
                maxHeight: C,
                arrowSize: d ?? (m?.current ? (0, t.getRect)(m.current, !0).width : 0),
                arrowBoundaryOffset: P,
                targetRect: S?.(f.current)
            });
            if (!n.position) return;
            i.style.top = "", i.style.bottom = "", i.style.left = "", i.style.right = "", Object.keys(n.position).forEach(e => i.style[e] = n.position[e] + "px"), i.style.maxHeight = null != n.maxHeight ? n.maxHeight + "px" : "";
            let l = (0, r.getActiveElement)();
            if (o && l && g.current) {
                let e = l.getBoundingClientRect(),
                    t = g.current.getBoundingClientRect(),
                    r = e[o.type] - t[o.type];
                g.current.scrollTop += r - o.offset
            }
            j(n)
        }, z);
        (0, i.useLayoutEffect)(T, z), u = T, (0, i.useLayoutEffect)(() => (window.addEventListener("resize", u, !1), () => {
            window.removeEventListener("resize", u, !1)
        }), [u]), (0, l.useResizeObserver)({
            ref: p,
            onResize: T
        }), (0, l.useResizeObserver)({
            ref: f,
            onResize: T
        });
        let M = (0, s.useRef)(!1);
        (0, i.useLayoutEffect)(() => {
            let e, t = () => {
                    M.current = !0, clearTimeout(e), e = setTimeout(() => {
                        M.current = !1
                    }, 500), T()
                },
                r = () => {
                    M.current && t()
                };
            return a?.addEventListener("resize", t), a?.addEventListener("scroll", r), () => {
                a?.removeEventListener("resize", t), a?.removeEventListener("scroll", r)
            }
        }, [T]);
        let I = (0, s.useCallback)(() => {
            M.current || _?.()
        }, [_, M]);
        return (0, o.useCloseOnScroll)({
            triggerRef: f,
            isOpen: O,
            onClose: _ && I
        }), {
            overlayProps: {
                style: {
                    position: R ? "absolute" : "fixed",
                    top: R ? void 0 : 0,
                    left: R ? void 0 : 0,
                    zIndex: 1e5,
                    ...R?.position,
                    maxHeight: R?.maxHeight ?? "100vh"
                }
            },
            placement: R?.placement ?? null,
            triggerAnchorPoint: R?.triggerAnchorPoint ?? null,
            arrowProps: {
                "aria-hidden": "true",
                role: "presentation",
                style: {
                    left: R?.arrowOffsetLeft,
                    top: R?.arrowOffsetTop
                }
            },
            updatePosition: T
        }
    }])
}, 138381, e => {
    "use strict";
    var t = e.i(600939),
        r = e.i(409781);
    e.s(["useResizeObserver", 0, function(e) {
        let {
            ref: o,
            box: i,
            onResize: n
        } = e, l = (0, t.useEffectEvent)(n);
        (0, r.useEffect)(() => {
            let e = o?.current;
            if (e)
                if (void 0 === window.ResizeObserver) return window.addEventListener("resize", l, !1), () => {
                    window.removeEventListener("resize", l, !1)
                };
                else {
                    let t = new window.ResizeObserver(e => {
                        e.length && l()
                    });
                    return t.observe(e, {
                        box: i
                    }), () => {
                        e && t.unobserve(e)
                    }
                }
        }, [o, i])
    }])
}, 512985, e => {
    "use strict";
    var t = e.i(803258),
        r = e.i(409781);
    e.s(["useOverlayTriggerState", 0, function(e) {
        let [o, i] = (0, t.useControlledState)(e.isOpen, e.defaultOpen || !1, e.onOpenChange), n = (0, r.useCallback)(() => {
            i(!0)
        }, [i]), l = (0, r.useCallback)(() => {
            i(!1)
        }, [i]), s = (0, r.useCallback)(() => {
            i(!o)
        }, [i, o]);
        return {
            isOpen: o,
            setOpen: i,
            open: n,
            close: l,
            toggle: s
        }
    }])
}, 803258, e => {
    "use strict";
    e.i(913836);
    var t = e.i(409781);
    let r = "u" > typeof document ? t.default.useInsertionEffect ?? t.default.useLayoutEffect : () => {};
    e.s(["useControlledState", 0, function(e, o, i) {
        let [n, l] = (0, t.useState)(e || o), s = (0, t.useRef)(n), a = (0, t.useRef)(void 0 !== e), u = void 0 !== e;
        (0, t.useEffect)(() => {
            a.current, a.current = u
        }, [u]);
        let c = u ? e : n;
        r(() => {
            s.current = c
        });
        let [, d] = (0, t.useReducer)(() => ({}), {});
        return [c, (0, t.useCallback)((e, ...t) => {
            let r = "function" == typeof e ? e(s.current) : e;
            Object.is(s.current, r) || (s.current = r, l(r), d(), i?.(r, ...t))
        }, [i])]
    }])
}]);