(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 787213, e => {
    "use strict";
    var t = e.i(297124),
        r = e.i(996332);
    e.s(["default", 0, ({
        title: e,
        layout: a,
        testimonialVariant: l,
        testimonials: s,
        theme: n,
        hideAuthorImage: i,
        isHidden: o
    }) => {
        let d = s?.map((e, t) => ({
            content: e?.content,
            author: {
                name: e?.author.name,
                company: e?.author.company,
                role: e?.author.role,
                avatar: e?.author.avatar?.file?.asset?.url
            },
            key: t
        })) ?? [];
        return (0, t.jsx)(t.Fragment, {
            children: !o && (0, t.jsx)("section", {
                className: "dark" === n ? "dark" : "",
                children: (0, t.jsx)("div", {
                    className: "dark:bg-gray-900",
                    children: (0, t.jsx)(r.default, {
                        testimonials: d,
                        title: e,
                        layout: "two-layout" === a ? "two-layout" : "three-layout" === a ? "three-layout" : "one-layout",
                        testimonialVariant: "outlined" === l ? "outlined" : "default"
                    })
                })
            })
        })
    }], 787213)
}, 725751, e => {
    "use strict";
    var t = e.i(297124),
        r = e.i(672721),
        a = e.i(210310),
        l = e.i(326388);
    e.s(["default", 0, ({
        theme: e,
        isHidden: s,
        verticalHeadingClass: n,
        productCatalogItems: i,
        htmlTableContent: o
    }) => {
        let {
            appendCommerceDataForMultipleProducts: d
        } = (0, l.default)(), c = (0, r.useCallback)(e => {
            let t = d(e, i);
            return t || e
        }, [i, d]), u = (0, r.useMemo)(() => {
            let e = o.rows.map(e => (e.cells = e.cells.map(e => c(e)), e));
            return {
                ...o,
                rows: e
            }
        }, [o, c]);
        return (0, t.jsx)(t.Fragment, {
            children: !s && (0, t.jsx)("section", {
                className: "dark" === e ? "dark" : "",
                children: (0, t.jsx)("div", {
                    className: "mx-auto max-w-7xl p-6 dark:bg-black",
                    children: (0, t.jsx)(a.default, {
                        verticalHeadingClass: n || "",
                        table: u
                    })
                })
            })
        })
    }], 725751)
}, 210310, e => {
    "use strict";
    var t = e.i(297124),
        r = e.i(672721),
        a = e.i(749583),
        l = e.i(206775),
        s = e.i(652955),
        n = e.i(672153),
        i = e.i(722978),
        o = e.i(805518),
        d = e.i(363737);
    let c = ({
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
        u = ({
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
        m = ({
            children: e,
            colTitle: l,
            truncationEnabled: s,
            rowTitle: n,
            className: m = "",
            isTableCell: p
        }) => {
            let [h, f] = (0, r.useState)(!1), [x, b] = (0, r.useState)(!1), g = (0, r.useRef)(null), y = (0, i.default)({
                "cursor-pointer relative": h
            }, m), v = (0, i.default)({
                "line-clamp-3": s
            });
            (0, r.useEffect)(() => {
                let e = g.current;
                e && (e.scrollHeight > e.clientHeight ? f(!0) : f(!1))
            }, [g]);
            let j = () => {
                    b(!0)
                },
                w = s && h ? {
                    tabIndex: 0,
                    role: "button",
                    onClick: j,
                    onKeyDown: e => {
                        ("Enter" === e.key || "Space" === e.key) && j()
                    }
                } : {};
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsxs)("td", {
                    className: (0, i.default)(y, {
                        "bg-gray-50 p-3 dark:bg-gray-900": !p,
                        "h-full !p-0": p
                    }),
                    ...w,
                    children: [p ? e : (0, t.jsx)(o.default, {
                        className: v,
                        ref: g,
                        children: e
                    }), s && h && (0, t.jsx)(c, {
                        className: "absolute top-1.5 right-1.5"
                    })]
                }), (0, t.jsx)(d.default, {
                    isOpen: x,
                    onOpenChange: b,
                    showTriggerButton: !1,
                    children: (0, t.jsxs)("div", {
                        className: "mt-20 flex w-6/12 flex-col rounded-3xl bg-white p-8 dark:bg-gray-800",
                        tabIndex: -1,
                        children: [(0, t.jsx)(a.default, {
                            onPress: () => {
                                b(!1)
                            },
                            variant: "secondary",
                            className: "self-end",
                            children: (0, t.jsx)(u, {})
                        }), (0, t.jsx)(o.default, {
                            className: "caption-sm mb-2.5 text-black dark:text-white",
                            children: n
                        }), (0, t.jsx)("div", {
                            className: "text-heading-sm mb-4 text-black dark:text-white",
                            children: l
                        }), (0, t.jsx)("div", {
                            className: "text-small mb-8",
                            children: (0, t.jsx)(o.default, {
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
        className: d = "",
        verticalHeadingClass: c = "",
        hideTitle: u = !1
    }) => {
        let [p, ...h] = e.rows, f = `align-top text-heading-sm md:text-small-bold rounded-md bg-gray-100 text-gray-800 bg-gray-100 dark:bg-gray-700 md:dark:bg-gray-800 dark:text-gray-200 border-none ${c}`, x = "align-top rounded-md text-sm text-gray-800 dark:text-gray-200 border-none", b = (0, i.default)("w-full table-fixed border-separate border-spacing-2 break-words", d), g = (0, i.default)("h-full table-fixed border-separate border-spacing-1 break-words", d), y = (0, r.useCallback)(e => {
            let [r, ...a] = e.split("\n"), l = a.splice(1).map((e, r) => {
                let a = e.split("|").filter(e => e).map(e => e.trim());
                return (0, t.jsx)("div", {
                    className: "flex grow",
                    children: a.map((e, a) => (0, t.jsx)(n.default, {
                        className: "flex grow basis-0 items-center justify-center rounded-md bg-gray-50 px-6 py-4 text-center dark:bg-gray-900",
                        children: e
                    }, `cell-${r}-${a}-${e}`))
                }, `row-${r}`)
            });
            return (0, t.jsxs)("div", {
                className: "flex h-full flex-col",
                children: [(0, t.jsx)("div", {
                    className: "-ml-1 flex grow",
                    children: r.split("|").filter(e => e).map((e, r) => (0, t.jsx)(n.default, {
                        className: "ml-1 flex grow basis-0 items-center justify-center rounded-md bg-gray-50 px-6 py-4 text-center dark:bg-gray-900",
                        children: e.trim()
                    }, `header-cell-${r}-${e}`))
                }), l]
            })
        }, []), v = (0, r.useMemo)(() => h.map(e => e.cells.reduce((e, r, i) => ({
            ...e,
            [`col${i+1}`]: {
                component: r.startsWith("|") ? y(r) : (0, t.jsx)(n.default, {
                    options: {
                        overrides: {
                            Button: {
                                component: a.default
                            },
                            Label: {
                                component: l.default
                            },
                            Tooltip: {
                                component: s.default
                            }
                        }
                    },
                    children: r
                }),
                isTableCell: r.startsWith("|"),
                cellContent: r
            }
        }), {})), [h, y]), j = (0, r.useMemo)(() => p.cells.map((e, r) => (0, t.jsx)("th", {
            scope: "col",
            className: "min-w-[10rem] rounded-md border-none bg-gray-100 py-3.5 pr-4 pl-4 text-left align-top text-gray-800 dark:bg-gray-800 dark:text-gray-400",
            children: (0, t.jsx)(n.default, {
                options: {
                    overrides: {
                        Button: {
                            component: a.default
                        },
                        Label: {
                            component: l.default
                        },
                        Tooltip: {
                            component: s.default
                        }
                    }
                },
                children: e
            })
        }, `${r}-${e}`)), [p.cells]), w = (0, r.useMemo)(() => v.map((r, a) => {
            let l = Object.values(r),
                s = l[0];
            return (0, t.jsx)("tr", {
                className: "border-separate border-spacing-1",
                children: l.map((r, l) => (0, t.jsx)(m, {
                    isTableCell: r.isTableCell,
                    className: 0 === l ? f : x,
                    rowTitle: s.component,
                    colTitle: 0 !== l && j && j[l] ? j[l] : "",
                    truncationEnabled: e.tableTruncation,
                    children: r.component
                }, `${a}-${l}-${r.cellContent}`))
            }, a)
        }), [j, v, f, e.tableTruncation]), k = (0, r.useMemo)(() => p.cells.map((e, r) => (0, t.jsx)("th", {
            scope: "col",
            className: "text-tiny-bold rounded-md bg-gray-100 py-3.5 pr-4 pl-4 text-left align-top text-gray-800 dark:bg-gray-900 dark:text-gray-400",
            children: (0, t.jsx)(n.default, {
                options: {
                    overrides: {
                        Button: {
                            component: a.default
                        },
                        Label: {
                            component: l.default
                        },
                        Tooltip: {
                            component: s.default
                        }
                    }
                },
                children: e
            })
        }, `${r}-${e}`)), [p]), N = (0, r.useMemo)(() => v.map((e, r) => (0, t.jsx)("div", {
            className: "mb-4 min-w-full rounded-md bg-gray-100 align-middle dark:bg-gray-700",
            children: (0, t.jsxs)("table", {
                className: b,
                children: [p && p.cells.length > 0 && (0, t.jsx)("thead", {
                    className: "hidden",
                    children: (0, t.jsx)("tr", {
                        className: "border-separate border-spacing-1",
                        children: k
                    })
                }), (0, t.jsx)("tbody", {
                    className: "table-row-group bg-gray-50 dark:bg-gray-900",
                    children: Object.values(e).map((e, i) => e ? (0, t.jsx)("tr", {
                        className: "rounded-md",
                        children: (0, t.jsxs)("td", {
                            className: 0 === i ? f : x,
                            children: [0 !== i && p && p.cells[i] && (0, t.jsx)(n.default, {
                                options: {
                                    overrides: {
                                        Button: {
                                            component: a.default
                                        },
                                        Label: {
                                            component: l.default
                                        },
                                        Tooltip: {
                                            component: s.default
                                        }
                                    }
                                },
                                children: p.cells[i]
                            }), (0, t.jsx)(o.default, {
                                children: e.component
                            })]
                        })
                    }, `${r}-${i}-${p.cells[i]}`) : null)
                })]
            })
        }, `row-${r}`)), [v, p, b, f, k]);
        return (0, t.jsxs)("div", {
            children: [(0, t.jsx)("div", {
                className: "sm:flex sm:items-center",
                children: (0, t.jsxs)("div", {
                    className: "sm:flex-auto",
                    children: [!u && e.tableTitle && (0, t.jsx)("div", {
                        className: "text-heading-sm",
                        children: e.tableTitle
                    }), !u && e.tableDescription && (0, t.jsx)("p", {
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
                            className: g,
                            children: [j && (0, t.jsx)("thead", {
                                className: "table-header-group",
                                children: (0, t.jsx)("tr", {
                                    className: "border-separate border-spacing-1",
                                    children: j
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
                            children: (0, t.jsx)(n.default, {
                                options: {
                                    overrides: {
                                        Button: {
                                            component: a.default
                                        },
                                        Label: {
                                            component: l.default
                                        },
                                        Tooltip: {
                                            component: s.default
                                        }
                                    }
                                },
                                children: p && p.cells && p.cells[0] ? p.cells[0] : ""
                            })
                        }), N]
                    })]
                })
            })]
        })
    }], 210310)
}, 883027, e => {
    "use strict";
    var t = e.i(297124),
        r = e.i(722978),
        a = e.i(749583),
        l = e.i(475200);
    e.s(["default", 0, ({
        pdf: e,
        hidePdfToolbar: s,
        url: n,
        mobilePdfButtonText: i,
        title: o,
        visualOptions: d,
        theme: c,
        isHidden: u
    }) => {
        let m = (0, l.default)(),
            p = e ? e.cdnURL : n,
            h = (0, r.default)("mb-8 md:mb-12", {
                "bg-black py-16": d?.container && "dark" === c,
                "bg-white py-16": d?.container && "light" === c
            }),
            f = (0, r.default)({
                container: d?.container
            }),
            x = e && m;
        return (0, t.jsx)(t.Fragment, {
            children: !u && (0, t.jsx)("div", {
                className: h,
                children: (0, t.jsx)("div", {
                    className: f,
                    children: (0, t.jsxs)("div", {
                        className: "relative",
                        children: [(0, t.jsx)("iframe", {
                            className: "aspect-[4/3] w-full rounded-xl",
                            src: `${p}?#view=fit&navpanes=0${s?"&toolbar=0":""}`,
                            title: o ?? ""
                        }), x && (0, t.jsx)("div", {
                            className: "absolute inset-0 flex items-center justify-center rounded-xl bg-black/80",
                            children: (0, t.jsx)(a.default, {
                                href: p,
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
    var t = e.i(297124),
        r = e.i(672721),
        a = e.i(278466),
        l = e.i(722978),
        s = e.i(449144),
        n = e.i(804553),
        i = e.i(536241),
        o = e.i(582759),
        d = e.i(336480),
        c = e.i(629779),
        u = e.i(939115);
    let m = (0, r.forwardRef)(function({
        variant: e = "secondary",
        ariaLabel: m,
        size: p = "medium",
        direction: h = "right",
        className: f = "",
        href: x,
        onPress: b,
        isDisabled: g,
        isForcedHover: y,
        tag: v = "button",
        ...j
    }, w) {
        let k = (0, c.useObjectRef)(w),
            [N, C] = (0, r.useState)(!1),
            {
                buttonProps: _
            } = (0, s.useButton)({
                variant: e,
                size: p,
                direction: h,
                className: f,
                elementType: x ? "a" : v,
                onPress: b,
                href: x,
                isDisabled: g,
                ...j
            }, k),
            {
                hoverProps: A,
                isHovered: L
            } = (0, n.useHover)({
                isDisabled: g
            }),
            {
                focusProps: $
            } = (0, i.useFocus)({
                onFocusChange(e) {
                    C(e && (0, o.isFocusVisible)() || !1)
                }
            }),
            T = (0, l.clsx)("btn-outlined cursor-pointer flex justify-start items-center outline-hidden border-solid border-2 rounded-full overflow-hidden", {
                primary: "btn-primary",
                secondary: "btn-secondary"
            } [e], {
                medium: "w-9 h-9",
                large: "w-14 h-14"
            } [p], {
                right: "",
                up: "-rotate-90",
                left: "rotate-180",
                down: "rotate-90"
            } [h], {
                hovered: L || y
            }, {
                focused: N
            }, {
                "!border-gray-400 pointer-events-none": g
            }, f),
            M = (0, l.clsx)("w-full transition-all duration-300 shrink-0 ", {
                "fill-gray-400": g
            }),
            Z = (0, l.clsx)(M, {
                "fill-white": "primary" === e
            }, {
                "fill-white dark:fill-black": "secondary" === e
            }, {
                "-ml-[100%]": !L && !N && !y
            }, {
                "ml-0": L || N || y
            }),
            E = (0, l.clsx)(M, "fill-black dark:fill-white");
        return x ? (0, t.jsxs)(a.Link, {
            ...(0, d.mergeProps)(_, A, $),
            ref: k,
            "aria-label": m,
            className: T,
            href: x,
            legacyBehavior: !0,
            children: [(0, t.jsx)(u.ArrowIcon, {
                className: Z
            }), (0, t.jsx)(u.ArrowIcon, {
                className: E
            })]
        }) : (0, t.jsxs)(v, {
            ...(0, d.mergeProps)(_, A, $),
            ref: k,
            "aria-label": m,
            className: T,
            tabIndex: "span" == v ? -1 : 0,
            children: [(0, t.jsx)(u.ArrowIcon, {
                className: Z
            }), (0, t.jsx)(u.ArrowIcon, {
                className: E
            })]
        })
    });
    e.s(["default", 0, m])
}, 996332, 422664, e => {
    "use strict";
    var t = e.i(297124),
        r = e.i(722978),
        a = e.i(799547);
    let l = ({
            size: e = "m",
            url: l,
            alt: s = "profile picture"
        }) => {
            let {
                width: n,
                height: i
            } = {
                m: {
                    width: 64,
                    height: 64
                },
                s: {
                    width: 48,
                    height: 48
                },
                xs: {
                    width: 40,
                    height: 40
                },
                xxs: {
                    width: 40,
                    height: 40
                }
            } [e], o = (0, r.default)("inline-block", "rounded-full overflow-hidden relative shrink-0 mr-3 hidden lg:block md:block");
            return (0, t.jsx)("div", {
                className: o,
                children: (0, t.jsx)(a.default, {
                    src: l,
                    alt: s,
                    width: n,
                    height: i
                })
            })
        },
        s = ({
            avatar: e,
            name: a,
            company: s,
            role: n,
            size: i = "m"
        }) => {
            let o = (0, r.default)("text-gray-900 dark:text-gray-100 pb-1", {
                    "loco-caption-lg-semibold": "m" === i,
                    "loco-caption-sm-semibold": "s" === i || "xs" === i || "xxs" === i
                }),
                d = (0, r.default)("text-gray-700 dark:text-gray-300 tracking-normal", {
                    "loco-text-body-xs-semibold": "m" === i,
                    "loco-text-body-sm-medium": "s" === i || "xs" === i || "xxs" === i
                });
            return (0, t.jsxs)("div", {
                className: "flex items-center",
                children: [e && (0, t.jsx)(l, {
                    url: e,
                    size: i,
                    alt: a
                }), (0, t.jsxs)("div", {
                    className: "flex flex-col",
                    children: [(0, t.jsxs)("span", {
                        className: o,
                        children: [a?.toUpperCase(), " ", s && a && "/" || "", " ", s?.toUpperCase()]
                    }), (0, t.jsx)("span", {
                        className: d,
                        children: n
                    })]
                })]
            })
        };
    e.s(["default", 0, s], 422664);
    let n = ({
        content: e,
        author: a,
        className: l = "",
        textClassName: n = ""
    }) => {
        let i = (0, r.default)("p-6 rounded-xl", l),
            o = (0, r.default)("mb-6 text-gray-800 dark:text-gray-200", n);
        return (0, t.jsxs)("div", {
            className: i,
            children: [(0, t.jsx)("div", {
                className: o,
                children: e
            }), (0, t.jsx)(s, {
                ...a
            })]
        })
    };
    e.s(["default", 0, ({
        title: e,
        testimonials: a,
        layout: l = "one-layout",
        testimonialVariant: s = "default",
        className: i = ""
    }) => {
        let o = (0, r.default)({
                "one-layout": "col-span-12",
                "two-layout": "col-span-12 md:col-span-6 flex",
                "three-layout": "col-span-12 md:col-span-6 lg:col-span-4 flex"
            } [l]),
            d = (0, r.default)("one-layout" !== l && "flex flex-col justify-between w-full", {
                "bg-gray-100 dark:bg-gray-900": "default" === s
            }, {
                "border border-gray-200 dark:border-gray-700": "outlined" === s && !e
            }),
            c = (0, r.default)({
                "auto-rows-fr": "one-layout" !== l
            }, "grid grid-cols-12 gap-4", i),
            u = (0, r.default)("container py-0 md:py-16", {
                "bg-gray-100 dark:bg-gray-900 rounded-2xl": e,
                "border border-gray-200 dark:border-gray-700 bg-transparent": "outlined" === s && e
            }),
            m = (0, r.default)({
                "loco-text-body-sm-medium": "two-layout" === l || "three-layout" === l,
                "loco-text-body-lg-medium": "one-layout" === l
            });
        return (0, t.jsxs)("div", {
            className: u,
            children: [e && (0, t.jsx)("div", {
                className: "loco-text-heading-sm p-6",
                children: e
            }), (0, t.jsx)("div", {
                className: c,
                children: a?.map((e, r) => {
                    let {
                        content: a,
                        author: l,
                        _key: s
                    } = e;
                    return (0, t.jsx)("div", {
                        className: o,
                        children: (0, t.jsx)(n, {
                            content: a,
                            author: l,
                            className: d,
                            textClassName: m
                        })
                    }, `${s}-${r}`)
                })
            })]
        })
    }], 996332)
}, 530485, e => {
    "use strict";
    var t = e.i(672721),
        r = e.i(879086);
    let a = new Map([
        ["bold", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"
        }))],
        ["duotone", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
            opacity: "0.2"
        }), t.default.createElement("path", {
            d: "M144,176a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176Zm88-48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM124,96a12,12,0,1,0-12-12A12,12,0,0,0,124,96Z"
        }))],
        ["fill", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z"
        }))],
        ["light", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M142,176a6,6,0,0,1-6,6,14,14,0,0,1-14-14V128a2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14v40a2,2,0,0,0,2,2A6,6,0,0,1,142,176ZM124,94a10,10,0,1,0-10-10A10,10,0,0,0,124,94Zm106,34A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"
        }))],
        ["regular", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"
        }))],
        ["thin", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M140,176a4,4,0,0,1-4,4,12,12,0,0,1-12-12V128a4,4,0,0,0-4-4,4,4,0,0,1,0-8,12,12,0,0,1,12,12v40a4,4,0,0,0,4,4A4,4,0,0,1,140,176ZM124,92a8,8,0,1,0-8-8A8,8,0,0,0,124,92Zm104,36A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"
        }))]
    ]);
    var l = Object.defineProperty,
        s = Object.defineProperties,
        n = Object.getOwnPropertyDescriptors,
        i = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        c = (e, t, r) => t in e ? l(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r;
    let u = (0, t.forwardRef)((e, l) => t.default.createElement(r.default, s(((e, t) => {
        for (var r in t || (t = {})) o.call(t, r) && c(e, r, t[r]);
        if (i)
            for (var r of i(t)) d.call(t, r) && c(e, r, t[r]);
        return e
    })({
        ref: l
    }, e), n({
        weights: a
    }))));
    u.displayName = "Info", e.s(["Info", () => u], 530485)
}, 401861, 841889, e => {
    "use strict";
    var t = e.i(297124),
        r = e.i(722978),
        a = e.i(672721),
        l = e.i(530485),
        s = e.i(146911);
    let n = ({
            title: e,
            text: n,
            action: i,
            truncate: o,
            className: d = "",
            isContained: c,
            dismiss: u
        }) => {
            let m = (0, a.useMemo)(() => `unity-alert-${n?.substring(0,30).replaceAll(" ","_")}`, [n]),
                [p, h] = (0, a.useState)(!0),
                [f, x] = (0, a.useState)(!1);
            return ((0, a.useEffect)(() => {
                localStorage?.getItem(m) && x(!0)
            }, [m]), f) ? null : (0, t.jsx)("div", {
                className: (0, r.clsx)({
                    container: c
                }),
                children: (0, t.jsxs)("div", {
                    className: (0, r.clsx)("dark:bg-blue/10 relative flex w-full flex-col justify-between gap-4 bg-sky-100 py-4 pr-5 pl-11 text-sm text-gray-900 transition-colors sm:flex-row", {
                        flex: u?.enabled
                    }, {
                        "rounded-lg": c
                    }, d),
                    children: [(0, t.jsx)(l.Info, {
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
                                className: (0, r.clsx)({
                                    "line-clamp-4 sm:line-clamp-2": o?.enabled && p
                                }),
                                children: n
                            }), o?.enabled && (0, t.jsx)("button", {
                                onClick: () => h(!p),
                                className: "text-tiny shadow-underline-sm hover:text-blue hover:shadow-underline focus:text-blue dark:hover:text-blue text-black transition duration-200 dark:text-white",
                                children: p ? o.seeMoreLabel : o.seeLessLabel
                            })]
                        })]
                    }), (i?.href || u?.enabled) && (0, t.jsxs)("div", {
                        className: "sm:auto inline-flex w-fit items-center gap-4 [&>*]:whitespace-nowrap",
                        children: [i && (0, t.jsx)(s.default, {
                            className: "mx-auto mt-0 inline-block whitespace-nowrap",
                            href: i.href,
                            target: i.target || "_self",
                            size: "tiny",
                            underline: !0,
                            children: i.title
                        }), u?.enabled && (0, t.jsx)("button", {
                            onClick: () => {
                                x(!0), localStorage.setItem(m, Date.now().toString())
                            },
                            className: "text-tiny shadow-underline-sm hover:text-blue hover:shadow-underline focus:text-blue dark:hover:text-blue text-black transition duration-200 dark:text-white",
                            children: u?.dismissLabel ?? "Dismiss"
                        })]
                    })]
                })
            })
        },
        i = ({
            title: e,
            text: a,
            action: l,
            theme: s,
            truncate: i,
            dismiss: o,
            isContained: d,
            isHidden: c,
            spacing: u
        }) => {
            let m = (0, r.clsx)({
                "pt-10": u?.top
            }, {
                "pb-10": u?.bottom
            }, {
                "dark bg-black": "dark" === s
            });
            return c || !a ? null : (0, t.jsx)("section", {
                className: m,
                children: (0, t.jsx)(n, {
                    title: e,
                    text: a,
                    isContained: d,
                    truncate: i || {},
                    dismiss: o || {},
                    action: l && {
                        title: l?.text || "",
                        href: l?.fieldLink?.linkReference?.href?.current || "",
                        target: l?.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self"
                    }
                })
            })
        };
    e.s(["default", 0, i], 841889), e.s(["default", 0, i], 401861)
}, 246916, e => {
    "use strict";
    var t = e.i(472506),
        r = e.i(876588),
        a = e.i(31588);

    function l(e, s = []) {
        var n, i;
        let o, d, c, u, m, p = (0, t.usePathname)(),
            h = (0, r.useLocale)(),
            f = h !== a.defaultLocale ? p.replace(`/${h}`, "") : p;
        return {
            shouldDisplayMTBanner: h !== a.defaultLocale && e?.translationType === "MT" && !s.includes(f),
            updatedBlocks: (n = e.blocks ?? [], i = e.machineTranslationDisclaimer, o = n.reduce((e, t, r) => ["hero", "alternateNavigation", "headliner"].includes(t._type) ? r : e, -1), d = [...n], c = d[o + 1]?._type === "alternateNavigationAnchor" || d[o + 1]?._type === "anchorButton" ? d[o + 2] : d[o + 1], u = c?.theme ?? null, m = {
                _type: "alert",
                text: i?.text,
                isContained: !0,
                spacing: {
                    bottom: !0,
                    top: !0
                },
                ...u && {
                    theme: u
                },
                action: {
                    text: i?.action?.title,
                    fieldLink: {
                        linkReference: {
                            href: {
                                current: `${window.location.origin}${f}`
                            },
                            target: "_self"
                        }
                    }
                }
            }, -1 === o ? d.unshift(m) : d.splice(o + 1, 0, m), d),
            redirectPathName: f
        }
    }
    e.s(["useMTBanner", () => l], 246916)
}, 480880, e => {
    "use strict";
    var t = e.i(297124),
        r = e.i(672721);
    e.s(["default", 0, ({
        blocks: e,
        blockMap: a,
        ...l
    }) => (0, t.jsx)(t.Fragment, {
        children: e?.map((e, s) => {
            let n = e?._type,
                i = a[n];
            return e.isHidden ? null : i ? (0, t.jsx)("div", {
                children: r.default.createElement(i, {
                    key: `block-${s}`,
                    ...e,
                    blockIndex: s + 1,
                    blockType: n,
                    blockKey: `${n}-${s}`,
                    ...l
                })
            }, `block-${s}`) : void 0
        })
    })])
}, 166536, (e, t, r) => {
    t.exports = function(e, t) {
        for (var r = -1, a = null == e ? 0 : e.length, l = Array(a); ++r < a;) l[r] = t(e[r], r, e);
        return l
    }
}, 601596, (e, t, r) => {
    var a = e.r(407667),
        l = e.r(166536),
        s = e.r(272098),
        n = e.r(248664),
        i = 1 / 0,
        o = a ? a.prototype : void 0,
        d = o ? o.toString : void 0;
    t.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (s(t)) return l(t, e) + "";
        if (n(t)) return d ? d.call(t) : "";
        var r = t + "";
        return "0" == r && 1 / t == -i ? "-0" : r
    }
}, 684016, (e, t, r) => {
    var a = e.r(601596);
    t.exports = function(e) {
        return null == e ? "" : a(e)
    }
}, 278744, (e, t, r) => {
    t.exports = function(e, t) {
        return e === t || e != e && t != t
    }
}, 462931, (e, t, r) => {
    var a = e.r(272098),
        l = e.r(248664),
        s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        n = /^\w*$/;
    t.exports = function(e, t) {
        if (a(e)) return !1;
        var r = typeof e;
        return !!("number" == r || "symbol" == r || "boolean" == r || null == e || l(e)) || n.test(e) || !s.test(e) || null != t && e in Object(t)
    }
}, 95269, (e, t, r) => {
    t.exports = e.r(622280)(Object, "create")
}, 814640, (e, t, r) => {
    var a = e.r(95269);
    t.exports = function() {
        this.__data__ = a ? a(null) : {}, this.size = 0
    }
}, 502814, (e, t, r) => {
    t.exports = function(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= !!t, t
    }
}, 320134, (e, t, r) => {
    var a = e.r(95269),
        l = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        var t = this.__data__;
        if (a) {
            var r = t[e];
            return "__lodash_hash_undefined__" === r ? void 0 : r
        }
        return l.call(t, e) ? t[e] : void 0
    }
}, 602951, (e, t, r) => {
    var a = e.r(95269),
        l = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        var t = this.__data__;
        return a ? void 0 !== t[e] : l.call(t, e)
    }
}, 479981, (e, t, r) => {
    var a = e.r(95269);
    t.exports = function(e, t) {
        var r = this.__data__;
        return this.size += +!this.has(e), r[e] = a && void 0 === t ? "__lodash_hash_undefined__" : t, this
    }
}, 804937, (e, t, r) => {
    var a = e.r(814640),
        l = e.r(502814),
        s = e.r(320134),
        n = e.r(602951),
        i = e.r(479981);

    function o(e) {
        var t = -1,
            r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var a = e[t];
            this.set(a[0], a[1])
        }
    }
    o.prototype.clear = a, o.prototype.delete = l, o.prototype.get = s, o.prototype.has = n, o.prototype.set = i, t.exports = o
}, 179381, (e, t, r) => {
    t.exports = function() {
        this.__data__ = [], this.size = 0
    }
}, 756755, (e, t, r) => {
    var a = e.r(278744);
    t.exports = function(e, t) {
        for (var r = e.length; r--;)
            if (a(e[r][0], t)) return r;
        return -1
    }
}, 366612, (e, t, r) => {
    var a = e.r(756755),
        l = Array.prototype.splice;
    t.exports = function(e) {
        var t = this.__data__,
            r = a(t, e);
        return !(r < 0) && (r == t.length - 1 ? t.pop() : l.call(t, r, 1), --this.size, !0)
    }
}, 280256, (e, t, r) => {
    var a = e.r(756755);
    t.exports = function(e) {
        var t = this.__data__,
            r = a(t, e);
        return r < 0 ? void 0 : t[r][1]
    }
}, 952641, (e, t, r) => {
    var a = e.r(756755);
    t.exports = function(e) {
        return a(this.__data__, e) > -1
    }
}, 26145, (e, t, r) => {
    var a = e.r(756755);
    t.exports = function(e, t) {
        var r = this.__data__,
            l = a(r, e);
        return l < 0 ? (++this.size, r.push([e, t])) : r[l][1] = t, this
    }
}, 922416, (e, t, r) => {
    var a = e.r(179381),
        l = e.r(366612),
        s = e.r(280256),
        n = e.r(952641),
        i = e.r(26145);

    function o(e) {
        var t = -1,
            r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var a = e[t];
            this.set(a[0], a[1])
        }
    }
    o.prototype.clear = a, o.prototype.delete = l, o.prototype.get = s, o.prototype.has = n, o.prototype.set = i, t.exports = o
}, 520895, (e, t, r) => {
    var a = e.r(804937),
        l = e.r(922416),
        s = e.r(74136);
    t.exports = function() {
        this.size = 0, this.__data__ = {
            hash: new a,
            map: new(s || l),
            string: new a
        }
    }
}, 368725, (e, t, r) => {
    t.exports = function(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    }
}, 548365, (e, t, r) => {
    var a = e.r(368725);
    t.exports = function(e, t) {
        var r = e.__data__;
        return a(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
    }
}, 591270, (e, t, r) => {
    var a = e.r(548365);
    t.exports = function(e) {
        var t = a(this, e).delete(e);
        return this.size -= !!t, t
    }
}, 87911, (e, t, r) => {
    var a = e.r(548365);
    t.exports = function(e) {
        return a(this, e).get(e)
    }
}, 923680, (e, t, r) => {
    var a = e.r(548365);
    t.exports = function(e) {
        return a(this, e).has(e)
    }
}, 327495, (e, t, r) => {
    var a = e.r(548365);
    t.exports = function(e, t) {
        var r = a(this, e),
            l = r.size;
        return r.set(e, t), this.size += +(r.size != l), this
    }
}, 141177, (e, t, r) => {
    var a = e.r(520895),
        l = e.r(591270),
        s = e.r(87911),
        n = e.r(923680),
        i = e.r(327495);

    function o(e) {
        var t = -1,
            r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var a = e[t];
            this.set(a[0], a[1])
        }
    }
    o.prototype.clear = a, o.prototype.delete = l, o.prototype.get = s, o.prototype.has = n, o.prototype.set = i, t.exports = o
}, 297230, (e, t, r) => {
    var a = e.r(141177);

    function l(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw TypeError("Expected a function");
        var r = function() {
            var a = arguments,
                l = t ? t.apply(this, a) : a[0],
                s = r.cache;
            if (s.has(l)) return s.get(l);
            var n = e.apply(this, a);
            return r.cache = s.set(l, n) || s, n
        };
        return r.cache = new(l.Cache || a), r
    }
    l.Cache = a, t.exports = l
}, 43096, (e, t, r) => {
    var a = e.r(297230);
    t.exports = function(e) {
        var t = a(e, function(e) {
                return 500 === r.size && r.clear(), e
            }),
            r = t.cache;
        return t
    }
}, 659461, (e, t, r) => {
    var a = e.r(43096),
        l = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        s = /\\(\\)?/g;
    t.exports = a(function(e) {
        var t = [];
        return 46 === e.charCodeAt(0) && t.push(""), e.replace(l, function(e, r, a, l) {
            t.push(a ? l.replace(s, "$1") : r || e)
        }), t
    })
}, 660575, (e, t, r) => {
    var a = e.r(272098),
        l = e.r(462931),
        s = e.r(659461),
        n = e.r(684016);
    t.exports = function(e, t) {
        return a(e) ? e : l(e, t) ? [e] : s(n(e))
    }
}, 22811, (e, t, r) => {
    var a = e.r(248664),
        l = 1 / 0;
    t.exports = function(e) {
        if ("string" == typeof e || a(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -l ? "-0" : t
    }
}, 747449, (e, t, r) => {
    var a = e.r(660575),
        l = e.r(22811);
    t.exports = function(e, t) {
        t = a(t, e);
        for (var r = 0, s = t.length; null != e && r < s;) e = e[l(t[r++])];
        return r && r == s ? e : void 0
    }
}, 461317, (e, t, r) => {
    var a = e.r(747449);
    t.exports = function(e, t, r) {
        var l = null == e ? void 0 : a(e, t);
        return void 0 === l ? r : l
    }
}, 326388, e => {
    "use strict";
    var t = e.i(955592),
        r = e.i(461317),
        a = e.i(433519),
        l = e.i(544923);
    let s = (e, t) => t?.country ? e?.country?.toLowerCase().localeCompare(t?.country.toLowerCase()) || 0 : -1,
        n = {
            currency: "USD"
        },
        i = e => e?.text !== null && e?.text !== void 0 || (e?.children ? e.children.every(i) : !!Array.isArray(e) && e.every(i));
    e.s(["default", 0, () => {
        let {
            state: e
        } = (0, a.default)(), [o] = (0, l.default)("location", "US"), d = t => {
            let r = t?.variantPrices.sort(s),
                a = e => r?.find(t => t.currency?.toLowerCase() === e?.currency?.toLowerCase() && (t.country?.toLowerCase() === o?.toLowerCase() || !t.country))?.price;
            return a(e) ? [a(e), !1] : [a(n), !0]
        }, c = e => {
            if (!e) return {};
            let {
                productVariants: t,
                productKey: r
            } = e, a = {
                productKey: null
            };
            return t?.forEach(e => {
                let [t] = d(e);
                e?.productVariantName && (a[e.productVariantName] = {
                    price: t
                })
            }), a
        }, u = (e, r) => {
            if (!r || !e) return e;
            let a = c(r);
            return t.default.render(e, a)
        }, m = (e, a) => {
            if (!a || !e) return e;
            let l = e.match(/{{\s*[\w\.-]+\s*}}/g)?.map(e => e?.match(/[\w\.-]+/)?.[0] || "");
            if (void 0 === l) return e;
            let s = c(a);
            return a && l?.every(e => (0, r.default)(s, e)) ? t.default.render(e, s) : null
        }, p = (e, t, r = u) => e?.map(e => {
            if (e?._type === "block") return {
                ...e,
                children: p(e.children, t, r)
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
            location: o,
            appendCommerceData: u,
            appendCommerceDataToPortableText: p,
            renderWithAllVariablesToPortableText: (e, t) => {
                let r = p(e, t, m);
                return i(r) ? r : null
            },
            getPrice: d,
            appendCommerceDataForMultipleProducts: (e, r) => {
                let a;
                if (!r || !e) return e;
                let l = (a = {
                    productKey: null
                }, r.forEach(e => {
                    if (!e) return {};
                    let {
                        productVariants: t
                    } = e;
                    t?.forEach(e => {
                        let [t] = d(e);
                        e?.productVariantName && (a[e.productVariantName] = {
                            price: t
                        })
                    })
                }), a);
                return t.default.render(e, l)
            }
        }
    }], 326388)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "24f2b535-fc3d-5155-98fc-02d07261f1be")
    } catch (e) {}
}();
//# debugId=24f2b535-fc3d-5155-98fc-02d07261f1be