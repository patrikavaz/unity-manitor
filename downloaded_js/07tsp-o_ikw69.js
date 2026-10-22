;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "97ee7e1f-6cfc-b792-46c7-395d72eec7f9")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 989489, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        ErrorBoundary: function() {
            return y
        },
        ErrorBoundaryHandler: function() {
            return p
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let u = e.r(56421),
        a = e.r(785328),
        l = u._(e.r(409781)),
        i = e.r(151691),
        d = e.r(125039);
    e.r(149265);
    let s = e.r(497491),
        c = e.r(724246),
        f = e.r(751887),
        _ = "u" > typeof window && (0, c.isBot)(window.navigator.userAgent);
    class p extends l.default.Component {
        static {
            this.contextType = f.AppRouterContext
        }
        constructor(e) {
            super(e), this.reset = () => {
                this.setState({
                    error: null
                })
            }, this.retry = () => {
                (0, l.startTransition)(() => {
                    this.context?.refresh(), this.reset()
                })
            }, this.state = {
                error: null,
                previousPathname: this.props.pathname
            }
        }
        static getDerivedStateFromError(e) {
            if ((0, d.isNextRouterError)(e)) throw e;
            return {
                error: {
                    thrownValue: e
                }
            }
        }
        static getDerivedStateFromProps(e, t) {
            let {
                error: r
            } = t;
            return e.pathname !== t.previousPathname && t.error ? {
                error: null,
                previousPathname: e.pathname
            } : {
                error: t.error,
                previousPathname: e.pathname
            }
        }
        render() {
            if (this.state.error && !_) {
                let e = this.state.error.thrownValue;
                return (0, s.handleISRError)({
                    error: e
                }), (0, a.jsxs)(a.Fragment, {
                    children: [this.props.errorStyles, this.props.errorScripts, (0, a.jsx)(this.props.errorComponent, {
                        error: e,
                        reset: this.reset,
                        retry: this.retry
                    })]
                })
            }
            return this.props.children
        }
    }

    function y({
        errorComponent: e,
        errorStyles: t,
        errorScripts: r,
        children: n
    }) {
        let o = (0, i.useUntrackedPathname)();
        return e ? (0, a.jsx)(p, {
            pathname: o,
            errorComponent: e,
            errorStyles: t,
            errorScripts: r,
            children: n
        }) : (0, a.jsx)(a.Fragment, {
            children: n
        })
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 497491, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "handleISRError", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(361271);

    function o({
        error: e
    }) {
        if (n.workAsyncStorage) {
            let t = n.workAsyncStorage.getStore();
            if (t?.isStaticGeneration) throw e && console.error(e), e
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 149265, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        handleHardNavError: function() {
            return a
        },
        useNavFailureHandler: function() {
            return l
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    e.r(409781);
    let u = e.r(261111);

    function a(e) {
        return "u" > typeof window && !!window.next.__pendingUrl && (0, u.createHrefFromUrl)(new URL(window.location.href)) !== (0, u.createHrefFromUrl)(window.next.__pendingUrl) && (console.error("Error occurred during navigation, falling back to hard navigation", e), window.location.href = window.next.__pendingUrl.toString(), !0)
    }

    function l() {}("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 151691, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useUntrackedPathname", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = e.r(409781),
        o = e.r(613764),
        u = e.r(361271);

    function a() {
        return ! function() {
            if ("u" < typeof window) {
                let e = u.workUnitAsyncStorage.getStore();
                if (!e) return !1;
                switch (e.type) {
                    case "prerender":
                    case "prerender-client":
                    case "prerender-ppr":
                    case "validation-client":
                        let t = e.fallbackRouteParams;
                        return !!t && t.size > 0
                }
            }
            return !1
        }() ? (0, n.useContext)(o.PathnameContext) : null
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 334955, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        RedirectBoundary: function() {
            return _
        },
        RedirectErrorBoundary: function() {
            return f
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let u = e.r(56421),
        a = e.r(785328),
        l = u._(e.r(409781)),
        i = e.r(469970),
        d = e.r(849117),
        s = e.r(347388);

    function c({
        redirect: e,
        reset: t,
        redirectType: r
    }) {
        let n = (0, i.useRouter)();
        return (0, l.useEffect)(() => {
            l.default.startTransition(() => {
                "push" === r ? n.push(e, {}) : n.replace(e, {}), t()
            })
        }, [e, r, t, n]), null
    }
    class f extends l.default.Component {
        constructor(e) {
            super(e), this.state = {
                redirect: null,
                redirectType: null
            }
        }
        static getDerivedStateFromError(e) {
            if ((0, s.isRedirectError)(e)) {
                let t = (0, d.getURLFromRedirectError)(e),
                    r = (0, d.getRedirectTypeFromError)(e);
                return "handled" in e ? {
                    redirect: null,
                    redirectType: null
                } : {
                    redirect: t,
                    redirectType: r
                }
            }
            throw e
        }
        render() {
            let {
                redirect: e,
                redirectType: t
            } = this.state;
            return null !== e && null !== t ? (0, a.jsx)(c, {
                redirect: e,
                redirectType: t,
                reset: () => this.setState({
                    redirect: null
                })
            }) : this.props.children
        }
    }

    function _({
        children: e
    }) {
        let t = (0, i.useRouter)();
        return (0, a.jsx)(f, {
            router: t,
            children: e
        })
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 381685, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "createRouterCacheKey", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(60954);

    function o(e, t = !1) {
        return Array.isArray(e) ? `${e[0]}|${e[1]}|${e[2]}` : t && e.startsWith(n.PAGE_SEGMENT_KEY) ? n.PAGE_SEGMENT_KEY : e
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 371286, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "unresolvedThenable", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = {
        then: () => {}
    };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 595384, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "setAttributesFromProps", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = {
            acceptCharset: "accept-charset",
            className: "class",
            htmlFor: "for",
            httpEquiv: "http-equiv",
            noModule: "noModule"
        },
        o = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"];

    function u(e) {
        return ["async", "defer", "noModule"].includes(e)
    }

    function a(e, t) {
        for (let [r, a] of Object.entries(t)) {
            if (!t.hasOwnProperty(r) || o.includes(r) || void 0 === a) continue;
            let l = n[r] || r.toLowerCase();
            "SCRIPT" === e.tagName && u(l) ? e[l] = !!a : e.setAttribute(l, String(a)), (!1 === a || "SCRIPT" === e.tagName && u(l) && (!a || "false" === a)) && (e.setAttribute(l, ""), e.removeAttribute(l))
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 552517, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        METADATA_BOUNDARY_NAME: function() {
            return u
        },
        OUTLET_BOUNDARY_NAME: function() {
            return l
        },
        ROOT_LAYOUT_BOUNDARY_NAME: function() {
            return i
        },
        VIEWPORT_BOUNDARY_NAME: function() {
            return a
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let u = "__next_metadata_boundary__",
        a = "__next_viewport_boundary__",
        l = "__next_outlet_boundary__",
        i = "__next_root_layout_boundary__"
}, 300966, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        MetadataBoundary: function() {
            return l
        },
        OutletBoundary: function() {
            return d
        },
        RootLayoutBoundary: function() {
            return s
        },
        ViewportBoundary: function() {
            return i
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let u = e.r(552517),
        a = {
            [u.METADATA_BOUNDARY_NAME]: function({
                children: e
            }) {
                return e
            },
            [u.VIEWPORT_BOUNDARY_NAME]: function({
                children: e
            }) {
                return e
            },
            [u.OUTLET_BOUNDARY_NAME]: function({
                children: e
            }) {
                return e
            },
            [u.ROOT_LAYOUT_BOUNDARY_NAME]: function({
                children: e
            }) {
                return e
            }
        },
        l = a[u.METADATA_BOUNDARY_NAME.slice(0)],
        i = a[u.VIEWPORT_BOUNDARY_NAME.slice(0)],
        d = a[u.OUTLET_BOUNDARY_NAME.slice(0)],
        s = a[u.ROOT_LAYOUT_BOUNDARY_NAME.slice(0)]
}, 477706, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "HeadManagerContext", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e.r(836437)._(e.r(409781)).default.createContext({})
}]);

//# debugId=97ee7e1f-6cfc-b792-46c7-395d72eec7f9