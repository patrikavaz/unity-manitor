;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "9664c985-7023-bfb1-5f8b-d376b86a94ea")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 501427, e => {
    "use strict";
    let t;
    var n = e.i(876728);
    let o = Symbol.for("react-aria.i18n.locale"),
        r = Symbol.for("react-aria.i18n.strings");
    class s {
        constructor(e, t = "en-US") {
            this.strings = Object.fromEntries(Object.entries(e).filter(([, e]) => e)), this.defaultLocale = t
        }
        getStringForLocale(e, t) {
            let n = this.getStringsForLocale(t)[e];
            if (!n) throw Error(`Could not find intl message ${e} in ${t} locale`);
            return n
        }
        getStringsForLocale(e) {
            let t = this.strings[e];
            return t || (t = function(e, t, n = "en-US") {
                var o;
                if (t[e]) return t[e];
                let r = (o = e, Intl.Locale ? new Intl.Locale(o).language : o.split("-")[0]);
                if (t[r]) return t[r];
                for (let e in t)
                    if (e.startsWith(r + "-")) return t[e];
                return t[n]
            }(e, this.strings, this.defaultLocale), this.strings[e] = t), t
        }
        static getGlobalDictionaryForPackage(e) {
            if ("u" < typeof window) return null;
            let n = window[o];
            if (void 0 === t) {
                let e = window[r];
                if (!e) return null;
                for (let o in t = {}, e) t[o] = new s({
                    [n]: e[o]
                }, n)
            }
            let i = t?.[e];
            if (!i) throw Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
            return i
        }
    }
    let i = new Map,
        l = new Map;
    class a {
        constructor(e, t) {
            this.locale = e, this.strings = t
        }
        format(e, t) {
            let n = this.strings.getStringForLocale(e, this.locale);
            return "function" == typeof n ? n(t, this) : n
        }
        plural(e, t, n = "cardinal") {
            let o = t["=" + e];
            if (o) return "function" == typeof o ? o() : o;
            let r = this.locale + ":" + n,
                s = i.get(r);
            return s || (s = new Intl.PluralRules(this.locale, {
                type: n
            }), i.set(r, s)), "function" == typeof(o = t[s.select(e)] || t.other) ? o() : o
        }
        number(e) {
            let t = l.get(this.locale);
            return t || (t = new Intl.NumberFormat(this.locale), l.set(this.locale, t)), t.format(e)
        }
        select(e, t) {
            let n = e[t] || e.other;
            return "function" == typeof n ? n() : n
        }
    }
    var u = e.i(409781);
    let c = new WeakMap;
    e.s(["useLocalizedStringFormatter", 0, function(e, t) {
        let o, {
                locale: r
            } = (0, n.useLocale)(),
            i = t && s.getGlobalDictionaryForPackage(t) || ((o = c.get(e)) || (o = new s(e), c.set(e, o)), o);
        return (0, u.useMemo)(() => new a(r, i), [r, i])
    }], 501427)
}, 629080, e => {
    "use strict";
    var t = e.i(259457),
        n = {};
    n = {
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
        s = e.i(720728),
        i = e.i(468689);
    e.s(["useMenuTrigger", 0, function(e, l, a) {
        var u;
        let {
            type: c = "menu",
            isDisabled: d,
            trigger: p = "press"
        } = e, f = (0, o.useId)(), {
            triggerProps: g,
            overlayProps: m
        } = (0, i.useOverlayTrigger)({
            type: c
        }, l, a), h = (0, r.useLocalizedStringFormatter)((u = n) && u.__esModule ? u.default : u, "@react-aria/menu"), {
            longPressProps: v
        } = (0, s.useLongPress)({
            isDisabled: d || "longPress" !== p,
            accessibilityDescription: h.format("longPressMessage"),
            onLongPressStart() {
                l.close()
            },
            onLongPress() {
                l.open("first")
            }
        });
        return delete g.onPress, {
            menuTriggerProps: {
                ...g,
                ..."press" === p ? {
                    preventFocusOnPress: !0,
                    onPressStart(e) {
                        "touch" === e.pointerType || "keyboard" === e.pointerType || d || ((0, t.focusWithoutScrolling)(e.target), l.open("virtual" === e.pointerType ? "first" : null))
                    },
                    onPress(e) {
                        "touch" !== e.pointerType || d || ((0, t.focusWithoutScrolling)(e.target), l.toggle())
                    }
                } : v,
                id: f,
                onKeyDown: e => {
                    if (!d && ("longPress" !== p || e.altKey) && a && a.current) switch (e.key) {
                        case "Enter":
                        case " ":
                            if ("longPress" === p || e.isDefaultPrevented()) return;
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
                ...m,
                "aria-labelledby": f,
                autoFocus: l.focusStrategy || !0,
                onClose: l.close
            }
        }
    }], 629080)
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
    var n = e.i(270170),
        o = e.i(501427),
        r = e.i(458229),
        s = e.i(409781);
    e.s(["DismissButton", 0, function(e) {
        var i;
        let {
            onDismiss: l,
            ...a
        } = e, u = (0, o.useLocalizedStringFormatter)((i = t) && i.__esModule ? i.default : i, "@react-aria/overlays"), c = (0, n.useLabels)(a, u.format("dismiss"));
        return s.default.createElement(r.VisuallyHidden, null, s.default.createElement("button", {
            ...c,
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
}, 513976, 686355, e => {
    "use strict";
    var t = e.i(429305),
        n = e.i(58824),
        o = e.i(838031),
        r = e.i(996980),
        s = e.i(409781);
    let i = s.default.forwardRef(({
        children: e,
        ...i
    }, l) => {
        let a = (0, s.useRef)(!1),
            u = (0, s.useContext)(n.PressResponderContext),
            c = (0, t.mergeProps)(u || {}, {
                ...i,
                register() {
                    a.current = !0, u && u.register()
                }
            });
        return c.ref = (0, o.useObjectRef)(l || u?.ref), (0, r.useSyncRef)(u, c.ref), (0, s.useEffect)(() => {
            a.current || (a.current = !0)
        }, []), s.default.createElement(n.PressResponderContext.Provider, {
            value: c
        }, e)
    });

    function l({
        children: e
    }) {
        let t = (0, s.useMemo)(() => ({
            register: () => {}
        }), []);
        return s.default.createElement(n.PressResponderContext.Provider, {
            value: t
        }, e)
    }
    e.s(["ClearPressResponder", 0, l, "PressResponder", 0, i], 686355);
    var a = e.i(675815),
        u = e.i(726103),
        c = e.i(185559),
        d = e.i(852120),
        p = e.i(42246);
    let f = s.default.createContext(null);
    e.s(["Overlay", 0, function(e) {
        let t = (0, u.useIsSSR)(),
            {
                portalContainer: n = t ? null : document.body,
                isExiting: o
            } = e,
            [r, i] = (0, s.useState)(!1),
            c = (0, s.useMemo)(() => ({
                contain: r,
                setContain: i
            }), [r, i]),
            {
                getContainer: g
            } = (0, d.useUNSAFE_PortalContext)();
        if (!e.portalContainer && g && (n = g()), !n) return null;
        let m = e.children;
        return e.disableFocusManagement || (m = s.default.createElement(a.FocusScope, {
            restoreFocus: !0,
            contain: (e.shouldContainFocus || r) && !o
        }, m)), m = s.default.createElement(f.Provider, {
            value: c
        }, s.default.createElement(l, null, m)), p.default.createPortal(m, n)
    }, "useOverlayFocusContain", 0, function() {
        let e = (0, s.useContext)(f),
            t = e?.setContain;
        (0, c.useLayoutEffect)(() => {
            t?.(!0)
        }, [t])
    }], 513976)
}, 852120, e => {
    "use strict";
    var t = e.i(409781);
    let n = (0, t.createContext)({});
    e.s(["useUNSAFE_PortalContext", 0, function() {
        return (0, t.useContext)(n) ?? {}
    }])
}, 666747, 690910, e => {
    "use strict";
    let t;
    var n = e.i(193777),
        o = e.i(575414),
        r = e.i(776050),
        s = e.i(950011);
    let i = "u" > typeof HTMLElement && "inert" in HTMLElement.prototype;

    function l(e) {
        return "true" === e.dataset.liveAnnouncer || void 0 !== e.dataset.reactAriaTopLayer
    }
    let a = new WeakMap,
        u = [];
    e.s(["ariaHideOutside", 0, function(e, t) {
        let c = (0, o.getOwnerWindow)(e?.[0]),
            d = t instanceof c.Element ? {
                root: t
            } : t,
            p = d?.root ?? document.body,
            f = d?.shouldUseInert && i,
            g = new Set(e),
            m = new Set,
            h = (e, t) => {
                f && e instanceof c.HTMLElement ? e.inert = t : t ? e.setAttribute("aria-hidden", "true") : (e.removeAttribute("aria-hidden"), e instanceof c.HTMLElement && (e.inert = !1))
            },
            v = new Set;
        if ((0, s.shadowDOM)())
            for (let t of e) {
                let e = t;
                for (; e && e !== p;) {
                    let t = e.getRootNode();
                    "shadowRoot" in t && v.add(t.shadowRoot), e = t.parentNode
                }
            }
        let b = e => {
                for (let t of e.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]")) g.add(t);
                let t = e => {
                        if (m.has(e) || g.has(e) || e.parentElement && m.has(e.parentElement) && "row" !== e.parentElement.getAttribute("role")) return NodeFilter.FILTER_REJECT;
                        for (let t of g)
                            if ((0, r.nodeContains)(e, t)) return NodeFilter.FILTER_SKIP;
                        return NodeFilter.FILTER_ACCEPT
                    },
                    s = (0, n.createShadowTreeWalker)((0, o.getOwnerDocument)(e), e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: t
                    }),
                    i = t(e);
                if (i === NodeFilter.FILTER_ACCEPT && y(e), i !== NodeFilter.FILTER_REJECT) {
                    let e = s.nextNode();
                    for (; null != e;) y(e), e = s.nextNode()
                }
            },
            y = e => {
                let t = a.get(e) ?? 0;
                (f && e instanceof c.HTMLElement ? e.inert : "true" === e.getAttribute("aria-hidden")) && 0 === t || (0 === t && h(e, !0), m.add(e), a.set(e, t + 1))
            };
        u.length && u[u.length - 1].disconnect(), b(p);
        let w = new MutationObserver(e => {
            for (let t of e)
                if ("childList" === t.type) {
                    if (t.target.isConnected && ![...g, ...m].some(e => (0, r.nodeContains)(e, t.target)))
                        for (let e of t.addedNodes)(e instanceof HTMLElement || e instanceof SVGElement) && l(e) ? g.add(e) : e instanceof Element && b(e);
                    if ((0, s.shadowDOM)()) {
                        for (let e of v)
                            if (!e.isConnected) {
                                w.disconnect();
                                break
                            }
                    }
                }
        });
        w.observe(p, {
            childList: !0,
            subtree: !0
        });
        let E = new Set;
        if ((0, s.shadowDOM)())
            for (let e of v) {
                let t = new MutationObserver(e => {
                    for (let t of e)
                        if ("childList" === t.type) {
                            if (t.target.isConnected && ![...g, ...m].some(e => (0, r.nodeContains)(e, t.target)))
                                for (let e of t.addedNodes)(e instanceof HTMLElement || e instanceof SVGElement) && l(e) ? g.add(e) : e instanceof Element && b(e);
                            if ((0, s.shadowDOM)()) {
                                for (let e of v)
                                    if (!e.isConnected) {
                                        w.disconnect();
                                        break
                                    }
                            }
                        }
                });
                t.observe(e, {
                    childList: !0,
                    subtree: !0
                }), E.add(t)
            }
        let P = {
            visibleNodes: g,
            hiddenNodes: m,
            observe() {
                w.observe(p, {
                    childList: !0,
                    subtree: !0
                })
            },
            disconnect() {
                w.disconnect()
            }
        };
        return u.push(P), () => {
            if (w.disconnect(), (0, s.shadowDOM)())
                for (let e of E) e.disconnect();
            for (let e of m) {
                let t = a.get(e);
                null != t && (1 === t ? (h(e, !1), a.delete(e)) : a.set(e, t - 1))
            }
            P === u[u.length - 1] ? (u.pop(), u.length && u[u.length - 1].observe()) : u.splice(u.indexOf(P), 1)
        }
    }, "keepVisible", 0, function(e) {
        let t = u[u.length - 1];
        if (t && !t.visibleNodes.has(e)) return t.visibleNodes.add(e), () => {
            t.visibleNodes.delete(e)
        }
    }], 666747);
    var c = e.i(476090),
        d = e.i(938280),
        p = e.i(843485),
        f = e.i(904960),
        g = e.i(758759),
        m = e.i(185559),
        h = e.i(630877);
    let v = "u" > typeof document && window.visualViewport,
        b = 0;

    function y(e, t, n) {
        let o = e.style[t];
        return e.style[t] = n, () => {
            e.style[t] = o
        }
    }

    function w(e, t, n, o) {
        return e.addEventListener(t, n, o), () => {
            e.removeEventListener(t, n, o)
        }
    }

    function E(e, t) {
        t || !v ? P(e) : v.addEventListener("resize", () => P(e), {
            once: !0
        })
    }

    function P(e) {
        let t = document.scrollingElement || document.documentElement,
            n = e;
        for (; n && n !== t;) {
            let e = (0, p.getScrollParent)(n);
            if (e !== document.documentElement && e !== document.body && e !== n) {
                let t = e.getBoundingClientRect(),
                    o = n.getBoundingClientRect();
                if (o.top < t.top || o.bottom > t.top + n.clientHeight) {
                    let n = t.bottom;
                    v && (n = Math.min(n, v.offsetTop + v.height));
                    let r = o.top - t.top - ((n - t.top) / 2 - o.height / 2);
                    e.scrollTo({
                        top: Math.max(0, Math.min(e.scrollHeight - e.clientHeight, e.scrollTop + r)),
                        behavior: "smooth"
                    })
                }
            }
            n = e.parentElement
        }
    }
    e.s(["usePreventScroll", 0, function(e = {}) {
        let {
            isDisabled: n
        } = e;
        (0, m.useLayoutEffect)(() => {
            if (!n) {
                let e, n, o, s, i, l, a, u;
                return 1 == ++b && (t = (0, f.isIOS)() ? (n = y(document.documentElement, "overflow", "hidden"), o = !1, s = document.createElement("style"), (i = (0, d.getNonce)()) && (s.nonce = i), s.textContent = `
@layer {
  * {
    overscroll-behavior: contain;
  }
}`.trim(), document.head.prepend(s), l = HTMLElement.prototype.focus, HTMLElement.prototype.focus = function(e) {
                    let t = (0, r.getActiveElement)(),
                        n = null != t && (0, h.willOpenKeyboard)(t);
                    l.call(this, {
                        ...e,
                        preventScroll: !0
                    }), e && e.preventScroll || E(this, n)
                }, a = (0, c.chain)(w(document, "touchstart", t => {
                    let n = (0, r.getEventTarget)(t);
                    e = (0, g.isScrollable)(n) ? n : (0, p.getScrollParent)(n, !0), o = !1;
                    let s = n.ownerDocument.defaultView.getSelection();
                    s && !s.isCollapsed && s.containsNode(n, !0) && (o = !0), t.composedPath().some(e => e instanceof HTMLInputElement && "range" === e.type) && (o = !0), "selectionStart" in n && "selectionEnd" in n && n.selectionStart < n.selectionEnd && n.ownerDocument.activeElement === n && (o = !0)
                }, {
                    passive: !1,
                    capture: !0
                }), w(document, "touchmove", t => {
                    if (2 !== t.touches.length && !o) {
                        if (!e || e === document.documentElement || e === document.body) return void t.preventDefault();
                        e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && t.preventDefault()
                    }
                }, {
                    passive: !1,
                    capture: !0
                }), w(document, "blur", e => {
                    let t = (0, r.getEventTarget)(e),
                        n = e.relatedTarget;
                    if (n && (0, h.willOpenKeyboard)(n)) n.focus({
                        preventScroll: !0
                    }), E(n, (0, h.willOpenKeyboard)(t));
                    else if (!n) {
                        let e = t.parentElement?.closest("[tabindex]");
                        e?.focus({
                            preventScroll: !0
                        })
                    }
                }, !0)), () => {
                    n(), a(), s.remove(), HTMLElement.prototype.focus = l
                }) : (u = window.innerWidth - document.documentElement.clientWidth, (0, c.chain)(u > 0 && ("scrollbarGutter" in document.documentElement.style ? y(document.documentElement, "scrollbarGutter", "stable") : y(document.documentElement, "paddingRight", `${u}px`)), y(document.documentElement, "overflow", "hidden")))), () => {
                    0 == --b && t()
                }
            }
        }, [n])
    }], 690910)
}, 975950, e => {
    "use strict";
    var t = e.i(904960),
        n = e.i(776050),
        o = e.i(747922);
    let r = {
            top: "top",
            bottom: "top",
            left: "left",
            right: "left"
        },
        s = {
            top: "bottom",
            bottom: "top",
            left: "right",
            right: "left"
        },
        i = {
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

    function c(e, n) {
        let o = 0,
            r = 0,
            s = 0,
            i = 0,
            l = 0,
            a = 0,
            u = {},
            c = (n?.scale ?? 1) > 1;
        if ("BODY" === e.tagName || "HTML" === e.tagName) {
            let t = document.documentElement;
            s = t.clientWidth, i = t.clientHeight, o = n?.width ?? s, r = n?.height ?? i, u.top = t.scrollTop || e.scrollTop, u.left = t.scrollLeft || e.scrollLeft, n && (l = n.offsetTop, a = n.offsetLeft)
        } else({
            width: o,
            height: r,
            top: l,
            left: a
        } = h(e, !1)), u.top = e.scrollTop, u.left = e.scrollLeft, s = o, i = r;
        return (0, t.isWebKit)() && ("BODY" === e.tagName || "HTML" === e.tagName) && c && (u.top = 0, u.left = 0, l = n?.pageTop ?? 0, a = n?.pageLeft ?? 0), {
            width: o,
            height: r,
            totalWidth: s,
            totalHeight: i,
            scroll: u,
            top: l,
            left: a
        }
    }

    function d(e, t, n, o, s, i, a) {
        let u = s.scroll[e] ?? 0,
            c = o[l[e]],
            d = a[e] + o.scroll[r[e]] + i,
            p = a[e] + o.scroll[r[e]] + c - i,
            f = t - u + o.scroll[r[e]] + a[e] - o[r[e]],
            g = t - u + n + o.scroll[r[e]] + a[e] - o[r[e]];
        return f < d ? d - f : g > p ? Math.max(p - g, d - f) : 0
    }

    function p(e) {
        if (u[e]) return u[e];
        let [t, n] = e.split(" "), o = r[t] || "right", s = i[o];
        r[n] || (n = "center");
        let a = l[o],
            c = l[s];
        return u[e] = {
            placement: t,
            crossPlacement: n,
            axis: o,
            crossAxis: s,
            size: a,
            crossSize: c
        }, u[e]
    }

    function f(e, t, n, r, i, l, u, c, d, p, f) {
        let {
            placement: g,
            crossPlacement: m,
            axis: h,
            crossAxis: v,
            size: b,
            crossSize: y
        } = r, w = {};
        w[v] = e[v] ?? 0, "center" === m ? w[v] += ((e[y] ?? 0) - (n[y] ?? 0)) / 2 : m !== v && (w[v] += (e[y] ?? 0) - (n[y] ?? 0)), w[v] += l;
        let E = e[v] - n[y] + d + p,
            P = e[v] + e[y] - d - p;
        if (w[v] = (0, o.clamp)(w[v], E, P), g === h) {
            let t = c ? f[b] : f[a[b]];
            w[s[h]] = Math.floor(t - e[h] + i)
        } else w[h] = Math.floor(e[h] + e[b] + i);
        return w
    }

    function g(e, t, n, o, r, i, l, a) {
        let {
            placement: u,
            axis: c,
            size: d
        } = i;
        return u === c ? Math.max(0, n[c] - (l.scroll[c] ?? 0) - (e[c] + (a ? t[c] : 0)) - (o[c] ?? 0) - o[s[c]] - r) : Math.max(0, e[d] + e[c] + (a ? t[c] : 0) - n[c] - n[d] + (l.scroll[c] ?? 0) - (o[c] ?? 0) - o[s[c]] - r)
    }

    function m(e, t) {
        let {
            top: n,
            left: o,
            width: r,
            height: s
        } = e.getBoundingClientRect();
        return t && e instanceof e.ownerDocument.defaultView.HTMLElement && (r = e.offsetWidth, s = e.offsetHeight), {
            top: n,
            left: o,
            width: r,
            height: s
        }
    }

    function h(e, t, n) {
        let {
            top: o,
            left: r,
            width: s,
            height: i
        } = n || m(e, t), {
            scrollTop: l,
            scrollLeft: a,
            clientTop: u,
            clientLeft: c
        } = document.documentElement;
        return {
            top: o + l - u,
            left: r + a - c,
            width: s,
            height: i
        }
    }

    function v(e, t, n, o) {
        let r, s = window.getComputedStyle(e);
        if ("fixed" === s.position) r = o || m(e, n);
        else {
            r = h(e, n, o);
            let s = h(t, n),
                i = window.getComputedStyle(t);
            s.top += (parseInt(i.borderTopWidth, 10) || 0) - t.scrollTop, s.left += (parseInt(i.borderLeftWidth, 10) || 0) - t.scrollLeft, r.top -= s.top, r.left -= s.left
        }
        return r.top -= parseInt(s.marginTop, 10) || 0, r.left -= parseInt(s.marginLeft, 10) || 0, r
    }

    function b(e) {
        let t = window.getComputedStyle(e);
        return "none" !== t.transform || /transform|perspective/.test(t.willChange) || "none" !== t.filter || "paint" === t.contain || "backdropFilter" in t && "none" !== t.backdropFilter || "WebkitBackdropFilter" in t && "none" !== t.WebkitBackdropFilter
    }
    e.s(["calculatePosition", 0, function(e) {
        let t, i, {
                placement: l,
                targetNode: u,
                overlayNode: y,
                scrollNode: w,
                padding: E,
                shouldFlip: P,
                boundaryElement: L,
                offset: M,
                crossOffset: O,
                maxHeight: S,
                arrowSize: T = 0,
                arrowBoundaryOffset: C = 0,
                targetRect: A
            } = e,
            R = "u" > typeof document ? window.visualViewport : null,
            k = y instanceof HTMLElement ? function(e) {
                let t = e.offsetParent;
                if (t && t === document.body && "static" === window.getComputedStyle(t).position && !b(t) && (t = document.documentElement), null == t)
                    for (t = e.parentElement; t && !b(t);) t = t.parentElement;
                return t || document.documentElement
            }(y) : document.documentElement,
            x = k === document.documentElement,
            D = window.getComputedStyle(k).position,
            H = x ? h(u, !1, A) : v(u, k, !1, A);
        if (!x) {
            let {
                marginTop: e,
                marginLeft: t
            } = window.getComputedStyle(u);
            H.top += parseInt(e, 10) || 0, H.left += parseInt(t, 10) || 0
        }
        let N = h(y, !0),
            z = {
                top: parseInt((t = window.getComputedStyle(y)).marginTop, 10) || 0,
                bottom: parseInt(t.marginBottom, 10) || 0,
                left: parseInt(t.marginLeft, 10) || 0,
                right: parseInt(t.marginRight, 10) || 0
            };
        N.width += (z.left ?? 0) + (z.right ?? 0), N.height += (z.top ?? 0) + (z.bottom ?? 0), w.scrollTop, w.scrollLeft, w.scrollWidth, w.scrollHeight;
        let F = c(L, R),
            I = c(k, R);
        if ("BODY" !== L.tagName && "HTML" !== L.tagName || x) i = ("BODY" === L.tagName || "HTML" === L.tagName) && x ? {
            top: 0,
            left: 0,
            width: 0,
            height: 0
        } : v(L, k, !1);
        else {
            let e = m(k, !1);
            i = {
                top: -(e.top - F.top),
                left: -(e.left - F.left),
                width: 0,
                height: 0
            }
        }
        return function(e, t, n, i, l, u, c, m, h, v, b, y, w, E, P, L, M) {
            var O, S, T;
            let C, A, R, k = p(e),
                {
                    size: x,
                    crossAxis: D,
                    crossSize: H,
                    placement: N,
                    crossPlacement: z
                } = k,
                F = f(t, c, n, k, v, b, h, y, E, P, m),
                I = v,
                W = g(c, h, t, i, l + v, k, m, L);
            if (u && n[x] > W) {
                let e = p(`${s[N]} ${z}`),
                    o = f(t, c, n, e, v, b, h, y, E, P, m);
                g(c, h, t, i, l + v, e, m, L) > W && (k = e, F = o, I = v)
            }
            let B = "bottom";
            "top" === k.axis ? "top" === k.placement ? B = "top" : "bottom" === k.placement && (B = "bottom") : "top" === k.crossAxis && ("top" === k.crossPlacement ? B = "bottom" : "bottom" === k.crossPlacement && (B = "top"));
            let j = d(D, F[D], n[H], c, m, l, h);
            F[D] += j;
            let K = (O = F, S = n.height, T = B, C = (null != O.top ? O.top : m[a.height] - (O.bottom ?? 0) - S) - (m.scroll.top ?? 0), A = L ? h.top : 0, R = {
                top: Math.max(c.top + A, (M?.offsetTop ?? c.top) + A),
                bottom: Math.min(c.top + c.height + A, (M?.offsetTop ?? 0) + (M?.height ?? 0))
            }, "top" !== T ? Math.max(0, R.bottom - C - ((i.top ?? 0) + (i.bottom ?? 0) + l)) : Math.max(0, C + S - R.top - ((i.top ?? 0) + (i.bottom ?? 0) + l)));
            w && w < K && (K = w), n.height = Math.min(n.height, K), j = d(D, (F = f(t, c, n, k, I, b, h, y, E, P, m))[D], n[H], c, m, l, h), F[D] += j;
            let U = {},
                V = t[D] - F[D] - i[r[D]],
                _ = V + .5 * t[H],
                G = E / 2 + P,
                $ = "left" === r[D] ? (i.left ?? 0) + (i.right ?? 0) : (i.top ?? 0) + (i.bottom ?? 0),
                Y = n[H] - $ - E / 2 - P,
                Z = t[D] + E / 2 - (F[D] + i[r[D]]),
                J = t[D] + t[H] - E / 2 - (F[D] + i[r[D]]),
                q = (0, o.clamp)(_, Z, J);
            U[D] = (0, o.clamp)(q, G, Y), ({
                placement: N,
                crossPlacement: z
            } = k), E ? V = U[D] : "right" === z ? V += t[H] : "center" === z && (V += t[H] / 2);
            let X = "left" === N || "top" === N ? n[x] : 0,
                Q = {
                    x: "top" === N || "bottom" === N ? V : X,
                    y: "left" === N || "right" === N ? V : X
                };
            return {
                position: F,
                maxHeight: K,
                arrowOffsetLeft: U.left,
                arrowOffsetTop: U.top,
                placement: N,
                triggerAnchorPoint: Q
            }
        }(l, H, N, z, E, P, F, I, i, M, O, !!D && "static" !== D, S, T, C, (0, n.nodeContains)(L, k), R)
    }, "getRect", 0, m])
}, 101933, e => {
    "use strict";
    var t = e.i(776050),
        n = e.i(409781);
    let o = new WeakMap;
    e.s(["onCloseMap", 0, o, "useCloseOnScroll", 0, function(e) {
        let {
            triggerRef: r,
            isOpen: s,
            onClose: i
        } = e;
        (0, n.useEffect)(() => {
            if (!s || null === i) return;
            let e = e => {
                let n = (0, t.getEventTarget)(e);
                if (!r.current || n instanceof Node && !(0, t.nodeContains)(n, r.current) || n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement) return;
                let s = i || o.get(r.current);
                s && s()
            };
            return window.addEventListener("scroll", e, !0), () => {
                window.removeEventListener("scroll", e, !0)
            }
        }, [s, i, r])
    }])
}, 419476, e => {
    "use strict";
    var t = e.i(776050),
        n = e.i(675815),
        o = e.i(768307),
        r = e.i(575414),
        s = e.i(600939),
        i = e.i(409781);

    function l(e, n) {
        if (e.button > 0) return !1;
        let o = (0, t.getEventTarget)(e);
        if (o) {
            let e = o.ownerDocument;
            if (!e || !(0, t.nodeContains)(e.documentElement, o) || o.closest("[data-react-aria-top-layer]")) return !1
        }
        return !!n.current && !e.composedPath().includes(n.current)
    }
    let a = [];
    e.s(["useOverlay", 0, function(e, u) {
        let {
            onClose: c,
            shouldCloseOnBlur: d,
            isOpen: p,
            isDismissable: f = !1,
            isKeyboardDismissDisabled: g = !1,
            shouldCloseOnInteractOutside: m
        } = e, h = (0, i.useRef)(void 0);
        (0, i.useEffect)(() => {
            if (p && !a.includes(u)) return a.push(u), () => {
                let e = a.indexOf(u);
                e >= 0 && a.splice(e, 1)
            }
        }, [p, u]);
        let v = () => {
            a[a.length - 1] === u && c && c()
        };
        ! function(e) {
            let {
                ref: t,
                onInteractOutside: n,
                isDisabled: o,
                onInteractOutsideStart: a
            } = e, u = (0, i.useRef)({
                isPointerDown: !1,
                ignoreEmulatedMouseEvents: !1
            }), c = (0, s.useEffectEvent)(e => {
                n && l(e, t) && (a && a(e), u.current.isPointerDown = !0)
            }), d = (0, s.useEffectEvent)(e => {
                n && n(e)
            });
            (0, i.useEffect)(() => {
                let e = u.current;
                if (o) return;
                let n = t.current,
                    s = (0, r.getOwnerDocument)(n);
                if ("u" > typeof PointerEvent) {
                    let n = n => {
                        e.isPointerDown && l(n, t) && d(n), e.isPointerDown = !1
                    };
                    return s.addEventListener("pointerdown", c, !0), s.addEventListener("click", n, !0), () => {
                        s.removeEventListener("pointerdown", c, !0), s.removeEventListener("click", n, !0)
                    }
                }
            }, [t, o])
        }({
            ref: u,
            onInteractOutside: f && p ? e => {
                (!m || m((0, t.getEventTarget)(e))) && (a[a.length - 1] === u && e.stopPropagation(), h.current === u && v()), h.current = void 0
            } : void 0,
            onInteractOutsideStart: e => {
                let n = a[a.length - 1];
                h.current = n, (!m || m((0, t.getEventTarget)(e))) && n === u && e.stopPropagation()
            }
        });
        let {
            focusWithinProps: b
        } = (0, o.useFocusWithin)({
            isDisabled: !d,
            onBlurWithin: e => {
                !(!e.relatedTarget || (0, n.isElementInChildOfActiveScope)(e.relatedTarget)) && (!m || m(e.relatedTarget)) && c?.()
            }
        });
        return {
            overlayProps: {
                onKeyDown: e => {
                    "Escape" !== e.key || g || e.nativeEvent.isComposing || (e.stopPropagation(), e.preventDefault(), v())
                },
                ...b
            },
            underlayProps: {}
        }
    }], 419476)
}, 879537, e => {
    "use strict";
    var t = e.i(975950),
        n = e.i(776050),
        o = e.i(101933),
        r = e.i(185559),
        s = e.i(876728),
        i = e.i(138381),
        l = e.i(409781);
    let a = "u" > typeof document ? window.visualViewport : null;
    e.s(["useOverlayPosition", 0, function(e) {
        var u;
        let {
            direction: c
        } = (0, s.useLocale)(), {
            arrowSize: d,
            targetRef: p,
            overlayRef: f,
            arrowRef: g,
            scrollRef: m = f,
            placement: h = "bottom",
            containerPadding: v = 12,
            shouldFlip: b = !0,
            boundaryElement: y = "u" > typeof document ? document.body : null,
            offset: w = 0,
            crossOffset: E = 0,
            shouldUpdatePosition: P = !0,
            isOpen: L = !0,
            onClose: M,
            maxHeight: O,
            arrowBoundaryOffset: S = 0,
            getTargetRect: T
        } = e, [C, A] = (0, l.useState)(null), R = [P, h, f.current, p.current, g?.current, m.current, v, b, y, w, E, L, c, O, S, d], k = (0, l.useRef)(a?.scale);
        (0, l.useEffect)(() => {
            L && (k.current = a?.scale)
        }, [L]);
        let x = (0, l.useCallback)(() => {
            var e;
            if (!1 === P || !L || !f.current || !p.current || !y || a?.scale !== k.current) return;
            let o = null;
            if (m.current && (0, n.isFocusWithin)(m.current)) {
                let e = (0, n.getActiveElement)()?.getBoundingClientRect(),
                    t = m.current.getBoundingClientRect();
                (o = {
                    type: "top",
                    offset: (e?.top ?? 0) - t.top
                }).offset > t.height / 2 && (o.type = "bottom", o.offset = (e?.bottom ?? 0) - t.bottom)
            }
            let r = f.current;
            !O && f.current && (r.style.top = "0px", r.style.bottom = "", r.style.maxHeight = (window.visualViewport?.height ?? window.innerHeight) + "px");
            let s = (0, t.calculatePosition)({
                placement: (e = h, "rtl" === c ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right")),
                overlayNode: f.current,
                targetNode: p.current,
                scrollNode: m.current || f.current,
                padding: v,
                shouldFlip: b,
                boundaryElement: y,
                offset: w,
                crossOffset: E,
                maxHeight: O,
                arrowSize: d ?? (g?.current ? (0, t.getRect)(g.current, !0).width : 0),
                arrowBoundaryOffset: S,
                targetRect: T?.(p.current)
            });
            if (!s.position) return;
            r.style.top = "", r.style.bottom = "", r.style.left = "", r.style.right = "", Object.keys(s.position).forEach(e => r.style[e] = s.position[e] + "px"), r.style.maxHeight = null != s.maxHeight ? s.maxHeight + "px" : "";
            let i = (0, n.getActiveElement)();
            if (o && i && m.current) {
                let e = i.getBoundingClientRect(),
                    t = m.current.getBoundingClientRect(),
                    n = e[o.type] - t[o.type];
                m.current.scrollTop += n - o.offset
            }
            A(s)
        }, R);
        (0, r.useLayoutEffect)(x, R), u = x, (0, r.useLayoutEffect)(() => (window.addEventListener("resize", u, !1), () => {
            window.removeEventListener("resize", u, !1)
        }), [u]), (0, i.useResizeObserver)({
            ref: f,
            onResize: x
        }), (0, i.useResizeObserver)({
            ref: p,
            onResize: x
        });
        let D = (0, l.useRef)(!1);
        (0, r.useLayoutEffect)(() => {
            let e, t = () => {
                    D.current = !0, clearTimeout(e), e = setTimeout(() => {
                        D.current = !1
                    }, 500), x()
                },
                n = () => {
                    D.current && t()
                };
            return a?.addEventListener("resize", t), a?.addEventListener("scroll", n), () => {
                a?.removeEventListener("resize", t), a?.removeEventListener("scroll", n)
            }
        }, [x]);
        let H = (0, l.useCallback)(() => {
            D.current || M?.()
        }, [M, D]);
        return (0, o.useCloseOnScroll)({
            triggerRef: p,
            isOpen: L,
            onClose: M && H
        }), {
            overlayProps: {
                style: {
                    position: C ? "absolute" : "fixed",
                    top: C ? void 0 : 0,
                    left: C ? void 0 : 0,
                    zIndex: 1e5,
                    ...C?.position,
                    maxHeight: C?.maxHeight ?? "100vh"
                }
            },
            placement: C?.placement ?? null,
            triggerAnchorPoint: C?.triggerAnchorPoint ?? null,
            arrowProps: {
                "aria-hidden": "true",
                role: "presentation",
                style: {
                    left: C?.arrowOffsetLeft,
                    top: C?.arrowOffsetTop
                }
            },
            updatePosition: x
        }
    }])
}, 468689, e => {
    "use strict";
    var t = e.i(101933),
        n = e.i(823512),
        o = e.i(409781);
    e.s(["useOverlayTrigger", 0, function(e, r, s) {
        let i, {
                type: l
            } = e,
            {
                isOpen: a
            } = r;
        (0, o.useEffect)(() => {
            s && s.current && t.onCloseMap.set(s.current, r.close)
        }), "menu" === l ? i = !0 : "listbox" === l && (i = "listbox");
        let u = (0, n.useId)();
        return {
            triggerProps: {
                "aria-haspopup": i,
                "aria-expanded": a,
                "aria-controls": a ? u : void 0,
                onPress: r.toggle
            },
            overlayProps: {
                id: u
            }
        }
    }])
}, 243941, e => {
    "use strict";
    var t = e.i(666747),
        n = e.i(879537),
        o = e.i(429305),
        r = e.i(419476),
        s = e.i(690910),
        i = e.i(409781);
    e.s(["usePopover", 0, function(e, l) {
        let {
            triggerRef: a,
            popoverRef: u,
            groupRef: c,
            isNonModal: d,
            isKeyboardDismissDisabled: p,
            shouldCloseOnInteractOutside: f,
            ...g
        } = e, m = "SubmenuTrigger" === g.trigger, {
            overlayProps: h,
            underlayProps: v
        } = (0, r.useOverlay)({
            isOpen: l.isOpen,
            onClose: l.close,
            shouldCloseOnBlur: !0,
            isDismissable: !d || m,
            isKeyboardDismissDisabled: p,
            shouldCloseOnInteractOutside: f
        }, c ?? u), {
            overlayProps: b,
            arrowProps: y,
            placement: w,
            triggerAnchorPoint: E
        } = (0, n.useOverlayPosition)({
            ...g,
            targetRef: a,
            overlayRef: u,
            isOpen: l.isOpen,
            onClose: d && !m ? l.close : null
        });
        return (0, s.usePreventScroll)({
            isDisabled: d || !l.isOpen
        }), (0, i.useEffect)(() => {
            if (l.isOpen && u.current)
                if (d) return (0, t.keepVisible)(c?.current ?? u.current);
                else return (0, t.ariaHideOutside)([c?.current ?? u.current], {
                    shouldUseInert: !0
                })
        }, [d, l.isOpen, u, c]), {
            popoverProps: (0, o.mergeProps)(h, b),
            arrowProps: y,
            underlayProps: v,
            placement: w,
            triggerAnchorPoint: E
        }
    }])
}, 843485, 758759, e => {
    "use strict";

    function t(e, t) {
        if (!e) return !1;
        let n = window.getComputedStyle(e),
            o = document.scrollingElement || document.documentElement,
            r = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
        return e === o && "hidden" !== n.overflow && (r = !0), r && t && (r = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), r
    }
    e.s(["isScrollable", 0, t], 758759), e.s(["getScrollParent", 0, function(e, n) {
        let o = e;
        for (t(o, n) && (o = o.parentElement); o && !t(o, n);) o = o.parentElement;
        return o || document.scrollingElement || document.documentElement
    }], 843485)
}, 630877, e => {
    "use strict";
    var t = e.i(904960);
    let n = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
    e.s(["isCtrlKeyPressed", 0, function(e) {
        return (0, t.isMac)() ? e.metaKey : e.ctrlKey
    }, "willOpenKeyboard", 0, function(e) {
        return e instanceof HTMLInputElement && !n.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable
    }])
}, 138381, e => {
    "use strict";
    var t = e.i(600939),
        n = e.i(409781);
    e.s(["useResizeObserver", 0, function(e) {
        let {
            ref: o,
            box: r,
            onResize: s
        } = e, i = (0, t.useEffectEvent)(s);
        (0, n.useEffect)(() => {
            let e = o?.current;
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
        }, [o, r])
    }])
}, 458229, e => {
    "use strict";
    var t = e.i(429305),
        n = e.i(768307),
        o = e.i(409781);
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

    function s(e = {}) {
        let {
            style: t,
            isFocusable: i
        } = e, [l, a] = (0, o.useState)(!1), {
            focusWithinProps: u
        } = (0, n.useFocusWithin)({
            isDisabled: !i,
            onFocusWithinChange: e => a(e)
        }), c = (0, o.useMemo)(() => l ? t : t ? {
            ...r,
            ...t
        } : r, [l]);
        return {
            visuallyHiddenProps: {
                ...u,
                style: c
            }
        }
    }
    e.s(["VisuallyHidden", 0, function(e) {
        let {
            children: n,
            elementType: r = "div",
            isFocusable: i,
            style: l,
            ...a
        } = e, {
            visuallyHiddenProps: u
        } = s(e);
        return o.default.createElement(r, (0, t.mergeProps)(a, u), n)
    }, "useVisuallyHidden", 0, s])
}, 512985, e => {
    "use strict";
    var t = e.i(803258),
        n = e.i(409781);
    e.s(["useOverlayTriggerState", 0, function(e) {
        let [o, r] = (0, t.useControlledState)(e.isOpen, e.defaultOpen || !1, e.onOpenChange), s = (0, n.useCallback)(() => {
            r(!0)
        }, [r]), i = (0, n.useCallback)(() => {
            r(!1)
        }, [r]), l = (0, n.useCallback)(() => {
            r(!o)
        }, [r, o]);
        return {
            isOpen: o,
            setOpen: r,
            open: s,
            close: i,
            toggle: l
        }
    }])
}]);

//# debugId=9664c985-7023-bfb1-5f8b-d376b86a94ea