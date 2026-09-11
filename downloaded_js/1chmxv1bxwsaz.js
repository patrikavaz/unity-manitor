(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 570606, e => {
    "use strict";
    var t, n, r = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        i = (t = function(e) {
            return r.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && 91 > e.charCodeAt(2)
        }, n = Object.create(null), function(e) {
            return void 0 === n[e] && (n[e] = t(e)), n[e]
        });
    e.s(["default", 0, i], 570606)
}, 305892, e => {
    "use strict";
    var t = e.i(785328),
        n = e.i(409781),
        r = e.i(731268),
        i = e.i(626022);

    function o(e) {
        return "function" == typeof e
    }
    e.s(["LazyMotion", 0, function({
        children: e,
        features: s,
        strict: a = !1
    }) {
        let [, l] = (0, n.useState)(!o(s)), u = (0, n.useRef)(void 0);
        if (!o(s)) {
            let {
                renderer: e,
                ...t
            } = s;
            u.current = e, (0, i.loadFeatures)(t)
        }
        return (0, n.useEffect)(() => {
            o(s) && s().then(({
                renderer: e,
                ...t
            }) => {
                (0, i.loadFeatures)(t), u.current = e, l(!0)
            })
        }, []), (0, t.jsx)(r.LazyContext.Provider, {
            value: {
                renderer: u.current,
                strict: a
            },
            children: e
        })
    }])
}, 731268, e => {
    "use strict";
    let t = (0, e.i(409781).createContext)({
        strict: !1
    });
    e.s(["LazyContext", 0, t])
}, 481522, e => {
    "use strict";
    let t = (0, e.i(409781).createContext)({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    });
    e.s(["MotionConfigContext", 0, t])
}, 428483, 466327, 668087, 297953, 782555, 246373, e => {
    "use strict";
    var t, n = e.i(409781);
    let r = (0, n.createContext)({});
    e.s(["MotionContext", 0, r], 428483);
    var i = e.i(587377),
        o = e.i(653425);

    function s(e) {
        return Array.isArray(e) ? e.join(" ") : e
    }
    e.s(["useCreateMotionContext", 0, function(e) {
        let {
            initial: t,
            animate: a
        } = function(e, t) {
            if ((0, i.isControllingVariants)(e)) {
                let {
                    initial: t,
                    animate: n
                } = e;
                return {
                    initial: !1 === t || (0, o.isVariantLabel)(t) ? t : void 0,
                    animate: (0, o.isVariantLabel)(n) ? n : void 0
                }
            }
            return !1 !== e.inherit ? t : {}
        }(e, (0, n.useContext)(r));
        return (0, n.useMemo)(() => ({
            initial: t,
            animate: a
        }), [s(t), s(a)])
    }], 466327);
    var a = e.i(140926),
        l = e.i(880925),
        u = e.i(493559);
    let c = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    });

    function d(e, t, n) {
        for (let r in t)(0, a.isMotionValue)(t[r]) || (0, l.isForcedMotionValue)(r, n) || (e[r] = t[r])
    }
    e.s(["createHtmlRenderState", 0, c], 668087);
    var p = e.i(734225),
        f = e.i(997214);
    let m = () => ({
        ...c(),
        attrs: {}
    });
    e.s(["createSvgRenderState", 0, m], 297953);
    let g = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);

    function h(e) {
        return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || g.has(e)
    }
    let v = e => !h(e);
    try {
        t = e.r(570606).default, "function" == typeof t && (v = e => e.startsWith("on") ? !h(e) : t(e))
    } catch {}
    var y = e.i(737328);
    e.s(["useRender", 0, function(e, t, r, {
        latestValues: i
    }, o, s = !1, l) {
        let g = (l ?? (0, y.isSVGComponent)(e) ? function(e, t, r, i) {
                let o = (0, n.useMemo)(() => {
                    let n = m();
                    return (0, p.buildSVGAttrs)(n, t, (0, f.isSVGTag)(i), e.transformTemplate, e.style), {
                        ...n.attrs,
                        style: {
                            ...n.style
                        }
                    }
                }, [t]);
                if (e.style) {
                    let t = {};
                    d(t, e.style, e), o.style = {
                        ...t,
                        ...o.style
                    }
                }
                return o
            } : function(e, t) {
                let r, i, o = {},
                    s = (r = e.style || {}, d(i = {}, r, e), Object.assign(i, function({
                        transformTemplate: e
                    }, t) {
                        return (0, n.useMemo)(() => {
                            let n = c();
                            return (0, u.buildHTMLStyles)(n, t, e), Object.assign({}, n.vars, n.style)
                        }, [t])
                    }(e, t)), i);
                return e.drag && !1 !== e.dragListener && (o.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = !0 === e.drag ? "none" : `pan-${"x"===e.drag?"y":"x"}`), void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (o.tabIndex = 0), o.style = s, o
            })(t, i, o, e),
            b = function(e, t, n) {
                let r = {};
                for (let i in e)("values" !== i || "object" != typeof e.values) && !(0, a.isMotionValue)(e[i]) && (v(i) || !0 === n && h(i) || !t && !h(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
                return r
            }(t, "string" == typeof e, s),
            P = e !== n.Fragment ? {
                ...b,
                ...g,
                ref: r
            } : {},
            {
                children: w
            } = t,
            E = (0, n.useMemo)(() => (0, a.isMotionValue)(w) ? w.get() : w, [w]);
        return (0, n.createElement)(e, {
            ...P,
            children: E
        })
    }], 782555);
    var b = e.i(268162);
    e.s(["scrapeHTMLMotionValuesFromProps", () => b.scrapeMotionValuesFromProps], 246373)
}, 855096, 230548, 442647, 626022, 730324, 989867, e => {
    "use strict";
    var t = e.i(246373),
        n = e.i(766438),
        r = e.i(587377),
        i = e.i(819673),
        o = e.i(923792),
        s = e.i(409781),
        a = e.i(428483),
        l = e.i(820847),
        u = e.i(416007);
    let c = e => (t, c) => {
        let d = (0, s.useContext)(a.MotionContext),
            p = (0, s.useContext)(l.PresenceContext),
            f = () => (function({
                scrapeMotionValuesFromProps: e,
                createRenderState: t
            }, s, a, l) {
                return {
                    latestValues: function(e, t, s, a) {
                        let l = {},
                            u = a(e, {});
                        for (let e in u) l[e] = (0, n.resolveMotionValue)(u[e]);
                        let {
                            initial: c,
                            animate: d
                        } = e, p = (0, r.isControllingVariants)(e), f = (0, r.isVariantNode)(e);
                        t && f && !p && !1 !== e.inherit && (void 0 === c && (c = t.initial), void 0 === d && (d = t.animate));
                        let m = !!s && !1 === s.initial,
                            g = (m = m || !1 === c) ? d : c;
                        if (g && "boolean" != typeof g && !(0, i.isAnimationControls)(g)) {
                            let t = Array.isArray(g) ? g : [g];
                            for (let n = 0; n < t.length; n++) {
                                let r = (0, o.resolveVariantFromProps)(e, t[n]);
                                if (r) {
                                    let {
                                        transitionEnd: e,
                                        transition: t,
                                        ...n
                                    } = r;
                                    for (let e in n) {
                                        let t = n[e];
                                        if (Array.isArray(t)) {
                                            let e = m ? t.length - 1 : 0;
                                            t = t[e]
                                        }
                                        null !== t && (l[e] = t)
                                    }
                                    for (let t in e) l[t] = e[t]
                                }
                            }
                        }
                        return l
                    }(s, a, l, e),
                    renderState: t()
                }
            })(e, t, d, p);
        return c ? f() : (0, u.useConstant)(f)
    };
    var d = e.i(668087);
    let p = c({
        scrapeMotionValuesFromProps: t.scrapeHTMLMotionValuesFromProps,
        createRenderState: d.createHtmlRenderState
    });
    e.s(["useHTMLVisualState", 0, p], 855096);
    var f = e.i(185747),
        f = f,
        m = e.i(297953);
    let g = c({
        scrapeMotionValuesFromProps: f.scrapeMotionValuesFromProps,
        createRenderState: m.createSvgRenderState
    });
    e.s(["useSVGVisualState", 0, g], 230548);
    var h = e.i(453311);
    let v = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        },
        y = !1;

    function b() {
        return ! function() {
            if (y) return;
            let e = {};
            for (let t in v) e[t] = {
                isEnabled: e => v[t].some(t => !!e[t])
            };
            (0, h.setFeatureDefinitions)(e), y = !0
        }(), (0, h.getFeatureDefinitions)()
    }
    e.s(["getInitializedFeatureDefinitions", 0, b], 442647), e.s(["loadFeatures", 0, function(e) {
        let t = b();
        for (let n in e) t[n] = {
            ...t[n],
            ...e[n]
        };
        (0, h.setFeatureDefinitions)(t)
    }], 626022);
    let P = Symbol.for("motionComponentSymbol");
    e.s(["motionComponentSymbol", 0, P], 730324), e.s(["useMotionRef", 0, function(e, t, n) {
        let r = (0, s.useRef)(n);
        (0, s.useInsertionEffect)(() => {
            r.current = n
        });
        let i = (0, s.useRef)(null);
        return (0, s.useCallback)(n => {
            n && e.onMount?.(n), t && (n ? t.mount(n) : t.unmount());
            let o = r.current;
            if ("function" == typeof o)
                if (n) {
                    let e = o(n);
                    "function" == typeof e && (i.current = e)
                } else i.current ? (i.current(), i.current = null) : o(n);
            else o && (o.current = n)
        }, [t])
    }], 989867)
}, 416007, e => {
    "use strict";
    var t = e.i(409781);
    e.s(["useConstant", 0, function(e) {
        let n = (0, t.useRef)(null);
        return null === n.current && (n.current = e()), n.current
    }])
}, 809018, e => {
    "use strict";
    var t = e.i(409781);
    let n = "u" > typeof window ? t.useLayoutEffect : t.useEffect;
    e.s(["useIsomorphicLayoutEffect", 0, n], 809018)
}, 494004, 876009, e => {
    "use strict";
    let t = {
            current: null
        },
        n = {
            current: !1
        };
    e.s(["hasReducedMotionListener", 0, n, "prefersReducedMotion", 0, t], 876009);
    let r = "u" > typeof window;
    e.s(["initPrefersReducedMotion", 0, function() {
        if (n.current = !0, r)
            if (window.matchMedia) {
                let e = window.matchMedia("(prefers-reduced-motion)"),
                    n = () => t.current = e.matches;
                e.addEventListener("change", n), n()
            } else t.current = !1
    }], 494004)
}, 513038, e => {
    "use strict";
    e.s(["resolveElements", 0, function(e, t, n) {
        if (null == e) return [];
        if (e instanceof EventTarget) return [e];
        if ("string" == typeof e) {
            let r = document;
            t && (r = t.current);
            let i = n?.[e] ?? r.querySelectorAll(e);
            return i ? Array.from(i) : []
        }
        return Array.from(e).filter(e => null != e)
    }])
}, 926993, 319623, e => {
    "use strict";
    var t = e.i(296305),
        n = e.i(785328),
        r = e.i(409781),
        i = e.i(963864),
        o = e.i(731268),
        s = e.i(481522),
        a = e.i(428483),
        l = e.i(466327),
        u = e.i(782555),
        c = e.i(737328),
        d = e.i(855096),
        p = e.i(230548),
        f = e.i(442647),
        m = e.i(626022),
        g = e.i(730324),
        h = e.i(989867),
        v = e.i(182526),
        y = e.i(820847),
        b = e.i(210907),
        P = e.i(112366),
        w = e.i(809018);

    function E(e, {
        forwardMotionProps: t = !1,
        type: M
    } = {}, S, C) {
        S && (0, m.loadFeatures)(S);
        let k = M ? "svg" === M : (0, c.isSVGComponent)(e),
            A = k ? p.useSVGVisualState : d.useHTMLVisualState;

        function L(c, d) {
            let p, m = {
                    ...(0, r.useContext)(s.MotionConfigContext),
                    ...c,
                    layoutId: function({
                        layoutId: e
                    }) {
                        let t = (0, r.useContext)(i.LayoutGroupContext).id;
                        return t && void 0 !== e ? t + "-" + e : e
                    }(c)
                },
                {
                    isStatic: g
                } = m,
                E = (0, l.useCreateMotionContext)(c),
                M = A(c, g);
            if (!g && "u" > typeof window) {
                (0, r.useContext)(o.LazyContext).strict;
                let t = function(e) {
                    let {
                        drag: t,
                        layout: n
                    } = (0, f.getInitializedFeatureDefinitions)();
                    if (!t && !n) return {};
                    let r = {
                        ...t,
                        ...n
                    };
                    return {
                        MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
                        ProjectionNode: r.ProjectionNode
                    }
                }(m);
                p = t.MeasureLayout, E.visualElement = function(e, t, n, i, l, u) {
                    let {
                        visualElement: c
                    } = (0, r.useContext)(a.MotionContext), d = (0, r.useContext)(o.LazyContext), p = (0, r.useContext)(y.PresenceContext), f = (0, r.useContext)(s.MotionConfigContext), m = f.reducedMotion, g = f.skipAnimations, h = (0, r.useRef)(null), E = (0, r.useRef)(!1);
                    i = i || d.renderer, !h.current && i && (h.current = i(e, {
                        visualState: t,
                        parent: c,
                        props: n,
                        presenceContext: p,
                        blockInitialAnimation: !!p && !1 === p.initial,
                        reducedMotionConfig: m,
                        skipAnimations: g,
                        isSVG: u
                    }), E.current && h.current && (h.current.manuallyAnimateOnMount = !0));
                    let M = h.current,
                        S = (0, r.useContext)(b.SwitchLayoutGroupContext);
                    M && !M.projection && l && ("html" === M.type || "svg" === M.type) && function(e, t, n, r) {
                        let {
                            layoutId: i,
                            layout: o,
                            drag: s,
                            dragConstraints: a,
                            layoutScroll: l,
                            layoutRoot: u,
                            layoutAnchor: c,
                            layoutCrossfade: d
                        } = t;
                        e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : function e(t) {
                            if (t) return !1 !== t.options.allowProjection ? t.projection : e(t.parent)
                        }(e.parent)), e.projection.setOptions({
                            layoutId: i,
                            layout: o,
                            alwaysMeasureLayout: !!s || a && (0, P.isRefObject)(a),
                            visualElement: e,
                            animationType: "string" == typeof o ? o : "both",
                            initialPromotionConfig: r,
                            crossfade: d,
                            layoutScroll: l,
                            layoutRoot: u,
                            layoutAnchor: c
                        })
                    }(h.current, n, l, S);
                    let C = (0, r.useRef)(!1);
                    (0, r.useInsertionEffect)(() => {
                        M && C.current && M.update(n, p)
                    });
                    let k = n[v.optimizedAppearDataAttribute],
                        A = (0, r.useRef)(!!k && "u" > typeof window && !window.MotionHandoffIsComplete?.(k) && window.MotionHasOptimisedAnimation?.(k));
                    return (0, w.useIsomorphicLayoutEffect)(() => {
                        E.current = !0, M && (C.current = !0, window.MotionIsMounted = !0, M.updateFeatures(), M.scheduleRenderMicrotask(), A.current && M.animationState && M.animationState.animateChanges())
                    }), (0, r.useEffect)(() => {
                        M && (!A.current && M.animationState && M.animationState.animateChanges(), A.current && (queueMicrotask(() => {
                            window.MotionHandoffMarkAsComplete?.(k)
                        }), A.current = !1), M.enteringChildren = void 0)
                    }), M
                }(e, M, m, C, t.ProjectionNode, k)
            }
            return (0, n.jsxs)(a.MotionContext.Provider, {
                value: E,
                children: [p && E.visualElement ? (0, n.jsx)(p, {
                    visualElement: E.visualElement,
                    ...m
                }) : null, (0, u.useRender)(e, c, (0, h.useMotionRef)(M, E.visualElement, d), M, g, t, k)]
            })
        }
        L.displayName = `motion.${"string"==typeof e?e:`create(${e.displayName??e.name??""})`}`;
        let x = (0, r.forwardRef)(L);
        return x[g.motionComponentSymbol] = e, x
    }

    function M(e, t) {
        if ("u" < typeof Proxy) return E;
        let n = new Map,
            r = (n, r) => E(n, r, e, t);
        return new Proxy((e, t) => r(e, t), {
            get: (i, o) => "create" === o ? r : (n.has(o) || n.set(o, E(o, void 0, e, t)), n.get(o))
        })
    }
    e.s(["createMotionComponent", 0, E], 319623);
    var S = e.i(263422),
        C = e.i(948395),
        k = e.i(159313),
        A = e.i(596995);
    let L = M({
            ...S.animations,
            ...k.gestureAnimations,
            ...C.drag,
            ...A.layout
        }, t.createDomVisualElement),
        x = M();
    e.s(["m", 0, x, "motion", 0, L], 926993)
}, 501427, e => {
    "use strict";
    let t;
    var n = e.i(876728);
    let r = Symbol.for("react-aria.i18n.locale"),
        i = Symbol.for("react-aria.i18n.strings");
    class o {
        constructor(e, t = "en-US") {
            this.strings = Object.fromEntries(Object.entries(e).filter(([, e]) => e)), this.defaultLocale = t
        }
        getStringForLocale(e, t) {
            let n = this.getStringsForLocale(t)[e];
            if (!n) throw Error(`Could not find intl message ${e} in ${t} locale`);
            return n
        }
        getStringsForLocale(e) {
            let t = this.strings[e];
            return t || (t = function(e, t, n = "en-US") {
                var r;
                if (t[e]) return t[e];
                let i = (r = e, Intl.Locale ? new Intl.Locale(r).language : r.split("-")[0]);
                if (t[i]) return t[i];
                for (let e in t)
                    if (e.startsWith(i + "-")) return t[e];
                return t[n]
            }(e, this.strings, this.defaultLocale), this.strings[e] = t), t
        }
        static getGlobalDictionaryForPackage(e) {
            if ("u" < typeof window) return null;
            let n = window[r];
            if (void 0 === t) {
                let e = window[i];
                if (!e) return null;
                for (let r in t = {}, e) t[r] = new o({
                    [n]: e[r]
                }, n)
            }
            let s = t?.[e];
            if (!s) throw Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
            return s
        }
    }
    let s = new Map,
        a = new Map;
    class l {
        constructor(e, t) {
            this.locale = e, this.strings = t
        }
        format(e, t) {
            let n = this.strings.getStringForLocale(e, this.locale);
            return "function" == typeof n ? n(t, this) : n
        }
        plural(e, t, n = "cardinal") {
            let r = t["=" + e];
            if (r) return "function" == typeof r ? r() : r;
            let i = this.locale + ":" + n,
                o = s.get(i);
            return o || (o = new Intl.PluralRules(this.locale, {
                type: n
            }), s.set(i, o)), "function" == typeof(r = t[o.select(e)] || t.other) ? r() : r
        }
        number(e) {
            let t = a.get(this.locale);
            return t || (t = new Intl.NumberFormat(this.locale), a.set(this.locale, t)), t.format(e)
        }
        select(e, t) {
            let n = e[t] || e.other;
            return "function" == typeof n ? n() : n
        }
    }
    var u = e.i(409781);
    let c = new WeakMap;
    e.s(["useLocalizedStringFormatter", 0, function(e, t) {
        let r, {
                locale: i
            } = (0, n.useLocale)(),
            s = t && o.getGlobalDictionaryForPackage(t) || ((r = c.get(e)) || (r = new o(e), c.set(e, r)), r);
        return (0, u.useMemo)(() => new l(i, s), [i, s])
    }], 501427)
}, 629080, e => {
    "use strict";
    var t = e.i(259457),
        n = {};
    n = {
        "ar-AE": {
            longPressMessage: "اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة"
        },
        "bg-BG": {
            longPressMessage: "Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто"
        },
        "cs-CZ": {
            longPressMessage: "Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku"
        },
        "da-DK": {
            longPressMessage: "Langt tryk eller tryk på Alt + pil ned for at åbne menuen"
        },
        "de-DE": {
            longPressMessage: "Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen"
        },
        "el-GR": {
            longPressMessage: "Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού"
        },
        "en-US": {
            longPressMessage: "Long press or press Alt + ArrowDown to open menu"
        },
        "es-ES": {
            longPressMessage: "Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú"
        },
        "et-EE": {
            longPressMessage: "Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool"
        },
        "fi-FI": {
            longPressMessage: "Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli"
        },
        "fr-FR": {
            longPressMessage: "Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu."
        },
        "he-IL": {
            longPressMessage: "לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט"
        },
        "hr-HR": {
            longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"
        },
        "hu-HU": {
            longPressMessage: "Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához"
        },
        "it-IT": {
            longPressMessage: "Premi a lungo o premi Alt + Freccia giù per aprire il menu"
        },
        "ja-JP": {
            longPressMessage: "長押しまたは Alt+下矢印キーでメニューを開く"
        },
        "ko-KR": {
            longPressMessage: "길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기"
        },
        "lt-LT": {
            longPressMessage: "Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“."
        },
        "lv-LV": {
            longPressMessage: "Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa"
        },
        "nb-NO": {
            longPressMessage: "Langt trykk eller trykk Alt + PilNed for å åpne menyen"
        },
        "nl-NL": {
            longPressMessage: "Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"
        },
        "pl-PL": {
            longPressMessage: "Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu"
        },
        "pt-BR": {
            longPressMessage: "Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"
        },
        "pt-PT": {
            longPressMessage: "Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"
        },
        "ro-RO": {
            longPressMessage: "Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul"
        },
        "ru-RU": {
            longPressMessage: "Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню"
        },
        "sk-SK": {
            longPressMessage: "Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol"
        },
        "sl-SI": {
            longPressMessage: "Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol"
        },
        "sr-SP": {
            longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"
        },
        "sv-SE": {
            longPressMessage: "Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn"
        },
        "tr-TR": {
            longPressMessage: "Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın"
        },
        "uk-UA": {
            longPressMessage: "Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню"
        },
        "zh-CN": {
            longPressMessage: "长按或按 Alt + 向下方向键以打开菜单"
        },
        "zh-TW": {
            longPressMessage: "長按或按 Alt+向下鍵以開啟功能表"
        }
    };
    var r = e.i(823512),
        i = e.i(501427),
        o = e.i(720728),
        s = e.i(468689);
    e.s(["useMenuTrigger", 0, function(e, a, l) {
        var u;
        let {
            type: c = "menu",
            isDisabled: d,
            trigger: p = "press"
        } = e, f = (0, r.useId)(), {
            triggerProps: m,
            overlayProps: g
        } = (0, s.useOverlayTrigger)({
            type: c
        }, a, l), h = (0, i.useLocalizedStringFormatter)((u = n) && u.__esModule ? u.default : u, "@react-aria/menu"), {
            longPressProps: v
        } = (0, o.useLongPress)({
            isDisabled: d || "longPress" !== p,
            accessibilityDescription: h.format("longPressMessage"),
            onLongPressStart() {
                a.close()
            },
            onLongPress() {
                a.open("first")
            }
        });
        return delete m.onPress, {
            menuTriggerProps: {
                ...m,
                ..."press" === p ? {
                    preventFocusOnPress: !0,
                    onPressStart(e) {
                        "touch" === e.pointerType || "keyboard" === e.pointerType || d || ((0, t.focusWithoutScrolling)(e.target), a.open("virtual" === e.pointerType ? "first" : null))
                    },
                    onPress(e) {
                        "touch" !== e.pointerType || d || ((0, t.focusWithoutScrolling)(e.target), a.toggle())
                    }
                } : v,
                id: f,
                onKeyDown: e => {
                    if (!d && ("longPress" !== p || e.altKey) && l && l.current) switch (e.key) {
                        case "Enter":
                        case " ":
                            if ("longPress" === p || e.isDefaultPrevented()) return;
                        case "ArrowDown":
                            "continuePropagation" in e || e.stopPropagation(), e.preventDefault(), a.toggle("first");
                            break;
                        case "ArrowUp":
                            "continuePropagation" in e || e.stopPropagation(), e.preventDefault(), a.toggle("last");
                            break;
                        default:
                            "continuePropagation" in e && e.continuePropagation()
                    }
                }
            },
            menuProps: {
                ...g,
                "aria-labelledby": f,
                autoFocus: a.focusStrategy || !0,
                onClose: a.close
            }
        }
    }], 629080)
}, 672451, e => {
    "use strict";
    var t = {};
    t = {
        "ar-AE": {
            dismiss: "تجاهل"
        },
        "bg-BG": {
            dismiss: "Отхвърляне"
        },
        "cs-CZ": {
            dismiss: "Odstranit"
        },
        "da-DK": {
            dismiss: "Luk"
        },
        "de-DE": {
            dismiss: "Schließen"
        },
        "el-GR": {
            dismiss: "Απόρριψη"
        },
        "en-US": {
            dismiss: "Dismiss"
        },
        "es-ES": {
            dismiss: "Descartar"
        },
        "et-EE": {
            dismiss: "Lõpeta"
        },
        "fi-FI": {
            dismiss: "Hylkää"
        },
        "fr-FR": {
            dismiss: "Rejeter"
        },
        "he-IL": {
            dismiss: "התעלם"
        },
        "hr-HR": {
            dismiss: "Odbaci"
        },
        "hu-HU": {
            dismiss: "Elutasítás"
        },
        "it-IT": {
            dismiss: "Ignora"
        },
        "ja-JP": {
            dismiss: "閉じる"
        },
        "ko-KR": {
            dismiss: "무시"
        },
        "lt-LT": {
            dismiss: "Atmesti"
        },
        "lv-LV": {
            dismiss: "Nerādīt"
        },
        "nb-NO": {
            dismiss: "Lukk"
        },
        "nl-NL": {
            dismiss: "Negeren"
        },
        "pl-PL": {
            dismiss: "Zignoruj"
        },
        "pt-BR": {
            dismiss: "Descartar"
        },
        "pt-PT": {
            dismiss: "Dispensar"
        },
        "ro-RO": {
            dismiss: "Revocare"
        },
        "ru-RU": {
            dismiss: "Пропустить"
        },
        "sk-SK": {
            dismiss: "Zrušiť"
        },
        "sl-SI": {
            dismiss: "Opusti"
        },
        "sr-SP": {
            dismiss: "Odbaci"
        },
        "sv-SE": {
            dismiss: "Avvisa"
        },
        "tr-TR": {
            dismiss: "Kapat"
        },
        "uk-UA": {
            dismiss: "Скасувати"
        },
        "zh-CN": {
            dismiss: "取消"
        },
        "zh-TW": {
            dismiss: "關閉"
        }
    };
    var n = e.i(270170),
        r = e.i(501427),
        i = e.i(458229),
        o = e.i(409781);
    e.s(["DismissButton", 0, function(e) {
        var s;
        let {
            onDismiss: a,
            ...l
        } = e, u = (0, r.useLocalizedStringFormatter)((s = t) && s.__esModule ? s.default : s, "@react-aria/overlays"), c = (0, n.useLabels)(l, u.format("dismiss"));
        return o.default.createElement(i.VisuallyHidden, null, o.default.createElement("button", {
            ...c,
            tabIndex: -1,
            onClick: () => {
                a && a()
            },
            style: {
                width: 1,
                height: 1
            }
        }))
    }], 672451)
}, 513976, 686355, e => {
    "use strict";
    var t = e.i(429305),
        n = e.i(58824),
        r = e.i(838031),
        i = e.i(996980),
        o = e.i(409781);
    let s = o.default.forwardRef(({
        children: e,
        ...s
    }, a) => {
        let l = (0, o.useRef)(!1),
            u = (0, o.useContext)(n.PressResponderContext),
            c = (0, t.mergeProps)(u || {}, {
                ...s,
                register() {
                    l.current = !0, u && u.register()
                }
            });
        return c.ref = (0, r.useObjectRef)(a || u?.ref), (0, i.useSyncRef)(u, c.ref), (0, o.useEffect)(() => {
            l.current || (l.current = !0)
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
    e.s(["ClearPressResponder", 0, a, "PressResponder", 0, s], 686355);
    var l = e.i(675815),
        u = e.i(726103),
        c = e.i(185559),
        d = e.i(852120),
        p = e.i(42246);
    let f = o.default.createContext(null);
    e.s(["Overlay", 0, function(e) {
        let t = (0, u.useIsSSR)(),
            {
                portalContainer: n = t ? null : document.body,
                isExiting: r
            } = e,
            [i, s] = (0, o.useState)(!1),
            c = (0, o.useMemo)(() => ({
                contain: i,
                setContain: s
            }), [i, s]),
            {
                getContainer: m
            } = (0, d.useUNSAFE_PortalContext)();
        if (!e.portalContainer && m && (n = m()), !n) return null;
        let g = e.children;
        return e.disableFocusManagement || (g = o.default.createElement(l.FocusScope, {
            restoreFocus: !0,
            contain: (e.shouldContainFocus || i) && !r
        }, g)), g = o.default.createElement(f.Provider, {
            value: c
        }, o.default.createElement(a, null, g)), p.default.createPortal(g, n)
    }, "useOverlayFocusContain", 0, function() {
        let e = (0, o.useContext)(f),
            t = e?.setContain;
        (0, c.useLayoutEffect)(() => {
            t?.(!0)
        }, [t])
    }], 513976)
}, 666747, 419476, 690910, e => {
    "use strict";
    let t;
    var n = e.i(193777),
        r = e.i(575414),
        i = e.i(776050),
        o = e.i(950011);
    let s = "u" > typeof HTMLElement && "inert" in HTMLElement.prototype;

    function a(e) {
        return "true" === e.dataset.liveAnnouncer || void 0 !== e.dataset.reactAriaTopLayer
    }
    let l = new WeakMap,
        u = [];
    e.s(["ariaHideOutside", 0, function(e, t) {
        let c = (0, r.getOwnerWindow)(e?.[0]),
            d = t instanceof c.Element ? {
                root: t
            } : t,
            p = d?.root ?? document.body,
            f = d?.shouldUseInert && s,
            m = new Set(e),
            g = new Set,
            h = (e, t) => {
                f && e instanceof c.HTMLElement ? e.inert = t : t ? e.setAttribute("aria-hidden", "true") : (e.removeAttribute("aria-hidden"), e instanceof c.HTMLElement && (e.inert = !1))
            },
            v = new Set;
        if ((0, o.shadowDOM)())
            for (let t of e) {
                let e = t;
                for (; e && e !== p;) {
                    let t = e.getRootNode();
                    "shadowRoot" in t && v.add(t.shadowRoot), e = t.parentNode
                }
            }
        let y = e => {
                for (let t of e.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]")) m.add(t);
                let t = e => {
                        if (g.has(e) || m.has(e) || e.parentElement && g.has(e.parentElement) && "row" !== e.parentElement.getAttribute("role")) return NodeFilter.FILTER_REJECT;
                        for (let t of m)
                            if ((0, i.nodeContains)(e, t)) return NodeFilter.FILTER_SKIP;
                        return NodeFilter.FILTER_ACCEPT
                    },
                    o = (0, n.createShadowTreeWalker)((0, r.getOwnerDocument)(e), e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: t
                    }),
                    s = t(e);
                if (s === NodeFilter.FILTER_ACCEPT && b(e), s !== NodeFilter.FILTER_REJECT) {
                    let e = o.nextNode();
                    for (; null != e;) b(e), e = o.nextNode()
                }
            },
            b = e => {
                let t = l.get(e) ?? 0;
                (f && e instanceof c.HTMLElement ? e.inert : "true" === e.getAttribute("aria-hidden")) && 0 === t || (0 === t && h(e, !0), g.add(e), l.set(e, t + 1))
            };
        u.length && u[u.length - 1].disconnect(), y(p);
        let P = new MutationObserver(e => {
            for (let t of e)
                if ("childList" === t.type) {
                    if (t.target.isConnected && ![...m, ...g].some(e => (0, i.nodeContains)(e, t.target)))
                        for (let e of t.addedNodes)(e instanceof HTMLElement || e instanceof SVGElement) && a(e) ? m.add(e) : e instanceof Element && y(e);
                    if ((0, o.shadowDOM)()) {
                        for (let e of v)
                            if (!e.isConnected) {
                                P.disconnect();
                                break
                            }
                    }
                }
        });
        P.observe(p, {
            childList: !0,
            subtree: !0
        });
        let w = new Set;
        if ((0, o.shadowDOM)())
            for (let e of v) {
                let t = new MutationObserver(e => {
                    for (let t of e)
                        if ("childList" === t.type) {
                            if (t.target.isConnected && ![...m, ...g].some(e => (0, i.nodeContains)(e, t.target)))
                                for (let e of t.addedNodes)(e instanceof HTMLElement || e instanceof SVGElement) && a(e) ? m.add(e) : e instanceof Element && y(e);
                            if ((0, o.shadowDOM)()) {
                                for (let e of v)
                                    if (!e.isConnected) {
                                        P.disconnect();
                                        break
                                    }
                            }
                        }
                });
                t.observe(e, {
                    childList: !0,
                    subtree: !0
                }), w.add(t)
            }
        let E = {
            visibleNodes: m,
            hiddenNodes: g,
            observe() {
                P.observe(p, {
                    childList: !0,
                    subtree: !0
                })
            },
            disconnect() {
                P.disconnect()
            }
        };
        return u.push(E), () => {
            if (P.disconnect(), (0, o.shadowDOM)())
                for (let e of w) e.disconnect();
            for (let e of g) {
                let t = l.get(e);
                null != t && (1 === t ? (h(e, !1), l.delete(e)) : l.set(e, t - 1))
            }
            E === u[u.length - 1] ? (u.pop(), u.length && u[u.length - 1].observe()) : u.splice(u.indexOf(E), 1)
        }
    }, "keepVisible", 0, function(e) {
        let t = u[u.length - 1];
        if (t && !t.visibleNodes.has(e)) return t.visibleNodes.add(e), () => {
            t.visibleNodes.delete(e)
        }
    }], 666747);
    var c = e.i(675815),
        d = e.i(768307),
        p = e.i(600939),
        f = e.i(409781);

    function m(e, t) {
        if (e.button > 0) return !1;
        let n = (0, i.getEventTarget)(e);
        if (n) {
            let e = n.ownerDocument;
            if (!e || !(0, i.nodeContains)(e.documentElement, n) || n.closest("[data-react-aria-top-layer]")) return !1
        }
        return !!t.current && !e.composedPath().includes(t.current)
    }
    let g = [];
    e.s(["useOverlay", 0, function(e, t) {
        let {
            onClose: n,
            shouldCloseOnBlur: o,
            isOpen: s,
            isDismissable: a = !1,
            isKeyboardDismissDisabled: l = !1,
            shouldCloseOnInteractOutside: u
        } = e, h = (0, f.useRef)(void 0);
        (0, f.useEffect)(() => {
            if (s && !g.includes(t)) return g.push(t), () => {
                let e = g.indexOf(t);
                e >= 0 && g.splice(e, 1)
            }
        }, [s, t]);
        let v = () => {
            g[g.length - 1] === t && n && n()
        };
        ! function(e) {
            let {
                ref: t,
                onInteractOutside: n,
                isDisabled: i,
                onInteractOutsideStart: o
            } = e, s = (0, f.useRef)({
                isPointerDown: !1,
                ignoreEmulatedMouseEvents: !1
            }), a = (0, p.useEffectEvent)(e => {
                n && m(e, t) && (o && o(e), s.current.isPointerDown = !0)
            }), l = (0, p.useEffectEvent)(e => {
                n && n(e)
            });
            (0, f.useEffect)(() => {
                let e = s.current;
                if (i) return;
                let n = t.current,
                    o = (0, r.getOwnerDocument)(n);
                if ("u" > typeof PointerEvent) {
                    let n = n => {
                        e.isPointerDown && m(n, t) && l(n), e.isPointerDown = !1
                    };
                    return o.addEventListener("pointerdown", a, !0), o.addEventListener("click", n, !0), () => {
                        o.removeEventListener("pointerdown", a, !0), o.removeEventListener("click", n, !0)
                    }
                }
            }, [t, i])
        }({
            ref: t,
            onInteractOutside: a && s ? e => {
                (!u || u((0, i.getEventTarget)(e))) && (g[g.length - 1] === t && e.stopPropagation(), h.current === t && v()), h.current = void 0
            } : void 0,
            onInteractOutsideStart: e => {
                let n = g[g.length - 1];
                h.current = n, (!u || u((0, i.getEventTarget)(e))) && n === t && e.stopPropagation()
            }
        });
        let {
            focusWithinProps: y
        } = (0, d.useFocusWithin)({
            isDisabled: !o,
            onBlurWithin: e => {
                !(!e.relatedTarget || (0, c.isElementInChildOfActiveScope)(e.relatedTarget)) && (!u || u(e.relatedTarget)) && n?.()
            }
        });
        return {
            overlayProps: {
                onKeyDown: e => {
                    "Escape" !== e.key || l || e.nativeEvent.isComposing || (e.stopPropagation(), e.preventDefault(), v())
                },
                ...y
            },
            underlayProps: {}
        }
    }], 419476);
    var h = e.i(476090),
        v = e.i(938280),
        y = e.i(843485),
        b = e.i(904960),
        P = e.i(758759),
        w = e.i(185559),
        E = e.i(630877);
    let M = "u" > typeof document && window.visualViewport,
        S = 0;

    function C(e, t, n) {
        let r = e.style[t];
        return e.style[t] = n, () => {
            e.style[t] = r
        }
    }

    function k(e, t, n, r) {
        return e.addEventListener(t, n, r), () => {
            e.removeEventListener(t, n, r)
        }
    }

    function A(e, t) {
        t || !M ? L(e) : M.addEventListener("resize", () => L(e), {
            once: !0
        })
    }

    function L(e) {
        let t = document.scrollingElement || document.documentElement,
            n = e;
        for (; n && n !== t;) {
            let e = (0, y.getScrollParent)(n);
            if (e !== document.documentElement && e !== document.body && e !== n) {
                let t = e.getBoundingClientRect(),
                    r = n.getBoundingClientRect();
                if (r.top < t.top || r.bottom > t.top + n.clientHeight) {
                    let n = t.bottom;
                    M && (n = Math.min(n, M.offsetTop + M.height));
                    let i = r.top - t.top - ((n - t.top) / 2 - r.height / 2);
                    e.scrollTo({
                        top: Math.max(0, Math.min(e.scrollHeight - e.clientHeight, e.scrollTop + i)),
                        behavior: "smooth"
                    })
                }
            }
            n = e.parentElement
        }
    }
    e.s(["usePreventScroll", 0, function(e = {}) {
        let {
            isDisabled: n
        } = e;
        (0, w.useLayoutEffect)(() => {
            if (!n) {
                let e, n, r, o, s, a, l, u;
                return 1 == ++S && (t = (0, b.isIOS)() ? (n = C(document.documentElement, "overflow", "hidden"), r = !1, o = document.createElement("style"), (s = (0, v.getNonce)()) && (o.nonce = s), o.textContent = `
@layer {
  * {
    overscroll-behavior: contain;
  }
}`.trim(), document.head.prepend(o), a = HTMLElement.prototype.focus, HTMLElement.prototype.focus = function(e) {
                    let t = (0, i.getActiveElement)(),
                        n = null != t && (0, E.willOpenKeyboard)(t);
                    a.call(this, {
                        ...e,
                        preventScroll: !0
                    }), e && e.preventScroll || A(this, n)
                }, l = (0, h.chain)(k(document, "touchstart", t => {
                    let n = (0, i.getEventTarget)(t);
                    e = (0, P.isScrollable)(n) ? n : (0, y.getScrollParent)(n, !0), r = !1;
                    let o = n.ownerDocument.defaultView.getSelection();
                    o && !o.isCollapsed && o.containsNode(n, !0) && (r = !0), t.composedPath().some(e => e instanceof HTMLInputElement && "range" === e.type) && (r = !0), "selectionStart" in n && "selectionEnd" in n && n.selectionStart < n.selectionEnd && n.ownerDocument.activeElement === n && (r = !0)
                }, {
                    passive: !1,
                    capture: !0
                }), k(document, "touchmove", t => {
                    if (2 !== t.touches.length && !r) {
                        if (!e || e === document.documentElement || e === document.body) return void t.preventDefault();
                        e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && t.preventDefault()
                    }
                }, {
                    passive: !1,
                    capture: !0
                }), k(document, "blur", e => {
                    let t = (0, i.getEventTarget)(e),
                        n = e.relatedTarget;
                    if (n && (0, E.willOpenKeyboard)(n)) n.focus({
                        preventScroll: !0
                    }), A(n, (0, E.willOpenKeyboard)(t));
                    else if (!n) {
                        let e = t.parentElement?.closest("[tabindex]");
                        e?.focus({
                            preventScroll: !0
                        })
                    }
                }, !0)), () => {
                    n(), l(), o.remove(), HTMLElement.prototype.focus = a
                }) : (u = window.innerWidth - document.documentElement.clientWidth, (0, h.chain)(u > 0 && ("scrollbarGutter" in document.documentElement.style ? C(document.documentElement, "scrollbarGutter", "stable") : C(document.documentElement, "paddingRight", `${u}px`)), C(document.documentElement, "overflow", "hidden")))), () => {
                    0 == --S && t()
                }
            }
        }, [n])
    }], 690910)
}, 468689, e => {
    "use strict";
    var t = e.i(101933),
        n = e.i(823512),
        r = e.i(409781);
    e.s(["useOverlayTrigger", 0, function(e, i, o) {
        let s, {
                type: a
            } = e,
            {
                isOpen: l
            } = i;
        (0, r.useEffect)(() => {
            o && o.current && t.onCloseMap.set(o.current, i.close)
        }), "menu" === a ? s = !0 : "listbox" === a && (s = "listbox");
        let u = (0, n.useId)();
        return {
            triggerProps: {
                "aria-haspopup": s,
                "aria-expanded": l,
                "aria-controls": l ? u : void 0,
                onPress: i.toggle
            },
            overlayProps: {
                id: u
            }
        }
    }])
}, 243941, e => {
    "use strict";
    var t = e.i(666747),
        n = e.i(879537),
        r = e.i(429305),
        i = e.i(419476),
        o = e.i(690910),
        s = e.i(409781);
    e.s(["usePopover", 0, function(e, a) {
        let {
            triggerRef: l,
            popoverRef: u,
            groupRef: c,
            isNonModal: d,
            isKeyboardDismissDisabled: p,
            shouldCloseOnInteractOutside: f,
            ...m
        } = e, g = "SubmenuTrigger" === m.trigger, {
            overlayProps: h,
            underlayProps: v
        } = (0, i.useOverlay)({
            isOpen: a.isOpen,
            onClose: a.close,
            shouldCloseOnBlur: !0,
            isDismissable: !d || g,
            isKeyboardDismissDisabled: p,
            shouldCloseOnInteractOutside: f
        }, c ?? u), {
            overlayProps: y,
            arrowProps: b,
            placement: P,
            triggerAnchorPoint: w
        } = (0, n.useOverlayPosition)({
            ...m,
            targetRef: l,
            overlayRef: u,
            isOpen: a.isOpen,
            onClose: d && !g ? a.close : null
        });
        return (0, o.usePreventScroll)({
            isDisabled: d || !a.isOpen
        }), (0, s.useEffect)(() => {
            if (a.isOpen && u.current)
                if (d) return (0, t.keepVisible)(c?.current ?? u.current);
                else return (0, t.ariaHideOutside)([c?.current ?? u.current], {
                    shouldUseInert: !0
                })
        }, [d, a.isOpen, u, c]), {
            popoverProps: (0, r.mergeProps)(h, y),
            arrowProps: b,
            underlayProps: v,
            placement: P,
            triggerAnchorPoint: w
        }
    }])
}, 843485, 758759, e => {
    "use strict";

    function t(e, t) {
        if (!e) return !1;
        let n = window.getComputedStyle(e),
            r = document.scrollingElement || document.documentElement,
            i = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
        return e === r && "hidden" !== n.overflow && (i = !0), i && t && (i = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), i
    }
    e.s(["isScrollable", 0, t], 758759), e.s(["getScrollParent", 0, function(e, n) {
        let r = e;
        for (t(r, n) && (r = r.parentElement); r && !t(r, n);) r = r.parentElement;
        return r || document.scrollingElement || document.documentElement
    }], 843485)
}, 630877, e => {
    "use strict";
    var t = e.i(904960);
    let n = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
    e.s(["isCtrlKeyPressed", 0, function(e) {
        return (0, t.isMac)() ? e.metaKey : e.ctrlKey
    }, "willOpenKeyboard", 0, function(e) {
        return e instanceof HTMLInputElement && !n.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable
    }])
}, 458229, e => {
    "use strict";
    var t = e.i(429305),
        n = e.i(768307),
        r = e.i(409781);
    let i = {
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
    };

    function o(e = {}) {
        let {
            style: t,
            isFocusable: s
        } = e, [a, l] = (0, r.useState)(!1), {
            focusWithinProps: u
        } = (0, n.useFocusWithin)({
            isDisabled: !s,
            onFocusWithinChange: e => l(e)
        }), c = (0, r.useMemo)(() => a ? t : t ? {
            ...i,
            ...t
        } : i, [a]);
        return {
            visuallyHiddenProps: {
                ...u,
                style: c
            }
        }
    }
    e.s(["VisuallyHidden", 0, function(e) {
        let {
            children: n,
            elementType: i = "div",
            isFocusable: s,
            style: a,
            ...l
        } = e, {
            visuallyHiddenProps: u
        } = o(e);
        return r.default.createElement(i, (0, t.mergeProps)(l, u), n)
    }, "useVisuallyHidden", 0, o])
}, 747624, e => {
    "use strict";
    var t = e.i(785328),
        n = e.i(409781),
        r = e.i(722978),
        i = e.i(838031);
    let o = (0, n.forwardRef)(function({
        children: e,
        className: n = ""
    }, o) {
        let s = (0, i.useObjectRef)(o),
            a = (0, r.default)("text", n);
        return (0, t.jsx)("div", {
            ref: s,
            className: a,
            children: e
        })
    });
    e.s(["default", 0, o])
}]);