;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "eb220597-d2d6-b204-755a-c902c05bc5e7")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 566083, e => {
    "use strict";
    var r = e.i(230452),
        t = e.i(309578),
        i = e.i(516830);
    e.s(["default", 0, function({
        error: e
    }) {
        return (0, i.useEffect)(() => {
            t.y(e)
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

//# debugId=eb220597-d2d6-b204-755a-c902c05bc5e7