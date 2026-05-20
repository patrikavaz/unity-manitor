(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 505918, (e, r, t) => {
    r.exports = e.g && e.g.Object === Object && e.g
}, 78974, (e, r, t) => {
    var s = e.r(505918),
        n = "object" == typeof self && self && self.Object === Object && self;
    r.exports = s || n || Function("return this")()
}, 328042, (e, r, t) => {
    r.exports = e.r(78974).Symbol
}, 684435, (e, r, t) => {
    var s = e.r(328042),
        n = Object.prototype,
        i = n.hasOwnProperty,
        a = n.toString,
        o = s ? s.toStringTag : void 0;
    r.exports = function(e) {
        var r = i.call(e, o),
            t = e[o];
        try {
            e[o] = void 0;
            var s = !0
        } catch (e) {}
        var n = a.call(e);
        return s && (r ? e[o] = t : delete e[o]), n
    }
}, 933680, (e, r, t) => {
    var s = Object.prototype.toString;
    r.exports = function(e) {
        return s.call(e)
    }
}, 416907, (e, r, t) => {
    var s = e.r(328042),
        n = e.r(684435),
        i = e.r(933680),
        a = s ? s.toStringTag : void 0;
    r.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? n(e) : i(e)
    }
}, 394022, (e, r, t) => {
    r.exports = function(e) {
        return null != e && "object" == typeof e
    }
}, 778116, (e, r, t) => {
    r.exports = Array.isArray
}, 878524, (e, r, t) => {
    r.exports = function(e) {
        var r = typeof e;
        return null != e && ("object" == r || "function" == r)
    }
}, 462931, (e, r, t) => {
    var s = e.r(416907),
        n = e.r(878524);
    r.exports = function(e) {
        if (!n(e)) return !1;
        var r = s(e);
        return "[object Function]" == r || "[object GeneratorFunction]" == r || "[object AsyncFunction]" == r || "[object Proxy]" == r
    }
}, 118309, (e, r, t) => {
    r.exports = e.r(78974)["__core-js_shared__"]
}, 799822, (e, r, t) => {
    var s, n = e.r(118309),
        i = (s = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "")) ? "Symbol(src)_1." + s : "";
    r.exports = function(e) {
        return !!i && i in e
    }
}, 908829, (e, r, t) => {
    var s = Function.prototype.toString;
    r.exports = function(e) {
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
}, 143245, (e, r, t) => {
    var s = e.r(462931),
        n = e.r(799822),
        i = e.r(878524),
        a = e.r(908829),
        o = /^\[object .+?Constructor\]$/,
        l = Object.prototype,
        c = Function.prototype.toString,
        u = l.hasOwnProperty,
        d = RegExp("^" + c.call(u).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    r.exports = function(e) {
        return !(!i(e) || n(e)) && (s(e) ? d : o).test(a(e))
    }
}, 92117, (e, r, t) => {
    r.exports = function(e, r) {
        return null == e ? void 0 : e[r]
    }
}, 581511, (e, r, t) => {
    var s = e.r(143245),
        n = e.r(92117);
    r.exports = function(e, r) {
        var t = n(e, r);
        return s(t) ? t : void 0
    }
}, 475200, e => {
    "use strict";
    var r = e.i(3931);
    e.s(["default", 0, (e = 768) => {
        let [t, s] = (0, r.useState)(window.innerWidth <= e);
        return (0, r.useEffect)(() => {
            let r = () => {
                s(window.innerWidth <= e)
            };
            return window.addEventListener("resize", r), () => window.removeEventListener("resize", r)
        }, []), t
    }])
}, 239273, e => {
    "use strict";
    var r = e.i(3931);
    e.s(["default", 0, e => {
        let [t, s] = (0, r.useState)("");
        return (0, r.useEffect)(() => {
            s(document.cookie)
        }, []), [(0, r.useMemo)(() => t?.split("; ")?.find(r => r.includes(e)), [t, e])]
    }])
}, 957885, 900448, e => {
    "use strict";
    var r = e.i(3931),
        t = e.i(604082),
        s = e.i(318601),
        n = e.i(623706),
        i = e.i(212299);
    e.i(788727);
    var a = e.i(339206),
        o = e.i(682792),
        l = e.i(7180);
    e.s(["useCheckbox", 0, function(e, c, u) {
        let d = (0, s.useFormValidationState)({
                ...e,
                value: c.isSelected
            }),
            {
                isInvalid: f,
                validationErrors: p,
                validationDetails: m
            } = d.displayValidation,
            {
                labelProps: g,
                inputProps: x,
                isSelected: v,
                isPressed: b,
                isDisabled: y,
                isReadOnly: h
            } = function(e, r, s) {
                let {
                    isDisabled: n = !1,
                    isReadOnly: c = !1,
                    value: u,
                    name: d,
                    children: f,
                    "aria-label": p,
                    "aria-labelledby": m,
                    validationState: g = "valid",
                    isInvalid: x
                } = e, {
                    pressProps: v,
                    isPressed: b
                } = (0, i.usePress)({
                    isDisabled: n
                }), {
                    pressProps: y,
                    isPressed: h
                } = (0, i.usePress)({
                    onPress() {
                        var e;
                        r.toggle(), null == (e = s.current) || e.focus()
                    },
                    isDisabled: n || c
                }), {
                    focusableProps: j
                } = (0, l.useFocusable)(e, s), O = (0, t.mergeProps)(v, j), w = (0, a.filterDOMProps)(e, {
                    labelable: !0
                });
                return (0, o.useFormReset)(s, r.isSelected, r.setSelected), {
                    labelProps: (0, t.mergeProps)(y, {
                        onClick: e => e.preventDefault()
                    }),
                    inputProps: (0, t.mergeProps)(w, {
                        "aria-invalid": x || "invalid" === g || void 0,
                        "aria-errormessage": e["aria-errormessage"],
                        "aria-controls": e["aria-controls"],
                        "aria-readonly": c || void 0,
                        onChange: e => {
                            e.stopPropagation(), r.setSelected(e.target.checked)
                        },
                        disabled: n,
                        ...null == u ? {} : {
                            value: u
                        },
                        name: d,
                        type: "checkbox",
                        ...O
                    }),
                    isSelected: r.isSelected,
                    isPressed: b || h,
                    isDisabled: n,
                    isReadOnly: c,
                    isInvalid: x || "invalid" === g
                }
            }({
                ...e,
                isInvalid: f
            }, c, u);
        (0, n.useFormValidation)(e, d, u);
        let {
            isIndeterminate: j,
            isRequired: O,
            validationBehavior: w = "aria"
        } = e;
        (0, r.useEffect)(() => {
            u.current && (u.current.indeterminate = !!j)
        });
        let {
            pressProps: C
        } = (0, i.usePress)({
            isDisabled: y || h,
            onPress() {
                let {
                    [s.privateValidationStateProp]: r
                } = e, {
                    commitValidation: t
                } = r || d;
                t()
            }
        });
        return {
            labelProps: (0, t.mergeProps)(g, C),
            inputProps: {
                ...x,
                checked: v,
                "aria-required": O && "aria" === w || void 0,
                required: O && "native" === w
            },
            isSelected: v,
            isPressed: b,
            isDisabled: y,
            isReadOnly: h,
            isInvalid: f,
            validationErrors: p,
            validationDetails: m
        }
    }], 957885);
    var c = e.i(201373);
    e.s(["useToggleState", 0, function(e = {}) {
        var t;
        let {
            isReadOnly: s
        } = e, [n, i] = (0, c.useControlledState)(e.isSelected, e.defaultSelected || !1, e.onChange), [a] = (0, r.useState)(n);
        return {
            isSelected: n,
            defaultSelected: null != (t = e.defaultSelected) ? t : a,
            setSelected: function(e) {
                s || i(e)
            },
            toggle: function() {
                s || i(!n)
            }
        }
    }], 900448)
}, 649051, e => {
    "use strict";
    e.s(["storageAvailable", 0, e => {
        let r;
        try {
            r = window[e];
            let t = "__storage_test__";
            return r.setItem(t, t), r.removeItem(t), !0
        } catch (e) {
            return e instanceof DOMException && "QuotaExceededError" === e.name && r && 0 !== r.length
        }
    }])
}, 976989, e => {
    "use strict";
    var r = e.i(500783);
    e.s(["default", 0, ({
        className: e,
        width: t = 18,
        height: s = 18
    }) => (0, r.jsx)("svg", {
        className: e,
        width: t,
        height: s,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, r.jsx)("path", {
            d: "M13.8001 10.7556L8.33444 1.26375C8.19785 1.0312 8.00287 0.838382 7.76881 0.704408C7.53476 0.570434 7.26975 0.499954 7.00006 0.499954C6.73037 0.499954 6.46536 0.570434 6.23131 0.704408C5.99725 0.838382 5.80227 1.0312 5.66569 1.26375L0.20006 10.7556C0.0686451 10.9805 -0.000610352 11.2364 -0.000610352 11.4969C-0.000610352 11.7574 0.0686451 12.0132 0.20006 12.2381C0.334892 12.4721 0.529541 12.6659 0.764036 12.7998C0.99853 12.9337 1.26442 13.0028 1.53444 13H12.4657C12.7355 13.0026 13.0011 12.9334 13.2354 12.7995C13.4696 12.6656 13.6641 12.4719 13.7988 12.2381C13.9304 12.0133 13.9999 11.7575 14.0001 11.497C14.0003 11.2365 13.9313 10.9807 13.8001 10.7556ZM6.50006 5.5C6.50006 5.36739 6.55274 5.24021 6.64651 5.14644C6.74027 5.05267 6.86745 5 7.00006 5C7.13267 5 7.25985 5.05267 7.35361 5.14644C7.44738 5.24021 7.50006 5.36739 7.50006 5.5V8C7.50006 8.1326 7.44738 8.25978 7.35361 8.35355C7.25985 8.44732 7.13267 8.5 7.00006 8.5C6.86745 8.5 6.74027 8.44732 6.64651 8.35355C6.55274 8.25978 6.50006 8.1326 6.50006 8V5.5ZM7.00006 11C6.85172 11 6.70672 10.956 6.58338 10.8736C6.46005 10.7912 6.36392 10.6741 6.30715 10.537C6.25038 10.4 6.23553 10.2492 6.26447 10.1037C6.29341 9.95819 6.36484 9.82455 6.46973 9.71967C6.57462 9.61478 6.70826 9.54335 6.85374 9.51441C6.99923 9.48547 7.15003 9.50032 7.28707 9.55709C7.42412 9.61385 7.54125 9.70998 7.62366 9.83332C7.70607 9.95665 7.75006 10.1017 7.75006 10.25C7.75006 10.4489 7.67104 10.6397 7.53039 10.7803C7.38974 10.921 7.19897 11 7.00006 11Z",
            fill: "currentColor"
        })
    })])
}, 238591, (e, r, t) => {
    var s = e.r(416907),
        n = e.r(394022);
    r.exports = function(e) {
        return n(e) && "[object Arguments]" == s(e)
    }
}, 410090, (e, r, t) => {
    var s = e.r(238591),
        n = e.r(394022),
        i = Object.prototype,
        a = i.hasOwnProperty,
        o = i.propertyIsEnumerable;
    r.exports = s(function() {
        return arguments
    }()) ? s : function(e) {
        return n(e) && a.call(e, "callee") && !o.call(e, "callee")
    }
}, 820092, (e, r, t) => {
    var s = Object.prototype;
    r.exports = function(e) {
        var r = e && e.constructor;
        return e === ("function" == typeof r && r.prototype || s)
    }
}, 216158, (e, r, t) => {
    r.exports = function(e, r) {
        return function(t) {
            return e(r(t))
        }
    }
}, 394272, (e, r, t) => {
    r.exports = e.r(216158)(Object.keys, Object)
}, 668488, (e, r, t) => {
    var s = e.r(820092),
        n = e.r(394272),
        i = Object.prototype.hasOwnProperty;
    r.exports = function(e) {
        if (!s(e)) return n(e);
        var r = [];
        for (var t in Object(e)) i.call(e, t) && "constructor" != t && r.push(t);
        return r
    }
}, 784800, (e, r, t) => {
    r.exports = function(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 0x1fffffffffffff
    }
}, 622914, (e, r, t) => {
    var s = e.r(462931),
        n = e.r(784800);
    r.exports = function(e) {
        return null != e && n(e.length) && !s(e)
    }
}, 756024, (e, r, t) => {
    r.exports = function() {
        return !1
    }
}, 432816, (e, r, t) => {
    var s = e.r(78974),
        n = e.r(756024),
        i = t && !t.nodeType && t,
        a = i && r && !r.nodeType && r,
        o = a && a.exports === i ? s.Buffer : void 0;
    r.exports = (o ? o.isBuffer : void 0) || n
}, 742112, (e, r, t) => {
    var s = e.r(416907),
        n = e.r(784800),
        i = e.r(394022),
        a = {};
    a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, r.exports = function(e) {
        return i(e) && n(e.length) && !!a[s(e)]
    }
}, 585466, (e, r, t) => {
    r.exports = function(e) {
        return function(r) {
            return e(r)
        }
    }
}, 91480, (e, r, t) => {
    var s = e.r(505918),
        n = t && !t.nodeType && t,
        i = n && r && !r.nodeType && r,
        a = i && i.exports === n && s.process;
    r.exports = function() {
        try {
            var e = i && i.require && i.require("util").types;
            if (e) return e;
            return a && a.binding && a.binding("util")
        } catch (e) {}
    }()
}, 905330, (e, r, t) => {
    var s = e.r(742112),
        n = e.r(585466),
        i = e.r(91480),
        a = i && i.isTypedArray;
    r.exports = a ? n(a) : s
}, 260041, e => {
    "use strict";
    var r = e.i(669877),
        t = e.i(984782),
        s = e.i(460261),
        n = e.i(155266),
        i = e.i(604082),
        a = e.i(3931);
    e.s(["useModalOverlay", 0, function(e, o, l) {
        let {
            overlayProps: c,
            underlayProps: u
        } = (0, t.useOverlay)({
            ...e,
            isOpen: o.isOpen,
            onClose: o.close
        }, l);
        return (0, n.usePreventScroll)({
            isDisabled: !o.isOpen
        }), (0, s.useOverlayFocusContain)(), (0, a.useEffect)(() => {
            if (o.isOpen && l.current) return (0, r.ariaHideOutside)([l.current])
        }, [o.isOpen, l]), {
            modalProps: (0, i.mergeProps)(c),
            underlayProps: u
        }
    }])
}, 363737, e => {
    "use strict";
    var r = e.i(500783),
        t = e.i(3931),
        s = e.i(460261),
        n = e.i(260041),
        i = e.i(441157),
        a = e.i(459236),
        o = e.i(749583);
    let l = ({
            state: e,
            children: i,
            ...a
        }) => {
            let o = (0, t.useRef)(null),
                {
                    modalProps: l,
                    underlayProps: c
                } = (0, n.useModalOverlay)({
                    ...a
                }, e, o);
            return (0, t.useEffect)(() => {
                let r = o.current?.querySelector("div"),
                    t = e => {
                        let t = e.relatedTarget;
                        r && !r.contains(t) && r.focus()
                    };
                return e.isOpen && r && (r.focus(), r.addEventListener("focusout", t)), () => {
                    r && r.removeEventListener("focusout", t)
                }
            }, [e.isOpen]), (0, r.jsx)(s.Overlay, {
                children: (0, r.jsx)("div", {
                    className: "fixed top-0 right-0 bottom-0 left-0 z-[60] flex items-start justify-center overflow-hidden bg-gray-500/50",
                    ...c,
                    children: (0, r.jsx)("div", {
                        ref: o,
                        ...l,
                        className: "contents",
                        children: i
                    })
                })
            })
        },
        c = ({
            actionLabel: e,
            children: s,
            showTriggerButton: n = !0,
            ...c
        }) => {
            let u = (0, a.useOverlayTriggerState)({
                    ...c
                }),
                {
                    triggerProps: d,
                    overlayProps: f
                } = (0, i.useOverlayTrigger)({
                    type: "dialog"
                }, u);
            return (0, r.jsxs)(r.Fragment, {
                children: [n && (0, r.jsx)(o.default, {
                    rounded: !0,
                    hasArrow: !0,
                    ...d,
                    children: e
                }), u.isOpen && (0, r.jsx)(l, {
                    state: u,
                    ...c,
                    isDismissable: !0,
                    children: "function" == typeof s ? (0, t.cloneElement)(s(u.close), f) : (0, t.cloneElement)(s, f)
                })]
            })
        };
    c.Layout = ({
        children: e,
        modal: t
    }) => (0, r.jsxs)("div", {
        className: "flex h-screen max-w-[600px] flex-col overflow-scroll rounded-xl bg-white p-10 sm:min-w-[600px] md:my-20 md:h-3/4 [&>*]:text-black",
        tabIndex: -1,
        children: [(0, r.jsx)("h4", {
            className: "mb-4 text-2xl leading-8 font-medium",
            children: t.title
        }), (0, r.jsx)("p", {
            className: "mb-8 text-base leading-5 font-medium",
            children: t.description
        }), e]
    }), e.s(["default", 0, c], 363737)
}, 764138, (e, r, t) => {
    r.exports = e.r(581511)(e.r(78974), "Map")
}, 193863, (e, r, t) => {
    e.e, r.exports = function(e, r) {
        if (void 0 == r && (r = {
                fuzzy: !0
            }), /youtu\.?be/.test(e)) {
            var t, s = [/youtu\.be\/([^#\&\?]{11})/, /\?v=([^#\&\?]{11})/, /\&v=([^#\&\?]{11})/, /embed\/([^#\&\?]{11})/, /\/v\/([^#\&\?]{11})/];
            for (t = 0; t < s.length; ++t)
                if (s[t].test(e)) return s[t].exec(e)[1];
            if (r.fuzzy) {
                var n = e.split(/[\/\&\?=#\.\s]/g);
                for (t = 0; t < n.length; ++t)
                    if (/^[^#\&\?]{11}$/.test(n[t])) return n[t]
            }
        }
        return null
    }
}, 436324, e => {
    "use strict";
    var r = e.i(500783),
        t = e.i(677278),
        s = e.i(3931),
        n = e.i(749583),
        i = e.i(222061),
        a = e.i(829483),
        o = e.i(662380),
        l = e.i(179695),
        c = e.i(394261),
        u = e.i(545487),
        d = e.i(239273),
        f = e.i(474029),
        p = e.i(396241),
        m = e.i(869324),
        g = e.i(497492);
    e.s(["FormBuilder", 0, ({
        form: e,
        close: x,
        isGrowForm: v
    }) => {
        let b = (0, g.getFilteredQueryParams)(["sfcid", "sflsa", "sfit"], v),
            y = (0, g.getQueryParams)(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"], !0),
            [h, j] = (0, s.useState)(!1),
            {
                setFormSubmitted: O
            } = (0, u.useResourcesDetailContext)(),
            [w] = (0, d.default)("ELOQUA"),
            {
                handleSubmit: C,
                control: P,
                setValue: S,
                watch: F,
                getValues: k,
                formState: {
                    isSubmitting: _
                }
            } = (0, f.useForm)({
                reValidateMode: "onChange",
                mode: "onChange"
            }),
            I = F(p.COUNTRY_CODE);
        return h && e?.successMessage?.showSuccessMessage ? (0, r.jsxs)("div", {
            className: "flex flex-col items-center justify-center p-8 text-center",
            children: [e.successMessage.title && (0, r.jsx)("h3", {
                className: "mb-4 text-xl font-semibold text-gray-900",
                children: e.successMessage.title
            }), e.successMessage.description && (0, r.jsx)("p", {
                className: "mb-6 text-gray-600",
                children: e.successMessage.description
            }), e?.successMessage?.closeButtonText && (0, r.jsx)(n.default, {
                onPress: x,
                className: "[&>div>span]:!text-black hover:[&>div>span]:!underline",
                variant: "secondary",
                children: e?.successMessage?.closeButtonText
            })]
        }) : (0, r.jsxs)(c.default, {
            onSubmit: C(r => {
                let s = v ? (({
                        emailConfirmation: e,
                        ghandler: r,
                        gcid: t,
                        growDivision: s,
                        growDepartment: n
                    }) => ({
                        emailConfirmation: e,
                        ghandler: r,
                        gcid: t,
                        growDivision: s,
                        growDepartment: n,
                        grow: !0
                    }))(e?.sfdcIntegration || {}) : e?.sfdcIntegration,
                    n = e?.fields ? (0, g.getAlwaysSendOnData)(e.fields, k, I) : {};
                r.elqCustomerGUID = w?.split("&")?.[0]?.split("GUID=")?.[1] || "", r = {
                    ...r,
                    ...s,
                    ...n,
                    ...y,
                    ...b,
                    ...e?.extraFields
                }, fetch("https://create.unity.com/e/f2", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: new URLSearchParams((0, g.cleanData)(r)).toString()
                }).then(() => {
                    (0, m.default)({
                        properties: {
                            form_action: "submitted",
                            form_id: r.elqFormID,
                            form_name: r.elqFormName,
                            form_customer_id: r.elqCustomerGUID
                        }
                    }), O(!0), e?.successMessage?.showSuccessMessage ? j(!0) : x()
                }).catch(e => t.captureException(e))
            }),
            children: [(0, r.jsx)("div", {
                className: "flex flex-col [&>*]:mt-3",
                children: e?.fields && e?.fields.map((e, t) => {
                    switch (e.formField) {
                        case "input":
                            return (0, r.jsx)(i.default, {
                                ...e,
                                control: P,
                                countryCode: I
                            }, t);
                        case "checkbox":
                            return (0, r.jsx)(a.default, {
                                countryCode: I,
                                ...e,
                                control: P
                            }, t);
                        case "dropdown":
                            return (0, r.jsx)(o.default, {
                                countryCode: I,
                                ...e,
                                control: P,
                                setValue: S
                            }, t);
                        case "richText":
                            return (0, r.jsx)(l.default, {
                                ...e,
                                control: P,
                                countryCode: I
                            }, t)
                    }
                })
            }), e?.actions && (0, r.jsxs)("div", {
                className: "mt-10 border-t border-t-gray-200 pt-6",
                children: [e?.actions?.primaryActionText && (0, r.jsx)(n.default, {
                    type: "submit",
                    rounded: !0,
                    hasArrow: !0,
                    disabled: _,
                    children: e?.actions?.primaryActionText
                }), e?.actions?.secondaryActionText && (0, r.jsx)(n.default, {
                    onPress: x,
                    className: "[&>div>span]:!text-black hover:[&>div>span]:!underline",
                    variant: "secondary",
                    children: e?.actions?.secondaryActionText
                })]
            })]
        })
    }])
}, 843031, (e, r, t) => {
    r.exports = e.r(581511)(e.r(78974), "WeakMap")
}, 201763, e => {
    "use strict";
    var r = e.i(500783),
        t = e.i(722978),
        s = e.i(655105);
    e.s(["default", 0, ({
        keyFigures: e,
        nested: n = !1,
        theme: i = "light"
    }) => {
        let a = (0, t.clsx)("container col-span-12 pt-16 grid grid-cols-12 gap-2 ", {
            "py-16": !n
        });
        return (0, r.jsx)("div", {
            className: "dark" === i ? "bg-black text-white" : "",
            children: (0, r.jsx)("div", {
                className: a,
                children: e?.map((a, o) => {
                    let {
                        value: l,
                        label: c
                    } = a, u = (0, t.clsx)("col-span-12 flex rounded-md items-center gap-2 px-4 py-2 filter md:p-4 lg:col-span-4 xl:p-6", {
                        "backdrop-blur-lg": n && "dark" !== i,
                        "bg-gray-900 dark:bg-black": "dark" === i,
                        "bg-gray-100 dark:bg-gray-900 text-gray-800": !n && "dark" !== i,
                        "xl:col-span-3": e?.length === 4
                    });
                    return l?.type === "text" ? (0, r.jsxs)("div", {
                        className: u,
                        children: [(0, r.jsx)("div", {
                            className: "loco-text-heading-sm min-w-[30%] shrink-0 gap-10 pr-4 text-center",
                            children: l.text
                        }), (0, r.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: c
                        })]
                    }, o) : c && l?.type === "icon" && !l.url ? (0, r.jsx)("div", {
                        className: u,
                        children: (0, r.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: c
                        })
                    }, o) : l?.type === "icon" && l.url ? (0, r.jsxs)("div", {
                        className: u,
                        children: [(0, r.jsx)("div", {
                            className: "flex min-w-[30%] shrink-0 gap-10 text-center lg:justify-center",
                            children: (0, r.jsx)(s.default, {
                                src: l.url,
                                alt: l.description,
                                width: 40,
                                height: 40
                            })
                        }), (0, r.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: c
                        })]
                    }, o) : null
                })
            })
        })
    }])
}, 115219, e => {
    "use strict";
    var r = e.i(500783),
        t = e.i(363737),
        s = e.i(436324),
        n = e.i(869324),
        i = e.i(537251);
    e.s(["applyFormOverrides", 0, function(e, r) {
        let t;
        if (!r || !e?.fields) return e;
        try {
            t = JSON.parse(r)
        } catch {
            return e
        }
        if (!t) return e;
        let s = [...e.fields];
        for (let e of Object.keys(t)) {
            let r = s.findIndex(r => r.formFieldId === e);
            if (r < 0) continue;
            let n = t[e];
            null != n.isRequired && (s[r] = {
                ...s[r],
                isRequired: n.isRequired
            }), n.isHidden && s.splice(r, 1)
        }
        return {
            ...e,
            fields: s
        }
    }, "trackFormOpen", 0, function(e) {
        (0, n.default)({
            properties: {
                form_action: "presented",
                form_id: e.fields?.find(e => "elqFormID" === e.formFieldId)?.defaultValue,
                form_name: e.fields?.find(e => "elqFormName" === e.formFieldId)?.defaultValue
            }
        })
    }, "useFormModal", 0, e => {
        let {
            extraFields: a
        } = (0, i.default)(), o = ({
            label: i,
            form: a
        }) => {
            let o = ((e, r) => {
                let t = e?.find(e => r.title === e?.form?.title)?.customSelections || "";
                try {
                    return JSON.parse(t)
                } catch (e) {
                    return null
                }
            })(e || [], a);
            if (o && a?.fields)
                for (let e of Object.keys(o)) {
                    let r = a.fields.findIndex(r => r.formFieldId === e);
                    if (r >= 0) {
                        let t = o[e];
                        null != t.isRequired && (a.fields[r].isRequired = o[e].isRequired), t.isHidden && a.fields.splice(r, 1)
                    }
                }
            return (0, r.jsx)(t.default, {
                actionLabel: i,
                onOpenChange: e => {
                    e && (0, n.default)({
                        properties: {
                            form_action: "presented",
                            form_id: a.fields?.find(e => "elqFormID" === e.formFieldId)?.defaultValue,
                            form_name: a.fields?.find(e => "elqFormName" === e.formFieldId)?.defaultValue
                        }
                    })
                },
                children: e => (0, r.jsx)(t.default.Layout, {
                    modal: {
                        title: a.title,
                        description: a.description
                    },
                    children: a && (0, r.jsx)(s.FormBuilder, {
                        form: a,
                        close: e
                    })
                })
            })
        };
        return {
            renderModal: o,
            mapFormActions: e => e?.map(e => ({
                title: e.title,
                link: e.link ? {
                    href: e.link.linkReference?.href.current || "",
                    target: e.link.linkReference?.target || "_self"
                } : null,
                form: e.form ? {
                    form: e.form,
                    webinarFormParametersContent: e.webinarFormParametersContent,
                    extraFields: a,
                    renderModal: o
                } : null
            })),
            extraFields: a
        }
    }])
}, 551779, e => {
    "use strict";
    var r, t, s = ((r = {}).en = "en", r.de = "de_de", r.ja = "ja_jp", r.fr = "fr_fr", r.pt = "pt_br", r.cn = "zh_cn", r.es = "es_es", r.ru = "ru_ru", r.kr = "ko_kr", r),
        n = ((t = {}).en = "en-US", t.de = "de-DE", t.ja = "ja-JP", t.fr = "fr-FR", t.pt = "pt-BR", t.cn = "zh-CN", t.es = "es-ES", t.ru = "ru-RU", t.kr = "ko-KR", t);
    e.s(["LanguageMap", () => s, "LanguageMapIETFLanguageTag", () => n])
}, 22766, (e, r, t) => {
    r.exports = e.r(581511)(e.r(78974), "DataView")
}, 13715, (e, r, t) => {
    r.exports = e.r(581511)(e.r(78974), "Promise")
}, 292408, (e, r, t) => {
    r.exports = e.r(581511)(e.r(78974), "Set")
}, 354700, (e, r, t) => {
    var s = e.r(22766),
        n = e.r(764138),
        i = e.r(13715),
        a = e.r(292408),
        o = e.r(843031),
        l = e.r(416907),
        c = e.r(908829),
        u = "[object Map]",
        d = "[object Promise]",
        f = "[object Set]",
        p = "[object WeakMap]",
        m = "[object DataView]",
        g = c(s),
        x = c(n),
        v = c(i),
        b = c(a),
        y = c(o),
        h = l;
    (s && h(new s(new ArrayBuffer(1))) != m || n && h(new n) != u || i && h(i.resolve()) != d || a && h(new a) != f || o && h(new o) != p) && (h = function(e) {
        var r = l(e),
            t = "[object Object]" == r ? e.constructor : void 0,
            s = t ? c(t) : "";
        if (s) switch (s) {
            case g:
                return m;
            case x:
                return u;
            case v:
                return d;
            case b:
                return f;
            case y:
                return p
        }
        return r
    }), r.exports = h
}, 87522, (e, r, t) => {
    var s = e.r(668488),
        n = e.r(354700),
        i = e.r(410090),
        a = e.r(778116),
        o = e.r(622914),
        l = e.r(432816),
        c = e.r(820092),
        u = e.r(905330),
        d = Object.prototype.hasOwnProperty;
    r.exports = function(e) {
        if (null == e) return !0;
        if (o(e) && (a(e) || "string" == typeof e || "function" == typeof e.splice || l(e) || u(e) || i(e))) return !e.length;
        var r = n(e);
        if ("[object Map]" == r || "[object Set]" == r) return !e.size;
        if (c(e)) return !s(e).length;
        for (var t in e)
            if (d.call(e, t)) return !1;
        return !0
    }
}, 180793, (e, r, t) => {
    r.exports = function(e) {
        return null == e
    }
}, 829150, 434438, e => {
    "use strict";
    var r = e.i(551779);
    let t = r.LanguageMapIETFLanguageTag[r.LanguageMap.en],
        s = e => Object.keys(r.LanguageMapIETFLanguageTag).find(t => r.LanguageMapIETFLanguageTag[t] === e),
        n = (e = r.LanguageMap.en) => r.LanguageMapIETFLanguageTag[e] || t;
    e.s(["FALLBACK_LANGUAGE", 0, t, "default", 0, n, "getLanguageKey", 0, s], 434438);
    var i = e.i(87522),
        a = e.i(180793);
    e.s(["default", 0, (e, o, l) => {
        let {
            locale: c,
            ...u
        } = o, d = e;
        return l && d ? ((e => {
            let t;
            try {
                t = new URL(e)
            } catch (e) {
                return !1
            }
            return n(t.pathname.split("/")[1]) !== r.LanguageMapIETFLanguageTag.en
        })(d) || c === t || (d = ((e, r) => {
            let t;
            if (!r) return e;
            try {
                t = new URL(e)
            } catch (r) {
                return e
            }
            let s = t.pathname.split("/");
            return s.splice(1, 0, r), t.pathname = s.join("/"), t.toString()
        })(d, s(c))), ((e, r) => {
            let t;
            if ((0, i.default)(r)) return e;
            let s = -1 === (t = e.indexOf("?")) ? {} : e.slice(t + 1).split("&").reduce((e, r) => {
                    let [t, s] = r.split("=");
                    return t && (e[decodeURIComponent(t)] = decodeURIComponent(s || "")), e
                }, {}),
                n = {};
            Object.entries(r).forEach(([e, r]) => {
                s.hasOwnProperty(e) || (0, a.default)(r) || (n[e] = r)
            });
            let o = new URLSearchParams(n).toString();
            return e.includes("?") ? `${e}&${o}` : `${e}?${o}`
        })(d, u)) : d
    }], 829150)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "77fb0e00-4b35-5742-9fbc-81962dfe2fe8")
    } catch (e) {}
}();
//# debugId=77fb0e00-4b35-5742-9fbc-81962dfe2fe8