;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "1969294c-ef8f-afbc-5bf8-6d6132c5805d")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, [4390, 201763, 570994, e => {
    var t = e.i(230452),
        r = e.i(516830),
        n = e.i(26494),
        a = e.i(312591),
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
    let d = (0, a.default)(() => e.A(297223), {
            loadableGenerated: {
                modules: [238774]
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
            video: g,
            mention: x,
            fullScreen: y = !0
        }) => {
            let b = (0, r.useRef)(null),
                v = (0, i.f)(b, {
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
                ref: b,
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
                }), v && !k && g && (0, t.jsx)(d, {
                    src: g || "",
                    playing: !0,
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                    width: "100%",
                    height: "100%",
                    onReady: () => {
                        w(!0)
                    },
                    config: {
                        hls: {
                            maxMaxBufferLength: 1,
                            startLevel: 1
                        }
                    },
                    className: "absolute object-cover [--media-object-fit:cover]"
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
        } = (0, f.Y)(e), h = p(e), g = (0, r.useMemo)(() => (d?.data ?? []).map(e => e?.value?.text ? {
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
                keyFigures: g,
                video: n?.muxHLSURL || ""
            })
        })
    }], 4390)
}, 123849, e => {
    var t = e.i(230452),
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
    var t = e.i(230452),
        r = e.i(516830),
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
    let g = ({
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
                g = e?.fields ? (0, h._)(e.fields, d, f) : {};
            return c.elqCustomerGUID = o?.split("&")?.[0]?.split("GUID=")?.[1] || "", c = {
                ...c,
                ...m,
                ...g,
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
    e.s(["f", 0, g], 531469);
    var x = e.i(272351);
    e.s(["f", 0, ({
        form: e,
        close: u,
        isGrowForm: f
    }) => {
        let [m, p] = (0, r.useState)(!1), {
            handleSubmit: h,
            control: y,
            setValue: b,
            watch: v,
            getValues: k,
            formState: {
                isSubmitting: j
            }
        } = (0, c.G)({
            reValidateMode: "onChange",
            mode: "onChange"
        }), w = v(d.Q), C = g({
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
                if (!(0, x.S)(e?.fields, k, w)) return C(t, k, w)
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
                                setValue: b
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
    var t = e.i(230452),
        r = e.i(516830);
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
    var t = e.i(516830);
    e.s(["f", 0, e => {
        let [r, n] = (0, t.useState)("");
        return (0, t.useEffect)(() => {
            n(document.cookie)
        }, []), [(0, t.useMemo)(() => r?.split("; ")?.find(t => t.includes(e)), [r, e])]
    }])
}, 115219, e => {
    var t = e.i(230452),
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
    var t = e.i(627055),
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
    var t = e.i(516830);
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
    var t = e.i(516830),
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
}, 492700, e => {
    var t, r, n, a, l = e.i(516830);

    function i() {
        return (i = Object.assign.bind()).apply(this, arguments)
    }
    let s = ["children", "options"];
    (t = n || (n = {})).blockQuote = "0", t.breakLine = "1", t.breakThematic = "2", t.codeBlock = "3", t.codeFenced = "4", t.codeInline = "5", t.footnote = "6", t.footnoteReference = "7", t.gfmTask = "8", t.heading = "9", t.headingSetext = "10", t.htmlBlock = "11", t.htmlComment = "12", t.htmlSelfClosing = "13", t.image = "14", t.link = "15", t.linkAngleBraceStyleDetector = "16", t.linkBareUrlDetector = "17", t.linkMailtoDetector = "18", t.newlineCoalescer = "19", t.orderedList = "20", t.paragraph = "21", t.ref = "22", t.refImage = "23", t.refLink = "24", t.table = "25", t.tableSeparator = "26", t.text = "27", t.textBolded = "28", t.textEmphasized = "29", t.textEscaped = "30", t.textMarked = "31", t.textStrikethroughed = "32", t.unorderedList = "33", (r = a || (a = {}))[r.MAX = 0] = "MAX", r[r.HIGH = 1] = "HIGH", r[r.MED = 2] = "MED", r[r.LOW = 3] = "LOW", r[r.MIN = 4] = "MIN";
    let o = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e, t) => (e[t.toLowerCase()] = t, e), {
            for: "htmlFor"
        }),
        c = {
            amp: "&",
            apos: "'",
            gt: ">",
            lt: "<",
            nbsp: " ",
            quot: "“"
        },
        d = ["style", "script"],
        u = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
        f = /mailto:/i,
        m = /\n{2,}$/,
        p = /^(\s*>[\s\S]*?)(?=\n{2,})/,
        h = /^ *> ?/gm,
        g = /^ {2,}\n/,
        x = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
        y = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
        b = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
        v = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
        k = /^(?:\n *)*\n/,
        j = /\r\n?/g,
        w = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,
        C = /^\[\^([^\]]+)]/,
        P = /\f/g,
        N = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,
        E = /^\s*?\[(x|\s)\]/,
        S = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        T = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        M = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
        A = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,
        I = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
        $ = /^<!--[\s\S]*?(?:-->)/,
        F = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
        O = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
        D = /^\{.*\}$/,
        R = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
        L = /^<([^ >]+@[^ >]+)>/,
        _ = /^<([^ >]+:\/[^ >]+)>/,
        q = /-([a-z])?/gi,
        U = /^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,
        Z = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
        B = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
        H = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
        z = /(\[|\])/g,
        V = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
        G = /\t/g,
        W = /(^ *\||\| *$)/g,
        J = /^ *:-+: *$/,
        K = /^ *:-+ *$/,
        Q = /^ *-+: *$/,
        X = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)",
        Y = RegExp(`^([*_])\\1${X}\\1\\1(?!\\1)`),
        ee = RegExp(`^([*_])${X}\\1(?!\\1|\\w)`),
        et = RegExp(`^==${X}==`),
        er = RegExp(`^~~${X}~~`),
        en = /^\\([^0-9A-Za-z\s])/,
        ea = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
        el = /^\n+/,
        ei = /^([ \t]*)/,
        es = /\\([^\\])/g,
        eo = / *\n+$/,
        ec = /(?:^|\n)( *)$/,
        ed = "(?:\\d+\\.)",
        eu = "(?:[*+-])";

    function ef(e) {
        return "( *)(" + (1 === e ? ed : eu) + ") +"
    }
    let em = ef(1),
        ep = ef(2);

    function eh(e) {
        return RegExp("^" + (1 === e ? em : ep))
    }
    let eg = eh(1),
        ex = eh(2);

    function ey(e) {
        return RegExp("^" + (1 === e ? em : ep) + "[^\\n]*(?:\\n(?!\\1" + (1 === e ? ed : eu) + " )[^\\n]*)*(\\n|$)", "gm")
    }
    let eb = ey(1),
        ev = ey(2);

    function ek(e) {
        let t = 1 === e ? ed : eu;
        return RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)")
    }
    let ej = ek(1),
        ew = ek(2);

    function eC(e, t) {
        let r = 1 === t,
            n = r ? ej : ew,
            a = r ? eb : ev,
            l = r ? eg : ex;
        return {
            match(e, t, r) {
                let a = ec.exec(r);
                return a && (t.list || !t.inline && !t.simple) ? n.exec(e = a[1] + e) : null
            },
            order: 1,
            parse(e, t, n) {
                let i = r ? +e[2] : void 0,
                    s = e[0].replace(m, "\n").match(a),
                    o = !1;
                return {
                    items: s.map(function(e, r) {
                        let a, i = RegExp("^ {1," + l.exec(e)[0].length + "}", "gm"),
                            c = e.replace(i, "").replace(l, ""),
                            d = r === s.length - 1,
                            u = -1 !== c.indexOf("\n\n") || d && o;
                        o = u;
                        let f = n.inline,
                            m = n.list;
                        n.list = !0, u ? (n.inline = !1, a = c.replace(eo, "\n\n")) : (n.inline = !0, a = c.replace(eo, ""));
                        let p = t(a, n);
                        return n.inline = f, n.list = m, p
                    }),
                    ordered: r,
                    start: i
                }
            },
            render: (t, r, n) => e(t.ordered ? "ol" : "ul", {
                key: n.key,
                start: "20" === t.type ? t.start : void 0
            }, t.items.map(function(t, a) {
                return e("li", {
                    key: a
                }, r(t, n))
            }))
        }
    }
    let eP = RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),
        eN = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
        eE = [p, y, b, S, M, T, $, U, eb, ej, ev, ew],
        eS = [...eE, /^[^\n]+(?:  \n|\n{2,})/, A, O];

    function eT(e) {
        return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase()
    }

    function eM(e) {
        return Q.test(e) ? "right" : J.test(e) ? "center" : K.test(e) ? "left" : null
    }

    function eA(e, t, r, n) {
        let a = r.inTable;
        r.inTable = !0;
        let l = e.trim().split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/).reduce((e, a) => ("|" === a.trim() ? e.push(n ? {
            type: "26"
        } : {
            type: "27",
            text: a
        }) : "" !== a && e.push.apply(e, t(a, r)), e), []);
        r.inTable = a;
        let i = [
            []
        ];
        return l.forEach(function(e, t) {
            "26" === e.type ? 0 !== t && t !== l.length - 1 && i.push([]) : ("27" !== e.type || null != l[t + 1] && "26" !== l[t + 1].type || (e.text = e.text.trimEnd()), i[i.length - 1].push(e))
        }), i
    }

    function eI(e, t, r) {
        var n;
        r.inline = !0;
        let a = e[2] ? e[2].replace(W, "").split("|").map(eM) : [],
            l = e[3] ? (n = e[3], n.trim().split("\n").map(function(e) {
                return eA(e, t, r, !0)
            })) : [],
            i = eA(e[1], t, r, !!l.length);
        return r.inline = !1, l.length ? {
            align: a,
            cells: l,
            header: i,
            type: "25"
        } : {
            children: i,
            type: "21"
        }
    }

    function e$(e, t) {
        return null == e.align[t] ? {} : {
            textAlign: e.align[t]
        }
    }

    function eF(e) {
        return function(t, r) {
            return r.inline ? e.exec(t) : null
        }
    }

    function eO(e) {
        return function(t, r) {
            return r.inline || r.simple ? e.exec(t) : null
        }
    }

    function eD(e) {
        return function(t, r) {
            return r.inline || r.simple ? null : e.exec(t)
        }
    }

    function eR(e) {
        return function(t) {
            return e.exec(t)
        }
    }

    function eL(e, t, r) {
        if (t.inline || t.simple || r && !r.endsWith("\n")) return null;
        let n = "";
        e.split("\n").every(e => !eE.some(t => t.test(e)) && (n += e + "\n", e.trim()));
        let a = n.trimEnd();
        return "" == a ? null : [n, a]
    }

    function e_(e) {
        try {
            if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i)) return
        } catch (e) {
            return null
        }
        return e
    }

    function eq(e) {
        return e.replace(es, "$1")
    }

    function eU(e, t, r) {
        let n = r.inline || !1,
            a = r.simple || !1;
        r.inline = !0, r.simple = !0;
        let l = e(t, r);
        return r.inline = n, r.simple = a, l
    }

    function eZ(e, t, r) {
        let n = r.inline || !1;
        r.inline = !1;
        let a = e(t, r);
        return r.inline = n, a
    }
    let eB = (e, t, r) => ({
        children: eU(t, e[1], r)
    });

    function eH() {
        return {}
    }

    function ez() {
        return null
    }

    function eV(e, t, r) {
        let n = e,
            a = t.split(".");
        for (; a.length && void 0 !== (n = n[a[0]]);) a.shift();
        return n || r
    }
    e.s(["f", 0, e => {
        let {
            children: t = "",
            options: r
        } = e, n = function(e, t) {
            if (null == e) return {};
            var r, n, a = {},
                l = Object.keys(e);
            for (n = 0; n < l.length; n++) t.indexOf(r = l[n]) >= 0 || (a[r] = e[r]);
            return a
        }(e, s);
        return l.cloneElement(function(e = "", t = {}) {
            var r, n;
            let a;
            t.overrides = t.overrides || {}, t.slugify = t.slugify || eT, t.namedCodesToUnicode = t.namedCodesToUnicode ? i({}, c, t.namedCodesToUnicode) : c;
            let s = t.createElement || l.createElement;

            function m(e, r, ...n) {
                var a;
                let l, o = eV(t.overrides, `${e}.props`, {});
                return s((l = eV(a = t.overrides, e)) ? "function" == typeof l || "object" == typeof l && "render" in l ? l : eV(a, `${e}.component`, e) : e, i({}, r, o, {
                    className: function(...e) {
                        return e.filter(Boolean).join(" ")
                    }(null == r ? void 0 : r.className, o.className) || void 0
                }), ...n)
            }

            function W(e) {
                let r;
                e = e.replace(N, "");
                let n = !1;
                t.forceInline ? n = !0 : t.forceBlock || (n = !1 === V.test(e));
                let a = eo(es(n ? e : `${e.trimEnd().replace(el,"")}

`, {
                    inline: n
                }));
                for (;
                    "string" == typeof a[a.length - 1] && !a[a.length - 1].trim();) a.pop();
                if (null === t.wrapper) return a;
                let i = t.wrapper || (n ? "span" : "div");
                if (a.length > 1 || t.forceWrapper) r = a;
                else {
                    if (1 === a.length) return "string" == typeof(r = a[0]) ? m("span", {
                        key: "outer"
                    }, r) : r;
                    r = null
                }
                return l.createElement(i, {
                    key: "outer"
                }, r)
            }

            function J(e) {
                let t = e.match(u);
                return t ? t.reduce(function(e, t, r) {
                    let n = t.indexOf("=");
                    if (-1 !== n) {
                        var a, i, s;
                        let c, d = (-1 !== (a = t.slice(0, n)).indexOf("-") && null === a.match(F) && (a = a.replace(q, function(e, t) {
                                return t.toUpperCase()
                            })), a).trim(),
                            u = ('"' === (c = (i = t.slice(n + 1).trim())[0]) || "'" === c) && i.length >= 2 && i[i.length - 1] === c ? i.slice(1, -1) : i,
                            f = o[d] || d,
                            m = e[f] = (s = u, "style" === d ? s.split(/;\s?/).reduce(function(e, t) {
                                let r = t.slice(0, t.indexOf(":"));
                                return e[r.trim().replace(/(-[a-z])/g, e => e[1].toUpperCase())] = t.slice(r.length + 1).trim(), e
                            }, {}) : "href" === d || "src" === d ? e_(s) : (s.match(D) && (s = s.slice(1, s.length - 1)), "true" === s || "false" !== s && s));
                        "string" == typeof m && (A.test(m) || O.test(m)) && (e[f] = l.cloneElement(W(m.trim()), {
                            key: r
                        }))
                    } else "style" !== t && (e[o[t] || t] = !0);
                    return e
                }, {}) : null
            }
            let K = [],
                Q = {},
                X = {
                    0: {
                        match: eD(p),
                        order: 1,
                        parse: (e, t, r) => ({
                            children: t(e[0].replace(h, ""), r)
                        }),
                        render: (e, t, r) => m("blockquote", {
                            key: r.key
                        }, t(e.children, r))
                    },
                    1: {
                        match: eR(g),
                        order: 1,
                        parse: eH,
                        render: (e, t, r) => m("br", {
                            key: r.key
                        })
                    },
                    2: {
                        match: eD(x),
                        order: 1,
                        parse: eH,
                        render: (e, t, r) => m("hr", {
                            key: r.key
                        })
                    },
                    3: {
                        match: eD(b),
                        order: 0,
                        parse: e => ({
                            lang: void 0,
                            text: e[0].replace(/^ {4}/gm, "").replace(/\n+$/, "")
                        }),
                        render: (e, t, r) => m("pre", {
                            key: r.key
                        }, m("code", i({}, e.attrs, {
                            className: e.lang ? `lang-${e.lang}` : ""
                        }), e.text))
                    },
                    4: {
                        match: eD(y),
                        order: 0,
                        parse: e => ({
                            attrs: J(e[3] || ""),
                            lang: e[2] || void 0,
                            text: e[4],
                            type: "3"
                        })
                    },
                    5: {
                        match: eO(v),
                        order: 3,
                        parse: e => ({
                            text: e[2]
                        }),
                        render: (e, t, r) => m("code", {
                            key: r.key
                        }, e.text)
                    },
                    6: {
                        match: eD(w),
                        order: 0,
                        parse: e => (K.push({
                            footnote: e[2],
                            identifier: e[1]
                        }), {}),
                        render: ez
                    },
                    7: {
                        match: eF(C),
                        order: 1,
                        parse: e => ({
                            target: `#${t.slugify(e[1])}`,
                            text: e[1]
                        }),
                        render: (e, t, r) => m("a", {
                            key: r.key,
                            href: e_(e.target)
                        }, m("sup", {
                            key: r.key
                        }, e.text))
                    },
                    8: {
                        match: eF(E),
                        order: 1,
                        parse: e => ({
                            completed: "x" === e[1].toLowerCase()
                        }),
                        render: (e, t, r) => m("input", {
                            checked: e.completed,
                            key: r.key,
                            readOnly: !0,
                            type: "checkbox"
                        })
                    },
                    9: {
                        match: eD(t.enforceAtxHeadings ? T : S),
                        order: 1,
                        parse: (e, r, n) => ({
                            children: eU(r, e[2], n),
                            id: t.slugify(e[2]),
                            level: e[1].length
                        }),
                        render: (e, t, r) => m(`h${e.level}`, {
                            id: e.id,
                            key: r.key
                        }, t(e.children, r))
                    },
                    10: {
                        match: eD(M),
                        order: 0,
                        parse: (e, t, r) => ({
                            children: eU(t, e[1], r),
                            level: "=" === e[2] ? 1 : 2,
                            type: "9"
                        })
                    },
                    11: {
                        match: eR(A),
                        order: 1,
                        parse(e, t, r) {
                            let [, n] = e[3].match(ei), a = RegExp(`^${n}`, "gm"), l = e[3].replace(a, ""), i = eS.some(e => e.test(l)) ? eZ : eU, s = e[1].toLowerCase(), o = -1 !== d.indexOf(s), c = {
                                attrs: J(e[2]),
                                noInnerParse: o,
                                tag: (o ? s : e[1]).trim()
                            };
                            return r.inAnchor = r.inAnchor || "a" === s, o ? c.text = e[3] : c.children = i(t, l, r), r.inAnchor = !1, c
                        },
                        render: (e, t, r) => m(e.tag, i({
                            key: r.key
                        }, e.attrs), e.text || t(e.children, r))
                    },
                    13: {
                        match: eR(O),
                        order: 1,
                        parse: e => ({
                            attrs: J(e[2] || ""),
                            tag: e[1].trim()
                        }),
                        render: (e, t, r) => m(e.tag, i({}, e.attrs, {
                            key: r.key
                        }))
                    },
                    12: {
                        match: eR($),
                        order: 1,
                        parse: () => ({}),
                        render: ez
                    },
                    14: {
                        match: eO(eN),
                        order: 1,
                        parse: e => ({
                            alt: e[1],
                            target: eq(e[2]),
                            title: e[3]
                        }),
                        render: (e, t, r) => m("img", {
                            key: r.key,
                            alt: e.alt || void 0,
                            title: e.title || void 0,
                            src: e_(e.target)
                        })
                    },
                    15: {
                        match: eF(eP),
                        order: 3,
                        parse: (e, t, r) => {
                            var n;
                            let a, l, i;
                            return {
                                children: (n = e[1], a = r.inline || !1, l = r.simple || !1, r.inline = !1, r.simple = !0, i = t(n, r), r.inline = a, r.simple = l, i),
                                target: eq(e[2]),
                                title: e[3]
                            }
                        },
                        render: (e, t, r) => m("a", {
                            key: r.key,
                            href: e_(e.target),
                            title: e.title
                        }, t(e.children, r))
                    },
                    16: {
                        match: eF(_),
                        order: 0,
                        parse: e => ({
                            children: [{
                                text: e[1],
                                type: "27"
                            }],
                            target: e[1],
                            type: "15"
                        })
                    },
                    17: {
                        match: (e, t) => t.inAnchor ? null : eF(R)(e, t),
                        order: 0,
                        parse: e => ({
                            children: [{
                                text: e[1],
                                type: "27"
                            }],
                            target: e[1],
                            title: void 0,
                            type: "15"
                        })
                    },
                    18: {
                        match: eF(L),
                        order: 0,
                        parse(e) {
                            let t = e[1],
                                r = e[1];
                            return f.test(r) || (r = "mailto:" + r), {
                                children: [{
                                    text: t.replace("mailto:", ""),
                                    type: "27"
                                }],
                                target: r,
                                type: "15"
                            }
                        }
                    },
                    20: eC(m, 1),
                    33: eC(m, 2),
                    19: {
                        match: eD(k),
                        order: 3,
                        parse: eH,
                        render: () => "\n"
                    },
                    21: {
                        match: eL,
                        order: 3,
                        parse: eB,
                        render: (e, t, r) => m("p", {
                            key: r.key
                        }, t(e.children, r))
                    },
                    22: {
                        match: eF(Z),
                        order: 0,
                        parse: e => (Q[e[1]] = {
                            target: e[2],
                            title: e[4]
                        }, {}),
                        render: ez
                    },
                    23: {
                        match: eO(B),
                        order: 0,
                        parse: e => ({
                            alt: e[1] || void 0,
                            ref: e[2]
                        }),
                        render: (e, t, r) => Q[e.ref] ? m("img", {
                            key: r.key,
                            alt: e.alt,
                            src: e_(Q[e.ref].target),
                            title: Q[e.ref].title
                        }) : null
                    },
                    24: {
                        match: eF(H),
                        order: 0,
                        parse: (e, t, r) => ({
                            children: t(e[1], r),
                            fallbackChildren: t(e[0].replace(z, "\\$1"), r),
                            ref: e[2]
                        }),
                        render: (e, t, r) => Q[e.ref] ? m("a", {
                            key: r.key,
                            href: e_(Q[e.ref].target),
                            title: Q[e.ref].title
                        }, t(e.children, r)) : m("span", {
                            key: r.key
                        }, t(e.fallbackChildren, r))
                    },
                    25: {
                        match: eD(U),
                        order: 1,
                        parse: eI,
                        render: (e, t, r) => m("table", {
                            key: r.key
                        }, m("thead", null, m("tr", null, e.header.map(function(n, a) {
                            return m("th", {
                                key: a,
                                style: e$(e, a)
                            }, t(n, r))
                        }))), m("tbody", null, e.cells.map(function(n, a) {
                            return m("tr", {
                                key: a
                            }, n.map(function(n, a) {
                                return m("td", {
                                    key: a,
                                    style: e$(e, a)
                                }, t(n, r))
                            }))
                        })))
                    },
                    27: {
                        match: eR(ea),
                        order: 4,
                        parse: e => ({
                            text: e[0].replace(I, (e, r) => t.namedCodesToUnicode[r] ? t.namedCodesToUnicode[r] : e)
                        }),
                        render: e => e.text
                    },
                    28: {
                        match: eO(Y),
                        order: 2,
                        parse: (e, t, r) => ({
                            children: t(e[2], r)
                        }),
                        render: (e, t, r) => m("strong", {
                            key: r.key
                        }, t(e.children, r))
                    },
                    29: {
                        match: eO(ee),
                        order: 3,
                        parse: (e, t, r) => ({
                            children: t(e[2], r)
                        }),
                        render: (e, t, r) => m("em", {
                            key: r.key
                        }, t(e.children, r))
                    },
                    30: {
                        match: eO(en),
                        order: 1,
                        parse: e => ({
                            text: e[1],
                            type: "27"
                        })
                    },
                    31: {
                        match: eO(et),
                        order: 3,
                        parse: eB,
                        render: (e, t, r) => m("mark", {
                            key: r.key
                        }, t(e.children, r))
                    },
                    32: {
                        match: eO(er),
                        order: 3,
                        parse: eB,
                        render: (e, t, r) => m("del", {
                            key: r.key
                        }, t(e.children, r))
                    }
                };
            !0 === t.disableParsingRawHTML && (delete X[11], delete X[13]);
            let es = ((a = Object.keys(X)).sort(function(e, t) {
                    let r = X[e].order,
                        n = X[t].order;
                    return r !== n ? r - n : e < t ? -1 : 1
                }), function(e, t) {
                    return function e(t, r) {
                        let n = [],
                            l = "";
                        for (; t;) {
                            let i = 0;
                            for (; i < a.length;) {
                                let s = a[i],
                                    o = X[s],
                                    c = o.match(t, r, l);
                                if (c) {
                                    let a = c[0];
                                    t = t.substring(a.length);
                                    let i = o.parse(c, e, r);
                                    null == i.type && (i.type = s), n.push(i), l = a;
                                    break
                                }
                                i++
                            }
                        }
                        return n
                    }(e.replace(j, "\n").replace(P, "").replace(G, "    "), t)
                }),
                eo = (n = t.renderRule, r = function(e, t, r) {
                    let a = X[e.type].render;
                    return n ? n(() => a(e, t, r), e, t, r) : a(e, t, r)
                }, function e(t, n = {}) {
                    if (Array.isArray(t)) {
                        let r = n.key,
                            a = [],
                            l = !1;
                        for (let r = 0; r < t.length; r++) {
                            n.key = r;
                            let i = e(t[r], n),
                                s = "string" == typeof i;
                            s && l ? a[a.length - 1] += i : null !== i && a.push(i), l = s
                        }
                        return n.key = r, a
                    }
                    return r(t, e, n)
                }),
                ec = W(e);
            return K.length ? m("div", null, ec, m("footer", {
                key: "footer"
            }, K.map(function(e) {
                return m("div", {
                    id: t.slugify(e.identifier),
                    key: e.identifier
                }, e.identifier, eo(es(e.footnote, {
                    inline: !0
                })))
            }))) : ec
        }(t, r), n)
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
        d = e.i(516830);

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
            errorMessageProps: g,
            isSelected: x,
            isPressed: y,
            isDisabled: b,
            isReadOnly: v,
            isInvalid: k,
            validationErrors: j,
            validationDetails: w
        } = function(e, o, c) {
            let {
                isDisabled: m = !1,
                isReadOnly: p = !1,
                value: h,
                name: g,
                form: x,
                children: y,
                isRequired: b,
                validationBehavior: v = "aria",
                "aria-label": k,
                "aria-labelledby": j,
                "aria-describedby": w,
                onPressStart: C,
                onPressEnd: P,
                onPressChange: N,
                onPress: E,
                onPressUp: S,
                onClick: T
            } = e, M = (0, f.c)({
                ...e,
                value: o.isSelected
            }), {
                isInvalid: A,
                validationErrors: I,
                validationDetails: $
            } = M.displayValidation;
            (0, i.f)(e, M, c);
            let {
                pressProps: F,
                isPressed: O
            } = (0, s.f)({
                onPressStart: C,
                onPressEnd: P,
                onPressChange: N,
                onPress: E,
                onPressUp: S,
                onClick: T,
                isDisabled: m
            }), [D, R] = (0, d.useState)(!1), {
                pressProps: L
            } = (0, s.f)({
                onPressStart(e) {
                    "keyboard" === e.pointerType || "virtual" === e.pointerType ? e.continuePropagation() : (C?.(e), N?.(!0), R(!0))
                },
                onPressEnd(e) {
                    "keyboard" === e.pointerType || "virtual" === e.pointerType ? e.continuePropagation() : (P?.(e), N?.(!1), R(!1))
                },
                onPressUp(e) {
                    "keyboard" === e.pointerType || "virtual" === e.pointerType ? e.continuePropagation() : S?.(e)
                },
                onClick: T,
                onPress(t) {
                    if ("keyboard" === t.pointerType || "virtual" === t.pointerType) return void t.continuePropagation();
                    E?.(t), o.toggle(), c.current?.focus();
                    let {
                        [f.n]: r
                    } = e, {
                        commitValidation: n
                    } = r || M;
                    n()
                },
                isDisabled: m || p
            }), {
                focusableProps: _
            } = (0, a.F)(e, c), q = (0, n.f)(F, _), U = (0, t.f)(e, {
                labelable: !0
            });
            (0, l.f)(c, o.defaultSelected, o.setSelected);
            let Z = u(),
                B = u();
            return {
                labelProps: (0, n.f)(L, {
                    onClick: e => e.preventDefault()
                }),
                inputProps: (0, n.f)(U, {
                    checked: o.isSelected,
                    "aria-required": b && "aria" === v || void 0,
                    required: b && "native" === v,
                    "aria-invalid": A || "invalid" === e.validationState || void 0,
                    "aria-errormessage": e["aria-errormessage"],
                    "aria-controls": e["aria-controls"],
                    "aria-readonly": p || void 0,
                    "aria-describedby": [Z.id, B.id, w].filter(Boolean).join(" ") || void 0,
                    onChange: e => {
                        e.stopPropagation(), o.setSelected((0, r.t)(e).checked)
                    },
                    disabled: m,
                    ...null == h ? {} : {
                        value: h
                    },
                    name: g,
                    form: x,
                    type: "checkbox",
                    ...q
                }),
                descriptionProps: Z,
                errorMessageProps: B,
                isSelected: o.isSelected,
                isPressed: O || D,
                isDisabled: m,
                isReadOnly: p,
                isInvalid: A || "invalid" === e.validationState,
                validationErrors: I,
                validationDetails: $
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
            errorMessageProps: g,
            isSelected: x,
            isPressed: y,
            isDisabled: b,
            isReadOnly: v,
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
        i = e.i(516830);
    e.s(["f", 0, function(e, s, o) {
        let {
            isDisabled: c,
            trigger: d,
            shouldCloseOnPress: u = !0
        } = e, f = (0, l.H)(), m = (0, i.useRef)(!1), p = (0, i.useRef)(!1), h = () => {
            (m.current || p.current) && s.open(p.current)
        }, g = e => {
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
        let x = () => {
                u && (p.current = !1, m.current = !1, g(!0))
            },
            {
                hoverProps: y
            } = (0, a.f)({
                isDisabled: c,
                onHoverStart: () => {
                    "focus" !== d && ("pointer" === (0, t.E)() ? m.current = !0 : m.current = !1, h())
                },
                onHoverEnd: () => {
                    "focus" !== d && (p.current = !1, m.current = !1, g())
                }
            }),
            {
                focusableProps: b
            } = (0, n.F)({
                isDisabled: c,
                onFocus: () => {
                    (0, t.v)() && (p.current = !0, h())
                },
                onBlur: () => {
                    p.current = !1, m.current = !1, g(!0)
                }
            }, o);
        return {
            triggerProps: {
                "aria-describedby": s.isOpen ? f : void 0,
                ...(0, r.f)(b, y, {
                    onPointerDown: x,
                    onKeyDown: x
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
        r = e.i(516830);
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
        } = (0, t.f)(e), m = (0, r.useMemo)(() => `${++a}`, []), p = (0, r.useRef)(null), h = (0, r.useRef)(f), g = () => {
            n[m] = b
        }, x = () => {
            for (let e in n) e !== m && (n[e](!0), delete n[e])
        }, y = () => {
            p.current && clearTimeout(p.current), p.current = null, x(), g(), l = !0, u(), i && (clearTimeout(i), i = null), s && (clearTimeout(s), s = null)
        }, b = e => {
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
                e || !(o > 0) || p.current ? y() : (x(), g(), d || l ? d || y() : (i && clearTimeout(i), i = setTimeout(() => {
                    i = null, l = !0, y()
                }, o)))
            },
            close: b
        }
    }])
}, 164163, 596889, e => {
    var t = e.i(230452),
        r = e.i(722978),
        n = e.i(26494),
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
                            g = (0, r.q)({
                                "p-6": "default" === d || "transparent" === d,
                                "py-6": "padded" === d
                            }),
                            x = (0, r.q)("object-cover", {
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
                                            className: x,
                                            quality: 100
                                        })
                                    }), o.image.description && (0, t.jsx)(s.f, {
                                        className: y,
                                        children: o.image.description
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: g,
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
    var t = e.i(230452),
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
    var t = e.i(230452),
        r = e.i(516830),
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
                    target: g = "_self",
                    locale: x,
                    className: y,
                    children: b,
                    size: v = "small",
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
                })[v], {
                    regular: "text-body-bold",
                    small: "text-small",
                    tiny: "text-tiny"
                } [v]),
                E = (0, a.U)("group-hover:fill-blue ml-2 h-4 w-4 fill-black transition duration-200 dark:fill-white group-focus-outline group-focus-visible:fill-blue"),
                S = "string" == typeof b ? b : "";
            return (0, t.jsx)(n.L, {
                ...(0, i.f)(u, m),
                ref: d,
                href: p,
                rel: h,
                target: g,
                locale: x,
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
                        children: b
                    }), "_blank" === g && (0, t.jsx)(c, {
                        className: E,
                        height: C[v],
                        width: C[v]
                    })]
                })
            })
        });
    e.s(["default", 0, d], 976317)
}, 363737, 7343, e => {
    var t = e.i(230452),
        r = e.i(516830),
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
    var t = e.i(230452),
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
    var t = e.i(230452),
        r = e.i(516830),
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
    e.q("/_next/static/media/unity-fallback-1.20iarm4a6k9yj.jpg")
}, 462847, e => {
    e.q("/_next/static/media/unity-fallback-2.1ebxcbsrcsgdf.jpg")
}, 245094, e => {
    e.q("/_next/static/media/unity-fallback-3.1mfj9xn2l589c.jpg")
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

//# debugId=1969294c-ef8f-afbc-5bf8-6d6132c5805d