try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        r = (new e.Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "488c12b1-0a54-4e49-b25b-fc596162008d", e._sentryDebugIdIdentifier = "sentry-dbid-488c12b1-0a54-4e49-b25b-fc596162008d")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [34219], {
        46300: (e, r, n) => {
            Promise.resolve().then(n.bind(n, 84095))
        },
        84095: (e, r, n) => {
            "use strict";
            n.r(r), n.d(r, {
                default: () => l
            });
            var s = n(73723),
                t = n(52342),
                d = n(7787);

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
        }
    },
    e => {
        e.O(0, [82968, 21268, 77358], () => e(e.s = 46300)), _N_E = e.O()
    }
]);