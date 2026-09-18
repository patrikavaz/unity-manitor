(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 570606, e => {
    "use strict";
    var t, i, r = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        n = (t = function(e) {
            return r.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && 91 > e.charCodeAt(2)
        }, i = Object.create(null), function(e) {
            return void 0 === i[e] && (i[e] = t(e)), i[e]
        });
    e.s(["default", 0, n], 570606)
}, 305892, e => {
    "use strict";
    var t = e.i(785328),
        i = e.i(409781),
        r = e.i(731268),
        n = e.i(626022);

    function a(e) {
        return "function" == typeof e
    }
    e.s(["LazyMotion", 0, function({
        children: e,
        features: o,
        strict: l = !1
    }) {
        let [, s] = (0, i.useState)(!a(o)), u = (0, i.useRef)(void 0);
        if (!a(o)) {
            let {
                renderer: e,
                ...t
            } = o;
            u.current = e, (0, n.loadFeatures)(t)
        }
        return (0, i.useEffect)(() => {
            a(o) && o().then(({
                renderer: e,
                ...t
            }) => {
                (0, n.loadFeatures)(t), u.current = e, s(!0)
            })
        }, []), (0, t.jsx)(r.LazyContext.Provider, {
            value: {
                renderer: u.current,
                strict: l
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
    var t, i = e.i(409781);
    let r = (0, i.createContext)({});
    e.s(["MotionContext", 0, r], 428483);
    var n = e.i(587377),
        a = e.i(653425);

    function o(e) {
        return Array.isArray(e) ? e.join(" ") : e
    }
    e.s(["useCreateMotionContext", 0, function(e) {
        let {
            initial: t,
            animate: l
        } = function(e, t) {
            if ((0, n.isControllingVariants)(e)) {
                let {
                    initial: t,
                    animate: i
                } = e;
                return {
                    initial: !1 === t || (0, a.isVariantLabel)(t) ? t : void 0,
                    animate: (0, a.isVariantLabel)(i) ? i : void 0
                }
            }
            return !1 !== e.inherit ? t : {}
        }(e, (0, i.useContext)(r));
        return (0, i.useMemo)(() => ({
            initial: t,
            animate: l
        }), [o(t), o(l)])
    }], 466327);
    var l = e.i(140926),
        s = e.i(880925),
        u = e.i(493559);
    let d = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    });

    function c(e, t, i) {
        for (let r in t)(0, l.isMotionValue)(t[r]) || (0, s.isForcedMotionValue)(r, i) || (e[r] = t[r])
    }
    e.s(["createHtmlRenderState", 0, d], 668087);
    var p = e.i(734225),
        f = e.i(997214);
    let g = () => ({
        ...d(),
        attrs: {}
    });
    e.s(["createSvgRenderState", 0, g], 297953);
    let m = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);

    function y(e) {
        return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || m.has(e)
    }
    let v = e => !y(e);
    try {
        t = e.r(570606).default, "function" == typeof t && (v = e => e.startsWith("on") ? !y(e) : t(e))
    } catch {}
    var h = e.i(737328);
    e.s(["useRender", 0, function(e, t, r, {
        latestValues: n
    }, a, o = !1, s) {
        let m = (s ?? (0, h.isSVGComponent)(e) ? function(e, t, r, n) {
                let a = (0, i.useMemo)(() => {
                    let i = g();
                    return (0, p.buildSVGAttrs)(i, t, (0, f.isSVGTag)(n), e.transformTemplate, e.style), {
                        ...i.attrs,
                        style: {
                            ...i.style
                        }
                    }
                }, [t]);
                if (e.style) {
                    let t = {};
                    c(t, e.style, e), a.style = {
                        ...t,
                        ...a.style
                    }
                }
                return a
            } : function(e, t) {
                let r, n, a = {},
                    o = (r = e.style || {}, c(n = {}, r, e), Object.assign(n, function({
                        transformTemplate: e
                    }, t) {
                        return (0, i.useMemo)(() => {
                            let i = d();
                            return (0, u.buildHTMLStyles)(i, t, e), Object.assign({}, i.vars, i.style)
                        }, [t])
                    }(e, t)), n);
                return e.drag && !1 !== e.dragListener && (a.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = !0 === e.drag ? "none" : `pan-${"x"===e.drag?"y":"x"}`), void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (a.tabIndex = 0), a.style = o, a
            })(t, n, a, e),
            b = function(e, t, i) {
                let r = {};
                for (let n in e)("values" !== n || "object" != typeof e.values) && !(0, l.isMotionValue)(e[n]) && (v(n) || !0 === i && y(n) || !t && !y(n) || e.draggable && n.startsWith("onDrag")) && (r[n] = e[n]);
                return r
            }(t, "string" == typeof e, o),
            M = e !== i.Fragment ? {
                ...b,
                ...m,
                ref: r
            } : {},
            {
                children: x
            } = t,
            S = (0, i.useMemo)(() => (0, l.isMotionValue)(x) ? x.get() : x, [x]);
        return (0, i.createElement)(e, {
            ...M,
            children: S
        })
    }], 782555);
    var b = e.i(268162);
    e.s(["scrapeHTMLMotionValuesFromProps", () => b.scrapeMotionValuesFromProps], 246373)
}, 855096, 230548, 442647, 626022, 730324, 989867, e => {
    "use strict";
    var t = e.i(246373),
        i = e.i(766438),
        r = e.i(587377),
        n = e.i(819673),
        a = e.i(923792),
        o = e.i(409781),
        l = e.i(428483),
        s = e.i(820847),
        u = e.i(416007);
    let d = e => (t, d) => {
        let c = (0, o.useContext)(l.MotionContext),
            p = (0, o.useContext)(s.PresenceContext),
            f = () => (function({
                scrapeMotionValuesFromProps: e,
                createRenderState: t
            }, o, l, s) {
                return {
                    latestValues: function(e, t, o, l) {
                        let s = {},
                            u = l(e, {});
                        for (let e in u) s[e] = (0, i.resolveMotionValue)(u[e]);
                        let {
                            initial: d,
                            animate: c
                        } = e, p = (0, r.isControllingVariants)(e), f = (0, r.isVariantNode)(e);
                        t && f && !p && !1 !== e.inherit && (void 0 === d && (d = t.initial), void 0 === c && (c = t.animate));
                        let g = !!o && !1 === o.initial,
                            m = (g = g || !1 === d) ? c : d;
                        if (m && "boolean" != typeof m && !(0, n.isAnimationControls)(m)) {
                            let t = Array.isArray(m) ? m : [m];
                            for (let i = 0; i < t.length; i++) {
                                let r = (0, a.resolveVariantFromProps)(e, t[i]);
                                if (r) {
                                    let {
                                        transitionEnd: e,
                                        transition: t,
                                        ...i
                                    } = r;
                                    for (let e in i) {
                                        let t = i[e];
                                        if (Array.isArray(t)) {
                                            let e = g ? t.length - 1 : 0;
                                            t = t[e]
                                        }
                                        null !== t && (s[e] = t)
                                    }
                                    for (let t in e) s[t] = e[t]
                                }
                            }
                        }
                        return s
                    }(o, l, s, e),
                    renderState: t()
                }
            })(e, t, c, p);
        return d ? f() : (0, u.useConstant)(f)
    };
    var c = e.i(668087);
    let p = d({
        scrapeMotionValuesFromProps: t.scrapeHTMLMotionValuesFromProps,
        createRenderState: c.createHtmlRenderState
    });
    e.s(["useHTMLVisualState", 0, p], 855096);
    var f = e.i(185747),
        f = f,
        g = e.i(297953);
    let m = d({
        scrapeMotionValuesFromProps: f.scrapeMotionValuesFromProps,
        createRenderState: g.createSvgRenderState
    });
    e.s(["useSVGVisualState", 0, m], 230548);
    var y = e.i(453311);
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
        h = !1;

    function b() {
        return ! function() {
            if (h) return;
            let e = {};
            for (let t in v) e[t] = {
                isEnabled: e => v[t].some(t => !!e[t])
            };
            (0, y.setFeatureDefinitions)(e), h = !0
        }(), (0, y.getFeatureDefinitions)()
    }
    e.s(["getInitializedFeatureDefinitions", 0, b], 442647), e.s(["loadFeatures", 0, function(e) {
        let t = b();
        for (let i in e) t[i] = {
            ...t[i],
            ...e[i]
        };
        (0, y.setFeatureDefinitions)(t)
    }], 626022);
    let M = Symbol.for("motionComponentSymbol");
    e.s(["motionComponentSymbol", 0, M], 730324), e.s(["useMotionRef", 0, function(e, t, i) {
        let r = (0, o.useRef)(i);
        (0, o.useInsertionEffect)(() => {
            r.current = i
        });
        let n = (0, o.useRef)(null);
        return (0, o.useCallback)(i => {
            i && e.onMount?.(i), t && (i ? t.mount(i) : t.unmount());
            let a = r.current;
            if ("function" == typeof a)
                if (i) {
                    let e = a(i);
                    "function" == typeof e && (n.current = e)
                } else n.current ? (n.current(), n.current = null) : a(i);
            else a && (a.current = i)
        }, [t])
    }], 989867)
}, 416007, e => {
    "use strict";
    var t = e.i(409781);
    e.s(["useConstant", 0, function(e) {
        let i = (0, t.useRef)(null);
        return null === i.current && (i.current = e()), i.current
    }])
}, 809018, e => {
    "use strict";
    var t = e.i(409781);
    let i = "u" > typeof window ? t.useLayoutEffect : t.useEffect;
    e.s(["useIsomorphicLayoutEffect", 0, i], 809018)
}, 926993, 319623, e => {
    "use strict";
    var t = e.i(296305),
        i = e.i(785328),
        r = e.i(409781),
        n = e.i(963864),
        a = e.i(731268),
        o = e.i(481522),
        l = e.i(428483),
        s = e.i(466327),
        u = e.i(782555),
        d = e.i(737328),
        c = e.i(855096),
        p = e.i(230548),
        f = e.i(442647),
        g = e.i(626022),
        m = e.i(730324),
        y = e.i(989867),
        v = e.i(182526),
        h = e.i(820847),
        b = e.i(210907),
        M = e.i(112366),
        x = e.i(809018);

    function S(e, {
        forwardMotionProps: t = !1,
        type: k
    } = {}, C, w) {
        C && (0, g.loadFeatures)(C);
        let V = k ? "svg" === k : (0, d.isSVGComponent)(e),
            P = V ? p.useSVGVisualState : c.useHTMLVisualState;

        function E(d, c) {
            let p, g = {
                    ...(0, r.useContext)(o.MotionConfigContext),
                    ...d,
                    layoutId: function({
                        layoutId: e
                    }) {
                        let t = (0, r.useContext)(n.LayoutGroupContext).id;
                        return t && void 0 !== e ? t + "-" + e : e
                    }(d)
                },
                {
                    isStatic: m
                } = g,
                S = (0, s.useCreateMotionContext)(d),
                k = P(d, m);
            if (!m && "u" > typeof window) {
                (0, r.useContext)(a.LazyContext).strict;
                let t = function(e) {
                    let {
                        drag: t,
                        layout: i
                    } = (0, f.getInitializedFeatureDefinitions)();
                    if (!t && !i) return {};
                    let r = {
                        ...t,
                        ...i
                    };
                    return {
                        MeasureLayout: t?.isEnabled(e) || i?.isEnabled(e) ? r.MeasureLayout : void 0,
                        ProjectionNode: r.ProjectionNode
                    }
                }(g);
                p = t.MeasureLayout, S.visualElement = function(e, t, i, n, s, u) {
                    let {
                        visualElement: d
                    } = (0, r.useContext)(l.MotionContext), c = (0, r.useContext)(a.LazyContext), p = (0, r.useContext)(h.PresenceContext), f = (0, r.useContext)(o.MotionConfigContext), g = f.reducedMotion, m = f.skipAnimations, y = (0, r.useRef)(null), S = (0, r.useRef)(!1);
                    n = n || c.renderer, !y.current && n && (y.current = n(e, {
                        visualState: t,
                        parent: d,
                        props: i,
                        presenceContext: p,
                        blockInitialAnimation: !!p && !1 === p.initial,
                        reducedMotionConfig: g,
                        skipAnimations: m,
                        isSVG: u
                    }), S.current && y.current && (y.current.manuallyAnimateOnMount = !0));
                    let k = y.current,
                        C = (0, r.useContext)(b.SwitchLayoutGroupContext);
                    k && !k.projection && s && ("html" === k.type || "svg" === k.type) && function(e, t, i, r) {
                        let {
                            layoutId: n,
                            layout: a,
                            drag: o,
                            dragConstraints: l,
                            layoutScroll: s,
                            layoutRoot: u,
                            layoutAnchor: d,
                            layoutCrossfade: c
                        } = t;
                        e.projection = new i(e.latestValues, t["data-framer-portal-id"] ? void 0 : function e(t) {
                            if (t) return !1 !== t.options.allowProjection ? t.projection : e(t.parent)
                        }(e.parent)), e.projection.setOptions({
                            layoutId: n,
                            layout: a,
                            alwaysMeasureLayout: !!o || l && (0, M.isRefObject)(l),
                            visualElement: e,
                            animationType: "string" == typeof a ? a : "both",
                            initialPromotionConfig: r,
                            crossfade: c,
                            layoutScroll: s,
                            layoutRoot: u,
                            layoutAnchor: d
                        })
                    }(y.current, i, s, C);
                    let w = (0, r.useRef)(!1);
                    (0, r.useInsertionEffect)(() => {
                        k && w.current && k.update(i, p)
                    });
                    let V = i[v.optimizedAppearDataAttribute],
                        P = (0, r.useRef)(!!V && "u" > typeof window && !window.MotionHandoffIsComplete?.(V) && window.MotionHasOptimisedAnimation?.(V));
                    return (0, x.useIsomorphicLayoutEffect)(() => {
                        S.current = !0, k && (w.current = !0, window.MotionIsMounted = !0, k.updateFeatures(), k.scheduleRenderMicrotask(), P.current && k.animationState && k.animationState.animateChanges())
                    }), (0, r.useEffect)(() => {
                        k && (!P.current && k.animationState && k.animationState.animateChanges(), P.current && (queueMicrotask(() => {
                            window.MotionHandoffMarkAsComplete?.(V)
                        }), P.current = !1), k.enteringChildren = void 0)
                    }), k
                }(e, k, g, w, t.ProjectionNode, V)
            }
            return (0, i.jsxs)(l.MotionContext.Provider, {
                value: S,
                children: [p && S.visualElement ? (0, i.jsx)(p, {
                    visualElement: S.visualElement,
                    ...g
                }) : null, (0, u.useRender)(e, d, (0, y.useMotionRef)(k, S.visualElement, c), k, m, t, V)]
            })
        }
        E.displayName = `motion.${"string"==typeof e?e:`create(${e.displayName??e.name??""})`}`;
        let A = (0, r.forwardRef)(E);
        return A[m.motionComponentSymbol] = e, A
    }

    function k(e, t) {
        if ("u" < typeof Proxy) return S;
        let i = new Map,
            r = (i, r) => S(i, r, e, t);
        return new Proxy((e, t) => r(e, t), {
            get: (n, a) => "create" === a ? r : (i.has(a) || i.set(a, S(a, void 0, e, t)), i.get(a))
        })
    }
    e.s(["createMotionComponent", 0, S], 319623);
    var C = e.i(263422),
        w = e.i(948395),
        V = e.i(159313),
        P = e.i(596995);
    let E = k({
            ...C.animations,
            ...V.gestureAnimations,
            ...w.drag,
            ...P.layout
        }, t.createDomVisualElement),
        A = k();
    e.s(["m", 0, A, "motion", 0, E], 926993)
}, 260840, 869049, 860700, 251635, e => {
    "use strict";
    var t = e.i(961551),
        i = e.i(429305),
        r = e.i(823512);
    e.s(["useField", 0, function(e) {
        let {
            description: n,
            errorMessage: a,
            isInvalid: o,
            validationState: l
        } = e, {
            labelProps: s,
            fieldProps: u
        } = (0, t.useLabel)(e), d = (0, r.useSlotId)([!!n, !!a, o, l]), c = (0, r.useSlotId)([!!n, !!a, o, l]);
        return {
            labelProps: s,
            fieldProps: u = (0, i.mergeProps)(u, {
                "aria-describedby": [d, c, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
            }),
            descriptionProps: {
                id: d
            },
            errorMessageProps: {
                id: c
            }
        }
    }], 260840);
    var n = e.i(600939),
        a = e.i(409781);
    e.s(["useFormReset", 0, function(e, t, i) {
        let r = (0, n.useEffectEvent)(e => {
            i && !e.defaultPrevented && i(t)
        });
        (0, a.useEffect)(() => {
            let t = e?.current?.form;
            return t?.addEventListener("reset", r), () => {
                t?.removeEventListener("reset", r)
            }
        }, [e])
    }], 869049);
    var o = e.i(776050),
        l = e.i(816862),
        s = e.i(185559);
    e.s(["useFormValidation", 0, function(e, t, i) {
        let {
            validationBehavior: r,
            focus: u
        } = e;
        (0, s.useLayoutEffect)(() => {
            if ("native" === r && i?.current && "setCustomValidity" in i.current && !i.current.disabled) {
                var e;
                let r, n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
                i.current.setCustomValidity(n), i.current.hasAttribute("title") || (i.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
                    isInvalid: !(e = i.current).validity.valid,
                    validationDetails: {
                        badInput: (r = e.validity).badInput,
                        customError: r.customError,
                        patternMismatch: r.patternMismatch,
                        rangeOverflow: r.rangeOverflow,
                        rangeUnderflow: r.rangeUnderflow,
                        stepMismatch: r.stepMismatch,
                        tooLong: r.tooLong,
                        tooShort: r.tooShort,
                        typeMismatch: r.typeMismatch,
                        valueMissing: r.valueMissing,
                        valid: r.valid
                    },
                    validationErrors: e.validationMessage ? [e.validationMessage] : []
                })
            }
        });
        let d = (0, a.useRef)(!1),
            c = (0, n.useEffectEvent)(() => {
                d.current || t.resetValidation()
            }),
            p = (0, n.useEffectEvent)(e => {
                t.displayValidation.isInvalid || t.commitValidation();
                let r = i?.current?.form;
                !e.defaultPrevented && i && r && function(e) {
                    for (let t = 0; t < e.elements.length; t++) {
                        let i = e.elements[t];
                        if (i.validity?.valid === !1) return i
                    }
                    return null
                }(r) === i.current && (u ? u() : i.current?.focus(), (0, l.setInteractionModality)("keyboard")), e.preventDefault()
            }),
            f = (0, n.useEffectEvent)(() => {
                t.commitValidation()
            });
        (0, a.useEffect)(() => {
            let e = i?.current;
            if (!e) return;
            let t = e.form,
                r = t?.reset;
            return t && (t.reset = () => {
                d.current = !window.event || "message" === window.event.type && (0, o.getEventTarget)(window.event) instanceof MessagePort, r?.call(t), d.current = !1
            }), e.addEventListener("invalid", p), e.addEventListener("change", f), t?.addEventListener("reset", c), () => {
                e.removeEventListener("invalid", p), e.removeEventListener("change", f), t?.removeEventListener("reset", c), t && (t.reset = r)
            }
        }, [i, r])
    }], 860700);
    let u = {
            badInput: !1,
            customError: !1,
            patternMismatch: !1,
            rangeOverflow: !1,
            rangeUnderflow: !1,
            stepMismatch: !1,
            tooLong: !1,
            tooShort: !1,
            typeMismatch: !1,
            valueMissing: !1,
            valid: !0
        },
        d = {
            ...u,
            customError: !0,
            valid: !1
        },
        c = {
            isInvalid: !1,
            validationDetails: u,
            validationErrors: []
        },
        p = (0, a.createContext)({}),
        f = "__reactAriaFormValidationState";

    function g(e) {
        return e ? Array.isArray(e) ? e : [e] : []
    }

    function m(e) {
        return e.length ? {
            isInvalid: !0,
            validationErrors: e,
            validationDetails: d
        } : null
    }

    function y(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, i) => e === t.validationErrors[i]) && Object.entries(e.validationDetails).every(([e, i]) => t.validationDetails[e] === i)
    }
    e.s(["DEFAULT_VALIDATION_RESULT", 0, c, "FormValidationContext", 0, p, "mergeValidation", 0, function(...e) {
        let t = new Set,
            i = !1,
            r = {
                ...u
            };
        for (let n of e) {
            for (let e of n.validationErrors) t.add(e);
            for (let e in i ||= n.isInvalid, r) r[e] ||= n.validationDetails[e]
        }
        return r.valid = !i, {
            isInvalid: i,
            validationErrors: [...t],
            validationDetails: r
        }
    }, "privateValidationStateProp", 0, f, "useFormValidationState", 0, function(e) {
        if (e[f]) {
            let {
                realtimeValidation: t,
                displayValidation: i,
                updateValidation: r,
                resetValidation: n,
                commitValidation: a
            } = e[f];
            return {
                realtimeValidation: t,
                displayValidation: i,
                updateValidation: r,
                resetValidation: n,
                commitValidation: a
            }
        }
        return function(e) {
            let {
                isInvalid: t,
                validationState: i,
                name: r,
                value: n,
                builtinValidation: o,
                validate: l,
                validationBehavior: s = "aria"
            } = e;
            i && (t ||= "invalid" === i);
            let u = void 0 !== t ? {
                    isInvalid: t,
                    validationErrors: [],
                    validationDetails: d
                } : null,
                f = (0, a.useMemo)(() => l && null != n ? m(function(e, t) {
                    if ("function" == typeof e) {
                        let i = e(t);
                        if (i && "boolean" != typeof i) return g(i)
                    }
                    return []
                }(l, n)) : null, [l, n]);
            o?.validationDetails.valid && (o = void 0);
            let v = (0, a.useContext)(p),
                h = (0, a.useMemo)(() => r ? Array.isArray(r) ? r.flatMap(e => g(v[e])) : g(v[r]) : [], [v, r]),
                [b, M] = (0, a.useState)(v),
                [x, S] = (0, a.useState)(!1);
            v !== b && (M(v), S(!1));
            let k = (0, a.useMemo)(() => m(x ? [] : h), [x, h]),
                C = (0, a.useRef)(c),
                [w, V] = (0, a.useState)(c),
                P = (0, a.useRef)(c),
                [E, A] = (0, a.useState)(!1);
            return (0, a.useEffect)(() => {
                if (!E) return;
                A(!1);
                let e = f || o || C.current;
                y(e, P.current) || (P.current = e, V(e))
            }), {
                realtimeValidation: u || k || f || o || c,
                displayValidation: "native" === s ? u || k || w : u || k || f || o || w,
                updateValidation(e) {
                    "aria" !== s || y(w, e) ? C.current = e : V(e)
                },
                resetValidation() {
                    y(c, P.current) || (P.current = c, V(c)), "native" === s && A(!1), S(!0)
                },
                commitValidation() {
                    "native" === s && A(!0), S(!0)
                }
            }
        }(e)
    }], 251635)
}, 360375, 888839, 6390, e => {
    "use strict";
    var t = e.i(679933);
    let i = new WeakMap;

    function r(e, t) {
        let r = i.get(e);
        if (!r) throw Error("Unknown list");
        return `${r.id}-option-${"string"==typeof t?t.replace(/\s*/g,""):""+t}`
    }
    e.s(["getItemId", 0, r, "listData", 0, i], 888839);
    var n = e.i(429305),
        a = e.i(768307),
        o = e.i(823512),
        l = e.i(961551),
        s = e.i(493244);
    e.s(["useListBox", 0, function(e, r, u) {
        let d = (0, t.filterDOMProps)(e, {
                labelable: !0
            }),
            c = e.selectionBehavior || "toggle",
            p = e.orientation || "vertical",
            f = e.linkBehavior || ("replace" === c ? "action" : "override");
        "toggle" === c && "action" === f && (f = "override");
        let {
            listProps: g
        } = (0, s.useSelectableList)({
            ...e,
            ref: u,
            selectionManager: r.selectionManager,
            collection: r.collection,
            disabledKeys: r.disabledKeys,
            linkBehavior: f
        }), {
            focusWithinProps: m
        } = (0, a.useFocusWithin)({
            onFocusWithin: e.onFocus,
            onBlurWithin: e.onBlur,
            onFocusWithinChange: e.onFocusChange
        }), y = (0, o.useId)(e.id);
        i.set(r, {
            id: y,
            shouldUseVirtualFocus: e.shouldUseVirtualFocus,
            shouldSelectOnPressUp: e.shouldSelectOnPressUp,
            shouldFocusOnHover: e.shouldFocusOnHover,
            isVirtualized: e.isVirtualized,
            onAction: e.onAction,
            linkBehavior: f,
            UNSTABLE_itemBehavior: e.UNSTABLE_itemBehavior
        });
        let {
            labelProps: v,
            fieldProps: h
        } = (0, l.useLabel)({
            ...e,
            id: y,
            labelElementType: "span"
        });
        return {
            labelProps: v,
            listBoxProps: (0, n.mergeProps)(d, m, "multiple" === r.selectionManager.selectionMode ? {
                "aria-multiselectable": "true"
            } : {}, {
                role: "listbox",
                "aria-orientation": p,
                ...(0, n.mergeProps)(h, g)
            })
        }
    }], 360375);
    var u = e.i(476090),
        d = e.i(816862),
        c = e.i(515715),
        p = e.i(355770),
        f = e.i(97584),
        g = e.i(511607);
    e.s(["useOption", 0, function(e, a, l) {
        let {
            key: s
        } = e, m = i.get(a), y = e.isDisabled ?? a.selectionManager.isDisabled(s), v = e.isSelected ?? a.selectionManager.isSelected(s), h = e.shouldSelectOnPressUp ?? m?.shouldSelectOnPressUp, b = e.shouldFocusOnHover ?? m?.shouldFocusOnHover, M = e.shouldUseVirtualFocus ?? m?.shouldUseVirtualFocus, x = e.isVirtualized ?? m?.isVirtualized, S = (0, o.useSlotId)(), k = (0, o.useSlotId)(), C = {
            role: "option",
            "aria-disabled": y || void 0,
            "aria-selected": "none" !== a.selectionManager.selectionMode ? v : void 0,
            "aria-label": e["aria-label"],
            "aria-labelledby": S,
            "aria-describedby": k
        }, w = a.collection.getItem(s);
        if (x) {
            let e = Number(w?.index);
            C["aria-posinset"] = Number.isNaN(e) ? void 0 : e + 1, C["aria-setsize"] = (0, g.getItemCount)(a.collection)
        }
        let V = m?.onAction ? () => m?.onAction?.(s) : void 0,
            P = r(a, s),
            {
                itemProps: E,
                isPressed: A,
                isFocused: F,
                hasAction: I,
                allowsSelection: L
            } = (0, c.useSelectableItem)({
                selectionManager: a.selectionManager,
                key: s,
                ref: l,
                shouldSelectOnPressUp: h,
                allowsDifferentPressOrigin: h && b,
                isVirtualized: x,
                shouldUseVirtualFocus: M,
                isDisabled: y,
                onAction: V || w?.props?.onAction ? (0, u.chain)(w?.props?.onAction, V) : void 0,
                linkBehavior: m?.linkBehavior,
                UNSTABLE_itemBehavior: m?.UNSTABLE_itemBehavior,
                id: P
            }),
            {
                hoverProps: T
            } = (0, p.useHover)({
                isDisabled: y || !b,
                onHoverStart() {
                    (0, d.isFocusVisible)() || (a.selectionManager.setFocused(!0), a.selectionManager.setFocusedKey(s))
                }
            }),
            D = (0, t.filterDOMProps)(w?.props);
        delete D.id;
        let K = (0, f.useLinkProps)(w?.props);
        return {
            optionProps: {
                ...C,
                ...(0, n.mergeProps)(D, E, T, K),
                id: P
            },
            labelProps: {
                id: S
            },
            descriptionProps: {
                id: k
            },
            isFocused: F,
            isFocusVisible: F && a.selectionManager.isFocused && (0, d.isFocusVisible)(),
            isSelected: v,
            isDisabled: y,
            isPressed: A,
            allowsSelection: L,
            hasAction: I
        }
    }], 6390)
}, 997007, 603360, e => {
    "use strict";
    class t {
        constructor(e) {
            this.keyMap = new Map, this.firstKey = null, this.lastKey = null, this.iterable = e;
            let t = e => {
                if (this.keyMap.set(e.key, e), e.childNodes && "section" === e.type)
                    for (let i of e.childNodes) t(i)
            };
            for (let i of e) t(i);
            let i = null,
                r = 0,
                n = 0;
            for (let [e, t] of this.keyMap) i ? (i.nextKey = e, t.prevKey = i.key) : (this.firstKey = e, t.prevKey = void 0), "item" === t.type && (t.index = r++), ("section" === t.type || "item" === t.type) && n++, (i = t).nextKey = void 0;
            this._size = n, this.lastKey = i?.key ?? null
        }*[Symbol.iterator]() {
            yield* this.iterable
        }
        get size() {
            return this._size
        }
        getKeys() {
            return this.keyMap.keys()
        }
        getKeyBefore(e) {
            let t = this.keyMap.get(e);
            return t ? t.prevKey ?? null : null
        }
        getKeyAfter(e) {
            let t = this.keyMap.get(e);
            return t ? t.nextKey ?? null : null
        }
        getFirstKey() {
            return this.firstKey
        }
        getLastKey() {
            return this.lastKey
        }
        getItem(e) {
            return this.keyMap.get(e) ?? null
        }
        at(e) {
            let t = [...this.getKeys()];
            return this.getItem(t[e])
        }
        getChildren(e) {
            let t = this.keyMap.get(e);
            return t?.childNodes || []
        }
    }
    e.s(["ListCollection", 0, t], 603360);
    var i = e.i(184831),
        r = e.i(85434),
        n = e.i(485286),
        a = e.i(409781);

    function o(e, t) {
        let i = (0, a.useRef)(null);
        (0, a.useEffect)(() => {
            if (null != t.focusedKey && !e.getItem(t.focusedKey) && i.current) {
                let r = i.current.getKeyAfter(t.focusedKey),
                    n = null;
                for (; null != r;) {
                    let a = e.getItem(r);
                    if (a && "item" === a.type && !t.isDisabled(r)) {
                        n = r;
                        break
                    }
                    r = i.current.getKeyAfter(r)
                }
                if (null == n)
                    for (r = i.current.getKeyBefore(t.focusedKey); null != r;) {
                        let a = e.getItem(r);
                        if (a && "item" === a.type && !t.isDisabled(r)) {
                            n = r;
                            break
                        }
                        r = i.current.getKeyBefore(r)
                    }
                t.setFocusedKey(n)
            }
            i.current = e
        }, [e, t])
    }
    e.s(["UNSTABLE_useFilteredListState", 0, function(e, t) {
        let i = (0, a.useMemo)(() => t ? e.collection.filter(t) : e.collection, [e.collection, t]),
            r = e.selectionManager.withCollection(i);
        return o(i, r), {
            collection: i,
            selectionManager: r,
            disabledKeys: e.disabledKeys
        }
    }, "useListState", 0, function(e) {
        let {
            filter: l,
            layoutDelegate: s
        } = e, u = (0, i.useMultipleSelectionState)(e), d = (0, a.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set, [e.disabledKeys]), c = (0, a.useCallback)(e => new t(l ? l(e) : e), [l]), p = (0, a.useMemo)(() => ({
            suppressTextValueWarning: e.suppressTextValueWarning
        }), [e.suppressTextValueWarning]), f = (0, n.useCollection)(e, c, p), g = (0, a.useMemo)(() => new(0, r.SelectionManager)(f, u, {
            layoutDelegate: s
        }), [f, u, s]);
        return o(f, g), {
            collection: f,
            disabledKeys: d,
            selectionManager: g
        }
    }], 997007)
}, 481392, 66736, 661013, e => {
    "use strict";
    var t = e.i(785328),
        i = e.i(409781),
        r = e.i(722978),
        n = e.i(476090),
        a = e.i(679933),
        o = e.i(455239),
        l = e.i(429305),
        s = e.i(776050),
        u = e.i(816862),
        d = e.i(702985),
        c = e.i(260840),
        p = e.i(823512),
        f = e.i(629080),
        g = e.i(300671);
    let m = new WeakMap;
    var y = e.i(869049),
        v = e.i(860700),
        h = e.i(458229);

    function b(e) {
        let {
            state: t,
            triggerRef: r,
            label: n,
            name: a,
            form: o,
            isDisabled: l
        } = e, u = (0, i.useRef)(null), d = (0, i.useRef)(null), {
            containerProps: c,
            selectProps: p
        } = function(e, t, r) {
            let n = m.get(t) || {},
                {
                    autoComplete: a,
                    name: o = n.name,
                    form: l = n.form,
                    isDisabled: u = n.isDisabled
                } = e,
                {
                    validationBehavior: d,
                    isRequired: c
                } = n,
                {
                    visuallyHiddenProps: p
                } = (0, h.useVisuallyHidden)({
                    style: {
                        position: "fixed",
                        top: 0,
                        left: 0
                    }
                });
            (0, y.useFormReset)(e.selectRef, t.defaultValue, t.setValue), (0, v.useFormValidation)({
                validationBehavior: d,
                focus: () => r.current?.focus()
            }, t, e.selectRef);
            let f = t.setValue,
                g = (0, i.useCallback)(e => {
                    let t = (0, s.getEventTarget)(e);
                    t.multiple ? f(Array.from(t.selectedOptions, e => e.value)) : f(e.currentTarget.value)
                }, [f]);
            return {
                containerProps: {
                    ...p,
                    "aria-hidden": !0,
                    "data-react-aria-prevent-focus": !0,
                    "data-a11y-ignore": "aria-hidden-focus"
                },
                inputProps: {
                    style: {
                        display: "none"
                    }
                },
                selectProps: {
                    tabIndex: -1,
                    autoComplete: a,
                    disabled: u,
                    multiple: "multiple" === t.selectionManager.selectionMode,
                    required: "native" === d && c,
                    name: o,
                    form: l,
                    value: t.value ?? "",
                    onChange: g,
                    onInput: g
                }
            }
        }({
            ...e,
            selectRef: t.collection.size <= 300 ? u : d
        }, t, r), f = Array.isArray(t.value) ? t.value : [t.value];
        if (t.collection.size <= 300) return i.default.createElement("div", {
            ...c,
            "data-testid": "hidden-select-container"
        }, i.default.createElement("label", null, n, i.default.createElement("select", {
            ...p,
            ref: u
        }, i.default.createElement("option", {
            value: "",
            label: " "
        }, " "), [...t.collection.getKeys()].map(e => {
            let r = t.collection.getItem(e);
            if (r && "item" === r.type) return i.default.createElement("option", {
                key: r.key,
                value: r.key
            }, r.textValue)
        }), 0 === t.collection.size && a && f.map((e, t) => i.default.createElement("option", {
            key: t,
            value: e ?? ""
        })))));
        if (a) {
            let {
                validationBehavior: e
            } = m.get(t) || {};
            0 === f.length && (f = [null]);
            let r = f.map((t, r) => {
                let n = {
                    type: "hidden",
                    autoComplete: p.autoComplete,
                    name: a,
                    form: o,
                    disabled: l,
                    value: t ?? ""
                };
                return "native" === e ? i.default.createElement("input", {
                    key: r,
                    ...n,
                    ref: 0 === r ? d : null,
                    style: {
                        display: "none"
                    },
                    type: "text",
                    required: 0 === r && p.required,
                    onChange: () => {}
                }) : i.default.createElement("input", {
                    key: r,
                    ...n,
                    ref: 0 === r ? d : null
                })
            });
            return i.default.createElement(i.default.Fragment, null, r)
        }
        return null
    }
    var M = e.i(251635),
        x = e.i(997007),
        S = e.i(512985),
        k = e.i(803258);

    function C(e) {
        return null
    }
    C.getCollectionNode = function*(e, t) {
        var r;
        let {
            childItems: n,
            title: a,
            children: o
        } = e, l = e.title || e.children, s = e.textValue || ("string" == typeof l ? l : "") || e["aria-label"] || "";
        s || t?.suppressTextValueWarning, yield {
            type: "item",
            props: e,
            rendered: l,
            textValue: s,
            "aria-label": e["aria-label"],
            hasChildNodes: null != (r = e).hasChildItems ? r.hasChildItems : !!(r.childItems || r.title && i.default.Children.count(r.children) > 0),
            * childNodes() {
                if (n)
                    for (let e of n) yield {
                        type: "item",
                        value: e
                    };
                else if (a) {
                    let e = [];
                    i.default.Children.forEach(o, t => {
                        e.push({
                            type: "item",
                            element: t
                        })
                    }), yield* e
                }
            }
        }
    }, e.s(["Item", 0, C], 66736);
    let w = ({
        className: e
    }) => (0, t.jsx)("svg", {
        width: 16,
        height: 16,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: e,
        children: (0, t.jsx)("path", {
            d: "m13 6-5 5-5-5"
        })
    });
    e.s(["default", 0, w], 661013);
    var V = e.i(672451),
        P = e.i(513976),
        E = e.i(243941);
    let A = ({
        children: e,
        state: r,
        width: n,
        offset: a = 0,
        ...o
    }) => {
        let l = (0, i.useRef)(null),
            {
                popoverProps: s,
                underlayProps: u
            } = (0, E.usePopover)({
                ...o,
                offset: a,
                popoverRef: l
            }, r);
        return (0, t.jsxs)(P.Overlay, {
            portalContainer: document.body,
            children: [(0, t.jsx)("div", {
                ...u
            }), (0, t.jsxs)("div", {
                ...s,
                ref: l,
                className: "min-w-min overflow-auto rounded-xl bg-white p-1 shadow-[0px_4px_16px_rgba(0,0,0,0.16)] dark:bg-black",
                style: {
                    ...s.style,
                    width: n
                },
                children: [(0, t.jsx)(V.DismissButton, {
                    onDismiss: r.close
                }), e, (0, t.jsx)(V.DismissButton, {
                    onDismiss: r.close
                })]
            })]
        })
    };
    var F = e.i(360375),
        I = e.i(6390);
    let L = ({
            item: e,
            state: n
        }) => {
            let a = (0, i.useRef)(null),
                {
                    optionProps: o,
                    isSelected: l,
                    isFocused: s
                } = (0, I.useOption)({
                    key: e.key
                }, n, a),
                u = (0, r.clsx)("text-tiny-bold cursor-pointer px-2 py-1 text-gray-700 focus:outline-0 dark:text-gray-300 outline-hidden break-words rounded-lg", {
                    "bg-gray-200 dark:bg-gray-800 dark:text-white": l
                }, {
                    "bg-gray-200 dark:bg-gray-800 dark:text-white": s
                });
            return (0, t.jsx)("li", {
                ...o,
                className: u,
                ref: a,
                children: e.rendered
            })
        },
        T = ({
            state: e,
            ...r
        }) => {
            let n = (0, i.useRef)(null),
                {
                    listBoxProps: a
                } = (0, F.useListBox)(r, e, n);
            return (0, t.jsx)("ul", {
                ...a,
                ref: n,
                className: "outline-hidden",
                children: Array.from(e.collection).map(i => (0, t.jsx)(L, {
                    item: i,
                    state: e
                }, i.key))
            })
        };
    var D = e.i(611017),
        K = e.i(838031);
    let R = (0, i.forwardRef)(function({
            children: e,
            className: i = "",
            isOpen: n,
            ...a
        }, o) {
            let l = (0, K.useObjectRef)(o),
                {
                    buttonProps: s
                } = (0, D.useButton)({
                    children: e,
                    className: i,
                    isOpen: n,
                    ...a
                }, l),
                u = (0, r.clsx)("transition-all ease-out duration-400 flex py-2 items-center w-full outline-blue focus:ring-3 focus:ring-blue-dark focus:outline-blue focus:outline-offset-0 focus:border-none justify-between whitespace-nowrap rounded-lg border border-gray-400 bg-gray-50 px-3 text-gray-900 hover:border-gray-900 dark:border-gray-500 dark:bg-gray-900 dark:text-gray-400 dark:text-white dark:hover:border-white outline-hidden", {
                    "dark:bg-gray-900 dark:border-transparent": n,
                    "ring-3 ring-blue-dark !outline-blue !outline-offset-0 !border-none": n
                }, i);
            return (0, t.jsx)("button", {
                ...s,
                ref: l,
                type: "button",
                className: u,
                children: e
            })
        }),
        O = e => {
            let y = (0, i.useRef)(null),
                v = function(e) {
                    let {
                        selectionMode: t = "single",
                        shouldCloseOnSelect: r = "single" === t
                    } = e, n = (0, S.useOverlayTriggerState)(e), [a, o] = (0, i.useState)(null), l = (0, i.useMemo)(() => void 0 !== e.defaultValue ? e.defaultValue : "single" === t ? e.defaultSelectedKey ?? null : [], [e.defaultValue, e.defaultSelectedKey, t]), s = (0, i.useMemo)(() => void 0 !== e.value ? e.value : "single" === t ? e.selectedKey : void 0, [e.value, e.selectedKey, t]), [u, d] = (0, k.useControlledState)(s, l, e.onChange), c = "single" === t && Array.isArray(u) ? u[0] : u, p = i => {
                        if ("single" === t) {
                            let t = Array.isArray(i) ? i[0] ?? null : i;
                            d(t), t !== c && e.onSelectionChange?.(t)
                        } else {
                            let e = [];
                            Array.isArray(i) ? e = i : null != i && (e = [i]), d(e)
                        }
                    }, f = (0, x.useListState)({
                        ...e,
                        selectionMode: t,
                        disallowEmptySelection: "single" === t,
                        allowDuplicateSelectionEvents: !0,
                        selectedKeys: (0, i.useMemo)(() => (function(e) {
                            if (void 0 !== e) return null === e ? [] : Array.isArray(e) ? e : [e]
                        })(c), [c]),
                        onSelectionChange: e => {
                            "all" !== e && ("single" === t ? p(e.values().next().value ?? null) : p([...e]), r && n.close(), y.commitValidation())
                        }
                    }), g = f.selectionManager.firstSelectedKey, m = (0, i.useMemo)(() => [...f.selectionManager.selectedKeys].map(e => f.collection.getItem(e)).filter(e => null != e), [f.selectionManager.selectedKeys, f.collection]), y = (0, M.useFormValidationState)({
                        ...e,
                        value: Array.isArray(c) && 0 === c.length ? null : c
                    }), [v, h] = (0, i.useState)(!1), [b] = (0, i.useState)(c);
                    return {
                        ...y,
                        ...f,
                        ...n,
                        value: c,
                        defaultValue: l ?? b,
                        setValue: p,
                        selectedKey: g,
                        setSelectedKey: p,
                        selectedItem: m[0] ?? null,
                        selectedItems: m,
                        defaultSelectedKey: e.defaultSelectedKey ?? ("single" === e.selectionMode ? b : null),
                        focusStrategy: a,
                        open(t = null) {
                            (0 !== f.collection.size || e.allowsEmptyCollection) && (o(t), n.open())
                        },
                        toggle(t = null) {
                            (0 !== f.collection.size || e.allowsEmptyCollection) && (o(t), n.toggle())
                        },
                        isFocused: v,
                        setFocused: h
                    }
                }(e),
                {
                    triggerProps: h,
                    valueProps: C,
                    menuProps: V
                } = function(e, t, r) {
                    let {
                        keyboardDelegate: y,
                        isDisabled: v,
                        isRequired: h,
                        name: b,
                        form: M,
                        validationBehavior: x = "aria"
                    } = e, S = (0, d.useCollator)({
                        usage: "search",
                        sensitivity: "base"
                    }), k = (0, i.useMemo)(() => y || new(0, o.ListKeyboardDelegate)(t.collection, t.disabledKeys, r, S), [y, t.collection, t.disabledKeys, S, r]), {
                        menuTriggerProps: C,
                        menuProps: w
                    } = (0, f.useMenuTrigger)({
                        isDisabled: v,
                        type: "listbox"
                    }, t, r), {
                        typeSelectProps: V
                    } = (0, g.useTypeSelect)({
                        keyboardDelegate: k,
                        selectionManager: t.selectionManager,
                        onTypeSelect(e) {
                            t.setSelectedKey(e)
                        }
                    }), {
                        isInvalid: P,
                        validationErrors: E,
                        validationDetails: A
                    } = t.displayValidation, {
                        labelProps: F,
                        fieldProps: I,
                        descriptionProps: L,
                        errorMessageProps: T
                    } = (0, c.useField)({
                        ...e,
                        labelElementType: "span",
                        isInvalid: P,
                        errorMessage: e.errorMessage || E
                    });
                    "multiple" === t.selectionManager.selectionMode && (V = {});
                    let D = (0, a.filterDOMProps)(e, {
                            labelable: !0
                        }),
                        K = (0, l.mergeProps)(V, C, I),
                        R = (0, p.useId)();
                    return m.set(t, {
                        isDisabled: v,
                        isRequired: h,
                        name: b,
                        form: M,
                        validationBehavior: x
                    }), {
                        labelProps: {
                            ...F,
                            onClick: () => {
                                e.isDisabled || (r.current?.focus(), (0, u.setInteractionModality)("keyboard"))
                            }
                        },
                        triggerProps: (0, l.mergeProps)(D, {
                            ...K,
                            isDisabled: v,
                            onKeyDown: (0, n.chain)(K.onKeyDown, e => {
                                if ("multiple" !== t.selectionManager.selectionMode) switch (e.key) {
                                    case "ArrowLeft": {
                                        e.preventDefault();
                                        let i = null != t.selectedKey ? k.getKeyAbove?.(t.selectedKey) : k.getFirstKey?.();
                                        null != i && t.setSelectedKey(i);
                                        break
                                    }
                                    case "ArrowRight": {
                                        e.preventDefault();
                                        let i = null != t.selectedKey ? k.getKeyBelow?.(t.selectedKey) : k.getFirstKey?.();
                                        null != i && t.setSelectedKey(i)
                                    }
                                }
                            }, e.onKeyDown),
                            onKeyUp: e.onKeyUp,
                            "aria-labelledby": [R, K["aria-labelledby"], K["aria-label"] && !K["aria-labelledby"] ? K.id : null].filter(Boolean).join(" "),
                            onFocus(i) {
                                t.isFocused || (e.onFocus && e.onFocus(i), e.onFocusChange && e.onFocusChange(!0), t.setFocused(!0))
                            },
                            onBlur(i) {
                                t.isOpen || (e.onBlur && e.onBlur(i), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1))
                            }
                        }),
                        valueProps: {
                            id: R
                        },
                        menuProps: {
                            ...w,
                            onAction: void 0,
                            autoFocus: t.focusStrategy || !0,
                            shouldSelectOnPressUp: !0,
                            shouldFocusOnHover: !0,
                            disallowEmptySelection: !0,
                            linkBehavior: "selection",
                            onBlur: i => {
                                (0, s.nodeContains)(i.currentTarget, i.relatedTarget) || (e.onBlur && e.onBlur(i), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1))
                            },
                            "aria-labelledby": [I["aria-labelledby"], K["aria-label"] && !I["aria-labelledby"] ? K.id : null].filter(Boolean).join(" ")
                        },
                        descriptionProps: L,
                        errorMessageProps: T,
                        isInvalid: P,
                        validationErrors: E,
                        validationDetails: A,
                        hiddenSelectProps: {
                            isDisabled: v,
                            name: b,
                            label: e.label,
                            state: t,
                            triggerRef: r,
                            form: M
                        }
                    }
                }(e, v, y),
                P = y.current?.clientWidth ? y.current?.clientWidth : 0,
                [E, F] = (0, i.useState)(P);
            (0, i.useEffect)(() => {
                F(P)
            }, [P]);
            let I = (0, r.clsx)("stroke-gray-900 group-hover/select:stroke-gray-800 dark:group-hover/select:stroke-gray-200", {
                    "rotate-180 stroke-gray-900 dark:stroke-gray-200": v.isOpen
                }),
                L = (0, r.clsx)("group/select", e.className);
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(b, {
                    state: v,
                    triggerRef: y,
                    label: e.label,
                    name: e.name
                }), (0, t.jsxs)(R, {
                    ...h,
                    ref: y,
                    isOpen: v.isOpen,
                    className: L,
                    children: [(0, t.jsx)("span", {
                        ...C,
                        className: (0, r.clsx)({
                            "text-gray-600 dark:text-gray-400": !v.selectedItem
                        }),
                        children: v.selectedItem ? v.selectedItem.rendered : e.placeholder || e.label
                    }), (0, t.jsx)("span", {
                        className: "pl-2",
                        children: (0, t.jsx)(w, {
                            className: I
                        })
                    })]
                }), v.isOpen && (0, t.jsx)(A, {
                    state: v,
                    triggerRef: y,
                    placement: "bottom start",
                    offset: 8,
                    width: E,
                    children: (0, t.jsx)(T, {
                        ...V,
                        state: v
                    })
                })]
            })
        };
    O.Item = C, e.s(["default", 0, O], 481392)
}]);