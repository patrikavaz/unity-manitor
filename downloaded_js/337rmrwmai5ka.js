;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "a193b9cf-f3c8-6279-8f51-9528809bb74d")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 566083, e => {
    "use strict";
    var r = e.i(785328),
        t = e.i(309578),
        o = e.i(409781);
    e.s(["default", 0, function({
        error: e
    }) {
        return (0, o.useEffect)(() => {
            t.captureException(e)
        }, [e]), (0, r.jsx)("html", {
            "data-sentry-component": "GlobalError",
            "data-sentry-source-file": "global-error.tsx",
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

//# debugId=a193b9cf-f3c8-6279-8f51-9528809bb74d