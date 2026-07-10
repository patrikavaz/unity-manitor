(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 264250, t => {
    "use strict";
    t.s(["isObject", 0, function(t) {
        return "object" == typeof t && null !== t
    }])
}, 812064, t => {
    "use strict";
    var e = t.i(264250);
    t.s(["isHTMLElement", 0, function(t) {
        return (0, e.isObject)(t) && "offsetHeight" in t
    }])
}, 386376, t => {
    "use strict";
    var e = t.i(3931),
        r = t.i(34760);
    t.s(["usePresence", 0, function(t = !0) {
        let n = (0, e.useContext)(r.PresenceContext);
        if (null === n) return [!0, null];
        let {
            isPresent: i,
            onExitComplete: o,
            register: f
        } = n, s = (0, e.useId)();
        (0, e.useEffect)(() => {
            if (t) return f(s)
        }, [t]);
        let u = (0, e.useCallback)(() => t && o && o(s), [s, o, t]);
        return !i && o ? [!1, u] : [!0]
    }])
}, 27222, t => {
    "use strict";
    t.i(788727);
    var e = t.i(500783),
        r = t.i(3931),
        n = t.i(407093),
        i = t.i(165780),
        o = t.i(148473),
        f = t.i(34760),
        s = t.i(812064),
        u = r,
        a = t.i(339967);

    function h(t, e) {
        if ("function" == typeof t) return t(e);
        null != t && (t.current = e)
    }
    class l extends u.Component {
        getSnapshotBeforeUpdate(t) {
            let e = this.props.childRef.current;
            if (e && t.isPresent && !this.props.isPresent) {
                let t = e.offsetParent,
                    r = (0, s.isHTMLElement)(t) && t.offsetWidth || 0,
                    n = this.props.sizeRef.current;
                n.height = e.offsetHeight || 0, n.width = e.offsetWidth || 0, n.top = e.offsetTop, n.left = e.offsetLeft, n.right = r - n.width - n.left
            }
            return null
        }
        componentDidUpdate() {}
        render() {
            return this.props.children
        }
    }

    function c({
        children: t,
        isPresent: n,
        anchorX: i,
        root: o
    }) {
        let f = (0, u.useId)(),
            s = (0, u.useRef)(null),
            p = (0, u.useRef)({
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                right: 0
            }),
            {
                nonce: d
            } = (0, u.useContext)(a.MotionConfigContext),
            y = function(...t) {
                return r.useCallback(function(...t) {
                    return e => {
                        let r = !1,
                            n = t.map(t => {
                                let n = h(t, e);
                                return r || "function" != typeof n || (r = !0), n
                            });
                        if (r) return () => {
                            for (let e = 0; e < n.length; e++) {
                                let r = n[e];
                                "function" == typeof r ? r() : h(t[e], null)
                            }
                        }
                    }
                }(...t), t)
            }(s, t?.ref);
        return (0, u.useInsertionEffect)(() => {
            let {
                width: t,
                height: e,
                top: r,
                left: u,
                right: a
            } = p.current;
            if (n || !s.current || !t || !e) return;
            let h = "left" === i ? `left: ${u}` : `right: ${a}`;
            s.current.dataset.motionPopId = f;
            let l = document.createElement("style");
            d && (l.nonce = d);
            let c = o ?? document.head;
            return c.appendChild(l), l.sheet && l.sheet.insertRule(`
          [data-motion-pop-id="${f}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${e}px !important;
            ${h}px !important;
            top: ${r}px !important;
          }
        `), () => {
                c.contains(l) && c.removeChild(l)
            }
        }, [n]), (0, e.jsx)(l, {
            isPresent: n,
            childRef: s,
            sizeRef: p,
            children: u.cloneElement(t, {
                ref: y
            })
        })
    }
    let p = ({
        children: t,
        initial: n,
        isPresent: o,
        onExitComplete: s,
        custom: u,
        presenceAffectsLayout: a,
        mode: h,
        anchorX: l,
        root: p
    }) => {
        let y = (0, i.useConstant)(d),
            g = (0, r.useId)(),
            v = !0,
            b = (0, r.useMemo)(() => (v = !1, {
                id: g,
                initial: n,
                isPresent: o,
                custom: u,
                onExitComplete: t => {
                    for (let e of (y.set(t, !0), y.values()))
                        if (!e) return;
                    s && s()
                },
                register: t => (y.set(t, !1), () => y.delete(t))
            }), [o, y, s]);
        return a && v && (b = {
            ...b
        }), (0, r.useMemo)(() => {
            y.forEach((t, e) => y.set(e, !1))
        }, [o]), r.useEffect(() => {
            o || y.size || !s || s()
        }, [o]), "popLayout" === h && (t = (0, e.jsx)(c, {
            isPresent: o,
            anchorX: l,
            root: p,
            children: t
        })), (0, e.jsx)(f.PresenceContext.Provider, {
            value: b,
            children: t
        })
    };

    function d() {
        return new Map
    }
    var y = t.i(386376);
    let g = t => t.key || "";

    function v(t) {
        let e = [];
        return r.Children.forEach(t, t => {
            (0, r.isValidElement)(t) && e.push(t)
        }), e
    }
    t.s(["AnimatePresence", 0, ({
        children: t,
        custom: f,
        initial: s = !0,
        onExitComplete: u,
        presenceAffectsLayout: a = !0,
        mode: h = "sync",
        propagate: l = !1,
        anchorX: c = "left",
        root: d
    }) => {
        let [b, m] = (0, y.usePresence)(l), A = (0, r.useMemo)(() => v(t), [t]), w = l && !b ? [] : A.map(g), E = (0, r.useRef)(!0), C = (0, r.useRef)(A), B = (0, i.useConstant)(() => new Map), [L, x] = (0, r.useState)(A), [T, U] = (0, r.useState)(A);
        (0, o.useIsomorphicLayoutEffect)(() => {
            E.current = !1, C.current = A;
            for (let t = 0; t < T.length; t++) {
                let e = g(T[t]);
                w.includes(e) ? B.delete(e) : !0 !== B.get(e) && B.set(e, !1)
            }
        }, [T, w.length, w.join("-")]);
        let I = [];
        if (A !== L) {
            let t = [...A];
            for (let e = 0; e < T.length; e++) {
                let r = T[e],
                    n = g(r);
                w.includes(n) || (t.splice(e, 0, r), I.push(r))
            }
            return "wait" === h && I.length && (t = I), U(v(t)), x(A), null
        }
        let {
            forceRender: P
        } = (0, r.useContext)(n.LayoutGroupContext);
        return (0, e.jsx)(e.Fragment, {
            children: T.map(t => {
                let r = g(t),
                    n = (!l || !!b) && (A === T || w.includes(r));
                return (0, e.jsx)(p, {
                    isPresent: n,
                    initial: (!E.current || !!s) && void 0,
                    custom: f,
                    presenceAffectsLayout: a,
                    mode: h,
                    root: d,
                    onExitComplete: n ? void 0 : () => {
                        if (!B.has(r)) return;
                        B.set(r, !0);
                        let t = !0;
                        B.forEach(e => {
                            e || (t = !1)
                        }), t && (P?.(), U(C.current), l && m?.(), u && u())
                    },
                    anchorX: c,
                    children: t
                }, r)
            })
        })
    }], 27222)
}, 7075, t => {
    "use strict";
    var e = t.i(465602),
        r = t.i(740041);
    let {
        Link: n,
        redirect: i,
        usePathname: o,
        useRouter: f
    } = (0, e.createNavigation)({
        locales: r.locales,
        localePrefix: r.localePrefix,
        defaultLocale: r.defaultLocale
    });
    t.s(["Link", 0, n, "usePathname", 0, o])
}, 920096, t => {
    "use strict";
    t.s(["clamp", 0, function(t, e = -1 / 0, r = 1 / 0) {
        return Math.min(Math.max(t, e), r)
    }])
}, 502879, 59284, t => {
    "use strict";
    t.i(788727);
    var e = t.i(231781);

    function r(t, r) {
        let {
            id: n,
            "aria-label": i,
            "aria-labelledby": o
        } = t;
        return n = (0, e.useId)(n), o && i ? o = [...new Set([n, ...o.trim().split(/\s+/)])].join(" ") : o && (o = o.trim().split(/\s+/).join(" ")), i || o || !r || (i = r), {
            id: n,
            "aria-label": i,
            "aria-labelledby": o
        }
    }
    t.s(["useLabels", 0, r], 59284), t.s(["useLabel", 0, function(t) {
        let {
            id: n,
            label: i,
            "aria-labelledby": o,
            "aria-label": f,
            labelElementType: s = "label"
        } = t;
        n = (0, e.useId)(n);
        let u = (0, e.useId)(),
            a = {};
        return i && (o = o ? `${u} ${o}` : u, a = {
            id: u,
            htmlFor: "label" === s ? n : void 0
        }), {
            labelProps: a,
            fieldProps: r({
                id: n,
                "aria-label": f,
                "aria-labelledby": o
            })
        }
    }], 502879)
}, 401312, t => {
    "use strict";
    var e = t.i(123714),
        r = t.i(3931);
    t.s(["useEvent", 0, function(t, n, i, o) {
        let f = (0, e.useEffectEvent)(i),
            s = null == i;
        (0, r.useEffect)(() => {
            if (s || !t.current) return;
            let e = t.current;
            return e.addEventListener(n, f, o), () => {
                e.removeEventListener(n, f, o)
            }
        }, [t, n, o, s, f])
    }])
}, 776955, t => {
    "use strict";
    let e = null;
    class r {
        isAttached() {
            var t;
            return null == (t = this.node) ? void 0 : t.isConnected
        }
        createLog(t) {
            let e = document.createElement("div");
            return e.setAttribute("role", "log"), e.setAttribute("aria-live", t), e.setAttribute("aria-relevant", "additions"), e
        }
        destroy() {
            this.node && (document.body.removeChild(this.node), this.node = null)
        }
        announce(t, e = "assertive", r = 7e3) {
            var n, i;
            if (!this.node) return;
            let o = document.createElement("div");
            "object" == typeof t ? (o.setAttribute("role", "img"), o.setAttribute("aria-labelledby", t["aria-labelledby"])) : o.textContent = t, "assertive" === e ? null == (n = this.assertiveLog) || n.appendChild(o) : null == (i = this.politeLog) || i.appendChild(o), "" !== t && setTimeout(() => {
                o.remove()
            }, r)
        }
        clear(t) {
            this.node && ((!t || "assertive" === t) && this.assertiveLog && (this.assertiveLog.innerHTML = ""), (!t || "polite" === t) && this.politeLog && (this.politeLog.innerHTML = ""))
        }
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
    }
    t.s(["announce", 0, function(t, n = "assertive", i = 7e3) {
        e ? e.announce(t, n, i) : (e = new r, ("boolean" == typeof IS_REACT_ACT_ENVIRONMENT ? IS_REACT_ACT_ENVIRONMENT : "u" > typeof jest) ? e.announce(t, n, i) : setTimeout(() => {
            (null == e ? void 0 : e.isAttached()) && (null == e || e.announce(t, n, i))
        }, 100))
    }])
}, 825610, t => {
    "use strict";
    t.s(["trackingLocation", 0, {
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
        bentoBoxCardAction: "BentoBoxCardAction"
    }])
}, 868319, (t, e, r) => {
    var n = {
            675: function(t, e) {
                "use strict";
                e.byteLength = function(t) {
                    var e = u(t),
                        r = e[0],
                        n = e[1];
                    return (r + n) * 3 / 4 - n
                }, e.toByteArray = function(t) {
                    var e, r, o = u(t),
                        f = o[0],
                        s = o[1],
                        a = new i((f + s) * 3 / 4 - s),
                        h = 0,
                        l = s > 0 ? f - 4 : f;
                    for (r = 0; r < l; r += 4) e = n[t.charCodeAt(r)] << 18 | n[t.charCodeAt(r + 1)] << 12 | n[t.charCodeAt(r + 2)] << 6 | n[t.charCodeAt(r + 3)], a[h++] = e >> 16 & 255, a[h++] = e >> 8 & 255, a[h++] = 255 & e;
                    return 2 === s && (e = n[t.charCodeAt(r)] << 2 | n[t.charCodeAt(r + 1)] >> 4, a[h++] = 255 & e), 1 === s && (e = n[t.charCodeAt(r)] << 10 | n[t.charCodeAt(r + 1)] << 4 | n[t.charCodeAt(r + 2)] >> 2, a[h++] = e >> 8 & 255, a[h++] = 255 & e), a
                }, e.fromByteArray = function(t) {
                    for (var e, n = t.length, i = n % 3, o = [], f = 0, s = n - i; f < s; f += 16383) o.push(function(t, e, n) {
                        for (var i, o = [], f = e; f < n; f += 3) i = (t[f] << 16 & 0xff0000) + (t[f + 1] << 8 & 65280) + (255 & t[f + 2]), o.push(r[i >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
                        return o.join("")
                    }(t, f, f + 16383 > s ? s : f + 16383));
                    return 1 === i ? o.push(r[(e = t[n - 1]) >> 2] + r[e << 4 & 63] + "==") : 2 === i && o.push(r[(e = (t[n - 2] << 8) + t[n - 1]) >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="), o.join("")
                };
                for (var r = [], n = [], i = "u" > typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", f = 0, s = o.length; f < s; ++f) r[f] = o[f], n[o.charCodeAt(f)] = f;

                function u(t) {
                    var e = t.length;
                    if (e % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                    var r = t.indexOf("="); - 1 === r && (r = e);
                    var n = r === e ? 0 : 4 - r % 4;
                    return [r, n]
                }
                n[45] = 62, n[95] = 63
            },
            72: function(t, e, r) {
                "use strict";
                var n = r(675),
                    i = r(783),
                    o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

                function f(t) {
                    if (t > 0x7fffffff) throw RangeError('The value "' + t + '" is invalid for option "size"');
                    var e = new Uint8Array(t);
                    return Object.setPrototypeOf(e, s.prototype), e
                }

                function s(t, e, r) {
                    if ("number" == typeof t) {
                        if ("string" == typeof e) throw TypeError('The "string" argument must be of type string. Received type number');
                        return h(t)
                    }
                    return u(t, e, r)
                }

                function u(t, e, r) {
                    if ("string" == typeof t) {
                        var n = t,
                            i = e;
                        if (("string" != typeof i || "" === i) && (i = "utf8"), !s.isEncoding(i)) throw TypeError("Unknown encoding: " + i);
                        var o = 0 | p(n, i),
                            u = f(o),
                            a = u.write(n, i);
                        return a !== o && (u = u.slice(0, a)), u
                    }
                    if (ArrayBuffer.isView(t)) return l(t);
                    if (null == t) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                    if (I(t, ArrayBuffer) || t && I(t.buffer, ArrayBuffer) || "u" > typeof SharedArrayBuffer && (I(t, SharedArrayBuffer) || t && I(t.buffer, SharedArrayBuffer))) return function(t, e, r) {
                        var n;
                        if (e < 0 || t.byteLength < e) throw RangeError('"offset" is outside of buffer bounds');
                        if (t.byteLength < e + (r || 0)) throw RangeError('"length" is outside of buffer bounds');
                        return Object.setPrototypeOf(n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r), s.prototype), n
                    }(t, e, r);
                    if ("number" == typeof t) throw TypeError('The "value" argument must not be of type number. Received type number');
                    var h = t.valueOf && t.valueOf();
                    if (null != h && h !== t) return s.from(h, e, r);
                    var d = function(t) {
                        if (s.isBuffer(t)) {
                            var e = 0 | c(t.length),
                                r = f(e);
                            return 0 === r.length || t.copy(r, 0, 0, e), r
                        }
                        return void 0 !== t.length ? "number" != typeof t.length || function(t) {
                            return t != t
                        }(t.length) ? f(0) : l(t) : "Buffer" === t.type && Array.isArray(t.data) ? l(t.data) : void 0
                    }(t);
                    if (d) return d;
                    if ("u" > typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return s.from(t[Symbol.toPrimitive]("string"), e, r);
                    throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
                }

                function a(t) {
                    if ("number" != typeof t) throw TypeError('"size" argument must be of type number');
                    if (t < 0) throw RangeError('The value "' + t + '" is invalid for option "size"')
                }

                function h(t) {
                    return a(t), f(t < 0 ? 0 : 0 | c(t))
                }

                function l(t) {
                    for (var e = t.length < 0 ? 0 : 0 | c(t.length), r = f(e), n = 0; n < e; n += 1) r[n] = 255 & t[n];
                    return r
                }
                e.Buffer = s, e.SlowBuffer = function(t) {
                    return +t != t && (t = 0), s.alloc(+t)
                }, e.INSPECT_MAX_BYTES = 50, e.kMaxLength = 0x7fffffff, s.TYPED_ARRAY_SUPPORT = function() {
                    try {
                        var t = new Uint8Array(1),
                            e = {
                                foo: function() {
                                    return 42
                                }
                            };
                        return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
                    } catch (t) {
                        return !1
                    }
                }(), !s.TYPED_ARRAY_SUPPORT && "u" > typeof console && "function" == typeof console.error && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(s.prototype, "parent", {
                    enumerable: !0,
                    get: function() {
                        if (s.isBuffer(this)) return this.buffer
                    }
                }), Object.defineProperty(s.prototype, "offset", {
                    enumerable: !0,
                    get: function() {
                        if (s.isBuffer(this)) return this.byteOffset
                    }
                }), s.poolSize = 8192, s.from = function(t, e, r) {
                    return u(t, e, r)
                }, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array), s.alloc = function(t, e, r) {
                    return (a(t), t <= 0) ? f(t) : void 0 !== e ? "string" == typeof r ? f(t).fill(e, r) : f(t).fill(e) : f(t)
                }, s.allocUnsafe = function(t) {
                    return h(t)
                }, s.allocUnsafeSlow = function(t) {
                    return h(t)
                };

                function c(t) {
                    if (t >= 0x7fffffff) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                    return 0 | t
                }

                function p(t, e) {
                    if (s.isBuffer(t)) return t.length;
                    if (ArrayBuffer.isView(t) || I(t, ArrayBuffer)) return t.byteLength;
                    if ("string" != typeof t) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                    var r = t.length,
                        n = arguments.length > 2 && !0 === arguments[2];
                    if (!n && 0 === r) return 0;
                    for (var i = !1;;) switch (e) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return r;
                        case "utf8":
                        case "utf-8":
                            return L(t).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * r;
                        case "hex":
                            return r >>> 1;
                        case "base64":
                            return T(t).length;
                        default:
                            if (i) return n ? -1 : L(t).length;
                            e = ("" + e).toLowerCase(), i = !0
                    }
                }

                function d(t, e, r) {
                    var i, o, f, s = !1;
                    if ((void 0 === e || e < 0) && (e = 0), e > this.length || ((void 0 === r || r > this.length) && (r = this.length), r <= 0 || (r >>>= 0) <= (e >>>= 0))) return "";
                    for (t || (t = "utf8");;) switch (t) {
                        case "hex":
                            return function(t, e, r) {
                                var n = t.length;
                                (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                                for (var i = "", o = e; o < r; ++o) i += P[t[o]];
                                return i
                            }(this, e, r);
                        case "utf8":
                        case "utf-8":
                            return b(this, e, r);
                        case "ascii":
                            return function(t, e, r) {
                                var n = "";
                                r = Math.min(t.length, r);
                                for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
                                return n
                            }(this, e, r);
                        case "latin1":
                        case "binary":
                            return function(t, e, r) {
                                var n = "";
                                r = Math.min(t.length, r);
                                for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
                                return n
                            }(this, e, r);
                        case "base64":
                            return i = this, o = e, f = r, 0 === o && f === i.length ? n.fromByteArray(i) : n.fromByteArray(i.slice(o, f));
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return function(t, e, r) {
                                for (var n = t.slice(e, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                                return i
                            }(this, e, r);
                        default:
                            if (s) throw TypeError("Unknown encoding: " + t);
                            t = (t + "").toLowerCase(), s = !0
                    }
                }

                function y(t, e, r) {
                    var n = t[e];
                    t[e] = t[r], t[r] = n
                }

                function g(t, e, r, n, i) {
                    var o;
                    if (0 === t.length) return -1;
                    if ("string" == typeof r ? (n = r, r = 0) : r > 0x7fffffff ? r = 0x7fffffff : r < -0x80000000 && (r = -0x80000000), (o = r *= 1) != o && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length)
                        if (i) return -1;
                        else r = t.length - 1;
                    else if (r < 0)
                        if (!i) return -1;
                        else r = 0;
                    if ("string" == typeof e && (e = s.from(e, n)), s.isBuffer(e)) return 0 === e.length ? -1 : v(t, e, r, n, i);
                    if ("number" == typeof e) {
                        if (e &= 255, "function" == typeof Uint8Array.prototype.indexOf)
                            if (i) return Uint8Array.prototype.indexOf.call(t, e, r);
                            else return Uint8Array.prototype.lastIndexOf.call(t, e, r);
                        return v(t, [e], r, n, i)
                    }
                    throw TypeError("val must be string, number or Buffer")
                }

                function v(t, e, r, n, i) {
                    var o, f = 1,
                        s = t.length,
                        u = e.length;
                    if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                        if (t.length < 2 || e.length < 2) return -1;
                        f = 2, s /= 2, u /= 2, r /= 2
                    }

                    function a(t, e) {
                        return 1 === f ? t[e] : t.readUInt16BE(e * f)
                    }
                    if (i) {
                        var h = -1;
                        for (o = r; o < s; o++)
                            if (a(t, o) === a(e, -1 === h ? 0 : o - h)) {
                                if (-1 === h && (h = o), o - h + 1 === u) return h * f
                            } else - 1 !== h && (o -= o - h), h = -1
                    } else
                        for (r + u > s && (r = s - u), o = r; o >= 0; o--) {
                            for (var l = !0, c = 0; c < u; c++)
                                if (a(t, o + c) !== a(e, c)) {
                                    l = !1;
                                    break
                                } if (l) return o
                        }
                    return -1
                }
                s.isBuffer = function(t) {
                    return null != t && !0 === t._isBuffer && t !== s.prototype
                }, s.compare = function(t, e) {
                    if (I(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), I(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(t) || !s.isBuffer(e)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                    if (t === e) return 0;
                    for (var r = t.length, n = e.length, i = 0, o = Math.min(r, n); i < o; ++i)
                        if (t[i] !== e[i]) {
                            r = t[i], n = e[i];
                            break
                        } return r < n ? -1 : +(n < r)
                }, s.isEncoding = function(t) {
                    switch (String(t).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, s.concat = function(t, e) {
                    if (!Array.isArray(t)) throw TypeError('"list" argument must be an Array of Buffers');
                    if (0 === t.length) return s.alloc(0);
                    if (void 0 === e)
                        for (r = 0, e = 0; r < t.length; ++r) e += t[r].length;
                    var r, n = s.allocUnsafe(e),
                        i = 0;
                    for (r = 0; r < t.length; ++r) {
                        var o = t[r];
                        if (I(o, Uint8Array) && (o = s.from(o)), !s.isBuffer(o)) throw TypeError('"list" argument must be an Array of Buffers');
                        o.copy(n, i), i += o.length
                    }
                    return n
                }, s.byteLength = p, s.prototype._isBuffer = !0, s.prototype.swap16 = function() {
                    var t = this.length;
                    if (t % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                    for (var e = 0; e < t; e += 2) y(this, e, e + 1);
                    return this
                }, s.prototype.swap32 = function() {
                    var t = this.length;
                    if (t % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                    for (var e = 0; e < t; e += 4) y(this, e, e + 3), y(this, e + 1, e + 2);
                    return this
                }, s.prototype.swap64 = function() {
                    var t = this.length;
                    if (t % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                    for (var e = 0; e < t; e += 8) y(this, e, e + 7), y(this, e + 1, e + 6), y(this, e + 2, e + 5), y(this, e + 3, e + 4);
                    return this
                }, s.prototype.toString = function() {
                    var t = this.length;
                    return 0 === t ? "" : 0 == arguments.length ? b(this, 0, t) : d.apply(this, arguments)
                }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(t) {
                    if (!s.isBuffer(t)) throw TypeError("Argument must be a Buffer");
                    return this === t || 0 === s.compare(this, t)
                }, s.prototype.inspect = function() {
                    var t = "",
                        r = e.INSPECT_MAX_BYTES;
                    return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">"
                }, o && (s.prototype[o] = s.prototype.inspect), s.prototype.compare = function(t, e, r, n, i) {
                    if (I(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(t)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                    if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length) throw RangeError("out of range index");
                    if (n >= i && e >= r) return 0;
                    if (n >= i) return -1;
                    if (e >= r) return 1;
                    if (e >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0, this === t) return 0;
                    for (var o = i - n, f = r - e, u = Math.min(o, f), a = this.slice(n, i), h = t.slice(e, r), l = 0; l < u; ++l)
                        if (a[l] !== h[l]) {
                            o = a[l], f = h[l];
                            break
                        } return o < f ? -1 : +(f < o)
                }, s.prototype.includes = function(t, e, r) {
                    return -1 !== this.indexOf(t, e, r)
                }, s.prototype.indexOf = function(t, e, r) {
                    return g(this, t, e, r, !0)
                }, s.prototype.lastIndexOf = function(t, e, r) {
                    return g(this, t, e, r, !1)
                };

                function b(t, e, r) {
                    r = Math.min(t.length, r);
                    for (var n = [], i = e; i < r;) {
                        var o, f, s, u, a = t[i],
                            h = null,
                            l = a > 239 ? 4 : a > 223 ? 3 : a > 191 ? 2 : 1;
                        if (i + l <= r) switch (l) {
                            case 1:
                                a < 128 && (h = a);
                                break;
                            case 2:
                                (192 & (o = t[i + 1])) == 128 && (u = (31 & a) << 6 | 63 & o) > 127 && (h = u);
                                break;
                            case 3:
                                o = t[i + 1], f = t[i + 2], (192 & o) == 128 && (192 & f) == 128 && (u = (15 & a) << 12 | (63 & o) << 6 | 63 & f) > 2047 && (u < 55296 || u > 57343) && (h = u);
                                break;
                            case 4:
                                o = t[i + 1], f = t[i + 2], s = t[i + 3], (192 & o) == 128 && (192 & f) == 128 && (192 & s) == 128 && (u = (15 & a) << 18 | (63 & o) << 12 | (63 & f) << 6 | 63 & s) > 65535 && u < 1114112 && (h = u)
                        }
                        null === h ? (h = 65533, l = 1) : h > 65535 && (h -= 65536, n.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), n.push(h), i += l
                    }
                    var c = n,
                        p = c.length;
                    if (p <= 4096) return String.fromCharCode.apply(String, c);
                    for (var d = "", y = 0; y < p;) d += String.fromCharCode.apply(String, c.slice(y, y += 4096));
                    return d
                }

                function m(t, e, r) {
                    if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
                    if (t + e > r) throw RangeError("Trying to access beyond buffer length")
                }

                function A(t, e, r, n, i, o) {
                    if (!s.isBuffer(t)) throw TypeError('"buffer" argument must be a Buffer instance');
                    if (e > i || e < o) throw RangeError('"value" argument is out of bounds');
                    if (r + n > t.length) throw RangeError("Index out of range")
                }

                function w(t, e, r, n, i, o) {
                    if (r + n > t.length || r < 0) throw RangeError("Index out of range")
                }

                function E(t, e, r, n, o) {
                    return e *= 1, r >>>= 0, o || w(t, e, r, 4, 34028234663852886e22, -34028234663852886e22), i.write(t, e, r, n, 23, 4), r + 4
                }

                function C(t, e, r, n, o) {
                    return e *= 1, r >>>= 0, o || w(t, e, r, 8, 17976931348623157e292, -17976931348623157e292), i.write(t, e, r, n, 52, 8), r + 8
                }
                s.prototype.write = function(t, e, r, n) {
                    if (void 0 === e) n = "utf8", r = this.length, e = 0;
                    else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;
                    else if (isFinite(e)) e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
                    else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    var i, o, f, s, u, a, h, l, c = this.length - e;
                    if ((void 0 === r || r > c) && (r = c), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw RangeError("Attempt to write outside buffer bounds");
                    n || (n = "utf8");
                    for (var p = !1;;) switch (n) {
                        case "hex":
                            return function(t, e, r, n) {
                                r = Number(r) || 0;
                                var i = t.length - r;
                                n ? (n = Number(n)) > i && (n = i) : n = i;
                                var o = e.length;
                                n > o / 2 && (n = o / 2);
                                for (var f = 0; f < n; ++f) {
                                    var s, u = parseInt(e.substr(2 * f, 2), 16);
                                    if ((s = u) != s) break;
                                    t[r + f] = u
                                }
                                return f
                            }(this, t, e, r);
                        case "utf8":
                        case "utf-8":
                            return i = e, o = r, U(L(t, this.length - i), this, i, o);
                        case "ascii":
                            return f = e, s = r, U(x(t), this, f, s);
                        case "latin1":
                        case "binary":
                            return function(t, e, r, n) {
                                return U(x(e), t, r, n)
                            }(this, t, e, r);
                        case "base64":
                            return u = e, a = r, U(T(t), this, u, a);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return h = e, l = r, U(function(t, e) {
                                for (var r, n, i = [], o = 0; o < t.length && !((e -= 2) < 0); ++o) n = (r = t.charCodeAt(o)) >> 8, i.push(r % 256), i.push(n);
                                return i
                            }(t, this.length - h), this, h, l);
                        default:
                            if (p) throw TypeError("Unknown encoding: " + n);
                            n = ("" + n).toLowerCase(), p = !0
                    }
                }, s.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                }, s.prototype.slice = function(t, e) {
                    var r = this.length;
                    t = ~~t, e = void 0 === e ? r : ~~e, t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
                    var n = this.subarray(t, e);
                    return Object.setPrototypeOf(n, s.prototype), n
                }, s.prototype.readUIntLE = function(t, e, r) {
                    t >>>= 0, e >>>= 0, r || m(t, e, this.length);
                    for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i;
                    return n
                }, s.prototype.readUIntBE = function(t, e, r) {
                    t >>>= 0, e >>>= 0, r || m(t, e, this.length);
                    for (var n = this[t + --e], i = 1; e > 0 && (i *= 256);) n += this[t + --e] * i;
                    return n
                }, s.prototype.readUInt8 = function(t, e) {
                    return t >>>= 0, e || m(t, 1, this.length), this[t]
                }, s.prototype.readUInt16LE = function(t, e) {
                    return t >>>= 0, e || m(t, 2, this.length), this[t] | this[t + 1] << 8
                }, s.prototype.readUInt16BE = function(t, e) {
                    return t >>>= 0, e || m(t, 2, this.length), this[t] << 8 | this[t + 1]
                }, s.prototype.readUInt32LE = function(t, e) {
                    return t >>>= 0, e || m(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 0x1000000 * this[t + 3]
                }, s.prototype.readUInt32BE = function(t, e) {
                    return t >>>= 0, e || m(t, 4, this.length), 0x1000000 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                }, s.prototype.readIntLE = function(t, e, r) {
                    t >>>= 0, e >>>= 0, r || m(t, e, this.length);
                    for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i;
                    return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n
                }, s.prototype.readIntBE = function(t, e, r) {
                    t >>>= 0, e >>>= 0, r || m(t, e, this.length);
                    for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256);) o += this[t + --n] * i;
                    return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
                }, s.prototype.readInt8 = function(t, e) {
                    return (t >>>= 0, e || m(t, 1, this.length), 128 & this[t]) ? -((255 - this[t] + 1) * 1) : this[t]
                }, s.prototype.readInt16LE = function(t, e) {
                    t >>>= 0, e || m(t, 2, this.length);
                    var r = this[t] | this[t + 1] << 8;
                    return 32768 & r ? 0xffff0000 | r : r
                }, s.prototype.readInt16BE = function(t, e) {
                    t >>>= 0, e || m(t, 2, this.length);
                    var r = this[t + 1] | this[t] << 8;
                    return 32768 & r ? 0xffff0000 | r : r
                }, s.prototype.readInt32LE = function(t, e) {
                    return t >>>= 0, e || m(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                }, s.prototype.readInt32BE = function(t, e) {
                    return t >>>= 0, e || m(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                }, s.prototype.readFloatLE = function(t, e) {
                    return t >>>= 0, e || m(t, 4, this.length), i.read(this, t, !0, 23, 4)
                }, s.prototype.readFloatBE = function(t, e) {
                    return t >>>= 0, e || m(t, 4, this.length), i.read(this, t, !1, 23, 4)
                }, s.prototype.readDoubleLE = function(t, e) {
                    return t >>>= 0, e || m(t, 8, this.length), i.read(this, t, !0, 52, 8)
                }, s.prototype.readDoubleBE = function(t, e) {
                    return t >>>= 0, e || m(t, 8, this.length), i.read(this, t, !1, 52, 8)
                }, s.prototype.writeUIntLE = function(t, e, r, n) {
                    if (t *= 1, e >>>= 0, r >>>= 0, !n) {
                        var i = Math.pow(2, 8 * r) - 1;
                        A(this, t, e, r, i, 0)
                    }
                    var o = 1,
                        f = 0;
                    for (this[e] = 255 & t; ++f < r && (o *= 256);) this[e + f] = t / o & 255;
                    return e + r
                }, s.prototype.writeUIntBE = function(t, e, r, n) {
                    if (t *= 1, e >>>= 0, r >>>= 0, !n) {
                        var i = Math.pow(2, 8 * r) - 1;
                        A(this, t, e, r, i, 0)
                    }
                    var o = r - 1,
                        f = 1;
                    for (this[e + o] = 255 & t; --o >= 0 && (f *= 256);) this[e + o] = t / f & 255;
                    return e + r
                }, s.prototype.writeUInt8 = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || A(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
                }, s.prototype.writeUInt16LE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || A(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
                }, s.prototype.writeUInt16BE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || A(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
                }, s.prototype.writeUInt32LE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || A(this, t, e, 4, 0xffffffff, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
                }, s.prototype.writeUInt32BE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || A(this, t, e, 4, 0xffffffff, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
                }, s.prototype.writeIntLE = function(t, e, r, n) {
                    if (t *= 1, e >>>= 0, !n) {
                        var i = Math.pow(2, 8 * r - 1);
                        A(this, t, e, r, i - 1, -i)
                    }
                    var o = 0,
                        f = 1,
                        s = 0;
                    for (this[e] = 255 & t; ++o < r && (f *= 256);) t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1), this[e + o] = (t / f | 0) - s & 255;
                    return e + r
                }, s.prototype.writeIntBE = function(t, e, r, n) {
                    if (t *= 1, e >>>= 0, !n) {
                        var i = Math.pow(2, 8 * r - 1);
                        A(this, t, e, r, i - 1, -i)
                    }
                    var o = r - 1,
                        f = 1,
                        s = 0;
                    for (this[e + o] = 255 & t; --o >= 0 && (f *= 256);) t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1), this[e + o] = (t / f | 0) - s & 255;
                    return e + r
                }, s.prototype.writeInt8 = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || A(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
                }, s.prototype.writeInt16LE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || A(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
                }, s.prototype.writeInt16BE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || A(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
                }, s.prototype.writeInt32LE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || A(this, t, e, 4, 0x7fffffff, -0x80000000), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
                }, s.prototype.writeInt32BE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || A(this, t, e, 4, 0x7fffffff, -0x80000000), t < 0 && (t = 0xffffffff + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
                }, s.prototype.writeFloatLE = function(t, e, r) {
                    return E(this, t, e, !0, r)
                }, s.prototype.writeFloatBE = function(t, e, r) {
                    return E(this, t, e, !1, r)
                }, s.prototype.writeDoubleLE = function(t, e, r) {
                    return C(this, t, e, !0, r)
                }, s.prototype.writeDoubleBE = function(t, e, r) {
                    return C(this, t, e, !1, r)
                }, s.prototype.copy = function(t, e, r, n) {
                    if (!s.isBuffer(t)) throw TypeError("argument should be a Buffer");
                    if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r || 0 === t.length || 0 === this.length) return 0;
                    if (e < 0) throw RangeError("targetStart out of bounds");
                    if (r < 0 || r >= this.length) throw RangeError("Index out of range");
                    if (n < 0) throw RangeError("sourceEnd out of bounds");
                    n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
                    var i = n - r;
                    if (this === t && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(e, r, n);
                    else if (this === t && r < e && e < n)
                        for (var o = i - 1; o >= 0; --o) t[o + e] = this[o + r];
                    else Uint8Array.prototype.set.call(t, this.subarray(r, n), e);
                    return i
                }, s.prototype.fill = function(t, e, r, n) {
                    if ("string" == typeof t) {
                        if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw TypeError("encoding must be a string");
                        if ("string" == typeof n && !s.isEncoding(n)) throw TypeError("Unknown encoding: " + n);
                        if (1 === t.length) {
                            var i, o = t.charCodeAt(0);
                            ("utf8" === n && o < 128 || "latin1" === n) && (t = o)
                        }
                    } else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
                    if (e < 0 || this.length < e || this.length < r) throw RangeError("Out of range index");
                    if (r <= e) return this;
                    if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t)
                        for (i = e; i < r; ++i) this[i] = t;
                    else {
                        var f = s.isBuffer(t) ? t : s.from(t, n),
                            u = f.length;
                        if (0 === u) throw TypeError('The value "' + t + '" is invalid for argument "value"');
                        for (i = 0; i < r - e; ++i) this[i + e] = f[i % u]
                    }
                    return this
                };
                var B = /[^+/0-9A-Za-z-_]/g;

                function L(t, e) {
                    e = e || 1 / 0;
                    for (var r, n = t.length, i = null, o = [], f = 0; f < n; ++f) {
                        if ((r = t.charCodeAt(f)) > 55295 && r < 57344) {
                            if (!i) {
                                if (r > 56319 || f + 1 === n) {
                                    (e -= 3) > -1 && o.push(239, 191, 189);
                                    continue
                                }
                                i = r;
                                continue
                            }
                            if (r < 56320) {
                                (e -= 3) > -1 && o.push(239, 191, 189), i = r;
                                continue
                            }
                            r = (i - 55296 << 10 | r - 56320) + 65536
                        } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                        if (i = null, r < 128) {
                            if ((e -= 1) < 0) break;
                            o.push(r)
                        } else if (r < 2048) {
                            if ((e -= 2) < 0) break;
                            o.push(r >> 6 | 192, 63 & r | 128)
                        } else if (r < 65536) {
                            if ((e -= 3) < 0) break;
                            o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                        } else if (r < 1114112) {
                            if ((e -= 4) < 0) break;
                            o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                        } else throw Error("Invalid code point")
                    }
                    return o
                }

                function x(t) {
                    for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                    return e
                }

                function T(t) {
                    return n.toByteArray(function(t) {
                        if ((t = (t = t.split("=")[0]).trim().replace(B, "")).length < 2) return "";
                        for (; t.length % 4 != 0;) t += "=";
                        return t
                    }(t))
                }

                function U(t, e, r, n) {
                    for (var i = 0; i < n && !(i + r >= e.length) && !(i >= t.length); ++i) e[i + r] = t[i];
                    return i
                }

                function I(t, e) {
                    return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
                }
                var P = function() {
                    for (var t = "0123456789abcdef", e = Array(256), r = 0; r < 16; ++r)
                        for (var n = 16 * r, i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
                    return e
                }()
            },
            783: function(t, e) {
                e.read = function(t, e, r, n, i) {
                    var o, f, s = 8 * i - n - 1,
                        u = (1 << s) - 1,
                        a = u >> 1,
                        h = -7,
                        l = r ? i - 1 : 0,
                        c = r ? -1 : 1,
                        p = t[e + l];
                    for (l += c, o = p & (1 << -h) - 1, p >>= -h, h += s; h > 0; o = 256 * o + t[e + l], l += c, h -= 8);
                    for (f = o & (1 << -h) - 1, o >>= -h, h += n; h > 0; f = 256 * f + t[e + l], l += c, h -= 8);
                    if (0 === o) o = 1 - a;
                    else {
                        if (o === u) return f ? NaN : 1 / 0 * (p ? -1 : 1);
                        f += Math.pow(2, n), o -= a
                    }
                    return (p ? -1 : 1) * f * Math.pow(2, o - n)
                }, e.write = function(t, e, r, n, i, o) {
                    var f, s, u, a = 8 * o - i - 1,
                        h = (1 << a) - 1,
                        l = h >> 1,
                        c = 5960464477539062e-23 * (23 === i),
                        p = n ? 0 : o - 1,
                        d = n ? 1 : -1,
                        y = +(e < 0 || 0 === e && 1 / e < 0);
                    for (isNaN(e = Math.abs(e)) || e === 1 / 0 ? (s = +!!isNaN(e), f = h) : (f = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -f)) < 1 && (f--, u *= 2), f + l >= 1 ? e += c / u : e += c * Math.pow(2, 1 - l), e * u >= 2 && (f++, u /= 2), f + l >= h ? (s = 0, f = h) : f + l >= 1 ? (s = (e * u - 1) * Math.pow(2, i), f += l) : (s = e * Math.pow(2, l - 1) * Math.pow(2, i), f = 0)); i >= 8; t[r + p] = 255 & s, p += d, s /= 256, i -= 8);
                    for (f = f << i | s, a += i; a > 0; t[r + p] = 255 & f, p += d, f /= 256, a -= 8);
                    t[r + p - d] |= 128 * y
                }
            }
        },
        i = {};

    function o(t) {
        var e = i[t];
        if (void 0 !== e) return e.exports;
        var r = i[t] = {
                exports: {}
            },
            f = !0;
        try {
            n[t](r, r.exports, o), f = !1
        } finally {
            f && delete i[t]
        }
        return r.exports
    }
    o.ab = "/ROOT/node_modules/.pnpm/next@16.2.6_@babel+core@7.28.4_@opentelemetry+api@1.9.1_@playwright+test@1.56.1_babel-p_2741dd58e007ab5c73efa373a1e77b34/node_modules/next/dist/compiled/buffer/", e.exports = o(72)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "dffb1f20-97e5-5a6b-8156-ff9594a7e7fb")
    } catch (e) {}
}();
//# debugId=dffb1f20-97e5-5a6b-8156-ff9594a7e7fb