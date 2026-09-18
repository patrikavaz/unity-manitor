(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 501427, e => {
    "use strict";
    let t;
    var n = e.i(876728);
    let s = Symbol.for("react-aria.i18n.locale"),
        r = Symbol.for("react-aria.i18n.strings");
    class i {
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
                var s;
                if (t[e]) return t[e];
                let r = (s = e, Intl.Locale ? new Intl.Locale(s).language : s.split("-")[0]);
                if (t[r]) return t[r];
                for (let e in t)
                    if (e.startsWith(r + "-")) return t[e];
                return t[n]
            }(e, this.strings, this.defaultLocale), this.strings[e] = t), t
        }
        static getGlobalDictionaryForPackage(e) {
            if ("u" < typeof window) return null;
            let n = window[s];
            if (void 0 === t) {
                let e = window[r];
                if (!e) return null;
                for (let s in t = {}, e) t[s] = new i({
                    [n]: e[s]
                }, n)
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
            let n = this.strings.getStringForLocale(e, this.locale);
            return "function" == typeof n ? n(t, this) : n
        }
        plural(e, t, n = "cardinal") {
            let s = t["=" + e];
            if (s) return "function" == typeof s ? s() : s;
            let r = this.locale + ":" + n,
                i = o.get(r);
            return i || (i = new Intl.PluralRules(this.locale, {
                type: n
            }), o.set(r, i)), "function" == typeof(s = t[i.select(e)] || t.other) ? s() : s
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
        let s, {
                locale: r
            } = (0, n.useLocale)(),
            o = t && i.getGlobalDictionaryForPackage(t) || ((s = c.get(e)) || (s = new i(e), c.set(e, s)), s);
        return (0, u.useMemo)(() => new a(r, o), [r, o])
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
    var s = e.i(823512),
        r = e.i(501427),
        i = e.i(720728),
        o = e.i(468689);
    e.s(["useMenuTrigger", 0, function(e, l, a) {
        var u;
        let {
            type: c = "menu",
            isDisabled: d,
            trigger: g = "press"
        } = e, p = (0, s.useId)(), {
            triggerProps: f,
            overlayProps: m
        } = (0, o.useOverlayTrigger)({
            type: c
        }, l, a), h = (0, r.useLocalizedStringFormatter)((u = n) && u.__esModule ? u.default : u, "@react-aria/menu"), {
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
        return delete f.onPress, {
            menuTriggerProps: {
                ...f,
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
                ...m,
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
    var n = e.i(270170),
        s = e.i(501427),
        r = e.i(458229),
        i = e.i(409781);
    e.s(["DismissButton", 0, function(e) {
        var o;
        let {
            onDismiss: l,
            ...a
        } = e, u = (0, s.useLocalizedStringFormatter)((o = t) && o.__esModule ? o.default : o, "@react-aria/overlays"), c = (0, n.useLabels)(a, u.format("dismiss"));
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
        n = e.i(58824),
        s = e.i(838031),
        r = e.i(996980),
        i = e.i(409781);
    let o = i.default.forwardRef(({
        children: e,
        ...o
    }, l) => {
        let a = (0, i.useRef)(!1),
            u = (0, i.useContext)(n.PressResponderContext),
            c = (0, t.mergeProps)(u || {}, {
                ...o,
                register() {
                    a.current = !0, u && u.register()
                }
            });
        return c.ref = (0, s.useObjectRef)(l || u?.ref), (0, r.useSyncRef)(u, c.ref), (0, i.useEffect)(() => {
            a.current || (a.current = !0)
        }, []), i.default.createElement(n.PressResponderContext.Provider, {
            value: c
        }, e)
    });

    function l({
        children: e
    }) {
        let t = (0, i.useMemo)(() => ({
            register: () => {}
        }), []);
        return i.default.createElement(n.PressResponderContext.Provider, {
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
                portalContainer: n = t ? null : document.body,
                isExiting: s
            } = e,
            [r, o] = (0, i.useState)(!1),
            c = (0, i.useMemo)(() => ({
                contain: r,
                setContain: o
            }), [r, o]),
            {
                getContainer: f
            } = (0, d.useUNSAFE_PortalContext)();
        if (!e.portalContainer && f && (n = f()), !n) return null;
        let m = e.children;
        return e.disableFocusManagement || (m = i.default.createElement(a.FocusScope, {
            restoreFocus: !0,
            contain: (e.shouldContainFocus || r) && !s
        }, m)), m = i.default.createElement(p.Provider, {
            value: c
        }, i.default.createElement(l, null, m)), g.default.createPortal(m, n)
    }, "useOverlayFocusContain", 0, function() {
        let e = (0, i.useContext)(p),
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
}, 666747, 419476, 690910, e => {
    "use strict";
    let t;
    var n = e.i(193777),
        s = e.i(575414),
        r = e.i(776050),
        i = e.i(950011);
    let o = "u" > typeof HTMLElement && "inert" in HTMLElement.prototype;

    function l(e) {
        return "true" === e.dataset.liveAnnouncer || void 0 !== e.dataset.reactAriaTopLayer
    }
    let a = new WeakMap,
        u = [];
    e.s(["ariaHideOutside", 0, function(e, t) {
        let c = (0, s.getOwnerWindow)(e?.[0]),
            d = t instanceof c.Element ? {
                root: t
            } : t,
            g = d?.root ?? document.body,
            p = d?.shouldUseInert && o,
            f = new Set(e),
            m = new Set,
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
                for (let t of e.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]")) f.add(t);
                let t = e => {
                        if (m.has(e) || f.has(e) || e.parentElement && m.has(e.parentElement) && "row" !== e.parentElement.getAttribute("role")) return NodeFilter.FILTER_REJECT;
                        for (let t of f)
                            if ((0, r.nodeContains)(e, t)) return NodeFilter.FILTER_SKIP;
                        return NodeFilter.FILTER_ACCEPT
                    },
                    i = (0, n.createShadowTreeWalker)((0, s.getOwnerDocument)(e), e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: t
                    }),
                    o = t(e);
                if (o === NodeFilter.FILTER_ACCEPT && E(e), o !== NodeFilter.FILTER_REJECT) {
                    let e = i.nextNode();
                    for (; null != e;) E(e), e = i.nextNode()
                }
            },
            E = e => {
                let t = a.get(e) ?? 0;
                (p && e instanceof c.HTMLElement ? e.inert : "true" === e.getAttribute("aria-hidden")) && 0 === t || (0 === t && h(e, !0), m.add(e), a.set(e, t + 1))
            };
        u.length && u[u.length - 1].disconnect(), P(g);
        let b = new MutationObserver(e => {
            for (let t of e)
                if ("childList" === t.type) {
                    if (t.target.isConnected && ![...f, ...m].some(e => (0, r.nodeContains)(e, t.target)))
                        for (let e of t.addedNodes)(e instanceof HTMLElement || e instanceof SVGElement) && l(e) ? f.add(e) : e instanceof Element && P(e);
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
        let y = new Set;
        if ((0, i.shadowDOM)())
            for (let e of v) {
                let t = new MutationObserver(e => {
                    for (let t of e)
                        if ("childList" === t.type) {
                            if (t.target.isConnected && ![...f, ...m].some(e => (0, r.nodeContains)(e, t.target)))
                                for (let e of t.addedNodes)(e instanceof HTMLElement || e instanceof SVGElement) && l(e) ? f.add(e) : e instanceof Element && P(e);
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
                }), y.add(t)
            }
        let w = {
            visibleNodes: f,
            hiddenNodes: m,
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
                for (let e of y) e.disconnect();
            for (let e of m) {
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
    var c = e.i(675815),
        d = e.i(768307),
        g = e.i(600939),
        p = e.i(409781);

    function f(e, t) {
        if (e.button > 0) return !1;
        let n = (0, r.getEventTarget)(e);
        if (n) {
            let e = n.ownerDocument;
            if (!e || !(0, r.nodeContains)(e.documentElement, n) || n.closest("[data-react-aria-top-layer]")) return !1
        }
        return !!t.current && !e.composedPath().includes(t.current)
    }
    let m = [];
    e.s(["useOverlay", 0, function(e, t) {
        let {
            onClose: n,
            shouldCloseOnBlur: i,
            isOpen: o,
            isDismissable: l = !1,
            isKeyboardDismissDisabled: a = !1,
            shouldCloseOnInteractOutside: u
        } = e, h = (0, p.useRef)(void 0);
        (0, p.useEffect)(() => {
            if (o && !m.includes(t)) return m.push(t), () => {
                let e = m.indexOf(t);
                e >= 0 && m.splice(e, 1)
            }
        }, [o, t]);
        let v = () => {
            m[m.length - 1] === t && n && n()
        };
        ! function(e) {
            let {
                ref: t,
                onInteractOutside: n,
                isDisabled: r,
                onInteractOutsideStart: i
            } = e, o = (0, p.useRef)({
                isPointerDown: !1,
                ignoreEmulatedMouseEvents: !1
            }), l = (0, g.useEffectEvent)(e => {
                n && f(e, t) && (i && i(e), o.current.isPointerDown = !0)
            }), a = (0, g.useEffectEvent)(e => {
                n && n(e)
            });
            (0, p.useEffect)(() => {
                let e = o.current;
                if (r) return;
                let n = t.current,
                    i = (0, s.getOwnerDocument)(n);
                if ("u" > typeof PointerEvent) {
                    let n = n => {
                        e.isPointerDown && f(n, t) && a(n), e.isPointerDown = !1
                    };
                    return i.addEventListener("pointerdown", l, !0), i.addEventListener("click", n, !0), () => {
                        i.removeEventListener("pointerdown", l, !0), i.removeEventListener("click", n, !0)
                    }
                }
            }, [t, r])
        }({
            ref: t,
            onInteractOutside: l && o ? e => {
                (!u || u((0, r.getEventTarget)(e))) && (m[m.length - 1] === t && e.stopPropagation(), h.current === t && v()), h.current = void 0
            } : void 0,
            onInteractOutsideStart: e => {
                let n = m[m.length - 1];
                h.current = n, (!u || u((0, r.getEventTarget)(e))) && n === t && e.stopPropagation()
            }
        });
        let {
            focusWithinProps: P
        } = (0, d.useFocusWithin)({
            isDisabled: !i,
            onBlurWithin: e => {
                !(!e.relatedTarget || (0, c.isElementInChildOfActiveScope)(e.relatedTarget)) && (!u || u(e.relatedTarget)) && n?.()
            }
        });
        return {
            overlayProps: {
                onKeyDown: e => {
                    "Escape" !== e.key || a || e.nativeEvent.isComposing || (e.stopPropagation(), e.preventDefault(), v())
                },
                ...P
            },
            underlayProps: {}
        }
    }], 419476);
    var h = e.i(476090),
        v = e.i(938280),
        P = e.i(843485),
        E = e.i(904960),
        b = e.i(758759),
        y = e.i(185559),
        w = e.i(630877);
    let M = "u" > typeof document && window.visualViewport,
        S = 0;

    function L(e, t, n) {
        let s = e.style[t];
        return e.style[t] = n, () => {
            e.style[t] = s
        }
    }

    function O(e, t, n, s) {
        return e.addEventListener(t, n, s), () => {
            e.removeEventListener(t, n, s)
        }
    }

    function A(e, t) {
        t || !M ? C(e) : M.addEventListener("resize", () => C(e), {
            once: !0
        })
    }

    function C(e) {
        let t = document.scrollingElement || document.documentElement,
            n = e;
        for (; n && n !== t;) {
            let e = (0, P.getScrollParent)(n);
            if (e !== document.documentElement && e !== document.body && e !== n) {
                let t = e.getBoundingClientRect(),
                    s = n.getBoundingClientRect();
                if (s.top < t.top || s.bottom > t.top + n.clientHeight) {
                    let n = t.bottom;
                    M && (n = Math.min(n, M.offsetTop + M.height));
                    let r = s.top - t.top - ((n - t.top) / 2 - s.height / 2);
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
        (0, y.useLayoutEffect)(() => {
            if (!n) {
                let e, n, s, i, o, l, a, u;
                return 1 == ++S && (t = (0, E.isIOS)() ? (n = L(document.documentElement, "overflow", "hidden"), s = !1, i = document.createElement("style"), (o = (0, v.getNonce)()) && (i.nonce = o), i.textContent = `
@layer {
  * {
    overscroll-behavior: contain;
  }
}`.trim(), document.head.prepend(i), l = HTMLElement.prototype.focus, HTMLElement.prototype.focus = function(e) {
                    let t = (0, r.getActiveElement)(),
                        n = null != t && (0, w.willOpenKeyboard)(t);
                    l.call(this, {
                        ...e,
                        preventScroll: !0
                    }), e && e.preventScroll || A(this, n)
                }, a = (0, h.chain)(O(document, "touchstart", t => {
                    let n = (0, r.getEventTarget)(t);
                    e = (0, b.isScrollable)(n) ? n : (0, P.getScrollParent)(n, !0), s = !1;
                    let i = n.ownerDocument.defaultView.getSelection();
                    i && !i.isCollapsed && i.containsNode(n, !0) && (s = !0), t.composedPath().some(e => e instanceof HTMLInputElement && "range" === e.type) && (s = !0), "selectionStart" in n && "selectionEnd" in n && n.selectionStart < n.selectionEnd && n.ownerDocument.activeElement === n && (s = !0)
                }, {
                    passive: !1,
                    capture: !0
                }), O(document, "touchmove", t => {
                    if (2 !== t.touches.length && !s) {
                        if (!e || e === document.documentElement || e === document.body) return void t.preventDefault();
                        e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && t.preventDefault()
                    }
                }, {
                    passive: !1,
                    capture: !0
                }), O(document, "blur", e => {
                    let t = (0, r.getEventTarget)(e),
                        n = e.relatedTarget;
                    if (n && (0, w.willOpenKeyboard)(n)) n.focus({
                        preventScroll: !0
                    }), A(n, (0, w.willOpenKeyboard)(t));
                    else if (!n) {
                        let e = t.parentElement?.closest("[tabindex]");
                        e?.focus({
                            preventScroll: !0
                        })
                    }
                }, !0)), () => {
                    n(), a(), i.remove(), HTMLElement.prototype.focus = l
                }) : (u = window.innerWidth - document.documentElement.clientWidth, (0, h.chain)(u > 0 && ("scrollbarGutter" in document.documentElement.style ? L(document.documentElement, "scrollbarGutter", "stable") : L(document.documentElement, "paddingRight", `${u}px`)), L(document.documentElement, "overflow", "hidden")))), () => {
                    0 == --S && t()
                }
            }
        }, [n])
    }], 690910)
}, 101933, e => {
    "use strict";
    var t = e.i(776050),
        n = e.i(409781);
    let s = new WeakMap;
    e.s(["onCloseMap", 0, s, "useCloseOnScroll", 0, function(e) {
        let {
            triggerRef: r,
            isOpen: i,
            onClose: o
        } = e;
        (0, n.useEffect)(() => {
            if (!i || null === o) return;
            let e = e => {
                let n = (0, t.getEventTarget)(e);
                if (!r.current || n instanceof Node && !(0, t.nodeContains)(n, r.current) || n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement) return;
                let i = o || s.get(r.current);
                i && i()
            };
            return window.addEventListener("scroll", e, !0), () => {
                window.removeEventListener("scroll", e, !0)
            }
        }, [i, o, r])
    }])
}, 468689, e => {
    "use strict";
    var t = e.i(101933),
        n = e.i(823512),
        s = e.i(409781);
    e.s(["useOverlayTrigger", 0, function(e, r, i) {
        let o, {
                type: l
            } = e,
            {
                isOpen: a
            } = r;
        (0, s.useEffect)(() => {
            i && i.current && t.onCloseMap.set(i.current, r.close)
        }), "menu" === l ? o = !0 : "listbox" === l && (o = "listbox");
        let u = (0, n.useId)();
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
        n = e.i(879537),
        s = e.i(429305),
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
            ...f
        } = e, m = "SubmenuTrigger" === f.trigger, {
            overlayProps: h,
            underlayProps: v
        } = (0, r.useOverlay)({
            isOpen: l.isOpen,
            onClose: l.close,
            shouldCloseOnBlur: !0,
            isDismissable: !d || m,
            isKeyboardDismissDisabled: g,
            shouldCloseOnInteractOutside: p
        }, c ?? u), {
            overlayProps: P,
            arrowProps: E,
            placement: b,
            triggerAnchorPoint: y
        } = (0, n.useOverlayPosition)({
            ...f,
            targetRef: a,
            overlayRef: u,
            isOpen: l.isOpen,
            onClose: d && !m ? l.close : null
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
            popoverProps: (0, s.mergeProps)(h, P),
            arrowProps: E,
            underlayProps: v,
            placement: b,
            triggerAnchorPoint: y
        }
    }])
}, 843485, 758759, e => {
    "use strict";

    function t(e, t) {
        if (!e) return !1;
        let n = window.getComputedStyle(e),
            s = document.scrollingElement || document.documentElement,
            r = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
        return e === s && "hidden" !== n.overflow && (r = !0), r && t && (r = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), r
    }
    e.s(["isScrollable", 0, t], 758759), e.s(["getScrollParent", 0, function(e, n) {
        let s = e;
        for (t(s, n) && (s = s.parentElement); s && !t(s, n);) s = s.parentElement;
        return s || document.scrollingElement || document.documentElement
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
}, 458229, e => {
    "use strict";
    var t = e.i(429305),
        n = e.i(768307),
        s = e.i(409781);
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
        } = e, [l, a] = (0, s.useState)(!1), {
            focusWithinProps: u
        } = (0, n.useFocusWithin)({
            isDisabled: !o,
            onFocusWithinChange: e => a(e)
        }), c = (0, s.useMemo)(() => l ? t : t ? {
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
            isFocusable: o,
            style: l,
            ...a
        } = e, {
            visuallyHiddenProps: u
        } = i(e);
        return s.default.createElement(r, (0, t.mergeProps)(a, u), n)
    }, "useVisuallyHidden", 0, i])
}, 512985, e => {
    "use strict";
    var t = e.i(803258),
        n = e.i(409781);
    e.s(["useOverlayTriggerState", 0, function(e) {
        let [s, r] = (0, t.useControlledState)(e.isOpen, e.defaultOpen || !1, e.onOpenChange), i = (0, n.useCallback)(() => {
            r(!0)
        }, [r]), o = (0, n.useCallback)(() => {
            r(!1)
        }, [r]), l = (0, n.useCallback)(() => {
            r(!s)
        }, [r, s]);
        return {
            isOpen: s,
            setOpen: r,
            open: i,
            close: o,
            toggle: l
        }
    }])
}, 747624, e => {
    "use strict";
    var t = e.i(785328),
        n = e.i(409781),
        s = e.i(722978),
        r = e.i(838031);
    let i = (0, n.forwardRef)(function({
        children: e,
        className: n = ""
    }, i) {
        let o = (0, r.useObjectRef)(i),
            l = (0, s.default)("text", n);
        return (0, t.jsx)("div", {
            ref: o,
            className: l,
            children: e
        })
    });
    e.s(["default", 0, i])
}]);