(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 507546, e => {
    "use strict";
    var t = e.i(465994),
        s = e.i(920096);
    let l = {
            top: "top",
            bottom: "top",
            left: "left",
            right: "left"
        },
        o = {
            top: "bottom",
            bottom: "top",
            left: "right",
            right: "left"
        },
        n = {
            top: "left",
            left: "top"
        },
        r = {
            top: "height",
            left: "width"
        },
        i = {
            width: "totalWidth",
            height: "totalHeight"
        },
        a = {},
        u = "u" > typeof document ? window.visualViewport : null;

    function p(e) {
        var s, l, o, n, r;
        let i = 0,
            a = 0,
            p = 0,
            c = 0,
            d = 0,
            g = 0,
            m = {},
            h = (null != (s = null == u ? void 0 : u.scale) ? s : 1) > 1;
        if ("BODY" === e.tagName) {
            let t = document.documentElement;
            p = t.clientWidth, c = t.clientHeight, i = null != (l = null == u ? void 0 : u.width) ? l : p, a = null != (o = null == u ? void 0 : u.height) ? o : c, m.top = t.scrollTop || e.scrollTop, m.left = t.scrollLeft || e.scrollLeft, u && (d = u.offsetTop, g = u.offsetLeft)
        } else({
            width: i,
            height: a,
            top: d,
            left: g
        } = f(e)), m.top = e.scrollTop, m.left = e.scrollLeft, p = i, c = a;
        return (0, t.isWebKit)() && ("BODY" === e.tagName || "HTML" === e.tagName) && h && (m.top = 0, m.left = 0, d = null != (n = null == u ? void 0 : u.pageTop) ? n : 0, g = null != (r = null == u ? void 0 : u.pageLeft) ? r : 0), {
            width: i,
            height: a,
            totalWidth: p,
            totalHeight: c,
            scroll: m,
            top: d,
            left: g
        }
    }

    function c(e, t, s, o, n, i, a) {
        var u;
        let p = null != (u = n.scroll[e]) ? u : 0,
            c = o[r[e]],
            d = o.scroll[l[e]] + i,
            g = c + o.scroll[l[e]] - i,
            m = t - p + a[e] - o[l[e]],
            f = t - p + s + a[e] - o[l[e]];
        return m < d ? d - m : f > g ? Math.max(g - f, d - m) : 0
    }

    function d(e) {
        if (a[e]) return a[e];
        let [t, s] = e.split(" "), o = l[t] || "right", i = n[o];
        l[s] || (s = "center");
        let u = r[o],
            p = r[i];
        return a[e] = {
            placement: t,
            crossPlacement: s,
            axis: o,
            crossAxis: i,
            size: u,
            crossSize: p
        }, a[e]
    }

    function g(e, t, l, n, r, a, u, p, c, d) {
        var g, m, f, h, v;
        let {
            placement: P,
            crossPlacement: y,
            axis: b,
            crossAxis: w,
            size: k,
            crossSize: A
        } = n, M = {};
        M[w] = null != (g = e[w]) ? g : 0, "center" === y ? M[w] += ((null != (m = e[A]) ? m : 0) - (null != (f = l[A]) ? f : 0)) / 2 : y !== w && (M[w] += (null != (h = e[A]) ? h : 0) - (null != (v = l[A]) ? v : 0)), M[w] += a;
        let L = e[w] - l[A] + c + d,
            O = e[w] + e[A] - c - d;
        if (M[w] = (0, s.clamp)(M[w], L, O), P === b) {
            let s = p ? u[k] : t[i[k]];
            M[o[b]] = Math.floor(s - e[b] + r)
        } else M[b] = Math.floor(e[b] + e[k] + r);
        return M
    }

    function m(e, t, s, l, n, r) {
        var i, a, u;
        let {
            placement: p,
            axis: c,
            size: d
        } = r;
        return p === c ? Math.max(0, s[c] - e[c] - (null != (i = e.scroll[c]) ? i : 0) + t[c] - (null != (a = l[c]) ? a : 0) - l[o[c]] - n) : Math.max(0, e[d] + e[c] + e.scroll[c] - t[c] - s[c] - s[d] - (null != (u = l[c]) ? u : 0) - l[o[c]] - n)
    }

    function f(e) {
        let {
            top: t,
            left: s,
            width: l,
            height: o
        } = e.getBoundingClientRect(), {
            scrollTop: n,
            scrollLeft: r,
            clientTop: i,
            clientLeft: a
        } = document.documentElement;
        return {
            top: t + n - i,
            left: s + r - a,
            width: l,
            height: o
        }
    }

    function h(e, t) {
        let s, l = window.getComputedStyle(e);
        if ("fixed" === l.position) {
            let {
                top: t,
                left: l,
                width: o,
                height: n
            } = e.getBoundingClientRect();
            s = {
                top: t,
                left: l,
                width: o,
                height: n
            }
        } else {
            s = f(e);
            let l = f(t),
                o = window.getComputedStyle(t);
            l.top += (parseInt(o.borderTopWidth, 10) || 0) - t.scrollTop, l.left += (parseInt(o.borderLeftWidth, 10) || 0) - t.scrollLeft, s.top -= l.top, s.left -= l.left
        }
        return s.top -= parseInt(l.marginTop, 10) || 0, s.left -= parseInt(l.marginLeft, 10) || 0, s
    }

    function v(e) {
        let t = window.getComputedStyle(e);
        return "none" !== t.transform || /transform|perspective/.test(t.willChange) || "none" !== t.filter || "paint" === t.contain || "backdropFilter" in t && "none" !== t.backdropFilter || "WebkitBackdropFilter" in t && "none" !== t.WebkitBackdropFilter
    }
    e.s(["calculatePosition", 0, function(e) {
        var t, n, r, a;
        let u, {
                placement: P,
                targetNode: y,
                overlayNode: b,
                scrollNode: w,
                padding: k,
                shouldFlip: A,
                boundaryElement: M,
                offset: L,
                crossOffset: O,
                maxHeight: z,
                arrowSize: E = 0,
                arrowBoundaryOffset: R = 0
            } = e,
            S = b instanceof HTMLElement ? function(e) {
                let t = e.offsetParent;
                if (t && t === document.body && "static" === window.getComputedStyle(t).position && !v(t) && (t = document.documentElement), null == t)
                    for (t = e.parentElement; t && !v(t);) t = t.parentElement;
                return t || document.documentElement
            }(b) : document.documentElement,
            T = S === document.documentElement,
            D = window.getComputedStyle(S).position,
            x = T ? f(y) : h(y, S);
        if (!T) {
            let {
                marginTop: e,
                marginLeft: t
            } = window.getComputedStyle(y);
            x.top += parseInt(e, 10) || 0, x.left += parseInt(t, 10) || 0
        }
        let C = f(b),
            H = {
                top: parseInt((u = window.getComputedStyle(b)).marginTop, 10) || 0,
                bottom: parseInt(u.marginBottom, 10) || 0,
                left: parseInt(u.marginLeft, 10) || 0,
                right: parseInt(u.marginRight, 10) || 0
            };
        C.width += (null != (t = H.left) ? t : 0) + (null != (n = H.right) ? n : 0), C.height += (null != (r = H.top) ? r : 0) + (null != (a = H.bottom) ? a : 0);
        let N = {
                top: w.scrollTop,
                left: w.scrollLeft,
                width: w.scrollWidth,
                height: w.scrollHeight
            },
            B = p(M),
            I = p(S),
            j = "BODY" === M.tagName ? f(S) : h(S, M);
        return "HTML" === S.tagName && "BODY" === M.tagName && (I.scroll.top = 0, I.scroll.left = 0),
            function(e, t, n, r, a, u, p, f, h, v, P, y, b, w, k, A) {
                var M, L, O, z, E, R, S, T, D, x, C, H, N, B;
                let I, j, F, K = d(e),
                    {
                        size: W,
                        crossAxis: U,
                        crossSize: V,
                        placement: Z,
                        crossPlacement: G
                    } = K,
                    Y = g(t, f, n, K, P, y, v, b, k, A),
                    _ = P,
                    J = m(f, v, t, a, u + P, K);
                if (p && r[W] > J) {
                    let e = d(`${o[Z]} ${G}`),
                        s = g(t, f, n, e, P, y, v, b, k, A);
                    m(f, v, t, a, u + P, e) > J && (K = e, Y = s, _ = P)
                }
                let $ = "bottom";
                "top" === K.axis ? "top" === K.placement ? $ = "top" : "bottom" === K.placement && ($ = "bottom") : "top" === K.crossAxis && ("top" === K.crossPlacement ? $ = "bottom" : "bottom" === K.crossPlacement && ($ = "top"));
                let q = c(U, Y[U], n[V], f, h, u, v);
                Y[U] += q;
                let Q = (E = Y, R = n.height, S = $, I = b ? v.height : f[i.height], j = null != E.top ? v.top + E.top : v.top + (I - (null != (T = E.bottom) ? T : 0) - R), F = "top" !== S ? Math.max(0, f.height + f.top + (null != (D = f.scroll.top) ? D : 0) - j - ((null != (x = a.top) ? x : 0) + (null != (C = a.bottom) ? C : 0) + u)) : Math.max(0, j + R - (f.top + (null != (H = f.scroll.top) ? H : 0)) - ((null != (N = a.top) ? N : 0) + (null != (B = a.bottom) ? B : 0) + u)), Math.min(f.height - 2 * u, F));
                w && w < Q && (Q = w), n.height = Math.min(n.height, Q), q = c(U, (Y = g(t, f, n, K, _, y, v, b, k, A))[U], n[V], f, h, u, v), Y[U] += q;
                let X = {},
                    ee = t[U] + .5 * t[V] - Y[U] - a[l[U]],
                    et = k / 2 + A,
                    es = "left" === l[U] ? (null != (M = a.left) ? M : 0) + (null != (L = a.right) ? L : 0) : (null != (O = a.top) ? O : 0) + (null != (z = a.bottom) ? z : 0),
                    el = n[V] - es - k / 2 - A,
                    eo = t[U] + k / 2 - (Y[U] + a[l[U]]),
                    en = t[U] + t[V] - k / 2 - (Y[U] + a[l[U]]),
                    er = (0, s.clamp)(ee, eo, en);
                return X[U] = (0, s.clamp)(er, et, el), {
                    position: Y,
                    maxHeight: Q,
                    arrowOffsetLeft: X.left,
                    arrowOffsetTop: X.top,
                    placement: K.placement
                }
            }(P, x, C, N, H, k, A, B, I, j, L, O, !!D && "static" !== D, z, E, R)
    }])
}, 506275, e => {
    "use strict";
    var t = e.i(3931);
    e.s(["useResizeObserver", 0, function(e) {
        let {
            ref: s,
            box: l,
            onResize: o
        } = e;
        (0, t.useEffect)(() => {
            let e = null == s ? void 0 : s.current;
            if (e)
                if (void 0 === window.ResizeObserver) return window.addEventListener("resize", o, !1), () => {
                    window.removeEventListener("resize", o, !1)
                };
                else {
                    let t = new window.ResizeObserver(e => {
                        e.length && o()
                    });
                    return t.observe(e, {
                        box: l
                    }), () => {
                        e && t.unobserve(e)
                    }
                }
        }, [o, s, l])
    }])
}, 188655, e => {
    "use strict";
    var t = e.i(507546),
        s = e.i(282001),
        l = e.i(3931),
        o = e.i(237483),
        n = e.i(506275),
        r = e.i(754894);
    let i = "u" > typeof document ? window.visualViewport : null;
    e.s(["useOverlayPosition", 0, function(e) {
        var a, u, p;
        let {
            direction: c
        } = (0, r.useLocale)(), {
            arrowSize: d = 0,
            targetRef: g,
            overlayRef: m,
            scrollRef: f = m,
            placement: h = "bottom",
            containerPadding: v = 12,
            shouldFlip: P = !0,
            boundaryElement: y = "u" > typeof document ? document.body : null,
            offset: b = 0,
            crossOffset: w = 0,
            shouldUpdatePosition: k = !0,
            isOpen: A = !0,
            onClose: M,
            maxHeight: L,
            arrowBoundaryOffset: O = 0
        } = e, [z, E] = (0, l.useState)(null), R = [k, h, m.current, g.current, f.current, v, P, y, b, w, A, c, L, O, d], S = (0, l.useRef)(null == i ? void 0 : i.scale);
        (0, l.useEffect)(() => {
            A && (S.current = null == i ? void 0 : i.scale)
        }, [A]);
        let T = (0, l.useCallback)(() => {
            var e, s, l, o, n, r;
            if (!1 === k || !A || !m.current || !g.current || !y || (null == i ? void 0 : i.scale) !== S.current) return;
            let a = null;
            if (f.current && f.current.contains(document.activeElement)) {
                let t = null == (e = document.activeElement) ? void 0 : e.getBoundingClientRect(),
                    o = f.current.getBoundingClientRect();
                (a = {
                    type: "top",
                    offset: (null != (s = null == t ? void 0 : t.top) ? s : 0) - o.top
                }).offset > o.height / 2 && (a.type = "bottom", a.offset = (null != (l = null == t ? void 0 : t.bottom) ? l : 0) - o.bottom)
            }
            let u = m.current;
            !L && m.current && (u.style.top = "0px", u.style.bottom = "", u.style.maxHeight = (null != (n = null == (o = window.visualViewport) ? void 0 : o.height) ? n : window.innerHeight) + "px");
            let p = (0, t.calculatePosition)({
                placement: (r = h, "rtl" === c ? r.replace("start", "right").replace("end", "left") : r.replace("start", "left").replace("end", "right")),
                overlayNode: m.current,
                targetNode: g.current,
                scrollNode: f.current || m.current,
                padding: v,
                shouldFlip: P,
                boundaryElement: y,
                offset: b,
                crossOffset: w,
                maxHeight: L,
                arrowSize: d,
                arrowBoundaryOffset: O
            });
            if (p.position) {
                if (u.style.top = "", u.style.bottom = "", u.style.left = "", u.style.right = "", Object.keys(p.position).forEach(e => u.style[e] = p.position[e] + "px"), u.style.maxHeight = null != p.maxHeight ? p.maxHeight + "px" : "", a && document.activeElement && f.current) {
                    let e = document.activeElement.getBoundingClientRect(),
                        t = f.current.getBoundingClientRect(),
                        s = e[a.type] - t[a.type];
                    f.current.scrollTop += s - a.offset
                }
                E(p)
            }
        }, R);
        (0, o.useLayoutEffect)(T, R), p = T, (0, o.useLayoutEffect)(() => (window.addEventListener("resize", p, !1), () => {
            window.removeEventListener("resize", p, !1)
        }), [p]), (0, n.useResizeObserver)({
            ref: m,
            onResize: T
        }), (0, n.useResizeObserver)({
            ref: g,
            onResize: T
        });
        let D = (0, l.useRef)(!1);
        (0, o.useLayoutEffect)(() => {
            let e, t = () => {
                    D.current = !0, clearTimeout(e), e = setTimeout(() => {
                        D.current = !1
                    }, 500), T()
                },
                s = () => {
                    D.current && t()
                };
            return null == i || i.addEventListener("resize", t), null == i || i.addEventListener("scroll", s), () => {
                null == i || i.removeEventListener("resize", t), null == i || i.removeEventListener("scroll", s)
            }
        }, [T]);
        let x = (0, l.useCallback)(() => {
            D.current || null == M || M()
        }, [M, D]);
        return (0, s.useCloseOnScroll)({
            triggerRef: g,
            isOpen: A,
            onClose: M && x
        }), {
            overlayProps: {
                style: {
                    position: "absolute",
                    zIndex: 1e5,
                    ...null == z ? void 0 : z.position,
                    maxHeight: null != (a = null == z ? void 0 : z.maxHeight) ? a : "100vh"
                }
            },
            placement: null != (u = null == z ? void 0 : z.placement) ? u : null,
            arrowProps: {
                "aria-hidden": "true",
                role: "presentation",
                style: {
                    left: null == z ? void 0 : z.arrowOffsetLeft,
                    top: null == z ? void 0 : z.arrowOffsetTop
                }
            },
            updatePosition: T
        }
    }])
}, 92257, e => {
    "use strict";
    var t = e.i(669877),
        s = e.i(188655),
        l = e.i(984782),
        o = e.i(155266),
        n = e.i(237483),
        r = e.i(604082);
    e.s(["usePopover", 0, function(e, i) {
        let {
            triggerRef: a,
            popoverRef: u,
            groupRef: p,
            isNonModal: c,
            isKeyboardDismissDisabled: d,
            shouldCloseOnInteractOutside: g,
            ...m
        } = e, f = "SubmenuTrigger" === m.trigger, {
            overlayProps: h,
            underlayProps: v
        } = (0, l.useOverlay)({
            isOpen: i.isOpen,
            onClose: i.close,
            shouldCloseOnBlur: !0,
            isDismissable: !c || f,
            isKeyboardDismissDisabled: d,
            shouldCloseOnInteractOutside: g
        }, null != p ? p : u), {
            overlayProps: P,
            arrowProps: y,
            placement: b
        } = (0, s.useOverlayPosition)({
            ...m,
            targetRef: a,
            overlayRef: u,
            isOpen: i.isOpen,
            onClose: c && !f ? i.close : null
        });
        return (0, o.usePreventScroll)({
            isDisabled: c || !i.isOpen
        }), (0, n.useLayoutEffect)(() => {
            if (i.isOpen && u.current) {
                var e, s;
                return c ? (0, t.keepVisible)(null != (e = null == p ? void 0 : p.current) ? e : u.current) : (0, t.ariaHideOutside)([null != (s = null == p ? void 0 : p.current) ? s : u.current])
            }
        }, [c, i.isOpen, u, p]), {
            popoverProps: (0, r.mergeProps)(h, P),
            arrowProps: y,
            underlayProps: v,
            placement: b
        }
    }])
}, 23953, e => {
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
    var s = e.i(3931),
        l = e.i(59284),
        o = e.i(235752),
        n = e.i(576508);
    e.s(["DismissButton", 0, function(e) {
        var r;
        let {
            onDismiss: i,
            ...a
        } = e, u = (0, o.useLocalizedStringFormatter)((r = t) && r.__esModule ? r.default : r, "@react-aria/overlays"), p = (0, l.useLabels)(a, u.format("dismiss"));
        return s.default.createElement(n.VisuallyHidden, null, s.default.createElement("button", {
            ...p,
            tabIndex: -1,
            onClick: () => {
                i && i()
            },
            style: {
                width: 1,
                height: 1
            }
        }))
    }], 23953)
}, 841811, e => {
    "use strict";
    var t = {};
    t = {
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
            longPressMessage: "Premere a lungo o premere Alt + Freccia giù per aprire il menu"
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
    var s = e.i(231781),
        l = e.i(256630),
        o = e.i(226797),
        n = e.i(235752),
        r = e.i(441157);
    e.s(["useMenuTrigger", 0, function(e, i, a) {
        var u;
        let {
            type: p = "menu",
            isDisabled: c,
            trigger: d = "press"
        } = e, g = (0, s.useId)(), {
            triggerProps: m,
            overlayProps: f
        } = (0, r.useOverlayTrigger)({
            type: p
        }, i, a), h = (0, n.useLocalizedStringFormatter)((u = t) && u.__esModule ? u.default : u, "@react-aria/menu"), {
            longPressProps: v
        } = (0, o.useLongPress)({
            isDisabled: c || "longPress" !== d,
            accessibilityDescription: h.format("longPressMessage"),
            onLongPressStart() {
                i.close()
            },
            onLongPress() {
                i.open("first")
            }
        });
        return delete m.onPress, {
            menuTriggerProps: {
                ...m,
                ..."press" === d ? {
                    preventFocusOnPress: !0,
                    onPressStart(e) {
                        "touch" === e.pointerType || "keyboard" === e.pointerType || c || ((0, l.focusWithoutScrolling)(e.target), i.open("virtual" === e.pointerType ? "first" : null))
                    },
                    onPress(e) {
                        "touch" !== e.pointerType || c || ((0, l.focusWithoutScrolling)(e.target), i.toggle())
                    }
                } : v,
                id: g,
                onKeyDown: e => {
                    if (!c && ("longPress" !== d || e.altKey) && a && a.current) switch (e.key) {
                        case "Enter":
                        case " ":
                            if ("longPress" === d) return;
                        case "ArrowDown":
                            "continuePropagation" in e || e.stopPropagation(), e.preventDefault(), i.toggle("first");
                            break;
                        case "ArrowUp":
                            "continuePropagation" in e || e.stopPropagation(), e.preventDefault(), i.toggle("last");
                            break;
                        default:
                            "continuePropagation" in e && e.continuePropagation()
                    }
                }
            },
            menuProps: {
                ...f,
                "aria-labelledby": g,
                autoFocus: i.focusStrategy || !0,
                onClose: i.close
            }
        }
    }], 841811)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8524233b-dc29-5bec-9915-7678a1e81ad1")
    } catch (e) {}
}();
//# debugId=8524233b-dc29-5bec-9915-7678a1e81ad1