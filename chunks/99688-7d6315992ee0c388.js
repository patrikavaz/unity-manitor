try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "52a7dffc-364d-43ef-916b-49bba55051d3", e._sentryDebugIdIdentifier = "sentry-dbid-52a7dffc-364d-43ef-916b-49bba55051d3")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [31813, 33829, 99688], {
        7330: (e, t, r) => {
            r.d(t, {
                A: () => m
            });
            var a = r(73723),
                l = r(7787),
                n = r(38844),
                s = r(33064),
                o = r(83729),
                i = r(15668),
                d = r(73641);
            let c = ({
                    state: e,
                    children: t,
                    ...r
                }) => {
                    let o = (0, l.useRef)(null),
                        {
                            modalProps: i,
                            underlayProps: d
                        } = (0, n.l)({
                            ...r
                        }, e, o);
                    return (0, l.useEffect)(() => {
                        let t = o.current?.querySelector("div"),
                            r = e => {
                                let r = e.relatedTarget;
                                t && !t.contains(r) && t.focus()
                            };
                        return e.isOpen && t && (t.focus(), t.addEventListener("focusout", r)), () => {
                            t && t.removeEventListener("focusout", r)
                        }
                    }, [e.isOpen]), (0, a.jsx)(s.hJ, {
                        "data-sentry-element": "Overlay",
                        "data-sentry-component": "ModalOverlay",
                        "data-sentry-source-file": "Modal.tsx",
                        children: (0, a.jsx)("div", {
                            className: "fixed bottom-0 left-0 right-0 top-0 z-[60] flex items-start justify-center overflow-hidden bg-gray-500 bg-opacity-50",
                            ...d,
                            children: (0, a.jsx)("div", {
                                ref: o,
                                ...i,
                                className: "contents",
                                children: t
                            })
                        })
                    })
                },
                u = ({
                    actionLabel: e,
                    children: t,
                    showTriggerButton: r = !0,
                    ...n
                }) => {
                    let s = (0, i.T)({
                            ...n
                        }),
                        {
                            triggerProps: u,
                            overlayProps: m
                        } = (0, o.o)({
                            type: "dialog"
                        }, s);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [r && (0, a.jsx)(d.A, {
                            rounded: !0,
                            hasArrow: !0,
                            ...u,
                            children: e
                        }), s.isOpen && (0, a.jsx)(c, {
                            state: s,
                            ...n,
                            isDismissable: !0,
                            children: "function" == typeof t ? (0, l.cloneElement)(t(s.close), m) : (0, l.cloneElement)(t, m)
                        })]
                    })
                };
            u.Layout = ({
                children: e,
                modal: t
            }) => (0, a.jsxs)("div", {
                className: "flex h-screen max-w-[600px] flex-col overflow-scroll rounded-xl bg-white p-10 sm:min-w-[600px] md:my-20 md:h-3/4 [&>*]:text-black",
                tabIndex: -1,
                "data-sentry-component": "Layout",
                "data-sentry-source-file": "Layout.tsx",
                children: [(0, a.jsx)("h4", {
                    className: "mb-4 text-2xl font-medium leading-8",
                    children: t.title
                }), (0, a.jsx)("p", {
                    className: "mb-8 text-base font-medium leading-5",
                    children: t.description
                }), e]
            });
            let m = u
        },
        11929: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            let a = r(75524).A
        },
        17072: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            var a = r(73723);
            r(7787);
            var l = r(28511);
            let n = ({
                children: e,
                className: t = "",
                tag: r = "div"
            }) => {
                let n = (0, l.A)("loco-text-heading-sm mb-4", t);
                return (0, a.jsx)(r, {
                    className: n,
                    "data-sentry-element": "Tag",
                    "data-sentry-component": "Title",
                    "data-sentry-source-file": "Title.tsx",
                    children: e
                })
            }
        },
        19192: (e, t, r) => {
            r.d(t, {
                A: () => d
            });
            var a = r(73723);
            r(7787);
            var l = r(28511),
                n = r(20312),
                s = r(73641),
                o = r(40446),
                i = r(69625);
            let d = ({
                title: e,
                cards: t,
                layout: r = "four-cards",
                cardVariant: d = "default",
                scroll: c = !1,
                cardsHeading: u
            }) => {
                let m = u || (e ? "h3" : "h2"),
                    x = (0, l.$)("gap-4 md:gap-8", {
                        "grid grid-cols-12": !c,
                        "flex overflow-x-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-900 dark:scrollbar-track-gray-900 dark:scrollbar-thumb-gray-100": c
                    });
                return (0, a.jsx)("section", {
                    className: "bg-white dark:bg-black",
                    "data-sentry-component": "Cards",
                    "data-sentry-source-file": "Cards.tsx",
                    children: (0, a.jsxs)("div", {
                        className: "container py-16",
                        children: [e && (0, a.jsx)("h2", {
                            className: "loco-text-heading-md mb-9 text-center",
                            children: e
                        }), (0, a.jsx)("div", {
                            className: x,
                            children: t?.map((t, u) => {
                                let x = (0, l.$)("flex flex-wrap flex-row", !c && ({
                                        "two-cards": "col-span-12 md:col-span-6 [&>div>.card-img]:h-72",
                                        "three-cards": "col-span-12 md:col-span-6 lg:col-span-4 [&>div>.card-img]:h-44",
                                        "four-cards": "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 [&>div>.card-img]:h-36"
                                    })[r], c && ({
                                        "two-cards": "mb-6 min-w-[35rem] [&>div>.card-img]:h-72",
                                        "three-cards": "mb-6 min-w-[22rem] [&>div>.card-img]:h-44",
                                        "four-cards": "mb-6 min-w-[16rem] [&>div>.card-img]:h-36"
                                    })[r]),
                                    p = (0, l.$)("place-self-end", {
                                        "px-6 pb-6": "default" === d || "transparent" === d
                                    }),
                                    h = (0, l.$)({
                                        "p-6": "default" === d || "transparent" === d,
                                        "py-6": "padded" === d
                                    }),
                                    g = (0, l.$)("object-cover", {
                                        "rounded-t-xl": "default" === d || "transparent" === d,
                                        rounded: "padded" === d
                                    }),
                                    f = (0, l.$)("caption-xs mt-1 text-right text-gray-400", {
                                        "mr-1": "padded" !== d
                                    });
                                return (0, a.jsxs)(o.A, {
                                    className: x,
                                    variant: d,
                                    "data-sentry-element": "Card",
                                    "data-sentry-component": "renderCards",
                                    "data-sentry-source-file": "Cards.tsx",
                                    children: [(0, a.jsxs)(o.A.Content, {
                                        "data-sentry-element": "Card.Content",
                                        "data-sentry-source-file": "Cards.tsx",
                                        children: [t.image && t.image.src && (0, a.jsxs)(a.Fragment, {
                                            children: [(0, a.jsx)(o.A.Image, {
                                                withinContainer: t.image.withinContainer,
                                                children: (0, a.jsx)(n.default, {
                                                    src: t.image.src ?? "",
                                                    alt: t.image.alt ?? "",
                                                    fill: !0,
                                                    className: g,
                                                    quality: 100
                                                })
                                            }), t.image.description && (0, a.jsx)(i.A, {
                                                className: f,
                                                children: t.image.description
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: h,
                                            children: [t.icon && t.icon.src && (0, a.jsx)("div", {
                                                className: "relative mb-5 dark:invert",
                                                children: (0, a.jsx)(n.default, {
                                                    src: t.icon.src ?? "",
                                                    alt: t.icon.alt ?? "",
                                                    quality: 100,
                                                    width: 23,
                                                    height: 23
                                                })
                                            }), (0, a.jsx)(m, {
                                                className: "loco-text-body-lg-medium mb-4 !font-semibold",
                                                "data-sentry-element": "CardTitleTag",
                                                "data-sentry-source-file": "Cards.tsx",
                                                children: t.title
                                            }), t.description && (0, a.jsx)(i.A, {
                                                className: "loco-text-body mb-4",
                                                children: t.description
                                            }), t.richText && (0, a.jsx)(i.A, {
                                                className: "loco-text-body mb-4 text-gray-600 dark:text-gray-300",
                                                children: t.richText
                                            })]
                                        })]
                                    }), t.actions && (0, a.jsx)("div", {
                                        className: p,
                                        children: t.actions.map((e, t) => (0, a.jsx)(s.A, {
                                            href: e.href,
                                            target: e.target ?? "_self",
                                            rounded: !0,
                                            hasArrow: !0,
                                            outlined: 0 === t,
                                            className: 0 === t ? "mr-3" : "mt-4",
                                            variant: 0 === t ? "primary" : "secondary",
                                            children: e.title
                                        }, `${e.title}-${t}`))
                                    })]
                                }, `card-${u}-${e}`)
                            })
                        })]
                    })
                })
            }
        },
        21746: (e, t, r) => {
            r.d(t, {
                A: () => u
            });
            var a = r(62318),
                l = r(82668),
                n = r.n(l),
                s = r(91895),
                o = r(96608);
            let i = (e, t) => t?.country ? e?.country?.toLowerCase().localeCompare(t?.country.toLowerCase()) || 0 : -1,
                d = {
                    currency: "USD"
                },
                c = e => e?.text !== null && e?.text !== void 0 || (e?.children ? e.children.every(c) : !!Array.isArray(e) && e.every(c)),
                u = () => {
                    let {
                        state: e
                    } = (0, s.Ay)(), [t] = (0, o.A)("location", "US"), r = r => {
                        let a = r?.variantPrices.sort(i),
                            l = e => a?.find(r => r.currency?.toLowerCase() === e?.currency?.toLowerCase() && (r.country?.toLowerCase() === t?.toLowerCase() || !r.country))?.price;
                        return l(e) ? [l(e), !1] : [l(d), !0]
                    }, l = e => {
                        if (!e) return {};
                        let {
                            productVariants: t,
                            productKey: a
                        } = e, l = {
                            productKey: null
                        };
                        return t?.forEach(e => {
                            let [t] = r(e);
                            e?.productVariantName && (l[e.productVariantName] = {
                                price: t
                            })
                        }), l
                    }, u = (e, t) => {
                        if (!t || !e) return e;
                        let r = l(t);
                        return a.A.render(e, r)
                    }, m = (e, t) => {
                        if (!t || !e) return e;
                        let r = e.match(/{{\s*[\w\.-]+\s*}}/g)?.map(e => e?.match(/[\w\.-]+/)?.[0] || "");
                        if (void 0 === r) return e;
                        let s = l(t);
                        return t && r?.every(e => n()(s, e)) ? a.A.render(e, s) : null
                    }, x = (e, t, r = u) => e?.map(e => {
                        if (e?._type === "block") return {
                            ...e,
                            children: x(e.children, t, r)
                        };
                        if (e?._type !== "span") return e;
                        {
                            let a = r(e.text, t);
                            return {
                                ...e,
                                text: a
                            }
                        }
                    });
                    return {
                        currency: e.currency,
                        location: t,
                        appendCommerceData: u,
                        appendCommerceDataToPortableText: x,
                        renderWithAllVariablesToPortableText: (e, t) => {
                            let r = x(e, t, m);
                            return c(r) ? r : null
                        },
                        getPrice: r,
                        appendCommerceDataForMultipleProducts: (e, t) => {
                            if (!t || !e) return e;
                            let l = (e => {
                                let t = {
                                    productKey: null
                                };
                                return e.forEach(e => {
                                    if (!e) return {};
                                    let {
                                        productVariants: a
                                    } = e;
                                    a?.forEach(e => {
                                        let [a] = r(e);
                                        e?.productVariantName && (t[e.productVariantName] = {
                                            price: a
                                        })
                                    })
                                }), t
                            })(t);
                            return a.A.render(e, l)
                        }
                    }
                }
        },
        22901: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            let a = r(92584).A
        },
        23540: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            var a = r(73723);
            r(7787);
            var l = r(28511);
            let n = ({
                children: e,
                tag: t = "div",
                className: r = ""
            }) => {
                let n = (0, l.A)("loco-caption-lg-semibold mb-4", r);
                return (0, a.jsx)(t, {
                    className: n,
                    "data-sentry-element": "Tag",
                    "data-sentry-component": "Eyebrow",
                    "data-sentry-source-file": "Eyebrow.tsx",
                    children: e
                })
            }
        },
        24421: (e, t, r) => {
            r.d(t, {
                J: () => l
            });
            var a = r(7787);
            let l = (e, t = !0) => {
                let [r, l] = (0, a.useState)(null);
                return (0, a.useEffect)(() => {
                    let r;
                    return t && e.current && (r = setInterval(() => {
                        let t = window.YT;
                        t && e.current && (l(new t.Player(e.current)), clearInterval(r))
                    }, 500)), () => {
                        l(null), clearInterval(r)
                    }
                }, [t, e]), {
                    player: r
                }
            }
        },
        24849: (e, t, r) => {
            r.d(t, {
                A: () => c
            });
            var a = r(73723),
                l = r(7787),
                n = r(57798),
                s = r(31813),
                o = r(65331),
                i = r(42505),
                d = r(64007);
            let c = ({
                actions: e,
                backgroundImage: t,
                description: r,
                eyebrow: c,
                image: u,
                mediaAspectRatio: m,
                mediaPosition: x,
                size: p,
                title: h,
                theme: g,
                youtubeVideo: f,
                brandfolderVideo: y,
                buttonLabel: b,
                videoInline: v,
                blockKey: j,
                isHidden: w,
                consent: k,
                featureList: N,
                productCategoryFilter: A
            }) => {
                let [C] = (0, l.useContext)(o.th);
                if (C.categories && C.categories.length > 0 && 1 === C.categories.findIndex(({
                        _id: e
                    }) => e === C.selectedCategory) && null != C.selectedSubcategory) return null;
                let {
                    subcategories: S,
                    productCatalogItems: B
                } = C.categories.find(({
                    _id: e
                }) => e === C.selectedCategory) || {}, L = null != C.selectedSubcategory ? (S || []).find(({
                    _id: e
                }) => e === C.selectedSubcategory) : null, F = !A || A.categories?.find(e => e._id === C.selectedCategory) != null && (null == L || !A.subcategories || A.subcategories.some(({
                    _id: e
                }) => e === C.selectedSubcategory)), I = e?.map(({
                    title: e,
                    link: t
                }) => {
                    let r = t?.linkReference?.target === "_blank" ? "_blank" : "_self";
                    return {
                        label: e,
                        href: t?.linkReference?.href.current || "/",
                        target: r
                    }
                }), T = N?.map((e, t) => ({
                    eyebrow: e.eyebrow || "",
                    title: e.title || "",
                    description: e.description || "",
                    action: e.action ? (() => {
                        let t = e.action.link?.linkReference?.target === "_blank" ? "_blank" : "_self";
                        return {
                            label: e.action.title || "",
                            href: e.action.link?.linkReference?.href.current || "#",
                            target: t
                        }
                    })() : {
                        label: "",
                        href: "#"
                    },
                    icon: e.icon?.asset?.url || "",
                    onCardClick: e => ((e, t) => {
                        if (!t && N?.[e]) {
                            let t = N[e];
                            (0, d.A)({
                                event: "userEvent",
                                event_name: "navigation_click",
                                properties: {
                                    navigation_click_text: t.title || "",
                                    link_type: "feature list item",
                                    form_name: t.title || "",
                                    form_id: `list-item-${e}`,
                                    block_title: h
                                }
                            })
                        }
                    })(t, e)
                }));
                return (0, a.jsx)(a.Fragment, {
                    children: !w && F && (0, a.jsx)("section", {
                        className: "dark" === g ? "dark" : "",
                        children: (0, a.jsx)(s.A, {
                            actions: I,
                            aspectRatio: "16:9" === m ? "16:9" : "1:1" === m ? "1:1" : void 0,
                            backgroundImage: t,
                            description: (0, a.jsx)(n.RK, {
                                value: r
                            }),
                            eyebrow: c,
                            image: {
                                src: (0, i.i)(u?.file?.asset?.url || "")?.auto("format")?.url() || "",
                                placeholder: u?.file?.asset.metadata?.lqip || "",
                                alt: u?.alt || "",
                                caption: u?.caption || ""
                            },
                            mediaPosition: "right" === x ? "right" : "left" === x ? "left" : void 0,
                            size: "large" === p ? "large" : "default" === p ? "default" : void 0,
                            title: h,
                            youtubeVideo: f,
                            brandfolderVideo: {
                                src: y?.muxHLSURL || ""
                            },
                            videoInline: v,
                            buttonLabel: b,
                            blockKey: j,
                            blockedMessage: k?.blockedMessage,
                            consentButtonLabel: k?.consentButtonLabel || "",
                            featureList: T
                        })
                    })
                })
            }
        },
        30500: (e, t, r) => {
            r.d(t, {
                s: () => o,
                A: () => i
            });
            var a = r(73723);
            r(7787);
            var l = r(47289);
            let n = () => Promise.all([r.e(6629), r.e(21170), r.e(22186)]).then(r.bind(r, 11503)).then(e => e.default),
                s = () => Promise.all([r.e(6629), r.e(21170), r.e(59096), r.e(30062)]).then(r.bind(r, 22214)).then(e => e.default),
                o = ({
                    children: e
                }) => (0, a.jsx)(l.F, {
                    features: s,
                    strict: !0,
                    "data-sentry-element": "LazyMotion",
                    "data-sentry-component": "FramerMotionLayoutLazy",
                    "data-sentry-source-file": "FramerMotionLayoutLazy.tsx",
                    children: e
                }),
                i = ({
                    children: e
                }) => (0, a.jsx)(l.F, {
                    features: n,
                    strict: !0,
                    "data-sentry-element": "LazyMotion",
                    "data-sentry-component": "FramerMotionLazy",
                    "data-sentry-source-file": "FramerMotionLazy.tsx",
                    children: e
                })
        },
        31276: (e, t, r) => {
            r.d(t, {
                V: () => i
            });
            var a = r(73723);
            r(7787);
            var l = r(7330),
                n = r(62808),
                s = r(64007),
                o = r(3582);
            let i = e => {
                let {
                    extraFields: t
                } = (0, o.A)(), r = ({
                    label: t,
                    form: r
                }) => {
                    let o = ((e, t) => {
                        let r = e?.find(e => t.title === e?.form?.title)?.customSelections || "";
                        try {
                            return JSON.parse(r)
                        } catch (e) {
                            return null
                        }
                    })(e || [], r);
                    if (o && r?.fields)
                        for (let e of Object.keys(o)) {
                            let t = r.fields.findIndex(t => t.formFieldId === e);
                            if (t >= 0) {
                                let a = o[e];
                                null != a.isRequired && (r.fields[t].isRequired = o[e].isRequired), a.isHidden && r.fields.splice(t, 1)
                            }
                        }
                    return (0, a.jsx)(l.A, {
                        actionLabel: t,
                        onOpenChange: e => {
                            e && (0, s.A)({
                                properties: {
                                    form_action: "presented",
                                    form_id: r.fields?.find(e => "elqFormID" === e.formFieldId)?.defaultValue,
                                    form_name: r.fields?.find(e => "elqFormName" === e.formFieldId)?.defaultValue
                                }
                            })
                        },
                        "data-sentry-element": "Modal",
                        "data-sentry-component": "renderModal",
                        "data-sentry-source-file": "useFormModal.tsx",
                        children: e => (0, a.jsx)(l.A.Layout, {
                            modal: {
                                title: r.title,
                                description: r.description
                            },
                            children: r && (0, a.jsx)(n.o, {
                                form: r,
                                close: e
                            })
                        })
                    })
                };
                return {
                    renderModal: r,
                    mapFormActions: e => e?.map(e => ({
                        title: e.title,
                        link: e.link ? {
                            href: e.link.linkReference?.href.current || "",
                            target: e.link.linkReference?.target || "_self"
                        } : null,
                        form: e.form ? {
                            form: e.form,
                            webinarFormParametersContent: e.webinarFormParametersContent,
                            extraFields: t,
                            renderModal: r
                        } : null
                    })),
                    extraFields: t
                }
            }
        },
        31813: (e, t, r) => {
            r.d(t, {
                A: () => N
            });
            var a = r(73723),
                l = r(7787),
                n = r(28511),
                s = r(20312),
                o = r(65022),
                i = r(23540),
                d = r(73641),
                c = r(38898),
                u = r(17072),
                m = r(69625),
                x = r(48080);
            let p = ({
                features: e,
                transitionTime: t = 8500
            }) => {
                let [r, n] = (0, l.useState)(0), s = (0, l.useRef)(null), o = (0, l.useRef)(null), [i, c] = (0, l.useState)(!1), [u, m] = (0, l.useState)(!1), p = (0, l.useRef)(null);
                (0, l.useEffect)(() => {
                    e.forEach(e => {
                        e.icon && (new window.Image().src = e.icon, new window.Image().src = e.icon)
                    })
                }, [e]), (0, l.useEffect)(() => {
                    let e = new IntersectionObserver(([e]) => {
                        c(e.intersectionRatio >= .8)
                    }, {
                        threshold: [0, .8, 1]
                    });
                    return o.current && e.observe(o.current), () => e.disconnect()
                }, []), (0, l.useEffect)(() => (s.current && clearTimeout(s.current), i && !u && (s.current = setTimeout(() => {
                    n(t => (t + 1) % e.length)
                }, t)), () => {
                    s.current && clearTimeout(s.current)
                }), [r, e.length, t, i, u]);
                let h = (0, l.useCallback)(a => {
                        let l = a === r;
                        n(a), m(!0);
                        let s = e[a];
                        s?.onCardClick && setTimeout(() => {
                            s.onCardClick?.(l)
                        }, 0), p.current && clearTimeout(p.current), p.current = setTimeout(() => {
                            m(!1)
                        }, t)
                    }, [r, e, t]),
                    g = (0, l.useCallback)((e, t) => {
                        ("Enter" === e.key || " " === e.key) && (e.preventDefault(), h(t))
                    }, [h]);
                return (0, l.useEffect)(() => () => {
                    p.current && clearTimeout(p.current)
                }, []), (0, a.jsx)("div", {
                    ref: o,
                    className: "self-stretch px-5 md:px-5 lg:px-0 xl:px-20 pb-6 md:pb-6 lg:pb-0 inline-flex flex-col justify-start items-start gap-2 w-full relative",
                    "data-sentry-component": "FeatureList",
                    "data-sentry-source-file": "FeatureList.tsx",
                    children: e.map((e, t) => {
                        let l = t === r;
                        return (0, a.jsxs)("div", {
                            "data-mobile": "true",
                            "data-show-image": l ? "true" : "false",
                            "data-state": l ? "selected" : "inactive",
                            role: "button",
                            tabIndex: 0,
                            className: `self-stretch cursor-pointer bg-white rounded-lg overflow-hidden
              ${l?`${e.icon?"lg:pl-36":"lg:pl-10"} lg:pr-10 lg:py-8 p-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04),0px_2px_12px_3px_rgba(0,0,0,0.04)]`:"lg:px-10 lg:py-6 p-6"} 
              lg:inline-flex lg:items-start 
              flex ${l?"flex-col":"items-center"} justify-start 
              gap-2 relative
              transition-all duration-500 ease-out
            `,
                            onClick: () => h(t),
                            onKeyDown: e => g(e, t),
                            children: [e.icon && l && (0, a.jsx)(x.P.div, {
                                initial: {
                                    opacity: 0,
                                    scale: .8
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                transition: {
                                    type: "spring",
                                    duration: .2,
                                    bounce: .1,
                                    delay: 0
                                },
                                className: "lg:hidden w-14 h-14 inline-flex justify-start items-center gap-2.5",
                                children: (0, a.jsx)("div", {
                                    className: "flex-1 self-stretch flex justify-center items-center gap-2.5",
                                    children: (0, a.jsx)("img", {
                                        className: "flex-1 self-stretch",
                                        src: e.icon || "https://placehold.co/57x57",
                                        alt: e.title || "Feature icon",
                                        width: 57,
                                        height: 57,
                                        loading: "eager",
                                        style: {
                                            objectFit: "cover",
                                            imageRendering: "auto"
                                        }
                                    })
                                })
                            }), e.icon && l && (0, a.jsx)(x.P.div, {
                                initial: {
                                    opacity: 0,
                                    x: -10
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    type: "spring",
                                    duration: .5,
                                    bounce: .1,
                                    delay: .1
                                },
                                className: "left-[-38px] absolute lg:flex hidden pointer-events-none inset-y-0",
                                children: (0, a.jsx)("div", {
                                    className: "h-full py-8 flex justify-start items-center",
                                    children: (0, a.jsx)("img", {
                                        className: "max-h-full w-auto object-contain",
                                        src: e.icon || "",
                                        alt: e.title || "Feature icon",
                                        loading: "eager",
                                        style: {
                                            imageRendering: "auto"
                                        }
                                    })
                                })
                            }), (0, a.jsxs)("div", {
                                className: "lg:flex-1 lg:inline-flex lg:flex-col self-stretch flex flex-col justify-start items-start gap-[9px] lg:max-w-[304px]",
                                children: [l && (0, a.jsx)(x.P.div, {
                                    initial: {
                                        opacity: 0,
                                        y: -.5
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        type: "spring",
                                        duration: .3,
                                        bounce: .1
                                    },
                                    className: "w-64 inline-flex justify-center items-center",
                                    children: (0, a.jsx)("div", {
                                        className: "flex-1 justify-center text-gray-700 text-[10px] leading-[16px] tracking-[1px] font-medium uppercase md:text-[12px] md:leading-[21px] md:tracking-[1.2px]",
                                        children: e.eyebrow || ""
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "self-stretch inline-flex justify-center items-center",
                                    children: (0, a.jsx)(x.P.div, {
                                        animate: {
                                            color: l ? "#000000" : "#374151"
                                        },
                                        transition: {
                                            type: "spring",
                                            duration: .3,
                                            bounce: .1
                                        },
                                        className: "flex-1 justify-center md:text-[20px] text-base font-medium md:leading-[24px] leading-tight",
                                        children: e.title || "Untitled"
                                    })
                                }), l && (0, a.jsx)(x.P.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 1
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        type: "spring",
                                        duration: .3,
                                        bounce: .1
                                    },
                                    className: "self-stretch justify-start text-gray-700 md:text-[14px] text-xs font-normal md:leading-[21px] leading-none",
                                    children: e.description || ""
                                }), l && (0, a.jsx)(x.P.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 1
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        type: "spring",
                                        duration: .3,
                                        bounce: .1
                                    },
                                    className: "self-stretch pt-3 flex flex-col justify-start items-start",
                                    children: (0, a.jsx)(d.A, {
                                        href: e.action?.href || "#",
                                        target: e.action?.target,
                                        variant: "primary",
                                        size: "small",
                                        rounded: !0,
                                        hasArrow: !0,
                                        children: e.action?.label || "Learn More"
                                    })
                                })]
                            })]
                        }, t)
                    })
                })
            };
            var h = r(63457),
                g = r(49019),
                f = r(98159),
                y = r(36677),
                b = r(96262),
                v = r(7034),
                j = r(31881);
            let w = (0, v.default)(() => Promise.all([r.e(95066), r.e(79887)]).then(r.t.bind(r, 56474, 23)), {
                    loadableGenerated: {
                        webpack: () => [56474]
                    },
                    ssr: !1
                }),
                k = {
                    maxMaxBufferLength: 1,
                    qualityStartLevel: 1
                },
                N = ({
                    actions: e = [],
                    aspectRatio: t,
                    backgroundImage: r = !1,
                    description: x,
                    eyebrow: v,
                    image: N,
                    mediaPosition: A = "right",
                    size: C = "default",
                    title: S,
                    youtubeVideo: B,
                    brandfolderVideo: L,
                    videoInline: F = !1,
                    buttonLabel: I = "Play Video",
                    blockKey: T,
                    blockedMessage: _,
                    consentButtonLabel: M,
                    featureList: P
                }) => {
                    let $ = (0, g.A)(`(max-width: ${h.A.Large}px)`),
                        R = (0, l.useRef)(null),
                        [D, E] = (0, l.useState)(!1),
                        z = (0, y.W)(R, {
                            once: !0
                        }),
                        O = (0, b.I)(),
                        W = (0, l.useRef)({
                            total: 0,
                            progress: 0
                        }),
                        H = P && P.length > 0,
                        G = !H && B?.url;
                    (0, l.useEffect)(() => {
                        F || E(!1)
                    }, [z]);
                    let U = () => {
                            E(!0)
                        },
                        q = (0, n.A)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                            "opacity-0 pointer-events-none": D && !O && z && L?.src
                        }),
                        V = (0, n.A)("relative", {
                            "lg:py-14": H,
                            "lg:py-24": !H && "default" === C && (!t || "16:9" === t),
                            "lg:py-80": !H && "large" === C && (!t || "16:9" === t),
                            "lg:py-40": !H && "large" === C && "1:1" === t,
                            "dark bg-gray-900 overflow-hidden": r,
                            "bg-gray-100 dark:bg-gray-900": !r && H,
                            "bg-white dark:bg-gray-900": !r && !H
                        }),
                        Y = (0, n.A)("grid grid-flow-row grid-cols-12 place-items-center gap-4", {
                            "lg:grid-flow-col": !0,
                            "lg:container": !t || "16:9" === t
                        }),
                        K = (0, n.A)("relative w-full rounded-lg", {
                            "aspect-square": "1:1" === t,
                            "aspect-video": "16:9" === t,
                            "overflow-hidden": !B?.url
                        }),
                        X = (0, n.A)("relative col-span-12 flex h-full flex-col w-full items-center lg:items-start lg:col-span-6", {
                            "lg:col-start-1": "left" === A,
                            "lg:col-start-7": "right" === A,
                            "order-first": !H || !$,
                            "order-last": H && $
                        }),
                        Z = (0, n.A)("relative col-span-12 px-5 text-center lg:col-span-5 lg:pb-0 lg:text-left", {
                            "pb-6": !(H && $),
                            "py-6": H && $,
                            "lg:col-start-8": "left" === A && (!t || "16:9" === t),
                            "lg:col-start-1": "right" === A && (!t || "16:9" === t),
                            "lg:col-start-2": "right" === A && "1:1" === t,
                            "order-first": H && $
                        }),
                        J = e => {
                            let t = W.current.progress / W.current.total * 100 || 0;
                            (0, o.g)({
                                name: e,
                                videoDuration: W.current.total,
                                videoProgress: Number(t)
                            })
                        };
                    return (0, a.jsxs)("section", {
                        className: V,
                        "data-sentry-component": "FullWidthBlock",
                        "data-sentry-source-file": "FullWidthBlock.tsx",
                        children: [r && (0, a.jsx)(s.default, {
                            src: N.src,
                            alt: N.alt,
                            fill: !0,
                            className: "blur-2xl brightness-[0.2]"
                        }), (0, a.jsxs)("div", {
                            className: Y,
                            ref: R,
                            children: [H ? (0, a.jsx)("div", {
                                className: X,
                                children: (0, a.jsx)(p, {
                                    features: P
                                })
                            }) : G ? (0, a.jsx)("div", {
                                className: X,
                                children: (0, a.jsx)("div", {
                                    className: K,
                                    children: (0, a.jsx)(f.A, {
                                        url: B?.url || "",
                                        title: B?.title ?? "",
                                        blockedMessage: _,
                                        consentButtonLabel: M
                                    })
                                })
                            }) : (0, a.jsxs)("div", {
                                className: X,
                                "data-sentry-component": "renderMedia",
                                "data-sentry-source-file": "FullWidthBlock.tsx",
                                children: [(0, a.jsxs)("div", {
                                    className: K,
                                    children: [z && !O && L?.src && (0, a.jsx)(w, {
                                        url: L.src,
                                        playing: D,
                                        loop: !!F,
                                        muted: F,
                                        playsinline: F,
                                        width: "100%",
                                        height: "100%",
                                        onDuration: e => W.current.total = e,
                                        onProgress: e => {
                                            W.current.progress = 10 * e.played
                                        },
                                        className: "absolute left-0 top-0 [&>video]:object-cover",
                                        onReady: () => {
                                            F && E(!0)
                                        },
                                        controls: !F,
                                        onPlay: () => J("video_play"),
                                        onPause: () => J("video_pause"),
                                        config: {
                                            hlsOptions: {
                                                maxMaxBufferLength: k.maxMaxBufferLength,
                                                startLevel: k.qualityStartLevel
                                            }
                                        }
                                    }), N.src && (0, a.jsxs)("div", {
                                        className: q,
                                        onClick: U,
                                        children: [L?.src && !F && (0, a.jsx)(j.A, {
                                            handleIsPlaying: U,
                                            className: "absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                            label: I,
                                            "data-link-location": `${T}-video-play`,
                                            "data-link-type": "CTA"
                                        }), (0, a.jsx)(s.default, {
                                            src: N.src,
                                            alt: N.alt,
                                            placeholder: "blur",
                                            blurDataURL: N.placeholder,
                                            fill: !0
                                        })]
                                    })]
                                }), N.caption && (0, a.jsx)("div", {
                                    className: "loco-text-body-sm-medium z-10 mb-6 mt-3 text-gray-600 lg:mb-3",
                                    children: N.caption
                                })]
                            }), (0, a.jsxs)("div", {
                                className: Z,
                                children: [v && (0, a.jsx)(i.A, {
                                    className: "text-gray-900 dark:text-gray-100",
                                    children: v
                                }), (0, a.jsx)(u.A, {
                                    tag: "h2",
                                    className: "text-gray-900 dark:text-gray-100",
                                    "data-sentry-element": "Title",
                                    "data-sentry-source-file": "FullWidthBlock.tsx",
                                    children: S
                                }), (0, a.jsx)(m.A, {
                                    className: "mb-10 text-gray-900 dark:text-gray-100",
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "FullWidthBlock.tsx",
                                    children: x
                                }), (0, a.jsx)(c.A, {
                                    className: "justify-center lg:justify-normal",
                                    "data-sentry-element": "ButtonGroup",
                                    "data-sentry-source-file": "FullWidthBlock.tsx",
                                    children: e.length > 0 && e.map((e, t) => (0, a.jsx)(d.A, {
                                        variant: 0 === t ? "primary" : "secondary",
                                        outlined: 0 === t,
                                        size: $ ? "small" : "medium",
                                        rounded: !0,
                                        hasArrow: !0,
                                        href: e.href,
                                        target: e.target,
                                        "data-sentry-element": "Button",
                                        "data-sentry-component": "renderActions",
                                        "data-sentry-source-file": "FullWidthBlock.tsx",
                                        children: e.label
                                    }, `full-width-block-action-${t}`))
                                })]
                            })]
                        })]
                    })
                }
        },
        37170: (e, t, r) => {
            r.d(t, {
                A: () => l
            });
            var a = r(73723);
            r(7787);
            let l = ({
                className: e = "",
                width: t = 16,
                height: r = 16
            }) => (0, a.jsxs)("svg", {
                width: t,
                height: r,
                viewBox: "0 0 256 256",
                xmlns: "http://www.w3.org/2000/svg",
                className: e,
                "data-sentry-element": "svg",
                "data-sentry-component": "Close",
                "data-sentry-source-file": "CloseIcon.tsx",
                children: [(0, a.jsx)("rect", {
                    width: "256",
                    height: "256",
                    fill: "none",
                    "data-sentry-element": "rect",
                    "data-sentry-source-file": "CloseIcon.tsx"
                }), (0, a.jsx)("line", {
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
                }), (0, a.jsx)("line", {
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
            })
        },
        38898: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            var a = r(73723);
            r(7787);
            var l = r(28511);
            let n = ({
                children: e,
                className: t = "",
                orientation: r = "horizontal"
            }) => {
                let n = (0, l.A)("flex gap-2 flex-wrap", {
                    "flex-col items-start": "vertical" === r
                }, t);
                return (0, a.jsx)("div", {
                    className: n,
                    "data-sentry-component": "ButtonGroup",
                    "data-sentry-source-file": "ButtonGroup.tsx",
                    children: e
                })
            }
        },
        40446: (e, t, r) => {
            r.d(t, {
                A: () => s
            });
            var a = r(73723);
            r(7787);
            var l = r(28511);
            let n = ({
                children: e,
                className: t = "",
                variant: r = "default"
            }) => {
                let n = (0, l.$)({
                    default: "bg-white dark:bg-gray-900 rounded-xl",
                    padded: "p-6 bg-white dark:bg-gray-900 rounded-xl",
                    transparent: ""
                } [r], t);
                return (0, a.jsx)("div", {
                    className: n,
                    "data-sentry-component": "Card",
                    "data-sentry-source-file": "Card.tsx",
                    children: e
                })
            };
            n.Content = ({
                children: e,
                className: t = "w-full"
            }) => (0, a.jsx)("div", {
                className: t,
                "data-sentry-component": "CardContent",
                "data-sentry-source-file": "CardContent.tsx",
                children: e
            }), n.Image = ({
                children: e,
                withinContainer: t
            }) => {
                let r = (0, l.$)("card-img relative w-full", {
                    "[&>img]:!static !h-auto": t
                });
                return (0, a.jsx)("div", {
                    className: r,
                    "data-sentry-component": "CardImage",
                    "data-sentry-source-file": "CardImage.tsx",
                    children: e
                })
            };
            let s = n
        },
        42505: (e, t, r) => {
            r.d(t, {
                i: () => s
            });
            var a = r(90950),
                l = r(95176);
            let n = r.n(l)()(a.B9),
                s = e => e ? n.image(e) : null
        },
        45941: (e, t, r) => {
            r.d(t, {
                A: () => p
            });
            var a = r(73723),
                l = r(7787),
                n = r(96828),
                s = r(28511),
                o = r(36916),
                i = r(78269),
                d = r(57491),
                c = r(64309),
                u = r(13073),
                m = r(24566),
                x = r(6158);
            let p = (0, l.forwardRef)(function({
                variant: e = "secondary",
                ariaLabel: t,
                size: r = "medium",
                direction: p = "right",
                className: h = "",
                href: g,
                onPress: f,
                isDisabled: y,
                isForcedHover: b,
                tag: v = "button",
                ...j
            }, w) {
                let k = (0, u.U)(w),
                    [N, A] = (0, l.useState)(!1),
                    {
                        buttonProps: C
                    } = (0, o.s)({
                        variant: e,
                        size: r,
                        direction: p,
                        className: h,
                        elementType: g ? "a" : v,
                        onPress: f,
                        href: g,
                        isDisabled: y,
                        ...j
                    }, k),
                    {
                        hoverProps: S,
                        isHovered: B
                    } = (0, i.M)({
                        isDisabled: y
                    }),
                    {
                        focusProps: L
                    } = (0, d.i)({
                        onFocusChange(e) {
                            A(e && (0, c.pP)() || !1)
                        }
                    }),
                    F = (0, s.$)("btn-outlined cursor-pointer flex justify-start items-center outline-none border-solid border-2 rounded-full overflow-hidden", {
                        primary: "btn-primary",
                        secondary: "btn-secondary"
                    } [e], {
                        medium: "w-9 h-9",
                        large: "w-14 h-14"
                    } [r], {
                        right: "",
                        up: "-rotate-90",
                        left: "rotate-180",
                        down: "rotate-90"
                    } [p], {
                        hovered: B || b
                    }, {
                        focused: N
                    }, {
                        "!border-gray-400 pointer-events-none": y
                    }, h),
                    I = (0, s.$)("w-full transition-all duration-300 shrink-0 ", {
                        "fill-gray-400": y
                    }),
                    T = (0, s.$)(I, {
                        "fill-white": "primary" === e
                    }, {
                        "fill-white dark:fill-black": "secondary" === e
                    }, {
                        "-ml-[100%]": !B && !N && !b
                    }, {
                        "ml-0": B || N || b
                    }),
                    _ = (0, s.$)(I, "fill-black dark:fill-white");
                return g ? (0, a.jsxs)(n.N_, {
                    ...(0, m.v)(C, S, L),
                    ref: k,
                    "aria-label": t,
                    className: F,
                    href: g,
                    legacyBehavior: !0,
                    children: [(0, a.jsx)(x.H, {
                        className: T
                    }), (0, a.jsx)(x.H, {
                        className: _
                    })]
                }) : (0, a.jsxs)(v, {
                    ...(0, m.v)(C, S, L),
                    ref: k,
                    "aria-label": t,
                    className: F,
                    tabIndex: "span" == v ? -1 : 0,
                    children: [(0, a.jsx)(x.H, {
                        className: T
                    }), (0, a.jsx)(x.H, {
                        className: _
                    })]
                })
            })
        },
        49019: (e, t, r) => {
            r.d(t, {
                A: () => l
            });
            var a = r(7787);
            let l = e => {
                let [t, r] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => {
                    let a = window.matchMedia(e);
                    a.matches !== t && r(a.matches);
                    let l = () => r(a.matches);
                    return window.addEventListener("resize", l), () => window.removeEventListener("resize", l)
                }, [t, e]), t
            }
        },
        49156: (e, t, r) => {
            r.d(t, {
                default: () => eg
            });
            var a = r(73723),
                l = r(7787),
                n = r(49313),
                s = r(7598),
                o = r(28511),
                i = r(40407),
                d = r(5161),
                c = r(58013),
                u = r(20312),
                m = r(63457),
                x = r(36677),
                p = r(56839),
                h = r(49019),
                g = r(23540),
                f = r(30500);
            let y = ({
                eyebrow: e,
                linesOfText: t,
                backgroundImageUrl: r,
                floatingImages: n = [],
                actions: s = null,
                isFullHeight: u = !1,
                isAnimated: x = !1,
                className: b = ""
            }) => {
                var v, j;
                let w = (0, h.A)(`(max-width: ${m.A.Medium}px)`),
                    k = (v = w, j = p.A.useInnerSizes().height, v ? 4.5 : j <= 800 ? 5.25 : j <= 1200 ? 7.15 : 7.2),
                    N = (0, l.useRef)(null),
                    A = x && u && !w ? 200 : 100,
                    {
                        scrollYProgress: C
                    } = (0, i.L)({
                        target: N,
                        offset: ["start 400px", "end 65vh"]
                    }),
                    S = (0, d.G)(C, [0, .15, .25, 1], [0, .5, 1, 1]),
                    B = (0, d.G)(C, [1, 0], [A * k, 65]),
                    L = (0, o.A)("container relative md:px-3 lg:px-4 flex justify-center items-center", {
                        "flex flex-col justify-center items-center py-56": u
                    }, {
                        "py-60": !u
                    }, b),
                    F = (0, o.A)({
                        absolute: u
                    }, {
                        block: !u
                    });
                return (0, a.jsx)(f.A, {
                    "data-sentry-element": "FramerMotionLazy",
                    "data-sentry-component": "Statement",
                    "data-sentry-source-file": "Statement.tsx",
                    children: (0, a.jsx)("div", {
                        className: "overflow-y-visible",
                        children: (0, a.jsx)("div", {
                            className: "dark overflow-x-hidden overflow-y-visible bg-gray-900 md:overflow-x-clip",
                            children: (0, a.jsx)("div", {
                                ref: N,
                                className: L,
                                style: {
                                    height: u ? `${A}vh` : "inherit",
                                    maxHeight: "115rem"
                                },
                                children: (0, a.jsxs)(c.m.div, {
                                    className: F,
                                    style: x && !w ? {
                                        top: B
                                    } : {
                                        top: "40%"
                                    },
                                    "data-sentry-element": "m.div",
                                    "data-sentry-source-file": "Statement.tsx",
                                    children: [e && (0, a.jsx)(g.A, {
                                        className: "text-center",
                                        children: e
                                    }), (0, a.jsx)(y.Text, {
                                        linesOfText: t,
                                        backgroundImageUrl: r,
                                        opacity: x ? {
                                            opacity: S
                                        } : {},
                                        "data-sentry-element": "Statement.Text",
                                        "data-sentry-source-file": "Statement.tsx"
                                    }), s && (0, a.jsx)(y.Action, {
                                        children: s
                                    }), n.length > 0 && n.map((e, t) => (0, a.jsx)(y.FloatingObject, {
                                        objectImageUrl: e.url,
                                        placeholder: e.placeholder,
                                        scrollYProgress: C,
                                        index: t
                                    }, `${e.placeholder}-${t}`))]
                                })
                            })
                        })
                    })
                })
            };
            y.Text = ({
                linesOfText: e,
                backgroundImageUrl: t,
                opacity: r = {}
            }) => {
                let n = (0, l.useRef)(null),
                    s = (0, x.W)(n, {
                        once: !0
                    });
                return (0, a.jsx)(c.m.h2, {
                    className: "loco-text-heading-xl from-[#886674] to-[#F78366] bg-cover bg-fixed bg-clip-text bg-bottom text-center transition-all supports-[-moz-appearance]:bg-local",
                    style: {
                        ...s && {
                            backgroundImage: `url('${t}'), linear-gradient(to right, var(--tw-gradient-stops))`
                        },
                        ...r
                    },
                    "aria-label": e?.join(" "),
                    ref: n,
                    "data-sentry-element": "m.h2",
                    "data-sentry-component": "StatementText",
                    "data-sentry-source-file": "StatementText.tsx",
                    children: e?.map((e, t) => (0, a.jsxs)("div", {
                        "aria-hidden": "true",
                        className: "text-transparent",
                        children: [e, (0, a.jsx)("span", {
                            className: "invisible inline-block w-0",
                            children: "\xa0"
                        })]
                    }, `${e}-${t}`))
                })
            }, y.Action = ({
                children: e
            }) => (0, a.jsx)("div", {
                className: "flex flex-col items-center justify-center gap-2 pt-8 transition-all md:flex-row duration-500 ease-in-out",
                "data-sentry-component": "StatementAction",
                "data-sentry-source-file": "StatementAction.tsx",
                children: e
            }), y.FloatingObject = ({
                objectImageUrl: e,
                scrollYProgress: t,
                placeholder: r = "",
                index: n = 0
            }) => {
                let [s, o] = (0, l.useState)(!1), i = function(e) {
                    switch (e) {
                        case 0:
                            return {
                                Y: {
                                    original: [0, 1],
                                    mapped: ["80%", "110%"]
                                }, X: {
                                    original: [0, 1],
                                    mapped: ["20%", "-20%"]
                                }
                            };
                        case 1:
                            return {
                                Y: {
                                    original: [0, 1],
                                    mapped: ["0%", "-120%"]
                                }, X: {
                                    original: [0, 1],
                                    mapped: ["65%", "125%"]
                                }
                            };
                        case 2:
                            return {
                                Y: {
                                    original: [0, 1],
                                    mapped: ["70%", "125%"]
                                }, X: {
                                    original: [0, 1],
                                    mapped: ["75%", "120%"]
                                }
                            };
                        case 3:
                            return {
                                Y: {
                                    original: [0, 1],
                                    mapped: ["25%", "-110%"]
                                }, X: {
                                    original: [0, 1],
                                    mapped: ["35%", "5%"]
                                }
                            };
                        default:
                            return {
                                Y: {
                                    original: [0, 1],
                                    mapped: ["50%", "50%"]
                                }, X: {
                                    original: [0, 1],
                                    mapped: ["50%", "50%"]
                                }
                            }
                    }
                }(n), x = e => o(e), p = (0, d.G)(t, [0, .05, 1], [0, 1, 1]), h = (0, d.G)(t, i.Y.original, i.Y.mapped), g = (0, d.G)(t, i.X.original, i.X.mapped), f = t ? {
                    top: h,
                    left: g,
                    opacity: p,
                    animationDirection: n % 2 == 0 ? "reverse" : "normal"
                } : {
                    opacity: 0
                };
                return (0, a.jsx)(c.m.div, {
                    style: f,
                    className: "animate-space-float animate-space-spin absolute ml-[-6rem] mt-[-6rem] w-[12rem] motion-reduce:animate-none md:ml-[-7.5rem] md:mt-[-7.5rem] md:w-[15rem] lg:ml-[-10rem] lg:mt-[-10rem] lg:w-[20rem] xl:ml-[-12.5rem] xl:mt-[-12.5rem] xl:w-[25rem]",
                    "data-sentry-element": "m.div",
                    "data-sentry-component": "StatementFloatingObject",
                    "data-sentry-source-file": "StatementFloatingObject.tsx",
                    children: (0, a.jsx)(u.default, {
                        src: e,
                        className: `${s?"animate-wiggle":""} transition-all`,
                        alt: "",
                        onMouseOver: () => x(!0),
                        onAnimationEnd: () => x(!1),
                        width: 400,
                        height: 400,
                        sizes: `(max-width: ${m.A.Medium}) 12rem,
                (max-width: ${m.A.Large}) 15rem,
                (max-width: ${m.A.XLarge}) 20rem,
                25rem`,
                        placeholder: "blur",
                        blurDataURL: r,
                        "data-sentry-element": "Image",
                        "data-sentry-source-file": "StatementFloatingObject.tsx"
                    })
                })
            };
            var b = r(73641),
                v = r(7034),
                j = r(96262),
                w = r(57490),
                k = r(47289),
                N = r(18053),
                A = r(64309);
            let C = ({
                children: e,
                isFullHeight: t = !1
            }) => {
                let [r, n] = (0, l.useState)(0), s = (0, l.useRef)(null), {
                    scrollYProgress: u
                } = (0, i.L)({
                    target: s,
                    offset: ["start end", "end end"]
                }), x = (0, d.G)(u, [0, .1, .9, 1], [0, 1, 1, 0]), p = (0, h.A)(`(min-width: ${m.A.Large}px)`), g = (0, o.A)({
                    "md:h-screen": t,
                    "lg:py-16 lg:pointer-events-none": !t
                });
                return (0, l.useEffect)(() => {
                    n(1)
                }, []), (0, a.jsx)(f.A, {
                    "data-sentry-element": "FramerMotionLazy",
                    "data-sentry-component": "FullWidthBlock",
                    "data-sentry-source-file": "FullWidthBlock.tsx",
                    children: (0, a.jsx)(c.m.section, {
                        style: p ? {
                            opacity: x
                        } : {
                            opacity: r
                        },
                        ref: s,
                        className: "dark opacity-100 lg:px-4 lg:opacity-0 lg:last:-mb-[18vh] ",
                        "data-sentry-element": "m.section",
                        "data-sentry-source-file": "FullWidthBlock.tsx",
                        children: (0, a.jsx)("div", {
                            className: g,
                            children: e
                        })
                    })
                })
            };
            C.Column = ({
                children: e,
                className: t = ""
            }) => {
                let r = (0, o.A)("col-span-12 w-full", t);
                return (0, a.jsx)("div", {
                    className: r,
                    "data-sentry-component": "FullWidthBlockColumn",
                    "data-sentry-source-file": "FullWidthBlockColumn.tsx",
                    children: e
                })
            }, C.Overline = ({
                children: e
            }) => (0, a.jsx)("h2", {
                className: "loco-caption-lg-semibold mb-4 text-center lg:text-left",
                "data-sentry-component": "FullWidthBlockOverline",
                "data-sentry-source-file": "FullWidthBlockOverline.tsx",
                children: e
            }), C.Title = ({
                children: e
            }) => (0, a.jsx)("div", {
                className: "loco-text-heading-md mb-4 text-center lg:text-left",
                "data-sentry-component": "FullWidthBlockTitle",
                "data-sentry-source-file": "FullWidthBlockTitle.tsx",
                children: e
            }), C.Description = ({
                children: e
            }) => (0, a.jsx)("div", {
                className: "loco-text-body-md mb-5 text-center lg:mb-6 lg:text-left",
                "data-sentry-component": "FullWidthBlockDescription",
                "data-sentry-source-file": "FullWidthBlockDescription.tsx",
                children: e
            }), C.Actions = ({
                children: e
            }) => (0, a.jsx)("div", {
                className: "flex flex-col items-center gap-2 lg:items-start",
                "data-sentry-component": "FullWidthBlockActions",
                "data-sentry-source-file": "FullWidthBlockActions.tsx",
                children: e
            }), C.Media = ({
                children: e,
                className: t = ""
            }) => {
                let r = (0, o.A)("col-span-12 w-full", t);
                return (0, a.jsx)("div", {
                    className: r,
                    "data-sentry-component": "FullWidthBlockMedia",
                    "data-sentry-source-file": "FullWidthBlockMedia.tsx",
                    children: e
                })
            };
            let S = (0, v.default)(() => Promise.all([r.e(95066), r.e(79887)]).then(r.t.bind(r, 56474, 23)), {
                    loadableGenerated: {
                        webpack: () => [56474]
                    },
                    ssr: !1
                }),
                B = () => r.e(32278).then(r.bind(r, 32278)).then(e => e.default),
                L = ({
                    overline: e,
                    title: t,
                    image: r,
                    description: n,
                    actions: s,
                    fullScreen: c,
                    brandfolder: p
                }) => {
                    let g = (0, l.useRef)(null),
                        {
                            scrollYProgress: f
                        } = (0, i.L)({
                            target: g,
                            offset: ["start end", "end start"]
                        }),
                        {
                            isFocusVisible: y
                        } = (0, A.Y0)({
                            isTextInput: !0
                        }),
                        [v, L] = (0, l.useState)(!1),
                        F = (0, l.useRef)(null),
                        I = (0, x.W)(F, {
                            once: !0
                        }),
                        [T, _] = (0, l.useState)(!1),
                        M = (0, h.A)(`(min-width: ${m.A.Large}px)`),
                        P = (0, j.I)(),
                        $ = (0, d.G)(f, [0, 1], ["-50vh", "50vh"]),
                        R = (0, d.G)(f, [0, .2], ["0", "-40px"]),
                        D = M ? {
                            marginTop: $
                        } : {
                            marginTop: 0
                        },
                        E = M ? {
                            marginTop: R
                        } : {
                            marginTop: 0
                        };
                    (0, w.L)(f, "change", e => {
                        (1 === e || 0 === e) && v ? L(!1) : e < 1 && e > 0 && !v && L(!0)
                    });
                    let z = {
                            maxMaxBufferLength: 1
                        },
                        O = () => {
                            if (y) {
                                let e = g?.current?.parentElement;
                                e?.scrollIntoView()
                            }
                        },
                        W = () => {
                            _(!0)
                        },
                        H = (0, o.A)("absolute rounded-xl transition-opacity duration-1000 object-cover lg:object-contain", {
                            "opacity-0": T
                        }),
                        G = (0, o.A)("relative aspect-4/3"),
                        U = (0, o.A)("top-0 left-0 grid grid-flow-row grid-cols-12 place-items-end gap-4 px-4 transition duration-200 ease-in-out lg:fixed lg:h-screen lg:grid-flow-col lg:place-items-center lg:py-20", {
                            "pointer-events-auto": M && v,
                            "pointer-events-none:": !M || !v
                        });
                    return (0, a.jsx)(k.F, {
                        features: B,
                        "data-sentry-element": "LazyMotion",
                        "data-sentry-component": "FeatureBlock",
                        "data-sentry-source-file": "FeatureBlock.tsx",
                        children: (0, a.jsx)(C, {
                            isFullHeight: c,
                            "data-sentry-element": "FullWidthBlock",
                            "data-sentry-source-file": "FeatureBlock.tsx",
                            children: (0, a.jsxs)("div", {
                                ref: g,
                                children: [(0, a.jsx)("div", {
                                    className: "grid grid-flow-row grid-cols-12 place-items-center gap-4 lg:h-screen lg:grid-flow-col",
                                    children: (0, a.jsx)(C.Media, {
                                        className: "relative pt-10 lg:col-span-6 lg:col-start-6 lg:h-screen lg:pb-10",
                                        "data-sentry-element": "FullWidthBlock.Media",
                                        "data-sentry-source-file": "FeatureBlock.tsx",
                                        children: (0, a.jsx)(N.Uu, {
                                            style: D,
                                            ref: F,
                                            "data-sentry-element": "m.div",
                                            "data-sentry-source-file": "FeatureBlock.tsx",
                                            children: (0, a.jsxs)("div", {
                                                className: G,
                                                children: [r && (0, a.jsx)(u.default, {
                                                    src: r.file?.asset.url || "",
                                                    alt: r.alt || "",
                                                    fill: !0,
                                                    className: H,
                                                    placeholder: "blur",
                                                    blurDataURL: r.file?.asset.metadata?.blurHash
                                                }), I && !P && (e => (0, a.jsx)(S, {
                                                    className: "lg:[&>video]:rounded-xl",
                                                    url: e?.muxHLSURL || "",
                                                    playing: !0,
                                                    loop: !0,
                                                    muted: !0,
                                                    playsinline: !0,
                                                    width: "100%",
                                                    height: "100%",
                                                    onReady: W,
                                                    config: {
                                                        hlsOptions: {
                                                            maxMaxBufferLength: z.maxMaxBufferLength
                                                        }
                                                    },
                                                    "data-sentry-element": "ReactPlayer",
                                                    "data-sentry-component": "renderVideo",
                                                    "data-sentry-source-file": "FeatureBlock.tsx"
                                                }, `feature-scroller-${e?.muxHLSURL}`))(p)]
                                            })
                                        })
                                    })
                                }), (0, a.jsx)(N.Uu, {
                                    style: E,
                                    className: U,
                                    "data-sentry-element": "m.div",
                                    "data-sentry-source-file": "FeatureBlock.tsx",
                                    children: (0, a.jsxs)(C.Column, {
                                        className: "pt-10 lg:col-span-3 lg:col-start-2 lg:pb-10",
                                        "data-sentry-element": "FullWidthBlock.Column",
                                        "data-sentry-source-file": "FeatureBlock.tsx",
                                        children: [(0, a.jsx)(C.Overline, {
                                            "data-sentry-element": "FullWidthBlock.Overline",
                                            "data-sentry-source-file": "FeatureBlock.tsx",
                                            children: e
                                        }), (0, a.jsx)(C.Title, {
                                            "data-sentry-element": "FullWidthBlock.Title",
                                            "data-sentry-source-file": "FeatureBlock.tsx",
                                            children: t
                                        }), (0, a.jsx)(C.Description, {
                                            "data-sentry-element": "FullWidthBlock.Description",
                                            "data-sentry-source-file": "FeatureBlock.tsx",
                                            children: n
                                        }), s && (0, a.jsx)(C.Actions, {
                                            children: s.map((e, t) => (0, a.jsx)(b.A, {
                                                hasArrow: !0,
                                                outlined: 0 === t,
                                                rounded: !0,
                                                variant: 0 === t ? "primary" : "secondary",
                                                onFocus: O,
                                                href: e.link?.href.current,
                                                children: e.text
                                            }, `${e.text}-${t}`))
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                };
            var F = r(57798),
                I = r(20266),
                T = r(38898),
                _ = r(69625),
                M = r(17072);
            let P = (0, v.default)(() => Promise.all([r.e(95066), r.e(79887)]).then(r.t.bind(r, 56474, 23)), {
                    loadableGenerated: {
                        webpack: () => [56474]
                    },
                    ssr: !1
                }),
                $ = ({
                    children: e
                }) => {
                    let t = l.Children.toArray(e);
                    return (0, a.jsx)(f.A, {
                        "data-sentry-element": "FramerMotionLazy",
                        "data-sentry-component": "FullPageScroller",
                        "data-sentry-source-file": "FullPageScroller.tsx",
                        children: (0, a.jsx)("section", {
                            className: "dark relative",
                            style: {
                                height: `${100*e.length}vh`
                            },
                            children: t.map((e, r) => l.cloneElement(e, {
                                index: r,
                                total: t.length
                            }))
                        })
                    })
                };
            $.Block = ({
                title: e,
                description: t,
                actions: r,
                image: n,
                video: s,
                index: m = 1,
                total: p = 1
            }) => {
                let [h, g] = (0, l.useState)(!1), [f, y] = (0, l.useState)(!1), v = (0, l.useRef)(null), k = (0, x.W)(v, {
                    once: !0
                }), N = (0, j.I)(), A = 1 / p * m, C = .75 * A, {
                    scrollYProgress: S
                } = (0, i.L)({
                    target: v
                }), B = (0, d.G)(S, [A, m !== p - 1 ? A + C : 1], [0, 1], {
                    ease: I.am
                }), L = (0, d.G)(S, [A, m !== p - 1 ? A + C : 1], [100, 0], {
                    ease: I.am
                }), F = -((v.current?.offsetHeight || 0) / p) * m;
                (0, w.L)(S, "change", e => {
                    g(e >= A)
                });
                let $ = (0, o.A)("object-cover transition-opacity duration-1000", {
                        "opacity-0": f
                    }),
                    R = (0, a.jsx)("div", {
                        className: "hidden rounded-xl bg-black/70 px-2 py-3 md:block",
                        children: Array.from(Array(p), (e, t) => {
                            let r = (0, o.A)("mb-3 h-3 w-3 rounded-full last:mb-0", {
                                "bg-white": m === t,
                                "bg-gray-800": m !== t
                            });
                            return (0, a.jsx)("div", {
                                className: r
                            }, `scroller-progress-${t}`)
                        })
                    }),
                    D = (0, o.A)("absolute h-full w-full", {
                        "pointer-events-none": !h
                    });
                return (0, a.jsx)(c.m.div, {
                    ref: v,
                    className: D,
                    style: {
                        opacity: A ? B : 1,
                        scrollMarginTop: F
                    },
                    "data-sentry-element": "m.div",
                    "data-sentry-component": "FullPageScrollerBlock",
                    "data-sentry-source-file": "FullPageScrollerBlock.tsx",
                    children: (0, a.jsxs)("div", {
                        className: "sticky top-0 h-screen w-full",
                        children: [k && !N && (0, a.jsx)(P, {
                            url: s.src,
                            width: "100%",
                            height: "100%",
                            playing: !0,
                            muted: !0,
                            loop: !0,
                            playsinline: !0,
                            onReady: () => {
                                y(!0)
                            },
                            className: "absolute [&>video]:object-cover",
                            config: {
                                hlsOptions: {
                                    maxMaxBufferLength: 1
                                }
                            }
                        }), (0, a.jsx)(u.default, {
                            fill: !0,
                            src: n.src,
                            alt: "",
                            className: $,
                            placeholder: "blur",
                            blurDataURL: n.placeholder,
                            "data-sentry-element": "Image",
                            "data-sentry-source-file": "FullPageScrollerBlock.tsx"
                        }), (0, a.jsx)("div", {
                            className: "absolute bottom-0 h-full w-full bg-gradient-to-t from-black"
                        }), p > 1 && (0, a.jsx)("div", {
                            className: "absolute right-0 mr-16 flex h-full flex-col justify-center",
                            children: R
                        }), (0, a.jsx)("div", {
                            className: "relative grid h-full grid-cols-12",
                            children: (0, a.jsx)("div", {
                                className: "col-span-10 col-start-2 mb-28 flex flex-col-reverse md:col-span-4 md:col-start-2",
                                children: (0, a.jsxs)(c.m.div, {
                                    style: {
                                        y: A ? L : 0
                                    },
                                    className: "flex flex-col items-center text-center md:items-start md:text-left",
                                    "data-sentry-element": "m.div",
                                    "data-sentry-source-file": "FullPageScrollerBlock.tsx",
                                    children: [(0, a.jsx)(M.A, {
                                        "data-sentry-element": "Title",
                                        "data-sentry-source-file": "FullPageScrollerBlock.tsx",
                                        children: e
                                    }), (0, a.jsx)(_.A, {
                                        className: "mb-12",
                                        "data-sentry-element": "Text",
                                        "data-sentry-source-file": "FullPageScrollerBlock.tsx",
                                        children: t
                                    }), (0, a.jsx)(T.A, {
                                        "data-sentry-element": "ButtonGroup",
                                        "data-sentry-source-file": "FullPageScrollerBlock.tsx",
                                        children: r.map((e, t) => (0, a.jsx)(b.A, {
                                            href: e.href,
                                            rounded: !0,
                                            outlined: 0 === t,
                                            variant: 0 === t ? "primary" : "secondary",
                                            hasArrow: !0,
                                            onFocus: () => {
                                                v.current?.scrollIntoView({
                                                    block: "start"
                                                })
                                            },
                                            "data-sentry-element": "Button",
                                            "data-sentry-component": "renderActions",
                                            "data-sentry-source-file": "FullPageScrollerBlock.tsx",
                                            children: e.title
                                        }, `action-${e.title}-${t}`))
                                    })]
                                })
                            })
                        })]
                    })
                })
            };
            var R = r(24849),
                D = r(84031);
            let E = ({
                children: e,
                className: t = ""
            }) => {
                let r = (0, o.$)("py-4 px-8 lg:flex lg:justify-between gap-4 col-start-2 col-end-12", t);
                return (0, a.jsx)("section", {
                    className: "grid grid-cols-12 bg-gray-900 pb-32",
                    "data-sentry-component": "SocialProof",
                    "data-sentry-source-file": "SocialProof.tsx",
                    children: (0, a.jsx)("div", {
                        className: r,
                        children: e
                    })
                })
            };
            E.Item = ({
                children: e
            }) => (0, a.jsx)("div", {
                className: "loco-text-body-md mb-6 flex flex-col items-center text-center text-white last:mb-0 md:text-left lg:m-0 lg:flex-row lg:gap-4",
                "data-sentry-component": "SocialProofItem",
                "data-sentry-source-file": "SocialProofItem.tsx",
                children: e
            });
            var z = r(79397),
                O = r(87618);
            let W = (0, v.default)(() => Promise.all([r.e(95066), r.e(79887)]).then(r.t.bind(r, 56474, 23)), {
                    loadableGenerated: {
                        webpack: () => [56474]
                    },
                    ssr: !1
                }),
                H = {
                    maxMaxBufferLength: 1,
                    qualityStartLevel: 1
                },
                G = ({
                    title1: e,
                    title2: t,
                    description: r,
                    image: n,
                    textOpacity: s = 1,
                    action: i,
                    video: d
                }) => {
                    let m = (0, l.useRef)(null),
                        [p, h] = (0, l.useState)(!1),
                        g = (0, x.W)(m, {
                            once: !0
                        }),
                        f = (0, j.I)(),
                        y = (0, o.A)("z-10 transition-opacity duration-500 object-cover brightness-75", {
                            "opacity-0": p && !f && g && d?.src
                        });
                    return (0, a.jsxs)("div", {
                        className: "dark relative box-border flex h-screen flex-col justify-end bg-gray-900 p-5 md:justify-between",
                        ref: m,
                        "data-sentry-component": "FullScreenPreview",
                        "data-sentry-source-file": "FullScreenPreview.tsx",
                        children: [n && n.src && (0, a.jsx)(u.default, {
                            fill: !0,
                            alt: n.alt,
                            src: n.src,
                            className: y,
                            placeholder: "blur",
                            blurDataURL: n.placeholder,
                            sizes: "100vw"
                        }), g && !f && d?.src && (0, a.jsx)(W, {
                            url: d.src,
                            playing: !0,
                            loop: !0,
                            muted: !0,
                            playsinline: !0,
                            width: "100%",
                            height: "100%",
                            className: "absolute left-0 top-0 brightness-50 [&>video]:object-cover",
                            onReady: () => {
                                h(!0)
                            },
                            config: {
                                hlsOptions: {
                                    maxMaxBufferLength: H.maxMaxBufferLength,
                                    startLevel: H.qualityStartLevel
                                }
                            }
                        }), (0, a.jsxs)(c.m.div, {
                            style: {
                                opacity: s
                            },
                            className: "relative z-10 ml-auto mr-auto max-w-[1440px] text-white md:sticky md:top-[calc(1.25rem+64px)] md:flex md:h-[450px] md:w-full md:justify-between lg:h-[350px]",
                            "data-sentry-element": "m.div",
                            "data-sentry-source-file": "FullScreenPreview.tsx",
                            children: [(0, a.jsxs)("div", {
                                className: "pr-4 md:mt-4 md:w-[350px]",
                                children: [(0, a.jsx)("p", {
                                    className: "loco-text-body-lg leading-2 md:leading-5",
                                    children: e
                                }), t && (0, a.jsx)("p", {
                                    className: "loco-text-body-lg leading-2 md:leading-5",
                                    children: t
                                })]
                            }), (0, a.jsx)("p", {
                                className: "loco-text-body-lg leading-2 mt-10 md:mt-4 md:w-[350px] md:leading-5",
                                children: r
                            }), (0, a.jsx)("div", {
                                className: "mt-14 text-start md:mt-4 md:w-[350px] md:text-end",
                                children: (0, a.jsx)(b.A, {
                                    href: i.href,
                                    target: i.target,
                                    outlined: !0,
                                    rounded: !0,
                                    hasArrow: !0,
                                    "data-sentry-element": "Button",
                                    "data-sentry-source-file": "FullScreenPreview.tsx",
                                    children: i.title
                                })
                            })]
                        })]
                    })
                };
            var U = r(49626);

            function q({
                children: e
            }) {
                return (0, a.jsx)(c.m.div, {
                    className: "relative left-1/2 grid -translate-x-1/2 grid-cols-[repeat(3,auto)] grid-rows-[repeat(3,auto)] gap-x-[3vw] gap-y-[2.5vw]",
                    variants: {
                        initial: {
                            opacity: 0
                        },
                        enter: {
                            opacity: 1
                        }
                    },
                    initial: "initial",
                    animate: "enter",
                    "data-sentry-element": "m.div",
                    "data-sentry-component": "Grid",
                    "data-sentry-source-file": "AnimatedGrid.tsx",
                    children: e
                })
            }

            function V({
                children: e,
                progress: t,
                dimensions: r,
                index: l
            }) {
                let {
                    width: n,
                    height: s
                } = r, o = [{
                    x: -1.4,
                    y: -1.405
                }, {
                    x: 0,
                    y: -1.405
                }, {
                    x: 1.4,
                    y: -1.405
                }, {
                    x: -1.4,
                    y: 0
                }, {
                    x: 0,
                    y: 0
                }, {
                    x: 1.4,
                    y: 0
                }, {
                    x: -1.4,
                    y: 1.405
                }, {
                    x: 0,
                    y: 1.405
                }, {
                    x: 1.4,
                    y: 1.405
                }][l], i = .53 * n * o.x, u = (.55 * s - .018 * n) * o.y, m = (0, d.G)(t, [0, 1], [1, 3.345]), x = (0, d.G)(t, [0, 1], [0, i]), p = (0, d.G)(t, [0, 1], [0, u]);
                return (0, a.jsx)(c.m.div, {
                    className: "relative flex h-[33vh] w-[33vw] items-center justify-center",
                    style: {
                        scale: m,
                        translateX: x,
                        translateY: p,
                        clipPath: "inset(0px round 5px)"
                    },
                    "data-sentry-element": "m.div",
                    "data-sentry-component": "Outer",
                    "data-sentry-source-file": "AnimatedGrid.tsx",
                    children: e
                })
            }

            function Y({
                children: e,
                progress: t
            }) {
                let r = (0, d.G)(t, [0, 1], [.5, .301]);
                return (0, a.jsx)(c.m.div, {
                    className: "absolute w-[300%] ",
                    style: {
                        scale: r
                    },
                    "data-sentry-element": "m.div",
                    "data-sentry-component": "Inner",
                    "data-sentry-source-file": "AnimatedGrid.tsx",
                    children: e
                })
            }
            let K = function({
                title: e,
                description: t,
                actions: r,
                projects: n
            }) {
                let s = (0, l.useRef)(null),
                    [o, c] = (0, l.useState)({
                        width: 0,
                        height: 0
                    }),
                    [m, x] = (0, l.useState)([]),
                    p = () => {
                        let {
                            innerWidth: e,
                            innerHeight: t
                        } = window;
                        c({
                            width: e,
                            height: t
                        })
                    };
                (0, l.useEffect)(() => (p(), x(n.sort(() => Math.random() - .5)), window.addEventListener("resize", p), () => {
                    window.removeEventListener("resize", p)
                }), []);
                let {
                    scrollYProgress: h
                } = (0, i.L)({
                    target: s,
                    offset: ["5vh start", "end 105vh"]
                }), g = (0, d.G)(h, [.7, 1], [0, 1]);
                return (0, a.jsx)(f.A, {
                    "data-sentry-element": "FramerMotionLazy",
                    "data-sentry-component": "Index",
                    "data-sentry-source-file": "AnimatedGrid.tsx",
                    children: (0, a.jsxs)("section", {
                        children: [(0, a.jsx)(U.A, {
                            title: e,
                            description: t,
                            actions: r,
                            "data-sentry-element": "TitleDescriptionBlock",
                            "data-sentry-source-file": "AnimatedGrid.tsx"
                        }), (0, a.jsx)("div", {
                            ref: s,
                            style: {
                                contain: "paint"
                            },
                            className: "hidden h-[250vh] md:block",
                            children: (0, a.jsx)("div", {
                                className: "sticky top-[calc(-5vh+32px)] -mb-[5vh] mt-[calc(2.5vw-5.5vh)] flex h-[110vh] items-center",
                                children: o.height > 0 && (0, a.jsx)(q, {
                                    children: m?.map((e, t) => {
                                        let r = 4 == t;
                                        return (0, a.jsx)(V, {
                                            progress: h,
                                            dimensions: o,
                                            index: t,
                                            children: (0, a.jsx)(Y, {
                                                progress: h,
                                                children: r ? (0, a.jsx)(G, {
                                                    ...e,
                                                    textOpacity: r ? g : 0
                                                }, `p_${t}`) : (0, a.jsxs)("div", {
                                                    className: "relative box-border flex h-screen flex-col justify-end p-5 md:justify-between",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "z-10 h-full w-full bg-black opacity-25"
                                                    }), (0, a.jsx)(u.default, {
                                                        fill: !0,
                                                        alt: e.image.alt,
                                                        src: e.image.src,
                                                        className: "object-cover",
                                                        placeholder: "blur",
                                                        blurDataURL: e.image.placeholder,
                                                        sizes: "33vw"
                                                    })]
                                                })
                                            }, `inner_i_${t}`)
                                        }, `outer_${t}`)
                                    })
                                })
                            })
                        }), m.length > 0 && (0, a.jsx)("div", {
                            className: "md:hidden",
                            children: (0, a.jsx)(G, {
                                ...m[0],
                                textOpacity: 1
                            })
                        })]
                    })
                })
            };
            var X = r(2870),
                Z = r(15272),
                J = r(15330),
                Q = r(22901),
                ee = r(11929),
                et = r(98969);
            let er = {
                    DARK: -15,
                    LIGHT: -8
                },
                ea = e => [parseInt(e.slice(1, 3), 16), parseInt(e.slice(3, 5), 16), parseInt(e.slice(5, 7), 16)],
                el = (e, t) => {
                    let r, a, l, [n, s, o] = ea(e),
                        i = e => Math.max(0, Math.min(255, Math.round(e + e * t / 100)));
                    return r = i(n), a = i(s), l = i(o), `#${r.toString(16).padStart(2,"0")}${a.toString(16).padStart(2,"0")}${l.toString(16).padStart(2,"0")}`
                },
                en = async e => {
                    let t = new et.D;
                    try {
                        let r = (await t.getColorAsync(e, {
                                ignoredColor: [
                                    [255, 255, 255, 255],
                                    [0, 0, 0, 255]
                                ]
                            })).hex,
                            a = (e => {
                                let [t, r, a] = ea(e);
                                return (.299 * t + .587 * r + .114 * a) / 255 < .6
                            })(r),
                            l = el(r, er.DARK),
                            n = el(r, er.LIGHT);
                        return {
                            isDark: a,
                            mainColor: r,
                            dark: l,
                            light: n
                        }
                    } finally {
                        t.destroy()
                    }
                }, es = (0, v.default)(() => Promise.all([r.e(95066), r.e(79887)]).then(r.t.bind(r, 56474, 23)), {
                    loadableGenerated: {
                        webpack: () => [56474]
                    },
                    ssr: !1
                }), eo = e => {
                    let [t, r] = (0, l.useState)(!1), n = (0, o.A)("overflow-hidden md:hidden transition-all duration-500 ease-in-out", {
                        "max-h-0": !t,
                        "max-h-96": t
                    });
                    return (0, a.jsxs)("div", {
                        className: "flex flex-col gap-7 col-span-4 md:col-span-7 mt-7 md:mt-0 md:grid lg:grid-cols-7",
                        "data-sentry-component": "Content",
                        "data-sentry-source-file": "DeluxeAnnouncementBanner.tsx",
                        children: [(0, a.jsxs)("div", {
                            className: "grid grid-cols-7 gap-x-5 col-span-7",
                            children: [(0, a.jsx)("p", {
                                className: "mango-text-heading-md col-span-5",
                                children: e.title
                            }), (0, a.jsx)(Q.A, {
                                className: "hidden md:block col-start-7 col-span-1 justify-self-end",
                                variant: "secondary",
                                icon: "x",
                                size: "lg",
                                onClick: e.onClose,
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "DeluxeAnnouncementBanner.tsx"
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-col md:gap-0 md:grid md:grid-cols-7 md:col-span-7 md:gap-x-5 self-end",
                            children: [e.description && (0, a.jsx)("div", {
                                className: "hidden md:flex md:col-span-3",
                                children: (0, a.jsx)("p", {
                                    className: "mango-text-body-base pb-8 md:pb-0 md:self-end",
                                    children: e.description?.value
                                })
                            }), (0, a.jsxs)("div", {
                                className: "md:col-start-4 lg:col-start-5 md:col-span-4 lg:col-span-3 md:flex md:flex-col md:justify-between",
                                children: [e.details && e.details.length > 0 && (0, a.jsx)("ul", {
                                    className: "flex flex-col gap-2 pb-8",
                                    children: e.details.map(e => (0, a.jsxs)("li", {
                                        className: "flex gap-5",
                                        children: [(0, a.jsx)("p", {
                                            className: "mango-text-input w-[100px]",
                                            children: e.label
                                        }), (0, a.jsx)("p", {
                                            className: "mango-text-input text-gray-600 dark:text-gray-300",
                                            children: e.value
                                        })]
                                    }, e.label))
                                }), e.description && (0, a.jsx)("div", {
                                    className: n,
                                    children: (0, a.jsx)("p", {
                                        className: "mango-text-body-base md:col-span-3 pb-8",
                                        children: e.description?.value
                                    })
                                }), e.description && e.action && (0, a.jsxs)("div", {
                                    className: "flex gap-2",
                                    children: [e.description?.readMoreLabel && (0, a.jsx)(Q.A, {
                                        className: "md:hidden",
                                        onClick: () => r(!t),
                                        variant: "secondary",
                                        icon: t ? "caret-up" : "caret-down",
                                        children: e.description?.readMoreLabel
                                    }), (0, a.jsx)("div", {
                                        children: (0, a.jsx)(Q.A, {
                                            href: e.action?.href,
                                            target: e.action?.target,
                                            variant: "primary",
                                            icon: "arrow-right",
                                            children: e.action?.label
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                }, ei = ({
                    image: e,
                    video: t
                }) => {
                    let [r, n] = (0, l.useState)(!1), [s, o] = (0, l.useState)(!1), i = {
                        maxMaxBufferLength: 1,
                        qualityStartLevel: 1
                    };
                    return (0, a.jsxs)("div", {
                        className: "relative aspect-[16/10] rounded-lg overflow-hidden w-full min-h-full",
                        "data-sentry-component": "Media",
                        "data-sentry-source-file": "DeluxeAnnouncementBanner.tsx",
                        children: [(0, a.jsx)(u.default, {
                            src: e.src,
                            alt: e.alt,
                            placeholder: "blur",
                            blurDataURL: e.placeholder,
                            fill: !0,
                            sizes: "(max-width: 768px) 75vw, (max-width: 1024px) 42vw, 33vw",
                            className: "object-cover transition-opacity duration-500",
                            style: {
                                opacity: t && r ? 0 : 1
                            },
                            "data-sentry-element": "Image",
                            "data-sentry-source-file": "DeluxeAnnouncementBanner.tsx"
                        }), t && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(es, {
                                className: "[&>video]:object-cover",
                                url: t.src,
                                playing: s,
                                loop: !0,
                                muted: !0,
                                playsinline: !0,
                                width: "100%",
                                height: "100%",
                                onReady: () => {
                                    n(!0)
                                },
                                config: {
                                    hlsOptions: {
                                        maxMaxBufferLength: i.maxMaxBufferLength,
                                        qualityStartLevel: i.qualityStartLevel
                                    }
                                }
                            }), r && (0, a.jsx)("div", {
                                className: "absolute bottom-3 right-3",
                                children: (0, a.jsx)(Q.A, {
                                    onClick: () => {
                                        o(!s)
                                    },
                                    icon: s ? "pause" : "play",
                                    iconWeight: "fill",
                                    variant: "secondary",
                                    size: "xs"
                                })
                            })]
                        })]
                    })
                }, ed = e => {
                    let [t, r] = (0, l.useState)(e.animate ?? !1), {
                        isDark: n,
                        dark: s,
                        light: i
                    } = (e => {
                        let [t, r] = (0, l.useState)(!1), [a, n] = (0, l.useState)(null), [s, o] = (0, l.useState)(null), [i, d] = (0, l.useState)(null), [c, u] = (0, l.useState)(null), [m, x] = (0, l.useState)(null), p = (0, l.useCallback)(() => {
                            o(null), d(null), u(null), x(null)
                        }, []), h = (0, l.useCallback)(async e => {
                            if (!e) return void p();
                            r(!0), n(null);
                            try {
                                let t = await en(e);
                                o(t.isDark), d(t.mainColor), u(t.dark), x(t.light), r(!1)
                            } catch (e) {
                                n(e instanceof Error ? e.message : "Failed to extract color"), p(), r(!1)
                            }
                        }, [p]);
                        return (0, l.useEffect)(() => {
                            e ? h(e) : (n(null), p(), r(!1))
                        }, [e, h, p]), {
                            isLoading: t,
                            error: a,
                            isDark: s,
                            mainColor: i,
                            dark: c,
                            light: m
                        }
                    })(e.image.placeholder);
                    (0, l.useEffect)(() => {
                        if (e.animate) {
                            let e = setTimeout(() => {
                                r(!1)
                            }, 1e3);
                            return () => clearTimeout(e)
                        }
                    }, [e.animate]);
                    let d = (0, o.A)("relative grid grid-cols-4 gap-x-2 md:gap-x-5 md:grid-cols-12 p-4 md:p-6 z-10"),
                        c = e.hasBackgroundGradient && s && i ? {
                            background: `linear-gradient(94deg, ${s} 7%, ${i} 105.47%)`
                        } : void 0,
                        u = e.hasBackgroundGradient && null !== n ? n ? "dark" : "light" : e.theme ?? "light";
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: (0, o.A)("fixed inset-0 z-40 bg-black/30", e.animate && "transition-opacity duration-300", e.animate && t ? "opacity-0" : "opacity-100")
                        }), (0, a.jsx)(ee.A, {
                            className: (0, o.A)("fixed left-0 w-full z-40 bg-white dark:bg-black", e.animate && "transition-transform duration-300 ease-out", e.animate && t ? "-translate-y-[calc(100%+5rem)]" : "translate-y-0"),
                            style: c,
                            theme: u,
                            defaultBlockPadding: {
                                top: "pt-0",
                                bottom: "pb-0"
                            },
                            "data-sentry-element": "ThemeContainer",
                            "data-sentry-source-file": "DeluxeAnnouncementBanner.tsx",
                            children: (0, a.jsx)("div", {
                                className: "mango-container",
                                children: (0, a.jsxs)("div", {
                                    className: d,
                                    children: [(0, a.jsx)("div", {
                                        className: "col-span-3 md:col-span-5",
                                        children: (0, a.jsx)(ei, {
                                            image: e.image,
                                            video: e.video,
                                            "data-sentry-element": "Media",
                                            "data-sentry-source-file": "DeluxeAnnouncementBanner.tsx"
                                        })
                                    }), (0, a.jsx)(eo, {
                                        ...e,
                                        "data-sentry-element": "Content",
                                        "data-sentry-source-file": "DeluxeAnnouncementBanner.tsx"
                                    }), (0, a.jsx)("div", {
                                        className: "absolute bottom-[-4.25rem] left-[50%] translate-x-[-50%] md:hidden",
                                        children: (0, a.jsx)(Q.A, {
                                            variant: "secondary",
                                            icon: "x",
                                            size: "lg",
                                            onClick: e.onClose,
                                            "data-sentry-element": "Button",
                                            "data-sentry-source-file": "DeluxeAnnouncementBanner.tsx"
                                        })
                                    })]
                                })
                            })
                        })]
                    })
                };
            var ec = r(42505);
            let eu = {
                    announcementBanner: s.A,
                    statement: ({
                        text: e,
                        background: t,
                        ctaButtons: r,
                        floatingObject: l,
                        fullScreen: n = !1,
                        animated: s = !1,
                        eyebrow: o,
                        isHidden: i
                    }) => (0, a.jsx)(a.Fragment, {
                        children: !i && (0, a.jsx)(y, {
                            isFullHeight: n,
                            eyebrow: o,
                            isAnimated: s,
                            linesOfText: e.filter(e => void 0 !== e),
                            backgroundImageUrl: t?.asset.url || "",
                            floatingImages: l?.map(e => ({
                                url: e?.file?.asset.url || "",
                                placeholder: e?.file?.asset.metadata?.blurHash || ""
                            })),
                            actions: r?.map((e, t) => (0, a.jsx)(b.A, {
                                hasArrow: !0,
                                outlined: !0,
                                rounded: !0,
                                variant: "primary",
                                href: e.ctaUrl?.href.current,
                                children: e.ctaText
                            }, `${e.ctaText}-${t}`))
                        })
                    }),
                    featureScroller: ({
                        features: e,
                        isHidden: t
                    }) => (0, a.jsx)(a.Fragment, {
                        children: !t && (0, a.jsx)("div", {
                            className: "bg-gray-900 pb-10 lg:pb-0 lg:pt-[60vh]",
                            style: {
                                backgroundImage: "radial-gradient(at 80% 40%, rgba(255,0,0,0.05) 5%, rgba(36,0,0,0) 50%)"
                            },
                            children: (0, a.jsx)("div", {
                                children: e && e.map((e, t) => (0, a.jsx)(L, {
                                    ...e
                                }, `${e.title}-${t}`))
                            })
                        })
                    }),
                    fullPageScroller: ({
                        fullPageBlocks: e,
                        isHidden: t
                    }) => (0, a.jsx)($, {
                        "data-sentry-element": "FullPageScroller",
                        "data-sentry-component": "FullPageScrollerBlock",
                        "data-sentry-source-file": "FullPageScrollerBlock.tsx",
                        children: e.map(({
                            title: r,
                            brandfolder: l,
                            image: n,
                            description: s,
                            actions: o
                        }, i) => {
                            let d = {
                                    src: l?.muxHLSURL || ""
                                },
                                c = {
                                    src: n?.asset.url || "",
                                    placeholder: n?.asset.metadata?.blurHash || ""
                                };
                            return (0, a.jsx)(a.Fragment, {
                                children: !t && (0, a.jsx)($.Block, {
                                    index: i,
                                    total: e.length,
                                    title: r || "",
                                    description: (0, a.jsx)(F.RK, {
                                        value: s
                                    }),
                                    actions: o?.map(e => ({
                                        title: e.text || "",
                                        href: e.link?.href.current || ""
                                    })) || [],
                                    image: c,
                                    video: d
                                }, `full-page-scroller-block-${r}-${i}`)
                            })
                        })
                    }),
                    fullWidthBlock: R.A,
                    cards: D.A,
                    socialProof: ({
                        items: e,
                        isHidden: t
                    }) => (0, a.jsx)(a.Fragment, {
                        children: !t && (0, a.jsx)(E, {
                            children: e?.map((e, t) => (0, a.jsxs)(E.Item, {
                                "data-sentry-element": "SocialProof.Item",
                                "data-sentry-component": "renderItem",
                                "data-sentry-source-file": "SocialProofBlock.tsx",
                                children: [e.image?.file?.asset.url && (0, a.jsx)(u.default, {
                                    src: e.image?.file?.asset.url,
                                    alt: e.image?.alt ?? "",
                                    width: 24,
                                    height: 24
                                }), (0, a.jsx)(_.A, {
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "SocialProofBlock.tsx",
                                    children: (0, a.jsx)(F.RK, {
                                        value: e.text,
                                        "data-sentry-element": "PortableText",
                                        "data-sentry-source-file": "SocialProofBlock.tsx"
                                    })
                                })]
                            }, `social-proof-item-${t}`))
                        })
                    }),
                    headliner: z.A,
                    uniteCards: O.A,
                    fullScreenPreview: ({
                        title1: e,
                        title2: t,
                        description: r,
                        image: l,
                        brandfolder: n,
                        action: s,
                        isHidden: o
                    }) => (0, a.jsx)(a.Fragment, {
                        children: !o && (0, a.jsx)(G, {
                            title1: e,
                            title2: t || "",
                            description: r,
                            image: {
                                src: l?.asset.url || "",
                                placeholder: l?.asset.metadata?.lqip || "",
                                alt: ""
                            },
                            video: {
                                src: n?.muxHLSURL || ""
                            },
                            action: {
                                title: s.title || "",
                                href: s.link?.linkReference?.href.current || "",
                                target: s.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                            }
                        })
                    }),
                    animatedGrid: ({
                        title: e,
                        description: t,
                        actions: r,
                        grid: l,
                        isHidden: n
                    }) => (0, a.jsx)(a.Fragment, {
                        children: !n && (0, a.jsx)(K, {
                            title: e || "",
                            description: t || "",
                            actions: r ? r.map(e => ({
                                title: e.title || "",
                                href: e.link?.linkReference?.href.current || "",
                                target: e.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                            })) : void 0,
                            projects: l.map(e => ({
                                title1: e.title1 || "",
                                title2: e.title2 || "",
                                description: e.description,
                                image: {
                                    src: e.image?.asset.url || "",
                                    placeholder: e.image?.asset.metadata?.lqip || "",
                                    alt: ""
                                },
                                action: {
                                    title: e.action.title || "",
                                    href: e.action.link?.linkReference?.href.current || "",
                                    target: e.action.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                                }
                            }))
                        })
                    }),
                    footnote: X.A,
                    videosShowcase: Z.A,
                    bentoCards: J.A,
                    mangoDeluxeAnnouncementBanner: ({
                        title: e,
                        description: t,
                        action: r,
                        settings: n,
                        hasBackgroundGradient: s,
                        image: o,
                        video: i,
                        details: d
                    }) => {
                        let [c, u] = (0, l.useState)(!1), m = `banner_dismissed_until_${e.replace(/\s+/g,"_").toLowerCase()}`;
                        return ((0, l.useEffect)(() => {
                            let e = (() => {
                                try {
                                    let e = localStorage.getItem(m);
                                    return e ? Number(e) : null
                                } catch {
                                    return null
                                }
                            })();
                            e && e > Date.now() || u(!0)
                        }, [m]), n?.isHidden) ? null : (0, a.jsx)(a.Fragment, {
                            children: c && (0, a.jsx)(ed, {
                                animate: !0,
                                hasBackgroundGradient: s || !1,
                                title: e,
                                theme: n?.theme === "dark" ? "dark" : "light",
                                description: t ?? void 0,
                                action: r ? {
                                    href: r.fieldLink?.linkReference?.href?.current ?? "",
                                    target: r.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self",
                                    label: r.text ?? ""
                                } : void 0,
                                image: {
                                    src: o ? (0, ec.i)(o)?.fit("crop").width(1200).height(750).dpr(2).url() ?? "" : "",
                                    alt: o?.alt ?? "",
                                    placeholder: o?.asset?.metadata?.lqip ?? ""
                                },
                                video: i ? {
                                    src: i.url ?? ""
                                } : void 0,
                                details: d ?? void 0,
                                onClose: () => {
                                    u(!1), ((e = 7) => {
                                        let t = Date.now() + 24 * e * 36e5;
                                        localStorage.setItem(m, String(t))
                                    })(7)
                                }
                            })
                        })
                    }
                },
                em = ({
                    blocks: e
                }) => (0, a.jsx)(n.A, {
                    blocks: e || [],
                    blockMap: eu,
                    "data-sentry-element": "Blocks",
                    "data-sentry-component": "HomePageBlocks",
                    "data-sentry-source-file": "Home.tsx"
                });
            var ex = r(92972),
                ep = r(96608);
            let eh = ({
                announcementBanner: e,
                announcementBannerGeoTargeted: t
            }) => {
                let [r] = (0, ep.A)("location", "US");
                if (!e || e?.hasAnnouncementBanner === !1) return null;
                let l = {
                    title: e?.announcementBannerContent?.title,
                    action: {
                        title: e?.announcementBannerContent?.action?.text,
                        href: e?.announcementBannerContent?.action?.fieldLink?.linkReference?.href?.current,
                        target: e?.announcementBannerContent?.action?.fieldLink?.linkReference?.target
                    }
                };
                return (0, a.jsx)(ex.A, {
                    rounded: !0,
                    action: {
                        title: l.action.title || "",
                        href: l.action.href || "",
                        target: l.action.target || "_self"
                    },
                    className: "absolute left-0 top-0 z-20",
                    "data-sentry-element": "AnnouncementBanner",
                    "data-sentry-component": "AnnouncementBannerHomePage",
                    "data-sentry-source-file": "AnnouncementBanner.tsx",
                    children: l.title
                })
            };

            function eg({
                data: e
            }) {
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(eh, {
                        announcementBanner: e.announcementBanner,
                        announcementBannerGeoTargeted: e.announcementBannerGeoTargeted,
                        "data-sentry-element": "AnnouncementBannerHomePage",
                        "data-sentry-source-file": "Home.tsx"
                    }), (0, a.jsx)(em, {
                        blocks: e.blocks,
                        "data-sentry-element": "HomePageBlocks",
                        "data-sentry-source-file": "Home.tsx"
                    })]
                })
            }
        },
        49313: (e, t, r) => {
            r.d(t, {
                A: () => s
            });
            var a = r(73723),
                l = r(7787),
                n = r(64007);
            let s = ({
                blocks: e,
                blockMap: t,
                ...r
            }) => (0, a.jsx)(a.Fragment, {
                children: e?.map((e, s) => {
                    let o = e?._type,
                        i = t[o];
                    return e.isHidden ? null : i ? (0, a.jsx)("div", {
                        role: "button",
                        tabIndex: 0,
                        onClick: e => {
                            e.stopPropagation(), (0, n.A)({
                                event: "userEvent",
                                event_name: "navigation_click",
                                properties: {
                                    navigation_click_block: s + 1,
                                    navigation_click_block_type: o
                                }
                            })
                        },
                        style: {
                            cursor: "auto"
                        },
                        children: l.createElement(i, {
                            key: `block-${s}`,
                            ...e,
                            blockIndex: s + 1,
                            blockType: o,
                            blockKey: `${o}-${s}`,
                            ...r
                        })
                    }, `block-${s}`) : void 0
                })
            })
        },
        56755: (e, t, r) => {
            r.d(t, {
                A: () => i
            });
            var a = r(73723);
            r(7787);
            var l = r(57798),
                n = r(73641),
                s = r(82895),
                o = r(69625);
            let i = ({
                blockedMessage: e,
                consentButtonLabel: t
            }) => {
                let r = "C0004";
                return (0, a.jsx)(a.Fragment, {
                    children: !(() => {
                        let [e] = (0, s.A)("OptanonConsent") || "", t = {};
                        return e && e.split("groups=")[1].split("&")[0].split("%2C").forEach(e => {
                            let [r, a] = e.split("%3A");
                            t[r] = parseInt(a)
                        }), t[r]
                    })() && (0, a.jsxs)("div", {
                        className: "consent absolute bottom-0 left-0 right-0 top-0 z-10 flex flex-col items-center overflow-auto rounded-2xl bg-black p-3 leading-5 text-white opacity-90 sm:justify-center sm:p-5",
                        children: [(0, a.jsx)(o.A, {
                            className: "mx-auto text-center sm:w-4/5 sm:text-base",
                            children: (0, a.jsx)(l.RK, {
                                value: e
                            })
                        }), (0, a.jsx)("div", {
                            className: "mt-5",
                            children: (0, a.jsx)(n.A, {
                                rounded: !0,
                                target: "_self",
                                variant: "primary",
                                onPress: () => {
                                    let e = document.getElementById("ot-sdk-btn"),
                                        t = document.getElementById(`ot-header-id-${r}`),
                                        a = window;
                                    a && a.OneTrust ? a.OneTrust.ToggleInfoDisplay() : e.click(), t.click()
                                },
                                children: t
                            })
                        })]
                    })
                })
            }
        },
        56839: (e, t, r) => {
            r.d(t, {
                A: () => l
            });
            var a = r(7787);
            let l = {
                useIsSmallerThanBreakpoint: e => {
                    let [t, r] = (0, a.useState)(!1);
                    return (0, a.useEffect)(() => {
                        let t = () => {
                            window.innerWidth >= e ? r(!1) : r(!0)
                        };
                        return t(), window.addEventListener("resize", t), () => {
                            window.removeEventListener("resize", t)
                        }
                    }, [e]), t
                },
                useInnerSizes: () => {
                    let [e, t] = (0, a.useState)(0), [r, l] = (0, a.useState)(0);
                    return (0, a.useEffect)(() => {
                        let e = () => {
                            t(window.innerHeight), l(window.innerWidth)
                        };
                        return e(), window.addEventListener("resize", e), () => {
                            window.removeEventListener("resize", e)
                        }
                    }, []), {
                        width: e,
                        height: r
                    }
                }
            }
        },
        62808: (e, t, r) => {
            r.d(t, {
                o: () => y
            });
            var a = r(73723),
                l = r(52342),
                n = r(7787),
                s = r(73641),
                o = r(48457),
                i = r(96246),
                d = r(26978),
                c = r(42072),
                u = r(48660),
                m = r(98825),
                x = r(82895),
                p = r(40313),
                h = r(28575),
                g = r(64007),
                f = r(82345);
            let y = ({
                form: e,
                close: t,
                isGrowForm: r
            }) => {
                let y = (0, f.Wf)(["sfcid", "sflsa", "sfit"], r),
                    [b, v] = (0, n.useState)(!1),
                    {
                        setFormSubmitted: j
                    } = (0, m.B1)(),
                    [w] = (0, x.A)("ELOQUA"),
                    {
                        handleSubmit: k,
                        control: N,
                        setValue: A,
                        watch: C,
                        getValues: S,
                        formState: {
                            isSubmitting: B
                        }
                    } = (0, p.mN)({
                        reValidateMode: "onChange",
                        mode: "onChange"
                    }),
                    L = C(h.bo);
                return b && e?.successMessage?.showSuccessMessage ? (0, a.jsxs)("div", {
                    className: "flex flex-col items-center justify-center p-8 text-center",
                    children: [e.successMessage.title && (0, a.jsx)("h3", {
                        className: "mb-4 text-xl font-semibold text-gray-900",
                        children: e.successMessage.title
                    }), e.successMessage.description && (0, a.jsx)("p", {
                        className: "mb-6 text-gray-600",
                        children: e.successMessage.description
                    }), e?.successMessage?.closeButtonText && (0, a.jsx)(s.A, {
                        onPress: t,
                        className: "[&>div>span]:!text-black hover:[&>div>span]:!underline",
                        variant: "secondary",
                        children: e?.successMessage?.closeButtonText
                    })]
                }) : (0, a.jsxs)(u.A, {
                    onSubmit: k(a => {
                        let n = r ? (({
                                emailConfirmation: e,
                                ghandler: t,
                                gcid: r,
                                growDivision: a,
                                growDepartment: l
                            }) => ({
                                emailConfirmation: e,
                                ghandler: t,
                                gcid: r,
                                growDivision: a,
                                growDepartment: l,
                                grow: !0
                            }))(e?.sfdcIntegration || {}) : e?.sfdcIntegration,
                            s = e?.fields ? (0, f.Zk)(e.fields, S, L) : {};
                        a.elqCustomerGUID = w?.split("&")?.[0]?.split("GUID=")?.[1] || "", a = {
                            ...a,
                            ...n,
                            ...s,
                            ...y,
                            ...e?.extraFields
                        }, fetch("https://create.unity.com/e/f2", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            body: new URLSearchParams((0, f.Ec)(a)).toString()
                        }).then(() => {
                            (0, g.A)({
                                properties: {
                                    form_action: "submitted",
                                    form_id: a.elqFormID,
                                    form_name: a.elqFormName,
                                    form_customer_id: a.elqCustomerGUID
                                }
                            }), j(!0), e?.successMessage?.showSuccessMessage ? v(!0) : t()
                        }).catch(e => l.Cp(e))
                    }),
                    "data-sentry-element": "Form",
                    "data-sentry-component": "FormBuilder",
                    "data-sentry-source-file": "FormsBuilder.tsx",
                    children: [(0, a.jsx)("div", {
                        className: "flex flex-col [&>*]:mt-3",
                        children: e?.fields && e?.fields.map((e, t) => {
                            switch (e.formField) {
                                case "input":
                                    return (0, a.jsx)(o.A, {
                                        ...e,
                                        control: N,
                                        countryCode: L
                                    }, t);
                                case "checkbox":
                                    return (0, a.jsx)(i.A, {
                                        countryCode: L,
                                        ...e,
                                        control: N
                                    }, t);
                                case "dropdown":
                                    return (0, a.jsx)(d.A, {
                                        countryCode: L,
                                        ...e,
                                        control: N,
                                        setValue: A
                                    }, t);
                                case "richText":
                                    return (0, a.jsx)(c.A, {
                                        ...e,
                                        control: N,
                                        countryCode: L
                                    }, t)
                            }
                        })
                    }), e?.actions && (0, a.jsxs)("div", {
                        className: "mt-10 border-t border-t-gray-200 pt-6",
                        children: [e?.actions?.primaryActionText && (0, a.jsx)(s.A, {
                            type: "submit",
                            rounded: !0,
                            hasArrow: !0,
                            disabled: B,
                            children: e?.actions?.primaryActionText
                        }), e?.actions?.secondaryActionText && (0, a.jsx)(s.A, {
                            onPress: t,
                            className: "[&>div>span]:!text-black hover:[&>div>span]:!underline",
                            variant: "secondary",
                            children: e?.actions?.secondaryActionText
                        })]
                    })]
                })
            }
        },
        63457: (e, t, r) => {
            r.d(t, {
                A: () => l
            });
            var a = function(e) {
                return e[e.Small = 425] = "Small", e[e.Medium = 744] = "Medium", e[e.Large = 1024] = "Large", e[e.XLarge = 1440] = "XLarge", e
            }(a || {});
            let l = a
        },
        65022: (e, t, r) => {
            r.d(t, {
                g: () => l
            });
            var a = r(64007);
            let l = e => {
                let t = (({
                    name: e,
                    videoDuration: t,
                    videoProgress: r
                }) => ({
                    event: "userEvent",
                    event_name: e,
                    properties: {
                        video_duration: t,
                        video_progress: r
                    }
                }))(e);
                (0, a.A)(t)
            }
        },
        75524: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            var a = r(73723);
            r(7787);
            var l = r(28511);
            let n = ({
                children: e,
                className: t,
                style: r,
                theme: n = "light",
                padding: s,
                defaultBlockPadding: o
            }) => {
                let i = (0, l.A)({
                        dark: "dark" === n
                    }),
                    d = (0, l.A)(t, s?.top ? ({
                        none: "pt-0",
                        xs: "md:pt-8 pt-6",
                        sm: "md:pt-20 pt-[2.75rem]",
                        md: "md:pt-[9.25rem] pt-16",
                        lg: "md:pt-[11.25rem] pt-[6rem]"
                    })[s.top] : o.top, s?.bottom ? ({
                        none: "pb-0",
                        xs: "md:pb-8 pb-6",
                        sm: "md:pb-20 pb-[2.75rem]",
                        md: "md:pb-[9.25rem] pb-16",
                        lg: "md:pb-[11.25rem] pb-[6rem]"
                    })[s.bottom] : o.bottom);
                return (0, a.jsx)("section", {
                    className: i,
                    "data-sentry-component": "ThemeContainer",
                    "data-sentry-source-file": "ThemeContainer.tsx",
                    children: (0, a.jsx)("div", {
                        className: d,
                        style: r,
                        children: e
                    })
                })
            }
        },
        84031: (e, t, r) => {
            r.d(t, {
                A: () => i
            });
            var a = r(73723),
                l = r(7787),
                n = r(57798),
                s = r(19192),
                o = r(21746);
            let i = ({
                title: e,
                layout: t,
                cardVariant: r,
                scroll: i,
                theme: d,
                cardsHeading: c,
                cards: u,
                isHidden: m
            }) => {
                let {
                    appendCommerceData: x,
                    appendCommerceDataToPortableText: p,
                    currency: h
                } = (0, o.A)(), g = (0, l.useMemo)(() => u?.map(e => ({
                    type: e._type,
                    title: x(e.title, e.productCatalogItem) || "",
                    description: x(e.description, e.productCatalogItem) || "",
                    richText: (0, a.jsx)(n.RK, {
                        value: p(e.richText, e.productCatalogItem)
                    }),
                    image: e.image && {
                        src: e.image?.file?.asset.url || "",
                        alt: e.image?.alt || "",
                        description: e.image?.caption ?? "",
                        withinContainer: e.image?.visualOptions?.container
                    },
                    icon: e.icon && {
                        src: e.icon?.file?.asset.url,
                        alt: e.icon?.alt || ""
                    },
                    actions: e.actions?.map(e => {
                        let t = e.link?.linkReference?.target === "_blank" ? "_blank" : "_self";
                        return {
                            title: e.title || "",
                            href: e.link?.linkReference?.href?.current || "",
                            target: t
                        }
                    })
                })), [u, x, p]);
                return (0, a.jsx)(a.Fragment, {
                    children: !m && (0, a.jsx)("section", {
                        className: `${"dark"===d?"dark":""} overflow-hidden`,
                        children: (0, a.jsx)(s.A, {
                            layout: "two-cards" === t || "three-cards" === t || "four-cards" === t ? t : "four-cards",
                            cardVariant: "default" === r || "padded" === r || "transparent" === r ? r : "default",
                            scroll: i,
                            title: e || "",
                            cardsHeading: ["h2", "h3", "h4", "div"].includes(c) ? c : void 0,
                            cards: g
                        })
                    })
                })
            }
        },
        84344: (e, t, r) => {
            r.d(t, {
                N_: () => a
            });
            let {
                Link: a,
                redirect: l,
                usePathname: n,
                useRouter: s
            } = (0, r(73926).xp)({
                locales: ["en", "fr", "es", "de", "pt", "ru", "cn", "ja", "kr"],
                localePrefix: "as-needed",
                defaultLocale: "en"
            })
        },
        90950: (e, t, r) => {
            r.d(t, {
                B9: () => s
            });
            var a = r(80187),
                l = r(37811);
            let n = (0, a.UU)({
                    projectId: l.env.SANITY_STUDIO_PROJECT_ID || "fuvbjjlp",
                    dataset: l.env.SANITY_STUDIO_DATASET || "production",
                    apiVersion: "2023-10-12",
                    useCdn: !1,
                    perspective: "published",
                    requestTagPrefix: "hexagon-web"
                }),
                s = n.withConfig({
                    token: l.env.SANITY_STUDIO_TOKEN || "skbmHHM41x7T83M45rdoQ5eDnIZvmSMtvNLDWgtqaMVk7iqH2LROZuyD9CfiQEWyi8W04C9ImPHWWK3q19ERi5XWv0L1GP2s4u1p3sUTbjuDdpmVWr3ZsI8vGIbwZRn43SWI9ZYeYzzNBHk2DknFUXEfxpLGSZsNwiv24EcAFisqkG7gVso6",
                    useCdn: !0,
                    perspective: "published"
                });
            n.withConfig({
                token: l.env.SANITY_STUDIO_REVALIDATION_TOKEN,
                useCdn: !1
            }), n.withConfig({
                useCdn: !1,
                token: l.env.SANITY_WRITE_TOKEN,
                perspective: "raw"
            })
        },
        91895: (e, t, r) => {
            r.d(t, {
                Ay: () => c,
                LW: () => n,
                SO: () => d
            });
            var a = r(73723),
                l = r(7787),
                n = function(e) {
                    return e.UPDATE = "UPDATE", e
                }({});
            let s = {},
                o = (0, l.createContext)(s),
                i = (e, t) => {
                    if ("UPDATE" !== t.type) return e;
                    {
                        let {
                            type: r,
                            ...a
                        } = t;
                        return {
                            ...e,
                            ...a
                        }
                    }
                },
                d = ({
                    children: e
                }) => {
                    let [t, r] = (0, l.useReducer)(i, s), n = (0, l.useMemo)(() => ({
                        state: t,
                        dispatch: r
                    }), [t, r]);
                    return (0, a.jsx)(o.Provider, {
                        value: n,
                        "data-sentry-element": "CommerceContext.Provider",
                        "data-sentry-component": "CommerceContextProvider",
                        "data-sentry-source-file": "CommerceContext.tsx",
                        children: e
                    })
                },
                c = () => (0, l.useContext)(o)
        },
        92315: (e, t, r) => {
            r.d(t, {
                A: () => m
            });
            var a = r(73723),
                l = r(7787),
                n = r(96828),
                s = r(28511),
                o = r(13366),
                i = r(13073),
                d = r(24566),
                c = r(50816);
            let u = ({
                    className: e,
                    width: t = 16,
                    height: r = 16
                }) => (0, a.jsx)("button", {
                    "aria-label": "Open in new tab",
                    "data-sentry-component": "ExternalLinkIcon",
                    "data-sentry-source-file": "ExternalLinkIcon.tsx",
                    children: (0, a.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 15 14",
                        className: e,
                        height: r,
                        width: t,
                        "data-sentry-element": "svg",
                        "data-sentry-source-file": "ExternalLinkIcon.tsx",
                        children: (0, a.jsx)("path", {
                            d: "M12.969 5.688a.656.656 0 0 1-1.313 0V3.772L8.402 7.028a.657.657 0 0 1-.93-.93l3.255-3.254H8.812a.656.656 0 1 1 0-1.313h3.5a.656.656 0 0 1 .657.657v3.5ZM10.563 7a.656.656 0 0 0-.657.656v3.5H3.344V4.594h3.5a.656.656 0 1 0 0-1.313H3.125a1.094 1.094 0 0 0-1.094 1.094v7a1.094 1.094 0 0 0 1.094 1.094h7a1.094 1.094 0 0 0 1.094-1.094V7.656A.656.656 0 0 0 10.563 7Z",
                            "data-sentry-element": "path",
                            "data-sentry-source-file": "ExternalLinkIcon.tsx"
                        })
                    })
                }),
                m = (0, l.forwardRef)(function(e, t) {
                    let r = (0, i.U)(t),
                        {
                            linkProps: l
                        } = (0, o.i)(e, r),
                        {
                            isFocusVisible: m,
                            focusProps: x
                        } = (0, c.o)(),
                        {
                            href: p,
                            target: h = "_self",
                            locale: g,
                            localePrefix: f,
                            className: y,
                            children: b,
                            size: v = "small",
                            underline: j = !1,
                            icon: w = null,
                            onClick: k = () => {}
                        } = e,
                        N = {
                            regular: 18,
                            small: 16,
                            tiny: 14
                        },
                        A = (0, s.A)("group outline-none", y),
                        C = (0, s.A)("text-black dark:text-white group-hover:text-blue group-focus:text-blue dark:group-hover:text-blue transition duration-200", j && ({
                            regular: "shadow-underline group-hover:shadow-underline-lg",
                            small: "shadow-underline group-hover:shadow-underline-lg",
                            tiny: "shadow-underline-sm group-hover:shadow-underline"
                        })[v], {
                            regular: "text-body-bold",
                            small: "text-small",
                            tiny: "text-tiny"
                        } [v]),
                        S = (0, s.A)("group-hover:fill-blue ml-2 h-4 w-4 fill-black transition duration-200 dark:fill-white group-focus-outline group-focus-visible:fill-blue"),
                        B = "string" == typeof b ? b : "";
                    return (0, a.jsx)(n.N_, {
                        ...(0, d.v)(l, x),
                        ref: r,
                        href: p,
                        target: h,
                        locale: g,
                        className: A,
                        role: "button",
                        ...B && {
                            "aria-label": B
                        },
                        onClick: k,
                        localePrefix: f,
                        children: (0, a.jsxs)("div", {
                            className: (0, s.A)("flex items-center", {
                                "a11y-ring rounded-sm": m
                            }),
                            children: [w && (0, a.jsx)("span", {
                                className: "group-hover:fill-blue group-focus:fill-blue mr-2 transition duration-200",
                                children: w
                            }), (0, a.jsx)("span", {
                                className: C,
                                children: b
                            }), "_blank" === h && (0, a.jsx)(u, {
                                className: S,
                                height: N[v],
                                width: N[v]
                            })]
                        })
                    })
                })
        },
        92584: (e, t, r) => {
            r.d(t, {
                A: () => c
            });
            var a = r(73723),
                l = r(7787),
                n = r(28511),
                s = r(84344),
                o = r(33577);
            let i = ({
                    iconDirection: e
                }) => (0, a.jsx)(o.Ay, {
                    icon: "left" === e ? "arrow-left" : "arrow-right",
                    size: "12",
                    className: "transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover/button:opacity-100",
                    "data-sentry-element": "Icon",
                    "data-sentry-component": "DefaultIconOnHover",
                    "data-sentry-source-file": "Button.tsx"
                }),
                d = ({
                    icon: e,
                    iconWeight: t
                }) => (0, a.jsx)("span", {
                    className: "w-3 h-3 overflow-hidden",
                    "data-sentry-component": "IconOnHover",
                    "data-sentry-source-file": "Button.tsx",
                    children: (0, a.jsxs)("span", {
                        className: "flex items-center transition-all duration-300 justify-center w-[24px] -translate-x-3 group-hover:translate-x-0 group-hover/button:translate-x-0",
                        children: [(0, a.jsx)(o.Ay, {
                            icon: e ? `${e}` : "arrow-right",
                            size: "12",
                            className: "w-3 h-3 flex-shrink-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-hover/button:opacity-100",
                            weight: t,
                            "data-sentry-element": "Icon",
                            "data-sentry-source-file": "Button.tsx"
                        }), (0, a.jsx)(o.Ay, {
                            icon: e ? `${e}` : "arrow-right",
                            size: "12",
                            className: "w-3 h-3 flex-shrink-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0 group-hover/button:opacity-0",
                            weight: t,
                            "data-sentry-element": "Icon",
                            "data-sentry-source-file": "Button.tsx"
                        })]
                    })
                }),
                c = e => {
                    let [t, r] = (0, l.useState)(!1), {
                        target: c = "_self",
                        children: u,
                        variant: m = "primary",
                        href: x,
                        localePrefix: p,
                        icon: h,
                        iconWeight: g = "regular",
                        iconDirection: f = "right",
                        size: y = "md",
                        disabled: b,
                        disableAnimation: v = !1,
                        onClick: j,
                        type: w = "button",
                        ariaLabel: k,
                        as: N = "button",
                        role: A
                    } = e, C = k ?? ("string" == typeof u ? u : h ? `${m} button with ${h} icon` : `${m} button`), S = `
    focus-visible:before:content-['']
    focus-visible:before:absolute
    focus-visible:before:inset-[-0.25rem]
    focus-visible:before:rounded-full
    focus-visible:before:bg-transparent
    focus-visible:before:border
    focus-visible:before:border-2
    focus-visible:before:border-mango-blue-focus
    focus-visible:before:pointer-events-none
    focus-visible:before:z-10
    focus-visible:outline-none
  `, B = {
                        hasIcon: {
                            lg: `h-[3.125rem] ${!u?"aspect-square w-auto":"left"===f?"px-[2.25rem] pl-[2rem]":"px-[2.25rem] pr-[2rem]"}`,
                            md: `h-[2.875rem] ${!u?"aspect-square w-auto":"left"===f?"px-[1.875rem] pl-[1.625rem]":"px-[1.875rem] pr-[1.625rem]"}`,
                            sm: `h-[2.375rem] ${!u?"aspect-square w-auto":"left"===f?"px-[1.5rem] pl-[1.25rem]":"px-[1.5rem] pr-[1.25rem]"}`,
                            xs: `h-[2rem] ${!u?"aspect-square w-auto":"left"===f?"px-[1.25rem] pl-[1rem]":"px-[1.25rem] pr-[1rem]"}`
                        },
                        noIcon: {
                            lg: "h-[3.125rem] px-[2rem]",
                            md: "h-[2.875rem] px-[1.625rem]",
                            sm: "h-[2.375rem] px-[1.25rem]",
                            xs: "h-[2rem] px-[1rem]"
                        }
                    }, L = {
                        primary: {
                            default: "bg-mango-blue-500 text-white btn-primary-shadow-default",
                            hover: "hover:bg-mango-blue-600 hover:shadow-transparent",
                            groupHover: "group-hover/button:bg-mango-blue-600 group-hover/button:shadow-transparent",
                            pressed: "hover:bg-mango-blue-700 btn-primary-shadow-pressed"
                        },
                        secondary: {
                            default: "bg-mango-gray-50 dark:bg-mango-gray-800 text-mango-black dark:text-mango-white btn-secondary-shadow-default",
                            hover: "hover:bg-mango-gray-100 hover:dark:bg-mango-gray-900 hover:shadow-transparent",
                            groupHover: "group-hover/button:bg-mango-gray-100 group-hover/button:dark:bg-mango-gray-900 group-hover/button:shadow-transparent",
                            pressed: "hover:bg-mango-gray-200 dark:hover:bg-mango-gray-950 btn-secondary-shadow-pressed"
                        },
                        ghost: {
                            default: "bg-transparent text-mango-black dark:text-mango-white border border-transparent",
                            hover: "hover:border-mango-black hover:dark:border-mango-white hover:shadow-transparent",
                            groupHover: "group-hover/button:border-mango-black group-hover/button:dark:border-mango-white group-hover/button:shadow-transparent",
                            pressed: "hover:border-mango-gray-300 hover:dark:border-mango-gray-600"
                        },
                        outline: {
                            default: "bg-transparent text-mango-black border border-mango-gray-300 dark:border-mango-gray-700",
                            hover: "hover:border-mango-gray-400 dark:hover:border-mango-gray-600 hover:shadow-transparent",
                            groupHover: "group-hover/button:border-mango-gray-400 group-hover/button:dark:border-mango-gray-600 group-hover/button:shadow-transparent",
                            pressed: "hover:border-mango-gray-500 dark:hover:border-mango-gray-700"
                        },
                        customOutlineRed: {
                            default: "bg-transparent text-mango-black border border-red-300 dark:border-red-700",
                            hover: "hover:border-red-400 dark:hover:border-red-600 hover:shadow-transparent",
                            groupHover: "group-hover/button:border-red-400 group-hover/button:dark:border-red-600 group-hover/button:shadow-transparent",
                            pressed: "hover:border-red-500 dark:hover:border-red-700"
                        },
                        customOutlineGreen: {
                            default: "bg-transparent text-mango-black border border-green-400 dark:border-green-700",
                            hover: "hover:border-green-500 dark:hover:border-green-600 hover:shadow-transparent",
                            groupHover: "group-hover/button:border-green-500 group-hover/button:dark:border-green-600 group-hover/button:shadow-transparent",
                            pressed: "hover:border-green-600 dark:hover:border-green-700"
                        },
                        customOutlineYellow: {
                            default: "bg-transparent text-mango-black border border-yellow-300 dark:border-yellow-700",
                            hover: "hover:border-yellow-400 dark:hover:border-yellow-600 hover:shadow-transparent",
                            groupHover: "group-hover/button:border-yellow-400 group-hover/button:dark:border-yellow-600 group-hover/button:shadow-transparent",
                            pressed: "hover:border-yellow-500 dark:hover:border-yellow-700"
                        }
                    }, F = (0, n.A)("relative flex items-center justify-center gap-2 rounded-full text-xs font-semibold font-sans tracking-[-0.01rem] whitespace-nowrap group w-fit transition-[box-shadow,background-color,color,border-color] duration-300 pointer-events-auto", S, "disabled:cursor-not-allowed disabled:opacity-40", B[h ? "hasIcon" : "noIcon"][y], L[m].default, !t && L[m].hover, !t && L[m].groupHover, t && L[m].pressed, e.className);
                    if (x) return (0, a.jsx)(s.N_, {
                        href: x,
                        role: "button",
                        onMouseDown: () => r(!0),
                        onMouseUp: () => r(!1),
                        ...C && {
                            "aria-label": C
                        },
                        target: c,
                        type: w,
                        className: F,
                        localePrefix: p,
                        children: (0, a.jsxs)("span", {
                            className: (0, n.A)("flex items-center justify-center gap-2", "left" === f && "flex-row-reverse", b || v || h ? "" : "left" === f ? "-translate-x-2 group-hover:translate-x-0 group-hover/button:translate-x-0" : "translate-x-2 group-hover:translate-x-0 group-hover/button:translate-x-0", "transition-all duration-300"),
                            children: [u, b || v ? h ? (0, a.jsx)(o.Ay, {
                                icon: h,
                                size: "12",
                                weight: g
                            }) : null : h ? (0, a.jsx)(d, {
                                icon: h,
                                iconWeight: g
                            }) : (0, a.jsx)(i, {
                                iconDirection: f
                            })]
                        })
                    });
                    let I = {
                        className: F,
                        disabled: b,
                        onMouseDown: () => r(!0),
                        onMouseUp: () => r(!1),
                        onClick: j,
                        role: A || ("div" === N ? "button" : void 0),
                        ...k && {
                            "aria-label": k
                        },
                        ...b && {
                            "aria-disabled": !0
                        }
                    };
                    return "button" === N && (I.type = w), (0, a.jsx)(N, {
                        ...I,
                        "data-sentry-element": "Element",
                        "data-sentry-component": "Button",
                        "data-sentry-source-file": "Button.tsx",
                        children: (0, a.jsxs)("span", {
                            className: (0, n.A)("flex items-center justify-center gap-2", "left" === f && "flex-row-reverse", b || v || h ? "" : "left" === f ? "-translate-x-2 group-hover:translate-x-0 group-hover/button:translate-x-0" : "translate-x-2 group-hover:translate-x-0 group-hover/button:translate-x-0", "transition-all duration-300"),
                            children: [u, b || v ? h ? (0, a.jsx)(o.Ay, {
                                icon: h,
                                size: "12",
                                weight: g
                            }) : null : h ? (0, a.jsx)(d, {
                                icon: h,
                                iconWeight: g
                            }) : (0, a.jsx)(i, {
                                iconDirection: f
                            })]
                        })
                    })
                }
        },
        96608: (e, t, r) => {
            r.d(t, {
                A: () => l
            });
            var a = r(7787);
            let l = (e, t) => {
                let [r, l] = (0, a.useState)("");
                (0, a.useEffect)(() => {
                    l(document.cookie)
                }, []);
                let n = (0, a.useMemo)(() => r.split("; ").reduce((e, t) => {
                        let [r, a] = t.split("=");
                        return {
                            ...e,
                            [r]: a
                        }
                    }, {}), [r]),
                    s = (0, a.useCallback)(t => {
                        document.cookie = `${e}=${t};path=/`, l(document.cookie)
                    }, [e]);
                return [n[e] || t, s]
            }
        },
        98159: (e, t, r) => {
            r.d(t, {
                A: () => g
            });
            var a = r(73723),
                l = r(7787),
                n = r(20312),
                s = r(34529),
                o = r.n(s),
                i = r(69404),
                d = r(7330),
                c = r(73641),
                u = r(37170),
                m = r(56755),
                x = r(49072),
                p = r(65022),
                h = r(24421);
            let g = ({
                title: e,
                url: t,
                container: r = !1,
                blockedMessage: s,
                consentButtonLabel: g
            }) => {
                let f = o()(t),
                    [y, b] = (0, l.useState)(!1),
                    v = (0, l.useRef)(null),
                    j = (0, l.useRef)(null),
                    {
                        player: w
                    } = (0, h.J)(v, y),
                    k = () => {
                        b(!0)
                    };
                return (0, l.useEffect)(() => {
                    w && (j.current = w.addEventListener("onStateChange", e => {
                        if ([1, 2].includes(e.data)) {
                            let t = "function" == typeof w.getDuration && w.getDuration() || 0,
                                r = Number((("function" == typeof w.getCurrentTime && w.getCurrentTime() || 0) / t * 100).toFixed(2)),
                                a = 1 === e.data ? "video_play" : "video_pause";
                            (0, p.g)({
                                name: a,
                                videoDuration: t,
                                videoProgress: (Number.isNaN(r), r)
                            })
                        }
                    }))
                }, [w]), (0, l.useEffect)(() => {
                    if (!y && w?.playerInfo?.playerState === 1) {
                        let e = "function" == typeof w.getDuration && w.getDuration() || 0,
                            t = Number((("function" == typeof w.getCurrentTime && w.getCurrentTime() || 0) / e * 100).toFixed(2));
                        (0, p.g)({
                            name: "video_pause",
                            videoDuration: e,
                            videoProgress: (Number.isNaN(t), t)
                        })
                    }
                }, [y, w]), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(x.default, {
                        src: "https://www.youtube.com/iframe_api",
                        "data-sentry-element": "Script",
                        "data-sentry-source-file": "YouTubeModal.tsx"
                    }), (0, a.jsxs)("div", {
                        className: "relative h-full w-full self-center p-4 lg:p-0",
                        children: [t && f && (0, a.jsxs)("div", {
                            className: "yt-lite z-10 h-full overflow-auto",
                            ...{
                                tabIndex: 0,
                                role: "button",
                                onClick: k,
                                onKeyDown: e => {
                                    ("Enter" === e.key || "Space" === e.key) && k()
                                }
                            },
                            children: [(0, a.jsx)("div", {
                                className: "lty-playbtn"
                            }), (0, a.jsx)(n.default, {
                                className: "!relative",
                                style: {
                                    borderRadius: "24px"
                                },
                                src: `https://img.youtube.com/vi/${f}/hqdefault.jpg`,
                                alt: e,
                                fill: !0
                            }), (0, a.jsx)(m.A, {
                                blockedMessage: s,
                                consentButtonLabel: g
                            })]
                        }), (0, a.jsx)(d.A, {
                            isOpen: y,
                            onOpenChange: b,
                            showTriggerButton: !1,
                            "data-sentry-element": "Modal",
                            "data-sentry-source-file": "YouTubeModal.tsx",
                            children: (0, a.jsxs)("div", {
                                className: "z-50 mt-20 flex w-10/12 flex-col rounded-3xl bg-black p-4 lg:w-8/12",
                                tabIndex: -1,
                                children: [(0, a.jsx)(c.A, {
                                    onPress: () => {
                                        b(!1)
                                    },
                                    variant: "secondary",
                                    className: "self-end overflow-hidden",
                                    "data-sentry-element": "Button",
                                    "data-sentry-source-file": "YouTubeModal.tsx",
                                    children: (0, a.jsx)(u.A, {
                                        className: "z-[60] h-5 w-5 text-white",
                                        "data-sentry-element": "CloseIcon",
                                        "data-sentry-source-file": "YouTubeModal.tsx"
                                    })
                                }), (0, a.jsx)(i.A, {
                                    id: f,
                                    title: e,
                                    iframeClass: "yt-iframe",
                                    poster: "hqdefault",
                                    ref: v,
                                    params: "enablejsapi=1",
                                    "data-sentry-element": "LiteYouTubeEmbed",
                                    "data-sentry-source-file": "YouTubeModal.tsx"
                                }), (0, a.jsx)(m.A, {
                                    blockedMessage: s,
                                    consentButtonLabel: g,
                                    "data-sentry-element": "ConsentIframe",
                                    "data-sentry-source-file": "YouTubeModal.tsx"
                                })]
                            })
                        })]
                    })]
                })
            }
        },
        98594: (e, t, r) => {
            r.d(t, {
                A: () => s
            });
            var a = r(73723);
            r(7787);
            var l = r(28511),
                n = r(20312);
            let s = ({
                keyFigures: e,
                nested: t = !1,
                theme: r = "light"
            }) => {
                let s = (0, l.$)("container col-span-12 pt-16 grid grid-cols-12 gap-2 ", {
                    "py-16": !t
                });
                return (0, a.jsx)("div", {
                    className: "dark" === r ? "bg-black text-white" : "",
                    "data-sentry-component": "KeyFigures",
                    "data-sentry-source-file": "KeyFigures.tsx",
                    children: (0, a.jsx)("div", {
                        className: s,
                        children: e?.map((s, o) => {
                            let {
                                value: i,
                                label: d
                            } = s, c = (0, l.$)("col-span-12 flex rounded-md items-center gap-2 px-4 py-2 filter md:p-4 lg:col-span-4 xl:p-6", {
                                "backdrop-blur-lg": t && "dark" !== r,
                                "bg-gray-900 dark:bg-black": "dark" === r,
                                "bg-gray-100 dark:bg-gray-900 text-gray-800": !t && "dark" !== r,
                                "xl:col-span-3": e?.length === 4
                            });
                            return i?.type === "text" ? (0, a.jsxs)("div", {
                                className: c,
                                children: [(0, a.jsx)("div", {
                                    className: "loco-text-heading-sm min-w-[30%] shrink-0 gap-10 pr-4 text-center ",
                                    children: i.text
                                }), (0, a.jsx)("div", {
                                    className: "loco-text-body max-w-xs ",
                                    children: d
                                })]
                            }, o) : d && i?.type === "icon" && !i.url ? (0, a.jsx)("div", {
                                className: c,
                                children: (0, a.jsx)("div", {
                                    className: "loco-text-body max-w-xs",
                                    children: d
                                })
                            }, o) : i?.type === "icon" && i.url ? (0, a.jsxs)("div", {
                                className: c,
                                children: [(0, a.jsx)("div", {
                                    className: "flex min-w-[30%] shrink-0 gap-10 text-center lg:justify-center",
                                    children: (0, a.jsx)(n.default, {
                                        src: i.url,
                                        alt: i.description,
                                        width: 40,
                                        height: 40
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "loco-text-body max-w-xs",
                                    children: d
                                })]
                            }, o) : null
                        })
                    })
                })
            }
        }
    }
]);