;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "19790a84-00d8-94a6-0544-3c8c981279e6")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, [4390, 201763, 570994, e => {
    var t = e.i(167358),
        r = e.i(495056),
        n = e.i(127873),
        a = e.i(194485),
        l = e.i(722978),
        i = e.i(825455),
        s = e.i(717714);
    let o = ({
        keyFigures: e,
        nested: r = !1,
        theme: a = "light"
    }) => {
        let i = (0, l.q)("container col-span-12 pt-16 grid grid-cols-12 gap-2 ", {
            "py-16": !r
        });
        return (0, t.jsx)("div", {
            className: "dark" === a ? "bg-black text-white" : "",
            "data-sentry-component": "KeyFigures",
            "data-sentry-source-file": "KeyFigures.tsx",
            children: (0, t.jsx)("div", {
                className: i,
                children: e?.map((i, s) => {
                    let {
                        value: o,
                        label: c
                    } = i, d = (0, l.q)("col-span-12 flex rounded-md items-center gap-2 px-4 py-2 filter md:p-4 lg:col-span-4 xl:p-6", {
                        "backdrop-blur-lg": r && "dark" !== a,
                        "bg-gray-900 dark:bg-black": "dark" === a,
                        "bg-gray-100 dark:bg-gray-900 text-gray-800": !r && "dark" !== a,
                        "xl:col-span-3": e?.length === 4
                    });
                    return o?.type === "text" ? (0, t.jsxs)("div", {
                        className: d,
                        children: [(0, t.jsx)("div", {
                            className: "loco-text-heading-sm min-w-[30%] shrink-0 gap-10 pr-4 text-center",
                            children: o.text
                        }), (0, t.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: c
                        })]
                    }, s) : c && o?.type === "icon" && !o.url ? (0, t.jsx)("div", {
                        className: d,
                        children: (0, t.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: c
                        })
                    }, s) : o?.type === "icon" && o.url ? (0, t.jsxs)("div", {
                        className: d,
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
                            children: c
                        })]
                    }, s) : null
                })
            })
        })
    };
    e.s(["f", 0, o], 201763);
    var c = e.i(749583);
    let d = (0, a.default)(() => e.A(685851), {
            loadableGenerated: {
                modules: [204748]
            },
            ssr: !1
        }),
        u = ({
            eyebrow: e,
            title: a,
            titleSize: u = "medium",
            description: f,
            backgroundImage: m,
            actions: p = [],
            keyFigures: h,
            video: x,
            mention: g,
            fullScreen: y = !0
        }) => {
            let v = (0, r.useRef)(null),
                b = (0, i.f)(v, {
                    once: !0
                }),
                k = (0, s.f)(),
                [j, w] = (0, r.useState)(!1),
                C = (0, l.U)(`font-nohemi mt-24 my-4 ${"small"===u?"mb-6":"mb-8"}`, {
                    "loco-text-heading-xl": "medium" === u,
                    "loco-text-headline": "large" === u,
                    "loco-text-heading-lg": "small" === u
                }),
                P = (0, l.U)("object-cover transition-opacity duration-1000 opacity-100", {
                    "opacity-0": j
                });
            return (0, t.jsxs)("section", {
                ref: v,
                className: "dark relative",
                "data-sentry-component": "Headliner",
                "data-sentry-source-file": "Headliner.tsx",
                children: [m && (0, t.jsx)(n.default, {
                    src: m.src,
                    placeholder: "blur",
                    blurDataURL: m.placeholder,
                    fill: !0,
                    alt: "",
                    className: P,
                    sizes: "100vw"
                }), b && !k && x && (0, t.jsx)(d, {
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
                        backgroundImage: y ? `
    linear-gradient(180deg, rgba(1, 1, 1, 0.00) 45.08%, rgba(1, 1, 1, 0.00) 49.56%, rgba(1, 1, 1, 0.01) 53.84%, rgba(1, 1, 1, 0.02) 57.92%, rgba(1, 1, 1, 0.04) 61.84%, rgba(1, 1, 1, 0.06) 65.62%, rgba(1, 1, 1, 0.09) 69.27%, rgba(1, 1, 1, 0.12) 72.82%, rgba(1, 1, 1, 0.16) 76.29%, rgba(1, 1, 1, 0.20) 79.7%, rgba(1, 1, 1, 0.24) 83.06%, rgba(1, 1, 1, 0.29) 86.41%, rgba(1, 1, 1, 0.34) 89.75%, rgba(1, 1, 1, 0.39) 93.12%, rgba(1, 1, 1, 0.44) 96.53%, rgba(1, 1, 1, 0.50) 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)` : ""
                    }
                }), (0, t.jsxs)("div", {
                    className: `relative container flex ${y&&"min-h-[calc(100vh-4rem)]"} flex-col py-8 text-white`,
                    children: [(0, t.jsx)("div", {
                        className: "flex grow flex-col justify-stretch",
                        children: (0, t.jsxs)("div", {
                            className: "flex h-full grow flex-col items-center justify-center text-center",
                            children: [e && (0, t.jsx)("div", {
                                className: "loco-caption-lg-semibold",
                                children: e
                            }), (0, t.jsx)("h1", {
                                className: C,
                                children: a
                            }), f && (0, t.jsx)("div", {
                                className: "loco-caption-sm-semibold mt-5",
                                children: f
                            }), p && (0, t.jsx)("div", {
                                className: "mt-6 flex flex-wrap items-center justify-center gap-4",
                                children: p.map((e, r) => {
                                    if (e.link) return (0, t.jsx)(c.f, {
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
                    }), h && (0, t.jsx)(o, {
                        keyFigures: h,
                        nested: !0
                    })]
                }), g && (0, t.jsx)("div", {
                    className: "loco-text-body-sm z-10 w-full px-4 py-4 text-center opacity-70 md:absolute md:top-10 md:right-8 md:left-auto md:w-auto md:px-0 md:py-8",
                    children: g
                })]
            })
        };
    e.s(["f", 0, u], 570994);
    var f = e.i(115219);
    e.s(["default", 0, ({
        actions: e = [],
        brandfolder: n,
        mention: a,
        eyebrow: l,
        title: i,
        titleSize: s,
        description: o,
        image: c,
        keyFigures: d,
        isHidden: m
    }) => {
        let {
            mapFormActions: p
        } = (0, f.Y)(e), h = p(e), x = (0, r.useMemo)(() => (d?.data ?? []).map(e => e?.value?.text ? {
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
        }), [d]);
        return (0, t.jsx)(t.Fragment, {
            children: !m && (0, t.jsx)(u, {
                actions: h,
                mention: a || "",
                eyebrow: l || "",
                title: i || "",
                titleSize: "small" === s ? "small" : "large" === s ? "large" : "medium",
                description: o || "",
                backgroundImage: {
                    src: c?.asset.url || "",
                    placeholder: c?.asset.metadata?.lqip || ""
                },
                keyFigures: x,
                video: n?.muxHLSURL || ""
            })
        })
    }], 4390)
}, 123849, e => {
    var t = e.i(167358),
        r = e.i(722978),
        n = e.i(805518);
    let a = ({
            title: e,
            content: a,
            listStyle: l = "check"
        }) => {
            let i = (0, r.U)("loco-text-body [&_h4]:mb-0", {
                "checkmark-list-green": "check" === l,
                "plus-list": "plus" === l
            });
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("div", {
                    className: "loco-caption-sm-semibold mb-2 text-gray-700 dark:text-gray-300",
                    children: e
                }), (0, t.jsx)(n.f, {
                    className: i,
                    "data-sentry-element": "Text",
                    "data-sentry-source-file": "CardPlan.tsx",
                    children: a
                })]
            })
        },
        l = ({
            title: e = "",
            descriptions: r = [],
            treshold: n,
            pricing: l
        }) => (0, t.jsxs)("div", {
            className: "flex h-full flex-col justify-between rounded-lg bg-gray-100 p-6 lg:w-96 dark:bg-gray-800",
            "data-sentry-component": "CardPlan",
            "data-sentry-source-file": "CardPlan.tsx",
            children: [(0, t.jsxs)("div", {
                className: "grow pb-8",
                children: [(0, t.jsx)("div", {
                    className: "loco-text-heading-sm mb-8 text-black dark:text-white",
                    children: e
                }), (0, t.jsx)("div", {
                    children: r?.map((r, n) => (0, t.jsx)("div", {
                        className: "flex flex-col pb-8",
                        "data-sentry-component": "renderDescriptions",
                        "data-sentry-source-file": "CardPlan.tsx",
                        children: (0, t.jsx)(a, {
                            title: r.title,
                            content: r.content,
                            listStyle: r.listStyle,
                            "data-sentry-element": "CardPlanDescription",
                            "data-sentry-source-file": "CardPlan.tsx"
                        })
                    }, `card-plan-${e}-${n}`))
                }), (0, t.jsx)(a, {
                    title: n?.title || "",
                    content: n?.content || "",
                    "data-sentry-element": "CardPlanDescription",
                    "data-sentry-source-file": "CardPlan.tsx"
                })]
            }), (0, t.jsx)("div", {
                className: "min-h-[6rem]",
                children: (0, t.jsx)(a, {
                    title: l?.title || "",
                    content: l?.content || "",
                    "data-sentry-element": "CardPlanDescription",
                    "data-sentry-source-file": "CardPlan.tsx"
                })
            })]
        }),
        i = ({
            theme: e = "light",
            cards: n = []
        }) => {
            let a = (0, r.U)({
                dark: "dark" === e
            });
            return (0, t.jsx)("section", {
                className: a,
                "data-sentry-component": "CardPlans",
                "data-sentry-source-file": "CardPlans.tsx",
                children: (0, t.jsx)("div", {
                    className: "bg-white pt-8 pb-20 dark:bg-black",
                    children: (0, t.jsx)("div", {
                        className: "container flex flex-col flex-wrap gap-2 lg:flex-row lg:justify-center",
                        children: n.map((e, r) => (0, t.jsx)("div", {
                            "data-sentry-component": "renderCards",
                            "data-sentry-source-file": "CardPlans.tsx",
                            children: (0, t.jsx)(l, {
                                ...e,
                                "data-sentry-element": "CardPlan",
                                "data-sentry-source-file": "CardPlans.tsx"
                            })
                        }, `card-plan-${e.title}-${r}`))
                    })
                })
            })
        };
    var s = e.i(712598);
    e.s(["f", 0, ({
        isHidden: e,
        theme: r,
        cards: n
    }) => e ? null : (0, t.jsx)(i, {
        theme: "dark" === r ? "dark" : "light",
        cards: n.map(e => ({
            title: e.title ?? "",
            descriptions: e.descriptions?.map(e => {
                let r = e?.listStyle === "plus" ? "plus" : "check";
                return {
                    title: e?.title ?? "",
                    content: (0, t.jsx)(s.f, {
                        value: e?.content
                    }),
                    listStyle: r
                }
            }) || [],
            treshold: {
                title: e?.treshold?.title ?? "",
                content: (0, t.jsx)(s.f, {
                    value: e.treshold?.content
                })
            },
            pricing: {
                title: e.pricing?.title ?? "",
                content: (0, t.jsx)(s.f, {
                    value: e.pricing?.content
                })
            }
        })),
        "data-sentry-element": "CardPlans",
        "data-sentry-component": "PlanCards",
        "data-sentry-source-file": "PlanCardsBlock.tsx"
    })], 123849)
}, 436324, 531469, e => {
    var t = e.i(167358),
        r = e.i(495056),
        n = e.i(749583),
        a = e.i(222061),
        l = e.i(829483),
        i = e.i(662380),
        s = e.i(179695),
        o = e.i(613821),
        c = e.i(635384),
        d = e.i(396241),
        u = e.i(309578),
        f = e.i(575146),
        m = e.i(239273),
        p = e.i(869324),
        h = e.i(497492);
    let x = ({
        form: e,
        isGrowForm: t,
        onSuccess: r,
        close: n,
        onShowSuccessMessage: a
    }) => {
        let l = (0, h.j)(["sfcid", "sflsa", "sfit"], t),
            i = (0, h.$)(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"], !0),
            {
                setFormSubmitted: s
            } = (0, f.useGateContext)(),
            [o] = (0, m.f)("ELOQUA");
        return (c, d, f) => {
            let m = t ? (({
                    emailConfirmation: e,
                    ghandler: t,
                    gcid: r,
                    growDivision: n,
                    growDepartment: a
                }) => ({
                    emailConfirmation: e,
                    ghandler: t,
                    gcid: r,
                    growDivision: n,
                    growDepartment: a,
                    grow: !0
                }))(e?.sfdcIntegration || {}) : e?.sfdcIntegration,
                x = e?.fields ? (0, h._)(e.fields, d, f) : {};
            return c.elqCustomerGUID = o?.split("&")?.[0]?.split("GUID=")?.[1] || "", c = {
                ...c,
                ...m,
                ...x,
                ...i,
                ...l,
                ...e?.extraFields
            }, fetch("https://create.unity.com/e/f2", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams((0, h.T)(c)).toString()
            }).then(() => {
                (0, p.U)({
                    properties: {
                        form_action: "submitted",
                        form_id: c.elqFormID,
                        form_name: c.elqFormName,
                        form_customer_id: c.elqCustomerGUID
                    }
                }), s(!0), r?.(), e?.successMessage?.showSuccessMessage ? a?.() : n?.()
            }).catch(e => u.y(e))
        }
    };
    e.s(["f", 0, x], 531469);
    var g = e.i(272351);
    e.s(["f", 0, ({
        form: e,
        close: u,
        isGrowForm: f
    }) => {
        let [m, p] = (0, r.useState)(!1), {
            handleSubmit: h,
            control: y,
            setValue: v,
            watch: b,
            getValues: k,
            formState: {
                isSubmitting: j
            }
        } = (0, c.G)({
            reValidateMode: "onChange",
            mode: "onChange"
        }), w = b(d.Q), C = x({
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
            onSubmit: h(t => {
                if (!(0, g.S)(e?.fields, k, w)) return C(t, k, w)
            }),
            "data-sentry-element": "Form",
            "data-sentry-component": "FormBuilder",
            "data-sentry-source-file": "FormsBuilder.tsx",
            children: [(0, t.jsx)("div", {
                className: "flex flex-col [&>*]:mt-3",
                children: e?.fields && e?.fields.map((e, r) => {
                    switch (e.formField) {
                        case "input":
                            return (0, t.jsx)(a.f, {
                                ...e,
                                control: y,
                                countryCode: w
                            }, r);
                        case "checkbox":
                            return (0, t.jsx)(l.f, {
                                countryCode: w,
                                ...e,
                                control: y
                            }, r);
                        case "dropdown":
                            return (0, t.jsx)(i.f, {
                                countryCode: w,
                                ...e,
                                control: y,
                                setValue: v
                            }, r);
                        case "richText":
                            return (0, t.jsx)(s.f, {
                                ...e,
                                control: y,
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
        let [a, l] = (0, r.useState)(!1), [i, s] = (0, r.useState)(!1);
        return (0, t.jsx)(n.Provider, {
            value: {
                isGated: i,
                setIsGated: s,
                formSubmitted: a,
                setFormSubmitted: l
            },
            "data-sentry-element": "GateContext.Provider",
            "data-sentry-component": "GateContextProvider",
            "data-sentry-source-file": "GateContext.tsx",
            children: e
        })
    }, "useGateContext", 0, () => (0, r.useContext)(n)])
}, 129824, e => {
    e.s(["E", 0, "/data-request", "Z", 0, ["/our-company", "/community", "/industry", "/use-cases", "/releases/unity-6"], "v", 0, ["/products"], "J", 0, ["/products/unity-pro", "/products/unity-engine", "/products/compare-plans", "/products/compare-plans/unity-cloud"], "C", 0, ["/resources"], "b", 0, ["/download", "/roadmap", "/pages/pro-free-trial", "/games", "/solutions", "/developer-tools", "/how-to", "/learn", "/learn/get-started", "/releases/lts-vs-tech-stream"]])
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
        a = e.i(869324),
        l = e.i(537251);
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
            let a = r[e];
            null != a.isRequired && (n[t] = {
                ...n[t],
                isRequired: a.isRequired
            }), a.isHidden && n.splice(t, 1)
        }
        return {
            ...e,
            fields: n
        }
    }, "D", 0, function(e) {
        (0, a.U)({
            properties: {
                form_action: "presented",
                form_id: e.fields?.find(e => "elqFormID" === e.formFieldId)?.defaultValue,
                form_name: e.fields?.find(e => "elqFormName" === e.formFieldId)?.defaultValue
            }
        })
    }, "Y", 0, e => {
        let {
            extraFields: i
        } = (0, l.f)(), s = ({
            label: l,
            form: i
        }) => {
            let s = ((e, t) => {
                let r = e?.find(e => t.title === e?.form?.title)?.customSelections || "";
                try {
                    return JSON.parse(r)
                } catch (e) {
                    return null
                }
            })(e || [], i);
            if (s && i?.fields)
                for (let e of Object.keys(s)) {
                    let t = i.fields.findIndex(t => t.formFieldId === e);
                    if (t >= 0) {
                        let r = s[e];
                        null != r.isRequired && (i.fields[t].isRequired = s[e].isRequired), r.isHidden && i.fields.splice(t, 1)
                    }
                }
            return (0, t.jsx)(r.f, {
                actionLabel: l,
                onOpenChange: e => {
                    e && (0, a.U)({
                        properties: {
                            form_action: "presented",
                            form_id: i.fields?.find(e => "elqFormID" === e.formFieldId)?.defaultValue,
                            form_name: i.fields?.find(e => "elqFormName" === e.formFieldId)?.defaultValue
                        }
                    })
                },
                "data-sentry-element": "Modal",
                "data-sentry-component": "renderModal",
                "data-sentry-source-file": "useFormModal.tsx",
                children: e => (0, t.jsx)(r.f.Layout, {
                    modal: {
                        title: i.title,
                        description: i.description
                    },
                    children: i && (0, t.jsx)(n.f, {
                        form: i,
                        close: e
                    })
                })
            })
        };
        return {
            renderModal: s,
            mapFormActions: e => e?.map(e => ({
                title: e.title,
                link: e.link ? {
                    href: e.link.linkReference?.href.current || "",
                    target: e.link.linkReference?.target || "_self"
                } : null,
                form: e.form ? {
                    form: e.form,
                    webinarFormParametersContent: e.webinarFormParametersContent,
                    extraFields: i,
                    renderModal: s
                } : null
            })),
            extraFields: i
        }
    }])
}, 246916, e => {
    var t = e.i(149168),
        r = e.i(81052),
        n = e.i(740041);
    e.s(["f", 0, function(e, a = []) {
        var l, i;
        let s, o, c, d, u, f = (0, t.usePathname)(),
            m = (0, r.X)(),
            p = m !== n.J ? f.replace(`/${m}`, "") : f,
            h = "" === p || "/" === p || p.startsWith("/home-experiment");
        return {
            shouldDisplayMTBanner: m !== n.J && e?.translationType === "MT" && !h && !a.includes(p),
            updatedBlocks: (l = e.blocks ?? [], i = e.machineTranslationDisclaimer, s = l.reduce((e, t, r) => ["hero", "alternateNavigation", "headliner"].includes(t._type) ? r : e, -1), o = [...l], c = o[s + 1]?._type === "alternateNavigationAnchor" || o[s + 1]?._type === "anchorButton" ? o[s + 2] : o[s + 1], d = c?.theme ?? null, u = {
                _type: "alert",
                text: i?.text,
                isContained: !0,
                spacing: {
                    bottom: !0,
                    top: !0
                },
                ...d && {
                    theme: d
                },
                action: {
                    text: i?.action?.title,
                    fieldLink: {
                        linkReference: {
                            href: {
                                current: `${window.location.origin}${p}`
                            },
                            target: "_self"
                        }
                    }
                }
            }, -1 === s ? o.unshift(u) : o.splice(s + 1, 0, u), o),
            redirectPathName: p
        }
    }], 246916)
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
}, 160089, e => {
    var t = e.i(495056),
        r = e.i(844929);
    let n = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M144,176a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176Zm88-48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM124,96a12,12,0,1,0-12-12A12,12,0,0,0,124,96Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M142,176a6,6,0,0,1-6,6,14,14,0,0,1-14-14V128a2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14v40a2,2,0,0,0,2,2A6,6,0,0,1,142,176ZM124,94a10,10,0,1,0-10-10A10,10,0,0,0,124,94Zm106,34A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M140,176a4,4,0,0,1-4,4,12,12,0,0,1-12-12V128a4,4,0,0,0-4-4,4,4,0,0,1,0-8,12,12,0,0,1,12,12v40a4,4,0,0,0,4,4A4,4,0,0,1,140,176ZM124,92a8,8,0,1,0-8-8A8,8,0,0,0,124,92Zm104,36A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"
            }))]
        ]),
        a = t.forwardRef((e, a) => t.createElement(r.f, {
            ref: a,
            ...e,
            weights: n
        }));
    a.displayName = "InfoIcon", e.s(["Info", 0, a, "InfoIcon", 0, a], 160089)
}, 900864, e => {
    var t = e.i(57391);
    e.s(["f", () => t.i])
}, 256420, e => {
    var t, r, n = e.i(495056);

    function a() {
        return (a = Object.assign.bind()).apply(this, arguments)
    }
    let l = ["children", "options"],
        i = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e, t) => (e[t.toLowerCase()] = t, e), {
            for: "htmlFor"
        }),
        s = {
            amp: "&",
            apos: "'",
            gt: ">",
            lt: "<",
            nbsp: " ",
            quot: "“"
        },
        o = ["style", "script"],
        c = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
        d = /mailto:/i,
        u = /\n{2,}$/,
        f = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
        m = /^ *> ?/gm,
        p = /^ {2,}\n/,
        h = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
        x = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
        g = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
        y = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
        v = /^(?:\n *)*\n/,
        b = /\r\n?/g,
        k = /^\[\^([^\]]+)](:.*)\n/,
        j = /^\[\^([^\]]+)]/,
        w = /\f/g,
        C = /^\s*?\[(x|\s)\]/,
        P = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        N = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        M = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
        S = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
        E = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
        I = /^<!--[\s\S]*?(?:-->)/,
        A = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
        T = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
        _ = /^\{.*\}$/,
        O = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
        F = /^<([^ >]+@[^ >]+)>/,
        H = /^<([^ >]+:\/[^ >]+)>/,
        $ = /-([a-z])?/gi,
        D = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
        L = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
        R = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
        q = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
        B = /(\[|\])/g,
        U = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
        G = /\t/g,
        Z = /^ *\| */,
        z = /(^ *\||\| *$)/g,
        V = / *$/,
        W = /^ *:-+: *$/,
        X = /^ *:-+ *$/,
        J = /^ *-+: *$/,
        K = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
        Q = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
        Y = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
        ee = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
        et = /^\\([^0-9A-Za-z\s])/,
        er = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
        en = /^\n+/,
        ea = /^([ \t]*)/,
        el = /\\([^\\])/g,
        ei = / *\n+$/,
        es = /(?:^|\n)( *)$/,
        eo = "(?:\\d+\\.)",
        ec = "(?:[*+-])";

    function ed(e) {
        return "( *)(" + (1 === e ? eo : ec) + ") +"
    }
    let eu = ed(1),
        ef = ed(2);

    function em(e) {
        return RegExp("^" + (1 === e ? eu : ef))
    }
    let ep = em(1),
        eh = em(2);

    function ex(e) {
        return RegExp("^" + (1 === e ? eu : ef) + "[^\\n]*(?:\\n(?!\\1" + (1 === e ? eo : ec) + " )[^\\n]*)*(\\n|$)", "gm")
    }
    let eg = ex(1),
        ey = ex(2);

    function ev(e) {
        let t = 1 === e ? eo : ec;
        return RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)")
    }
    let eb = ev(1),
        ek = ev(2);

    function ej(e, t) {
        let n = 1 === t,
            a = n ? eb : ek,
            l = n ? eg : ey,
            i = n ? ep : eh;
        return {
            t(e, t, r) {
                let n = es.exec(r);
                return n && (t.o || !t._ && !t.u) ? a.exec(e = n[1] + e) : null
            },
            i: r.HIGH,
            l(e, t, r) {
                let a = n ? +e[2] : void 0,
                    s = e[0].replace(u, "\n").match(l),
                    o = !1;
                return {
                    p: s.map(function(e, n) {
                        let a, l = RegExp("^ {1," + i.exec(e)[0].length + "}", "gm"),
                            c = e.replace(l, "").replace(i, ""),
                            d = n === s.length - 1,
                            u = -1 !== c.indexOf("\n\n") || d && o;
                        o = u;
                        let f = r._,
                            m = r.o;
                        r.o = !0, u ? (r._ = !1, a = c.replace(ei, "\n\n")) : (r._ = !0, a = c.replace(ei, ""));
                        let p = t(a, r);
                        return r._ = f, r.o = m, p
                    }),
                    m: n,
                    g: a
                }
            },
            h: (t, r, n) => e(t.m ? "ol" : "ul", {
                key: n.k,
                start: t.g
            }, t.p.map(function(t, a) {
                return e("li", {
                    key: a
                }, r(t, n))
            }))
        }
    }
    let ew = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
        eC = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
        eP = [f, x, g, P, M, N, I, D, eg, eb, ey, ek],
        eN = [...eP, /^[^\n]+(?:  \n|\n{2,})/, S, T];

    function eM(e) {
        return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase()
    }

    function eS(e) {
        return J.test(e) ? "right" : W.test(e) ? "center" : X.test(e) ? "left" : null
    }

    function eE(e, t, r) {
        let n = r.$;
        r.$ = !0;
        let a = t(e.trim(), r);
        r.$ = n;
        let l = [
            []
        ];
        return a.forEach(function(e, t) {
            "tableSeparator" === e.type ? 0 !== t && t !== a.length - 1 && l.push([]) : ("text" !== e.type || null != a[t + 1] && "tableSeparator" !== a[t + 1].type || (e.v = e.v.replace(V, "")), l[l.length - 1].push(e))
        }), l
    }

    function eI(e, t, r) {
        var n;
        r._ = !0;
        let a = eE(e[1], t, r),
            l = e[2].replace(z, "").split("|").map(eS),
            i = (n = e[3], n.trim().split("\n").map(function(e) {
                return eE(e, t, r)
            }));
        return r._ = !1, {
            S: l,
            A: i,
            L: a,
            type: "table"
        }
    }

    function eA(e, t) {
        return null == e.S[t] ? {} : {
            textAlign: e.S[t]
        }
    }

    function eT(e) {
        return function(t, r) {
            return r._ ? e.exec(t) : null
        }
    }

    function e_(e) {
        return function(t, r) {
            return r._ || r.u ? e.exec(t) : null
        }
    }

    function eO(e) {
        return function(t, r) {
            return r._ || r.u ? null : e.exec(t)
        }
    }

    function eF(e) {
        return function(t) {
            return e.exec(t)
        }
    }

    function eH(e, t, r) {
        if (t._ || t.u || r && !r.endsWith("\n")) return null;
        let n = "";
        e.split("\n").every(e => !eP.some(t => t.test(e)) && (n += e + "\n", e.trim()));
        let a = n.trimEnd();
        return "" == a ? null : [n, a]
    }

    function e$(e) {
        try {
            if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i)) return
        } catch (e) {
            return null
        }
        return e
    }

    function eD(e) {
        return e.replace(el, "$1")
    }

    function eL(e, t, r) {
        let n = r._ || !1,
            a = r.u || !1;
        r._ = !0, r.u = !0;
        let l = e(t, r);
        return r._ = n, r.u = a, l
    }

    function eR(e, t, r) {
        return r._ = !1, e(t, r)
    }
    let eq = (e, t, r) => ({
        v: eL(t, e[1], r)
    });

    function eB() {
        return {}
    }

    function eU() {
        return null
    }

    function eG(e, t, r) {
        let n = e,
            a = t.split(".");
        for (; a.length && void 0 !== (n = n[a[0]]);) a.shift();
        return n || r
    }(t = r || (r = {}))[t.MAX = 0] = "MAX", t[t.HIGH = 1] = "HIGH", t[t.MED = 2] = "MED", t[t.LOW = 3] = "LOW", t[t.MIN = 4] = "MIN", e.s(["f", 0, e => {
        let {
            children: t,
            options: u
        } = e, z = function(e, t) {
            if (null == e) return {};
            var r, n, a = {},
                l = Object.keys(e);
            for (n = 0; n < l.length; n++) t.indexOf(r = l[n]) >= 0 || (a[r] = e[r]);
            return a
        }(e, l);
        return n.cloneElement(function(e, t = {}) {
            var l;
            let u;
            t.overrides = t.overrides || {}, t.slugify = t.slugify || eM, t.namedCodesToUnicode = t.namedCodesToUnicode ? a({}, s, t.namedCodesToUnicode) : s;
            let z = t.createElement || n.createElement;

            function V(e, r, ...n) {
                var l;
                let i, s = eG(t.overrides, `${e}.props`, {});
                return z((i = eG(l = t.overrides, e)) ? "function" == typeof i || "object" == typeof i && "render" in i ? i : eG(l, `${e}.component`, e) : e, a({}, r, s, {
                    className: function(...e) {
                        return e.filter(Boolean).join(" ")
                    }(null == r ? void 0 : r.className, s.className) || void 0
                }), ...n)
            }

            function W(e) {
                let r, a = !1;
                t.forceInline ? a = !0 : t.forceBlock || (a = !1 === U.test(e));
                let l = eo(es(a ? e : `${e.trimEnd().replace(en,"")}

`, {
                    _: a
                }));
                for (;
                    "string" == typeof l[l.length - 1] && !l[l.length - 1].trim();) l.pop();
                if (null === t.wrapper) return l;
                let i = t.wrapper || (a ? "span" : "div");
                if (l.length > 1 || t.forceWrapper) r = l;
                else {
                    if (1 === l.length) return "string" == typeof(r = l[0]) ? V("span", {
                        key: "outer"
                    }, r) : r;
                    r = null
                }
                return n.createElement(i, {
                    key: "outer"
                }, r)
            }

            function X(e) {
                let t = e.match(c);
                return t ? t.reduce(function(e, t, r) {
                    let a = t.indexOf("=");
                    if (-1 !== a) {
                        var l, s, o;
                        let c, d = (-1 !== (l = t.slice(0, a)).indexOf("-") && null === l.match(A) && (l = l.replace($, function(e, t) {
                                return t.toUpperCase()
                            })), l).trim(),
                            u = ('"' === (c = (s = t.slice(a + 1).trim())[0]) || "'" === c) && s.length >= 2 && s[s.length - 1] === c ? s.slice(1, -1) : s,
                            f = i[d] || d,
                            m = e[f] = (o = u, "style" === d ? o.split(/;\s?/).reduce(function(e, t) {
                                let r = t.slice(0, t.indexOf(":"));
                                return e[r.replace(/(-[a-z])/g, e => e[1].toUpperCase())] = t.slice(r.length + 1).trim(), e
                            }, {}) : "href" === d ? e$(o) : (o.match(_) && (o = o.slice(1, o.length - 1)), "true" === o || "false" !== o && o));
                        "string" == typeof m && (S.test(m) || T.test(m)) && (e[f] = n.cloneElement(W(m.trim()), {
                            key: r
                        }))
                    } else "style" !== t && (e[i[t] || t] = !0);
                    return e
                }, {}) : null
            }
            let J = [],
                el = {},
                ei = {
                    blockQuote: {
                        t: eO(f),
                        i: r.HIGH,
                        l: (e, t, r) => ({
                            v: t(e[0].replace(m, ""), r)
                        }),
                        h: (e, t, r) => V("blockquote", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    breakLine: {
                        t: eF(p),
                        i: r.HIGH,
                        l: eB,
                        h: (e, t, r) => V("br", {
                            key: r.k
                        })
                    },
                    breakThematic: {
                        t: eO(h),
                        i: r.HIGH,
                        l: eB,
                        h: (e, t, r) => V("hr", {
                            key: r.k
                        })
                    },
                    codeBlock: {
                        t: eO(g),
                        i: r.MAX,
                        l: e => ({
                            v: e[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""),
                            M: void 0
                        }),
                        h: (e, t, r) => V("pre", {
                            key: r.k
                        }, V("code", a({}, e.O, {
                            className: e.M ? `lang-${e.M}` : ""
                        }), e.v))
                    },
                    codeFenced: {
                        t: eO(x),
                        i: r.MAX,
                        l: e => ({
                            O: X(e[3] || ""),
                            v: e[4],
                            M: e[2] || void 0,
                            type: "codeBlock"
                        })
                    },
                    codeInline: {
                        t: e_(y),
                        i: r.LOW,
                        l: e => ({
                            v: e[2]
                        }),
                        h: (e, t, r) => V("code", {
                            key: r.k
                        }, e.v)
                    },
                    footnote: {
                        t: eO(k),
                        i: r.MAX,
                        l: e => (J.push({
                            I: e[2],
                            j: e[1]
                        }), {}),
                        h: eU
                    },
                    footnoteReference: {
                        t: eT(j),
                        i: r.HIGH,
                        l: e => ({
                            v: e[1],
                            B: `#${t.slugify(e[1])}`
                        }),
                        h: (e, t, r) => V("a", {
                            key: r.k,
                            href: e$(e.B)
                        }, V("sup", {
                            key: r.k
                        }, e.v))
                    },
                    gfmTask: {
                        t: eT(C),
                        i: r.HIGH,
                        l: e => ({
                            R: "x" === e[1].toLowerCase()
                        }),
                        h: (e, t, r) => V("input", {
                            checked: e.R,
                            key: r.k,
                            readOnly: !0,
                            type: "checkbox"
                        })
                    },
                    heading: {
                        t: eO(t.enforceAtxHeadings ? N : P),
                        i: r.HIGH,
                        l: (e, r, n) => ({
                            v: eL(r, e[2], n),
                            T: t.slugify(e[2]),
                            C: e[1].length
                        }),
                        h: (e, t, r) => V(`h${e.C}`, {
                            id: e.T,
                            key: r.k
                        }, t(e.v, r))
                    },
                    headingSetext: {
                        t: eO(M),
                        i: r.MAX,
                        l: (e, t, r) => ({
                            v: eL(t, e[1], r),
                            C: "=" === e[2] ? 1 : 2,
                            type: "heading"
                        })
                    },
                    htmlComment: {
                        t: eF(I),
                        i: r.HIGH,
                        l: () => ({}),
                        h: eU
                    },
                    image: {
                        t: e_(eC),
                        i: r.HIGH,
                        l: e => ({
                            D: e[1],
                            B: eD(e[2]),
                            F: e[3]
                        }),
                        h: (e, t, r) => V("img", {
                            key: r.k,
                            alt: e.D || void 0,
                            title: e.F || void 0,
                            src: e$(e.B)
                        })
                    },
                    link: {
                        t: eT(ew),
                        i: r.LOW,
                        l: (e, t, r) => {
                            var n;
                            let a, l, i;
                            return {
                                v: (n = e[1], a = r._ || !1, l = r.u || !1, r._ = !1, r.u = !0, i = t(n, r), r._ = a, r.u = l, i),
                                B: eD(e[2]),
                                F: e[3]
                            }
                        },
                        h: (e, t, r) => V("a", {
                            key: r.k,
                            href: e$(e.B),
                            title: e.F
                        }, t(e.v, r))
                    },
                    linkAngleBraceStyleDetector: {
                        t: eT(H),
                        i: r.MAX,
                        l: e => ({
                            v: [{
                                v: e[1],
                                type: "text"
                            }],
                            B: e[1],
                            type: "link"
                        })
                    },
                    linkBareUrlDetector: {
                        t: (e, t) => t.N ? null : eT(O)(e, t),
                        i: r.MAX,
                        l: e => ({
                            v: [{
                                v: e[1],
                                type: "text"
                            }],
                            B: e[1],
                            F: void 0,
                            type: "link"
                        })
                    },
                    linkMailtoDetector: {
                        t: eT(F),
                        i: r.MAX,
                        l(e) {
                            let t = e[1],
                                r = e[1];
                            return d.test(r) || (r = "mailto:" + r), {
                                v: [{
                                    v: t.replace("mailto:", ""),
                                    type: "text"
                                }],
                                B: r,
                                type: "link"
                            }
                        }
                    },
                    orderedList: ej(V, 1),
                    unorderedList: ej(V, 2),
                    newlineCoalescer: {
                        t: eO(v),
                        i: r.LOW,
                        l: eB,
                        h: () => "\n"
                    },
                    paragraph: {
                        t: eH,
                        i: r.LOW,
                        l: eq,
                        h: (e, t, r) => V("p", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    ref: {
                        t: eT(L),
                        i: r.MAX,
                        l: e => (el[e[1]] = {
                            B: e[2],
                            F: e[4]
                        }, {}),
                        h: eU
                    },
                    refImage: {
                        t: e_(R),
                        i: r.MAX,
                        l: e => ({
                            D: e[1] || void 0,
                            P: e[2]
                        }),
                        h: (e, t, r) => V("img", {
                            key: r.k,
                            alt: e.D,
                            src: e$(el[e.P].B),
                            title: el[e.P].F
                        })
                    },
                    refLink: {
                        t: eT(q),
                        i: r.MAX,
                        l: (e, t, r) => ({
                            v: t(e[1], r),
                            Z: t(e[0].replace(B, "\\$1"), r),
                            P: e[2]
                        }),
                        h: (e, t, r) => el[e.P] ? V("a", {
                            key: r.k,
                            href: e$(el[e.P].B),
                            title: el[e.P].F
                        }, t(e.v, r)) : V("span", {
                            key: r.k
                        }, t(e.Z, r))
                    },
                    table: {
                        t: eO(D),
                        i: r.HIGH,
                        l: eI,
                        h: (e, t, r) => V("table", {
                            key: r.k
                        }, V("thead", null, V("tr", null, e.L.map(function(n, a) {
                            return V("th", {
                                key: a,
                                style: eA(e, a)
                            }, t(n, r))
                        }))), V("tbody", null, e.A.map(function(n, a) {
                            return V("tr", {
                                key: a
                            }, n.map(function(n, a) {
                                return V("td", {
                                    key: a,
                                    style: eA(e, a)
                                }, t(n, r))
                            }))
                        })))
                    },
                    tableSeparator: {
                        t: function(e, t) {
                            return t.$ ? (t._ = !0, Z.exec(e)) : null
                        },
                        i: r.HIGH,
                        l: function() {
                            return {
                                type: "tableSeparator"
                            }
                        },
                        h: () => " | "
                    },
                    text: {
                        t: eF(er),
                        i: r.MIN,
                        l: e => ({
                            v: e[0].replace(E, (e, r) => t.namedCodesToUnicode[r] ? t.namedCodesToUnicode[r] : e)
                        }),
                        h: e => e.v
                    },
                    textBolded: {
                        t: e_(K),
                        i: r.MED,
                        l: (e, t, r) => ({
                            v: t(e[2], r)
                        }),
                        h: (e, t, r) => V("strong", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    textEmphasized: {
                        t: e_(Q),
                        i: r.LOW,
                        l: (e, t, r) => ({
                            v: t(e[2], r)
                        }),
                        h: (e, t, r) => V("em", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    textEscaped: {
                        t: e_(et),
                        i: r.HIGH,
                        l: e => ({
                            v: e[1],
                            type: "text"
                        })
                    },
                    textMarked: {
                        t: e_(Y),
                        i: r.LOW,
                        l: eq,
                        h: (e, t, r) => V("mark", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    textStrikethroughed: {
                        t: e_(ee),
                        i: r.LOW,
                        l: eq,
                        h: (e, t, r) => V("del", {
                            key: r.k
                        }, t(e.v, r))
                    }
                };
            !0 !== t.disableParsingRawHTML && (ei.htmlBlock = {
                t: eF(S),
                i: r.HIGH,
                l(e, t, r) {
                    let [, n] = e[3].match(ea), a = RegExp(`^${n}`, "gm"), l = e[3].replace(a, ""), i = eN.some(e => e.test(l)) ? eR : eL, s = e[1].toLowerCase(), c = -1 !== o.indexOf(s);
                    r.N = r.N || "a" === s;
                    let d = c ? e[3] : i(t, l, r);
                    return r.N = !1, {
                        O: X(e[2]),
                        v: d,
                        G: c,
                        H: c ? s : e[1]
                    }
                },
                h: (e, t, r) => V(e.H, a({
                    key: r.k
                }, e.O), e.G ? e.v : t(e.v, r))
            }, ei.htmlSelfClosing = {
                t: eF(T),
                i: r.HIGH,
                l: e => ({
                    O: X(e[2] || ""),
                    H: e[1]
                }),
                h: (e, t, r) => V(e.H, a({}, e.O, {
                    key: r.k
                }))
            });
            let es = ((u = Object.keys(ei)).sort(function(e, t) {
                    let r = ei[e].i,
                        n = ei[t].i;
                    return r !== n ? r - n : e < t ? -1 : 1
                }), function(e, t) {
                    return function e(t, r) {
                        let n = [],
                            a = "";
                        for (; t;) {
                            let l = 0;
                            for (; l < u.length;) {
                                let i = u[l],
                                    s = ei[i],
                                    o = s.t(t, r, a);
                                if (o) {
                                    let l = o[0];
                                    t = t.substring(l.length);
                                    let c = s.l(o, e, r);
                                    null == c.type && (c.type = i), n.push(c), a = l;
                                    break
                                }
                                l++
                            }
                        }
                        return n
                    }(e.replace(b, "\n").replace(w, "").replace(G, "    "), t)
                }),
                eo = (l = function(e, t, r) {
                    return ei[e.type].h(e, t, r)
                }, function e(t, r = {}) {
                    if (Array.isArray(t)) {
                        let n = r.k,
                            a = [],
                            l = !1;
                        for (let n = 0; n < t.length; n++) {
                            r.k = n;
                            let i = e(t[n], r),
                                s = "string" == typeof i;
                            s && l ? a[a.length - 1] += i : null !== i && a.push(i), l = s
                        }
                        return r.k = n, a
                    }
                    return l(t, e, r)
                }),
                ec = W(e);
            return J.length ? V("div", null, ec, V("footer", {
                key: "footer"
            }, J.map(function(e) {
                return V("div", {
                    id: t.slugify(e.j),
                    key: e.j
                }, e.j, eo(es(e.I, {
                    _: !0
                })))
            }))) : ec
        }(t, u), z)
    }])
}, 515745, 764350, e => {
    var t = e.i(120194);
    let r = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e;

    function n(e, n, a, l) {
        return e === n && a === l ? t.f : t => 0 === t || 1 === t ? t : r(function(e, t, n, a, l) {
            let i, s, o = 0;
            do(i = r(s = t + (n - t) / 2, a, l) - e) > 0 ? n = s : t = s; while (Math.abs(i) > 1e-7 && ++o < 12) return s
        }(t, 0, 1, e, a), n, l)
    }
    e.s(["f", 0, n], 764350);
    let a = n(.42, 0, 1, 1),
        l = n(0, 0, .58, 1),
        i = n(.42, 0, .58, 1);
    e.s(["t", 0, a, "H", 0, i, "u", 0, l], 515745)
}, 78192, e => {
    var t = e.i(361610),
        r = e.i(402390),
        n = e.i(996471),
        a = e.i(835349),
        l = e.i(331009),
        i = e.i(571820),
        s = e.i(837345),
        o = e.i(81407),
        c = e.i(708705),
        d = e.i(495056);

    function u(e = !0) {
        let t = (0, o.H)(),
            [r, n] = function(e = !0) {
                let [t, r] = (0, d.useState)(e), n = (0, d.useRef)(!1), a = (0, d.useCallback)(e => {
                    n.current = !0, r(!!e)
                }, []);
                return (0, c.f)(() => {
                    n.current || r(!1)
                }, []), [a, t]
            }(e);
        return {
            id: n ? t : void 0,
            ref: r
        }
    }
    var f = e.i(556744);
    e.s(["f", 0, function(e, o, c) {
        let {
            labelProps: m,
            inputProps: p,
            descriptionProps: h,
            errorMessageProps: x,
            isSelected: g,
            isPressed: y,
            isDisabled: v,
            isReadOnly: b,
            isInvalid: k,
            validationErrors: j,
            validationDetails: w
        } = function(e, o, c) {
            let {
                isDisabled: m = !1,
                isReadOnly: p = !1,
                value: h,
                name: x,
                form: g,
                children: y,
                isRequired: v,
                validationBehavior: b = "aria",
                "aria-label": k,
                "aria-labelledby": j,
                "aria-describedby": w,
                onPressStart: C,
                onPressEnd: P,
                onPressChange: N,
                onPress: M,
                onPressUp: S,
                onClick: E
            } = e, I = (0, f.c)({
                ...e,
                value: o.isSelected
            }), {
                isInvalid: A,
                validationErrors: T,
                validationDetails: _
            } = I.displayValidation;
            (0, i.f)(e, I, c);
            let {
                pressProps: O,
                isPressed: F
            } = (0, s.f)({
                onPressStart: C,
                onPressEnd: P,
                onPressChange: N,
                onPress: M,
                onPressUp: S,
                onClick: E,
                isDisabled: m
            }), [H, $] = (0, d.useState)(!1), {
                pressProps: D
            } = (0, s.f)({
                onPressStart(e) {
                    "keyboard" === e.pointerType || "virtual" === e.pointerType ? e.continuePropagation() : (C?.(e), N?.(!0), $(!0))
                },
                onPressEnd(e) {
                    "keyboard" === e.pointerType || "virtual" === e.pointerType ? e.continuePropagation() : (P?.(e), N?.(!1), $(!1))
                },
                onPressUp(e) {
                    "keyboard" === e.pointerType || "virtual" === e.pointerType ? e.continuePropagation() : S?.(e)
                },
                onClick: E,
                onPress(t) {
                    if ("keyboard" === t.pointerType || "virtual" === t.pointerType) return void t.continuePropagation();
                    M?.(t), o.toggle(), c.current?.focus();
                    let {
                        [f.n]: r
                    } = e, {
                        commitValidation: n
                    } = r || I;
                    n()
                },
                isDisabled: m || p
            }), {
                focusableProps: L
            } = (0, a.F)(e, c), R = (0, n.f)(O, L), q = (0, t.f)(e, {
                labelable: !0
            });
            (0, l.f)(c, o.defaultSelected, o.setSelected);
            let B = u(),
                U = u();
            return {
                labelProps: (0, n.f)(D, {
                    onClick: e => e.preventDefault()
                }),
                inputProps: (0, n.f)(q, {
                    checked: o.isSelected,
                    "aria-required": v && "aria" === b || void 0,
                    required: v && "native" === b,
                    "aria-invalid": A || "invalid" === e.validationState || void 0,
                    "aria-errormessage": e["aria-errormessage"],
                    "aria-controls": e["aria-controls"],
                    "aria-readonly": p || void 0,
                    "aria-describedby": [B.id, U.id, w].filter(Boolean).join(" ") || void 0,
                    onChange: e => {
                        e.stopPropagation(), o.setSelected((0, r.t)(e).checked)
                    },
                    disabled: m,
                    ...null == h ? {} : {
                        value: h
                    },
                    name: x,
                    form: g,
                    type: "checkbox",
                    ...R
                }),
                descriptionProps: B,
                errorMessageProps: U,
                isSelected: o.isSelected,
                isPressed: F || H,
                isDisabled: m,
                isReadOnly: p,
                isInvalid: A || "invalid" === e.validationState,
                validationErrors: T,
                validationDetails: _
            }
        }(e, o, c), {
            isIndeterminate: C
        } = e;
        return (0, d.useEffect)(() => {
            c.current && (c.current.indeterminate = !!C)
        }), {
            labelProps: (0, n.f)(m, (0, d.useMemo)(() => ({
                onMouseDown: e => e.preventDefault()
            }), [])),
            inputProps: p,
            descriptionProps: h,
            errorMessageProps: x,
            isSelected: g,
            isPressed: y,
            isDisabled: v,
            isReadOnly: b,
            isInvalid: k,
            validationErrors: j,
            validationDetails: w
        }
    }], 78192)
}, 82557, e => {
    var t = e.i(361610),
        r = e.i(996471),
        n = e.i(107256);
    e.s(["f", 0, function(e, a) {
        let l = (0, t.f)(e, {
                labelable: !0
            }),
            {
                hoverProps: i
            } = (0, n.f)({
                onHoverStart: () => a?.open(!0),
                onHoverEnd: () => a?.close()
            });
        return {
            tooltipProps: (0, r.f)(l, i, {
                role: "tooltip"
            })
        }
    }])
}, 86721, e => {
    var t = e.i(528837),
        r = e.i(996471),
        n = e.i(835349),
        a = e.i(107256),
        l = e.i(81407),
        i = e.i(495056);
    e.s(["f", 0, function(e, s, o) {
        let {
            isDisabled: c,
            trigger: d,
            shouldCloseOnPress: u = !0
        } = e, f = (0, l.H)(), m = (0, i.useRef)(!1), p = (0, i.useRef)(!1), h = () => {
            (m.current || p.current) && s.open(p.current)
        }, x = e => {
            m.current || p.current || s.close(e)
        };
        (0, i.useEffect)(() => {
            let e = e => {
                o && o.current && "Escape" === e.key && (e.stopPropagation(), s.close(!0))
            };
            if (s.isOpen) return document.addEventListener("keydown", e, !0), () => {
                document.removeEventListener("keydown", e, !0)
            }
        }, [o, s]);
        let g = () => {
                u && (p.current = !1, m.current = !1, x(!0))
            },
            {
                hoverProps: y
            } = (0, a.f)({
                isDisabled: c,
                onHoverStart: () => {
                    "focus" !== d && ("pointer" === (0, t.E)() ? m.current = !0 : m.current = !1, h())
                },
                onHoverEnd: () => {
                    "focus" !== d && (p.current = !1, m.current = !1, x())
                }
            }),
            {
                focusableProps: v
            } = (0, n.F)({
                isDisabled: c,
                onFocus: () => {
                    (0, t.v)() && (p.current = !0, h())
                },
                onBlur: () => {
                    p.current = !1, m.current = !1, x(!0)
                }
            }, o);
        return {
            triggerProps: {
                "aria-describedby": s.isOpen ? f : void 0,
                ...(0, r.f)(v, y, {
                    onPointerDown: g,
                    onKeyDown: g
                }),
                tabIndex: void 0
            },
            tooltipProps: {
                id: f
            }
        }
    }])
}, 145038, e => {
    var t = e.i(949877),
        r = e.i(495056);
    let n = {},
        a = 0,
        l = !1,
        i = null,
        s = null;
    e.s(["f", 0, function(e = {}) {
        let {
            delay: o = 1500,
            closeDelay: c = 500
        } = e, {
            isOpen: d,
            open: u,
            close: f
        } = (0, t.f)(e), m = (0, r.useMemo)(() => `${++a}`, []), p = (0, r.useRef)(null), h = (0, r.useRef)(f), x = () => {
            n[m] = v
        }, g = () => {
            for (let e in n) e !== m && (n[e](!0), delete n[e])
        }, y = () => {
            p.current && clearTimeout(p.current), p.current = null, g(), x(), l = !0, u(), i && (clearTimeout(i), i = null), s && (clearTimeout(s), s = null)
        }, v = e => {
            e || c <= 0 ? (p.current && clearTimeout(p.current), p.current = null, h.current()) : p.current || (p.current = setTimeout(() => {
                p.current = null, h.current()
            }, c)), i && (clearTimeout(i), i = null), l && (s && clearTimeout(s), s = setTimeout(() => {
                delete n[m], s = null, l = !1
            }, Math.max(500, c)))
        };
        return (0, r.useEffect)(() => {
            h.current = f
        }, [f]), (0, r.useEffect)(() => () => {
            p.current && clearTimeout(p.current), n[m] && delete n[m]
        }, [m]), {
            isOpen: d,
            open: e => {
                e || !(o > 0) || p.current ? y() : (g(), x(), d || l ? d || y() : (i && clearTimeout(i), i = setTimeout(() => {
                    i = null, l = !0, y()
                }, o)))
            },
            close: v
        }
    }])
}, 164163, 596889, e => {
    var t = e.i(167358),
        r = e.i(722978),
        n = e.i(127873),
        a = e.i(825610),
        l = e.i(749583);
    let i = ({
        children: e,
        className: n = "",
        variant: a = "default"
    }) => {
        let l = (0, r.q)({
            default: "bg-white dark:bg-gray-900 rounded-xl",
            padded: "p-6 bg-white dark:bg-gray-900 rounded-xl",
            transparent: ""
        } [a], n);
        return (0, t.jsx)("div", {
            className: l,
            "data-sentry-component": "Card",
            "data-sentry-source-file": "Card.tsx",
            children: e
        })
    };
    i.Content = ({
        children: e,
        className: r = "w-full"
    }) => (0, t.jsx)("div", {
        className: r,
        "data-sentry-component": "CardContent",
        "data-sentry-source-file": "CardContent.tsx",
        children: e
    }), i.Image = ({
        children: e,
        withinContainer: n
    }) => {
        let a = (0, r.q)("card-img relative w-full", {
            "[&>img]:!static !h-auto": n
        });
        return (0, t.jsx)("div", {
            className: a,
            "data-sentry-component": "CardImage",
            "data-sentry-source-file": "CardImage.tsx",
            children: e
        })
    }, e.s(["f", 0, i], 596889);
    var s = e.i(805518);
    e.s(["f", 0, ({
        title: e,
        cards: o,
        layout: c = "four-cards",
        cardVariant: d = "default",
        scroll: u = !1,
        cardsHeading: f
    }) => {
        let m = f || (e ? "h3" : "h2"),
            p = (0, r.q)("gap-4 md:gap-8", {
                "grid grid-cols-12": !u,
                "flex overflow-x-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-900 dark:scrollbar-track-gray-900 dark:scrollbar-thumb-gray-100": u
            });
        return (0, t.jsx)("section", {
            className: "bg-white dark:bg-black",
            "data-sentry-component": "Cards",
            "data-sentry-source-file": "Cards.tsx",
            children: (0, t.jsxs)("div", {
                className: "container py-16",
                children: [e && (0, t.jsx)("h2", {
                    className: "loco-text-heading-md mb-9 text-center",
                    children: e
                }), (0, t.jsx)("div", {
                    className: p,
                    children: o?.map((o, f) => {
                        let p = (0, r.q)("flex flex-wrap flex-row", !u && ({
                                "two-cards": "col-span-12 md:col-span-6 [&>div>.card-img]:h-72",
                                "three-cards": "col-span-12 md:col-span-6 lg:col-span-4 [&>div>.card-img]:h-44",
                                "four-cards": "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 [&>div>.card-img]:h-36"
                            })[c], u && ({
                                "two-cards": "mb-6 min-w-[35rem] [&>div>.card-img]:h-72",
                                "three-cards": "mb-6 min-w-[22rem] [&>div>.card-img]:h-44",
                                "four-cards": "mb-6 min-w-[16rem] [&>div>.card-img]:h-36"
                            })[c]),
                            h = (0, r.q)("place-self-end", {
                                "px-6 pb-6": "default" === d || "transparent" === d
                            }),
                            x = (0, r.q)({
                                "p-6": "default" === d || "transparent" === d,
                                "py-6": "padded" === d
                            }),
                            g = (0, r.q)("object-cover", {
                                "rounded-t-xl": "default" === d || "transparent" === d,
                                rounded: "padded" === d
                            }),
                            y = (0, r.q)("caption-xs mt-1 text-right text-gray-400", {
                                "mr-1": "padded" !== d
                            });
                        return (0, t.jsxs)(i, {
                            className: p,
                            variant: d,
                            "data-sentry-element": "Card",
                            "data-sentry-component": "renderCards",
                            "data-sentry-source-file": "Cards.tsx",
                            children: [(0, t.jsxs)(i.Content, {
                                "data-sentry-element": "Card.Content",
                                "data-sentry-source-file": "Cards.tsx",
                                children: [o.image && o.image.src && (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsx)(i.Image, {
                                        withinContainer: o.image.withinContainer,
                                        children: (0, t.jsx)(n.default, {
                                            src: o.image.src ?? "",
                                            alt: o.image.alt ?? "",
                                            fill: !0,
                                            className: g,
                                            quality: 100
                                        })
                                    }), o.image.description && (0, t.jsx)(s.f, {
                                        className: y,
                                        children: o.image.description
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: x,
                                    children: [o.icon && o.icon.src && (0, t.jsx)("div", {
                                        className: "relative mb-5 dark:invert",
                                        children: (0, t.jsx)(n.default, {
                                            src: o.icon.src ?? "",
                                            alt: o.icon.alt ?? "",
                                            quality: 100,
                                            width: 23,
                                            height: 23
                                        })
                                    }), (0, t.jsx)(m, {
                                        className: "loco-text-body-lg-medium mb-4 !font-semibold",
                                        "data-sentry-element": "CardTitleTag",
                                        "data-sentry-source-file": "Cards.tsx",
                                        children: o.title
                                    }), o.description && (0, t.jsx)(s.f, {
                                        className: "loco-text-body mb-4",
                                        children: o.description
                                    }), o.richText && (0, t.jsx)(s.f, {
                                        className: "loco-text-body mb-4 text-gray-600 dark:text-gray-300",
                                        children: o.richText
                                    })]
                                })]
                            }), o.actions && (0, t.jsx)("div", {
                                className: h,
                                children: o.actions.map((e, r) => (0, t.jsx)(l.f, {
                                    href: e.href,
                                    target: e.target ?? "_self",
                                    rounded: !0,
                                    hasArrow: !0,
                                    outlined: 0 === r,
                                    className: 0 === r ? "mr-3" : "mt-4",
                                    variant: 0 === r ? "primary" : "secondary",
                                    "data-link-location": a.f.cardsAction,
                                    "data-link-id": `${a.f.cardsAction}-${r}`,
                                    children: e.title
                                }, `${e.title}-${r}`))
                            })]
                        }, `card-${f}-${e}`)
                    })
                })]
            })
        })
    }], 164163)
}, 206775, 652955, e => {
    var t = e.i(167358),
        r = e.i(722978);
    e.s(["f", 0, ({
        className: e,
        children: n,
        size: a = "medium",
        ...l
    }) => {
        let i = (0, r.U)("bg-gray-100 text-gray-600 text-tiny-bold dark:bg-gray-900 dark:text-gray-200 rounded-md", {
            small: "px-2 py-1",
            medium: "p-2"
        } [a], e);
        return (0, t.jsx)("span", {
            className: i,
            ...l,
            "data-sentry-component": "Label",
            "data-sentry-source-file": "Label.tsx",
            children: n
        })
    }], 206775);
    let n = e.i(868767).default;
    e.s(["f", 0, n], 652955)
}, 976317, e => {
    var t = e.i(167358),
        r = e.i(495056),
        n = e.i(595388),
        a = e.i(722978),
        l = e.i(124993),
        i = e.i(996471),
        s = e.i(199111),
        o = e.i(813092);
    let c = ({
            className: e,
            width: r = 16,
            height: n = 16
        }) => (0, t.jsx)("button", {
            "aria-label": "Open in new tab",
            "data-sentry-component": "ExternalLinkIcon",
            "data-sentry-source-file": "ExternalLinkIcon.tsx",
            children: (0, t.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 15 14",
                className: e,
                height: n,
                width: r,
                "data-sentry-element": "svg",
                "data-sentry-source-file": "ExternalLinkIcon.tsx",
                children: (0, t.jsx)("path", {
                    d: "M12.969 5.688a.656.656 0 0 1-1.313 0V3.772L8.402 7.028a.657.657 0 0 1-.93-.93l3.255-3.254H8.812a.656.656 0 1 1 0-1.313h3.5a.656.656 0 0 1 .657.657v3.5ZM10.563 7a.656.656 0 0 0-.657.656v3.5H3.344V4.594h3.5a.656.656 0 1 0 0-1.313H3.125a1.094 1.094 0 0 0-1.094 1.094v7a1.094 1.094 0 0 0 1.094 1.094h7a1.094 1.094 0 0 0 1.094-1.094V7.656A.656.656 0 0 0 10.563 7Z",
                    "data-sentry-element": "path",
                    "data-sentry-source-file": "ExternalLinkIcon.tsx"
                })
            })
        }),
        d = (0, r.forwardRef)(function(e, r) {
            let d = (0, s.f)(r),
                {
                    linkProps: u
                } = (0, l.f)(e, d),
                {
                    isFocusVisible: f,
                    focusProps: m
                } = (0, o.f)(),
                {
                    href: p,
                    rel: h,
                    target: x = "_self",
                    locale: g,
                    className: y,
                    children: v,
                    size: b = "small",
                    underline: k = !1,
                    icon: j = null,
                    onClick: w = () => {}
                } = e,
                C = {
                    regular: 18,
                    small: 16,
                    tiny: 14
                },
                P = (0, a.U)("group outline-hidden", y),
                N = (0, a.U)("text-black dark:text-white group-hover:text-blue group-focus:text-blue dark:group-hover:text-blue transition duration-200", k && ({
                    regular: "shadow-underline group-hover:shadow-underline-lg",
                    small: "shadow-underline group-hover:shadow-underline-lg",
                    tiny: "shadow-underline-sm group-hover:shadow-underline"
                })[b], {
                    regular: "text-body-bold",
                    small: "text-small",
                    tiny: "text-tiny"
                } [b]),
                M = (0, a.U)("group-hover:fill-blue ml-2 h-4 w-4 fill-black transition duration-200 dark:fill-white group-focus-outline group-focus-visible:fill-blue"),
                S = "string" == typeof v ? v : "";
            return (0, t.jsx)(n.L, {
                ...(0, i.f)(u, m),
                ref: d,
                href: p,
                rel: h,
                target: x,
                locale: g,
                className: P,
                role: "button",
                ...S && {
                    "aria-label": S
                },
                onClick: w,
                children: (0, t.jsxs)("div", {
                    className: (0, a.U)("flex items-center", {
                        "a11y-ring rounded-xs": f
                    }),
                    children: [j && (0, t.jsx)("span", {
                        className: "group-hover:fill-blue group-focus:fill-blue mr-2 transition duration-200",
                        children: j
                    }), (0, t.jsx)("span", {
                        className: N,
                        children: v
                    }), "_blank" === x && (0, t.jsx)(c, {
                        className: M,
                        height: C[b],
                        width: C[b]
                    })]
                })
            })
        });
    e.s(["default", 0, d], 976317)
}, 363737, 7343, e => {
    var t = e.i(167358),
        r = e.i(495056),
        n = e.i(952200),
        a = e.i(593067),
        l = e.i(18063),
        i = e.i(996471),
        s = e.i(417500);

    function o(e, t, o) {
        let {
            overlayProps: c,
            underlayProps: d
        } = (0, l.f)({
            ...e,
            isOpen: t.isOpen,
            onClose: t.close
        }, o);
        return (0, s.f)({
            isDisabled: !t.isOpen
        }), (0, n.o)(), (0, r.useEffect)(() => {
            if (t.isOpen && o.current) return (0, a.P)([o.current], {
                shouldUseInert: !0
            })
        }, [t.isOpen, o]), {
            modalProps: (0, i.f)(c),
            underlayProps: d
        }
    }
    e.s(["f", 0, o], 7343);
    var c = e.i(15541),
        d = e.i(949877),
        u = e.i(749583);
    let f = ({
            state: e,
            children: a,
            ...l
        }) => {
            let i = (0, r.useRef)(null),
                {
                    modalProps: s,
                    underlayProps: c
                } = o({
                    ...l
                }, e, i);
            return (0, r.useEffect)(() => {
                e.isOpen && i.current?.querySelector("div")?.focus()
            }, [e.isOpen]), (0, t.jsx)(n.k, {
                shouldContainFocus: !0,
                "data-sentry-element": "Overlay",
                "data-sentry-component": "ModalOverlay",
                "data-sentry-source-file": "Modal.tsx",
                children: (0, t.jsx)("div", {
                    className: "fixed top-0 right-0 bottom-0 left-0 z-[60] flex items-start justify-center overflow-hidden bg-gray-500/50",
                    ...c,
                    children: (0, t.jsx)("div", {
                        ref: i,
                        ...s,
                        className: "contents",
                        children: a
                    })
                })
            })
        },
        m = ({
            actionLabel: e,
            children: n,
            showTriggerButton: a = !0,
            ...l
        }) => {
            let i = (0, d.f)({
                    ...l
                }),
                {
                    triggerProps: s,
                    overlayProps: o
                } = (0, c.f)({
                    type: "dialog"
                }, i);
            return (0, t.jsxs)(t.Fragment, {
                children: [a && (0, t.jsx)(u.f, {
                    rounded: !0,
                    hasArrow: !0,
                    ...s,
                    children: e
                }), i.isOpen && (0, t.jsx)(f, {
                    state: i,
                    ...l,
                    isDismissable: !0,
                    children: "function" == typeof n ? (0, r.cloneElement)(n(i.close), o) : (0, r.cloneElement)(n, o)
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
}, 14452, e => {
    var t = e.i(167358),
        r = e.i(722978);
    e.s(["f", 0, ({
        children: e,
        className: n = "",
        tag: a = "div"
    }) => {
        let l = (0, r.U)("loco-text-heading-sm mb-4", n);
        return (0, t.jsx)(a, {
            className: l,
            "data-sentry-element": "Tag",
            "data-sentry-component": "Title",
            "data-sentry-source-file": "Title.tsx",
            children: e
        })
    }], 14452)
}, 868767, e => {
    var t = e.i(167358),
        r = e.i(495056),
        n = e.i(145038),
        a = e.i(82557),
        l = e.i(86721),
        i = e.i(996471),
        s = e.i(722978);
    let o = ({
        state: e,
        content: r,
        hasArrow: n,
        placement: l,
        ...o
    }) => {
        let {
            tooltipProps: c
        } = (0, a.f)(o, e);
        return (0, t.jsx)("span", {
            className: (0, s.U)("text-tiny absolute z-10 w-max max-w-[180px] rounded-lg bg-white p-4 text-left text-gray-900 drop-shadow-lg dark:bg-gray-800 dark:text-gray-100", (e => {
                switch (e) {
                    case "top":
                        return "left-1/2 translate-x-[-50%] -top-1/2 translate-y-[-105%]";
                    case "left":
                        return "left-0 translate-x-[-105%] top-1/2 translate-y-[-50%]";
                    case "right":
                        return "left-[100%] top-1/2 translate-y-[-50%] ml-3.5";
                    default:
                        return "left-1/2 translate-x-[-50%] top-[100%] mt-3.5"
                }
            })(l), n && (e => {
                switch (e) {
                    case "top":
                        return "after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:content-[''] after:absolute after:border-[6px] after:border-x-transparent after:border-b-transparent after:border-t-white dark:after:border-t-gray-800";
                    case "left":
                        return "after:content-[''] after:absolute after:top-1/2 after:right-0 after:translate-x-[12px] after:-translate-y-1/2 after:border-[6px] after:border-y-transparent after:border-r-transparent after:border-l-white dark:after:border-l-gray-800";
                    case "right":
                        return "before:content-[''] before:absolute before:top-1/2 before:right-[100%] before:-translate-y-1/2 before:border-[6px] before:border-y-transparent before:border-l-transparent before:border-r-white dark:before:border-r-gray-800";
                    default:
                        return "before:left-1/2 before:top-0 before:-translate-y-[12px]  before:-translate-x-1/2 before:content-[''] before:absolute before:border-[6px] before:border-x-transparent before:border-t-transparent before:border-b-white dark:before:border-b-gray-800"
                }
            })(l)),
            style: {
                wordBreak: "break-word",
                overflowWrap: "break-word"
            },
            ...(0, i.f)(o, c),
            "data-sentry-component": "TooltipElement",
            "data-sentry-source-file": "Tooltip.tsx",
            children: r
        })
    };
    e.s(["default", 0, ({
        content: e,
        placement: a = "bottom",
        hasArrow: i = !0,
        tooltipOptions: s = {
            delay: 300,
            closeDelay: 0,
            isDisabled: !1
        },
        children: c
    }) => {
        let d = (0, n.f)(s),
            u = (0, r.useRef)(null),
            {
                triggerProps: f,
                tooltipProps: m
            } = (0, l.f)(s, d, u);
        return (0, t.jsxs)("span", {
            className: "relative",
            "data-sentry-component": "Tooltip",
            "data-sentry-source-file": "Tooltip.tsx",
            children: [(0, t.jsx)("span", {
                ref: u,
                ...f,
                children: c
            }), d.isOpen && (0, t.jsx)(o, {
                state: d,
                content: e,
                placement: a,
                hasArrow: i,
                ...m
            })]
        })
    }])
}], 379294, e => {
    e.q("/_next/static/media/unity-fallback-1.0hkhe9udbm85c.jpg")
}, 462847, e => {
    e.q("/_next/static/media/unity-fallback-2.235xxljphshbr.jpg")
}, 245094, e => {
    e.q("/_next/static/media/unity-fallback-3.043zq62y9b9ix.jpg")
}, 865799, (e, t, r) => {
    t.exports = function(e, t, r) {
        switch (r.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, r[0]);
            case 2:
                return e.call(t, r[0], r[1]);
            case 3:
                return e.call(t, r[0], r[1], r[2])
        }
        return e.apply(t, r)
    }
}, 531766, (e, t, r) => {
    t.exports = function(e, t) {
        for (var r = -1, n = null == e ? 0 : e.length; ++r < n && !1 !== t(e[r], r, e););
        return e
    }
}, 317508, (e, t, r) => {
    var n = e.r(830747),
        a = e.r(599568),
        l = e.r(240046);
    t.exports = a ? function(e, t) {
        return a(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: n(t),
            writable: !0
        })
    } : l
}, 599568, (e, t, r) => {
    var n = e.r(581511);
    t.exports = function() {
        try {
            var e = n(Object, "defineProperty");
            return e({}, "", {}), e
        } catch (e) {}
    }()
}, 860059, (e, t, r) => {
    var n = /^(?:0|[1-9]\d*)$/;
    t.exports = function(e, t) {
        var r = typeof e;
        return !!(t = null == t ? 0x1fffffffffffff : t) && ("number" == r || "symbol" != r && n.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
}, 184414, (e, t, r) => {
    var n = e.r(865799),
        a = Math.max;
    t.exports = function(e, t, r) {
        return t = a(void 0 === t ? e.length - 1 : t, 0),
            function() {
                for (var l = arguments, i = -1, s = a(l.length - t, 0), o = Array(s); ++i < s;) o[i] = l[t + i];
                i = -1;
                for (var c = Array(t + 1); ++i < t;) c[i] = l[i];
                return c[t] = r(o), n(e, this, c)
            }
    }
}, 108749, (e, t, r) => {
    var n = e.r(317508);
    t.exports = e.r(911818)(n)
}, 911818, (e, t, r) => {
    var n = Date.now;
    t.exports = function(e) {
        var t = 0,
            r = 0;
        return function() {
            var a = n(),
                l = 16 - (a - r);
            if (r = a, l > 0) {
                if (++t >= 800) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
}, 830747, (e, t, r) => {
    t.exports = function(e) {
        return function() {
            return e
        }
    }
}, 240046, (e, t, r) => {
    t.exports = function(e) {
        return e
    }
}]);

//# debugId=19790a84-00d8-94a6-0544-3c8c981279e6