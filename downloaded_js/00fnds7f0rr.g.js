(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 566083, e => {
    "use strict";
    var r = e.i(14666),
        t = e.i(569959),
        c = e.i(499531);
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