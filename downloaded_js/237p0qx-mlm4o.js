;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "9f60b839-be04-b35a-5868-586bd418d906")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 4390, 201763, 570994, e => {
    "use strict";
    var t = e.i(785328),
        r = e.i(409781),
        i = e.i(833449),
        n = e.i(425314),
        s = e.i(722978),
        l = e.i(131581),
        a = e.i(124576);
    let o = ({
        keyFigures: e,
        nested: r = !1,
        theme: n = "light"
    }) => {
        let l = (0, s.clsx)("container col-span-12 pt-16 grid grid-cols-12 gap-2 ", {
            "py-16": !r
        });
        return (0, t.jsx)("div", {
            className: "dark" === n ? "bg-black text-white" : "",
            "data-sentry-component": "KeyFigures",
            "data-sentry-source-file": "KeyFigures.tsx",
            children: (0, t.jsx)("div", {
                className: l,
                children: e?.map((l, a) => {
                    let {
                        value: o,
                        label: d
                    } = l, c = (0, s.clsx)("col-span-12 flex rounded-md items-center gap-2 px-4 py-2 filter md:p-4 lg:col-span-4 xl:p-6", {
                        "backdrop-blur-lg": r && "dark" !== n,
                        "bg-gray-900 dark:bg-black": "dark" === n,
                        "bg-gray-100 dark:bg-gray-900 text-gray-800": !r && "dark" !== n,
                        "xl:col-span-3": e?.length === 4
                    });
                    return o?.type === "text" ? (0, t.jsxs)("div", {
                        className: c,
                        children: [(0, t.jsx)("div", {
                            className: "loco-text-heading-sm min-w-[30%] shrink-0 gap-10 pr-4 text-center",
                            children: o.text
                        }), (0, t.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: d
                        })]
                    }, a) : d && o?.type === "icon" && !o.url ? (0, t.jsx)("div", {
                        className: c,
                        children: (0, t.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: d
                        })
                    }, a) : o?.type === "icon" && o.url ? (0, t.jsxs)("div", {
                        className: c,
                        children: [(0, t.jsx)("div", {
                            className: "flex min-w-[30%] shrink-0 gap-10 text-center lg:justify-center",
                            children: (0, t.jsx)(i.default, {
                                src: o.url,
                                alt: o.description,
                                width: 40,
                                height: 40
                            })
                        }), (0, t.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: d
                        })]
                    }, a) : null
                })
            })
        })
    };
    e.s(["default", 0, o], 201763);
    var d = e.i(749583);
    let c = (0, n.default)(() => e.A(104688), {
            loadableGenerated: {
                modules: [425687]
            },
            ssr: !1
        }),
        u = ({
            eyebrow: e,
            title: n,
            titleSize: u = "medium",
            description: m,
            backgroundImage: f,
            actions: p = [],
            keyFigures: y,
            video: x,
            mention: h,
            fullScreen: g = !0
        }) => {
            let v = (0, r.useRef)(null),
                b = (0, l.useInView)(v, {
                    once: !0
                }),
                k = (0, a.useReducedMotion)(),
                [j, w] = (0, r.useState)(!1),
                P = (0, s.default)(`font-nohemi mt-24 my-4 ${"small"===u?"mb-6":"mb-8"}`, {
                    "loco-text-heading-xl": "medium" === u,
                    "loco-text-headline": "large" === u,
                    "loco-text-heading-lg": "small" === u
                }),
                I = (0, s.default)("object-cover transition-opacity duration-1000 opacity-100", {
                    "opacity-0": j
                });
            return (0, t.jsxs)("section", {
                ref: v,
                className: "dark relative",
                "data-sentry-component": "Headliner",
                "data-sentry-source-file": "Headliner.tsx",
                children: [f && (0, t.jsx)(i.default, {
                    src: f.src,
                    placeholder: "blur",
                    blurDataURL: f.placeholder,
                    fill: !0,
                    alt: "",
                    className: I,
                    sizes: "100vw"
                }), b && !k && x && (0, t.jsx)(c, {
                    url: x || "",
                    playing: !0,
                    loop: !0,
                    muted: !0,
                    playsinline: !0,
                    width: "100%",
                    height: "100%",
                    onReady: () => {
                        w(!0)
                    },
                    config: {
                        hlsOptions: {
                            maxMaxBufferLength: 1,
                            startLevel: 1
                        }
                    },
                    className: "absolute [&>video]:object-cover"
                }, "hero-video"), (0, t.jsx)("div", {
                    className: "absolute h-full w-full",
                    style: {
                        backgroundImage: g ? `
    linear-gradient(180deg, rgba(1, 1, 1, 0.00) 45.08%, rgba(1, 1, 1, 0.00) 49.56%, rgba(1, 1, 1, 0.01) 53.84%, rgba(1, 1, 1, 0.02) 57.92%, rgba(1, 1, 1, 0.04) 61.84%, rgba(1, 1, 1, 0.06) 65.62%, rgba(1, 1, 1, 0.09) 69.27%, rgba(1, 1, 1, 0.12) 72.82%, rgba(1, 1, 1, 0.16) 76.29%, rgba(1, 1, 1, 0.20) 79.7%, rgba(1, 1, 1, 0.24) 83.06%, rgba(1, 1, 1, 0.29) 86.41%, rgba(1, 1, 1, 0.34) 89.75%, rgba(1, 1, 1, 0.39) 93.12%, rgba(1, 1, 1, 0.44) 96.53%, rgba(1, 1, 1, 0.50) 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)` : ""
                    }
                }), (0, t.jsxs)("div", {
                    className: `relative container flex ${g&&"min-h-[calc(100vh-4rem)]"} flex-col py-8 text-white`,
                    children: [(0, t.jsx)("div", {
                        className: "flex grow flex-col justify-stretch",
                        children: (0, t.jsxs)("div", {
                            className: "flex h-full grow flex-col items-center justify-center text-center",
                            children: [e && (0, t.jsx)("div", {
                                className: "loco-caption-lg-semibold",
                                children: e
                            }), (0, t.jsx)("h1", {
                                className: P,
                                children: n
                            }), m && (0, t.jsx)("div", {
                                className: "loco-caption-sm-semibold mt-5",
                                children: m
                            }), p && (0, t.jsx)("div", {
                                className: "mt-6 flex flex-wrap items-center justify-center gap-4",
                                children: p.map((e, r) => {
                                    if (e.link) return (0, t.jsx)(d.default, {
                                        rounded: !0,
                                        hasArrow: !0,
                                        href: e.link.href,
                                        target: e.link.target,
                                        variant: 0 === r ? "primary" : "secondary",
                                        children: e.title
                                    }, `headliner-action-link-${e.title}-${r}`);
                                    if (e.form) {
                                        let i = {
                                            ...e.form.form,
                                            ...e.form.webinarFormParametersContent,
                                            extraFields: e.form.extraFields
                                        };
                                        return (0, t.jsx)("div", {
                                            children: e.form.renderModal({
                                                label: e.title,
                                                form: i
                                            })
                                        }, `headliner-action-modal-${e.title}-${r}`)
                                    }
                                    return null
                                })
                            })]
                        })
                    }), y && (0, t.jsx)(o, {
                        keyFigures: y,
                        nested: !0
                    })]
                }), h && (0, t.jsx)("div", {
                    className: "loco-text-body-sm z-10 w-full px-4 py-4 text-center opacity-70 md:absolute md:top-10 md:right-8 md:left-auto md:w-auto md:px-0 md:py-8",
                    children: h
                })]
            })
        };
    e.s(["default", 0, u], 570994);
    var m = e.i(115219);
    e.s(["default", 0, ({
        actions: e = [],
        brandfolder: i,
        mention: n,
        eyebrow: s,
        title: l,
        titleSize: a,
        description: o,
        image: d,
        keyFigures: c,
        isHidden: f
    }) => {
        let {
            mapFormActions: p
        } = (0, m.useFormModal)(e), y = p(e), x = (0, r.useMemo)(() => (c?.data ?? []).map(e => e?.value?.text ? {
            value: {
                type: "text",
                text: e.value.text
            },
            label: e.label
        } : {
            value: {
                type: "icon",
                url: e?.value?.icon?.file?.cdnURL || "",
                description: e?.value?.icon?.caption || ""
            },
            label: e.label
        }), [c]);
        return (0, t.jsx)(t.Fragment, {
            children: !f && (0, t.jsx)(u, {
                actions: y,
                mention: n || "",
                eyebrow: s || "",
                title: l || "",
                titleSize: "small" === a ? "small" : "large" === a ? "large" : "medium",
                description: o || "",
                backgroundImage: {
                    src: d?.asset.url || "",
                    placeholder: d?.asset.metadata?.lqip || ""
                },
                keyFigures: x,
                video: i?.muxHLSURL || ""
            })
        })
    }], 4390)
}, 436324, 531469, e => {
    "use strict";
    var t = e.i(785328),
        r = e.i(409781),
        i = e.i(749583),
        n = e.i(222061),
        s = e.i(829483),
        l = e.i(662380),
        a = e.i(179695),
        o = e.i(613821),
        d = e.i(466673),
        c = e.i(396241),
        u = e.i(309578),
        m = e.i(575146),
        f = e.i(239273),
        p = e.i(869324),
        y = e.i(497492);
    let x = ({
        form: e,
        isGrowForm: t,
        onSuccess: r,
        close: i,
        onShowSuccessMessage: n
    }) => {
        let s = (0, y.getFilteredQueryParams)(["sfcid", "sflsa", "sfit"], t),
            l = (0, y.getQueryParams)(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"], !0),
            {
                setFormSubmitted: a
            } = (0, m.useGateContext)(),
            [o] = (0, f.default)("ELOQUA");
        return (d, c, m) => {
            let f = t ? (({
                    emailConfirmation: e,
                    ghandler: t,
                    gcid: r,
                    growDivision: i,
                    growDepartment: n
                }) => ({
                    emailConfirmation: e,
                    ghandler: t,
                    gcid: r,
                    growDivision: i,
                    growDepartment: n,
                    grow: !0
                }))(e?.sfdcIntegration || {}) : e?.sfdcIntegration,
                x = e?.fields ? (0, y.getAlwaysSendOnData)(e.fields, c, m) : {};
            return d.elqCustomerGUID = o?.split("&")?.[0]?.split("GUID=")?.[1] || "", d = {
                ...d,
                ...f,
                ...x,
                ...l,
                ...s,
                ...e?.extraFields
            }, fetch("https://create.unity.com/e/f2", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams((0, y.cleanData)(d)).toString()
            }).then(() => {
                (0, p.default)({
                    properties: {
                        form_action: "submitted",
                        form_id: d.elqFormID,
                        form_name: d.elqFormName,
                        form_customer_id: d.elqCustomerGUID
                    }
                }), a(!0), r?.(), e?.successMessage?.showSuccessMessage ? n?.() : i?.()
            }).catch(e => u.captureException(e))
        }
    };
    e.s(["useEloquaSubmit", 0, x], 531469);
    var h = e.i(272351);
    e.s(["FormBuilder", 0, ({
        form: e,
        close: u,
        isGrowForm: m
    }) => {
        let [f, p] = (0, r.useState)(!1), {
            handleSubmit: y,
            control: g,
            setValue: v,
            watch: b,
            getValues: k,
            formState: {
                isSubmitting: j
            }
        } = (0, d.useForm)({
            reValidateMode: "onChange",
            mode: "onChange"
        }), w = b(c.COUNTRY_CODE), P = x({
            form: e,
            isGrowForm: m,
            close: u,
            onShowSuccessMessage: () => p(!0)
        });
        return f && e?.successMessage?.showSuccessMessage ? (0, t.jsxs)("div", {
            className: "flex flex-col items-center justify-center p-8 text-center",
            children: [e.successMessage.title && (0, t.jsx)("h3", {
                className: "mb-4 text-xl font-semibold text-gray-900",
                children: e.successMessage.title
            }), e.successMessage.description && (0, t.jsx)("p", {
                className: "mb-6 text-gray-600",
                children: e.successMessage.description
            }), e?.successMessage?.closeButtonText && (0, t.jsx)(i.default, {
                onPress: u,
                className: "[&>div>span]:!text-black hover:[&>div>span]:!underline",
                variant: "secondary",
                children: e?.successMessage?.closeButtonText
            })]
        }) : (0, t.jsxs)(o.default, {
            onSubmit: y(t => {
                if (!(0, h.hasActiveBlockingField)(e?.fields, k, w)) return P(t, k, w)
            }),
            "data-sentry-element": "Form",
            "data-sentry-component": "FormBuilder",
            "data-sentry-source-file": "FormsBuilder.tsx",
            children: [(0, t.jsx)("div", {
                className: "flex flex-col [&>*]:mt-3",
                children: e?.fields && e?.fields.map((e, r) => {
                    switch (e.formField) {
                        case "input":
                            return (0, t.jsx)(n.default, {
                                ...e,
                                control: g,
                                countryCode: w
                            }, r);
                        case "checkbox":
                            return (0, t.jsx)(s.default, {
                                countryCode: w,
                                ...e,
                                control: g
                            }, r);
                        case "dropdown":
                            return (0, t.jsx)(l.default, {
                                countryCode: w,
                                ...e,
                                control: g,
                                setValue: v
                            }, r);
                        case "richText":
                            return (0, t.jsx)(a.default, {
                                ...e,
                                control: g,
                                countryCode: w
                            }, r)
                    }
                })
            }), e?.actions && (0, t.jsxs)("div", {
                className: "mt-10 border-t border-t-gray-200 pt-6",
                children: [e?.actions?.primaryActionText && (0, t.jsx)(i.default, {
                    type: "submit",
                    rounded: !0,
                    hasArrow: !0,
                    disabled: j,
                    children: e?.actions?.primaryActionText
                }), e?.actions?.secondaryActionText && (0, t.jsx)(i.default, {
                    onPress: u,
                    className: "[&>div>span]:!text-black hover:[&>div>span]:!underline",
                    variant: "secondary",
                    children: e?.actions?.secondaryActionText
                })]
            })]
        })
    }], 436324)
}, 575146, e => {
    "use strict";
    var t = e.i(785328),
        r = e.i(409781);
    let i = (0, r.createContext)({
        isGated: !1,
        setIsGated: () => {},
        formSubmitted: !1,
        setFormSubmitted: () => {}
    });
    e.s(["GateContextProvider", 0, ({
        children: e
    }) => {
        let [n, s] = (0, r.useState)(!1), [l, a] = (0, r.useState)(!1);
        return (0, t.jsx)(i.Provider, {
            value: {
                isGated: l,
                setIsGated: a,
                formSubmitted: n,
                setFormSubmitted: s
            },
            "data-sentry-element": "GateContext.Provider",
            "data-sentry-component": "GateContextProvider",
            "data-sentry-source-file": "GateContext.tsx",
            children: e
        })
    }, "default", 0, i, "useGateContext", 0, () => (0, r.useContext)(i)])
}, 239273, e => {
    "use strict";
    var t = e.i(409781);
    e.s(["default", 0, e => {
        let [r, i] = (0, t.useState)("");
        return (0, t.useEffect)(() => {
            i(document.cookie)
        }, []), [(0, t.useMemo)(() => r?.split("; ")?.find(t => t.includes(e)), [r, e])]
    }])
}, 115219, e => {
    "use strict";
    var t = e.i(785328),
        r = e.i(363737),
        i = e.i(436324),
        n = e.i(869324),
        s = e.i(537251);
    e.s(["applyFormOverrides", 0, function(e, t) {
        let r;
        if (!t || !e?.fields) return e;
        try {
            r = JSON.parse(t)
        } catch {
            return e
        }
        if (!r) return e;
        let i = [...e.fields];
        for (let e of Object.keys(r)) {
            let t = i.findIndex(t => t.formFieldId === e);
            if (t < 0) continue;
            let n = r[e];
            null != n.isRequired && (i[t] = {
                ...i[t],
                isRequired: n.isRequired
            }), n.isHidden && i.splice(t, 1)
        }
        return {
            ...e,
            fields: i
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
            extraFields: l
        } = (0, s.default)(), a = ({
            label: s,
            form: l
        }) => {
            let a = ((e, t) => {
                let r = e?.find(e => t.title === e?.form?.title)?.customSelections || "";
                try {
                    return JSON.parse(r)
                } catch (e) {
                    return null
                }
            })(e || [], l);
            if (a && l?.fields)
                for (let e of Object.keys(a)) {
                    let t = l.fields.findIndex(t => t.formFieldId === e);
                    if (t >= 0) {
                        let r = a[e];
                        null != r.isRequired && (l.fields[t].isRequired = a[e].isRequired), r.isHidden && l.fields.splice(t, 1)
                    }
                }
            return (0, t.jsx)(r.default, {
                actionLabel: s,
                onOpenChange: e => {
                    e && (0, n.default)({
                        properties: {
                            form_action: "presented",
                            form_id: l.fields?.find(e => "elqFormID" === e.formFieldId)?.defaultValue,
                            form_name: l.fields?.find(e => "elqFormName" === e.formFieldId)?.defaultValue
                        }
                    })
                },
                "data-sentry-element": "Modal",
                "data-sentry-component": "renderModal",
                "data-sentry-source-file": "useFormModal.tsx",
                children: e => (0, t.jsx)(r.default.Layout, {
                    modal: {
                        title: l.title,
                        description: l.description
                    },
                    children: l && (0, t.jsx)(i.FormBuilder, {
                        form: l,
                        close: e
                    })
                })
            })
        };
        return {
            renderModal: a,
            mapFormActions: e => e?.map(e => ({
                title: e.title,
                link: e.link ? {
                    href: e.link.linkReference?.href.current || "",
                    target: e.link.linkReference?.target || "_self"
                } : null,
                form: e.form ? {
                    form: e.form,
                    webinarFormParametersContent: e.webinarFormParametersContent,
                    extraFields: l,
                    renderModal: a
                } : null
            })),
            extraFields: l
        }
    }])
}, 475200, e => {
    "use strict";
    var t = e.i(409781);
    e.s(["default", 0, (e = 768) => {
        let [r, i] = (0, t.useState)(window.innerWidth <= e);
        return (0, t.useEffect)(() => {
            let t = () => {
                i(window.innerWidth <= e)
            };
            return window.addEventListener("resize", t), () => window.removeEventListener("resize", t)
        }, []), r
    }])
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
}, 722990, e => {
    "use strict";
    var t = e.i(785328);

    function r(e) {
        return "span" === e._type && "text" in e && "string" == typeof e.text && (typeof e.marks > "u" || Array.isArray(e.marks) && e.marks.every(e => "string" == typeof e))
    }

    function i(e) {
        return "string" == typeof e._type && "@" !== e._type[0] && (!("markDefs" in e) || !e.markDefs || Array.isArray(e.markDefs) && e.markDefs.every(e => "string" == typeof e._key)) && "children" in e && Array.isArray(e.children) && e.children.every(e => "object" == typeof e && "_type" in e)
    }

    function n(e) {
        return i(e) && "listItem" in e && "string" == typeof e.listItem && (typeof e.level > "u" || "number" == typeof e.level)
    }

    function s(e) {
        return "@list" === e._type
    }

    function l(e) {
        return "@span" === e._type
    }

    function a(e) {
        return "@text" === e._type
    }
    let o = ["strong", "em", "code", "underline", "strike-through"];

    function d(e, t, i) {
        if (!r(e) || !e.marks || !e.marks.length) return [];
        let n = e.marks.slice(),
            s = {};
        return n.forEach(e => {
            s[e] = 1;
            for (let n = t + 1; n < i.length; n++) {
                let t = i[n];
                if (t && r(t) && Array.isArray(t.marks) && -1 !== t.marks.indexOf(e)) s[e]++;
                else break
            }
        }), n.sort((e, t) => (function(e, t, r) {
            let i = e[t],
                n = e[r];
            if (i !== n) return n - i;
            let s = o.indexOf(t),
                l = o.indexOf(r);
            return s !== l ? s - l : t.localeCompare(r)
        })(s, e, t))
    }

    function c(e, t, r) {
        return {
            _type: "@list",
            _key: `${e._key||`${t}`}-parent`,
            mode: r,
            level: e.level || 1,
            listItem: e.listItem,
            children: [e]
        }
    }

    function u(e, t) {
        let i = t.level || 1,
            n = t.listItem || "normal",
            l = "string" == typeof t.listItem;
        if (s(e) && (e.level || 1) === i && l && (e.listItem || "normal") === n) return e;
        if (!("children" in e)) return;
        let a = e.children[e.children.length - 1];
        return a && !r(a) ? u(a, t) : void 0
    }
    var m = e.i(409781);
    let f = {
            textDecoration: "underline"
        },
        p = (e, t) => `[@portabletext/react] Unknown ${e}, specify a component for it in the \`components.${t}\` prop`,
        y = e => p(`block type "${e}"`, "types");

    function x(e) {
        console.warn(e)
    }
    let h = {
            display: "none"
        },
        g = {
            types: {},
            block: {
                normal: ({
                    children: e
                }) => (0, t.jsx)("p", {
                    children: e
                }),
                blockquote: ({
                    children: e
                }) => (0, t.jsx)("blockquote", {
                    children: e
                }),
                h1: ({
                    children: e
                }) => (0, t.jsx)("h1", {
                    children: e
                }),
                h2: ({
                    children: e
                }) => (0, t.jsx)("h2", {
                    children: e
                }),
                h3: ({
                    children: e
                }) => (0, t.jsx)("h3", {
                    children: e
                }),
                h4: ({
                    children: e
                }) => (0, t.jsx)("h4", {
                    children: e
                }),
                h5: ({
                    children: e
                }) => (0, t.jsx)("h5", {
                    children: e
                }),
                h6: ({
                    children: e
                }) => (0, t.jsx)("h6", {
                    children: e
                })
            },
            marks: {
                em: ({
                    children: e
                }) => (0, t.jsx)("em", {
                    children: e
                }),
                strong: ({
                    children: e
                }) => (0, t.jsx)("strong", {
                    children: e
                }),
                code: ({
                    children: e
                }) => (0, t.jsx)("code", {
                    children: e
                }),
                underline: ({
                    children: e
                }) => (0, t.jsx)("span", {
                    style: f,
                    children: e
                }),
                "strike-through": ({
                    children: e
                }) => (0, t.jsx)("del", {
                    children: e
                }),
                link: ({
                    children: e,
                    value: r
                }) => (0, t.jsx)("a", {
                    href: null == r ? void 0 : r.href,
                    children: e
                })
            },
            list: {
                number: ({
                    children: e
                }) => (0, t.jsx)("ol", {
                    children: e
                }),
                bullet: ({
                    children: e
                }) => (0, t.jsx)("ul", {
                    children: e
                })
            },
            listItem: ({
                children: e
            }) => (0, t.jsx)("li", {
                children: e
            }),
            hardBreak: () => (0, t.jsx)("br", {}),
            unknownType: ({
                value: e,
                isInline: r
            }) => {
                let i = y(e._type);
                return r ? (0, t.jsx)("span", {
                    style: h,
                    children: i
                }) : (0, t.jsx)("div", {
                    style: h,
                    children: i
                })
            },
            unknownMark: ({
                markType: e,
                children: r
            }) => (0, t.jsx)("span", {
                className: `unknown__pt__mark__${e}`,
                children: r
            }),
            unknownList: ({
                children: e
            }) => (0, t.jsx)("ul", {
                children: e
            }),
            unknownListItem: ({
                children: e
            }) => (0, t.jsx)("li", {
                children: e
            }),
            unknownBlockStyle: ({
                children: e
            }) => (0, t.jsx)("p", {
                children: e
            })
        };

    function v(e, t, r) {
        let i = t[r],
            n = e[r];
        return "function" == typeof i || i && "function" == typeof n ? i : i ? {
            ...n,
            ...i
        } : n
    }

    function b(e) {
        let {
            node: t,
            index: i,
            isInline: n,
            renderNode: s
        } = e, l = (function(e) {
            var t;
            let {
                children: i
            } = e, n = e.markDefs ?? [];
            if (!i || !i.length) return [];
            let s = i.map(d),
                l = {
                    _type: "@span",
                    children: [],
                    markType: "<unknown>"
                },
                a = [l];
            for (let e = 0; e < i.length; e++) {
                let l = i[e];
                if (!l) continue;
                let o = s[e] || [],
                    d = 1;
                if (a.length > 1)
                    for (; d < a.length; d++) {
                        let e = (null == (t = a[d]) ? void 0 : t.markKey) || "",
                            r = o.indexOf(e);
                        if (-1 === r) break;
                        o.splice(r, 1)
                    }
                let c = (a = a.slice(0, d))[a.length - 1];
                if (c) {
                    for (let e of o) {
                        let t = null == n ? void 0 : n.find(t => t._key === e),
                            r = t ? t._type : e,
                            i = {
                                _type: "@span",
                                _key: l._key,
                                children: [],
                                markDef: t,
                                markType: r,
                                markKey: e
                            };
                        c.children.push(i), a.push(i), c = i
                    }
                    if (r(l)) {
                        let e = l.text.split(`
`);
                        for (let t = e.length; t-- > 1;) e.splice(t, 0, `
`);
                        c.children = c.children.concat(e.map(e => ({
                            _type: "@text",
                            text: e
                        })))
                    } else c.children = c.children.concat(l)
                }
            }
            return l.children
        })(t).map((e, t) => s({
            node: e,
            isInline: !0,
            index: t,
            renderNode: s
        }));
        return {
            _key: t._key || `block-${i}`,
            children: l,
            index: i,
            isInline: n,
            node: t
        }
    }

    function k() {}
    e.s(["PortableText", 0, function({
        value: e,
        components: r,
        listNestingMode: o,
        onMissingComponent: d = x
    }) {
        let f = d || k,
            h = function(e, t) {
                let r, i = [];
                for (let a = 0; a < e.length; a++) {
                    let o = e[a];
                    if (o) {
                        var s, l;
                        if (!n(o)) {
                            i.push(o), r = void 0;
                            continue
                        }
                        if (!r) {
                            r = c(o, a, t), i.push(r);
                            continue
                        }
                        if (s = o, l = r, (s.level || 1) === l.level && s.listItem === l.listItem) {
                            r.children.push(o);
                            continue
                        }
                        if ((o.level || 1) > r.level) {
                            let e = c(o, a, t);
                            if ("html" === t) {
                                let t = r.children[r.children.length - 1],
                                    i = {
                                        ...t,
                                        children: [...t.children, e]
                                    };
                                r.children[r.children.length - 1] = i
                            } else r.children.push(e);
                            r = e;
                            continue
                        }
                        if ((o.level || 1) < r.level) {
                            let e = i[i.length - 1],
                                n = e && u(e, o);
                            if (n) {
                                (r = n).children.push(o);
                                continue
                            }
                            r = c(o, a, t), i.push(r);
                            continue
                        }
                        if (o.listItem !== r.listItem) {
                            let e = i[i.length - 1],
                                n = e && u(e, {
                                    level: o.level || 1
                                });
                            if (n && n.listItem === o.listItem) {
                                (r = n).children.push(o);
                                continue
                            }
                            r = c(o, a, t), i.push(r);
                            continue
                        }
                        console.warn("Unknown state encountered for block", o), i.push(o)
                    }
                }
                return i
            }(Array.isArray(e) ? e : [e], o || "html"),
            j = (0, m.useMemo)(() => r ? function(e, t) {
                let {
                    block: r,
                    list: i,
                    listItem: n,
                    marks: s,
                    types: l,
                    ...a
                } = t;
                return {
                    ...e,
                    block: v(e, t, "block"),
                    list: v(e, t, "list"),
                    listItem: v(e, t, "listItem"),
                    marks: v(e, t, "marks"),
                    types: v(e, t, "types"),
                    ...a
                }
            }(g, r) : g, [r]),
            w = (0, m.useMemo)(() => {
                var e, r;
                return e = j, r = f,
                    function o(d) {
                        var c, u, m, f, x, h, g, v;
                        let k, j, {
                                node: w,
                                index: P,
                                isInline: I
                            } = d,
                            S = w._key || `node-${P}`;
                        return s(w) ? function(i, n, s) {
                            let l = i.children.map((e, t) => o({
                                    node: e._key ? e : {
                                        ...e,
                                        _key: `li-${n}-${t}`
                                    },
                                    index: t,
                                    isInline: !1
                                })),
                                a = e.list,
                                d = ("function" == typeof a ? a : a[i.listItem]) || e.unknownList;
                            if (d === e.unknownList) {
                                let e = i.listItem || "bullet";
                                r(p(`list style "${e}"`, "list"), {
                                    nodeType: "listStyle",
                                    type: e
                                })
                            }
                            return (0, t.jsx)(d, {
                                value: i,
                                index: n,
                                isInline: !1,
                                renderNode: o,
                                children: l
                            }, s)
                        }(w, P, S) : n(w) ? function(i, n, s) {
                            let l = b({
                                    node: i,
                                    index: n,
                                    isInline: !1,
                                    renderNode: o
                                }),
                                a = e.listItem,
                                d = ("function" == typeof a ? a : a[i.listItem]) || e.unknownListItem;
                            if (d === e.unknownListItem) {
                                let e = i.listItem || "bullet";
                                r(p(`list item style "${e}"`, "listItem"), {
                                    type: e,
                                    nodeType: "listItemStyle"
                                })
                            }
                            let c = l.children;
                            if (i.style && "normal" !== i.style) {
                                let {
                                    listItem: e,
                                    ...t
                                } = i;
                                c = o({
                                    node: t,
                                    index: n,
                                    isInline: !1
                                })
                            }
                            return (0, t.jsx)(d, {
                                value: i,
                                index: n,
                                isInline: !1,
                                renderNode: o,
                                children: c
                            }, s)
                        }(w, P, S) : l(w) ? function(i, n) {
                            let {
                                markDef: s,
                                markType: d,
                                markKey: c
                            } = i, u = e.marks[d] || e.unknownMark, m = i.children.map((e, t) => o({
                                node: e,
                                index: t,
                                isInline: !0
                            }));
                            return u === e.unknownMark && r(p(`mark type "${d}"`, "marks"), {
                                nodeType: "mark",
                                type: d
                            }), (0, t.jsx)(u, {
                                text: function e(t) {
                                    let r = "";
                                    return t.children.forEach(t => {
                                        a(t) ? r += t.text : l(t) && (r += e(t))
                                    }), r
                                }(i),
                                value: s,
                                markType: d,
                                markKey: c,
                                renderNode: o,
                                children: m
                            }, n)
                        }(w, S) : w._type in e.types ? (c = w, u = P, m = S, f = I, (k = e.types[c._type]) ? (0, t.jsx)(k, {
                            value: c,
                            isInline: f,
                            index: u,
                            renderNode: o
                        }, m) : null) : i(w) ? function(i, n, s, l) {
                            let {
                                _key: a,
                                ...d
                            } = b({
                                node: i,
                                index: n,
                                isInline: l,
                                renderNode: o
                            }), c = d.node.style || "normal", u = ("function" == typeof e.block ? e.block : e.block[c]) || e.unknownBlockStyle;
                            return u === e.unknownBlockStyle && r(p(`block style "${c}"`, "block"), {
                                nodeType: "blockStyle",
                                type: c
                            }), (0, t.jsx)(u, {
                                ...d,
                                value: d.node,
                                renderNode: o
                            }, s)
                        }(w, P, S, I) : a(w) ? function(r, i) {
                            if (r.text === `
`) {
                                let r = e.hardBreak;
                                return r ? (0, t.jsx)(r, {}, i) : `
`
                            }
                            return r.text
                        }(w, S) : (x = w, h = P, g = S, v = I, r(y(x._type), {
                            nodeType: "block",
                            type: x._type
                        }), j = e.unknownType, (0, t.jsx)(j, {
                            value: x,
                            isInline: v,
                            index: h,
                            renderNode: o
                        }, g))
                    }
            }, [j, f]),
            P = h.map((e, t) => w({
                node: e,
                index: t,
                isInline: !1,
                renderNode: w
            }));
        return (0, t.jsx)(t.Fragment, {
            children: P
        })
    }], 722990)
}, 685740, e => {
    "use strict";
    var t = e.i(679933),
        r = e.i(776050),
        i = e.i(429305),
        n = e.i(513485),
        s = e.i(869049),
        l = e.i(860700),
        a = e.i(629959),
        o = e.i(823512),
        d = e.i(185559),
        c = e.i(409781);

    function u(e = !0) {
        let t = (0, o.useId)(),
            [r, i] = function(e = !0) {
                let [t, r] = (0, c.useState)(e), i = (0, c.useRef)(!1), n = (0, c.useCallback)(e => {
                    i.current = !0, r(!!e)
                }, []);
                return (0, d.useLayoutEffect)(() => {
                    i.current || r(!1)
                }, []), [n, t]
            }(e);
        return {
            id: i ? t : void 0,
            ref: r
        }
    }
    var m = e.i(251635);
    e.s(["useCheckbox", 0, function(e, o, d) {
        let {
            labelProps: f,
            inputProps: p,
            descriptionProps: y,
            errorMessageProps: x,
            isSelected: h,
            isPressed: g,
            isDisabled: v,
            isReadOnly: b,
            isInvalid: k,
            validationErrors: j,
            validationDetails: w
        } = function(e, o, d) {
            let {
                isDisabled: f = !1,
                isReadOnly: p = !1,
                value: y,
                name: x,
                form: h,
                children: g,
                isRequired: v,
                validationBehavior: b = "aria",
                "aria-label": k,
                "aria-labelledby": j,
                "aria-describedby": w,
                onPressStart: P,
                onPressEnd: I,
                onPressChange: S,
                onPress: _,
                onPressUp: F,
                onClick: O
            } = e, N = (0, m.useFormValidationState)({
                ...e,
                value: o.isSelected
            }), {
                isInvalid: C,
                validationErrors: M,
                validationDetails: T
            } = N.displayValidation;
            (0, l.useFormValidation)(e, N, d);
            let {
                pressProps: D,
                isPressed: R
            } = (0, a.usePress)({
                onPressStart: P,
                onPressEnd: I,
                onPressChange: S,
                onPress: _,
                onPressUp: F,
                onClick: O,
                isDisabled: f
            }), [E, A] = (0, c.useState)(!1), {
                pressProps: q
            } = (0, a.usePress)({
                onPressStart(e) {
                    "keyboard" === e.pointerType || "virtual" === e.pointerType ? e.continuePropagation() : (P?.(e), S?.(!0), A(!0))
                },
                onPressEnd(e) {
                    "keyboard" === e.pointerType || "virtual" === e.pointerType ? e.continuePropagation() : (I?.(e), S?.(!1), A(!1))
                },
                onPressUp(e) {
                    "keyboard" === e.pointerType || "virtual" === e.pointerType ? e.continuePropagation() : F?.(e)
                },
                onClick: O,
                onPress(t) {
                    if ("keyboard" === t.pointerType || "virtual" === t.pointerType) return void t.continuePropagation();
                    _?.(t), o.toggle(), d.current?.focus();
                    let {
                        [m.privateValidationStateProp]: r
                    } = e, {
                        commitValidation: i
                    } = r || N;
                    i()
                },
                isDisabled: f || p
            }), {
                focusableProps: L
            } = (0, n.useFocusable)(e, d), $ = (0, i.mergeProps)(D, L), B = (0, t.filterDOMProps)(e, {
                labelable: !0
            });
            (0, s.useFormReset)(d, o.defaultSelected, o.setSelected);
            let U = u(),
                G = u();
            return {
                labelProps: (0, i.mergeProps)(q, {
                    onClick: e => e.preventDefault()
                }),
                inputProps: (0, i.mergeProps)(B, {
                    checked: o.isSelected,
                    "aria-required": v && "aria" === b || void 0,
                    required: v && "native" === b,
                    "aria-invalid": C || "invalid" === e.validationState || void 0,
                    "aria-errormessage": e["aria-errormessage"],
                    "aria-controls": e["aria-controls"],
                    "aria-readonly": p || void 0,
                    "aria-describedby": [U.id, G.id, w].filter(Boolean).join(" ") || void 0,
                    onChange: e => {
                        e.stopPropagation(), o.setSelected((0, r.getEventTarget)(e).checked)
                    },
                    disabled: f,
                    ...null == y ? {} : {
                        value: y
                    },
                    name: x,
                    form: h,
                    type: "checkbox",
                    ...$
                }),
                descriptionProps: U,
                errorMessageProps: G,
                isSelected: o.isSelected,
                isPressed: R || E,
                isDisabled: f,
                isReadOnly: p,
                isInvalid: C || "invalid" === e.validationState,
                validationErrors: M,
                validationDetails: T
            }
        }(e, o, d), {
            isIndeterminate: P
        } = e;
        return (0, c.useEffect)(() => {
            d.current && (d.current.indeterminate = !!P)
        }), {
            labelProps: (0, i.mergeProps)(f, (0, c.useMemo)(() => ({
                onMouseDown: e => e.preventDefault()
            }), [])),
            inputProps: p,
            descriptionProps: y,
            errorMessageProps: x,
            isSelected: h,
            isPressed: g,
            isDisabled: v,
            isReadOnly: b,
            isInvalid: k,
            validationErrors: j,
            validationDetails: w
        }
    }], 685740)
}, 590553, e => {
    "use strict";
    var t = e.i(803258),
        r = e.i(409781);
    e.s(["useToggleState", 0, function(e = {}) {
        let {
            isReadOnly: i
        } = e, [n, s] = (0, t.useControlledState)(e.isSelected, e.defaultSelected || !1, e.onChange), [l] = (0, r.useState)(n);
        return {
            isSelected: n,
            defaultSelected: e.defaultSelected ?? l,
            setSelected: function(e) {
                i || s(e)
            },
            toggle: function() {
                i || s(!n)
            }
        }
    }])
}, 363737, 873749, e => {
    "use strict";
    var t = e.i(785328),
        r = e.i(409781),
        i = e.i(513976),
        n = e.i(666747),
        s = e.i(419476),
        l = e.i(429305),
        a = e.i(690910);

    function o(e, t, o) {
        let {
            overlayProps: d,
            underlayProps: c
        } = (0, s.useOverlay)({
            ...e,
            isOpen: t.isOpen,
            onClose: t.close
        }, o);
        return (0, a.usePreventScroll)({
            isDisabled: !t.isOpen
        }), (0, i.useOverlayFocusContain)(), (0, r.useEffect)(() => {
            if (t.isOpen && o.current) return (0, n.ariaHideOutside)([o.current], {
                shouldUseInert: !0
            })
        }, [t.isOpen, o]), {
            modalProps: (0, l.mergeProps)(d),
            underlayProps: c
        }
    }
    e.s(["useModalOverlay", 0, o], 873749);
    var d = e.i(468689),
        c = e.i(512985),
        u = e.i(749583);
    let m = ({
            state: e,
            children: n,
            ...s
        }) => {
            let l = (0, r.useRef)(null),
                {
                    modalProps: a,
                    underlayProps: d
                } = o({
                    ...s
                }, e, l);
            return (0, r.useEffect)(() => {
                e.isOpen && l.current?.querySelector("div")?.focus()
            }, [e.isOpen]), (0, t.jsx)(i.Overlay, {
                shouldContainFocus: !0,
                "data-sentry-element": "Overlay",
                "data-sentry-component": "ModalOverlay",
                "data-sentry-source-file": "Modal.tsx",
                children: (0, t.jsx)("div", {
                    className: "fixed top-0 right-0 bottom-0 left-0 z-[60] flex items-start justify-center overflow-hidden bg-gray-500/50",
                    ...d,
                    children: (0, t.jsx)("div", {
                        ref: l,
                        ...a,
                        className: "contents",
                        children: n
                    })
                })
            })
        },
        f = ({
            actionLabel: e,
            children: i,
            showTriggerButton: n = !0,
            ...s
        }) => {
            let l = (0, c.useOverlayTriggerState)({
                    ...s
                }),
                {
                    triggerProps: a,
                    overlayProps: o
                } = (0, d.useOverlayTrigger)({
                    type: "dialog"
                }, l);
            return (0, t.jsxs)(t.Fragment, {
                children: [n && (0, t.jsx)(u.default, {
                    rounded: !0,
                    hasArrow: !0,
                    ...a,
                    children: e
                }), l.isOpen && (0, t.jsx)(m, {
                    state: l,
                    ...s,
                    isDismissable: !0,
                    children: "function" == typeof i ? (0, r.cloneElement)(i(l.close), o) : (0, r.cloneElement)(i, o)
                })]
            })
        };
    f.Layout = ({
        children: e,
        modal: r
    }) => (0, t.jsxs)("div", {
        className: "flex h-screen max-w-[600px] flex-col overflow-scroll rounded-xl bg-white p-10 sm:min-w-[600px] md:my-20 md:h-3/4 [&>*]:text-black",
        tabIndex: -1,
        "data-sentry-component": "Layout",
        "data-sentry-source-file": "Layout.tsx",
        children: [(0, t.jsx)("h4", {
            className: "mb-4 text-2xl leading-8 font-medium",
            children: r.title
        }), (0, t.jsx)("p", {
            className: "mb-8 text-base leading-5 font-medium",
            children: r.description
        }), e]
    }), e.s(["default", 0, f], 363737)
}, 805518, e => {
    "use strict";
    var t = e.i(785328),
        r = e.i(409781),
        i = e.i(722978),
        n = e.i(838031);
    let s = (0, r.forwardRef)(function({
        children: e,
        className: r = ""
    }, s) {
        let l = (0, n.useObjectRef)(s),
            a = (0, i.default)("text", r);
        return (0, t.jsx)("div", {
            ref: l,
            className: a,
            children: e
        })
    });
    e.s(["default", 0, s], 805518)
}]);

//# debugId=9f60b839-be04-b35a-5868-586bd418d906