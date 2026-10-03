;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "8d65a5dd-b994-ef04-e28b-657665f9b23b")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 123849, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(722978),
        r = e.i(805518);
    let l = ({
            title: e,
            content: l,
            listStyle: n = "check"
        }) => {
            let s = (0, a.default)("loco-text-body [&_h4]:mb-0", {
                "checkmark-list-green": "check" === n,
                "plus-list": "plus" === n
            });
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("div", {
                    className: "loco-caption-sm-semibold mb-2 text-gray-700 dark:text-gray-300",
                    children: e
                }), (0, t.jsx)(r.default, {
                    className: s,
                    "data-sentry-element": "Text",
                    "data-sentry-source-file": "CardPlan.tsx",
                    children: l
                })]
            })
        },
        n = ({
            title: e = "",
            descriptions: a = [],
            treshold: r,
            pricing: n
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
                    children: a?.map((a, r) => (0, t.jsx)("div", {
                        className: "flex flex-col pb-8",
                        "data-sentry-component": "renderDescriptions",
                        "data-sentry-source-file": "CardPlan.tsx",
                        children: (0, t.jsx)(l, {
                            title: a.title,
                            content: a.content,
                            listStyle: a.listStyle,
                            "data-sentry-element": "CardPlanDescription",
                            "data-sentry-source-file": "CardPlan.tsx"
                        })
                    }, `card-plan-${e}-${r}`))
                }), (0, t.jsx)(l, {
                    title: r?.title || "",
                    content: r?.content || "",
                    "data-sentry-element": "CardPlanDescription",
                    "data-sentry-source-file": "CardPlan.tsx"
                })]
            }), (0, t.jsx)("div", {
                className: "min-h-[6rem]",
                children: (0, t.jsx)(l, {
                    title: n?.title || "",
                    content: n?.content || "",
                    "data-sentry-element": "CardPlanDescription",
                    "data-sentry-source-file": "CardPlan.tsx"
                })
            })]
        }),
        s = ({
            theme: e = "light",
            cards: r = []
        }) => {
            let l = (0, a.default)({
                dark: "dark" === e
            });
            return (0, t.jsx)("section", {
                className: l,
                "data-sentry-component": "CardPlans",
                "data-sentry-source-file": "CardPlans.tsx",
                children: (0, t.jsx)("div", {
                    className: "bg-white pt-8 pb-20 dark:bg-black",
                    children: (0, t.jsx)("div", {
                        className: "container flex flex-col flex-wrap gap-2 lg:flex-row lg:justify-center",
                        children: r.map((e, a) => (0, t.jsx)("div", {
                            "data-sentry-component": "renderCards",
                            "data-sentry-source-file": "CardPlans.tsx",
                            children: (0, t.jsx)(n, {
                                ...e,
                                "data-sentry-element": "CardPlan",
                                "data-sentry-source-file": "CardPlans.tsx"
                            })
                        }, `card-plan-${e.title}-${a}`))
                    })
                })
            })
        };
    var i = e.i(722990);
    e.s(["default", 0, ({
        isHidden: e,
        theme: a,
        cards: r
    }) => e ? null : (0, t.jsx)(s, {
        theme: "dark" === a ? "dark" : "light",
        cards: r.map(e => ({
            title: e.title ?? "",
            descriptions: e.descriptions?.map(e => {
                let a = e?.listStyle === "plus" ? "plus" : "check";
                return {
                    title: e?.title ?? "",
                    content: (0, t.jsx)(i.PortableText, {
                        value: e?.content
                    }),
                    listStyle: a
                }
            }) || [],
            treshold: {
                title: e?.treshold?.title ?? "",
                content: (0, t.jsx)(i.PortableText, {
                    value: e.treshold?.content
                })
            },
            pricing: {
                title: e.pricing?.title ?? "",
                content: (0, t.jsx)(i.PortableText, {
                    value: e.pricing?.content
                })
            }
        })),
        "data-sentry-element": "CardPlans",
        "data-sentry-component": "PlanCards",
        "data-sentry-source-file": "PlanCardsBlock.tsx"
    })], 123849)
}, 694983, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(722990),
        r = e.i(722978),
        l = e.i(691156),
        n = e.i(131564);
    let s = ({
        title: e,
        faqs: a,
        blockKey: s,
        theme: i
    }) => {
        let o = (0, r.default)("pb-28", {
            "dark bg-black": "dark" === i
        });
        return (0, t.jsxs)("section", {
            className: o,
            "data-sentry-component": "Faq",
            "data-sentry-source-file": "Faq.tsx",
            children: [(0, t.jsx)(n.default, {
                title: e,
                "data-sentry-element": "TitleDescriptionBlock",
                "data-sentry-source-file": "Faq.tsx"
            }), (0, t.jsx)("div", {
                className: "container grid gap-1",
                children: a?.map((a, r) => (0, t.jsx)(l.default, {
                    title: a.question,
                    blockKey: `${s}-${e}-${r}`,
                    "data-sentry-element": "Accordion",
                    "data-sentry-component": "renderFaqs",
                    "data-sentry-source-file": "Faq.tsx",
                    children: a.answer
                }, `faq-${e}-${r}`))
            })]
        })
    };
    e.s(["default", 0, ({
        title: e,
        faqs: r,
        blockKey: l,
        isHidden: n,
        theme: i
    }) => (0, t.jsx)(t.Fragment, {
        children: !n && (0, t.jsx)(s, {
            theme: "dark" === i ? "dark" : "light",
            title: e,
            faqs: r?.map(e => ({
                question: e.question,
                answer: (0, t.jsx)(a.PortableText, {
                    value: e.answer
                })
            })),
            blockKey: l
        })
    })], 694983)
}, 129824, e => {
    "use strict";
    e.s(["DATA_REQUEST", 0, "/data-request", "L1_PAGES_NO_MT_BANNER", 0, ["/our-company", "/community", "/industry", "/use-cases", "/releases/unity-6"], "PRODUCTS_PAGES_NO_MT_BANNER", 0, ["/products"], "PRODUCTS_PRODUCTS_PAGES_NO_MT_BANNER", 0, ["/products/unity-pro", "/products/unity-engine", "/products/compare-plans", "/products/compare-plans/unity-cloud"], "RESOURCES_PAGES_NO_MT_BANNER", 0, ["/resources"], "SOLUTIONS_PAGES_NO_MT_BANNER", 0, ["/download", "/roadmap", "/pages/pro-free-trial", "/games", "/solutions", "/developer-tools", "/how-to", "/learn", "/learn/get-started", "/releases/lts-vs-tech-stream"]])
}, 246916, e => {
    "use strict";
    var t = e.i(393335),
        a = e.i(833200),
        r = e.i(740041);
    e.s(["useMTBanner", 0, function(e, l = []) {
        var n, s;
        let i, o, c, d, m, u = (0, t.usePathname)(),
            p = (0, a.useLocale)(),
            h = p !== r.defaultLocale ? u.replace(`/${p}`, "") : u,
            f = "" === h || "/" === h || h.startsWith("/home-experiment");
        return {
            shouldDisplayMTBanner: p !== r.defaultLocale && e?.translationType === "MT" && !f && !l.includes(h),
            updatedBlocks: (n = e.blocks ?? [], s = e.machineTranslationDisclaimer, i = n.reduce((e, t, a) => ["hero", "alternateNavigation", "headliner"].includes(t._type) ? a : e, -1), o = [...n], c = o[i + 1]?._type === "alternateNavigationAnchor" || o[i + 1]?._type === "anchorButton" ? o[i + 2] : o[i + 1], d = c?.theme ?? null, m = {
                _type: "alert",
                text: s?.text,
                isContained: !0,
                spacing: {
                    bottom: !0,
                    top: !0
                },
                ...d && {
                    theme: d
                },
                action: {
                    text: s?.action?.title,
                    fieldLink: {
                        linkReference: {
                            href: {
                                current: `${window.location.origin}${h}`
                            },
                            target: "_self"
                        }
                    }
                }
            }, -1 === i ? o.unshift(m) : o.splice(i + 1, 0, m), o),
            redirectPathName: h
        }
    }], 246916)
}, 106984, e => {
    "use strict";
    var t = e.i(409781),
        a = e.i(848662);
    let r = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M208,96l-80,80L48,96Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"
            }))]
        ]),
        l = t.forwardRef((e, l) => t.createElement(a.default, {
            ref: l,
            ...e,
            weights: r
        }));
    l.displayName = "CaretDownIcon", e.s(["CaretDown", 0, l, "CaretDownIcon", 0, l], 106984)
}, 729e3, e => {
    "use strict";
    var t = e.i(409781),
        a = e.i(848662);
    let r = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M208,160H48l80-80Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M213.66,154.34l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,48,168H208a8,8,0,0,0,5.66-13.66ZM67.31,152,128,91.31,188.69,152Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M215.39,163.06A8,8,0,0,1,208,168H48a8,8,0,0,1-5.66-13.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,215.39,163.06Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M212.24,164.24a6,6,0,0,1-8.48,0L128,88.49,52.24,164.24a6,6,0,0,1-8.48-8.48l80-80a6,6,0,0,1,8.48,0l80,80A6,6,0,0,1,212.24,164.24Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M210.83,162.83a4,4,0,0,1-5.66,0L128,85.66,50.83,162.83a4,4,0,0,1-5.66-5.66l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,210.83,162.83Z"
            }))]
        ]),
        l = t.forwardRef((e, l) => t.createElement(a.default, {
            ref: l,
            ...e,
            weights: r
        }));
    l.displayName = "CaretUpIcon", e.s(["CaretUp", 0, l, "CaretUpIcon", 0, l], 729e3)
}, 210643, e => {
    "use strict";
    var t = e.i(409781),
        a = e.i(848662);
    let r = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M200,28H160a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20h40a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28Zm-4,176H164V52h32ZM96,28H56A20,20,0,0,0,36,48V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V48A20,20,0,0,0,96,28ZM92,204H60V52H92Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M208,48V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h40A8,8,0,0,1,208,48ZM96,40H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V48A8,8,0,0,0,96,40Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M200,34H160a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14h40a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm2,174a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2ZM96,34H56A14,14,0,0,0,42,48V208a14,14,0,0,0,14,14H96a14,14,0,0,0,14-14V48A14,14,0,0,0,96,34Zm2,174a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H96a2,2,0,0,1,2,2Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M200,36H160a12,12,0,0,0-12,12V208a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm4,172a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4ZM96,36H56A12,12,0,0,0,44,48V208a12,12,0,0,0,12,12H96a12,12,0,0,0,12-12V48A12,12,0,0,0,96,36Zm4,172a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H96a4,4,0,0,1,4,4Z"
            }))]
        ]),
        l = t.forwardRef((e, l) => t.createElement(a.default, {
            ref: l,
            ...e,
            weights: r
        }));
    l.displayName = "PauseIcon", e.s(["Pause", 0, l, "PauseIcon", 0, l], 210643)
}, 846891, e => {
    "use strict";
    var t = e.i(409781),
        a = e.i(848662);
    let r = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M234.49,111.07,90.41,22.94A20,20,0,0,0,60,39.87V216.13a20,20,0,0,0,30.41,16.93l144.08-88.13a19.82,19.82,0,0,0,0-33.86ZM84,208.85V47.15L216.16,128Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M228.23,134.69,84.15,222.81A8,8,0,0,1,72,216.12V39.88a8,8,0,0,1,12.15-6.69l144.08,88.12A7.82,7.82,0,0,1,228.23,134.69Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M231.36,116.19,87.28,28.06a14,14,0,0,0-14.18-.27A13.69,13.69,0,0,0,66,39.87V216.13a13.69,13.69,0,0,0,7.1,12.08,14,14,0,0,0,14.18-.27l144.08-88.13a13.82,13.82,0,0,0,0-23.62Zm-6.26,13.38L81,217.7a2,2,0,0,1-2.06,0,1.78,1.78,0,0,1-1-1.61V39.87a1.78,1.78,0,0,1,1-1.61A2.06,2.06,0,0,1,80,38a2,2,0,0,1,1,.31L225.1,126.43a1.82,1.82,0,0,1,0,3.14Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M230.32,117.9,86.24,29.79a11.91,11.91,0,0,0-12.17-.23A11.71,11.71,0,0,0,68,39.89V216.11a11.71,11.71,0,0,0,6.07,10.33,11.91,11.91,0,0,0,12.17-.23L230.32,138.1a11.82,11.82,0,0,0,0-20.2Zm-4.18,13.37L82.06,219.39a4,4,0,0,1-4.07.07,3.77,3.77,0,0,1-2-3.35V39.89a3.77,3.77,0,0,1,2-3.35,4,4,0,0,1,4.07.07l144.08,88.12a3.8,3.8,0,0,1,0,6.54Z"
            }))]
        ]),
        l = t.forwardRef((e, l) => t.createElement(a.default, {
            ref: l,
            ...e,
            weights: r
        }));
    l.displayName = "PlayIcon", e.s(["Play", 0, l, "PlayIcon", 0, l], 846891)
}, 865799, (e, t, a) => {
    t.exports = function(e, t, a) {
        switch (a.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, a[0]);
            case 2:
                return e.call(t, a[0], a[1]);
            case 3:
                return e.call(t, a[0], a[1], a[2])
        }
        return e.apply(t, a)
    }
}, 531766, (e, t, a) => {
    t.exports = function(e, t) {
        for (var a = -1, r = null == e ? 0 : e.length; ++a < r && !1 !== t(e[a], a, e););
        return e
    }
}, 317508, (e, t, a) => {
    var r = e.r(830747),
        l = e.r(599568),
        n = e.r(240046);
    t.exports = l ? function(e, t) {
        return l(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: r(t),
            writable: !0
        })
    } : n
}, 599568, (e, t, a) => {
    var r = e.r(581511);
    t.exports = function() {
        try {
            var e = r(Object, "defineProperty");
            return e({}, "", {}), e
        } catch (e) {}
    }()
}, 860059, (e, t, a) => {
    var r = /^(?:0|[1-9]\d*)$/;
    t.exports = function(e, t) {
        var a = typeof e;
        return !!(t = null == t ? 0x1fffffffffffff : t) && ("number" == a || "symbol" != a && r.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
}, 184414, (e, t, a) => {
    var r = e.r(865799),
        l = Math.max;
    t.exports = function(e, t, a) {
        return t = l(void 0 === t ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, s = -1, i = l(n.length - t, 0), o = Array(i); ++s < i;) o[s] = n[t + s];
                s = -1;
                for (var c = Array(t + 1); ++s < t;) c[s] = n[s];
                return c[t] = a(o), r(e, this, c)
            }
    }
}, 108749, (e, t, a) => {
    var r = e.r(317508);
    t.exports = e.r(911818)(r)
}, 911818, (e, t, a) => {
    var r = Date.now;
    t.exports = function(e) {
        var t = 0,
            a = 0;
        return function() {
            var l = r(),
                n = 16 - (l - a);
            if (a = l, n > 0) {
                if (++t >= 800) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
}, 830747, (e, t, a) => {
    t.exports = function(e) {
        return function() {
            return e
        }
    }
}, 240046, (e, t, a) => {
    t.exports = function(e) {
        return e
    }
}, 104688, e => {
    e.v(t => Promise.all(["static/chunks/0jpvgxs13jnce.js"].map(t => e.l(t))).then(() => t(425687)))
}, 574228, e => {
    e.v(t => Promise.all(["static/chunks/1fdpkjdtgx2v1.js"].map(t => e.l(t))).then(() => t(10770)))
}, 164163, 596889, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(722978),
        r = e.i(833449),
        l = e.i(825610),
        n = e.i(749583);
    let s = ({
        children: e,
        className: r = "",
        variant: l = "default"
    }) => {
        let n = (0, a.clsx)({
            default: "bg-white dark:bg-gray-900 rounded-xl",
            padded: "p-6 bg-white dark:bg-gray-900 rounded-xl",
            transparent: ""
        } [l], r);
        return (0, t.jsx)("div", {
            className: n,
            "data-sentry-component": "Card",
            "data-sentry-source-file": "Card.tsx",
            children: e
        })
    };
    s.Content = ({
        children: e,
        className: a = "w-full"
    }) => (0, t.jsx)("div", {
        className: a,
        "data-sentry-component": "CardContent",
        "data-sentry-source-file": "CardContent.tsx",
        children: e
    }), s.Image = ({
        children: e,
        withinContainer: r
    }) => {
        let l = (0, a.clsx)("card-img relative w-full", {
            "[&>img]:!static !h-auto": r
        });
        return (0, t.jsx)("div", {
            className: l,
            "data-sentry-component": "CardImage",
            "data-sentry-source-file": "CardImage.tsx",
            children: e
        })
    }, e.s(["default", 0, s], 596889);
    var i = e.i(805518);
    e.s(["default", 0, ({
        title: e,
        cards: o,
        layout: c = "four-cards",
        cardVariant: d = "default",
        scroll: m = !1,
        cardsHeading: u
    }) => {
        let p = u || (e ? "h3" : "h2"),
            h = (0, a.clsx)("gap-4 md:gap-8", {
                "grid grid-cols-12": !m,
                "flex overflow-x-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-900 dark:scrollbar-track-gray-900 dark:scrollbar-thumb-gray-100": m
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
                    className: h,
                    children: o?.map((o, u) => {
                        let h = (0, a.clsx)("flex flex-wrap flex-row", !m && ({
                                "two-cards": "col-span-12 md:col-span-6 [&>div>.card-img]:h-72",
                                "three-cards": "col-span-12 md:col-span-6 lg:col-span-4 [&>div>.card-img]:h-44",
                                "four-cards": "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 [&>div>.card-img]:h-36"
                            })[c], m && ({
                                "two-cards": "mb-6 min-w-[35rem] [&>div>.card-img]:h-72",
                                "three-cards": "mb-6 min-w-[22rem] [&>div>.card-img]:h-44",
                                "four-cards": "mb-6 min-w-[16rem] [&>div>.card-img]:h-36"
                            })[c]),
                            f = (0, a.clsx)("place-self-end", {
                                "px-6 pb-6": "default" === d || "transparent" === d
                            }),
                            g = (0, a.clsx)({
                                "p-6": "default" === d || "transparent" === d,
                                "py-6": "padded" === d
                            }),
                            x = (0, a.clsx)("object-cover", {
                                "rounded-t-xl": "default" === d || "transparent" === d,
                                rounded: "padded" === d
                            }),
                            y = (0, a.clsx)("caption-xs mt-1 text-right text-gray-400", {
                                "mr-1": "padded" !== d
                            });
                        return (0, t.jsxs)(s, {
                            className: h,
                            variant: d,
                            "data-sentry-element": "Card",
                            "data-sentry-component": "renderCards",
                            "data-sentry-source-file": "Cards.tsx",
                            children: [(0, t.jsxs)(s.Content, {
                                "data-sentry-element": "Card.Content",
                                "data-sentry-source-file": "Cards.tsx",
                                children: [o.image && o.image.src && (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsx)(s.Image, {
                                        withinContainer: o.image.withinContainer,
                                        children: (0, t.jsx)(r.default, {
                                            src: o.image.src ?? "",
                                            alt: o.image.alt ?? "",
                                            fill: !0,
                                            className: x,
                                            quality: 100
                                        })
                                    }), o.image.description && (0, t.jsx)(i.default, {
                                        className: y,
                                        children: o.image.description
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: g,
                                    children: [o.icon && o.icon.src && (0, t.jsx)("div", {
                                        className: "relative mb-5 dark:invert",
                                        children: (0, t.jsx)(r.default, {
                                            src: o.icon.src ?? "",
                                            alt: o.icon.alt ?? "",
                                            quality: 100,
                                            width: 23,
                                            height: 23
                                        })
                                    }), (0, t.jsx)(p, {
                                        className: "loco-text-body-lg-medium mb-4 !font-semibold",
                                        "data-sentry-element": "CardTitleTag",
                                        "data-sentry-source-file": "Cards.tsx",
                                        children: o.title
                                    }), o.description && (0, t.jsx)(i.default, {
                                        className: "loco-text-body mb-4",
                                        children: o.description
                                    }), o.richText && (0, t.jsx)(i.default, {
                                        className: "loco-text-body mb-4 text-gray-600 dark:text-gray-300",
                                        children: o.richText
                                    })]
                                })]
                            }), o.actions && (0, t.jsx)("div", {
                                className: f,
                                children: o.actions.map((e, a) => (0, t.jsx)(n.default, {
                                    href: e.href,
                                    target: e.target ?? "_self",
                                    rounded: !0,
                                    hasArrow: !0,
                                    outlined: 0 === a,
                                    className: 0 === a ? "mr-3" : "mt-4",
                                    variant: 0 === a ? "primary" : "secondary",
                                    "data-link-location": l.trackingLocation.cardsAction,
                                    "data-link-id": `${l.trackingLocation.cardsAction}-${a}`,
                                    children: e.title
                                }, `${e.title}-${a}`))
                            })]
                        }, `card-${u}-${e}`)
                    })
                })]
            })
        })
    }], 164163)
}, 14452, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(722978);
    e.s(["default", 0, ({
        children: e,
        className: r = "",
        tag: l = "div"
    }) => {
        let n = (0, a.default)("loco-text-heading-sm mb-4", r);
        return (0, t.jsx)(l, {
            className: n,
            "data-sentry-element": "Tag",
            "data-sentry-component": "Title",
            "data-sentry-source-file": "Title.tsx",
            children: e
        })
    }], 14452)
}, 809076, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(409781),
        r = e.i(833449),
        l = e.i(722978),
        n = e.i(131581),
        s = e.i(124576),
        i = e.i(210643),
        o = e.i(846891),
        c = e.i(291158),
        d = e.i(78070);
    let m = (0, e.i(425314).default)(() => e.A(104688), {
            loadableGenerated: {
                modules: [425687]
            },
            ssr: !1
        }),
        u = ({
            url: e,
            playing: a = !0,
            isActive: r = !0,
            loop: l = !0,
            muted: n = !0,
            playsinline: s = !0,
            controls: i = !1,
            onReady: o,
            className: c,
            style: d
        }) => (0, t.jsx)(m, {
            url: e,
            playing: r && a,
            loop: l,
            muted: n,
            playsinline: s,
            controls: i,
            width: "100%",
            height: "100%",
            className: c ?? "[&>video]:object-cover",
            style: d,
            onReady: o,
            "data-sentry-element": "ReactPlayer",
            "data-sentry-component": "HlsVideoPlayer",
            "data-sentry-source-file": "HlsVideoPlayer.tsx"
        }),
        p = {
            "top-right": "absolute top-3 right-3 z-20",
            "top-left": "absolute top-3 left-3 z-20",
            "bottom-right": "absolute bottom-3 right-3 z-20",
            "bottom-left": "absolute bottom-3 left-3 z-20",
            center: "absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
        },
        h = {
            "top-right": "xs",
            "top-left": "xs",
            "bottom-right": "xs",
            "bottom-left": "xs",
            center: "md"
        },
        f = ({
            position: e,
            isPlaying: a,
            onToggle: r
        }) => (0, t.jsx)("span", {
            className: p[e],
            "data-sentry-component": "ControlButton",
            "data-sentry-source-file": "BrandfolderVideo.tsx",
            children: (0, t.jsx)(d.default, {
                disableAnimation: !0,
                icon: a ? (0, t.jsx)(i.Pause, {
                    weight: "fill"
                }) : (0, t.jsx)(o.Play, {
                    weight: "fill"
                }),
                iconWeight: "fill",
                variant: "secondary",
                size: h[e],
                onClick: r,
                ariaLabel: a ? "Pause video" : "Play video",
                "data-sentry-element": "Button",
                "data-sentry-source-file": "BrandfolderVideo.tsx"
            })
        }),
        g = ({
            poster: e,
            posterSizes: a,
            posterPriority: n,
            visible: s,
            onClick: i,
            showPlayBadge: d,
            dim: m
        }) => {
            let u = (0, l.default)("absolute inset-0 transition-opacity duration-500", s ? "opacity-100 z-10" : "pointer-events-none opacity-0"),
                p = (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(r.default, {
                        src: e.src,
                        alt: e.alt ?? "",
                        fill: !0,
                        sizes: a,
                        priority: n,
                        className: (0, l.default)("object-cover", m && "brightness-75"),
                        ...e.placeholder ? {
                            placeholder: "blur",
                            blurDataURL: e.placeholder
                        } : {}
                    }), d && (0, t.jsx)("span", {
                        className: "absolute inset-0 flex items-center justify-center",
                        children: (0, t.jsx)("span", {
                            className: "dark:bg-mango-black/90 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black shadow-md transition-transform group-hover:scale-110 group-focus-visible:scale-110 dark:text-white",
                            children: (0, t.jsx)(c.default, {
                                as: o.Play,
                                size: "1.5rem",
                                weight: "fill"
                            })
                        })
                    })]
                });
            return i ? (0, t.jsx)("button", {
                type: "button",
                "aria-label": "Play video",
                className: `group block w-full ${u}`,
                onClick: i,
                children: p
            }) : (0, t.jsx)("div", {
                className: u,
                "data-sentry-component": "PosterOverlay",
                "data-sentry-source-file": "BrandfolderVideo.tsx",
                children: p
            })
        };
    e.s(["default", 0, ({
        src: e,
        mode: r = "click-to-play",
        poster: l,
        posterSizes: i = "100vw",
        posterPriority: o = !1,
        controls: c,
        isActive: d = !0,
        onPlayingChange: m,
        onReady: p,
        className: h
    }) => {
        let x = (0, a.useRef)(null),
            y = (0, n.useInView)(x, {
                once: !0
            }),
            b = (0, s.useReducedMotion)(),
            v = "click-to-play" === r,
            j = "autoplay" === r,
            [A, E] = (0, a.useState)(j),
            [N, C] = (0, a.useState)(!1),
            [w, k] = (0, a.useState)(j),
            M = e => {
                E(e), e && k(!0), m?.(e)
            },
            V = v ? A : y && !b,
            P = !!l?.src && !(N && w),
            Z = c ? "string" == typeof c ? c : A ? c.playing : c.paused : "none",
            H = v ? () => M(!0) : void 0;
        return (0, t.jsxs)("div", {
            ref: x,
            className: h ?? "relative aspect-video w-full overflow-hidden rounded-2xl bg-mango-black",
            "data-sentry-component": "BrandfolderVideo",
            "data-sentry-source-file": "BrandfolderVideo.tsx",
            children: [V && (0, t.jsx)(u, {
                url: e,
                isActive: d,
                playing: A,
                loop: !v,
                muted: !v,
                playsinline: !v,
                controls: v,
                onReady: () => {
                    C(!0), p?.()
                }
            }), l?.src && (0, t.jsx)(g, {
                poster: l,
                posterSizes: i,
                posterPriority: o,
                visible: P,
                onClick: H,
                showPlayBadge: v,
                dim: v
            }), "none" !== Z && N && (0, t.jsx)(f, {
                position: Z,
                isPlaying: A,
                onToggle: () => M(!A)
            })]
        })
    }], 809076)
}, 350747, e => {
    "use strict";
    let t = e.i(809076).default;
    e.s(["default", 0, t])
}, 690019, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(722978),
        r = e.i(541289);
    e.s(["MANGO_DEFAULT_BLOCK_PADDING", 0, {
        top: "pt-[2.75rem]",
        bottom: "pb-[2.75rem]"
    }, "default", 0, ({
        children: e,
        className: l,
        style: n,
        theme: s = "light",
        padding: i,
        defaultBlockPadding: o,
        nested: c = !1,
        container: d
    }) => c ? (0, t.jsx)(t.Fragment, {
        children: e
    }) : (0, t.jsx)(r.ThemeContainer, {
        theme: s,
        padding: i,
        container: d,
        className: (0, a.default)(l, !i?.top && o.top, !i?.bottom && o.bottom),
        style: n,
        "data-sentry-element": "MangoThemeContainer",
        "data-sentry-component": "ThemeContainer",
        "data-sentry-source-file": "ThemeContainer.tsx",
        children: e
    })])
}, 651235, e => {
    "use strict";
    let t = e.i(690019).default;
    e.s(["default", 0, t])
}, 541289, 796573, e => {
    "use strict";
    var t = function() {
        for (var e, t, a = 0, r = "", l = arguments.length; a < l; a++)(e = arguments[a]) && (t = function e(t) {
            var a, r, l = "";
            if ("string" == typeof t || "number" == typeof t) l += t;
            else if ("object" == typeof t)
                if (Array.isArray(t)) {
                    var n = t.length;
                    for (a = 0; a < n; a++) t[a] && (r = e(t[a])) && (l && (l += " "), l += r)
                } else
                    for (r in t) t[r] && (l && (l += " "), l += r);
            return l
        }(e)) && (r && (r += " "), r += t);
        return r
    };
    e.s(["default", 0, t], 796573);
    let a = {
            none: "mango:pt-0",
            xs: "mango:pt-6 mango:md:pt-8",
            sm: "mango:pt-11 mango:md:pt-20",
            md: "mango:pt-16 mango:md:pt-37",
            lg: "mango:pt-24 mango:md:pt-45"
        },
        r = {
            none: "mango:pb-0",
            xs: "mango:pb-6 mango:md:pb-8",
            sm: "mango:pb-11 mango:md:pb-20",
            md: "mango:pb-16 mango:md:pb-37",
            lg: "mango:pb-24 mango:md:pb-45"
        },
        l = {
            xs: "mango:container-xs",
            sm: "mango:container-sm",
            md: "mango:container-md",
            lg: "mango:container-lg",
            xl: "mango:container-xl"
        };
    var n = e.i(996068),
        s = e.i(785328);
    e.s(["ThemeContainer", 0, ({
        children: e,
        className: i,
        style: o,
        theme: c = "light",
        padding: d,
        container: m
    }) => {
        let u = t(d?.top && a[d.top], d?.bottom && r[d.bottom]),
            p = m ? (0, s.jsx)("div", {
                className: l[m],
                children: e
            }) : e;
        return (0, s.jsx)("section", {
            className: t({
                dark: "dark" === c
            }),
            children: (0, s.jsx)(n.MangoThemeProvider, {
                theme: c,
                children: (0, s.jsx)("div", {
                    className: t(i, u),
                    style: o,
                    children: p
                })
            })
        })
    }], 541289)
}]);

//# debugId=8d65a5dd-b994-ef04-e28b-657665f9b23b