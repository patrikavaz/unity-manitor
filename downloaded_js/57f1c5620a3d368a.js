(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 566083, e => {
    "use strict";
    var r = e.i(853712),
        t = e.i(677278),
        c = e.i(107579);

    function i({
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
    }
    e.s(["default", () => i])
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b300247a-bc18-5a37-9ad8-1ba02057ea38")
    } catch (e) {}
}();
//# debugId=b300247a-bc18-5a37-9ad8-1ba02057ea38