(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 830146, e => {
    "use strict";
    var t = e.i(467211),
        o = e.i(679933),
        r = e.i(3931);
    let n = (0, r.createContext)({
            placement: "bottom"
        }),
        l = (0, r.forwardRef)(function(e, l) {
            [e, l] = (0, t.useContextProps)(e, l, n);
            let i = e.placement,
                a = {
                    position: "absolute",
                    transform: "top" === i || "bottom" === i ? "translateX(-50%)" : "translateY(-50%)"
                };
            null != i && (a[i] = "100%");
            let s = (0, t.useRenderProps)({
                ...e,
                defaultClassName: "react-aria-OverlayArrow",
                values: {
                    placement: i
                }
            });
            s.style && Object.keys(s.style).forEach(e => void 0 === s.style[e] && delete s.style[e]);
            let c = (0, o.filterDOMProps)(e);
            return r.default.createElement(t.dom.div, {
                ...c,
                ...s,
                style: {
                    ...a,
                    ...s.style
                },
                ref: l,
                "data-placement": i
            })
        });
    e.s(["OverlayArrow", 0, l, "OverlayArrowContext", 0, n])
}, 975950, e => {
    "use strict";
    var t = e.i(904960),
        o = e.i(776050),
        r = e.i(747922);
    let n = {
            top: "top",
            bottom: "top",
            left: "left",
            right: "left"
        },
        l = {
            top: "bottom",
            bottom: "top",
            left: "right",
            right: "left"
        },
        i = {
            top: "left",
            left: "top"
        },
        a = {
            top: "height",
            left: "width"
        },
        s = {
            width: "totalWidth",
            height: "totalHeight"
        },
        c = {};

    function u(e, o) {
        let r = 0,
            n = 0,
            l = 0,
            i = 0,
            a = 0,
            s = 0,
            c = {},
            u = (o?.scale ?? 1) > 1;
        if ("BODY" === e.tagName || "HTML" === e.tagName) {
            let t = document.documentElement;
            l = t.clientWidth, i = t.clientHeight, r = o?.width ?? l, n = o?.height ?? i, c.top = t.scrollTop || e.scrollTop, c.left = t.scrollLeft || e.scrollLeft, o && (a = o.offsetTop, s = o.offsetLeft)
        } else({
            width: r,
            height: n,
            top: a,
            left: s
        } = h(e, !1)), c.top = e.scrollTop, c.left = e.scrollLeft, l = r, i = n;
        return (0, t.isWebKit)() && ("BODY" === e.tagName || "HTML" === e.tagName) && u && (c.top = 0, c.left = 0, a = o?.pageTop ?? 0, s = o?.pageLeft ?? 0), {
            width: r,
            height: n,
            totalWidth: l,
            totalHeight: i,
            scroll: c,
            top: a,
            left: s
        }
    }

    function f(e, t, o, r, l, i, s) {
        let c = l.scroll[e] ?? 0,
            u = r[a[e]],
            f = s[e] + r.scroll[n[e]] + i,
            p = s[e] + r.scroll[n[e]] + u - i,
            d = t - c + r.scroll[n[e]] + s[e] - r[n[e]],
            m = t - c + o + r.scroll[n[e]] + s[e] - r[n[e]];
        return d < f ? f - d : m > p ? Math.max(p - m, f - d) : 0
    }

    function p(e) {
        if (c[e]) return c[e];
        let [t, o] = e.split(" "), r = n[t] || "right", l = i[r];
        n[o] || (o = "center");
        let s = a[r],
            u = a[l];
        return c[e] = {
            placement: t,
            crossPlacement: o,
            axis: r,
            crossAxis: l,
            size: s,
            crossSize: u
        }, c[e]
    }

    function d(e, t, o, n, i, a, c, u, f, p, d) {
        let {
            placement: m,
            crossPlacement: g,
            axis: h,
            crossAxis: w,
            size: b,
            crossSize: y
        } = n, v = {};
        v[w] = e[w] ?? 0, "center" === g ? v[w] += ((e[y] ?? 0) - (o[y] ?? 0)) / 2 : g !== w && (v[w] += (e[y] ?? 0) - (o[y] ?? 0)), v[w] += a;
        let L = e[w] - o[y] + f + p,
            E = e[w] + e[y] - f - p;
        if (v[w] = (0, r.clamp)(v[w], L, E), m === h) {
            let t = u ? d[b] : d[s[b]];
            v[l[h]] = Math.floor(t - e[h] + i)
        } else v[h] = Math.floor(e[h] + e[b] + i);
        return v
    }

    function m(e, t, o, r, n, i, a, s) {
        let {
            placement: c,
            axis: u,
            size: f
        } = i;
        return c === u ? Math.max(0, o[u] - (a.scroll[u] ?? 0) - (e[u] + (s ? t[u] : 0)) - (r[u] ?? 0) - r[l[u]] - n) : Math.max(0, e[f] + e[u] + (s ? t[u] : 0) - o[u] - o[f] + (a.scroll[u] ?? 0) - (r[u] ?? 0) - r[l[u]] - n)
    }

    function g(e, t) {
        let {
            top: o,
            left: r,
            width: n,
            height: l
        } = e.getBoundingClientRect();
        return t && e instanceof e.ownerDocument.defaultView.HTMLElement && (n = e.offsetWidth, l = e.offsetHeight), {
            top: o,
            left: r,
            width: n,
            height: l
        }
    }

    function h(e, t, o) {
        let {
            top: r,
            left: n,
            width: l,
            height: i
        } = o || g(e, t), {
            scrollTop: a,
            scrollLeft: s,
            clientTop: c,
            clientLeft: u
        } = document.documentElement;
        return {
            top: r + a - c,
            left: n + s - u,
            width: l,
            height: i
        }
    }

    function w(e, t, o, r) {
        let n, l = window.getComputedStyle(e);
        if ("fixed" === l.position) n = r || g(e, o);
        else {
            n = h(e, o, r);
            let l = h(t, o),
                i = window.getComputedStyle(t);
            l.top += (parseInt(i.borderTopWidth, 10) || 0) - t.scrollTop, l.left += (parseInt(i.borderLeftWidth, 10) || 0) - t.scrollLeft, n.top -= l.top, n.left -= l.left
        }
        return n.top -= parseInt(l.marginTop, 10) || 0, n.left -= parseInt(l.marginLeft, 10) || 0, n
    }

    function b(e) {
        let t = window.getComputedStyle(e);
        return "none" !== t.transform || /transform|perspective/.test(t.willChange) || "none" !== t.filter || "paint" === t.contain || "backdropFilter" in t && "none" !== t.backdropFilter || "WebkitBackdropFilter" in t && "none" !== t.WebkitBackdropFilter
    }
    e.s(["calculatePosition", 0, function(e) {
        let t, i, {
                placement: a,
                targetNode: c,
                overlayNode: y,
                scrollNode: v,
                padding: L,
                shouldFlip: E,
                boundaryElement: x,
                offset: O,
                crossOffset: C,
                maxHeight: T,
                arrowSize: P = 0,
                arrowBoundaryOffset: R = 0,
                targetRect: H
            } = e,
            M = "u" > typeof document ? window.visualViewport : null,
            A = y instanceof HTMLElement ? function(e) {
                let t = e.offsetParent;
                if (t && t === document.body && "static" === window.getComputedStyle(t).position && !b(t) && (t = document.documentElement), null == t)
                    for (t = e.parentElement; t && !b(t);) t = t.parentElement;
                return t || document.documentElement
            }(y) : document.documentElement,
            S = A === document.documentElement,
            z = window.getComputedStyle(A).position,
            F = S ? h(c, !1, H) : w(c, A, !1, H);
        if (!S) {
            let {
                marginTop: e,
                marginLeft: t
            } = window.getComputedStyle(c);
            F.top += parseInt(e, 10) || 0, F.left += parseInt(t, 10) || 0
        }
        let N = h(y, !0),
            k = {
                top: parseInt((t = window.getComputedStyle(y)).marginTop, 10) || 0,
                bottom: parseInt(t.marginBottom, 10) || 0,
                left: parseInt(t.marginLeft, 10) || 0,
                right: parseInt(t.marginRight, 10) || 0
            };
        N.width += (k.left ?? 0) + (k.right ?? 0), N.height += (k.top ?? 0) + (k.bottom ?? 0), v.scrollTop, v.scrollLeft, v.scrollWidth, v.scrollHeight;
        let B = u(x, M),
            W = u(A, M);
        if ("BODY" !== x.tagName && "HTML" !== x.tagName || S) i = ("BODY" === x.tagName || "HTML" === x.tagName) && S ? {
            top: 0,
            left: 0,
            width: 0,
            height: 0
        } : w(x, A, !1);
        else {
            let e = g(A, !1);
            i = {
                top: -(e.top - B.top),
                left: -(e.left - B.left),
                width: 0,
                height: 0
            }
        }
        return function(e, t, o, i, a, c, u, g, h, w, b, y, v, L, E, x, O) {
            var C, T, P;
            let R, H, M, A = p(e),
                {
                    size: S,
                    crossAxis: z,
                    crossSize: F,
                    placement: N,
                    crossPlacement: k
                } = A,
                B = d(t, u, o, A, w, b, h, y, L, E, g),
                W = w,
                I = m(u, h, t, i, a + w, A, g, x);
            if (c && o[S] > I) {
                let e = p(`${l[N]} ${k}`),
                    r = d(t, u, o, e, w, b, h, y, L, E, g);
                m(u, h, t, i, a + w, e, g, x) > I && (A = e, B = r, W = w)
            }
            let j = "bottom";
            "top" === A.axis ? "top" === A.placement ? j = "top" : "bottom" === A.placement && (j = "bottom") : "top" === A.crossAxis && ("top" === A.crossPlacement ? j = "bottom" : "bottom" === A.crossPlacement && (j = "top"));
            let V = f(z, B[z], o[F], u, g, a, h);
            B[z] += V;
            let D = (C = B, T = o.height, P = j, R = (null != C.top ? C.top : g[s.height] - (C.bottom ?? 0) - T) - (g.scroll.top ?? 0), H = x ? h.top : 0, M = {
                top: Math.max(u.top + H, (O?.offsetTop ?? u.top) + H),
                bottom: Math.min(u.top + u.height + H, (O?.offsetTop ?? 0) + (O?.height ?? 0))
            }, "top" !== P ? Math.max(0, M.bottom - R - ((i.top ?? 0) + (i.bottom ?? 0) + a)) : Math.max(0, R + T - M.top - ((i.top ?? 0) + (i.bottom ?? 0) + a)));
            v && v < D && (D = v), o.height = Math.min(o.height, D), V = f(z, (B = d(t, u, o, A, W, b, h, y, L, E, g))[z], o[F], u, g, a, h), B[z] += V;
            let Z = {},
                Y = t[z] - B[z] - i[n[z]],
                U = Y + .5 * t[F],
                K = L / 2 + E,
                X = "left" === n[z] ? (i.left ?? 0) + (i.right ?? 0) : (i.top ?? 0) + (i.bottom ?? 0),
                $ = o[F] - X - L / 2 - E,
                _ = t[z] + L / 2 - (B[z] + i[n[z]]),
                q = t[z] + t[F] - L / 2 - (B[z] + i[n[z]]),
                G = (0, r.clamp)(U, _, q);
            Z[z] = (0, r.clamp)(G, K, $), ({
                placement: N,
                crossPlacement: k
            } = A), L ? Y = Z[z] : "right" === k ? Y += t[F] : "center" === k && (Y += t[F] / 2);
            let J = "left" === N || "top" === N ? o[S] : 0,
                Q = {
                    x: "top" === N || "bottom" === N ? Y : J,
                    y: "left" === N || "right" === N ? Y : J
                };
            return {
                position: B,
                maxHeight: D,
                arrowOffsetLeft: Z.left,
                arrowOffsetTop: Z.top,
                placement: N,
                triggerAnchorPoint: Q
            }
        }(a, F, N, k, L, E, B, W, i, O, C, !!z && "static" !== z, T, P, R, (0, o.nodeContains)(x, A), M)
    }, "getRect", 0, g])
}, 101933, 138381, e => {
    "use strict";
    var t = e.i(776050),
        o = e.i(3931);
    let r = new WeakMap;
    e.s(["onCloseMap", 0, r, "useCloseOnScroll", 0, function(e) {
        let {
            triggerRef: n,
            isOpen: l,
            onClose: i
        } = e;
        (0, o.useEffect)(() => {
            if (!l || null === i) return;
            let e = e => {
                let o = (0, t.getEventTarget)(e);
                if (!n.current || o instanceof Node && !(0, t.nodeContains)(o, n.current) || o instanceof HTMLInputElement || o instanceof HTMLTextAreaElement) return;
                let l = i || r.get(n.current);
                l && l()
            };
            return window.addEventListener("scroll", e, !0), () => {
                window.removeEventListener("scroll", e, !0)
            }
        }, [l, i, n])
    }], 101933);
    var n = e.i(600939);
    e.s(["useResizeObserver", 0, function(e) {
        let {
            ref: t,
            box: r,
            onResize: l
        } = e, i = (0, n.useEffectEvent)(l);
        (0, o.useEffect)(() => {
            let e = t?.current;
            if (e)
                if (void 0 === window.ResizeObserver) return window.addEventListener("resize", i, !1), () => {
                    window.removeEventListener("resize", i, !1)
                };
                else {
                    let t = new window.ResizeObserver(e => {
                        e.length && i()
                    });
                    return t.observe(e, {
                        box: r
                    }), () => {
                        e && t.unobserve(e)
                    }
                }
        }, [t, r])
    }], 138381)
}, 879537, e => {
    "use strict";
    var t = e.i(975950),
        o = e.i(776050),
        r = e.i(101933),
        n = e.i(185559),
        l = e.i(876728),
        i = e.i(138381),
        a = e.i(3931);
    let s = "u" > typeof document ? window.visualViewport : null;
    e.s(["useOverlayPosition", 0, function(e) {
        var c;
        let {
            direction: u
        } = (0, l.useLocale)(), {
            arrowSize: f,
            targetRef: p,
            overlayRef: d,
            arrowRef: m,
            scrollRef: g = d,
            placement: h = "bottom",
            containerPadding: w = 12,
            shouldFlip: b = !0,
            boundaryElement: y = "u" > typeof document ? document.body : null,
            offset: v = 0,
            crossOffset: L = 0,
            shouldUpdatePosition: E = !0,
            isOpen: x = !0,
            onClose: O,
            maxHeight: C,
            arrowBoundaryOffset: T = 0,
            getTargetRect: P
        } = e, [R, H] = (0, a.useState)(null), M = [E, h, d.current, p.current, m?.current, g.current, w, b, y, v, L, x, u, C, T, f], A = (0, a.useRef)(s?.scale);
        (0, a.useEffect)(() => {
            x && (A.current = s?.scale)
        }, [x]);
        let S = (0, a.useCallback)(() => {
            var e;
            if (!1 === E || !x || !d.current || !p.current || !y || s?.scale !== A.current) return;
            let r = null;
            if (g.current && (0, o.isFocusWithin)(g.current)) {
                let e = (0, o.getActiveElement)()?.getBoundingClientRect(),
                    t = g.current.getBoundingClientRect();
                (r = {
                    type: "top",
                    offset: (e?.top ?? 0) - t.top
                }).offset > t.height / 2 && (r.type = "bottom", r.offset = (e?.bottom ?? 0) - t.bottom)
            }
            let n = d.current;
            !C && d.current && (n.style.top = "0px", n.style.bottom = "", n.style.maxHeight = (window.visualViewport?.height ?? window.innerHeight) + "px");
            let l = (0, t.calculatePosition)({
                placement: (e = h, "rtl" === u ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right")),
                overlayNode: d.current,
                targetNode: p.current,
                scrollNode: g.current || d.current,
                padding: w,
                shouldFlip: b,
                boundaryElement: y,
                offset: v,
                crossOffset: L,
                maxHeight: C,
                arrowSize: f ?? (m?.current ? (0, t.getRect)(m.current, !0).width : 0),
                arrowBoundaryOffset: T,
                targetRect: P?.(p.current)
            });
            if (!l.position) return;
            n.style.top = "", n.style.bottom = "", n.style.left = "", n.style.right = "", Object.keys(l.position).forEach(e => n.style[e] = l.position[e] + "px"), n.style.maxHeight = null != l.maxHeight ? l.maxHeight + "px" : "";
            let i = (0, o.getActiveElement)();
            if (r && i && g.current) {
                let e = i.getBoundingClientRect(),
                    t = g.current.getBoundingClientRect(),
                    o = e[r.type] - t[r.type];
                g.current.scrollTop += o - r.offset
            }
            H(l)
        }, M);
        (0, n.useLayoutEffect)(S, M), c = S, (0, n.useLayoutEffect)(() => (window.addEventListener("resize", c, !1), () => {
            window.removeEventListener("resize", c, !1)
        }), [c]), (0, i.useResizeObserver)({
            ref: d,
            onResize: S
        }), (0, i.useResizeObserver)({
            ref: p,
            onResize: S
        });
        let z = (0, a.useRef)(!1);
        (0, n.useLayoutEffect)(() => {
            let e, t = () => {
                    z.current = !0, clearTimeout(e), e = setTimeout(() => {
                        z.current = !1
                    }, 500), S()
                },
                o = () => {
                    z.current && t()
                };
            return s?.addEventListener("resize", t), s?.addEventListener("scroll", o), () => {
                s?.removeEventListener("resize", t), s?.removeEventListener("scroll", o)
            }
        }, [S]);
        let F = (0, a.useCallback)(() => {
            z.current || O?.()
        }, [O, z]);
        return (0, r.useCloseOnScroll)({
            triggerRef: p,
            isOpen: x,
            onClose: O && F
        }), {
            overlayProps: {
                style: {
                    position: R ? "absolute" : "fixed",
                    top: R ? void 0 : 0,
                    left: R ? void 0 : 0,
                    zIndex: 1e5,
                    ...R?.position,
                    maxHeight: R?.maxHeight ?? "100vh"
                }
            },
            placement: R?.placement ?? null,
            triggerAnchorPoint: R?.triggerAnchorPoint ?? null,
            arrowProps: {
                "aria-hidden": "true",
                role: "presentation",
                style: {
                    left: R?.arrowOffsetLeft,
                    top: R?.arrowOffsetTop
                }
            },
            updatePosition: S
        }
    }])
}, 852120, e => {
    "use strict";
    var t = e.i(3931);
    let o = (0, t.createContext)({});
    e.s(["useUNSAFE_PortalContext", 0, function() {
        return (0, t.useContext)(o) ?? {}
    }])
}, 512985, e => {
    "use strict";
    var t = e.i(803258),
        o = e.i(3931);
    e.s(["useOverlayTriggerState", 0, function(e) {
        let [r, n] = (0, t.useControlledState)(e.isOpen, e.defaultOpen || !1, e.onOpenChange), l = (0, o.useCallback)(() => {
            n(!0)
        }, [n]), i = (0, o.useCallback)(() => {
            n(!1)
        }, [n]), a = (0, o.useCallback)(() => {
            n(!r)
        }, [n, r]);
        return {
            isOpen: r,
            setOpen: n,
            open: l,
            close: i,
            toggle: a
        }
    }])
}, 863304, e => {
    "use strict";
    var t = e.i(185559),
        o = e.i(973914),
        r = e.i(3931);

    function n(e, r, n) {
        (0, t.useLayoutEffect)(() => {
            if (r && e.current) {
                if (!("getAnimations" in e.current)) return void n();
                let t = e.current.getAnimations();
                if (0 === t.length) return void n();
                let r = !1;
                return Promise.allSettled(t.map(e => e.finished)).then(() => {
                    r || (0, o.flushSync)(() => {
                        n()
                    })
                }), () => {
                    r = !0
                }
            }
        }, [e, r, n])
    }
    e.s(["useEnterAnimation", 0, function(e, o = !0) {
        let [l, i] = (0, r.useState)(!0), a = l && o;
        return (0, t.useLayoutEffect)(() => {
            if (a && e.current && "getAnimations" in e.current)
                for (let t of e.current.getAnimations()) t instanceof CSSTransition && t.cancel()
        }, [e, a]), n(e, a, (0, r.useCallback)(() => i(!1), [])), a
    }, "useExitAnimation", 0, function(e, t) {
        let [o, l] = (0, r.useState)(t ? "open" : "closed");
        switch (o) {
            case "open":
                t || l("exiting");
                break;
            case "closed":
            case "exiting":
                t && l("open")
        }
        let i = "exiting" === o;
        return n(e, i, (0, r.useCallback)(() => {
            l(e => "exiting" === e ? "closed" : e)
        }, [])), i
    }])
}, 535749, e => {
    "use strict";
    var t = e.i(3931),
        o = e.i(389240);
    let r = new Map([
        ["bold", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"
        }))],
        ["duotone", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
            opacity: "0.2"
        }), t.default.createElement("path", {
            d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
        }))],
        ["fill", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
        }))],
        ["light", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"
        }))],
        ["regular", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
        }))],
        ["thin", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"
        }))]
    ]);
    var n = Object.defineProperty,
        l = Object.defineProperties,
        i = Object.getOwnPropertyDescriptors,
        a = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        c = Object.prototype.propertyIsEnumerable,
        u = (e, t, o) => t in e ? n(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : e[t] = o;
    let f = (0, t.forwardRef)((e, n) => t.default.createElement(o.default, l(((e, t) => {
        for (var o in t || (t = {})) s.call(t, o) && u(e, o, t[o]);
        if (a)
            for (var o of a(t)) c.call(t, o) && u(e, o, t[o]);
        return e
    })({
        ref: n
    }, e), i({
        weights: r
    }))));
    f.displayName = "X", e.s(["X", 0, f], 535749)
}, 468069, e => {
    "use strict";
    var t = e.i(467211),
        o = e.i(3931);
    let r = (0, o.createContext)({}),
        n = (0, o.forwardRef)(function(e, n) {
            [e, n] = (0, t.useContextProps)(e, n, r);
            let {
                elementType: l = "span",
                ...i
            } = e, a = t.dom[l];
            return o.default.createElement(a, {
                className: "react-aria-Text",
                ...i,
                ref: n
            })
        });
    e.s(["Text", 0, n, "TextContext", 0, r])
}, 458229, e => {
    "use strict";
    var t = e.i(429305),
        o = e.i(768307),
        r = e.i(3931);
    let n = {
        border: 0,
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        width: "1px",
        whiteSpace: "nowrap"
    };
    e.s(["VisuallyHidden", 0, function(e) {
        let {
            children: l,
            elementType: i = "div",
            isFocusable: a,
            style: s,
            ...c
        } = e, {
            visuallyHiddenProps: u
        } = function(e = {}) {
            let {
                style: t,
                isFocusable: l
            } = e, [i, a] = (0, r.useState)(!1), {
                focusWithinProps: s
            } = (0, o.useFocusWithin)({
                isDisabled: !l,
                onFocusWithinChange: e => a(e)
            }), c = (0, r.useMemo)(() => i ? t : t ? {
                ...n,
                ...t
            } : n, [i]);
            return {
                visuallyHiddenProps: {
                    ...s,
                    style: c
                }
            }
        }(e);
        return r.default.createElement(i, (0, t.mergeProps)(c, u), l)
    }])
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ade8dde0-22d0-5ba4-a374-ef35d510bb04")
    } catch (e) {}
}();
//# debugId=ade8dde0-22d0-5ba4-a374-ef35d510bb04