try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e9db6fb7-decd-40fc-aed2-ba37d12bfc6b", e._sentryDebugIdIdentifier = "sentry-dbid-e9db6fb7-decd-40fc-aed2-ba37d12bfc6b")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [98241], {
        33: (e, t, n) => {
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
        171: (e, t, n) => {
            n.d(t, {
                M: () => i
            });
            let i = e => "mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary
        },
        28474: (e, t, n) => {
            n.d(t, {
                n: () => F
            });
            var i = n(16348),
                r = n(70070),
                o = n(45079);

            function s(e, t) {
                let n = (0, o.K)(e),
                    i = new AbortController;
                return [n, {
                    passive: !0,
                    ...t,
                    signal: i.signal
                }, () => i.abort()]
            }

            function a(e) {
                return !("touch" === e.pointerType || (0, r.D)())
            }
            var l = n(55365),
                u = n(33);

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
                        let [i, r, o] = s(e, n), l = e => {
                            if (!a(e)) return;
                            let {
                                target: n
                            } = e, i = t(n, e);
                            if ("function" != typeof i || !n) return;
                            let o = e => {
                                a(e) && (i(e), n.removeEventListener("pointerleave", o))
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
            var h = n(5216),
                p = n(67947);
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
            var v = n(7268);
            let m = (e, t) => !!t && (e === t || m(e, t.parentElement));
            var y = n(171);
            let b = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
                w = new WeakSet;

            function g(e) {
                return t => {
                    "Enter" === t.key && e(t)
                }
            }

            function A(e, t) {
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
            class C extends u.X {
                mount() {
                    let {
                        current: e
                    } = this.node;
                    e && (this.unmount = function(e, t, n = {}) {
                        let [i, r, o] = s(e, n), a = e => {
                            let i = e.currentTarget;
                            if (!E(e)) return;
                            w.add(i);
                            let o = t(i, e),
                                s = (e, t) => {
                                    window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", l), w.has(i) && w.delete(i), E(e) && "function" == typeof o && o(e, {
                                        success: t
                                    })
                                },
                                a = e => {
                                    s(e, i === window || i === document || n.useGlobalTarget || m(i, e.target))
                                },
                                l = e => {
                                    s(e, !1)
                                };
                            window.addEventListener("pointerup", a, r), window.addEventListener("pointercancel", l, r)
                        };
                        return i.forEach(e => {
                            ((n.useGlobalTarget ? window : e).addEventListener("pointerdown", a, r), (0, v.s)(e)) && (e.addEventListener("focus", e => ((e, t) => {
                                let n = e.currentTarget;
                                if (!n) return;
                                let i = g(() => {
                                    if (w.has(n)) return;
                                    A(n, "down");
                                    let e = g(() => {
                                        A(n, "up")
                                    });
                                    n.addEventListener("keyup", e, t), n.addEventListener("blur", () => A(n, "cancel"), t)
                                });
                                n.addEventListener("keydown", i, t), n.addEventListener("blur", () => n.removeEventListener("keydown", i), t)
                            })(e, r)), b.has(e.tagName) || -1 !== e.tabIndex || e.hasAttribute("tabindex") || (e.tabIndex = 0))
                        }), o
                    }(e, (e, t) => (S(this.node, t, "Start"), (e, {
                        success: t
                    }) => S(this.node, e, t ? "End" : "Cancel")), {
                        useGlobalTarget: this.node.props.globalTapTarget
                    }))
                }
                unmount() {}
            }
            let P = new WeakMap,
                x = new WeakMap,
                T = e => {
                    let t = P.get(e.target);
                    t && t(e)
                },
                L = e => {
                    e.forEach(T)
                },
                I = {
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
                        threshold: "number" == typeof i ? i : I[i]
                    }, s = e => {
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
                    var a = this.node.current;
                    let l = function({
                        root: e,
                        ...t
                    }) {
                        let n = e || document;
                        x.has(n) || x.set(n, {});
                        let i = x.get(n),
                            r = JSON.stringify(t);
                        return i[r] || (i[r] = new IntersectionObserver(L, {
                            root: e,
                            ...t
                        })), i[r]
                    }(o);
                    return P.set(a, s), l.observe(a), () => {
                        P.delete(a), l.unobserve(a)
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
                    Feature: C
                },
                focus: {
                    Feature: f
                },
                hover: {
                    Feature: c
                }
            }
        },
        55365: (e, t, n) => {
            n.d(t, {
                F: () => o,
                e: () => r
            });
            var i = n(171);

            function r(e) {
                return {
                    point: {
                        x: e.pageX,
                        y: e.pageY
                    }
                }
            }
            let o = e => t => (0, i.M)(t) && e(t, r(t))
        },
        60071: (e, t, n) => {
            n.d(t, {
                W: () => A
            });
            var i = n(26703),
                r = n(90124),
                o = n(6084);

            function s(e, t, n, i = 0, r = 1) {
                let o = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t),
                    a = e.size,
                    l = (a - 1) * i;
                return "function" == typeof n ? n(o, a) : 1 === r ? o * i : l - o * i
            }

            function a(e, t, n = {}) {
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
                            for (let d of e.variantChildren) d.notify("AnimationStart", t), u.push(a(d, t, {
                                ...l,
                                delay: n + ("function" == typeof i ? 0 : i) + s(e.variantChildren, d, i, r, o)
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
            var l = n(52093);

            function u(e, t) {
                if (!Array.isArray(t)) return !1;
                let n = t.length;
                if (n !== e.length) return !1;
                for (let i = 0; i < n; i++)
                    if (t[i] !== e[i]) return !1;
                return !0
            }
            var d = n(37954),
                c = n(82049);
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
            var y = n(33);
            class b extends y.X {
                constructor(e) {
                    super(e), e.animationState || (e.animationState = function(e) {
                        let t = t => Promise.all(t.map(({
                                animation: t,
                                options: n
                            }) => (function(e, t, n = {}) {
                                let i;
                                if (e.notify("AnimationStart", t), Array.isArray(t)) i = Promise.all(t.map(t => a(e, t, n)));
                                else if ("string" == typeof t) i = a(e, t, n);
                                else {
                                    let s = "function" == typeof t ? (0, r.K)(e, t, n.custom) : t;
                                    i = Promise.all((0, o.$)(e, s, n))
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

                        function b(o) {
                            let {
                                props: a
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
                            }(e.parent) || {}, b = [], w = new Set, g = {}, A = 1 / 0;
                            for (let t = 0; t < f; t++) {
                                var E, S;
                                let c = p[t],
                                    h = n[c],
                                    f = void 0 !== a[c] ? a[c] : m[c],
                                    C = (0, d.w)(f),
                                    P = c === o ? h.isActive : null;
                                !1 === P && (A = t);
                                let x = f === m[c] && f !== a[c] && C;
                                if (x && v && e.manuallyAnimateOnMount && (x = !1), h.protectedKeys = {
                                        ...g
                                    }, !h.isActive && null === P || !f && !h.prevProp || (0, i.N)(f) || "boolean" == typeof f) continue;
                                let T = (E = h.prevProp, "string" == typeof(S = f) ? S !== E : !!Array.isArray(S) && !u(S, E)),
                                    L = T || c === o && h.isActive && !x && C || t > A && C,
                                    I = !1,
                                    k = Array.isArray(f) ? f : [f],
                                    F = k.reduce(y(c), {});
                                !1 === P && (F = {});
                                let {
                                    prevResolvedValues: O = {}
                                } = h, V = {
                                    ...O,
                                    ...F
                                }, M = t => {
                                    L = !0, w.has(t) && (I = !0, w.delete(t)), h.needsAnimating[t] = !0;
                                    let n = e.getValue(t);
                                    n && (n.liveStyle = !1)
                                };
                                for (let e in V) {
                                    let t = F[e],
                                        n = O[e];
                                    if (!g.hasOwnProperty(e))((0, l.p)(t) && (0, l.p)(n) ? u(t, n) : t === n) ? void 0 !== t && w.has(e) ? M(e) : h.protectedKeys[e] = !0 : null != t ? M(e) : w.add(e)
                                }
                                h.prevProp = f, h.prevResolvedValues = F, h.isActive && (g = {
                                    ...g,
                                    ...F
                                }), v && e.blockInitialAnimation && (L = !1);
                                let K = x && T,
                                    _ = !K || I;
                                L && _ && b.push(...k.map(t => {
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
                                            n.delay = s(i.enteringChildren, e, t)
                                        }
                                    }
                                    return {
                                        animation: t,
                                        options: n
                                    }
                                }))
                            }
                            if (w.size) {
                                let t = {};
                                if ("boolean" != typeof a.initial) {
                                    let n = (0, r.K)(e, Array.isArray(a.initial) ? a.initial[0] : a.initial);
                                    n && n.transition && (t.transition = n.transition)
                                }
                                w.forEach(n => {
                                    let i = e.getBaseTarget(n),
                                        r = e.getValue(n);
                                    r && (r.liveStyle = !0), t[n] = i ?? null
                                }), b.push({
                                    animation: t
                                })
                            }
                            let C = !!b.length;
                            return v && (!1 === a.initial || a.initial === a.animate) && !e.manuallyAnimateOnMount && (C = !1), v = !1, C ? t(b) : Promise.resolve()
                        }
                        return {
                            animateChanges: b,
                            setActive: function(t, i) {
                                if (n[t].isActive === i) return Promise.resolve();
                                e.variantChildren?.forEach(e => e.animationState?.setActive(t, i)), n[t].isActive = i;
                                let r = b(t);
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
            let w = 0;
            class g extends y.X {
                constructor() {
                    super(...arguments), this.id = w++
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
            let A = {
                animation: {
                    Feature: b
                },
                exit: {
                    Feature: g
                }
            }
        },
        67947: (e, t, n) => {
            n.d(t, {
                k: () => i
            });

            function i(e, t, n, r = {
                passive: !0
            }) {
                return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
            }
        },
        70070: (e, t, n) => {
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
        79710: (e, t, n) => {
            n.d(t, {
                J: () => a
            });
            var i = n(90337),
                r = n(21150),
                o = n(86242),
                s = n(4468);
            let a = (e, t) => (0, s.Q)(e) ? new o.l(t) : new r.M(t, {
                allowProjection: e !== i.Fragment
            })
        }
    }
]);