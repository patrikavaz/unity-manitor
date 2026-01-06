try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "84451a07-2e99-489b-8515-bd385752dfe5", e._sentryDebugIdIdentifier = "sentry-dbid-84451a07-2e99-489b-8515-bd385752dfe5")
} catch (e) {} {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], {
        "_sentryBundlerPluginAppKey:hexagon-web": !0
    })
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [77358], {
        57858: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                onRouterTransitionStart: () => b
            });
            var s = n(68820),
                o = n(4706),
                d = n(39697),
                r = n(53924),
                i = n(37811);
            let a = i.env.SENTRY_DSN || "https://ce7d682306884c779d3c5d683a430b07@o488710.ingest.sentry.io/4503931302641664",
                l = i.env.VERCEL_ENV || "production";
            s.Ts({
                dsn: a,
                environment: l,
                integrations: [o.f(), d.y({
                    filterKeys: ["hexagon-web"],
                    behaviour: "apply-tag-if-exclusively-contains-third-party-frames"
                })],
                tracesSampleRate: .005,
                profileSessionSampleRate: .005
            });
            let b = r.Nc
        },
        87710: (e, t, n) => {
            Promise.resolve().then(n.t.bind(n, 38492, 23)), Promise.resolve().then(n.t.bind(n, 97412, 23)), Promise.resolve().then(n.t.bind(n, 70581, 23)), Promise.resolve().then(n.t.bind(n, 32629, 23)), Promise.resolve().then(n.t.bind(n, 96673, 23)), Promise.resolve().then(n.t.bind(n, 95345, 23)), Promise.resolve().then(n.t.bind(n, 45352, 23)), Promise.resolve().then(n.bind(n, 79729))
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [24667, 55406], () => (t(57858), t(96769), t(87710))), _N_E = e.O()
    }
]);