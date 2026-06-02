(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 201373, e => {
    "use strict";
    var t = e.i(3931);
    e.s(["useControlledState", 0, function(e, r, n) {
        let [o, i] = (0, t.useState)(e || r), l = (0, t.useRef)(void 0 !== e), s = void 0 !== e;
        (0, t.useEffect)(() => {
            l.current, l.current = s
        }, [s]);
        let u = s ? e : o,
            a = (0, t.useCallback)((e, ...t) => {
                let r = (e, ...t) => {
                    n && !Object.is(u, e) && n(e, ...t), s || (u = e)
                };
                "function" == typeof e ? i((n, ...o) => {
                    let i = e(s ? u : n, ...o);
                    return (r(i, ...t), s) ? n : i
                }) : (s || i(e), r(e, ...t))
            }, [s, u, n]);
        return [u, a]
    }])
}, 881472, (e, t, r) => {
    "use strict";

    function n({
        widthInt: e,
        heightInt: t,
        blurWidth: r,
        blurHeight: o,
        blurDataURL: i,
        objectFit: l
    }) {
        let s = r ? 40 * r : e,
            u = o ? 40 * o : t,
            a = s && u ? `viewBox='0 0 ${s} ${u}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${a}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${a?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${i}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}, 43094, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        VALID_LOADERS: function() {
            return i
        },
        imageConfigDefault: function() {
            return l
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
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
}, 800218, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function() {
            return a
        }
    }), e.r(692846);
    let n = e.r(705027),
        o = e.r(881472),
        i = e.r(43094),
        l = ["-moz-initial", "fill", "none", "scale-down", void 0];

    function s(e) {
        return void 0 !== e.default
    }

    function u(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
    }

    function a({
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
        fill: v = !1,
        style: y,
        overrideSrc: b,
        onLoad: E,
        onLoadingComplete: w,
        placeholder: _ = "empty",
        blurDataURL: N,
        fetchPriority: x,
        decoding: k = "async",
        layout: S,
        objectFit: T,
        objectPosition: R,
        lazyBoundary: C,
        lazyRoot: O,
        ...P
    }, j) {
        var I;
        let L, M, A, {
                imgConf: D,
                showAltText: F,
                blurComplete: $,
                defaultLoader: z
            } = j,
            W = D || i.imageConfigDefault;
        if ("allSizes" in W) L = W;
        else {
            let e = [...W.deviceSizes, ...W.imageSizes].sort((e, t) => e - t),
                t = W.deviceSizes.sort((e, t) => e - t),
                r = W.qualities?.sort((e, t) => e - t);
            L = {
                ...W,
                allSizes: e,
                deviceSizes: t,
                qualities: r
            }
        }
        if (void 0 === z) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: !1,
            configurable: !0
        });
        let H = P.loader || z;
        delete P.loader, delete P.srcSet;
        let B = "__next_img_default" in H;
        if (B) {
            if ("custom" === L.loader) throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: !1,
                configurable: !0
            })
        } else {
            let e = H;
            H = t => {
                let {
                    config: r,
                    ...n
                } = t;
                return e(n)
            }
        }
        if (S) {
            "fill" === S && (v = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            } [S];
            e && (y = {
                ...y,
                ...e
            });
            let r = {
                responsive: "100vw",
                fill: "100vw"
            } [S];
            r && !t && (t = r)
        }
        let U = "",
            q = u(m),
            K = u(g);
        if ((I = e) && "object" == typeof I && (s(I) || void 0 !== I.src)) {
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
            if (M = t.blurWidth, A = t.blurHeight, N = N || t.blurDataURL, U = t.src, !v)
                if (q || K) {
                    if (q && !K) {
                        let e = q / t.width;
                        K = Math.round(t.height * e)
                    } else if (!q && K) {
                        let e = K / t.height;
                        q = Math.round(t.width * e)
                    }
                } else q = t.width, K = t.height
        }
        let G = !c && !d && ("lazy" === f || void 0 === f);
        (!(e = "string" == typeof e ? e : U) || e.startsWith("data:") || e.startsWith("blob:")) && (r = !0, G = !1), L.unoptimized && (r = !0), B && !L.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0);
        let V = u(h),
            X = Object.assign(v ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: T,
                objectPosition: R
            } : {}, F ? {} : {
                color: "transparent"
            }, y),
            Y = $ || "empty" === _ ? null : "blur" === _ ? `url("data:image/svg+xml;charset=utf-8,${(0,o.getImageBlurSvg)({widthInt:q,heightInt:K,blurWidth:M,blurHeight:A,blurDataURL:N||"",objectFit:X.objectFit})}")` : `url("${_}")`,
            J = l.includes(X.objectFit) ? "fill" === X.objectFit ? "100% 100%" : "cover" : X.objectFit,
            Q = Y ? {
                backgroundSize: J,
                backgroundPosition: X.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: Y
            } : {},
            Z = function({
                config: e,
                src: t,
                unoptimized: r,
                width: o,
                quality: i,
                sizes: l,
                loader: s
            }) {
                if (r) {
                    if (t.startsWith("/") && !t.startsWith("//")) {
                        let e = (0, n.getDeploymentId)();
                        if (e) {
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
                    widths: u,
                    kind: a
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
                }(e, o, l), c = u.length - 1;
                return {
                    sizes: l || "w" !== a ? l : "100vw",
                    srcSet: u.map((r, n) => `${s({config:e,src:t,quality:i,width:r})} ${"w"===a?r:n+1}${a}`).join(", "),
                    src: s({
                        config: e,
                        src: t,
                        quality: i,
                        width: u[c]
                    })
                }
            }({
                config: L,
                src: e,
                unoptimized: r,
                width: q,
                quality: V,
                sizes: t,
                loader: H
            }),
            ee = G ? "lazy" : f;
        return {
            props: {
                ...P,
                loading: ee,
                fetchPriority: x,
                width: q,
                height: K,
                decoding: k,
                className: p,
                style: {
                    ...X,
                    ...Q
                },
                sizes: Z.sizes,
                srcSet: Z.srcSet,
                src: b || Z.src
            },
            meta: {
                unoptimized: r,
                preload: d || c,
                placeholder: _,
                fill: v
            }
        }
    }
}, 297036, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let n = e.r(3931),
        o = "u" < typeof window,
        i = o ? () => {} : n.useLayoutEffect,
        l = o ? () => {} : n.useEffect;

    function s(e) {
        let {
            headManager: t,
            reduceComponentsToState: r
        } = e;

        function s() {
            if (t && t.mountedInstances) {
                let e = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(r(e))
            }
        }
        return o && (t?.mountedInstances?.add(e.children), s()), i(() => (t?.mountedInstances?.add(e.children), () => {
            t?.mountedInstances?.delete(e.children)
        })), i(() => (t && (t._pendingUpdate = s), () => {
            t && (t._pendingUpdate = s)
        })), l(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
            t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
        })), null
    }
}, 489781, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
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
    let i = e.r(481258),
        l = e.r(744066),
        s = e.r(500783),
        u = l._(e.r(3931)),
        a = i._(e.r(297036)),
        c = e.r(398481);

    function d() {
        return [(0, s.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0, s.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }

    function f(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === u.default.Fragment ? e.concat(u.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    e.r(692846);
    let p = ["name", "httpEquiv", "charSet", "itemProp"];

    function h(e) {
        let t, r, n, o;
        return e.reduce(f, []).reverse().concat(d().reverse()).filter((t = new Set, r = new Set, n = new Set, o = {}, e => {
            let i = !0,
                l = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                l = !0;
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
                                ("name" !== r || !l) && n.has(t) ? i = !1 : (n.add(t), o[r] = n)
                            }
                    }
            }
            return i
        })).reverse().map((e, t) => {
            let r = e.key || t;
            return u.default.cloneElement(e, {
                key: r
            })
        })
    }
    let m = function({
        children: e
    }) {
        let t = (0, u.useContext)(c.HeadManagerContext);
        return (0, s.jsx)(a.default, {
            reduceComponentsToState: h,
            headManager: t,
            children: e
        })
    };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 466294, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let n = e.r(481258)._(e.r(3931)),
        o = e.r(43094),
        i = n.default.createContext(o.imageConfigDefault)
}, 501285, (e, t, r) => {
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
}, 82161, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let n = e.r(501285),
        o = e.r(705027);

    function i({
        config: e,
        src: t,
        width: r,
        quality: l
    }) {
        let s = (0, o.getDeploymentId)();
        if (t.startsWith("/") && !t.startsWith("//")) {
            let e = t.indexOf("?");
            if (-1 !== e) {
                let r = new URLSearchParams(t.slice(e + 1)),
                    n = r.get("dpl");
                if (n) {
                    s = n, r.delete("dpl");
                    let o = r.toString();
                    t = t.slice(0, e) + (o ? "?" + o : "")
                }
            }
        }
        if (t.startsWith("/") && t.includes("?") && e.localPatterns?.length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search) throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: !1,
            configurable: !0
        });
        let u = (0, n.findClosestQuality)(l, e);
        return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${u}${t.startsWith("/")&&s?`&dpl=${s}`:""}`
    }
    i.__next_img_default = !0;
    let l = i
}, 127829, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function() {
            return E
        }
    });
    let n = e.r(481258),
        o = e.r(744066),
        i = e.r(500783),
        l = o._(e.r(3931)),
        s = n._(e.r(973914)),
        u = n._(e.r(489781)),
        a = e.r(800218),
        c = e.r(43094),
        d = e.r(466294);
    e.r(692846);
    let f = e.r(634629),
        p = n._(e.r(82161)),
        h = e.r(169085),
        m = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            qualities: [75],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };

    function g(e, t, r, n, o, i, l) {
        let s = e?.src;
        e && e["data-loaded-src"] !== s && (e["data-loaded-src"] = s, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
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

    function v(e) {
        return l.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let y = (0, l.forwardRef)(({
        src: e,
        srcSet: t,
        sizes: r,
        height: n,
        width: o,
        decoding: s,
        className: u,
        style: a,
        fetchPriority: c,
        placeholder: d,
        loading: f,
        unoptimized: p,
        fill: m,
        onLoadRef: y,
        onLoadingCompleteRef: b,
        setBlurComplete: E,
        setShowAltText: w,
        sizesInput: _,
        onLoad: N,
        onError: x,
        ...k
    }, S) => {
        let T = (0, l.useCallback)(e => {
                e && (x && (e.src = e.src), e.complete && g(e, d, y, b, E, p, _))
            }, [e, d, y, b, E, x, p, _]),
            R = (0, h.useMergedRef)(S, T);
        return (0, i.jsx)("img", {
            ...k,
            ...v(c),
            loading: f,
            width: o,
            height: n,
            decoding: s,
            "data-nimg": m ? "fill" : "1",
            className: u,
            style: a,
            sizes: r,
            srcSet: t,
            src: e,
            ref: R,
            onLoad: e => {
                g(e.currentTarget, d, y, b, E, p, _)
            },
            onError: e => {
                w(!0), "empty" !== d && E(!0), x && x(e)
            }
        })
    });

    function b({
        isAppRouter: e,
        imgAttributes: t
    }) {
        let r = {
            as: "image",
            imageSrcSet: t.srcSet,
            imageSizes: t.sizes,
            crossOrigin: t.crossOrigin,
            referrerPolicy: t.referrerPolicy,
            ...v(t.fetchPriority)
        };
        return e && s.default.preload ? (s.default.preload(t.src, r), null) : (0, i.jsx)(u.default, {
            children: (0, i.jsx)("link", {
                rel: "preload",
                href: t.srcSet ? void 0 : t.src,
                ...r
            }, "__nimg-" + t.src + t.srcSet + t.sizes)
        })
    }
    let E = (0, l.forwardRef)((e, t) => {
        let r = (0, l.useContext)(f.RouterContext),
            n = (0, l.useContext)(d.ImageConfigContext),
            o = (0, l.useMemo)(() => {
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
                onLoad: s,
                onLoadingComplete: u
            } = e,
            h = (0, l.useRef)(s);
        (0, l.useEffect)(() => {
            h.current = s
        }, [s]);
        let g = (0, l.useRef)(u);
        (0, l.useEffect)(() => {
            g.current = u
        }, [u]);
        let [v, E] = (0, l.useState)(!1), [w, _] = (0, l.useState)(!1), {
            props: N,
            meta: x
        } = (0, a.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: o,
            blurComplete: v,
            showAltText: w
        });
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(y, {
                ...N,
                unoptimized: x.unoptimized,
                placeholder: x.placeholder,
                fill: x.fill,
                onLoadRef: h,
                onLoadingCompleteRef: g,
                setBlurComplete: E,
                setShowAltText: _,
                sizesInput: e.sizes,
                ref: t
            }), x.preload ? (0, i.jsx)(b, {
                isAppRouter: !r,
                imgAttributes: N
            }) : null]
        })
    });
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 315707, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return c
        },
        getImageProps: function() {
            return a
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let i = e.r(481258),
        l = e.r(800218),
        s = e.r(127829),
        u = i._(e.r(82161));

    function a(e) {
        let {
            props: t
        } = (0, l.getImgProps)(e, {
            defaultLoader: u.default,
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
}, 655105, (e, t, r) => {
    t.exports = e.r(315707)
}, 459236, e => {
    "use strict";
    var t = e.i(3931),
        r = e.i(201373);
    e.s(["useOverlayTriggerState", 0, function(e) {
        let [n, o] = (0, r.useControlledState)(e.isOpen, e.defaultOpen || !1, e.onOpenChange), i = (0, t.useCallback)(() => {
            o(!0)
        }, [o]), l = (0, t.useCallback)(() => {
            o(!1)
        }, [o]), s = (0, t.useCallback)(() => {
            o(!n)
        }, [o, n]);
        return {
            isOpen: n,
            setOpen: o,
            open: i,
            close: l,
            toggle: s
        }
    }])
}, 722990, e => {
    "use strict";
    var t = e.i(500783);

    function r(e) {
        return "span" === e._type && "text" in e && "string" == typeof e.text && (typeof e.marks > "u" || Array.isArray(e.marks) && e.marks.every(e => "string" == typeof e))
    }

    function n(e) {
        return "string" == typeof e._type && "@" !== e._type[0] && (!("markDefs" in e) || !e.markDefs || Array.isArray(e.markDefs) && e.markDefs.every(e => "string" == typeof e._key)) && "children" in e && Array.isArray(e.children) && e.children.every(e => "object" == typeof e && "_type" in e)
    }

    function o(e) {
        return n(e) && "listItem" in e && "string" == typeof e.listItem && (typeof e.level > "u" || "number" == typeof e.level)
    }

    function i(e) {
        return "@list" === e._type
    }

    function l(e) {
        return "@span" === e._type
    }

    function s(e) {
        return "@text" === e._type
    }
    let u = ["strong", "em", "code", "underline", "strike-through"];

    function a(e, t, n) {
        if (!r(e) || !e.marks || !e.marks.length) return [];
        let o = e.marks.slice(),
            i = {};
        return o.forEach(e => {
            i[e] = 1;
            for (let o = t + 1; o < n.length; o++) {
                let t = n[o];
                if (t && r(t) && Array.isArray(t.marks) && -1 !== t.marks.indexOf(e)) i[e]++;
                else break
            }
        }), o.sort((e, t) => (function(e, t, r) {
            let n = e[t],
                o = e[r];
            if (n !== o) return o - n;
            let i = u.indexOf(t),
                l = u.indexOf(r);
            return i !== l ? i - l : t.localeCompare(r)
        })(i, e, t))
    }

    function c(e, t, r) {
        return {
            _type: "@list",
            _key: `${e._key||`${t}`}-parent`,
            mode: r,
            level: e.level || 1,
            listItem: e.listItem,
            children: [e]
        }
    }

    function d(e, t) {
        let n = t.level || 1,
            o = t.listItem || "normal",
            l = "string" == typeof t.listItem;
        if (i(e) && (e.level || 1) === n && l && (e.listItem || "normal") === o) return e;
        if (!("children" in e)) return;
        let s = e.children[e.children.length - 1];
        return s && !r(s) ? d(s, t) : void 0
    }
    var f = e.i(3931);
    let p = {
            textDecoration: "underline"
        },
        h = (e, t) => `[@portabletext/react] Unknown ${e}, specify a component for it in the \`components.${t}\` prop`,
        m = e => h(`block type "${e}"`, "types");

    function g(e) {
        console.warn(e)
    }
    let v = {
            display: "none"
        },
        y = {
            types: {},
            block: {
                normal: ({
                    children: e
                }) => (0, t.jsx)("p", {
                    children: e
                }),
                blockquote: ({
                    children: e
                }) => (0, t.jsx)("blockquote", {
                    children: e
                }),
                h1: ({
                    children: e
                }) => (0, t.jsx)("h1", {
                    children: e
                }),
                h2: ({
                    children: e
                }) => (0, t.jsx)("h2", {
                    children: e
                }),
                h3: ({
                    children: e
                }) => (0, t.jsx)("h3", {
                    children: e
                }),
                h4: ({
                    children: e
                }) => (0, t.jsx)("h4", {
                    children: e
                }),
                h5: ({
                    children: e
                }) => (0, t.jsx)("h5", {
                    children: e
                }),
                h6: ({
                    children: e
                }) => (0, t.jsx)("h6", {
                    children: e
                })
            },
            marks: {
                em: ({
                    children: e
                }) => (0, t.jsx)("em", {
                    children: e
                }),
                strong: ({
                    children: e
                }) => (0, t.jsx)("strong", {
                    children: e
                }),
                code: ({
                    children: e
                }) => (0, t.jsx)("code", {
                    children: e
                }),
                underline: ({
                    children: e
                }) => (0, t.jsx)("span", {
                    style: p,
                    children: e
                }),
                "strike-through": ({
                    children: e
                }) => (0, t.jsx)("del", {
                    children: e
                }),
                link: ({
                    children: e,
                    value: r
                }) => (0, t.jsx)("a", {
                    href: null == r ? void 0 : r.href,
                    children: e
                })
            },
            list: {
                number: ({
                    children: e
                }) => (0, t.jsx)("ol", {
                    children: e
                }),
                bullet: ({
                    children: e
                }) => (0, t.jsx)("ul", {
                    children: e
                })
            },
            listItem: ({
                children: e
            }) => (0, t.jsx)("li", {
                children: e
            }),
            hardBreak: () => (0, t.jsx)("br", {}),
            unknownType: ({
                value: e,
                isInline: r
            }) => {
                let n = m(e._type);
                return r ? (0, t.jsx)("span", {
                    style: v,
                    children: n
                }) : (0, t.jsx)("div", {
                    style: v,
                    children: n
                })
            },
            unknownMark: ({
                markType: e,
                children: r
            }) => (0, t.jsx)("span", {
                className: `unknown__pt__mark__${e}`,
                children: r
            }),
            unknownList: ({
                children: e
            }) => (0, t.jsx)("ul", {
                children: e
            }),
            unknownListItem: ({
                children: e
            }) => (0, t.jsx)("li", {
                children: e
            }),
            unknownBlockStyle: ({
                children: e
            }) => (0, t.jsx)("p", {
                children: e
            })
        };

    function b(e, t, r) {
        let n = t[r],
            o = e[r];
        return "function" == typeof n || n && "function" == typeof o ? n : n ? {
            ...o,
            ...n
        } : o
    }

    function E(e) {
        let {
            node: t,
            index: n,
            isInline: o,
            renderNode: i
        } = e, l = (function(e) {
            var t;
            let {
                children: n
            } = e, o = e.markDefs ?? [];
            if (!n || !n.length) return [];
            let i = n.map(a),
                l = {
                    _type: "@span",
                    children: [],
                    markType: "<unknown>"
                },
                s = [l];
            for (let e = 0; e < n.length; e++) {
                let l = n[e];
                if (!l) continue;
                let u = i[e] || [],
                    a = 1;
                if (s.length > 1)
                    for (; a < s.length; a++) {
                        let e = (null == (t = s[a]) ? void 0 : t.markKey) || "",
                            r = u.indexOf(e);
                        if (-1 === r) break;
                        u.splice(r, 1)
                    }
                let c = (s = s.slice(0, a))[s.length - 1];
                if (c) {
                    for (let e of u) {
                        let t = null == o ? void 0 : o.find(t => t._key === e),
                            r = t ? t._type : e,
                            n = {
                                _type: "@span",
                                _key: l._key,
                                children: [],
                                markDef: t,
                                markType: r,
                                markKey: e
                            };
                        c.children.push(n), s.push(n), c = n
                    }
                    if (r(l)) {
                        let e = l.text.split(`
`);
                        for (let t = e.length; t-- > 1;) e.splice(t, 0, `
`);
                        c.children = c.children.concat(e.map(e => ({
                            _type: "@text",
                            text: e
                        })))
                    } else c.children = c.children.concat(l)
                }
            }
            return l.children
        })(t).map((e, t) => i({
            node: e,
            isInline: !0,
            index: t,
            renderNode: i
        }));
        return {
            _key: t._key || `block-${n}`,
            children: l,
            index: n,
            isInline: o,
            node: t
        }
    }

    function w() {}
    e.s(["PortableText", 0, function({
        value: e,
        components: r,
        listNestingMode: u,
        onMissingComponent: a = g
    }) {
        let p = a || w,
            v = function(e, t) {
                let r, n = [];
                for (let s = 0; s < e.length; s++) {
                    let u = e[s];
                    if (u) {
                        var i, l;
                        if (!o(u)) {
                            n.push(u), r = void 0;
                            continue
                        }
                        if (!r) {
                            r = c(u, s, t), n.push(r);
                            continue
                        }
                        if (i = u, l = r, (i.level || 1) === l.level && i.listItem === l.listItem) {
                            r.children.push(u);
                            continue
                        }
                        if ((u.level || 1) > r.level) {
                            let e = c(u, s, t);
                            if ("html" === t) {
                                let t = r.children[r.children.length - 1],
                                    n = {
                                        ...t,
                                        children: [...t.children, e]
                                    };
                                r.children[r.children.length - 1] = n
                            } else r.children.push(e);
                            r = e;
                            continue
                        }
                        if ((u.level || 1) < r.level) {
                            let e = n[n.length - 1],
                                o = e && d(e, u);
                            if (o) {
                                (r = o).children.push(u);
                                continue
                            }
                            r = c(u, s, t), n.push(r);
                            continue
                        }
                        if (u.listItem !== r.listItem) {
                            let e = n[n.length - 1],
                                o = e && d(e, {
                                    level: u.level || 1
                                });
                            if (o && o.listItem === u.listItem) {
                                (r = o).children.push(u);
                                continue
                            }
                            r = c(u, s, t), n.push(r);
                            continue
                        }
                        console.warn("Unknown state encountered for block", u), n.push(u)
                    }
                }
                return n
            }(Array.isArray(e) ? e : [e], u || "html"),
            _ = (0, f.useMemo)(() => r ? function(e, t) {
                let {
                    block: r,
                    list: n,
                    listItem: o,
                    marks: i,
                    types: l,
                    ...s
                } = t;
                return {
                    ...e,
                    block: b(e, t, "block"),
                    list: b(e, t, "list"),
                    listItem: b(e, t, "listItem"),
                    marks: b(e, t, "marks"),
                    types: b(e, t, "types"),
                    ...s
                }
            }(y, r) : y, [r]),
            N = (0, f.useMemo)(() => {
                var e, r;
                return e = _, r = p,
                    function u(a) {
                        var c, d, f, p, g, v, y, b;
                        let w, _, {
                                node: N,
                                index: x,
                                isInline: k
                            } = a,
                            S = N._key || `node-${x}`;
                        return i(N) ? function(n, o, i) {
                            let l = n.children.map((e, t) => u({
                                    node: e._key ? e : {
                                        ...e,
                                        _key: `li-${o}-${t}`
                                    },
                                    index: t,
                                    isInline: !1
                                })),
                                s = e.list,
                                a = ("function" == typeof s ? s : s[n.listItem]) || e.unknownList;
                            if (a === e.unknownList) {
                                let e = n.listItem || "bullet";
                                r(h(`list style "${e}"`, "list"), {
                                    nodeType: "listStyle",
                                    type: e
                                })
                            }
                            return (0, t.jsx)(a, {
                                value: n,
                                index: o,
                                isInline: !1,
                                renderNode: u,
                                children: l
                            }, i)
                        }(N, x, S) : o(N) ? function(n, o, i) {
                            let l = E({
                                    node: n,
                                    index: o,
                                    isInline: !1,
                                    renderNode: u
                                }),
                                s = e.listItem,
                                a = ("function" == typeof s ? s : s[n.listItem]) || e.unknownListItem;
                            if (a === e.unknownListItem) {
                                let e = n.listItem || "bullet";
                                r(h(`list item style "${e}"`, "listItem"), {
                                    type: e,
                                    nodeType: "listItemStyle"
                                })
                            }
                            let c = l.children;
                            if (n.style && "normal" !== n.style) {
                                let {
                                    listItem: e,
                                    ...t
                                } = n;
                                c = u({
                                    node: t,
                                    index: o,
                                    isInline: !1
                                })
                            }
                            return (0, t.jsx)(a, {
                                value: n,
                                index: o,
                                isInline: !1,
                                renderNode: u,
                                children: c
                            }, i)
                        }(N, x, S) : l(N) ? function(n, o) {
                            let {
                                markDef: i,
                                markType: a,
                                markKey: c
                            } = n, d = e.marks[a] || e.unknownMark, f = n.children.map((e, t) => u({
                                node: e,
                                index: t,
                                isInline: !0
                            }));
                            return d === e.unknownMark && r(h(`mark type "${a}"`, "marks"), {
                                nodeType: "mark",
                                type: a
                            }), (0, t.jsx)(d, {
                                text: function e(t) {
                                    let r = "";
                                    return t.children.forEach(t => {
                                        s(t) ? r += t.text : l(t) && (r += e(t))
                                    }), r
                                }(n),
                                value: i,
                                markType: a,
                                markKey: c,
                                renderNode: u,
                                children: f
                            }, o)
                        }(N, S) : N._type in e.types ? (c = N, d = x, f = S, p = k, (w = e.types[c._type]) ? (0, t.jsx)(w, {
                            value: c,
                            isInline: p,
                            index: d,
                            renderNode: u
                        }, f) : null) : n(N) ? function(n, o, i, l) {
                            let {
                                _key: s,
                                ...a
                            } = E({
                                node: n,
                                index: o,
                                isInline: l,
                                renderNode: u
                            }), c = a.node.style || "normal", d = ("function" == typeof e.block ? e.block : e.block[c]) || e.unknownBlockStyle;
                            return d === e.unknownBlockStyle && r(h(`block style "${c}"`, "block"), {
                                nodeType: "blockStyle",
                                type: c
                            }), (0, t.jsx)(d, {
                                ...a,
                                value: a.node,
                                renderNode: u
                            }, i)
                        }(N, x, S, k) : s(N) ? function(r, n) {
                            if (r.text === `
`) {
                                let r = e.hardBreak;
                                return r ? (0, t.jsx)(r, {}, n) : `
`
                            }
                            return r.text
                        }(N, S) : (g = N, v = x, y = S, b = k, r(m(g._type), {
                            nodeType: "block",
                            type: g._type
                        }), _ = e.unknownType, (0, t.jsx)(_, {
                            value: g,
                            isInline: b,
                            index: v,
                            renderNode: u
                        }, y))
                    }
            }, [_, p]),
            x = v.map((e, t) => N({
                node: e,
                index: t,
                isInline: !1,
                renderNode: N
            }));
        return (0, t.jsx)(t.Fragment, {
            children: x
        })
    }], 722990)
}, 102893, e => {
    "use strict";
    var t = e.i(901317),
        r = e.i(237483),
        n = e.i(3873),
        o = e.i(465994),
        i = e.i(681115),
        l = e.i(39908);
    class s {
        get currentNode() {
            return this._currentNode
        }
        set currentNode(e) {
            if (!(0, n.nodeContains)(this.root, e)) throw Error("Cannot set currentNode to a node that is not contained by the root node.");
            let t = [],
                r = e,
                o = e;
            for (this._currentNode = e; r && r !== this.root;)
                if (r.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                    let e = r,
                        n = this._doc.createTreeWalker(e, this.whatToShow, {
                            acceptNode: this._acceptNode
                        });
                    t.push(n), n.currentNode = o, this._currentSetFor.add(n), r = o = e.host
                } else r = r.parentNode;
            let i = this._doc.createTreeWalker(this.root, this.whatToShow, {
                acceptNode: this._acceptNode
            });
            t.push(i), i.currentNode = o, this._currentSetFor.add(i), this._walkerStack = t
        }
        get doc() {
            return this._doc
        }
        firstChild() {
            let e = this.currentNode,
                t = this.nextNode();
            return (0, n.nodeContains)(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null)
        }
        lastChild() {
            let e = this._walkerStack[0].lastChild();
            return e && (this.currentNode = e), e
        }
        nextNode() {
            let e = this._walkerStack[0].nextNode();
            if (e) {
                if (e.shadowRoot) {
                    var t;
                    let r;
                    if ("function" == typeof this.filter ? r = this.filter(e) : (null == (t = this.filter) ? void 0 : t.acceptNode) && (r = this.filter.acceptNode(e)), r === NodeFilter.FILTER_ACCEPT) return this.currentNode = e, e;
                    let n = this.nextNode();
                    return n && (this.currentNode = n), n
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
                    var r;
                    let e;
                    if ("function" == typeof this.filter ? e = this.filter(t) : (null == (r = this.filter) ? void 0 : r.acceptNode) && (e = this.filter.acceptNode(t)), e === NodeFilter.FILTER_ACCEPT) return t && (this.currentNode = t), t;
                    let n = this.lastChild();
                    return n && (this.currentNode = n), n
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
        constructor(e, t, r, n) {
            this._walkerStack = [], this._currentSetFor = new Set, this._acceptNode = e => {
                if (e.nodeType === Node.ELEMENT_NODE) {
                    var t;
                    let r = e.shadowRoot;
                    if (r) {
                        let e = this._doc.createTreeWalker(r, this.whatToShow, {
                            acceptNode: this._acceptNode
                        });
                        return this._walkerStack.unshift(e), NodeFilter.FILTER_ACCEPT
                    }
                    if ("function" == typeof this.filter) return this.filter(e);
                    if (null == (t = this.filter) ? void 0 : t.acceptNode) return this.filter.acceptNode(e);
                    if (null === this.filter) return NodeFilter.FILTER_ACCEPT
                }
                return NodeFilter.FILTER_SKIP
            }, this._doc = e, this.root = t, this.filter = null != n ? n : null, this.whatToShow = null != r ? r : NodeFilter.SHOW_ALL, this._currentNode = t, this._walkerStack.unshift(e.createTreeWalker(t, r, this._acceptNode));
            const o = t.shadowRoot;
            if (o) {
                const e = this._doc.createTreeWalker(o, this.whatToShow, {
                    acceptNode: this._acceptNode
                });
                this._walkerStack.unshift(e)
            }
        }
    }
    var u = e.i(427651),
        a = e.i(743456),
        c = e.i(3931);
    let d = c.default.createContext(null),
        f = "react-aria-focus-scope-restore",
        p = null;

    function h(e) {
        return e[0].parentElement
    }

    function m(e) {
        let t = T.getTreeNode(p);
        for (; t && t.scopeRef !== e;) {
            if (t.contain) return !1;
            t = t.parent
        }
        return !0
    }

    function g(e, t) {
        return !!e && !!t && t.some(t => t.contains(e))
    }

    function v(e, t = null) {
        if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
        for (let {
                scopeRef: r
            }
            of T.traverse(T.getTreeNode(t)))
            if (r && g(e, r.current)) return !0;
        return !1
    }

    function y(e, t) {
        var r;
        let n = null == (r = T.getTreeNode(t)) ? void 0 : r.parent;
        for (; n;) {
            if (n.scopeRef === e) return !0;
            n = n.parent
        }
        return !1
    }

    function b(e, t = !1) {
        if (null == e || t) {
            if (null != e) try {
                e.focus()
            } catch {}
        } else try {
            (0, a.focusSafely)(e)
        } catch {}
    }

    function E(e, t = !0) {
        let r = e[0].previousElementSibling,
            n = h(e),
            o = x(n, {
                tabbable: t
            }, e);
        o.currentNode = r;
        let i = o.nextNode();
        return t && !i && ((o = x(n = h(e), {
            tabbable: !1
        }, e)).currentNode = r, i = o.nextNode()), i
    }

    function w(e, t = !0) {
        b(E(e, t))
    }

    function _(e) {
        let t = T.getTreeNode(p);
        for (; t && t.scopeRef !== e;) {
            if (t.nodeToRestore) return !1;
            t = t.parent
        }
        return (null == t ? void 0 : t.scopeRef) === e
    }

    function N(e) {
        e.dispatchEvent(new CustomEvent(f, {
            bubbles: !0,
            cancelable: !0
        })) && b(e)
    }

    function x(e, r, n) {
        var o, u, a;
        let c = (null == r ? void 0 : r.tabbable) ? i.isTabbable : i.isFocusable,
            d = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
            f = (0, t.getOwnerDocument)(d),
            p = (o = e || f, u = NodeFilter.SHOW_ELEMENT, a = {
                acceptNode(e) {
                    var o;
                    return (null == r || null == (o = r.from) ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : c(e) && function e(r, n) {
                        return "#comment" !== r.nodeName && function(e) {
                            let r = (0, t.getOwnerWindow)(e);
                            if (!(e instanceof r.HTMLElement) && !(e instanceof r.SVGElement)) return !1;
                            let {
                                display: n,
                                visibility: o
                            } = e.style, i = "none" !== n && "hidden" !== o && "collapse" !== o;
                            if (i) {
                                let {
                                    getComputedStyle: t
                                } = e.ownerDocument.defaultView, {
                                    display: r,
                                    visibility: n
                                } = t(e);
                                i = "none" !== r && "hidden" !== n && "collapse" !== n
                            }
                            return i
                        }(r) && !r.hasAttribute("hidden") && !r.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== r.nodeName || !n || "SUMMARY" === n.nodeName || r.hasAttribute("open")) && (!r.parentElement || e(r.parentElement, r))
                    }(e) && (!n || g(e, n)) && (!(null == r ? void 0 : r.accept) || r.accept(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                }
            }, (0, l.shadowDOM)() ? new s(f, o, u, a) : f.createTreeWalker(o, u, a));
        return (null == r ? void 0 : r.from) && (p.currentNode = r.from), p
    }
    class k {
        get size() {
            return this.fastMap.size
        }
        getTreeNode(e) {
            return this.fastMap.get(e)
        }
        addTreeNode(e, t, r) {
            let n = this.fastMap.get(null != t ? t : null);
            if (!n) return;
            let o = new S({
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
            for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && g(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
            let n = t.children;
            r && (r.removeChild(t), n.size > 0 && n.forEach(e => r && r.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
            if (null != e.scopeRef && (yield e), e.children.size > 0)
                for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
            var e, t;
            let r = new k;
            for (let n of this.traverse()) r.addTreeNode(n.scopeRef, null != (t = null == (e = n.parent) ? void 0 : e.scopeRef) ? t : null, n.nodeToRestore);
            return r
        }
        constructor() {
            this.fastMap = new Map, this.root = new S({
                scopeRef: null
            }), this.fastMap.set(null, this.root)
        }
    }
    class S {
        addChild(e) {
            this.children.add(e), e.parent = this
        }
        removeChild(e) {
            this.children.delete(e), e.parent = void 0
        }
        constructor(e) {
            this.children = new Set, this.contain = !1, this.scopeRef = e.scopeRef
        }
    }
    let T = new k;
    e.s(["FocusScope", 0, function(e) {
        var i, l, s, a, k, R, C, O, P, j;
        let I, L, M, A, {
                children: D,
                contain: F,
                restoreFocus: $,
                autoFocus: z
            } = e,
            W = (0, c.useRef)(null),
            H = (0, c.useRef)(null),
            B = (0, c.useRef)([]),
            {
                parentNode: U
            } = (0, c.useContext)(d) || {},
            q = (0, c.useMemo)(() => new S({
                scopeRef: B
            }), [B]);
        (0, r.useLayoutEffect)(() => {
            let e = U || T.root;
            if (T.getTreeNode(e.scopeRef) && p && !y(p, e.scopeRef)) {
                let t = T.getTreeNode(p);
                t && (e = t)
            }
            e.addChild(q), T.addNode(q)
        }, [q, U]), (0, r.useLayoutEffect)(() => {
            let e = T.getTreeNode(B);
            e && (e.contain = !!F)
        }, [F]), (0, r.useLayoutEffect)(() => {
            var e;
            let t = null == (e = W.current) ? void 0 : e.nextSibling,
                r = [],
                n = e => e.stopPropagation();
            for (; t && t !== H.current;) r.push(t), t.addEventListener(f, n), t = t.nextSibling;
            return B.current = r, () => {
                for (let e of r) e.removeEventListener(f, n)
            }
        }, [D]), i = B, l = $, s = F, (0, r.useLayoutEffect)(() => {
            if (l || s) return;
            let e = i.current,
                r = (0, t.getOwnerDocument)(e ? e[0] : void 0),
                o = e => {
                    let t = (0, n.getEventTarget)(e);
                    g(t, i.current) ? p = i : v(t) || (p = null)
                };
            return r.addEventListener("focusin", o, !1), null == e || e.forEach(e => e.addEventListener("focusin", o, !1)), () => {
                r.removeEventListener("focusin", o, !1), null == e || e.forEach(e => e.removeEventListener("focusin", o, !1))
            }
        }, [i, l, s]), a = B, k = F, I = (0, c.useRef)(void 0), L = (0, c.useRef)(void 0), (0, r.useLayoutEffect)(() => {
            let e = a.current;
            if (!k) {
                L.current && (cancelAnimationFrame(L.current), L.current = void 0);
                return
            }
            let r = (0, t.getOwnerDocument)(e ? e[0] : void 0),
                i = e => {
                    if ("Tab" !== e.key || e.altKey || e.ctrlKey || e.metaKey || !m(a) || e.isComposing) return;
                    let t = (0, n.getActiveElement)(r),
                        o = a.current;
                    if (!o || !g(t, o)) return;
                    let i = x(h(o), {
                        tabbable: !0
                    }, o);
                    if (!t) return;
                    i.currentNode = t;
                    let l = e.shiftKey ? i.previousNode() : i.nextNode();
                    l || (i.currentNode = e.shiftKey ? o[o.length - 1].nextElementSibling : o[0].previousElementSibling, l = e.shiftKey ? i.previousNode() : i.nextNode()), e.preventDefault(), l && b(l, !0)
                },
                l = e => {
                    (!p || y(p, a)) && g((0, n.getEventTarget)(e), a.current) ? (p = a, I.current = (0, n.getEventTarget)(e)) : m(a) && !v((0, n.getEventTarget)(e), a) ? I.current ? I.current.focus() : p && p.current && w(p.current) : m(a) && (I.current = (0, n.getEventTarget)(e))
                },
                s = e => {
                    L.current && cancelAnimationFrame(L.current), L.current = requestAnimationFrame(() => {
                        let t = (0, u.getInteractionModality)(),
                            i = ("virtual" === t || null === t) && (0, o.isAndroid)() && (0, o.isChrome)(),
                            l = (0, n.getActiveElement)(r);
                        if (!i && l && m(a) && !v(l, a)) {
                            p = a;
                            let t = (0, n.getEventTarget)(e);
                            if (t && t.isConnected) {
                                var s;
                                I.current = t, null == (s = I.current) || s.focus()
                            } else p.current && w(p.current)
                        }
                    })
                };
            return r.addEventListener("keydown", i, !1), r.addEventListener("focusin", l, !1), null == e || e.forEach(e => e.addEventListener("focusin", l, !1)), null == e || e.forEach(e => e.addEventListener("focusout", s, !1)), () => {
                r.removeEventListener("keydown", i, !1), r.removeEventListener("focusin", l, !1), null == e || e.forEach(e => e.removeEventListener("focusin", l, !1)), null == e || e.forEach(e => e.removeEventListener("focusout", s, !1))
            }
        }, [a, k]), (0, r.useLayoutEffect)(() => () => {
            L.current && cancelAnimationFrame(L.current)
        }, [L]), R = B, C = $, O = F, M = (0, c.useRef)("u" > typeof document ? (0, n.getActiveElement)((0, t.getOwnerDocument)(R.current ? R.current[0] : void 0)) : null), (0, r.useLayoutEffect)(() => {
            let e = R.current,
                r = (0, t.getOwnerDocument)(e ? e[0] : void 0);
            if (!C || O) return;
            let o = () => {
                (!p || y(p, R)) && g((0, n.getActiveElement)(r), R.current) && (p = R)
            };
            return r.addEventListener("focusin", o, !1), null == e || e.forEach(e => e.addEventListener("focusin", o, !1)), () => {
                r.removeEventListener("focusin", o, !1), null == e || e.forEach(e => e.removeEventListener("focusin", o, !1))
            }
        }, [R, O]), (0, r.useLayoutEffect)(() => {
            let e = (0, t.getOwnerDocument)(R.current ? R.current[0] : void 0);
            if (!C) return;
            let r = t => {
                if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !m(R) || t.isComposing) return;
                let r = e.activeElement;
                if (!v(r, R) || !_(R)) return;
                let n = T.getTreeNode(R);
                if (!n) return;
                let o = n.nodeToRestore,
                    i = x(e.body, {
                        tabbable: !0
                    });
                i.currentNode = r;
                let l = t.shiftKey ? i.previousNode() : i.nextNode();
                if (o && o.isConnected && o !== e.body || (o = void 0, n.nodeToRestore = void 0), (!l || !v(l, R)) && o) {
                    i.currentNode = o;
                    do l = t.shiftKey ? i.previousNode() : i.nextNode(); while (v(l, R))(t.preventDefault(), t.stopPropagation(), l) ? b(l, !0): v(o) ? b(o, !0) : r.blur()
                }
            };
            return O || e.addEventListener("keydown", r, !0), () => {
                O || e.removeEventListener("keydown", r, !0)
            }
        }, [R, C, O]), (0, r.useLayoutEffect)(() => {
            var e;
            let r = (0, t.getOwnerDocument)(R.current ? R.current[0] : void 0);
            if (!C) return;
            let o = T.getTreeNode(R);
            if (o) return o.nodeToRestore = null != (e = M.current) ? e : void 0, () => {
                let e = T.getTreeNode(R);
                if (!e) return;
                let t = e.nodeToRestore,
                    o = (0, n.getActiveElement)(r);
                if (C && t && (o && v(o, R) || o === r.body && _(R))) {
                    let e = T.clone();
                    requestAnimationFrame(() => {
                        if (r.activeElement === r.body) {
                            let t = e.getTreeNode(R);
                            for (; t;) {
                                if (t.nodeToRestore && t.nodeToRestore.isConnected) return void N(t.nodeToRestore);
                                t = t.parent
                            }
                            for (t = e.getTreeNode(R); t;) {
                                if (t.scopeRef && t.scopeRef.current && T.getTreeNode(t.scopeRef)) return void N(E(t.scopeRef.current, !0));
                                t = t.parent
                            }
                        }
                    })
                }
            }
        }, [R, C]), P = B, j = z, A = c.default.useRef(j), (0, c.useEffect)(() => {
            if (A.current) {
                p = P;
                let e = (0, t.getOwnerDocument)(P.current ? P.current[0] : void 0);
                !g((0, n.getActiveElement)(e), p.current) && P.current && w(P.current)
            }
            A.current = !1
        }, [P]), (0, c.useEffect)(() => {
            let e = (0, n.getActiveElement)((0, t.getOwnerDocument)(B.current ? B.current[0] : void 0)),
                r = null;
            if (g(e, B.current)) {
                for (let t of T.traverse()) t.scopeRef && g(e, t.scopeRef.current) && (r = t);
                r === T.getTreeNode(B) && (p = r.scopeRef)
            }
        }, [B]), (0, r.useLayoutEffect)(() => () => {
            var e, t, r;
            let n = null != (r = null == (t = T.getTreeNode(B)) || null == (e = t.parent) ? void 0 : e.scopeRef) ? r : null;
            (B === p || y(B, p)) && (!n || T.getTreeNode(n)) && (p = n), T.removeTreeNode(B)
        }, [B]);
        let K = (0, c.useMemo)(() => {
                var e;
                return e = B, {
                    focusNext(r = {}) {
                        var o;
                        let i = e.current,
                            {
                                from: l,
                                tabbable: s,
                                wrap: u,
                                accept: a
                            } = r,
                            c = l || (0, n.getActiveElement)((0, t.getOwnerDocument)(null != (o = i[0]) ? o : void 0)),
                            d = i[0].previousElementSibling,
                            f = x(h(i), {
                                tabbable: s,
                                accept: a
                            }, i);
                        f.currentNode = g(c, i) ? c : d;
                        let p = f.nextNode();
                        return !p && u && (f.currentNode = d, p = f.nextNode()), p && b(p, !0), p
                    },
                    focusPrevious(r = {}) {
                        var o;
                        let i = e.current,
                            {
                                from: l,
                                tabbable: s,
                                wrap: u,
                                accept: a
                            } = r,
                            c = l || (0, n.getActiveElement)((0, t.getOwnerDocument)(null != (o = i[0]) ? o : void 0)),
                            d = i[i.length - 1].nextElementSibling,
                            f = x(h(i), {
                                tabbable: s,
                                accept: a
                            }, i);
                        f.currentNode = g(c, i) ? c : d;
                        let p = f.previousNode();
                        return !p && u && (f.currentNode = d, p = f.previousNode()), p && b(p, !0), p
                    },
                    focusFirst(t = {}) {
                        let r = e.current,
                            {
                                tabbable: n,
                                accept: o
                            } = t,
                            i = x(h(r), {
                                tabbable: n,
                                accept: o
                            }, r);
                        i.currentNode = r[0].previousElementSibling;
                        let l = i.nextNode();
                        return l && b(l, !0), l
                    },
                    focusLast(t = {}) {
                        let r = e.current,
                            {
                                tabbable: n,
                                accept: o
                            } = t,
                            i = x(h(r), {
                                tabbable: n,
                                accept: o
                            }, r);
                        i.currentNode = r[r.length - 1].nextElementSibling;
                        let l = i.previousNode();
                        return l && b(l, !0), l
                    }
                }
            }, []),
            G = (0, c.useMemo)(() => ({
                focusManager: K,
                parentNode: q
            }), [q, K]);
        return c.default.createElement(d.Provider, {
            value: G
        }, c.default.createElement("span", {
            "data-focus-scope-start": !0,
            hidden: !0,
            ref: W
        }), D, c.default.createElement("span", {
            "data-focus-scope-end": !0,
            hidden: !0,
            ref: H
        }))
    }, "getFocusableTreeWalker", 0, x, "isElementInChildOfActiveScope", 0, function(e) {
        return v(e, p)
    }], 102893)
}, 242671, e => {
    "use strict";
    e.s(["isScrollable", 0, function(e, t) {
        if (!e) return !1;
        let r = window.getComputedStyle(e),
            n = /(auto|scroll)/.test(r.overflow + r.overflowX + r.overflowY);
        return n && t && (n = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), n
    }])
}, 430860, e => {
    "use strict";
    var t = e.i(242671);
    e.s(["getScrollParent", 0, function(e, r) {
        let n = e;
        for ((0, t.isScrollable)(n, r) && (n = n.parentElement); n && !(0, t.isScrollable)(n, r);) n = n.parentElement;
        return n || document.scrollingElement || document.documentElement
    }])
}, 282001, e => {
    "use strict";
    var t = e.i(3931);
    let r = new WeakMap;
    e.s(["onCloseMap", 0, r, "useCloseOnScroll", 0, function(e) {
        let {
            triggerRef: n,
            isOpen: o,
            onClose: i
        } = e;
        (0, t.useEffect)(() => {
            if (!o || null === i) return;
            let e = e => {
                let t = e.target;
                if (!n.current || t instanceof Node && !t.contains(n.current) || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
                let o = i || r.get(n.current);
                o && o()
            };
            return window.addEventListener("scroll", e, !0), () => {
                window.removeEventListener("scroll", e, !0)
            }
        }, [o, i, n])
    }])
}, 669877, 984782, 155266, e => {
    "use strict";
    let t, r = new WeakMap,
        n = [];
    e.s(["ariaHideOutside", 0, function(e, t = document.body) {
        let o = new Set(e),
            i = new Set,
            l = e => {
                for (let t of e.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]")) o.add(t);
                let t = e => {
                        if (o.has(e) || e.parentElement && i.has(e.parentElement) && "row" !== e.parentElement.getAttribute("role")) return NodeFilter.FILTER_REJECT;
                        for (let t of o)
                            if (e.contains(t)) return NodeFilter.FILTER_SKIP;
                        return NodeFilter.FILTER_ACCEPT
                    },
                    r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: t
                    }),
                    n = t(e);
                if (n === NodeFilter.FILTER_ACCEPT && s(e), n !== NodeFilter.FILTER_REJECT) {
                    let e = r.nextNode();
                    for (; null != e;) s(e), e = r.nextNode()
                }
            },
            s = e => {
                var t;
                let n = null != (t = r.get(e)) ? t : 0;
                ("true" !== e.getAttribute("aria-hidden") || 0 !== n) && (0 === n && e.setAttribute("aria-hidden", "true"), i.add(e), r.set(e, n + 1))
            };
        n.length && n[n.length - 1].disconnect(), l(t);
        let u = new MutationObserver(e => {
            for (let t of e)
                if ("childList" === t.type && 0 !== t.addedNodes.length && ![...o, ...i].some(e => e.contains(t.target))) {
                    for (let e of t.removedNodes) e instanceof Element && (o.delete(e), i.delete(e));
                    for (let e of t.addedNodes)(e instanceof HTMLElement || e instanceof SVGElement) && ("true" === e.dataset.liveAnnouncer || "true" === e.dataset.reactAriaTopLayer) ? o.add(e) : e instanceof Element && l(e)
                }
        });
        u.observe(t, {
            childList: !0,
            subtree: !0
        });
        let a = {
            visibleNodes: o,
            hiddenNodes: i,
            observe() {
                u.observe(t, {
                    childList: !0,
                    subtree: !0
                })
            },
            disconnect() {
                u.disconnect()
            }
        };
        return n.push(a), () => {
            for (let e of (u.disconnect(), i)) {
                let t = r.get(e);
                null != t && (1 === t ? (e.removeAttribute("aria-hidden"), r.delete(e)) : r.set(e, t - 1))
            }
            a === n[n.length - 1] ? (n.pop(), n.length && n[n.length - 1].observe()) : n.splice(n.indexOf(a), 1)
        }
    }, "keepVisible", 0, function(e) {
        let t = n[n.length - 1];
        if (t && !t.visibleNodes.has(e)) return t.visibleNodes.add(e), () => {
            t.visibleNodes.delete(e)
        }
    }], 669877);
    var o = e.i(102893),
        i = e.i(3931);
    e.i(788727);
    var l = e.i(123714),
        s = e.i(901317);

    function u(e, t) {
        if (e.button > 0) return !1;
        if (e.target) {
            let t = e.target.ownerDocument;
            if (!t || !t.documentElement.contains(e.target) || e.target.closest("[data-react-aria-top-layer]")) return !1
        }
        return !!t.current && !e.composedPath().includes(t.current)
    }
    var a = e.i(287609);
    let c = [];
    e.s(["useOverlay", 0, function(e, t) {
        let {
            onClose: r,
            shouldCloseOnBlur: n,
            isOpen: d,
            isDismissable: f = !1,
            isKeyboardDismissDisabled: p = !1,
            shouldCloseOnInteractOutside: h
        } = e;
        (0, i.useEffect)(() => {
            if (d && !c.includes(t)) return c.push(t), () => {
                let e = c.indexOf(t);
                e >= 0 && c.splice(e, 1)
            }
        }, [d, t]);
        let m = () => {
            c[c.length - 1] === t && r && r()
        };
        ! function(e) {
            let {
                ref: t,
                onInteractOutside: r,
                isDisabled: n,
                onInteractOutsideStart: o
            } = e, a = (0, i.useRef)({
                isPointerDown: !1,
                ignoreEmulatedMouseEvents: !1
            }), c = (0, l.useEffectEvent)(e => {
                r && u(e, t) && (o && o(e), a.current.isPointerDown = !0)
            }), d = (0, l.useEffectEvent)(e => {
                r && r(e)
            });
            (0, i.useEffect)(() => {
                let e = a.current;
                if (n) return;
                let r = t.current,
                    o = (0, s.getOwnerDocument)(r);
                if ("u" > typeof PointerEvent) {
                    let r = r => {
                        e.isPointerDown && u(r, t) && d(r), e.isPointerDown = !1
                    };
                    return o.addEventListener("pointerdown", c, !0), o.addEventListener("click", r, !0), () => {
                        o.removeEventListener("pointerdown", c, !0), o.removeEventListener("click", r, !0)
                    }
                }
            }, [t, n, c, d])
        }({
            ref: t,
            onInteractOutside: f && d ? e => {
                (!h || h(e.target)) && (c[c.length - 1] === t && (e.stopPropagation(), e.preventDefault()), m())
            } : void 0,
            onInteractOutsideStart: e => {
                (!h || h(e.target)) && c[c.length - 1] === t && (e.stopPropagation(), e.preventDefault())
            }
        });
        let {
            focusWithinProps: g
        } = (0, a.useFocusWithin)({
            isDisabled: !n,
            onBlurWithin: e => {
                !(!e.relatedTarget || (0, o.isElementInChildOfActiveScope)(e.relatedTarget)) && (!h || h(e.relatedTarget)) && (null == r || r())
            }
        });
        return {
            overlayProps: {
                onKeyDown: e => {
                    "Escape" !== e.key || p || e.nativeEvent.isComposing || (e.stopPropagation(), e.preventDefault(), m())
                },
                ...g
            },
            underlayProps: {
                onPointerDown: e => {
                    e.target === e.currentTarget && e.preventDefault()
                }
            }
        }
    }], 984782);
    var d = e.i(237483),
        f = e.i(465994),
        p = e.i(575912),
        h = e.i(430860);
    let m = "u" > typeof document && window.visualViewport,
        g = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]),
        v = 0;

    function y(e, t, r) {
        let n = e.style[t];
        return e.style[t] = r, () => {
            e.style[t] = n
        }
    }

    function b(e, t, r, n) {
        return e.addEventListener(t, r, n), () => {
            e.removeEventListener(t, r, n)
        }
    }

    function E(e) {
        let t = document.scrollingElement || document.documentElement,
            r = e;
        for (; r && r !== t;) {
            let e = (0, h.getScrollParent)(r);
            if (e !== document.documentElement && e !== document.body && e !== r) {
                let t = e.getBoundingClientRect().top,
                    n = r.getBoundingClientRect().top;
                n > t + r.clientHeight && (e.scrollTop += n - t)
            }
            r = e.parentElement
        }
    }
    e.s(["usePreventScroll", 0, function(e = {}) {
        let {
            isDisabled: r
        } = e;
        (0, d.useLayoutEffect)(() => {
            if (!r) {
                let e, r, n, o, i;
                return 1 == ++v && (t = (0, f.isIOS)() ? (n = null, o = (0, p.chain)(b(document, "touchstart", t => {
                    ((e = (0, h.getScrollParent)(t.target, !0)) !== document.documentElement || e !== document.body) && e instanceof HTMLElement && "auto" === window.getComputedStyle(e).overscrollBehavior && (r = y(e, "overscrollBehavior", "contain"))
                }, {
                    passive: !1,
                    capture: !0
                }), b(document, "touchmove", t => {
                    e && e !== document.documentElement && e !== document.body ? e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && t.preventDefault() : t.preventDefault()
                }, {
                    passive: !1,
                    capture: !0
                }), b(document, "touchend", () => {
                    r && r()
                }, {
                    passive: !1,
                    capture: !0
                }), b(document, "focus", e => {
                    var t;
                    let r = e.target;
                    ((t = r) instanceof HTMLInputElement && !g.has(t.type) || t instanceof HTMLTextAreaElement || t instanceof HTMLElement && t.isContentEditable) && ((() => {
                        if (n) return;
                        let e = window.pageXOffset,
                            t = window.pageYOffset;
                        n = (0, p.chain)(b(window, "scroll", () => {
                            window.scrollTo(0, 0)
                        }), y(document.documentElement, "paddingRight", `${window.innerWidth-document.documentElement.clientWidth}px`), y(document.documentElement, "overflow", "hidden"), y(document.body, "marginTop", `-${t}px`), () => {
                            window.scrollTo(e, t)
                        }), window.scrollTo(0, 0)
                    })(), r.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
                        r.style.transform = "", m && (m.height < window.innerHeight ? requestAnimationFrame(() => {
                            E(r)
                        }) : m.addEventListener("resize", () => E(r), {
                            once: !0
                        }))
                    }))
                }, !0)), () => {
                    null == r || r(), null == n || n(), o()
                }) : (i = window.innerWidth - document.documentElement.clientWidth, (0, p.chain)(i > 0 && ("scrollbarGutter" in document.documentElement.style ? y(document.documentElement, "scrollbarGutter", "stable") : y(document.documentElement, "paddingRight", `${i}px`)), y(document.documentElement, "overflow", "hidden")))), () => {
                    0 == --v && t()
                }
            }
        }, [r])
    }], 155266)
}, 907096, e => {
    "use strict";
    var t = e.i(3931);
    let r = (0, t.createContext)({});
    e.s(["useUNSAFE_PortalContext", 0, function() {
        var e;
        return null != (e = (0, t.useContext)(r)) ? e : {}
    }])
}, 460261, 548878, e => {
    "use strict";
    var t = e.i(907096);
    e.i(788727);
    var r = e.i(170318),
        n = e.i(166010),
        o = e.i(604082),
        i = e.i(728719),
        l = e.i(3931);
    let s = l.default.forwardRef(({
        children: e,
        ...t
    }, s) => {
        let u = (0, l.useRef)(!1),
            a = (0, l.useContext)(r.PressResponderContext);
        s = (0, n.useObjectRef)(s || (null == a ? void 0 : a.ref));
        let c = (0, o.mergeProps)(a || {}, {
            ...t,
            ref: s,
            register() {
                u.current = !0, a && a.register()
            }
        });
        return (0, i.useSyncRef)(a, s), (0, l.useEffect)(() => {
            u.current || (u.current = !0)
        }, []), l.default.createElement(r.PressResponderContext.Provider, {
            value: c
        }, e)
    });

    function u({
        children: e
    }) {
        let t = (0, l.useMemo)(() => ({
            register: () => {}
        }), []);
        return l.default.createElement(r.PressResponderContext.Provider, {
            value: t
        }, e)
    }
    e.s(["ClearPressResponder", 0, u, "PressResponder", 0, s], 548878);
    var a = e.i(102893),
        c = e.i(973914),
        d = e.i(12503),
        f = e.i(237483);
    let p = l.default.createContext(null);
    e.s(["Overlay", 0, function(e) {
        let r = (0, d.useIsSSR)(),
            {
                portalContainer: n = r ? null : document.body,
                isExiting: o
            } = e,
            [i, s] = (0, l.useState)(!1),
            f = (0, l.useMemo)(() => ({
                contain: i,
                setContain: s
            }), [i, s]),
            {
                getContainer: h
            } = (0, t.useUNSAFE_PortalContext)();
        if (!e.portalContainer && h && (n = h()), !n) return null;
        let m = e.children;
        return e.disableFocusManagement || (m = l.default.createElement(a.FocusScope, {
            restoreFocus: !0,
            contain: (e.shouldContainFocus || i) && !o
        }, m)), m = l.default.createElement(p.Provider, {
            value: f
        }, l.default.createElement(u, null, m)), c.default.createPortal(m, n)
    }, "useOverlayFocusContain", 0, function() {
        let e = (0, l.useContext)(p),
            t = null == e ? void 0 : e.setContain;
        (0, f.useLayoutEffect)(() => {
            null == t || t(!0)
        }, [t])
    }], 460261)
}, 441157, e => {
    "use strict";
    var t = e.i(282001),
        r = e.i(3931),
        n = e.i(231781);
    e.s(["useOverlayTrigger", 0, function(e, o, i) {
        let l, {
                type: s
            } = e,
            {
                isOpen: u
            } = o;
        (0, r.useEffect)(() => {
            i && i.current && t.onCloseMap.set(i.current, o.close)
        }), "menu" === s ? l = !0 : "listbox" === s && (l = "listbox");
        let a = (0, n.useId)();
        return {
            triggerProps: {
                "aria-haspopup": l,
                "aria-expanded": u,
                "aria-controls": u ? a : void 0,
                onPress: o.toggle
            },
            overlayProps: {
                id: a
            }
        }
    }])
}, 805518, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(3931),
        n = e.i(722978),
        o = e.i(166010);
    let i = (0, r.forwardRef)(function({
        children: e,
        className: r = ""
    }, i) {
        let l = (0, o.useObjectRef)(i),
            s = (0, n.default)("text", r);
        return (0, t.jsx)("div", {
            ref: l,
            className: s,
            children: e
        })
    });
    e.s(["default", 0, i], 805518)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "57be1cfc-0054-565d-b243-a9e1c239442b")
    } catch (e) {}
}();
//# debugId=57be1cfc-0054-565d-b243-a9e1c239442b