(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 401861, 841889, e => {
    "use strict";
    var t = e.i(785328),
        l = e.i(722978),
        a = e.i(409781),
        r = e.i(960851),
        s = e.i(146911);
    let i = ({
            title: e,
            text: i,
            action: n,
            truncate: o,
            className: c = "",
            isContained: d,
            dismiss: u
        }) => {
            let m = (0, a.useMemo)(() => `unity-alert-${i?.substring(0,30).replaceAll(" ","_")}`, [i]),
                [f, h] = (0, a.useState)(!0),
                [p, g] = (0, a.useState)(!1);
            return ((0, a.useEffect)(() => {
                localStorage?.getItem(m) && g(!0)
            }, [m]), p) ? null : (0, t.jsx)("div", {
                className: (0, l.clsx)({
                    container: d
                }),
                children: (0, t.jsxs)("div", {
                    className: (0, l.clsx)("dark:bg-blue/10 relative flex w-full flex-col justify-between gap-4 bg-sky-100 py-4 pr-5 pl-11 text-sm text-gray-900 transition-colors sm:flex-row", {
                        flex: u?.enabled
                    }, {
                        "rounded-lg": d
                    }, c),
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
                                    "line-clamp-4 sm:line-clamp-2": o?.enabled && f
                                }),
                                children: i
                            }), o?.enabled && (0, t.jsx)("button", {
                                onClick: () => h(!f),
                                className: "text-tiny shadow-underline-sm hover:text-blue hover:shadow-underline focus:text-blue dark:hover:text-blue text-black transition duration-200 dark:text-white",
                                children: f ? o.seeMoreLabel : o.seeLessLabel
                            })]
                        })]
                    }), (n?.href || u?.enabled) && (0, t.jsxs)("div", {
                        className: "sm:auto inline-flex w-fit items-center gap-4 [&>*]:whitespace-nowrap",
                        children: [n && (0, t.jsx)(s.default, {
                            className: "mx-auto mt-0 inline-block whitespace-nowrap",
                            href: n.href,
                            target: n.target || "_self",
                            size: "tiny",
                            underline: !0,
                            children: n.title
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
        n = ({
            title: e,
            text: a,
            action: r,
            theme: s,
            truncate: n,
            dismiss: o,
            isContained: c,
            isHidden: d,
            spacing: u
        }) => {
            let m = (0, l.clsx)({
                "pt-10": u?.top
            }, {
                "pb-10": u?.bottom
            }, {
                "dark bg-black": "dark" === s
            });
            return d || !a ? null : (0, t.jsx)("section", {
                className: m,
                children: (0, t.jsx)(i, {
                    title: e,
                    text: a,
                    isContained: c,
                    truncate: n || {},
                    dismiss: o || {},
                    action: r && {
                        title: r?.text || "",
                        href: r?.fieldLink?.linkReference?.href?.current || "",
                        target: r?.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self"
                    }
                })
            })
        };
    e.s(["default", 0, n], 841889), e.s(["default", 0, n], 401861)
}, 480880, e => {
    "use strict";
    var t = e.i(785328),
        l = e.i(409781);
    e.s(["default", 0, ({
        blocks: e,
        blockMap: a,
        ...r
    }) => (0, t.jsx)(t.Fragment, {
        children: e?.map((e, s) => {
            let i = e?._type,
                n = a[i];
            return e.isHidden ? null : n ? (0, t.jsx)("div", {
                children: l.default.createElement(n, {
                    key: `block-${s}`,
                    ...e,
                    blockIndex: s + 1,
                    blockType: i,
                    blockKey: `${i}-${s}`,
                    ...r
                })
            }, `block-${s}`) : void 0
        })
    })])
}, 459923, 201763, 570994, e => {
    "use strict";
    var t = e.i(785328),
        l = e.i(409781),
        a = e.i(833449),
        r = e.i(425314),
        s = e.i(722978),
        i = e.i(131581),
        n = e.i(124576);
    let o = ({
        keyFigures: e,
        nested: l = !1,
        theme: r = "light"
    }) => {
        let i = (0, s.clsx)("container col-span-12 pt-16 grid grid-cols-12 gap-2 ", {
            "py-16": !l
        });
        return (0, t.jsx)("div", {
            className: "dark" === r ? "bg-black text-white" : "",
            children: (0, t.jsx)("div", {
                className: i,
                children: e?.map((i, n) => {
                    let {
                        value: o,
                        label: c
                    } = i, d = (0, s.clsx)("col-span-12 flex rounded-md items-center gap-2 px-4 py-2 filter md:p-4 lg:col-span-4 xl:p-6", {
                        "backdrop-blur-lg": l && "dark" !== r,
                        "bg-gray-900 dark:bg-black": "dark" === r,
                        "bg-gray-100 dark:bg-gray-900 text-gray-800": !l && "dark" !== r,
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
                    }, n) : c && o?.type === "icon" && !o.url ? (0, t.jsx)("div", {
                        className: d,
                        children: (0, t.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: c
                        })
                    }, n) : o?.type === "icon" && o.url ? (0, t.jsxs)("div", {
                        className: d,
                        children: [(0, t.jsx)("div", {
                            className: "flex min-w-[30%] shrink-0 gap-10 text-center lg:justify-center",
                            children: (0, t.jsx)(a.default, {
                                src: o.url,
                                alt: o.description,
                                width: 40,
                                height: 40
                            })
                        }), (0, t.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: c
                        })]
                    }, n) : null
                })
            })
        })
    };
    e.s(["default", 0, o], 201763);
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
            actions: h = [],
            keyFigures: p,
            video: g,
            mention: x,
            fullScreen: b = !0
        }) => {
            let j = (0, l.useRef)(null),
                y = (0, i.useInView)(j, {
                    once: !0
                }),
                v = (0, n.useReducedMotion)(),
                [w, A] = (0, l.useState)(!1),
                k = (0, s.default)(`font-nohemi mt-24 my-4 ${"small"===u?"mb-6":"mb-8"}`, {
                    "loco-text-heading-xl": "medium" === u,
                    "loco-text-headline": "large" === u,
                    "loco-text-heading-lg": "small" === u
                }),
                N = (0, s.default)("object-cover transition-opacity duration-1000 opacity-100", {
                    "opacity-0": w
                });
            return (0, t.jsxs)("section", {
                ref: j,
                className: "dark relative",
                children: [f && (0, t.jsx)(a.default, {
                    src: f.src,
                    placeholder: "blur",
                    blurDataURL: f.placeholder,
                    fill: !0,
                    alt: "",
                    className: N,
                    sizes: "100vw"
                }), y && !v && g && (0, t.jsx)(d, {
                    url: g || "",
                    playing: !0,
                    loop: !0,
                    muted: !0,
                    playsinline: !0,
                    width: "100%",
                    height: "100%",
                    onReady: () => {
                        A(!0)
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
                                className: k,
                                children: r
                            }), m && (0, t.jsx)("div", {
                                className: "loco-caption-sm-semibold mt-5",
                                children: m
                            }), h && (0, t.jsx)("div", {
                                className: "mt-6 flex flex-wrap items-center justify-center gap-4",
                                children: h.map((e, l) => {
                                    if (e.link) return (0, t.jsx)(c.default, {
                                        rounded: !0,
                                        hasArrow: !0,
                                        href: e.link.href,
                                        target: e.link.target,
                                        variant: 0 === l ? "primary" : "secondary",
                                        children: e.title
                                    }, `headliner-action-link-${e.title}-${l}`);
                                    if (e.form) {
                                        let a = {
                                            ...e.form.form,
                                            ...e.form.webinarFormParametersContent,
                                            extraFields: e.form.extraFields
                                        };
                                        return (0, t.jsx)("div", {
                                            children: e.form.renderModal({
                                                label: e.title,
                                                form: a
                                            })
                                        }, `headliner-action-modal-${e.title}-${l}`)
                                    }
                                    return null
                                })
                            })]
                        })
                    }), p && (0, t.jsx)(o, {
                        keyFigures: p,
                        nested: !0
                    })]
                }), x && (0, t.jsx)("div", {
                    className: "loco-text-body-sm z-10 w-full px-4 py-4 text-center opacity-70 md:absolute md:top-10 md:right-8 md:left-auto md:w-auto md:px-0 md:py-8",
                    children: x
                })]
            })
        };
    e.s(["default", 0, u], 570994);
    var m = e.i(115219);
    e.s(["default", 0, ({
        actions: e = [],
        brandfolder: a,
        mention: r,
        eyebrow: s,
        title: i,
        titleSize: n,
        description: o,
        image: c,
        keyFigures: d,
        isHidden: f
    }) => {
        let {
            mapFormActions: h
        } = (0, m.useFormModal)(e), p = h(e), g = (0, l.useMemo)(() => (d?.data ?? []).map(e => e?.value?.text ? {
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
                actions: p,
                mention: r || "",
                eyebrow: s || "",
                title: i || "",
                titleSize: "small" === n ? "small" : "large" === n ? "large" : "medium",
                description: o || "",
                backgroundImage: {
                    src: c?.asset.url || "",
                    placeholder: c?.asset.metadata?.lqip || ""
                },
                keyFigures: g,
                video: a?.muxHLSURL || ""
            })
        })
    }], 459923)
}, 123849, e => {
    "use strict";
    var t = e.i(785328),
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
    var n = e.i(722990);
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
                    content: (0, t.jsx)(n.PortableText, {
                        value: e?.content
                    }),
                    listStyle: l
                }
            }) || [],
            treshold: {
                title: e?.treshold?.title ?? "",
                content: (0, t.jsx)(n.PortableText, {
                    value: e.treshold?.content
                })
            },
            pricing: {
                title: e.pricing?.title ?? "",
                content: (0, t.jsx)(n.PortableText, {
                    value: e.pricing?.content
                })
            }
        }))
    })], 123849)
}, 195051, 725751, e => {
    "use strict";
    var t = e.i(785328),
        l = e.i(722990),
        a = e.i(749583),
        r = e.i(239273),
        s = e.i(805518);
    e.s(["default", 0, ({
        blockedMessage: e,
        consentButtonLabel: i
    }) => {
        let n = "C0004";
        return (0, t.jsx)(t.Fragment, {
            children: !(() => {
                let [e] = (0, r.default)("OptanonConsent") || "", t = {};
                return e && e.split("groups=")[1].split("&")[0].split("%2C").forEach(e => {
                    let [l, a] = e.split("%3A");
                    t[l] = parseInt(a)
                }), t[n]
            })() && (0, t.jsxs)("div", {
                className: "consent absolute top-0 right-0 bottom-0 left-0 z-10 flex flex-col items-center overflow-auto rounded-2xl bg-black p-3 leading-5 text-white opacity-90 sm:justify-center sm:p-5",
                children: [(0, t.jsx)(s.default, {
                    className: "mx-auto text-center sm:w-4/5 sm:text-base",
                    children: (0, t.jsx)(l.PortableText, {
                        value: e
                    })
                }), (0, t.jsx)("div", {
                    className: "mt-5",
                    children: (0, t.jsx)(a.default, {
                        rounded: !0,
                        target: "_self",
                        variant: "primary",
                        onPress: () => {
                            let e = document.getElementById("ot-sdk-btn"),
                                t = document.getElementById(`ot-header-id-${n}`),
                                l = window;
                            l && l.OneTrust ? l.OneTrust.ToggleInfoDisplay() : e.click(), t.click()
                        },
                        children: i
                    })
                })]
            })
        })
    }], 195051);
    var i = e.i(409781),
        n = e.i(210310),
        o = e.i(326388);
    e.s(["default", 0, ({
        theme: e,
        isHidden: l,
        verticalHeadingClass: a,
        productCatalogItems: r,
        htmlTableContent: s
    }) => {
        let {
            appendCommerceDataForMultipleProducts: c
        } = (0, o.default)(), d = (0, i.useCallback)(e => {
            let t = c(e, r);
            return t || e
        }, [r, c]), u = (0, i.useMemo)(() => {
            let e = s.rows.map(e => (e.cells = e.cells.map(e => d(e)), e));
            return {
                ...s,
                rows: e
            }
        }, [s, d]);
        return (0, t.jsx)(t.Fragment, {
            children: !l && (0, t.jsx)("section", {
                className: "dark" === e ? "dark" : "",
                children: (0, t.jsx)("div", {
                    className: "mx-auto max-w-7xl p-6 dark:bg-black",
                    children: (0, t.jsx)(n.default, {
                        verticalHeadingClass: a || "",
                        table: u
                    })
                })
            })
        })
    }], 725751)
}, 436324, 531469, e => {
    "use strict";
    var t = e.i(785328),
        l = e.i(409781),
        a = e.i(749583),
        r = e.i(222061),
        s = e.i(829483),
        i = e.i(662380),
        n = e.i(179695),
        o = e.i(613821),
        c = e.i(466673),
        d = e.i(396241),
        u = e.i(569959),
        m = e.i(545487),
        f = e.i(239273),
        h = e.i(869324),
        p = e.i(497492);
    let g = ({
        form: e,
        isGrowForm: t,
        onSuccess: l,
        close: a,
        onShowSuccessMessage: r
    }) => {
        let s = (0, p.getFilteredQueryParams)(["sfcid", "sflsa", "sfit"], t),
            i = (0, p.getQueryParams)(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"], !0),
            {
                setFormSubmitted: n
            } = (0, m.useResourcesDetailContext)(),
            [o] = (0, f.default)("ELOQUA");
        return (c, d, m) => {
            let f = t ? (({
                    emailConfirmation: e,
                    ghandler: t,
                    gcid: l,
                    growDivision: a,
                    growDepartment: r
                }) => ({
                    emailConfirmation: e,
                    ghandler: t,
                    gcid: l,
                    growDivision: a,
                    growDepartment: r,
                    grow: !0
                }))(e?.sfdcIntegration || {}) : e?.sfdcIntegration,
                g = e?.fields ? (0, p.getAlwaysSendOnData)(e.fields, d, m) : {};
            return c.elqCustomerGUID = o?.split("&")?.[0]?.split("GUID=")?.[1] || "", c = {
                ...c,
                ...f,
                ...g,
                ...i,
                ...s,
                ...e?.extraFields
            }, fetch("https://create.unity.com/e/f2", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams((0, p.cleanData)(c)).toString()
            }).then(() => {
                (0, h.default)({
                    properties: {
                        form_action: "submitted",
                        form_id: c.elqFormID,
                        form_name: c.elqFormName,
                        form_customer_id: c.elqCustomerGUID
                    }
                }), n(!0), l?.(), e?.successMessage?.showSuccessMessage ? r?.() : a?.()
            }).catch(e => u.captureException(e))
        }
    };
    e.s(["useEloquaSubmit", 0, g], 531469), e.s(["FormBuilder", 0, ({
        form: e,
        close: u,
        isGrowForm: m
    }) => {
        let [f, h] = (0, l.useState)(!1), {
            handleSubmit: p,
            control: x,
            setValue: b,
            watch: j,
            getValues: y,
            formState: {
                isSubmitting: v
            }
        } = (0, c.useForm)({
            reValidateMode: "onChange",
            mode: "onChange"
        }), w = j(d.COUNTRY_CODE), A = g({
            form: e,
            isGrowForm: m,
            close: u,
            onShowSuccessMessage: () => h(!0)
        });
        return f && e?.successMessage?.showSuccessMessage ? (0, t.jsxs)("div", {
            className: "flex flex-col items-center justify-center p-8 text-center",
            children: [e.successMessage.title && (0, t.jsx)("h3", {
                className: "mb-4 text-xl font-semibold text-gray-900",
                children: e.successMessage.title
            }), e.successMessage.description && (0, t.jsx)("p", {
                className: "mb-6 text-gray-600",
                children: e.successMessage.description
            }), e?.successMessage?.closeButtonText && (0, t.jsx)(a.default, {
                onPress: u,
                className: "[&>div>span]:!text-black hover:[&>div>span]:!underline",
                variant: "secondary",
                children: e?.successMessage?.closeButtonText
            })]
        }) : (0, t.jsxs)(o.default, {
            onSubmit: p(e => A(e, y, w)),
            children: [(0, t.jsx)("div", {
                className: "flex flex-col [&>*]:mt-3",
                children: e?.fields && e?.fields.map((e, l) => {
                    switch (e.formField) {
                        case "input":
                            return (0, t.jsx)(r.default, {
                                ...e,
                                control: x,
                                countryCode: w
                            }, l);
                        case "checkbox":
                            return (0, t.jsx)(s.default, {
                                countryCode: w,
                                ...e,
                                control: x
                            }, l);
                        case "dropdown":
                            return (0, t.jsx)(i.default, {
                                countryCode: w,
                                ...e,
                                control: x,
                                setValue: b
                            }, l);
                        case "richText":
                            return (0, t.jsx)(n.default, {
                                ...e,
                                control: x,
                                countryCode: w
                            }, l)
                    }
                })
            }), e?.actions && (0, t.jsxs)("div", {
                className: "mt-10 border-t border-t-gray-200 pt-6",
                children: [e?.actions?.primaryActionText && (0, t.jsx)(a.default, {
                    type: "submit",
                    rounded: !0,
                    hasArrow: !0,
                    disabled: v,
                    children: e?.actions?.primaryActionText
                }), e?.actions?.secondaryActionText && (0, t.jsx)(a.default, {
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
}, 549134, 23439, 271357, e => {
    "use strict";
    let t = {
        src: e.i(379294).default,
        width: 3840,
        height: 2160,
        blurWidth: 8,
        blurHeight: 5,
        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAALCAAFAAgBAREA/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/APLZ9Vnvz+/AYDoDzX//2Q=="
    };
    e.s(["default", 0, t], 549134);
    let l = {
        src: e.i(462847).default,
        width: 3840,
        height: 2160,
        blurWidth: 8,
        blurHeight: 5,
        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAALCAAFAAgBAREA/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/APJp1W3tNqjPm9Se2K//2Q=="
    };
    e.s(["default", 0, l], 23439);
    let a = {
        src: e.i(245094).default,
        width: 3840,
        height: 2160,
        blurWidth: 8,
        blurHeight: 5,
        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAALCAAFAAgBAREA/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/APONHVbm4jikXKyOAa//2Q=="
    };
    e.s(["default", 0, a], 271357)
}, 462847, e => {
    e.q("/_next/static/media/unity-fallback-2.235xxljphshbr.jpg")
}, 245094, e => {
    e.q("/_next/static/media/unity-fallback-3.043zq62y9b9ix.jpg")
}, 129824, e => {
    "use strict";
    e.s(["DATA_REQUEST", 0, "/data-request", "DEFAULT_PAGES_NO_MT_BANNER", 0, ["/made-with-unity"], "L1_PAGES_NO_MT_BANNER", 0, ["/our-company", "/community", "/industry", "/use-cases", "/releases/unity-6"], "PRODUCTS_PAGES_NO_MT_BANNER", 0, ["/products"], "PRODUCTS_PRODUCTS_PAGES_NO_MT_BANNER", 0, ["/products/unity-pro", "/products/unity-engine", "/products/compare-plans", "/products/compare-plans/unity-cloud"], "RESOURCES_PAGES_NO_MT_BANNER", 0, ["/resources"], "SOLUTIONS_PAGES_NO_MT_BANNER", 0, ["/download", "/roadmap", "/pages/pro-free-trial", "/games", "/solutions", "/developer-tools", "/how-to", "/learn", "/learn/get-started", "/releases/lts-vs-tech-stream"]])
}, 387660, e => {
    "use strict";
    e.i(913836);
    var t = e.i(869324);
    e.s(["pushVideoEvent", 0, e => {
        let l = (({
            name: e,
            videoDuration: t,
            videoProgress: l
        }) => ({
            event: "userEvent",
            event_name: e,
            properties: {
                video_duration: t,
                video_progress: l
            }
        }))(e);
        (0, t.default)(l)
    }])
}, 115219, e => {
    "use strict";
    var t = e.i(785328),
        l = e.i(363737),
        a = e.i(436324),
        r = e.i(869324),
        s = e.i(537251);
    e.s(["applyFormOverrides", 0, function(e, t) {
        let l;
        if (!t || !e?.fields) return e;
        try {
            l = JSON.parse(t)
        } catch {
            return e
        }
        if (!l) return e;
        let a = [...e.fields];
        for (let e of Object.keys(l)) {
            let t = a.findIndex(t => t.formFieldId === e);
            if (t < 0) continue;
            let r = l[e];
            null != r.isRequired && (a[t] = {
                ...a[t],
                isRequired: r.isRequired
            }), r.isHidden && a.splice(t, 1)
        }
        return {
            ...e,
            fields: a
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
            extraFields: i
        } = (0, s.default)(), n = ({
            label: s,
            form: i
        }) => {
            let n = ((e, t) => {
                let l = e?.find(e => t.title === e?.form?.title)?.customSelections || "";
                try {
                    return JSON.parse(l)
                } catch (e) {
                    return null
                }
            })(e || [], i);
            if (n && i?.fields)
                for (let e of Object.keys(n)) {
                    let t = i.fields.findIndex(t => t.formFieldId === e);
                    if (t >= 0) {
                        let l = n[e];
                        null != l.isRequired && (i.fields[t].isRequired = n[e].isRequired), l.isHidden && i.fields.splice(t, 1)
                    }
                }
            return (0, t.jsx)(l.default, {
                actionLabel: s,
                onOpenChange: e => {
                    e && (0, r.default)({
                        properties: {
                            form_action: "presented",
                            form_id: i.fields?.find(e => "elqFormID" === e.formFieldId)?.defaultValue,
                            form_name: i.fields?.find(e => "elqFormName" === e.formFieldId)?.defaultValue
                        }
                    })
                },
                children: e => (0, t.jsx)(l.default.Layout, {
                    modal: {
                        title: i.title,
                        description: i.description
                    },
                    children: i && (0, t.jsx)(a.FormBuilder, {
                        form: i,
                        close: e
                    })
                })
            })
        };
        return {
            renderModal: n,
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
                    renderModal: n
                } : null
            })),
            extraFields: i
        }
    }])
}, 246916, e => {
    "use strict";
    var t = e.i(393335),
        l = e.i(833200),
        a = e.i(740041);
    e.s(["useMTBanner", 0, function(e, r = []) {
        var s, i;
        let n, o, c, d, u, m = (0, t.usePathname)(),
            f = (0, l.useLocale)(),
            h = f !== a.defaultLocale ? m.replace(`/${f}`, "") : m;
        return {
            shouldDisplayMTBanner: f !== a.defaultLocale && e?.translationType === "MT" && !r.includes(h),
            updatedBlocks: (s = e.blocks ?? [], i = e.machineTranslationDisclaimer, n = s.reduce((e, t, l) => ["hero", "alternateNavigation", "headliner"].includes(t._type) ? l : e, -1), o = [...s], c = o[n + 1]?._type === "alternateNavigationAnchor" || o[n + 1]?._type === "anchorButton" ? o[n + 2] : o[n + 1], d = c?.theme ?? null, u = {
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
                                current: `${window.location.origin}${h}`
                            },
                            target: "_self"
                        }
                    }
                }
            }, -1 === n ? o.unshift(u) : o.splice(n + 1, 0, u), o),
            redirectPathName: h
        }
    }], 246916)
}, 551779, e => {
    "use strict";
    var t, l, a, r, s, i = ((t = {}).en = "en", t.de = "de_de", t.vn = "vi_vn", t.ja = "ja_jp", t.fr = "fr_fr", t.pt = "pt_br", t.cn = "zh_cn", t.es = "es_es", t.ru = "ru_ru", t.kr = "ko_kr", t);
    (l = {}).en = "en", l.de_de = "de", l.vi_vn = "vn", l.ja_jp = "ja", l.fr_fr = "fr", l.pt_br = "pt", l.zh_cn = "cn", l.es_es = "es", l.ru_ru = "ru", l.ko_kr = "kr";
    var n = ((a = {}).en = "en-US", a.de = "de-DE", a.vn = "vi-VN", a.ja = "ja-JP", a.fr = "fr-FR", a.pt = "pt-BR", a.cn = "zh-CN", a.es = "es-ES", a.ru = "ru-RU", a.kr = "ko-KR", a);
    (r = {}).en = "en-US", r.de = "de-DE", r.vn = "vi-VN", r.ja = "ja-JP", r.fr = "fr-FR", r.pt = "pt-BR", r.zh = "zh-CN", r.es = "es-ES", r.ru = "ru-RU", r.ko = "ko-KR", (s = {}).kr = "ko", s.cn = "zh", s.vn = "vi", e.s(["LanguageMap", () => i, "LanguageMapIETFLanguageTag", () => n])
}, 22766, (e, t, l) => {
    t.exports = e.r(581511)(e.r(78974), "DataView")
}, 13715, (e, t, l) => {
    t.exports = e.r(581511)(e.r(78974), "Promise")
}, 292408, (e, t, l) => {
    t.exports = e.r(581511)(e.r(78974), "Set")
}, 843031, (e, t, l) => {
    t.exports = e.r(581511)(e.r(78974), "WeakMap")
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
}, 531766, (e, t, l) => {
    t.exports = function(e, t) {
        for (var l = -1, a = null == e ? 0 : e.length; ++l < a && !1 !== t(e[l], l, e););
        return e
    }
}, 317508, (e, t, l) => {
    var a = e.r(830747),
        r = e.r(599568),
        s = e.r(240046);
    t.exports = r ? function(e, t) {
        return r(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: a(t),
            writable: !0
        })
    } : s
}, 599568, (e, t, l) => {
    var a = e.r(581511);
    t.exports = function() {
        try {
            var e = a(Object, "defineProperty");
            return e({}, "", {}), e
        } catch (e) {}
    }()
}, 354700, (e, t, l) => {
    var a = e.r(22766),
        r = e.r(764138),
        s = e.r(13715),
        i = e.r(292408),
        n = e.r(843031),
        o = e.r(416907),
        c = e.r(908829),
        d = "[object Map]",
        u = "[object Promise]",
        m = "[object Set]",
        f = "[object WeakMap]",
        h = "[object DataView]",
        p = c(a),
        g = c(r),
        x = c(s),
        b = c(i),
        j = c(n),
        y = o;
    (a && y(new a(new ArrayBuffer(1))) != h || r && y(new r) != d || s && y(s.resolve()) != u || i && y(new i) != m || n && y(new n) != f) && (y = function(e) {
        var t = o(e),
            l = "[object Object]" == t ? e.constructor : void 0,
            a = l ? c(l) : "";
        if (a) switch (a) {
            case p:
                return h;
            case g:
                return d;
            case x:
                return u;
            case b:
                return m;
            case j:
                return f
        }
        return t
    }), t.exports = y
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
                for (var s = arguments, i = -1, n = r(s.length - t, 0), o = Array(n); ++i < n;) o[i] = s[t + i];
                i = -1;
                for (var c = Array(t + 1); ++i < t;) c[i] = s[i];
                return c[t] = l(o), a(e, this, c)
            }
    }
}, 108749, (e, t, l) => {
    var a = e.r(317508);
    t.exports = e.r(911818)(a)
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
}, 240046, (e, t, l) => {
    t.exports = function(e) {
        return e
    }
}, 87522, (e, t, l) => {
    var a = e.r(668488),
        r = e.r(354700),
        s = e.r(410090),
        i = e.r(778116),
        n = e.r(622914),
        o = e.r(432816),
        c = e.r(820092),
        d = e.r(905330),
        u = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        if (null == e) return !0;
        if (n(e) && (i(e) || "string" == typeof e || "function" == typeof e.splice || o(e) || d(e) || s(e))) return !e.length;
        var t = r(e);
        if ("[object Map]" == t || "[object Set]" == t) return !e.size;
        if (c(e)) return !a(e).length;
        for (var l in e)
            if (u.call(e, l)) return !1;
        return !0
    }
}, 180793, (e, t, l) => {
    t.exports = function(e) {
        return null == e
    }
}, 829150, 434438, e => {
    "use strict";
    var t = e.i(551779);
    let l = t.LanguageMapIETFLanguageTag[t.LanguageMap.en],
        a = e => Object.keys(t.LanguageMapIETFLanguageTag).find(l => t.LanguageMapIETFLanguageTag[l] === e),
        r = (e = t.LanguageMap.en) => t.LanguageMapIETFLanguageTag[e] || l;
    e.s(["FALLBACK_LANGUAGE", 0, l, "default", 0, r, "getLanguageKey", 0, a], 434438);
    var s = e.i(87522),
        i = e.i(180793);
    e.s(["default", 0, (e, n, o) => {
        let {
            locale: c,
            ...d
        } = n, u = e;
        return o && u ? ((e => {
            let l;
            try {
                l = new URL(e)
            } catch (e) {
                return !1
            }
            return r(l.pathname.split("/")[1]) !== t.LanguageMapIETFLanguageTag.en
        })(u) || c === l || (u = ((e, t) => {
            let l;
            if (!t) return e;
            try {
                l = new URL(e)
            } catch (t) {
                return e
            }
            let a = l.pathname.split("/");
            return a.splice(1, 0, t), l.pathname = a.join("/"), l.toString()
        })(u, a(c))), ((e, t) => {
            let l;
            if ((0, s.default)(t)) return e;
            let a = -1 === (l = e.indexOf("?")) ? {} : e.slice(l + 1).split("&").reduce((e, t) => {
                    let [l, a] = t.split("=");
                    return l && (e[decodeURIComponent(l)] = decodeURIComponent(a || "")), e
                }, {}),
                r = {};
            Object.entries(t).forEach(([e, t]) => {
                Object.prototype.hasOwnProperty.call(a, e) || (0, i.default)(t) || (r[e] = t)
            });
            let n = new URLSearchParams(r).toString();
            return e.includes("?") ? `${e}&${n}` : `${e}?${n}`
        })(u, d)) : u
    }], 829150)
}, 79389, e => {
    "use strict";
    var t = e.i(409781),
        l = function() {
            return (l = Object.assign || function(e) {
                for (var t, l = 1, a = arguments.length; l < a; l++)
                    for (var r in t = arguments[l]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }).apply(this, arguments)
        },
        a = t.forwardRef(function(e, a) {
            var r = t.useState(!1),
                s = r[0],
                i = r[1],
                n = t.useState(!1),
                o = n[0],
                c = n[1],
                d = encodeURIComponent(e.id),
                u = "string" == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
                m = e.title,
                f = e.poster || "hqdefault",
                h = "&".concat(e.params) || "",
                p = e.muted ? "&mute=1" : "",
                g = e.announce || "Watch",
                x = e.webp ? "webp" : "jpg",
                b = e.webp ? "vi_webp" : "vi",
                j = e.thumbnail || (e.playlist ? "https://i.ytimg.com/".concat(b, "/").concat(u, "/").concat(f, ".").concat(x) : "https://i.ytimg.com/".concat(b, "/").concat(d, "/").concat(f, ".").concat(x)),
                y = e.noCookie ? "https://www.youtube-nocookie.com" : "https://www.youtube.com";
            y = e.cookie ? "https://www.youtube.com" : "https://www.youtube-nocookie.com";
            var v = e.playlist ? "".concat(y, "/embed/videoseries?autoplay=1").concat(p, "&list=").concat(d).concat(h) : "".concat(y, "/embed/").concat(d, "?autoplay=1&state=1").concat(p).concat(h),
                w = e.activatedClass || "lyt-activated",
                A = e.adNetwork || !1,
                k = e.aspectHeight || 9,
                N = e.aspectWidth || 16,
                C = e.iframeClass || "",
                L = e.playerClass || "lty-playbtn",
                E = e.wrapperClass || "yt-lite",
                R = e.onIframeAdded || function() {},
                T = e.rel ? "prefetch" : "preload",
                _ = e.containerElement || "article";
            return t.useEffect(function() {
                o && R()
            }, [o]), t.createElement(t.Fragment, null, t.createElement("link", {
                rel: T,
                href: j,
                as: "image"
            }), t.createElement(t.Fragment, null, s && t.createElement(t.Fragment, null, t.createElement("link", {
                rel: "preconnect",
                href: y
            }), t.createElement("link", {
                rel: "preconnect",
                href: "https://www.google.com"
            }), A && t.createElement(t.Fragment, null, t.createElement("link", {
                rel: "preconnect",
                href: "https://static.doubleclick.net"
            }), t.createElement("link", {
                rel: "preconnect",
                href: "https://googleads.g.doubleclick.net"
            })))), t.createElement(_, {
                onPointerOver: function() {
                    s || i(!0)
                },
                onClick: function() {
                    o || c(!0)
                },
                className: "".concat(E, " ").concat(o ? w : ""),
                "data-title": m,
                style: l({
                    backgroundImage: "url(".concat(j, ")")
                }, {
                    "--aspect-ratio": "".concat(k / N * 100, "%")
                })
            }, t.createElement("button", {
                type: "button",
                className: L,
                "aria-label": "".concat(g, " ").concat(m)
            }), o && t.createElement("iframe", {
                ref: a,
                className: C,
                title: m,
                width: "560",
                height: "315",
                frameBorder: "0",
                allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: !0,
                src: v
            })))
        });
    e.s(["default", 0, a])
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
}, 164163, 596889, e => {
    "use strict";
    var t = e.i(785328),
        l = e.i(722978),
        a = e.i(833449),
        r = e.i(825610),
        s = e.i(749583);
    let i = ({
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
    i.Content = ({
        children: e,
        className: l = "w-full"
    }) => (0, t.jsx)("div", {
        className: l,
        children: e
    }), i.Image = ({
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
    }, e.s(["default", 0, i], 596889);
    var n = e.i(805518);
    e.s(["default", 0, ({
        title: e,
        cards: o,
        layout: c = "four-cards",
        cardVariant: d = "default",
        scroll: u = !1,
        cardsHeading: m
    }) => {
        let f = m || (e ? "h3" : "h2"),
            h = (0, l.clsx)("gap-4 md:gap-8", {
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
                    className: h,
                    children: o?.map((o, m) => {
                        let h = (0, l.clsx)("flex flex-wrap flex-row", !u && ({
                                "two-cards": "col-span-12 md:col-span-6 [&>div>.card-img]:h-72",
                                "three-cards": "col-span-12 md:col-span-6 lg:col-span-4 [&>div>.card-img]:h-44",
                                "four-cards": "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 [&>div>.card-img]:h-36"
                            })[c], u && ({
                                "two-cards": "mb-6 min-w-[35rem] [&>div>.card-img]:h-72",
                                "three-cards": "mb-6 min-w-[22rem] [&>div>.card-img]:h-44",
                                "four-cards": "mb-6 min-w-[16rem] [&>div>.card-img]:h-36"
                            })[c]),
                            p = (0, l.clsx)("place-self-end", {
                                "px-6 pb-6": "default" === d || "transparent" === d
                            }),
                            g = (0, l.clsx)({
                                "p-6": "default" === d || "transparent" === d,
                                "py-6": "padded" === d
                            }),
                            x = (0, l.clsx)("object-cover", {
                                "rounded-t-xl": "default" === d || "transparent" === d,
                                rounded: "padded" === d
                            }),
                            b = (0, l.clsx)("caption-xs mt-1 text-right text-gray-400", {
                                "mr-1": "padded" !== d
                            });
                        return (0, t.jsxs)(i, {
                            className: h,
                            variant: d,
                            children: [(0, t.jsxs)(i.Content, {
                                children: [o.image && o.image.src && (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsx)(i.Image, {
                                        withinContainer: o.image.withinContainer,
                                        children: (0, t.jsx)(a.default, {
                                            src: o.image.src ?? "",
                                            alt: o.image.alt ?? "",
                                            fill: !0,
                                            className: x,
                                            quality: 100
                                        })
                                    }), o.image.description && (0, t.jsx)(n.default, {
                                        className: b,
                                        children: o.image.description
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: g,
                                    children: [o.icon && o.icon.src && (0, t.jsx)("div", {
                                        className: "relative mb-5 dark:invert",
                                        children: (0, t.jsx)(a.default, {
                                            src: o.icon.src ?? "",
                                            alt: o.icon.alt ?? "",
                                            quality: 100,
                                            width: 23,
                                            height: 23
                                        })
                                    }), (0, t.jsx)(f, {
                                        className: "loco-text-body-lg-medium mb-4 !font-semibold",
                                        children: o.title
                                    }), o.description && (0, t.jsx)(n.default, {
                                        className: "loco-text-body mb-4",
                                        children: o.description
                                    }), o.richText && (0, t.jsx)(n.default, {
                                        className: "loco-text-body mb-4 text-gray-600 dark:text-gray-300",
                                        children: o.richText
                                    })]
                                })]
                            }), o.actions && (0, t.jsx)("div", {
                                className: p,
                                children: o.actions.map((e, l) => (0, t.jsx)(s.default, {
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
                        }, `card-${m}-${e}`)
                    })
                })]
            })
        })
    }], 164163)
}, 570133, 210310, e => {
    "use strict";
    var t = e.i(785328),
        l = e.i(537655),
        a = e.i(930839),
        r = e.i(46860),
        s = e.i(525296),
        i = e.i(952405),
        n = e.i(852529),
        o = e.i(847331);
    l.Light.registerLanguage("csharp", r.default), l.Light.registerLanguage("javascript", s.default), l.Light.registerLanguage("xml", i.default), l.Light.registerLanguage("rust", n.default), l.Light.registerLanguage("css", o.default), e.s(["default", 0, ({
        code: e,
        language: r
    }) => (0, t.jsx)("div", {
        className: "text-white [&>pre]:rounded-xl [&>pre]:!p-4",
        children: (0, t.jsx)(l.Light, {
            style: a.default,
            language: r,
            children: e
        })
    })], 570133);
    var c = e.i(409781),
        d = e.i(749583),
        u = e.i(206775),
        m = e.i(652955),
        f = e.i(229696),
        h = e.i(722978),
        p = e.i(805518),
        g = e.i(363737);
    let x = ({
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
            colTitle: l,
            truncationEnabled: a,
            rowTitle: r,
            className: s = "",
            isTableCell: i
        }) => {
            let [n, o] = (0, c.useState)(!1), [u, m] = (0, c.useState)(!1), f = (0, c.useRef)(null), j = (0, h.default)({
                "cursor-pointer relative": n
            }, s), y = (0, h.default)({
                "line-clamp-3": a
            });
            (0, c.useEffect)(() => {
                let e = f.current;
                e && (e.scrollHeight > e.clientHeight ? o(!0) : o(!1))
            }, [f]);
            let v = () => {
                    m(!0)
                },
                w = a && n ? {
                    tabIndex: 0,
                    role: "button",
                    onClick: v,
                    onKeyDown: e => {
                        ("Enter" === e.key || "Space" === e.key) && v()
                    }
                } : {};
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsxs)("td", {
                    className: (0, h.default)(j, {
                        "bg-gray-50 p-3 dark:bg-gray-900": !i,
                        "h-full !p-0": i
                    }),
                    ...w,
                    children: [i ? e : (0, t.jsx)(p.default, {
                        className: y,
                        ref: f,
                        children: e
                    }), a && n && (0, t.jsx)(x, {
                        className: "absolute top-1.5 right-1.5"
                    })]
                }), (0, t.jsx)(g.default, {
                    isOpen: u,
                    onOpenChange: m,
                    showTriggerButton: !1,
                    children: (0, t.jsxs)("div", {
                        className: "mt-20 flex w-6/12 flex-col rounded-3xl bg-white p-8 dark:bg-gray-800",
                        tabIndex: -1,
                        children: [(0, t.jsx)(d.default, {
                            onPress: () => {
                                m(!1)
                            },
                            variant: "secondary",
                            className: "self-end",
                            children: (0, t.jsx)(b, {})
                        }), (0, t.jsx)(p.default, {
                            className: "caption-sm mb-2.5 text-black dark:text-white",
                            children: r
                        }), (0, t.jsx)("div", {
                            className: "text-heading-sm mb-4 text-black dark:text-white",
                            children: l
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
        className: l = "",
        verticalHeadingClass: a = "",
        hideTitle: r = !1
    }) => {
        let [s, ...i] = e.rows.map(e => ({
            ...e,
            cells: (e.cells ?? []).map(e => "string" == typeof e ? e : "")
        })), n = `align-top text-heading-sm md:text-small-bold rounded-md bg-gray-100 text-gray-800 bg-gray-100 dark:bg-gray-700 md:dark:bg-gray-800 dark:text-gray-200 border-none ${a}`, o = "align-top rounded-md text-sm text-gray-800 dark:text-gray-200 border-none", g = (0, h.default)("w-full table-fixed border-separate border-spacing-2 break-words", l), x = (0, h.default)("h-full table-fixed border-separate border-spacing-1 break-words", l), b = (0, c.useCallback)(e => {
            let [l, ...a] = e.split("\n"), r = a.splice(1).map((e, l) => {
                let a = e.split("|").filter(e => e).map(e => e.trim());
                return (0, t.jsx)("div", {
                    className: "flex grow",
                    children: a.map((e, a) => (0, t.jsx)(f.default, {
                        className: "flex grow basis-0 items-center justify-center rounded-md bg-gray-50 px-6 py-4 text-center dark:bg-gray-900",
                        children: e
                    }, `cell-${l}-${a}-${e}`))
                }, `row-${l}`)
            });
            return (0, t.jsxs)("div", {
                className: "flex h-full flex-col",
                children: [(0, t.jsx)("div", {
                    className: "-ml-1 flex grow",
                    children: l.split("|").filter(e => e).map((e, l) => (0, t.jsx)(f.default, {
                        className: "ml-1 flex grow basis-0 items-center justify-center rounded-md bg-gray-50 px-6 py-4 text-center dark:bg-gray-900",
                        children: e.trim()
                    }, `header-cell-${l}-${e}`))
                }), r]
            })
        }, []), y = (0, c.useMemo)(() => i.map(e => e.cells.reduce((e, l, a) => ({
            ...e,
            [`col${a+1}`]: {
                component: l.startsWith("|") ? b(l) : (0, t.jsx)(f.default, {
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
                    children: l
                }),
                isTableCell: l.startsWith("|"),
                cellContent: l
            }
        }), {})), [i, b]), v = (0, c.useMemo)(() => s.cells.map((e, l) => (0, t.jsx)("th", {
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
        }, `${l}-${e}`)), [s.cells]), w = (0, c.useMemo)(() => y.map((l, a) => {
            let r = Object.values(l),
                s = r[0];
            return (0, t.jsx)("tr", {
                className: "border-separate border-spacing-1",
                children: r.map((l, r) => (0, t.jsx)(j, {
                    isTableCell: l.isTableCell,
                    className: 0 === r ? n : o,
                    rowTitle: s.component,
                    colTitle: 0 !== r && v && v[r] ? v[r] : "",
                    truncationEnabled: e.tableTruncation,
                    children: l.component
                }, `${a}-${r}-${l.cellContent}`))
            }, a)
        }), [v, y, n, e.tableTruncation]), A = (0, c.useMemo)(() => s.cells.map((e, l) => (0, t.jsx)("th", {
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
        }, `${l}-${e}`)), [s]), k = (0, c.useMemo)(() => y.map((e, l) => (0, t.jsx)("div", {
            className: "mb-4 min-w-full rounded-md bg-gray-100 align-middle dark:bg-gray-700",
            children: (0, t.jsxs)("table", {
                className: g,
                children: [s && s.cells.length > 0 && (0, t.jsx)("thead", {
                    className: "hidden",
                    children: (0, t.jsx)("tr", {
                        className: "border-separate border-spacing-1",
                        children: A
                    })
                }), (0, t.jsx)("tbody", {
                    className: "table-row-group bg-gray-50 dark:bg-gray-900",
                    children: Object.values(e).map((e, a) => e ? (0, t.jsx)("tr", {
                        className: "rounded-md",
                        children: (0, t.jsxs)("td", {
                            className: 0 === a ? n : o,
                            children: [0 !== a && s && s.cells[a] && (0, t.jsx)(f.default, {
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
                                children: s.cells[a]
                            }), (0, t.jsx)(p.default, {
                                children: e.component
                            })]
                        })
                    }, `${l}-${a}-${s.cells[a]}`) : null)
                })]
            })
        }, `row-${l}`)), [y, s, g, n, A]);
        return (0, t.jsxs)("div", {
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
                            className: x,
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
                                children: s && s.cells && s.cells[0] ? s.cells[0] : ""
                            })
                        }), k]
                    })]
                })
            })]
        })
    }], 210310)
}, 146911, e => {
    "use strict";
    let t = e.i(976317).default;
    e.s(["default", 0, t])
}, 14452, e => {
    "use strict";
    var t = e.i(785328),
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
}, 644995, e => {
    "use strict";
    var t = e.i(785328);
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
}, 224601, 934172, e => {
    "use strict";
    var t = e.i(785328),
        l = e.i(409781),
        a = e.i(833449),
        r = e.i(193863),
        s = e.i(79389),
        i = e.i(363737),
        n = e.i(749583),
        o = e.i(644995),
        c = e.i(195051),
        d = e.i(145694),
        u = e.i(387660);
    let m = (e, t = !0) => {
        let [a, r] = (0, l.useState)(null);
        return (0, l.useEffect)(() => {
            let l;
            return t && e.current && (l = setInterval(() => {
                let t = window.YT;
                t && e.current && (r(new t.Player(e.current)), clearInterval(l))
            }, 500)), () => {
                r(null), clearInterval(l)
            }
        }, [t, e]), {
            player: a
        }
    };
    e.s(["useYoutubeAPI", 0, m], 934172), e.s(["default", 0, ({
        title: e,
        url: f,
        container: h = !1,
        blockedMessage: p,
        consentButtonLabel: g
    }) => {
        let x = (0, r.default)(f),
            [b, j] = (0, l.useState)(!1),
            y = (0, l.useRef)(null),
            v = (0, l.useRef)(null),
            {
                player: w
            } = m(y, b),
            A = () => {
                j(!0)
            };
        return (0, l.useEffect)(() => {
            w && (v.current = w.addEventListener("onStateChange", e => {
                if ([1, 2].includes(e.data)) {
                    let t = "function" == typeof w.getDuration && w.getDuration() || 0,
                        l = Number((("function" == typeof w.getCurrentTime && w.getCurrentTime() || 0) / t * 100).toFixed(2)),
                        a = 1 === e.data ? "video_play" : "video_pause";
                    (0, u.pushVideoEvent)({
                        name: a,
                        videoDuration: t,
                        videoProgress: (Number.isNaN(l), l)
                    })
                }
            }))
        }, [w]), (0, l.useEffect)(() => {
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
                src: "https://www.youtube.com/iframe_api"
            }), (0, t.jsxs)("div", {
                className: "relative h-full w-full self-center p-4 lg:p-0",
                children: [f && x && (0, t.jsxs)("div", {
                    className: "yt-lite z-10 h-full overflow-auto",
                    ...{
                        tabIndex: 0,
                        role: "button",
                        onClick: A,
                        onKeyDown: e => {
                            ("Enter" === e.key || "Space" === e.key) && A()
                        }
                    },
                    children: [(0, t.jsx)("div", {
                        className: "lty-playbtn"
                    }), (0, t.jsx)(a.default, {
                        className: "!relative",
                        style: {
                            borderRadius: "24px"
                        },
                        src: `https://img.youtube.com/vi/${x}/hqdefault.jpg`,
                        alt: e,
                        fill: !0
                    }), (0, t.jsx)(c.default, {
                        blockedMessage: p,
                        consentButtonLabel: g
                    })]
                }), (0, t.jsx)(i.default, {
                    isOpen: b,
                    onOpenChange: j,
                    showTriggerButton: !1,
                    children: (0, t.jsxs)("div", {
                        className: "z-50 mt-20 flex w-10/12 flex-col rounded-3xl bg-black p-4 lg:w-8/12",
                        tabIndex: -1,
                        children: [(0, t.jsx)(n.default, {
                            onPress: () => {
                                j(!1)
                            },
                            variant: "secondary",
                            className: "self-end overflow-hidden",
                            children: (0, t.jsx)(o.default, {
                                className: "z-[60] h-5 w-5 text-white"
                            })
                        }), (0, t.jsx)(s.default, {
                            id: x,
                            title: e,
                            iframeClass: "yt-iframe",
                            poster: "hqdefault",
                            ref: y,
                            params: "enablejsapi=1"
                        }), (0, t.jsx)(c.default, {
                            blockedMessage: p,
                            consentButtonLabel: g
                        })]
                    })
                })]
            })]
        })
    }], 224601)
}]);