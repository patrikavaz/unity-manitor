(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 783078, e => {
    "use strict";
    var t, r = ((t = r || {})[t.Small = 425] = "Small", t[t.Medium = 744] = "Medium", t[t.Large = 1024] = "Large", t[t.XLarge = 1440] = "XLarge", t);
    e.s(["default", 0, r])
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
                    for (var l in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
                return e
            }).apply(this, arguments)
        },
        a = t.forwardRef(function(e, a) {
            var l = t.useState(!1),
                s = l[0],
                n = l[1],
                i = t.useState(!1),
                o = i[0],
                c = i[1],
                d = encodeURIComponent(e.id),
                u = "string" == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
                m = e.title,
                p = e.poster || "hqdefault",
                f = "&".concat(e.params) || "",
                g = e.muted ? "&mute=1" : "",
                h = e.announce || "Watch",
                x = e.webp ? "webp" : "jpg",
                b = e.webp ? "vi_webp" : "vi",
                j = e.thumbnail || (e.playlist ? "https://i.ytimg.com/".concat(b, "/").concat(u, "/").concat(p, ".").concat(x) : "https://i.ytimg.com/".concat(b, "/").concat(d, "/").concat(p, ".").concat(x)),
                y = e.noCookie ? "https://www.youtube-nocookie.com" : "https://www.youtube.com";
            y = e.cookie ? "https://www.youtube.com" : "https://www.youtube-nocookie.com";
            var v = e.playlist ? "".concat(y, "/embed/videoseries?autoplay=1").concat(g, "&list=").concat(d).concat(f) : "".concat(y, "/embed/").concat(d, "?autoplay=1&state=1").concat(g).concat(f),
                w = e.activatedClass || "lyt-activated",
                C = e.adNetwork || !1,
                k = e.aspectHeight || 9,
                N = e.aspectWidth || 16,
                L = e.iframeClass || "",
                T = e.playerClass || "lty-playbtn",
                S = e.wrapperClass || "yt-lite",
                P = e.onIframeAdded || function() {},
                I = e.rel ? "prefetch" : "preload",
                E = e.containerElement || "article";
            return t.useEffect(function() {
                o && P()
            }, [o]), t.createElement(t.Fragment, null, t.createElement("link", {
                rel: I,
                href: j,
                as: "image"
            }), t.createElement(t.Fragment, null, s && t.createElement(t.Fragment, null, t.createElement("link", {
                rel: "preconnect",
                href: y
            }), t.createElement("link", {
                rel: "preconnect",
                href: "https://www.google.com"
            }), C && t.createElement(t.Fragment, null, t.createElement("link", {
                rel: "preconnect",
                href: "https://static.doubleclick.net"
            }), t.createElement("link", {
                rel: "preconnect",
                href: "https://googleads.g.doubleclick.net"
            })))), t.createElement(E, {
                onPointerOver: function() {
                    s || n(!0)
                },
                onClick: function() {
                    o || c(!0)
                },
                className: "".concat(S, " ").concat(o ? w : ""),
                "data-title": m,
                style: r({
                    backgroundImage: "url(".concat(j, ")")
                }, {
                    "--aspect-ratio": "".concat(k / N * 100, "%")
                })
            }, t.createElement("button", {
                type: "button",
                className: T,
                "aria-label": "".concat(h, " ").concat(m)
            }), o && t.createElement("iframe", {
                ref: a,
                className: L,
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
}, 195051, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(722990),
        a = e.i(749583),
        l = e.i(239273),
        s = e.i(805518);
    e.s(["default", 0, ({
        blockedMessage: e,
        consentButtonLabel: n
    }) => {
        let i = "C0004";
        return (0, t.jsx)(t.Fragment, {
            children: !(() => {
                let [e] = (0, l.default)("OptanonConsent") || "", t = {};
                return e && e.split("groups=")[1].split("&")[0].split("%2C").forEach(e => {
                    let [r, a] = e.split("%3A");
                    t[r] = parseInt(a)
                }), t[i]
            })() && (0, t.jsxs)("div", {
                className: "consent absolute top-0 right-0 bottom-0 left-0 z-10 flex flex-col items-center overflow-auto rounded-2xl bg-black p-3 leading-5 text-white opacity-90 sm:justify-center sm:p-5",
                children: [(0, t.jsx)(s.default, {
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
                                t = document.getElementById(`ot-header-id-${i}`),
                                r = window;
                            r && r.OneTrust ? r.OneTrust.ToggleInfoDisplay() : e.click(), t.click()
                        },
                        children: n
                    })
                })]
            })
        })
    }])
}, 224601, 934172, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(3931),
        a = e.i(655105),
        l = e.i(193863),
        s = e.i(79389),
        n = e.i(363737),
        i = e.i(749583),
        o = e.i(644995),
        c = e.i(195051),
        d = e.i(545935),
        u = e.i(387660);
    let m = (e, t = !0) => {
        let [a, l] = (0, r.useState)(null);
        return (0, r.useEffect)(() => {
            let r;
            return t && e.current && (r = setInterval(() => {
                let t = window.YT;
                t && e.current && (l(new t.Player(e.current)), clearInterval(r))
            }, 500)), () => {
                l(null), clearInterval(r)
            }
        }, [t, e]), {
            player: a
        }
    };
    e.s(["useYoutubeAPI", 0, m], 934172), e.s(["default", 0, ({
        title: e,
        url: p,
        container: f = !1,
        blockedMessage: g,
        consentButtonLabel: h
    }) => {
        let x = (0, l.default)(p),
            [b, j] = (0, r.useState)(!1),
            y = (0, r.useRef)(null),
            v = (0, r.useRef)(null),
            {
                player: w
            } = m(y, b),
            C = () => {
                j(!0)
            };
        return (0, r.useEffect)(() => {
            w && (v.current = w.addEventListener("onStateChange", e => {
                if ([1, 2].includes(e.data)) {
                    let t = "function" == typeof w.getDuration && w.getDuration() || 0,
                        r = Number((("function" == typeof w.getCurrentTime && w.getCurrentTime() || 0) / t * 100).toFixed(2)),
                        a = 1 === e.data ? "video_play" : "video_pause";
                    (0, u.pushVideoEvent)({
                        name: a,
                        videoDuration: t,
                        videoProgress: (Number.isNaN(r), r)
                    })
                }
            }))
        }, [w]), (0, r.useEffect)(() => {
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
                children: [p && x && (0, t.jsxs)("div", {
                    className: "yt-lite z-10 h-full overflow-auto",
                    ...{
                        tabIndex: 0,
                        role: "button",
                        onClick: C,
                        onKeyDown: e => {
                            ("Enter" === e.key || "Space" === e.key) && C()
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
                        blockedMessage: g,
                        consentButtonLabel: h
                    })]
                }), (0, t.jsx)(n.default, {
                    isOpen: b,
                    onOpenChange: j,
                    showTriggerButton: !1,
                    children: (0, t.jsxs)("div", {
                        className: "z-50 mt-20 flex w-10/12 flex-col rounded-3xl bg-black p-4 lg:w-8/12",
                        tabIndex: -1,
                        children: [(0, t.jsx)(i.default, {
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
                            blockedMessage: g,
                            consentButtonLabel: h
                        })]
                    })
                })]
            })]
        })
    }], 224601)
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
        l = e.i(601198),
        s = e.i(810775),
        n = e.i(919406),
        i = e.i(864074),
        o = e.i(514683);
    r.Light.registerLanguage("csharp", l.default), r.Light.registerLanguage("javascript", s.default), r.Light.registerLanguage("xml", n.default), r.Light.registerLanguage("rust", i.default), r.Light.registerLanguage("css", o.default), e.s(["default", 0, ({
        code: e,
        language: l
    }) => (0, t.jsx)("div", {
        className: "text-white [&>pre]:rounded-xl [&>pre]:!p-4",
        children: (0, t.jsx)(r.Light, {
            style: a.default,
            language: l,
            children: e
        })
    })], 570133);
    var c = e.i(3931),
        d = e.i(749583),
        u = e.i(394225),
        m = e.i(652955),
        p = e.i(229696),
        f = e.i(722978),
        g = e.i(805518),
        h = e.i(363737);
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
            colTitle: r,
            truncationEnabled: a,
            rowTitle: l,
            className: s = "",
            isTableCell: n
        }) => {
            let [i, o] = (0, c.useState)(!1), [u, m] = (0, c.useState)(!1), p = (0, c.useRef)(null), j = (0, f.default)({
                "cursor-pointer relative": i
            }, s), y = (0, f.default)({
                "line-clamp-3": a
            });
            (0, c.useEffect)(() => {
                let e = p.current;
                e && (e.scrollHeight > e.clientHeight ? o(!0) : o(!1))
            }, [p]);
            let v = () => {
                    m(!0)
                },
                w = a && i ? {
                    tabIndex: 0,
                    role: "button",
                    onClick: v,
                    onKeyDown: e => {
                        ("Enter" === e.key || "Space" === e.key) && v()
                    }
                } : {};
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsxs)("td", {
                    className: (0, f.default)(j, {
                        "bg-gray-50 p-3 dark:bg-gray-900": !n,
                        "h-full !p-0": n
                    }),
                    ...w,
                    children: [n ? e : (0, t.jsx)(g.default, {
                        className: y,
                        ref: p,
                        children: e
                    }), a && i && (0, t.jsx)(x, {
                        className: "absolute top-1.5 right-1.5"
                    })]
                }), (0, t.jsx)(h.default, {
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
                        }), (0, t.jsx)(g.default, {
                            className: "caption-sm mb-2.5 text-black dark:text-white",
                            children: l
                        }), (0, t.jsx)("div", {
                            className: "text-heading-sm mb-4 text-black dark:text-white",
                            children: r
                        }), (0, t.jsx)("div", {
                            className: "text-small mb-8",
                            children: (0, t.jsx)(g.default, {
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
        hideTitle: l = !1
    }) => {
        let [s, ...n] = e.rows.map(e => ({
            ...e,
            cells: (e.cells ?? []).map(e => "string" == typeof e ? e : "")
        })), i = `align-top text-heading-sm md:text-small-bold rounded-md bg-gray-100 text-gray-800 bg-gray-100 dark:bg-gray-700 md:dark:bg-gray-800 dark:text-gray-200 border-none ${a}`, o = "align-top rounded-md text-sm text-gray-800 dark:text-gray-200 border-none", h = (0, f.default)("w-full table-fixed border-separate border-spacing-2 break-words", r), x = (0, f.default)("h-full table-fixed border-separate border-spacing-1 break-words", r), b = (0, c.useCallback)(e => {
            let [r, ...a] = e.split("\n"), l = a.splice(1).map((e, r) => {
                let a = e.split("|").filter(e => e).map(e => e.trim());
                return (0, t.jsx)("div", {
                    className: "flex grow",
                    children: a.map((e, a) => (0, t.jsx)(p.default, {
                        className: "flex grow basis-0 items-center justify-center rounded-md bg-gray-50 px-6 py-4 text-center dark:bg-gray-900",
                        children: e
                    }, `cell-${r}-${a}-${e}`))
                }, `row-${r}`)
            });
            return (0, t.jsxs)("div", {
                className: "flex h-full flex-col",
                children: [(0, t.jsx)("div", {
                    className: "-ml-1 flex grow",
                    children: r.split("|").filter(e => e).map((e, r) => (0, t.jsx)(p.default, {
                        className: "ml-1 flex grow basis-0 items-center justify-center rounded-md bg-gray-50 px-6 py-4 text-center dark:bg-gray-900",
                        children: e.trim()
                    }, `header-cell-${r}-${e}`))
                }), l]
            })
        }, []), y = (0, c.useMemo)(() => n.map(e => e.cells.reduce((e, r, a) => ({
            ...e,
            [`col${a+1}`]: {
                component: r.startsWith("|") ? b(r) : (0, t.jsx)(p.default, {
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
                    children: r
                }),
                isTableCell: r.startsWith("|"),
                cellContent: r
            }
        }), {})), [n, b]), v = (0, c.useMemo)(() => s.cells.map((e, r) => (0, t.jsx)("th", {
            scope: "col",
            className: "min-w-[10rem] rounded-md border-none bg-gray-100 py-3.5 pr-4 pl-4 text-left align-top text-gray-800 dark:bg-gray-800 dark:text-gray-400",
            children: (0, t.jsx)(p.default, {
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
        }, `${r}-${e}`)), [s.cells]), w = (0, c.useMemo)(() => y.map((r, a) => {
            let l = Object.values(r),
                s = l[0];
            return (0, t.jsx)("tr", {
                className: "border-separate border-spacing-1",
                children: l.map((r, l) => (0, t.jsx)(j, {
                    isTableCell: r.isTableCell,
                    className: 0 === l ? i : o,
                    rowTitle: s.component,
                    colTitle: 0 !== l && v && v[l] ? v[l] : "",
                    truncationEnabled: e.tableTruncation,
                    children: r.component
                }, `${a}-${l}-${r.cellContent}`))
            }, a)
        }), [v, y, i, e.tableTruncation]), C = (0, c.useMemo)(() => s.cells.map((e, r) => (0, t.jsx)("th", {
            scope: "col",
            className: "text-tiny-bold rounded-md bg-gray-100 py-3.5 pr-4 pl-4 text-left align-top text-gray-800 dark:bg-gray-900 dark:text-gray-400",
            children: (0, t.jsx)(p.default, {
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
        }, `${r}-${e}`)), [s]), k = (0, c.useMemo)(() => y.map((e, r) => (0, t.jsx)("div", {
            className: "mb-4 min-w-full rounded-md bg-gray-100 align-middle dark:bg-gray-700",
            children: (0, t.jsxs)("table", {
                className: h,
                children: [s && s.cells.length > 0 && (0, t.jsx)("thead", {
                    className: "hidden",
                    children: (0, t.jsx)("tr", {
                        className: "border-separate border-spacing-1",
                        children: C
                    })
                }), (0, t.jsx)("tbody", {
                    className: "table-row-group bg-gray-50 dark:bg-gray-900",
                    children: Object.values(e).map((e, a) => e ? (0, t.jsx)("tr", {
                        className: "rounded-md",
                        children: (0, t.jsxs)("td", {
                            className: 0 === a ? i : o,
                            children: [0 !== a && s && s.cells[a] && (0, t.jsx)(p.default, {
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
                            }), (0, t.jsx)(g.default, {
                                children: e.component
                            })]
                        })
                    }, `${r}-${a}-${s.cells[a]}`) : null)
                })]
            })
        }, `row-${r}`)), [y, s, h, i, C]);
        return (0, t.jsxs)("div", {
            children: [(0, t.jsx)("div", {
                className: "sm:flex sm:items-center",
                children: (0, t.jsxs)("div", {
                    className: "sm:flex-auto",
                    children: [!l && e.tableTitle && (0, t.jsx)("div", {
                        className: "text-heading-sm",
                        children: e.tableTitle
                    }), !l && e.tableDescription && (0, t.jsx)("p", {
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
                            children: (0, t.jsx)(p.default, {
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
}, 883027, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(722978),
        a = e.i(749583),
        l = e.i(475200);
    e.s(["default", 0, ({
        pdf: e,
        hidePdfToolbar: s,
        url: n,
        mobilePdfButtonText: i,
        title: o,
        visualOptions: c,
        theme: d,
        isHidden: u
    }) => {
        let m = (0, l.default)(),
            p = e ? e.cdnURL : n,
            f = (0, r.default)("mb-8 md:mb-12", {
                "bg-black py-16": c?.container && "dark" === d,
                "bg-white py-16": c?.container && "light" === d
            }),
            g = (0, r.default)({
                container: c?.container
            }),
            h = e && m;
        return (0, t.jsx)(t.Fragment, {
            children: !u && (0, t.jsx)("div", {
                className: f,
                children: (0, t.jsx)("div", {
                    className: g,
                    children: (0, t.jsxs)("div", {
                        className: "relative",
                        children: [(0, t.jsx)("iframe", {
                            className: "aspect-[4/3] w-full rounded-xl",
                            src: `${p}?#view=fit&navpanes=0${s?"&toolbar=0":""}`,
                            title: o ?? ""
                        }), h && (0, t.jsx)("div", {
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
}, 843031, (e, t, r) => {
    t.exports = e.r(581511)(e.r(78974), "WeakMap")
}, 436324, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(677278),
        a = e.i(3931),
        l = e.i(749583),
        s = e.i(222061),
        n = e.i(829483),
        i = e.i(662380),
        o = e.i(179695),
        c = e.i(394261),
        d = e.i(545487),
        u = e.i(239273),
        m = e.i(474029),
        p = e.i(396241),
        f = e.i(869324),
        g = e.i(497492);
    e.s(["FormBuilder", 0, ({
        form: e,
        close: h,
        isGrowForm: x
    }) => {
        let b = (0, g.getFilteredQueryParams)(["sfcid", "sflsa", "sfit"], x),
            j = (0, g.getQueryParams)(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"], !0),
            [y, v] = (0, a.useState)(!1),
            {
                setFormSubmitted: w
            } = (0, d.useResourcesDetailContext)(),
            [C] = (0, u.default)("ELOQUA"),
            {
                handleSubmit: k,
                control: N,
                setValue: L,
                watch: T,
                getValues: S,
                formState: {
                    isSubmitting: P
                }
            } = (0, m.useForm)({
                reValidateMode: "onChange",
                mode: "onChange"
            }),
            I = T(p.COUNTRY_CODE);
        return y && e?.successMessage?.showSuccessMessage ? (0, t.jsxs)("div", {
            className: "flex flex-col items-center justify-center p-8 text-center",
            children: [e.successMessage.title && (0, t.jsx)("h3", {
                className: "mb-4 text-xl font-semibold text-gray-900",
                children: e.successMessage.title
            }), e.successMessage.description && (0, t.jsx)("p", {
                className: "mb-6 text-gray-600",
                children: e.successMessage.description
            }), e?.successMessage?.closeButtonText && (0, t.jsx)(l.default, {
                onPress: h,
                className: "[&>div>span]:!text-black hover:[&>div>span]:!underline",
                variant: "secondary",
                children: e?.successMessage?.closeButtonText
            })]
        }) : (0, t.jsxs)(c.default, {
            onSubmit: k(t => {
                let a = x ? (({
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
                    l = e?.fields ? (0, g.getAlwaysSendOnData)(e.fields, S, I) : {};
                t.elqCustomerGUID = C?.split("&")?.[0]?.split("GUID=")?.[1] || "", t = {
                    ...t,
                    ...a,
                    ...l,
                    ...j,
                    ...b,
                    ...e?.extraFields
                }, fetch("https://create.unity.com/e/f2", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: new URLSearchParams((0, g.cleanData)(t)).toString()
                }).then(() => {
                    (0, f.default)({
                        properties: {
                            form_action: "submitted",
                            form_id: t.elqFormID,
                            form_name: t.elqFormName,
                            form_customer_id: t.elqCustomerGUID
                        }
                    }), w(!0), e?.successMessage?.showSuccessMessage ? v(!0) : h()
                }).catch(e => r.captureException(e))
            }),
            children: [(0, t.jsx)("div", {
                className: "flex flex-col [&>*]:mt-3",
                children: e?.fields && e?.fields.map((e, r) => {
                    switch (e.formField) {
                        case "input":
                            return (0, t.jsx)(s.default, {
                                ...e,
                                control: N,
                                countryCode: I
                            }, r);
                        case "checkbox":
                            return (0, t.jsx)(n.default, {
                                countryCode: I,
                                ...e,
                                control: N
                            }, r);
                        case "dropdown":
                            return (0, t.jsx)(i.default, {
                                countryCode: I,
                                ...e,
                                control: N,
                                setValue: L
                            }, r);
                        case "richText":
                            return (0, t.jsx)(o.default, {
                                ...e,
                                control: N,
                                countryCode: I
                            }, r)
                    }
                })
            }), e?.actions && (0, t.jsxs)("div", {
                className: "mt-10 border-t border-t-gray-200 pt-6",
                children: [e?.actions?.primaryActionText && (0, t.jsx)(l.default, {
                    type: "submit",
                    rounded: !0,
                    hasArrow: !0,
                    disabled: P,
                    children: e?.actions?.primaryActionText
                }), e?.actions?.secondaryActionText && (0, t.jsx)(l.default, {
                    onPress: h,
                    className: "[&>div>span]:!text-black hover:[&>div>span]:!underline",
                    variant: "secondary",
                    children: e?.actions?.secondaryActionText
                })]
            })]
        })
    }])
}, 115219, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(363737),
        a = e.i(436324),
        l = e.i(869324),
        s = e.i(537251);
    e.s(["applyFormOverrides", 0, function(e, t) {
        let r;
        if (!t || !e?.fields) return e;
        try {
            r = JSON.parse(t)
        } catch {
            return e
        }
        if (!r) return e;
        let a = [...e.fields];
        for (let e of Object.keys(r)) {
            let t = a.findIndex(t => t.formFieldId === e);
            if (t < 0) continue;
            let l = r[e];
            null != l.isRequired && (a[t] = {
                ...a[t],
                isRequired: l.isRequired
            }), l.isHidden && a.splice(t, 1)
        }
        return {
            ...e,
            fields: a
        }
    }, "trackFormOpen", 0, function(e) {
        (0, l.default)({
            properties: {
                form_action: "presented",
                form_id: e.fields?.find(e => "elqFormID" === e.formFieldId)?.defaultValue,
                form_name: e.fields?.find(e => "elqFormName" === e.formFieldId)?.defaultValue
            }
        })
    }, "useFormModal", 0, e => {
        let {
            extraFields: n
        } = (0, s.default)(), i = ({
            label: s,
            form: n
        }) => {
            let i = ((e, t) => {
                let r = e?.find(e => t.title === e?.form?.title)?.customSelections || "";
                try {
                    return JSON.parse(r)
                } catch (e) {
                    return null
                }
            })(e || [], n);
            if (i && n?.fields)
                for (let e of Object.keys(i)) {
                    let t = n.fields.findIndex(t => t.formFieldId === e);
                    if (t >= 0) {
                        let r = i[e];
                        null != r.isRequired && (n.fields[t].isRequired = i[e].isRequired), r.isHidden && n.fields.splice(t, 1)
                    }
                }
            return (0, t.jsx)(r.default, {
                actionLabel: s,
                onOpenChange: e => {
                    e && (0, l.default)({
                        properties: {
                            form_action: "presented",
                            form_id: n.fields?.find(e => "elqFormID" === e.formFieldId)?.defaultValue,
                            form_name: n.fields?.find(e => "elqFormName" === e.formFieldId)?.defaultValue
                        }
                    })
                },
                children: e => (0, t.jsx)(r.default.Layout, {
                    modal: {
                        title: n.title,
                        description: n.description
                    },
                    children: n && (0, t.jsx)(a.FormBuilder, {
                        form: n,
                        close: e
                    })
                })
            })
        };
        return {
            renderModal: i,
            mapFormActions: e => e?.map(e => ({
                title: e.title,
                link: e.link ? {
                    href: e.link.linkReference?.href.current || "",
                    target: e.link.linkReference?.target || "_self"
                } : null,
                form: e.form ? {
                    form: e.form,
                    webinarFormParametersContent: e.webinarFormParametersContent,
                    extraFields: n,
                    renderModal: i
                } : null
            })),
            extraFields: n
        }
    }])
}, 201763, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(722978),
        a = e.i(655105);
    e.s(["default", 0, ({
        keyFigures: e,
        nested: l = !1,
        theme: s = "light"
    }) => {
        let n = (0, r.clsx)("container col-span-12 pt-16 grid grid-cols-12 gap-2 ", {
            "py-16": !l
        });
        return (0, t.jsx)("div", {
            className: "dark" === s ? "bg-black text-white" : "",
            children: (0, t.jsx)("div", {
                className: n,
                children: e?.map((n, i) => {
                    let {
                        value: o,
                        label: c
                    } = n, d = (0, r.clsx)("col-span-12 flex rounded-md items-center gap-2 px-4 py-2 filter md:p-4 lg:col-span-4 xl:p-6", {
                        "backdrop-blur-lg": l && "dark" !== s,
                        "bg-gray-900 dark:bg-black": "dark" === s,
                        "bg-gray-100 dark:bg-gray-900 text-gray-800": !l && "dark" !== s,
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
                    }, i) : c && o?.type === "icon" && !o.url ? (0, t.jsx)("div", {
                        className: d,
                        children: (0, t.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: c
                        })
                    }, i) : o?.type === "icon" && o.url ? (0, t.jsxs)("div", {
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
                    }, i) : null
                })
            })
        })
    }])
}, 957885, 900448, e => {
    "use strict";
    var t = e.i(3931),
        r = e.i(604082),
        a = e.i(318601),
        l = e.i(623706),
        s = e.i(212299);
    e.i(788727);
    var n = e.i(339206),
        i = e.i(682792),
        o = e.i(7180);
    e.s(["useCheckbox", 0, function(e, c, d) {
        let u = (0, a.useFormValidationState)({
                ...e,
                value: c.isSelected
            }),
            {
                isInvalid: m,
                validationErrors: p,
                validationDetails: f
            } = u.displayValidation,
            {
                labelProps: g,
                inputProps: h,
                isSelected: x,
                isPressed: b,
                isDisabled: j,
                isReadOnly: y
            } = function(e, t, a) {
                let {
                    isDisabled: l = !1,
                    isReadOnly: c = !1,
                    value: d,
                    name: u,
                    children: m,
                    "aria-label": p,
                    "aria-labelledby": f,
                    validationState: g = "valid",
                    isInvalid: h
                } = e, {
                    pressProps: x,
                    isPressed: b
                } = (0, s.usePress)({
                    isDisabled: l
                }), {
                    pressProps: j,
                    isPressed: y
                } = (0, s.usePress)({
                    onPress() {
                        var e;
                        t.toggle(), null == (e = a.current) || e.focus()
                    },
                    isDisabled: l || c
                }), {
                    focusableProps: v
                } = (0, o.useFocusable)(e, a), w = (0, r.mergeProps)(x, v), C = (0, n.filterDOMProps)(e, {
                    labelable: !0
                });
                return (0, i.useFormReset)(a, t.isSelected, t.setSelected), {
                    labelProps: (0, r.mergeProps)(j, {
                        onClick: e => e.preventDefault()
                    }),
                    inputProps: (0, r.mergeProps)(C, {
                        "aria-invalid": h || "invalid" === g || void 0,
                        "aria-errormessage": e["aria-errormessage"],
                        "aria-controls": e["aria-controls"],
                        "aria-readonly": c || void 0,
                        onChange: e => {
                            e.stopPropagation(), t.setSelected(e.target.checked)
                        },
                        disabled: l,
                        ...null == d ? {} : {
                            value: d
                        },
                        name: u,
                        type: "checkbox",
                        ...w
                    }),
                    isSelected: t.isSelected,
                    isPressed: b || y,
                    isDisabled: l,
                    isReadOnly: c,
                    isInvalid: h || "invalid" === g
                }
            }({
                ...e,
                isInvalid: m
            }, c, d);
        (0, l.useFormValidation)(e, u, d);
        let {
            isIndeterminate: v,
            isRequired: w,
            validationBehavior: C = "aria"
        } = e;
        (0, t.useEffect)(() => {
            d.current && (d.current.indeterminate = !!v)
        });
        let {
            pressProps: k
        } = (0, s.usePress)({
            isDisabled: j || y,
            onPress() {
                let {
                    [a.privateValidationStateProp]: t
                } = e, {
                    commitValidation: r
                } = t || u;
                r()
            }
        });
        return {
            labelProps: (0, r.mergeProps)(g, k),
            inputProps: {
                ...h,
                checked: x,
                "aria-required": w && "aria" === C || void 0,
                required: w && "native" === C
            },
            isSelected: x,
            isPressed: b,
            isDisabled: j,
            isReadOnly: y,
            isInvalid: m,
            validationErrors: p,
            validationDetails: f
        }
    }], 957885);
    var c = e.i(201373);
    e.s(["useToggleState", 0, function(e = {}) {
        var r;
        let {
            isReadOnly: a
        } = e, [l, s] = (0, c.useControlledState)(e.isSelected, e.defaultSelected || !1, e.onChange), [n] = (0, t.useState)(l);
        return {
            isSelected: l,
            defaultSelected: null != (r = e.defaultSelected) ? r : n,
            setSelected: function(e) {
                a || s(e)
            },
            toggle: function() {
                a || s(!l)
            }
        }
    }], 900448)
}, 649051, e => {
    "use strict";
    e.s(["storageAvailable", 0, e => {
        let t;
        try {
            t = window[e];
            let r = "__storage_test__";
            return t.setItem(r, r), t.removeItem(r), !0
        } catch (e) {
            return e instanceof DOMException && "QuotaExceededError" === e.name && t && 0 !== t.length
        }
    }])
}, 976989, e => {
    "use strict";
    var t = e.i(500783);
    e.s(["default", 0, ({
        className: e,
        width: r = 18,
        height: a = 18
    }) => (0, t.jsx)("svg", {
        className: e,
        width: r,
        height: a,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, t.jsx)("path", {
            d: "M13.8001 10.7556L8.33444 1.26375C8.19785 1.0312 8.00287 0.838382 7.76881 0.704408C7.53476 0.570434 7.26975 0.499954 7.00006 0.499954C6.73037 0.499954 6.46536 0.570434 6.23131 0.704408C5.99725 0.838382 5.80227 1.0312 5.66569 1.26375L0.20006 10.7556C0.0686451 10.9805 -0.000610352 11.2364 -0.000610352 11.4969C-0.000610352 11.7574 0.0686451 12.0132 0.20006 12.2381C0.334892 12.4721 0.529541 12.6659 0.764036 12.7998C0.99853 12.9337 1.26442 13.0028 1.53444 13H12.4657C12.7355 13.0026 13.0011 12.9334 13.2354 12.7995C13.4696 12.6656 13.6641 12.4719 13.7988 12.2381C13.9304 12.0133 13.9999 11.7575 14.0001 11.497C14.0003 11.2365 13.9313 10.9807 13.8001 10.7556ZM6.50006 5.5C6.50006 5.36739 6.55274 5.24021 6.64651 5.14644C6.74027 5.05267 6.86745 5 7.00006 5C7.13267 5 7.25985 5.05267 7.35361 5.14644C7.44738 5.24021 7.50006 5.36739 7.50006 5.5V8C7.50006 8.1326 7.44738 8.25978 7.35361 8.35355C7.25985 8.44732 7.13267 8.5 7.00006 8.5C6.86745 8.5 6.74027 8.44732 6.64651 8.35355C6.55274 8.25978 6.50006 8.1326 6.50006 8V5.5ZM7.00006 11C6.85172 11 6.70672 10.956 6.58338 10.8736C6.46005 10.7912 6.36392 10.6741 6.30715 10.537C6.25038 10.4 6.23553 10.2492 6.26447 10.1037C6.29341 9.95819 6.36484 9.82455 6.46973 9.71967C6.57462 9.61478 6.70826 9.54335 6.85374 9.51441C6.99923 9.48547 7.15003 9.50032 7.28707 9.55709C7.42412 9.61385 7.54125 9.70998 7.62366 9.83332C7.70607 9.95665 7.75006 10.1017 7.75006 10.25C7.75006 10.4489 7.67104 10.6397 7.53039 10.7803C7.38974 10.921 7.19897 11 7.00006 11Z",
            fill: "currentColor"
        })
    })])
}, 820092, (e, t, r) => {
    var a = Object.prototype;
    t.exports = function(e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || a)
    }
}, 216158, (e, t, r) => {
    t.exports = function(e, t) {
        return function(r) {
            return e(t(r))
        }
    }
}, 394272, (e, t, r) => {
    t.exports = e.r(216158)(Object.keys, Object)
}, 668488, (e, t, r) => {
    var a = e.r(820092),
        l = e.r(394272),
        s = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        if (!a(e)) return l(e);
        var t = [];
        for (var r in Object(e)) s.call(e, r) && "constructor" != r && t.push(r);
        return t
    }
}, 784800, (e, t, r) => {
    t.exports = function(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 0x1fffffffffffff
    }
}, 622914, (e, t, r) => {
    var a = e.r(462931),
        l = e.r(784800);
    t.exports = function(e) {
        return null != e && l(e.length) && !a(e)
    }
}, 756024, (e, t, r) => {
    t.exports = function() {
        return !1
    }
}, 432816, (e, t, r) => {
    var a = e.r(78974),
        l = e.r(756024),
        s = r && !r.nodeType && r,
        n = s && t && !t.nodeType && t,
        i = n && n.exports === s ? a.Buffer : void 0;
    t.exports = (i ? i.isBuffer : void 0) || l
}, 742112, (e, t, r) => {
    var a = e.r(416907),
        l = e.r(784800),
        s = e.r(394022),
        n = {};
    n["[object Float32Array]"] = n["[object Float64Array]"] = n["[object Int8Array]"] = n["[object Int16Array]"] = n["[object Int32Array]"] = n["[object Uint8Array]"] = n["[object Uint8ClampedArray]"] = n["[object Uint16Array]"] = n["[object Uint32Array]"] = !0, n["[object Arguments]"] = n["[object Array]"] = n["[object ArrayBuffer]"] = n["[object Boolean]"] = n["[object DataView]"] = n["[object Date]"] = n["[object Error]"] = n["[object Function]"] = n["[object Map]"] = n["[object Number]"] = n["[object Object]"] = n["[object RegExp]"] = n["[object Set]"] = n["[object String]"] = n["[object WeakMap]"] = !1, t.exports = function(e) {
        return s(e) && l(e.length) && !!n[a(e)]
    }
}, 585466, (e, t, r) => {
    t.exports = function(e) {
        return function(t) {
            return e(t)
        }
    }
}, 91480, (e, t, r) => {
    var a = e.r(505918),
        l = r && !r.nodeType && r,
        s = l && t && !t.nodeType && t,
        n = s && s.exports === l && a.process;
    t.exports = function() {
        try {
            var e = s && s.require && s.require("util").types;
            if (e) return e;
            return n && n.binding && n.binding("util")
        } catch (e) {}
    }()
}, 905330, (e, t, r) => {
    var a = e.r(742112),
        l = e.r(585466),
        s = e.r(91480),
        n = s && s.isTypedArray;
    t.exports = n ? l(n) : a
}, 551779, e => {
    "use strict";
    var t, r, a = ((t = {}).en = "en", t.de = "de_de", t.ja = "ja_jp", t.fr = "fr_fr", t.pt = "pt_br", t.cn = "zh_cn", t.es = "es_es", t.ru = "ru_ru", t.kr = "ko_kr", t),
        l = ((r = {}).en = "en-US", r.de = "de-DE", r.ja = "ja-JP", r.fr = "fr-FR", r.pt = "pt-BR", r.cn = "zh-CN", r.es = "es-ES", r.ru = "ru-RU", r.kr = "ko-KR", r);
    e.s(["LanguageMap", () => a, "LanguageMapIETFLanguageTag", () => l])
}, 22766, (e, t, r) => {
    t.exports = e.r(581511)(e.r(78974), "DataView")
}, 13715, (e, t, r) => {
    t.exports = e.r(581511)(e.r(78974), "Promise")
}, 292408, (e, t, r) => {
    t.exports = e.r(581511)(e.r(78974), "Set")
}, 354700, (e, t, r) => {
    var a = e.r(22766),
        l = e.r(764138),
        s = e.r(13715),
        n = e.r(292408),
        i = e.r(843031),
        o = e.r(416907),
        c = e.r(908829),
        d = "[object Map]",
        u = "[object Promise]",
        m = "[object Set]",
        p = "[object WeakMap]",
        f = "[object DataView]",
        g = c(a),
        h = c(l),
        x = c(s),
        b = c(n),
        j = c(i),
        y = o;
    (a && y(new a(new ArrayBuffer(1))) != f || l && y(new l) != d || s && y(s.resolve()) != u || n && y(new n) != m || i && y(new i) != p) && (y = function(e) {
        var t = o(e),
            r = "[object Object]" == t ? e.constructor : void 0,
            a = r ? c(r) : "";
        if (a) switch (a) {
            case g:
                return f;
            case h:
                return d;
            case x:
                return u;
            case b:
                return m;
            case j:
                return p
        }
        return t
    }), t.exports = y
}, 87522, (e, t, r) => {
    var a = e.r(668488),
        l = e.r(354700),
        s = e.r(410090),
        n = e.r(778116),
        i = e.r(622914),
        o = e.r(432816),
        c = e.r(820092),
        d = e.r(905330),
        u = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        if (null == e) return !0;
        if (i(e) && (n(e) || "string" == typeof e || "function" == typeof e.splice || o(e) || d(e) || s(e))) return !e.length;
        var t = l(e);
        if ("[object Map]" == t || "[object Set]" == t) return !e.size;
        if (c(e)) return !a(e).length;
        for (var r in e)
            if (u.call(e, r)) return !1;
        return !0
    }
}, 180793, (e, t, r) => {
    t.exports = function(e) {
        return null == e
    }
}, 829150, 434438, e => {
    "use strict";
    var t = e.i(551779);
    let r = t.LanguageMapIETFLanguageTag[t.LanguageMap.en],
        a = e => Object.keys(t.LanguageMapIETFLanguageTag).find(r => t.LanguageMapIETFLanguageTag[r] === e),
        l = (e = t.LanguageMap.en) => t.LanguageMapIETFLanguageTag[e] || r;
    e.s(["FALLBACK_LANGUAGE", 0, r, "default", 0, l, "getLanguageKey", 0, a], 434438);
    var s = e.i(87522),
        n = e.i(180793);
    e.s(["default", 0, (e, i, o) => {
        let {
            locale: c,
            ...d
        } = i, u = e;
        return o && u ? ((e => {
            let r;
            try {
                r = new URL(e)
            } catch (e) {
                return !1
            }
            return l(r.pathname.split("/")[1]) !== t.LanguageMapIETFLanguageTag.en
        })(u) || c === r || (u = ((e, t) => {
            let r;
            if (!t) return e;
            try {
                r = new URL(e)
            } catch (t) {
                return e
            }
            let a = r.pathname.split("/");
            return a.splice(1, 0, t), r.pathname = a.join("/"), r.toString()
        })(u, a(c))), ((e, t) => {
            let r;
            if ((0, s.default)(t)) return e;
            let a = -1 === (r = e.indexOf("?")) ? {} : e.slice(r + 1).split("&").reduce((e, t) => {
                    let [r, a] = t.split("=");
                    return r && (e[decodeURIComponent(r)] = decodeURIComponent(a || "")), e
                }, {}),
                l = {};
            Object.entries(t).forEach(([e, t]) => {
                Object.prototype.hasOwnProperty.call(a, e) || (0, n.default)(t) || (l[e] = t)
            });
            let i = new URLSearchParams(l).toString();
            return e.includes("?") ? `${e}&${i}` : `${e}?${i}`
        })(u, d)) : u
    }], 829150)
}, 185462, e => {
    "use strict";
    let t = e.i(201763).default;
    e.s(["default", 0, t])
}, 691156, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(3931),
        a = e.i(722978);
    e.s(["default", 0, ({
        children: e,
        title: l,
        isExpanded: s = !1,
        blockKey: n
    }) => {
        let [i, o] = (0, r.useState)(s), c = () => {
            o(!i)
        }, d = (0, a.default)("accordion-content [&_p]:mb-4 [&_ul]:mb-4", {
            "transition ease-in-out opacity-100 h-auto w-5/6 pb-4 loco-text-body text-gray-800 dark:text-gray-100": i,
            "transition ease-in-out opacity-0 h-0 overflow-hidden": !i
        });
        return (0, t.jsxs)("div", {
            className: "border-b border-gray-200 dark:border-gray-800",
            children: [(0, t.jsx)("div", {
                onClick: c,
                onKeyDown: e => {
                    ("Enter" === e.key || " " === e.key) && c()
                },
                role: "button",
                tabIndex: 0,
                "aria-expanded": i,
                className: "cursor-pointer py-6",
                "data-link-location": `${n}-video-play`,
                "data-link-id": `${n}-accordion-toggle`,
                "data-link-type": "CTA",
                children: (0, t.jsxs)("div", {
                    className: "loco-text-body-lg-medium flex justify-between",
                    children: [(0, t.jsx)("h3", {
                        className: "w-11/12 text-gray-800 dark:text-gray-200",
                        children: l
                    }), (0, t.jsx)("span", {
                        className: "inline-block text-gray-700 dark:text-gray-300",
                        children: i ? "-" : "+"
                    })]
                })
            }), (0, t.jsx)("div", {
                className: d,
                "aria-hidden": !i,
                children: e
            })]
        })
    }], 691156)
}, 817916, e => {
    "use strict";
    var t = e.i(500783);
    let r = ({
        id: e,
        className: r
    }) => (0, t.jsx)("div", {
        id: e,
        "data-anchor-item": !0,
        className: r,
        style: {
            marginTop: "-120px",
            paddingTop: "120px"
        }
    });
    e.s(["default", 0, ({
        anchorID: e
    }) => (0, t.jsx)(r, {
        id: e ?? ""
    })], 817916)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8f32c3cb-7a71-5e7c-88f8-37befd673170")
    } catch (e) {}
}();
//# debugId=8f32c3cb-7a71-5e7c-88f8-37befd673170