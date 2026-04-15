(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 436324, e => {
    "use strict";
    var t = e.i(615167),
        r = e.i(677278),
        n = e.i(145158),
        l = e.i(749583),
        a = e.i(222061),
        s = e.i(829483),
        i = e.i(662380),
        o = e.i(179695),
        c = e.i(394261),
        u = e.i(545487),
        d = e.i(239273),
        p = e.i(512309),
        f = e.i(396241),
        m = e.i(869324),
        g = e.i(497492);
    let h = ({
        form: e,
        close: h,
        isGrowForm: x
    }) => {
        let b = (0, g.getFilteredQueryParams)(["sfcid", "sflsa", "sfit"], x),
            y = (0, g.getQueryParams)(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"], !0),
            [v, k] = (0, n.useState)(!1),
            {
                setFormSubmitted: w
            } = (0, u.useResourcesDetailContext)(),
            [j] = (0, d.default)("ELOQUA"),
            {
                handleSubmit: C,
                control: N,
                setValue: O,
                watch: S,
                getValues: E,
                formState: {
                    isSubmitting: T
                }
            } = (0, p.useForm)({
                reValidateMode: "onChange",
                mode: "onChange"
            }),
            P = S(f.COUNTRY_CODE);
        return v && e?.successMessage?.showSuccessMessage ? (0, t.jsxs)("div", {
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
            onSubmit: C(t => {
                let n = x ? (({
                        emailConfirmation: e,
                        ghandler: t,
                        gcid: r,
                        growDivision: n,
                        growDepartment: l
                    }) => ({
                        emailConfirmation: e,
                        ghandler: t,
                        gcid: r,
                        growDivision: n,
                        growDepartment: l,
                        grow: !0
                    }))(e?.sfdcIntegration || {}) : e?.sfdcIntegration,
                    l = e?.fields ? (0, g.getAlwaysSendOnData)(e.fields, E, P) : {};
                t.elqCustomerGUID = j?.split("&")?.[0]?.split("GUID=")?.[1] || "", t = {
                    ...t,
                    ...n,
                    ...l,
                    ...y,
                    ...b,
                    ...e?.extraFields
                }, fetch("https://create.unity.com/e/f2", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: new URLSearchParams((0, g.cleanData)(t)).toString()
                }).then(() => {
                    (0, m.default)({
                        properties: {
                            form_action: "submitted",
                            form_id: t.elqFormID,
                            form_name: t.elqFormName,
                            form_customer_id: t.elqCustomerGUID
                        }
                    }), w(!0), e?.successMessage?.showSuccessMessage ? k(!0) : h()
                }).catch(e => r.captureException(e))
            }),
            children: [(0, t.jsx)("div", {
                className: "flex flex-col [&>*]:mt-3",
                children: e?.fields && e?.fields.map((e, r) => {
                    switch (e.formField) {
                        case "input":
                            return (0, t.jsx)(a.default, {
                                ...e,
                                control: N,
                                countryCode: P
                            }, r);
                        case "checkbox":
                            return (0, t.jsx)(s.default, {
                                countryCode: P,
                                ...e,
                                control: N
                            }, r);
                        case "dropdown":
                            return (0, t.jsx)(i.default, {
                                countryCode: P,
                                ...e,
                                control: N,
                                setValue: O
                            }, r);
                        case "richText":
                            return (0, t.jsx)(o.default, {
                                ...e,
                                control: N,
                                countryCode: P
                            }, r)
                    }
                })
            }), e?.actions && (0, t.jsxs)("div", {
                className: "mt-10 border-t border-t-gray-200 pt-6",
                children: [e?.actions?.primaryActionText && (0, t.jsx)(l.default, {
                    type: "submit",
                    rounded: !0,
                    hasArrow: !0,
                    disabled: T,
                    children: e?.actions?.primaryActionText
                }), e?.actions?.secondaryActionText && (0, t.jsx)(l.default, {
                    onPress: h,
                    className: "[&>div>span]:!text-black hover:[&>div>span]:!underline",
                    variant: "secondary",
                    children: e?.actions?.secondaryActionText
                })]
            })]
        })
    };
    e.s(["FormBuilder", () => h])
}, 644995, e => {
    "use strict";
    var t = e.i(615167);
    e.s(["default", 0, ({
        className: e = "",
        width: r = 16,
        height: n = 16
    }) => (0, t.jsxs)("svg", {
        width: r,
        height: n,
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
}, 764138, (e, t, r) => {
    t.exports = e.r(581511)(e.r(78974), "Map")
}, 193863, (e, t, r) => {
    e.e, t.exports = function(e, t) {
        if (void 0 == t && (t = {
                fuzzy: !0
            }), /youtu\.?be/.test(e)) {
            var r, n = [/youtu\.be\/([^#\&\?]{11})/, /\?v=([^#\&\?]{11})/, /\&v=([^#\&\?]{11})/, /embed\/([^#\&\?]{11})/, /\/v\/([^#\&\?]{11})/];
            for (r = 0; r < n.length; ++r)
                if (n[r].test(e)) return n[r].exec(e)[1];
            if (t.fuzzy) {
                var l = e.split(/[\/\&\?=#\.\s]/g);
                for (r = 0; r < l.length; ++r)
                    if (/^[^#\&\?]{11}$/.test(l[r])) return l[r]
            }
        }
        return null
    }
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
}, 831123, e => {
    "use strict";
    var t = e.i(145158),
        r = function() {
            return (r = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var l in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
                return e
            }).apply(this, arguments)
        },
        n = t.forwardRef(function(e, n) {
            var l = t.useState(!1),
                a = l[0],
                s = l[1],
                i = t.useState(!1),
                o = i[0],
                c = i[1],
                u = encodeURIComponent(e.id),
                d = "string" == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
                p = e.title,
                f = e.poster || "hqdefault",
                m = "&".concat(e.params) || "",
                g = e.muted ? "&mute=1" : "",
                h = e.announce || "Watch",
                x = e.webp ? "webp" : "jpg",
                b = e.webp ? "vi_webp" : "vi",
                y = e.thumbnail || (e.playlist ? "https://i.ytimg.com/".concat(b, "/").concat(d, "/").concat(f, ".").concat(x) : "https://i.ytimg.com/".concat(b, "/").concat(u, "/").concat(f, ".").concat(x)),
                v = e.noCookie ? "https://www.youtube-nocookie.com" : "https://www.youtube.com";
            v = e.cookie ? "https://www.youtube.com" : "https://www.youtube-nocookie.com";
            var k = e.playlist ? "".concat(v, "/embed/videoseries?autoplay=1").concat(g, "&list=").concat(u).concat(m) : "".concat(v, "/embed/").concat(u, "?autoplay=1&state=1").concat(g).concat(m),
                w = e.activatedClass || "lyt-activated",
                j = e.adNetwork || !1,
                C = e.aspectHeight || 9,
                N = e.aspectWidth || 16,
                O = e.iframeClass || "",
                S = e.playerClass || "lty-playbtn",
                E = e.wrapperClass || "yt-lite",
                T = e.onIframeAdded || function() {},
                P = e.rel ? "prefetch" : "preload",
                I = e.containerElement || "article";
            return t.useEffect(function() {
                o && T()
            }, [o]), t.createElement(t.Fragment, null, t.createElement("link", {
                rel: P,
                href: y,
                as: "image"
            }), t.createElement(t.Fragment, null, a && t.createElement(t.Fragment, null, t.createElement("link", {
                rel: "preconnect",
                href: v
            }), t.createElement("link", {
                rel: "preconnect",
                href: "https://www.google.com"
            }), j && t.createElement(t.Fragment, null, t.createElement("link", {
                rel: "preconnect",
                href: "https://static.doubleclick.net"
            }), t.createElement("link", {
                rel: "preconnect",
                href: "https://googleads.g.doubleclick.net"
            })))), t.createElement(I, {
                onPointerOver: function() {
                    a || s(!0)
                },
                onClick: function() {
                    o || c(!0)
                },
                className: "".concat(E, " ").concat(o ? w : ""),
                "data-title": p,
                style: r({
                    backgroundImage: "url(".concat(y, ")")
                }, {
                    "--aspect-ratio": "".concat(C / N * 100, "%")
                })
            }, t.createElement("button", {
                type: "button",
                className: S,
                "aria-label": "".concat(h, " ").concat(p)
            }), o && t.createElement("iframe", {
                ref: n,
                className: O,
                title: p,
                width: "560",
                height: "315",
                frameBorder: "0",
                allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: !0,
                src: k
            })))
        });
    e.s(["default", () => n])
}, 195051, e => {
    "use strict";
    var t = e.i(615167),
        r = e.i(78389),
        n = e.i(749583),
        l = e.i(239273),
        a = e.i(954936);
    e.s(["default", 0, ({
        blockedMessage: e,
        consentButtonLabel: s
    }) => {
        let i = "C0004";
        return (0, t.jsx)(t.Fragment, {
            children: !(() => {
                let [e] = (0, l.default)("OptanonConsent") || "", t = {};
                return e && e.split("groups=")[1].split("&")[0].split("%2C").forEach(e => {
                    let [r, n] = e.split("%3A");
                    t[r] = parseInt(n)
                }), t[i]
            })() && (0, t.jsxs)("div", {
                className: "consent absolute top-0 right-0 bottom-0 left-0 z-10 flex flex-col items-center overflow-auto rounded-2xl bg-black p-3 leading-5 text-white opacity-90 sm:justify-center sm:p-5",
                children: [(0, t.jsx)(a.default, {
                    className: "mx-auto text-center sm:w-4/5 sm:text-base",
                    children: (0, t.jsx)(r.PortableText, {
                        value: e
                    })
                }), (0, t.jsx)("div", {
                    className: "mt-5",
                    children: (0, t.jsx)(n.default, {
                        rounded: !0,
                        target: "_self",
                        variant: "primary",
                        onPress: () => {
                            let e = document.getElementById("ot-sdk-btn"),
                                t = document.getElementById(`ot-header-id-${i}`),
                                r = window;
                            r && r.OneTrust ? r.OneTrust.ToggleInfoDisplay() : e.click(), t.click()
                        },
                        children: s
                    })
                })]
            })
        })
    }])
}, 224601, 934172, e => {
    "use strict";
    var t = e.i(615167),
        r = e.i(145158),
        n = e.i(675078),
        l = e.i(193863),
        a = e.i(831123),
        s = e.i(363737),
        i = e.i(749583),
        o = e.i(644995),
        c = e.i(195051),
        u = e.i(107224),
        d = e.i(387660);
    let p = (e, t = !0) => {
        let [n, l] = (0, r.useState)(null);
        return (0, r.useEffect)(() => {
            let r;
            return t && e.current && (r = setInterval(() => {
                let t = window.YT;
                t && e.current && (l(new t.Player(e.current)), clearInterval(r))
            }, 500)), () => {
                l(null), clearInterval(r)
            }
        }, [t, e]), {
            player: n
        }
    };
    e.s(["useYoutubeAPI", 0, p], 934172), e.s(["default", 0, ({
        title: e,
        url: f,
        container: m = !1,
        blockedMessage: g,
        consentButtonLabel: h
    }) => {
        let x = (0, l.default)(f),
            [b, y] = (0, r.useState)(!1),
            v = (0, r.useRef)(null),
            k = (0, r.useRef)(null),
            {
                player: w
            } = p(v, b),
            j = () => {
                y(!0)
            };
        return (0, r.useEffect)(() => {
            w && (k.current = w.addEventListener("onStateChange", e => {
                if ([1, 2].includes(e.data)) {
                    let t = "function" == typeof w.getDuration && w.getDuration() || 0,
                        r = Number((("function" == typeof w.getCurrentTime && w.getCurrentTime() || 0) / t * 100).toFixed(2)),
                        n = 1 === e.data ? "video_play" : "video_pause";
                    (0, d.pushVideoEvent)({
                        name: n,
                        videoDuration: t,
                        videoProgress: (Number.isNaN(r), r)
                    })
                }
            }))
        }, [w]), (0, r.useEffect)(() => {
            if (!b && w?.playerInfo?.playerState === 1) {
                let e = "function" == typeof w.getDuration && w.getDuration() || 0,
                    t = Number((("function" == typeof w.getCurrentTime && w.getCurrentTime() || 0) / e * 100).toFixed(2));
                (0, d.pushVideoEvent)({
                    name: "video_pause",
                    videoDuration: e,
                    videoProgress: (Number.isNaN(t), t)
                })
            }
        }, [b, w]), (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(u.default, {
                src: "https://www.youtube.com/iframe_api"
            }), (0, t.jsxs)("div", {
                className: "relative h-full w-full self-center p-4 lg:p-0",
                children: [f && x && (0, t.jsxs)("div", {
                    className: "yt-lite z-10 h-full overflow-auto",
                    ...{
                        tabIndex: 0,
                        role: "button",
                        onClick: j,
                        onKeyDown: e => {
                            ("Enter" === e.key || "Space" === e.key) && j()
                        }
                    },
                    children: [(0, t.jsx)("div", {
                        className: "lty-playbtn"
                    }), (0, t.jsx)(n.default, {
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
                }), (0, t.jsx)(s.default, {
                    isOpen: b,
                    onOpenChange: y,
                    showTriggerButton: !1,
                    children: (0, t.jsxs)("div", {
                        className: "z-50 mt-20 flex w-10/12 flex-col rounded-3xl bg-black p-4 lg:w-8/12",
                        tabIndex: -1,
                        children: [(0, t.jsx)(i.default, {
                            onPress: () => {
                                y(!1)
                            },
                            variant: "secondary",
                            className: "self-end overflow-hidden",
                            children: (0, t.jsx)(o.default, {
                                className: "z-[60] h-5 w-5 text-white"
                            })
                        }), (0, t.jsx)(a.default, {
                            id: x,
                            title: e,
                            iframeClass: "yt-iframe",
                            poster: "hqdefault",
                            ref: v,
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
}, 369710, e => {
    "use strict";

    function t(e, t, r) {
        if (e instanceof EventTarget) return [e];
        if ("string" == typeof e) {
            let n = document;
            t && (n = t.current);
            let l = r?.[e] ?? n.querySelectorAll(e);
            return l ? Array.from(l) : []
        }
        return Array.from(e)
    }
    e.s(["resolveElements", () => t])
}, 822736, 997681, e => {
    "use strict";
    var t = e.i(145158),
        r = e.i(369710);
    let n = {
        some: 0,
        all: 1
    };

    function l(e, t, {
        root: a,
        margin: s,
        amount: i = "some"
    } = {}) {
        let o = (0, r.resolveElements)(e),
            c = new WeakMap,
            u = new IntersectionObserver(e => {
                e.forEach(e => {
                    let r = c.get(e.target);
                    if (!!r !== e.isIntersecting)
                        if (e.isIntersecting) {
                            let r = t(e.target, e);
                            "function" == typeof r ? c.set(e.target, r) : u.unobserve(e.target)
                        } else "function" == typeof r && (r(e), c.delete(e.target))
                })
            }, {
                root: a,
                rootMargin: s,
                threshold: "number" == typeof i ? i : n[i]
            });
        return o.forEach(e => u.observe(e)), () => u.disconnect()
    }

    function a(e, {
        root: r,
        margin: n,
        amount: s,
        once: i = !1,
        initial: o = !1
    } = {}) {
        let [c, u] = (0, t.useState)(o);
        return (0, t.useEffect)(() => {
            if (!e.current || i && c) return;
            let t = {
                root: r && r.current || void 0,
                margin: n,
                amount: s
            };
            return l(e.current, () => (u(!0), i ? void 0 : () => u(!1)), t)
        }, [r, e, n, i, s]), c
    }
    e.s(["inView", () => l], 997681), e.s(["useInView", () => a], 822736)
}, 692558, (e, t, r) => {
    var n = e.r(416907),
        l = e.r(394022);
    t.exports = function(e) {
        return "symbol" == typeof e || l(e) && "[object Symbol]" == n(e)
    }
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
    var t = e.i(615167);
    e.s(["default", 0, ({
        className: e,
        width: r = 18,
        height: n = 18
    }) => (0, t.jsx)("svg", {
        className: e,
        width: r,
        height: n,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, t.jsx)("path", {
            d: "M13.8001 10.7556L8.33444 1.26375C8.19785 1.0312 8.00287 0.838382 7.76881 0.704408C7.53476 0.570434 7.26975 0.499954 7.00006 0.499954C6.73037 0.499954 6.46536 0.570434 6.23131 0.704408C5.99725 0.838382 5.80227 1.0312 5.66569 1.26375L0.20006 10.7556C0.0686451 10.9805 -0.000610352 11.2364 -0.000610352 11.4969C-0.000610352 11.7574 0.0686451 12.0132 0.20006 12.2381C0.334892 12.4721 0.529541 12.6659 0.764036 12.7998C0.99853 12.9337 1.26442 13.0028 1.53444 13H12.4657C12.7355 13.0026 13.0011 12.9334 13.2354 12.7995C13.4696 12.6656 13.6641 12.4719 13.7988 12.2381C13.9304 12.0133 13.9999 11.7575 14.0001 11.497C14.0003 11.2365 13.9313 10.9807 13.8001 10.7556ZM6.50006 5.5C6.50006 5.36739 6.55274 5.24021 6.64651 5.14644C6.74027 5.05267 6.86745 5 7.00006 5C7.13267 5 7.25985 5.05267 7.35361 5.14644C7.44738 5.24021 7.50006 5.36739 7.50006 5.5V8C7.50006 8.1326 7.44738 8.25978 7.35361 8.35355C7.25985 8.44732 7.13267 8.5 7.00006 8.5C6.86745 8.5 6.74027 8.44732 6.64651 8.35355C6.55274 8.25978 6.50006 8.1326 6.50006 8V5.5ZM7.00006 11C6.85172 11 6.70672 10.956 6.58338 10.8736C6.46005 10.7912 6.36392 10.6741 6.30715 10.537C6.25038 10.4 6.23553 10.2492 6.26447 10.1037C6.29341 9.95819 6.36484 9.82455 6.46973 9.71967C6.57462 9.61478 6.70826 9.54335 6.85374 9.51441C6.99923 9.48547 7.15003 9.50032 7.28707 9.55709C7.42412 9.61385 7.54125 9.70998 7.62366 9.83332C7.70607 9.95665 7.75006 10.1017 7.75006 10.25C7.75006 10.4489 7.67104 10.6397 7.53039 10.7803C7.38974 10.921 7.19897 11 7.00006 11Z",
            fill: "currentColor"
        })
    })])
}, 148102, 284159, e => {
    "use strict";
    var t = e.i(145158),
        r = e.i(892164),
        n = e.i(710186),
        l = e.i(847902),
        a = e.i(793750);
    e.i(757249);
    var s = e.i(919892),
        i = e.i(172682),
        o = e.i(489620);

    function c(e, c, u) {
        let d = (0, n.useFormValidationState)({
                ...e,
                value: c.isSelected
            }),
            {
                isInvalid: p,
                validationErrors: f,
                validationDetails: m
            } = d.displayValidation,
            {
                labelProps: g,
                inputProps: h,
                isSelected: x,
                isPressed: b,
                isDisabled: y,
                isReadOnly: v
            } = function(e, t, n) {
                let {
                    isDisabled: l = !1,
                    isReadOnly: c = !1,
                    value: u,
                    name: d,
                    children: p,
                    "aria-label": f,
                    "aria-labelledby": m,
                    validationState: g = "valid",
                    isInvalid: h
                } = e, {
                    pressProps: x,
                    isPressed: b
                } = (0, a.usePress)({
                    isDisabled: l
                }), {
                    pressProps: y,
                    isPressed: v
                } = (0, a.usePress)({
                    onPress() {
                        var e;
                        t.toggle(), null == (e = n.current) || e.focus()
                    },
                    isDisabled: l || c
                }), {
                    focusableProps: k
                } = (0, o.useFocusable)(e, n), w = (0, r.mergeProps)(x, k), j = (0, s.filterDOMProps)(e, {
                    labelable: !0
                });
                return (0, i.useFormReset)(n, t.isSelected, t.setSelected), {
                    labelProps: (0, r.mergeProps)(y, {
                        onClick: e => e.preventDefault()
                    }),
                    inputProps: (0, r.mergeProps)(j, {
                        "aria-invalid": h || "invalid" === g || void 0,
                        "aria-errormessage": e["aria-errormessage"],
                        "aria-controls": e["aria-controls"],
                        "aria-readonly": c || void 0,
                        onChange: e => {
                            e.stopPropagation(), t.setSelected(e.target.checked)
                        },
                        disabled: l,
                        ...null == u ? {} : {
                            value: u
                        },
                        name: d,
                        type: "checkbox",
                        ...w
                    }),
                    isSelected: t.isSelected,
                    isPressed: b || v,
                    isDisabled: l,
                    isReadOnly: c,
                    isInvalid: h || "invalid" === g
                }
            }({
                ...e,
                isInvalid: p
            }, c, u);
        (0, l.useFormValidation)(e, d, u);
        let {
            isIndeterminate: k,
            isRequired: w,
            validationBehavior: j = "aria"
        } = e;
        (0, t.useEffect)(() => {
            u.current && (u.current.indeterminate = !!k)
        });
        let {
            pressProps: C
        } = (0, a.usePress)({
            isDisabled: y || v,
            onPress() {
                let {
                    [n.privateValidationStateProp]: t
                } = e, {
                    commitValidation: r
                } = t || d;
                r()
            }
        });
        return {
            labelProps: (0, r.mergeProps)(g, C),
            inputProps: {
                ...h,
                checked: x,
                "aria-required": w && "aria" === j || void 0,
                required: w && "native" === j
            },
            isSelected: x,
            isPressed: b,
            isDisabled: y,
            isReadOnly: v,
            isInvalid: p,
            validationErrors: f,
            validationDetails: m
        }
    }
    e.s(["useCheckbox", () => c], 148102);
    var u = e.i(338842);

    function d(e = {}) {
        var r;
        let {
            isReadOnly: n
        } = e, [l, a] = (0, u.useControlledState)(e.isSelected, e.defaultSelected || !1, e.onChange), [s] = (0, t.useState)(l);
        return {
            isSelected: l,
            defaultSelected: null != (r = e.defaultSelected) ? r : s,
            setSelected: function(e) {
                n || a(e)
            },
            toggle: function() {
                n || a(!l)
            }
        }
    }
    e.s(["useToggleState", () => d], 284159)
}, 505918, (e, t, r) => {
    t.exports = e.g && e.g.Object === Object && e.g
}, 78974, (e, t, r) => {
    var n = e.r(505918),
        l = "object" == typeof self && self && self.Object === Object && self;
    t.exports = n || l || Function("return this")()
}, 328042, (e, t, r) => {
    t.exports = e.r(78974).Symbol
}, 684435, (e, t, r) => {
    var n = e.r(328042),
        l = Object.prototype,
        a = l.hasOwnProperty,
        s = l.toString,
        i = n ? n.toStringTag : void 0;
    t.exports = function(e) {
        var t = a.call(e, i),
            r = e[i];
        try {
            e[i] = void 0;
            var n = !0
        } catch (e) {}
        var l = s.call(e);
        return n && (t ? e[i] = r : delete e[i]), l
    }
}, 933680, (e, t, r) => {
    var n = Object.prototype.toString;
    t.exports = function(e) {
        return n.call(e)
    }
}, 416907, (e, t, r) => {
    var n = e.r(328042),
        l = e.r(684435),
        a = e.r(933680),
        s = n ? n.toStringTag : void 0;
    t.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : s && s in Object(e) ? l(e) : a(e)
    }
}, 394022, (e, t, r) => {
    t.exports = function(e) {
        return null != e && "object" == typeof e
    }
}, 778116, (e, t, r) => {
    t.exports = Array.isArray
}, 878524, (e, t, r) => {
    t.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
}, 462931, (e, t, r) => {
    var n = e.r(416907),
        l = e.r(878524);
    t.exports = function(e) {
        if (!l(e)) return !1;
        var t = n(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
    }
}, 118309, (e, t, r) => {
    t.exports = e.r(78974)["__core-js_shared__"]
}, 799822, (e, t, r) => {
    var n, l = e.r(118309),
        a = (n = /[^.]+$/.exec(l && l.keys && l.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
    t.exports = function(e) {
        return !!a && a in e
    }
}, 908829, (e, t, r) => {
    var n = Function.prototype.toString;
    t.exports = function(e) {
        if (null != e) {
            try {
                return n.call(e)
            } catch (e) {}
            try {
                return e + ""
            } catch (e) {}
        }
        return ""
    }
}, 143245, (e, t, r) => {
    var n = e.r(462931),
        l = e.r(799822),
        a = e.r(878524),
        s = e.r(908829),
        i = /^\[object .+?Constructor\]$/,
        o = Object.prototype,
        c = Function.prototype.toString,
        u = o.hasOwnProperty,
        d = RegExp("^" + c.call(u).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function(e) {
        return !(!a(e) || l(e)) && (n(e) ? d : i).test(s(e))
    }
}, 92117, (e, t, r) => {
    t.exports = function(e, t) {
        return null == e ? void 0 : e[t]
    }
}, 581511, (e, t, r) => {
    var n = e.r(143245),
        l = e.r(92117);
    t.exports = function(e, t) {
        var r = l(e, t);
        return n(r) ? r : void 0
    }
}, 475200, e => {
    "use strict";
    var t = e.i(145158);
    e.s(["default", 0, (e = 768) => {
        let [r, n] = (0, t.useState)(window.innerWidth <= e);
        return (0, t.useEffect)(() => {
            let t = () => {
                n(window.innerWidth <= e)
            };
            return window.addEventListener("resize", t), () => window.removeEventListener("resize", t)
        }, []), r
    }])
}, 239273, e => {
    "use strict";
    var t = e.i(145158);
    e.s(["default", 0, e => {
        let [r, n] = (0, t.useState)("");
        return (0, t.useEffect)(() => {
            n(document.cookie)
        }, []), [(0, t.useMemo)(() => r?.split("; ")?.find(t => t.includes(e)), [r, e])]
    }])
}, 785131, e => {
    "use strict";
    var t = e.i(110950),
        r = e.i(962924),
        n = e.i(456762),
        l = e.i(120264),
        a = e.i(892164),
        s = e.i(145158);

    function i(e, i, o) {
        let {
            overlayProps: c,
            underlayProps: u
        } = (0, r.useOverlay)({
            ...e,
            isOpen: i.isOpen,
            onClose: i.close
        }, o);
        return (0, l.usePreventScroll)({
            isDisabled: !i.isOpen
        }), (0, n.useOverlayFocusContain)(), (0, s.useEffect)(() => {
            if (i.isOpen && o.current) return (0, t.ariaHideOutside)([o.current])
        }, [i.isOpen, o]), {
            modalProps: (0, a.mergeProps)(c),
            underlayProps: u
        }
    }
    e.s(["useModalOverlay", () => i])
}, 363737, e => {
    "use strict";
    var t = e.i(615167),
        r = e.i(145158),
        n = e.i(456762),
        l = e.i(785131),
        a = e.i(716469),
        s = e.i(381225),
        i = e.i(749583);
    let o = ({
            state: e,
            children: a,
            ...s
        }) => {
            let i = (0, r.useRef)(null),
                {
                    modalProps: o,
                    underlayProps: c
                } = (0, l.useModalOverlay)({
                    ...s
                }, e, i);
            return (0, r.useEffect)(() => {
                let t = i.current?.querySelector("div"),
                    r = e => {
                        let r = e.relatedTarget;
                        t && !t.contains(r) && t.focus()
                    };
                return e.isOpen && t && (t.focus(), t.addEventListener("focusout", r)), () => {
                    t && t.removeEventListener("focusout", r)
                }
            }, [e.isOpen]), (0, t.jsx)(n.Overlay, {
                children: (0, t.jsx)("div", {
                    className: "fixed top-0 right-0 bottom-0 left-0 z-[60] flex items-start justify-center overflow-hidden bg-gray-500/50",
                    ...c,
                    children: (0, t.jsx)("div", {
                        ref: i,
                        ...o,
                        className: "contents",
                        children: a
                    })
                })
            })
        },
        c = ({
            actionLabel: e,
            children: n,
            showTriggerButton: l = !0,
            ...c
        }) => {
            let u = (0, s.useOverlayTriggerState)({
                    ...c
                }),
                {
                    triggerProps: d,
                    overlayProps: p
                } = (0, a.useOverlayTrigger)({
                    type: "dialog"
                }, u);
            return (0, t.jsxs)(t.Fragment, {
                children: [l && (0, t.jsx)(i.default, {
                    rounded: !0,
                    hasArrow: !0,
                    ...d,
                    children: e
                }), u.isOpen && (0, t.jsx)(o, {
                    state: u,
                    ...c,
                    isDismissable: !0,
                    children: "function" == typeof n ? (0, r.cloneElement)(n(u.close), p) : (0, r.cloneElement)(n, p)
                })]
            })
        };
    c.Layout = ({
        children: e,
        modal: r
    }) => (0, t.jsxs)("div", {
        className: "flex h-screen max-w-[600px] flex-col overflow-scroll rounded-xl bg-white p-10 sm:min-w-[600px] md:my-20 md:h-3/4 [&>*]:text-black",
        tabIndex: -1,
        children: [(0, t.jsx)("h4", {
            className: "mb-4 text-2xl leading-8 font-medium",
            children: r.title
        }), (0, t.jsx)("p", {
            className: "mb-8 text-base leading-5 font-medium",
            children: r.description
        }), e]
    }), e.s(["default", 0, c], 363737)
}, 206775, e => {
    "use strict";
    var t = e.i(615167),
        r = e.i(722978);
    e.s(["default", 0, ({
        className: e,
        children: n,
        size: l = "medium",
        ...a
    }) => {
        let s = (0, r.default)("bg-gray-100 text-gray-600 text-tiny-bold dark:bg-gray-900 dark:text-gray-200 rounded-md", {
            small: "px-2 py-1",
            medium: "p-2"
        } [l], e);
        return (0, t.jsx)("span", {
            className: s,
            ...a,
            children: n
        })
    }], 206775)
}, 339680, e => {
    "use strict";
    var t, r, n = e.i(145158);

    function l() {
        return (l = Object.assign.bind()).apply(this, arguments)
    }
    let a = ["children", "options"],
        s = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e, t) => (e[t.toLowerCase()] = t, e), {
            for: "htmlFor"
        }),
        i = {
            amp: "&",
            apos: "'",
            gt: ">",
            lt: "<",
            nbsp: " ",
            quot: "“"
        },
        o = ["style", "script"],
        c = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
        u = /mailto:/i,
        d = /\n{2,}$/,
        p = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
        f = /^ *> ?/gm,
        m = /^ {2,}\n/,
        g = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
        h = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
        x = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
        b = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
        y = /^(?:\n *)*\n/,
        v = /\r\n?/g,
        k = /^\[\^([^\]]+)](:.*)\n/,
        w = /^\[\^([^\]]+)]/,
        j = /\f/g,
        C = /^\s*?\[(x|\s)\]/,
        N = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        O = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        S = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
        E = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
        T = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
        P = /^<!--[\s\S]*?(?:-->)/,
        I = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
        M = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
        L = /^\{.*\}$/,
        $ = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
        _ = /^<([^ >]+@[^ >]+)>/,
        D = /^<([^ >]+:\/[^ >]+)>/,
        H = /-([a-z])?/gi,
        A = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
        F = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
        B = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
        R = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
        z = /(\[|\])/g,
        G = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
        V = /\t/g,
        W = /^ *\| */,
        U = /(^ *\||\| *$)/g,
        X = / *$/,
        q = /^ *:-+: *$/,
        Z = /^ *:-+ *$/,
        K = /^ *-+: *$/,
        Q = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
        Y = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
        J = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
        ee = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
        et = /^\\([^0-9A-Za-z\s])/,
        er = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
        en = /^\n+/,
        el = /^([ \t]*)/,
        ea = /\\([^\\])/g,
        es = / *\n+$/,
        ei = /(?:^|\n)( *)$/,
        eo = "(?:\\d+\\.)",
        ec = "(?:[*+-])";

    function eu(e) {
        return "( *)(" + (1 === e ? eo : ec) + ") +"
    }
    let ed = eu(1),
        ep = eu(2);

    function ef(e) {
        return RegExp("^" + (1 === e ? ed : ep))
    }
    let em = ef(1),
        eg = ef(2);

    function eh(e) {
        return RegExp("^" + (1 === e ? ed : ep) + "[^\\n]*(?:\\n(?!\\1" + (1 === e ? eo : ec) + " )[^\\n]*)*(\\n|$)", "gm")
    }
    let ex = eh(1),
        eb = eh(2);

    function ey(e) {
        let t = 1 === e ? eo : ec;
        return RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)")
    }
    let ev = ey(1),
        ek = ey(2);

    function ew(e, t) {
        let n = 1 === t,
            l = n ? ev : ek,
            a = n ? ex : eb,
            s = n ? em : eg;
        return {
            t(e, t, r) {
                let n = ei.exec(r);
                return n && (t.o || !t._ && !t.u) ? l.exec(e = n[1] + e) : null
            },
            i: r.HIGH,
            l(e, t, r) {
                let l = n ? +e[2] : void 0,
                    i = e[0].replace(d, "\n").match(a),
                    o = !1;
                return {
                    p: i.map(function(e, n) {
                        let l, a = RegExp("^ {1," + s.exec(e)[0].length + "}", "gm"),
                            c = e.replace(a, "").replace(s, ""),
                            u = n === i.length - 1,
                            d = -1 !== c.indexOf("\n\n") || u && o;
                        o = d;
                        let p = r._,
                            f = r.o;
                        r.o = !0, d ? (r._ = !1, l = c.replace(es, "\n\n")) : (r._ = !0, l = c.replace(es, ""));
                        let m = t(l, r);
                        return r._ = p, r.o = f, m
                    }),
                    m: n,
                    g: l
                }
            },
            h: (t, r, n) => e(t.m ? "ol" : "ul", {
                key: n.k,
                start: t.g
            }, t.p.map(function(t, l) {
                return e("li", {
                    key: l
                }, r(t, n))
            }))
        }
    }
    let ej = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
        eC = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
        eN = [p, h, x, N, S, O, P, A, ex, ev, eb, ek],
        eO = [...eN, /^[^\n]+(?:  \n|\n{2,})/, E, M];

    function eS(e) {
        return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase()
    }

    function eE(e) {
        return K.test(e) ? "right" : q.test(e) ? "center" : Z.test(e) ? "left" : null
    }

    function eT(e, t, r) {
        let n = r.$;
        r.$ = !0;
        let l = t(e.trim(), r);
        r.$ = n;
        let a = [
            []
        ];
        return l.forEach(function(e, t) {
            "tableSeparator" === e.type ? 0 !== t && t !== l.length - 1 && a.push([]) : ("text" !== e.type || null != l[t + 1] && "tableSeparator" !== l[t + 1].type || (e.v = e.v.replace(X, "")), a[a.length - 1].push(e))
        }), a
    }

    function eP(e, t, r) {
        var n;
        r._ = !0;
        let l = eT(e[1], t, r),
            a = e[2].replace(U, "").split("|").map(eE),
            s = (n = e[3], n.trim().split("\n").map(function(e) {
                return eT(e, t, r)
            }));
        return r._ = !1, {
            S: a,
            A: s,
            L: l,
            type: "table"
        }
    }

    function eI(e, t) {
        return null == e.S[t] ? {} : {
            textAlign: e.S[t]
        }
    }

    function eM(e) {
        return function(t, r) {
            return r._ ? e.exec(t) : null
        }
    }

    function eL(e) {
        return function(t, r) {
            return r._ || r.u ? e.exec(t) : null
        }
    }

    function e$(e) {
        return function(t, r) {
            return r._ || r.u ? null : e.exec(t)
        }
    }

    function e_(e) {
        return function(t) {
            return e.exec(t)
        }
    }

    function eD(e, t, r) {
        if (t._ || t.u || r && !r.endsWith("\n")) return null;
        let n = "";
        e.split("\n").every(e => !eN.some(t => t.test(e)) && (n += e + "\n", e.trim()));
        let l = n.trimEnd();
        return "" == l ? null : [n, l]
    }

    function eH(e) {
        try {
            if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i)) return
        } catch (e) {
            return null
        }
        return e
    }

    function eA(e) {
        return e.replace(ea, "$1")
    }

    function eF(e, t, r) {
        let n = r._ || !1,
            l = r.u || !1;
        r._ = !0, r.u = !0;
        let a = e(t, r);
        return r._ = n, r.u = l, a
    }

    function eB(e, t, r) {
        return r._ = !1, e(t, r)
    }
    let eR = (e, t, r) => ({
        v: eF(t, e[1], r)
    });

    function ez() {
        return {}
    }

    function eG() {
        return null
    }

    function eV(e, t, r) {
        let n = e,
            l = t.split(".");
        for (; l.length && void 0 !== (n = n[l[0]]);) l.shift();
        return n || r
    }(t = r || (r = {}))[t.MAX = 0] = "MAX", t[t.HIGH = 1] = "HIGH", t[t.MED = 2] = "MED", t[t.LOW = 3] = "LOW", t[t.MIN = 4] = "MIN", e.s(["default", 0, e => {
        let {
            children: t,
            options: d
        } = e, U = function(e, t) {
            if (null == e) return {};
            var r, n, l = {},
                a = Object.keys(e);
            for (n = 0; n < a.length; n++) t.indexOf(r = a[n]) >= 0 || (l[r] = e[r]);
            return l
        }(e, a);
        return n.cloneElement(function(e, t = {}) {
            var a;
            let d;
            t.overrides = t.overrides || {}, t.slugify = t.slugify || eS, t.namedCodesToUnicode = t.namedCodesToUnicode ? l({}, i, t.namedCodesToUnicode) : i;
            let U = t.createElement || n.createElement;

            function X(e, r, ...n) {
                var a;
                let s, i = eV(t.overrides, `${e}.props`, {});
                return U((s = eV(a = t.overrides, e)) ? "function" == typeof s || "object" == typeof s && "render" in s ? s : eV(a, `${e}.component`, e) : e, l({}, r, i, {
                    className: function(...e) {
                        return e.filter(Boolean).join(" ")
                    }(null == r ? void 0 : r.className, i.className) || void 0
                }), ...n)
            }

            function q(e) {
                let r, l = !1;
                t.forceInline ? l = !0 : t.forceBlock || (l = !1 === G.test(e));
                let a = eo(ei(l ? e : `${e.trimEnd().replace(en,"")}

`, {
                    _: l
                }));
                for (;
                    "string" == typeof a[a.length - 1] && !a[a.length - 1].trim();) a.pop();
                if (null === t.wrapper) return a;
                let s = t.wrapper || (l ? "span" : "div");
                if (a.length > 1 || t.forceWrapper) r = a;
                else {
                    if (1 === a.length) return "string" == typeof(r = a[0]) ? X("span", {
                        key: "outer"
                    }, r) : r;
                    r = null
                }
                return n.createElement(s, {
                    key: "outer"
                }, r)
            }

            function Z(e) {
                let t = e.match(c);
                return t ? t.reduce(function(e, t, r) {
                    let l = t.indexOf("=");
                    if (-1 !== l) {
                        var a, i, o;
                        let c, u = (-1 !== (a = t.slice(0, l)).indexOf("-") && null === a.match(I) && (a = a.replace(H, function(e, t) {
                                return t.toUpperCase()
                            })), a).trim(),
                            d = ('"' === (c = (i = t.slice(l + 1).trim())[0]) || "'" === c) && i.length >= 2 && i[i.length - 1] === c ? i.slice(1, -1) : i,
                            p = s[u] || u,
                            f = e[p] = (o = d, "style" === u ? o.split(/;\s?/).reduce(function(e, t) {
                                let r = t.slice(0, t.indexOf(":"));
                                return e[r.replace(/(-[a-z])/g, e => e[1].toUpperCase())] = t.slice(r.length + 1).trim(), e
                            }, {}) : "href" === u ? eH(o) : (o.match(L) && (o = o.slice(1, o.length - 1)), "true" === o || "false" !== o && o));
                        "string" == typeof f && (E.test(f) || M.test(f)) && (e[p] = n.cloneElement(q(f.trim()), {
                            key: r
                        }))
                    } else "style" !== t && (e[s[t] || t] = !0);
                    return e
                }, {}) : null
            }
            let K = [],
                ea = {},
                es = {
                    blockQuote: {
                        t: e$(p),
                        i: r.HIGH,
                        l: (e, t, r) => ({
                            v: t(e[0].replace(f, ""), r)
                        }),
                        h: (e, t, r) => X("blockquote", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    breakLine: {
                        t: e_(m),
                        i: r.HIGH,
                        l: ez,
                        h: (e, t, r) => X("br", {
                            key: r.k
                        })
                    },
                    breakThematic: {
                        t: e$(g),
                        i: r.HIGH,
                        l: ez,
                        h: (e, t, r) => X("hr", {
                            key: r.k
                        })
                    },
                    codeBlock: {
                        t: e$(x),
                        i: r.MAX,
                        l: e => ({
                            v: e[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""),
                            M: void 0
                        }),
                        h: (e, t, r) => X("pre", {
                            key: r.k
                        }, X("code", l({}, e.O, {
                            className: e.M ? `lang-${e.M}` : ""
                        }), e.v))
                    },
                    codeFenced: {
                        t: e$(h),
                        i: r.MAX,
                        l: e => ({
                            O: Z(e[3] || ""),
                            v: e[4],
                            M: e[2] || void 0,
                            type: "codeBlock"
                        })
                    },
                    codeInline: {
                        t: eL(b),
                        i: r.LOW,
                        l: e => ({
                            v: e[2]
                        }),
                        h: (e, t, r) => X("code", {
                            key: r.k
                        }, e.v)
                    },
                    footnote: {
                        t: e$(k),
                        i: r.MAX,
                        l: e => (K.push({
                            I: e[2],
                            j: e[1]
                        }), {}),
                        h: eG
                    },
                    footnoteReference: {
                        t: eM(w),
                        i: r.HIGH,
                        l: e => ({
                            v: e[1],
                            B: `#${t.slugify(e[1])}`
                        }),
                        h: (e, t, r) => X("a", {
                            key: r.k,
                            href: eH(e.B)
                        }, X("sup", {
                            key: r.k
                        }, e.v))
                    },
                    gfmTask: {
                        t: eM(C),
                        i: r.HIGH,
                        l: e => ({
                            R: "x" === e[1].toLowerCase()
                        }),
                        h: (e, t, r) => X("input", {
                            checked: e.R,
                            key: r.k,
                            readOnly: !0,
                            type: "checkbox"
                        })
                    },
                    heading: {
                        t: e$(t.enforceAtxHeadings ? O : N),
                        i: r.HIGH,
                        l: (e, r, n) => ({
                            v: eF(r, e[2], n),
                            T: t.slugify(e[2]),
                            C: e[1].length
                        }),
                        h: (e, t, r) => X(`h${e.C}`, {
                            id: e.T,
                            key: r.k
                        }, t(e.v, r))
                    },
                    headingSetext: {
                        t: e$(S),
                        i: r.MAX,
                        l: (e, t, r) => ({
                            v: eF(t, e[1], r),
                            C: "=" === e[2] ? 1 : 2,
                            type: "heading"
                        })
                    },
                    htmlComment: {
                        t: e_(P),
                        i: r.HIGH,
                        l: () => ({}),
                        h: eG
                    },
                    image: {
                        t: eL(eC),
                        i: r.HIGH,
                        l: e => ({
                            D: e[1],
                            B: eA(e[2]),
                            F: e[3]
                        }),
                        h: (e, t, r) => X("img", {
                            key: r.k,
                            alt: e.D || void 0,
                            title: e.F || void 0,
                            src: eH(e.B)
                        })
                    },
                    link: {
                        t: eM(ej),
                        i: r.LOW,
                        l: (e, t, r) => {
                            var n;
                            let l, a, s;
                            return {
                                v: (n = e[1], l = r._ || !1, a = r.u || !1, r._ = !1, r.u = !0, s = t(n, r), r._ = l, r.u = a, s),
                                B: eA(e[2]),
                                F: e[3]
                            }
                        },
                        h: (e, t, r) => X("a", {
                            key: r.k,
                            href: eH(e.B),
                            title: e.F
                        }, t(e.v, r))
                    },
                    linkAngleBraceStyleDetector: {
                        t: eM(D),
                        i: r.MAX,
                        l: e => ({
                            v: [{
                                v: e[1],
                                type: "text"
                            }],
                            B: e[1],
                            type: "link"
                        })
                    },
                    linkBareUrlDetector: {
                        t: (e, t) => t.N ? null : eM($)(e, t),
                        i: r.MAX,
                        l: e => ({
                            v: [{
                                v: e[1],
                                type: "text"
                            }],
                            B: e[1],
                            F: void 0,
                            type: "link"
                        })
                    },
                    linkMailtoDetector: {
                        t: eM(_),
                        i: r.MAX,
                        l(e) {
                            let t = e[1],
                                r = e[1];
                            return u.test(r) || (r = "mailto:" + r), {
                                v: [{
                                    v: t.replace("mailto:", ""),
                                    type: "text"
                                }],
                                B: r,
                                type: "link"
                            }
                        }
                    },
                    orderedList: ew(X, 1),
                    unorderedList: ew(X, 2),
                    newlineCoalescer: {
                        t: e$(y),
                        i: r.LOW,
                        l: ez,
                        h: () => "\n"
                    },
                    paragraph: {
                        t: eD,
                        i: r.LOW,
                        l: eR,
                        h: (e, t, r) => X("p", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    ref: {
                        t: eM(F),
                        i: r.MAX,
                        l: e => (ea[e[1]] = {
                            B: e[2],
                            F: e[4]
                        }, {}),
                        h: eG
                    },
                    refImage: {
                        t: eL(B),
                        i: r.MAX,
                        l: e => ({
                            D: e[1] || void 0,
                            P: e[2]
                        }),
                        h: (e, t, r) => X("img", {
                            key: r.k,
                            alt: e.D,
                            src: eH(ea[e.P].B),
                            title: ea[e.P].F
                        })
                    },
                    refLink: {
                        t: eM(R),
                        i: r.MAX,
                        l: (e, t, r) => ({
                            v: t(e[1], r),
                            Z: t(e[0].replace(z, "\\$1"), r),
                            P: e[2]
                        }),
                        h: (e, t, r) => ea[e.P] ? X("a", {
                            key: r.k,
                            href: eH(ea[e.P].B),
                            title: ea[e.P].F
                        }, t(e.v, r)) : X("span", {
                            key: r.k
                        }, t(e.Z, r))
                    },
                    table: {
                        t: e$(A),
                        i: r.HIGH,
                        l: eP,
                        h: (e, t, r) => X("table", {
                            key: r.k
                        }, X("thead", null, X("tr", null, e.L.map(function(n, l) {
                            return X("th", {
                                key: l,
                                style: eI(e, l)
                            }, t(n, r))
                        }))), X("tbody", null, e.A.map(function(n, l) {
                            return X("tr", {
                                key: l
                            }, n.map(function(n, l) {
                                return X("td", {
                                    key: l,
                                    style: eI(e, l)
                                }, t(n, r))
                            }))
                        })))
                    },
                    tableSeparator: {
                        t: function(e, t) {
                            return t.$ ? (t._ = !0, W.exec(e)) : null
                        },
                        i: r.HIGH,
                        l: function() {
                            return {
                                type: "tableSeparator"
                            }
                        },
                        h: () => " | "
                    },
                    text: {
                        t: e_(er),
                        i: r.MIN,
                        l: e => ({
                            v: e[0].replace(T, (e, r) => t.namedCodesToUnicode[r] ? t.namedCodesToUnicode[r] : e)
                        }),
                        h: e => e.v
                    },
                    textBolded: {
                        t: eL(Q),
                        i: r.MED,
                        l: (e, t, r) => ({
                            v: t(e[2], r)
                        }),
                        h: (e, t, r) => X("strong", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    textEmphasized: {
                        t: eL(Y),
                        i: r.LOW,
                        l: (e, t, r) => ({
                            v: t(e[2], r)
                        }),
                        h: (e, t, r) => X("em", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    textEscaped: {
                        t: eL(et),
                        i: r.HIGH,
                        l: e => ({
                            v: e[1],
                            type: "text"
                        })
                    },
                    textMarked: {
                        t: eL(J),
                        i: r.LOW,
                        l: eR,
                        h: (e, t, r) => X("mark", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    textStrikethroughed: {
                        t: eL(ee),
                        i: r.LOW,
                        l: eR,
                        h: (e, t, r) => X("del", {
                            key: r.k
                        }, t(e.v, r))
                    }
                };
            !0 !== t.disableParsingRawHTML && (es.htmlBlock = {
                t: e_(E),
                i: r.HIGH,
                l(e, t, r) {
                    let [, n] = e[3].match(el), l = RegExp(`^${n}`, "gm"), a = e[3].replace(l, ""), s = eO.some(e => e.test(a)) ? eB : eF, i = e[1].toLowerCase(), c = -1 !== o.indexOf(i);
                    r.N = r.N || "a" === i;
                    let u = c ? e[3] : s(t, a, r);
                    return r.N = !1, {
                        O: Z(e[2]),
                        v: u,
                        G: c,
                        H: c ? i : e[1]
                    }
                },
                h: (e, t, r) => X(e.H, l({
                    key: r.k
                }, e.O), e.G ? e.v : t(e.v, r))
            }, es.htmlSelfClosing = {
                t: e_(M),
                i: r.HIGH,
                l: e => ({
                    O: Z(e[2] || ""),
                    H: e[1]
                }),
                h: (e, t, r) => X(e.H, l({}, e.O, {
                    key: r.k
                }))
            });
            let ei = ((d = Object.keys(es)).sort(function(e, t) {
                    let r = es[e].i,
                        n = es[t].i;
                    return r !== n ? r - n : e < t ? -1 : 1
                }), function(e, t) {
                    return function e(t, r) {
                        let n = [],
                            l = "";
                        for (; t;) {
                            let a = 0;
                            for (; a < d.length;) {
                                let s = d[a],
                                    i = es[s],
                                    o = i.t(t, r, l);
                                if (o) {
                                    let a = o[0];
                                    t = t.substring(a.length);
                                    let c = i.l(o, e, r);
                                    null == c.type && (c.type = s), n.push(c), l = a;
                                    break
                                }
                                a++
                            }
                        }
                        return n
                    }(e.replace(v, "\n").replace(j, "").replace(V, "    "), t)
                }),
                eo = (a = function(e, t, r) {
                    return es[e.type].h(e, t, r)
                }, function e(t, r = {}) {
                    if (Array.isArray(t)) {
                        let n = r.k,
                            l = [],
                            a = !1;
                        for (let n = 0; n < t.length; n++) {
                            r.k = n;
                            let s = e(t[n], r),
                                i = "string" == typeof s;
                            i && a ? l[l.length - 1] += s : null !== s && l.push(s), a = i
                        }
                        return r.k = n, l
                    }
                    return a(t, e, r)
                }),
                ec = q(e);
            return K.length ? X("div", null, ec, X("footer", {
                key: "footer"
            }, K.map(function(e) {
                return X("div", {
                    id: t.slugify(e.j),
                    key: e.j
                }, e.j, eo(ei(e.I, {
                    _: !0
                })))
            }))) : ec
        }(t, d), U)
    }])
}, 795965, e => {
    "use strict";
    var t = e.i(145158),
        r = e.i(381225);
    let n = {},
        l = 0,
        a = !1,
        s = null,
        i = null;

    function o(e = {}) {
        let {
            delay: c = 1500,
            closeDelay: u = 500
        } = e, {
            isOpen: d,
            open: p,
            close: f
        } = (0, r.useOverlayTriggerState)(e), m = (0, t.useMemo)(() => `${++l}`, []), g = (0, t.useRef)(null), h = (0, t.useRef)(f), x = () => {
            n[m] = v
        }, b = () => {
            for (let e in n) e !== m && (n[e](!0), delete n[e])
        }, y = () => {
            g.current && clearTimeout(g.current), g.current = null, b(), x(), a = !0, p(), s && (clearTimeout(s), s = null), i && (clearTimeout(i), i = null)
        }, v = e => {
            e || u <= 0 ? (g.current && clearTimeout(g.current), g.current = null, h.current()) : g.current || (g.current = setTimeout(() => {
                g.current = null, h.current()
            }, u)), s && (clearTimeout(s), s = null), a && (i && clearTimeout(i), i = setTimeout(() => {
                delete n[m], i = null, a = !1
            }, Math.max(500, u)))
        };
        return (0, t.useEffect)(() => {
            h.current = f
        }, [f]), (0, t.useEffect)(() => () => {
            g.current && clearTimeout(g.current), n[m] && delete n[m]
        }, [m]), {
            isOpen: d,
            open: e => {
                e || !(c > 0) || g.current ? y() : (b(), x(), d || s || a ? d || y() : s = setTimeout(() => {
                    s = null, a = !0, y()
                }, c))
            },
            close: v
        }
    }
    e.s(["useTooltipTriggerState", () => o])
}, 939741, e => {
    "use strict";
    var t = e.i(919892),
        r = e.i(892164),
        n = e.i(294845);

    function l(e, l) {
        let a = (0, t.filterDOMProps)(e, {
                labelable: !0
            }),
            {
                hoverProps: s
            } = (0, n.useHover)({
                onHoverStart: () => null == l ? void 0 : l.open(!0),
                onHoverEnd: () => null == l ? void 0 : l.close()
            });
        return {
            tooltipProps: (0, r.mergeProps)(a, s, {
                role: "tooltip"
            })
        }
    }
    e.s(["useTooltip", () => l])
}, 146004, e => {
    "use strict";
    var t = e.i(115565),
        r = e.i(294845),
        n = e.i(489620),
        l = e.i(195912),
        a = e.i(892164),
        s = e.i(145158);

    function i(e, i, o) {
        let {
            isDisabled: c,
            trigger: u
        } = e, d = (0, l.useId)(), p = (0, s.useRef)(!1), f = (0, s.useRef)(!1), m = () => {
            (p.current || f.current) && i.open(f.current)
        }, g = e => {
            p.current || f.current || i.close(e)
        };
        (0, s.useEffect)(() => {
            let e = e => {
                o && o.current && "Escape" === e.key && (e.stopPropagation(), i.close(!0))
            };
            if (i.isOpen) return document.addEventListener("keydown", e, !0), () => {
                document.removeEventListener("keydown", e, !0)
            }
        }, [o, i]);
        let h = () => {
                f.current = !1, p.current = !1, g(!0)
            },
            {
                hoverProps: x
            } = (0, r.useHover)({
                isDisabled: c,
                onHoverStart: () => {
                    "focus" !== u && ("pointer" === (0, t.getInteractionModality)() ? p.current = !0 : p.current = !1, m())
                },
                onHoverEnd: () => {
                    "focus" !== u && (f.current = !1, p.current = !1, g())
                }
            }),
            {
                focusableProps: b
            } = (0, n.useFocusable)({
                isDisabled: c,
                onFocus: () => {
                    (0, t.isFocusVisible)() && (f.current = !0, m())
                },
                onBlur: () => {
                    f.current = !1, p.current = !1, g(!0)
                }
            }, o);
        return {
            triggerProps: {
                "aria-describedby": i.isOpen ? d : void 0,
                ...(0, a.mergeProps)(b, x, {
                    onPointerDown: h,
                    onKeyDown: h,
                    tabIndex: void 0
                })
            },
            tooltipProps: {
                id: d
            }
        }
    }
    e.s(["useTooltipTrigger", () => i])
}, 652955, e => {
    "use strict";
    var t = e.i(615167),
        r = e.i(145158),
        n = e.i(795965),
        l = e.i(939741),
        a = e.i(146004),
        s = e.i(892164),
        i = e.i(722978);
    let o = ({
        state: e,
        content: r,
        hasArrow: n,
        placement: a,
        ...o
    }) => {
        let {
            tooltipProps: c
        } = (0, l.useTooltip)(o, e);
        return (0, t.jsx)("span", {
            className: (0, i.default)("text-tiny absolute z-10 w-max max-w-[180px] rounded-lg bg-white p-4 text-left text-gray-900 drop-shadow-lg dark:bg-gray-800 dark:text-gray-100", (e => {
                switch (e) {
                    case "top":
                        return "left-1/2 translate-x-[-50%] -top-1/2 translate-y-[-105%]";
                    case "left":
                        return "left-0 translate-x-[-105%] top-1/2 translate-y-[-50%]";
                    case "right":
                        return "left-[100%] top-1/2 translate-y-[-50%] ml-3.5";
                    default:
                        return "left-1/2 translate-x-[-50%] top-[100%] mt-3.5"
                }
            })(a), n && (e => {
                switch (e) {
                    case "top":
                        return "after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:content-[''] after:absolute after:border-[6px] after:border-x-transparent after:border-b-transparent after:border-t-white dark:after:border-t-gray-800";
                    case "left":
                        return "after:content-[''] after:absolute after:top-1/2 after:right-0 after:translate-x-[12px] after:-translate-y-1/2 after:border-[6px] after:border-y-transparent after:border-r-transparent after:border-l-white dark:after:border-l-gray-800";
                    case "right":
                        return "before:content-[''] before:absolute before:top-1/2 before:right-[100%] before:-translate-y-1/2 before:border-[6px] before:border-y-transparent before:border-l-transparent before:border-r-white dark:before:border-r-gray-800";
                    default:
                        return "before:left-1/2 before:top-0 before:-translate-y-[12px]  before:-translate-x-1/2 before:content-[''] before:absolute before:border-[6px] before:border-x-transparent before:border-t-transparent before:border-b-white dark:before:border-b-gray-800"
                }
            })(a)),
            style: {
                wordBreak: "break-word",
                overflowWrap: "break-word"
            },
            ...(0, s.mergeProps)(o, c),
            children: r
        })
    };
    e.s(["default", 0, ({
        content: e,
        placement: l = "bottom",
        hasArrow: s = !0,
        tooltipOptions: i = {
            delay: 300,
            closeDelay: 0,
            isDisabled: !1
        },
        children: c
    }) => {
        let u = (0, n.useTooltipTriggerState)(i),
            d = (0, r.useRef)(null),
            {
                triggerProps: p,
                tooltipProps: f
            } = (0, a.useTooltipTrigger)(i, u, d);
        return (0, t.jsxs)("span", {
            className: "relative",
            children: [(0, t.jsx)("span", {
                ref: d,
                ...p,
                children: c
            }), u.isOpen && (0, t.jsx)(o, {
                state: u,
                content: e,
                placement: l,
                hasArrow: s,
                ...f
            })]
        })
    }], 652955)
}, 210310, e => {
    "use strict";
    var t = e.i(615167),
        r = e.i(145158),
        n = e.i(749583),
        l = e.i(206775),
        a = e.i(652955),
        s = e.i(339680),
        i = e.i(722978),
        o = e.i(954936),
        c = e.i(363737);
    let u = ({
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
        d = ({
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
        p = ({
            children: e,
            colTitle: l,
            truncationEnabled: a,
            rowTitle: s,
            className: p = "",
            isTableCell: f
        }) => {
            let [m, g] = (0, r.useState)(!1), [h, x] = (0, r.useState)(!1), b = (0, r.useRef)(null), y = (0, i.default)({
                "cursor-pointer relative": m
            }, p), v = (0, i.default)({
                "line-clamp-3": a
            });
            (0, r.useEffect)(() => {
                let e = b.current;
                e && (e.scrollHeight > e.clientHeight ? g(!0) : g(!1))
            }, [b]);
            let k = () => {
                    x(!0)
                },
                w = a && m ? {
                    tabIndex: 0,
                    role: "button",
                    onClick: k,
                    onKeyDown: e => {
                        ("Enter" === e.key || "Space" === e.key) && k()
                    }
                } : {};
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsxs)("td", {
                    className: (0, i.default)(y, {
                        "bg-gray-50 p-3 dark:bg-gray-900": !f,
                        "h-full !p-0": f
                    }),
                    ...w,
                    children: [f ? e : (0, t.jsx)(o.default, {
                        className: v,
                        ref: b,
                        children: e
                    }), a && m && (0, t.jsx)(u, {
                        className: "absolute top-1.5 right-1.5"
                    })]
                }), (0, t.jsx)(c.default, {
                    isOpen: h,
                    onOpenChange: x,
                    showTriggerButton: !1,
                    children: (0, t.jsxs)("div", {
                        className: "mt-20 flex w-6/12 flex-col rounded-3xl bg-white p-8 dark:bg-gray-800",
                        tabIndex: -1,
                        children: [(0, t.jsx)(n.default, {
                            onPress: () => {
                                x(!1)
                            },
                            variant: "secondary",
                            className: "self-end",
                            children: (0, t.jsx)(d, {})
                        }), (0, t.jsx)(o.default, {
                            className: "caption-sm mb-2.5 text-black dark:text-white",
                            children: s
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
        className: c = "",
        verticalHeadingClass: u = "",
        hideTitle: d = !1
    }) => {
        let [f, ...m] = e.rows, g = `align-top text-heading-sm md:text-small-bold rounded-md bg-gray-100 text-gray-800 bg-gray-100 dark:bg-gray-700 md:dark:bg-gray-800 dark:text-gray-200 border-none ${u}`, h = "align-top rounded-md text-sm text-gray-800 dark:text-gray-200 border-none", x = (0, i.default)("w-full table-fixed border-separate border-spacing-2 break-words", c), b = (0, i.default)("h-full table-fixed border-separate border-spacing-1 break-words", c), y = (0, r.useCallback)(e => {
            let [r, ...n] = e.split("\n"), l = n.splice(1).map((e, r) => {
                let n = e.split("|").filter(e => e).map(e => e.trim());
                return (0, t.jsx)("div", {
                    className: "flex grow",
                    children: n.map((e, n) => (0, t.jsx)(s.default, {
                        className: "flex grow basis-0 items-center justify-center rounded-md bg-gray-50 px-6 py-4 text-center dark:bg-gray-900",
                        children: e
                    }, `cell-${r}-${n}-${e}`))
                }, `row-${r}`)
            });
            return (0, t.jsxs)("div", {
                className: "flex h-full flex-col",
                children: [(0, t.jsx)("div", {
                    className: "-ml-1 flex grow",
                    children: r.split("|").filter(e => e).map((e, r) => (0, t.jsx)(s.default, {
                        className: "ml-1 flex grow basis-0 items-center justify-center rounded-md bg-gray-50 px-6 py-4 text-center dark:bg-gray-900",
                        children: e.trim()
                    }, `header-cell-${r}-${e}`))
                }), l]
            })
        }, []), v = (0, r.useMemo)(() => m.map(e => e.cells.reduce((e, r, i) => ({
            ...e,
            [`col${i+1}`]: {
                component: r.startsWith("|") ? y(r) : (0, t.jsx)(s.default, {
                    options: {
                        overrides: {
                            Button: {
                                component: n.default
                            },
                            Label: {
                                component: l.default
                            },
                            Tooltip: {
                                component: a.default
                            }
                        }
                    },
                    children: r
                }),
                isTableCell: r.startsWith("|"),
                cellContent: r
            }
        }), {})), [m, y]), k = (0, r.useMemo)(() => f.cells.map((e, r) => (0, t.jsx)("th", {
            scope: "col",
            className: "min-w-[10rem] rounded-md border-none bg-gray-100 py-3.5 pr-4 pl-4 text-left align-top text-gray-800 dark:bg-gray-800 dark:text-gray-400",
            children: (0, t.jsx)(s.default, {
                options: {
                    overrides: {
                        Button: {
                            component: n.default
                        },
                        Label: {
                            component: l.default
                        },
                        Tooltip: {
                            component: a.default
                        }
                    }
                },
                children: e
            })
        }, `${r}-${e}`)), [f.cells]), w = (0, r.useMemo)(() => v.map((r, n) => {
            let l = Object.values(r),
                a = l[0];
            return (0, t.jsx)("tr", {
                className: "border-separate border-spacing-1",
                children: l.map((r, l) => (0, t.jsx)(p, {
                    isTableCell: r.isTableCell,
                    className: 0 === l ? g : h,
                    rowTitle: a.component,
                    colTitle: 0 !== l && k && k[l] ? k[l] : "",
                    truncationEnabled: e.tableTruncation,
                    children: r.component
                }, `${n}-${l}-${r.cellContent}`))
            }, n)
        }), [k, v, g, e.tableTruncation]), j = (0, r.useMemo)(() => f.cells.map((e, r) => (0, t.jsx)("th", {
            scope: "col",
            className: "text-tiny-bold rounded-md bg-gray-100 py-3.5 pr-4 pl-4 text-left align-top text-gray-800 dark:bg-gray-900 dark:text-gray-400",
            children: (0, t.jsx)(s.default, {
                options: {
                    overrides: {
                        Button: {
                            component: n.default
                        },
                        Label: {
                            component: l.default
                        },
                        Tooltip: {
                            component: a.default
                        }
                    }
                },
                children: e
            })
        }, `${r}-${e}`)), [f]), C = (0, r.useMemo)(() => v.map((e, r) => (0, t.jsx)("div", {
            className: "mb-4 min-w-full rounded-md bg-gray-100 align-middle dark:bg-gray-700",
            children: (0, t.jsxs)("table", {
                className: x,
                children: [f && f.cells.length > 0 && (0, t.jsx)("thead", {
                    className: "hidden",
                    children: (0, t.jsx)("tr", {
                        className: "border-separate border-spacing-1",
                        children: j
                    })
                }), (0, t.jsx)("tbody", {
                    className: "table-row-group bg-gray-50 dark:bg-gray-900",
                    children: Object.values(e).map((e, i) => e ? (0, t.jsx)("tr", {
                        className: "rounded-md",
                        children: (0, t.jsxs)("td", {
                            className: 0 === i ? g : h,
                            children: [0 !== i && f && f.cells[i] && (0, t.jsx)(s.default, {
                                options: {
                                    overrides: {
                                        Button: {
                                            component: n.default
                                        },
                                        Label: {
                                            component: l.default
                                        },
                                        Tooltip: {
                                            component: a.default
                                        }
                                    }
                                },
                                children: f.cells[i]
                            }), (0, t.jsx)(o.default, {
                                children: e.component
                            })]
                        })
                    }, `${r}-${i}-${f.cells[i]}`) : null)
                })]
            })
        }, `row-${r}`)), [v, f, x, g, j]);
        return (0, t.jsxs)("div", {
            children: [(0, t.jsx)("div", {
                className: "sm:flex sm:items-center",
                children: (0, t.jsxs)("div", {
                    className: "sm:flex-auto",
                    children: [!d && e.tableTitle && (0, t.jsx)("div", {
                        className: "text-heading-sm",
                        children: e.tableTitle
                    }), !d && e.tableDescription && (0, t.jsx)("p", {
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
                            className: b,
                            children: [k && (0, t.jsx)("thead", {
                                className: "table-header-group",
                                children: (0, t.jsx)("tr", {
                                    className: "border-separate border-spacing-1",
                                    children: k
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
                            children: (0, t.jsx)(s.default, {
                                options: {
                                    overrides: {
                                        Button: {
                                            component: n.default
                                        },
                                        Label: {
                                            component: l.default
                                        },
                                        Tooltip: {
                                            component: a.default
                                        }
                                    }
                                },
                                children: f && f.cells && f.cells[0] ? f.cells[0] : ""
                            })
                        }), C]
                    })]
                })
            })]
        })
    }], 210310)
}, 883027, e => {
    "use strict";
    var t = e.i(615167),
        r = e.i(722978),
        n = e.i(749583),
        l = e.i(475200);
    e.s(["default", 0, ({
        pdf: e,
        hidePdfToolbar: a,
        url: s,
        mobilePdfButtonText: i,
        title: o,
        visualOptions: c,
        theme: u,
        isHidden: d
    }) => {
        let p = (0, l.default)(),
            f = e ? e.cdnURL : s,
            m = (0, r.default)("mb-8 md:mb-12", {
                "bg-black py-16": c?.container && "dark" === u,
                "bg-white py-16": c?.container && "light" === u
            }),
            g = (0, r.default)({
                container: c?.container
            }),
            h = e && p;
        return (0, t.jsx)(t.Fragment, {
            children: !d && (0, t.jsx)("div", {
                className: m,
                children: (0, t.jsx)("div", {
                    className: g,
                    children: (0, t.jsxs)("div", {
                        className: "relative",
                        children: [(0, t.jsx)("iframe", {
                            className: "aspect-[4/3] w-full rounded-xl",
                            src: `${f}?#view=fit&navpanes=0${a?"&toolbar=0":""}`,
                            title: o ?? ""
                        }), h && (0, t.jsx)("div", {
                            className: "absolute inset-0 flex items-center justify-center rounded-xl bg-black/80",
                            children: (0, t.jsx)(n.default, {
                                href: f,
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
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2f44484d-0aaf-530a-91b7-27b9e88eaabb")
    } catch (e) {}
}();
//# debugId=2f44484d-0aaf-530a-91b7-27b9e88eaabb