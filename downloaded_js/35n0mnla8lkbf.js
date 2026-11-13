;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "1a81b733-1e3e-442c-dc39-b1805d737a12")
    } catch (e) {}
}();
(() => {
    "use strict";
    (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 694983, e => {
        var a = e.i(230452),
            t = e.i(712598),
            l = e.i(722978),
            n = e.i(691156),
            r = e.i(131564);
        let o = ({
            title: e,
            faqs: t,
            blockKey: o,
            theme: d
        }) => {
            let i = (0, l.U)("pb-28", {
                "dark bg-black": "dark" === d
            });
            return (0, a.jsxs)("section", {
                className: i,
                "data-sentry-component": "Faq",
                "data-sentry-source-file": "Faq.tsx",
                children: [(0, a.jsx)(r.f, {
                    title: e,
                    "data-sentry-element": "TitleDescriptionBlock",
                    "data-sentry-source-file": "Faq.tsx"
                }), (0, a.jsx)("div", {
                    className: "container grid gap-1",
                    children: t?.map((t, l) => (0, a.jsx)(n.f, {
                        title: t.question,
                        blockKey: `${o}-${e}-${l}`,
                        "data-sentry-element": "Accordion",
                        "data-sentry-component": "renderFaqs",
                        "data-sentry-source-file": "Faq.tsx",
                        children: t.answer
                    }, `faq-${e}-${l}`))
                })]
            })
        };
        e.s(["f", 0, ({
            title: e,
            faqs: l,
            blockKey: n,
            isHidden: r,
            theme: d
        }) => (0, a.jsx)(a.Fragment, {
            children: !r && (0, a.jsx)(o, {
                theme: "dark" === d ? "dark" : "light",
                title: e,
                faqs: l?.map(e => ({
                    question: e.question,
                    answer: (0, a.jsx)(t.f, {
                        value: e.answer
                    })
                })),
                blockKey: n
            })
        })], 694983)
    }, 339860, e => {
        var a = e.i(312591);
        let t = (0, a.default)(() => e.A(966746), {
                loadableGenerated: {
                    modules: [970287]
                }
            }),
            l = (0, a.default)(() => e.A(214974), {
                loadableGenerated: {
                    modules: [721223]
                }
            }),
            n = (0, a.default)(() => e.A(291172), {
                loadableGenerated: {
                    modules: [576717]
                }
            }),
            r = (0, a.default)(() => e.A(307596), {
                loadableGenerated: {
                    modules: [678729]
                }
            }),
            o = (0, a.default)(() => e.A(593549), {
                loadableGenerated: {
                    modules: [867829]
                }
            }),
            d = (0, a.default)(() => e.A(460475), {
                loadableGenerated: {
                    modules: [132365]
                }
            }),
            i = (0, a.default)(() => e.A(664894), {
                loadableGenerated: {
                    modules: [615890]
                }
            }),
            m = (0, a.default)(() => e.A(707796), {
                loadableGenerated: {
                    modules: [262635]
                }
            }),
            s = (0, a.default)(() => e.A(964262), {
                loadableGenerated: {
                    modules: [572451]
                }
            }),
            c = (0, a.default)(() => e.A(517906), {
                loadableGenerated: {
                    modules: [917028]
                }
            }),
            u = (0, a.default)(() => e.A(736617), {
                loadableGenerated: {
                    modules: [392684]
                }
            }),
            g = (0, a.default)(() => e.A(914232), {
                loadableGenerated: {
                    modules: [841227]
                }
            }),
            f = (0, a.default)(() => e.A(712703), {
                loadableGenerated: {
                    modules: [539785]
                }
            }),
            p = (0, a.default)(() => e.A(207469), {
                loadableGenerated: {
                    modules: [532988]
                }
            }),
            h = (0, a.default)(() => e.A(222919), {
                loadableGenerated: {
                    modules: [242243]
                }
            }),
            y = (0, a.default)(() => e.A(271798), {
                loadableGenerated: {
                    modules: [319869]
                }
            }),
            E = (0, a.default)(() => e.A(876569), {
                loadableGenerated: {
                    modules: [184427]
                }
            }),
            A = (0, a.default)(() => e.A(405160), {
                loadableGenerated: {
                    modules: [623207]
                }
            }),
            H = (0, a.default)(() => e.A(822623), {
                loadableGenerated: {
                    modules: [89635]
                }
            }),
            M = (0, a.default)(() => e.A(409101), {
                loadableGenerated: {
                    modules: [16479]
                }
            }),
            V = (0, a.default)(() => e.A(775896), {
                loadableGenerated: {
                    modules: [369446]
                }
            }),
            b = (0, a.default)(() => e.A(818042), {
                loadableGenerated: {
                    modules: [531058]
                }
            }),
            L = (0, a.default)(() => e.A(520526), {
                loadableGenerated: {
                    modules: [408657]
                }
            }),
            Z = (0, a.default)(() => e.A(254009), {
                loadableGenerated: {
                    modules: [877873]
                }
            }),
            x = (0, a.default)(() => e.A(976780), {
                loadableGenerated: {
                    modules: [355279]
                }
            }),
            v = (0, a.default)(() => e.A(248625), {
                loadableGenerated: {
                    modules: [63496]
                }
            }),
            w = (0, a.default)(() => e.A(10200), {
                loadableGenerated: {
                    modules: [122289]
                }
            }),
            F = (0, a.default)(() => e.A(217368), {
                loadableGenerated: {
                    modules: [354884]
                }
            }),
            k = (0, a.default)(() => e.A(879742), {
                loadableGenerated: {
                    modules: [494131]
                }
            }),
            z = (0, a.default)(() => e.A(376659), {
                loadableGenerated: {
                    modules: [735556]
                }
            });
        e.s(["LazyAccordion", 0, M, "LazyAnimatedOutlines", 0, V, "LazyBentoBox", 0, b, "LazyChartPicker", 0, L, "LazyContentHeader", 0, Z, "LazyDynamicAccordion", 0, x, "LazyEvents", 0, v, "LazyHeadlinerBlock", 0, t, "LazyMangoAlertBlock", 0, l, "LazyMangoAlternateNavigationBlock", 0, n, "LazyMangoCallToActionBlock", 0, r, "LazyMangoCardsClient", 0, o, "LazyMangoCarouselBlock", 0, d, "LazyMangoCommercePortableText", 0, H, "LazyMangoComparisonTableBlock", 0, i, "LazyMangoContactBlock", 0, m, "LazyMangoFeatureListBlock", 0, s, "LazyMangoFeedbackBlock", 0, c, "LazyMangoFilteredContentGridClient", 0, u, "LazyMangoFullWidthBlock", 0, g, "LazyMangoHeroBlockClient", 0, A, "LazyMangoMarkdownTableBlock", 0, f, "LazyMangoMediaBlock", 0, p, "LazyMangoPricingCardsBlock", 0, h, "LazyMangoReportMenuBlock", 0, y, "LazyMangoSpotlightBlock", 0, E, "LazySpeakerCardGrid", 0, w, "LazyStatement", 0, F, "LazyTableOfContent", 0, k, "LazyTestimonials", 0, z])
    }, 555959, e => {
        let a = (0, e.i(312591).default)(() => e.A(246259), {
            loadableGenerated: {
                modules: [88021]
            }
        });
        e.s(["default", 0, a])
    }, 527232, e => {
        var a = e.i(230452),
            t = e.i(491902),
            l = e.i(266828);
        e.s(["default", 0, ({
            tracking: e,
            ...n
        }) => (0, a.jsx)(t.default, {
            ...n,
            "data-link-location": e.location,
            "data-link-id": e.id,
            "data-link-url": (0, l.f)(),
            "data-sentry-element": "Link",
            "data-sentry-component": "MangoTrackedLink",
            "data-sentry-source-file": "MangoTrackedLink.tsx"
        })])
    }, 893527, e => {
        var a = e.i(516830),
            t = e.i(844929);
        let l = new Map([
                ["bold", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"
                }))],
                ["duotone", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M216,128l-72,72V56Z",
                    opacity: "0.2"
                }), a.createElement("path", {
                    d: "M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"
                }))],
                ["fill", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"
                }))],
                ["light", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"
                }))],
                ["regular", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
                }))],
                ["thin", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"
                }))]
            ]),
            n = a.forwardRef((e, n) => a.createElement(t.f, {
                ref: n,
                ...e,
                weights: l
            }));
        n.displayName = "ArrowRightIcon", e.s(["ArrowRight", 0, n, "ArrowRightIcon", 0, n], 893527)
    }, 973410, e => {
        var a = e.i(516830),
            t = e.i(844929);
        let l = new Map([
                ["bold", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"
                }))],
                ["duotone", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M208,96l-80,80L48,96Z",
                    opacity: "0.2"
                }), a.createElement("path", {
                    d: "M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"
                }))],
                ["fill", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"
                }))],
                ["light", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"
                }))],
                ["regular", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"
                }))],
                ["thin", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"
                }))]
            ]),
            n = a.forwardRef((e, n) => a.createElement(t.f, {
                ref: n,
                ...e,
                weights: l
            }));
        n.displayName = "CaretDownIcon", e.s(["CaretDown", 0, n, "CaretDownIcon", 0, n], 973410)
    }, 684150, e => {
        var a = e.i(516830),
            t = e.i(844929);
        let l = new Map([
                ["bold", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"
                }))],
                ["duotone", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M208,160H48l80-80Z",
                    opacity: "0.2"
                }), a.createElement("path", {
                    d: "M213.66,154.34l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,48,168H208a8,8,0,0,0,5.66-13.66ZM67.31,152,128,91.31,188.69,152Z"
                }))],
                ["fill", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M215.39,163.06A8,8,0,0,1,208,168H48a8,8,0,0,1-5.66-13.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,215.39,163.06Z"
                }))],
                ["light", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M212.24,164.24a6,6,0,0,1-8.48,0L128,88.49,52.24,164.24a6,6,0,0,1-8.48-8.48l80-80a6,6,0,0,1,8.48,0l80,80A6,6,0,0,1,212.24,164.24Z"
                }))],
                ["regular", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"
                }))],
                ["thin", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M210.83,162.83a4,4,0,0,1-5.66,0L128,85.66,50.83,162.83a4,4,0,0,1-5.66-5.66l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,210.83,162.83Z"
                }))]
            ]),
            n = a.forwardRef((e, n) => a.createElement(t.f, {
                ref: n,
                ...e,
                weights: l
            }));
        n.displayName = "CaretUpIcon", e.s(["CaretUp", 0, n, "CaretUpIcon", 0, n], 684150)
    }, 554206, e => {
        var a = e.i(516830),
            t = e.i(844929);
        let l = new Map([
                ["bold", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M200,28H160a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20h40a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28Zm-4,176H164V52h32ZM96,28H56A20,20,0,0,0,36,48V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V48A20,20,0,0,0,96,28ZM92,204H60V52H92Z"
                }))],
                ["duotone", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M208,48V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h40A8,8,0,0,1,208,48ZM96,40H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V48A8,8,0,0,0,96,40Z",
                    opacity: "0.2"
                }), a.createElement("path", {
                    d: "M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"
                }))],
                ["fill", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"
                }))],
                ["light", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M200,34H160a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14h40a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm2,174a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2ZM96,34H56A14,14,0,0,0,42,48V208a14,14,0,0,0,14,14H96a14,14,0,0,0,14-14V48A14,14,0,0,0,96,34Zm2,174a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H96a2,2,0,0,1,2,2Z"
                }))],
                ["regular", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"
                }))],
                ["thin", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M200,36H160a12,12,0,0,0-12,12V208a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm4,172a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4ZM96,36H56A12,12,0,0,0,44,48V208a12,12,0,0,0,12,12H96a12,12,0,0,0,12-12V48A12,12,0,0,0,96,36Zm4,172a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H96a4,4,0,0,1,4,4Z"
                }))]
            ]),
            n = a.forwardRef((e, n) => a.createElement(t.f, {
                ref: n,
                ...e,
                weights: l
            }));
        n.displayName = "PauseIcon", e.s(["Pause", 0, n, "PauseIcon", 0, n], 554206)
    }, 980986, e => {
        var a = e.i(516830),
            t = e.i(844929);
        let l = new Map([
                ["bold", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M234.49,111.07,90.41,22.94A20,20,0,0,0,60,39.87V216.13a20,20,0,0,0,30.41,16.93l144.08-88.13a19.82,19.82,0,0,0,0-33.86ZM84,208.85V47.15L216.16,128Z"
                }))],
                ["duotone", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M228.23,134.69,84.15,222.81A8,8,0,0,1,72,216.12V39.88a8,8,0,0,1,12.15-6.69l144.08,88.12A7.82,7.82,0,0,1,228.23,134.69Z",
                    opacity: "0.2"
                }), a.createElement("path", {
                    d: "M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"
                }))],
                ["fill", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"
                }))],
                ["light", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M231.36,116.19,87.28,28.06a14,14,0,0,0-14.18-.27A13.69,13.69,0,0,0,66,39.87V216.13a13.69,13.69,0,0,0,7.1,12.08,14,14,0,0,0,14.18-.27l144.08-88.13a13.82,13.82,0,0,0,0-23.62Zm-6.26,13.38L81,217.7a2,2,0,0,1-2.06,0,1.78,1.78,0,0,1-1-1.61V39.87a1.78,1.78,0,0,1,1-1.61A2.06,2.06,0,0,1,80,38a2,2,0,0,1,1,.31L225.1,126.43a1.82,1.82,0,0,1,0,3.14Z"
                }))],
                ["regular", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"
                }))],
                ["thin", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M230.32,117.9,86.24,29.79a11.91,11.91,0,0,0-12.17-.23A11.71,11.71,0,0,0,68,39.89V216.11a11.71,11.71,0,0,0,6.07,10.33,11.91,11.91,0,0,0,12.17-.23L230.32,138.1a11.82,11.82,0,0,0,0-20.2Zm-4.18,13.37L82.06,219.39a4,4,0,0,1-4.07.07,3.77,3.77,0,0,1-2-3.35V39.89a3.77,3.77,0,0,1,2-3.35,4,4,0,0,1,4.07.07l144.08,88.12a3.8,3.8,0,0,1,0,6.54Z"
                }))]
            ]),
            n = a.forwardRef((e, n) => a.createElement(t.f, {
                ref: n,
                ...e,
                weights: l
            }));
        n.displayName = "PlayIcon", e.s(["Play", 0, n, "PlayIcon", 0, n], 980986)
    }, 4795, e => {
        var a = e.i(516830),
            t = e.i(844929);
        let l = new Map([
                ["bold", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"
                }))],
                ["duotone", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
                    opacity: "0.2"
                }), a.createElement("path", {
                    d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
                }))],
                ["fill", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
                }))],
                ["light", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"
                }))],
                ["regular", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
                }))],
                ["thin", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"
                }))]
            ]),
            n = a.forwardRef((e, n) => a.createElement(t.f, {
                ref: n,
                ...e,
                weights: l
            }));
        n.displayName = "XIcon", e.s(["X", 0, n, "XIcon", 0, n], 4795)
    }, 717714, e => {
        var a = e.i(876009),
            t = e.i(494004),
            l = e.i(516830);
        e.s(["f", 0, function() {
            a.E.current || (0, t.f)();
            let [e] = (0, l.useState)(a.d.current);
            return e
        }])
    }, 825455, e => {
        var a = e.i(516830),
            t = e.i(513038);
        let l = {
            some: 0,
            all: 1
        };
        e.s(["f", 0, function(e, {
            root: n,
            margin: r,
            amount: o,
            once: d = !1,
            initial: i = !1
        } = {}) {
            let [m, s] = (0, a.useState)(i);
            return (0, a.useEffect)(() => {
                if (!e.current || d && m) return;
                let a = {
                    root: n && n.current || void 0,
                    margin: r,
                    amount: o
                };
                return function(e, a, {
                    root: n,
                    margin: r,
                    amount: o = "some"
                } = {}) {
                    let d = (0, t.f)(e),
                        i = new WeakMap,
                        m = new IntersectionObserver(e => {
                            e.forEach(e => {
                                let t = i.get(e.target);
                                if (!!t !== e.isIntersecting)
                                    if (e.isIntersecting) {
                                        let t = a(e.target, e);
                                        "function" == typeof t ? i.set(e.target, t) : m.unobserve(e.target)
                                    } else "function" == typeof t && (t(e), i.delete(e.target))
                            })
                        }, {
                            root: n,
                            rootMargin: r,
                            threshold: "number" == typeof o ? o : l[o]
                        });
                    return d.forEach(e => m.observe(e)), () => m.disconnect()
                }(e.current, () => (s(!0), d ? void 0 : () => s(!1)), a)
            }, [n, e, r, d, o]), m
        }], 825455)
    }, 494004, 876009, e => {
        let a = {
                current: null
            },
            t = {
                current: !1
            };
        e.s(["E", 0, t, "d", 0, a], 876009);
        let l = "u" > typeof window;
        e.s(["f", 0, function() {
            if (t.current = !0, l)
                if (window.matchMedia) {
                    let e = window.matchMedia("(prefers-reduced-motion)"),
                        t = () => a.current = e.matches;
                    e.addEventListener("change", t), t()
                } else a.current = !1
        }], 494004)
    }, 513038, e => {
        e.s(["f", 0, function(e, a, t) {
            if (null == e) return [];
            if (e instanceof EventTarget) return [e];
            if ("string" == typeof e) {
                let l = document;
                a && (l = a.current);
                let n = t?.[e] ?? l.querySelectorAll(e);
                return n ? Array.from(n) : []
            }
            return Array.from(e).filter(e => null != e)
        }])
    }, 880749, e => {
        var a = e.i(230452),
            t = e.i(516830),
            l = e.i(26494),
            n = e.i(722978),
            r = e.i(825455),
            o = e.i(717714),
            d = e.i(554206),
            i = e.i(980986),
            m = e.i(514957),
            s = e.i(78070);
        let c = (0, e.i(312591).default)(() => e.A(297223), {
                loadableGenerated: {
                    modules: [238774]
                },
                ssr: !1
            }),
            u = ({
                url: e,
                playing: t = !0,
                isActive: l = !0,
                loop: n = !0,
                muted: r = !0,
                playsinline: o = !0,
                controls: d = !1,
                onReady: i,
                onPlaying: m,
                className: s,
                style: u
            }) => (0, a.jsx)(c, {
                src: e,
                playing: l && t,
                loop: n,
                muted: r,
                playsInline: o,
                controls: d,
                width: "100%",
                height: "100%",
                className: s ?? "object-cover [--media-object-fit:cover]",
                style: u,
                onReady: i,
                onPlaying: m && (e => {
                    let a = e.currentTarget;
                    m(a.nativeEl ?? a)
                }),
                "data-sentry-element": "ReactPlayer",
                "data-sentry-component": "HlsVideoPlayer",
                "data-sentry-source-file": "HlsVideoPlayer.tsx"
            }),
            g = {
                "top-right": "absolute top-3 right-3 z-20",
                "top-left": "absolute top-3 left-3 z-20",
                "bottom-right": "absolute bottom-3 right-3 z-20",
                "bottom-left": "absolute bottom-3 left-3 z-20",
                center: "absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
            },
            f = {
                "top-right": "xs",
                "top-left": "xs",
                "bottom-right": "xs",
                "bottom-left": "xs",
                center: "md"
            },
            p = ({
                position: e,
                isPlaying: t,
                onToggle: l
            }) => (0, a.jsx)("span", {
                className: g[e],
                "data-sentry-component": "ControlButton",
                "data-sentry-source-file": "BrandfolderVideo.tsx",
                children: (0, a.jsx)(s.f, {
                    disableAnimation: !0,
                    icon: t ? (0, a.jsx)(d.Pause, {
                        weight: "fill"
                    }) : (0, a.jsx)(i.Play, {
                        weight: "fill"
                    }),
                    variant: "secondary",
                    size: f[e],
                    onClick: l,
                    ariaLabel: t ? "Pause video" : "Play video",
                    "data-sentry-element": "Button",
                    "data-sentry-source-file": "BrandfolderVideo.tsx"
                })
            }),
            h = ({
                poster: e,
                posterSizes: t,
                posterPriority: r,
                visible: o,
                onClick: d,
                showPlayBadge: s,
                dim: c
            }) => {
                let u = (0, n.U)("absolute inset-0 transition-opacity duration-500", o ? "opacity-100 z-10" : "pointer-events-none opacity-0"),
                    g = (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(l.default, {
                            src: e.src,
                            alt: e.alt ?? "",
                            fill: !0,
                            sizes: t,
                            priority: r,
                            className: (0, n.U)("object-cover", c && "brightness-75"),
                            ...e.placeholder ? {
                                placeholder: "blur",
                                blurDataURL: e.placeholder
                            } : {}
                        }), s && (0, a.jsx)("span", {
                            className: "absolute inset-0 flex items-center justify-center",
                            children: (0, a.jsx)("span", {
                                className: "dark:bg-mango-black/90 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black shadow-md transition-transform group-hover:scale-110 group-focus-visible:scale-110 dark:text-white",
                                children: (0, a.jsx)(m.f, {
                                    as: i.Play,
                                    size: "1.5rem",
                                    weight: "fill"
                                })
                            })
                        })]
                    });
                return d ? (0, a.jsx)("button", {
                    type: "button",
                    "aria-label": "Play video",
                    className: `group block w-full ${u}`,
                    onClick: d,
                    children: g
                }) : (0, a.jsx)("div", {
                    className: u,
                    "data-sentry-component": "PosterOverlay",
                    "data-sentry-source-file": "BrandfolderVideo.tsx",
                    children: g
                })
            };
        e.s(["default", 0, ({
            src: e,
            mode: l = "click-to-play",
            poster: n,
            posterSizes: d = "100vw",
            posterPriority: i = !1,
            controls: m,
            isActive: s = !0,
            onPlayingChange: c,
            onReady: g,
            onPlaying: f,
            className: y
        }) => {
            let E = (0, t.useRef)(null),
                A = (0, r.f)(E, {
                    once: !0
                }),
                H = (0, o.f)(),
                M = "click-to-play" === l,
                V = "autoplay" === l,
                [b, L] = (0, t.useState)(V),
                [Z, x] = (0, t.useState)(!1),
                [v, w] = (0, t.useState)(V),
                F = e => {
                    L(e), e && w(!0), c?.(e)
                },
                k = M ? b : A && !H,
                z = !!n?.src && !(Z && v),
                j = m ? "string" == typeof m ? m : b ? m.playing : m.paused : "none",
                C = M ? () => F(!0) : void 0;
            return (0, a.jsxs)("div", {
                ref: E,
                className: y ?? "relative aspect-video w-full overflow-hidden rounded-2xl bg-mango-black",
                "data-sentry-component": "BrandfolderVideo",
                "data-sentry-source-file": "BrandfolderVideo.tsx",
                children: [k && (0, a.jsx)(u, {
                    url: e,
                    isActive: s,
                    playing: b,
                    loop: !M,
                    muted: !M,
                    playsinline: !M,
                    controls: M,
                    onReady: () => {
                        x(!0), g?.()
                    },
                    onPlaying: f
                }), n?.src && (0, a.jsx)(h, {
                    poster: n,
                    posterSizes: d,
                    posterPriority: i,
                    visible: z,
                    onClick: C,
                    showPlayBadge: M,
                    dim: M
                }), "none" !== j && Z && (0, a.jsx)(p, {
                    position: j,
                    isPlaying: b,
                    onToggle: () => F(!b)
                })]
            })
        }], 880749)
    }, 350747, e => {
        let a = e.i(880749).default;
        e.s(["f", 0, a])
    }, 913207, e => {
        let a = (0, e.i(312591).default)(() => e.A(535534), {
            loadableGenerated: {
                modules: [188678]
            }
        });
        e.s(["default", 0, a])
    }, 514957, e => {
        var a = e.i(230452),
            t = e.i(722978);
        e.s(["f", 0, ({
            as: e,
            className: l,
            size: n = "1.5rem",
            weight: r = "regular"
        }) => (0, a.jsx)("div", {
            style: {
                height: n,
                width: n,
                color: "inherit"
            },
            "data-sentry-component": "StaticIcon",
            "data-sentry-source-file": "StaticIcon.tsx",
            children: (0, a.jsx)(e, {
                size: n,
                className: (0, t.U)("text-inherit", l),
                weight: r,
                "data-sentry-element": "AsComponent",
                "data-sentry-source-file": "StaticIcon.tsx"
            })
        })])
    }, 690019, e => {
        var a = e.i(230452),
            t = e.i(722978),
            l = e.i(541289);
        e.s(["m", 0, {
            top: "pt-[2.75rem]",
            bottom: "pb-[2.75rem]"
        }, "U", 0, ({
            children: e,
            className: n,
            style: r,
            theme: o = "light",
            padding: d,
            defaultBlockPadding: i,
            nested: m = !1,
            container: s
        }) => m ? (0, a.jsx)(a.Fragment, {
            children: e
        }) : (0, a.jsx)(l.f, {
            theme: o,
            padding: d,
            container: s,
            className: (0, t.U)(n, !d?.top && i.top, !d?.bottom && i.bottom),
            style: r,
            "data-sentry-element": "MangoThemeContainer",
            "data-sentry-component": "ThemeContainer",
            "data-sentry-source-file": "ThemeContainer.tsx",
            children: e
        })])
    }, 651235, e => {
        let a = e.i(690019).U;
        e.s(["f", 0, a])
    }, 945263, e => {
        var a = e.i(163165),
            t = e.i(838064),
            l = e.i(242042),
            n = e.i(516830);
        let r = new Map([
                ["bold", n.createElement(n.Fragment, null, n.createElement("path", {
                    d: "M216,28H88A12,12,0,0,0,76,40V76H40A12,12,0,0,0,28,88V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V180h36a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28ZM156,204H52V100H156Zm48-48H180V88a12,12,0,0,0-12-12H100V52H204Z"
                }))],
                ["duotone", n.createElement(n.Fragment, null, n.createElement("path", {
                    d: "M216,40V168H168V88H88V40Z",
                    opacity: "0.2"
                }), n.createElement("path", {
                    d: "M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"
                }))],
                ["fill", n.createElement(n.Fragment, null, n.createElement("path", {
                    d: "M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z"
                }))],
                ["light", n.createElement(n.Fragment, null, n.createElement("path", {
                    d: "M216,34H88a6,6,0,0,0-6,6V82H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H168a6,6,0,0,0,6-6V174h42a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34ZM162,210H46V94H162Zm48-48H174V88a6,6,0,0,0-6-6H94V46H210Z"
                }))],
                ["regular", n.createElement(n.Fragment, null, n.createElement("path", {
                    d: "M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"
                }))],
                ["thin", n.createElement(n.Fragment, null, n.createElement("path", {
                    d: "M216,36H88a4,4,0,0,0-4,4V84H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H168a4,4,0,0,0,4-4V172h44a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36ZM164,212H44V92H164Zm48-48H172V88a4,4,0,0,0-4-4H92V44H212Z"
                }))]
            ]),
            o = n.forwardRef((e, a) => n.createElement(l.w, {
                ref: a,
                ...e,
                weights: r
            }));
        o.displayName = "CopyIcon";
        var d = e.i(230452);
        e.s(["CopyCodeButton", 0, function({
            code: e,
            copyLabel: l,
            copiedLabel: r
        }) {
            let [i, m] = (0, n.useState)(!1), [s, c] = (0, n.useState)(!1), u = (0, n.useRef)(void 0), g = (0, n.useRef)(void 0);
            (0, n.useEffect)(() => () => {
                clearTimeout(u.current), clearTimeout(g.current)
            }, []);
            let f = async () => {
                try {
                    await navigator.clipboard.writeText(e)
                } catch {
                    return
                }
                m(!0), c(!1), clearTimeout(g.current), g.current = setTimeout(() => c(!0), 100), clearTimeout(u.current), u.current = setTimeout(() => {
                    m(!1), c(!1)
                }, 2e3)
            };
            return (0, d.jsxs)(d.Fragment, {
                children: [(0, d.jsx)(a.Button, {
                    variant: "outline",
                    size: "sm",
                    "aria-label": l,
                    iconLeft: i ? (0, d.jsx)(t.f, {
                        size: 12,
                        "aria-hidden": !0
                    }) : (0, d.jsx)(o, {
                        size: 12,
                        "aria-hidden": !0
                    }),
                    onPress: f
                }), (0, d.jsx)("span", {
                    role: "status",
                    className: "mango:sr-only",
                    children: s ? r : ""
                })]
            })
        }], 945263)
    }, 541289, e => {
        var a = e.i(796573);
        let t = {
                none: "mango:pt-0",
                xs: "mango:pt-6 mango:md:pt-8",
                sm: "mango:pt-11 mango:md:pt-20",
                md: "mango:pt-16 mango:md:pt-37",
                lg: "mango:pt-24 mango:md:pt-45"
            },
            l = {
                none: "mango:pb-0",
                xs: "mango:pb-6 mango:md:pb-8",
                sm: "mango:pb-11 mango:md:pb-20",
                md: "mango:pb-16 mango:md:pb-37",
                lg: "mango:pb-24 mango:md:pb-45"
            },
            n = {
                xs: "mango:container-xs",
                sm: "mango:container-sm",
                md: "mango:container-md",
                lg: "mango:container-lg",
                xl: "mango:container-xl"
            };
        var r = e.i(996068),
            o = e.i(230452);
        e.s(["f", 0, ({
            children: e,
            className: d,
            style: i,
            theme: m = "light",
            padding: s,
            container: c
        }) => {
            let u = (0, a.f)(s?.top && t[s.top], s?.bottom && l[s.bottom]),
                g = c ? (0, o.jsx)("div", {
                    className: n[c],
                    children: e
                }) : e;
            return (0, o.jsx)("section", {
                className: (0, a.f)({
                    dark: "dark" === m
                }),
                children: (0, o.jsx)(r.MangoThemeProvider, {
                    theme: m,
                    children: (0, o.jsx)("div", {
                        className: (0, a.f)(d, u),
                        style: i,
                        children: g
                    })
                })
            })
        }], 541289)
    }, 838064, e => {
        var a = e.i(242042),
            t = e.i(516830);
        let l = new Map([
                ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                    d: "M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"
                }))],
                ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                    d: "M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",
                    opacity: "0.2"
                }), t.createElement("path", {
                    d: "M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"
                }))],
                ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                    d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"
                }))],
                ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                    d: "M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z"
                }))],
                ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                    d: "M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"
                }))],
                ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                    d: "M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z"
                }))]
            ]),
            n = t.forwardRef((e, n) => t.createElement(a.w, {
                ref: n,
                ...e,
                weights: l
            }));
        n.displayName = "CheckIcon", e.s(["f", 0, n], 838064)
    }])
})();

//# debugId=1a81b733-1e3e-442c-dc39-b1805d737a12