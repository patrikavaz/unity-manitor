;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "ce8a6a22-0ef4-3d6b-4109-76e983cf837c")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, [844929, e => {
    var t = e.i(495056);
    let r = t.forwardRef((e, r) => {
        let {
            alt: n,
            color: i = "currentColor",
            size: o = "1em",
            weight: a = "regular",
            mirrored: l = !1,
            children: s,
            weights: u,
            ...d
        } = e;
        return t.createElement("svg", {
            ref: r,
            xmlns: "http://www.w3.org/2000/svg",
            width: o,
            height: o,
            fill: i,
            viewBox: "0 0 256 256",
            transform: l ? "scale(-1, 1)" : void 0,
            ...d
        }, !!n && t.createElement("title", null, n), s, u.get(a))
    });
    r.displayName = "SSRBase", e.s(["f", 0, r])
}, 722978, e => {
    function t() {
        for (var e, t, r = 0, n = ""; r < arguments.length;)(e = arguments[r++]) && (t = function e(t) {
            var r, n, i = "";
            if ("string" == typeof t || "number" == typeof t) i += t;
            else if ("object" == typeof t)
                if (Array.isArray(t))
                    for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (i && (i += " "), i += n);
                else
                    for (r in t) t[r] && (i && (i += " "), i += r);
            return i
        }(e)) && (n && (n += " "), n += t);
        return n
    }
    e.s(["q", 0, t, "U", 0, t])
}, 486771, (e, t, r) => {
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return y
        },
        useLinkStatus: function() {
            return v
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let o = e.r(56421),
        a = e.r(167358),
        l = o._(e.r(495056)),
        s = e.r(941820),
        u = e.r(720528),
        d = e.r(628465),
        c = e.r(574492),
        f = e.r(672310),
        p = e.r(492241),
        g = e.r(28016),
        h = e.r(752786),
        m = e.r(480);

    function y(t) {
        var r;
        let n, i, o, [y, v] = (0, l.useOptimistic)(g.IDLE_LINK_STATUS),
            w = (0, l.useRef)(null),
            {
                href: P,
                as: _,
                children: S,
                prefetch: x = null,
                passHref: C,
                replace: j,
                shallow: E,
                scroll: O,
                onClick: I,
                onMouseEnter: M,
                onTouchStart: L,
                legacyBehavior: R = !1,
                onNavigate: T,
                transitionTypes: A,
                ref: k,
                unstable_dynamicOnHover: $,
                ...z
            } = t;
        n = S, R && ("string" == typeof n || "number" == typeof n) && (n = (0, a.jsx)("a", {
            children: n
        }));
        let U = l.default.useContext(u.AppRouterContext),
            N = !1 !== x,
            D = !1 === x ? "none" : !0 === x ? "full" : "auto",
            F = "none" !== D ? "auto" === D ? m.FetchStrategy.PPR : m.FetchStrategy.Full : m.FetchStrategy.PPR,
            B = "string" == typeof(r = _ || P) ? r : (0, s.formatUrl)(r);
        if (R) {
            if (n?.$$typeof === Symbol.for("react.lazy")) throw Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.");
            i = l.default.Children.only(n)
        }
        let q = R ? i && "object" == typeof i && i.ref : k,
            W, G = l.default.useCallback(e => (null !== U && (w.current = (0, g.mountLinkInstance)(e, B, U, F, N, v, W)), () => {
                w.current && ((0, g.unmountLinkForCurrentNavigation)(w.current), w.current = null), (0, g.unmountPrefetchableInstance)(e)
            }), [N, B, U, F, v, W]),
            H = {
                ref: (0, d.useMergedRef)(G, q),
                onClick(t) {
                    R || "function" != typeof I || I(t), R && i.props && "function" == typeof i.props.onClick && i.props.onClick(t), !U || t.defaultPrevented || function(t, r, n, i, o, a, l, s = "none") {
                        if ("u" > typeof window) {
                            let u, {
                                nodeName: d
                            } = t.currentTarget;
                            if ("A" === d.toUpperCase() && ((u = t.currentTarget.getAttribute("target")) && "_self" !== u || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
                            if (!(0, h.isLocalURL)(r)) {
                                i && (t.preventDefault(), location.replace(r));
                                return
                            }
                            if (t.preventDefault(), a) {
                                let e = !1;
                                if (a({
                                        preventDefault: () => {
                                            e = !0
                                        }
                                    }), e) return
                            }
                            let {
                                navigate: c
                            } = e.r(239632);
                            c(r, i ? "replace" : "push", !1 === o ? p.ScrollBehavior.NoScroll : p.ScrollBehavior.Default, n.current, l, s)
                        }
                    }(t, B, w, j, O, T, A, D)
                },
                onMouseEnter(e) {
                    R || "function" != typeof M || M(e), R && i.props && "function" == typeof i.props.onMouseEnter && i.props.onMouseEnter(e), U && N && (0, g.onNavigationIntent)(e.currentTarget, !0 === $)
                },
                onTouchStart: function(e) {
                    R || "function" != typeof L || L(e), R && i.props && "function" == typeof i.props.onTouchStart && i.props.onTouchStart(e), U && N && (0, g.onNavigationIntent)(e.currentTarget, !0 === $)
                }
            };
        return (0, c.isAbsoluteUrl)(B) ? H.href = B : R && !C && ("a" !== i.type || "href" in i.props) || (H.href = (0, f.addBasePath)(B)), o = R ? l.default.cloneElement(i, H) : (0, a.jsx)("a", {
            ...z,
            ...H,
            children: n
        }), (0, a.jsx)(b.Provider, {
            value: y,
            children: o
        })
    }
    let b = (0, l.createContext)(g.IDLE_LINK_STATUS),
        v = () => (0, l.useContext)(b);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 197624, (e, t, r) => {
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function() {
            return v
        }
    });
    let n = e.r(836437),
        i = e.r(56421),
        o = e.r(167358),
        a = i._(e.r(495056)),
        l = n._(e.r(228276)),
        s = n._(e.r(890848)),
        u = e.r(505360),
        d = e.r(753470),
        c = e.r(76494),
        f = n._(e.r(466435)),
        p = e.r(628465);

    function g(e, t, r, n, i, o, a) {
        let l = e?.src;
        e && e["data-loaded-src"] !== l && (e["data-loaded-src"] = l, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && i(!0), r?.current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let n = !1,
                        i = !1;
                    r.current({
                        ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => n,
                        isPropagationStopped: () => i,
                        persist: () => {},
                        preventDefault: () => {
                            n = !0, t.preventDefault()
                        },
                        stopPropagation: () => {
                            i = !0, t.stopPropagation()
                        }
                    })
                }
                n?.current && n.current(e)
            }
        }))
    }

    function h(e) {
        return a.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let m = "u" < typeof window ? a.useEffect : a.useLayoutEffect,
        y = (0, a.forwardRef)(({
            src: e,
            srcSet: t,
            sizes: r,
            height: n,
            width: i,
            decoding: l,
            className: s,
            style: u,
            fetchPriority: d,
            placeholder: c,
            loading: f,
            unoptimized: y,
            fill: b,
            onLoadRef: v,
            onLoadingCompleteRef: w,
            setBlurComplete: P,
            setShowAltText: _,
            sizesInput: S,
            onLoad: x,
            onError: C,
            ...j
        }, E) => {
            let O = (0, a.useRef)(!1),
                I = (0, a.useRef)(null);
            m(() => {
                let {
                    current: e
                } = O, {
                    current: t
                } = I;
                e || null === t || (C && (t.src = t.src), t.complete && g(t, c, v, w, P, y, S), O.current = !0)
            }, [e, c, v, w, C, y, S]);
            let M = (0, p.useMergedRef)(E, I);
            return (0, o.jsx)("img", {
                ...j,
                ...h(d),
                loading: f,
                width: i,
                height: n,
                decoding: l,
                "data-nimg": b ? "fill" : "1",
                className: s,
                style: u,
                sizes: r,
                srcSet: t,
                src: e,
                ref: M,
                onLoad: e => {
                    g(e.currentTarget, c, v, w, P, y, S)
                },
                onError: e => {
                    _(!0), "empty" !== c && P(!0), C && C(e)
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
            ...h(t.fetchPriority)
        };
        return e && l.default.preload ? (l.default.preload(t.src, r), null) : (0, o.jsx)(s.default, {
            children: (0, o.jsx)("link", {
                rel: "preload",
                href: t.srcSet ? void 0 : t.src,
                ...r
            }, "__nimg-" + t.src + t.srcSet + t.sizes)
        })
    }
    let v = (0, a.forwardRef)((e, t) => {
        let r = (0, a.useContext)(d.RouterContext),
            n = (0, c.useImageConfig)(),
            {
                onLoad: i,
                onLoadingComplete: l
            } = e,
            s = (0, a.useRef)(i);
        (0, a.useEffect)(() => {
            s.current = i
        }, [i]);
        let p = (0, a.useRef)(l);
        (0, a.useEffect)(() => {
            p.current = l
        }, [l]);
        let [g, h] = (0, a.useState)(!1), [m, v] = (0, a.useState)(!1), {
            props: w,
            meta: P
        } = (0, u.getImgProps)(e, {
            defaultLoader: f.default,
            imgConf: n,
            blurComplete: g,
            showAltText: m
        });
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(y, {
                ...w,
                unoptimized: P.unoptimized,
                placeholder: P.placeholder,
                fill: P.fill,
                onLoadRef: s,
                onLoadingCompleteRef: p,
                setBlurComplete: h,
                setShowAltText: v,
                sizesInput: e.sizes,
                ref: t
            }), P.preload ? (0, o.jsx)(b, {
                isAppRouter: !r,
                imgAttributes: w
            }) : null]
        })
    });
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 127873, e => {
    var t = e.i(197624);
    e.s(["default", () => t.Image])
}, 76494, (e, t, r) => {
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useImageConfig", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let n = e.r(495056),
        i = e.r(899621),
        o = e.r(973531),
        a = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            qualities: [75],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };

    function l() {
        let e = (0, n.useContext)(o.ImageConfigContext);
        return (0, i.prepareImageConfig)(a, e)
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 628465, (e, t, r) => {
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let n = e.r(495056);

    function i(e, t) {
        let r = (0, n.useRef)(null),
            i = (0, n.useRef)(null);
        return (0, n.useCallback)(n => {
            if (null === n) {
                let e = r.current;
                e && (r.current = null, e());
                let t = i.current;
                t && (i.current = null, t())
            } else e && (r.current = o(e, n)), t && (i.current = o(t, n))
        }, [e, t])
    }

    function o(e, t) {
        if ("function" != typeof e) return e.current = t, () => {
            e.current = null
        };
        {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 859075, (e, t, r) => {
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
}, 505360, (e, t, r) => {
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let n = e.r(418979),
        i = e.r(352416),
        o = ["-moz-initial", "fill", "none", "scale-down", void 0];

    function a(e) {
        return void 0 !== e.default
    }

    function l(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : 0 / 0 : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : 0 / 0
    }

    function s({
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: u = !1,
        preload: d = !1,
        loading: c,
        className: f,
        quality: p,
        width: g,
        height: h,
        fill: m = !1,
        style: y,
        overrideSrc: b,
        onLoad: v,
        onLoadingComplete: w,
        placeholder: P = "empty",
        blurDataURL: _,
        fetchPriority: S,
        decoding: x = "async",
        layout: C,
        objectFit: j,
        objectPosition: E,
        lazyBoundary: O,
        lazyRoot: I,
        ...M
    }, L) {
        var R;
        let T, A, {
            imgConf: k,
            showAltText: $,
            blurComplete: z,
            defaultLoader: U
        } = L;
        if (void 0 === U) throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
        let N = M.loader || U;
        delete M.loader, delete M.srcSet;
        let D = "__next_img_default" in N;
        if (D) {
            if ("custom" === k.loader) throw Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`)
        } else {
            let e = N;
            N = t => {
                let {
                    config: r,
                    ...n
                } = t;
                return e(n)
            }
        }
        if (C) {
            "fill" === C && (m = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            } [C];
            e && (y = {
                ...y,
                ...e
            });
            let r = {
                responsive: "100vw",
                fill: "100vw"
            } [C];
            r && !t && (t = r)
        }
        let F = "",
            B = l(g),
            q = l(h);
        if ((R = e) && "object" == typeof R && (a(R) || void 0 !== R.src)) {
            let t = a(e) ? e.default : e;
            if (!t.src) throw Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`);
            if (!t.height || !t.width) throw Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`);
            if (T = t.blurWidth, A = t.blurHeight, _ = _ || t.blurDataURL, F = t.src, !m)
                if (B || q) {
                    if (B && !q) {
                        let e = B / t.width;
                        q = Math.round(t.height * e)
                    } else if (!B && q) {
                        let e = q / t.height;
                        B = Math.round(t.width * e)
                    }
                } else B = t.width, q = t.height
        }
        let W = !u && !d && ("lazy" === c || void 0 === c);
        (!(e = "string" == typeof e ? e : F) || e.startsWith("data:") || e.startsWith("blob:")) && (r = !0, W = !1), k.unoptimized && (r = !0), D && !k.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0);
        let G = l(p),
            H = Object.assign(m ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: j,
                objectPosition: E
            } : {}, $ ? {} : {
                color: "transparent"
            }, y),
            V = z || "empty" === P ? null : "blur" === P ? `url("data:image/svg+xml;charset=utf-8,${(0,i.getImageBlurSvg)({widthInt:B,heightInt:q,blurWidth:T,blurHeight:A,blurDataURL:_||"",objectFit:H.objectFit})}")` : `url("${P}")`,
            K = o.includes(H.objectFit) ? "fill" === H.objectFit ? "100% 100%" : "cover" : H.objectFit,
            J = V ? {
                backgroundSize: K,
                backgroundPosition: H.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: V
            } : {},
            Q = function({
                config: e,
                src: t,
                unoptimized: r,
                width: i,
                quality: o,
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
                            i = [];
                        for (let e; e = r.exec(n);) i.push(parseInt(e[2]));
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
                }(e, i, a), d = s.length - 1;
                return {
                    sizes: a || "w" !== u ? a : "100vw",
                    srcSet: s.map((r, n) => `${l({config:e,src:t,quality:o,width:r})} ${"w"===u?r:n+1}${u}`).join(", "),
                    src: l({
                        config: e,
                        src: t,
                        quality: o,
                        width: s[d]
                    })
                }
            }({
                config: k,
                src: e,
                unoptimized: r,
                width: B,
                quality: G,
                sizes: t,
                loader: N
            }),
            X = W ? "lazy" : c;
        return {
            props: {
                ...M,
                loading: X,
                fetchPriority: S,
                width: B,
                height: q,
                decoding: x,
                className: f,
                style: {
                    ...H,
                    ...J
                },
                sizes: Q.sizes,
                srcSet: Q.srcSet,
                src: b || Q.src
            },
            meta: {
                unoptimized: r,
                preload: d || u,
                placeholder: P,
                fill: m
            }
        }
    }
}, 890848, (e, t, r) => {
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return h
        },
        defaultHead: function() {
            return c
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let o = e.r(836437),
        a = e.r(56421),
        l = e.r(167358),
        s = a._(e.r(495056)),
        u = o._(e.r(636596)),
        d = e.r(715934);

    function c() {
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

    function g(e) {
        let t, r, n, i;
        return e.reduce(f, []).reverse().concat(c().reverse()).filter((t = new Set, r = new Set, n = new Set, i = {}, e => {
            let o = !0,
                a = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                a = !0;
                let r = e.key.slice(e.key.indexOf("$") + 1);
                t.has(r) ? o = !1 : t.add(r)
            }
            switch (e.type) {
                case "title":
                case "base":
                    r.has(e.type) ? o = !1 : r.add(e.type);
                    break;
                case "meta":
                    for (let t = 0, r = p.length; t < r; t++) {
                        let r = p[t];
                        if (e.props.hasOwnProperty(r))
                            if ("charSet" === r) n.has(r) ? o = !1 : n.add(r);
                            else {
                                let t = e.props[r],
                                    n = i[r] || new Set;
                                ("name" !== r || !a) && n.has(t) ? o = !1 : (n.add(t), i[r] = n)
                            }
                    }
            }
            return o
        })).reverse().map((e, t) => {
            let r = e.key || t;
            return s.default.cloneElement(e, {
                key: r
            })
        })
    }
    let h = function({
        children: e
    }) {
        let t = (0, s.useContext)(d.HeadManagerContext);
        return (0, l.jsx)(u.default, {
            reduceComponentsToState: g,
            headManager: t,
            children: e
        })
    };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 352416, (e, t, r) => {
    function n({
        widthInt: e,
        heightInt: t,
        blurWidth: r,
        blurHeight: i,
        blurDataURL: o,
        objectFit: a
    }) {
        let l = r ? 40 * r : e,
            s = i ? 40 * i : t,
            u = l && s ? `viewBox='0 0 ${l} ${s}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${u}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${o}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}, 973531, (e, t, r) => {
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(836437)._(e.r(495056)),
        i = e.r(899621),
        o = n.default.createContext(i.imageConfigDefault)
}, 899621, (e, t, r) => {
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        VALID_LOADERS: function() {
            return o
        },
        imageConfigDefault: function() {
            return u
        },
        prepareImageConfig: function() {
            return s
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let o = ["default", "imgix", "cloudinary", "akamai", "custom"],
        a = {},
        l = new WeakMap;

    function s(e, t) {
        let r = e ?? a,
            n = t ?? a,
            i = l.get(r);
        if (i) {
            let e = i.get(n);
            if (e) return e
        }
        let o = e || t || u,
            s = [...o.deviceSizes].sort((e, t) => e - t),
            d = [...o.imageSizes],
            c = {
                deviceSizes: s,
                imageSizes: d,
                allSizes: [...s, ...d].sort((e, t) => e - t),
                qualities: void 0 === o.qualities ? void 0 : [...o.qualities].sort((e, t) => e - t),
                path: o.path,
                loader: o.loader,
                dangerouslyAllowSVG: o.dangerouslyAllowSVG,
                unoptimized: o.unoptimized,
                domains: o.domains,
                remotePatterns: o.remotePatterns,
                localPatterns: "u" < typeof window && void 0 !== t ? t.localPatterns : o.localPatterns,
                output: o.output
            };
        return i || (i = new WeakMap, l.set(r, i)), i.set(n, c), c
    }
    let u = {
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
}, 466435, (e, t, r) => {
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = e.r(859075),
        i = e.r(418979);

    function o({
        config: e,
        src: t,
        width: r,
        quality: a
    }) {
        let l = (0, i.getDeploymentId)();
        if (t.startsWith("/") && !t.startsWith("//"))
            if (t.includes("/_next/static/immutable") && !(0, i.getAssetToken)()) l = void 0;
            else {
                let e = t.indexOf("?");
                if (-1 !== e) {
                    let r = new URLSearchParams(t.slice(e + 1)),
                        n = r.get("dpl");
                    if (n) {
                        l = n, r.delete("dpl");
                        let i = r.toString();
                        t = t.slice(0, e) + (i ? "?" + i : "")
                    }
                }
            } if (t.startsWith("/") && t.includes("?") && e.localPatterns?.length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search) throw Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`);
        let s = (0, n.findClosestQuality)(a, e);
        return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${s}${t.startsWith("/")&&l?`&dpl=${l}`:""}`
    }
    o.__next_img_default = !0;
    let a = o
}, 753470, (e, t, r) => {
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = (e.r(836437)._(e.r(495056))).default.createContext(null)
}, 941820, (e, t, r) => {
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        formatUrl: function() {
            return l
        },
        formatWithValidation: function() {
            return u
        },
        urlObjectKeys: function() {
            return s
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let o = e.r(56421)._(e.r(229092)),
        a = /https?|ftp|gopher|file/;

    function l(e) {
        let {
            auth: t,
            hostname: r
        } = e, n = e.protocol || "", i = e.pathname || "", l = e.hash || "", s = e.query || "", u = !1;
        t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? u = t + e.host : r && (u = t + (~r.indexOf(":") ? `[${r}]` : r), e.port && (u += ":" + e.port)), s && "object" == typeof s && (s = String(o.urlQueryToSearchParams(s)));
        let d = e.search || s && `?${s}` || "";
        return n && !n.endsWith(":") && (n += ":"), e.slashes || (!n || a.test(n)) && !1 !== u ? (u = "//" + (u || ""), i && "/" !== i[0] && (i = "/" + i)) : u || (u = ""), l && "#" !== l[0] && (l = "#" + l), d && "?" !== d[0] && (d = "?" + d), i = i.replace(/[?#]/g, encodeURIComponent), d = d.replace("#", "%23"), `${n}${u}${i}${d}${l}`
    }
    let s = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

    function u(e) {
        return l(e)
    }
}, 752786, (e, t, r) => {
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(574492),
        i = e.r(809337);

    function o(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
            let t = (0, n.getLocationOrigin)(),
                r = new URL(e, t);
            return r.origin === t && (0, i.hasBasePath)(r.pathname)
        } catch (e) {
            return !1
        }
    }
}, 636596, (e, t, r) => {
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let n = e.r(495056),
        i = "u" < typeof window,
        o = i ? () => {} : n.useLayoutEffect,
        a = i ? () => {} : n.useEffect;

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
        return i && (t?.mountedInstances?.add(e.children), l()), o(() => (t?.mountedInstances?.add(e.children), () => {
            t?.mountedInstances?.delete(e.children)
        })), o(() => (t && (t._pendingUpdate = l), () => {
            t && (t._pendingUpdate = l)
        })), a(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
            t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
        })), null
    }
}, 574492, (e, t, r) => {
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        DecodeError: function() {
            return y
        },
        MiddlewareNotFoundError: function() {
            return P
        },
        MissingStaticPage: function() {
            return w
        },
        NormalizeError: function() {
            return b
        },
        PageNotFoundError: function() {
            return v
        },
        SP: function() {
            return h
        },
        ST: function() {
            return m
        },
        WEB_VITALS: function() {
            return o
        },
        execOnce: function() {
            return a
        },
        getDisplayName: function() {
            return c
        },
        getLocationOrigin: function() {
            return u
        },
        getURL: function() {
            return d
        },
        isAbsoluteUrl: function() {
            return s
        },
        isResSent: function() {
            return f
        },
        loadGetInitialProps: function() {
            return g
        },
        normalizeRepeatedSlashes: function() {
            return p
        },
        stringifyError: function() {
            return _
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let o = ["CLS", "FCP", "INP", "LCP", "TTFB"];

    function a(e) {
        let t, r = !1;
        return (...n) => (r || (r = !0, t = e(...n)), t)
    }
    let l = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        s = e => {
            let t = e.charCodeAt(0);
            return !!(t >= 65 && t <= 90 || t >= 97 && t <= 122) && l.test(e)
        };

    function u() {
        let {
            protocol: e,
            hostname: t,
            port: r
        } = window.location;
        return `${e}//${t}${r?":"+r:""}`
    }

    function d() {
        let {
            href: e
        } = window.location, t = u();
        return e.substring(t.length)
    }

    function c(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
    }

    function f(e) {
        return e.finished || e.headersSent
    }

    function p(e) {
        let t = e.split("?");
        return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
    }
    async function g(e, t) {
        let r = t.res || t.ctx && t.ctx.res;
        if (!e.getInitialProps) return t.ctx && t.Component ? {
            pageProps: await g(t.Component, t.ctx)
        } : {};
        let n = await e.getInitialProps(t);
        if (r && f(r)) return n;
        if (!n) throw Error(`"${c(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`);
        return n
    }
    let h = "u" > typeof performance,
        m = h && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
    class y extends Error {}
    class b extends Error {}
    class v extends Error {
        constructor(e) {
            super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${e}`
        }
    }
    class w extends Error {
        constructor(e, t) {
            super(), this.message = `Failed to load static file for page: ${e} ${t}`
        }
    }
    class P extends Error {
        constructor() {
            super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
        }
    }

    function _(e) {
        return JSON.stringify({
            message: e.message,
            stack: e.stack
        })
    }
}, 718405, e => {
    let t = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        r = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);
    var n = e.i(771518),
        i = e.i(495056);
    let o = Symbol.for("react-aria.i18n.locale");

    function a() {
        let e = "u" > typeof window && window[o] || "u" > typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
            Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
            e = "en-US"
        }
        return {
            locale: e,
            direction: ! function(e) {
                if (Intl.Locale) {
                    let r = new Intl.Locale(e).maximize(),
                        n = "function" == typeof r.getTextInfo ? r.getTextInfo() : r.textInfo;
                    if (n) return "rtl" === n.direction;
                    if (r.script) return t.has(r.script)
                }
                let n = e.split("-")[0];
                return r.has(n)
            }(e) ? "ltr" : "rtl"
        }
    }
    let l = a(),
        s = new Set;

    function u() {
        for (let e of (l = a(), s)) e(l)
    }
    let d = i.default.createContext(null);
    e.s(["f", 0, function() {
        let e = function() {
            let e = (0, n.t)(),
                [t, r] = (0, i.useState)(l);
            return ((0, i.useEffect)(() => (0 === s.size && window.addEventListener("languagechange", u), s.add(r), () => {
                s.delete(r), 0 === s.size && window.removeEventListener("languagechange", u)
            }), []), e) ? {
                locale: "u" > typeof window && window[o] || "en-US",
                direction: "ltr"
            } : t
        }();
        return (0, i.useContext)(d) || e
    }], 718405)
}, 983183, 86423, 773562, 932078, e => {
    var t = e.i(81407);

    function r(e, r) {
        let {
            id: n,
            "aria-label": i,
            "aria-labelledby": o
        } = e;
        return n = (0, t.H)(n), o && i ? o = [...new Set([n, ...o.trim().split(/\s+/)])].join(" ") : o && (o = o.trim().split(/\s+/).join(" ")), i || o || !r || (i = r), {
            id: n,
            "aria-label": i,
            "aria-labelledby": o
        }
    }
    e.s(["f", 0, r], 86423), e.s(["f", 0, function(e) {
        let {
            id: n,
            label: i,
            "aria-labelledby": o,
            "aria-label": a,
            labelElementType: l = "label"
        } = e;
        n = (0, t.H)(n);
        let s = (0, t.H)(),
            u = {};
        return i && (o = o ? `${s} ${o}` : s, u = {
            id: s,
            htmlFor: "label" === l ? n : void 0
        }), {
            labelProps: u,
            fieldProps: r({
                id: n,
                "aria-label": a,
                "aria-labelledby": o
            })
        }
    }], 983183), e.s(["f", 0, function(e, t = -1 / 0, r = 1 / 0) {
        return Math.min(Math.max(e, t), r)
    }], 773562);
    let n = null;
    class i {
        constructor() {
            this.node = null, this.assertiveLog = null, this.politeLog = null, "u" > typeof document && (this.node = document.createElement("div"), this.node.dataset.liveAnnouncer = "true", Object.assign(this.node.style, {
                border: 0,
                clip: "rect(0 0 0 0)",
                clipPath: "inset(50%)",
                height: "1px",
                margin: "-1px",
                overflow: "hidden",
                padding: 0,
                position: "absolute",
                width: "1px",
                whiteSpace: "nowrap"
            }), this.assertiveLog = this.createLog("assertive"), this.node.appendChild(this.assertiveLog), this.politeLog = this.createLog("polite"), this.node.appendChild(this.politeLog), document.body.prepend(this.node))
        }
        isAttached() {
            return this.node?.isConnected
        }
        createLog(e) {
            let t = document.createElement("div");
            return t.setAttribute("role", "log"), t.setAttribute("aria-live", e), t.setAttribute("aria-relevant", "additions"), t
        }
        destroy() {
            this.node && (document.body.removeChild(this.node), this.node = null)
        }
        announce(e, t = "assertive", r = 7e3) {
            if (!this.node) return;
            let n = document.createElement("div");
            "object" == typeof e ? (n.setAttribute("role", "img"), n.setAttribute("aria-labelledby", e["aria-labelledby"])) : n.textContent = e, "assertive" === t ? this.assertiveLog?.appendChild(n) : this.politeLog?.appendChild(n), "" !== e && setTimeout(() => {
                n.remove()
            }, r)
        }
        clear(e) {
            this.node && ((!e || "assertive" === e) && this.assertiveLog && (this.assertiveLog.innerHTML = ""), (!e || "polite" === e) && this.politeLog && (this.politeLog.innerHTML = ""))
        }
    }
    e.s(["f", 0, function(e, t = "assertive", r = 7e3) {
        n ? n.announce(e, t, r) : (n = new i, ("boolean" == typeof IS_REACT_ACT_ENVIRONMENT ? IS_REACT_ACT_ENVIRONMENT : "u" > typeof jest) ? n.announce(e, t, r) : setTimeout(() => {
            n?.isAttached() && n?.announce(e, t, r)
        }, 100))
    }], 932078)
}, 124993, e => {
    var t = e.i(361610),
        r = e.i(372072),
        n = e.i(996471),
        i = e.i(835349),
        o = e.i(837345);
    e.s(["f", 0, function(e, a) {
        let {
            elementType: l = "a",
            onPress: s,
            onPressStart: u,
            onPressEnd: d,
            onClick: c,
            isDisabled: f,
            ...p
        } = e, g = {};
        "a" !== l && (g = {
            role: "link",
            tabIndex: f ? void 0 : 0
        });
        let {
            focusableProps: h
        } = (0, i.F)(e, a), {
            pressProps: m,
            isPressed: y
        } = (0, o.f)({
            onPress: s,
            onPressStart: u,
            onPressEnd: d,
            onClick: c,
            isDisabled: f,
            ref: a
        }), b = (0, t.f)(p, {
            labelable: !0
        }), v = (0, n.f)(h, m), w = (0, r.U)(), P = (0, r.J)(e);
        return {
            isPressed: y,
            linkProps: (0, n.f)(b, P, {
                ...v,
                ...g,
                "aria-disabled": f || void 0,
                "aria-current": e["aria-current"],
                onClick: t => {
                    m.onClick?.(t), (0, r.x)(t, w, e.href, e.routerOptions)
                }
            })
        }
    }])
}], 149168, (e, t, r) => {
    t.exports = e.r(858887)
}]);

//# debugId=ce8a6a22-0ef4-3d6b-4109-76e983cf837c