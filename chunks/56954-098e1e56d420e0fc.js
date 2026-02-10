! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
        e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                if (null != n)
                    for (var i in n) n.hasOwnProperty(i) && (e[i] = n[i])
            }
            return e
        }({}, e._sentryModuleMetadata[(new e.Error).stack], {
            "_sentryBundlerPluginAppKey:hexagon-web": !0
        })
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [56954], {
        23916: (e, t, n) => {
            n.d(t, {
                J: () => s
            });
            var i = n(3728),
                r = n(2780),
                o = n(78851),
                a = n(56712);
            let s = (e, t) => (0, a.Q)(e) ? new o.l(t) : new r.M(t, {
                allowProjection: e !== i.Fragment
            })
        },
        25183: (e, t, n) => {
            n.d(t, {
                X: () => i
            });
            class i {
                constructor(e) {
                    this.isMounted = !1, this.node = e
                }
                update() {}
            }
        },
        32813: (e, t, n) => {
            n.d(t, {
                M: () => i
            });
            let i = e => "mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary
        },
        35160: (e, t, n) => {
            n.d(t, {
                D: () => r,
                I: () => i
            });
            let i = {
                x: !1,
                y: !1
            };

            function r() {
                return i.x || i.y
            }
        },
        48698: (e, t, n) => {
            n.d(t, {
                n: () => F
            });
            var i = n(41798),
                r = n(35160),
                o = n(60857);

            function a(e, t) {
                let n = (0, o.K)(e),
                    i = new AbortController;
                return [n, {
                    passive: !0,
                    ...t,
                    signal: i.signal
                }, () => i.abort()]
            }

            function s(e) {
                return !("touch" === e.pointerType || (0, r.D)())
            }
            var l = n(91687),
                u = n(25183);

            function d(e, t, n) {
                let {
                    props: r
                } = e;
                e.animationState && r.whileHover && e.animationState.setActive("whileHover", "Start" === n);
                let o = r["onHover" + n];
                o && i.Gt.postRender(() => o(t, (0, l.e)(t)))
            }
            class c extends u.X {
                mount() {
                    let {
                        current: e
                    } = this.node;
                    e && (this.unmount = function(e, t, n = {}) {
                        let [i, r, o] = a(e, n), l = e => {
                            if (!s(e)) return;
                            let {
                                target: n
                            } = e, i = t(n, e);
                            if ("function" != typeof i || !n) return;
                            let o = e => {
                                s(e) && (i(e), n.removeEventListener("pointerleave", o))
                            };
                            n.addEventListener("pointerleave", o, r)
                        };
                        return i.forEach(e => {
                            e.addEventListener("pointerenter", l, r)
                        }), o
                    }(e, (e, t) => (d(this.node, t, "Start"), e => d(this.node, e, "End"))))
                }
                unmount() {}
            }
            var h = n(10506),
                p = n(73113);
            class f extends u.X {
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
                    this.unmount = (0, h.F)((0, p.k)(this.node.current, "focus", () => this.onFocus()), (0, p.k)(this.node.current, "blur", () => this.onBlur()))
                }
                unmount() {}
            }
            var v = n(89682);
            let m = (e, t) => !!t && (e === t || m(e, t.parentElement));
            var y = n(32813);
            let w = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
                g = new WeakSet;

            function A(e) {
                return t => {
                    "Enter" === t.key && e(t)
                }
            }

            function b(e, t) {
                e.dispatchEvent(new PointerEvent("pointer" + t, {
                    isPrimary: !0,
                    bubbles: !0
                }))
            }

            function E(e) {
                return (0, y.M)(e) && !(0, r.D)()
            }

            function S(e, t, n) {
                let {
                    props: r
                } = e;
                if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
                e.animationState && r.whileTap && e.animationState.setActive("whileTap", "Start" === n);
                let o = r["onTap" + ("End" === n ? "" : n)];
                o && i.Gt.postRender(() => o(t, (0, l.e)(t)))
            }
            class P extends u.X {
                mount() {
                    let {
                        current: e
                    } = this.node;
                    e && (this.unmount = function(e, t, n = {}) {
                        let [i, r, o] = a(e, n), s = e => {
                            let i = e.currentTarget;
                            if (!E(e)) return;
                            g.add(i);
                            let o = t(i, e),
                                a = (e, t) => {
                                    window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", l), g.has(i) && g.delete(i), E(e) && "function" == typeof o && o(e, {
                                        success: t
                                    })
                                },
                                s = e => {
                                    a(e, i === window || i === document || n.useGlobalTarget || m(i, e.target))
                                },
                                l = e => {
                                    a(e, !1)
                                };
                            window.addEventListener("pointerup", s, r), window.addEventListener("pointercancel", l, r)
                        };
                        return i.forEach(e => {
                            ((n.useGlobalTarget ? window : e).addEventListener("pointerdown", s, r), (0, v.s)(e)) && (e.addEventListener("focus", e => ((e, t) => {
                                let n = e.currentTarget;
                                if (!n) return;
                                let i = A(() => {
                                    if (g.has(n)) return;
                                    b(n, "down");
                                    let e = A(() => {
                                        b(n, "up")
                                    });
                                    n.addEventListener("keyup", e, t), n.addEventListener("blur", () => b(n, "cancel"), t)
                                });
                                n.addEventListener("keydown", i, t), n.addEventListener("blur", () => n.removeEventListener("keydown", i), t)
                            })(e, r)), w.has(e.tagName) || -1 !== e.tabIndex || e.hasAttribute("tabindex") || (e.tabIndex = 0))
                        }), o
                    }(e, (e, t) => (S(this.node, t, "Start"), (e, {
                        success: t
                    }) => S(this.node, e, t ? "End" : "Cancel")), {
                        useGlobalTarget: this.node.props.globalTapTarget
                    }))
                }
                unmount() {}
            }
            let C = new WeakMap,
                x = new WeakMap,
                T = e => {
                    let t = C.get(e.target);
                    t && t(e)
                },
                M = e => {
                    e.forEach(T)
                },
                L = {
                    some: 0,
                    all: 1
                };
            class k extends u.X {
                constructor() {
                    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                }
                startObserver() {
                    this.unmount();
                    let {
                        viewport: e = {}
                    } = this.node.getProps(), {
                        root: t,
                        margin: n,
                        amount: i = "some",
                        once: r
                    } = e, o = {
                        root: t ? t.current : void 0,
                        rootMargin: n,
                        threshold: "number" == typeof i ? i : L[i]
                    }, a = e => {
                        let {
                            isIntersecting: t
                        } = e;
                        if (this.isInView === t || (this.isInView = t, r && !t && this.hasEnteredView)) return;
                        t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
                        let {
                            onViewportEnter: n,
                            onViewportLeave: i
                        } = this.node.getProps(), o = t ? n : i;
                        o && o(e)
                    };
                    var s = this.node.current;
                    let l = function({
                        root: e,
                        ...t
                    }) {
                        let n = e || document;
                        x.has(n) || x.set(n, {});
                        let i = x.get(n),
                            r = JSON.stringify(t);
                        return i[r] || (i[r] = new IntersectionObserver(M, {
                            root: e,
                            ...t
                        })), i[r]
                    }(o);
                    return C.set(s, a), l.observe(s), () => {
                        C.delete(s), l.unobserve(s)
                    }
                }
                mount() {
                    this.startObserver()
                }
                update() {
                    if ("undefined" == typeof IntersectionObserver) return;
                    let {
                        props: e,
                        prevProps: t
                    } = this.node;
                    ["amount", "margin", "root"].some(function({
                        viewport: e = {}
                    }, {
                        viewport: t = {}
                    } = {}) {
                        return n => e[n] !== t[n]
                    }(e, t)) && this.startObserver()
                }
                unmount() {}
            }
            let F = {
                inView: {
                    Feature: k
                },
                tap: {
                    Feature: P
                },
                focus: {
                    Feature: f
                },
                hover: {
                    Feature: c
                }
            }
        },
        67992: (e, t, n) => {
            n.d(t, {
                W: () => b
            });
            var i = n(53629),
                r = n(4850),
                o = n(16764);

            function a(e, t, n, i = 0, r = 1) {
                let o = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t),
                    s = e.size,
                    l = (s - 1) * i;
                return "function" == typeof n ? n(o, s) : 1 === r ? o * i : l - o * i
            }

            function s(e, t, n = {}) {
                let i = (0, r.K)(e, t, "exit" === n.type ? e.presenceContext?.custom : void 0),
                    {
                        transition: l = e.getDefaultTransition() || {}
                    } = i || {};
                n.transitionOverride && (l = n.transitionOverride);
                let u = i ? () => Promise.all((0, o.$)(e, i, n)) : () => Promise.resolve(),
                    d = e.variantChildren && e.variantChildren.size ? (i = 0) => {
                        let {
                            delayChildren: r = 0,
                            staggerChildren: o,
                            staggerDirection: u
                        } = l;
                        return function(e, t, n = 0, i = 0, r = 0, o = 1, l) {
                            let u = [];
                            for (let d of e.variantChildren) d.notify("AnimationStart", t), u.push(s(d, t, {
                                ...l,
                                delay: n + ("function" == typeof i ? 0 : i) + a(e.variantChildren, d, i, r, o)
                            }).then(() => d.notify("AnimationComplete", t)));
                            return Promise.all(u)
                        }(e, t, i, r, o, u, n)
                    } : () => Promise.resolve(),
                    {
                        when: c
                    } = l;
                if (!c) return Promise.all([u(), d(n.delay)]);
                {
                    let [e, t] = "beforeChildren" === c ? [u, d] : [d, u];
                    return e().then(() => t())
                }
            }
            var l = n(49951);

            function u(e, t) {
                if (!Array.isArray(t)) return !1;
                let n = t.length;
                if (n !== e.length) return !1;
                for (let i = 0; i < n; i++)
                    if (t[i] !== e[i]) return !1;
                return !0
            }
            var d = n(18684),
                c = n(10491);
            let h = c._.length,
                p = [...c.U].reverse(),
                f = c.U.length;

            function v(e = !1) {
                return {
                    isActive: e,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }

            function m() {
                return {
                    animate: v(!0),
                    whileInView: v(),
                    whileHover: v(),
                    whileTap: v(),
                    whileDrag: v(),
                    whileFocus: v(),
                    exit: v()
                }
            }
            var y = n(25183);
            class w extends y.X {
                constructor(e) {
                    super(e), e.animationState || (e.animationState = function(e) {
                        let t = t => Promise.all(t.map(({
                                animation: t,
                                options: n
                            }) => (function(e, t, n = {}) {
                                let i;
                                if (e.notify("AnimationStart", t), Array.isArray(t)) i = Promise.all(t.map(t => s(e, t, n)));
                                else if ("string" == typeof t) i = s(e, t, n);
                                else {
                                    let a = "function" == typeof t ? (0, r.K)(e, t, n.custom) : t;
                                    i = Promise.all((0, o.$)(e, a, n))
                                }
                                return i.then(() => {
                                    e.notify("AnimationComplete", t)
                                })
                            })(e, t, n))),
                            n = m(),
                            v = !0,
                            y = t => (n, i) => {
                                let o = (0, r.K)(e, i, "exit" === t ? e.presenceContext?.custom : void 0);
                                if (o) {
                                    let {
                                        transition: e,
                                        transitionEnd: t,
                                        ...i
                                    } = o;
                                    n = {
                                        ...n,
                                        ...i,
                                        ...t
                                    }
                                }
                                return n
                            };

                        function w(o) {
                            let {
                                props: s
                            } = e, m = function e(t) {
                                if (!t) return;
                                if (!t.isControllingVariants) {
                                    let n = t.parent && e(t.parent) || {};
                                    return void 0 !== t.props.initial && (n.initial = t.props.initial), n
                                }
                                let n = {};
                                for (let e = 0; e < h; e++) {
                                    let i = c._[e],
                                        r = t.props[i];
                                    ((0, d.w)(r) || !1 === r) && (n[i] = r)
                                }
                                return n
                            }(e.parent) || {}, w = [], g = new Set, A = {}, b = 1 / 0;
                            for (let t = 0; t < f; t++) {
                                var E, S;
                                let c = p[t],
                                    h = n[c],
                                    f = void 0 !== s[c] ? s[c] : m[c],
                                    P = (0, d.w)(f),
                                    C = c === o ? h.isActive : null;
                                !1 === C && (b = t);
                                let x = f === m[c] && f !== s[c] && P;
                                if (x && v && e.manuallyAnimateOnMount && (x = !1), h.protectedKeys = {
                                        ...A
                                    }, !h.isActive && null === C || !f && !h.prevProp || (0, i.N)(f) || "boolean" == typeof f) continue;
                                let T = (E = h.prevProp, "string" == typeof(S = f) ? S !== E : !!Array.isArray(S) && !u(S, E)),
                                    M = T || c === o && h.isActive && !x && P || t > b && P,
                                    L = !1,
                                    k = Array.isArray(f) ? f : [f],
                                    F = k.reduce(y(c), {});
                                !1 === C && (F = {});
                                let {
                                    prevResolvedValues: O = {}
                                } = h, V = {
                                    ...O,
                                    ...F
                                }, I = t => {
                                    M = !0, g.has(t) && (L = !0, g.delete(t)), h.needsAnimating[t] = !0;
                                    let n = e.getValue(t);
                                    n && (n.liveStyle = !1)
                                };
                                for (let e in V) {
                                    let t = F[e],
                                        n = O[e];
                                    if (!A.hasOwnProperty(e))((0, l.p)(t) && (0, l.p)(n) ? u(t, n) : t === n) ? void 0 !== t && g.has(e) ? I(e) : h.protectedKeys[e] = !0 : null != t ? I(e) : g.add(e)
                                }
                                h.prevProp = f, h.prevResolvedValues = F, h.isActive && (A = {
                                    ...A,
                                    ...F
                                }), v && e.blockInitialAnimation && (M = !1);
                                let K = x && T,
                                    _ = !K || L;
                                M && _ && w.push(...k.map(t => {
                                    let n = {
                                        type: c
                                    };
                                    if ("string" == typeof t && v && !K && e.manuallyAnimateOnMount && e.parent) {
                                        let {
                                            parent: i
                                        } = e, o = (0, r.K)(i, t);
                                        if (i.enteringChildren && o) {
                                            let {
                                                delayChildren: t
                                            } = o.transition || {};
                                            n.delay = a(i.enteringChildren, e, t)
                                        }
                                    }
                                    return {
                                        animation: t,
                                        options: n
                                    }
                                }))
                            }
                            if (g.size) {
                                let t = {};
                                if ("boolean" != typeof s.initial) {
                                    let n = (0, r.K)(e, Array.isArray(s.initial) ? s.initial[0] : s.initial);
                                    n && n.transition && (t.transition = n.transition)
                                }
                                g.forEach(n => {
                                    let i = e.getBaseTarget(n),
                                        r = e.getValue(n);
                                    r && (r.liveStyle = !0), t[n] = i ?? null
                                }), w.push({
                                    animation: t
                                })
                            }
                            let P = !!w.length;
                            return v && (!1 === s.initial || s.initial === s.animate) && !e.manuallyAnimateOnMount && (P = !1), v = !1, P ? t(w) : Promise.resolve()
                        }
                        return {
                            animateChanges: w,
                            setActive: function(t, i) {
                                if (n[t].isActive === i) return Promise.resolve();
                                e.variantChildren?.forEach(e => e.animationState?.setActive(t, i)), n[t].isActive = i;
                                let r = w(t);
                                for (let e in n) n[e].protectedKeys = {};
                                return r
                            },
                            setAnimateFunction: function(n) {
                                t = n(e)
                            },
                            getState: () => n,
                            reset: () => {
                                n = m()
                            }
                        }
                    }(e))
                }
                updateAnimationControlsSubscription() {
                    let {
                        animate: e
                    } = this.node.getProps();
                    (0, i.N)(e) && (this.unmountControls = e.subscribe(this.node))
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
            let g = 0;
            class A extends y.X {
                constructor() {
                    super(...arguments), this.id = g++
                }
                update() {
                    if (!this.node.presenceContext) return;
                    let {
                        isPresent: e,
                        onExitComplete: t
                    } = this.node.presenceContext, {
                        isPresent: n
                    } = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || e === n) return;
                    let i = this.node.animationState.setActive("exit", !e);
                    t && !e && i.then(() => {
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
            let b = {
                animation: {
                    Feature: w
                },
                exit: {
                    Feature: A
                }
            }
        },
        73113: (e, t, n) => {
            n.d(t, {
                k: () => i
            });

            function i(e, t, n, r = {
                passive: !0
            }) {
                return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
            }
        },
        91687: (e, t, n) => {
            n.d(t, {
                F: () => o,
                e: () => r
            });
            var i = n(32813);

            function r(e) {
                return {
                    point: {
                        x: e.pageX,
                        y: e.pageY
                    }
                }
            }
            let o = e => t => (0, i.M)(t) && e(t, r(t))
        }
    }
]);