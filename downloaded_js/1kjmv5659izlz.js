;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "b7c35ca5-a771-1c5f-e8a6-64c719a62008")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 108051, e => {
    "use strict";
    var t = e.i(409781),
        r = e.i(393335);
    let n = "https://api2.amplitude.com/2/httpapi";

    function i() {
        let e = document.cookie.split("; ").find(e => e.startsWith("experiment_exposure="));
        if (e) try {
            return JSON.parse(decodeURIComponent(e.split("=")[1]))
        } catch (e) {
            console.error("Error parsing experiment cookie:", e);
            return
        }
    }

    function s(e) {
        let t = i();
        if (t)
            for (let {
                    key: r,
                    variant: n,
                    deviceId: i,
                    userId: s
                }
                of t[e] || []) r && n && (i || s) && o(r, n, i, s)
    }

    function o(e, t, r, i) {
        e && t && (r || i) && fetch(n, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                api_key: "a331ddf18d0a0ba0070793c7e48f7a2a",
                events: [{
                    event_type: "$exposure",
                    ...i && {
                        user_id: i
                    },
                    ...r && {
                        device_id: r
                    },
                    event_properties: {
                        flag_key: e,
                        variant: t
                    }
                }]
            })
        }).then(e => (e.ok || console.warn("Exposure event failed", e.statusText), e.json())).catch(e => {
            console.warn("Error setting exposure event", e)
        })
    }
    e.s(["AMPLITUDE_ENDPOINT", 0, n, "default", 0, function() {
        let e = (0, r.usePathname)();
        return (0, t.useEffect)(() => {
            s(e)
        }, [e]), null
    }, "getExperimentFromCookie", 0, i, "sendExposureEvent", 0, o, "trackExposureOnPageView", 0, s])
}, 121090, e => {
    "use strict";
    var t = e.i(785328),
        r = e.i(749583),
        n = e.i(393335);
    e.s(["default", 0, () => {
        let e = (0, n.usePathname)();
        return (0, t.jsxs)("div", {
            className: "fixed bottom-0 z-50 flex h-[60px] w-full items-center bg-[white] bg-orange-100 px-5",
            "data-sentry-component": "PreviewExitBanner",
            "data-sentry-source-file": "PreviewExitBanner.tsx",
            children: [(0, t.jsx)("div", {
                className: "flex flex-1 items-center",
                children: (0, t.jsxs)("h4", {
                    className: "",
                    children: ["You are in ", (0, t.jsx)("b", {
                        children: "Draft Mode"
                    }), ", your changes will be live once you publish them, be cautious."]
                })
            }), (0, t.jsx)(r.default, {
                className: "rounded-sm text-white",
                href: `/api/exit-draft?destination=${e}`,
                prefetch: !1,
                "data-sentry-element": "Button",
                "data-sentry-source-file": "PreviewExitBanner.tsx",
                children: "Exit Draft Mode"
            })]
        })
    }])
}]);

//# debugId=b7c35ca5-a771-1c5f-e8a6-64c719a62008