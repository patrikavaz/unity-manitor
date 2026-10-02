;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "46e22b81-1b39-5c51-40cb-a802ae5ce675")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 222061, 497492, 272351, 396241, 829483, 938822, 86703, 908390, 662380, e => {
    "use strict";
    var t, r, o = e.i(785328),
        n = e.i(409781),
        u = e.i(968651),
        l = e.i(620174),
        a = e.i(466673);

    function i(e, t = !1) {
        let r = new URLSearchParams(window.location.search);
        return e.reduce((e, o) => {
            let n = r.get(o);
            return e[o] = n || (t ? function(e) {
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
            operator: n
        }, u) => (function(e, t, r = "equals") {
            let o = (t ?? "").trim(),
                n = "string" == typeof e ? e.trim() : e,
                u = null != n && "" !== n;
            switch (r) {
                case "notEquals":
                    return u && n !== o;
                case "oneOf":
                    return o.split(",").some(e => e.trim() === n);
                case "notOneOf":
                    return u && !o.split(",").some(e => e.trim() === n);
                default:
                    return n === o
            }
        })(void 0 !== t[u] ? t[u] : r ? r(e) : void 0, o, n))
    }
    e.s(["checkIsGrowForm", 0, function() {
        return "true" === new URLSearchParams(window.location.search).get("isGrowForm")
    }, "cleanData", 0, e => Object.entries(e).filter(([e, t]) => void 0 !== t).reduce((e, [t, r]) => (e[t] = r, e), {}), "getAlwaysSendOnData", 0, (e, t, r) => {
        let o = {};
        return e?.forEach(e => {
            if (e.alwaysSendOn) {
                let n = e.countryRestriction && e.countryRestriction.length > 0 && !r || e.countryRestriction?.some(e => e.countryCode === r) || !s(e.visibleCountry, r),
                    u = t(e.formFieldId);
                n || !n && !0 === u ? o[e.formFieldId] = !0 : n || u || (o[e.formFieldId] = "")
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
            control: v,
            visibleConditions: x,
            getValues: $,
            visibleCountry: A,
            isNumericalOnly: F,
            restrictedDomainsToggle: V,
            restrictedDomains: k,
            restrictedDomainErrorText: S
        } = e, T = {
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
            control: v,
            name: x?.map(({
                fieldId: e
            }) => e) || []
        }), D = d(x, E, $);
        if ((0, n.useEffect)(() => {
                D || e.control.unregister(e.formFieldId)
            }, [D, e.control, e.formFieldId]), !s(A, e.countryCode) || !D) return null;
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
                        ...T,
                        ...e,
                        value: e.value || "",
                        ...void 0 !== t.error && {
                            helperText: (0, u.default)(c, p, f, void 0 !== t.error, !1)
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
                        ...T,
                        ...e,
                        value: e.value || "",
                        ...void 0 !== t.error && {
                            helperText: (0, u.default)(c, p, f, void 0 !== t.error, !1)
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
                            validate: e => !k.split(",").map(e => e.trim()).filter(e => e.length > 0).find(t => e.toLowerCase().includes(t.toLowerCase())) || S || "Input contains restricted domain"
                        }
                    },
                    name: r,
                    control: e.control,
                    render: ({
                        field: e,
                        fieldState: t
                    }) => (0, o.jsx)(l.default, {
                        ...T,
                        ...e,
                        value: e.value || "",
                        ...void 0 !== t.error && {
                            helperText: (0, u.default)(c, t.error.message || p, f, void 0 !== t.error, !1)
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
    let v = (0, n.forwardRef)(function(e, t) {
        let {
            children: r,
            isIndeterminate: u = !1,
            isDisabled: l = !1,
            isSelected: a = !1,
            isRequired: i = !1,
            hasError: s = !1,
            requiredText: d = "Required"
        } = e, c = (0, h.useToggleState)(e), [p, f] = (0, n.useState)(u), v = (0, C.useObjectRef)(t), {
            inputProps: x
        } = (0, b.useCheckbox)(e, c, v), {
            isFocusVisible: $,
            focusProps: A
        } = (0, y.useFocusRing)();
        (0, n.useEffect)(() => {
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
            S = (0, m.default)({
                "fill-white": !l
            }, {
                "fill-gray-400 dark:fill-gray-500": l
            }),
            T = (0, m.default)("ml-1 text-sm", {
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
                    ...x,
                    ...A,
                    ref: v,
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
                    className: S
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
                    className: T,
                    children: d
                })]
            })]
        })
    });
    var x = e.i(805518);
    e.s(["default", 0, e => {
        let t = e?.chained?.map(e => e.dependant) || [],
            r = e.formFieldId === p.TOS && e.isRequired || e.formFieldId === p.PRIVACY && e.isRequired || e.countryCode === c.CN && e.formFieldId === p.MARKETING_CN && e.isRequired || e.isRequired,
            [u, l] = (0, n.useState)(!1),
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
                    ...n
                },
                fieldState: a,
                formState: s
            }) => (0, o.jsxs)(o.Fragment, {
                children: [!t.some(t => t === e.formFieldId) && (0, o.jsx)(v, {
                    requiredText: e.requiredText,
                    hasError: void 0 !== a.error,
                    isRequired: e.isRequired,
                    ...n,
                    ...a,
                    ...s,
                    onChange: e => {
                        r(e), l(!u)
                    },
                    isSelected: u,
                    id: i,
                    name: i,
                    children: (0, o.jsxs)(x.default, {
                        className: "font-medium [a]:underline",
                        children: [d && (0, o.jsx)(f.PortableText, {
                            value: d,
                            components: d
                        }), m && m?.checkboxLabelText]
                    })
                }), e.chained && e.chained.map((t, c) => {
                    if (t.value === e.countryCode && t.dependant === e.formFieldId) return (0, o.jsx)(v, {
                        requiredText: e.requiredText,
                        hasError: void 0 !== a.error,
                        ...n,
                        ...a,
                        ...s,
                        onChange: e => {
                            r(e), l(!u)
                        },
                        isSelected: u,
                        id: i,
                        name: i,
                        children: (0, o.jsx)(x.default, {
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
        S = e.i(776050),
        T = e.i(888839),
        E = e.i(575414),
        D = {};
    D = {
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
    var w = e.i(904960),
        j = e.i(455239),
        _ = e.i(429305),
        L = e.i(964059),
        O = e.i(869049),
        B = e.i(823512),
        R = e.i(270170),
        I = e.i(501427),
        P = e.i(629080),
        M = e.i(97584),
        N = e.i(660063),
        q = e.i(117696),
        G = e.i(600939),
        K = e.i(419685),
        U = e.i(511607),
        z = e.i(251635);

    function Z(e, t) {
        var r, o, u;
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
            y = (0, n.useRef)(null);
        s = s ?? y;
        let C = (0, I.useLocalizedStringFormatter)((r = D) && r.__esModule ? r.default : r, "@react-aria/combobox"),
            {
                menuTriggerProps: v,
                menuProps: x
            } = (0, P.useMenuTrigger)({
                type: "listbox",
                isDisabled: h || b
            }, t, s);
        T.listData.set(t, {
            id: x.id
        });
        let {
            collection: $
        } = t, {
            disabledKeys: Z
        } = t.selectionManager, W = (0, n.useMemo)(() => f || new(0, j.ListKeyboardDelegate)({
            collection: $,
            disabledKeys: Z,
            ref: p,
            layoutDelegate: m
        }), [f, m, $, Z, p]), {
            collectionProps: H
        } = (0, N.useSelectableCollection)({
            selectionManager: t.selectionManager,
            keyboardDelegate: W,
            disallowTypeAhead: !0,
            disallowEmptySelection: !0,
            shouldFocusWrap: g,
            ref: c,
            isVirtualized: !0
        }), Q = (0, M.useRouter)(), Y = function(e = []) {
            let t = (0, B.useId)(),
                [r, o] = (0, n.useState)(!0),
                [u, l] = (0, n.useState)(e);
            return u.some((t, r) => !Object.is(t, e[r])) && (o(!0), l(e)), (0, n.useEffect)(() => {
                r && !document.getElementById(t) && o(!1)
            }, [t, r, u]), r ? t : void 0
        }([t.selectionManager.selectedKeys, t.selectionManager.selectionMode]), {
            isInvalid: J,
            validationErrors: X,
            validationDetails: ee
        } = t.displayValidation, {
            labelProps: et,
            inputProps: er,
            descriptionProps: eo,
            errorMessageProps: en
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
                    n = (0, S.nodeContains)(d.current, r.relatedTarget);
                o || n || (e.onBlur && e.onBlur(r), t.setFocused(!1))
            },
            value: t.inputValue,
            defaultValue: t.defaultInputValue,
            onFocus: r => {
                t.isFocused || (e.onFocus && e.onFocus(r), t.setFocused(!0))
            },
            autoComplete: "off",
            validate: void 0,
            [z.privateValidationStateProp]: t,
            "aria-describedby": [Y, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }, c);
        (0, O.useFormReset)(c, t.defaultValue, t.setValue);
        let eu = (0, R.useLabels)({
                id: v.id,
                "aria-label": C.format("buttonLabel"),
                "aria-labelledby": e["aria-labelledby"] || et.id
            }),
            el = (0, R.useLabels)({
                id: x.id,
                "aria-label": C.format("listboxLabel"),
                "aria-labelledby": e["aria-labelledby"] || et.id
            }),
            ea = (0, n.useRef)(0),
            ei = null != t.selectionManager.focusedKey && t.isOpen ? t.collection.getItem(t.selectionManager.focusedKey) : void 0,
            es = ei?.parentKey ?? null,
            ed = t.selectionManager.focusedKey ?? null,
            ec = (0, n.useRef)(es),
            ep = (0, n.useRef)(ed);
        (0, n.useEffect)(() => {
            if ((0, w.isAppleDevice)() && null != ei && null != ed && ed !== ep.current) {
                let e = t.selectionManager.isSelected(ed),
                    r = null != es ? t.collection.getItem(es) : null,
                    o = r?.["aria-label"] || ("string" == typeof r?.rendered ? r.rendered : "") || "",
                    n = C.format("focusAnnouncement", {
                        isGroupChange: (r && es !== ec.current) ?? !1,
                        groupTitle: o,
                        groupCount: r ? [...(0, K.getChildNodes)(r, t.collection)].length : 0,
                        optionText: ei["aria-label"] || ei.textValue || "",
                        isSelected: e
                    });
                (0, A.announce)(n)
            }
            ec.current = es, ep.current = ed
        });
        let ef = (0, U.getItemCount)(t.collection),
            em = (0, n.useRef)(ef),
            eg = (0, n.useRef)(t.isOpen);
        (0, n.useEffect)(() => {
            let e = t.isOpen !== eg.current && (null == t.selectionManager.focusedKey || (0, w.isAppleDevice)());
            if (t.isOpen && (e || ef !== em.current)) {
                let e = C.format("countAnnouncement", {
                    optionCount: ef
                });
                (0, A.announce)(e)
            }
            em.current = ef, eg.current = t.isOpen
        });
        let eb = (0, n.useRef)(t.selectedKey);
        return (0, n.useEffect)(() => {
            if ((0, w.isAppleDevice)() && t.isFocused && t.selectedItem && t.selectedKey !== eb.current) {
                let e = t.selectedItem["aria-label"] || t.selectedItem.textValue || "",
                    r = C.format("selectedAnnouncement", {
                        optionText: e
                    });
                (0, A.announce)(r)
            }
            eb.current = t.selectedKey
        }), (0, n.useEffect)(() => {
            if (t.isOpen) return (0, F.ariaHideOutside)([c.current, d.current].filter(e => null != e))
        }, [t.isOpen, c, d]), o = () => {
            !ei && c.current && (0, S.getActiveElement)((0, E.getOwnerDocument)(c.current)) === c.current && (0, k.dispatchVirtualFocus)(c.current, null)
        }, u = [ei], l = (0, n.useRef)(!0), a = (0, n.useRef)(null), i = (0, G.useEffectEvent)(o), (0, n.useEffect)(() => (l.current = !0, () => {
            l.current = !1
        }), []), (0, n.useEffect)(() => {
            let e = a.current;
            l.current ? l.current = !1 : (!e || u.some((t, r) => !Object.is(t, e[r]))) && i(), a.current = u
        }, u), (0, L.useEvent)(p, "react-aria-item-action", t.isOpen ? () => {
            t.close()
        } : void 0), {
            labelProps: et,
            buttonProps: {
                ...v,
                ...eu,
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
            inputProps: (0, _.mergeProps)(er, {
                role: "combobox",
                "aria-expanded": v["aria-expanded"],
                "aria-controls": t.isOpen ? x.id : void 0,
                "aria-autocomplete": "list",
                "aria-activedescendant": ei ? (0, T.getItemId)(t, ei.key) : void 0,
                onTouchEnd: e => {
                    if (h || b) return;
                    if (e.timeStamp - ea.current < 500) {
                        e.preventDefault(), c.current?.focus();
                        return
                    }
                    let r = (0, S.getEventTarget)(e).getBoundingClientRect(),
                        o = e.changedTouches[0],
                        n = Math.ceil(r.left + .5 * r.width),
                        u = Math.ceil(r.top + .5 * r.height);
                    o.clientX === n && o.clientY === u && (e.preventDefault(), c.current?.focus(), t.toggle(null, "manual"), ea.current = e.timeStamp)
                },
                autoCorrect: "off",
                spellCheck: "false"
            }),
            listBoxProps: (0, _.mergeProps)(x, el, {
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
            errorMessageProps: en,
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
            r = (0, n.useCallback)((e, r) => 0 === r.length || (e = e.normalize("NFC"), r = r.normalize("NFC"), 0 === t.compare(e.slice(0, r.length), r)), [t]),
            o = (0, n.useCallback)((e, r) => 0 === r.length || (e = e.normalize("NFC"), r = r.normalize("NFC"), 0 === t.compare(e.slice(-r.length), r)), [t]),
            u = (0, n.useCallback)((e, r) => {
                if (0 === r.length) return !0;
                e = e.normalize("NFC");
                let o = 0,
                    n = (r = r.normalize("NFC")).length;
                for (; o + n <= e.length; o++) {
                    let u = e.slice(o, o + n);
                    if (0 === t.compare(r, u)) return !0
                }
                return !1
            }, [t]);
        return (0, n.useMemo)(() => ({
            startsWith: r,
            endsWith: o,
            contains: u
        }), [r, o, u])
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
            allowsCustomValue: u,
            shouldCloseOnBlur: l = !0,
            selectionMode: a = "single"
        } = e, [i, s] = (0, n.useState)(!1), [d, c] = (0, n.useState)(!1), [p, f] = (0, n.useState)(null), m = (0, n.useMemo)(() => void 0 !== e.defaultValue ? e.defaultValue : "single" === a ? e.defaultSelectedKey ?? null : [], [e.defaultValue, e.defaultSelectedKey, a]), g = (0, n.useMemo)(() => void 0 !== e.value ? e.value : "single" === a ? e.selectedKey : void 0, [e.value, e.selectedKey, a]), [b, h] = (0, X.useControlledState)(g, m, e.onChange), y = "single" === a && Array.isArray(b) ? b[0] : b, C = t => {
            if ("single" === a) {
                let r = Array.isArray(t) ? t[0] ?? null : t;
                h(r), r !== y && e.onSelectionChange?.(r)
            } else {
                let e = [];
                Array.isArray(t) ? e = t : null != t && (e = [t]), h(e)
            }
        }, {
            collection: v,
            selectionManager: x,
            disabledKeys: $
        } = (0, Y.useListState)({
            ...e,
            items: e.items ?? e.defaultItems,
            selectionMode: a,
            disallowEmptySelection: "single" === a,
            allowDuplicateSelectionEvents: !0,
            selectedKeys: (0, n.useMemo)(() => (function(e) {
                if (void 0 !== e) return null === e ? [] : Array.isArray(e) ? e : [e]
            })(y), [y]),
            onSelectionChange: t => {
                if ("all" !== t)
                    if ("single" === a) {
                        let r = t.values().next().value ?? null;
                        r === y ? (e.onSelectionChange?.(r), M(), R()) : C(r)
                    } else C([...t])
            }
        }), A = "single" === a ? x.firstSelectedKey : null, F = (0, n.useMemo)(() => [...x.selectedKeys].map(e => v.getItem(e)).filter(e => null != e), [x.selectedKeys, v]), [V, k] = (0, X.useControlledState)(e.inputValue, et(e.defaultInputValue, A, v) || "", e.onInputChange), [S] = (0, n.useState)(y), [T] = (0, n.useState)(V), E = (0, n.useMemo)(() => {
            var r, o, n;
            return null == e.items && t ? (r = v, o = V, n = t, new(0, Q.ListCollection)(function e(t, r, o, n) {
                let u = [];
                for (let l of r)
                    if ("section" === l.type && l.hasChildNodes) {
                        let r = e(t, (0, K.getChildNodes)(l, t), o, n);
                        [...r].some(e => "item" === e.type) && u.push({
                            ...l,
                            childNodes: r
                        })
                    } else "item" === l.type && n(l.textValue, o) ? u.push({
                        ...l
                    }) : "item" !== l.type && u.push({
                        ...l
                    });
                return u
            }(r, r, o, n))) : v
        }, [v, V, t, e.items]), [D, w] = (0, n.useState)(E), j = (0, n.useRef)("focus"), _ = (0, J.useOverlayTriggerState)({
            ...e,
            onOpenChange: t => {
                e.onOpenChange && e.onOpenChange(t, t ? j.current : void 0), x.setFocused(t), t || x.setFocusedKey(null)
            },
            isOpen: void 0,
            defaultOpen: void 0
        }), L = (t = null, n) => {
            let u = "manual" === n || "focus" === n && "focus" === r;
            (o || E.size > 0 || u && v.size > 0 || e.items) && (u && !_.isOpen && void 0 === e.items && s(!0), j.current = n, f(t), _.open())
        }, O = (0, n.useCallback)(() => {
            w(i ? v : E)
        }, [i, v, E]), B = (0, n.useCallback)((e = null) => {
            _.isOpen && O(), f(e), _.toggle()
        }, [_, O]), R = (0, n.useCallback)(() => {
            _.isOpen && (O(), _.close())
        }, [_, O]), [I, P] = (0, n.useState)(V), M = () => {
            let e = null != A ? v.getItem(A)?.textValue ?? "" : "";
            P(e), k(e)
        }, N = (0, n.useRef)(y), q = (0, n.useRef)(null != A ? v.getItem(A)?.textValue ?? "" : "");
        (0, n.useEffect)(() => {
            d && (E.size > 0 || o) && !_.isOpen && V !== I && "manual" !== r && L(null, "input"), i || o || !_.isOpen || 0 !== E.size || R(), null != y && y !== N.current && "single" === a && R(), V !== I && (x.setFocusedKey(null), s(!1), "single" === a && "" === V && (void 0 === e.inputValue || void 0 === g) && C(null)), y !== N.current && (void 0 === e.inputValue || void 0 === g) ? M() : I !== V && P(V);
            let t = null != A ? v.getItem(A)?.textValue ?? "" : "";
            d || null == A || void 0 !== e.inputValue || A !== N.current || q.current === t || (P(t), k(t)), N.current = y, q.current = t
        });
        let G = (0, z.useFormValidationState)({
                ...e,
                value: (0, n.useMemo)(() => Array.isArray(y) && 0 === y.length ? null : {
                    inputValue: V,
                    value: y,
                    selectedKey: A
                }, [V, A, y])
            }),
            U = () => {
                if ("multiple" === a) {
                    P(V), R();
                    return
                }
                N.current = null, C(null), R()
            },
            Z = (t = !1) => {
                if (void 0 !== g && void 0 !== e.inputValue) {
                    let r = null != A ? v.getItem(A)?.textValue ?? "" : "";
                    (t || "multiple" === a || V !== r) && (e.onSelectionChange?.(A), e.onChange?.(y)), P(r), R()
                } else M(), R()
            },
            W = () => {
                u ? V === (null != A ? v.getItem(A)?.textValue ?? "" : "") ? Z() : U() : Z()
            },
            H = (0, n.useRef)([V, y]),
            ee = (0, n.useMemo)(() => _.isOpen ? i ? v : E : D, [_.isOpen, v, E, i, D]),
            er = e.defaultSelectedKey ?? ("single" === a ? S : null);
        return {
            ...G,
            ..._,
            focusStrategy: p,
            toggle: (t = null, n) => {
                let u = "manual" === n || "focus" === n && "focus" === r;
                (o || E.size > 0 || u && v.size > 0 || e.items || _.isOpen) && (u && !_.isOpen && void 0 === e.items && s(!0), _.isOpen || (j.current = n), B(t))
            },
            open: L,
            close: W,
            selectionManager: x,
            value: y,
            defaultValue: m ?? S,
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
            defaultInputValue: et(e.defaultInputValue, er, v) ?? T,
            setInputValue: k,
            commit: () => {
                _.isOpen && null != x.focusedKey ? x.isSelected(x.focusedKey) && "single" === a ? Z(!0) : x.select(x.focusedKey) : W()
            },
            revert: () => {
                u && null == A ? U() : Z()
            }
        }
    }

    function et(e, t, r) {
        return null == e && null != t ? r.getItem(t)?.textValue ?? "" : e
    }
    e.s(["useComboBoxState", 0, ee], 908390);
    var er = e.i(611017),
        eo = e.i(661013),
        en = e.i(441737),
        eu = e.i(672451),
        el = e.i(419476),
        ea = e.i(675815);
    let ei = e => {
        let t = n.default.useRef(null),
            {
                popoverRef: r = t,
                isOpen: u,
                onClose: l,
                children: a
            } = e,
            {
                overlayProps: i
            } = (0, el.useOverlay)({
                isOpen: u,
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
                children: [a, (0, o.jsx)(eu.DismissButton, {
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
            let r = (0, n.useRef)(null),
                {
                    optionProps: u,
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
                ...u,
                ref: r,
                className: i,
                "data-sentry-component": "Option",
                "data-sentry-source-file": "Option.tsx",
                children: e.rendered
            })
        },
        ep = e => {
            let t = n.default.useRef(null),
                {
                    listBoxRef: r = t,
                    state: u
                } = e,
                {
                    listBoxProps: l
                } = (0, es.useListBox)(e, u, r);
            return (0, o.jsx)("ul", {
                ...l,
                ref: r,
                className: "m-0 max-h-40 list-none overflow-auto p-0",
                "data-sentry-component": "ListBox",
                "data-sentry-source-file": "ListBox.tsx",
                children: [...u.collection].map(e => (0, o.jsx)(ec, {
                    item: e,
                    state: u
                }, e.key))
            })
        };
    var ef = e.i(66736);
    let em = e => {
        let {
            isDisabled: t,
            hasError: r,
            hasWarning: u
        } = e, {
            contains: l
        } = H({
            sensitivity: "base"
        }), a = ee({
            ...e,
            defaultFilter: l
        }), i = (0, n.useRef)(null), s = (0, n.useRef)(null), d = (0, n.useRef)(null), c = (0, n.useRef)(null), {
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
            "border-yellow-500 dark:border-yellow-500 border-2": u,
            "border-red-500 dark:border-red-500 border-2": r
        }, {
            "bg-gray-50 dark:bg-gray-900": !t,
            "border-gray-400 hover:border-gray-900 dark:border-gray-500 dark:hover:border-white": !r && !u
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
                }), e.helpText && (0, o.jsx)(en.default, {
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
        (0, n.useEffect)(() => {
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
        (0, n.useEffect)(() => {
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
                            let r, n;
                            return r = void 0 !== t.value ? t.value : t.key || t.toString(), (n = t.label || t.option || t.text || t.toString() || e.placeholder) && "string" != typeof n && (n = r), (0, o.jsx)($.default.Item, {
                                "data-sentry-element": "Select.Item",
                                "data-sentry-component": "renderSelectItem",
                                "data-sentry-source-file": "ComboBoxMapper.tsx",
                                children: n
                            }, r)
                        })
                    }), t.error && (0, o.jsx)(en.default, {
                        helperText: (0, u.default)(e.helpText, e.errorText, e.warningText, void 0 !== t.error, !1),
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
                        helpText: (0, u.default)(e.helpText, e.errorText, e.warningText, void 0 !== t.error, !1)
                    },
                    hasError: void 0 !== t.error,
                    children: g
                })), e.chained && e.chained.map((r, n) => r.value === e.countryCode && r.dependant === e.formFieldId ? i ? (0, o.jsxs)("div", {
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
                            let r, n;
                            return r = void 0 !== t.value ? t.value : t.key || t.toString(), n = t.label || t.text || t.toString() || e.placeholder, (0, o.jsx)($.default.Item, {
                                "data-sentry-element": "Select.Item",
                                "data-sentry-component": "renderChainedSelectItem",
                                "data-sentry-source-file": "ComboBoxMapper.tsx",
                                children: n
                            }, r)
                        })
                    }), t.error && (0, o.jsx)(en.default, {
                        helperText: (0, u.default)(e.helpText, e.errorText, e.warningText, void 0 !== t.error, !1),
                        hasError: void 0 !== t.error
                    })]
                }, n) : (0, o.jsx)(em, {
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
                        helpText: (0, u.default)(e.helpText, e.errorText, e.warningText, void 0 !== t.error, !1)
                    },
                    hasError: void 0 !== t.error,
                    children: h
                }, n) : null)]
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
        n = e.i(722990),
        u = e.i(466673),
        l = e.i(272351),
        a = e.i(497492);
    let i = {
        marks: {
            link: ({
                children: e,
                value: r
            }) => {
                let o = r?.href || "#",
                    n = /^https?:\/\//i.test(o);
                return (0, t.jsx)("a", {
                    href: o,
                    ...n ? {
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
        let b = (0, u.useWatch)({
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
                    children: (0, t.jsx)(n.PortableText, {
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
                children: (0, t.jsx)(n.PortableText, {
                    value: h,
                    components: i,
                    "data-sentry-element": "PortableText",
                    "data-sentry-source-file": "TextMapper.tsx"
                })
            })
        })
    }])
}, 545487, e => {
    "use strict";
    var t = e.i(785328),
        r = e.i(409781);
    let o = (0, r.createContext)({
        isGated: !1,
        setIsGated: () => {},
        formSubmitted: !1,
        setFormSubmitted: () => {}
    });
    e.s(["ResourcesDetailContextProvider", 0, ({
        children: e
    }) => {
        let [n, u] = (0, r.useState)(!1), [l, a] = (0, r.useState)(!1);
        return (0, t.jsx)(o.Provider, {
            value: {
                isGated: l,
                setIsGated: a,
                formSubmitted: n,
                setFormSubmitted: u
            },
            "data-sentry-element": "ResourcesDetailContext.Provider",
            "data-sentry-component": "ResourcesDetailContextProvider",
            "data-sentry-source-file": "ResourceDetailContext.tsx",
            children: e
        })
    }, "default", 0, o, "useResourcesDetailContext", 0, () => (0, r.useContext)(o)])
}, 968651, e => {
    "use strict";
    e.s(["default", 0, (e, t, r, o, n) => o ? t : n ? r : e || ""])
}, 537251, e => {
    "use strict";
    var t = e.i(409781),
        r = e.i(309578),
        o = e.i(239273),
        n = e.i(545487),
        u = e.i(869324),
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
            } = (0, n.useResourcesDetailContext)(),
            v = (0, t.useRef)(void 0),
            x = (0, t.useRef)(0),
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
                    x.current++, void 0 !== window._elqQ && (window._elqQ.push(["elqDataLookup", escape("7cd261a6ba06486b88648045c9069652"), ""]), clearInterval(e)), 50 === x.current && (b(!1), clearInterval(e))
                }, 100);
                v.current = e
            }
            return () => {
                clearInterval(v.current)
            }
        }, [y]);
        let V = (0, t.useCallback)(e => {
            if (s) return;
            let t = {};
            t.elqCustomerGUID = y?.split("&")[0]?.split("GUID=")[1] || "", t.emailAddress = e;
            let {
                emailConfirmation: o,
                gcid: n,
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
                        gcid: n,
                        ghandler: l,
                        growDivision: a,
                        growDepartment: c
                    } : i
                }).filter(([e, t]) => void 0 !== t).reduce((e, [t, r]) => (e[t] = r, e), {})).toString()
            }).then(() => {
                (0, u.default)({
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
        n = t.forwardRef((e, n) => t.createElement(r.default, {
            ref: n,
            ...e,
            weights: o
        }));
    n.displayName = "WarningOctagonIcon", e.s(["WarningOctagon", 0, n], 923747)
}, 685740, e => {
    "use strict";
    var t = e.i(679933),
        r = e.i(776050),
        o = e.i(429305),
        n = e.i(513485),
        u = e.i(869049),
        l = e.i(860700),
        a = e.i(629959),
        i = e.i(823512),
        s = e.i(185559),
        d = e.i(409781);

    function c(e = !0) {
        let t = (0, i.useId)(),
            [r, o] = function(e = !0) {
                let [t, r] = (0, d.useState)(e), o = (0, d.useRef)(!1), n = (0, d.useCallback)(e => {
                    o.current = !0, r(!!e)
                }, []);
                return (0, s.useLayoutEffect)(() => {
                    o.current || r(!1)
                }, []), [n, t]
            }(e);
        return {
            id: o ? t : void 0,
            ref: r
        }
    }
    var p = e.i(251635);
    e.s(["useCheckbox", 0, function(e, i, s) {
        let {
            labelProps: f,
            inputProps: m,
            descriptionProps: g,
            errorMessageProps: b,
            isSelected: h,
            isPressed: y,
            isDisabled: C,
            isReadOnly: v,
            isInvalid: x,
            validationErrors: $,
            validationDetails: A
        } = function(e, i, s) {
            let {
                isDisabled: f = !1,
                isReadOnly: m = !1,
                value: g,
                name: b,
                form: h,
                children: y,
                isRequired: C,
                validationBehavior: v = "aria",
                "aria-label": x,
                "aria-labelledby": $,
                "aria-describedby": A,
                onPressStart: F,
                onPressEnd: V,
                onPressChange: k,
                onPress: S,
                onPressUp: T,
                onClick: E
            } = e, D = (0, p.useFormValidationState)({
                ...e,
                value: i.isSelected
            }), {
                isInvalid: w,
                validationErrors: j,
                validationDetails: _
            } = D.displayValidation;
            (0, l.useFormValidation)(e, D, s);
            let {
                pressProps: L,
                isPressed: O
            } = (0, a.usePress)({
                onPressStart: F,
                onPressEnd: V,
                onPressChange: k,
                onPress: S,
                onPressUp: T,
                onClick: E,
                isDisabled: f
            }), [B, R] = (0, d.useState)(!1), {
                pressProps: I
            } = (0, a.usePress)({
                onPressStart(e) {
                    "keyboard" === e.pointerType || "virtual" === e.pointerType ? e.continuePropagation() : (F?.(e), k?.(!0), R(!0))
                },
                onPressEnd(e) {
                    "keyboard" === e.pointerType || "virtual" === e.pointerType ? e.continuePropagation() : (V?.(e), k?.(!1), R(!1))
                },
                onPressUp(e) {
                    "keyboard" === e.pointerType || "virtual" === e.pointerType ? e.continuePropagation() : T?.(e)
                },
                onClick: E,
                onPress(t) {
                    if ("keyboard" === t.pointerType || "virtual" === t.pointerType) return void t.continuePropagation();
                    S?.(t), i.toggle(), s.current?.focus();
                    let {
                        [p.privateValidationStateProp]: r
                    } = e, {
                        commitValidation: o
                    } = r || D;
                    o()
                },
                isDisabled: f || m
            }), {
                focusableProps: P
            } = (0, n.useFocusable)(e, s), M = (0, o.mergeProps)(L, P), N = (0, t.filterDOMProps)(e, {
                labelable: !0
            });
            (0, u.useFormReset)(s, i.defaultSelected, i.setSelected);
            let q = c(),
                G = c();
            return {
                labelProps: (0, o.mergeProps)(I, {
                    onClick: e => e.preventDefault()
                }),
                inputProps: (0, o.mergeProps)(N, {
                    checked: i.isSelected,
                    "aria-required": C && "aria" === v || void 0,
                    required: C && "native" === v,
                    "aria-invalid": w || "invalid" === e.validationState || void 0,
                    "aria-errormessage": e["aria-errormessage"],
                    "aria-controls": e["aria-controls"],
                    "aria-readonly": m || void 0,
                    "aria-describedby": [q.id, G.id, A].filter(Boolean).join(" ") || void 0,
                    onChange: e => {
                        e.stopPropagation(), i.setSelected((0, r.getEventTarget)(e).checked)
                    },
                    disabled: f,
                    ...null == g ? {} : {
                        value: g
                    },
                    name: b,
                    form: h,
                    type: "checkbox",
                    ...M
                }),
                descriptionProps: q,
                errorMessageProps: G,
                isSelected: i.isSelected,
                isPressed: O || B,
                isDisabled: f,
                isReadOnly: m,
                isInvalid: w || "invalid" === e.validationState,
                validationErrors: j,
                validationDetails: _
            }
        }(e, i, s), {
            isIndeterminate: F
        } = e;
        return (0, d.useEffect)(() => {
            s.current && (s.current.indeterminate = !!F)
        }), {
            labelProps: (0, o.mergeProps)(f, (0, d.useMemo)(() => ({
                onMouseDown: e => e.preventDefault()
            }), [])),
            inputProps: m,
            descriptionProps: g,
            errorMessageProps: b,
            isSelected: h,
            isPressed: y,
            isDisabled: C,
            isReadOnly: v,
            isInvalid: x,
            validationErrors: $,
            validationDetails: A
        }
    }], 685740)
}, 466673, e => {
    "use strict";
    var t = e.i(409781),
        r = e => e instanceof Date,
        o = e => null == e;
    let n = e => "object" == typeof e;
    var u = e => !o(e) && !Array.isArray(e) && n(e) && !r(e),
        l = e => u(e) && e.target ? "checkbox" === e.target.type ? e.target.checked : e.target.value : e,
        a = (e, t) => t.split(".").some((t, r, o) => !isNaN(Number(t)) && e.has(o.slice(0, r).join("."))),
        i = e => {
            let t = e.constructor && e.constructor.prototype;
            return u(t) && t.hasOwnProperty("isPrototypeOf")
        },
        s = "u" > typeof window && void 0 !== window.HTMLElement && "u" > typeof document;

    function d(e) {
        if (e instanceof Date) return new Date(e);
        let t = "u" > typeof FileList && e instanceof FileList;
        if (s && (e instanceof Blob || t)) return e;
        let r = Array.isArray(e);
        if (!r && !(u(e) && i(e))) return e;
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
        v = "root",
        x = ["__proto__", "constructor", "prototype"],
        $ = /^\w*$/;
    var A = e => void 0 === e;
    let F = /[.[\]'"]/;
    var V = e => e.split(F).filter(Boolean),
        k = (e, t, r) => {
            if (!t || !u(e)) return r;
            let n = $.test(t) ? [t] : V(t);
            if (n.some(e => x.includes(e))) return r;
            let l = n.reduce((e, t) => o(e) ? void 0 : e[t], e);
            return A(l) || l === e ? A(e[t]) ? r : e[t] : l
        },
        S = e => "function" == typeof e,
        T = (e, t, r) => {
            let o = -1,
                n = $.test(t) ? [t] : V(t),
                l = n.length,
                a = l - 1;
            for (; ++o < l;) {
                let t = n[o],
                    l = r;
                if (o !== a) {
                    let r = e[t];
                    l = u(r) || Array.isArray(r) ? r : isNaN(+n[o + 1]) ? {} : []
                }
                if (x.includes(t)) return;
                e[t] = l, e = e[t]
            }
        };
    let E = t.default.createContext(null);
    E.displayName = "HookFormControlContext";
    var D = (e, t, r, o = !0) => {
        let n = {};
        for (let u in e) Object.defineProperty(n, u, {
            get: () => ("all" !== t._proxyFormState[u] && (t._proxyFormState[u] = !o || "all"), r && (r[u] = !0), e[u])
        });
        return n
    };
    let w = s ? t.default.useLayoutEffect : t.default.useEffect;
    var j = e => "string" == typeof e,
        _ = (e, t, r, o, n) => j(e) ? (o && t.watch.add(e), k(r, e, n)) : Array.isArray(e) ? e.map(e => (o && t.watch.add(e), k(r, e))) : (o && (t.watchAll = !0), r),
        L = e => o(e) || !n(e);
    let O = (e, t) => 0 === t.length && !Array.isArray(e) && !i(e);

    function B(e, t, o = new WeakMap) {
        if (e === t) return !0;
        if (L(e) || L(t)) return Object.is(e, t);
        if (r(e) && r(t)) return Object.is(e.getTime(), t.getTime());
        let n = Object.keys(e),
            l = Object.keys(t);
        if (n.length !== l.length) return !1;
        if (O(e, n) || O(t, l)) return Object.is(e, t);
        if (!n.length && Array.isArray(e) !== Array.isArray(t)) return !1;
        let a = o.get(e);
        if (a && a.has(t)) return !0;
        if (a) a.add(t);
        else {
            let r = new WeakSet;
            r.add(t), o.set(e, r)
        }
        for (let l of n) {
            let n = e[l];
            if (!(l in t)) return !1;
            if ("ref" !== l) {
                let e = t[l];
                if (r(n) && r(e) || (u(n) || Array.isArray(n)) && (u(e) || Array.isArray(e)) ? !B(n, e, o) : !Object.is(n, e)) return !1
            }
        }
        return !0
    }

    function R(e) {
        let r = t.default.useContext(E),
            {
                control: o = r,
                name: n,
                defaultValue: u,
                disabled: l,
                exact: a,
                compute: i
            } = e || {},
            s = t.default.useRef(u),
            d = t.default.useRef(i),
            c = t.default.useRef(void 0),
            p = t.default.useRef(o),
            f = t.default.useRef(n);
        d.current = i;
        let [m, g] = t.default.useState(() => {
            let e = o._getWatch(n, s.current);
            return d.current ? d.current(e) : e
        }), b = t.default.useCallback(e => {
            let t = _(n, o._names, e || o._formValues, !1, s.current);
            return d.current ? d.current(t) : t
        }, [o._formValues, o._names, n]), h = t.default.useCallback(e => {
            if (!l) {
                let t = _(n, o._names, e || o._formValues, !1, s.current);
                if (d.current) {
                    let e = d.current(t);
                    B(e, c.current) || (g(e), c.current = e)
                } else g(t)
            }
        }, [o._formValues, o._names, l, n]);
        w(() => (p.current === o && B(f.current, n) || (p.current = o, f.current = n, h()), o._subscribe({
            name: n,
            formState: {
                values: !0
            },
            exact: a,
            callback: e => {
                h(e.values)
            }
        })), [o, a, n, h]), t.default.useEffect(() => o._removeUnmounted());
        let y = p.current !== o,
            C = f.current,
            v = t.default.useMemo(() => {
                if (l) return null;
                let e = !y && !B(C, n);
                return y || e ? b() : null
            }, [l, y, n, C, b]);
        return null !== v ? v : m
    }
    let I = e => {
        let t = {};
        for (let o of Object.keys(e))
            if (n(e[o]) && null !== e[o] && !r(e[o])) {
                let r = I(e[o]);
                for (let e of Object.keys(r)) t[`${o}.${e}`] = r[e]
            } else t[o] = e[o];
        return t
    };
    t.default.createContext(null).displayName = "HookFormContext";
    var P = (e, t, r, o, n) => t ? {
            ...r[e],
            types: {
                ...r[e] && r[e].types ? r[e].types : {},
                [o]: n || !0
            }
        } : {},
        M = e => Array.isArray(e) ? e.filter(Boolean) : [],
        N = e => Array.isArray(e) ? e : [e],
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
        G = e => u(e) && !Object.keys(e).length,
        K = e => {
            if (!s) return !1;
            let t = e ? e.ownerDocument : 0;
            return e instanceof(t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
        },
        U = e => K(e) && e.isConnected;

    function z(e, t) {
        if (j(t) && Object.prototype.hasOwnProperty.call(e, t)) return delete e[t], e;
        let r = Array.isArray(t) ? t : $.test(t) ? [t] : V(t);
        if (r.some(e => x.includes(String(e)))) return e;
        let n = 1 === r.length ? e : function(e, t) {
                let r = t.slice(0, -1).length,
                    n = 0;
                for (; n < r;) {
                    if (o(e)) {
                        e = void 0;
                        break
                    }
                    e = e[t[n]], n++
                }
                return e
            }(e, r),
            l = r.length - 1,
            a = r[l];
        return n && delete n[a], 0 !== l && (u(n) && G(n) || Array.isArray(n) && function(e) {
            for (let t in e)
                if (e.hasOwnProperty(t) && !A(e[t])) return !1;
            return !0
        }(n)) && z(e, r.slice(0, -1)), e
    }

    function Z(e) {
        return Array.isArray(e) || u(e) && !(e => {
            for (let t in e)
                if (S(e[t])) return !0;
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
        for (let n in r || (r = W(t)), e) {
            let u = e[n];
            if (Z(u)) A(t) || L(r[n]) ? r[n] = W(u, Array.isArray(u) ? [] : {}) : H(u, o(t) ? {} : t[n], r[n]);
            else {
                let e = t[n];
                r[n] = !B(u, e)
            }
        }
        return function e(t) {
            if (!1 !== t) {
                if (!0 === t) return !0;
                if (Array.isArray(t)) {
                    let r = t.map(t => e(t));
                    return r.some(e => void 0 !== e) ? r : void 0
                }
                if (u(t)) {
                    let r = {};
                    for (let o in t) {
                        let n = e(t[o]);
                        A(n) || (r[o] = n)
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
        }) => A(e) ? e : t ? "" === e ? NaN : e ? +e : e : r && j(e) ? new Date(e) : o ? o(e) : e;
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
    var eo = e => A(e) ? e : e instanceof RegExp ? e.source : u(e) ? e.value instanceof RegExp ? e.value.source : e.value : e,
        en = e => ({
            isOnSubmit: !e || e === m,
            isOnBlur: "onBlur" === e,
            isOnChange: e === f,
            isOnAll: "all" === e,
            isOnTouch: "onTouched" === e
        });
    let eu = "AsyncFunction";
    var el = e => {
            if (!e || !e.validate) return !1;
            if (S(e.validate)) return e.validate.constructor.name === eu;
            if (u(e.validate)) {
                for (let t in e.validate)
                    if (e.validate[t].constructor.name === eu) return !0
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
        for (let n of r || Object.keys(e)) {
            let r = k(e, n);
            if (r) {
                let {
                    _f: e,
                    ...l
                } = r;
                if (e) {
                    if (e.refs && e.refs[0] && t(e.refs[0], n) && !o) return !0;
                    else if (e.ref && t(e.ref, e.name) && !o) return !0;
                    else if (ei(l, t)) break
                } else if (u(l) && ei(l, t)) break
            }
        }
    };

    function es(e, t, r) {
        let o = k(e, r);
        if (o || $.test(r)) return {
            error: o,
            name: r
        };
        let n = r.split(".");
        for (; n.length;) {
            let o = n.join("."),
                u = k(t, o),
                l = k(e, o);
            if (u && !Array.isArray(u) && r !== o) break;
            if (l && l.type) return {
                name: o,
                error: l
            };
            if (l && l.root && l.root.type) return {
                name: `${o}.root`,
                error: l.root
            };
            n.pop()
        }
        return {
            name: r
        }
    }
    var ed = (e, t, r) => {
        let o = k(e, r),
            n = Array.isArray(o) ? o : [];
        return T(n, v, t[r]), T(e, r, n), e
    };

    function ec(e, t, r = "validate") {
        if (j(e) || Array.isArray(e) && e.every(j) || "boolean" == typeof e && !e) return {
            type: r,
            message: j(e) ? e : "",
            ref: t
        }
    }
    var ep = e => !u(e) || e instanceof RegExp ? {
            value: e,
            message: ""
        } : e,
        ef = async (e, t, r, n, l, a) => {
            let {
                ref: i,
                refs: s,
                required: d,
                maxLength: c,
                minLength: p,
                min: f,
                max: m,
                pattern: v,
                validate: x,
                name: $,
                valueAsNumber: F,
                mount: V
            } = e._f, T = k(r, $);
            if (!V || t.has($)) return {};
            let E = s ? s[0] : i,
                D = e => {
                    if (l && E.reportValidity) {
                        let t = "boolean" == typeof e ? "" : e || "";
                        s ? s.forEach(e => e.setCustomValidity(t)) : E.setCustomValidity(t), E.reportValidity()
                    }
                },
                w = {},
                _ = "radio" === i.type,
                L = "checkbox" === i.type,
                O = (F || "file" === i.type) && A(i.value) && A(T) || K(i) && "" === i.value || "" === T || Array.isArray(T) && !T.length,
                B = P.bind(null, $, n, w),
                R = (e, t, r, o = g, n = b) => {
                    let u = e ? t : r;
                    w[$] = {
                        type: e ? o : n,
                        message: u,
                        ref: i,
                        ...B(e ? o : n, u)
                    }
                };
            if (a ? !Array.isArray(T) || !T.length : d && (!(_ || L) && (O || o(T)) || "boolean" == typeof T && !T || L && !J(s).isValid || _ && !et(s).isValid)) {
                let {
                    value: e,
                    message: t
                } = j(d) ? {
                    value: !!d,
                    message: d
                } : ep(d);
                if (e && (w[$] = {
                        type: y,
                        message: t,
                        ref: E,
                        ...B(y, t)
                    }, !n)) return D(t), w
            }
            if (!O && (!o(f) || !o(m))) {
                let e, t, r = ep(m),
                    u = ep(f);
                if (o(T) || isNaN(T)) {
                    let o = i.valueAsDate || new Date(T),
                        n = e => new Date(new Date().toDateString() + " " + e),
                        l = "time" == i.type,
                        a = "week" == i.type;
                    j(r.value) && T && (e = l ? n(T) > n(r.value) : a ? T > r.value : o > new Date(r.value)), j(u.value) && T && (t = l ? n(T) < n(u.value) : a ? T < u.value : o < new Date(u.value))
                } else {
                    let n = i.valueAsNumber || (T ? +T : T);
                    o(r.value) || (e = n > r.value), o(u.value) || (t = n < u.value)
                }
                if ((e || t) && (R(!!e, r.message, u.message, "max", "min"), !n)) return D(w[$].message), w
            }
            if ((c || p) && !O && (j(T) || a && Array.isArray(T))) {
                let e = ep(c),
                    t = ep(p),
                    r = !o(e.value) && T.length > +e.value,
                    u = !o(t.value) && T.length < +t.value;
                if ((r || u) && (R(r, e.message, t.message), !n)) return D(w[$].message), w
            }
            if (v && !O && j(T)) {
                let {
                    value: e,
                    message: t
                } = ep(v);
                if (e instanceof RegExp && !T.match(e) && (w[$] = {
                        type: h,
                        message: t,
                        ref: i,
                        ...B(h, t)
                    }, !n)) return D(t), w
            }
            if (x) {
                if (S(x)) {
                    let e = ec(await x(T, r), E);
                    if (e && (w[$] = {
                            ...e,
                            ...B(C, e.message)
                        }, !n)) return D(e.message), w
                } else if (u(x)) {
                    let e = {};
                    for (let t in x) {
                        if (!G(e) && !n) break;
                        let o = ec(await x[t](T, r), E, t);
                        o && (e = {
                            ...o,
                            ...B(t, o.message)
                        }, D(o.message), n && (w[$] = e))
                    }
                    if (!G(e) && (w[$] = {
                            ref: E,
                            ...e
                        }, !n)) return w
                }
            }
            return D(!0), w
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
                disabled: n,
                control: u = r,
                shouldUnregister: i,
                defaultValue: s,
                exact: p = !0
            } = e,
            f = a(u._names.array, o),
            m = t.default.useMemo(() => k(u._formValues, o, k(u._defaultValues, o, s)), [u, o, s]),
            g = R({
                control: u,
                name: o,
                defaultValue: m,
                exact: p
            }),
            b = function(e) {
                let r = t.default.useContext(E),
                    {
                        control: o = r,
                        disabled: n,
                        name: u,
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
                return w(() => o._subscribe({
                    name: u,
                    formState: s.current,
                    exact: l,
                    callback: e => {
                        n || i({
                            ...o._formState,
                            ...e,
                            defaultValues: o._defaultValues
                        })
                    }
                }), [u, n, l]), t.default.useEffect(() => {
                    s.current.isValid && o._setValid(!0)
                }, [o]), t.default.useMemo(() => D(a, o, s.current, !1), [a, o])
            }({
                control: u,
                name: o,
                exact: p
            }),
            h = t.default.useRef(e),
            y = t.default.useRef(null),
            C = t.default.useRef(u.register(o, {
                ...e.rules,
                value: g,
                ..."boolean" == typeof e.disabled ? {
                    disabled: e.disabled
                } : {}
            }));
        h.current = e;
        let v = t.default.useMemo(() => Object.defineProperties({}, {
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
            x = t.default.useCallback(e => {
                let t = l(e);
                return k(u._fields, o) || (C.current = u.register(o, {
                    ...h.current.rules,
                    value: t
                })), C.current.onChange({
                    target: {
                        value: l(e),
                        name: o
                    },
                    type: "change"
                })
            }, [o, u]),
            $ = t.default.useCallback(() => C.current.onBlur({
                target: {
                    value: k(u._formValues, o),
                    name: o
                },
                type: c
            }), [o, u._formValues]),
            F = t.default.useCallback(e => {
                e && (y.current = {
                    focus: () => S(e.focus) && e.focus(),
                    select: () => S(e.select) && e.select(),
                    setCustomValidity: t => S(e.setCustomValidity) && e.setCustomValidity(t),
                    reportValidity: () => S(e.reportValidity) && e.reportValidity()
                });
                let t = k(u._fields, o);
                t && t._f && e && (t._f.ref = y.current)
            }, [u._fields, o]),
            V = t.default.useMemo(() => ({
                name: o,
                value: g,
                ..."boolean" == typeof n || b.disabled ? {
                    disabled: b.disabled || n
                } : {},
                onChange: x,
                onBlur: $,
                ref: F
            }), [o, n, b.disabled, x, $, F, g]);
        return t.default.useEffect(() => {
            let e = u._options.shouldUnregister || i;
            u.register(o, {
                ...h.current.rules,
                ..."boolean" == typeof h.current.disabled ? {
                    disabled: h.current.disabled
                } : {}
            });
            let t = (e, t) => {
                let r = k(u._fields, e);
                r && r._f && (r._f.mount = t)
            };
            if (t(o, !0), e) {
                let e = d(k(i ? u._defaultValues : u._options.values || u._defaultValues, o, k(u._options.defaultValues, o, h.current.defaultValue)));
                T(u._defaultValues, o, e), A(k(u._formValues, o)) && T(u._formValues, o, e)
            }
            if (f || u.register(o), y.current) {
                let e = k(u._fields, o);
                e && e._f && (e._f.ref = y.current)
            }
            return () => {
                (f ? e && !u._state.action : e) ? u.unregister(o): t(o, !1)
            }
        }, [o, u, f, i]), t.default.useEffect(() => {
            u._setDisabledField({
                disabled: n,
                name: o
            })
        }, [n, o, u]), t.default.useMemo(() => ({
            field: V,
            formState: b,
            fieldState: v
        }), [V, b, v])
    }(e)), "useForm", 0, function(e = {}) {
        let n = t.default.useRef(void 0),
            i = t.default.useRef(void 0),
            f = t.default.useRef(e.formControl),
            [m, g] = t.default.useState(() => ({
                ...d(eb),
                isLoading: S(e.defaultValues),
                errors: e.errors || {},
                disabled: e.disabled || !1,
                defaultValues: S(e.defaultValues) ? void 0 : e.defaultValues
            }));
        if (!n.current || e.formControl && f.current !== e.formControl)
            if (f.current = e.formControl, e.formControl) n.current = {
                ...e.formControl,
                formState: m
            }, e.defaultValues && !S(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions);
            else {
                let {
                    formControl: t,
                    ...i
                } = function(e = {}) {
                    let t, n = {
                            ...em,
                            ...e
                        },
                        i = {
                            ...d(eb),
                            isLoading: S(n.defaultValues),
                            errors: n.errors || {},
                            disabled: n.disabled || !1
                        },
                        f = {},
                        m = (u(n.defaultValues) || u(n.values)) && d(n.defaultValues || n.values) || {},
                        g = n.shouldUnregister ? {} : d(m),
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
                        x = 0,
                        F = en(n.mode),
                        E = en(n.reValidateMode),
                        D = {
                            isDirty: !1,
                            dirtyFields: !1,
                            validatingFields: !1,
                            touchedFields: !1,
                            isValidating: !1,
                            isValid: !1,
                            errors: !1
                        },
                        w = {
                            ...D
                        },
                        L = {
                            ...w
                        },
                        O = {
                            array: q(),
                            state: q()
                        },
                        R = "all" === n.criteriaMode,
                        P = async e => {
                            if (!b.keepIsValid && !n.disabled && (w.isValid || L.isValid || e)) {
                                let e;
                                n.resolver ? (e = G((await J()).errors), Z()) : e = await eu({
                                    fields: f,
                                    onlyCheckValid: !0,
                                    eventType: "valid"
                                }), e !== i.isValid && O.state.next({
                                    isValid: e
                                })
                            }
                        }, Z = (e, t) => {
                            !n.disabled && (w.isValidating || w.validatingFields || L.isValidating || L.validatingFields) && ((e || Array.from(h.mount)).forEach(e => {
                                e && (t ? T(i.validatingFields, e, t) : z(i.validatingFields, e))
                            }), O.state.next({
                                validatingFields: i.validatingFields,
                                isValidating: !G(i.validatingFields)
                            }))
                        }, W = () => {
                            i.dirtyFields = H(m, g)
                        }, Q = (t, r, n, u) => {
                            let l = k(f, t);
                            if (l) {
                                if ((e => {
                                        let t = $.test(e) ? [e] : V(e),
                                            r = g,
                                            n = m;
                                        for (let e = 0; e < t.length - 1; e++) {
                                            let u = t[e];
                                            if (r = o(r) ? r : r[u], n = o(n) ? n : n[u], null === r && null !== n) return !0
                                        }
                                        return !1
                                    })(t)) return;
                                let a = A(k(g, t)),
                                    s = k(g, t, A(n) ? k(m, t) : n);
                                A(s) || u && u.defaultChecked || r ? T(g, t, r ? s : er(l._f)) : eh(t, s), b.mount && !b.action && (P(), a && i.isDirty && (w.isDirty || L.isDirty) && (ec() || (i.isDirty = !1, O.state.next({
                                    ...i
                                }))), e.shouldUnregister && a && !A(k(g, t)) && ea(t, h) && (b.watch = !0))
                            }
                        }, Y = (e, t, r, o, u) => {
                            let l = !1,
                                a = !1,
                                s = {
                                    name: e
                                };
                            if (!n.disabled) {
                                if (!r || o) {
                                    let r = B(k(m, e), t);
                                    (w.isDirty || L.isDirty) && (a = i.isDirty, i.isDirty = s.isDirty = !r || ec(), l = a !== s.isDirty), a = !!k(i.dirtyFields, e), r !== i.isDirty ? i.dirtyFields = H(m, g) : r ? z(i.dirtyFields, e) : T(i.dirtyFields, e, !0), s.dirtyFields = i.dirtyFields, l = l || (w.dirtyFields || L.dirtyFields) && !r !== a
                                }
                                if (r) {
                                    let t = k(i.touchedFields, e);
                                    t || (T(i.touchedFields, e, r), s.touchedFields = i.touchedFields, l = l || (w.touchedFields || L.touchedFields) && t !== r)
                                }
                                l && u && O.state.next(s)
                            }
                            return l ? s : {}
                        }, J = async e => (Z(e, !0), await n.resolver(g, n.context, ((e, t, r, o) => {
                            let n = {};
                            for (let r of e) {
                                let e = k(t, r);
                                e && T(n, r, e._f)
                            }
                            return {
                                criteriaMode: r,
                                names: [...e],
                                fields: n,
                                shouldUseNativeValidation: o
                            }
                        })(e || h.mount, f, n.criteriaMode, n.shouldUseNativeValidation))), ee = async e => {
                            let {
                                errors: t
                            } = await J(e);
                            if (Z(e), e) {
                                for (let r of e) {
                                    let e = k(t, r);
                                    e ? h.array.has(r) && u(e) && !Object.keys(e).some(e => !Number.isNaN(Number(e))) ? ed(i.errors, {
                                        [r]: e
                                    }, r) : T(i.errors, r, e) : z(i.errors, r)
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
                                if (u(o))
                                    for (let e in o) {
                                        let t = o[e];
                                        t && ek(`${eg}.${e}`, {
                                            message: j(t.message) ? t.message : "",
                                            type: t.type || C
                                        })
                                    } else j(o) || !o ? ek(eg, {
                                        message: o || "",
                                        type: C
                                    }) : eV(eg);
                                return o
                            }
                            return !0
                        }, eu = async ({
                            fields: t,
                            onlyCheckValid: r,
                            name: o,
                            eventType: u,
                            context: l = {
                                valid: !0,
                                runRootValidation: !1
                            }
                        }) => {
                            if (e.validate && (l.runRootValidation = !0, !await et({
                                    name: o,
                                    eventType: u
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
                                            u = a._f && el(a._f),
                                            s = w.validatingFields || w.isValidating || L.validatingFields || L.isValidating;
                                        u && s && Z([t.name], !0);
                                        let d = await ef(a, h.disabled, g, R, n.shouldUseNativeValidation && !r, o);
                                        if (u && s && Z([t.name]), d[t.name] && (l.valid = !1, r) || (r || (k(d, t.name) ? o ? ed(i.errors, d, t.name) : T(i.errors, t.name, d[t.name]) : z(i.errors, t.name)), e.shouldUseNativeValidation && d[t.name])) break
                                    }
                                    G(s) || await eu({
                                        context: l,
                                        onlyCheckValid: r,
                                        fields: s,
                                        name: o,
                                        eventType: u
                                    })
                                }
                            }
                            return l.valid
                        }, ec = (e, t) => !n.disabled && (e && t && T(g, e, t), !B(b.mount ? g : m, m)), ep = (e, t, r) => _(e, h, {
                            ...b.mount ? g : A(t) ? m : j(e) ? {
                                [e]: t
                            } : t
                        }, r, t), eh = (e, t, r = {}, n = !1, u = !1) => {
                            let l = k(f, e),
                                a = t;
                            if (l) {
                                let r = l._f;
                                r && (r.disabled || T(g, e, X(t, r)), a = K(r.ref) && o(t) ? "" : t, "select-multiple" === r.ref.type ? [...r.ref.options].forEach(e => e.selected = a.includes(e.value)) : r.refs ? "checkbox" === r.ref.type ? r.refs.forEach(e => {
                                    e.defaultChecked && e.disabled || (Array.isArray(a) ? e.checked = !!a.find(t => t === e.value) : e.checked = a === e.value || !!a)
                                }) : r.refs.forEach(e => e.checked = e.value === a) : "file" === r.ref.type ? r.ref.value = "" : (r.ref.value = a, r.ref.type || u || O.state.next({
                                    name: e,
                                    values: n ? g : d(g)
                                })))
                            }(r.shouldDirty || r.shouldTouch) && Y(e, a, r.shouldTouch, r.shouldDirty, !u), r.shouldValidate && eA(e)
                        }, ey = (e, t, o, n = !1, l = !1) => {
                            for (let a in t) {
                                if (!t.hasOwnProperty(a)) return;
                                let i = t[a],
                                    s = e + "." + a,
                                    d = k(f, s);
                                (h.array.has(e) || u(i) || d && !d._f) && !r(i) ? ey(s, i, o, n, l) : eh(s, i, o, n, l)
                            }
                        }, eC = (e, t, r, n, u = !1) => {
                            let l = k(f, e),
                                a = h.array.has(e),
                                s = n ? t : d(t),
                                c = B(k(g, e), s);
                            if (c || T(g, e, s), a) O.array.next({
                                name: e,
                                values: n ? g : d(g)
                            }), (w.isDirty || w.dirtyFields || L.isDirty || L.dirtyFields) && r.shouldDirty && (W(), u || O.state.next({
                                name: e,
                                dirtyFields: i.dirtyFields,
                                isDirty: ec(e, s)
                            }));
                            else {
                                let t = Array.isArray(s) && !s.length || G(s);
                                !l || l._f || o(s) || t ? eh(e, s, r, n, u) : ey(e, s, r, n, u)
                            }
                            if (!c && !u) {
                                let t = ea(e, h),
                                    r = n ? g : d(g);
                                O.state.next({
                                    ...t && i,
                                    name: b.mount || t ? e : void 0,
                                    values: r
                                })
                            }
                        }, ev = (e, t, r = {}) => eC(e, t, r, !1), ex = async o => {
                            b.mount = !0;
                            let u = o.target,
                                a = u.name,
                                s = !0,
                                p = k(f, a),
                                m = e => {
                                    s = Number.isNaN(e) || r(e) && isNaN(e.getTime()) || B(e, k(g, a, e))
                                };
                            if (p) {
                                var C, v, $, A, V;
                                let r, b, _, I = u.type ? er(p._f) : l(o),
                                    M = o.type === c || "focusout" === o.type,
                                    N = !((_ = p._f).mount && (_.required || _.min || _.max || _.maxLength || _.minLength || _.pattern || _.validate)) && !e.validate && !n.resolver && !k(i.errors, a) && !p._f.deps,
                                    q = N || (C = M, v = k(i.touchedFields, a), $ = i.isSubmitted, A = E, !(V = F).isOnAll && (!$ && V.isOnTouch ? !(v || C) : ($ ? A.isOnBlur : V.isOnBlur) ? !C : ($ ? !A.isOnChange : !V.isOnChange) || C)),
                                    K = ea(a, h, M);
                                T(g, a, I), M ? u && u.readOnly || (p._f.onBlur && p._f.onBlur(o), t && t(0)) : p._f.onChange && p._f.onChange(o);
                                let U = Y(a, I, M),
                                    W = !G(U) || K;
                                if (M || O.state.next({
                                        name: a,
                                        type: o.type,
                                        ...x ? {
                                            values: d(g)
                                        } : {}
                                    }), q) return (!N || !i.isValid) && (w.isValid || L.isValid) && ("onBlur" === n.mode ? M && P() : M || P()), W && O.state.next({
                                    name: a,
                                    ...K ? {} : U
                                });
                                if (!n.resolver && e.validate && await et({
                                        name: a,
                                        eventType: o.type
                                    }), !M && K && O.state.next({
                                        ...i
                                    }), n.resolver) {
                                    let {
                                        errors: e
                                    } = await J([a]);
                                    if (Z([a]), m(I), !s) {
                                        G(U) || O.state.next(U);
                                        return
                                    }
                                    let t = es(i.errors, f, a),
                                        o = es(e, f, t.name || a);
                                    r = o.error, a = o.name, b = G(e)
                                } else Z([a], !0), r = (await ef(p, h.disabled, g, R, n.shouldUseNativeValidation))[a], Z([a]), m(I), s && (r ? b = !1 : (w.isValid || L.isValid) && (b = await eu({
                                    fields: f,
                                    onlyCheckValid: !0,
                                    name: a,
                                    eventType: o.type
                                })));
                                if (s) {
                                    p._f.deps && (!Array.isArray(p._f.deps) || p._f.deps.length > 0) && eA(p._f.deps);
                                    var S = a,
                                        D = b,
                                        j = r;
                                    let e = k(i.errors, S),
                                        o = (w.isValid || L.isValid) && "boolean" == typeof D && i.isValid !== D;
                                    if (n.delayError && j) {
                                        let e;
                                        e = () => {
                                            T(i.errors, S, j), i.errors = {
                                                ...i.errors
                                            }, O.state.next({
                                                errors: i.errors
                                            })
                                        }, (t = t => {
                                            clearTimeout(y), y = setTimeout(e, t)
                                        })(n.delayError)
                                    } else clearTimeout(y), t = null, j ? T(i.errors, S, j) : z(i.errors, S), i.errors = {
                                        ...i.errors
                                    };
                                    if ((j ? !B(e, j) : e) || !G(U) || o) {
                                        let e = {
                                            ...U,
                                            ...o && "boolean" == typeof D ? {
                                                isValid: D
                                            } : {},
                                            errors: i.errors,
                                            name: S
                                        };
                                        i = {
                                            ...i,
                                            ...e
                                        }, O.state.next(e)
                                    }
                                }
                            }
                        }, e$ = (e, t) => {
                            if (k(i.errors, t) && e.focus) return e.focus(), 1
                        }, eA = async (e, t = {}) => {
                            let r, o, u = N(e);
                            if (n.resolver) {
                                let t = await ee(A(e) ? e : u);
                                r = G(t), o = e ? !u.some(e => k(t, e)) : r
                            } else e ? ((o = (await Promise.all(u.map(async e => {
                                let t = k(f, e);
                                return await eu({
                                    fields: t && t._f ? {
                                        [e]: t
                                    } : t,
                                    eventType: p
                                })
                            }))).every(Boolean)) || i.isValid) && P() : o = r = await eu({
                                fields: f,
                                name: e,
                                eventType: p
                            });
                            return O.state.next({
                                ...!j(e) || (w.isValid || L.isValid) && r !== i.isValid ? {} : {
                                    name: e
                                },
                                ...n.resolver || !e ? {
                                    isValid: r
                                } : {},
                                errors: i.errors
                            }), t.shouldFocus && !o && ei(f, e$, e ? u : h.mount), o
                        }, eF = (e, t) => ({
                            invalid: !!k((t || i).errors, e),
                            isDirty: !!k((t || i).dirtyFields, e),
                            error: k((t || i).errors, e),
                            isValidating: !!k(i.validatingFields, e),
                            isTouched: !!k((t || i).touchedFields, e)
                        }), eV = e => {
                            let t = e ? N(e) : void 0;
                            null == t || t.forEach(e => z(i.errors, e)), t ? t.forEach(e => {
                                O.state.next({
                                    name: e,
                                    errors: i.errors
                                })
                            }) : O.state.next({
                                errors: {}
                            })
                        }, ek = (e, t, r) => {
                            let o = (k(f, e, {
                                    _f: {}
                                })._f || {}).ref,
                                {
                                    ref: n,
                                    message: u,
                                    type: l,
                                    ...a
                                } = k(i.errors, e) || {};
                            T(i.errors, e, {
                                ...a,
                                ...t,
                                ref: o
                            }), O.state.next({
                                name: e,
                                errors: i.errors,
                                isValid: !1
                            }), r && r.shouldFocus && o && o.focus && o.focus()
                        }, eS = e => {
                            var t;
                            let r = !!(null == (t = e.formState) ? void 0 : t.values);
                            r && x++;
                            let {
                                unsubscribe: o
                            } = O.state.subscribe({
                                next: t => {
                                    let r, o, n;
                                    if (r = e.name, o = t.name, n = e.exact, (!r || !o || r === o || N(r).some(e => e && (n ? e === o || e.startsWith(o + ".") : e.startsWith(o) || o.startsWith(e)))) && ((e, t, r, o) => {
                                            r(e);
                                            let {
                                                name: n,
                                                ...u
                                            } = e, l = Object.keys(u);
                                            return !l.length || o && l.length >= Object.keys(t).length || l.find(e => t[e] === (!o || "all"))
                                        })(t, e.formState || w, eO, e.reRenderRoot)) {
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
                            let n = !1;
                            return () => {
                                n || (n = !0, x--, o())
                            }
                        }, eT = (e, t = {}) => {
                            for (let r of e ? N(e) : h.mount) h.mount.delete(r), h.array.delete(r), t.keepValue || (z(f, r), z(g, r)), t.keepError || z(i.errors, r), t.keepDirty || z(i.dirtyFields, r), t.keepTouched || z(i.touchedFields, r), t.keepIsValidating || z(i.validatingFields, r), n.shouldUnregister || t.keepDefaultValue || z(m, r);
                            O.state.next({
                                values: d(g)
                            }), O.state.next({
                                ...i,
                                ...!t.keepDirty ? {} : {
                                    isDirty: ec()
                                }
                            }), t.keepIsValid || P()
                        }, eE = ({
                            disabled: e,
                            name: t
                        }) => {
                            if ("boolean" == typeof e && b.mount || e || h.disabled.has(t)) {
                                let r = h.disabled.has(t);
                                e ? h.disabled.add(t) : h.disabled.delete(t), !!e !== r && b.mount && !b.action && P()
                            }
                        }, eD = (e, t = {}) => {
                            let r = k(f, e),
                                o = "boolean" == typeof t.disabled || "boolean" == typeof n.disabled,
                                u = !h.registerName.has(e) && r && r._f && !r._f.mount;
                            return (T(f, e, {
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
                            }), h.mount.add(e), r && !u) ? eE({
                                disabled: "boolean" == typeof t.disabled ? t.disabled : n.disabled,
                                name: e
                            }) : Q(e, !0, t.value), {
                                ...o ? {
                                    disabled: t.disabled || n.disabled
                                } : {},
                                ...n.progressive ? {
                                    required: !!t.required,
                                    min: eo(t.min),
                                    max: eo(t.max),
                                    minLength: eo(t.minLength),
                                    maxLength: eo(t.maxLength),
                                    pattern: eo(t.pattern)
                                } : {},
                                name: e,
                                onChange: ex,
                                onBlur: ex,
                                ref: o => {
                                    if (o) {
                                        let n;
                                        h.registerName.add(e), eD(e, t), h.registerName.delete(e), r = k(f, e);
                                        let u = A(o.value) && o.querySelectorAll && o.querySelectorAll("input,select,textarea")[0] || o,
                                            l = "radio" === (n = u).type || "checkbox" === n.type,
                                            a = r._f.refs || [];
                                        (l ? a.find(e => e === u) : u === r._f.ref) || (T(f, e, {
                                            _f: {
                                                ...r._f,
                                                ...l ? {
                                                    refs: [...a.filter(U), u, ...Array.isArray(k(m, e)) ? [{}] : []],
                                                    ref: {
                                                        type: u.type,
                                                        name: e
                                                    }
                                                } : {
                                                    ref: u
                                                }
                                            }
                                        }), Q(e, !1, void 0, u))
                                    } else(r = k(f, e, {}))._f && (r._f.mount = !1), (n.shouldUnregister || t.shouldUnregister) && !(a(h.array, e) && b.action) && h.unMount.add(e)
                                }
                            }
                        }, ew = () => n.shouldFocusError && !n.shouldUseNativeValidation && ei(f, e$, h.mount), ej = (e, t) => async r => {
                            let o;
                            r && (r.preventDefault && r.preventDefault(), r.persist && r.persist());
                            let u = d(g);
                            if (O.state.next({
                                    isSubmitting: !0
                                }), n.resolver) {
                                let {
                                    errors: e,
                                    values: t
                                } = await J();
                                Z(), i.errors = e, u = d(t)
                            } else await eu({
                                fields: f,
                                eventType: "submit"
                            });
                            if (h.disabled.size)
                                for (let e of h.disabled) z(u, e);
                            if (z(i.errors, v), G(i.errors)) {
                                O.state.next({
                                    errors: {}
                                });
                                try {
                                    await e(u, r)
                                } catch (e) {
                                    o = e
                                }
                            } else t && await t({
                                ...i.errors
                            }, r), ew(), setTimeout(ew);
                            if (O.state.next({
                                    isSubmitted: !0,
                                    isSubmitting: !1,
                                    isSubmitSuccessful: G(i.errors) && !o,
                                    submitCount: i.submitCount + 1,
                                    errors: i.errors
                                }), o) throw o
                        }, e_ = (e, t = {}) => {
                            let r = e ? d(e) : m,
                                o = d(r),
                                u = G(e);
                            if (t.keepDefaultValues || (m = r), !t.keepValues) {
                                if (t.keepDirtyValues)
                                    for (let e of Array.from(new Set([...h.mount, ...Object.keys(H(m, g))]))) {
                                        let t = k(i.dirtyFields, e),
                                            r = k(g, e),
                                            n = k(o, e);
                                        t && !A(r) ? T(o, e, r) : t || A(n) || ev(e, n)
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
                                            for (let e of h.mount) ev(e, k(o, e));
                                        else f = {}
                                    }
                                if (n.shouldUnregister) {
                                    if (g = t.keepDefaultValues ? d(m) : {}, t.keepFieldsRef)
                                        for (let e of h.mount) T(g, e, k(o, e))
                                } else g = d(o);
                                O.array.next({
                                    values: {
                                        ...o
                                    }
                                }), O.state.next({
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
                            }, b.mount = !w.isValid || !!t.keepIsValid || !!t.keepDirtyValues || !n.shouldUnregister && !G(o), b.watch = !!n.shouldUnregister, b.keepIsValid = !!t.keepIsValid, b.action = !1, t.keepErrors || (i.errors = {}), O.state.next({
                                submitCount: t.keepSubmitCount ? i.submitCount : 0,
                                isDirty: !u && (t.keepDirty ? i.isDirty : t.keepValues ? ec() : !!(t.keepDefaultValues && !B(e, m))),
                                isSubmitted: !!t.keepIsSubmitted && i.isSubmitted,
                                dirtyFields: u ? {} : t.keepDirtyValues ? t.keepDefaultValues && g ? H(m, g) : i.dirtyFields : t.keepDefaultValues && e ? H(m, e) : t.keepDirty ? i.dirtyFields : {},
                                touchedFields: t.keepTouched ? i.touchedFields : {},
                                errors: t.keepErrors ? i.errors : {},
                                isSubmitSuccessful: !!t.keepIsSubmitSuccessful && i.isSubmitSuccessful,
                                isSubmitting: !1,
                                defaultValues: m
                            })
                        }, eL = (e, t) => e_(S(e) ? e(g) : e, {
                            ...n.resetOptions,
                            ...t
                        }), eO = e => {
                            let {
                                name: t,
                                type: r,
                                values: o,
                                ...n
                            } = e;
                            i = {
                                ...i,
                                ...n
                            }
                        }, eB = {
                            control: {
                                register: eD,
                                unregister: eT,
                                getFieldState: eF,
                                handleSubmit: ej,
                                setError: ek,
                                _subscribe: eS,
                                _runSchema: J,
                                _updateIsValidating: Z,
                                _focusError: ew,
                                _getWatch: ep,
                                _getDirty: ec,
                                _setValid: P,
                                _setFieldArray: (e, t = [], r, o, u = !0, l = !0) => {
                                    if (o && r && !n.disabled) {
                                        if (b.action = !0, l && Array.isArray(k(f, e))) {
                                            let t = r(k(f, e), o.argA, o.argB);
                                            u && T(f, e, t)
                                        }
                                        if (l && Array.isArray(k(i.errors, e))) {
                                            let t, n = r(k(i.errors, e), o.argA, o.argB);
                                            u && T(i.errors, e, n), M(k(t = i.errors, e)).length || z(t, e)
                                        }
                                        if ((w.touchedFields || L.touchedFields) && l && Array.isArray(k(i.touchedFields, e))) {
                                            let t = r(k(i.touchedFields, e), o.argA, o.argB);
                                            u && T(i.touchedFields, e, t)
                                        }(w.dirtyFields || L.dirtyFields) && W(), O.state.next({
                                            name: e,
                                            isDirty: ec(e, t),
                                            dirtyFields: i.dirtyFields,
                                            errors: i.errors,
                                            isValid: i.isValid
                                        })
                                    } else T(g, e, t)
                                },
                                _setDisabledField: eE,
                                _setErrors: e => {
                                    i.errors = e, O.state.next({
                                        errors: i.errors,
                                        isValid: !1
                                    })
                                },
                                _getFieldArray: e => M(k(b.mount ? g : m, e, n.shouldUnregister ? k(m, e, []) : [])),
                                _reset: e_,
                                _resetDefaultValues: () => S(n.defaultValues) && n.defaultValues().then(e => {
                                    eL(e, n.resetOptions), O.state.next({
                                        isLoading: !1
                                    })
                                }),
                                _removeUnmounted: () => {
                                    for (let e of h.unMount) {
                                        let t = k(f, e);
                                        t && (t._f.refs ? t._f.refs.every(e => !U(e)) : !U(t._f.ref)) && eT(e)
                                    }
                                    h.unMount = new Set
                                },
                                _disableForm: e => {
                                    "boolean" == typeof e && (O.state.next({
                                        disabled: e
                                    }), ei(f, (t, r) => {
                                        let o = k(f, r);
                                        o && (t.disabled = o._f.disabled || e, Array.isArray(o._f.refs) && o._f.refs.forEach(t => {
                                            t.disabled = o._f.disabled || e
                                        }))
                                    }, 0, !1))
                                },
                                _subjects: O,
                                _proxyFormState: w,
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
                                    return n
                                },
                                set _options(value) {
                                    F = en((n = {
                                        ...n,
                                        ...value
                                    }).mode), E = en(n.reValidateMode)
                                }
                            },
                            subscribe: e => (b.mount = !0, L = {
                                ...L,
                                ...e.formState
                            }, eS({
                                ...e,
                                formState: {
                                    ...D,
                                    ...e.formState
                                }
                            })),
                            trigger: eA,
                            register: eD,
                            handleSubmit: ej,
                            watch: (e, t) => {
                                if (S(e)) {
                                    x++;
                                    let {
                                        unsubscribe: r
                                    } = O.state.subscribe({
                                        next: r => "values" in r && e(r.values || ep(void 0, t), r)
                                    }), o = !1;
                                    return {
                                        unsubscribe: () => {
                                            o || (o = !0, x--, r())
                                        }
                                    }
                                }
                                return ep(e, t, !0)
                            },
                            setValue: ev,
                            setValues: (e, t = {}) => {
                                let r = S(e) ? e(g) : e;
                                if (!B(g, r)) {
                                    g = {
                                        ...g,
                                        ...r
                                    };
                                    let e = I(r);
                                    for (let r of h.mount) r in e && eC(r, e[r], t, !0, !0);
                                    O.state.next({
                                        ...i,
                                        name: void 0,
                                        type: void 0,
                                        ...x ? {
                                            values: g
                                        } : {}
                                    }), t.shouldValidate && P()
                                }
                            },
                            getValues: (e, t) => {
                                let r = {
                                    ...b.mount ? g : m
                                };
                                return t && (r = function e(t, r) {
                                    let o = {};
                                    for (let n in t)
                                        if (t.hasOwnProperty(n)) {
                                            let l = t[n],
                                                a = r[n];
                                            if (l && u(l) && a) {
                                                let t = e(l, a);
                                                u(t) && (o[n] = t)
                                            } else t[n] && (o[n] = a)
                                        } return o
                                }(t.dirtyFields ? i.dirtyFields : i.touchedFields, r)), A(e) ? r : j(e) ? k(r, e) : e.map(e => k(r, e))
                            },
                            reset: eL,
                            resetField: (e, t = {}) => {
                                k(f, e) && (A(t.defaultValue) ? ev(e, d(k(m, e))) : (ev(e, t.defaultValue), T(m, e, d(t.defaultValue))), t.keepTouched || z(i.touchedFields, e), t.keepDirty || (z(i.dirtyFields, e), i.isDirty = t.defaultValue ? ec(e, d(k(m, e))) : ec()), !t.keepError && (z(i.errors, e), w.isValid && P()), O.state.next({
                                    ...i
                                }))
                            },
                            resetDefaultValues: (e, t = {}) => {
                                if (m = d(e), !t.keepDirty) {
                                    let e = H(m, g);
                                    i.dirtyFields = e, i.isDirty = !G(e)
                                }
                                t.keepIsValid || P(), O.state.next({
                                    ...i,
                                    defaultValues: m
                                })
                            },
                            clearErrors: eV,
                            unregister: eT,
                            setError: ek,
                            setFocus: (e, t = {}) => {
                                let r = k(f, e),
                                    o = r && r._f;
                                if (o) {
                                    let e = o.refs ? o.refs[0] : o.ref;
                                    e.focus && setTimeout(() => {
                                        e.focus(), t.shouldSelect && S(e.select) && e.select()
                                    })
                                }
                            },
                            getFieldState: eF
                        };
                    return {
                        ...eB,
                        formControl: eB
                    }
                }(e);
                n.current = {
                    ...i,
                    formState: m
                }
            } let b = n.current.control;
        return b._options = e, w(() => {
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
            e.values && !B(e.values, i.current) ? (b._reset(e.values, {
                keepFieldsRef: !0,
                ...b._options.resetOptions
            }), (null == (t = b._options.resetOptions) ? void 0 : t.keepIsValid) || b._setValid(), i.current = e.values, g(e => ({
                ...e
            }))) : b._resetDefaultValues()
        }, [b, e.values]), t.default.useEffect(() => {
            b._state.mount || (b._setValid(), b._state.mount = !0), b._state.watch && (b._state.watch = !1, b._subjects.state.next({
                ...b._formState
            })), b._removeUnmounted()
        }), n.current.formState = t.default.useMemo(() => D(m, b), [b, m]), n.current
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

//# debugId=46e22b81-1b39-5c51-40cb-a802ae5ce675