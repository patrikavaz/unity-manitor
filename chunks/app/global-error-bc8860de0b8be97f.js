try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        r = (new e.Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "152e3ef8-0a97-4b33-8ca9-6ace48da2b4e", e._sentryDebugIdIdentifier = "sentry-dbid-152e3ef8-0a97-4b33-8ca9-6ace48da2b4e")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [34219], {
        33837: (e, r, n) => {
            "use strict";
            n.r(r), n.d(r, {
                default: () => a
            });
            var s = n(22650),
                t = n(6756),
                d = n(11698);

            function a({
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
        34957: (e, r, n) => {
            Promise.resolve().then(n.bind(n, 33837))
        }
    },
    e => {
        e.O(0, [99641, 25794, 77358], () => e(e.s = 34957)), _N_E = e.O()
    }
]);