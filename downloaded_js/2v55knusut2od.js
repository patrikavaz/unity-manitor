(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 694983, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(722990),
        l = e.i(722978),
        n = e.i(691156),
        r = e.i(131564);
    let s = ({
        title: e,
        faqs: a,
        blockKey: s,
        theme: i
    }) => {
        let m = (0, l.default)("pb-28", {
            "dark bg-black": "dark" === i
        });
        return (0, t.jsxs)("section", {
            className: m,
            children: [(0, t.jsx)(r.default, {
                title: e
            }), (0, t.jsx)("div", {
                className: "container grid gap-1",
                children: a?.map((a, l) => (0, t.jsx)(n.default, {
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
        blockKey: n,
        isHidden: r,
        theme: i
    }) => (0, t.jsx)(t.Fragment, {
        children: !r && (0, t.jsx)(s, {
            theme: "dark" === i ? "dark" : "light",
            title: e,
            faqs: l?.map(e => ({
                question: e.question,
                answer: (0, t.jsx)(a.PortableText, {
                    value: e.answer
                })
            })),
            blockKey: n
        })
    })], 694983)
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
        n = t.forwardRef((e, n) => t.createElement(a.default, {
            ref: n,
            ...e,
            weights: l
        }));
    n.displayName = "CaretDownIcon", e.s(["CaretDown", 0, n, "CaretDownIcon", 0, n], 106984)
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
        n = t.forwardRef((e, n) => t.createElement(a.default, {
            ref: n,
            ...e,
            weights: l
        }));
    n.displayName = "CaretUpIcon", e.s(["CaretUp", 0, n, "CaretUpIcon", 0, n], 729e3)
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
        n = t.forwardRef((e, n) => t.createElement(a.default, {
            ref: n,
            ...e,
            weights: l
        }));
    n.displayName = "PauseIcon", e.s(["Pause", 0, n, "PauseIcon", 0, n], 210643)
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
        n = t.forwardRef((e, n) => t.createElement(a.default, {
            ref: n,
            ...e,
            weights: l
        }));
    n.displayName = "PlayIcon", e.s(["Play", 0, n, "PlayIcon", 0, n], 846891)
}, 70909, e => {
    e.v(t => Promise.all(["static/chunks/2wz63vlu6w-_f.js"].map(t => e.l(t))).then(() => t(376839)))
}, 440574, e => {
    e.v(t => Promise.all(["static/chunks/171yqzhl-22he.js"].map(t => e.l(t))).then(() => t(33857)))
}, 104688, e => {
    e.v(t => Promise.all(["static/chunks/2taw8vd-14eeb.js"].map(t => e.l(t))).then(() => t(425687)))
}, 574228, e => {
    e.v(t => Promise.all(["static/chunks/1vlziwbw3up-b.js"].map(t => e.l(t))).then(() => t(10770)))
}, 809076, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(409781),
        l = e.i(833449),
        n = e.i(722978),
        r = e.i(131581),
        s = e.i(124576),
        i = e.i(210643),
        m = e.i(846891),
        o = e.i(291158),
        c = e.i(78070);
    let d = (0, e.i(425314).default)(() => e.A(104688), {
            loadableGenerated: {
                modules: [425687]
            },
            ssr: !1
        }),
        u = ({
            url: e,
            playing: a = !0,
            isActive: l = !0,
            loop: n = !0,
            muted: r = !0,
            playsinline: s = !0,
            controls: i = !1,
            onReady: m,
            className: o,
            style: c
        }) => (0, t.jsx)(d, {
            url: e,
            playing: l && a,
            loop: n,
            muted: r,
            playsinline: s,
            controls: i,
            width: "100%",
            height: "100%",
            className: o ?? "[&>video]:object-cover",
            style: c,
            onReady: m
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
            children: (0, t.jsx)(c.default, {
                disableAnimation: !0,
                icon: a ? (0, t.jsx)(i.Pause, {
                    weight: "fill"
                }) : (0, t.jsx)(m.Play, {
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
            posterPriority: r,
            visible: s,
            onClick: i,
            showPlayBadge: c,
            dim: d
        }) => {
            let u = (0, n.default)("absolute inset-0 transition-opacity duration-500", s ? "opacity-100 z-10" : "pointer-events-none opacity-0"),
                p = (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(l.default, {
                        src: e.src,
                        alt: e.alt ?? "",
                        fill: !0,
                        sizes: a,
                        priority: r,
                        className: (0, n.default)("object-cover", d && "brightness-75"),
                        ...e.placeholder ? {
                            placeholder: "blur",
                            blurDataURL: e.placeholder
                        } : {}
                    }), c && (0, t.jsx)("span", {
                        className: "absolute inset-0 flex items-center justify-center",
                        children: (0, t.jsx)("span", {
                            className: "dark:bg-mango-black/90 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black shadow-md transition-transform group-hover:scale-110 group-focus-visible:scale-110 dark:text-white",
                            children: (0, t.jsx)(o.default, {
                                as: m.Play,
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
        poster: n,
        posterSizes: i = "100vw",
        posterPriority: m = !1,
        controls: o,
        isActive: c = !0,
        onPlayingChange: d,
        className: p
    }) => {
        let h = (0, a.useRef)(null),
            b = (0, r.useInView)(h, {
                once: !0
            }),
            E = (0, s.useReducedMotion)(),
            Z = "click-to-play" === l,
            A = "autoplay" === l,
            [V, M] = (0, a.useState)(A),
            [y, x] = (0, a.useState)(!1),
            [H, v] = (0, a.useState)(A),
            w = e => {
                M(e), e && v(!0), d?.(e)
            },
            j = Z ? V : b && !E,
            F = !!n?.src && !(y && H),
            k = o ? "string" == typeof o ? o : V ? o.playing : o.paused : "none",
            P = Z ? () => w(!0) : void 0;
        return (0, t.jsxs)("div", {
            ref: h,
            className: p ?? "relative aspect-video w-full overflow-hidden rounded-2xl bg-mango-black",
            children: [j && (0, t.jsx)(u, {
                url: e,
                isActive: c,
                playing: V,
                loop: !Z,
                muted: !Z,
                playsinline: !Z,
                controls: Z,
                onReady: () => x(!0)
            }), n?.src && (0, t.jsx)(f, {
                poster: n,
                posterSizes: i,
                posterPriority: m,
                visible: F,
                onClick: P,
                showPlayBadge: Z,
                dim: Z
            }), "none" !== k && y && (0, t.jsx)(g, {
                position: k,
                isPlaying: V,
                onToggle: () => w(!V)
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
        a = e.i(722978);
    let l = {
        xs: "mango-container-xs",
        sm: "mango-container-sm",
        md: "mango-container-md",
        lg: "mango-container-lg",
        xl: "mango-container"
    };
    e.s(["MANGO_DEFAULT_BLOCK_PADDING", 0, {
        top: "pt-[2.75rem]",
        bottom: "pb-[2.75rem]"
    }, "default", 0, ({
        children: e,
        className: n,
        style: r,
        theme: s = "light",
        padding: i,
        defaultBlockPadding: m,
        nested: o = !1,
        container: c
    }) => {
        let d = (0, a.default)(i?.top ? ({
            none: "pt-0",
            xs: "md:pt-8 pt-6",
            sm: "md:pt-20 pt-[2.75rem]",
            md: "md:pt-[9.25rem] pt-16",
            lg: "md:pt-[11.25rem] pt-[6rem]"
        })[i.top] : m.top, i?.bottom ? ({
            none: "pb-0",
            xs: "md:pb-8 pb-6",
            sm: "md:pb-20 pb-[2.75rem]",
            md: "md:pb-[9.25rem] pb-16",
            lg: "md:pb-[11.25rem] pb-[6rem]"
        })[i.bottom] : m.bottom);
        if (o) return (0, t.jsx)(t.Fragment, {
            children: e
        });
        let u = c ? (0, t.jsx)("div", {
                className: l[c],
                children: e
            }) : e,
            p = (0, a.default)({
                dark: "dark" === s
            });
        return (0, t.jsx)("section", {
            className: p,
            children: (0, t.jsx)("div", {
                className: (0, a.default)(n, d),
                style: r,
                children: u
            })
        })
    }])
}, 651235, e => {
    "use strict";
    let t = e.i(690019).default;
    e.s(["default", 0, t])
}]);