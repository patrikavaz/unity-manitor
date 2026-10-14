;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "7164d017-832a-a525-541c-53d9d5a60872")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 501427, e => {
    "use strict";
    let t;
    var s = e.i(876728);
    let n = Symbol.for("react-aria.i18n.locale"),
        r = Symbol.for("react-aria.i18n.strings");
    class i {
        constructor(e, t = "en-US") {
            this.strings = Object.fromEntries(Object.entries(e).filter(([, e]) => e)), this.defaultLocale = t
        }
        getStringForLocale(e, t) {
            let s = this.getStringsForLocale(t)[e];
            if (!s) throw Error(`Could not find intl message ${e} in ${t} locale`);
            return s
        }
        getStringsForLocale(e) {
            let t = this.strings[e];
            return t || (t = function(e, t, s = "en-US") {
                var n;
                if (t[e]) return t[e];
                let r = (n = e, Intl.Locale ? new Intl.Locale(n).language : n.split("-")[0]);
                if (t[r]) return t[r];
                for (let e in t)
                    if (e.startsWith(r + "-")) return t[e];
                return t[s]
            }(e, this.strings, this.defaultLocale), this.strings[e] = t), t
        }
        static getGlobalDictionaryForPackage(e) {
            if ("u" < typeof window) return null;
            let s = window[n];
            if (void 0 === t) {
                let e = window[r];
                if (!e) return null;
                for (let n in t = {}, e) t[n] = new i({
                    [s]: e[n]
                }, s)
            }
            let o = t?.[e];
            if (!o) throw Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
            return o
        }
    }
    let o = new Map,
        l = new Map;
    class a {
        constructor(e, t) {
            this.locale = e, this.strings = t
        }
        format(e, t) {
            let s = this.strings.getStringForLocale(e, this.locale);
            return "function" == typeof s ? s(t, this) : s
        }
        plural(e, t, s = "cardinal") {
            let n = t["=" + e];
            if (n) return "function" == typeof n ? n() : n;
            let r = this.locale + ":" + s,
                i = o.get(r);
            return i || (i = new Intl.PluralRules(this.locale, {
                type: s
            }), o.set(r, i)), "function" == typeof(n = t[i.select(e)] || t.other) ? n() : n
        }
        number(e) {
            let t = l.get(this.locale);
            return t || (t = new Intl.NumberFormat(this.locale), l.set(this.locale, t)), t.format(e)
        }
        select(e, t) {
            let s = e[t] || e.other;
            return "function" == typeof s ? s() : s
        }
    }
    var u = e.i(409781);
    let c = new WeakMap;
    e.s(["useLocalizedStringFormatter", 0, function(e, t) {
        let n, {
                locale: r
            } = (0, s.useLocale)(),
            o = t && i.getGlobalDictionaryForPackage(t) || ((n = c.get(e)) || (n = new i(e), c.set(e, n)), n);
        return (0, u.useMemo)(() => new a(r, o), [r, o])
    }], 501427)
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
    var n = e.i(823512),
        r = e.i(501427),
        i = e.i(720728),
        o = e.i(468689);
    e.s(["useMenuTrigger", 0, function(e, l, a) {
        var u;
        let {
            type: c = "menu",
            isDisabled: d,
            trigger: g = "press"
        } = e, p = (0, n.useId)(), {
            triggerProps: m,
            overlayProps: f
        } = (0, o.useOverlayTrigger)({
            type: c
        }, l, a), h = (0, r.useLocalizedStringFormatter)((u = s) && u.__esModule ? u.default : u, "@react-aria/menu"), {
            longPressProps: v
        } = (0, i.useLongPress)({
            isDisabled: d || "longPress" !== g,
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
                        "touch" === e.pointerType || "keyboard" === e.pointerType || d || ((0, t.focusWithoutScrolling)(e.target), l.open("virtual" === e.pointerType ? "first" : null))
                    },
                    onPress(e) {
                        "touch" !== e.pointerType || d || ((0, t.focusWithoutScrolling)(e.target), l.toggle())
                    }
                } : v,
                id: p,
                onKeyDown: e => {
                    if (!d && ("longPress" !== g || e.altKey) && a && a.current) switch (e.key) {
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
                "aria-labelledby": p,
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
    var s = e.i(270170),
        n = e.i(501427),
        r = e.i(458229),
        i = e.i(409781);
    e.s(["DismissButton", 0, function(e) {
        var o;
        let {
            onDismiss: l,
            ...a
        } = e, u = (0, n.useLocalizedStringFormatter)((o = t) && o.__esModule ? o.default : o, "@react-aria/overlays"), c = (0, s.useLabels)(a, u.format("dismiss"));
        return i.default.createElement(r.VisuallyHidden, null, i.default.createElement("button", {
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
        s = e.i(58824),
        n = e.i(838031),
        r = e.i(996980),
        i = e.i(409781);
    let o = i.default.forwardRef(({
        children: e,
        ...o
    }, l) => {
        let a = (0, i.useRef)(!1),
            u = (0, i.useContext)(s.PressResponderContext),
            c = (0, t.mergeProps)(u || {}, {
                ...o,
                register() {
                    a.current = !0, u && u.register()
                }
            });
        return c.ref = (0, n.useObjectRef)(l || u?.ref), (0, r.useSyncRef)(u, c.ref), (0, i.useEffect)(() => {
            a.current || (a.current = !0)
        }, []), i.default.createElement(s.PressResponderContext.Provider, {
            value: c
        }, e)
    });

    function l({
        children: e
    }) {
        let t = (0, i.useMemo)(() => ({
            register: () => {}
        }), []);
        return i.default.createElement(s.PressResponderContext.Provider, {
            value: t
        }, e)
    }
    e.s(["ClearPressResponder", 0, l, "PressResponder", 0, o], 686355);
    var a = e.i(675815),
        u = e.i(726103),
        c = e.i(185559),
        d = e.i(852120),
        g = e.i(42246);
    let p = i.default.createContext(null);
    e.s(["Overlay", 0, function(e) {
        let t = (0, u.useIsSSR)(),
            {
                portalContainer: s = t ? null : document.body,
                isExiting: n
            } = e,
            [r, o] = (0, i.useState)(!1),
            c = (0, i.useMemo)(() => ({
                contain: r,
                setContain: o
            }), [r, o]),
            {
                getContainer: m
            } = (0, d.useUNSAFE_PortalContext)();
        if (!e.portalContainer && m && (s = m()), !s) return null;
        let f = e.children;
        return e.disableFocusManagement || (f = i.default.createElement(a.FocusScope, {
            restoreFocus: !0,
            contain: (e.shouldContainFocus || r) && !n
        }, f)), f = i.default.createElement(p.Provider, {
            value: c
        }, i.default.createElement(l, null, f)), g.default.createPortal(f, s)
    }, "useOverlayFocusContain", 0, function() {
        let e = (0, i.useContext)(p),
            t = e?.setContain;
        (0, c.useLayoutEffect)(() => {
            t?.(!0)
        }, [t])
    }], 513976)
}, 666747, 690910, e => {
    "use strict";
    let t;
    var s = e.i(193777),
        n = e.i(575414),
        r = e.i(776050),
        i = e.i(950011);
    let o = "u" > typeof HTMLElement && "inert" in HTMLElement.prototype;

    function l(e) {
        return "true" === e.dataset.liveAnnouncer || void 0 !== e.dataset.reactAriaTopLayer
    }
    let a = new WeakMap,
        u = [];
    e.s(["ariaHideOutside", 0, function(e, t) {
        let c = (0, n.getOwnerWindow)(e?.[0]),
            d = t instanceof c.Element ? {
                root: t
            } : t,
            g = d?.root ?? document.body,
            p = d?.shouldUseInert && o,
            m = new Set(e),
            f = new Set,
            h = (e, t) => {
                p && e instanceof c.HTMLElement ? e.inert = t : t ? e.setAttribute("aria-hidden", "true") : (e.removeAttribute("aria-hidden"), e instanceof c.HTMLElement && (e.inert = !1))
            },
            v = new Set;
        if ((0, i.shadowDOM)())
            for (let t of e) {
                let e = t;
                for (; e && e !== g;) {
                    let t = e.getRootNode();
                    "shadowRoot" in t && v.add(t.shadowRoot), e = t.parentNode
                }
            }
        let P = e => {
                for (let t of e.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]")) m.add(t);
                let t = e => {
                        if (f.has(e) || m.has(e) || e.parentElement && f.has(e.parentElement) && "row" !== e.parentElement.getAttribute("role")) return NodeFilter.FILTER_REJECT;
                        for (let t of m)
                            if ((0, r.nodeContains)(e, t)) return NodeFilter.FILTER_SKIP;
                        return NodeFilter.FILTER_ACCEPT
                    },
                    i = (0, s.createShadowTreeWalker)((0, n.getOwnerDocument)(e), e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: t
                    }),
                    o = t(e);
                if (o === NodeFilter.FILTER_ACCEPT && y(e), o !== NodeFilter.FILTER_REJECT) {
                    let e = i.nextNode();
                    for (; null != e;) y(e), e = i.nextNode()
                }
            },
            y = e => {
                let t = a.get(e) ?? 0;
                (p && e instanceof c.HTMLElement ? e.inert : "true" === e.getAttribute("aria-hidden")) && 0 === t || (0 === t && h(e, !0), f.add(e), a.set(e, t + 1))
            };
        u.length && u[u.length - 1].disconnect(), P(g);
        let b = new MutationObserver(e => {
            for (let t of e)
                if ("childList" === t.type) {
                    if (t.target.isConnected && ![...m, ...f].some(e => (0, r.nodeContains)(e, t.target)))
                        for (let e of t.addedNodes)(e instanceof HTMLElement || e instanceof SVGElement) && l(e) ? m.add(e) : e instanceof Element && P(e);
                    if ((0, i.shadowDOM)()) {
                        for (let e of v)
                            if (!e.isConnected) {
                                b.disconnect();
                                break
                            }
                    }
                }
        });
        b.observe(g, {
            childList: !0,
            subtree: !0
        });
        let E = new Set;
        if ((0, i.shadowDOM)())
            for (let e of v) {
                let t = new MutationObserver(e => {
                    for (let t of e)
                        if ("childList" === t.type) {
                            if (t.target.isConnected && ![...m, ...f].some(e => (0, r.nodeContains)(e, t.target)))
                                for (let e of t.addedNodes)(e instanceof HTMLElement || e instanceof SVGElement) && l(e) ? m.add(e) : e instanceof Element && P(e);
                            if ((0, i.shadowDOM)()) {
                                for (let e of v)
                                    if (!e.isConnected) {
                                        b.disconnect();
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
        let w = {
            visibleNodes: m,
            hiddenNodes: f,
            observe() {
                b.observe(g, {
                    childList: !0,
                    subtree: !0
                })
            },
            disconnect() {
                b.disconnect()
            }
        };
        return u.push(w), () => {
            if (b.disconnect(), (0, i.shadowDOM)())
                for (let e of E) e.disconnect();
            for (let e of f) {
                let t = a.get(e);
                null != t && (1 === t ? (h(e, !1), a.delete(e)) : a.set(e, t - 1))
            }
            w === u[u.length - 1] ? (u.pop(), u.length && u[u.length - 1].observe()) : u.splice(u.indexOf(w), 1)
        }
    }, "keepVisible", 0, function(e) {
        let t = u[u.length - 1];
        if (t && !t.visibleNodes.has(e)) return t.visibleNodes.add(e), () => {
            t.visibleNodes.delete(e)
        }
    }], 666747);
    var c = e.i(476090),
        d = e.i(938280),
        g = e.i(843485),
        p = e.i(904960),
        m = e.i(758759),
        f = e.i(185559),
        h = e.i(630877);
    let v = "u" > typeof document && window.visualViewport,
        P = 0;

    function y(e, t, s) {
        let n = e.style[t];
        return e.style[t] = s, () => {
            e.style[t] = n
        }
    }

    function b(e, t, s, n) {
        return e.addEventListener(t, s, n), () => {
            e.removeEventListener(t, s, n)
        }
    }

    function E(e, t) {
        t || !v ? w(e) : v.addEventListener("resize", () => w(e), {
            once: !0
        })
    }

    function w(e) {
        let t = document.scrollingElement || document.documentElement,
            s = e;
        for (; s && s !== t;) {
            let e = (0, g.getScrollParent)(s);
            if (e !== document.documentElement && e !== document.body && e !== s) {
                let t = e.getBoundingClientRect(),
                    n = s.getBoundingClientRect();
                if (n.top < t.top || n.bottom > t.top + s.clientHeight) {
                    let s = t.bottom;
                    v && (s = Math.min(s, v.offsetTop + v.height));
                    let r = n.top - t.top - ((s - t.top) / 2 - n.height / 2);
                    e.scrollTo({
                        top: Math.max(0, Math.min(e.scrollHeight - e.clientHeight, e.scrollTop + r)),
                        behavior: "smooth"
                    })
                }
            }
            s = e.parentElement
        }
    }
    e.s(["usePreventScroll", 0, function(e = {}) {
        let {
            isDisabled: s
        } = e;
        (0, f.useLayoutEffect)(() => {
            if (!s) {
                let e, s, n, i, o, l, a, u;
                return 1 == ++P && (t = (0, p.isIOS)() ? (s = y(document.documentElement, "overflow", "hidden"), n = !1, i = document.createElement("style"), (o = (0, d.getNonce)()) && (i.nonce = o), i.textContent = `
@layer {
  * {
    overscroll-behavior: contain;
  }
}`.trim(), document.head.prepend(i), l = HTMLElement.prototype.focus, HTMLElement.prototype.focus = function(e) {
                    let t = (0, r.getActiveElement)(),
                        s = null != t && (0, h.willOpenKeyboard)(t);
                    l.call(this, {
                        ...e,
                        preventScroll: !0
                    }), e && e.preventScroll || E(this, s)
                }, a = (0, c.chain)(b(document, "touchstart", t => {
                    let s = (0, r.getEventTarget)(t);
                    e = (0, m.isScrollable)(s) ? s : (0, g.getScrollParent)(s, !0), n = !1;
                    let i = s.ownerDocument.defaultView.getSelection();
                    i && !i.isCollapsed && i.containsNode(s, !0) && (n = !0), t.composedPath().some(e => e instanceof HTMLInputElement && "range" === e.type) && (n = !0), "selectionStart" in s && "selectionEnd" in s && s.selectionStart < s.selectionEnd && s.ownerDocument.activeElement === s && (n = !0)
                }, {
                    passive: !1,
                    capture: !0
                }), b(document, "touchmove", t => {
                    if (2 !== t.touches.length && !n) {
                        if (!e || e === document.documentElement || e === document.body) return void t.preventDefault();
                        e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && t.preventDefault()
                    }
                }, {
                    passive: !1,
                    capture: !0
                }), b(document, "blur", e => {
                    let t = (0, r.getEventTarget)(e),
                        s = e.relatedTarget;
                    if (s && (0, h.willOpenKeyboard)(s)) s.focus({
                        preventScroll: !0
                    }), E(s, (0, h.willOpenKeyboard)(t));
                    else if (!s) {
                        let e = t.parentElement?.closest("[tabindex]");
                        e?.focus({
                            preventScroll: !0
                        })
                    }
                }, !0)), () => {
                    s(), a(), i.remove(), HTMLElement.prototype.focus = l
                }) : (u = window.innerWidth - document.documentElement.clientWidth, (0, c.chain)(u > 0 && ("scrollbarGutter" in document.documentElement.style ? y(document.documentElement, "scrollbarGutter", "stable") : y(document.documentElement, "paddingRight", `${u}px`)), y(document.documentElement, "overflow", "hidden")))), () => {
                    0 == --P && t()
                }
            }
        }, [s])
    }], 690910)
}, 419476, e => {
    "use strict";
    var t = e.i(776050),
        s = e.i(675815),
        n = e.i(768307),
        r = e.i(575414),
        i = e.i(600939),
        o = e.i(409781);

    function l(e, s) {
        if (e.button > 0) return !1;
        let n = (0, t.getEventTarget)(e);
        if (n) {
            let e = n.ownerDocument;
            if (!e || !(0, t.nodeContains)(e.documentElement, n) || n.closest("[data-react-aria-top-layer]")) return !1
        }
        return !!s.current && !e.composedPath().includes(s.current)
    }
    let a = [];
    e.s(["useOverlay", 0, function(e, u) {
        let {
            onClose: c,
            shouldCloseOnBlur: d,
            isOpen: g,
            isDismissable: p = !1,
            isKeyboardDismissDisabled: m = !1,
            shouldCloseOnInteractOutside: f
        } = e, h = (0, o.useRef)(void 0);
        (0, o.useEffect)(() => {
            if (g && !a.includes(u)) return a.push(u), () => {
                let e = a.indexOf(u);
                e >= 0 && a.splice(e, 1)
            }
        }, [g, u]);
        let v = () => {
            a[a.length - 1] === u && c && c()
        };
        ! function(e) {
            let {
                ref: t,
                onInteractOutside: s,
                isDisabled: n,
                onInteractOutsideStart: a
            } = e, u = (0, o.useRef)({
                isPointerDown: !1,
                ignoreEmulatedMouseEvents: !1
            }), c = (0, i.useEffectEvent)(e => {
                s && l(e, t) && (a && a(e), u.current.isPointerDown = !0)
            }), d = (0, i.useEffectEvent)(e => {
                s && s(e)
            });
            (0, o.useEffect)(() => {
                let e = u.current;
                if (n) return;
                let s = t.current,
                    i = (0, r.getOwnerDocument)(s);
                if ("u" > typeof PointerEvent) {
                    let s = s => {
                        e.isPointerDown && l(s, t) && d(s), e.isPointerDown = !1
                    };
                    return i.addEventListener("pointerdown", c, !0), i.addEventListener("click", s, !0), () => {
                        i.removeEventListener("pointerdown", c, !0), i.removeEventListener("click", s, !0)
                    }
                }
            }, [t, n])
        }({
            ref: u,
            onInteractOutside: p && g ? e => {
                (!f || f((0, t.getEventTarget)(e))) && (a[a.length - 1] === u && e.stopPropagation(), h.current === u && v()), h.current = void 0
            } : void 0,
            onInteractOutsideStart: e => {
                let s = a[a.length - 1];
                h.current = s, (!f || f((0, t.getEventTarget)(e))) && s === u && e.stopPropagation()
            }
        });
        let {
            focusWithinProps: P
        } = (0, n.useFocusWithin)({
            isDisabled: !d,
            onBlurWithin: e => {
                !(!e.relatedTarget || (0, s.isElementInChildOfActiveScope)(e.relatedTarget)) && (!f || f(e.relatedTarget)) && c?.()
            }
        });
        return {
            overlayProps: {
                onKeyDown: e => {
                    "Escape" !== e.key || m || e.nativeEvent.isComposing || (e.stopPropagation(), e.preventDefault(), v())
                },
                ...P
            },
            underlayProps: {}
        }
    }], 419476)
}, 468689, e => {
    "use strict";
    var t = e.i(101933),
        s = e.i(823512),
        n = e.i(409781);
    e.s(["useOverlayTrigger", 0, function(e, r, i) {
        let o, {
                type: l
            } = e,
            {
                isOpen: a
            } = r;
        (0, n.useEffect)(() => {
            i && i.current && t.onCloseMap.set(i.current, r.close)
        }), "menu" === l ? o = !0 : "listbox" === l && (o = "listbox");
        let u = (0, s.useId)();
        return {
            triggerProps: {
                "aria-haspopup": o,
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
        s = e.i(879537),
        n = e.i(429305),
        r = e.i(419476),
        i = e.i(690910),
        o = e.i(409781);
    e.s(["usePopover", 0, function(e, l) {
        let {
            triggerRef: a,
            popoverRef: u,
            groupRef: c,
            isNonModal: d,
            isKeyboardDismissDisabled: g,
            shouldCloseOnInteractOutside: p,
            ...m
        } = e, f = "SubmenuTrigger" === m.trigger, {
            overlayProps: h,
            underlayProps: v
        } = (0, r.useOverlay)({
            isOpen: l.isOpen,
            onClose: l.close,
            shouldCloseOnBlur: !0,
            isDismissable: !d || f,
            isKeyboardDismissDisabled: g,
            shouldCloseOnInteractOutside: p
        }, c ?? u), {
            overlayProps: P,
            arrowProps: y,
            placement: b,
            triggerAnchorPoint: E
        } = (0, s.useOverlayPosition)({
            ...m,
            targetRef: a,
            overlayRef: u,
            isOpen: l.isOpen,
            onClose: d && !f ? l.close : null
        });
        return (0, i.usePreventScroll)({
            isDisabled: d || !l.isOpen
        }), (0, o.useEffect)(() => {
            if (l.isOpen && u.current)
                if (d) return (0, t.keepVisible)(c?.current ?? u.current);
                else return (0, t.ariaHideOutside)([c?.current ?? u.current], {
                    shouldUseInert: !0
                })
        }, [d, l.isOpen, u, c]), {
            popoverProps: (0, n.mergeProps)(h, P),
            arrowProps: y,
            underlayProps: v,
            placement: b,
            triggerAnchorPoint: E
        }
    }])
}, 843485, 758759, e => {
    "use strict";

    function t(e, t) {
        if (!e) return !1;
        let s = window.getComputedStyle(e),
            n = document.scrollingElement || document.documentElement,
            r = /(auto|scroll)/.test(s.overflow + s.overflowX + s.overflowY);
        return e === n && "hidden" !== s.overflow && (r = !0), r && t && (r = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), r
    }
    e.s(["isScrollable", 0, t], 758759), e.s(["getScrollParent", 0, function(e, s) {
        let n = e;
        for (t(n, s) && (n = n.parentElement); n && !t(n, s);) n = n.parentElement;
        return n || document.scrollingElement || document.documentElement
    }], 843485)
}, 630877, e => {
    "use strict";
    var t = e.i(904960);
    let s = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
    e.s(["isCtrlKeyPressed", 0, function(e) {
        return (0, t.isMac)() ? e.metaKey : e.ctrlKey
    }, "willOpenKeyboard", 0, function(e) {
        return e instanceof HTMLInputElement && !s.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable
    }])
}, 458229, e => {
    "use strict";
    var t = e.i(429305),
        s = e.i(768307),
        n = e.i(409781);
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
            isFocusable: o
        } = e, [l, a] = (0, n.useState)(!1), {
            focusWithinProps: u
        } = (0, s.useFocusWithin)({
            isDisabled: !o,
            onFocusWithinChange: e => a(e)
        }), c = (0, n.useMemo)(() => l ? t : t ? {
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
            children: s,
            elementType: r = "div",
            isFocusable: o,
            style: l,
            ...a
        } = e, {
            visuallyHiddenProps: u
        } = i(e);
        return n.default.createElement(r, (0, t.mergeProps)(a, u), s)
    }, "useVisuallyHidden", 0, i])
}]);

//# debugId=7164d017-832a-a525-541c-53d9d5a60872