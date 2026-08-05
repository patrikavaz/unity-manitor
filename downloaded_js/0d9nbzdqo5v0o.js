(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 833200, e => {
    "use strict";
    var t, r, n = e.i(499531);

    function i(e, t) {
        let r = t && t.cache ? t.cache : u,
            n = t && t.serializer ? t.serializer : a;
        return (t && t.strategy ? t.strategy : function(e, t) {
            var r, n;
            let i = 1 === e.length ? o : s;
            return r = t.cache.create(), n = t.serializer, i.bind(this, e, r, n)
        })(e, {
            cache: r,
            serializer: n
        })
    }

    function o(e, t, r, n) {
        let i = null == n || "number" == typeof n || "boolean" == typeof n ? n : r(n),
            o = t.get(i);
        return void 0 === o && (o = e.call(this, n), t.set(i, o)), o
    }

    function s(e, t, r) {
        let n = Array.prototype.slice.call(arguments, 3),
            i = r(n),
            o = t.get(i);
        return void 0 === o && (o = e.apply(this, n), t.set(i, o)), o
    }
    let a = function() {
        return JSON.stringify(arguments)
    };
    var l = class {
        constructor() {
            this.cache = Object.create(null)
        }
        get(e) {
            return this.cache[e]
        }
        set(e, t) {
            this.cache[e] = t
        }
    };
    let u = {
            create: function() {
                return new l
            }
        },
        c = {
            variadic: function(e, t) {
                var r, n;
                return r = t.cache.create(), n = t.serializer, s.bind(this, e, r, n)
            },
            monadic: function(e, t) {
                var r, n;
                return r = t.cache.create(), n = t.serializer, o.bind(this, e, r, n)
            }
        };
    var h = ((t = h || {}).MISSING_MESSAGE = "MISSING_MESSAGE", t.MISSING_FORMAT = "MISSING_FORMAT", t.ENVIRONMENT_FALLBACK = "ENVIRONMENT_FALLBACK", t.INSUFFICIENT_PATH = "INSUFFICIENT_PATH", t.INVALID_MESSAGE = "INVALID_MESSAGE", t.INVALID_KEY = "INVALID_KEY", t.FORMATTING_ERROR = "FORMATTING_ERROR", t);

    function f(e, t) {
        var r, n;
        return r = (...t) => new e(...t), n = t, i(r, {
            cache: {
                create: () => ({
                    get: e => n[e],
                    set(e, t) {
                        n[e] = t
                    }
                })
            },
            strategy: c.variadic
        })
    }
    let p = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,
        d = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
        g = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        m = /^(@+)?(\+|#+)?[rs]?$/g,
        b = /(\*)(0+)|(#+)(0+)|(0+)/g,
        y = /^(0+)$/;

    function E(e) {
        let t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(m, function(e, r, n) {
            return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
        }), t
    }

    function v(e) {
        switch (e) {
            case "sign-auto":
                return {
                    signDisplay: "auto"
                };
            case "sign-accounting":
            case "()":
                return {
                    currencySign: "accounting"
                };
            case "sign-always":
            case "+!":
                return {
                    signDisplay: "always"
                };
            case "sign-accounting-always":
            case "()!":
                return {
                    signDisplay: "always", currencySign: "accounting"
                };
            case "sign-except-zero":
            case "+?":
                return {
                    signDisplay: "exceptZero"
                };
            case "sign-accounting-except-zero":
            case "()?":
                return {
                    signDisplay: "exceptZero", currencySign: "accounting"
                };
            case "sign-never":
            case "+_":
                return {
                    signDisplay: "never"
                }
        }
    }

    function T(e) {
        let t = v(e);
        return t || {}
    }
    let P = ((r = {})[r.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", r[r.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", r[r.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", r[r.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", r[r.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", r[r.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", r[r.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", r[r.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", r[r.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", r[r.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", r[r.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", r[r.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", r[r.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", r[r.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", r[r.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", r[r.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", r[r.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", r[r.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", r[r.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", r[r.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", r[r.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", r[r.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", r[r.INVALID_TAG = 23] = "INVALID_TAG", r[r.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", r[r.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", r[r.UNCLOSED_TAG = 27] = "UNCLOSED_TAG", r);

    function H(e) {
        return !!(e && "object" == typeof e && 0 === e.type)
    }

    function S(e) {
        return !!(e && "object" == typeof e && 1 === e.type)
    }
    let L = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        B = {
            "001": ["H", "h"],
            419: ["h", "H", "hB", "hb"],
            AC: ["H", "h", "hb", "hB"],
            AD: ["H", "hB"],
            AE: ["h", "hB", "hb", "H"],
            AF: ["H", "hb", "hB", "h"],
            AG: ["h", "hb", "H", "hB"],
            AI: ["H", "h", "hb", "hB"],
            AL: ["h", "H", "hB"],
            AM: ["H", "hB"],
            AO: ["H", "hB"],
            AR: ["h", "H", "hB", "hb"],
            AS: ["h", "H"],
            AT: ["H", "hB"],
            AU: ["h", "hb", "H", "hB"],
            AW: ["H", "hB"],
            AX: ["H"],
            AZ: ["H", "hB", "h"],
            BA: ["H", "hB", "h"],
            BB: ["h", "hb", "H", "hB"],
            BD: ["h", "hB", "H"],
            BE: ["H", "hB"],
            BF: ["H", "hB"],
            BG: ["H", "hB", "h"],
            BH: ["h", "hB", "hb", "H"],
            BI: ["H", "h"],
            BJ: ["H", "hB"],
            BL: ["H", "hB"],
            BM: ["h", "hb", "H", "hB"],
            BN: ["hb", "hB", "h", "H"],
            BO: ["h", "H", "hB", "hb"],
            BQ: ["H"],
            BR: ["H", "hB"],
            BS: ["h", "hb", "H", "hB"],
            BT: ["h", "H"],
            BW: ["H", "h", "hb", "hB"],
            BY: ["H", "h"],
            BZ: ["H", "h", "hb", "hB"],
            CA: ["h", "hb", "H", "hB"],
            CC: ["H", "h", "hb", "hB"],
            CD: ["hB", "H"],
            CF: ["H", "h", "hB"],
            CG: ["H", "hB"],
            CH: ["H", "hB", "h"],
            CI: ["H", "hB"],
            CK: ["H", "h", "hb", "hB"],
            CL: ["h", "H", "hB", "hb"],
            CM: ["H", "h", "hB"],
            CN: ["H", "hB", "hb", "h"],
            CO: ["h", "H", "hB", "hb"],
            CP: ["H"],
            CR: ["h", "H", "hB", "hb"],
            CU: ["h", "H", "hB", "hb"],
            CV: ["H", "hB"],
            CW: ["H", "hB"],
            CX: ["H", "h", "hb", "hB"],
            CY: ["h", "H", "hb", "hB"],
            CZ: ["H"],
            DE: ["H", "hB"],
            DG: ["H", "h", "hb", "hB"],
            DJ: ["h", "H"],
            DK: ["H"],
            DM: ["h", "hb", "H", "hB"],
            DO: ["h", "H", "hB", "hb"],
            DZ: ["h", "hB", "hb", "H"],
            EA: ["H", "h", "hB", "hb"],
            EC: ["h", "H", "hB", "hb"],
            EE: ["H", "hB"],
            EG: ["h", "hB", "hb", "H"],
            EH: ["h", "hB", "hb", "H"],
            ER: ["h", "H"],
            ES: ["H", "hB", "h", "hb"],
            ET: ["hB", "hb", "h", "H"],
            FI: ["H"],
            FJ: ["h", "hb", "H", "hB"],
            FK: ["H", "h", "hb", "hB"],
            FM: ["h", "hb", "H", "hB"],
            FO: ["H", "h"],
            FR: ["H", "hB"],
            GA: ["H", "hB"],
            GB: ["H", "h", "hb", "hB"],
            GD: ["h", "hb", "H", "hB"],
            GE: ["H", "hB", "h"],
            GF: ["H", "hB"],
            GG: ["H", "h", "hb", "hB"],
            GH: ["h", "H"],
            GI: ["H", "h", "hb", "hB"],
            GL: ["H", "h"],
            GM: ["h", "hb", "H", "hB"],
            GN: ["H", "hB"],
            GP: ["H", "hB"],
            GQ: ["H", "hB", "h", "hb"],
            GR: ["h", "H", "hb", "hB"],
            GS: ["H", "h", "hb", "hB"],
            GT: ["h", "H", "hB", "hb"],
            GU: ["h", "hb", "H", "hB"],
            GW: ["H", "hB"],
            GY: ["h", "hb", "H", "hB"],
            HK: ["h", "hB", "hb", "H"],
            HN: ["h", "H", "hB", "hb"],
            HR: ["H", "hB"],
            HU: ["H", "h"],
            IC: ["H", "h", "hB", "hb"],
            ID: ["H"],
            IE: ["H", "h", "hb", "hB"],
            IL: ["H", "hB"],
            IM: ["H", "h", "hb", "hB"],
            IN: ["h", "H"],
            IO: ["H", "h", "hb", "hB"],
            IQ: ["h", "hB", "hb", "H"],
            IR: ["hB", "H"],
            IS: ["H"],
            IT: ["H", "hB"],
            JE: ["H", "h", "hb", "hB"],
            JM: ["h", "hb", "H", "hB"],
            JO: ["h", "hB", "hb", "H"],
            JP: ["H", "K", "h"],
            KE: ["hB", "hb", "H", "h"],
            KG: ["H", "h", "hB", "hb"],
            KH: ["hB", "h", "H", "hb"],
            KI: ["h", "hb", "H", "hB"],
            KM: ["H", "h", "hB", "hb"],
            KN: ["h", "hb", "H", "hB"],
            KP: ["h", "H", "hB", "hb"],
            KR: ["h", "H", "hB", "hb"],
            KW: ["h", "hB", "hb", "H"],
            KY: ["h", "hb", "H", "hB"],
            KZ: ["H", "hB"],
            LA: ["H", "hb", "hB", "h"],
            LB: ["h", "hB", "hb", "H"],
            LC: ["h", "hb", "H", "hB"],
            LI: ["H", "hB", "h"],
            LK: ["H", "h", "hB", "hb"],
            LR: ["h", "hb", "H", "hB"],
            LS: ["h", "H"],
            LT: ["H", "h", "hb", "hB"],
            LU: ["H", "h", "hB"],
            LV: ["H", "hB", "hb", "h"],
            LY: ["h", "hB", "hb", "H"],
            MA: ["H", "h", "hB", "hb"],
            MC: ["H", "hB"],
            MD: ["H", "hB"],
            ME: ["H", "hB", "h"],
            MF: ["H", "hB"],
            MG: ["H", "h"],
            MH: ["h", "hb", "H", "hB"],
            MK: ["H", "h", "hb", "hB"],
            ML: ["H"],
            MM: ["hB", "hb", "H", "h"],
            MN: ["H", "h", "hb", "hB"],
            MO: ["h", "hB", "hb", "H"],
            MP: ["h", "hb", "H", "hB"],
            MQ: ["H", "hB"],
            MR: ["h", "hB", "hb", "H"],
            MS: ["H", "h", "hb", "hB"],
            MT: ["H", "h"],
            MU: ["H", "h"],
            MV: ["H", "h"],
            MW: ["h", "hb", "H", "hB"],
            MX: ["h", "H", "hB", "hb"],
            MY: ["hb", "hB", "h", "H"],
            MZ: ["H", "hB"],
            NA: ["h", "H", "hB", "hb"],
            NC: ["H", "hB"],
            NE: ["H"],
            NF: ["H", "h", "hb", "hB"],
            NG: ["H", "h", "hb", "hB"],
            NI: ["h", "H", "hB", "hb"],
            NL: ["H", "hB"],
            NO: ["H", "h"],
            NP: ["H", "h", "hB"],
            NR: ["H", "h", "hb", "hB"],
            NU: ["H", "h", "hb", "hB"],
            NZ: ["h", "hb", "H", "hB"],
            OM: ["h", "hB", "hb", "H"],
            PA: ["h", "H", "hB", "hb"],
            PE: ["h", "H", "hB", "hb"],
            PF: ["H", "h", "hB"],
            PG: ["h", "H"],
            PH: ["h", "hB", "hb", "H"],
            PK: ["h", "hB", "H"],
            PL: ["H", "h"],
            PM: ["H", "hB"],
            PN: ["H", "h", "hb", "hB"],
            PR: ["h", "H", "hB", "hb"],
            PS: ["h", "hB", "hb", "H"],
            PT: ["H", "hB"],
            PW: ["h", "H"],
            PY: ["h", "H", "hB", "hb"],
            QA: ["h", "hB", "hb", "H"],
            RE: ["H", "hB"],
            RO: ["H", "hB"],
            RS: ["H", "hB", "h"],
            RU: ["H"],
            RW: ["H", "h"],
            SA: ["h", "hB", "hb", "H"],
            SB: ["h", "hb", "H", "hB"],
            SC: ["H", "h", "hB"],
            SD: ["h", "hB", "hb", "H"],
            SE: ["H"],
            SG: ["h", "hb", "H", "hB"],
            SH: ["H", "h", "hb", "hB"],
            SI: ["H", "hB"],
            SJ: ["H"],
            SK: ["H"],
            SL: ["h", "hb", "H", "hB"],
            SM: ["H", "h", "hB"],
            SN: ["H", "h", "hB"],
            SO: ["h", "H"],
            SR: ["H", "hB"],
            SS: ["h", "hb", "H", "hB"],
            ST: ["H", "hB"],
            SV: ["h", "H", "hB", "hb"],
            SX: ["H", "h", "hb", "hB"],
            SY: ["h", "hB", "hb", "H"],
            SZ: ["h", "hb", "H", "hB"],
            TA: ["H", "h", "hb", "hB"],
            TC: ["h", "hb", "H", "hB"],
            TD: ["h", "H", "hB"],
            TF: ["H", "h", "hB"],
            TG: ["H", "hB"],
            TH: ["H", "h"],
            TJ: ["H", "h"],
            TL: ["H", "hB", "hb", "h"],
            TM: ["H", "h"],
            TN: ["h", "hB", "hb", "H"],
            TO: ["h", "H"],
            TR: ["H", "hB"],
            TT: ["h", "hb", "H", "hB"],
            TW: ["hB", "hb", "h", "H"],
            TZ: ["hB", "hb", "H", "h"],
            UA: ["H", "hB", "h"],
            UG: ["hB", "hb", "H", "h"],
            UM: ["h", "hb", "H", "hB"],
            US: ["h", "hb", "H", "hB"],
            UY: ["h", "H", "hB", "hb"],
            UZ: ["H", "hB", "h"],
            VA: ["H", "h", "hB"],
            VC: ["h", "hb", "H", "hB"],
            VE: ["h", "H", "hB", "hb"],
            VG: ["h", "hb", "H", "hB"],
            VI: ["h", "hb", "H", "hB"],
            VN: ["H", "h"],
            VU: ["h", "H"],
            WF: ["H", "hB"],
            WS: ["h", "H"],
            XK: ["H", "hB", "h"],
            YE: ["h", "hB", "hb", "H"],
            YT: ["H", "hB"],
            ZA: ["H", "h", "hb", "hB"],
            ZM: ["h", "hb", "H", "hB"],
            ZW: ["H", "h"],
            "af-ZA": ["H", "h", "hB", "hb"],
            "ar-001": ["h", "hB", "hb", "H"],
            "ca-ES": ["H", "h", "hB"],
            "en-001": ["h", "hb", "H", "hB"],
            "en-HK": ["h", "hb", "H", "hB"],
            "en-IL": ["H", "h", "hb", "hB"],
            "en-MY": ["h", "hb", "H", "hB"],
            "es-BR": ["H", "h", "hB", "hb"],
            "es-ES": ["H", "h", "hB", "hb"],
            "es-GQ": ["H", "h", "hB", "hb"],
            "fr-CA": ["H", "h", "hB"],
            "gl-ES": ["H", "h", "hB"],
            "gu-IN": ["hB", "hb", "h", "H"],
            "hi-IN": ["hB", "h", "H"],
            "it-CH": ["H", "h", "hB"],
            "it-IT": ["H", "h", "hB"],
            "kn-IN": ["hB", "h", "H"],
            "ku-SY": ["H", "hB"],
            "ml-IN": ["hB", "h", "H"],
            "mr-IN": ["hB", "hb", "h", "H"],
            "pa-IN": ["hB", "hb", "h", "H"],
            "ta-IN": ["hB", "h", "hb", "H"],
            "te-IN": ["hB", "h", "H"],
            "zu-ZA": ["H", "hB", "hb", "h"]
        },
        w = RegExp(`^${L.source}*`),
        A = RegExp(`${L.source}*$`);

    function C(e, t) {
        return {
            start: e,
            end: t
        }
    }
    let M = !!Object.fromEntries,
        I = !!String.prototype.trimStart,
        O = !!String.prototype.trimEnd,
        _ = M ? Object.fromEntries : function(e) {
            let t = {};
            for (let [r, n] of e) t[r] = n;
            return t
        },
        R = I ? function(e) {
            return e.trimStart()
        } : function(e) {
            return e.replace(w, "")
        },
        k = O ? function(e) {
            return e.trimEnd()
        } : function(e) {
            return e.replace(A, "")
        },
        N = RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
    var F = class {
        constructor(e, t = {}) {
            this.message = e, this.position = {
                offset: 0,
                line: 1,
                column: 1
            }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
        }
        parse() {
            if (0 !== this.offset()) throw Error("parser can only be used once");
            if (this.message.length > 0) {
                let e = this.message.charCodeAt(0);
                if (35 !== e && 39 !== e && 60 !== e && 123 !== e && 125 !== e) {
                    let e = function(e) {
                        if (0 === e.length) return null;
                        let t = 1,
                            r = 1;
                        for (let n = 0; n < e.length;) {
                            let i = e.charCodeAt(n);
                            switch (i) {
                                case 35:
                                case 39:
                                case 60:
                                case 123:
                                case 125:
                                    return null
                            }
                            if (10 === i) t++, r = 1, n++;
                            else if (r++, i >= 55296 && i <= 56319 && n + 1 < e.length) {
                                let t = e.charCodeAt(n + 1);
                                n += t >= 56320 && t <= 57343 ? 2 : 1
                            } else n++
                        }
                        return {
                            offset: e.length,
                            line: t,
                            column: r
                        }
                    }(this.message);
                    if (e) {
                        let t = this.clonePosition();
                        return this.position = e, {
                            val: [{
                                type: 0,
                                value: this.message,
                                location: C(t, this.clonePosition())
                            }],
                            err: null
                        }
                    }
                }
            }
            return this.parseMessage(0, "", !1)
        }
        parseMessage(e, t, r) {
            let n = [];
            for (; !this.isEOF();) {
                let i = this.char();
                if (123 === i) {
                    let t = this.parseArgument(e, r);
                    if (t.err) return t;
                    n.push(t.val)
                } else if (125 === i && e > 0) break;
                else if (35 === i && ("plural" === t || "selectordinal" === t)) {
                    let e = this.clonePosition();
                    this.bump(), n.push({
                        type: 7,
                        location: C(e, this.clonePosition())
                    })
                } else if (60 !== i || this.ignoreTag || 47 !== this.peek())
                    if (60 === i && !this.ignoreTag && D(this.peek() || 0)) {
                        let r = this.parseTag(e, t);
                        if (r.err) return r;
                        n.push(r.val)
                    } else {
                        let r = this.parseLiteral(e, t);
                        if (r.err) return r;
                        n.push(r.val)
                    }
                else if (!r) return this.error(26, C(this.clonePosition(), this.clonePosition()));
                else break
            }
            return {
                val: n,
                err: null
            }
        }
        parseTag(e, t) {
            let r = this.clonePosition();
            this.bump();
            let n = this.parseTagName();
            if (this.bumpSpace(), this.bumpIf("/>")) return {
                val: {
                    type: 0,
                    value: `<${n}/>`,
                    location: C(r, this.clonePosition())
                },
                err: null
            };
            if (!this.bumpIf(">")) return this.error(23, C(r, this.clonePosition()));
            {
                let i = this.parseMessage(e + 1, t, !0);
                if (i.err) return i;
                let o = i.val,
                    s = this.clonePosition();
                if (!this.bumpIf("</")) return this.error(27, C(r, this.clonePosition()));
                {
                    if (this.isEOF() || !D(this.char())) return this.error(23, C(s, this.clonePosition()));
                    let e = this.clonePosition();
                    return n !== this.parseTagName() ? this.error(26, C(e, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">")) ? {
                        val: {
                            type: 8,
                            value: n,
                            children: o,
                            location: C(r, this.clonePosition())
                        },
                        err: null
                    } : this.error(23, C(s, this.clonePosition()))
                }
            }
        }
        parseTagName() {
            var e;
            let t = this.offset();
            for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
            return this.message.slice(t, this.offset())
        }
        parseLiteral(e, t) {
            let r = this.clonePosition(),
                n = "";
            for (;;) {
                let r = this.tryParseQuote(t);
                if (r) {
                    n += r;
                    continue
                }
                let i = this.tryParseUnquoted(e, t);
                if (i) {
                    n += i;
                    continue
                }
                let o = this.tryParseLeftAngleBracket();
                if (o) {
                    n += o;
                    continue
                }
                break
            }
            return {
                val: {
                    type: 0,
                    value: n,
                    location: C(r, this.clonePosition())
                },
                err: null
            }
        }
        tryParseLeftAngleBracket() {
            var e;
            return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (D(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<")
        }
        tryParseQuote(e) {
            if (this.isEOF() || 39 !== this.char()) return null;
            switch (this.peek()) {
                case 39:
                    return this.bump(), this.bump(), "'";
                case 123:
                case 60:
                case 62:
                case 125:
                    break;
                case 35:
                    if ("plural" === e || "selectordinal" === e) break;
                    return null;
                default:
                    return null
            }
            this.bump();
            let t = [this.char()];
            for (this.bump(); !this.isEOF();) {
                let e = this.char();
                if (39 === e)
                    if (39 === this.peek()) t.push(39), this.bump();
                    else {
                        this.bump();
                        break
                    }
                else t.push(e);
                this.bump()
            }
            return String.fromCodePoint(...t)
        }
        tryParseUnquoted(e, t) {
            if (this.isEOF()) return null;
            let r = this.char();
            return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), String.fromCodePoint(r))
        }
        parseArgument(e, t) {
            let r = this.clonePosition();
            if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(1, C(r, this.clonePosition()));
            if (125 === this.char()) return this.bump(), this.error(2, C(r, this.clonePosition()));
            let n = this.parseIdentifierIfPossible().value;
            if (!n) return this.error(3, C(r, this.clonePosition()));
            if (this.bumpSpace(), this.isEOF()) return this.error(1, C(r, this.clonePosition()));
            switch (this.char()) {
                case 125:
                    return this.bump(), {
                        val: {
                            type: 1,
                            value: n,
                            location: C(r, this.clonePosition())
                        },
                        err: null
                    };
                case 44:
                    if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(1, C(r, this.clonePosition()));
                    return this.parseArgumentOptions(e, t, n, r);
                default:
                    return this.error(3, C(r, this.clonePosition()))
            }
        }
        parseIdentifierIfPossible() {
            var e;
            let t = this.clonePosition(),
                r = this.offset(),
                n = (e = this.message, N.lastIndex = r, N.exec(e)[1] ?? ""),
                i = r + n.length;
            return this.bumpTo(i), {
                value: n,
                location: C(t, this.clonePosition())
            }
        }
        parseArgumentOptions(e, t, r, n) {
            let i = this.clonePosition(),
                o = this.parseIdentifierIfPossible().value,
                s = this.clonePosition();
            switch (o) {
                case "":
                    return this.error(4, C(i, s));
                case "number":
                case "date":
                case "time": {
                    this.bumpSpace();
                    let e = null;
                    if (this.bumpIf(",")) {
                        this.bumpSpace();
                        let t = this.clonePosition(),
                            r = this.parseSimpleArgStyleIfPossible();
                        if (r.err) return r;
                        let n = k(r.val);
                        if (0 === n.length) return this.error(6, C(this.clonePosition(), this.clonePosition()));
                        e = {
                            style: n,
                            styleLocation: C(t, this.clonePosition())
                        }
                    }
                    let t = this.tryParseArgumentClose(n);
                    if (t.err) return t;
                    let i = C(n, this.clonePosition());
                    if (e && e.style.startsWith("::")) {
                        let t = R(e.style.slice(2));
                        if ("number" === o) {
                            let n = this.parseNumberSkeletonFromString(t, e.styleLocation);
                            if (n.err) return n;
                            return {
                                val: {
                                    type: 2,
                                    value: r,
                                    location: i,
                                    style: n.val
                                },
                                err: null
                            }
                        } {
                            let n;
                            if (0 === t.length) return this.error(10, i);
                            let s = t;
                            return this.locale && (s = function(e, t) {
                                let r = "";
                                for (let n = 0; n < e.length; n++) {
                                    let i = e.charAt(n);
                                    if ("j" === i) {
                                        let o = 0;
                                        for (; n + 1 < e.length && e.charAt(n + 1) === i;) o++, n++;
                                        let s = 1 + (1 & o),
                                            a = o < 2 ? 1 : 3 + (o >> 1),
                                            l = function(e) {
                                                let t, r = e.hourCycle;
                                                if (void 0 === r && e.hourCycles && e.hourCycles.length && (r = e.hourCycles[0]), r) switch (r) {
                                                    case "h24":
                                                        return "k";
                                                    case "h23":
                                                        return "H";
                                                    case "h12":
                                                        return "h";
                                                    case "h11":
                                                        return "K";
                                                    default:
                                                        throw Error("Invalid hourCycle")
                                                }
                                                let n = e.language;
                                                return "root" !== n && (t = e.maximize().region), (B[t || ""] || B[n || ""] || B[`${n}-001`] || B["001"])[0]
                                            }(t);
                                        for (("H" == l || "k" == l) && (a = 0); a-- > 0;) r += "a";
                                        for (; s-- > 0;) r = l + r
                                    } else "J" === i ? r += "H" : r += i
                                }
                                return r
                            }(t, this.locale)), {
                                val: {
                                    type: "date" === o ? 3 : 4,
                                    value: r,
                                    location: i,
                                    style: {
                                        type: 1,
                                        pattern: s,
                                        location: e.styleLocation,
                                        parsedOptions: this.shouldParseSkeletons ? (n = {}, s.replace(p, e => {
                                            let t = e.length;
                                            switch (e[0]) {
                                                case "G":
                                                    n.era = 4 === t ? "long" : 5 === t ? "narrow" : "short";
                                                    break;
                                                case "y":
                                                    n.year = 2 === t ? "2-digit" : "numeric";
                                                    break;
                                                case "Y":
                                                case "u":
                                                case "U":
                                                case "r":
                                                    throw RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
                                                case "q":
                                                case "Q":
                                                    throw RangeError("`q/Q` (quarter) patterns are not supported");
                                                case "M":
                                                case "L":
                                                    n.month = ["numeric", "2-digit", "short", "long", "narrow"][t - 1];
                                                    break;
                                                case "w":
                                                case "W":
                                                    throw RangeError("`w/W` (week) patterns are not supported");
                                                case "d":
                                                    n.day = ["numeric", "2-digit"][t - 1];
                                                    break;
                                                case "D":
                                                case "F":
                                                case "g":
                                                    throw RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
                                                case "E":
                                                    n.weekday = 4 === t ? "long" : 5 === t ? "narrow" : "short";
                                                    break;
                                                case "e":
                                                    if (t < 4) throw RangeError("`e..eee` (weekday) patterns are not supported");
                                                    n.weekday = ["short", "long", "narrow", "short"][t - 3];
                                                    break;
                                                case "c":
                                                    if (t < 4) throw RangeError("`c..ccc` (weekday) patterns are not supported");
                                                    n.weekday = ["short", "long", "narrow", "short"][t - 3];
                                                    break;
                                                case "a":
                                                    n.hour12 = !0;
                                                    break;
                                                case "b":
                                                case "B":
                                                    throw RangeError("`b/B` (period) patterns are not supported, use `a` instead");
                                                case "h":
                                                    n.hourCycle = "h12", n.hour = ["numeric", "2-digit"][t - 1];
                                                    break;
                                                case "H":
                                                    n.hourCycle = "h23", n.hour = ["numeric", "2-digit"][t - 1];
                                                    break;
                                                case "K":
                                                    n.hourCycle = "h11", n.hour = ["numeric", "2-digit"][t - 1];
                                                    break;
                                                case "k":
                                                    n.hourCycle = "h24", n.hour = ["numeric", "2-digit"][t - 1];
                                                    break;
                                                case "j":
                                                case "J":
                                                case "C":
                                                    throw RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
                                                case "m":
                                                    n.minute = ["numeric", "2-digit"][t - 1];
                                                    break;
                                                case "s":
                                                    n.second = ["numeric", "2-digit"][t - 1];
                                                    break;
                                                case "S":
                                                case "A":
                                                    throw RangeError("`S/A` (second) patterns are not supported, use `s` instead");
                                                case "z":
                                                    n.timeZoneName = t < 4 ? "short" : "long";
                                                    break;
                                                case "Z":
                                                case "O":
                                                case "v":
                                                case "V":
                                                case "X":
                                                case "x":
                                                    throw RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
                                            }
                                            return ""
                                        }), n) : {}
                                    }
                                },
                                err: null
                            }
                        }
                    }
                    return {
                        val: {
                            type: "number" === o ? 2 : "date" === o ? 3 : 4,
                            value: r,
                            location: i,
                            style: e?.style ?? null
                        },
                        err: null
                    }
                }
                case "plural":
                case "selectordinal":
                case "select": {
                    let i = this.clonePosition();
                    if (this.bumpSpace(), !this.bumpIf(",")) return this.error(12, C(i, {
                        ...i
                    }));
                    this.bumpSpace();
                    let s = this.parseIdentifierIfPossible(),
                        a = 0;
                    if ("select" !== o && "offset" === s.value) {
                        if (!this.bumpIf(":")) return this.error(13, C(this.clonePosition(), this.clonePosition()));
                        this.bumpSpace();
                        let e = this.tryParseDecimalInteger(13, 14);
                        if (e.err) return e;
                        this.bumpSpace(), s = this.parseIdentifierIfPossible(), a = e.val
                    }
                    let l = this.tryParsePluralOrSelectOptions(e, o, t, s);
                    if (l.err) return l;
                    let u = this.tryParseArgumentClose(n);
                    if (u.err) return u;
                    let c = C(n, this.clonePosition());
                    if ("select" === o) return {
                        val: {
                            type: 5,
                            value: r,
                            options: _(l.val),
                            location: c
                        },
                        err: null
                    };
                    return {
                        val: {
                            type: 6,
                            value: r,
                            options: _(l.val),
                            offset: a,
                            pluralType: "plural" === o ? "cardinal" : "ordinal",
                            location: c
                        },
                        err: null
                    }
                }
                default:
                    return this.error(5, C(i, s))
            }
        }
        tryParseArgumentClose(e) {
            return this.isEOF() || 125 !== this.char() ? this.error(1, C(e, this.clonePosition())) : (this.bump(), {
                val: !0,
                err: null
            })
        }
        parseSimpleArgStyleIfPossible() {
            let e = 0,
                t = this.clonePosition();
            for (; !this.isEOF();) switch (this.char()) {
                case 39: {
                    this.bump();
                    let e = this.clonePosition();
                    if (!this.bumpUntil("'")) return this.error(11, C(e, this.clonePosition()));
                    this.bump();
                    break
                }
                case 123:
                    e += 1, this.bump();
                    break;
                case 125:
                    if (!(e > 0)) return {
                        val: this.message.slice(t.offset, this.offset()),
                        err: null
                    };
                    e -= 1;
                    break;
                default:
                    this.bump()
            }
            return {
                val: this.message.slice(t.offset, this.offset()),
                err: null
            }
        }
        parseNumberSkeletonFromString(e, t) {
            let r = [];
            try {
                r = function(e) {
                    if (0 === e.length) throw Error("Number skeleton cannot be empty");
                    let t = e.split(d).filter(e => e.length > 0),
                        r = [];
                    for (let e of t) {
                        let t = e.split("/");
                        if (0 === t.length) throw Error("Invalid number skeleton");
                        let [n, ...i] = t;
                        for (let e of i)
                            if (0 === e.length) throw Error("Invalid number skeleton");
                        r.push({
                            stem: n,
                            options: i
                        })
                    }
                    return r
                }(e)
            } catch {
                return this.error(7, t)
            }
            return {
                val: {
                    type: 0,
                    tokens: r,
                    location: t,
                    parsedOptions: this.shouldParseSkeletons ? function(e) {
                        let t = {};
                        for (let r of e) {
                            switch (r.stem) {
                                case "percent":
                                case "%":
                                    t.style = "percent";
                                    continue;
                                case "%x100":
                                    t.style = "percent", t.scale = 100;
                                    continue;
                                case "currency":
                                    t.style = "currency", t.currency = r.options[0];
                                    continue;
                                case "group-off":
                                case ",_":
                                    t.useGrouping = !1;
                                    continue;
                                case "precision-integer":
                                case ".":
                                    t.maximumFractionDigits = 0;
                                    continue;
                                case "measure-unit":
                                case "unit":
                                    t.style = "unit", t.unit = r.options[0].replace(/^(.*?)-/, "");
                                    continue;
                                case "compact-short":
                                case "K":
                                    t.notation = "compact", t.compactDisplay = "short";
                                    continue;
                                case "compact-long":
                                case "KK":
                                    t.notation = "compact", t.compactDisplay = "long";
                                    continue;
                                case "scientific":
                                    t = {
                                        ...t,
                                        notation: "scientific",
                                        ...r.options.reduce((e, t) => ({
                                            ...e,
                                            ...T(t)
                                        }), {})
                                    };
                                    continue;
                                case "engineering":
                                    t = {
                                        ...t,
                                        notation: "engineering",
                                        ...r.options.reduce((e, t) => ({
                                            ...e,
                                            ...T(t)
                                        }), {})
                                    };
                                    continue;
                                case "notation-simple":
                                    t.notation = "standard";
                                    continue;
                                case "unit-width-narrow":
                                    t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
                                    continue;
                                case "unit-width-short":
                                    t.currencyDisplay = "code", t.unitDisplay = "short";
                                    continue;
                                case "unit-width-full-name":
                                    t.currencyDisplay = "name", t.unitDisplay = "long";
                                    continue;
                                case "unit-width-iso-code":
                                    t.currencyDisplay = "symbol";
                                    continue;
                                case "scale":
                                    t.scale = parseFloat(r.options[0]);
                                    continue;
                                case "rounding-mode-floor":
                                    t.roundingMode = "floor";
                                    continue;
                                case "rounding-mode-ceiling":
                                    t.roundingMode = "ceil";
                                    continue;
                                case "rounding-mode-down":
                                    t.roundingMode = "trunc";
                                    continue;
                                case "rounding-mode-up":
                                    t.roundingMode = "expand";
                                    continue;
                                case "rounding-mode-half-even":
                                    t.roundingMode = "halfEven";
                                    continue;
                                case "rounding-mode-half-down":
                                    t.roundingMode = "halfTrunc";
                                    continue;
                                case "rounding-mode-half-up":
                                    t.roundingMode = "halfExpand";
                                    continue;
                                case "integer-width":
                                    if (r.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
                                    r.options[0].replace(b, function(e, r, n, i, o, s) {
                                        if (r) t.minimumIntegerDigits = n.length;
                                        else if (i && o) throw Error("We currently do not support maximum integer digits");
                                        else if (s) throw Error("We currently do not support exact integer digits");
                                        return ""
                                    });
                                    continue
                            }
                            if (y.test(r.stem)) {
                                t.minimumIntegerDigits = r.stem.length;
                                continue
                            }
                            if (g.test(r.stem)) {
                                if (r.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
                                r.stem.replace(g, function(e, r, n, i, o, s) {
                                    return "*" === n ? t.minimumFractionDigits = r.length : i && "#" === i[0] ? t.maximumFractionDigits = i.length : o && s ? (t.minimumFractionDigits = o.length, t.maximumFractionDigits = o.length + s.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
                                });
                                let e = r.options[0];
                                "w" === e ? t = {
                                    ...t,
                                    trailingZeroDisplay: "stripIfInteger"
                                } : e && (t = {
                                    ...t,
                                    ...E(e)
                                });
                                continue
                            }
                            if (m.test(r.stem)) {
                                t = {
                                    ...t,
                                    ...E(r.stem)
                                };
                                continue
                            }
                            let e = v(r.stem);
                            e && (t = {
                                ...t,
                                ...e
                            });
                            let n = function(e) {
                                let t;
                                if ("E" === e[0] && "E" === e[1] ? (t = {
                                        notation: "engineering"
                                    }, e = e.slice(2)) : "E" === e[0] && (t = {
                                        notation: "scientific"
                                    }, e = e.slice(1)), t) {
                                    let r = e.slice(0, 2);
                                    if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !y.test(e)) throw Error("Malformed concise eng/scientific notation");
                                    t.minimumIntegerDigits = e.length
                                }
                                return t
                            }(r.stem);
                            n && (t = {
                                ...t,
                                ...n
                            })
                        }
                        return t
                    }(r) : {}
                },
                err: null
            }
        }
        tryParsePluralOrSelectOptions(e, t, r, n) {
            let i = !1,
                o = [],
                s = new Set,
                {
                    value: a,
                    location: l
                } = n;
            for (;;) {
                if (0 === a.length) {
                    let e = this.clonePosition();
                    if ("select" !== t && this.bumpIf("=")) {
                        let t = this.tryParseDecimalInteger(16, 19);
                        if (t.err) return t;
                        l = C(e, this.clonePosition()), a = this.message.slice(e.offset, this.offset())
                    } else break
                }
                if (s.has(a)) return this.error("select" === t ? 21 : 20, l);
                "other" === a && (i = !0), this.bumpSpace();
                let n = this.clonePosition();
                if (!this.bumpIf("{")) return this.error("select" === t ? 17 : 18, C(this.clonePosition(), this.clonePosition()));
                let u = this.parseMessage(e + 1, t, r);
                if (u.err) return u;
                let c = this.tryParseArgumentClose(n);
                if (c.err) return c;
                o.push([a, {
                    value: u.val,
                    location: C(n, this.clonePosition())
                }]), s.add(a), this.bumpSpace(), {
                    value: a,
                    location: l
                } = this.parseIdentifierIfPossible()
            }
            return 0 === o.length ? this.error("select" === t ? 15 : 16, C(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(22, C(this.clonePosition(), this.clonePosition())) : {
                val: o,
                err: null
            }
        }
        tryParseDecimalInteger(e, t) {
            let r = 1,
                n = this.clonePosition();
            this.bumpIf("+") || this.bumpIf("-") && (r = -1);
            let i = !1,
                o = 0;
            for (; !this.isEOF();) {
                let e = this.char();
                if (e >= 48 && e <= 57) i = !0, o = 10 * o + (e - 48), this.bump();
                else break
            }
            let s = C(n, this.clonePosition());
            return i ? Number.isSafeInteger(o *= r) ? {
                val: o,
                err: null
            } : this.error(t, s) : this.error(e, s)
        }
        offset() {
            return this.position.offset
        }
        isEOF() {
            return this.offset() === this.message.length
        }
        clonePosition() {
            return {
                offset: this.position.offset,
                line: this.position.line,
                column: this.position.column
            }
        }
        char() {
            let e = this.position.offset;
            if (e >= this.message.length) throw Error("out of bound");
            let t = this.message.codePointAt(e);
            if (void 0 === t) throw Error(`Offset ${e} is at invalid UTF-16 code unit boundary`);
            return t
        }
        error(e, t) {
            return {
                val: null,
                err: {
                    kind: e,
                    message: this.message,
                    location: t
                }
            }
        }
        bump() {
            if (this.isEOF()) return;
            let e = this.char();
            10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
        }
        bumpIf(e) {
            if (this.message.startsWith(e, this.offset())) {
                for (let t = 0; t < e.length; t++) this.bump();
                return !0
            }
            return !1
        }
        bumpUntil(e) {
            let t = this.offset(),
                r = this.message.indexOf(e, t);
            return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1)
        }
        bumpTo(e) {
            if (this.offset() > e) throw Error(`targetOffset ${e} must be greater than or equal to the current offset ${this.offset()}`);
            for (e = Math.min(e, this.message.length);;) {
                let t = this.offset();
                if (t === e) break;
                if (t > e) throw Error(`targetOffset ${e} is at invalid UTF-16 code unit boundary`);
                if (this.bump(), this.isEOF()) break
            }
        }
        bumpSpace() {
            for (var e; !this.isEOF() && ((e = this.char()) >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e);) this.bump()
        }
        peek() {
            if (this.isEOF()) return null;
            let e = this.char(),
                t = this.offset();
            return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null
        }
    };

    function D(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
    }

    function x(e, t = {}) {
        let r = new F(e, t = {
            shouldParseSkeletons: !0,
            requiresOtherClause: !0,
            ...t
        }).parse();
        if (r.err) {
            let e = SyntaxError(P[r.err.kind]);
            throw e.location = r.err.location, e.originalMessage = r.err.message, e
        }
        return t?.captureLocation || function e(t) {
            t.forEach(t => {
                if (delete t.location, 5 === t.type || 6 === t.type)
                    for (let r in t.options) delete t.options[r].location, e(t.options[r].value);
                else 2 === t.type && H(t.style) || (3 === t.type || 4 === t.type) && S(t.style) ? delete t.style.location : 8 === t.type && e(t.children)
            })
        }(r.val), r.val
    }
    var U = class extends Error {
            constructor(e, t, r) {
                super(e), this.code = t, this.originalMessage = r
            }
            toString() {
                return `[formatjs Error: ${this.code}] ${this.message}`
            }
        },
        G = class extends U {
            constructor(e, t, r, n) {
                super(`Invalid values for "${e}": "${t}". Options are "${Object.keys(r).join('", "')}"`, "INVALID_VALUE", n)
            }
        },
        K = class extends U {
            constructor(e, t, r) {
                super(`Value for "${e}" must be of type ${t}`, "INVALID_VALUE", r)
            }
        },
        V = class extends U {
            constructor(e, t) {
                super(`The intl string context variable "${e}" was not provided to the string "${t}"`, "MISSING_VALUE", t)
            }
        };

    function W(e) {
        return {
            create: () => ({
                get: t => e[t],
                set(t, r) {
                    e[t] = r
                }
            })
        }
    }

    function j(e) {
        return function(...e) {
            return e.filter(Boolean).join(".")
        }(e.namespace, e.key)
    }

    function $(e) {
        console.error(e)
    }(class e {
        constructor(t, r = e.defaultLocale, n, o) {
            if (this.formatterCache = {
                    number: {},
                    dateTime: {},
                    pluralRules: {}
                }, this.format = e => {
                    let t = this.formatToParts(e);
                    if (1 === t.length) return t[0].value;
                    let r = t.reduce((e, t) => (e.length && 0 === t.type && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e), []);
                    return r.length <= 1 ? r[0] || "" : r
                }, this.formatToParts = e => (function e(t, r, n, i, o, s, a) {
                    if (1 === t.length && 0 === t[0].type) return [{
                        type: 0,
                        value: t[0].value
                    }];
                    let l = [];
                    for (let u of t) {
                        if (0 === u.type) {
                            l.push({
                                type: 0,
                                value: u.value
                            });
                            continue
                        }
                        if (7 === u.type) {
                            "number" == typeof s && l.push({
                                type: 0,
                                value: n.getNumberFormat(r).format(s)
                            });
                            continue
                        }
                        let {
                            value: t
                        } = u;
                        if (!(o && t in o)) throw new V(t, a);
                        let c = o[t];
                        if (1 === u.type) {
                            c && "string" != typeof c && "number" != typeof c && "bigint" != typeof c || (c = "string" == typeof c || "number" == typeof c || "bigint" == typeof c ? String(c) : ""), l.push({
                                type: +("string" != typeof c),
                                value: c
                            });
                            continue
                        }
                        if (3 === u.type) {
                            let e = "string" == typeof u.style ? i.date[u.style] : S(u.style) ? u.style.parsedOptions : void 0;
                            l.push({
                                type: 0,
                                value: n.getDateTimeFormat(r, e).format(c)
                            });
                            continue
                        }
                        if (4 === u.type) {
                            let e = "string" == typeof u.style ? i.time[u.style] : S(u.style) ? u.style.parsedOptions : i.time.medium;
                            l.push({
                                type: 0,
                                value: n.getDateTimeFormat(r, e).format(c)
                            });
                            continue
                        }
                        if (2 === u.type) {
                            let e = "string" == typeof u.style ? i.number[u.style] : H(u.style) ? u.style.parsedOptions : void 0;
                            if (e && e.scale) {
                                let t = e.scale || 1;
                                if ("bigint" == typeof c) {
                                    if (!Number.isInteger(t)) throw TypeError(`Cannot apply fractional scale ${t} to bigint value. Scale must be an integer when formatting bigint.`);
                                    c *= BigInt(t)
                                } else c *= t
                            }
                            l.push({
                                type: 0,
                                value: n.getNumberFormat(r, e).format(c)
                            });
                            continue
                        }
                        if (8 === u.type) {
                            let {
                                children: t,
                                value: c
                            } = u, h = o[c];
                            if ("function" != typeof h) throw new K(c, "function", a);
                            let f = h(e(t, r, n, i, o, s).map(e => e.value));
                            Array.isArray(f) || (f = [f]), l.push(...f.map(e => ({
                                type: +("string" != typeof e),
                                value: e
                            })))
                        }
                        if (5 === u.type) {
                            let t = c,
                                s = (Object.prototype.hasOwnProperty.call(u.options, t) ? u.options[t] : void 0) || u.options.other;
                            if (!s) throw new G(u.value, c, Object.keys(u.options), a);
                            l.push(...e(s.value, r, n, i, o));
                            continue
                        }
                        if (6 === u.type) {
                            let t = `=${c}`,
                                s = Object.prototype.hasOwnProperty.call(u.options, t) ? u.options[t] : void 0;
                            if (!s) {
                                if (!Intl.PluralRules) throw new U(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, "MISSING_INTL_API", a);
                                let e = "bigint" == typeof c ? Number(c) : c,
                                    t = n.getPluralRules(r, {
                                        type: u.pluralType
                                    }).select(e - (u.offset || 0));
                                s = (Object.prototype.hasOwnProperty.call(u.options, t) ? u.options[t] : void 0) || u.options.other
                            }
                            if (!s) throw new G(u.value, c, Object.keys(u.options), a);
                            let h = "bigint" == typeof c ? Number(c) : c;
                            l.push(...e(s.value, r, n, i, o, h - (u.offset || 0)));
                            continue
                        }
                    }
                    return l.length < 2 ? l : l.reduce((e, t) => {
                        let r = e[e.length - 1];
                        return r && 0 === r.type && 0 === t.type ? r.value += t.value : e.push(t), e
                    }, [])
                })(this.ast, this.locales, this.formatters, this.formats, e, void 0, this.message), this.resolvedOptions = () => ({
                    locale: this.resolvedLocale?.toString() || Intl.NumberFormat.supportedLocalesOf(this.locales)[0]
                }), this.getAst = () => this.ast, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" == typeof t) {
                if (this.message = t, !e.__parse) throw TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
                const {
                    ...r
                } = o || {};
                this.ast = e.__parse(t, {
                    ...r,
                    locale: this.resolvedLocale
                })
            } else this.ast = t;
            if (!Array.isArray(this.ast)) throw TypeError("A message must be provided as a String or AST.");
            this.formats = function(e, t) {
                return t ? Object.keys(e).reduce((r, n) => {
                    var i, o;
                    return r[n] = (i = e[n], (o = t[n]) ? {
                        ...i,
                        ...o,
                        ...Object.keys(i).reduce((e, t) => (e[t] = {
                            ...i[t],
                            ...o[t]
                        }, e), {})
                    } : i), r
                }, {
                    ...e
                }) : e
            }(e.formats, n), this.formatters = o && o.formatters || function(e = {
                number: {},
                dateTime: {},
                pluralRules: {}
            }) {
                return {
                    getNumberFormat: i((...e) => new Intl.NumberFormat(...e), {
                        cache: W(e.number),
                        strategy: c.variadic
                    }),
                    getDateTimeFormat: i((...e) => new Intl.DateTimeFormat(...e), {
                        cache: W(e.dateTime),
                        strategy: c.variadic
                    }),
                    getPluralRules: i((...e) => new Intl.PluralRules(...e), {
                        cache: W(e.pluralRules),
                        strategy: c.variadic
                    })
                }
            }(this.formatterCache)
        }
        static {
            this.memoizedDefaultLocale = null
        }
        static get defaultLocale() {
            return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale
        }
        static {
            this.resolveLocale = e => {
                if (void 0 === Intl.Locale) return;
                let t = Intl.NumberFormat.supportedLocalesOf(e);
                return new Intl.Locale(t.length > 0 ? t[0] : "string" == typeof e ? e : e[0])
            }
        }
        static {
            this.__parse = x
        }
        static {
            this.formats = {
                number: {
                    integer: {
                        maximumFractionDigits: 0
                    },
                    currency: {
                        style: "currency"
                    },
                    percent: {
                        style: "percent"
                    }
                },
                date: {
                    short: {
                        month: "numeric",
                        day: "numeric",
                        year: "2-digit"
                    },
                    medium: {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                    },
                    long: {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    },
                    full: {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    }
                },
                time: {
                    short: {
                        hour: "numeric",
                        minute: "numeric"
                    },
                    medium: {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric"
                    },
                    long: {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        timeZoneName: "short"
                    },
                    full: {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        timeZoneName: "short"
                    }
                }
            }
        }
    });
    var X = e.i(14666);
    let Y = (0, n.createContext)(void 0);
    e.s(["IntlProvider", 0, function({
        children: e,
        formats: t,
        getMessageFallback: r,
        locale: i,
        messages: o,
        now: s,
        onError: a,
        timeZone: l
    }) {
        let u = (0, n.useContext)(Y),
            c = (0, n.useMemo)(() => u?.cache || {
                dateTime: {},
                number: {},
                message: {},
                relativeTime: {},
                pluralRules: {},
                list: {},
                displayNames: {}
            }, [i, u?.cache]),
            h = (0, n.useMemo)(() => u?.formatters || {
                getDateTimeFormat: f(Intl.DateTimeFormat, c.dateTime),
                getNumberFormat: f(Intl.NumberFormat, c.number),
                getPluralRules: f(Intl.PluralRules, c.pluralRules),
                getRelativeTimeFormat: f(Intl.RelativeTimeFormat, c.relativeTime),
                getListFormat: f(Intl.ListFormat, c.list),
                getDisplayNames: f(Intl.DisplayNames, c.displayNames)
            }, [c, u?.formatters]),
            p = (0, n.useMemo)(() => ({
                ... function({
                    formats: e,
                    getMessageFallback: t,
                    messages: r,
                    onError: n,
                    ...i
                }) {
                    return {
                        ...i,
                        formats: e || void 0,
                        messages: r || void 0,
                        onError: n || $,
                        getMessageFallback: t || j
                    }
                }({
                    locale: i,
                    formats: void 0 === t ? u?.formats : t,
                    getMessageFallback: r || u?.getMessageFallback,
                    messages: void 0 === o ? u?.messages : o,
                    now: s || u?.now,
                    onError: a || u?.onError,
                    timeZone: l || u?.timeZone
                }),
                formatters: h,
                cache: c
            }), [c, t, h, r, i, o, s, a, u, l]);
        return (0, X.jsx)(Y.Provider, {
            value: p,
            children: e
        })
    }, "useLocale", 0, function() {
        return function() {
            let e = (0, n.useContext)(Y);
            if (!e) throw Error(void 0);
            return e
        }().locale
    }], 833200)
}, 722978, e => {
    "use strict";

    function t() {
        for (var e, t, r = 0, n = ""; r < arguments.length;)(e = arguments[r++]) && (t = function e(t) {
            var r, n, i = "";
            if ("string" == typeof t || "number" == typeof t) i += t;
            else if ("object" == typeof t)
                if (Array.isArray(t))
                    for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (i && (i += " "), i += n);
                else
                    for (r in t) t[r] && (i && (i += " "), i += r);
            return i
        }(e)) && (n && (n += " "), n += t);
        return n
    }
    e.s(["clsx", 0, t, "default", 0, t])
}, 973277, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let n = e.r(499531);

    function i(e, t) {
        let r = (0, n.useRef)(null),
            i = (0, n.useRef)(null);
        return (0, n.useCallback)(n => {
            if (null === n) {
                let e = r.current;
                e && (r.current = null, e());
                let t = i.current;
                t && (i.current = null, t())
            } else e && (r.current = o(e, n)), t && (i.current = o(t, n))
        }, [e, t])
    }

    function o(e, t) {
        if ("function" != typeof e) return e.current = t, () => {
            e.current = null
        };
        {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 722693, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e => {}
}, 243507, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return b
        },
        useLinkStatus: function() {
            return E
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let o = e.r(744066),
        s = e.r(14666),
        a = o._(e.r(499531)),
        l = e.r(348220),
        u = e.r(550909),
        c = e.r(973277),
        h = e.r(359682),
        f = e.r(520009);
    e.r(154475);
    let p = e.r(335055),
        d = e.r(633781),
        g = e.r(820936),
        m = e.r(562715);

    function b(t) {
        var r, n;
        let i, o, b, [E, v] = (0, a.useOptimistic)(d.IDLE_LINK_STATUS),
            T = (0, a.useRef)(null),
            {
                href: P,
                as: H,
                children: S,
                prefetch: L = null,
                passHref: B,
                replace: w,
                shallow: A,
                scroll: C,
                onClick: M,
                onMouseEnter: I,
                onTouchStart: O,
                legacyBehavior: _ = !1,
                onNavigate: R,
                transitionTypes: k,
                ref: N,
                unstable_dynamicOnHover: F,
                ...D
            } = t;
        i = S, _ && ("string" == typeof i || "number" == typeof i) && (i = (0, s.jsx)("a", {
            children: i
        }));
        let x = a.default.useContext(u.AppRouterContext),
            U = !1 !== L,
            G = !1 !== L ? null === (n = L) || "auto" === n ? m.FetchStrategy.PPR : m.FetchStrategy.Full : m.FetchStrategy.PPR,
            K = "string" == typeof(r = H || P) ? r : (0, l.formatUrl)(r);
        if (_) {
            if (i?.$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: !1,
                configurable: !0
            });
            o = a.default.Children.only(i)
        }
        let V = _ ? o && "object" == typeof o && o.ref : N,
            W = a.default.useCallback(e => (null !== x && (T.current = (0, d.mountLinkInstance)(e, K, x, G, U, v)), () => {
                T.current && ((0, d.unmountLinkForCurrentNavigation)(T.current), T.current = null), (0, d.unmountPrefetchableInstance)(e)
            }), [U, K, x, G, v]),
            j = {
                ref: (0, c.useMergedRef)(W, V),
                onClick(t) {
                    _ || "function" != typeof M || M(t), _ && o.props && "function" == typeof o.props.onClick && o.props.onClick(t), !x || t.defaultPrevented || function(t, r, n, i, o, s, l) {
                        if ("u" > typeof window) {
                            let u, {
                                nodeName: c
                            } = t.currentTarget;
                            if ("A" === c.toUpperCase() && ((u = t.currentTarget.getAttribute("target")) && "_self" !== u || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
                            if (!(0, g.isLocalURL)(r)) {
                                i && (t.preventDefault(), location.replace(r));
                                return
                            }
                            if (t.preventDefault(), s) {
                                let e = !1;
                                if (s({
                                        preventDefault: () => {
                                            e = !0
                                        }
                                    }), e) return
                            }
                            let {
                                dispatchNavigateAction: h
                            } = e.r(819114);
                            a.default.startTransition(() => {
                                h(r, i ? "replace" : "push", !1 === o ? p.ScrollBehavior.NoScroll : p.ScrollBehavior.Default, n.current, l)
                            })
                        }
                    }(t, K, T, w, C, R, k)
                },
                onMouseEnter(e) {
                    _ || "function" != typeof I || I(e), _ && o.props && "function" == typeof o.props.onMouseEnter && o.props.onMouseEnter(e), x && U && (0, d.onNavigationIntent)(e.currentTarget, !0 === F)
                },
                onTouchStart: function(e) {
                    _ || "function" != typeof O || O(e), _ && o.props && "function" == typeof o.props.onTouchStart && o.props.onTouchStart(e), x && U && (0, d.onNavigationIntent)(e.currentTarget, !0 === F)
                }
            };
        return (0, h.isAbsoluteUrl)(K) ? j.href = K : _ && !B && ("a" !== o.type || "href" in o.props) || (j.href = (0, f.addBasePath)(K)), b = _ ? a.default.cloneElement(o, j) : (0, s.jsx)("a", {
            ...D,
            ...j,
            children: i
        }), (0, s.jsx)(y.Provider, {
            value: E,
            children: b
        })
    }
    e.r(722693);
    let y = (0, a.createContext)(d.IDLE_LINK_STATUS),
        E = () => (0, a.useContext)(y);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 445734, e => {
    "use strict";
    var t = e.i(913425),
        r = e.i(499531),
        n = e.i(833200),
        i = r["use".trim()],
        o = e.i(203217);

    function s(e) {
        let t;
        return ("object" == typeof e ? null == e.host && null == e.hostname : !/^[a-z]+:/i.test(e)) && (null == (t = "object" == typeof e ? e.pathname : e) || !!t.startsWith("/"))
    }

    function a(e, t) {
        return e.replace(RegExp(`^${t}`), "") || "/"
    }

    function l(e, t) {
        return t === e || t.startsWith(`${e}/`)
    }

    function u(e, t, r) {
        return "string" == typeof e ? e : e[t] || r
    }

    function c(e) {
        let t = function() {
                try {
                    return "true" === o.default.env._next_intl_trailing_slash
                } catch {
                    return !1
                }
            }(),
            [r, ...n] = e.split("#"),
            i = n.join("#"),
            s = r;
        if ("/" !== s) {
            let e = s.endsWith("/");
            t && !e ? s += "/" : !t && e && (s = s.slice(0, -1))
        }
        return i && (s += "#" + i), s
    }

    function h(e, t) {
        let r, n = c(e),
            i = c(t);
        return (r = n.replace(/\/\[\[(\.\.\.[^\]]+)\]\]/g, "(?:/(.*))?").replace(/\[\[(\.\.\.[^\]]+)\]\]/g, "(?:/(.*))?").replace(/\[(\.\.\.[^\]]+)\]/g, "(.+)").replace(/\[([^\]]+)\]/g, "([^/]+)"), RegExp(`^${r}$`)).test(i)
    }

    function f(e, t) {
        return "never" !== t.mode && t.prefixes?.[e] || "/" + e
    }

    function p(e) {
        return e.includes("[[...")
    }

    function d(e) {
        return e.includes("[...")
    }

    function g(e) {
        return e.includes("[")
    }

    function m(e, t) {
        let r = e.split("/"),
            n = t.split("/"),
            i = Math.max(r.length, n.length);
        for (let e = 0; e < i; e++) {
            let t = r[e],
                i = n[e];
            if (!t && i) return -1;
            if (t && !i) return 1;
            if (t || i) {
                if (!g(t) && g(i)) return -1;
                if (g(t) && !g(i)) return 1;
                if (!d(t) && d(i)) return -1;
                if (d(t) && !d(i)) return 1;
                if (!p(t) && p(i)) return -1;
                if (p(t) && !p(i)) return 1
            }
        }
        return 0
    }
    var b = e.i(243507);

    function y(e) {
        let t = new URLSearchParams;
        for (let [r, n] of Object.entries(e)) Array.isArray(n) ? n.forEach(e => {
            t.append(r, String(e))
        }) : t.set(r, String(n));
        return "?" + t.toString()
    }

    function E(e, t, r, n) {
        if (!e || n === r || null == n || !t) return;
        let i = function(e, t = window.location.pathname) {
                return "/" === e ? t : t.replace(e, "")
            }(t),
            {
                name: o,
                ...s
            } = e;
        s.path || (s.path = "" !== i ? i : "/");
        let a = `${o}=${n};`;
        for (let [e, t] of Object.entries(s)) a += `${"maxAge"===e?"max-age":e}`, "boolean" != typeof t && (a += "=" + t), a += ";";
        document.cookie = a
    }
    var v = e.i(14666),
        T = (0, r.forwardRef)(function({
            href: e,
            locale: r,
            localeCookie: i,
            onClick: o,
            prefetch: s,
            ...a
        }, l) {
            let u = (0, n.useLocale)(),
                c = null != r && r !== u,
                h = (0, t.usePathname)();
            return c && (s = !1), (0, v.jsx)(b.default, {
                ref: l,
                href: e,
                hrefLang: c ? r : void 0,
                onClick: function(e) {
                    E(i, h, u, r), o && o(e)
                },
                prefetch: s,
                ...a
            })
        });
    e.s(["createNavigation", 0, function(e) {
        let {
            Link: o,
            config: p,
            getPathname: d,
            ...g
        } = function(e, n) {
            var o, a, l;
            let h = {
                    ...o = n || {},
                    localePrefix: "object" == typeof(l = o.localePrefix) ? l : {
                        mode: l || "always"
                    },
                    localeCookie: !!((a = o.localeCookie) ?? 1) && {
                        name: "NEXT_LOCALE",
                        sameSite: "lax",
                        ..."object" == typeof a && a
                    },
                    localeDetection: o.localeDetection ?? !0,
                    alternateLinks: o.alternateLinks ?? !0
                },
                p = h.pathnames,
                d = (0, r.forwardRef)(function({
                    href: t,
                    locale: r,
                    ...n
                }, o) {
                    let a, l;
                    "object" == typeof t ? (a = t.pathname, l = t.params) : a = t;
                    let u = s(t),
                        c = e(),
                        f = "function" == typeof c.then ? i(c) : c,
                        d = u ? g({
                            locale: r || f,
                            href: null == p ? a : {
                                pathname: a,
                                params: l
                            },
                            forcePrefix: null != r || void 0
                        }) : a;
                    return (0, v.jsx)(T, {
                        ref: o,
                        href: "object" == typeof t ? {
                            ...t,
                            pathname: d
                        } : d,
                        locale: r,
                        localeCookie: h.localeCookie,
                        ...n
                    })
                });

            function g(e) {
                let t, {
                    forcePrefix: r,
                    href: n,
                    locale: i
                } = e;
                return null == p ? "object" == typeof n ? (t = n.pathname, n.query && (t += y(n.query))) : t = n : t = function({
                        pathname: e,
                        locale: t,
                        params: r,
                        pathnames: n,
                        query: i
                    }) {
                        function o(e) {
                            let o, s = n[e];
                            return s ? (o = u(s, t, e), r && Object.entries(r).forEach(([e, t]) => {
                                let r, n;
                                Array.isArray(t) ? (r = `(\\[)?\\[...${e}\\](\\])?`, n = t.map(e => String(e)).join("/")) : (r = `\\[${e}\\]`, n = String(t)), o = o.replace(RegExp(r, "g"), n)
                            }), o = new URL(o = o.replace(/\[\[\.\.\..+\]\]/g, ""), "http://l").pathname) : o = e, o = c(o), i && (o += y(i)), o
                        }
                        if ("string" == typeof e) return o(e);
                        {
                            let {
                                pathname: t,
                                ...r
                            } = e;
                            return {
                                ...r,
                                pathname: o(t)
                            }
                        }
                    }({
                        locale: i,
                        ..."string" == typeof n ? {
                            pathname: n
                        } : n,
                        pathnames: h.pathnames
                    }),
                    function(e, t, r, n) {
                        var i, o;
                        let a, l, {
                            mode: u
                        } = r.localePrefix;
                        if (void 0 !== n) a = n;
                        else if (s(e)) {
                            let e = r.domains?.find(e => e.locales.includes(t)),
                                n = e?.localePrefix || u;
                            "always" === n ? a = !0 : "as-needed" === n && (a = e ? t !== e.defaultLocale : t !== r.defaultLocale)
                        }
                        return a ? (i = f(t, r.localePrefix), o = e, l = i, /^\/(\?.*)?$/.test(o) && (o = o.slice(1)), l += o) : e
                    }(t, i, h, r)
            }

            function m(e) {
                return function(t, ...r) {
                    return e(g(t), ...r)
                }
            }
            return {
                config: h,
                Link: d,
                redirect: m(t.redirect),
                permanentRedirect: m(t.permanentRedirect),
                getPathname: g
            }
        }(n.useLocale, e);
        return {
            ...g,
            Link: o,
            usePathname: function() {
                let e, i, o = (e = (0, t.usePathname)(), i = (0, n.useLocale)(), (0, r.useMemo)(() => {
                        if (!e) return e;
                        let t = e,
                            r = f(i, p.localePrefix);
                        if (l(r, e)) t = a(e, r);
                        else if ("never" !== p.localePrefix.mode && p.localePrefix.prefixes) {
                            let r = "/" + i;
                            l(r, e) && (t = a(e, r))
                        }
                        return t
                    }, [p.localePrefix, i, e])),
                    s = (0, n.useLocale)();
                return (0, r.useMemo)(() => o && p.pathnames ? function(e, t, r) {
                    let n = Object.keys(r).sort(m),
                        i = decodeURI(t);
                    for (let t of n) {
                        let n = r[t];
                        if ("string" == typeof n) {
                            if (h(n, i)) return t
                        } else if (h(u(n, e, t), i)) return t
                    }
                    return t
                }(s, o, p.pathnames) : o, [s, o])
            },
            useRouter: function() {
                let e = (0, t.useRouter)(),
                    i = (0, n.useLocale)(),
                    o = (0, t.usePathname)();
                return (0, r.useMemo)(() => {
                    function t(e) {
                        return function(t, r) {
                            let {
                                locale: n,
                                ...s
                            } = r || {}, a = [d({
                                href: t,
                                locale: n || i,
                                forcePrefix: null != n || void 0
                            })];
                            Object.keys(s).length > 0 && a.push(s), E(p.localeCookie, o, i, n), e(...a)
                        }
                    }
                    return {
                        ...e,
                        push: t(e.push),
                        replace: t(e.replace),
                        prefetch: t(e.prefetch)
                    }
                }, [i, o, e])
            },
            getPathname: d
        }
    }], 445734)
}, 476090, e => {
    "use strict";
    e.s(["chain", 0, function(...e) {
        return (...t) => {
            for (let r of e) "function" == typeof r && r(...t)
        }
    }])
}, 429305, 185559, 726103, 823512, 402801, e => {
    "use strict";
    let t;
    var r = e.i(476090),
        n = e.i(499531);
    let i = "u" > typeof document ? n.default.useLayoutEffect : () => {};
    e.s(["useLayoutEffect", 0, i], 185559), e.i(203217);
    let o = {
            prefix: String(Math.round(1e10 * Math.random())),
            current: 0
        },
        s = n.default.createContext(o),
        a = n.default.createContext(!1);
    "u" > typeof window && window.document && window.document.createElement;
    let l = new WeakMap,
        u = "function" == typeof n.default.useId ? function(e) {
            let t = n.default.useId(),
                [r] = (0, n.useState)(p()),
                i = r ? "react-aria" : `react-aria${o.prefix}`;
            return e || `${i}-${t}`
        } : function(e) {
            let t = (0, n.useContext)(s),
                r = function(e = !1) {
                    let t = (0, n.useContext)(s),
                        r = (0, n.useRef)(null);
                    if (null === r.current && !e) {
                        let e = n.default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentOwner?.current;
                        if (e) {
                            let r = l.get(e);
                            null == r ? l.set(e, {
                                id: t.current,
                                state: e.memoizedState
                            }) : e.memoizedState !== r.state && (t.current = r.id, l.delete(e))
                        }
                        r.current = ++t.current
                    }
                    return r.current
                }(!!e),
                i = `react-aria${t.prefix}`;
            return e || `${i}-${r}`
        };

    function c() {
        return !1
    }

    function h() {
        return !0
    }

    function f(e) {
        return () => {}
    }

    function p() {
        return "function" == typeof n.default.useSyncExternalStore ? n.default.useSyncExternalStore(f, c, h) : (0, n.useContext)(a)
    }
    e.s(["useIsSSR", 0, p, "useSSRSafeId", 0, u], 726103);
    let d = !!("u" > typeof window && window.document && window.document.createElement),
        g = new Map;

    function m(e) {
        let [r, o] = (0, n.useState)(e), s = (0, n.useRef)(null), a = u(r), l = (0, n.useRef)(null);
        if (t && t.register(l, a), d) {
            let e = g.get(a);
            e && !e.includes(s) ? e.push(s) : g.set(a, [s])
        }
        return i(() => () => {
            t && t.unregister(l), g.delete(a)
        }, [a]), (0, n.useEffect)(() => {
            let e = s.current;
            return e && o(e), () => {
                e && (s.current = null)
            }
        }), a
    }

    function b(e, t) {
        if (e === t) return e;
        let r = g.get(e);
        if (r) return r.forEach(e => e.current = t), t;
        let n = g.get(t);
        return n ? (n.forEach(t => t.current = e), e) : t
    }

    function y(...e) {
        return 1 === e.length && e[0] ? e[0] : t => {
            let r = !1,
                n = e.map(e => {
                    let n = E(e, t);
                    return r ||= "function" == typeof n, n
                });
            if (r) return () => {
                n.forEach((t, r) => {
                    "function" == typeof t ? t() : E(e[r], null)
                })
            }
        }
    }

    function E(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }
    "u" > typeof FinalizationRegistry && (t = new FinalizationRegistry(e => {
        g.delete(e)
    })), e.s(["mergeIds", 0, b, "useId", 0, m, "useSlotId", 0, function(e = []) {
        let t = m(),
            [r, o] = function(e) {
                let [t, r] = (0, n.useState)(e), o = (0, n.useRef)(t), s = (0, n.useRef)(null), a = (0, n.useRef)(() => {
                    if (!s.current) return;
                    let e = s.current.next();
                    if (e.done) {
                        s.current = null;
                        return
                    }
                    o.current === e.value ? a.current() : r(e.value)
                });
                return i(() => {
                    o.current = t, s.current && a.current()
                }), [t, (0, n.useCallback)(e => {
                    s.current = e(o.current), a.current()
                }, [a])]
            }(t),
            s = (0, n.useCallback)(() => {
                o(function*() {
                    yield t, yield document.getElementById(t) ? t : void 0
                })
            }, [t, o]);
        return i(s, [t, s, ...e]), r
    }], 823512), e.s(["mergeRefs", 0, y], 402801);
    let v = function() {
        for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)(e = arguments[r]) && (t = function e(t) {
            var r, n, i = "";
            if ("string" == typeof t || "number" == typeof t) i += t;
            else if ("object" == typeof t)
                if (Array.isArray(t)) {
                    var o = t.length;
                    for (r = 0; r < o; r++) t[r] && (n = e(t[r])) && (i && (i += " "), i += n)
                } else
                    for (n in t) t[n] && (i && (i += " "), i += n);
            return i
        }(e)) && (n && (n += " "), n += t);
        return n
    };
    e.s(["mergeProps", 0, function(...e) {
        let t = {
            ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
            let i = e[n];
            for (let e in i) {
                let n = t[e],
                    o = i[e];
                "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? t[e] = (0, r.chain)(n, o) : ("className" === e || "UNSAFE_className" === e) && "string" == typeof n && "string" == typeof o ? t[e] = v(n, o) : "id" === e && n && o ? t.id = b(n, o) : "ref" === e && n && o ? t.ref = y(n, o) : t[e] = void 0 !== o ? o : n
            }
        }
        return t
    }], 429305)
}, 838031, e => {
    "use strict";
    var t = e.i(499531);
    e.s(["useObjectRef", 0, function(e) {
        let r = (0, t.useRef)(null),
            n = (0, t.useRef)(void 0),
            i = (0, t.useCallback)(t => {
                if ("function" == typeof e) {
                    let r = e(t);
                    return () => {
                        "function" == typeof r ? r() : e(null)
                    }
                }
                if (e) return e.current = t, () => {
                    e.current = null
                }
            }, [e]);
        return (0, t.useMemo)(() => ({
            get current() {
                return r.current
            },
            set current(value) {
                r.current = value, n.current && (n.current(), n.current = void 0), null != value && (n.current = i(value))
            }
        }), [i])
    }])
}, 679933, e => {
    "use strict";
    let t = new Set(["id"]),
        r = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        n = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        i = new Set(["dir", "lang", "hidden", "inert", "translate"]),
        o = new Set(["onClick", "onAuxClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onGotPointerCapture", "onLostPointerCapture", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onTransitionStart"]),
        s = /^(data-.*)$/;
    e.s(["filterDOMProps", 0, function(e, a = {}) {
        let {
            labelable: l,
            isLink: u,
            global: c,
            events: h = c,
            propNames: f
        } = a, p = {};
        for (let a in e) Object.prototype.hasOwnProperty.call(e, a) && (t.has(a) || l && r.has(a) || u && n.has(a) || c && i.has(a) || h && (o.has(a) || a.endsWith("Capture") && o.has(a.slice(0, -7))) || f?.has(a) || s.test(a)) && (p[a] = e[a]);
        return p
    }])
}, 259457, e => {
    "use strict";
    let t = null;
    e.s(["focusWithoutScrolling", 0, function(e) {
        if (function() {
                if (null == t) {
                    t = !1;
                    try {
                        document.createElement("div").focus({
                            get preventScroll() {
                                return t = !0, !0
                            }
                        })
                    } catch {}
                }
                return t
            }()) e.focus({
            preventScroll: !0
        });
        else {
            let t = function(e) {
                let t = e.parentNode,
                    r = [],
                    n = document.scrollingElement || document.documentElement;
                for (; t instanceof HTMLElement && t !== n;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && r.push({
                    element: t,
                    scrollTop: t.scrollTop,
                    scrollLeft: t.scrollLeft
                }), t = t.parentNode;
                return n instanceof HTMLElement && r.push({
                    element: n,
                    scrollTop: n.scrollTop,
                    scrollLeft: n.scrollLeft
                }), r
            }(e);
            e.focus(),
                function(e) {
                    for (let {
                            element: t,
                            scrollTop: r,
                            scrollLeft: n
                        }
                        of e) t.scrollTop = r, t.scrollLeft = n
                }(t)
        }
    }])
}, 776050, 575414, 950011, e => {
    "use strict";
    let t = e => e?.ownerDocument ?? document,
        r = e => e && "window" in e && e.window === e ? e : t(e).defaultView || window;

    function n(e) {
        return null !== e && "object" == typeof e && "nodeType" in e && "number" == typeof e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e
    }

    function i() {
        return !1
    }
    e.s(["getOwnerDocument", 0, t, "getOwnerWindow", 0, r, "isShadowRoot", 0, n], 575414), e.s(["shadowDOM", 0, i], 950011), e.s(["getActiveElement", 0, (e = document) => {
        if (!i()) return e.activeElement;
        let t = e.activeElement;
        for (; t && "shadowRoot" in t && t.shadowRoot?.activeElement;) t = t.shadowRoot.activeElement;
        return t
    }, "getEventTarget", 0, function(e) {
        if (i() && e.target instanceof Element && e.target.shadowRoot) {
            if ("composedPath" in e) return e.composedPath()[0] ?? null;
            else if ("composedPath" in e.nativeEvent) return e.nativeEvent.composedPath()[0] ?? null
        }
        return e.target
    }, "isFocusWithin", 0, function(e) {
        if (!e) return !1;
        let t = e.getRootNode(),
            n = r(e);
        if (!(t instanceof n.Document || t instanceof n.ShadowRoot)) return !1;
        let i = t.activeElement;
        return null != i && e.contains(i)
    }, "nodeContains", 0, function(e, t) {
        if (!i()) return !!t && !!e && e.contains(t);
        if (!e || !t) return !1;
        let r = t;
        for (; null !== r;) {
            if (r === e) return !0;
            r = "SLOT" === r.tagName && r.assignedSlot ? r.assignedSlot.parentNode : n(r) ? r.host : r.parentNode
        }
        return !1
    }], 776050)
}, 242637, 424690, e => {
    "use strict";
    var t = e.i(259457),
        r = e.i(776050),
        n = e.i(575414);
    let i = "u" > typeof Element && "checkVisibility" in Element.prototype;

    function o(e, t) {
        return i ? e.checkVisibility({
            visibilityProperty: !0
        }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && function(e) {
            let t = (0, n.getOwnerWindow)(e);
            if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
            let {
                display: r,
                visibility: i
            } = e.style, o = "none" !== r && "hidden" !== i && "collapse" !== i;
            if (o) {
                let {
                    getComputedStyle: t
                } = (0, n.getOwnerWindow)(e), {
                    display: r,
                    visibility: i
                } = t(e);
                o = "none" !== r && "hidden" !== i && "collapse" !== i
            }
            return o
        }(e) && !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open")) && (!e.parentElement || o(e.parentElement, e))
    }
    let s = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
        a = s.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
    s.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
    let l = s.join(':not([hidden]):not([tabindex="-1"]),');

    function u(e, t) {
        return e.matches(a) && !c(e) && (t?.skipVisibilityCheck || o(e))
    }

    function c(e) {
        let t = e;
        for (; null != t;) {
            if (t instanceof(0, n.getOwnerWindow)(t).HTMLElement && t.inert) return !0;
            t = t.parentElement
        }
        return !1
    }
    e.s(["isFocusable", 0, u, "isTabbable", 0, function(e) {
        return e.matches(l) && o(e) && !c(e)
    }], 424690);
    var h = e.i(185559),
        f = e.i(499531);

    function p(e) {
        return e.nativeEvent = e, e.isDefaultPrevented = () => e.defaultPrevented, e.isPropagationStopped = () => e.cancelBubble, e.persist = () => {}, e
    }
    let d = !1;
    e.s(["createSyntheticEvent", 0, p, "ignoreFocusEvent", () => d, "preventFocus", 0, function(e) {
        for (; e && !u(e, {
                skipVisibilityCheck: !0
            });) e = e.parentElement;
        let i = (0, n.getOwnerWindow)(e),
            o = i.document.activeElement;
        if (!o || o === e) return;
        d = !0;
        let s = !1,
            a = e => {
                ((0, r.getEventTarget)(e) === o || s) && e.stopImmediatePropagation()
            },
            l = n => {
                ((0, r.getEventTarget)(n) === o || s) && (n.stopImmediatePropagation(), e || s || (s = !0, (0, t.focusWithoutScrolling)(o), f()))
            },
            c = t => {
                ((0, r.getEventTarget)(t) === e || s) && t.stopImmediatePropagation()
            },
            h = n => {
                ((0, r.getEventTarget)(n) === e || s) && (n.stopImmediatePropagation(), s || (s = !0, (0, t.focusWithoutScrolling)(o), f()))
            };
        i.addEventListener("blur", a, !0), i.addEventListener("focusout", l, !0), i.addEventListener("focusin", h, !0), i.addEventListener("focus", c, !0);
        let f = () => {
                cancelAnimationFrame(p), i.removeEventListener("blur", a, !0), i.removeEventListener("focusout", l, !0), i.removeEventListener("focusin", h, !0), i.removeEventListener("focus", c, !0), d = !1, s = !1
            },
            p = requestAnimationFrame(f);
        return f
    }, "setEventTarget", 0, function(e, t) {
        Object.defineProperty(e, "target", {
            value: t
        }), Object.defineProperty(e, "currentTarget", {
            value: t
        })
    }, "useSyntheticBlurEvent", 0, function(e) {
        let t = (0, f.useRef)({
            isFocused: !1,
            observer: null
        });
        return (0, h.useLayoutEffect)(() => {
            let e = t.current;
            return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
            }
        }, []), (0, f.useCallback)(n => {
            let i = (0, r.getEventTarget)(n);
            (i instanceof HTMLButtonElement || i instanceof HTMLInputElement || i instanceof HTMLTextAreaElement || i instanceof HTMLSelectElement) && (t.current.isFocused = !0, i.addEventListener("focusout", r => {
                if (t.current.isFocused = !1, i.disabled) {
                    let t = p(r);
                    e?.(t)
                }
                t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
            }, {
                once: !0
            }), t.current.observer = new MutationObserver(() => {
                if (t.current.isFocused && i.disabled) {
                    t.current.observer?.disconnect();
                    let e = i === (0, r.getActiveElement)() ? null : (0, r.getActiveElement)();
                    i.dispatchEvent(new FocusEvent("blur", {
                        relatedTarget: e
                    })), i.dispatchEvent(new FocusEvent("focusout", {
                        bubbles: !0,
                        relatedTarget: e
                    }))
                }
            }), t.current.observer.observe(i, {
                attributes: !0,
                attributeFilter: ["disabled"]
            }))
        }, [e])
    }], 242637)
}, 904960, e => {
    "use strict";

    function t(e) {
        if ("u" < typeof window || null == window.navigator) return !1;
        let t = window.navigator.userAgentData?.brands;
        return Array.isArray(t) && t.some(t => e.test(t.brand)) || e.test(window.navigator.userAgent)
    }

    function r(e) {
        return "u" > typeof window && null != window.navigator && e.test(window.navigator.userAgentData?.platform || window.navigator.platform)
    }

    function n(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
    }
    let i = n(function() {
            return r(/^Mac/i)
        }),
        o = n(function() {
            return r(/^iPhone/i)
        }),
        s = n(function() {
            return r(/^iPad/i) || i() && navigator.maxTouchPoints > 1
        }),
        a = n(function() {
            return o() || s()
        }),
        l = n(function() {
            return i() || a()
        }),
        u = n(function() {
            return t(/AppleWebKit/i) && !c()
        }),
        c = n(function() {
            return t(/Chrome/i)
        }),
        h = n(function() {
            return t(/Android/i)
        }),
        f = n(function() {
            return t(/Firefox/i)
        });
    e.s(["isAndroid", 0, h, "isAppleDevice", 0, l, "isChrome", 0, c, "isFirefox", 0, f, "isIOS", 0, a, "isIPad", 0, s, "isMac", 0, i, "isWebKit", 0, u])
}, 662764, e => {
    "use strict";
    var t = e.i(904960);
    e.s(["isVirtualClick", 0, function(e) {
        return "" === e.pointerType && !!e.isTrusted || ((0, t.isAndroid)() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
    }, "isVirtualPointerEvent", 0, function(e) {
        return !(0, t.isAndroid)() && 0 === e.width && 0 === e.height || 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType
    }])
}, 97584, e => {
    "use strict";
    var t = e.i(259457),
        r = e.i(904960),
        n = e.i(499531);
    let i = (0, n.createContext)({
        isNative: !0,
        open: function(e, t) {
            if (e instanceof HTMLAnchorElement) s(e, t);
            else if (e.hasAttribute("data-href")) {
                let r = document.createElement("a");
                r.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (r.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (r.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (r.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (r.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (r.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(r), s(r, t), e.removeChild(r)
            }
        },
        useHref: e => e
    });

    function o() {
        return (0, n.useContext)(i)
    }

    function s(e, n, i = !0) {
        let {
            metaKey: o,
            ctrlKey: a,
            altKey: l,
            shiftKey: u
        } = n;
        (0, r.isFirefox)() && window.event?.type?.startsWith("key") && "_blank" === e.target && ((0, r.isMac)() ? o = !0 : a = !0);
        let c = (0, r.isWebKit)() && (0, r.isMac)() && !(0, r.isIPad)() && 1 ? new KeyboardEvent("keydown", {
            keyIdentifier: "Enter",
            metaKey: o,
            ctrlKey: a,
            altKey: l,
            shiftKey: u
        }) : new MouseEvent("click", {
            metaKey: o,
            ctrlKey: a,
            altKey: l,
            shiftKey: u,
            detail: 1,
            bubbles: !0,
            cancelable: !0
        });
        s.isOpening = i, (0, t.focusWithoutScrolling)(e), e.dispatchEvent(c), s.isOpening = !1
    }
    s.isOpening = !1, e.s(["handleLinkClick", 0, function(e, t, r, n) {
        var i;
        let o;
        !(!t.isNative && e.currentTarget instanceof HTMLAnchorElement) || !e.currentTarget.href || e.isDefaultPrevented() || (i = e.currentTarget, (o = i.getAttribute("target")) && "_self" !== o || i.origin !== location.origin || i.hasAttribute("download") || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) || !r || (e.preventDefault(), t.open(e.currentTarget, e, r, n))
    }, "openLink", 0, s, "useLinkProps", 0, function(e) {
        let t = o().useHref(e?.href ?? ""),
            r = {};
        if (e)
            for (let n of ["href", "target", "rel", "download", "ping", "referrerPolicy"]) n in e && (r[n] = "href" === n ? t : e[n]);
        return r
    }, "useRouter", 0, o])
}, 816862, e => {
    "use strict";
    let t;
    var r = e.i(776050),
        n = e.i(575414),
        i = e.i(242637),
        o = e.i(904960),
        s = e.i(662764),
        a = e.i(97584),
        l = e.i(726103),
        u = e.i(499531);
    let c = null,
        h = "keyboard",
        f = new Set,
        p = new Map,
        d = !1,
        g = !1,
        m = {
            Tab: !0,
            Escape: !0
        };

    function b(e, t) {
        for (let r of f) r(e, t)
    }

    function y(e) {
        d = !0, a.openLink.isOpening || e.metaKey || !(0, o.isMac)() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key || (c = "keyboard", h = "keyboard", b("keyboard", e))
    }

    function E(e) {
        c = "pointer", h = "pointerType" in e ? e.pointerType : "mouse", ("mousedown" === e.type || "pointerdown" === e.type) && (d = !0, b("pointer", e))
    }

    function v(e) {
        !a.openLink.isOpening && (0, s.isVirtualClick)(e) && (d = !0, c = "virtual", h = "virtual")
    }

    function T(e) {
        let t = (0, n.getOwnerWindow)((0, r.getEventTarget)(e)),
            o = (0, n.getOwnerDocument)((0, r.getEventTarget)(e));
        (0, r.getEventTarget)(e) !== t && (0, r.getEventTarget)(e) !== o && !i.ignoreFocusEvent && e.isTrusted && (d || g || (c = "virtual", h = "virtual", b("virtual", e)), d = !1, g = !1)
    }

    function P() {
        i.ignoreFocusEvent || (d = !1, g = !0)
    }

    function H(e) {
        if ("u" < typeof window || "u" < typeof document) return;
        let t = (0, n.getOwnerWindow)(e),
            r = (0, n.getOwnerDocument)(e);
        if (p.get(t)) return;
        let i = t.HTMLElement.prototype.focus;
        Reflect.defineProperty(t.HTMLElement.prototype, "focus", {
            configurable: !0,
            writable: !0,
            value: function() {
                d = !0, i.apply(this, arguments)
            }
        }), r.addEventListener("keydown", y, !0), r.addEventListener("keyup", y, !0), r.addEventListener("click", v, !0), t.addEventListener("focus", T, !0), t.addEventListener("blur", P, !1), "u" > typeof PointerEvent && (r.addEventListener("pointerdown", E, !0), r.addEventListener("pointermove", E, !0), r.addEventListener("pointerup", E, !0)), t.addEventListener("beforeunload", () => {
            S(e)
        }, {
            once: !0
        }), p.set(t, {
            focus: i
        })
    }
    let S = (e, t) => {
        let r = (0, n.getOwnerWindow)(e),
            i = (0, n.getOwnerDocument)(e);
        t && i.removeEventListener("DOMContentLoaded", t), p.has(r) && (Reflect.defineProperty(r.HTMLElement.prototype, "focus", {
            configurable: !0,
            writable: !0,
            value: p.get(r).focus
        }), i.removeEventListener("keydown", y, !0), i.removeEventListener("keyup", y, !0), i.removeEventListener("click", v, !0), r.removeEventListener("focus", T, !0), r.removeEventListener("blur", P, !1), "u" > typeof PointerEvent && (i.removeEventListener("pointerdown", E, !0), i.removeEventListener("pointermove", E, !0), i.removeEventListener("pointerup", E, !0)), p.delete(r))
    };

    function L() {
        return "pointer" !== c
    }
    "u" > typeof document && ("loading" !== (t = (0, n.getOwnerDocument)(void 0)).readyState ? H(void 0) : t.addEventListener("DOMContentLoaded", () => {
        H(void 0)
    }));
    let B = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
    e.s(["getInteractionModality", 0, function() {
        return c
    }, "getPointerType", 0, function() {
        return h
    }, "isFocusVisible", 0, L, "setInteractionModality", 0, function(e) {
        c = e, h = "pointer" === e ? "mouse" : e, b(e, null)
    }, "useFocusVisibleListener", 0, function(e, t, i) {
        H(), (0, u.useEffect)(() => {
            if (i?.enabled === !1) return;
            let t = (t, o) => {
                var s;
                let a, l, u, c, h, f, p, d;
                s = !!i?.isTextInput, a = o ? (0, r.getEventTarget)(o) : void 0, l = (0, n.getOwnerDocument)(a), c = void 0 !== (u = (0, n.getOwnerWindow)(a)) ? u.HTMLInputElement : HTMLInputElement, h = void 0 !== u ? u.HTMLTextAreaElement : HTMLTextAreaElement, f = void 0 !== u ? u.HTMLElement : HTMLElement, p = void 0 !== u ? u.KeyboardEvent : KeyboardEvent, d = (0, r.getActiveElement)(l), (s = s || d instanceof c && !B.has(d.type) || d instanceof h || d instanceof f && d.isContentEditable) && "keyboard" === t && o instanceof p && !m[o.key] || e(L())
            };
            return f.add(t), () => {
                f.delete(t)
            }
        }, t)
    }, "useInteractionModality", 0, function() {
        H();
        let [e, t] = (0, u.useState)(c);
        return (0, u.useEffect)(() => {
            let e = () => {
                t(c)
            };
            return f.add(e), () => {
                f.delete(e)
            }
        }, []), (0, l.useIsSSR)() ? null : e
    }])
}, 800278, e => {
    "use strict";
    var t = e.i(776050);
    let r = new Map,
        n = new Set;

    function i() {
        if ("u" < typeof window) return;

        function e(e) {
            return "propertyName" in e
        }
        let i = o => {
            let s = (0, t.getEventTarget)(o);
            if (!e(o) || !s) return;
            let a = r.get(s);
            if (a && (a.delete(o.propertyName), 0 === a.size && (s.removeEventListener("transitioncancel", i), r.delete(s)), 0 === r.size)) {
                for (let e of n) e();
                n.clear()
            }
        };
        document.body.addEventListener("transitionrun", n => {
            let o = (0, t.getEventTarget)(n);
            if (!e(n) || !o) return;
            let s = r.get(o);
            s || (s = new Set, r.set(o, s), o.addEventListener("transitioncancel", i, {
                once: !0
            })), s.add(n.propertyName)
        }), document.body.addEventListener("transitionend", i)
    }
    "u" > typeof document && ("loading" !== document.readyState ? i() : document.addEventListener("DOMContentLoaded", i)), e.s(["runAfterTransition", 0, function(e) {
        requestAnimationFrame(() => {
            for (let [e] of r) "isConnected" in e && !e.isConnected && r.delete(e);
            0 === r.size ? e() : n.add(e)
        })
    }])
}, 799163, e => {
    "use strict";
    var t = e.i(259457),
        r = e.i(776050),
        n = e.i(816862),
        i = e.i(575414),
        o = e.i(800278);
    e.s(["focusSafely", 0, function(e) {
        if (!e.isConnected) return;
        let s = (0, i.getOwnerDocument)(e);
        if ("virtual" === (0, n.getInteractionModality)()) {
            let n = (0, r.getActiveElement)(s);
            (0, o.runAfterTransition)(() => {
                let i = (0, r.getActiveElement)(s);
                (i === n || i === s.body) && e.isConnected && (0, t.focusWithoutScrolling)(e)
            })
        } else(0, t.focusWithoutScrolling)(e)
    }])
}, 153393, e => {
    "use strict";
    var t = e.i(776050),
        r = e.i(575414),
        n = e.i(242637),
        i = e.i(499531);
    e.s(["useFocus", 0, function(e) {
        let {
            isDisabled: o,
            onFocus: s,
            onBlur: a,
            onFocusChange: l
        } = e, u = (0, i.useCallback)(e => {
            if ((0, t.getEventTarget)(e) === e.currentTarget) return a && a(e), l && l(!1), !0
        }, [a, l]), c = (0, n.useSyntheticBlurEvent)(u), h = (0, i.useCallback)(e => {
            let n = (0, t.getEventTarget)(e),
                i = (0, r.getOwnerDocument)(n),
                o = i ? (0, t.getActiveElement)(i) : (0, t.getActiveElement)();
            n === e.currentTarget && n === o && (s && s(e), l && l(!0), c(e))
        }, [l, s, c]);
        return {
            focusProps: {
                onFocus: !o && (s || l || a) ? h : void 0,
                onBlur: !o && (a || l) ? u : void 0
            }
        }
    }])
}, 290005, e => {
    "use strict";

    function t(e) {
        if (!e) return;
        let t = !0;
        return r => {
            e({
                ...r,
                preventDefault() {
                    r.preventDefault()
                },
                isDefaultPrevented: () => r.isDefaultPrevented(),
                stopPropagation() {
                    t = !0
                },
                continuePropagation() {
                    t = !1, "function" == typeof r.continuePropagation && r.continuePropagation()
                },
                isPropagationStopped: () => t
            }), t && r.stopPropagation()
        }
    }
    e.i(203217), e.s(["useKeyboard", 0, function(e) {
        return {
            keyboardProps: e.isDisabled ? {} : {
                onKeyDown: t(e.onKeyDown),
                onKeyUp: t(e.onKeyUp)
            }
        }
    }], 290005)
}, 996980, e => {
    "use strict";
    var t = e.i(185559);
    e.s(["useSyncRef", 0, function(e, r) {
        (0, t.useLayoutEffect)(() => {
            if (e && e.ref && r) return e.ref.current = r.current, () => {
                e.ref && (e.ref.current = null)
            }
        })
    }])
}, 513485, e => {
    "use strict";
    var t = e.i(799163),
        r = e.i(429305),
        n = (e.i(402801), e.i(153393)),
        i = e.i(290005),
        o = e.i(838031),
        s = e.i(996980),
        a = e.i(499531);
    let l = a.default.createContext(null),
        u = a.default.forwardRef(function(e, t) {
            let {
                children: r,
                ...n
            } = e, i = (0, o.useObjectRef)(t), s = {
                ...n,
                ref: i
            };
            return a.default.createElement(l.Provider, {
                value: s
            }, r)
        });
    e.s(["FocusableContext", 0, l, "FocusableProvider", 0, u, "useFocusable", 0, function(e, o) {
        let {
            focusProps: u
        } = (0, n.useFocus)(e), {
            keyboardProps: c
        } = (0, i.useKeyboard)(e), h = (0, r.mergeProps)(u, c), f = function(e) {
            let t = (0, a.useContext)(l) || {};
            (0, s.useSyncRef)(t, e);
            let {
                ref: r,
                ...n
            } = t;
            return n
        }(o), p = e.isDisabled ? {} : f, d = (0, a.useRef)(e.autoFocus);
        (0, a.useEffect)(() => {
            d.current && o.current && (0, t.focusSafely)(o.current), d.current = !1
        }, [o]);
        let g = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (g = void 0), {
            focusableProps: (0, r.mergeProps)({
                ...h,
                tabIndex: g
            }, p)
        }
    }])
}, 812018, e => {
    "use strict";
    var t = e.i(575414),
        r = e.i(904960),
        n = e.i(800278);
    let i = "default",
        o = "",
        s = new WeakMap;
    e.s(["disableTextSelection", 0, function(e) {
        if ((0, r.isIOS)()) {
            if ("default" === i) {
                let r = (0, t.getOwnerDocument)(e);
                o = r.documentElement.style.webkitUserSelect, r.documentElement.style.webkitUserSelect = "none"
            }
            i = "disabled"
        } else if (e instanceof HTMLElement || e instanceof SVGElement) {
            let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
            s.set(e, e.style[t]), e.style[t] = "none"
        }
    }, "restoreTextSelection", 0, function(e) {
        if ((0, r.isIOS)()) "disabled" === i && (i = "restoring", setTimeout(() => {
            (0, n.runAfterTransition)(() => {
                if ("restoring" === i) {
                    let r = (0, t.getOwnerDocument)(e);
                    "none" === r.documentElement.style.webkitUserSelect && (r.documentElement.style.webkitUserSelect = o || ""), o = "", i = "default"
                }
            })
        }, 300));
        else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && s.has(e)) {
            let t = s.get(e),
                r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
            "none" === e.style[r] && (e.style[r] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), s.delete(e)
        }
    }])
}, 938280, e => {
    "use strict";
    var t = e.i(575414);

    function r(e) {
        let t = e?.defaultView;
        return t?.__webpack_nonce__ || globalThis.__webpack_nonce__ || void 0
    }
    let n = new WeakMap;
    e.s(["getNonce", 0, function(e) {
        let i = e ?? ("u" > typeof document ? document : void 0);
        if (!i) return r(i);
        if (n.has(i)) return n.get(i);
        let o = i.querySelector('meta[property="csp-nonce"]'),
            s = o && o instanceof(0, t.getOwnerWindow)(o).HTMLMetaElement && (o.nonce || o.content) || r(i) || void 0;
        return void 0 !== s && n.set(i, s), s
    }])
}, 58824, e => {
    "use strict";
    let t = e.i(499531).default.createContext({
        register: () => {}
    });
    t.displayName = "PressResponderContext", e.s(["PressResponderContext", 0, t])
}, 600939, e => {
    "use strict";
    var t = e.i(185559),
        r = e.i(499531);
    let n = r.default.useInsertionEffect ?? t.useLayoutEffect;
    e.s(["useEffectEvent", 0, function(e) {
        let t = (0, r.useRef)(null);
        return n(() => {
            t.current = e
        }, [e]), (0, r.useCallback)((...e) => {
            let r = t.current;
            return r?.(...e)
        }, [])
    }])
}, 322660, e => {
    "use strict";
    var t = e.i(499531);
    e.s(["useGlobalListeners", 0, function() {
        let e = (0, t.useRef)(new Map),
            r = (0, t.useCallback)((t, r, n, i) => {
                let o = i?.once ? (...t) => {
                    e.current.delete(n), n(...t)
                } : n;
                e.current.set(n, {
                    type: r,
                    eventTarget: t,
                    fn: o,
                    options: i
                }), t.addEventListener(r, o, i)
            }, []),
            n = (0, t.useCallback)((t, r, n, i) => {
                let o = e.current.get(n)?.fn || n;
                t.removeEventListener(r, o, i), e.current.delete(n)
            }, []),
            i = (0, t.useCallback)(() => {
                e.current.forEach((e, t) => {
                    n(e.eventTarget, e.type, t, e.options)
                })
            }, [n]);
        return (0, t.useEffect)(() => i, [i]), {
            addGlobalListener: r,
            removeGlobalListener: n,
            removeAllGlobalListeners: i
        }
    }])
}, 629959, e => {
    "use strict";
    var t = e.i(476090),
        r = e.i(242637),
        n = e.i(812018),
        i = e.i(259457),
        o = e.i(776050),
        s = e.i(938280),
        a = e.i(575414),
        l = e.i(904960),
        u = e.i(662764),
        c = e.i(429305),
        h = e.i(97584),
        f = e.i(58824),
        p = e.i(600939),
        d = e.i(322660),
        g = e.i(996980);
    e.i(320666);
    var m = e.i(499531);
    class b {
        #e;
        constructor(e, t, r, n) {
            this.#e = !0;
            let i = n?.target ?? r.currentTarget;
            const o = i?.getBoundingClientRect();
            let s, a = 0,
                l, u = null;
            null != r.clientX && null != r.clientY && (l = r.clientX, u = r.clientY), o && (null != l && null != u ? (s = l - o.left, a = u - o.top) : (s = o.width / 2, a = o.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = s, this.y = a, this.key = r.key
        }
        continuePropagation() {
            this.#e = !1
        }
        get shouldStopPropagation() {
            return this.#e
        }
    }
    let y = Symbol("linkClicked"),
        E = "react-aria-pressable-style",
        v = "data-react-aria-pressable";

    function T(e) {
        return "A" === e.tagName && e.hasAttribute("href")
    }

    function P(e, t) {
        let {
            key: r,
            code: n
        } = e, i = t.getAttribute("role");
        return ("Enter" === r || " " === r || "Spacebar" === r || "Space" === n) && !(t instanceof(0, a.getOwnerWindow)(t).HTMLInputElement && !B(t, r) || t instanceof(0, a.getOwnerWindow)(t).HTMLTextAreaElement || t.isContentEditable) && !(("link" === i || !i && T(t)) && "Enter" !== r)
    }

    function H(e, t) {
        let r = t.clientX,
            n = t.clientY;
        return {
            currentTarget: e,
            shiftKey: t.shiftKey,
            ctrlKey: t.ctrlKey,
            metaKey: t.metaKey,
            altKey: t.altKey,
            clientX: r,
            clientY: n,
            key: t.key
        }
    }

    function S(e, t) {
        return e instanceof HTMLInputElement ? !B(e, t) : !(e instanceof HTMLInputElement) && (e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !T(e))
    }
    let L = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

    function B(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : L.has(e.type)
    }
    e.s(["usePress", 0, function(e) {
        let {
            onPress: L,
            onPressChange: B,
            onPressStart: w,
            onPressEnd: A,
            onPressUp: C,
            onClick: M,
            isDisabled: I,
            isPressed: O,
            preventFocusOnPress: _,
            shouldCancelOnPointerExit: R,
            allowTextSelectionOnPress: k,
            ref: N,
            ...F
        } = function(e) {
            let t = (0, m.useContext)(f.PressResponderContext);
            if (t) {
                let {
                    register: r,
                    ref: n,
                    ...i
                } = t;
                e = (0, c.mergeProps)(i, e), r()
            }
            return (0, g.useSyncRef)(t, e.ref), e
        }(e), [D, x] = (0, m.useState)(!1), U = (0, m.useRef)({
            isPressed: !1,
            ignoreEmulatedMouseEvents: !1,
            didFirePressStart: !1,
            isTriggeringEvent: !1,
            activePointerId: null,
            target: null,
            isOverTarget: !1,
            pointerType: null,
            disposables: []
        }), {
            addGlobalListener: G,
            removeAllGlobalListeners: K
        } = (0, d.useGlobalListeners)(), V = (0, m.useCallback)((e, t) => {
            let r = U.current;
            if (I || r.didFirePressStart) return !1;
            let n = !0;
            if (r.isTriggeringEvent = !0, w) {
                let r = new b("pressstart", t, e);
                w(r), n = r.shouldStopPropagation
            }
            return B && B(!0), r.isTriggeringEvent = !1, r.didFirePressStart = !0, x(!0), n
        }, [I, w, B]), W = (0, m.useCallback)((e, t, r = !0) => {
            let n = U.current;
            if (!n.didFirePressStart) return !1;
            n.didFirePressStart = !1, n.isTriggeringEvent = !0;
            let i = !0;
            if (A) {
                let r = new b("pressend", t, e);
                A(r), i = r.shouldStopPropagation
            }
            if (B && B(!1), x(!1), L && r && !I) {
                let r = new b("press", t, e);
                L(r), i &&= r.shouldStopPropagation
            }
            return n.isTriggeringEvent = !1, i
        }, [I, A, B, L]), j = (0, p.useEffectEvent)(W), $ = (0, m.useCallback)((e, t) => {
            let r = U.current;
            if (I) return !1;
            if (C) {
                r.isTriggeringEvent = !0;
                let n = new b("pressup", t, e);
                return C(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
            }
            return !0
        }, [I, C]), X = (0, p.useEffectEvent)($), Y = (0, m.useCallback)(e => {
            let t = U.current;
            if (t.isPressed && t.target) {
                for (let r of (t.didFirePressStart && null != t.pointerType && W(H(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, K(), k || (0, n.restoreTextSelection)(t.target), t.disposables)) r();
                t.disposables = []
            }
        }, [k, K, W]), Z = (0, p.useEffectEvent)(Y);
        (0, m.useEffect)(() => {
            I && U.current.isPressed && Z({
                currentTarget: U.current.target,
                shiftKey: !1,
                ctrlKey: !1,
                metaKey: !1,
                altKey: !1
            })
        }, [I]);
        let z = (0, m.useCallback)(e => {
                R && Y(e)
            }, [R, Y]),
            q = (0, m.useCallback)(e => {
                I || M?.(e)
            }, [I, M]),
            J = (0, m.useCallback)((e, t) => {
                if (!I && M) {
                    let n = new MouseEvent("click", e);
                    (0, r.setEventTarget)(n, t), M((0, r.createSyntheticEvent)(n))
                }
            }, [I, M]),
            Q = (0, m.useMemo)(() => {
                let e = U.current,
                    s = {
                        onKeyDown(r) {
                            if (P(r.nativeEvent, r.currentTarget) && (0, o.nodeContains)(r.currentTarget, (0, o.getEventTarget)(r))) {
                                S((0, o.getEventTarget)(r), r.key) && r.preventDefault();
                                let n = !0;
                                e.isPressed || r.repeat || (e.target = r.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", n = V(r, "keyboard"));
                                let i = r.currentTarget;
                                G((0, a.getOwnerDocument)(r.currentTarget), "keyup", (0, t.chain)(t => {
                                    P(t, i) && !t.repeat && (0, o.nodeContains)(i, (0, o.getEventTarget)(t)) && e.target && X(H(e.target, t), "keyboard")
                                }, c), !0), n && r.stopPropagation(), r.metaKey && (0, l.isMac)() && e.metaKeyEvents?.set(r.key, r.nativeEvent)
                            } else "Meta" === r.key && (e.metaKeyEvents = new Map)
                        },
                        onClick(t) {
                            if ((!t || (0, o.nodeContains)(t.currentTarget, (0, o.getEventTarget)(t))) && t && 0 === t.button && !e.isTriggeringEvent && !h.openLink.isOpening) {
                                let r = !0;
                                if (I && t.preventDefault(), !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || (0, u.isVirtualClick)(t.nativeEvent))) {
                                    let e = V(t, "virtual"),
                                        n = X(t, "virtual"),
                                        i = j(t, "virtual");
                                    q(t), r = e && n && i
                                } else if (e.isPressed && "keyboard" !== e.pointerType) {
                                    let n = e.pointerType || t.nativeEvent.pointerType || "virtual",
                                        i = X(H(t.currentTarget, t), n),
                                        o = j(H(t.currentTarget, t), n, !0);
                                    r = i && o, e.isOverTarget = !1, q(t), Z(t)
                                }
                                e.ignoreEmulatedMouseEvents = !1, r && t.stopPropagation()
                            }
                        }
                    },
                    c = t => {
                        if (e.isPressed && e.target && P(t, e.target)) {
                            S((0, o.getEventTarget)(t), t.key) && t.preventDefault();
                            let r = (0, o.getEventTarget)(t),
                                n = (0, o.nodeContains)(e.target, r);
                            j(H(e.target, t), "keyboard", n), n && J(t, e.target), K(), "Enter" !== t.key && T(e.target) && (0, o.nodeContains)(e.target, r) && !t[y] && (t[y] = !0, (0, h.openLink)(e.target, t, !1)), e.isPressed = !1, e.metaKeyEvents?.delete(t.key)
                        } else if ("Meta" === t.key && e.metaKeyEvents?.size) {
                            let t = e.metaKeyEvents;
                            for (let r of (e.metaKeyEvents = void 0, t.values())) e.target?.dispatchEvent(new KeyboardEvent("keyup", r))
                        }
                    };
                if ("u" > typeof PointerEvent) {
                    s.onPointerDown = r => {
                        if (0 !== r.button || !(0, o.nodeContains)(r.currentTarget, (0, o.getEventTarget)(r))) return;
                        if ((0, u.isVirtualPointerEvent)(r.nativeEvent)) {
                            e.pointerType = "virtual";
                            return
                        }
                        e.pointerType = r.pointerType;
                        let i = !0;
                        if (!e.isPressed) {
                            e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = r.pointerId, e.target = r.currentTarget, k || (0, n.disableTextSelection)(e.target), i = V(r, e.pointerType);
                            let s = (0, o.getEventTarget)(r);
                            "releasePointerCapture" in s && ("hasPointerCapture" in s ? s.hasPointerCapture(r.pointerId) && s.releasePointerCapture(r.pointerId) : s.releasePointerCapture(r.pointerId)), G((0, a.getOwnerDocument)(r.currentTarget), "pointerup", t, !1), G((0, a.getOwnerDocument)(r.currentTarget), "pointercancel", l, !1)
                        }
                        i && r.stopPropagation()
                    }, s.onMouseDown = t => {
                        if ((0, o.nodeContains)(t.currentTarget, (0, o.getEventTarget)(t)) && 0 === t.button) {
                            if (_) {
                                let n = (0, r.preventFocus)(t.target);
                                n && e.disposables.push(n)
                            }
                            t.stopPropagation()
                        }
                    }, s.onPointerUp = t => {
                        (0, o.nodeContains)(t.currentTarget, (0, o.getEventTarget)(t)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || X(t, e.pointerType || t.pointerType))
                    }, s.onPointerEnter = t => {
                        t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, V(H(e.target, t), e.pointerType))
                    }, s.onPointerLeave = t => {
                        t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, j(H(e.target, t), e.pointerType, !1), z(t))
                    };
                    let t = t => {
                            if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                                if ((0, o.nodeContains)(e.target, (0, o.getEventTarget)(t)) && null != e.pointerType) {
                                    let r = !1,
                                        n = setTimeout(() => {
                                            e.isPressed && e.target instanceof HTMLElement && (r ? Z(t) : ((0, i.focusWithoutScrolling)(e.target), e.target.click()))
                                        }, 80);
                                    G(t.currentTarget, "click", () => r = !0, !0), e.disposables.push(() => clearTimeout(n))
                                } else Z(t);
                                e.isOverTarget = !1
                            }
                        },
                        l = e => {
                            Z(e)
                        };
                    s.onDragStart = e => {
                        (0, o.nodeContains)(e.currentTarget, (0, o.getEventTarget)(e)) && Z(e)
                    }
                }
                return s
            }, [G, I, _, K, k, z, V, q, J]);
        return (0, m.useEffect)(() => {
            if (!N) return;
            let e = (0, a.getOwnerDocument)(N.current);
            if (!e || !e.head || e.getElementById(E)) return;
            let t = e.createElement("style");
            t.id = E;
            let r = (0, s.getNonce)(e);
            r && (t.nonce = r), t.textContent = `
@layer {
  [${v}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), e.head.prepend(t)
        }, [N]), (0, m.useEffect)(() => {
            let e = U.current;
            return () => {
                for (let t of (k || (0, n.restoreTextSelection)(e.target ?? void 0), e.disposables)) t();
                e.disposables = []
            }
        }, [k]), {
            isPressed: O || D,
            pressProps: (0, c.mergeProps)(F, Q, {
                [v]: !0
            })
        }
    }])
}, 611017, e => {
    "use strict";
    var t = e.i(679933),
        r = e.i(429305),
        n = e.i(513485),
        i = e.i(629959);
    e.s(["useButton", 0, function(e, o) {
        let s, {
            elementType: a = "button",
            isDisabled: l,
            onPress: u,
            onPressStart: c,
            onPressEnd: h,
            onPressUp: f,
            onPressChange: p,
            preventFocusOnPress: d,
            allowFocusWhenDisabled: g,
            onClick: m,
            href: b,
            target: y,
            rel: E,
            type: v = "button"
        } = e;
        s = "button" === a ? {
            type: v,
            disabled: l,
            form: e.form,
            formAction: e.formAction,
            formEncType: e.formEncType,
            formMethod: e.formMethod,
            formNoValidate: e.formNoValidate,
            formTarget: e.formTarget,
            name: e.name,
            value: e.value
        } : {
            role: "button",
            href: "a" !== a || l ? void 0 : b,
            target: "a" === a ? y : void 0,
            type: "input" === a ? v : void 0,
            disabled: "input" === a ? l : void 0,
            "aria-disabled": l && "input" !== a ? l : void 0,
            rel: "a" === a ? E : void 0
        };
        let {
            pressProps: T,
            isPressed: P
        } = (0, i.usePress)({
            onPressStart: c,
            onPressEnd: h,
            onPressChange: p,
            onPress: u,
            onPressUp: f,
            onClick: m,
            isDisabled: l,
            preventFocusOnPress: d,
            ref: o
        }), {
            focusableProps: H
        } = (0, n.useFocusable)(e, o);
        g && (H.tabIndex = l ? -1 : H.tabIndex);
        let S = (0, r.mergeProps)(H, T, (0, t.filterDOMProps)(e, {
            labelable: !0
        }));
        return {
            isPressed: P,
            buttonProps: (0, r.mergeProps)(s, S, {
                "aria-haspopup": e["aria-haspopup"],
                "aria-expanded": e["aria-expanded"],
                "aria-controls": e["aria-controls"],
                "aria-pressed": e["aria-pressed"],
                "aria-current": e["aria-current"],
                "aria-disabled": e["aria-disabled"]
            })
        }
    }])
}, 768307, e => {
    "use strict";
    var t = e.i(242637),
        r = e.i(776050),
        n = e.i(575414),
        i = e.i(322660),
        o = e.i(499531);
    e.s(["useFocusWithin", 0, function(e) {
        let {
            isDisabled: s,
            onBlurWithin: a,
            onFocusWithin: l,
            onFocusWithinChange: u
        } = e, c = (0, o.useRef)({
            isFocusWithin: !1
        }), {
            addGlobalListener: h,
            removeAllGlobalListeners: f
        } = (0, i.useGlobalListeners)(), p = (0, o.useCallback)(e => {
            (0, r.nodeContains)(e.currentTarget, (0, r.getEventTarget)(e)) && c.current.isFocusWithin && !(0, r.nodeContains)(e.currentTarget, e.relatedTarget) && (c.current.isFocusWithin = !1, f(), a && a(e), u && u(!1))
        }, [a, u, c, f]), d = (0, t.useSyntheticBlurEvent)(p), g = (0, o.useCallback)(e => {
            if (!(0, r.nodeContains)(e.currentTarget, (0, r.getEventTarget)(e))) return;
            let i = (0, r.getEventTarget)(e),
                o = (0, n.getOwnerDocument)(i),
                s = (0, r.getActiveElement)(o);
            if (!c.current.isFocusWithin && s === i) {
                l && l(e), u && u(!0), c.current.isFocusWithin = !0, d(e);
                let n = e.currentTarget;
                h(o, "focus", e => {
                    let i = (0, r.getEventTarget)(e);
                    if (c.current.isFocusWithin && !(0, r.nodeContains)(n, i)) {
                        let e = new o.defaultView.FocusEvent("blur", {
                            relatedTarget: i
                        });
                        (0, t.setEventTarget)(e, n), p((0, t.createSyntheticEvent)(e))
                    }
                }, {
                    capture: !0
                })
            }
        }, [l, u, d, h, p]);
        return s ? {
            focusWithinProps: {
                onFocus: void 0,
                onBlur: void 0
            }
        } : {
            focusWithinProps: {
                onFocus: g,
                onBlur: p
            }
        }
    }])
}, 147333, e => {
    "use strict";
    var t = e.i(816862),
        r = e.i(153393),
        n = e.i(768307),
        i = e.i(499531);
    e.s(["useFocusRing", 0, function(e = {}) {
        let {
            autoFocus: o = !1,
            isTextInput: s,
            within: a
        } = e, l = (0, i.useRef)({
            isFocused: !1,
            isFocusVisible: o || (0, t.isFocusVisible)()
        }), [u, c] = (0, i.useState)(!1), [h, f] = (0, i.useState)(() => l.current.isFocused && l.current.isFocusVisible), p = (0, i.useCallback)(() => f(l.current.isFocused && l.current.isFocusVisible), []), d = (0, i.useCallback)(e => {
            l.current.isFocused = e, l.current.isFocusVisible = (0, t.isFocusVisible)(), c(e), p()
        }, [p]);
        (0, t.useFocusVisibleListener)(e => {
            l.current.isFocusVisible = e, p()
        }, [s, u], {
            enabled: u,
            isTextInput: s
        });
        let {
            focusProps: g
        } = (0, r.useFocus)({
            isDisabled: a,
            onFocusChange: d
        }), {
            focusWithinProps: m
        } = (0, n.useFocusWithin)({
            isDisabled: !a,
            onFocusWithinChange: d
        });
        return {
            isFocused: u,
            isFocusVisible: h,
            focusProps: a ? m : g
        }
    }])
}, 355770, e => {
    "use strict";
    var t = e.i(776050),
        r = e.i(575414),
        n = e.i(322660),
        i = e.i(499531);
    let o = !1,
        s = 0;

    function a(e) {
        "touch" === e.pointerType && (o = !0, setTimeout(() => {
            o = !1
        }, 500))
    }

    function l() {
        let e = (0, r.getOwnerDocument)(null);
        if (void 0 !== e) return 0 === s && "u" > typeof PointerEvent && e.addEventListener("pointerup", a), s++, () => {
            !(--s > 0) && "u" > typeof PointerEvent && e.removeEventListener("pointerup", a)
        }
    }
    e.s(["useHover", 0, function(e) {
        let {
            onHoverStart: s,
            onHoverChange: a,
            onHoverEnd: u,
            isDisabled: c
        } = e, [h, f] = (0, i.useState)(!1), p = (0, i.useRef)({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: "",
            target: null
        }).current;
        (0, i.useEffect)(l, []);
        let {
            addGlobalListener: d,
            removeAllGlobalListeners: g
        } = (0, n.useGlobalListeners)(), {
            hoverProps: m,
            triggerHoverEnd: b
        } = (0, i.useMemo)(() => {
            let e = (e, t) => {
                    let r = p.target;
                    p.pointerType = "", p.target = null, "touch" !== t && p.isHovered && r && (p.isHovered = !1, g(), u && u({
                        type: "hoverend",
                        target: r,
                        pointerType: t
                    }), a && a(!1), f(!1))
                },
                n = {};
            return "u" > typeof PointerEvent && (n.onPointerEnter = n => {
                o && "mouse" === n.pointerType || ((n, i) => {
                    if (p.pointerType = i, c || "touch" === i || p.isHovered || !(0, t.nodeContains)(n.currentTarget, (0, t.getEventTarget)(n))) return;
                    p.isHovered = !0;
                    let o = n.currentTarget;
                    p.target = o, d((0, r.getOwnerDocument)((0, t.getEventTarget)(n)), "pointerover", r => {
                        p.isHovered && p.target && !(0, t.nodeContains)(p.target, (0, t.getEventTarget)(r)) && e(r, r.pointerType)
                    }, {
                        capture: !0
                    }), s && s({
                        type: "hoverstart",
                        target: o,
                        pointerType: i
                    }), a && a(!0), f(!0)
                })(n, n.pointerType)
            }, n.onPointerLeave = r => {
                !c && (0, t.nodeContains)(r.currentTarget, (0, t.getEventTarget)(r)) && e(r, r.pointerType)
            }), {
                hoverProps: n,
                triggerHoverEnd: e
            }
        }, [s, a, u, c, p, d, g]);
        return (0, i.useEffect)(() => {
            c && b({
                currentTarget: p.target
            }, p.pointerType)
        }, [c]), {
            hoverProps: m,
            isHovered: h
        }
    }])
}]);