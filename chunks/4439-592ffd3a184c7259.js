try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f825711d-3728-4773-bece-774809ad4f40", e._sentryDebugIdIdentifier = "sentry-dbid-f825711d-3728-4773-bece-774809ad4f40")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4439], {
        9568: (e, t, n) => {
            n.d(t, {
                N: () => c,
                Y: () => u
            });
            var r = n(36512),
                o = n(9746),
                l = n(64975),
                i = n(56882),
                s = n(11698);
            let u = s.forwardRef(({
                children: e,
                ...t
            }, n) => {
                let u = (0, s.useRef)(!1),
                    c = (0, s.useContext)(r.F);
                n = (0, o.U)(n || (null == c ? void 0 : c.ref));
                let a = (0, l.v)(c || {}, {
                    ...t,
                    ref: n,
                    register() {
                        u.current = !0, c && c.register()
                    }
                });
                return (0, i.w)(c, n), (0, s.useEffect)(() => {
                    u.current || (u.current = !0)
                }, []), s.createElement(r.F.Provider, {
                    value: a
                }, e)
            });

            function c({
                children: e
            }) {
                let t = (0, s.useMemo)(() => ({
                    register: () => {}
                }), []);
                return s.createElement(r.F.Provider, {
                    value: t
                }, e)
            }
        },
        13238: (e, t, n) => {
            n.d(t, {
                e: () => a
            });
            var r = n(95901),
                o = n(11698),
                l = n(49839),
                i = n(46906);

            function s(e, t) {
                if (e.button > 0) return !1;
                if (e.target) {
                    let t = e.target.ownerDocument;
                    if (!t || !t.documentElement.contains(e.target) || e.target.closest("[data-react-aria-top-layer]")) return !1
                }
                return !!t.current && !e.composedPath().includes(t.current)
            }
            var u = n(73039);
            let c = [];

            function a(e, t) {
                let {
                    onClose: n,
                    shouldCloseOnBlur: a,
                    isOpen: d,
                    isDismissable: f = !1,
                    isKeyboardDismissDisabled: h = !1,
                    shouldCloseOnInteractOutside: p
                } = e;
                (0, o.useEffect)(() => {
                    if (d && !c.includes(t)) return c.push(t), () => {
                        let e = c.indexOf(t);
                        e >= 0 && c.splice(e, 1)
                    }
                }, [d, t]);
                let m = () => {
                    c[c.length - 1] === t && n && n()
                };
                ! function(e) {
                    let {
                        ref: t,
                        onInteractOutside: n,
                        isDisabled: r,
                        onInteractOutsideStart: u
                    } = e, c = (0, o.useRef)({
                        isPointerDown: !1,
                        ignoreEmulatedMouseEvents: !1
                    }), a = (0, l.J)(e => {
                        n && s(e, t) && (u && u(e), c.current.isPointerDown = !0)
                    }), d = (0, l.J)(e => {
                        n && n(e)
                    });
                    (0, o.useEffect)(() => {
                        let e = c.current;
                        if (r) return;
                        let n = t.current,
                            o = (0, i.TW)(n);
                        if ("undefined" != typeof PointerEvent) {
                            let n = n => {
                                e.isPointerDown && s(n, t) && d(n), e.isPointerDown = !1
                            };
                            return o.addEventListener("pointerdown", a, !0), o.addEventListener("click", n, !0), () => {
                                o.removeEventListener("pointerdown", a, !0), o.removeEventListener("click", n, !0)
                            }
                        }
                    }, [t, r, a, d])
                }({
                    ref: t,
                    onInteractOutside: f && d ? e => {
                        (!p || p(e.target)) && (c[c.length - 1] === t && (e.stopPropagation(), e.preventDefault()), m())
                    } : void 0,
                    onInteractOutsideStart: e => {
                        (!p || p(e.target)) && c[c.length - 1] === t && (e.stopPropagation(), e.preventDefault())
                    }
                });
                let {
                    focusWithinProps: v
                } = (0, u.R)({
                    isDisabled: !a,
                    onBlurWithin: e => {
                        !(!e.relatedTarget || (0, r.Pu)(e.relatedTarget)) && (!p || p(e.relatedTarget)) && (null == n || n())
                    }
                });
                return {
                    overlayProps: {
                        onKeyDown: e => {
                            "Escape" !== e.key || h || e.nativeEvent.isComposing || (e.stopPropagation(), e.preventDefault(), m())
                        },
                        ...v
                    },
                    underlayProps: {
                        onPointerDown: e => {
                            e.target === e.currentTarget && e.preventDefault()
                        }
                    }
                }
            }
        },
        14630: (e, t, n) => {
            n.d(t, {
                P: () => o
            });
            var r = n(11698);

            function o(e, t, n) {
                let [o, l] = (0, r.useState)(e || t), i = (0, r.useRef)(void 0 !== e), s = void 0 !== e;
                (0, r.useEffect)(() => {
                    i.current, i.current = s
                }, [s]);
                let u = s ? e : o,
                    c = (0, r.useCallback)((e, ...t) => {
                        let r = (e, ...t) => {
                            n && !Object.is(u, e) && n(e, ...t), s || (u = e)
                        };
                        "function" == typeof e ? l((n, ...o) => {
                            let l = e(s ? u : n, ...o);
                            return (r(l, ...t), s) ? n : l
                        }) : (s || l(e), r(e, ...t))
                    }, [s, u, n]);
                return [u, c]
            }
        },
        24663: (e, t, n) => {
            n.d(t, {
                O: () => i,
                h: () => l
            });
            let r = new WeakMap,
                o = [];

            function l(e, t = document.body) {
                let n = new Set(e),
                    i = new Set,
                    s = e => {
                        for (let t of e.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]")) n.add(t);
                        let t = e => {
                                if (n.has(e) || e.parentElement && i.has(e.parentElement) && "row" !== e.parentElement.getAttribute("role")) return NodeFilter.FILTER_REJECT;
                                for (let t of n)
                                    if (e.contains(t)) return NodeFilter.FILTER_SKIP;
                                return NodeFilter.FILTER_ACCEPT
                            },
                            r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                                acceptNode: t
                            }),
                            o = t(e);
                        if (o === NodeFilter.FILTER_ACCEPT && u(e), o !== NodeFilter.FILTER_REJECT) {
                            let e = r.nextNode();
                            for (; null != e;) u(e), e = r.nextNode()
                        }
                    },
                    u = e => {
                        var t;
                        let n = null != (t = r.get(e)) ? t : 0;
                        ("true" !== e.getAttribute("aria-hidden") || 0 !== n) && (0 === n && e.setAttribute("aria-hidden", "true"), i.add(e), r.set(e, n + 1))
                    };
                o.length && o[o.length - 1].disconnect(), s(t);
                let c = new MutationObserver(e => {
                    for (let t of e)
                        if ("childList" === t.type && 0 !== t.addedNodes.length && ![...n, ...i].some(e => e.contains(t.target))) {
                            for (let e of t.removedNodes) e instanceof Element && (n.delete(e), i.delete(e));
                            for (let e of t.addedNodes)(e instanceof HTMLElement || e instanceof SVGElement) && ("true" === e.dataset.liveAnnouncer || "true" === e.dataset.reactAriaTopLayer) ? n.add(e) : e instanceof Element && s(e)
                        }
                });
                c.observe(t, {
                    childList: !0,
                    subtree: !0
                });
                let a = {
                    visibleNodes: n,
                    hiddenNodes: i,
                    observe() {
                        c.observe(t, {
                            childList: !0,
                            subtree: !0
                        })
                    },
                    disconnect() {
                        c.disconnect()
                    }
                };
                return o.push(a), () => {
                    for (let e of (c.disconnect(), i)) {
                        let t = r.get(e);
                        null != t && (1 === t ? (e.removeAttribute("aria-hidden"), r.delete(e)) : r.set(e, t - 1))
                    }
                    a === o[o.length - 1] ? (o.pop(), o.length && o[o.length - 1].observe()) : o.splice(o.indexOf(a), 1)
                }
            }

            function i(e) {
                let t = o[o.length - 1];
                if (t && !t.visibleNodes.has(e)) return t.visibleNodes.add(e), () => {
                    t.visibleNodes.delete(e)
                }
            }
        },
        31238: (e, t, n) => {
            n.d(t, {
                m: () => o
            });
            var r = n(62706);

            function o(e, t) {
                let n = e;
                for ((0, r.o)(n, t) && (n = n.parentElement); n && !(0, r.o)(n, t);) n = n.parentElement;
                return n || document.scrollingElement || document.documentElement
            }
        },
        40117: (e, t, n) => {
            n.d(t, {
                T: () => l
            });
            var r = n(11698),
                o = n(14630);

            function l(e) {
                let [t, n] = (0, o.P)(e.isOpen, e.defaultOpen || !1, e.onOpenChange), l = (0, r.useCallback)(() => {
                    n(!0)
                }, [n]), i = (0, r.useCallback)(() => {
                    n(!1)
                }, [n]), s = (0, r.useCallback)(() => {
                    n(!t)
                }, [n, t]);
                return {
                    isOpen: t,
                    setOpen: n,
                    open: l,
                    close: i,
                    toggle: s
                }
            }
        },
        59261: (e, t, n) => {
            let r;
            n.d(t, {
                H: () => d
            });
            var o = n(44885),
                l = n(4152),
                i = n(56502),
                s = n(31238);
            let u = "undefined" != typeof document && window.visualViewport,
                c = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]),
                a = 0;

            function d(e = {}) {
                let {
                    isDisabled: t
                } = e;
                (0, o.N)(() => {
                    if (!t) {
                        let e, t, n, o, d;
                        return 1 == ++a && (r = (0, l.un)() ? (n = null, o = (0, i.c)(h(document, "touchstart", n => {
                            ((e = (0, s.m)(n.target, !0)) !== document.documentElement || e !== document.body) && e instanceof HTMLElement && "auto" === window.getComputedStyle(e).overscrollBehavior && (t = f(e, "overscrollBehavior", "contain"))
                        }, {
                            passive: !1,
                            capture: !0
                        }), h(document, "touchmove", t => {
                            if (!e || e === document.documentElement || e === document.body) return void t.preventDefault();
                            e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && t.preventDefault()
                        }, {
                            passive: !1,
                            capture: !0
                        }), h(document, "touchend", () => {
                            t && t()
                        }, {
                            passive: !1,
                            capture: !0
                        }), h(document, "focus", e => {
                            var t;
                            let r = e.target;
                            ((t = r) instanceof HTMLInputElement && !c.has(t.type) || t instanceof HTMLTextAreaElement || t instanceof HTMLElement && t.isContentEditable) && ((() => {
                                if (n) return;
                                let e = window.pageXOffset,
                                    t = window.pageYOffset;
                                n = (0, i.c)(h(window, "scroll", () => {
                                    window.scrollTo(0, 0)
                                }), f(document.documentElement, "paddingRight", `${window.innerWidth-document.documentElement.clientWidth}px`), f(document.documentElement, "overflow", "hidden"), f(document.body, "marginTop", `-${t}px`), () => {
                                    window.scrollTo(e, t)
                                }), window.scrollTo(0, 0)
                            })(), r.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
                                r.style.transform = "", u && (u.height < window.innerHeight ? requestAnimationFrame(() => {
                                    p(r)
                                }) : u.addEventListener("resize", () => p(r), {
                                    once: !0
                                }))
                            }))
                        }, !0)), () => {
                            null == t || t(), null == n || n(), o()
                        }) : (d = window.innerWidth - document.documentElement.clientWidth, (0, i.c)(d > 0 && ("scrollbarGutter" in document.documentElement.style ? f(document.documentElement, "scrollbarGutter", "stable") : f(document.documentElement, "paddingRight", `${d}px`)), f(document.documentElement, "overflow", "hidden")))), () => {
                            0 == --a && r()
                        }
                    }
                }, [t])
            }

            function f(e, t, n) {
                let r = e.style[t];
                return e.style[t] = n, () => {
                    e.style[t] = r
                }
            }

            function h(e, t, n, r) {
                return e.addEventListener(t, n, r), () => {
                    e.removeEventListener(t, n, r)
                }
            }

            function p(e) {
                let t = document.scrollingElement || document.documentElement,
                    n = e;
                for (; n && n !== t;) {
                    let e = (0, s.m)(n);
                    if (e !== document.documentElement && e !== document.body && e !== n) {
                        let t = e.getBoundingClientRect().top,
                            r = n.getBoundingClientRect().top;
                        r > t + n.clientHeight && (e.scrollTop += r - t)
                    }
                    n = e.parentElement
                }
            }
        },
        62148: (e, t, n) => {
            n.d(t, {
                a: () => o,
                o: () => l
            });
            var r = n(11698);
            let o = new WeakMap;

            function l(e) {
                let {
                    triggerRef: t,
                    isOpen: n,
                    onClose: l
                } = e;
                (0, r.useEffect)(() => {
                    if (!n || null === l) return;
                    let e = e => {
                        let n = e.target;
                        if (!t.current || n instanceof Node && !n.contains(t.current) || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
                        let r = l || o.get(t.current);
                        r && r()
                    };
                    return window.addEventListener("scroll", e, !0), () => {
                        window.removeEventListener("scroll", e, !0)
                    }
                }, [n, l, t])
            }
        },
        62706: (e, t, n) => {
            n.d(t, {
                o: () => r
            });

            function r(e, t) {
                if (!e) return !1;
                let n = window.getComputedStyle(e),
                    r = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
                return r && t && (r = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), r
            }
        },
        67282: (e, t, n) => {
            n.d(t, {
                hJ: () => d,
                Se: () => f
            });
            var r = n(11698);
            let o = (0, r.createContext)({});
            var l = n(9568),
                i = n(95901),
                s = n(50319),
                u = n(42716),
                c = n(44885);
            let a = r.createContext(null);

            function d(e) {
                var t;
                let n = (0, u.wR)(),
                    {
                        portalContainer: c = n ? null : document.body,
                        isExiting: d
                    } = e,
                    [f, h] = (0, r.useState)(!1),
                    p = (0, r.useMemo)(() => ({
                        contain: f,
                        setContain: h
                    }), [f, h]),
                    {
                        getContainer: m
                    } = null != (t = (0, r.useContext)(o)) ? t : {};
                if (!e.portalContainer && m && (c = m()), !c) return null;
                let v = e.children;
                return e.disableFocusManagement || (v = r.createElement(i.n1, {
                    restoreFocus: !0,
                    contain: (e.shouldContainFocus || f) && !d
                }, v)), v = r.createElement(a.Provider, {
                    value: p
                }, r.createElement(l.N, null, v)), s.createPortal(v, c)
            }

            function f() {
                let e = (0, r.useContext)(a),
                    t = null == e ? void 0 : e.setContain;
                (0, c.N)(() => {
                    null == t || t(!0)
                }, [t])
            }
        },
        75284: (e, t, n) => {
            n.d(t, {
                RK: () => k
            });
            var r = n(22650);

            function o(e) {
                return "span" === e._type && "text" in e && "string" == typeof e.text && (typeof e.marks > "u" || Array.isArray(e.marks) && e.marks.every(e => "string" == typeof e))
            }

            function l(e) {
                return "string" == typeof e._type && "@" !== e._type[0] && (!("markDefs" in e) || !e.markDefs || Array.isArray(e.markDefs) && e.markDefs.every(e => "string" == typeof e._key)) && "children" in e && Array.isArray(e.children) && e.children.every(e => "object" == typeof e && "_type" in e)
            }

            function i(e) {
                return l(e) && "listItem" in e && "string" == typeof e.listItem && (typeof e.level > "u" || "number" == typeof e.level)
            }

            function s(e) {
                return "@list" === e._type
            }

            function u(e) {
                return "@span" === e._type
            }

            function c(e) {
                return "@text" === e._type
            }
            let a = ["strong", "em", "code", "underline", "strike-through"];

            function d(e, t, n) {
                if (!o(e) || !e.marks || !e.marks.length) return [];
                let r = e.marks.slice(),
                    l = {};
                return r.forEach(e => {
                    l[e] = 1;
                    for (let r = t + 1; r < n.length; r++) {
                        let t = n[r];
                        if (t && o(t) && Array.isArray(t.marks) && -1 !== t.marks.indexOf(e)) l[e]++;
                        else break
                    }
                }), r.sort((e, t) => (function(e, t, n) {
                    let r = e[t],
                        o = e[n];
                    if (r !== o) return o - r;
                    let l = a.indexOf(t),
                        i = a.indexOf(n);
                    return l !== i ? l - i : t.localeCompare(n)
                })(l, e, t))
            }

            function f(e, t, n) {
                return {
                    _type: "@list",
                    _key: `${e._key||`${t}`}-parent`,
                    mode: n,
                    level: e.level || 1,
                    listItem: e.listItem,
                    children: [e]
                }
            }

            function h(e, t) {
                let n = t.level || 1,
                    r = t.listItem || "normal",
                    l = "string" == typeof t.listItem;
                if (s(e) && (e.level || 1) === n && l && (e.listItem || "normal") === r) return e;
                if (!("children" in e)) return;
                let i = e.children[e.children.length - 1];
                return i && !o(i) ? h(i, t) : void 0
            }
            var p = n(11698);
            let m = {
                    textDecoration: "underline"
                },
                v = (e, t) => `[@portabletext/react] Unknown ${e}, specify a component for it in the \`components.${t}\` prop`,
                y = e => v(`block type "${e}"`, "types");

            function N(e) {
                console.warn(e)
            }
            let E = {
                    display: "none"
                },
                b = {
                    types: {},
                    block: {
                        normal: ({
                            children: e
                        }) => (0, r.jsx)("p", {
                            children: e
                        }),
                        blockquote: ({
                            children: e
                        }) => (0, r.jsx)("blockquote", {
                            children: e
                        }),
                        h1: ({
                            children: e
                        }) => (0, r.jsx)("h1", {
                            children: e
                        }),
                        h2: ({
                            children: e
                        }) => (0, r.jsx)("h2", {
                            children: e
                        }),
                        h3: ({
                            children: e
                        }) => (0, r.jsx)("h3", {
                            children: e
                        }),
                        h4: ({
                            children: e
                        }) => (0, r.jsx)("h4", {
                            children: e
                        }),
                        h5: ({
                            children: e
                        }) => (0, r.jsx)("h5", {
                            children: e
                        }),
                        h6: ({
                            children: e
                        }) => (0, r.jsx)("h6", {
                            children: e
                        })
                    },
                    marks: {
                        em: ({
                            children: e
                        }) => (0, r.jsx)("em", {
                            children: e
                        }),
                        strong: ({
                            children: e
                        }) => (0, r.jsx)("strong", {
                            children: e
                        }),
                        code: ({
                            children: e
                        }) => (0, r.jsx)("code", {
                            children: e
                        }),
                        underline: ({
                            children: e
                        }) => (0, r.jsx)("span", {
                            style: m,
                            children: e
                        }),
                        "strike-through": ({
                            children: e
                        }) => (0, r.jsx)("del", {
                            children: e
                        }),
                        link: ({
                            children: e,
                            value: t
                        }) => (0, r.jsx)("a", {
                            href: null == t ? void 0 : t.href,
                            children: e
                        })
                    },
                    list: {
                        number: ({
                            children: e
                        }) => (0, r.jsx)("ol", {
                            children: e
                        }),
                        bullet: ({
                            children: e
                        }) => (0, r.jsx)("ul", {
                            children: e
                        })
                    },
                    listItem: ({
                        children: e
                    }) => (0, r.jsx)("li", {
                        children: e
                    }),
                    hardBreak: () => (0, r.jsx)("br", {}),
                    unknownType: ({
                        value: e,
                        isInline: t
                    }) => {
                        let n = y(e._type);
                        return t ? (0, r.jsx)("span", {
                            style: E,
                            children: n
                        }) : (0, r.jsx)("div", {
                            style: E,
                            children: n
                        })
                    },
                    unknownMark: ({
                        markType: e,
                        children: t
                    }) => (0, r.jsx)("span", {
                        className: `unknown__pt__mark__${e}`,
                        children: t
                    }),
                    unknownList: ({
                        children: e
                    }) => (0, r.jsx)("ul", {
                        children: e
                    }),
                    unknownListItem: ({
                        children: e
                    }) => (0, r.jsx)("li", {
                        children: e
                    }),
                    unknownBlockStyle: ({
                        children: e
                    }) => (0, r.jsx)("p", {
                        children: e
                    })
                };

            function g(e, t, n) {
                let r = t[n],
                    o = e[n];
                return "function" == typeof r || r && "function" == typeof o ? r : r ? {
                    ...o,
                    ...r
                } : o
            }

            function k({
                value: e,
                components: t,
                listNestingMode: n,
                onMissingComponent: o = N
            }) {
                let l = o || _,
                    s = function(e, t) {
                        let n, r = [];
                        for (let s = 0; s < e.length; s++) {
                            let u = e[s];
                            if (u) {
                                var o, l;
                                if (!i(u)) {
                                    r.push(u), n = void 0;
                                    continue
                                }
                                if (!n) {
                                    n = f(u, s, t), r.push(n);
                                    continue
                                }
                                if (o = u, l = n, (o.level || 1) === l.level && o.listItem === l.listItem) {
                                    n.children.push(u);
                                    continue
                                }
                                if ((u.level || 1) > n.level) {
                                    let e = f(u, s, t);
                                    if ("html" === t) {
                                        let t = n.children[n.children.length - 1],
                                            r = {
                                                ...t,
                                                children: [...t.children, e]
                                            };
                                        n.children[n.children.length - 1] = r
                                    } else n.children.push(e);
                                    n = e;
                                    continue
                                }
                                if ((u.level || 1) < n.level) {
                                    let e = r[r.length - 1],
                                        o = e && h(e, u);
                                    if (o) {
                                        (n = o).children.push(u);
                                        continue
                                    }
                                    n = f(u, s, t), r.push(n);
                                    continue
                                }
                                if (u.listItem !== n.listItem) {
                                    let e = r[r.length - 1],
                                        o = e && h(e, {
                                            level: u.level || 1
                                        });
                                    if (o && o.listItem === u.listItem) {
                                        (n = o).children.push(u);
                                        continue
                                    }
                                    n = f(u, s, t), r.push(n);
                                    continue
                                }
                                console.warn("Unknown state encountered for block", u), r.push(u)
                            }
                        }
                        return r
                    }(Array.isArray(e) ? e : [e], n || "html"),
                    u = (0, p.useMemo)(() => t ? function(e, t) {
                        let {
                            block: n,
                            list: r,
                            listItem: o,
                            marks: l,
                            types: i,
                            ...s
                        } = t;
                        return {
                            ...e,
                            block: g(e, t, "block"),
                            list: g(e, t, "list"),
                            listItem: g(e, t, "listItem"),
                            marks: g(e, t, "marks"),
                            types: g(e, t, "types"),
                            ...s
                        }
                    }(b, t) : b, [t]),
                    c = (0, p.useMemo)(() => w(u, l), [u, l]),
                    a = s.map((e, t) => c({
                        node: e,
                        index: t,
                        isInline: !1,
                        renderNode: c
                    }));
                return (0, r.jsx)(r.Fragment, {
                    children: a
                })
            }
            let w = (e, t) => function n(o) {
                let {
                    node: a,
                    index: d,
                    isInline: f
                } = o, h = a._key || `node-${d}`;
                return s(a) ? function(o, l, i) {
                    let s = o.children.map((e, t) => n({
                            node: e._key ? e : {
                                ...e,
                                _key: `li-${l}-${t}`
                            },
                            index: t,
                            isInline: !1
                        })),
                        u = e.list,
                        c = ("function" == typeof u ? u : u[o.listItem]) || e.unknownList;
                    if (c === e.unknownList) {
                        let e = o.listItem || "bullet";
                        t(v(`list style "${e}"`, "list"), {
                            nodeType: "listStyle",
                            type: e
                        })
                    }
                    return (0, r.jsx)(c, {
                        value: o,
                        index: l,
                        isInline: !1,
                        renderNode: n,
                        children: s
                    }, i)
                }(a, d, h) : i(a) ? function(o, l, i) {
                    let s = T({
                            node: o,
                            index: l,
                            isInline: !1,
                            renderNode: n
                        }),
                        u = e.listItem,
                        c = ("function" == typeof u ? u : u[o.listItem]) || e.unknownListItem;
                    if (c === e.unknownListItem) {
                        let e = o.listItem || "bullet";
                        t(v(`list item style "${e}"`, "listItem"), {
                            type: e,
                            nodeType: "listItemStyle"
                        })
                    }
                    let a = s.children;
                    if (o.style && "normal" !== o.style) {
                        let {
                            listItem: e,
                            ...t
                        } = o;
                        a = n({
                            node: t,
                            index: l,
                            isInline: !1
                        })
                    }
                    return (0, r.jsx)(c, {
                        value: o,
                        index: l,
                        isInline: !1,
                        renderNode: n,
                        children: a
                    }, i)
                }(a, d, h) : u(a) ? function(o, l, i) {
                    let {
                        markDef: s,
                        markType: a,
                        markKey: d
                    } = o, f = e.marks[a] || e.unknownMark, h = o.children.map((e, t) => n({
                        node: e,
                        index: t,
                        isInline: !0
                    }));
                    return f === e.unknownMark && t(v(`mark type "${a}"`, "marks"), {
                        nodeType: "mark",
                        type: a
                    }), (0, r.jsx)(f, {
                        text: function e(t) {
                            let n = "";
                            return t.children.forEach(t => {
                                c(t) ? n += t.text : u(t) && (n += e(t))
                            }), n
                        }(o),
                        value: s,
                        markType: a,
                        markKey: d,
                        renderNode: n,
                        children: h
                    }, i)
                }(a, 0, h) : a._type in e.types ? function(t, o, l, i) {
                    let s = e.types[t._type];
                    return s ? (0, r.jsx)(s, {
                        value: t,
                        isInline: i,
                        index: o,
                        renderNode: n
                    }, l) : null
                }(a, d, h, f) : l(a) ? function(o, l, i, s) {
                    let {
                        _key: u,
                        ...c
                    } = T({
                        node: o,
                        index: l,
                        isInline: s,
                        renderNode: n
                    }), a = c.node.style || "normal", d = ("function" == typeof e.block ? e.block : e.block[a]) || e.unknownBlockStyle;
                    return d === e.unknownBlockStyle && t(v(`block style "${a}"`, "block"), {
                        nodeType: "blockStyle",
                        type: a
                    }), (0, r.jsx)(d, {
                        ...c,
                        value: c.node,
                        renderNode: n
                    }, i)
                }(a, d, h, f) : c(a) ? function(t, n) {
                    if (t.text === `
`) {
                        let t = e.hardBreak;
                        return t ? (0, r.jsx)(t, {}, n) : `
`
                    }
                    return t.text
                }(a, h) : function(o, l, i, s) {
                    t(y(o._type), {
                        nodeType: "block",
                        type: o._type
                    });
                    let u = e.unknownType;
                    return (0, r.jsx)(u, {
                        value: o,
                        isInline: s,
                        index: l,
                        renderNode: n
                    }, i)
                }(a, d, h, f)
            };

            function T(e) {
                let {
                    node: t,
                    index: n,
                    isInline: r,
                    renderNode: l
                } = e, i = (function(e) {
                    var t;
                    let {
                        children: n
                    } = e, r = e.markDefs ?? [];
                    if (!n || !n.length) return [];
                    let l = n.map(d),
                        i = {
                            _type: "@span",
                            children: [],
                            markType: "<unknown>"
                        },
                        s = [i];
                    for (let e = 0; e < n.length; e++) {
                        let i = n[e];
                        if (!i) continue;
                        let u = l[e] || [],
                            c = 1;
                        if (s.length > 1)
                            for (; c < s.length; c++) {
                                let e = (null == (t = s[c]) ? void 0 : t.markKey) || "",
                                    n = u.indexOf(e);
                                if (-1 === n) break;
                                u.splice(n, 1)
                            }
                        let a = (s = s.slice(0, c))[s.length - 1];
                        if (a) {
                            for (let e of u) {
                                let t = null == r ? void 0 : r.find(t => t._key === e),
                                    n = t ? t._type : e,
                                    o = {
                                        _type: "@span",
                                        _key: i._key,
                                        children: [],
                                        markDef: t,
                                        markType: n,
                                        markKey: e
                                    };
                                a.children.push(o), s.push(o), a = o
                            }
                            if (o(i)) {
                                let e = i.text.split(`
`);
                                for (let t = e.length; t-- > 1;) e.splice(t, 0, `
`);
                                a.children = a.children.concat(e.map(e => ({
                                    _type: "@text",
                                    text: e
                                })))
                            } else a.children = a.children.concat(i)
                        }
                    }
                    return i.children
                })(t).map((e, t) => l({
                    node: e,
                    isInline: !0,
                    index: t,
                    renderNode: l
                }));
                return {
                    _key: t._key || `block-${n}`,
                    children: i,
                    index: n,
                    isInline: r,
                    node: t
                }
            }

            function _() {}
        },
        77310: (e, t, n) => {
            n.d(t, {
                o: () => i
            });
            var r = n(62148),
                o = n(11698),
                l = n(58295);

            function i(e, t, n) {
                let i, {
                        type: s
                    } = e,
                    {
                        isOpen: u
                    } = t;
                (0, o.useEffect)(() => {
                    n && n.current && r.a.set(n.current, t.close)
                }), "menu" === s ? i = !0 : "listbox" === s && (i = "listbox");
                let c = (0, l.Bi)();
                return {
                    triggerProps: {
                        "aria-haspopup": i,
                        "aria-expanded": u,
                        "aria-controls": u ? c : void 0,
                        onPress: t.toggle
                    },
                    overlayProps: {
                        id: c
                    }
                }
            }
        },
        95901: (e, t, n) => {
            n.d(t, {
                n1: () => v,
                N$: () => C,
                Pu: () => g
            });
            var r = n(46906),
                o = n(44885),
                l = n(70882),
                i = n(4152),
                s = n(88801),
                u = n(45066);
            class c {
                get currentNode() {
                    return this._currentNode
                }
                set currentNode(e) {
                    if (!(0, l.sD)(this.root, e)) throw Error("Cannot set currentNode to a node that is not contained by the root node.");
                    let t = [],
                        n = e,
                        r = e;
                    for (this._currentNode = e; n && n !== this.root;)
                        if (n.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                            let e = n,
                                o = this._doc.createTreeWalker(e, this.whatToShow, {
                                    acceptNode: this._acceptNode
                                });
                            t.push(o), o.currentNode = r, this._currentSetFor.add(o), n = r = e.host
                        } else n = n.parentNode;
                    let o = this._doc.createTreeWalker(this.root, this.whatToShow, {
                        acceptNode: this._acceptNode
                    });
                    t.push(o), o.currentNode = r, this._currentSetFor.add(o), this._walkerStack = t
                }
                get doc() {
                    return this._doc
                }
                firstChild() {
                    let e = this.currentNode,
                        t = this.nextNode();
                    return (0, l.sD)(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null)
                }
                lastChild() {
                    let e = this._walkerStack[0].lastChild();
                    return e && (this.currentNode = e), e
                }
                nextNode() {
                    let e = this._walkerStack[0].nextNode();
                    if (e) {
                        if (e.shadowRoot) {
                            var t;
                            let n;
                            if ("function" == typeof this.filter ? n = this.filter(e) : (null == (t = this.filter) ? void 0 : t.acceptNode) && (n = this.filter.acceptNode(e)), n === NodeFilter.FILTER_ACCEPT) return this.currentNode = e, e;
                            let r = this.nextNode();
                            return r && (this.currentNode = r), r
                        }
                        return e && (this.currentNode = e), e
                    }
                    if (!(this._walkerStack.length > 1)) return null;
                    {
                        this._walkerStack.shift();
                        let e = this.nextNode();
                        return e && (this.currentNode = e), e
                    }
                }
                previousNode() {
                    let e = this._walkerStack[0];
                    if (e.currentNode === e.root) {
                        if (this._currentSetFor.has(e) && (this._currentSetFor.delete(e), this._walkerStack.length > 1)) {
                            this._walkerStack.shift();
                            let e = this.previousNode();
                            return e && (this.currentNode = e), e
                        }
                        return null
                    }
                    let t = e.previousNode();
                    if (t) {
                        if (t.shadowRoot) {
                            var n;
                            let e;
                            if ("function" == typeof this.filter ? e = this.filter(t) : (null == (n = this.filter) ? void 0 : n.acceptNode) && (e = this.filter.acceptNode(t)), e === NodeFilter.FILTER_ACCEPT) return t && (this.currentNode = t), t;
                            let r = this.lastChild();
                            return r && (this.currentNode = r), r
                        }
                        return t && (this.currentNode = t), t
                    }
                    if (!(this._walkerStack.length > 1)) return null;
                    {
                        this._walkerStack.shift();
                        let e = this.previousNode();
                        return e && (this.currentNode = e), e
                    }
                }
                nextSibling() {
                    return null
                }
                previousSibling() {
                    return null
                }
                parentNode() {
                    return null
                }
                constructor(e, t, n, r) {
                    this._walkerStack = [], this._currentSetFor = new Set, this._acceptNode = e => {
                        if (e.nodeType === Node.ELEMENT_NODE) {
                            var t;
                            let n = e.shadowRoot;
                            if (n) {
                                let e = this._doc.createTreeWalker(n, this.whatToShow, {
                                    acceptNode: this._acceptNode
                                });
                                return this._walkerStack.unshift(e), NodeFilter.FILTER_ACCEPT
                            }
                            if ("function" == typeof this.filter) return this.filter(e);
                            if (null == (t = this.filter) ? void 0 : t.acceptNode) return this.filter.acceptNode(e);
                            if (null === this.filter) return NodeFilter.FILTER_ACCEPT
                        }
                        return NodeFilter.FILTER_SKIP
                    }, this._doc = e, this.root = t, this.filter = null != r ? r : null, this.whatToShow = null != n ? n : NodeFilter.SHOW_ALL, this._currentNode = t, this._walkerStack.unshift(e.createTreeWalker(t, n, this._acceptNode));
                    let o = t.shadowRoot;
                    if (o) {
                        let e = this._doc.createTreeWalker(o, this.whatToShow, {
                            acceptNode: this._acceptNode
                        });
                        this._walkerStack.unshift(e)
                    }
                }
            }
            var a = n(38418),
                d = n(21155),
                f = n(11698);
            let h = f.createContext(null),
                p = "react-aria-focus-scope-restore",
                m = null;

            function v(e) {
                var t, n, s, u, c;
                let d, v, {
                        children: g,
                        contain: L,
                        restoreFocus: F,
                        autoFocus: M
                    } = e,
                    A = (0, f.useRef)(null),
                    D = (0, f.useRef)(null),
                    P = (0, f.useRef)([]),
                    {
                        parentNode: j
                    } = (0, f.useContext)(h) || {},
                    W = (0, f.useMemo)(() => new S({
                        scopeRef: P
                    }), [P]);
                (0, o.N)(() => {
                    let e = j || I.root;
                    if (I.getTreeNode(e.scopeRef) && m && !k(m, e.scopeRef)) {
                        let t = I.getTreeNode(m);
                        t && (e = t)
                    }
                    e.addChild(W), I.addNode(W)
                }, [W, j]), (0, o.N)(() => {
                    let e = I.getTreeNode(P);
                    e && (e.contain = !!L)
                }, [L]), (0, o.N)(() => {
                    var e;
                    let t = null == (e = A.current) ? void 0 : e.nextSibling,
                        n = [],
                        r = e => e.stopPropagation();
                    for (; t && t !== D.current;) n.push(t), t.addEventListener(p, r), t = t.nextSibling;
                    return P.current = n, () => {
                        for (let e of n) e.removeEventListener(p, r)
                    }
                }, [g]), t = P, n = F, s = L, (0, o.N)(() => {
                        if (n || s) return;
                        let e = t.current,
                            o = (0, r.TW)(e ? e[0] : void 0),
                            i = e => {
                                let n = (0, l.wt)(e);
                                E(n, t.current) ? m = t : b(n) || (m = null)
                            };
                        return o.addEventListener("focusin", i, !1), null == e || e.forEach(e => e.addEventListener("focusin", i, !1)), () => {
                            o.removeEventListener("focusin", i, !1), null == e || e.forEach(e => e.removeEventListener("focusin", i, !1))
                        }
                    }, [t, n, s]), u = P, c = L, d = (0, f.useRef)(void 0), v = (0, f.useRef)(void 0), (0, o.N)(() => {
                        let e = u.current;
                        if (!c) {
                            v.current && (cancelAnimationFrame(v.current), v.current = void 0);
                            return
                        }
                        let t = (0, r.TW)(e ? e[0] : void 0),
                            n = e => {
                                if ("Tab" !== e.key || e.altKey || e.ctrlKey || e.metaKey || !N(u) || e.isComposing) return;
                                let n = (0, l.bq)(t),
                                    r = u.current;
                                if (!r || !E(n, r)) return;
                                let o = C(y(r), {
                                    tabbable: !0
                                }, r);
                                if (!n) return;
                                o.currentNode = n;
                                let i = e.shiftKey ? o.previousNode() : o.nextNode();
                                i || (o.currentNode = e.shiftKey ? r[r.length - 1].nextElementSibling : r[0].previousElementSibling, i = e.shiftKey ? o.previousNode() : o.nextNode()), e.preventDefault(), i && w(i, !0)
                            },
                            o = e => {
                                (!m || k(m, u)) && E((0, l.wt)(e), u.current) ? (m = u, d.current = (0, l.wt)(e)) : N(u) && !b((0, l.wt)(e), u) ? d.current ? d.current.focus() : m && m.current && _(m.current) : N(u) && (d.current = (0, l.wt)(e))
                            },
                            s = e => {
                                v.current && cancelAnimationFrame(v.current), v.current = requestAnimationFrame(() => {
                                    let n = (0, a.ME)(),
                                        r = ("virtual" === n || null === n) && (0, i.m0)() && (0, i.H8)(),
                                        o = (0, l.bq)(t);
                                    if (!r && o && N(u) && !b(o, u)) {
                                        m = u;
                                        let t = (0, l.wt)(e);
                                        if (t && t.isConnected) {
                                            var s;
                                            d.current = t, null == (s = d.current) || s.focus()
                                        } else m.current && _(m.current)
                                    }
                                })
                            };
                        return t.addEventListener("keydown", n, !1), t.addEventListener("focusin", o, !1), null == e || e.forEach(e => e.addEventListener("focusin", o, !1)), null == e || e.forEach(e => e.addEventListener("focusout", s, !1)), () => {
                            t.removeEventListener("keydown", n, !1), t.removeEventListener("focusin", o, !1), null == e || e.forEach(e => e.removeEventListener("focusin", o, !1)), null == e || e.forEach(e => e.removeEventListener("focusout", s, !1))
                        }
                    }, [u, c]), (0, o.N)(() => () => {
                        v.current && cancelAnimationFrame(v.current)
                    }, [v]),
                    function(e, t, n) {
                        let i = (0, f.useRef)("undefined" != typeof document ? (0, l.bq)((0, r.TW)(e.current ? e.current[0] : void 0)) : null);
                        (0, o.N)(() => {
                            let o = e.current,
                                i = (0, r.TW)(o ? o[0] : void 0);
                            if (!t || n) return;
                            let s = () => {
                                (!m || k(m, e)) && E((0, l.bq)(i), e.current) && (m = e)
                            };
                            return i.addEventListener("focusin", s, !1), null == o || o.forEach(e => e.addEventListener("focusin", s, !1)), () => {
                                i.removeEventListener("focusin", s, !1), null == o || o.forEach(e => e.removeEventListener("focusin", s, !1))
                            }
                        }, [e, n]), (0, o.N)(() => {
                            let o = (0, r.TW)(e.current ? e.current[0] : void 0);
                            if (!t) return;
                            let l = t => {
                                if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !N(e) || t.isComposing) return;
                                let n = o.activeElement;
                                if (!b(n, e) || !x(e)) return;
                                let r = I.getTreeNode(e);
                                if (!r) return;
                                let l = r.nodeToRestore,
                                    i = C(o.body, {
                                        tabbable: !0
                                    });
                                i.currentNode = n;
                                let s = t.shiftKey ? i.previousNode() : i.nextNode();
                                if (l && l.isConnected && l !== o.body || (l = void 0, r.nodeToRestore = void 0), (!s || !b(s, e)) && l) {
                                    i.currentNode = l;
                                    do s = t.shiftKey ? i.previousNode() : i.nextNode(); while (b(s, e));
                                    (t.preventDefault(), t.stopPropagation(), s) ? w(s, !0): b(l) ? w(l, !0) : n.blur()
                                }
                            };
                            return n || o.addEventListener("keydown", l, !0), () => {
                                n || o.removeEventListener("keydown", l, !0)
                            }
                        }, [e, t, n]), (0, o.N)(() => {
                            var n;
                            let o = (0, r.TW)(e.current ? e.current[0] : void 0);
                            if (!t) return;
                            let s = I.getTreeNode(e);
                            if (s) return s.nodeToRestore = null != (n = i.current) ? n : void 0, () => {
                                let n = I.getTreeNode(e);
                                if (!n) return;
                                let r = n.nodeToRestore,
                                    i = (0, l.bq)(o);
                                if (t && r && (i && b(i, e) || i === o.body && x(e))) {
                                    let t = I.clone();
                                    requestAnimationFrame(() => {
                                        if (o.activeElement === o.body) {
                                            let n = t.getTreeNode(e);
                                            for (; n;) {
                                                if (n.nodeToRestore && n.nodeToRestore.isConnected) return void R(n.nodeToRestore);
                                                n = n.parent
                                            }
                                            for (n = t.getTreeNode(e); n;) {
                                                if (n.scopeRef && n.scopeRef.current && I.getTreeNode(n.scopeRef)) return void R(T(n.scopeRef.current, !0));
                                                n = n.parent
                                            }
                                        }
                                    })
                                }
                            }
                        }, [e, t])
                    }(P, F, L),
                    function(e, t) {
                        let n = f.useRef(t);
                        (0, f.useEffect)(() => {
                            if (n.current) {
                                m = e;
                                let t = (0, r.TW)(e.current ? e.current[0] : void 0);
                                !E((0, l.bq)(t), m.current) && e.current && _(e.current)
                            }
                            n.current = !1
                        }, [e])
                    }(P, M), (0, f.useEffect)(() => {
                        let e = (0, l.bq)((0, r.TW)(P.current ? P.current[0] : void 0)),
                            t = null;
                        if (E(e, P.current)) {
                            for (let n of I.traverse()) n.scopeRef && E(e, n.scopeRef.current) && (t = n);
                            t === I.getTreeNode(P) && (m = t.scopeRef)
                        }
                    }, [P]), (0, o.N)(() => () => {
                        var e, t, n;
                        let r = null != (n = null == (t = I.getTreeNode(P)) || null == (e = t.parent) ? void 0 : e.scopeRef) ? n : null;
                        (P === m || k(P, m)) && (!r || I.getTreeNode(r)) && (m = r), I.removeTreeNode(P)
                    }, [P]);
                let O = (0, f.useMemo)(() => {
                        var e;
                        return e = P, {
                            focusNext(t = {}) {
                                var n;
                                let o = e.current,
                                    {
                                        from: i,
                                        tabbable: s,
                                        wrap: u,
                                        accept: c
                                    } = t,
                                    a = i || (0, l.bq)((0, r.TW)(null != (n = o[0]) ? n : void 0)),
                                    d = o[0].previousElementSibling,
                                    f = C(y(o), {
                                        tabbable: s,
                                        accept: c
                                    }, o);
                                f.currentNode = E(a, o) ? a : d;
                                let h = f.nextNode();
                                return !h && u && (f.currentNode = d, h = f.nextNode()), h && w(h, !0), h
                            },
                            focusPrevious(t = {}) {
                                var n;
                                let o = e.current,
                                    {
                                        from: i,
                                        tabbable: s,
                                        wrap: u,
                                        accept: c
                                    } = t,
                                    a = i || (0, l.bq)((0, r.TW)(null != (n = o[0]) ? n : void 0)),
                                    d = o[o.length - 1].nextElementSibling,
                                    f = C(y(o), {
                                        tabbable: s,
                                        accept: c
                                    }, o);
                                f.currentNode = E(a, o) ? a : d;
                                let h = f.previousNode();
                                return !h && u && (f.currentNode = d, h = f.previousNode()), h && w(h, !0), h
                            },
                            focusFirst(t = {}) {
                                let n = e.current,
                                    {
                                        tabbable: r,
                                        accept: o
                                    } = t,
                                    l = C(y(n), {
                                        tabbable: r,
                                        accept: o
                                    }, n);
                                l.currentNode = n[0].previousElementSibling;
                                let i = l.nextNode();
                                return i && w(i, !0), i
                            },
                            focusLast(t = {}) {
                                let n = e.current,
                                    {
                                        tabbable: r,
                                        accept: o
                                    } = t,
                                    l = C(y(n), {
                                        tabbable: r,
                                        accept: o
                                    }, n);
                                l.currentNode = n[n.length - 1].nextElementSibling;
                                let i = l.previousNode();
                                return i && w(i, !0), i
                            }
                        }
                    }, []),
                    H = (0, f.useMemo)(() => ({
                        focusManager: O,
                        parentNode: W
                    }), [W, O]);
                return f.createElement(h.Provider, {
                    value: H
                }, f.createElement("span", {
                    "data-focus-scope-start": !0,
                    hidden: !0,
                    ref: A
                }), g, f.createElement("span", {
                    "data-focus-scope-end": !0,
                    hidden: !0,
                    ref: D
                }))
            }

            function y(e) {
                return e[0].parentElement
            }

            function N(e) {
                let t = I.getTreeNode(m);
                for (; t && t.scopeRef !== e;) {
                    if (t.contain) return !1;
                    t = t.parent
                }
                return !0
            }

            function E(e, t) {
                return !!e && !!t && t.some(t => t.contains(e))
            }

            function b(e, t = null) {
                if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
                for (let {
                        scopeRef: n
                    }
                    of I.traverse(I.getTreeNode(t)))
                    if (n && E(e, n.current)) return !0;
                return !1
            }

            function g(e) {
                return b(e, m)
            }

            function k(e, t) {
                var n;
                let r = null == (n = I.getTreeNode(t)) ? void 0 : n.parent;
                for (; r;) {
                    if (r.scopeRef === e) return !0;
                    r = r.parent
                }
                return !1
            }

            function w(e, t = !1) {
                if (null == e || t) {
                    if (null != e) try {
                        e.focus()
                    } catch {}
                } else try {
                    (0, d.l)(e)
                } catch {}
            }

            function T(e, t = !0) {
                let n = e[0].previousElementSibling,
                    r = y(e),
                    o = C(r, {
                        tabbable: t
                    }, e);
                o.currentNode = n;
                let l = o.nextNode();
                return t && !l && ((o = C(r = y(e), {
                    tabbable: !1
                }, e)).currentNode = n, l = o.nextNode()), l
            }

            function _(e, t = !0) {
                w(T(e, t))
            }

            function x(e) {
                let t = I.getTreeNode(m);
                for (; t && t.scopeRef !== e;) {
                    if (t.nodeToRestore) return !1;
                    t = t.parent
                }
                return (null == t ? void 0 : t.scopeRef) === e
            }

            function R(e) {
                e.dispatchEvent(new CustomEvent(p, {
                    bubbles: !0,
                    cancelable: !0
                })) && w(e)
            }

            function C(e, t, n) {
                var o, l, i;
                let a = (null == t ? void 0 : t.tabbable) ? s.A : s.t,
                    d = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
                    f = (0, r.TW)(d),
                    h = (o = e || f, l = NodeFilter.SHOW_ELEMENT, i = {
                        acceptNode(e) {
                            var o;
                            return (null == t || null == (o = t.from) ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : a(e) && function e(t, n) {
                                return "#comment" !== t.nodeName && function(e) {
                                    let t = (0, r.mD)(e);
                                    if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
                                    let {
                                        display: n,
                                        visibility: o
                                    } = e.style, l = "none" !== n && "hidden" !== o && "collapse" !== o;
                                    if (l) {
                                        let {
                                            getComputedStyle: t
                                        } = e.ownerDocument.defaultView, {
                                            display: n,
                                            visibility: r
                                        } = t(e);
                                        l = "none" !== n && "hidden" !== r && "collapse" !== r
                                    }
                                    return l
                                }(t) && !t.hasAttribute("hidden") && !t.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== t.nodeName || !n || "SUMMARY" === n.nodeName || t.hasAttribute("open")) && (!t.parentElement || e(t.parentElement, t))
                            }(e) && (!n || E(e, n)) && (!(null == t ? void 0 : t.accept) || t.accept(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    }, (0, u.Nf)() ? new c(f, o, l, i) : f.createTreeWalker(o, l, i));
                return (null == t ? void 0 : t.from) && (h.currentNode = t.from), h
            }
            class L {
                get size() {
                    return this.fastMap.size
                }
                getTreeNode(e) {
                    return this.fastMap.get(e)
                }
                addTreeNode(e, t, n) {
                    let r = this.fastMap.get(null != t ? t : null);
                    if (!r) return;
                    let o = new S({
                        scopeRef: e
                    });
                    r.addChild(o), o.parent = r, this.fastMap.set(e, o), n && (o.nodeToRestore = n)
                }
                addNode(e) {
                    this.fastMap.set(e.scopeRef, e)
                }
                removeTreeNode(e) {
                    if (null === e) return;
                    let t = this.fastMap.get(e);
                    if (!t) return;
                    let n = t.parent;
                    for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && E(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
                    let r = t.children;
                    n && (n.removeChild(t), r.size > 0 && r.forEach(e => n && n.addChild(e))), this.fastMap.delete(t.scopeRef)
                }* traverse(e = this.root) {
                    if (null != e.scopeRef && (yield e), e.children.size > 0)
                        for (let t of e.children) yield* this.traverse(t)
                }
                clone() {
                    var e, t;
                    let n = new L;
                    for (let r of this.traverse()) n.addTreeNode(r.scopeRef, null != (t = null == (e = r.parent) ? void 0 : e.scopeRef) ? t : null, r.nodeToRestore);
                    return n
                }
                constructor() {
                    this.fastMap = new Map, this.root = new S({
                        scopeRef: null
                    }), this.fastMap.set(null, this.root)
                }
            }
            class S {
                addChild(e) {
                    this.children.add(e), e.parent = this
                }
                removeChild(e) {
                    this.children.delete(e), e.parent = void 0
                }
                constructor(e) {
                    this.children = new Set, this.contain = !1, this.scopeRef = e.scopeRef
                }
            }
            let I = new L
        }
    }
]);