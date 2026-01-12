try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a57b30f1-85f7-4fcd-96af-be3ae55189d2", e._sentryDebugIdIdentifier = "sentry-dbid-a57b30f1-85f7-4fcd-96af-be3ae55189d2")
} catch (e) {} {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], {
        "_sentryBundlerPluginAppKey:hexagon-web": !0
    })
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [34219], {
        47531: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => s
            });
            var d = t(32475),
                r = t(62050),
                a = t(53163);

            function s({
                error: e
            }) {
                return (0, a.useEffect)(() => {
                    r.Cp(e)
                }, [e]), (0, d.jsx)("html", {
                    "data-sentry-component": "GlobalError",
                    "data-sentry-source-file": "global-error.tsx",
                    children: (0, d.jsxs)("body", {
                        children: [(0, d.jsx)("h1", {
                            children: "An error occurred"
                        }), (0, d.jsx)("p", {
                            children: "Something went wrong. Please try again later."
                        })]
                    })
                })
            }
        },
        59612: (e, n, t) => {
            Promise.resolve().then(t.bind(t, 47531))
        }
    },
    e => {
        e.O(0, [24667, 38813, 77358], () => e(e.s = 59612)), _N_E = e.O()
    }
]);