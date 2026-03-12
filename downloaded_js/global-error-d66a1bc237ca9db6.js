! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
        e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = function(e) {
            for (var r = 1; r < arguments.length; r++) {
                var n = arguments[r];
                if (null != n)
                    for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t])
            }
            return e
        }({}, e._sentryModuleMetadata[(new e.Error).stack], {
            "_sentryBundlerPluginAppKey:hexagon-web": !0
        })
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [34219], {
        15567: (e, r, n) => {
            "use strict";
            n.r(r), n.d(r, {
                default: () => l
            });
            var t = n(80475),
                a = n(11063),
                o = n(88491);

            function l({
                error: e
            }) {
                return (0, o.useEffect)(() => {
                    a.Cp(e)
                }, [e]), (0, t.jsx)("html", {
                    "data-sentry-component": "GlobalError",
                    "data-sentry-source-file": "global-error.tsx",
                    children: (0, t.jsxs)("body", {
                        children: [(0, t.jsx)("h1", {
                            children: "An error occurred"
                        }), (0, t.jsx)("p", {
                            children: "Something went wrong. Please try again later."
                        })]
                    })
                })
            }
        },
        61695: (e, r, n) => {
            Promise.resolve().then(n.bind(n, 15567))
        }
    },
    e => {
        e.O(0, [57149, 91669, 77358], () => e(e.s = 61695)), _N_E = e.O()
    }
]);