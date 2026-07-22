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
        d = e => void 0 === e,
        c = (e, t, r) => {
            if (!t || !u(e)) return r;
            let n = s(t.split(/[,[\].]+?/)).reduce((e, t) => o(e) ? e : e[t], e);
            return d(n) || n === e ? d(e[t]) ? r : e[t] : n
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
        v = "pattern",
        C = "required",
        x = t.default.createContext(null);
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
        S = (e, t, r, o) => {
            r(e);
            let {
                name: u,
                ...n
            } = e;
            return A(n) || Object.keys(n).length >= Object.keys(t).length || Object.keys(n).find(e => t[e] === (!o || "all"))
        },
        T = e => Array.isArray(e) ? e : [e],
        F = (e, t, r) => !e || !t || e === t || T(e).some(e => e && (r ? e === t : e.startsWith(t) || t.startsWith(e)));

    function E(e) {
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
    var k = (e, t, r, o, u) => "string" == typeof e ? (o && t.watch.add(e), c(r, e, u)) : Array.isArray(e) ? e.map(e => (o && t.watch.add(e), c(r, e))) : (o && (t.watchAll = !0), r);

    function D(e) {
        let r = t.default.useContext(x),
            {
                control: o = r.control,
                name: u,
                defaultValue: n,
                disabled: l,
                exact: i
            } = e || {},
            s = t.default.useRef(u);
        s.current = u, E({
            disabled: l,
            subject: o._subjects.values,
            next: e => {
                F(s.current, e.name, i) && c(a(k(s.current, o._names, e.values || o._formValues, !1, n)))
            }
        });
        let [d, c] = t.default.useState(o._getWatch(u, n));
        return t.default.useEffect(() => o._removeUnmounted()), d
    }
    var w = (e, t, r, o, u) => t ? {
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
            let r = c(e, n);
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
    var L = (e, t, r) => {
            let o = T(c(e, r));
            return f(o, "root", t[r]), f(e, r, o), e
        },
        O = e => "function" == typeof e,
        B = e => {
            if (!i) return !1;
            let t = e ? e.ownerDocument : 0;
            return e instanceof(t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
        },
        R = e => "string" == typeof e;
    let I = {
            value: !1,
            isValid: !1
        },
        P = {
            value: !0,
            isValid: !0
        };
    var N = e => {
        if (Array.isArray(e)) {
            if (e.length > 1) {
                let t = e.filter(e => e && e.checked && !e.disabled).map(e => e.value);
                return {
                    value: t,
                    isValid: !!t.length
                }
            }
            return e[0].checked && !e[0].disabled ? e[0].attributes && !d(e[0].attributes.value) ? d(e[0].value) || "" === e[0].value ? P : {
                value: e[0].value,
                isValid: !0
            } : P : I
        }
        return I
    };
    let G = {
        isValid: !1,
        value: null
    };
    var q = e => Array.isArray(e) ? e.reduce((e, t) => t && t.checked && !t.disabled ? {
        isValid: !0,
        value: t.value
    } : e, G) : G;

    function M(e, t, r = "validate") {
        if (R(e) || Array.isArray(e) && e.every(R) || "boolean" == typeof e && !e) return {
            type: r,
            message: R(e) ? e : "",
            ref: t
        }
    }
    var K = e => !u(e) || e instanceof RegExp ? {
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
                validate: x,
                name: $,
                valueAsNumber: S,
                mount: T,
                disabled: F
            } = e._f, E = c(t, $);
            if (!T || F) return {};
            let k = a ? a[0] : i,
                D = e => {
                    n && k.reportValidity && (k.setCustomValidity("boolean" == typeof e ? "" : e || ""), k.reportValidity())
                },
                j = {},
                V = "radio" === i.type,
                _ = "checkbox" === i.type,
                L = (S || "file" === i.type) && d(i.value) && d(E) || B(i) && "" === i.value || "" === E || Array.isArray(E) && !E.length,
                I = w.bind(null, $, r, j),
                P = (e, t, r, o = h, u = y) => {
                    let n = e ? t : r;
                    j[$] = {
                        type: e ? o : u,
                        message: n,
                        ref: i,
                        ...I(e ? o : u, n)
                    }
                };
            if (l ? !Array.isArray(E) || !E.length : s && (!(V || _) && (L || o(E)) || "boolean" == typeof E && !E || _ && !N(a).isValid || V && !q(a).isValid)) {
                let {
                    value: e,
                    message: t
                } = R(s) ? {
                    value: !!s,
                    message: s
                } : K(s);
                if (e && (j[$] = {
                        type: C,
                        message: t,
                        ref: k,
                        ...I(C, t)
                    }, !r)) return D(t), j
            }
            if (!L && (!o(m) || !o(g))) {
                let e, t, u = K(g),
                    n = K(m);
                if (o(E) || isNaN(E)) {
                    let r = i.valueAsDate || new Date(E),
                        o = e => new Date(new Date().toDateString() + " " + e),
                        l = "time" == i.type,
                        a = "week" == i.type;
                    "string" == typeof u.value && E && (e = l ? o(E) > o(u.value) : a ? E > u.value : r > new Date(u.value)), "string" == typeof n.value && E && (t = l ? o(E) < o(n.value) : a ? E < n.value : r < new Date(n.value))
                } else {
                    let r = i.valueAsNumber || (E ? +E : E);
                    o(u.value) || (e = r > u.value), o(n.value) || (t = r < n.value)
                }
                if ((e || t) && (P(!!e, u.message, n.message, "max", "min"), !r)) return D(j[$].message), j
            }
            if ((p || f) && !L && ("string" == typeof E || l && Array.isArray(E))) {
                let e = K(p),
                    t = K(f),
                    u = !o(e.value) && E.length > +e.value,
                    n = !o(t.value) && E.length < +t.value;
                if ((u || n) && (P(u, e.message, t.message), !r)) return D(j[$].message), j
            }
            if (b && !L && "string" == typeof E) {
                let {
                    value: e,
                    message: t
                } = K(b);
                if (e instanceof RegExp && !E.match(e) && (j[$] = {
                        type: v,
                        message: t,
                        ref: i,
                        ...I(v, t)
                    }, !r)) return D(t), j
            }
            if (x) {
                if (O(x)) {
                    let e = M(await x(E, t), k);
                    if (e && (j[$] = {
                            ...e,
                            ...I("validate", e.message)
                        }, !r)) return D(e.message), j
                } else if (u(x)) {
                    let e = {};
                    for (let o in x) {
                        if (!A(e) && !r) break;
                        let u = M(await x[o](E, t), k, o);
                        u && (e = {
                            ...u,
                            ...I(o, u.message)
                        }, D(u.message), r && (j[$] = e))
                    }
                    if (!A(e) && (j[$] = {
                            ref: k,
                            ...e
                        }, !r)) return j
                }
            }
            return D(!0), j
        };

    function z(e, t) {
        let r = Array.isArray(t) ? t : /^\w*$/.test(t) ? [t] : p(t),
            o = 1 === r.length ? e : function(e, t) {
                let r = t.slice(0, -1).length,
                    o = 0;
                for (; o < r;) e = d(e) ? o++ : e[t[o++]];
                return e
            }(e, r),
            n = r.length - 1,
            l = r[n];
        return o && delete o[l], 0 !== n && (u(o) && A(o) || Array.isArray(o) && function(e) {
            for (let t in e)
                if (e.hasOwnProperty(t) && !d(e[t])) return !1;
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
    var Y = e => B(e) && e.isConnected,
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
                for (let l in t) Array.isArray(t[l]) || u(t[l]) && !Z(t[l]) ? d(r) || H(n[l]) ? n[l] = Array.isArray(t[l]) ? J(t[l], []) : {
                    ...J(t[l])
                } : e(t[l], o(r) ? {} : r[l], n[l]) : n[l] = !Q(t[l], r[l]);
            return n
        })(e, t, J(t)),
        ee = (e, {
            valueAsNumber: t,
            valueAsDate: r,
            setValueAs: o
        }) => d(e) ? e : t ? "" === e ? NaN : e ? +e : e : r && "string" == typeof e ? new Date(e) : o ? o(e) : e;

    function et(e) {
        let t = e.ref;
        if (e.refs ? !e.refs.every(e => e.disabled) : !t.disabled) return "file" === t.type ? t.files : "radio" === t.type ? q(e.refs).value : "select-multiple" === t.type ? [...t.selectedOptions].map(({
            value: e
        }) => e) : "checkbox" === t.type ? N(e.refs).value : ee(d(t.value) ? e.ref.value : t.value, e)
    }
    var er = e => d(e) ? e : e instanceof RegExp ? e.source : u(e) ? e.value instanceof RegExp ? e.value.source : e.value : e;
    let eo = "AsyncFunction";
    var eu = e => (!e || !e.validate) && !!(O(e.validate) && e.validate.constructor.name === eo || u(e.validate) && Object.values(e.validate).find(e => e.constructor.name === eo));

    function en(e, t, r) {
        let o = c(e, r);
        if (o || /^\w*$/.test(r)) return {
            error: o,
            name: r
        };
        let u = r.split(".");
        for (; u.length;) {
            let o = u.join("."),
                n = c(t, o),
                l = c(e, o);
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
        let r = t.default.useContext(x),
            {
                name: o,
                disabled: u,
                control: i = r.control,
                shouldUnregister: s
            } = e,
            p = l(i._names.array, o),
            g = D({
                control: i,
                name: o,
                defaultValue: c(i._formValues, o, c(i._defaultValues, o, e.defaultValue)),
                exact: !0
            }),
            b = function(e) {
                let r = t.default.useContext(x),
                    {
                        control: o = r.control,
                        disabled: u,
                        name: n,
                        exact: l
                    } = e || {},
                    [i, a] = t.default.useState(o._formState),
                    s = t.default.useRef(!0),
                    d = t.default.useRef({
                        isDirty: !1,
                        isLoading: !1,
                        dirtyFields: !1,
                        touchedFields: !1,
                        validatingFields: !1,
                        isValidating: !1,
                        isValid: !1,
                        errors: !1
                    }),
                    c = t.default.useRef(n);
                return c.current = n, E({
                    disabled: u,
                    next: e => s.current && F(c.current, e.name, l) && S(e, d.current, o._updateFormState) && a({
                        ...o._formState,
                        ...e
                    }),
                    subject: o._subjects.state
                }), t.default.useEffect(() => (s.current = !0, d.current.isValid && o._updateValid(!0), () => {
                    s.current = !1
                }), [o]), $(i, o, d.current, !1)
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
                    let r = c(i._fields, e);
                    r && r._f && (r._f.mount = t)
                };
            if (t(o, !0), e) {
                let e = a(c(i._options.defaultValues, o));
                f(i._defaultValues, o, e), d(c(i._formValues, o)) && f(i._formValues, o, e)
            }
            return () => {
                (p ? e && !i._state.action : e) ? i.unregister(o): t(o, !1)
            }
        }, [o, i, p, s]), t.default.useEffect(() => {
            c(i._fields, o) && i._updateDisabledField({
                disabled: u,
                fields: i._fields,
                name: o,
                value: c(i._fields, o)._f.value
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
                        value: c(i._formValues, o),
                        name: o
                    },
                    type: m
                }), [o, i]),
                ref: t.default.useCallback(e => {
                    let t = c(i._fields, o);
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
                    get: () => !!c(b.errors, o)
                },
                isDirty: {
                    enumerable: !0,
                    get: () => !!c(b.dirtyFields, o)
                },
                isTouched: {
                    enumerable: !0,
                    get: () => !!c(b.touchedFields, o)
                },
                isValidating: {
                    enumerable: !0,
                    get: () => !!c(b.validatingFields, o)
                },
                error: {
                    enumerable: !0,
                    get: () => c(b.errors, o)
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
                    v = {
                        action: !1,
                        mount: !1,
                        watch: !1
                    },
                    C = {
                        mount: new Set,
                        unMount: new Set,
                        array: new Set,
                        watch: new Set
                    },
                    x = 0,
                    $ = {
                        isDirty: !1,
                        dirtyFields: !1,
                        validatingFields: !1,
                        touchedFields: !1,
                        isValidating: !1,
                        isValid: !1,
                        errors: !1
                    },
                    S = {
                        values: W(),
                        array: W(),
                        state: W()
                    },
                    F = j(p.mode),
                    E = j(p.reValidateMode),
                    D = "all" === p.criteriaMode,
                    w = async e => {
                        if ($.isValid || e) {
                            let e = p.resolver ? A((await N()).errors) : await q(b, !0);
                            e !== g.isValid && S.state.next({
                                isValid: e
                            })
                        }
                    }, R = (e, t) => {
                        ($.isValidating || $.validatingFields) && ((e || Array.from(C.mount)).forEach(e => {
                            e && (t ? f(g.validatingFields, e, t) : z(g.validatingFields, e))
                        }), S.state.next({
                            validatingFields: g.validatingFields,
                            isValidating: !A(g.validatingFields)
                        }))
                    }, I = (e, t, r, o) => {
                        let u = c(b, e);
                        if (u) {
                            let n = c(y, e, d(r) ? c(h, e) : r);
                            d(n) || o && o.defaultChecked || t ? f(y, e, t ? n : et(u._f)) : Z(e, n), v.mount && w()
                        }
                    }, P = (e, t, r, o, u) => {
                        let n = !1,
                            l = !1,
                            i = {
                                name: e
                            },
                            a = !!(c(b, e) && c(b, e)._f && c(b, e)._f.disabled);
                        if (!r || o) {
                            $.isDirty && (l = g.isDirty, g.isDirty = i.isDirty = M(), n = l !== i.isDirty);
                            let r = a || Q(c(h, e), t);
                            l = !!(!a && c(g.dirtyFields, e)), r || a ? z(g.dirtyFields, e) : f(g.dirtyFields, e, !0), i.dirtyFields = g.dirtyFields, n = n || $.dirtyFields && !r !== l
                        }
                        if (r) {
                            let t = c(g.touchedFields, e);
                            t || (f(g.touchedFields, e, r), i.touchedFields = g.touchedFields, n = n || $.touchedFields && t !== r)
                        }
                        return n && u && S.state.next(i), n ? i : {}
                    }, N = async e => {
                        R(e, !0);
                        let t = await p.resolver(y, p.context, ((e, t, r, o) => {
                            let u = {};
                            for (let r of e) {
                                let e = c(t, r);
                                e && f(u, r, e._f)
                            }
                            return {
                                criteriaMode: r,
                                names: [...e],
                                fields: u,
                                shouldUseNativeValidation: o
                            }
                        })(e || C.mount, b, p.criteriaMode, p.shouldUseNativeValidation));
                        return R(e), t
                    }, G = async e => {
                        let {
                            errors: t
                        } = await N(e);
                        if (e)
                            for (let r of e) {
                                let e = c(t, r);
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
                                    let n = C.array.has(e.name),
                                        l = u._f && eu(u._f);
                                    l && $.validatingFields && R([o], !0);
                                    let i = await U(u, y, D, p.shouldUseNativeValidation && !t, n);
                                    if (l && $.validatingFields && R([o]), i[e.name] && (r.valid = !1, t)) break;
                                    t || (c(i, e.name) ? n ? L(g.errors, i, e.name) : f(g.errors, e.name, i[e.name]) : z(g.errors, e.name))
                                }
                                A(n) || await q(n, t, r)
                            }
                        }
                        return r.valid
                    }, M = (e, t) => (e && t && f(y, e, t), !Q(ed(), h)), K = (e, t, r) => k(e, C, {
                        ...v.mount ? y : d(t) ? h : "string" == typeof e ? {
                            [e]: t
                        } : t
                    }, r, t), Z = (e, t, r = {}) => {
                        let u = c(b, e),
                            n = t;
                        if (u) {
                            let r = u._f;
                            r && (r.disabled || f(y, e, ee(t, r)), n = B(r.ref) && o(t) ? "" : t, "select-multiple" === r.ref.type ? [...r.ref.options].forEach(e => e.selected = n.includes(e.value)) : r.refs ? "checkbox" === r.ref.type ? r.refs.length > 1 ? r.refs.forEach(e => (!e.defaultChecked || !e.disabled) && (e.checked = Array.isArray(n) ? !!n.find(t => t === e.value) : n === e.value)) : r.refs[0] && (r.refs[0].checked = !!n) : r.refs.forEach(e => e.checked = e.value === n) : "file" === r.ref.type ? r.ref.value = "" : (r.ref.value = n, r.ref.type || S.values.next({
                                name: e,
                                values: {
                                    ...y
                                }
                            })))
                        }(r.shouldDirty || r.shouldTouch) && P(e, n, r.shouldTouch, r.shouldDirty, !0), r.shouldValidate && es(e)
                    }, J = (e, t, o) => {
                        for (let u in t) {
                            let n = t[u],
                                l = `${e}.${u}`,
                                i = c(b, l);
                            !C.array.has(e) && H(n) && (!i || i._f) || r(n) ? Z(l, n, o) : J(l, n, o)
                        }
                    }, eo = (e, t, r = {}) => {
                        let u = c(b, e),
                            n = C.array.has(e),
                            l = a(t);
                        f(y, e, l), n ? (S.array.next({
                            name: e,
                            values: {
                                ...y
                            }
                        }), ($.isDirty || $.dirtyFields) && r.shouldDirty && S.state.next({
                            name: e,
                            dirtyFields: X(h, y),
                            isDirty: M(e, l)
                        })) : !u || u._f || o(l) ? Z(e, l, r) : J(e, l, r), V(e, C) && S.state.next({
                            ...g
                        }), S.values.next({
                            name: v.mount ? e : void 0,
                            values: {
                                ...y
                            }
                        })
                    }, ei = async r => {
                        v.mount = !0;
                        let o = r.target,
                            u = o.name,
                            l = !0,
                            i = c(b, u),
                            a = e => {
                                l = Number.isNaN(e) || Q(e, c(y, u, e))
                            };
                        if (i) {
                            var s, d, h, T, k;
                            let v, O, B, I = o.type ? et(i._f) : n(r),
                                G = r.type === m || "focusout" === r.type,
                                M = !((B = i._f).mount && (B.required || B.min || B.max || B.maxLength || B.minLength || B.pattern || B.validate)) && !p.resolver && !c(g.errors, u) && !i._f.deps || (s = G, d = c(g.touchedFields, u), h = g.isSubmitted, T = E, !(k = F).isOnAll && (!h && k.isOnTouch ? !(d || s) : (h ? T.isOnBlur : k.isOnBlur) ? !s : (h ? !T.isOnChange : !k.isOnChange) || s)),
                                K = V(u, C, G);
                            f(y, u, I), G ? (i._f.onBlur && i._f.onBlur(r), t && t(0)) : i._f.onChange && i._f.onChange(r);
                            let W = P(u, I, G, !1),
                                H = !A(W) || K;
                            if (G || S.values.next({
                                    name: u,
                                    type: r.type,
                                    values: {
                                        ...y
                                    }
                                }), M) return $.isValid && ("onBlur" === e.mode ? G && w() : w()), H && S.state.next({
                                name: u,
                                ...K ? {} : W
                            });
                            if (!G && K && S.state.next({
                                    ...g
                                }), p.resolver) {
                                let {
                                    errors: e
                                } = await N([u]);
                                if (a(I), l) {
                                    let t = en(g.errors, b, u),
                                        r = en(e, b, t.name || u);
                                    v = r.error, u = r.name, O = A(e)
                                }
                            } else R([u], !0), v = (await U(i, y, D, p.shouldUseNativeValidation))[u], R([u]), a(I), l && (v ? O = !1 : $.isValid && (O = await q(b, !0)));
                            if (l) {
                                i._f.deps && es(i._f.deps);
                                var j = u,
                                    _ = O,
                                    L = v;
                                let r = c(g.errors, j),
                                    o = $.isValid && "boolean" == typeof _ && g.isValid !== _;
                                if (e.delayError && L) {
                                    let r;
                                    r = () => {
                                        f(g.errors, j, L), S.state.next({
                                            errors: g.errors
                                        })
                                    }, (t = e => {
                                        clearTimeout(x), x = setTimeout(r, e)
                                    })(e.delayError)
                                } else clearTimeout(x), t = null, L ? f(g.errors, j, L) : z(g.errors, j);
                                if ((L ? !Q(r, L) : r) || !A(W) || o) {
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
                                    }, S.state.next(e)
                                }
                            }
                        }
                    }, ea = (e, t) => {
                        if (c(g.errors, t) && e.focus) return e.focus(), 1
                    }, es = async (e, t = {}) => {
                        let r, o, u = T(e);
                        if (p.resolver) {
                            let t = await G(d(e) ? e : u);
                            r = A(t), o = e ? !u.some(e => c(t, e)) : r
                        } else e ? ((o = (await Promise.all(u.map(async e => {
                            let t = c(b, e);
                            return await q(t && t._f ? {
                                [e]: t
                            } : t)
                        }))).every(Boolean)) || g.isValid) && w() : o = r = await q(b);
                        return S.state.next({
                            ..."string" != typeof e || $.isValid && r !== g.isValid ? {} : {
                                name: e
                            },
                            ...p.resolver || !e ? {
                                isValid: r
                            } : {},
                            errors: g.errors
                        }), t.shouldFocus && !o && _(b, ea, e ? u : C.mount), o
                    }, ed = e => {
                        let t = {
                            ...v.mount ? y : h
                        };
                        return d(e) ? t : "string" == typeof e ? c(t, e) : e.map(e => c(t, e))
                    }, ec = (e, t) => ({
                        invalid: !!c((t || g).errors, e),
                        isDirty: !!c((t || g).dirtyFields, e),
                        error: c((t || g).errors, e),
                        isValidating: !!c(g.validatingFields, e),
                        isTouched: !!c((t || g).touchedFields, e)
                    }), ep = (e, t, r) => {
                        let o = (c(b, e, {
                                _f: {}
                            })._f || {}).ref,
                            {
                                ref: u,
                                message: n,
                                type: l,
                                ...i
                            } = c(g.errors, e) || {};
                        f(g.errors, e, {
                            ...i,
                            ...t,
                            ref: o
                        }), S.state.next({
                            name: e,
                            errors: g.errors,
                            isValid: !1
                        }), r && r.shouldFocus && o && o.focus && o.focus()
                    }, ef = (e, t = {}) => {
                        for (let r of e ? T(e) : C.mount) C.mount.delete(r), C.array.delete(r), t.keepValue || (z(b, r), z(y, r)), t.keepError || z(g.errors, r), t.keepDirty || z(g.dirtyFields, r), t.keepTouched || z(g.touchedFields, r), t.keepIsValidating || z(g.validatingFields, r), p.shouldUnregister || t.keepDefaultValue || z(h, r);
                        S.values.next({
                            values: {
                                ...y
                            }
                        }), S.state.next({
                            ...g,
                            ...!t.keepDirty ? {} : {
                                isDirty: M()
                            }
                        }), t.keepIsValid || w()
                    }, em = ({
                        disabled: e,
                        name: t,
                        field: r,
                        fields: o,
                        value: u
                    }) => {
                        if ("boolean" == typeof e && v.mount || e) {
                            let n = e ? void 0 : d(u) ? et(r ? r._f : c(o, t)._f) : u;
                            f(y, t, n), P(t, n, !1, !1, !0)
                        }
                    }, eg = (t, r = {}) => {
                        let o = c(b, t),
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
                        }), C.mount.add(t), o) ? em({
                            field: o,
                            disabled: "boolean" == typeof r.disabled ? r.disabled : e.disabled,
                            name: t,
                            value: r.value
                        }) : I(t, !0, r.value), {
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
                                    eg(t, r), o = c(b, t);
                                    let n = d(e.value) && e.querySelectorAll && e.querySelectorAll("input,select,textarea")[0] || e,
                                        l = "radio" === (u = n).type || "checkbox" === u.type,
                                        i = o._f.refs || [];
                                    (l ? i.find(e => e === n) : n === o._f.ref) || (f(b, t, {
                                        _f: {
                                            ...o._f,
                                            ...l ? {
                                                refs: [...i.filter(Y), n, ...Array.isArray(c(h, t)) ? [{}] : []],
                                                ref: {
                                                    type: n.type,
                                                    name: t
                                                }
                                            } : {
                                                ref: n
                                            }
                                        }
                                    }), I(t, !1, void 0, n))
                                } else(o = c(b, t, {}))._f && (o._f.mount = !1), (p.shouldUnregister || r.shouldUnregister) && !(l(C.array, t) && v.action) && C.unMount.add(t)
                            }
                        }
                    }, eb = () => p.shouldFocusError && _(b, ea, C.mount), eh = (e, t) => async r => {
                        let o;
                        r && (r.preventDefault && r.preventDefault(), r.persist && r.persist());
                        let u = a(y);
                        if (S.state.next({
                                isSubmitting: !0
                            }), p.resolver) {
                            let {
                                errors: e,
                                values: t
                            } = await N();
                            g.errors = e, u = t
                        } else await q(b);
                        if (z(g.errors, "root"), A(g.errors)) {
                            S.state.next({
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
                        if (S.state.next({
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
                                for (let e of C.mount) c(g.dirtyFields, e) ? f(l, e, c(y, e)) : eo(e, c(l, e));
                            else {
                                if (i && d(t))
                                    for (let e of C.mount) {
                                        let t = c(b, e);
                                        if (t && t._f) {
                                            let e = Array.isArray(t._f.refs) ? t._f.refs[0] : t._f.ref;
                                            if (B(e)) {
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
                            y = e.shouldUnregister ? r.keepDefaultValues ? a(h) : {} : a(l), S.array.next({
                                values: {
                                    ...l
                                }
                            }), S.values.next({
                                values: {
                                    ...l
                                }
                            })
                        }
                        C = {
                            mount: r.keepDirtyValues ? C.mount : new Set,
                            unMount: new Set,
                            array: new Set,
                            watch: new Set,
                            watchAll: !1,
                            focus: ""
                        }, v.mount = !$.isValid || !!r.keepIsValid || !!r.keepDirtyValues, v.watch = !!e.shouldUnregister, S.state.next({
                            submitCount: r.keepSubmitCount ? g.submitCount : 0,
                            isDirty: !n && (r.keepDirty ? g.isDirty : !!(r.keepDefaultValues && !Q(t, h))),
                            isSubmitted: !!r.keepIsSubmitted && g.isSubmitted,
                            dirtyFields: n ? {} : r.keepDirtyValues ? r.keepDefaultValues && y ? X(h, y) : g.dirtyFields : r.keepDefaultValues && t ? X(h, t) : r.keepDirty ? g.dirtyFields : {},
                            touchedFields: r.keepTouched ? g.touchedFields : {},
                            errors: r.keepErrors ? g.errors : {},
                            isSubmitSuccessful: !!r.keepIsSubmitSuccessful && g.isSubmitSuccessful,
                            isSubmitting: !1
                        })
                    }, ev = (e, t) => ey(O(e) ? e(y) : e, t);
                return {
                    control: {
                        register: eg,
                        unregister: ef,
                        getFieldState: ec,
                        handleSubmit: eh,
                        setError: ep,
                        _executeSchema: N,
                        _getWatch: K,
                        _getDirty: M,
                        _updateValid: w,
                        _removeUnmounted: () => {
                            for (let e of C.unMount) {
                                let t = c(b, e);
                                t && (t._f.refs ? t._f.refs.every(e => !Y(e)) : !Y(t._f.ref)) && ef(e)
                            }
                            C.unMount = new Set
                        },
                        _updateFieldArray: (e, t = [], r, o, u = !0, n = !0) => {
                            if (o && r) {
                                if (v.action = !0, n && Array.isArray(c(b, e))) {
                                    let t = r(c(b, e), o.argA, o.argB);
                                    u && f(b, e, t)
                                }
                                if (n && Array.isArray(c(g.errors, e))) {
                                    let t, n = r(c(g.errors, e), o.argA, o.argB);
                                    u && f(g.errors, e, n), s(c(t = g.errors, e)).length || z(t, e)
                                }
                                if ($.touchedFields && n && Array.isArray(c(g.touchedFields, e))) {
                                    let t = r(c(g.touchedFields, e), o.argA, o.argB);
                                    u && f(g.touchedFields, e, t)
                                }
                                $.dirtyFields && (g.dirtyFields = X(h, y)), S.state.next({
                                    name: e,
                                    isDirty: M(e, t),
                                    dirtyFields: g.dirtyFields,
                                    errors: g.errors,
                                    isValid: g.isValid
                                })
                            } else f(y, e, t)
                        },
                        _updateDisabledField: em,
                        _getFieldArray: t => s(c(v.mount ? y : h, t, e.shouldUnregister ? c(h, t, []) : [])),
                        _reset: ey,
                        _resetDefaultValues: () => O(p.defaultValues) && p.defaultValues().then(e => {
                            ev(e, p.resetOptions), S.state.next({
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
                            "boolean" == typeof e && (S.state.next({
                                disabled: e
                            }), _(b, (t, r) => {
                                let o = c(b, r);
                                o && (t.disabled = o._f.disabled || e, Array.isArray(o._f.refs) && o._f.refs.forEach(t => {
                                    t.disabled = o._f.disabled || e
                                }))
                            }, 0, !1))
                        },
                        _subjects: S,
                        _proxyFormState: $,
                        _setErrors: e => {
                            g.errors = e, S.state.next({
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
                            return v
                        },
                        set _state(value) {
                            v = value
                        },
                        get _defaultValues() {
                            return h
                        },
                        get _names() {
                            return C
                        },
                        set _names(value) {
                            C = value
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
                    watch: (e, t) => O(e) ? S.values.subscribe({
                        next: r => e(K(void 0, t), r)
                    }) : K(e, t, !0),
                    setValue: eo,
                    getValues: ed,
                    reset: ev,
                    resetField: (e, t = {}) => {
                        c(b, e) && (d(t.defaultValue) ? eo(e, a(c(h, e))) : (eo(e, t.defaultValue), f(h, e, a(t.defaultValue))), t.keepTouched || z(g.touchedFields, e), t.keepDirty || (z(g.dirtyFields, e), g.isDirty = t.defaultValue ? M(e, a(c(h, e))) : M()), !t.keepError && (z(g.errors, e), $.isValid && w()), S.state.next({
                            ...g
                        }))
                    },
                    clearErrors: e => {
                        e && T(e).forEach(e => z(g.errors, e)), S.state.next({
                            errors: e ? g.errors : {}
                        })
                    },
                    unregister: ef,
                    setError: ep,
                    setFocus: (e, t = {}) => {
                        let r = c(b, e),
                            o = r && r._f;
                        if (o) {
                            let e = o.refs ? o.refs[0] : o.ref;
                            e.focus && (e.focus(), t.shouldSelect && e.select())
                        }
                    },
                    getFieldState: ec
                }
            }(e),
            formState: b
        });
        let y = p.current.control;
        return y._options = e, E({
            subject: y._subjects.state,
            next: e => {
                S(e, y._proxyFormState, y._updateFormState, !0) && h({
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
    }, "useWatch", 0, D])
}, 222061, 272351, 497492, 396241, 829483, 662380, 179695, e => {
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

    function d(e, t = !1) {
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

    function c(e, t) {
        return !e || 0 === e.length || !!t && e.some(e => e.countryCode === t)
    }
    e.s(["shouldRenderField", 0, s], 272351), e.s(["checkIsGrowForm", 0, function() {
        return "true" === new URLSearchParams(window.location.search).get("isGrowForm")
    }, "cleanData", 0, e => Object.entries(e).filter(([e, t]) => void 0 !== t).reduce((e, [t, r]) => (e[t] = r, e), {}), "getAlwaysSendOnData", 0, (e, t, r) => {
        let o = {};
        return e?.forEach(e => {
            if (e.alwaysSendOn) {
                let u = e.countryRestriction && e.countryRestriction.length > 0 && !r || e.countryRestriction?.some(e => e.countryCode === r) || !c(e.visibleCountry, r),
                    n = t(e.formFieldId);
                u || !u && !0 === n ? o[e.formFieldId] = !0 : u || n || (o[e.formFieldId] = "")
            }
        }), o
    }, "getFilteredQueryParams", 0, function(e = [], t = !1) {
        let r = d(Array.from(new URLSearchParams(window.location.search).keys()));
        return t ? Object.fromEntries(Object.entries(r).filter(([t]) => !e.includes(t))) : r
    }, "getQueryParams", 0, d, "isCountryVisible", 0, c], 497492), e.s(["default", 0, e => {
        let {
            inputType: t,
            formFieldId: r,
            label: o,
            helpText: d,
            errorText: p,
            warningText: f,
            className: m,
            placeholder: g,
            disabled: b,
            defaultValue: h,
            isRequired: y,
            requiredText: v = "Required",
            control: C,
            visibleConditions: x,
            getValues: $,
            visibleCountry: A,
            isNumericalOnly: S,
            restrictedDomainsToggle: T,
            restrictedDomains: F,
            restrictedDomainErrorText: E
        } = e, k = {
            label: o,
            requiredText: v,
            className: m,
            placeholder: g,
            disabled: b,
            isRequired: y,
            for: r,
            name: r,
            id: r
        }, D = (0, a.useWatch)({
            control: C,
            name: x?.map(({
                fieldId: e
            }) => e) || []
        }), w = s(x, D, $);
        if ((0, n.useEffect)(() => {
                w || e.control.unregister(e.formFieldId)
            }, [w, e.control, e.formFieldId]), !c(A, e.countryCode) || !w) return null;
        switch (t) {
            case "text":
                return (0, u.jsx)(a.Controller, {
                    name: r,
                    control: e.control,
                    rules: {
                        required: y,
                        ...S && {
                            pattern: /^(\+|[0-9])[0-9-]*$/
                        }
                    },
                    render: ({
                        field: e,
                        fieldState: t
                    }) => (0, u.jsx)(i.default, {
                        ...k,
                        ...e,
                        value: e.value || "",
                        ...void 0 !== t.error && {
                            helperText: (0, l.default)(d, p, f, void 0 !== t.error, !1)
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
                        ...k,
                        ...e,
                        value: e.value || "",
                        ...void 0 !== t.error && {
                            helperText: (0, l.default)(d, p, f, void 0 !== t.error, !1)
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
                        ...T && F && {
                            validate: e => !F.split(",").map(e => e.trim()).filter(e => e.length > 0).find(t => e.toLowerCase().includes(t.toLowerCase())) || E || "Input contains restricted domain"
                        }
                    },
                    name: r,
                    control: e.control,
                    render: ({
                        field: e,
                        fieldState: t
                    }) => (0, u.jsx)(i.default, {
                        ...k,
                        ...e,
                        value: e.value || "",
                        ...void 0 !== t.error && {
                            helperText: (0, l.default)(d, t.error.message || p, f, void 0 !== t.error, !1)
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
        h = e.i(604082),
        y = e.i(318601),
        v = e.i(623706),
        C = e.i(212299);
    e.i(788727);
    var x = e.i(339206),
        $ = e.i(682792),
        A = e.i(7180),
        S = e.i(201373),
        T = e.i(183062),
        F = e.i(166010);
    let E = (0, n.forwardRef)(function(e, t) {
        let {
            children: r,
            isIndeterminate: o = !1,
            isDisabled: l = !1,
            isSelected: i = !1,
            isRequired: a = !1,
            hasError: s = !1,
            requiredText: d = "Required"
        } = e, c = function(e = {}) {
            var t;
            let {
                isReadOnly: r
            } = e, [o, u] = (0, S.useControlledState)(e.isSelected, e.defaultSelected || !1, e.onChange), [l] = (0, n.useState)(o);
            return {
                isSelected: o,
                defaultSelected: null != (t = e.defaultSelected) ? t : l,
                setSelected: function(e) {
                    r || u(e)
                },
                toggle: function() {
                    r || u(!o)
                }
            }
        }(e), [p, f] = (0, n.useState)(o), m = (0, F.useObjectRef)(t), {
            inputProps: E
        } = function(e, t, r) {
            let o = (0, y.useFormValidationState)({
                    ...e,
                    value: t.isSelected
                }),
                {
                    isInvalid: u,
                    validationErrors: l,
                    validationDetails: i
                } = o.displayValidation,
                {
                    labelProps: a,
                    inputProps: s,
                    isSelected: d,
                    isPressed: c,
                    isDisabled: p,
                    isReadOnly: f
                } = function(e, t, r) {
                    let {
                        isDisabled: o = !1,
                        isReadOnly: u = !1,
                        value: n,
                        name: l,
                        children: i,
                        "aria-label": a,
                        "aria-labelledby": s,
                        validationState: d = "valid",
                        isInvalid: c
                    } = e, {
                        pressProps: p,
                        isPressed: f
                    } = (0, C.usePress)({
                        isDisabled: o
                    }), {
                        pressProps: m,
                        isPressed: g
                    } = (0, C.usePress)({
                        onPress() {
                            var e;
                            t.toggle(), null == (e = r.current) || e.focus()
                        },
                        isDisabled: o || u
                    }), {
                        focusableProps: b
                    } = (0, A.useFocusable)(e, r), y = (0, h.mergeProps)(p, b), v = (0, x.filterDOMProps)(e, {
                        labelable: !0
                    });
                    return (0, $.useFormReset)(r, t.isSelected, t.setSelected), {
                        labelProps: (0, h.mergeProps)(m, {
                            onClick: e => e.preventDefault()
                        }),
                        inputProps: (0, h.mergeProps)(v, {
                            "aria-invalid": c || "invalid" === d || void 0,
                            "aria-errormessage": e["aria-errormessage"],
                            "aria-controls": e["aria-controls"],
                            "aria-readonly": u || void 0,
                            onChange: e => {
                                e.stopPropagation(), t.setSelected(e.target.checked)
                            },
                            disabled: o,
                            ...null == n ? {} : {
                                value: n
                            },
                            name: l,
                            type: "checkbox",
                            ...y
                        }),
                        isSelected: t.isSelected,
                        isPressed: f || g,
                        isDisabled: o,
                        isReadOnly: u,
                        isInvalid: c || "invalid" === d
                    }
                }({
                    ...e,
                    isInvalid: u
                }, t, r);
            (0, v.useFormValidation)(e, o, r);
            let {
                isIndeterminate: m,
                isRequired: g,
                validationBehavior: b = "aria"
            } = e;
            (0, n.useEffect)(() => {
                r.current && (r.current.indeterminate = !!m)
            });
            let {
                pressProps: S
            } = (0, C.usePress)({
                isDisabled: p || f,
                onPress() {
                    let {
                        [y.privateValidationStateProp]: t
                    } = e, {
                        commitValidation: r
                    } = t || o;
                    r()
                }
            });
            return {
                labelProps: (0, h.mergeProps)(a, S),
                inputProps: {
                    ...s,
                    checked: d,
                    "aria-required": g && "aria" === b || void 0,
                    required: g && "native" === b
                },
                isSelected: d,
                isPressed: c,
                isDisabled: p,
                isReadOnly: f,
                isInvalid: u,
                validationErrors: l,
                validationDetails: i
            }
        }(e, c, m), {
            isFocusVisible: k,
            focusProps: D
        } = (0, T.useFocusRing)();
        (0, n.useEffect)(() => {
            i && f(!1)
        }, [i]);
        let w = (0, g.default)("group flex text-small relative", {
                "pointer-events-none": l
            }, {
                "hover:cursor-pointer": !l
            }),
            j = (0, g.default)({
                "stroke-gray-400 dark:stroke-gray-500 group-hover:stroke-gray-800 dark:group-hover:stroke-white fill-transparent transition-colors duration-100 group-hover:fill-gray-200 dark:group-hover:fill-gray-800": !i && !p && !l && !k
            }, {
                "stroke-blue-dark group-hover:fill-blue fill-blue": (i || p) && !l
            }, {
                "fill-gray-200 stroke-gray-400 dark:fill-gray-800 dark:stroke-gray-700": l
            }, {
                "fill-gray-200 dark:fill-gray-800 stroke-gray-800 dark:stroke-white": k && !i && !p
            }, {
                "stroke-gray-400 dark:stroke-gray-500": a && !i && !k
            }, {
                "stroke-red dark:stroke-red": a && s && !i && !k
            }),
            V = (0, g.default)({
                "fill-white": i && !l,
                "fill-gray-400 dark:!fill-gray-500": l
            }),
            _ = (0, g.default)({
                "fill-white": !l
            }, {
                "fill-gray-400 dark:fill-gray-500": l
            }),
            L = (0, g.default)("ml-1 text-sm", {
                "text-gray-400 dark:text-gray-400": i
            }, {
                "text-gray-400": s && !i
            }, {
                "text-gray-400": !s && !i
            });
        return (0, u.jsxs)("label", {
            className: w,
            children: [(0, u.jsx)(b.VisuallyHidden, {
                children: (0, u.jsx)("input", {
                    ...E,
                    ...D,
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
                    className: j
                }), i && (0, u.jsx)("path", {
                    transform: "translate(7 7)",
                    d: `M3.788 9A.999.999 0 0 1 3 8.615l-2.288-3a1 1 0 1 1
            1.576-1.23l1.5 1.991 3.924-4.991a1 1 0 1 1 1.576 1.23l-4.712
            6A.999.999 0 0 1 3.788 9z`,
                    className: V
                }), p && (0, u.jsx)("rect", {
                    x: 7,
                    y: 11,
                    width: 10,
                    height: 2,
                    className: _
                }), k && (0, u.jsx)("rect", {
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
                    className: L,
                    children: d
                })]
            })]
        })
    });
    var k = e.i(805518);
    e.s(["default", 0, e => {
        let t = e?.chained?.map(e => e.dependant) || [],
            r = e.formFieldId === f.TOS && e.isRequired || e.formFieldId === f.PRIVACY && e.isRequired || e.countryCode === p.CN && e.formFieldId === f.MARKETING_CN && e.isRequired || e.isRequired,
            [o, l] = (0, n.useState)(!1),
            {
                formFieldId: i,
                checkboxLabel: s,
                checkboxPlainTextLabel: d,
                countryRestriction: g,
                visibleCountry: b
            } = e;
        return g && g?.length > 0 && !e.countryCode || g?.find(t => t.countryCode === e.countryCode) || !c(b, e.countryCode) ? null : (0, u.jsx)(a.Controller, {
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
                formState: c
            }) => (0, u.jsxs)(u.Fragment, {
                children: [!t.some(t => t === e.formFieldId) && (0, u.jsx)(E, {
                    requiredText: e.requiredText,
                    hasError: void 0 !== a.error,
                    isRequired: e.isRequired,
                    ...n,
                    ...a,
                    ...c,
                    onChange: e => {
                        r(e), l(!o)
                    },
                    isSelected: o,
                    id: i,
                    name: i,
                    children: (0, u.jsxs)(k.default, {
                        className: "font-medium [a]:underline",
                        children: [s && (0, u.jsx)(m.PortableText, {
                            value: s,
                            components: s
                        }), d && d?.checkboxLabelText]
                    })
                }), e.chained && e.chained.map((t, d) => {
                    if (t.value === e.countryCode && t.dependant === e.formFieldId) return (0, u.jsx)(E, {
                        requiredText: e.requiredText,
                        hasError: void 0 !== a.error,
                        ...n,
                        ...a,
                        ...c,
                        onChange: e => {
                            r(e), l(!o)
                        },
                        isSelected: o,
                        id: i,
                        name: i,
                        children: (0, u.jsx)(k.default, {
                            className: "[a]:underline",
                            children: (0, u.jsx)(m.PortableText, {
                                value: s,
                                components: s
                            })
                        })
                    }, d)
                })]
            })
        })
    }], 829483);
    var D = e.i(481392),
        w = {};
    w = {
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
    let j = null;

    function V(e, t = "assertive", r = 7e3) {
        j ? j.announce(e, t, r) : (j = new _, ("boolean" == typeof IS_REACT_ACT_ENVIRONMENT ? IS_REACT_ACT_ENVIRONMENT : "u" > typeof jest) ? j.announce(e, t, r) : setTimeout(() => {
            (null == j ? void 0 : j.isAttached()) && (null == j || j.announce(e, t, r))
        }, 100))
    }
    class _ {
        isAttached() {
            var e;
            return null == (e = this.node) ? void 0 : e.isConnected
        }
        createLog(e) {
            let t = document.createElement("div");
            return t.setAttribute("role", "log"), t.setAttribute("aria-live", e), t.setAttribute("aria-relevant", "additions"), t
        }
        destroy() {
            this.node && (document.body.removeChild(this.node), this.node = null)
        }
        announce(e, t = "assertive", r = 7e3) {
            var o, u;
            if (!this.node) return;
            let n = document.createElement("div");
            "object" == typeof e ? (n.setAttribute("role", "img"), n.setAttribute("aria-labelledby", e["aria-labelledby"])) : n.textContent = e, "assertive" === t ? null == (o = this.assertiveLog) || o.appendChild(n) : null == (u = this.politeLog) || u.appendChild(n), "" !== e && setTimeout(() => {
                n.remove()
            }, r)
        }
        clear(e) {
            this.node && ((!e || "assertive" === e) && this.assertiveLog && (this.assertiveLog.innerHTML = ""), (!e || "polite" === e) && this.politeLog && (this.politeLog.innerHTML = ""))
        }
        constructor() {
            this.node = null, this.assertiveLog = null, this.politeLog = null, "u" > typeof document && (this.node = document.createElement("div"), this.node.dataset.liveAnnouncer = "true", Object.assign(this.node.style, {
                border: 0,
                clip: "rect(0 0 0 0)",
                clipPath: "inset(50%)",
                height: "1px",
                margin: "-1px",
                overflow: "hidden",
                padding: 0,
                position: "absolute",
                width: "1px",
                whiteSpace: "nowrap"
            }), this.assertiveLog = this.createLog("assertive"), this.node.appendChild(this.assertiveLog), this.politeLog = this.createLog("polite"), this.node.appendChild(this.politeLog), document.body.prepend(this.node))
        }
    }
    var L = e.i(669877),
        O = e.i(579324),
        B = e.i(376842),
        R = e.i(575912),
        I = e.i(59284),
        P = e.i(465994),
        N = e.i(3873),
        G = e.i(901317),
        q = e.i(265332),
        M = e.i(291125),
        K = e.i(580867),
        U = e.i(945113),
        z = e.i(700066),
        W = e.i(235752),
        H = e.i(841811),
        Q = e.i(955613),
        Y = e.i(941915),
        Z = e.i(563227),
        J = e.i(472246),
        X = e.i(459236),
        ee = e.i(372474),
        et = e.i(661013),
        er = e.i(441737),
        eo = e.i(23953),
        eu = e.i(984782),
        en = e.i(102893);
    let el = e => {
        let t = n.default.useRef(null),
            {
                popoverRef: r = t,
                isOpen: o,
                onClose: l,
                children: i
            } = e,
            {
                overlayProps: a
            } = (0, eu.useOverlay)({
                isOpen: o,
                onClose: l,
                shouldCloseOnBlur: !0,
                isDismissable: !0
            }, r);
        return (0, u.jsx)(en.FocusScope, {
            restoreFocus: !0,
            children: (0, u.jsxs)("div", {
                className: "absolute z-10 mt-[6px] w-full rounded-xl bg-white drop-shadow-xl",
                ...a,
                ref: r,
                children: [i, (0, u.jsx)(eo.DismissButton, {
                    onDismiss: l
                })]
            })
        })
    };
    var ei = e.i(841881),
        ea = e.i(716371);
    let es = ({
            item: e,
            state: t
        }) => {
            let r = (0, n.useRef)(null),
                {
                    optionProps: o,
                    isSelected: l,
                    isFocused: i
                } = (0, ea.useOption)({
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
        ed = e => {
            let t = n.default.useRef(null),
                {
                    listBoxRef: r = t,
                    state: o
                } = e,
                {
                    listBoxProps: l
                } = (0, ei.useListBox)(e, o, r);
            return (0, u.jsx)("ul", {
                ...l,
                ref: r,
                className: "m-0 max-h-40 list-none overflow-auto p-0",
                children: [...o.collection].map(e => (0, u.jsx)(es, {
                    item: e,
                    state: o
                }, e.key))
            })
        };
    var ec = e.i(550436);
    let ep = e => {
        var t;
        let r, o, l, i, {
                isDisabled: a,
                hasError: s,
                hasWarning: d
            } = e,
            {
                contains: c
            } = (t = {
                sensitivity: "base"
            }, r = (0, Y.useCollator)({
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
                    menuTrigger: d = "input",
                    allowsEmptyCollection: c = !1,
                    allowsCustomValue: p,
                    shouldCloseOnBlur: f = !0
                } = e, [m, g] = (0, n.useState)(!1), [b, h] = (0, n.useState)(!1), [v, C] = (0, n.useState)(null), {
                    collection: x,
                    selectionManager: $,
                    selectedKey: A,
                    setSelectedKey: T,
                    selectedItem: F,
                    disabledKeys: E
                } = (0, Z.useSingleSelectListState)({
                    ...e,
                    onSelectionChange: t => {
                        e.onSelectionChange && e.onSelectionChange(t), t === A && (q(), P())
                    },
                    items: null != (r = e.items) ? r : e.defaultItems
                }), k = e.defaultInputValue;
                null == k && (k = null == A ? "" : null != (u = null == (o = x.getItem(A)) ? void 0 : o.textValue) ? u : "");
                let [D, w] = (0, S.useControlledState)(e.inputValue, k, e.onInputChange), j = (0, n.useMemo)(() => {
                    var t, r, o;
                    return null == e.items && s ? (t = x, r = D, o = s, new(0, J.ListCollection)(function e(t, r, o, u) {
                        let n = [];
                        for (let l of r)
                            if ("section" === l.type && l.hasChildNodes) {
                                let r = e(t, (0, M.getChildNodes)(l, t), o, u);
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
                }, [x, D, s, e.items]), [V, _] = (0, n.useState)(j), L = (0, n.useRef)("focus"), O = (0, X.useOverlayTriggerState)({
                    ...e,
                    onOpenChange: t => {
                        e.onOpenChange && e.onOpenChange(t, t ? L.current : void 0), $.setFocused(t), t || $.setFocusedKey(null)
                    },
                    isOpen: void 0,
                    defaultOpen: void 0
                }), B = (t = null, r) => {
                    let o = "manual" === r || "focus" === r && "focus" === d;
                    (c || j.size > 0 || o && x.size > 0 || e.items) && (o && !O.isOpen && void 0 === e.items && g(!0), L.current = r, C(t), O.open())
                }, R = (0, n.useCallback)(() => {
                    _(m ? x : j)
                }, [m, x, j]), I = (0, n.useCallback)((e = null) => {
                    O.isOpen && R(), C(e), O.toggle()
                }, [O, R]), P = (0, n.useCallback)(() => {
                    O.isOpen && (R(), O.close())
                }, [O, R]), [N, G] = (0, n.useState)(D), q = () => {
                    var e, t;
                    let r = null != A && null != (t = null == (e = x.getItem(A)) ? void 0 : e.textValue) ? t : "";
                    G(r), w(r)
                }, K = (0, n.useRef)(null != (i = null != (l = e.selectedKey) ? l : e.defaultSelectedKey) ? i : null), U = (0, n.useRef)(null != A && null != (a = null == (t = x.getItem(A)) ? void 0 : t.textValue) ? a : "");
                (0, n.useEffect)(() => {
                    var t, r;
                    b && (j.size > 0 || c) && !O.isOpen && D !== N && "manual" !== d && B(null, "input"), m || c || !O.isOpen || 0 !== j.size || P(), null != A && A !== K.current && P(), D !== N && ($.setFocusedKey(null), g(!1), "" === D && (void 0 === e.inputValue || void 0 === e.selectedKey) && T(null)), A !== K.current && (void 0 === e.inputValue || void 0 === e.selectedKey) ? q() : N !== D && G(D);
                    let o = null != A && null != (r = null == (t = x.getItem(A)) ? void 0 : t.textValue) ? r : "";
                    b || null == A || void 0 !== e.inputValue || A !== K.current || U.current === o || (G(o), w(o)), K.current = A, U.current = o
                });
                let z = (0, y.useFormValidationState)({
                        ...e,
                        value: (0, n.useMemo)(() => ({
                            inputValue: D,
                            selectedKey: A
                        }), [D, A])
                    }),
                    W = () => {
                        K.current = null, T(null), P()
                    },
                    H = () => {
                        if (void 0 !== e.selectedKey && void 0 !== e.inputValue) {
                            var t, r, o;
                            null == (t = e.onSelectionChange) || t.call(e, A), G(null != A && null != (o = null == (r = x.getItem(A)) ? void 0 : r.textValue) ? o : ""), P()
                        } else q(), P()
                    },
                    Q = () => {
                        if (p) {
                            var e, t;
                            D === (null != A && null != (t = null == (e = x.getItem(A)) ? void 0 : e.textValue) ? t : "") ? H() : W()
                        } else H()
                    },
                    Y = (0, n.useRef)(D),
                    ee = (0, n.useMemo)(() => O.isOpen ? m ? x : j : V, [O.isOpen, x, j, m, V]);
                return {
                    ...z,
                    ...O,
                    focusStrategy: v,
                    toggle: (t = null, r) => {
                        let o = "manual" === r || "focus" === r && "focus" === d;
                        (c || j.size > 0 || o && x.size > 0 || e.items || O.isOpen) && (o && !O.isOpen && void 0 === e.items && g(!0), O.isOpen || (L.current = r), I(t))
                    },
                    open: B,
                    close: Q,
                    selectionManager: $,
                    selectedKey: A,
                    setSelectedKey: T,
                    disabledKeys: E,
                    isFocused: b,
                    setFocused: t => {
                        t ? (Y.current = D, "focus" !== d || e.isReadOnly || B(null, "focus")) : (f && Q(), D !== Y.current && z.commitValidation()), h(t)
                    },
                    selectedItem: F,
                    collection: ee,
                    inputValue: D,
                    setInputValue: w,
                    commit: () => {
                        O.isOpen && null != $.focusedKey ? A === $.focusedKey ? H() : T($.focusedKey) : Q()
                    },
                    revert: () => {
                        p && null == A ? W() : H()
                    }
                }
            }({
                ...e,
                defaultFilter: c
            }),
            f = (0, n.useRef)(null),
            m = (0, n.useRef)(null),
            b = (0, n.useRef)(null),
            v = (0, n.useRef)(null),
            {
                buttonProps: C,
                inputProps: x,
                listBoxProps: $,
                labelProps: A
            } = function(e, t) {
                var r, o, u, l, i;
                let a, s, {
                        buttonRef: d,
                        popoverRef: c,
                        inputRef: p,
                        listBoxRef: f,
                        keyboardDelegate: m,
                        layoutDelegate: g,
                        shouldFocusWrap: b,
                        isReadOnly: v,
                        isDisabled: C
                    } = e,
                    x = (0, n.useRef)(null);
                d = null != d ? d : x;
                let $ = (0, W.useLocalizedStringFormatter)((u = w) && u.__esModule ? u.default : u, "@react-aria/combobox"),
                    {
                        menuTriggerProps: A,
                        menuProps: S
                    } = (0, H.useMenuTrigger)({
                        type: "listbox",
                        isDisabled: C || v
                    }, t, d);
                O.listData.set(t, {
                    id: S.id
                });
                let {
                    collection: T
                } = t, {
                    disabledKeys: F
                } = t.selectionManager, E = (0, n.useMemo)(() => m || new(0, U.ListKeyboardDelegate)({
                    collection: T,
                    disabledKeys: F,
                    ref: f,
                    layoutDelegate: g
                }), [m, g, T, F, f]), {
                    collectionProps: k
                } = (0, z.useSelectableCollection)({
                    selectionManager: t.selectionManager,
                    keyboardDelegate: E,
                    disallowTypeAhead: !0,
                    disallowEmptySelection: !0,
                    shouldFocusWrap: b,
                    ref: p,
                    isVirtualized: !0
                }), D = (0, B.useRouter)(), {
                    isInvalid: j,
                    validationErrors: _,
                    validationDetails: Y
                } = t.displayValidation, {
                    labelProps: Z,
                    inputProps: J,
                    descriptionProps: X,
                    errorMessageProps: ee
                } = (0, Q.useTextField)({
                    ...e,
                    onChange: t.setInputValue,
                    onKeyDown: v ? e.onKeyDown : (0, R.chain)(t.isOpen && k.onKeyDown, r => {
                        if (!r.nativeEvent.isComposing) switch (r.key) {
                            case "Enter":
                            case "Tab":
                                if (t.isOpen && "Enter" === r.key && r.preventDefault(), t.isOpen && f.current && null != t.selectionManager.focusedKey && t.selectionManager.isLink(t.selectionManager.focusedKey)) {
                                    let e = f.current.querySelector(`[data-key="${CSS.escape(t.selectionManager.focusedKey.toString())}"]`);
                                    if ("Enter" === r.key && e instanceof HTMLAnchorElement) {
                                        let o = t.collection.getItem(t.selectionManager.focusedKey);
                                        o && D.open(e, r, o.props.href, o.props.routerOptions)
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
                        let u = (null == d ? void 0 : d.current) && d.current === r.relatedTarget,
                            n = null == (o = c.current) ? void 0 : o.contains(r.relatedTarget);
                        u || n || (e.onBlur && e.onBlur(r), t.setFocused(!1))
                    },
                    value: t.inputValue,
                    onFocus: r => {
                        t.isFocused || (e.onFocus && e.onFocus(r), t.setFocused(!0))
                    },
                    autoComplete: "off",
                    validate: void 0,
                    [y.privateValidationStateProp]: t
                }, p), et = (0, I.useLabels)({
                    id: A.id,
                    "aria-label": $.format("buttonLabel"),
                    "aria-labelledby": e["aria-labelledby"] || Z.id
                }), er = (0, I.useLabels)({
                    id: S.id,
                    "aria-label": $.format("listboxLabel"),
                    "aria-labelledby": e["aria-labelledby"] || Z.id
                }), eo = (0, n.useRef)(0), eu = null != t.selectionManager.focusedKey && t.isOpen ? t.collection.getItem(t.selectionManager.focusedKey) : void 0, en = null != (r = null == eu ? void 0 : eu.parentKey) ? r : null, el = null != (o = t.selectionManager.focusedKey) ? o : null, ei = (0, n.useRef)(en), ea = (0, n.useRef)(el);
                (0, n.useEffect)(() => {
                    if ((0, P.isAppleDevice)() && null != eu && null != el && el !== ea.current) {
                        var e;
                        let r = t.selectionManager.isSelected(el),
                            o = null != en ? t.collection.getItem(en) : null,
                            u = (null == o ? void 0 : o["aria-label"]) || ("string" == typeof(null == o ? void 0 : o.rendered) ? o.rendered : "") || "";
                        V($.format("focusAnnouncement", {
                            isGroupChange: null != (e = o && en !== ei.current) && e,
                            groupTitle: u,
                            groupCount: o ? [...(0, M.getChildNodes)(o, t.collection)].length : 0,
                            optionText: eu["aria-label"] || eu.textValue || "",
                            isSelected: r
                        }))
                    }
                    ei.current = en, ea.current = el
                });
                let es = (0, K.getItemCount)(t.collection),
                    ed = (0, n.useRef)(es),
                    ec = (0, n.useRef)(t.isOpen);
                (0, n.useEffect)(() => {
                    let e = t.isOpen !== ec.current && (null == t.selectionManager.focusedKey || (0, P.isAppleDevice)());
                    t.isOpen && (e || es !== ed.current) && V($.format("countAnnouncement", {
                        optionCount: es
                    })), ed.current = es, ec.current = t.isOpen
                });
                let ep = (0, n.useRef)(t.selectedKey);
                return (0, n.useEffect)(() => {
                    if ((0, P.isAppleDevice)() && t.isFocused && t.selectedItem && t.selectedKey !== ep.current) {
                        let e = t.selectedItem["aria-label"] || t.selectedItem.textValue || "";
                        V($.format("selectedAnnouncement", {
                            optionText: e
                        }))
                    }
                    ep.current = t.selectedKey
                }), (0, n.useEffect)(() => {
                    if (t.isOpen) return (0, L.ariaHideOutside)([p.current, c.current].filter(e => null != e))
                }, [t.isOpen, p, c]), l = () => {
                    !eu && p.current && (0, N.getActiveElement)((0, G.getOwnerDocument)(p.current)) === p.current && (0, q.dispatchVirtualFocus)(p.current, null)
                }, i = [eu], a = (0, n.useRef)(!0), s = (0, n.useRef)(null), (0, n.useEffect)(() => (a.current = !0, () => {
                    a.current = !1
                }), []), (0, n.useEffect)(() => {
                    let e = s.current;
                    a.current ? a.current = !1 : (!e || i.some((t, r) => !Object.is(t, e[r]))) && l(), s.current = i
                }, i), {
                    labelProps: Z,
                    buttonProps: {
                        ...A,
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
                        isDisabled: C || v
                    },
                    inputProps: (0, h.mergeProps)(J, {
                        role: "combobox",
                        "aria-expanded": A["aria-expanded"],
                        "aria-controls": t.isOpen ? S.id : void 0,
                        "aria-autocomplete": "list",
                        "aria-activedescendant": eu ? (0, O.getItemId)(t, eu.key) : void 0,
                        onTouchEnd: e => {
                            var r, o;
                            if (C || v) return;
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
                    listBoxProps: (0, h.mergeProps)(S, er, {
                        autoFocus: t.focusStrategy || !0,
                        shouldUseVirtualFocus: !0,
                        shouldSelectOnPressUp: !0,
                        shouldFocusOnHover: !0,
                        linkBehavior: "selection"
                    }),
                    descriptionProps: X,
                    errorMessageProps: ee,
                    isInvalid: j,
                    validationErrors: _,
                    validationDetails: Y
                }
            }({
                ...e,
                inputRef: m,
                buttonRef: f,
                listBoxRef: b,
                popoverRef: v
            }, p),
            {
                buttonProps: T
            } = (0, ee.useButton)(C, f),
            F = (0, g.default)("stroke-gray-900 group-hover/select:stroke-gray-800 dark:group-hover/select:stroke-gray-200 transition-all ease-out duration-400", {
                "rotate-180 stroke-gray-900 ": p.isOpen
            }),
            E = (0, g.default)("rounded-lg w-full border border-gray-200 outline-blue focus:ring-3 focus:ring-blue-dark focus:outline-blue focus:outline-offset-0 focus:border-none transition-all ease-out duration-400", "text-gray-900 dark:text-gray-400 dark:text-white", "placeholder-gray-600 dark:placeholder-gray-400", {
                "bg-gray-100 dark:bg-gray-800 cursor-not-allowed": a,
                "border-yellow-500 dark:border-yellow-500 border-2": d,
                "border-red-500 dark:border-red-500 border-2": s
            }, {
                "bg-gray-50 dark:bg-gray-900": !a,
                "border-gray-400 hover:border-gray-900 dark:border-gray-500 dark:hover:border-white": !s && !d
            });
        return (0, u.jsxs)("div", {
            className: "inline-flex w-full flex-col",
            children: [(0, u.jsxs)("div", {
                className: "flex justify-between",
                children: [(0, u.jsx)("label", {
                    ...A,
                    className: "inline-block pb-2",
                    children: e.label
                }), e.required && (0, u.jsx)("span", {
                    className: "text-sm text-gray-400",
                    children: e.requiredText
                })]
            }), (0, u.jsxs)("div", {
                className: "relative inline-block w-full",
                children: [(0, u.jsx)("input", {
                    ...x,
                    ref: m,
                    className: E
                }), (0, u.jsx)("button", {
                    className: "absolute top-0 right-0 bottom-0 h-10 px-2 text-gray-900",
                    ...T,
                    ref: f,
                    children: (0, u.jsx)("span", {
                        "aria-hidden": "true",
                        children: (0, u.jsx)(et.default, {
                            className: F
                        })
                    })
                }), e.helpText && (0, u.jsx)(er.default, {
                    helperText: e.helpText,
                    hasError: e.hasError,
                    hasWarning: e.hasWarning
                }), p.isOpen && (0, u.jsx)(el, {
                    popoverRef: v,
                    isOpen: p.isOpen,
                    onClose: p.close,
                    children: (0, u.jsx)(ed, {
                        ...$,
                        listBoxRef: b,
                        state: p
                    })
                })]
            })]
        })
    };
    ep.Item = ec.Item;
    var ef = e.i(475200);
    e.s(["default", 0, e => {
        let {
            visibleConditions: t,
            visibleCountry: r,
            countryCode: o
        } = e, i = (0, ef.default)(), d = e?.chained?.map(e => e.dependant) || [];
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
            g = e => (0, u.jsx)(ep.Item, {
                children: e?.label || e?.option
            }, e.value),
            b = t => {
                e.setValue(e.formFieldId, t, {
                    shouldValidate: !0
                })
            },
            h = e => (0, u.jsx)(ep.Item, {
                children: e.label
            }, e.value);
        return f && c(r, o) ? (0, u.jsx)(a.Controller, {
            name: e.formFieldId,
            control: e.control,
            rules: {
                required: e.isRequired
            },
            render: ({
                fieldState: t
            }) => (0, u.jsxs)(u.Fragment, {
                children: [!d.some(t => t === e.formFieldId) && (i ? (0, u.jsxs)("div", {
                    className: "inline-flex w-full flex-col",
                    children: [(0, u.jsxs)("label", {
                        className: "flex items-center justify-between pb-2",
                        children: [(0, u.jsx)("span", {
                            children: e.label
                        }), e.isRequired && (0, u.jsx)("span", {
                            className: "text-sm text-gray-400",
                            children: e.requiredText
                        })]
                    }), (0, u.jsx)(D.default, {
                        isDisabled: e.isDisabled,
                        selectedKey: e.defaultValue,
                        label: e.label,
                        name: e.formFieldId,
                        placeholder: e.placeholder,
                        onSelectionChange: m,
                        className: t.error ? "rounded-lg border-2 border-red-500 bg-white p-2" : "rounded-lg border border-gray-300 bg-white p-2",
                        children: (e?.dropdownOptionsFromReference?.options || e?.dropdownOptions || []).map(t => {
                            let r, o;
                            return r = void 0 !== t.value ? t.value : t.key || t.toString(), (o = t.label || t.option || t.text || t.toString() || e.placeholder) && "string" != typeof o && (o = r), (0, u.jsx)(D.default.Item, {
                                children: o
                            }, r)
                        })
                    }), t.error && (0, u.jsx)(er.default, {
                        helperText: (0, l.default)(e.helpText, e.errorText, e.warningText, void 0 !== t.error, !1),
                        hasError: void 0 !== t.error
                    })]
                }) : (0, u.jsx)(ep, {
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
                    }), (0, u.jsx)(D.default, {
                        isDisabled: e.isDisabled,
                        selectedKey: e.defaultValue,
                        label: e.label,
                        name: e.formFieldId,
                        placeholder: e.placeholder,
                        onSelectionChange: b,
                        className: t.error ? "rounded-lg border-2 border-red-500 bg-white p-2" : "rounded-lg border border-gray-300 bg-white p-2",
                        children: (e?.dropdownOptionsFromReference?.options || e?.dropdownOptions || []).map(t => {
                            let r, o;
                            return r = void 0 !== t.value ? t.value : t.key || t.toString(), o = t.label || t.text || t.toString() || e.placeholder, (0, u.jsx)(D.default.Item, {
                                children: o
                            }, r)
                        })
                    }), t.error && (0, u.jsx)(er.default, {
                        helperText: (0, l.default)(e.helpText, e.errorText, e.warningText, void 0 !== t.error, !1),
                        hasError: void 0 !== t.error
                    })]
                }, o) : (0, u.jsx)(ep, {
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
    let em = {
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
        if (!s(r, i) || !c(o, n)) return null;
        let d = t?.text;
        return !d || Array.isArray(d) && 0 === d.length ? null : (0, u.jsx)(k.default, {
            className: l,
            children: (0, u.jsx)(m.PortableText, {
                value: d,
                components: em
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
        isGrowForm: d = !1
    } = {}) => {
        var c;
        let p = (0, l.getFilteredQueryParams)(["sfcid", "sflsa", "sfit"], d),
            [f, m] = (0, t.useState)({}),
            [g, b] = (0, t.useState)(!1),
            h = (c = ["elqCustomerGUID"], e ? e.filter(e => "hidden" === e.inputType && !c.includes(e.formFieldId)).reduce((e, t) => Object.assign(e, {
                [t.formFieldId]: t.defaultValue
            }), {}) : {}),
            [y] = (0, o.default)("ELOQUA"),
            {
                setFormSubmitted: v
            } = (0, u.useResourcesDetailContext)(),
            C = (0, t.useRef)(void 0),
            x = (0, t.useRef)(0),
            $ = (0, t.useRef)(void 0),
            A = (0, t.useRef)(0),
            S = (0, t.useCallback)(e => {
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
                m(S(e))
            })
        }, [S]), (0, t.useEffect)(() => {
            if (y) {
                b(!0);
                let e = setInterval(() => {
                    x.current++, void 0 !== window._elqQ && (window._elqQ.push(["elqDataLookup", escape("7cd261a6ba06486b88648045c9069652"), ""]), clearInterval(e)), 50 === x.current && (b(!1), clearInterval(e))
                }, 100);
                C.current = e
            }
            return () => {
                clearInterval(C.current)
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
                growDepartment: c
            } = a;
            t = {
                ...t,
                ...h,
                ...p,
                ...f,
                ...d ? {
                    emailConfirmation: o,
                    grow: !0,
                    gcid: u,
                    ghandler: l,
                    growDivision: i,
                    growDepartment: c
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
                }), v(!0)
            }).catch(e => r.captureException(e)).finally(() => {
                b(!1)
            })
        }, [s, v, y, h, p, f, a, d]);
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
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "64f1f686-ad9e-5402-a3be-1234fce6476c")
    } catch (e) {}
}();
//# debugId=64f1f686-ad9e-5402-a3be-1234fce6476c