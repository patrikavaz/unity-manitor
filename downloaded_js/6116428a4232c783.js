(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 637165, 114559, t => {
    "use strict";
    var e = t.i(361979);

    function i(t) {
        return (0, e.isSVGElement)(t) && "svg" === t.tagName
    }
    t.s(["isSVGSVGElement", () => i], 637165);
    var s = t.i(538305),
        o = t.i(134026),
        r = t.i(719625);

    function a(t, e, i) {
        let a = (0, s.isMotionValue)(t) ? t : (0, o.motionValue)(t);
        return a.start((0, r.animateMotionValue)("", a, e, i)), a.animation
    }
    t.s(["animateSingleValue", () => a], 114559)
}, 77851, 592877, t => {
    "use strict";
    var e = t.i(15310),
        i = t.i(175602),
        s = t.i(347248),
        o = t.i(647480),
        r = t.i(210681),
        a = t.i(21365),
        n = t.i(348367),
        l = t.i(719625),
        h = t.i(151153),
        u = t.i(829645);

    function c(t, e, i, s) {
        return (0, h.addDomEvent)(t, e, (0, u.addPointerInfo)(i), s)
    }
    var m = t.i(620297);

    function d(t) {
        return t.max - t.min
    }

    function p(t, e, i, s = .5) {
        t.origin = s, t.originPoint = (0, o.mixNumber)(e.min, e.max, t.origin), t.scale = d(i) / d(e), t.translate = (0, o.mixNumber)(i.min, i.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
    }

    function g(t, e, i, s) {
        p(t.x, e.x, i.x, s ? s.originX : void 0), p(t.y, e.y, i.y, s ? s.originY : void 0)
    }

    function f(t, e, i) {
        t.min = i.min + e.min, t.max = t.min + d(e)
    }

    function y(t, e, i) {
        t.min = e.min - i.min, t.max = t.min + d(e)
    }

    function v(t, e, i) {
        y(t.x, e.x, i.x), y(t.y, e.y, i.y)
    }
    var x = t.i(599696);

    function P(t) {
        return [t("x"), t("y")]
    }
    var T = t.i(595328);
    let D = ({
        current: t
    }) => t ? t.ownerDocument.defaultView : null;
    var E = t.i(201782),
        S = t.i(310243),
        B = t.i(414161),
        R = t.i(640746),
        A = t.i(667327);
    let j = (t, e) => Math.abs(t - e);
    class V {
        constructor(t, e, {
            transformPagePoint: i,
            contextWindow: o = window,
            dragSnapToOrigin: r = !1,
            distanceThreshold: a = 3
        } = {}) {
            if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                    var t, e;
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                    let i = b(this.lastMoveEventInfo, this.history),
                        o = null !== this.startEvent,
                        r = (t = i.offset, e = {
                            x: 0,
                            y: 0
                        }, Math.sqrt(j(t.x, e.x) ** 2 + j(t.y, e.y) ** 2) >= this.distanceThreshold);
                    if (!o && !r) return;
                    let {
                        point: a
                    } = i, {
                        timestamp: n
                    } = s.frameData;
                    this.history.push({
                        ...a,
                        timestamp: n
                    });
                    let {
                        onStart: l,
                        onMove: h
                    } = this.handlers;
                    o || (l && l(this.lastMoveEvent, i), this.startEvent = this.lastMoveEvent), h && h(this.lastMoveEvent, i)
                }, this.handlePointerMove = (t, e) => {
                    this.lastMoveEvent = t, this.lastMoveEventInfo = L(e, this.transformPagePoint), s.frame.update(this.updatePoint, !0)
                }, this.handlePointerUp = (t, e) => {
                    this.end();
                    let {
                        onEnd: i,
                        onSessionEnd: s,
                        resumeAnimation: o
                    } = this.handlers;
                    if (this.dragSnapToOrigin && o && o(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                    let r = b("pointercancel" === t.type ? this.lastMoveEventInfo : L(e, this.transformPagePoint), this.history);
                    this.startEvent && i && i(t, r), s && s(t, r)
                }, !(0, B.isPrimaryPointer)(t)) return;
            this.dragSnapToOrigin = r, this.handlers = e, this.transformPagePoint = i, this.distanceThreshold = a, this.contextWindow = o || window;
            const n = L((0, u.extractEventInfo)(t), this.transformPagePoint),
                {
                    point: l
                } = n,
                {
                    timestamp: h
                } = s.frameData;
            this.history = [{
                ...l,
                timestamp: h
            }];
            const {
                onSessionStart: m
            } = e;
            m && m(t, b(n, this.history)), this.removeListeners = (0, R.pipe)(c(this.contextWindow, "pointermove", this.handlePointerMove), c(this.contextWindow, "pointerup", this.handlePointerUp), c(this.contextWindow, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(t) {
            this.handlers = t
        }
        end() {
            this.removeListeners && this.removeListeners(), (0, s.cancelFrame)(this.updatePoint)
        }
    }

    function L(t, e) {
        return e ? {
            point: e(t.point)
        } : t
    }

    function w(t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    }

    function b({
        point: t
    }, e) {
        return {
            point: t,
            delta: w(t, M(e)),
            offset: w(t, e[0]),
            velocity: function(t, e) {
                if (t.length < 2) return {
                    x: 0,
                    y: 0
                };
                let i = t.length - 1,
                    s = null,
                    o = M(t);
                for (; i >= 0 && (s = t[i], !(o.timestamp - s.timestamp > (0, A.secondsToMilliseconds)(.1)));) i--;
                if (!s) return {
                    x: 0,
                    y: 0
                };
                let r = (0, A.millisecondsToSeconds)(o.timestamp - s.timestamp);
                if (0 === r) return {
                    x: 0,
                    y: 0
                };
                let a = {
                    x: (o.x - s.x) / r,
                    y: (o.y - s.y) / r
                };
                return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
            }(e, .1)
        }
    }

    function M(t) {
        return t[t.length - 1]
    }
    var C = t.i(747113),
        k = t.i(483032);

    function U(t, e, i) {
        return {
            min: void 0 !== e ? t.min + e : void 0,
            max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
        }
    }

    function F(t, e) {
        let i = e.min - t.min,
            s = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([i, s] = [s, i]), {
            min: i,
            max: s
        }
    }

    function O(t, e, i) {
        return {
            min: I(t, e),
            max: I(t, i)
        }
    }

    function I(t, e) {
        return "number" == typeof t ? t : t[e] || 0
    }
    let N = new WeakMap;
    class $ {
        constructor(t) {
            this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                x: 0,
                y: 0
            }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = (0, x.createBox)(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t
        }
        start(t, {
            snapToCursor: e = !1,
            distanceThreshold: i
        } = {}) {
            let {
                presenceContext: o
            } = this.visualElement;
            if (o && !1 === o.isPresent) return;
            let n = t => {
                    let {
                        dragSnapToOrigin: i
                    } = this.getProps();
                    i ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor((0, u.extractEventInfo)(t).point)
                },
                l = (t, e) => {
                    let {
                        drag: i,
                        dragPropagation: o,
                        onDragStart: n
                    } = this.getProps();
                    if (i && !o && (this.openDragLock && this.openDragLock(), this.openDragLock = function(t) {
                            if ("x" === t || "y" === t)
                                if (r.isDragging[t]) return null;
                                else return r.isDragging[t] = !0, () => {
                                    r.isDragging[t] = !1
                                };
                            return r.isDragging.x || r.isDragging.y ? null : (r.isDragging.x = r.isDragging.y = !0, () => {
                                r.isDragging.x = r.isDragging.y = !1
                            })
                        }(i), !this.openDragLock)) return;
                    this.latestPointerEvent = t, this.latestPanInfo = e, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), P(t => {
                        let e = this.getAxisMotionValue(t).get() || 0;
                        if (a.percent.test(e)) {
                            let {
                                projection: i
                            } = this.visualElement;
                            if (i && i.layout) {
                                let s = i.layout.layoutBox[t];
                                s && (e = d(s) * (parseFloat(e) / 100))
                            }
                        }
                        this.originPoint[t] = e
                    }), n && s.frame.postRender(() => n(t, e)), (0, S.addValueToWillChange)(this.visualElement, "transform");
                    let {
                        animationState: l
                    } = this.visualElement;
                    l && l.setActive("whileDrag", !0)
                },
                h = (t, e) => {
                    this.latestPointerEvent = t, this.latestPanInfo = e;
                    let {
                        dragPropagation: i,
                        dragDirectionLock: s,
                        onDirectionLock: o,
                        onDrag: r
                    } = this.getProps();
                    if (!i && !this.openDragLock) return;
                    let {
                        offset: a
                    } = e;
                    if (s && null === this.currentDirection) {
                        this.currentDirection = function(t, e = 10) {
                            let i = null;
                            return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                        }(a), null !== this.currentDirection && o && o(this.currentDirection);
                        return
                    }
                    this.updateAxis("x", e.point, a), this.updateAxis("y", e.point, a), this.visualElement.render(), r && r(t, e)
                },
                c = (t, e) => {
                    this.latestPointerEvent = t, this.latestPanInfo = e, this.stop(t, e), this.latestPointerEvent = null, this.latestPanInfo = null
                },
                m = () => P(t => "paused" === this.getAnimationState(t) && this.getAxisMotionValue(t).animation?.play()),
                {
                    dragSnapToOrigin: p
                } = this.getProps();
            this.panSession = new V(t, {
                onSessionStart: n,
                onStart: l,
                onMove: h,
                onSessionEnd: c,
                resumeAnimation: m
            }, {
                transformPagePoint: this.visualElement.getTransformPagePoint(),
                dragSnapToOrigin: p,
                distanceThreshold: i,
                contextWindow: D(this.visualElement)
            })
        }
        stop(t, e) {
            let i = t || this.latestPointerEvent,
                o = e || this.latestPanInfo,
                r = this.isDragging;
            if (this.cancel(), !r || !o || !i) return;
            let {
                velocity: a
            } = o;
            this.startAnimation(a);
            let {
                onDragEnd: n
            } = this.getProps();
            n && s.frame.postRender(() => n(i, o))
        }
        cancel() {
            this.isDragging = !1;
            let {
                projection: t,
                animationState: e
            } = this.visualElement;
            t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
            let {
                dragPropagation: i
            } = this.getProps();
            !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e && e.setActive("whileDrag", !1)
        }
        updateAxis(t, e, i) {
            let {
                drag: s
            } = this.getProps();
            if (!i || !W(t, s, this.currentDirection)) return;
            let r = this.getAxisMotionValue(t),
                a = this.originPoint[t] + i[t];
            this.constraints && this.constraints[t] && (a = function(t, {
                min: e,
                max: i
            }, s) {
                return void 0 !== e && t < e ? t = s ? (0, o.mixNumber)(e, t, s.min) : Math.max(t, e) : void 0 !== i && t > i && (t = s ? (0, o.mixNumber)(i, t, s.max) : Math.min(t, i)), t
            }(a, this.constraints[t], this.elastic[t])), r.set(a)
        }
        resolveConstraints() {
            let {
                dragConstraints: t,
                dragElastic: e
            } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, s = this.constraints;
            t && (0, E.isRefObject)(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && i ? this.constraints = function(t, {
                top: e,
                left: i,
                bottom: s,
                right: o
            }) {
                return {
                    x: U(t.x, i, o),
                    y: U(t.y, e, s)
                }
            }(i.layoutBox, t) : this.constraints = !1, this.elastic = function(t = .35) {
                return !1 === t ? t = 0 : !0 === t && (t = .35), {
                    x: O(t, "left", "right"),
                    y: O(t, "top", "bottom")
                }
            }(e), s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && P(t => {
                var e, s;
                let o;
                !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = (e = i.layoutBox[t], s = this.constraints[t], o = {}, void 0 !== s.min && (o.min = s.min - e.min), void 0 !== s.max && (o.max = s.max - e.min), o))
            })
        }
        resolveRefConstraints() {
            var t;
            let {
                dragConstraints: e,
                onMeasureDragConstraints: i
            } = this.getProps();
            if (!e || !(0, E.isRefObject)(e)) return !1;
            let s = e.current;
            (0, n.invariant)(null !== s, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
            let {
                projection: o
            } = this.visualElement;
            if (!o || !o.layout) return !1;
            let r = (0, T.measurePageBox)(s, o.root, this.visualElement.getTransformPagePoint()),
                a = (t = o.layout.layoutBox, {
                    x: F(t.x, r.x),
                    y: F(t.y, r.y)
                });
            if (i) {
                let t = i((0, m.convertBoxToBoundingBox)(a));
                this.hasMutatedConstraints = !!t, t && (a = (0, m.convertBoundingBoxToBox)(t))
            }
            return a
        }
        startAnimation(t) {
            let {
                drag: e,
                dragMomentum: i,
                dragElastic: s,
                dragTransition: o,
                dragSnapToOrigin: r,
                onDragTransitionEnd: a
            } = this.getProps(), n = this.constraints || {};
            return Promise.all(P(a => {
                if (!W(a, e, this.currentDirection)) return;
                let l = n && n[a] || {};
                r && (l = {
                    min: 0,
                    max: 0
                });
                let h = {
                    type: "inertia",
                    velocity: i ? t[a] : 0,
                    bounceStiffness: s ? 200 : 1e6,
                    bounceDamping: s ? 40 : 1e7,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...o,
                    ...l
                };
                return this.startAxisValueAnimation(a, h)
            })).then(a)
        }
        startAxisValueAnimation(t, e) {
            let i = this.getAxisMotionValue(t);
            return (0, S.addValueToWillChange)(this.visualElement, t), i.start((0, l.animateMotionValue)(t, i, 0, e, this.visualElement, !1))
        }
        stopAnimation() {
            P(t => this.getAxisMotionValue(t).stop())
        }
        pauseAnimation() {
            P(t => this.getAxisMotionValue(t).animation?.pause())
        }
        getAnimationState(t) {
            return this.getAxisMotionValue(t).animation?.state
        }
        getAxisMotionValue(t) {
            let e = `_drag${t.toUpperCase()}`,
                i = this.visualElement.getProps();
            return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
        }
        snapToCursor(t) {
            P(e => {
                let {
                    drag: i
                } = this.getProps();
                if (!W(e, i, this.currentDirection)) return;
                let {
                    projection: s
                } = this.visualElement, r = this.getAxisMotionValue(e);
                if (s && s.layout) {
                    let {
                        min: i,
                        max: a
                    } = s.layout.layoutBox[e];
                    r.set(t[e] - (0, o.mixNumber)(i, a, .5))
                }
            })
        }
        scalePositionWithinConstraints() {
            if (!this.visualElement.current) return;
            let {
                drag: t,
                dragConstraints: e
            } = this.getProps(), {
                projection: i
            } = this.visualElement;
            if (!(0, E.isRefObject)(e) || !i || !this.constraints) return;
            this.stopAnimation();
            let s = {
                x: 0,
                y: 0
            };
            P(t => {
                let e = this.getAxisMotionValue(t);
                if (e && !1 !== this.constraints) {
                    var i, o;
                    let r, a, n, l = e.get();
                    s[t] = (i = {
                        min: l,
                        max: l
                    }, o = this.constraints[t], r = .5, a = d(i), (n = d(o)) > a ? r = (0, C.progress)(o.min, o.max - a, i.min) : a > n && (r = (0, C.progress)(i.min, i.max - n, o.min)), (0, k.clamp)(0, 1, r))
                }
            });
            let {
                transformTemplate: r
            } = this.visualElement.getProps();
            this.visualElement.current.style.transform = r ? r({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), P(e => {
                if (!W(e, t, null)) return;
                let i = this.getAxisMotionValue(e),
                    {
                        min: r,
                        max: a
                    } = this.constraints[e];
                i.set((0, o.mixNumber)(r, a, s[e]))
            })
        }
        addListeners() {
            if (!this.visualElement.current) return;
            N.set(this.visualElement, this);
            let t = c(this.visualElement.current, "pointerdown", t => {
                    let {
                        drag: e,
                        dragListener: i = !0
                    } = this.getProps();
                    e && i && this.start(t)
                }),
                e = () => {
                    let {
                        dragConstraints: t
                    } = this.getProps();
                    (0, E.isRefObject)(t) && t.current && (this.constraints = this.resolveRefConstraints())
                },
                {
                    projection: i
                } = this.visualElement,
                o = i.addEventListener("measure", e);
            i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), s.frame.read(e);
            let r = (0, h.addDomEvent)(window, "resize", () => this.scalePositionWithinConstraints()),
                a = i.addEventListener("didUpdate", ({
                    delta: t,
                    hasLayoutChanged: e
                }) => {
                    this.isDragging && e && (P(e => {
                        let i = this.getAxisMotionValue(e);
                        i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                    }), this.visualElement.render())
                });
            return () => {
                r(), t(), o(), a && a()
            }
        }
        getProps() {
            let t = this.visualElement.getProps(),
                {
                    drag: e = !1,
                    dragDirectionLock: i = !1,
                    dragPropagation: s = !1,
                    dragConstraints: o = !1,
                    dragElastic: r = .35,
                    dragMomentum: a = !0
                } = t;
            return {
                ...t,
                drag: e,
                dragDirectionLock: i,
                dragPropagation: s,
                dragConstraints: o,
                dragElastic: r,
                dragMomentum: a
            }
        }
    }

    function W(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t)
    }
    class z extends e.Feature {
        constructor(t) {
            super(t), this.removeGroupControls = i.noop, this.removeListeners = i.noop, this.controls = new $(t)
        }
        mount() {
            let {
                dragControls: t
            } = this.node.getProps();
            t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || i.noop
        }
        unmount() {
            this.removeGroupControls(), this.removeListeners()
        }
    }
    var G = e;
    let H = t => (e, i) => {
        t && s.frame.postRender(() => t(e, i))
    };
    class X extends G.Feature {
        constructor() {
            super(...arguments), this.removePointerDownListener = i.noop
        }
        onPointerDown(t) {
            this.session = new V(t, this.createPanHandlers(), {
                transformPagePoint: this.node.getTransformPagePoint(),
                contextWindow: D(this.node)
            })
        }
        createPanHandlers() {
            let {
                onPanSessionStart: t,
                onPanStart: e,
                onPan: i,
                onPanEnd: o
            } = this.node.getProps();
            return {
                onSessionStart: H(t),
                onStart: H(e),
                onMove: i,
                onEnd: (t, e) => {
                    delete this.session, o && s.frame.postRender(() => o(t, e))
                }
            }
        }
        mount() {
            this.removePointerDownListener = c(this.node.current, "pointerdown", t => this.onPointerDown(t))
        }
        update() {
            this.session && this.session.updateHandlers(this.createPanHandlers())
        }
        unmount() {
            this.removePointerDownListener(), this.session && this.session.end()
        }
    }
    var Y = t.i(615167),
        q = t.i(984776),
        K = t.i(145158),
        Z = t.i(108830),
        _ = t.i(454895),
        J = t.i(452278);
    let Q = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    };

    function tt(t, e) {
        return e.max === e.min ? 0 : t / (e.max - e.min) * 100
    }
    let te = {
        correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t)
                if (!a.px.test(t)) return t;
                else t = parseFloat(t);
            let i = tt(t, e.target.x),
                s = tt(t, e.target.y);
            return `${i}% ${s}%`
        }
    };
    var ti = t.i(377149),
        ts = t.i(826670);
    let to = !1;
    class tr extends K.Component {
        componentDidMount() {
            let {
                visualElement: t,
                layoutGroup: e,
                switchLayoutGroup: i,
                layoutId: s
            } = this.props, {
                projection: o
            } = t;
            (0, ts.addScaleCorrector)(tn), o && (e.group && e.group.add(o), i && i.register && s && i.register(o), to && o.root.didUpdate(), o.addEventListener("animationComplete", () => {
                this.safeToRemove()
            }), o.setOptions({
                ...o.options,
                onExitComplete: () => this.safeToRemove()
            })), Q.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(t) {
            let {
                layoutDependency: e,
                visualElement: i,
                drag: o,
                isPresent: r
            } = this.props, {
                projection: a
            } = i;
            return a && (a.isPresent = r, to = !0, o || t.layoutDependency !== e || void 0 === e || t.isPresent !== r ? a.willUpdate() : this.safeToRemove(), t.isPresent !== r && (r ? a.promote() : a.relegate() || s.frame.postRender(() => {
                let t = a.getStack();
                t && t.members.length || this.safeToRemove()
            }))), null
        }
        componentDidUpdate() {
            let {
                projection: t
            } = this.props.visualElement;
            t && (t.root.didUpdate(), q.microtask.postRender(() => {
                !t.currentAnimation && t.isLead() && this.safeToRemove()
            }))
        }
        componentWillUnmount() {
            let {
                visualElement: t,
                layoutGroup: e,
                switchLayoutGroup: i
            } = this.props, {
                projection: s
            } = t;
            to = !0, s && (s.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(s), i && i.deregister && i.deregister(s))
        }
        safeToRemove() {
            let {
                safeToRemove: t
            } = this.props;
            t && t()
        }
        render() {
            return null
        }
    }

    function ta(t) {
        let [e, i] = (0, Z.usePresence)(), s = (0, K.useContext)(_.LayoutGroupContext);
        return (0, Y.jsx)(tr, {
            ...t,
            layoutGroup: s,
            switchLayoutGroup: (0, K.useContext)(J.SwitchLayoutGroupContext),
            isPresent: e,
            safeToRemove: i
        })
    }
    let tn = {
        borderRadius: {
            ...te,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: te,
        borderTopRightRadius: te,
        borderBottomLeftRadius: te,
        borderBottomRightRadius: te,
        boxShadow: {
            correct: (t, {
                treeScale: e,
                projectionDelta: i
            }) => {
                let s = ti.complex.parse(t);
                if (s.length > 5) return t;
                let r = ti.complex.createTransformer(t),
                    a = +("number" != typeof s[0]),
                    n = i.x.scale * e.x,
                    l = i.y.scale * e.y;
                s[0 + a] /= n, s[1 + a] /= l;
                let h = (0, o.mixNumber)(n, l, .5);
                return "number" == typeof s[2 + a] && (s[2 + a] /= h), "number" == typeof s[3 + a] && (s[3 + a] /= h), r(s)
            }
        }
    };
    var tl = t.i(680124),
        th = t.i(361979),
        tu = t.i(637165),
        tc = t.i(965836),
        tm = t.i(924140),
        td = t.i(840289),
        tp = t.i(134026),
        tg = t.i(470180),
        tf = t.i(114559),
        ty = t.i(971401),
        tv = t.i(133639);
    let tx = (t, e) => t.depth - e.depth;
    class tP {
        constructor() {
            this.children = [], this.isDirty = !1
        }
        add(t) {
            (0, tv.addUniqueItem)(this.children, t), this.isDirty = !0
        }
        remove(t) {
            (0, tv.removeItem)(this.children, t), this.isDirty = !0
        }
        forEach(t) {
            this.isDirty && this.children.sort(tx), this.isDirty = !1, this.children.forEach(t)
        }
    }
    var tT = t.i(410068),
        tD = t.i(83224);
    let tE = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        tS = tE.length,
        tB = t => "string" == typeof t ? parseFloat(t) : t,
        tR = t => "number" == typeof t || a.px.test(t);

    function tA(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius
    }
    let tj = tL(0, .5, tD.circOut),
        tV = tL(.5, .95, i.noop);

    function tL(t, e, i) {
        return s => s < t ? 0 : s > e ? 1 : i((0, C.progress)(t, e, s))
    }

    function tw(t, e) {
        t.min = e.min, t.max = e.max
    }

    function tb(t, e) {
        tw(t.x, e.x), tw(t.y, e.y)
    }

    function tM(t, e) {
        t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
    }
    var tC = t.i(311878);

    function tk(t, e, i, s, o) {
        return t -= e, t = (0, tC.scalePoint)(t, 1 / i, s), void 0 !== o && (t = (0, tC.scalePoint)(t, 1 / o, s)), t
    }

    function tU(t, e, [i, s, r], n, l) {
        ! function(t, e = 0, i = 1, s = .5, r, n = t, l = t) {
            if (a.percent.test(e) && (e = parseFloat(e), e = (0, o.mixNumber)(l.min, l.max, e / 100) - l.min), "number" != typeof e) return;
            let h = (0, o.mixNumber)(n.min, n.max, s);
            t === n && (h -= e), t.min = tk(t.min, e, i, h, r), t.max = tk(t.max, e, i, h, r)
        }(t, e[i], e[s], e[r], e.scale, n, l)
    }
    let tF = ["x", "scaleX", "originX"],
        tO = ["y", "scaleY", "originY"];

    function tI(t, e, i, s) {
        tU(t.x, e, tF, i ? i.x : void 0, s ? s.x : void 0), tU(t.y, e, tO, i ? i.y : void 0, s ? s.y : void 0)
    }

    function tN(t) {
        return 0 === t.translate && 1 === t.scale
    }

    function t$(t) {
        return tN(t.x) && tN(t.y)
    }

    function tW(t, e) {
        return t.min === e.min && t.max === e.max
    }

    function tz(t, e) {
        return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
    }

    function tG(t, e) {
        return tz(t.x, e.x) && tz(t.y, e.y)
    }

    function tH(t) {
        return d(t.x) / d(t.y)
    }

    function tX(t, e) {
        return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
    }
    class tY {
        constructor() {
            this.members = []
        }
        add(t) {
            (0, tv.addUniqueItem)(this.members, t), t.scheduleRender()
        }
        remove(t) {
            if ((0, tv.removeItem)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                let t = this.members[this.members.length - 1];
                t && this.promote(t)
            }
        }
        relegate(t) {
            let e, i = this.members.findIndex(e => t === e);
            if (0 === i) return !1;
            for (let t = i; t >= 0; t--) {
                let i = this.members[t];
                if (!1 !== i.isPresent) {
                    e = i;
                    break
                }
            }
            return !!e && (this.promote(e), !0)
        }
        promote(t, e) {
            let i = this.lead;
            if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                let {
                    crossfade: s
                } = t.options;
                !1 === s && i.hide()
            }
        }
        exitAnimationComplete() {
            this.members.forEach(t => {
                let {
                    options: e,
                    resumingFrom: i
                } = t;
                e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
            })
        }
        scheduleRender() {
            this.members.forEach(t => {
                t.instance && t.scheduleRender(!1)
            })
        }
        removeLeadSnapshot() {
            this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
        }
    }
    var tq = t.i(317202);
    let tK = {
            nodes: 0,
            calculatedTargetDeltas: 0,
            calculatedProjections: 0
        },
        tZ = ["", "X", "Y", "Z"],
        t_ = 0;

    function tJ(t, e, i, s) {
        let {
            latestValues: o
        } = e;
        o[t] && (i[t] = o[t], e.setStaticValue(t, 0), s && (s[t] = 0))
    }

    function tQ({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: r,
        resetTransform: n
    }) {
        return class {
            constructor(t = {}, i = e?.()) {
                this.id = t_++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                    x: 1,
                    y: 1
                }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                    this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                }, this.updateProjection = () => {
                    this.projectionUpdateScheduled = !1, tl.statsBuffer.value && (tK.nodes = tK.calculatedTargetDeltas = tK.calculatedProjections = 0), this.nodes.forEach(t5), this.nodes.forEach(t8), this.nodes.forEach(et), this.nodes.forEach(t3), tl.statsBuffer.addProjectionMetrics && tl.statsBuffer.addProjectionMetrics(tK)
                }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
                for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                this.root === this && (this.nodes = new tP)
            }
            addEventListener(t, e) {
                return this.eventHandlers.has(t) || this.eventHandlers.set(t, new tg.SubscriptionManager), this.eventHandlers.get(t).add(e)
            }
            notifyListeners(t, ...e) {
                let i = this.eventHandlers.get(t);
                i && i.notify(...e)
            }
            hasListeners(t) {
                return this.eventHandlers.has(t)
            }
            mount(e) {
                if (this.instance) return;
                this.isSVG = (0, th.isSVGElement)(e) && !(0, tu.isSVGSVGElement)(e), this.instance = e;
                let {
                    layoutId: i,
                    layout: o,
                    visualElement: r
                } = this.options;
                if (r && !r.current && r.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (o || i) && (this.isLayoutDirty = !0), t) {
                    let i, o = 0,
                        r = () => this.root.updateBlockedByResize = !1;
                    s.frame.read(() => {
                        o = window.innerWidth
                    }), t(e, () => {
                        let t = window.innerWidth;
                        if (t !== o) {
                            let e, a;
                            o = t, this.root.updateBlockedByResize = !0, i && i(), e = tm.time.now(), a = ({
                                timestamp: t
                            }) => {
                                let i = t - e;
                                i >= 250 && ((0, s.cancelFrame)(a), r(i - 250))
                            }, s.frame.setup(a, !0), i = () => (0, s.cancelFrame)(a), Q.hasAnimatedSinceResize && (Q.hasAnimatedSinceResize = !1, this.nodes.forEach(t9))
                        }
                    })
                }
                i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && r && (i || o) && this.addEventListener("didUpdate", ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeLayoutChanged: i,
                    layout: s
                }) => {
                    if (this.isTreeAnimationBlocked()) {
                        this.target = void 0, this.relativeTarget = void 0;
                        return
                    }
                    let o = this.options.transition || r.getDefaultTransition() || ea,
                        {
                            onLayoutAnimationStart: a,
                            onLayoutAnimationComplete: n
                        } = r.getProps(),
                        l = !this.targetLayout || !tG(this.targetLayout, s),
                        h = !e && i;
                    if (this.options.layoutRoot || this.resumeFrom || h || e && (l || !this.currentAnimation)) {
                        this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                        let e = {
                            ...(0, tc.getValueTransition)(o, "layout"),
                            onPlay: a,
                            onComplete: n
                        };
                        (r.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e), this.setAnimationOrigin(t, h)
                    } else e || t9(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                    this.targetLayout = s
                })
            }
            unmount() {
                this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                let t = this.getStack();
                t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), (0, s.cancelFrame)(this.updateProjection)
            }
            blockUpdate() {
                this.updateManuallyBlocked = !0
            }
            unblockUpdate() {
                this.updateManuallyBlocked = !1
            }
            isUpdateBlocked() {
                return this.updateManuallyBlocked || this.updateBlockedByResize
            }
            isTreeAnimationBlocked() {
                return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
            }
            startUpdate() {
                !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(ee), this.animationId++)
            }
            getTransformTemplate() {
                let {
                    visualElement: t
                } = this.options;
                return t && t.getProps().transformTemplate
            }
            willUpdate(t = !0) {
                if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                    this.options.onExitComplete && this.options.onExitComplete();
                    return
                }
                if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                        if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
                        let {
                            visualElement: i
                        } = e.options;
                        if (!i) return;
                        let o = (0, ty.getOptimisedAppearId)(i);
                        if (window.MotionHasOptimisedAnimation(o, "transform")) {
                            let {
                                layout: t,
                                layoutId: i
                            } = e.options;
                            window.MotionCancelOptimisedAnimation(o, "transform", s.frame, !(t || i))
                        }
                        let {
                            parent: r
                        } = e;
                        r && !r.hasCheckedOptimisedAppear && t(r)
                    }(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                this.isLayoutDirty = !0;
                for (let t = 0; t < this.path.length; t++) {
                    let e = this.path[t];
                    e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                }
                let {
                    layoutId: e,
                    layout: i
                } = this.options;
                if (void 0 === e && !i) return;
                let o = this.getTransformTemplate();
                this.prevTransformTemplateValue = o ? o(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
            }
            update() {
                if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                    this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(t7);
                    return
                }
                if (this.animationId <= this.animationCommitId) return void this.nodes.forEach(t6);
                this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(t4), this.nodes.forEach(t0), this.nodes.forEach(t1)) : this.nodes.forEach(t6), this.clearAllSnapshots();
                let t = tm.time.now();
                s.frameData.delta = (0, k.clamp)(0, 1e3 / 60, t - s.frameData.timestamp), s.frameData.timestamp = t, s.frameData.isProcessing = !0, s.frameSteps.update.process(s.frameData), s.frameSteps.preRender.process(s.frameData), s.frameSteps.render.process(s.frameData), s.frameData.isProcessing = !1
            }
            didUpdate() {
                this.updateScheduled || (this.updateScheduled = !0, q.microtask.read(this.scheduleUpdate))
            }
            clearAllSnapshots() {
                this.nodes.forEach(t2), this.sharedNodes.forEach(ei)
            }
            scheduleUpdateProjection() {
                this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, s.frame.preRender(this.updateProjection, !1, !0))
            }
            scheduleCheckAfterUnmount() {
                s.frame.postRender(() => {
                    this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                })
            }
            updateSnapshot() {
                !this.snapshot && this.instance && (this.snapshot = this.measure(), !this.snapshot || d(this.snapshot.measuredBox.x) || d(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
            }
            updateLayout() {
                if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                if (this.resumeFrom && !this.resumeFrom.instance)
                    for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
                let t = this.layout;
                this.layout = this.measure(!1), this.layoutCorrected = (0, x.createBox)(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                let {
                    visualElement: e
                } = this.options;
                e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
            }
            updateScroll(t = "measure") {
                let e = !!(this.options.layoutScroll && this.instance);
                if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && this.instance) {
                    let e = r(this.instance);
                    this.scroll = {
                        animationId: this.root.animationId,
                        phase: t,
                        isRoot: e,
                        offset: i(this.instance),
                        wasRoot: this.scroll ? this.scroll.isRoot : e
                    }
                }
            }
            resetTransform() {
                if (!n) return;
                let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                    e = this.projectionDelta && !t$(this.projectionDelta),
                    i = this.getTransformTemplate(),
                    s = i ? i(this.latestValues, "") : void 0,
                    o = s !== this.prevTransformTemplateValue;
                t && this.instance && (e || (0, tq.hasTransform)(this.latestValues) || o) && (n(this.instance, s), this.shouldResetTransform = !1, this.scheduleRender())
            }
            measure(t = !0) {
                var e;
                let i = this.measurePageBox(),
                    s = this.removeElementScroll(i);
                return t && (s = this.removeTransform(s)), eh((e = s).x), eh(e.y), {
                    animationId: this.root.animationId,
                    measuredBox: i,
                    layoutBox: s,
                    latestValues: {},
                    source: this.id
                }
            }
            measurePageBox() {
                let {
                    visualElement: t
                } = this.options;
                if (!t) return (0, x.createBox)();
                let e = t.measureViewportBox();
                if (!(this.scroll?.wasRoot || this.path.some(ec))) {
                    let {
                        scroll: t
                    } = this.root;
                    t && ((0, tC.translateAxis)(e.x, t.offset.x), (0, tC.translateAxis)(e.y, t.offset.y))
                }
                return e
            }
            removeElementScroll(t) {
                let e = (0, x.createBox)();
                if (tb(e, t), this.scroll?.wasRoot) return e;
                for (let i = 0; i < this.path.length; i++) {
                    let s = this.path[i],
                        {
                            scroll: o,
                            options: r
                        } = s;
                    s !== this.root && o && r.layoutScroll && (o.wasRoot && tb(e, t), (0, tC.translateAxis)(e.x, o.offset.x), (0, tC.translateAxis)(e.y, o.offset.y))
                }
                return e
            }
            applyTransform(t, e = !1) {
                let i = (0, x.createBox)();
                tb(i, t);
                for (let t = 0; t < this.path.length; t++) {
                    let s = this.path[t];
                    !e && s.options.layoutScroll && s.scroll && s !== s.root && (0, tC.transformBox)(i, {
                        x: -s.scroll.offset.x,
                        y: -s.scroll.offset.y
                    }), (0, tq.hasTransform)(s.latestValues) && (0, tC.transformBox)(i, s.latestValues)
                }
                return (0, tq.hasTransform)(this.latestValues) && (0, tC.transformBox)(i, this.latestValues), i
            }
            removeTransform(t) {
                let e = (0, x.createBox)();
                tb(e, t);
                for (let t = 0; t < this.path.length; t++) {
                    let i = this.path[t];
                    if (!i.instance || !(0, tq.hasTransform)(i.latestValues)) continue;
                    (0, tq.hasScale)(i.latestValues) && i.updateSnapshot();
                    let s = (0, x.createBox)();
                    tb(s, i.measurePageBox()), tI(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, s)
                }
                return (0, tq.hasTransform)(this.latestValues) && tI(e, this.latestValues), e
            }
            setTargetDelta(t) {
                this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
            }
            setOptions(t) {
                this.options = {
                    ...this.options,
                    ...t,
                    crossfade: void 0 === t.crossfade || t.crossfade
                }
            }
            clearMeasurements() {
                this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
            }
            forceRelativeParentToResolveTarget() {
                this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== s.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
            }
            resolveTargetDelta(t = !1) {
                let e = this.getLead();
                this.isProjectionDirty || (this.isProjectionDirty = e.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = e.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = e.isSharedProjectionDirty);
                let i = !!this.resumingFrom || this !== e;
                if (!(t || i && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                let {
                    layout: o,
                    layoutId: r
                } = this.options;
                if (this.layout && (o || r)) {
                    if (this.resolvedRelativeTargetAt = s.frameData.timestamp, !this.targetDelta && !this.relativeTarget) {
                        let t = this.getClosestProjectingParent();
                        t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, x.createBox)(), this.relativeTargetOrigin = (0, x.createBox)(), v(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), tb(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    if (this.relativeTarget || this.targetDelta) {
                        if (this.target || (this.target = (0, x.createBox)(), this.targetWithTransforms = (0, x.createBox)()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
                            var a, n, l;
                            this.forceRelativeParentToResolveTarget(), a = this.target, n = this.relativeTarget, l = this.relativeParent.target, f(a.x, n.x, l.x), f(a.y, n.y, l.y)
                        } else this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : tb(this.target, this.layout.layoutBox), (0, tC.applyBoxDelta)(this.target, this.targetDelta)) : tb(this.target, this.layout.layoutBox);
                        if (this.attemptToResolveRelativeTarget) {
                            this.attemptToResolveRelativeTarget = !1;
                            let t = this.getClosestProjectingParent();
                            t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, x.createBox)(), this.relativeTargetOrigin = (0, x.createBox)(), v(this.relativeTargetOrigin, this.target, t.target), tb(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        tl.statsBuffer.value && tK.calculatedTargetDeltas++
                    }
                }
            }
            getClosestProjectingParent() {
                if (!(!this.parent || (0, tq.hasScale)(this.parent.latestValues) || (0, tq.has2DTranslate)(this.parent.latestValues)))
                    if (this.parent.isProjecting()) return this.parent;
                    else return this.parent.getClosestProjectingParent()
            }
            isProjecting() {
                return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
            }
            calcProjection() {
                let t = this.getLead(),
                    e = !!this.resumingFrom || this !== t,
                    i = !0;
                if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (i = !1), e && (this.isSharedProjectionDirty || this.isTransformDirty) && (i = !1), this.resolvedRelativeTargetAt === s.frameData.timestamp && (i = !1), i) return;
                let {
                    layout: o,
                    layoutId: r
                } = this.options;
                if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(o || r)) return;
                tb(this.layoutCorrected, this.layout.layoutBox);
                let a = this.treeScale.x,
                    n = this.treeScale.y;
                (0, tC.applyTreeDeltas)(this.layoutCorrected, this.treeScale, this.path, e), t.layout && !t.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (t.target = t.layout.layoutBox, t.targetWithTransforms = (0, x.createBox)());
                let {
                    target: l
                } = t;
                if (!l) {
                    this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                    return
                }
                this.projectionDelta && this.prevProjectionDelta ? (tM(this.prevProjectionDelta.x, this.projectionDelta.x), tM(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), g(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.treeScale.x === a && this.treeScale.y === n && tX(this.projectionDelta.x, this.prevProjectionDelta.x) && tX(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), tl.statsBuffer.value && tK.calculatedProjections++
            }
            hide() {
                this.isVisible = !1
            }
            show() {
                this.isVisible = !0
            }
            scheduleRender(t = !0) {
                if (this.options.visualElement?.scheduleRender(), t) {
                    let t = this.getStack();
                    t && t.scheduleRender()
                }
                this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
            }
            createProjectionDeltas() {
                this.prevProjectionDelta = (0, x.createDelta)(), this.projectionDelta = (0, x.createDelta)(), this.projectionDeltaWithTransform = (0, x.createDelta)()
            }
            setAnimationOrigin(t, e = !1) {
                let i, s = this.snapshot,
                    r = s ? s.latestValues : {},
                    n = {
                        ...this.latestValues
                    },
                    l = (0, x.createDelta)();
                this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                let h = (0, x.createBox)(),
                    u = (s ? s.source : void 0) !== (this.layout ? this.layout.source : void 0),
                    c = this.getStack(),
                    m = !c || c.members.length <= 1,
                    d = !!(u && !m && !0 === this.options.crossfade && !this.path.some(er));
                this.animationProgress = 0, this.mixTargetDelta = e => {
                    let s = e / 1e3;
                    if (es(l.x, t.x, s), es(l.y, t.y, s), this.setTargetDelta(l), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                        var c, p, g, f, y, P;
                        v(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), g = this.relativeTarget, f = this.relativeTargetOrigin, y = h, P = s, eo(g.x, f.x, y.x, P), eo(g.y, f.y, y.y, P), i && (c = this.relativeTarget, p = i, tW(c.x, p.x) && tW(c.y, p.y)) && (this.isProjectionDirty = !1), i || (i = (0, x.createBox)()), tb(i, this.relativeTarget)
                    }
                    u && (this.animationValues = n, function(t, e, i, s, r, n) {
                        r ? (t.opacity = (0, o.mixNumber)(0, i.opacity ?? 1, tj(s)), t.opacityExit = (0, o.mixNumber)(e.opacity ?? 1, 0, tV(s))) : n && (t.opacity = (0, o.mixNumber)(e.opacity ?? 1, i.opacity ?? 1, s));
                        for (let r = 0; r < tS; r++) {
                            let n = `border${tE[r]}Radius`,
                                l = tA(e, n),
                                h = tA(i, n);
                            (void 0 !== l || void 0 !== h) && (l || (l = 0), h || (h = 0), 0 === l || 0 === h || tR(l) === tR(h) ? (t[n] = Math.max((0, o.mixNumber)(tB(l), tB(h), s), 0), (a.percent.test(h) || a.percent.test(l)) && (t[n] += "%")) : t[n] = h)
                        }(e.rotate || i.rotate) && (t.rotate = (0, o.mixNumber)(e.rotate || 0, i.rotate || 0, s))
                    }(n, r, this.latestValues, s, d, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = s
                }, this.mixTargetDelta(1e3 * !!this.options.layoutRoot)
            }
            startAnimation(t) {
                this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && ((0, s.cancelFrame)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = s.frame.update(() => {
                    Q.hasAnimatedSinceResize = !0, td.activeAnimations.layout++, this.motionValue || (this.motionValue = (0, tp.motionValue)(0)), this.currentAnimation = (0, tf.animateSingleValue)(this.motionValue, [0, 1e3], {
                        ...t,
                        velocity: 0,
                        isSync: !0,
                        onUpdate: e => {
                            this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                        },
                        onStop: () => {
                            td.activeAnimations.layout--
                        },
                        onComplete: () => {
                            td.activeAnimations.layout--, t.onComplete && t.onComplete(), this.completeAnimation()
                        }
                    }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                })
            }
            completeAnimation() {
                this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                let t = this.getStack();
                t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
            }
            finishAnimation() {
                this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
            }
            applyTransformsToTarget() {
                let t = this.getLead(),
                    {
                        targetWithTransforms: e,
                        target: i,
                        layout: s,
                        latestValues: o
                    } = t;
                if (e && i && s) {
                    if (this !== t && this.layout && s && eu(this.options.animationType, this.layout.layoutBox, s.layoutBox)) {
                        i = this.target || (0, x.createBox)();
                        let e = d(this.layout.layoutBox.x);
                        i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                        let s = d(this.layout.layoutBox.y);
                        i.y.min = t.target.y.min, i.y.max = i.y.min + s
                    }
                    tb(e, i), (0, tC.transformBox)(e, o), g(this.projectionDeltaWithTransform, this.layoutCorrected, e, o)
                }
            }
            registerSharedNode(t, e) {
                this.sharedNodes.has(t) || this.sharedNodes.set(t, new tY), this.sharedNodes.get(t).add(e);
                let i = e.options.initialPromotionConfig;
                e.promote({
                    transition: i ? i.transition : void 0,
                    preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                })
            }
            isLead() {
                let t = this.getStack();
                return !t || t.lead === this
            }
            getLead() {
                let {
                    layoutId: t
                } = this.options;
                return t && this.getStack()?.lead || this
            }
            getPrevLead() {
                let {
                    layoutId: t
                } = this.options;
                return t ? this.getStack()?.prevLead : void 0
            }
            getStack() {
                let {
                    layoutId: t
                } = this.options;
                if (t) return this.root.sharedNodes.get(t)
            }
            promote({
                needsReset: t,
                transition: e,
                preserveFollowOpacity: i
            } = {}) {
                let s = this.getStack();
                s && s.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                    transition: e
                })
            }
            relegate() {
                let t = this.getStack();
                return !!t && t.relegate(this)
            }
            resetSkewAndRotation() {
                let {
                    visualElement: t
                } = this.options;
                if (!t) return;
                let e = !1,
                    {
                        latestValues: i
                    } = t;
                if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0), !e) return;
                let s = {};
                i.z && tJ("z", t, s, this.animationValues);
                for (let e = 0; e < tZ.length; e++) tJ(`rotate${tZ[e]}`, t, s, this.animationValues), tJ(`skew${tZ[e]}`, t, s, this.animationValues);
                for (let e in t.render(), s) t.setStaticValue(e, s[e]), this.animationValues && (this.animationValues[e] = s[e]);
                t.scheduleRender()
            }
            applyProjectionStyles(t, e) {
                if (!this.instance || this.isSVG) return;
                if (!this.isVisible) {
                    t.visibility = "hidden";
                    return
                }
                let i = this.getTransformTemplate();
                if (this.needsReset) {
                    this.needsReset = !1, t.visibility = "", t.opacity = "", t.pointerEvents = (0, tT.resolveMotionValue)(e?.pointerEvents) || "", t.transform = i ? i(this.latestValues, "") : "none";
                    return
                }
                let s = this.getLead();
                if (!this.projectionDelta || !this.layout || !s.target) {
                    this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = (0, tT.resolveMotionValue)(e?.pointerEvents) || ""), this.hasProjected && !(0, tq.hasTransform)(this.latestValues) && (t.transform = i ? i({}, "") : "none", this.hasProjected = !1);
                    return
                }
                t.visibility = "";
                let o = s.animationValues || s.latestValues;
                this.applyTransformsToTarget();
                let r = function(t, e, i) {
                    let s = "",
                        o = t.x.translate / e.x,
                        r = t.y.translate / e.y,
                        a = i?.z || 0;
                    if ((o || r || a) && (s = `translate3d(${o}px, ${r}px, ${a}px) `), (1 !== e.x || 1 !== e.y) && (s += `scale(${1/e.x}, ${1/e.y}) `), i) {
                        let {
                            transformPerspective: t,
                            rotate: e,
                            rotateX: o,
                            rotateY: r,
                            skewX: a,
                            skewY: n
                        } = i;
                        t && (s = `perspective(${t}px) ${s}`), e && (s += `rotate(${e}deg) `), o && (s += `rotateX(${o}deg) `), r && (s += `rotateY(${r}deg) `), a && (s += `skewX(${a}deg) `), n && (s += `skewY(${n}deg) `)
                    }
                    let n = t.x.scale * e.x,
                        l = t.y.scale * e.y;
                    return (1 !== n || 1 !== l) && (s += `scale(${n}, ${l})`), s || "none"
                }(this.projectionDeltaWithTransform, this.treeScale, o);
                i && (r = i(o, r)), t.transform = r;
                let {
                    x: a,
                    y: n
                } = this.projectionDelta;
                for (let e in t.transformOrigin = `${100*a.origin}% ${100*n.origin}% 0`, s.animationValues ? t.opacity = s === this ? o.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : t.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0, ts.scaleCorrectors) {
                    if (void 0 === o[e]) continue;
                    let {
                        correct: i,
                        applyTo: a,
                        isCSSVariable: n
                    } = ts.scaleCorrectors[e], l = "none" === r ? o[e] : i(o[e], s);
                    if (a) {
                        let e = a.length;
                        for (let i = 0; i < e; i++) t[a[i]] = l
                    } else n ? this.options.visualElement.renderState.vars[e] = l : t[e] = l
                }
                this.options.layoutId && (t.pointerEvents = s === this ? (0, tT.resolveMotionValue)(e?.pointerEvents) || "" : "none")
            }
            clearSnapshot() {
                this.resumeFrom = this.snapshot = void 0
            }
            resetTree() {
                this.root.nodes.forEach(t => t.currentAnimation?.stop()), this.root.nodes.forEach(t7), this.root.sharedNodes.clear()
            }
        }
    }

    function t0(t) {
        t.updateLayout()
    }

    function t1(t) {
        let e = t.resumeFrom?.snapshot || t.snapshot;
        if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
            let {
                layoutBox: i,
                measuredBox: s
            } = t.layout, {
                animationType: o
            } = t.options, r = e.source !== t.layout.source;
            "size" === o ? P(t => {
                let s = r ? e.measuredBox[t] : e.layoutBox[t],
                    o = d(s);
                s.min = i[t].min, s.max = s.min + o
            }) : eu(o, e.layoutBox, i) && P(s => {
                let o = r ? e.measuredBox[s] : e.layoutBox[s],
                    a = d(i[s]);
                o.max = o.min + a, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[s].max = t.relativeTarget[s].min + a)
            });
            let a = (0, x.createDelta)();
            g(a, i, e.layoutBox);
            let n = (0, x.createDelta)();
            r ? g(n, t.applyTransform(s, !0), e.measuredBox) : g(n, i, e.layoutBox);
            let l = !t$(a),
                h = !1;
            if (!t.resumeFrom) {
                let s = t.getClosestProjectingParent();
                if (s && !s.resumeFrom) {
                    let {
                        snapshot: o,
                        layout: r
                    } = s;
                    if (o && r) {
                        let a = (0, x.createBox)();
                        v(a, e.layoutBox, o.layoutBox);
                        let n = (0, x.createBox)();
                        v(n, i, r.layoutBox), tG(a, n) || (h = !0), s.options.layoutRoot && (t.relativeTarget = n, t.relativeTargetOrigin = a, t.relativeParent = s)
                    }
                }
            }
            t.notifyListeners("didUpdate", {
                layout: i,
                snapshot: e,
                delta: n,
                layoutDelta: a,
                hasLayoutChanged: l,
                hasRelativeLayoutChanged: h
            })
        } else if (t.isLead()) {
            let {
                onExitComplete: e
            } = t.options;
            e && e()
        }
        t.options.transition = void 0
    }

    function t5(t) {
        tl.statsBuffer.value && tK.nodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
    }

    function t3(t) {
        t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
    }

    function t2(t) {
        t.clearSnapshot()
    }

    function t7(t) {
        t.clearMeasurements()
    }

    function t6(t) {
        t.isLayoutDirty = !1
    }

    function t4(t) {
        let {
            visualElement: e
        } = t.options;
        e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
    }

    function t9(t) {
        t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
    }

    function t8(t) {
        t.resolveTargetDelta()
    }

    function et(t) {
        t.calcProjection()
    }

    function ee(t) {
        t.resetSkewAndRotation()
    }

    function ei(t) {
        t.removeLeadSnapshot()
    }

    function es(t, e, i) {
        t.translate = (0, o.mixNumber)(e.translate, 0, i), t.scale = (0, o.mixNumber)(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
    }

    function eo(t, e, i, s) {
        t.min = (0, o.mixNumber)(e.min, i.min, s), t.max = (0, o.mixNumber)(e.max, i.max, s)
    }

    function er(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
    }
    let ea = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        },
        en = t => "u" > typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
        el = en("applewebkit/") && !en("chrome/") ? Math.round : i.noop;

    function eh(t) {
        t.min = el(t.min), t.max = el(t.max)
    }

    function eu(t, e, i) {
        return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(tH(e) - tH(i)))
    }

    function ec(t) {
        return t !== t.root && t.scroll?.wasRoot
    }
    let em = tQ({
            attachResizeListener: (t, e) => (0, h.addDomEvent)(t, "resize", e),
            measureScroll: () => ({
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }),
            checkIsScrollRoot: () => !0
        }),
        ed = {
            current: void 0
        },
        ep = tQ({
            measureScroll: t => ({
                x: t.scrollLeft,
                y: t.scrollTop
            }),
            defaultParent: () => {
                if (!ed.current) {
                    let t = new em({});
                    t.mount(window), t.setOptions({
                        layoutScroll: !0
                    }), ed.current = t
                }
                return ed.current
            },
            resetTransform: (t, e) => {
                t.style.transform = void 0 !== e ? e : "none"
            },
            checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
        }),
        eg = {
            pan: {
                Feature: X
            },
            drag: {
                Feature: z,
                ProjectionNode: ep,
                MeasureLayout: ta
            }
        };
    t.s(["drag", () => eg], 77851);
    let ef = {
        layout: {
            ProjectionNode: ep,
            MeasureLayout: ta
        }
    };
    t.s(["layout", () => ef], 592877)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3e567635-948b-5164-9763-10b5e62894db")
    } catch (e) {}
}();
//# debugId=3e567635-948b-5164-9763-10b5e62894db