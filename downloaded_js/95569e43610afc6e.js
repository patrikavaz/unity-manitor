(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 22541, (e, t, n) => {
    function a(e) {
        return e instanceof Map ? e.clear = e.delete = e.set = function() {
            throw Error("map is read-only")
        } : e instanceof Set && (e.add = e.clear = e.delete = function() {
            throw Error("set is read-only")
        }), Object.freeze(e), Object.getOwnPropertyNames(e).forEach(function(t) {
            var n = e[t];
            "object" != typeof n || Object.isFrozen(n) || a(n)
        }), e
    }
    a.default = a;
    class r {
        constructor(e) {
            void 0 === e.data && (e.data = {}), this.data = e.data, this.isMatchIgnored = !1
        }
        ignoreMatch() {
            this.isMatchIgnored = !0
        }
    }

    function i(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function o(e, ...t) {
        let n = Object.create(null);
        for (let t in e) n[t] = e[t];
        return t.forEach(function(e) {
            for (let t in e) n[t] = e[t]
        }), n
    }
    class c {
        constructor(e, t) {
            this.buffer = "", this.classPrefix = t.classPrefix, e.walk(this)
        }
        addText(e) {
            this.buffer += i(e)
        }
        openNode(e) {
            if (!e.kind) return;
            let t = e.kind;
            e.sublanguage || (t = `${this.classPrefix}${t}`), this.span(t)
        }
        closeNode(e) {
            e.kind && (this.buffer += "</span>")
        }
        value() {
            return this.buffer
        }
        span(e) {
            this.buffer += `<span class="${e}">`
        }
    }
    class l {
        constructor() {
            this.rootNode = {
                children: []
            }, this.stack = [this.rootNode]
        }
        get top() {
            return this.stack[this.stack.length - 1]
        }
        get root() {
            return this.rootNode
        }
        add(e) {
            this.top.children.push(e)
        }
        openNode(e) {
            let t = {
                kind: e,
                children: []
            };
            this.add(t), this.stack.push(t)
        }
        closeNode() {
            if (this.stack.length > 1) return this.stack.pop()
        }
        closeAllNodes() {
            for (; this.closeNode(););
        }
        toJSON() {
            return JSON.stringify(this.rootNode, null, 4)
        }
        walk(e) {
            return this.constructor._walk(e, this.rootNode)
        }
        static _walk(e, t) {
            return "string" == typeof t ? e.addText(t) : t.children && (e.openNode(t), t.children.forEach(t => this._walk(e, t)), e.closeNode(t)), e
        }
        static _collapse(e) {
            "string" == typeof e || e.children && (e.children.every(e => "string" == typeof e) ? e.children = [e.children.join("")] : e.children.forEach(e => {
                l._collapse(e)
            }))
        }
    }
    class s extends l {
        constructor(e) {
            super(), this.options = e
        }
        addKeyword(e, t) {
            "" !== e && (this.openNode(t), this.addText(e), this.closeNode())
        }
        addText(e) {
            "" !== e && this.add(e)
        }
        addSublanguage(e, t) {
            let n = e.root;
            n.kind = t, n.sublanguage = !0, this.add(n)
        }
        toHTML() {
            return new c(this, this.options).value()
        }
        finalize() {
            return !0
        }
    }

    function u(e) {
        return e ? "string" == typeof e ? e : e.source : null
    }
    let d = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,
        g = "[a-zA-Z]\\w*",
        h = "[a-zA-Z_]\\w*",
        f = "\\b\\d+(\\.\\d+)?",
        b = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
        m = "\\b(0b[01]+)",
        p = {
            begin: "\\\\[\\s\\S]",
            relevance: 0
        },
        y = {
            begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
        },
        v = function(e, t, n = {}) {
            let a = o({
                className: "comment",
                begin: e,
                end: t,
                contains: []
            }, n);
            return a.contains.push(y), a.contains.push({
                className: "doctag",
                begin: "(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",
                relevance: 0
            }), a
        },
        E = v("//", "$"),
        N = v("/\\*", "\\*/"),
        _ = v("#", "$"),
        w = {
            begin: /(?=\/[^/\n]*\/)/,
            contains: [{
                className: "regexp",
                begin: /\//,
                end: /\/[gimuy]*/,
                illegal: /\n/,
                contains: [p, {
                    begin: /\[/,
                    end: /\]/,
                    relevance: 0,
                    contains: [p]
                }]
            }]
        };
    var O = Object.freeze({
        __proto__: null,
        MATCH_NOTHING_RE: /\b\B/,
        IDENT_RE: g,
        UNDERSCORE_IDENT_RE: h,
        NUMBER_RE: f,
        C_NUMBER_RE: b,
        BINARY_NUMBER_RE: m,
        RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
        SHEBANG: (e = {}) => {
            let t = /^#![ ]*\//;
            return e.binary && (e.begin = function(...e) {
                return e.map(e => u(e)).join("")
            }(t, /.*\b/, e.binary, /\b.*/)), o({
                className: "meta",
                begin: t,
                end: /$/,
                relevance: 0,
                "on:begin": (e, t) => {
                    0 !== e.index && t.ignoreMatch()
                }
            }, e)
        },
        BACKSLASH_ESCAPE: p,
        APOS_STRING_MODE: {
            className: "string",
            begin: "'",
            end: "'",
            illegal: "\\n",
            contains: [p]
        },
        QUOTE_STRING_MODE: {
            className: "string",
            begin: '"',
            end: '"',
            illegal: "\\n",
            contains: [p]
        },
        PHRASAL_WORDS_MODE: y,
        COMMENT: v,
        C_LINE_COMMENT_MODE: E,
        C_BLOCK_COMMENT_MODE: N,
        HASH_COMMENT_MODE: _,
        NUMBER_MODE: {
            className: "number",
            begin: f,
            relevance: 0
        },
        C_NUMBER_MODE: {
            className: "number",
            begin: b,
            relevance: 0
        },
        BINARY_NUMBER_MODE: {
            className: "number",
            begin: m,
            relevance: 0
        },
        CSS_NUMBER_MODE: {
            className: "number",
            begin: f + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
            relevance: 0
        },
        REGEXP_MODE: w,
        TITLE_MODE: {
            className: "title",
            begin: g,
            relevance: 0
        },
        UNDERSCORE_TITLE_MODE: {
            className: "title",
            begin: h,
            relevance: 0
        },
        METHOD_GUARD: {
            begin: "\\.\\s*" + h,
            relevance: 0
        },
        END_SAME_AS_BEGIN: function(e) {
            return Object.assign(e, {
                "on:begin": (e, t) => {
                    t.data._beginMatch = e[1]
                },
                "on:end": (e, t) => {
                    t.data._beginMatch !== e[1] && t.ignoreMatch()
                }
            })
        }
    });

    function x(e, t) {
        "." === e.input[e.index - 1] && t.ignoreMatch()
    }

    function M(e, t) {
        !t || e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e.__beforeBegin = x, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords, void 0 === e.relevance && (e.relevance = 0))
    }

    function k(e, t) {
        Array.isArray(e.illegal) && (e.illegal = function(...e) {
            return "(" + e.map(e => u(e)).join("|") + ")"
        }(...e.illegal))
    }

    function S(e, t) {
        if (e.match) {
            if (e.begin || e.end) throw Error("begin & end are not supported with match");
            e.begin = e.match, delete e.match
        }
    }

    function R(e, t) {
        void 0 === e.relevance && (e.relevance = 1)
    }
    let j = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"],
        T = {
            "after:highlightElement": ({
                el: e,
                result: t,
                text: n
            }) => {
                let a = L(e);
                if (!a.length) return;
                let r = document.createElement("div");
                r.innerHTML = t.value, t.value = function(e, t, n) {
                    let a = 0,
                        r = "",
                        o = [];

                    function c() {
                        return e.length && t.length ? e[0].offset !== t[0].offset ? e[0].offset < t[0].offset ? e : t : "start" === t[0].event ? e : t : e.length ? e : t
                    }

                    function l(e) {
                        r += "<" + I(e) + [].map.call(e.attributes, function(e) {
                            return " " + e.nodeName + '="' + i(e.value) + '"'
                        }).join("") + ">"
                    }

                    function s(e) {
                        r += "</" + I(e) + ">"
                    }

                    function u(e) {
                        ("start" === e.event ? l : s)(e.node)
                    }
                    for (; e.length || t.length;) {
                        let t = c();
                        if (r += i(n.substring(a, t[0].offset)), a = t[0].offset, t === e) {
                            o.reverse().forEach(s);
                            do u(t.splice(0, 1)[0]), t = c(); while (t === e && t.length && t[0].offset === a) o.reverse().forEach(l)
                        } else "start" === t[0].event ? o.push(t[0].node) : o.pop(), u(t.splice(0, 1)[0])
                    }
                    return r + i(n.substr(a))
                }(a, L(r), n)
            }
        };

    function I(e) {
        return e.nodeName.toLowerCase()
    }

    function L(e) {
        let t = [];
        return ! function e(n, a) {
            for (let r = n.firstChild; r; r = r.nextSibling) 3 === r.nodeType ? a += r.nodeValue.length : 1 === r.nodeType && (t.push({
                event: "start",
                offset: a,
                node: r
            }), a = e(r, a), I(r).match(/br|hr|img|input/) || t.push({
                event: "stop",
                offset: a,
                node: r
            }));
            return a
        }(e, 0), t
    }
    let A = {},
        C = e => {
            console.error(e)
        },
        D = (e, ...t) => {
            console.log(`WARN: ${e}`, ...t)
        },
        P = (e, t) => {
            A[`${e}/${t}`] || (console.log(`Deprecated as of ${e}. ${t}`), A[`${e}/${t}`] = !0)
        },
        B = Symbol("nomatch");
    t.exports = function(e) {
        var t;
        let n, c = Object.create(null),
            l = Object.create(null),
            g = [],
            h = !0,
            f = /(^(<[^>]+>|\t|)+|\n)/gm,
            b = "Could not find the language '{}', did you forget to load/include a language module?",
            m = {
                disableAutodetect: !0,
                name: "Plain text",
                contains: []
            },
            p = {
                noHighlightRe: /^(no-?highlight)$/i,
                languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
                classPrefix: "hljs-",
                tabReplace: null,
                useBR: !1,
                languages: null,
                __emitter: s
            };

        function y(e) {
            return p.noHighlightRe.test(e)
        }

        function v(e, t, n, a) {
            let r = "",
                i = "";
            "object" == typeof t ? (r = e, n = t.ignoreIllegals, i = t.language, a = void 0) : (P("10.7.0", "highlight(lang, code, ...args) has been deprecated."), P("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), i = e, r = t);
            let o = {
                code: r,
                language: i
            };
            z("before:highlight", o);
            let c = o.result ? o.result : E(o.language, o.code, n, a);
            return c.code = o.code, z("after:highlight", c), c
        }

        function E(e, t, n, a) {
            function l() {
                null != w.subLanguage ? function() {
                    if ("" === I) return;
                    let e = null;
                    if ("string" == typeof w.subLanguage) {
                        if (!c[w.subLanguage]) return x.addText(I);
                        e = E(w.subLanguage, I, !0, O[w.subLanguage]), O[w.subLanguage] = e.top
                    } else e = N(I, w.subLanguage.length ? w.subLanguage : null);
                    w.relevance > 0 && (L += e.relevance), x.addSublanguage(e.emitter, e.language)
                }() : function() {
                    if (!w.keywords) return x.addText(I);
                    let e = 0;
                    w.keywordPatternRe.lastIndex = 0;
                    let t = w.keywordPatternRe.exec(I),
                        n = "";
                    for (; t;) {
                        n += I.substring(e, t.index);
                        let a = function(e, t) {
                            let n = y.case_insensitive ? t[0].toLowerCase() : t[0];
                            return Object.prototype.hasOwnProperty.call(e.keywords, n) && e.keywords[n]
                        }(w, t);
                        if (a) {
                            let [e, r] = a;
                            if (x.addText(n), n = "", L += r, e.startsWith("_")) n += t[0];
                            else {
                                let n = y.classNameAliases[e] || e;
                                x.addKeyword(t[0], n)
                            }
                        } else n += t[0];
                        e = w.keywordPatternRe.lastIndex, t = w.keywordPatternRe.exec(I)
                    }
                    n += I.substr(e), x.addText(n)
                }(), I = ""
            }

            function s(e) {
                return e.className && x.openNode(y.classNameAliases[e.className] || e.className), w = Object.create(e, {
                    parent: {
                        value: w
                    }
                })
            }
            let f = {};

            function m(a, i) {
                let o = i && i[0];
                if (I += a, null == o) return l(), 0;
                if ("begin" === f.type && "end" === i.type && f.index === i.index && "" === o) {
                    if (I += t.slice(i.index, i.index + 1), !h) {
                        let t = Error("0 width match regex");
                        throw t.languageName = e, t.badRule = f.rule, t
                    }
                    return 1
                }
                if (f = i, "begin" === i.type) {
                    let e = i[0],
                        t = i.rule,
                        n = new r(t);
                    for (let a of [t.__beforeBegin, t["on:begin"]])
                        if (a && (a(i, n), n.isMatchIgnored)) return 0 === w.matcher.regexIndex ? (I += e[0], 1) : (U = !0, 0);
                    return t && t.endSameAsBegin && (t.endRe = RegExp(e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "m")), t.skip ? I += e : (t.excludeBegin && (I += e), l(), t.returnBegin || t.excludeBegin || (I = e)), s(t), t.returnBegin ? 0 : e.length
                }
                if ("illegal" !== i.type || n) {
                    if ("end" === i.type) {
                        let e = function(e) {
                            let n = e[0],
                                a = t.substr(e.index),
                                i = function e(t, n, a) {
                                    var i;
                                    let o, c = (i = t.endRe, (o = i && i.exec(a)) && 0 === o.index);
                                    if (c) {
                                        if (t["on:end"]) {
                                            let e = new r(t);
                                            t["on:end"](n, e), e.isMatchIgnored && (c = !1)
                                        }
                                        if (c) {
                                            for (; t.endsParent && t.parent;) t = t.parent;
                                            return t
                                        }
                                    }
                                    if (t.endsWithParent) return e(t.parent, n, a)
                                }(w, e, a);
                            if (!i) return B;
                            let o = w;
                            o.skip ? I += n : (o.returnEnd || o.excludeEnd || (I += n), l(), o.excludeEnd && (I = n));
                            do w.className && x.closeNode(), w.skip || w.subLanguage || (L += w.relevance), w = w.parent; while (w !== i.parent) return i.starts && (i.endSameAsBegin && (i.starts.endRe = i.endRe), s(i.starts)), o.returnEnd ? 0 : n.length
                        }(i);
                        if (e !== B) return e
                    }
                } else {
                    let e = Error('Illegal lexeme "' + o + '" for mode "' + (w.className || "<unnamed>") + '"');
                    throw e.mode = w, e
                }
                if ("illegal" === i.type && "" === o) return 1;
                if (P > 1e5 && P > 3 * i.index) throw Error("potential infinite loop, way more iterations than matches");
                return I += o, o.length
            }
            let y = A(e);
            if (!y) throw C(b.replace("{}", e)), Error('Unknown language: "' + e + '"');
            let v = function(e, {
                    plugins: t
                }) {
                    function n(t, n) {
                        return RegExp(u(t), "m" + (e.case_insensitive ? "i" : "") + (n ? "g" : ""))
                    }
                    class a {
                        constructor() {
                            this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
                        }
                        addRule(e, t) {
                            t.position = this.position++, this.matchIndexes[this.matchAt] = t, this.regexes.push([t, e]), this.matchAt += RegExp(e.toString() + "|").exec("").length - 1 + 1
                        }
                        compile() {
                            0 === this.regexes.length && (this.exec = () => null);
                            let e = this.regexes.map(e => e[1]);
                            this.matcherRe = n(function(e, t = "|") {
                                let n = 0;
                                return e.map(e => {
                                    let t = n += 1,
                                        a = u(e),
                                        r = "";
                                    for (; a.length > 0;) {
                                        let e = d.exec(a);
                                        if (!e) {
                                            r += a;
                                            break
                                        }
                                        r += a.substring(0, e.index), a = a.substring(e.index + e[0].length), "\\" === e[0][0] && e[1] ? r += "\\" + String(Number(e[1]) + t) : (r += e[0], "(" === e[0] && n++)
                                    }
                                    return r
                                }).map(e => `(${e})`).join(t)
                            }(e), !0), this.lastIndex = 0
                        }
                        exec(e) {
                            this.matcherRe.lastIndex = this.lastIndex;
                            let t = this.matcherRe.exec(e);
                            if (!t) return null;
                            let n = t.findIndex((e, t) => t > 0 && void 0 !== e),
                                a = this.matchIndexes[n];
                            return t.splice(0, n), Object.assign(t, a)
                        }
                    }
                    class r {
                        constructor() {
                            this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
                        }
                        getMatcher(e) {
                            if (this.multiRegexes[e]) return this.multiRegexes[e];
                            let t = new a;
                            return this.rules.slice(e).forEach(([e, n]) => t.addRule(e, n)), t.compile(), this.multiRegexes[e] = t, t
                        }
                        resumingScanAtSamePosition() {
                            return 0 !== this.regexIndex
                        }
                        considerAll() {
                            this.regexIndex = 0
                        }
                        addRule(e, t) {
                            this.rules.push([e, t]), "begin" === t.type && this.count++
                        }
                        exec(e) {
                            let t = this.getMatcher(this.regexIndex);
                            t.lastIndex = this.lastIndex;
                            let n = t.exec(e);
                            if (this.resumingScanAtSamePosition())
                                if (n && n.index === this.lastIndex);
                                else {
                                    let t = this.getMatcher(0);
                                    t.lastIndex = this.lastIndex + 1, n = t.exec(e)
                                } return n && (this.regexIndex += n.position + 1, this.regexIndex === this.count && this.considerAll()), n
                        }
                    }
                    if (e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes("self")) throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
                    return e.classNameAliases = o(e.classNameAliases || {}),
                        function t(a, i) {
                            let c;
                            if (a.isCompiled) return a;
                            [S].forEach(e => e(a, i)), e.compilerExtensions.forEach(e => e(a, i)), a.__beforeBegin = null, [M, k, R].forEach(e => e(a, i)), a.isCompiled = !0;
                            let l = null;
                            if ("object" == typeof a.keywords && (l = a.keywords.$pattern, delete a.keywords.$pattern), a.keywords && (a.keywords = function e(t, n, a = "keyword") {
                                    let r = {};
                                    return "string" == typeof t ? i(a, t.split(" ")) : Array.isArray(t) ? i(a, t) : Object.keys(t).forEach(function(a) {
                                        Object.assign(r, e(t[a], n, a))
                                    }), r;

                                    function i(e, t) {
                                        n && (t = t.map(e => e.toLowerCase())), t.forEach(function(t) {
                                            var n, a, i;
                                            let o = t.split("|");
                                            r[o[0]] = [e, (n = o[0], (a = o[1]) ? Number(a) : +(i = n, !j.includes(i.toLowerCase())))]
                                        })
                                    }
                                }(a.keywords, e.case_insensitive)), a.lexemes && l) throw Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");
                            return l = l || a.lexemes || /\w+/, a.keywordPatternRe = n(l, !0), i && (a.begin || (a.begin = /\B|\b/), a.beginRe = n(a.begin), a.endSameAsBegin && (a.end = a.begin), a.end || a.endsWithParent || (a.end = /\B|\b/), a.end && (a.endRe = n(a.end)), a.terminatorEnd = u(a.end) || "", a.endsWithParent && i.terminatorEnd && (a.terminatorEnd += (a.end ? "|" : "") + i.terminatorEnd)), a.illegal && (a.illegalRe = n(a.illegal)), a.contains || (a.contains = []), a.contains = [].concat(...a.contains.map(function(e) {
                                var t;
                                return ((t = "self" === e ? a : e).variants && !t.cachedVariants && (t.cachedVariants = t.variants.map(function(e) {
                                    return o(t, {
                                        variants: null
                                    }, e)
                                })), t.cachedVariants) ? t.cachedVariants : ! function e(t) {
                                    return !!t && (t.endsWithParent || e(t.starts))
                                }(t) ? Object.isFrozen(t) ? o(t) : t : o(t, {
                                    starts: t.starts ? o(t.starts) : null
                                })
                            })), a.contains.forEach(function(e) {
                                t(e, a)
                            }), a.starts && t(a.starts, i), c = new r, a.contains.forEach(e => c.addRule(e.begin, {
                                rule: e,
                                type: "begin"
                            })), a.terminatorEnd && c.addRule(a.terminatorEnd, {
                                type: "end"
                            }), a.illegal && c.addRule(a.illegal, {
                                type: "illegal"
                            }), a.matcher = c, a
                        }(e)
                }(y, {
                    plugins: g
                }),
                _ = "",
                w = a || v,
                O = {},
                x = new p.__emitter(p),
                T = [];
            for (let e = w; e !== y; e = e.parent) e.className && T.unshift(e.className);
            T.forEach(e => x.openNode(e));
            let I = "",
                L = 0,
                D = 0,
                P = 0,
                U = !1;
            try {
                for (w.matcher.considerAll();;) {
                    P++, U ? U = !1 : w.matcher.considerAll(), w.matcher.lastIndex = D;
                    let e = w.matcher.exec(t);
                    if (!e) break;
                    let n = t.substring(D, e.index),
                        a = m(n, e);
                    D = e.index + a
                }
                return m(t.substr(D)), x.closeAllNodes(), x.finalize(), _ = x.toHTML(), {
                    relevance: Math.floor(L),
                    value: _,
                    language: e,
                    illegal: !1,
                    emitter: x,
                    top: w
                }
            } catch (n) {
                if (n.message && n.message.includes("Illegal")) return {
                    illegal: !0,
                    illegalBy: {
                        msg: n.message,
                        context: t.slice(D - 100, D + 100),
                        mode: n.mode
                    },
                    sofar: _,
                    relevance: 0,
                    value: i(t),
                    emitter: x
                };
                if (h) return {
                    illegal: !1,
                    relevance: 0,
                    value: i(t),
                    emitter: x,
                    language: e,
                    top: w,
                    errorRaised: n
                };
                throw n
            }
        }

        function N(e, t) {
            let n;
            t = t || p.languages || Object.keys(c);
            let a = ((n = {
                    relevance: 0,
                    emitter: new p.__emitter(p),
                    value: i(e),
                    illegal: !1,
                    top: m
                }).emitter.addText(e), n),
                r = t.filter(A).filter($).map(t => E(t, e, !1));
            r.unshift(a);
            let [o, l] = r.sort((e, t) => {
                if (e.relevance !== t.relevance) return t.relevance - e.relevance;
                if (e.language && t.language) {
                    if (A(e.language).supersetOf === t.language) return 1;
                    else if (A(t.language).supersetOf === e.language) return -1
                }
                return 0
            });
            return o.second_best = l, o
        }
        let _ = /^(<[^>]+>|\t)+/gm;

        function w(e) {
            var t;
            let n, a = function(e) {
                let t = e.className + " ";
                t += e.parentNode ? e.parentNode.className : "";
                let n = p.languageDetectRe.exec(t);
                if (n) {
                    let t = A(n[1]);
                    return t || (D(b.replace("{}", n[1])), D("Falling back to no-highlight mode for this block.", e)), t ? n[1] : "no-highlight"
                }
                return t.split(/\s+/).find(e => y(e) || A(e))
            }(e);
            if (y(a)) return;
            z("before:highlightElement", {
                el: e,
                language: a
            });
            let r = e.textContent,
                i = a ? v(r, {
                    language: a,
                    ignoreIllegals: !0
                }) : N(r);
            z("after:highlightElement", {
                el: e,
                result: i,
                text: r
            }), e.innerHTML = i.value, t = i.language, n = a ? l[a] : t, e.classList.add("hljs"), n && e.classList.add(n), e.result = {
                language: i.language,
                re: i.relevance,
                relavance: i.relevance
            }, i.second_best && (e.second_best = {
                language: i.second_best.language,
                re: i.second_best.relevance,
                relavance: i.second_best.relevance
            })
        }
        let x = () => {
                x.called || (x.called = !0, P("10.6.0", "initHighlighting() is deprecated.  Use highlightAll() instead."), document.querySelectorAll("pre code").forEach(w))
            },
            I = !1;

        function L() {
            if ("loading" === document.readyState) {
                I = !0;
                return
            }
            document.querySelectorAll("pre code").forEach(w)
        }

        function A(e) {
            return c[e = (e || "").toLowerCase()] || c[l[e]]
        }

        function U(e, {
            languageName: t
        }) {
            "string" == typeof e && (e = [e]), e.forEach(e => {
                l[e.toLowerCase()] = t
            })
        }

        function $(e) {
            let t = A(e);
            return t && !t.disableAutodetect
        }

        function z(e, t) {
            g.forEach(function(n) {
                n[e] && n[e](t)
            })
        }
        for (let r in "u" > typeof window && window.addEventListener && window.addEventListener("DOMContentLoaded", function() {
                I && L()
            }, !1), Object.assign(e, {
                highlight: v,
                highlightAuto: N,
                highlightAll: L,
                fixMarkup: function(e) {
                    var t;
                    return P("10.2.0", "fixMarkup will be removed entirely in v11.0"), P("10.2.0", "Please see https://github.com/highlightjs/highlight.js/issues/2534"), t = e, p.tabReplace || p.useBR ? t.replace(f, e => "\n" === e ? p.useBR ? "<br>" : e : p.tabReplace ? e.replace(/\t/g, p.tabReplace) : e) : t
                },
                highlightElement: w,
                highlightBlock: function(e) {
                    return P("10.7.0", "highlightBlock will be removed entirely in v12.0"), P("10.7.0", "Please use highlightElement now."), w(e)
                },
                configure: function(e) {
                    e.useBR && (P("10.3.0", "'useBR' will be removed entirely in v11.0"), P("10.3.0", "Please see https://github.com/highlightjs/highlight.js/issues/2559")), p = o(p, e)
                },
                initHighlighting: x,
                initHighlightingOnLoad: function() {
                    P("10.6.0", "initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."), I = !0
                },
                registerLanguage: function(t, n) {
                    let a = null;
                    try {
                        a = n(e)
                    } catch (e) {
                        if (C("Language definition for '{}' could not be registered.".replace("{}", t)), h) C(e);
                        else throw e;
                        a = m
                    }
                    a.name || (a.name = t), c[t] = a, a.rawDefinition = n.bind(null, e), a.aliases && U(a.aliases, {
                        languageName: t
                    })
                },
                unregisterLanguage: function(e) {
                    for (let t of (delete c[e], Object.keys(l))) l[t] === e && delete l[t]
                },
                listLanguages: function() {
                    return Object.keys(c)
                },
                getLanguage: A,
                registerAliases: U,
                requireLanguage: function(e) {
                    P("10.4.0", "requireLanguage will be removed entirely in v11."), P("10.4.0", "Please see https://github.com/highlightjs/highlight.js/pull/2844");
                    let t = A(e);
                    if (t) return t;
                    throw Error("The '{}' language is required, but not loaded.".replace("{}", e))
                },
                autoDetection: $,
                inherit: o,
                addPlugin: function(e) {
                    var t;
                    (t = e)["before:highlightBlock"] && !t["before:highlightElement"] && (t["before:highlightElement"] = e => {
                        t["before:highlightBlock"](Object.assign({
                            block: e.el
                        }, e))
                    }), t["after:highlightBlock"] && !t["after:highlightElement"] && (t["after:highlightElement"] = e => {
                        t["after:highlightBlock"](Object.assign({
                            block: e.el
                        }, e))
                    }), g.push(e)
                },
                vuePlugin: (t = e, {
                    Component: n = {
                        props: ["language", "code", "autodetect"],
                        data: function() {
                            return {
                                detectedLanguage: "",
                                unknownLanguage: !1
                            }
                        },
                        computed: {
                            className() {
                                return this.unknownLanguage ? "" : "hljs " + this.detectedLanguage
                            },
                            highlighted() {
                                if (!this.autoDetect && !t.getLanguage(this.language)) return console.warn(`The language "${this.language}" you specified could not be found.`), this.unknownLanguage = !0, i(this.code);
                                let e = {};
                                return this.autoDetect ? (e = t.highlightAuto(this.code), this.detectedLanguage = e.language) : (e = t.highlight(this.language, this.code, this.ignoreIllegals), this.detectedLanguage = this.language), e.value
                            },
                            autoDetect() {
                                var e;
                                return !this.language || !!((e = this.autodetect) || "" === e)
                            },
                            ignoreIllegals: () => !0
                        },
                        render(e) {
                            return e("pre", {}, [e("code", {
                                class: this.className,
                                domProps: {
                                    innerHTML: this.highlighted
                                }
                            })])
                        }
                    },
                    VuePlugin: {
                        install(e) {
                            e.component("highlightjs", n)
                        }
                    }
                }).VuePlugin
            }), e.debugMode = function() {
                h = !1
            }, e.safeMode = function() {
                h = !0
            }, e.versionString = "10.7.3", O) "object" == typeof O[r] && a(O[r]);
        return Object.assign(e, O), e.addPlugin({
            "before:highlightElement": ({
                el: e
            }) => {
                p.useBR && (e.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ /]*>/g, "\n"))
            },
            "after:highlightElement": ({
                result: e
            }) => {
                p.useBR && (e.value = e.value.replace(/\n/g, "<br>"))
            }
        }), e.addPlugin(T), e.addPlugin({
            "after:highlightElement": ({
                result: e
            }) => {
                p.tabReplace && (e.value = e.value.replace(_, e => e.replace(/\t/g, p.tabReplace)))
            }
        }), e
    }({})
}, 439216, (e, t, n) => {
    var a;

    function r(e) {
        for (var t, n, a, r, i = 1, o = [].slice.call(arguments), c = 0, l = e.length, s = "", u = !1, d = !1, g = function() {
                return o[i++]
            }; c < l; ++c)
            if (t = e[c], u) switch (u = !1, "." == t ? (d = !1, t = e[++c]) : "0" == t && "." == e[c + 1] ? (d = !0, c += 2, t = e[c]) : d = !0, r = function() {
                    for (var n = "";
                        /\d/.test(e[c]);) n += e[c++], t = e[c];
                    return n.length > 0 ? parseInt(n) : null
                }(), t) {
                case "b":
                    s += parseInt(g(), 10).toString(2);
                    break;
                case "c":
                    "string" == typeof(n = g()) || n instanceof String ? s += n : s += String.fromCharCode(parseInt(n, 10));
                    break;
                case "d":
                    s += parseInt(g(), 10);
                    break;
                case "f":
                    a = String(parseFloat(g()).toFixed(r || 6)), s += d ? a : a.replace(/^0/, "");
                    break;
                case "j":
                    s += JSON.stringify(g());
                    break;
                case "o":
                    s += "0" + parseInt(g(), 10).toString(8);
                    break;
                case "s":
                    s += g();
                    break;
                case "x":
                    s += "0x" + parseInt(g(), 10).toString(16);
                    break;
                case "X":
                    s += "0x" + parseInt(g(), 10).toString(16).toUpperCase();
                    break;
                default:
                    s += t
            } else "%" === t ? u = !0 : s += t;
        return s
    }(a = t.exports = r).format = r, a.vsprintf = function(e, t) {
        return r.apply(null, [e].concat(t))
    }, "u" > typeof console && "function" == typeof console.log && (a.printf = function() {
        console.log(r.apply(null, arguments))
    })
}, 764121, (e, t, n) => {
    "use strict";
    var a = e.r(439216),
        r = i(Error);

    function i(e) {
        return t.displayName = e.displayName || e.name, t;

        function t(t) {
            return t && (t = a.apply(null, arguments)), new e(t)
        }
    }
    t.exports = r, r.eval = i(EvalError), r.range = i(RangeError), r.reference = i(ReferenceError), r.syntax = i(SyntaxError), r.type = i(TypeError), r.uri = i(URIError), r.create = i
}, 911214, (e, t, n) => {
    "use strict";
    var a = e.r(22541),
        r = e.r(764121);
    n.highlight = o, n.highlightAuto = function(e, t) {
        var n, c, l, s, u = t || {},
            d = u.subset || a.listLanguages(),
            g = u.prefix,
            h = d.length,
            f = -1;
        if (null == g && (g = i), "string" != typeof e) throw r("Expected `string` for value, got `%s`", e);
        for (c = {
                relevance: 0,
                language: null,
                value: []
            }, n = {
                relevance: 0,
                language: null,
                value: []
            }; ++f < h;) s = d[f], a.getLanguage(s) && ((l = o(s, e, t)).language = s, l.relevance > c.relevance && (c = l), l.relevance > n.relevance && (c = n, n = l));
        return c.language && (n.secondBest = c), n
    }, n.registerLanguage = function(e, t) {
        a.registerLanguage(e, t)
    }, n.listLanguages = function() {
        return a.listLanguages()
    }, n.registerAlias = function(e, t) {
        var n, r = e;
        for (n in t && ((r = {})[e] = t), r) a.registerAliases(r[n], {
            languageName: n
        })
    }, c.prototype.addText = function(e) {
        var t, n, a = this.stack;
        "" !== e && ((n = (t = a[a.length - 1]).children[t.children.length - 1]) && "text" === n.type ? n.value += e : t.children.push({
            type: "text",
            value: e
        }))
    }, c.prototype.addKeyword = function(e, t) {
        this.openNode(t), this.addText(e), this.closeNode()
    }, c.prototype.addSublanguage = function(e, t) {
        var n = this.stack,
            a = n[n.length - 1],
            r = e.rootNode.children;
        a.children = a.children.concat(t ? {
            type: "element",
            tagName: "span",
            properties: {
                className: [t]
            },
            children: r
        } : r)
    }, c.prototype.openNode = function(e) {
        var t = this.stack,
            n = this.options.classPrefix + e,
            a = t[t.length - 1],
            r = {
                type: "element",
                tagName: "span",
                properties: {
                    className: [n]
                },
                children: []
            };
        a.children.push(r), t.push(r)
    }, c.prototype.closeNode = function() {
        this.stack.pop()
    }, c.prototype.closeAllNodes = l, c.prototype.finalize = l, c.prototype.toHTML = function() {
        return ""
    };
    var i = "hljs-";

    function o(e, t, n) {
        var o, l = a.configure({}),
            s = (n || {}).prefix;
        if ("string" != typeof e) throw r("Expected `string` for name, got `%s`", e);
        if (!a.getLanguage(e)) throw r("Unknown language: `%s` is not registered", e);
        if ("string" != typeof t) throw r("Expected `string` for value, got `%s`", t);
        if (null == s && (s = i), a.configure({
                __emitter: c,
                classPrefix: s
            }), o = a.highlight(t, {
                language: e,
                ignoreIllegals: !0
            }), a.configure(l || {}), o.errorRaised) throw o.errorRaised;
        return {
            relevance: o.relevance,
            language: o.language,
            value: o.emitter.rootNode.children
        }
    }

    function c(e) {
        this.options = e, this.rootNode = {
            children: []
        }, this.stack = [this.rootNode]
    }

    function l() {}
}, 849570, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = void 0, n.default = {
        hljs: {
            display: "block",
            overflowX: "auto",
            padding: "0.5em",
            background: "#272822",
            color: "#ddd"
        },
        "hljs-tag": {
            color: "#f92672"
        },
        "hljs-keyword": {
            color: "#f92672",
            fontWeight: "bold"
        },
        "hljs-selector-tag": {
            color: "#f92672",
            fontWeight: "bold"
        },
        "hljs-literal": {
            color: "#f92672",
            fontWeight: "bold"
        },
        "hljs-strong": {
            color: "#f92672"
        },
        "hljs-name": {
            color: "#f92672"
        },
        "hljs-code": {
            color: "#66d9ef"
        },
        "hljs-class .hljs-title": {
            color: "white"
        },
        "hljs-attribute": {
            color: "#bf79db"
        },
        "hljs-symbol": {
            color: "#bf79db"
        },
        "hljs-regexp": {
            color: "#bf79db"
        },
        "hljs-link": {
            color: "#bf79db"
        },
        "hljs-string": {
            color: "#a6e22e"
        },
        "hljs-bullet": {
            color: "#a6e22e"
        },
        "hljs-subst": {
            color: "#a6e22e"
        },
        "hljs-title": {
            color: "#a6e22e",
            fontWeight: "bold"
        },
        "hljs-section": {
            color: "#a6e22e",
            fontWeight: "bold"
        },
        "hljs-emphasis": {
            color: "#a6e22e"
        },
        "hljs-type": {
            color: "#a6e22e",
            fontWeight: "bold"
        },
        "hljs-built_in": {
            color: "#a6e22e"
        },
        "hljs-builtin-name": {
            color: "#a6e22e"
        },
        "hljs-selector-attr": {
            color: "#a6e22e"
        },
        "hljs-selector-pseudo": {
            color: "#a6e22e"
        },
        "hljs-addition": {
            color: "#a6e22e"
        },
        "hljs-variable": {
            color: "#a6e22e"
        },
        "hljs-template-tag": {
            color: "#a6e22e"
        },
        "hljs-template-variable": {
            color: "#a6e22e"
        },
        "hljs-comment": {
            color: "#75715e"
        },
        "hljs-quote": {
            color: "#75715e"
        },
        "hljs-deletion": {
            color: "#75715e"
        },
        "hljs-meta": {
            color: "#75715e"
        },
        "hljs-doctag": {
            fontWeight: "bold"
        },
        "hljs-selector-id": {
            fontWeight: "bold"
        }
    }
}, 683504, (e, t, n) => {
    t.exports = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }, t.exports.__esModule = !0, t.exports.default = t.exports
}, 854858, (e, t, n) => {
    t.exports = function(e) {
        let t = {
                keyword: ["abstract", "as", "base", "break", "case", "class", "const", "continue", "do", "else", "event", "explicit", "extern", "finally", "fixed", "for", "foreach", "goto", "if", "implicit", "in", "interface", "internal", "is", "lock", "namespace", "new", "operator", "out", "override", "params", "private", "protected", "public", "readonly", "record", "ref", "return", "sealed", "sizeof", "stackalloc", "static", "struct", "switch", "this", "throw", "try", "typeof", "unchecked", "unsafe", "using", "virtual", "void", "volatile", "while"].concat(["add", "alias", "and", "ascending", "async", "await", "by", "descending", "equals", "from", "get", "global", "group", "init", "into", "join", "let", "nameof", "not", "notnull", "on", "or", "orderby", "partial", "remove", "select", "set", "unmanaged", "value|0", "var", "when", "where", "with", "yield"]),
                built_in: ["bool", "byte", "char", "decimal", "delegate", "double", "dynamic", "enum", "float", "int", "long", "nint", "nuint", "object", "sbyte", "short", "string", "ulong", "uint", "ushort"],
                literal: ["default", "false", "null", "true"]
            },
            n = e.inherit(e.TITLE_MODE, {
                begin: "[a-zA-Z](\\.?\\w)*"
            }),
            a = {
                className: "number",
                variants: [{
                    begin: "\\b(0b[01']+)"
                }, {
                    begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
                }, {
                    begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                }],
                relevance: 0
            },
            r = {
                className: "string",
                begin: '@"',
                end: '"',
                contains: [{
                    begin: '""'
                }]
            },
            i = e.inherit(r, {
                illegal: /\n/
            }),
            o = {
                className: "subst",
                begin: /\{/,
                end: /\}/,
                keywords: t
            },
            c = e.inherit(o, {
                illegal: /\n/
            }),
            l = {
                className: "string",
                begin: /\$"/,
                end: '"',
                illegal: /\n/,
                contains: [{
                    begin: /\{\{/
                }, {
                    begin: /\}\}/
                }, e.BACKSLASH_ESCAPE, c]
            },
            s = {
                className: "string",
                begin: /\$@"/,
                end: '"',
                contains: [{
                    begin: /\{\{/
                }, {
                    begin: /\}\}/
                }, {
                    begin: '""'
                }, o]
            },
            u = e.inherit(s, {
                illegal: /\n/,
                contains: [{
                    begin: /\{\{/
                }, {
                    begin: /\}\}/
                }, {
                    begin: '""'
                }, c]
            });
        o.contains = [s, l, r, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, a, e.C_BLOCK_COMMENT_MODE], c.contains = [u, l, i, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, a, e.inherit(e.C_BLOCK_COMMENT_MODE, {
            illegal: /\n/
        })];
        let d = {
                variants: [s, l, r, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
            },
            g = {
                begin: "<",
                end: ">",
                contains: [{
                    beginKeywords: "in out"
                }, n]
            },
            h = e.IDENT_RE + "(<" + e.IDENT_RE + "(\\s*,\\s*" + e.IDENT_RE + ")*>)?(\\[\\])?",
            f = {
                begin: "@" + e.IDENT_RE,
                relevance: 0
            };
        return {
            name: "C#",
            aliases: ["cs", "c#"],
            keywords: t,
            illegal: /::/,
            contains: [e.COMMENT("///", "$", {
                returnBegin: !0,
                contains: [{
                    className: "doctag",
                    variants: [{
                        begin: "///",
                        relevance: 0
                    }, {
                        begin: "<!--|-->"
                    }, {
                        begin: "</?",
                        end: ">"
                    }]
                }]
            }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                className: "meta",
                begin: "#",
                end: "$",
                keywords: {
                    "meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum"
                }
            }, d, a, {
                beginKeywords: "class interface",
                relevance: 0,
                end: /[{;=]/,
                illegal: /[^\s:,]/,
                contains: [{
                    beginKeywords: "where class"
                }, n, g, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
            }, {
                beginKeywords: "namespace",
                relevance: 0,
                end: /[{;=]/,
                illegal: /[^\s:]/,
                contains: [n, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
            }, {
                beginKeywords: "record",
                relevance: 0,
                end: /[{;=]/,
                illegal: /[^\s:]/,
                contains: [n, g, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
            }, {
                className: "meta",
                begin: "^\\s*\\[",
                excludeBegin: !0,
                end: "\\]",
                excludeEnd: !0,
                contains: [{
                    className: "meta-string",
                    begin: /"/,
                    end: /"/
                }]
            }, {
                beginKeywords: "new return throw await else",
                relevance: 0
            }, {
                className: "function",
                begin: "(" + h + "\\s+)+" + e.IDENT_RE + "\\s*(<.+>\\s*)?\\(",
                returnBegin: !0,
                end: /\s*[{;=]/,
                excludeEnd: !0,
                keywords: t,
                contains: [{
                    beginKeywords: "public private protected static internal protected abstract async extern override unsafe virtual new sealed partial",
                    relevance: 0
                }, {
                    begin: e.IDENT_RE + "\\s*(<.+>\\s*)?\\(",
                    returnBegin: !0,
                    contains: [e.TITLE_MODE, g],
                    relevance: 0
                }, {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: t,
                    relevance: 0,
                    contains: [d, a, e.C_BLOCK_COMMENT_MODE]
                }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
            }, f]
        }
    }
}, 143384, (e, t, n) => {
    "use strict";
    var a = e.r(683504);
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = void 0, n.default = a(e.r(854858)).default
}, 587484, (e, t, n) => {
    let a = "[A-Za-z$_][0-9A-Za-z$_]*",
        r = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
        i = ["true", "false", "null", "undefined", "NaN", "Infinity"],
        o = [].concat(["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"], ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"], ["Intl", "DataView", "Number", "Math", "Date", "String", "RegExp", "Object", "Function", "Boolean", "Error", "Symbol", "Set", "Map", "WeakSet", "WeakMap", "Proxy", "Reflect", "JSON", "Promise", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Float32Array", "Array", "Uint8Array", "Uint8ClampedArray", "ArrayBuffer", "BigInt64Array", "BigUint64Array", "BigInt"], ["EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"]);

    function c(e) {
        return l("(?=", e, ")")
    }

    function l(...e) {
        return e.map(e => e ? "string" == typeof e ? e : e.source : null).join("")
    }
    t.exports = function(e) {
        let t = /<[A-Za-z0-9\\._:-]+/,
            n = /\/[A-Za-z0-9\\._:-]+>|\/>/,
            s = {
                $pattern: a,
                keyword: r,
                literal: i,
                built_in: o
            },
            u = "[0-9](_?[0-9])*",
            d = `\\.(${u})`,
            g = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
            h = {
                className: "number",
                variants: [{
                    begin: `(\\b(${g})((${d})|\\.)?|(${d}))[eE][+-]?(${u})\\b`
                }, {
                    begin: `\\b(${g})\\b((${d})\\b|\\.)?|(${d})\\b`
                }, {
                    begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
                }, {
                    begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
                }, {
                    begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
                }, {
                    begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
                }, {
                    begin: "\\b0[0-7]+n?\\b"
                }],
                relevance: 0
            },
            f = {
                className: "subst",
                begin: "\\$\\{",
                end: "\\}",
                keywords: s,
                contains: []
            },
            b = {
                begin: "html`",
                end: "",
                starts: {
                    end: "`",
                    returnEnd: !1,
                    contains: [e.BACKSLASH_ESCAPE, f],
                    subLanguage: "xml"
                }
            },
            m = {
                begin: "css`",
                end: "",
                starts: {
                    end: "`",
                    returnEnd: !1,
                    contains: [e.BACKSLASH_ESCAPE, f],
                    subLanguage: "css"
                }
            },
            p = {
                className: "string",
                begin: "`",
                end: "`",
                contains: [e.BACKSLASH_ESCAPE, f]
            },
            y = {
                className: "comment",
                variants: [e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                    relevance: 0,
                    contains: [{
                        className: "doctag",
                        begin: "@[A-Za-z]+",
                        contains: [{
                            className: "type",
                            begin: "\\{",
                            end: "\\}",
                            relevance: 0
                        }, {
                            className: "variable",
                            begin: a + "(?=\\s*(-)|$)",
                            endsParent: !0,
                            relevance: 0
                        }, {
                            begin: /(?=[^\n])\s/,
                            relevance: 0
                        }]
                    }]
                }), e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE]
            },
            v = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, b, m, p, h, e.REGEXP_MODE];
        f.contains = v.concat({
            begin: /\{/,
            end: /\}/,
            keywords: s,
            contains: ["self"].concat(v)
        });
        let E = [].concat(y, f.contains),
            N = E.concat([{
                begin: /\(/,
                end: /\)/,
                keywords: s,
                contains: ["self"].concat(E)
            }]),
            _ = {
                className: "params",
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: s,
                contains: N
            };
        return {
            name: "Javascript",
            aliases: ["js", "jsx", "mjs", "cjs"],
            keywords: s,
            exports: {
                PARAMS_CONTAINS: N
            },
            illegal: /#(?![$_A-z])/,
            contains: [e.SHEBANG({
                label: "shebang",
                binary: "node",
                relevance: 5
            }), {
                label: "use_strict",
                className: "meta",
                relevance: 10,
                begin: /^\s*['"]use (strict|asm)['"]/
            }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, b, m, p, y, h, {
                begin: l(/[{,\n]\s*/, c(l(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/, a + "\\s*:"))),
                relevance: 0,
                contains: [{
                    className: "attr",
                    begin: a + c("\\s*:"),
                    relevance: 0
                }]
            }, {
                begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                keywords: "return throw case",
                contains: [y, e.REGEXP_MODE, {
                    className: "function",
                    begin: "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>",
                    returnBegin: !0,
                    end: "\\s*=>",
                    contains: [{
                        className: "params",
                        variants: [{
                            begin: e.UNDERSCORE_IDENT_RE,
                            relevance: 0
                        }, {
                            className: null,
                            begin: /\(\s*\)/,
                            skip: !0
                        }, {
                            begin: /\(/,
                            end: /\)/,
                            excludeBegin: !0,
                            excludeEnd: !0,
                            keywords: s,
                            contains: N
                        }]
                    }]
                }, {
                    begin: /,/,
                    relevance: 0
                }, {
                    className: "",
                    begin: /\s/,
                    end: /\s*/,
                    skip: !0
                }, {
                    variants: [{
                        begin: "<>",
                        end: "</>"
                    }, {
                        begin: t,
                        "on:begin": (e, t) => {
                            let n = e[0].length + e.index,
                                a = e.input[n];
                            "<" === a ? t.ignoreMatch() : ">" !== a || ((e, {
                                after: t
                            }) => {
                                let n = "</" + e[0].slice(1);
                                return -1 !== e.input.indexOf(n, t)
                            })(e, {
                                after: n
                            }) || t.ignoreMatch()
                        },
                        end: n
                    }],
                    subLanguage: "xml",
                    contains: [{
                        begin: t,
                        end: n,
                        skip: !0,
                        contains: ["self"]
                    }]
                }],
                relevance: 0
            }, {
                className: "function",
                beginKeywords: "function",
                end: /[{;]/,
                excludeEnd: !0,
                keywords: s,
                contains: ["self", e.inherit(e.TITLE_MODE, {
                    begin: a
                }), _],
                illegal: /%/
            }, {
                beginKeywords: "while if switch catch for"
            }, {
                className: "function",
                begin: e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                returnBegin: !0,
                contains: [_, e.inherit(e.TITLE_MODE, {
                    begin: a
                })]
            }, {
                variants: [{
                    begin: "\\." + a
                }, {
                    begin: "\\$" + a
                }],
                relevance: 0
            }, {
                className: "class",
                beginKeywords: "class",
                end: /[{;=]/,
                excludeEnd: !0,
                illegal: /[:"[\]]/,
                contains: [{
                    beginKeywords: "extends"
                }, e.UNDERSCORE_TITLE_MODE]
            }, {
                begin: /\b(?=constructor)/,
                end: /[{;]/,
                excludeEnd: !0,
                contains: [e.inherit(e.TITLE_MODE, {
                    begin: a
                }), "self", _]
            }, {
                begin: "(get|set)\\s+(?=" + a + "\\()",
                end: /\{/,
                keywords: "get set",
                contains: [e.inherit(e.TITLE_MODE, {
                    begin: a
                }), {
                    begin: /\(\)/
                }, _]
            }, {
                begin: /\$[(.]/
            }]
        }
    }
}, 779040, (e, t, n) => {
    "use strict";
    var a = e.r(683504);
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = void 0, n.default = a(e.r(587484)).default
}, 693740, (e, t, n) => {
    function a(e) {
        return e ? "string" == typeof e ? e : e.source : null
    }

    function r(e) {
        return i("(?=", e, ")")
    }

    function i(...e) {
        return e.map(e => a(e)).join("")
    }
    t.exports = function(e) {
        let t = i(/[A-Z_]/, i("(", /[A-Z0-9_.-]*:/, ")?"), /[A-Z0-9_.-]*/),
            n = {
                className: "symbol",
                begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
            },
            o = {
                begin: /\s/,
                contains: [{
                    className: "meta-keyword",
                    begin: /#?[a-z_][a-z1-9_-]+/,
                    illegal: /\n/
                }]
            },
            c = e.inherit(o, {
                begin: /\(/,
                end: /\)/
            }),
            l = e.inherit(e.APOS_STRING_MODE, {
                className: "meta-string"
            }),
            s = e.inherit(e.QUOTE_STRING_MODE, {
                className: "meta-string"
            }),
            u = {
                endsWithParent: !0,
                illegal: /</,
                relevance: 0,
                contains: [{
                    className: "attr",
                    begin: /[A-Za-z0-9._:-]+/,
                    relevance: 0
                }, {
                    begin: /=\s*/,
                    relevance: 0,
                    contains: [{
                        className: "string",
                        endsParent: !0,
                        variants: [{
                            begin: /"/,
                            end: /"/,
                            contains: [n]
                        }, {
                            begin: /'/,
                            end: /'/,
                            contains: [n]
                        }, {
                            begin: /[^\s"'=<>`]+/
                        }]
                    }]
                }]
            };
        return {
            name: "HTML, XML",
            aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"],
            case_insensitive: !0,
            contains: [{
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                relevance: 10,
                contains: [o, s, l, c, {
                    begin: /\[/,
                    end: /\]/,
                    contains: [{
                        className: "meta",
                        begin: /<![a-z]/,
                        end: />/,
                        contains: [o, c, s, l]
                    }]
                }]
            }, e.COMMENT(/<!--/, /-->/, {
                relevance: 10
            }), {
                begin: /<!\[CDATA\[/,
                end: /\]\]>/,
                relevance: 10
            }, n, {
                className: "meta",
                begin: /<\?xml/,
                end: /\?>/,
                relevance: 10
            }, {
                className: "tag",
                begin: /<style(?=\s|>)/,
                end: />/,
                keywords: {
                    name: "style"
                },
                contains: [u],
                starts: {
                    end: /<\/style>/,
                    returnEnd: !0,
                    subLanguage: ["css", "xml"]
                }
            }, {
                className: "tag",
                begin: /<script(?=\s|>)/,
                end: />/,
                keywords: {
                    name: "script"
                },
                contains: [u],
                starts: {
                    end: /<\/script>/,
                    returnEnd: !0,
                    subLanguage: ["javascript", "handlebars", "xml"]
                }
            }, {
                className: "tag",
                begin: /<>|<\/>/
            }, {
                className: "tag",
                begin: i(/</, r(i(t, "(" + [/\/>/, />/, /\s/].map(e => a(e)).join("|") + ")"))),
                end: /\/?>/,
                contains: [{
                    className: "name",
                    begin: t,
                    relevance: 0,
                    starts: u
                }]
            }, {
                className: "tag",
                begin: i(/<\//, r(i(t, />/))),
                contains: [{
                    className: "name",
                    begin: t,
                    relevance: 0
                }, {
                    begin: />/,
                    relevance: 0,
                    endsParent: !0
                }]
            }]
        }
    }
}, 327297, (e, t, n) => {
    "use strict";
    var a = e.r(683504);
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = void 0, n.default = a(e.r(693740)).default
}, 990175, (e, t, n) => {
    t.exports = function(e) {
        let t = "([ui](8|16|32|64|128|size)|f(32|64))?",
            n = "drop i8 i16 i32 i64 i128 isize u8 u16 u32 u64 u128 usize f32 f64 str char bool Box Option Result String Vec Copy Send Sized Sync Drop Fn FnMut FnOnce ToOwned Clone Debug PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator Extend IntoIterator DoubleEndedIterator ExactSizeIterator SliceConcatExt ToString assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln! macro_rules! assert_ne! debug_assert_ne!";
        return {
            name: "Rust",
            aliases: ["rs"],
            keywords: {
                $pattern: e.IDENT_RE + "!?",
                keyword: "abstract as async await become box break const continue crate do dyn else enum extern false final fn for if impl in let loop macro match mod move mut override priv pub ref return self Self static struct super trait true try type typeof unsafe unsized use virtual where while yield",
                literal: "true false Some None Ok Err",
                built_in: n
            },
            illegal: "</",
            contains: [e.C_LINE_COMMENT_MODE, e.COMMENT("/\\*", "\\*/", {
                contains: ["self"]
            }), e.inherit(e.QUOTE_STRING_MODE, {
                begin: /b?"/,
                illegal: null
            }), {
                className: "string",
                variants: [{
                    begin: /r(#*)"(.|\n)*?"\1(?!#)/
                }, {
                    begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/
                }]
            }, {
                className: "symbol",
                begin: /'[a-zA-Z_][a-zA-Z0-9_]*/
            }, {
                className: "number",
                variants: [{
                    begin: "\\b0b([01_]+)" + t
                }, {
                    begin: "\\b0o([0-7_]+)" + t
                }, {
                    begin: "\\b0x([A-Fa-f0-9_]+)" + t
                }, {
                    begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + t
                }],
                relevance: 0
            }, {
                className: "function",
                beginKeywords: "fn",
                end: "(\\(|<)",
                excludeEnd: !0,
                contains: [e.UNDERSCORE_TITLE_MODE]
            }, {
                className: "meta",
                begin: "#!?\\[",
                end: "\\]",
                contains: [{
                    className: "meta-string",
                    begin: /"/,
                    end: /"/
                }]
            }, {
                className: "class",
                beginKeywords: "type",
                end: ";",
                contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, {
                    endsParent: !0
                })],
                illegal: "\\S"
            }, {
                className: "class",
                beginKeywords: "trait enum struct union",
                end: /\{/,
                contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, {
                    endsParent: !0
                })],
                illegal: "[\\w\\d]"
            }, {
                begin: e.IDENT_RE + "::",
                keywords: {
                    built_in: n
                }
            }, {
                begin: "->"
            }]
        }
    }
}, 44658, (e, t, n) => {
    "use strict";
    var a = e.r(683504);
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = void 0, n.default = a(e.r(990175)).default
}, 921416, (e, t, n) => {
    let a = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
        r = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"],
        i = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"],
        o = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"],
        c = ["align-content", "align-items", "align-self", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "auto", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "clip-path", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-variant", "font-variant-ligatures", "font-variation-settings", "font-weight", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inherit", "initial", "justify-content", "left", "letter-spacing", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "mask", "max-height", "max-width", "min-height", "min-width", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "right", "src", "tab-size", "table-layout", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index"].reverse();
    t.exports = function(e) {
        let t = {
                IMPORTANT: {
                    className: "meta",
                    begin: "!important"
                },
                HEXCOLOR: {
                    className: "number",
                    begin: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"
                },
                ATTRIBUTE_SELECTOR_MODE: {
                    className: "selector-attr",
                    begin: /\[/,
                    end: /\]/,
                    illegal: "$",
                    contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
                }
            },
            n = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE];
        return {
            name: "CSS",
            case_insensitive: !0,
            illegal: /[=|'\$]/,
            keywords: {
                keyframePosition: "from to"
            },
            classNameAliases: {
                keyframePosition: "selector-tag"
            },
            contains: [e.C_BLOCK_COMMENT_MODE, {
                begin: /-(webkit|moz|ms|o)-(?=[a-z])/
            }, e.CSS_NUMBER_MODE, {
                className: "selector-id",
                begin: /#[A-Za-z0-9_-]+/,
                relevance: 0
            }, {
                className: "selector-class",
                begin: "\\.[a-zA-Z-][a-zA-Z0-9_-]*",
                relevance: 0
            }, t.ATTRIBUTE_SELECTOR_MODE, {
                className: "selector-pseudo",
                variants: [{
                    begin: ":(" + i.join("|") + ")"
                }, {
                    begin: "::(" + o.join("|") + ")"
                }]
            }, {
                className: "attribute",
                begin: "\\b(" + c.join("|") + ")\\b"
            }, {
                begin: ":",
                end: "[;}]",
                contains: [t.HEXCOLOR, t.IMPORTANT, e.CSS_NUMBER_MODE, ...n, {
                    begin: /(url|data-uri)\(/,
                    end: /\)/,
                    relevance: 0,
                    keywords: {
                        built_in: "url data-uri"
                    },
                    contains: [{
                        className: "string",
                        begin: /[^)]/,
                        endsWithParent: !0,
                        excludeEnd: !0
                    }]
                }, {
                    className: "built_in",
                    begin: /[\w-]+(?=\()/
                }]
            }, {
                begin: ["(?=", /@/, ")"].map(e => e ? "string" == typeof e ? e : e.source : null).join(""),
                end: "[{;]",
                relevance: 0,
                illegal: /:/,
                contains: [{
                    className: "keyword",
                    begin: /@-?\w[\w]*(-\w+)*/
                }, {
                    begin: /\s/,
                    endsWithParent: !0,
                    excludeEnd: !0,
                    relevance: 0,
                    keywords: {
                        $pattern: /[a-z-]+/,
                        keyword: "and or not only",
                        attribute: r.join(" ")
                    },
                    contains: [{
                        begin: /[a-z-]+(?=:)/,
                        className: "attribute"
                    }, ...n, e.CSS_NUMBER_MODE]
                }]
            }, {
                className: "selector-tag",
                begin: "\\b(" + a.join("|") + ")\\b"
            }]
        }
    }
}, 328193, (e, t, n) => {
    "use strict";
    var a = e.r(683504);
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = void 0, n.default = a(e.r(921416)).default
}, 570133, e => {
    "use strict";
    var t, n, a = e.i(615167);

    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
        return a
    }

    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function o(e, t, n) {
        var a;
        return (a = function(e, t) {
            if ("object" != i(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var a = n.call(e, t || "default");
                if ("object" != i(a)) return a;
                throw TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(t, "string"), (t = "symbol" == i(a) ? a : a + "") in e) ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var c = e.i(145158);

    function l() {
        return (l = Object.assign.bind()).apply(null, arguments)
    }

    function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t && (a = a.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, a)
        }
        return n
    }

    function u(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? s(Object(n), !0).forEach(function(t) {
                o(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    var d = {},
        g = ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"];

    function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t && (a = a.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, a)
        }
        return n
    }

    function f(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? h(Object(n), !0).forEach(function(t) {
                o(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    var b = /\n/g;

    function m(e) {
        var t, n, a, r, i = e.codeString,
            o = e.codeStyle,
            l = e.containerStyle,
            s = e.numberStyle,
            u = e.startingLineNumber;
        return c.default.createElement("code", {
            style: Object.assign({}, o, void 0 === l ? {
                float: "left",
                paddingRight: "10px"
            } : l)
        }, (n = (t = {
            lines: i.replace(/\n$/, "").split("\n"),
            style: void 0 === s ? {} : s,
            startingLineNumber: u
        }).lines, a = t.startingLineNumber, r = t.style, n.map(function(e, t) {
            var n = t + a;
            return c.default.createElement("span", {
                key: "line-".concat(t),
                className: "react-syntax-highlighter-line-number",
                style: "function" == typeof r ? r(n) : r
            }, "".concat(n, "\n"))
        })))
    }

    function p(e, t) {
        return {
            type: "element",
            tagName: "span",
            properties: {
                key: "line-number--".concat(e),
                className: ["comment", "linenumber", "react-syntax-highlighter-line-number"],
                style: t
            },
            children: [{
                type: "text",
                value: e
            }]
        }
    }

    function y(e, t, n) {
        var a = {
                display: "inline-block",
                minWidth: "".concat(n.toString().length, ".25em"),
                paddingRight: "1em",
                textAlign: "right",
                userSelect: "none"
            },
            r = "function" == typeof e ? e(t) : e;
        return f(f({}, a), r)
    }

    function v(e) {
        var t = e.children,
            n = e.lineNumber,
            a = e.lineNumberStyle,
            r = e.largestLineNumber,
            i = e.showInlineLineNumbers,
            o = e.lineProps,
            c = void 0 === o ? {} : o,
            l = e.className,
            s = e.showLineNumbers,
            u = e.wrapLongLines,
            d = "function" == typeof c ? c(n) : c;
        if (d.className = void 0 === l ? [] : l, n && i) {
            var g = y(a, n, r);
            t.unshift(p(n, g))
        }
        return u & s && (d.style = f(f({}, d.style), {}, {
            display: "flex"
        })), {
            type: "element",
            tagName: "span",
            properties: d,
            children: t
        }
    }

    function E(e) {
        var t = e.rows,
            n = e.stylesheet,
            a = e.useInlineStyles;
        return t.map(function(e, t) {
            return function e(t) {
                var n = t.node,
                    a = t.stylesheet,
                    r = t.style,
                    i = t.useInlineStyles,
                    o = t.key,
                    s = n.properties,
                    g = n.type,
                    h = n.tagName,
                    f = n.value;
                if ("text" === g) return f;
                if (h) {
                    var b, m, p = (b = 0, function(t) {
                        return b += 1, t.map(function(t, n) {
                            return e({
                                node: t,
                                stylesheet: a,
                                useInlineStyles: i,
                                key: "code-segment-".concat(b, "-").concat(n)
                            })
                        })
                    });
                    if (i) {
                        var y = Object.keys(a).reduce(function(e, t) {
                                return t.split(".").forEach(function(t) {
                                    e.includes(t) || e.push(t)
                                }), e
                            }, []),
                            v = s.className && s.className.includes("token") ? ["token"] : [],
                            E = s.className && v.concat(s.className.filter(function(e) {
                                return !y.includes(e)
                            }));
                        m = u(u({}, s), {}, {
                            className: E.join(" ") || void 0,
                            style: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = arguments.length > 2 ? arguments[2] : void 0;
                                return (function(e) {
                                    if (0 === e.length || 1 === e.length) return e;
                                    var t, n = e.join(".");
                                    return d[n] || (d[n] = 0 === (t = e.length) || 1 === t ? e : 2 === t ? [e[0], e[1], "".concat(e[0], ".").concat(e[1]), "".concat(e[1], ".").concat(e[0])] : 3 === t ? [e[0], e[1], e[2], "".concat(e[0], ".").concat(e[1]), "".concat(e[0], ".").concat(e[2]), "".concat(e[1], ".").concat(e[0]), "".concat(e[1], ".").concat(e[2]), "".concat(e[2], ".").concat(e[0]), "".concat(e[2], ".").concat(e[1]), "".concat(e[0], ".").concat(e[1], ".").concat(e[2]), "".concat(e[0], ".").concat(e[2], ".").concat(e[1]), "".concat(e[1], ".").concat(e[0], ".").concat(e[2]), "".concat(e[1], ".").concat(e[2], ".").concat(e[0]), "".concat(e[2], ".").concat(e[0], ".").concat(e[1]), "".concat(e[2], ".").concat(e[1], ".").concat(e[0])] : t >= 4 ? [e[0], e[1], e[2], e[3], "".concat(e[0], ".").concat(e[1]), "".concat(e[0], ".").concat(e[2]), "".concat(e[0], ".").concat(e[3]), "".concat(e[1], ".").concat(e[0]), "".concat(e[1], ".").concat(e[2]), "".concat(e[1], ".").concat(e[3]), "".concat(e[2], ".").concat(e[0]), "".concat(e[2], ".").concat(e[1]), "".concat(e[2], ".").concat(e[3]), "".concat(e[3], ".").concat(e[0]), "".concat(e[3], ".").concat(e[1]), "".concat(e[3], ".").concat(e[2]), "".concat(e[0], ".").concat(e[1], ".").concat(e[2]), "".concat(e[0], ".").concat(e[1], ".").concat(e[3]), "".concat(e[0], ".").concat(e[2], ".").concat(e[1]), "".concat(e[0], ".").concat(e[2], ".").concat(e[3]), "".concat(e[0], ".").concat(e[3], ".").concat(e[1]), "".concat(e[0], ".").concat(e[3], ".").concat(e[2]), "".concat(e[1], ".").concat(e[0], ".").concat(e[2]), "".concat(e[1], ".").concat(e[0], ".").concat(e[3]), "".concat(e[1], ".").concat(e[2], ".").concat(e[0]), "".concat(e[1], ".").concat(e[2], ".").concat(e[3]), "".concat(e[1], ".").concat(e[3], ".").concat(e[0]), "".concat(e[1], ".").concat(e[3], ".").concat(e[2]), "".concat(e[2], ".").concat(e[0], ".").concat(e[1]), "".concat(e[2], ".").concat(e[0], ".").concat(e[3]), "".concat(e[2], ".").concat(e[1], ".").concat(e[0]), "".concat(e[2], ".").concat(e[1], ".").concat(e[3]), "".concat(e[2], ".").concat(e[3], ".").concat(e[0]), "".concat(e[2], ".").concat(e[3], ".").concat(e[1]), "".concat(e[3], ".").concat(e[0], ".").concat(e[1]), "".concat(e[3], ".").concat(e[0], ".").concat(e[2]), "".concat(e[3], ".").concat(e[1], ".").concat(e[0]), "".concat(e[3], ".").concat(e[1], ".").concat(e[2]), "".concat(e[3], ".").concat(e[2], ".").concat(e[0]), "".concat(e[3], ".").concat(e[2], ".").concat(e[1]), "".concat(e[0], ".").concat(e[1], ".").concat(e[2], ".").concat(e[3]), "".concat(e[0], ".").concat(e[1], ".").concat(e[3], ".").concat(e[2]), "".concat(e[0], ".").concat(e[2], ".").concat(e[1], ".").concat(e[3]), "".concat(e[0], ".").concat(e[2], ".").concat(e[3], ".").concat(e[1]), "".concat(e[0], ".").concat(e[3], ".").concat(e[1], ".").concat(e[2]), "".concat(e[0], ".").concat(e[3], ".").concat(e[2], ".").concat(e[1]), "".concat(e[1], ".").concat(e[0], ".").concat(e[2], ".").concat(e[3]), "".concat(e[1], ".").concat(e[0], ".").concat(e[3], ".").concat(e[2]), "".concat(e[1], ".").concat(e[2], ".").concat(e[0], ".").concat(e[3]), "".concat(e[1], ".").concat(e[2], ".").concat(e[3], ".").concat(e[0]), "".concat(e[1], ".").concat(e[3], ".").concat(e[0], ".").concat(e[2]), "".concat(e[1], ".").concat(e[3], ".").concat(e[2], ".").concat(e[0]), "".concat(e[2], ".").concat(e[0], ".").concat(e[1], ".").concat(e[3]), "".concat(e[2], ".").concat(e[0], ".").concat(e[3], ".").concat(e[1]), "".concat(e[2], ".").concat(e[1], ".").concat(e[0], ".").concat(e[3]), "".concat(e[2], ".").concat(e[1], ".").concat(e[3], ".").concat(e[0]), "".concat(e[2], ".").concat(e[3], ".").concat(e[0], ".").concat(e[1]), "".concat(e[2], ".").concat(e[3], ".").concat(e[1], ".").concat(e[0]), "".concat(e[3], ".").concat(e[0], ".").concat(e[1], ".").concat(e[2]), "".concat(e[3], ".").concat(e[0], ".").concat(e[2], ".").concat(e[1]), "".concat(e[3], ".").concat(e[1], ".").concat(e[0], ".").concat(e[2]), "".concat(e[3], ".").concat(e[1], ".").concat(e[2], ".").concat(e[0]), "".concat(e[3], ".").concat(e[2], ".").concat(e[0], ".").concat(e[1]), "".concat(e[3], ".").concat(e[2], ".").concat(e[1], ".").concat(e[0])] : void 0), d[n]
                                })(e.filter(function(e) {
                                    return "token" !== e
                                })).reduce(function(e, t) {
                                    return u(u({}, e), n[t])
                                }, t)
                            }(s.className, Object.assign({}, s.style, void 0 === r ? {} : r), a)
                        })
                    } else m = u(u({}, s), {}, {
                        className: s.className.join(" ")
                    });
                    var N = p(n.children);
                    return c.default.createElement(h, l({
                        key: o
                    }, m), N)
                }
            }({
                node: e,
                stylesheet: n,
                useInlineStyles: a,
                key: "code-segement".concat(t)
            })
        })
    }

    function N(e) {
        return e && void 0 !== e.highlightAuto
    }
    var _ = e.i(911214),
        w = (t = _.default, n = {}, function(e) {
            var a = e.language,
                i = e.children,
                o = e.style,
                l = void 0 === o ? n : o,
                s = e.customStyle,
                u = void 0 === s ? {} : s,
                d = e.codeTagProps,
                h = void 0 === d ? {
                    className: a ? "language-".concat(a) : void 0,
                    style: f(f({}, l['code[class*="language-"]']), l['code[class*="language-'.concat(a, '"]')])
                } : d,
                _ = e.useInlineStyles,
                w = void 0 === _ || _,
                O = e.showLineNumbers,
                x = void 0 !== O && O,
                M = e.showInlineLineNumbers,
                k = void 0 === M || M,
                S = e.startingLineNumber,
                R = void 0 === S ? 1 : S,
                j = e.lineNumberContainerStyle,
                T = e.lineNumberStyle,
                I = void 0 === T ? {} : T,
                L = e.wrapLines,
                A = e.wrapLongLines,
                C = void 0 !== A && A,
                D = e.lineProps,
                P = e.renderer,
                B = e.PreTag,
                U = void 0 === B ? "pre" : B,
                $ = e.CodeTag,
                z = void 0 === $ ? "code" : $,
                K = e.code,
                H = void 0 === K ? (Array.isArray(i) ? i[0] : i) || "" : K,
                G = e.astGenerator,
                F = function(e, t) {
                    if (null == e) return {};
                    var n, a, r = function(e, t) {
                        if (null == e) return {};
                        var n = {};
                        for (var a in e)
                            if (({}).hasOwnProperty.call(e, a)) {
                                if (-1 !== t.indexOf(a)) continue;
                                n[a] = e[a]
                            } return n
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (a = 0; a < i.length; a++) n = i[a], -1 === t.indexOf(n) && ({}).propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                    }
                    return r
                }(e, g);
            G = G || t;
            var W = x ? c.default.createElement(m, {
                    containerStyle: j,
                    codeStyle: h.style || {},
                    numberStyle: I,
                    startingLineNumber: R,
                    codeString: H
                }) : null,
                q = l.hljs || l['pre[class*="language-"]'] || {
                    backgroundColor: "#fff"
                },
                Z = N(G) ? "hljs" : "prismjs",
                X = w ? Object.assign({}, F, {
                    style: Object.assign({}, q, u)
                }) : Object.assign({}, F, {
                    className: F.className ? "".concat(Z, " ").concat(F.className) : Z,
                    style: Object.assign({}, u)
                });
            if (C ? h.style = f(f({}, h.style), {}, {
                    whiteSpace: "pre-wrap"
                }) : h.style = f(f({}, h.style), {}, {
                    whiteSpace: "pre"
                }), !G) return c.default.createElement(U, X, W, c.default.createElement(z, h, H));
            (void 0 === L && P || C) && (L = !0), P = P || E;
            var V = [{
                    type: "text",
                    value: H
                }],
                Q = function(e) {
                    var t = e.astGenerator,
                        n = e.language,
                        a = e.code,
                        r = e.defaultCodeValue;
                    if (N(t)) {
                        var i = -1 !== t.listLanguages().indexOf(n);
                        return "text" === n ? {
                            value: r,
                            language: "text"
                        } : i ? t.highlight(n, a) : t.highlightAuto(a)
                    }
                    try {
                        return n && "text" !== n ? {
                            value: t.highlight(a, n)
                        } : {
                            value: r
                        }
                    } catch (e) {
                        return {
                            value: r
                        }
                    }
                }({
                    astGenerator: G,
                    language: a,
                    code: H,
                    defaultCodeValue: V
                });
            null === Q.language && (Q.value = V);
            var J = Q.value.length + R,
                Y = function(e, t, n, a, i, o, c, l, s) {
                    var u, d = function e(t) {
                            for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], i = 0; i < t.length; i++) {
                                var o, c = t[i];
                                if ("text" === c.type) a.push(v({
                                    children: [c],
                                    className: function(e) {
                                        if (Array.isArray(e)) return r(e)
                                    }(o = new Set(n)) || function(e) {
                                        if ("u" > typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                                    }(o) || function(e, t) {
                                        if (e) {
                                            if ("string" == typeof e) return r(e, void 0);
                                            var n = ({}).toString.call(e).slice(8, -1);
                                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, void 0) : void 0
                                        }
                                    }(o) || function() {
                                        throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }()
                                }));
                                else if (c.children) {
                                    var l = n.concat(c.properties.className);
                                    e(c.children, l).forEach(function(e) {
                                        return a.push(e)
                                    })
                                }
                            }
                            return a
                        }(e.value),
                        g = [],
                        h = -1,
                        f = 0;

                    function m(e, r) {
                        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        return t || o.length > 0 ? function(e, t) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                            return v({
                                children: e,
                                lineNumber: t,
                                lineNumberStyle: l,
                                largestLineNumber: c,
                                showInlineLineNumbers: i,
                                lineProps: n,
                                className: r,
                                showLineNumbers: a,
                                wrapLongLines: s
                            })
                        }(e, r, o) : function(e, t) {
                            if (a && t && i) {
                                var n = y(l, t, c);
                                e.unshift(p(t, n))
                            }
                            return e
                        }(e, r)
                    }
                    for (; f < d.length;) ! function() {
                        var e = d[f],
                            t = e.children[0].value;
                        if (t.match(b)) {
                            var n = t.split("\n");
                            n.forEach(function(t, r) {
                                var i = a && g.length + o,
                                    c = {
                                        type: "text",
                                        value: "".concat(t, "\n")
                                    };
                                if (0 === r) {
                                    var l = m(d.slice(h + 1, f).concat(v({
                                        children: [c],
                                        className: e.properties.className
                                    })), i);
                                    g.push(l)
                                } else if (r === n.length - 1) {
                                    var s = d[f + 1] && d[f + 1].children && d[f + 1].children[0],
                                        u = {
                                            type: "text",
                                            value: "".concat(t)
                                        };
                                    if (s) {
                                        var b = v({
                                            children: [u],
                                            className: e.properties.className
                                        });
                                        d.splice(f + 1, 0, b)
                                    } else {
                                        var p = m([u], i, e.properties.className);
                                        g.push(p)
                                    }
                                } else {
                                    var y = m([c], i, e.properties.className);
                                    g.push(y)
                                }
                            }), h = f
                        }
                        f++
                    }();
                    if (h !== d.length - 1) {
                        var E = d.slice(h + 1, d.length);
                        if (E && E.length) {
                            var N = m(E, a && g.length + o);
                            g.push(N)
                        }
                    }
                    return t ? g : (u = []).concat.apply(u, g)
                }(Q, L, void 0 === D ? {} : D, x, k, R, J, I, C);
            return c.default.createElement(U, X, c.default.createElement(z, h, !k && W, P({
                rows: Y,
                stylesheet: l,
                useInlineStyles: w
            })))
        });
    w.registerLanguage = _.default.registerLanguage;
    var O = e.i(849570),
        x = e.i(143384),
        M = e.i(779040),
        k = e.i(327297),
        S = e.i(44658),
        R = e.i(328193);
    w.registerLanguage("csharp", x.default), w.registerLanguage("javascript", M.default), w.registerLanguage("xml", k.default), w.registerLanguage("rust", S.default), w.registerLanguage("css", R.default), e.s(["default", 0, ({
        code: e,
        language: t
    }) => (0, a.jsx)("div", {
        className: "text-white [&>pre]:rounded-xl [&>pre]:!p-4",
        children: (0, a.jsx)(w, {
            style: O.default,
            language: t,
            children: e
        })
    })], 570133)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "61e69aea-a067-5671-b4b3-4711c05dcbb8")
    } catch (e) {}
}();
//# debugId=61e69aea-a067-5671-b4b3-4711c05dcbb8