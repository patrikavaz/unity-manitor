try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "553407fd-38e0-4686-9234-aaf22890dacd", e._sentryDebugIdIdentifier = "sentry-dbid-553407fd-38e0-4686-9234-aaf22890dacd")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [77358], {
        57858: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                onRouterTransitionStart: () => a
            });
            var s = t(68820),
                r = t(4706),
                d = t(53924),
                i = t(37811);
            let o = i.env.SENTRY_DSN || "https://ce7d682306884c779d3c5d683a430b07@o488710.ingest.sentry.io/4503931302641664",
                l = i.env.VERCEL_ENV || "production";
            s.Ts({
                dsn: o,
                environment: l,
                integrations: [r.f()],
                tracesSampleRate: .005,
                profileSessionSampleRate: .005
            });
            let a = d.Nc
        },
        87710: (e, n, t) => {
            Promise.resolve().then(t.t.bind(t, 38492, 23)), Promise.resolve().then(t.t.bind(t, 97412, 23)), Promise.resolve().then(t.t.bind(t, 70581, 23)), Promise.resolve().then(t.t.bind(t, 32629, 23)), Promise.resolve().then(t.t.bind(t, 96673, 23)), Promise.resolve().then(t.t.bind(t, 95345, 23)), Promise.resolve().then(t.t.bind(t, 45352, 23)), Promise.resolve().then(t.bind(t, 79729))
        }
    },
    e => {
        var n = n => e(e.s = n);
        e.O(0, [24667, 35282], () => (n(57858), n(96769), n(87710))), _N_E = e.O()
    }
]);