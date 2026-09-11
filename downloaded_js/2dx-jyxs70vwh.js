(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 740041, e => {
    "use strict";
    let t = {
        en: "en",
        fr: "fr",
        es: "es",
        pt: "pt",
        ru: "ru",
        cn: "zh",
        ja: "ja",
        kr: "ko",
        vn: "vi"
    };
    e.s(["defaultLocale", 0, "en", "localePrefix", 0, "as-needed", "localeToIETFTag", 0, t, "locales", 0, ["en", "fr", "es", "pt", "ru", "cn", "ja", "kr", "vn"], "oneTrustLocaleOverrides", 0, t])
}, 848662, e => {
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
            ...u
        } = e;
        return t.createElement("svg", {
            ref: o,
            xmlns: "http://www.w3.org/2000/svg",
            width: r,
            height: r,
            fill: i,
            viewBox: "0 0 256 256",
            transform: a ? "scale(-1, 1)" : void 0,
            ...u
        }, !!n && t.createElement("title", null, n), s, c.get(l))
    });
    o.displayName = "SSRBase", e.s(["default", 0, o])
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
    let u = i.default.createContext(null);
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
        return (0, i.useContext)(u) || e
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
            onPressEnd: u,
            onClick: d,
            isDisabled: p,
            ...f
        } = e, h = {};
        "a" !== a && (h = {
            role: "link",
            tabIndex: p ? void 0 : 0
        });
        let {
            focusableProps: g
        } = (0, i.useFocusable)(e, l), {
            pressProps: m,
            isPressed: b
        } = (0, r.usePress)({
            onPress: s,
            onPressStart: c,
            onPressEnd: u,
            onClick: d,
            isDisabled: p,
            ref: l
        }), w = (0, t.filterDOMProps)(f, {
            labelable: !0
        }), v = (0, n.mergeProps)(g, m), L = (0, o.useRouter)(), A = (0, o.useLinkProps)(e);
        return {
            isPressed: b,
            linkProps: (0, n.mergeProps)(w, A, {
                ...v,
                ...h,
                "aria-disabled": p || void 0,
                "aria-current": e["aria-current"],
                onClick: t => {
                    m.onClick?.(t), (0, o.handleLinkClick)(t, L, e.href, e.routerOptions)
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
}, 852120, e => {
    "use strict";
    var t = e.i(409781);
    let o = (0, t.createContext)({});
    e.s(["useUNSAFE_PortalContext", 0, function() {
        return (0, t.useContext)(o) ?? {}
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

    function u(e, o) {
        let n = 0,
            i = 0,
            r = 0,
            l = 0,
            a = 0,
            s = 0,
            c = {},
            u = (o?.scale ?? 1) > 1;
        if ("BODY" === e.tagName || "HTML" === e.tagName) {
            let t = document.documentElement;
            r = t.clientWidth, l = t.clientHeight, n = o?.width ?? r, i = o?.height ?? l, c.top = t.scrollTop || e.scrollTop, c.left = t.scrollLeft || e.scrollLeft, o && (a = o.offsetTop, s = o.offsetLeft)
        } else({
            width: n,
            height: i,
            top: a,
            left: s
        } = m(e, !1)), c.top = e.scrollTop, c.left = e.scrollLeft, r = n, l = i;
        return (0, t.isWebKit)() && ("BODY" === e.tagName || "HTML" === e.tagName) && u && (c.top = 0, c.left = 0, a = o?.pageTop ?? 0, s = o?.pageLeft ?? 0), {
            width: n,
            height: i,
            totalWidth: r,
            totalHeight: l,
            scroll: c,
            top: a,
            left: s
        }
    }

    function d(e, t, o, n, r, l, s) {
        let c = r.scroll[e] ?? 0,
            u = n[a[e]],
            d = s[e] + n.scroll[i[e]] + l,
            p = s[e] + n.scroll[i[e]] + u - l,
            f = t - c + n.scroll[i[e]] + s[e] - n[i[e]],
            h = t - c + o + n.scroll[i[e]] + s[e] - n[i[e]];
        return f < d ? d - f : h > p ? Math.max(p - h, d - f) : 0
    }

    function p(e) {
        if (c[e]) return c[e];
        let [t, o] = e.split(" "), n = i[t] || "right", r = l[n];
        i[o] || (o = "center");
        let s = a[n],
            u = a[r];
        return c[e] = {
            placement: t,
            crossPlacement: o,
            axis: n,
            crossAxis: r,
            size: s,
            crossSize: u
        }, c[e]
    }

    function f(e, t, o, i, l, a, c, u, d, p, f) {
        let {
            placement: h,
            crossPlacement: g,
            axis: m,
            crossAxis: b,
            size: w,
            crossSize: v
        } = i, L = {};
        L[b] = e[b] ?? 0, "center" === g ? L[b] += ((e[v] ?? 0) - (o[v] ?? 0)) / 2 : g !== b && (L[b] += (e[v] ?? 0) - (o[v] ?? 0)), L[b] += a;
        let A = e[b] - o[v] + d + p,
            C = e[b] + e[v] - d - p;
        if (L[b] = (0, n.clamp)(L[b], A, C), h === m) {
            let t = u ? f[w] : f[s[w]];
            L[r[m]] = Math.floor(t - e[m] + l)
        } else L[m] = Math.floor(e[m] + e[w] + l);
        return L
    }

    function h(e, t, o, n, i, l, a, s) {
        let {
            placement: c,
            axis: u,
            size: d
        } = l;
        return c === u ? Math.max(0, o[u] - (a.scroll[u] ?? 0) - (e[u] + (s ? t[u] : 0)) - (n[u] ?? 0) - n[r[u]] - i) : Math.max(0, e[d] + e[u] + (s ? t[u] : 0) - o[u] - o[d] + (a.scroll[u] ?? 0) - (n[u] ?? 0) - n[r[u]] - i)
    }

    function g(e, t) {
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

    function m(e, t, o) {
        let {
            top: n,
            left: i,
            width: r,
            height: l
        } = o || g(e, t), {
            scrollTop: a,
            scrollLeft: s,
            clientTop: c,
            clientLeft: u
        } = document.documentElement;
        return {
            top: n + a - c,
            left: i + s - u,
            width: r,
            height: l
        }
    }

    function b(e, t, o, n) {
        let i, r = window.getComputedStyle(e);
        if ("fixed" === r.position) i = n || g(e, o);
        else {
            i = m(e, o, n);
            let r = m(t, o),
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
                scrollNode: L,
                padding: A,
                shouldFlip: C,
                boundaryElement: y,
                offset: E,
                crossOffset: T,
                maxHeight: x,
                arrowSize: P = 0,
                arrowBoundaryOffset: S = 0,
                targetRect: k
            } = e,
            O = "u" > typeof document ? window.visualViewport : null,
            H = v instanceof HTMLElement ? function(e) {
                let t = e.offsetParent;
                if (t && t === document.body && "static" === window.getComputedStyle(t).position && !w(t) && (t = document.documentElement), null == t)
                    for (t = e.parentElement; t && !w(t);) t = t.parentElement;
                return t || document.documentElement
            }(v) : document.documentElement,
            M = H === document.documentElement,
            R = window.getComputedStyle(H).position,
            B = M ? m(c, !1, k) : b(c, H, !1, k);
        if (!M) {
            let {
                marginTop: e,
                marginLeft: t
            } = window.getComputedStyle(c);
            B.top += parseInt(e, 10) || 0, B.left += parseInt(t, 10) || 0
        }
        let z = m(v, !0),
            I = {
                top: parseInt((t = window.getComputedStyle(v)).marginTop, 10) || 0,
                bottom: parseInt(t.marginBottom, 10) || 0,
                left: parseInt(t.marginLeft, 10) || 0,
                right: parseInt(t.marginRight, 10) || 0
            };
        z.width += (I.left ?? 0) + (I.right ?? 0), z.height += (I.top ?? 0) + (I.bottom ?? 0), L.scrollTop, L.scrollLeft, L.scrollWidth, L.scrollHeight;
        let N = u(y, O),
            F = u(H, O);
        if ("BODY" !== y.tagName && "HTML" !== y.tagName || M) l = ("BODY" === y.tagName || "HTML" === y.tagName) && M ? {
            top: 0,
            left: 0,
            width: 0,
            height: 0
        } : b(y, H, !1);
        else {
            let e = g(H, !1);
            l = {
                top: -(e.top - N.top),
                left: -(e.left - N.left),
                width: 0,
                height: 0
            }
        }
        return function(e, t, o, l, a, c, u, g, m, b, w, v, L, A, C, y, E) {
            var T, x, P;
            let S, k, O, H = p(e),
                {
                    size: M,
                    crossAxis: R,
                    crossSize: B,
                    placement: z,
                    crossPlacement: I
                } = H,
                N = f(t, u, o, H, b, w, m, v, A, C, g),
                F = b,
                D = h(u, m, t, l, a + b, H, g, y);
            if (c && o[M] > D) {
                let e = p(`${r[z]} ${I}`),
                    n = f(t, u, o, e, b, w, m, v, A, C, g);
                h(u, m, t, l, a + b, e, g, y) > D && (H = e, N = n, F = b)
            }
            let W = "bottom";
            "top" === H.axis ? "top" === H.placement ? W = "top" : "bottom" === H.placement && (W = "bottom") : "top" === H.crossAxis && ("top" === H.crossPlacement ? W = "bottom" : "bottom" === H.crossPlacement && (W = "top"));
            let U = d(R, N[R], o[B], u, g, a, m);
            N[R] += U;
            let j = (T = N, x = o.height, P = W, S = (null != T.top ? T.top : g[s.height] - (T.bottom ?? 0) - x) - (g.scroll.top ?? 0), k = y ? m.top : 0, O = {
                top: Math.max(u.top + k, (E?.offsetTop ?? u.top) + k),
                bottom: Math.min(u.top + u.height + k, (E?.offsetTop ?? 0) + (E?.height ?? 0))
            }, "top" !== P ? Math.max(0, O.bottom - S - ((l.top ?? 0) + (l.bottom ?? 0) + a)) : Math.max(0, S + x - O.top - ((l.top ?? 0) + (l.bottom ?? 0) + a)));
            L && L < j && (j = L), o.height = Math.min(o.height, j), U = d(R, (N = f(t, u, o, H, F, w, m, v, A, C, g))[R], o[B], u, g, a, m), N[R] += U;
            let _ = {},
                V = t[R] - N[R] - l[i[R]],
                Y = V + .5 * t[B],
                $ = A / 2 + C,
                q = "left" === i[R] ? (l.left ?? 0) + (l.right ?? 0) : (l.top ?? 0) + (l.bottom ?? 0),
                K = o[B] - q - A / 2 - C,
                Q = t[R] + A / 2 - (N[R] + l[i[R]]),
                G = t[R] + t[B] - A / 2 - (N[R] + l[i[R]]),
                J = (0, n.clamp)(Y, Q, G);
            _[R] = (0, n.clamp)(J, $, K), ({
                placement: z,
                crossPlacement: I
            } = H), A ? V = _[R] : "right" === I ? V += t[B] : "center" === I && (V += t[B] / 2);
            let X = "left" === z || "top" === z ? o[M] : 0,
                Z = {
                    x: "top" === z || "bottom" === z ? V : X,
                    y: "left" === z || "right" === z ? V : X
                };
            return {
                position: N,
                maxHeight: j,
                arrowOffsetLeft: _.left,
                arrowOffsetTop: _.top,
                placement: z,
                triggerAnchorPoint: Z
            }
        }(a, B, z, I, A, C, N, F, l, E, T, !!R && "static" !== R, x, P, S, (0, o.nodeContains)(y, H), O)
    }, "getRect", 0, g])
}, 101933, e => {
    "use strict";
    var t = e.i(776050),
        o = e.i(409781);
    let n = new WeakMap;
    e.s(["onCloseMap", 0, n, "useCloseOnScroll", 0, function(e) {
        let {
            triggerRef: i,
            isOpen: r,
            onClose: l
        } = e;
        (0, o.useEffect)(() => {
            if (!r || null === l) return;
            let e = e => {
                let o = (0, t.getEventTarget)(e);
                if (!i.current || o instanceof Node && !(0, t.nodeContains)(o, i.current) || o instanceof HTMLInputElement || o instanceof HTMLTextAreaElement) return;
                let r = l || n.get(i.current);
                r && r()
            };
            return window.addEventListener("scroll", e, !0), () => {
                window.removeEventListener("scroll", e, !0)
            }
        }, [r, l, i])
    }])
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
            direction: u
        } = (0, r.useLocale)(), {
            arrowSize: d,
            targetRef: p,
            overlayRef: f,
            arrowRef: h,
            scrollRef: g = f,
            placement: m = "bottom",
            containerPadding: b = 12,
            shouldFlip: w = !0,
            boundaryElement: v = "u" > typeof document ? document.body : null,
            offset: L = 0,
            crossOffset: A = 0,
            shouldUpdatePosition: C = !0,
            isOpen: y = !0,
            onClose: E,
            maxHeight: T,
            arrowBoundaryOffset: x = 0,
            getTargetRect: P
        } = e, [S, k] = (0, a.useState)(null), O = [C, m, f.current, p.current, h?.current, g.current, b, w, v, L, A, y, u, T, x, d], H = (0, a.useRef)(s?.scale);
        (0, a.useEffect)(() => {
            y && (H.current = s?.scale)
        }, [y]);
        let M = (0, a.useCallback)(() => {
            var e;
            if (!1 === C || !y || !f.current || !p.current || !v || s?.scale !== H.current) return;
            let n = null;
            if (g.current && (0, o.isFocusWithin)(g.current)) {
                let e = (0, o.getActiveElement)()?.getBoundingClientRect(),
                    t = g.current.getBoundingClientRect();
                (n = {
                    type: "top",
                    offset: (e?.top ?? 0) - t.top
                }).offset > t.height / 2 && (n.type = "bottom", n.offset = (e?.bottom ?? 0) - t.bottom)
            }
            let i = f.current;
            !T && f.current && (i.style.top = "0px", i.style.bottom = "", i.style.maxHeight = (window.visualViewport?.height ?? window.innerHeight) + "px");
            let r = (0, t.calculatePosition)({
                placement: (e = m, "rtl" === u ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right")),
                overlayNode: f.current,
                targetNode: p.current,
                scrollNode: g.current || f.current,
                padding: b,
                shouldFlip: w,
                boundaryElement: v,
                offset: L,
                crossOffset: A,
                maxHeight: T,
                arrowSize: d ?? (h?.current ? (0, t.getRect)(h.current, !0).width : 0),
                arrowBoundaryOffset: x,
                targetRect: P?.(p.current)
            });
            if (!r.position) return;
            i.style.top = "", i.style.bottom = "", i.style.left = "", i.style.right = "", Object.keys(r.position).forEach(e => i.style[e] = r.position[e] + "px"), i.style.maxHeight = null != r.maxHeight ? r.maxHeight + "px" : "";
            let l = (0, o.getActiveElement)();
            if (n && l && g.current) {
                let e = l.getBoundingClientRect(),
                    t = g.current.getBoundingClientRect(),
                    o = e[n.type] - t[n.type];
                g.current.scrollTop += o - n.offset
            }
            k(r)
        }, O);
        (0, i.useLayoutEffect)(M, O), c = M, (0, i.useLayoutEffect)(() => (window.addEventListener("resize", c, !1), () => {
            window.removeEventListener("resize", c, !1)
        }), [c]), (0, l.useResizeObserver)({
            ref: f,
            onResize: M
        }), (0, l.useResizeObserver)({
            ref: p,
            onResize: M
        });
        let R = (0, a.useRef)(!1);
        (0, i.useLayoutEffect)(() => {
            let e, t = () => {
                    R.current = !0, clearTimeout(e), e = setTimeout(() => {
                        R.current = !1
                    }, 500), M()
                },
                o = () => {
                    R.current && t()
                };
            return s?.addEventListener("resize", t), s?.addEventListener("scroll", o), () => {
                s?.removeEventListener("resize", t), s?.removeEventListener("scroll", o)
            }
        }, [M]);
        let B = (0, a.useCallback)(() => {
            R.current || E?.()
        }, [E, R]);
        return (0, n.useCloseOnScroll)({
            triggerRef: p,
            isOpen: y,
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
            updatePosition: M
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
}, 512985, e => {
    "use strict";
    var t = e.i(803258),
        o = e.i(409781);
    e.s(["useOverlayTriggerState", 0, function(e) {
        let [n, i] = (0, t.useControlledState)(e.isOpen, e.defaultOpen || !1, e.onOpenChange), r = (0, o.useCallback)(() => {
            i(!0)
        }, [i]), l = (0, o.useCallback)(() => {
            i(!1)
        }, [i]), a = (0, o.useCallback)(() => {
            i(!n)
        }, [i, n]);
        return {
            isOpen: n,
            setOpen: i,
            open: r,
            close: l,
            toggle: a
        }
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