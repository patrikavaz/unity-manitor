(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 201373, e => {
    "use strict";
    var t = e.i(3931);
    e.s(["useControlledState", 0, function(e, n, r) {
        let [i, l] = (0, t.useState)(e || n), o = (0, t.useRef)(void 0 !== e), s = void 0 !== e;
        (0, t.useEffect)(() => {
            o.current, o.current = s
        }, [s]);
        let a = s ? e : i,
            u = (0, t.useCallback)((e, ...t) => {
                let n = (e, ...t) => {
                    r && !Object.is(a, e) && r(e, ...t), s || (a = e)
                };
                "function" == typeof e ? l((r, ...i) => {
                    let l = e(s ? a : r, ...i);
                    return (n(l, ...t), s) ? r : l
                }) : (s || l(e), n(e, ...t))
            }, [s, a, r]);
        return [a, u]
    }])
}, 881472, (e, t, n) => {
    "use strict";

    function r({
        widthInt: e,
        heightInt: t,
        blurWidth: n,
        blurHeight: i,
        blurDataURL: l,
        objectFit: o
    }) {
        let s = n ? 40 * n : e,
            a = i ? 40 * i : t,
            u = s && a ? `viewBox='0 0 ${s} ${a}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${u}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${u?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${l}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return r
        }
    })
}, 43094, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = {
        VALID_LOADERS: function() {
            return l
        },
        imageConfigDefault: function() {
            return o
        }
    };
    for (var i in r) Object.defineProperty(n, i, {
        enumerable: !0,
        get: r[i]
    });
    let l = ["default", "imgix", "cloudinary", "akamai", "custom"],
        o = {
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
}, 800218, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "getImgProps", {
        enumerable: !0,
        get: function() {
            return u
        }
    }), e.r(692846);
    let r = e.r(705027),
        i = e.r(881472),
        l = e.r(43094),
        o = ["-moz-initial", "fill", "none", "scale-down", void 0];

    function s(e) {
        return void 0 !== e.default
    }

    function a(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
    }

    function u({
        src: e,
        sizes: t,
        unoptimized: n = !1,
        priority: c = !1,
        preload: d = !1,
        loading: f,
        className: p,
        quality: m,
        width: h,
        height: g,
        fill: y = !1,
        style: v,
        overrideSrc: b,
        onLoad: w,
        onLoadingComplete: x,
        placeholder: E = "empty",
        blurDataURL: _,
        fetchPriority: k,
        decoding: C = "async",
        layout: P,
        objectFit: j,
        objectPosition: O,
        lazyBoundary: S,
        lazyRoot: I,
        ...R
    }, T) {
        var M;
        let D, L, A, {
                imgConf: $,
                showAltText: N,
                blurComplete: z,
                defaultLoader: F
            } = T,
            W = $ || l.imageConfigDefault;
        if ("allSizes" in W) D = W;
        else {
            let e = [...W.deviceSizes, ...W.imageSizes].sort((e, t) => e - t),
                t = W.deviceSizes.sort((e, t) => e - t),
                n = W.qualities?.sort((e, t) => e - t);
            D = {
                ...W,
                allSizes: e,
                deviceSizes: t,
                qualities: n
            }
        }
        if (void 0 === F) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: !1,
            configurable: !0
        });
        let B = R.loader || F;
        delete R.loader, delete R.srcSet;
        let U = "__next_img_default" in B;
        if (U) {
            if ("custom" === D.loader) throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: !1,
                configurable: !0
            })
        } else {
            let e = B;
            B = t => {
                let {
                    config: n,
                    ...r
                } = t;
                return e(r)
            }
        }
        if (P) {
            "fill" === P && (y = !0);
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
            e && (v = {
                ...v,
                ...e
            });
            let n = {
                responsive: "100vw",
                fill: "100vw"
            } [P];
            n && !t && (t = n)
        }
        let H = "",
            q = a(h),
            G = a(g);
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
            if (L = t.blurWidth, A = t.blurHeight, _ = _ || t.blurDataURL, H = t.src, !y)
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
        (!(e = "string" == typeof e ? e : H) || e.startsWith("data:") || e.startsWith("blob:")) && (n = !0, V = !1), D.unoptimized && (n = !0), U && !D.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (n = !0);
        let X = a(m),
            K = Object.assign(y ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: j,
                objectPosition: O
            } : {}, N ? {} : {
                color: "transparent"
            }, v),
            J = z || "empty" === E ? null : "blur" === E ? `url("data:image/svg+xml;charset=utf-8,${(0,i.getImageBlurSvg)({widthInt:q,heightInt:G,blurWidth:L,blurHeight:A,blurDataURL:_||"",objectFit:K.objectFit})}")` : `url("${E}")`,
            Y = o.includes(K.objectFit) ? "fill" === K.objectFit ? "100% 100%" : "cover" : K.objectFit,
            Q = J ? {
                backgroundSize: Y,
                backgroundPosition: K.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: J
            } : {},
            Z = function({
                config: e,
                src: t,
                unoptimized: n,
                width: i,
                quality: l,
                sizes: o,
                loader: s
            }) {
                if (n) {
                    if (t.startsWith("/") && !t.startsWith("//")) {
                        let e = (0, r.getDeploymentId)();
                        if (e) {
                            let n = t.indexOf("?");
                            if (-1 !== n) {
                                let r = new URLSearchParams(t.slice(n + 1));
                                r.get("dpl") || (r.append("dpl", e), t = t.slice(0, n) + "?" + r.toString())
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
                }, n, r) {
                    if (r) {
                        let n = /(^|\s)(1?\d?\d)vw/g,
                            i = [];
                        for (let e; e = n.exec(r);) i.push(parseInt(e[2]));
                        if (i.length) {
                            let n = .01 * Math.min(...i);
                            return {
                                widths: t.filter(t => t >= e[0] * n),
                                kind: "w"
                            }
                        }
                        return {
                            widths: t,
                            kind: "w"
                        }
                    }
                    return "number" != typeof n ? {
                        widths: e,
                        kind: "w"
                    } : {
                        widths: [...new Set([n, 2 * n].map(e => t.find(t => t >= e) || t[t.length - 1]))],
                        kind: "x"
                    }
                }(e, i, o), c = a.length - 1;
                return {
                    sizes: o || "w" !== u ? o : "100vw",
                    srcSet: a.map((n, r) => `${s({config:e,src:t,quality:l,width:n})} ${"w"===u?n:r+1}${u}`).join(", "),
                    src: s({
                        config: e,
                        src: t,
                        quality: l,
                        width: a[c]
                    })
                }
            }({
                config: D,
                src: e,
                unoptimized: n,
                width: q,
                quality: X,
                sizes: t,
                loader: B
            }),
            ee = V ? "lazy" : f;
        return {
            props: {
                ...R,
                loading: ee,
                fetchPriority: k,
                width: q,
                height: G,
                decoding: C,
                className: p,
                style: {
                    ...K,
                    ...Q
                },
                sizes: Z.sizes,
                srcSet: Z.srcSet,
                src: b || Z.src
            },
            meta: {
                unoptimized: n,
                preload: d || c,
                placeholder: E,
                fill: y
            }
        }
    }
}, 297036, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "default", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let r = e.r(3931),
        i = "u" < typeof window,
        l = i ? () => {} : r.useLayoutEffect,
        o = i ? () => {} : r.useEffect;

    function s(e) {
        let {
            headManager: t,
            reduceComponentsToState: n
        } = e;

        function s() {
            if (t && t.mountedInstances) {
                let e = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(n(e))
            }
        }
        return i && (t?.mountedInstances?.add(e.children), s()), l(() => (t?.mountedInstances?.add(e.children), () => {
            t?.mountedInstances?.delete(e.children)
        })), l(() => (t && (t._pendingUpdate = s), () => {
            t && (t._pendingUpdate = s)
        })), o(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
            t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
        })), null
    }
}, 489781, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = {
        default: function() {
            return h
        },
        defaultHead: function() {
            return d
        }
    };
    for (var i in r) Object.defineProperty(n, i, {
        enumerable: !0,
        get: r[i]
    });
    let l = e.r(481258),
        o = e.r(744066),
        s = e.r(500783),
        a = o._(e.r(3931)),
        u = l._(e.r(297036)),
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
        return "string" == typeof t || "number" == typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    e.r(692846);
    let p = ["name", "httpEquiv", "charSet", "itemProp"];

    function m(e) {
        let t, n, r, i;
        return e.reduce(f, []).reverse().concat(d().reverse()).filter((t = new Set, n = new Set, r = new Set, i = {}, e => {
            let l = !0,
                o = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                o = !0;
                let n = e.key.slice(e.key.indexOf("$") + 1);
                t.has(n) ? l = !1 : t.add(n)
            }
            switch (e.type) {
                case "title":
                case "base":
                    n.has(e.type) ? l = !1 : n.add(e.type);
                    break;
                case "meta":
                    for (let t = 0, n = p.length; t < n; t++) {
                        let n = p[t];
                        if (e.props.hasOwnProperty(n))
                            if ("charSet" === n) r.has(n) ? l = !1 : r.add(n);
                            else {
                                let t = e.props[n],
                                    r = i[n] || new Set;
                                ("name" !== n || !o) && r.has(t) ? l = !1 : (r.add(t), i[n] = r)
                            }
                    }
            }
            return l
        })).reverse().map((e, t) => {
            let n = e.key || t;
            return a.default.cloneElement(e, {
                key: n
            })
        })
    }
    let h = function({
        children: e
    }) {
        let t = (0, a.useContext)(c.HeadManagerContext);
        return (0, s.jsx)(u.default, {
            reduceComponentsToState: m,
            headManager: t,
            children: e
        })
    };
    ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }), Object.assign(n.default, n), t.exports = n.default)
}, 466294, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let r = e.r(481258)._(e.r(3931)),
        i = e.r(43094),
        l = r.default.createContext(i.imageConfigDefault)
}, 501285, (e, t, n) => {
    "use strict";

    function r(e, t) {
        let n = e || 75;
        return t?.qualities?.length ? t.qualities.reduce((e, t) => Math.abs(t - n) < Math.abs(e - n) ? t : e, t.qualities[0]) : n
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "findClosestQuality", {
        enumerable: !0,
        get: function() {
            return r
        }
    })
}, 82161, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "default", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let r = e.r(501285),
        i = e.r(705027);

    function l({
        config: e,
        src: t,
        width: n,
        quality: o
    }) {
        let s = (0, i.getDeploymentId)();
        if (t.startsWith("/") && !t.startsWith("//")) {
            let e = t.indexOf("?");
            if (-1 !== e) {
                let n = new URLSearchParams(t.slice(e + 1)),
                    r = n.get("dpl");
                if (r) {
                    s = r, n.delete("dpl");
                    let i = n.toString();
                    t = t.slice(0, e) + (i ? "?" + i : "")
                }
            }
        }
        if (t.startsWith("/") && t.includes("?") && e.localPatterns?.length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search) throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: !1,
            configurable: !0
        });
        let a = (0, r.findClosestQuality)(o, e);
        return `${e.path}?url=${encodeURIComponent(t)}&w=${n}&q=${a}${t.startsWith("/")&&s?`&dpl=${s}`:""}`
    }
    l.__next_img_default = !0;
    let o = l
}, 127829, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "Image", {
        enumerable: !0,
        get: function() {
            return w
        }
    });
    let r = e.r(481258),
        i = e.r(744066),
        l = e.r(500783),
        o = i._(e.r(3931)),
        s = r._(e.r(973914)),
        a = r._(e.r(489781)),
        u = e.r(800218),
        c = e.r(43094),
        d = e.r(466294);
    e.r(692846);
    let f = e.r(634629),
        p = r._(e.r(82161)),
        m = e.r(169085),
        h = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            qualities: [75],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };

    function g(e, t, n, r, i, l, o) {
        let s = e?.src;
        e && e["data-loaded-src"] !== s && (e["data-loaded-src"] = s, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && i(!0), n?.current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let r = !1,
                        i = !1;
                    n.current({
                        ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => r,
                        isPropagationStopped: () => i,
                        persist: () => {},
                        preventDefault: () => {
                            r = !0, t.preventDefault()
                        },
                        stopPropagation: () => {
                            i = !0, t.stopPropagation()
                        }
                    })
                }
                r?.current && r.current(e)
            }
        }))
    }

    function y(e) {
        return o.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let v = (0, o.forwardRef)(({
        src: e,
        srcSet: t,
        sizes: n,
        height: r,
        width: i,
        decoding: s,
        className: a,
        style: u,
        fetchPriority: c,
        placeholder: d,
        loading: f,
        unoptimized: p,
        fill: h,
        onLoadRef: v,
        onLoadingCompleteRef: b,
        setBlurComplete: w,
        setShowAltText: x,
        sizesInput: E,
        onLoad: _,
        onError: k,
        ...C
    }, P) => {
        let j = (0, o.useCallback)(e => {
                e && (k && (e.src = e.src), e.complete && g(e, d, v, b, w, p, E))
            }, [e, d, v, b, w, k, p, E]),
            O = (0, m.useMergedRef)(P, j);
        return (0, l.jsx)("img", {
            ...C,
            ...y(c),
            loading: f,
            width: i,
            height: r,
            decoding: s,
            "data-nimg": h ? "fill" : "1",
            className: a,
            style: u,
            sizes: n,
            srcSet: t,
            src: e,
            ref: O,
            onLoad: e => {
                g(e.currentTarget, d, v, b, w, p, E)
            },
            onError: e => {
                x(!0), "empty" !== d && w(!0), k && k(e)
            }
        })
    });

    function b({
        isAppRouter: e,
        imgAttributes: t
    }) {
        let n = {
            as: "image",
            imageSrcSet: t.srcSet,
            imageSizes: t.sizes,
            crossOrigin: t.crossOrigin,
            referrerPolicy: t.referrerPolicy,
            ...y(t.fetchPriority)
        };
        return e && s.default.preload ? (s.default.preload(t.src, n), null) : (0, l.jsx)(a.default, {
            children: (0, l.jsx)("link", {
                rel: "preload",
                href: t.srcSet ? void 0 : t.src,
                ...n
            }, "__nimg-" + t.src + t.srcSet + t.sizes)
        })
    }
    let w = (0, o.forwardRef)((e, t) => {
        let n = (0, o.useContext)(f.RouterContext),
            r = (0, o.useContext)(d.ImageConfigContext),
            i = (0, o.useMemo)(() => {
                let e = h || r || c.imageConfigDefault,
                    t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                    n = e.deviceSizes.sort((e, t) => e - t),
                    i = e.qualities?.sort((e, t) => e - t);
                return {
                    ...e,
                    allSizes: t,
                    deviceSizes: n,
                    qualities: i,
                    localPatterns: "u" < typeof window ? r?.localPatterns : e.localPatterns
                }
            }, [r]),
            {
                onLoad: s,
                onLoadingComplete: a
            } = e,
            m = (0, o.useRef)(s);
        (0, o.useEffect)(() => {
            m.current = s
        }, [s]);
        let g = (0, o.useRef)(a);
        (0, o.useEffect)(() => {
            g.current = a
        }, [a]);
        let [y, w] = (0, o.useState)(!1), [x, E] = (0, o.useState)(!1), {
            props: _,
            meta: k
        } = (0, u.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: i,
            blurComplete: y,
            showAltText: x
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(v, {
                ..._,
                unoptimized: k.unoptimized,
                placeholder: k.placeholder,
                fill: k.fill,
                onLoadRef: m,
                onLoadingCompleteRef: g,
                setBlurComplete: w,
                setShowAltText: E,
                sizesInput: e.sizes,
                ref: t
            }), k.preload ? (0, l.jsx)(b, {
                isAppRouter: !n,
                imgAttributes: _
            }) : null]
        })
    });
    ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }), Object.assign(n.default, n), t.exports = n.default)
}, 315707, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = {
        default: function() {
            return c
        },
        getImageProps: function() {
            return u
        }
    };
    for (var i in r) Object.defineProperty(n, i, {
        enumerable: !0,
        get: r[i]
    });
    let l = e.r(481258),
        o = e.r(800218),
        s = e.r(127829),
        a = l._(e.r(82161));

    function u(e) {
        let {
            props: t
        } = (0, o.getImgProps)(e, {
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
        for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
        return {
            props: t
        }
    }
    let c = s.Image
}, 655105, (e, t, n) => {
    t.exports = e.r(315707)
}, 459236, e => {
    "use strict";
    var t = e.i(3931),
        n = e.i(201373);
    e.s(["useOverlayTriggerState", 0, function(e) {
        let [r, i] = (0, n.useControlledState)(e.isOpen, e.defaultOpen || !1, e.onOpenChange), l = (0, t.useCallback)(() => {
            i(!0)
        }, [i]), o = (0, t.useCallback)(() => {
            i(!1)
        }, [i]), s = (0, t.useCallback)(() => {
            i(!r)
        }, [i, r]);
        return {
            isOpen: r,
            setOpen: i,
            open: l,
            close: o,
            toggle: s
        }
    }])
}, 722990, e => {
    "use strict";
    var t = e.i(500783);

    function n(e) {
        return "span" === e._type && "text" in e && "string" == typeof e.text && (typeof e.marks > "u" || Array.isArray(e.marks) && e.marks.every(e => "string" == typeof e))
    }

    function r(e) {
        return "string" == typeof e._type && "@" !== e._type[0] && (!("markDefs" in e) || !e.markDefs || Array.isArray(e.markDefs) && e.markDefs.every(e => "string" == typeof e._key)) && "children" in e && Array.isArray(e.children) && e.children.every(e => "object" == typeof e && "_type" in e)
    }

    function i(e) {
        return r(e) && "listItem" in e && "string" == typeof e.listItem && (typeof e.level > "u" || "number" == typeof e.level)
    }

    function l(e) {
        return "@list" === e._type
    }

    function o(e) {
        return "@span" === e._type
    }

    function s(e) {
        return "@text" === e._type
    }
    let a = ["strong", "em", "code", "underline", "strike-through"];

    function u(e, t, r) {
        if (!n(e) || !e.marks || !e.marks.length) return [];
        let i = e.marks.slice(),
            l = {};
        return i.forEach(e => {
            l[e] = 1;
            for (let i = t + 1; i < r.length; i++) {
                let t = r[i];
                if (t && n(t) && Array.isArray(t.marks) && -1 !== t.marks.indexOf(e)) l[e]++;
                else break
            }
        }), i.sort((e, t) => (function(e, t, n) {
            let r = e[t],
                i = e[n];
            if (r !== i) return i - r;
            let l = a.indexOf(t),
                o = a.indexOf(n);
            return l !== o ? l - o : t.localeCompare(n)
        })(l, e, t))
    }

    function c(e, t, n) {
        return {
            _type: "@list",
            _key: `${e._key||`${t}`}-parent`,
            mode: n,
            level: e.level || 1,
            listItem: e.listItem,
            children: [e]
        }
    }

    function d(e, t) {
        let r = t.level || 1,
            i = t.listItem || "normal",
            o = "string" == typeof t.listItem;
        if (l(e) && (e.level || 1) === r && o && (e.listItem || "normal") === i) return e;
        if (!("children" in e)) return;
        let s = e.children[e.children.length - 1];
        return s && !n(s) ? d(s, t) : void 0
    }
    var f = e.i(3931);
    let p = {
            textDecoration: "underline"
        },
        m = (e, t) => `[@portabletext/react] Unknown ${e}, specify a component for it in the \`components.${t}\` prop`,
        h = e => m(`block type "${e}"`, "types");

    function g(e) {
        console.warn(e)
    }
    let y = {
            display: "none"
        },
        v = {
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
                    value: n
                }) => (0, t.jsx)("a", {
                    href: null == n ? void 0 : n.href,
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
                isInline: n
            }) => {
                let r = h(e._type);
                return n ? (0, t.jsx)("span", {
                    style: y,
                    children: r
                }) : (0, t.jsx)("div", {
                    style: y,
                    children: r
                })
            },
            unknownMark: ({
                markType: e,
                children: n
            }) => (0, t.jsx)("span", {
                className: `unknown__pt__mark__${e}`,
                children: n
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

    function b(e, t, n) {
        let r = t[n],
            i = e[n];
        return "function" == typeof r || r && "function" == typeof i ? r : r ? {
            ...i,
            ...r
        } : i
    }

    function w(e) {
        let {
            node: t,
            index: r,
            isInline: i,
            renderNode: l
        } = e, o = (function(e) {
            var t;
            let {
                children: r
            } = e, i = e.markDefs ?? [];
            if (!r || !r.length) return [];
            let l = r.map(u),
                o = {
                    _type: "@span",
                    children: [],
                    markType: "<unknown>"
                },
                s = [o];
            for (let e = 0; e < r.length; e++) {
                let o = r[e];
                if (!o) continue;
                let a = l[e] || [],
                    u = 1;
                if (s.length > 1)
                    for (; u < s.length; u++) {
                        let e = (null == (t = s[u]) ? void 0 : t.markKey) || "",
                            n = a.indexOf(e);
                        if (-1 === n) break;
                        a.splice(n, 1)
                    }
                let c = (s = s.slice(0, u))[s.length - 1];
                if (c) {
                    for (let e of a) {
                        let t = null == i ? void 0 : i.find(t => t._key === e),
                            n = t ? t._type : e,
                            r = {
                                _type: "@span",
                                _key: o._key,
                                children: [],
                                markDef: t,
                                markType: n,
                                markKey: e
                            };
                        c.children.push(r), s.push(r), c = r
                    }
                    if (n(o)) {
                        let e = o.text.split(`
`);
                        for (let t = e.length; t-- > 1;) e.splice(t, 0, `
`);
                        c.children = c.children.concat(e.map(e => ({
                            _type: "@text",
                            text: e
                        })))
                    } else c.children = c.children.concat(o)
                }
            }
            return o.children
        })(t).map((e, t) => l({
            node: e,
            isInline: !0,
            index: t,
            renderNode: l
        }));
        return {
            _key: t._key || `block-${r}`,
            children: o,
            index: r,
            isInline: i,
            node: t
        }
    }

    function x() {}
    e.s(["PortableText", 0, function({
        value: e,
        components: n,
        listNestingMode: a,
        onMissingComponent: u = g
    }) {
        let p = u || x,
            y = function(e, t) {
                let n, r = [];
                for (let s = 0; s < e.length; s++) {
                    let a = e[s];
                    if (a) {
                        var l, o;
                        if (!i(a)) {
                            r.push(a), n = void 0;
                            continue
                        }
                        if (!n) {
                            n = c(a, s, t), r.push(n);
                            continue
                        }
                        if (l = a, o = n, (l.level || 1) === o.level && l.listItem === o.listItem) {
                            n.children.push(a);
                            continue
                        }
                        if ((a.level || 1) > n.level) {
                            let e = c(a, s, t);
                            if ("html" === t) {
                                let t = n.children[n.children.length - 1],
                                    r = {
                                        ...t,
                                        children: [...t.children, e]
                                    };
                                n.children[n.children.length - 1] = r
                            } else n.children.push(e);
                            n = e;
                            continue
                        }
                        if ((a.level || 1) < n.level) {
                            let e = r[r.length - 1],
                                i = e && d(e, a);
                            if (i) {
                                (n = i).children.push(a);
                                continue
                            }
                            n = c(a, s, t), r.push(n);
                            continue
                        }
                        if (a.listItem !== n.listItem) {
                            let e = r[r.length - 1],
                                i = e && d(e, {
                                    level: a.level || 1
                                });
                            if (i && i.listItem === a.listItem) {
                                (n = i).children.push(a);
                                continue
                            }
                            n = c(a, s, t), r.push(n);
                            continue
                        }
                        console.warn("Unknown state encountered for block", a), r.push(a)
                    }
                }
                return r
            }(Array.isArray(e) ? e : [e], a || "html"),
            E = (0, f.useMemo)(() => n ? function(e, t) {
                let {
                    block: n,
                    list: r,
                    listItem: i,
                    marks: l,
                    types: o,
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
            }(v, n) : v, [n]),
            _ = (0, f.useMemo)(() => {
                var e, n;
                return e = E, n = p,
                    function a(u) {
                        var c, d, f, p, g, y, v, b;
                        let x, E, {
                                node: _,
                                index: k,
                                isInline: C
                            } = u,
                            P = _._key || `node-${k}`;
                        return l(_) ? function(r, i, l) {
                            let o = r.children.map((e, t) => a({
                                    node: e._key ? e : {
                                        ...e,
                                        _key: `li-${i}-${t}`
                                    },
                                    index: t,
                                    isInline: !1
                                })),
                                s = e.list,
                                u = ("function" == typeof s ? s : s[r.listItem]) || e.unknownList;
                            if (u === e.unknownList) {
                                let e = r.listItem || "bullet";
                                n(m(`list style "${e}"`, "list"), {
                                    nodeType: "listStyle",
                                    type: e
                                })
                            }
                            return (0, t.jsx)(u, {
                                value: r,
                                index: i,
                                isInline: !1,
                                renderNode: a,
                                children: o
                            }, l)
                        }(_, k, P) : i(_) ? function(r, i, l) {
                            let o = w({
                                    node: r,
                                    index: i,
                                    isInline: !1,
                                    renderNode: a
                                }),
                                s = e.listItem,
                                u = ("function" == typeof s ? s : s[r.listItem]) || e.unknownListItem;
                            if (u === e.unknownListItem) {
                                let e = r.listItem || "bullet";
                                n(m(`list item style "${e}"`, "listItem"), {
                                    type: e,
                                    nodeType: "listItemStyle"
                                })
                            }
                            let c = o.children;
                            if (r.style && "normal" !== r.style) {
                                let {
                                    listItem: e,
                                    ...t
                                } = r;
                                c = a({
                                    node: t,
                                    index: i,
                                    isInline: !1
                                })
                            }
                            return (0, t.jsx)(u, {
                                value: r,
                                index: i,
                                isInline: !1,
                                renderNode: a,
                                children: c
                            }, l)
                        }(_, k, P) : o(_) ? function(r, i) {
                            let {
                                markDef: l,
                                markType: u,
                                markKey: c
                            } = r, d = e.marks[u] || e.unknownMark, f = r.children.map((e, t) => a({
                                node: e,
                                index: t,
                                isInline: !0
                            }));
                            return d === e.unknownMark && n(m(`mark type "${u}"`, "marks"), {
                                nodeType: "mark",
                                type: u
                            }), (0, t.jsx)(d, {
                                text: function e(t) {
                                    let n = "";
                                    return t.children.forEach(t => {
                                        s(t) ? n += t.text : o(t) && (n += e(t))
                                    }), n
                                }(r),
                                value: l,
                                markType: u,
                                markKey: c,
                                renderNode: a,
                                children: f
                            }, i)
                        }(_, P) : _._type in e.types ? (c = _, d = k, f = P, p = C, (x = e.types[c._type]) ? (0, t.jsx)(x, {
                            value: c,
                            isInline: p,
                            index: d,
                            renderNode: a
                        }, f) : null) : r(_) ? function(r, i, l, o) {
                            let {
                                _key: s,
                                ...u
                            } = w({
                                node: r,
                                index: i,
                                isInline: o,
                                renderNode: a
                            }), c = u.node.style || "normal", d = ("function" == typeof e.block ? e.block : e.block[c]) || e.unknownBlockStyle;
                            return d === e.unknownBlockStyle && n(m(`block style "${c}"`, "block"), {
                                nodeType: "blockStyle",
                                type: c
                            }), (0, t.jsx)(d, {
                                ...u,
                                value: u.node,
                                renderNode: a
                            }, l)
                        }(_, k, P, C) : s(_) ? function(n, r) {
                            if (n.text === `
`) {
                                let n = e.hardBreak;
                                return n ? (0, t.jsx)(n, {}, r) : `
`
                            }
                            return n.text
                        }(_, P) : (g = _, y = k, v = P, b = C, n(h(g._type), {
                            nodeType: "block",
                            type: g._type
                        }), E = e.unknownType, (0, t.jsx)(E, {
                            value: g,
                            isInline: b,
                            index: y,
                            renderNode: a
                        }, v))
                    }
            }, [E, p]),
            k = y.map((e, t) => _({
                node: e,
                index: t,
                isInline: !1,
                renderNode: _
            }));
        return (0, t.jsx)(t.Fragment, {
            children: k
        })
    }], 722990)
}, 282001, e => {
    "use strict";
    var t = e.i(3931);
    let n = new WeakMap;
    e.s(["onCloseMap", 0, n, "useCloseOnScroll", 0, function(e) {
        let {
            triggerRef: r,
            isOpen: i,
            onClose: l
        } = e;
        (0, t.useEffect)(() => {
            if (!i || null === l) return;
            let e = e => {
                let t = e.target;
                if (!r.current || t instanceof Node && !t.contains(r.current) || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
                let i = l || n.get(r.current);
                i && i()
            };
            return window.addEventListener("scroll", e, !0), () => {
                window.removeEventListener("scroll", e, !0)
            }
        }, [i, l, r])
    }])
}, 669877, 984782, 155266, e => {
    "use strict";
    let t, n = new WeakMap,
        r = [];
    e.s(["ariaHideOutside", 0, function(e, t = document.body) {
        let i = new Set(e),
            l = new Set,
            o = e => {
                for (let t of e.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]")) i.add(t);
                let t = e => {
                        if (i.has(e) || e.parentElement && l.has(e.parentElement) && "row" !== e.parentElement.getAttribute("role")) return NodeFilter.FILTER_REJECT;
                        for (let t of i)
                            if (e.contains(t)) return NodeFilter.FILTER_SKIP;
                        return NodeFilter.FILTER_ACCEPT
                    },
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: t
                    }),
                    r = t(e);
                if (r === NodeFilter.FILTER_ACCEPT && s(e), r !== NodeFilter.FILTER_REJECT) {
                    let e = n.nextNode();
                    for (; null != e;) s(e), e = n.nextNode()
                }
            },
            s = e => {
                var t;
                let r = null != (t = n.get(e)) ? t : 0;
                ("true" !== e.getAttribute("aria-hidden") || 0 !== r) && (0 === r && e.setAttribute("aria-hidden", "true"), l.add(e), n.set(e, r + 1))
            };
        r.length && r[r.length - 1].disconnect(), o(t);
        let a = new MutationObserver(e => {
            for (let t of e)
                if ("childList" === t.type && 0 !== t.addedNodes.length && ![...i, ...l].some(e => e.contains(t.target))) {
                    for (let e of t.removedNodes) e instanceof Element && (i.delete(e), l.delete(e));
                    for (let e of t.addedNodes)(e instanceof HTMLElement || e instanceof SVGElement) && ("true" === e.dataset.liveAnnouncer || "true" === e.dataset.reactAriaTopLayer) ? i.add(e) : e instanceof Element && o(e)
                }
        });
        a.observe(t, {
            childList: !0,
            subtree: !0
        });
        let u = {
            visibleNodes: i,
            hiddenNodes: l,
            observe() {
                a.observe(t, {
                    childList: !0,
                    subtree: !0
                })
            },
            disconnect() {
                a.disconnect()
            }
        };
        return r.push(u), () => {
            for (let e of (a.disconnect(), l)) {
                let t = n.get(e);
                null != t && (1 === t ? (e.removeAttribute("aria-hidden"), n.delete(e)) : n.set(e, t - 1))
            }
            u === r[r.length - 1] ? (r.pop(), r.length && r[r.length - 1].observe()) : r.splice(r.indexOf(u), 1)
        }
    }, "keepVisible", 0, function(e) {
        let t = r[r.length - 1];
        if (t && !t.visibleNodes.has(e)) return t.visibleNodes.add(e), () => {
            t.visibleNodes.delete(e)
        }
    }], 669877);
    var i = e.i(102893),
        l = e.i(3931);
    e.i(788727);
    var o = e.i(123714),
        s = e.i(901317);

    function a(e, t) {
        if (e.button > 0) return !1;
        if (e.target) {
            let t = e.target.ownerDocument;
            if (!t || !t.documentElement.contains(e.target) || e.target.closest("[data-react-aria-top-layer]")) return !1
        }
        return !!t.current && !e.composedPath().includes(t.current)
    }
    var u = e.i(287609);
    let c = [];
    e.s(["useOverlay", 0, function(e, t) {
        let {
            onClose: n,
            shouldCloseOnBlur: r,
            isOpen: d,
            isDismissable: f = !1,
            isKeyboardDismissDisabled: p = !1,
            shouldCloseOnInteractOutside: m
        } = e;
        (0, l.useEffect)(() => {
            if (d && !c.includes(t)) return c.push(t), () => {
                let e = c.indexOf(t);
                e >= 0 && c.splice(e, 1)
            }
        }, [d, t]);
        let h = () => {
            c[c.length - 1] === t && n && n()
        };
        ! function(e) {
            let {
                ref: t,
                onInteractOutside: n,
                isDisabled: r,
                onInteractOutsideStart: i
            } = e, u = (0, l.useRef)({
                isPointerDown: !1,
                ignoreEmulatedMouseEvents: !1
            }), c = (0, o.useEffectEvent)(e => {
                n && a(e, t) && (i && i(e), u.current.isPointerDown = !0)
            }), d = (0, o.useEffectEvent)(e => {
                n && n(e)
            });
            (0, l.useEffect)(() => {
                let e = u.current;
                if (r) return;
                let n = t.current,
                    i = (0, s.getOwnerDocument)(n);
                if ("u" > typeof PointerEvent) {
                    let n = n => {
                        e.isPointerDown && a(n, t) && d(n), e.isPointerDown = !1
                    };
                    return i.addEventListener("pointerdown", c, !0), i.addEventListener("click", n, !0), () => {
                        i.removeEventListener("pointerdown", c, !0), i.removeEventListener("click", n, !0)
                    }
                }
            }, [t, r, c, d])
        }({
            ref: t,
            onInteractOutside: f && d ? e => {
                (!m || m(e.target)) && (c[c.length - 1] === t && (e.stopPropagation(), e.preventDefault()), h())
            } : void 0,
            onInteractOutsideStart: e => {
                (!m || m(e.target)) && c[c.length - 1] === t && (e.stopPropagation(), e.preventDefault())
            }
        });
        let {
            focusWithinProps: g
        } = (0, u.useFocusWithin)({
            isDisabled: !r,
            onBlurWithin: e => {
                !(!e.relatedTarget || (0, i.isElementInChildOfActiveScope)(e.relatedTarget)) && (!m || m(e.relatedTarget)) && (null == n || n())
            }
        });
        return {
            overlayProps: {
                onKeyDown: e => {
                    "Escape" !== e.key || p || e.nativeEvent.isComposing || (e.stopPropagation(), e.preventDefault(), h())
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
        m = e.i(430860);
    let h = "u" > typeof document && window.visualViewport,
        g = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]),
        y = 0;

    function v(e, t, n) {
        let r = e.style[t];
        return e.style[t] = n, () => {
            e.style[t] = r
        }
    }

    function b(e, t, n, r) {
        return e.addEventListener(t, n, r), () => {
            e.removeEventListener(t, n, r)
        }
    }

    function w(e) {
        let t = document.scrollingElement || document.documentElement,
            n = e;
        for (; n && n !== t;) {
            let e = (0, m.getScrollParent)(n);
            if (e !== document.documentElement && e !== document.body && e !== n) {
                let t = e.getBoundingClientRect().top,
                    r = n.getBoundingClientRect().top;
                r > t + n.clientHeight && (e.scrollTop += r - t)
            }
            n = e.parentElement
        }
    }
    e.s(["usePreventScroll", 0, function(e = {}) {
        let {
            isDisabled: n
        } = e;
        (0, d.useLayoutEffect)(() => {
            if (!n) {
                let e, n, r, i, l;
                return 1 == ++y && (t = (0, f.isIOS)() ? (r = null, i = (0, p.chain)(b(document, "touchstart", t => {
                    ((e = (0, m.getScrollParent)(t.target, !0)) !== document.documentElement || e !== document.body) && e instanceof HTMLElement && "auto" === window.getComputedStyle(e).overscrollBehavior && (n = v(e, "overscrollBehavior", "contain"))
                }, {
                    passive: !1,
                    capture: !0
                }), b(document, "touchmove", t => {
                    e && e !== document.documentElement && e !== document.body ? e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && t.preventDefault() : t.preventDefault()
                }, {
                    passive: !1,
                    capture: !0
                }), b(document, "touchend", () => {
                    n && n()
                }, {
                    passive: !1,
                    capture: !0
                }), b(document, "focus", e => {
                    var t;
                    let n = e.target;
                    ((t = n) instanceof HTMLInputElement && !g.has(t.type) || t instanceof HTMLTextAreaElement || t instanceof HTMLElement && t.isContentEditable) && ((() => {
                        if (r) return;
                        let e = window.pageXOffset,
                            t = window.pageYOffset;
                        r = (0, p.chain)(b(window, "scroll", () => {
                            window.scrollTo(0, 0)
                        }), v(document.documentElement, "paddingRight", `${window.innerWidth-document.documentElement.clientWidth}px`), v(document.documentElement, "overflow", "hidden"), v(document.body, "marginTop", `-${t}px`), () => {
                            window.scrollTo(e, t)
                        }), window.scrollTo(0, 0)
                    })(), n.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
                        n.style.transform = "", h && (h.height < window.innerHeight ? requestAnimationFrame(() => {
                            w(n)
                        }) : h.addEventListener("resize", () => w(n), {
                            once: !0
                        }))
                    }))
                }, !0)), () => {
                    null == n || n(), null == r || r(), i()
                }) : (l = window.innerWidth - document.documentElement.clientWidth, (0, p.chain)(l > 0 && ("scrollbarGutter" in document.documentElement.style ? v(document.documentElement, "scrollbarGutter", "stable") : v(document.documentElement, "paddingRight", `${l}px`)), v(document.documentElement, "overflow", "hidden")))), () => {
                    0 == --y && t()
                }
            }
        }, [n])
    }], 155266)
}, 907096, e => {
    "use strict";
    var t = e.i(3931);
    let n = (0, t.createContext)({});
    e.s(["useUNSAFE_PortalContext", 0, function() {
        var e;
        return null != (e = (0, t.useContext)(n)) ? e : {}
    }])
}, 460261, 548878, e => {
    "use strict";
    var t = e.i(907096);
    e.i(788727);
    var n = e.i(170318),
        r = e.i(166010),
        i = e.i(604082),
        l = e.i(728719),
        o = e.i(3931);
    let s = o.default.forwardRef(({
        children: e,
        ...t
    }, s) => {
        let a = (0, o.useRef)(!1),
            u = (0, o.useContext)(n.PressResponderContext);
        s = (0, r.useObjectRef)(s || (null == u ? void 0 : u.ref));
        let c = (0, i.mergeProps)(u || {}, {
            ...t,
            ref: s,
            register() {
                a.current = !0, u && u.register()
            }
        });
        return (0, l.useSyncRef)(u, s), (0, o.useEffect)(() => {
            a.current || (a.current = !0)
        }, []), o.default.createElement(n.PressResponderContext.Provider, {
            value: c
        }, e)
    });

    function a({
        children: e
    }) {
        let t = (0, o.useMemo)(() => ({
            register: () => {}
        }), []);
        return o.default.createElement(n.PressResponderContext.Provider, {
            value: t
        }, e)
    }
    e.s(["ClearPressResponder", 0, a, "PressResponder", 0, s], 548878);
    var u = e.i(102893),
        c = e.i(973914),
        d = e.i(12503),
        f = e.i(237483);
    let p = o.default.createContext(null);
    e.s(["Overlay", 0, function(e) {
        let n = (0, d.useIsSSR)(),
            {
                portalContainer: r = n ? null : document.body,
                isExiting: i
            } = e,
            [l, s] = (0, o.useState)(!1),
            f = (0, o.useMemo)(() => ({
                contain: l,
                setContain: s
            }), [l, s]),
            {
                getContainer: m
            } = (0, t.useUNSAFE_PortalContext)();
        if (!e.portalContainer && m && (r = m()), !r) return null;
        let h = e.children;
        return e.disableFocusManagement || (h = o.default.createElement(u.FocusScope, {
            restoreFocus: !0,
            contain: (e.shouldContainFocus || l) && !i
        }, h)), h = o.default.createElement(p.Provider, {
            value: f
        }, o.default.createElement(a, null, h)), c.default.createPortal(h, r)
    }, "useOverlayFocusContain", 0, function() {
        let e = (0, o.useContext)(p),
            t = null == e ? void 0 : e.setContain;
        (0, f.useLayoutEffect)(() => {
            null == t || t(!0)
        }, [t])
    }], 460261)
}, 441157, e => {
    "use strict";
    var t = e.i(282001),
        n = e.i(3931),
        r = e.i(231781);
    e.s(["useOverlayTrigger", 0, function(e, i, l) {
        let o, {
                type: s
            } = e,
            {
                isOpen: a
            } = i;
        (0, n.useEffect)(() => {
            l && l.current && t.onCloseMap.set(l.current, i.close)
        }), "menu" === s ? o = !0 : "listbox" === s && (o = "listbox");
        let u = (0, r.useId)();
        return {
            triggerProps: {
                "aria-haspopup": o,
                "aria-expanded": a,
                "aria-controls": a ? u : void 0,
                onPress: i.toggle
            },
            overlayProps: {
                id: u
            }
        }
    }])
}, 805518, e => {
    "use strict";
    var t = e.i(500783),
        n = e.i(3931),
        r = e.i(722978),
        i = e.i(166010);
    let l = (0, n.forwardRef)(function({
        children: e,
        className: n = ""
    }, l) {
        let o = (0, i.useObjectRef)(l),
            s = (0, r.default)("text", n);
        return (0, t.jsx)("div", {
            ref: o,
            className: s,
            children: e
        })
    });
    e.s(["default", 0, l], 805518)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ed503676-cf49-5873-aa68-a77dc475acbb")
    } catch (e) {}
}();
//# debugId=ed503676-cf49-5873-aa68-a77dc475acbb