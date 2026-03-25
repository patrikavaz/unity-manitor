(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 614010, e => {
    "use strict";
    let t = new WeakMap,
        r = [];

    function n(e, o = document.body) {
        let i = new Set(e),
            l = new Set,
            s = e => {
                for (let t of e.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]")) i.add(t);
                let t = e => {
                        if (i.has(e) || e.parentElement && l.has(e.parentElement) && "row" !== e.parentElement.getAttribute("role")) return NodeFilter.FILTER_REJECT;
                        for (let t of i)
                            if (e.contains(t)) return NodeFilter.FILTER_SKIP;
                        return NodeFilter.FILTER_ACCEPT
                    },
                    r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: t
                    }),
                    n = t(e);
                if (n === NodeFilter.FILTER_ACCEPT && u(e), n !== NodeFilter.FILTER_REJECT) {
                    let e = r.nextNode();
                    for (; null != e;) u(e), e = r.nextNode()
                }
            },
            u = e => {
                var r;
                let n = null != (r = t.get(e)) ? r : 0;
                ("true" !== e.getAttribute("aria-hidden") || 0 !== n) && (0 === n && e.setAttribute("aria-hidden", "true"), l.add(e), t.set(e, n + 1))
            };
        r.length && r[r.length - 1].disconnect(), s(o);
        let a = new MutationObserver(e => {
            for (let t of e)
                if ("childList" === t.type && 0 !== t.addedNodes.length && ![...i, ...l].some(e => e.contains(t.target))) {
                    for (let e of t.removedNodes) e instanceof Element && (i.delete(e), l.delete(e));
                    for (let e of t.addedNodes)(e instanceof HTMLElement || e instanceof SVGElement) && ("true" === e.dataset.liveAnnouncer || "true" === e.dataset.reactAriaTopLayer) ? i.add(e) : e instanceof Element && s(e)
                }
        });
        a.observe(o, {
            childList: !0,
            subtree: !0
        });
        let c = {
            visibleNodes: i,
            hiddenNodes: l,
            observe() {
                a.observe(o, {
                    childList: !0,
                    subtree: !0
                })
            },
            disconnect() {
                a.disconnect()
            }
        };
        return r.push(c), () => {
            for (let e of (a.disconnect(), l)) {
                let r = t.get(e);
                null != r && (1 === r ? (e.removeAttribute("aria-hidden"), t.delete(e)) : t.set(e, r - 1))
            }
            c === r[r.length - 1] ? (r.pop(), r.length && r[r.length - 1].observe()) : r.splice(r.indexOf(c), 1)
        }
    }

    function o(e) {
        let t = r[r.length - 1];
        if (t && !t.visibleNodes.has(e)) return t.visibleNodes.add(e), () => {
            t.visibleNodes.delete(e)
        }
    }
    e.s(["ariaHideOutside", () => n, "keepVisible", () => o])
}, 213632, e => {
    "use strict";
    var t = e.i(107579);
    let r = new WeakMap;

    function n(e) {
        let {
            triggerRef: n,
            isOpen: o,
            onClose: i
        } = e;
        (0, t.useEffect)(() => {
            if (!o || null === i) return;
            let e = e => {
                let t = e.target;
                if (!n.current || t instanceof Node && !t.contains(n.current) || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
                let o = i || r.get(n.current);
                o && o()
            };
            return window.addEventListener("scroll", e, !0), () => {
                window.removeEventListener("scroll", e, !0)
            }
        }, [o, i, n])
    }
    e.s(["onCloseMap", () => r, "useCloseOnScroll", () => n])
}, 179037, 148597, e => {
    "use strict";
    let t;
    var r = e.i(694421),
        n = e.i(107579);
    e.i(252495);
    var o = e.i(249527),
        i = e.i(486524);

    function l(e, t) {
        if (e.button > 0) return !1;
        if (e.target) {
            let t = e.target.ownerDocument;
            if (!t || !t.documentElement.contains(e.target) || e.target.closest("[data-react-aria-top-layer]")) return !1
        }
        return !!t.current && !e.composedPath().includes(t.current)
    }
    var s = e.i(722320);
    let u = [];

    function a(e, t) {
        let {
            onClose: a,
            shouldCloseOnBlur: c,
            isOpen: d,
            isDismissable: f = !1,
            isKeyboardDismissDisabled: h = !1,
            shouldCloseOnInteractOutside: p
        } = e;
        (0, n.useEffect)(() => {
            if (d && !u.includes(t)) return u.push(t), () => {
                let e = u.indexOf(t);
                e >= 0 && u.splice(e, 1)
            }
        }, [d, t]);
        let v = () => {
            u[u.length - 1] === t && a && a()
        };
        ! function(e) {
            let {
                ref: t,
                onInteractOutside: r,
                isDisabled: s,
                onInteractOutsideStart: u
            } = e, a = (0, n.useRef)({
                isPointerDown: !1,
                ignoreEmulatedMouseEvents: !1
            }), c = (0, o.useEffectEvent)(e => {
                r && l(e, t) && (u && u(e), a.current.isPointerDown = !0)
            }), d = (0, o.useEffectEvent)(e => {
                r && r(e)
            });
            (0, n.useEffect)(() => {
                let e = a.current;
                if (s) return;
                let r = t.current,
                    n = (0, i.getOwnerDocument)(r);
                if ("u" > typeof PointerEvent) {
                    let r = r => {
                        e.isPointerDown && l(r, t) && d(r), e.isPointerDown = !1
                    };
                    return n.addEventListener("pointerdown", c, !0), n.addEventListener("click", r, !0), () => {
                        n.removeEventListener("pointerdown", c, !0), n.removeEventListener("click", r, !0)
                    }
                }
            }, [t, s, c, d])
        }({
            ref: t,
            onInteractOutside: f && d ? e => {
                (!p || p(e.target)) && (u[u.length - 1] === t && (e.stopPropagation(), e.preventDefault()), v())
            } : void 0,
            onInteractOutsideStart: e => {
                (!p || p(e.target)) && u[u.length - 1] === t && (e.stopPropagation(), e.preventDefault())
            }
        });
        let {
            focusWithinProps: m
        } = (0, s.useFocusWithin)({
            isDisabled: !c,
            onBlurWithin: e => {
                !(!e.relatedTarget || (0, r.isElementInChildOfActiveScope)(e.relatedTarget)) && (!p || p(e.relatedTarget)) && (null == a || a())
            }
        });
        return {
            overlayProps: {
                onKeyDown: e => {
                    "Escape" !== e.key || h || e.nativeEvent.isComposing || (e.stopPropagation(), e.preventDefault(), v())
                },
                ...m
            },
            underlayProps: {
                onPointerDown: e => {
                    e.target === e.currentTarget && e.preventDefault()
                }
            }
        }
    }
    e.s(["useOverlay", () => a], 179037);
    var c = e.i(96871),
        d = e.i(684310),
        f = e.i(509716),
        h = e.i(761195);
    let p = "u" > typeof document && window.visualViewport,
        v = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]),
        m = 0;

    function g(e = {}) {
        let {
            isDisabled: r
        } = e;
        (0, c.useLayoutEffect)(() => {
            if (!r) {
                let e, r, n, o, i;
                return 1 == ++m && (t = (0, d.isIOS)() ? (n = null, o = (0, f.chain)(N(document, "touchstart", t => {
                    ((e = (0, h.getScrollParent)(t.target, !0)) !== document.documentElement || e !== document.body) && e instanceof HTMLElement && "auto" === window.getComputedStyle(e).overscrollBehavior && (r = E(e, "overscrollBehavior", "contain"))
                }, {
                    passive: !1,
                    capture: !0
                }), N(document, "touchmove", t => {
                    e && e !== document.documentElement && e !== document.body ? e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && t.preventDefault() : t.preventDefault()
                }, {
                    passive: !1,
                    capture: !0
                }), N(document, "touchend", () => {
                    r && r()
                }, {
                    passive: !1,
                    capture: !0
                }), N(document, "focus", e => {
                    var t;
                    let r = e.target;
                    ((t = r) instanceof HTMLInputElement && !v.has(t.type) || t instanceof HTMLTextAreaElement || t instanceof HTMLElement && t.isContentEditable) && ((() => {
                        if (n) return;
                        let e = window.pageXOffset,
                            t = window.pageYOffset;
                        n = (0, f.chain)(N(window, "scroll", () => {
                            window.scrollTo(0, 0)
                        }), E(document.documentElement, "paddingRight", `${window.innerWidth-document.documentElement.clientWidth}px`), E(document.documentElement, "overflow", "hidden"), E(document.body, "marginTop", `-${t}px`), () => {
                            window.scrollTo(e, t)
                        }), window.scrollTo(0, 0)
                    })(), r.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
                        r.style.transform = "", p && (p.height < window.innerHeight ? requestAnimationFrame(() => {
                            w(r)
                        }) : p.addEventListener("resize", () => w(r), {
                            once: !0
                        }))
                    }))
                }, !0)), () => {
                    null == r || r(), null == n || n(), o()
                }) : (i = window.innerWidth - document.documentElement.clientWidth, (0, f.chain)(i > 0 && ("scrollbarGutter" in document.documentElement.style ? E(document.documentElement, "scrollbarGutter", "stable") : E(document.documentElement, "paddingRight", `${i}px`)), E(document.documentElement, "overflow", "hidden")))), () => {
                    0 == --m && t()
                }
            }
        }, [r])
    }

    function E(e, t, r) {
        let n = e.style[t];
        return e.style[t] = r, () => {
            e.style[t] = n
        }
    }

    function N(e, t, r, n) {
        return e.addEventListener(t, r, n), () => {
            e.removeEventListener(t, r, n)
        }
    }

    function w(e) {
        let t = document.scrollingElement || document.documentElement,
            r = e;
        for (; r && r !== t;) {
            let e = (0, h.getScrollParent)(r);
            if (e !== document.documentElement && e !== document.body && e !== r) {
                let t = e.getBoundingClientRect().top,
                    n = r.getBoundingClientRect().top;
                n > t + r.clientHeight && (e.scrollTop += n - t)
            }
            r = e.parentElement
        }
    }
    e.s(["usePreventScroll", () => g], 148597)
}, 790351, e => {
    "use strict";
    var t = e.i(107579);
    let r = (0, t.createContext)({});

    function n() {
        var e;
        return null != (e = (0, t.useContext)(r)) ? e : {}
    }
    e.s(["useUNSAFE_PortalContext", () => n])
}, 219641, e => {
    "use strict";
    var t = e.i(740474),
        r = e.i(629779),
        n = e.i(336480),
        o = e.i(125704),
        i = e.i(107579);
    let l = i.default.forwardRef(({
        children: e,
        ...l
    }, s) => {
        let u = (0, i.useRef)(!1),
            a = (0, i.useContext)(t.PressResponderContext);
        s = (0, r.useObjectRef)(s || (null == a ? void 0 : a.ref));
        let c = (0, n.mergeProps)(a || {}, {
            ...l,
            ref: s,
            register() {
                u.current = !0, a && a.register()
            }
        });
        return (0, o.useSyncRef)(a, s), (0, i.useEffect)(() => {
            u.current || (u.current = !0)
        }, []), i.default.createElement(t.PressResponderContext.Provider, {
            value: c
        }, e)
    });

    function s({
        children: e
    }) {
        let r = (0, i.useMemo)(() => ({
            register: () => {}
        }), []);
        return i.default.createElement(t.PressResponderContext.Provider, {
            value: r
        }, e)
    }
    e.s(["ClearPressResponder", () => s, "PressResponder", () => l])
}, 365666, e => {
    "use strict";
    var t = e.i(790351),
        r = e.i(219641),
        n = e.i(694421),
        o = e.i(107579),
        i = e.i(206276),
        l = e.i(938191),
        s = e.i(96871);
    let u = o.default.createContext(null);

    function a(e) {
        let s = (0, l.useIsSSR)(),
            {
                portalContainer: a = s ? null : document.body,
                isExiting: c
            } = e,
            [d, f] = (0, o.useState)(!1),
            h = (0, o.useMemo)(() => ({
                contain: d,
                setContain: f
            }), [d, f]),
            {
                getContainer: p
            } = (0, t.useUNSAFE_PortalContext)();
        if (!e.portalContainer && p && (a = p()), !a) return null;
        let v = e.children;
        return e.disableFocusManagement || (v = o.default.createElement(n.FocusScope, {
            restoreFocus: !0,
            contain: (e.shouldContainFocus || d) && !c
        }, v)), v = o.default.createElement(u.Provider, {
            value: h
        }, o.default.createElement(r.ClearPressResponder, null, v)), i.default.createPortal(v, a)
    }

    function c() {
        let e = (0, o.useContext)(u),
            t = null == e ? void 0 : e.setContain;
        (0, s.useLayoutEffect)(() => {
            null == t || t(!0)
        }, [t])
    }
    e.s(["Overlay", () => a, "useOverlayFocusContain", () => c])
}, 502514, e => {
    "use strict";
    var t = e.i(213632),
        r = e.i(107579),
        n = e.i(393632);

    function o(e, o, i) {
        let l, {
                type: s
            } = e,
            {
                isOpen: u
            } = o;
        (0, r.useEffect)(() => {
            i && i.current && t.onCloseMap.set(i.current, o.close)
        }), "menu" === s ? l = !0 : "listbox" === s && (l = "listbox");
        let a = (0, n.useId)();
        return {
            triggerProps: {
                "aria-haspopup": l,
                "aria-expanded": u,
                "aria-controls": u ? a : void 0,
                onPress: o.toggle
            },
            overlayProps: {
                id: a
            }
        }
    }
    e.s(["useOverlayTrigger", () => o])
}, 805518, e => {
    "use strict";
    var t = e.i(853712),
        r = e.i(107579),
        n = e.i(722978),
        o = e.i(629779);
    let i = (0, r.forwardRef)(function({
        children: e,
        className: r = ""
    }, i) {
        let l = (0, o.useObjectRef)(i),
            s = (0, n.default)("text", r);
        return (0, t.jsx)("div", {
            ref: l,
            className: s,
            children: e
        })
    });
    e.s(["default", 0, i], 805518)
}, 846823, e => {
    "use strict";
    let t;
    var r = e.i(416412);
    let n = Symbol.for("react-aria.i18n.locale"),
        o = Symbol.for("react-aria.i18n.strings");
    class i {
        getStringForLocale(e, t) {
            let r = this.getStringsForLocale(t)[e];
            if (!r) throw Error(`Could not find intl message ${e} in ${t} locale`);
            return r
        }
        getStringsForLocale(e) {
            let t = this.strings[e];
            return t || (t = function(e, t, r = "en-US") {
                var n;
                if (t[e]) return t[e];
                let o = (n = e, Intl.Locale ? new Intl.Locale(n).language : n.split("-")[0]);
                if (t[o]) return t[o];
                for (let e in t)
                    if (e.startsWith(o + "-")) return t[e];
                return t[r]
            }(e, this.strings, this.defaultLocale), this.strings[e] = t), t
        }
        static getGlobalDictionaryForPackage(e) {
            if ("u" < typeof window) return null;
            let r = window[n];
            if (void 0 === t) {
                let e = window[o];
                if (!e) return null;
                for (let n in t = {}, e) t[n] = new i({
                    [r]: e[n]
                }, r)
            }
            let l = null == t ? void 0 : t[e];
            if (!l) throw Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
            return l
        }
        constructor(e, t = "en-US") {
            this.strings = Object.fromEntries(Object.entries(e).filter(([, e]) => e)), this.defaultLocale = t
        }
    }
    let l = new Map,
        s = new Map;
    class u {
        format(e, t) {
            let r = this.strings.getStringForLocale(e, this.locale);
            return "function" == typeof r ? r(t, this) : r
        }
        plural(e, t, r = "cardinal") {
            let n = t["=" + e];
            if (n) return "function" == typeof n ? n() : n;
            let o = this.locale + ":" + r,
                i = l.get(o);
            return i || (i = new Intl.PluralRules(this.locale, {
                type: r
            }), l.set(o, i)), "function" == typeof(n = t[i.select(e)] || t.other) ? n() : n
        }
        number(e) {
            let t = s.get(this.locale);
            return t || (t = new Intl.NumberFormat(this.locale), s.set(this.locale, t)), t.format(e)
        }
        select(e, t) {
            let r = e[t] || e.other;
            return "function" == typeof r ? r() : r
        }
        constructor(e, t) {
            this.locale = e, this.strings = t
        }
    }
    var a = e.i(107579);
    let c = new WeakMap;

    function d(e, t) {
        let n, {
                locale: o
            } = (0, r.useLocale)(),
            l = t && i.getGlobalDictionaryForPackage(t) || ((n = c.get(e)) || (n = new i(e), c.set(e, n)), n);
        return (0, a.useMemo)(() => new u(o, l), [o, l])
    }
    e.s(["useLocalizedStringFormatter", () => d], 846823)
}, 416412, e => {
    "use strict";
    let t = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        r = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);
    var n = e.i(107579),
        o = e.i(938191);
    let i = Symbol.for("react-aria.i18n.locale");

    function l() {
        let e = "u" > typeof window && window[i] || "u" > typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
            Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
            e = "en-US"
        }
        return {
            locale: e,
            direction: ! function(e) {
                if (Intl.Locale) {
                    let r = new Intl.Locale(e).maximize(),
                        n = "function" == typeof r.getTextInfo ? r.getTextInfo() : r.textInfo;
                    if (n) return "rtl" === n.direction;
                    if (r.script) return t.has(r.script)
                }
                let n = e.split("-")[0];
                return r.has(n)
            }(e) ? "ltr" : "rtl"
        }
    }
    let s = l(),
        u = new Set;

    function a() {
        for (let e of (s = l(), u)) e(s)
    }
    let c = n.default.createContext(null);

    function d() {
        let e = function() {
            let e = (0, o.useIsSSR)(),
                [t, r] = (0, n.useState)(s);
            return ((0, n.useEffect)(() => (0 === u.size && window.addEventListener("languagechange", a), u.add(r), () => {
                u.delete(r), 0 === u.size && window.removeEventListener("languagechange", a)
            }), []), e) ? {
                locale: "en-US",
                direction: "ltr"
            } : t
        }();
        return (0, n.useContext)(c) || e
    }
    e.s(["useLocale", () => d], 416412)
}, 694421, e => {
    "use strict";
    var t = e.i(486524),
        r = e.i(96871),
        n = e.i(251032),
        o = e.i(684310),
        i = e.i(479261),
        l = e.i(39908);
    class s {
        get currentNode() {
            return this._currentNode
        }
        set currentNode(e) {
            if (!(0, n.nodeContains)(this.root, e)) throw Error("Cannot set currentNode to a node that is not contained by the root node.");
            let t = [],
                r = e,
                o = e;
            for (this._currentNode = e; r && r !== this.root;)
                if (r.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                    let e = r,
                        n = this._doc.createTreeWalker(e, this.whatToShow, {
                            acceptNode: this._acceptNode
                        });
                    t.push(n), n.currentNode = o, this._currentSetFor.add(n), r = o = e.host
                } else r = r.parentNode;
            let i = this._doc.createTreeWalker(this.root, this.whatToShow, {
                acceptNode: this._acceptNode
            });
            t.push(i), i.currentNode = o, this._currentSetFor.add(i), this._walkerStack = t
        }
        get doc() {
            return this._doc
        }
        firstChild() {
            let e = this.currentNode,
                t = this.nextNode();
            return (0, n.nodeContains)(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null)
        }
        lastChild() {
            let e = this._walkerStack[0].lastChild();
            return e && (this.currentNode = e), e
        }
        nextNode() {
            let e = this._walkerStack[0].nextNode();
            if (e) {
                if (e.shadowRoot) {
                    var t;
                    let r;
                    if ("function" == typeof this.filter ? r = this.filter(e) : (null == (t = this.filter) ? void 0 : t.acceptNode) && (r = this.filter.acceptNode(e)), r === NodeFilter.FILTER_ACCEPT) return this.currentNode = e, e;
                    let n = this.nextNode();
                    return n && (this.currentNode = n), n
                }
                return e && (this.currentNode = e), e
            }
            if (!(this._walkerStack.length > 1)) return null;
            {
                this._walkerStack.shift();
                let e = this.nextNode();
                return e && (this.currentNode = e), e
            }
        }
        previousNode() {
            let e = this._walkerStack[0];
            if (e.currentNode === e.root) {
                if (this._currentSetFor.has(e) && (this._currentSetFor.delete(e), this._walkerStack.length > 1)) {
                    this._walkerStack.shift();
                    let e = this.previousNode();
                    return e && (this.currentNode = e), e
                }
                return null
            }
            let t = e.previousNode();
            if (t) {
                if (t.shadowRoot) {
                    var r;
                    let e;
                    if ("function" == typeof this.filter ? e = this.filter(t) : (null == (r = this.filter) ? void 0 : r.acceptNode) && (e = this.filter.acceptNode(t)), e === NodeFilter.FILTER_ACCEPT) return t && (this.currentNode = t), t;
                    let n = this.lastChild();
                    return n && (this.currentNode = n), n
                }
                return t && (this.currentNode = t), t
            }
            if (!(this._walkerStack.length > 1)) return null;
            {
                this._walkerStack.shift();
                let e = this.previousNode();
                return e && (this.currentNode = e), e
            }
        }
        nextSibling() {
            return null
        }
        previousSibling() {
            return null
        }
        parentNode() {
            return null
        }
        constructor(e, t, r, n) {
            this._walkerStack = [], this._currentSetFor = new Set, this._acceptNode = e => {
                if (e.nodeType === Node.ELEMENT_NODE) {
                    var t;
                    let r = e.shadowRoot;
                    if (r) {
                        let e = this._doc.createTreeWalker(r, this.whatToShow, {
                            acceptNode: this._acceptNode
                        });
                        return this._walkerStack.unshift(e), NodeFilter.FILTER_ACCEPT
                    }
                    if ("function" == typeof this.filter) return this.filter(e);
                    if (null == (t = this.filter) ? void 0 : t.acceptNode) return this.filter.acceptNode(e);
                    if (null === this.filter) return NodeFilter.FILTER_ACCEPT
                }
                return NodeFilter.FILTER_SKIP
            }, this._doc = e, this.root = t, this.filter = null != n ? n : null, this.whatToShow = null != r ? r : NodeFilter.SHOW_ALL, this._currentNode = t, this._walkerStack.unshift(e.createTreeWalker(t, r, this._acceptNode));
            const o = t.shadowRoot;
            if (o) {
                const e = this._doc.createTreeWalker(o, this.whatToShow, {
                    acceptNode: this._acceptNode
                });
                this._walkerStack.unshift(e)
            }
        }
    }
    var u = e.i(582759),
        a = e.i(210089),
        c = e.i(107579);
    let d = c.default.createContext(null),
        f = "react-aria-focus-scope-restore",
        h = null;

    function p(e) {
        var i, l, s, a, p, N, C, x, _, P;
        let O, A, M, D, {
                children: I,
                contain: W,
                restoreFocus: H,
                autoFocus: K
            } = e,
            z = (0, c.useRef)(null),
            U = (0, c.useRef)(null),
            B = (0, c.useRef)([]),
            {
                parentNode: q
            } = (0, c.useContext)(d) || {},
            G = (0, c.useMemo)(() => new F({
                scopeRef: B
            }), [B]);
        (0, r.useLayoutEffect)(() => {
            let e = q || k.root;
            if (k.getTreeNode(e.scopeRef) && h && !w(h, e.scopeRef)) {
                let t = k.getTreeNode(h);
                t && (e = t)
            }
            e.addChild(G), k.addNode(G)
        }, [G, q]), (0, r.useLayoutEffect)(() => {
            let e = k.getTreeNode(B);
            e && (e.contain = !!W)
        }, [W]), (0, r.useLayoutEffect)(() => {
            var e;
            let t = null == (e = z.current) ? void 0 : e.nextSibling,
                r = [],
                n = e => e.stopPropagation();
            for (; t && t !== U.current;) r.push(t), t.addEventListener(f, n), t = t.nextSibling;
            return B.current = r, () => {
                for (let e of r) e.removeEventListener(f, n)
            }
        }, [I]), i = B, l = H, s = W, (0, r.useLayoutEffect)(() => {
            if (l || s) return;
            let e = i.current,
                r = (0, t.getOwnerDocument)(e ? e[0] : void 0),
                o = e => {
                    let t = (0, n.getEventTarget)(e);
                    g(t, i.current) ? h = i : E(t) || (h = null)
                };
            return r.addEventListener("focusin", o, !1), null == e || e.forEach(e => e.addEventListener("focusin", o, !1)), () => {
                r.removeEventListener("focusin", o, !1), null == e || e.forEach(e => e.removeEventListener("focusin", o, !1))
            }
        }, [i, l, s]), a = B, p = W, O = (0, c.useRef)(void 0), A = (0, c.useRef)(void 0), (0, r.useLayoutEffect)(() => {
            let e = a.current;
            if (!p) {
                A.current && (cancelAnimationFrame(A.current), A.current = void 0);
                return
            }
            let r = (0, t.getOwnerDocument)(e ? e[0] : void 0),
                i = e => {
                    if ("Tab" !== e.key || e.altKey || e.ctrlKey || e.metaKey || !m(a) || e.isComposing) return;
                    let t = (0, n.getActiveElement)(r),
                        o = a.current;
                    if (!o || !g(t, o)) return;
                    let i = L(v(o), {
                        tabbable: !0
                    }, o);
                    if (!t) return;
                    i.currentNode = t;
                    let l = e.shiftKey ? i.previousNode() : i.nextNode();
                    l || (i.currentNode = e.shiftKey ? o[o.length - 1].nextElementSibling : o[0].previousElementSibling, l = e.shiftKey ? i.previousNode() : i.nextNode()), e.preventDefault(), l && b(l, !0)
                },
                l = e => {
                    (!h || w(h, a)) && g((0, n.getEventTarget)(e), a.current) ? (h = a, O.current = (0, n.getEventTarget)(e)) : m(a) && !E((0, n.getEventTarget)(e), a) ? O.current ? O.current.focus() : h && h.current && y(h.current) : m(a) && (O.current = (0, n.getEventTarget)(e))
                },
                s = e => {
                    A.current && cancelAnimationFrame(A.current), A.current = requestAnimationFrame(() => {
                        let t = (0, u.getInteractionModality)(),
                            i = ("virtual" === t || null === t) && (0, o.isAndroid)() && (0, o.isChrome)(),
                            l = (0, n.getActiveElement)(r);
                        if (!i && l && m(a) && !E(l, a)) {
                            h = a;
                            let t = (0, n.getEventTarget)(e);
                            if (t && t.isConnected) {
                                var s;
                                O.current = t, null == (s = O.current) || s.focus()
                            } else h.current && y(h.current)
                        }
                    })
                };
            return r.addEventListener("keydown", i, !1), r.addEventListener("focusin", l, !1), null == e || e.forEach(e => e.addEventListener("focusin", l, !1)), null == e || e.forEach(e => e.addEventListener("focusout", s, !1)), () => {
                r.removeEventListener("keydown", i, !1), r.removeEventListener("focusin", l, !1), null == e || e.forEach(e => e.removeEventListener("focusin", l, !1)), null == e || e.forEach(e => e.removeEventListener("focusout", s, !1))
            }
        }, [a, p]), (0, r.useLayoutEffect)(() => () => {
            A.current && cancelAnimationFrame(A.current)
        }, [A]), N = B, C = H, x = W, M = (0, c.useRef)("u" > typeof document ? (0, n.getActiveElement)((0, t.getOwnerDocument)(N.current ? N.current[0] : void 0)) : null), (0, r.useLayoutEffect)(() => {
            let e = N.current,
                r = (0, t.getOwnerDocument)(e ? e[0] : void 0);
            if (!C || x) return;
            let o = () => {
                (!h || w(h, N)) && g((0, n.getActiveElement)(r), N.current) && (h = N)
            };
            return r.addEventListener("focusin", o, !1), null == e || e.forEach(e => e.addEventListener("focusin", o, !1)), () => {
                r.removeEventListener("focusin", o, !1), null == e || e.forEach(e => e.removeEventListener("focusin", o, !1))
            }
        }, [N, x]), (0, r.useLayoutEffect)(() => {
            let e = (0, t.getOwnerDocument)(N.current ? N.current[0] : void 0);
            if (!C) return;
            let r = t => {
                if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !m(N) || t.isComposing) return;
                let r = e.activeElement;
                if (!E(r, N) || !S(N)) return;
                let n = k.getTreeNode(N);
                if (!n) return;
                let o = n.nodeToRestore,
                    i = L(e.body, {
                        tabbable: !0
                    });
                i.currentNode = r;
                let l = t.shiftKey ? i.previousNode() : i.nextNode();
                if (o && o.isConnected && o !== e.body || (o = void 0, n.nodeToRestore = void 0), (!l || !E(l, N)) && o) {
                    i.currentNode = o;
                    do l = t.shiftKey ? i.previousNode() : i.nextNode(); while (E(l, N))(t.preventDefault(), t.stopPropagation(), l) ? b(l, !0): E(o) ? b(o, !0) : r.blur()
                }
            };
            return x || e.addEventListener("keydown", r, !0), () => {
                x || e.removeEventListener("keydown", r, !0)
            }
        }, [N, C, x]), (0, r.useLayoutEffect)(() => {
            var e;
            let r = (0, t.getOwnerDocument)(N.current ? N.current[0] : void 0);
            if (!C) return;
            let o = k.getTreeNode(N);
            if (o) return o.nodeToRestore = null != (e = M.current) ? e : void 0, () => {
                let e = k.getTreeNode(N);
                if (!e) return;
                let t = e.nodeToRestore,
                    o = (0, n.getActiveElement)(r);
                if (C && t && (o && E(o, N) || o === r.body && S(N))) {
                    let e = k.clone();
                    requestAnimationFrame(() => {
                        if (r.activeElement === r.body) {
                            let t = e.getTreeNode(N);
                            for (; t;) {
                                if (t.nodeToRestore && t.nodeToRestore.isConnected) return void R(t.nodeToRestore);
                                t = t.parent
                            }
                            for (t = e.getTreeNode(N); t;) {
                                if (t.scopeRef && t.scopeRef.current && k.getTreeNode(t.scopeRef)) return void R(T(t.scopeRef.current, !0));
                                t = t.parent
                            }
                        }
                    })
                }
            }
        }, [N, C]), _ = B, P = K, D = c.default.useRef(P), (0, c.useEffect)(() => {
            if (D.current) {
                h = _;
                let e = (0, t.getOwnerDocument)(_.current ? _.current[0] : void 0);
                !g((0, n.getActiveElement)(e), h.current) && _.current && y(_.current)
            }
            D.current = !1
        }, [_]), (0, c.useEffect)(() => {
            let e = (0, n.getActiveElement)((0, t.getOwnerDocument)(B.current ? B.current[0] : void 0)),
                r = null;
            if (g(e, B.current)) {
                for (let t of k.traverse()) t.scopeRef && g(e, t.scopeRef.current) && (r = t);
                r === k.getTreeNode(B) && (h = r.scopeRef)
            }
        }, [B]), (0, r.useLayoutEffect)(() => () => {
            var e, t, r;
            let n = null != (r = null == (t = k.getTreeNode(B)) || null == (e = t.parent) ? void 0 : e.scopeRef) ? r : null;
            (B === h || w(B, h)) && (!n || k.getTreeNode(n)) && (h = n), k.removeTreeNode(B)
        }, [B]);
        let j = (0, c.useMemo)(() => {
                var e;
                return e = B, {
                    focusNext(r = {}) {
                        var o;
                        let i = e.current,
                            {
                                from: l,
                                tabbable: s,
                                wrap: u,
                                accept: a
                            } = r,
                            c = l || (0, n.getActiveElement)((0, t.getOwnerDocument)(null != (o = i[0]) ? o : void 0)),
                            d = i[0].previousElementSibling,
                            f = L(v(i), {
                                tabbable: s,
                                accept: a
                            }, i);
                        f.currentNode = g(c, i) ? c : d;
                        let h = f.nextNode();
                        return !h && u && (f.currentNode = d, h = f.nextNode()), h && b(h, !0), h
                    },
                    focusPrevious(r = {}) {
                        var o;
                        let i = e.current,
                            {
                                from: l,
                                tabbable: s,
                                wrap: u,
                                accept: a
                            } = r,
                            c = l || (0, n.getActiveElement)((0, t.getOwnerDocument)(null != (o = i[0]) ? o : void 0)),
                            d = i[i.length - 1].nextElementSibling,
                            f = L(v(i), {
                                tabbable: s,
                                accept: a
                            }, i);
                        f.currentNode = g(c, i) ? c : d;
                        let h = f.previousNode();
                        return !h && u && (f.currentNode = d, h = f.previousNode()), h && b(h, !0), h
                    },
                    focusFirst(t = {}) {
                        let r = e.current,
                            {
                                tabbable: n,
                                accept: o
                            } = t,
                            i = L(v(r), {
                                tabbable: n,
                                accept: o
                            }, r);
                        i.currentNode = r[0].previousElementSibling;
                        let l = i.nextNode();
                        return l && b(l, !0), l
                    },
                    focusLast(t = {}) {
                        let r = e.current,
                            {
                                tabbable: n,
                                accept: o
                            } = t,
                            i = L(v(r), {
                                tabbable: n,
                                accept: o
                            }, r);
                        i.currentNode = r[r.length - 1].nextElementSibling;
                        let l = i.previousNode();
                        return l && b(l, !0), l
                    }
                }
            }, []),
            $ = (0, c.useMemo)(() => ({
                focusManager: j,
                parentNode: G
            }), [G, j]);
        return c.default.createElement(d.Provider, {
            value: $
        }, c.default.createElement("span", {
            "data-focus-scope-start": !0,
            hidden: !0,
            ref: z
        }), I, c.default.createElement("span", {
            "data-focus-scope-end": !0,
            hidden: !0,
            ref: U
        }))
    }

    function v(e) {
        return e[0].parentElement
    }

    function m(e) {
        let t = k.getTreeNode(h);
        for (; t && t.scopeRef !== e;) {
            if (t.contain) return !1;
            t = t.parent
        }
        return !0
    }

    function g(e, t) {
        return !!e && !!t && t.some(t => t.contains(e))
    }

    function E(e, t = null) {
        if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
        for (let {
                scopeRef: r
            }
            of k.traverse(k.getTreeNode(t)))
            if (r && g(e, r.current)) return !0;
        return !1
    }

    function N(e) {
        return E(e, h)
    }

    function w(e, t) {
        var r;
        let n = null == (r = k.getTreeNode(t)) ? void 0 : r.parent;
        for (; n;) {
            if (n.scopeRef === e) return !0;
            n = n.parent
        }
        return !1
    }

    function b(e, t = !1) {
        if (null == e || t) {
            if (null != e) try {
                e.focus()
            } catch {}
        } else try {
            (0, a.focusSafely)(e)
        } catch {}
    }

    function T(e, t = !0) {
        let r = e[0].previousElementSibling,
            n = v(e),
            o = L(n, {
                tabbable: t
            }, e);
        o.currentNode = r;
        let i = o.nextNode();
        return t && !i && ((o = L(n = v(e), {
            tabbable: !1
        }, e)).currentNode = r, i = o.nextNode()), i
    }

    function y(e, t = !0) {
        b(T(e, t))
    }

    function S(e) {
        let t = k.getTreeNode(h);
        for (; t && t.scopeRef !== e;) {
            if (t.nodeToRestore) return !1;
            t = t.parent
        }
        return (null == t ? void 0 : t.scopeRef) === e
    }

    function R(e) {
        e.dispatchEvent(new CustomEvent(f, {
            bubbles: !0,
            cancelable: !0
        })) && b(e)
    }

    function L(e, r, n) {
        var o, u, a;
        let c = (null == r ? void 0 : r.tabbable) ? i.isTabbable : i.isFocusable,
            d = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
            f = (0, t.getOwnerDocument)(d),
            h = (o = e || f, u = NodeFilter.SHOW_ELEMENT, a = {
                acceptNode(e) {
                    var o;
                    return (null == r || null == (o = r.from) ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : c(e) && function e(r, n) {
                        return "#comment" !== r.nodeName && function(e) {
                            let r = (0, t.getOwnerWindow)(e);
                            if (!(e instanceof r.HTMLElement) && !(e instanceof r.SVGElement)) return !1;
                            let {
                                display: n,
                                visibility: o
                            } = e.style, i = "none" !== n && "hidden" !== o && "collapse" !== o;
                            if (i) {
                                let {
                                    getComputedStyle: t
                                } = e.ownerDocument.defaultView, {
                                    display: r,
                                    visibility: n
                                } = t(e);
                                i = "none" !== r && "hidden" !== n && "collapse" !== n
                            }
                            return i
                        }(r) && !r.hasAttribute("hidden") && !r.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== r.nodeName || !n || "SUMMARY" === n.nodeName || r.hasAttribute("open")) && (!r.parentElement || e(r.parentElement, r))
                    }(e) && (!n || g(e, n)) && (!(null == r ? void 0 : r.accept) || r.accept(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                }
            }, (0, l.shadowDOM)() ? new s(f, o, u, a) : f.createTreeWalker(o, u, a));
        return (null == r ? void 0 : r.from) && (h.currentNode = r.from), h
    }
    class C {
        get size() {
            return this.fastMap.size
        }
        getTreeNode(e) {
            return this.fastMap.get(e)
        }
        addTreeNode(e, t, r) {
            let n = this.fastMap.get(null != t ? t : null);
            if (!n) return;
            let o = new F({
                scopeRef: e
            });
            n.addChild(o), o.parent = n, this.fastMap.set(e, o), r && (o.nodeToRestore = r)
        }
        addNode(e) {
            this.fastMap.set(e.scopeRef, e)
        }
        removeTreeNode(e) {
            if (null === e) return;
            let t = this.fastMap.get(e);
            if (!t) return;
            let r = t.parent;
            for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && g(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
            let n = t.children;
            r && (r.removeChild(t), n.size > 0 && n.forEach(e => r && r.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
            if (null != e.scopeRef && (yield e), e.children.size > 0)
                for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
            var e, t;
            let r = new C;
            for (let n of this.traverse()) r.addTreeNode(n.scopeRef, null != (t = null == (e = n.parent) ? void 0 : e.scopeRef) ? t : null, n.nodeToRestore);
            return r
        }
        constructor() {
            this.fastMap = new Map, this.root = new F({
                scopeRef: null
            }), this.fastMap.set(null, this.root)
        }
    }
    class F {
        addChild(e) {
            this.children.add(e), e.parent = this
        }
        removeChild(e) {
            this.children.delete(e), e.parent = void 0
        }
        constructor(e) {
            this.children = new Set, this.contain = !1, this.scopeRef = e.scopeRef
        }
    }
    let k = new C;
    e.s(["FocusScope", () => p, "getFocusableTreeWalker", () => L, "isElementInChildOfActiveScope", () => N], 694421)
}, 838335, e => {
    "use strict";

    function t(e, t) {
        if (!e) return !1;
        let r = window.getComputedStyle(e),
            n = /(auto|scroll)/.test(r.overflow + r.overflowX + r.overflowY);
        return n && t && (n = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), n
    }
    e.s(["isScrollable", () => t])
}, 761195, e => {
    "use strict";
    var t = e.i(838335);

    function r(e, r) {
        let n = e;
        for ((0, t.isScrollable)(n, r) && (n = n.parentElement); n && !(0, t.isScrollable)(n, r);) n = n.parentElement;
        return n || document.scrollingElement || document.documentElement
    }
    e.s(["getScrollParent", () => r])
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2095a1e2-a67b-5a19-b593-d4f04e3a6600")
    } catch (e) {}
}();
//# debugId=2095a1e2-a67b-5a19-b593-d4f04e3a6600