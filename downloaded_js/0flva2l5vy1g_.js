(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 976989, e => {
    "use strict";
    var r = e.i(500783);
    e.s(["default", 0, ({
        className: e,
        width: t = 18,
        height: a = 18
    }) => (0, r.jsx)("svg", {
        className: e,
        width: t,
        height: a,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, r.jsx)("path", {
            d: "M13.8001 10.7556L8.33444 1.26375C8.19785 1.0312 8.00287 0.838382 7.76881 0.704408C7.53476 0.570434 7.26975 0.499954 7.00006 0.499954C6.73037 0.499954 6.46536 0.570434 6.23131 0.704408C5.99725 0.838382 5.80227 1.0312 5.66569 1.26375L0.20006 10.7556C0.0686451 10.9805 -0.000610352 11.2364 -0.000610352 11.4969C-0.000610352 11.7574 0.0686451 12.0132 0.20006 12.2381C0.334892 12.4721 0.529541 12.6659 0.764036 12.7998C0.99853 12.9337 1.26442 13.0028 1.53444 13H12.4657C12.7355 13.0026 13.0011 12.9334 13.2354 12.7995C13.4696 12.6656 13.6641 12.4719 13.7988 12.2381C13.9304 12.0133 13.9999 11.7575 14.0001 11.497C14.0003 11.2365 13.9313 10.9807 13.8001 10.7556ZM6.50006 5.5C6.50006 5.36739 6.55274 5.24021 6.64651 5.14644C6.74027 5.05267 6.86745 5 7.00006 5C7.13267 5 7.25985 5.05267 7.35361 5.14644C7.44738 5.24021 7.50006 5.36739 7.50006 5.5V8C7.50006 8.1326 7.44738 8.25978 7.35361 8.35355C7.25985 8.44732 7.13267 8.5 7.00006 8.5C6.86745 8.5 6.74027 8.44732 6.64651 8.35355C6.55274 8.25978 6.50006 8.1326 6.50006 8V5.5ZM7.00006 11C6.85172 11 6.70672 10.956 6.58338 10.8736C6.46005 10.7912 6.36392 10.6741 6.30715 10.537C6.25038 10.4 6.23553 10.2492 6.26447 10.1037C6.29341 9.95819 6.36484 9.82455 6.46973 9.71967C6.57462 9.61478 6.70826 9.54335 6.85374 9.51441C6.99923 9.48547 7.15003 9.50032 7.28707 9.55709C7.42412 9.61385 7.54125 9.70998 7.62366 9.83332C7.70607 9.95665 7.75006 10.1017 7.75006 10.25C7.75006 10.4489 7.67104 10.6397 7.53039 10.7803C7.38974 10.921 7.19897 11 7.00006 11Z",
            fill: "currentColor"
        })
    })])
}, 620174, 441737, e => {
    "use strict";
    var r = e.i(500783),
        t = e.i(3931),
        a = e.i(722978),
        n = e.i(955613),
        i = e.i(166010);
    let s = t.default.forwardRef((e, t) => {
        let {
            disabled: s,
            hasError: o,
            inputSize: l,
            hasWarning: u,
            isTextArea: c
        } = e, d = (0, i.useObjectRef)(t), f = {
            ...e,
            autoCapitalize: "none"
        }, {
            inputProps: p
        } = (0, n.useTextField)({
            ...f,
            inputElementType: "input"
        }, d), v = (0, a.default)("rounded-lg w-full border border-gray-200 outline-blue focus:ring-3 focus:ring-blue-dark focus:outline-blue focus:outline-offset-0 transition-all ease-out duration-400", "text-gray-900 dark:text-gray-400 dark:text-white", "placeholder-gray-600 dark:placeholder-gray-400", {
            "h-10 py-2.5 px-2": "small" === l,
            "h-12 py-3.5 px-3": "medium" === l,
            "h-14 py-5 px-4": "large" === l
        }, {
            "bg-gray-100 dark:bg-gray-800 cursor-not-allowed": s,
            "border-yellow-500 dark:border-yellow-500 border-2": u,
            "border-red-500 dark:border-red-500 border-2": o
        }, {
            "bg-gray-50 dark:bg-gray-900": !s,
            "border-gray-400 hover:border-gray-900 dark:border-gray-500 dark:hover:border-white": !o && !u
        }, {
            "min-h-[6rem]": c
        });
        return c ? (0, r.jsx)("textarea", {
            ...p,
            "aria-labelledby": e["aria-labelledby"] || p["aria-labelledby"],
            ref: d,
            className: v,
            disabled: s
        }) : (0, r.jsx)("input", {
            ...p,
            "aria-labelledby": e["aria-labelledby"] || p["aria-labelledby"],
            ref: d,
            className: v,
            disabled: s
        })
    });
    s.displayName = "InputField";
    var o = e.i(976989);
    let l = ({
            className: e,
            width: t = 18,
            height: a = 18
        }) => (0, r.jsx)("svg", {
            className: e,
            width: t,
            height: a,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
                d: "M7 0.5C5.71442 0.5 4.45772 0.881218 3.3888 1.59545C2.31988 2.30968 1.48676 3.32484 0.994786 4.51256C0.502816 5.70028 0.374095 7.00721 0.624899 8.26809C0.875703 9.52896 1.49477 10.6872 2.40381 11.5962C3.31285 12.5052 4.47104 13.1243 5.73192 13.3751C6.99279 13.6259 8.29973 13.4972 9.48744 13.0052C10.6752 12.5132 11.6903 11.6801 12.4046 10.6112C13.1188 9.54229 13.5 8.28558 13.5 7C13.4982 5.27665 12.8128 3.62441 11.5942 2.40582C10.3756 1.18722 8.72335 0.50182 7 0.5ZM9.35375 8.64625C9.40021 8.69271 9.43706 8.74786 9.4622 8.80855C9.48734 8.86925 9.50028 8.9343 9.50028 9C9.50028 9.0657 9.48734 9.13075 9.4622 9.19145C9.43706 9.25214 9.40021 9.30729 9.35375 9.35375C9.3073 9.40021 9.25215 9.43705 9.19145 9.4622C9.13075 9.48734 9.0657 9.50028 9 9.50028C8.93431 9.50028 8.86925 9.48734 8.80855 9.4622C8.74786 9.43705 8.69271 9.40021 8.64625 9.35375L7 7.70687L5.35375 9.35375C5.3073 9.40021 5.25215 9.43705 5.19145 9.4622C5.13075 9.48734 5.0657 9.50028 5 9.50028C4.93431 9.50028 4.86925 9.48734 4.80855 9.4622C4.74786 9.43705 4.69271 9.40021 4.64625 9.35375C4.5998 9.30729 4.56295 9.25214 4.53781 9.19145C4.51266 9.13075 4.49972 9.0657 4.49972 9C4.49972 8.9343 4.51266 8.86925 4.53781 8.80855C4.56295 8.74786 4.5998 8.69271 4.64625 8.64625L6.29313 7L4.64625 5.35375C4.55243 5.25993 4.49972 5.13268 4.49972 5C4.49972 4.86732 4.55243 4.74007 4.64625 4.64625C4.74007 4.55243 4.86732 4.49972 5 4.49972C5.13268 4.49972 5.25993 4.55243 5.35375 4.64625L7 6.29313L8.64625 4.64625C8.69271 4.59979 8.74786 4.56294 8.80855 4.5378C8.86925 4.51266 8.93431 4.49972 9 4.49972C9.0657 4.49972 9.13075 4.51266 9.19145 4.5378C9.25215 4.56294 9.3073 4.59979 9.35375 4.64625C9.40021 4.6927 9.43706 4.74786 9.4622 4.80855C9.48734 4.86925 9.50028 4.9343 9.50028 5C9.50028 5.0657 9.48734 5.13075 9.4622 5.19145C9.43706 5.25214 9.40021 5.3073 9.35375 5.35375L7.70688 7L9.35375 8.64625Z",
                fill: "currentColor"
            })
        }),
        u = ({
            className: e,
            width: t = 18,
            height: a = 18
        }) => (0, r.jsx)("svg", {
            className: e,
            width: t,
            height: a,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
                d: "M8 1.5C6.71442 1.5 5.45772 1.88122 4.3888 2.59545C3.31988 3.30968 2.48676 4.32484 1.99479 5.51256C1.50282 6.70028 1.37409 8.00721 1.6249 9.26809C1.8757 10.529 2.49477 11.6872 3.40381 12.5962C4.31285 13.5052 5.47104 14.1243 6.73192 14.3751C7.99279 14.6259 9.29973 14.4972 10.4874 14.0052C11.6752 13.5132 12.6903 12.6801 13.4046 11.6112C14.1188 10.5423 14.5 9.28558 14.5 8C14.4982 6.27665 13.8128 4.62441 12.5942 3.40582C11.3756 2.18722 9.72335 1.50182 8 1.5ZM7.75 4.5C7.89834 4.5 8.04334 4.54399 8.16668 4.6264C8.29002 4.70881 8.38615 4.82594 8.44291 4.96299C8.49968 5.10003 8.51453 5.25083 8.48559 5.39632C8.45665 5.5418 8.38522 5.67544 8.28033 5.78033C8.17544 5.88522 8.04181 5.95665 7.89632 5.98559C7.75083 6.01453 7.60003 5.99968 7.46299 5.94291C7.32595 5.88614 7.20881 5.79001 7.1264 5.66668C7.04399 5.54334 7 5.39834 7 5.25C7 5.05109 7.07902 4.86032 7.21967 4.71967C7.36032 4.57902 7.55109 4.5 7.75 4.5ZM8.5 11.5C8.23479 11.5 7.98043 11.3946 7.7929 11.2071C7.60536 11.0196 7.5 10.7652 7.5 10.5V8C7.36739 8 7.24022 7.94732 7.14645 7.85355C7.05268 7.75979 7 7.63261 7 7.5C7 7.36739 7.05268 7.24021 7.14645 7.14645C7.24022 7.05268 7.36739 7 7.5 7C7.76522 7 8.01957 7.10536 8.20711 7.29289C8.39465 7.48043 8.5 7.73478 8.5 8V10.5C8.63261 10.5 8.75979 10.5527 8.85356 10.6464C8.94732 10.7402 9 10.8674 9 11C9 11.1326 8.94732 11.2598 8.85356 11.3536C8.75979 11.4473 8.63261 11.5 8.5 11.5Z",
                fill: "currentColor"
            })
        }),
        c = e => {
            let {
                helperText: a,
                hasError: i,
                hasWarning: s
            } = e, c = (0, t.useRef)(null), {
                descriptionProps: d
            } = (0, n.useTextField)(e, c);
            return (0, r.jsxs)("div", {
                ...d,
                className: "align-items flex pt-2 text-xs",
                children: [i && (0, r.jsx)(l, {
                    className: "inline pr-1 text-red-600"
                }), s && (0, r.jsx)(o.default, {
                    className: "inline pr-1 text-yellow-600"
                }), !s && !i && (0, r.jsx)(u, {
                    className: "inline pr-1 text-gray-600 dark:text-gray-100"
                }), a]
            })
        };
    e.s(["default", 0, c], 441737);
    let d = ({
            className: e,
            ...t
        }) => (0, r.jsxs)("label", {
            id: t.id,
            htmlFor: t.for,
            className: e ?? "flex justify-between pb-2",
            children: [t.label, t.isRequired && (0, r.jsx)("span", {
                className: "text-sm text-gray-400",
                children: t.requiredText
            })]
        }),
        f = (0, t.forwardRef)(({
            helperText: e,
            ...a
        }, n) => {
            let i = (0, t.useId)();
            return (0, r.jsxs)("div", {
                ref: n,
                children: [(0, r.jsx)(d, {
                    ...a,
                    id: i
                }), (0, r.jsx)(s, {
                    ...a,
                    "aria-labelledby": i
                }), e && (0, r.jsx)(c, {
                    helperText: e,
                    ...a
                })]
            })
        });
    f.displayName = "Input", e.s(["default", 0, f], 620174)
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
}, 957885, 900448, e => {
    "use strict";
    var r = e.i(3931),
        t = e.i(604082),
        a = e.i(318601),
        n = e.i(623706),
        i = e.i(212299);
    e.i(788727);
    var s = e.i(339206),
        o = e.i(682792),
        l = e.i(7180);
    e.s(["useCheckbox", 0, function(e, u, c) {
        let d = (0, a.useFormValidationState)({
                ...e,
                value: u.isSelected
            }),
            {
                isInvalid: f,
                validationErrors: p,
                validationDetails: v
            } = d.displayValidation,
            {
                labelProps: g,
                inputProps: h,
                isSelected: x,
                isPressed: m,
                isDisabled: y,
                isReadOnly: _
            } = function(e, r, a) {
                let {
                    isDisabled: n = !1,
                    isReadOnly: u = !1,
                    value: c,
                    name: d,
                    children: f,
                    "aria-label": p,
                    "aria-labelledby": v,
                    validationState: g = "valid",
                    isInvalid: h
                } = e, {
                    pressProps: x,
                    isPressed: m
                } = (0, i.usePress)({
                    isDisabled: n
                }), {
                    pressProps: y,
                    isPressed: _
                } = (0, i.usePress)({
                    onPress() {
                        var e;
                        r.toggle(), null == (e = a.current) || e.focus()
                    },
                    isDisabled: n || u
                }), {
                    focusableProps: C
                } = (0, l.useFocusable)(e, a), b = (0, t.mergeProps)(x, C), w = (0, s.filterDOMProps)(e, {
                    labelable: !0
                });
                return (0, o.useFormReset)(a, r.isSelected, r.setSelected), {
                    labelProps: (0, t.mergeProps)(y, {
                        onClick: e => e.preventDefault()
                    }),
                    inputProps: (0, t.mergeProps)(w, {
                        "aria-invalid": h || "invalid" === g || void 0,
                        "aria-errormessage": e["aria-errormessage"],
                        "aria-controls": e["aria-controls"],
                        "aria-readonly": u || void 0,
                        onChange: e => {
                            e.stopPropagation(), r.setSelected(e.target.checked)
                        },
                        disabled: n,
                        ...null == c ? {} : {
                            value: c
                        },
                        name: d,
                        type: "checkbox",
                        ...b
                    }),
                    isSelected: r.isSelected,
                    isPressed: m || _,
                    isDisabled: n,
                    isReadOnly: u,
                    isInvalid: h || "invalid" === g
                }
            }({
                ...e,
                isInvalid: f
            }, u, c);
        (0, n.useFormValidation)(e, d, c);
        let {
            isIndeterminate: C,
            isRequired: b,
            validationBehavior: w = "aria"
        } = e;
        (0, r.useEffect)(() => {
            c.current && (c.current.indeterminate = !!C)
        });
        let {
            pressProps: S
        } = (0, i.usePress)({
            isDisabled: y || _,
            onPress() {
                let {
                    [a.privateValidationStateProp]: r
                } = e, {
                    commitValidation: t
                } = r || d;
                t()
            }
        });
        return {
            labelProps: (0, t.mergeProps)(g, S),
            inputProps: {
                ...h,
                checked: x,
                "aria-required": b && "aria" === w || void 0,
                required: b && "native" === w
            },
            isSelected: x,
            isPressed: m,
            isDisabled: y,
            isReadOnly: _,
            isInvalid: f,
            validationErrors: p,
            validationDetails: v
        }
    }], 957885);
    var u = e.i(201373);
    e.s(["useToggleState", 0, function(e = {}) {
        var t;
        let {
            isReadOnly: a
        } = e, [n, i] = (0, u.useControlledState)(e.isSelected, e.defaultSelected || !1, e.onChange), [s] = (0, r.useState)(n);
        return {
            isSelected: n,
            defaultSelected: null != (t = e.defaultSelected) ? t : s,
            setSelected: function(e) {
                a || i(e)
            },
            toggle: function() {
                a || i(!n)
            }
        }
    }], 900448)
}, 240046, (e, r, t) => {
    r.exports = function(e) {
        return e
    }
}, 865799, (e, r, t) => {
    r.exports = function(e, r, t) {
        switch (t.length) {
            case 0:
                return e.call(r);
            case 1:
                return e.call(r, t[0]);
            case 2:
                return e.call(r, t[0], t[1]);
            case 3:
                return e.call(r, t[0], t[1], t[2])
        }
        return e.apply(r, t)
    }
}, 911818, (e, r, t) => {
    var a = Date.now;
    r.exports = function(e) {
        var r = 0,
            t = 0;
        return function() {
            var n = a(),
                i = 16 - (n - t);
            if (t = n, i > 0) {
                if (++r >= 800) return arguments[0]
            } else r = 0;
            return e.apply(void 0, arguments)
        }
    }
}, 830747, (e, r, t) => {
    r.exports = function(e) {
        return function() {
            return e
        }
    }
}, 599568, (e, r, t) => {
    var a = e.r(581511);
    r.exports = function() {
        try {
            var e = a(Object, "defineProperty");
            return e({}, "", {}), e
        } catch (e) {}
    }()
}, 317508, (e, r, t) => {
    var a = e.r(830747),
        n = e.r(599568),
        i = e.r(240046);
    r.exports = n ? function(e, r) {
        return n(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: a(r),
            writable: !0
        })
    } : i
}, 108749, (e, r, t) => {
    var a = e.r(317508);
    r.exports = e.r(911818)(a)
}, 531766, (e, r, t) => {
    r.exports = function(e, r) {
        for (var t = -1, a = null == e ? 0 : e.length; ++t < a && !1 !== r(e[t], t, e););
        return e
    }
}, 860059, (e, r, t) => {
    var a = /^(?:0|[1-9]\d*)$/;
    r.exports = function(e, r) {
        var t = typeof e;
        return !!(r = null == r ? 0x1fffffffffffff : r) && ("number" == t || "symbol" != t && a.test(e)) && e > -1 && e % 1 == 0 && e < r
    }
}, 184414, (e, r, t) => {
    var a = e.r(865799),
        n = Math.max;
    r.exports = function(e, r, t) {
        return r = n(void 0 === r ? e.length - 1 : r, 0),
            function() {
                for (var i = arguments, s = -1, o = n(i.length - r, 0), l = Array(o); ++s < o;) l[s] = i[r + s];
                s = -1;
                for (var u = Array(r + 1); ++s < r;) u[s] = i[s];
                return u[r] = t(l), a(e, this, u)
            }
    }
}, 551779, e => {
    "use strict";
    var r, t, a = ((r = {}).en = "en", r.de = "de_de", r.ja = "ja_jp", r.fr = "fr_fr", r.pt = "pt_br", r.cn = "zh_cn", r.es = "es_es", r.ru = "ru_ru", r.kr = "ko_kr", r),
        n = ((t = {}).en = "en-US", t.de = "de-DE", t.ja = "ja-JP", t.fr = "fr-FR", t.pt = "pt-BR", t.cn = "zh-CN", t.es = "es-ES", t.ru = "ru-RU", t.kr = "ko-KR", t);
    e.s(["LanguageMap", () => a, "LanguageMapIETFLanguageTag", () => n])
}, 22766, (e, r, t) => {
    r.exports = e.r(581511)(e.r(78974), "DataView")
}, 13715, (e, r, t) => {
    r.exports = e.r(581511)(e.r(78974), "Promise")
}, 292408, (e, r, t) => {
    r.exports = e.r(581511)(e.r(78974), "Set")
}, 843031, (e, r, t) => {
    r.exports = e.r(581511)(e.r(78974), "WeakMap")
}, 354700, (e, r, t) => {
    var a = e.r(22766),
        n = e.r(764138),
        i = e.r(13715),
        s = e.r(292408),
        o = e.r(843031),
        l = e.r(416907),
        u = e.r(908829),
        c = "[object Map]",
        d = "[object Promise]",
        f = "[object Set]",
        p = "[object WeakMap]",
        v = "[object DataView]",
        g = u(a),
        h = u(n),
        x = u(i),
        m = u(s),
        y = u(o),
        _ = l;
    (a && _(new a(new ArrayBuffer(1))) != v || n && _(new n) != c || i && _(i.resolve()) != d || s && _(new s) != f || o && _(new o) != p) && (_ = function(e) {
        var r = l(e),
            t = "[object Object]" == r ? e.constructor : void 0,
            a = t ? u(t) : "";
        if (a) switch (a) {
            case g:
                return v;
            case h:
                return c;
            case x:
                return d;
            case m:
                return f;
            case y:
                return p
        }
        return r
    }), r.exports = _
}, 87522, (e, r, t) => {
    var a = e.r(668488),
        n = e.r(354700),
        i = e.r(410090),
        s = e.r(778116),
        o = e.r(622914),
        l = e.r(432816),
        u = e.r(820092),
        c = e.r(905330),
        d = Object.prototype.hasOwnProperty;
    r.exports = function(e) {
        if (null == e) return !0;
        if (o(e) && (s(e) || "string" == typeof e || "function" == typeof e.splice || l(e) || c(e) || i(e))) return !e.length;
        var r = n(e);
        if ("[object Map]" == r || "[object Set]" == r) return !e.size;
        if (u(e)) return !a(e).length;
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
        a = e => Object.keys(r.LanguageMapIETFLanguageTag).find(t => r.LanguageMapIETFLanguageTag[t] === e),
        n = (e = r.LanguageMap.en) => r.LanguageMapIETFLanguageTag[e] || t;
    e.s(["FALLBACK_LANGUAGE", 0, t, "default", 0, n, "getLanguageKey", 0, a], 434438);
    var i = e.i(87522),
        s = e.i(180793);
    e.s(["default", 0, (e, o, l) => {
        let {
            locale: u,
            ...c
        } = o, d = e;
        return l && d ? ((e => {
            let t;
            try {
                t = new URL(e)
            } catch (e) {
                return !1
            }
            return n(t.pathname.split("/")[1]) !== r.LanguageMapIETFLanguageTag.en
        })(d) || u === t || (d = ((e, r) => {
            let t;
            if (!r) return e;
            try {
                t = new URL(e)
            } catch (r) {
                return e
            }
            let a = t.pathname.split("/");
            return a.splice(1, 0, r), t.pathname = a.join("/"), t.toString()
        })(d, a(u))), ((e, r) => {
            let t;
            if ((0, i.default)(r)) return e;
            let a = -1 === (t = e.indexOf("?")) ? {} : e.slice(t + 1).split("&").reduce((e, r) => {
                    let [t, a] = r.split("=");
                    return t && (e[decodeURIComponent(t)] = decodeURIComponent(a || "")), e
                }, {}),
                n = {};
            Object.entries(r).forEach(([e, r]) => {
                Object.prototype.hasOwnProperty.call(a, e) || (0, s.default)(r) || (n[e] = r)
            });
            let o = new URLSearchParams(n).toString();
            return e.includes("?") ? `${e}&${o}` : `${e}?${o}`
        })(d, c)) : d
    }], 829150)
}, 201763, e => {
    "use strict";
    var r = e.i(500783),
        t = e.i(722978),
        a = e.i(655105);
    e.s(["default", 0, ({
        keyFigures: e,
        nested: n = !1,
        theme: i = "light"
    }) => {
        let s = (0, t.clsx)("container col-span-12 pt-16 grid grid-cols-12 gap-2 ", {
            "py-16": !n
        });
        return (0, r.jsx)("div", {
            className: "dark" === i ? "bg-black text-white" : "",
            children: (0, r.jsx)("div", {
                className: s,
                children: e?.map((s, o) => {
                    let {
                        value: l,
                        label: u
                    } = s, c = (0, t.clsx)("col-span-12 flex rounded-md items-center gap-2 px-4 py-2 filter md:p-4 lg:col-span-4 xl:p-6", {
                        "backdrop-blur-lg": n && "dark" !== i,
                        "bg-gray-900 dark:bg-black": "dark" === i,
                        "bg-gray-100 dark:bg-gray-900 text-gray-800": !n && "dark" !== i,
                        "xl:col-span-3": e?.length === 4
                    });
                    return l?.type === "text" ? (0, r.jsxs)("div", {
                        className: c,
                        children: [(0, r.jsx)("div", {
                            className: "loco-text-heading-sm min-w-[30%] shrink-0 gap-10 pr-4 text-center",
                            children: l.text
                        }), (0, r.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: u
                        })]
                    }, o) : u && l?.type === "icon" && !l.url ? (0, r.jsx)("div", {
                        className: c,
                        children: (0, r.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: u
                        })
                    }, o) : l?.type === "icon" && l.url ? (0, r.jsxs)("div", {
                        className: c,
                        children: [(0, r.jsx)("div", {
                            className: "flex min-w-[30%] shrink-0 gap-10 text-center lg:justify-center",
                            children: (0, r.jsx)(a.default, {
                                src: l.url,
                                alt: l.description,
                                width: 40,
                                height: 40
                            })
                        }), (0, r.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: u
                        })]
                    }, o) : null
                })
            })
        })
    }])
}, 436324, e => {
    "use strict";
    var r = e.i(500783),
        t = e.i(677278),
        a = e.i(3931),
        n = e.i(749583),
        i = e.i(222061),
        s = e.i(829483),
        o = e.i(662380),
        l = e.i(179695),
        u = e.i(394261),
        c = e.i(545487),
        d = e.i(239273),
        f = e.i(474029),
        p = e.i(396241),
        v = e.i(869324),
        g = e.i(497492);
    e.s(["FormBuilder", 0, ({
        form: e,
        close: h,
        isGrowForm: x
    }) => {
        let m = (0, g.getFilteredQueryParams)(["sfcid", "sflsa", "sfit"], x),
            y = (0, g.getQueryParams)(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"], !0),
            [_, C] = (0, a.useState)(!1),
            {
                setFormSubmitted: b
            } = (0, c.useResourcesDetailContext)(),
            [w] = (0, d.default)("ELOQUA"),
            {
                handleSubmit: S,
                control: E,
                setValue: j,
                watch: T,
                getValues: L,
                formState: {
                    isSubmitting: k
                }
            } = (0, f.useForm)({
                reValidateMode: "onChange",
                mode: "onChange"
            }),
            R = T(p.COUNTRY_CODE);
        return _ && e?.successMessage?.showSuccessMessage ? (0, r.jsxs)("div", {
            className: "flex flex-col items-center justify-center p-8 text-center",
            children: [e.successMessage.title && (0, r.jsx)("h3", {
                className: "mb-4 text-xl font-semibold text-gray-900",
                children: e.successMessage.title
            }), e.successMessage.description && (0, r.jsx)("p", {
                className: "mb-6 text-gray-600",
                children: e.successMessage.description
            }), e?.successMessage?.closeButtonText && (0, r.jsx)(n.default, {
                onPress: h,
                className: "[&>div>span]:!text-black hover:[&>div>span]:!underline",
                variant: "secondary",
                children: e?.successMessage?.closeButtonText
            })]
        }) : (0, r.jsxs)(u.default, {
            onSubmit: S(r => {
                let a = x ? (({
                        emailConfirmation: e,
                        ghandler: r,
                        gcid: t,
                        growDivision: a,
                        growDepartment: n
                    }) => ({
                        emailConfirmation: e,
                        ghandler: r,
                        gcid: t,
                        growDivision: a,
                        growDepartment: n,
                        grow: !0
                    }))(e?.sfdcIntegration || {}) : e?.sfdcIntegration,
                    n = e?.fields ? (0, g.getAlwaysSendOnData)(e.fields, L, R) : {};
                r.elqCustomerGUID = w?.split("&")?.[0]?.split("GUID=")?.[1] || "", r = {
                    ...r,
                    ...a,
                    ...n,
                    ...y,
                    ...m,
                    ...e?.extraFields
                }, fetch("https://create.unity.com/e/f2", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: new URLSearchParams((0, g.cleanData)(r)).toString()
                }).then(() => {
                    (0, v.default)({
                        properties: {
                            form_action: "submitted",
                            form_id: r.elqFormID,
                            form_name: r.elqFormName,
                            form_customer_id: r.elqCustomerGUID
                        }
                    }), b(!0), e?.successMessage?.showSuccessMessage ? C(!0) : h()
                }).catch(e => t.captureException(e))
            }),
            children: [(0, r.jsx)("div", {
                className: "flex flex-col [&>*]:mt-3",
                children: e?.fields && e?.fields.map((e, t) => {
                    switch (e.formField) {
                        case "input":
                            return (0, r.jsx)(i.default, {
                                ...e,
                                control: E,
                                countryCode: R
                            }, t);
                        case "checkbox":
                            return (0, r.jsx)(s.default, {
                                countryCode: R,
                                ...e,
                                control: E
                            }, t);
                        case "dropdown":
                            return (0, r.jsx)(o.default, {
                                countryCode: R,
                                ...e,
                                control: E,
                                setValue: j
                            }, t);
                        case "richText":
                            return (0, r.jsx)(l.default, {
                                ...e,
                                control: E,
                                countryCode: R
                            }, t)
                    }
                })
            }), e?.actions && (0, r.jsxs)("div", {
                className: "mt-10 border-t border-t-gray-200 pt-6",
                children: [e?.actions?.primaryActionText && (0, r.jsx)(n.default, {
                    type: "submit",
                    rounded: !0,
                    hasArrow: !0,
                    disabled: k,
                    children: e?.actions?.primaryActionText
                }), e?.actions?.secondaryActionText && (0, r.jsx)(n.default, {
                    onPress: h,
                    className: "[&>div>span]:!text-black hover:[&>div>span]:!underline",
                    variant: "secondary",
                    children: e?.actions?.secondaryActionText
                })]
            })]
        })
    }])
}, 115219, e => {
    "use strict";
    var r = e.i(500783),
        t = e.i(363737),
        a = e.i(436324),
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
        let a = [...e.fields];
        for (let e of Object.keys(t)) {
            let r = a.findIndex(r => r.formFieldId === e);
            if (r < 0) continue;
            let n = t[e];
            null != n.isRequired && (a[r] = {
                ...a[r],
                isRequired: n.isRequired
            }), n.isHidden && a.splice(r, 1)
        }
        return {
            ...e,
            fields: a
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
            extraFields: s
        } = (0, i.default)(), o = ({
            label: i,
            form: s
        }) => {
            let o = ((e, r) => {
                let t = e?.find(e => r.title === e?.form?.title)?.customSelections || "";
                try {
                    return JSON.parse(t)
                } catch (e) {
                    return null
                }
            })(e || [], s);
            if (o && s?.fields)
                for (let e of Object.keys(o)) {
                    let r = s.fields.findIndex(r => r.formFieldId === e);
                    if (r >= 0) {
                        let t = o[e];
                        null != t.isRequired && (s.fields[r].isRequired = o[e].isRequired), t.isHidden && s.fields.splice(r, 1)
                    }
                }
            return (0, r.jsx)(t.default, {
                actionLabel: i,
                onOpenChange: e => {
                    e && (0, n.default)({
                        properties: {
                            form_action: "presented",
                            form_id: s.fields?.find(e => "elqFormID" === e.formFieldId)?.defaultValue,
                            form_name: s.fields?.find(e => "elqFormName" === e.formFieldId)?.defaultValue
                        }
                    })
                },
                children: e => (0, r.jsx)(t.default.Layout, {
                    modal: {
                        title: s.title,
                        description: s.description
                    },
                    children: s && (0, r.jsx)(a.FormBuilder, {
                        form: s,
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
                    extraFields: s,
                    renderModal: o
                } : null
            })),
            extraFields: s
        }
    }])
}, 817916, e => {
    "use strict";
    var r = e.i(500783);
    let t = ({
        id: e,
        className: t
    }) => (0, r.jsx)("div", {
        id: e,
        "data-anchor-item": !0,
        className: t,
        style: {
            marginTop: "-120px",
            paddingTop: "120px"
        }
    });
    e.s(["default", 0, ({
        anchorID: e
    }) => (0, r.jsx)(t, {
        id: e ?? ""
    })], 817916)
}, 616073, (e, r, t) => {
    var a = e.r(843031);
    r.exports = a && new a
}, 647503, (e, r, t) => {
    var a = e.r(240046),
        n = e.r(616073);
    r.exports = n ? function(e, r) {
        return n.set(e, r), e
    } : a
}, 808690, (e, r, t) => {
    var a = e.r(878524),
        n = Object.create;
    r.exports = function() {
        function e() {}
        return function(r) {
            if (!a(r)) return {};
            if (n) return n(r);
            e.prototype = r;
            var t = new e;
            return e.prototype = void 0, t
        }
    }()
}, 150692, (e, r, t) => {
    var a = e.r(808690),
        n = e.r(878524);
    r.exports = function(e) {
        return function() {
            var r = arguments;
            switch (r.length) {
                case 0:
                    return new e;
                case 1:
                    return new e(r[0]);
                case 2:
                    return new e(r[0], r[1]);
                case 3:
                    return new e(r[0], r[1], r[2]);
                case 4:
                    return new e(r[0], r[1], r[2], r[3]);
                case 5:
                    return new e(r[0], r[1], r[2], r[3], r[4]);
                case 6:
                    return new e(r[0], r[1], r[2], r[3], r[4], r[5]);
                case 7:
                    return new e(r[0], r[1], r[2], r[3], r[4], r[5], r[6])
            }
            var t = a(e.prototype),
                i = e.apply(t, r);
            return n(i) ? i : t
        }
    }
}, 154193, (e, r, t) => {
    var a = e.r(150692),
        n = e.r(78974);
    r.exports = function(e, r, t) {
        var i = 1 & r,
            s = a(e);
        return function r() {
            return (this && this !== n && this instanceof r ? s : e).apply(i ? t : this, arguments)
        }
    }
}, 669249, (e, r, t) => {
    var a = Math.max;
    r.exports = function(e, r, t, n) {
        for (var i = -1, s = e.length, o = t.length, l = -1, u = r.length, c = a(s - o, 0), d = Array(u + c), f = !n; ++l < u;) d[l] = r[l];
        for (; ++i < o;)(f || i < s) && (d[t[i]] = e[i]);
        for (; c--;) d[l++] = e[i++];
        return d
    }
}, 392010, (e, r, t) => {
    var a = Math.max;
    r.exports = function(e, r, t, n) {
        for (var i = -1, s = e.length, o = -1, l = t.length, u = -1, c = r.length, d = a(s - l, 0), f = Array(d + c), p = !n; ++i < d;) f[i] = e[i];
        for (var v = i; ++u < c;) f[v + u] = r[u];
        for (; ++o < l;)(p || i < s) && (f[v + t[o]] = e[i++]);
        return f
    }
}, 678304, (e, r, t) => {
    r.exports = function(e, r) {
        for (var t = e.length, a = 0; t--;) e[t] === r && ++a;
        return a
    }
}, 631347, (e, r, t) => {
    r.exports = function() {}
}, 698686, (e, r, t) => {
    function a(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 0xffffffff, this.__views__ = []
    }
    a.prototype = e.r(808690)(e.r(631347).prototype), a.prototype.constructor = a, r.exports = a
}, 435673, (e, r, t) => {
    r.exports = function() {}
}, 560579, (e, r, t) => {
    var a = e.r(616073),
        n = e.r(435673);
    r.exports = a ? function(e) {
        return a.get(e)
    } : n
}, 293281, (e, r, t) => {
    r.exports = {}
}, 272640, (e, r, t) => {
    var a = e.r(293281),
        n = Object.prototype.hasOwnProperty;
    r.exports = function(e) {
        for (var r = e.name + "", t = a[r], i = n.call(a, r) ? t.length : 0; i--;) {
            var s = t[i],
                o = s.func;
            if (null == o || o == e) return s.name
        }
        return r
    }
}, 297211, (e, r, t) => {
    function a(e, r) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!r, this.__index__ = 0, this.__values__ = void 0
    }
    a.prototype = e.r(808690)(e.r(631347).prototype), a.prototype.constructor = a, r.exports = a
}, 370592, (e, r, t) => {
    r.exports = function(e, r) {
        var t = -1,
            a = e.length;
        for (r || (r = Array(a)); ++t < a;) r[t] = e[t];
        return r
    }
}, 852109, (e, r, t) => {
    var a = e.r(698686),
        n = e.r(297211),
        i = e.r(370592);
    r.exports = function(e) {
        if (e instanceof a) return e.clone();
        var r = new n(e.__wrapped__, e.__chain__);
        return r.__actions__ = i(e.__actions__), r.__index__ = e.__index__, r.__values__ = e.__values__, r
    }
}, 611309, (e, r, t) => {
    var a = e.r(698686),
        n = e.r(297211),
        i = e.r(631347),
        s = e.r(778116),
        o = e.r(394022),
        l = e.r(852109),
        u = Object.prototype.hasOwnProperty;

    function c(e) {
        if (o(e) && !s(e) && !(e instanceof a)) {
            if (e instanceof n) return e;
            if (u.call(e, "__wrapped__")) return l(e)
        }
        return new n(e)
    }
    c.prototype = i.prototype, c.prototype.constructor = c, r.exports = c
}, 610903, (e, r, t) => {
    var a = e.r(698686),
        n = e.r(560579),
        i = e.r(272640),
        s = e.r(611309);
    r.exports = function(e) {
        var r = i(e),
            t = s[r];
        if ("function" != typeof t || !(r in a.prototype)) return !1;
        if (e === t) return !0;
        var o = n(t);
        return !!o && e === o[0]
    }
}, 569923, (e, r, t) => {
    var a = e.r(647503);
    r.exports = e.r(911818)(a)
}, 434891, (e, r, t) => {
    var a = /\{\n\/\* \[wrapped with (.+)\] \*/,
        n = /,? & /;
    r.exports = function(e) {
        var r = e.match(a);
        return r ? r[1].split(n) : []
    }
}, 790131, (e, r, t) => {
    var a = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
    r.exports = function(e, r) {
        var t = r.length;
        if (!t) return e;
        var n = t - 1;
        return r[n] = (t > 1 ? "& " : "") + r[n], r = r.join(t > 2 ? ", " : " "), e.replace(a, "{\n/* [wrapped with " + r + "] */\n")
    }
}, 753269, (e, r, t) => {
    r.exports = function(e, r, t, a) {
        for (var n = e.length, i = t + (a ? 1 : -1); a ? i-- : ++i < n;)
            if (r(e[i], i, e)) return i;
        return -1
    }
}, 254849, (e, r, t) => {
    r.exports = function(e) {
        return e != e
    }
}, 193170, (e, r, t) => {
    r.exports = function(e, r, t) {
        for (var a = t - 1, n = e.length; ++a < n;)
            if (e[a] === r) return a;
        return -1
    }
}, 125863, (e, r, t) => {
    var a = e.r(753269),
        n = e.r(254849),
        i = e.r(193170);
    r.exports = function(e, r, t) {
        return r == r ? i(e, r, t) : a(e, n, t)
    }
}, 584058, (e, r, t) => {
    var a = e.r(125863);
    r.exports = function(e, r) {
        return !!(null == e ? 0 : e.length) && a(e, r, 0) > -1
    }
}, 621923, (e, r, t) => {
    var a = e.r(531766),
        n = e.r(584058),
        i = [
            ["ary", 128],
            ["bind", 1],
            ["bindKey", 2],
            ["curry", 8],
            ["curryRight", 16],
            ["flip", 512],
            ["partial", 32],
            ["partialRight", 64],
            ["rearg", 256]
        ];
    r.exports = function(e, r) {
        return a(i, function(t) {
            var a = "_." + t[0];
            r & t[1] && !n(e, a) && e.push(a)
        }), e.sort()
    }
}, 777948, (e, r, t) => {
    var a = e.r(434891),
        n = e.r(790131),
        i = e.r(108749),
        s = e.r(621923);
    r.exports = function(e, r, t) {
        var o = r + "";
        return i(e, n(o, s(a(o), t)))
    }
}, 713442, (e, r, t) => {
    var a = e.r(610903),
        n = e.r(569923),
        i = e.r(777948);
    r.exports = function(e, r, t, s, o, l, u, c, d, f) {
        var p = 8 & r;
        r |= p ? 32 : 64, 4 & (r &= ~(p ? 64 : 32)) || (r &= -4);
        var v = [e, r, o, p ? l : void 0, p ? u : void 0, p ? void 0 : l, p ? void 0 : u, c, d, f],
            g = t.apply(void 0, v);
        return a(e) && n(g, v), g.placeholder = s, i(g, e, r)
    }
}, 943203, (e, r, t) => {
    r.exports = function(e) {
        return e.placeholder
    }
}, 737022, (e, r, t) => {
    var a = e.r(370592),
        n = e.r(860059),
        i = Math.min;
    r.exports = function(e, r) {
        for (var t = e.length, s = i(r.length, t), o = a(e); s--;) {
            var l = r[s];
            e[s] = n(l, t) ? o[l] : void 0
        }
        return e
    }
}, 913599, (e, r, t) => {
    var a = "__lodash_placeholder__";
    r.exports = function(e, r) {
        for (var t = -1, n = e.length, i = 0, s = []; ++t < n;) {
            var o = e[t];
            (o === r || o === a) && (e[t] = a, s[i++] = t)
        }
        return s
    }
}, 141920, (e, r, t) => {
    var a = e.r(669249),
        n = e.r(392010),
        i = e.r(678304),
        s = e.r(150692),
        o = e.r(713442),
        l = e.r(943203),
        u = e.r(737022),
        c = e.r(913599),
        d = e.r(78974);
    r.exports = function e(r, t, f, p, v, g, h, x, m, y) {
        var _ = 128 & t,
            C = 1 & t,
            b = 2 & t,
            w = 24 & t,
            S = 512 & t,
            E = b ? void 0 : s(r);

        function j() {
            for (var T = arguments.length, L = Array(T), k = T; k--;) L[k] = arguments[k];
            if (w) var R = l(j),
                A = i(L, R);
            if (p && (L = a(L, p, v, w)), g && (L = n(L, g, h, w)), T -= A, w && T < y) {
                var O = c(L, R);
                return o(r, t, e, j.placeholder, f, L, O, x, m, y - T)
            }
            var I = C ? f : this,
                N = b ? I[r] : r;
            return T = L.length, x ? L = u(L, x) : S && T > 1 && L.reverse(), _ && m < T && (L.length = m), this && this !== d && this instanceof j && (N = E || s(N)), N.apply(I, L)
        }
        return j
    }
}, 50962, (e, r, t) => {
    var a = e.r(865799),
        n = e.r(150692),
        i = e.r(141920),
        s = e.r(713442),
        o = e.r(943203),
        l = e.r(913599),
        u = e.r(78974);
    r.exports = function(e, r, t) {
        var c = n(e);

        function d() {
            for (var n = arguments.length, f = Array(n), p = n, v = o(d); p--;) f[p] = arguments[p];
            var g = n < 3 && f[0] !== v && f[n - 1] !== v ? [] : l(f, v);
            return (n -= g.length) < t ? s(e, r, i, d.placeholder, void 0, f, g, void 0, void 0, t - n) : a(this && this !== u && this instanceof d ? c : e, this, f)
        }
        return d
    }
}, 890892, (e, r, t) => {
    var a = e.r(865799),
        n = e.r(150692),
        i = e.r(78974);
    r.exports = function(e, r, t, s) {
        var o = 1 & r,
            l = n(e);
        return function r() {
            for (var n = -1, u = arguments.length, c = -1, d = s.length, f = Array(d + u); ++c < d;) f[c] = s[c];
            for (; u--;) f[c++] = arguments[++n];
            return a(this && this !== i && this instanceof r ? l : e, o ? t : this, f)
        }
    }
}, 767257, (e, r, t) => {
    var a = e.r(669249),
        n = e.r(392010),
        i = e.r(913599),
        s = "__lodash_placeholder__",
        o = Math.min;
    r.exports = function(e, r) {
        var t = e[1],
            l = r[1],
            u = t | l,
            c = u < 131,
            d = 128 == l && 8 == t || 128 == l && 256 == t && e[7].length <= r[8] || 384 == l && r[7].length <= r[8] && 8 == t;
        if (!(c || d)) return e;
        1 & l && (e[2] = r[2], u |= 1 & t ? 0 : 4);
        var f = r[3];
        if (f) {
            var p = e[3];
            e[3] = p ? a(p, f, r[4]) : f, e[4] = p ? i(e[3], s) : r[4]
        }
        return (f = r[5]) && (p = e[5], e[5] = p ? n(p, f, r[6]) : f, e[6] = p ? i(e[5], s) : r[6]), (f = r[7]) && (e[7] = f), 128 & l && (e[8] = null == e[8] ? r[8] : o(e[8], r[8])), null == e[9] && (e[9] = r[9]), e[0] = r[0], e[1] = u, e
    }
}, 860205, (e, r, t) => {
    var a = /\s/;
    r.exports = function(e) {
        for (var r = e.length; r-- && a.test(e.charAt(r)););
        return r
    }
}, 798430, (e, r, t) => {
    var a = e.r(860205),
        n = /^\s+/;
    r.exports = function(e) {
        return e ? e.slice(0, a(e) + 1).replace(n, "") : e
    }
}, 868922, (e, r, t) => {
    var a = e.r(798430),
        n = e.r(878524),
        i = e.r(692558),
        s = 0 / 0,
        o = /^[-+]0x[0-9a-f]+$/i,
        l = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        c = parseInt;
    r.exports = function(e) {
        if ("number" == typeof e) return e;
        if (i(e)) return s;
        if (n(e)) {
            var r = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = n(r) ? r + "" : r
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = a(e);
        var t = l.test(e);
        return t || u.test(e) ? c(e.slice(2), t ? 2 : 8) : o.test(e) ? s : +e
    }
}, 682437, (e, r, t) => {
    var a = e.r(868922),
        n = 1 / 0;
    r.exports = function(e) {
        return e ? (e = a(e)) === n || e === -n ? (e < 0 ? -1 : 1) * 17976931348623157e292 : e == e ? e : 0 : 0 === e ? e : 0
    }
}, 16379, (e, r, t) => {
    var a = e.r(682437);
    r.exports = function(e) {
        var r = a(e),
            t = r % 1;
        return r == r ? t ? r - t : r : 0
    }
}, 852580, (e, r, t) => {
    var a = e.r(647503),
        n = e.r(154193),
        i = e.r(50962),
        s = e.r(141920),
        o = e.r(890892),
        l = e.r(560579),
        u = e.r(767257),
        c = e.r(569923),
        d = e.r(777948),
        f = e.r(16379),
        p = Math.max;
    r.exports = function(e, r, t, v, g, h, x, m) {
        var y = 2 & r;
        if (!y && "function" != typeof e) throw TypeError("Expected a function");
        var _ = v ? v.length : 0;
        if (_ || (r &= -97, v = g = void 0), x = void 0 === x ? x : p(f(x), 0), m = void 0 === m ? m : f(m), _ -= g ? g.length : 0, 64 & r) {
            var C = v,
                b = g;
            v = g = void 0
        }
        var w = y ? void 0 : l(e),
            S = [e, r, t, v, g, C, b, h, x, m];
        if (w && u(S, w), e = S[0], r = S[1], t = S[2], v = S[3], g = S[4], (m = S[9] = void 0 === S[9] ? y ? 0 : e.length : p(S[9] - _, 0)) || !(24 & r) || (r &= -25), r && 1 != r) E = 8 == r || 16 == r ? i(e, r, m) : 32 != r && 33 != r || g.length ? s.apply(void 0, S) : o(e, r, t, v);
        else var E = n(e, r, t);
        return d((w ? a : c)(E, S), e, r)
    }
}, 414462, (e, r, t) => {
    var a = e.r(852580);

    function n(e, r, t) {
        var i = a(e, 16, void 0, void 0, void 0, void 0, void 0, r = t ? void 0 : r);
        return i.placeholder = n.placeholder, i
    }
    n.placeholder = {}, r.exports = n
}, 105836, (e, r, t) => {
    r.exports = function(e, r) {
        for (var t = -1, a = r.length, n = e.length; ++t < a;) e[n + t] = r[t];
        return e
    }
}, 351263, (e, r, t) => {
    var a = e.r(328042),
        n = e.r(410090),
        i = e.r(778116),
        s = a ? a.isConcatSpreadable : void 0;
    r.exports = function(e) {
        return i(e) || n(e) || !!(s && e && e[s])
    }
}, 601362, (e, r, t) => {
    var a = e.r(105836),
        n = e.r(351263);
    r.exports = function e(r, t, i, s, o) {
        var l = -1,
            u = r.length;
        for (i || (i = n), o || (o = []); ++l < u;) {
            var c = r[l];
            t > 0 && i(c) ? t > 1 ? e(c, t - 1, i, s, o) : a(o, c) : s || (o[o.length] = c)
        }
        return o
    }
}, 840779, (e, r, t) => {
    var a = e.r(601362);
    r.exports = function(e) {
        return (null == e ? 0 : e.length) ? a(e, 1) : []
    }
}, 650016, (e, r, t) => {
    var a = e.r(840779),
        n = e.r(184414),
        i = e.r(108749);
    r.exports = function(e) {
        return i(n(e, void 0, a), e + "")
    }
}, 814654, (e, r, t) => {
    var a = e.r(297211),
        n = e.r(650016),
        i = e.r(560579),
        s = e.r(272640),
        o = e.r(778116),
        l = e.r(610903);
    r.exports = function(e) {
        return n(function(r) {
            var t = r.length,
                n = t,
                u = a.prototype.thru;
            for (e && r.reverse(); n--;) {
                var c = r[n];
                if ("function" != typeof c) throw TypeError("Expected a function");
                if (u && !d && "wrapper" == s(c)) var d = new a([], !0)
            }
            for (n = d ? n : t; ++n < t;) {
                var f = s(c = r[n]),
                    p = "wrapper" == f ? i(c) : void 0;
                d = p && l(p[0]) && 424 == p[1] && !p[4].length && 1 == p[9] ? d[s(p[0])].apply(d, p[3]) : 1 == c.length && l(c) ? d[f]() : d.thru(c)
            }
            return function() {
                var e = arguments,
                    a = e[0];
                if (d && 1 == e.length && o(a)) return d.plant(a).value();
                for (var n = 0, i = t ? r[n].apply(this, e) : a; ++n < t;) i = r[n].call(this, i);
                return i
            }
        })
    }
}, 116657, (e, r, t) => {
    r.exports = e.r(814654)()
}, 775041, e => {
    "use strict";
    var r, t = e.i(3931),
        a = e.i(414462),
        n = e.i(116657);
    let i = {
        categories: [],
        subcategories: [],
        selectedSubcategory: null,
        selectedCategory: "",
        allSubcategoriesLabel: ""
    };
    var s = ((r = {}).SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY", r.SET_SUBCATEGORIES = "SET_SUBCATEGORIES", r.SET_SELECTED_SUBCATEGORY = "SET_SELECTED_SUBCATEGORY", r.SET_ALL_SUBCATEGORIES_LABEL = "SET_ALL_SUBCATEGORIES_LABEL", r.INIT_FROM_URL_PARAMS = "INIT_FROM_URL_PARAMS", r);
    let o = (0, t.createContext)([i, () => {}]);
    o.displayName = "FiltersContext";
    let l = (0, a.default)((e, r) => {
        let {
            type: t,
            payload: a
        } = r;
        switch (t) {
            case "SET_SELECTED_CATEGORY": {
                let r, {
                        categoryId: t,
                        subcategoryId: i
                    } = a,
                    {
                        subcategories: s,
                        allSubcategoriesLabel: o = "",
                        localizedAllSubcategoriesLabel: u
                    } = e.categories.find(({
                        _id: e
                    }) => e === t) || {},
                    c = s ?? [];
                if (void 0 === i) {
                    let e = c.find(e => e.makeDefaultLandingSubcategory);
                    r = e?._id ?? null
                } else r = i;
                return (0, n.default)(l({
                    type: "SET_SUBCATEGORIES",
                    payload: c
                }), l({
                    type: "SET_SELECTED_SUBCATEGORY",
                    payload: r
                }), l({
                    type: "SET_ALL_SUBCATEGORIES_LABEL",
                    payload: u ?? o
                }), e => ({
                    ...e,
                    selectedCategory: t
                }))(e)
            }
            case "SET_SUBCATEGORIES":
                return {
                    ...e, subcategories: a
                };
            case "SET_SELECTED_SUBCATEGORY":
                return {
                    ...e, selectedSubcategory: a
                };
            case "SET_ALL_SUBCATEGORIES_LABEL":
                return {
                    ...e, allSubcategoriesLabel: a
                };
            case "INIT_FROM_URL_PARAMS": {
                let {
                    categoryParam: r,
                    subcategoryParam: t
                } = a, n = e.categories.find(({
                    label: e
                }) => e?.toLowerCase() === r) || e.categories[0];
                if (!n) return e;
                let i = n.subcategories ?? [],
                    {
                        _id: s,
                        allSubcategoriesLabel: o = "",
                        localizedAllSubcategoriesLabel: l
                    } = n,
                    u = null;
                if (t) {
                    let e = i.find(e => e.label?.toLowerCase() === t);
                    u = e?._id ?? null
                }
                if (null === u) {
                    let e = i.find(e => e.makeDefaultLandingSubcategory);
                    u = e?._id ?? null
                }
                return {
                    ...e,
                    selectedCategory: s,
                    subcategories: i,
                    selectedSubcategory: u,
                    allSubcategoriesLabel: l ?? o
                }
            }
            default:
                return e
        }
    });
    e.s(["FiltersActionType", () => s, "FiltersContext", 0, o, "default", 0, e => (0, t.useReducer)(l, {
        ...i,
        ...e
    }, e => {
        let r = e.categories[0];
        if (!r) return e;
        let t = r.subcategories ?? [],
            {
                _id: a,
                allSubcategoriesLabel: n = "",
                localizedAllSubcategoriesLabel: i
            } = r,
            s = t.find(e => e.makeDefaultLandingSubcategory);
        return {
            ...e,
            selectedCategory: a,
            subcategories: t,
            selectedSubcategory: s?._id ?? null,
            allSubcategoriesLabel: i ?? n
        }
    })])
}, 185462, e => {
    "use strict";
    let r = e.i(201763).default;
    e.s(["default", 0, r])
}, 691156, e => {
    "use strict";
    var r = e.i(500783),
        t = e.i(3931),
        a = e.i(722978);
    e.s(["default", 0, ({
        children: e,
        title: n,
        isExpanded: i = !1,
        blockKey: s
    }) => {
        let [o, l] = (0, t.useState)(i), u = () => {
            l(!o)
        }, c = (0, a.default)("accordion-content [&_p]:mb-4 [&_ul]:mb-4", {
            "transition ease-in-out opacity-100 h-auto w-5/6 pb-4 loco-text-body text-gray-800 dark:text-gray-100": o,
            "transition ease-in-out opacity-0 h-0 overflow-hidden": !o
        });
        return (0, r.jsxs)("div", {
            className: "border-b border-gray-200 dark:border-gray-800",
            children: [(0, r.jsx)("div", {
                onClick: u,
                onKeyDown: e => {
                    ("Enter" === e.key || " " === e.key) && u()
                },
                role: "button",
                tabIndex: 0,
                "aria-expanded": o,
                className: "cursor-pointer py-6",
                "data-link-location": `${s}-video-play`,
                "data-link-id": `${s}-accordion-toggle`,
                "data-link-type": "CTA",
                children: (0, r.jsxs)("div", {
                    className: "loco-text-body-lg-medium flex justify-between",
                    children: [(0, r.jsx)("h3", {
                        className: "w-11/12 text-gray-800 dark:text-gray-200",
                        children: n
                    }), (0, r.jsx)("span", {
                        className: "inline-block text-gray-700 dark:text-gray-300",
                        children: o ? "-" : "+"
                    })]
                })
            }), (0, r.jsx)("div", {
                className: c,
                "aria-hidden": !o,
                children: e
            })]
        })
    }], 691156)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8c3f5af5-1327-5d54-83b5-49436e00fb23")
    } catch (e) {}
}();
//# debugId=8c3f5af5-1327-5d54-83b5-49436e00fb23