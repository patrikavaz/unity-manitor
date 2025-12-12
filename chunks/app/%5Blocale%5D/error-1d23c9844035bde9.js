try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "76465ccb-dd12-4d60-9da8-c564a19eb94a", e._sentryDebugIdIdentifier = "sentry-dbid-76465ccb-dd12-4d60-9da8-c564a19eb94a")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [48530], {
        2711: (e, n, d) => {
            Promise.resolve().then(d.bind(d, 18530))
        },
        18530: (e, n, d) => {
            "use strict";
            d.r(n), d.d(n, {
                default: () => i
            });
            var r = d(32475),
                t = d(53163),
                s = d(62050);

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
        }
    },
    e => {
        e.O(0, [24667, 35282, 77358], () => e(e.s = 2711)), _N_E = e.O()
    }
]);