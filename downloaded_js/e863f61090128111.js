(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 452316, t => {
    "use strict";
    var e = t.i(853712),
        i = t.i(107579),
        n = t.i(677278);

    function c({
        error: t,
        reset: c
    }) {
        return (0, i.useEffect)(() => {
            n.captureException(t)
        }, [t]), (0, e.jsxs)("div", {
            children: [(0, e.jsx)("h2", {
                children: "Something went wrong!"
            }), (0, e.jsx)("button", {
                onClick: () => c(),
                children: "Try again"
            })]
        })
    }
    t.s(["default", () => c])
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "93af8ee7-6aa8-5eed-9f31-b8f841c02bd1")
    } catch (e) {}
}();
//# debugId=93af8ee7-6aa8-5eed-9f31-b8f841c02bd1