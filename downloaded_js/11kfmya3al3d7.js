(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 123468, e => {
    "use strict";
    var t = e.i(3931),
        a = e.i(389240);
    let l = new Map([
        ["bold", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"
        }))],
        ["duotone", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M208,96l-80,80L48,96Z",
            opacity: "0.2"
        }), t.default.createElement("path", {
            d: "M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"
        }))],
        ["fill", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"
        }))],
        ["light", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"
        }))],
        ["regular", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"
        }))],
        ["thin", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"
        }))]
    ]);
    var r = Object.defineProperty,
        n = Object.defineProperties,
        i = Object.getOwnPropertyDescriptors,
        s = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        c = (e, t, a) => t in e ? r(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: a
        }) : e[t] = a;
    let u = (0, t.forwardRef)((e, r) => t.default.createElement(a.default, n(((e, t) => {
        for (var a in t || (t = {})) o.call(t, a) && c(e, a, t[a]);
        if (s)
            for (var a of s(t)) d.call(t, a) && c(e, a, t[a]);
        return e
    })({
        ref: r
    }, e), i({
        weights: l
    }))));
    u.displayName = "CaretDown", e.s(["CaretDown", 0, u], 123468)
}, 690019, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(722978);
    let l = {
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
        className: r,
        style: n,
        theme: i = "light",
        padding: s,
        defaultBlockPadding: o,
        nested: d = !1,
        container: c
    }) => {
        let u = (0, a.default)(s?.top ? ({
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
        if (d) return (0, t.jsx)(t.Fragment, {
            children: e
        });
        let m = c ? (0, t.jsx)("div", {
                className: l[c],
                children: e
            }) : e,
            f = (0, a.default)({
                dark: "dark" === i
            });
        return (0, t.jsx)("section", {
            className: f,
            children: (0, t.jsx)("div", {
                className: (0, a.default)(r, u),
                style: n,
                children: m
            })
        })
    }])
}, 779576, e => {
    "use strict";
    var t = e.i(3931),
        a = e.i(389240);
    let l = new Map([
        ["bold", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"
        }))],
        ["duotone", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M208,160H48l80-80Z",
            opacity: "0.2"
        }), t.default.createElement("path", {
            d: "M213.66,154.34l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,48,168H208a8,8,0,0,0,5.66-13.66ZM67.31,152,128,91.31,188.69,152Z"
        }))],
        ["fill", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M215.39,163.06A8,8,0,0,1,208,168H48a8,8,0,0,1-5.66-13.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,215.39,163.06Z"
        }))],
        ["light", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M212.24,164.24a6,6,0,0,1-8.48,0L128,88.49,52.24,164.24a6,6,0,0,1-8.48-8.48l80-80a6,6,0,0,1,8.48,0l80,80A6,6,0,0,1,212.24,164.24Z"
        }))],
        ["regular", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"
        }))],
        ["thin", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M210.83,162.83a4,4,0,0,1-5.66,0L128,85.66,50.83,162.83a4,4,0,0,1-5.66-5.66l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,210.83,162.83Z"
        }))]
    ]);
    var r = Object.defineProperty,
        n = Object.defineProperties,
        i = Object.getOwnPropertyDescriptors,
        s = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        c = (e, t, a) => t in e ? r(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: a
        }) : e[t] = a;
    let u = (0, t.forwardRef)((e, r) => t.default.createElement(a.default, n(((e, t) => {
        for (var a in t || (t = {})) o.call(t, a) && c(e, a, t[a]);
        if (s)
            for (var a of s(t)) d.call(t, a) && c(e, a, t[a]);
        return e
    })({
        ref: r
    }, e), i({
        weights: l
    }))));
    u.displayName = "CaretUp", e.s(["CaretUp", 0, u], 779576)
}, 651235, e => {
    "use strict";
    let t = e.i(690019).default;
    e.s(["default", 0, t])
}, 538376, e => {
    "use strict";
    var t = e.i(3931),
        a = e.i(389240);
    let l = new Map([
        ["bold", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M234.49,111.07,90.41,22.94A20,20,0,0,0,60,39.87V216.13a20,20,0,0,0,30.41,16.93l144.08-88.13a19.82,19.82,0,0,0,0-33.86ZM84,208.85V47.15L216.16,128Z"
        }))],
        ["duotone", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M228.23,134.69,84.15,222.81A8,8,0,0,1,72,216.12V39.88a8,8,0,0,1,12.15-6.69l144.08,88.12A7.82,7.82,0,0,1,228.23,134.69Z",
            opacity: "0.2"
        }), t.default.createElement("path", {
            d: "M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"
        }))],
        ["fill", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"
        }))],
        ["light", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M231.36,116.19,87.28,28.06a14,14,0,0,0-14.18-.27A13.69,13.69,0,0,0,66,39.87V216.13a13.69,13.69,0,0,0,7.1,12.08,14,14,0,0,0,14.18-.27l144.08-88.13a13.82,13.82,0,0,0,0-23.62Zm-6.26,13.38L81,217.7a2,2,0,0,1-2.06,0,1.78,1.78,0,0,1-1-1.61V39.87a1.78,1.78,0,0,1,1-1.61A2.06,2.06,0,0,1,80,38a2,2,0,0,1,1,.31L225.1,126.43a1.82,1.82,0,0,1,0,3.14Z"
        }))],
        ["regular", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"
        }))],
        ["thin", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M230.32,117.9,86.24,29.79a11.91,11.91,0,0,0-12.17-.23A11.71,11.71,0,0,0,68,39.89V216.11a11.71,11.71,0,0,0,6.07,10.33,11.91,11.91,0,0,0,12.17-.23L230.32,138.1a11.82,11.82,0,0,0,0-20.2Zm-4.18,13.37L82.06,219.39a4,4,0,0,1-4.07.07,3.77,3.77,0,0,1-2-3.35V39.89a3.77,3.77,0,0,1,2-3.35,4,4,0,0,1,4.07.07l144.08,88.12a3.8,3.8,0,0,1,0,6.54Z"
        }))]
    ]);
    var r = Object.defineProperty,
        n = Object.defineProperties,
        i = Object.getOwnPropertyDescriptors,
        s = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        c = (e, t, a) => t in e ? r(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: a
        }) : e[t] = a;
    let u = (0, t.forwardRef)((e, r) => t.default.createElement(a.default, n(((e, t) => {
        for (var a in t || (t = {})) o.call(t, a) && c(e, a, t[a]);
        if (s)
            for (var a of s(t)) d.call(t, a) && c(e, a, t[a]);
        return e
    })({
        ref: r
    }, e), i({
        weights: l
    }))));
    u.displayName = "Play", e.s(["Play", 0, u], 538376)
}, 998858, e => {
    "use strict";
    var t = e.i(3931),
        a = e.i(389240);
    let l = new Map([
        ["bold", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M200,28H160a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20h40a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28Zm-4,176H164V52h32ZM96,28H56A20,20,0,0,0,36,48V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V48A20,20,0,0,0,96,28ZM92,204H60V52H92Z"
        }))],
        ["duotone", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M208,48V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h40A8,8,0,0,1,208,48ZM96,40H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V48A8,8,0,0,0,96,40Z",
            opacity: "0.2"
        }), t.default.createElement("path", {
            d: "M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"
        }))],
        ["fill", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"
        }))],
        ["light", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M200,34H160a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14h40a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm2,174a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2ZM96,34H56A14,14,0,0,0,42,48V208a14,14,0,0,0,14,14H96a14,14,0,0,0,14-14V48A14,14,0,0,0,96,34Zm2,174a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H96a2,2,0,0,1,2,2Z"
        }))],
        ["regular", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"
        }))],
        ["thin", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M200,36H160a12,12,0,0,0-12,12V208a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm4,172a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4ZM96,36H56A12,12,0,0,0,44,48V208a12,12,0,0,0,12,12H96a12,12,0,0,0,12-12V48A12,12,0,0,0,96,36Zm4,172a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H96a4,4,0,0,1,4,4Z"
        }))]
    ]);
    var r = Object.defineProperty,
        n = Object.defineProperties,
        i = Object.getOwnPropertyDescriptors,
        s = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        c = (e, t, a) => t in e ? r(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: a
        }) : e[t] = a;
    let u = (0, t.forwardRef)((e, r) => t.default.createElement(a.default, n(((e, t) => {
        for (var a in t || (t = {})) o.call(t, a) && c(e, a, t[a]);
        if (s)
            for (var a of s(t)) d.call(t, a) && c(e, a, t[a]);
        return e
    })({
        ref: r
    }, e), i({
        weights: l
    }))));
    u.displayName = "Pause", e.s(["Pause", 0, u], 998858)
}, 880749, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(3931),
        l = e.i(655105),
        r = e.i(722978),
        n = e.i(153348),
        i = e.i(955429),
        s = e.i(998858),
        o = e.i(538376),
        d = e.i(291158),
        c = e.i(78070);
    let u = (0, e.i(828083).default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        m = ({
            url: e,
            playing: a = !0,
            isActive: l = !0,
            loop: r = !0,
            muted: n = !0,
            playsinline: i = !0,
            controls: s = !1,
            onReady: o,
            className: d,
            style: c
        }) => (0, t.jsx)(u, {
            url: e,
            playing: l && a,
            loop: r,
            muted: n,
            playsinline: i,
            controls: s,
            width: "100%",
            height: "100%",
            className: d ?? "[&>video]:object-cover",
            style: c,
            onReady: o
        }),
        f = {
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
        p = ({
            position: e,
            isPlaying: a,
            onToggle: l
        }) => (0, t.jsx)("span", {
            className: f[e],
            children: (0, t.jsx)(c.default, {
                disableAnimation: !0,
                icon: a ? (0, t.jsx)(s.Pause, {
                    weight: "fill"
                }) : (0, t.jsx)(o.Play, {
                    weight: "fill"
                }),
                iconWeight: "fill",
                variant: "secondary",
                size: h[e],
                onClick: l,
                ariaLabel: a ? "Pause video" : "Play video"
            })
        }),
        g = ({
            poster: e,
            posterSizes: a,
            posterPriority: n,
            visible: i,
            onClick: s,
            showPlayBadge: c,
            dim: u
        }) => {
            let m = (0, r.default)("absolute inset-0 transition-opacity duration-500", i ? "opacity-100 z-10" : "pointer-events-none opacity-0"),
                f = (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(l.default, {
                        src: e.src,
                        alt: e.alt ?? "",
                        fill: !0,
                        sizes: a,
                        priority: n,
                        className: (0, r.default)("object-cover", u && "brightness-75"),
                        ...e.placeholder ? {
                            placeholder: "blur",
                            blurDataURL: e.placeholder
                        } : {}
                    }), c && (0, t.jsx)("span", {
                        className: "absolute inset-0 flex items-center justify-center",
                        children: (0, t.jsx)("span", {
                            className: "dark:bg-mango-black/90 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black shadow-md transition-transform group-hover:scale-110 group-focus-visible:scale-110 dark:text-white",
                            children: (0, t.jsx)(d.default, {
                                as: o.Play,
                                size: "1.5rem",
                                weight: "fill"
                            })
                        })
                    })]
                });
            return s ? (0, t.jsx)("button", {
                type: "button",
                "aria-label": "Play video",
                className: `group block w-full ${m}`,
                onClick: s,
                children: f
            }) : (0, t.jsx)("div", {
                className: m,
                children: f
            })
        };
    e.s(["default", 0, ({
        src: e,
        mode: l = "click-to-play",
        poster: r,
        posterSizes: s = "100vw",
        posterPriority: o = !1,
        controls: d,
        isActive: c = !0,
        onPlayingChange: u,
        className: f
    }) => {
        let h = (0, a.useRef)(null),
            x = (0, n.useInView)(h, {
                once: !0
            }),
            v = (0, i.useReducedMotion)(),
            b = "click-to-play" === l,
            j = "autoplay" === l,
            [y, w] = (0, a.useState)(j),
            [k, N] = (0, a.useState)(!1),
            [E, M] = (0, a.useState)(j),
            L = e => {
                w(e), e && M(!0), u?.(e)
            },
            A = b ? y : x && !v,
            H = !!r?.src && !(k && E),
            C = d ? "string" == typeof d ? d : y ? d.playing : d.paused : "none",
            V = b ? () => L(!0) : void 0;
        return (0, t.jsxs)("div", {
            ref: h,
            className: f ?? "relative aspect-video w-full overflow-hidden rounded-2xl bg-mango-black",
            children: [A && (0, t.jsx)(m, {
                url: e,
                isActive: c,
                playing: y,
                loop: !b,
                muted: !b,
                playsinline: !b,
                controls: b,
                onReady: () => N(!0)
            }), r?.src && (0, t.jsx)(g, {
                poster: r,
                posterSizes: s,
                posterPriority: o,
                visible: H,
                onClick: V,
                showPlayBadge: b,
                dim: b
            }), "none" !== C && k && (0, t.jsx)(p, {
                position: C,
                isPlaying: y,
                onToggle: () => L(!y)
            })]
        })
    }], 880749)
}, 350747, e => {
    "use strict";
    let t = e.i(880749).default;
    e.s(["default", 0, t])
}, 694983, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(722990),
        l = e.i(722978),
        r = e.i(691156),
        n = e.i(131564);
    let i = ({
        title: e,
        faqs: a,
        blockKey: i,
        theme: s
    }) => {
        let o = (0, l.default)("pb-28", {
            "dark bg-black": "dark" === s
        });
        return (0, t.jsxs)("section", {
            className: o,
            children: [(0, t.jsx)(n.default, {
                title: e
            }), (0, t.jsx)("div", {
                className: "container grid gap-1",
                children: a?.map((a, l) => (0, t.jsx)(r.default, {
                    title: a.question,
                    blockKey: `${i}-${e}-${l}`,
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
        theme: s
    }) => (0, t.jsx)(t.Fragment, {
        children: !n && (0, t.jsx)(i, {
            theme: "dark" === s ? "dark" : "light",
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
}, 791154, 37654, 698949, 500563, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(722990),
        l = e.i(3931),
        r = e.i(766930),
        n = e.i(722978),
        i = e.i(828083),
        s = e.i(655105),
        o = e.i(526826),
        d = e.i(376936),
        c = e.i(192207),
        u = e.i(529363),
        m = e.i(153348),
        f = e.i(955429);

    function h(e, t, a) {
        (0, l.useInsertionEffect)(() => e.on(t, a), [e, t, a])
    }
    e.s(["useMotionValueEvent", 0, h], 37654);
    var p = e.i(749583),
        g = e.i(2062),
        x = e.i(805518),
        v = e.i(14452);
    let b = (0, i.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        j = ({
            children: e
        }) => {
            let a = l.default.Children.toArray(e);
            return (0, t.jsx)(r.default, {
                children: (0, t.jsx)("section", {
                    className: "dark relative",
                    style: {
                        height: `${100*e.length}vh`
                    },
                    children: a.map((e, t) => l.default.cloneElement(e, {
                        index: t,
                        total: a.length
                    }))
                })
            })
        };
    j.Block = ({
        title: e,
        description: a,
        actions: r,
        image: i,
        video: j,
        index: y = 1,
        total: w = 1
    }) => {
        let [k, N] = (0, l.useState)(!1), [E, M] = (0, l.useState)(!1), L = (0, l.useRef)(null), A = (0, m.useInView)(L, {
            once: !0
        }), H = (0, f.useReducedMotion)(), C = 1 / w * y, V = .75 * C, {
            scrollYProgress: S
        } = (0, d.useScroll)({
            target: L
        }), P = (0, c.useTransform)(S, [C, y !== w - 1 ? C + V : 1], [0, 1], {
            ease: u.easeInOut
        }), Z = (0, c.useTransform)(S, [C, y !== w - 1 ? C + V : 1], [100, 0], {
            ease: u.easeInOut
        }), O = -((L.current?.offsetHeight || 0) / w) * y;
        h(S, "change", e => {
            N(e >= C)
        });
        let T = (0, n.default)("object-cover transition-opacity duration-1000", {
                "opacity-0": E
            }),
            F = (0, t.jsx)("div", {
                className: "hidden rounded-xl bg-black/70 px-2 py-3 md:block",
                children: Array.from(Array(w), (e, a) => {
                    let l = (0, n.default)("mb-3 h-3 w-3 rounded-full last:mb-0", {
                        "bg-white": y === a,
                        "bg-gray-800": y !== a
                    });
                    return (0, t.jsx)("div", {
                        className: l
                    }, `scroller-progress-${a}`)
                })
            }),
            R = (0, n.default)("absolute h-full w-full", {
                "pointer-events-none": !k
            });
        return (0, t.jsx)(o.m.div, {
            ref: L,
            className: R,
            style: {
                opacity: C ? P : 1,
                scrollMarginTop: O
            },
            children: (0, t.jsxs)("div", {
                className: "sticky top-0 h-screen w-full",
                children: [A && !H && (0, t.jsx)(b, {
                    url: j.src,
                    width: "100%",
                    height: "100%",
                    playing: !0,
                    muted: !0,
                    loop: !0,
                    playsinline: !0,
                    onReady: () => {
                        M(!0)
                    },
                    className: "absolute [&>video]:object-cover",
                    config: {
                        hlsOptions: {
                            maxMaxBufferLength: 1
                        }
                    }
                }), (0, t.jsx)(s.default, {
                    fill: !0,
                    src: i.src,
                    alt: "",
                    className: T,
                    placeholder: "blur",
                    blurDataURL: i.placeholder
                }), (0, t.jsx)("div", {
                    className: "absolute bottom-0 h-full w-full bg-gradient-to-t from-black"
                }), w > 1 && (0, t.jsx)("div", {
                    className: "absolute right-0 mr-16 flex h-full flex-col justify-center",
                    children: F
                }), (0, t.jsx)("div", {
                    className: "relative grid h-full grid-cols-12",
                    children: (0, t.jsx)("div", {
                        className: "col-span-10 col-start-2 mb-28 flex flex-col-reverse md:col-span-4 md:col-start-2",
                        children: (0, t.jsxs)(o.m.div, {
                            style: {
                                y: C ? Z : 0
                            },
                            className: "flex flex-col items-center text-center md:items-start md:text-left",
                            children: [(0, t.jsx)(v.default, {
                                children: e
                            }), (0, t.jsx)(x.default, {
                                className: "mb-12",
                                children: a
                            }), (0, t.jsx)(g.default, {
                                children: r.map((e, a) => (0, t.jsx)(p.default, {
                                    href: e.href,
                                    rounded: !0,
                                    outlined: 0 === a,
                                    variant: 0 === a ? "primary" : "secondary",
                                    hasArrow: !0,
                                    onFocus: () => {
                                        L.current?.scrollIntoView({
                                            block: "start"
                                        })
                                    },
                                    children: e.title
                                }, `action-${e.title}-${a}`))
                            })]
                        })
                    })
                })]
            })
        })
    }, e.s(["default", 0, ({
        fullPageBlocks: e,
        isHidden: l
    }) => (0, t.jsx)(j, {
        children: e.map(({
            title: r,
            brandfolder: n,
            image: i,
            description: s,
            actions: o
        }, d) => {
            let c = {
                    src: n?.muxHLSURL || ""
                },
                u = {
                    src: i?.asset.url || "",
                    placeholder: i?.asset.metadata?.blurHash || ""
                };
            return (0, t.jsx)(t.Fragment, {
                children: !l && (0, t.jsx)(j.Block, {
                    index: d,
                    total: e.length,
                    title: r || "",
                    description: (0, t.jsx)(a.PortableText, {
                        value: s
                    }),
                    actions: o?.map(e => ({
                        title: e.text || "",
                        href: e.link?.href.current || ""
                    })) || [],
                    image: u,
                    video: c
                }, `full-page-scroller-block-${r}-${d}`)
            })
        })
    })], 791154);
    let y = ({
        children: e,
        className: a = ""
    }) => {
        let l = (0, n.clsx)("py-4 px-8 lg:flex lg:justify-between gap-4 col-start-2 col-end-12", a);
        return (0, t.jsx)("section", {
            className: "grid grid-cols-12 bg-gray-900 pb-32",
            children: (0, t.jsx)("div", {
                className: l,
                children: e
            })
        })
    };
    y.Item = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "loco-text-body-md mb-6 flex flex-col items-center text-center text-white last:mb-0 md:text-left lg:m-0 lg:flex-row lg:gap-4",
        children: e
    }), e.s(["default", 0, ({
        items: e,
        isHidden: l
    }) => (0, t.jsx)(t.Fragment, {
        children: !l && (0, t.jsx)(y, {
            children: e?.map((e, l) => (0, t.jsxs)(y.Item, {
                children: [e.image?.file?.asset.url && (0, t.jsx)(s.default, {
                    src: e.image?.file?.asset.url,
                    alt: e.image?.alt ?? "",
                    width: 24,
                    height: 24
                }), (0, t.jsx)(x.default, {
                    children: (0, t.jsx)(a.PortableText, {
                        value: e.text
                    })
                })]
            }, `social-proof-item-${l}`))
        })
    })], 698949);
    var w = e.i(535749),
        k = e.i(779576),
        N = e.i(123468),
        E = e.i(549501),
        M = e.i(78070),
        L = e.i(350747),
        A = e.i(651235);

    function H(e) {
        var t = e.toString(16);
        return 1 === t.length ? "0" + t : t
    }

    function C(e) {
        return "#" + e.map(H).join("")
    }

    function V(e, t, a) {
        for (var l = 0; l < a.length; l++)
            if (function(e, t, a) {
                    var l, r, n, i, s, o;
                    switch (a.length) {
                        case 3:
                            if (l = e, r = t, n = a, 255 !== l[r + 3] || l[r] === n[0] && l[r + 1] === n[1] && l[r + 2] === n[2]) return !0;
                            break;
                        case 4:
                            if (i = e, s = t, o = a, i[s + 3] && o[3] ? i[s] === o[0] && i[s + 1] === o[1] && i[s + 2] === o[2] && i[s + 3] === o[3] : i[s + 3] === o[3]) return !0;
                            break;
                        case 5:
                            if (function(e, t, a) {
                                    var l = a[0],
                                        r = a[1],
                                        n = a[2],
                                        i = a[3],
                                        s = a[4],
                                        o = e[t + 3],
                                        d = S(o, i, s);
                                    return i ? !!(!o && d || S(e[t], l, s) && S(e[t + 1], r, s) && S(e[t + 2], n, s) && d) : d
                                }(e, t, a)) return !0;
                            break;
                        default:
                            return !1
                    }
                }(e, t, a[l])) return !0;
        return !1
    }

    function S(e, t, a) {
        return e >= t - a && e <= t + a
    }

    function P(e, t, a) {
        for (var l = {}, r = a.dominantDivider || 24, n = a.ignoredColor, i = a.step, s = [0, 0, 0, 0, 0], o = 0; o < t; o += i) {
            var d = e[o],
                c = e[o + 1],
                u = e[o + 2],
                m = e[o + 3];
            if (!(n && V(e, o, n))) {
                var f = Math.round(d / r) + "," + Math.round(c / r) + "," + Math.round(u / r);
                l[f] ? l[f] = [l[f][0] + d * m, l[f][1] + c * m, l[f][2] + u * m, l[f][3] + m, l[f][4] + 1] : l[f] = [d * m, c * m, u * m, m, 1], s[4] < l[f][4] && (s = l[f])
            }
        }
        var h = s[0],
            p = s[1],
            g = s[2],
            x = s[3],
            v = s[4];
        return x ? [Math.round(h / x), Math.round(p / x), Math.round(g / x), Math.round(x / v)] : a.defaultColor
    }

    function Z(e, t, a) {
        for (var l = 0, r = 0, n = 0, i = 0, s = 0, o = a.ignoredColor, d = a.step, c = 0; c < t; c += d) {
            var u = e[c + 3],
                m = e[c] * u,
                f = e[c + 1] * u,
                h = e[c + 2] * u;
            !(o && V(e, c, o)) && (l += m, r += f, n += h, i += u, s++)
        }
        return i ? [Math.round(l / i), Math.round(r / i), Math.round(n / i), Math.round(i / s)] : a.defaultColor
    }

    function O(e, t, a) {
        for (var l = 0, r = 0, n = 0, i = 0, s = 0, o = a.ignoredColor, d = a.step, c = 0; c < t; c += d) {
            var u = e[c],
                m = e[c + 1],
                f = e[c + 2],
                h = e[c + 3];
            !(o && V(e, c, o)) && (l += u * u * h, r += m * m * h, n += f * f * h, i += h, s++)
        }
        return i ? [Math.round(Math.sqrt(l / i)), Math.round(Math.sqrt(r / i)), Math.round(Math.sqrt(n / i)), Math.round(i / s)] : a.defaultColor
    }

    function T(e) {
        return F(e, "defaultColor", [0, 0, 0, 0])
    }

    function F(e, t, a) {
        return void 0 === e[t] ? a : e[t]
    }

    function R(e) {
        var t, a, l;
        return (t = e, "u" > typeof HTMLCanvasElement && t instanceof HTMLCanvasElement) ? "canvas" : (a = e, B && a instanceof OffscreenCanvas) ? "offscreencanvas" : I(e) ? "videoframe" : (l = e, "u" > typeof ImageBitmap && l instanceof ImageBitmap) ? "imagebitmap" : e.src
    }

    function D(e) {
        return "u" > typeof HTMLImageElement && e instanceof HTMLImageElement
    }
    var B = "u" > typeof OffscreenCanvas;

    function I(e) {
        return "u" > typeof VideoFrame && e instanceof VideoFrame
    }
    var z = "u" < typeof window;

    function _(e) {
        return Error("FastAverageColor: " + e)
    }

    function $(e, t) {
        t || console.error(e)
    }
    var U = function() {
        function e() {
            this.canvas = null, this.ctx = null
        }
        return e.prototype.getColorAsync = function(e, t) {
            if (!e) return Promise.reject(_("call .getColorAsync() without resource"));
            if ("string" == typeof e) {
                if ("u" < typeof Image) return Promise.reject(_("resource as string is not supported in this environment"));
                var a = new Image;
                return a.crossOrigin = t && t.crossOrigin || "", a.src = e, this.bindImageEvents(a, t)
            }
            if (D(e) && !e.complete) return this.bindImageEvents(e, t);
            var l = this.getColor(e, t);
            return l.error ? Promise.reject(l.error) : Promise.resolve(l)
        }, e.prototype.getColor = function(e, t) {
            var a, l, r, n, i, s, o, d, c = T(t = t || {});
            if (!e) {
                var u = _("call .getColor() without resource");
                return $(u, t.silent), this.prepareResult(c, u)
            }
            var m = (a = function(e) {
                if (D(e)) {
                    var t, a = e.naturalWidth,
                        l = e.naturalHeight;
                    return e.naturalWidth || -1 === e.src.search(/\.svg(\?|$)/i) || (a = l = 100), {
                        width: a,
                        height: l
                    }
                }
                return (t = e, "u" > typeof HTMLVideoElement && t instanceof HTMLVideoElement) ? {
                    width: e.videoWidth,
                    height: e.videoHeight
                } : I(e) ? {
                    width: e.codedWidth,
                    height: e.codedHeight
                } : {
                    width: e.width,
                    height: e.height
                }
            }(e), r = F(l = t, "left", 0), n = F(l, "top", 0), i = F(l, "width", a.width), s = F(l, "height", a.height), o = i, d = s, "precision" === l.mode || (i > s ? d = Math.round((o = 100) / (i / s)) : o = Math.round((d = 100) / (s / i)), (o > i || d > s || o < 10 || d < 10) && (o = i, d = s)), {
                srcLeft: r,
                srcTop: n,
                srcWidth: i,
                srcHeight: s,
                destWidth: o,
                destHeight: d
            });
            if (!m.srcWidth || !m.srcHeight || !m.destWidth || !m.destHeight) {
                var u = _('incorrect sizes for resource "'.concat(R(e), '"'));
                return $(u, t.silent), this.prepareResult(c, u)
            }
            if (!this.canvas && (this.canvas = z ? B ? new OffscreenCanvas(1, 1) : null : document.createElement("canvas"), !this.canvas)) {
                var u = _("OffscreenCanvas is not supported in this browser");
                return $(u, t.silent), this.prepareResult(c, u)
            }
            if (!this.ctx) {
                if (this.ctx = this.canvas.getContext("2d", {
                        willReadFrequently: !0
                    }), !this.ctx) {
                    var u = _("Canvas Context 2D is not supported in this browser");
                    return $(u, t.silent), this.prepareResult(c)
                }
                this.ctx.imageSmoothingEnabled = !1
            }
            this.canvas.width = m.destWidth, this.canvas.height = m.destHeight;
            try {
                this.ctx.clearRect(0, 0, m.destWidth, m.destHeight), this.ctx.drawImage(e, m.srcLeft, m.srcTop, m.srcWidth, m.srcHeight, 0, 0, m.destWidth, m.destHeight);
                var f = this.ctx.getImageData(0, 0, m.destWidth, m.destHeight).data;
                return this.prepareResult(this.getColorFromArray4(f, t))
            } catch (a) {
                var u = _("security error (CORS) for resource ".concat(R(e), ".\nDetails: https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image"));
                return $(u, t.silent), t.silent || console.error(a), this.prepareResult(c, u)
            }
        }, e.prototype.getColorFromArray4 = function(e, t) {
            t = t || {};
            var a, l, r = e.length,
                n = T(t);
            if (r < 4) return n;
            var i = 4 * (t.step || 1);
            switch (t.algorithm || "sqrt") {
                case "simple":
                    a = Z;
                    break;
                case "sqrt":
                    a = O;
                    break;
                case "dominant":
                    a = P;
                    break;
                default:
                    throw _("".concat(t.algorithm, " is unknown algorithm"))
            }
            return a(e, r - r % 4, {
                defaultColor: n,
                ignoredColor: (l = t.ignoredColor) ? Array.isArray(l[0]) ? l : [l] : [],
                step: i,
                dominantDivider: t.dominantDivider
            })
        }, e.prototype.prepareResult = function(e, t) {
            var a = e.slice(0, 3),
                l = [e[0], e[1], e[2], e[3] / 255],
                r = (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128;
            return {
                value: [e[0], e[1], e[2], e[3]],
                rgb: "rgb(" + a.join(",") + ")",
                rgba: "rgba(" + l.join(",") + ")",
                hex: C(a),
                hexa: C(e),
                isDark: r,
                isLight: !r,
                error: t
            }
        }, e.prototype.destroy = function() {
            this.canvas && (this.canvas.width = 1, this.canvas.height = 1, this.canvas = null), this.ctx = null
        }, e.prototype.bindImageEvents = function(e, t) {
            var a = this;
            return new Promise(function(l, r) {
                var n = function() {
                        o();
                        var n = a.getColor(e, t);
                        n.error ? r(n.error) : l(n)
                    },
                    i = function() {
                        o(), r(_('Error loading image "'.concat(e.src, '"')))
                    },
                    s = function() {
                        o(), r(_('Image "'.concat(e.src, '" loading aborted')))
                    },
                    o = function() {
                        e.removeEventListener("load", n), e.removeEventListener("error", i), e.removeEventListener("abort", s)
                    };
                e.addEventListener("load", n), e.addEventListener("error", i), e.addEventListener("abort", s)
            })
        }, e
    }();
    let q = e => [parseInt(e.slice(1, 3), 16), parseInt(e.slice(3, 5), 16), parseInt(e.slice(5, 7), 16)],
        W = (e, t) => {
            let a, l, r, [n, i, s] = q(e),
                o = e => Math.max(0, Math.min(255, Math.round(e + e * t / 100)));
            return a = o(n), l = o(i), r = o(s), `#${a.toString(16).padStart(2,"0")}${l.toString(16).padStart(2,"0")}${r.toString(16).padStart(2,"0")}`
        },
        G = async e => {
            let t = new U;
            try {
                let a = (await t.getColorAsync(e, {
                        ignoredColor: [
                            [255, 255, 255, 255],
                            [0, 0, 0, 255]
                        ]
                    })).hex,
                    l = (e => {
                        let [t, a, l] = q(e);
                        return (.299 * t + .587 * a + .114 * l) / 255 < .6
                    })(a),
                    r = W(a, -15),
                    n = W(a, -8);
                return {
                    isDark: l,
                    mainColor: a,
                    dark: r,
                    light: n
                }
            } finally {
                t.destroy()
            }
        };
    var K = e.i(825610);
    let X = e => {
            let [a, r] = (0, l.useState)(!1), i = (0, n.default)("overflow-hidden md:hidden transition-all duration-500 ease-in-out", {
                "max-h-0": !a,
                "max-h-96": a
            });
            return (0, t.jsxs)("div", {
                className: "col-span-4 mt-7 flex flex-col gap-7 md:col-span-7 md:mt-0 md:grid lg:grid-cols-7",
                children: [(0, t.jsxs)("div", {
                    className: "col-span-7 grid grid-cols-7 gap-x-5",
                    children: [(0, t.jsx)("p", {
                        className: "mango-text-heading-md col-span-5",
                        children: e.title
                    }), (0, t.jsx)(M.default, {
                        className: "col-span-1 col-start-7 hidden justify-self-end md:block",
                        variant: "secondary",
                        icon: (0, t.jsx)(w.X, {}),
                        size: "lg",
                        onClick: e.onClose
                    })]
                }), (0, t.jsxs)("div", {
                    className: "flex flex-col self-end md:col-span-7 md:grid md:grid-cols-7 md:gap-0 md:gap-x-5",
                    children: [e.description && (0, t.jsx)("div", {
                        className: "hidden md:col-span-3 md:flex",
                        children: (0, t.jsx)("p", {
                            className: "mango-text-body-base pb-8 md:self-end md:pb-0",
                            children: e.description?.value
                        })
                    }), (0, t.jsxs)("div", {
                        className: "md:col-span-4 md:col-start-4 md:flex md:flex-col md:justify-between lg:col-span-3 lg:col-start-5",
                        children: [e.details && e.details.length > 0 && (0, t.jsx)("ul", {
                            className: "flex flex-col gap-2 pb-8",
                            children: e.details.map(e => (0, t.jsxs)("li", {
                                className: "flex gap-5",
                                children: [(0, t.jsx)("p", {
                                    className: "mango-text-input w-[100px]",
                                    children: e.label
                                }), (0, t.jsx)("p", {
                                    className: "mango-text-input text-gray-600 dark:text-gray-300",
                                    children: e.value
                                })]
                            }, e.label))
                        }), e.description && (0, t.jsx)("div", {
                            className: i,
                            children: (0, t.jsx)("p", {
                                className: "mango-text-body-base pb-8 md:col-span-3",
                                children: e.description?.value
                            })
                        }), e.description && e.action && (0, t.jsxs)("div", {
                            className: "flex gap-2",
                            children: [e.description?.readMoreLabel && (0, t.jsx)(M.default, {
                                className: "md:hidden",
                                onClick: () => r(!a),
                                variant: "secondary",
                                icon: a ? (0, t.jsx)(k.CaretUp, {}) : (0, t.jsx)(N.CaretDown, {}),
                                children: e.description?.readMoreLabel
                            }), (0, t.jsx)("div", {
                                children: (0, t.jsx)(M.default, {
                                    href: e.action?.href,
                                    target: e.action?.target,
                                    variant: "primary",
                                    icon: (0, t.jsx)(E.ArrowRight, {}),
                                    "data-link-location": K.trackingLocation.deluxeAnnouncementBannerAction,
                                    "data-link-id": "deluxe-banner-action",
                                    children: e.action?.label
                                })
                            })]
                        })]
                    })]
                })]
            })
        },
        J = ({
            image: e,
            video: a
        }) => a ? (0, t.jsx)(L.default, {
            src: a.src,
            mode: "manual",
            poster: e,
            posterSizes: "(max-width: 768px) 75vw, (max-width: 1024px) 42vw, 33vw",
            controls: "bottom-right",
            className: "relative aspect-video min-h-full w-full overflow-hidden rounded-lg"
        }) : (0, t.jsx)("div", {
            className: "relative aspect-video min-h-full w-full overflow-hidden rounded-lg",
            children: (0, t.jsx)(s.default, {
                src: e.src,
                alt: e.alt,
                placeholder: "blur",
                blurDataURL: e.placeholder,
                fill: !0,
                sizes: "(max-width: 768px) 75vw, (max-width: 1024px) 42vw, 33vw",
                className: "object-cover"
            })
        }),
        Y = e => {
            let [a, r] = (0, l.useState)(e.animate ?? !1), {
                isDark: i,
                dark: s,
                light: o
            } = (e => {
                let [t, a] = (0, l.useState)(!1), [r, n] = (0, l.useState)(null), [i, s] = (0, l.useState)(null), [o, d] = (0, l.useState)(null), [c, u] = (0, l.useState)(null), [m, f] = (0, l.useState)(null), h = (0, l.useCallback)(() => {
                    s(null), d(null), u(null), f(null)
                }, []), p = (0, l.useCallback)(async e => {
                    if (!e) return void h();
                    a(!0), n(null);
                    try {
                        let t = await G(e);
                        s(t.isDark), d(t.mainColor), u(t.dark), f(t.light), a(!1)
                    } catch (e) {
                        n(e instanceof Error ? e.message : "Failed to extract color"), h(), a(!1)
                    }
                }, [h]);
                return (0, l.useEffect)(() => {
                    e ? p(e) : (n(null), h(), a(!1))
                }, [e, p, h]), {
                    isLoading: t,
                    error: r,
                    isDark: i,
                    mainColor: o,
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
            let d = (0, n.default)("relative grid grid-cols-4 gap-x-2 md:gap-x-5 md:grid-cols-12 p-4 md:p-6 z-10"),
                c = e.hasBackgroundGradient && s && o ? {
                    background: `linear-gradient(94deg, ${s} 7%, ${o} 105.47%)`
                } : void 0,
                u = e.hasBackgroundGradient && null !== i ? i ? "dark" : "light" : e.theme ?? "light";
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("div", {
                    className: (0, n.default)("fixed inset-0 z-40 bg-black/30", e.animate && "transition-opacity duration-300", e.animate && a ? "opacity-0" : "opacity-100")
                }), (0, t.jsx)(A.default, {
                    className: (0, n.default)("fixed left-0 z-40 w-full bg-white dark:bg-black", e.animate && "transition-transform duration-300 ease-out", e.animate && a ? "-translate-y-[calc(100%+5rem)]" : "translate-y-0"),
                    style: c,
                    theme: u,
                    defaultBlockPadding: {
                        top: "pt-0",
                        bottom: "pb-0"
                    },
                    children: (0, t.jsx)("div", {
                        className: "mango-container",
                        children: (0, t.jsxs)("div", {
                            className: d,
                            children: [(0, t.jsx)("div", {
                                className: "col-span-3 md:col-span-5",
                                children: (0, t.jsx)(J, {
                                    image: e.image,
                                    video: e.video
                                })
                            }), (0, t.jsx)(X, {
                                ...e
                            }), (0, t.jsx)("div", {
                                className: "absolute bottom-[-4.25rem] left-[50%] translate-x-[-50%] md:hidden",
                                children: (0, t.jsx)(M.default, {
                                    variant: "secondary",
                                    icon: (0, t.jsx)(w.X, {}),
                                    size: "lg",
                                    onClick: e.onClose
                                })
                            })]
                        })
                    })
                })]
            })
        };
    var Q = e.i(779712);
    e.s(["default", 0, ({
        title: e,
        description: a,
        action: r,
        settings: n,
        hasBackgroundGradient: i,
        image: s,
        video: o,
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
        }, [m]), n?.isHidden) ? null : (0, t.jsx)(t.Fragment, {
            children: c && (0, t.jsx)(Y, {
                animate: !0,
                hasBackgroundGradient: i || !1,
                title: e,
                theme: n?.theme === "dark" ? "dark" : "light",
                description: a ?? void 0,
                action: r ? {
                    href: r.fieldLink?.linkReference?.href?.current ?? "",
                    target: r.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self",
                    label: r.text ?? ""
                } : void 0,
                image: {
                    src: s ? (0, Q.urlForImage)(s)?.fit("crop").width(1200).height(750).dpr(2).url() ?? "" : "",
                    alt: s?.alt ?? "",
                    placeholder: s?.asset?.metadata?.lqip ?? ""
                },
                video: o?.muxHLSURL ? {
                    src: o.muxHLSURL
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
    }], 500563)
}, 255018, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(480880),
        l = e.i(401861),
        r = e.i(584266),
        n = e.i(817916),
        i = e.i(3931),
        s = e.i(655105),
        o = e.i(526826),
        d = e.i(153348),
        c = e.i(955429),
        u = e.i(376936),
        m = e.i(192207),
        f = e.i(828083),
        h = e.i(570994),
        p = e.i(722978),
        g = e.i(766930);
    let x = (0, f.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        v = ({
            title: e,
            headline: a,
            image: l,
            video: r
        }) => {
            let n = (0, i.useRef)(null),
                f = (0, d.useInView)(n, {
                    once: !0
                }),
                v = (0, c.useReducedMotion)(),
                [b, j] = (0, i.useState)(!1),
                {
                    scrollYProgress: y
                } = (0, u.useScroll)({
                    target: n,
                    offset: ["start start", "end end"]
                }),
                w = (0, m.useTransform)(y, [0, 1], ["25vh", "100vh"]),
                k = (0, m.useTransform)(y, [0, 1], ["25%", "100%"]),
                N = (0, m.useTransform)(y, [0, 1], ["10vh", "0vh"]),
                E = (0, m.useTransform)(y, [0, 1], ["-10vh", "-47.5vh"]),
                M = (0, m.useTransform)(y, [0, .9], [1, 0]),
                L = (0, m.useTransform)(y, [0, .9], [0, 1]),
                A = (0, m.useTransform)(y, [0, 1], ["5vh", "40vh"]),
                H = (0, p.default)("z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": b && !v && f && r.src
                });
            return (0, t.jsx)(g.default, {
                children: (0, t.jsx)("div", {
                    ref: n,
                    className: "relative h-[200vh]",
                    children: (0, t.jsxs)("div", {
                        className: "sticky top-[0px] flex h-screen flex-col items-center justify-center bg-black",
                        children: [(0, t.jsx)(o.m.div, {
                            style: {
                                top: E,
                                opacity: M
                            },
                            className: "relative",
                            children: (0, t.jsx)(h.default, {
                                title: e,
                                fullScreen: !1,
                                titleSize: "small"
                            })
                        }), (0, t.jsx)(o.m.div, {
                            style: {
                                opacity: L,
                                bottom: A
                            },
                            className: "absolute z-20",
                            children: (0, t.jsx)(h.default, {
                                title: a.title,
                                actions: a.actions,
                                titleSize: "small",
                                fullScreen: !1
                            })
                        }), (0, t.jsxs)(o.m.div, {
                            style: {
                                height: w,
                                width: k,
                                bottom: N
                            },
                            className: "absolute overflow-hidden rounded-[8px]",
                            children: [l && l.src && (0, t.jsx)(s.default, {
                                fill: !0,
                                alt: l.alt,
                                src: l.src,
                                placeholder: "blur",
                                blurDataURL: l.placeholder,
                                className: H
                            }), f && !v && r?.src && (0, t.jsx)(x, {
                                url: r.src,
                                playing: !0,
                                loop: !0,
                                muted: !0,
                                playsinline: !0,
                                width: "100%",
                                height: "100%",
                                onReady: () => {
                                    j(!0)
                                },
                                className: "brightness-50 [&>video]:object-cover",
                                config: {
                                    hlsOptions: {
                                        maxMaxBufferLength: 1,
                                        startLevel: 1
                                    }
                                }
                            })]
                        })]
                    })
                })
            })
        };
    var b = e.i(776910),
        j = e.i(81636),
        y = e.i(32382),
        w = e.i(913890),
        k = e.i(673300),
        N = e.i(649042),
        E = e.i(4390),
        M = e.i(893171),
        L = e.i(694983),
        A = e.i(692627),
        H = e.i(569074),
        C = e.i(686916),
        V = e.i(5124),
        S = e.i(314669),
        P = e.i(789924),
        Z = e.i(457689),
        O = e.i(787213),
        T = e.i(123849),
        F = e.i(583877),
        R = e.i(277965),
        D = e.i(68274),
        B = e.i(794189),
        I = e.i(25665),
        z = e.i(883027),
        _ = e.i(722990),
        $ = e.i(749583),
        U = e.i(805518);
    let q = {
            PST: "America/Los_Angeles",
            EST: "America/New_York",
            UTC: "UTC",
            BST: "Europe/London",
            CET: "Europe/Paris",
            CST: "America/Chicago",
            JST: "Asia/Tokyo"
        },
        W = ({
            title: e,
            description: a,
            action: l,
            startDate: r,
            endDate: n,
            location: s,
            defaultOpen: o,
            startTime: d,
            endTime: c,
            timezone: u,
            startDateLabel: m,
            endDateLabel: f,
            timezoneLabel: h,
            locationLabel: p,
            locale: g,
            heading: x = "h3"
        }) => {
            let [v, b] = (0, i.useState)(o), j = u ? q[u.toUpperCase()] || u : void 0, y = new Intl.DateTimeFormat(g, {
                month: "short",
                day: "numeric",
                timeZone: j
            }).format(new Date(r)), w = new Intl.DateTimeFormat(g, {
                month: "long",
                day: "numeric",
                timeZone: j
            }).format(new Date(r)), k = n ? new Intl.DateTimeFormat(g, {
                month: "long",
                day: "numeric",
                timeZone: j
            }).format(new Date(n)) : null;
            return (0, t.jsxs)("details", {
                open: v,
                onToggle: e => b(e.currentTarget.open),
                className: "rounded-[8px] bg-gray-100",
                children: [(0, t.jsxs)("summary", {
                    className: "flex cursor-pointer items-end p-6",
                    children: [(0, t.jsxs)("div", {
                        className: "flex w-full flex-col md:flex-row md:items-center",
                        children: [(0, t.jsx)("p", {
                            className: "text-small min-w-[150px] shrink-0 basis-[10%] lg:basis-[20%] xl:basis-[25%]",
                            children: y
                        }), (0, t.jsx)(x, {
                            className: "text-body-bold text-gray-800",
                            children: e
                        })]
                    }), (0, t.jsx)("div", {
                        children: (0, t.jsx)("span", {
                            className: "text-body inline-block w-[1.2rem] text-gray-700",
                            children: v ? "-" : "+"
                        })
                    })]
                }), (0, t.jsxs)("div", {
                    className: "mt-4 flex w-full flex-col pr-6 pb-6 pl-6 md:flex-row",
                    children: [(0, t.jsx)("div", {
                        className: "hidden min-w-[150px] shrink-0 basis-[10%] md:block lg:basis-[20%] xl:basis-[25%]"
                    }), (0, t.jsxs)("div", {
                        className: "mr-[7.5%] flex w-full flex-col border-t border-gray-300 pt-5 lg:flex-row",
                        children: [(0, t.jsxs)("div", {
                            className: "flex grow flex-col gap-2",
                            children: [w && (0, t.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, t.jsx)("p", {
                                    className: "loco-text-body-md tracking-5 w-24 leading-2 md:leading-3",
                                    children: m
                                }), (0, t.jsx)("p", {
                                    className: "loco-text-body-md text-gray-600",
                                    children: d ? `${w}, ${d}` : w
                                })]
                            }), k && (0, t.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, t.jsx)("p", {
                                    className: "loco-text-body-md tracking-5 w-24 leading-2 md:leading-3",
                                    children: f
                                }), (0, t.jsx)("p", {
                                    className: "loco-text-body-md text-gray-600",
                                    children: c ? `${k}, ${c}` : k
                                })]
                            }), u && (d || c) && (0, t.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, t.jsx)("p", {
                                    className: "loco-text-body-md tracking-5 w-24 leading-2 md:leading-3",
                                    children: h
                                }), (0, t.jsx)("p", {
                                    className: "loco-text-body-md text-gray-600",
                                    children: u.toUpperCase()
                                })]
                            }), s && (0, t.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, t.jsx)("p", {
                                    className: "loco-text-body-md tracking-5 w-24 leading-2 md:leading-3",
                                    children: p
                                }), (0, t.jsx)("p", {
                                    className: "loco-text-body-md text-gray-600",
                                    children: s
                                })]
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "mt-5 mr-[10%] flex flex-col justify-between md:w-[80%] lg:mt-0 lg:w-[35%]",
                            children: [a && (0, t.jsx)("div", {
                                className: "loco-text-body text-black",
                                children: (0, t.jsx)(U.default, {
                                    children: a
                                })
                            }), l && (0, t.jsx)("div", {
                                className: "mt-8",
                                children: (0, t.jsx)($.default, {
                                    href: l.href,
                                    variant: "primary",
                                    target: l.target,
                                    outlined: !0,
                                    rounded: !0,
                                    hasArrow: !0,
                                    children: l.title
                                })
                            })]
                        })]
                    })]
                })]
            })
        },
        G = ({
            upcomingEvents: e,
            pastEvents: a,
            action: l,
            displayPastEvents: r,
            upcomingEventsLabel: n,
            pastEventsLabel: s,
            startDateLabel: o,
            endDateLabel: d,
            timezoneLabel: c,
            locationLabel: u,
            locale: m = "en-US",
            upcomingEventsHeading: f = "h3"
        }) => {
            let [h, p] = (0, i.useState)("upcoming");
            return (0, t.jsxs)("div", {
                children: [r && a.length > 0 && (0, t.jsxs)("div", {
                    className: "flex w-full justify-center gap-5",
                    children: [(0, t.jsx)($.default, {
                        rounded: !0,
                        outlined: "upcoming" != h,
                        onPress: () => {
                            p("upcoming")
                        },
                        size: "small",
                        children: n
                    }), (0, t.jsx)($.default, {
                        rounded: !0,
                        outlined: "past" != h,
                        onPress: () => {
                            p("past")
                        },
                        size: "small",
                        children: s
                    })]
                }), (0, t.jsxs)("div", {
                    className: "mt-16 flex flex-col gap-2",
                    children: ["upcoming" === h && e.map((e, a) => (0, t.jsx)(W, {
                        startDateLabel: o,
                        endDateLabel: d,
                        timezoneLabel: c,
                        locationLabel: u,
                        defaultOpen: 0 === a,
                        locale: m,
                        heading: f,
                        ...e
                    }, a)), "past" === h && a.map((e, a) => (0, t.jsx)(W, {
                        startDateLabel: o,
                        endDateLabel: d,
                        timezoneLabel: c,
                        locationLabel: u,
                        locale: m,
                        heading: f,
                        ...e
                    }, a))]
                }), l && (0, t.jsx)("div", {
                    className: "mt-8 text-center",
                    children: (0, t.jsx)($.default, {
                        href: l.href,
                        variant: "primary",
                        target: l.target,
                        outlined: !0,
                        rounded: !0,
                        hasArrow: !0,
                        children: l.title
                    })
                })]
            })
        };
    var K = e.i(200241),
        X = e.i(742958),
        J = e.i(50184),
        Y = e.i(725751),
        Q = e.i(449758),
        ee = e.i(791154),
        et = e.i(698949),
        ea = e.i(500563);
    let el = {
            agendaBlock: F.default,
            alert: l.default,
            alternateNavigation: r.default,
            alternateNavigationAnchor: n.default,
            animatedHeadliner: ({
                title: e,
                subtitle: a,
                image: l,
                theme: r,
                description: n,
                brandfolder: i,
                actions: s,
                isHidden: o
            }) => (0, t.jsx)(t.Fragment, {
                children: !o && (0, t.jsx)(v, {
                    title: e || "",
                    image: {
                        src: l?.file?.asset.url || "",
                        alt: l?.alt || "",
                        placeholder: l?.file?.asset?.metadata?.lqip || ""
                    },
                    video: {
                        src: i?.muxHLSURL || ""
                    },
                    headline: {
                        actions: s ? s.map(e => ({
                            title: e.title || "",
                            href: e.link?.linkReference?.href.current || "",
                            target: e.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                        })) : void 0,
                        description: n || void 0,
                        title: a || "",
                        theme: "dark" === r ? "dark" : "light"
                    }
                })
            }),
            announcementBanner: b.default,
            benefits: j.default,
            uniteCards: w.default,
            carousel: V.default,
            callout: y.default,
            fullScreenVisual: k.FullScreenVisualBlockSuspense,
            fullWidthBlock: N.default,
            faqs: L.default,
            headliner: E.default,
            hero: M.default,
            htmlInfoTable: Y.default,
            keyFigures: D.default,
            quote: A.default,
            statement: H.default,
            footnote: C.default,
            logosBank: S.default,
            featuresList: P.default,
            title: Z.default,
            testimonialsBlock: O.default,
            animatedFeaturesList: R.default,
            mangoDeluxeAnnouncementBanner: ea.default,
            media: B.default,
            richText: I.default,
            events: ({
                upcomingEvents: e,
                pastEvents: a,
                displayPastEvents: l,
                action: r,
                upcomingEventsLabel: n,
                pastEventsLabel: i,
                startDateLabel: s,
                endDateLabel: o,
                timezoneLabel: d,
                locationLabel: c,
                upcomingEventsHeading: u,
                isHidden: m
            }) => {
                let f = (0, K.useLocale)(),
                    h = e => ({
                        title: e.name ?? "",
                        description: (0, t.jsx)(_.PortableText, {
                            value: e.description
                        }),
                        startDate: e.startDate ?? "",
                        endDate: e.endDate ?? "",
                        timezone: e.timezone ?? "",
                        location: e.location ?? "",
                        startTime: e.startTime ?? "",
                        endTime: e.endTime ?? "",
                        action: (e => {
                            if (!e || !e.length) return;
                            let t = e[0];
                            return {
                                title: t?.label ?? "",
                                href: t?.fieldLink?.linkReference?.href.current ?? "",
                                target: t?.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self"
                            }
                        })(e.actions)
                    });
                return (0, t.jsx)(t.Fragment, {
                    children: !m && (0, t.jsx)("div", {
                        className: "container py-12",
                        children: (0, t.jsx)(G, {
                            upcomingEventsHeading: "h2" === u || "h3" === u || "h4" === u ? u : "h3",
                            action: (r ? {
                                title: r.title ?? "",
                                href: r.link?.linkReference?.href.current ?? "",
                                target: r.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                            } : null) || void 0,
                            upcomingEvents: e ? e.map(h) : [],
                            pastEvents: a ? a.map(h) : [],
                            displayPastEvents: l || !1,
                            upcomingEventsLabel: n ?? "",
                            pastEventsLabel: i ?? "",
                            startDateLabel: s ?? "",
                            endDateLabel: o ?? "",
                            timezoneLabel: d ?? "",
                            locationLabel: c ?? "",
                            locale: f
                        })
                    })
                })
            },
            iframeBlock: z.default,
            planCards: T.default,
            bentoCards: X.default,
            videosShowcase: J.default,
            cards: Q.default,
            fullPageScroller: ee.default,
            socialProof: et.default
        },
        er = ({
            blocks: e
        }) => (0, t.jsx)(a.default, {
            blocks: e,
            blockMap: el
        });
    var en = e.i(814507),
        ei = e.i(129824),
        es = e.i(246916);
    e.s(["default", 0, function({
        data: e
    }) {
        let {
            shouldDisplayMTBanner: a,
            updatedBlocks: l
        } = (0, es.useMTBanner)(e, ei.L1_PAGES_NO_MT_BANNER);
        return (0, t.jsxs)(t.Fragment, {
            children: [e.announcementBanner?.hasAnnouncementBanner && (0, t.jsx)(en.default, {
                rounded: !0,
                action: {
                    title: e.announcementBanner.announcementBannerContent?.action?.text || "",
                    href: e.announcementBanner.announcementBannerContent?.action?.fieldLink?.linkReference?.href?.current || "",
                    target: e.announcementBanner.announcementBannerContent?.action?.fieldLink?.linkReference?.target || "_self"
                },
                className: "absolute top-0 left-0 z-20",
                children: e.announcementBanner.announcementBannerContent?.title
            }), (0, t.jsx)(er, {
                blocks: a ? l : e.blocks
            })]
        })
    }], 255018)
}, 410979, e => {
    e.v(t => Promise.all(["static/chunks/0ce6i8-d8uiwx.js"].map(t => e.l(t))).then(() => t(942019)))
}, 662006, e => {
    e.v(t => Promise.all(["static/chunks/12l2m4ovq~wj3.js"].map(t => e.l(t))).then(() => t(206844)))
}, 440574, e => {
    e.v(t => Promise.all(["static/chunks/0dxyia2ts7431.js"].map(t => e.l(t))).then(() => t(33857)))
}, 269100, e => {
    e.v(t => Promise.all(["static/chunks/0why8i0e6dzqy.js"].map(t => e.l(t))).then(() => t(346003)))
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "11c4e5b7-571b-558f-9293-2acf8bba4f20")
    } catch (e) {}
}();
//# debugId=11c4e5b7-571b-558f-9293-2acf8bba4f20