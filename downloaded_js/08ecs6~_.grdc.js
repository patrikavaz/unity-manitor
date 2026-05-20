(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 566083, e => {
    "use strict";
    var r = e.i(500783),
        t = e.i(677278),
        c = e.i(3931);
    e.s(["default", 0, function({
        error: e
    }) {
        return (0, c.useEffect)(() => {
            t.captureException(e)
        }, [e]), (0, r.jsx)("html", {
            children: (0, r.jsxs)("body", {
                children: [(0, r.jsx)("h1", {
                    children: "An error occurred"
                }), (0, r.jsx)("p", {
                    children: "Something went wrong. Please try again later."
                })]
            })
        })
    }])
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4151955d-e47e-5f13-98e2-ef876d943ba8")
    } catch (e) {}
}();
//# debugId=4151955d-e47e-5f13-98e2-ef876d943ba8