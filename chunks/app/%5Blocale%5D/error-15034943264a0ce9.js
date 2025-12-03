try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "127eda4a-7d5c-4a1b-bcee-007f4f8e8744", e._sentryDebugIdIdentifier = "sentry-dbid-127eda4a-7d5c-4a1b-bcee-007f4f8e8744")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [48530], {
        42969: (e, n, r) => {
            Promise.resolve().then(r.bind(r, 91282))
        },
        91282: (e, n, r) => {
            "use strict";
            r.r(n), r.d(n, {
                default: () => i
            });
            var t = r(68325),
                d = r(90337),
                s = r(96274);

            function i({
                error: e,
                reset: n
            }) {
                return (0, d.useEffect)(() => {
                    s.Cp(e)
                }, [e]), (0, t.jsxs)("div", {
                    "data-sentry-component": "Error",
                    "data-sentry-source-file": "error.tsx",
                    children: [(0, t.jsx)("h2", {
                        children: "Something went wrong!"
                    }), (0, t.jsx)("button", {
                        onClick: () => n(),
                        children: "Try again"
                    })]
                })
            }
        }
    },
    e => {
        e.O(0, [20318, 67960, 77358], () => e(e.s = 42969)), _N_E = e.O()
    }
]);