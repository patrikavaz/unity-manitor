(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 123849, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(722978),
        l = e.i(805518);
    let r = ({
            title: e,
            content: r,
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
                }), (0, t.jsx)(l.default, {
                    className: s,
                    children: r
                })]
            })
        },
        n = ({
            title: e = "",
            descriptions: a = [],
            treshold: l,
            pricing: n
        }) => (0, t.jsxs)("div", {
            className: "flex h-full flex-col justify-between rounded-lg bg-gray-100 p-6 lg:w-96 dark:bg-gray-800",
            children: [(0, t.jsxs)("div", {
                className: "grow pb-8",
                children: [(0, t.jsx)("div", {
                    className: "loco-text-heading-sm mb-8 text-black dark:text-white",
                    children: e
                }), (0, t.jsx)("div", {
                    children: a?.map((a, l) => (0, t.jsx)("div", {
                        className: "flex flex-col pb-8",
                        children: (0, t.jsx)(r, {
                            title: a.title,
                            content: a.content,
                            listStyle: a.listStyle
                        })
                    }, `card-plan-${e}-${l}`))
                }), (0, t.jsx)(r, {
                    title: l?.title || "",
                    content: l?.content || ""
                })]
            }), (0, t.jsx)("div", {
                className: "min-h-[6rem]",
                children: (0, t.jsx)(r, {
                    title: n?.title || "",
                    content: n?.content || ""
                })
            })]
        }),
        s = ({
            theme: e = "light",
            cards: l = []
        }) => {
            let r = (0, a.default)({
                dark: "dark" === e
            });
            return (0, t.jsx)("section", {
                className: r,
                children: (0, t.jsx)("div", {
                    className: "bg-white pt-8 pb-20 dark:bg-black",
                    children: (0, t.jsx)("div", {
                        className: "container flex flex-col flex-wrap gap-2 lg:flex-row lg:justify-center",
                        children: l.map((e, a) => (0, t.jsx)("div", {
                            children: (0, t.jsx)(n, {
                                ...e
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
        cards: l
    }) => e ? null : (0, t.jsx)(s, {
        theme: "dark" === a ? "dark" : "light",
        cards: l.map(e => ({
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
        }))
    })], 123849)
}, 694983, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(722990),
        l = e.i(722978),
        r = e.i(691156),
        n = e.i(131564);
    let s = ({
        title: e,
        faqs: a,
        blockKey: s,
        theme: i
    }) => {
        let c = (0, l.default)("pb-28", {
            "dark bg-black": "dark" === i
        });
        return (0, t.jsxs)("section", {
            className: c,
            children: [(0, t.jsx)(n.default, {
                title: e
            }), (0, t.jsx)("div", {
                className: "container grid gap-1",
                children: a?.map((a, l) => (0, t.jsx)(r.default, {
                    title: a.question,
                    blockKey: `${s}-${e}-${l}`,
                    children: a.answer
                }, `faq-${e}-${l}`))
            })]
        })
    };
    e.s(["default", 0, ({
        title: e,
        faqs: l,
        blockKey: r,
        isHidden: n,
        theme: i
    }) => (0, t.jsx)(t.Fragment, {
        children: !n && (0, t.jsx)(s, {
            theme: "dark" === i ? "dark" : "light",
            title: e,
            faqs: l?.map(e => ({
                question: e.question,
                answer: (0, t.jsx)(a.PortableText, {
                    value: e.answer
                })
            })),
            blockKey: r
        })
    })], 694983)
}, 129824, e => {
    "use strict";
    e.s(["DATA_REQUEST", 0, "/data-request", "DEFAULT_PAGES_NO_MT_BANNER", 0, ["/made-with-unity"], "L1_PAGES_NO_MT_BANNER", 0, ["/our-company", "/community", "/industry", "/use-cases", "/releases/unity-6"], "PRODUCTS_PAGES_NO_MT_BANNER", 0, ["/products"], "PRODUCTS_PRODUCTS_PAGES_NO_MT_BANNER", 0, ["/products/unity-pro", "/products/unity-engine", "/products/compare-plans", "/products/compare-plans/unity-cloud"], "RESOURCES_PAGES_NO_MT_BANNER", 0, ["/resources"], "SOLUTIONS_PAGES_NO_MT_BANNER", 0, ["/download", "/roadmap", "/pages/pro-free-trial", "/games", "/solutions", "/developer-tools", "/how-to", "/learn", "/learn/get-started", "/releases/lts-vs-tech-stream"]])
}, 246916, e => {
    "use strict";
    var t = e.i(393335),
        a = e.i(833200),
        l = e.i(740041);
    e.s(["useMTBanner", 0, function(e, r = []) {
        var n, s;
        let i, c, o, d, m, u = (0, t.usePathname)(),
            p = (0, a.useLocale)(),
            h = p !== l.defaultLocale ? u.replace(`/${p}`, "") : u,
            g = "" === h || "/" === h || h.startsWith("/home-experiment");
        return {
            shouldDisplayMTBanner: p !== l.defaultLocale && e?.translationType === "MT" && !g && !r.includes(h),
            updatedBlocks: (n = e.blocks ?? [], s = e.machineTranslationDisclaimer, i = n.reduce((e, t, a) => ["hero", "alternateNavigation", "headliner"].includes(t._type) ? a : e, -1), c = [...n], o = c[i + 1]?._type === "alternateNavigationAnchor" || c[i + 1]?._type === "anchorButton" ? c[i + 2] : c[i + 1], d = o?.theme ?? null, m = {
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
            }, -1 === i ? c.unshift(m) : c.splice(i + 1, 0, m), c),
            redirectPathName: h
        }
    }], 246916)
}, 106984, e => {
    "use strict";
    var t = e.i(409781),
        a = e.i(848662);
    let l = new Map([
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
        r = t.forwardRef((e, r) => t.createElement(a.default, {
            ref: r,
            ...e,
            weights: l
        }));
    r.displayName = "CaretDownIcon", e.s(["CaretDown", 0, r, "CaretDownIcon", 0, r], 106984)
}, 729e3, e => {
    "use strict";
    var t = e.i(409781),
        a = e.i(848662);
    let l = new Map([
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
        r = t.forwardRef((e, r) => t.createElement(a.default, {
            ref: r,
            ...e,
            weights: l
        }));
    r.displayName = "CaretUpIcon", e.s(["CaretUp", 0, r, "CaretUpIcon", 0, r], 729e3)
}, 210643, e => {
    "use strict";
    var t = e.i(409781),
        a = e.i(848662);
    let l = new Map([
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
        r = t.forwardRef((e, r) => t.createElement(a.default, {
            ref: r,
            ...e,
            weights: l
        }));
    r.displayName = "PauseIcon", e.s(["Pause", 0, r, "PauseIcon", 0, r], 210643)
}, 846891, e => {
    "use strict";
    var t = e.i(409781),
        a = e.i(848662);
    let l = new Map([
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
        r = t.forwardRef((e, r) => t.createElement(a.default, {
            ref: r,
            ...e,
            weights: l
        }));
    r.displayName = "PlayIcon", e.s(["Play", 0, r, "PlayIcon", 0, r], 846891)
}, 70909, e => {
    e.v(t => Promise.all(["static/chunks/2wz63vlu6w-_f.js"].map(t => e.l(t))).then(() => t(376839)))
}, 440574, e => {
    e.v(t => Promise.all(["static/chunks/171yqzhl-22he.js"].map(t => e.l(t))).then(() => t(33857)))
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
        for (var a = -1, l = null == e ? 0 : e.length; ++a < l && !1 !== t(e[a], a, e););
        return e
    }
}, 317508, (e, t, a) => {
    var l = e.r(830747),
        r = e.r(599568),
        n = e.r(240046);
    t.exports = r ? function(e, t) {
        return r(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: l(t),
            writable: !0
        })
    } : n
}, 599568, (e, t, a) => {
    var l = e.r(581511);
    t.exports = function() {
        try {
            var e = l(Object, "defineProperty");
            return e({}, "", {}), e
        } catch (e) {}
    }()
}, 860059, (e, t, a) => {
    var l = /^(?:0|[1-9]\d*)$/;
    t.exports = function(e, t) {
        var a = typeof e;
        return !!(t = null == t ? 0x1fffffffffffff : t) && ("number" == a || "symbol" != a && l.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
}, 184414, (e, t, a) => {
    var l = e.r(865799),
        r = Math.max;
    t.exports = function(e, t, a) {
        return t = r(void 0 === t ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, s = -1, i = r(n.length - t, 0), c = Array(i); ++s < i;) c[s] = n[t + s];
                s = -1;
                for (var o = Array(t + 1); ++s < t;) o[s] = n[s];
                return o[t] = a(c), l(e, this, o)
            }
    }
}, 108749, (e, t, a) => {
    var l = e.r(317508);
    t.exports = e.r(911818)(l)
}, 911818, (e, t, a) => {
    var l = Date.now;
    t.exports = function(e) {
        var t = 0,
            a = 0;
        return function() {
            var r = l(),
                n = 16 - (r - a);
            if (a = r, n > 0) {
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
    e.v(t => Promise.all(["static/chunks/2taw8vd-14eeb.js"].map(t => e.l(t))).then(() => t(425687)))
}, 574228, e => {
    e.v(t => Promise.all(["static/chunks/1vlziwbw3up-b.js"].map(t => e.l(t))).then(() => t(10770)))
}, 164163, 596889, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(722978),
        l = e.i(833449),
        r = e.i(825610),
        n = e.i(749583);
    let s = ({
        children: e,
        className: l = "",
        variant: r = "default"
    }) => {
        let n = (0, a.clsx)({
            default: "bg-white dark:bg-gray-900 rounded-xl",
            padded: "p-6 bg-white dark:bg-gray-900 rounded-xl",
            transparent: ""
        } [r], l);
        return (0, t.jsx)("div", {
            className: n,
            children: e
        })
    };
    s.Content = ({
        children: e,
        className: a = "w-full"
    }) => (0, t.jsx)("div", {
        className: a,
        children: e
    }), s.Image = ({
        children: e,
        withinContainer: l
    }) => {
        let r = (0, a.clsx)("card-img relative w-full", {
            "[&>img]:!static !h-auto": l
        });
        return (0, t.jsx)("div", {
            className: r,
            children: e
        })
    }, e.s(["default", 0, s], 596889);
    var i = e.i(805518);
    e.s(["default", 0, ({
        title: e,
        cards: c,
        layout: o = "four-cards",
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
            children: (0, t.jsxs)("div", {
                className: "container py-16",
                children: [e && (0, t.jsx)("h2", {
                    className: "loco-text-heading-md mb-9 text-center",
                    children: e
                }), (0, t.jsx)("div", {
                    className: h,
                    children: c?.map((c, u) => {
                        let h = (0, a.clsx)("flex flex-wrap flex-row", !m && ({
                                "two-cards": "col-span-12 md:col-span-6 [&>div>.card-img]:h-72",
                                "three-cards": "col-span-12 md:col-span-6 lg:col-span-4 [&>div>.card-img]:h-44",
                                "four-cards": "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 [&>div>.card-img]:h-36"
                            })[o], m && ({
                                "two-cards": "mb-6 min-w-[35rem] [&>div>.card-img]:h-72",
                                "three-cards": "mb-6 min-w-[22rem] [&>div>.card-img]:h-44",
                                "four-cards": "mb-6 min-w-[16rem] [&>div>.card-img]:h-36"
                            })[o]),
                            g = (0, a.clsx)("place-self-end", {
                                "px-6 pb-6": "default" === d || "transparent" === d
                            }),
                            f = (0, a.clsx)({
                                "p-6": "default" === d || "transparent" === d,
                                "py-6": "padded" === d
                            }),
                            x = (0, a.clsx)("object-cover", {
                                "rounded-t-xl": "default" === d || "transparent" === d,
                                rounded: "padded" === d
                            }),
                            b = (0, a.clsx)("caption-xs mt-1 text-right text-gray-400", {
                                "mr-1": "padded" !== d
                            });
                        return (0, t.jsxs)(s, {
                            className: h,
                            variant: d,
                            children: [(0, t.jsxs)(s.Content, {
                                children: [c.image && c.image.src && (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsx)(s.Image, {
                                        withinContainer: c.image.withinContainer,
                                        children: (0, t.jsx)(l.default, {
                                            src: c.image.src ?? "",
                                            alt: c.image.alt ?? "",
                                            fill: !0,
                                            className: x,
                                            quality: 100
                                        })
                                    }), c.image.description && (0, t.jsx)(i.default, {
                                        className: b,
                                        children: c.image.description
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: f,
                                    children: [c.icon && c.icon.src && (0, t.jsx)("div", {
                                        className: "relative mb-5 dark:invert",
                                        children: (0, t.jsx)(l.default, {
                                            src: c.icon.src ?? "",
                                            alt: c.icon.alt ?? "",
                                            quality: 100,
                                            width: 23,
                                            height: 23
                                        })
                                    }), (0, t.jsx)(p, {
                                        className: "loco-text-body-lg-medium mb-4 !font-semibold",
                                        children: c.title
                                    }), c.description && (0, t.jsx)(i.default, {
                                        className: "loco-text-body mb-4",
                                        children: c.description
                                    }), c.richText && (0, t.jsx)(i.default, {
                                        className: "loco-text-body mb-4 text-gray-600 dark:text-gray-300",
                                        children: c.richText
                                    })]
                                })]
                            }), c.actions && (0, t.jsx)("div", {
                                className: g,
                                children: c.actions.map((e, a) => (0, t.jsx)(n.default, {
                                    href: e.href,
                                    target: e.target ?? "_self",
                                    rounded: !0,
                                    hasArrow: !0,
                                    outlined: 0 === a,
                                    className: 0 === a ? "mr-3" : "mt-4",
                                    variant: 0 === a ? "primary" : "secondary",
                                    "data-link-location": r.trackingLocation.cardsAction,
                                    "data-link-id": `${r.trackingLocation.cardsAction}-${a}`,
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
        className: l = "",
        tag: r = "div"
    }) => {
        let n = (0, a.default)("loco-text-heading-sm mb-4", l);
        return (0, t.jsx)(r, {
            className: n,
            children: e
        })
    }], 14452)
}, 809076, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(409781),
        l = e.i(833449),
        r = e.i(722978),
        n = e.i(131581),
        s = e.i(124576),
        i = e.i(210643),
        c = e.i(846891),
        o = e.i(291158),
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
            isActive: l = !0,
            loop: r = !0,
            muted: n = !0,
            playsinline: s = !0,
            controls: i = !1,
            onReady: c,
            className: o,
            style: d
        }) => (0, t.jsx)(m, {
            url: e,
            playing: l && a,
            loop: r,
            muted: n,
            playsinline: s,
            controls: i,
            width: "100%",
            height: "100%",
            className: o ?? "[&>video]:object-cover",
            style: d,
            onReady: c
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
        g = ({
            position: e,
            isPlaying: a,
            onToggle: l
        }) => (0, t.jsx)("span", {
            className: p[e],
            children: (0, t.jsx)(d.default, {
                disableAnimation: !0,
                icon: a ? (0, t.jsx)(i.Pause, {
                    weight: "fill"
                }) : (0, t.jsx)(c.Play, {
                    weight: "fill"
                }),
                iconWeight: "fill",
                variant: "secondary",
                size: h[e],
                onClick: l,
                ariaLabel: a ? "Pause video" : "Play video"
            })
        }),
        f = ({
            poster: e,
            posterSizes: a,
            posterPriority: n,
            visible: s,
            onClick: i,
            showPlayBadge: d,
            dim: m
        }) => {
            let u = (0, r.default)("absolute inset-0 transition-opacity duration-500", s ? "opacity-100 z-10" : "pointer-events-none opacity-0"),
                p = (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(l.default, {
                        src: e.src,
                        alt: e.alt ?? "",
                        fill: !0,
                        sizes: a,
                        priority: n,
                        className: (0, r.default)("object-cover", m && "brightness-75"),
                        ...e.placeholder ? {
                            placeholder: "blur",
                            blurDataURL: e.placeholder
                        } : {}
                    }), d && (0, t.jsx)("span", {
                        className: "absolute inset-0 flex items-center justify-center",
                        children: (0, t.jsx)("span", {
                            className: "dark:bg-mango-black/90 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black shadow-md transition-transform group-hover:scale-110 group-focus-visible:scale-110 dark:text-white",
                            children: (0, t.jsx)(o.default, {
                                as: c.Play,
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
                children: p
            })
        };
    e.s(["default", 0, ({
        src: e,
        mode: l = "click-to-play",
        poster: r,
        posterSizes: i = "100vw",
        posterPriority: c = !1,
        controls: o,
        isActive: d = !0,
        onPlayingChange: m,
        className: p
    }) => {
        let h = (0, a.useRef)(null),
            x = (0, n.useInView)(h, {
                once: !0
            }),
            b = (0, s.useReducedMotion)(),
            v = "click-to-play" === l,
            y = "autoplay" === l,
            [j, A] = (0, a.useState)(y),
            [E, w] = (0, a.useState)(!1),
            [N, k] = (0, a.useState)(y),
            M = e => {
                A(e), e && k(!0), m?.(e)
            },
            Z = v ? j : x && !b,
            V = !!r?.src && !(E && N),
            H = o ? "string" == typeof o ? o : j ? o.playing : o.paused : "none",
            P = v ? () => M(!0) : void 0;
        return (0, t.jsxs)("div", {
            ref: h,
            className: p ?? "relative aspect-video w-full overflow-hidden rounded-2xl bg-mango-black",
            children: [Z && (0, t.jsx)(u, {
                url: e,
                isActive: d,
                playing: j,
                loop: !v,
                muted: !v,
                playsinline: !v,
                controls: v,
                onReady: () => w(!0)
            }), r?.src && (0, t.jsx)(f, {
                poster: r,
                posterSizes: i,
                posterPriority: c,
                visible: V,
                onClick: P,
                showPlayBadge: v,
                dim: v
            }), "none" !== H && E && (0, t.jsx)(g, {
                position: H,
                isPlaying: j,
                onToggle: () => M(!j)
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
        l = e.i(541289);
    e.s(["MANGO_DEFAULT_BLOCK_PADDING", 0, {
        top: "pt-[2.75rem]",
        bottom: "pb-[2.75rem]"
    }, "default", 0, ({
        children: e,
        className: r,
        style: n,
        theme: s = "light",
        padding: i,
        defaultBlockPadding: c,
        nested: o = !1,
        container: d
    }) => o ? (0, t.jsx)(t.Fragment, {
        children: e
    }) : (0, t.jsx)(l.ThemeContainer, {
        theme: s,
        padding: i,
        container: d,
        className: (0, a.default)(r, !i?.top && c.top, !i?.bottom && c.bottom),
        style: n,
        children: e
    })])
}, 651235, e => {
    "use strict";
    let t = e.i(690019).default;
    e.s(["default", 0, t])
}, 541289, 796573, e => {
    "use strict";
    var t = function() {
        for (var e, t, a = 0, l = "", r = arguments.length; a < r; a++)(e = arguments[a]) && (t = function e(t) {
            var a, l, r = "";
            if ("string" == typeof t || "number" == typeof t) r += t;
            else if ("object" == typeof t)
                if (Array.isArray(t)) {
                    var n = t.length;
                    for (a = 0; a < n; a++) t[a] && (l = e(t[a])) && (r && (r += " "), r += l)
                } else
                    for (l in t) t[l] && (r && (r += " "), r += l);
            return r
        }(e)) && (l && (l += " "), l += t);
        return l
    };
    e.s(["default", 0, t], 796573);
    let a = {
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
        r = {
            xs: "mango:container-xs",
            sm: "mango:container-sm",
            md: "mango:container-md",
            lg: "mango:container-lg",
            xl: "mango:container-xl"
        };
    var n = e.i(785328);
    e.s(["ThemeContainer", 0, ({
        children: e,
        className: s,
        style: i,
        theme: c = "light",
        padding: o,
        container: d
    }) => {
        let m = t(o?.top && a[o.top], o?.bottom && l[o.bottom]),
            u = d ? (0, n.jsx)("div", {
                className: r[d],
                children: e
            }) : e;
        return (0, n.jsx)("section", {
            className: t({
                dark: "dark" === c
            }),
            children: (0, n.jsx)("div", {
                className: t(s, m),
                style: i,
                children: u
            })
        })
    }], 541289)
}]);