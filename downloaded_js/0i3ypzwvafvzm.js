;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "b5ccaeac-9aff-5256-d5b7-b8dbe54f505b")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 452316, t => {
    "use strict";
    var e = t.i(167358),
        r = t.i(495056),
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

//# debugId=b5ccaeac-9aff-5256-d5b7-b8dbe54f505b