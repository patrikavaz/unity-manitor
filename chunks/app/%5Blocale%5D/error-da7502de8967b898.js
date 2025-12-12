try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "843b89f3-499e-4c69-a16b-829b424eb827", e._sentryDebugIdIdentifier = "sentry-dbid-843b89f3-499e-4c69-a16b-829b424eb827")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [48530], {
        43992: (e, n, r) => {
            "use strict";
            r.r(n), r.d(n, {
                default: () => i
            });
            var t = r(22650),
                s = r(11698),
                d = r(6756);

            function i({
                error: e,
                reset: n
            }) {
                return (0, s.useEffect)(() => {
                    d.Cp(e)
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
        },
        75334: (e, n, r) => {
            Promise.resolve().then(r.bind(r, 43992))
        }
    },
    e => {
        e.O(0, [99641, 25794, 77358], () => e(e.s = 75334)), _N_E = e.O()
    }
]);