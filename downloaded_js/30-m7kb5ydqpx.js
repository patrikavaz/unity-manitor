;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "78c53b9a-32f7-d663-fd11-ae9af249b4c9")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 452316, i => {
    "use strict";
    var t = i.i(230452),
        e = i.i(516830),
        n = i.i(309578);
    i.s(["default", 0, function({
        error: i,
        reset: c
    }) {
        return (0, e.useEffect)(() => {
            n.y(i)
        }, [i]), (0, t.jsxs)("div", {
            children: [(0, t.jsx)("h2", {
                children: "Something went wrong!"
            }), (0, t.jsx)("button", {
                onClick: () => c(),
                children: "Try again"
            })]
        })
    }])
}]);

//# debugId=78c53b9a-32f7-d663-fd11-ae9af249b4c9