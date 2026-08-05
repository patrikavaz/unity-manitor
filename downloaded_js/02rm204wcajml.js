(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 825610, e => {
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
}, 964059, e => {
    "use strict";
    var t = e.i(600939),
        o = e.i(499531);
    e.s(["useEvent", 0, function(e, s, i, r) {
        let n = (0, t.useEffectEvent)(i),
            a = null == i;
        (0, o.useEffect)(() => {
            if (a || !e.current) return;
            let t = e.current;
            return t.addEventListener(s, n, r), () => {
                t.removeEventListener(s, n, r)
            }
        }, [e, s, r, a])
    }])
}, 975950, e => {
    "use strict";
    var t = e.i(904960),
        o = e.i(776050),
        s = e.i(747922);
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
        n = {
            top: "left",
            left: "top"
        },
        a = {
            top: "height",
            left: "width"
        },
        l = {
            width: "totalWidth",
            height: "totalHeight"
        },
        c = {};

    function u(e, o) {
        let s = 0,
            i = 0,
            r = 0,
            n = 0,
            a = 0,
            l = 0,
            c = {},
            u = (o?.scale ?? 1) > 1;
        if ("BODY" === e.tagName || "HTML" === e.tagName) {
            let t = document.documentElement;
            r = t.clientWidth, n = t.clientHeight, s = o?.width ?? r, i = o?.height ?? n, c.top = t.scrollTop || e.scrollTop, c.left = t.scrollLeft || e.scrollLeft, o && (a = o.offsetTop, l = o.offsetLeft)
        } else({
            width: s,
            height: i,
            top: a,
            left: l
        } = h(e, !1)), c.top = e.scrollTop, c.left = e.scrollLeft, r = s, n = i;
        return (0, t.isWebKit)() && ("BODY" === e.tagName || "HTML" === e.tagName) && u && (c.top = 0, c.left = 0, a = o?.pageTop ?? 0, l = o?.pageLeft ?? 0), {
            width: s,
            height: i,
            totalWidth: r,
            totalHeight: n,
            scroll: c,
            top: a,
            left: l
        }
    }

    function d(e, t, o, s, r, n, l) {
        let c = r.scroll[e] ?? 0,
            u = s[a[e]],
            d = l[e] + s.scroll[i[e]] + n,
            p = l[e] + s.scroll[i[e]] + u - n,
            g = t - c + s.scroll[i[e]] + l[e] - s[i[e]],
            m = t - c + o + s.scroll[i[e]] + l[e] - s[i[e]];
        return g < d ? d - g : m > p ? Math.max(p - m, d - g) : 0
    }

    function p(e) {
        if (c[e]) return c[e];
        let [t, o] = e.split(" "), s = i[t] || "right", r = n[s];
        i[o] || (o = "center");
        let l = a[s],
            u = a[r];
        return c[e] = {
            placement: t,
            crossPlacement: o,
            axis: s,
            crossAxis: r,
            size: l,
            crossSize: u
        }, c[e]
    }

    function g(e, t, o, i, n, a, c, u, d, p, g) {
        let {
            placement: m,
            crossPlacement: f,
            axis: h,
            crossAxis: A,
            size: P,
            crossSize: v
        } = i, b = {};
        b[A] = e[A] ?? 0, "center" === f ? b[A] += ((e[v] ?? 0) - (o[v] ?? 0)) / 2 : f !== A && (b[A] += (e[v] ?? 0) - (o[v] ?? 0)), b[A] += a;
        let y = e[A] - o[v] + d + p,
            w = e[A] + e[v] - d - p;
        if (b[A] = (0, s.clamp)(b[A], y, w), m === h) {
            let t = u ? g[P] : g[l[P]];
            b[r[h]] = Math.floor(t - e[h] + n)
        } else b[h] = Math.floor(e[h] + e[P] + n);
        return b
    }

    function m(e, t, o, s, i, n, a, l) {
        let {
            placement: c,
            axis: u,
            size: d
        } = n;
        return c === u ? Math.max(0, o[u] - (a.scroll[u] ?? 0) - (e[u] + (l ? t[u] : 0)) - (s[u] ?? 0) - s[r[u]] - i) : Math.max(0, e[d] + e[u] + (l ? t[u] : 0) - o[u] - o[d] + (a.scroll[u] ?? 0) - (s[u] ?? 0) - s[r[u]] - i)
    }

    function f(e, t) {
        let {
            top: o,
            left: s,
            width: i,
            height: r
        } = e.getBoundingClientRect();
        return t && e instanceof e.ownerDocument.defaultView.HTMLElement && (i = e.offsetWidth, r = e.offsetHeight), {
            top: o,
            left: s,
            width: i,
            height: r
        }
    }

    function h(e, t, o) {
        let {
            top: s,
            left: i,
            width: r,
            height: n
        } = o || f(e, t), {
            scrollTop: a,
            scrollLeft: l,
            clientTop: c,
            clientLeft: u
        } = document.documentElement;
        return {
            top: s + a - c,
            left: i + l - u,
            width: r,
            height: n
        }
    }

    function A(e, t, o, s) {
        let i, r = window.getComputedStyle(e);
        if ("fixed" === r.position) i = s || f(e, o);
        else {
            i = h(e, o, s);
            let r = h(t, o),
                n = window.getComputedStyle(t);
            r.top += (parseInt(n.borderTopWidth, 10) || 0) - t.scrollTop, r.left += (parseInt(n.borderLeftWidth, 10) || 0) - t.scrollLeft, i.top -= r.top, i.left -= r.left
        }
        return i.top -= parseInt(r.marginTop, 10) || 0, i.left -= parseInt(r.marginLeft, 10) || 0, i
    }

    function P(e) {
        let t = window.getComputedStyle(e);
        return "none" !== t.transform || /transform|perspective/.test(t.willChange) || "none" !== t.filter || "paint" === t.contain || "backdropFilter" in t && "none" !== t.backdropFilter || "WebkitBackdropFilter" in t && "none" !== t.WebkitBackdropFilter
    }
    e.s(["calculatePosition", 0, function(e) {
        let t, n, {
                placement: a,
                targetNode: c,
                overlayNode: v,
                scrollNode: b,
                padding: y,
                shouldFlip: w,
                boundaryElement: k,
                offset: L,
                crossOffset: M,
                maxHeight: C,
                arrowSize: E = 0,
                arrowBoundaryOffset: O = 0,
                targetRect: S
            } = e,
            T = "u" > typeof document ? window.visualViewport : null,
            R = v instanceof HTMLElement ? function(e) {
                let t = e.offsetParent;
                if (t && t === document.body && "static" === window.getComputedStyle(t).position && !P(t) && (t = document.documentElement), null == t)
                    for (t = e.parentElement; t && !P(t);) t = t.parentElement;
                return t || document.documentElement
            }(v) : document.documentElement,
            z = R === document.documentElement,
            H = window.getComputedStyle(R).position,
            D = z ? h(c, !1, S) : A(c, R, !1, S);
        if (!z) {
            let {
                marginTop: e,
                marginLeft: t
            } = window.getComputedStyle(c);
            D.top += parseInt(e, 10) || 0, D.left += parseInt(t, 10) || 0
        }
        let x = h(v, !0),
            B = {
                top: parseInt((t = window.getComputedStyle(v)).marginTop, 10) || 0,
                bottom: parseInt(t.marginBottom, 10) || 0,
                left: parseInt(t.marginLeft, 10) || 0,
                right: parseInt(t.marginRight, 10) || 0
            };
        x.width += (B.left ?? 0) + (B.right ?? 0), x.height += (B.top ?? 0) + (B.bottom ?? 0), b.scrollTop, b.scrollLeft, b.scrollWidth, b.scrollHeight;
        let N = u(k, T),
            F = u(R, T);
        if ("BODY" !== k.tagName && "HTML" !== k.tagName || z) n = ("BODY" === k.tagName || "HTML" === k.tagName) && z ? {
            top: 0,
            left: 0,
            width: 0,
            height: 0
        } : A(k, R, !1);
        else {
            let e = f(R, !1);
            n = {
                top: -(e.top - N.top),
                left: -(e.left - N.left),
                width: 0,
                height: 0
            }
        }
        return function(e, t, o, n, a, c, u, f, h, A, P, v, b, y, w, k, L) {
            var M, C, E;
            let O, S, T, R = p(e),
                {
                    size: z,
                    crossAxis: H,
                    crossSize: D,
                    placement: x,
                    crossPlacement: B
                } = R,
                N = g(t, u, o, R, A, P, h, v, y, w, f),
                F = A,
                I = m(u, h, t, n, a + A, R, f, k);
            if (c && o[z] > I) {
                let e = p(`${r[x]} ${B}`),
                    s = g(t, u, o, e, A, P, h, v, y, w, f);
                m(u, h, t, n, a + A, e, f, k) > I && (R = e, N = s, F = A)
            }
            let j = "bottom";
            "top" === R.axis ? "top" === R.placement ? j = "top" : "bottom" === R.placement && (j = "bottom") : "top" === R.crossAxis && ("top" === R.crossPlacement ? j = "bottom" : "bottom" === R.crossPlacement && (j = "top"));
            let W = d(H, N[H], o[D], u, f, a, h);
            N[H] += W;
            let U = (M = N, C = o.height, E = j, O = (null != M.top ? M.top : f[l.height] - (M.bottom ?? 0) - C) - (f.scroll.top ?? 0), S = k ? h.top : 0, T = {
                top: Math.max(u.top + S, (L?.offsetTop ?? u.top) + S),
                bottom: Math.min(u.top + u.height + S, (L?.offsetTop ?? 0) + (L?.height ?? 0))
            }, "top" !== E ? Math.max(0, T.bottom - O - ((n.top ?? 0) + (n.bottom ?? 0) + a)) : Math.max(0, O + C - T.top - ((n.top ?? 0) + (n.bottom ?? 0) + a)));
            b && b < U && (U = b), o.height = Math.min(o.height, U), W = d(H, (N = g(t, u, o, R, F, P, h, v, y, w, f))[H], o[D], u, f, a, h), N[H] += W;
            let K = {},
                V = t[H] - N[H] - n[i[H]],
                Z = V + .5 * t[D],
                G = y / 2 + w,
                Y = "left" === i[H] ? (n.left ?? 0) + (n.right ?? 0) : (n.top ?? 0) + (n.bottom ?? 0),
                _ = o[D] - Y - y / 2 - w,
                J = t[H] + y / 2 - (N[H] + n[i[H]]),
                $ = t[H] + t[D] - y / 2 - (N[H] + n[i[H]]),
                q = (0, s.clamp)(Z, J, $);
            K[H] = (0, s.clamp)(q, G, _), ({
                placement: x,
                crossPlacement: B
            } = R), y ? V = K[H] : "right" === B ? V += t[D] : "center" === B && (V += t[D] / 2);
            let Q = "left" === x || "top" === x ? o[z] : 0,
                X = {
                    x: "top" === x || "bottom" === x ? V : Q,
                    y: "left" === x || "right" === x ? V : Q
                };
            return {
                position: N,
                maxHeight: U,
                arrowOffsetLeft: K.left,
                arrowOffsetTop: K.top,
                placement: x,
                triggerAnchorPoint: X
            }
        }(a, D, x, B, y, w, N, F, n, L, M, !!H && "static" !== H, C, E, O, (0, o.nodeContains)(k, R), T)
    }, "getRect", 0, f])
}, 138381, e => {
    "use strict";
    var t = e.i(600939),
        o = e.i(499531);
    e.s(["useResizeObserver", 0, function(e) {
        let {
            ref: s,
            box: i,
            onResize: r
        } = e, n = (0, t.useEffectEvent)(r);
        (0, o.useEffect)(() => {
            let e = s?.current;
            if (e)
                if (void 0 === window.ResizeObserver) return window.addEventListener("resize", n, !1), () => {
                    window.removeEventListener("resize", n, !1)
                };
                else {
                    let t = new window.ResizeObserver(e => {
                        e.length && n()
                    });
                    return t.observe(e, {
                        box: i
                    }), () => {
                        e && t.unobserve(e)
                    }
                }
        }, [s, i])
    }])
}, 879537, e => {
    "use strict";
    var t = e.i(975950),
        o = e.i(776050),
        s = e.i(101933),
        i = e.i(185559),
        r = e.i(876728),
        n = e.i(138381),
        a = e.i(499531);
    let l = "u" > typeof document ? window.visualViewport : null;
    e.s(["useOverlayPosition", 0, function(e) {
        var c;
        let {
            direction: u
        } = (0, r.useLocale)(), {
            arrowSize: d,
            targetRef: p,
            overlayRef: g,
            arrowRef: m,
            scrollRef: f = g,
            placement: h = "bottom",
            containerPadding: A = 12,
            shouldFlip: P = !0,
            boundaryElement: v = "u" > typeof document ? document.body : null,
            offset: b = 0,
            crossOffset: y = 0,
            shouldUpdatePosition: w = !0,
            isOpen: k = !0,
            onClose: L,
            maxHeight: M,
            arrowBoundaryOffset: C = 0,
            getTargetRect: E
        } = e, [O, S] = (0, a.useState)(null), T = [w, h, g.current, p.current, m?.current, f.current, A, P, v, b, y, k, u, M, C, d], R = (0, a.useRef)(l?.scale);
        (0, a.useEffect)(() => {
            k && (R.current = l?.scale)
        }, [k]);
        let z = (0, a.useCallback)(() => {
            var e;
            if (!1 === w || !k || !g.current || !p.current || !v || l?.scale !== R.current) return;
            let s = null;
            if (f.current && (0, o.isFocusWithin)(f.current)) {
                let e = (0, o.getActiveElement)()?.getBoundingClientRect(),
                    t = f.current.getBoundingClientRect();
                (s = {
                    type: "top",
                    offset: (e?.top ?? 0) - t.top
                }).offset > t.height / 2 && (s.type = "bottom", s.offset = (e?.bottom ?? 0) - t.bottom)
            }
            let i = g.current;
            !M && g.current && (i.style.top = "0px", i.style.bottom = "", i.style.maxHeight = (window.visualViewport?.height ?? window.innerHeight) + "px");
            let r = (0, t.calculatePosition)({
                placement: (e = h, "rtl" === u ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right")),
                overlayNode: g.current,
                targetNode: p.current,
                scrollNode: f.current || g.current,
                padding: A,
                shouldFlip: P,
                boundaryElement: v,
                offset: b,
                crossOffset: y,
                maxHeight: M,
                arrowSize: d ?? (m?.current ? (0, t.getRect)(m.current, !0).width : 0),
                arrowBoundaryOffset: C,
                targetRect: E?.(p.current)
            });
            if (!r.position) return;
            i.style.top = "", i.style.bottom = "", i.style.left = "", i.style.right = "", Object.keys(r.position).forEach(e => i.style[e] = r.position[e] + "px"), i.style.maxHeight = null != r.maxHeight ? r.maxHeight + "px" : "";
            let n = (0, o.getActiveElement)();
            if (s && n && f.current) {
                let e = n.getBoundingClientRect(),
                    t = f.current.getBoundingClientRect(),
                    o = e[s.type] - t[s.type];
                f.current.scrollTop += o - s.offset
            }
            S(r)
        }, T);
        (0, i.useLayoutEffect)(z, T), c = z, (0, i.useLayoutEffect)(() => (window.addEventListener("resize", c, !1), () => {
            window.removeEventListener("resize", c, !1)
        }), [c]), (0, n.useResizeObserver)({
            ref: g,
            onResize: z
        }), (0, n.useResizeObserver)({
            ref: p,
            onResize: z
        });
        let H = (0, a.useRef)(!1);
        (0, i.useLayoutEffect)(() => {
            let e, t = () => {
                    H.current = !0, clearTimeout(e), e = setTimeout(() => {
                        H.current = !1
                    }, 500), z()
                },
                o = () => {
                    H.current && t()
                };
            return l?.addEventListener("resize", t), l?.addEventListener("scroll", o), () => {
                l?.removeEventListener("resize", t), l?.removeEventListener("scroll", o)
            }
        }, [z]);
        let D = (0, a.useCallback)(() => {
            H.current || L?.()
        }, [L, H]);
        return (0, s.useCloseOnScroll)({
            triggerRef: p,
            isOpen: k,
            onClose: L && D
        }), {
            overlayProps: {
                style: {
                    position: O ? "absolute" : "fixed",
                    top: O ? void 0 : 0,
                    left: O ? void 0 : 0,
                    zIndex: 1e5,
                    ...O?.position,
                    maxHeight: O?.maxHeight ?? "100vh"
                }
            },
            placement: O?.placement ?? null,
            triggerAnchorPoint: O?.triggerAnchorPoint ?? null,
            arrowProps: {
                "aria-hidden": "true",
                role: "presentation",
                style: {
                    left: O?.arrowOffsetLeft,
                    top: O?.arrowOffsetTop
                }
            },
            updatePosition: z
        }
    }])
}, 243941, e => {
    "use strict";
    var t = e.i(666747),
        o = e.i(879537),
        s = e.i(429305),
        i = e.i(419476),
        r = e.i(690910),
        n = e.i(499531);
    e.s(["usePopover", 0, function(e, a) {
        let {
            triggerRef: l,
            popoverRef: c,
            groupRef: u,
            isNonModal: d,
            isKeyboardDismissDisabled: p,
            shouldCloseOnInteractOutside: g,
            ...m
        } = e, f = "SubmenuTrigger" === m.trigger, {
            overlayProps: h,
            underlayProps: A
        } = (0, i.useOverlay)({
            isOpen: a.isOpen,
            onClose: a.close,
            shouldCloseOnBlur: !0,
            isDismissable: !d || f,
            isKeyboardDismissDisabled: p,
            shouldCloseOnInteractOutside: g
        }, u ?? c), {
            overlayProps: P,
            arrowProps: v,
            placement: b,
            triggerAnchorPoint: y
        } = (0, o.useOverlayPosition)({
            ...m,
            targetRef: l,
            overlayRef: c,
            isOpen: a.isOpen,
            onClose: d && !f ? a.close : null
        });
        return (0, r.usePreventScroll)({
            isDisabled: d || !a.isOpen
        }), (0, n.useEffect)(() => {
            if (a.isOpen && c.current)
                if (d) return (0, t.keepVisible)(u?.current ?? c.current);
                else return (0, t.ariaHideOutside)([u?.current ?? c.current], {
                    shouldUseInert: !0
                })
        }, [d, a.isOpen, c, u]), {
            popoverProps: (0, s.mergeProps)(h, P),
            arrowProps: v,
            underlayProps: A,
            placement: b,
            triggerAnchorPoint: y
        }
    }])
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
    var o = e.i(270170),
        s = e.i(501427),
        i = e.i(458229),
        r = e.i(499531);
    e.s(["DismissButton", 0, function(e) {
        var n;
        let {
            onDismiss: a,
            ...l
        } = e, c = (0, s.useLocalizedStringFormatter)((n = t) && n.__esModule ? n.default : n, "@react-aria/overlays"), u = (0, o.useLabels)(l, c.format("dismiss"));
        return r.default.createElement(i.VisuallyHidden, null, r.default.createElement("button", {
            ...u,
            tabIndex: -1,
            onClick: () => {
                a && a()
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
        o = {};
    o = {
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
    var s = e.i(823512),
        i = e.i(501427),
        r = e.i(720728),
        n = e.i(468689);
    e.s(["useMenuTrigger", 0, function(e, a, l) {
        var c;
        let {
            type: u = "menu",
            isDisabled: d,
            trigger: p = "press"
        } = e, g = (0, s.useId)(), {
            triggerProps: m,
            overlayProps: f
        } = (0, n.useOverlayTrigger)({
            type: u
        }, a, l), h = (0, i.useLocalizedStringFormatter)((c = o) && c.__esModule ? c.default : c, "@react-aria/menu"), {
            longPressProps: A
        } = (0, r.useLongPress)({
            isDisabled: d || "longPress" !== p,
            accessibilityDescription: h.format("longPressMessage"),
            onLongPressStart() {
                a.close()
            },
            onLongPress() {
                a.open("first")
            }
        });
        return delete m.onPress, {
            menuTriggerProps: {
                ...m,
                ..."press" === p ? {
                    preventFocusOnPress: !0,
                    onPressStart(e) {
                        "touch" === e.pointerType || "keyboard" === e.pointerType || d || ((0, t.focusWithoutScrolling)(e.target), a.open("virtual" === e.pointerType ? "first" : null))
                    },
                    onPress(e) {
                        "touch" !== e.pointerType || d || ((0, t.focusWithoutScrolling)(e.target), a.toggle())
                    }
                } : A,
                id: g,
                onKeyDown: e => {
                    if (!d && ("longPress" !== p || e.altKey) && l && l.current) switch (e.key) {
                        case "Enter":
                        case " ":
                            if ("longPress" === p || e.isDefaultPrevented()) return;
                        case "ArrowDown":
                            "continuePropagation" in e || e.stopPropagation(), e.preventDefault(), a.toggle("first");
                            break;
                        case "ArrowUp":
                            "continuePropagation" in e || e.stopPropagation(), e.preventDefault(), a.toggle("last");
                            break;
                        default:
                            "continuePropagation" in e && e.continuePropagation()
                    }
                }
            },
            menuProps: {
                ...f,
                "aria-labelledby": g,
                autoFocus: a.focusStrategy || !0,
                onClose: a.close
            }
        }
    }], 629080)
}]);