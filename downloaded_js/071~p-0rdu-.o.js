(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 245503, e => {
    "use strict";
    var t = e.i(3931),
        i = e.i(587986),
        n = e.i(137927),
        r = e.i(953234);
    e.s(["createDomVisualElement", 0, (e, a) => (0, r.isSVGComponent)(e) ? new n.SVGVisualElement(a) : new i.HTMLVisualElement(a, {
        allowProjection: e !== t.Fragment
    })])
}, 24388, e => {
    "use strict";
    var t = e.i(669430),
        i = e.i(612241);

    function n(e, t, i, r = 0, a = 1) {
        let l = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t),
            s = e.size,
            o = (s - 1) * r;
        return "function" == typeof i ? i(l, s) : 1 === a ? l * r : o - l * r
    }

    function r(e, a, l = {}) {
        let s = (0, t.resolveVariant)(e, a, "exit" === l.type ? e.presenceContext?.custom : void 0),
            {
                transition: o = e.getDefaultTransition() || {}
            } = s || {};
        l.transitionOverride && (o = l.transitionOverride);
        let c = s ? () => Promise.all((0, i.animateTarget)(e, s, l)) : () => Promise.resolve(),
            u = e.variantChildren && e.variantChildren.size ? (t = 0) => {
                let {
                    delayChildren: i = 0,
                    staggerChildren: s,
                    staggerDirection: c
                } = o;
                return function(e, t, i = 0, a = 0, l = 0, s = 1, o) {
                    let c = [];
                    for (let u of e.variantChildren) u.notify("AnimationStart", t), c.push(r(u, t, {
                        ...o,
                        delay: i + ("function" == typeof a ? 0 : a) + n(e.variantChildren, u, a, l, s)
                    }).then(() => u.notify("AnimationComplete", t)));
                    return Promise.all(c)
                }(e, a, t, i, s, c, l)
            } : () => Promise.resolve(),
            {
                when: d
            } = o;
        if (!d) return Promise.all([c(), u(l.delay)]);
        {
            let [e, t] = "beforeChildren" === d ? [c, u] : [u, c];
            return e().then(() => t())
        }
    }
    var a = e.i(838024),
        l = e.i(29762);

    function s(e, t) {
        if (!Array.isArray(t)) return !1;
        let i = t.length;
        if (i !== e.length) return !1;
        for (let n = 0; n < i; n++)
            if (t[n] !== e[n]) return !1;
        return !0
    }
    var o = e.i(593383),
        c = e.i(541762);
    let u = c.variantProps.length,
        d = [...c.variantPriorityOrder].reverse(),
        f = c.variantPriorityOrder.length;

    function m(e = !1) {
        return {
            isActive: e,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {}
        }
    }

    function p() {
        return {
            animate: m(!0),
            whileInView: m(),
            whileHover: m(),
            whileTap: m(),
            whileDrag: m(),
            whileFocus: m(),
            exit: m()
        }
    }
    e.s(["createAnimationState", 0, function(e) {
        let m = n => Promise.all(n.map(({
                animation: n,
                options: a
            }) => (function(e, n, a = {}) {
                let l;
                if (e.notify("AnimationStart", n), Array.isArray(n)) l = Promise.all(n.map(t => r(e, t, a)));
                else if ("string" == typeof n) l = r(e, n, a);
                else {
                    let r = "function" == typeof n ? (0, t.resolveVariant)(e, n, a.custom) : n;
                    l = Promise.all((0, i.animateTarget)(e, r, a))
                }
                return l.then(() => {
                    e.notify("AnimationComplete", n)
                })
            })(e, n, a))),
            g = p(),
            h = !0,
            v = i => (n, r) => {
                let a = (0, t.resolveVariant)(e, r, "exit" === i ? e.presenceContext?.custom : void 0);
                if (a) {
                    let {
                        transition: e,
                        transitionEnd: t,
                        ...i
                    } = a;
                    n = {
                        ...n,
                        ...i,
                        ...t
                    }
                }
                return n
            };

        function x(i) {
            let {
                props: r
            } = e, p = function e(t) {
                if (!t) return;
                if (!t.isControllingVariants) {
                    let i = t.parent && e(t.parent) || {};
                    return void 0 !== t.props.initial && (i.initial = t.props.initial), i
                }
                let i = {};
                for (let e = 0; e < u; e++) {
                    let n = c.variantProps[e],
                        r = t.props[n];
                    ((0, o.isVariantLabel)(r) || !1 === r) && (i[n] = r)
                }
                return i
            }(e.parent) || {}, x = [], y = new Set, b = {}, w = 1 / 0;
            for (let c = 0; c < f; c++) {
                var A, j;
                let u = d[c],
                    f = g[u],
                    m = void 0 !== r[u] ? r[u] : p[u],
                    k = (0, o.isVariantLabel)(m),
                    E = u === i ? f.isActive : null;
                !1 === E && (w = c);
                let S = m === p[u] && m !== r[u] && k;
                if (S && h && e.manuallyAnimateOnMount && (S = !1), f.protectedKeys = {
                        ...b
                    }, !f.isActive && null === E || !m && !f.prevProp || (0, a.isAnimationControls)(m) || "boolean" == typeof m) continue;
                let P = (A = f.prevProp, "string" == typeof(j = m) ? j !== A : !!Array.isArray(j) && !s(j, A)),
                    C = P || u === i && f.isActive && !S && k || c > w && k,
                    N = !1,
                    T = Array.isArray(m) ? m : [m],
                    V = T.reduce(v(u), {});
                !1 === E && (V = {});
                let {
                    prevResolvedValues: L = {}
                } = f, F = {
                    ...L,
                    ...V
                }, I = t => {
                    C = !0, y.has(t) && (N = !0, y.delete(t)), f.needsAnimating[t] = !0;
                    let i = e.getValue(t);
                    i && (i.liveStyle = !1)
                };
                for (let e in F) {
                    let t = V[e],
                        i = L[e];
                    if (!b.hasOwnProperty(e))((0, l.isKeyframesTarget)(t) && (0, l.isKeyframesTarget)(i) ? s(t, i) : t === i) ? void 0 !== t && y.has(e) ? I(e) : f.protectedKeys[e] = !0 : null != t ? I(e) : y.add(e)
                }
                f.prevProp = m, f.prevResolvedValues = V, f.isActive && (b = {
                    ...b,
                    ...V
                }), h && e.blockInitialAnimation && (C = !1);
                let _ = S && P,
                    R = !_ || N;
                C && R && x.push(...T.map(i => {
                    let r = {
                        type: u
                    };
                    if ("string" == typeof i && h && !_ && e.manuallyAnimateOnMount && e.parent) {
                        let {
                            parent: a
                        } = e, l = (0, t.resolveVariant)(a, i);
                        if (a.enteringChildren && l) {
                            let {
                                delayChildren: t
                            } = l.transition || {};
                            r.delay = n(a.enteringChildren, e, t)
                        }
                    }
                    return {
                        animation: i,
                        options: r
                    }
                }))
            }
            if (y.size) {
                let i = {};
                if ("boolean" != typeof r.initial) {
                    let n = (0, t.resolveVariant)(e, Array.isArray(r.initial) ? r.initial[0] : r.initial);
                    n && n.transition && (i.transition = n.transition)
                }
                y.forEach(t => {
                    let n = e.getBaseTarget(t),
                        r = e.getValue(t);
                    r && (r.liveStyle = !0), i[t] = n ?? null
                }), x.push({
                    animation: i
                })
            }
            let k = !!x.length;
            return h && (!1 === r.initial || r.initial === r.animate) && !e.manuallyAnimateOnMount && (k = !1), h = !1, k ? m(x) : Promise.resolve()
        }
        return {
            animateChanges: x,
            setActive: function(t, i) {
                if (g[t].isActive === i) return Promise.resolve();
                e.variantChildren?.forEach(e => e.animationState?.setActive(t, i)), g[t].isActive = i;
                let n = x(t);
                for (let e in g) g[e].protectedKeys = {};
                return n
            },
            setAnimateFunction: function(t) {
                m = t(e)
            },
            getState: () => g,
            reset: () => {
                g = p()
            }
        }
    }], 24388)
}, 141932, e => {
    "use strict";
    e.s(["Feature", 0, class {
        constructor(e) {
            this.isMounted = !1, this.node = e
        }
        update() {}
    }])
}, 133862, e => {
    "use strict";
    var t = e.i(838024),
        i = e.i(24388),
        n = e.i(141932);
    class r extends n.Feature {
        constructor(e) {
            super(e), e.animationState || (e.animationState = (0, i.createAnimationState)(e))
        }
        updateAnimationControlsSubscription() {
            let {
                animate: e
            } = this.node.getProps();
            (0, t.isAnimationControls)(e) && (this.unmountControls = e.subscribe(this.node))
        }
        mount() {
            this.updateAnimationControlsSubscription()
        }
        update() {
            let {
                animate: e
            } = this.node.getProps(), {
                animate: t
            } = this.node.prevProps || {};
            e !== t && this.updateAnimationControlsSubscription()
        }
        unmount() {
            this.node.animationState.reset(), this.unmountControls?.()
        }
    }
    var a = n;
    let l = 0;
    class s extends a.Feature {
        constructor() {
            super(...arguments), this.id = l++
        }
        update() {
            if (!this.node.presenceContext) return;
            let {
                isPresent: e,
                onExitComplete: t
            } = this.node.presenceContext, {
                isPresent: i
            } = this.node.prevPresenceContext || {};
            if (!this.node.animationState || e === i) return;
            let n = this.node.animationState.setActive("exit", !e);
            t && !e && n.then(() => {
                t(this.id)
            })
        }
        mount() {
            let {
                register: e,
                onExitComplete: t
            } = this.node.presenceContext || {};
            t && t(this.id), e && (this.unmount = e(this.id))
        }
        unmount() {}
    }
    e.s(["animations", 0, {
        animation: {
            Feature: r
        },
        exit: {
            Feature: s
        }
    }], 133862)
}, 210681, e => {
    "use strict";
    let t = {
        x: !1,
        y: !1
    };
    e.s(["isDragActive", 0, function() {
        return t.x || t.y
    }, "isDragging", 0, t])
}, 958351, e => {
    "use strict";
    e.s(["addDomEvent", 0, function(e, t, i, n = {
        passive: !0
    }) {
        return e.addEventListener(t, i, n), () => e.removeEventListener(t, i)
    }])
}, 291989, 414161, e => {
    "use strict";
    let t = e => "mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary;

    function i(e) {
        return {
            point: {
                x: e.pageX,
                y: e.pageY
            }
        }
    }
    e.s(["isPrimaryPointer", 0, t], 414161), e.s(["addPointerInfo", 0, e => n => t(n) && e(n, i(n)), "extractEventInfo", 0, i], 291989)
}, 994216, 664356, e => {
    "use strict";
    var t = e.i(210681),
        i = e.i(369710);

    function n(e, t) {
        let n = (0, i.resolveElements)(e),
            r = new AbortController;
        return [n, {
            passive: !0,
            ...t,
            signal: r.signal
        }, () => r.abort()]
    }

    function r(e) {
        return !("touch" === e.pointerType || (0, t.isDragActive)())
    }
    e.s(["setupGesture", 0, n], 664356), e.s(["hover", 0, function(e, t, i = {}) {
        let [a, l, s] = n(e, i), o = e => {
            if (!r(e)) return;
            let {
                target: i
            } = e, n = t(i, e);
            if ("function" != typeof n || !i) return;
            let a = e => {
                r(e) && (n(e), i.removeEventListener("pointerleave", a))
            };
            i.addEventListener("pointerleave", a, l)
        };
        return a.forEach(e => {
            e.addEventListener("pointerenter", o, l)
        }), s
    }], 994216)
}, 174821, e => {
    "use strict";
    var t = e.i(994216),
        i = e.i(347248),
        n = e.i(291989),
        r = e.i(141932);

    function a(e, t, r) {
        let {
            props: a
        } = e;
        e.animationState && a.whileHover && e.animationState.setActive("whileHover", "Start" === r);
        let l = a["onHover" + r];
        l && i.frame.postRender(() => l(t, (0, n.extractEventInfo)(t)))
    }
    class l extends r.Feature {
        mount() {
            let {
                current: e
            } = this.node;
            e && (this.unmount = (0, t.hover)(e, (e, t) => (a(this.node, t, "Start"), e => a(this.node, e, "End"))))
        }
        unmount() {}
    }
    e.s(["HoverGesture", 0, l])
}, 780584, e => {
    "use strict";
    var t = e.i(174821),
        i = e.i(640746),
        n = e.i(958351),
        r = e.i(141932);
    class a extends r.Feature {
        constructor() {
            super(...arguments), this.isActive = !1
        }
        onFocus() {
            let e = !1;
            try {
                e = this.node.current.matches(":focus-visible")
            } catch (t) {
                e = !0
            }
            e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
        }
        onBlur() {
            this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
        }
        mount() {
            this.unmount = (0, i.pipe)((0, n.addDomEvent)(this.node.current, "focus", () => this.onFocus()), (0, n.addDomEvent)(this.node.current, "blur", () => this.onBlur()))
        }
        unmount() {}
    }
    var l = e.i(812064),
        s = e.i(210681);
    let o = (e, t) => !!t && (e === t || o(e, t.parentElement));
    var c = e.i(414161),
        u = e.i(664356);
    let d = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        f = new WeakSet;

    function m(e) {
        return t => {
            "Enter" === t.key && e(t)
        }
    }

    function p(e, t) {
        e.dispatchEvent(new PointerEvent("pointer" + t, {
            isPrimary: !0,
            bubbles: !0
        }))
    }

    function g(e) {
        return (0, c.isPrimaryPointer)(e) && !(0, s.isDragActive)()
    }
    var h = e.i(347248),
        v = e.i(291989),
        x = r;

    function y(e, t, i) {
        let {
            props: n
        } = e;
        if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
        e.animationState && n.whileTap && e.animationState.setActive("whileTap", "Start" === i);
        let r = n["onTap" + ("End" === i ? "" : i)];
        r && h.frame.postRender(() => r(t, (0, v.extractEventInfo)(t)))
    }
    class b extends x.Feature {
        mount() {
            let {
                current: e
            } = this.node;
            e && (this.unmount = function(e, t, i = {}) {
                let [n, r, a] = (0, u.setupGesture)(e, i), s = e => {
                    let n = e.currentTarget;
                    if (!g(e)) return;
                    f.add(n);
                    let a = t(n, e),
                        l = (e, t) => {
                            window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", c), f.has(n) && f.delete(n), g(e) && "function" == typeof a && a(e, {
                                success: t
                            })
                        },
                        s = e => {
                            l(e, n === window || n === document || i.useGlobalTarget || o(n, e.target))
                        },
                        c = e => {
                            l(e, !1)
                        };
                    window.addEventListener("pointerup", s, r), window.addEventListener("pointercancel", c, r)
                };
                return n.forEach(e => {
                    ((i.useGlobalTarget ? window : e).addEventListener("pointerdown", s, r), (0, l.isHTMLElement)(e)) && (e.addEventListener("focus", e => ((e, t) => {
                        let i = e.currentTarget;
                        if (!i) return;
                        let n = m(() => {
                            if (f.has(i)) return;
                            p(i, "down");
                            let e = m(() => {
                                p(i, "up")
                            });
                            i.addEventListener("keyup", e, t), i.addEventListener("blur", () => p(i, "cancel"), t)
                        });
                        i.addEventListener("keydown", n, t), i.addEventListener("blur", () => i.removeEventListener("keydown", n), t)
                    })(e, r)), d.has(e.tagName) || -1 !== e.tabIndex || e.hasAttribute("tabindex") || (e.tabIndex = 0))
                }), a
            }(e, (e, t) => (y(this.node, t, "Start"), (e, {
                success: t
            }) => y(this.node, e, t ? "End" : "Cancel")), {
                useGlobalTarget: this.node.props.globalTapTarget
            }))
        }
        unmount() {}
    }
    var w = r;
    let A = new WeakMap,
        j = new WeakMap,
        k = e => {
            let t = A.get(e.target);
            t && t(e)
        },
        E = e => {
            e.forEach(k)
        },
        S = {
            some: 0,
            all: 1
        };
    class P extends w.Feature {
        constructor() {
            super(...arguments), this.hasEnteredView = !1, this.isInView = !1
        }
        startObserver() {
            var e;
            let t;
            this.unmount();
            let {
                viewport: i = {}
            } = this.node.getProps(), {
                root: n,
                margin: r,
                amount: a = "some",
                once: l
            } = i, s = {
                root: n ? n.current : void 0,
                rootMargin: r,
                threshold: "number" == typeof a ? a : S[a]
            }, o = e => {
                let {
                    isIntersecting: t
                } = e;
                if (this.isInView === t || (this.isInView = t, l && !t && this.hasEnteredView)) return;
                t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
                let {
                    onViewportEnter: i,
                    onViewportLeave: n
                } = this.node.getProps(), r = t ? i : n;
                r && r(e)
            };
            return e = this.node.current, t = function({
                root: e,
                ...t
            }) {
                let i = e || document;
                j.has(i) || j.set(i, {});
                let n = j.get(i),
                    r = JSON.stringify(t);
                return n[r] || (n[r] = new IntersectionObserver(E, {
                    root: e,
                    ...t
                })), n[r]
            }(s), A.set(e, o), t.observe(e), () => {
                A.delete(e), t.unobserve(e)
            }
        }
        mount() {
            this.startObserver()
        }
        update() {
            if ("u" < typeof IntersectionObserver) return;
            let {
                props: e,
                prevProps: t
            } = this.node;
            ["amount", "margin", "root"].some(function({
                viewport: e = {}
            }, {
                viewport: t = {}
            } = {}) {
                return i => e[i] !== t[i]
            }(e, t)) && this.startObserver()
        }
        unmount() {}
    }
    let C = {
        inView: {
            Feature: P
        },
        tap: {
            Feature: b
        },
        focus: {
            Feature: a
        },
        hover: {
            Feature: t.HoverGesture
        }
    };
    e.s(["gestureAnimations", 0, C], 780584)
}, 637165, 511611, e => {
    "use strict";
    var t = e.i(361979);
    e.s(["isSVGSVGElement", 0, function(e) {
        return (0, t.isSVGElement)(e) && "svg" === e.tagName
    }], 637165);
    var i = e.i(538305),
        n = e.i(134026),
        r = e.i(349168);
    e.s(["animateSingleValue", 0, function(e, t, a) {
        let l = (0, i.isMotionValue)(e) ? e : (0, n.motionValue)(e);
        return l.start((0, r.animateMotionValue)("", l, t, a)), l.animation
    }], 511611)
}, 72607, e => {
    "use strict";
    var t = e.i(245503),
        i = e.i(53645),
        n = e.i(133862),
        r = e.i(566993),
        a = e.i(780584),
        l = e.i(871726);
    let s = {
            ...n.animations,
            ...a.gestureAnimations,
            ...r.drag,
            ...l.layout
        },
        o = (0, i.createMotionProxy)(s, t.createDomVisualElement);
    e.s(["motion", 0, o], 72607)
}, 14452, e => {
    "use strict";
    var t = e.i(500783),
        i = e.i(722978);
    e.s(["default", 0, ({
        children: e,
        className: n = "",
        tag: r = "div"
    }) => {
        let a = (0, i.default)("loco-text-heading-sm mb-4", n);
        return (0, t.jsx)(r, {
            className: a,
            children: e
        })
    }], 14452)
}, 447452, 667900, 2062, e => {
    "use strict";
    var t = e.i(500783),
        i = e.i(3931),
        n = e.i(722978),
        r = e.i(655105),
        a = e.i(825610),
        l = e.i(387660);
    let s = ({
        children: e,
        tag: i = "div",
        className: r = ""
    }) => {
        let a = (0, n.default)("loco-caption-lg-semibold mb-4", r);
        return (0, t.jsx)(i, {
            className: a,
            children: e
        })
    };
    e.s(["default", 0, s], 667900);
    var o = e.i(749583);
    let c = ({
        children: e,
        className: i = "",
        orientation: r = "horizontal"
    }) => {
        let a = (0, n.default)("flex gap-2 flex-wrap", {
            "flex-col items-start": "vertical" === r
        }, i);
        return (0, t.jsx)("div", {
            className: a,
            children: e
        })
    };
    e.s(["default", 0, c], 2062);
    var u = e.i(14452),
        d = e.i(805518),
        f = e.i(72607);
    let m = ({
        features: e,
        transitionTime: n = 8500
    }) => {
        let [r, a] = (0, i.useState)(0), l = (0, i.useRef)(null), s = (0, i.useRef)(null), [c, u] = (0, i.useState)(!1), [d, m] = (0, i.useState)(!1), p = (0, i.useRef)(null);
        (0, i.useEffect)(() => {
            e.forEach(e => {
                e.icon && (new window.Image().src = e.icon, new window.Image().src = e.icon)
            })
        }, [e]), (0, i.useEffect)(() => {
            let e = new IntersectionObserver(([e]) => {
                u(e.intersectionRatio >= .8)
            }, {
                threshold: [0, .8, 1]
            });
            return s.current && e.observe(s.current), () => e.disconnect()
        }, []), (0, i.useEffect)(() => (l.current && clearTimeout(l.current), c && !d && (l.current = setTimeout(() => {
            a(t => (t + 1) % e.length)
        }, n)), () => {
            l.current && clearTimeout(l.current)
        }), [r, e.length, n, c, d]);
        let g = (0, i.useCallback)(t => {
                let i = t === r;
                a(t), m(!0);
                let l = e[t];
                l?.onCardClick && setTimeout(() => {
                    l.onCardClick?.(i)
                }, 0), p.current && clearTimeout(p.current), p.current = setTimeout(() => {
                    m(!1)
                }, n)
            }, [r, e, n]),
            h = (0, i.useCallback)((e, t) => {
                ("Enter" === e.key || " " === e.key) && (e.preventDefault(), g(t))
            }, [g]);
        return (0, i.useEffect)(() => () => {
            p.current && clearTimeout(p.current)
        }, []), (0, t.jsx)("div", {
            ref: s,
            className: "relative inline-flex w-full flex-col items-start justify-start gap-2 self-stretch px-5 pb-6 md:px-5 md:pb-6 lg:px-0 lg:pb-0 xl:px-20",
            children: e.map((e, i) => {
                let n = i === r;
                return (0, t.jsxs)("div", {
                    "data-mobile": "true",
                    "data-show-image": n ? "true" : "false",
                    "data-state": n ? "selected" : "inactive",
                    role: "button",
                    tabIndex: 0,
                    className: `cursor-pointer self-stretch overflow-hidden rounded-lg bg-white ${n?`${e.icon?"lg:pl-36":"lg:pl-10"} p-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04),0px_2px_12px_3px_rgba(0,0,0,0.04)] lg:py-8 lg:pr-10`:"p-6 lg:px-10 lg:py-6"} flex lg:inline-flex lg:items-start ${n?"flex-col":"items-center"} relative justify-start gap-2 transition-all duration-500 ease-out`,
                    onClick: () => g(i),
                    onKeyDown: e => h(e, i),
                    children: [e.icon && n && (0, t.jsx)(f.motion.div, {
                        initial: {
                            opacity: 0,
                            scale: .8
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            type: "spring",
                            duration: .2,
                            bounce: .1,
                            delay: 0
                        },
                        className: "inline-flex h-14 w-14 items-center justify-start gap-2.5 lg:hidden",
                        children: (0, t.jsx)("div", {
                            className: "flex flex-1 items-center justify-center gap-2.5 self-stretch",
                            children: (0, t.jsx)("img", {
                                className: "flex-1 self-stretch",
                                src: e.icon || "https://placehold.co/57x57",
                                alt: e.title || "Feature icon",
                                width: 57,
                                height: 57,
                                loading: "eager",
                                style: {
                                    objectFit: "cover",
                                    imageRendering: "auto"
                                }
                            })
                        })
                    }), e.icon && n && (0, t.jsx)(f.motion.div, {
                        initial: {
                            opacity: 0,
                            x: -10
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            type: "spring",
                            duration: .5,
                            bounce: .1,
                            delay: .1
                        },
                        className: "pointer-events-none absolute inset-y-0 left-[-38px] hidden lg:flex",
                        children: (0, t.jsx)("div", {
                            className: "flex h-full items-center justify-start py-8",
                            children: (0, t.jsx)("img", {
                                className: "max-h-full w-auto object-contain",
                                src: e.icon || "",
                                alt: e.title || "Feature icon",
                                loading: "eager",
                                style: {
                                    imageRendering: "auto"
                                }
                            })
                        })
                    }), (0, t.jsxs)("div", {
                        className: "flex flex-col items-start justify-start gap-[9px] self-stretch lg:inline-flex lg:max-w-[304px] lg:flex-1 lg:flex-col",
                        children: [n && (0, t.jsx)(f.motion.div, {
                            initial: {
                                opacity: 0,
                                y: -.5
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                type: "spring",
                                duration: .3,
                                bounce: .1
                            },
                            className: "inline-flex w-64 items-center justify-center",
                            children: (0, t.jsx)("div", {
                                className: "flex-1 justify-center text-[10px] leading-[16px] font-medium tracking-[1px] text-gray-700 uppercase md:text-[12px] md:leading-[21px] md:tracking-[1.2px]",
                                children: e.eyebrow || ""
                            })
                        }), (0, t.jsx)("div", {
                            className: "inline-flex items-center justify-center self-stretch",
                            children: (0, t.jsx)(f.motion.div, {
                                animate: {
                                    color: n ? "#000000" : "#374151"
                                },
                                transition: {
                                    type: "spring",
                                    duration: .3,
                                    bounce: .1
                                },
                                className: "flex-1 justify-center text-base leading-tight font-medium md:text-[20px] md:leading-[24px]",
                                children: e.title || "Untitled"
                            })
                        }), n && (0, t.jsx)(f.motion.div, {
                            initial: {
                                opacity: 0,
                                y: 1
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                type: "spring",
                                duration: .3,
                                bounce: .1
                            },
                            className: "justify-start self-stretch text-xs font-normal text-gray-700 md:text-[14px] md:leading-[21px]",
                            children: e.description || ""
                        }), n && (0, t.jsx)(f.motion.div, {
                            initial: {
                                opacity: 0,
                                y: 1
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                type: "spring",
                                duration: .3,
                                bounce: .1
                            },
                            className: "flex flex-col items-start justify-start self-stretch pt-3",
                            children: (0, t.jsx)(o.default, {
                                href: e.action?.href || "#",
                                target: e.action?.target,
                                variant: "primary",
                                size: "small",
                                rounded: !0,
                                hasArrow: !0,
                                children: e.action?.label || "Learn More"
                            })
                        })]
                    })]
                }, i)
            })
        })
    };
    var p = e.i(783078),
        g = e.i(430215),
        h = e.i(224601),
        v = e.i(153348),
        x = e.i(955429),
        y = e.i(828083),
        b = e.i(186114);
    let w = (0, y.default)(() => e.A(410979), {
        loadableGenerated: {
            modules: [942019]
        },
        ssr: !1
    });
    e.s(["default", 0, ({
        actions: e = [],
        aspectRatio: f,
        backgroundImage: y = !1,
        description: A,
        eyebrow: j,
        image: k,
        mediaPosition: E = "right",
        size: S = "default",
        title: P,
        youtubeVideo: C,
        brandfolderVideo: N,
        videoInline: T = !1,
        buttonLabel: V = "Play Video",
        blockKey: L,
        blockedMessage: F,
        consentButtonLabel: I,
        featureList: _,
        variant: R = "default"
    }) => {
        let O = (0, g.default)(`(max-width: ${p.default.Large}px)`),
            M = (0, i.useRef)(null),
            [D, B] = (0, i.useState)(!1),
            G = (0, v.useInView)(M, {
                once: !0
            }),
            z = (0, x.useReducedMotion)(),
            H = (0, i.useRef)({
                total: 0,
                progress: 0
            }),
            K = _ && _.length > 0,
            $ = !K && C?.url;
        (0, i.useEffect)(() => {
            T || B(!1)
        }, [G]);
        let U = () => {
                B(!0)
            },
            W = (0, n.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": D && !z && G && N?.src
            }),
            q = (0, n.default)("relative", {
                "py-10 lg:py-24": "gdc2026" === R,
                "lg:py-14": K,
                "lg:py-24": !K && "default" === S && (!f || "16:9" === f) && "gdc2026" !== R,
                "lg:py-80": !K && "large" === S && (!f || "16:9" === f),
                "lg:py-40": !K && "large" === S && "1:1" === f,
                "dark bg-gray-900 overflow-hidden": y,
                "bg-gray-100 dark:bg-black": !y && K,
                "bg-white dark:bg-black": !y && !K
            }),
            X = (0, n.default)("grid grid-flow-row grid-cols-12 place-items-center gap-4", {
                "p-4": "gdc2026" === R,
                "lg:grid-flow-col": !0,
                "lg:container": !f || "16:9" === f
            }),
            J = (0, n.default)("font-nohemi! text-gray-900 dark:text-gray-100 whitespace-pre-line", {
                "loco-text-heading-md!": "gdc2026" === R
            }),
            Y = (0, n.default)("relative w-full rounded-lg", {
                "aspect-square": "1:1" === f,
                "aspect-video": "16:9" === f,
                "overflow-hidden": !C?.url
            }),
            Q = (0, n.default)("relative col-span-12 flex h-full flex-col w-full items-center lg:items-start", {
                "lg:col-span-8": "gdc2026" === R,
                "lg:col-span-6": "gdc2026" !== R,
                "lg:col-start-1": "left" === E,
                "lg:col-start-5": "right" === E && "gdc2026" === R,
                "lg:col-start-7": "right" === E && "gdc2026" !== R,
                "order-first": !K || !O,
                "order-last": K && O
            }),
            Z = (0, n.default)("relative col-span-12 px-5 text-center lg:pb-0 lg:text-left", {
                "lg:col-span-4": "gdc2026" === R,
                "lg:col-span-5": "gdc2026" !== R,
                "pb-6": !(K && O),
                "py-6": K && O,
                "lg:col-start-9": "left" === E && "gdc2026" === R,
                "lg:col-start-8": "left" === E && "gdc2026" !== R && (!f || "16:9" === f),
                "lg:col-start-1": "right" === E && (!f || "16:9" === f),
                "lg:col-start-2": "right" === E && "1:1" === f,
                "order-first": K && O
            }),
            ee = e => {
                let t = H.current.progress / H.current.total * 100 || 0;
                (0, l.pushVideoEvent)({
                    name: e,
                    videoDuration: H.current.total,
                    videoProgress: Number(t)
                })
            };
        return (0, t.jsxs)("section", {
            className: q,
            children: [y && (0, t.jsx)(r.default, {
                src: k.src,
                alt: k.alt,
                fill: !0,
                className: "blur-2xl brightness-[0.2]"
            }), (0, t.jsxs)("div", {
                className: X,
                ref: M,
                children: [K ? (0, t.jsx)("div", {
                    className: Q,
                    children: (0, t.jsx)(m, {
                        features: _
                    })
                }) : $ ? (0, t.jsx)("div", {
                    className: Q,
                    children: (0, t.jsx)("div", {
                        className: Y,
                        children: (0, t.jsx)(h.default, {
                            url: C?.url || "",
                            title: C?.title ?? "",
                            blockedMessage: F,
                            consentButtonLabel: I
                        })
                    })
                }) : (0, t.jsxs)("div", {
                    className: Q,
                    children: [(0, t.jsxs)("div", {
                        className: Y,
                        children: [G && !z && N?.src && (0, t.jsx)(w, {
                            url: N.src,
                            playing: D,
                            loop: !!T,
                            muted: T,
                            playsinline: T,
                            width: "100%",
                            height: "100%",
                            onDuration: e => H.current.total = e,
                            onProgress: e => {
                                H.current.progress = 10 * e.played
                            },
                            className: "absolute top-0 left-0 [&>video]:object-cover",
                            onReady: () => {
                                T && B(!0)
                            },
                            controls: !T,
                            onPlay: () => ee("video_play"),
                            onPause: () => ee("video_pause"),
                            config: {
                                hlsOptions: {
                                    maxMaxBufferLength: 1,
                                    startLevel: 1
                                }
                            }
                        }), k.src && (0, t.jsxs)("div", {
                            className: W,
                            onClick: U,
                            children: [N?.src && !T && (0, t.jsx)(b.default, {
                                handleIsPlaying: U,
                                className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                label: V,
                                "data-link-location": L || a.trackingLocation.fullWidthBlockAction,
                                "data-link-id": `${L||a.trackingLocation.fullWidthBlockAction}-video-play`
                            }), (0, t.jsx)(r.default, {
                                src: k.src,
                                alt: k.alt,
                                placeholder: "blur",
                                blurDataURL: k.placeholder,
                                fill: !0
                            })]
                        })]
                    }), k.caption && (0, t.jsx)("div", {
                        className: "loco-text-body-sm-medium z-10 mt-3 mb-6 text-gray-600 lg:mb-3",
                        children: k.caption
                    })]
                }), (0, t.jsxs)("div", {
                    className: Z,
                    children: [j && (0, t.jsx)(s, {
                        className: "text-gray-900 dark:text-gray-100",
                        children: j
                    }), (0, t.jsx)(u.default, {
                        tag: "h2",
                        className: J,
                        children: P
                    }), (0, t.jsx)(d.default, {
                        className: "mb-10 text-gray-900 dark:text-gray-100",
                        children: A
                    }), (0, t.jsx)(c, {
                        className: "justify-center lg:justify-normal",
                        children: e.length > 0 && e.map((e, i) => (0, t.jsx)(o.default, {
                            variant: 0 === i ? "primary" : "secondary",
                            outlined: 0 === i,
                            size: O ? "small" : "medium",
                            rounded: !0,
                            hasArrow: !0,
                            href: e.href,
                            target: e.target,
                            "data-link-location": L ?? a.trackingLocation.fullWidthBlockAction,
                            "data-link-id": `${L??a.trackingLocation.fullWidthBlockAction}-action-${i}`,
                            children: e.label
                        }, `full-width-block-action-${i}`))
                    })]
                })]
            })]
        })
    }], 447452)
}, 649042, e => {
    "use strict";
    var t = e.i(500783),
        i = e.i(3931),
        n = e.i(722990),
        r = e.i(447452),
        a = e.i(775041),
        l = e.i(779712),
        s = e.i(869324);
    e.s(["default", 0, ({
        actions: e,
        backgroundImage: o,
        description: c,
        eyebrow: u,
        image: d,
        mediaAspectRatio: f,
        mediaPosition: m,
        size: p,
        variant: g,
        title: h,
        theme: v,
        youtubeVideo: x,
        brandfolderVideo: y,
        buttonLabel: b,
        videoInline: w,
        blockKey: A,
        isHidden: j,
        consent: k,
        featureList: E,
        productCategoryFilter: S
    }) => {
        let [P] = (0, i.useContext)(a.FiltersContext);
        if (P.categories && P.categories.length > 0 && 1 === P.categories.findIndex(({
                _id: e
            }) => e === P.selectedCategory) && null != P.selectedSubcategory) return null;
        let {
            subcategories: C,
            productCatalogItems: N
        } = P.categories.find(({
            _id: e
        }) => e === P.selectedCategory) || {}, T = null != P.selectedSubcategory ? (C || []).find(({
            _id: e
        }) => e === P.selectedSubcategory) : null, V = !S || S.categories?.find(e => e._id === P.selectedCategory) != null && (null == T || !S.subcategories || S.subcategories.some(({
            _id: e
        }) => e === P.selectedSubcategory)), L = e?.map(({
            title: e,
            link: t
        }) => {
            let i = t?.linkReference?.target === "_blank" ? "_blank" : "_self";
            return {
                label: e,
                href: t?.linkReference?.href.current || "/",
                target: i
            }
        }), F = E?.map((e, t) => {
            let i;
            return {
                eyebrow: e.eyebrow || "",
                title: e.title || "",
                description: e.description || "",
                action: e.action ? (i = e.action.link?.linkReference?.target === "_blank" ? "_blank" : "_self", {
                    label: e.action.title || "",
                    href: e.action.link?.linkReference?.href.current || "#",
                    target: i
                }) : {
                    label: "",
                    href: "#"
                },
                icon: e.icon?.asset?.url || "",
                onCardClick: e => ((e, t) => {
                    if (!t && E?.[e]) {
                        let t = E[e];
                        (0, s.default)({
                            event: "userEvent",
                            event_name: "navigation_click",
                            properties: {
                                navigation_click_text: t.title || "",
                                link_type: "feature list item",
                                form_name: t.title || "",
                                form_id: `list-item-${e}`,
                                block_title: h
                            }
                        })
                    }
                })(t, e)
            }
        });
        return (0, t.jsx)(t.Fragment, {
            children: !j && V && (0, t.jsx)("section", {
                className: "dark" === v ? "dark" : "",
                children: (0, t.jsx)(r.default, {
                    actions: L,
                    aspectRatio: "16:9" === f ? "16:9" : "1:1" === f ? "1:1" : void 0,
                    backgroundImage: o,
                    description: (0, t.jsx)(n.PortableText, {
                        value: c
                    }),
                    eyebrow: u,
                    image: {
                        src: (0, l.urlForImage)(d?.file?.asset?.url || "")?.auto("format")?.url() || "",
                        placeholder: d?.file?.asset.metadata?.lqip || "",
                        alt: d?.alt || "",
                        caption: d?.caption || ""
                    },
                    mediaPosition: "right" === m ? "right" : "left" === m ? "left" : void 0,
                    size: "large" === p ? "large" : "default" === p ? "default" : void 0,
                    variant: "gdc2026" === g ? "gdc2026" : "default" === g ? "default" : void 0,
                    title: h,
                    youtubeVideo: x,
                    brandfolderVideo: {
                        src: y?.muxHLSURL || ""
                    },
                    videoInline: w,
                    buttonLabel: b,
                    blockKey: A,
                    blockedMessage: k?.blockedMessage,
                    consentButtonLabel: k?.consentButtonLabel || "",
                    featureList: F
                })
            })
        })
    }], 649042)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d274613b-e714-5f1f-82ac-7c3f96aacee6")
    } catch (e) {}
}();
//# debugId=d274613b-e714-5f1f-82ac-7c3f96aacee6