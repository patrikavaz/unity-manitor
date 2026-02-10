! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
        t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                if (null != i)
                    for (var s in i) i.hasOwnProperty(s) && (t[s] = i[s])
            }
            return t
        }({}, t._sentryModuleMetadata[(new t.Error).stack], {
            "_sentryBundlerPluginAppKey:hexagon-web": !0
        })
    } catch (t) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [67409], {
        15107: (t, e, i) => {
            i.d(e, {
                z: () => r
            });
            var s = i(60950),
                o = i(78847),
                n = i(41536);

            function r(t, e, i) {
                let r = (0, s.S)(t) ? t : (0, o.OQ)(t);
                return r.start((0, n.f)("", r, e, i)), r.animation
            }
        },
        38023: (t, e, i) => {
            i.d(e, {
                Z: () => n
            });
            var s = i(40668),
                o = i(98694);
            let n = {
                layout: {
                    ProjectionNode: s.P,
                    MeasureLayout: o.$
                }
            }
        },
        40668: (t, e, i) => {
            i.d(e, {
                P: () => tB
            });
            var s = i(41798),
                o = i(88307),
                n = i(95449),
                r = i(91724),
                a = i(50050),
                l = i(25304),
                h = i(72030),
                u = i(63261),
                d = i(78847),
                c = i(51321),
                p = i(78911),
                m = i(51457),
                g = i(27626),
                y = i(15107),
                f = i(52073),
                v = i(27527);
            let x = (t, e) => t.depth - e.depth;
            class P {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    (0, v.Kq)(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    (0, v.Ai)(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(x), this.isDirty = !1, this.children.forEach(t)
                }
            }
            var T = i(70457),
                D = i(45099),
                E = i(75811),
                A = i(45747);
            let R = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                w = R.length,
                S = t => "string" == typeof t ? parseFloat(t) : t,
                j = t => "number" == typeof t || D.px.test(t);

            function k(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let L = B(0, .5, E.yT),
                C = B(.5, .95, g.l);

            function B(t, e, i) {
                return s => s < t ? 0 : s > e ? 1 : i((0, A.q)(t, e, s))
            }

            function M(t, e) {
                t.min = e.min, t.max = e.max
            }

            function V(t, e) {
                M(t.x, e.x), M(t.y, e.y)
            }

            function b(t, e) {
                t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
            }
            var U = i(39390),
                F = i(78659);

            function I(t, e, i, s, o) {
                return t -= e, t = (0, U.hq)(t, 1 / i, s), void 0 !== o && (t = (0, U.hq)(t, 1 / o, s)), t
            }

            function O(t, e, [i, s, o], n, r) {
                ! function(t, e = 0, i = 1, s = .5, o, n = t, r = t) {
                    if (D.KN.test(e) && (e = parseFloat(e), e = (0, c.k)(r.min, r.max, e / 100) - r.min), "number" != typeof e) return;
                    let a = (0, c.k)(n.min, n.max, s);
                    t === n && (a -= e), t.min = I(t.min, e, i, a, o), t.max = I(t.max, e, i, a, o)
                }(t, e[i], e[s], e[o], e.scale, n, r)
            }
            let G = ["x", "scaleX", "originX"],
                X = ["y", "scaleY", "originY"];

            function Q(t, e, i, s) {
                O(t.x, e, G, i ? i.x : void 0, s ? s.x : void 0), O(t.y, e, X, i ? i.y : void 0, s ? s.y : void 0)
            }
            var W = i(30453);

            function $(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function N(t) {
                return $(t.x) && $(t.y)
            }

            function H(t, e) {
                return t.min === e.min && t.max === e.max
            }

            function z(t, e) {
                return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
            }

            function q(t, e) {
                return z(t.x, e.x) && z(t.y, e.y)
            }

            function _(t) {
                return (0, F.CQ)(t.x) / (0, F.CQ)(t.y)
            }

            function Y(t, e) {
                return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
            }
            class K {
                constructor() {
                    this.members = []
                }
                add(t) {
                    (0, v.Kq)(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if ((0, v.Ai)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
            var Z = i(68494),
                J = i(68061),
                tt = i(42149),
                te = i(98452);
            let ti = {
                    nodes: 0,
                    calculatedTargetDeltas: 0,
                    calculatedProjections: 0
                },
                ts = ["", "X", "Y", "Z"],
                to = 0;

            function tn(t, e, i, s) {
                let {
                    latestValues: o
                } = e;
                o[t] && (i[t] = o[t], e.setStaticValue(t, 0), s && (s[t] = 0))
            }

            function tr({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: i,
                checkIsScrollRoot: g,
                resetTransform: v
            }) {
                return class {
                    constructor(t = {}, i = e?.()) {
                        this.id = to++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.projectionUpdateScheduled = !1, o.Q.value && (ti.nodes = ti.calculatedTargetDeltas = ti.calculatedProjections = 0), this.nodes.forEach(th), this.nodes.forEach(ty), this.nodes.forEach(tf), this.nodes.forEach(tu), o.Q.addProjectionMetrics && o.Q.addProjectionMetrics(ti)
                        }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new P)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new p.v), this.eventHandlers.get(t).add(e)
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
                        this.isSVG = (0, n.x)(e) && !(0, r.h)(e), this.instance = e;
                        let {
                            layoutId: i,
                            layout: o,
                            visualElement: h
                        } = this.options;
                        if (h && !h.current && h.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (o || i) && (this.isLayoutDirty = !0), t) {
                            let i, o = 0,
                                n = () => this.root.updateBlockedByResize = !1;
                            s.Gt.read(() => {
                                o = window.innerWidth
                            }), t(e, () => {
                                let t = window.innerWidth;
                                t !== o && (o = t, this.root.updateBlockedByResize = !0, i && i(), i = function(t, e) {
                                    let i = l.k.now(),
                                        o = ({
                                            timestamp: e
                                        }) => {
                                            let n = e - i;
                                            n >= 250 && ((0, s.WG)(o), t(n - 250))
                                        };
                                    return s.Gt.setup(o, !0), () => (0, s.WG)(o)
                                }(n, 250), te.w.hasAnimatedSinceResize && (te.w.hasAnimatedSinceResize = !1, this.nodes.forEach(tg)))
                            })
                        }
                        i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && h && (i || o) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeLayoutChanged: i,
                            layout: s
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let o = this.options.transition || h.getDefaultTransition() || tE,
                                {
                                    onLayoutAnimationStart: n,
                                    onLayoutAnimationComplete: r
                                } = h.getProps(),
                                l = !this.targetLayout || !q(this.targetLayout, s),
                                u = !e && i;
                            if (this.options.layoutRoot || this.resumeFrom || u || e && (l || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                                let e = {
                                    ...(0, a.r)(o, "layout"),
                                    onPlay: n,
                                    onComplete: r
                                };
                                (h.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e), this.setAnimationOrigin(t, u)
                            } else e || tg(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = s
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), (0, s.WG)(this.updateProjection)
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
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(tv), this.animationId++)
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
                                let o = (0, f.P)(i);
                                if (window.MotionHasOptimisedAnimation(o, "transform")) {
                                    let {
                                        layout: t,
                                        layoutId: i
                                    } = e.options;
                                    window.MotionCancelOptimisedAnimation(o, "transform", s.Gt, !(t || i))
                                }
                                let {
                                    parent: n
                                } = e;
                                n && !n.hasCheckedOptimisedAppear && t(n)
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
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(tc);
                            return
                        }
                        if (this.animationId <= this.animationCommitId) return void this.nodes.forEach(tp);
                        this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(tm), this.nodes.forEach(ta), this.nodes.forEach(tl)) : this.nodes.forEach(tp), this.clearAllSnapshots();
                        let t = l.k.now();
                        s.uv.delta = (0, m.q)(0, 1e3 / 60, t - s.uv.timestamp), s.uv.timestamp = t, s.uv.isProcessing = !0, s.PP.update.process(s.uv), s.PP.preRender.process(s.uv), s.PP.render.process(s.uv), s.uv.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, h.k.read(this.scheduleUpdate))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(td), this.sharedNodes.forEach(tx)
                    }
                    scheduleUpdateProjection() {
                        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, s.Gt.preRender(this.updateProjection, !1, !0))
                    }
                    scheduleCheckAfterUnmount() {
                        s.Gt.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure(), !this.snapshot || (0, F.CQ)(this.snapshot.measuredBox.x) || (0, F.CQ)(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
                        let t = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = (0, W.ge)(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: e
                        } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                    }
                    updateScroll(t = "measure") {
                        let e = !!(this.options.layoutScroll && this.instance);
                        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && this.instance) {
                            let e = g(this.instance);
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
                        if (!v) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                            e = this.projectionDelta && !N(this.projectionDelta),
                            i = this.getTransformTemplate(),
                            s = i ? i(this.latestValues, "") : void 0,
                            o = s !== this.prevTransformTemplateValue;
                        t && this.instance && (e || (0, tt.HD)(this.latestValues) || o) && (v(this.instance, s), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        var e;
                        let i = this.measurePageBox(),
                            s = this.removeElementScroll(i);
                        return t && (s = this.removeTransform(s)), tw((e = s).x), tw(e.y), {
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
                        if (!t) return (0, W.ge)();
                        let e = t.measureViewportBox();
                        if (!(this.scroll?.wasRoot || this.path.some(tj))) {
                            let {
                                scroll: t
                            } = this.root;
                            t && ((0, U.Ql)(e.x, t.offset.x), (0, U.Ql)(e.y, t.offset.y))
                        }
                        return e
                    }
                    removeElementScroll(t) {
                        let e = (0, W.ge)();
                        if (V(e, t), this.scroll?.wasRoot) return e;
                        for (let i = 0; i < this.path.length; i++) {
                            let s = this.path[i],
                                {
                                    scroll: o,
                                    options: n
                                } = s;
                            s !== this.root && o && n.layoutScroll && (o.wasRoot && V(e, t), (0, U.Ql)(e.x, o.offset.x), (0, U.Ql)(e.y, o.offset.y))
                        }
                        return e
                    }
                    applyTransform(t, e = !1) {
                        let i = (0, W.ge)();
                        V(i, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let s = this.path[t];
                            !e && s.options.layoutScroll && s.scroll && s !== s.root && (0, U.Ww)(i, {
                                x: -s.scroll.offset.x,
                                y: -s.scroll.offset.y
                            }), (0, tt.HD)(s.latestValues) && (0, U.Ww)(i, s.latestValues)
                        }
                        return (0, tt.HD)(this.latestValues) && (0, U.Ww)(i, this.latestValues), i
                    }
                    removeTransform(t) {
                        let e = (0, W.ge)();
                        V(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let i = this.path[t];
                            if (!i.instance || !(0, tt.HD)(i.latestValues)) continue;
                            (0, tt.vk)(i.latestValues) && i.updateSnapshot();
                            let s = (0, W.ge)();
                            V(s, i.measurePageBox()), Q(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, s)
                        }
                        return (0, tt.HD)(this.latestValues) && Q(e, this.latestValues), e
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
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== s.uv.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(t = !1) {
                        let e = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = e.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = e.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = e.isSharedProjectionDirty);
                        let i = !!this.resumingFrom || this !== e;
                        if (!(t || i && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                        let {
                            layout: n,
                            layoutId: r
                        } = this.options;
                        if (this.layout && (n || r)) {
                            if (this.resolvedRelativeTargetAt = s.uv.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, W.ge)(), this.relativeTargetOrigin = (0, W.ge)(), (0, F.jA)(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), V(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if (this.target || (this.target = (0, W.ge)(), this.targetWithTransforms = (0, W.ge)()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), (0, F.N)(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : V(this.target, this.layout.layoutBox), (0, U.o4)(this.target, this.targetDelta)) : V(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let t = this.getClosestProjectingParent();
                                    t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, W.ge)(), this.relativeTargetOrigin = (0, W.ge)(), (0, F.jA)(this.relativeTargetOrigin, this.target, t.target), V(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                o.Q.value && ti.calculatedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        if (!(!this.parent || (0, tt.vk)(this.parent.latestValues) || (0, tt.vF)(this.parent.latestValues)))
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
                        if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (i = !1), e && (this.isSharedProjectionDirty || this.isTransformDirty) && (i = !1), this.resolvedRelativeTargetAt === s.uv.timestamp && (i = !1), i) return;
                        let {
                            layout: n,
                            layoutId: r
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(n || r)) return;
                        V(this.layoutCorrected, this.layout.layoutBox);
                        let a = this.treeScale.x,
                            l = this.treeScale.y;
                        (0, U.OU)(this.layoutCorrected, this.treeScale, this.path, e), t.layout && !t.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (t.target = t.layout.layoutBox, t.targetWithTransforms = (0, W.ge)());
                        let {
                            target: h
                        } = t;
                        if (!h) {
                            this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                            return
                        }
                        this.projectionDelta && this.prevProjectionDelta ? (b(this.prevProjectionDelta.x, this.projectionDelta.x), b(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), (0, F.vb)(this.projectionDelta, this.layoutCorrected, h, this.latestValues), this.treeScale.x === a && this.treeScale.y === l && Y(this.projectionDelta.x, this.prevProjectionDelta.x) && Y(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", h)), o.Q.value && ti.calculatedProjections++
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
                        this.prevProjectionDelta = (0, W.xU)(), this.projectionDelta = (0, W.xU)(), this.projectionDeltaWithTransform = (0, W.xU)()
                    }
                    setAnimationOrigin(t, e = !1) {
                        let i, s = this.snapshot,
                            o = s ? s.latestValues : {},
                            n = {
                                ...this.latestValues
                            },
                            r = (0, W.xU)();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                        let a = (0, W.ge)(),
                            l = (s ? s.source : void 0) !== (this.layout ? this.layout.source : void 0),
                            h = this.getStack(),
                            u = !h || h.members.length <= 1,
                            d = !!(l && !u && !0 === this.options.crossfade && !this.path.some(tD));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            let s = e / 1e3;
                            if (tP(r.x, t.x, s), tP(r.y, t.y, s), this.setTargetDelta(r), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var h, p, m, g, y, f;
                                (0, F.jA)(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), m = this.relativeTarget, g = this.relativeTargetOrigin, y = a, f = s, tT(m.x, g.x, y.x, f), tT(m.y, g.y, y.y, f), i && (h = this.relativeTarget, p = i, H(h.x, p.x) && H(h.y, p.y)) && (this.isProjectionDirty = !1), i || (i = (0, W.ge)()), V(i, this.relativeTarget)
                            }
                            l && (this.animationValues = n, function(t, e, i, s, o, n) {
                                o ? (t.opacity = (0, c.k)(0, i.opacity ?? 1, L(s)), t.opacityExit = (0, c.k)(e.opacity ?? 1, 0, C(s))) : n && (t.opacity = (0, c.k)(e.opacity ?? 1, i.opacity ?? 1, s));
                                for (let o = 0; o < w; o++) {
                                    let n = `border${R[o]}Radius`,
                                        r = k(e, n),
                                        a = k(i, n);
                                    (void 0 !== r || void 0 !== a) && (r || (r = 0), a || (a = 0), 0 === r || 0 === a || j(r) === j(a) ? (t[n] = Math.max((0, c.k)(S(r), S(a), s), 0), (D.KN.test(a) || D.KN.test(r)) && (t[n] += "%")) : t[n] = a)
                                }(e.rotate || i.rotate) && (t.rotate = (0, c.k)(e.rotate || 0, i.rotate || 0, s))
                            }(n, o, this.latestValues, s, d, u)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = s
                        }, this.mixTargetDelta(1e3 * !!this.options.layoutRoot)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && ((0, s.WG)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = s.Gt.update(() => {
                            te.w.hasAnimatedSinceResize = !0, u.q.layout++, this.motionValue || (this.motionValue = (0, d.OQ)(0)), this.currentAnimation = (0, y.z)(this.motionValue, [0, 1e3], {
                                ...t,
                                velocity: 0,
                                isSync: !0,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onStop: () => {
                                    u.q.layout--
                                },
                                onComplete: () => {
                                    u.q.layout--, t.onComplete && t.onComplete(), this.completeAnimation()
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
                            if (this !== t && this.layout && s && tS(this.options.animationType, this.layout.layoutBox, s.layoutBox)) {
                                i = this.target || (0, W.ge)();
                                let e = (0, F.CQ)(this.layout.layoutBox.x);
                                i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                                let s = (0, F.CQ)(this.layout.layoutBox.y);
                                i.y.min = t.target.y.min, i.y.max = i.y.min + s
                            }
                            V(e, i), (0, U.Ww)(e, o), (0, F.vb)(this.projectionDeltaWithTransform, this.layoutCorrected, e, o)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new K), this.sharedNodes.get(t).add(e);
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
                        i.z && tn("z", t, s, this.animationValues);
                        for (let e = 0; e < ts.length; e++) tn(`rotate${ts[e]}`, t, s, this.animationValues), tn(`skew${ts[e]}`, t, s, this.animationValues);
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
                            this.needsReset = !1, t.visibility = "", t.opacity = "", t.pointerEvents = (0, T.u)(e?.pointerEvents) || "", t.transform = i ? i(this.latestValues, "") : "none";
                            return
                        }
                        let s = this.getLead();
                        if (!this.projectionDelta || !this.layout || !s.target) {
                            this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = (0, T.u)(e?.pointerEvents) || ""), this.hasProjected && !(0, tt.HD)(this.latestValues) && (t.transform = i ? i({}, "") : "none", this.hasProjected = !1);
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
                                    rotateX: o,
                                    rotateY: n,
                                    skewX: r,
                                    skewY: a
                                } = i;
                                t && (s = `perspective(${t}px) ${s}`), e && (s += `rotate(${e}deg) `), o && (s += `rotateX(${o}deg) `), n && (s += `rotateY(${n}deg) `), r && (s += `skewX(${r}deg) `), a && (s += `skewY(${a}deg) `)
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
                        for (let e in t.transformOrigin = `${100*r.origin}% ${100*a.origin}% 0`, s.animationValues ? t.opacity = s === this ? o.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : t.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0, Z.H) {
                            if (void 0 === o[e]) continue;
                            let {
                                correct: i,
                                applyTo: r,
                                isCSSVariable: a
                            } = Z.H[e], l = "none" === n ? o[e] : i(o[e], s);
                            if (r) {
                                let e = r.length;
                                for (let i = 0; i < e; i++) t[r[i]] = l
                            } else a ? this.options.visualElement.renderState.vars[e] = l : t[e] = l
                        }
                        this.options.layoutId && (t.pointerEvents = s === this ? (0, T.u)(e?.pointerEvents) || "" : "none")
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => t.currentAnimation?.stop()), this.root.nodes.forEach(tc), this.root.sharedNodes.clear()
                    }
                }
            }

            function ta(t) {
                t.updateLayout()
            }

            function tl(t) {
                let e = t.resumeFrom?.snapshot || t.snapshot;
                if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: i,
                        measuredBox: s
                    } = t.layout, {
                        animationType: o
                    } = t.options, n = e.source !== t.layout.source;
                    "size" === o ? (0, J.X)(t => {
                        let s = n ? e.measuredBox[t] : e.layoutBox[t],
                            o = (0, F.CQ)(s);
                        s.min = i[t].min, s.max = s.min + o
                    }) : tS(o, e.layoutBox, i) && (0, J.X)(s => {
                        let o = n ? e.measuredBox[s] : e.layoutBox[s],
                            r = (0, F.CQ)(i[s]);
                        o.max = o.min + r, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[s].max = t.relativeTarget[s].min + r)
                    });
                    let r = (0, W.xU)();
                    (0, F.vb)(r, i, e.layoutBox);
                    let a = (0, W.xU)();
                    n ? (0, F.vb)(a, t.applyTransform(s, !0), e.measuredBox) : (0, F.vb)(a, i, e.layoutBox);
                    let l = !N(r),
                        h = !1;
                    if (!t.resumeFrom) {
                        let s = t.getClosestProjectingParent();
                        if (s && !s.resumeFrom) {
                            let {
                                snapshot: o,
                                layout: n
                            } = s;
                            if (o && n) {
                                let r = (0, W.ge)();
                                (0, F.jA)(r, e.layoutBox, o.layoutBox);
                                let a = (0, W.ge)();
                                (0, F.jA)(a, i, n.layoutBox), q(r, a) || (h = !0), s.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = r, t.relativeParent = s)
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

            function th(t) {
                o.Q.value && ti.nodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function tu(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function td(t) {
                t.clearSnapshot()
            }

            function tc(t) {
                t.clearMeasurements()
            }

            function tp(t) {
                t.isLayoutDirty = !1
            }

            function tm(t) {
                let {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function tg(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
            }

            function ty(t) {
                t.resolveTargetDelta()
            }

            function tf(t) {
                t.calcProjection()
            }

            function tv(t) {
                t.resetSkewAndRotation()
            }

            function tx(t) {
                t.removeLeadSnapshot()
            }

            function tP(t, e, i) {
                t.translate = (0, c.k)(e.translate, 0, i), t.scale = (0, c.k)(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function tT(t, e, i, s) {
                t.min = (0, c.k)(e.min, i.min, s), t.max = (0, c.k)(e.max, i.max, s)
            }

            function tD(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let tE = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                tA = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
                tR = tA("applewebkit/") && !tA("chrome/") ? Math.round : g.l;

            function tw(t) {
                t.min = tR(t.min), t.max = tR(t.max)
            }

            function tS(t, e, i) {
                return "position" === t || "preserve-aspect" === t && !(0, F.HQ)(_(e), _(i), .2)
            }

            function tj(t) {
                return t !== t.root && t.scroll?.wasRoot
            }
            var tk = i(73113);
            let tL = tr({
                    attachResizeListener: (t, e) => (0, tk.k)(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                tC = {
                    current: void 0
                },
                tB = tr({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!tC.current) {
                            let t = new tL({});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), tC.current = t
                        }
                        return tC.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
                })
        },
        68061: (t, e, i) => {
            i.d(e, {
                X: () => s
            });

            function s(t) {
                return [t("x"), t("y")]
            }
        },
        78659: (t, e, i) => {
            i.d(e, {
                CQ: () => o,
                HQ: () => n,
                N: () => h,
                jA: () => d,
                vb: () => a
            });
            var s = i(51321);

            function o(t) {
                return t.max - t.min
            }

            function n(t, e, i) {
                return Math.abs(t - e) <= i
            }

            function r(t, e, i, n = .5) {
                t.origin = n, t.originPoint = (0, s.k)(e.min, e.max, t.origin), t.scale = o(i) / o(e), t.translate = (0, s.k)(i.min, i.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
            }

            function a(t, e, i, s) {
                r(t.x, e.x, i.x, s ? s.originX : void 0), r(t.y, e.y, i.y, s ? s.originY : void 0)
            }

            function l(t, e, i) {
                t.min = i.min + e.min, t.max = t.min + o(e)
            }

            function h(t, e, i) {
                l(t.x, e.x, i.x), l(t.y, e.y, i.y)
            }

            function u(t, e, i) {
                t.min = e.min - i.min, t.max = t.min + o(e)
            }

            function d(t, e, i) {
                u(t.x, e.x, i.x), u(t.y, e.y, i.y)
            }
        },
        85631: (t, e, i) => {
            i.d(e, {
                $: () => $
            });
            var s = i(25183),
                o = i(27626),
                n = i(35160),
                r = i(45099),
                a = i(41798),
                l = i(51321),
                h = i(97631),
                u = i(41536),
                d = i(73113),
                c = i(91687);

            function p(t, e, i, s) {
                return (0, d.k)(t, e, (0, c.F)(i), s)
            }
            var m = i(93907),
                g = i(78659),
                y = i(30453),
                f = i(68061),
                v = i(58046);
            let x = ({
                current: t
            }) => t ? t.ownerDocument.defaultView : null;
            var P = i(26814),
                T = i(53362),
                D = i(32813),
                E = i(10506),
                A = i(85984);
            let R = (t, e) => Math.abs(t - e);
            class w {
                constructor(t, e, {
                    transformPagePoint: i,
                    contextWindow: s = window,
                    dragSnapToOrigin: o = !1,
                    distanceThreshold: n = 3
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let t = k(this.lastMoveEventInfo, this.history),
                                e = null !== this.startEvent,
                                i = function(t, e) {
                                    return Math.sqrt(R(t.x, e.x) ** 2 + R(t.y, e.y) ** 2)
                                }(t.offset, {
                                    x: 0,
                                    y: 0
                                }) >= this.distanceThreshold;
                            if (!e && !i) return;
                            let {
                                point: s
                            } = t, {
                                timestamp: o
                            } = a.uv;
                            this.history.push({
                                ...s,
                                timestamp: o
                            });
                            let {
                                onStart: n,
                                onMove: r
                            } = this.handlers;
                            e || (n && n(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), r && r(this.lastMoveEvent, t)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = S(e, this.transformPagePoint), a.Gt.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            this.end();
                            let {
                                onEnd: i,
                                onSessionEnd: s,
                                resumeAnimation: o
                            } = this.handlers;
                            if (this.dragSnapToOrigin && o && o(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let n = k("pointercancel" === t.type ? this.lastMoveEventInfo : S(e, this.transformPagePoint), this.history);
                            this.startEvent && i && i(t, n), s && s(t, n)
                        }, !(0, D.M)(t)) return;
                    this.dragSnapToOrigin = o, this.handlers = e, this.transformPagePoint = i, this.distanceThreshold = n, this.contextWindow = s || window;
                    let r = S((0, c.e)(t), this.transformPagePoint),
                        {
                            point: l
                        } = r,
                        {
                            timestamp: h
                        } = a.uv;
                    this.history = [{
                        ...l,
                        timestamp: h
                    }];
                    let {
                        onSessionStart: u
                    } = e;
                    u && u(t, k(r, this.history)), this.removeListeners = (0, E.F)(p(this.contextWindow, "pointermove", this.handlePointerMove), p(this.contextWindow, "pointerup", this.handlePointerUp), p(this.contextWindow, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), (0, a.WG)(this.updatePoint)
                }
            }

            function S(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function j(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function k({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: j(t, L(e)),
                    offset: j(t, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let i = t.length - 1,
                            s = null,
                            o = L(t);
                        for (; i >= 0 && (s = t[i], !(o.timestamp - s.timestamp > (0, A.f)(.1)));) i--;
                        if (!s) return {
                            x: 0,
                            y: 0
                        };
                        let n = (0, A.X)(o.timestamp - s.timestamp);
                        if (0 === n) return {
                            x: 0,
                            y: 0
                        };
                        let r = {
                            x: (o.x - s.x) / n,
                            y: (o.y - s.y) / n
                        };
                        return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r
                    }(e, .1)
                }
            }

            function L(t) {
                return t[t.length - 1]
            }
            var C = i(45747),
                B = i(51457);

            function M(t, e, i) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
                }
            }

            function V(t, e) {
                let i = e.min - t.min,
                    s = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([i, s] = [s, i]), {
                    min: i,
                    max: s
                }
            }

            function b(t, e, i) {
                return {
                    min: U(t, e),
                    max: U(t, i)
                }
            }

            function U(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }
            let F = new WeakMap;
            class I {
                constructor(t) {
                    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = (0, y.ge)(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1,
                    distanceThreshold: i
                } = {}) {
                    let {
                        presenceContext: s
                    } = this.visualElement;
                    if (s && !1 === s.isPresent) return;
                    let o = t => {
                            let {
                                dragSnapToOrigin: i
                            } = this.getProps();
                            i ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor((0, c.e)(t).point)
                        },
                        l = (t, e) => {
                            let {
                                drag: i,
                                dragPropagation: s,
                                onDragStart: o
                            } = this.getProps();
                            if (i && !s && (this.openDragLock && this.openDragLock(), this.openDragLock = function(t) {
                                    if ("x" === t || "y" === t)
                                        if (n.I[t]) return null;
                                        else return n.I[t] = !0, () => {
                                            n.I[t] = !1
                                        };
                                    return n.I.x || n.I.y ? null : (n.I.x = n.I.y = !0, () => {
                                        n.I.x = n.I.y = !1
                                    })
                                }(i), !this.openDragLock)) return;
                            this.latestPointerEvent = t, this.latestPanInfo = e, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), (0, f.X)(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (r.KN.test(e)) {
                                    let {
                                        projection: i
                                    } = this.visualElement;
                                    if (i && i.layout) {
                                        let s = i.layout.layoutBox[t];
                                        s && (e = (0, g.CQ)(s) * (parseFloat(e) / 100))
                                    }
                                }
                                this.originPoint[t] = e
                            }), o && a.Gt.postRender(() => o(t, e)), (0, T.g)(this.visualElement, "transform");
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
                                onDrag: n
                            } = this.getProps();
                            if (!i && !this.openDragLock) return;
                            let {
                                offset: r
                            } = e;
                            if (s && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let i = null;
                                    return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                                }(r), null !== this.currentDirection && o && o(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", e.point, r), this.updateAxis("y", e.point, r), this.visualElement.render(), n && n(t, e)
                        },
                        u = (t, e) => {
                            this.latestPointerEvent = t, this.latestPanInfo = e, this.stop(t, e), this.latestPointerEvent = null, this.latestPanInfo = null
                        },
                        d = () => (0, f.X)(t => "paused" === this.getAnimationState(t) && this.getAxisMotionValue(t).animation?.play()),
                        {
                            dragSnapToOrigin: p
                        } = this.getProps();
                    this.panSession = new w(t, {
                        onSessionStart: o,
                        onStart: l,
                        onMove: h,
                        onSessionEnd: u,
                        resumeAnimation: d
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint(),
                        dragSnapToOrigin: p,
                        distanceThreshold: i,
                        contextWindow: x(this.visualElement)
                    })
                }
                stop(t, e) {
                    let i = t || this.latestPointerEvent,
                        s = e || this.latestPanInfo,
                        o = this.isDragging;
                    if (this.cancel(), !o || !s || !i) return;
                    let {
                        velocity: n
                    } = s;
                    this.startAnimation(n);
                    let {
                        onDragEnd: r
                    } = this.getProps();
                    r && a.Gt.postRender(() => r(i, s))
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
                    if (!i || !O(t, s, this.currentDirection)) return;
                    let o = this.getAxisMotionValue(t),
                        n = this.originPoint[t] + i[t];
                    this.constraints && this.constraints[t] && (n = function(t, {
                        min: e,
                        max: i
                    }, s) {
                        return void 0 !== e && t < e ? t = s ? (0, l.k)(e, t, s.min) : Math.max(t, e) : void 0 !== i && t > i && (t = s ? (0, l.k)(i, t, s.max) : Math.min(t, i)), t
                    }(n, this.constraints[t], this.elastic[t])), o.set(n)
                }
                resolveConstraints() {
                    let {
                        dragConstraints: t,
                        dragElastic: e
                    } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, s = this.constraints;
                    t && (0, P.X)(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && i ? this.constraints = function(t, {
                        top: e,
                        left: i,
                        bottom: s,
                        right: o
                    }) {
                        return {
                            x: M(t.x, i, o),
                            y: M(t.y, e, s)
                        }
                    }(i.layoutBox, t) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: b(t, "left", "right"),
                            y: b(t, "top", "bottom")
                        }
                    }(e), s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && (0, f.X)(t => {
                        !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let i = {};
                            return void 0 !== e.min && (i.min = e.min - t.min), void 0 !== e.max && (i.max = e.max - t.min), i
                        }(i.layoutBox[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: i
                    } = this.getProps();
                    if (!e || !(0, P.X)(e)) return !1;
                    let s = e.current;
                    (0, h.V)(null !== s, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
                    let {
                        projection: o
                    } = this.visualElement;
                    if (!o || !o.layout) return !1;
                    let n = (0, v.L)(s, o.root, this.visualElement.getTransformPagePoint()),
                        r = (t = o.layout.layoutBox, {
                            x: V(t.x, n.x),
                            y: V(t.y, n.y)
                        });
                    if (i) {
                        let t = i((0, m.pA)(r));
                        this.hasMutatedConstraints = !!t, t && (r = (0, m.FY)(t))
                    }
                    return r
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: i,
                        dragElastic: s,
                        dragTransition: o,
                        dragSnapToOrigin: n,
                        onDragTransitionEnd: r
                    } = this.getProps(), a = this.constraints || {};
                    return Promise.all((0, f.X)(r => {
                        if (!O(r, e, this.currentDirection)) return;
                        let l = a && a[r] || {};
                        n && (l = {
                            min: 0,
                            max: 0
                        });
                        let h = {
                            type: "inertia",
                            velocity: i ? t[r] : 0,
                            bounceStiffness: s ? 200 : 1e6,
                            bounceDamping: s ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...o,
                            ...l
                        };
                        return this.startAxisValueAnimation(r, h)
                    })).then(r)
                }
                startAxisValueAnimation(t, e) {
                    let i = this.getAxisMotionValue(t);
                    return (0, T.g)(this.visualElement, t), i.start((0, u.f)(t, i, 0, e, this.visualElement, !1))
                }
                stopAnimation() {
                    (0, f.X)(t => this.getAxisMotionValue(t).stop())
                }
                pauseAnimation() {
                    (0, f.X)(t => this.getAxisMotionValue(t).animation?.pause())
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
                    (0, f.X)(e => {
                        let {
                            drag: i
                        } = this.getProps();
                        if (!O(e, i, this.currentDirection)) return;
                        let {
                            projection: s
                        } = this.visualElement, o = this.getAxisMotionValue(e);
                        if (s && s.layout) {
                            let {
                                min: i,
                                max: n
                            } = s.layout.layoutBox[e];
                            o.set(t[e] - (0, l.k)(i, n, .5))
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
                    if (!(0, P.X)(e) || !i || !this.constraints) return;
                    this.stopAnimation();
                    let s = {
                        x: 0,
                        y: 0
                    };
                    (0, f.X)(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e && !1 !== this.constraints) {
                            let i = e.get();
                            s[t] = function(t, e) {
                                let i = .5,
                                    s = (0, g.CQ)(t),
                                    o = (0, g.CQ)(e);
                                return o > s ? i = (0, C.q)(e.min, e.max - s, t.min) : s > o && (i = (0, C.q)(t.min, t.max - o, e.min)), (0, B.q)(0, 1, i)
                            }({
                                min: i,
                                max: i
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: o
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = o ? o({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), (0, f.X)(e => {
                        if (!O(e, t, null)) return;
                        let i = this.getAxisMotionValue(e),
                            {
                                min: o,
                                max: n
                            } = this.constraints[e];
                        i.set((0, l.k)(o, n, s[e]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    F.set(this.visualElement, this);
                    let t = p(this.visualElement.current, "pointerdown", t => {
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
                            (0, P.X)(t) && t.current && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: i
                        } = this.visualElement,
                        s = i.addEventListener("measure", e);
                    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), a.Gt.read(e);
                    let o = (0, d.k)(window, "resize", () => this.scalePositionWithinConstraints()),
                        n = i.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && ((0, f.X)(e => {
                                let i = this.getAxisMotionValue(e);
                                i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        o(), t(), s(), n && n()
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

            function O(t, e, i) {
                return (!0 === e || e === t) && (null === i || i === t)
            }
            class G extends s.X {
                constructor(t) {
                    super(t), this.removeGroupControls = o.l, this.removeListeners = o.l, this.controls = new I(t)
                }
                mount() {
                    let {
                        dragControls: t
                    } = this.node.getProps();
                    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || o.l
                }
                unmount() {
                    this.removeGroupControls(), this.removeListeners()
                }
            }
            let X = t => (e, i) => {
                t && a.Gt.postRender(() => t(e, i))
            };
            class Q extends s.X {
                constructor() {
                    super(...arguments), this.removePointerDownListener = o.l
                }
                onPointerDown(t) {
                    this.session = new w(t, this.createPanHandlers(), {
                        transformPagePoint: this.node.getTransformPagePoint(),
                        contextWindow: x(this.node)
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
                        onSessionStart: X(t),
                        onStart: X(e),
                        onMove: i,
                        onEnd: (t, e) => {
                            delete this.session, s && a.Gt.postRender(() => s(t, e))
                        }
                    }
                }
                mount() {
                    this.removePointerDownListener = p(this.node.current, "pointerdown", t => this.onPointerDown(t))
                }
                update() {
                    this.session && this.session.updateHandlers(this.createPanHandlers())
                }
                unmount() {
                    this.removePointerDownListener(), this.session && this.session.end()
                }
            }
            var W = i(98694);
            let $ = {
                pan: {
                    Feature: Q
                },
                drag: {
                    Feature: G,
                    ProjectionNode: i(40668).P,
                    MeasureLayout: W.$
                }
            }
        },
        91724: (t, e, i) => {
            i.d(e, {
                h: () => o
            });
            var s = i(95449);

            function o(t) {
                return (0, s.x)(t) && "svg" === t.tagName
            }
        },
        95449: (t, e, i) => {
            i.d(e, {
                x: () => o
            });
            var s = i(25816);

            function o(t) {
                return (0, s.G)(t) && "ownerSVGElement" in t
            }
        },
        98452: (t, e, i) => {
            i.d(e, {
                w: () => s
            });
            let s = {
                hasAnimatedSinceResize: !0,
                hasEverUpdated: !1
            }
        },
        98694: (t, e, i) => {
            i.d(e, {
                $: () => x
            });
            var s = i(63036),
                o = i(41798),
                n = i(72030),
                r = i(3728),
                a = i(14083),
                l = i(29074),
                h = i(58914),
                u = i(98452),
                d = i(45099);

            function c(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let p = {
                correct: (t, e) => {
                    if (!e.target) return t;
                    if ("string" == typeof t)
                        if (!d.px.test(t)) return t;
                        else t = parseFloat(t);
                    let i = c(t, e.target.x),
                        s = c(t, e.target.y);
                    return `${i}% ${s}%`
                }
            };
            var m = i(84415),
                g = i(51321),
                y = i(68494);
            let f = !1;
            class v extends r.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i,
                        layoutId: s
                    } = this.props, {
                        projection: o
                    } = t;
                    (0, y.$)(P), o && (e.group && e.group.add(o), i && i.register && s && i.register(o), f && o.root.didUpdate(), o.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), o.setOptions({
                        ...o.options,
                        onExitComplete: () => this.safeToRemove()
                    })), u.w.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: i,
                        drag: s,
                        isPresent: n
                    } = this.props, {
                        projection: r
                    } = i;
                    return r && (r.isPresent = n, f = !0, s || t.layoutDependency !== e || void 0 === e || t.isPresent !== n ? r.willUpdate() : this.safeToRemove(), t.isPresent !== n && (n ? r.promote() : r.relegate() || o.Gt.postRender(() => {
                        let t = r.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), n.k.postRender(() => {
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
                    f = !0, s && (s.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(s), i && i.deregister && i.deregister(s))
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

            function x(t) {
                let [e, i] = (0, a.xQ)(), o = (0, r.useContext)(l.L);
                return (0, s.jsx)(v, {
                    ...t,
                    layoutGroup: o,
                    switchLayoutGroup: (0, r.useContext)(h.N),
                    isPresent: e,
                    safeToRemove: i
                })
            }
            let P = {
                borderRadius: {
                    ...p,
                    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                },
                borderTopLeftRadius: p,
                borderTopRightRadius: p,
                borderBottomLeftRadius: p,
                borderBottomRightRadius: p,
                boxShadow: {
                    correct: (t, {
                        treeScale: e,
                        projectionDelta: i
                    }) => {
                        let s = m.f.parse(t);
                        if (s.length > 5) return t;
                        let o = m.f.createTransformer(t),
                            n = +("number" != typeof s[0]),
                            r = i.x.scale * e.x,
                            a = i.y.scale * e.y;
                        s[0 + n] /= r, s[1 + n] /= a;
                        let l = (0, g.k)(r, a, .5);
                        return "number" == typeof s[2 + n] && (s[2 + n] /= l), "number" == typeof s[3 + n] && (s[3 + n] /= l), o(s)
                    }
                }
            }
        }
    }
]);