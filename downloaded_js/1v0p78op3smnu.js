;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "9b648c54-0900-61e9-3dcb-97b2ef04063c")
    } catch (e) {}
}();
(() => {
    "use strict";
    (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 570606, e => {
        var t, n, r = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
            i = (t = function(e) {
                return r.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && 91 > e.charCodeAt(2)
            }, n = Object.create(null), function(e) {
                return void 0 === n[e] && (n[e] = t(e)), n[e]
            });
        e.s(["default", 0, i], 570606)
    }, 961348, e => {
        var t = e.i(167358),
            n = e.i(495056),
            r = e.i(817126),
            i = e.i(155121);

        function o(e) {
            return "function" == typeof e
        }
        e.s(["f", 0, function({
            children: e,
            features: a,
            strict: s = !1
        }) {
            let [, l] = (0, n.useState)(!o(a)), u = (0, n.useRef)(void 0);
            if (!o(a)) {
                let {
                    renderer: e,
                    ...t
                } = a;
                u.current = e, (0, i.f)(t)
            }
            return (0, n.useEffect)(() => {
                o(a) && a().then(({
                    renderer: e,
                    ...t
                }) => {
                    (0, i.f)(t), u.current = e, l(!0)
                })
            }, []), (0, t.jsx)(r.f.Provider, {
                value: {
                    renderer: u.current,
                    strict: s
                },
                children: e
            })
        }])
    }, 902294, e => {
        let t = (0, e.i(495056).createContext)({});
        e.s(["f", 0, t])
    }, 817126, e => {
        let t = (0, e.i(495056).createContext)({
            strict: !1
        });
        e.s(["f", 0, t])
    }, 978226, e => {
        let t = (0, e.i(495056).createContext)({
            transformPagePoint: e => e,
            isStatic: !1,
            reducedMotion: "never"
        });
        e.s(["f", 0, t])
    }, 676163, 985808, 889600, 365289, 299167, 246373, e => {
        var t, n = e.i(495056);
        let r = (0, n.createContext)({});
        e.s(["f", 0, r], 676163);
        var i = e.i(587377),
            o = e.i(653425);

        function a(e) {
            return Array.isArray(e) ? e.join(" ") : e
        }
        e.s(["f", 0, function(e) {
            let {
                initial: t,
                animate: s
            } = function(e, t) {
                if ((0, i.m)(e)) {
                    let {
                        initial: t,
                        animate: n
                    } = e;
                    return {
                        initial: !1 === t || (0, o.f)(t) ? t : void 0,
                        animate: (0, o.f)(n) ? n : void 0
                    }
                }
                return !1 !== e.inherit ? t : {}
            }(e, (0, n.useContext)(r));
            return (0, n.useMemo)(() => ({
                initial: t,
                animate: s
            }), [a(t), a(s)])
        }], 985808);
        var s = e.i(140926),
            l = e.i(880925),
            u = e.i(493559);
        let c = () => ({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {}
        });

        function f(e, t, n) {
            for (let r in t)(0, s.f)(t[r]) || (0, l.f)(r, n) || (e[r] = t[r])
        }
        e.s(["f", 0, c], 889600);
        var d = e.i(734225),
            p = e.i(997214);
        let m = () => ({
            ...c(),
            attrs: {}
        });
        e.s(["f", 0, m], 365289);
        let y = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);

        function g(e) {
            return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || y.has(e)
        }
        let h = e => !g(e);
        try {
            t = e.r(570606).default, "function" == typeof t && (h = e => e.startsWith("on") ? !g(e) : t(e))
        } catch {}
        var v = e.i(225436);
        e.s(["f", 0, function(e, t, r, {
            latestValues: i
        }, o, a = !1, l) {
            let y = (l ?? (0, v.f)(e) ? function(e, t, r, i) {
                    let o = (0, n.useMemo)(() => {
                        let n = m();
                        return (0, d.f)(n, t, (0, p.f)(i), e.transformTemplate, e.style), {
                            ...n.attrs,
                            style: {
                                ...n.style
                            }
                        }
                    }, [t]);
                    if (e.style) {
                        let t = {};
                        f(t, e.style, e), o.style = {
                            ...t,
                            ...o.style
                        }
                    }
                    return o
                } : function(e, t) {
                    let r, i, o = {},
                        a = (r = e.style || {}, f(i = {}, r, e), Object.assign(i, function({
                            transformTemplate: e
                        }, t) {
                            return (0, n.useMemo)(() => {
                                let n = c();
                                return (0, u.f)(n, t, e), Object.assign({}, n.vars, n.style)
                            }, [t])
                        }(e, t)), i);
                    return e.drag && !1 !== e.dragListener && (o.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = !0 === e.drag ? "none" : `pan-${"x"===e.drag?"y":"x"}`), void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (o.tabIndex = 0), o.style = a, o
                })(t, i, o, e),
                x = function(e, t, n) {
                    let r = {};
                    for (let i in e)("values" !== i || "object" != typeof e.values) && !(0, s.f)(e[i]) && (h(i) || !0 === n && g(i) || !t && !g(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
                    return r
                }(t, "string" == typeof e, a),
                k = e !== n.Fragment ? {
                    ...x,
                    ...y,
                    ref: r
                } : {},
                {
                    children: b
                } = t,
                w = (0, n.useMemo)(() => (0, s.f)(b) ? b.get() : b, [b]);
            return (0, n.createElement)(e, {
                ...k,
                children: w
            })
        }], 299167);
        var x = e.i(268162);
        e.s(["f", () => x.f], 246373)
    }, 649681, e => {
        let t = (0, e.i(495056).createContext)(null);
        e.s(["f", 0, t])
    }, 525716, e => {
        let t = (0, e.i(495056).createContext)({});
        e.s(["f", 0, t])
    }, 155121, 171796, e => {
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
            r = !1;

        function i() {
            return ! function() {
                if (r) return;
                let e = {};
                for (let t in n) e[t] = {
                    isEnabled: e => n[t].some(t => !!e[t])
                };
                (0, t.Y)(e), r = !0
            }(), (0, t.k)()
        }
        e.s(["f", 0, i], 171796), e.s(["f", 0, function(e) {
            let n = i();
            for (let t in e) n[t] = {
                ...n[t],
                ...e[t]
            };
            (0, t.Y)(n)
        }], 155121)
    }, 51248, e => {
        var t = e.i(167358),
            n = e.i(495056),
            r = e.i(902294),
            i = e.i(817126),
            o = e.i(978226),
            a = e.i(676163),
            s = e.i(985808),
            l = e.i(299167),
            u = e.i(225436),
            c = e.i(789757),
            f = e.i(629613),
            d = e.i(171796),
            p = e.i(155121),
            m = e.i(483353),
            y = e.i(194095),
            g = e.i(182526),
            h = e.i(649681),
            v = e.i(525716),
            x = e.i(762536),
            k = e.i(126274);
        e.s(["f", 0, function(e, {
            forwardMotionProps: b = !1,
            type: w
        } = {}, C, S) {
            C && (0, p.f)(C);
            let M = w ? "svg" === w : (0, u.f)(e),
                T = M ? f.f : c.f;

            function A(u, c) {
                let f, p = {
                        ...(0, n.useContext)(o.f),
                        ...u,
                        layoutId: function({
                            layoutId: e
                        }) {
                            let t = (0, n.useContext)(r.f).id;
                            return t && void 0 !== e ? t + "-" + e : e
                        }(u)
                    },
                    {
                        isStatic: m
                    } = p,
                    w = (0, s.f)(u),
                    C = T(u, m);
                if (!m && "u" > typeof window) {
                    (0, n.useContext)(i.f).strict;
                    let t = function(e) {
                        let {
                            drag: t,
                            layout: n
                        } = (0, d.f)();
                        if (!t && !n) return {};
                        let r = {
                            ...t,
                            ...n
                        };
                        return {
                            MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
                            ProjectionNode: r.ProjectionNode
                        }
                    }(p);
                    f = t.MeasureLayout, w.visualElement = function(e, t, r, s, l, u) {
                        let {
                            visualElement: c
                        } = (0, n.useContext)(a.f), f = (0, n.useContext)(i.f), d = (0, n.useContext)(h.f), p = (0, n.useContext)(o.f), m = p.reducedMotion, y = p.skipAnimations, b = (0, n.useRef)(null), w = (0, n.useRef)(!1);
                        s = s || f.renderer, !b.current && s && (b.current = s(e, {
                            visualState: t,
                            parent: c,
                            props: r,
                            presenceContext: d,
                            blockInitialAnimation: !!d && !1 === d.initial,
                            reducedMotionConfig: m,
                            skipAnimations: y,
                            isSVG: u
                        }), w.current && b.current && (b.current.manuallyAnimateOnMount = !0));
                        let C = b.current,
                            S = (0, n.useContext)(v.f);
                        C && !C.projection && l && ("html" === C.type || "svg" === C.type) && function(e, t, n, r) {
                            let {
                                layoutId: i,
                                layout: o,
                                drag: a,
                                dragConstraints: s,
                                layoutScroll: l,
                                layoutRoot: u,
                                layoutAnchor: c,
                                layoutCrossfade: f
                            } = t;
                            e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : function e(t) {
                                if (t) return !1 !== t.options.allowProjection ? t.projection : e(t.parent)
                            }(e.parent)), e.projection.setOptions({
                                layoutId: i,
                                layout: o,
                                alwaysMeasureLayout: !!a || s && (0, x.f)(s),
                                visualElement: e,
                                animationType: "string" == typeof o ? o : "both",
                                initialPromotionConfig: r,
                                crossfade: f,
                                layoutScroll: l,
                                layoutRoot: u,
                                layoutAnchor: c
                            })
                        }(b.current, r, l, S);
                        let M = (0, n.useRef)(!1);
                        (0, n.useInsertionEffect)(() => {
                            C && M.current && C.update(r, d)
                        });
                        let T = r[g.f],
                            A = (0, n.useRef)(!!T && "u" > typeof window && !window.MotionHandoffIsComplete?.(T) && window.MotionHasOptimisedAnimation?.(T));
                        return (0, k.f)(() => {
                            w.current = !0, C && (M.current = !0, window.MotionIsMounted = !0, C.updateFeatures(), C.scheduleRenderMicrotask(), A.current && C.animationState && C.animationState.animateChanges())
                        }), (0, n.useEffect)(() => {
                            C && (!A.current && C.animationState && C.animationState.animateChanges(), A.current && (queueMicrotask(() => {
                                window.MotionHandoffMarkAsComplete?.(T)
                            }), A.current = !1), C.enteringChildren = void 0)
                        }), C
                    }(e, C, p, S, t.ProjectionNode, M)
                }
                return (0, t.jsxs)(a.f.Provider, {
                    value: w,
                    children: [f && w.visualElement ? (0, t.jsx)(f, {
                        visualElement: w.visualElement,
                        ...p
                    }) : null, (0, l.f)(e, u, (0, y.f)(C, w.visualElement, c), C, m, b, M)]
                })
            }
            A.displayName = `motion.${"string"==typeof e?e:`create(${e.displayName??e.name??""})`}`;
            let P = (0, n.forwardRef)(A);
            return P[m.f] = e, P
        }], 51248)
    }, 483353, 194095, e => {
        let t = Symbol.for("motionComponentSymbol");
        e.s(["f", 0, t], 483353);
        var n = e.i(495056);
        e.s(["f", 0, function(e, t, r) {
            let i = (0, n.useRef)(r);
            (0, n.useInsertionEffect)(() => {
                i.current = r
            });
            let o = (0, n.useRef)(null);
            return (0, n.useCallback)(n => {
                n && e.onMount?.(n), t && (n ? t.mount(n) : t.unmount());
                let r = i.current;
                if ("function" == typeof r)
                    if (n) {
                        let e = r(n);
                        "function" == typeof e && (o.current = e)
                    } else o.current ? (o.current(), o.current = null) : r(n);
                else r && (r.current = n)
            }, [t])
        }], 194095)
    }, 997198, 435778, 57391, e => {
        var t = e.i(51248);

        function n(e, n) {
            return (0, t.f)(e, n)
        }
        e.s(["f", 0, n], 435778);
        let r = n("a"),
            i = n("button"),
            o = n("div"),
            a = n("h2"),
            s = n("p"),
            l = n("span"),
            u = n("ul"),
            c = n("svg");
        e.s(["I", 0, r, "i", 0, i, "k", 0, o, "U", 0, a, "C", 0, s, "P", 0, l, "d", 0, c, "e", 0, u], 57391), e.s(["f", 0, o], 997198)
    }, 789757, 629613, e => {
        var t = e.i(246373),
            n = e.i(766438),
            r = e.i(587377),
            i = e.i(819673),
            o = e.i(923792),
            a = e.i(495056),
            s = e.i(676163),
            l = e.i(649681),
            u = e.i(258707);
        let c = e => (t, c) => {
            let f = (0, a.useContext)(s.f),
                d = (0, a.useContext)(l.f),
                p = () => (function({
                    scrapeMotionValuesFromProps: e,
                    createRenderState: t
                }, a, s, l) {
                    return {
                        latestValues: function(e, t, a, s) {
                            let l = {},
                                u = s(e, {});
                            for (let e in u) l[e] = (0, n.f)(u[e]);
                            let {
                                initial: c,
                                animate: f
                            } = e, d = (0, r.m)(e), p = (0, r.I)(e);
                            t && p && !d && !1 !== e.inherit && (void 0 === c && (c = t.initial), void 0 === f && (f = t.animate));
                            let m = !!a && !1 === a.initial,
                                y = (m = m || !1 === c) ? f : c;
                            if (y && "boolean" != typeof y && !(0, i.f)(y)) {
                                let t = Array.isArray(y) ? y : [y];
                                for (let n = 0; n < t.length; n++) {
                                    let r = (0, o.f)(e, t[n]);
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
                        }(a, s, l, e),
                        renderState: t()
                    }
                })(e, t, f, d);
            return c ? p() : (0, u.f)(p)
        };
        var f = e.i(889600);
        let d = c({
            scrapeMotionValuesFromProps: t.f,
            createRenderState: f.f
        });
        e.s(["f", 0, d], 789757);
        var p = e.i(185747),
            p = p,
            m = e.i(365289);
        let y = c({
            scrapeMotionValuesFromProps: p.f,
            createRenderState: m.f
        });
        e.s(["f", 0, y], 629613)
    }, 762536, e => {
        e.s(["f", 0, function(e) {
            return e && "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
        }])
    }, 258707, e => {
        var t = e.i(495056);
        e.s(["f", 0, function(e) {
            let n = (0, t.useRef)(null);
            return null === n.current && (n.current = e()), n.current
        }])
    }, 126274, e => {
        var t = e.i(495056);
        let n = "u" > typeof window ? t.useLayoutEffect : t.useEffect;
        e.s(["f", 0, n], 126274)
    }, 335029, e => {
        var t = e.i(825465);
        e.s(["f", 0, function(e) {
            return (0, t.f)(e) && "offsetHeight" in e && !("ownerSVGElement" in e)
        }])
    }, 766438, e => {
        var t = e.i(140926);
        e.s(["f", 0, function(e) {
            return (0, t.f)(e) ? e.get() : e
        }])
    }, 825465, e => {
        e.s(["f", 0, e => "object" == typeof e && null !== e])
    }, 766930, 777137, e => {
        var t = e.i(167358),
            n = e.i(961348);
        let r = () => e.A(337752).then(e => e.default),
            i = () => e.A(734013).then(e => e.default);
        e.s(["f", 0, ({
            children: e
        }) => (0, t.jsx)(n.f, {
            features: i,
            strict: !0,
            "data-sentry-element": "LazyMotion",
            "data-sentry-component": "FramerMotionLayoutLazy",
            "data-sentry-source-file": "FramerMotionLayoutLazy.tsx",
            children: e
        })], 777137), e.s(["f", 0, ({
            children: e
        }) => (0, t.jsx)(n.f, {
            features: r,
            strict: !0,
            "data-sentry-element": "LazyMotion",
            "data-sentry-component": "FramerMotionLazy",
            "data-sentry-source-file": "FramerMotionLazy.tsx",
            children: e
        })], 766930)
    }])
})();

//# debugId=9b648c54-0900-61e9-3dcb-97b2ef04063c