;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "34a957a1-ad19-d608-6ea4-13c18d37f868")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 570606, e => {
    "use strict";
    var t, n, i = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        o = (t = function(e) {
            return i.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && 91 > e.charCodeAt(2)
        }, n = Object.create(null), function(e) {
            return void 0 === n[e] && (n[e] = t(e)), n[e]
        });
    e.s(["default", 0, o], 570606)
}, 305892, e => {
    "use strict";
    var t = e.i(785328),
        n = e.i(409781),
        i = e.i(731268),
        o = e.i(626022);

    function r(e) {
        return "function" == typeof e
    }
    e.s(["LazyMotion", 0, function({
        children: e,
        features: a,
        strict: s = !1
    }) {
        let [, l] = (0, n.useState)(!r(a)), u = (0, n.useRef)(void 0);
        if (!r(a)) {
            let {
                renderer: e,
                ...t
            } = a;
            u.current = e, (0, o.loadFeatures)(t)
        }
        return (0, n.useEffect)(() => {
            r(a) && a().then(({
                renderer: e,
                ...t
            }) => {
                (0, o.loadFeatures)(t), u.current = e, l(!0)
            })
        }, []), (0, t.jsx)(i.LazyContext.Provider, {
            value: {
                renderer: u.current,
                strict: s
            },
            children: e
        })
    }])
}, 963864, e => {
    "use strict";
    let t = (0, e.i(409781).createContext)({});
    e.s(["LayoutGroupContext", 0, t])
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
    let i = (0, n.createContext)({});
    e.s(["MotionContext", 0, i], 428483);
    var o = e.i(587377),
        r = e.i(653425);

    function a(e) {
        return Array.isArray(e) ? e.join(" ") : e
    }
    e.s(["useCreateMotionContext", 0, function(e) {
        let {
            initial: t,
            animate: s
        } = function(e, t) {
            if ((0, o.isControllingVariants)(e)) {
                let {
                    initial: t,
                    animate: n
                } = e;
                return {
                    initial: !1 === t || (0, r.isVariantLabel)(t) ? t : void 0,
                    animate: (0, r.isVariantLabel)(n) ? n : void 0
                }
            }
            return !1 !== e.inherit ? t : {}
        }(e, (0, n.useContext)(i));
        return (0, n.useMemo)(() => ({
            initial: t,
            animate: s
        }), [a(t), a(s)])
    }], 466327);
    var s = e.i(140926),
        l = e.i(880925),
        u = e.i(493559);
    let c = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    });

    function d(e, t, n) {
        for (let i in t)(0, s.isMotionValue)(t[i]) || (0, l.isForcedMotionValue)(i, n) || (e[i] = t[i])
    }
    e.s(["createHtmlRenderState", 0, c], 668087);
    var p = e.i(734225),
        f = e.i(997214);
    let m = () => ({
        ...c(),
        attrs: {}
    });
    e.s(["createSvgRenderState", 0, m], 297953);
    let y = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);

    function g(e) {
        return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || y.has(e)
    }
    let h = e => !g(e);
    try {
        t = e.r(570606).default, "function" == typeof t && (h = e => e.startsWith("on") ? !g(e) : t(e))
    } catch {}
    var v = e.i(737328);
    e.s(["useRender", 0, function(e, t, i, {
        latestValues: o
    }, r, a = !1, l) {
        let y = (l ?? (0, v.isSVGComponent)(e) ? function(e, t, i, o) {
                let r = (0, n.useMemo)(() => {
                    let n = m();
                    return (0, p.buildSVGAttrs)(n, t, (0, f.isSVGTag)(o), e.transformTemplate, e.style), {
                        ...n.attrs,
                        style: {
                            ...n.style
                        }
                    }
                }, [t]);
                if (e.style) {
                    let t = {};
                    d(t, e.style, e), r.style = {
                        ...t,
                        ...r.style
                    }
                }
                return r
            } : function(e, t) {
                let i, o, r = {},
                    a = (i = e.style || {}, d(o = {}, i, e), Object.assign(o, function({
                        transformTemplate: e
                    }, t) {
                        return (0, n.useMemo)(() => {
                            let n = c();
                            return (0, u.buildHTMLStyles)(n, t, e), Object.assign({}, n.vars, n.style)
                        }, [t])
                    }(e, t)), o);
                return e.drag && !1 !== e.dragListener && (r.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = !0 === e.drag ? "none" : `pan-${"x"===e.drag?"y":"x"}`), void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = a, r
            })(t, o, r, e),
            x = function(e, t, n) {
                let i = {};
                for (let o in e)("values" !== o || "object" != typeof e.values) && !(0, s.isMotionValue)(e[o]) && (h(o) || !0 === n && g(o) || !t && !g(o) || e.draggable && o.startsWith("onDrag")) && (i[o] = e[o]);
                return i
            }(t, "string" == typeof e, a),
            C = e !== n.Fragment ? {
                ...x,
                ...y,
                ref: i
            } : {},
            {
                children: M
            } = t,
            S = (0, n.useMemo)(() => (0, s.isMotionValue)(M) ? M.get() : M, [M]);
        return (0, n.createElement)(e, {
            ...C,
            children: S
        })
    }], 782555);
    var x = e.i(268162);
    e.s(["scrapeHTMLMotionValuesFromProps", () => x.scrapeMotionValuesFromProps], 246373)
}, 820847, e => {
    "use strict";
    let t = (0, e.i(409781).createContext)(null);
    e.s(["PresenceContext", 0, t])
}, 210907, e => {
    "use strict";
    let t = (0, e.i(409781).createContext)({});
    e.s(["SwitchLayoutGroupContext", 0, t])
}, 626022, 442647, e => {
    "use strict";
    var t = e.i(453311);
    let n = {
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
        i = !1;

    function o() {
        return ! function() {
            if (i) return;
            let e = {};
            for (let t in n) e[t] = {
                isEnabled: e => n[t].some(t => !!e[t])
            };
            (0, t.setFeatureDefinitions)(e), i = !0
        }(), (0, t.getFeatureDefinitions)()
    }
    e.s(["getInitializedFeatureDefinitions", 0, o], 442647), e.s(["loadFeatures", 0, function(e) {
        let n = o();
        for (let t in e) n[t] = {
            ...n[t],
            ...e[t]
        };
        (0, t.setFeatureDefinitions)(n)
    }], 626022)
}, 319623, e => {
    "use strict";
    var t = e.i(785328),
        n = e.i(409781),
        i = e.i(963864),
        o = e.i(731268),
        r = e.i(481522),
        a = e.i(428483),
        s = e.i(466327),
        l = e.i(782555),
        u = e.i(737328),
        c = e.i(855096),
        d = e.i(230548),
        p = e.i(442647),
        f = e.i(626022),
        m = e.i(730324),
        y = e.i(989867),
        g = e.i(182526),
        h = e.i(820847),
        v = e.i(210907),
        x = e.i(112366),
        C = e.i(809018);
    e.s(["createMotionComponent", 0, function(e, {
        forwardMotionProps: M = !1,
        type: S
    } = {}, b, k) {
        b && (0, f.loadFeatures)(b);
        let w = S ? "svg" === S : (0, u.isSVGComponent)(e),
            L = w ? d.useSVGVisualState : c.useHTMLVisualState;

        function T(u, c) {
            let d, f = {
                    ...(0, n.useContext)(r.MotionConfigContext),
                    ...u,
                    layoutId: function({
                        layoutId: e
                    }) {
                        let t = (0, n.useContext)(i.LayoutGroupContext).id;
                        return t && void 0 !== e ? t + "-" + e : e
                    }(u)
                },
                {
                    isStatic: m
                } = f,
                S = (0, s.useCreateMotionContext)(u),
                b = L(u, m);
            if (!m && "u" > typeof window) {
                (0, n.useContext)(o.LazyContext).strict;
                let t = function(e) {
                    let {
                        drag: t,
                        layout: n
                    } = (0, p.getInitializedFeatureDefinitions)();
                    if (!t && !n) return {};
                    let i = {
                        ...t,
                        ...n
                    };
                    return {
                        MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? i.MeasureLayout : void 0,
                        ProjectionNode: i.ProjectionNode
                    }
                }(f);
                d = t.MeasureLayout, S.visualElement = function(e, t, i, s, l, u) {
                    let {
                        visualElement: c
                    } = (0, n.useContext)(a.MotionContext), d = (0, n.useContext)(o.LazyContext), p = (0, n.useContext)(h.PresenceContext), f = (0, n.useContext)(r.MotionConfigContext), m = f.reducedMotion, y = f.skipAnimations, M = (0, n.useRef)(null), S = (0, n.useRef)(!1);
                    s = s || d.renderer, !M.current && s && (M.current = s(e, {
                        visualState: t,
                        parent: c,
                        props: i,
                        presenceContext: p,
                        blockInitialAnimation: !!p && !1 === p.initial,
                        reducedMotionConfig: m,
                        skipAnimations: y,
                        isSVG: u
                    }), S.current && M.current && (M.current.manuallyAnimateOnMount = !0));
                    let b = M.current,
                        k = (0, n.useContext)(v.SwitchLayoutGroupContext);
                    b && !b.projection && l && ("html" === b.type || "svg" === b.type) && function(e, t, n, i) {
                        let {
                            layoutId: o,
                            layout: r,
                            drag: a,
                            dragConstraints: s,
                            layoutScroll: l,
                            layoutRoot: u,
                            layoutAnchor: c,
                            layoutCrossfade: d
                        } = t;
                        e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : function e(t) {
                            if (t) return !1 !== t.options.allowProjection ? t.projection : e(t.parent)
                        }(e.parent)), e.projection.setOptions({
                            layoutId: o,
                            layout: r,
                            alwaysMeasureLayout: !!a || s && (0, x.isRefObject)(s),
                            visualElement: e,
                            animationType: "string" == typeof r ? r : "both",
                            initialPromotionConfig: i,
                            crossfade: d,
                            layoutScroll: l,
                            layoutRoot: u,
                            layoutAnchor: c
                        })
                    }(M.current, i, l, k);
                    let w = (0, n.useRef)(!1);
                    (0, n.useInsertionEffect)(() => {
                        b && w.current && b.update(i, p)
                    });
                    let L = i[g.optimizedAppearDataAttribute],
                        T = (0, n.useRef)(!!L && "u" > typeof window && !window.MotionHandoffIsComplete?.(L) && window.MotionHasOptimisedAnimation?.(L));
                    return (0, C.useIsomorphicLayoutEffect)(() => {
                        S.current = !0, b && (w.current = !0, window.MotionIsMounted = !0, b.updateFeatures(), b.scheduleRenderMicrotask(), T.current && b.animationState && b.animationState.animateChanges())
                    }), (0, n.useEffect)(() => {
                        b && (!T.current && b.animationState && b.animationState.animateChanges(), T.current && (queueMicrotask(() => {
                            window.MotionHandoffMarkAsComplete?.(L)
                        }), T.current = !1), b.enteringChildren = void 0)
                    }), b
                }(e, b, f, k, t.ProjectionNode, w)
            }
            return (0, t.jsxs)(a.MotionContext.Provider, {
                value: S,
                children: [d && S.visualElement ? (0, t.jsx)(d, {
                    visualElement: S.visualElement,
                    ...f
                }) : null, (0, l.useRender)(e, u, (0, y.useMotionRef)(b, S.visualElement, c), b, m, M, w)]
            })
        }
        T.displayName = `motion.${"string"==typeof e?e:`create(${e.displayName??e.name??""})`}`;
        let A = (0, n.forwardRef)(T);
        return A[m.motionComponentSymbol] = e, A
    }], 319623)
}, 730324, 989867, e => {
    "use strict";
    let t = Symbol.for("motionComponentSymbol");
    e.s(["motionComponentSymbol", 0, t], 730324);
    var n = e.i(409781);
    e.s(["useMotionRef", 0, function(e, t, i) {
        let o = (0, n.useRef)(i);
        (0, n.useInsertionEffect)(() => {
            o.current = i
        });
        let r = (0, n.useRef)(null);
        return (0, n.useCallback)(n => {
            n && e.onMount?.(n), t && (n ? t.mount(n) : t.unmount());
            let i = o.current;
            if ("function" == typeof i)
                if (n) {
                    let e = i(n);
                    "function" == typeof e && (r.current = e)
                } else r.current ? (r.current(), r.current = null) : i(n);
            else i && (i.current = n)
        }, [t])
    }], 989867)
}, 512418, 298241, 112338, e => {
    "use strict";
    var t = e.i(319623);

    function n(e, n) {
        return (0, t.createMotionComponent)(e, n)
    }
    e.s(["createMinimalMotionComponent", 0, n], 298241);
    let i = n("a"),
        o = n("button"),
        r = n("div"),
        a = n("h2"),
        s = n("p"),
        l = n("span"),
        u = n("ul"),
        c = n("svg");
    e.s(["MotionA", 0, i, "MotionButton", 0, o, "MotionDiv", 0, r, "MotionH2", 0, a, "MotionP", 0, s, "MotionSpan", 0, l, "MotionSvg", 0, c, "MotionUl", 0, u], 112338), e.s(["div", 0, r], 512418)
}, 855096, 230548, e => {
    "use strict";
    var t = e.i(246373),
        n = e.i(766438),
        i = e.i(587377),
        o = e.i(819673),
        r = e.i(923792),
        a = e.i(409781),
        s = e.i(428483),
        l = e.i(820847),
        u = e.i(416007);
    let c = e => (t, c) => {
        let d = (0, a.useContext)(s.MotionContext),
            p = (0, a.useContext)(l.PresenceContext),
            f = () => (function({
                scrapeMotionValuesFromProps: e,
                createRenderState: t
            }, a, s, l) {
                return {
                    latestValues: function(e, t, a, s) {
                        let l = {},
                            u = s(e, {});
                        for (let e in u) l[e] = (0, n.resolveMotionValue)(u[e]);
                        let {
                            initial: c,
                            animate: d
                        } = e, p = (0, i.isControllingVariants)(e), f = (0, i.isVariantNode)(e);
                        t && f && !p && !1 !== e.inherit && (void 0 === c && (c = t.initial), void 0 === d && (d = t.animate));
                        let m = !!a && !1 === a.initial,
                            y = (m = m || !1 === c) ? d : c;
                        if (y && "boolean" != typeof y && !(0, o.isAnimationControls)(y)) {
                            let t = Array.isArray(y) ? y : [y];
                            for (let n = 0; n < t.length; n++) {
                                let i = (0, r.resolveVariantFromProps)(e, t[n]);
                                if (i) {
                                    let {
                                        transitionEnd: e,
                                        transition: t,
                                        ...n
                                    } = i;
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
                    }(a, s, l, e),
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
    let y = c({
        scrapeMotionValuesFromProps: f.scrapeMotionValuesFromProps,
        createRenderState: m.createSvgRenderState
    });
    e.s(["useSVGVisualState", 0, y], 230548)
}, 112366, e => {
    "use strict";
    e.s(["isRefObject", 0, function(e) {
        return e && "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
    }])
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
}, 766438, e => {
    "use strict";
    var t = e.i(140926);
    e.s(["resolveMotionValue", 0, function(e) {
        return (0, t.isMotionValue)(e) ? e.get() : e
    }])
}, 600634, e => {
    "use strict";
    var t = e.i(785328),
        n = e.i(305892);
    let i = () => e.A(337752).then(e => e.default);
    e.s(["default", 0, ({
        children: e
    }) => (0, t.jsx)(n.LazyMotion, {
        features: i,
        strict: !0,
        "data-sentry-element": "LazyMotion",
        "data-sentry-component": "FramerMotionLazy",
        "data-sentry-source-file": "FramerMotionLazy.tsx",
        children: e
    })])
}, 766930, 777137, e => {
    "use strict";
    var t = e.i(600634),
        n = e.i(785328),
        i = e.i(305892);
    let o = () => e.A(734013).then(e => e.default);
    e.s(["default", 0, ({
        children: e
    }) => (0, n.jsx)(i.LazyMotion, {
        features: o,
        strict: !0,
        "data-sentry-element": "LazyMotion",
        "data-sentry-component": "FramerMotionLayoutLazy",
        "data-sentry-source-file": "FramerMotionLayoutLazy.tsx",
        children: e
    })], 777137);
    let r = t.default;
    e.s(["default", 0, r], 766930)
}]);

//# debugId=34a957a1-ad19-d608-6ea4-13c18d37f868