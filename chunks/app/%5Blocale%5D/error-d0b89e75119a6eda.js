try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3cde7f10-68b8-468e-abdd-3782f1aba081", e._sentryDebugIdIdentifier = "sentry-dbid-3cde7f10-68b8-468e-abdd-3782f1aba081")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [48530], {
        17966: (e, n, d) => {
            "use strict";
            d.r(n), d.d(n, {
                default: () => i
            });
            var r = d(73723),
                t = d(7787),
                s = d(52342);

            function i({
                error: e,
                reset: n
            }) {
                return (0, t.useEffect)(() => {
                    s.Cp(e)
                }, [e]), (0, r.jsxs)("div", {
                    "data-sentry-component": "Error",
                    "data-sentry-source-file": "error.tsx",
                    children: [(0, r.jsx)("h2", {
                        children: "Something went wrong!"
                    }), (0, r.jsx)("button", {
                        onClick: () => n(),
                        children: "Try again"
                    })]
                })
            }
        },
        68791: (e, n, d) => {
            Promise.resolve().then(d.bind(d, 17966))
        }
    },
    e => {
        e.O(0, [82968, 21268, 77358], () => e(e.s = 68791)), _N_E = e.O()
    }
]);