;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "864e6ccf-63fd-8833-12da-6aecb59426ab")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 452316, t => {
    "use strict";
    var e = t.i(785328),
        r = t.i(409781),
        n = t.i(309578);
    t.s(["default", 0, function({
        error: t,
        reset: i
    }) {
        return (0, r.useEffect)(() => {
            n.captureException(t)
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

//# debugId=864e6ccf-63fd-8833-12da-6aecb59426ab