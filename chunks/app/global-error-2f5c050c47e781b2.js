try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        r = (new e.Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "7247fa48-3eb2-4d5a-8cb6-6443969da867", e._sentryDebugIdIdentifier = "sentry-dbid-7247fa48-3eb2-4d5a-8cb6-6443969da867")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [34219], {
        9883: (e, r, n) => {
            "use strict";
            n.r(r), n.d(r, {
                default: () => l
            });
            var d = n(68325),
                s = n(96274),
                t = n(90337);

            function l({
                error: e
            }) {
                return (0, t.useEffect)(() => {
                    s.Cp(e)
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
        12302: (e, r, n) => {
            Promise.resolve().then(n.bind(n, 9883))
        }
    },
    e => {
        e.O(0, [20318, 67960, 77358], () => e(e.s = 12302)), _N_E = e.O()
    }
]);