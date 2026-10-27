;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "3ca9e45b-1f5f-9233-353f-73f5b7f754aa")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 566083, r => {
    "use strict";
    var e = r.i(167358),
        t = r.i(309578),
        o = r.i(495056);
    r.s(["default", 0, function({
        error: r
    }) {
        return (0, o.useEffect)(() => {
            t.y(r)
        }, [r]), (0, e.jsx)("html", {
            "data-sentry-component": "GlobalError",
            "data-sentry-source-file": "global-error.tsx",
            children: (0, e.jsxs)("body", {
                children: [(0, e.jsx)("h1", {
                    children: "An error occurred"
                }), (0, e.jsx)("p", {
                    children: "Something went wrong. Please try again later."
                })]
            })
        })
    }])
}]);

//# debugId=3ca9e45b-1f5f-9233-353f-73f5b7f754aa