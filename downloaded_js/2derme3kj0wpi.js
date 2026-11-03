;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "a866e285-5073-be56-9909-bdc3c94e6ff4")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 452316, t => {
    "use strict";
    var e = t.i(230452),
        r = t.i(516830),
        n = t.i(309578);
    t.s(["default", 0, function({
        error: t,
        reset: i
    }) {
        return (0, r.useEffect)(() => {
            n.y(t)
        }, [t]), (0, e.jsxs)("div", {
            "data-sentry-component": "Error",
            "data-sentry-source-file": "error.tsx",
            children: [(0, e.jsx)("h2", {
                children: "Something went wrong!"
            }), (0, e.jsx)("button", {
                onClick: () => i(),
                children: "Try again"
            })]
        })
    }])
}]);

//# debugId=a866e285-5073-be56-9909-bdc3c94e6ff4