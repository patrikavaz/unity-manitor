(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 975950, e => {
    "use strict";
    var t = e.i(904960),
        s = e.i(776050),
        o = e.i(747922);
    let r = {
            top: "top",
            bottom: "top",
            left: "left",
            right: "left"
        },
        i = {
            top: "bottom",
            bottom: "top",
            left: "right",
            right: "left"
        },
        n = {
            top: "left",
            left: "top"
        },
        l = {
            top: "height",
            left: "width"
        },
        a = {
            width: "totalWidth",
            height: "totalHeight"
        },
        u = {};

    function p(e, s) {
        let o = 0,
            r = 0,
            i = 0,
            n = 0,
            l = 0,
            a = 0,
            u = {},
            p = (s?.scale ?? 1) > 1;
        if ("BODY" === e.tagName || "HTML" === e.tagName) {
            let t = document.documentElement;
            i = t.clientWidth, n = t.clientHeight, o = s?.width ?? i, r = s?.height ?? n, u.top = t.scrollTop || e.scrollTop, u.left = t.scrollLeft || e.scrollLeft, s && (l = s.offsetTop, a = s.offsetLeft)
        } else({
            width: o,
            height: r,
            top: l,
            left: a
        } = h(e, !1)), u.top = e.scrollTop, u.left = e.scrollLeft, i = o, n = r;
        return (0, t.isWebKit)() && ("BODY" === e.tagName || "HTML" === e.tagName) && p && (u.top = 0, u.left = 0, l = s?.pageTop ?? 0, a = s?.pageLeft ?? 0), {
            width: o,
            height: r,
            totalWidth: i,
            totalHeight: n,
            scroll: u,
            top: l,
            left: a
        }
    }

    function c(e, t, s, o, i, n, a) {
        let u = i.scroll[e] ?? 0,
            p = o[l[e]],
            c = a[e] + o.scroll[r[e]] + n,
            g = a[e] + o.scroll[r[e]] + p - n,
            d = t - u + o.scroll[r[e]] + a[e] - o[r[e]],
            m = t - u + s + o.scroll[r[e]] + a[e] - o[r[e]];
        return d < c ? c - d : m > g ? Math.max(g - m, c - d) : 0
    }

    function g(e) {
        if (u[e]) return u[e];
        let [t, s] = e.split(" "), o = r[t] || "right", i = n[o];
        r[s] || (s = "center");
        let a = l[o],
            p = l[i];
        return u[e] = {
            placement: t,
            crossPlacement: s,
            axis: o,
            crossAxis: i,
            size: a,
            crossSize: p
        }, u[e]
    }

    function d(e, t, s, r, n, l, u, p, c, g, d) {
        let {
            placement: m,
            crossPlacement: f,
            axis: h,
            crossAxis: P,
            size: y,
            crossSize: b
        } = r, v = {};
        v[P] = e[P] ?? 0, "center" === f ? v[P] += ((e[b] ?? 0) - (s[b] ?? 0)) / 2 : f !== P && (v[P] += (e[b] ?? 0) - (s[b] ?? 0)), v[P] += l;
        let w = e[P] - s[b] + c + g,
            A = e[P] + e[b] - c - g;
        if (v[P] = (0, o.clamp)(v[P], w, A), m === h) {
            let t = p ? d[y] : d[a[y]];
            v[i[h]] = Math.floor(t - e[h] + n)
        } else v[h] = Math.floor(e[h] + e[y] + n);
        return v
    }

    function m(e, t, s, o, r, n, l, a) {
        let {
            placement: u,
            axis: p,
            size: c
        } = n;
        return u === p ? Math.max(0, s[p] - (l.scroll[p] ?? 0) - (e[p] + (a ? t[p] : 0)) - (o[p] ?? 0) - o[i[p]] - r) : Math.max(0, e[c] + e[p] + (a ? t[p] : 0) - s[p] - s[c] + (l.scroll[p] ?? 0) - (o[p] ?? 0) - o[i[p]] - r)
    }

    function f(e, t) {
        let {
            top: s,
            left: o,
            width: r,
            height: i
        } = e.getBoundingClientRect();
        return t && e instanceof e.ownerDocument.defaultView.HTMLElement && (r = e.offsetWidth, i = e.offsetHeight), {
            top: s,
            left: o,
            width: r,
            height: i
        }
    }

    function h(e, t, s) {
        let {
            top: o,
            left: r,
            width: i,
            height: n
        } = s || f(e, t), {
            scrollTop: l,
            scrollLeft: a,
            clientTop: u,
            clientLeft: p
        } = document.documentElement;
        return {
            top: o + l - u,
            left: r + a - p,
            width: i,
            height: n
        }
    }

    function P(e, t, s, o) {
        let r, i = window.getComputedStyle(e);
        if ("fixed" === i.position) r = o || f(e, s);
        else {
            r = h(e, s, o);
            let i = h(t, s),
                n = window.getComputedStyle(t);
            i.top += (parseInt(n.borderTopWidth, 10) || 0) - t.scrollTop, i.left += (parseInt(n.borderLeftWidth, 10) || 0) - t.scrollLeft, r.top -= i.top, r.left -= i.left
        }
        return r.top -= parseInt(i.marginTop, 10) || 0, r.left -= parseInt(i.marginLeft, 10) || 0, r
    }

    function y(e) {
        let t = window.getComputedStyle(e);
        return "none" !== t.transform || /transform|perspective/.test(t.willChange) || "none" !== t.filter || "paint" === t.contain || "backdropFilter" in t && "none" !== t.backdropFilter || "WebkitBackdropFilter" in t && "none" !== t.WebkitBackdropFilter
    }
    e.s(["calculatePosition", 0, function(e) {
        let t, n, {
                placement: l,
                targetNode: u,
                overlayNode: b,
                scrollNode: v,
                padding: w,
                shouldFlip: A,
                boundaryElement: k,
                offset: M,
                crossOffset: L,
                maxHeight: O,
                arrowSize: R = 0,
                arrowBoundaryOffset: T = 0,
                targetRect: E
            } = e,
            z = "u" > typeof document ? window.visualViewport : null,
            S = b instanceof HTMLElement ? function(e) {
                let t = e.offsetParent;
                if (t && t === document.body && "static" === window.getComputedStyle(t).position && !y(t) && (t = document.documentElement), null == t)
                    for (t = e.parentElement; t && !y(t);) t = t.parentElement;
                return t || document.documentElement
            }(b) : document.documentElement,
            x = S === document.documentElement,
            D = window.getComputedStyle(S).position,
            H = x ? h(u, !1, E) : P(u, S, !1, E);
        if (!x) {
            let {
                marginTop: e,
                marginLeft: t
            } = window.getComputedStyle(u);
            H.top += parseInt(e, 10) || 0, H.left += parseInt(t, 10) || 0
        }
        let C = h(b, !0),
            N = {
                top: parseInt((t = window.getComputedStyle(b)).marginTop, 10) || 0,
                bottom: parseInt(t.marginBottom, 10) || 0,
                left: parseInt(t.marginLeft, 10) || 0,
                right: parseInt(t.marginRight, 10) || 0
            };
        C.width += (N.left ?? 0) + (N.right ?? 0), C.height += (N.top ?? 0) + (N.bottom ?? 0), v.scrollTop, v.scrollLeft, v.scrollWidth, v.scrollHeight;
        let I = p(k, z),
            B = p(S, z);
        if ("BODY" !== k.tagName && "HTML" !== k.tagName || x) n = ("BODY" === k.tagName || "HTML" === k.tagName) && x ? {
            top: 0,
            left: 0,
            width: 0,
            height: 0
        } : P(k, S, !1);
        else {
            let e = f(S, !1);
            n = {
                top: -(e.top - I.top),
                left: -(e.left - I.left),
                width: 0,
                height: 0
            }
        }
        return function(e, t, s, n, l, u, p, f, h, P, y, b, v, w, A, k, M) {
            var L, O, R;
            let T, E, z, S = g(e),
                {
                    size: x,
                    crossAxis: D,
                    crossSize: H,
                    placement: C,
                    crossPlacement: N
                } = S,
                I = d(t, p, s, S, P, y, h, b, w, A, f),
                B = P,
                j = m(p, h, t, n, l + P, S, f, k);
            if (u && s[x] > j) {
                let e = g(`${i[C]} ${N}`),
                    o = d(t, p, s, e, P, y, h, b, w, A, f);
                m(p, h, t, n, l + P, e, f, k) > j && (S = e, I = o, B = P)
            }
            let F = "bottom";
            "top" === S.axis ? "top" === S.placement ? F = "top" : "bottom" === S.placement && (F = "bottom") : "top" === S.crossAxis && ("top" === S.crossPlacement ? F = "bottom" : "bottom" === S.crossPlacement && (F = "top"));
            let W = c(D, I[D], s[H], p, f, l, h);
            I[D] += W;
            let K = (L = I, O = s.height, R = F, T = (null != L.top ? L.top : f[a.height] - (L.bottom ?? 0) - O) - (f.scroll.top ?? 0), E = k ? h.top : 0, z = {
                top: Math.max(p.top + E, (M?.offsetTop ?? p.top) + E),
                bottom: Math.min(p.top + p.height + E, (M?.offsetTop ?? 0) + (M?.height ?? 0))
            }, "top" !== R ? Math.max(0, z.bottom - T - ((n.top ?? 0) + (n.bottom ?? 0) + l)) : Math.max(0, T + O - z.top - ((n.top ?? 0) + (n.bottom ?? 0) + l)));
            v && v < K && (K = v), s.height = Math.min(s.height, K), W = c(D, (I = d(t, p, s, S, B, y, h, b, w, A, f))[D], s[H], p, f, l, h), I[D] += W;
            let U = {},
                V = t[D] - I[D] - n[r[D]],
                Z = V + .5 * t[H],
                G = w / 2 + A,
                Y = "left" === r[D] ? (n.left ?? 0) + (n.right ?? 0) : (n.top ?? 0) + (n.bottom ?? 0),
                _ = s[H] - Y - w / 2 - A,
                J = t[D] + w / 2 - (I[D] + n[r[D]]),
                $ = t[D] + t[H] - w / 2 - (I[D] + n[r[D]]),
                q = (0, o.clamp)(Z, J, $);
            U[D] = (0, o.clamp)(q, G, _), ({
                placement: C,
                crossPlacement: N
            } = S), w ? V = U[D] : "right" === N ? V += t[H] : "center" === N && (V += t[H] / 2);
            let Q = "left" === C || "top" === C ? s[x] : 0,
                X = {
                    x: "top" === C || "bottom" === C ? V : Q,
                    y: "left" === C || "right" === C ? V : Q
                };
            return {
                position: I,
                maxHeight: K,
                arrowOffsetLeft: U.left,
                arrowOffsetTop: U.top,
                placement: C,
                triggerAnchorPoint: X
            }
        }(l, H, C, N, w, A, I, B, n, M, L, !!D && "static" !== D, O, R, T, (0, s.nodeContains)(k, S), z)
    }, "getRect", 0, f])
}, 138381, e => {
    "use strict";
    var t = e.i(600939),
        s = e.i(499531);
    e.s(["useResizeObserver", 0, function(e) {
        let {
            ref: o,
            box: r,
            onResize: i
        } = e, n = (0, t.useEffectEvent)(i);
        (0, s.useEffect)(() => {
            let e = o?.current;
            if (e)
                if (void 0 === window.ResizeObserver) return window.addEventListener("resize", n, !1), () => {
                    window.removeEventListener("resize", n, !1)
                };
                else {
                    let t = new window.ResizeObserver(e => {
                        e.length && n()
                    });
                    return t.observe(e, {
                        box: r
                    }), () => {
                        e && t.unobserve(e)
                    }
                }
        }, [o, r])
    }])
}, 879537, e => {
    "use strict";
    var t = e.i(975950),
        s = e.i(776050),
        o = e.i(101933),
        r = e.i(185559),
        i = e.i(876728),
        n = e.i(138381),
        l = e.i(499531);
    let a = "u" > typeof document ? window.visualViewport : null;
    e.s(["useOverlayPosition", 0, function(e) {
        var u;
        let {
            direction: p
        } = (0, i.useLocale)(), {
            arrowSize: c,
            targetRef: g,
            overlayRef: d,
            arrowRef: m,
            scrollRef: f = d,
            placement: h = "bottom",
            containerPadding: P = 12,
            shouldFlip: y = !0,
            boundaryElement: b = "u" > typeof document ? document.body : null,
            offset: v = 0,
            crossOffset: w = 0,
            shouldUpdatePosition: A = !0,
            isOpen: k = !0,
            onClose: M,
            maxHeight: L,
            arrowBoundaryOffset: O = 0,
            getTargetRect: R
        } = e, [T, E] = (0, l.useState)(null), z = [A, h, d.current, g.current, m?.current, f.current, P, y, b, v, w, k, p, L, O, c], S = (0, l.useRef)(a?.scale);
        (0, l.useEffect)(() => {
            k && (S.current = a?.scale)
        }, [k]);
        let x = (0, l.useCallback)(() => {
            var e;
            if (!1 === A || !k || !d.current || !g.current || !b || a?.scale !== S.current) return;
            let o = null;
            if (f.current && (0, s.isFocusWithin)(f.current)) {
                let e = (0, s.getActiveElement)()?.getBoundingClientRect(),
                    t = f.current.getBoundingClientRect();
                (o = {
                    type: "top",
                    offset: (e?.top ?? 0) - t.top
                }).offset > t.height / 2 && (o.type = "bottom", o.offset = (e?.bottom ?? 0) - t.bottom)
            }
            let r = d.current;
            !L && d.current && (r.style.top = "0px", r.style.bottom = "", r.style.maxHeight = (window.visualViewport?.height ?? window.innerHeight) + "px");
            let i = (0, t.calculatePosition)({
                placement: (e = h, "rtl" === p ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right")),
                overlayNode: d.current,
                targetNode: g.current,
                scrollNode: f.current || d.current,
                padding: P,
                shouldFlip: y,
                boundaryElement: b,
                offset: v,
                crossOffset: w,
                maxHeight: L,
                arrowSize: c ?? (m?.current ? (0, t.getRect)(m.current, !0).width : 0),
                arrowBoundaryOffset: O,
                targetRect: R?.(g.current)
            });
            if (!i.position) return;
            r.style.top = "", r.style.bottom = "", r.style.left = "", r.style.right = "", Object.keys(i.position).forEach(e => r.style[e] = i.position[e] + "px"), r.style.maxHeight = null != i.maxHeight ? i.maxHeight + "px" : "";
            let n = (0, s.getActiveElement)();
            if (o && n && f.current) {
                let e = n.getBoundingClientRect(),
                    t = f.current.getBoundingClientRect(),
                    s = e[o.type] - t[o.type];
                f.current.scrollTop += s - o.offset
            }
            E(i)
        }, z);
        (0, r.useLayoutEffect)(x, z), u = x, (0, r.useLayoutEffect)(() => (window.addEventListener("resize", u, !1), () => {
            window.removeEventListener("resize", u, !1)
        }), [u]), (0, n.useResizeObserver)({
            ref: d,
            onResize: x
        }), (0, n.useResizeObserver)({
            ref: g,
            onResize: x
        });
        let D = (0, l.useRef)(!1);
        (0, r.useLayoutEffect)(() => {
            let e, t = () => {
                    D.current = !0, clearTimeout(e), e = setTimeout(() => {
                        D.current = !1
                    }, 500), x()
                },
                s = () => {
                    D.current && t()
                };
            return a?.addEventListener("resize", t), a?.addEventListener("scroll", s), () => {
                a?.removeEventListener("resize", t), a?.removeEventListener("scroll", s)
            }
        }, [x]);
        let H = (0, l.useCallback)(() => {
            D.current || M?.()
        }, [M, D]);
        return (0, o.useCloseOnScroll)({
            triggerRef: g,
            isOpen: k,
            onClose: M && H
        }), {
            overlayProps: {
                style: {
                    position: T ? "absolute" : "fixed",
                    top: T ? void 0 : 0,
                    left: T ? void 0 : 0,
                    zIndex: 1e5,
                    ...T?.position,
                    maxHeight: T?.maxHeight ?? "100vh"
                }
            },
            placement: T?.placement ?? null,
            triggerAnchorPoint: T?.triggerAnchorPoint ?? null,
            arrowProps: {
                "aria-hidden": "true",
                role: "presentation",
                style: {
                    left: T?.arrowOffsetLeft,
                    top: T?.arrowOffsetTop
                }
            },
            updatePosition: x
        }
    }])
}, 243941, e => {
    "use strict";
    var t = e.i(666747),
        s = e.i(879537),
        o = e.i(429305),
        r = e.i(419476),
        i = e.i(690910),
        n = e.i(499531);
    e.s(["usePopover", 0, function(e, l) {
        let {
            triggerRef: a,
            popoverRef: u,
            groupRef: p,
            isNonModal: c,
            isKeyboardDismissDisabled: g,
            shouldCloseOnInteractOutside: d,
            ...m
        } = e, f = "SubmenuTrigger" === m.trigger, {
            overlayProps: h,
            underlayProps: P
        } = (0, r.useOverlay)({
            isOpen: l.isOpen,
            onClose: l.close,
            shouldCloseOnBlur: !0,
            isDismissable: !c || f,
            isKeyboardDismissDisabled: g,
            shouldCloseOnInteractOutside: d
        }, p ?? u), {
            overlayProps: y,
            arrowProps: b,
            placement: v,
            triggerAnchorPoint: w
        } = (0, s.useOverlayPosition)({
            ...m,
            targetRef: a,
            overlayRef: u,
            isOpen: l.isOpen,
            onClose: c && !f ? l.close : null
        });
        return (0, i.usePreventScroll)({
            isDisabled: c || !l.isOpen
        }), (0, n.useEffect)(() => {
            if (l.isOpen && u.current)
                if (c) return (0, t.keepVisible)(p?.current ?? u.current);
                else return (0, t.ariaHideOutside)([p?.current ?? u.current], {
                    shouldUseInert: !0
                })
        }, [c, l.isOpen, u, p]), {
            popoverProps: (0, o.mergeProps)(h, y),
            arrowProps: b,
            underlayProps: P,
            placement: v,
            triggerAnchorPoint: w
        }
    }])
}, 458229, e => {
    "use strict";
    var t = e.i(429305),
        s = e.i(768307),
        o = e.i(499531);
    let r = {
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

    function i(e = {}) {
        let {
            style: t,
            isFocusable: n
        } = e, [l, a] = (0, o.useState)(!1), {
            focusWithinProps: u
        } = (0, s.useFocusWithin)({
            isDisabled: !n,
            onFocusWithinChange: e => a(e)
        }), p = (0, o.useMemo)(() => l ? t : t ? {
            ...r,
            ...t
        } : r, [l]);
        return {
            visuallyHiddenProps: {
                ...u,
                style: p
            }
        }
    }
    e.s(["VisuallyHidden", 0, function(e) {
        let {
            children: s,
            elementType: r = "div",
            isFocusable: n,
            style: l,
            ...a
        } = e, {
            visuallyHiddenProps: u
        } = i(e);
        return o.default.createElement(r, (0, t.mergeProps)(a, u), s)
    }, "useVisuallyHidden", 0, i])
}, 672451, e => {
    "use strict";
    var t = {};
    t = {
        "ar-AE": {
            dismiss: "تجاهل"
        },
        "bg-BG": {
            dismiss: "Отхвърляне"
        },
        "cs-CZ": {
            dismiss: "Odstranit"
        },
        "da-DK": {
            dismiss: "Luk"
        },
        "de-DE": {
            dismiss: "Schließen"
        },
        "el-GR": {
            dismiss: "Απόρριψη"
        },
        "en-US": {
            dismiss: "Dismiss"
        },
        "es-ES": {
            dismiss: "Descartar"
        },
        "et-EE": {
            dismiss: "Lõpeta"
        },
        "fi-FI": {
            dismiss: "Hylkää"
        },
        "fr-FR": {
            dismiss: "Rejeter"
        },
        "he-IL": {
            dismiss: "התעלם"
        },
        "hr-HR": {
            dismiss: "Odbaci"
        },
        "hu-HU": {
            dismiss: "Elutasítás"
        },
        "it-IT": {
            dismiss: "Ignora"
        },
        "ja-JP": {
            dismiss: "閉じる"
        },
        "ko-KR": {
            dismiss: "무시"
        },
        "lt-LT": {
            dismiss: "Atmesti"
        },
        "lv-LV": {
            dismiss: "Nerādīt"
        },
        "nb-NO": {
            dismiss: "Lukk"
        },
        "nl-NL": {
            dismiss: "Negeren"
        },
        "pl-PL": {
            dismiss: "Zignoruj"
        },
        "pt-BR": {
            dismiss: "Descartar"
        },
        "pt-PT": {
            dismiss: "Dispensar"
        },
        "ro-RO": {
            dismiss: "Revocare"
        },
        "ru-RU": {
            dismiss: "Пропустить"
        },
        "sk-SK": {
            dismiss: "Zrušiť"
        },
        "sl-SI": {
            dismiss: "Opusti"
        },
        "sr-SP": {
            dismiss: "Odbaci"
        },
        "sv-SE": {
            dismiss: "Avvisa"
        },
        "tr-TR": {
            dismiss: "Kapat"
        },
        "uk-UA": {
            dismiss: "Скасувати"
        },
        "zh-CN": {
            dismiss: "取消"
        },
        "zh-TW": {
            dismiss: "關閉"
        }
    };
    var s = e.i(270170),
        o = e.i(501427),
        r = e.i(458229),
        i = e.i(499531);
    e.s(["DismissButton", 0, function(e) {
        var n;
        let {
            onDismiss: l,
            ...a
        } = e, u = (0, o.useLocalizedStringFormatter)((n = t) && n.__esModule ? n.default : n, "@react-aria/overlays"), p = (0, s.useLabels)(a, u.format("dismiss"));
        return i.default.createElement(r.VisuallyHidden, null, i.default.createElement("button", {
            ...p,
            tabIndex: -1,
            onClick: () => {
                l && l()
            },
            style: {
                width: 1,
                height: 1
            }
        }))
    }], 672451)
}, 629080, e => {
    "use strict";
    var t = e.i(259457),
        s = {};
    s = {
        "ar-AE": {
            longPressMessage: "اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة"
        },
        "bg-BG": {
            longPressMessage: "Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто"
        },
        "cs-CZ": {
            longPressMessage: "Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku"
        },
        "da-DK": {
            longPressMessage: "Langt tryk eller tryk på Alt + pil ned for at åbne menuen"
        },
        "de-DE": {
            longPressMessage: "Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen"
        },
        "el-GR": {
            longPressMessage: "Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού"
        },
        "en-US": {
            longPressMessage: "Long press or press Alt + ArrowDown to open menu"
        },
        "es-ES": {
            longPressMessage: "Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú"
        },
        "et-EE": {
            longPressMessage: "Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool"
        },
        "fi-FI": {
            longPressMessage: "Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli"
        },
        "fr-FR": {
            longPressMessage: "Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu."
        },
        "he-IL": {
            longPressMessage: "לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט"
        },
        "hr-HR": {
            longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"
        },
        "hu-HU": {
            longPressMessage: "Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához"
        },
        "it-IT": {
            longPressMessage: "Premi a lungo o premi Alt + Freccia giù per aprire il menu"
        },
        "ja-JP": {
            longPressMessage: "長押しまたは Alt+下矢印キーでメニューを開く"
        },
        "ko-KR": {
            longPressMessage: "길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기"
        },
        "lt-LT": {
            longPressMessage: "Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“."
        },
        "lv-LV": {
            longPressMessage: "Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa"
        },
        "nb-NO": {
            longPressMessage: "Langt trykk eller trykk Alt + PilNed for å åpne menyen"
        },
        "nl-NL": {
            longPressMessage: "Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"
        },
        "pl-PL": {
            longPressMessage: "Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu"
        },
        "pt-BR": {
            longPressMessage: "Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"
        },
        "pt-PT": {
            longPressMessage: "Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"
        },
        "ro-RO": {
            longPressMessage: "Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul"
        },
        "ru-RU": {
            longPressMessage: "Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню"
        },
        "sk-SK": {
            longPressMessage: "Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol"
        },
        "sl-SI": {
            longPressMessage: "Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol"
        },
        "sr-SP": {
            longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"
        },
        "sv-SE": {
            longPressMessage: "Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn"
        },
        "tr-TR": {
            longPressMessage: "Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın"
        },
        "uk-UA": {
            longPressMessage: "Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню"
        },
        "zh-CN": {
            longPressMessage: "长按或按 Alt + 向下方向键以打开菜单"
        },
        "zh-TW": {
            longPressMessage: "長按或按 Alt+向下鍵以開啟功能表"
        }
    };
    var o = e.i(823512),
        r = e.i(501427),
        i = e.i(720728),
        n = e.i(468689);
    e.s(["useMenuTrigger", 0, function(e, l, a) {
        var u;
        let {
            type: p = "menu",
            isDisabled: c,
            trigger: g = "press"
        } = e, d = (0, o.useId)(), {
            triggerProps: m,
            overlayProps: f
        } = (0, n.useOverlayTrigger)({
            type: p
        }, l, a), h = (0, r.useLocalizedStringFormatter)((u = s) && u.__esModule ? u.default : u, "@react-aria/menu"), {
            longPressProps: P
        } = (0, i.useLongPress)({
            isDisabled: c || "longPress" !== g,
            accessibilityDescription: h.format("longPressMessage"),
            onLongPressStart() {
                l.close()
            },
            onLongPress() {
                l.open("first")
            }
        });
        return delete m.onPress, {
            menuTriggerProps: {
                ...m,
                ..."press" === g ? {
                    preventFocusOnPress: !0,
                    onPressStart(e) {
                        "touch" === e.pointerType || "keyboard" === e.pointerType || c || ((0, t.focusWithoutScrolling)(e.target), l.open("virtual" === e.pointerType ? "first" : null))
                    },
                    onPress(e) {
                        "touch" !== e.pointerType || c || ((0, t.focusWithoutScrolling)(e.target), l.toggle())
                    }
                } : P,
                id: d,
                onKeyDown: e => {
                    if (!c && ("longPress" !== g || e.altKey) && a && a.current) switch (e.key) {
                        case "Enter":
                        case " ":
                            if ("longPress" === g || e.isDefaultPrevented()) return;
                        case "ArrowDown":
                            "continuePropagation" in e || e.stopPropagation(), e.preventDefault(), l.toggle("first");
                            break;
                        case "ArrowUp":
                            "continuePropagation" in e || e.stopPropagation(), e.preventDefault(), l.toggle("last");
                            break;
                        default:
                            "continuePropagation" in e && e.continuePropagation()
                    }
                }
            },
            menuProps: {
                ...f,
                "aria-labelledby": d,
                autoFocus: l.focusStrategy || !0,
                onClose: l.close
            }
        }
    }], 629080)
}]);