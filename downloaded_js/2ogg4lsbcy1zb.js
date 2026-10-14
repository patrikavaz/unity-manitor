;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "ca3f0c50-7ff2-d978-5440-d96b2f587483")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 222061, 497492, 272351, 396241, 829483, 938822, 86703, 908390, 662380, e => {
    "use strict";
    var t, r, o = e.i(785328),
        u = e.i(409781),
        n = e.i(968651),
        l = e.i(620174),
        a = e.i(466673);

    function i(e, t = !1) {
        let r = new URLSearchParams(window.location.search);
        return e.reduce((e, o) => {
            let u = r.get(o);
            return e[o] = u || (t ? function(e) {
                if ("u" < typeof document) return "";
                let t = document.cookie.split("; ").find(t => t.startsWith(`${e}=`));
                return t ? decodeURIComponent(t.split("=")[1] ?? "") : ""
            }(o) : ""), e
        }, {})
    }

    function s(e, t) {
        return !e || 0 === e.length || !!t && e.some(e => e.countryCode === t)
    }

    function d(e, t, r) {
        return !e || 0 === e.length || e.every(({
            fieldId: e,
            value: o,
            operator: u
        }, n) => (function(e, t, r = "equals") {
            let o = (t ?? "").trim(),
                u = "string" == typeof e ? e.trim() : e,
                n = null != u && "" !== u;
            switch (r) {
                case "notEquals":
                    return n && u !== o;
                case "oneOf":
                    return o.split(",").some(e => e.trim() === u);
                case "notOneOf":
                    return n && !o.split(",").some(e => e.trim() === u);
                default:
                    return u === o
            }
        })(void 0 !== t[n] ? t[n] : r ? r(e) : void 0, o, u))
    }
    e.s(["checkIsGrowForm", 0, function() {
        return "true" === new URLSearchParams(window.location.search).get("isGrowForm")
    }, "cleanData", 0, e => Object.entries(e).filter(([e, t]) => void 0 !== t).reduce((e, [t, r]) => (e[t] = r, e), {}), "getAlwaysSendOnData", 0, (e, t, r) => {
        let o = {};
        return e?.forEach(e => {
            if (e.alwaysSendOn) {
                let u = e.countryRestriction && e.countryRestriction.length > 0 && !r || e.countryRestriction?.some(e => e.countryCode === r) || !s(e.visibleCountry, r),
                    n = t(e.formFieldId);
                u || !u && !0 === n ? o[e.formFieldId] = !0 : u || n || (o[e.formFieldId] = "")
            }
        }), o
    }, "getFilteredQueryParams", 0, function(e = [], t = !1) {
        let r = i(Array.from(new URLSearchParams(window.location.search).keys()));
        return t ? Object.fromEntries(Object.entries(r).filter(([t]) => !e.includes(t))) : r
    }, "getQueryParams", 0, i, "isCountryVisible", 0, s], 497492), e.s(["hasActiveBlockingField", 0, function(e, t, r) {
        return (e ?? []).some(e => "richText" === e.formField && e.blocksSubmission && d(e.visibleConditions, [], t) && s(e.visibleCountry, r))
    }, "shouldRenderField", 0, d], 272351), e.s(["default", 0, e => {
        let {
            inputType: t,
            formFieldId: r,
            label: i,
            helpText: c,
            errorText: p,
            warningText: f,
            className: m,
            placeholder: g,
            disabled: b,
            defaultValue: h,
            isRequired: y,
            requiredText: C = "Required",
            control: x,
            visibleConditions: v,
            getValues: $,
            visibleCountry: A,
            isNumericalOnly: F,
            restrictedDomainsToggle: V,
            restrictedDomains: k,
            restrictedDomainErrorText: T
        } = e, S = {
            label: i,
            requiredText: C,
            className: m,
            placeholder: g,
            disabled: b,
            isRequired: y,
            for: r,
            name: r,
            id: r
        }, E = (0, a.useWatch)({
            control: x,
            name: v?.map(({
                fieldId: e
            }) => e) || []
        }), w = d(v, E, $);
        if ((0, u.useEffect)(() => {
                w || e.control.unregister(e.formFieldId)
            }, [w, e.control, e.formFieldId]), !s(A, e.countryCode) || !w) return null;
        switch (t) {
            case "text":
                return (0, o.jsx)(a.Controller, {
                    name: r,
                    control: e.control,
                    rules: {
                        required: y,
                        ...F && {
                            pattern: /^(\+|[0-9])[0-9-]*$/
                        }
                    },
                    render: ({
                        field: e,
                        fieldState: t
                    }) => (0, o.jsx)(l.default, {
                        ...S,
                        ...e,
                        value: e.value || "",
                        ...void 0 !== t.error && {
                            helperText: (0, n.default)(c, p, f, void 0 !== t.error, !1)
                        },
                        hasError: void 0 !== t.error
                    })
                });
            case "longtext":
                return (0, o.jsx)(a.Controller, {
                    name: r,
                    control: e.control,
                    rules: {
                        required: y
                    },
                    render: ({
                        field: e,
                        fieldState: t
                    }) => (0, o.jsx)(l.default, {
                        isTextArea: !0,
                        ...S,
                        ...e,
                        value: e.value || "",
                        ...void 0 !== t.error && {
                            helperText: (0, n.default)(c, p, f, void 0 !== t.error, !1)
                        },
                        hasError: void 0 !== t.error
                    })
                });
            case "email":
                return (0, o.jsx)(a.Controller, {
                    rules: {
                        required: y,
                        pattern: {
                            value: /^[\w.-]+@([\w-]+\.)+[\w-]{2,7}$/i,
                            message: p || "Invalid email format"
                        },
                        ...V && k && {
                            validate: e => !k.split(",").map(e => e.trim()).filter(e => e.length > 0).find(t => e.toLowerCase().includes(t.toLowerCase())) || T || "Input contains restricted domain"
                        }
                    },
                    name: r,
                    control: e.control,
                    render: ({
                        field: e,
                        fieldState: t
                    }) => (0, o.jsx)(l.default, {
                        ...S,
                        ...e,
                        value: e.value || "",
                        ...void 0 !== t.error && {
                            helperText: (0, n.default)(c, t.error.message || p, f, void 0 !== t.error, !1)
                        },
                        hasError: void 0 !== t.error
                    })
                });
            case "hidden":
                return (0, o.jsx)(a.Controller, {
                    defaultValue: h,
                    name: r,
                    control: e.control,
                    render: () => (0, o.jsx)("input", {
                        id: r,
                        type: t,
                        name: r,
                        value: h
                    })
                });
            default:
                return null
        }
    }], 222061);
    var c = ((t = {}).US = "US", t.CA = "CA", t.CN = "CN", t),
        p = ((r = {}).TOS = "legalToS", r.PRIVACY = "legalPP", r.MARKETING_CN = "legalCN", r);
    e.s(["COUNTRY_CODE", 0, "countryCode", "COUNTRY_CODES", () => c, "LEGAL", () => p], 396241);
    var f = e.i(722990),
        m = e.i(722978),
        g = e.i(458229),
        b = e.i(685740),
        h = e.i(590553),
        y = e.i(147333),
        C = e.i(838031);
    let x = (0, u.forwardRef)(function(e, t) {
        let {
            children: r,
            isIndeterminate: n = !1,
            isDisabled: l = !1,
            isSelected: a = !1,
            isRequired: i = !1,
            hasError: s = !1,
            requiredText: d = "Required"
        } = e, c = (0, h.useToggleState)(e), [p, f] = (0, u.useState)(n), x = (0, C.useObjectRef)(t), {
            inputProps: v
        } = (0, b.useCheckbox)(e, c, x), {
            isFocusVisible: $,
            focusProps: A
        } = (0, y.useFocusRing)();
        (0, u.useEffect)(() => {
            a && f(!1)
        }, [a]);
        let F = (0, m.default)("group flex text-small relative", {
                "pointer-events-none": l
            }, {
                "hover:cursor-pointer": !l
            }),
            V = (0, m.default)({
                "stroke-gray-400 dark:stroke-gray-500 group-hover:stroke-gray-800 dark:group-hover:stroke-white fill-transparent transition-colors duration-100 group-hover:fill-gray-200 dark:group-hover:fill-gray-800": !a && !p && !l && !$
            }, {
                "stroke-blue-dark group-hover:fill-blue fill-blue": (a || p) && !l
            }, {
                "fill-gray-200 stroke-gray-400 dark:fill-gray-800 dark:stroke-gray-700": l
            }, {
                "fill-gray-200 dark:fill-gray-800 stroke-gray-800 dark:stroke-white": $ && !a && !p
            }, {
                "stroke-gray-400 dark:stroke-gray-500": i && !a && !$
            }, {
                "stroke-red dark:stroke-red": i && s && !a && !$
            }),
            k = (0, m.default)({
                "fill-white": a && !l,
                "fill-gray-400 dark:!fill-gray-500": l
            }),
            T = (0, m.default)({
                "fill-white": !l
            }, {
                "fill-gray-400 dark:fill-gray-500": l
            }),
            S = (0, m.default)("ml-1 text-sm", {
                "text-gray-400 dark:text-gray-400": a
            }, {
                "text-gray-400": s && !a
            }, {
                "text-gray-400": !s && !a
            });
        return (0, o.jsxs)("label", {
            className: F,
            children: [(0, o.jsx)(g.VisuallyHidden, {
                children: (0, o.jsx)("input", {
                    ...v,
                    ...A,
                    ref: x,
                    checked: a
                })
            }), (0, o.jsxs)("svg", {
                width: 24,
                height: 24,
                "aria-hidden": "true",
                className: "mr-2 min-w-[24px]",
                children: [(0, o.jsx)("rect", {
                    x: 4,
                    y: 4,
                    width: 16,
                    height: 16,
                    strokeWidth: 1,
                    rx: 4,
                    ry: 4,
                    className: V
                }), a && (0, o.jsx)("path", {
                    transform: "translate(7 7)",
                    d: `M3.788 9A.999.999 0 0 1 3 8.615l-2.288-3a1 1 0 1 1
            1.576-1.23l1.5 1.991 3.924-4.991a1 1 0 1 1 1.576 1.23l-4.712
            6A.999.999 0 0 1 3.788 9z`,
                    className: k
                }), p && (0, o.jsx)("rect", {
                    x: 7,
                    y: 11,
                    width: 10,
                    height: 2,
                    className: T
                }), $ && (0, o.jsx)("rect", {
                    x: 1,
                    y: 1,
                    width: 22,
                    height: 22,
                    fill: "none",
                    strokeWidth: 1.5,
                    className: "stroke-blue-dark",
                    rx: 4,
                    ry: 4
                })]
            }), (0, o.jsxs)("div", {
                className: "flex w-full justify-between",
                children: [r, i && (0, o.jsx)("div", {
                    className: S,
                    children: d
                })]
            })]
        })
    });
    var v = e.i(805518);
    e.s(["default", 0, e => {
        let t = e?.chained?.map(e => e.dependant) || [],
            r = e.formFieldId === p.TOS && e.isRequired || e.formFieldId === p.PRIVACY && e.isRequired || e.countryCode === c.CN && e.formFieldId === p.MARKETING_CN && e.isRequired || e.isRequired,
            [n, l] = (0, u.useState)(!1),
            {
                formFieldId: i,
                checkboxLabel: d,
                checkboxPlainTextLabel: m,
                countryRestriction: g,
                visibleCountry: b
            } = e;
        return g && g?.length > 0 && !e.countryCode || g?.find(t => t.countryCode === e.countryCode) || !s(b, e.countryCode) ? null : (0, o.jsx)(a.Controller, {
            name: i,
            control: e.control,
            rules: {
                required: r
            },
            render: ({
                field: {
                    onChange: r,
                    ...u
                },
                fieldState: a,
                formState: s
            }) => (0, o.jsxs)(o.Fragment, {
                children: [!t.some(t => t === e.formFieldId) && (0, o.jsx)(x, {
                    requiredText: e.requiredText,
                    hasError: void 0 !== a.error,
                    isRequired: e.isRequired,
                    ...u,
                    ...a,
                    ...s,
                    onChange: e => {
                        r(e), l(!n)
                    },
                    isSelected: n,
                    id: i,
                    name: i,
                    children: (0, o.jsxs)(v.default, {
                        className: "font-medium [a]:underline",
                        children: [d && (0, o.jsx)(f.PortableText, {
                            value: d,
                            components: d
                        }), m && m?.checkboxLabelText]
                    })
                }), e.chained && e.chained.map((t, c) => {
                    if (t.value === e.countryCode && t.dependant === e.formFieldId) return (0, o.jsx)(x, {
                        requiredText: e.requiredText,
                        hasError: void 0 !== a.error,
                        ...u,
                        ...a,
                        ...s,
                        onChange: e => {
                            r(e), l(!n)
                        },
                        isSelected: n,
                        id: i,
                        name: i,
                        children: (0, o.jsx)(v.default, {
                            className: "[a]:underline",
                            children: (0, o.jsx)(f.PortableText, {
                                value: d,
                                components: d
                            })
                        })
                    }, c)
                })]
            }),
            "data-sentry-element": "Controller",
            "data-sentry-component": "CheckboxMapper",
            "data-sentry-source-file": "CheckboxMapper.tsx"
        })
    }], 829483);
    var $ = e.i(481392),
        A = e.i(248708),
        F = e.i(666747),
        V = e.i(476090),
        k = e.i(664106),
        T = e.i(776050),
        S = e.i(888839),
        E = e.i(575414),
        w = {};
    w = {
        "ar-AE": {
            buttonLabel: "عرض المقترحات",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{62E}\u{64A}\u{627}\u{631}`,other:()=>`${t.number(e.optionCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`})} \u{645}\u{62A}\u{627}\u{62D}\u{629}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{627}\u{644}\u{645}\u{62C}\u{645}\u{648}\u{639}\u{629} \u{627}\u{644}\u{645}\u{62F}\u{62E}\u{644}\u{629} ${e.groupTitle}, \u{645}\u{639} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{62E}\u{64A}\u{627}\u{631}`,other:()=>`${t.number(e.groupCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", محدد",other:""},e.isSelected)}`,
            listboxLabel: "مقترحات",
            selectedAnnouncement: e => `${e.optionText}\u{60C} \u{645}\u{62D}\u{62F}\u{62F}`
        },
        "bg-BG": {
            buttonLabel: "Покажи предложения",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{43E}\u{43F}\u{446}\u{438}\u{44F}`,other:()=>`${t.number(e.optionCount)} \u{43E}\u{43F}\u{446}\u{438}\u{438}`})} \u{43D}\u{430} \u{440}\u{430}\u{437}\u{43F}\u{43E}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{435}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{412}\u{44A}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{430} \u{433}\u{440}\u{443}\u{43F}\u{430} ${e.groupTitle}, \u{441} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{43E}\u{43F}\u{446}\u{438}\u{44F}`,other:()=>`${t.number(e.groupCount)} \u{43E}\u{43F}\u{446}\u{438}\u{438}`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", избрани",other:""},e.isSelected)}`,
            listboxLabel: "Предложения",
            selectedAnnouncement: e => `${e.optionText}, \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`
        },
        "cs-CZ": {
            buttonLabel: "Zobrazit doporučení",
            countAnnouncement: (e, t) => `K dispozici ${t.plural(e.optionCount,{one:()=>`je ${t.number(e.optionCount)} mo\u{17E}nost`,other:()=>`jsou/je ${t.number(e.optionCount)} mo\u{17E}nosti/-\xed`})}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Zadan\xe1 skupina \u{201E}${e.groupTitle}\u{201C} ${t.plural(e.groupCount,{one:()=>`s ${t.number(e.groupCount)} mo\u{17E}nost\xed`,other:()=>`se ${t.number(e.groupCount)} mo\u{17E}nostmi`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:" (vybráno)",other:""},e.isSelected)}`,
            listboxLabel: "Návrhy",
            selectedAnnouncement: e => `${e.optionText}, vybr\xe1no`
        },
        "da-DK": {
            buttonLabel: "Vis forslag",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} mulighed tilg\xe6ngelig`,other:()=>`${t.number(e.optionCount)} muligheder tilg\xe6ngelige`})}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Angivet gruppe ${e.groupTitle}, med ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} mulighed`,other:()=>`${t.number(e.groupCount)} muligheder`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", valgt",other:""},e.isSelected)}`,
            listboxLabel: "Forslag",
            selectedAnnouncement: e => `${e.optionText}, valgt`
        },
        "de-DE": {
            buttonLabel: "Empfehlungen anzeigen",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} Option`,other:()=>`${t.number(e.optionCount)} Optionen`})} verf\xfcgbar.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Eingetretene Gruppe ${e.groupTitle}, mit ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} Option`,other:()=>`${t.number(e.groupCount)} Optionen`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", ausgewählt",other:""},e.isSelected)}`,
            listboxLabel: "Empfehlungen",
            selectedAnnouncement: e => `${e.optionText}, ausgew\xe4hlt`
        },
        "el-GR": {
            buttonLabel: "Προβολή προτάσεων",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}`,other:()=>`${t.number(e.optionCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AD}\u{3C2} `})} \u{3B4}\u{3B9}\u{3B1}\u{3B8}\u{3AD}\u{3C3}\u{3B9}\u{3BC}\u{3B5}\u{3C2}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{395}\u{3B9}\u{3C3}\u{3B1}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3BF}\u{3BC}\u{3AC}\u{3B4}\u{3B1} ${e.groupTitle}, \u{3BC}\u{3B5} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}`,other:()=>`${t.number(e.groupCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AD}\u{3C2}`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", επιλεγμένο",other:""},e.isSelected)}`,
            listboxLabel: "Προτάσεις",
            selectedAnnouncement: e => `${e.optionText}, \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5}`
        },
        "en-US": {
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Entered group ${e.groupTitle}, with ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} option`,other:()=>`${t.number(e.groupCount)} options`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", selected",other:""},e.isSelected)}`,
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} option`,other:()=>`${t.number(e.optionCount)} options`})} available.`,
            selectedAnnouncement: e => `${e.optionText}, selected`,
            buttonLabel: "Show suggestions",
            listboxLabel: "Suggestions"
        },
        "es-ES": {
            buttonLabel: "Mostrar sugerencias",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opci\xf3n`,other:()=>`${t.number(e.optionCount)} opciones`})} disponible(s).`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Se ha unido al grupo ${e.groupTitle}, con ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opci\xf3n`,other:()=>`${t.number(e.groupCount)} opciones`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", seleccionado",other:""},e.isSelected)}`,
            listboxLabel: "Sugerencias",
            selectedAnnouncement: e => `${e.optionText}, seleccionado`
        },
        "et-EE": {
            buttonLabel: "Kuva soovitused",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} valik`,other:()=>`${t.number(e.optionCount)} valikud`})} saadaval.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Sisestatud r\xfchm ${e.groupTitle}, valikuga ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} valik`,other:()=>`${t.number(e.groupCount)} valikud`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", valitud",other:""},e.isSelected)}`,
            listboxLabel: "Soovitused",
            selectedAnnouncement: e => `${e.optionText}, valitud`
        },
        "fi-FI": {
            buttonLabel: "Näytä ehdotukset",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} vaihtoehto`,other:()=>`${t.number(e.optionCount)} vaihtoehdot`})} saatavilla.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Mentiin ryhm\xe4\xe4n ${e.groupTitle}, ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} vaihtoehdon`,other:()=>`${t.number(e.groupCount)} vaihtoehdon`})} kanssa.`,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", valittu",other:""},e.isSelected)}`,
            listboxLabel: "Ehdotukset",
            selectedAnnouncement: e => `${e.optionText}, valittu`
        },
        "fr-FR": {
            buttonLabel: "Afficher les suggestions",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} option`,other:()=>`${t.number(e.optionCount)} options`})} disponible(s).`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Groupe ${e.groupTitle} rejoint, avec ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} option`,other:()=>`${t.number(e.groupCount)} options`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", sélectionné(s)",other:""},e.isSelected)}`,
            listboxLabel: "Suggestions",
            selectedAnnouncement: e => `${e.optionText}, s\xe9lectionn\xe9`
        },
        "he-IL": {
            buttonLabel: "הצג הצעות",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`\u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5EA} ${t.number(e.optionCount)}`,other:()=>`${t.number(e.optionCount)} \u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5D9}\u{5D5}\u{5EA}`})} \u{5D1}\u{5DE}\u{5E6}\u{5D1} \u{5D6}\u{5DE}\u{5D9}\u{5DF}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{5E0}\u{5DB}\u{5E0}\u{5E1} \u{5DC}\u{5E7}\u{5D1}\u{5D5}\u{5E6}\u{5D4} ${e.groupTitle}, \u{5E2}\u{5DD} ${t.plural(e.groupCount,{one:()=>`\u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5EA} ${t.number(e.groupCount)}`,other:()=>`${t.number(e.groupCount)} \u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5D9}\u{5D5}\u{5EA}`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", נבחר",other:""},e.isSelected)}`,
            listboxLabel: "הצעות",
            selectedAnnouncement: e => `${e.optionText}, \u{5E0}\u{5D1}\u{5D7}\u{5E8}`
        },
        "hr-HR": {
            buttonLabel: "Prikaži prijedloge",
            countAnnouncement: (e, t) => `Dostupno jo\u{161}: ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcija`,other:()=>`${t.number(e.optionCount)} opcije/a`})}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Unesena skupina ${e.groupTitle}, s ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opcijom`,other:()=>`${t.number(e.groupCount)} opcije/a`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", odabranih",other:""},e.isSelected)}`,
            listboxLabel: "Prijedlozi",
            selectedAnnouncement: e => `${e.optionText}, odabrano`
        },
        "hu-HU": {
            buttonLabel: "Javaslatok megjelenítése",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} lehet\u{151}s\xe9g`,other:()=>`${t.number(e.optionCount)} lehet\u{151}s\xe9g`})} \xe1ll rendelkez\xe9sre.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Bel\xe9pett a(z) ${e.groupTitle} csoportba, amely ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} lehet\u{151}s\xe9get`,other:()=>`${t.number(e.groupCount)} lehet\u{151}s\xe9get`})} tartalmaz. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", kijelölve",other:""},e.isSelected)}`,
            listboxLabel: "Javaslatok",
            selectedAnnouncement: e => `${e.optionText}, kijel\xf6lve`
        },
        "it-IT": {
            buttonLabel: "Mostra suggerimenti",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opzione disponibile`,other:()=>`${t.number(e.optionCount)} opzioni disponibili`})}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Ingresso nel gruppo ${e.groupTitle}, con ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opzione`,other:()=>`${t.number(e.groupCount)} opzioni`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", selezionato",other:""},e.isSelected)}`,
            listboxLabel: "Suggerimenti",
            selectedAnnouncement: e => `${e.optionText}, selezionato`
        },
        "ja-JP": {
            buttonLabel: "候補を表示",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`,other:()=>`${t.number(e.optionCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`})}\u{3092}\u{5229}\u{7528}\u{3067}\u{304D}\u{307E}\u{3059}\u{3002}`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{5165}\u{529B}\u{3055}\u{308C}\u{305F}\u{30B0}\u{30EB}\u{30FC}\u{30D7} ${e.groupTitle}\u{3001}${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`,other:()=>`${t.number(e.groupCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`})}\u{3092}\u{542B}\u{3080}\u{3002}`,other:""},e.isGroupChange)}${e.optionText}${t.select({true:"、選択済み",other:""},e.isSelected)}`,
            listboxLabel: "候補",
            selectedAnnouncement: e => `${e.optionText}\u{3001}\u{9078}\u{629E}\u{6E08}\u{307F}`
        },
        "ko-KR": {
            buttonLabel: "제안 사항 표시",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)}\u{AC1C} \u{C635}\u{C158}`,other:()=>`${t.number(e.optionCount)}\u{AC1C} \u{C635}\u{C158}`})}\u{C744} \u{C0AC}\u{C6A9}\u{D560} \u{C218} \u{C788}\u{C2B5}\u{B2C8}\u{B2E4}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{C785}\u{B825}\u{D55C} \u{ADF8}\u{B8F9} ${e.groupTitle}, ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)}\u{AC1C} \u{C635}\u{C158}`,other:()=>`${t.number(e.groupCount)}\u{AC1C} \u{C635}\u{C158}`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", 선택됨",other:""},e.isSelected)}`,
            listboxLabel: "제안",
            selectedAnnouncement: e => `${e.optionText}, \u{C120}\u{D0DD}\u{B428}`
        },
        "lt-LT": {
            buttonLabel: "Rodyti pasiūlymus",
            countAnnouncement: (e, t) => `Yra ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} parinktis`,other:()=>`${t.number(e.optionCount)} parinktys (-i\u{173})`})}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{12E}vesta grup\u{117} ${e.groupTitle}, su ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} parinktimi`,other:()=>`${t.number(e.groupCount)} parinktimis (-i\u{173})`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", pasirinkta",other:""},e.isSelected)}`,
            listboxLabel: "Pasiūlymai",
            selectedAnnouncement: e => `${e.optionText}, pasirinkta`
        },
        "lv-LV": {
            buttonLabel: "Rādīt ieteikumus",
            countAnnouncement: (e, t) => `Pieejamo opciju skaits: ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcija`,other:()=>`${t.number(e.optionCount)} opcijas`})}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Ievad\u{12B}ta grupa ${e.groupTitle}, ar ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opciju`,other:()=>`${t.number(e.groupCount)} opcij\u{101}m`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", atlasīta",other:""},e.isSelected)}`,
            listboxLabel: "Ieteikumi",
            selectedAnnouncement: e => `${e.optionText}, atlas\u{12B}ta`
        },
        "nb-NO": {
            buttonLabel: "Vis forslag",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} alternativ`,other:()=>`${t.number(e.optionCount)} alternativer`})} finnes.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Angitt gruppe ${e.groupTitle}, med ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} alternativ`,other:()=>`${t.number(e.groupCount)} alternativer`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", valgt",other:""},e.isSelected)}`,
            listboxLabel: "Forslag",
            selectedAnnouncement: e => `${e.optionText}, valgt`
        },
        "nl-NL": {
            buttonLabel: "Suggesties weergeven",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} optie`,other:()=>`${t.number(e.optionCount)} opties`})} beschikbaar.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Groep ${e.groupTitle} ingevoerd met ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} optie`,other:()=>`${t.number(e.groupCount)} opties`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", geselecteerd",other:""},e.isSelected)}`,
            listboxLabel: "Suggesties",
            selectedAnnouncement: e => `${e.optionText}, geselecteerd`
        },
        "pl-PL": {
            buttonLabel: "Wyświetlaj sugestie",
            countAnnouncement: (e, t) => `dost\u{119}pna/dost\u{119}pne(-nych) ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcja`,other:()=>`${t.number(e.optionCount)} opcje(-i)`})}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Do\u{142}\u{105}czono do grupy ${e.groupTitle}, z ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opcj\u{105}`,other:()=>`${t.number(e.groupCount)} opcjami`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", wybrano",other:""},e.isSelected)}`,
            listboxLabel: "Sugestie",
            selectedAnnouncement: e => `${e.optionText}, wybrano`
        },
        "pt-BR": {
            buttonLabel: "Mostrar sugestões",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} op\xe7\xe3o`,other:()=>`${t.number(e.optionCount)} op\xe7\xf5es`})} dispon\xedvel.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Grupo inserido ${e.groupTitle}, com ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} op\xe7\xe3o`,other:()=>`${t.number(e.groupCount)} op\xe7\xf5es`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", selecionado",other:""},e.isSelected)}`,
            listboxLabel: "Sugestões",
            selectedAnnouncement: e => `${e.optionText}, selecionado`
        },
        "pt-PT": {
            buttonLabel: "Apresentar sugestões",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} op\xe7\xe3o`,other:()=>`${t.number(e.optionCount)} op\xe7\xf5es`})} dispon\xedvel.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Grupo introduzido ${e.groupTitle}, com ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} op\xe7\xe3o`,other:()=>`${t.number(e.groupCount)} op\xe7\xf5es`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", selecionado",other:""},e.isSelected)}`,
            listboxLabel: "Sugestões",
            selectedAnnouncement: e => `${e.optionText}, selecionado`
        },
        "ro-RO": {
            buttonLabel: "Afișare sugestii",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} op\u{21B}iune`,other:()=>`${t.number(e.optionCount)} op\u{21B}iuni`})} disponibile.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Grup ${e.groupTitle} introdus, cu ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} op\u{21B}iune`,other:()=>`${t.number(e.groupCount)} op\u{21B}iuni`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", selectat",other:""},e.isSelected)}`,
            listboxLabel: "Sugestii",
            selectedAnnouncement: e => `${e.optionText}, selectat`
        },
        "ru-RU": {
            buttonLabel: "Показать предложения",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,other:()=>`${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{43E}\u{432}`})} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{412}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{43D}\u{430}\u{44F} \u{433}\u{440}\u{443}\u{43F}\u{43F}\u{430} ${e.groupTitle}, \u{441} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{43E}\u{43C}`,other:()=>`${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{430}\u{43C}\u{438}`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", выбранными",other:""},e.isSelected)}`,
            listboxLabel: "Предложения",
            selectedAnnouncement: e => `${e.optionText}, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E}`
        },
        "sk-SK": {
            buttonLabel: "Zobraziť návrhy",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} mo\u{17E}nos\u{165}`,other:()=>`${t.number(e.optionCount)} mo\u{17E}nosti/-\xed`})} k dispoz\xedcii.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Zadan\xe1 skupina ${e.groupTitle}, s ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} mo\u{17E}nos\u{165}ou`,other:()=>`${t.number(e.groupCount)} mo\u{17E}nos\u{165}ami`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", vybraté",other:""},e.isSelected)}`,
            listboxLabel: "Návrhy",
            selectedAnnouncement: e => `${e.optionText}, vybrat\xe9`
        },
        "sl-SI": {
            buttonLabel: "Prikaži predloge",
            countAnnouncement: (e, t) => `Na voljo je ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcija`,other:()=>`${t.number(e.optionCount)} opcije`})}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Vnesena skupina ${e.groupTitle}, z ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opcija`,other:()=>`${t.number(e.groupCount)} opcije`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", izbrano",other:""},e.isSelected)}`,
            listboxLabel: "Predlogi",
            selectedAnnouncement: e => `${e.optionText}, izbrano`
        },
        "sr-SP": {
            buttonLabel: "Prikaži predloge",
            countAnnouncement: (e, t) => `Dostupno jo\u{161}: ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcija`,other:()=>`${t.number(e.optionCount)} opcije/a`})}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Unesena grupa ${e.groupTitle}, s ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opcijom`,other:()=>`${t.number(e.groupCount)} optione/a`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", izabranih",other:""},e.isSelected)}`,
            listboxLabel: "Predlozi",
            selectedAnnouncement: e => `${e.optionText}, izabrano`
        },
        "sv-SE": {
            buttonLabel: "Visa förslag",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} alternativ`,other:()=>`${t.number(e.optionCount)} alternativ`})} tillg\xe4ngliga.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Ingick i gruppen ${e.groupTitle} med ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} alternativ`,other:()=>`${t.number(e.groupCount)} alternativ`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", valda",other:""},e.isSelected)}`,
            listboxLabel: "Förslag",
            selectedAnnouncement: e => `${e.optionText}, valda`
        },
        "tr-TR": {
            buttonLabel: "Önerileri göster",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} se\xe7enek`,other:()=>`${t.number(e.optionCount)} se\xe7enekler`})} kullan\u{131}labilir.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Girilen grup ${e.groupTitle}, ile ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} se\xe7enek`,other:()=>`${t.number(e.groupCount)} se\xe7enekler`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", seçildi",other:""},e.isSelected)}`,
            listboxLabel: "Öneriler",
            selectedAnnouncement: e => `${e.optionText}, se\xe7ildi`
        },
        "uk-UA": {
            buttonLabel: "Показати пропозиції",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,other:()=>`${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{438}(-\u{456}\u{432})`})} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{412}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{430} \u{433}\u{440}\u{443}\u{43F}\u{430} ${e.groupTitle}, \u{437} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,other:()=>`${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{438}(-\u{456}\u{432})`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", вибрано",other:""},e.isSelected)}`,
            listboxLabel: "Пропозиції",
            selectedAnnouncement: e => `${e.optionText}, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}`
        },
        "zh-CN": {
            buttonLabel: "显示建议",
            countAnnouncement: (e, t) => `\u{6709} ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{4E2A}\u{9009}\u{9879}`,other:()=>`${t.number(e.optionCount)} \u{4E2A}\u{9009}\u{9879}`})}\u{53EF}\u{7528}\u{3002}`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{8FDB}\u{5165}\u{4E86} ${e.groupTitle} \u{7EC4}\u{FF0C}\u{5176}\u{4E2D}\u{6709} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{4E2A}\u{9009}\u{9879}`,other:()=>`${t.number(e.groupCount)} \u{4E2A}\u{9009}\u{9879}`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", 已选择",other:""},e.isSelected)}`,
            listboxLabel: "建议",
            selectedAnnouncement: e => `${e.optionText}, \u{5DF2}\u{9009}\u{62E9}`
        },
        "zh-TW": {
            buttonLabel: "顯示建議",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{9078}\u{9805}`,other:()=>`${t.number(e.optionCount)} \u{9078}\u{9805}`})} \u{53EF}\u{7528}\u{3002}`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{8F38}\u{5165}\u{7684}\u{7FA4}\u{7D44} ${e.groupTitle}, \u{6709} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{9078}\u{9805}`,other:()=>`${t.number(e.groupCount)} \u{9078}\u{9805}`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", 已選取",other:""},e.isSelected)}`,
            listboxLabel: "建議",
            selectedAnnouncement: e => `${e.optionText}, \u{5DF2}\u{9078}\u{53D6}`
        }
    };
    var D = e.i(904960),
        _ = e.i(455239),
        j = e.i(429305),
        L = e.i(964059),
        B = e.i(869049),
        O = e.i(823512),
        R = e.i(270170),
        I = e.i(501427),
        M = e.i(629080),
        N = e.i(97584),
        P = e.i(660063),
        q = e.i(117696),
        G = e.i(600939),
        K = e.i(419685),
        z = e.i(511607),
        U = e.i(251635);

    function Z(e, t) {
        var r, o, n;
        let l, a, i, {
                buttonRef: s,
                popoverRef: d,
                inputRef: c,
                listBoxRef: p,
                keyboardDelegate: f,
                layoutDelegate: m,
                shouldFocusWrap: g,
                isReadOnly: b,
                isDisabled: h
            } = e,
            y = (0, u.useRef)(null);
        s = s ?? y;
        let C = (0, I.useLocalizedStringFormatter)((r = w) && r.__esModule ? r.default : r, "@react-aria/combobox"),
            {
                menuTriggerProps: x,
                menuProps: v
            } = (0, M.useMenuTrigger)({
                type: "listbox",
                isDisabled: h || b
            }, t, s);
        S.listData.set(t, {
            id: v.id
        });
        let {
            collection: $
        } = t, {
            disabledKeys: Z
        } = t.selectionManager, W = (0, u.useMemo)(() => f || new(0, _.ListKeyboardDelegate)({
            collection: $,
            disabledKeys: Z,
            ref: p,
            layoutDelegate: m
        }), [f, m, $, Z, p]), {
            collectionProps: H
        } = (0, P.useSelectableCollection)({
            selectionManager: t.selectionManager,
            keyboardDelegate: W,
            disallowTypeAhead: !0,
            disallowEmptySelection: !0,
            shouldFocusWrap: g,
            ref: c,
            isVirtualized: !0
        }), Q = (0, N.useRouter)(), Y = function(e = []) {
            let t = (0, O.useId)(),
                [r, o] = (0, u.useState)(!0),
                [n, l] = (0, u.useState)(e);
            return n.some((t, r) => !Object.is(t, e[r])) && (o(!0), l(e)), (0, u.useEffect)(() => {
                r && !document.getElementById(t) && o(!1)
            }, [t, r, n]), r ? t : void 0
        }([t.selectionManager.selectedKeys, t.selectionManager.selectionMode]), {
            isInvalid: J,
            validationErrors: X,
            validationDetails: ee
        } = t.displayValidation, {
            labelProps: et,
            inputProps: er,
            descriptionProps: eo,
            errorMessageProps: eu
        } = (0, q.useTextField)({
            ...e,
            isRequired: "multiple" === e.selectionMode ? e.isRequired && t.selectionManager.isEmpty : e.isRequired,
            onChange: t.setInputValue,
            onKeyDown: b ? e.onKeyDown : (0, V.chain)(t.isOpen && H.onKeyDown, r => {
                if (!r.nativeEvent.isComposing) switch (r.key) {
                    case "Enter":
                    case "Tab":
                        if (t.isOpen && "Enter" === r.key && r.preventDefault(), t.isOpen && p.current && null != t.selectionManager.focusedKey) {
                            let e = t.collection.getItem(t.selectionManager.focusedKey);
                            if (e?.props.href) {
                                let o = p.current.querySelector(`[data-key="${CSS.escape(t.selectionManager.focusedKey.toString())}"]`);
                                "Enter" === r.key && o instanceof HTMLAnchorElement && Q.open(o, r, e.props.href, e.props.routerOptions), t.close();
                                break
                            }
                            if (e?.props.onAction) {
                                e.props.onAction(), t.close();
                                break
                            }
                        }("Enter" === r.key || t.isOpen) && t.commit(), "Tab" === r.key && r.continuePropagation();
                        break;
                    case "Escape":
                        (!t.selectionManager.isEmpty || "" === t.inputValue || e.allowsCustomValue) && r.continuePropagation(), t.revert();
                        break;
                    case "ArrowDown":
                        t.open("first", "manual");
                        break;
                    case "ArrowUp":
                        t.open("last", "manual");
                        break;
                    case "ArrowLeft":
                    case "ArrowRight":
                        t.selectionManager.setFocusedKey(null)
                }
            }, e.onKeyDown),
            onBlur: r => {
                let o = s?.current && s.current === r.relatedTarget,
                    u = (0, T.nodeContains)(d.current, r.relatedTarget);
                o || u || (e.onBlur && e.onBlur(r), t.setFocused(!1))
            },
            value: t.inputValue,
            defaultValue: t.defaultInputValue,
            onFocus: r => {
                t.isFocused || (e.onFocus && e.onFocus(r), t.setFocused(!0))
            },
            autoComplete: "off",
            validate: void 0,
            [U.privateValidationStateProp]: t,
            "aria-describedby": [Y, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }, c);
        (0, B.useFormReset)(c, t.defaultValue, t.setValue);
        let en = (0, R.useLabels)({
                id: x.id,
                "aria-label": C.format("buttonLabel"),
                "aria-labelledby": e["aria-labelledby"] || et.id
            }),
            el = (0, R.useLabels)({
                id: v.id,
                "aria-label": C.format("listboxLabel"),
                "aria-labelledby": e["aria-labelledby"] || et.id
            }),
            ea = (0, u.useRef)(0),
            ei = null != t.selectionManager.focusedKey && t.isOpen ? t.collection.getItem(t.selectionManager.focusedKey) : void 0,
            es = ei?.parentKey ?? null,
            ed = t.selectionManager.focusedKey ?? null,
            ec = (0, u.useRef)(es),
            ep = (0, u.useRef)(ed);
        (0, u.useEffect)(() => {
            if ((0, D.isAppleDevice)() && null != ei && null != ed && ed !== ep.current) {
                let e = t.selectionManager.isSelected(ed),
                    r = null != es ? t.collection.getItem(es) : null,
                    o = r?.["aria-label"] || ("string" == typeof r?.rendered ? r.rendered : "") || "",
                    u = C.format("focusAnnouncement", {
                        isGroupChange: (r && es !== ec.current) ?? !1,
                        groupTitle: o,
                        groupCount: r ? [...(0, K.getChildNodes)(r, t.collection)].length : 0,
                        optionText: ei["aria-label"] || ei.textValue || "",
                        isSelected: e
                    });
                (0, A.announce)(u)
            }
            ec.current = es, ep.current = ed
        });
        let ef = (0, z.getItemCount)(t.collection),
            em = (0, u.useRef)(ef),
            eg = (0, u.useRef)(t.isOpen);
        (0, u.useEffect)(() => {
            let e = t.isOpen !== eg.current && (null == t.selectionManager.focusedKey || (0, D.isAppleDevice)());
            if (t.isOpen && (e || ef !== em.current)) {
                let e = C.format("countAnnouncement", {
                    optionCount: ef
                });
                (0, A.announce)(e)
            }
            em.current = ef, eg.current = t.isOpen
        });
        let eb = (0, u.useRef)(t.selectedKey);
        return (0, u.useEffect)(() => {
            if ((0, D.isAppleDevice)() && t.isFocused && t.selectedItem && t.selectedKey !== eb.current) {
                let e = t.selectedItem["aria-label"] || t.selectedItem.textValue || "",
                    r = C.format("selectedAnnouncement", {
                        optionText: e
                    });
                (0, A.announce)(r)
            }
            eb.current = t.selectedKey
        }), (0, u.useEffect)(() => {
            if (t.isOpen) return (0, F.ariaHideOutside)([c.current, d.current].filter(e => null != e))
        }, [t.isOpen, c, d]), o = () => {
            !ei && c.current && (0, T.getActiveElement)((0, E.getOwnerDocument)(c.current)) === c.current && (0, k.dispatchVirtualFocus)(c.current, null)
        }, n = [ei], l = (0, u.useRef)(!0), a = (0, u.useRef)(null), i = (0, G.useEffectEvent)(o), (0, u.useEffect)(() => (l.current = !0, () => {
            l.current = !1
        }), []), (0, u.useEffect)(() => {
            let e = a.current;
            l.current ? l.current = !1 : (!e || n.some((t, r) => !Object.is(t, e[r]))) && i(), a.current = n
        }, n), (0, L.useEvent)(p, "react-aria-item-action", t.isOpen ? () => {
            t.close()
        } : void 0), {
            labelProps: et,
            buttonProps: {
                ...x,
                ...en,
                excludeFromTabOrder: !0,
                preventFocusOnPress: !0,
                onPress: e => {
                    "touch" === e.pointerType && (c.current?.focus(), t.toggle(null, "manual"))
                },
                onPressStart: e => {
                    "touch" !== e.pointerType && (c.current?.focus(), t.toggle("keyboard" === e.pointerType || "virtual" === e.pointerType ? "first" : null, "manual"))
                },
                isDisabled: h || b
            },
            inputProps: (0, j.mergeProps)(er, {
                role: "combobox",
                "aria-expanded": x["aria-expanded"],
                "aria-controls": t.isOpen ? v.id : void 0,
                "aria-autocomplete": "list",
                "aria-activedescendant": ei ? (0, S.getItemId)(t, ei.key) : void 0,
                onTouchEnd: e => {
                    if (h || b) return;
                    if (e.timeStamp - ea.current < 500) {
                        e.preventDefault(), c.current?.focus();
                        return
                    }
                    let r = (0, T.getEventTarget)(e).getBoundingClientRect(),
                        o = e.changedTouches[0],
                        u = Math.ceil(r.left + .5 * r.width),
                        n = Math.ceil(r.top + .5 * r.height);
                    o.clientX === u && o.clientY === n && (e.preventDefault(), c.current?.focus(), t.toggle(null, "manual"), ea.current = e.timeStamp)
                },
                autoCorrect: "off",
                spellCheck: "false"
            }),
            listBoxProps: (0, j.mergeProps)(v, el, {
                onAction: void 0,
                autoFocus: t.focusStrategy || !0,
                shouldUseVirtualFocus: !0,
                shouldSelectOnPressUp: !0,
                shouldFocusOnHover: !0,
                linkBehavior: "selection",
                UNSTABLE_itemBehavior: "action"
            }),
            valueProps: {
                id: Y
            },
            descriptionProps: eo,
            errorMessageProps: eu,
            isInvalid: J,
            validationErrors: X,
            validationDetails: ee
        }
    }
    e.s(["useComboBox", 0, Z], 938822);
    var W = e.i(702985);

    function H(e) {
        let t = (0, W.useCollator)({
                usage: "search",
                ...e
            }),
            r = (0, u.useCallback)((e, r) => 0 === r.length || (e = e.normalize("NFC"), r = r.normalize("NFC"), 0 === t.compare(e.slice(0, r.length), r)), [t]),
            o = (0, u.useCallback)((e, r) => 0 === r.length || (e = e.normalize("NFC"), r = r.normalize("NFC"), 0 === t.compare(e.slice(-r.length), r)), [t]),
            n = (0, u.useCallback)((e, r) => {
                if (0 === r.length) return !0;
                e = e.normalize("NFC");
                let o = 0,
                    u = (r = r.normalize("NFC")).length;
                for (; o + u <= e.length; o++) {
                    let n = e.slice(o, o + u);
                    if (0 === t.compare(r, n)) return !0
                }
                return !1
            }, [t]);
        return (0, u.useMemo)(() => ({
            startsWith: r,
            endsWith: o,
            contains: n
        }), [r, o, n])
    }
    e.s(["useFilter", 0, H], 86703);
    var Q = e.i(603360),
        Y = e.i(997007),
        J = e.i(512985),
        X = e.i(803258);

    function ee(e) {
        let {
            defaultFilter: t,
            menuTrigger: r = "input",
            allowsEmptyCollection: o = !1,
            allowsCustomValue: n,
            shouldCloseOnBlur: l = !0,
            selectionMode: a = "single"
        } = e, [i, s] = (0, u.useState)(!1), [d, c] = (0, u.useState)(!1), [p, f] = (0, u.useState)(null), m = (0, u.useMemo)(() => void 0 !== e.defaultValue ? e.defaultValue : "single" === a ? e.defaultSelectedKey ?? null : [], [e.defaultValue, e.defaultSelectedKey, a]), g = (0, u.useMemo)(() => void 0 !== e.value ? e.value : "single" === a ? e.selectedKey : void 0, [e.value, e.selectedKey, a]), [b, h] = (0, X.useControlledState)(g, m, e.onChange), y = "single" === a && Array.isArray(b) ? b[0] : b, C = t => {
            if ("single" === a) {
                let r = Array.isArray(t) ? t[0] ?? null : t;
                h(r), r !== y && e.onSelectionChange?.(r)
            } else {
                let e = [];
                Array.isArray(t) ? e = t : null != t && (e = [t]), h(e)
            }
        }, {
            collection: x,
            selectionManager: v,
            disabledKeys: $
        } = (0, Y.useListState)({
            ...e,
            items: e.items ?? e.defaultItems,
            selectionMode: a,
            disallowEmptySelection: "single" === a,
            allowDuplicateSelectionEvents: !0,
            selectedKeys: (0, u.useMemo)(() => (function(e) {
                if (void 0 !== e) return null === e ? [] : Array.isArray(e) ? e : [e]
            })(y), [y]),
            onSelectionChange: t => {
                if ("all" !== t)
                    if ("single" === a) {
                        let r = t.values().next().value ?? null;
                        r === y ? (e.onSelectionChange?.(r), N(), R()) : C(r)
                    } else C([...t])
            }
        }), A = "single" === a ? v.firstSelectedKey : null, F = (0, u.useMemo)(() => [...v.selectedKeys].map(e => x.getItem(e)).filter(e => null != e), [v.selectedKeys, x]), [V, k] = (0, X.useControlledState)(e.inputValue, et(e.defaultInputValue, A, x) || "", e.onInputChange), [T] = (0, u.useState)(y), [S] = (0, u.useState)(V), E = (0, u.useMemo)(() => {
            var r, o, u;
            return null == e.items && t ? (r = x, o = V, u = t, new(0, Q.ListCollection)(function e(t, r, o, u) {
                let n = [];
                for (let l of r)
                    if ("section" === l.type && l.hasChildNodes) {
                        let r = e(t, (0, K.getChildNodes)(l, t), o, u);
                        [...r].some(e => "item" === e.type) && n.push({
                            ...l,
                            childNodes: r
                        })
                    } else "item" === l.type && u(l.textValue, o) ? n.push({
                        ...l
                    }) : "item" !== l.type && n.push({
                        ...l
                    });
                return n
            }(r, r, o, u))) : x
        }, [x, V, t, e.items]), [w, D] = (0, u.useState)(E), _ = (0, u.useRef)("focus"), j = (0, J.useOverlayTriggerState)({
            ...e,
            onOpenChange: t => {
                e.onOpenChange && e.onOpenChange(t, t ? _.current : void 0), v.setFocused(t), t || v.setFocusedKey(null)
            },
            isOpen: void 0,
            defaultOpen: void 0
        }), L = (t = null, u) => {
            let n = "manual" === u || "focus" === u && "focus" === r;
            (o || E.size > 0 || n && x.size > 0 || e.items) && (n && !j.isOpen && void 0 === e.items && s(!0), _.current = u, f(t), j.open())
        }, B = (0, u.useCallback)(() => {
            D(i ? x : E)
        }, [i, x, E]), O = (0, u.useCallback)((e = null) => {
            j.isOpen && B(), f(e), j.toggle()
        }, [j, B]), R = (0, u.useCallback)(() => {
            j.isOpen && (B(), j.close())
        }, [j, B]), [I, M] = (0, u.useState)(V), N = () => {
            let e = null != A ? x.getItem(A)?.textValue ?? "" : "";
            M(e), k(e)
        }, P = (0, u.useRef)(y), q = (0, u.useRef)(null != A ? x.getItem(A)?.textValue ?? "" : "");
        (0, u.useEffect)(() => {
            d && (E.size > 0 || o) && !j.isOpen && V !== I && "manual" !== r && L(null, "input"), i || o || !j.isOpen || 0 !== E.size || R(), null != y && y !== P.current && "single" === a && R(), V !== I && (v.setFocusedKey(null), s(!1), "single" === a && "" === V && (void 0 === e.inputValue || void 0 === g) && C(null)), y !== P.current && (void 0 === e.inputValue || void 0 === g) ? N() : I !== V && M(V);
            let t = null != A ? x.getItem(A)?.textValue ?? "" : "";
            d || null == A || void 0 !== e.inputValue || A !== P.current || q.current === t || (M(t), k(t)), P.current = y, q.current = t
        });
        let G = (0, U.useFormValidationState)({
                ...e,
                value: (0, u.useMemo)(() => Array.isArray(y) && 0 === y.length ? null : {
                    inputValue: V,
                    value: y,
                    selectedKey: A
                }, [V, A, y])
            }),
            z = () => {
                if ("multiple" === a) {
                    M(V), R();
                    return
                }
                P.current = null, C(null), R()
            },
            Z = (t = !1) => {
                if (void 0 !== g && void 0 !== e.inputValue) {
                    let r = null != A ? x.getItem(A)?.textValue ?? "" : "";
                    (t || "multiple" === a || V !== r) && (e.onSelectionChange?.(A), e.onChange?.(y)), M(r), R()
                } else N(), R()
            },
            W = () => {
                n ? V === (null != A ? x.getItem(A)?.textValue ?? "" : "") ? Z() : z() : Z()
            },
            H = (0, u.useRef)([V, y]),
            ee = (0, u.useMemo)(() => j.isOpen ? i ? x : E : w, [j.isOpen, x, E, i, w]),
            er = e.defaultSelectedKey ?? ("single" === a ? T : null);
        return {
            ...G,
            ...j,
            focusStrategy: p,
            toggle: (t = null, u) => {
                let n = "manual" === u || "focus" === u && "focus" === r;
                (o || E.size > 0 || n && x.size > 0 || e.items || j.isOpen) && (n && !j.isOpen && void 0 === e.items && s(!0), j.isOpen || (_.current = u), O(t))
            },
            open: L,
            close: W,
            selectionManager: v,
            value: y,
            defaultValue: m ?? T,
            setValue: C,
            selectedKey: A,
            selectedItems: F,
            defaultSelectedKey: er,
            setSelectedKey: C,
            disabledKeys: $,
            isFocused: d,
            setFocused: t => {
                t ? (H.current = [V, y], "focus" !== r || e.isReadOnly || L(null, "focus")) : (l && W(), (V !== H.current[0] || y !== H.current[1]) && G.commitValidation()), c(t)
            },
            selectedItem: F[0] ?? null,
            collection: ee,
            inputValue: V,
            defaultInputValue: et(e.defaultInputValue, er, x) ?? S,
            setInputValue: k,
            commit: () => {
                j.isOpen && null != v.focusedKey ? v.isSelected(v.focusedKey) && "single" === a ? Z(!0) : v.select(v.focusedKey) : W()
            },
            revert: () => {
                n && null == A ? z() : Z()
            }
        }
    }

    function et(e, t, r) {
        return null == e && null != t ? r.getItem(t)?.textValue ?? "" : e
    }
    e.s(["useComboBoxState", 0, ee], 908390);
    var er = e.i(611017),
        eo = e.i(661013),
        eu = e.i(441737),
        en = e.i(672451),
        el = e.i(419476),
        ea = e.i(675815);
    let ei = e => {
        let t = u.default.useRef(null),
            {
                popoverRef: r = t,
                isOpen: n,
                onClose: l,
                children: a
            } = e,
            {
                overlayProps: i
            } = (0, el.useOverlay)({
                isOpen: n,
                onClose: l,
                shouldCloseOnBlur: !0,
                isDismissable: !0
            }, r);
        return (0, o.jsx)(ea.FocusScope, {
            restoreFocus: !0,
            "data-sentry-element": "FocusScope",
            "data-sentry-component": "Popover",
            "data-sentry-source-file": "Popover.tsx",
            children: (0, o.jsxs)("div", {
                className: "absolute z-10 mt-[6px] w-full rounded-xl bg-white drop-shadow-xl",
                ...i,
                ref: r,
                children: [a, (0, o.jsx)(en.DismissButton, {
                    onDismiss: l,
                    "data-sentry-element": "DismissButton",
                    "data-sentry-source-file": "Popover.tsx"
                })]
            })
        })
    };
    var es = e.i(360375),
        ed = e.i(6390);
    let ec = ({
            item: e,
            state: t
        }) => {
            let r = (0, u.useRef)(null),
                {
                    optionProps: n,
                    isSelected: l,
                    isFocused: a
                } = (0, ed.useOption)({
                    key: e.key
                }, t, r),
                i = (0, m.default)("m-1 select-none rounded-lg bg-gray-200 pb-1 pl-2 pr-2 pt-1 text-sm font-semibold text-black cursor-pointer", {
                    "bg-gray-200": l || a,
                    "bg-transparent": !l && !a
                });
            return (0, o.jsx)("li", {
                ...n,
                ref: r,
                className: i,
                "data-sentry-component": "Option",
                "data-sentry-source-file": "Option.tsx",
                children: e.rendered
            })
        },
        ep = e => {
            let t = u.default.useRef(null),
                {
                    listBoxRef: r = t,
                    state: n
                } = e,
                {
                    listBoxProps: l
                } = (0, es.useListBox)(e, n, r);
            return (0, o.jsx)("ul", {
                ...l,
                ref: r,
                className: "m-0 max-h-40 list-none overflow-auto p-0",
                "data-sentry-component": "ListBox",
                "data-sentry-source-file": "ListBox.tsx",
                children: [...n.collection].map(e => (0, o.jsx)(ec, {
                    item: e,
                    state: n
                }, e.key))
            })
        };
    var ef = e.i(66736);
    let em = e => {
        let {
            isDisabled: t,
            hasError: r,
            hasWarning: n
        } = e, {
            contains: l
        } = H({
            sensitivity: "base"
        }), a = ee({
            ...e,
            defaultFilter: l
        }), i = (0, u.useRef)(null), s = (0, u.useRef)(null), d = (0, u.useRef)(null), c = (0, u.useRef)(null), {
            buttonProps: p,
            inputProps: f,
            listBoxProps: g,
            labelProps: b
        } = Z({
            ...e,
            inputRef: s,
            buttonRef: i,
            listBoxRef: d,
            popoverRef: c
        }, a), {
            buttonProps: h
        } = (0, er.useButton)(p, i), y = (0, m.default)("stroke-gray-900 group-hover/select:stroke-gray-800 dark:group-hover/select:stroke-gray-200 transition-all ease-out duration-400", {
            "rotate-180 stroke-gray-900 ": a.isOpen
        }), C = (0, m.default)("rounded-lg w-full border border-gray-200 outline-blue focus:ring-3 focus:ring-blue-dark focus:outline-blue focus:outline-offset-0 focus:border-none transition-all ease-out duration-400", "text-gray-900 dark:text-gray-400 dark:text-white", "placeholder-gray-600 dark:placeholder-gray-400", {
            "bg-gray-100 dark:bg-gray-800 cursor-not-allowed": t,
            "border-yellow-500 dark:border-yellow-500 border-2": n,
            "border-red-500 dark:border-red-500 border-2": r
        }, {
            "bg-gray-50 dark:bg-gray-900": !t,
            "border-gray-400 hover:border-gray-900 dark:border-gray-500 dark:hover:border-white": !r && !n
        });
        return (0, o.jsxs)("div", {
            className: "inline-flex w-full flex-col",
            "data-sentry-component": "ComboBox",
            "data-sentry-source-file": "ComboBox.tsx",
            children: [(0, o.jsxs)("div", {
                className: "flex justify-between",
                children: [(0, o.jsx)("label", {
                    ...b,
                    className: "inline-block pb-2",
                    children: e.label
                }), e.required && (0, o.jsx)("span", {
                    className: "text-sm text-gray-400",
                    children: e.requiredText
                })]
            }), (0, o.jsxs)("div", {
                className: "relative inline-block w-full",
                children: [(0, o.jsx)("input", {
                    ...f,
                    ref: s,
                    className: C
                }), (0, o.jsx)("button", {
                    className: "absolute top-0 right-0 bottom-0 h-10 px-2 text-gray-900",
                    ...h,
                    ref: i,
                    children: (0, o.jsx)("span", {
                        "aria-hidden": "true",
                        children: (0, o.jsx)(eo.default, {
                            className: y,
                            "data-sentry-element": "ArrowDown",
                            "data-sentry-source-file": "ComboBox.tsx"
                        })
                    })
                }), e.helpText && (0, o.jsx)(eu.default, {
                    helperText: e.helpText,
                    hasError: e.hasError,
                    hasWarning: e.hasWarning
                }), a.isOpen && (0, o.jsx)(ei, {
                    popoverRef: c,
                    isOpen: a.isOpen,
                    onClose: a.close,
                    children: (0, o.jsx)(ep, {
                        ...g,
                        listBoxRef: d,
                        state: a
                    })
                })]
            })]
        })
    };
    em.Item = ef.Item;
    var eg = e.i(475200);
    e.s(["default", 0, e => {
        let {
            visibleConditions: t,
            visibleCountry: r,
            countryCode: l
        } = e, i = (0, eg.default)(), c = e?.chained?.map(e => e.dependant) || [];
        (0, u.useEffect)(() => {
            e.defaultValue && e.setValue(e.formFieldId, e.defaultValue, {
                shouldValidate: !0
            })
        }, [e.defaultValue, e.setValue, e.formFieldId]);
        let p = (0, a.useWatch)({
                control: e.control,
                name: t?.map(({
                    fieldId: e
                }) => e) || [],
                defaultValue: t?.reduce((t, {
                    fieldId: r
                }) => (t[r] = e.defaultValue, t), {})
            }),
            f = d(t, p);
        (0, u.useEffect)(() => {
            f || e.control.unregister(e.formFieldId)
        }, [f, e.control, e.formFieldId]);
        let m = t => {
                e.setValue(e.formFieldId, t, {
                    shouldValidate: !0
                })
            },
            g = e => (0, o.jsx)(em.Item, {
                "data-sentry-element": "ComboBox.Item",
                "data-sentry-component": "renderComboBoxItem",
                "data-sentry-source-file": "ComboBoxMapper.tsx",
                children: e?.label || e?.option
            }, e.value),
            b = t => {
                e.setValue(e.formFieldId, t, {
                    shouldValidate: !0
                })
            },
            h = e => (0, o.jsx)(em.Item, {
                "data-sentry-element": "ComboBox.Item",
                "data-sentry-component": "renderChainedComboBoxItem",
                "data-sentry-source-file": "ComboBoxMapper.tsx",
                children: e.label
            }, e.value);
        return f && s(r, l) ? (0, o.jsx)(a.Controller, {
            name: e.formFieldId,
            control: e.control,
            rules: {
                required: e.isRequired
            },
            render: ({
                fieldState: t
            }) => (0, o.jsxs)(o.Fragment, {
                children: [!c.some(t => t === e.formFieldId) && (i ? (0, o.jsxs)("div", {
                    className: "inline-flex w-full flex-col",
                    children: [(0, o.jsxs)("label", {
                        className: "flex items-center justify-between pb-2",
                        children: [(0, o.jsx)("span", {
                            children: e.label
                        }), e.isRequired && (0, o.jsx)("span", {
                            className: "text-sm text-gray-400",
                            children: e.requiredText
                        })]
                    }), (0, o.jsx)($.default, {
                        isDisabled: e.isDisabled,
                        selectedKey: e.defaultValue,
                        label: e.label,
                        name: e.formFieldId,
                        placeholder: e.placeholder,
                        onSelectionChange: m,
                        className: t.error ? "rounded-lg border-2 border-red-500 bg-white p-2" : "rounded-lg border border-gray-300 bg-white p-2",
                        children: (e?.dropdownOptionsFromReference?.options || e?.dropdownOptions || []).map(t => {
                            let r, u;
                            return r = void 0 !== t.value ? t.value : t.key || t.toString(), (u = t.label || t.option || t.text || t.toString() || e.placeholder) && "string" != typeof u && (u = r), (0, o.jsx)($.default.Item, {
                                "data-sentry-element": "Select.Item",
                                "data-sentry-component": "renderSelectItem",
                                "data-sentry-source-file": "ComboBoxMapper.tsx",
                                children: u
                            }, r)
                        })
                    }), t.error && (0, o.jsx)(eu.default, {
                        helperText: (0, n.default)(e.helpText, e.errorText, e.warningText, void 0 !== t.error, !1),
                        hasError: void 0 !== t.error
                    })]
                }) : (0, o.jsx)(em, {
                    isDisabled: e.isDisabled,
                    defaultSelectedKey: e.defaultValue,
                    required: e.isRequired,
                    requiredText: e.requiredText,
                    menuTrigger: "focus",
                    name: e.formFieldId,
                    placeholder: e.placeholder,
                    defaultItems: e?.dropdownOptionsFromReference?.options || e?.dropdownOptions,
                    label: e.label,
                    onSelectionChange: m,
                    ...void 0 !== t.error && {
                        helpText: (0, n.default)(e.helpText, e.errorText, e.warningText, void 0 !== t.error, !1)
                    },
                    hasError: void 0 !== t.error,
                    children: g
                })), e.chained && e.chained.map((r, u) => r.value === e.countryCode && r.dependant === e.formFieldId ? i ? (0, o.jsxs)("div", {
                    className: "inline-flex w-full flex-col",
                    children: [(0, o.jsxs)("label", {
                        className: "flex items-center justify-between pb-2",
                        children: [(0, o.jsx)("span", {
                            children: e.label
                        }), e.isRequired && (0, o.jsx)("span", {
                            className: "text-sm text-gray-400",
                            children: e.requiredText
                        })]
                    }), (0, o.jsx)($.default, {
                        isDisabled: e.isDisabled,
                        selectedKey: e.defaultValue,
                        label: e.label,
                        name: e.formFieldId,
                        placeholder: e.placeholder,
                        onSelectionChange: b,
                        className: t.error ? "rounded-lg border-2 border-red-500 bg-white p-2" : "rounded-lg border border-gray-300 bg-white p-2",
                        children: (e?.dropdownOptionsFromReference?.options || e?.dropdownOptions || []).map(t => {
                            let r, u;
                            return r = void 0 !== t.value ? t.value : t.key || t.toString(), u = t.label || t.text || t.toString() || e.placeholder, (0, o.jsx)($.default.Item, {
                                "data-sentry-element": "Select.Item",
                                "data-sentry-component": "renderChainedSelectItem",
                                "data-sentry-source-file": "ComboBoxMapper.tsx",
                                children: u
                            }, r)
                        })
                    }), t.error && (0, o.jsx)(eu.default, {
                        helperText: (0, n.default)(e.helpText, e.errorText, e.warningText, void 0 !== t.error, !1),
                        hasError: void 0 !== t.error
                    })]
                }, u) : (0, o.jsx)(em, {
                    isDisabled: e.isDisabled,
                    defaultSelectedKey: e.defaultValue,
                    required: e.isRequired,
                    requiredText: e.requiredText,
                    menuTrigger: "focus",
                    name: e.formFieldId,
                    placeholder: e.placeholder,
                    defaultItems: e?.dropdownOptionsFromReference?.options || e?.dropdownOptions,
                    label: e.label,
                    onSelectionChange: b,
                    ...void 0 !== t.error && {
                        helpText: (0, n.default)(e.helpText, e.errorText, e.warningText, void 0 !== t.error, !1)
                    },
                    hasError: void 0 !== t.error,
                    children: h
                }, u) : null)]
            }),
            "data-sentry-element": "Controller",
            "data-sentry-component": "ComboBoxMapper",
            "data-sentry-source-file": "ComboBoxMapper.tsx"
        }) : null
    }], 662380)
}, 179695, e => {
    "use strict";
    var t = e.i(785328),
        r = e.i(805518),
        o = e.i(923747),
        u = e.i(722990),
        n = e.i(466673),
        l = e.i(272351),
        a = e.i(497492);
    let i = {
        marks: {
            link: ({
                children: e,
                value: r
            }) => {
                let o = r?.href || "#",
                    u = /^https?:\/\//i.test(o);
                return (0, t.jsx)("a", {
                    href: o,
                    ...u ? {
                        target: "_blank",
                        rel: "noopener noreferrer"
                    } : {},
                    children: e
                })
            }
        }
    };
    e.s(["default", 0, ({
        control: e,
        richText: s,
        visibleConditions: d,
        visibleCountry: c,
        countryCode: p,
        className: f,
        formFieldId: m,
        blocksSubmission: g
    }) => {
        let b = (0, n.useWatch)({
            control: e,
            name: d?.map(({
                fieldId: e
            }) => e) || []
        });
        if (!(0, l.shouldRenderField)(d, b) || !(0, a.isCountryVisible)(c, p)) return null;
        let h = s?.text;
        return !h || Array.isArray(h) && 0 === h.length ? null : g ? (0, t.jsx)("div", {
            id: m,
            className: "rounded-lg bg-[#3B1213] p-4",
            children: (0, t.jsxs)("div", {
                className: "flex",
                children: [(0, t.jsx)("div", {
                    className: "pr-4",
                    children: (0, t.jsx)(o.WarningOctagon, {
                        color: "red",
                        weight: "fill",
                        size: 20
                    })
                }), (0, t.jsx)("div", {
                    className: "self-center text-[13px] text-white [&_a]:underline",
                    children: (0, t.jsx)(u.PortableText, {
                        value: h,
                        components: i
                    })
                })]
            })
        }) : (0, t.jsx)("div", {
            id: m,
            "data-sentry-component": "TextMapper",
            "data-sentry-source-file": "TextMapper.tsx",
            children: (0, t.jsx)(r.default, {
                className: f,
                "data-sentry-element": "Text",
                "data-sentry-source-file": "TextMapper.tsx",
                children: (0, t.jsx)(u.PortableText, {
                    value: h,
                    components: i,
                    "data-sentry-element": "PortableText",
                    "data-sentry-source-file": "TextMapper.tsx"
                })
            })
        })
    }])
}, 968651, e => {
    "use strict";
    e.s(["default", 0, (e, t, r, o, u) => o ? t : u ? r : e || ""])
}, 537251, e => {
    "use strict";
    var t = e.i(409781),
        r = e.i(309578),
        o = e.i(239273),
        u = e.i(575146),
        n = e.i(869324),
        l = e.i(497492),
        a = e.i(649051);
    e.s(["default", 0, ({
        fields: e = [],
        sfdcIntegration: i = {},
        disableBlindSubmit: s = !1,
        isGrowForm: d = !1
    } = {}) => {
        var c;
        let p = (0, l.getFilteredQueryParams)(["sfcid", "sflsa", "sfit"], d),
            [f, m] = (0, t.useState)({}),
            [g, b] = (0, t.useState)(!1),
            h = (c = ["elqCustomerGUID"], e ? e.filter(e => "hidden" === e.inputType && !c.includes(e.formFieldId)).reduce((e, t) => Object.assign(e, {
                [t.formFieldId]: t.defaultValue
            }), {}) : {}),
            [y] = (0, o.default)("ELOQUA"),
            {
                setFormSubmitted: C
            } = (0, u.useGateContext)(),
            x = (0, t.useRef)(void 0),
            v = (0, t.useRef)(0),
            $ = (0, t.useRef)(void 0),
            A = (0, t.useRef)(0),
            F = (0, t.useCallback)(e => {
                let t = "";
                return (0, a.storageAvailable)("localStorage") && (t = localStorage.getItem("gaSessionID") || ""), {
                    jsIP: e || "",
                    jsReferrer: document.referrer.split("?")[0] || "",
                    gaSessionID: t,
                    pathname: window.location.pathname || "",
                    date: new Date().toISOString() || ""
                }
            }, []);
        (0, t.useEffect)(() => {
            (async () => {
                let e = "";
                try {
                    let t = await fetch("https://api.ipify.org/?format=json");
                    e = (await t.json()).ip
                } catch (e) {
                    console.error("error in ip resolution: ", e)
                }
                return e
            })().then(e => {
                m(F(e))
            })
        }, [F]), (0, t.useEffect)(() => {
            if (y) {
                b(!0);
                let e = setInterval(() => {
                    v.current++, void 0 !== window._elqQ && (window._elqQ.push(["elqDataLookup", escape("7cd261a6ba06486b88648045c9069652"), ""]), clearInterval(e)), 50 === v.current && (b(!1), clearInterval(e))
                }, 100);
                x.current = e
            }
            return () => {
                clearInterval(x.current)
            }
        }, [y]);
        let V = (0, t.useCallback)(e => {
            if (s) return;
            let t = {};
            t.elqCustomerGUID = y?.split("&")[0]?.split("GUID=")[1] || "", t.emailAddress = e;
            let {
                emailConfirmation: o,
                gcid: u,
                ghandler: l,
                growDivision: a,
                growDepartment: c
            } = i;
            fetch("https://create.unity.com/e/f2", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams(Object.entries(t = {
                    ...t,
                    ...h,
                    ...p,
                    ...f,
                    ...d ? {
                        emailConfirmation: o,
                        grow: !0,
                        gcid: u,
                        ghandler: l,
                        growDivision: a,
                        growDepartment: c
                    } : i
                }).filter(([e, t]) => void 0 !== t).reduce((e, [t, r]) => (e[t] = r, e), {})).toString()
            }).then(() => {
                (0, n.default)({
                    properties: {
                        form_action: "submitted_blind",
                        form_id: t.elqFormID,
                        form_name: t.elqFormName,
                        form_customer_id: t.elqCustomerGUID
                    }
                }), C(!0)
            }).catch(e => r.captureException(e)).finally(() => {
                b(!1)
            })
        }, [s, C, y, h, p, f, i, d]);
        return (0, t.useEffect)(() => {
            let e;
            return g && (e = setTimeout(() => {
                b(!1)
            }, 2e3)), () => {
                clearTimeout(e)
            }
        }, [g]), (0, t.useEffect)(() => (window.LogElqValue = V, window.SetElqContent = () => {
            let e = setInterval(() => {
                A.current++, window.GetElqContentPersonalizationValue && (V(window.GetElqContentPersonalizationValue("V_Email_Address")), clearInterval(e)), 50 === A.current && clearInterval(e)
            }, 100);
            $.current = e
        }, () => {
            clearInterval($.current)
        }), [V]), {
            extraFields: f,
            loading: g
        }
    }])
}, 923747, e => {
    "use strict";
    var t = e.i(409781),
        r = e.i(848662);
    let o = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M116,132V80a12,12,0,0,1,24,0v52a12,12,0,0,1-24,0ZM236,91.55v72.9a19.86,19.86,0,0,1-5.86,14.14l-51.55,51.55A19.85,19.85,0,0,1,164.45,236H91.55a19.85,19.85,0,0,1-14.14-5.86L25.86,178.59A19.86,19.86,0,0,1,20,164.45V91.55a19.86,19.86,0,0,1,5.86-14.14L77.41,25.86A19.85,19.85,0,0,1,91.55,20h72.9a19.85,19.85,0,0,1,14.14,5.86l51.55,51.55A19.86,19.86,0,0,1,236,91.55Zm-24,1.66L162.79,44H93.21L44,93.21v69.58L93.21,212h69.58L212,162.79ZM128,156a16,16,0,1,0,16,16A16,16,0,0,0,128,156Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M224,91.55v72.9a8,8,0,0,1-2.34,5.66l-51.55,51.55a8,8,0,0,1-5.66,2.34H91.55a8,8,0,0,1-5.66-2.34L34.34,170.11A8,8,0,0,1,32,164.45V91.55a8,8,0,0,1,2.34-5.66L85.89,34.34A8,8,0,0,1,91.55,32h72.9a8,8,0,0,1,5.66,2.34l51.55,51.55A8,8,0,0,1,224,91.55Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M120,136V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0ZM232,91.55v72.9a15.86,15.86,0,0,1-4.69,11.31l-51.55,51.55A15.86,15.86,0,0,1,164.45,232H91.55a15.86,15.86,0,0,1-11.31-4.69L28.69,175.76A15.86,15.86,0,0,1,24,164.45V91.55a15.86,15.86,0,0,1,4.69-11.31L80.24,28.69A15.86,15.86,0,0,1,91.55,24h72.9a15.86,15.86,0,0,1,11.31,4.69l51.55,51.55A15.86,15.86,0,0,1,232,91.55Zm-16,0L164.45,40H91.55L40,91.55v72.9L91.55,216h72.9L216,164.45ZM128,160a12,12,0,1,0,12,12A12,12,0,0,0,128,160Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M227.31,80.23,175.77,28.69A16.13,16.13,0,0,0,164.45,24H91.55a16.13,16.13,0,0,0-11.32,4.69L28.69,80.23A16.13,16.13,0,0,0,24,91.55v72.9a16.13,16.13,0,0,0,4.69,11.32l51.54,51.54A16.13,16.13,0,0,0,91.55,232h72.9a16.13,16.13,0,0,0,11.32-4.69l51.54-51.54A16.13,16.13,0,0,0,232,164.45V91.55A16.13,16.13,0,0,0,227.31,80.23ZM120,80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M122,136V80a6,6,0,0,1,12,0v56a6,6,0,0,1-12,0ZM230,91.55v72.9a13.92,13.92,0,0,1-4.1,9.9L174.35,225.9a13.92,13.92,0,0,1-9.9,4.1H91.55a13.92,13.92,0,0,1-9.9-4.1L30.1,174.35a13.92,13.92,0,0,1-4.1-9.9V91.55a13.92,13.92,0,0,1,4.1-9.9L81.65,30.1a13.92,13.92,0,0,1,9.9-4.1h72.9a13.92,13.92,0,0,1,9.9,4.1L225.9,81.65A13.92,13.92,0,0,1,230,91.55Zm-12,0a2,2,0,0,0-.59-1.42L165.87,38.59a2,2,0,0,0-1.42-.59H91.55a2,2,0,0,0-1.41.59L38.58,90.13A2,2,0,0,0,38,91.55v72.9a2,2,0,0,0,.59,1.42l51.54,51.54a2,2,0,0,0,1.42.59h72.9a2,2,0,0,0,1.41-.59l51.56-51.54a2,2,0,0,0,.58-1.42ZM128,162a10,10,0,1,0,10,10A10,10,0,0,0,128,162Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M120,136V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0ZM232,91.55v72.9a15.86,15.86,0,0,1-4.69,11.31l-51.55,51.55A15.86,15.86,0,0,1,164.45,232H91.55a15.86,15.86,0,0,1-11.31-4.69L28.69,175.76A15.86,15.86,0,0,1,24,164.45V91.55a15.86,15.86,0,0,1,4.69-11.31L80.24,28.69A15.86,15.86,0,0,1,91.55,24h72.9a15.86,15.86,0,0,1,11.31,4.69l51.55,51.55A15.86,15.86,0,0,1,232,91.55Zm-16,0L164.45,40H91.55L40,91.55v72.9L91.55,216h72.9L216,164.45ZM128,160a12,12,0,1,0,12,12A12,12,0,0,0,128,160Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M124,136V80a4,4,0,0,1,8,0v56a4,4,0,0,1-8,0ZM228,91.55v72.9a12,12,0,0,1-3.51,8.49l-51.55,51.55a12,12,0,0,1-8.49,3.51H91.55a12,12,0,0,1-8.49-3.51L31.51,172.94A12,12,0,0,1,28,164.45V91.55a12,12,0,0,1,3.51-8.49L83.06,31.51A12,12,0,0,1,91.55,28h72.9a12,12,0,0,1,8.49,3.51l51.55,51.55A12,12,0,0,1,228,91.55Zm-8,0a4,4,0,0,0-1.17-2.83L167.28,37.17A4.06,4.06,0,0,0,164.45,36H91.55a4.06,4.06,0,0,0-2.83,1.17L37.17,88.72A4,4,0,0,0,36,91.55v72.9a4,4,0,0,0,1.17,2.83l51.55,51.55A4.06,4.06,0,0,0,91.55,220h72.9a4.06,4.06,0,0,0,2.83-1.17l51.55-51.55a4,4,0,0,0,1.17-2.83ZM128,164a8,8,0,1,0,8,8A8,8,0,0,0,128,164Z"
            }))]
        ]),
        u = t.forwardRef((e, u) => t.createElement(r.default, {
            ref: u,
            ...e,
            weights: o
        }));
    u.displayName = "WarningOctagonIcon", e.s(["WarningOctagon", 0, u], 923747)
}, 466673, e => {
    "use strict";
    var t = e.i(409781),
        r = e => e instanceof Date,
        o = e => null == e;
    let u = e => "object" == typeof e;
    var n = e => !o(e) && !Array.isArray(e) && u(e) && !r(e),
        l = e => n(e) && e.target ? "checkbox" === e.target.type ? e.target.checked : e.target.value : e,
        a = (e, t) => t.split(".").some((t, r, o) => !isNaN(Number(t)) && e.has(o.slice(0, r).join("."))),
        i = e => {
            let t = e.constructor && e.constructor.prototype;
            return n(t) && t.hasOwnProperty("isPrototypeOf")
        },
        s = "u" > typeof window && void 0 !== window.HTMLElement && "u" > typeof document;

    function d(e) {
        if (e instanceof Date) return new Date(e);
        let t = "u" > typeof FileList && e instanceof FileList;
        if (s && (e instanceof Blob || t)) return e;
        let r = Array.isArray(e);
        if (!r && !(n(e) && i(e))) return e;
        let o = r ? [] : Object.create(Object.getPrototypeOf(e));
        for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (o[t] = d(e[t]));
        return o
    }
    let c = "blur",
        p = "trigger",
        f = "onChange",
        m = "onSubmit",
        g = "maxLength",
        b = "minLength",
        h = "pattern",
        y = "required",
        C = "validate",
        x = "root",
        v = ["__proto__", "constructor", "prototype"],
        $ = /^\w*$/;
    var A = e => void 0 === e;
    let F = /[.[\]'"]/;
    var V = e => e.split(F).filter(Boolean),
        k = (e, t, r) => {
            if (!t || !n(e)) return r;
            let u = $.test(t) ? [t] : V(t);
            if (u.some(e => v.includes(e))) return r;
            let l = u.reduce((e, t) => o(e) ? void 0 : e[t], e);
            return A(l) || l === e ? A(e[t]) ? r : e[t] : l
        },
        T = e => "function" == typeof e,
        S = (e, t, r) => {
            let o = -1,
                u = $.test(t) ? [t] : V(t),
                l = u.length,
                a = l - 1;
            for (; ++o < l;) {
                let t = u[o],
                    l = r;
                if (o !== a) {
                    let r = e[t];
                    l = n(r) || Array.isArray(r) ? r : isNaN(+u[o + 1]) ? {} : []
                }
                if (v.includes(t)) return;
                e[t] = l, e = e[t]
            }
        };
    let E = t.default.createContext(null);
    E.displayName = "HookFormControlContext";
    var w = (e, t, r, o = !0) => {
        let u = {};
        for (let n in e) Object.defineProperty(u, n, {
            get: () => ("all" !== t._proxyFormState[n] && (t._proxyFormState[n] = !o || "all"), r && (r[n] = !0), e[n])
        });
        return u
    };
    let D = s ? t.default.useLayoutEffect : t.default.useEffect;
    var _ = e => "string" == typeof e,
        j = (e, t, r, o, u) => _(e) ? (o && t.watch.add(e), k(r, e, u)) : Array.isArray(e) ? e.map(e => (o && t.watch.add(e), k(r, e))) : (o && (t.watchAll = !0), r),
        L = e => o(e) || !u(e);
    let B = (e, t) => 0 === t.length && !Array.isArray(e) && !i(e);

    function O(e, t, o = new WeakMap) {
        if (e === t) return !0;
        if (L(e) || L(t)) return Object.is(e, t);
        if (r(e) && r(t)) return Object.is(e.getTime(), t.getTime());
        let u = Object.keys(e),
            l = Object.keys(t);
        if (u.length !== l.length) return !1;
        if (B(e, u) || B(t, l)) return Object.is(e, t);
        if (!u.length && Array.isArray(e) !== Array.isArray(t)) return !1;
        let a = o.get(e);
        if (a && a.has(t)) return !0;
        if (a) a.add(t);
        else {
            let r = new WeakSet;
            r.add(t), o.set(e, r)
        }
        for (let l of u) {
            let u = e[l];
            if (!(l in t)) return !1;
            if ("ref" !== l) {
                let e = t[l];
                if (r(u) && r(e) || (n(u) || Array.isArray(u)) && (n(e) || Array.isArray(e)) ? !O(u, e, o) : !Object.is(u, e)) return !1
            }
        }
        return !0
    }

    function R(e) {
        let r = t.default.useContext(E),
            {
                control: o = r,
                name: u,
                defaultValue: n,
                disabled: l,
                exact: a,
                compute: i
            } = e || {},
            s = t.default.useRef(n),
            d = t.default.useRef(i),
            c = t.default.useRef(void 0),
            p = t.default.useRef(o),
            f = t.default.useRef(u);
        d.current = i;
        let [m, g] = t.default.useState(() => {
            let e = o._getWatch(u, s.current);
            return d.current ? d.current(e) : e
        }), b = t.default.useCallback(e => {
            let t = j(u, o._names, e || o._formValues, !1, s.current);
            return d.current ? d.current(t) : t
        }, [o._formValues, o._names, u]), h = t.default.useCallback(e => {
            if (!l) {
                let t = j(u, o._names, e || o._formValues, !1, s.current);
                if (d.current) {
                    let e = d.current(t);
                    O(e, c.current) || (g(e), c.current = e)
                } else g(t)
            }
        }, [o._formValues, o._names, l, u]);
        D(() => (p.current === o && O(f.current, u) || (p.current = o, f.current = u, h()), o._subscribe({
            name: u,
            formState: {
                values: !0
            },
            exact: a,
            callback: e => {
                h(e.values)
            }
        })), [o, a, u, h]), t.default.useEffect(() => o._removeUnmounted());
        let y = p.current !== o,
            C = f.current,
            x = t.default.useMemo(() => {
                if (l) return null;
                let e = !y && !O(C, u);
                return y || e ? b() : null
            }, [l, y, u, C, b]);
        return null !== x ? x : m
    }
    let I = e => {
        let t = {};
        for (let o of Object.keys(e))
            if (u(e[o]) && null !== e[o] && !r(e[o])) {
                let r = I(e[o]);
                for (let e of Object.keys(r)) t[`${o}.${e}`] = r[e]
            } else t[o] = e[o];
        return t
    };
    t.default.createContext(null).displayName = "HookFormContext";
    var M = (e, t, r, o, u) => t ? {
            ...r[e],
            types: {
                ...r[e] && r[e].types ? r[e].types : {},
                [o]: u || !0
            }
        } : {},
        N = e => Array.isArray(e) ? e.filter(Boolean) : [],
        P = e => Array.isArray(e) ? e : [e],
        q = () => {
            let e = [];
            return {
                get observers() {
                    return e
                },
                next: t => {
                    for (let r of e) r.next && r.next(t)
                },
                subscribe: t => (e.push(t), {
                    unsubscribe: () => {
                        e = e.filter(e => e !== t)
                    }
                }),
                unsubscribe: () => {
                    e = []
                }
            }
        },
        G = e => n(e) && !Object.keys(e).length,
        K = e => {
            if (!s) return !1;
            let t = e ? e.ownerDocument : 0;
            return e instanceof(t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
        },
        z = e => K(e) && e.isConnected;

    function U(e, t) {
        if (_(t) && Object.prototype.hasOwnProperty.call(e, t)) return delete e[t], e;
        let r = Array.isArray(t) ? t : $.test(t) ? [t] : V(t);
        if (r.some(e => v.includes(String(e)))) return e;
        let u = 1 === r.length ? e : function(e, t) {
                let r = t.slice(0, -1).length,
                    u = 0;
                for (; u < r;) {
                    if (o(e)) {
                        e = void 0;
                        break
                    }
                    e = e[t[u]], u++
                }
                return e
            }(e, r),
            l = r.length - 1,
            a = r[l];
        return u && delete u[a], 0 !== l && (n(u) && G(u) || Array.isArray(u) && function(e) {
            for (let t in e)
                if (e.hasOwnProperty(t) && !A(e[t])) return !1;
            return !0
        }(u)) && U(e, r.slice(0, -1)), e
    }

    function Z(e) {
        return Array.isArray(e) || n(e) && !(e => {
            for (let t in e)
                if (T(e[t])) return !0;
            return !1
        })(e)
    }

    function W(e, t = {}) {
        for (let r in e) {
            let o = e[r];
            Z(o) ? (t[r] = Array.isArray(o) ? [] : {}, W(o, t[r])) : A(o) || (t[r] = !0)
        }
        return t
    }

    function H(e, t, r) {
        for (let u in r || (r = W(t)), e) {
            let n = e[u];
            if (Z(n)) A(t) || L(r[u]) ? r[u] = W(n, Array.isArray(n) ? [] : {}) : H(n, o(t) ? {} : t[u], r[u]);
            else {
                let e = t[u];
                r[u] = !O(n, e)
            }
        }
        return function e(t) {
            if (!1 !== t) {
                if (!0 === t) return !0;
                if (Array.isArray(t)) {
                    let r = t.map(t => e(t));
                    return r.some(e => void 0 !== e) ? r : void 0
                }
                if (n(t)) {
                    let r = {};
                    for (let o in t) {
                        let u = e(t[o]);
                        A(u) || (r[o] = u)
                    }
                    return Object.keys(r).length ? r : void 0
                }
            }
        }(r) || {}
    }
    let Q = {
            value: !1,
            isValid: !1
        },
        Y = {
            value: !0,
            isValid: !0
        };
    var J = e => {
            if (Array.isArray(e)) {
                if (e.length > 1) {
                    let t = e.filter(e => e && e.checked && !e.disabled).map(e => e.value);
                    return {
                        value: t,
                        isValid: !!t.length
                    }
                }
                return e[0].checked && !e[0].disabled ? e[0].attributes && !A(e[0].attributes.value) ? A(e[0].value) || "" === e[0].value ? Y : {
                    value: e[0].value,
                    isValid: !0
                } : Y : Q
            }
            return Q
        },
        X = (e, {
            valueAsNumber: t,
            valueAsDate: r,
            setValueAs: o
        }) => A(e) ? e : t ? "" === e ? NaN : e ? +e : e : r && _(e) ? new Date(e) : o ? o(e) : e;
    let ee = {
        isValid: !1,
        value: null
    };
    var et = e => Array.isArray(e) ? e.reduce((e, t) => t && t.checked && !t.disabled ? {
        isValid: !0,
        value: t.value
    } : e, ee) : ee;

    function er(e) {
        let t = e.ref;
        return "file" === t.type ? t.files : "radio" === t.type ? et(e.refs).value : "select-multiple" === t.type ? [...t.selectedOptions].map(({
            value: e
        }) => e) : "checkbox" === t.type ? J(e.refs).value : X(A(t.value) ? e.ref.value : t.value, e)
    }
    var eo = e => A(e) ? e : e instanceof RegExp ? e.source : n(e) ? e.value instanceof RegExp ? e.value.source : e.value : e,
        eu = e => ({
            isOnSubmit: !e || e === m,
            isOnBlur: "onBlur" === e,
            isOnChange: e === f,
            isOnAll: "all" === e,
            isOnTouch: "onTouched" === e
        });
    let en = "AsyncFunction";
    var el = e => {
            if (!e || !e.validate) return !1;
            if (T(e.validate)) return e.validate.constructor.name === en;
            if (n(e.validate)) {
                for (let t in e.validate)
                    if (e.validate[t].constructor.name === en) return !0
            }
            return !1
        },
        ea = (e, t, r) => {
            if (r) return !1;
            if (t.watchAll || t.watch.has(e)) return !0;
            for (let r of t.watch)
                if (e.startsWith(r) && "." === e.charAt(r.length)) return !0;
            return !1
        };
    let ei = (e, t, r, o) => {
        for (let u of r || Object.keys(e)) {
            let r = k(e, u);
            if (r) {
                let {
                    _f: e,
                    ...l
                } = r;
                if (e) {
                    if (e.refs && e.refs[0] && t(e.refs[0], u) && !o) return !0;
                    else if (e.ref && t(e.ref, e.name) && !o) return !0;
                    else if (ei(l, t)) break
                } else if (n(l) && ei(l, t)) break
            }
        }
    };

    function es(e, t, r) {
        let o = k(e, r);
        if (o || $.test(r)) return {
            error: o,
            name: r
        };
        let u = r.split(".");
        for (; u.length;) {
            let o = u.join("."),
                n = k(t, o),
                l = k(e, o);
            if (n && !Array.isArray(n) && r !== o) break;
            if (l && l.type) return {
                name: o,
                error: l
            };
            if (l && l.root && l.root.type) return {
                name: `${o}.root`,
                error: l.root
            };
            u.pop()
        }
        return {
            name: r
        }
    }
    var ed = (e, t, r) => {
        let o = k(e, r),
            u = Array.isArray(o) ? o : [];
        return S(u, x, t[r]), S(e, r, u), e
    };

    function ec(e, t, r = "validate") {
        if (_(e) || Array.isArray(e) && e.every(_) || "boolean" == typeof e && !e) return {
            type: r,
            message: _(e) ? e : "",
            ref: t
        }
    }
    var ep = e => !n(e) || e instanceof RegExp ? {
            value: e,
            message: ""
        } : e,
        ef = async (e, t, r, u, l, a) => {
            let {
                ref: i,
                refs: s,
                required: d,
                maxLength: c,
                minLength: p,
                min: f,
                max: m,
                pattern: x,
                validate: v,
                name: $,
                valueAsNumber: F,
                mount: V
            } = e._f, S = k(r, $);
            if (!V || t.has($)) return {};
            let E = s ? s[0] : i,
                w = e => {
                    if (l && E.reportValidity) {
                        let t = "boolean" == typeof e ? "" : e || "";
                        s ? s.forEach(e => e.setCustomValidity(t)) : E.setCustomValidity(t), E.reportValidity()
                    }
                },
                D = {},
                j = "radio" === i.type,
                L = "checkbox" === i.type,
                B = (F || "file" === i.type) && A(i.value) && A(S) || K(i) && "" === i.value || "" === S || Array.isArray(S) && !S.length,
                O = M.bind(null, $, u, D),
                R = (e, t, r, o = g, u = b) => {
                    let n = e ? t : r;
                    D[$] = {
                        type: e ? o : u,
                        message: n,
                        ref: i,
                        ...O(e ? o : u, n)
                    }
                };
            if (a ? !Array.isArray(S) || !S.length : d && (!(j || L) && (B || o(S)) || "boolean" == typeof S && !S || L && !J(s).isValid || j && !et(s).isValid)) {
                let {
                    value: e,
                    message: t
                } = _(d) ? {
                    value: !!d,
                    message: d
                } : ep(d);
                if (e && (D[$] = {
                        type: y,
                        message: t,
                        ref: E,
                        ...O(y, t)
                    }, !u)) return w(t), D
            }
            if (!B && (!o(f) || !o(m))) {
                let e, t, r = ep(m),
                    n = ep(f);
                if (o(S) || isNaN(S)) {
                    let o = i.valueAsDate || new Date(S),
                        u = e => new Date(new Date().toDateString() + " " + e),
                        l = "time" == i.type,
                        a = "week" == i.type;
                    _(r.value) && S && (e = l ? u(S) > u(r.value) : a ? S > r.value : o > new Date(r.value)), _(n.value) && S && (t = l ? u(S) < u(n.value) : a ? S < n.value : o < new Date(n.value))
                } else {
                    let u = i.valueAsNumber || (S ? +S : S);
                    o(r.value) || (e = u > r.value), o(n.value) || (t = u < n.value)
                }
                if ((e || t) && (R(!!e, r.message, n.message, "max", "min"), !u)) return w(D[$].message), D
            }
            if ((c || p) && !B && (_(S) || a && Array.isArray(S))) {
                let e = ep(c),
                    t = ep(p),
                    r = !o(e.value) && S.length > +e.value,
                    n = !o(t.value) && S.length < +t.value;
                if ((r || n) && (R(r, e.message, t.message), !u)) return w(D[$].message), D
            }
            if (x && !B && _(S)) {
                let {
                    value: e,
                    message: t
                } = ep(x);
                if (e instanceof RegExp && !S.match(e) && (D[$] = {
                        type: h,
                        message: t,
                        ref: i,
                        ...O(h, t)
                    }, !u)) return w(t), D
            }
            if (v) {
                if (T(v)) {
                    let e = ec(await v(S, r), E);
                    if (e && (D[$] = {
                            ...e,
                            ...O(C, e.message)
                        }, !u)) return w(e.message), D
                } else if (n(v)) {
                    let e = {};
                    for (let t in v) {
                        if (!G(e) && !u) break;
                        let o = ec(await v[t](S, r), E, t);
                        o && (e = {
                            ...o,
                            ...O(t, o.message)
                        }, w(o.message), u && (D[$] = e))
                    }
                    if (!G(e) && (D[$] = {
                            ref: E,
                            ...e
                        }, !u)) return D
                }
            }
            return w(!0), D
        };
    let em = {
            mode: m,
            reValidateMode: f,
            shouldFocusError: !0
        },
        eg = "form",
        eb = {
            submitCount: 0,
            isDirty: !1,
            isReady: !1,
            isValidating: !1,
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            touchedFields: {},
            dirtyFields: {},
            validatingFields: {}
        };
    e.s(["Controller", 0, e => e.render(function(e) {
        let r = t.default.useContext(E),
            {
                name: o,
                disabled: u,
                control: n = r,
                shouldUnregister: i,
                defaultValue: s,
                exact: p = !0
            } = e,
            f = a(n._names.array, o),
            m = t.default.useMemo(() => k(n._formValues, o, k(n._defaultValues, o, s)), [n, o, s]),
            g = R({
                control: n,
                name: o,
                defaultValue: m,
                exact: p
            }),
            b = function(e) {
                let r = t.default.useContext(E),
                    {
                        control: o = r,
                        disabled: u,
                        name: n,
                        exact: l
                    } = e || {},
                    [a, i] = t.default.useState(() => ({
                        ...o._formState,
                        defaultValues: o._defaultValues
                    })),
                    s = t.default.useRef({
                        isDirty: !1,
                        isLoading: !1,
                        dirtyFields: !1,
                        touchedFields: !1,
                        validatingFields: !1,
                        isValidating: !1,
                        isValid: !1,
                        errors: !1
                    });
                return D(() => o._subscribe({
                    name: n,
                    formState: s.current,
                    exact: l,
                    callback: e => {
                        u || i({
                            ...o._formState,
                            ...e,
                            defaultValues: o._defaultValues
                        })
                    }
                }), [n, u, l]), t.default.useEffect(() => {
                    s.current.isValid && o._setValid(!0)
                }, [o]), t.default.useMemo(() => w(a, o, s.current, !1), [a, o])
            }({
                control: n,
                name: o,
                exact: p
            }),
            h = t.default.useRef(e),
            y = t.default.useRef(null),
            C = t.default.useRef(n.register(o, {
                ...e.rules,
                value: g,
                ..."boolean" == typeof e.disabled ? {
                    disabled: e.disabled
                } : {}
            }));
        h.current = e;
        let x = t.default.useMemo(() => Object.defineProperties({}, {
                invalid: {
                    enumerable: !0,
                    get: () => !!k(b.errors, o)
                },
                isDirty: {
                    enumerable: !0,
                    get: () => !!k(b.dirtyFields, o)
                },
                isTouched: {
                    enumerable: !0,
                    get: () => !!k(b.touchedFields, o)
                },
                isValidating: {
                    enumerable: !0,
                    get: () => !!k(b.validatingFields, o)
                },
                error: {
                    enumerable: !0,
                    get: () => k(b.errors, o)
                }
            }), [b, o]),
            v = t.default.useCallback(e => {
                let t = l(e);
                return k(n._fields, o) || (C.current = n.register(o, {
                    ...h.current.rules,
                    value: t
                })), C.current.onChange({
                    target: {
                        value: l(e),
                        name: o
                    },
                    type: "change"
                })
            }, [o, n]),
            $ = t.default.useCallback(() => C.current.onBlur({
                target: {
                    value: k(n._formValues, o),
                    name: o
                },
                type: c
            }), [o, n._formValues]),
            F = t.default.useCallback(e => {
                e && (y.current = {
                    focus: () => T(e.focus) && e.focus(),
                    select: () => T(e.select) && e.select(),
                    setCustomValidity: t => T(e.setCustomValidity) && e.setCustomValidity(t),
                    reportValidity: () => T(e.reportValidity) && e.reportValidity()
                });
                let t = k(n._fields, o);
                t && t._f && e && (t._f.ref = y.current)
            }, [n._fields, o]),
            V = t.default.useMemo(() => ({
                name: o,
                value: g,
                ..."boolean" == typeof u || b.disabled ? {
                    disabled: b.disabled || u
                } : {},
                onChange: v,
                onBlur: $,
                ref: F
            }), [o, u, b.disabled, v, $, F, g]);
        return t.default.useEffect(() => {
            let e = n._options.shouldUnregister || i;
            n.register(o, {
                ...h.current.rules,
                ..."boolean" == typeof h.current.disabled ? {
                    disabled: h.current.disabled
                } : {}
            });
            let t = (e, t) => {
                let r = k(n._fields, e);
                r && r._f && (r._f.mount = t)
            };
            if (t(o, !0), e) {
                let e = d(k(i ? n._defaultValues : n._options.values || n._defaultValues, o, k(n._options.defaultValues, o, h.current.defaultValue)));
                S(n._defaultValues, o, e), A(k(n._formValues, o)) && S(n._formValues, o, e)
            }
            if (f || n.register(o), y.current) {
                let e = k(n._fields, o);
                e && e._f && (e._f.ref = y.current)
            }
            return () => {
                (f ? e && !n._state.action : e) ? n.unregister(o): t(o, !1)
            }
        }, [o, n, f, i]), t.default.useEffect(() => {
            n._setDisabledField({
                disabled: u,
                name: o
            })
        }, [u, o, n]), t.default.useMemo(() => ({
            field: V,
            formState: b,
            fieldState: x
        }), [V, b, x])
    }(e)), "useForm", 0, function(e = {}) {
        let u = t.default.useRef(void 0),
            i = t.default.useRef(void 0),
            f = t.default.useRef(e.formControl),
            [m, g] = t.default.useState(() => ({
                ...d(eb),
                isLoading: T(e.defaultValues),
                errors: e.errors || {},
                disabled: e.disabled || !1,
                defaultValues: T(e.defaultValues) ? void 0 : e.defaultValues
            }));
        if (!u.current || e.formControl && f.current !== e.formControl)
            if (f.current = e.formControl, e.formControl) u.current = {
                ...e.formControl,
                formState: m
            }, e.defaultValues && !T(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions);
            else {
                let {
                    formControl: t,
                    ...i
                } = function(e = {}) {
                    let t, u = {
                            ...em,
                            ...e
                        },
                        i = {
                            ...d(eb),
                            isLoading: T(u.defaultValues),
                            errors: u.errors || {},
                            disabled: u.disabled || !1
                        },
                        f = {},
                        m = (n(u.defaultValues) || n(u.values)) && d(u.defaultValues || u.values) || {},
                        g = u.shouldUnregister ? {} : d(m),
                        b = {
                            action: !1,
                            mount: !1,
                            watch: !1,
                            keepIsValid: !1
                        },
                        h = {
                            mount: new Set,
                            disabled: new Set,
                            unMount: new Set,
                            array: new Set,
                            watch: new Set,
                            registerName: new Set
                        },
                        y = 0,
                        v = 0,
                        F = eu(u.mode),
                        E = eu(u.reValidateMode),
                        w = {
                            isDirty: !1,
                            dirtyFields: !1,
                            validatingFields: !1,
                            touchedFields: !1,
                            isValidating: !1,
                            isValid: !1,
                            errors: !1
                        },
                        D = {
                            ...w
                        },
                        L = {
                            ...D
                        },
                        B = {
                            array: q(),
                            state: q()
                        },
                        R = "all" === u.criteriaMode,
                        M = async e => {
                            if (!b.keepIsValid && !u.disabled && (D.isValid || L.isValid || e)) {
                                let e;
                                u.resolver ? (e = G((await J()).errors), Z()) : e = await en({
                                    fields: f,
                                    onlyCheckValid: !0,
                                    eventType: "valid"
                                }), e !== i.isValid && B.state.next({
                                    isValid: e
                                })
                            }
                        }, Z = (e, t) => {
                            !u.disabled && (D.isValidating || D.validatingFields || L.isValidating || L.validatingFields) && ((e || Array.from(h.mount)).forEach(e => {
                                e && (t ? S(i.validatingFields, e, t) : U(i.validatingFields, e))
                            }), B.state.next({
                                validatingFields: i.validatingFields,
                                isValidating: !G(i.validatingFields)
                            }))
                        }, W = () => {
                            i.dirtyFields = H(m, g)
                        }, Q = (t, r, u, n) => {
                            let l = k(f, t);
                            if (l) {
                                if ((e => {
                                        let t = $.test(e) ? [e] : V(e),
                                            r = g,
                                            u = m;
                                        for (let e = 0; e < t.length - 1; e++) {
                                            let n = t[e];
                                            if (r = o(r) ? r : r[n], u = o(u) ? u : u[n], null === r && null !== u) return !0
                                        }
                                        return !1
                                    })(t)) return;
                                let a = A(k(g, t)),
                                    s = k(g, t, A(u) ? k(m, t) : u);
                                A(s) || n && n.defaultChecked || r ? S(g, t, r ? s : er(l._f)) : eh(t, s), b.mount && !b.action && (M(), a && i.isDirty && (D.isDirty || L.isDirty) && (ec() || (i.isDirty = !1, B.state.next({
                                    ...i
                                }))), e.shouldUnregister && a && !A(k(g, t)) && ea(t, h) && (b.watch = !0))
                            }
                        }, Y = (e, t, r, o, n) => {
                            let l = !1,
                                a = !1,
                                s = {
                                    name: e
                                };
                            if (!u.disabled) {
                                if (!r || o) {
                                    let r = O(k(m, e), t);
                                    (D.isDirty || L.isDirty) && (a = i.isDirty, i.isDirty = s.isDirty = !r || ec(), l = a !== s.isDirty), a = !!k(i.dirtyFields, e), r !== i.isDirty ? i.dirtyFields = H(m, g) : r ? U(i.dirtyFields, e) : S(i.dirtyFields, e, !0), s.dirtyFields = i.dirtyFields, l = l || (D.dirtyFields || L.dirtyFields) && !r !== a
                                }
                                if (r) {
                                    let t = k(i.touchedFields, e);
                                    t || (S(i.touchedFields, e, r), s.touchedFields = i.touchedFields, l = l || (D.touchedFields || L.touchedFields) && t !== r)
                                }
                                l && n && B.state.next(s)
                            }
                            return l ? s : {}
                        }, J = async e => (Z(e, !0), await u.resolver(g, u.context, ((e, t, r, o) => {
                            let u = {};
                            for (let r of e) {
                                let e = k(t, r);
                                e && S(u, r, e._f)
                            }
                            return {
                                criteriaMode: r,
                                names: [...e],
                                fields: u,
                                shouldUseNativeValidation: o
                            }
                        })(e || h.mount, f, u.criteriaMode, u.shouldUseNativeValidation))), ee = async e => {
                            let {
                                errors: t
                            } = await J(e);
                            if (Z(e), e) {
                                for (let r of e) {
                                    let e = k(t, r);
                                    e ? h.array.has(r) && n(e) && !Object.keys(e).some(e => !Number.isNaN(Number(e))) ? ed(i.errors, {
                                        [r]: e
                                    }, r) : S(i.errors, r, e) : U(i.errors, r)
                                }
                                i.errors = {
                                    ...i.errors
                                }
                            } else i.errors = t;
                            return t
                        }, et = async ({
                            name: t,
                            eventType: r
                        }) => {
                            if (e.validate) {
                                let o = await e.validate({
                                    formValues: g,
                                    formState: i,
                                    name: t,
                                    eventType: r
                                });
                                if (n(o))
                                    for (let e in o) {
                                        let t = o[e];
                                        t && ek(`${eg}.${e}`, {
                                            message: _(t.message) ? t.message : "",
                                            type: t.type || C
                                        })
                                    } else _(o) || !o ? ek(eg, {
                                        message: o || "",
                                        type: C
                                    }) : eV(eg);
                                return o
                            }
                            return !0
                        }, en = async ({
                            fields: t,
                            onlyCheckValid: r,
                            name: o,
                            eventType: n,
                            context: l = {
                                valid: !0,
                                runRootValidation: !1
                            }
                        }) => {
                            if (e.validate && (l.runRootValidation = !0, !await et({
                                    name: o,
                                    eventType: n
                                })) && (l.valid = !1, r)) return l.valid;
                            for (let o in t) {
                                let a = t[o];
                                if (a) {
                                    let {
                                        _f: t,
                                        ...s
                                    } = a;
                                    if (t) {
                                        let o = h.array.has(t.name),
                                            n = a._f && el(a._f),
                                            s = D.validatingFields || D.isValidating || L.validatingFields || L.isValidating;
                                        n && s && Z([t.name], !0);
                                        let d = await ef(a, h.disabled, g, R, u.shouldUseNativeValidation && !r, o);
                                        if (n && s && Z([t.name]), d[t.name] && (l.valid = !1, r) || (r || (k(d, t.name) ? o ? ed(i.errors, d, t.name) : S(i.errors, t.name, d[t.name]) : U(i.errors, t.name)), e.shouldUseNativeValidation && d[t.name])) break
                                    }
                                    G(s) || await en({
                                        context: l,
                                        onlyCheckValid: r,
                                        fields: s,
                                        name: o,
                                        eventType: n
                                    })
                                }
                            }
                            return l.valid
                        }, ec = (e, t) => !u.disabled && (e && t && S(g, e, t), !O(b.mount ? g : m, m)), ep = (e, t, r) => j(e, h, {
                            ...b.mount ? g : A(t) ? m : _(e) ? {
                                [e]: t
                            } : t
                        }, r, t), eh = (e, t, r = {}, u = !1, n = !1) => {
                            let l = k(f, e),
                                a = t;
                            if (l) {
                                let r = l._f;
                                r && (r.disabled || S(g, e, X(t, r)), a = K(r.ref) && o(t) ? "" : t, "select-multiple" === r.ref.type ? [...r.ref.options].forEach(e => e.selected = a.includes(e.value)) : r.refs ? "checkbox" === r.ref.type ? r.refs.forEach(e => {
                                    e.defaultChecked && e.disabled || (Array.isArray(a) ? e.checked = !!a.find(t => t === e.value) : e.checked = a === e.value || !!a)
                                }) : r.refs.forEach(e => e.checked = e.value === a) : "file" === r.ref.type ? r.ref.value = "" : (r.ref.value = a, r.ref.type || n || B.state.next({
                                    name: e,
                                    values: u ? g : d(g)
                                })))
                            }(r.shouldDirty || r.shouldTouch) && Y(e, a, r.shouldTouch, r.shouldDirty, !n), r.shouldValidate && eA(e)
                        }, ey = (e, t, o, u = !1, l = !1) => {
                            for (let a in t) {
                                if (!t.hasOwnProperty(a)) return;
                                let i = t[a],
                                    s = e + "." + a,
                                    d = k(f, s);
                                (h.array.has(e) || n(i) || d && !d._f) && !r(i) ? ey(s, i, o, u, l) : eh(s, i, o, u, l)
                            }
                        }, eC = (e, t, r, u, n = !1) => {
                            let l = k(f, e),
                                a = h.array.has(e),
                                s = u ? t : d(t),
                                c = O(k(g, e), s);
                            if (c || S(g, e, s), a) B.array.next({
                                name: e,
                                values: u ? g : d(g)
                            }), (D.isDirty || D.dirtyFields || L.isDirty || L.dirtyFields) && r.shouldDirty && (W(), n || B.state.next({
                                name: e,
                                dirtyFields: i.dirtyFields,
                                isDirty: ec(e, s)
                            }));
                            else {
                                let t = Array.isArray(s) && !s.length || G(s);
                                !l || l._f || o(s) || t ? eh(e, s, r, u, n) : ey(e, s, r, u, n)
                            }
                            if (!c && !n) {
                                let t = ea(e, h),
                                    r = u ? g : d(g);
                                B.state.next({
                                    ...t && i,
                                    name: b.mount || t ? e : void 0,
                                    values: r
                                })
                            }
                        }, ex = (e, t, r = {}) => eC(e, t, r, !1), ev = async o => {
                            b.mount = !0;
                            let n = o.target,
                                a = n.name,
                                s = !0,
                                p = k(f, a),
                                m = e => {
                                    s = Number.isNaN(e) || r(e) && isNaN(e.getTime()) || O(e, k(g, a, e))
                                };
                            if (p) {
                                var C, x, $, A, V;
                                let r, b, j, I = n.type ? er(p._f) : l(o),
                                    N = o.type === c || "focusout" === o.type,
                                    P = !((j = p._f).mount && (j.required || j.min || j.max || j.maxLength || j.minLength || j.pattern || j.validate)) && !e.validate && !u.resolver && !k(i.errors, a) && !p._f.deps,
                                    q = P || (C = N, x = k(i.touchedFields, a), $ = i.isSubmitted, A = E, !(V = F).isOnAll && (!$ && V.isOnTouch ? !(x || C) : ($ ? A.isOnBlur : V.isOnBlur) ? !C : ($ ? !A.isOnChange : !V.isOnChange) || C)),
                                    K = ea(a, h, N);
                                S(g, a, I), N ? n && n.readOnly || (p._f.onBlur && p._f.onBlur(o), t && t(0)) : p._f.onChange && p._f.onChange(o);
                                let z = Y(a, I, N),
                                    W = !G(z) || K;
                                if (N || B.state.next({
                                        name: a,
                                        type: o.type,
                                        ...v ? {
                                            values: d(g)
                                        } : {}
                                    }), q) return (!P || !i.isValid) && (D.isValid || L.isValid) && ("onBlur" === u.mode ? N && M() : N || M()), W && B.state.next({
                                    name: a,
                                    ...K ? {} : z
                                });
                                if (!u.resolver && e.validate && await et({
                                        name: a,
                                        eventType: o.type
                                    }), !N && K && B.state.next({
                                        ...i
                                    }), u.resolver) {
                                    let {
                                        errors: e
                                    } = await J([a]);
                                    if (Z([a]), m(I), !s) {
                                        G(z) || B.state.next(z);
                                        return
                                    }
                                    let t = es(i.errors, f, a),
                                        o = es(e, f, t.name || a);
                                    r = o.error, a = o.name, b = G(e)
                                } else Z([a], !0), r = (await ef(p, h.disabled, g, R, u.shouldUseNativeValidation))[a], Z([a]), m(I), s && (r ? b = !1 : (D.isValid || L.isValid) && (b = await en({
                                    fields: f,
                                    onlyCheckValid: !0,
                                    name: a,
                                    eventType: o.type
                                })));
                                if (s) {
                                    p._f.deps && (!Array.isArray(p._f.deps) || p._f.deps.length > 0) && eA(p._f.deps);
                                    var T = a,
                                        w = b,
                                        _ = r;
                                    let e = k(i.errors, T),
                                        o = (D.isValid || L.isValid) && "boolean" == typeof w && i.isValid !== w;
                                    if (u.delayError && _) {
                                        let e;
                                        e = () => {
                                            S(i.errors, T, _), i.errors = {
                                                ...i.errors
                                            }, B.state.next({
                                                errors: i.errors
                                            })
                                        }, (t = t => {
                                            clearTimeout(y), y = setTimeout(e, t)
                                        })(u.delayError)
                                    } else clearTimeout(y), t = null, _ ? S(i.errors, T, _) : U(i.errors, T), i.errors = {
                                        ...i.errors
                                    };
                                    if ((_ ? !O(e, _) : e) || !G(z) || o) {
                                        let e = {
                                            ...z,
                                            ...o && "boolean" == typeof w ? {
                                                isValid: w
                                            } : {},
                                            errors: i.errors,
                                            name: T
                                        };
                                        i = {
                                            ...i,
                                            ...e
                                        }, B.state.next(e)
                                    }
                                }
                            }
                        }, e$ = (e, t) => {
                            if (k(i.errors, t) && e.focus) return e.focus(), 1
                        }, eA = async (e, t = {}) => {
                            let r, o, n = P(e);
                            if (u.resolver) {
                                let t = await ee(A(e) ? e : n);
                                r = G(t), o = e ? !n.some(e => k(t, e)) : r
                            } else e ? ((o = (await Promise.all(n.map(async e => {
                                let t = k(f, e);
                                return await en({
                                    fields: t && t._f ? {
                                        [e]: t
                                    } : t,
                                    eventType: p
                                })
                            }))).every(Boolean)) || i.isValid) && M() : o = r = await en({
                                fields: f,
                                name: e,
                                eventType: p
                            });
                            return B.state.next({
                                ...!_(e) || (D.isValid || L.isValid) && r !== i.isValid ? {} : {
                                    name: e
                                },
                                ...u.resolver || !e ? {
                                    isValid: r
                                } : {},
                                errors: i.errors
                            }), t.shouldFocus && !o && ei(f, e$, e ? n : h.mount), o
                        }, eF = (e, t) => ({
                            invalid: !!k((t || i).errors, e),
                            isDirty: !!k((t || i).dirtyFields, e),
                            error: k((t || i).errors, e),
                            isValidating: !!k(i.validatingFields, e),
                            isTouched: !!k((t || i).touchedFields, e)
                        }), eV = e => {
                            let t = e ? P(e) : void 0;
                            null == t || t.forEach(e => U(i.errors, e)), t ? t.forEach(e => {
                                B.state.next({
                                    name: e,
                                    errors: i.errors
                                })
                            }) : B.state.next({
                                errors: {}
                            })
                        }, ek = (e, t, r) => {
                            let o = (k(f, e, {
                                    _f: {}
                                })._f || {}).ref,
                                {
                                    ref: u,
                                    message: n,
                                    type: l,
                                    ...a
                                } = k(i.errors, e) || {};
                            S(i.errors, e, {
                                ...a,
                                ...t,
                                ref: o
                            }), B.state.next({
                                name: e,
                                errors: i.errors,
                                isValid: !1
                            }), r && r.shouldFocus && o && o.focus && o.focus()
                        }, eT = e => {
                            var t;
                            let r = !!(null == (t = e.formState) ? void 0 : t.values);
                            r && v++;
                            let {
                                unsubscribe: o
                            } = B.state.subscribe({
                                next: t => {
                                    let r, o, u;
                                    if (r = e.name, o = t.name, u = e.exact, (!r || !o || r === o || P(r).some(e => e && (u ? e === o || e.startsWith(o + ".") : e.startsWith(o) || o.startsWith(e)))) && ((e, t, r, o) => {
                                            r(e);
                                            let {
                                                name: u,
                                                ...n
                                            } = e, l = Object.keys(n);
                                            return !l.length || o && l.length >= Object.keys(t).length || l.find(e => t[e] === (!o || "all"))
                                        })(t, e.formState || D, eB, e.reRenderRoot)) {
                                        let r = {
                                            ...g
                                        };
                                        e.callback({
                                            values: r,
                                            ...i,
                                            ...t,
                                            defaultValues: m
                                        })
                                    }
                                }
                            });
                            if (!r) return o;
                            let u = !1;
                            return () => {
                                u || (u = !0, v--, o())
                            }
                        }, eS = (e, t = {}) => {
                            for (let r of e ? P(e) : h.mount) h.mount.delete(r), h.array.delete(r), t.keepValue || (U(f, r), U(g, r)), t.keepError || U(i.errors, r), t.keepDirty || U(i.dirtyFields, r), t.keepTouched || U(i.touchedFields, r), t.keepIsValidating || U(i.validatingFields, r), u.shouldUnregister || t.keepDefaultValue || U(m, r);
                            B.state.next({
                                values: d(g)
                            }), B.state.next({
                                ...i,
                                ...!t.keepDirty ? {} : {
                                    isDirty: ec()
                                }
                            }), t.keepIsValid || M()
                        }, eE = ({
                            disabled: e,
                            name: t
                        }) => {
                            if ("boolean" == typeof e && b.mount || e || h.disabled.has(t)) {
                                let r = h.disabled.has(t);
                                e ? h.disabled.add(t) : h.disabled.delete(t), !!e !== r && b.mount && !b.action && M()
                            }
                        }, ew = (e, t = {}) => {
                            let r = k(f, e),
                                o = "boolean" == typeof t.disabled || "boolean" == typeof u.disabled,
                                n = !h.registerName.has(e) && r && r._f && !r._f.mount;
                            return (S(f, e, {
                                ...r || {},
                                _f: {
                                    ...r && r._f ? r._f : {
                                        ref: {
                                            name: e
                                        }
                                    },
                                    name: e,
                                    mount: !0,
                                    ...t
                                }
                            }), h.mount.add(e), r && !n) ? eE({
                                disabled: "boolean" == typeof t.disabled ? t.disabled : u.disabled,
                                name: e
                            }) : Q(e, !0, t.value), {
                                ...o ? {
                                    disabled: t.disabled || u.disabled
                                } : {},
                                ...u.progressive ? {
                                    required: !!t.required,
                                    min: eo(t.min),
                                    max: eo(t.max),
                                    minLength: eo(t.minLength),
                                    maxLength: eo(t.maxLength),
                                    pattern: eo(t.pattern)
                                } : {},
                                name: e,
                                onChange: ev,
                                onBlur: ev,
                                ref: o => {
                                    if (o) {
                                        let u;
                                        h.registerName.add(e), ew(e, t), h.registerName.delete(e), r = k(f, e);
                                        let n = A(o.value) && o.querySelectorAll && o.querySelectorAll("input,select,textarea")[0] || o,
                                            l = "radio" === (u = n).type || "checkbox" === u.type,
                                            a = r._f.refs || [];
                                        (l ? a.find(e => e === n) : n === r._f.ref) || (S(f, e, {
                                            _f: {
                                                ...r._f,
                                                ...l ? {
                                                    refs: [...a.filter(z), n, ...Array.isArray(k(m, e)) ? [{}] : []],
                                                    ref: {
                                                        type: n.type,
                                                        name: e
                                                    }
                                                } : {
                                                    ref: n
                                                }
                                            }
                                        }), Q(e, !1, void 0, n))
                                    } else(r = k(f, e, {}))._f && (r._f.mount = !1), (u.shouldUnregister || t.shouldUnregister) && !(a(h.array, e) && b.action) && h.unMount.add(e)
                                }
                            }
                        }, eD = () => u.shouldFocusError && !u.shouldUseNativeValidation && ei(f, e$, h.mount), e_ = (e, t) => async r => {
                            let o;
                            r && (r.preventDefault && r.preventDefault(), r.persist && r.persist());
                            let n = d(g);
                            if (B.state.next({
                                    isSubmitting: !0
                                }), u.resolver) {
                                let {
                                    errors: e,
                                    values: t
                                } = await J();
                                Z(), i.errors = e, n = d(t)
                            } else await en({
                                fields: f,
                                eventType: "submit"
                            });
                            if (h.disabled.size)
                                for (let e of h.disabled) U(n, e);
                            if (U(i.errors, x), G(i.errors)) {
                                B.state.next({
                                    errors: {}
                                });
                                try {
                                    await e(n, r)
                                } catch (e) {
                                    o = e
                                }
                            } else t && await t({
                                ...i.errors
                            }, r), eD(), setTimeout(eD);
                            if (B.state.next({
                                    isSubmitted: !0,
                                    isSubmitting: !1,
                                    isSubmitSuccessful: G(i.errors) && !o,
                                    submitCount: i.submitCount + 1,
                                    errors: i.errors
                                }), o) throw o
                        }, ej = (e, t = {}) => {
                            let r = e ? d(e) : m,
                                o = d(r),
                                n = G(e);
                            if (t.keepDefaultValues || (m = r), !t.keepValues) {
                                if (t.keepDirtyValues)
                                    for (let e of Array.from(new Set([...h.mount, ...Object.keys(H(m, g))]))) {
                                        let t = k(i.dirtyFields, e),
                                            r = k(g, e),
                                            u = k(o, e);
                                        t && !A(r) ? S(o, e, r) : t || A(u) || ex(e, u)
                                    } else {
                                        if (s && A(e))
                                            for (let e of h.mount) {
                                                let t = k(f, e);
                                                if (t && t._f) {
                                                    let e = Array.isArray(t._f.refs) ? t._f.refs[0] : t._f.ref;
                                                    if (K(e)) {
                                                        let t = e.closest("form");
                                                        if (t) {
                                                            t.reset();
                                                            break
                                                        }
                                                    }
                                                }
                                            }
                                        if (t.keepFieldsRef)
                                            for (let e of h.mount) ex(e, k(o, e));
                                        else f = {}
                                    }
                                if (u.shouldUnregister) {
                                    if (g = t.keepDefaultValues ? d(m) : {}, t.keepFieldsRef)
                                        for (let e of h.mount) S(g, e, k(o, e))
                                } else g = d(o);
                                B.array.next({
                                    values: {
                                        ...o
                                    }
                                }), B.state.next({
                                    name: void 0,
                                    type: void 0,
                                    values: {
                                        ...o
                                    }
                                })
                            }
                            h = {
                                mount: t.keepDirtyValues ? h.mount : new Set,
                                unMount: new Set,
                                array: new Set,
                                registerName: new Set,
                                disabled: new Set,
                                watch: new Set,
                                watchAll: !1,
                                focus: ""
                            }, b.mount = !D.isValid || !!t.keepIsValid || !!t.keepDirtyValues || !u.shouldUnregister && !G(o), b.watch = !!u.shouldUnregister, b.keepIsValid = !!t.keepIsValid, b.action = !1, t.keepErrors || (i.errors = {}), B.state.next({
                                submitCount: t.keepSubmitCount ? i.submitCount : 0,
                                isDirty: !n && (t.keepDirty ? i.isDirty : t.keepValues ? ec() : !!(t.keepDefaultValues && !O(e, m))),
                                isSubmitted: !!t.keepIsSubmitted && i.isSubmitted,
                                dirtyFields: n ? {} : t.keepDirtyValues ? t.keepDefaultValues && g ? H(m, g) : i.dirtyFields : t.keepDefaultValues && e ? H(m, e) : t.keepDirty ? i.dirtyFields : {},
                                touchedFields: t.keepTouched ? i.touchedFields : {},
                                errors: t.keepErrors ? i.errors : {},
                                isSubmitSuccessful: !!t.keepIsSubmitSuccessful && i.isSubmitSuccessful,
                                isSubmitting: !1,
                                defaultValues: m
                            })
                        }, eL = (e, t) => ej(T(e) ? e(g) : e, {
                            ...u.resetOptions,
                            ...t
                        }), eB = e => {
                            let {
                                name: t,
                                type: r,
                                values: o,
                                ...u
                            } = e;
                            i = {
                                ...i,
                                ...u
                            }
                        }, eO = {
                            control: {
                                register: ew,
                                unregister: eS,
                                getFieldState: eF,
                                handleSubmit: e_,
                                setError: ek,
                                _subscribe: eT,
                                _runSchema: J,
                                _updateIsValidating: Z,
                                _focusError: eD,
                                _getWatch: ep,
                                _getDirty: ec,
                                _setValid: M,
                                _setFieldArray: (e, t = [], r, o, n = !0, l = !0) => {
                                    if (o && r && !u.disabled) {
                                        if (b.action = !0, l && Array.isArray(k(f, e))) {
                                            let t = r(k(f, e), o.argA, o.argB);
                                            n && S(f, e, t)
                                        }
                                        if (l && Array.isArray(k(i.errors, e))) {
                                            let t, u = r(k(i.errors, e), o.argA, o.argB);
                                            n && S(i.errors, e, u), N(k(t = i.errors, e)).length || U(t, e)
                                        }
                                        if ((D.touchedFields || L.touchedFields) && l && Array.isArray(k(i.touchedFields, e))) {
                                            let t = r(k(i.touchedFields, e), o.argA, o.argB);
                                            n && S(i.touchedFields, e, t)
                                        }(D.dirtyFields || L.dirtyFields) && W(), B.state.next({
                                            name: e,
                                            isDirty: ec(e, t),
                                            dirtyFields: i.dirtyFields,
                                            errors: i.errors,
                                            isValid: i.isValid
                                        })
                                    } else S(g, e, t)
                                },
                                _setDisabledField: eE,
                                _setErrors: e => {
                                    i.errors = e, B.state.next({
                                        errors: i.errors,
                                        isValid: !1
                                    })
                                },
                                _getFieldArray: e => N(k(b.mount ? g : m, e, u.shouldUnregister ? k(m, e, []) : [])),
                                _reset: ej,
                                _resetDefaultValues: () => T(u.defaultValues) && u.defaultValues().then(e => {
                                    eL(e, u.resetOptions), B.state.next({
                                        isLoading: !1
                                    })
                                }),
                                _removeUnmounted: () => {
                                    for (let e of h.unMount) {
                                        let t = k(f, e);
                                        t && (t._f.refs ? t._f.refs.every(e => !z(e)) : !z(t._f.ref)) && eS(e)
                                    }
                                    h.unMount = new Set
                                },
                                _disableForm: e => {
                                    "boolean" == typeof e && (B.state.next({
                                        disabled: e
                                    }), ei(f, (t, r) => {
                                        let o = k(f, r);
                                        o && (t.disabled = o._f.disabled || e, Array.isArray(o._f.refs) && o._f.refs.forEach(t => {
                                            t.disabled = o._f.disabled || e
                                        }))
                                    }, 0, !1))
                                },
                                _subjects: B,
                                _proxyFormState: D,
                                get _fields() {
                                    return f
                                },
                                get _formValues() {
                                    return g
                                },
                                get _state() {
                                    return b
                                },
                                set _state(value) {
                                    b = value
                                },
                                get _defaultValues() {
                                    return m
                                },
                                get _names() {
                                    return h
                                },
                                set _names(value) {
                                    h = value
                                },
                                get _formState() {
                                    return i
                                },
                                get _options() {
                                    return u
                                },
                                set _options(value) {
                                    F = eu((u = {
                                        ...u,
                                        ...value
                                    }).mode), E = eu(u.reValidateMode)
                                }
                            },
                            subscribe: e => (b.mount = !0, L = {
                                ...L,
                                ...e.formState
                            }, eT({
                                ...e,
                                formState: {
                                    ...w,
                                    ...e.formState
                                }
                            })),
                            trigger: eA,
                            register: ew,
                            handleSubmit: e_,
                            watch: (e, t) => {
                                if (T(e)) {
                                    v++;
                                    let {
                                        unsubscribe: r
                                    } = B.state.subscribe({
                                        next: r => "values" in r && e(r.values || ep(void 0, t), r)
                                    }), o = !1;
                                    return {
                                        unsubscribe: () => {
                                            o || (o = !0, v--, r())
                                        }
                                    }
                                }
                                return ep(e, t, !0)
                            },
                            setValue: ex,
                            setValues: (e, t = {}) => {
                                let r = T(e) ? e(g) : e;
                                if (!O(g, r)) {
                                    g = {
                                        ...g,
                                        ...r
                                    };
                                    let e = I(r);
                                    for (let r of h.mount) r in e && eC(r, e[r], t, !0, !0);
                                    B.state.next({
                                        ...i,
                                        name: void 0,
                                        type: void 0,
                                        ...v ? {
                                            values: g
                                        } : {}
                                    }), t.shouldValidate && M()
                                }
                            },
                            getValues: (e, t) => {
                                let r = {
                                    ...b.mount ? g : m
                                };
                                return t && (r = function e(t, r) {
                                    let o = {};
                                    for (let u in t)
                                        if (t.hasOwnProperty(u)) {
                                            let l = t[u],
                                                a = r[u];
                                            if (l && n(l) && a) {
                                                let t = e(l, a);
                                                n(t) && (o[u] = t)
                                            } else t[u] && (o[u] = a)
                                        } return o
                                }(t.dirtyFields ? i.dirtyFields : i.touchedFields, r)), A(e) ? r : _(e) ? k(r, e) : e.map(e => k(r, e))
                            },
                            reset: eL,
                            resetField: (e, t = {}) => {
                                k(f, e) && (A(t.defaultValue) ? ex(e, d(k(m, e))) : (ex(e, t.defaultValue), S(m, e, d(t.defaultValue))), t.keepTouched || U(i.touchedFields, e), t.keepDirty || (U(i.dirtyFields, e), i.isDirty = t.defaultValue ? ec(e, d(k(m, e))) : ec()), !t.keepError && (U(i.errors, e), D.isValid && M()), B.state.next({
                                    ...i
                                }))
                            },
                            resetDefaultValues: (e, t = {}) => {
                                if (m = d(e), !t.keepDirty) {
                                    let e = H(m, g);
                                    i.dirtyFields = e, i.isDirty = !G(e)
                                }
                                t.keepIsValid || M(), B.state.next({
                                    ...i,
                                    defaultValues: m
                                })
                            },
                            clearErrors: eV,
                            unregister: eS,
                            setError: ek,
                            setFocus: (e, t = {}) => {
                                let r = k(f, e),
                                    o = r && r._f;
                                if (o) {
                                    let e = o.refs ? o.refs[0] : o.ref;
                                    e.focus && setTimeout(() => {
                                        e.focus(), t.shouldSelect && T(e.select) && e.select()
                                    })
                                }
                            },
                            getFieldState: eF
                        };
                    return {
                        ...eO,
                        formControl: eO
                    }
                }(e);
                u.current = {
                    ...i,
                    formState: m
                }
            } let b = u.current.control;
        return b._options = e, D(() => {
            let e = b._subscribe({
                formState: b._proxyFormState,
                callback: () => g({
                    ...b._formState,
                    defaultValues: b._defaultValues
                }),
                reRenderRoot: !0
            });
            return g(e => ({
                ...e,
                isReady: !0
            })), b._formState.isReady = !0, e
        }, [b]), t.default.useEffect(() => b._disableForm(e.disabled), [b, e.disabled]), t.default.useEffect(() => {
            e.mode && (b._options.mode = e.mode), e.reValidateMode && (b._options.reValidateMode = e.reValidateMode)
        }, [b, e.mode, e.reValidateMode]), t.default.useEffect(() => {
            e.errors && (b._setErrors(e.errors), b._focusError())
        }, [b, e.errors]), t.default.useEffect(() => {
            e.shouldUnregister && b._subjects.state.next({
                values: b._getWatch()
            })
        }, [b, e.shouldUnregister]), t.default.useEffect(() => {
            if (b._proxyFormState.isDirty) {
                let e = b._getDirty();
                e !== m.isDirty && b._subjects.state.next({
                    isDirty: e
                })
            }
        }, [b, m.isDirty]), t.default.useEffect(() => {
            var t;
            e.values && !O(e.values, i.current) ? (b._reset(e.values, {
                keepFieldsRef: !0,
                ...b._options.resetOptions
            }), (null == (t = b._options.resetOptions) ? void 0 : t.keepIsValid) || b._setValid(), i.current = e.values, g(e => ({
                ...e
            }))) : b._resetDefaultValues()
        }, [b, e.values]), t.default.useEffect(() => {
            b._state.mount || (b._setValid(), b._state.mount = !0), b._state.watch && (b._state.watch = !1, b._subjects.state.next({
                ...b._formState
            })), b._removeUnmounted()
        }), u.current.formState = t.default.useMemo(() => w(m, b), [b, m]), u.current
    }, "useWatch", 0, R])
}, 613821, e => {
    "use strict";
    var t = e.i(785328);
    let r = (0, e.i(409781).forwardRef)(({
        onSubmit: e,
        children: r
    }, o) => (0, t.jsx)("form", {
        ref: o,
        onSubmit: e,
        className: "flex flex-col",
        children: r
    }));
    r.displayName = "Form", e.s(["default", 0, r], 613821)
}]);

//# debugId=ca3f0c50-7ff2-d978-5440-d96b2f587483