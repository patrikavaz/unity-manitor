(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 411110, e => {
    "use strict";
    var n = e.i(145158),
        t = Object.defineProperty,
        r = Object.getOwnPropertySymbols,
        a = Object.prototype.hasOwnProperty,
        l = Object.prototype.propertyIsEnumerable,
        o = (e, n, r) => n in e ? t(e, n, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[n] = r;
    let i = (0, n.forwardRef)((e, t) => {
        let {
            alt: i,
            color: c = "currentColor",
            size: s = "1em",
            weight: u = "regular",
            mirrored: f = !1,
            children: d,
            weights: m
        } = e, h = ((e, n) => {
            var t = {};
            for (var o in e) a.call(e, o) && 0 > n.indexOf(o) && (t[o] = e[o]);
            if (null != e && r)
                for (var o of r(e)) 0 > n.indexOf(o) && l.call(e, o) && (t[o] = e[o]);
            return t
        })(e, ["alt", "color", "size", "weight", "mirrored", "children", "weights"]);
        return n.default.createElement("svg", ((e, n) => {
            for (var t in n || (n = {})) a.call(n, t) && o(e, t, n[t]);
            if (r)
                for (var t of r(n)) l.call(n, t) && o(e, t, n[t]);
            return e
        })({
            ref: t,
            xmlns: "http://www.w3.org/2000/svg",
            width: s,
            height: s,
            fill: c,
            viewBox: "0 0 256 256",
            transform: f ? "scale(-1, 1)" : void 0
        }, h), !!i && n.default.createElement("title", null, i), d, m.get(u))
    });
    i.displayName = "SSRBase", e.s(["default", () => i])
}, 255018, e => {
    "use strict";
    var n = e.i(615167),
        t = e.i(274316),
        r = e.i(814507),
        a = e.i(129824),
        l = e.i(246916);

    function o({
        data: e
    }) {
        let {
            shouldDisplayMTBanner: o,
            updatedBlocks: i
        } = (0, l.useMTBanner)(e, a.L1_PAGES_NO_MT_BANNER);
        return (0, n.jsxs)(n.Fragment, {
            children: [e.announcementBanner?.hasAnnouncementBanner && (0, n.jsx)(r.default, {
                rounded: !0,
                action: {
                    title: e.announcementBanner.announcementBannerContent?.action?.text || "",
                    href: e.announcementBanner.announcementBannerContent?.action?.fieldLink?.linkReference?.href?.current || "",
                    target: e.announcementBanner.announcementBannerContent?.action?.fieldLink?.linkReference?.target || "_self"
                },
                className: "absolute top-0 left-0 z-20",
                children: e.announcementBanner.announcementBannerContent?.title
            }), (0, n.jsx)(t.default, {
                blocks: o ? i : e.blocks
            })]
        })
    }
    e.s(["default", () => o])
}, 969945, e => {
    e.v(n => Promise.all(["static/chunks/1db4e3429f2113e2.js"].map(n => e.l(n))).then(() => n(170438)))
}, 802241, e => {
    e.v(n => Promise.all(["static/chunks/831dc8f22dc4ab5e.js"].map(n => e.l(n))).then(() => n(966543)))
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6ed86855-bfc7-549a-86b5-40f9e43380ac")
    } catch (e) {}
}();
//# debugId=6ed86855-bfc7-549a-86b5-40f9e43380ac