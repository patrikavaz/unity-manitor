(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 452316, t => {
    "use strict";
    var e = t.i(210139),
        i = t.i(999721),
        n = t.i(677278);
    t.s(["default", 0, function({
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
    }])
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7d139791-bb25-5aa2-b130-9d0c6a427898")
    } catch (e) {}
}();
//# debugId=7d139791-bb25-5aa2-b130-9d0c6a427898