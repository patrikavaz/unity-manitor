(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 474610, e => {
    "use strict";
    let t = "u" > typeof window;
    e.s(["isBrowser", 0, t])
}, 838024, e => {
    "use strict";
    e.s(["isAnimationControls", 0, function(e) {
        return null !== e && "object" == typeof e && "function" == typeof e.start
    }])
}, 593383, 541762, e => {
    "use strict";
    e.s(["isVariantLabel", 0, function(e) {
        return "string" == typeof e || Array.isArray(e)
    }], 593383);
    let t = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
        r = ["initial", ...t];
    e.s(["variantPriorityOrder", 0, t, "variantProps", 0, r], 541762)
}, 760042, e => {
    "use strict";
    var t = e.i(838024),
        r = e.i(593383),
        i = e.i(541762);

    function n(e) {
        return (0, t.isAnimationControls)(e.animate) || i.variantProps.some(t => (0, r.isVariantLabel)(e[t]))
    }
    e.s(["isControllingVariants", 0, n, "isVariantNode", 0, function(e) {
        return !!(n(e) || e.variants)
    }])
}, 538305, e => {
    "use strict";
    e.s(["isMotionValue", 0, e => !!(e && e.getVelocity)])
}, 229859, e => {
    "use strict";
    let t = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        r = new Set(t);
    e.s(["transformPropOrder", 0, t, "transformProps", 0, r])
}, 242210, e => {
    "use strict";
    let t = e => t => "string" == typeof t && t.startsWith(e),
        r = t("--"),
        i = t("var(--"),
        n = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    e.s(["isCSSVariableName", 0, r, "isCSSVariableToken", 0, e => !!i(e) && n.test(e.split("/*")[0].trim())])
}, 232602, e => {
    "use strict";
    var t = e.i(242210);
    let r = {};
    e.s(["addScaleCorrector", 0, function(e) {
        for (let i in e) r[i] = e[i], (0, t.isCSSVariableName)(i) && (r[i].isCSSVariable = !0)
    }, "scaleCorrectors", 0, r])
}, 816312, e => {
    "use strict";
    var t = e.i(229859),
        r = e.i(232602);
    e.s(["isForcedMotionValue", 0, function(e, {
        layout: i,
        layoutId: n
    }) {
        return t.transformProps.has(e) || e.startsWith("origin") || (i || void 0 !== n) && (!!r.scaleCorrectors[e] || "opacity" === e)
    }])
}, 709584, e => {
    "use strict";
    e.s(["getValueAsType", 0, (e, t) => t && "number" == typeof e ? t.transform(e) : e])
}, 483032, e => {
    "use strict";
    e.s(["clamp", 0, (e, t, r) => r > t ? t : r < e ? e : r])
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
    e.s(["alpha", 0, i, "number", 0, r, "scale", 0, n])
}, 785855, e => {
    "use strict";
    let t = {
        ...e.i(960851).number,
        transform: Math.round
    };
    e.s(["int", 0, t])
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
    e.s(["degrees", 0, r, "percent", 0, i, "progressPercentage", 0, s, "px", 0, n, "vh", 0, o, "vw", 0, a])
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
    e.s(["numberValueTypes", 0, o], 124424)
}, 621524, e => {
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
    e.s(["buildHTMLStyles", 0, function(e, s, l) {
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
    }], 621524)
}, 211729, 661711, e => {
    "use strict";
    var t = e.i(621524),
        r = e.i(21365);
    let i = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        },
        n = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };
    e.s(["buildSVGAttrs", 0, function(e, {
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
            style: y
        } = e;
        g.transform && (y.transform = g.transform, delete g.transform), (y.transform || g.transformOrigin) && (y.transformOrigin = g.transformOrigin ?? "50% 50%", delete g.transformOrigin), y.transform && (y.transformBox = m?.transformBox ?? "fill-box", delete g.transformBox), void 0 !== o && (g.x = o), void 0 !== a && (g.y = a), void 0 !== s && (g.scale = s), void 0 !== l && function(e, t, o = 1, a = 0, s = !0) {
            e.pathLength = 1;
            let l = s ? i : n;
            e[l.offset] = r.px.transform(-a);
            let u = r.px.transform(t),
                c = r.px.transform(o);
            e[l.array] = `${u} ${c}`
        }(g, l, u, c, !1)
    }], 211729), e.s(["isSVGTag", 0, e => "string" == typeof e && "svg" === e.toLowerCase()], 661711)
}, 953234, e => {
    "use strict";
    let t = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
    e.s(["isSVGComponent", 0, function(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (t.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
        return !1
    }], 953234)
}, 142314, e => {
    "use strict";

    function t(e) {
        let t = [{}, {}];
        return e?.values.forEach((e, r) => {
            t[0][r] = e.get(), t[1][r] = e.getVelocity()
        }), t
    }
    e.s(["resolveVariantFromProps", 0, function(e, r, i, n) {
        if ("function" == typeof r) {
            let [o, a] = t(n);
            r = r(void 0 !== i ? i : e.custom, o, a)
        }
        if ("string" == typeof r && (r = e.variants && e.variants[r]), "function" == typeof r) {
            let [o, a] = t(n);
            r = r(void 0 !== i ? i : e.custom, o, a)
        }
        return r
    }])
}, 53665, e => {
    "use strict";
    var t = e.i(538305),
        r = e.i(816312);
    e.s(["scrapeMotionValuesFromProps", 0, function(e, i, n) {
        let {
            style: o
        } = e, a = {};
        for (let s in o)((0, t.isMotionValue)(o[s]) || i.style && (0, t.isMotionValue)(i.style[s]) || (0, r.isForcedMotionValue)(s, e) || n?.getValue(s)?.liveStyle !== void 0) && (a[s] = o[s]);
        return a
    }])
}, 39873, e => {
    "use strict";
    var t = e.i(538305),
        r = e.i(229859),
        i = e.i(53665);
    e.s(["scrapeMotionValuesFromProps", 0, function(e, n, o) {
        let a = (0, i.scrapeMotionValuesFromProps)(e, n, o);
        for (let i in e)((0, t.isMotionValue)(e[i]) || (0, t.isMotionValue)(n[i])) && (a[-1 !== r.transformPropOrder.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = e[i]);
        return a
    }])
}, 502247, e => {
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
    e.s(["featureDefinitions", 0, r])
}, 969722, e => {
    "use strict";
    e.s(["camelToDash", 0, e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()])
}, 248957, e => {
    "use strict";
    let t = "data-" + (0, e.i(969722).camelToDash)("framerAppearId");
    e.s(["optimizedAppearDataAttribute", 0, t])
}, 407093, e => {
    "use strict";
    let t = (0, e.i(3931).createContext)({});
    e.s(["LayoutGroupContext", 0, t])
}, 34760, e => {
    "use strict";
    let t = (0, e.i(3931).createContext)(null);
    e.s(["PresenceContext", 0, t])
}, 510982, e => {
    "use strict";
    var t = e.i(538305);
    e.s(["resolveMotionValue", 0, function(e) {
        return (0, t.isMotionValue)(e) ? e.get() : e
    }])
}, 580148, e => {
    "use strict";
    e.s(["isRefObject", 0, function(e) {
        return e && "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
    }])
}, 273825, e => {
    "use strict";
    let t = (0, e.i(3931).createContext)({});
    e.s(["SwitchLayoutGroupContext", 0, t])
}, 627686, e => {
    "use strict";
    var t, r, i = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        n = (t = function(e) {
            return i.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && 91 > e.charCodeAt(2)
        }, r = Object.create(null), function(e) {
            return void 0 === r[e] && (r[e] = t(e)), r[e]
        });
    e.s(["default", 0, n], 627686)
}, 365497, e => {
    "use strict";
    let t = (0, e.i(3931).createContext)({
        strict: !1
    });
    e.s(["LazyContext", 0, t])
}, 339967, e => {
    "use strict";
    let t = (0, e.i(3931).createContext)({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    });
    e.s(["MotionConfigContext", 0, t])
}, 581829, 16615, 183492, 889311, 359551, e => {
    "use strict";
    var t, r = e.i(3931);
    let i = (0, r.createContext)({});
    e.s(["MotionContext", 0, i], 581829);
    var n = e.i(760042),
        o = e.i(593383);

    function a(e) {
        return Array.isArray(e) ? e.join(" ") : e
    }
    e.s(["useCreateMotionContext", 0, function(e) {
        let {
            initial: t,
            animate: s
        } = function(e, t) {
            if ((0, n.isControllingVariants)(e)) {
                let {
                    initial: t,
                    animate: r
                } = e;
                return {
                    initial: !1 === t || (0, o.isVariantLabel)(t) ? t : void 0,
                    animate: (0, o.isVariantLabel)(r) ? r : void 0
                }
            }
            return !1 !== e.inherit ? t : {}
        }(e, (0, r.useContext)(i));
        return (0, r.useMemo)(() => ({
            initial: t,
            animate: s
        }), [a(t), a(s)])
    }], 16615);
    var s = e.i(538305),
        l = e.i(816312),
        u = e.i(621524);
    let c = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    });

    function p(e, t, r) {
        for (let i in t)(0, s.isMotionValue)(t[i]) || (0, l.isForcedMotionValue)(i, r) || (e[i] = t[i])
    }
    e.s(["createHtmlRenderState", 0, c], 183492);
    var d = e.i(211729);
    let f = () => ({
        ...c(),
        attrs: {}
    });
    e.s(["createSvgRenderState", 0, f], 889311);
    var m = e.i(661711);
    let g = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

    function y(e) {
        return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || g.has(e)
    }
    let h = e => !y(e);
    try {
        t = e.r(627686).default, "function" == typeof t && (h = e => e.startsWith("on") ? !y(e) : t(e))
    } catch {}
    var x = e.i(953234);
    e.s(["useRender", 0, function(e, t, i, {
        latestValues: n
    }, o, a = !1) {
        let l = ((0, x.isSVGComponent)(e) ? function(e, t, i, n) {
                let o = (0, r.useMemo)(() => {
                    let r = f();
                    return (0, d.buildSVGAttrs)(r, t, (0, m.isSVGTag)(n), e.transformTemplate, e.style), {
                        ...r.attrs,
                        style: {
                            ...r.style
                        }
                    }
                }, [t]);
                if (e.style) {
                    let t = {};
                    p(t, e.style, e), o.style = {
                        ...t,
                        ...o.style
                    }
                }
                return o
            } : function(e, t) {
                let i, n, o = {},
                    a = (i = e.style || {}, p(n = {}, i, e), Object.assign(n, function({
                        transformTemplate: e
                    }, t) {
                        return (0, r.useMemo)(() => {
                            let r = c();
                            return (0, u.buildHTMLStyles)(r, t, e), Object.assign({}, r.vars, r.style)
                        }, [t])
                    }(e, t)), n);
                return e.drag && !1 !== e.dragListener && (o.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = !0 === e.drag ? "none" : `pan-${"x"===e.drag?"y":"x"}`), void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (o.tabIndex = 0), o.style = a, o
            })(t, n, o, e),
            g = function(e, t, r) {
                let i = {};
                for (let n in e)("values" !== n || "object" != typeof e.values) && (h(n) || !0 === r && y(n) || !t && !y(n) || e.draggable && n.startsWith("onDrag")) && (i[n] = e[n]);
                return i
            }(t, "string" == typeof e, a),
            v = e !== r.Fragment ? {
                ...g,
                ...l,
                ref: i
            } : {},
            {
                children: b
            } = t,
            C = (0, r.useMemo)(() => (0, s.isMotionValue)(b) ? b.get() : b, [b]);
        return (0, r.createElement)(e, {
            ...v,
            children: C
        })
    }], 359551)
}, 165780, e => {
    "use strict";
    var t = e.i(3931);
    e.s(["useConstant", 0, function(e) {
        let r = (0, t.useRef)(null);
        return null === r.current && (r.current = e()), r.current
    }])
}, 776823, 325254, 789984, 288693, 423154, e => {
    "use strict";
    var t = e.i(3931),
        r = e.i(838024),
        i = e.i(581829),
        n = e.i(34760),
        o = e.i(760042),
        a = e.i(142314),
        s = e.i(165780),
        l = e.i(510982);
    let u = e => (u, c) => {
        let p = (0, t.useContext)(i.MotionContext),
            d = (0, t.useContext)(n.PresenceContext),
            f = () => (function({
                scrapeMotionValuesFromProps: e,
                createRenderState: t
            }, i, n, s) {
                return {
                    latestValues: function(e, t, i, n) {
                        let s = {},
                            u = n(e, {});
                        for (let e in u) s[e] = (0, l.resolveMotionValue)(u[e]);
                        let {
                            initial: c,
                            animate: p
                        } = e, d = (0, o.isControllingVariants)(e), f = (0, o.isVariantNode)(e);
                        t && f && !d && !1 !== e.inherit && (void 0 === c && (c = t.initial), void 0 === p && (p = t.animate));
                        let m = !!i && !1 === i.initial,
                            g = (m = m || !1 === c) ? p : c;
                        if (g && "boolean" != typeof g && !(0, r.isAnimationControls)(g)) {
                            let t = Array.isArray(g) ? g : [g];
                            for (let r = 0; r < t.length; r++) {
                                let i = (0, a.resolveVariantFromProps)(e, t[r]);
                                if (i) {
                                    let {
                                        transitionEnd: e,
                                        transition: t,
                                        ...r
                                    } = i;
                                    for (let e in r) {
                                        let t = r[e];
                                        if (Array.isArray(t)) {
                                            let e = m ? t.length - 1 : 0;
                                            t = t[e]
                                        }
                                        null !== t && (s[e] = t)
                                    }
                                    for (let t in e) s[t] = e[t]
                                }
                            }
                        }
                        return s
                    }(i, n, s, e),
                    renderState: t()
                }
            })(e, u, p, d);
        return c ? f() : (0, s.useConstant)(f)
    };
    var c = e.i(183492);
    let p = u({
        scrapeMotionValuesFromProps: e.i(53665).scrapeMotionValuesFromProps,
        createRenderState: c.createHtmlRenderState
    });
    e.s(["useHTMLVisualState", 0, p], 776823);
    var d = e.i(889311);
    let f = u({
        scrapeMotionValuesFromProps: e.i(39873).scrapeMotionValuesFromProps,
        createRenderState: d.createSvgRenderState
    });
    e.s(["useSVGVisualState", 0, f], 325254);
    var m = e.i(502247);
    e.s(["loadFeatures", 0, function(e) {
        for (let t in e) m.featureDefinitions[t] = {
            ...m.featureDefinitions[t],
            ...e[t]
        }
    }], 789984);
    let g = Symbol.for("motionComponentSymbol");
    e.s(["motionComponentSymbol", 0, g], 288693);
    var y = e.i(580148);
    e.s(["useMotionRef", 0, function(e, r, i) {
        return (0, t.useCallback)(t => {
            t && e.onMount && e.onMount(t), r && (t ? r.mount(t) : r.unmount()), i && ("function" == typeof i ? i(t) : (0, y.isRefObject)(i) && (i.current = t))
        }, [r])
    }], 423154)
}, 148473, e => {
    "use strict";
    var t = e.i(3931);
    let r = e.i(474610).isBrowser ? t.useLayoutEffect : t.useEffect;
    e.s(["useIsomorphicLayoutEffect", 0, r])
}, 53645, 713790, e => {
    "use strict";
    e.i(788727);
    var t = e.i(500783),
        r = e.i(3931),
        i = e.i(407093),
        n = e.i(365497),
        o = e.i(339967),
        a = e.i(581829),
        s = e.i(16615),
        l = e.i(359551),
        u = e.i(953234),
        c = e.i(776823),
        p = e.i(325254),
        d = e.i(474610),
        f = e.i(502247),
        m = e.i(789984),
        g = e.i(288693),
        y = e.i(423154),
        h = e.i(248957),
        x = e.i(34760),
        v = e.i(273825),
        b = e.i(580148),
        C = e.i(148473);

    function S(e, {
        forwardMotionProps: w = !1
    } = {}, M, k) {
        M && (0, m.loadFeatures)(M);
        let V = (0, u.isSVGComponent)(e) ? p.useSVGVisualState : c.useHTMLVisualState;

        function P(u, c) {
            let p, m = {
                    ...(0, r.useContext)(o.MotionConfigContext),
                    ...u,
                    layoutId: function({
                        layoutId: e
                    }) {
                        let t = (0, r.useContext)(i.LayoutGroupContext).id;
                        return t && void 0 !== e ? t + "-" + e : e
                    }(u)
                },
                {
                    isStatic: g
                } = m,
                S = (0, s.useCreateMotionContext)(u),
                M = V(u, g);
            if (!g && d.isBrowser) {
                (0, r.useContext)(n.LazyContext).strict;
                let t = function(e) {
                    let {
                        drag: t,
                        layout: r
                    } = f.featureDefinitions;
                    if (!t && !r) return {};
                    let i = {
                        ...t,
                        ...r
                    };
                    return {
                        MeasureLayout: t?.isEnabled(e) || r?.isEnabled(e) ? i.MeasureLayout : void 0,
                        ProjectionNode: i.ProjectionNode
                    }
                }(m);
                p = t.MeasureLayout, S.visualElement = function(e, t, i, s, l) {
                    let {
                        visualElement: u
                    } = (0, r.useContext)(a.MotionContext), c = (0, r.useContext)(n.LazyContext), p = (0, r.useContext)(x.PresenceContext), d = (0, r.useContext)(o.MotionConfigContext).reducedMotion, f = (0, r.useRef)(null);
                    s = s || c.renderer, !f.current && s && (f.current = s(e, {
                        visualState: t,
                        parent: u,
                        props: i,
                        presenceContext: p,
                        blockInitialAnimation: !!p && !1 === p.initial,
                        reducedMotionConfig: d
                    }));
                    let m = f.current,
                        g = (0, r.useContext)(v.SwitchLayoutGroupContext);
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
                            alwaysMeasureLayout: !!a || s && (0, b.isRefObject)(s),
                            visualElement: e,
                            animationType: "string" == typeof o ? o : "both",
                            initialPromotionConfig: i,
                            crossfade: c,
                            layoutScroll: l,
                            layoutRoot: u
                        })
                    }(f.current, i, l, g);
                    let y = (0, r.useRef)(!1);
                    (0, r.useInsertionEffect)(() => {
                        m && y.current && m.update(i, p)
                    });
                    let S = i[h.optimizedAppearDataAttribute],
                        w = (0, r.useRef)(!!S && !window.MotionHandoffIsComplete?.(S) && window.MotionHasOptimisedAnimation?.(S));
                    return (0, C.useIsomorphicLayoutEffect)(() => {
                        m && (y.current = !0, window.MotionIsMounted = !0, m.updateFeatures(), m.scheduleRenderMicrotask(), w.current && m.animationState && m.animationState.animateChanges())
                    }), (0, r.useEffect)(() => {
                        m && (!w.current && m.animationState && m.animationState.animateChanges(), w.current && (queueMicrotask(() => {
                            window.MotionHandoffMarkAsComplete?.(S)
                        }), w.current = !1), m.enteringChildren = void 0)
                    }), m
                }(e, M, m, k, t.ProjectionNode)
            }
            return (0, t.jsxs)(a.MotionContext.Provider, {
                value: S,
                children: [p && S.visualElement ? (0, t.jsx)(p, {
                    visualElement: S.visualElement,
                    ...m
                }) : null, (0, l.useRender)(e, u, (0, y.useMotionRef)(M, S.visualElement, c), M, g, w)]
            })
        }
        P.displayName = `motion.${"string"==typeof e?e:`create(${e.displayName??e.name??""})`}`;
        let T = (0, r.forwardRef)(P);
        return T[g.motionComponentSymbol] = e, T
    }
    e.s(["createMotionComponent", 0, S], 713790), e.s(["createMotionProxy", 0, function(e, t) {
        if ("u" < typeof Proxy) return S;
        let r = new Map,
            i = (r, i) => S(r, i, e, t);
        return new Proxy((e, t) => i(e, t), {
            get: (n, o) => "create" === o ? i : (r.has(o) || r.set(o, S(o, void 0, e, t)), r.get(o))
        })
    }], 53645)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5c2731d1-aa5b-540a-a24c-e41a4dfe0743")
    } catch (e) {}
}();
//# debugId=5c2731d1-aa5b-540a-a24c-e41a4dfe0743