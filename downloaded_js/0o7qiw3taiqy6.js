;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "f13a890f-b4e6-123a-4865-ca35b8705bbf")
    } catch (e) {}
}();
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
    class l {
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
    class s {
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
                s._collapse(e)
            }))
        }
    }
    class c extends s {
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
            return new l(this, this.options).value()
        }
        finalize() {
            return !0
        }
    }

    function d(e) {
        return e ? "string" == typeof e ? e : e.source : null
    }
    let u = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,
        g = "[a-zA-Z]\\w*",
        h = "[a-zA-Z_]\\w*",
        f = "\\b\\d+(\\.\\d+)?",
        m = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
        b = "\\b(0b[01]+)",
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
        x = v("//", "$"),
        E = v("/\\*", "\\*/"),
        N = v("#", "$"),
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
    var _ = Object.freeze({
        __proto__: null,
        MATCH_NOTHING_RE: /\b\B/,
        IDENT_RE: g,
        UNDERSCORE_IDENT_RE: h,
        NUMBER_RE: f,
        C_NUMBER_RE: m,
        BINARY_NUMBER_RE: b,
        RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
        SHEBANG: (e = {}) => {
            let t = /^#![ ]*\//;
            return e.binary && (e.begin = function(...e) {
                return e.map(e => d(e)).join("")
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
        C_LINE_COMMENT_MODE: x,
        C_BLOCK_COMMENT_MODE: E,
        HASH_COMMENT_MODE: N,
        NUMBER_MODE: {
            className: "number",
            begin: f,
            relevance: 0
        },
        C_NUMBER_MODE: {
            className: "number",
            begin: m,
            relevance: 0
        },
        BINARY_NUMBER_MODE: {
            className: "number",
            begin: b,
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

    function O(e, t) {
        "." === e.input[e.index - 1] && t.ignoreMatch()
    }

    function j(e, t) {
        !t || e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e.__beforeBegin = O, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords, void 0 === e.relevance && (e.relevance = 0))
    }

    function k(e, t) {
        Array.isArray(e.illegal) && (e.illegal = function(...e) {
            return "(" + e.map(e => d(e)).join("|") + ")"
        }(...e.illegal))
    }

    function C(e, t) {
        if (e.match) {
            if (e.begin || e.end) throw Error("begin & end are not supported with match");
            e.begin = e.match, delete e.match
        }
    }

    function M(e, t) {
        void 0 === e.relevance && (e.relevance = 1)
    }
    let T = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"],
        S = {
            "after:highlightElement": ({
                el: e,
                result: t,
                text: n
            }) => {
                let a = I(e);
                if (!a.length) return;
                let r = document.createElement("div");
                r.innerHTML = t.value, t.value = function(e, t, n) {
                    let a = 0,
                        r = "",
                        o = [];

                    function l() {
                        return e.length && t.length ? e[0].offset !== t[0].offset ? e[0].offset < t[0].offset ? e : t : "start" === t[0].event ? e : t : e.length ? e : t
                    }

                    function s(e) {
                        r += "<" + R(e) + [].map.call(e.attributes, function(e) {
                            return " " + e.nodeName + '="' + i(e.value) + '"'
                        }).join("") + ">"
                    }

                    function c(e) {
                        r += "</" + R(e) + ">"
                    }

                    function d(e) {
                        ("start" === e.event ? s : c)(e.node)
                    }
                    for (; e.length || t.length;) {
                        let t = l();
                        if (r += i(n.substring(a, t[0].offset)), a = t[0].offset, t === e) {
                            o.reverse().forEach(c);
                            do d(t.splice(0, 1)[0]), t = l(); while (t === e && t.length && t[0].offset === a) o.reverse().forEach(s)
                        } else "start" === t[0].event ? o.push(t[0].node) : o.pop(), d(t.splice(0, 1)[0])
                    }
                    return r + i(n.substr(a))
                }(a, I(r), n)
            }
        };

    function R(e) {
        return e.nodeName.toLowerCase()
    }

    function I(e) {
        let t = [];
        return ! function e(n, a) {
            for (let r = n.firstChild; r; r = r.nextSibling) 3 === r.nodeType ? a += r.nodeValue.length : 1 === r.nodeType && (t.push({
                event: "start",
                offset: a,
                node: r
            }), a = e(r, a), R(r).match(/br|hr|img|input/) || t.push({
                event: "stop",
                offset: a,
                node: r
            }));
            return a
        }(e, 0), t
    }
    let L = {},
        A = e => {
            console.error(e)
        },
        D = (e, ...t) => {
            console.log(`WARN: ${e}`, ...t)
        },
        P = (e, t) => {
            L[`${e}/${t}`] || (console.log(`Deprecated as of ${e}. ${t}`), L[`${e}/${t}`] = !0)
        },
        B = Symbol("nomatch");
    t.exports = function(e) {
        var t;
        let n, l = Object.create(null),
            s = Object.create(null),
            g = [],
            h = !0,
            f = /(^(<[^>]+>|\t|)+|\n)/gm,
            m = "Could not find the language '{}', did you forget to load/include a language module?",
            b = {
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
                __emitter: c
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
            H("before:highlight", o);
            let l = o.result ? o.result : x(o.language, o.code, n, a);
            return l.code = o.code, H("after:highlight", l), l
        }

        function x(e, t, n, a) {
            function s() {
                null != w.subLanguage ? function() {
                    if ("" === R) return;
                    let e = null;
                    if ("string" == typeof w.subLanguage) {
                        if (!l[w.subLanguage]) return O.addText(R);
                        e = x(w.subLanguage, R, !0, _[w.subLanguage]), _[w.subLanguage] = e.top
                    } else e = E(R, w.subLanguage.length ? w.subLanguage : null);
                    w.relevance > 0 && (I += e.relevance), O.addSublanguage(e.emitter, e.language)
                }() : function() {
                    if (!w.keywords) return O.addText(R);
                    let e = 0;
                    w.keywordPatternRe.lastIndex = 0;
                    let t = w.keywordPatternRe.exec(R),
                        n = "";
                    for (; t;) {
                        n += R.substring(e, t.index);
                        let a = function(e, t) {
                            let n = y.case_insensitive ? t[0].toLowerCase() : t[0];
                            return Object.prototype.hasOwnProperty.call(e.keywords, n) && e.keywords[n]
                        }(w, t);
                        if (a) {
                            let [e, r] = a;
                            if (O.addText(n), n = "", I += r, e.startsWith("_")) n += t[0];
                            else {
                                let n = y.classNameAliases[e] || e;
                                O.addKeyword(t[0], n)
                            }
                        } else n += t[0];
                        e = w.keywordPatternRe.lastIndex, t = w.keywordPatternRe.exec(R)
                    }
                    n += R.substr(e), O.addText(n)
                }(), R = ""
            }

            function c(e) {
                return e.className && O.openNode(y.classNameAliases[e.className] || e.className), w = Object.create(e, {
                    parent: {
                        value: w
                    }
                })
            }
            let f = {};

            function b(a, i) {
                let o = i && i[0];
                if (R += a, null == o) return s(), 0;
                if ("begin" === f.type && "end" === i.type && f.index === i.index && "" === o) {
                    if (R += t.slice(i.index, i.index + 1), !h) {
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
                        if (a && (a(i, n), n.isMatchIgnored)) return 0 === w.matcher.regexIndex ? (R += e[0], 1) : ($ = !0, 0);
                    return t && t.endSameAsBegin && (t.endRe = RegExp(e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "m")), t.skip ? R += e : (t.excludeBegin && (R += e), s(), t.returnBegin || t.excludeBegin || (R = e)), c(t), t.returnBegin ? 0 : e.length
                }
                if ("illegal" !== i.type || n) {
                    if ("end" === i.type) {
                        let e = function(e) {
                            let n = e[0],
                                a = t.substr(e.index),
                                i = function e(t, n, a) {
                                    var i;
                                    let o, l = (i = t.endRe, (o = i && i.exec(a)) && 0 === o.index);
                                    if (l) {
                                        if (t["on:end"]) {
                                            let e = new r(t);
                                            t["on:end"](n, e), e.isMatchIgnored && (l = !1)
                                        }
                                        if (l) {
                                            for (; t.endsParent && t.parent;) t = t.parent;
                                            return t
                                        }
                                    }
                                    if (t.endsWithParent) return e(t.parent, n, a)
                                }(w, e, a);
                            if (!i) return B;
                            let o = w;
                            o.skip ? R += n : (o.returnEnd || o.excludeEnd || (R += n), s(), o.excludeEnd && (R = n));
                            do w.className && O.closeNode(), w.skip || w.subLanguage || (I += w.relevance), w = w.parent; while (w !== i.parent) return i.starts && (i.endSameAsBegin && (i.starts.endRe = i.endRe), c(i.starts)), o.returnEnd ? 0 : n.length
                        }(i);
                        if (e !== B) return e
                    }
                } else {
                    let e = Error('Illegal lexeme "' + o + '" for mode "' + (w.className || "<unnamed>") + '"');
                    throw e.mode = w, e
                }
                if ("illegal" === i.type && "" === o) return 1;
                if (P > 1e5 && P > 3 * i.index) throw Error("potential infinite loop, way more iterations than matches");
                return R += o, o.length
            }
            let y = L(e);
            if (!y) throw A(m.replace("{}", e)), Error('Unknown language: "' + e + '"');
            let v = function(e, {
                    plugins: t
                }) {
                    function n(t, n) {
                        return RegExp(d(t), "m" + (e.case_insensitive ? "i" : "") + (n ? "g" : ""))
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
                                        a = d(e),
                                        r = "";
                                    for (; a.length > 0;) {
                                        let e = u.exec(a);
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
                            let l;
                            if (a.isCompiled) return a;
                            [C].forEach(e => e(a, i)), e.compilerExtensions.forEach(e => e(a, i)), a.__beforeBegin = null, [j, k, M].forEach(e => e(a, i)), a.isCompiled = !0;
                            let s = null;
                            if ("object" == typeof a.keywords && (s = a.keywords.$pattern, delete a.keywords.$pattern), a.keywords && (a.keywords = function e(t, n, a = "keyword") {
                                    let r = {};
                                    return "string" == typeof t ? i(a, t.split(" ")) : Array.isArray(t) ? i(a, t) : Object.keys(t).forEach(function(a) {
                                        Object.assign(r, e(t[a], n, a))
                                    }), r;

                                    function i(e, t) {
                                        n && (t = t.map(e => e.toLowerCase())), t.forEach(function(t) {
                                            var n, a, i;
                                            let o = t.split("|");
                                            r[o[0]] = [e, (n = o[0], (a = o[1]) ? Number(a) : +(i = n, !T.includes(i.toLowerCase())))]
                                        })
                                    }
                                }(a.keywords, e.case_insensitive)), a.lexemes && s) throw Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");
                            return s = s || a.lexemes || /\w+/, a.keywordPatternRe = n(s, !0), i && (a.begin || (a.begin = /\B|\b/), a.beginRe = n(a.begin), a.endSameAsBegin && (a.end = a.begin), a.end || a.endsWithParent || (a.end = /\B|\b/), a.end && (a.endRe = n(a.end)), a.terminatorEnd = d(a.end) || "", a.endsWithParent && i.terminatorEnd && (a.terminatorEnd += (a.end ? "|" : "") + i.terminatorEnd)), a.illegal && (a.illegalRe = n(a.illegal)), a.contains || (a.contains = []), a.contains = [].concat(...a.contains.map(function(e) {
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
                            }), a.starts && t(a.starts, i), l = new r, a.contains.forEach(e => l.addRule(e.begin, {
                                rule: e,
                                type: "begin"
                            })), a.terminatorEnd && l.addRule(a.terminatorEnd, {
                                type: "end"
                            }), a.illegal && l.addRule(a.illegal, {
                                type: "illegal"
                            }), a.matcher = l, a
                        }(e)
                }(y, {
                    plugins: g
                }),
                N = "",
                w = a || v,
                _ = {},
                O = new p.__emitter(p),
                S = [];
            for (let e = w; e !== y; e = e.parent) e.className && S.unshift(e.className);
            S.forEach(e => O.openNode(e));
            let R = "",
                I = 0,
                D = 0,
                P = 0,
                $ = !1;
            try {
                for (w.matcher.considerAll();;) {
                    P++, $ ? $ = !1 : w.matcher.considerAll(), w.matcher.lastIndex = D;
                    let e = w.matcher.exec(t);
                    if (!e) break;
                    let n = t.substring(D, e.index),
                        a = b(n, e);
                    D = e.index + a
                }
                return b(t.substr(D)), O.closeAllNodes(), O.finalize(), N = O.toHTML(), {
                    relevance: Math.floor(I),
                    value: N,
                    language: e,
                    illegal: !1,
                    emitter: O,
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
                    sofar: N,
                    relevance: 0,
                    value: i(t),
                    emitter: O
                };
                if (h) return {
                    illegal: !1,
                    relevance: 0,
                    value: i(t),
                    emitter: O,
                    language: e,
                    top: w,
                    errorRaised: n
                };
                throw n
            }
        }

        function E(e, t) {
            let n;
            t = t || p.languages || Object.keys(l);
            let a = ((n = {
                    relevance: 0,
                    emitter: new p.__emitter(p),
                    value: i(e),
                    illegal: !1,
                    top: b
                }).emitter.addText(e), n),
                r = t.filter(L).filter(U).map(t => x(t, e, !1));
            r.unshift(a);
            let [o, s] = r.sort((e, t) => {
                if (e.relevance !== t.relevance) return t.relevance - e.relevance;
                if (e.language && t.language) {
                    if (L(e.language).supersetOf === t.language) return 1;
                    else if (L(t.language).supersetOf === e.language) return -1
                }
                return 0
            });
            return o.second_best = s, o
        }
        let N = /^(<[^>]+>|\t)+/gm;

        function w(e) {
            var t;
            let n, a = function(e) {
                let t = e.className + " ";
                t += e.parentNode ? e.parentNode.className : "";
                let n = p.languageDetectRe.exec(t);
                if (n) {
                    let t = L(n[1]);
                    return t || (D(m.replace("{}", n[1])), D("Falling back to no-highlight mode for this block.", e)), t ? n[1] : "no-highlight"
                }
                return t.split(/\s+/).find(e => y(e) || L(e))
            }(e);
            if (y(a)) return;
            H("before:highlightElement", {
                el: e,
                language: a
            });
            let r = e.textContent,
                i = a ? v(r, {
                    language: a,
                    ignoreIllegals: !0
                }) : E(r);
            H("after:highlightElement", {
                el: e,
                result: i,
                text: r
            }), e.innerHTML = i.value, t = i.language, n = a ? s[a] : t, e.classList.add("hljs"), n && e.classList.add(n), e.result = {
                language: i.language,
                re: i.relevance,
                relavance: i.relevance
            }, i.second_best && (e.second_best = {
                language: i.second_best.language,
                re: i.second_best.relevance,
                relavance: i.second_best.relevance
            })
        }
        let O = () => {
                O.called || (O.called = !0, P("10.6.0", "initHighlighting() is deprecated.  Use highlightAll() instead."), document.querySelectorAll("pre code").forEach(w))
            },
            R = !1;

        function I() {
            if ("loading" === document.readyState) {
                R = !0;
                return
            }
            document.querySelectorAll("pre code").forEach(w)
        }

        function L(e) {
            return l[e = (e || "").toLowerCase()] || l[s[e]]
        }

        function $(e, {
            languageName: t
        }) {
            "string" == typeof e && (e = [e]), e.forEach(e => {
                s[e.toLowerCase()] = t
            })
        }

        function U(e) {
            let t = L(e);
            return t && !t.disableAutodetect
        }

        function H(e, t) {
            g.forEach(function(n) {
                n[e] && n[e](t)
            })
        }
        for (let r in "u" > typeof window && window.addEventListener && window.addEventListener("DOMContentLoaded", function() {
                R && I()
            }, !1), Object.assign(e, {
                highlight: v,
                highlightAuto: E,
                highlightAll: I,
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
                initHighlighting: O,
                initHighlightingOnLoad: function() {
                    P("10.6.0", "initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."), R = !0
                },
                registerLanguage: function(t, n) {
                    let a = null;
                    try {
                        a = n(e)
                    } catch (e) {
                        if (A("Language definition for '{}' could not be registered.".replace("{}", t)), h) A(e);
                        else throw e;
                        a = b
                    }
                    a.name || (a.name = t), l[t] = a, a.rawDefinition = n.bind(null, e), a.aliases && $(a.aliases, {
                        languageName: t
                    })
                },
                unregisterLanguage: function(e) {
                    for (let t of (delete l[e], Object.keys(s))) s[t] === e && delete s[t]
                },
                listLanguages: function() {
                    return Object.keys(l)
                },
                getLanguage: L,
                registerAliases: $,
                requireLanguage: function(e) {
                    P("10.4.0", "requireLanguage will be removed entirely in v11."), P("10.4.0", "Please see https://github.com/highlightjs/highlight.js/pull/2844");
                    let t = L(e);
                    if (t) return t;
                    throw Error("The '{}' language is required, but not loaded.".replace("{}", e))
                },
                autoDetection: U,
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
            }, e.versionString = "10.7.3", _) "object" == typeof _[r] && a(_[r]);
        return Object.assign(e, _), e.addPlugin({
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
        }), e.addPlugin(S), e.addPlugin({
            "after:highlightElement": ({
                result: e
            }) => {
                p.tabReplace && (e.value = e.value.replace(N, e => e.replace(/\t/g, p.tabReplace)))
            }
        }), e
    }({})
}, 439216, (e, t, n) => {
    var a;

    function r(e) {
        for (var t, n, a, r, i = 1, o = [].slice.call(arguments), l = 0, s = e.length, c = "", d = !1, u = !1, g = function() {
                return o[i++]
            }; l < s; ++l)
            if (t = e[l], d) switch (d = !1, "." == t ? (u = !1, t = e[++l]) : "0" == t && "." == e[l + 1] ? (u = !0, l += 2, t = e[l]) : u = !0, r = function() {
                    for (var n = "";
                        /\d/.test(e[l]);) n += e[l++], t = e[l];
                    return n.length > 0 ? parseInt(n) : null
                }(), t) {
                case "b":
                    c += parseInt(g(), 10).toString(2);
                    break;
                case "c":
                    "string" == typeof(n = g()) || n instanceof String ? c += n : c += String.fromCharCode(parseInt(n, 10));
                    break;
                case "d":
                    c += parseInt(g(), 10);
                    break;
                case "f":
                    a = String(parseFloat(g()).toFixed(r || 6)), c += u ? a : a.replace(/^0/, "");
                    break;
                case "j":
                    c += JSON.stringify(g());
                    break;
                case "o":
                    c += "0" + parseInt(g(), 10).toString(8);
                    break;
                case "s":
                    c += g();
                    break;
                case "x":
                    c += "0x" + parseInt(g(), 10).toString(16);
                    break;
                case "X":
                    c += "0x" + parseInt(g(), 10).toString(16).toUpperCase();
                    break;
                default:
                    c += t
            } else "%" === t ? d = !0 : c += t;
        return c
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
        var n, l, s, c, d = t || {},
            u = d.subset || a.listLanguages(),
            g = d.prefix,
            h = u.length,
            f = -1;
        if (null == g && (g = i), "string" != typeof e) throw r("Expected `string` for value, got `%s`", e);
        for (l = {
                relevance: 0,
                language: null,
                value: []
            }, n = {
                relevance: 0,
                language: null,
                value: []
            }; ++f < h;) c = u[f], a.getLanguage(c) && ((s = o(c, e, t)).language = c, s.relevance > l.relevance && (l = s), s.relevance > n.relevance && (l = n, n = s));
        return l.language && (n.secondBest = l), n
    }, n.registerLanguage = function(e, t) {
        a.registerLanguage(e, t)
    }, n.listLanguages = function() {
        return a.listLanguages()
    }, n.registerAlias = function(e, t) {
        var n, r = e;
        for (n in t && ((r = {})[e] = t), r) a.registerAliases(r[n], {
            languageName: n
        })
    }, l.prototype.addText = function(e) {
        var t, n, a = this.stack;
        "" !== e && ((n = (t = a[a.length - 1]).children[t.children.length - 1]) && "text" === n.type ? n.value += e : t.children.push({
            type: "text",
            value: e
        }))
    }, l.prototype.addKeyword = function(e, t) {
        this.openNode(t), this.addText(e), this.closeNode()
    }, l.prototype.addSublanguage = function(e, t) {
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
    }, l.prototype.openNode = function(e) {
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
    }, l.prototype.closeNode = function() {
        this.stack.pop()
    }, l.prototype.closeAllNodes = s, l.prototype.finalize = s, l.prototype.toHTML = function() {
        return ""
    };
    var i = "hljs-";

    function o(e, t, n) {
        var o, s = a.configure({}),
            c = (n || {}).prefix;
        if ("string" != typeof e) throw r("Expected `string` for name, got `%s`", e);
        if (!a.getLanguage(e)) throw r("Unknown language: `%s` is not registered", e);
        if ("string" != typeof t) throw r("Expected `string` for value, got `%s`", t);
        if (null == c && (c = i), a.configure({
                __emitter: l,
                classPrefix: c
            }), o = a.highlight(t, {
                language: e,
                ignoreIllegals: !0
            }), a.configure(s || {}), o.errorRaised) throw o.errorRaised;
        return {
            relevance: o.relevance,
            language: o.language,
            value: o.emitter.rootNode.children
        }
    }

    function l(e) {
        this.options = e, this.rootNode = {
            children: []
        }, this.stack = [this.rootNode]
    }

    function s() {}
}, 930839, (e, t, n) => {
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
}, 188571, (e, t, n) => {
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
            l = e.inherit(o, {
                illegal: /\n/
            }),
            s = {
                className: "string",
                begin: /\$"/,
                end: '"',
                illegal: /\n/,
                contains: [{
                    begin: /\{\{/
                }, {
                    begin: /\}\}/
                }, e.BACKSLASH_ESCAPE, l]
            },
            c = {
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
            d = e.inherit(c, {
                illegal: /\n/,
                contains: [{
                    begin: /\{\{/
                }, {
                    begin: /\}\}/
                }, {
                    begin: '""'
                }, l]
            });
        o.contains = [c, s, r, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, a, e.C_BLOCK_COMMENT_MODE], l.contains = [d, s, i, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, a, e.inherit(e.C_BLOCK_COMMENT_MODE, {
            illegal: /\n/
        })];
        let u = {
                variants: [c, s, r, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
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
            }, u, a, {
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
                    contains: [u, a, e.C_BLOCK_COMMENT_MODE]
                }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
            }, f]
        }
    }
}, 46860, (e, t, n) => {
    "use strict";
    var a = e.r(188571);
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = void 0, n.default = a(e.r(854858)).default
}, 587484, (e, t, n) => {
    let a = "[A-Za-z$_][0-9A-Za-z$_]*",
        r = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
        i = ["true", "false", "null", "undefined", "NaN", "Infinity"],
        o = [].concat(["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"], ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"], ["Intl", "DataView", "Number", "Math", "Date", "String", "RegExp", "Object", "Function", "Boolean", "Error", "Symbol", "Set", "Map", "WeakSet", "WeakMap", "Proxy", "Reflect", "JSON", "Promise", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Float32Array", "Array", "Uint8Array", "Uint8ClampedArray", "ArrayBuffer", "BigInt64Array", "BigUint64Array", "BigInt"], ["EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"]);

    function l(e) {
        return s("(?=", e, ")")
    }

    function s(...e) {
        return e.map(e => e ? "string" == typeof e ? e : e.source : null).join("")
    }
    t.exports = function(e) {
        let t = /<[A-Za-z0-9\\._:-]+/,
            n = /\/[A-Za-z0-9\\._:-]+>|\/>/,
            c = {
                $pattern: a,
                keyword: r,
                literal: i,
                built_in: o
            },
            d = "[0-9](_?[0-9])*",
            u = `\\.(${d})`,
            g = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
            h = {
                className: "number",
                variants: [{
                    begin: `(\\b(${g})((${u})|\\.)?|(${u}))[eE][+-]?(${d})\\b`
                }, {
                    begin: `\\b(${g})\\b((${u})\\b|\\.)?|(${u})\\b`
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
                keywords: c,
                contains: []
            },
            m = {
                begin: "html`",
                end: "",
                starts: {
                    end: "`",
                    returnEnd: !1,
                    contains: [e.BACKSLASH_ESCAPE, f],
                    subLanguage: "xml"
                }
            },
            b = {
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
            v = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, m, b, p, h, e.REGEXP_MODE];
        f.contains = v.concat({
            begin: /\{/,
            end: /\}/,
            keywords: c,
            contains: ["self"].concat(v)
        });
        let x = [].concat(y, f.contains),
            E = x.concat([{
                begin: /\(/,
                end: /\)/,
                keywords: c,
                contains: ["self"].concat(x)
            }]),
            N = {
                className: "params",
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: c,
                contains: E
            };
        return {
            name: "Javascript",
            aliases: ["js", "jsx", "mjs", "cjs"],
            keywords: c,
            exports: {
                PARAMS_CONTAINS: E
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
            }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, m, b, p, y, h, {
                begin: s(/[{,\n]\s*/, l(s(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/, a + "\\s*:"))),
                relevance: 0,
                contains: [{
                    className: "attr",
                    begin: a + l("\\s*:"),
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
                            keywords: c,
                            contains: E
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
                keywords: c,
                contains: ["self", e.inherit(e.TITLE_MODE, {
                    begin: a
                }), N],
                illegal: /%/
            }, {
                beginKeywords: "while if switch catch for"
            }, {
                className: "function",
                begin: e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                returnBegin: !0,
                contains: [N, e.inherit(e.TITLE_MODE, {
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
                }), "self", N]
            }, {
                begin: "(get|set)\\s+(?=" + a + "\\()",
                end: /\{/,
                keywords: "get set",
                contains: [e.inherit(e.TITLE_MODE, {
                    begin: a
                }), {
                    begin: /\(\)/
                }, N]
            }, {
                begin: /\$[(.]/
            }]
        }
    }
}, 525296, (e, t, n) => {
    "use strict";
    var a = e.r(188571);
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
            l = e.inherit(o, {
                begin: /\(/,
                end: /\)/
            }),
            s = e.inherit(e.APOS_STRING_MODE, {
                className: "meta-string"
            }),
            c = e.inherit(e.QUOTE_STRING_MODE, {
                className: "meta-string"
            }),
            d = {
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
                contains: [o, c, s, l, {
                    begin: /\[/,
                    end: /\]/,
                    contains: [{
                        className: "meta",
                        begin: /<![a-z]/,
                        end: />/,
                        contains: [o, l, c, s]
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
                contains: [d],
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
                contains: [d],
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
                    starts: d
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
}, 952405, (e, t, n) => {
    "use strict";
    var a = e.r(188571);
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = void 0, n.default = a(e.r(693740)).default
}, 852533, (e, t, n) => {
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
}, 852529, (e, t, n) => {
    "use strict";
    var a = e.r(188571);
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = void 0, n.default = a(e.r(852533)).default
}, 921416, (e, t, n) => {
    let a = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
        r = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"],
        i = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"],
        o = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"],
        l = ["align-content", "align-items", "align-self", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "auto", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "clip-path", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-variant", "font-variant-ligatures", "font-variation-settings", "font-weight", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inherit", "initial", "justify-content", "left", "letter-spacing", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "mask", "max-height", "max-width", "min-height", "min-width", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "right", "src", "tab-size", "table-layout", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index"].reverse();
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
                begin: "\\b(" + l.join("|") + ")\\b"
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
}, 847331, (e, t, n) => {
    "use strict";
    var a = e.r(188571);
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = void 0, n.default = a(e.r(921416)).default
}, 570133, 210310, e => {
    "use strict";
    var t, n, a = e.i(785328);

    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
        return a
    }

    function i(e) {
        return function(e) {
            if (Array.isArray(e)) return r(e)
        }(e) || function(e) {
            if ("u" > typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e) {
            if (e) {
                if ("string" == typeof e) return r(e, void 0);
                var t = ({}).toString.call(e).slice(8, -1);
                return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? r(e, void 0) : void 0
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function l(e, t, n) {
        var a;
        return (a = function(e, t) {
            if ("object" != o(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var a = n.call(e, t || "default");
                if ("object" != o(a)) return a;
                throw TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(t, "string"), (t = "symbol" == o(a) ? a : a + "") in e) ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var s = e.i(409781);

    function c() {
        return (c = Object.assign.bind()).apply(null, arguments)
    }

    function d(e, t) {
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
            t % 2 ? d(Object(n), !0).forEach(function(t) {
                l(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    var g = {},
        h = ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"];

    function f(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t && (a = a.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, a)
        }
        return n
    }

    function m(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? f(Object(n), !0).forEach(function(t) {
                l(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    var b = /\n/g;

    function p(e) {
        var t, n, a, r, i = e.codeString,
            o = e.codeStyle,
            l = e.containerStyle,
            c = e.numberStyle,
            d = e.startingLineNumber;
        return s.default.createElement("code", {
            style: Object.assign({}, o, void 0 === l ? {
                float: "left",
                paddingRight: "10px"
            } : l)
        }, (n = (t = {
            lines: i.replace(/\n$/, "").split("\n"),
            style: void 0 === c ? {} : c,
            startingLineNumber: d
        }).lines, a = t.startingLineNumber, r = t.style, n.map(function(e, t) {
            var n = t + a;
            return s.default.createElement("span", {
                key: "line-".concat(t),
                className: "react-syntax-highlighter-line-number",
                style: "function" == typeof r ? r(n) : r
            }, "".concat(n, "\n"))
        })))
    }

    function y(e, t) {
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

    function v(e, t, n) {
        var a = {
                display: "inline-block",
                minWidth: "".concat(n.toString().length, ".25em"),
                paddingRight: "1em",
                textAlign: "right",
                userSelect: "none"
            },
            r = "function" == typeof e ? e(t) : e;
        return m(m({}, a), r)
    }

    function x(e) {
        var t = e.children,
            n = e.lineNumber,
            a = e.lineNumberStyle,
            r = e.largestLineNumber,
            o = e.showInlineLineNumbers,
            l = e.lineProps,
            s = void 0 === l ? {} : l,
            c = e.className,
            d = void 0 === c ? [] : c,
            u = e.showLineNumbers,
            g = e.wrapLongLines,
            h = e.wrapLines,
            f = void 0 !== h && h ? m({}, "function" == typeof s ? s(n) : s) : {};
        if (f.className = f.className ? [].concat(i(f.className.trim().split(/\s+/)), i(d)) : d, n && o) {
            var b = v(a, n, r);
            t.unshift(y(n, b))
        }
        return g & u && (f.style = m({
            display: "flex"
        }, f.style)), {
            type: "element",
            tagName: "span",
            properties: f,
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
                    l = n.properties,
                    d = n.type,
                    h = n.tagName,
                    f = n.value;
                if ("text" === d) return f;
                if (h) {
                    var m, b, p = (m = 0, function(t) {
                        return m += 1, t.map(function(t, n) {
                            return e({
                                node: t,
                                stylesheet: a,
                                useInlineStyles: i,
                                key: "code-segment-".concat(m, "-").concat(n)
                            })
                        })
                    });
                    if (i) {
                        var y = Object.keys(a).reduce(function(e, t) {
                                return t.split(".").forEach(function(t) {
                                    e.includes(t) || e.push(t)
                                }), e
                            }, []),
                            v = l.className && l.className.includes("token") ? ["token"] : [],
                            x = l.className && v.concat(l.className.filter(function(e) {
                                return !y.includes(e)
                            }));
                        b = u(u({}, l), {}, {
                            className: x.join(" ") || void 0,
                            style: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = arguments.length > 2 ? arguments[2] : void 0;
                                return (function(e) {
                                    if (0 === e.length || 1 === e.length) return e;
                                    var t, n = e.join(".");
                                    return g[n] || (g[n] = 0 === (t = e.length) || 1 === t ? e : 2 === t ? [e[0], e[1], "".concat(e[0], ".").concat(e[1]), "".concat(e[1], ".").concat(e[0])] : 3 === t ? [e[0], e[1], e[2], "".concat(e[0], ".").concat(e[1]), "".concat(e[0], ".").concat(e[2]), "".concat(e[1], ".").concat(e[0]), "".concat(e[1], ".").concat(e[2]), "".concat(e[2], ".").concat(e[0]), "".concat(e[2], ".").concat(e[1]), "".concat(e[0], ".").concat(e[1], ".").concat(e[2]), "".concat(e[0], ".").concat(e[2], ".").concat(e[1]), "".concat(e[1], ".").concat(e[0], ".").concat(e[2]), "".concat(e[1], ".").concat(e[2], ".").concat(e[0]), "".concat(e[2], ".").concat(e[0], ".").concat(e[1]), "".concat(e[2], ".").concat(e[1], ".").concat(e[0])] : t >= 4 ? [e[0], e[1], e[2], e[3], "".concat(e[0], ".").concat(e[1]), "".concat(e[0], ".").concat(e[2]), "".concat(e[0], ".").concat(e[3]), "".concat(e[1], ".").concat(e[0]), "".concat(e[1], ".").concat(e[2]), "".concat(e[1], ".").concat(e[3]), "".concat(e[2], ".").concat(e[0]), "".concat(e[2], ".").concat(e[1]), "".concat(e[2], ".").concat(e[3]), "".concat(e[3], ".").concat(e[0]), "".concat(e[3], ".").concat(e[1]), "".concat(e[3], ".").concat(e[2]), "".concat(e[0], ".").concat(e[1], ".").concat(e[2]), "".concat(e[0], ".").concat(e[1], ".").concat(e[3]), "".concat(e[0], ".").concat(e[2], ".").concat(e[1]), "".concat(e[0], ".").concat(e[2], ".").concat(e[3]), "".concat(e[0], ".").concat(e[3], ".").concat(e[1]), "".concat(e[0], ".").concat(e[3], ".").concat(e[2]), "".concat(e[1], ".").concat(e[0], ".").concat(e[2]), "".concat(e[1], ".").concat(e[0], ".").concat(e[3]), "".concat(e[1], ".").concat(e[2], ".").concat(e[0]), "".concat(e[1], ".").concat(e[2], ".").concat(e[3]), "".concat(e[1], ".").concat(e[3], ".").concat(e[0]), "".concat(e[1], ".").concat(e[3], ".").concat(e[2]), "".concat(e[2], ".").concat(e[0], ".").concat(e[1]), "".concat(e[2], ".").concat(e[0], ".").concat(e[3]), "".concat(e[2], ".").concat(e[1], ".").concat(e[0]), "".concat(e[2], ".").concat(e[1], ".").concat(e[3]), "".concat(e[2], ".").concat(e[3], ".").concat(e[0]), "".concat(e[2], ".").concat(e[3], ".").concat(e[1]), "".concat(e[3], ".").concat(e[0], ".").concat(e[1]), "".concat(e[3], ".").concat(e[0], ".").concat(e[2]), "".concat(e[3], ".").concat(e[1], ".").concat(e[0]), "".concat(e[3], ".").concat(e[1], ".").concat(e[2]), "".concat(e[3], ".").concat(e[2], ".").concat(e[0]), "".concat(e[3], ".").concat(e[2], ".").concat(e[1]), "".concat(e[0], ".").concat(e[1], ".").concat(e[2], ".").concat(e[3]), "".concat(e[0], ".").concat(e[1], ".").concat(e[3], ".").concat(e[2]), "".concat(e[0], ".").concat(e[2], ".").concat(e[1], ".").concat(e[3]), "".concat(e[0], ".").concat(e[2], ".").concat(e[3], ".").concat(e[1]), "".concat(e[0], ".").concat(e[3], ".").concat(e[1], ".").concat(e[2]), "".concat(e[0], ".").concat(e[3], ".").concat(e[2], ".").concat(e[1]), "".concat(e[1], ".").concat(e[0], ".").concat(e[2], ".").concat(e[3]), "".concat(e[1], ".").concat(e[0], ".").concat(e[3], ".").concat(e[2]), "".concat(e[1], ".").concat(e[2], ".").concat(e[0], ".").concat(e[3]), "".concat(e[1], ".").concat(e[2], ".").concat(e[3], ".").concat(e[0]), "".concat(e[1], ".").concat(e[3], ".").concat(e[0], ".").concat(e[2]), "".concat(e[1], ".").concat(e[3], ".").concat(e[2], ".").concat(e[0]), "".concat(e[2], ".").concat(e[0], ".").concat(e[1], ".").concat(e[3]), "".concat(e[2], ".").concat(e[0], ".").concat(e[3], ".").concat(e[1]), "".concat(e[2], ".").concat(e[1], ".").concat(e[0], ".").concat(e[3]), "".concat(e[2], ".").concat(e[1], ".").concat(e[3], ".").concat(e[0]), "".concat(e[2], ".").concat(e[3], ".").concat(e[0], ".").concat(e[1]), "".concat(e[2], ".").concat(e[3], ".").concat(e[1], ".").concat(e[0]), "".concat(e[3], ".").concat(e[0], ".").concat(e[1], ".").concat(e[2]), "".concat(e[3], ".").concat(e[0], ".").concat(e[2], ".").concat(e[1]), "".concat(e[3], ".").concat(e[1], ".").concat(e[0], ".").concat(e[2]), "".concat(e[3], ".").concat(e[1], ".").concat(e[2], ".").concat(e[0]), "".concat(e[3], ".").concat(e[2], ".").concat(e[0], ".").concat(e[1]), "".concat(e[3], ".").concat(e[2], ".").concat(e[1], ".").concat(e[0])] : void 0), g[n]
                                })(e.filter(function(e) {
                                    return "token" !== e
                                })).reduce(function(e, t) {
                                    return u(u({}, e), n[t])
                                }, t)
                            }(l.className, Object.assign({}, l.style, void 0 === r ? {} : r), a)
                        })
                    } else b = u(u({}, l), {}, {
                        className: l.className.join(" ")
                    });
                    var E = p(n.children);
                    return s.default.createElement(h, c({
                        key: o
                    }, b), E)
                }
            }({
                node: e,
                stylesheet: n,
                useInlineStyles: a,
                key: "code-segment-".concat(t)
            })
        })
    }

    function N(e) {
        return e && void 0 !== e.highlightAuto
    }
    var w = e.i(911214),
        _ = (t = w.default, n = {}, function(e) {
            var a, r, o = e.language,
                l = e.children,
                c = e.style,
                d = void 0 === c ? n : c,
                u = e.customStyle,
                g = void 0 === u ? {} : u,
                f = e.codeTagProps,
                w = void 0 === f ? {
                    className: o ? "language-".concat(o) : void 0,
                    style: m(m({}, d['code[class*="language-"]']), d['code[class*="language-'.concat(o, '"]')])
                } : f,
                _ = e.useInlineStyles,
                O = void 0 === _ || _,
                j = e.showLineNumbers,
                k = void 0 !== j && j,
                C = e.showInlineLineNumbers,
                M = void 0 === C || C,
                T = e.startingLineNumber,
                S = void 0 === T ? 1 : T,
                R = e.lineNumberContainerStyle,
                I = e.lineNumberStyle,
                L = void 0 === I ? {} : I,
                A = e.wrapLines,
                D = e.wrapLongLines,
                P = void 0 !== D && D,
                B = e.lineProps,
                $ = e.renderer,
                U = e.PreTag,
                H = void 0 === U ? "pre" : U,
                z = e.CodeTag,
                K = void 0 === z ? "code" : z,
                G = e.code,
                F = void 0 === G ? (Array.isArray(l) ? l[0] : l) || "" : G,
                W = e.astGenerator,
                Z = function(e, t) {
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
                }(e, h);
            W = W || t;
            var q = k ? s.default.createElement(p, {
                    containerStyle: R,
                    codeStyle: w.style || {},
                    numberStyle: L,
                    startingLineNumber: S,
                    codeString: F
                }) : null,
                V = d.hljs || d['pre[class*="language-"]'] || {
                    backgroundColor: "#fff"
                },
                X = N(W) ? "hljs" : "prismjs",
                Q = O ? Object.assign({}, Z, {
                    style: Object.assign({}, V, g)
                }) : Object.assign({}, Z, {
                    className: Z.className ? "".concat(X, " ").concat(Z.className) : X,
                    style: Object.assign({}, g)
                });
            if (P ? w.style = m({
                    whiteSpace: "pre-wrap"
                }, w.style) : w.style = m({
                    whiteSpace: "pre"
                }, w.style), !W) return s.default.createElement(H, Q, q, s.default.createElement(K, w, F));
            (void 0 === A && $ || P) && (A = !0), $ = $ || E;
            var J = [{
                    type: "text",
                    value: F
                }],
                Y = function(e) {
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
                    astGenerator: W,
                    language: o,
                    code: F,
                    defaultCodeValue: J
                });
            null === Y.language && (Y.value = J);
            var ee = S + (null != (a = null == (r = F.match(/\n/g)) ? void 0 : r.length) ? a : 0),
                et = function(e, t, n, a, r, o, l, s, c) {
                    var d, u = function e(t) {
                            for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], r = 0; r < t.length; r++) {
                                var o = t[r];
                                if ("text" === o.type) a.push(x({
                                    children: [o],
                                    className: i(new Set(n))
                                }));
                                else if (o.children) {
                                    var l = n.concat(o.properties.className);
                                    e(o.children, l).forEach(function(e) {
                                        return a.push(e)
                                    })
                                }
                            }
                            return a
                        }(e.value),
                        g = [],
                        h = -1,
                        f = 0;

                    function m(e, i) {
                        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        return t || o.length > 0 ? function(e, i) {
                            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                            return x({
                                children: e,
                                lineNumber: i,
                                lineNumberStyle: s,
                                largestLineNumber: l,
                                showInlineLineNumbers: r,
                                lineProps: n,
                                className: o,
                                showLineNumbers: a,
                                wrapLongLines: c,
                                wrapLines: t
                            })
                        }(e, i, o) : function(e, t) {
                            if (a && t && r) {
                                var n = v(s, t, l);
                                e.unshift(y(t, n))
                            }
                            return e
                        }(e, i)
                    }
                    for (; f < u.length;) ! function() {
                        var e = u[f],
                            t = e.children[0].value;
                        if (t.match(b)) {
                            var n = t.split("\n");
                            n.forEach(function(t, r) {
                                var i = a && g.length + o,
                                    l = {
                                        type: "text",
                                        value: "".concat(t, "\n")
                                    };
                                if (0 === r) {
                                    var s = m(u.slice(h + 1, f).concat(x({
                                        children: [l],
                                        className: e.properties.className
                                    })), i);
                                    g.push(s)
                                } else if (r === n.length - 1) {
                                    var c = u[f + 1] && u[f + 1].children && u[f + 1].children[0],
                                        d = {
                                            type: "text",
                                            value: "".concat(t)
                                        };
                                    if (c) {
                                        var b = x({
                                            children: [d],
                                            className: e.properties.className
                                        });
                                        u.splice(f + 1, 0, b)
                                    } else {
                                        var p = m([d], i, e.properties.className);
                                        g.push(p)
                                    }
                                } else {
                                    var y = m([l], i, e.properties.className);
                                    g.push(y)
                                }
                            }), h = f
                        }
                        f++
                    }();
                    if (h !== u.length - 1) {
                        var p = u.slice(h + 1, u.length);
                        if (p && p.length) {
                            var E = m(p, a && g.length + o);
                            g.push(E)
                        }
                    }
                    return t ? g : (d = []).concat.apply(d, g)
                }(Y, A, void 0 === B ? {} : B, k, M, S, ee, L, P);
            return s.default.createElement(H, Q, s.default.createElement(K, w, !M && q, $({
                rows: et,
                stylesheet: d,
                useInlineStyles: O
            })))
        });
    _.registerLanguage = w.default.registerLanguage;
    var O = e.i(930839),
        j = e.i(46860),
        k = e.i(525296),
        C = e.i(952405),
        M = e.i(852529),
        T = e.i(847331);
    _.registerLanguage("csharp", j.default), _.registerLanguage("javascript", k.default), _.registerLanguage("xml", C.default), _.registerLanguage("rust", M.default), _.registerLanguage("css", T.default), e.s(["default", 0, ({
        code: e,
        language: t
    }) => (0, a.jsx)("div", {
        className: "text-white [&>pre]:rounded-xl [&>pre]:!p-4",
        "data-sentry-component": "Code",
        "data-sentry-source-file": "Code.tsx",
        children: (0, a.jsx)(_, {
            style: O.default,
            language: t,
            "data-sentry-element": "SyntaxHighlighter",
            "data-sentry-source-file": "Code.tsx",
            children: e
        })
    })], 570133);
    var S = e.i(749583),
        R = e.i(206775),
        I = e.i(652955),
        L = e.i(229696),
        A = e.i(722978),
        D = e.i(805518),
        P = e.i(363737);
    let B = ({
            className: e
        }) => (0, a.jsx)("svg", {
            className: e,
            width: "17",
            height: "16",
            viewBox: "0 0 17 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "data-sentry-element": "svg",
            "data-sentry-component": "ArrowsIcon",
            "data-sentry-source-file": "ArrowsIcon.tsx",
            children: (0, a.jsx)("g", {
                id: "ð· ArrowsOutSimple",
                "data-sentry-element": "g",
                "data-sentry-source-file": "ArrowsIcon.tsx",
                children: (0, a.jsx)("path", {
                    id: "Vector",
                    d: "M13.7144 3V6C13.7144 6.13261 13.6617 6.25979 13.5679 6.35355C13.4741 6.44732 13.347 6.5 13.2144 6.5C13.0817 6.5 12.9546 6.44732 12.8608 6.35355C12.767 6.25979 12.7144 6.13261 12.7144 6V4.20687L9.56811 7.35375C9.47429 7.44757 9.34704 7.50028 9.21436 7.50028C9.08167 7.50028 8.95443 7.44757 8.86061 7.35375C8.76678 7.25993 8.71408 7.13268 8.71408 7C8.71408 6.86732 8.76678 6.74007 8.86061 6.64625L12.0075 3.5H10.2144C10.0817 3.5 9.95457 3.44732 9.8608 3.35355C9.76703 3.25979 9.71436 3.13261 9.71436 3C9.71436 2.86739 9.76703 2.74021 9.8608 2.64645C9.95457 2.55268 10.0817 2.5 10.2144 2.5H13.2144C13.347 2.5 13.4741 2.55268 13.5679 2.64645C13.6617 2.74021 13.7144 2.86739 13.7144 3ZM6.86061 8.64625L3.71436 11.7931V10C3.71436 9.86739 3.66168 9.74021 3.56791 9.64645C3.47414 9.55268 3.34696 9.5 3.21436 9.5C3.08175 9.5 2.95457 9.55268 2.8608 9.64645C2.76703 9.74021 2.71436 9.86739 2.71436 10V13C2.71436 13.1326 2.76703 13.2598 2.8608 13.3536C2.95457 13.4473 3.08175 13.5 3.21436 13.5H6.21436C6.34696 13.5 6.47414 13.4473 6.56791 13.3536C6.66168 13.2598 6.71436 13.1326 6.71436 13C6.71436 12.8674 6.66168 12.7402 6.56791 12.6464C6.47414 12.5527 6.34696 12.5 6.21436 12.5H4.42123L7.56811 9.35375C7.66193 9.25993 7.71463 9.13268 7.71463 9C7.71463 8.86732 7.66193 8.74007 7.56811 8.64625C7.47429 8.55243 7.34704 8.49972 7.21436 8.49972C7.08167 8.49972 6.95443 8.55243 6.86061 8.64625Z",
                    fill: "#3A5BC7",
                    "data-sentry-element": "path",
                    "data-sentry-source-file": "ArrowsIcon.tsx"
                })
            })
        }),
        $ = ({
            className: e
        }) => (0, a.jsx)("svg", {
            className: e,
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "data-sentry-element": "svg",
            "data-sentry-component": "CloseIcon",
            "data-sentry-source-file": "CloseIcon.tsx",
            children: (0, a.jsx)("g", {
                id: "ð· X",
                "data-sentry-element": "g",
                "data-sentry-source-file": "CloseIcon.tsx",
                children: (0, a.jsx)("path", {
                    id: "Vector",
                    d: "M16.067 15.1828C16.1251 15.2409 16.1712 15.3098 16.2026 15.3857C16.234 15.4615 16.2502 15.5429 16.2502 15.625C16.2502 15.7071 16.234 15.7884 16.2026 15.8643C16.1712 15.9402 16.1251 16.0091 16.067 16.0672C16.009 16.1252 15.94 16.1713 15.8642 16.2027C15.7883 16.2342 15.707 16.2503 15.6249 16.2503C15.5427 16.2503 15.4614 16.2342 15.3855 16.2027C15.3097 16.1713 15.2407 16.1252 15.1827 16.0672L9.99986 10.8836L4.81705 16.0672C4.69977 16.1844 4.54071 16.2503 4.37486 16.2503C4.20901 16.2503 4.04995 16.1844 3.93267 16.0672C3.8154 15.9499 3.74951 15.7908 3.74951 15.625C3.74951 15.4591 3.8154 15.3001 3.93267 15.1828L9.11627 9.99998L3.93267 4.81717C3.8154 4.69989 3.74951 4.54083 3.74951 4.37498C3.74951 4.20913 3.8154 4.05007 3.93267 3.93279C4.04995 3.81552 4.20901 3.74963 4.37486 3.74963C4.54071 3.74963 4.69977 3.81552 4.81705 3.93279L9.99986 9.11639L15.1827 3.93279C15.2999 3.81552 15.459 3.74963 15.6249 3.74963C15.7907 3.74963 15.9498 3.81552 16.067 3.93279C16.1843 4.05007 16.2502 4.20913 16.2502 4.37498C16.2502 4.54083 16.1843 4.69989 16.067 4.81717L10.8835 9.99998L16.067 15.1828Z",
                    fill: "#000000",
                    "data-sentry-element": "path",
                    "data-sentry-source-file": "CloseIcon.tsx"
                })
            })
        }),
        U = ({
            children: e,
            colTitle: t,
            truncationEnabled: n,
            rowTitle: r,
            className: i = "",
            isTableCell: o
        }) => {
            let [l, c] = (0, s.useState)(!1), [d, u] = (0, s.useState)(!1), g = (0, s.useRef)(null), h = (0, A.default)({
                "cursor-pointer relative": l
            }, i), f = (0, A.default)({
                "line-clamp-3": n
            });
            (0, s.useEffect)(() => {
                let e = g.current;
                e && (e.scrollHeight > e.clientHeight ? c(!0) : c(!1))
            }, [g]);
            let m = () => {
                    u(!0)
                },
                b = n && l ? {
                    tabIndex: 0,
                    role: "button",
                    onClick: m,
                    onKeyDown: e => {
                        ("Enter" === e.key || "Space" === e.key) && m()
                    }
                } : {};
            return (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsxs)("td", {
                    className: (0, A.default)(h, {
                        "bg-gray-50 p-3 dark:bg-gray-900": !o,
                        "h-full !p-0": o
                    }),
                    ...b,
                    children: [o ? e : (0, a.jsx)(D.default, {
                        className: f,
                        ref: g,
                        children: e
                    }), n && l && (0, a.jsx)(B, {
                        className: "absolute top-1.5 right-1.5"
                    })]
                }), (0, a.jsx)(P.default, {
                    isOpen: d,
                    onOpenChange: u,
                    showTriggerButton: !1,
                    "data-sentry-element": "Modal",
                    "data-sentry-source-file": "HtmlTableCell.tsx",
                    children: (0, a.jsxs)("div", {
                        className: "mt-20 flex w-6/12 flex-col rounded-3xl bg-white p-8 dark:bg-gray-800",
                        tabIndex: -1,
                        children: [(0, a.jsx)(S.default, {
                            onPress: () => {
                                u(!1)
                            },
                            variant: "secondary",
                            className: "self-end",
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "HtmlTableCell.tsx",
                            children: (0, a.jsx)($, {
                                "data-sentry-element": "CloseIcon",
                                "data-sentry-source-file": "HtmlTableCell.tsx"
                            })
                        }), (0, a.jsx)(D.default, {
                            className: "caption-sm mb-2.5 text-black dark:text-white",
                            "data-sentry-element": "Text",
                            "data-sentry-source-file": "HtmlTableCell.tsx",
                            children: r
                        }), (0, a.jsx)("div", {
                            className: "text-heading-sm mb-4 text-black dark:text-white",
                            children: t
                        }), (0, a.jsx)("div", {
                            className: "text-small mb-8",
                            children: (0, a.jsx)(D.default, {
                                className: "text-black dark:text-gray-200",
                                "data-sentry-element": "Text",
                                "data-sentry-source-file": "HtmlTableCell.tsx",
                                children: e
                            })
                        })]
                    })
                })]
            })
        };
    e.s(["default", 0, ({
        table: e,
        className: t = "",
        verticalHeadingClass: n = "",
        hideTitle: r = !1
    }) => {
        let [i, ...o] = e.rows.map(e => ({
            ...e,
            cells: (e.cells ?? []).map(e => "string" == typeof e ? e : "")
        })), l = `align-top text-heading-sm md:text-small-bold rounded-md bg-gray-100 text-gray-800 bg-gray-100 dark:bg-gray-700 md:dark:bg-gray-800 dark:text-gray-200 border-none ${n}`, c = "align-top rounded-md text-sm text-gray-800 dark:text-gray-200 border-none", d = (0, A.default)("w-full table-fixed border-separate border-spacing-2 break-words", t), u = (0, A.default)("h-full table-fixed border-separate border-spacing-1 break-words", t), g = (0, s.useCallback)(e => {
            let [t, ...n] = e.split("\n"), r = n.splice(1).map((e, t) => {
                let n = e.split("|").filter(e => e).map(e => e.trim());
                return (0, a.jsx)("div", {
                    className: "flex grow",
                    children: n.map((e, n) => (0, a.jsx)(L.default, {
                        className: "flex grow basis-0 items-center justify-center rounded-md bg-gray-50 px-6 py-4 text-center dark:bg-gray-900",
                        children: e
                    }, `cell-${t}-${n}-${e}`))
                }, `row-${t}`)
            });
            return (0, a.jsxs)("div", {
                className: "flex h-full flex-col",
                children: [(0, a.jsx)("div", {
                    className: "-ml-1 flex grow",
                    children: t.split("|").filter(e => e).map((e, t) => (0, a.jsx)(L.default, {
                        className: "ml-1 flex grow basis-0 items-center justify-center rounded-md bg-gray-50 px-6 py-4 text-center dark:bg-gray-900",
                        children: e.trim()
                    }, `header-cell-${t}-${e}`))
                }), r]
            })
        }, []), h = (0, s.useMemo)(() => o.map(e => e.cells.reduce((e, t, n) => ({
            ...e,
            [`col${n+1}`]: {
                component: t.startsWith("|") ? g(t) : (0, a.jsx)(L.default, {
                    options: {
                        overrides: {
                            Button: {
                                component: S.default
                            },
                            Label: {
                                component: R.default
                            },
                            Tooltip: {
                                component: I.default
                            }
                        }
                    },
                    children: t
                }),
                isTableCell: t.startsWith("|"),
                cellContent: t
            }
        }), {})), [o, g]), f = (0, s.useMemo)(() => i.cells.map((e, t) => (0, a.jsx)("th", {
            scope: "col",
            className: "min-w-[10rem] rounded-md border-none bg-gray-100 py-3.5 pr-4 pl-4 text-left align-top text-gray-800 dark:bg-gray-800 dark:text-gray-400",
            children: (0, a.jsx)(L.default, {
                options: {
                    overrides: {
                        Button: {
                            component: S.default
                        },
                        Label: {
                            component: R.default
                        },
                        Tooltip: {
                            component: I.default
                        }
                    }
                },
                children: e
            })
        }, `${t}-${e}`)), [i.cells]), m = (0, s.useMemo)(() => h.map((t, n) => {
            let r = Object.values(t),
                i = r[0];
            return (0, a.jsx)("tr", {
                className: "border-separate border-spacing-1",
                children: r.map((t, r) => (0, a.jsx)(U, {
                    isTableCell: t.isTableCell,
                    className: 0 === r ? l : c,
                    rowTitle: i.component,
                    colTitle: 0 !== r && f && f[r] ? f[r] : "",
                    truncationEnabled: e.tableTruncation,
                    children: t.component
                }, `${n}-${r}-${t.cellContent}`))
            }, n)
        }), [f, h, l, e.tableTruncation]), b = (0, s.useMemo)(() => i.cells.map((e, t) => (0, a.jsx)("th", {
            scope: "col",
            className: "text-tiny-bold rounded-md bg-gray-100 py-3.5 pr-4 pl-4 text-left align-top text-gray-800 dark:bg-gray-900 dark:text-gray-400",
            children: (0, a.jsx)(L.default, {
                options: {
                    overrides: {
                        Button: {
                            component: S.default
                        },
                        Label: {
                            component: R.default
                        },
                        Tooltip: {
                            component: I.default
                        }
                    }
                },
                children: e
            })
        }, `${t}-${e}`)), [i]), p = (0, s.useMemo)(() => h.map((e, t) => (0, a.jsx)("div", {
            className: "mb-4 min-w-full rounded-md bg-gray-100 align-middle dark:bg-gray-700",
            children: (0, a.jsxs)("table", {
                className: d,
                children: [i && i.cells.length > 0 && (0, a.jsx)("thead", {
                    className: "hidden",
                    children: (0, a.jsx)("tr", {
                        className: "border-separate border-spacing-1",
                        children: b
                    })
                }), (0, a.jsx)("tbody", {
                    className: "table-row-group bg-gray-50 dark:bg-gray-900",
                    children: Object.values(e).map((e, n) => e ? (0, a.jsx)("tr", {
                        className: "rounded-md",
                        children: (0, a.jsxs)("td", {
                            className: 0 === n ? l : c,
                            children: [0 !== n && i && i.cells[n] && (0, a.jsx)(L.default, {
                                options: {
                                    overrides: {
                                        Button: {
                                            component: S.default
                                        },
                                        Label: {
                                            component: R.default
                                        },
                                        Tooltip: {
                                            component: I.default
                                        }
                                    }
                                },
                                children: i.cells[n]
                            }), (0, a.jsx)(D.default, {
                                children: e.component
                            })]
                        })
                    }, `${t}-${n}-${i.cells[n]}`) : null)
                })]
            })
        }, `row-${t}`)), [h, i, d, l, b]);
        return (0, a.jsxs)("div", {
            "data-sentry-component": "HtmlTable",
            "data-sentry-source-file": "HtmlTable.tsx",
            children: [(0, a.jsx)("div", {
                className: "sm:flex sm:items-center",
                children: (0, a.jsxs)("div", {
                    className: "sm:flex-auto",
                    children: [!r && e.tableTitle && (0, a.jsx)("div", {
                        className: "text-heading-sm",
                        children: e.tableTitle
                    }), !r && e.tableDescription && (0, a.jsx)("p", {
                        className: "text-body mt-2",
                        children: e.tableDescription
                    })]
                })
            }), (0, a.jsx)("div", {
                className: "mt-8 flow-root",
                children: (0, a.jsxs)("div", {
                    className: "-mx-4 -my-2 overflow-visible sm:-mx-6 lg:-mx-8",
                    children: [(0, a.jsx)("div", {
                        className: "hidden min-w-full rounded-md bg-gray-100 align-middle sm:px-6 md:inline-block md:rounded-none md:bg-transparent",
                        children: (0, a.jsxs)("table", {
                            className: u,
                            children: [f && (0, a.jsx)("thead", {
                                className: "table-header-group",
                                children: (0, a.jsx)("tr", {
                                    className: "border-separate border-spacing-1",
                                    children: f
                                })
                            }), (0, a.jsx)("tbody", {
                                className: "table-row-group",
                                children: m
                            })]
                        })
                    }), (0, a.jsxs)("div", {
                        className: "md:hidden",
                        children: [(0, a.jsx)("div", {
                            className: "text-body-bold mb-4",
                            children: (0, a.jsx)(L.default, {
                                options: {
                                    overrides: {
                                        Button: {
                                            component: S.default
                                        },
                                        Label: {
                                            component: R.default
                                        },
                                        Tooltip: {
                                            component: I.default
                                        }
                                    }
                                },
                                "data-sentry-element": "Markdown",
                                "data-sentry-source-file": "HtmlTable.tsx",
                                children: i && i.cells && i.cells[0] ? i.cells[0] : ""
                            })
                        }), p]
                    })]
                })
            })]
        })
    }], 210310)
}]);

//# debugId=f13a890f-b4e6-123a-4865-ca35b8705bbf