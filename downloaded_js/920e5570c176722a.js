(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 395055, 574026, 8265, 480826, 924759, 857982, 784728, e => {
    "use strict";
    e.i(757249);
    var t, r = e.i(615167),
        i = e.i(145158),
        n = e.i(454895);
    let o = (0, i.createContext)({
        strict: !1
    });
    e.s(["LazyContext", () => o], 574026);
    let a = (0, i.createContext)({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    });
    e.s(["MotionConfigContext", () => a], 8265);
    let s = (0, i.createContext)({});
    var l = e.i(99443),
        u = e.i(430483);

    function c(e) {
        return Array.isArray(e) ? e.join(" ") : e
    }
    var p = e.i(538305),
        d = e.i(350876),
        f = e.i(898194);
    let m = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    });

    function g(e, t, r) {
        for (let i in t)(0, p.isMotionValue)(t[i]) || (0, d.isForcedMotionValue)(i, r) || (e[i] = t[i])
    }
    var h = e.i(950393);
    let y = () => ({
        ...m(),
        attrs: {}
    });
    var x = e.i(192603);
    let v = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

    function b(e) {
        return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || v.has(e)
    }
    let w = e => !b(e);
    try {
        t = e.r(627686).default, "function" == typeof t && (w = e => e.startsWith("on") ? !b(e) : t(e))
    } catch {}
    var C = e.i(494126),
        k = e.i(682275),
        S = e.i(58214),
        V = e.i(140508);

    function P(e) {
        let t = (0, i.useRef)(null);
        return null === t.current && (t.current = e()), t.current
    }
    e.s(["useConstant", () => P], 480826);
    var M = e.i(410068);
    let T = e => (t, r) => {
            let n = (0, i.useContext)(s),
                o = (0, i.useContext)(S.PresenceContext),
                a = () => (function({
                    scrapeMotionValuesFromProps: e,
                    createRenderState: t
                }, r, i, n) {
                    return {
                        latestValues: function(e, t, r, i) {
                            let n = {},
                                o = i(e, {});
                            for (let e in o) n[e] = (0, M.resolveMotionValue)(o[e]);
                            let {
                                initial: a,
                                animate: s
                            } = e, u = (0, l.isControllingVariants)(e), c = (0, l.isVariantNode)(e);
                            t && c && !u && !1 !== e.inherit && (void 0 === a && (a = t.initial), void 0 === s && (s = t.animate));
                            let p = !!r && !1 === r.initial,
                                d = (p = p || !1 === a) ? s : a;
                            if (d && "boolean" != typeof d && !(0, k.isAnimationControls)(d)) {
                                let t = Array.isArray(d) ? d : [d];
                                for (let r = 0; r < t.length; r++) {
                                    let i = (0, V.resolveVariantFromProps)(e, t[r]);
                                    if (i) {
                                        let {
                                            transitionEnd: e,
                                            transition: t,
                                            ...r
                                        } = i;
                                        for (let e in r) {
                                            let t = r[e];
                                            if (Array.isArray(t)) {
                                                let e = p ? t.length - 1 : 0;
                                                t = t[e]
                                            }
                                            null !== t && (n[e] = t)
                                        }
                                        for (let t in e) n[t] = e[t]
                                    }
                                }
                            }
                            return n
                        }(r, i, n, e),
                        renderState: t()
                    }
                })(e, t, n, o);
            return r ? a() : P(a)
        },
        A = T({
            scrapeMotionValuesFromProps: e.i(599666).scrapeMotionValuesFromProps,
            createRenderState: m
        }),
        L = T({
            scrapeMotionValuesFromProps: e.i(27910).scrapeMotionValuesFromProps,
            createRenderState: y
        });
    var O = e.i(646745),
        R = e.i(578263);

    function E(e) {
        for (let t in e) R.featureDefinitions[t] = {
            ...R.featureDefinitions[t],
            ...e[t]
        }
    }
    e.s(["loadFeatures", () => E], 924759);
    let F = Symbol.for("motionComponentSymbol");
    var D = e.i(201782),
        W = e.i(341234),
        H = e.i(452278);
    let j = O.isBrowser ? i.useLayoutEffect : i.useEffect;

    function I(e, {
        forwardMotionProps: t = !1
    } = {}, d, v) {
        d && E(d);
        let k = (0, C.isSVGComponent)(e) ? L : A;

        function V(d, V) {
            var P;
            let M, T = {
                    ...(0, i.useContext)(a),
                    ...d,
                    layoutId: function({
                        layoutId: e
                    }) {
                        let t = (0, i.useContext)(n.LayoutGroupContext).id;
                        return t && void 0 !== e ? t + "-" + e : e
                    }(d)
                },
                {
                    isStatic: A
                } = T,
                L = function(e) {
                    let {
                        initial: t,
                        animate: r
                    } = function(e, t) {
                        if ((0, l.isControllingVariants)(e)) {
                            let {
                                initial: t,
                                animate: r
                            } = e;
                            return {
                                initial: !1 === t || (0, u.isVariantLabel)(t) ? t : void 0,
                                animate: (0, u.isVariantLabel)(r) ? r : void 0
                            }
                        }
                        return !1 !== e.inherit ? t : {}
                    }(e, (0, i.useContext)(s));
                    return (0, i.useMemo)(() => ({
                        initial: t,
                        animate: r
                    }), [c(t), c(r)])
                }(d),
                E = k(d, A);
            if (!A && O.isBrowser) {
                (0, i.useContext)(o).strict;
                let t = function(e) {
                    let {
                        drag: t,
                        layout: r
                    } = R.featureDefinitions;
                    if (!t && !r) return {};
                    let i = {
                        ...t,
                        ...r
                    };
                    return {
                        MeasureLayout: t?.isEnabled(e) || r?.isEnabled(e) ? i.MeasureLayout : void 0,
                        ProjectionNode: i.ProjectionNode
                    }
                }(T);
                M = t.MeasureLayout, L.visualElement = function(e, t, r, n, l) {
                    let {
                        visualElement: u
                    } = (0, i.useContext)(s), c = (0, i.useContext)(o), p = (0, i.useContext)(S.PresenceContext), d = (0, i.useContext)(a).reducedMotion, f = (0, i.useRef)(null);
                    n = n || c.renderer, !f.current && n && (f.current = n(e, {
                        visualState: t,
                        parent: u,
                        props: r,
                        presenceContext: p,
                        blockInitialAnimation: !!p && !1 === p.initial,
                        reducedMotionConfig: d
                    }));
                    let m = f.current,
                        g = (0, i.useContext)(H.SwitchLayoutGroupContext);
                    m && !m.projection && l && ("html" === m.type || "svg" === m.type) && function(e, t, r, i) {
                        let {
                            layoutId: n,
                            layout: o,
                            drag: a,
                            dragConstraints: s,
                            layoutScroll: l,
                            layoutRoot: u,
                            layoutCrossfade: c
                        } = t;
                        e.projection = new r(e.latestValues, t["data-framer-portal-id"] ? void 0 : function e(t) {
                            if (t) return !1 !== t.options.allowProjection ? t.projection : e(t.parent)
                        }(e.parent)), e.projection.setOptions({
                            layoutId: n,
                            layout: o,
                            alwaysMeasureLayout: !!a || s && (0, D.isRefObject)(s),
                            visualElement: e,
                            animationType: "string" == typeof o ? o : "both",
                            initialPromotionConfig: i,
                            crossfade: c,
                            layoutScroll: l,
                            layoutRoot: u
                        })
                    }(f.current, r, l, g);
                    let h = (0, i.useRef)(!1);
                    (0, i.useInsertionEffect)(() => {
                        m && h.current && m.update(r, p)
                    });
                    let y = r[W.optimizedAppearDataAttribute],
                        x = (0, i.useRef)(!!y && !window.MotionHandoffIsComplete?.(y) && window.MotionHasOptimisedAnimation?.(y));
                    return j(() => {
                        m && (h.current = !0, window.MotionIsMounted = !0, m.updateFeatures(), m.scheduleRenderMicrotask(), x.current && m.animationState && m.animationState.animateChanges())
                    }), (0, i.useEffect)(() => {
                        m && (!x.current && m.animationState && m.animationState.animateChanges(), x.current && (queueMicrotask(() => {
                            window.MotionHandoffMarkAsComplete?.(y)
                        }), x.current = !1), m.enteringChildren = void 0)
                    }), m
                }(e, E, T, v, t.ProjectionNode)
            }
            return (0, r.jsxs)(s.Provider, {
                value: L,
                children: [M && L.visualElement ? (0, r.jsx)(M, {
                    visualElement: L.visualElement,
                    ...T
                }) : null, function(e, t, r, {
                    latestValues: n
                }, o, a = !1) {
                    let s = ((0, C.isSVGComponent)(e) ? function(e, t, r, n) {
                            let o = (0, i.useMemo)(() => {
                                let r = y();
                                return (0, h.buildSVGAttrs)(r, t, (0, x.isSVGTag)(n), e.transformTemplate, e.style), {
                                    ...r.attrs,
                                    style: {
                                        ...r.style
                                    }
                                }
                            }, [t]);
                            if (e.style) {
                                let t = {};
                                g(t, e.style, e), o.style = {
                                    ...t,
                                    ...o.style
                                }
                            }
                            return o
                        } : function(e, t) {
                            let r, n, o = {},
                                a = (r = e.style || {}, g(n = {}, r, e), Object.assign(n, function({
                                    transformTemplate: e
                                }, t) {
                                    return (0, i.useMemo)(() => {
                                        let r = m();
                                        return (0, f.buildHTMLStyles)(r, t, e), Object.assign({}, r.vars, r.style)
                                    }, [t])
                                }(e, t)), n);
                            return e.drag && !1 !== e.dragListener && (o.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = !0 === e.drag ? "none" : `pan-${"x"===e.drag?"y":"x"}`), void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (o.tabIndex = 0), o.style = a, o
                        })(t, n, o, e),
                        l = function(e, t, r) {
                            let i = {};
                            for (let n in e)("values" !== n || "object" != typeof e.values) && (w(n) || !0 === r && b(n) || !t && !b(n) || e.draggable && n.startsWith("onDrag")) && (i[n] = e[n]);
                            return i
                        }(t, "string" == typeof e, a),
                        u = e !== i.Fragment ? {
                            ...l,
                            ...s,
                            ref: r
                        } : {},
                        {
                            children: c
                        } = t,
                        d = (0, i.useMemo)(() => (0, p.isMotionValue)(c) ? c.get() : c, [c]);
                    return (0, i.createElement)(e, {
                        ...u,
                        children: d
                    })
                }(e, d, (P = L.visualElement, (0, i.useCallback)(e => {
                    e && E.onMount && E.onMount(e), P && (e ? P.mount(e) : P.unmount()), V && ("function" == typeof V ? V(e) : (0, D.isRefObject)(V) && (V.current = e))
                }, [P])), E, A, t)]
            })
        }
        V.displayName = `motion.${"string"==typeof e?e:`create(${e.displayName??e.name??""})`}`;
        let P = (0, i.forwardRef)(V);
        return P[F] = e, P
    }

    function B(e, t) {
        if ("u" < typeof Proxy) return I;
        let r = new Map,
            i = (r, i) => I(r, i, e, t);
        return new Proxy((e, t) => i(e, t), {
            get: (n, o) => "create" === o ? i : (r.has(o) || r.set(o, I(o, void 0, e, t)), r.get(o))
        })
    }
    e.s(["useIsomorphicLayoutEffect", () => j], 857982), e.s(["createMotionComponent", () => I], 784728), e.s(["createMotionProxy", () => B], 395055)
}, 627686, e => {
    "use strict";
    var t, r, i = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        n = (t = function(e) {
            return i.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && 91 > e.charCodeAt(2)
        }, r = Object.create(null), function(e) {
            return void 0 === r[e] && (r[e] = t(e)), r[e]
        });
    e.s(["default", () => n], 627686)
}, 646745, e => {
    "use strict";
    let t = "u" > typeof window;
    e.s(["isBrowser", () => t])
}, 682275, e => {
    "use strict";

    function t(e) {
        return null !== e && "object" == typeof e && "function" == typeof e.start
    }
    e.s(["isAnimationControls", () => t])
}, 430483, 351380, e => {
    "use strict";

    function t(e) {
        return "string" == typeof e || Array.isArray(e)
    }
    e.s(["isVariantLabel", () => t], 430483);
    let r = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
        i = ["initial", ...r];
    e.s(["variantPriorityOrder", () => r, "variantProps", () => i], 351380)
}, 99443, e => {
    "use strict";
    var t = e.i(682275),
        r = e.i(430483),
        i = e.i(351380);

    function n(e) {
        return (0, t.isAnimationControls)(e.animate) || i.variantProps.some(t => (0, r.isVariantLabel)(e[t]))
    }

    function o(e) {
        return !!(n(e) || e.variants)
    }
    e.s(["isControllingVariants", () => n, "isVariantNode", () => o])
}, 538305, e => {
    "use strict";
    let t = e => !!(e && e.getVelocity);
    e.s(["isMotionValue", () => t])
}, 229859, e => {
    "use strict";
    let t = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        r = new Set(t);
    e.s(["transformPropOrder", () => t, "transformProps", () => r])
}, 242210, e => {
    "use strict";
    let t = e => t => "string" == typeof t && t.startsWith(e),
        r = t("--"),
        i = t("var(--"),
        n = e => !!i(e) && o.test(e.split("/*")[0].trim()),
        o = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    e.s(["isCSSVariableName", () => r, "isCSSVariableToken", () => n])
}, 826670, e => {
    "use strict";
    var t = e.i(242210);
    let r = {};

    function i(e) {
        for (let i in e) r[i] = e[i], (0, t.isCSSVariableName)(i) && (r[i].isCSSVariable = !0)
    }
    e.s(["addScaleCorrector", () => i, "scaleCorrectors", () => r])
}, 350876, e => {
    "use strict";
    var t = e.i(229859),
        r = e.i(826670);

    function i(e, {
        layout: i,
        layoutId: n
    }) {
        return t.transformProps.has(e) || e.startsWith("origin") || (i || void 0 !== n) && (!!r.scaleCorrectors[e] || "opacity" === e)
    }
    e.s(["isForcedMotionValue", () => i])
}, 709584, e => {
    "use strict";
    let t = (e, t) => t && "number" == typeof e ? t.transform(e) : e;
    e.s(["getValueAsType", () => t])
}, 483032, e => {
    "use strict";
    let t = (e, t, r) => r > t ? t : r < e ? e : r;
    e.s(["clamp", () => t])
}, 960851, e => {
    "use strict";
    var t = e.i(483032);
    let r = {
            test: e => "number" == typeof e,
            parse: parseFloat,
            transform: e => e
        },
        i = {
            ...r,
            transform: e => (0, t.clamp)(0, 1, e)
        },
        n = {
            ...r,
            default: 1
        };
    e.s(["alpha", () => i, "number", () => r, "scale", () => n])
}, 785855, e => {
    "use strict";
    let t = {
        ...e.i(960851).number,
        transform: Math.round
    };
    e.s(["int", () => t])
}, 21365, e => {
    "use strict";
    let t = e => ({
            test: t => "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length,
            parse: parseFloat,
            transform: t => `${t}${e}`
        }),
        r = t("deg"),
        i = t("%"),
        n = t("px"),
        o = t("vh"),
        a = t("vw"),
        s = {
            ...i,
            parse: e => i.parse(e) / 100,
            transform: e => i.transform(100 * e)
        };
    e.s(["degrees", () => r, "percent", () => i, "progressPercentage", () => s, "px", () => n, "vh", () => o, "vw", () => a])
}, 124424, e => {
    "use strict";
    var t = e.i(785855),
        r = e.i(960851),
        i = e.i(21365);
    let n = {
            rotate: i.degrees,
            rotateX: i.degrees,
            rotateY: i.degrees,
            rotateZ: i.degrees,
            scale: r.scale,
            scaleX: r.scale,
            scaleY: r.scale,
            scaleZ: r.scale,
            skew: i.degrees,
            skewX: i.degrees,
            skewY: i.degrees,
            distance: i.px,
            translateX: i.px,
            translateY: i.px,
            translateZ: i.px,
            x: i.px,
            y: i.px,
            z: i.px,
            perspective: i.px,
            transformPerspective: i.px,
            opacity: r.alpha,
            originX: i.progressPercentage,
            originY: i.progressPercentage,
            originZ: i.px
        },
        o = {
            borderWidth: i.px,
            borderTopWidth: i.px,
            borderRightWidth: i.px,
            borderBottomWidth: i.px,
            borderLeftWidth: i.px,
            borderRadius: i.px,
            radius: i.px,
            borderTopLeftRadius: i.px,
            borderTopRightRadius: i.px,
            borderBottomRightRadius: i.px,
            borderBottomLeftRadius: i.px,
            width: i.px,
            maxWidth: i.px,
            height: i.px,
            maxHeight: i.px,
            top: i.px,
            right: i.px,
            bottom: i.px,
            left: i.px,
            padding: i.px,
            paddingTop: i.px,
            paddingRight: i.px,
            paddingBottom: i.px,
            paddingLeft: i.px,
            margin: i.px,
            marginTop: i.px,
            marginRight: i.px,
            marginBottom: i.px,
            marginLeft: i.px,
            backgroundPositionX: i.px,
            backgroundPositionY: i.px,
            ...n,
            zIndex: t.int,
            fillOpacity: r.alpha,
            strokeOpacity: r.alpha,
            numOctaves: t.int
        };
    e.s(["numberValueTypes", () => o], 124424)
}, 898194, e => {
    "use strict";
    var t = e.i(229859),
        r = e.i(242210),
        i = e.i(709584),
        n = e.i(124424);
    let o = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        },
        a = t.transformPropOrder.length;

    function s(e, s, l) {
        let {
            style: u,
            vars: c,
            transformOrigin: p
        } = e, d = !1, f = !1;
        for (let e in s) {
            let o = s[e];
            if (t.transformProps.has(e)) {
                d = !0;
                continue
            }
            if ((0, r.isCSSVariableName)(e)) {
                c[e] = o;
                continue
            } {
                let t = (0, i.getValueAsType)(o, n.numberValueTypes[e]);
                e.startsWith("origin") ? (f = !0, p[e] = t) : u[e] = t
            }
        }
        if (!s.transform && (d || l ? u.transform = function(e, r, s) {
                let l = "",
                    u = !0;
                for (let c = 0; c < a; c++) {
                    let a = t.transformPropOrder[c],
                        p = e[a];
                    if (void 0 === p) continue;
                    let d = !0;
                    if (!(d = "number" == typeof p ? p === +!!a.startsWith("scale") : 0 === parseFloat(p)) || s) {
                        let e = (0, i.getValueAsType)(p, n.numberValueTypes[a]);
                        if (!d) {
                            u = !1;
                            let t = o[a] || a;
                            l += `${t}(${e}) `
                        }
                        s && (r[a] = e)
                    }
                }
                return l = l.trim(), s ? l = s(r, u ? "" : l) : u && (l = "none"), l
            }(s, e.transform, l) : u.transform && (u.transform = "none")), f) {
            let {
                originX: e = "50%",
                originY: t = "50%",
                originZ: r = 0
            } = p;
            u.transformOrigin = `${e} ${t} ${r}`
        }
    }
    e.s(["buildHTMLStyles", () => s], 898194)
}, 950393, 192603, e => {
    "use strict";
    var t = e.i(898194),
        r = e.i(21365);
    let i = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        },
        n = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };

    function o(e, {
        attrX: o,
        attrY: a,
        attrScale: s,
        pathLength: l,
        pathSpacing: u = 1,
        pathOffset: c = 0,
        ...p
    }, d, f, m) {
        if ((0, t.buildHTMLStyles)(e, p, f), d) {
            e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
            return
        }
        e.attrs = e.style, e.style = {};
        let {
            attrs: g,
            style: h
        } = e;
        g.transform && (h.transform = g.transform, delete g.transform), (h.transform || g.transformOrigin) && (h.transformOrigin = g.transformOrigin ?? "50% 50%", delete g.transformOrigin), h.transform && (h.transformBox = m?.transformBox ?? "fill-box", delete g.transformBox), void 0 !== o && (g.x = o), void 0 !== a && (g.y = a), void 0 !== s && (g.scale = s), void 0 !== l && function(e, t, o = 1, a = 0, s = !0) {
            e.pathLength = 1;
            let l = s ? i : n;
            e[l.offset] = r.px.transform(-a);
            let u = r.px.transform(t),
                c = r.px.transform(o);
            e[l.array] = `${u} ${c}`
        }(g, l, u, c, !1)
    }
    e.s(["buildSVGAttrs", () => o], 950393);
    let a = e => "string" == typeof e && "svg" === e.toLowerCase();
    e.s(["isSVGTag", () => a], 192603)
}, 494126, e => {
    "use strict";
    let t = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

    function r(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (t.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
        return !1
    }
    e.s(["isSVGComponent", () => r], 494126)
}, 140508, e => {
    "use strict";

    function t(e) {
        let t = [{}, {}];
        return e?.values.forEach((e, r) => {
            t[0][r] = e.get(), t[1][r] = e.getVelocity()
        }), t
    }

    function r(e, r, i, n) {
        if ("function" == typeof r) {
            let [o, a] = t(n);
            r = r(void 0 !== i ? i : e.custom, o, a)
        }
        if ("string" == typeof r && (r = e.variants && e.variants[r]), "function" == typeof r) {
            let [o, a] = t(n);
            r = r(void 0 !== i ? i : e.custom, o, a)
        }
        return r
    }
    e.s(["resolveVariantFromProps", () => r])
}, 599666, e => {
    "use strict";
    var t = e.i(538305),
        r = e.i(350876);

    function i(e, i, n) {
        let {
            style: o
        } = e, a = {};
        for (let s in o)((0, t.isMotionValue)(o[s]) || i.style && (0, t.isMotionValue)(i.style[s]) || (0, r.isForcedMotionValue)(s, e) || n?.getValue(s)?.liveStyle !== void 0) && (a[s] = o[s]);
        return a
    }
    e.s(["scrapeMotionValuesFromProps", () => i])
}, 27910, e => {
    "use strict";
    var t = e.i(538305),
        r = e.i(229859),
        i = e.i(599666);

    function n(e, n, o) {
        let a = (0, i.scrapeMotionValuesFromProps)(e, n, o);
        for (let i in e)((0, t.isMotionValue)(e[i]) || (0, t.isMotionValue)(n[i])) && (a[-1 !== r.transformPropOrder.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = e[i]);
        return a
    }
    e.s(["scrapeMotionValuesFromProps", () => n])
}, 578263, e => {
    "use strict";
    let t = {
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
        r = {};
    for (let e in t) r[e] = {
        isEnabled: r => t[e].some(e => !!r[e])
    };
    e.s(["featureDefinitions", () => r])
}, 931453, e => {
    "use strict";
    let t = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    e.s(["camelToDash", () => t])
}, 341234, e => {
    "use strict";
    let t = "data-" + (0, e.i(931453).camelToDash)("framerAppearId");
    e.s(["optimizedAppearDataAttribute", () => t])
}, 454895, e => {
    "use strict";
    let t = (0, e.i(145158).createContext)({});
    e.s(["LayoutGroupContext", () => t])
}, 58214, e => {
    "use strict";
    let t = (0, e.i(145158).createContext)(null);
    e.s(["PresenceContext", () => t])
}, 410068, e => {
    "use strict";
    var t = e.i(538305);

    function r(e) {
        return (0, t.isMotionValue)(e) ? e.get() : e
    }
    e.s(["resolveMotionValue", () => r])
}, 201782, e => {
    "use strict";

    function t(e) {
        return e && "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
    }
    e.s(["isRefObject", () => t])
}, 452278, e => {
    "use strict";
    let t = (0, e.i(145158).createContext)({});
    e.s(["SwitchLayoutGroupContext", () => t])
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "91cfa5d6-f840-50cb-9ff9-28b0da37acea")
    } catch (e) {}
}();
//# debugId=91cfa5d6-f840-50cb-9ff9-28b0da37acea