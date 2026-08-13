(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 649051, e => {
    "use strict";
    e.s(["storageAvailable", 0, e => {
        let t;
        try {
            t = window[e];
            let l = "__storage_test__";
            return t.setItem(l, l), t.removeItem(l), !0
        } catch (e) {
            return e instanceof DOMException && "QuotaExceededError" === e.name && t && 0 !== t.length
        }
    }])
}, 976989, e => {
    "use strict";
    var t = e.i(14666);
    e.s(["default", 0, ({
        className: e,
        width: l = 18,
        height: a = 18
    }) => (0, t.jsx)("svg", {
        className: e,
        width: l,
        height: a,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, t.jsx)("path", {
            d: "M13.8001 10.7556L8.33444 1.26375C8.19785 1.0312 8.00287 0.838382 7.76881 0.704408C7.53476 0.570434 7.26975 0.499954 7.00006 0.499954C6.73037 0.499954 6.46536 0.570434 6.23131 0.704408C5.99725 0.838382 5.80227 1.0312 5.66569 1.26375L0.20006 10.7556C0.0686451 10.9805 -0.000610352 11.2364 -0.000610352 11.4969C-0.000610352 11.7574 0.0686451 12.0132 0.20006 12.2381C0.334892 12.4721 0.529541 12.6659 0.764036 12.7998C0.99853 12.9337 1.26442 13.0028 1.53444 13H12.4657C12.7355 13.0026 13.0011 12.9334 13.2354 12.7995C13.4696 12.6656 13.6641 12.4719 13.7988 12.2381C13.9304 12.0133 13.9999 11.7575 14.0001 11.497C14.0003 11.2365 13.9313 10.9807 13.8001 10.7556ZM6.50006 5.5C6.50006 5.36739 6.55274 5.24021 6.64651 5.14644C6.74027 5.05267 6.86745 5 7.00006 5C7.13267 5 7.25985 5.05267 7.35361 5.14644C7.44738 5.24021 7.50006 5.36739 7.50006 5.5V8C7.50006 8.1326 7.44738 8.25978 7.35361 8.35355C7.25985 8.44732 7.13267 8.5 7.00006 8.5C6.86745 8.5 6.74027 8.44732 6.64651 8.35355C6.55274 8.25978 6.50006 8.1326 6.50006 8V5.5ZM7.00006 11C6.85172 11 6.70672 10.956 6.58338 10.8736C6.46005 10.7912 6.36392 10.6741 6.30715 10.537C6.25038 10.4 6.23553 10.2492 6.26447 10.1037C6.29341 9.95819 6.36484 9.82455 6.46973 9.71967C6.57462 9.61478 6.70826 9.54335 6.85374 9.51441C6.99923 9.48547 7.15003 9.50032 7.28707 9.55709C7.42412 9.61385 7.54125 9.70998 7.62366 9.83332C7.70607 9.95665 7.75006 10.1017 7.75006 10.25C7.75006 10.4489 7.67104 10.6397 7.53039 10.7803C7.38974 10.921 7.19897 11 7.00006 11Z",
            fill: "currentColor"
        })
    })])
}, 620174, 117696, 441737, e => {
    "use strict";
    var t = e.i(14666),
        l = e.i(499531),
        a = e.i(722978),
        r = e.i(679933),
        s = e.i(776050),
        i = e.i(429305),
        o = e.i(260840),
        n = e.i(513485),
        d = e.i(869049),
        c = e.i(860700),
        u = e.i(803258),
        h = e.i(251635);

    function m(e, t) {
        let {
            inputElementType: a = "input",
            isDisabled: m = !1,
            isRequired: x = !1,
            isReadOnly: p = !1,
            type: g = "text",
            validationBehavior: f = "aria"
        } = e, [b, j] = (0, u.useControlledState)(e.value, e.defaultValue || "", e.onChange), {
            focusableProps: v
        } = (0, n.useFocusable)(e, t), C = (0, h.useFormValidationState)({
            ...e,
            value: b
        }), {
            isInvalid: y,
            validationErrors: w,
            validationDetails: k
        } = C.displayValidation, {
            labelProps: N,
            fieldProps: A,
            descriptionProps: L,
            errorMessageProps: M
        } = (0, o.useField)({
            ...e,
            isInvalid: y,
            errorMessage: e.errorMessage || w
        }), T = (0, r.filterDOMProps)(e, {
            labelable: !0
        }), _ = {
            type: g,
            pattern: e.pattern
        }, [$] = (0, l.useState)(b);
        return (0, d.useFormReset)(t, e.defaultValue ?? $, j), (0, c.useFormValidation)(e, C, t), {
            labelProps: N,
            inputProps: (0, i.mergeProps)(T, "input" === a ? _ : void 0, {
                disabled: m,
                readOnly: p,
                required: x && "native" === f,
                "aria-required": x && "aria" === f || void 0,
                "aria-invalid": y || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-activedescendant": e["aria-activedescendant"],
                "aria-autocomplete": e["aria-autocomplete"],
                "aria-haspopup": e["aria-haspopup"],
                "aria-controls": e["aria-controls"],
                value: b,
                onChange: e => j((0, s.getEventTarget)(e).value),
                autoComplete: e.autoComplete,
                autoCapitalize: e.autoCapitalize,
                maxLength: e.maxLength,
                minLength: e.minLength,
                name: e.name,
                form: e.form,
                placeholder: e.placeholder,
                inputMode: e.inputMode,
                autoCorrect: e.autoCorrect,
                spellCheck: e.spellCheck,
                [parseInt(l.default.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: e.enterKeyHint,
                onCopy: e.onCopy,
                onCut: e.onCut,
                onPaste: e.onPaste,
                onCompositionEnd: e.onCompositionEnd,
                onCompositionStart: e.onCompositionStart,
                onCompositionUpdate: e.onCompositionUpdate,
                onSelect: e.onSelect,
                onBeforeInput: e.onBeforeInput,
                onInput: e.onInput,
                ...v,
                ...A
            }),
            descriptionProps: L,
            errorMessageProps: M,
            isInvalid: y,
            validationErrors: w,
            validationDetails: k
        }
    }
    e.s(["useTextField", 0, m], 117696);
    var x = e.i(838031);
    let p = l.default.forwardRef((e, l) => {
        let {
            disabled: r,
            hasError: s,
            inputSize: i,
            hasWarning: o,
            isTextArea: n
        } = e, d = (0, x.useObjectRef)(l), {
            inputProps: c
        } = m({
            ...e,
            autoCapitalize: "none",
            inputElementType: "input"
        }, d), u = (0, a.default)("rounded-lg w-full border border-gray-200 outline-blue focus:ring-3 focus:ring-blue-dark focus:outline-blue focus:outline-offset-0 transition-all ease-out duration-400", "text-gray-900 dark:text-gray-400 dark:text-white", "placeholder-gray-600 dark:placeholder-gray-400", {
            "h-10 py-2.5 px-2": "small" === i,
            "h-12 py-3.5 px-3": "medium" === i,
            "h-14 py-5 px-4": "large" === i
        }, {
            "bg-gray-100 dark:bg-gray-800 cursor-not-allowed": r,
            "border-yellow-500 dark:border-yellow-500 border-2": o,
            "border-red-500 dark:border-red-500 border-2": s
        }, {
            "bg-gray-50 dark:bg-gray-900": !r,
            "border-gray-400 hover:border-gray-900 dark:border-gray-500 dark:hover:border-white": !s && !o
        }, {
            "min-h-[6rem]": n
        });
        return n ? (0, t.jsx)("textarea", {
            ...c,
            "aria-labelledby": e["aria-labelledby"] || c["aria-labelledby"],
            ref: d,
            className: u,
            disabled: r
        }) : (0, t.jsx)("input", {
            ...c,
            "aria-labelledby": e["aria-labelledby"] || c["aria-labelledby"],
            ref: d,
            className: u,
            disabled: r
        })
    });
    p.displayName = "InputField";
    var g = e.i(976989);
    let f = ({
            className: e,
            width: l = 18,
            height: a = 18
        }) => (0, t.jsx)("svg", {
            className: e,
            width: l,
            height: a,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, t.jsx)("path", {
                d: "M7 0.5C5.71442 0.5 4.45772 0.881218 3.3888 1.59545C2.31988 2.30968 1.48676 3.32484 0.994786 4.51256C0.502816 5.70028 0.374095 7.00721 0.624899 8.26809C0.875703 9.52896 1.49477 10.6872 2.40381 11.5962C3.31285 12.5052 4.47104 13.1243 5.73192 13.3751C6.99279 13.6259 8.29973 13.4972 9.48744 13.0052C10.6752 12.5132 11.6903 11.6801 12.4046 10.6112C13.1188 9.54229 13.5 8.28558 13.5 7C13.4982 5.27665 12.8128 3.62441 11.5942 2.40582C10.3756 1.18722 8.72335 0.50182 7 0.5ZM9.35375 8.64625C9.40021 8.69271 9.43706 8.74786 9.4622 8.80855C9.48734 8.86925 9.50028 8.9343 9.50028 9C9.50028 9.0657 9.48734 9.13075 9.4622 9.19145C9.43706 9.25214 9.40021 9.30729 9.35375 9.35375C9.3073 9.40021 9.25215 9.43705 9.19145 9.4622C9.13075 9.48734 9.0657 9.50028 9 9.50028C8.93431 9.50028 8.86925 9.48734 8.80855 9.4622C8.74786 9.43705 8.69271 9.40021 8.64625 9.35375L7 7.70687L5.35375 9.35375C5.3073 9.40021 5.25215 9.43705 5.19145 9.4622C5.13075 9.48734 5.0657 9.50028 5 9.50028C4.93431 9.50028 4.86925 9.48734 4.80855 9.4622C4.74786 9.43705 4.69271 9.40021 4.64625 9.35375C4.5998 9.30729 4.56295 9.25214 4.53781 9.19145C4.51266 9.13075 4.49972 9.0657 4.49972 9C4.49972 8.9343 4.51266 8.86925 4.53781 8.80855C4.56295 8.74786 4.5998 8.69271 4.64625 8.64625L6.29313 7L4.64625 5.35375C4.55243 5.25993 4.49972 5.13268 4.49972 5C4.49972 4.86732 4.55243 4.74007 4.64625 4.64625C4.74007 4.55243 4.86732 4.49972 5 4.49972C5.13268 4.49972 5.25993 4.55243 5.35375 4.64625L7 6.29313L8.64625 4.64625C8.69271 4.59979 8.74786 4.56294 8.80855 4.5378C8.86925 4.51266 8.93431 4.49972 9 4.49972C9.0657 4.49972 9.13075 4.51266 9.19145 4.5378C9.25215 4.56294 9.3073 4.59979 9.35375 4.64625C9.40021 4.6927 9.43706 4.74786 9.4622 4.80855C9.48734 4.86925 9.50028 4.9343 9.50028 5C9.50028 5.0657 9.48734 5.13075 9.4622 5.19145C9.43706 5.25214 9.40021 5.3073 9.35375 5.35375L7.70688 7L9.35375 8.64625Z",
                fill: "currentColor"
            })
        }),
        b = ({
            className: e,
            width: l = 18,
            height: a = 18
        }) => (0, t.jsx)("svg", {
            className: e,
            width: l,
            height: a,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, t.jsx)("path", {
                d: "M8 1.5C6.71442 1.5 5.45772 1.88122 4.3888 2.59545C3.31988 3.30968 2.48676 4.32484 1.99479 5.51256C1.50282 6.70028 1.37409 8.00721 1.6249 9.26809C1.8757 10.529 2.49477 11.6872 3.40381 12.5962C4.31285 13.5052 5.47104 14.1243 6.73192 14.3751C7.99279 14.6259 9.29973 14.4972 10.4874 14.0052C11.6752 13.5132 12.6903 12.6801 13.4046 11.6112C14.1188 10.5423 14.5 9.28558 14.5 8C14.4982 6.27665 13.8128 4.62441 12.5942 3.40582C11.3756 2.18722 9.72335 1.50182 8 1.5ZM7.75 4.5C7.89834 4.5 8.04334 4.54399 8.16668 4.6264C8.29002 4.70881 8.38615 4.82594 8.44291 4.96299C8.49968 5.10003 8.51453 5.25083 8.48559 5.39632C8.45665 5.5418 8.38522 5.67544 8.28033 5.78033C8.17544 5.88522 8.04181 5.95665 7.89632 5.98559C7.75083 6.01453 7.60003 5.99968 7.46299 5.94291C7.32595 5.88614 7.20881 5.79001 7.1264 5.66668C7.04399 5.54334 7 5.39834 7 5.25C7 5.05109 7.07902 4.86032 7.21967 4.71967C7.36032 4.57902 7.55109 4.5 7.75 4.5ZM8.5 11.5C8.23479 11.5 7.98043 11.3946 7.7929 11.2071C7.60536 11.0196 7.5 10.7652 7.5 10.5V8C7.36739 8 7.24022 7.94732 7.14645 7.85355C7.05268 7.75979 7 7.63261 7 7.5C7 7.36739 7.05268 7.24021 7.14645 7.14645C7.24022 7.05268 7.36739 7 7.5 7C7.76522 7 8.01957 7.10536 8.20711 7.29289C8.39465 7.48043 8.5 7.73478 8.5 8V10.5C8.63261 10.5 8.75979 10.5527 8.85356 10.6464C8.94732 10.7402 9 10.8674 9 11C9 11.1326 8.94732 11.2598 8.85356 11.3536C8.75979 11.4473 8.63261 11.5 8.5 11.5Z",
                fill: "currentColor"
            })
        }),
        j = e => {
            let {
                helperText: a,
                hasError: r,
                hasWarning: s
            } = e, {
                descriptionProps: i
            } = m(e, (0, l.useRef)(null));
            return (0, t.jsxs)("div", {
                ...i,
                className: "align-items flex pt-2 text-xs",
                children: [r && (0, t.jsx)(f, {
                    className: "inline pr-1 text-red-600"
                }), s && (0, t.jsx)(g.default, {
                    className: "inline pr-1 text-yellow-600"
                }), !s && !r && (0, t.jsx)(b, {
                    className: "inline pr-1 text-gray-600 dark:text-gray-100"
                }), a]
            })
        };
    e.s(["default", 0, j], 441737);
    let v = ({
            className: e,
            ...l
        }) => (0, t.jsxs)("label", {
            id: l.id,
            htmlFor: l.for,
            className: e ?? "flex justify-between pb-2",
            children: [l.label, l.isRequired && (0, t.jsx)("span", {
                className: "text-sm text-gray-400",
                children: l.requiredText
            })]
        }),
        C = (0, l.forwardRef)(({
            helperText: e,
            ...a
        }, r) => {
            let s = (0, l.useId)();
            return (0, t.jsxs)("div", {
                ref: r,
                children: [(0, t.jsx)(v, {
                    ...a,
                    id: s
                }), (0, t.jsx)(p, {
                    ...a,
                    "aria-labelledby": s
                }), e && (0, t.jsx)(j, {
                    helperText: e,
                    ...a
                })]
            })
        });
    C.displayName = "Input", e.s(["default", 0, C], 620174)
}, 701039, (e, t, l) => {
    t.exports = function(e) {
        return e
    }
}, 865799, (e, t, l) => {
    t.exports = function(e, t, l) {
        switch (l.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, l[0]);
            case 2:
                return e.call(t, l[0], l[1]);
            case 3:
                return e.call(t, l[0], l[1], l[2])
        }
        return e.apply(t, l)
    }
}, 911818, (e, t, l) => {
    var a = Date.now;
    t.exports = function(e) {
        var t = 0,
            l = 0;
        return function() {
            var r = a(),
                s = 16 - (r - l);
            if (l = r, s > 0) {
                if (++t >= 800) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
}, 830747, (e, t, l) => {
    t.exports = function(e) {
        return function() {
            return e
        }
    }
}, 599568, (e, t, l) => {
    var a = e.r(581511);
    t.exports = function() {
        try {
            var e = a(Object, "defineProperty");
            return e({}, "", {}), e
        } catch (e) {}
    }()
}, 317508, (e, t, l) => {
    var a = e.r(830747),
        r = e.r(599568),
        s = e.r(701039);
    t.exports = r ? function(e, t) {
        return r(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: a(t),
            writable: !0
        })
    } : s
}, 108749, (e, t, l) => {
    var a = e.r(317508);
    t.exports = e.r(911818)(a)
}, 531766, (e, t, l) => {
    t.exports = function(e, t) {
        for (var l = -1, a = null == e ? 0 : e.length; ++l < a && !1 !== t(e[l], l, e););
        return e
    }
}, 860059, (e, t, l) => {
    var a = /^(?:0|[1-9]\d*)$/;
    t.exports = function(e, t) {
        var l = typeof e;
        return !!(t = null == t ? 0x1fffffffffffff : t) && ("number" == l || "symbol" != l && a.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
}, 184414, (e, t, l) => {
    var a = e.r(865799),
        r = Math.max;
    t.exports = function(e, t, l) {
        return t = r(void 0 === t ? e.length - 1 : t, 0),
            function() {
                for (var s = arguments, i = -1, o = r(s.length - t, 0), n = Array(o); ++i < o;) n[i] = s[t + i];
                i = -1;
                for (var d = Array(t + 1); ++i < t;) d[i] = s[i];
                return d[t] = l(n), a(e, this, d)
            }
    }
}, 129824, e => {
    "use strict";
    e.s(["DATA_REQUEST", 0, "/data-request", "DEFAULT_PAGES_NO_MT_BANNER", 0, ["/made-with-unity"], "L1_PAGES_NO_MT_BANNER", 0, ["/our-company", "/community", "/industry", "/use-cases", "/releases/unity-6"], "PRODUCTS_PAGES_NO_MT_BANNER", 0, ["/products"], "PRODUCTS_PRODUCTS_PAGES_NO_MT_BANNER", 0, ["/products/unity-pro", "/products/unity-engine", "/products/compare-plans", "/products/compare-plans/unity-cloud"], "RESOURCES_PAGES_NO_MT_BANNER", 0, ["/resources"], "SOLUTIONS_PAGES_NO_MT_BANNER", 0, ["/download", "/roadmap", "/pages/pro-free-trial", "/games", "/solutions", "/developer-tools", "/how-to", "/learn", "/learn/get-started", "/releases/lts-vs-tech-stream"]])
}, 596889, e => {
    "use strict";
    var t = e.i(14666),
        l = e.i(722978);
    let a = ({
        children: e,
        className: a = "",
        variant: r = "default"
    }) => {
        let s = (0, l.clsx)({
            default: "bg-white dark:bg-gray-900 rounded-xl",
            padded: "p-6 bg-white dark:bg-gray-900 rounded-xl",
            transparent: ""
        } [r], a);
        return (0, t.jsx)("div", {
            className: s,
            children: e
        })
    };
    a.Content = ({
        children: e,
        className: l = "w-full"
    }) => (0, t.jsx)("div", {
        className: l,
        children: e
    }), a.Image = ({
        children: e,
        withinContainer: a
    }) => {
        let r = (0, l.clsx)("card-img relative w-full", {
            "[&>img]:!static !h-auto": a
        });
        return (0, t.jsx)("div", {
            className: r,
            children: e
        })
    }, e.s(["default", 0, a], 596889)
}, 164163, e => {
    "use strict";
    var t = e.i(14666),
        l = e.i(722978),
        a = e.i(74038),
        r = e.i(825610),
        s = e.i(749583),
        i = e.i(596889),
        o = e.i(805518);
    e.s(["default", 0, ({
        title: e,
        cards: n,
        layout: d = "four-cards",
        cardVariant: c = "default",
        scroll: u = !1,
        cardsHeading: h
    }) => {
        let m = h || (e ? "h3" : "h2"),
            x = (0, l.clsx)("gap-4 md:gap-8", {
                "grid grid-cols-12": !u,
                "flex overflow-x-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-900 dark:scrollbar-track-gray-900 dark:scrollbar-thumb-gray-100": u
            });
        return (0, t.jsx)("section", {
            className: "bg-white dark:bg-black",
            children: (0, t.jsxs)("div", {
                className: "container py-16",
                children: [e && (0, t.jsx)("h2", {
                    className: "loco-text-heading-md mb-9 text-center",
                    children: e
                }), (0, t.jsx)("div", {
                    className: x,
                    children: n?.map((n, h) => {
                        let x = (0, l.clsx)("flex flex-wrap flex-row", !u && ({
                                "two-cards": "col-span-12 md:col-span-6 [&>div>.card-img]:h-72",
                                "three-cards": "col-span-12 md:col-span-6 lg:col-span-4 [&>div>.card-img]:h-44",
                                "four-cards": "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 [&>div>.card-img]:h-36"
                            })[d], u && ({
                                "two-cards": "mb-6 min-w-[35rem] [&>div>.card-img]:h-72",
                                "three-cards": "mb-6 min-w-[22rem] [&>div>.card-img]:h-44",
                                "four-cards": "mb-6 min-w-[16rem] [&>div>.card-img]:h-36"
                            })[d]),
                            p = (0, l.clsx)("place-self-end", {
                                "px-6 pb-6": "default" === c || "transparent" === c
                            }),
                            g = (0, l.clsx)({
                                "p-6": "default" === c || "transparent" === c,
                                "py-6": "padded" === c
                            }),
                            f = (0, l.clsx)("object-cover", {
                                "rounded-t-xl": "default" === c || "transparent" === c,
                                rounded: "padded" === c
                            }),
                            b = (0, l.clsx)("caption-xs mt-1 text-right text-gray-400", {
                                "mr-1": "padded" !== c
                            });
                        return (0, t.jsxs)(i.default, {
                            className: x,
                            variant: c,
                            children: [(0, t.jsxs)(i.default.Content, {
                                children: [n.image && n.image.src && (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsx)(i.default.Image, {
                                        withinContainer: n.image.withinContainer,
                                        children: (0, t.jsx)(a.default, {
                                            src: n.image.src ?? "",
                                            alt: n.image.alt ?? "",
                                            fill: !0,
                                            className: f,
                                            quality: 100
                                        })
                                    }), n.image.description && (0, t.jsx)(o.default, {
                                        className: b,
                                        children: n.image.description
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: g,
                                    children: [n.icon && n.icon.src && (0, t.jsx)("div", {
                                        className: "relative mb-5 dark:invert",
                                        children: (0, t.jsx)(a.default, {
                                            src: n.icon.src ?? "",
                                            alt: n.icon.alt ?? "",
                                            quality: 100,
                                            width: 23,
                                            height: 23
                                        })
                                    }), (0, t.jsx)(m, {
                                        className: "loco-text-body-lg-medium mb-4 !font-semibold",
                                        children: n.title
                                    }), n.description && (0, t.jsx)(o.default, {
                                        className: "loco-text-body mb-4",
                                        children: n.description
                                    }), n.richText && (0, t.jsx)(o.default, {
                                        className: "loco-text-body mb-4 text-gray-600 dark:text-gray-300",
                                        children: n.richText
                                    })]
                                })]
                            }), n.actions && (0, t.jsx)("div", {
                                className: p,
                                children: n.actions.map((e, l) => (0, t.jsx)(s.default, {
                                    href: e.href,
                                    target: e.target ?? "_self",
                                    rounded: !0,
                                    hasArrow: !0,
                                    outlined: 0 === l,
                                    className: 0 === l ? "mr-3" : "mt-4",
                                    variant: 0 === l ? "primary" : "secondary",
                                    "data-link-location": r.trackingLocation.cardsAction,
                                    "data-link-id": `${r.trackingLocation.cardsAction}-${l}`,
                                    children: e.title
                                }, `${e.title}-${l}`))
                            })]
                        }, `card-${h}-${e}`)
                    })
                })]
            })
        })
    }], 164163)
}, 379294, e => {
    e.q("/_next/static/media/unity-fallback-1.05foy1lz0fhig.jpg")
}, 462847, e => {
    e.q("/_next/static/media/unity-fallback-2.0od666pl17uax.jpg")
}, 245094, e => {
    e.q("/_next/static/media/unity-fallback-3.01ai2jdgw500k.jpg")
}, 567134, 186114, e => {
    "use strict";
    var t = e.i(14666),
        l = e.i(499531),
        a = e.i(722978),
        r = e.i(131581),
        s = e.i(124576),
        i = e.i(74038),
        o = e.i(10747),
        n = e.i(825610),
        d = e.i(783078),
        c = e.i(749583);
    let u = ({
        className: e,
        handleIsPlaying: l,
        label: a,
        ...r
    }) => (0, t.jsx)("div", {
        className: e,
        children: (0, t.jsx)("button", {
            className: "transition-bg bg-blue hover:bg-blue-dark flex h-20 w-20 transform items-center justify-center rounded-full duration-300",
            onClick: l,
            type: "button",
            "aria-label": a,
            ...r,
            children: (0, t.jsx)("span", {
                className: "block h-6 w-6",
                children: (0, t.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 20 20",
                    children: (0, t.jsx)("path", {
                        fill: "#fff",
                        stroke: "#fff",
                        d: "M17.95 9.998v.004a.429.429 0 0 1-.207.37l-.004.001L6.483 17.26a.45.45 0 0 1-.456.009l-.002-.001a.44.44 0 0 1-.164-.16l-.69.404.69-.405a.44.44 0 0 1-.061-.221V3.116a.439.439 0 0 1 .225-.382l.002-.001a.45.45 0 0 1 .455.008L17.74 9.627l.003.003a.429.429 0 0 1 .208.368Z"
                    })
                })
            })
        })
    });
    e.s(["default", 0, u], 186114);
    var h = e.i(595388);
    let m = (0, o.default)(() => e.A(104688), {
        loadableGenerated: {
            modules: [425687]
        },
        ssr: !1
    });
    e.s(["default", 0, ({
        title: e,
        description: o,
        image: x,
        video: p,
        action: g,
        variant: f = "column",
        videoInline: b = !0,
        buttonLabel: j = "Play video",
        blockKey: v,
        titleTag: C = "h3",
        locale: y,
        index: w
    }) => {
        let k = v || n.trackingLocation.uniteCard,
            N = void 0 !== w ? `${k}-${w}` : k,
            A = (0, l.useRef)(null),
            [L, M] = (0, l.useState)(!1),
            T = (0, r.useInView)(A),
            _ = (0, s.useReducedMotion)(),
            $ = () => {
                M(!0)
            };
        (0, l.useEffect)(() => {
            b ? M(T) : T || M(!1)
        }, [T, b]);
        let E = (0, a.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": L && !_ && T && p?.src
            }),
            B = "horizontal" === f && g,
            R = (0, a.default)("flex flex-col", {
                "min-h-[14rem]": "stacked" === f || "column" === f,
                grow: "column" !== f && "horizontal" !== f,
                "min-h-[14rem] xl:min-h-[18rem] xl:flex-row xl:gap-4": "column" === f
            }),
            S = (0, a.default)("rounded-lg bg-gray-100 p-4 dark:bg-gray-900", {
                "h-full": "horizontal" !== f,
                "group h-full relative p-[1px] xl:flex-row xl:gap-6 cursor-pointer": "horizontal" === f && B,
                "h-full relative p-[1px] xl:flex-row xl:gap-6 cursor-auto": "horizontal" === f && !B
            }),
            P = (0, a.default)("relative overflow-hidden rounded-lg", {
                "aspect-video w-full": "horizontal" !== f,
                "aspect-video w-full xl:flex-shrink-0 xl:self-start xl:max-w-1/2": "horizontal" === f
            }),
            I = (0, a.default)("cover absolute object-cover", {
                "transition-transform duration-400 group-hover:scale-110": "horizontal" === f && B
            }),
            D = (0, t.jsxs)("div", {
                ref: A,
                className: S,
                children: ["horizontal" === f && B && (0, t.jsx)("div", {
                    className: "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-400 [background:linear-gradient(to_top,#000_0%,#666_60%,#666_100%)] group-hover:opacity-100"
                }), (0, t.jsxs)("div", {
                    className: (0, a.default)({
                        "relative z-10 flex h-full flex-col gap-6 rounded-lg bg-gray-100 p-3 xl:w-full xl:flex-row dark:bg-gray-900": "horizontal" === f,
                        "flex h-full flex-col justify-between gap-4": "horizontal" !== f
                    }),
                    children: [(x?.src || p?.src) && (0, t.jsxs)("div", {
                        className: P,
                        children: [p?.src && (0, t.jsx)(m, {
                            url: p.src,
                            playing: L && T && !_,
                            loop: !!b,
                            muted: b,
                            playsinline: b && !_,
                            width: "100%",
                            height: "100%",
                            className: "absolute top-0 left-0 [&>video]:object-cover",
                            onReady: () => {
                                b && M(!0)
                            },
                            controls: !b,
                            config: {
                                hlsOptions: {
                                    maxMaxBufferLength: 1,
                                    startLevel: 1
                                }
                            }
                        }), x && (0, t.jsxs)("div", {
                            className: E,
                            onClick: $,
                            children: [!b && (0, t.jsx)(u, {
                                handleIsPlaying: $,
                                className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                label: j,
                                "data-link-location": N,
                                "data-link-id": `${N}-video-play`
                            }), (0, t.jsx)(i.default, {
                                src: x.src,
                                placeholder: x.placeholder ? "blur" : "empty",
                                blurDataURL: x.placeholder,
                                fill: !0,
                                alt: x.alt ?? "",
                                className: I,
                                sizes: `(min-width: ${d.default.Large}px) 33vw, (min-width: ${d.default.Medium}px) 50vw, 100vw`
                            })]
                        })]
                    }), (0, t.jsx)("div", {
                        className: (0, a.default)(R),
                        children: "column" !== f && "horizontal" !== f ? (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(C, {
                                className: "loco-text-body-lg-medium -mt-2",
                                children: e
                            }), (0, t.jsxs)("div", {
                                className: "flex shrink-0 grow flex-col justify-between",
                                children: [(0, t.jsx)("div", {
                                    className: "loco-text-body mt-2 whitespace-pre-line text-gray-700 dark:text-gray-400",
                                    children: o
                                }), (g?.href && g?.label || g?.renderModal) && (0, t.jsx)("div", {
                                    className: "mt-8",
                                    children: g?.renderModal ? g.renderModal() : (0, t.jsx)(c.default, {
                                        locale: y,
                                        href: B ? void 0 : g.href,
                                        target: g.target,
                                        outlined: !0,
                                        rounded: !0,
                                        hasArrow: !0,
                                        tag: B ? "span" : "button",
                                        "data-link-location": N,
                                        "data-link-id": `${N}-cta`,
                                        children: g.label
                                    })
                                })]
                            })]
                        }) : "horizontal" === f ? (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(C, {
                                className: "loco-text-body-lg-medium -mt-2 lg:mt-0",
                                children: e
                            }), (0, t.jsxs)("div", {
                                className: "flex shrink-0 grow flex-col justify-between lg:flex-1",
                                children: [(0, t.jsx)("div", {
                                    className: "loco-text-body mt-2 line-clamp-5 whitespace-pre-line text-gray-700 lg:line-clamp-3 lg:text-gray-900 dark:text-gray-400 lg:dark:text-white",
                                    children: o
                                }), (g?.href && g?.label || g?.renderModal) && (0, t.jsx)("div", {
                                    className: "mt-8 lg:mt-6",
                                    children: g?.renderModal ? g.renderModal() : (0, t.jsx)(c.default, {
                                        locale: y,
                                        href: B ? void 0 : g.href,
                                        target: g.target,
                                        outlined: !0,
                                        rounded: !0,
                                        hasArrow: !0,
                                        tag: B ? "span" : "button",
                                        "data-link-location": N,
                                        "data-link-id": `${N}-cta`,
                                        children: g.label
                                    })
                                })]
                            })]
                        }) : (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(C, {
                                className: "loco-text-body-lg-medium -mt-2 xl:w-2/5",
                                children: e
                            }), (0, t.jsxs)("div", {
                                className: "flex shrink-0 grow flex-col justify-between xl:-mt-1 xl:w-3/5",
                                children: [(0, t.jsx)("div", {
                                    className: "loco-text-body mt-1 whitespace-pre-line xl:mt-0",
                                    children: o
                                }), (g?.href && g?.label || g?.renderModal) && (0, t.jsx)("div", {
                                    children: g?.renderModal ? g.renderModal() : (0, t.jsx)(c.default, {
                                        locale: y,
                                        href: B ? void 0 : g.href,
                                        target: g.target,
                                        outlined: !0,
                                        rounded: !0,
                                        hasArrow: !0,
                                        tag: B ? "span" : "button",
                                        "data-link-location": N,
                                        "data-link-id": `${N}-cta`,
                                        children: g.label
                                    })
                                })]
                            })]
                        })
                    })]
                })]
            });
        return B ? (0, t.jsx)(h.Link, {
            href: g.href,
            target: g.target,
            className: "cursor-pointer",
            "data-link-location": N,
            "data-link-id": `${N}-link-wrapper`,
            children: D
        }) : D
    }], 567134)
}, 549134, e => {
    "use strict";
    let t = {
        src: e.i(379294).default,
        width: 3840,
        height: 2160,
        blurWidth: 8,
        blurHeight: 5,
        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAALCAAFAAgBAREA/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/APLZ9Vnvz+/AYDoDzX//2Q=="
    };
    e.s(["default", 0, t])
}, 930839, (e, t, l) => {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), l.default = void 0, l.default = {
        hljs: {
            display: "block",
            overflowX: "auto",
            padding: "0.5em",
            background: "#272822",
            color: "#ddd"
        },
        "hljs-tag": {
            color: "#f92672"
        },
        "hljs-keyword": {
            color: "#f92672",
            fontWeight: "bold"
        },
        "hljs-selector-tag": {
            color: "#f92672",
            fontWeight: "bold"
        },
        "hljs-literal": {
            color: "#f92672",
            fontWeight: "bold"
        },
        "hljs-strong": {
            color: "#f92672"
        },
        "hljs-name": {
            color: "#f92672"
        },
        "hljs-code": {
            color: "#66d9ef"
        },
        "hljs-class .hljs-title": {
            color: "white"
        },
        "hljs-attribute": {
            color: "#bf79db"
        },
        "hljs-symbol": {
            color: "#bf79db"
        },
        "hljs-regexp": {
            color: "#bf79db"
        },
        "hljs-link": {
            color: "#bf79db"
        },
        "hljs-string": {
            color: "#a6e22e"
        },
        "hljs-bullet": {
            color: "#a6e22e"
        },
        "hljs-subst": {
            color: "#a6e22e"
        },
        "hljs-title": {
            color: "#a6e22e",
            fontWeight: "bold"
        },
        "hljs-section": {
            color: "#a6e22e",
            fontWeight: "bold"
        },
        "hljs-emphasis": {
            color: "#a6e22e"
        },
        "hljs-type": {
            color: "#a6e22e",
            fontWeight: "bold"
        },
        "hljs-built_in": {
            color: "#a6e22e"
        },
        "hljs-builtin-name": {
            color: "#a6e22e"
        },
        "hljs-selector-attr": {
            color: "#a6e22e"
        },
        "hljs-selector-pseudo": {
            color: "#a6e22e"
        },
        "hljs-addition": {
            color: "#a6e22e"
        },
        "hljs-variable": {
            color: "#a6e22e"
        },
        "hljs-template-tag": {
            color: "#a6e22e"
        },
        "hljs-template-variable": {
            color: "#a6e22e"
        },
        "hljs-comment": {
            color: "#75715e"
        },
        "hljs-quote": {
            color: "#75715e"
        },
        "hljs-deletion": {
            color: "#75715e"
        },
        "hljs-meta": {
            color: "#75715e"
        },
        "hljs-doctag": {
            fontWeight: "bold"
        },
        "hljs-selector-id": {
            fontWeight: "bold"
        }
    }
}, 480880, 570133, 210310, e => {
    "use strict";
    var t = e.i(14666),
        l = e.i(499531);
    e.s(["default", 0, ({
        blocks: e,
        blockMap: a,
        ...r
    }) => (0, t.jsx)(t.Fragment, {
        children: e?.map((e, s) => {
            let i = e?._type,
                o = a[i];
            return e.isHidden ? null : o ? (0, t.jsx)("div", {
                children: l.default.createElement(o, {
                    key: `block-${s}`,
                    ...e,
                    blockIndex: s + 1,
                    blockType: i,
                    blockKey: `${i}-${s}`,
                    ...r
                })
            }, `block-${s}`) : void 0
        })
    })], 480880);
    var a = e.i(537655),
        r = e.i(930839),
        s = e.i(46860),
        i = e.i(525296),
        o = e.i(952405),
        n = e.i(852529),
        d = e.i(847331);
    a.Light.registerLanguage("csharp", s.default), a.Light.registerLanguage("javascript", i.default), a.Light.registerLanguage("xml", o.default), a.Light.registerLanguage("rust", n.default), a.Light.registerLanguage("css", d.default), e.s(["default", 0, ({
        code: e,
        language: l
    }) => (0, t.jsx)("div", {
        className: "text-white [&>pre]:rounded-xl [&>pre]:!p-4",
        children: (0, t.jsx)(a.Light, {
            style: r.default,
            language: l,
            children: e
        })
    })], 570133);
    var c = e.i(749583),
        u = e.i(206775),
        h = e.i(652955),
        m = e.i(229696),
        x = e.i(722978),
        p = e.i(805518),
        g = e.i(363737);
    let f = ({
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
        b = ({
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
        j = ({
            children: e,
            colTitle: a,
            truncationEnabled: r,
            rowTitle: s,
            className: i = "",
            isTableCell: o
        }) => {
            let [n, d] = (0, l.useState)(!1), [u, h] = (0, l.useState)(!1), m = (0, l.useRef)(null), j = (0, x.default)({
                "cursor-pointer relative": n
            }, i), v = (0, x.default)({
                "line-clamp-3": r
            });
            (0, l.useEffect)(() => {
                let e = m.current;
                e && (e.scrollHeight > e.clientHeight ? d(!0) : d(!1))
            }, [m]);
            let C = () => {
                    h(!0)
                },
                y = r && n ? {
                    tabIndex: 0,
                    role: "button",
                    onClick: C,
                    onKeyDown: e => {
                        ("Enter" === e.key || "Space" === e.key) && C()
                    }
                } : {};
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsxs)("td", {
                    className: (0, x.default)(j, {
                        "bg-gray-50 p-3 dark:bg-gray-900": !o,
                        "h-full !p-0": o
                    }),
                    ...y,
                    children: [o ? e : (0, t.jsx)(p.default, {
                        className: v,
                        ref: m,
                        children: e
                    }), r && n && (0, t.jsx)(f, {
                        className: "absolute top-1.5 right-1.5"
                    })]
                }), (0, t.jsx)(g.default, {
                    isOpen: u,
                    onOpenChange: h,
                    showTriggerButton: !1,
                    children: (0, t.jsxs)("div", {
                        className: "mt-20 flex w-6/12 flex-col rounded-3xl bg-white p-8 dark:bg-gray-800",
                        tabIndex: -1,
                        children: [(0, t.jsx)(c.default, {
                            onPress: () => {
                                h(!1)
                            },
                            variant: "secondary",
                            className: "self-end",
                            children: (0, t.jsx)(b, {})
                        }), (0, t.jsx)(p.default, {
                            className: "caption-sm mb-2.5 text-black dark:text-white",
                            children: s
                        }), (0, t.jsx)("div", {
                            className: "text-heading-sm mb-4 text-black dark:text-white",
                            children: a
                        }), (0, t.jsx)("div", {
                            className: "text-small mb-8",
                            children: (0, t.jsx)(p.default, {
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
        className: a = "",
        verticalHeadingClass: r = "",
        hideTitle: s = !1
    }) => {
        let [i, ...o] = e.rows.map(e => ({
            ...e,
            cells: (e.cells ?? []).map(e => "string" == typeof e ? e : "")
        })), n = `align-top text-heading-sm md:text-small-bold rounded-md bg-gray-100 text-gray-800 bg-gray-100 dark:bg-gray-700 md:dark:bg-gray-800 dark:text-gray-200 border-none ${r}`, d = "align-top rounded-md text-sm text-gray-800 dark:text-gray-200 border-none", g = (0, x.default)("w-full table-fixed border-separate border-spacing-2 break-words", a), f = (0, x.default)("h-full table-fixed border-separate border-spacing-1 break-words", a), b = (0, l.useCallback)(e => {
            let [l, ...a] = e.split("\n"), r = a.splice(1).map((e, l) => {
                let a = e.split("|").filter(e => e).map(e => e.trim());
                return (0, t.jsx)("div", {
                    className: "flex grow",
                    children: a.map((e, a) => (0, t.jsx)(m.default, {
                        className: "flex grow basis-0 items-center justify-center rounded-md bg-gray-50 px-6 py-4 text-center dark:bg-gray-900",
                        children: e
                    }, `cell-${l}-${a}-${e}`))
                }, `row-${l}`)
            });
            return (0, t.jsxs)("div", {
                className: "flex h-full flex-col",
                children: [(0, t.jsx)("div", {
                    className: "-ml-1 flex grow",
                    children: l.split("|").filter(e => e).map((e, l) => (0, t.jsx)(m.default, {
                        className: "ml-1 flex grow basis-0 items-center justify-center rounded-md bg-gray-50 px-6 py-4 text-center dark:bg-gray-900",
                        children: e.trim()
                    }, `header-cell-${l}-${e}`))
                }), r]
            })
        }, []), v = (0, l.useMemo)(() => o.map(e => e.cells.reduce((e, l, a) => ({
            ...e,
            [`col${a+1}`]: {
                component: l.startsWith("|") ? b(l) : (0, t.jsx)(m.default, {
                    options: {
                        overrides: {
                            Button: {
                                component: c.default
                            },
                            Label: {
                                component: u.default
                            },
                            Tooltip: {
                                component: h.default
                            }
                        }
                    },
                    children: l
                }),
                isTableCell: l.startsWith("|"),
                cellContent: l
            }
        }), {})), [o, b]), C = (0, l.useMemo)(() => i.cells.map((e, l) => (0, t.jsx)("th", {
            scope: "col",
            className: "min-w-[10rem] rounded-md border-none bg-gray-100 py-3.5 pr-4 pl-4 text-left align-top text-gray-800 dark:bg-gray-800 dark:text-gray-400",
            children: (0, t.jsx)(m.default, {
                options: {
                    overrides: {
                        Button: {
                            component: c.default
                        },
                        Label: {
                            component: u.default
                        },
                        Tooltip: {
                            component: h.default
                        }
                    }
                },
                children: e
            })
        }, `${l}-${e}`)), [i.cells]), y = (0, l.useMemo)(() => v.map((l, a) => {
            let r = Object.values(l),
                s = r[0];
            return (0, t.jsx)("tr", {
                className: "border-separate border-spacing-1",
                children: r.map((l, r) => (0, t.jsx)(j, {
                    isTableCell: l.isTableCell,
                    className: 0 === r ? n : d,
                    rowTitle: s.component,
                    colTitle: 0 !== r && C && C[r] ? C[r] : "",
                    truncationEnabled: e.tableTruncation,
                    children: l.component
                }, `${a}-${r}-${l.cellContent}`))
            }, a)
        }), [C, v, n, e.tableTruncation]), w = (0, l.useMemo)(() => i.cells.map((e, l) => (0, t.jsx)("th", {
            scope: "col",
            className: "text-tiny-bold rounded-md bg-gray-100 py-3.5 pr-4 pl-4 text-left align-top text-gray-800 dark:bg-gray-900 dark:text-gray-400",
            children: (0, t.jsx)(m.default, {
                options: {
                    overrides: {
                        Button: {
                            component: c.default
                        },
                        Label: {
                            component: u.default
                        },
                        Tooltip: {
                            component: h.default
                        }
                    }
                },
                children: e
            })
        }, `${l}-${e}`)), [i]), k = (0, l.useMemo)(() => v.map((e, l) => (0, t.jsx)("div", {
            className: "mb-4 min-w-full rounded-md bg-gray-100 align-middle dark:bg-gray-700",
            children: (0, t.jsxs)("table", {
                className: g,
                children: [i && i.cells.length > 0 && (0, t.jsx)("thead", {
                    className: "hidden",
                    children: (0, t.jsx)("tr", {
                        className: "border-separate border-spacing-1",
                        children: w
                    })
                }), (0, t.jsx)("tbody", {
                    className: "table-row-group bg-gray-50 dark:bg-gray-900",
                    children: Object.values(e).map((e, a) => e ? (0, t.jsx)("tr", {
                        className: "rounded-md",
                        children: (0, t.jsxs)("td", {
                            className: 0 === a ? n : d,
                            children: [0 !== a && i && i.cells[a] && (0, t.jsx)(m.default, {
                                options: {
                                    overrides: {
                                        Button: {
                                            component: c.default
                                        },
                                        Label: {
                                            component: u.default
                                        },
                                        Tooltip: {
                                            component: h.default
                                        }
                                    }
                                },
                                children: i.cells[a]
                            }), (0, t.jsx)(p.default, {
                                children: e.component
                            })]
                        })
                    }, `${l}-${a}-${i.cells[a]}`) : null)
                })]
            })
        }, `row-${l}`)), [v, i, g, n, w]);
        return (0, t.jsxs)("div", {
            children: [(0, t.jsx)("div", {
                className: "sm:flex sm:items-center",
                children: (0, t.jsxs)("div", {
                    className: "sm:flex-auto",
                    children: [!s && e.tableTitle && (0, t.jsx)("div", {
                        className: "text-heading-sm",
                        children: e.tableTitle
                    }), !s && e.tableDescription && (0, t.jsx)("p", {
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
                            className: f,
                            children: [C && (0, t.jsx)("thead", {
                                className: "table-header-group",
                                children: (0, t.jsx)("tr", {
                                    className: "border-separate border-spacing-1",
                                    children: C
                                })
                            }), (0, t.jsx)("tbody", {
                                className: "table-row-group",
                                children: y
                            })]
                        })
                    }), (0, t.jsxs)("div", {
                        className: "md:hidden",
                        children: [(0, t.jsx)("div", {
                            className: "text-body-bold mb-4",
                            children: (0, t.jsx)(m.default, {
                                options: {
                                    overrides: {
                                        Button: {
                                            component: c.default
                                        },
                                        Label: {
                                            component: u.default
                                        },
                                        Tooltip: {
                                            component: h.default
                                        }
                                    }
                                },
                                children: i && i.cells && i.cells[0] ? i.cells[0] : ""
                            })
                        }), k]
                    })]
                })
            })]
        })
    }], 210310)
}, 644995, e => {
    "use strict";
    var t = e.i(14666);
    e.s(["default", 0, ({
        className: e = "",
        width: l = 16,
        height: a = 16
    }) => (0, t.jsxs)("svg", {
        width: l,
        height: a,
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
}, 246916, e => {
    "use strict";
    var t = e.i(913425),
        l = e.i(833200),
        a = e.i(740041);
    e.s(["useMTBanner", 0, function(e, r = []) {
        var s, i;
        let o, n, d, c, u, h = (0, t.usePathname)(),
            m = (0, l.useLocale)(),
            x = m !== a.defaultLocale ? h.replace(`/${m}`, "") : h;
        return {
            shouldDisplayMTBanner: m !== a.defaultLocale && e?.translationType === "MT" && !r.includes(x),
            updatedBlocks: (s = e.blocks ?? [], i = e.machineTranslationDisclaimer, o = s.reduce((e, t, l) => ["hero", "alternateNavigation", "headliner"].includes(t._type) ? l : e, -1), n = [...s], d = n[o + 1]?._type === "alternateNavigationAnchor" || n[o + 1]?._type === "anchorButton" ? n[o + 2] : n[o + 1], c = d?.theme ?? null, u = {
                _type: "alert",
                text: i?.text,
                isContained: !0,
                spacing: {
                    bottom: !0,
                    top: !0
                },
                ...c && {
                    theme: c
                },
                action: {
                    text: i?.action?.title,
                    fieldLink: {
                        linkReference: {
                            href: {
                                current: `${window.location.origin}${x}`
                            },
                            target: "_self"
                        }
                    }
                }
            }, -1 === o ? n.unshift(u) : n.splice(o + 1, 0, u), n),
            redirectPathName: x
        }
    }], 246916)
}, 401861, 146911, 841889, e => {
    "use strict";
    var t = e.i(14666),
        l = e.i(722978),
        a = e.i(499531),
        r = e.i(960851);
    let s = e.i(976317).default;
    e.s(["default", 0, s], 146911);
    let i = ({
            title: e,
            text: i,
            action: o,
            truncate: n,
            className: d = "",
            isContained: c,
            dismiss: u
        }) => {
            let h = (0, a.useMemo)(() => `unity-alert-${i?.substring(0,30).replaceAll(" ","_")}`, [i]),
                [m, x] = (0, a.useState)(!0),
                [p, g] = (0, a.useState)(!1);
            return ((0, a.useEffect)(() => {
                localStorage?.getItem(h) && g(!0)
            }, [h]), p) ? null : (0, t.jsx)("div", {
                className: (0, l.clsx)({
                    container: c
                }),
                children: (0, t.jsxs)("div", {
                    className: (0, l.clsx)("dark:bg-blue/10 relative flex w-full flex-col justify-between gap-4 bg-sky-100 py-4 pr-5 pl-11 text-sm text-gray-900 transition-colors sm:flex-row", {
                        flex: u?.enabled
                    }, {
                        "rounded-lg": c
                    }, d),
                    children: [(0, t.jsx)(r.Info, {
                        size: 18,
                        className: "ph-fill fill-blue absolute top-5 left-[1rem]",
                        weight: "fill"
                    }), (0, t.jsxs)("div", {
                        className: "",
                        children: [e && (0, t.jsx)("div", {
                            className: "text-small-bold",
                            children: e
                        }), (0, t.jsxs)("div", {
                            children: [(0, t.jsx)("div", {
                                className: (0, l.clsx)({
                                    "line-clamp-4 sm:line-clamp-2": n?.enabled && m
                                }),
                                children: i
                            }), n?.enabled && (0, t.jsx)("button", {
                                onClick: () => x(!m),
                                className: "text-tiny shadow-underline-sm hover:text-blue hover:shadow-underline focus:text-blue dark:hover:text-blue text-black transition duration-200 dark:text-white",
                                children: m ? n.seeMoreLabel : n.seeLessLabel
                            })]
                        })]
                    }), (o?.href || u?.enabled) && (0, t.jsxs)("div", {
                        className: "sm:auto inline-flex w-fit items-center gap-4 [&>*]:whitespace-nowrap",
                        children: [o && (0, t.jsx)(s, {
                            className: "mx-auto mt-0 inline-block whitespace-nowrap",
                            href: o.href,
                            target: o.target || "_self",
                            size: "tiny",
                            underline: !0,
                            children: o.title
                        }), u?.enabled && (0, t.jsx)("button", {
                            onClick: () => {
                                g(!0), localStorage.setItem(h, Date.now().toString())
                            },
                            className: "text-tiny shadow-underline-sm hover:text-blue hover:shadow-underline focus:text-blue dark:hover:text-blue text-black transition duration-200 dark:text-white",
                            children: u?.dismissLabel ?? "Dismiss"
                        })]
                    })]
                })
            })
        },
        o = ({
            title: e,
            text: a,
            action: r,
            theme: s,
            truncate: o,
            dismiss: n,
            isContained: d,
            isHidden: c,
            spacing: u
        }) => {
            let h = (0, l.clsx)({
                "pt-10": u?.top
            }, {
                "pb-10": u?.bottom
            }, {
                "dark bg-black": "dark" === s
            });
            return c || !a ? null : (0, t.jsx)("section", {
                className: h,
                children: (0, t.jsx)(i, {
                    title: e,
                    text: a,
                    isContained: d,
                    truncate: o || {},
                    dismiss: n || {},
                    action: r && {
                        title: r?.text || "",
                        href: r?.fieldLink?.linkReference?.href?.current || "",
                        target: r?.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self"
                    }
                })
            })
        };
    e.s(["default", 0, o], 841889), e.s(["default", 0, o], 401861)
}, 783078, e => {
    "use strict";
    var t, l = ((t = l || {})[t.Small = 425] = "Small", t[t.Medium = 744] = "Medium", t[t.Large = 1024] = "Large", t[t.XLarge = 1440] = "XLarge", t);
    e.s(["default", 0, l])
}, 123849, e => {
    "use strict";
    var t = e.i(14666),
        l = e.i(722978),
        a = e.i(805518);
    let r = ({
            title: e,
            content: r,
            listStyle: s = "check"
        }) => {
            let i = (0, l.default)("loco-text-body [&_h4]:mb-0", {
                "checkmark-list-green": "check" === s,
                "plus-list": "plus" === s
            });
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("div", {
                    className: "loco-caption-sm-semibold mb-2 text-gray-700 dark:text-gray-300",
                    children: e
                }), (0, t.jsx)(a.default, {
                    className: i,
                    children: r
                })]
            })
        },
        s = ({
            title: e = "",
            descriptions: l = [],
            treshold: a,
            pricing: s
        }) => (0, t.jsxs)("div", {
            className: "flex h-full flex-col justify-between rounded-lg bg-gray-100 p-6 lg:w-96 dark:bg-gray-800",
            children: [(0, t.jsxs)("div", {
                className: "grow pb-8",
                children: [(0, t.jsx)("div", {
                    className: "loco-text-heading-sm mb-8 text-black dark:text-white",
                    children: e
                }), (0, t.jsx)("div", {
                    children: l?.map((l, a) => (0, t.jsx)("div", {
                        className: "flex flex-col pb-8",
                        children: (0, t.jsx)(r, {
                            title: l.title,
                            content: l.content,
                            listStyle: l.listStyle
                        })
                    }, `card-plan-${e}-${a}`))
                }), (0, t.jsx)(r, {
                    title: a?.title || "",
                    content: a?.content || ""
                })]
            }), (0, t.jsx)("div", {
                className: "min-h-[6rem]",
                children: (0, t.jsx)(r, {
                    title: s?.title || "",
                    content: s?.content || ""
                })
            })]
        }),
        i = ({
            theme: e = "light",
            cards: a = []
        }) => {
            let r = (0, l.default)({
                dark: "dark" === e
            });
            return (0, t.jsx)("section", {
                className: r,
                children: (0, t.jsx)("div", {
                    className: "bg-white pt-8 pb-20 dark:bg-black",
                    children: (0, t.jsx)("div", {
                        className: "container flex flex-col flex-wrap gap-2 lg:flex-row lg:justify-center",
                        children: a.map((e, l) => (0, t.jsx)("div", {
                            children: (0, t.jsx)(s, {
                                ...e
                            })
                        }, `card-plan-${e.title}-${l}`))
                    })
                })
            })
        };
    var o = e.i(722990);
    e.s(["default", 0, ({
        isHidden: e,
        theme: l,
        cards: a
    }) => e ? null : (0, t.jsx)(i, {
        theme: "dark" === l ? "dark" : "light",
        cards: a.map(e => ({
            title: e.title ?? "",
            descriptions: e.descriptions?.map(e => {
                let l = e?.listStyle === "plus" ? "plus" : "check";
                return {
                    title: e?.title ?? "",
                    content: (0, t.jsx)(o.PortableText, {
                        value: e?.content
                    }),
                    listStyle: l
                }
            }) || [],
            treshold: {
                title: e?.treshold?.title ?? "",
                content: (0, t.jsx)(o.PortableText, {
                    value: e.treshold?.content
                })
            },
            pricing: {
                title: e.pricing?.title ?? "",
                content: (0, t.jsx)(o.PortableText, {
                    value: e.pricing?.content
                })
            }
        }))
    })], 123849)
}, 14452, e => {
    "use strict";
    var t = e.i(14666),
        l = e.i(722978);
    e.s(["default", 0, ({
        children: e,
        className: a = "",
        tag: r = "div"
    }) => {
        let s = (0, l.default)("loco-text-heading-sm mb-4", a);
        return (0, t.jsx)(r, {
            className: s,
            children: e
        })
    }], 14452)
}]);