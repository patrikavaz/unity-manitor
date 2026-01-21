try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3643edbf-e2fa-476c-a9b3-a87323b7df36", e._sentryDebugIdIdentifier = "sentry-dbid-3643edbf-e2fa-476c-a9b3-a87323b7df36")
    }()
} catch (e) {}! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
        e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = function(e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                if (null != r)
                    for (var t in r) r.hasOwnProperty(t) && (e[t] = r[t])
            }
            return e
        }({}, e._sentryModuleMetadata[(new e.Error).stack], {
            "_sentryBundlerPluginAppKey:hexagon-web": !0
        })
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [34219], {
        47531: (e, n, r) => {
            "use strict";
            r.r(n), r.d(n, {
                default: () => o
            });
            var t = r(32475),
                a = r(12520),
                d = r(53163);

            function o({
                error: e
            }) {
                return (0, d.useEffect)(() => {
                    a.Cp(e)
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
        59612: (e, n, r) => {
            Promise.resolve().then(r.bind(r, 47531))
        }
    },
    e => {
        e.O(0, [24667, 18027, 77358], () => e(e.s = 59612)), _N_E = e.O()
    }
]);