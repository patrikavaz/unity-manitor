;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "60da4d3c-0e1c-f24e-b73b-e92af19b3d94")
    } catch (e) {}
}();
(() => {
    "use strict";
    (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 4390, 201763, 570994, e => {
        var t = e.i(167358),
            r = e.i(495056),
            n = e.i(127873),
            i = e.i(194485),
            s = e.i(722978),
            l = e.i(825455),
            a = e.i(717714);
        let o = ({
            keyFigures: e,
            nested: r = !1,
            theme: i = "light"
        }) => {
            let l = (0, s.q)("container col-span-12 pt-16 grid grid-cols-12 gap-2 ", {
                "py-16": !r
            });
            return (0, t.jsx)("div", {
                className: "dark" === i ? "bg-black text-white" : "",
                "data-sentry-component": "KeyFigures",
                "data-sentry-source-file": "KeyFigures.tsx",
                children: (0, t.jsx)("div", {
                    className: l,
                    children: e?.map((l, a) => {
                        let {
                            value: o,
                            label: d
                        } = l, c = (0, s.q)("col-span-12 flex rounded-md items-center gap-2 px-4 py-2 filter md:p-4 lg:col-span-4 xl:p-6", {
                            "backdrop-blur-lg": r && "dark" !== i,
                            "bg-gray-900 dark:bg-black": "dark" === i,
                            "bg-gray-100 dark:bg-gray-900 text-gray-800": !r && "dark" !== i,
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
                                children: (0, t.jsx)(n.default, {
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
        e.s(["f", 0, o], 201763);
        var d = e.i(749583);
        let c = (0, i.default)(() => e.A(685851), {
                loadableGenerated: {
                    modules: [204748]
                },
                ssr: !1
            }),
            u = ({
                eyebrow: e,
                title: i,
                titleSize: u = "medium",
                description: f,
                backgroundImage: m,
                actions: p = [],
                keyFigures: y,
                video: h,
                mention: x,
                fullScreen: v = !0
            }) => {
                let g = (0, r.useRef)(null),
                    b = (0, l.f)(g, {
                        once: !0
                    }),
                    k = (0, a.f)(),
                    [j, w] = (0, r.useState)(!1),
                    I = (0, s.U)(`font-nohemi mt-24 my-4 ${"small"===u?"mb-6":"mb-8"}`, {
                        "loco-text-heading-xl": "medium" === u,
                        "loco-text-headline": "large" === u,
                        "loco-text-heading-lg": "small" === u
                    }),
                    _ = (0, s.U)("object-cover transition-opacity duration-1000 opacity-100", {
                        "opacity-0": j
                    });
                return (0, t.jsxs)("section", {
                    ref: g,
                    className: "dark relative",
                    "data-sentry-component": "Headliner",
                    "data-sentry-source-file": "Headliner.tsx",
                    children: [m && (0, t.jsx)(n.default, {
                        src: m.src,
                        placeholder: "blur",
                        blurDataURL: m.placeholder,
                        fill: !0,
                        alt: "",
                        className: _,
                        sizes: "100vw"
                    }), b && !k && h && (0, t.jsx)(c, {
                        url: h || "",
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
                            backgroundImage: v ? `
    linear-gradient(180deg, rgba(1, 1, 1, 0.00) 45.08%, rgba(1, 1, 1, 0.00) 49.56%, rgba(1, 1, 1, 0.01) 53.84%, rgba(1, 1, 1, 0.02) 57.92%, rgba(1, 1, 1, 0.04) 61.84%, rgba(1, 1, 1, 0.06) 65.62%, rgba(1, 1, 1, 0.09) 69.27%, rgba(1, 1, 1, 0.12) 72.82%, rgba(1, 1, 1, 0.16) 76.29%, rgba(1, 1, 1, 0.20) 79.7%, rgba(1, 1, 1, 0.24) 83.06%, rgba(1, 1, 1, 0.29) 86.41%, rgba(1, 1, 1, 0.34) 89.75%, rgba(1, 1, 1, 0.39) 93.12%, rgba(1, 1, 1, 0.44) 96.53%, rgba(1, 1, 1, 0.50) 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)` : ""
                        }
                    }), (0, t.jsxs)("div", {
                        className: `relative container flex ${v&&"min-h-[calc(100vh-4rem)]"} flex-col py-8 text-white`,
                        children: [(0, t.jsx)("div", {
                            className: "flex grow flex-col justify-stretch",
                            children: (0, t.jsxs)("div", {
                                className: "flex h-full grow flex-col items-center justify-center text-center",
                                children: [e && (0, t.jsx)("div", {
                                    className: "loco-caption-lg-semibold",
                                    children: e
                                }), (0, t.jsx)("h1", {
                                    className: I,
                                    children: i
                                }), f && (0, t.jsx)("div", {
                                    className: "loco-caption-sm-semibold mt-5",
                                    children: f
                                }), p && (0, t.jsx)("div", {
                                    className: "mt-6 flex flex-wrap items-center justify-center gap-4",
                                    children: p.map((e, r) => {
                                        if (e.link) return (0, t.jsx)(d.f, {
                                            rounded: !0,
                                            hasArrow: !0,
                                            href: e.link.href,
                                            target: e.link.target,
                                            variant: 0 === r ? "primary" : "secondary",
                                            children: e.title
                                        }, `headliner-action-link-${e.title}-${r}`);
                                        if (e.form) {
                                            let n = {
                                                ...e.form.form,
                                                ...e.form.webinarFormParametersContent,
                                                extraFields: e.form.extraFields
                                            };
                                            return (0, t.jsx)("div", {
                                                children: e.form.renderModal({
                                                    label: e.title,
                                                    form: n
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
                    }), x && (0, t.jsx)("div", {
                        className: "loco-text-body-sm z-10 w-full px-4 py-4 text-center opacity-70 md:absolute md:top-10 md:right-8 md:left-auto md:w-auto md:px-0 md:py-8",
                        children: x
                    })]
                })
            };
        e.s(["f", 0, u], 570994);
        var f = e.i(115219);
        e.s(["default", 0, ({
            actions: e = [],
            brandfolder: n,
            mention: i,
            eyebrow: s,
            title: l,
            titleSize: a,
            description: o,
            image: d,
            keyFigures: c,
            isHidden: m
        }) => {
            let {
                mapFormActions: p
            } = (0, f.Y)(e), y = p(e), h = (0, r.useMemo)(() => (c?.data ?? []).map(e => e?.value?.text ? {
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
                children: !m && (0, t.jsx)(u, {
                    actions: y,
                    mention: i || "",
                    eyebrow: s || "",
                    title: l || "",
                    titleSize: "small" === a ? "small" : "large" === a ? "large" : "medium",
                    description: o || "",
                    backgroundImage: {
                        src: d?.asset.url || "",
                        placeholder: d?.asset.metadata?.lqip || ""
                    },
                    keyFigures: h,
                    video: n?.muxHLSURL || ""
                })
            })
        }], 4390)
    }, 436324, 531469, e => {
        var t = e.i(167358),
            r = e.i(495056),
            n = e.i(749583),
            i = e.i(222061),
            s = e.i(829483),
            l = e.i(662380),
            a = e.i(179695),
            o = e.i(613821),
            d = e.i(635384),
            c = e.i(396241),
            u = e.i(309578),
            f = e.i(575146),
            m = e.i(239273),
            p = e.i(869324),
            y = e.i(497492);
        let h = ({
            form: e,
            isGrowForm: t,
            onSuccess: r,
            close: n,
            onShowSuccessMessage: i
        }) => {
            let s = (0, y.j)(["sfcid", "sflsa", "sfit"], t),
                l = (0, y.$)(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"], !0),
                {
                    setFormSubmitted: a
                } = (0, f.useGateContext)(),
                [o] = (0, m.f)("ELOQUA");
            return (d, c, f) => {
                let m = t ? (({
                        emailConfirmation: e,
                        ghandler: t,
                        gcid: r,
                        growDivision: n,
                        growDepartment: i
                    }) => ({
                        emailConfirmation: e,
                        ghandler: t,
                        gcid: r,
                        growDivision: n,
                        growDepartment: i,
                        grow: !0
                    }))(e?.sfdcIntegration || {}) : e?.sfdcIntegration,
                    h = e?.fields ? (0, y._)(e.fields, c, f) : {};
                return d.elqCustomerGUID = o?.split("&")?.[0]?.split("GUID=")?.[1] || "", d = {
                    ...d,
                    ...m,
                    ...h,
                    ...l,
                    ...s,
                    ...e?.extraFields
                }, fetch("https://create.unity.com/e/f2", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: new URLSearchParams((0, y.T)(d)).toString()
                }).then(() => {
                    (0, p.U)({
                        properties: {
                            form_action: "submitted",
                            form_id: d.elqFormID,
                            form_name: d.elqFormName,
                            form_customer_id: d.elqCustomerGUID
                        }
                    }), a(!0), r?.(), e?.successMessage?.showSuccessMessage ? i?.() : n?.()
                }).catch(e => u.y(e))
            }
        };
        e.s(["f", 0, h], 531469);
        var x = e.i(272351);
        e.s(["f", 0, ({
            form: e,
            close: u,
            isGrowForm: f
        }) => {
            let [m, p] = (0, r.useState)(!1), {
                handleSubmit: y,
                control: v,
                setValue: g,
                watch: b,
                getValues: k,
                formState: {
                    isSubmitting: j
                }
            } = (0, d.G)({
                reValidateMode: "onChange",
                mode: "onChange"
            }), w = b(c.Q), I = h({
                form: e,
                isGrowForm: f,
                close: u,
                onShowSuccessMessage: () => p(!0)
            });
            return m && e?.successMessage?.showSuccessMessage ? (0, t.jsxs)("div", {
                className: "flex flex-col items-center justify-center p-8 text-center",
                children: [e.successMessage.title && (0, t.jsx)("h3", {
                    className: "mb-4 text-xl font-semibold text-gray-900",
                    children: e.successMessage.title
                }), e.successMessage.description && (0, t.jsx)("p", {
                    className: "mb-6 text-gray-600",
                    children: e.successMessage.description
                }), e?.successMessage?.closeButtonText && (0, t.jsx)(n.f, {
                    onPress: u,
                    className: "[&>div>span]:!text-black hover:[&>div>span]:!underline",
                    variant: "secondary",
                    children: e?.successMessage?.closeButtonText
                })]
            }) : (0, t.jsxs)(o.f, {
                onSubmit: y(t => {
                    if (!(0, x.S)(e?.fields, k, w)) return I(t, k, w)
                }),
                "data-sentry-element": "Form",
                "data-sentry-component": "FormBuilder",
                "data-sentry-source-file": "FormsBuilder.tsx",
                children: [(0, t.jsx)("div", {
                    className: "flex flex-col [&>*]:mt-3",
                    children: e?.fields && e?.fields.map((e, r) => {
                        switch (e.formField) {
                            case "input":
                                return (0, t.jsx)(i.f, {
                                    ...e,
                                    control: v,
                                    countryCode: w
                                }, r);
                            case "checkbox":
                                return (0, t.jsx)(s.f, {
                                    countryCode: w,
                                    ...e,
                                    control: v
                                }, r);
                            case "dropdown":
                                return (0, t.jsx)(l.f, {
                                    countryCode: w,
                                    ...e,
                                    control: v,
                                    setValue: g
                                }, r);
                            case "richText":
                                return (0, t.jsx)(a.f, {
                                    ...e,
                                    control: v,
                                    countryCode: w
                                }, r)
                        }
                    })
                }), e?.actions && (0, t.jsxs)("div", {
                    className: "mt-10 border-t border-t-gray-200 pt-6",
                    children: [e?.actions?.primaryActionText && (0, t.jsx)(n.f, {
                        type: "submit",
                        rounded: !0,
                        hasArrow: !0,
                        disabled: j,
                        children: e?.actions?.primaryActionText
                    }), e?.actions?.secondaryActionText && (0, t.jsx)(n.f, {
                        onPress: u,
                        className: "[&>div>span]:!text-black hover:[&>div>span]:!underline",
                        variant: "secondary",
                        children: e?.actions?.secondaryActionText
                    })]
                })]
            })
        }], 436324)
    }, 575146, e => {
        var t = e.i(167358),
            r = e.i(495056);
        let n = (0, r.createContext)({
            isGated: !1,
            setIsGated: () => {},
            formSubmitted: !1,
            setFormSubmitted: () => {}
        });
        e.s(["GateContextProvider", 0, ({
            children: e
        }) => {
            let [i, s] = (0, r.useState)(!1), [l, a] = (0, r.useState)(!1);
            return (0, t.jsx)(n.Provider, {
                value: {
                    isGated: l,
                    setIsGated: a,
                    formSubmitted: i,
                    setFormSubmitted: s
                },
                "data-sentry-element": "GateContext.Provider",
                "data-sentry-component": "GateContextProvider",
                "data-sentry-source-file": "GateContext.tsx",
                children: e
            })
        }, "useGateContext", 0, () => (0, r.useContext)(n)])
    }, 239273, e => {
        var t = e.i(495056);
        e.s(["f", 0, e => {
            let [r, n] = (0, t.useState)("");
            return (0, t.useEffect)(() => {
                n(document.cookie)
            }, []), [(0, t.useMemo)(() => r?.split("; ")?.find(t => t.includes(e)), [r, e])]
        }])
    }, 115219, e => {
        var t = e.i(167358),
            r = e.i(363737),
            n = e.i(436324),
            i = e.i(869324),
            s = e.i(537251);
        e.s(["v", 0, function(e, t) {
            let r;
            if (!t || !e?.fields) return e;
            try {
                r = JSON.parse(t)
            } catch {
                return e
            }
            if (!r) return e;
            let n = [...e.fields];
            for (let e of Object.keys(r)) {
                let t = n.findIndex(t => t.formFieldId === e);
                if (t < 0) continue;
                let i = r[e];
                null != i.isRequired && (n[t] = {
                    ...n[t],
                    isRequired: i.isRequired
                }), i.isHidden && n.splice(t, 1)
            }
            return {
                ...e,
                fields: n
            }
        }, "D", 0, function(e) {
            (0, i.U)({
                properties: {
                    form_action: "presented",
                    form_id: e.fields?.find(e => "elqFormID" === e.formFieldId)?.defaultValue,
                    form_name: e.fields?.find(e => "elqFormName" === e.formFieldId)?.defaultValue
                }
            })
        }, "Y", 0, e => {
            let {
                extraFields: l
            } = (0, s.f)(), a = ({
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
                return (0, t.jsx)(r.f, {
                    actionLabel: s,
                    onOpenChange: e => {
                        e && (0, i.U)({
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
                    children: e => (0, t.jsx)(r.f.Layout, {
                        modal: {
                            title: l.title,
                            description: l.description
                        },
                        children: l && (0, t.jsx)(n.f, {
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
        var t = e.i(495056);
        e.s(["f", 0, (e = 768) => {
            let [r, n] = (0, t.useState)(window.innerWidth <= e);
            return (0, t.useEffect)(() => {
                let t = () => {
                    n(window.innerWidth <= e)
                };
                return window.addEventListener("resize", t), () => window.removeEventListener("resize", t)
            }, []), r
        }])
    }, 649051, e => {
        e.s(["f", 0, e => {
            let t;
            try {
                t = window[e];
                let r = "__storage_test__";
                return t.setItem(r, r), t.removeItem(r), !0
            } catch (e) {
                return e instanceof DOMException && "QuotaExceededError" === e.name && t && 0 !== t.length
            }
        }])
    }, 712598, e => {
        var t = e.i(167358);

        function r(e) {
            return "span" === e._type && "text" in e && "string" == typeof e.text && (typeof e.marks > "u" || Array.isArray(e.marks) && e.marks.every(e => "string" == typeof e))
        }

        function n(e) {
            return "string" == typeof e._type && "@" !== e._type[0] && (!("markDefs" in e) || !e.markDefs || Array.isArray(e.markDefs) && e.markDefs.every(e => "string" == typeof e._key)) && "children" in e && Array.isArray(e.children) && e.children.every(e => "object" == typeof e && "_type" in e)
        }

        function i(e) {
            return n(e) && "listItem" in e && "string" == typeof e.listItem && (typeof e.level > "u" || "number" == typeof e.level)
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

        function d(e, t, n) {
            if (!r(e) || !e.marks || !e.marks.length) return [];
            let i = e.marks.slice(),
                s = {};
            return i.forEach(e => {
                s[e] = 1;
                for (let i = t + 1; i < n.length; i++) {
                    let t = n[i];
                    if (t && r(t) && Array.isArray(t.marks) && -1 !== t.marks.indexOf(e)) s[e]++;
                    else break
                }
            }), i.sort((e, t) => (function(e, t, r) {
                let n = e[t],
                    i = e[r];
                if (n !== i) return i - n;
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
            let n = t.level || 1,
                i = t.listItem || "normal",
                l = "string" == typeof t.listItem;
            if (s(e) && (e.level || 1) === n && l && (e.listItem || "normal") === i) return e;
            if (!("children" in e)) return;
            let a = e.children[e.children.length - 1];
            return a && !r(a) ? u(a, t) : void 0
        }
        var f = e.i(495056);
        let m = {
                textDecoration: "underline"
            },
            p = (e, t) => `[@portabletext/react] Unknown ${e}, specify a component for it in the \`components.${t}\` prop`,
            y = e => p(`block type "${e}"`, "types");

        function h(e) {
            console.warn(e)
        }
        let x = {
                display: "none"
            },
            v = {
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
                        style: m,
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
                    let n = y(e._type);
                    return r ? (0, t.jsx)("span", {
                        style: x,
                        children: n
                    }) : (0, t.jsx)("div", {
                        style: x,
                        children: n
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

        function g(e, t, r) {
            let n = t[r],
                i = e[r];
            return "function" == typeof n || n && "function" == typeof i ? n : n ? {
                ...i,
                ...n
            } : i
        }

        function b(e) {
            let {
                node: t,
                index: n,
                isInline: i,
                renderNode: s
            } = e, l = (function(e) {
                var t;
                let {
                    children: n
                } = e, i = e.markDefs ?? [];
                if (!n || !n.length) return [];
                let s = n.map(d),
                    l = {
                        _type: "@span",
                        children: [],
                        markType: "<unknown>"
                    },
                    a = [l];
                for (let e = 0; e < n.length; e++) {
                    let l = n[e];
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
                            let t = null == i ? void 0 : i.find(t => t._key === e),
                                r = t ? t._type : e,
                                n = {
                                    _type: "@span",
                                    _key: l._key,
                                    children: [],
                                    markDef: t,
                                    markType: r,
                                    markKey: e
                                };
                            c.children.push(n), a.push(n), c = n
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
                _key: t._key || `block-${n}`,
                children: l,
                index: n,
                isInline: i,
                node: t
            }
        }

        function k() {}
        e.s(["f", 0, function({
            value: e,
            components: r,
            listNestingMode: o,
            onMissingComponent: d = h
        }) {
            let m = d || k,
                x = function(e, t) {
                    let r, n = [];
                    for (let a = 0; a < e.length; a++) {
                        let o = e[a];
                        if (o) {
                            var s, l;
                            if (!i(o)) {
                                n.push(o), r = void 0;
                                continue
                            }
                            if (!r) {
                                r = c(o, a, t), n.push(r);
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
                                        n = {
                                            ...t,
                                            children: [...t.children, e]
                                        };
                                    r.children[r.children.length - 1] = n
                                } else r.children.push(e);
                                r = e;
                                continue
                            }
                            if ((o.level || 1) < r.level) {
                                let e = n[n.length - 1],
                                    i = e && u(e, o);
                                if (i) {
                                    (r = i).children.push(o);
                                    continue
                                }
                                r = c(o, a, t), n.push(r);
                                continue
                            }
                            if (o.listItem !== r.listItem) {
                                let e = n[n.length - 1],
                                    i = e && u(e, {
                                        level: o.level || 1
                                    });
                                if (i && i.listItem === o.listItem) {
                                    (r = i).children.push(o);
                                    continue
                                }
                                r = c(o, a, t), n.push(r);
                                continue
                            }
                            console.warn("Unknown state encountered for block", o), n.push(o)
                        }
                    }
                    return n
                }(Array.isArray(e) ? e : [e], o || "html"),
                j = (0, f.useMemo)(() => r ? function(e, t) {
                    let {
                        block: r,
                        list: n,
                        listItem: i,
                        marks: s,
                        types: l,
                        ...a
                    } = t;
                    return {
                        ...e,
                        block: g(e, t, "block"),
                        list: g(e, t, "list"),
                        listItem: g(e, t, "listItem"),
                        marks: g(e, t, "marks"),
                        types: g(e, t, "types"),
                        ...a
                    }
                }(v, r) : v, [r]),
                w = (0, f.useMemo)(() => {
                    var e, r;
                    return e = j, r = m,
                        function o(d) {
                            var c, u, f, m, h, x, v, g;
                            let k, j, {
                                    node: w,
                                    index: I,
                                    isInline: _
                                } = d,
                                P = w._key || `node-${I}`;
                            return s(w) ? function(n, i, s) {
                                let l = n.children.map((e, t) => o({
                                        node: e._key ? e : {
                                            ...e,
                                            _key: `li-${i}-${t}`
                                        },
                                        index: t,
                                        isInline: !1
                                    })),
                                    a = e.list,
                                    d = ("function" == typeof a ? a : a[n.listItem]) || e.unknownList;
                                if (d === e.unknownList) {
                                    let e = n.listItem || "bullet";
                                    r(p(`list style "${e}"`, "list"), {
                                        nodeType: "listStyle",
                                        type: e
                                    })
                                }
                                return (0, t.jsx)(d, {
                                    value: n,
                                    index: i,
                                    isInline: !1,
                                    renderNode: o,
                                    children: l
                                }, s)
                            }(w, I, P) : i(w) ? function(n, i, s) {
                                let l = b({
                                        node: n,
                                        index: i,
                                        isInline: !1,
                                        renderNode: o
                                    }),
                                    a = e.listItem,
                                    d = ("function" == typeof a ? a : a[n.listItem]) || e.unknownListItem;
                                if (d === e.unknownListItem) {
                                    let e = n.listItem || "bullet";
                                    r(p(`list item style "${e}"`, "listItem"), {
                                        type: e,
                                        nodeType: "listItemStyle"
                                    })
                                }
                                let c = l.children;
                                if (n.style && "normal" !== n.style) {
                                    let {
                                        listItem: e,
                                        ...t
                                    } = n;
                                    c = o({
                                        node: t,
                                        index: i,
                                        isInline: !1
                                    })
                                }
                                return (0, t.jsx)(d, {
                                    value: n,
                                    index: i,
                                    isInline: !1,
                                    renderNode: o,
                                    children: c
                                }, s)
                            }(w, I, P) : l(w) ? function(n, i) {
                                let {
                                    markDef: s,
                                    markType: d,
                                    markKey: c
                                } = n, u = e.marks[d] || e.unknownMark, f = n.children.map((e, t) => o({
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
                                    }(n),
                                    value: s,
                                    markType: d,
                                    markKey: c,
                                    renderNode: o,
                                    children: f
                                }, i)
                            }(w, P) : w._type in e.types ? (c = w, u = I, f = P, m = _, (k = e.types[c._type]) ? (0, t.jsx)(k, {
                                value: c,
                                isInline: m,
                                index: u,
                                renderNode: o
                            }, f) : null) : n(w) ? function(n, i, s, l) {
                                let {
                                    _key: a,
                                    ...d
                                } = b({
                                    node: n,
                                    index: i,
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
                            }(w, I, P, _) : a(w) ? function(r, n) {
                                if (r.text === `
`) {
                                    let r = e.hardBreak;
                                    return r ? (0, t.jsx)(r, {}, n) : `
`
                                }
                                return r.text
                            }(w, P) : (h = w, x = I, v = P, g = _, r(y(h._type), {
                                nodeType: "block",
                                type: h._type
                            }), j = e.unknownType, (0, t.jsx)(j, {
                                value: h,
                                isInline: g,
                                index: x,
                                renderNode: o
                            }, v))
                        }
                }, [j, m]),
                I = x.map((e, t) => w({
                    node: e,
                    index: t,
                    isInline: !1,
                    renderNode: w
                }));
            return (0, t.jsx)(t.Fragment, {
                children: I
            })
        }], 712598)
    }, 78192, e => {
        var t = e.i(361610),
            r = e.i(402390),
            n = e.i(996471),
            i = e.i(835349),
            s = e.i(331009),
            l = e.i(571820),
            a = e.i(837345),
            o = e.i(81407),
            d = e.i(708705),
            c = e.i(495056);

        function u(e = !0) {
            let t = (0, o.H)(),
                [r, n] = function(e = !0) {
                    let [t, r] = (0, c.useState)(e), n = (0, c.useRef)(!1), i = (0, c.useCallback)(e => {
                        n.current = !0, r(!!e)
                    }, []);
                    return (0, d.f)(() => {
                        n.current || r(!1)
                    }, []), [i, t]
                }(e);
            return {
                id: n ? t : void 0,
                ref: r
            }
        }
        var f = e.i(556744);
        e.s(["f", 0, function(e, o, d) {
            let {
                labelProps: m,
                inputProps: p,
                descriptionProps: y,
                errorMessageProps: h,
                isSelected: x,
                isPressed: v,
                isDisabled: g,
                isReadOnly: b,
                isInvalid: k,
                validationErrors: j,
                validationDetails: w
            } = function(e, o, d) {
                let {
                    isDisabled: m = !1,
                    isReadOnly: p = !1,
                    value: y,
                    name: h,
                    form: x,
                    children: v,
                    isRequired: g,
                    validationBehavior: b = "aria",
                    "aria-label": k,
                    "aria-labelledby": j,
                    "aria-describedby": w,
                    onPressStart: I,
                    onPressEnd: _,
                    onPressChange: P,
                    onPress: S,
                    onPressUp: N,
                    onClick: C
                } = e, F = (0, f.c)({
                    ...e,
                    value: o.isSelected
                }), {
                    isInvalid: M,
                    validationErrors: D,
                    validationDetails: T
                } = F.displayValidation;
                (0, l.f)(e, F, d);
                let {
                    pressProps: O,
                    isPressed: R
                } = (0, a.f)({
                    onPressStart: I,
                    onPressEnd: _,
                    onPressChange: P,
                    onPress: S,
                    onPressUp: N,
                    onClick: C,
                    isDisabled: m
                }), [q, A] = (0, c.useState)(!1), {
                    pressProps: E
                } = (0, a.f)({
                    onPressStart(e) {
                        "keyboard" === e.pointerType || "virtual" === e.pointerType ? e.continuePropagation() : (I?.(e), P?.(!0), A(!0))
                    },
                    onPressEnd(e) {
                        "keyboard" === e.pointerType || "virtual" === e.pointerType ? e.continuePropagation() : (_?.(e), P?.(!1), A(!1))
                    },
                    onPressUp(e) {
                        "keyboard" === e.pointerType || "virtual" === e.pointerType ? e.continuePropagation() : N?.(e)
                    },
                    onClick: C,
                    onPress(t) {
                        if ("keyboard" === t.pointerType || "virtual" === t.pointerType) return void t.continuePropagation();
                        S?.(t), o.toggle(), d.current?.focus();
                        let {
                            [f.n]: r
                        } = e, {
                            commitValidation: n
                        } = r || F;
                        n()
                    },
                    isDisabled: m || p
                }), {
                    focusableProps: U
                } = (0, i.F)(e, d), L = (0, n.f)(O, U), $ = (0, t.f)(e, {
                    labelable: !0
                });
                (0, s.f)(d, o.defaultSelected, o.setSelected);
                let B = u(),
                    G = u();
                return {
                    labelProps: (0, n.f)(E, {
                        onClick: e => e.preventDefault()
                    }),
                    inputProps: (0, n.f)($, {
                        checked: o.isSelected,
                        "aria-required": g && "aria" === b || void 0,
                        required: g && "native" === b,
                        "aria-invalid": M || "invalid" === e.validationState || void 0,
                        "aria-errormessage": e["aria-errormessage"],
                        "aria-controls": e["aria-controls"],
                        "aria-readonly": p || void 0,
                        "aria-describedby": [B.id, G.id, w].filter(Boolean).join(" ") || void 0,
                        onChange: e => {
                            e.stopPropagation(), o.setSelected((0, r.t)(e).checked)
                        },
                        disabled: m,
                        ...null == y ? {} : {
                            value: y
                        },
                        name: h,
                        form: x,
                        type: "checkbox",
                        ...L
                    }),
                    descriptionProps: B,
                    errorMessageProps: G,
                    isSelected: o.isSelected,
                    isPressed: R || q,
                    isDisabled: m,
                    isReadOnly: p,
                    isInvalid: M || "invalid" === e.validationState,
                    validationErrors: D,
                    validationDetails: T
                }
            }(e, o, d), {
                isIndeterminate: I
            } = e;
            return (0, c.useEffect)(() => {
                d.current && (d.current.indeterminate = !!I)
            }), {
                labelProps: (0, n.f)(m, (0, c.useMemo)(() => ({
                    onMouseDown: e => e.preventDefault()
                }), [])),
                inputProps: p,
                descriptionProps: y,
                errorMessageProps: h,
                isSelected: x,
                isPressed: v,
                isDisabled: g,
                isReadOnly: b,
                isInvalid: k,
                validationErrors: j,
                validationDetails: w
            }
        }], 78192)
    }, 363737, 7343, e => {
        var t = e.i(167358),
            r = e.i(495056),
            n = e.i(952200),
            i = e.i(593067),
            s = e.i(18063),
            l = e.i(996471),
            a = e.i(417500);

        function o(e, t, o) {
            let {
                overlayProps: d,
                underlayProps: c
            } = (0, s.f)({
                ...e,
                isOpen: t.isOpen,
                onClose: t.close
            }, o);
            return (0, a.f)({
                isDisabled: !t.isOpen
            }), (0, n.o)(), (0, r.useEffect)(() => {
                if (t.isOpen && o.current) return (0, i.P)([o.current], {
                    shouldUseInert: !0
                })
            }, [t.isOpen, o]), {
                modalProps: (0, l.f)(d),
                underlayProps: c
            }
        }
        e.s(["f", 0, o], 7343);
        var d = e.i(15541),
            c = e.i(949877),
            u = e.i(749583);
        let f = ({
                state: e,
                children: i,
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
                }, [e.isOpen]), (0, t.jsx)(n.k, {
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
                            children: i
                        })
                    })
                })
            },
            m = ({
                actionLabel: e,
                children: n,
                showTriggerButton: i = !0,
                ...s
            }) => {
                let l = (0, c.f)({
                        ...s
                    }),
                    {
                        triggerProps: a,
                        overlayProps: o
                    } = (0, d.f)({
                        type: "dialog"
                    }, l);
                return (0, t.jsxs)(t.Fragment, {
                    children: [i && (0, t.jsx)(u.f, {
                        rounded: !0,
                        hasArrow: !0,
                        ...a,
                        children: e
                    }), l.isOpen && (0, t.jsx)(f, {
                        state: l,
                        ...s,
                        isDismissable: !0,
                        children: "function" == typeof n ? (0, r.cloneElement)(n(l.close), o) : (0, r.cloneElement)(n, o)
                    })]
                })
            };
        m.Layout = ({
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
        }), e.s(["f", 0, m], 363737)
    }, 805518, e => {
        var t = e.i(167358),
            r = e.i(495056),
            n = e.i(722978),
            i = e.i(199111);
        let s = (0, r.forwardRef)(function({
            children: e,
            className: r = ""
        }, s) {
            let l = (0, i.f)(s),
                a = (0, n.U)("text", r);
            return (0, t.jsx)("div", {
                ref: l,
                className: a,
                children: e
            })
        });
        e.s(["f", 0, s], 805518)
    }])
})();

//# debugId=60da4d3c-0e1c-f24e-b73b-e92af19b3d94