(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 368244, 309674, e => {
    "use strict";
    var t = e.i(474610);
    let r = {
            current: null
        },
        a = {
            current: !1
        };
    e.s(["hasReducedMotionListener", 0, a, "prefersReducedMotion", 0, r], 309674), e.s(["initPrefersReducedMotion", 0, function() {
        if (a.current = !0, t.isBrowser)
            if (window.matchMedia) {
                let e = window.matchMedia("(prefers-reduced-motion)"),
                    t = () => r.current = e.matches;
                e.addEventListener("change", t), t()
            } else r.current = !1
    }], 368244)
}, 955429, e => {
    "use strict";
    var t = e.i(3931),
        r = e.i(368244),
        a = e.i(309674);
    e.s(["useReducedMotion", 0, function() {
        a.hasReducedMotionListener.current || (0, r.initPrefersReducedMotion)();
        let [e] = (0, t.useState)(a.prefersReducedMotion.current);
        return e
    }])
}, 430215, e => {
    "use strict";
    var t = e.i(3931);
    e.s(["default", 0, e => {
        let [r, a] = (0, t.useState)(!1);
        return (0, t.useEffect)(() => {
            let t = window.matchMedia(e);
            t.matches !== r && a(t.matches);
            let i = () => a(t.matches);
            return window.addEventListener("resize", i), () => window.removeEventListener("resize", i)
        }, [r, e]), r
    }])
}, 52971, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.default = void 0, r.default = {
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
    var t = e.i(500783),
        r = e.i(527714),
        a = e.i(52971),
        i = e.i(601198),
        n = e.i(810775),
        l = e.i(919406),
        o = e.i(864074),
        s = e.i(514683);
    r.Light.registerLanguage("csharp", i.default), r.Light.registerLanguage("javascript", n.default), r.Light.registerLanguage("xml", l.default), r.Light.registerLanguage("rust", o.default), r.Light.registerLanguage("css", s.default), e.s(["default", 0, ({
        code: e,
        language: i
    }) => (0, t.jsx)("div", {
        className: "text-white [&>pre]:rounded-xl [&>pre]:!p-4",
        children: (0, t.jsx)(r.Light, {
            style: a.default,
            language: i,
            children: e
        })
    })], 570133);
    var c = e.i(3931),
        d = e.i(749583),
        u = e.i(394225),
        f = e.i(652955),
        h = e.i(229696),
        p = e.i(722978),
        m = e.i(805518),
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
        y = ({
            children: e,
            colTitle: r,
            truncationEnabled: a,
            rowTitle: i,
            className: n = "",
            isTableCell: l
        }) => {
            let [o, s] = (0, c.useState)(!1), [u, f] = (0, c.useState)(!1), h = (0, c.useRef)(null), y = (0, p.default)({
                "cursor-pointer relative": o
            }, n), v = (0, p.default)({
                "line-clamp-3": a
            });
            (0, c.useEffect)(() => {
                let e = h.current;
                e && (e.scrollHeight > e.clientHeight ? s(!0) : s(!1))
            }, [h]);
            let w = () => {
                    f(!0)
                },
                j = a && o ? {
                    tabIndex: 0,
                    role: "button",
                    onClick: w,
                    onKeyDown: e => {
                        ("Enter" === e.key || "Space" === e.key) && w()
                    }
                } : {};
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsxs)("td", {
                    className: (0, p.default)(y, {
                        "bg-gray-50 p-3 dark:bg-gray-900": !l,
                        "h-full !p-0": l
                    }),
                    ...j,
                    children: [l ? e : (0, t.jsx)(m.default, {
                        className: v,
                        ref: h,
                        children: e
                    }), a && o && (0, t.jsx)(x, {
                        className: "absolute top-1.5 right-1.5"
                    })]
                }), (0, t.jsx)(g.default, {
                    isOpen: u,
                    onOpenChange: f,
                    showTriggerButton: !1,
                    children: (0, t.jsxs)("div", {
                        className: "mt-20 flex w-6/12 flex-col rounded-3xl bg-white p-8 dark:bg-gray-800",
                        tabIndex: -1,
                        children: [(0, t.jsx)(d.default, {
                            onPress: () => {
                                f(!1)
                            },
                            variant: "secondary",
                            className: "self-end",
                            children: (0, t.jsx)(b, {})
                        }), (0, t.jsx)(m.default, {
                            className: "caption-sm mb-2.5 text-black dark:text-white",
                            children: i
                        }), (0, t.jsx)("div", {
                            className: "text-heading-sm mb-4 text-black dark:text-white",
                            children: r
                        }), (0, t.jsx)("div", {
                            className: "text-small mb-8",
                            children: (0, t.jsx)(m.default, {
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
        className: r = "",
        verticalHeadingClass: a = "",
        hideTitle: i = !1
    }) => {
        let [n, ...l] = e.rows.map(e => ({
            ...e,
            cells: (e.cells ?? []).map(e => "string" == typeof e ? e : "")
        })), o = `align-top text-heading-sm md:text-small-bold rounded-md bg-gray-100 text-gray-800 bg-gray-100 dark:bg-gray-700 md:dark:bg-gray-800 dark:text-gray-200 border-none ${a}`, s = "align-top rounded-md text-sm text-gray-800 dark:text-gray-200 border-none", g = (0, p.default)("w-full table-fixed border-separate border-spacing-2 break-words", r), x = (0, p.default)("h-full table-fixed border-separate border-spacing-1 break-words", r), b = (0, c.useCallback)(e => {
            let [r, ...a] = e.split("\n"), i = a.splice(1).map((e, r) => {
                let a = e.split("|").filter(e => e).map(e => e.trim());
                return (0, t.jsx)("div", {
                    className: "flex grow",
                    children: a.map((e, a) => (0, t.jsx)(h.default, {
                        className: "flex grow basis-0 items-center justify-center rounded-md bg-gray-50 px-6 py-4 text-center dark:bg-gray-900",
                        children: e
                    }, `cell-${r}-${a}-${e}`))
                }, `row-${r}`)
            });
            return (0, t.jsxs)("div", {
                className: "flex h-full flex-col",
                children: [(0, t.jsx)("div", {
                    className: "-ml-1 flex grow",
                    children: r.split("|").filter(e => e).map((e, r) => (0, t.jsx)(h.default, {
                        className: "ml-1 flex grow basis-0 items-center justify-center rounded-md bg-gray-50 px-6 py-4 text-center dark:bg-gray-900",
                        children: e.trim()
                    }, `header-cell-${r}-${e}`))
                }), i]
            })
        }, []), v = (0, c.useMemo)(() => l.map(e => e.cells.reduce((e, r, a) => ({
            ...e,
            [`col${a+1}`]: {
                component: r.startsWith("|") ? b(r) : (0, t.jsx)(h.default, {
                    options: {
                        overrides: {
                            Button: {
                                component: d.default
                            },
                            Label: {
                                component: u.default
                            },
                            Tooltip: {
                                component: f.default
                            }
                        }
                    },
                    children: r
                }),
                isTableCell: r.startsWith("|"),
                cellContent: r
            }
        }), {})), [l, b]), w = (0, c.useMemo)(() => n.cells.map((e, r) => (0, t.jsx)("th", {
            scope: "col",
            className: "min-w-[10rem] rounded-md border-none bg-gray-100 py-3.5 pr-4 pl-4 text-left align-top text-gray-800 dark:bg-gray-800 dark:text-gray-400",
            children: (0, t.jsx)(h.default, {
                options: {
                    overrides: {
                        Button: {
                            component: d.default
                        },
                        Label: {
                            component: u.default
                        },
                        Tooltip: {
                            component: f.default
                        }
                    }
                },
                children: e
            })
        }, `${r}-${e}`)), [n.cells]), j = (0, c.useMemo)(() => v.map((r, a) => {
            let i = Object.values(r),
                n = i[0];
            return (0, t.jsx)("tr", {
                className: "border-separate border-spacing-1",
                children: i.map((r, i) => (0, t.jsx)(y, {
                    isTableCell: r.isTableCell,
                    className: 0 === i ? o : s,
                    rowTitle: n.component,
                    colTitle: 0 !== i && w && w[i] ? w[i] : "",
                    truncationEnabled: e.tableTruncation,
                    children: r.component
                }, `${a}-${i}-${r.cellContent}`))
            }, a)
        }), [w, v, o, e.tableTruncation]), k = (0, c.useMemo)(() => n.cells.map((e, r) => (0, t.jsx)("th", {
            scope: "col",
            className: "text-tiny-bold rounded-md bg-gray-100 py-3.5 pr-4 pl-4 text-left align-top text-gray-800 dark:bg-gray-900 dark:text-gray-400",
            children: (0, t.jsx)(h.default, {
                options: {
                    overrides: {
                        Button: {
                            component: d.default
                        },
                        Label: {
                            component: u.default
                        },
                        Tooltip: {
                            component: f.default
                        }
                    }
                },
                children: e
            })
        }, `${r}-${e}`)), [n]), N = (0, c.useMemo)(() => v.map((e, r) => (0, t.jsx)("div", {
            className: "mb-4 min-w-full rounded-md bg-gray-100 align-middle dark:bg-gray-700",
            children: (0, t.jsxs)("table", {
                className: g,
                children: [n && n.cells.length > 0 && (0, t.jsx)("thead", {
                    className: "hidden",
                    children: (0, t.jsx)("tr", {
                        className: "border-separate border-spacing-1",
                        children: k
                    })
                }), (0, t.jsx)("tbody", {
                    className: "table-row-group bg-gray-50 dark:bg-gray-900",
                    children: Object.values(e).map((e, a) => e ? (0, t.jsx)("tr", {
                        className: "rounded-md",
                        children: (0, t.jsxs)("td", {
                            className: 0 === a ? o : s,
                            children: [0 !== a && n && n.cells[a] && (0, t.jsx)(h.default, {
                                options: {
                                    overrides: {
                                        Button: {
                                            component: d.default
                                        },
                                        Label: {
                                            component: u.default
                                        },
                                        Tooltip: {
                                            component: f.default
                                        }
                                    }
                                },
                                children: n.cells[a]
                            }), (0, t.jsx)(m.default, {
                                children: e.component
                            })]
                        })
                    }, `${r}-${a}-${n.cells[a]}`) : null)
                })]
            })
        }, `row-${r}`)), [v, n, g, o, k]);
        return (0, t.jsxs)("div", {
            children: [(0, t.jsx)("div", {
                className: "sm:flex sm:items-center",
                children: (0, t.jsxs)("div", {
                    className: "sm:flex-auto",
                    children: [!i && e.tableTitle && (0, t.jsx)("div", {
                        className: "text-heading-sm",
                        children: e.tableTitle
                    }), !i && e.tableDescription && (0, t.jsx)("p", {
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
                            children: [w && (0, t.jsx)("thead", {
                                className: "table-header-group",
                                children: (0, t.jsx)("tr", {
                                    className: "border-separate border-spacing-1",
                                    children: w
                                })
                            }), (0, t.jsx)("tbody", {
                                className: "table-row-group",
                                children: j
                            })]
                        })
                    }), (0, t.jsxs)("div", {
                        className: "md:hidden",
                        children: [(0, t.jsx)("div", {
                            className: "text-body-bold mb-4",
                            children: (0, t.jsx)(h.default, {
                                options: {
                                    overrides: {
                                        Button: {
                                            component: d.default
                                        },
                                        Label: {
                                            component: u.default
                                        },
                                        Tooltip: {
                                            component: f.default
                                        }
                                    }
                                },
                                children: n && n.cells && n.cells[0] ? n.cells[0] : ""
                            })
                        }), N]
                    })]
                })
            })]
        })
    }], 210310)
}, 644995, e => {
    "use strict";
    var t = e.i(500783);
    e.s(["default", 0, ({
        className: e = "",
        width: r = 16,
        height: a = 16
    }) => (0, t.jsxs)("svg", {
        width: r,
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
}, 783078, e => {
    "use strict";
    var t, r = ((t = r || {})[t.Small = 425] = "Small", t[t.Medium = 744] = "Medium", t[t.Large = 1024] = "Large", t[t.XLarge = 1440] = "XLarge", t);
    e.s(["default", 0, r])
}, 387660, e => {
    "use strict";
    var t = e.i(869324);
    e.s(["pushVideoEvent", 0, e => {
        let r = (({
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
        (0, t.default)(r)
    }])
}, 79389, e => {
    "use strict";
    var t = e.i(3931),
        r = function() {
            return (r = Object.assign || function(e) {
                for (var t, r = 1, a = arguments.length; r < a; r++)
                    for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }).apply(this, arguments)
        },
        a = t.forwardRef(function(e, a) {
            var i = t.useState(!1),
                n = i[0],
                l = i[1],
                o = t.useState(!1),
                s = o[0],
                c = o[1],
                d = encodeURIComponent(e.id),
                u = "string" == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
                f = e.title,
                h = e.poster || "hqdefault",
                p = "&".concat(e.params) || "",
                m = e.muted ? "&mute=1" : "",
                g = e.announce || "Watch",
                x = e.webp ? "webp" : "jpg",
                b = e.webp ? "vi_webp" : "vi",
                y = e.thumbnail || (e.playlist ? "https://i.ytimg.com/".concat(b, "/").concat(u, "/").concat(h, ".").concat(x) : "https://i.ytimg.com/".concat(b, "/").concat(d, "/").concat(h, ".").concat(x)),
                v = e.noCookie ? "https://www.youtube-nocookie.com" : "https://www.youtube.com";
            v = e.cookie ? "https://www.youtube.com" : "https://www.youtube-nocookie.com";
            var w = e.playlist ? "".concat(v, "/embed/videoseries?autoplay=1").concat(m, "&list=").concat(d).concat(p) : "".concat(v, "/embed/").concat(d, "?autoplay=1&state=1").concat(m).concat(p),
                j = e.activatedClass || "lyt-activated",
                k = e.adNetwork || !1,
                N = e.aspectHeight || 9,
                C = e.aspectWidth || 16,
                O = e.iframeClass || "",
                _ = e.playerClass || "lty-playbtn",
                I = e.wrapperClass || "yt-lite",
                E = e.onIframeAdded || function() {},
                L = e.rel ? "prefetch" : "preload",
                S = e.containerElement || "article";
            return t.useEffect(function() {
                s && E()
            }, [s]), t.createElement(t.Fragment, null, t.createElement("link", {
                rel: L,
                href: y,
                as: "image"
            }), t.createElement(t.Fragment, null, n && t.createElement(t.Fragment, null, t.createElement("link", {
                rel: "preconnect",
                href: v
            }), t.createElement("link", {
                rel: "preconnect",
                href: "https://www.google.com"
            }), k && t.createElement(t.Fragment, null, t.createElement("link", {
                rel: "preconnect",
                href: "https://static.doubleclick.net"
            }), t.createElement("link", {
                rel: "preconnect",
                href: "https://googleads.g.doubleclick.net"
            })))), t.createElement(S, {
                onPointerOver: function() {
                    n || l(!0)
                },
                onClick: function() {
                    s || c(!0)
                },
                className: "".concat(I, " ").concat(s ? j : ""),
                "data-title": f,
                style: r({
                    backgroundImage: "url(".concat(y, ")")
                }, {
                    "--aspect-ratio": "".concat(N / C * 100, "%")
                })
            }, t.createElement("button", {
                type: "button",
                className: _,
                "aria-label": "".concat(g, " ").concat(f)
            }), s && t.createElement("iframe", {
                ref: a,
                className: O,
                title: f,
                width: "560",
                height: "315",
                frameBorder: "0",
                allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: !0,
                src: w
            })))
        });
    e.s(["default", 0, a])
}, 195051, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(722990),
        a = e.i(749583),
        i = e.i(239273),
        n = e.i(805518);
    e.s(["default", 0, ({
        blockedMessage: e,
        consentButtonLabel: l
    }) => {
        let o = "C0004";
        return (0, t.jsx)(t.Fragment, {
            children: !(() => {
                let [e] = (0, i.default)("OptanonConsent") || "", t = {};
                return e && e.split("groups=")[1].split("&")[0].split("%2C").forEach(e => {
                    let [r, a] = e.split("%3A");
                    t[r] = parseInt(a)
                }), t[o]
            })() && (0, t.jsxs)("div", {
                className: "consent absolute top-0 right-0 bottom-0 left-0 z-10 flex flex-col items-center overflow-auto rounded-2xl bg-black p-3 leading-5 text-white opacity-90 sm:justify-center sm:p-5",
                children: [(0, t.jsx)(n.default, {
                    className: "mx-auto text-center sm:w-4/5 sm:text-base",
                    children: (0, t.jsx)(r.PortableText, {
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
                                t = document.getElementById(`ot-header-id-${o}`),
                                r = window;
                            r && r.OneTrust ? r.OneTrust.ToggleInfoDisplay() : e.click(), t.click()
                        },
                        children: l
                    })
                })]
            })
        })
    }])
}, 224601, 934172, 883027, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(3931),
        a = e.i(655105),
        i = e.i(193863),
        n = e.i(79389),
        l = e.i(363737),
        o = e.i(749583),
        s = e.i(644995),
        c = e.i(195051),
        d = e.i(545935),
        u = e.i(387660);
    let f = (e, t = !0) => {
        let [a, i] = (0, r.useState)(null);
        return (0, r.useEffect)(() => {
            let r;
            return t && e.current && (r = setInterval(() => {
                let t = window.YT;
                t && e.current && (i(new t.Player(e.current)), clearInterval(r))
            }, 500)), () => {
                i(null), clearInterval(r)
            }
        }, [t, e]), {
            player: a
        }
    };
    e.s(["useYoutubeAPI", 0, f], 934172), e.s(["default", 0, ({
        title: e,
        url: h,
        container: p = !1,
        blockedMessage: m,
        consentButtonLabel: g
    }) => {
        let x = (0, i.default)(h),
            [b, y] = (0, r.useState)(!1),
            v = (0, r.useRef)(null),
            w = (0, r.useRef)(null),
            {
                player: j
            } = f(v, b),
            k = () => {
                y(!0)
            };
        return (0, r.useEffect)(() => {
            j && (w.current = j.addEventListener("onStateChange", e => {
                if ([1, 2].includes(e.data)) {
                    let t = "function" == typeof j.getDuration && j.getDuration() || 0,
                        r = Number((("function" == typeof j.getCurrentTime && j.getCurrentTime() || 0) / t * 100).toFixed(2)),
                        a = 1 === e.data ? "video_play" : "video_pause";
                    (0, u.pushVideoEvent)({
                        name: a,
                        videoDuration: t,
                        videoProgress: (Number.isNaN(r), r)
                    })
                }
            }))
        }, [j]), (0, r.useEffect)(() => {
            if (!b && j?.playerInfo?.playerState === 1) {
                let e = "function" == typeof j.getDuration && j.getDuration() || 0,
                    t = Number((("function" == typeof j.getCurrentTime && j.getCurrentTime() || 0) / e * 100).toFixed(2));
                (0, u.pushVideoEvent)({
                    name: "video_pause",
                    videoDuration: e,
                    videoProgress: (Number.isNaN(t), t)
                })
            }
        }, [b, j]), (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(d.default, {
                src: "https://www.youtube.com/iframe_api"
            }), (0, t.jsxs)("div", {
                className: "relative h-full w-full self-center p-4 lg:p-0",
                children: [h && x && (0, t.jsxs)("div", {
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
                    }), (0, t.jsx)(a.default, {
                        className: "!relative",
                        style: {
                            borderRadius: "24px"
                        },
                        src: `https://img.youtube.com/vi/${x}/hqdefault.jpg`,
                        alt: e,
                        fill: !0
                    }), (0, t.jsx)(c.default, {
                        blockedMessage: m,
                        consentButtonLabel: g
                    })]
                }), (0, t.jsx)(l.default, {
                    isOpen: b,
                    onOpenChange: y,
                    showTriggerButton: !1,
                    children: (0, t.jsxs)("div", {
                        className: "z-50 mt-20 flex w-10/12 flex-col rounded-3xl bg-black p-4 lg:w-8/12",
                        tabIndex: -1,
                        children: [(0, t.jsx)(o.default, {
                            onPress: () => {
                                y(!1)
                            },
                            variant: "secondary",
                            className: "self-end overflow-hidden",
                            children: (0, t.jsx)(s.default, {
                                className: "z-[60] h-5 w-5 text-white"
                            })
                        }), (0, t.jsx)(n.default, {
                            id: x,
                            title: e,
                            iframeClass: "yt-iframe",
                            poster: "hqdefault",
                            ref: v,
                            params: "enablejsapi=1"
                        }), (0, t.jsx)(c.default, {
                            blockedMessage: m,
                            consentButtonLabel: g
                        })]
                    })
                })]
            })]
        })
    }], 224601);
    var h = e.i(722978),
        p = e.i(475200);
    e.s(["default", 0, ({
        pdf: e,
        hidePdfToolbar: r,
        url: a,
        mobilePdfButtonText: i,
        title: n,
        visualOptions: l,
        theme: s,
        isHidden: c
    }) => {
        let d = (0, p.default)(),
            u = e ? e.cdnURL : a,
            f = (0, h.default)("mb-8 md:mb-12", {
                "bg-black py-16": l?.container && "dark" === s,
                "bg-white py-16": l?.container && "light" === s
            }),
            m = (0, h.default)({
                container: l?.container
            }),
            g = e && d;
        return (0, t.jsx)(t.Fragment, {
            children: !c && (0, t.jsx)("div", {
                className: f,
                children: (0, t.jsx)("div", {
                    className: m,
                    children: (0, t.jsxs)("div", {
                        className: "relative",
                        children: [(0, t.jsx)("iframe", {
                            className: "aspect-[4/3] w-full rounded-xl",
                            src: `${u}?#view=fit&navpanes=0${r?"&toolbar=0":""}`,
                            title: n ?? ""
                        }), g && (0, t.jsx)("div", {
                            className: "absolute inset-0 flex items-center justify-center rounded-xl bg-black/80",
                            children: (0, t.jsx)(o.default, {
                                href: u,
                                variant: "primary",
                                size: "large",
                                rounded: !0,
                                children: i || "PDF"
                            })
                        })]
                    })
                })
            })
        })
    }], 883027)
}, 998569, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(3931),
        a = e.i(595388),
        i = e.i(722978),
        n = e.i(372474),
        l = e.i(897884),
        o = e.i(582374),
        s = e.i(427651),
        c = e.i(604082),
        d = e.i(166010),
        u = e.i(939115);
    let f = (0, r.forwardRef)(function({
        variant: e = "secondary",
        ariaLabel: f,
        size: h = "medium",
        direction: p = "right",
        className: m = "",
        href: g,
        onPress: x,
        isDisabled: b,
        isForcedHover: y,
        tag: v = "button",
        ...w
    }, j) {
        let k = (0, d.useObjectRef)(j),
            [N, C] = (0, r.useState)(!1),
            {
                buttonProps: O
            } = (0, n.useButton)({
                variant: e,
                size: h,
                direction: p,
                className: m,
                elementType: g ? "a" : v,
                onPress: x,
                href: g,
                isDisabled: b,
                ...w
            }, k),
            {
                hoverProps: _,
                isHovered: I
            } = (0, l.useHover)({
                isDisabled: b
            }),
            {
                focusProps: E
            } = (0, o.useFocus)({
                onFocusChange(e) {
                    C(e && (0, s.isFocusVisible)() || !1)
                }
            }),
            L = (0, i.clsx)("btn-outlined cursor-pointer flex justify-start items-center outline-hidden border-solid border-2 rounded-full overflow-hidden", {
                primary: "btn-primary",
                secondary: "btn-secondary"
            } [e], {
                medium: "w-9 h-9",
                large: "w-14 h-14"
            } [h], {
                right: "",
                up: "-rotate-90",
                left: "rotate-180",
                down: "rotate-90"
            } [p], {
                hovered: I || y
            }, {
                focused: N
            }, {
                "!border-gray-400 pointer-events-none": b
            }, m),
            S = (0, i.clsx)("w-full transition-all duration-300 shrink-0 ", {
                "fill-gray-400": b
            }),
            A = (0, i.clsx)(S, {
                "fill-white": "primary" === e
            }, {
                "fill-white dark:fill-black": "secondary" === e
            }, {
                "-ml-[100%]": !I && !N && !y
            }, {
                "ml-0": I || N || y
            }),
            M = (0, i.clsx)(S, "fill-black dark:fill-white");
        if (g) {
            let e = (0, c.mergeProps)(O, _, E);
            return (0, t.jsxs)(a.Link, {
                ...e,
                ref: k,
                "aria-label": f,
                className: L,
                href: g,
                legacyBehavior: !0,
                children: [(0, t.jsx)(u.ArrowIcon, {
                    className: A
                }), (0, t.jsx)(u.ArrowIcon, {
                    className: M
                })]
            })
        }
        return (0, t.jsxs)(v, {
            ...(0, c.mergeProps)(O, _, E),
            ref: k,
            "aria-label": f,
            className: L,
            tabIndex: "span" == v ? -1 : 0,
            children: [(0, t.jsx)(u.ArrowIcon, {
                className: A
            }), (0, t.jsx)(u.ArrowIcon, {
                className: M
            })]
        })
    });
    e.s(["default", 0, f])
}, 186114, e => {
    "use strict";
    var t = e.i(500783);
    e.s(["default", 0, ({
        className: e,
        handleIsPlaying: r,
        label: a,
        ...i
    }) => (0, t.jsx)("div", {
        className: e,
        children: (0, t.jsx)("button", {
            className: "transition-bg bg-blue hover:bg-blue-dark flex h-20 w-20 transform items-center justify-center rounded-full duration-300",
            onClick: r,
            type: "button",
            "aria-label": a,
            ...i,
            children: (0, t.jsx)("span", {
                className: "block h-6 w-6",
                children: (0, t.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 20 20",
                    children: (0, t.jsx)("path", {
                        fill: "#fff",
                        stroke: "#fff",
                        d: "M17.95 9.998v.004a.429.429 0 0 1-.207.37l-.004.001L6.483 17.26a.45.45 0 0 1-.456.009l-.002-.001a.44.44 0 0 1-.164-.16l-.69.404.69-.405a.44.44 0 0 1-.061-.221V3.116a.439.439 0 0 1 .225-.382l.002-.001a.45.45 0 0 1 .455.008L17.74 9.627l.003.003a.429.429 0 0 1 .208.368Z"
                    })
                })
            })
        })
    })])
}, 789924, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(3931),
        a = e.i(595388),
        i = e.i(722978),
        n = e.i(749583),
        l = e.i(998569);
    let o = ({
            title: e,
            titleTag: o,
            description: s,
            action: c,
            fullWidth: d
        }) => {
            let [u, f] = (0, r.useState)(!1), h = "relative block border-t border-solid border-gray-200 dark:border-gray-700", p = (0, t.jsxs)("div", {
                className: (0, i.default)("grid gap-4 pt-2 pb-8 md:grid-cols-3", {
                    "md:grid-cols-[2fr_1fr_auto]": d
                }),
                children: [(0, t.jsx)(o || "h2", {
                    className: "loco-text-heading-xs",
                    children: e
                }), (0, t.jsx)("div", {
                    children: (0, t.jsx)("p", {
                        className: "loco-text-body-sm opacity-70",
                        children: s
                    })
                }), c && c?.label && (0, t.jsx)("div", {
                    className: "shrink-0 text-right",
                    children: (0, t.jsx)(n.default, {
                        tag: "span",
                        outlined: !0,
                        rounded: !0,
                        hasArrow: !0,
                        active: u,
                        disabled: c.disabled,
                        children: c.label
                    })
                }), c && !c?.label && (0, t.jsx)("div", {
                    className: "flex shrink-0 justify-end text-right",
                    children: (0, t.jsx)(l.default, {
                        variant: "primary"
                    })
                })]
            });
            return !c || c.disabled ? (0, t.jsx)("div", {
                className: h,
                children: p
            }) : (0, t.jsx)(a.Link, {
                href: c.href,
                rel: "_blank" === c.target ? "noopener noreferrer" : void 0,
                target: c.target,
                title: c.label,
                onMouseOver: () => {
                    f(!0)
                },
                onMouseLeave: () => {
                    f(!1)
                },
                className: h,
                children: p
            })
        },
        s = ({
            theme: e = "light",
            fullWidth: r = !1,
            features: a = []
        }) => {
            let n = (0, i.default)({
                dark: "dark" === e
            });
            return (0, t.jsx)("section", {
                className: n,
                children: (0, t.jsx)("div", {
                    className: "relative px-4 py-16 lg:pt-6 lg:pb-16 dark:bg-black",
                    children: (0, t.jsx)("div", {
                        className: "mx-auto max-w-[1800px] md:grid md:grid-cols-12 md:gap-2",
                        children: a && (0, t.jsx)("div", {
                            className: (0, i.default)("col-start-1 col-end-13 row-start-3 lg:col-end-13", {
                                "lg:col-start-4": !r
                            }),
                            children: (0, t.jsx)("div", {
                                className: "lg:grid lg:grid-cols-8 lg:gap-2",
                                children: (0, t.jsx)("div", {
                                    className: "lg:col-start-1 lg:col-end-9",
                                    children: a.map((e, a) => (0, t.jsx)(o, {
                                        fullWidth: r,
                                        titleTag: "p",
                                        ...e
                                    }, `feature-list-${a}`))
                                })
                            })
                        })
                    })
                })
            })
        };
    e.s(["default", 0, ({
        theme: e,
        features: r,
        isHidden: a,
        featuresBlog: i,
        fullWidth: n
    }) => {
        let l;
        l = r?.map(e => ({
            title: e?.title || "",
            description: e?.description || "",
            action: e?.action ? {
                label: e.action.title || "",
                href: e.action.link?.linkReference?.href.current || "",
                target: e.action.link?.linkReference?.target === "_blank" ? "_blank" : "_self",
                disabled: e.action.disabled
            } : null
        })) || [];
        let o = (e, t) => e?.length > t ? `${e.substring(0,t)}...` : e;
        return l?.length === 0 && (l = i?.map(e => ({
            title: e?.title || "",
            description: o(e?.seo?.teaserText, 250) || o(e?.seo?.description, 250) || "",
            action: e?.pageUrl?.link?.href?.current ? {
                label: "",
                href: e?.pageUrl?.link?.href?.current || "",
                target: e?.pageUrl?.link?.target === "_blank" ? "_blank" : "_self"
            } : null
        })) || []), (0, t.jsx)(t.Fragment, {
            children: !a && (0, t.jsx)(s, {
                theme: "dark" === e ? "dark" : "light",
                features: l,
                fullWidth: n
            })
        })
    }], 789924)
}, 824627, e => {
    "use strict";
    var t = function(e, r) {
            return (t = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            })(e, r)
        },
        r = function() {
            return (r = Object.assign || function(e) {
                for (var t, r = 1, a = arguments.length; r < a; r++)
                    for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }).apply(this, arguments)
        };

    function a(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            r = t && e[t],
            a = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && a >= e.length && (e = void 0), {
                    value: e && e[a++],
                    done: !e
                }
            }
        };
        throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function i(e) {
        return this instanceof i ? (this.v = e, this) : new i(e)
    }
    "function" == typeof SuppressedError && SuppressedError, e.s(["__assign", () => r, "__asyncGenerator", 0, function(e, t, r) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var a, n = r.apply(e, t || []),
            l = [];
        return a = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), o("next"), o("throw"), o("return", function(e) {
            return function(t) {
                return Promise.resolve(t).then(e, d)
            }
        }), a[Symbol.asyncIterator] = function() {
            return this
        }, a;

        function o(e, t) {
            n[e] && (a[e] = function(t) {
                return new Promise(function(r, a) {
                    l.push([e, t, r, a]) > 1 || s(e, t)
                })
            }, t && (a[e] = t(a[e])))
        }

        function s(e, t) {
            try {
                var r;
                (r = n[e](t)).value instanceof i ? Promise.resolve(r.value.v).then(c, d) : u(l[0][2], r)
            } catch (e) {
                u(l[0][3], e)
            }
        }

        function c(e) {
            s("next", e)
        }

        function d(e) {
            s("throw", e)
        }

        function u(e, t) {
            e(t), l.shift(), l.length && s(l[0][0], l[0][1])
        }
    }, "__asyncValues", 0, function(e) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = a(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
            return this
        }, t);

        function i(r) {
            t[r] = e[r] && function(t) {
                return new Promise(function(a, i) {
                    var n, l, o;
                    n = a, l = i, o = (t = e[r](t)).done, Promise.resolve(t.value).then(function(e) {
                        n({
                            value: e,
                            done: o
                        })
                    }, l)
                })
            }
        }
    }, "__await", 0, i, "__awaiter", 0, function(e, t, r, a) {
        return new(r || (r = Promise))(function(i, n) {
            function l(e) {
                try {
                    s(a.next(e))
                } catch (e) {
                    n(e)
                }
            }

            function o(e) {
                try {
                    s(a.throw(e))
                } catch (e) {
                    n(e)
                }
            }

            function s(e) {
                var t;
                e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(l, o)
            }
            s((a = a.apply(e, t || [])).next())
        })
    }, "__extends", 0, function(e, r) {
        if ("function" != typeof r && null !== r) throw TypeError("Class extends value " + String(r) + " is not a constructor or null");

        function a() {
            this.constructor = e
        }
        t(e, r), e.prototype = null === r ? Object.create(r) : (a.prototype = r.prototype, new a)
    }, "__generator", 0, function(e, t) {
        var r, a, i, n = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            },
            l = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return l.next = o(0), l.throw = o(1), l.return = o(2), "function" == typeof Symbol && (l[Symbol.iterator] = function() {
            return this
        }), l;

        function o(o) {
            return function(s) {
                var c = [o, s];
                if (r) throw TypeError("Generator is already executing.");
                for (; l && (l = 0, c[0] && (n = 0)), n;) try {
                    if (r = 1, a && (i = 2 & c[0] ? a.return : c[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, c[1])).done) return i;
                    switch (a = 0, i && (c = [2 & c[0], i.value]), c[0]) {
                        case 0:
                        case 1:
                            i = c;
                            break;
                        case 4:
                            return n.label++, {
                                value: c[1],
                                done: !1
                            };
                        case 5:
                            n.label++, a = c[1], c = [0];
                            continue;
                        case 7:
                            c = n.ops.pop(), n.trys.pop();
                            continue;
                        default:
                            if (!(i = (i = n.trys).length > 0 && i[i.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                n = 0;
                                continue
                            }
                            if (3 === c[0] && (!i || c[1] > i[0] && c[1] < i[3])) {
                                n.label = c[1];
                                break
                            }
                            if (6 === c[0] && n.label < i[1]) {
                                n.label = i[1], i = c;
                                break
                            }
                            if (i && n.label < i[2]) {
                                n.label = i[2], n.ops.push(c);
                                break
                            }
                            i[2] && n.ops.pop(), n.trys.pop();
                            continue
                    }
                    c = t.call(e, n)
                } catch (e) {
                    c = [6, e], a = 0
                } finally {
                    r = i = 0
                }
                if (5 & c[0]) throw c[1];
                return {
                    value: c[0] ? c[1] : void 0,
                    done: !0
                }
            }
        }
    }, "__read", 0, function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var a, i, n = r.call(e),
            l = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(a = n.next()).done;) l.push(a.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                a && !a.done && (r = n.return) && r.call(n)
            } finally {
                if (i) throw i.error
            }
        }
        return l
    }, "__rest", 0, function(e, t) {
        var r = {};
        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && 0 > t.indexOf(a) && (r[a] = e[a]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (var i = 0, a = Object.getOwnPropertySymbols(e); i < a.length; i++) 0 > t.indexOf(a[i]) && Object.prototype.propertyIsEnumerable.call(e, a[i]) && (r[a[i]] = e[a[i]]);
        return r
    }, "__spreadArray", 0, function(e, t, r) {
        if (r || 2 == arguments.length)
            for (var a, i = 0, n = t.length; i < n; i++) !a && i in t || (a || (a = Array.prototype.slice.call(t, 0, i)), a[i] = t[i]);
        return e.concat(a || Array.prototype.slice.call(t))
    }, "__values", 0, a])
}, 583796, e => {
    "use strict";
    var t = {
            0: 8203,
            1: 8204,
            2: 8205,
            3: 8290,
            4: 8291,
            5: 8288,
            6: 65279,
            7: 8289,
            8: 119155,
            9: 119156,
            a: 119157,
            b: 119158,
            c: 119159,
            d: 119160,
            e: 119161,
            f: 119162
        },
        r = {
            0: 8203,
            1: 8204,
            2: 8205,
            3: 65279
        },
        a = [, , , , ].fill(String.fromCodePoint(r[0])).join("");
    Object.fromEntries(Object.entries(r).map(e => e.reverse())), Object.fromEntries(Object.entries(t).map(e => e.reverse()));
    var i = `${Object.values(t).map(e=>`\\u{${e.toString(16)}}`).join("")}`,
        n = RegExp(`[${i}]{4,}`, "gu");
    e.s(["C", 0, function(e, t, i = "auto") {
        let n;
        return !0 === i || "auto" === i && (!(!Number.isNaN(Number(e)) || /[a-z]/i.test(e) && !/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(e)) && Date.parse(e) || function(e) {
            try {
                new URL(e, e.startsWith("/") ? "https://acme.com" : void 0)
            } catch {
                return !1
            }
            return !0
        }(e)) ? e : `${e}${n=JSON.stringify(t),`${a}${Array.from(n).map(e=>{let t=e.charCodeAt(0);if(t>255)throw Error(`Only ASCII edit info can be encoded. Error attempting to encode ${n} on character ${e} (${t})`);return Array.from(t.toString(4).padStart(4,"0")).map(e=>String.fromCodePoint(r[e])).join("")}).join("")}`}`
    }, "isRecord", 0, function(e) {
        return "object" == typeof e && null !== e && !Array.isArray(e)
    }, "stegaClean", 0, function(e) {
        var t, r;
        return e && JSON.parse({
            cleaned: (t = JSON.stringify(e)).replace(n, ""),
            encoded: (null == (r = t.match(n)) ? void 0 : r[0]) || ""
        }.cleaned)
    }])
}, 477846, (e, t, r) => {
    e.e, t.exports = function() {
        function e(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, a = Array(t); r < t; r++) a[r] = e[r];
            return a
        }

        function t() {
            return (t = Object.assign.bind()).apply(null, arguments)
        }
        var r = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";

        function a(e) {
            return ("image-" + e.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/, "-$1")
        }
        var i = [
                ["width", "w"],
                ["height", "h"],
                ["format", "fm"],
                ["download", "dl"],
                ["blur", "blur"],
                ["sharpen", "sharp"],
                ["invert", "invert"],
                ["orientation", "or"],
                ["minHeight", "min-h"],
                ["maxHeight", "max-h"],
                ["minWidth", "min-w"],
                ["maxWidth", "max-w"],
                ["quality", "q"],
                ["fit", "fit"],
                ["crop", "crop"],
                ["saturation", "sat"],
                ["auto", "auto"],
                ["dpr", "dpr"],
                ["pad", "pad"],
                ["frame", "frame"]
            ],
            n = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
            l = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"],
            o = ["format"],
            s = function() {
                function s(e, r) {
                    this.options = void 0, this.options = e ? t({}, e.options || {}, r || {}) : t({}, r || {})
                }
                var c = s.prototype;
                return c.withOptions = function(r) {
                    var a = r.baseUrl || this.options.baseUrl,
                        n = {
                            baseUrl: a
                        };
                    for (var l in r) r.hasOwnProperty(l) && (n[function(t) {
                        for (var r, a = function(t) {
                                var r = "u" > typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                if (r) return (r = r.call(t)).next.bind(r);
                                if (Array.isArray(t) || (r = function(t) {
                                        if (t) {
                                            if ("string" == typeof t) return e(t, void 0);
                                            var r = ({}).toString.call(t).slice(8, -1);
                                            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? e(t, void 0) : void 0
                                        }
                                    }(t))) {
                                    r && (t = r);
                                    var a = 0;
                                    return function() {
                                        return a >= t.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: t[a++]
                                        }
                                    }
                                }
                                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }(i); !(r = a()).done;) {
                            var n = r.value,
                                l = n[0],
                                o = n[1];
                            if (t === l || t === o) return l
                        }
                        return t
                    }(l)] = r[l]);
                    return new s(this, t({
                        baseUrl: a
                    }, n))
                }, c.image = function(e) {
                    return this.withOptions({
                        source: e
                    })
                }, c.dataset = function(e) {
                    return this.withOptions({
                        dataset: e
                    })
                }, c.projectId = function(e) {
                    return this.withOptions({
                        projectId: e
                    })
                }, c.bg = function(e) {
                    return this.withOptions({
                        bg: e
                    })
                }, c.dpr = function(e) {
                    return this.withOptions(e && 1 !== e ? {
                        dpr: e
                    } : {})
                }, c.width = function(e) {
                    return this.withOptions({
                        width: e
                    })
                }, c.height = function(e) {
                    return this.withOptions({
                        height: e
                    })
                }, c.focalPoint = function(e, t) {
                    return this.withOptions({
                        focalPoint: {
                            x: e,
                            y: t
                        }
                    })
                }, c.maxWidth = function(e) {
                    return this.withOptions({
                        maxWidth: e
                    })
                }, c.minWidth = function(e) {
                    return this.withOptions({
                        minWidth: e
                    })
                }, c.maxHeight = function(e) {
                    return this.withOptions({
                        maxHeight: e
                    })
                }, c.minHeight = function(e) {
                    return this.withOptions({
                        minHeight: e
                    })
                }, c.size = function(e, t) {
                    return this.withOptions({
                        width: e,
                        height: t
                    })
                }, c.blur = function(e) {
                    return this.withOptions({
                        blur: e
                    })
                }, c.sharpen = function(e) {
                    return this.withOptions({
                        sharpen: e
                    })
                }, c.rect = function(e, t, r, a) {
                    return this.withOptions({
                        rect: {
                            left: e,
                            top: t,
                            width: r,
                            height: a
                        }
                    })
                }, c.format = function(e) {
                    return this.withOptions({
                        format: e
                    })
                }, c.invert = function(e) {
                    return this.withOptions({
                        invert: e
                    })
                }, c.orientation = function(e) {
                    return this.withOptions({
                        orientation: e
                    })
                }, c.quality = function(e) {
                    return this.withOptions({
                        quality: e
                    })
                }, c.forceDownload = function(e) {
                    return this.withOptions({
                        download: e
                    })
                }, c.flipHorizontal = function() {
                    return this.withOptions({
                        flipHorizontal: !0
                    })
                }, c.flipVertical = function() {
                    return this.withOptions({
                        flipVertical: !0
                    })
                }, c.ignoreImageParams = function() {
                    return this.withOptions({
                        ignoreImageParams: !0
                    })
                }, c.fit = function(e) {
                    if (-1 === n.indexOf(e)) throw Error('Invalid fit mode "' + e + '"');
                    return this.withOptions({
                        fit: e
                    })
                }, c.crop = function(e) {
                    if (-1 === l.indexOf(e)) throw Error('Invalid crop mode "' + e + '"');
                    return this.withOptions({
                        crop: e
                    })
                }, c.saturation = function(e) {
                    return this.withOptions({
                        saturation: e
                    })
                }, c.auto = function(e) {
                    if (-1 === o.indexOf(e)) throw Error('Invalid auto mode "' + e + '"');
                    return this.withOptions({
                        auto: e
                    })
                }, c.pad = function(e) {
                    return this.withOptions({
                        pad: e
                    })
                }, c.vanityName = function(e) {
                    return this.withOptions({
                        vanityName: e
                    })
                }, c.frame = function(e) {
                    if (1 !== e) throw Error('Invalid frame value "' + e + '"');
                    return this.withOptions({
                        frame: e
                    })
                }, c.url = function() {
                    return function(e) {
                        var n = t({}, e || {}),
                            l = n.source;
                        delete n.source;
                        var o = function(e) {
                            var r, i;
                            if (!e) return null;
                            if ("string" == typeof e && (i = e, /^https?:\/\//.test("" + i))) r = {
                                asset: {
                                    _ref: a(e)
                                }
                            };
                            else if ("string" == typeof e) r = {
                                asset: {
                                    _ref: e
                                }
                            };
                            else if (e && "string" == typeof e._ref) r = {
                                asset: e
                            };
                            else if (e && "string" == typeof e._id) r = {
                                asset: {
                                    _ref: e._id || ""
                                }
                            };
                            else if (e && e.asset && "string" == typeof e.asset.url) r = {
                                asset: {
                                    _ref: a(e.asset.url)
                                }
                            };
                            else {
                                if ("object" != typeof e.asset) return null;
                                r = t({}, e)
                            }
                            return e.crop && (r.crop = e.crop), e.hotspot && (r.hotspot = e.hotspot),
                                function(e) {
                                    if (e.crop && e.hotspot) return e;
                                    var r = t({}, e);
                                    return r.crop || (r.crop = {
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        right: 0
                                    }), r.hotspot || (r.hotspot = {
                                        x: .5,
                                        y: .5,
                                        height: 1,
                                        width: 1
                                    }), r
                                }(r)
                        }(l);
                        if (!o) {
                            if (l && "object" == typeof l && null !== l && l._upload && (!l.asset || !l.asset._ref)) return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8HwQACfsD/QNViZkAAAAASUVORK5CYII=";
                            throw Error("Unable to resolve image URL from source (" + JSON.stringify(l) + ")")
                        }
                        var s = function(e) {
                                var t = e.split("-"),
                                    a = t[1],
                                    i = t[2],
                                    n = t[3];
                                if (!a || !i || !n) throw Error("Malformed asset _ref '" + e + "'. Expected an id like \"" + r + '".');
                                var l = i.split("x"),
                                    o = l[0],
                                    s = l[1],
                                    c = +o,
                                    d = +s;
                                if (!(isFinite(c) && isFinite(d))) throw Error("Malformed asset _ref '" + e + "'. Expected an id like \"" + r + '".');
                                return {
                                    id: a,
                                    width: c,
                                    height: d,
                                    format: n
                                }
                            }(o.asset._ref || o.asset._id || ""),
                            c = Math.round(o.crop.left * s.width),
                            d = Math.round(o.crop.top * s.height),
                            u = {
                                left: c,
                                top: d,
                                width: Math.round(s.width - o.crop.right * s.width - c),
                                height: Math.round(s.height - o.crop.bottom * s.height - d)
                            },
                            f = o.hotspot.height * s.height / 2,
                            h = o.hotspot.width * s.width / 2,
                            p = o.hotspot.x * s.width,
                            m = o.hotspot.y * s.height;
                        return n.rect || n.focalPoint || n.ignoreImageParams || n.crop || (n = t({}, n, function(e, t) {
                                var r, a = t.width,
                                    i = t.height;
                                if (!(a && i)) return {
                                    width: a,
                                    height: i,
                                    rect: e.crop
                                };
                                var n = e.crop,
                                    l = e.hotspot,
                                    o = a / i;
                                if (n.width / n.height > o) {
                                    var s = Math.round(n.height),
                                        c = Math.round(s * o),
                                        d = Math.max(0, Math.round(n.top)),
                                        u = Math.max(0, Math.round(Math.round((l.right - l.left) / 2 + l.left) - c / 2));
                                    u < n.left ? u = n.left : u + c > n.left + n.width && (u = n.left + n.width - c), r = {
                                        left: u,
                                        top: d,
                                        width: c,
                                        height: s
                                    }
                                } else {
                                    var f = n.width,
                                        h = Math.round(f / o),
                                        p = Math.max(0, Math.round(n.left)),
                                        m = Math.max(0, Math.round(Math.round((l.bottom - l.top) / 2 + l.top) - h / 2));
                                    m < n.top ? m = n.top : m + h > n.top + n.height && (m = n.top + n.height - h), r = {
                                        left: p,
                                        top: m,
                                        width: f,
                                        height: h
                                    }
                                }
                                return {
                                    width: a,
                                    height: i,
                                    rect: r
                                }
                            }({
                                crop: u,
                                hotspot: {
                                    left: p - h,
                                    top: m - f,
                                    right: p + h,
                                    bottom: m + f
                                }
                            }, n))),
                            function(e) {
                                var t = (e.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""),
                                    r = e.vanityName ? "/" + e.vanityName : "",
                                    a = e.asset.id + "-" + e.asset.width + "x" + e.asset.height + "." + e.asset.format + r,
                                    n = t + "/images/" + e.projectId + "/" + e.dataset + "/" + a,
                                    l = [];
                                if (e.rect) {
                                    var o = e.rect,
                                        s = o.left,
                                        c = o.top,
                                        d = o.width,
                                        u = o.height;
                                    (0 !== s || 0 !== c || u !== e.asset.height || d !== e.asset.width) && l.push("rect=" + s + "," + c + "," + d + "," + u)
                                }
                                e.bg && l.push("bg=" + e.bg), e.focalPoint && (l.push("fp-x=" + e.focalPoint.x), l.push("fp-y=" + e.focalPoint.y));
                                var f = [e.flipHorizontal && "h", e.flipVertical && "v"].filter(Boolean).join("");
                                return (f && l.push("flip=" + f), i.forEach(function(t) {
                                    var r = t[0],
                                        a = t[1];
                                    void 0 !== e[r] ? l.push(a + "=" + encodeURIComponent(e[r])) : void 0 !== e[a] && l.push(a + "=" + encodeURIComponent(e[a]))
                                }), 0 === l.length) ? n : n + "?" + l.join("&")
                            }(t({}, n, {
                                asset: s
                            }))
                    }(this.options)
                }, c.toString = function() {
                    return this.url()
                }, s
            }();
        return function(e) {
            if (e && "config" in e && "function" == typeof e.config) {
                var t = e.config(),
                    r = t.apiHost,
                    a = t.projectId,
                    i = t.dataset;
                return new s(null, {
                    baseUrl: (r || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
                    projectId: a,
                    dataset: i
                })
            }
            if (e && "clientConfig" in e && "object" == typeof e.clientConfig) {
                var n = e.clientConfig,
                    l = n.apiHost,
                    o = n.projectId,
                    c = n.dataset;
                return new s(null, {
                    baseUrl: (l || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
                    projectId: o,
                    dataset: c
                })
            }
            return new s(null, e || {})
        }
    }()
}, 779712, e => {
    "use strict";
    var t = e.i(591336);
    let r = (0, e.i(477846).default)(t.cdnClient);
    e.s(["urlForImage", 0, e => e ? r.image(e) : null])
}, 14452, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(722978);
    e.s(["default", 0, ({
        children: e,
        className: a = "",
        tag: i = "div"
    }) => {
        let n = (0, r.default)("loco-text-heading-sm mb-4", a);
        return (0, t.jsx)(i, {
            className: n,
            children: e
        })
    }], 14452)
}, 649042, 667900, 2062, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(3931),
        a = e.i(722990),
        i = e.i(722978),
        n = e.i(655105),
        l = e.i(825610),
        o = e.i(387660);
    let s = ({
        children: e,
        tag: r = "div",
        className: a = ""
    }) => {
        let n = (0, i.default)("loco-caption-lg-semibold mb-4", a);
        return (0, t.jsx)(r, {
            className: n,
            children: e
        })
    };
    e.s(["default", 0, s], 667900);
    var c = e.i(749583);
    let d = ({
        children: e,
        className: r = "",
        orientation: a = "horizontal"
    }) => {
        let n = (0, i.default)("flex gap-2 flex-wrap", {
            "flex-col items-start": "vertical" === a
        }, r);
        return (0, t.jsx)("div", {
            className: n,
            children: e
        })
    };
    e.s(["default", 0, d], 2062);
    var u = e.i(14452),
        f = e.i(805518),
        h = e.i(526826),
        p = e.i(766930);
    let m = ({
        features: e,
        transitionTime: a = 8500
    }) => {
        let [i, n] = (0, r.useState)(0), l = (0, r.useRef)(null), o = (0, r.useRef)(null), [s, d] = (0, r.useState)(!1), [u, f] = (0, r.useState)(!1), m = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
            e.forEach(e => {
                e.icon && (new window.Image().src = e.icon, new window.Image().src = e.icon)
            })
        }, [e]), (0, r.useEffect)(() => {
            let e = new IntersectionObserver(([e]) => {
                d(e.intersectionRatio >= .8)
            }, {
                threshold: [0, .8, 1]
            });
            return o.current && e.observe(o.current), () => e.disconnect()
        }, []), (0, r.useEffect)(() => (l.current && clearTimeout(l.current), s && !u && (l.current = setTimeout(() => {
            n(t => (t + 1) % e.length)
        }, a)), () => {
            l.current && clearTimeout(l.current)
        }), [i, e.length, a, s, u]);
        let g = (0, r.useCallback)(t => {
                let r = t === i;
                n(t), f(!0);
                let l = e[t];
                l?.onCardClick && setTimeout(() => {
                    l.onCardClick?.(r)
                }, 0), m.current && clearTimeout(m.current), m.current = setTimeout(() => {
                    f(!1)
                }, a)
            }, [i, e, a]),
            x = (0, r.useCallback)((e, t) => {
                ("Enter" === e.key || " " === e.key) && (e.preventDefault(), g(t))
            }, [g]);
        return (0, r.useEffect)(() => () => {
            m.current && clearTimeout(m.current)
        }, []), (0, t.jsx)(p.default, {
            children: (0, t.jsx)("div", {
                ref: o,
                className: "relative inline-flex w-full flex-col items-start justify-start gap-2 self-stretch px-5 pb-6 md:px-5 md:pb-6 lg:px-0 lg:pb-0 xl:px-20",
                children: e.map((e, r) => {
                    let a = r === i;
                    return (0, t.jsxs)("div", {
                        "data-mobile": "true",
                        "data-show-image": a ? "true" : "false",
                        "data-state": a ? "selected" : "inactive",
                        role: "button",
                        tabIndex: 0,
                        className: `cursor-pointer self-stretch overflow-hidden rounded-lg bg-white ${a?`${e.icon?"lg:pl-36":"lg:pl-10"} p-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04),0px_2px_12px_3px_rgba(0,0,0,0.04)] lg:py-8 lg:pr-10`:"p-6 lg:px-10 lg:py-6"} flex lg:inline-flex lg:items-start ${a?"flex-col":"items-center"} relative justify-start gap-2 transition-all duration-500 ease-out`,
                        onClick: () => g(r),
                        onKeyDown: e => x(e, r),
                        children: [e.icon && a && (0, t.jsx)(h.m.div, {
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
                            className: "inline-flex h-14 w-14 items-center justify-start gap-2.5 lg:hidden",
                            children: (0, t.jsx)("div", {
                                className: "flex flex-1 items-center justify-center gap-2.5 self-stretch",
                                children: (0, t.jsx)("img", {
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
                        }), e.icon && a && (0, t.jsx)(h.m.div, {
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
                            className: "pointer-events-none absolute inset-y-0 left-[-38px] hidden lg:flex",
                            children: (0, t.jsx)("div", {
                                className: "flex h-full items-center justify-start py-8",
                                children: (0, t.jsx)("img", {
                                    className: "max-h-full w-auto object-contain",
                                    src: e.icon || "",
                                    alt: e.title || "Feature icon",
                                    loading: "eager",
                                    style: {
                                        imageRendering: "auto"
                                    }
                                })
                            })
                        }), (0, t.jsxs)("div", {
                            className: "flex flex-col items-start justify-start gap-[9px] self-stretch lg:inline-flex lg:max-w-[304px] lg:flex-1 lg:flex-col",
                            children: [a && (0, t.jsx)(h.m.div, {
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
                                className: "inline-flex w-64 items-center justify-center",
                                children: (0, t.jsx)("div", {
                                    className: "flex-1 justify-center text-[10px] leading-[16px] font-medium tracking-[1px] text-gray-700 uppercase md:text-[12px] md:leading-[21px] md:tracking-[1.2px]",
                                    children: e.eyebrow || ""
                                })
                            }), (0, t.jsx)("div", {
                                className: "inline-flex items-center justify-center self-stretch",
                                children: (0, t.jsx)(h.m.div, {
                                    animate: {
                                        color: a ? "#000000" : "#374151"
                                    },
                                    transition: {
                                        type: "spring",
                                        duration: .3,
                                        bounce: .1
                                    },
                                    className: "flex-1 justify-center text-base leading-tight font-medium md:text-[20px] md:leading-[24px]",
                                    children: e.title || "Untitled"
                                })
                            }), a && (0, t.jsx)(h.m.div, {
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
                                className: "justify-start self-stretch text-xs font-normal text-gray-700 md:text-[14px] md:leading-[21px]",
                                children: e.description || ""
                            }), a && (0, t.jsx)(h.m.div, {
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
                                className: "flex flex-col items-start justify-start self-stretch pt-3",
                                children: (0, t.jsx)(c.default, {
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
                    }, r)
                })
            })
        })
    };
    var g = e.i(783078),
        x = e.i(430215),
        b = e.i(224601),
        y = e.i(153348),
        v = e.i(955429),
        w = e.i(828083),
        j = e.i(186114);
    let k = (0, w.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        N = ({
            actions: e = [],
            aspectRatio: a,
            backgroundImage: h = !1,
            description: p,
            eyebrow: w,
            image: N,
            mediaPosition: C = "right",
            size: O = "default",
            title: _,
            youtubeVideo: I,
            brandfolderVideo: E,
            videoInline: L = !1,
            buttonLabel: S = "Play Video",
            blockKey: A,
            blockedMessage: M,
            consentButtonLabel: P,
            featureList: R,
            variant: T = "default"
        }) => {
            let $ = (0, x.default)(`(max-width: ${g.default.Large}px)`),
                B = (0, r.useRef)(null),
                [U, W] = (0, r.useState)(!1),
                F = (0, y.useInView)(B, {
                    once: !0
                }),
                V = (0, v.useReducedMotion)(),
                H = (0, r.useRef)({
                    total: 0,
                    progress: 0
                }),
                z = R && R.length > 0,
                D = !z && I?.url;
            (0, r.useEffect)(() => {
                L || W(!1)
            }, [F]);
            let q = () => {
                    W(!0)
                },
                K = (0, i.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                    "opacity-0 pointer-events-none": U && !V && F && E?.src
                }),
                Z = (0, i.default)("relative", {
                    "py-10 lg:py-24": "gdc2026" === T,
                    "lg:py-14": z,
                    "lg:py-24": !z && "default" === O && (!a || "16:9" === a) && "gdc2026" !== T,
                    "lg:py-80": !z && "large" === O && (!a || "16:9" === a),
                    "lg:py-40": !z && "large" === O && "1:1" === a,
                    "dark bg-gray-900 overflow-hidden": h,
                    "bg-gray-100 dark:bg-black": !h && z,
                    "bg-white dark:bg-black": !h && !z
                }),
                X = (0, i.default)("grid grid-flow-row grid-cols-12 place-items-center gap-4", {
                    "p-4": "gdc2026" === T,
                    "lg:grid-flow-col": !0,
                    "lg:container": !a || "16:9" === a
                }),
                G = (0, i.default)("font-nohemi! text-gray-900 dark:text-gray-100 whitespace-pre-line", {
                    "loco-text-heading-md!": "gdc2026" === T
                }),
                J = (0, i.default)("relative w-full rounded-lg", {
                    "aspect-square": "1:1" === a,
                    "aspect-video": "16:9" === a,
                    "overflow-hidden": !I?.url
                }),
                Q = (0, i.default)("relative col-span-12 flex h-full flex-col w-full items-center lg:items-start", {
                    "lg:col-span-8": "gdc2026" === T,
                    "lg:col-span-6": "gdc2026" !== T,
                    "lg:col-start-1": "left" === C,
                    "lg:col-start-5": "right" === C && "gdc2026" === T,
                    "lg:col-start-7": "right" === C && "gdc2026" !== T,
                    "order-first": !z || !$,
                    "order-last": z && $
                }),
                Y = (0, i.default)("relative col-span-12 px-5 text-center lg:pb-0 lg:text-left", {
                    "lg:col-span-4": "gdc2026" === T,
                    "lg:col-span-5": "gdc2026" !== T,
                    "pb-6": !(z && $),
                    "py-6": z && $,
                    "lg:col-start-9": "left" === C && "gdc2026" === T,
                    "lg:col-start-8": "left" === C && "gdc2026" !== T && (!a || "16:9" === a),
                    "lg:col-start-1": "right" === C && (!a || "16:9" === a),
                    "lg:col-start-2": "right" === C && "1:1" === a,
                    "order-first": z && $
                }),
                ee = e => {
                    let t = H.current.progress / H.current.total * 100 || 0;
                    (0, o.pushVideoEvent)({
                        name: e,
                        videoDuration: H.current.total,
                        videoProgress: Number(t)
                    })
                };
            return (0, t.jsxs)("section", {
                className: Z,
                children: [h && (0, t.jsx)(n.default, {
                    src: N.src,
                    alt: N.alt,
                    fill: !0,
                    className: "blur-2xl brightness-[0.2]"
                }), (0, t.jsxs)("div", {
                    className: X,
                    ref: B,
                    children: [z ? (0, t.jsx)("div", {
                        className: Q,
                        children: (0, t.jsx)(m, {
                            features: R
                        })
                    }) : D ? (0, t.jsx)("div", {
                        className: Q,
                        children: (0, t.jsx)("div", {
                            className: J,
                            children: (0, t.jsx)(b.default, {
                                url: I?.url || "",
                                title: I?.title ?? "",
                                blockedMessage: M,
                                consentButtonLabel: P
                            })
                        })
                    }) : (0, t.jsxs)("div", {
                        className: Q,
                        children: [(0, t.jsxs)("div", {
                            className: J,
                            children: [F && !V && E?.src && (0, t.jsx)(k, {
                                url: E.src,
                                playing: U,
                                loop: !!L,
                                muted: L,
                                playsinline: L,
                                width: "100%",
                                height: "100%",
                                onDuration: e => H.current.total = e,
                                onProgress: e => {
                                    H.current.progress = 10 * e.played
                                },
                                className: "absolute top-0 left-0 [&>video]:object-cover",
                                onReady: () => {
                                    L && W(!0)
                                },
                                controls: !L,
                                onPlay: () => ee("video_play"),
                                onPause: () => ee("video_pause"),
                                config: {
                                    hlsOptions: {
                                        maxMaxBufferLength: 1,
                                        startLevel: 1
                                    }
                                }
                            }), N.src && (0, t.jsxs)("div", {
                                className: K,
                                onClick: q,
                                children: [E?.src && !L && (0, t.jsx)(j.default, {
                                    handleIsPlaying: q,
                                    className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                    label: S,
                                    "data-link-location": A || l.trackingLocation.fullWidthBlockAction,
                                    "data-link-id": `${A||l.trackingLocation.fullWidthBlockAction}-video-play`
                                }), (0, t.jsx)(n.default, {
                                    src: N.src,
                                    alt: N.alt,
                                    placeholder: "blur",
                                    blurDataURL: N.placeholder,
                                    fill: !0
                                })]
                            })]
                        }), N.caption && (0, t.jsx)("div", {
                            className: "loco-text-body-sm-medium z-10 mt-3 mb-6 text-gray-600 lg:mb-3",
                            children: N.caption
                        })]
                    }), (0, t.jsxs)("div", {
                        className: Y,
                        children: [w && (0, t.jsx)(s, {
                            className: "text-gray-900 dark:text-gray-100",
                            children: w
                        }), (0, t.jsx)(u.default, {
                            tag: "h2",
                            className: G,
                            children: _
                        }), (0, t.jsx)(f.default, {
                            className: "mb-10 text-gray-900 dark:text-gray-100",
                            children: p
                        }), (0, t.jsx)(d, {
                            className: "justify-center lg:justify-normal",
                            children: e.length > 0 && e.map((e, r) => (0, t.jsx)(c.default, {
                                variant: 0 === r ? "primary" : "secondary",
                                outlined: 0 === r,
                                size: $ ? "small" : "medium",
                                rounded: !0,
                                hasArrow: !0,
                                href: e.href,
                                target: e.target,
                                "data-link-location": A ?? l.trackingLocation.fullWidthBlockAction,
                                "data-link-id": `${A??l.trackingLocation.fullWidthBlockAction}-action-${r}`,
                                children: e.label
                            }, `full-width-block-action-${r}`))
                        })]
                    })]
                })]
            })
        };
    var C = e.i(775041),
        O = e.i(779712),
        _ = e.i(869324);
    e.s(["default", 0, ({
        actions: e,
        backgroundImage: i,
        description: n,
        eyebrow: l,
        image: o,
        mediaAspectRatio: s,
        mediaPosition: c,
        size: d,
        variant: u,
        title: f,
        theme: h,
        youtubeVideo: p,
        brandfolderVideo: m,
        buttonLabel: g,
        videoInline: x,
        blockKey: b,
        isHidden: y,
        consent: v,
        featureList: w,
        productCategoryFilter: j
    }) => {
        let [k] = (0, r.useContext)(C.FiltersContext);
        if (k.categories && k.categories.length > 0 && 1 === k.categories.findIndex(({
                _id: e
            }) => e === k.selectedCategory) && null != k.selectedSubcategory) return null;
        let {
            subcategories: I,
            productCatalogItems: E
        } = k.categories.find(({
            _id: e
        }) => e === k.selectedCategory) || {}, L = null != k.selectedSubcategory ? (I || []).find(({
            _id: e
        }) => e === k.selectedSubcategory) : null, S = !j || j.categories?.find(e => e._id === k.selectedCategory) != null && (null == L || !j.subcategories || j.subcategories.some(({
            _id: e
        }) => e === k.selectedSubcategory)), A = e?.map(({
            title: e,
            link: t
        }) => {
            let r = t?.linkReference?.target === "_blank" ? "_blank" : "_self";
            return {
                label: e,
                href: t?.linkReference?.href.current || "/",
                target: r
            }
        }), M = w?.map((e, t) => {
            let r;
            return {
                eyebrow: e.eyebrow || "",
                title: e.title || "",
                description: e.description || "",
                action: e.action ? (r = e.action.link?.linkReference?.target === "_blank" ? "_blank" : "_self", {
                    label: e.action.title || "",
                    href: e.action.link?.linkReference?.href.current || "#",
                    target: r
                }) : {
                    label: "",
                    href: "#"
                },
                icon: e.icon?.asset?.url || "",
                onCardClick: e => ((e, t) => {
                    if (!t && w?.[e]) {
                        let t = w[e];
                        (0, _.default)({
                            event: "userEvent",
                            event_name: "navigation_click",
                            properties: {
                                navigation_click_text: t.title || "",
                                link_type: "feature list item",
                                form_name: t.title || "",
                                form_id: `list-item-${e}`,
                                block_title: f
                            }
                        })
                    }
                })(t, e)
            }
        });
        return (0, t.jsx)(t.Fragment, {
            children: !y && S && (0, t.jsx)("section", {
                className: "dark" === h ? "dark" : "",
                children: (0, t.jsx)(N, {
                    actions: A,
                    aspectRatio: "16:9" === s ? "16:9" : "1:1" === s ? "1:1" : void 0,
                    backgroundImage: i,
                    description: (0, t.jsx)(a.PortableText, {
                        value: n
                    }),
                    eyebrow: l,
                    image: {
                        src: (0, O.urlForImage)(o?.file?.asset?.url || "")?.auto("format")?.url() || "",
                        placeholder: o?.file?.asset.metadata?.lqip || "",
                        alt: o?.alt || "",
                        caption: o?.caption || ""
                    },
                    mediaPosition: "right" === c ? "right" : "left" === c ? "left" : void 0,
                    size: "large" === d ? "large" : "default" === d ? "default" : void 0,
                    variant: "gdc2026" === u ? "gdc2026" : "default" === u ? "default" : void 0,
                    title: f,
                    youtubeVideo: p,
                    brandfolderVideo: {
                        src: m?.muxHLSURL || ""
                    },
                    videoInline: x,
                    buttonLabel: g,
                    blockKey: b,
                    blockedMessage: v?.blockedMessage,
                    consentButtonLabel: v?.consentButtonLabel || "",
                    featureList: M
                })
            })
        })
    }], 649042)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e490d0f2-1965-5a8d-b3aa-9d003b0c823a")
    } catch (e) {}
}();
//# debugId=e490d0f2-1965-5a8d-b3aa-9d003b0c823a