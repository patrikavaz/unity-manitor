(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 507546, e => {
    "use strict";
    var t = e.i(465994),
        l = e.i(920096);
    let s = {
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
        r = {
            top: "left",
            left: "top"
        },
        n = {
            top: "height",
            left: "width"
        },
        i = {
            width: "totalWidth",
            height: "totalHeight"
        },
        a = {},
        u = "u" > typeof document ? window.visualViewport : null;

    function d(e) {
        var l, s, o, r, n;
        let i = 0,
            a = 0,
            d = 0,
            c = 0,
            p = 0,
            g = 0,
            m = {},
            h = (null != (l = null == u ? void 0 : u.scale) ? l : 1) > 1;
        if ("BODY" === e.tagName) {
            let t = document.documentElement;
            d = t.clientWidth, c = t.clientHeight, i = null != (s = null == u ? void 0 : u.width) ? s : d, a = null != (o = null == u ? void 0 : u.height) ? o : c, m.top = t.scrollTop || e.scrollTop, m.left = t.scrollLeft || e.scrollLeft, u && (p = u.offsetTop, g = u.offsetLeft)
        } else({
            width: i,
            height: a,
            top: p,
            left: g
        } = f(e)), m.top = e.scrollTop, m.left = e.scrollLeft, d = i, c = a;
        return (0, t.isWebKit)() && ("BODY" === e.tagName || "HTML" === e.tagName) && h && (m.top = 0, m.left = 0, p = null != (r = null == u ? void 0 : u.pageTop) ? r : 0, g = null != (n = null == u ? void 0 : u.pageLeft) ? n : 0), {
            width: i,
            height: a,
            totalWidth: d,
            totalHeight: c,
            scroll: m,
            top: p,
            left: g
        }
    }

    function c(e, t, l, o, r, i, a) {
        var u;
        let d = null != (u = r.scroll[e]) ? u : 0,
            c = o[n[e]],
            p = o.scroll[s[e]] + i,
            g = c + o.scroll[s[e]] - i,
            m = t - d + a[e] - o[s[e]],
            f = t - d + l + a[e] - o[s[e]];
        return m < p ? p - m : f > g ? Math.max(g - f, p - m) : 0
    }

    function p(e) {
        if (a[e]) return a[e];
        let [t, l] = e.split(" "), o = s[t] || "right", i = r[o];
        s[l] || (l = "center");
        let u = n[o],
            d = n[i];
        return a[e] = {
            placement: t,
            crossPlacement: l,
            axis: o,
            crossAxis: i,
            size: u,
            crossSize: d
        }, a[e]
    }

    function g(e, t, s, r, n, a, u, d, c, p) {
        var g, m, f, h, y;
        let {
            placement: v,
            crossPlacement: b,
            axis: P,
            crossAxis: w,
            size: k,
            crossSize: x
        } = r, S = {};
        S[w] = null != (g = e[w]) ? g : 0, "center" === b ? S[w] += ((null != (m = e[x]) ? m : 0) - (null != (f = s[x]) ? f : 0)) / 2 : b !== w && (S[w] += (null != (h = e[x]) ? h : 0) - (null != (y = s[x]) ? y : 0)), S[w] += a;
        let M = e[w] - s[x] + c + p,
            R = e[w] + e[x] - c - p;
        if (S[w] = (0, l.clamp)(S[w], M, R), v === P) {
            let l = d ? u[k] : t[i[k]];
            S[o[P]] = Math.floor(l - e[P] + n)
        } else S[P] = Math.floor(e[P] + e[k] + n);
        return S
    }

    function m(e, t, l, s, r, n) {
        var i, a, u;
        let {
            placement: d,
            axis: c,
            size: p
        } = n;
        return d === c ? Math.max(0, l[c] - e[c] - (null != (i = e.scroll[c]) ? i : 0) + t[c] - (null != (a = s[c]) ? a : 0) - s[o[c]] - r) : Math.max(0, e[p] + e[c] + e.scroll[c] - t[c] - l[c] - l[p] - (null != (u = s[c]) ? u : 0) - s[o[c]] - r)
    }

    function f(e) {
        let {
            top: t,
            left: l,
            width: s,
            height: o
        } = e.getBoundingClientRect(), {
            scrollTop: r,
            scrollLeft: n,
            clientTop: i,
            clientLeft: a
        } = document.documentElement;
        return {
            top: t + r - i,
            left: l + n - a,
            width: s,
            height: o
        }
    }

    function h(e, t) {
        let l, s = window.getComputedStyle(e);
        if ("fixed" === s.position) {
            let {
                top: t,
                left: s,
                width: o,
                height: r
            } = e.getBoundingClientRect();
            l = {
                top: t,
                left: s,
                width: o,
                height: r
            }
        } else {
            l = f(e);
            let s = f(t),
                o = window.getComputedStyle(t);
            s.top += (parseInt(o.borderTopWidth, 10) || 0) - t.scrollTop, s.left += (parseInt(o.borderLeftWidth, 10) || 0) - t.scrollLeft, l.top -= s.top, l.left -= s.left
        }
        return l.top -= parseInt(s.marginTop, 10) || 0, l.left -= parseInt(s.marginLeft, 10) || 0, l
    }

    function y(e) {
        let t = window.getComputedStyle(e);
        return "none" !== t.transform || /transform|perspective/.test(t.willChange) || "none" !== t.filter || "paint" === t.contain || "backdropFilter" in t && "none" !== t.backdropFilter || "WebkitBackdropFilter" in t && "none" !== t.WebkitBackdropFilter
    }
    e.s(["calculatePosition", 0, function(e) {
        var t, r, n, a;
        let u, {
                placement: v,
                targetNode: b,
                overlayNode: P,
                scrollNode: w,
                padding: k,
                shouldFlip: x,
                boundaryElement: S,
                offset: M,
                crossOffset: R,
                maxHeight: O,
                arrowSize: C = 0,
                arrowBoundaryOffset: D = 0
            } = e,
            A = P instanceof HTMLElement ? function(e) {
                let t = e.offsetParent;
                if (t && t === document.body && "static" === window.getComputedStyle(t).position && !y(t) && (t = document.documentElement), null == t)
                    for (t = e.parentElement; t && !y(t);) t = t.parentElement;
                return t || document.documentElement
            }(P) : document.documentElement,
            E = A === document.documentElement,
            L = window.getComputedStyle(A).position,
            K = E ? f(b) : h(b, A);
        if (!E) {
            let {
                marginTop: e,
                marginLeft: t
            } = window.getComputedStyle(b);
            K.top += parseInt(e, 10) || 0, K.left += parseInt(t, 10) || 0
        }
        let T = f(P),
            z = {
                top: parseInt((u = window.getComputedStyle(P)).marginTop, 10) || 0,
                bottom: parseInt(u.marginBottom, 10) || 0,
                left: parseInt(u.marginLeft, 10) || 0,
                right: parseInt(u.marginRight, 10) || 0
            };
        T.width += (null != (t = z.left) ? t : 0) + (null != (r = z.right) ? r : 0), T.height += (null != (n = z.top) ? n : 0) + (null != (a = z.bottom) ? a : 0);
        let j = {
                top: w.scrollTop,
                left: w.scrollLeft,
                width: w.scrollWidth,
                height: w.scrollHeight
            },
            B = d(S),
            I = d(A),
            F = "BODY" === S.tagName ? f(A) : h(A, S);
        return "HTML" === A.tagName && "BODY" === S.tagName && (I.scroll.top = 0, I.scroll.left = 0),
            function(e, t, r, n, a, u, d, f, h, y, v, b, P, w, k, x) {
                var S, M, R, O, C, D, A, E, L, K, T, z, j, B;
                let I, F, N, H = p(e),
                    {
                        size: W,
                        crossAxis: U,
                        crossSize: V,
                        placement: _,
                        crossPlacement: Z
                    } = H,
                    q = g(t, f, r, H, v, b, y, P, k, x),
                    G = v,
                    Y = m(f, y, t, a, u + v, H);
                if (d && n[W] > Y) {
                    let e = p(`${o[_]} ${Z}`),
                        l = g(t, f, r, e, v, b, y, P, k, x);
                    m(f, y, t, a, u + v, e) > Y && (H = e, q = l, G = v)
                }
                let J = "bottom";
                "top" === H.axis ? "top" === H.placement ? J = "top" : "bottom" === H.placement && (J = "bottom") : "top" === H.crossAxis && ("top" === H.crossPlacement ? J = "bottom" : "bottom" === H.crossPlacement && (J = "top"));
                let $ = c(U, q[U], r[V], f, h, u, y);
                q[U] += $;
                let Q = (C = q, D = r.height, A = J, I = P ? y.height : f[i.height], F = null != C.top ? y.top + C.top : y.top + (I - (null != (E = C.bottom) ? E : 0) - D), N = "top" !== A ? Math.max(0, f.height + f.top + (null != (L = f.scroll.top) ? L : 0) - F - ((null != (K = a.top) ? K : 0) + (null != (T = a.bottom) ? T : 0) + u)) : Math.max(0, F + D - (f.top + (null != (z = f.scroll.top) ? z : 0)) - ((null != (j = a.top) ? j : 0) + (null != (B = a.bottom) ? B : 0) + u)), Math.min(f.height - 2 * u, N));
                w && w < Q && (Q = w), r.height = Math.min(r.height, Q), $ = c(U, (q = g(t, f, r, H, G, b, y, P, k, x))[U], r[V], f, h, u, y), q[U] += $;
                let X = {},
                    ee = t[U] + .5 * t[V] - q[U] - a[s[U]],
                    et = k / 2 + x,
                    el = "left" === s[U] ? (null != (S = a.left) ? S : 0) + (null != (M = a.right) ? M : 0) : (null != (R = a.top) ? R : 0) + (null != (O = a.bottom) ? O : 0),
                    es = r[V] - el - k / 2 - x,
                    eo = t[U] + k / 2 - (q[U] + a[s[U]]),
                    er = t[U] + t[V] - k / 2 - (q[U] + a[s[U]]),
                    en = (0, l.clamp)(ee, eo, er);
                return X[U] = (0, l.clamp)(en, et, es), {
                    position: q,
                    maxHeight: Q,
                    arrowOffsetLeft: X.left,
                    arrowOffsetTop: X.top,
                    placement: H.placement
                }
            }(v, K, T, j, z, k, x, B, I, F, M, R, !!L && "static" !== L, O, C, D)
    }])
}, 506275, e => {
    "use strict";
    var t = e.i(3931);
    e.s(["useResizeObserver", 0, function(e) {
        let {
            ref: l,
            box: s,
            onResize: o
        } = e;
        (0, t.useEffect)(() => {
            let e = null == l ? void 0 : l.current;
            if (e)
                if (void 0 === window.ResizeObserver) return window.addEventListener("resize", o, !1), () => {
                    window.removeEventListener("resize", o, !1)
                };
                else {
                    let t = new window.ResizeObserver(e => {
                        e.length && o()
                    });
                    return t.observe(e, {
                        box: s
                    }), () => {
                        e && t.unobserve(e)
                    }
                }
        }, [o, l, s])
    }])
}, 92257, 188655, e => {
    "use strict";
    var t = e.i(669877),
        l = e.i(507546),
        s = e.i(282001),
        o = e.i(3931),
        r = e.i(237483),
        n = e.i(506275),
        i = e.i(754894);
    let a = "u" > typeof document ? window.visualViewport : null;

    function u(e) {
        var t, u, d;
        let {
            direction: c
        } = (0, i.useLocale)(), {
            arrowSize: p = 0,
            targetRef: g,
            overlayRef: m,
            scrollRef: f = m,
            placement: h = "bottom",
            containerPadding: y = 12,
            shouldFlip: v = !0,
            boundaryElement: b = "u" > typeof document ? document.body : null,
            offset: P = 0,
            crossOffset: w = 0,
            shouldUpdatePosition: k = !0,
            isOpen: x = !0,
            onClose: S,
            maxHeight: M,
            arrowBoundaryOffset: R = 0
        } = e, [O, C] = (0, o.useState)(null), D = [k, h, m.current, g.current, f.current, y, v, b, P, w, x, c, M, R, p], A = (0, o.useRef)(null == a ? void 0 : a.scale);
        (0, o.useEffect)(() => {
            x && (A.current = null == a ? void 0 : a.scale)
        }, [x]);
        let E = (0, o.useCallback)(() => {
            var e, t, s, o, r, n;
            if (!1 === k || !x || !m.current || !g.current || !b || (null == a ? void 0 : a.scale) !== A.current) return;
            let i = null;
            if (f.current && f.current.contains(document.activeElement)) {
                let l = null == (e = document.activeElement) ? void 0 : e.getBoundingClientRect(),
                    o = f.current.getBoundingClientRect();
                (i = {
                    type: "top",
                    offset: (null != (t = null == l ? void 0 : l.top) ? t : 0) - o.top
                }).offset > o.height / 2 && (i.type = "bottom", i.offset = (null != (s = null == l ? void 0 : l.bottom) ? s : 0) - o.bottom)
            }
            let u = m.current;
            !M && m.current && (u.style.top = "0px", u.style.bottom = "", u.style.maxHeight = (null != (r = null == (o = window.visualViewport) ? void 0 : o.height) ? r : window.innerHeight) + "px");
            let d = (0, l.calculatePosition)({
                placement: (n = h, "rtl" === c ? n.replace("start", "right").replace("end", "left") : n.replace("start", "left").replace("end", "right")),
                overlayNode: m.current,
                targetNode: g.current,
                scrollNode: f.current || m.current,
                padding: y,
                shouldFlip: v,
                boundaryElement: b,
                offset: P,
                crossOffset: w,
                maxHeight: M,
                arrowSize: p,
                arrowBoundaryOffset: R
            });
            if (d.position) {
                if (u.style.top = "", u.style.bottom = "", u.style.left = "", u.style.right = "", Object.keys(d.position).forEach(e => u.style[e] = d.position[e] + "px"), u.style.maxHeight = null != d.maxHeight ? d.maxHeight + "px" : "", i && document.activeElement && f.current) {
                    let e = document.activeElement.getBoundingClientRect(),
                        t = f.current.getBoundingClientRect(),
                        l = e[i.type] - t[i.type];
                    f.current.scrollTop += l - i.offset
                }
                C(d)
            }
        }, D);
        (0, r.useLayoutEffect)(E, D), d = E, (0, r.useLayoutEffect)(() => (window.addEventListener("resize", d, !1), () => {
            window.removeEventListener("resize", d, !1)
        }), [d]), (0, n.useResizeObserver)({
            ref: m,
            onResize: E
        }), (0, n.useResizeObserver)({
            ref: g,
            onResize: E
        });
        let L = (0, o.useRef)(!1);
        (0, r.useLayoutEffect)(() => {
            let e, t = () => {
                    L.current = !0, clearTimeout(e), e = setTimeout(() => {
                        L.current = !1
                    }, 500), E()
                },
                l = () => {
                    L.current && t()
                };
            return null == a || a.addEventListener("resize", t), null == a || a.addEventListener("scroll", l), () => {
                null == a || a.removeEventListener("resize", t), null == a || a.removeEventListener("scroll", l)
            }
        }, [E]);
        let K = (0, o.useCallback)(() => {
            L.current || null == S || S()
        }, [S, L]);
        return (0, s.useCloseOnScroll)({
            triggerRef: g,
            isOpen: x,
            onClose: S && K
        }), {
            overlayProps: {
                style: {
                    position: "absolute",
                    zIndex: 1e5,
                    ...null == O ? void 0 : O.position,
                    maxHeight: null != (t = null == O ? void 0 : O.maxHeight) ? t : "100vh"
                }
            },
            placement: null != (u = null == O ? void 0 : O.placement) ? u : null,
            arrowProps: {
                "aria-hidden": "true",
                role: "presentation",
                style: {
                    left: null == O ? void 0 : O.arrowOffsetLeft,
                    top: null == O ? void 0 : O.arrowOffsetTop
                }
            },
            updatePosition: E
        }
    }
    e.s(["useOverlayPosition", 0, u], 188655);
    var d = e.i(984782),
        c = e.i(155266),
        p = e.i(604082);
    e.s(["usePopover", 0, function(e, l) {
        let {
            triggerRef: s,
            popoverRef: o,
            groupRef: n,
            isNonModal: i,
            isKeyboardDismissDisabled: a,
            shouldCloseOnInteractOutside: g,
            ...m
        } = e, f = "SubmenuTrigger" === m.trigger, {
            overlayProps: h,
            underlayProps: y
        } = (0, d.useOverlay)({
            isOpen: l.isOpen,
            onClose: l.close,
            shouldCloseOnBlur: !0,
            isDismissable: !i || f,
            isKeyboardDismissDisabled: a,
            shouldCloseOnInteractOutside: g
        }, null != n ? n : o), {
            overlayProps: v,
            arrowProps: b,
            placement: P
        } = u({
            ...m,
            targetRef: s,
            overlayRef: o,
            isOpen: l.isOpen,
            onClose: i && !f ? l.close : null
        });
        return (0, c.usePreventScroll)({
            isDisabled: i || !l.isOpen
        }), (0, r.useLayoutEffect)(() => {
            if (l.isOpen && o.current) {
                var e, s;
                return i ? (0, t.keepVisible)(null != (e = null == n ? void 0 : n.current) ? e : o.current) : (0, t.ariaHideOutside)([null != (s = null == n ? void 0 : n.current) ? s : o.current])
            }
        }, [i, l.isOpen, o, n]), {
            popoverProps: (0, p.mergeProps)(h, v),
            arrowProps: b,
            underlayProps: y,
            placement: P
        }
    }], 92257)
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
    var l = e.i(3931),
        s = e.i(59284),
        o = e.i(235752),
        r = e.i(576508);
    e.s(["DismissButton", 0, function(e) {
        var n;
        let {
            onDismiss: i,
            ...a
        } = e, u = (0, o.useLocalizedStringFormatter)((n = t) && n.__esModule ? n.default : n, "@react-aria/overlays"), d = (0, s.useLabels)(a, u.format("dismiss"));
        return l.default.createElement(r.VisuallyHidden, null, l.default.createElement("button", {
            ...d,
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
    var l = e.i(231781),
        s = e.i(256630),
        o = e.i(226797),
        r = e.i(235752),
        n = e.i(441157);
    e.s(["useMenuTrigger", 0, function(e, i, a) {
        var u;
        let {
            type: d = "menu",
            isDisabled: c,
            trigger: p = "press"
        } = e, g = (0, l.useId)(), {
            triggerProps: m,
            overlayProps: f
        } = (0, n.useOverlayTrigger)({
            type: d
        }, i, a), h = (0, r.useLocalizedStringFormatter)((u = t) && u.__esModule ? u.default : u, "@react-aria/menu"), {
            longPressProps: y
        } = (0, o.useLongPress)({
            isDisabled: c || "longPress" !== p,
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
                ..."press" === p ? {
                    preventFocusOnPress: !0,
                    onPressStart(e) {
                        "touch" === e.pointerType || "keyboard" === e.pointerType || c || ((0, s.focusWithoutScrolling)(e.target), i.open("virtual" === e.pointerType ? "first" : null))
                    },
                    onPress(e) {
                        "touch" !== e.pointerType || c || ((0, s.focusWithoutScrolling)(e.target), i.toggle())
                    }
                } : y,
                id: g,
                onKeyDown: e => {
                    if (!c && ("longPress" !== p || e.altKey) && a && a.current) switch (e.key) {
                        case "Enter":
                        case " ":
                            if ("longPress" === p) return;
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
}, 481392, 563227, 550436, 661013, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(3931),
        s = e.i(722978),
        o = e.i(339206),
        r = e.i(604082),
        n = e.i(231781),
        i = e.i(575912),
        a = e.i(945113),
        u = e.i(234908),
        d = e.i(427651),
        c = e.i(941915),
        p = e.i(32147),
        g = e.i(841811);
    let m = new WeakMap;
    var f = e.i(682792),
        h = e.i(623706),
        y = e.i(576508);

    function v(e) {
        var t;
        let {
            state: s,
            triggerRef: o,
            label: r,
            name: n,
            isDisabled: i
        } = e, a = (0, l.useRef)(null), {
            containerProps: u,
            selectProps: d
        } = function(e, t, l) {
            var s;
            let o = m.get(t) || {},
                {
                    autoComplete: r,
                    name: n = o.name,
                    isDisabled: i = o.isDisabled
                } = e,
                {
                    validationBehavior: a,
                    isRequired: u
                } = o,
                {
                    visuallyHiddenProps: d
                } = (0, y.useVisuallyHidden)();
            return (0, f.useFormReset)(e.selectRef, t.selectedKey, t.setSelectedKey), (0, h.useFormValidation)({
                validationBehavior: a,
                focus: () => {
                    var e;
                    return null == (e = l.current) ? void 0 : e.focus()
                }
            }, t, e.selectRef), {
                containerProps: {
                    ...d,
                    "aria-hidden": !0,
                    "data-react-aria-prevent-focus": !0,
                    "data-a11y-ignore": "aria-hidden-focus"
                },
                inputProps: {
                    style: {
                        display: "none"
                    }
                },
                selectProps: {
                    tabIndex: -1,
                    autoComplete: r,
                    disabled: i,
                    required: "native" === a && u,
                    name: n,
                    value: null != (s = t.selectedKey) ? s : void 0,
                    onChange: e => t.setSelectedKey(e.target.value)
                }
            }
        }({
            ...e,
            selectRef: a
        }, s, o);
        return s.collection.size <= 300 ? l.default.createElement("div", {
            ...u,
            "data-testid": "hidden-select-container"
        }, l.default.createElement("label", null, r, l.default.createElement("select", {
            ...d,
            ref: a
        }, l.default.createElement("option", null), [...s.collection.getKeys()].map(e => {
            let t = s.collection.getItem(e);
            if (t && "item" === t.type) return l.default.createElement("option", {
                key: t.key,
                value: t.key
            }, t.textValue)
        })))) : n ? l.default.createElement("input", {
            type: "hidden",
            autoComplete: d.autoComplete,
            name: n,
            disabled: i,
            value: null != (t = s.selectedKey) ? t : ""
        }) : null
    }
    var b = e.i(318601),
        P = e.i(459236),
        w = e.i(365313),
        k = e.i(201373);

    function x(e) {
        var t;
        let [s, o] = (0, k.useControlledState)(e.selectedKey, null != (t = e.defaultSelectedKey) ? t : null, e.onSelectionChange), r = (0, l.useMemo)(() => null != s ? [s] : [], [s]), {
            collection: n,
            disabledKeys: i,
            selectionManager: a
        } = (0, w.useListState)({
            ...e,
            selectionMode: "single",
            disallowEmptySelection: !0,
            allowDuplicateSelectionEvents: !0,
            selectedKeys: r,
            onSelectionChange: t => {
                var l;
                if ("all" === t) return;
                let r = null != (l = t.values().next().value) ? l : null;
                r === s && e.onSelectionChange && e.onSelectionChange(r), o(r)
            }
        }), u = null != s ? n.getItem(s) : null;
        return {
            collection: n,
            disabledKeys: i,
            selectionManager: a,
            selectedKey: s,
            setSelectedKey: o,
            selectedItem: u
        }
    }

    function S(e) {
        return null
    }
    e.s(["useSingleSelectListState", 0, x], 563227), e.i(788727), S.getCollectionNode = function*(e, t) {
        var s;
        let {
            childItems: o,
            title: r,
            children: n
        } = e, i = e.title || e.children, a = e.textValue || ("string" == typeof i ? i : "") || e["aria-label"] || "";
        yield {
            type: "item",
            props: e,
            rendered: i,
            textValue: a,
            "aria-label": e["aria-label"],
            hasChildNodes: null != (s = e).hasChildItems ? s.hasChildItems : !!(s.childItems || s.title && l.default.Children.count(s.children) > 0),
            * childNodes() {
                if (o)
                    for (let e of o) yield {
                        type: "item",
                        value: e
                    };
                else if (r) {
                    let e = [];
                    l.default.Children.forEach(n, t => {
                        e.push({
                            type: "item",
                            element: t
                        })
                    }), yield* e
                }
            }
        }
    }, e.s(["Item", 0, S], 550436);
    let M = ({
        className: e
    }) => (0, t.jsx)("svg", {
        width: 16,
        height: 16,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: e,
        children: (0, t.jsx)("path", {
            d: "m13 6-5 5-5-5"
        })
    });
    e.s(["default", 0, M], 661013);
    var R = e.i(23953),
        O = e.i(460261),
        C = e.i(92257);
    let D = ({
        children: e,
        state: s,
        width: o,
        offset: r = 0,
        ...n
    }) => {
        let i = (0, l.useRef)(null),
            {
                popoverProps: a,
                underlayProps: u
            } = (0, C.usePopover)({
                ...n,
                offset: r,
                popoverRef: i
            }, s);
        return (0, t.jsxs)(O.Overlay, {
            portalContainer: document.body,
            children: [(0, t.jsx)("div", {
                ...u
            }), (0, t.jsxs)("div", {
                ...a,
                ref: i,
                className: "min-w-min overflow-auto rounded-xl bg-white p-1 shadow-[0px_4px_16px_rgba(0,0,0,0.16)] dark:bg-black",
                style: {
                    ...a.style,
                    width: o
                },
                children: [(0, t.jsx)(R.DismissButton, {
                    onDismiss: s.close
                }), e, (0, t.jsx)(R.DismissButton, {
                    onDismiss: s.close
                })]
            })]
        })
    };
    var A = e.i(841881),
        E = e.i(716371);
    let L = ({
            item: e,
            state: o
        }) => {
            let r = (0, l.useRef)(null),
                {
                    optionProps: n,
                    isSelected: i,
                    isFocused: a
                } = (0, E.useOption)({
                    key: e.key
                }, o, r),
                u = (0, s.clsx)("text-tiny-bold cursor-pointer px-2 py-1 text-gray-700 focus:outline-0 dark:text-gray-300 outline-hidden break-words rounded-lg", {
                    "bg-gray-200 dark:bg-gray-800 dark:text-white": i
                }, {
                    "bg-gray-200 dark:bg-gray-800 dark:text-white": a
                });
            return (0, t.jsx)("li", {
                ...n,
                className: u,
                ref: r,
                children: e.rendered
            })
        },
        K = ({
            state: e,
            ...s
        }) => {
            let o = (0, l.useRef)(null),
                {
                    listBoxProps: r
                } = (0, A.useListBox)(s, e, o);
            return (0, t.jsx)("ul", {
                ...r,
                ref: o,
                className: "outline-hidden",
                children: Array.from(e.collection).map(l => (0, t.jsx)(L, {
                    item: l,
                    state: e
                }, l.key))
            })
        };
    var T = e.i(372474),
        z = e.i(166010);
    let j = (0, l.forwardRef)(function({
            children: e,
            className: l = "",
            isOpen: o,
            ...r
        }, n) {
            let i = (0, z.useObjectRef)(n),
                {
                    buttonProps: a
                } = (0, T.useButton)({
                    children: e,
                    className: l,
                    isOpen: o,
                    ...r
                }, i),
                u = (0, s.clsx)("transition-all ease-out duration-400 flex py-2 items-center w-full outline-blue focus:ring-3 focus:ring-blue-dark focus:outline-blue focus:outline-offset-0 focus:border-none justify-between whitespace-nowrap rounded-lg border border-gray-400 bg-gray-50 px-3 text-gray-900 hover:border-gray-900 dark:border-gray-500 dark:bg-gray-900 dark:text-gray-400 dark:text-white dark:hover:border-white outline-hidden", {
                    "dark:bg-gray-900 dark:border-transparent": o,
                    "ring-3 ring-blue-dark !outline-blue !outline-offset-0 !border-none": o
                }, l);
            return (0, t.jsx)("button", {
                ...a,
                ref: i,
                type: "button",
                className: u,
                children: e
            })
        }),
        B = e => {
            let f = (0, l.useRef)(null),
                h = function(e) {
                    let t = (0, P.useOverlayTriggerState)(e),
                        [s, o] = (0, l.useState)(null),
                        r = x({
                            ...e,
                            onSelectionChange: l => {
                                null != e.onSelectionChange && e.onSelectionChange(l), t.close(), n.commitValidation()
                            }
                        }),
                        n = (0, b.useFormValidationState)({
                            ...e,
                            value: r.selectedKey
                        }),
                        [i, a] = (0, l.useState)(!1),
                        u = (0, l.useMemo)(() => {
                            var e;
                            return 0 === r.collection.size || 1 === r.collection.size && (null == (e = r.collection.getItem(r.collection.getFirstKey())) ? void 0 : e.type) === "loader"
                        }, [r.collection]);
                    return {
                        ...n,
                        ...r,
                        ...t,
                        focusStrategy: s,
                        open(e = null) {
                            u || (o(e), t.open())
                        },
                        toggle(e = null) {
                            u || (o(e), t.toggle())
                        },
                        isFocused: i,
                        setFocused: a
                    }
                }(e),
                {
                    triggerProps: y,
                    valueProps: w,
                    menuProps: k
                } = function(e, t, s) {
                    let {
                        keyboardDelegate: f,
                        isDisabled: h,
                        isRequired: y,
                        name: v,
                        validationBehavior: b = "aria"
                    } = e, P = (0, c.useCollator)({
                        usage: "search",
                        sensitivity: "base"
                    }), w = (0, l.useMemo)(() => f || new(0, a.ListKeyboardDelegate)(t.collection, t.disabledKeys, s, P), [f, t.collection, t.disabledKeys, P, s]), {
                        menuTriggerProps: k,
                        menuProps: x
                    } = (0, g.useMenuTrigger)({
                        isDisabled: h,
                        type: "listbox"
                    }, t, s), {
                        typeSelectProps: S
                    } = (0, u.useTypeSelect)({
                        keyboardDelegate: w,
                        selectionManager: t.selectionManager,
                        onTypeSelect(e) {
                            t.setSelectedKey(e)
                        }
                    }), {
                        isInvalid: M,
                        validationErrors: R,
                        validationDetails: O
                    } = t.displayValidation, {
                        labelProps: C,
                        fieldProps: D,
                        descriptionProps: A,
                        errorMessageProps: E
                    } = (0, p.useField)({
                        ...e,
                        labelElementType: "span",
                        isInvalid: M,
                        errorMessage: e.errorMessage || R
                    });
                    S.onKeyDown = S.onKeyDownCapture, delete S.onKeyDownCapture;
                    let L = (0, o.filterDOMProps)(e, {
                            labelable: !0
                        }),
                        K = (0, r.mergeProps)(S, k, D),
                        T = (0, n.useId)();
                    return m.set(t, {
                        isDisabled: h,
                        isRequired: y,
                        name: v,
                        validationBehavior: b
                    }), {
                        labelProps: {
                            ...C,
                            onClick: () => {
                                if (!e.isDisabled) {
                                    var t;
                                    null == (t = s.current) || t.focus(), (0, d.setInteractionModality)("keyboard")
                                }
                            }
                        },
                        triggerProps: (0, r.mergeProps)(L, {
                            ...K,
                            isDisabled: h,
                            onKeyDown: (0, i.chain)(K.onKeyDown, e => {
                                var l, s, o, r;
                                switch (e.key) {
                                    case "ArrowLeft": {
                                        e.preventDefault();
                                        let o = null != t.selectedKey ? null == (l = w.getKeyAbove) ? void 0 : l.call(w, t.selectedKey) : null == (s = w.getFirstKey) ? void 0 : s.call(w);
                                        o && t.setSelectedKey(o);
                                        break
                                    }
                                    case "ArrowRight": {
                                        e.preventDefault();
                                        let l = null != t.selectedKey ? null == (o = w.getKeyBelow) ? void 0 : o.call(w, t.selectedKey) : null == (r = w.getFirstKey) ? void 0 : r.call(w);
                                        l && t.setSelectedKey(l)
                                    }
                                }
                            }, e.onKeyDown),
                            onKeyUp: e.onKeyUp,
                            "aria-labelledby": [T, K["aria-labelledby"], K["aria-label"] && !K["aria-labelledby"] ? K.id : null].filter(Boolean).join(" "),
                            onFocus(l) {
                                t.isFocused || (e.onFocus && e.onFocus(l), e.onFocusChange && e.onFocusChange(!0), t.setFocused(!0))
                            },
                            onBlur(l) {
                                t.isOpen || (e.onBlur && e.onBlur(l), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1))
                            }
                        }),
                        valueProps: {
                            id: T
                        },
                        menuProps: {
                            ...x,
                            autoFocus: t.focusStrategy || !0,
                            shouldSelectOnPressUp: !0,
                            shouldFocusOnHover: !0,
                            disallowEmptySelection: !0,
                            linkBehavior: "selection",
                            onBlur: l => {
                                l.currentTarget.contains(l.relatedTarget) || (e.onBlur && e.onBlur(l), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1))
                            },
                            "aria-labelledby": [D["aria-labelledby"], K["aria-label"] && !D["aria-labelledby"] ? K.id : null].filter(Boolean).join(" ")
                        },
                        descriptionProps: A,
                        errorMessageProps: E,
                        isInvalid: M,
                        validationErrors: R,
                        validationDetails: O
                    }
                }(e, h, f),
                S = f.current?.clientWidth ? f.current?.clientWidth : 0,
                [R, O] = (0, l.useState)(S);
            (0, l.useEffect)(() => {
                O(S)
            }, [S]);
            let C = (0, s.clsx)("stroke-gray-900 group-hover/select:stroke-gray-800 dark:group-hover/select:stroke-gray-200", {
                    "rotate-180 stroke-gray-900 dark:stroke-gray-200": h.isOpen
                }),
                A = (0, s.clsx)("group/select", e.className);
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(v, {
                    state: h,
                    triggerRef: f,
                    label: e.label,
                    name: e.name
                }), (0, t.jsxs)(j, {
                    ...y,
                    ref: f,
                    isOpen: h.isOpen,
                    className: A,
                    children: [(0, t.jsx)("span", {
                        ...w,
                        className: (0, s.clsx)({
                            "text-gray-600 dark:text-gray-400": !h.selectedItem
                        }),
                        children: h.selectedItem ? h.selectedItem.rendered : e.placeholder || e.label
                    }), (0, t.jsx)("span", {
                        className: "pl-2",
                        children: (0, t.jsx)(M, {
                            className: C
                        })
                    })]
                }), h.isOpen && (0, t.jsx)(D, {
                    state: h,
                    triggerRef: f,
                    placement: "bottom start",
                    offset: 8,
                    width: R,
                    children: (0, t.jsx)(K, {
                        ...k,
                        state: h
                    })
                })]
            })
        };
    B.Item = S, e.s(["default", 0, B], 481392)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c2a9187b-4cd4-5330-ba0c-e063e9626825")
    } catch (e) {}
}();
//# debugId=c2a9187b-4cd4-5330-ba0c-e063e9626825