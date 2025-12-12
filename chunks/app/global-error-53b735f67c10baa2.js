try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        r = (new e.Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "7d15b8ef-781b-4942-8b6a-e93f91e0c641", e._sentryDebugIdIdentifier = "sentry-dbid-7d15b8ef-781b-4942-8b6a-e93f91e0c641")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [34219], {
        47531: (e, r, n) => {
            "use strict";
            n.r(r), n.d(r, {
                default: () => l
            });
            var s = n(32475),
                t = n(62050),
                d = n(53163);

            function l({
                error: e
            }) {
                return (0, d.useEffect)(() => {
                    t.Cp(e)
                }, [e]), (0, s.jsx)("html", {
                    "data-sentry-component": "GlobalError",
                    "data-sentry-source-file": "global-error.tsx",
                    children: (0, s.jsxs)("body", {
                        children: [(0, s.jsx)("h1", {
                            children: "An error occurred"
                        }), (0, s.jsx)("p", {
                            children: "Something went wrong. Please try again later."
                        })]
                    })
                })
            }
        },
        59612: (e, r, n) => {
            Promise.resolve().then(n.bind(n, 47531))
        }
    },
    e => {
        e.O(0, [24667, 35282, 77358], () => e(e.s = 59612)), _N_E = e.O()
    }
]);