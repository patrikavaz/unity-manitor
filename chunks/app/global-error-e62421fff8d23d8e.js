try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ad37526b-660a-4b2b-931f-2a2fb2a64d8d", e._sentryDebugIdIdentifier = "sentry-dbid-ad37526b-660a-4b2b-931f-2a2fb2a64d8d")
} catch (e) {} {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], {
        "_sentryBundlerPluginAppKey:hexagon-web": !0
    })
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [34219], {
        47531: (e, n, d) => {
            "use strict";
            d.r(n), d.d(n, {
                default: () => s
            });
            var t = d(32475),
                r = d(62050),
                a = d(53163);

            function s({
                error: e
            }) {
                return (0, a.useEffect)(() => {
                    r.Cp(e)
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
        59612: (e, n, d) => {
            Promise.resolve().then(d.bind(d, 47531))
        }
    },
    e => {
        e.O(0, [24667, 55406, 77358], () => e(e.s = 59612)), _N_E = e.O()
    }
]);