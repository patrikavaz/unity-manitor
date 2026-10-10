;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "94dc94e2-0980-5517-258e-e136ee0275e4")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 401861, 841889, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(722978),
        l = e.i(409781),
        r = e.i(960851),
        s = e.i(146911);
    let n = ({
            title: e,
            text: n,
            action: o,
            truncate: i,
            className: c = "",
            isContained: d,
            dismiss: u
        }) => {
            let m = (0, l.useMemo)(() => `unity-alert-${n?.substring(0,30).replaceAll(" ","_")}`, [n]),
                [f, p] = (0, l.useState)(!0),
                [x, g] = (0, l.useState)(!1);
            return ((0, l.useEffect)(() => {
                localStorage?.getItem(m) && g(!0)
            }, [m]), x) ? null : (0, t.jsx)("div", {
                className: (0, a.clsx)({
                    container: d
                }),
                "data-sentry-component": "Alert",
                "data-sentry-source-file": "Alert.tsx",
                children: (0, t.jsxs)("div", {
                    className: (0, a.clsx)("dark:bg-blue/10 relative flex w-full flex-col justify-between gap-4 bg-sky-100 py-4 pr-5 pl-11 text-sm text-gray-900 transition-colors sm:flex-row", {
                        flex: u?.enabled
                    }, {
                        "rounded-lg": d
                    }, c),
                    children: [(0, t.jsx)(r.Info, {
                        size: 18,
                        className: "ph-fill fill-blue absolute top-5 left-[1rem]",
                        weight: "fill",
                        "data-sentry-element": "Info",
                        "data-sentry-source-file": "Alert.tsx"
                    }), (0, t.jsxs)("div", {
                        className: "",
                        children: [e && (0, t.jsx)("div", {
                            className: "text-small-bold",
                            children: e
                        }), (0, t.jsxs)("div", {
                            children: [(0, t.jsx)("div", {
                                className: (0, a.clsx)({
                                    "line-clamp-4 sm:line-clamp-2": i?.enabled && f
                                }),
                                children: n
                            }), i?.enabled && (0, t.jsx)("button", {
                                onClick: () => p(!f),
                                className: "text-tiny shadow-underline-sm hover:text-blue hover:shadow-underline focus:text-blue dark:hover:text-blue text-black transition duration-200 dark:text-white",
                                children: f ? i.seeMoreLabel : i.seeLessLabel
                            })]
                        })]
                    }), (o?.href || u?.enabled) && (0, t.jsxs)("div", {
                        className: "sm:auto inline-flex w-fit items-center gap-4 [&>*]:whitespace-nowrap",
                        children: [o && (0, t.jsx)(s.default, {
                            className: "mx-auto mt-0 inline-block whitespace-nowrap",
                            href: o.href,
                            target: o.target || "_self",
                            size: "tiny",
                            underline: !0,
                            children: o.title
                        }), u?.enabled && (0, t.jsx)("button", {
                            onClick: () => {
                                g(!0), localStorage.setItem(m, Date.now().toString())
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
            text: l,
            action: r,
            theme: s,
            truncate: o,
            dismiss: i,
            isContained: c,
            isHidden: d,
            spacing: u
        }) => {
            let m = (0, a.clsx)({
                "pt-10": u?.top
            }, {
                "pb-10": u?.bottom
            }, {
                "dark bg-black": "dark" === s
            });
            return d || !l ? null : (0, t.jsx)("section", {
                className: m,
                "data-sentry-component": "AlertBlock",
                "data-sentry-source-file": "AlertBlock.tsx",
                children: (0, t.jsx)(n, {
                    title: e,
                    text: l,
                    isContained: c,
                    truncate: o || {},
                    dismiss: i || {},
                    action: r && {
                        title: r?.text || "",
                        href: r?.fieldLink?.linkReference?.href?.current || "",
                        target: r?.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self"
                    },
                    "data-sentry-element": "Alert",
                    "data-sentry-source-file": "AlertBlock.tsx"
                })
            })
        };
    e.s(["default", 0, o], 841889), e.s(["default", 0, o], 401861)
}, 480880, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(409781);
    e.s(["default", 0, ({
        blocks: e,
        blockMap: l,
        ...r
    }) => (0, t.jsx)(t.Fragment, {
        children: e?.map((e, s) => {
            let n = e?._type,
                o = l[n];
            return e.isHidden ? null : o ? (0, t.jsx)("div", {
                children: a.default.createElement(o, {
                    key: `block-${s}`,
                    ...e,
                    blockIndex: s + 1,
                    blockType: n,
                    blockKey: `${n}-${s}`,
                    ...r
                })
            }, `block-${s}`) : void 0
        })
    })])
}, 459923, 201763, 570994, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(409781),
        l = e.i(833449),
        r = e.i(425314),
        s = e.i(722978),
        n = e.i(131581),
        o = e.i(124576);
    let i = ({
        keyFigures: e,
        nested: a = !1,
        theme: r = "light"
    }) => {
        let n = (0, s.clsx)("container col-span-12 pt-16 grid grid-cols-12 gap-2 ", {
            "py-16": !a
        });
        return (0, t.jsx)("div", {
            className: "dark" === r ? "bg-black text-white" : "",
            "data-sentry-component": "KeyFigures",
            "data-sentry-source-file": "KeyFigures.tsx",
            children: (0, t.jsx)("div", {
                className: n,
                children: e?.map((n, o) => {
                    let {
                        value: i,
                        label: c
                    } = n, d = (0, s.clsx)("col-span-12 flex rounded-md items-center gap-2 px-4 py-2 filter md:p-4 lg:col-span-4 xl:p-6", {
                        "backdrop-blur-lg": a && "dark" !== r,
                        "bg-gray-900 dark:bg-black": "dark" === r,
                        "bg-gray-100 dark:bg-gray-900 text-gray-800": !a && "dark" !== r,
                        "xl:col-span-3": e?.length === 4
                    });
                    return i?.type === "text" ? (0, t.jsxs)("div", {
                        className: d,
                        children: [(0, t.jsx)("div", {
                            className: "loco-text-heading-sm min-w-[30%] shrink-0 gap-10 pr-4 text-center",
                            children: i.text
                        }), (0, t.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: c
                        })]
                    }, o) : c && i?.type === "icon" && !i.url ? (0, t.jsx)("div", {
                        className: d,
                        children: (0, t.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: c
                        })
                    }, o) : i?.type === "icon" && i.url ? (0, t.jsxs)("div", {
                        className: d,
                        children: [(0, t.jsx)("div", {
                            className: "flex min-w-[30%] shrink-0 gap-10 text-center lg:justify-center",
                            children: (0, t.jsx)(l.default, {
                                src: i.url,
                                alt: i.description,
                                width: 40,
                                height: 40
                            })
                        }), (0, t.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: c
                        })]
                    }, o) : null
                })
            })
        })
    };
    e.s(["default", 0, i], 201763);
    var c = e.i(749583);
    let d = (0, r.default)(() => e.A(104688), {
            loadableGenerated: {
                modules: [425687]
            },
            ssr: !1
        }),
        u = ({
            eyebrow: e,
            title: r,
            titleSize: u = "medium",
            description: m,
            backgroundImage: f,
            actions: p = [],
            keyFigures: x,
            video: g,
            mention: h,
            fullScreen: b = !0
        }) => {
            let y = (0, a.useRef)(null),
                j = (0, n.useInView)(y, {
                    once: !0
                }),
                v = (0, o.useReducedMotion)(),
                [w, k] = (0, a.useState)(!1),
                C = (0, s.default)(`font-nohemi mt-24 my-4 ${"small"===u?"mb-6":"mb-8"}`, {
                    "loco-text-heading-xl": "medium" === u,
                    "loco-text-headline": "large" === u,
                    "loco-text-heading-lg": "small" === u
                }),
                N = (0, s.default)("object-cover transition-opacity duration-1000 opacity-100", {
                    "opacity-0": w
                });
            return (0, t.jsxs)("section", {
                ref: y,
                className: "dark relative",
                "data-sentry-component": "Headliner",
                "data-sentry-source-file": "Headliner.tsx",
                children: [f && (0, t.jsx)(l.default, {
                    src: f.src,
                    placeholder: "blur",
                    blurDataURL: f.placeholder,
                    fill: !0,
                    alt: "",
                    className: N,
                    sizes: "100vw"
                }), j && !v && g && (0, t.jsx)(d, {
                    url: g || "",
                    playing: !0,
                    loop: !0,
                    muted: !0,
                    playsinline: !0,
                    width: "100%",
                    height: "100%",
                    onReady: () => {
                        k(!0)
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
                        backgroundImage: b ? `
    linear-gradient(180deg, rgba(1, 1, 1, 0.00) 45.08%, rgba(1, 1, 1, 0.00) 49.56%, rgba(1, 1, 1, 0.01) 53.84%, rgba(1, 1, 1, 0.02) 57.92%, rgba(1, 1, 1, 0.04) 61.84%, rgba(1, 1, 1, 0.06) 65.62%, rgba(1, 1, 1, 0.09) 69.27%, rgba(1, 1, 1, 0.12) 72.82%, rgba(1, 1, 1, 0.16) 76.29%, rgba(1, 1, 1, 0.20) 79.7%, rgba(1, 1, 1, 0.24) 83.06%, rgba(1, 1, 1, 0.29) 86.41%, rgba(1, 1, 1, 0.34) 89.75%, rgba(1, 1, 1, 0.39) 93.12%, rgba(1, 1, 1, 0.44) 96.53%, rgba(1, 1, 1, 0.50) 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)` : ""
                    }
                }), (0, t.jsxs)("div", {
                    className: `relative container flex ${b&&"min-h-[calc(100vh-4rem)]"} flex-col py-8 text-white`,
                    children: [(0, t.jsx)("div", {
                        className: "flex grow flex-col justify-stretch",
                        children: (0, t.jsxs)("div", {
                            className: "flex h-full grow flex-col items-center justify-center text-center",
                            children: [e && (0, t.jsx)("div", {
                                className: "loco-caption-lg-semibold",
                                children: e
                            }), (0, t.jsx)("h1", {
                                className: C,
                                children: r
                            }), m && (0, t.jsx)("div", {
                                className: "loco-caption-sm-semibold mt-5",
                                children: m
                            }), p && (0, t.jsx)("div", {
                                className: "mt-6 flex flex-wrap items-center justify-center gap-4",
                                children: p.map((e, a) => {
                                    if (e.link) return (0, t.jsx)(c.default, {
                                        rounded: !0,
                                        hasArrow: !0,
                                        href: e.link.href,
                                        target: e.link.target,
                                        variant: 0 === a ? "primary" : "secondary",
                                        children: e.title
                                    }, `headliner-action-link-${e.title}-${a}`);
                                    if (e.form) {
                                        let l = {
                                            ...e.form.form,
                                            ...e.form.webinarFormParametersContent,
                                            extraFields: e.form.extraFields
                                        };
                                        return (0, t.jsx)("div", {
                                            children: e.form.renderModal({
                                                label: e.title,
                                                form: l
                                            })
                                        }, `headliner-action-modal-${e.title}-${a}`)
                                    }
                                    return null
                                })
                            })]
                        })
                    }), x && (0, t.jsx)(i, {
                        keyFigures: x,
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
        brandfolder: l,
        mention: r,
        eyebrow: s,
        title: n,
        titleSize: o,
        description: i,
        image: c,
        keyFigures: d,
        isHidden: f
    }) => {
        let {
            mapFormActions: p
        } = (0, m.useFormModal)(e), x = p(e), g = (0, a.useMemo)(() => (d?.data ?? []).map(e => e?.value?.text ? {
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
            children: !f && (0, t.jsx)(u, {
                actions: x,
                mention: r || "",
                eyebrow: s || "",
                title: n || "",
                titleSize: "small" === o ? "small" : "large" === o ? "large" : "medium",
                description: i || "",
                backgroundImage: {
                    src: c?.asset.url || "",
                    placeholder: c?.asset.metadata?.lqip || ""
                },
                keyFigures: g,
                video: l?.muxHLSURL || ""
            })
        })
    }], 459923)
}, 195051, 725751, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(722990),
        l = e.i(749583),
        r = e.i(239273),
        s = e.i(805518);
    e.s(["default", 0, ({
        blockedMessage: e,
        consentButtonLabel: n
    }) => {
        let o = "C0004";
        return (0, t.jsx)(t.Fragment, {
            children: !(() => {
                let [e] = (0, r.default)("OptanonConsent") || "", t = {};
                return e && e.split("groups=")[1].split("&")[0].split("%2C").forEach(e => {
                    let [a, l] = e.split("%3A");
                    t[a] = parseInt(l)
                }), t[o]
            })() && (0, t.jsxs)("div", {
                className: "consent absolute top-0 right-0 bottom-0 left-0 z-10 flex flex-col items-center overflow-auto rounded-2xl bg-black p-3 leading-5 text-white opacity-90 sm:justify-center sm:p-5",
                children: [(0, t.jsx)(s.default, {
                    className: "mx-auto text-center sm:w-4/5 sm:text-base",
                    children: (0, t.jsx)(a.PortableText, {
                        value: e
                    })
                }), (0, t.jsx)("div", {
                    className: "mt-5",
                    children: (0, t.jsx)(l.default, {
                        rounded: !0,
                        target: "_self",
                        variant: "primary",
                        onPress: () => {
                            let e = document.getElementById("ot-sdk-btn"),
                                t = document.getElementById(`ot-header-id-${o}`),
                                a = window;
                            a && a.OneTrust ? a.OneTrust.ToggleInfoDisplay() : e.click(), t.click()
                        },
                        children: n
                    })
                })]
            })
        })
    }], 195051);
    var n = e.i(409781),
        o = e.i(210310),
        i = e.i(326388);
    e.s(["default", 0, ({
        theme: e,
        isHidden: a,
        verticalHeadingClass: l,
        productCatalogItems: r,
        htmlTableContent: s
    }) => {
        let {
            appendCommerceDataForMultipleProducts: c
        } = (0, i.default)(), d = (0, n.useCallback)(e => {
            let t = c(e, r);
            return t || e
        }, [r, c]), u = (0, n.useMemo)(() => {
            let e = s.rows.map(e => (e.cells = e.cells.map(e => d(e)), e));
            return {
                ...s,
                rows: e
            }
        }, [s, d]);
        return (0, t.jsx)(t.Fragment, {
            children: !a && (0, t.jsx)("section", {
                className: "dark" === e ? "dark" : "",
                children: (0, t.jsx)("div", {
                    className: "mx-auto max-w-7xl p-6 dark:bg-black",
                    children: (0, t.jsx)(o.default, {
                        verticalHeadingClass: l || "",
                        table: u
                    })
                })
            })
        })
    }], 725751)
}, 436324, 531469, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(409781),
        l = e.i(749583),
        r = e.i(222061),
        s = e.i(829483),
        n = e.i(662380),
        o = e.i(179695),
        i = e.i(613821),
        c = e.i(466673),
        d = e.i(396241),
        u = e.i(309578),
        m = e.i(575146),
        f = e.i(239273),
        p = e.i(869324),
        x = e.i(497492);
    let g = ({
        form: e,
        isGrowForm: t,
        onSuccess: a,
        close: l,
        onShowSuccessMessage: r
    }) => {
        let s = (0, x.getFilteredQueryParams)(["sfcid", "sflsa", "sfit"], t),
            n = (0, x.getQueryParams)(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"], !0),
            {
                setFormSubmitted: o
            } = (0, m.useGateContext)(),
            [i] = (0, f.default)("ELOQUA");
        return (c, d, m) => {
            let f = t ? (({
                    emailConfirmation: e,
                    ghandler: t,
                    gcid: a,
                    growDivision: l,
                    growDepartment: r
                }) => ({
                    emailConfirmation: e,
                    ghandler: t,
                    gcid: a,
                    growDivision: l,
                    growDepartment: r,
                    grow: !0
                }))(e?.sfdcIntegration || {}) : e?.sfdcIntegration,
                g = e?.fields ? (0, x.getAlwaysSendOnData)(e.fields, d, m) : {};
            return c.elqCustomerGUID = i?.split("&")?.[0]?.split("GUID=")?.[1] || "", c = {
                ...c,
                ...f,
                ...g,
                ...n,
                ...s,
                ...e?.extraFields
            }, fetch("https://create.unity.com/e/f2", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams((0, x.cleanData)(c)).toString()
            }).then(() => {
                (0, p.default)({
                    properties: {
                        form_action: "submitted",
                        form_id: c.elqFormID,
                        form_name: c.elqFormName,
                        form_customer_id: c.elqCustomerGUID
                    }
                }), o(!0), a?.(), e?.successMessage?.showSuccessMessage ? r?.() : l?.()
            }).catch(e => u.captureException(e))
        }
    };
    e.s(["useEloquaSubmit", 0, g], 531469);
    var h = e.i(272351);
    e.s(["FormBuilder", 0, ({
        form: e,
        close: u,
        isGrowForm: m
    }) => {
        let [f, p] = (0, a.useState)(!1), {
            handleSubmit: x,
            control: b,
            setValue: y,
            watch: j,
            getValues: v,
            formState: {
                isSubmitting: w
            }
        } = (0, c.useForm)({
            reValidateMode: "onChange",
            mode: "onChange"
        }), k = j(d.COUNTRY_CODE), C = g({
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
            }), e?.successMessage?.closeButtonText && (0, t.jsx)(l.default, {
                onPress: u,
                className: "[&>div>span]:!text-black hover:[&>div>span]:!underline",
                variant: "secondary",
                children: e?.successMessage?.closeButtonText
            })]
        }) : (0, t.jsxs)(i.default, {
            onSubmit: x(t => {
                if (!(0, h.hasActiveBlockingField)(e?.fields, v, k)) return C(t, v, k)
            }),
            "data-sentry-element": "Form",
            "data-sentry-component": "FormBuilder",
            "data-sentry-source-file": "FormsBuilder.tsx",
            children: [(0, t.jsx)("div", {
                className: "flex flex-col [&>*]:mt-3",
                children: e?.fields && e?.fields.map((e, a) => {
                    switch (e.formField) {
                        case "input":
                            return (0, t.jsx)(r.default, {
                                ...e,
                                control: b,
                                countryCode: k
                            }, a);
                        case "checkbox":
                            return (0, t.jsx)(s.default, {
                                countryCode: k,
                                ...e,
                                control: b
                            }, a);
                        case "dropdown":
                            return (0, t.jsx)(n.default, {
                                countryCode: k,
                                ...e,
                                control: b,
                                setValue: y
                            }, a);
                        case "richText":
                            return (0, t.jsx)(o.default, {
                                ...e,
                                control: b,
                                countryCode: k
                            }, a)
                    }
                })
            }), e?.actions && (0, t.jsxs)("div", {
                className: "mt-10 border-t border-t-gray-200 pt-6",
                children: [e?.actions?.primaryActionText && (0, t.jsx)(l.default, {
                    type: "submit",
                    rounded: !0,
                    hasArrow: !0,
                    disabled: w,
                    children: e?.actions?.primaryActionText
                }), e?.actions?.secondaryActionText && (0, t.jsx)(l.default, {
                    onPress: u,
                    className: "[&>div>span]:!text-black hover:[&>div>span]:!underline",
                    variant: "secondary",
                    children: e?.actions?.secondaryActionText
                })]
            })]
        })
    }], 436324)
}, 379294, e => {
    e.q("/_next/static/media/unity-fallback-1.0hkhe9udbm85c.jpg")
}, 462847, e => {
    e.q("/_next/static/media/unity-fallback-2.235xxljphshbr.jpg")
}, 245094, e => {
    e.q("/_next/static/media/unity-fallback-3.043zq62y9b9ix.jpg")
}, 387660, e => {
    "use strict";
    var t = e.i(869324);
    e.s(["pushVideoEvent", 0, e => {
        let a = (({
            name: e,
            videoDuration: t,
            videoProgress: a
        }) => ({
            event: "userEvent",
            event_name: e,
            properties: {
                video_duration: t,
                video_progress: a
            }
        }))(e);
        (0, t.default)(a)
    }])
}, 115219, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(363737),
        l = e.i(436324),
        r = e.i(869324),
        s = e.i(537251);
    e.s(["applyFormOverrides", 0, function(e, t) {
        let a;
        if (!t || !e?.fields) return e;
        try {
            a = JSON.parse(t)
        } catch {
            return e
        }
        if (!a) return e;
        let l = [...e.fields];
        for (let e of Object.keys(a)) {
            let t = l.findIndex(t => t.formFieldId === e);
            if (t < 0) continue;
            let r = a[e];
            null != r.isRequired && (l[t] = {
                ...l[t],
                isRequired: r.isRequired
            }), r.isHidden && l.splice(t, 1)
        }
        return {
            ...e,
            fields: l
        }
    }, "trackFormOpen", 0, function(e) {
        (0, r.default)({
            properties: {
                form_action: "presented",
                form_id: e.fields?.find(e => "elqFormID" === e.formFieldId)?.defaultValue,
                form_name: e.fields?.find(e => "elqFormName" === e.formFieldId)?.defaultValue
            }
        })
    }, "useFormModal", 0, e => {
        let {
            extraFields: n
        } = (0, s.default)(), o = ({
            label: s,
            form: n
        }) => {
            let o = ((e, t) => {
                let a = e?.find(e => t.title === e?.form?.title)?.customSelections || "";
                try {
                    return JSON.parse(a)
                } catch (e) {
                    return null
                }
            })(e || [], n);
            if (o && n?.fields)
                for (let e of Object.keys(o)) {
                    let t = n.fields.findIndex(t => t.formFieldId === e);
                    if (t >= 0) {
                        let a = o[e];
                        null != a.isRequired && (n.fields[t].isRequired = o[e].isRequired), a.isHidden && n.fields.splice(t, 1)
                    }
                }
            return (0, t.jsx)(a.default, {
                actionLabel: s,
                onOpenChange: e => {
                    e && (0, r.default)({
                        properties: {
                            form_action: "presented",
                            form_id: n.fields?.find(e => "elqFormID" === e.formFieldId)?.defaultValue,
                            form_name: n.fields?.find(e => "elqFormName" === e.formFieldId)?.defaultValue
                        }
                    })
                },
                "data-sentry-element": "Modal",
                "data-sentry-component": "renderModal",
                "data-sentry-source-file": "useFormModal.tsx",
                children: e => (0, t.jsx)(a.default.Layout, {
                    modal: {
                        title: n.title,
                        description: n.description
                    },
                    children: n && (0, t.jsx)(l.FormBuilder, {
                        form: n,
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
                    extraFields: n,
                    renderModal: o
                } : null
            })),
            extraFields: n
        }
    }])
}, 551779, e => {
    "use strict";
    var t, a, l = ((t = {}).en = "en", t.vn = "vi_vn", t.ja = "ja_jp", t.fr = "fr_fr", t.pt = "pt_br", t.cn = "zh_cn", t.es = "es_es", t.ru = "ru_ru", t.kr = "ko_kr", t),
        r = ((a = {}).en = "en-US", a.vn = "vi-VN", a.ja = "ja-JP", a.fr = "fr-FR", a.pt = "pt-BR", a.cn = "zh-CN", a.es = "es-ES", a.ru = "ru-RU", a.kr = "ko-KR", a);
    e.s(["LanguageMap", () => l, "LanguageMapIETFLanguageTag", () => r])
}, 814701, e => {
    "use strict";
    var t = e.i(112338);
    e.s(["button", () => t.MotionButton])
}, 22766, (e, t, a) => {
    t.exports = e.r(581511)(e.r(78974), "DataView")
}, 13715, (e, t, a) => {
    t.exports = e.r(581511)(e.r(78974), "Promise")
}, 292408, (e, t, a) => {
    t.exports = e.r(581511)(e.r(78974), "Set")
}, 843031, (e, t, a) => {
    t.exports = e.r(581511)(e.r(78974), "WeakMap")
}, 354700, (e, t, a) => {
    var l = e.r(22766),
        r = e.r(764138),
        s = e.r(13715),
        n = e.r(292408),
        o = e.r(843031),
        i = e.r(416907),
        c = e.r(908829),
        d = "[object Map]",
        u = "[object Promise]",
        m = "[object Set]",
        f = "[object WeakMap]",
        p = "[object DataView]",
        x = c(l),
        g = c(r),
        h = c(s),
        b = c(n),
        y = c(o),
        j = i;
    (l && j(new l(new ArrayBuffer(1))) != p || r && j(new r) != d || s && j(s.resolve()) != u || n && j(new n) != m || o && j(new o) != f) && (j = function(e) {
        var t = i(e),
            a = "[object Object]" == t ? e.constructor : void 0,
            l = a ? c(a) : "";
        if (l) switch (l) {
            case x:
                return p;
            case g:
                return d;
            case h:
                return u;
            case b:
                return m;
            case y:
                return f
        }
        return t
    }), t.exports = j
}, 87522, (e, t, a) => {
    var l = e.r(668488),
        r = e.r(354700),
        s = e.r(410090),
        n = e.r(778116),
        o = e.r(622914),
        i = e.r(432816),
        c = e.r(820092),
        d = e.r(905330),
        u = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        if (null == e) return !0;
        if (o(e) && (n(e) || "string" == typeof e || "function" == typeof e.splice || i(e) || d(e) || s(e))) return !e.length;
        var t = r(e);
        if ("[object Map]" == t || "[object Set]" == t) return !e.size;
        if (c(e)) return !l(e).length;
        for (var a in e)
            if (u.call(e, a)) return !1;
        return !0
    }
}, 180793, (e, t, a) => {
    t.exports = function(e) {
        return null == e
    }
}, 829150, 434438, e => {
    "use strict";
    var t = e.i(551779);
    let a = t.LanguageMapIETFLanguageTag[t.LanguageMap.en],
        l = e => Object.keys(t.LanguageMapIETFLanguageTag).find(a => t.LanguageMapIETFLanguageTag[a] === e),
        r = (e = t.LanguageMap.en) => t.LanguageMapIETFLanguageTag[e] || a;
    e.s(["FALLBACK_LANGUAGE", 0, a, "default", 0, r, "getLanguageKey", 0, l], 434438);
    var s = e.i(87522),
        n = e.i(180793);
    let o = [t.LanguageMapIETFLanguageTag.vn];
    e.s(["default", 0, (e, i, c) => {
        let {
            locale: d,
            ...u
        } = i, m = e;
        return c && m ? ((e => {
            let a;
            try {
                a = new URL(e)
            } catch (e) {
                return !1
            }
            return r(a.pathname.split("/")[1]) !== t.LanguageMapIETFLanguageTag.en
        })(m) || d === a || d && o.includes(d) || (m = ((e, t) => {
            let a;
            if (!t) return e;
            try {
                a = new URL(e)
            } catch (t) {
                return e
            }
            let l = a.pathname.split("/");
            return l.splice(1, 0, t), a.pathname = l.join("/"), a.toString()
        })(m, l(d))), ((e, t) => {
            let a;
            if ((0, s.default)(t)) return e;
            let l = -1 === (a = e.indexOf("?")) ? {} : e.slice(a + 1).split("&").reduce((e, t) => {
                    let [a, l] = t.split("=");
                    return a && (e[decodeURIComponent(a)] = decodeURIComponent(l || "")), e
                }, {}),
                r = {};
            Object.entries(t).forEach(([e, t]) => {
                Object.prototype.hasOwnProperty.call(l, e) || (0, n.default)(t) || (r[e] = t)
            });
            let o = new URLSearchParams(r).toString();
            return e.includes("?") ? `${e}&${o}` : `${e}?${o}`
        })(m, u)) : m
    }], 829150)
}, 515745, 764350, e => {
    "use strict";
    var t = e.i(120194);
    let a = (e, t, a) => (((1 - 3 * a + 3 * t) * e + (3 * a - 6 * t)) * e + 3 * t) * e;

    function l(e, l, r, s) {
        return e === l && r === s ? t.noop : t => 0 === t || 1 === t ? t : a(function(e, t, l, r, s) {
            let n, o, i = 0;
            do(n = a(o = t + (l - t) / 2, r, s) - e) > 0 ? l = o : t = o; while (Math.abs(n) > 1e-7 && ++i < 12) return o
        }(t, 0, 1, e, r), l, s)
    }
    e.s(["cubicBezier", 0, l], 764350);
    let r = l(.42, 0, 1, 1),
        s = l(0, 0, .58, 1),
        n = l(.42, 0, .58, 1);
    e.s(["easeIn", 0, r, "easeInOut", 0, n, "easeOut", 0, s], 515745)
}, 79389, 644995, e => {
    "use strict";
    var t = e.i(409781),
        a = function() {
            return (a = Object.assign || function(e) {
                for (var t, a = 1, l = arguments.length; a < l; a++)
                    for (var r in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }).apply(this, arguments)
        },
        l = t.forwardRef(function(e, l) {
            var r = t.useState(!1),
                s = r[0],
                n = r[1],
                o = t.useState(!1),
                i = o[0],
                c = o[1],
                d = encodeURIComponent(e.id),
                u = "string" == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
                m = e.title,
                f = e.poster || "hqdefault",
                p = "&".concat(e.params) || "",
                x = e.muted ? "&mute=1" : "",
                g = e.announce || "Watch",
                h = e.webp ? "webp" : "jpg",
                b = e.webp ? "vi_webp" : "vi",
                y = e.thumbnail || (e.playlist ? "https://i.ytimg.com/".concat(b, "/").concat(u, "/").concat(f, ".").concat(h) : "https://i.ytimg.com/".concat(b, "/").concat(d, "/").concat(f, ".").concat(h)),
                j = e.noCookie ? "https://www.youtube-nocookie.com" : "https://www.youtube.com";
            j = e.cookie ? "https://www.youtube.com" : "https://www.youtube-nocookie.com";
            var v = e.playlist ? "".concat(j, "/embed/videoseries?autoplay=1").concat(x, "&list=").concat(d).concat(p) : "".concat(j, "/embed/").concat(d, "?autoplay=1&state=1").concat(x).concat(p),
                w = e.activatedClass || "lyt-activated",
                k = e.adNetwork || !1,
                C = e.aspectHeight || 9,
                N = e.aspectWidth || 16,
                L = e.iframeClass || "",
                T = e.playerClass || "lty-playbtn",
                I = e.wrapperClass || "yt-lite",
                M = e.onIframeAdded || function() {},
                F = e.rel ? "prefetch" : "preload",
                _ = e.containerElement || "article";
            return t.useEffect(function() {
                i && M()
            }, [i]), t.createElement(t.Fragment, null, t.createElement("link", {
                rel: F,
                href: y,
                as: "image"
            }), t.createElement(t.Fragment, null, s && t.createElement(t.Fragment, null, t.createElement("link", {
                rel: "preconnect",
                href: j
            }), t.createElement("link", {
                rel: "preconnect",
                href: "https://www.google.com"
            }), k && t.createElement(t.Fragment, null, t.createElement("link", {
                rel: "preconnect",
                href: "https://static.doubleclick.net"
            }), t.createElement("link", {
                rel: "preconnect",
                href: "https://googleads.g.doubleclick.net"
            })))), t.createElement(_, {
                onPointerOver: function() {
                    s || n(!0)
                },
                onClick: function() {
                    i || c(!0)
                },
                className: "".concat(I, " ").concat(i ? w : ""),
                "data-title": m,
                style: a({
                    backgroundImage: "url(".concat(y, ")")
                }, {
                    "--aspect-ratio": "".concat(C / N * 100, "%")
                })
            }, t.createElement("button", {
                type: "button",
                className: T,
                "aria-label": "".concat(g, " ").concat(m)
            }), i && t.createElement("iframe", {
                ref: l,
                className: L,
                title: m,
                width: "560",
                height: "315",
                frameBorder: "0",
                allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: !0,
                src: v
            })))
        });
    e.s(["default", 0, l], 79389);
    var r = e.i(785328);
    e.s(["default", 0, ({
        className: e = "",
        width: t = 16,
        height: a = 16
    }) => (0, r.jsxs)("svg", {
        width: t,
        height: a,
        viewBox: "0 0 256 256",
        xmlns: "http://www.w3.org/2000/svg",
        className: e,
        "data-sentry-element": "svg",
        "data-sentry-component": "Close",
        "data-sentry-source-file": "CloseIcon.tsx",
        children: [(0, r.jsx)("rect", {
            width: "256",
            height: "256",
            fill: "none",
            "data-sentry-element": "rect",
            "data-sentry-source-file": "CloseIcon.tsx"
        }), (0, r.jsx)("line", {
            x1: "200",
            y1: "56",
            x2: "56",
            y2: "200",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16",
            "data-sentry-element": "line",
            "data-sentry-source-file": "CloseIcon.tsx"
        }), (0, r.jsx)("line", {
            x1: "200",
            y1: "200",
            x2: "56",
            y2: "56",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16",
            "data-sentry-element": "line",
            "data-sentry-source-file": "CloseIcon.tsx"
        })]
    })], 644995)
}, 930839, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = void 0, a.default = {
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
}, 570133, 210310, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(537655),
        l = e.i(930839),
        r = e.i(46860),
        s = e.i(525296),
        n = e.i(952405),
        o = e.i(852529),
        i = e.i(847331);
    a.Light.registerLanguage("csharp", r.default), a.Light.registerLanguage("javascript", s.default), a.Light.registerLanguage("xml", n.default), a.Light.registerLanguage("rust", o.default), a.Light.registerLanguage("css", i.default), e.s(["default", 0, ({
        code: e,
        language: r
    }) => (0, t.jsx)("div", {
        className: "text-white [&>pre]:rounded-xl [&>pre]:!p-4",
        "data-sentry-component": "Code",
        "data-sentry-source-file": "Code.tsx",
        children: (0, t.jsx)(a.Light, {
            style: l.default,
            language: r,
            "data-sentry-element": "SyntaxHighlighter",
            "data-sentry-source-file": "Code.tsx",
            children: e
        })
    })], 570133);
    var c = e.i(409781),
        d = e.i(749583),
        u = e.i(206775),
        m = e.i(652955),
        f = e.i(229696),
        p = e.i(722978),
        x = e.i(805518),
        g = e.i(363737);
    let h = ({
            className: e
        }) => (0, t.jsx)("svg", {
            className: e,
            width: "17",
            height: "16",
            viewBox: "0 0 17 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "data-sentry-element": "svg",
            "data-sentry-component": "ArrowsIcon",
            "data-sentry-source-file": "ArrowsIcon.tsx",
            children: (0, t.jsx)("g", {
                id: "ð· ArrowsOutSimple",
                "data-sentry-element": "g",
                "data-sentry-source-file": "ArrowsIcon.tsx",
                children: (0, t.jsx)("path", {
                    id: "Vector",
                    d: "M13.7144 3V6C13.7144 6.13261 13.6617 6.25979 13.5679 6.35355C13.4741 6.44732 13.347 6.5 13.2144 6.5C13.0817 6.5 12.9546 6.44732 12.8608 6.35355C12.767 6.25979 12.7144 6.13261 12.7144 6V4.20687L9.56811 7.35375C9.47429 7.44757 9.34704 7.50028 9.21436 7.50028C9.08167 7.50028 8.95443 7.44757 8.86061 7.35375C8.76678 7.25993 8.71408 7.13268 8.71408 7C8.71408 6.86732 8.76678 6.74007 8.86061 6.64625L12.0075 3.5H10.2144C10.0817 3.5 9.95457 3.44732 9.8608 3.35355C9.76703 3.25979 9.71436 3.13261 9.71436 3C9.71436 2.86739 9.76703 2.74021 9.8608 2.64645C9.95457 2.55268 10.0817 2.5 10.2144 2.5H13.2144C13.347 2.5 13.4741 2.55268 13.5679 2.64645C13.6617 2.74021 13.7144 2.86739 13.7144 3ZM6.86061 8.64625L3.71436 11.7931V10C3.71436 9.86739 3.66168 9.74021 3.56791 9.64645C3.47414 9.55268 3.34696 9.5 3.21436 9.5C3.08175 9.5 2.95457 9.55268 2.8608 9.64645C2.76703 9.74021 2.71436 9.86739 2.71436 10V13C2.71436 13.1326 2.76703 13.2598 2.8608 13.3536C2.95457 13.4473 3.08175 13.5 3.21436 13.5H6.21436C6.34696 13.5 6.47414 13.4473 6.56791 13.3536C6.66168 13.2598 6.71436 13.1326 6.71436 13C6.71436 12.8674 6.66168 12.7402 6.56791 12.6464C6.47414 12.5527 6.34696 12.5 6.21436 12.5H4.42123L7.56811 9.35375C7.66193 9.25993 7.71463 9.13268 7.71463 9C7.71463 8.86732 7.66193 8.74007 7.56811 8.64625C7.47429 8.55243 7.34704 8.49972 7.21436 8.49972C7.08167 8.49972 6.95443 8.55243 6.86061 8.64625Z",
                    fill: "#3A5BC7",
                    "data-sentry-element": "path",
                    "data-sentry-source-file": "ArrowsIcon.tsx"
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
            "data-sentry-element": "svg",
            "data-sentry-component": "CloseIcon",
            "data-sentry-source-file": "CloseIcon.tsx",
            children: (0, t.jsx)("g", {
                id: "ð· X",
                "data-sentry-element": "g",
                "data-sentry-source-file": "CloseIcon.tsx",
                children: (0, t.jsx)("path", {
                    id: "Vector",
                    d: "M16.067 15.1828C16.1251 15.2409 16.1712 15.3098 16.2026 15.3857C16.234 15.4615 16.2502 15.5429 16.2502 15.625C16.2502 15.7071 16.234 15.7884 16.2026 15.8643C16.1712 15.9402 16.1251 16.0091 16.067 16.0672C16.009 16.1252 15.94 16.1713 15.8642 16.2027C15.7883 16.2342 15.707 16.2503 15.6249 16.2503C15.5427 16.2503 15.4614 16.2342 15.3855 16.2027C15.3097 16.1713 15.2407 16.1252 15.1827 16.0672L9.99986 10.8836L4.81705 16.0672C4.69977 16.1844 4.54071 16.2503 4.37486 16.2503C4.20901 16.2503 4.04995 16.1844 3.93267 16.0672C3.8154 15.9499 3.74951 15.7908 3.74951 15.625C3.74951 15.4591 3.8154 15.3001 3.93267 15.1828L9.11627 9.99998L3.93267 4.81717C3.8154 4.69989 3.74951 4.54083 3.74951 4.37498C3.74951 4.20913 3.8154 4.05007 3.93267 3.93279C4.04995 3.81552 4.20901 3.74963 4.37486 3.74963C4.54071 3.74963 4.69977 3.81552 4.81705 3.93279L9.99986 9.11639L15.1827 3.93279C15.2999 3.81552 15.459 3.74963 15.6249 3.74963C15.7907 3.74963 15.9498 3.81552 16.067 3.93279C16.1843 4.05007 16.2502 4.20913 16.2502 4.37498C16.2502 4.54083 16.1843 4.69989 16.067 4.81717L10.8835 9.99998L16.067 15.1828Z",
                    fill: "#000000",
                    "data-sentry-element": "path",
                    "data-sentry-source-file": "CloseIcon.tsx"
                })
            })
        }),
        y = ({
            children: e,
            colTitle: a,
            truncationEnabled: l,
            rowTitle: r,
            className: s = "",
            isTableCell: n
        }) => {
            let [o, i] = (0, c.useState)(!1), [u, m] = (0, c.useState)(!1), f = (0, c.useRef)(null), y = (0, p.default)({
                "cursor-pointer relative": o
            }, s), j = (0, p.default)({
                "line-clamp-3": l
            });
            (0, c.useEffect)(() => {
                let e = f.current;
                e && (e.scrollHeight > e.clientHeight ? i(!0) : i(!1))
            }, [f]);
            let v = () => {
                    m(!0)
                },
                w = l && o ? {
                    tabIndex: 0,
                    role: "button",
                    onClick: v,
                    onKeyDown: e => {
                        ("Enter" === e.key || "Space" === e.key) && v()
                    }
                } : {};
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsxs)("td", {
                    className: (0, p.default)(y, {
                        "bg-gray-50 p-3 dark:bg-gray-900": !n,
                        "h-full !p-0": n
                    }),
                    ...w,
                    children: [n ? e : (0, t.jsx)(x.default, {
                        className: j,
                        ref: f,
                        children: e
                    }), l && o && (0, t.jsx)(h, {
                        className: "absolute top-1.5 right-1.5"
                    })]
                }), (0, t.jsx)(g.default, {
                    isOpen: u,
                    onOpenChange: m,
                    showTriggerButton: !1,
                    "data-sentry-element": "Modal",
                    "data-sentry-source-file": "HtmlTableCell.tsx",
                    children: (0, t.jsxs)("div", {
                        className: "mt-20 flex w-6/12 flex-col rounded-3xl bg-white p-8 dark:bg-gray-800",
                        tabIndex: -1,
                        children: [(0, t.jsx)(d.default, {
                            onPress: () => {
                                m(!1)
                            },
                            variant: "secondary",
                            className: "self-end",
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "HtmlTableCell.tsx",
                            children: (0, t.jsx)(b, {
                                "data-sentry-element": "CloseIcon",
                                "data-sentry-source-file": "HtmlTableCell.tsx"
                            })
                        }), (0, t.jsx)(x.default, {
                            className: "caption-sm mb-2.5 text-black dark:text-white",
                            "data-sentry-element": "Text",
                            "data-sentry-source-file": "HtmlTableCell.tsx",
                            children: r
                        }), (0, t.jsx)("div", {
                            className: "text-heading-sm mb-4 text-black dark:text-white",
                            children: a
                        }), (0, t.jsx)("div", {
                            className: "text-small mb-8",
                            children: (0, t.jsx)(x.default, {
                                className: "text-black dark:text-gray-200",
                                "data-sentry-element": "Text",
                                "data-sentry-source-file": "HtmlTableCell.tsx",
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
        verticalHeadingClass: l = "",
        hideTitle: r = !1
    }) => {
        let [s, ...n] = e.rows.map(e => ({
            ...e,
            cells: (e.cells ?? []).map(e => "string" == typeof e ? e : "")
        })), o = `align-top text-heading-sm md:text-small-bold rounded-md bg-gray-100 text-gray-800 bg-gray-100 dark:bg-gray-700 md:dark:bg-gray-800 dark:text-gray-200 border-none ${l}`, i = "align-top rounded-md text-sm text-gray-800 dark:text-gray-200 border-none", g = (0, p.default)("w-full table-fixed border-separate border-spacing-2 break-words", a), h = (0, p.default)("h-full table-fixed border-separate border-spacing-1 break-words", a), b = (0, c.useCallback)(e => {
            let [a, ...l] = e.split("\n"), r = l.splice(1).map((e, a) => {
                let l = e.split("|").filter(e => e).map(e => e.trim());
                return (0, t.jsx)("div", {
                    className: "flex grow",
                    children: l.map((e, l) => (0, t.jsx)(f.default, {
                        className: "flex grow basis-0 items-center justify-center rounded-md bg-gray-50 px-6 py-4 text-center dark:bg-gray-900",
                        children: e
                    }, `cell-${a}-${l}-${e}`))
                }, `row-${a}`)
            });
            return (0, t.jsxs)("div", {
                className: "flex h-full flex-col",
                children: [(0, t.jsx)("div", {
                    className: "-ml-1 flex grow",
                    children: a.split("|").filter(e => e).map((e, a) => (0, t.jsx)(f.default, {
                        className: "ml-1 flex grow basis-0 items-center justify-center rounded-md bg-gray-50 px-6 py-4 text-center dark:bg-gray-900",
                        children: e.trim()
                    }, `header-cell-${a}-${e}`))
                }), r]
            })
        }, []), j = (0, c.useMemo)(() => n.map(e => e.cells.reduce((e, a, l) => ({
            ...e,
            [`col${l+1}`]: {
                component: a.startsWith("|") ? b(a) : (0, t.jsx)(f.default, {
                    options: {
                        overrides: {
                            Button: {
                                component: d.default
                            },
                            Label: {
                                component: u.default
                            },
                            Tooltip: {
                                component: m.default
                            }
                        }
                    },
                    children: a
                }),
                isTableCell: a.startsWith("|"),
                cellContent: a
            }
        }), {})), [n, b]), v = (0, c.useMemo)(() => s.cells.map((e, a) => (0, t.jsx)("th", {
            scope: "col",
            className: "min-w-[10rem] rounded-md border-none bg-gray-100 py-3.5 pr-4 pl-4 text-left align-top text-gray-800 dark:bg-gray-800 dark:text-gray-400",
            children: (0, t.jsx)(f.default, {
                options: {
                    overrides: {
                        Button: {
                            component: d.default
                        },
                        Label: {
                            component: u.default
                        },
                        Tooltip: {
                            component: m.default
                        }
                    }
                },
                children: e
            })
        }, `${a}-${e}`)), [s.cells]), w = (0, c.useMemo)(() => j.map((a, l) => {
            let r = Object.values(a),
                s = r[0];
            return (0, t.jsx)("tr", {
                className: "border-separate border-spacing-1",
                children: r.map((a, r) => (0, t.jsx)(y, {
                    isTableCell: a.isTableCell,
                    className: 0 === r ? o : i,
                    rowTitle: s.component,
                    colTitle: 0 !== r && v && v[r] ? v[r] : "",
                    truncationEnabled: e.tableTruncation,
                    children: a.component
                }, `${l}-${r}-${a.cellContent}`))
            }, l)
        }), [v, j, o, e.tableTruncation]), k = (0, c.useMemo)(() => s.cells.map((e, a) => (0, t.jsx)("th", {
            scope: "col",
            className: "text-tiny-bold rounded-md bg-gray-100 py-3.5 pr-4 pl-4 text-left align-top text-gray-800 dark:bg-gray-900 dark:text-gray-400",
            children: (0, t.jsx)(f.default, {
                options: {
                    overrides: {
                        Button: {
                            component: d.default
                        },
                        Label: {
                            component: u.default
                        },
                        Tooltip: {
                            component: m.default
                        }
                    }
                },
                children: e
            })
        }, `${a}-${e}`)), [s]), C = (0, c.useMemo)(() => j.map((e, a) => (0, t.jsx)("div", {
            className: "mb-4 min-w-full rounded-md bg-gray-100 align-middle dark:bg-gray-700",
            children: (0, t.jsxs)("table", {
                className: g,
                children: [s && s.cells.length > 0 && (0, t.jsx)("thead", {
                    className: "hidden",
                    children: (0, t.jsx)("tr", {
                        className: "border-separate border-spacing-1",
                        children: k
                    })
                }), (0, t.jsx)("tbody", {
                    className: "table-row-group bg-gray-50 dark:bg-gray-900",
                    children: Object.values(e).map((e, l) => e ? (0, t.jsx)("tr", {
                        className: "rounded-md",
                        children: (0, t.jsxs)("td", {
                            className: 0 === l ? o : i,
                            children: [0 !== l && s && s.cells[l] && (0, t.jsx)(f.default, {
                                options: {
                                    overrides: {
                                        Button: {
                                            component: d.default
                                        },
                                        Label: {
                                            component: u.default
                                        },
                                        Tooltip: {
                                            component: m.default
                                        }
                                    }
                                },
                                children: s.cells[l]
                            }), (0, t.jsx)(x.default, {
                                children: e.component
                            })]
                        })
                    }, `${a}-${l}-${s.cells[l]}`) : null)
                })]
            })
        }, `row-${a}`)), [j, s, g, o, k]);
        return (0, t.jsxs)("div", {
            "data-sentry-component": "HtmlTable",
            "data-sentry-source-file": "HtmlTable.tsx",
            children: [(0, t.jsx)("div", {
                className: "sm:flex sm:items-center",
                children: (0, t.jsxs)("div", {
                    className: "sm:flex-auto",
                    children: [!r && e.tableTitle && (0, t.jsx)("div", {
                        className: "text-heading-sm",
                        children: e.tableTitle
                    }), !r && e.tableDescription && (0, t.jsx)("p", {
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
                            className: h,
                            children: [v && (0, t.jsx)("thead", {
                                className: "table-header-group",
                                children: (0, t.jsx)("tr", {
                                    className: "border-separate border-spacing-1",
                                    children: v
                                })
                            }), (0, t.jsx)("tbody", {
                                className: "table-row-group",
                                children: w
                            })]
                        })
                    }), (0, t.jsxs)("div", {
                        className: "md:hidden",
                        children: [(0, t.jsx)("div", {
                            className: "text-body-bold mb-4",
                            children: (0, t.jsx)(f.default, {
                                options: {
                                    overrides: {
                                        Button: {
                                            component: d.default
                                        },
                                        Label: {
                                            component: u.default
                                        },
                                        Tooltip: {
                                            component: m.default
                                        }
                                    }
                                },
                                "data-sentry-element": "Markdown",
                                "data-sentry-source-file": "HtmlTable.tsx",
                                children: s && s.cells && s.cells[0] ? s.cells[0] : ""
                            })
                        }), C]
                    })]
                })
            })]
        })
    }], 210310)
}, 146911, e => {
    "use strict";
    let t = e.i(976317).default;
    e.s(["default", 0, t])
}, 224601, 934172, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(409781),
        l = e.i(833449),
        r = e.i(193863),
        s = e.i(79389),
        n = e.i(363737),
        o = e.i(749583),
        i = e.i(644995),
        c = e.i(195051),
        d = e.i(145694),
        u = e.i(387660);
    let m = (e, t = !0) => {
        let [l, r] = (0, a.useState)(null);
        return (0, a.useEffect)(() => {
            let a;
            return t && e.current && (a = setInterval(() => {
                let t = window.YT;
                t && e.current && (r(new t.Player(e.current)), clearInterval(a))
            }, 500)), () => {
                r(null), clearInterval(a)
            }
        }, [t, e]), {
            player: l
        }
    };
    e.s(["useYoutubeAPI", 0, m], 934172), e.s(["default", 0, ({
        title: e,
        url: f,
        container: p = !1,
        blockedMessage: x,
        consentButtonLabel: g
    }) => {
        let h = (0, r.default)(f),
            [b, y] = (0, a.useState)(!1),
            j = (0, a.useRef)(null),
            v = (0, a.useRef)(null),
            {
                player: w
            } = m(j, b),
            k = () => {
                y(!0)
            };
        return (0, a.useEffect)(() => {
            w && (v.current = w.addEventListener("onStateChange", e => {
                if ([1, 2].includes(e.data)) {
                    let t = "function" == typeof w.getDuration && w.getDuration() || 0,
                        a = Number((("function" == typeof w.getCurrentTime && w.getCurrentTime() || 0) / t * 100).toFixed(2)),
                        l = 1 === e.data ? "video_play" : "video_pause";
                    (0, u.pushVideoEvent)({
                        name: l,
                        videoDuration: t,
                        videoProgress: (Number.isNaN(a), a)
                    })
                }
            }))
        }, [w]), (0, a.useEffect)(() => {
            if (!b && w?.playerInfo?.playerState === 1) {
                let e = "function" == typeof w.getDuration && w.getDuration() || 0,
                    t = Number((("function" == typeof w.getCurrentTime && w.getCurrentTime() || 0) / e * 100).toFixed(2));
                (0, u.pushVideoEvent)({
                    name: "video_pause",
                    videoDuration: e,
                    videoProgress: (Number.isNaN(t), t)
                })
            }
        }, [b, w]), (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(d.default, {
                src: "https://www.youtube.com/iframe_api",
                "data-sentry-element": "Script",
                "data-sentry-source-file": "YouTubeModal.tsx"
            }), (0, t.jsxs)("div", {
                className: "relative h-full w-full self-center p-4 lg:p-0",
                children: [f && h && (0, t.jsxs)("div", {
                    className: "yt-lite z-10 h-full overflow-auto",
                    ...{
                        tabIndex: 0,
                        role: "button",
                        onClick: k,
                        onKeyDown: e => {
                            ("Enter" === e.key || "Space" === e.key) && k()
                        }
                    },
                    children: [(0, t.jsx)("div", {
                        className: "lty-playbtn"
                    }), (0, t.jsx)(l.default, {
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
                    onOpenChange: y,
                    showTriggerButton: !1,
                    "data-sentry-element": "Modal",
                    "data-sentry-source-file": "YouTubeModal.tsx",
                    children: (0, t.jsxs)("div", {
                        className: "z-50 mt-20 flex w-10/12 flex-col rounded-3xl bg-black p-4 lg:w-8/12",
                        tabIndex: -1,
                        children: [(0, t.jsx)(o.default, {
                            onPress: () => {
                                y(!1)
                            },
                            variant: "secondary",
                            className: "self-end overflow-hidden",
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "YouTubeModal.tsx",
                            children: (0, t.jsx)(i.default, {
                                className: "z-[60] h-5 w-5 text-white",
                                "data-sentry-element": "CloseIcon",
                                "data-sentry-source-file": "YouTubeModal.tsx"
                            })
                        }), (0, t.jsx)(s.default, {
                            id: h,
                            title: e,
                            iframeClass: "yt-iframe",
                            poster: "hqdefault",
                            ref: j,
                            params: "enablejsapi=1",
                            "data-sentry-element": "LiteYouTubeEmbed",
                            "data-sentry-source-file": "YouTubeModal.tsx"
                        }), (0, t.jsx)(c.default, {
                            blockedMessage: x,
                            consentButtonLabel: g,
                            "data-sentry-element": "ConsentIframe",
                            "data-sentry-source-file": "YouTubeModal.tsx"
                        })]
                    })
                })]
            })]
        })
    }], 224601)
}]);

//# debugId=94dc94e2-0980-5517-258e-e136ee0275e4