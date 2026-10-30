;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "f9d1e471-6b68-1424-65c8-f339bcad2678")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, [694983, e => {
    var t = e.i(167358),
        a = e.i(712598),
        l = e.i(722978),
        n = e.i(691156),
        r = e.i(131564);
    let o = ({
        title: e,
        faqs: a,
        blockKey: o,
        theme: s
    }) => {
        let i = (0, l.U)("pb-28", {
            "dark bg-black": "dark" === s
        });
        return (0, t.jsxs)("section", {
            className: i,
            "data-sentry-component": "Faq",
            "data-sentry-source-file": "Faq.tsx",
            children: [(0, t.jsx)(r.f, {
                title: e,
                "data-sentry-element": "TitleDescriptionBlock",
                "data-sentry-source-file": "Faq.tsx"
            }), (0, t.jsx)("div", {
                className: "container grid gap-1",
                children: a?.map((a, l) => (0, t.jsx)(n.f, {
                    title: a.question,
                    blockKey: `${o}-${e}-${l}`,
                    "data-sentry-element": "Accordion",
                    "data-sentry-component": "renderFaqs",
                    "data-sentry-source-file": "Faq.tsx",
                    children: a.answer
                }, `faq-${e}-${l}`))
            })]
        })
    };
    e.s(["f", 0, ({
        title: e,
        faqs: l,
        blockKey: n,
        isHidden: r,
        theme: s
    }) => (0, t.jsx)(t.Fragment, {
        children: !r && (0, t.jsx)(o, {
            theme: "dark" === s ? "dark" : "light",
            title: e,
            faqs: l?.map(e => ({
                question: e.question,
                answer: (0, t.jsx)(a.f, {
                    value: e.answer
                })
            })),
            blockKey: n
        })
    })], 694983)
}, 893527, e => {
    var t = e.i(495056),
        a = e.i(844929);
    let l = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M216,128l-72,72V56Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"
            }))]
        ]),
        n = t.forwardRef((e, n) => t.createElement(a.f, {
            ref: n,
            ...e,
            weights: l
        }));
    n.displayName = "ArrowRightIcon", e.s(["ArrowRight", 0, n, "ArrowRightIcon", 0, n], 893527)
}, 973410, e => {
    var t = e.i(495056),
        a = e.i(844929);
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
        n = t.forwardRef((e, n) => t.createElement(a.f, {
            ref: n,
            ...e,
            weights: l
        }));
    n.displayName = "CaretDownIcon", e.s(["CaretDown", 0, n, "CaretDownIcon", 0, n], 973410)
}, 684150, e => {
    var t = e.i(495056),
        a = e.i(844929);
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
        n = t.forwardRef((e, n) => t.createElement(a.f, {
            ref: n,
            ...e,
            weights: l
        }));
    n.displayName = "CaretUpIcon", e.s(["CaretUp", 0, n, "CaretUpIcon", 0, n], 684150)
}, 554206, e => {
    var t = e.i(495056),
        a = e.i(844929);
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
        n = t.forwardRef((e, n) => t.createElement(a.f, {
            ref: n,
            ...e,
            weights: l
        }));
    n.displayName = "PauseIcon", e.s(["Pause", 0, n, "PauseIcon", 0, n], 554206)
}, 980986, e => {
    var t = e.i(495056),
        a = e.i(844929);
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
        n = t.forwardRef((e, n) => t.createElement(a.f, {
            ref: n,
            ...e,
            weights: l
        }));
    n.displayName = "PlayIcon", e.s(["Play", 0, n, "PlayIcon", 0, n], 980986)
}, 4795, e => {
    var t = e.i(495056),
        a = e.i(844929);
    let l = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"
            }))]
        ]),
        n = t.forwardRef((e, n) => t.createElement(a.f, {
            ref: n,
            ...e,
            weights: l
        }));
    n.displayName = "XIcon", e.s(["X", 0, n, "XIcon", 0, n], 4795)
}, 717714, e => {
    var t = e.i(876009),
        a = e.i(494004),
        l = e.i(495056);
    e.s(["f", 0, function() {
        t.E.current || (0, a.f)();
        let [e] = (0, l.useState)(t.d.current);
        return e
    }])
}, 825455, e => {
    var t = e.i(495056),
        a = e.i(513038);
    let l = {
        some: 0,
        all: 1
    };
    e.s(["f", 0, function(e, {
        root: n,
        margin: r,
        amount: o,
        once: s = !1,
        initial: i = !1
    } = {}) {
        let [c, m] = (0, t.useState)(i);
        return (0, t.useEffect)(() => {
            if (!e.current || s && c) return;
            let t = {
                root: n && n.current || void 0,
                margin: r,
                amount: o
            };
            return function(e, t, {
                root: n,
                margin: r,
                amount: o = "some"
            } = {}) {
                let s = (0, a.f)(e),
                    i = new WeakMap,
                    c = new IntersectionObserver(e => {
                        e.forEach(e => {
                            let a = i.get(e.target);
                            if (!!a !== e.isIntersecting)
                                if (e.isIntersecting) {
                                    let a = t(e.target, e);
                                    "function" == typeof a ? i.set(e.target, a) : c.unobserve(e.target)
                                } else "function" == typeof a && (a(e), i.delete(e.target))
                        })
                    }, {
                        root: n,
                        rootMargin: r,
                        threshold: "number" == typeof o ? o : l[o]
                    });
                return s.forEach(e => c.observe(e)), () => c.disconnect()
            }(e.current, () => (m(!0), s ? void 0 : () => m(!1)), t)
        }, [n, e, r, s, o]), c
    }], 825455)
}, 494004, 876009, e => {
    let t = {
            current: null
        },
        a = {
            current: !1
        };
    e.s(["E", 0, a, "d", 0, t], 876009);
    let l = "u" > typeof window;
    e.s(["f", 0, function() {
        if (a.current = !0, l)
            if (window.matchMedia) {
                let e = window.matchMedia("(prefers-reduced-motion)"),
                    a = () => t.current = e.matches;
                e.addEventListener("change", a), a()
            } else t.current = !1
    }], 494004)
}, 513038, e => {
    e.s(["f", 0, function(e, t, a) {
        if (null == e) return [];
        if (e instanceof EventTarget) return [e];
        if ("string" == typeof e) {
            let l = document;
            t && (l = t.current);
            let n = a?.[e] ?? l.querySelectorAll(e);
            return n ? Array.from(n) : []
        }
        return Array.from(e).filter(e => null != e)
    }])
}, 880749, e => {
    var t = e.i(167358),
        a = e.i(495056),
        l = e.i(127873),
        n = e.i(722978),
        r = e.i(825455),
        o = e.i(717714),
        s = e.i(554206),
        i = e.i(980986),
        c = e.i(514957),
        m = e.i(78070);
    let d = (0, e.i(194485).default)(() => e.A(685851), {
            loadableGenerated: {
                modules: [204748]
            },
            ssr: !1
        }),
        u = ({
            url: e,
            playing: a = !0,
            isActive: l = !0,
            loop: n = !0,
            muted: r = !0,
            playsinline: o = !0,
            controls: s = !1,
            onReady: i,
            className: c,
            style: m
        }) => (0, t.jsx)(d, {
            url: e,
            playing: l && a,
            loop: n,
            muted: r,
            playsinline: o,
            controls: s,
            width: "100%",
            height: "100%",
            className: c ?? "[&>video]:object-cover",
            style: m,
            onReady: i,
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
        g = ({
            position: e,
            isPlaying: a,
            onToggle: l
        }) => (0, t.jsx)("span", {
            className: p[e],
            "data-sentry-component": "ControlButton",
            "data-sentry-source-file": "BrandfolderVideo.tsx",
            children: (0, t.jsx)(m.f, {
                disableAnimation: !0,
                icon: a ? (0, t.jsx)(s.Pause, {
                    weight: "fill"
                }) : (0, t.jsx)(i.Play, {
                    weight: "fill"
                }),
                variant: "secondary",
                size: h[e],
                onClick: l,
                ariaLabel: a ? "Pause video" : "Play video",
                "data-sentry-element": "Button",
                "data-sentry-source-file": "BrandfolderVideo.tsx"
            })
        }),
        f = ({
            poster: e,
            posterSizes: a,
            posterPriority: r,
            visible: o,
            onClick: s,
            showPlayBadge: m,
            dim: d
        }) => {
            let u = (0, n.U)("absolute inset-0 transition-opacity duration-500", o ? "opacity-100 z-10" : "pointer-events-none opacity-0"),
                p = (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(l.default, {
                        src: e.src,
                        alt: e.alt ?? "",
                        fill: !0,
                        sizes: a,
                        priority: r,
                        className: (0, n.U)("object-cover", d && "brightness-75"),
                        ...e.placeholder ? {
                            placeholder: "blur",
                            blurDataURL: e.placeholder
                        } : {}
                    }), m && (0, t.jsx)("span", {
                        className: "absolute inset-0 flex items-center justify-center",
                        children: (0, t.jsx)("span", {
                            className: "dark:bg-mango-black/90 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black shadow-md transition-transform group-hover:scale-110 group-focus-visible:scale-110 dark:text-white",
                            children: (0, t.jsx)(c.f, {
                                as: i.Play,
                                size: "1.5rem",
                                weight: "fill"
                            })
                        })
                    })]
                });
            return s ? (0, t.jsx)("button", {
                type: "button",
                "aria-label": "Play video",
                className: `group block w-full ${u}`,
                onClick: s,
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
        mode: l = "click-to-play",
        poster: n,
        posterSizes: s = "100vw",
        posterPriority: i = !1,
        controls: c,
        isActive: m = !0,
        onPlayingChange: d,
        onReady: p,
        className: h
    }) => {
        let E = (0, a.useRef)(null),
            y = (0, r.f)(E, {
                once: !0
            }),
            A = (0, o.f)(),
            M = "click-to-play" === l,
            Z = "autoplay" === l,
            [b, V] = (0, a.useState)(Z),
            [x, H] = (0, a.useState)(!1),
            [w, v] = (0, a.useState)(Z),
            L = e => {
                V(e), e && v(!0), d?.(e)
            },
            F = M ? b : y && !A,
            j = !!n?.src && !(x && w),
            k = c ? "string" == typeof c ? c : b ? c.playing : c.paused : "none",
            P = M ? () => L(!0) : void 0;
        return (0, t.jsxs)("div", {
            ref: E,
            className: h ?? "relative aspect-video w-full overflow-hidden rounded-2xl bg-mango-black",
            "data-sentry-component": "BrandfolderVideo",
            "data-sentry-source-file": "BrandfolderVideo.tsx",
            children: [F && (0, t.jsx)(u, {
                url: e,
                isActive: m,
                playing: b,
                loop: !M,
                muted: !M,
                playsinline: !M,
                controls: M,
                onReady: () => {
                    H(!0), p?.()
                }
            }), n?.src && (0, t.jsx)(f, {
                poster: n,
                posterSizes: s,
                posterPriority: i,
                visible: j,
                onClick: P,
                showPlayBadge: M,
                dim: M
            }), "none" !== k && x && (0, t.jsx)(g, {
                position: k,
                isPlaying: b,
                onToggle: () => L(!b)
            })]
        })
    }], 880749)
}, 350747, e => {
    let t = e.i(880749).default;
    e.s(["f", 0, t])
}, 514957, e => {
    var t = e.i(167358),
        a = e.i(722978);
    e.s(["f", 0, ({
        as: e,
        className: l,
        size: n = "1.5rem",
        weight: r = "regular"
    }) => (0, t.jsx)("div", {
        style: {
            height: n,
            width: n,
            color: "inherit"
        },
        "data-sentry-component": "StaticIcon",
        "data-sentry-source-file": "StaticIcon.tsx",
        children: (0, t.jsx)(e, {
            size: n,
            className: (0, a.U)("text-inherit", l),
            weight: r,
            "data-sentry-element": "AsComponent",
            "data-sentry-source-file": "StaticIcon.tsx"
        })
    })])
}, 690019, e => {
    var t = e.i(167358),
        a = e.i(722978),
        l = e.i(541289);
    e.s(["m", 0, {
        top: "pt-[2.75rem]",
        bottom: "pb-[2.75rem]"
    }, "U", 0, ({
        children: e,
        className: n,
        style: r,
        theme: o = "light",
        padding: s,
        defaultBlockPadding: i,
        nested: c = !1,
        container: m
    }) => c ? (0, t.jsx)(t.Fragment, {
        children: e
    }) : (0, t.jsx)(l.f, {
        theme: o,
        padding: s,
        container: m,
        className: (0, a.U)(n, !s?.top && i.top, !s?.bottom && i.bottom),
        style: r,
        "data-sentry-element": "MangoThemeContainer",
        "data-sentry-component": "ThemeContainer",
        "data-sentry-source-file": "ThemeContainer.tsx",
        children: e
    })])
}, 651235, e => {
    let t = e.i(690019).U;
    e.s(["f", 0, t])
}, 541289, e => {
    var t = e.i(796573);
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
        n = {
            xs: "mango:container-xs",
            sm: "mango:container-sm",
            md: "mango:container-md",
            lg: "mango:container-lg",
            xl: "mango:container-xl"
        };
    var r = e.i(996068),
        o = e.i(167358);
    e.s(["f", 0, ({
        children: e,
        className: s,
        style: i,
        theme: c = "light",
        padding: m,
        container: d
    }) => {
        let u = (0, t.f)(m?.top && a[m.top], m?.bottom && l[m.bottom]),
            p = d ? (0, o.jsx)("div", {
                className: n[d],
                children: e
            }) : e;
        return (0, o.jsx)("section", {
            className: (0, t.f)({
                dark: "dark" === c
            }),
            children: (0, o.jsx)(r.MangoThemeProvider, {
                theme: c,
                children: (0, o.jsx)("div", {
                    className: (0, t.f)(s, u),
                    style: i,
                    children: p
                })
            })
        })
    }], 541289)
}], 685851, e => {
    e.v(t => Promise.all(["static/chunks/28hytyl42ih2k.js"].map(t => e.l(t))).then(() => t(204748)))
}, 333682, e => {
    e.v(t => Promise.all(["static/chunks/2_u5vmmpqiyzo.js"].map(t => e.l(t))).then(() => t(202084)))
}, 337752, e => {
    e.v(t => Promise.all(["static/chunks/24y4-7sd3zdew.js", "static/chunks/1o17xr3wl2sr2.js"].map(t => e.l(t))).then(() => t(895397)))
}, 734013, e => {
    e.v(t => Promise.all(["static/chunks/32__uwblui83t.js", "static/chunks/43owzuf4umwc1.js", "static/chunks/1o17xr3wl2sr2.js"].map(t => e.l(t))).then(() => t(564924)))
}]);

//# debugId=f9d1e471-6b68-1424-65c8-f339bcad2678