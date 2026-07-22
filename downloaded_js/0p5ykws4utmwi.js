(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 584266, 817916, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(829150),
        r = e.i(433519),
        l = e.i(3931),
        i = e.i(722978),
        n = e.i(526826),
        s = e.i(749583),
        o = e.i(595388),
        c = e.i(407325),
        d = e.i(183062),
        u = e.i(604082),
        f = e.i(783078),
        h = e.i(430215);
    let g = {
            initial: {
                y: 5,
                opacity: 0
            },
            open: e => ({
                y: 0,
                opacity: 1,
                transition: {
                    duration: .35,
                    ease: [.25, 1, .5, 1],
                    delay: .05 * e
                }
            }),
            closed: {
                y: 5,
                opacity: 0,
                transition: {
                    duration: .5,
                    ease: [.25, 1, .5, 1]
                }
            }
        },
        m = {
            initial: {
                height: 0
            },
            open: {
                height: "auto",
                transition: {
                    duration: .5,
                    ease: [.25, 1, .5, 1]
                }
            },
            closed: {
                height: 0,
                transition: {
                    duration: .5,
                    ease: [.25, 1, .5, 1]
                }
            }
        },
        p = {
            initial: {
                rotate: -90
            },
            open: {
                rotate: 0,
                transition: {
                    duration: .35,
                    ease: [.25, 1, .5, 1]
                }
            },
            closed: {
                rotate: -90,
                transition: {
                    duration: .35,
                    ease: [.25, 1, .5, 1]
                }
            }
        };
    var x = e.i(766930);
    let v = (0, l.forwardRef)(({
            nav: e,
            action: a,
            isSticky: r,
            indexOfActiveLink: l,
            variant: n
        }, o) => {
            let c = (0, i.default)("alternateNavigation relative flex h-12 w-full bg-gray-900", {
                "justify-center": "centered" === n,
                "justify-stretch": "default" === n
            });
            return (0, t.jsx)("div", {
                className: c,
                ref: o,
                children: (0, t.jsx)("div", {
                    className: (0, i.default)("z-40 h-12 bg-gray-900 md:block", {
                        "fixed top-11 mt-1 bg-transparent": r,
                        "absolute top-0 py-1": !r,
                        "w-full": "default" === n
                    }),
                    children: (0, t.jsx)("div", {
                        className: "container h-full",
                        children: (0, t.jsxs)("div", {
                            className: (0, i.default)("flex h-full items-center justify-between rounded-md px-2 transition-colors duration-150", {
                                "bg-gray-900": !r,
                                "bg-[rgba(0,0,0,0.5)] backdrop-blur-sm": r
                            }),
                            children: [(0, t.jsx)("div", {
                                className: "h-full w-full shrink-1",
                                children: (0, t.jsx)("ul", {
                                    className: "flex h-full w-full items-center",
                                    children: e.map((e, a) => (0, t.jsx)(k, {
                                        label: e.label,
                                        href: e.href,
                                        target: e.target,
                                        active: l === a
                                    }, `alternate-navigation-element-${e.label}-${a}`))
                                })
                            }), a && (0, t.jsx)("div", {
                                className: "shrink-0",
                                children: (0, t.jsx)(s.default, {
                                    href: a.href,
                                    target: a.target,
                                    size: "small",
                                    rounded: !0,
                                    hasArrow: !0,
                                    children: a.label
                                })
                            })]
                        })
                    })
                })
            })
        }),
        b = (0, l.forwardRef)(({
            isSticky: e,
            nav: a,
            indexOfActiveLink: r,
            title: s
        }, o) => {
            let [c, d] = (0, l.useState)(!1);
            return s ? (0, t.jsx)("div", {
                className: "alternateNavigation relative h-12 w-full bg-gray-900",
                ref: o,
                children: (0, t.jsx)("div", {
                    className: (0, i.default)("z-40 mt-1 h-12 w-full bg-gray-900 md:block", {
                        "fixed top-[4.5rem] bg-transparent": e,
                        "absolute top-0": !e
                    }),
                    children: (0, t.jsx)("div", {
                        className: "container",
                        children: (0, t.jsx)("div", {
                            className: (0, i.default)("flex h-full items-center justify-between rounded-md px-3 transition-colors duration-150", {
                                "bg-gray-900": !e,
                                "bg-[rgba(0,0,0,0.65)] backdrop-blur-sm": e
                            }),
                            children: (0, t.jsxs)("div", {
                                className: "w-full",
                                children: [(0, t.jsxs)(n.m.button, {
                                    animate: c ? "open" : "closed",
                                    className: "flex w-full items-center justify-between py-3",
                                    onClick: () => {
                                        d(!c)
                                    },
                                    children: [(0, t.jsx)("span", {
                                        className: "text-sm font-medium text-white",
                                        children: null == r || c ? s : a[r].label
                                    }), (0, t.jsx)(y, {})]
                                }), (0, t.jsx)(n.m.ul, {
                                    className: "overflow-hidden",
                                    initial: "initial",
                                    animate: c ? "open" : "closed",
                                    variants: m,
                                    children: a.map(({
                                        label: e,
                                        href: a,
                                        target: l
                                    }, i) => (0, t.jsx)(j, {
                                        label: e,
                                        href: a,
                                        target: l,
                                        active: r === i,
                                        index: i,
                                        isOpen: c,
                                        onClick: () => {
                                            d(!1)
                                        }
                                    }, `alternate-navigation-element-${e}-${i}`))
                                })]
                            })
                        })
                    })
                })
            }) : null
        }),
        y = () => (0, t.jsxs)(n.m.svg, {
            variants: p,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, t.jsx)("g", {
                clipPath: "url(#clip0_5706_918)",
                children: (0, t.jsx)("path", {
                    id: "Vector",
                    d: "M12 6.5C12.568 6.5 12.8647 7.15733 12.522 7.582L12.4713 7.638L8.47133 11.638C8.35654 11.7528 8.2038 11.8217 8.04179 11.8319C7.87977 11.8421 7.7196 11.7928 7.59133 11.6933L7.52867 11.638L3.52867 7.638L3.47333 7.57533L3.43733 7.524L3.40133 7.46L3.39 7.436L3.372 7.39133L3.35067 7.31933L3.344 7.284L3.33733 7.244L3.33467 7.206V7.12733L3.338 7.08867L3.344 7.04867L3.35067 7.014L3.372 6.942L3.39 6.89733L3.43667 6.80933L3.48 6.74933L3.52867 6.69533L3.59133 6.64L3.64267 6.604L3.70667 6.568L3.73067 6.55667L3.77533 6.53867L3.84733 6.51733L3.88267 6.51067L3.92267 6.504L3.96067 6.50133L12 6.5Z",
                    fill: "white"
                })
            }), (0, t.jsx)("defs", {
                children: (0, t.jsx)("clipPath", {
                    id: "clip0_5706_918",
                    children: (0, t.jsx)("rect", {
                        width: "16",
                        height: "16",
                        fill: "white",
                        transform: "translate(0 0.5)"
                    })
                })
            })]
        }),
        j = e => {
            let a = (0, l.useRef)(null),
                {
                    linkProps: r
                } = (0, c.useLink)(e, a),
                {
                    focusProps: s
                } = (0, d.useFocusRing)(),
                {
                    label: f,
                    href: h,
                    target: m,
                    locale: p,
                    localePrefix: x,
                    active: v,
                    index: b,
                    isOpen: y
                } = e;
            return (0, t.jsx)("li", {
                className: "border-t border-[#ffffff14]",
                children: (0, t.jsxs)(n.m.div, {
                    custom: b,
                    variants: g,
                    initial: "initial",
                    animate: y ? "open" : "closed",
                    className: "flex w-full items-center justify-between",
                    children: [(0, t.jsx)(o.Link, {
                        ...(0, u.mergeProps)(r, s),
                        ref: a,
                        href: h,
                        target: m ?? "_self",
                        locale: p,
                        className: "py-3 text-sm font-medium text-white",
                        localePrefix: x,
                        children: f
                    }), (0, t.jsx)("div", {
                        className: (0, i.default)("mr-1 h-2 w-2 rounded-full transition-colors duration-300", {
                            "bg-blue": v
                        })
                    })]
                })
            }, `n_${f}`)
        },
        k = e => {
            let a = (0, l.useRef)(null),
                {
                    linkProps: r
                } = (0, c.useLink)(e, a),
                {
                    isFocusVisible: n,
                    focusProps: s
                } = (0, d.useFocusRing)(),
                {
                    label: f,
                    href: h,
                    target: g,
                    locale: m,
                    localePrefix: p,
                    active: x
                } = e,
                v = (0, i.default)("alternateNavigation_item relative h-full flex items-center px-2 !text-[0.75rem] font-medium group outline-hidden text-gray-200 transition-colors duration-150", {
                    "a11y-ring rounded-xs": n
                }, {
                    active: x,
                    "text-white": x,
                    "text-gray-200": !x
                });
            return (0, t.jsx)("li", {
                className: "h-full",
                children: (0, t.jsx)(o.Link, {
                    ...(0, u.mergeProps)(r, s),
                    ref: a,
                    href: h,
                    target: g ?? "_self",
                    locale: m,
                    className: v,
                    localePrefix: p,
                    children: f
                })
            })
        };
    v.displayName = "DesktopNav", b.displayName = "MobileNav";
    let A = ({
        variant: e = "default",
        title: a,
        nav: r,
        action: i
    }) => {
        let n = (0, h.default)(`(max-width: ${f.default.Large}px)`),
            s = (0, l.useRef)(null),
            [o, c] = (0, l.useState)(null),
            [d, u] = (0, l.useState)([]),
            [g, m] = (0, l.useState)(!1),
            [p, y] = (0, l.useState)(!1),
            [j, k] = (0, l.useState)(!1),
            A = (0, l.useRef)(0),
            w = () => {
                let e = r.map(e => e.href);
                u([...document.querySelectorAll("a[data-anchor-item]")].filter(t => {
                    let a = t.getAttribute("id");
                    return a && e.find(e => e.includes(a))
                }).map(e => ({
                    top: e.offsetTop + 43
                })))
            },
            _ = () => {
                let e;
                s.current && (s.current.offsetTop < window.scrollY ? y(!0) : y(!1)), A.current > window.scrollY && p ? m(!0) : A.current < window.scrollY && m(!1), A.current = window.scrollY, s.current && (s.current.offsetTop > window.innerHeight && !g ? k(!0) : k(!1)), e = null, d.forEach((t, a) => {
                    window.scrollY > t.top && (e = a)
                }), c(e)
            };
        return (0, l.useEffect)(() => {
            let e = document.querySelector("nav");
            e && (e.ariaHidden = String(j))
        }, [j]), (0, l.useLayoutEffect)(() => (w(), window.addEventListener("resize", w), () => {
            window.removeEventListener("resize", w)
        }), []), (0, l.useEffect)(() => (A.current = window.scrollY, window.addEventListener("scroll", _), () => {
            window.removeEventListener("scroll", _)
        }), [g, d, n]), (0, t.jsx)(x.default, {
            children: n ? (0, t.jsx)(b, {
                ref: s,
                nav: r,
                isSticky: p,
                indexOfActiveLink: o,
                title: a
            }) : (0, t.jsx)(v, {
                ref: s,
                nav: r,
                action: i,
                isSticky: p,
                indexOfActiveLink: o,
                variant: e
            })
        })
    };
    e.s(["default", 0, ({
        title: e,
        navigation: l,
        action: i,
        theme: n,
        isHidden: s
    }) => {
        let {
            state: o
        } = (0, r.default)();
        return (0, t.jsx)(t.Fragment, {
            children: !s && (0, t.jsx)(A, {
                title: e ?? "",
                action: (e => {
                    if (!e?.link) return null;
                    let t = e?.link.linkReference?.href.current;
                    return {
                        label: e?.title ?? "",
                        href: t ? (0, a.default)(t, o, e?.extendLink) : "",
                        target: e?.link.linkReference?.target === "_blank" ? "_blank" : "_self"
                    }
                })(i),
                nav: l.map(e => ({
                    label: e?.title ?? "",
                    href: e?.link?.linkReference?.href.current ?? "",
                    target: e?.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                }))
            })
        })
    }], 584266);
    let w = ({
        id: e,
        className: a
    }) => (0, t.jsx)("div", {
        id: e,
        "data-anchor-item": !0,
        className: a,
        style: {
            marginTop: "-120px",
            paddingTop: "120px"
        }
    });
    e.s(["default", 0, ({
        anchorID: e
    }) => (0, t.jsx)(w, {
        id: e ?? ""
    })], 817916)
}, 814507, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(722978),
        r = e.i(146911);
    e.s(["default", 0, ({
        children: e,
        action: l,
        rounded: i = !1,
        isContained: n = !1,
        className: s = ""
    }) => (0, t.jsx)("div", {
        className: (0, a.clsx)("md:px-auto w-full px-4 transition-colors", {
            "bg-gray-100 dark:bg-gray-900": !n
        }, {
            "rounded-br-lg rounded-bl-lg": i && !n
        }, s),
        children: (0, t.jsxs)("div", {
            className: (0, a.clsx)("container m-auto py-3 text-xs leading-4 font-medium text-gray-900 transition-colors dark:text-gray-100", {
                "text-center": i && !n
            }, {
                "my-6 rounded-lg bg-gray-100 dark:bg-gray-900": n
            }),
            children: [e, (0, t.jsx)(r.default, {
                className: "mx-auto mt-0 ml-2 inline-block [&>div>span]:text-xs",
                href: l.href,
                target: l.target,
                size: "tiny",
                underline: !0,
                "data-link-location": "AnnouncementBanner",
                "data-link-id": "announcement-banner-action",
                children: l.title
            })]
        })
    })], 814507)
}, 776910, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(814507);
    e.s(["default", 0, ({
        title: e,
        action: r,
        isContained: l = !1,
        theme: i,
        isHidden: n
    }) => {
        let s;
        return (0, t.jsx)(t.Fragment, {
            children: !n && (0, t.jsx)("section", {
                className: "dark" === i ? "dark" : "",
                children: (s = r?.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self", (0, t.jsx)(a.default, {
                    isContained: l,
                    action: {
                        title: r?.text || "",
                        href: r?.fieldLink?.linkReference?.href?.current || "",
                        target: s
                    },
                    children: e
                }))
            })
        })
    }], 776910)
}, 616073, (e, t, a) => {
    var r = e.r(843031);
    t.exports = r && new r
}, 647503, (e, t, a) => {
    var r = e.r(240046),
        l = e.r(616073);
    t.exports = l ? function(e, t) {
        return l.set(e, t), e
    } : r
}, 808690, (e, t, a) => {
    var r = e.r(878524),
        l = Object.create;
    t.exports = function() {
        function e() {}
        return function(t) {
            if (!r(t)) return {};
            if (l) return l(t);
            e.prototype = t;
            var a = new e;
            return e.prototype = void 0, a
        }
    }()
}, 150692, (e, t, a) => {
    var r = e.r(808690),
        l = e.r(878524);
    t.exports = function(e) {
        return function() {
            var t = arguments;
            switch (t.length) {
                case 0:
                    return new e;
                case 1:
                    return new e(t[0]);
                case 2:
                    return new e(t[0], t[1]);
                case 3:
                    return new e(t[0], t[1], t[2]);
                case 4:
                    return new e(t[0], t[1], t[2], t[3]);
                case 5:
                    return new e(t[0], t[1], t[2], t[3], t[4]);
                case 6:
                    return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                case 7:
                    return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
            }
            var a = r(e.prototype),
                i = e.apply(a, t);
            return l(i) ? i : a
        }
    }
}, 154193, (e, t, a) => {
    var r = e.r(150692),
        l = e.r(78974);
    t.exports = function(e, t, a) {
        var i = 1 & t,
            n = r(e);
        return function t() {
            return (this && this !== l && this instanceof t ? n : e).apply(i ? a : this, arguments)
        }
    }
}, 669249, (e, t, a) => {
    var r = Math.max;
    t.exports = function(e, t, a, l) {
        for (var i = -1, n = e.length, s = a.length, o = -1, c = t.length, d = r(n - s, 0), u = Array(c + d), f = !l; ++o < c;) u[o] = t[o];
        for (; ++i < s;)(f || i < n) && (u[a[i]] = e[i]);
        for (; d--;) u[o++] = e[i++];
        return u
    }
}, 392010, (e, t, a) => {
    var r = Math.max;
    t.exports = function(e, t, a, l) {
        for (var i = -1, n = e.length, s = -1, o = a.length, c = -1, d = t.length, u = r(n - o, 0), f = Array(u + d), h = !l; ++i < u;) f[i] = e[i];
        for (var g = i; ++c < d;) f[g + c] = t[c];
        for (; ++s < o;)(h || i < n) && (f[g + a[s]] = e[i++]);
        return f
    }
}, 678304, (e, t, a) => {
    t.exports = function(e, t) {
        for (var a = e.length, r = 0; a--;) e[a] === t && ++r;
        return r
    }
}, 631347, (e, t, a) => {
    t.exports = function() {}
}, 698686, (e, t, a) => {
    function r(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 0xffffffff, this.__views__ = []
    }
    r.prototype = e.r(808690)(e.r(631347).prototype), r.prototype.constructor = r, t.exports = r
}, 435673, (e, t, a) => {
    t.exports = function() {}
}, 560579, (e, t, a) => {
    var r = e.r(616073),
        l = e.r(435673);
    t.exports = r ? function(e) {
        return r.get(e)
    } : l
}, 293281, (e, t, a) => {
    t.exports = {}
}, 272640, (e, t, a) => {
    var r = e.r(293281),
        l = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        for (var t = e.name + "", a = r[t], i = l.call(r, t) ? a.length : 0; i--;) {
            var n = a[i],
                s = n.func;
            if (null == s || s == e) return n.name
        }
        return t
    }
}, 297211, (e, t, a) => {
    function r(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
    }
    r.prototype = e.r(808690)(e.r(631347).prototype), r.prototype.constructor = r, t.exports = r
}, 370592, (e, t, a) => {
    t.exports = function(e, t) {
        var a = -1,
            r = e.length;
        for (t || (t = Array(r)); ++a < r;) t[a] = e[a];
        return t
    }
}, 852109, (e, t, a) => {
    var r = e.r(698686),
        l = e.r(297211),
        i = e.r(370592);
    t.exports = function(e) {
        if (e instanceof r) return e.clone();
        var t = new l(e.__wrapped__, e.__chain__);
        return t.__actions__ = i(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
    }
}, 611309, (e, t, a) => {
    var r = e.r(698686),
        l = e.r(297211),
        i = e.r(631347),
        n = e.r(778116),
        s = e.r(394022),
        o = e.r(852109),
        c = Object.prototype.hasOwnProperty;

    function d(e) {
        if (s(e) && !n(e) && !(e instanceof r)) {
            if (e instanceof l) return e;
            if (c.call(e, "__wrapped__")) return o(e)
        }
        return new l(e)
    }
    d.prototype = i.prototype, d.prototype.constructor = d, t.exports = d
}, 610903, (e, t, a) => {
    var r = e.r(698686),
        l = e.r(560579),
        i = e.r(272640),
        n = e.r(611309);
    t.exports = function(e) {
        var t = i(e),
            a = n[t];
        if ("function" != typeof a || !(t in r.prototype)) return !1;
        if (e === a) return !0;
        var s = l(a);
        return !!s && e === s[0]
    }
}, 569923, (e, t, a) => {
    var r = e.r(647503);
    t.exports = e.r(911818)(r)
}, 434891, (e, t, a) => {
    var r = /\{\n\/\* \[wrapped with (.+)\] \*/,
        l = /,? & /;
    t.exports = function(e) {
        var t = e.match(r);
        return t ? t[1].split(l) : []
    }
}, 790131, (e, t, a) => {
    var r = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
    t.exports = function(e, t) {
        var a = t.length;
        if (!a) return e;
        var l = a - 1;
        return t[l] = (a > 1 ? "& " : "") + t[l], t = t.join(a > 2 ? ", " : " "), e.replace(r, "{\n/* [wrapped with " + t + "] */\n")
    }
}, 753269, (e, t, a) => {
    t.exports = function(e, t, a, r) {
        for (var l = e.length, i = a + (r ? 1 : -1); r ? i-- : ++i < l;)
            if (t(e[i], i, e)) return i;
        return -1
    }
}, 254849, (e, t, a) => {
    t.exports = function(e) {
        return e != e
    }
}, 193170, (e, t, a) => {
    t.exports = function(e, t, a) {
        for (var r = a - 1, l = e.length; ++r < l;)
            if (e[r] === t) return r;
        return -1
    }
}, 125863, (e, t, a) => {
    var r = e.r(753269),
        l = e.r(254849),
        i = e.r(193170);
    t.exports = function(e, t, a) {
        return t == t ? i(e, t, a) : r(e, l, a)
    }
}, 584058, (e, t, a) => {
    var r = e.r(125863);
    t.exports = function(e, t) {
        return !!(null == e ? 0 : e.length) && r(e, t, 0) > -1
    }
}, 621923, (e, t, a) => {
    var r = e.r(531766),
        l = e.r(584058),
        i = [
            ["ary", 128],
            ["bind", 1],
            ["bindKey", 2],
            ["curry", 8],
            ["curryRight", 16],
            ["flip", 512],
            ["partial", 32],
            ["partialRight", 64],
            ["rearg", 256]
        ];
    t.exports = function(e, t) {
        return r(i, function(a) {
            var r = "_." + a[0];
            t & a[1] && !l(e, r) && e.push(r)
        }), e.sort()
    }
}, 777948, (e, t, a) => {
    var r = e.r(434891),
        l = e.r(790131),
        i = e.r(108749),
        n = e.r(621923);
    t.exports = function(e, t, a) {
        var s = t + "";
        return i(e, l(s, n(r(s), a)))
    }
}, 713442, (e, t, a) => {
    var r = e.r(610903),
        l = e.r(569923),
        i = e.r(777948);
    t.exports = function(e, t, a, n, s, o, c, d, u, f) {
        var h = 8 & t;
        t |= h ? 32 : 64, 4 & (t &= ~(h ? 64 : 32)) || (t &= -4);
        var g = [e, t, s, h ? o : void 0, h ? c : void 0, h ? void 0 : o, h ? void 0 : c, d, u, f],
            m = a.apply(void 0, g);
        return r(e) && l(m, g), m.placeholder = n, i(m, e, t)
    }
}, 943203, (e, t, a) => {
    t.exports = function(e) {
        return e.placeholder
    }
}, 737022, (e, t, a) => {
    var r = e.r(370592),
        l = e.r(860059),
        i = Math.min;
    t.exports = function(e, t) {
        for (var a = e.length, n = i(t.length, a), s = r(e); n--;) {
            var o = t[n];
            e[n] = l(o, a) ? s[o] : void 0
        }
        return e
    }
}, 913599, (e, t, a) => {
    var r = "__lodash_placeholder__";
    t.exports = function(e, t) {
        for (var a = -1, l = e.length, i = 0, n = []; ++a < l;) {
            var s = e[a];
            (s === t || s === r) && (e[a] = r, n[i++] = a)
        }
        return n
    }
}, 141920, (e, t, a) => {
    var r = e.r(669249),
        l = e.r(392010),
        i = e.r(678304),
        n = e.r(150692),
        s = e.r(713442),
        o = e.r(943203),
        c = e.r(737022),
        d = e.r(913599),
        u = e.r(78974);
    t.exports = function e(t, a, f, h, g, m, p, x, v, b) {
        var y = 128 & a,
            j = 1 & a,
            k = 2 & a,
            A = 24 & a,
            w = 512 & a,
            _ = k ? void 0 : n(t);

        function N() {
            for (var L = arguments.length, R = Array(L), E = L; E--;) R[E] = arguments[E];
            if (A) var S = o(N),
                C = i(R, S);
            if (h && (R = r(R, h, g, A)), m && (R = l(R, m, p, A)), L -= C, A && L < b) {
                var T = d(R, S);
                return s(t, a, e, N.placeholder, f, R, T, x, v, b - L)
            }
            var B = j ? f : this,
                I = k ? B[t] : t;
            return L = R.length, x ? R = c(R, x) : w && L > 1 && R.reverse(), y && v < L && (R.length = v), this && this !== u && this instanceof N && (I = _ || n(I)), I.apply(B, R)
        }
        return N
    }
}, 50962, (e, t, a) => {
    var r = e.r(865799),
        l = e.r(150692),
        i = e.r(141920),
        n = e.r(713442),
        s = e.r(943203),
        o = e.r(913599),
        c = e.r(78974);
    t.exports = function(e, t, a) {
        var d = l(e);

        function u() {
            for (var l = arguments.length, f = Array(l), h = l, g = s(u); h--;) f[h] = arguments[h];
            var m = l < 3 && f[0] !== g && f[l - 1] !== g ? [] : o(f, g);
            return (l -= m.length) < a ? n(e, t, i, u.placeholder, void 0, f, m, void 0, void 0, a - l) : r(this && this !== c && this instanceof u ? d : e, this, f)
        }
        return u
    }
}, 890892, (e, t, a) => {
    var r = e.r(865799),
        l = e.r(150692),
        i = e.r(78974);
    t.exports = function(e, t, a, n) {
        var s = 1 & t,
            o = l(e);
        return function t() {
            for (var l = -1, c = arguments.length, d = -1, u = n.length, f = Array(u + c); ++d < u;) f[d] = n[d];
            for (; c--;) f[d++] = arguments[++l];
            return r(this && this !== i && this instanceof t ? o : e, s ? a : this, f)
        }
    }
}, 767257, (e, t, a) => {
    var r = e.r(669249),
        l = e.r(392010),
        i = e.r(913599),
        n = "__lodash_placeholder__",
        s = Math.min;
    t.exports = function(e, t) {
        var a = e[1],
            o = t[1],
            c = a | o,
            d = c < 131,
            u = 128 == o && 8 == a || 128 == o && 256 == a && e[7].length <= t[8] || 384 == o && t[7].length <= t[8] && 8 == a;
        if (!(d || u)) return e;
        1 & o && (e[2] = t[2], c |= 1 & a ? 0 : 4);
        var f = t[3];
        if (f) {
            var h = e[3];
            e[3] = h ? r(h, f, t[4]) : f, e[4] = h ? i(e[3], n) : t[4]
        }
        return (f = t[5]) && (h = e[5], e[5] = h ? l(h, f, t[6]) : f, e[6] = h ? i(e[5], n) : t[6]), (f = t[7]) && (e[7] = f), 128 & o && (e[8] = null == e[8] ? t[8] : s(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = c, e
    }
}, 860205, (e, t, a) => {
    var r = /\s/;
    t.exports = function(e) {
        for (var t = e.length; t-- && r.test(e.charAt(t)););
        return t
    }
}, 798430, (e, t, a) => {
    var r = e.r(860205),
        l = /^\s+/;
    t.exports = function(e) {
        return e ? e.slice(0, r(e) + 1).replace(l, "") : e
    }
}, 868922, (e, t, a) => {
    var r = e.r(798430),
        l = e.r(878524),
        i = e.r(692558),
        n = 0 / 0,
        s = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        d = parseInt;
    t.exports = function(e) {
        if ("number" == typeof e) return e;
        if (i(e)) return n;
        if (l(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = l(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = r(e);
        var a = o.test(e);
        return a || c.test(e) ? d(e.slice(2), a ? 2 : 8) : s.test(e) ? n : +e
    }
}, 682437, (e, t, a) => {
    var r = e.r(868922),
        l = 1 / 0;
    t.exports = function(e) {
        return e ? (e = r(e)) === l || e === -l ? (e < 0 ? -1 : 1) * 17976931348623157e292 : e == e ? e : 0 : 0 === e ? e : 0
    }
}, 16379, (e, t, a) => {
    var r = e.r(682437);
    t.exports = function(e) {
        var t = r(e),
            a = t % 1;
        return t == t ? a ? t - a : t : 0
    }
}, 852580, (e, t, a) => {
    var r = e.r(647503),
        l = e.r(154193),
        i = e.r(50962),
        n = e.r(141920),
        s = e.r(890892),
        o = e.r(560579),
        c = e.r(767257),
        d = e.r(569923),
        u = e.r(777948),
        f = e.r(16379),
        h = Math.max;
    t.exports = function(e, t, a, g, m, p, x, v) {
        var b = 2 & t;
        if (!b && "function" != typeof e) throw TypeError("Expected a function");
        var y = g ? g.length : 0;
        if (y || (t &= -97, g = m = void 0), x = void 0 === x ? x : h(f(x), 0), v = void 0 === v ? v : f(v), y -= m ? m.length : 0, 64 & t) {
            var j = g,
                k = m;
            g = m = void 0
        }
        var A = b ? void 0 : o(e),
            w = [e, t, a, g, m, j, k, p, x, v];
        if (A && c(w, A), e = w[0], t = w[1], a = w[2], g = w[3], m = w[4], (v = w[9] = void 0 === w[9] ? b ? 0 : e.length : h(w[9] - y, 0)) || !(24 & t) || (t &= -25), t && 1 != t) _ = 8 == t || 16 == t ? i(e, t, v) : 32 != t && 33 != t || m.length ? n.apply(void 0, w) : s(e, t, a, g);
        else var _ = l(e, t, a);
        return u((A ? r : d)(_, w), e, t)
    }
}, 414462, (e, t, a) => {
    var r = e.r(852580);

    function l(e, t, a) {
        var i = r(e, 16, void 0, void 0, void 0, void 0, void 0, t = a ? void 0 : t);
        return i.placeholder = l.placeholder, i
    }
    l.placeholder = {}, t.exports = l
}, 105836, (e, t, a) => {
    t.exports = function(e, t) {
        for (var a = -1, r = t.length, l = e.length; ++a < r;) e[l + a] = t[a];
        return e
    }
}, 351263, (e, t, a) => {
    var r = e.r(328042),
        l = e.r(410090),
        i = e.r(778116),
        n = r ? r.isConcatSpreadable : void 0;
    t.exports = function(e) {
        return i(e) || l(e) || !!(n && e && e[n])
    }
}, 601362, (e, t, a) => {
    var r = e.r(105836),
        l = e.r(351263);
    t.exports = function e(t, a, i, n, s) {
        var o = -1,
            c = t.length;
        for (i || (i = l), s || (s = []); ++o < c;) {
            var d = t[o];
            a > 0 && i(d) ? a > 1 ? e(d, a - 1, i, n, s) : r(s, d) : n || (s[s.length] = d)
        }
        return s
    }
}, 840779, (e, t, a) => {
    var r = e.r(601362);
    t.exports = function(e) {
        return (null == e ? 0 : e.length) ? r(e, 1) : []
    }
}, 650016, (e, t, a) => {
    var r = e.r(840779),
        l = e.r(184414),
        i = e.r(108749);
    t.exports = function(e) {
        return i(l(e, void 0, r), e + "")
    }
}, 814654, (e, t, a) => {
    var r = e.r(297211),
        l = e.r(650016),
        i = e.r(560579),
        n = e.r(272640),
        s = e.r(778116),
        o = e.r(610903);
    t.exports = function(e) {
        return l(function(t) {
            var a = t.length,
                l = a,
                c = r.prototype.thru;
            for (e && t.reverse(); l--;) {
                var d = t[l];
                if ("function" != typeof d) throw TypeError("Expected a function");
                if (c && !u && "wrapper" == n(d)) var u = new r([], !0)
            }
            for (l = u ? l : a; ++l < a;) {
                var f = n(d = t[l]),
                    h = "wrapper" == f ? i(d) : void 0;
                u = h && o(h[0]) && 424 == h[1] && !h[4].length && 1 == h[9] ? u[n(h[0])].apply(u, h[3]) : 1 == d.length && o(d) ? u[f]() : u.thru(d)
            }
            return function() {
                var e = arguments,
                    r = e[0];
                if (u && 1 == e.length && s(r)) return u.plant(r).value();
                for (var l = 0, i = a ? t[l].apply(this, e) : r; ++l < a;) i = t[l].call(this, i);
                return i
            }
        })
    }
}, 116657, (e, t, a) => {
    t.exports = e.r(814654)()
}, 775041, e => {
    "use strict";
    var t, a = e.i(3931),
        r = e.i(414462),
        l = e.i(116657);
    let i = {
        categories: [],
        subcategories: [],
        selectedSubcategory: null,
        selectedCategory: "",
        allSubcategoriesLabel: ""
    };
    var n = ((t = {}).SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY", t.SET_SUBCATEGORIES = "SET_SUBCATEGORIES", t.SET_SELECTED_SUBCATEGORY = "SET_SELECTED_SUBCATEGORY", t.SET_ALL_SUBCATEGORIES_LABEL = "SET_ALL_SUBCATEGORIES_LABEL", t.INIT_FROM_URL_PARAMS = "INIT_FROM_URL_PARAMS", t);
    let s = (0, a.createContext)([i, () => {}]);
    s.displayName = "FiltersContext";
    let o = (0, r.default)((e, t) => {
        let {
            type: a,
            payload: r
        } = t;
        switch (a) {
            case "SET_SELECTED_CATEGORY": {
                let t, {
                        categoryId: a,
                        subcategoryId: i
                    } = r,
                    {
                        subcategories: n,
                        allSubcategoriesLabel: s = "",
                        localizedAllSubcategoriesLabel: c
                    } = e.categories.find(({
                        _id: e
                    }) => e === a) || {},
                    d = n ?? [];
                if (void 0 === i) {
                    let e = d.find(e => e.makeDefaultLandingSubcategory);
                    t = e?._id ?? null
                } else t = i;
                return (0, l.default)(o({
                    type: "SET_SUBCATEGORIES",
                    payload: d
                }), o({
                    type: "SET_SELECTED_SUBCATEGORY",
                    payload: t
                }), o({
                    type: "SET_ALL_SUBCATEGORIES_LABEL",
                    payload: c ?? s
                }), e => ({
                    ...e,
                    selectedCategory: a
                }))(e)
            }
            case "SET_SUBCATEGORIES":
                return {
                    ...e, subcategories: r
                };
            case "SET_SELECTED_SUBCATEGORY":
                return {
                    ...e, selectedSubcategory: r
                };
            case "SET_ALL_SUBCATEGORIES_LABEL":
                return {
                    ...e, allSubcategoriesLabel: r
                };
            case "INIT_FROM_URL_PARAMS": {
                let {
                    categoryParam: t,
                    subcategoryParam: a
                } = r, l = e.categories.find(({
                    label: e
                }) => e?.toLowerCase() === t) || e.categories[0];
                if (!l) return e;
                let i = l.subcategories ?? [],
                    {
                        _id: n,
                        allSubcategoriesLabel: s = "",
                        localizedAllSubcategoriesLabel: o
                    } = l,
                    c = null;
                if (a) {
                    let e = i.find(e => e.label?.toLowerCase() === a);
                    c = e?._id ?? null
                }
                if (null === c) {
                    let e = i.find(e => e.makeDefaultLandingSubcategory);
                    c = e?._id ?? null
                }
                return {
                    ...e,
                    selectedCategory: n,
                    subcategories: i,
                    selectedSubcategory: c,
                    allSubcategoriesLabel: o ?? s
                }
            }
            default:
                return e
        }
    });
    e.s(["FiltersActionType", () => n, "FiltersContext", 0, s, "default", 0, e => (0, a.useReducer)(o, {
        ...i,
        ...e
    }, e => {
        let t = e.categories[0];
        if (!t) return e;
        let a = t.subcategories ?? [],
            {
                _id: r,
                allSubcategoriesLabel: l = "",
                localizedAllSubcategoriesLabel: i
            } = t,
            n = a.find(e => e.makeDefaultLandingSubcategory);
        return {
            ...e,
            selectedCategory: r,
            subcategories: a,
            selectedSubcategory: n?._id ?? null,
            allSubcategoriesLabel: i ?? l
        }
    })])
}, 131564, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(749583),
        r = e.i(722978);
    e.s(["default", 0, ({
        theme: e = "light",
        actions: l,
        description: i,
        title: n,
        padding: s = !0,
        variant: o = "center",
        richText: c
    }) => {
        let d = (0, r.default)({
            dark: "dark" === e
        });
        return (0, t.jsx)("div", {
            className: d,
            children: (0, t.jsx)("div", {
                className: "dark:bg-black",
                children: (0, t.jsxs)("div", {
                    className: `container flex flex-col ${"center"===o&&"items-center text-center"} ${s&&"pt-14 pb-12 md:pt-24"}`,
                    children: [(0, t.jsx)("div", {
                        className: "max-w-3xl",
                        children: n && (0, t.jsx)("h2", {
                            className: "loco-text-heading-md !font-nohemi",
                            children: n
                        })
                    }), (i || c) && (0, t.jsxs)("div", {
                        className: (0, r.default)("loco-text-body-lg [&_a]:text-blue mt-6 text-gray-500", "center" === o || "left" === o ? "max-w-5xl" : "max-w-3xl"),
                        children: [i, c]
                    }), l && (0, t.jsx)("div", {
                        className: "mt-8 flex justify-center gap-4",
                        children: l.map((e, r) => {
                            let l = `title-description-block-action-${e.title}-${r}`;
                            return 0 === r ? (0, t.jsx)(a.default, {
                                href: e.href,
                                target: e.target,
                                outlined: !0,
                                rounded: !0,
                                hasArrow: !0,
                                "data-link-location": "TitleDescriptionBlock",
                                "data-link-id": `title-description-block-action-primary-${r}`,
                                children: e.title
                            }, l) : (0, t.jsx)(a.default, {
                                href: e.href,
                                target: e.target,
                                variant: "secondary",
                                rounded: !0,
                                hasArrow: !0,
                                "data-link-location": "TitleDescriptionBlock",
                                "data-link-id": `title-description-block-action-secondary-${r}`,
                                children: e.title
                            }, l)
                        })
                    })]
                })
            })
        })
    }], 131564)
}, 913890, 577702, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(3931),
        r = e.i(722978),
        l = e.i(567134),
        i = e.i(825610),
        n = e.i(749583);
    let s = ({
        title: e,
        subtitle: a,
        description: r,
        action: l,
        blockKey: s,
        index: o
    }) => {
        let c = s || i.trackingLocation.uniteCardSubscription,
            d = void 0 !== o ? `${c}-${o}` : c;
        return (0, t.jsxs)("div", {
            className: "flex h-80 flex-col justify-between rounded-lg bg-gray-900 p-4 text-white",
            children: [(0, t.jsx)("h3", {
                className: "loco-text-heading-sm -mt-2 md:mr-20",
                children: e
            }), (0, t.jsx)("div", {
                className: "loco-text-body-lg opacity-70",
                children: a
            }), (0, t.jsxs)("div", {
                className: "flex grow flex-col justify-between",
                children: [(0, t.jsx)("div", {
                    className: "loco-text-body mt-8 opacity-70",
                    children: r
                }), (0, t.jsx)("div", {
                    children: (0, t.jsx)(n.default, {
                        href: l?.href,
                        target: l?.target,
                        variant: "primary",
                        outlined: !0,
                        rounded: !0,
                        hasArrow: !0,
                        "data-link-location": d,
                        "data-link-id": `${d}-action`,
                        children: l?.label
                    })
                })]
            })]
        })
    };
    var o = e.i(131564);
    let c = ({
        theme: e = "light",
        title: c,
        description: d,
        filters: u,
        actions: f,
        cards: h,
        variant: g = "column",
        blockKey: m,
        cardsHeading: p
    }) => {
        let [x, v] = (0, a.useState)(u?.[0]?.value || ""), b = (e, a) => {
            let r = {
                uniteCard: l.default,
                cardSubscription: s
            } [e?.type];
            return (0, t.jsx)("div", {
                className: "w-full px-0 py-1 md:w-1/2 md:px-1 md:py-1 lg:w-1/3",
                children: (0, t.jsx)(r, {
                    ...e,
                    variant: g,
                    blockKey: m || i.trackingLocation.uniteCards,
                    titleTag: p,
                    index: a
                })
            }, `${e.title}-${a}`)
        }, y = (0, r.default)({
            dark: "dark" === e || "collapsiblecards" === e
        }), j = (0, r.default)({
            "bg-white dark:bg-black": "light" === e || "dark" === e,
            "bg-transparent": "collapsiblecards" === e
        }), k = (0, r.default)("w-full flex flex-wrap justify-center", {
            "mt-8 pb-10": (!c || !d) && "collapsiblecards" !== e
        });
        return (0, t.jsx)("section", {
            className: y,
            children: (0, t.jsx)("div", {
                className: j,
                children: (0, t.jsxs)("div", {
                    className: "collapsiblecards" === e ? "flex flex-col items-center" : "container flex flex-col items-center",
                    children: [(c || d) && (0, t.jsx)(o.default, {
                        title: c,
                        description: d
                    }), (u && u.length > 0 || f && f.length > 0) && (0, t.jsxs)("div", {
                        className: "mb-8 flex w-full flex-wrap justify-center gap-4",
                        children: [u.map((e, a) => (0, t.jsx)(n.default, {
                            rounded: !0,
                            outlined: !0,
                            onPress: () => {
                                e.onPress && e.onPress(), v(e.value)
                            },
                            active: x.includes(e.value),
                            "data-link-location": m || i.trackingLocation.uniteCardsFilter,
                            "data-link-id": `${m||i.trackingLocation.uniteCardsFilter}-filter-${a}`,
                            children: e.title
                        }, `filter-${e}-${a}`)), f.map((e, a) => (0, t.jsx)(n.default, {
                            href: e.href,
                            rounded: !0,
                            outlined: !0,
                            hasArrow: !0,
                            "data-link-location": m || i.trackingLocation.uniteCardsAction,
                            "data-link-id": `${m||i.trackingLocation.uniteCardsAction}-action-${a}`,
                            children: e.title
                        }, `action-${e}-${a}`))]
                    }), (0, t.jsx)("div", {
                        className: k,
                        children: x ? h.filter(e => e.tags?.includes(x)).map(b) : h.map(b)
                    })]
                })
            })
        })
    };
    e.s(["default", 0, c], 577702);
    var d = e.i(803695),
        u = e.i(998569),
        f = e.i(430215),
        h = e.i(783078);
    let g = ({
        theme: e = "light",
        slides: i,
        variant: n = "short",
        blockKey: o,
        title: c
    }) => {
        let [g, m] = (0, a.useState)(0), p = (0, a.useRef)(null), x = (0, f.default)(`(min-width: ${h.default.Large}px)`), v = "gdc2026" === n, b = (0, r.default)({
            dark: "dark" === e
        }), y = (0, a.useCallback)((e, t) => {
            m(t)
        }, []), j = (0, a.useCallback)(() => {
            p.current && p.current.slickPrev()
        }, []), k = (0, a.useCallback)(() => {
            p.current && p.current.slickNext()
        }, []), A = {
            dots: !1,
            infinite: !1,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: !1,
            beforeChange: y,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1
                }
            }]
        }, w = (e, a) => {
            let r = {
                uniteCard: l.default,
                cardSubscription: s
            } [e.type];
            return (0, t.jsx)("div", {
                className: v ? "col-span-12 h-full" : "col-span-12 md:col-span-6 lg:col-span-4",
                children: (0, t.jsx)(r, {
                    ...e,
                    variant: v ? "horizontal" : n,
                    blockKey: `${o}-${a}`,
                    titleTag: "p"
                })
            }, `carousel-card-${o}-${a}-${e.title}`)
        }, _ = () => {
            let a = x ? 2 : 1,
                l = i.length - a + 1;
            return (0, t.jsx)("div", {
                className: "flex gap-2",
                children: Array.from({
                    length: l
                }).map((a, l) => (0, t.jsx)("button", {
                    className: (0, r.default)("h-2 w-2 rounded-full transition-all", g === l ? "bg-white" : "dark" === e ? "bg-gray-600" : "bg-gray-300"),
                    "aria-label": `Go to slide ${l+1}`,
                    "aria-current": g === l ? "true" : "false"
                }, l))
            })
        }, N = x ? 2 : 1, L = i.length - N + 1, R = 0 === g, E = g >= L - 1, S = x && i.length > 2 || !x && i.length > 1;
        return v ? (0, t.jsx)("section", {
            className: b,
            children: (0, t.jsx)("div", {
                className: "carousel-cards py-16 dark:bg-black",
                children: (0, t.jsxs)("div", {
                    className: "container",
                    children: [(0, t.jsxs)("div", {
                        className: "mb-8 hidden items-center gap-8 lg:flex",
                        children: [(0, t.jsx)("div", {
                            className: "flex flex-1 items-center",
                            children: c && (0, t.jsx)("h2", {
                                className: "loco-text-heading-xs text-left",
                                children: c
                            })
                        }), S && (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)("div", {
                                className: "flex flex-1 items-center justify-center",
                                children: _()
                            }), (0, t.jsxs)("div", {
                                className: "flex flex-1 items-center justify-end gap-2",
                                children: [(0, t.jsx)(u.default, {
                                    direction: "left",
                                    onPress: j,
                                    ariaLabel: "Previous slide",
                                    variant: "primary",
                                    isDisabled: R
                                }), (0, t.jsx)(u.default, {
                                    onPress: k,
                                    ariaLabel: "Next slide",
                                    variant: "primary",
                                    isDisabled: E
                                })]
                            })]
                        })]
                    }), c && (0, t.jsx)("h2", {
                        className: "loco-text-heading-xl mb-6 text-left lg:hidden",
                        children: c
                    }), (0, a.createElement)(d.default, {
                        ...A,
                        ref: p,
                        key: `slider-${i.length}`,
                        className: "overflow-hidden"
                    }, i.map(w)), S && (0, t.jsxs)("div", {
                        className: "mt-8 flex flex-col items-center gap-4 lg:hidden",
                        children: [_(), (0, t.jsxs)("div", {
                            className: "flex gap-2",
                            children: [(0, t.jsx)(u.default, {
                                direction: "left",
                                onPress: j,
                                ariaLabel: "Previous slide",
                                variant: "primary",
                                isDisabled: R
                            }), (0, t.jsx)(u.default, {
                                onPress: k,
                                ariaLabel: "Next slide",
                                variant: "primary",
                                isDisabled: E
                            })]
                        })]
                    })]
                })
            })
        }) : (0, t.jsx)("section", {
            className: b,
            children: (0, t.jsx)("div", {
                className: "carousel-cards py-16 dark:bg-black",
                children: (0, t.jsxs)("div", {
                    className: "container",
                    children: [(0, t.jsx)("div", {
                        className: "mb-8 flex items-center justify-between",
                        children: S && (0, t.jsxs)(t.Fragment, {
                            children: [_(), (0, t.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, t.jsx)(u.default, {
                                    direction: "left",
                                    onPress: j,
                                    ariaLabel: "Previous slide",
                                    variant: "primary",
                                    isDisabled: R
                                }), (0, t.jsx)(u.default, {
                                    onPress: k,
                                    ariaLabel: "Next slide",
                                    variant: "primary",
                                    isDisabled: E
                                })]
                            })]
                        })
                    }), (0, a.createElement)(d.default, {
                        ...A,
                        ref: p,
                        key: `slider-${i.length}`,
                        className: "overflow-visible"
                    }, i.map(w))]
                })
            })
        })
    };
    var m = e.i(869324),
        p = e.i(115219);
    let x = [{
        src: e.i(154038).default,
        width: 3840,
        height: 2160,
        blurWidth: 8,
        blurHeight: 5,
        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAALCAAFAAgBAREA/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/APLZ9Vnvz+/AYDoDzX//2Q=="
    }, {
        src: e.i(594333).default,
        width: 3840,
        height: 2160,
        blurWidth: 8,
        blurHeight: 5,
        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAALCAAFAAgBAREA/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/APJp1W3tNqjPm9Se2K//2Q=="
    }, {
        src: e.i(522500).default,
        width: 3840,
        height: 2160,
        blurWidth: 8,
        blurHeight: 5,
        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAALCAAFAAgBAREA/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/APONHVbm4jikXKyOAa//2Q=="
    }];
    e.s(["default", 0, ({
        theme: e,
        title: a,
        description: r,
        filters: l,
        actions: i,
        variant: n,
        isCarousel: s,
        cards: o,
        cardsBlog: d,
        newsItems: u,
        blogItems: f,
        blockKey: h,
        isHidden: v,
        cardsHeading: b
    }) => {
        let {
            mapFormActions: y,
            renderModal: j
        } = (0, p.useFormModal)(o?.map(e => e.action).filter(Boolean)), k = (e, t = 0, a = !1) => {
            let r = !!e?.action?.form,
                l = null;
            e?.action ? l = {
                label: e.action?.title,
                href: r ? "" : e.action?.link?.linkReference?.href.current || "",
                target: e.action?.link?.linkReference?.target === "_blank" ? "_blank" : "_self",
                ...r ? {
                    renderModal: () => j({
                        label: e.action?.title ?? "",
                        form: e.action.form
                    })
                } : {}
            } : e?.pageUrl && (l = {
                href: e?.pageUrl?.link?.href?.current || "",
                target: e?.pageUrl?.target === "_blank" ? "_blank" : "_self"
            });
            let i = null;
            if (e?.image) i = {
                src: e.image.file?.asset.url,
                alt: e.image.alt,
                placeholder: e.image.file?.asset.metadata?.lqip
            };
            else if (e?.featuredImage) i = {
                src: e.featuredImage?.file?.asset?.url,
                alt: e.title,
                placeholder: e.featuredImage?.file?.asset?.metadata?.lqip
            };
            else if (a) {
                let a = x[t % 3];
                i = {
                    src: a.src,
                    alt: e.title || "Unity News",
                    placeholder: a.blurDataURL
                }
            }
            return {
                type: e._type || "uniteCard",
                title: e.title,
                subtitle: e.subtitle || "",
                description: e.description || e?.seo?.teaserText || e?.seo?.description || "",
                image: i,
                video: {
                    src: e.brandfolder?.muxHLSURL || ""
                },
                action: l,
                tags: e.tags || [],
                videoInline: e?.videoInline
            }
        }, A = s ? (() => {
            if (!o || 0 === o.length) return d?.length && d?.length > 0 ? d?.map((e, t) => k(e, t)) : [];
            let e = 0,
                t = 0;
            return o.map((a, r) => {
                if ("cardDynamic" === a._type) {
                    if ("news" === a.contentType && u && e < u.length) {
                        let t = u[e],
                            a = e;
                        return e++, k(t, a, !0)
                    }
                    if ("blog" === a.contentType && f && t < f.length) {
                        let e = f[t];
                        return t++, k(e, r)
                    }
                    return null
                }
                return k(a, r)
            }).filter(e => null !== e)
        })() : o?.length && o?.length > 0 ? o?.filter(e => "cardDynamic" !== e._type).map((e, t) => k(e, t)) : d?.length && d?.length > 0 ? d?.map((e, t) => k(e, t)) : [], w = l?.map((e, t) => ({
            title: e.title,
            value: e.value,
            onPress: () => {
                (0, m.default)({
                    event: "userEvent",
                    event_name: "navigation_click",
                    properties: {
                        navigation_type: "internal",
                        navigation_click_text: e.title,
                        navigation_href: window.location.href,
                        navigation_link_location: `cards_block_filter_${t+1}`
                    }
                })
            }
        })) || [];
        return s ? (0, t.jsx)(g, {
            theme: "dark" === e ? "dark" : "light",
            variant: "stacked" === n || "column" === n || "short" === n || "gdc2026" === n ? n : "column",
            slides: A,
            blockKey: h,
            title: a || void 0
        }) : (0, t.jsx)(t.Fragment, {
            children: !v && (0, t.jsx)(c, {
                theme: "dark" === e ? "dark" : "collapsiblecards" === e ? "collapsiblecards" : "light",
                title: a || "",
                description: r,
                filters: w,
                actions: i?.map(e => ({
                    title: e?.title || "",
                    href: e.link?.linkReference?.href.current || "",
                    target: e.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                })) || [],
                variant: "stacked" === n || "column" === n || "short" === n ? n : "column",
                cards: A,
                blockKey: h,
                cardsHeading: "div" === b || "h2" === b || "h3" === b || "h4" === b ? b : a ? "h3" : "h2"
            })
        })
    }], 913890)
}, 4390, e => {
    "use strict";
    let t = e.i(459923).default;
    e.s(["default", 0, t])
}, 185462, e => {
    "use strict";
    let t = e.i(201763).default;
    e.s(["default", 0, t])
}, 691156, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(3931),
        r = e.i(722978);
    e.s(["default", 0, ({
        children: e,
        title: l,
        isExpanded: i = !1,
        blockKey: n
    }) => {
        let [s, o] = (0, a.useState)(i), c = () => {
            o(!s)
        }, d = (0, r.default)("accordion-content [&_p]:mb-4 [&_ul]:mb-4", {
            "transition ease-in-out opacity-100 h-auto w-5/6 pb-4 loco-text-body text-gray-800 dark:text-gray-100": s,
            "transition ease-in-out opacity-0 h-0 overflow-hidden": !s
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
                "aria-expanded": s,
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
                        children: s ? "-" : "+"
                    })]
                })
            }), (0, t.jsx)("div", {
                className: d,
                "aria-hidden": !s,
                children: e
            })]
        })
    }], 691156)
}, 692627, 569074, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(655105),
        r = e.i(722978);
    let l = ({
        theme: e = "light",
        quote: l,
        author: i
    }) => {
        let n = (0, r.default)({
            dark: "dark" === e
        });
        return (0, t.jsx)("blockquote", {
            className: n,
            children: (0, t.jsx)("div", {
                className: "py-12 md:py-40 dark:bg-black",
                children: (0, t.jsx)("div", {
                    className: "container",
                    children: (0, t.jsxs)("div", {
                        className: "grid lg:grid-cols-12 lg:gap-2",
                        children: [l && (0, t.jsx)("div", {
                            className: "lg:col-start-4 lg:col-end-13 lg:row-start-1",
                            children: (0, t.jsx)("p", {
                                className: "quote-item loco-text-heading-md",
                                children: l
                            })
                        }), i && (0, t.jsxs)("div", {
                            className: "mt-4 flex flex-col lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:mt-2",
                            children: [i.image && i.image.src && (0, t.jsx)("div", {
                                className: "overflow-hidden rounded",
                                children: (0, t.jsx)(a.default, {
                                    src: i.image.src,
                                    placeholder: "blur",
                                    blurDataURL: i.image.placeholder,
                                    alt: i.image.alt || "",
                                    width: 200,
                                    height: 250,
                                    className: "w-full max-w-[12rem] object-cover"
                                })
                            }), (0, t.jsxs)("footer", {
                                className: "mt-2 max-w-[12rem] lg:mt-8",
                                children: [i.name && (0, t.jsx)("span", {
                                    className: "loco-text-body-md mt-2 block",
                                    children: i.name
                                }), i.title && (0, t.jsx)("span", {
                                    className: "loco-text-body-sm mt-1 block dark:text-gray-300",
                                    children: i.title
                                })]
                            })]
                        })]
                    })
                })
            })
        })
    };
    e.s(["default", 0, ({
        theme: e,
        quote: a,
        author: r,
        isHidden: i
    }) => {
        let n = {
            name: r?.name || "",
            title: r?.title || "",
            image: {
                src: r?.image?.file?.asset.url || "",
                placeholder: r?.image?.file?.asset.metadata?.lqip || "",
                alt: r?.image?.alt || ""
            }
        };
        return (0, t.jsx)(t.Fragment, {
            children: !i && (0, t.jsx)(l, {
                quote: a,
                author: n,
                theme: "dark" === e ? "dark" : "light"
            })
        })
    }], 692627);
    let i = ({
        children: e,
        theme: a = "light",
        alignment: l = "left",
        subtitle: i
    }) => {
        let n = (0, r.default)({
                dark: "dark" === a
            }),
            s = (0, r.default)("col-span-12", {
                "lg:col-start-4": "offset" === l || i,
                "lg:col-span-8": "left" === l && !i,
                "lg:col-span-6": i
            });
        return (0, t.jsx)("section", {
            className: n,
            children: (0, t.jsx)("div", {
                className: "bg-white py-14 md:py-32 dark:bg-black",
                children: (0, t.jsxs)("div", {
                    className: "container grid grid-cols-12 text-black dark:text-white",
                    children: [i && (0, t.jsx)("div", {
                        className: "loco-caption-lg-bold col-span-5 mb-3 uppercase lg:col-span-2 lg:mt-2",
                        children: i
                    }), (0, t.jsx)("div", {
                        className: `loco-text-heading-md ${s}`,
                        children: e
                    })]
                })
            })
        })
    };
    e.s(["default", 0, ({
        theme: e,
        text: a,
        alignment: r,
        subtitle: l,
        isHidden: n
    }) => (0, t.jsx)(t.Fragment, {
        children: !n && (0, t.jsx)(i, {
            theme: "dark" === e ? "dark" : "light",
            alignment: "offset" === r ? "offset" : "left",
            subtitle: l || "",
            children: a
        })
    })], 569074)
}, 686916, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(722990);
    let r = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "w-full bg-black",
        children: e
    });
    r.Content = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "footnote loco-text-body-sm container",
        children: e
    }), e.s(["default", 0, ({
        content: e,
        isHidden: l
    }) => (0, t.jsx)(t.Fragment, {
        children: !l && (0, t.jsx)(r, {
            children: (0, t.jsx)(r.Content, {
                children: (0, t.jsx)(a.PortableText, {
                    value: e,
                    components: e
                })
            })
        })
    })], 686916)
}, 789924, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(3931),
        r = e.i(595388),
        l = e.i(722978),
        i = e.i(749583),
        n = e.i(998569);
    let s = ({
            title: e,
            titleTag: s,
            description: o,
            action: c,
            fullWidth: d
        }) => {
            let [u, f] = (0, a.useState)(!1), h = "relative block border-t border-solid border-gray-200 dark:border-gray-700", g = (0, t.jsxs)("div", {
                className: (0, l.default)("grid gap-4 pt-2 pb-8 md:grid-cols-3", {
                    "md:grid-cols-[2fr_1fr_auto]": d
                }),
                children: [(0, t.jsx)(s || "h2", {
                    className: "loco-text-heading-xs",
                    children: e
                }), (0, t.jsx)("div", {
                    children: (0, t.jsx)("p", {
                        className: "loco-text-body-sm opacity-70",
                        children: o
                    })
                }), c && c?.label && (0, t.jsx)("div", {
                    className: "shrink-0 text-right",
                    children: (0, t.jsx)(i.default, {
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
                    children: (0, t.jsx)(n.default, {
                        variant: "primary"
                    })
                })]
            });
            return !c || c.disabled ? (0, t.jsx)("div", {
                className: h,
                children: g
            }) : (0, t.jsx)(r.Link, {
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
                children: g
            })
        },
        o = ({
            theme: e = "light",
            fullWidth: a = !1,
            features: r = []
        }) => {
            let i = (0, l.default)({
                dark: "dark" === e
            });
            return (0, t.jsx)("section", {
                className: i,
                children: (0, t.jsx)("div", {
                    className: "relative px-4 py-16 lg:pt-6 lg:pb-16 dark:bg-black",
                    children: (0, t.jsx)("div", {
                        className: "mx-auto max-w-[1800px] md:grid md:grid-cols-12 md:gap-2",
                        children: r && (0, t.jsx)("div", {
                            className: (0, l.default)("col-start-1 col-end-13 row-start-3 lg:col-end-13", {
                                "lg:col-start-4": !a
                            }),
                            children: (0, t.jsx)("div", {
                                className: "lg:grid lg:grid-cols-8 lg:gap-2",
                                children: (0, t.jsx)("div", {
                                    className: "lg:col-start-1 lg:col-end-9",
                                    children: r.map((e, r) => (0, t.jsx)(s, {
                                        fullWidth: a,
                                        titleTag: "p",
                                        ...e
                                    }, `feature-list-${r}`))
                                })
                            })
                        })
                    })
                })
            })
        };
    e.s(["default", 0, ({
        theme: e,
        features: a,
        isHidden: r,
        featuresBlog: l,
        fullWidth: i
    }) => {
        let n;
        n = a?.map(e => ({
            title: e?.title || "",
            description: e?.description || "",
            action: e?.action ? {
                label: e.action.title || "",
                href: e.action.link?.linkReference?.href.current || "",
                target: e.action.link?.linkReference?.target === "_blank" ? "_blank" : "_self",
                disabled: e.action.disabled
            } : null
        })) || [];
        let s = (e, t) => e?.length > t ? `${e.substring(0,t)}...` : e;
        return n?.length === 0 && (n = l?.map(e => ({
            title: e?.title || "",
            description: s(e?.seo?.teaserText, 250) || s(e?.seo?.description, 250) || "",
            action: e?.pageUrl?.link?.href?.current ? {
                label: "",
                href: e?.pageUrl?.link?.href?.current || "",
                target: e?.pageUrl?.link?.target === "_blank" ? "_blank" : "_self"
            } : null
        })) || []), (0, t.jsx)(t.Fragment, {
            children: !r && (0, t.jsx)(o, {
                theme: "dark" === e ? "dark" : "light",
                features: n,
                fullWidth: i
            })
        })
    }], 789924)
}, 679288, e => {
    "use strict";
    var t = e.i(3931);
    e.s(["default", 0, () => {
        let [e, a] = (0, t.useState)("Unknown");
        return (0, t.useEffect)(() => {
            let e = window.navigator.userAgent;
            e.includes("Win") && a("Windows"), e.includes("Mac") && a("Mac"), e.includes("Linux") && a("Linux")
        }, []), e
    }])
}, 457689, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(3931),
        r = e.i(722990),
        l = e.i(131564),
        i = e.i(679288);
    e.s(["default", 0, ({
        theme: e,
        variant: n,
        padding: s,
        title: o,
        description: c,
        richText: d,
        actions: u,
        isHidden: f,
        operatingSystem: h
    }) => {
        let g = (0, i.default)(),
            m = (0, a.useMemo)(() => u ? u.map(e => ({
                title: e?.title || "",
                href: e?.link?.linkReference?.href?.current || "",
                target: e?.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
            })) : [], [u]);
        return h && h !== g ? null : (0, t.jsx)(t.Fragment, {
            children: !f && (0, t.jsx)(l.default, {
                theme: "dark" === e ? "dark" : "light",
                variant: "center" === n ? "center" : "left",
                padding: s ?? !0,
                title: o,
                description: c ?? "",
                richText: (0, t.jsx)(r.PortableText, {
                    value: d
                }),
                actions: m
            })
        })
    }])
}, 68274, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(3931),
        r = e.i(185462);
    e.s(["default", 0, ({
        data: e,
        isHidden: l,
        theme: i
    }) => {
        let n = (0, a.useMemo)(() => e?.map(e => e.value?.text ? {
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
        }), [e]);
        return (0, t.jsx)(t.Fragment, {
            children: !l && (0, t.jsx)(r.default, {
                keyFigures: n,
                theme: "dark" === i ? "dark" : "light"
            })
        })
    }], 68274)
}, 794189, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(722978),
        r = e.i(3931),
        l = e.i(153348),
        i = e.i(955429),
        n = e.i(655105),
        s = e.i(828083),
        o = e.i(805518);
    let c = (0, s.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        d = ({
            image: e,
            video: s,
            layout: d,
            forcedAspectRatio: u = "none",
            richCaption: f
        }) => {
            let h = (0, r.useRef)(null),
                [g, m] = (0, r.useState)(!1),
                p = (0, l.useInView)(h),
                x = (0, i.useReducedMotion)(),
                v = (0, a.default)("", {
                    "max-w-lg": "small" === d,
                    "max-w-lg mx-auto": "small-center" === d,
                    "container grid lg:grid-cols-12 lg:gap-2": "offset" === d
                }),
                b = (0, a.default)("relative overflow-hidden rounded-2xl", {
                    "aspect-square": "1:1" === u,
                    "aspect-[4/3]": "4:3" === u,
                    "aspect-video": "16:9" === u
                }),
                y = (0, a.default)("absolute cover z-10 transition-opacity duration-500 object-cover", {
                    "opacity-0": g && !x && p && s?.src
                }),
                j = {
                    aspectRatio: "none" === u && e.dimensions?.width && e.dimensions?.height ? `${e.dimensions.width}/${e.dimensions.height}` : void 0
                };
            return (0, t.jsx)("div", {
                className: v,
                ref: h,
                children: (0, t.jsxs)("div", {
                    className: "offset" === d ? "lg:col-start-4 lg:col-end-13 lg:row-start-1" : "",
                    children: [(0, t.jsxs)("div", {
                        className: b,
                        style: j,
                        children: [(0, t.jsx)(n.default, {
                            src: e.src,
                            placeholder: "blur",
                            blurDataURL: e.placeholder,
                            fill: !0,
                            alt: e.alt ?? "",
                            className: y,
                            sizes: (() => {
                                switch (d) {
                                    case "small":
                                        return "32rem";
                                    case "offset":
                                        return "1440px";
                                    default:
                                        return "100vw"
                                }
                            })()
                        }), p && !x && s?.src && (0, t.jsx)(c, {
                            url: s.src,
                            playing: !0,
                            loop: !0,
                            muted: !0,
                            playsinline: !0,
                            width: "100%",
                            height: "100%",
                            className: "[&>video]:object-cover",
                            onReady: () => {
                                m(!0)
                            },
                            config: {
                                hlsOptions: {
                                    maxMaxBufferLength: 1,
                                    startLevel: 1
                                }
                            }
                        })]
                    }), f && (0, t.jsx)("div", {
                        className: "loco-text-body-sm mt-2 text-gray-500",
                        children: (0, t.jsx)(o.default, {
                            children: f
                        })
                    })]
                })
            })
        };
    var u = e.i(186114),
        f = e.i(195051);
    let h = ({
        provider: l,
        image: i,
        video: c,
        layout: d,
        buttonLabel: h,
        richCaption: g,
        blockKey: m,
        videoInline: p,
        blockedMessage: x,
        consentButtonLabel: v
    }) => {
        let b = (0, r.useRef)(null),
            [y, j] = (0, r.useState)(!1),
            k = null;
        "youtube" === l ? k = (0, s.default)(() => e.A(269100), {
            loadableGenerated: {
                modules: [346003]
            },
            ssr: !1
        }) : "brandfolder" === l && (k = (0, s.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }));
        let A = {};
        "brandfolder" === l && (A = {
            hlsOptions: {
                maxMaxBufferLength: 1,
                qualityStartLevel: 1
            }
        });
        let w = () => {
                j(!0)
            },
            _ = (0, a.default)("", {
                "max-w-lg": "small" === d,
                "max-w-lg mx-auto": "small-center" === d,
                "container grid lg:grid-cols-12 lg:gap-2": "offset" === d
            }),
            N = (0, a.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": y && c && c.src
            }),
            L = (0, a.default)("relative", {
                "lg:col-start-4 lg:col-end-13 lg:row-start-1": "offset" === d
            });
        return (0, t.jsx)("div", {
            className: _,
            ref: b,
            children: (0, t.jsxs)("div", {
                className: L,
                children: [(0, t.jsxs)("div", {
                    className: "relative aspect-video overflow-hidden rounded-2xl",
                    children: [i?.src && (0, t.jsxs)("div", {
                        className: N,
                        onClick: w,
                        children: [!p && (0, t.jsx)(u.default, {
                            handleIsPlaying: w,
                            className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                            label: h,
                            "data-link-location": `${m}-video-play`,
                            "data-link-id": `${m}-video-play`,
                            "data-link-type": "CTA"
                        }), (0, t.jsx)(n.default, {
                            src: i.src,
                            placeholder: "blur",
                            blurDataURL: i.placeholder,
                            fill: !0,
                            alt: i.alt ?? "",
                            className: "cover absolute object-cover brightness-75"
                        })]
                    }), c?.src && k && (0, t.jsx)(k, {
                        url: c.src,
                        playing: y,
                        loop: p,
                        muted: p,
                        playsinline: p,
                        width: "100%",
                        height: "100%",
                        className: "[&>video]:object-cover",
                        onReady: () => {
                            p && j(!0)
                        },
                        controls: !p,
                        config: A
                    }), c?.src?.includes("youtube.com") && (0, t.jsx)(f.default, {
                        blockedMessage: x,
                        consentButtonLabel: v
                    })]
                }), g && (0, t.jsx)("div", {
                    className: "loco-text-body-sm mt-2 text-gray-500",
                    children: (0, t.jsx)(o.default, {
                        children: g
                    })
                })]
            })
        })
    };
    var g = e.i(722990);
    e.s(["default", 0, ({
        mediaType: e,
        provider: r,
        brandfolder: l,
        youtube_url: i,
        image: n,
        theme: s,
        layout: o,
        aspectRatio: c,
        buttonLabel: u,
        videoInline: f,
        richCaption: m,
        blockKey: p,
        isHidden: x,
        consent: v
    }) => {
        let b = {
                type: e ?? "image",
                layout: o ?? "full",
                theme: s ?? "light",
                video: {
                    src: ("brandfolder" === r ? l?.muxHLSURL : i) ?? null
                },
                aspectRatio: c ?? "none",
                image: {
                    src: n?.file?.asset.url ?? "",
                    alt: n?.alt ?? "",
                    caption: n?.caption ?? "",
                    placeholder: n?.file?.asset.metadata?.lqip ?? "",
                    dimensions: {
                        width: n?.file?.asset?.metadata?.dimensions?.width ?? 0,
                        height: n?.file?.asset?.metadata?.dimensions?.height ?? 0
                    }
                },
                provider: r,
                buttonLabel: u,
                videoInline: f,
                richCaption: (0, t.jsx)(g.PortableText, {
                    value: m
                })
            },
            y = "full";
        "small" === o ? y = "small" : "small-center" === o ? y = "small-center" : "offset" === o && (y = "offset");
        let j = "none";
        ("1:1" === c || "16:9" === c || "4:3" === c) && (j = c);
        let k = (0, a.default)("py-16", {
                "dark bg-black": "dark" === b.theme
            }),
            A = (0, a.default)("container");
        return (0, t.jsx)(t.Fragment, {
            children: !x && (0, t.jsx)("div", {
                className: k,
                children: (0, t.jsx)("div", {
                    className: A,
                    children: "video" === b.type ? (0, t.jsx)(h, {
                        provider: "brandfolder" === r ? "brandfolder" : "youtube",
                        layout: y,
                        video: b.video,
                        image: b.image,
                        buttonLabel: b.buttonLabel,
                        richCaption: b.richCaption,
                        blockKey: p,
                        videoInline: b.videoInline,
                        blockedMessage: v?.blockedMessage,
                        consentButtonLabel: v?.consentButtonLabel || ""
                    }) : (0, t.jsx)(d, {
                        layout: y,
                        image: b.image,
                        forcedAspectRatio: j,
                        richCaption: b.richCaption
                    })
                })
            })
        })
    }], 794189)
}, 25665, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(3931),
        r = e.i(722990),
        l = e.i(655105),
        i = e.i(229696),
        n = e.i(805518),
        s = e.i(570133),
        o = e.i(210310),
        c = e.i(7075),
        d = e.i(775041),
        u = e.i(722978);
    let f = {
        types: {
            imageWithAlt: ({
                value: e
            }) => {
                let a = e?.file?.asset,
                    r = a?.metadata?.dimensions;
                return a?.url && r?.width && r?.height ? (0, t.jsx)(l.default, {
                    alt: e?.alt || "",
                    src: a.url,
                    width: r.width,
                    height: r.height,
                    className: "my-12"
                }) : null
            },
            table: ({
                value: e
            }) => (0, t.jsx)(i.default, {
                className: "my-12",
                children: e.tableContent || ""
            }),
            htmlTable: ({
                value: e
            }) => (0, t.jsx)(o.default, {
                table: e,
                hideTitle: !0
            }),
            anchor: ({
                value: e
            }) => (0, t.jsx)(c.Link, {
                id: e.anchorID,
                href: "",
                className: "md:absolute md:-mt-28"
            }),
            codeBlock: ({
                value: e
            }) => e.isHidden ? null : (0, t.jsx)(s.default, {
                code: e.code?.code,
                language: e.code?.language
            })
        },
        block: {
            h2: ({
                children: e
            }) => (0, t.jsx)("h2", {
                className: "loco-text-heading-xs! mb-6",
                children: e
            }),
            h3: ({
                children: e
            }) => (0, t.jsx)("h3", {
                className: "text-heading-sm!",
                children: e
            })
        },
        listItem: {
            number: ({
                children: e
            }) => (0, t.jsx)("li", {
                children: e
            }),
            bullet: ({
                children: e
            }) => (0, t.jsx)("li", {
                className: "list-disc",
                children: e
            })
        }
    };
    e.s(["default", 0, ({
        text: e,
        theme: l,
        layout: i,
        spacing: s,
        isHidden: o,
        productCategoryFilter: c
    }) => {
        let [h] = (0, a.useContext)(d.FiltersContext), {
            subcategories: g
        } = h.categories?.find(({
            _id: e
        }) => e === h.selectedCategory) || {}, m = null != h.selectedSubcategory ? (g || []).find(({
            _id: e
        }) => e === h.selectedSubcategory) : null, p = !c || c.categories?.find(e => e._id === h.selectedCategory) != null && (null == m || !c.subcategories || c.subcategories.some(({
            _id: e
        }) => e === h.selectedSubcategory)), x = (0, u.default)("dark:bg-black", {
            "py-8 md:py-12": "default" === s || "small" === s || !s,
            "py-16": "large" === s,
            "bg-black dark": "dark" === l
        }), v = (0, u.default)("", {
            container: "default" === i || !i,
            "container max-w-[60rem] mx-auto": "center" === i,
            "container grid lg:grid-cols-12 lg:gap-2": "offset" === i
        }), b = (0, u.default)("[&>*]:loco-text-body [&>*]:mb-4", {
            "lg:col-start-4 lg:col-end-10 lg:row-start-1": "offset" === i
        });
        return (0, t.jsx)(t.Fragment, {
            children: !o && p && (0, t.jsx)("section", {
                className: x,
                children: (0, t.jsx)("div", {
                    className: v,
                    children: (0, t.jsx)(n.default, {
                        className: b,
                        children: (0, t.jsx)(r.PortableText, {
                            value: e,
                            components: f
                        })
                    })
                })
            })
        })
    }], 25665)
}, 742958, 50184, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(722978),
        r = e.i(3931),
        l = e.i(749583),
        i = e.i(828083),
        n = e.i(153348),
        s = e.i(955429),
        o = e.i(655105);
    let c = (0, i.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        d = ({
            title: e,
            eyebrow: i,
            description: d,
            image: u,
            video: f,
            visualPlacement: h,
            action: g,
            blockKey: m,
            cardHeading: p = "p"
        }) => {
            let x = (0, r.useRef)(null),
                [v, b] = (0, r.useState)(!1),
                y = (0, n.useInView)(x, {
                    once: !0
                }),
                j = (0, s.useReducedMotion)(),
                k = (0, a.default)("bg-gray-100 relative h-full rounded-xl overflow-hidden dark:bg-gray-900", {
                    dark: "background" === h
                }),
                A = (0, a.default)("z-0", {
                    "absolute top-0 left-0 w-full h-full": "background" === h,
                    "aspect-video relative mt-8 -mb-8": "default" === h
                }, "background" === h ? "after:content after:absolute after:z-10 after:inset-0 after:bg-gradient-to-b after:from-10% after:from-black after:to-transparent after:opacity-75" : ""),
                w = (0, a.default)("z-10 transition-opacity duration-500 object-cover", {
                    "opacity-0": v && !j && y && f?.src,
                    "": "background" === h
                }),
                _ = (0, a.default)("absolute left-0 top-0 [&>video]:object-cover", {
                    "brightness-50 ": "background" === h
                });
            return (0, t.jsx)("div", {
                className: k,
                ref: x,
                children: (0, t.jsxs)("div", {
                    className: "flex h-full flex-col justify-between p-8",
                    children: [(0, t.jsxs)("div", {
                        className: "relative z-10",
                        children: [i && (0, t.jsx)("span", {
                            className: "loco-caption-sm mb-4 block opacity-70",
                            children: i
                        }), e && (0, t.jsx)(p, {
                            className: "loco-text-heading-xs",
                            children: e
                        }), d && (0, t.jsx)("p", {
                            className: "loco-text-body-sm mt-2 max-w-xs opacity-70",
                            children: d
                        }), (g?.href || g?.renderModal) && (0, t.jsx)("div", {
                            className: "mt-8",
                            children: g?.renderModal ? g.renderModal() : (0, t.jsx)(l.default, {
                                href: g.href,
                                rounded: !0,
                                outlined: !0,
                                hasArrow: !0,
                                "data-link-location": `${m}-action-${g.label}`,
                                "data-link-id": `${m}-action`,
                                "data-link-type": "CTA",
                                children: g.label
                            }, `action-${g.label}`)
                        })]
                    }), (0, t.jsxs)("div", {
                        className: A,
                        children: [u?.src && (0, t.jsx)(o.default, {
                            fill: !0,
                            alt: u.alt ?? "",
                            src: u.src,
                            className: w
                        }), y && !j && f?.src && (0, t.jsx)(c, {
                            url: f.src,
                            playing: f.autoplay ?? !0,
                            loop: !0,
                            muted: !0,
                            playsinline: !0,
                            width: "100%",
                            height: "100%",
                            className: _,
                            onReady: () => {
                                b(!0)
                            },
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
        },
        u = ({
            cards: e,
            blockKey: r,
            cardsHeading: l
        }) => {
            let i = (0, a.default)("bentoCards_grid", 1 === e.length && "is-single", e.length % 2 == 0 && "is-two-multiple", e.length % 3 == 0 && "is-three-multiple", function(e) {
                if (e <= 1) return !1;
                if (2 === e) return !0;
                if (e % 2 == 0) return !1;
                for (let t = 3; t <= Math.sqrt(e); t += 2)
                    if (e % t == 0) return !1;
                return !0
            }(e.length) && "is-prime");
            return (0, t.jsx)("div", {
                children: (0, t.jsx)("div", {
                    className: i,
                    children: e.map((e, a) => (0, t.jsx)("div", {
                        className: "bentoCards_item",
                        children: (0, t.jsx)(d, {
                            ...e,
                            blockKey: r,
                            cardHeading: l
                        })
                    }, `bento-card-${r}-${a}`))
                })
            })
        };
    var f = e.i(115219);
    e.s(["default", 0, ({
        theme: e,
        blockKey: r,
        isHidden: l,
        cards: i,
        bentoCardsHeading: n
    }) => {
        let {
            renderModal: s
        } = (0, f.useFormModal)(i?.map(e => e.actions?.[0]).filter(Boolean)), o = i?.map(e => {
            let t, a, r, l = e?.actions?.[0],
                i = !!l?.form;
            return {
                title: e.title,
                eyebrow: e.eyebrow || "",
                description: e.description || "",
                visualPlacement: "background" === e.visualPlacement ? "background" : "default",
                image: {
                    src: e?.image?.file?.asset.url ?? "",
                    alt: e?.image?.alt ?? "",
                    placeholder: e?.image?.file?.asset.metadata?.lqip ?? ""
                },
                video: {
                    src: e?.video?.muxHLSURL ?? ""
                },
                action: l ? (t = i ? "" : l.link?.linkReference?.href.current ?? "", a = l.link?.linkReference?.target === "_blank" ? "_blank" : "_self", r = {
                    label: l.title ?? "",
                    href: t,
                    target: a
                }, i ? {
                    ...r,
                    renderModal: () => {
                        let e = l.form || {},
                            t = {
                                title: e.title || "",
                                description: e.description || "",
                                fields: e.fields || [],
                                actions: e.actions || {},
                                sfdcIntegration: l.webinarFormParametersContent?.sfdcIntegration || {}
                            };
                        return s({
                            label: l.title ?? "",
                            form: t
                        })
                    }
                } : r) : null
            }
        }) ?? [], c = (0, a.default)({
            dark: "dark" === e
        });
        return (0, t.jsx)(t.Fragment, {
            children: !l && (0, t.jsx)("div", {
                className: c,
                children: (0, t.jsx)("div", {
                    className: "bg-white dark:bg-black",
                    children: (0, t.jsx)("div", {
                        className: "container py-16",
                        children: (0, t.jsx)(u, {
                            blockKey: r,
                            theme: "dark" === e ? "dark" : "light",
                            cards: o,
                            cardsHeading: "h2" === n || "h3" === n || "h4" === n ? n : "p"
                        })
                    })
                })
            })
        })
    }], 742958);
    let h = (0, i.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        g = ({
            videoShowcaseA: e,
            videoShowcaseB: l
        }) => {
            let i = (0, r.useRef)(null),
                [c, d] = (0, r.useState)(!1),
                [u, f] = (0, r.useState)(!1),
                g = (0, n.useInView)(i, {
                    once: !0
                }),
                m = (0, s.useReducedMotion)(),
                p = (0, a.default)("transition-opacity duration-500 object-cover", {
                    "opacity-0": c && !m && g && e?.image?.src
                }),
                x = (0, a.default)("transition-opacity duration-500 object-cover", {
                    "opacity-0": u && !m && g && e?.image?.src
                });
            return (0, t.jsxs)("div", {
                className: "w-full",
                ref: i,
                children: [(0, t.jsxs)("div", {
                    className: "relative mx-auto aspect-square max-w-[35vw]",
                    children: [e?.image?.src && (0, t.jsx)(o.default, {
                        fill: !0,
                        alt: e?.image?.alt ?? "",
                        src: e?.image?.src,
                        className: p
                    }), g && !m && e?.video?.src && (0, t.jsx)(h, {
                        url: e.video.src,
                        playing: e.video.autoplay ?? !0,
                        loop: !0,
                        muted: !0,
                        playsinline: !0,
                        width: "100%",
                        height: "100%",
                        className: "absolute top-0 left-0 [&>video]:object-cover",
                        onReady: () => {
                            d(!0)
                        },
                        config: {
                            hlsOptions: {
                                maxMaxBufferLength: 1,
                                startLevel: 1
                            }
                        }
                    })]
                }), (0, t.jsxs)("div", {
                    className: "relative mx-auto -mt-[7vw] aspect-video w-full shadow-[0px_0px_80px_rgba(0,0,0,0.7)]",
                    children: [l?.image?.src && (0, t.jsx)(o.default, {
                        fill: !0,
                        alt: l?.image?.alt ?? "",
                        src: l?.image?.src,
                        className: x
                    }), g && !m && l?.video?.src && (0, t.jsx)(h, {
                        url: l.video.src,
                        playing: l.video.autoplay ?? !0,
                        loop: !0,
                        muted: !0,
                        playsinline: !0,
                        width: "100%",
                        height: "100%",
                        className: "absolute top-0 left-0 [&>video]:object-cover",
                        onReady: () => {
                            f(!0)
                        },
                        config: {
                            hlsOptions: {
                                maxMaxBufferLength: 1,
                                startLevel: 1
                            }
                        }
                    })]
                })]
            })
        };
    e.s(["default", 0, ({
        isHidden: e,
        theme: r,
        videoShowcaseA: l,
        videoShowcaseB: i
    }) => {
        let n = {
                videoShowcaseA: {
                    image: {
                        src: l?.image?.asset.url ?? "",
                        placeholder: l?.image?.asset.metadata?.lqip ?? "",
                        alt: l?.imageAlt ?? ""
                    },
                    video: {
                        src: l?.brandfolder?.muxHLSURL ?? ""
                    }
                },
                videoShowcaseB: {
                    image: {
                        src: i?.image?.asset.url ?? "",
                        placeholder: i?.image?.asset.metadata?.lqip ?? "",
                        alt: i?.imageAlt ?? ""
                    },
                    video: {
                        src: i?.brandfolder?.muxHLSURL ?? ""
                    }
                }
            },
            s = (0, a.default)({
                dark: "dark" === r
            });
        return (0, t.jsx)(t.Fragment, {
            children: !e && (0, t.jsx)("div", {
                className: s,
                children: (0, t.jsx)("div", {
                    className: "bg-white dark:bg-gray-900",
                    children: (0, t.jsx)("div", {
                        className: "container py-28",
                        children: (0, t.jsx)(g, {
                            ...n
                        })
                    })
                })
            })
        })
    }], 50184)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f4a4c39f-1bde-5000-90d6-5fee9eb8f803")
    } catch (e) {}
}();
//# debugId=f4a4c39f-1bde-5000-90d6-5fee9eb8f803