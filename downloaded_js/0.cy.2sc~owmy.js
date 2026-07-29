(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 452316, t => {
    "use strict";
    var e = t.i(14666),
        i = t.i(499531),
        n = t.i(569959);
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