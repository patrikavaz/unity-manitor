(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 848662, e => {
    "use strict";
    var t = e.i(409781);
    let o = t.forwardRef((e, o) => {
        let {
            alt: n,
            color: i = "currentColor",
            size: r = "1em",
            weight: l = "regular",
            mirrored: a = !1,
            children: s,
            weights: c,
            ...d
        } = e;
        return t.createElement("svg", {
            ref: o,
            xmlns: "http://www.w3.org/2000/svg",
            width: r,
            height: r,
            fill: i,
            viewBox: "0 0 256 256",
            transform: a ? "scale(-1, 1)" : void 0,
            ...d
        }, !!n && t.createElement("title", null, n), s, c.get(l))
    });
    o.displayName = "SSRBase", e.s(["default", 0, o])
}, 494004, 876009, e => {
    "use strict";
    let t = {
            current: null
        },
        o = {
            current: !1
        };
    e.s(["hasReducedMotionListener", 0, o, "prefersReducedMotion", 0, t], 876009);
    let n = "u" > typeof window;
    e.s(["initPrefersReducedMotion", 0, function() {
        if (o.current = !0, n)
            if (window.matchMedia) {
                let e = window.matchMedia("(prefers-reduced-motion)"),
                    o = () => t.current = e.matches;
                e.addEventListener("change", o), o()
            } else t.current = !1
    }], 494004)
}, 513038, e => {
    "use strict";
    e.s(["resolveElements", 0, function(e, t, o) {
        if (null == e) return [];
        if (e instanceof EventTarget) return [e];
        if ("string" == typeof e) {
            let n = document;
            t && (n = t.current);
            let i = o?.[e] ?? n.querySelectorAll(e);
            return i ? Array.from(i) : []
        }
        return Array.from(e).filter(e => null != e)
    }])
}, 393335, (e, t, o) => {
    t.exports = e.r(469970)
}, 876728, e => {
    "use strict";
    let t = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        o = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);
    var n = e.i(726103),
        i = e.i(409781);
    let r = Symbol.for("react-aria.i18n.locale");

    function l() {
        let e = "u" > typeof window && window[r] || "u" > typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
            Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
            e = "en-US"
        }
        return {
            locale: e,
            direction: ! function(e) {
                if (Intl.Locale) {
                    let o = new Intl.Locale(e).maximize(),
                        n = "function" == typeof o.getTextInfo ? o.getTextInfo() : o.textInfo;
                    if (n) return "rtl" === n.direction;
                    if (o.script) return t.has(o.script)
                }
                let n = e.split("-")[0];
                return o.has(n)
            }(e) ? "ltr" : "rtl"
        }
    }
    let a = l(),
        s = new Set;

    function c() {
        for (let e of (a = l(), s)) e(a)
    }
    let d = i.default.createContext(null);
    e.s(["useLocale", 0, function() {
        let e = function() {
            let e = (0, n.useIsSSR)(),
                [t, o] = (0, i.useState)(a);
            return ((0, i.useEffect)(() => (0 === s.size && window.addEventListener("languagechange", c), s.add(o), () => {
                s.delete(o), 0 === s.size && window.removeEventListener("languagechange", c)
            }), []), e) ? {
                locale: "u" > typeof window && window[r] || "en-US",
                direction: "ltr"
            } : t
        }();
        return (0, i.useContext)(d) || e
    }], 876728)
}, 961551, 270170, 747922, e => {
    "use strict";
    var t = e.i(823512);

    function o(e, o) {
        let {
            id: n,
            "aria-label": i,
            "aria-labelledby": r
        } = e;
        return n = (0, t.useId)(n), r && i ? r = [...new Set([n, ...r.trim().split(/\s+/)])].join(" ") : r && (r = r.trim().split(/\s+/).join(" ")), i || r || !o || (i = o), {
            id: n,
            "aria-label": i,
            "aria-labelledby": r
        }
    }
    e.s(["useLabels", 0, o], 270170), e.s(["useLabel", 0, function(e) {
        let {
            id: n,
            label: i,
            "aria-labelledby": r,
            "aria-label": l,
            labelElementType: a = "label"
        } = e;
        n = (0, t.useId)(n);
        let s = (0, t.useId)(),
            c = {};
        return i && (r = r ? `${s} ${r}` : s, c = {
            id: s,
            htmlFor: "label" === a ? n : void 0
        }), {
            labelProps: c,
            fieldProps: o({
                id: n,
                "aria-label": l,
                "aria-labelledby": r
            })
        }
    }], 961551), e.s(["clamp", 0, function(e, t = -1 / 0, o = 1 / 0) {
        return Math.min(Math.max(e, t), o)
    }], 747922)
}, 279858, e => {
    "use strict";
    var t = e.i(679933),
        o = e.i(97584),
        n = e.i(429305),
        i = e.i(513485),
        r = e.i(629959);
    e.s(["useLink", 0, function(e, l) {
        let {
            elementType: a = "a",
            onPress: s,
            onPressStart: c,
            onPressEnd: d,
            onClick: u,
            isDisabled: f,
            ...p
        } = e, h = {};
        "a" !== a && (h = {
            role: "link",
            tabIndex: f ? void 0 : 0
        });
        let {
            focusableProps: m
        } = (0, i.useFocusable)(e, l), {
            pressProps: g,
            isPressed: b
        } = (0, r.usePress)({
            onPress: s,
            onPressStart: c,
            onPressEnd: d,
            onClick: u,
            isDisabled: f,
            ref: l
        }), w = (0, t.filterDOMProps)(p, {
            labelable: !0
        }), v = (0, n.mergeProps)(m, g), A = (0, o.useRouter)(), y = (0, o.useLinkProps)(e);
        return {
            isPressed: b,
            linkProps: (0, n.mergeProps)(w, y, {
                ...v,
                ...h,
                "aria-disabled": f || void 0,
                "aria-current": e["aria-current"],
                onClick: t => {
                    g.onClick?.(t), (0, o.handleLinkClick)(t, A, e.href, e.routerOptions)
                }
            })
        }
    }])
}, 248708, e => {
    "use strict";
    let t = null;
    class o {
        constructor() {
            this.node = null, this.assertiveLog = null, this.politeLog = null, "u" > typeof document && (this.node = document.createElement("div"), this.node.dataset.liveAnnouncer = "true", Object.assign(this.node.style, {
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
            }), this.assertiveLog = this.createLog("assertive"), this.node.appendChild(this.assertiveLog), this.politeLog = this.createLog("polite"), this.node.appendChild(this.politeLog), document.body.prepend(this.node))
        }
        isAttached() {
            return this.node?.isConnected
        }
        createLog(e) {
            let t = document.createElement("div");
            return t.setAttribute("role", "log"), t.setAttribute("aria-live", e), t.setAttribute("aria-relevant", "additions"), t
        }
        destroy() {
            this.node && (document.body.removeChild(this.node), this.node = null)
        }
        announce(e, t = "assertive", o = 7e3) {
            if (!this.node) return;
            let n = document.createElement("div");
            "object" == typeof e ? (n.setAttribute("role", "img"), n.setAttribute("aria-labelledby", e["aria-labelledby"])) : n.textContent = e, "assertive" === t ? this.assertiveLog?.appendChild(n) : this.politeLog?.appendChild(n), "" !== e && setTimeout(() => {
                n.remove()
            }, o)
        }
        clear(e) {
            this.node && ((!e || "assertive" === e) && this.assertiveLog && (this.assertiveLog.innerHTML = ""), (!e || "polite" === e) && this.politeLog && (this.politeLog.innerHTML = ""))
        }
    }
    e.s(["announce", 0, function(e, n = "assertive", i = 7e3) {
        t ? t.announce(e, n, i) : (t = new o, ("boolean" == typeof IS_REACT_ACT_ENVIRONMENT ? IS_REACT_ACT_ENVIRONMENT : "u" > typeof jest) ? t.announce(e, n, i) : setTimeout(() => {
            t?.isAttached() && t?.announce(e, n, i)
        }, 100))
    }])
}, 975950, e => {
    "use strict";
    var t = e.i(904960),
        o = e.i(776050),
        n = e.i(747922);
    let i = {
            top: "top",
            bottom: "top",
            left: "left",
            right: "left"
        },
        r = {
            top: "bottom",
            bottom: "top",
            left: "right",
            right: "left"
        },
        l = {
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

    function d(e, o) {
        let n = 0,
            i = 0,
            r = 0,
            l = 0,
            a = 0,
            s = 0,
            c = {},
            d = (o?.scale ?? 1) > 1;
        if ("BODY" === e.tagName || "HTML" === e.tagName) {
            let t = document.documentElement;
            r = t.clientWidth, l = t.clientHeight, n = o?.width ?? r, i = o?.height ?? l, c.top = t.scrollTop || e.scrollTop, c.left = t.scrollLeft || e.scrollLeft, o && (a = o.offsetTop, s = o.offsetLeft)
        } else({
            width: n,
            height: i,
            top: a,
            left: s
        } = g(e, !1)), c.top = e.scrollTop, c.left = e.scrollLeft, r = n, l = i;
        return (0, t.isWebKit)() && ("BODY" === e.tagName || "HTML" === e.tagName) && d && (c.top = 0, c.left = 0, a = o?.pageTop ?? 0, s = o?.pageLeft ?? 0), {
            width: n,
            height: i,
            totalWidth: r,
            totalHeight: l,
            scroll: c,
            top: a,
            left: s
        }
    }

    function u(e, t, o, n, r, l, s) {
        let c = r.scroll[e] ?? 0,
            d = n[a[e]],
            u = s[e] + n.scroll[i[e]] + l,
            f = s[e] + n.scroll[i[e]] + d - l,
            p = t - c + n.scroll[i[e]] + s[e] - n[i[e]],
            h = t - c + o + n.scroll[i[e]] + s[e] - n[i[e]];
        return p < u ? u - p : h > f ? Math.max(f - h, u - p) : 0
    }

    function f(e) {
        if (c[e]) return c[e];
        let [t, o] = e.split(" "), n = i[t] || "right", r = l[n];
        i[o] || (o = "center");
        let s = a[n],
            d = a[r];
        return c[e] = {
            placement: t,
            crossPlacement: o,
            axis: n,
            crossAxis: r,
            size: s,
            crossSize: d
        }, c[e]
    }

    function p(e, t, o, i, l, a, c, d, u, f, p) {
        let {
            placement: h,
            crossPlacement: m,
            axis: g,
            crossAxis: b,
            size: w,
            crossSize: v
        } = i, A = {};
        A[b] = e[b] ?? 0, "center" === m ? A[b] += ((e[v] ?? 0) - (o[v] ?? 0)) / 2 : m !== b && (A[b] += (e[v] ?? 0) - (o[v] ?? 0)), A[b] += a;
        let y = e[b] - o[v] + u + f,
            L = e[b] + e[v] - u - f;
        if (A[b] = (0, n.clamp)(A[b], y, L), h === g) {
            let t = d ? p[w] : p[s[w]];
            A[r[g]] = Math.floor(t - e[g] + l)
        } else A[g] = Math.floor(e[g] + e[w] + l);
        return A
    }

    function h(e, t, o, n, i, l, a, s) {
        let {
            placement: c,
            axis: d,
            size: u
        } = l;
        return c === d ? Math.max(0, o[d] - (a.scroll[d] ?? 0) - (e[d] + (s ? t[d] : 0)) - (n[d] ?? 0) - n[r[d]] - i) : Math.max(0, e[u] + e[d] + (s ? t[d] : 0) - o[d] - o[u] + (a.scroll[d] ?? 0) - (n[d] ?? 0) - n[r[d]] - i)
    }

    function m(e, t) {
        let {
            top: o,
            left: n,
            width: i,
            height: r
        } = e.getBoundingClientRect();
        return t && e instanceof e.ownerDocument.defaultView.HTMLElement && (i = e.offsetWidth, r = e.offsetHeight), {
            top: o,
            left: n,
            width: i,
            height: r
        }
    }

    function g(e, t, o) {
        let {
            top: n,
            left: i,
            width: r,
            height: l
        } = o || m(e, t), {
            scrollTop: a,
            scrollLeft: s,
            clientTop: c,
            clientLeft: d
        } = document.documentElement;
        return {
            top: n + a - c,
            left: i + s - d,
            width: r,
            height: l
        }
    }

    function b(e, t, o, n) {
        let i, r = window.getComputedStyle(e);
        if ("fixed" === r.position) i = n || m(e, o);
        else {
            i = g(e, o, n);
            let r = g(t, o),
                l = window.getComputedStyle(t);
            r.top += (parseInt(l.borderTopWidth, 10) || 0) - t.scrollTop, r.left += (parseInt(l.borderLeftWidth, 10) || 0) - t.scrollLeft, i.top -= r.top, i.left -= r.left
        }
        return i.top -= parseInt(r.marginTop, 10) || 0, i.left -= parseInt(r.marginLeft, 10) || 0, i
    }

    function w(e) {
        let t = window.getComputedStyle(e);
        return "none" !== t.transform || /transform|perspective/.test(t.willChange) || "none" !== t.filter || "paint" === t.contain || "backdropFilter" in t && "none" !== t.backdropFilter || "WebkitBackdropFilter" in t && "none" !== t.WebkitBackdropFilter
    }
    e.s(["calculatePosition", 0, function(e) {
        let t, l, {
                placement: a,
                targetNode: c,
                overlayNode: v,
                scrollNode: A,
                padding: y,
                shouldFlip: L,
                boundaryElement: C,
                offset: E,
                crossOffset: x,
                maxHeight: P,
                arrowSize: T = 0,
                arrowBoundaryOffset: S = 0,
                targetRect: H
            } = e,
            M = "u" > typeof document ? window.visualViewport : null,
            k = v instanceof HTMLElement ? function(e) {
                let t = e.offsetParent;
                if (t && t === document.body && "static" === window.getComputedStyle(t).position && !w(t) && (t = document.documentElement), null == t)
                    for (t = e.parentElement; t && !w(t);) t = t.parentElement;
                return t || document.documentElement
            }(v) : document.documentElement,
            R = k === document.documentElement,
            O = window.getComputedStyle(k).position,
            B = R ? g(c, !1, H) : b(c, k, !1, H);
        if (!R) {
            let {
                marginTop: e,
                marginLeft: t
            } = window.getComputedStyle(c);
            B.top += parseInt(e, 10) || 0, B.left += parseInt(t, 10) || 0
        }
        let z = g(v, !0),
            I = {
                top: parseInt((t = window.getComputedStyle(v)).marginTop, 10) || 0,
                bottom: parseInt(t.marginBottom, 10) || 0,
                left: parseInt(t.marginLeft, 10) || 0,
                right: parseInt(t.marginRight, 10) || 0
            };
        z.width += (I.left ?? 0) + (I.right ?? 0), z.height += (I.top ?? 0) + (I.bottom ?? 0), A.scrollTop, A.scrollLeft, A.scrollWidth, A.scrollHeight;
        let N = d(C, M),
            F = d(k, M);
        if ("BODY" !== C.tagName && "HTML" !== C.tagName || R) l = ("BODY" === C.tagName || "HTML" === C.tagName) && R ? {
            top: 0,
            left: 0,
            width: 0,
            height: 0
        } : b(C, k, !1);
        else {
            let e = m(k, !1);
            l = {
                top: -(e.top - N.top),
                left: -(e.left - N.left),
                width: 0,
                height: 0
            }
        }
        return function(e, t, o, l, a, c, d, m, g, b, w, v, A, y, L, C, E) {
            var x, P, T;
            let S, H, M, k = f(e),
                {
                    size: R,
                    crossAxis: O,
                    crossSize: B,
                    placement: z,
                    crossPlacement: I
                } = k,
                N = p(t, d, o, k, b, w, g, v, y, L, m),
                F = b,
                D = h(d, g, t, l, a + b, k, m, C);
            if (c && o[R] > D) {
                let e = f(`${r[z]} ${I}`),
                    n = p(t, d, o, e, b, w, g, v, y, L, m);
                h(d, g, t, l, a + b, e, m, C) > D && (k = e, N = n, F = b)
            }
            let W = "bottom";
            "top" === k.axis ? "top" === k.placement ? W = "top" : "bottom" === k.placement && (W = "bottom") : "top" === k.crossAxis && ("top" === k.crossPlacement ? W = "bottom" : "bottom" === k.crossPlacement && (W = "top"));
            let U = u(O, N[O], o[B], d, m, a, g);
            N[O] += U;
            let j = (x = N, P = o.height, T = W, S = (null != x.top ? x.top : m[s.height] - (x.bottom ?? 0) - P) - (m.scroll.top ?? 0), H = C ? g.top : 0, M = {
                top: Math.max(d.top + H, (E?.offsetTop ?? d.top) + H),
                bottom: Math.min(d.top + d.height + H, (E?.offsetTop ?? 0) + (E?.height ?? 0))
            }, "top" !== T ? Math.max(0, M.bottom - S - ((l.top ?? 0) + (l.bottom ?? 0) + a)) : Math.max(0, S + P - M.top - ((l.top ?? 0) + (l.bottom ?? 0) + a)));
            A && A < j && (j = A), o.height = Math.min(o.height, j), U = u(O, (N = p(t, d, o, k, F, w, g, v, y, L, m))[O], o[B], d, m, a, g), N[O] += U;
            let V = {},
                _ = t[O] - N[O] - l[i[O]],
                q = _ + .5 * t[B],
                Y = y / 2 + L,
                $ = "left" === i[O] ? (l.left ?? 0) + (l.right ?? 0) : (l.top ?? 0) + (l.bottom ?? 0),
                K = o[B] - $ - y / 2 - L,
                Q = t[O] + y / 2 - (N[O] + l[i[O]]),
                G = t[O] + t[B] - y / 2 - (N[O] + l[i[O]]),
                J = (0, n.clamp)(q, Q, G);
            V[O] = (0, n.clamp)(J, Y, K), ({
                placement: z,
                crossPlacement: I
            } = k), y ? _ = V[O] : "right" === I ? _ += t[B] : "center" === I && (_ += t[B] / 2);
            let X = "left" === z || "top" === z ? o[R] : 0,
                Z = {
                    x: "top" === z || "bottom" === z ? _ : X,
                    y: "left" === z || "right" === z ? _ : X
                };
            return {
                position: N,
                maxHeight: j,
                arrowOffsetLeft: V.left,
                arrowOffsetTop: V.top,
                placement: z,
                triggerAnchorPoint: Z
            }
        }(a, B, z, I, y, L, N, F, l, E, x, !!O && "static" !== O, P, T, S, (0, o.nodeContains)(C, k), M)
    }, "getRect", 0, m])
}, 879537, e => {
    "use strict";
    var t = e.i(975950),
        o = e.i(776050),
        n = e.i(101933),
        i = e.i(185559),
        r = e.i(876728),
        l = e.i(138381),
        a = e.i(409781);
    let s = "u" > typeof document ? window.visualViewport : null;
    e.s(["useOverlayPosition", 0, function(e) {
        var c;
        let {
            direction: d
        } = (0, r.useLocale)(), {
            arrowSize: u,
            targetRef: f,
            overlayRef: p,
            arrowRef: h,
            scrollRef: m = p,
            placement: g = "bottom",
            containerPadding: b = 12,
            shouldFlip: w = !0,
            boundaryElement: v = "u" > typeof document ? document.body : null,
            offset: A = 0,
            crossOffset: y = 0,
            shouldUpdatePosition: L = !0,
            isOpen: C = !0,
            onClose: E,
            maxHeight: x,
            arrowBoundaryOffset: P = 0,
            getTargetRect: T
        } = e, [S, H] = (0, a.useState)(null), M = [L, g, p.current, f.current, h?.current, m.current, b, w, v, A, y, C, d, x, P, u], k = (0, a.useRef)(s?.scale);
        (0, a.useEffect)(() => {
            C && (k.current = s?.scale)
        }, [C]);
        let R = (0, a.useCallback)(() => {
            var e;
            if (!1 === L || !C || !p.current || !f.current || !v || s?.scale !== k.current) return;
            let n = null;
            if (m.current && (0, o.isFocusWithin)(m.current)) {
                let e = (0, o.getActiveElement)()?.getBoundingClientRect(),
                    t = m.current.getBoundingClientRect();
                (n = {
                    type: "top",
                    offset: (e?.top ?? 0) - t.top
                }).offset > t.height / 2 && (n.type = "bottom", n.offset = (e?.bottom ?? 0) - t.bottom)
            }
            let i = p.current;
            !x && p.current && (i.style.top = "0px", i.style.bottom = "", i.style.maxHeight = (window.visualViewport?.height ?? window.innerHeight) + "px");
            let r = (0, t.calculatePosition)({
                placement: (e = g, "rtl" === d ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right")),
                overlayNode: p.current,
                targetNode: f.current,
                scrollNode: m.current || p.current,
                padding: b,
                shouldFlip: w,
                boundaryElement: v,
                offset: A,
                crossOffset: y,
                maxHeight: x,
                arrowSize: u ?? (h?.current ? (0, t.getRect)(h.current, !0).width : 0),
                arrowBoundaryOffset: P,
                targetRect: T?.(f.current)
            });
            if (!r.position) return;
            i.style.top = "", i.style.bottom = "", i.style.left = "", i.style.right = "", Object.keys(r.position).forEach(e => i.style[e] = r.position[e] + "px"), i.style.maxHeight = null != r.maxHeight ? r.maxHeight + "px" : "";
            let l = (0, o.getActiveElement)();
            if (n && l && m.current) {
                let e = l.getBoundingClientRect(),
                    t = m.current.getBoundingClientRect(),
                    o = e[n.type] - t[n.type];
                m.current.scrollTop += o - n.offset
            }
            H(r)
        }, M);
        (0, i.useLayoutEffect)(R, M), c = R, (0, i.useLayoutEffect)(() => (window.addEventListener("resize", c, !1), () => {
            window.removeEventListener("resize", c, !1)
        }), [c]), (0, l.useResizeObserver)({
            ref: p,
            onResize: R
        }), (0, l.useResizeObserver)({
            ref: f,
            onResize: R
        });
        let O = (0, a.useRef)(!1);
        (0, i.useLayoutEffect)(() => {
            let e, t = () => {
                    O.current = !0, clearTimeout(e), e = setTimeout(() => {
                        O.current = !1
                    }, 500), R()
                },
                o = () => {
                    O.current && t()
                };
            return s?.addEventListener("resize", t), s?.addEventListener("scroll", o), () => {
                s?.removeEventListener("resize", t), s?.removeEventListener("scroll", o)
            }
        }, [R]);
        let B = (0, a.useCallback)(() => {
            O.current || E?.()
        }, [E, O]);
        return (0, n.useCloseOnScroll)({
            triggerRef: f,
            isOpen: C,
            onClose: E && B
        }), {
            overlayProps: {
                style: {
                    position: S ? "absolute" : "fixed",
                    top: S ? void 0 : 0,
                    left: S ? void 0 : 0,
                    zIndex: 1e5,
                    ...S?.position,
                    maxHeight: S?.maxHeight ?? "100vh"
                }
            },
            placement: S?.placement ?? null,
            triggerAnchorPoint: S?.triggerAnchorPoint ?? null,
            arrowProps: {
                "aria-hidden": "true",
                role: "presentation",
                style: {
                    left: S?.arrowOffsetLeft,
                    top: S?.arrowOffsetTop
                }
            },
            updatePosition: R
        }
    }])
}, 964059, e => {
    "use strict";
    var t = e.i(600939),
        o = e.i(409781);
    e.s(["useEvent", 0, function(e, n, i, r) {
        let l = (0, t.useEffectEvent)(i),
            a = null == i;
        (0, o.useEffect)(() => {
            if (a || !e.current) return;
            let t = e.current;
            return t.addEventListener(n, l, r), () => {
                t.removeEventListener(n, l, r)
            }
        }, [e, n, r, a])
    }])
}, 138381, e => {
    "use strict";
    var t = e.i(600939),
        o = e.i(409781);
    e.s(["useResizeObserver", 0, function(e) {
        let {
            ref: n,
            box: i,
            onResize: r
        } = e, l = (0, t.useEffectEvent)(r);
        (0, o.useEffect)(() => {
            let e = n?.current;
            if (e)
                if (void 0 === window.ResizeObserver) return window.addEventListener("resize", l, !1), () => {
                    window.removeEventListener("resize", l, !1)
                };
                else {
                    let t = new window.ResizeObserver(e => {
                        e.length && l()
                    });
                    return t.observe(e, {
                        box: i
                    }), () => {
                        e && t.unobserve(e)
                    }
                }
        }, [n, i])
    }])
}, 825610, e => {
    "use strict";
    e.s(["trackingLocation", 0, {
        headerNavigationItem: "HeaderNavigationItem",
        headerSecondaryAction: "HeaderSecondaryAction",
        headerAction: "HeaderAction",
        headerDropdownMenuSectionAction: "HeaderDropdownMenuSectionAction",
        headerLogo: "HeaderLogo",
        headerNavigationLink: "HeaderNavigationLink",
        headerDropdownLink: "HeaderDropdownLink",
        headerMobileAction: "HeaderMobileAction",
        headerMobileSecondaryAction: "HeaderMobileSecondaryAction",
        headerMobilePanelLink: "HeaderMobilePanelLink",
        headerMobilePanelAction: "HeaderMobilePanelAction",
        headerMobilePanelListing: "HeaderMobilePanelListing",
        productFeatureCard: "ProductFeatureCard",
        productCardAction: "ProductCardAction",
        productCardFooterAction: "ProductCardFooterAction",
        pricingCardAction: "PricingCardAction",
        accordionAction: "AccordionAction",
        alertAction: "AlertAction",
        announcementBannerAction: "AnnouncementBannerAction",
        comparisonTableAction: "ComparisonTableAction",
        contentOverviewBack: "ContentOverviewBack",
        contentHeaderBack: "ContentHeaderBack",
        deluxeAnnouncementBannerAction: "DeluxeAnnouncementBannerAction",
        eventCardAction: "EventCardAction",
        featuredEventCardAction: "FeaturedEventCardAction",
        featureListAction: "FeatureListAction",
        fullWidthBlockAction: "FullWidthBlockAction",
        heroAction: "HeroAction",
        cardsAction: "CardsAction",
        uniteCard: "UniteCard",
        uniteCardSubscription: "UniteCardSubscription",
        uniteCards: "UniteCards",
        uniteCardsFilter: "UniteCardsFilter",
        uniteCardsAction: "UniteCardsAction",
        legalPageHeroAction: "LegalPageHeroAction",
        quickLinksAction: "QuickLinksAction",
        sectionTitleAction: "SectionTitleAction",
        spotlightAction: "SpotlightAction",
        bentoBoxCardAction: "BentoBoxCardAction",
        wayfinderCard: "WayfinderCard",
        wayfinderDismissButton: "WayfinderDismissButton",
        wayfinderDismissOutside: "WayfinderDismissOutside"
    }])
}]);