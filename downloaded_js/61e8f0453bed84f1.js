(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 369710, e => {
    "use strict";

    function t(e, t, r) {
        if (e instanceof EventTarget) return [e];
        if ("string" == typeof e) {
            let s = document;
            t && (s = t.current);
            let a = r?.[e] ?? s.querySelectorAll(e);
            return a ? Array.from(a) : []
        }
        return Array.from(e)
    }
    e.s(["resolveElements", () => t])
}, 248664, (e, t, r) => {
    var s = e.r(423748),
        a = e.r(819674);
    t.exports = function(e) {
        return "symbol" == typeof e || a(e) && "[object Symbol]" == s(e)
    }
}, 649051, e => {
    "use strict";
    e.s(["storageAvailable", 0, e => {
        let t;
        try {
            t = window[e];
            let r = "__storage_test__";
            return t.setItem(r, r), t.removeItem(r), !0
        } catch (e) {
            return e instanceof DOMException && "QuotaExceededError" === e.name && t && 0 !== t.length
        }
    }])
}, 976989, e => {
    "use strict";
    var t = e.i(853712);
    e.s(["default", 0, ({
        className: e,
        width: r = 18,
        height: s = 18
    }) => (0, t.jsx)("svg", {
        className: e,
        width: r,
        height: s,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, t.jsx)("path", {
            d: "M13.8001 10.7556L8.33444 1.26375C8.19785 1.0312 8.00287 0.838382 7.76881 0.704408C7.53476 0.570434 7.26975 0.499954 7.00006 0.499954C6.73037 0.499954 6.46536 0.570434 6.23131 0.704408C5.99725 0.838382 5.80227 1.0312 5.66569 1.26375L0.20006 10.7556C0.0686451 10.9805 -0.000610352 11.2364 -0.000610352 11.4969C-0.000610352 11.7574 0.0686451 12.0132 0.20006 12.2381C0.334892 12.4721 0.529541 12.6659 0.764036 12.7998C0.99853 12.9337 1.26442 13.0028 1.53444 13H12.4657C12.7355 13.0026 13.0011 12.9334 13.2354 12.7995C13.4696 12.6656 13.6641 12.4719 13.7988 12.2381C13.9304 12.0133 13.9999 11.7575 14.0001 11.497C14.0003 11.2365 13.9313 10.9807 13.8001 10.7556ZM6.50006 5.5C6.50006 5.36739 6.55274 5.24021 6.64651 5.14644C6.74027 5.05267 6.86745 5 7.00006 5C7.13267 5 7.25985 5.05267 7.35361 5.14644C7.44738 5.24021 7.50006 5.36739 7.50006 5.5V8C7.50006 8.1326 7.44738 8.25978 7.35361 8.35355C7.25985 8.44732 7.13267 8.5 7.00006 8.5C6.86745 8.5 6.74027 8.44732 6.64651 8.35355C6.55274 8.25978 6.50006 8.1326 6.50006 8V5.5ZM7.00006 11C6.85172 11 6.70672 10.956 6.58338 10.8736C6.46005 10.7912 6.36392 10.6741 6.30715 10.537C6.25038 10.4 6.23553 10.2492 6.26447 10.1037C6.29341 9.95819 6.36484 9.82455 6.46973 9.71967C6.57462 9.61478 6.70826 9.54335 6.85374 9.51441C6.99923 9.48547 7.15003 9.50032 7.28707 9.55709C7.42412 9.61385 7.54125 9.70998 7.62366 9.83332C7.70607 9.95665 7.75006 10.1017 7.75006 10.25C7.75006 10.4489 7.67104 10.6397 7.53039 10.7803C7.38974 10.921 7.19897 11 7.00006 11Z",
            fill: "currentColor"
        })
    })])
}, 346385, 540199, e => {
    "use strict";
    var t = e.i(107579),
        r = e.i(336480),
        s = e.i(413087),
        a = e.i(547249),
        l = e.i(835207);
    e.i(252495);
    var n = e.i(894971),
        i = e.i(352267),
        o = e.i(682677);

    function c(e, c, d) {
        let u = (0, s.useFormValidationState)({
                ...e,
                value: c.isSelected
            }),
            {
                isInvalid: m,
                validationErrors: p,
                validationDetails: f
            } = u.displayValidation,
            {
                labelProps: x,
                inputProps: g,
                isSelected: h,
                isPressed: b,
                isDisabled: v,
                isReadOnly: y
            } = function(e, t, s) {
                let {
                    isDisabled: a = !1,
                    isReadOnly: c = !1,
                    value: d,
                    name: u,
                    children: m,
                    "aria-label": p,
                    "aria-labelledby": f,
                    validationState: x = "valid",
                    isInvalid: g
                } = e, {
                    pressProps: h,
                    isPressed: b
                } = (0, l.usePress)({
                    isDisabled: a
                }), {
                    pressProps: v,
                    isPressed: y
                } = (0, l.usePress)({
                    onPress() {
                        var e;
                        t.toggle(), null == (e = s.current) || e.focus()
                    },
                    isDisabled: a || c
                }), {
                    focusableProps: j
                } = (0, o.useFocusable)(e, s), C = (0, r.mergeProps)(h, j), w = (0, n.filterDOMProps)(e, {
                    labelable: !0
                });
                return (0, i.useFormReset)(s, t.isSelected, t.setSelected), {
                    labelProps: (0, r.mergeProps)(v, {
                        onClick: e => e.preventDefault()
                    }),
                    inputProps: (0, r.mergeProps)(w, {
                        "aria-invalid": g || "invalid" === x || void 0,
                        "aria-errormessage": e["aria-errormessage"],
                        "aria-controls": e["aria-controls"],
                        "aria-readonly": c || void 0,
                        onChange: e => {
                            e.stopPropagation(), t.setSelected(e.target.checked)
                        },
                        disabled: a,
                        ...null == d ? {} : {
                            value: d
                        },
                        name: u,
                        type: "checkbox",
                        ...C
                    }),
                    isSelected: t.isSelected,
                    isPressed: b || y,
                    isDisabled: a,
                    isReadOnly: c,
                    isInvalid: g || "invalid" === x
                }
            }({
                ...e,
                isInvalid: m
            }, c, d);
        (0, a.useFormValidation)(e, u, d);
        let {
            isIndeterminate: j,
            isRequired: C,
            validationBehavior: w = "aria"
        } = e;
        (0, t.useEffect)(() => {
            d.current && (d.current.indeterminate = !!j)
        });
        let {
            pressProps: N
        } = (0, l.usePress)({
            isDisabled: v || y,
            onPress() {
                let {
                    [s.privateValidationStateProp]: t
                } = e, {
                    commitValidation: r
                } = t || u;
                r()
            }
        });
        return {
            labelProps: (0, r.mergeProps)(x, N),
            inputProps: {
                ...g,
                checked: h,
                "aria-required": C && "aria" === w || void 0,
                required: C && "native" === w
            },
            isSelected: h,
            isPressed: b,
            isDisabled: v,
            isReadOnly: y,
            isInvalid: m,
            validationErrors: p,
            validationDetails: f
        }
    }
    e.s(["useCheckbox", () => c], 346385);
    var d = e.i(923689);

    function u(e = {}) {
        var r;
        let {
            isReadOnly: s
        } = e, [a, l] = (0, d.useControlledState)(e.isSelected, e.defaultSelected || !1, e.onChange), [n] = (0, t.useState)(a);
        return {
            isSelected: a,
            defaultSelected: null != (r = e.defaultSelected) ? r : n,
            setSelected: function(e) {
                s || l(e)
            },
            toggle: function() {
                s || l(!a)
            }
        }
    }
    e.s(["useToggleState", () => u], 540199)
}, 472668, (e, t, r) => {
    t.exports = e.g && e.g.Object === Object && e.g
}, 818408, (e, t, r) => {
    var s = e.r(472668),
        a = "object" == typeof self && self && self.Object === Object && self;
    t.exports = s || a || Function("return this")()
}, 407667, (e, t, r) => {
    t.exports = e.r(818408).Symbol
}, 652930, (e, t, r) => {
    var s = e.r(407667),
        a = Object.prototype,
        l = a.hasOwnProperty,
        n = a.toString,
        i = s ? s.toStringTag : void 0;
    t.exports = function(e) {
        var t = l.call(e, i),
            r = e[i];
        try {
            e[i] = void 0;
            var s = !0
        } catch (e) {}
        var a = n.call(e);
        return s && (t ? e[i] = r : delete e[i]), a
    }
}, 21955, (e, t, r) => {
    var s = Object.prototype.toString;
    t.exports = function(e) {
        return s.call(e)
    }
}, 423748, (e, t, r) => {
    var s = e.r(407667),
        a = e.r(652930),
        l = e.r(21955),
        n = s ? s.toStringTag : void 0;
    t.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : n && n in Object(e) ? a(e) : l(e)
    }
}, 819674, (e, t, r) => {
    t.exports = function(e) {
        return null != e && "object" == typeof e
    }
}, 272098, (e, t, r) => {
    t.exports = Array.isArray
}, 791606, (e, t, r) => {
    t.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
}, 363883, (e, t, r) => {
    var s = e.r(423748),
        a = e.r(791606);
    t.exports = function(e) {
        if (!a(e)) return !1;
        var t = s(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
    }
}, 656921, (e, t, r) => {
    t.exports = e.r(818408)["__core-js_shared__"]
}, 763803, (e, t, r) => {
    var s, a = e.r(656921),
        l = (s = /[^.]+$/.exec(a && a.keys && a.keys.IE_PROTO || "")) ? "Symbol(src)_1." + s : "";
    t.exports = function(e) {
        return !!l && l in e
    }
}, 395331, (e, t, r) => {
    var s = Function.prototype.toString;
    t.exports = function(e) {
        if (null != e) {
            try {
                return s.call(e)
            } catch (e) {}
            try {
                return e + ""
            } catch (e) {}
        }
        return ""
    }
}, 732150, (e, t, r) => {
    var s = e.r(363883),
        a = e.r(763803),
        l = e.r(791606),
        n = e.r(395331),
        i = /^\[object .+?Constructor\]$/,
        o = Object.prototype,
        c = Function.prototype.toString,
        d = o.hasOwnProperty,
        u = RegExp("^" + c.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function(e) {
        return !(!l(e) || a(e)) && (s(e) ? u : i).test(n(e))
    }
}, 861686, (e, t, r) => {
    t.exports = function(e, t) {
        return null == e ? void 0 : e[t]
    }
}, 622280, (e, t, r) => {
    var s = e.r(732150),
        a = e.r(861686);
    t.exports = function(e, t) {
        var r = a(e, t);
        return s(r) ? r : void 0
    }
}, 475200, e => {
    "use strict";
    var t = e.i(107579);
    e.s(["default", 0, (e = 768) => {
        let [r, s] = (0, t.useState)(window.innerWidth <= e);
        return (0, t.useEffect)(() => {
            let t = () => {
                s(window.innerWidth <= e)
            };
            return window.addEventListener("resize", t), () => window.removeEventListener("resize", t)
        }, []), r
    }])
}, 239273, e => {
    "use strict";
    var t = e.i(107579);
    e.s(["default", 0, e => {
        let [r, s] = (0, t.useState)("");
        return (0, t.useEffect)(() => {
            s(document.cookie)
        }, []), [(0, t.useMemo)(() => r?.split("; ")?.find(t => t.includes(e)), [r, e])]
    }])
}, 436324, e => {
    "use strict";
    var t = e.i(853712),
        r = e.i(677278),
        s = e.i(107579),
        a = e.i(749583),
        l = e.i(222061),
        n = e.i(829483),
        i = e.i(662380),
        o = e.i(179695),
        c = e.i(394261),
        d = e.i(545487),
        u = e.i(239273),
        m = e.i(191111),
        p = e.i(396241),
        f = e.i(869324),
        x = e.i(497492);
    let g = ({
        form: e,
        close: g,
        isGrowForm: h
    }) => {
        let b = (0, x.getFilteredQueryParams)(["sfcid", "sflsa", "sfit"], h),
            v = (0, x.getQueryParams)(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"], !0),
            [y, j] = (0, s.useState)(!1),
            {
                setFormSubmitted: C
            } = (0, d.useResourcesDetailContext)(),
            [w] = (0, u.default)("ELOQUA"),
            {
                handleSubmit: N,
                control: k,
                setValue: S,
                watch: P,
                getValues: E,
                formState: {
                    isSubmitting: T
                }
            } = (0, m.useForm)({
                reValidateMode: "onChange",
                mode: "onChange"
            }),
            O = P(p.COUNTRY_CODE);
        return y && e?.successMessage?.showSuccessMessage ? (0, t.jsxs)("div", {
            className: "flex flex-col items-center justify-center p-8 text-center",
            children: [e.successMessage.title && (0, t.jsx)("h3", {
                className: "mb-4 text-xl font-semibold text-gray-900",
                children: e.successMessage.title
            }), e.successMessage.description && (0, t.jsx)("p", {
                className: "mb-6 text-gray-600",
                children: e.successMessage.description
            }), e?.successMessage?.closeButtonText && (0, t.jsx)(a.default, {
                onPress: g,
                className: "[&>div>span]:!text-black hover:[&>div>span]:!underline",
                variant: "secondary",
                children: e?.successMessage?.closeButtonText
            })]
        }) : (0, t.jsxs)(c.default, {
            onSubmit: N(t => {
                let s = h ? (({
                        emailConfirmation: e,
                        ghandler: t,
                        gcid: r,
                        growDivision: s,
                        growDepartment: a
                    }) => ({
                        emailConfirmation: e,
                        ghandler: t,
                        gcid: r,
                        growDivision: s,
                        growDepartment: a,
                        grow: !0
                    }))(e?.sfdcIntegration || {}) : e?.sfdcIntegration,
                    a = e?.fields ? (0, x.getAlwaysSendOnData)(e.fields, E, O) : {};
                t.elqCustomerGUID = w?.split("&")?.[0]?.split("GUID=")?.[1] || "", t = {
                    ...t,
                    ...s,
                    ...a,
                    ...v,
                    ...b,
                    ...e?.extraFields
                }, fetch("https://create.unity.com/e/f2", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: new URLSearchParams((0, x.cleanData)(t)).toString()
                }).then(() => {
                    (0, f.default)({
                        properties: {
                            form_action: "submitted",
                            form_id: t.elqFormID,
                            form_name: t.elqFormName,
                            form_customer_id: t.elqCustomerGUID
                        }
                    }), C(!0), e?.successMessage?.showSuccessMessage ? j(!0) : g()
                }).catch(e => r.captureException(e))
            }),
            children: [(0, t.jsx)("div", {
                className: "flex flex-col [&>*]:mt-3",
                children: e?.fields && e?.fields.map((e, r) => {
                    switch (e.formField) {
                        case "input":
                            return (0, t.jsx)(l.default, {
                                ...e,
                                control: k,
                                countryCode: O
                            }, r);
                        case "checkbox":
                            return (0, t.jsx)(n.default, {
                                countryCode: O,
                                ...e,
                                control: k
                            }, r);
                        case "dropdown":
                            return (0, t.jsx)(i.default, {
                                countryCode: O,
                                ...e,
                                control: k,
                                setValue: S
                            }, r);
                        case "richText":
                            return (0, t.jsx)(o.default, {
                                ...e,
                                control: k,
                                countryCode: O
                            }, r)
                    }
                })
            }), e?.actions && (0, t.jsxs)("div", {
                className: "mt-10 border-t border-t-gray-200 pt-6",
                children: [e?.actions?.primaryActionText && (0, t.jsx)(a.default, {
                    type: "submit",
                    rounded: !0,
                    hasArrow: !0,
                    disabled: T,
                    children: e?.actions?.primaryActionText
                }), e?.actions?.secondaryActionText && (0, t.jsx)(a.default, {
                    onPress: g,
                    className: "[&>div>span]:!text-black hover:[&>div>span]:!underline",
                    variant: "secondary",
                    children: e?.actions?.secondaryActionText
                })]
            })]
        })
    };
    e.s(["FormBuilder", () => g])
}, 644995, e => {
    "use strict";
    var t = e.i(853712);
    e.s(["default", 0, ({
        className: e = "",
        width: r = 16,
        height: s = 16
    }) => (0, t.jsxs)("svg", {
        width: r,
        height: s,
        viewBox: "0 0 256 256",
        xmlns: "http://www.w3.org/2000/svg",
        className: e,
        children: [(0, t.jsx)("rect", {
            width: "256",
            height: "256",
            fill: "none"
        }), (0, t.jsx)("line", {
            x1: "200",
            y1: "56",
            x2: "56",
            y2: "200",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16"
        }), (0, t.jsx)("line", {
            x1: "200",
            y1: "200",
            x2: "56",
            y2: "56",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16"
        })]
    })])
}, 783078, e => {
    "use strict";
    var t, r = ((t = r || {})[t.Small = 425] = "Small", t[t.Medium = 744] = "Medium", t[t.Large = 1024] = "Large", t[t.XLarge = 1440] = "XLarge", t);
    e.s(["default", 0, r])
}, 74136, (e, t, r) => {
    t.exports = e.r(622280)(e.r(818408), "Map")
}, 193863, (e, t, r) => {
    e.e, t.exports = function(e, t) {
        if (void 0 == t && (t = {
                fuzzy: !0
            }), /youtu\.?be/.test(e)) {
            var r, s = [/youtu\.be\/([^#\&\?]{11})/, /\?v=([^#\&\?]{11})/, /\&v=([^#\&\?]{11})/, /embed\/([^#\&\?]{11})/, /\/v\/([^#\&\?]{11})/];
            for (r = 0; r < s.length; ++r)
                if (s[r].test(e)) return s[r].exec(e)[1];
            if (t.fuzzy) {
                var a = e.split(/[\/\&\?=#\.\s]/g);
                for (r = 0; r < a.length; ++r)
                    if (/^[^#\&\?]{11}$/.test(a[r])) return a[r]
            }
        }
        return null
    }
}, 387660, e => {
    "use strict";
    var t = e.i(869324);
    e.s(["pushVideoEvent", 0, e => {
        let r = (({
            name: e,
            videoDuration: t,
            videoProgress: r
        }) => ({
            event: "userEvent",
            event_name: e,
            properties: {
                video_duration: t,
                video_progress: r
            }
        }))(e);
        (0, t.default)(r)
    }])
}, 745021, e => {
    "use strict";
    var t = e.i(107579),
        r = function() {
            return (r = Object.assign || function(e) {
                for (var t, r = 1, s = arguments.length; r < s; r++)
                    for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }).apply(this, arguments)
        },
        s = t.forwardRef(function(e, s) {
            var a = t.useState(!1),
                l = a[0],
                n = a[1],
                i = t.useState(!1),
                o = i[0],
                c = i[1],
                d = encodeURIComponent(e.id),
                u = "string" == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
                m = e.title,
                p = e.poster || "hqdefault",
                f = "&".concat(e.params) || "",
                x = e.muted ? "&mute=1" : "",
                g = e.announce || "Watch",
                h = e.webp ? "webp" : "jpg",
                b = e.webp ? "vi_webp" : "vi",
                v = e.thumbnail || (e.playlist ? "https://i.ytimg.com/".concat(b, "/").concat(u, "/").concat(p, ".").concat(h) : "https://i.ytimg.com/".concat(b, "/").concat(d, "/").concat(p, ".").concat(h)),
                y = e.noCookie ? "https://www.youtube-nocookie.com" : "https://www.youtube.com";
            y = e.cookie ? "https://www.youtube.com" : "https://www.youtube-nocookie.com";
            var j = e.playlist ? "".concat(y, "/embed/videoseries?autoplay=1").concat(x, "&list=").concat(d).concat(f) : "".concat(y, "/embed/").concat(d, "?autoplay=1&state=1").concat(x).concat(f),
                C = e.activatedClass || "lyt-activated",
                w = e.adNetwork || !1,
                N = e.aspectHeight || 9,
                k = e.aspectWidth || 16,
                S = e.iframeClass || "",
                P = e.playerClass || "lty-playbtn",
                E = e.wrapperClass || "yt-lite",
                T = e.onIframeAdded || function() {},
                O = e.rel ? "prefetch" : "preload",
                L = e.containerElement || "article";
            return t.useEffect(function() {
                o && T()
            }, [o]), t.createElement(t.Fragment, null, t.createElement("link", {
                rel: O,
                href: v,
                as: "image"
            }), t.createElement(t.Fragment, null, l && t.createElement(t.Fragment, null, t.createElement("link", {
                rel: "preconnect",
                href: y
            }), t.createElement("link", {
                rel: "preconnect",
                href: "https://www.google.com"
            }), w && t.createElement(t.Fragment, null, t.createElement("link", {
                rel: "preconnect",
                href: "https://static.doubleclick.net"
            }), t.createElement("link", {
                rel: "preconnect",
                href: "https://googleads.g.doubleclick.net"
            })))), t.createElement(L, {
                onPointerOver: function() {
                    l || n(!0)
                },
                onClick: function() {
                    o || c(!0)
                },
                className: "".concat(E, " ").concat(o ? C : ""),
                "data-title": m,
                style: r({
                    backgroundImage: "url(".concat(v, ")")
                }, {
                    "--aspect-ratio": "".concat(N / k * 100, "%")
                })
            }, t.createElement("button", {
                type: "button",
                className: P,
                "aria-label": "".concat(g, " ").concat(m)
            }), o && t.createElement("iframe", {
                ref: s,
                className: S,
                title: m,
                width: "560",
                height: "315",
                frameBorder: "0",
                allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: !0,
                src: j
            })))
        });
    e.s(["default", () => s])
}, 195051, e => {
    "use strict";
    var t = e.i(853712),
        r = e.i(654816),
        s = e.i(749583),
        a = e.i(239273),
        l = e.i(805518);
    e.s(["default", 0, ({
        blockedMessage: e,
        consentButtonLabel: n
    }) => {
        let i = "C0004";
        return (0, t.jsx)(t.Fragment, {
            children: !(() => {
                let [e] = (0, a.default)("OptanonConsent") || "", t = {};
                return e && e.split("groups=")[1].split("&")[0].split("%2C").forEach(e => {
                    let [r, s] = e.split("%3A");
                    t[r] = parseInt(s)
                }), t[i]
            })() && (0, t.jsxs)("div", {
                className: "consent absolute top-0 right-0 bottom-0 left-0 z-10 flex flex-col items-center overflow-auto rounded-2xl bg-black p-3 leading-5 text-white opacity-90 sm:justify-center sm:p-5",
                children: [(0, t.jsx)(l.default, {
                    className: "mx-auto text-center sm:w-4/5 sm:text-base",
                    children: (0, t.jsx)(r.PortableText, {
                        value: e
                    })
                }), (0, t.jsx)("div", {
                    className: "mt-5",
                    children: (0, t.jsx)(s.default, {
                        rounded: !0,
                        target: "_self",
                        variant: "primary",
                        onPress: () => {
                            let e = document.getElementById("ot-sdk-btn"),
                                t = document.getElementById(`ot-header-id-${i}`),
                                r = window;
                            r && r.OneTrust ? r.OneTrust.ToggleInfoDisplay() : e.click(), t.click()
                        },
                        children: n
                    })
                })]
            })
        })
    }])
}, 224601, 934172, e => {
    "use strict";
    var t = e.i(853712),
        r = e.i(107579),
        s = e.i(993358),
        a = e.i(193863),
        l = e.i(745021),
        n = e.i(363737),
        i = e.i(749583),
        o = e.i(644995),
        c = e.i(195051),
        d = e.i(200069),
        u = e.i(387660);
    let m = (e, t = !0) => {
        let [s, a] = (0, r.useState)(null);
        return (0, r.useEffect)(() => {
            let r;
            return t && e.current && (r = setInterval(() => {
                let t = window.YT;
                t && e.current && (a(new t.Player(e.current)), clearInterval(r))
            }, 500)), () => {
                a(null), clearInterval(r)
            }
        }, [t, e]), {
            player: s
        }
    };
    e.s(["useYoutubeAPI", 0, m], 934172), e.s(["default", 0, ({
        title: e,
        url: p,
        container: f = !1,
        blockedMessage: x,
        consentButtonLabel: g
    }) => {
        let h = (0, a.default)(p),
            [b, v] = (0, r.useState)(!1),
            y = (0, r.useRef)(null),
            j = (0, r.useRef)(null),
            {
                player: C
            } = m(y, b),
            w = () => {
                v(!0)
            };
        return (0, r.useEffect)(() => {
            C && (j.current = C.addEventListener("onStateChange", e => {
                if ([1, 2].includes(e.data)) {
                    let t = "function" == typeof C.getDuration && C.getDuration() || 0,
                        r = Number((("function" == typeof C.getCurrentTime && C.getCurrentTime() || 0) / t * 100).toFixed(2)),
                        s = 1 === e.data ? "video_play" : "video_pause";
                    (0, u.pushVideoEvent)({
                        name: s,
                        videoDuration: t,
                        videoProgress: (Number.isNaN(r), r)
                    })
                }
            }))
        }, [C]), (0, r.useEffect)(() => {
            if (!b && C?.playerInfo?.playerState === 1) {
                let e = "function" == typeof C.getDuration && C.getDuration() || 0,
                    t = Number((("function" == typeof C.getCurrentTime && C.getCurrentTime() || 0) / e * 100).toFixed(2));
                (0, u.pushVideoEvent)({
                    name: "video_pause",
                    videoDuration: e,
                    videoProgress: (Number.isNaN(t), t)
                })
            }
        }, [b, C]), (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(d.default, {
                src: "https://www.youtube.com/iframe_api"
            }), (0, t.jsxs)("div", {
                className: "relative h-full w-full self-center p-4 lg:p-0",
                children: [p && h && (0, t.jsxs)("div", {
                    className: "yt-lite z-10 h-full overflow-auto",
                    ...{
                        tabIndex: 0,
                        role: "button",
                        onClick: w,
                        onKeyDown: e => {
                            ("Enter" === e.key || "Space" === e.key) && w()
                        }
                    },
                    children: [(0, t.jsx)("div", {
                        className: "lty-playbtn"
                    }), (0, t.jsx)(s.default, {
                        className: "!relative",
                        style: {
                            borderRadius: "24px"
                        },
                        src: `https://img.youtube.com/vi/${h}/hqdefault.jpg`,
                        alt: e,
                        fill: !0
                    }), (0, t.jsx)(c.default, {
                        blockedMessage: x,
                        consentButtonLabel: g
                    })]
                }), (0, t.jsx)(n.default, {
                    isOpen: b,
                    onOpenChange: v,
                    showTriggerButton: !1,
                    children: (0, t.jsxs)("div", {
                        className: "z-50 mt-20 flex w-10/12 flex-col rounded-3xl bg-black p-4 lg:w-8/12",
                        tabIndex: -1,
                        children: [(0, t.jsx)(i.default, {
                            onPress: () => {
                                v(!1)
                            },
                            variant: "secondary",
                            className: "self-end overflow-hidden",
                            children: (0, t.jsx)(o.default, {
                                className: "z-[60] h-5 w-5 text-white"
                            })
                        }), (0, t.jsx)(l.default, {
                            id: h,
                            title: e,
                            iframeClass: "yt-iframe",
                            poster: "hqdefault",
                            ref: y,
                            params: "enablejsapi=1"
                        }), (0, t.jsx)(c.default, {
                            blockedMessage: x,
                            consentButtonLabel: g
                        })]
                    })
                })]
            })]
        })
    }], 224601)
}, 210310, e => {
    "use strict";
    var t = e.i(853712),
        r = e.i(107579),
        s = e.i(749583),
        a = e.i(206775),
        l = e.i(652955),
        n = e.i(672153),
        i = e.i(722978),
        o = e.i(805518),
        c = e.i(363737);
    let d = ({
            className: e
        }) => (0, t.jsx)("svg", {
            className: e,
            width: "17",
            height: "16",
            viewBox: "0 0 17 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, t.jsx)("g", {
                id: "ð· ArrowsOutSimple",
                children: (0, t.jsx)("path", {
                    id: "Vector",
                    d: "M13.7144 3V6C13.7144 6.13261 13.6617 6.25979 13.5679 6.35355C13.4741 6.44732 13.347 6.5 13.2144 6.5C13.0817 6.5 12.9546 6.44732 12.8608 6.35355C12.767 6.25979 12.7144 6.13261 12.7144 6V4.20687L9.56811 7.35375C9.47429 7.44757 9.34704 7.50028 9.21436 7.50028C9.08167 7.50028 8.95443 7.44757 8.86061 7.35375C8.76678 7.25993 8.71408 7.13268 8.71408 7C8.71408 6.86732 8.76678 6.74007 8.86061 6.64625L12.0075 3.5H10.2144C10.0817 3.5 9.95457 3.44732 9.8608 3.35355C9.76703 3.25979 9.71436 3.13261 9.71436 3C9.71436 2.86739 9.76703 2.74021 9.8608 2.64645C9.95457 2.55268 10.0817 2.5 10.2144 2.5H13.2144C13.347 2.5 13.4741 2.55268 13.5679 2.64645C13.6617 2.74021 13.7144 2.86739 13.7144 3ZM6.86061 8.64625L3.71436 11.7931V10C3.71436 9.86739 3.66168 9.74021 3.56791 9.64645C3.47414 9.55268 3.34696 9.5 3.21436 9.5C3.08175 9.5 2.95457 9.55268 2.8608 9.64645C2.76703 9.74021 2.71436 9.86739 2.71436 10V13C2.71436 13.1326 2.76703 13.2598 2.8608 13.3536C2.95457 13.4473 3.08175 13.5 3.21436 13.5H6.21436C6.34696 13.5 6.47414 13.4473 6.56791 13.3536C6.66168 13.2598 6.71436 13.1326 6.71436 13C6.71436 12.8674 6.66168 12.7402 6.56791 12.6464C6.47414 12.5527 6.34696 12.5 6.21436 12.5H4.42123L7.56811 9.35375C7.66193 9.25993 7.71463 9.13268 7.71463 9C7.71463 8.86732 7.66193 8.74007 7.56811 8.64625C7.47429 8.55243 7.34704 8.49972 7.21436 8.49972C7.08167 8.49972 6.95443 8.55243 6.86061 8.64625Z",
                    fill: "#3A5BC7"
                })
            })
        }),
        u = ({
            className: e
        }) => (0, t.jsx)("svg", {
            className: e,
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, t.jsx)("g", {
                id: "ð· X",
                children: (0, t.jsx)("path", {
                    id: "Vector",
                    d: "M16.067 15.1828C16.1251 15.2409 16.1712 15.3098 16.2026 15.3857C16.234 15.4615 16.2502 15.5429 16.2502 15.625C16.2502 15.7071 16.234 15.7884 16.2026 15.8643C16.1712 15.9402 16.1251 16.0091 16.067 16.0672C16.009 16.1252 15.94 16.1713 15.8642 16.2027C15.7883 16.2342 15.707 16.2503 15.6249 16.2503C15.5427 16.2503 15.4614 16.2342 15.3855 16.2027C15.3097 16.1713 15.2407 16.1252 15.1827 16.0672L9.99986 10.8836L4.81705 16.0672C4.69977 16.1844 4.54071 16.2503 4.37486 16.2503C4.20901 16.2503 4.04995 16.1844 3.93267 16.0672C3.8154 15.9499 3.74951 15.7908 3.74951 15.625C3.74951 15.4591 3.8154 15.3001 3.93267 15.1828L9.11627 9.99998L3.93267 4.81717C3.8154 4.69989 3.74951 4.54083 3.74951 4.37498C3.74951 4.20913 3.8154 4.05007 3.93267 3.93279C4.04995 3.81552 4.20901 3.74963 4.37486 3.74963C4.54071 3.74963 4.69977 3.81552 4.81705 3.93279L9.99986 9.11639L15.1827 3.93279C15.2999 3.81552 15.459 3.74963 15.6249 3.74963C15.7907 3.74963 15.9498 3.81552 16.067 3.93279C16.1843 4.05007 16.2502 4.20913 16.2502 4.37498C16.2502 4.54083 16.1843 4.69989 16.067 4.81717L10.8835 9.99998L16.067 15.1828Z",
                    fill: "#000000"
                })
            })
        }),
        m = ({
            children: e,
            colTitle: a,
            truncationEnabled: l,
            rowTitle: n,
            className: m = "",
            isTableCell: p
        }) => {
            let [f, x] = (0, r.useState)(!1), [g, h] = (0, r.useState)(!1), b = (0, r.useRef)(null), v = (0, i.default)({
                "cursor-pointer relative": f
            }, m), y = (0, i.default)({
                "line-clamp-3": l
            });
            (0, r.useEffect)(() => {
                let e = b.current;
                e && (e.scrollHeight > e.clientHeight ? x(!0) : x(!1))
            }, [b]);
            let j = () => {
                    h(!0)
                },
                C = l && f ? {
                    tabIndex: 0,
                    role: "button",
                    onClick: j,
                    onKeyDown: e => {
                        ("Enter" === e.key || "Space" === e.key) && j()
                    }
                } : {};
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsxs)("td", {
                    className: (0, i.default)(v, {
                        "bg-gray-50 p-3 dark:bg-gray-900": !p,
                        "h-full !p-0": p
                    }),
                    ...C,
                    children: [p ? e : (0, t.jsx)(o.default, {
                        className: y,
                        ref: b,
                        children: e
                    }), l && f && (0, t.jsx)(d, {
                        className: "absolute top-1.5 right-1.5"
                    })]
                }), (0, t.jsx)(c.default, {
                    isOpen: g,
                    onOpenChange: h,
                    showTriggerButton: !1,
                    children: (0, t.jsxs)("div", {
                        className: "mt-20 flex w-6/12 flex-col rounded-3xl bg-white p-8 dark:bg-gray-800",
                        tabIndex: -1,
                        children: [(0, t.jsx)(s.default, {
                            onPress: () => {
                                h(!1)
                            },
                            variant: "secondary",
                            className: "self-end",
                            children: (0, t.jsx)(u, {})
                        }), (0, t.jsx)(o.default, {
                            className: "caption-sm mb-2.5 text-black dark:text-white",
                            children: n
                        }), (0, t.jsx)("div", {
                            className: "text-heading-sm mb-4 text-black dark:text-white",
                            children: a
                        }), (0, t.jsx)("div", {
                            className: "text-small mb-8",
                            children: (0, t.jsx)(o.default, {
                                className: "text-black dark:text-gray-200",
                                children: e
                            })
                        })]
                    })
                })]
            })
        };
    e.s(["default", 0, ({
        table: e,
        className: c = "",
        verticalHeadingClass: d = "",
        hideTitle: u = !1
    }) => {
        let [p, ...f] = e.rows, x = `align-top text-heading-sm md:text-small-bold rounded-md bg-gray-100 text-gray-800 bg-gray-100 dark:bg-gray-700 md:dark:bg-gray-800 dark:text-gray-200 border-none ${d}`, g = "align-top rounded-md text-sm text-gray-800 dark:text-gray-200 border-none", h = (0, i.default)("w-full table-fixed border-separate border-spacing-2 break-words", c), b = (0, i.default)("h-full table-fixed border-separate border-spacing-1 break-words", c), v = (0, r.useCallback)(e => {
            let [r, ...s] = e.split("\n"), a = s.splice(1).map((e, r) => {
                let s = e.split("|").filter(e => e).map(e => e.trim());
                return (0, t.jsx)("div", {
                    className: "flex grow",
                    children: s.map((e, s) => (0, t.jsx)(n.default, {
                        className: "flex grow basis-0 items-center justify-center rounded-md bg-gray-50 px-6 py-4 text-center dark:bg-gray-900",
                        children: e
                    }, `cell-${r}-${s}-${e}`))
                }, `row-${r}`)
            });
            return (0, t.jsxs)("div", {
                className: "flex h-full flex-col",
                children: [(0, t.jsx)("div", {
                    className: "-ml-1 flex grow",
                    children: r.split("|").filter(e => e).map((e, r) => (0, t.jsx)(n.default, {
                        className: "ml-1 flex grow basis-0 items-center justify-center rounded-md bg-gray-50 px-6 py-4 text-center dark:bg-gray-900",
                        children: e.trim()
                    }, `header-cell-${r}-${e}`))
                }), a]
            })
        }, []), y = (0, r.useMemo)(() => f.map(e => e.cells.reduce((e, r, i) => ({
            ...e,
            [`col${i+1}`]: {
                component: r.startsWith("|") ? v(r) : (0, t.jsx)(n.default, {
                    options: {
                        overrides: {
                            Button: {
                                component: s.default
                            },
                            Label: {
                                component: a.default
                            },
                            Tooltip: {
                                component: l.default
                            }
                        }
                    },
                    children: r
                }),
                isTableCell: r.startsWith("|"),
                cellContent: r
            }
        }), {})), [f, v]), j = (0, r.useMemo)(() => p.cells.map((e, r) => (0, t.jsx)("th", {
            scope: "col",
            className: "min-w-[10rem] rounded-md border-none bg-gray-100 py-3.5 pr-4 pl-4 text-left align-top text-gray-800 dark:bg-gray-800 dark:text-gray-400",
            children: (0, t.jsx)(n.default, {
                options: {
                    overrides: {
                        Button: {
                            component: s.default
                        },
                        Label: {
                            component: a.default
                        },
                        Tooltip: {
                            component: l.default
                        }
                    }
                },
                children: e
            })
        }, `${r}-${e}`)), [p.cells]), C = (0, r.useMemo)(() => y.map((r, s) => {
            let a = Object.values(r),
                l = a[0];
            return (0, t.jsx)("tr", {
                className: "border-separate border-spacing-1",
                children: a.map((r, a) => (0, t.jsx)(m, {
                    isTableCell: r.isTableCell,
                    className: 0 === a ? x : g,
                    rowTitle: l.component,
                    colTitle: 0 !== a && j && j[a] ? j[a] : "",
                    truncationEnabled: e.tableTruncation,
                    children: r.component
                }, `${s}-${a}-${r.cellContent}`))
            }, s)
        }), [j, y, x, e.tableTruncation]), w = (0, r.useMemo)(() => p.cells.map((e, r) => (0, t.jsx)("th", {
            scope: "col",
            className: "text-tiny-bold rounded-md bg-gray-100 py-3.5 pr-4 pl-4 text-left align-top text-gray-800 dark:bg-gray-900 dark:text-gray-400",
            children: (0, t.jsx)(n.default, {
                options: {
                    overrides: {
                        Button: {
                            component: s.default
                        },
                        Label: {
                            component: a.default
                        },
                        Tooltip: {
                            component: l.default
                        }
                    }
                },
                children: e
            })
        }, `${r}-${e}`)), [p]), N = (0, r.useMemo)(() => y.map((e, r) => (0, t.jsx)("div", {
            className: "mb-4 min-w-full rounded-md bg-gray-100 align-middle dark:bg-gray-700",
            children: (0, t.jsxs)("table", {
                className: h,
                children: [p && p.cells.length > 0 && (0, t.jsx)("thead", {
                    className: "hidden",
                    children: (0, t.jsx)("tr", {
                        className: "border-separate border-spacing-1",
                        children: w
                    })
                }), (0, t.jsx)("tbody", {
                    className: "table-row-group bg-gray-50 dark:bg-gray-900",
                    children: Object.values(e).map((e, i) => e ? (0, t.jsx)("tr", {
                        className: "rounded-md",
                        children: (0, t.jsxs)("td", {
                            className: 0 === i ? x : g,
                            children: [0 !== i && p && p.cells[i] && (0, t.jsx)(n.default, {
                                options: {
                                    overrides: {
                                        Button: {
                                            component: s.default
                                        },
                                        Label: {
                                            component: a.default
                                        },
                                        Tooltip: {
                                            component: l.default
                                        }
                                    }
                                },
                                children: p.cells[i]
                            }), (0, t.jsx)(o.default, {
                                children: e.component
                            })]
                        })
                    }, `${r}-${i}-${p.cells[i]}`) : null)
                })]
            })
        }, `row-${r}`)), [y, p, h, x, w]);
        return (0, t.jsxs)("div", {
            children: [(0, t.jsx)("div", {
                className: "sm:flex sm:items-center",
                children: (0, t.jsxs)("div", {
                    className: "sm:flex-auto",
                    children: [!u && e.tableTitle && (0, t.jsx)("div", {
                        className: "text-heading-sm",
                        children: e.tableTitle
                    }), !u && e.tableDescription && (0, t.jsx)("p", {
                        className: "text-body mt-2",
                        children: e.tableDescription
                    })]
                })
            }), (0, t.jsx)("div", {
                className: "mt-8 flow-root",
                children: (0, t.jsxs)("div", {
                    className: "-mx-4 -my-2 overflow-visible sm:-mx-6 lg:-mx-8",
                    children: [(0, t.jsx)("div", {
                        className: "hidden min-w-full rounded-md bg-gray-100 align-middle sm:px-6 md:inline-block md:rounded-none md:bg-transparent",
                        children: (0, t.jsxs)("table", {
                            className: b,
                            children: [j && (0, t.jsx)("thead", {
                                className: "table-header-group",
                                children: (0, t.jsx)("tr", {
                                    className: "border-separate border-spacing-1",
                                    children: j
                                })
                            }), (0, t.jsx)("tbody", {
                                className: "table-row-group",
                                children: C
                            })]
                        })
                    }), (0, t.jsxs)("div", {
                        className: "md:hidden",
                        children: [(0, t.jsx)("div", {
                            className: "text-body-bold mb-4",
                            children: (0, t.jsx)(n.default, {
                                options: {
                                    overrides: {
                                        Button: {
                                            component: s.default
                                        },
                                        Label: {
                                            component: a.default
                                        },
                                        Tooltip: {
                                            component: l.default
                                        }
                                    }
                                },
                                children: p && p.cells && p.cells[0] ? p.cells[0] : ""
                            })
                        }), N]
                    })]
                })
            })]
        })
    }], 210310)
}, 883027, e => {
    "use strict";
    var t = e.i(853712),
        r = e.i(722978),
        s = e.i(749583),
        a = e.i(475200);
    e.s(["default", 0, ({
        pdf: e,
        hidePdfToolbar: l,
        url: n,
        mobilePdfButtonText: i,
        title: o,
        visualOptions: c,
        theme: d,
        isHidden: u
    }) => {
        let m = (0, a.default)(),
            p = e ? e.cdnURL : n,
            f = (0, r.default)("mb-8 md:mb-12", {
                "bg-black py-16": c?.container && "dark" === d,
                "bg-white py-16": c?.container && "light" === d
            }),
            x = (0, r.default)({
                container: c?.container
            }),
            g = e && m;
        return (0, t.jsx)(t.Fragment, {
            children: !u && (0, t.jsx)("div", {
                className: f,
                children: (0, t.jsx)("div", {
                    className: x,
                    children: (0, t.jsxs)("div", {
                        className: "relative",
                        children: [(0, t.jsx)("iframe", {
                            className: "aspect-[4/3] w-full rounded-xl",
                            src: `${p}?#view=fit&navpanes=0${l?"&toolbar=0":""}`,
                            title: o ?? ""
                        }), g && (0, t.jsx)("div", {
                            className: "absolute inset-0 flex items-center justify-center rounded-xl bg-black/80",
                            children: (0, t.jsx)(s.default, {
                                href: p,
                                variant: "primary",
                                size: "large",
                                rounded: !0,
                                children: i || "PDF"
                            })
                        })]
                    })
                })
            })
        })
    }], 883027)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "23d430f0-d03d-50b9-a57b-fa3ba56d6e4c")
    } catch (e) {}
}();
//# debugId=23d430f0-d03d-50b9-a57b-fa3ba56d6e4c