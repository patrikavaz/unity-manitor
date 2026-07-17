(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 529363, 989873, e => {
    "use strict";
    var t = e.i(175602);
    let l = (e, t, l) => (((1 - 3 * l + 3 * t) * e + (3 * l - 6 * t)) * e + 3 * t) * e;

    function a(e, a, r, s) {
        return e === a && r === s ? t.noop : t => 0 === t || 1 === t ? t : l(function(e, t, a, r, s) {
            let i, n, o = 0;
            do(i = l(n = t + (a - t) / 2, r, s) - e) > 0 ? a = n : t = n; while (Math.abs(i) > 1e-7 && ++o < 12) return n
        }(t, 0, 1, e, r), a, s)
    }
    e.s(["cubicBezier", 0, a], 989873);
    let r = a(.42, 0, 1, 1),
        s = a(0, 0, .58, 1),
        i = a(.42, 0, .58, 1);
    e.s(["easeIn", 0, r, "easeInOut", 0, i, "easeOut", 0, s], 529363)
}, 154038, e => {
    e.q("/_next/static/media/unity-fallback-1.05foy1lz0fhig.jpg")
}, 594333, e => {
    e.q("/_next/static/media/unity-fallback-2.0od666pl17uax.jpg")
}, 522500, e => {
    e.q("/_next/static/media/unity-fallback-3.01ai2jdgw500k.jpg")
}, 567134, 186114, e => {
    "use strict";
    var t = e.i(210139),
        l = e.i(999721),
        a = e.i(722978),
        r = e.i(153348),
        s = e.i(955429),
        i = e.i(166511),
        n = e.i(71871),
        o = e.i(825610),
        d = e.i(783078),
        c = e.i(749583);
    let u = ({
        className: e,
        handleIsPlaying: l,
        label: a,
        ...r
    }) => (0, t.jsx)("div", {
        className: e,
        children: (0, t.jsx)("button", {
            className: "transition-bg bg-blue hover:bg-blue-dark flex h-20 w-20 transform items-center justify-center rounded-full duration-300",
            onClick: l,
            type: "button",
            "aria-label": a,
            ...r,
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
    });
    e.s(["default", 0, u], 186114);
    var m = e.i(595388);
    let f = (0, n.default)(() => e.A(410979), {
        loadableGenerated: {
            modules: [942019]
        },
        ssr: !1
    });
    e.s(["default", 0, ({
        title: e,
        description: n,
        image: h,
        video: p,
        action: x,
        variant: g = "column",
        videoInline: b = !0,
        buttonLabel: j = "Play video",
        blockKey: v,
        titleTag: y = "h3",
        locale: w,
        index: C
    }) => {
        let k = v || o.trackingLocation.uniteCard,
            N = void 0 !== C ? `${k}-${C}` : k,
            L = (0, l.useRef)(null),
            [M, _] = (0, l.useState)(!1),
            T = (0, r.useInView)(L),
            A = (0, s.useReducedMotion)(),
            S = () => {
                _(!0)
            };
        (0, l.useEffect)(() => {
            b ? _(T) : T || _(!1)
        }, [T, b]);
        let E = (0, a.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": M && !A && T && p?.src
            }),
            F = "horizontal" === g && x,
            O = (0, a.default)("flex flex-col", {
                "min-h-[14rem]": "stacked" === g || "column" === g,
                grow: "column" !== g && "horizontal" !== g,
                "min-h-[14rem] xl:min-h-[18rem] xl:flex-row xl:gap-4": "column" === g
            }),
            R = (0, a.default)("rounded-lg bg-gray-100 p-4 dark:bg-gray-900", {
                "h-full": "horizontal" !== g,
                "group h-full relative p-[1px] xl:flex-row xl:gap-6 cursor-pointer": "horizontal" === g && F,
                "h-full relative p-[1px] xl:flex-row xl:gap-6 cursor-auto": "horizontal" === g && !F
            }),
            $ = (0, a.default)("relative overflow-hidden rounded-lg", {
                "aspect-video w-full": "horizontal" !== g,
                "aspect-video w-full xl:flex-shrink-0 xl:self-start xl:max-w-1/2": "horizontal" === g
            }),
            I = (0, a.default)("cover absolute object-cover", {
                "transition-transform duration-400 group-hover:scale-110": "horizontal" === g && F
            }),
            P = (0, t.jsxs)("div", {
                ref: L,
                className: R,
                children: ["horizontal" === g && F && (0, t.jsx)("div", {
                    className: "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-400 [background:linear-gradient(to_top,#000_0%,#666_60%,#666_100%)] group-hover:opacity-100"
                }), (0, t.jsxs)("div", {
                    className: (0, a.default)({
                        "relative z-10 flex h-full flex-col gap-6 rounded-lg bg-gray-100 p-3 xl:w-full xl:flex-row dark:bg-gray-900": "horizontal" === g,
                        "flex h-full flex-col justify-between gap-4": "horizontal" !== g
                    }),
                    children: [(h?.src || p?.src) && (0, t.jsxs)("div", {
                        className: $,
                        children: [p?.src && (0, t.jsx)(f, {
                            url: p.src,
                            playing: M && T && !A,
                            loop: !!b,
                            muted: b,
                            playsinline: b && !A,
                            width: "100%",
                            height: "100%",
                            className: "absolute top-0 left-0 [&>video]:object-cover",
                            onReady: () => {
                                b && _(!0)
                            },
                            controls: !b,
                            config: {
                                hlsOptions: {
                                    maxMaxBufferLength: 1,
                                    startLevel: 1
                                }
                            }
                        }), h && (0, t.jsxs)("div", {
                            className: E,
                            onClick: S,
                            children: [!b && (0, t.jsx)(u, {
                                handleIsPlaying: S,
                                className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                label: j,
                                "data-link-location": N,
                                "data-link-id": `${N}-video-play`
                            }), (0, t.jsx)(i.default, {
                                src: h.src,
                                placeholder: h.placeholder ? "blur" : "empty",
                                blurDataURL: h.placeholder,
                                fill: !0,
                                alt: h.alt ?? "",
                                className: I,
                                sizes: `(min-width: ${d.default.Large}px) 33vw, (min-width: ${d.default.Medium}px) 50vw, 100vw`
                            })]
                        })]
                    }), (0, t.jsx)("div", {
                        className: (0, a.default)(O),
                        children: "column" !== g && "horizontal" !== g ? (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(y, {
                                className: "loco-text-body-lg-medium -mt-2",
                                children: e
                            }), (0, t.jsxs)("div", {
                                className: "flex shrink-0 grow flex-col justify-between",
                                children: [(0, t.jsx)("div", {
                                    className: "loco-text-body mt-2 whitespace-pre-line text-gray-700 dark:text-gray-400",
                                    children: n
                                }), (x?.href && x?.label || x?.renderModal) && (0, t.jsx)("div", {
                                    className: "mt-8",
                                    children: x?.renderModal ? x.renderModal() : (0, t.jsx)(c.default, {
                                        locale: w,
                                        href: F ? void 0 : x.href,
                                        target: x.target,
                                        outlined: !0,
                                        rounded: !0,
                                        hasArrow: !0,
                                        tag: F ? "span" : "button",
                                        "data-link-location": N,
                                        "data-link-id": `${N}-cta`,
                                        children: x.label
                                    })
                                })]
                            })]
                        }) : "horizontal" === g ? (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(y, {
                                className: "loco-text-body-lg-medium -mt-2 lg:mt-0",
                                children: e
                            }), (0, t.jsxs)("div", {
                                className: "flex shrink-0 grow flex-col justify-between lg:flex-1",
                                children: [(0, t.jsx)("div", {
                                    className: "loco-text-body mt-2 line-clamp-5 whitespace-pre-line text-gray-700 lg:line-clamp-3 lg:text-gray-900 dark:text-gray-400 lg:dark:text-white",
                                    children: n
                                }), (x?.href && x?.label || x?.renderModal) && (0, t.jsx)("div", {
                                    className: "mt-8 lg:mt-6",
                                    children: x?.renderModal ? x.renderModal() : (0, t.jsx)(c.default, {
                                        locale: w,
                                        href: F ? void 0 : x.href,
                                        target: x.target,
                                        outlined: !0,
                                        rounded: !0,
                                        hasArrow: !0,
                                        tag: F ? "span" : "button",
                                        "data-link-location": N,
                                        "data-link-id": `${N}-cta`,
                                        children: x.label
                                    })
                                })]
                            })]
                        }) : (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(y, {
                                className: "loco-text-body-lg-medium -mt-2 xl:w-2/5",
                                children: e
                            }), (0, t.jsxs)("div", {
                                className: "flex shrink-0 grow flex-col justify-between xl:-mt-1 xl:w-3/5",
                                children: [(0, t.jsx)("div", {
                                    className: "loco-text-body mt-1 whitespace-pre-line xl:mt-0",
                                    children: n
                                }), (x?.href && x?.label || x?.renderModal) && (0, t.jsx)("div", {
                                    children: x?.renderModal ? x.renderModal() : (0, t.jsx)(c.default, {
                                        locale: w,
                                        href: F ? void 0 : x.href,
                                        target: x.target,
                                        outlined: !0,
                                        rounded: !0,
                                        hasArrow: !0,
                                        tag: F ? "span" : "button",
                                        "data-link-location": N,
                                        "data-link-id": `${N}-cta`,
                                        children: x.label
                                    })
                                })]
                            })]
                        })
                    })]
                })]
            });
        return F ? (0, t.jsx)(m.Link, {
            href: x.href,
            target: x.target,
            className: "cursor-pointer",
            "data-link-location": N,
            "data-link-id": `${N}-link-wrapper`,
            children: P
        }) : P
    }], 567134)
}, 551779, e => {
    "use strict";
    var t, l, a = ((t = {}).en = "en", t.de = "de_de", t.ja = "ja_jp", t.fr = "fr_fr", t.pt = "pt_br", t.cn = "zh_cn", t.es = "es_es", t.ru = "ru_ru", t.kr = "ko_kr", t),
        r = ((l = {}).en = "en-US", l.de = "de-DE", l.ja = "ja-JP", l.fr = "fr-FR", l.pt = "pt-BR", l.cn = "zh-CN", l.es = "es-ES", l.ru = "ru-RU", l.kr = "ko-KR", l);
    e.s(["LanguageMap", () => a, "LanguageMapIETFLanguageTag", () => r])
}, 22766, (e, t, l) => {
    t.exports = e.r(581511)(e.r(78974), "DataView")
}, 13715, (e, t, l) => {
    t.exports = e.r(581511)(e.r(78974), "Promise")
}, 292408, (e, t, l) => {
    t.exports = e.r(581511)(e.r(78974), "Set")
}, 843031, (e, t, l) => {
    t.exports = e.r(581511)(e.r(78974), "WeakMap")
}, 354700, (e, t, l) => {
    var a = e.r(22766),
        r = e.r(764138),
        s = e.r(13715),
        i = e.r(292408),
        n = e.r(843031),
        o = e.r(416907),
        d = e.r(908829),
        c = "[object Map]",
        u = "[object Promise]",
        m = "[object Set]",
        f = "[object WeakMap]",
        h = "[object DataView]",
        p = d(a),
        x = d(r),
        g = d(s),
        b = d(i),
        j = d(n),
        v = o;
    (a && v(new a(new ArrayBuffer(1))) != h || r && v(new r) != c || s && v(s.resolve()) != u || i && v(new i) != m || n && v(new n) != f) && (v = function(e) {
        var t = o(e),
            l = "[object Object]" == t ? e.constructor : void 0,
            a = l ? d(l) : "";
        if (a) switch (a) {
            case p:
                return h;
            case x:
                return c;
            case g:
                return u;
            case b:
                return m;
            case j:
                return f
        }
        return t
    }), t.exports = v
}, 87522, (e, t, l) => {
    var a = e.r(668488),
        r = e.r(354700),
        s = e.r(410090),
        i = e.r(778116),
        n = e.r(622914),
        o = e.r(432816),
        d = e.r(820092),
        c = e.r(905330),
        u = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        if (null == e) return !0;
        if (n(e) && (i(e) || "string" == typeof e || "function" == typeof e.splice || o(e) || c(e) || s(e))) return !e.length;
        var t = r(e);
        if ("[object Map]" == t || "[object Set]" == t) return !e.size;
        if (d(e)) return !a(e).length;
        for (var l in e)
            if (u.call(e, l)) return !1;
        return !0
    }
}, 180793, (e, t, l) => {
    t.exports = function(e) {
        return null == e
    }
}, 829150, 434438, e => {
    "use strict";
    var t = e.i(551779);
    let l = t.LanguageMapIETFLanguageTag[t.LanguageMap.en],
        a = e => Object.keys(t.LanguageMapIETFLanguageTag).find(l => t.LanguageMapIETFLanguageTag[l] === e),
        r = (e = t.LanguageMap.en) => t.LanguageMapIETFLanguageTag[e] || l;
    e.s(["FALLBACK_LANGUAGE", 0, l, "default", 0, r, "getLanguageKey", 0, a], 434438);
    var s = e.i(87522),
        i = e.i(180793);
    e.s(["default", 0, (e, n, o) => {
        let {
            locale: d,
            ...c
        } = n, u = e;
        return o && u ? ((e => {
            let l;
            try {
                l = new URL(e)
            } catch (e) {
                return !1
            }
            return r(l.pathname.split("/")[1]) !== t.LanguageMapIETFLanguageTag.en
        })(u) || d === l || (u = ((e, t) => {
            let l;
            if (!t) return e;
            try {
                l = new URL(e)
            } catch (t) {
                return e
            }
            let a = l.pathname.split("/");
            return a.splice(1, 0, t), l.pathname = a.join("/"), l.toString()
        })(u, a(d))), ((e, t) => {
            let l;
            if ((0, s.default)(t)) return e;
            let a = -1 === (l = e.indexOf("?")) ? {} : e.slice(l + 1).split("&").reduce((e, t) => {
                    let [l, a] = t.split("=");
                    return l && (e[decodeURIComponent(l)] = decodeURIComponent(a || "")), e
                }, {}),
                r = {};
            Object.entries(t).forEach(([e, t]) => {
                Object.prototype.hasOwnProperty.call(a, e) || (0, i.default)(t) || (r[e] = t)
            });
            let n = new URLSearchParams(r).toString();
            return e.includes("?") ? `${e}&${n}` : `${e}?${n}`
        })(u, c)) : u
    }], 829150)
}, 436324, 531469, e => {
    "use strict";
    var t = e.i(210139),
        l = e.i(999721),
        a = e.i(749583),
        r = e.i(222061),
        s = e.i(829483),
        i = e.i(662380),
        n = e.i(179695),
        o = e.i(394261),
        d = e.i(474029),
        c = e.i(396241);
    e.i(621757);
    var u = e.i(677278),
        m = e.i(545487),
        f = e.i(239273),
        h = e.i(869324),
        p = e.i(497492);
    let x = ({
        form: e,
        isGrowForm: t,
        onSuccess: l,
        close: a,
        onShowSuccessMessage: r
    }) => {
        let s = (0, p.getFilteredQueryParams)(["sfcid", "sflsa", "sfit"], t),
            i = (0, p.getQueryParams)(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"], !0),
            {
                setFormSubmitted: n
            } = (0, m.useResourcesDetailContext)(),
            [o] = (0, f.default)("ELOQUA");
        return (d, c, m) => {
            let f = t ? (({
                    emailConfirmation: e,
                    ghandler: t,
                    gcid: l,
                    growDivision: a,
                    growDepartment: r
                }) => ({
                    emailConfirmation: e,
                    ghandler: t,
                    gcid: l,
                    growDivision: a,
                    growDepartment: r,
                    grow: !0
                }))(e?.sfdcIntegration || {}) : e?.sfdcIntegration,
                x = e?.fields ? (0, p.getAlwaysSendOnData)(e.fields, c, m) : {};
            return d.elqCustomerGUID = o?.split("&")?.[0]?.split("GUID=")?.[1] || "", d = {
                ...d,
                ...f,
                ...x,
                ...i,
                ...s,
                ...e?.extraFields
            }, fetch("https://create.unity.com/e/f2", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams((0, p.cleanData)(d)).toString()
            }).then(() => {
                (0, h.default)({
                    properties: {
                        form_action: "submitted",
                        form_id: d.elqFormID,
                        form_name: d.elqFormName,
                        form_customer_id: d.elqCustomerGUID
                    }
                }), n(!0), l?.(), e?.successMessage?.showSuccessMessage ? r?.() : a?.()
            }).catch(e => u.captureException(e))
        }
    };
    e.s(["useEloquaSubmit", 0, x], 531469), e.s(["FormBuilder", 0, ({
        form: e,
        close: u,
        isGrowForm: m
    }) => {
        let [f, h] = (0, l.useState)(!1), {
            handleSubmit: p,
            control: g,
            setValue: b,
            watch: j,
            getValues: v,
            formState: {
                isSubmitting: y
            }
        } = (0, d.useForm)({
            reValidateMode: "onChange",
            mode: "onChange"
        }), w = j(c.COUNTRY_CODE), C = x({
            form: e,
            isGrowForm: m,
            close: u,
            onShowSuccessMessage: () => h(!0)
        });
        return f && e?.successMessage?.showSuccessMessage ? (0, t.jsxs)("div", {
            className: "flex flex-col items-center justify-center p-8 text-center",
            children: [e.successMessage.title && (0, t.jsx)("h3", {
                className: "mb-4 text-xl font-semibold text-gray-900",
                children: e.successMessage.title
            }), e.successMessage.description && (0, t.jsx)("p", {
                className: "mb-6 text-gray-600",
                children: e.successMessage.description
            }), e?.successMessage?.closeButtonText && (0, t.jsx)(a.default, {
                onPress: u,
                className: "[&>div>span]:!text-black hover:[&>div>span]:!underline",
                variant: "secondary",
                children: e?.successMessage?.closeButtonText
            })]
        }) : (0, t.jsxs)(o.default, {
            onSubmit: p(e => C(e, v, w)),
            children: [(0, t.jsx)("div", {
                className: "flex flex-col [&>*]:mt-3",
                children: e?.fields && e?.fields.map((e, l) => {
                    switch (e.formField) {
                        case "input":
                            return (0, t.jsx)(r.default, {
                                ...e,
                                control: g,
                                countryCode: w
                            }, l);
                        case "checkbox":
                            return (0, t.jsx)(s.default, {
                                countryCode: w,
                                ...e,
                                control: g
                            }, l);
                        case "dropdown":
                            return (0, t.jsx)(i.default, {
                                countryCode: w,
                                ...e,
                                control: g,
                                setValue: b
                            }, l);
                        case "richText":
                            return (0, t.jsx)(n.default, {
                                ...e,
                                control: g,
                                countryCode: w
                            }, l)
                    }
                })
            }), e?.actions && (0, t.jsxs)("div", {
                className: "mt-10 border-t border-t-gray-200 pt-6",
                children: [e?.actions?.primaryActionText && (0, t.jsx)(a.default, {
                    type: "submit",
                    rounded: !0,
                    hasArrow: !0,
                    disabled: y,
                    children: e?.actions?.primaryActionText
                }), e?.actions?.secondaryActionText && (0, t.jsx)(a.default, {
                    onPress: u,
                    className: "[&>div>span]:!text-black hover:[&>div>span]:!underline",
                    variant: "secondary",
                    children: e?.actions?.secondaryActionText
                })]
            })]
        })
    }], 436324)
}, 115219, e => {
    "use strict";
    var t = e.i(210139),
        l = e.i(363737),
        a = e.i(436324),
        r = e.i(869324),
        s = e.i(537251);
    e.s(["applyFormOverrides", 0, function(e, t) {
        let l;
        if (!t || !e?.fields) return e;
        try {
            l = JSON.parse(t)
        } catch {
            return e
        }
        if (!l) return e;
        let a = [...e.fields];
        for (let e of Object.keys(l)) {
            let t = a.findIndex(t => t.formFieldId === e);
            if (t < 0) continue;
            let r = l[e];
            null != r.isRequired && (a[t] = {
                ...a[t],
                isRequired: r.isRequired
            }), r.isHidden && a.splice(t, 1)
        }
        return {
            ...e,
            fields: a
        }
    }, "trackFormOpen", 0, function(e) {
        (0, r.default)({
            properties: {
                form_action: "presented",
                form_id: e.fields?.find(e => "elqFormID" === e.formFieldId)?.defaultValue,
                form_name: e.fields?.find(e => "elqFormName" === e.formFieldId)?.defaultValue
            }
        })
    }, "useFormModal", 0, e => {
        let {
            extraFields: i
        } = (0, s.default)(), n = ({
            label: s,
            form: i
        }) => {
            let n = ((e, t) => {
                let l = e?.find(e => t.title === e?.form?.title)?.customSelections || "";
                try {
                    return JSON.parse(l)
                } catch (e) {
                    return null
                }
            })(e || [], i);
            if (n && i?.fields)
                for (let e of Object.keys(n)) {
                    let t = i.fields.findIndex(t => t.formFieldId === e);
                    if (t >= 0) {
                        let l = n[e];
                        null != l.isRequired && (i.fields[t].isRequired = n[e].isRequired), l.isHidden && i.fields.splice(t, 1)
                    }
                }
            return (0, t.jsx)(l.default, {
                actionLabel: s,
                onOpenChange: e => {
                    e && (0, r.default)({
                        properties: {
                            form_action: "presented",
                            form_id: i.fields?.find(e => "elqFormID" === e.formFieldId)?.defaultValue,
                            form_name: i.fields?.find(e => "elqFormName" === e.formFieldId)?.defaultValue
                        }
                    })
                },
                children: e => (0, t.jsx)(l.default.Layout, {
                    modal: {
                        title: i.title,
                        description: i.description
                    },
                    children: i && (0, t.jsx)(a.FormBuilder, {
                        form: i,
                        close: e
                    })
                })
            })
        };
        return {
            renderModal: n,
            mapFormActions: e => e?.map(e => ({
                title: e.title,
                link: e.link ? {
                    href: e.link.linkReference?.href.current || "",
                    target: e.link.linkReference?.target || "_self"
                } : null,
                form: e.form ? {
                    form: e.form,
                    webinarFormParametersContent: e.webinarFormParametersContent,
                    extraFields: i,
                    renderModal: n
                } : null
            })),
            extraFields: i
        }
    }])
}, 459923, 201763, 570994, e => {
    "use strict";
    var t = e.i(210139),
        l = e.i(999721),
        a = e.i(166511),
        r = e.i(71871),
        s = e.i(722978),
        i = e.i(153348),
        n = e.i(955429);
    let o = ({
        keyFigures: e,
        nested: l = !1,
        theme: r = "light"
    }) => {
        let i = (0, s.clsx)("container col-span-12 pt-16 grid grid-cols-12 gap-2 ", {
            "py-16": !l
        });
        return (0, t.jsx)("div", {
            className: "dark" === r ? "bg-black text-white" : "",
            children: (0, t.jsx)("div", {
                className: i,
                children: e?.map((i, n) => {
                    let {
                        value: o,
                        label: d
                    } = i, c = (0, s.clsx)("col-span-12 flex rounded-md items-center gap-2 px-4 py-2 filter md:p-4 lg:col-span-4 xl:p-6", {
                        "backdrop-blur-lg": l && "dark" !== r,
                        "bg-gray-900 dark:bg-black": "dark" === r,
                        "bg-gray-100 dark:bg-gray-900 text-gray-800": !l && "dark" !== r,
                        "xl:col-span-3": e?.length === 4
                    });
                    return o?.type === "text" ? (0, t.jsxs)("div", {
                        className: c,
                        children: [(0, t.jsx)("div", {
                            className: "loco-text-heading-sm min-w-[30%] shrink-0 gap-10 pr-4 text-center",
                            children: o.text
                        }), (0, t.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: d
                        })]
                    }, n) : d && o?.type === "icon" && !o.url ? (0, t.jsx)("div", {
                        className: c,
                        children: (0, t.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: d
                        })
                    }, n) : o?.type === "icon" && o.url ? (0, t.jsxs)("div", {
                        className: c,
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
                            children: d
                        })]
                    }, n) : null
                })
            })
        })
    };
    e.s(["default", 0, o], 201763);
    var d = e.i(749583);
    let c = (0, r.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        u = ({
            eyebrow: e,
            title: r,
            titleSize: u = "medium",
            description: m,
            backgroundImage: f,
            actions: h = [],
            keyFigures: p,
            video: x,
            mention: g,
            fullScreen: b = !0
        }) => {
            let j = (0, l.useRef)(null),
                v = (0, i.useInView)(j, {
                    once: !0
                }),
                y = (0, n.useReducedMotion)(),
                [w, C] = (0, l.useState)(!1),
                k = (0, s.default)(`font-nohemi mt-24 my-4 ${"small"===u?"mb-6":"mb-8"}`, {
                    "loco-text-heading-xl": "medium" === u,
                    "loco-text-headline": "large" === u,
                    "loco-text-heading-lg": "small" === u
                }),
                N = (0, s.default)("object-cover transition-opacity duration-1000 opacity-100", {
                    "opacity-0": w
                });
            return (0, t.jsxs)("section", {
                ref: j,
                className: "dark relative",
                children: [f && (0, t.jsx)(a.default, {
                    src: f.src,
                    placeholder: "blur",
                    blurDataURL: f.placeholder,
                    fill: !0,
                    alt: "",
                    className: N,
                    sizes: "100vw"
                }), v && !y && x && (0, t.jsx)(c, {
                    url: x || "",
                    playing: !0,
                    loop: !0,
                    muted: !0,
                    playsinline: !0,
                    width: "100%",
                    height: "100%",
                    onReady: () => {
                        C(!0)
                    },
                    config: {
                        hlsOptions: {
                            maxMaxBufferLength: 1,
                            startLevel: 1
                        }
                    },
                    className: "absolute [&>video]:object-cover"
                }, "hero-video"), (0, t.jsx)("div", {
                    className: "absolute h-full w-full",
                    style: {
                        backgroundImage: b ? `
    linear-gradient(180deg, rgba(1, 1, 1, 0.00) 45.08%, rgba(1, 1, 1, 0.00) 49.56%, rgba(1, 1, 1, 0.01) 53.84%, rgba(1, 1, 1, 0.02) 57.92%, rgba(1, 1, 1, 0.04) 61.84%, rgba(1, 1, 1, 0.06) 65.62%, rgba(1, 1, 1, 0.09) 69.27%, rgba(1, 1, 1, 0.12) 72.82%, rgba(1, 1, 1, 0.16) 76.29%, rgba(1, 1, 1, 0.20) 79.7%, rgba(1, 1, 1, 0.24) 83.06%, rgba(1, 1, 1, 0.29) 86.41%, rgba(1, 1, 1, 0.34) 89.75%, rgba(1, 1, 1, 0.39) 93.12%, rgba(1, 1, 1, 0.44) 96.53%, rgba(1, 1, 1, 0.50) 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)` : ""
                    }
                }), (0, t.jsxs)("div", {
                    className: `relative container flex ${b&&"min-h-[calc(100vh-4rem)]"} flex-col py-8 text-white`,
                    children: [(0, t.jsx)("div", {
                        className: "flex grow flex-col justify-stretch",
                        children: (0, t.jsxs)("div", {
                            className: "flex h-full grow flex-col items-center justify-center text-center",
                            children: [e && (0, t.jsx)("div", {
                                className: "loco-caption-lg-semibold",
                                children: e
                            }), (0, t.jsx)("h1", {
                                className: k,
                                children: r
                            }), m && (0, t.jsx)("div", {
                                className: "loco-caption-sm-semibold mt-5",
                                children: m
                            }), h && (0, t.jsx)("div", {
                                className: "mt-6 flex flex-wrap items-center justify-center gap-4",
                                children: h.map((e, l) => {
                                    if (e.link) return (0, t.jsx)(d.default, {
                                        rounded: !0,
                                        hasArrow: !0,
                                        href: e.link.href,
                                        target: e.link.target,
                                        variant: 0 === l ? "primary" : "secondary",
                                        children: e.title
                                    }, `headliner-action-link-${e.title}-${l}`);
                                    if (e.form) {
                                        let a = {
                                            ...e.form.form,
                                            ...e.form.webinarFormParametersContent,
                                            extraFields: e.form.extraFields
                                        };
                                        return (0, t.jsx)("div", {
                                            children: e.form.renderModal({
                                                label: e.title,
                                                form: a
                                            })
                                        }, `headliner-action-modal-${e.title}-${l}`)
                                    }
                                    return null
                                })
                            })]
                        })
                    }), p && (0, t.jsx)(o, {
                        keyFigures: p,
                        nested: !0
                    })]
                }), g && (0, t.jsx)("div", {
                    className: "loco-text-body-sm z-10 w-full px-4 py-4 text-center opacity-70 md:absolute md:top-10 md:right-8 md:left-auto md:w-auto md:px-0 md:py-8",
                    children: g
                })]
            })
        };
    e.s(["default", 0, u], 570994);
    var m = e.i(115219);
    e.s(["default", 0, ({
        actions: e = [],
        brandfolder: a,
        mention: r,
        eyebrow: s,
        title: i,
        titleSize: n,
        description: o,
        image: d,
        keyFigures: c,
        isHidden: f
    }) => {
        let {
            mapFormActions: h
        } = (0, m.useFormModal)(e), p = h(e), x = (0, l.useMemo)(() => (c?.data ?? []).map(e => e?.value?.text ? {
            value: {
                type: "text",
                text: e.value.text
            },
            label: e.label
        } : {
            value: {
                type: "icon",
                url: e?.value?.icon?.file?.cdnURL || "",
                description: e?.value?.icon?.caption || ""
            },
            label: e.label
        }), [c]);
        return (0, t.jsx)(t.Fragment, {
            children: !f && (0, t.jsx)(u, {
                actions: p,
                mention: r || "",
                eyebrow: s || "",
                title: i || "",
                titleSize: "small" === n ? "small" : "large" === n ? "large" : "medium",
                description: o || "",
                backgroundImage: {
                    src: d?.asset.url || "",
                    placeholder: d?.asset.metadata?.lqip || ""
                },
                keyFigures: x,
                video: a?.muxHLSURL || ""
            })
        })
    }], 459923)
}, 649051, e => {
    "use strict";
    e.s(["storageAvailable", 0, e => {
        let t;
        try {
            t = window[e];
            let l = "__storage_test__";
            return t.setItem(l, l), t.removeItem(l), !0
        } catch (e) {
            return e instanceof DOMException && "QuotaExceededError" === e.name && t && 0 !== t.length
        }
    }])
}, 976989, e => {
    "use strict";
    var t = e.i(210139);
    e.s(["default", 0, ({
        className: e,
        width: l = 18,
        height: a = 18
    }) => (0, t.jsx)("svg", {
        className: e,
        width: l,
        height: a,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, t.jsx)("path", {
            d: "M13.8001 10.7556L8.33444 1.26375C8.19785 1.0312 8.00287 0.838382 7.76881 0.704408C7.53476 0.570434 7.26975 0.499954 7.00006 0.499954C6.73037 0.499954 6.46536 0.570434 6.23131 0.704408C5.99725 0.838382 5.80227 1.0312 5.66569 1.26375L0.20006 10.7556C0.0686451 10.9805 -0.000610352 11.2364 -0.000610352 11.4969C-0.000610352 11.7574 0.0686451 12.0132 0.20006 12.2381C0.334892 12.4721 0.529541 12.6659 0.764036 12.7998C0.99853 12.9337 1.26442 13.0028 1.53444 13H12.4657C12.7355 13.0026 13.0011 12.9334 13.2354 12.7995C13.4696 12.6656 13.6641 12.4719 13.7988 12.2381C13.9304 12.0133 13.9999 11.7575 14.0001 11.497C14.0003 11.2365 13.9313 10.9807 13.8001 10.7556ZM6.50006 5.5C6.50006 5.36739 6.55274 5.24021 6.64651 5.14644C6.74027 5.05267 6.86745 5 7.00006 5C7.13267 5 7.25985 5.05267 7.35361 5.14644C7.44738 5.24021 7.50006 5.36739 7.50006 5.5V8C7.50006 8.1326 7.44738 8.25978 7.35361 8.35355C7.25985 8.44732 7.13267 8.5 7.00006 8.5C6.86745 8.5 6.74027 8.44732 6.64651 8.35355C6.55274 8.25978 6.50006 8.1326 6.50006 8V5.5ZM7.00006 11C6.85172 11 6.70672 10.956 6.58338 10.8736C6.46005 10.7912 6.36392 10.6741 6.30715 10.537C6.25038 10.4 6.23553 10.2492 6.26447 10.1037C6.29341 9.95819 6.36484 9.82455 6.46973 9.71967C6.57462 9.61478 6.70826 9.54335 6.85374 9.51441C6.99923 9.48547 7.15003 9.50032 7.28707 9.55709C7.42412 9.61385 7.54125 9.70998 7.62366 9.83332C7.70607 9.95665 7.75006 10.1017 7.75006 10.25C7.75006 10.4489 7.67104 10.6397 7.53039 10.7803C7.38974 10.921 7.19897 11 7.00006 11Z",
            fill: "currentColor"
        })
    })])
}, 620174, 955613, 441737, e => {
    "use strict";
    var t = e.i(210139),
        l = e.i(999721),
        a = e.i(722978),
        r = e.i(339206),
        s = e.i(682792),
        i = e.i(901317),
        n = e.i(604082),
        o = e.i(201373),
        d = e.i(32147),
        c = e.i(7180),
        u = e.i(623706),
        m = e.i(318601);

    function f(e, t) {
        let {
            inputElementType: a = "input",
            isDisabled: f = !1,
            isRequired: h = !1,
            isReadOnly: p = !1,
            type: x = "text",
            validationBehavior: g = "aria"
        } = e, [b, j] = (0, o.useControlledState)(e.value, e.defaultValue || "", e.onChange), {
            focusableProps: v
        } = (0, c.useFocusable)(e, t), y = (0, m.useFormValidationState)({
            ...e,
            value: b
        }), {
            isInvalid: w,
            validationErrors: C,
            validationDetails: k
        } = y.displayValidation, {
            labelProps: N,
            fieldProps: L,
            descriptionProps: M,
            errorMessageProps: _
        } = (0, d.useField)({
            ...e,
            isInvalid: w,
            errorMessage: e.errorMessage || C
        }), T = (0, r.filterDOMProps)(e, {
            labelable: !0
        }), A = {
            type: x,
            pattern: e.pattern
        };
        return (0, s.useFormReset)(t, b, j), (0, u.useFormValidation)(e, y, t), (0, l.useEffect)(() => {
            if (t.current instanceof(0, i.getOwnerWindow)(t.current).HTMLTextAreaElement) {
                let e = t.current;
                Object.defineProperty(e, "defaultValue", {
                    get: () => e.value,
                    set: () => {},
                    configurable: !0
                })
            }
        }, [t]), {
            labelProps: N,
            inputProps: (0, n.mergeProps)(T, "input" === a ? A : void 0, {
                disabled: f,
                readOnly: p,
                required: h && "native" === g,
                "aria-required": h && "aria" === g || void 0,
                "aria-invalid": w || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-activedescendant": e["aria-activedescendant"],
                "aria-autocomplete": e["aria-autocomplete"],
                "aria-haspopup": e["aria-haspopup"],
                "aria-controls": e["aria-controls"],
                value: b,
                onChange: e => j(e.target.value),
                autoComplete: e.autoComplete,
                autoCapitalize: e.autoCapitalize,
                maxLength: e.maxLength,
                minLength: e.minLength,
                name: e.name,
                placeholder: e.placeholder,
                inputMode: e.inputMode,
                autoCorrect: e.autoCorrect,
                spellCheck: e.spellCheck,
                [parseInt(l.default.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: e.enterKeyHint,
                onCopy: e.onCopy,
                onCut: e.onCut,
                onPaste: e.onPaste,
                onCompositionEnd: e.onCompositionEnd,
                onCompositionStart: e.onCompositionStart,
                onCompositionUpdate: e.onCompositionUpdate,
                onSelect: e.onSelect,
                onBeforeInput: e.onBeforeInput,
                onInput: e.onInput,
                ...v,
                ...L
            }),
            descriptionProps: M,
            errorMessageProps: _,
            isInvalid: w,
            validationErrors: C,
            validationDetails: k
        }
    }
    e.s(["useTextField", 0, f], 955613);
    var h = e.i(166010);
    let p = l.default.forwardRef((e, l) => {
        let {
            disabled: r,
            hasError: s,
            inputSize: i,
            hasWarning: n,
            isTextArea: o
        } = e, d = (0, h.useObjectRef)(l), {
            inputProps: c
        } = f({
            ...e,
            autoCapitalize: "none",
            inputElementType: "input"
        }, d), u = (0, a.default)("rounded-lg w-full border border-gray-200 outline-blue focus:ring-3 focus:ring-blue-dark focus:outline-blue focus:outline-offset-0 transition-all ease-out duration-400", "text-gray-900 dark:text-gray-400 dark:text-white", "placeholder-gray-600 dark:placeholder-gray-400", {
            "h-10 py-2.5 px-2": "small" === i,
            "h-12 py-3.5 px-3": "medium" === i,
            "h-14 py-5 px-4": "large" === i
        }, {
            "bg-gray-100 dark:bg-gray-800 cursor-not-allowed": r,
            "border-yellow-500 dark:border-yellow-500 border-2": n,
            "border-red-500 dark:border-red-500 border-2": s
        }, {
            "bg-gray-50 dark:bg-gray-900": !r,
            "border-gray-400 hover:border-gray-900 dark:border-gray-500 dark:hover:border-white": !s && !n
        }, {
            "min-h-[6rem]": o
        });
        return o ? (0, t.jsx)("textarea", {
            ...c,
            "aria-labelledby": e["aria-labelledby"] || c["aria-labelledby"],
            ref: d,
            className: u,
            disabled: r
        }) : (0, t.jsx)("input", {
            ...c,
            "aria-labelledby": e["aria-labelledby"] || c["aria-labelledby"],
            ref: d,
            className: u,
            disabled: r
        })
    });
    p.displayName = "InputField";
    var x = e.i(976989);
    let g = ({
            className: e,
            width: l = 18,
            height: a = 18
        }) => (0, t.jsx)("svg", {
            className: e,
            width: l,
            height: a,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, t.jsx)("path", {
                d: "M7 0.5C5.71442 0.5 4.45772 0.881218 3.3888 1.59545C2.31988 2.30968 1.48676 3.32484 0.994786 4.51256C0.502816 5.70028 0.374095 7.00721 0.624899 8.26809C0.875703 9.52896 1.49477 10.6872 2.40381 11.5962C3.31285 12.5052 4.47104 13.1243 5.73192 13.3751C6.99279 13.6259 8.29973 13.4972 9.48744 13.0052C10.6752 12.5132 11.6903 11.6801 12.4046 10.6112C13.1188 9.54229 13.5 8.28558 13.5 7C13.4982 5.27665 12.8128 3.62441 11.5942 2.40582C10.3756 1.18722 8.72335 0.50182 7 0.5ZM9.35375 8.64625C9.40021 8.69271 9.43706 8.74786 9.4622 8.80855C9.48734 8.86925 9.50028 8.9343 9.50028 9C9.50028 9.0657 9.48734 9.13075 9.4622 9.19145C9.43706 9.25214 9.40021 9.30729 9.35375 9.35375C9.3073 9.40021 9.25215 9.43705 9.19145 9.4622C9.13075 9.48734 9.0657 9.50028 9 9.50028C8.93431 9.50028 8.86925 9.48734 8.80855 9.4622C8.74786 9.43705 8.69271 9.40021 8.64625 9.35375L7 7.70687L5.35375 9.35375C5.3073 9.40021 5.25215 9.43705 5.19145 9.4622C5.13075 9.48734 5.0657 9.50028 5 9.50028C4.93431 9.50028 4.86925 9.48734 4.80855 9.4622C4.74786 9.43705 4.69271 9.40021 4.64625 9.35375C4.5998 9.30729 4.56295 9.25214 4.53781 9.19145C4.51266 9.13075 4.49972 9.0657 4.49972 9C4.49972 8.9343 4.51266 8.86925 4.53781 8.80855C4.56295 8.74786 4.5998 8.69271 4.64625 8.64625L6.29313 7L4.64625 5.35375C4.55243 5.25993 4.49972 5.13268 4.49972 5C4.49972 4.86732 4.55243 4.74007 4.64625 4.64625C4.74007 4.55243 4.86732 4.49972 5 4.49972C5.13268 4.49972 5.25993 4.55243 5.35375 4.64625L7 6.29313L8.64625 4.64625C8.69271 4.59979 8.74786 4.56294 8.80855 4.5378C8.86925 4.51266 8.93431 4.49972 9 4.49972C9.0657 4.49972 9.13075 4.51266 9.19145 4.5378C9.25215 4.56294 9.3073 4.59979 9.35375 4.64625C9.40021 4.6927 9.43706 4.74786 9.4622 4.80855C9.48734 4.86925 9.50028 4.9343 9.50028 5C9.50028 5.0657 9.48734 5.13075 9.4622 5.19145C9.43706 5.25214 9.40021 5.3073 9.35375 5.35375L7.70688 7L9.35375 8.64625Z",
                fill: "currentColor"
            })
        }),
        b = ({
            className: e,
            width: l = 18,
            height: a = 18
        }) => (0, t.jsx)("svg", {
            className: e,
            width: l,
            height: a,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, t.jsx)("path", {
                d: "M8 1.5C6.71442 1.5 5.45772 1.88122 4.3888 2.59545C3.31988 3.30968 2.48676 4.32484 1.99479 5.51256C1.50282 6.70028 1.37409 8.00721 1.6249 9.26809C1.8757 10.529 2.49477 11.6872 3.40381 12.5962C4.31285 13.5052 5.47104 14.1243 6.73192 14.3751C7.99279 14.6259 9.29973 14.4972 10.4874 14.0052C11.6752 13.5132 12.6903 12.6801 13.4046 11.6112C14.1188 10.5423 14.5 9.28558 14.5 8C14.4982 6.27665 13.8128 4.62441 12.5942 3.40582C11.3756 2.18722 9.72335 1.50182 8 1.5ZM7.75 4.5C7.89834 4.5 8.04334 4.54399 8.16668 4.6264C8.29002 4.70881 8.38615 4.82594 8.44291 4.96299C8.49968 5.10003 8.51453 5.25083 8.48559 5.39632C8.45665 5.5418 8.38522 5.67544 8.28033 5.78033C8.17544 5.88522 8.04181 5.95665 7.89632 5.98559C7.75083 6.01453 7.60003 5.99968 7.46299 5.94291C7.32595 5.88614 7.20881 5.79001 7.1264 5.66668C7.04399 5.54334 7 5.39834 7 5.25C7 5.05109 7.07902 4.86032 7.21967 4.71967C7.36032 4.57902 7.55109 4.5 7.75 4.5ZM8.5 11.5C8.23479 11.5 7.98043 11.3946 7.7929 11.2071C7.60536 11.0196 7.5 10.7652 7.5 10.5V8C7.36739 8 7.24022 7.94732 7.14645 7.85355C7.05268 7.75979 7 7.63261 7 7.5C7 7.36739 7.05268 7.24021 7.14645 7.14645C7.24022 7.05268 7.36739 7 7.5 7C7.76522 7 8.01957 7.10536 8.20711 7.29289C8.39465 7.48043 8.5 7.73478 8.5 8V10.5C8.63261 10.5 8.75979 10.5527 8.85356 10.6464C8.94732 10.7402 9 10.8674 9 11C9 11.1326 8.94732 11.2598 8.85356 11.3536C8.75979 11.4473 8.63261 11.5 8.5 11.5Z",
                fill: "currentColor"
            })
        }),
        j = e => {
            let {
                helperText: a,
                hasError: r,
                hasWarning: s
            } = e, {
                descriptionProps: i
            } = f(e, (0, l.useRef)(null));
            return (0, t.jsxs)("div", {
                ...i,
                className: "align-items flex pt-2 text-xs",
                children: [r && (0, t.jsx)(g, {
                    className: "inline pr-1 text-red-600"
                }), s && (0, t.jsx)(x.default, {
                    className: "inline pr-1 text-yellow-600"
                }), !s && !r && (0, t.jsx)(b, {
                    className: "inline pr-1 text-gray-600 dark:text-gray-100"
                }), a]
            })
        };
    e.s(["default", 0, j], 441737);
    let v = ({
            className: e,
            ...l
        }) => (0, t.jsxs)("label", {
            id: l.id,
            htmlFor: l.for,
            className: e ?? "flex justify-between pb-2",
            children: [l.label, l.isRequired && (0, t.jsx)("span", {
                className: "text-sm text-gray-400",
                children: l.requiredText
            })]
        }),
        y = (0, l.forwardRef)(({
            helperText: e,
            ...a
        }, r) => {
            let s = (0, l.useId)();
            return (0, t.jsxs)("div", {
                ref: r,
                children: [(0, t.jsx)(v, {
                    ...a,
                    id: s
                }), (0, t.jsx)(p, {
                    ...a,
                    "aria-labelledby": s
                }), e && (0, t.jsx)(j, {
                    helperText: e,
                    ...a
                })]
            })
        });
    y.displayName = "Input", e.s(["default", 0, y], 620174)
}, 240046, (e, t, l) => {
    t.exports = function(e) {
        return e
    }
}, 865799, (e, t, l) => {
    t.exports = function(e, t, l) {
        switch (l.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, l[0]);
            case 2:
                return e.call(t, l[0], l[1]);
            case 3:
                return e.call(t, l[0], l[1], l[2])
        }
        return e.apply(t, l)
    }
}, 911818, (e, t, l) => {
    var a = Date.now;
    t.exports = function(e) {
        var t = 0,
            l = 0;
        return function() {
            var r = a(),
                s = 16 - (r - l);
            if (l = r, s > 0) {
                if (++t >= 800) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
}, 830747, (e, t, l) => {
    t.exports = function(e) {
        return function() {
            return e
        }
    }
}, 599568, (e, t, l) => {
    var a = e.r(581511);
    t.exports = function() {
        try {
            var e = a(Object, "defineProperty");
            return e({}, "", {}), e
        } catch (e) {}
    }()
}, 317508, (e, t, l) => {
    var a = e.r(830747),
        r = e.r(599568),
        s = e.r(240046);
    t.exports = r ? function(e, t) {
        return r(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: a(t),
            writable: !0
        })
    } : s
}, 108749, (e, t, l) => {
    var a = e.r(317508);
    t.exports = e.r(911818)(a)
}, 531766, (e, t, l) => {
    t.exports = function(e, t) {
        for (var l = -1, a = null == e ? 0 : e.length; ++l < a && !1 !== t(e[l], l, e););
        return e
    }
}, 860059, (e, t, l) => {
    var a = /^(?:0|[1-9]\d*)$/;
    t.exports = function(e, t) {
        var l = typeof e;
        return !!(t = null == t ? 0x1fffffffffffff : t) && ("number" == l || "symbol" != l && a.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
}, 184414, (e, t, l) => {
    var a = e.r(865799),
        r = Math.max;
    t.exports = function(e, t, l) {
        return t = r(void 0 === t ? e.length - 1 : t, 0),
            function() {
                for (var s = arguments, i = -1, n = r(s.length - t, 0), o = Array(n); ++i < n;) o[i] = s[t + i];
                i = -1;
                for (var d = Array(t + 1); ++i < t;) d[i] = s[i];
                return d[t] = l(o), a(e, this, d)
            }
    }
}, 129824, e => {
    "use strict";
    e.s(["DATA_REQUEST", 0, "/data-request", "DEFAULT_PAGES_NO_MT_BANNER", 0, ["/made-with-unity"], "L1_PAGES_NO_MT_BANNER", 0, ["/our-company", "/community", "/industry", "/use-cases", "/releases/unity-6"], "PRODUCTS_PAGES_NO_MT_BANNER", 0, ["/products"], "PRODUCTS_PRODUCTS_PAGES_NO_MT_BANNER", 0, ["/products/unity-pro", "/products/unity-engine", "/products/compare-plans", "/products/compare-plans/unity-cloud"], "RESOURCES_PAGES_NO_MT_BANNER", 0, ["/resources"], "SOLUTIONS_PAGES_NO_MT_BANNER", 0, ["/download", "/roadmap", "/pages/pro-free-trial", "/games", "/solutions", "/developer-tools", "/how-to", "/learn", "/learn/get-started", "/releases/lts-vs-tech-stream"]])
}, 596889, e => {
    "use strict";
    var t = e.i(210139),
        l = e.i(722978);
    let a = ({
        children: e,
        className: a = "",
        variant: r = "default"
    }) => {
        let s = (0, l.clsx)({
            default: "bg-white dark:bg-gray-900 rounded-xl",
            padded: "p-6 bg-white dark:bg-gray-900 rounded-xl",
            transparent: ""
        } [r], a);
        return (0, t.jsx)("div", {
            className: s,
            children: e
        })
    };
    a.Content = ({
        children: e,
        className: l = "w-full"
    }) => (0, t.jsx)("div", {
        className: l,
        children: e
    }), a.Image = ({
        children: e,
        withinContainer: a
    }) => {
        let r = (0, l.clsx)("card-img relative w-full", {
            "[&>img]:!static !h-auto": a
        });
        return (0, t.jsx)("div", {
            className: r,
            children: e
        })
    }, e.s(["default", 0, a], 596889)
}, 164163, e => {
    "use strict";
    var t = e.i(210139),
        l = e.i(722978),
        a = e.i(166511),
        r = e.i(825610),
        s = e.i(749583),
        i = e.i(596889),
        n = e.i(805518);
    e.s(["default", 0, ({
        title: e,
        cards: o,
        layout: d = "four-cards",
        cardVariant: c = "default",
        scroll: u = !1,
        cardsHeading: m
    }) => {
        let f = m || (e ? "h3" : "h2"),
            h = (0, l.clsx)("gap-4 md:gap-8", {
                "grid grid-cols-12": !u,
                "flex overflow-x-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-900 dark:scrollbar-track-gray-900 dark:scrollbar-thumb-gray-100": u
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
                    children: o?.map((o, m) => {
                        let h = (0, l.clsx)("flex flex-wrap flex-row", !u && ({
                                "two-cards": "col-span-12 md:col-span-6 [&>div>.card-img]:h-72",
                                "three-cards": "col-span-12 md:col-span-6 lg:col-span-4 [&>div>.card-img]:h-44",
                                "four-cards": "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 [&>div>.card-img]:h-36"
                            })[d], u && ({
                                "two-cards": "mb-6 min-w-[35rem] [&>div>.card-img]:h-72",
                                "three-cards": "mb-6 min-w-[22rem] [&>div>.card-img]:h-44",
                                "four-cards": "mb-6 min-w-[16rem] [&>div>.card-img]:h-36"
                            })[d]),
                            p = (0, l.clsx)("place-self-end", {
                                "px-6 pb-6": "default" === c || "transparent" === c
                            }),
                            x = (0, l.clsx)({
                                "p-6": "default" === c || "transparent" === c,
                                "py-6": "padded" === c
                            }),
                            g = (0, l.clsx)("object-cover", {
                                "rounded-t-xl": "default" === c || "transparent" === c,
                                rounded: "padded" === c
                            }),
                            b = (0, l.clsx)("caption-xs mt-1 text-right text-gray-400", {
                                "mr-1": "padded" !== c
                            });
                        return (0, t.jsxs)(i.default, {
                            className: h,
                            variant: c,
                            children: [(0, t.jsxs)(i.default.Content, {
                                children: [o.image && o.image.src && (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsx)(i.default.Image, {
                                        withinContainer: o.image.withinContainer,
                                        children: (0, t.jsx)(a.default, {
                                            src: o.image.src ?? "",
                                            alt: o.image.alt ?? "",
                                            fill: !0,
                                            className: g,
                                            quality: 100
                                        })
                                    }), o.image.description && (0, t.jsx)(n.default, {
                                        className: b,
                                        children: o.image.description
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: x,
                                    children: [o.icon && o.icon.src && (0, t.jsx)("div", {
                                        className: "relative mb-5 dark:invert",
                                        children: (0, t.jsx)(a.default, {
                                            src: o.icon.src ?? "",
                                            alt: o.icon.alt ?? "",
                                            quality: 100,
                                            width: 23,
                                            height: 23
                                        })
                                    }), (0, t.jsx)(f, {
                                        className: "loco-text-body-lg-medium mb-4 !font-semibold",
                                        children: o.title
                                    }), o.description && (0, t.jsx)(n.default, {
                                        className: "loco-text-body mb-4",
                                        children: o.description
                                    }), o.richText && (0, t.jsx)(n.default, {
                                        className: "loco-text-body mb-4 text-gray-600 dark:text-gray-300",
                                        children: o.richText
                                    })]
                                })]
                            }), o.actions && (0, t.jsx)("div", {
                                className: p,
                                children: o.actions.map((e, l) => (0, t.jsx)(s.default, {
                                    href: e.href,
                                    target: e.target ?? "_self",
                                    rounded: !0,
                                    hasArrow: !0,
                                    outlined: 0 === l,
                                    className: 0 === l ? "mr-3" : "mt-4",
                                    variant: 0 === l ? "primary" : "secondary",
                                    "data-link-location": r.trackingLocation.cardsAction,
                                    "data-link-id": `${r.trackingLocation.cardsAction}-${l}`,
                                    children: e.title
                                }, `${e.title}-${l}`))
                            })]
                        }, `card-${m}-${e}`)
                    })
                })]
            })
        })
    }], 164163)
}, 52971, (e, t, l) => {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), l.default = void 0, l.default = {
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
}, 480880, 570133, 210310, e => {
    "use strict";
    var t = e.i(210139),
        l = e.i(999721);
    e.s(["default", 0, ({
        blocks: e,
        blockMap: a,
        ...r
    }) => (0, t.jsx)(t.Fragment, {
        children: e?.map((e, s) => {
            let i = e?._type,
                n = a[i];
            return e.isHidden ? null : n ? (0, t.jsx)("div", {
                children: l.default.createElement(n, {
                    key: `block-${s}`,
                    ...e,
                    blockIndex: s + 1,
                    blockType: i,
                    blockKey: `${i}-${s}`,
                    ...r
                })
            }, `block-${s}`) : void 0
        })
    })], 480880);
    var a = e.i(527714),
        r = e.i(52971),
        s = e.i(601198),
        i = e.i(810775),
        n = e.i(919406),
        o = e.i(864074),
        d = e.i(514683);
    a.Light.registerLanguage("csharp", s.default), a.Light.registerLanguage("javascript", i.default), a.Light.registerLanguage("xml", n.default), a.Light.registerLanguage("rust", o.default), a.Light.registerLanguage("css", d.default), e.s(["default", 0, ({
        code: e,
        language: l
    }) => (0, t.jsx)("div", {
        className: "text-white [&>pre]:rounded-xl [&>pre]:!p-4",
        children: (0, t.jsx)(a.Light, {
            style: r.default,
            language: l,
            children: e
        })
    })], 570133);
    var c = e.i(749583),
        u = e.i(394225),
        m = e.i(652955),
        f = e.i(229696),
        h = e.i(722978),
        p = e.i(805518),
        x = e.i(363737);
    let g = ({
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
            colTitle: a,
            truncationEnabled: r,
            rowTitle: s,
            className: i = "",
            isTableCell: n
        }) => {
            let [o, d] = (0, l.useState)(!1), [u, m] = (0, l.useState)(!1), f = (0, l.useRef)(null), j = (0, h.default)({
                "cursor-pointer relative": o
            }, i), v = (0, h.default)({
                "line-clamp-3": r
            });
            (0, l.useEffect)(() => {
                let e = f.current;
                e && (e.scrollHeight > e.clientHeight ? d(!0) : d(!1))
            }, [f]);
            let y = () => {
                    m(!0)
                },
                w = r && o ? {
                    tabIndex: 0,
                    role: "button",
                    onClick: y,
                    onKeyDown: e => {
                        ("Enter" === e.key || "Space" === e.key) && y()
                    }
                } : {};
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsxs)("td", {
                    className: (0, h.default)(j, {
                        "bg-gray-50 p-3 dark:bg-gray-900": !n,
                        "h-full !p-0": n
                    }),
                    ...w,
                    children: [n ? e : (0, t.jsx)(p.default, {
                        className: v,
                        ref: f,
                        children: e
                    }), r && o && (0, t.jsx)(g, {
                        className: "absolute top-1.5 right-1.5"
                    })]
                }), (0, t.jsx)(x.default, {
                    isOpen: u,
                    onOpenChange: m,
                    showTriggerButton: !1,
                    children: (0, t.jsxs)("div", {
                        className: "mt-20 flex w-6/12 flex-col rounded-3xl bg-white p-8 dark:bg-gray-800",
                        tabIndex: -1,
                        children: [(0, t.jsx)(c.default, {
                            onPress: () => {
                                m(!1)
                            },
                            variant: "secondary",
                            className: "self-end",
                            children: (0, t.jsx)(b, {})
                        }), (0, t.jsx)(p.default, {
                            className: "caption-sm mb-2.5 text-black dark:text-white",
                            children: s
                        }), (0, t.jsx)("div", {
                            className: "text-heading-sm mb-4 text-black dark:text-white",
                            children: a
                        }), (0, t.jsx)("div", {
                            className: "text-small mb-8",
                            children: (0, t.jsx)(p.default, {
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
        className: a = "",
        verticalHeadingClass: r = "",
        hideTitle: s = !1
    }) => {
        let [i, ...n] = e.rows.map(e => ({
            ...e,
            cells: (e.cells ?? []).map(e => "string" == typeof e ? e : "")
        })), o = `align-top text-heading-sm md:text-small-bold rounded-md bg-gray-100 text-gray-800 bg-gray-100 dark:bg-gray-700 md:dark:bg-gray-800 dark:text-gray-200 border-none ${r}`, d = "align-top rounded-md text-sm text-gray-800 dark:text-gray-200 border-none", x = (0, h.default)("w-full table-fixed border-separate border-spacing-2 break-words", a), g = (0, h.default)("h-full table-fixed border-separate border-spacing-1 break-words", a), b = (0, l.useCallback)(e => {
            let [l, ...a] = e.split("\n"), r = a.splice(1).map((e, l) => {
                let a = e.split("|").filter(e => e).map(e => e.trim());
                return (0, t.jsx)("div", {
                    className: "flex grow",
                    children: a.map((e, a) => (0, t.jsx)(f.default, {
                        className: "flex grow basis-0 items-center justify-center rounded-md bg-gray-50 px-6 py-4 text-center dark:bg-gray-900",
                        children: e
                    }, `cell-${l}-${a}-${e}`))
                }, `row-${l}`)
            });
            return (0, t.jsxs)("div", {
                className: "flex h-full flex-col",
                children: [(0, t.jsx)("div", {
                    className: "-ml-1 flex grow",
                    children: l.split("|").filter(e => e).map((e, l) => (0, t.jsx)(f.default, {
                        className: "ml-1 flex grow basis-0 items-center justify-center rounded-md bg-gray-50 px-6 py-4 text-center dark:bg-gray-900",
                        children: e.trim()
                    }, `header-cell-${l}-${e}`))
                }), r]
            })
        }, []), v = (0, l.useMemo)(() => n.map(e => e.cells.reduce((e, l, a) => ({
            ...e,
            [`col${a+1}`]: {
                component: l.startsWith("|") ? b(l) : (0, t.jsx)(f.default, {
                    options: {
                        overrides: {
                            Button: {
                                component: c.default
                            },
                            Label: {
                                component: u.default
                            },
                            Tooltip: {
                                component: m.default
                            }
                        }
                    },
                    children: l
                }),
                isTableCell: l.startsWith("|"),
                cellContent: l
            }
        }), {})), [n, b]), y = (0, l.useMemo)(() => i.cells.map((e, l) => (0, t.jsx)("th", {
            scope: "col",
            className: "min-w-[10rem] rounded-md border-none bg-gray-100 py-3.5 pr-4 pl-4 text-left align-top text-gray-800 dark:bg-gray-800 dark:text-gray-400",
            children: (0, t.jsx)(f.default, {
                options: {
                    overrides: {
                        Button: {
                            component: c.default
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
        }, `${l}-${e}`)), [i.cells]), w = (0, l.useMemo)(() => v.map((l, a) => {
            let r = Object.values(l),
                s = r[0];
            return (0, t.jsx)("tr", {
                className: "border-separate border-spacing-1",
                children: r.map((l, r) => (0, t.jsx)(j, {
                    isTableCell: l.isTableCell,
                    className: 0 === r ? o : d,
                    rowTitle: s.component,
                    colTitle: 0 !== r && y && y[r] ? y[r] : "",
                    truncationEnabled: e.tableTruncation,
                    children: l.component
                }, `${a}-${r}-${l.cellContent}`))
            }, a)
        }), [y, v, o, e.tableTruncation]), C = (0, l.useMemo)(() => i.cells.map((e, l) => (0, t.jsx)("th", {
            scope: "col",
            className: "text-tiny-bold rounded-md bg-gray-100 py-3.5 pr-4 pl-4 text-left align-top text-gray-800 dark:bg-gray-900 dark:text-gray-400",
            children: (0, t.jsx)(f.default, {
                options: {
                    overrides: {
                        Button: {
                            component: c.default
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
        }, `${l}-${e}`)), [i]), k = (0, l.useMemo)(() => v.map((e, l) => (0, t.jsx)("div", {
            className: "mb-4 min-w-full rounded-md bg-gray-100 align-middle dark:bg-gray-700",
            children: (0, t.jsxs)("table", {
                className: x,
                children: [i && i.cells.length > 0 && (0, t.jsx)("thead", {
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
                            className: 0 === a ? o : d,
                            children: [0 !== a && i && i.cells[a] && (0, t.jsx)(f.default, {
                                options: {
                                    overrides: {
                                        Button: {
                                            component: c.default
                                        },
                                        Label: {
                                            component: u.default
                                        },
                                        Tooltip: {
                                            component: m.default
                                        }
                                    }
                                },
                                children: i.cells[a]
                            }), (0, t.jsx)(p.default, {
                                children: e.component
                            })]
                        })
                    }, `${l}-${a}-${i.cells[a]}`) : null)
                })]
            })
        }, `row-${l}`)), [v, i, x, o, C]);
        return (0, t.jsxs)("div", {
            children: [(0, t.jsx)("div", {
                className: "sm:flex sm:items-center",
                children: (0, t.jsxs)("div", {
                    className: "sm:flex-auto",
                    children: [!s && e.tableTitle && (0, t.jsx)("div", {
                        className: "text-heading-sm",
                        children: e.tableTitle
                    }), !s && e.tableDescription && (0, t.jsx)("p", {
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
                            children: [y && (0, t.jsx)("thead", {
                                className: "table-header-group",
                                children: (0, t.jsx)("tr", {
                                    className: "border-separate border-spacing-1",
                                    children: y
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
                            children: (0, t.jsx)(f.default, {
                                options: {
                                    overrides: {
                                        Button: {
                                            component: c.default
                                        },
                                        Label: {
                                            component: u.default
                                        },
                                        Tooltip: {
                                            component: m.default
                                        }
                                    }
                                },
                                children: i && i.cells && i.cells[0] ? i.cells[0] : ""
                            })
                        }), k]
                    })]
                })
            })]
        })
    }], 210310)
}, 644995, e => {
    "use strict";
    var t = e.i(210139);
    e.s(["default", 0, ({
        className: e = "",
        width: l = 16,
        height: a = 16
    }) => (0, t.jsxs)("svg", {
        width: l,
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
}, 985904, e => {
    "use strict";
    var t = e.i(999721),
        l = e.i(389240);
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
    var r = Object.defineProperty,
        s = Object.defineProperties,
        i = Object.getOwnPropertyDescriptors,
        n = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        c = (e, t, l) => t in e ? r(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: l
        }) : e[t] = l;
    let u = (0, t.forwardRef)((e, r) => t.default.createElement(l.default, s(((e, t) => {
        for (var l in t || (t = {})) o.call(t, l) && c(e, l, t[l]);
        if (n)
            for (var l of n(t)) d.call(t, l) && c(e, l, t[l]);
        return e
    })({
        ref: r
    }, e), i({
        weights: a
    }))));
    u.displayName = "Info", e.s(["Info", 0, u], 985904)
}, 246916, e => {
    "use strict";
    var t = e.i(918143),
        l = e.i(200241),
        a = e.i(740041);
    e.s(["useMTBanner", 0, function(e, r = []) {
        var s, i;
        let n, o, d, c, u, m = (0, t.usePathname)(),
            f = (0, l.useLocale)(),
            h = f !== a.defaultLocale ? m.replace(`/${f}`, "") : m;
        return {
            shouldDisplayMTBanner: f !== a.defaultLocale && e?.translationType === "MT" && !r.includes(h),
            updatedBlocks: (s = e.blocks ?? [], i = e.machineTranslationDisclaimer, n = s.reduce((e, t, l) => ["hero", "alternateNavigation", "headliner"].includes(t._type) ? l : e, -1), o = [...s], d = o[n + 1]?._type === "alternateNavigationAnchor" || o[n + 1]?._type === "anchorButton" ? o[n + 2] : o[n + 1], c = d?.theme ?? null, u = {
                _type: "alert",
                text: i?.text,
                isContained: !0,
                spacing: {
                    bottom: !0,
                    top: !0
                },
                ...c && {
                    theme: c
                },
                action: {
                    text: i?.action?.title,
                    fieldLink: {
                        linkReference: {
                            href: {
                                current: `${window.location.origin}${h}`
                            },
                            target: "_self"
                        }
                    }
                }
            }, -1 === n ? o.unshift(u) : o.splice(n + 1, 0, u), o),
            redirectPathName: h
        }
    }], 246916)
}, 401861, 146911, 841889, e => {
    "use strict";
    var t = e.i(210139),
        l = e.i(722978),
        a = e.i(999721),
        r = e.i(985904);
    let s = e.i(976317).default;
    e.s(["default", 0, s], 146911);
    let i = ({
            title: e,
            text: i,
            action: n,
            truncate: o,
            className: d = "",
            isContained: c,
            dismiss: u
        }) => {
            let m = (0, a.useMemo)(() => `unity-alert-${i?.substring(0,30).replaceAll(" ","_")}`, [i]),
                [f, h] = (0, a.useState)(!0),
                [p, x] = (0, a.useState)(!1);
            return ((0, a.useEffect)(() => {
                localStorage?.getItem(m) && x(!0)
            }, [m]), p) ? null : (0, t.jsx)("div", {
                className: (0, l.clsx)({
                    container: c
                }),
                children: (0, t.jsxs)("div", {
                    className: (0, l.clsx)("dark:bg-blue/10 relative flex w-full flex-col justify-between gap-4 bg-sky-100 py-4 pr-5 pl-11 text-sm text-gray-900 transition-colors sm:flex-row", {
                        flex: u?.enabled
                    }, {
                        "rounded-lg": c
                    }, d),
                    children: [(0, t.jsx)(r.Info, {
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
                                className: (0, l.clsx)({
                                    "line-clamp-4 sm:line-clamp-2": o?.enabled && f
                                }),
                                children: i
                            }), o?.enabled && (0, t.jsx)("button", {
                                onClick: () => h(!f),
                                className: "text-tiny shadow-underline-sm hover:text-blue hover:shadow-underline focus:text-blue dark:hover:text-blue text-black transition duration-200 dark:text-white",
                                children: f ? o.seeMoreLabel : o.seeLessLabel
                            })]
                        })]
                    }), (n?.href || u?.enabled) && (0, t.jsxs)("div", {
                        className: "sm:auto inline-flex w-fit items-center gap-4 [&>*]:whitespace-nowrap",
                        children: [n && (0, t.jsx)(s, {
                            className: "mx-auto mt-0 inline-block whitespace-nowrap",
                            href: n.href,
                            target: n.target || "_self",
                            size: "tiny",
                            underline: !0,
                            children: n.title
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
        n = ({
            title: e,
            text: a,
            action: r,
            theme: s,
            truncate: n,
            dismiss: o,
            isContained: d,
            isHidden: c,
            spacing: u
        }) => {
            let m = (0, l.clsx)({
                "pt-10": u?.top
            }, {
                "pb-10": u?.bottom
            }, {
                "dark bg-black": "dark" === s
            });
            return c || !a ? null : (0, t.jsx)("section", {
                className: m,
                children: (0, t.jsx)(i, {
                    title: e,
                    text: a,
                    isContained: d,
                    truncate: n || {},
                    dismiss: o || {},
                    action: r && {
                        title: r?.text || "",
                        href: r?.fieldLink?.linkReference?.href?.current || "",
                        target: r?.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self"
                    }
                })
            })
        };
    e.s(["default", 0, n], 841889), e.s(["default", 0, n], 401861)
}, 783078, e => {
    "use strict";
    var t, l = ((t = l || {})[t.Small = 425] = "Small", t[t.Medium = 744] = "Medium", t[t.Large = 1024] = "Large", t[t.XLarge = 1440] = "XLarge", t);
    e.s(["default", 0, l])
}, 123849, e => {
    "use strict";
    var t = e.i(210139),
        l = e.i(722978),
        a = e.i(805518);
    let r = ({
            title: e,
            content: r,
            listStyle: s = "check"
        }) => {
            let i = (0, l.default)("loco-text-body [&_h4]:mb-0", {
                "checkmark-list-green": "check" === s,
                "plus-list": "plus" === s
            });
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("div", {
                    className: "loco-caption-sm-semibold mb-2 text-gray-700 dark:text-gray-300",
                    children: e
                }), (0, t.jsx)(a.default, {
                    className: i,
                    children: r
                })]
            })
        },
        s = ({
            title: e = "",
            descriptions: l = [],
            treshold: a,
            pricing: s
        }) => (0, t.jsxs)("div", {
            className: "flex h-full flex-col justify-between rounded-lg bg-gray-100 p-6 lg:w-96 dark:bg-gray-800",
            children: [(0, t.jsxs)("div", {
                className: "grow pb-8",
                children: [(0, t.jsx)("div", {
                    className: "loco-text-heading-sm mb-8 text-black dark:text-white",
                    children: e
                }), (0, t.jsx)("div", {
                    children: l?.map((l, a) => (0, t.jsx)("div", {
                        className: "flex flex-col pb-8",
                        children: (0, t.jsx)(r, {
                            title: l.title,
                            content: l.content,
                            listStyle: l.listStyle
                        })
                    }, `card-plan-${e}-${a}`))
                }), (0, t.jsx)(r, {
                    title: a?.title || "",
                    content: a?.content || ""
                })]
            }), (0, t.jsx)("div", {
                className: "min-h-[6rem]",
                children: (0, t.jsx)(r, {
                    title: s?.title || "",
                    content: s?.content || ""
                })
            })]
        }),
        i = ({
            theme: e = "light",
            cards: a = []
        }) => {
            let r = (0, l.default)({
                dark: "dark" === e
            });
            return (0, t.jsx)("section", {
                className: r,
                children: (0, t.jsx)("div", {
                    className: "bg-white pt-8 pb-20 dark:bg-black",
                    children: (0, t.jsx)("div", {
                        className: "container flex flex-col flex-wrap gap-2 lg:flex-row lg:justify-center",
                        children: a.map((e, l) => (0, t.jsx)("div", {
                            children: (0, t.jsx)(s, {
                                ...e
                            })
                        }, `card-plan-${e.title}-${l}`))
                    })
                })
            })
        };
    var n = e.i(722990);
    e.s(["default", 0, ({
        isHidden: e,
        theme: l,
        cards: a
    }) => e ? null : (0, t.jsx)(i, {
        theme: "dark" === l ? "dark" : "light",
        cards: a.map(e => ({
            title: e.title ?? "",
            descriptions: e.descriptions?.map(e => {
                let l = e?.listStyle === "plus" ? "plus" : "check";
                return {
                    title: e?.title ?? "",
                    content: (0, t.jsx)(n.PortableText, {
                        value: e?.content
                    }),
                    listStyle: l
                }
            }) || [],
            treshold: {
                title: e?.treshold?.title ?? "",
                content: (0, t.jsx)(n.PortableText, {
                    value: e.treshold?.content
                })
            },
            pricing: {
                title: e.pricing?.title ?? "",
                content: (0, t.jsx)(n.PortableText, {
                    value: e.pricing?.content
                })
            }
        }))
    })], 123849)
}, 14452, e => {
    "use strict";
    var t = e.i(210139),
        l = e.i(722978);
    e.s(["default", 0, ({
        children: e,
        className: a = "",
        tag: r = "div"
    }) => {
        let s = (0, l.default)("loco-text-heading-sm mb-4", a);
        return (0, t.jsx)(r, {
            className: s,
            children: e
        })
    }], 14452)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ebdcfb1d-ed72-5af5-b4b0-8edb82d783c8")
    } catch (e) {}
}();
//# debugId=ebdcfb1d-ed72-5af5-b4b0-8edb82d783c8