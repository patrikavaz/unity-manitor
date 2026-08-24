(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 694983, e => {
    "use strict";
    var t = e.i(785328),
        s = e.i(722990),
        a = e.i(722978),
        l = e.i(691156),
        i = e.i(131564);
    let n = ({
        title: e,
        faqs: s,
        blockKey: n,
        theme: r
    }) => {
        let c = (0, a.default)("pb-28", {
            "dark bg-black": "dark" === r
        });
        return (0, t.jsxs)("section", {
            className: c,
            children: [(0, t.jsx)(i.default, {
                title: e
            }), (0, t.jsx)("div", {
                className: "container grid gap-1",
                children: s?.map((s, a) => (0, t.jsx)(l.default, {
                    title: s.question,
                    blockKey: `${n}-${e}-${a}`,
                    children: s.answer
                }, `faq-${e}-${a}`))
            })]
        })
    };
    e.s(["default", 0, ({
        title: e,
        faqs: a,
        blockKey: l,
        isHidden: i,
        theme: r
    }) => (0, t.jsx)(t.Fragment, {
        children: !i && (0, t.jsx)(n, {
            theme: "dark" === r ? "dark" : "light",
            title: e,
            faqs: a?.map(e => ({
                question: e.question,
                answer: (0, t.jsx)(s.PortableText, {
                    value: e.answer
                })
            })),
            blockKey: l
        })
    })], 694983)
}, 70909, e => {
    e.v(t => Promise.all(["static/chunks/2wz63vlu6w-_f.js"].map(t => e.l(t))).then(() => t(376839)))
}, 440574, e => {
    e.v(t => Promise.all(["static/chunks/171yqzhl-22he.js"].map(t => e.l(t))).then(() => t(33857)))
}, 104688, e => {
    e.v(t => Promise.all(["static/chunks/37hz_to6t7xbu.js"].map(t => e.l(t))).then(() => t(425687)))
}, 574228, e => {
    e.v(t => Promise.all(["static/chunks/42v1dunao1kr3.js"].map(t => e.l(t))).then(() => t(10770)))
}]);