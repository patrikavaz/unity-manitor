(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 820092, (e, t, r) => {
    var o = Object.prototype;
    t.exports = function(e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || o)
    }
}, 216158, (e, t, r) => {
    t.exports = function(e, t) {
        return function(r) {
            return e(t(r))
        }
    }
}, 394272, (e, t, r) => {
    t.exports = e.r(216158)(Object.keys, Object)
}, 668488, (e, t, r) => {
    var o = e.r(820092),
        u = e.r(394272),
        n = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        if (!o(e)) return u(e);
        var t = [];
        for (var r in Object(e)) n.call(e, r) && "constructor" != r && t.push(r);
        return t
    }
}, 238591, (e, t, r) => {
    var o = e.r(416907),
        u = e.r(394022);
    t.exports = function(e) {
        return u(e) && "[object Arguments]" == o(e)
    }
}, 410090, (e, t, r) => {
    var o = e.r(238591),
        u = e.r(394022),
        n = Object.prototype,
        l = n.hasOwnProperty,
        i = n.propertyIsEnumerable;
    t.exports = o(function() {
        return arguments
    }()) ? o : function(e) {
        return u(e) && l.call(e, "callee") && !i.call(e, "callee")
    }
}, 784800, (e, t, r) => {
    t.exports = function(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 0x1fffffffffffff
    }
}, 622914, (e, t, r) => {
    var o = e.r(462931),
        u = e.r(784800);
    t.exports = function(e) {
        return null != e && u(e.length) && !o(e)
    }
}, 756024, (e, t, r) => {
    t.exports = function() {
        return !1
    }
}, 432816, (e, t, r) => {
    var o = e.r(78974),
        u = e.r(756024),
        n = r && !r.nodeType && r,
        l = n && t && !t.nodeType && t,
        i = l && l.exports === n ? o.Buffer : void 0;
    t.exports = (i ? i.isBuffer : void 0) || u
}, 742112, (e, t, r) => {
    var o = e.r(416907),
        u = e.r(784800),
        n = e.r(394022),
        l = {};
    l["[object Float32Array]"] = l["[object Float64Array]"] = l["[object Int8Array]"] = l["[object Int16Array]"] = l["[object Int32Array]"] = l["[object Uint8Array]"] = l["[object Uint8ClampedArray]"] = l["[object Uint16Array]"] = l["[object Uint32Array]"] = !0, l["[object Arguments]"] = l["[object Array]"] = l["[object ArrayBuffer]"] = l["[object Boolean]"] = l["[object DataView]"] = l["[object Date]"] = l["[object Error]"] = l["[object Function]"] = l["[object Map]"] = l["[object Number]"] = l["[object Object]"] = l["[object RegExp]"] = l["[object Set]"] = l["[object String]"] = l["[object WeakMap]"] = !1, t.exports = function(e) {
        return n(e) && u(e.length) && !!l[o(e)]
    }
}, 585466, (e, t, r) => {
    t.exports = function(e) {
        return function(t) {
            return e(t)
        }
    }
}, 91480, (e, t, r) => {
    var o = e.r(505918),
        u = r && !r.nodeType && r,
        n = u && t && !t.nodeType && t,
        l = n && n.exports === u && o.process;
    t.exports = function() {
        try {
            var e = n && n.require && n.require("util").types;
            if (e) return e;
            return l && l.binding && l.binding("util")
        } catch (e) {}
    }()
}, 905330, (e, t, r) => {
    var o = e.r(742112),
        u = e.r(585466),
        n = e.r(91480),
        l = n && n.isTypedArray;
    t.exports = l ? u(l) : o
}, 968651, e => {
    "use strict";
    e.s(["default", 0, (e, t, r, o, u) => o ? t : u ? r : e || ""])
}, 474029, e => {
    "use strict";
    var t = e.i(3931),
        r = e => e instanceof Date,
        o = e => null == e,
        u = e => !o(e) && !Array.isArray(e) && "object" == typeof e && !r(e),
        n = e => u(e) && e.target ? "checkbox" === e.target.type ? e.target.checked : e.target.value : e,
        l = (e, t) => e.has(t.substring(0, t.search(/\.\d+(\.|$)/)) || t),
        i = "u" > typeof window && void 0 !== window.HTMLElement && "u" > typeof document;

    function a(e) {
        let t, r = Array.isArray(e);
        if (e instanceof Date) t = new Date(e);
        else if (e instanceof Set) t = new Set(e);
        else {
            let o;
            if (!(!(i && (e instanceof Blob || e instanceof FileList)) && (r || u(e)))) return e;
            if (t = r ? [] : {}, r || u(o = e.constructor && e.constructor.prototype) && o.hasOwnProperty("isPrototypeOf"))
                for (let r in e) e.hasOwnProperty(r) && (t[r] = a(e[r]));
            else t = e
        }
        return t
    }
    var s = e => Array.isArray(e) ? e.filter(Boolean) : [],
        c = e => void 0 === e,
        d = (e, t, r) => {
            if (!t || !u(e)) return r;
            let n = s(t.split(/[,[\].]+?/)).reduce((e, t) => o(e) ? e : e[t], e);
            return c(n) || n === e ? c(e[t]) ? r : e[t] : n
        },
        p = e => s(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
        f = (e, t, r) => {
            let o = -1,
                n = /^\w*$/.test(t) ? [t] : p(t),
                l = n.length,
                i = l - 1;
            for (; ++o < l;) {
                let t = n[o],
                    l = r;
                if (o !== i) {
                    let r = e[t];
                    l = u(r) || Array.isArray(r) ? r : isNaN(+n[o + 1]) ? {} : []
                }
                if ("__proto__" === t) return;
                e[t] = l, e = e[t]
            }
            return e
        };
    let m = "blur",
        g = "onChange",
        b = "onSubmit",
        h = "maxLength",
        y = "minLength",
        C = "pattern",
        x = "required",
        v = t.default.createContext(null);
    var $ = (e, t, r, o = !0) => {
            let u = {
                defaultValues: t._defaultValues
            };
            for (let n in e) Object.defineProperty(u, n, {
                get: () => ("all" !== t._proxyFormState[n] && (t._proxyFormState[n] = !o || "all"), r && (r[n] = !0), e[n])
            });
            return u
        },
        A = e => u(e) && !Object.keys(e).length,
        F = (e, t, r, o) => {
            r(e);
            let {
                name: u,
                ...n
            } = e;
            return A(n) || Object.keys(n).length >= Object.keys(t).length || Object.keys(n).find(e => t[e] === (!o || "all"))
        },
        T = e => Array.isArray(e) ? e : [e],
        S = (e, t, r) => !e || !t || e === t || T(e).some(e => e && (r ? e === t : e.startsWith(t) || t.startsWith(e)));

    function k(e) {
        let r = t.default.useRef(e);
        r.current = e, t.default.useEffect(() => {
            let t = !e.disabled && r.current.subject && r.current.subject.subscribe({
                next: r.current.next
            });
            return () => {
                t && t.unsubscribe()
            }
        }, [e.disabled])
    }
    var w = (e, t, r, o, u) => "string" == typeof e ? (o && t.watch.add(e), d(r, e, u)) : Array.isArray(e) ? e.map(e => (o && t.watch.add(e), d(r, e))) : (o && (t.watchAll = !0), r);

    function E(e) {
        let r = t.default.useContext(v),
            {
                control: o = r.control,
                name: u,
                defaultValue: n,
                disabled: l,
                exact: i
            } = e || {},
            s = t.default.useRef(u);
        s.current = u, k({
            disabled: l,
            subject: o._subjects.values,
            next: e => {
                S(s.current, e.name, i) && d(a(w(s.current, o._names, e.values || o._formValues, !1, n)))
            }
        });
        let [c, d] = t.default.useState(o._getWatch(u, n));
        return t.default.useEffect(() => o._removeUnmounted()), c
    }
    var D = (e, t, r, o, u) => t ? {
            ...r[e],
            types: {
                ...r[e] && r[e].types ? r[e].types : {},
                [o]: u || !0
            }
        } : {},
        j = e => ({
            isOnSubmit: !e || e === b,
            isOnBlur: "onBlur" === e,
            isOnChange: e === g,
            isOnAll: "all" === e,
            isOnTouch: "onTouched" === e
        }),
        V = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some(t => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length))));
    let _ = (e, t, r, o) => {
        for (let n of r || Object.keys(e)) {
            let r = d(e, n);
            if (r) {
                let {
                    _f: e,
                    ...l
                } = r;
                if (e) {
                    if (e.refs && e.refs[0] && t(e.refs[0], n) && !o) return !0;
                    else if (e.ref && t(e.ref, e.name) && !o) return !0;
                    else if (_(l, t)) break
                } else if (u(l) && _(l, t)) break
            }
        }
    };
    var B = (e, t, r) => {
            let o = T(d(e, r));
            return f(o, "root", t[r]), f(e, r, o), e
        },
        O = e => "function" == typeof e,
        L = e => {
            if (!i) return !1;
            let t = e ? e.ownerDocument : 0;
            return e instanceof(t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
        },
        I = e => "string" == typeof e;
    let R = {
            value: !1,
            isValid: !1
        },
        N = {
            value: !0,
            isValid: !0
        };
    var P = e => {
        if (Array.isArray(e)) {
            if (e.length > 1) {
                let t = e.filter(e => e && e.checked && !e.disabled).map(e => e.value);
                return {
                    value: t,
                    isValid: !!t.length
                }
            }
            return e[0].checked && !e[0].disabled ? e[0].attributes && !c(e[0].attributes.value) ? c(e[0].value) || "" === e[0].value ? N : {
                value: e[0].value,
                isValid: !0
            } : N : R
        }
        return R
    };
    let G = {
        isValid: !1,
        value: null
    };
    var q = e => Array.isArray(e) ? e.reduce((e, t) => t && t.checked && !t.disabled ? {
        isValid: !0,
        value: t.value
    } : e, G) : G;

    function K(e, t, r = "validate") {
        if (I(e) || Array.isArray(e) && e.every(I) || "boolean" == typeof e && !e) return {
            type: r,
            message: I(e) ? e : "",
            ref: t
        }
    }
    var M = e => !u(e) || e instanceof RegExp ? {
            value: e,
            message: ""
        } : e,
        U = async (e, t, r, n, l) => {
            let {
                ref: i,
                refs: a,
                required: s,
                maxLength: p,
                minLength: f,
                min: m,
                max: g,
                pattern: b,
                validate: v,
                name: $,
                valueAsNumber: F,
                mount: T,
                disabled: S
            } = e._f, k = d(t, $);
            if (!T || S) return {};
            let w = a ? a[0] : i,
                E = e => {
                    n && w.reportValidity && (w.setCustomValidity("boolean" == typeof e ? "" : e || ""), w.reportValidity())
                },
                j = {},
                V = "radio" === i.type,
                _ = "checkbox" === i.type,
                B = (F || "file" === i.type) && c(i.value) && c(k) || L(i) && "" === i.value || "" === k || Array.isArray(k) && !k.length,
                R = D.bind(null, $, r, j),
                N = (e, t, r, o = h, u = y) => {
                    let n = e ? t : r;
                    j[$] = {
                        type: e ? o : u,
                        message: n,
                        ref: i,
                        ...R(e ? o : u, n)
                    }
                };
            if (l ? !Array.isArray(k) || !k.length : s && (!(V || _) && (B || o(k)) || "boolean" == typeof k && !k || _ && !P(a).isValid || V && !q(a).isValid)) {
                let {
                    value: e,
                    message: t
                } = I(s) ? {
                    value: !!s,
                    message: s
                } : M(s);
                if (e && (j[$] = {
                        type: x,
                        message: t,
                        ref: w,
                        ...R(x, t)
                    }, !r)) return E(t), j
            }
            if (!B && (!o(m) || !o(g))) {
                let e, t, u = M(g),
                    n = M(m);
                if (o(k) || isNaN(k)) {
                    let r = i.valueAsDate || new Date(k),
                        o = e => new Date(new Date().toDateString() + " " + e),
                        l = "time" == i.type,
                        a = "week" == i.type;
                    "string" == typeof u.value && k && (e = l ? o(k) > o(u.value) : a ? k > u.value : r > new Date(u.value)), "string" == typeof n.value && k && (t = l ? o(k) < o(n.value) : a ? k < n.value : r < new Date(n.value))
                } else {
                    let r = i.valueAsNumber || (k ? +k : k);
                    o(u.value) || (e = r > u.value), o(n.value) || (t = r < n.value)
                }
                if ((e || t) && (N(!!e, u.message, n.message, "max", "min"), !r)) return E(j[$].message), j
            }
            if ((p || f) && !B && ("string" == typeof k || l && Array.isArray(k))) {
                let e = M(p),
                    t = M(f),
                    u = !o(e.value) && k.length > +e.value,
                    n = !o(t.value) && k.length < +t.value;
                if ((u || n) && (N(u, e.message, t.message), !r)) return E(j[$].message), j
            }
            if (b && !B && "string" == typeof k) {
                let {
                    value: e,
                    message: t
                } = M(b);
                if (e instanceof RegExp && !k.match(e) && (j[$] = {
                        type: C,
                        message: t,
                        ref: i,
                        ...R(C, t)
                    }, !r)) return E(t), j
            }
            if (v) {
                if (O(v)) {
                    let e = K(await v(k, t), w);
                    if (e && (j[$] = {
                            ...e,
                            ...R("validate", e.message)
                        }, !r)) return E(e.message), j
                } else if (u(v)) {
                    let e = {};
                    for (let o in v) {
                        if (!A(e) && !r) break;
                        let u = K(await v[o](k, t), w, o);
                        u && (e = {
                            ...u,
                            ...R(o, u.message)
                        }, E(u.message), r && (j[$] = e))
                    }
                    if (!A(e) && (j[$] = {
                            ref: w,
                            ...e
                        }, !r)) return j
                }
            }
            return E(!0), j
        };

    function z(e, t) {
        let r = Array.isArray(t) ? t : /^\w*$/.test(t) ? [t] : p(t),
            o = 1 === r.length ? e : function(e, t) {
                let r = t.slice(0, -1).length,
                    o = 0;
                for (; o < r;) e = c(e) ? o++ : e[t[o++]];
                return e
            }(e, r),
            n = r.length - 1,
            l = r[n];
        return o && delete o[l], 0 !== n && (u(o) && A(o) || Array.isArray(o) && function(e) {
            for (let t in e)
                if (e.hasOwnProperty(t) && !c(e[t])) return !1;
            return !0
        }(o)) && z(e, r.slice(0, -1)), e
    }
    var W = () => {
            let e = [];
            return {
                get observers() {
                    return e
                },
                next: t => {
                    for (let r of e) r.next && r.next(t)
                },
                subscribe: t => (e.push(t), {
                    unsubscribe: () => {
                        e = e.filter(e => e !== t)
                    }
                }),
                unsubscribe: () => {
                    e = []
                }
            }
        },
        H = e => o(e) || "object" != typeof e;

    function Q(e, t) {
        if (H(e) || H(t)) return e === t;
        if (r(e) && r(t)) return e.getTime() === t.getTime();
        let o = Object.keys(e),
            n = Object.keys(t);
        if (o.length !== n.length) return !1;
        for (let l of o) {
            let o = e[l];
            if (!n.includes(l)) return !1;
            if ("ref" !== l) {
                let e = t[l];
                if (r(o) && r(e) || u(o) && u(e) || Array.isArray(o) && Array.isArray(e) ? !Q(o, e) : o !== e) return !1
            }
        }
        return !0
    }
    var Y = e => L(e) && e.isConnected,
        Z = e => {
            for (let t in e)
                if (O(e[t])) return !0;
            return !1
        };

    function J(e, t = {}) {
        let r = Array.isArray(e);
        if (u(e) || r)
            for (let r in e) Array.isArray(e[r]) || u(e[r]) && !Z(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, J(e[r], t[r])) : o(e[r]) || (t[r] = !0);
        return t
    }
    var X = (e, t) => (function e(t, r, n) {
            let l = Array.isArray(t);
            if (u(t) || l)
                for (let l in t) Array.isArray(t[l]) || u(t[l]) && !Z(t[l]) ? c(r) || H(n[l]) ? n[l] = Array.isArray(t[l]) ? J(t[l], []) : {
                    ...J(t[l])
                } : e(t[l], o(r) ? {} : r[l], n[l]) : n[l] = !Q(t[l], r[l]);
            return n
        })(e, t, J(t)),
        ee = (e, {
            valueAsNumber: t,
            valueAsDate: r,
            setValueAs: o
        }) => c(e) ? e : t ? "" === e ? NaN : e ? +e : e : r && "string" == typeof e ? new Date(e) : o ? o(e) : e;

    function et(e) {
        let t = e.ref;
        if (e.refs ? !e.refs.every(e => e.disabled) : !t.disabled) return "file" === t.type ? t.files : "radio" === t.type ? q(e.refs).value : "select-multiple" === t.type ? [...t.selectedOptions].map(({
            value: e
        }) => e) : "checkbox" === t.type ? P(e.refs).value : ee(c(t.value) ? e.ref.value : t.value, e)
    }
    var er = e => c(e) ? e : e instanceof RegExp ? e.source : u(e) ? e.value instanceof RegExp ? e.value.source : e.value : e;
    let eo = "AsyncFunction";
    var eu = e => (!e || !e.validate) && !!(O(e.validate) && e.validate.constructor.name === eo || u(e.validate) && Object.values(e.validate).find(e => e.constructor.name === eo));

    function en(e, t, r) {
        let o = d(e, r);
        if (o || /^\w*$/.test(r)) return {
            error: o,
            name: r
        };
        let u = r.split(".");
        for (; u.length;) {
            let o = u.join("."),
                n = d(t, o),
                l = d(e, o);
            if (n && !Array.isArray(n) && r !== o) break;
            if (l && l.type) return {
                name: o,
                error: l
            };
            u.pop()
        }
        return {
            name: r
        }
    }
    let el = {
        mode: b,
        reValidateMode: g,
        shouldFocusError: !0
    };
    e.s(["Controller", 0, e => e.render(function(e) {
        let r = t.default.useContext(v),
            {
                name: o,
                disabled: u,
                control: i = r.control,
                shouldUnregister: s
            } = e,
            p = l(i._names.array, o),
            g = E({
                control: i,
                name: o,
                defaultValue: d(i._formValues, o, d(i._defaultValues, o, e.defaultValue)),
                exact: !0
            }),
            b = function(e) {
                let r = t.default.useContext(v),
                    {
                        control: o = r.control,
                        disabled: u,
                        name: n,
                        exact: l
                    } = e || {},
                    [i, a] = t.default.useState(o._formState),
                    s = t.default.useRef(!0),
                    c = t.default.useRef({
                        isDirty: !1,
                        isLoading: !1,
                        dirtyFields: !1,
                        touchedFields: !1,
                        validatingFields: !1,
                        isValidating: !1,
                        isValid: !1,
                        errors: !1
                    }),
                    d = t.default.useRef(n);
                return d.current = n, k({
                    disabled: u,
                    next: e => s.current && S(d.current, e.name, l) && F(e, c.current, o._updateFormState) && a({
                        ...o._formState,
                        ...e
                    }),
                    subject: o._subjects.state
                }), t.default.useEffect(() => (s.current = !0, c.current.isValid && o._updateValid(!0), () => {
                    s.current = !1
                }), [o]), $(i, o, c.current, !1)
            }({
                control: i,
                name: o,
                exact: !0
            }),
            h = t.default.useRef(i.register(o, {
                ...e.rules,
                value: g,
                ..."boolean" == typeof e.disabled ? {
                    disabled: e.disabled
                } : {}
            }));
        return t.default.useEffect(() => {
            let e = i._options.shouldUnregister || s,
                t = (e, t) => {
                    let r = d(i._fields, e);
                    r && r._f && (r._f.mount = t)
                };
            if (t(o, !0), e) {
                let e = a(d(i._options.defaultValues, o));
                f(i._defaultValues, o, e), c(d(i._formValues, o)) && f(i._formValues, o, e)
            }
            return () => {
                (p ? e && !i._state.action : e) ? i.unregister(o): t(o, !1)
            }
        }, [o, i, p, s]), t.default.useEffect(() => {
            d(i._fields, o) && i._updateDisabledField({
                disabled: u,
                fields: i._fields,
                name: o,
                value: d(i._fields, o)._f.value
            })
        }, [u, o, i]), {
            field: {
                name: o,
                value: g,
                ..."boolean" == typeof u || b.disabled ? {
                    disabled: b.disabled || u
                } : {},
                onChange: t.default.useCallback(e => h.current.onChange({
                    target: {
                        value: n(e),
                        name: o
                    },
                    type: "change"
                }), [o]),
                onBlur: t.default.useCallback(() => h.current.onBlur({
                    target: {
                        value: d(i._formValues, o),
                        name: o
                    },
                    type: m
                }), [o, i]),
                ref: t.default.useCallback(e => {
                    let t = d(i._fields, o);
                    t && e && (t._f.ref = {
                        focus: () => e.focus(),
                        select: () => e.select(),
                        setCustomValidity: t => e.setCustomValidity(t),
                        reportValidity: () => e.reportValidity()
                    })
                }, [i._fields, o])
            },
            formState: b,
            fieldState: Object.defineProperties({}, {
                invalid: {
                    enumerable: !0,
                    get: () => !!d(b.errors, o)
                },
                isDirty: {
                    enumerable: !0,
                    get: () => !!d(b.dirtyFields, o)
                },
                isTouched: {
                    enumerable: !0,
                    get: () => !!d(b.touchedFields, o)
                },
                isValidating: {
                    enumerable: !0,
                    get: () => !!d(b.validatingFields, o)
                },
                error: {
                    enumerable: !0,
                    get: () => d(b.errors, o)
                }
            })
        }
    }(e)), "useForm", 0, function(e = {}) {
        let p = t.default.useRef(),
            g = t.default.useRef(),
            [b, h] = t.default.useState({
                isDirty: !1,
                isValidating: !1,
                isLoading: O(e.defaultValues),
                isSubmitted: !1,
                isSubmitting: !1,
                isSubmitSuccessful: !1,
                isValid: !1,
                submitCount: 0,
                dirtyFields: {},
                touchedFields: {},
                validatingFields: {},
                errors: e.errors || {},
                disabled: e.disabled || !1,
                defaultValues: O(e.defaultValues) ? void 0 : e.defaultValues
            });
        p.current || (p.current = {
            ... function(e = {}) {
                let t, p = {
                        ...el,
                        ...e
                    },
                    g = {
                        submitCount: 0,
                        isDirty: !1,
                        isLoading: O(p.defaultValues),
                        isValidating: !1,
                        isSubmitted: !1,
                        isSubmitting: !1,
                        isSubmitSuccessful: !1,
                        isValid: !1,
                        touchedFields: {},
                        dirtyFields: {},
                        validatingFields: {},
                        errors: p.errors || {},
                        disabled: p.disabled || !1
                    },
                    b = {},
                    h = (u(p.defaultValues) || u(p.values)) && a(p.defaultValues || p.values) || {},
                    y = p.shouldUnregister ? {} : a(h),
                    C = {
                        action: !1,
                        mount: !1,
                        watch: !1
                    },
                    x = {
                        mount: new Set,
                        unMount: new Set,
                        array: new Set,
                        watch: new Set
                    },
                    v = 0,
                    $ = {
                        isDirty: !1,
                        dirtyFields: !1,
                        validatingFields: !1,
                        touchedFields: !1,
                        isValidating: !1,
                        isValid: !1,
                        errors: !1
                    },
                    F = {
                        values: W(),
                        array: W(),
                        state: W()
                    },
                    S = j(p.mode),
                    k = j(p.reValidateMode),
                    E = "all" === p.criteriaMode,
                    D = async e => {
                        if ($.isValid || e) {
                            let e = p.resolver ? A((await P()).errors) : await q(b, !0);
                            e !== g.isValid && F.state.next({
                                isValid: e
                            })
                        }
                    }, I = (e, t) => {
                        ($.isValidating || $.validatingFields) && ((e || Array.from(x.mount)).forEach(e => {
                            e && (t ? f(g.validatingFields, e, t) : z(g.validatingFields, e))
                        }), F.state.next({
                            validatingFields: g.validatingFields,
                            isValidating: !A(g.validatingFields)
                        }))
                    }, R = (e, t, r, o) => {
                        let u = d(b, e);
                        if (u) {
                            let n = d(y, e, c(r) ? d(h, e) : r);
                            c(n) || o && o.defaultChecked || t ? f(y, e, t ? n : et(u._f)) : Z(e, n), C.mount && D()
                        }
                    }, N = (e, t, r, o, u) => {
                        let n = !1,
                            l = !1,
                            i = {
                                name: e
                            },
                            a = !!(d(b, e) && d(b, e)._f && d(b, e)._f.disabled);
                        if (!r || o) {
                            $.isDirty && (l = g.isDirty, g.isDirty = i.isDirty = K(), n = l !== i.isDirty);
                            let r = a || Q(d(h, e), t);
                            l = !!(!a && d(g.dirtyFields, e)), r || a ? z(g.dirtyFields, e) : f(g.dirtyFields, e, !0), i.dirtyFields = g.dirtyFields, n = n || $.dirtyFields && !r !== l
                        }
                        if (r) {
                            let t = d(g.touchedFields, e);
                            t || (f(g.touchedFields, e, r), i.touchedFields = g.touchedFields, n = n || $.touchedFields && t !== r)
                        }
                        return n && u && F.state.next(i), n ? i : {}
                    }, P = async e => {
                        I(e, !0);
                        let t = await p.resolver(y, p.context, ((e, t, r, o) => {
                            let u = {};
                            for (let r of e) {
                                let e = d(t, r);
                                e && f(u, r, e._f)
                            }
                            return {
                                criteriaMode: r,
                                names: [...e],
                                fields: u,
                                shouldUseNativeValidation: o
                            }
                        })(e || x.mount, b, p.criteriaMode, p.shouldUseNativeValidation));
                        return I(e), t
                    }, G = async e => {
                        let {
                            errors: t
                        } = await P(e);
                        if (e)
                            for (let r of e) {
                                let e = d(t, r);
                                e ? f(g.errors, r, e) : z(g.errors, r)
                            } else g.errors = t;
                        return t
                    }, q = async (e, t, r = {
                        valid: !0
                    }) => {
                        for (let o in e) {
                            let u = e[o];
                            if (u) {
                                let {
                                    _f: e,
                                    ...n
                                } = u;
                                if (e) {
                                    let n = x.array.has(e.name),
                                        l = u._f && eu(u._f);
                                    l && $.validatingFields && I([o], !0);
                                    let i = await U(u, y, E, p.shouldUseNativeValidation && !t, n);
                                    if (l && $.validatingFields && I([o]), i[e.name] && (r.valid = !1, t)) break;
                                    t || (d(i, e.name) ? n ? B(g.errors, i, e.name) : f(g.errors, e.name, i[e.name]) : z(g.errors, e.name))
                                }
                                A(n) || await q(n, t, r)
                            }
                        }
                        return r.valid
                    }, K = (e, t) => (e && t && f(y, e, t), !Q(ec(), h)), M = (e, t, r) => w(e, x, {
                        ...C.mount ? y : c(t) ? h : "string" == typeof e ? {
                            [e]: t
                        } : t
                    }, r, t), Z = (e, t, r = {}) => {
                        let u = d(b, e),
                            n = t;
                        if (u) {
                            let r = u._f;
                            r && (r.disabled || f(y, e, ee(t, r)), n = L(r.ref) && o(t) ? "" : t, "select-multiple" === r.ref.type ? [...r.ref.options].forEach(e => e.selected = n.includes(e.value)) : r.refs ? "checkbox" === r.ref.type ? r.refs.length > 1 ? r.refs.forEach(e => (!e.defaultChecked || !e.disabled) && (e.checked = Array.isArray(n) ? !!n.find(t => t === e.value) : n === e.value)) : r.refs[0] && (r.refs[0].checked = !!n) : r.refs.forEach(e => e.checked = e.value === n) : "file" === r.ref.type ? r.ref.value = "" : (r.ref.value = n, r.ref.type || F.values.next({
                                name: e,
                                values: {
                                    ...y
                                }
                            })))
                        }(r.shouldDirty || r.shouldTouch) && N(e, n, r.shouldTouch, r.shouldDirty, !0), r.shouldValidate && es(e)
                    }, J = (e, t, o) => {
                        for (let u in t) {
                            let n = t[u],
                                l = `${e}.${u}`,
                                i = d(b, l);
                            !x.array.has(e) && H(n) && (!i || i._f) || r(n) ? Z(l, n, o) : J(l, n, o)
                        }
                    }, eo = (e, t, r = {}) => {
                        let u = d(b, e),
                            n = x.array.has(e),
                            l = a(t);
                        f(y, e, l), n ? (F.array.next({
                            name: e,
                            values: {
                                ...y
                            }
                        }), ($.isDirty || $.dirtyFields) && r.shouldDirty && F.state.next({
                            name: e,
                            dirtyFields: X(h, y),
                            isDirty: K(e, l)
                        })) : !u || u._f || o(l) ? Z(e, l, r) : J(e, l, r), V(e, x) && F.state.next({
                            ...g
                        }), F.values.next({
                            name: C.mount ? e : void 0,
                            values: {
                                ...y
                            }
                        })
                    }, ei = async r => {
                        C.mount = !0;
                        let o = r.target,
                            u = o.name,
                            l = !0,
                            i = d(b, u),
                            a = e => {
                                l = Number.isNaN(e) || Q(e, d(y, u, e))
                            };
                        if (i) {
                            var s, c, h, T, w;
                            let C, O, L, R = o.type ? et(i._f) : n(r),
                                G = r.type === m || "focusout" === r.type,
                                K = !((L = i._f).mount && (L.required || L.min || L.max || L.maxLength || L.minLength || L.pattern || L.validate)) && !p.resolver && !d(g.errors, u) && !i._f.deps || (s = G, c = d(g.touchedFields, u), h = g.isSubmitted, T = k, !(w = S).isOnAll && (!h && w.isOnTouch ? !(c || s) : (h ? T.isOnBlur : w.isOnBlur) ? !s : (h ? !T.isOnChange : !w.isOnChange) || s)),
                                M = V(u, x, G);
                            f(y, u, R), G ? (i._f.onBlur && i._f.onBlur(r), t && t(0)) : i._f.onChange && i._f.onChange(r);
                            let W = N(u, R, G, !1),
                                H = !A(W) || M;
                            if (G || F.values.next({
                                    name: u,
                                    type: r.type,
                                    values: {
                                        ...y
                                    }
                                }), K) return $.isValid && ("onBlur" === e.mode ? G && D() : D()), H && F.state.next({
                                name: u,
                                ...M ? {} : W
                            });
                            if (!G && M && F.state.next({
                                    ...g
                                }), p.resolver) {
                                let {
                                    errors: e
                                } = await P([u]);
                                if (a(R), l) {
                                    let t = en(g.errors, b, u),
                                        r = en(e, b, t.name || u);
                                    C = r.error, u = r.name, O = A(e)
                                }
                            } else I([u], !0), C = (await U(i, y, E, p.shouldUseNativeValidation))[u], I([u]), a(R), l && (C ? O = !1 : $.isValid && (O = await q(b, !0)));
                            if (l) {
                                i._f.deps && es(i._f.deps);
                                var j = u,
                                    _ = O,
                                    B = C;
                                let r = d(g.errors, j),
                                    o = $.isValid && "boolean" == typeof _ && g.isValid !== _;
                                if (e.delayError && B) {
                                    let r;
                                    r = () => {
                                        f(g.errors, j, B), F.state.next({
                                            errors: g.errors
                                        })
                                    }, (t = e => {
                                        clearTimeout(v), v = setTimeout(r, e)
                                    })(e.delayError)
                                } else clearTimeout(v), t = null, B ? f(g.errors, j, B) : z(g.errors, j);
                                if ((B ? !Q(r, B) : r) || !A(W) || o) {
                                    let e = {
                                        ...W,
                                        ...o && "boolean" == typeof _ ? {
                                            isValid: _
                                        } : {},
                                        errors: g.errors,
                                        name: j
                                    };
                                    g = {
                                        ...g,
                                        ...e
                                    }, F.state.next(e)
                                }
                            }
                        }
                    }, ea = (e, t) => {
                        if (d(g.errors, t) && e.focus) return e.focus(), 1
                    }, es = async (e, t = {}) => {
                        let r, o, u = T(e);
                        if (p.resolver) {
                            let t = await G(c(e) ? e : u);
                            r = A(t), o = e ? !u.some(e => d(t, e)) : r
                        } else e ? ((o = (await Promise.all(u.map(async e => {
                            let t = d(b, e);
                            return await q(t && t._f ? {
                                [e]: t
                            } : t)
                        }))).every(Boolean)) || g.isValid) && D() : o = r = await q(b);
                        return F.state.next({
                            ..."string" != typeof e || $.isValid && r !== g.isValid ? {} : {
                                name: e
                            },
                            ...p.resolver || !e ? {
                                isValid: r
                            } : {},
                            errors: g.errors
                        }), t.shouldFocus && !o && _(b, ea, e ? u : x.mount), o
                    }, ec = e => {
                        let t = {
                            ...C.mount ? y : h
                        };
                        return c(e) ? t : "string" == typeof e ? d(t, e) : e.map(e => d(t, e))
                    }, ed = (e, t) => ({
                        invalid: !!d((t || g).errors, e),
                        isDirty: !!d((t || g).dirtyFields, e),
                        error: d((t || g).errors, e),
                        isValidating: !!d(g.validatingFields, e),
                        isTouched: !!d((t || g).touchedFields, e)
                    }), ep = (e, t, r) => {
                        let o = (d(b, e, {
                                _f: {}
                            })._f || {}).ref,
                            {
                                ref: u,
                                message: n,
                                type: l,
                                ...i
                            } = d(g.errors, e) || {};
                        f(g.errors, e, {
                            ...i,
                            ...t,
                            ref: o
                        }), F.state.next({
                            name: e,
                            errors: g.errors,
                            isValid: !1
                        }), r && r.shouldFocus && o && o.focus && o.focus()
                    }, ef = (e, t = {}) => {
                        for (let r of e ? T(e) : x.mount) x.mount.delete(r), x.array.delete(r), t.keepValue || (z(b, r), z(y, r)), t.keepError || z(g.errors, r), t.keepDirty || z(g.dirtyFields, r), t.keepTouched || z(g.touchedFields, r), t.keepIsValidating || z(g.validatingFields, r), p.shouldUnregister || t.keepDefaultValue || z(h, r);
                        F.values.next({
                            values: {
                                ...y
                            }
                        }), F.state.next({
                            ...g,
                            ...!t.keepDirty ? {} : {
                                isDirty: K()
                            }
                        }), t.keepIsValid || D()
                    }, em = ({
                        disabled: e,
                        name: t,
                        field: r,
                        fields: o,
                        value: u
                    }) => {
                        if ("boolean" == typeof e && C.mount || e) {
                            let n = e ? void 0 : c(u) ? et(r ? r._f : d(o, t)._f) : u;
                            f(y, t, n), N(t, n, !1, !1, !0)
                        }
                    }, eg = (t, r = {}) => {
                        let o = d(b, t),
                            u = "boolean" == typeof r.disabled || "boolean" == typeof e.disabled;
                        return (f(b, t, {
                            ...o || {},
                            _f: {
                                ...o && o._f ? o._f : {
                                    ref: {
                                        name: t
                                    }
                                },
                                name: t,
                                mount: !0,
                                ...r
                            }
                        }), x.mount.add(t), o) ? em({
                            field: o,
                            disabled: "boolean" == typeof r.disabled ? r.disabled : e.disabled,
                            name: t,
                            value: r.value
                        }) : R(t, !0, r.value), {
                            ...u ? {
                                disabled: r.disabled || e.disabled
                            } : {},
                            ...p.progressive ? {
                                required: !!r.required,
                                min: er(r.min),
                                max: er(r.max),
                                minLength: er(r.minLength),
                                maxLength: er(r.maxLength),
                                pattern: er(r.pattern)
                            } : {},
                            name: t,
                            onChange: ei,
                            onBlur: ei,
                            ref: e => {
                                if (e) {
                                    let u;
                                    eg(t, r), o = d(b, t);
                                    let n = c(e.value) && e.querySelectorAll && e.querySelectorAll("input,select,textarea")[0] || e,
                                        l = "radio" === (u = n).type || "checkbox" === u.type,
                                        i = o._f.refs || [];
                                    (l ? i.find(e => e === n) : n === o._f.ref) || (f(b, t, {
                                        _f: {
                                            ...o._f,
                                            ...l ? {
                                                refs: [...i.filter(Y), n, ...Array.isArray(d(h, t)) ? [{}] : []],
                                                ref: {
                                                    type: n.type,
                                                    name: t
                                                }
                                            } : {
                                                ref: n
                                            }
                                        }
                                    }), R(t, !1, void 0, n))
                                } else(o = d(b, t, {}))._f && (o._f.mount = !1), (p.shouldUnregister || r.shouldUnregister) && !(l(x.array, t) && C.action) && x.unMount.add(t)
                            }
                        }
                    }, eb = () => p.shouldFocusError && _(b, ea, x.mount), eh = (e, t) => async r => {
                        let o;
                        r && (r.preventDefault && r.preventDefault(), r.persist && r.persist());
                        let u = a(y);
                        if (F.state.next({
                                isSubmitting: !0
                            }), p.resolver) {
                            let {
                                errors: e,
                                values: t
                            } = await P();
                            g.errors = e, u = t
                        } else await q(b);
                        if (z(g.errors, "root"), A(g.errors)) {
                            F.state.next({
                                errors: {}
                            });
                            try {
                                await e(u, r)
                            } catch (e) {
                                o = e
                            }
                        } else t && await t({
                            ...g.errors
                        }, r), eb(), setTimeout(eb);
                        if (F.state.next({
                                isSubmitted: !0,
                                isSubmitting: !1,
                                isSubmitSuccessful: A(g.errors) && !o,
                                submitCount: g.submitCount + 1,
                                errors: g.errors
                            }), o) throw o
                    }, ey = (t, r = {}) => {
                        let o = t ? a(t) : h,
                            u = a(o),
                            n = A(t),
                            l = n ? h : u;
                        if (r.keepDefaultValues || (h = o), !r.keepValues) {
                            if (r.keepDirtyValues)
                                for (let e of x.mount) d(g.dirtyFields, e) ? f(l, e, d(y, e)) : eo(e, d(l, e));
                            else {
                                if (i && c(t))
                                    for (let e of x.mount) {
                                        let t = d(b, e);
                                        if (t && t._f) {
                                            let e = Array.isArray(t._f.refs) ? t._f.refs[0] : t._f.ref;
                                            if (L(e)) {
                                                let t = e.closest("form");
                                                if (t) {
                                                    t.reset();
                                                    break
                                                }
                                            }
                                        }
                                    }
                                b = {}
                            }
                            y = e.shouldUnregister ? r.keepDefaultValues ? a(h) : {} : a(l), F.array.next({
                                values: {
                                    ...l
                                }
                            }), F.values.next({
                                values: {
                                    ...l
                                }
                            })
                        }
                        x = {
                            mount: r.keepDirtyValues ? x.mount : new Set,
                            unMount: new Set,
                            array: new Set,
                            watch: new Set,
                            watchAll: !1,
                            focus: ""
                        }, C.mount = !$.isValid || !!r.keepIsValid || !!r.keepDirtyValues, C.watch = !!e.shouldUnregister, F.state.next({
                            submitCount: r.keepSubmitCount ? g.submitCount : 0,
                            isDirty: !n && (r.keepDirty ? g.isDirty : !!(r.keepDefaultValues && !Q(t, h))),
                            isSubmitted: !!r.keepIsSubmitted && g.isSubmitted,
                            dirtyFields: n ? {} : r.keepDirtyValues ? r.keepDefaultValues && y ? X(h, y) : g.dirtyFields : r.keepDefaultValues && t ? X(h, t) : r.keepDirty ? g.dirtyFields : {},
                            touchedFields: r.keepTouched ? g.touchedFields : {},
                            errors: r.keepErrors ? g.errors : {},
                            isSubmitSuccessful: !!r.keepIsSubmitSuccessful && g.isSubmitSuccessful,
                            isSubmitting: !1
                        })
                    }, eC = (e, t) => ey(O(e) ? e(y) : e, t);
                return {
                    control: {
                        register: eg,
                        unregister: ef,
                        getFieldState: ed,
                        handleSubmit: eh,
                        setError: ep,
                        _executeSchema: P,
                        _getWatch: M,
                        _getDirty: K,
                        _updateValid: D,
                        _removeUnmounted: () => {
                            for (let e of x.unMount) {
                                let t = d(b, e);
                                t && (t._f.refs ? t._f.refs.every(e => !Y(e)) : !Y(t._f.ref)) && ef(e)
                            }
                            x.unMount = new Set
                        },
                        _updateFieldArray: (e, t = [], r, o, u = !0, n = !0) => {
                            if (o && r) {
                                if (C.action = !0, n && Array.isArray(d(b, e))) {
                                    let t = r(d(b, e), o.argA, o.argB);
                                    u && f(b, e, t)
                                }
                                if (n && Array.isArray(d(g.errors, e))) {
                                    let t, n = r(d(g.errors, e), o.argA, o.argB);
                                    u && f(g.errors, e, n), s(d(t = g.errors, e)).length || z(t, e)
                                }
                                if ($.touchedFields && n && Array.isArray(d(g.touchedFields, e))) {
                                    let t = r(d(g.touchedFields, e), o.argA, o.argB);
                                    u && f(g.touchedFields, e, t)
                                }
                                $.dirtyFields && (g.dirtyFields = X(h, y)), F.state.next({
                                    name: e,
                                    isDirty: K(e, t),
                                    dirtyFields: g.dirtyFields,
                                    errors: g.errors,
                                    isValid: g.isValid
                                })
                            } else f(y, e, t)
                        },
                        _updateDisabledField: em,
                        _getFieldArray: t => s(d(C.mount ? y : h, t, e.shouldUnregister ? d(h, t, []) : [])),
                        _reset: ey,
                        _resetDefaultValues: () => O(p.defaultValues) && p.defaultValues().then(e => {
                            eC(e, p.resetOptions), F.state.next({
                                isLoading: !1
                            })
                        }),
                        _updateFormState: e => {
                            g = {
                                ...g,
                                ...e
                            }
                        },
                        _disableForm: e => {
                            "boolean" == typeof e && (F.state.next({
                                disabled: e
                            }), _(b, (t, r) => {
                                let o = d(b, r);
                                o && (t.disabled = o._f.disabled || e, Array.isArray(o._f.refs) && o._f.refs.forEach(t => {
                                    t.disabled = o._f.disabled || e
                                }))
                            }, 0, !1))
                        },
                        _subjects: F,
                        _proxyFormState: $,
                        _setErrors: e => {
                            g.errors = e, F.state.next({
                                errors: g.errors,
                                isValid: !1
                            })
                        },
                        get _fields() {
                            return b
                        },
                        get _formValues() {
                            return y
                        },
                        get _state() {
                            return C
                        },
                        set _state(value) {
                            C = value
                        },
                        get _defaultValues() {
                            return h
                        },
                        get _names() {
                            return x
                        },
                        set _names(value) {
                            x = value
                        },
                        get _formState() {
                            return g
                        },
                        set _formState(value) {
                            g = value
                        },
                        get _options() {
                            return p
                        },
                        set _options(value) {
                            p = {
                                ...p,
                                ...value
                            }
                        }
                    },
                    trigger: es,
                    register: eg,
                    handleSubmit: eh,
                    watch: (e, t) => O(e) ? F.values.subscribe({
                        next: r => e(M(void 0, t), r)
                    }) : M(e, t, !0),
                    setValue: eo,
                    getValues: ec,
                    reset: eC,
                    resetField: (e, t = {}) => {
                        d(b, e) && (c(t.defaultValue) ? eo(e, a(d(h, e))) : (eo(e, t.defaultValue), f(h, e, a(t.defaultValue))), t.keepTouched || z(g.touchedFields, e), t.keepDirty || (z(g.dirtyFields, e), g.isDirty = t.defaultValue ? K(e, a(d(h, e))) : K()), !t.keepError && (z(g.errors, e), $.isValid && D()), F.state.next({
                            ...g
                        }))
                    },
                    clearErrors: e => {
                        e && T(e).forEach(e => z(g.errors, e)), F.state.next({
                            errors: e ? g.errors : {}
                        })
                    },
                    unregister: ef,
                    setError: ep,
                    setFocus: (e, t = {}) => {
                        let r = d(b, e),
                            o = r && r._f;
                        if (o) {
                            let e = o.refs ? o.refs[0] : o.ref;
                            e.focus && (e.focus(), t.shouldSelect && e.select())
                        }
                    },
                    getFieldState: ed
                }
            }(e),
            formState: b
        });
        let y = p.current.control;
        return y._options = e, k({
            subject: y._subjects.state,
            next: e => {
                F(e, y._proxyFormState, y._updateFormState, !0) && h({
                    ...y._formState
                })
            }
        }), t.default.useEffect(() => y._disableForm(e.disabled), [y, e.disabled]), t.default.useEffect(() => {
            if (y._proxyFormState.isDirty) {
                let e = y._getDirty();
                e !== b.isDirty && y._subjects.state.next({
                    isDirty: e
                })
            }
        }, [y, b.isDirty]), t.default.useEffect(() => {
            e.values && !Q(e.values, g.current) ? (y._reset(e.values, y._options.resetOptions), g.current = e.values, h(e => ({
                ...e
            }))) : y._resetDefaultValues()
        }, [e.values, y]), t.default.useEffect(() => {
            e.errors && y._setErrors(e.errors)
        }, [e.errors, y]), t.default.useEffect(() => {
            y._state.mount || (y._updateValid(), y._state.mount = !0), y._state.watch && (y._state.watch = !1, y._subjects.state.next({
                ...y._formState
            })), y._removeUnmounted()
        }), t.default.useEffect(() => {
            e.shouldUnregister && y._subjects.values.next({
                values: y._getWatch()
            })
        }, [e.shouldUnregister, y]), p.current.formState = $(b, y), p.current
    }, "useWatch", 0, E])
}, 222061, 497492, 396241, 829483, 662380, 179695, e => {
    "use strict";
    var t, r, o, u = e.i(500783),
        n = e.i(3931),
        l = e.i(968651),
        i = e.i(620174),
        a = e.i(474029);

    function s(e, t, r) {
        return !e || 0 === e.length || e.every(({
            fieldId: e,
            value: o
        }, u) => (void 0 !== t[u] ? t[u] : r ? r(e) : void 0) === o)
    }

    function c(e, t = !1) {
        let r = new URLSearchParams(window.location.search);
        return e.reduce((e, o) => {
            let u = r.get(o);
            return e[o] = u || (t ? function(e) {
                if ("u" < typeof document) return "";
                let t = document.cookie.split("; ").find(t => t.startsWith(`${e}=`));
                return t ? decodeURIComponent(t.split("=")[1] ?? "") : ""
            }(o) : ""), e
        }, {})
    }

    function d(e, t) {
        return !e || 0 === e.length || !!t && e.some(e => e.countryCode === t)
    }
    e.s(["checkIsGrowForm", 0, function() {
        return "true" === new URLSearchParams(window.location.search).get("isGrowForm")
    }, "cleanData", 0, e => Object.entries(e).filter(([e, t]) => void 0 !== t).reduce((e, [t, r]) => (e[t] = r, e), {}), "getAlwaysSendOnData", 0, (e, t, r) => {
        let o = {};
        return e?.forEach(e => {
            if (e.alwaysSendOn) {
                let u = e.countryRestriction && e.countryRestriction.length > 0 && !r || e.countryRestriction?.some(e => e.countryCode === r) || !d(e.visibleCountry, r),
                    n = t(e.formFieldId);
                u || !u && !0 === n ? o[e.formFieldId] = !0 : u || n || (o[e.formFieldId] = "")
            }
        }), o
    }, "getFilteredQueryParams", 0, function(e = [], t = !1) {
        let r = c(Array.from(new URLSearchParams(window.location.search).keys()));
        return t ? Object.fromEntries(Object.entries(r).filter(([t]) => !e.includes(t))) : r
    }, "getQueryParams", 0, c, "isCountryVisible", 0, d], 497492), e.s(["default", 0, e => {
        let {
            inputType: t,
            formFieldId: r,
            label: o,
            helpText: c,
            errorText: p,
            warningText: f,
            className: m,
            placeholder: g,
            disabled: b,
            defaultValue: h,
            isRequired: y,
            requiredText: C = "Required",
            control: x,
            visibleConditions: v,
            getValues: $,
            visibleCountry: A,
            isNumericalOnly: F,
            restrictedDomainsToggle: T,
            restrictedDomains: S,
            restrictedDomainErrorText: k
        } = e, w = {
            label: o,
            requiredText: C,
            className: m,
            placeholder: g,
            disabled: b,
            isRequired: y,
            for: r,
            name: r,
            id: r
        }, E = (0, a.useWatch)({
            control: x,
            name: v?.map(({
                fieldId: e
            }) => e) || []
        }), D = s(v, E, $);
        if ((0, n.useEffect)(() => {
                D || e.control.unregister(e.formFieldId)
            }, [D, e.control, e.formFieldId]), !d(A, e.countryCode) || !D) return null;
        switch (t) {
            case "text":
                return (0, u.jsx)(a.Controller, {
                    name: r,
                    control: e.control,
                    rules: {
                        required: y,
                        ...F && {
                            pattern: /^(\+|[0-9])[0-9-]*$/
                        }
                    },
                    render: ({
                        field: e,
                        fieldState: t
                    }) => (0, u.jsx)(i.default, {
                        ...w,
                        ...e,
                        value: e.value || "",
                        ...void 0 !== t.error && {
                            helperText: (0, l.default)(c, p, f, void 0 !== t.error, !1)
                        },
                        hasError: void 0 !== t.error
                    })
                });
            case "longtext":
                return (0, u.jsx)(a.Controller, {
                    name: r,
                    control: e.control,
                    rules: {
                        required: y
                    },
                    render: ({
                        field: e,
                        fieldState: t
                    }) => (0, u.jsx)(i.default, {
                        isTextArea: !0,
                        ...w,
                        ...e,
                        value: e.value || "",
                        ...void 0 !== t.error && {
                            helperText: (0, l.default)(c, p, f, void 0 !== t.error, !1)
                        },
                        hasError: void 0 !== t.error
                    })
                });
            case "email":
                return (0, u.jsx)(a.Controller, {
                    rules: {
                        required: y,
                        pattern: {
                            value: /^[\w.-]+@([\w-]+\.)+[\w-]{2,7}$/i,
                            message: p || "Invalid email format"
                        },
                        ...T && S && {
                            validate: e => !S.split(",").map(e => e.trim()).filter(e => e.length > 0).find(t => e.toLowerCase().includes(t.toLowerCase())) || k || "Input contains restricted domain"
                        }
                    },
                    name: r,
                    control: e.control,
                    render: ({
                        field: e,
                        fieldState: t
                    }) => (0, u.jsx)(i.default, {
                        ...w,
                        ...e,
                        value: e.value || "",
                        ...void 0 !== t.error && {
                            helperText: (0, l.default)(c, t.error.message || p, f, void 0 !== t.error, !1)
                        },
                        hasError: void 0 !== t.error
                    })
                });
            case "hidden":
                return (0, u.jsx)(a.Controller, {
                    defaultValue: h,
                    name: r,
                    control: e.control,
                    render: () => (0, u.jsx)("input", {
                        id: r,
                        type: t,
                        name: r,
                        value: h
                    })
                });
            default:
                return null
        }
    }], 222061);
    var p = ((t = {}).US = "US", t.CA = "CA", t.CN = "CN", t);
    (r = {}).US = "stateUS", r.CA = "stateCA";
    var f = ((o = {}).TOS = "legalToS", o.PRIVACY = "legalPP", o.MARKETING_CN = "legalCN", o);
    e.s(["COUNTRY_CODE", 0, "countryCode", "COUNTRY_CODES", () => p, "LEGAL", () => f], 396241);
    var m = e.i(722990),
        g = e.i(722978),
        b = e.i(576508),
        h = e.i(957885),
        y = e.i(900448),
        C = e.i(183062),
        x = e.i(166010);
    let v = (0, n.forwardRef)(function(e, t) {
        let {
            children: r,
            isIndeterminate: o = !1,
            isDisabled: l = !1,
            isSelected: i = !1,
            isRequired: a = !1,
            hasError: s = !1,
            requiredText: c = "Required"
        } = e, d = (0, y.useToggleState)(e), [p, f] = (0, n.useState)(o), m = (0, x.useObjectRef)(t), {
            inputProps: v
        } = (0, h.useCheckbox)(e, d, m), {
            isFocusVisible: $,
            focusProps: A
        } = (0, C.useFocusRing)();
        (0, n.useEffect)(() => {
            i && f(!1)
        }, [i]);
        let F = (0, g.default)("group flex text-small relative", {
                "pointer-events-none": l
            }, {
                "hover:cursor-pointer": !l
            }),
            T = (0, g.default)({
                "stroke-gray-400 dark:stroke-gray-500 group-hover:stroke-gray-800 dark:group-hover:stroke-white fill-transparent transition-colors duration-100 group-hover:fill-gray-200 dark:group-hover:fill-gray-800": !i && !p && !l && !$
            }, {
                "stroke-blue-dark group-hover:fill-blue fill-blue": (i || p) && !l
            }, {
                "fill-gray-200 stroke-gray-400 dark:fill-gray-800 dark:stroke-gray-700": l
            }, {
                "fill-gray-200 dark:fill-gray-800 stroke-gray-800 dark:stroke-white": $ && !i && !p
            }, {
                "stroke-gray-400 dark:stroke-gray-500": a && !i && !$
            }, {
                "stroke-red dark:stroke-red": a && s && !i && !$
            }),
            S = (0, g.default)({
                "fill-white": i && !l,
                "fill-gray-400 dark:!fill-gray-500": l
            }),
            k = (0, g.default)({
                "fill-white": !l
            }, {
                "fill-gray-400 dark:fill-gray-500": l
            }),
            w = (0, g.default)("ml-1 text-sm", {
                "text-gray-400 dark:text-gray-400": i
            }, {
                "text-gray-400": s && !i
            }, {
                "text-gray-400": !s && !i
            });
        return (0, u.jsxs)("label", {
            className: F,
            children: [(0, u.jsx)(b.VisuallyHidden, {
                children: (0, u.jsx)("input", {
                    ...v,
                    ...A,
                    ref: m,
                    checked: i
                })
            }), (0, u.jsxs)("svg", {
                width: 24,
                height: 24,
                "aria-hidden": "true",
                className: "mr-2 min-w-[24px]",
                children: [(0, u.jsx)("rect", {
                    x: 4,
                    y: 4,
                    width: 16,
                    height: 16,
                    strokeWidth: 1,
                    rx: 4,
                    ry: 4,
                    className: T
                }), i && (0, u.jsx)("path", {
                    transform: "translate(7 7)",
                    d: `M3.788 9A.999.999 0 0 1 3 8.615l-2.288-3a1 1 0 1 1
            1.576-1.23l1.5 1.991 3.924-4.991a1 1 0 1 1 1.576 1.23l-4.712
            6A.999.999 0 0 1 3.788 9z`,
                    className: S
                }), p && (0, u.jsx)("rect", {
                    x: 7,
                    y: 11,
                    width: 10,
                    height: 2,
                    className: k
                }), $ && (0, u.jsx)("rect", {
                    x: 1,
                    y: 1,
                    width: 22,
                    height: 22,
                    fill: "none",
                    strokeWidth: 1.5,
                    className: "stroke-blue-dark",
                    rx: 4,
                    ry: 4
                })]
            }), (0, u.jsxs)("div", {
                className: "flex w-full justify-between",
                children: [r, a && (0, u.jsx)("div", {
                    className: w,
                    children: c
                })]
            })]
        })
    });
    var $ = e.i(805518);
    e.s(["default", 0, e => {
        let t = e?.chained?.map(e => e.dependant) || [],
            r = e.formFieldId === f.TOS && e.isRequired || e.formFieldId === f.PRIVACY && e.isRequired || e.countryCode === p.CN && e.formFieldId === f.MARKETING_CN && e.isRequired || e.isRequired,
            [o, l] = (0, n.useState)(!1),
            {
                formFieldId: i,
                checkboxLabel: s,
                checkboxPlainTextLabel: c,
                countryRestriction: g,
                visibleCountry: b
            } = e;
        return g && g?.length > 0 && !e.countryCode || g?.find(t => t.countryCode === e.countryCode) || !d(b, e.countryCode) ? null : (0, u.jsx)(a.Controller, {
            name: i,
            control: e.control,
            rules: {
                required: r
            },
            render: ({
                field: {
                    onChange: r,
                    ...n
                },
                fieldState: a,
                formState: d
            }) => (0, u.jsxs)(u.Fragment, {
                children: [!t.some(t => t === e.formFieldId) && (0, u.jsx)(v, {
                    requiredText: e.requiredText,
                    hasError: void 0 !== a.error,
                    isRequired: e.isRequired,
                    ...n,
                    ...a,
                    ...d,
                    onChange: e => {
                        r(e), l(!o)
                    },
                    isSelected: o,
                    id: i,
                    name: i,
                    children: (0, u.jsxs)($.default, {
                        className: "font-medium [a]:underline",
                        children: [s && (0, u.jsx)(m.PortableText, {
                            value: s,
                            components: s
                        }), c && c?.checkboxLabelText]
                    })
                }), e.chained && e.chained.map((t, c) => {
                    if (t.value === e.countryCode && t.dependant === e.formFieldId) return (0, u.jsx)(v, {
                        requiredText: e.requiredText,
                        hasError: void 0 !== a.error,
                        ...n,
                        ...a,
                        ...d,
                        onChange: e => {
                            r(e), l(!o)
                        },
                        isSelected: o,
                        id: i,
                        name: i,
                        children: (0, u.jsx)($.default, {
                            className: "[a]:underline",
                            children: (0, u.jsx)(m.PortableText, {
                                value: s,
                                components: s
                            })
                        })
                    }, c)
                })]
            })
        })
    }], 829483);
    var A = e.i(481392),
        F = {};
    F = {
        "ar-AE": {
            buttonLabel: "عرض المقترحات",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{62E}\u{64A}\u{627}\u{631}`,other:()=>`${t.number(e.optionCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`})} \u{645}\u{62A}\u{627}\u{62D}\u{629}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{627}\u{644}\u{645}\u{62C}\u{645}\u{648}\u{639}\u{629} \u{627}\u{644}\u{645}\u{62F}\u{62E}\u{644}\u{629} ${e.groupTitle}, \u{645}\u{639} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{62E}\u{64A}\u{627}\u{631}`,other:()=>`${t.number(e.groupCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", محدد",other:""},e.isSelected)}`,
            listboxLabel: "مقترحات",
            selectedAnnouncement: e => `${e.optionText}\u{60C} \u{645}\u{62D}\u{62F}\u{62F}`
        },
        "bg-BG": {
            buttonLabel: "Покажи предложения",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{43E}\u{43F}\u{446}\u{438}\u{44F}`,other:()=>`${t.number(e.optionCount)} \u{43E}\u{43F}\u{446}\u{438}\u{438}`})} \u{43D}\u{430} \u{440}\u{430}\u{437}\u{43F}\u{43E}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{435}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{412}\u{44A}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{430} \u{433}\u{440}\u{443}\u{43F}\u{430} ${e.groupTitle}, \u{441} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{43E}\u{43F}\u{446}\u{438}\u{44F}`,other:()=>`${t.number(e.groupCount)} \u{43E}\u{43F}\u{446}\u{438}\u{438}`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", избрани",other:""},e.isSelected)}`,
            listboxLabel: "Предложения",
            selectedAnnouncement: e => `${e.optionText}, \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`
        },
        "cs-CZ": {
            buttonLabel: "Zobrazit doporučení",
            countAnnouncement: (e, t) => `K dispozici ${t.plural(e.optionCount,{one:()=>`je ${t.number(e.optionCount)} mo\u{17E}nost`,other:()=>`jsou/je ${t.number(e.optionCount)} mo\u{17E}nosti/-\xed`})}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Zadan\xe1 skupina \u{201E}${e.groupTitle}\u{201C} ${t.plural(e.groupCount,{one:()=>`s ${t.number(e.groupCount)} mo\u{17E}nost\xed`,other:()=>`se ${t.number(e.groupCount)} mo\u{17E}nostmi`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:" (vybráno)",other:""},e.isSelected)}`,
            listboxLabel: "Návrhy",
            selectedAnnouncement: e => `${e.optionText}, vybr\xe1no`
        },
        "da-DK": {
            buttonLabel: "Vis forslag",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} mulighed tilg\xe6ngelig`,other:()=>`${t.number(e.optionCount)} muligheder tilg\xe6ngelige`})}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Angivet gruppe ${e.groupTitle}, med ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} mulighed`,other:()=>`${t.number(e.groupCount)} muligheder`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", valgt",other:""},e.isSelected)}`,
            listboxLabel: "Forslag",
            selectedAnnouncement: e => `${e.optionText}, valgt`
        },
        "de-DE": {
            buttonLabel: "Empfehlungen anzeigen",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} Option`,other:()=>`${t.number(e.optionCount)} Optionen`})} verf\xfcgbar.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Eingetretene Gruppe ${e.groupTitle}, mit ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} Option`,other:()=>`${t.number(e.groupCount)} Optionen`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", ausgewählt",other:""},e.isSelected)}`,
            listboxLabel: "Empfehlungen",
            selectedAnnouncement: e => `${e.optionText}, ausgew\xe4hlt`
        },
        "el-GR": {
            buttonLabel: "Προβολή προτάσεων",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}`,other:()=>`${t.number(e.optionCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AD}\u{3C2} `})} \u{3B4}\u{3B9}\u{3B1}\u{3B8}\u{3AD}\u{3C3}\u{3B9}\u{3BC}\u{3B5}\u{3C2}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{395}\u{3B9}\u{3C3}\u{3B1}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3BF}\u{3BC}\u{3AC}\u{3B4}\u{3B1} ${e.groupTitle}, \u{3BC}\u{3B5} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}`,other:()=>`${t.number(e.groupCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AD}\u{3C2}`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", επιλεγμένο",other:""},e.isSelected)}`,
            listboxLabel: "Προτάσεις",
            selectedAnnouncement: e => `${e.optionText}, \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5}`
        },
        "en-US": {
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Entered group ${e.groupTitle}, with ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} option`,other:()=>`${t.number(e.groupCount)} options`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", selected",other:""},e.isSelected)}`,
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} option`,other:()=>`${t.number(e.optionCount)} options`})} available.`,
            selectedAnnouncement: e => `${e.optionText}, selected`,
            buttonLabel: "Show suggestions",
            listboxLabel: "Suggestions"
        },
        "es-ES": {
            buttonLabel: "Mostrar sugerencias",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opci\xf3n`,other:()=>`${t.number(e.optionCount)} opciones`})} disponible(s).`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Se ha unido al grupo ${e.groupTitle}, con ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opci\xf3n`,other:()=>`${t.number(e.groupCount)} opciones`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", seleccionado",other:""},e.isSelected)}`,
            listboxLabel: "Sugerencias",
            selectedAnnouncement: e => `${e.optionText}, seleccionado`
        },
        "et-EE": {
            buttonLabel: "Kuva soovitused",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} valik`,other:()=>`${t.number(e.optionCount)} valikud`})} saadaval.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Sisestatud r\xfchm ${e.groupTitle}, valikuga ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} valik`,other:()=>`${t.number(e.groupCount)} valikud`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", valitud",other:""},e.isSelected)}`,
            listboxLabel: "Soovitused",
            selectedAnnouncement: e => `${e.optionText}, valitud`
        },
        "fi-FI": {
            buttonLabel: "Näytä ehdotukset",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} vaihtoehto`,other:()=>`${t.number(e.optionCount)} vaihtoehdot`})} saatavilla.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Mentiin ryhm\xe4\xe4n ${e.groupTitle}, ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} vaihtoehdon`,other:()=>`${t.number(e.groupCount)} vaihtoehdon`})} kanssa.`,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", valittu",other:""},e.isSelected)}`,
            listboxLabel: "Ehdotukset",
            selectedAnnouncement: e => `${e.optionText}, valittu`
        },
        "fr-FR": {
            buttonLabel: "Afficher les suggestions",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} option`,other:()=>`${t.number(e.optionCount)} options`})} disponible(s).`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Groupe ${e.groupTitle} rejoint, avec ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} option`,other:()=>`${t.number(e.groupCount)} options`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", sélectionné(s)",other:""},e.isSelected)}`,
            listboxLabel: "Suggestions",
            selectedAnnouncement: e => `${e.optionText}, s\xe9lectionn\xe9`
        },
        "he-IL": {
            buttonLabel: "הצג הצעות",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`\u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5EA} ${t.number(e.optionCount)}`,other:()=>`${t.number(e.optionCount)} \u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5D9}\u{5D5}\u{5EA}`})} \u{5D1}\u{5DE}\u{5E6}\u{5D1} \u{5D6}\u{5DE}\u{5D9}\u{5DF}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{5E0}\u{5DB}\u{5E0}\u{5E1} \u{5DC}\u{5E7}\u{5D1}\u{5D5}\u{5E6}\u{5D4} ${e.groupTitle}, \u{5E2}\u{5DD} ${t.plural(e.groupCount,{one:()=>`\u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5EA} ${t.number(e.groupCount)}`,other:()=>`${t.number(e.groupCount)} \u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5D9}\u{5D5}\u{5EA}`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", נבחר",other:""},e.isSelected)}`,
            listboxLabel: "הצעות",
            selectedAnnouncement: e => `${e.optionText}, \u{5E0}\u{5D1}\u{5D7}\u{5E8}`
        },
        "hr-HR": {
            buttonLabel: "Prikaži prijedloge",
            countAnnouncement: (e, t) => `Dostupno jo\u{161}: ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcija`,other:()=>`${t.number(e.optionCount)} opcije/a`})}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Unesena skupina ${e.groupTitle}, s ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opcijom`,other:()=>`${t.number(e.groupCount)} opcije/a`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", odabranih",other:""},e.isSelected)}`,
            listboxLabel: "Prijedlozi",
            selectedAnnouncement: e => `${e.optionText}, odabrano`
        },
        "hu-HU": {
            buttonLabel: "Javaslatok megjelenítése",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} lehet\u{151}s\xe9g`,other:()=>`${t.number(e.optionCount)} lehet\u{151}s\xe9g`})} \xe1ll rendelkez\xe9sre.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Bel\xe9pett a(z) ${e.groupTitle} csoportba, amely ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} lehet\u{151}s\xe9get`,other:()=>`${t.number(e.groupCount)} lehet\u{151}s\xe9get`})} tartalmaz. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", kijelölve",other:""},e.isSelected)}`,
            listboxLabel: "Javaslatok",
            selectedAnnouncement: e => `${e.optionText}, kijel\xf6lve`
        },
        "it-IT": {
            buttonLabel: "Mostra suggerimenti",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opzione disponibile`,other:()=>`${t.number(e.optionCount)} opzioni disponibili`})}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Ingresso nel gruppo ${e.groupTitle}, con ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opzione`,other:()=>`${t.number(e.groupCount)} opzioni`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", selezionato",other:""},e.isSelected)}`,
            listboxLabel: "Suggerimenti",
            selectedAnnouncement: e => `${e.optionText}, selezionato`
        },
        "ja-JP": {
            buttonLabel: "候補を表示",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`,other:()=>`${t.number(e.optionCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`})}\u{3092}\u{5229}\u{7528}\u{3067}\u{304D}\u{307E}\u{3059}\u{3002}`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{5165}\u{529B}\u{3055}\u{308C}\u{305F}\u{30B0}\u{30EB}\u{30FC}\u{30D7} ${e.groupTitle}\u{3001}${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`,other:()=>`${t.number(e.groupCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`})}\u{3092}\u{542B}\u{3080}\u{3002}`,other:""},e.isGroupChange)}${e.optionText}${t.select({true:"、選択済み",other:""},e.isSelected)}`,
            listboxLabel: "候補",
            selectedAnnouncement: e => `${e.optionText}\u{3001}\u{9078}\u{629E}\u{6E08}\u{307F}`
        },
        "ko-KR": {
            buttonLabel: "제안 사항 표시",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)}\u{AC1C} \u{C635}\u{C158}`,other:()=>`${t.number(e.optionCount)}\u{AC1C} \u{C635}\u{C158}`})}\u{C744} \u{C0AC}\u{C6A9}\u{D560} \u{C218} \u{C788}\u{C2B5}\u{B2C8}\u{B2E4}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{C785}\u{B825}\u{D55C} \u{ADF8}\u{B8F9} ${e.groupTitle}, ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)}\u{AC1C} \u{C635}\u{C158}`,other:()=>`${t.number(e.groupCount)}\u{AC1C} \u{C635}\u{C158}`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", 선택됨",other:""},e.isSelected)}`,
            listboxLabel: "제안",
            selectedAnnouncement: e => `${e.optionText}, \u{C120}\u{D0DD}\u{B428}`
        },
        "lt-LT": {
            buttonLabel: "Rodyti pasiūlymus",
            countAnnouncement: (e, t) => `Yra ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} parinktis`,other:()=>`${t.number(e.optionCount)} parinktys (-i\u{173})`})}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{12E}vesta grup\u{117} ${e.groupTitle}, su ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} parinktimi`,other:()=>`${t.number(e.groupCount)} parinktimis (-i\u{173})`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", pasirinkta",other:""},e.isSelected)}`,
            listboxLabel: "Pasiūlymai",
            selectedAnnouncement: e => `${e.optionText}, pasirinkta`
        },
        "lv-LV": {
            buttonLabel: "Rādīt ieteikumus",
            countAnnouncement: (e, t) => `Pieejamo opciju skaits: ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcija`,other:()=>`${t.number(e.optionCount)} opcijas`})}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Ievad\u{12B}ta grupa ${e.groupTitle}, ar ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opciju`,other:()=>`${t.number(e.groupCount)} opcij\u{101}m`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", atlasīta",other:""},e.isSelected)}`,
            listboxLabel: "Ieteikumi",
            selectedAnnouncement: e => `${e.optionText}, atlas\u{12B}ta`
        },
        "nb-NO": {
            buttonLabel: "Vis forslag",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} alternativ`,other:()=>`${t.number(e.optionCount)} alternativer`})} finnes.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Angitt gruppe ${e.groupTitle}, med ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} alternativ`,other:()=>`${t.number(e.groupCount)} alternativer`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", valgt",other:""},e.isSelected)}`,
            listboxLabel: "Forslag",
            selectedAnnouncement: e => `${e.optionText}, valgt`
        },
        "nl-NL": {
            buttonLabel: "Suggesties weergeven",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} optie`,other:()=>`${t.number(e.optionCount)} opties`})} beschikbaar.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Groep ${e.groupTitle} ingevoerd met ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} optie`,other:()=>`${t.number(e.groupCount)} opties`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", geselecteerd",other:""},e.isSelected)}`,
            listboxLabel: "Suggesties",
            selectedAnnouncement: e => `${e.optionText}, geselecteerd`
        },
        "pl-PL": {
            buttonLabel: "Wyświetlaj sugestie",
            countAnnouncement: (e, t) => `dost\u{119}pna/dost\u{119}pne(-nych) ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcja`,other:()=>`${t.number(e.optionCount)} opcje(-i)`})}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Do\u{142}\u{105}czono do grupy ${e.groupTitle}, z ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opcj\u{105}`,other:()=>`${t.number(e.groupCount)} opcjami`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", wybrano",other:""},e.isSelected)}`,
            listboxLabel: "Sugestie",
            selectedAnnouncement: e => `${e.optionText}, wybrano`
        },
        "pt-BR": {
            buttonLabel: "Mostrar sugestões",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} op\xe7\xe3o`,other:()=>`${t.number(e.optionCount)} op\xe7\xf5es`})} dispon\xedvel.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Grupo inserido ${e.groupTitle}, com ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} op\xe7\xe3o`,other:()=>`${t.number(e.groupCount)} op\xe7\xf5es`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", selecionado",other:""},e.isSelected)}`,
            listboxLabel: "Sugestões",
            selectedAnnouncement: e => `${e.optionText}, selecionado`
        },
        "pt-PT": {
            buttonLabel: "Apresentar sugestões",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} op\xe7\xe3o`,other:()=>`${t.number(e.optionCount)} op\xe7\xf5es`})} dispon\xedvel.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Grupo introduzido ${e.groupTitle}, com ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} op\xe7\xe3o`,other:()=>`${t.number(e.groupCount)} op\xe7\xf5es`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", selecionado",other:""},e.isSelected)}`,
            listboxLabel: "Sugestões",
            selectedAnnouncement: e => `${e.optionText}, selecionado`
        },
        "ro-RO": {
            buttonLabel: "Afișare sugestii",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} op\u{21B}iune`,other:()=>`${t.number(e.optionCount)} op\u{21B}iuni`})} disponibile.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Grup ${e.groupTitle} introdus, cu ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} op\u{21B}iune`,other:()=>`${t.number(e.groupCount)} op\u{21B}iuni`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", selectat",other:""},e.isSelected)}`,
            listboxLabel: "Sugestii",
            selectedAnnouncement: e => `${e.optionText}, selectat`
        },
        "ru-RU": {
            buttonLabel: "Показать предложения",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,other:()=>`${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{43E}\u{432}`})} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{412}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{43D}\u{430}\u{44F} \u{433}\u{440}\u{443}\u{43F}\u{43F}\u{430} ${e.groupTitle}, \u{441} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{43E}\u{43C}`,other:()=>`${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{430}\u{43C}\u{438}`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", выбранными",other:""},e.isSelected)}`,
            listboxLabel: "Предложения",
            selectedAnnouncement: e => `${e.optionText}, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E}`
        },
        "sk-SK": {
            buttonLabel: "Zobraziť návrhy",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} mo\u{17E}nos\u{165}`,other:()=>`${t.number(e.optionCount)} mo\u{17E}nosti/-\xed`})} k dispoz\xedcii.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Zadan\xe1 skupina ${e.groupTitle}, s ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} mo\u{17E}nos\u{165}ou`,other:()=>`${t.number(e.groupCount)} mo\u{17E}nos\u{165}ami`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", vybraté",other:""},e.isSelected)}`,
            listboxLabel: "Návrhy",
            selectedAnnouncement: e => `${e.optionText}, vybrat\xe9`
        },
        "sl-SI": {
            buttonLabel: "Prikaži predloge",
            countAnnouncement: (e, t) => `Na voljo je ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcija`,other:()=>`${t.number(e.optionCount)} opcije`})}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Vnesena skupina ${e.groupTitle}, z ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opcija`,other:()=>`${t.number(e.groupCount)} opcije`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", izbrano",other:""},e.isSelected)}`,
            listboxLabel: "Predlogi",
            selectedAnnouncement: e => `${e.optionText}, izbrano`
        },
        "sr-SP": {
            buttonLabel: "Prikaži predloge",
            countAnnouncement: (e, t) => `Dostupno jo\u{161}: ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcija`,other:()=>`${t.number(e.optionCount)} opcije/a`})}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Unesena grupa ${e.groupTitle}, s ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opcijom`,other:()=>`${t.number(e.groupCount)} optione/a`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", izabranih",other:""},e.isSelected)}`,
            listboxLabel: "Predlozi",
            selectedAnnouncement: e => `${e.optionText}, izabrano`
        },
        "sv-SE": {
            buttonLabel: "Visa förslag",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} alternativ`,other:()=>`${t.number(e.optionCount)} alternativ`})} tillg\xe4ngliga.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Ingick i gruppen ${e.groupTitle} med ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} alternativ`,other:()=>`${t.number(e.groupCount)} alternativ`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", valda",other:""},e.isSelected)}`,
            listboxLabel: "Förslag",
            selectedAnnouncement: e => `${e.optionText}, valda`
        },
        "tr-TR": {
            buttonLabel: "Önerileri göster",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} se\xe7enek`,other:()=>`${t.number(e.optionCount)} se\xe7enekler`})} kullan\u{131}labilir.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Girilen grup ${e.groupTitle}, ile ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} se\xe7enek`,other:()=>`${t.number(e.groupCount)} se\xe7enekler`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", seçildi",other:""},e.isSelected)}`,
            listboxLabel: "Öneriler",
            selectedAnnouncement: e => `${e.optionText}, se\xe7ildi`
        },
        "uk-UA": {
            buttonLabel: "Показати пропозиції",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,other:()=>`${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{438}(-\u{456}\u{432})`})} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{412}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{430} \u{433}\u{440}\u{443}\u{43F}\u{430} ${e.groupTitle}, \u{437} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,other:()=>`${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{438}(-\u{456}\u{432})`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", вибрано",other:""},e.isSelected)}`,
            listboxLabel: "Пропозиції",
            selectedAnnouncement: e => `${e.optionText}, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}`
        },
        "zh-CN": {
            buttonLabel: "显示建议",
            countAnnouncement: (e, t) => `\u{6709} ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{4E2A}\u{9009}\u{9879}`,other:()=>`${t.number(e.optionCount)} \u{4E2A}\u{9009}\u{9879}`})}\u{53EF}\u{7528}\u{3002}`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{8FDB}\u{5165}\u{4E86} ${e.groupTitle} \u{7EC4}\u{FF0C}\u{5176}\u{4E2D}\u{6709} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{4E2A}\u{9009}\u{9879}`,other:()=>`${t.number(e.groupCount)} \u{4E2A}\u{9009}\u{9879}`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", 已选择",other:""},e.isSelected)}`,
            listboxLabel: "建议",
            selectedAnnouncement: e => `${e.optionText}, \u{5DF2}\u{9009}\u{62E9}`
        },
        "zh-TW": {
            buttonLabel: "顯示建議",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{9078}\u{9805}`,other:()=>`${t.number(e.optionCount)} \u{9078}\u{9805}`})} \u{53EF}\u{7528}\u{3002}`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{8F38}\u{5165}\u{7684}\u{7FA4}\u{7D44} ${e.groupTitle}, \u{6709} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{9078}\u{9805}`,other:()=>`${t.number(e.groupCount)} \u{9078}\u{9805}`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", 已選取",other:""},e.isSelected)}`,
            listboxLabel: "建議",
            selectedAnnouncement: e => `${e.optionText}, \u{5DF2}\u{9078}\u{53D6}`
        }
    };
    var T = e.i(776955),
        S = e.i(669877),
        k = e.i(579324),
        w = e.i(376842),
        E = e.i(575912),
        D = e.i(59284),
        j = e.i(465994),
        V = e.i(3873),
        _ = e.i(901317),
        B = e.i(604082),
        O = e.i(265332),
        L = e.i(291125),
        I = e.i(580867),
        R = e.i(945113),
        N = e.i(700066),
        P = e.i(318601),
        G = e.i(235752),
        q = e.i(841811),
        K = e.i(955613),
        M = e.i(941915),
        U = e.i(563227),
        z = e.i(472246),
        W = e.i(201373),
        H = e.i(459236),
        Q = e.i(372474),
        Y = e.i(661013),
        Z = e.i(441737),
        J = e.i(23953),
        X = e.i(984782),
        ee = e.i(102893);
    let et = e => {
        let t = n.default.useRef(null),
            {
                popoverRef: r = t,
                isOpen: o,
                onClose: l,
                children: i
            } = e,
            {
                overlayProps: a
            } = (0, X.useOverlay)({
                isOpen: o,
                onClose: l,
                shouldCloseOnBlur: !0,
                isDismissable: !0
            }, r);
        return (0, u.jsx)(ee.FocusScope, {
            restoreFocus: !0,
            children: (0, u.jsxs)("div", {
                className: "absolute z-10 mt-[6px] w-full rounded-xl bg-white drop-shadow-xl",
                ...a,
                ref: r,
                children: [i, (0, u.jsx)(J.DismissButton, {
                    onDismiss: l
                })]
            })
        })
    };
    var er = e.i(841881),
        eo = e.i(716371);
    let eu = ({
            item: e,
            state: t
        }) => {
            let r = (0, n.useRef)(null),
                {
                    optionProps: o,
                    isSelected: l,
                    isFocused: i
                } = (0, eo.useOption)({
                    key: e.key
                }, t, r),
                a = (0, g.default)("m-1 select-none rounded-lg bg-gray-200 pb-1 pl-2 pr-2 pt-1 text-sm font-semibold text-black cursor-pointer", {
                    "bg-gray-200": l || i,
                    "bg-transparent": !l && !i
                });
            return (0, u.jsx)("li", {
                ...o,
                ref: r,
                className: a,
                children: e.rendered
            })
        },
        en = e => {
            let t = n.default.useRef(null),
                {
                    listBoxRef: r = t,
                    state: o
                } = e,
                {
                    listBoxProps: l
                } = (0, er.useListBox)(e, o, r);
            return (0, u.jsx)("ul", {
                ...l,
                ref: r,
                className: "m-0 max-h-40 list-none overflow-auto p-0",
                children: [...o.collection].map(e => (0, u.jsx)(eu, {
                    item: e,
                    state: o
                }, e.key))
            })
        };
    var el = e.i(550436);
    let ei = e => {
        var t;
        let r, o, l, i, {
                isDisabled: a,
                hasError: s,
                hasWarning: c
            } = e,
            {
                contains: d
            } = (t = {
                sensitivity: "base"
            }, r = (0, M.useCollator)({
                usage: "search",
                ...t
            }), o = (0, n.useCallback)((e, t) => 0 === t.length || (e = e.normalize("NFC"), t = t.normalize("NFC"), 0 === r.compare(e.slice(0, t.length), t)), [r]), l = (0, n.useCallback)((e, t) => 0 === t.length || (e = e.normalize("NFC"), t = t.normalize("NFC"), 0 === r.compare(e.slice(-t.length), t)), [r]), i = (0, n.useCallback)((e, t) => {
                if (0 === t.length) return !0;
                e = e.normalize("NFC");
                let o = 0,
                    u = (t = t.normalize("NFC")).length;
                for (; o + u <= e.length; o++) {
                    let n = e.slice(o, o + u);
                    if (0 === r.compare(t, n)) return !0
                }
                return !1
            }, [r]), (0, n.useMemo)(() => ({
                startsWith: o,
                endsWith: l,
                contains: i
            }), [o, l, i])),
            p = function(e) {
                var t, r, o, u, l, i, a;
                let {
                    defaultFilter: s,
                    menuTrigger: c = "input",
                    allowsEmptyCollection: d = !1,
                    allowsCustomValue: p,
                    shouldCloseOnBlur: f = !0
                } = e, [m, g] = (0, n.useState)(!1), [b, h] = (0, n.useState)(!1), [y, C] = (0, n.useState)(null), {
                    collection: x,
                    selectionManager: v,
                    selectedKey: $,
                    setSelectedKey: A,
                    selectedItem: F,
                    disabledKeys: T
                } = (0, U.useSingleSelectListState)({
                    ...e,
                    onSelectionChange: t => {
                        e.onSelectionChange && e.onSelectionChange(t), t === $ && (q(), R())
                    },
                    items: null != (r = e.items) ? r : e.defaultItems
                }), S = e.defaultInputValue;
                null == S && (S = null == $ ? "" : null != (u = null == (o = x.getItem($)) ? void 0 : o.textValue) ? u : "");
                let [k, w] = (0, W.useControlledState)(e.inputValue, S, e.onInputChange), E = (0, n.useMemo)(() => {
                    var t, r, o;
                    return null == e.items && s ? (t = x, r = k, o = s, new(0, z.ListCollection)(function e(t, r, o, u) {
                        let n = [];
                        for (let l of r)
                            if ("section" === l.type && l.hasChildNodes) {
                                let r = e(t, (0, L.getChildNodes)(l, t), o, u);
                                [...r].some(e => "item" === e.type) && n.push({
                                    ...l,
                                    childNodes: r
                                })
                            } else "item" === l.type && u(l.textValue, o) ? n.push({
                                ...l
                            }) : "item" !== l.type && n.push({
                                ...l
                            });
                        return n
                    }(t, t, r, o))) : x
                }, [x, k, s, e.items]), [D, j] = (0, n.useState)(E), V = (0, n.useRef)("focus"), _ = (0, H.useOverlayTriggerState)({
                    ...e,
                    onOpenChange: t => {
                        e.onOpenChange && e.onOpenChange(t, t ? V.current : void 0), v.setFocused(t), t || v.setFocusedKey(null)
                    },
                    isOpen: void 0,
                    defaultOpen: void 0
                }), B = (t = null, r) => {
                    let o = "manual" === r || "focus" === r && "focus" === c;
                    (d || E.size > 0 || o && x.size > 0 || e.items) && (o && !_.isOpen && void 0 === e.items && g(!0), V.current = r, C(t), _.open())
                }, O = (0, n.useCallback)(() => {
                    j(m ? x : E)
                }, [m, x, E]), I = (0, n.useCallback)((e = null) => {
                    _.isOpen && O(), C(e), _.toggle()
                }, [_, O]), R = (0, n.useCallback)(() => {
                    _.isOpen && (O(), _.close())
                }, [_, O]), [N, G] = (0, n.useState)(k), q = () => {
                    var e, t;
                    let r = null != $ && null != (t = null == (e = x.getItem($)) ? void 0 : e.textValue) ? t : "";
                    G(r), w(r)
                }, K = (0, n.useRef)(null != (i = null != (l = e.selectedKey) ? l : e.defaultSelectedKey) ? i : null), M = (0, n.useRef)(null != $ && null != (a = null == (t = x.getItem($)) ? void 0 : t.textValue) ? a : "");
                (0, n.useEffect)(() => {
                    var t, r;
                    b && (E.size > 0 || d) && !_.isOpen && k !== N && "manual" !== c && B(null, "input"), m || d || !_.isOpen || 0 !== E.size || R(), null != $ && $ !== K.current && R(), k !== N && (v.setFocusedKey(null), g(!1), "" === k && (void 0 === e.inputValue || void 0 === e.selectedKey) && A(null)), $ !== K.current && (void 0 === e.inputValue || void 0 === e.selectedKey) ? q() : N !== k && G(k);
                    let o = null != $ && null != (r = null == (t = x.getItem($)) ? void 0 : t.textValue) ? r : "";
                    b || null == $ || void 0 !== e.inputValue || $ !== K.current || M.current === o || (G(o), w(o)), K.current = $, M.current = o
                });
                let Q = (0, P.useFormValidationState)({
                        ...e,
                        value: (0, n.useMemo)(() => ({
                            inputValue: k,
                            selectedKey: $
                        }), [k, $])
                    }),
                    Y = () => {
                        K.current = null, A(null), R()
                    },
                    Z = () => {
                        if (void 0 !== e.selectedKey && void 0 !== e.inputValue) {
                            var t, r, o;
                            null == (t = e.onSelectionChange) || t.call(e, $), G(null != $ && null != (o = null == (r = x.getItem($)) ? void 0 : r.textValue) ? o : ""), R()
                        } else q(), R()
                    },
                    J = () => {
                        if (p) {
                            var e, t;
                            k === (null != $ && null != (t = null == (e = x.getItem($)) ? void 0 : e.textValue) ? t : "") ? Z() : Y()
                        } else Z()
                    },
                    X = (0, n.useRef)(k),
                    ee = (0, n.useMemo)(() => _.isOpen ? m ? x : E : D, [_.isOpen, x, E, m, D]);
                return {
                    ...Q,
                    ..._,
                    focusStrategy: y,
                    toggle: (t = null, r) => {
                        let o = "manual" === r || "focus" === r && "focus" === c;
                        (d || E.size > 0 || o && x.size > 0 || e.items || _.isOpen) && (o && !_.isOpen && void 0 === e.items && g(!0), _.isOpen || (V.current = r), I(t))
                    },
                    open: B,
                    close: J,
                    selectionManager: v,
                    selectedKey: $,
                    setSelectedKey: A,
                    disabledKeys: T,
                    isFocused: b,
                    setFocused: t => {
                        t ? (X.current = k, "focus" !== c || e.isReadOnly || B(null, "focus")) : (f && J(), k !== X.current && Q.commitValidation()), h(t)
                    },
                    selectedItem: F,
                    collection: ee,
                    inputValue: k,
                    setInputValue: w,
                    commit: () => {
                        _.isOpen && null != v.focusedKey ? $ === v.focusedKey ? Z() : A(v.focusedKey) : J()
                    },
                    revert: () => {
                        p && null == $ ? Y() : Z()
                    }
                }
            }({
                ...e,
                defaultFilter: d
            }),
            f = (0, n.useRef)(null),
            m = (0, n.useRef)(null),
            b = (0, n.useRef)(null),
            h = (0, n.useRef)(null),
            {
                buttonProps: y,
                inputProps: C,
                listBoxProps: x,
                labelProps: v
            } = function(e, t) {
                var r, o, u, l, i;
                let a, s, {
                        buttonRef: c,
                        popoverRef: d,
                        inputRef: p,
                        listBoxRef: f,
                        keyboardDelegate: m,
                        layoutDelegate: g,
                        shouldFocusWrap: b,
                        isReadOnly: h,
                        isDisabled: y
                    } = e,
                    C = (0, n.useRef)(null);
                c = null != c ? c : C;
                let x = (0, G.useLocalizedStringFormatter)((u = F) && u.__esModule ? u.default : u, "@react-aria/combobox"),
                    {
                        menuTriggerProps: v,
                        menuProps: $
                    } = (0, q.useMenuTrigger)({
                        type: "listbox",
                        isDisabled: y || h
                    }, t, c);
                k.listData.set(t, {
                    id: $.id
                });
                let {
                    collection: A
                } = t, {
                    disabledKeys: M
                } = t.selectionManager, U = (0, n.useMemo)(() => m || new(0, R.ListKeyboardDelegate)({
                    collection: A,
                    disabledKeys: M,
                    ref: f,
                    layoutDelegate: g
                }), [m, g, A, M, f]), {
                    collectionProps: z
                } = (0, N.useSelectableCollection)({
                    selectionManager: t.selectionManager,
                    keyboardDelegate: U,
                    disallowTypeAhead: !0,
                    disallowEmptySelection: !0,
                    shouldFocusWrap: b,
                    ref: p,
                    isVirtualized: !0
                }), W = (0, w.useRouter)(), {
                    isInvalid: H,
                    validationErrors: Q,
                    validationDetails: Y
                } = t.displayValidation, {
                    labelProps: Z,
                    inputProps: J,
                    descriptionProps: X,
                    errorMessageProps: ee
                } = (0, K.useTextField)({
                    ...e,
                    onChange: t.setInputValue,
                    onKeyDown: h ? e.onKeyDown : (0, E.chain)(t.isOpen && z.onKeyDown, r => {
                        if (!r.nativeEvent.isComposing) switch (r.key) {
                            case "Enter":
                            case "Tab":
                                if (t.isOpen && "Enter" === r.key && r.preventDefault(), t.isOpen && f.current && null != t.selectionManager.focusedKey && t.selectionManager.isLink(t.selectionManager.focusedKey)) {
                                    let e = f.current.querySelector(`[data-key="${CSS.escape(t.selectionManager.focusedKey.toString())}"]`);
                                    if ("Enter" === r.key && e instanceof HTMLAnchorElement) {
                                        let o = t.collection.getItem(t.selectionManager.focusedKey);
                                        o && W.open(e, r, o.props.href, o.props.routerOptions)
                                    }
                                    t.close()
                                } else t.commit();
                                break;
                            case "Escape":
                                (null !== t.selectedKey || "" === t.inputValue || e.allowsCustomValue) && r.continuePropagation(), t.revert();
                                break;
                            case "ArrowDown":
                                t.open("first", "manual");
                                break;
                            case "ArrowUp":
                                t.open("last", "manual");
                                break;
                            case "ArrowLeft":
                            case "ArrowRight":
                                t.selectionManager.setFocusedKey(null)
                        }
                    }, e.onKeyDown),
                    onBlur: r => {
                        var o;
                        let u = (null == c ? void 0 : c.current) && c.current === r.relatedTarget,
                            n = null == (o = d.current) ? void 0 : o.contains(r.relatedTarget);
                        u || n || (e.onBlur && e.onBlur(r), t.setFocused(!1))
                    },
                    value: t.inputValue,
                    onFocus: r => {
                        t.isFocused || (e.onFocus && e.onFocus(r), t.setFocused(!0))
                    },
                    autoComplete: "off",
                    validate: void 0,
                    [P.privateValidationStateProp]: t
                }, p), et = (0, D.useLabels)({
                    id: v.id,
                    "aria-label": x.format("buttonLabel"),
                    "aria-labelledby": e["aria-labelledby"] || Z.id
                }), er = (0, D.useLabels)({
                    id: $.id,
                    "aria-label": x.format("listboxLabel"),
                    "aria-labelledby": e["aria-labelledby"] || Z.id
                }), eo = (0, n.useRef)(0), eu = null != t.selectionManager.focusedKey && t.isOpen ? t.collection.getItem(t.selectionManager.focusedKey) : void 0, en = null != (r = null == eu ? void 0 : eu.parentKey) ? r : null, el = null != (o = t.selectionManager.focusedKey) ? o : null, ei = (0, n.useRef)(en), ea = (0, n.useRef)(el);
                (0, n.useEffect)(() => {
                    if ((0, j.isAppleDevice)() && null != eu && null != el && el !== ea.current) {
                        var e;
                        let r = t.selectionManager.isSelected(el),
                            o = null != en ? t.collection.getItem(en) : null,
                            u = (null == o ? void 0 : o["aria-label"]) || ("string" == typeof(null == o ? void 0 : o.rendered) ? o.rendered : "") || "",
                            n = x.format("focusAnnouncement", {
                                isGroupChange: null != (e = o && en !== ei.current) && e,
                                groupTitle: u,
                                groupCount: o ? [...(0, L.getChildNodes)(o, t.collection)].length : 0,
                                optionText: eu["aria-label"] || eu.textValue || "",
                                isSelected: r
                            });
                        (0, T.announce)(n)
                    }
                    ei.current = en, ea.current = el
                });
                let es = (0, I.getItemCount)(t.collection),
                    ec = (0, n.useRef)(es),
                    ed = (0, n.useRef)(t.isOpen);
                (0, n.useEffect)(() => {
                    let e = t.isOpen !== ed.current && (null == t.selectionManager.focusedKey || (0, j.isAppleDevice)());
                    if (t.isOpen && (e || es !== ec.current)) {
                        let e = x.format("countAnnouncement", {
                            optionCount: es
                        });
                        (0, T.announce)(e)
                    }
                    ec.current = es, ed.current = t.isOpen
                });
                let ep = (0, n.useRef)(t.selectedKey);
                return (0, n.useEffect)(() => {
                    if ((0, j.isAppleDevice)() && t.isFocused && t.selectedItem && t.selectedKey !== ep.current) {
                        let e = t.selectedItem["aria-label"] || t.selectedItem.textValue || "",
                            r = x.format("selectedAnnouncement", {
                                optionText: e
                            });
                        (0, T.announce)(r)
                    }
                    ep.current = t.selectedKey
                }), (0, n.useEffect)(() => {
                    if (t.isOpen) return (0, S.ariaHideOutside)([p.current, d.current].filter(e => null != e))
                }, [t.isOpen, p, d]), l = () => {
                    !eu && p.current && (0, V.getActiveElement)((0, _.getOwnerDocument)(p.current)) === p.current && (0, O.dispatchVirtualFocus)(p.current, null)
                }, i = [eu], a = (0, n.useRef)(!0), s = (0, n.useRef)(null), (0, n.useEffect)(() => (a.current = !0, () => {
                    a.current = !1
                }), []), (0, n.useEffect)(() => {
                    let e = s.current;
                    a.current ? a.current = !1 : (!e || i.some((t, r) => !Object.is(t, e[r]))) && l(), s.current = i
                }, i), {
                    labelProps: Z,
                    buttonProps: {
                        ...v,
                        ...et,
                        excludeFromTabOrder: !0,
                        preventFocusOnPress: !0,
                        onPress: e => {
                            if ("touch" === e.pointerType) {
                                var r;
                                null == (r = p.current) || r.focus(), t.toggle(null, "manual")
                            }
                        },
                        onPressStart: e => {
                            if ("touch" !== e.pointerType) {
                                var r;
                                null == (r = p.current) || r.focus(), t.toggle("keyboard" === e.pointerType || "virtual" === e.pointerType ? "first" : null, "manual")
                            }
                        },
                        isDisabled: y || h
                    },
                    inputProps: (0, B.mergeProps)(J, {
                        role: "combobox",
                        "aria-expanded": v["aria-expanded"],
                        "aria-controls": t.isOpen ? $.id : void 0,
                        "aria-autocomplete": "list",
                        "aria-activedescendant": eu ? (0, k.getItemId)(t, eu.key) : void 0,
                        onTouchEnd: e => {
                            var r, o;
                            if (y || h) return;
                            if (e.timeStamp - eo.current < 500) {
                                e.preventDefault(), null == (r = p.current) || r.focus();
                                return
                            }
                            let u = e.target.getBoundingClientRect(),
                                n = e.changedTouches[0],
                                l = Math.ceil(u.left + .5 * u.width),
                                i = Math.ceil(u.top + .5 * u.height);
                            n.clientX === l && n.clientY === i && (e.preventDefault(), null == (o = p.current) || o.focus(), t.toggle(null, "manual"), eo.current = e.timeStamp)
                        },
                        autoCorrect: "off",
                        spellCheck: "false"
                    }),
                    listBoxProps: (0, B.mergeProps)($, er, {
                        autoFocus: t.focusStrategy || !0,
                        shouldUseVirtualFocus: !0,
                        shouldSelectOnPressUp: !0,
                        shouldFocusOnHover: !0,
                        linkBehavior: "selection"
                    }),
                    descriptionProps: X,
                    errorMessageProps: ee,
                    isInvalid: H,
                    validationErrors: Q,
                    validationDetails: Y
                }
            }({
                ...e,
                inputRef: m,
                buttonRef: f,
                listBoxRef: b,
                popoverRef: h
            }, p),
            {
                buttonProps: $
            } = (0, Q.useButton)(y, f),
            A = (0, g.default)("stroke-gray-900 group-hover/select:stroke-gray-800 dark:group-hover/select:stroke-gray-200 transition-all ease-out duration-400", {
                "rotate-180 stroke-gray-900 ": p.isOpen
            }),
            J = (0, g.default)("rounded-lg w-full border border-gray-200 outline-blue focus:ring-3 focus:ring-blue-dark focus:outline-blue focus:outline-offset-0 focus:border-none transition-all ease-out duration-400", "text-gray-900 dark:text-gray-400 dark:text-white", "placeholder-gray-600 dark:placeholder-gray-400", {
                "bg-gray-100 dark:bg-gray-800 cursor-not-allowed": a,
                "border-yellow-500 dark:border-yellow-500 border-2": c,
                "border-red-500 dark:border-red-500 border-2": s
            }, {
                "bg-gray-50 dark:bg-gray-900": !a,
                "border-gray-400 hover:border-gray-900 dark:border-gray-500 dark:hover:border-white": !s && !c
            });
        return (0, u.jsxs)("div", {
            className: "inline-flex w-full flex-col",
            children: [(0, u.jsxs)("div", {
                className: "flex justify-between",
                children: [(0, u.jsx)("label", {
                    ...v,
                    className: "inline-block pb-2",
                    children: e.label
                }), e.required && (0, u.jsx)("span", {
                    className: "text-sm text-gray-400",
                    children: e.requiredText
                })]
            }), (0, u.jsxs)("div", {
                className: "relative inline-block w-full",
                children: [(0, u.jsx)("input", {
                    ...C,
                    ref: m,
                    className: J
                }), (0, u.jsx)("button", {
                    className: "absolute top-0 right-0 bottom-0 h-10 px-2 text-gray-900",
                    ...$,
                    ref: f,
                    children: (0, u.jsx)("span", {
                        "aria-hidden": "true",
                        children: (0, u.jsx)(Y.default, {
                            className: A
                        })
                    })
                }), e.helpText && (0, u.jsx)(Z.default, {
                    helperText: e.helpText,
                    hasError: e.hasError,
                    hasWarning: e.hasWarning
                }), p.isOpen && (0, u.jsx)(et, {
                    popoverRef: h,
                    isOpen: p.isOpen,
                    onClose: p.close,
                    children: (0, u.jsx)(en, {
                        ...x,
                        listBoxRef: b,
                        state: p
                    })
                })]
            })]
        })
    };
    ei.Item = el.Item;
    var ea = e.i(475200);
    e.s(["default", 0, e => {
        let {
            visibleConditions: t,
            visibleCountry: r,
            countryCode: o
        } = e, i = (0, ea.default)(), c = e?.chained?.map(e => e.dependant) || [];
        (0, n.useEffect)(() => {
            e.defaultValue && e.setValue(e.formFieldId, e.defaultValue, {
                shouldValidate: !0
            })
        }, [e.defaultValue, e.setValue, e.formFieldId]);
        let p = (0, a.useWatch)({
                control: e.control,
                name: t?.map(({
                    fieldId: e
                }) => e) || [],
                defaultValue: t?.reduce((t, {
                    fieldId: r
                }) => (t[r] = e.defaultValue, t), {})
            }),
            f = s(t, p);
        (0, n.useEffect)(() => {
            f || e.control.unregister(e.formFieldId)
        }, [f, e.control, e.formFieldId]);
        let m = t => {
                e.setValue(e.formFieldId, t, {
                    shouldValidate: !0
                })
            },
            g = e => (0, u.jsx)(ei.Item, {
                children: e?.label || e?.option
            }, e.value),
            b = t => {
                e.setValue(e.formFieldId, t, {
                    shouldValidate: !0
                })
            },
            h = e => (0, u.jsx)(ei.Item, {
                children: e.label
            }, e.value);
        return f && d(r, o) ? (0, u.jsx)(a.Controller, {
            name: e.formFieldId,
            control: e.control,
            rules: {
                required: e.isRequired
            },
            render: ({
                fieldState: t
            }) => (0, u.jsxs)(u.Fragment, {
                children: [!c.some(t => t === e.formFieldId) && (i ? (0, u.jsxs)("div", {
                    className: "inline-flex w-full flex-col",
                    children: [(0, u.jsxs)("label", {
                        className: "flex items-center justify-between pb-2",
                        children: [(0, u.jsx)("span", {
                            children: e.label
                        }), e.isRequired && (0, u.jsx)("span", {
                            className: "text-sm text-gray-400",
                            children: e.requiredText
                        })]
                    }), (0, u.jsx)(A.default, {
                        isDisabled: e.isDisabled,
                        selectedKey: e.defaultValue,
                        label: e.label,
                        name: e.formFieldId,
                        placeholder: e.placeholder,
                        onSelectionChange: m,
                        className: t.error ? "rounded-lg border-2 border-red-500 bg-white p-2" : "rounded-lg border border-gray-300 bg-white p-2",
                        children: (e?.dropdownOptionsFromReference?.options || e?.dropdownOptions || []).map(t => {
                            let r, o;
                            return r = void 0 !== t.value ? t.value : t.key || t.toString(), (o = t.label || t.option || t.text || t.toString() || e.placeholder) && "string" != typeof o && (o = r), (0, u.jsx)(A.default.Item, {
                                children: o
                            }, r)
                        })
                    }), t.error && (0, u.jsx)(Z.default, {
                        helperText: (0, l.default)(e.helpText, e.errorText, e.warningText, void 0 !== t.error, !1),
                        hasError: void 0 !== t.error
                    })]
                }) : (0, u.jsx)(ei, {
                    isDisabled: e.isDisabled,
                    defaultSelectedKey: e.defaultValue,
                    required: e.isRequired,
                    requiredText: e.requiredText,
                    menuTrigger: "focus",
                    name: e.formFieldId,
                    placeholder: e.placeholder,
                    defaultItems: e?.dropdownOptionsFromReference?.options || e?.dropdownOptions,
                    label: e.label,
                    onSelectionChange: m,
                    ...void 0 !== t.error && {
                        helpText: (0, l.default)(e.helpText, e.errorText, e.warningText, void 0 !== t.error, !1)
                    },
                    hasError: void 0 !== t.error,
                    children: g
                })), e.chained && e.chained.map((r, o) => r.value === e.countryCode && r.dependant === e.formFieldId ? i ? (0, u.jsxs)("div", {
                    className: "inline-flex w-full flex-col",
                    children: [(0, u.jsxs)("label", {
                        className: "flex items-center justify-between pb-2",
                        children: [(0, u.jsx)("span", {
                            children: e.label
                        }), e.isRequired && (0, u.jsx)("span", {
                            className: "text-sm text-gray-400",
                            children: e.requiredText
                        })]
                    }), (0, u.jsx)(A.default, {
                        isDisabled: e.isDisabled,
                        selectedKey: e.defaultValue,
                        label: e.label,
                        name: e.formFieldId,
                        placeholder: e.placeholder,
                        onSelectionChange: b,
                        className: t.error ? "rounded-lg border-2 border-red-500 bg-white p-2" : "rounded-lg border border-gray-300 bg-white p-2",
                        children: (e?.dropdownOptionsFromReference?.options || e?.dropdownOptions || []).map(t => {
                            let r, o;
                            return r = void 0 !== t.value ? t.value : t.key || t.toString(), o = t.label || t.text || t.toString() || e.placeholder, (0, u.jsx)(A.default.Item, {
                                children: o
                            }, r)
                        })
                    }), t.error && (0, u.jsx)(Z.default, {
                        helperText: (0, l.default)(e.helpText, e.errorText, e.warningText, void 0 !== t.error, !1),
                        hasError: void 0 !== t.error
                    })]
                }, o) : (0, u.jsx)(ei, {
                    isDisabled: e.isDisabled,
                    defaultSelectedKey: e.defaultValue,
                    required: e.isRequired,
                    requiredText: e.requiredText,
                    menuTrigger: "focus",
                    name: e.formFieldId,
                    placeholder: e.placeholder,
                    defaultItems: e?.dropdownOptionsFromReference?.options || e?.dropdownOptions,
                    label: e.label,
                    onSelectionChange: b,
                    ...void 0 !== t.error && {
                        helpText: (0, l.default)(e.helpText, e.errorText, e.warningText, void 0 !== t.error, !1)
                    },
                    hasError: void 0 !== t.error,
                    children: h
                }, o) : null)]
            })
        }) : null
    }], 662380);
    let es = {
        marks: {
            link: ({
                children: e,
                value: t
            }) => {
                let r = t?.href || "#",
                    o = /^https?:\/\//i.test(r);
                return (0, u.jsx)("a", {
                    href: r,
                    ...o ? {
                        target: "_blank",
                        rel: "noopener noreferrer"
                    } : {},
                    children: e
                })
            }
        }
    };
    e.s(["default", 0, ({
        control: e,
        richText: t,
        visibleConditions: r,
        visibleCountry: o,
        countryCode: n,
        className: l
    }) => {
        let i = (0, a.useWatch)({
            control: e,
            name: r?.map(({
                fieldId: e
            }) => e) || []
        });
        if (!s(r, i) || !d(o, n)) return null;
        let c = t?.text;
        return !c || Array.isArray(c) && 0 === c.length ? null : (0, u.jsx)($.default, {
            className: l,
            children: (0, u.jsx)(m.PortableText, {
                value: c,
                components: es
            })
        })
    }], 179695)
}, 394261, e => {
    "use strict";
    var t = e.i(500783);
    let r = (0, e.i(3931).forwardRef)(({
        onSubmit: e,
        children: r
    }, o) => (0, t.jsx)("form", {
        ref: o,
        onSubmit: e,
        className: "flex flex-col",
        children: r
    }));
    r.displayName = "Form", e.s(["default", 0, r], 394261)
}, 545487, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(3931);
    let o = (0, r.createContext)({
        isGated: !1,
        setIsGated: () => {},
        formSubmitted: !1,
        setFormSubmitted: () => {}
    });
    e.s(["ResourcesDetailContextProvider", 0, ({
        children: e
    }) => {
        let [u, n] = (0, r.useState)(!1), [l, i] = (0, r.useState)(!1);
        return (0, t.jsx)(o.Provider, {
            value: {
                isGated: l,
                setIsGated: i,
                formSubmitted: u,
                setFormSubmitted: n
            },
            children: e
        })
    }, "useResourcesDetailContext", 0, () => (0, r.useContext)(o)])
}, 537251, e => {
    "use strict";
    var t = e.i(3931),
        r = e.i(677278),
        o = e.i(239273),
        u = e.i(545487),
        n = e.i(869324),
        l = e.i(497492),
        i = e.i(649051);
    e.s(["default", 0, ({
        fields: e = [],
        sfdcIntegration: a = {},
        disableBlindSubmit: s = !1,
        isGrowForm: c = !1
    } = {}) => {
        var d;
        let p = (0, l.getFilteredQueryParams)(["sfcid", "sflsa", "sfit"], c),
            [f, m] = (0, t.useState)({}),
            [g, b] = (0, t.useState)(!1),
            h = (d = ["elqCustomerGUID"], e ? e.filter(e => "hidden" === e.inputType && !d.includes(e.formFieldId)).reduce((e, t) => Object.assign(e, {
                [t.formFieldId]: t.defaultValue
            }), {}) : {}),
            [y] = (0, o.default)("ELOQUA"),
            {
                setFormSubmitted: C
            } = (0, u.useResourcesDetailContext)(),
            x = (0, t.useRef)(void 0),
            v = (0, t.useRef)(0),
            $ = (0, t.useRef)(void 0),
            A = (0, t.useRef)(0),
            F = (0, t.useCallback)(e => {
                let t = "";
                return (0, i.storageAvailable)("localStorage") && (t = localStorage.getItem("gaSessionID") || ""), {
                    jsIP: e || "",
                    jsReferrer: document.referrer.split("?")[0] || "",
                    gaSessionID: t,
                    pathname: window.location.pathname || "",
                    date: new Date().toISOString() || ""
                }
            }, []);
        (0, t.useEffect)(() => {
            (async () => {
                let e = "";
                try {
                    let t = await fetch("https://api.ipify.org/?format=json");
                    e = (await t.json()).ip
                } catch (e) {
                    console.error("error in ip resolution: ", e)
                }
                return e
            })().then(e => {
                m(F(e))
            })
        }, [F]), (0, t.useEffect)(() => {
            if (y) {
                b(!0);
                let e = setInterval(() => {
                    v.current++, void 0 !== window._elqQ && (window._elqQ.push(["elqDataLookup", escape("7cd261a6ba06486b88648045c9069652"), ""]), clearInterval(e)), 50 === v.current && (b(!1), clearInterval(e))
                }, 100);
                x.current = e
            }
            return () => {
                clearInterval(x.current)
            }
        }, [y]);
        let T = (0, t.useCallback)(e => {
            if (s) return;
            let t = {};
            t.elqCustomerGUID = y?.split("&")[0]?.split("GUID=")[1] || "", t.emailAddress = e;
            let {
                emailConfirmation: o,
                gcid: u,
                ghandler: l,
                growDivision: i,
                growDepartment: d
            } = a;
            t = {
                ...t,
                ...h,
                ...p,
                ...f,
                ...c ? {
                    emailConfirmation: o,
                    grow: !0,
                    gcid: u,
                    ghandler: l,
                    growDivision: i,
                    growDepartment: d
                } : a
            }, fetch("https://create.unity.com/e/f2", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams(Object.entries(t).filter(([e, t]) => void 0 !== t).reduce((e, [t, r]) => (e[t] = r, e), {})).toString()
            }).then(() => {
                (0, n.default)({
                    properties: {
                        form_action: "submitted_blind",
                        form_id: t.elqFormID,
                        form_name: t.elqFormName,
                        form_customer_id: t.elqCustomerGUID
                    }
                }), C(!0)
            }).catch(e => r.captureException(e)).finally(() => {
                b(!1)
            })
        }, [s, C, y, h, p, f, a, c]);
        return (0, t.useEffect)(() => {
            let e;
            return g && (e = setTimeout(() => {
                b(!1)
            }, 2e3)), () => {
                clearTimeout(e)
            }
        }, [g]), (0, t.useEffect)(() => (window.LogElqValue = T, window.SetElqContent = () => {
            let e = setInterval(() => {
                A.current++, window.GetElqContentPersonalizationValue && (T(window.GetElqContentPersonalizationValue("V_Email_Address")), clearInterval(e)), 50 === A.current && clearInterval(e)
            }, 100);
            $.current = e
        }, () => {
            clearInterval($.current)
        }), [T]), {
            extraFields: f,
            loading: g
        }
    }])
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2018e714-c2c0-5168-a126-b57304c0ddda")
    } catch (e) {}
}();
//# debugId=2018e714-c2c0-5168-a126-b57304c0ddda