try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "aa6ff705-0248-434e-9d80-16ba96ee48e3", e._sentryDebugIdIdentifier = "sentry-dbid-aa6ff705-0248-434e-9d80-16ba96ee48e3")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [77358], {
        41484: (e, n, t) => {
            Promise.resolve().then(t.t.bind(t, 16074, 23)), Promise.resolve().then(t.t.bind(t, 15390, 23)), Promise.resolve().then(t.t.bind(t, 23715, 23)), Promise.resolve().then(t.t.bind(t, 32591, 23)), Promise.resolve().then(t.t.bind(t, 36827, 23)), Promise.resolve().then(t.t.bind(t, 46387, 23)), Promise.resolve().then(t.t.bind(t, 22150, 23)), Promise.resolve().then(t.bind(t, 64483))
        },
        80594: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                onRouterTransitionStart: () => a
            });
            var s = t(44767),
                r = t(46163),
                i = t(53794),
                o = t(37811);
            let d = o.env.SENTRY_DSN || "https://ce7d682306884c779d3c5d683a430b07@o488710.ingest.sentry.io/4503931302641664",
                l = o.env.VERCEL_ENV || "production";
            s.Ts({
                dsn: d,
                environment: l,
                integrations: [r.f()],
                tracesSampleRate: .005,
                profileSessionSampleRate: .005
            });
            let a = i.Nc
        }
    },
    e => {
        var n = n => e(e.s = n);
        e.O(0, [20318, 67960], () => (n(80594), n(11067), n(41484))), _N_E = e.O()
    }
]);