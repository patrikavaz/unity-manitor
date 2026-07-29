(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 963864, t => {
    "use strict";
    let e = (0, t.i(499531).createContext)({});
    t.s(["LayoutGroupContext", 0, e])
}, 766438, t => {
    "use strict";
    var e = t.i(140926);
    t.s(["resolveMotionValue", 0, function(t) {
        return (0, e.isMotionValue)(t) ? t.get() : t
    }])
}, 820847, t => {
    "use strict";
    let e = (0, t.i(499531).createContext)(null);
    t.s(["PresenceContext", 0, e])
}, 210907, t => {
    "use strict";
    let e = (0, t.i(499531).createContext)({});
    t.s(["SwitchLayoutGroupContext", 0, e])
}, 112366, t => {
    "use strict";
    t.s(["isRefObject", 0, function(t) {
        return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
    }])
}, 907178, 888702, 739204, t => {
    "use strict";
    t.s(["eachAxis", 0, function(t) {
        return [t("x"), t("y")]
    }], 907178);
    var e = t.i(628453);
    t.s(["setDragLock", 0, function(t) {
        if ("x" === t || "y" === t)
            if (e.isDragging[t]) return null;
            else return e.isDragging[t] = !0, () => {
                e.isDragging[t] = !1
            };
        return e.isDragging.x || e.isDragging.y ? null : (e.isDragging.x = e.isDragging.y = !0, () => {
            e.isDragging.x = e.isDragging.y = !1
        })
    }], 888702);
    var i = t.i(327745);

    function s(t) {
        return t.max - t.min
    }

    function o(t, e, n, r = .5) {
        t.origin = r, t.originPoint = (0, i.mixNumber)(e.min, e.max, t.origin), t.scale = s(n) / s(e), t.translate = (0, i.mixNumber)(n.min, n.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
    }

    function n(t, e, o, r = 0) {
        t.min = (r ? (0, i.mixNumber)(o.min, o.max, r) : o.min) + e.min, t.max = t.min + s(e)
    }

    function r(t, e, o, n = 0) {
        let a = n ? (0, i.mixNumber)(o.min, o.max, n) : o.min;
        t.min = e.min - a, t.max = t.min + s(e)
    }
    t.s(["calcBoxDelta", 0, function(t, e, i, s) {
        o(t.x, e.x, i.x, s ? s.originX : void 0), o(t.y, e.y, i.y, s ? s.originY : void 0)
    }, "calcLength", 0, s, "calcRelativeBox", 0, function(t, e, i, s) {
        n(t.x, e.x, i.x, s?.x), n(t.y, e.y, i.y, s?.y)
    }, "calcRelativePosition", 0, function(t, e, i, s) {
        r(t.x, e.x, i.x, s?.x), r(t.y, e.y, i.y, s?.y)
    }, "isNear", 0, function(t, e, i) {
        return Math.abs(t - e) <= i
    }], 739204)
}, 270736, 256650, t => {
    "use strict";
    let e, i;
    var s = t.i(825465);

    function o(t) {
        return (0, s.isObject)(t) && "ownerSVGElement" in t
    }
    t.s(["isSVGElement", 0, o], 256650);
    var n = t.i(513038);
    let r = new WeakMap,
        a = (t, e, i) => (s, n) => n && n[0] ? n[0][t + "Size"] : o(s) && "getBBox" in s ? s.getBBox()[e] : s[i],
        l = a("inline", "width", "offsetWidth"),
        h = a("block", "height", "offsetHeight");

    function u({
        target: t,
        borderBoxSize: e
    }) {
        r.get(t)?.forEach(i => {
            i(t, {
                get width() {
                    return l(t, e)
                },
                get height() {
                    return h(t, e)
                }
            })
        })
    }

    function c(t) {
        t.forEach(u)
    }
    let d = new Set;
    t.s(["resize", 0, function(t, s) {
        let o;
        return "function" == typeof t ? (d.add(t), i || (i = () => {
            let t = {
                get width() {
                    return window.innerWidth
                },
                get height() {
                    return window.innerHeight
                }
            };
            d.forEach(e => e(t))
        }, window.addEventListener("resize", i)), () => {
            d.delete(t), d.size || "function" != typeof i || (window.removeEventListener("resize", i), i = void 0)
        }) : (!e && "u" > typeof ResizeObserver && (e = new ResizeObserver(c)), (o = (0, n.resolveElements)(t)).forEach(t => {
            let i = r.get(t);
            i || (i = new Set, r.set(t, i)), i.add(s), e?.observe(t)
        }), () => {
            o.forEach(t => {
                let i = r.get(t);
                i?.delete(s), i?.size || e?.unobserve(t)
            })
        })
    }], 270736)
}, 122653, 669048, t => {
    "use strict";
    var e = t.i(342288),
        i = t.i(201110);
    t.s(["addPointerEvent", 0, function(t, s, o, n) {
        return (0, e.addDomEvent)(t, s, (0, i.addPointerInfo)(o), n)
    }], 122653), t.s(["getContextWindow", 0, ({
        current: t
    }) => t ? t.ownerDocument.defaultView : null], 669048)
}, 866699, 839432, 676374, t => {
    "use strict";
    var e = t.i(792075),
        i = t.i(120194),
        s = t.i(301219),
        o = t.i(672357),
        n = t.i(907178),
        r = t.i(123457),
        a = t.i(627722),
        l = t.i(707051),
        h = t.i(899565),
        u = t.i(327745),
        c = t.i(342288),
        d = t.i(888702),
        m = t.i(561497),
        p = t.i(739204),
        g = t.i(270736),
        f = t.i(674153),
        y = t.i(725542),
        v = t.i(122653),
        x = t.i(201110),
        P = t.i(669048),
        D = t.i(112366),
        T = t.i(914712),
        E = t.i(815645),
        S = t.i(633836);
    let w = (t, e) => Math.abs(t - e),
        B = new Set(["auto", "scroll"]);
    class A {
        constructor(t, e, {
            transformPagePoint: i,
            contextWindow: s = window,
            dragSnapToOrigin: n = !1,
            distanceThreshold: r = 3,
            element: a
        } = {}) {
            if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map, this.removeScrollListeners = null, this.onElementScroll = t => {
                    this.handleScroll(t.target)
                }, this.onWindowScroll = () => {
                    this.handleScroll(window)
                }, this.updatePoint = () => {
                    var t, e;
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                    this.lastRawMoveEventInfo && (this.lastMoveEventInfo = L(this.lastRawMoveEventInfo, this.transformPagePoint));
                    let i = j(this.lastMoveEventInfo, this.history),
                        s = null !== this.startEvent,
                        n = (t = i.offset, e = {
                            x: 0,
                            y: 0
                        }, Math.sqrt(w(t.x, e.x) ** 2 + w(t.y, e.y) ** 2) >= this.distanceThreshold);
                    if (!s && !n) return;
                    let {
                        point: r
                    } = i, {
                        timestamp: a
                    } = o.frameData;
                    this.history.push({
                        ...r,
                        timestamp: a
                    });
                    let {
                        onStart: l,
                        onMove: h
                    } = this.handlers;
                    s || (l && l(this.lastMoveEvent, i), this.startEvent = this.lastMoveEvent), h && h(this.lastMoveEvent, i)
                }, this.handlePointerMove = (t, e) => {
                    this.lastMoveEvent = t, this.lastRawMoveEventInfo = e, this.lastMoveEventInfo = L(e, this.transformPagePoint), o.frame.update(this.updatePoint, !0)
                }, this.handlePointerUp = (t, e) => {
                    this.end();
                    let {
                        onEnd: i,
                        onSessionEnd: s,
                        resumeAnimation: o
                    } = this.handlers;
                    if ((this.dragSnapToOrigin || !this.startEvent) && o && o(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                    let n = j("pointercancel" === t.type ? this.lastMoveEventInfo : L(e, this.transformPagePoint), this.history);
                    this.startEvent && i && i(t, n), s && s(t, n)
                }, !(0, T.isPrimaryPointer)(t)) return;
            this.dragSnapToOrigin = n, this.handlers = e, this.transformPagePoint = i, this.distanceThreshold = r, this.contextWindow = s || window;
            const l = L((0, x.extractEventInfo)(t), this.transformPagePoint),
                {
                    point: h
                } = l,
                {
                    timestamp: u
                } = o.frameData;
            this.history = [{
                ...h,
                timestamp: u
            }];
            const {
                onSessionStart: c
            } = e;
            c && c(t, j(l, this.history));
            const d = {
                passive: !0,
                capture: !0
            };
            this.removeListeners = (0, E.pipe)((0, v.addPointerEvent)(this.contextWindow, "pointermove", this.handlePointerMove, d), (0, v.addPointerEvent)(this.contextWindow, "pointerup", this.handlePointerUp, d), (0, v.addPointerEvent)(this.contextWindow, "pointercancel", this.handlePointerUp, d)), a && this.startScrollTracking(a)
        }
        startScrollTracking(t) {
            let e = t.parentElement;
            for (; e;) {
                let t = getComputedStyle(e);
                (B.has(t.overflowX) || B.has(t.overflowY)) && this.scrollPositions.set(e, {
                    x: e.scrollLeft,
                    y: e.scrollTop
                }), e = e.parentElement
            }
            this.scrollPositions.set(window, {
                x: window.scrollX,
                y: window.scrollY
            }), window.addEventListener("scroll", this.onElementScroll, {
                capture: !0
            }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
                window.removeEventListener("scroll", this.onElementScroll, {
                    capture: !0
                }), window.removeEventListener("scroll", this.onWindowScroll)
            }
        }
        handleScroll(t) {
            let e = this.scrollPositions.get(t);
            if (!e) return;
            let i = t === window,
                s = i ? {
                    x: window.scrollX,
                    y: window.scrollY
                } : {
                    x: t.scrollLeft,
                    y: t.scrollTop
                },
                n = {
                    x: s.x - e.x,
                    y: s.y - e.y
                };
            (0 !== n.x || 0 !== n.y) && (i ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += n.x, this.lastMoveEventInfo.point.y += n.y) : this.history.length > 0 && (this.history[0].x -= n.x, this.history[0].y -= n.y), this.scrollPositions.set(t, s), o.frame.update(this.updatePoint, !0))
        }
        updateHandlers(t) {
            this.handlers = t
        }
        end() {
            this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), (0, o.cancelFrame)(this.updatePoint)
        }
    }

    function L(t, e) {
        return e ? {
            point: e(t.point)
        } : t
    }

    function R(t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    }

    function j({
        point: t
    }, e) {
        return {
            point: t,
            delta: R(t, V(e)),
            offset: R(t, e[0]),
            velocity: function(t) {
                if (t.length < 2) return {
                    x: 0,
                    y: 0
                };
                let e = t.length - 1,
                    i = null,
                    s = V(t);
                for (; e >= 0 && (i = t[e], !(s.timestamp - i.timestamp > (0, S.secondsToMilliseconds)(.1)));) e--;
                if (!i) return {
                    x: 0,
                    y: 0
                };
                i === t[0] && t.length > 2 && s.timestamp - i.timestamp > 2 * (0, S.secondsToMilliseconds)(.1) && (i = t[1]);
                let o = (0, S.millisecondsToSeconds)(s.timestamp - i.timestamp);
                if (0 === o) return {
                    x: 0,
                    y: 0
                };
                let n = {
                    x: (s.x - i.x) / o,
                    y: (s.y - i.y) / o
                };
                return n.x === 1 / 0 && (n.x = 0), n.y === 1 / 0 && (n.y = 0), n
            }(e)
        }
    }

    function V(t) {
        return t[t.length - 1]
    }
    var M = t.i(470934),
        C = t.i(508983);

    function b(t, e, i) {
        return {
            min: void 0 !== e ? t.min + e : void 0,
            max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
        }
    }

    function k(t, e) {
        let i = e.min - t.min,
            s = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([i, s] = [s, i]), {
            min: i,
            max: s
        }
    }

    function U(t, e, i) {
        return {
            min: I(t, e),
            max: I(t, i)
        }
    }

    function I(t, e) {
        return "number" == typeof t ? t : t[e] || 0
    }
    let O = new WeakMap;
    class F {
        constructor(t) {
            this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                x: 0,
                y: 0
            }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = (0, s.createBox)(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t
        }
        start(t, {
            snapToCursor: e = !1,
            distanceThreshold: i
        } = {}) {
            let {
                presenceContext: s
            } = this.visualElement;
            if (s && !1 === s.isPresent) return;
            let r = t => {
                    e && this.snapToCursor((0, x.extractEventInfo)(t).point), this.stopAnimation()
                },
                a = (t, e) => {
                    let {
                        drag: i,
                        dragPropagation: s,
                        onDragStart: r
                    } = this.getProps();
                    if (i && !s && (this.openDragLock && this.openDragLock(), this.openDragLock = (0, d.setDragLock)(i), !this.openDragLock)) return;
                    this.latestPointerEvent = t, this.latestPanInfo = e, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), (0, n.eachAxis)(t => {
                        let e = this.getAxisMotionValue(t).get() || 0;
                        if (m.percent.test(e)) {
                            let {
                                projection: i
                            } = this.visualElement;
                            if (i && i.layout) {
                                let s = i.layout.layoutBox[t];
                                s && (e = (0, p.calcLength)(s) * (parseFloat(e) / 100))
                            }
                        }
                        this.originPoint[t] = e
                    }), r && o.frame.update(() => r(t, e), !1, !0), (0, l.addValueToWillChange)(this.visualElement, "transform");
                    let {
                        animationState: a
                    } = this.visualElement;
                    a && a.setActive("whileDrag", !0)
                },
                h = (t, e) => {
                    this.latestPointerEvent = t, this.latestPanInfo = e;
                    let {
                        dragPropagation: i,
                        dragDirectionLock: s,
                        onDirectionLock: n,
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
                        }(a), null !== this.currentDirection && n && n(this.currentDirection);
                        return
                    }
                    this.updateAxis("x", e.point, a), this.updateAxis("y", e.point, a), this.visualElement.render(), r && o.frame.update(() => r(t, e), !1, !0)
                },
                u = (t, e) => {
                    this.latestPointerEvent = t, this.latestPanInfo = e, this.stop(t, e), this.latestPointerEvent = null, this.latestPanInfo = null
                },
                c = () => {
                    let {
                        dragSnapToOrigin: t
                    } = this.getProps();
                    (t || this.constraints) && this.startAnimation({
                        x: 0,
                        y: 0
                    })
                },
                {
                    dragSnapToOrigin: g
                } = this.getProps();
            this.panSession = new A(t, {
                onSessionStart: r,
                onStart: a,
                onMove: h,
                onSessionEnd: u,
                resumeAnimation: c
            }, {
                transformPagePoint: this.visualElement.getTransformPagePoint(),
                dragSnapToOrigin: g,
                distanceThreshold: i,
                contextWindow: (0, P.getContextWindow)(this.visualElement),
                element: this.visualElement.current
            })
        }
        stop(t, e) {
            let i = t || this.latestPointerEvent,
                s = e || this.latestPanInfo,
                n = this.isDragging;
            if (this.cancel(), !n || !s || !i) return;
            let {
                velocity: r
            } = s;
            this.startAnimation(r);
            let {
                onDragEnd: a
            } = this.getProps();
            a && o.frame.postRender(() => a(i, s))
        }
        cancel() {
            this.isDragging = !1;
            let {
                projection: t,
                animationState: e
            } = this.visualElement;
            t && (t.isAnimationBlocked = !1), this.endPanSession();
            let {
                dragPropagation: i
            } = this.getProps();
            !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e && e.setActive("whileDrag", !1)
        }
        endPanSession() {
            this.panSession && this.panSession.end(), this.panSession = void 0
        }
        updateAxis(t, e, i) {
            let {
                drag: s
            } = this.getProps();
            if (!i || !W(t, s, this.currentDirection)) return;
            let o = this.getAxisMotionValue(t),
                n = this.originPoint[t] + i[t];
            this.constraints && this.constraints[t] && (n = function(t, {
                min: e,
                max: i
            }, s) {
                return void 0 !== e && t < e ? t = s ? (0, u.mixNumber)(e, t, s.min) : Math.max(t, e) : void 0 !== i && t > i && (t = s ? (0, u.mixNumber)(i, t, s.max) : Math.min(t, i)), t
            }(n, this.constraints[t], this.elastic[t])), o.set(n)
        }
        resolveConstraints() {
            let {
                dragConstraints: t,
                dragElastic: e
            } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, s = this.constraints;
            t && (0, D.isRefObject)(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && i ? this.constraints = function(t, {
                top: e,
                left: i,
                bottom: s,
                right: o
            }) {
                return {
                    x: b(t.x, i, o),
                    y: b(t.y, e, s)
                }
            }(i.layoutBox, t) : this.constraints = !1, this.elastic = function(t = .35) {
                return !1 === t ? t = 0 : !0 === t && (t = .35), {
                    x: U(t, "left", "right"),
                    y: U(t, "top", "bottom")
                }
            }(e), s !== this.constraints && !(0, D.isRefObject)(t) && i && this.constraints && !this.hasMutatedConstraints && (0, n.eachAxis)(t => {
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
            if (!e || !(0, D.isRefObject)(e)) return !1;
            let s = e.current;
            (0, y.invariant)(null !== s, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
            let {
                projection: o
            } = this.visualElement;
            if (!o || !o.layout) return !1;
            o.root && (o.root.scroll = void 0, o.root.updateScroll());
            let n = (0, r.measurePageBox)(s, o.root, this.visualElement.getTransformPagePoint()),
                l = (t = o.layout.layoutBox, {
                    x: k(t.x, n.x),
                    y: k(t.y, n.y)
                });
            if (i) {
                let t = i((0, a.convertBoxToBoundingBox)(l));
                this.hasMutatedConstraints = !!t, t && (l = (0, a.convertBoundingBoxToBox)(t))
            }
            return l
        }
        startAnimation(t) {
            let {
                drag: e,
                dragMomentum: i,
                dragElastic: s,
                dragTransition: o,
                dragSnapToOrigin: r,
                onDragTransitionEnd: a
            } = this.getProps(), l = this.constraints || {};
            return Promise.all((0, n.eachAxis)(n => {
                if (!W(n, e, this.currentDirection)) return;
                let a = l && l[n] || {};
                (!0 === r || r === n) && (a = {
                    min: 0,
                    max: 0
                });
                let h = {
                    type: "inertia",
                    velocity: i ? t[n] : 0,
                    bounceStiffness: s ? 200 : 1e6,
                    bounceDamping: s ? 40 : 1e7,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...o,
                    ...a
                };
                return this.startAxisValueAnimation(n, h)
            })).then(a)
        }
        startAxisValueAnimation(t, e) {
            let i = this.getAxisMotionValue(t);
            return (0, l.addValueToWillChange)(this.visualElement, t), i.start((0, h.animateMotionValue)(t, i, 0, e, this.visualElement, !1))
        }
        stopAnimation() {
            (0, n.eachAxis)(t => this.getAxisMotionValue(t).stop())
        }
        getAxisMotionValue(t) {
            let e = `_drag${t.toUpperCase()}`;
            return this.visualElement.getProps()[e] || this.visualElement.getValue(t, this.visualElement.latestValues[t] ?? 0)
        }
        snapToCursor(t) {
            (0, n.eachAxis)(e => {
                let {
                    drag: i
                } = this.getProps();
                if (!W(e, i, this.currentDirection)) return;
                let {
                    projection: s
                } = this.visualElement, o = this.getAxisMotionValue(e);
                if (s && s.layout) {
                    let {
                        min: i,
                        max: n
                    } = s.layout.layoutBox[e], r = o.get() || 0;
                    o.set(t[e] - (0, u.mixNumber)(i, n, .5) + r)
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
            if (!(0, D.isRefObject)(e) || !i || !this.constraints) return;
            this.stopAnimation();
            let s = {
                x: 0,
                y: 0
            };
            (0, n.eachAxis)(t => {
                let e = this.getAxisMotionValue(t);
                if (e && !1 !== this.constraints) {
                    var i, o;
                    let n, r, a, l = e.get();
                    s[t] = (i = {
                        min: l,
                        max: l
                    }, o = this.constraints[t], n = .5, r = (0, p.calcLength)(i), (a = (0, p.calcLength)(o)) > r ? n = (0, M.progress)(o.min, o.max - r, i.min) : r > a && (n = (0, M.progress)(i.min, i.max - a, o.min)), (0, C.clamp)(0, 1, n))
                }
            });
            let {
                transformTemplate: o
            } = this.visualElement.getProps();
            this.visualElement.current.style.transform = o ? o({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.constraints = !1, this.resolveConstraints(), (0, n.eachAxis)(e => {
                if (!W(e, t, null)) return;
                let i = this.getAxisMotionValue(e),
                    {
                        min: o,
                        max: n
                    } = this.constraints[e];
                i.set((0, u.mixNumber)(o, n, s[e]))
            }), this.visualElement.render()
        }
        addListeners() {
            let t;
            if (!this.visualElement.current) return;
            O.set(this.visualElement, this);
            let e = this.visualElement.current,
                i = (0, v.addPointerEvent)(e, "pointerdown", t => {
                    let {
                        drag: i,
                        dragListener: s = !0
                    } = this.getProps(), o = t.target, n = o !== e && (0, f.isElementTextInput)(o);
                    i && s && !n && this.start(t)
                }),
                s = () => {
                    var i, s, o;
                    let n, r, {
                        dragConstraints: a
                    } = this.getProps();
                    (0, D.isRefObject)(a) && a.current && (this.constraints = this.resolveRefConstraints(), t || (i = e, s = a.current, o = () => this.scalePositionWithinConstraints(), n = (0, g.resize)(i, N(o)), r = (0, g.resize)(s, N(o)), t = () => {
                        n(), r()
                    }))
                },
                {
                    projection: r
                } = this.visualElement,
                a = r.addEventListener("measure", s);
            r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), o.frame.read(s);
            let l = (0, c.addDomEvent)(window, "resize", () => this.scalePositionWithinConstraints()),
                h = r.addEventListener("didUpdate", ({
                    delta: t,
                    hasLayoutChanged: e
                }) => {
                    this.isDragging && e && ((0, n.eachAxis)(e => {
                        let i = this.getAxisMotionValue(e);
                        i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                    }), this.visualElement.render())
                });
            return () => {
                l(), i(), a(), h && h(), t && t()
            }
        }
        getProps() {
            let t = this.visualElement.getProps(),
                {
                    drag: e = !1,
                    dragDirectionLock: i = !1,
                    dragPropagation: s = !1,
                    dragConstraints: o = !1,
                    dragElastic: n = .35,
                    dragMomentum: r = !0
                } = t;
            return {
                ...t,
                drag: e,
                dragDirectionLock: i,
                dragPropagation: s,
                dragConstraints: o,
                dragElastic: n,
                dragMomentum: r
            }
        }
    }

    function N(t) {
        let e = !0;
        return () => {
            if (e) {
                e = !1;
                return
            }
            t()
        }
    }

    function W(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t)
    }
    class z extends e.Feature {
        constructor(t) {
            super(t), this.removeGroupControls = i.noop, this.removeListeners = i.noop, this.controls = new F(t)
        }
        mount() {
            let {
                dragControls: t
            } = this.node.getProps();
            t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || i.noop
        }
        update() {
            let {
                dragControls: t
            } = this.node.getProps(), {
                dragControls: e
            } = this.node.prevProps || {};
            t !== e && (this.removeGroupControls(), t && (this.removeGroupControls = t.subscribe(this.controls)))
        }
        unmount() {
            this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession()
        }
    }
    t.s(["DragGesture", 0, z], 866699);
    var G = e;
    let $ = t => (e, i) => {
        t && o.frame.update(() => t(e, i), !1, !0)
    };
    class H extends G.Feature {
        constructor() {
            super(...arguments), this.removePointerDownListener = i.noop
        }
        onPointerDown(t) {
            this.session = new A(t, this.createPanHandlers(), {
                transformPagePoint: this.node.getTransformPagePoint(),
                contextWindow: (0, P.getContextWindow)(this.node)
            })
        }
        createPanHandlers() {
            let {
                onPanSessionStart: t,
                onPanStart: e,
                onPan: i,
                onPanEnd: s
            } = this.node.getProps();
            return {
                onSessionStart: $(t),
                onStart: $(e),
                onMove: $(i),
                onEnd: (t, e) => {
                    delete this.session, s && o.frame.postRender(() => s(t, e))
                }
            }
        }
        mount() {
            this.removePointerDownListener = (0, v.addPointerEvent)(this.node.current, "pointerdown", t => this.onPointerDown(t))
        }
        update() {
            this.session && this.session.updateHandlers(this.createPanHandlers())
        }
        unmount() {
            this.removePointerDownListener(), this.session && this.session.end()
        }
    }
    t.s(["PanGesture", 0, H], 839432), t.s(["globalProjectionState", 0, {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    }], 676374)
}, 25616, t => {
    "use strict";
    var e = t.i(499531),
        i = t.i(820847);
    t.s(["usePresence", 0, function(t = !0) {
        let s = (0, e.useContext)(i.PresenceContext);
        if (null === s) return [!0, null];
        let {
            isPresent: o,
            onExitComplete: n,
            register: r
        } = s, a = (0, e.useId)();
        (0, e.useEffect)(() => {
            if (t) return r(a)
        }, [t]);
        let l = (0, e.useCallback)(() => t && n && n(a), [a, n, t]);
        return !o && n ? [!1, l] : [!0]
    }])
}, 161734, 754497, 252059, 567565, 570615, t => {
    "use strict";
    var e = t.i(14666),
        i = t.i(676374),
        s = t.i(672357),
        o = t.i(328744),
        n = t.i(499531),
        r = t.i(25616),
        a = t.i(963864),
        l = t.i(210907);
    let h = !1;
    class u extends n.Component {
        componentDidMount() {
            let {
                visualElement: t,
                layoutGroup: e,
                switchLayoutGroup: s,
                layoutId: o
            } = this.props, {
                projection: n
            } = t;
            n && (e.group && e.group.add(n), s && s.register && o && s.register(n), h && n.root.didUpdate(), n.addEventListener("animationComplete", () => {
                this.safeToRemove()
            }), n.setOptions({
                ...n.options,
                layoutDependency: this.props.layoutDependency,
                onExitComplete: () => this.safeToRemove()
            })), i.globalProjectionState.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(t) {
            let {
                layoutDependency: e,
                visualElement: i,
                drag: o,
                isPresent: n
            } = this.props, {
                projection: r
            } = i;
            return r && (r.isPresent = n, t.layoutDependency !== e && r.setOptions({
                ...r.options,
                layoutDependency: e
            }), h = !0, o || t.layoutDependency !== e || void 0 === e || t.isPresent !== n ? r.willUpdate() : this.safeToRemove(), t.isPresent !== n && (n ? r.promote() : r.relegate() || s.frame.postRender(() => {
                let t = r.getStack();
                t && t.members.length || this.safeToRemove()
            }))), null
        }
        componentDidUpdate() {
            let {
                visualElement: t,
                layoutAnchor: e
            } = this.props, {
                projection: i
            } = t;
            i && (i.options.layoutAnchor = e, i.root.didUpdate(), o.microtask.postRender(() => {
                !i.currentAnimation && i.isLead() && this.safeToRemove()
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
            h = !0, s && (s.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(s), i && i.deregister && i.deregister(s))
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
    t.s(["MeasureLayout", 0, function(t) {
        let [i, s] = (0, r.usePresence)(), o = (0, n.useContext)(a.LayoutGroupContext);
        return (0, e.jsx)(u, {
            ...t,
            layoutGroup: o,
            switchLayoutGroup: (0, n.useContext)(l.SwitchLayoutGroupContext),
            isPresent: i,
            safeToRemove: s
        })
    }], 161734);
    var c = t.i(899565),
        d = t.i(706221),
        m = t.i(140926);
    t.s(["animateSingleValue", 0, function(t, e, i) {
        let s = (0, m.isMotionValue)(t) ? t : (0, d.motionValue)(t);
        return s.start((0, c.animateMotionValue)("", s, e, i)), s.animation
    }], 754497), t.s(["statsBuffer", 0, {
        value: null,
        addProjectionMetrics: null
    }], 252059);
    var p = t.i(655408);
    t.i(633836), t.s(["delay", 0, function(t, e) {
        let i = p.time.now(),
            o = ({
                timestamp: n
            }) => {
                let r = n - i;
                r >= e && ((0, s.cancelFrame)(o), t(r - e))
            };
        return s.frame.setup(o, !0), () => (0, s.cancelFrame)(o)
    }], 567565);
    var g = t.i(256650);
    t.s(["isSVGSVGElement", 0, function(t) {
        return (0, g.isSVGElement)(t) && "svg" === t.tagName
    }], 570615)
}, 948395, 596995, t => {
    "use strict";
    var e = t.i(866699),
        i = t.i(839432),
        s = t.i(161734),
        o = t.i(810246),
        n = t.i(508983),
        r = t.i(120194),
        a = t.i(754497),
        l = t.i(576243),
        h = t.i(989445),
        u = t.i(328744),
        c = t.i(655408),
        d = t.i(4075),
        m = t.i(252059),
        p = t.i(567565),
        g = t.i(256650),
        f = t.i(570615),
        y = t.i(327745),
        v = t.i(706221),
        x = t.i(766438),
        P = t.i(561497),
        D = t.i(470934),
        T = t.i(509),
        E = t.i(58198);
    let S = E.cornerRadiusProps.length,
        w = t => "string" == typeof t ? parseFloat(t) : t,
        B = t => "number" == typeof t || P.px.test(t);

    function A(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius
    }
    let L = j(0, .5, T.circOut),
        R = j(.5, .95, r.noop);

    function j(t, e, i) {
        return s => s < t ? 0 : s > e ? 1 : i((0, D.progress)(t, e, s))
    }

    function V(t, e) {
        t.min = e.min, t.max = e.max
    }

    function M(t, e) {
        V(t.x, e.x), V(t.y, e.y)
    }

    function C(t, e) {
        t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
    }
    var b = t.i(987826),
        k = t.i(739204);

    function U(t, e, i, s, o) {
        return t -= e, t = (0, b.scalePoint)(t, 1 / i, s), void 0 !== o && (t = (0, b.scalePoint)(t, 1 / o, s)), t
    }

    function I(t, e, [i, s, o], n, r) {
        ! function(t, e = 0, i = 1, s = .5, o, n = t, r = t) {
            if (P.percent.test(e) && (e = parseFloat(e), e = (0, y.mixNumber)(r.min, r.max, e / 100) - r.min), "number" != typeof e) return;
            let a = (0, y.mixNumber)(n.min, n.max, s);
            t === n && (a -= e), t.min = U(t.min, e, i, a, o), t.max = U(t.max, e, i, a, o)
        }(t, e[i], e[s], e[o], e.scale, n, r)
    }
    let O = ["x", "scaleX", "originX"],
        F = ["y", "scaleY", "originY"];

    function N(t, e, i, s) {
        I(t.x, e, O, i ? i.x : void 0, s ? s.x : void 0), I(t.y, e, F, i ? i.y : void 0, s ? s.y : void 0)
    }
    var W = t.i(301219);

    function z(t) {
        return 0 === t.translate && 1 === t.scale
    }

    function G(t) {
        return z(t.x) && z(t.y)
    }

    function $(t, e) {
        return t.min === e.min && t.max === e.max
    }

    function H(t, e) {
        return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
    }

    function X(t, e) {
        return H(t.x, e.x) && H(t.y, e.y)
    }

    function Y(t) {
        return (0, k.calcLength)(t.x) / (0, k.calcLength)(t.y)
    }

    function q(t, e) {
        return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
    }
    var K = t.i(926935);
    class Z {
        constructor() {
            this.members = []
        }
        add(t) {
            (0, K.addUniqueItem)(this.members, t);
            for (let e = this.members.length - 1; e >= 0; e--) {
                let i = this.members[e];
                if (i === t || i === this.lead || i === this.prevLead) continue;
                let s = i.instance;
                s && !1 !== s.isConnected || i.snapshot || ((0, K.removeItem)(this.members, i), i.unmount())
            }
            t.scheduleRender()
        }
        remove(t) {
            if ((0, K.removeItem)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                let t = this.members[this.members.length - 1];
                t && this.promote(t)
            }
        }
        relegate(t) {
            for (let e = this.members.indexOf(t) - 1; e >= 0; e--) {
                let t = this.members[e];
                if (!1 !== t.isPresent && t.instance?.isConnected !== !1) return this.promote(t), !0
            }
            return !1
        }
        promote(t, e) {
            let i = this.lead;
            if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                i.updateSnapshot(), t.scheduleRender();
                let {
                    layoutDependency: s
                } = i.options, {
                    layoutDependency: o
                } = t.options;
                (void 0 === s || s !== o) && (t.resumeFrom = i, e && (i.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root?.isUpdating && (t.isLayoutDirty = !0)), !1 === t.options.crossfade && i.hide()
            }
        }
        exitAnimationComplete() {
            this.members.forEach(t => {
                t.options.onExitComplete?.(), t.resumingFrom?.options.onExitComplete?.()
            })
        }
        scheduleRender() {
            this.members.forEach(t => t.instance && t.scheduleRender(!1))
        }
        removeLeadSnapshot() {
            this.lead?.snapshot && (this.lead.snapshot = void 0)
        }
    }
    var _ = t.i(907178);
    let J = (t, e) => t.depth - e.depth;
    class Q {
        constructor() {
            this.children = [], this.isDirty = !1
        }
        add(t) {
            (0, K.addUniqueItem)(this.children, t), this.isDirty = !0
        }
        remove(t) {
            (0, K.removeItem)(this.children, t), this.isDirty = !0
        }
        forEach(t) {
            this.isDirty && this.children.sort(J), this.isDirty = !1, this.children.forEach(t)
        }
    }
    var tt = t.i(414449),
        te = t.i(676374),
        ti = t.i(672357);
    let ts = {
            nodes: 0,
            calculatedTargetDeltas: 0,
            calculatedProjections: 0
        },
        to = ["", "X", "Y", "Z"],
        tn = 0;

    function tr(t, e, i, s) {
        let {
            latestValues: o
        } = e;
        o[t] && (i[t] = o[t], e.setStaticValue(t, 0), s && (s[t] = 0))
    }

    function ta({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: s,
        resetTransform: r
    }) {
        return class {
            constructor(t = {}, i = e?.()) {
                this.id = tn++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                    x: 1,
                    y: 1
                }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                    this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                }, this.updateProjection = () => {
                    this.projectionUpdateScheduled = !1, m.statsBuffer.value && (ts.nodes = ts.calculatedTargetDeltas = ts.calculatedProjections = 0), this.nodes.forEach(tu), this.nodes.forEach(tx), this.nodes.forEach(tP), this.nodes.forEach(tc), m.statsBuffer.addProjectionMetrics && m.statsBuffer.addProjectionMetrics(ts)
                }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
                for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                this.root === this && (this.nodes = new Q)
            }
            addEventListener(t, e) {
                return this.eventHandlers.has(t) || this.eventHandlers.set(t, new o.SubscriptionManager), this.eventHandlers.get(t).add(e)
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
                this.isSVG = (0, g.isSVGElement)(e) && !(0, f.isSVGSVGElement)(e), this.instance = e;
                let {
                    layoutId: i,
                    layout: s,
                    visualElement: o
                } = this.options;
                if (o && !o.current && o.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (s || i) && (this.isLayoutDirty = !0), t) {
                    let i, s = 0,
                        o = () => this.root.updateBlockedByResize = !1;
                    ti.frame.read(() => {
                        s = window.innerWidth
                    }), t(e, () => {
                        let t = window.innerWidth;
                        t !== s && (s = t, this.root.updateBlockedByResize = !0, i && i(), i = (0, p.delay)(o, 250), te.globalProjectionState.hasAnimatedSinceResize && (te.globalProjectionState.hasAnimatedSinceResize = !1, this.nodes.forEach(tv)))
                    })
                }
                i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && o && (i || s) && this.addEventListener("didUpdate", ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeLayoutChanged: i,
                    layout: s
                }) => {
                    if (this.isTreeAnimationBlocked()) {
                        this.target = void 0, this.relativeTarget = void 0;
                        return
                    }
                    let n = this.options.transition || o.getDefaultTransition() || tB,
                        {
                            onLayoutAnimationStart: r,
                            onLayoutAnimationComplete: a
                        } = o.getProps(),
                        l = !this.targetLayout || !X(this.targetLayout, s),
                        u = !e && i;
                    if (this.options.layoutRoot || this.resumeFrom || u || e && (l || !this.currentAnimation)) {
                        this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                        let e = {
                            ...(0, h.getValueTransition)(n, "layout"),
                            onPlay: r,
                            onComplete: a
                        };
                        (o.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e), this.setAnimationOrigin(t, u, e.path)
                    } else e || tv(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                    this.targetLayout = s
                })
            }
            unmount() {
                this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                let t = this.getStack();
                t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), (0, ti.cancelFrame)(this.updateProjection)
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
                !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(tD), this.animationId++)
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
                        let s = (0, l.getOptimisedAppearId)(i);
                        if (window.MotionHasOptimisedAnimation(s, "transform")) {
                            let {
                                layout: t,
                                layoutId: i
                            } = e.options;
                            window.MotionCancelOptimisedAnimation(s, "transform", ti.frame, !(t || i))
                        }
                        let {
                            parent: o
                        } = e;
                        o && !o.hasCheckedOptimisedAppear && t(o)
                    }(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                this.isLayoutDirty = !0;
                for (let t = 0; t < this.path.length; t++) {
                    let e = this.path[t];
                    e.shouldResetTransform = !0, ("string" == typeof e.latestValues.x || "string" == typeof e.latestValues.y) && (e.isLayoutDirty = !0), e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                }
                let {
                    layoutId: e,
                    layout: i
                } = this.options;
                if (void 0 === e && !i) return;
                let s = this.getTransformTemplate();
                this.prevTransformTemplateValue = s ? s(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
            }
            update() {
                if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                    let t = this.updateBlockedByResize;
                    this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), t && this.nodes.forEach(tp), this.nodes.forEach(tm);
                    return
                }
                if (this.animationId <= this.animationCommitId) return void this.nodes.forEach(tg);
                this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(tf), this.nodes.forEach(ty), this.nodes.forEach(tl), this.nodes.forEach(th)) : this.nodes.forEach(tg), this.clearAllSnapshots();
                let t = c.time.now();
                ti.frameData.delta = (0, n.clamp)(0, 1e3 / 60, t - ti.frameData.timestamp), ti.frameData.timestamp = t, ti.frameData.isProcessing = !0, ti.frameSteps.update.process(ti.frameData), ti.frameSteps.preRender.process(ti.frameData), ti.frameSteps.render.process(ti.frameData), ti.frameData.isProcessing = !1
            }
            didUpdate() {
                this.updateScheduled || (this.updateScheduled = !0, u.microtask.read(this.scheduleUpdate))
            }
            clearAllSnapshots() {
                this.nodes.forEach(td), this.sharedNodes.forEach(tT)
            }
            scheduleUpdateProjection() {
                this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, ti.frame.preRender(this.updateProjection, !1, !0))
            }
            scheduleCheckAfterUnmount() {
                ti.frame.postRender(() => {
                    this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                })
            }
            updateSnapshot() {
                !this.snapshot && this.instance && (this.snapshot = this.measure(), !this.snapshot || (0, k.calcLength)(this.snapshot.measuredBox.x) || (0, k.calcLength)(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
            }
            updateLayout() {
                if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                if (this.resumeFrom && !this.resumeFrom.instance)
                    for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
                let t = this.layout;
                this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = (0, W.createBox)()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                let {
                    visualElement: e
                } = this.options;
                e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
            }
            updateScroll(t = "measure") {
                let e = !!(this.options.layoutScroll && this.instance);
                if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && this.instance) {
                    let e = s(this.instance);
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
                if (!r) return;
                let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                    e = this.projectionDelta && !G(this.projectionDelta),
                    i = this.getTransformTemplate(),
                    s = i ? i(this.latestValues, "") : void 0,
                    o = s !== this.prevTransformTemplateValue;
                t && this.instance && (e || (0, tt.hasTransform)(this.latestValues) || o) && (r(this.instance, s), this.shouldResetTransform = !1, this.scheduleRender())
            }
            measure(t = !0) {
                var e;
                let i = this.measurePageBox(),
                    s = this.removeElementScroll(i);
                return t && (s = this.removeTransform(s)), tR((e = s).x), tR(e.y), {
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
                if (!t) return (0, W.createBox)();
                let e = t.measureViewportBox();
                if (!(this.scroll?.wasRoot || this.path.some(tV))) {
                    let {
                        scroll: t
                    } = this.root;
                    t && ((0, b.translateAxis)(e.x, t.offset.x), (0, b.translateAxis)(e.y, t.offset.y))
                }
                return e
            }
            removeElementScroll(t) {
                let e = (0, W.createBox)();
                if (M(e, t), this.scroll?.wasRoot) return e;
                for (let i = 0; i < this.path.length; i++) {
                    let s = this.path[i],
                        {
                            scroll: o,
                            options: n
                        } = s;
                    s !== this.root && o && n.layoutScroll && (o.wasRoot && M(e, t), (0, b.translateAxis)(e.x, o.offset.x), (0, b.translateAxis)(e.y, o.offset.y))
                }
                return e
            }
            applyTransform(t, e = !1, i) {
                let s = i || (0, W.createBox)();
                M(s, t);
                for (let t = 0; t < this.path.length; t++) {
                    let i = this.path[t];
                    !e && i.options.layoutScroll && i.scroll && i !== i.root && ((0, b.translateAxis)(s.x, -i.scroll.offset.x), (0, b.translateAxis)(s.y, -i.scroll.offset.y)), (0, tt.hasTransform)(i.latestValues) && (0, b.transformBox)(s, i.latestValues, i.layout?.layoutBox)
                }
                return (0, tt.hasTransform)(this.latestValues) && (0, b.transformBox)(s, this.latestValues, this.layout?.layoutBox), s
            }
            removeTransform(t) {
                let e = (0, W.createBox)();
                M(e, t);
                for (let t = 0; t < this.path.length; t++) {
                    let i, s = this.path[t];
                    (0, tt.hasTransform)(s.latestValues) && (s.instance && ((0, tt.hasScale)(s.latestValues) && s.updateSnapshot(), M(i = (0, W.createBox)(), s.measurePageBox())), N(e, s.latestValues, s.snapshot?.layoutBox, i))
                }
                return (0, tt.hasTransform)(this.latestValues) && N(e, this.latestValues), e
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
                this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ti.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
            }
            resolveTargetDelta(t = !1) {
                let e = this.getLead();
                this.isProjectionDirty || (this.isProjectionDirty = e.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = e.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = e.isSharedProjectionDirty);
                let i = !!this.resumingFrom || this !== e;
                if (!(t || i && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                let {
                    layout: s,
                    layoutId: o
                } = this.options;
                if (!this.layout || !(s || o)) return;
                this.resolvedRelativeTargetAt = ti.frameData.timestamp;
                let n = this.getClosestProjectingParent();
                n && this.linkedParentVersion !== n.layoutVersion && !n.options.layoutRoot && this.removeRelativeTarget(), this.targetDelta || this.relativeTarget || (!1 !== this.options.layoutAnchor && n && n.layout ? this.createRelativeTarget(n, this.layout.layoutBox, n.layout.layoutBox) : this.removeRelativeTarget()), (this.relativeTarget || this.targetDelta) && (this.target || (this.target = (0, W.createBox)(), this.targetWithTransforms = (0, W.createBox)()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), (0, k.calcRelativeBox)(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : M(this.target, this.layout.layoutBox), (0, b.applyBoxDelta)(this.target, this.targetDelta)) : M(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, !1 !== this.options.layoutAnchor && n && !!n.resumingFrom == !!this.resumingFrom && !n.options.layoutScroll && n.target && 1 !== this.animationProgress ? this.createRelativeTarget(n, this.target, n.target) : this.relativeParent = this.relativeTarget = void 0), m.statsBuffer.value && ts.calculatedTargetDeltas++)
            }
            getClosestProjectingParent() {
                if (!(!this.parent || (0, tt.hasScale)(this.parent.latestValues) || (0, tt.has2DTranslate)(this.parent.latestValues)))
                    if (this.parent.isProjecting()) return this.parent;
                    else return this.parent.getClosestProjectingParent()
            }
            isProjecting() {
                return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
            }
            createRelativeTarget(t, e, i) {
                this.relativeParent = t, this.linkedParentVersion = t.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, W.createBox)(), this.relativeTargetOrigin = (0, W.createBox)(), (0, k.calcRelativePosition)(this.relativeTargetOrigin, e, i, this.options.layoutAnchor || void 0), M(this.relativeTarget, this.relativeTargetOrigin)
            }
            removeRelativeTarget() {
                this.relativeParent = this.relativeTarget = void 0
            }
            calcProjection() {
                let t = this.getLead(),
                    e = !!this.resumingFrom || this !== t,
                    i = !0;
                if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (i = !1), e && (this.isSharedProjectionDirty || this.isTransformDirty) && (i = !1), this.resolvedRelativeTargetAt === ti.frameData.timestamp && (i = !1), i) return;
                let {
                    layout: s,
                    layoutId: o
                } = this.options;
                if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(s || o)) return;
                M(this.layoutCorrected, this.layout.layoutBox);
                let n = this.treeScale.x,
                    r = this.treeScale.y;
                (0, b.applyTreeDeltas)(this.layoutCorrected, this.treeScale, this.path, e), t.layout && !t.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (t.target = t.layout.layoutBox, t.targetWithTransforms = (0, W.createBox)());
                let {
                    target: a
                } = t;
                if (!a) {
                    this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                    return
                }
                this.projectionDelta && this.prevProjectionDelta ? (C(this.prevProjectionDelta.x, this.projectionDelta.x), C(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), (0, k.calcBoxDelta)(this.projectionDelta, this.layoutCorrected, a, this.latestValues), this.treeScale.x === n && this.treeScale.y === r && q(this.projectionDelta.x, this.prevProjectionDelta.x) && q(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", a)), m.statsBuffer.value && ts.calculatedProjections++
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
                this.prevProjectionDelta = (0, W.createDelta)(), this.projectionDelta = (0, W.createDelta)(), this.projectionDeltaWithTransform = (0, W.createDelta)()
            }
            setAnimationOrigin(t, e = !1, i) {
                let s, o = this.snapshot,
                    n = o ? o.latestValues : {},
                    r = {
                        ...this.latestValues
                    },
                    a = (0, W.createDelta)();
                this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                let l = (0, W.createBox)(),
                    h = (o ? o.source : void 0) !== (this.layout ? this.layout.source : void 0),
                    u = this.getStack(),
                    c = !u || u.members.length <= 1,
                    d = !!(h && !c && !0 === this.options.crossfade && !this.path.some(tw));
                this.animationProgress = 0;
                let m = i?.interpolateProjection(t);
                this.mixTargetDelta = e => {
                    let i = e / 1e3,
                        o = m?.(i);
                    if (o ? (a.x.translate = o.x, a.x.scale = (0, y.mixNumber)(t.x.scale, 1, i), a.x.origin = t.x.origin, a.x.originPoint = t.x.originPoint, a.y.translate = o.y, a.y.scale = (0, y.mixNumber)(t.y.scale, 1, i), a.y.origin = t.y.origin, a.y.originPoint = t.y.originPoint) : (tE(a.x, t.x, i), tE(a.y, t.y, i)), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                        var u, p, g, f, v, x;
                        (0, k.calcRelativePosition)(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), g = this.relativeTarget, f = this.relativeTargetOrigin, v = l, x = i, tS(g.x, f.x, v.x, x), tS(g.y, f.y, v.y, x), s && (u = this.relativeTarget, p = s, $(u.x, p.x) && $(u.y, p.y)) && (this.isProjectionDirty = !1), s || (s = (0, W.createBox)()), M(s, this.relativeTarget)
                    }
                    h && (this.animationValues = r, function(t, e, i, s, o, n) {
                        o ? (t.opacity = (0, y.mixNumber)(0, i.opacity ?? 1, L(s)), t.opacityExit = (0, y.mixNumber)(e.opacity ?? 1, 0, R(s))) : n && (t.opacity = (0, y.mixNumber)(e.opacity ?? 1, i.opacity ?? 1, s));
                        for (let o = 0; o < S; o++) {
                            let n = E.cornerRadiusProps[o],
                                r = A(e, n),
                                a = A(i, n);
                            (void 0 !== r || void 0 !== a) && (r || (r = 0), a || (a = 0), 0 === r || 0 === a || B(r) === B(a) ? (t[n] = Math.max((0, y.mixNumber)(w(r), w(a), s), 0), (P.percent.test(a) || P.percent.test(r)) && (t[n] += "%")) : t[n] = a)
                        }(e.rotate || i.rotate) && (t.rotate = (0, y.mixNumber)(e.rotate || 0, i.rotate || 0, s))
                    }(r, n, this.latestValues, i, d, c)), o && void 0 !== o.rotate && (this.animationValues || (this.animationValues = r), this.animationValues.pathRotation = o.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = i
                }, this.mixTargetDelta(1e3 * !!this.options.layoutRoot)
            }
            startAnimation(t) {
                this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && ((0, ti.cancelFrame)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ti.frame.update(() => {
                    te.globalProjectionState.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = (0, v.motionValue)(0)), this.motionValue.jump(0, !1), this.currentAnimation = (0, a.animateSingleValue)(this.motionValue, [0, 1e3], {
                        ...t,
                        velocity: 0,
                        isSync: !0,
                        onUpdate: e => {
                            this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                        },
                        onComplete: () => {
                            t.onComplete && t.onComplete(), this.completeAnimation()
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
                    if (this !== t && this.layout && s && tj(this.options.animationType, this.layout.layoutBox, s.layoutBox)) {
                        i = this.target || (0, W.createBox)();
                        let e = (0, k.calcLength)(this.layout.layoutBox.x);
                        i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                        let s = (0, k.calcLength)(this.layout.layoutBox.y);
                        i.y.min = t.target.y.min, i.y.max = i.y.min + s
                    }
                    M(e, i), (0, b.transformBox)(e, o), (0, k.calcBoxDelta)(this.projectionDeltaWithTransform, this.layoutCorrected, e, o)
                }
            }
            registerSharedNode(t, e) {
                this.sharedNodes.has(t) || this.sharedNodes.set(t, new Z), this.sharedNodes.get(t).add(e);
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
                i.z && tr("z", t, s, this.animationValues);
                for (let e = 0; e < to.length; e++) tr(`rotate${to[e]}`, t, s, this.animationValues), tr(`skew${to[e]}`, t, s, this.animationValues);
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
                    this.needsReset = !1, t.visibility = "", t.opacity = "", t.pointerEvents = (0, x.resolveMotionValue)(e?.pointerEvents) || "", t.transform = i ? i(this.latestValues, "") : "none";
                    return
                }
                let s = this.getLead();
                if (!this.projectionDelta || !this.layout || !s.target) {
                    this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = (0, x.resolveMotionValue)(e?.pointerEvents) || ""), this.hasProjected && !(0, tt.hasTransform)(this.latestValues) && (t.transform = i ? i({}, "") : "none", this.hasProjected = !1);
                    return
                }
                t.visibility = "";
                let o = s.animationValues || s.latestValues;
                this.applyTransformsToTarget();
                let n = function(t, e, i) {
                    let s = "",
                        o = t.x.translate / e.x,
                        n = t.y.translate / e.y,
                        r = i?.z || 0;
                    if ((o || n || r) && (s = `translate3d(${o}px, ${n}px, ${r}px) `), (1 !== e.x || 1 !== e.y) && (s += `scale(${1/e.x}, ${1/e.y}) `), i) {
                        let {
                            transformPerspective: t,
                            rotate: e,
                            pathRotation: o,
                            rotateX: n,
                            rotateY: r,
                            skewX: a,
                            skewY: l
                        } = i;
                        t && (s = `perspective(${t}px) ${s}`), e && (s += `rotate(${e}deg) `), o && (s += `rotate(${o}deg) `), n && (s += `rotateX(${n}deg) `), r && (s += `rotateY(${r}deg) `), a && (s += `skewX(${a}deg) `), l && (s += `skewY(${l}deg) `)
                    }
                    let a = t.x.scale * e.x,
                        l = t.y.scale * e.y;
                    return (1 !== a || 1 !== l) && (s += `scale(${a}, ${l})`), s || "none"
                }(this.projectionDeltaWithTransform, this.treeScale, o);
                i && (n = i(o, n)), t.transform = n;
                let {
                    x: r,
                    y: a
                } = this.projectionDelta;
                for (let e in t.transformOrigin = `${100*r.origin}% ${100*a.origin}% 0`, s.animationValues ? t.opacity = s === this ? o.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : t.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0, d.scaleCorrectors) {
                    if (void 0 === o[e]) continue;
                    let {
                        correct: i,
                        applyTo: r,
                        isCSSVariable: a
                    } = d.scaleCorrectors[e], l = "none" === n ? o[e] : i(o[e], s);
                    if (r) {
                        let e = r.length;
                        for (let i = 0; i < e; i++) t[r[i]] = l
                    } else a ? this.options.visualElement.renderState.vars[e] = l : t[e] = l
                }
                this.options.layoutId && (t.pointerEvents = s === this ? (0, x.resolveMotionValue)(e?.pointerEvents) || "" : "none")
            }
            clearSnapshot() {
                this.resumeFrom = this.snapshot = void 0
            }
            resetTree() {
                this.root.nodes.forEach(t => t.currentAnimation?.stop()), this.root.nodes.forEach(tm), this.root.sharedNodes.clear()
            }
        }
    }

    function tl(t) {
        t.updateLayout()
    }

    function th(t) {
        let e = t.resumeFrom?.snapshot || t.snapshot;
        if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
            let {
                layoutBox: i,
                measuredBox: s
            } = t.layout, {
                animationType: o
            } = t.options, n = e.source !== t.layout.source;
            if ("size" === o)(0, _.eachAxis)(t => {
                let s = n ? e.measuredBox[t] : e.layoutBox[t],
                    o = (0, k.calcLength)(s);
                s.min = i[t].min, s.max = s.min + o
            });
            else if ("x" === o || "y" === o) {
                let t = "x" === o ? "y" : "x";
                V(n ? e.measuredBox[t] : e.layoutBox[t], i[t])
            } else tj(o, e.layoutBox, i) && (0, _.eachAxis)(s => {
                let o = n ? e.measuredBox[s] : e.layoutBox[s],
                    r = (0, k.calcLength)(i[s]);
                o.max = o.min + r, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[s].max = t.relativeTarget[s].min + r)
            });
            let r = (0, W.createDelta)();
            (0, k.calcBoxDelta)(r, i, e.layoutBox);
            let a = (0, W.createDelta)();
            n ? (0, k.calcBoxDelta)(a, t.applyTransform(s, !0), e.measuredBox) : (0, k.calcBoxDelta)(a, i, e.layoutBox);
            let l = !G(r),
                h = !1;
            if (!t.resumeFrom) {
                let s = t.getClosestProjectingParent();
                if (s && !s.resumeFrom) {
                    let {
                        snapshot: o,
                        layout: n
                    } = s;
                    if (o && n) {
                        let r = t.options.layoutAnchor || void 0,
                            a = (0, W.createBox)();
                        (0, k.calcRelativePosition)(a, e.layoutBox, o.layoutBox, r);
                        let l = (0, W.createBox)();
                        (0, k.calcRelativePosition)(l, i, n.layoutBox, r), X(a, l) || (h = !0), s.options.layoutRoot && (t.relativeTarget = l, t.relativeTargetOrigin = a, t.relativeParent = s)
                    }
                }
            }
            t.notifyListeners("didUpdate", {
                layout: i,
                snapshot: e,
                delta: a,
                layoutDelta: r,
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

    function tu(t) {
        m.statsBuffer.value && ts.nodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
    }

    function tc(t) {
        t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
    }

    function td(t) {
        t.clearSnapshot()
    }

    function tm(t) {
        t.clearMeasurements()
    }

    function tp(t) {
        t.isLayoutDirty = !0, t.updateLayout()
    }

    function tg(t) {
        t.isLayoutDirty = !1
    }

    function tf(t) {
        t.isAnimationBlocked && t.layout && !t.isLayoutDirty && (t.snapshot = t.layout, t.isLayoutDirty = !0)
    }

    function ty(t) {
        let {
            visualElement: e
        } = t.options;
        e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
    }

    function tv(t) {
        t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
    }

    function tx(t) {
        t.resolveTargetDelta()
    }

    function tP(t) {
        t.calcProjection()
    }

    function tD(t) {
        t.resetSkewAndRotation()
    }

    function tT(t) {
        t.removeLeadSnapshot()
    }

    function tE(t, e, i) {
        t.translate = (0, y.mixNumber)(e.translate, 0, i), t.scale = (0, y.mixNumber)(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
    }

    function tS(t, e, i, s) {
        t.min = (0, y.mixNumber)(e.min, i.min, s), t.max = (0, y.mixNumber)(e.max, i.max, s)
    }

    function tw(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
    }
    let tB = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        },
        tA = t => "u" > typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
        tL = tA("applewebkit/") && !tA("chrome/") ? Math.round : r.noop;

    function tR(t) {
        t.min = tL(t.min), t.max = tL(t.max)
    }

    function tj(t, e, i) {
        return "position" === t || "preserve-aspect" === t && !(0, k.isNear)(Y(e), Y(i), .2)
    }

    function tV(t) {
        return t !== t.root && t.scroll?.wasRoot
    }
    var tM = t.i(342288);
    let tC = ta({
            attachResizeListener: (t, e) => (0, tM.addDomEvent)(t, "resize", e),
            measureScroll: () => ({
                x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
                y: document.documentElement.scrollTop || document.body?.scrollTop || 0
            }),
            checkIsScrollRoot: () => !0
        }),
        tb = {
            current: void 0
        },
        tk = ta({
            measureScroll: t => ({
                x: t.scrollLeft,
                y: t.scrollTop
            }),
            defaultParent: () => {
                if (!tb.current) {
                    let t = new tC({});
                    t.mount(window), t.setOptions({
                        layoutScroll: !0
                    }), tb.current = t
                }
                return tb.current
            },
            resetTransform: (t, e) => {
                t.style.transform = void 0 !== e ? e : "none"
            },
            checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
        }),
        tU = {
            pan: {
                Feature: i.PanGesture
            },
            drag: {
                Feature: e.DragGesture,
                ProjectionNode: tk,
                MeasureLayout: s.MeasureLayout
            }
        };
    t.s(["drag", 0, tU], 948395);
    let tI = {
        layout: {
            ProjectionNode: tk,
            MeasureLayout: s.MeasureLayout
        }
    };
    t.s(["layout", 0, tI], 596995)
}]);