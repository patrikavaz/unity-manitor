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
        n = e.r(394272),
        u = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        if (!o(e)) return n(e);
        var t = [];
        for (var r in Object(e)) u.call(e, r) && "constructor" != r && t.push(r);
        return t
    }
}, 238591, (e, t, r) => {
    var o = e.r(416907),
        n = e.r(394022);
    t.exports = function(e) {
        return n(e) && "[object Arguments]" == o(e)
    }
}, 410090, (e, t, r) => {
    var o = e.r(238591),
        n = e.r(394022),
        u = Object.prototype,
        l = u.hasOwnProperty,
        i = u.propertyIsEnumerable;
    t.exports = o(function() {
        return arguments
    }()) ? o : function(e) {
        return n(e) && l.call(e, "callee") && !i.call(e, "callee")
    }
}, 784800, (e, t, r) => {
    t.exports = function(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 0x1fffffffffffff
    }
}, 622914, (e, t, r) => {
    var o = e.r(462931),
        n = e.r(784800);
    t.exports = function(e) {
        return null != e && n(e.length) && !o(e)
    }
}, 756024, (e, t, r) => {
    t.exports = function() {
        return !1
    }
}, 432816, (e, t, r) => {
    var o = e.r(78974),
        n = e.r(756024),
        u = r && !r.nodeType && r,
        l = u && t && !t.nodeType && t,
        i = l && l.exports === u ? o.Buffer : void 0;
    t.exports = (i ? i.isBuffer : void 0) || n
}, 742112, (e, t, r) => {
    var o = e.r(416907),
        n = e.r(784800),
        u = e.r(394022),
        l = {};
    l["[object Float32Array]"] = l["[object Float64Array]"] = l["[object Int8Array]"] = l["[object Int16Array]"] = l["[object Int32Array]"] = l["[object Uint8Array]"] = l["[object Uint8ClampedArray]"] = l["[object Uint16Array]"] = l["[object Uint32Array]"] = !0, l["[object Arguments]"] = l["[object Array]"] = l["[object ArrayBuffer]"] = l["[object Boolean]"] = l["[object DataView]"] = l["[object Date]"] = l["[object Error]"] = l["[object Function]"] = l["[object Map]"] = l["[object Number]"] = l["[object Object]"] = l["[object RegExp]"] = l["[object Set]"] = l["[object String]"] = l["[object WeakMap]"] = !1, t.exports = function(e) {
        return u(e) && n(e.length) && !!l[o(e)]
    }
}, 585466, (e, t, r) => {
    t.exports = function(e) {
        return function(t) {
            return e(t)
        }
    }
}, 91480, (e, t, r) => {
    var o = e.r(505918),
        n = r && !r.nodeType && r,
        u = n && t && !t.nodeType && t,
        l = u && u.exports === n && o.process;
    t.exports = function() {
        try {
            var e = u && u.require && u.require("util").types;
            if (e) return e;
            return l && l.binding && l.binding("util")
        } catch (e) {}
    }()
}, 905330, (e, t, r) => {
    var o = e.r(742112),
        n = e.r(585466),
        u = e.r(91480),
        l = u && u.isTypedArray;
    t.exports = l ? n(l) : o
}, 968651, e => {
    "use strict";
    e.s(["default", 0, (e, t, r, o, n) => o ? t : n ? r : e || ""])
}, 466673, e => {
    "use strict";
    var t = e.i(499531),
        r = e => e instanceof Date,
        o = e => null == e;
    let n = e => "object" == typeof e;
    var u = e => !o(e) && !Array.isArray(e) && n(e) && !r(e),
        l = e => u(e) && e.target ? "checkbox" === e.target.type ? e.target.checked : e.target.value : e,
        i = (e, t) => t.split(".").some((t, r, o) => !isNaN(Number(t)) && e.has(o.slice(0, r).join("."))),
        a = e => {
            let t = e.constructor && e.constructor.prototype;
            return u(t) && t.hasOwnProperty("isPrototypeOf")
        },
        s = "u" > typeof window && void 0 !== window.HTMLElement && "u" > typeof document;

    function d(e) {
        if (e instanceof Date) return new Date(e);
        let t = "u" > typeof FileList && e instanceof FileList;
        if (s && (e instanceof Blob || t)) return e;
        let r = Array.isArray(e);
        if (!r && !(u(e) && a(e))) return e;
        let o = r ? [] : Object.create(Object.getPrototypeOf(e));
        for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (o[t] = d(e[t]));
        return o
    }
    let c = "blur",
        p = "trigger",
        f = "onChange",
        m = "onSubmit",
        g = "maxLength",
        b = "minLength",
        h = "pattern",
        y = "required",
        v = "validate",
        C = "root",
        x = ["__proto__", "constructor", "prototype"],
        $ = /^\w*$/;
    var A = e => void 0 === e;
    let S = /[.[\]'"]/;
    var V = e => e.split(S).filter(Boolean),
        F = (e, t, r) => {
            if (!t || !u(e)) return r;
            let n = $.test(t) ? [t] : V(t);
            if (n.some(e => x.includes(e))) return r;
            let l = n.reduce((e, t) => o(e) ? void 0 : e[t], e);
            return A(l) || l === e ? A(e[t]) ? r : e[t] : l
        },
        k = e => "function" == typeof e,
        T = (e, t, r) => {
            let o = -1,
                n = $.test(t) ? [t] : V(t),
                l = n.length,
                i = l - 1;
            for (; ++o < l;) {
                let t = n[o],
                    l = r;
                if (o !== i) {
                    let r = e[t];
                    l = u(r) || Array.isArray(r) ? r : isNaN(+n[o + 1]) ? {} : []
                }
                if (x.includes(t)) return;
                e[t] = l, e = e[t]
            }
        };
    let E = t.default.createContext(null);
    E.displayName = "HookFormControlContext";
    var w = (e, t, r, o = !0) => {
        let n = {};
        for (let u in e) Object.defineProperty(n, u, {
            get: () => ("all" !== t._proxyFormState[u] && (t._proxyFormState[u] = !o || "all"), r && (r[u] = !0), e[u])
        });
        return n
    };
    let D = s ? t.default.useLayoutEffect : t.default.useEffect;
    var j = e => "string" == typeof e,
        _ = (e, t, r, o, n) => j(e) ? (o && t.watch.add(e), F(r, e, n)) : Array.isArray(e) ? e.map(e => (o && t.watch.add(e), F(r, e))) : (o && (t.watchAll = !0), r),
        O = e => o(e) || !n(e);
    let L = (e, t) => 0 === t.length && !Array.isArray(e) && !a(e);

    function R(e, t, o = new WeakMap) {
        if (e === t) return !0;
        if (O(e) || O(t)) return Object.is(e, t);
        if (r(e) && r(t)) return Object.is(e.getTime(), t.getTime());
        let n = Object.keys(e),
            l = Object.keys(t);
        if (n.length !== l.length) return !1;
        if (L(e, n) || L(t, l)) return Object.is(e, t);
        if (!n.length && Array.isArray(e) !== Array.isArray(t)) return !1;
        let i = o.get(e);
        if (i && i.has(t)) return !0;
        if (i) i.add(t);
        else {
            let r = new WeakSet;
            r.add(t), o.set(e, r)
        }
        for (let l of n) {
            let n = e[l];
            if (!(l in t)) return !1;
            if ("ref" !== l) {
                let e = t[l];
                if (r(n) && r(e) || (u(n) || Array.isArray(n)) && (u(e) || Array.isArray(e)) ? !R(n, e, o) : !Object.is(n, e)) return !1
            }
        }
        return !0
    }

    function B(e) {
        let r = t.default.useContext(E),
            {
                control: o = r,
                name: n,
                defaultValue: u,
                disabled: l,
                exact: i,
                compute: a
            } = e || {},
            s = t.default.useRef(u),
            d = t.default.useRef(a),
            c = t.default.useRef(void 0),
            p = t.default.useRef(o),
            f = t.default.useRef(n);
        d.current = a;
        let [m, g] = t.default.useState(() => {
            let e = o._getWatch(n, s.current);
            return d.current ? d.current(e) : e
        }), b = t.default.useCallback(e => {
            let t = _(n, o._names, e || o._formValues, !1, s.current);
            return d.current ? d.current(t) : t
        }, [o._formValues, o._names, n]), h = t.default.useCallback(e => {
            if (!l) {
                let t = _(n, o._names, e || o._formValues, !1, s.current);
                if (d.current) {
                    let e = d.current(t);
                    R(e, c.current) || (g(e), c.current = e)
                } else g(t)
            }
        }, [o._formValues, o._names, l, n]);
        D(() => (p.current === o && R(f.current, n) || (p.current = o, f.current = n, h()), o._subscribe({
            name: n,
            formState: {
                values: !0
            },
            exact: i,
            callback: e => {
                h(e.values)
            }
        })), [o, i, n, h]), t.default.useEffect(() => o._removeUnmounted());
        let y = p.current !== o,
            v = f.current,
            C = t.default.useMemo(() => {
                if (l) return null;
                let e = !y && !R(v, n);
                return y || e ? b() : null
            }, [l, y, n, v, b]);
        return null !== C ? C : m
    }
    let I = e => {
        let t = {};
        for (let o of Object.keys(e))
            if (n(e[o]) && null !== e[o] && !r(e[o])) {
                let r = I(e[o]);
                for (let e of Object.keys(r)) t[`${o}.${e}`] = r[e]
            } else t[o] = e[o];
        return t
    };
    t.default.createContext(null).displayName = "HookFormContext";
    var P = (e, t, r, o, n) => t ? {
            ...r[e],
            types: {
                ...r[e] && r[e].types ? r[e].types : {},
                [o]: n || !0
            }
        } : {},
        N = e => Array.isArray(e) ? e.filter(Boolean) : [],
        M = e => Array.isArray(e) ? e : [e],
        q = () => {
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
        G = e => u(e) && !Object.keys(e).length,
        U = e => {
            if (!s) return !1;
            let t = e ? e.ownerDocument : 0;
            return e instanceof(t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
        },
        K = e => U(e) && e.isConnected;

    function z(e, t) {
        if (j(t) && Object.prototype.hasOwnProperty.call(e, t)) return delete e[t], e;
        let r = Array.isArray(t) ? t : $.test(t) ? [t] : V(t);
        if (r.some(e => x.includes(String(e)))) return e;
        let n = 1 === r.length ? e : function(e, t) {
                let r = t.slice(0, -1).length,
                    n = 0;
                for (; n < r;) {
                    if (o(e)) {
                        e = void 0;
                        break
                    }
                    e = e[t[n]], n++
                }
                return e
            }(e, r),
            l = r.length - 1,
            i = r[l];
        return n && delete n[i], 0 !== l && (u(n) && G(n) || Array.isArray(n) && function(e) {
            for (let t in e)
                if (e.hasOwnProperty(t) && !A(e[t])) return !1;
            return !0
        }(n)) && z(e, r.slice(0, -1)), e
    }

    function Z(e) {
        return Array.isArray(e) || u(e) && !(e => {
            for (let t in e)
                if (k(e[t])) return !0;
            return !1
        })(e)
    }

    function W(e, t = {}) {
        for (let r in e) {
            let o = e[r];
            Z(o) ? (t[r] = Array.isArray(o) ? [] : {}, W(o, t[r])) : A(o) || (t[r] = !0)
        }
        return t
    }

    function H(e, t, r) {
        for (let n in r || (r = W(t)), e) {
            let u = e[n];
            if (Z(u)) A(t) || O(r[n]) ? r[n] = W(u, Array.isArray(u) ? [] : {}) : H(u, o(t) ? {} : t[n], r[n]);
            else {
                let e = t[n];
                r[n] = !R(u, e)
            }
        }
        return function e(t) {
            if (!1 !== t) {
                if (!0 === t) return !0;
                if (Array.isArray(t)) {
                    let r = t.map(t => e(t));
                    return r.some(e => void 0 !== e) ? r : void 0
                }
                if (u(t)) {
                    let r = {};
                    for (let o in t) {
                        let n = e(t[o]);
                        A(n) || (r[o] = n)
                    }
                    return Object.keys(r).length ? r : void 0
                }
            }
        }(r) || {}
    }
    let Q = {
            value: !1,
            isValid: !1
        },
        Y = {
            value: !0,
            isValid: !0
        };
    var J = e => {
            if (Array.isArray(e)) {
                if (e.length > 1) {
                    let t = e.filter(e => e && e.checked && !e.disabled).map(e => e.value);
                    return {
                        value: t,
                        isValid: !!t.length
                    }
                }
                return e[0].checked && !e[0].disabled ? e[0].attributes && !A(e[0].attributes.value) ? A(e[0].value) || "" === e[0].value ? Y : {
                    value: e[0].value,
                    isValid: !0
                } : Y : Q
            }
            return Q
        },
        X = (e, {
            valueAsNumber: t,
            valueAsDate: r,
            setValueAs: o
        }) => A(e) ? e : t ? "" === e ? NaN : e ? +e : e : r && j(e) ? new Date(e) : o ? o(e) : e;
    let ee = {
        isValid: !1,
        value: null
    };
    var et = e => Array.isArray(e) ? e.reduce((e, t) => t && t.checked && !t.disabled ? {
        isValid: !0,
        value: t.value
    } : e, ee) : ee;

    function er(e) {
        let t = e.ref;
        return "file" === t.type ? t.files : "radio" === t.type ? et(e.refs).value : "select-multiple" === t.type ? [...t.selectedOptions].map(({
            value: e
        }) => e) : "checkbox" === t.type ? J(e.refs).value : X(A(t.value) ? e.ref.value : t.value, e)
    }
    var eo = e => A(e) ? e : e instanceof RegExp ? e.source : u(e) ? e.value instanceof RegExp ? e.value.source : e.value : e,
        en = e => ({
            isOnSubmit: !e || e === m,
            isOnBlur: "onBlur" === e,
            isOnChange: e === f,
            isOnAll: "all" === e,
            isOnTouch: "onTouched" === e
        });
    let eu = "AsyncFunction";
    var el = e => {
            if (!e || !e.validate) return !1;
            if (k(e.validate)) return e.validate.constructor.name === eu;
            if (u(e.validate)) {
                for (let t in e.validate)
                    if (e.validate[t].constructor.name === eu) return !0
            }
            return !1
        },
        ei = (e, t, r) => {
            if (r) return !1;
            if (t.watchAll || t.watch.has(e)) return !0;
            for (let r of t.watch)
                if (e.startsWith(r) && "." === e.charAt(r.length)) return !0;
            return !1
        };
    let ea = (e, t, r, o) => {
        for (let n of r || Object.keys(e)) {
            let r = F(e, n);
            if (r) {
                let {
                    _f: e,
                    ...l
                } = r;
                if (e) {
                    if (e.refs && e.refs[0] && t(e.refs[0], n) && !o) return !0;
                    else if (e.ref && t(e.ref, e.name) && !o) return !0;
                    else if (ea(l, t)) break
                } else if (u(l) && ea(l, t)) break
            }
        }
    };

    function es(e, t, r) {
        let o = F(e, r);
        if (o || $.test(r)) return {
            error: o,
            name: r
        };
        let n = r.split(".");
        for (; n.length;) {
            let o = n.join("."),
                u = F(t, o),
                l = F(e, o);
            if (u && !Array.isArray(u) && r !== o) break;
            if (l && l.type) return {
                name: o,
                error: l
            };
            if (l && l.root && l.root.type) return {
                name: `${o}.root`,
                error: l.root
            };
            n.pop()
        }
        return {
            name: r
        }
    }
    var ed = (e, t, r) => {
        let o = F(e, r),
            n = Array.isArray(o) ? o : [];
        return T(n, C, t[r]), T(e, r, n), e
    };

    function ec(e, t, r = "validate") {
        if (j(e) || Array.isArray(e) && e.every(j) || "boolean" == typeof e && !e) return {
            type: r,
            message: j(e) ? e : "",
            ref: t
        }
    }
    var ep = e => !u(e) || e instanceof RegExp ? {
            value: e,
            message: ""
        } : e,
        ef = async (e, t, r, n, l, i) => {
            let {
                ref: a,
                refs: s,
                required: d,
                maxLength: c,
                minLength: p,
                min: f,
                max: m,
                pattern: C,
                validate: x,
                name: $,
                valueAsNumber: S,
                mount: V
            } = e._f, T = F(r, $);
            if (!V || t.has($)) return {};
            let E = s ? s[0] : a,
                w = e => {
                    if (l && E.reportValidity) {
                        let t = "boolean" == typeof e ? "" : e || "";
                        s ? s.forEach(e => e.setCustomValidity(t)) : E.setCustomValidity(t), E.reportValidity()
                    }
                },
                D = {},
                _ = "radio" === a.type,
                O = "checkbox" === a.type,
                L = (S || "file" === a.type) && A(a.value) && A(T) || U(a) && "" === a.value || "" === T || Array.isArray(T) && !T.length,
                R = P.bind(null, $, n, D),
                B = (e, t, r, o = g, n = b) => {
                    let u = e ? t : r;
                    D[$] = {
                        type: e ? o : n,
                        message: u,
                        ref: a,
                        ...R(e ? o : n, u)
                    }
                };
            if (i ? !Array.isArray(T) || !T.length : d && (!(_ || O) && (L || o(T)) || "boolean" == typeof T && !T || O && !J(s).isValid || _ && !et(s).isValid)) {
                let {
                    value: e,
                    message: t
                } = j(d) ? {
                    value: !!d,
                    message: d
                } : ep(d);
                if (e && (D[$] = {
                        type: y,
                        message: t,
                        ref: E,
                        ...R(y, t)
                    }, !n)) return w(t), D
            }
            if (!L && (!o(f) || !o(m))) {
                let e, t, r = ep(m),
                    u = ep(f);
                if (o(T) || isNaN(T)) {
                    let o = a.valueAsDate || new Date(T),
                        n = e => new Date(new Date().toDateString() + " " + e),
                        l = "time" == a.type,
                        i = "week" == a.type;
                    j(r.value) && T && (e = l ? n(T) > n(r.value) : i ? T > r.value : o > new Date(r.value)), j(u.value) && T && (t = l ? n(T) < n(u.value) : i ? T < u.value : o < new Date(u.value))
                } else {
                    let n = a.valueAsNumber || (T ? +T : T);
                    o(r.value) || (e = n > r.value), o(u.value) || (t = n < u.value)
                }
                if ((e || t) && (B(!!e, r.message, u.message, "max", "min"), !n)) return w(D[$].message), D
            }
            if ((c || p) && !L && (j(T) || i && Array.isArray(T))) {
                let e = ep(c),
                    t = ep(p),
                    r = !o(e.value) && T.length > +e.value,
                    u = !o(t.value) && T.length < +t.value;
                if ((r || u) && (B(r, e.message, t.message), !n)) return w(D[$].message), D
            }
            if (C && !L && j(T)) {
                let {
                    value: e,
                    message: t
                } = ep(C);
                if (e instanceof RegExp && !T.match(e) && (D[$] = {
                        type: h,
                        message: t,
                        ref: a,
                        ...R(h, t)
                    }, !n)) return w(t), D
            }
            if (x) {
                if (k(x)) {
                    let e = ec(await x(T, r), E);
                    if (e && (D[$] = {
                            ...e,
                            ...R(v, e.message)
                        }, !n)) return w(e.message), D
                } else if (u(x)) {
                    let e = {};
                    for (let t in x) {
                        if (!G(e) && !n) break;
                        let o = ec(await x[t](T, r), E, t);
                        o && (e = {
                            ...o,
                            ...R(t, o.message)
                        }, w(o.message), n && (D[$] = e))
                    }
                    if (!G(e) && (D[$] = {
                            ref: E,
                            ...e
                        }, !n)) return D
                }
            }
            return w(!0), D
        };
    let em = {
            mode: m,
            reValidateMode: f,
            shouldFocusError: !0
        },
        eg = "form",
        eb = {
            submitCount: 0,
            isDirty: !1,
            isReady: !1,
            isValidating: !1,
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            touchedFields: {},
            dirtyFields: {},
            validatingFields: {}
        };
    e.s(["Controller", 0, e => e.render(function(e) {
        let r = t.default.useContext(E),
            {
                name: o,
                disabled: n,
                control: u = r,
                shouldUnregister: a,
                defaultValue: s,
                exact: p = !0
            } = e,
            f = i(u._names.array, o),
            m = t.default.useMemo(() => F(u._formValues, o, F(u._defaultValues, o, s)), [u, o, s]),
            g = B({
                control: u,
                name: o,
                defaultValue: m,
                exact: p
            }),
            b = function(e) {
                let r = t.default.useContext(E),
                    {
                        control: o = r,
                        disabled: n,
                        name: u,
                        exact: l
                    } = e || {},
                    [i, a] = t.default.useState(() => ({
                        ...o._formState,
                        defaultValues: o._defaultValues
                    })),
                    s = t.default.useRef({
                        isDirty: !1,
                        isLoading: !1,
                        dirtyFields: !1,
                        touchedFields: !1,
                        validatingFields: !1,
                        isValidating: !1,
                        isValid: !1,
                        errors: !1
                    });
                return D(() => o._subscribe({
                    name: u,
                    formState: s.current,
                    exact: l,
                    callback: e => {
                        n || a({
                            ...o._formState,
                            ...e,
                            defaultValues: o._defaultValues
                        })
                    }
                }), [u, n, l]), t.default.useEffect(() => {
                    s.current.isValid && o._setValid(!0)
                }, [o]), t.default.useMemo(() => w(i, o, s.current, !1), [i, o])
            }({
                control: u,
                name: o,
                exact: p
            }),
            h = t.default.useRef(e),
            y = t.default.useRef(null),
            v = t.default.useRef(u.register(o, {
                ...e.rules,
                value: g,
                ..."boolean" == typeof e.disabled ? {
                    disabled: e.disabled
                } : {}
            }));
        h.current = e;
        let C = t.default.useMemo(() => Object.defineProperties({}, {
                invalid: {
                    enumerable: !0,
                    get: () => !!F(b.errors, o)
                },
                isDirty: {
                    enumerable: !0,
                    get: () => !!F(b.dirtyFields, o)
                },
                isTouched: {
                    enumerable: !0,
                    get: () => !!F(b.touchedFields, o)
                },
                isValidating: {
                    enumerable: !0,
                    get: () => !!F(b.validatingFields, o)
                },
                error: {
                    enumerable: !0,
                    get: () => F(b.errors, o)
                }
            }), [b, o]),
            x = t.default.useCallback(e => {
                let t = l(e);
                return F(u._fields, o) || (v.current = u.register(o, {
                    ...h.current.rules,
                    value: t
                })), v.current.onChange({
                    target: {
                        value: l(e),
                        name: o
                    },
                    type: "change"
                })
            }, [o, u]),
            $ = t.default.useCallback(() => v.current.onBlur({
                target: {
                    value: F(u._formValues, o),
                    name: o
                },
                type: c
            }), [o, u._formValues]),
            S = t.default.useCallback(e => {
                e && (y.current = {
                    focus: () => k(e.focus) && e.focus(),
                    select: () => k(e.select) && e.select(),
                    setCustomValidity: t => k(e.setCustomValidity) && e.setCustomValidity(t),
                    reportValidity: () => k(e.reportValidity) && e.reportValidity()
                });
                let t = F(u._fields, o);
                t && t._f && e && (t._f.ref = y.current)
            }, [u._fields, o]),
            V = t.default.useMemo(() => ({
                name: o,
                value: g,
                ..."boolean" == typeof n || b.disabled ? {
                    disabled: b.disabled || n
                } : {},
                onChange: x,
                onBlur: $,
                ref: S
            }), [o, n, b.disabled, x, $, S, g]);
        return t.default.useEffect(() => {
            let e = u._options.shouldUnregister || a;
            u.register(o, {
                ...h.current.rules,
                ..."boolean" == typeof h.current.disabled ? {
                    disabled: h.current.disabled
                } : {}
            });
            let t = (e, t) => {
                let r = F(u._fields, e);
                r && r._f && (r._f.mount = t)
            };
            if (t(o, !0), e) {
                let e = d(F(a ? u._defaultValues : u._options.values || u._defaultValues, o, F(u._options.defaultValues, o, h.current.defaultValue)));
                T(u._defaultValues, o, e), A(F(u._formValues, o)) && T(u._formValues, o, e)
            }
            if (f || u.register(o), y.current) {
                let e = F(u._fields, o);
                e && e._f && (e._f.ref = y.current)
            }
            return () => {
                (f ? e && !u._state.action : e) ? u.unregister(o): t(o, !1)
            }
        }, [o, u, f, a]), t.default.useEffect(() => {
            u._setDisabledField({
                disabled: n,
                name: o
            })
        }, [n, o, u]), t.default.useMemo(() => ({
            field: V,
            formState: b,
            fieldState: C
        }), [V, b, C])
    }(e)), "useForm", 0, function(e = {}) {
        let n = t.default.useRef(void 0),
            a = t.default.useRef(void 0),
            f = t.default.useRef(e.formControl),
            [m, g] = t.default.useState(() => ({
                ...d(eb),
                isLoading: k(e.defaultValues),
                errors: e.errors || {},
                disabled: e.disabled || !1,
                defaultValues: k(e.defaultValues) ? void 0 : e.defaultValues
            }));
        if (!n.current || e.formControl && f.current !== e.formControl)
            if (f.current = e.formControl, e.formControl) n.current = {
                ...e.formControl,
                formState: m
            }, e.defaultValues && !k(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions);
            else {
                let {
                    formControl: t,
                    ...a
                } = function(e = {}) {
                    let t, n = {
                            ...em,
                            ...e
                        },
                        a = {
                            ...d(eb),
                            isLoading: k(n.defaultValues),
                            errors: n.errors || {},
                            disabled: n.disabled || !1
                        },
                        f = {},
                        m = (u(n.defaultValues) || u(n.values)) && d(n.defaultValues || n.values) || {},
                        g = n.shouldUnregister ? {} : d(m),
                        b = {
                            action: !1,
                            mount: !1,
                            watch: !1,
                            keepIsValid: !1
                        },
                        h = {
                            mount: new Set,
                            disabled: new Set,
                            unMount: new Set,
                            array: new Set,
                            watch: new Set,
                            registerName: new Set
                        },
                        y = 0,
                        x = 0,
                        S = en(n.mode),
                        E = en(n.reValidateMode),
                        w = {
                            isDirty: !1,
                            dirtyFields: !1,
                            validatingFields: !1,
                            touchedFields: !1,
                            isValidating: !1,
                            isValid: !1,
                            errors: !1
                        },
                        D = {
                            ...w
                        },
                        O = {
                            ...D
                        },
                        L = {
                            array: q(),
                            state: q()
                        },
                        B = "all" === n.criteriaMode,
                        P = async e => {
                            if (!b.keepIsValid && !n.disabled && (D.isValid || O.isValid || e)) {
                                let e;
                                n.resolver ? (e = G((await J()).errors), Z()) : e = await eu({
                                    fields: f,
                                    onlyCheckValid: !0,
                                    eventType: "valid"
                                }), e !== a.isValid && L.state.next({
                                    isValid: e
                                })
                            }
                        }, Z = (e, t) => {
                            !n.disabled && (D.isValidating || D.validatingFields || O.isValidating || O.validatingFields) && ((e || Array.from(h.mount)).forEach(e => {
                                e && (t ? T(a.validatingFields, e, t) : z(a.validatingFields, e))
                            }), L.state.next({
                                validatingFields: a.validatingFields,
                                isValidating: !G(a.validatingFields)
                            }))
                        }, W = () => {
                            a.dirtyFields = H(m, g)
                        }, Q = (t, r, n, u) => {
                            let l = F(f, t);
                            if (l) {
                                if ((e => {
                                        let t = $.test(e) ? [e] : V(e),
                                            r = g,
                                            n = m;
                                        for (let e = 0; e < t.length - 1; e++) {
                                            let u = t[e];
                                            if (r = o(r) ? r : r[u], n = o(n) ? n : n[u], null === r && null !== n) return !0
                                        }
                                        return !1
                                    })(t)) return;
                                let i = A(F(g, t)),
                                    s = F(g, t, A(n) ? F(m, t) : n);
                                A(s) || u && u.defaultChecked || r ? T(g, t, r ? s : er(l._f)) : eh(t, s), b.mount && !b.action && (P(), i && a.isDirty && (D.isDirty || O.isDirty) && (ec() || (a.isDirty = !1, L.state.next({
                                    ...a
                                }))), e.shouldUnregister && i && !A(F(g, t)) && ei(t, h) && (b.watch = !0))
                            }
                        }, Y = (e, t, r, o, u) => {
                            let l = !1,
                                i = !1,
                                s = {
                                    name: e
                                };
                            if (!n.disabled) {
                                if (!r || o) {
                                    let r = R(F(m, e), t);
                                    (D.isDirty || O.isDirty) && (i = a.isDirty, a.isDirty = s.isDirty = !r || ec(), l = i !== s.isDirty), i = !!F(a.dirtyFields, e), r !== a.isDirty ? a.dirtyFields = H(m, g) : r ? z(a.dirtyFields, e) : T(a.dirtyFields, e, !0), s.dirtyFields = a.dirtyFields, l = l || (D.dirtyFields || O.dirtyFields) && !r !== i
                                }
                                if (r) {
                                    let t = F(a.touchedFields, e);
                                    t || (T(a.touchedFields, e, r), s.touchedFields = a.touchedFields, l = l || (D.touchedFields || O.touchedFields) && t !== r)
                                }
                                l && u && L.state.next(s)
                            }
                            return l ? s : {}
                        }, J = async e => (Z(e, !0), await n.resolver(g, n.context, ((e, t, r, o) => {
                            let n = {};
                            for (let r of e) {
                                let e = F(t, r);
                                e && T(n, r, e._f)
                            }
                            return {
                                criteriaMode: r,
                                names: [...e],
                                fields: n,
                                shouldUseNativeValidation: o
                            }
                        })(e || h.mount, f, n.criteriaMode, n.shouldUseNativeValidation))), ee = async e => {
                            let {
                                errors: t
                            } = await J(e);
                            if (Z(e), e) {
                                for (let r of e) {
                                    let e = F(t, r);
                                    e ? h.array.has(r) && u(e) && !Object.keys(e).some(e => !Number.isNaN(Number(e))) ? ed(a.errors, {
                                        [r]: e
                                    }, r) : T(a.errors, r, e) : z(a.errors, r)
                                }
                                a.errors = {
                                    ...a.errors
                                }
                            } else a.errors = t;
                            return t
                        }, et = async ({
                            name: t,
                            eventType: r
                        }) => {
                            if (e.validate) {
                                let o = await e.validate({
                                    formValues: g,
                                    formState: a,
                                    name: t,
                                    eventType: r
                                });
                                if (u(o))
                                    for (let e in o) {
                                        let t = o[e];
                                        t && eF(`${eg}.${e}`, {
                                            message: j(t.message) ? t.message : "",
                                            type: t.type || v
                                        })
                                    } else j(o) || !o ? eF(eg, {
                                        message: o || "",
                                        type: v
                                    }) : eV(eg);
                                return o
                            }
                            return !0
                        }, eu = async ({
                            fields: t,
                            onlyCheckValid: r,
                            name: o,
                            eventType: u,
                            context: l = {
                                valid: !0,
                                runRootValidation: !1
                            }
                        }) => {
                            if (e.validate && (l.runRootValidation = !0, !await et({
                                    name: o,
                                    eventType: u
                                })) && (l.valid = !1, r)) return l.valid;
                            for (let o in t) {
                                let i = t[o];
                                if (i) {
                                    let {
                                        _f: t,
                                        ...s
                                    } = i;
                                    if (t) {
                                        let o = h.array.has(t.name),
                                            u = i._f && el(i._f),
                                            s = D.validatingFields || D.isValidating || O.validatingFields || O.isValidating;
                                        u && s && Z([t.name], !0);
                                        let d = await ef(i, h.disabled, g, B, n.shouldUseNativeValidation && !r, o);
                                        if (u && s && Z([t.name]), d[t.name] && (l.valid = !1, r) || (r || (F(d, t.name) ? o ? ed(a.errors, d, t.name) : T(a.errors, t.name, d[t.name]) : z(a.errors, t.name)), e.shouldUseNativeValidation && d[t.name])) break
                                    }
                                    G(s) || await eu({
                                        context: l,
                                        onlyCheckValid: r,
                                        fields: s,
                                        name: o,
                                        eventType: u
                                    })
                                }
                            }
                            return l.valid
                        }, ec = (e, t) => !n.disabled && (e && t && T(g, e, t), !R(b.mount ? g : m, m)), ep = (e, t, r) => _(e, h, {
                            ...b.mount ? g : A(t) ? m : j(e) ? {
                                [e]: t
                            } : t
                        }, r, t), eh = (e, t, r = {}, n = !1, u = !1) => {
                            let l = F(f, e),
                                i = t;
                            if (l) {
                                let r = l._f;
                                r && (r.disabled || T(g, e, X(t, r)), i = U(r.ref) && o(t) ? "" : t, "select-multiple" === r.ref.type ? [...r.ref.options].forEach(e => e.selected = i.includes(e.value)) : r.refs ? "checkbox" === r.ref.type ? r.refs.forEach(e => {
                                    e.defaultChecked && e.disabled || (Array.isArray(i) ? e.checked = !!i.find(t => t === e.value) : e.checked = i === e.value || !!i)
                                }) : r.refs.forEach(e => e.checked = e.value === i) : "file" === r.ref.type ? r.ref.value = "" : (r.ref.value = i, r.ref.type || u || L.state.next({
                                    name: e,
                                    values: n ? g : d(g)
                                })))
                            }(r.shouldDirty || r.shouldTouch) && Y(e, i, r.shouldTouch, r.shouldDirty, !u), r.shouldValidate && eA(e)
                        }, ey = (e, t, o, n = !1, l = !1) => {
                            for (let i in t) {
                                if (!t.hasOwnProperty(i)) return;
                                let a = t[i],
                                    s = e + "." + i,
                                    d = F(f, s);
                                (h.array.has(e) || u(a) || d && !d._f) && !r(a) ? ey(s, a, o, n, l) : eh(s, a, o, n, l)
                            }
                        }, ev = (e, t, r, n, u = !1) => {
                            let l = F(f, e),
                                i = h.array.has(e),
                                s = n ? t : d(t),
                                c = R(F(g, e), s);
                            if (c || T(g, e, s), i) L.array.next({
                                name: e,
                                values: n ? g : d(g)
                            }), (D.isDirty || D.dirtyFields || O.isDirty || O.dirtyFields) && r.shouldDirty && (W(), u || L.state.next({
                                name: e,
                                dirtyFields: a.dirtyFields,
                                isDirty: ec(e, s)
                            }));
                            else {
                                let t = Array.isArray(s) && !s.length || G(s);
                                !l || l._f || o(s) || t ? eh(e, s, r, n, u) : ey(e, s, r, n, u)
                            }
                            if (!c && !u) {
                                let t = ei(e, h),
                                    r = n ? g : d(g);
                                L.state.next({
                                    ...t && a,
                                    name: b.mount || t ? e : void 0,
                                    values: r
                                })
                            }
                        }, eC = (e, t, r = {}) => ev(e, t, r, !1), ex = async o => {
                            b.mount = !0;
                            let u = o.target,
                                i = u.name,
                                s = !0,
                                p = F(f, i),
                                m = e => {
                                    s = Number.isNaN(e) || r(e) && isNaN(e.getTime()) || R(e, F(g, i, e))
                                };
                            if (p) {
                                var v, C, $, A, V;
                                let r, b, _, I = u.type ? er(p._f) : l(o),
                                    N = o.type === c || "focusout" === o.type,
                                    M = !((_ = p._f).mount && (_.required || _.min || _.max || _.maxLength || _.minLength || _.pattern || _.validate)) && !e.validate && !n.resolver && !F(a.errors, i) && !p._f.deps,
                                    q = M || (v = N, C = F(a.touchedFields, i), $ = a.isSubmitted, A = E, !(V = S).isOnAll && (!$ && V.isOnTouch ? !(C || v) : ($ ? A.isOnBlur : V.isOnBlur) ? !v : ($ ? !A.isOnChange : !V.isOnChange) || v)),
                                    U = ei(i, h, N);
                                T(g, i, I), N ? u && u.readOnly || (p._f.onBlur && p._f.onBlur(o), t && t(0)) : p._f.onChange && p._f.onChange(o);
                                let K = Y(i, I, N),
                                    W = !G(K) || U;
                                if (N || L.state.next({
                                        name: i,
                                        type: o.type,
                                        ...x ? {
                                            values: d(g)
                                        } : {}
                                    }), q) return (!M || !a.isValid) && (D.isValid || O.isValid) && ("onBlur" === n.mode ? N && P() : N || P()), W && L.state.next({
                                    name: i,
                                    ...U ? {} : K
                                });
                                if (!n.resolver && e.validate && await et({
                                        name: i,
                                        eventType: o.type
                                    }), !N && U && L.state.next({
                                        ...a
                                    }), n.resolver) {
                                    let {
                                        errors: e
                                    } = await J([i]);
                                    if (Z([i]), m(I), !s) {
                                        G(K) || L.state.next(K);
                                        return
                                    }
                                    let t = es(a.errors, f, i),
                                        o = es(e, f, t.name || i);
                                    r = o.error, i = o.name, b = G(e)
                                } else Z([i], !0), r = (await ef(p, h.disabled, g, B, n.shouldUseNativeValidation))[i], Z([i]), m(I), s && (r ? b = !1 : (D.isValid || O.isValid) && (b = await eu({
                                    fields: f,
                                    onlyCheckValid: !0,
                                    name: i,
                                    eventType: o.type
                                })));
                                if (s) {
                                    p._f.deps && (!Array.isArray(p._f.deps) || p._f.deps.length > 0) && eA(p._f.deps);
                                    var k = i,
                                        w = b,
                                        j = r;
                                    let e = F(a.errors, k),
                                        o = (D.isValid || O.isValid) && "boolean" == typeof w && a.isValid !== w;
                                    if (n.delayError && j) {
                                        let e;
                                        e = () => {
                                            T(a.errors, k, j), a.errors = {
                                                ...a.errors
                                            }, L.state.next({
                                                errors: a.errors
                                            })
                                        }, (t = t => {
                                            clearTimeout(y), y = setTimeout(e, t)
                                        })(n.delayError)
                                    } else clearTimeout(y), t = null, j ? T(a.errors, k, j) : z(a.errors, k), a.errors = {
                                        ...a.errors
                                    };
                                    if ((j ? !R(e, j) : e) || !G(K) || o) {
                                        let e = {
                                            ...K,
                                            ...o && "boolean" == typeof w ? {
                                                isValid: w
                                            } : {},
                                            errors: a.errors,
                                            name: k
                                        };
                                        a = {
                                            ...a,
                                            ...e
                                        }, L.state.next(e)
                                    }
                                }
                            }
                        }, e$ = (e, t) => {
                            if (F(a.errors, t) && e.focus) return e.focus(), 1
                        }, eA = async (e, t = {}) => {
                            let r, o, u = M(e);
                            if (n.resolver) {
                                let t = await ee(A(e) ? e : u);
                                r = G(t), o = e ? !u.some(e => F(t, e)) : r
                            } else e ? ((o = (await Promise.all(u.map(async e => {
                                let t = F(f, e);
                                return await eu({
                                    fields: t && t._f ? {
                                        [e]: t
                                    } : t,
                                    eventType: p
                                })
                            }))).every(Boolean)) || a.isValid) && P() : o = r = await eu({
                                fields: f,
                                name: e,
                                eventType: p
                            });
                            return L.state.next({
                                ...!j(e) || (D.isValid || O.isValid) && r !== a.isValid ? {} : {
                                    name: e
                                },
                                ...n.resolver || !e ? {
                                    isValid: r
                                } : {},
                                errors: a.errors
                            }), t.shouldFocus && !o && ea(f, e$, e ? u : h.mount), o
                        }, eS = (e, t) => ({
                            invalid: !!F((t || a).errors, e),
                            isDirty: !!F((t || a).dirtyFields, e),
                            error: F((t || a).errors, e),
                            isValidating: !!F(a.validatingFields, e),
                            isTouched: !!F((t || a).touchedFields, e)
                        }), eV = e => {
                            let t = e ? M(e) : void 0;
                            null == t || t.forEach(e => z(a.errors, e)), t ? t.forEach(e => {
                                L.state.next({
                                    name: e,
                                    errors: a.errors
                                })
                            }) : L.state.next({
                                errors: {}
                            })
                        }, eF = (e, t, r) => {
                            let o = (F(f, e, {
                                    _f: {}
                                })._f || {}).ref,
                                {
                                    ref: n,
                                    message: u,
                                    type: l,
                                    ...i
                                } = F(a.errors, e) || {};
                            T(a.errors, e, {
                                ...i,
                                ...t,
                                ref: o
                            }), L.state.next({
                                name: e,
                                errors: a.errors,
                                isValid: !1
                            }), r && r.shouldFocus && o && o.focus && o.focus()
                        }, ek = e => {
                            var t;
                            let r = !!(null == (t = e.formState) ? void 0 : t.values);
                            r && x++;
                            let {
                                unsubscribe: o
                            } = L.state.subscribe({
                                next: t => {
                                    let r, o, n;
                                    if (r = e.name, o = t.name, n = e.exact, (!r || !o || r === o || M(r).some(e => e && (n ? e === o || e.startsWith(o + ".") : e.startsWith(o) || o.startsWith(e)))) && ((e, t, r, o) => {
                                            r(e);
                                            let {
                                                name: n,
                                                ...u
                                            } = e, l = Object.keys(u);
                                            return !l.length || o && l.length >= Object.keys(t).length || l.find(e => t[e] === (!o || "all"))
                                        })(t, e.formState || D, eL, e.reRenderRoot)) {
                                        let r = {
                                            ...g
                                        };
                                        e.callback({
                                            values: r,
                                            ...a,
                                            ...t,
                                            defaultValues: m
                                        })
                                    }
                                }
                            });
                            if (!r) return o;
                            let n = !1;
                            return () => {
                                n || (n = !0, x--, o())
                            }
                        }, eT = (e, t = {}) => {
                            for (let r of e ? M(e) : h.mount) h.mount.delete(r), h.array.delete(r), t.keepValue || (z(f, r), z(g, r)), t.keepError || z(a.errors, r), t.keepDirty || z(a.dirtyFields, r), t.keepTouched || z(a.touchedFields, r), t.keepIsValidating || z(a.validatingFields, r), n.shouldUnregister || t.keepDefaultValue || z(m, r);
                            L.state.next({
                                values: d(g)
                            }), L.state.next({
                                ...a,
                                ...!t.keepDirty ? {} : {
                                    isDirty: ec()
                                }
                            }), t.keepIsValid || P()
                        }, eE = ({
                            disabled: e,
                            name: t
                        }) => {
                            if ("boolean" == typeof e && b.mount || e || h.disabled.has(t)) {
                                let r = h.disabled.has(t);
                                e ? h.disabled.add(t) : h.disabled.delete(t), !!e !== r && b.mount && !b.action && P()
                            }
                        }, ew = (e, t = {}) => {
                            let r = F(f, e),
                                o = "boolean" == typeof t.disabled || "boolean" == typeof n.disabled,
                                u = !h.registerName.has(e) && r && r._f && !r._f.mount;
                            return (T(f, e, {
                                ...r || {},
                                _f: {
                                    ...r && r._f ? r._f : {
                                        ref: {
                                            name: e
                                        }
                                    },
                                    name: e,
                                    mount: !0,
                                    ...t
                                }
                            }), h.mount.add(e), r && !u) ? eE({
                                disabled: "boolean" == typeof t.disabled ? t.disabled : n.disabled,
                                name: e
                            }) : Q(e, !0, t.value), {
                                ...o ? {
                                    disabled: t.disabled || n.disabled
                                } : {},
                                ...n.progressive ? {
                                    required: !!t.required,
                                    min: eo(t.min),
                                    max: eo(t.max),
                                    minLength: eo(t.minLength),
                                    maxLength: eo(t.maxLength),
                                    pattern: eo(t.pattern)
                                } : {},
                                name: e,
                                onChange: ex,
                                onBlur: ex,
                                ref: o => {
                                    if (o) {
                                        let n;
                                        h.registerName.add(e), ew(e, t), h.registerName.delete(e), r = F(f, e);
                                        let u = A(o.value) && o.querySelectorAll && o.querySelectorAll("input,select,textarea")[0] || o,
                                            l = "radio" === (n = u).type || "checkbox" === n.type,
                                            i = r._f.refs || [];
                                        (l ? i.find(e => e === u) : u === r._f.ref) || (T(f, e, {
                                            _f: {
                                                ...r._f,
                                                ...l ? {
                                                    refs: [...i.filter(K), u, ...Array.isArray(F(m, e)) ? [{}] : []],
                                                    ref: {
                                                        type: u.type,
                                                        name: e
                                                    }
                                                } : {
                                                    ref: u
                                                }
                                            }
                                        }), Q(e, !1, void 0, u))
                                    } else(r = F(f, e, {}))._f && (r._f.mount = !1), (n.shouldUnregister || t.shouldUnregister) && !(i(h.array, e) && b.action) && h.unMount.add(e)
                                }
                            }
                        }, eD = () => n.shouldFocusError && !n.shouldUseNativeValidation && ea(f, e$, h.mount), ej = (e, t) => async r => {
                            let o;
                            r && (r.preventDefault && r.preventDefault(), r.persist && r.persist());
                            let u = d(g);
                            if (L.state.next({
                                    isSubmitting: !0
                                }), n.resolver) {
                                let {
                                    errors: e,
                                    values: t
                                } = await J();
                                Z(), a.errors = e, u = d(t)
                            } else await eu({
                                fields: f,
                                eventType: "submit"
                            });
                            if (h.disabled.size)
                                for (let e of h.disabled) z(u, e);
                            if (z(a.errors, C), G(a.errors)) {
                                L.state.next({
                                    errors: {}
                                });
                                try {
                                    await e(u, r)
                                } catch (e) {
                                    o = e
                                }
                            } else t && await t({
                                ...a.errors
                            }, r), eD(), setTimeout(eD);
                            if (L.state.next({
                                    isSubmitted: !0,
                                    isSubmitting: !1,
                                    isSubmitSuccessful: G(a.errors) && !o,
                                    submitCount: a.submitCount + 1,
                                    errors: a.errors
                                }), o) throw o
                        }, e_ = (e, t = {}) => {
                            let r = e ? d(e) : m,
                                o = d(r),
                                u = G(e);
                            if (t.keepDefaultValues || (m = r), !t.keepValues) {
                                if (t.keepDirtyValues)
                                    for (let e of Array.from(new Set([...h.mount, ...Object.keys(H(m, g))]))) {
                                        let t = F(a.dirtyFields, e),
                                            r = F(g, e),
                                            n = F(o, e);
                                        t && !A(r) ? T(o, e, r) : t || A(n) || eC(e, n)
                                    } else {
                                        if (s && A(e))
                                            for (let e of h.mount) {
                                                let t = F(f, e);
                                                if (t && t._f) {
                                                    let e = Array.isArray(t._f.refs) ? t._f.refs[0] : t._f.ref;
                                                    if (U(e)) {
                                                        let t = e.closest("form");
                                                        if (t) {
                                                            t.reset();
                                                            break
                                                        }
                                                    }
                                                }
                                            }
                                        if (t.keepFieldsRef)
                                            for (let e of h.mount) eC(e, F(o, e));
                                        else f = {}
                                    }
                                if (n.shouldUnregister) {
                                    if (g = t.keepDefaultValues ? d(m) : {}, t.keepFieldsRef)
                                        for (let e of h.mount) T(g, e, F(o, e))
                                } else g = d(o);
                                L.array.next({
                                    values: {
                                        ...o
                                    }
                                }), L.state.next({
                                    name: void 0,
                                    type: void 0,
                                    values: {
                                        ...o
                                    }
                                })
                            }
                            h = {
                                mount: t.keepDirtyValues ? h.mount : new Set,
                                unMount: new Set,
                                array: new Set,
                                registerName: new Set,
                                disabled: new Set,
                                watch: new Set,
                                watchAll: !1,
                                focus: ""
                            }, b.mount = !D.isValid || !!t.keepIsValid || !!t.keepDirtyValues || !n.shouldUnregister && !G(o), b.watch = !!n.shouldUnregister, b.keepIsValid = !!t.keepIsValid, b.action = !1, t.keepErrors || (a.errors = {}), L.state.next({
                                submitCount: t.keepSubmitCount ? a.submitCount : 0,
                                isDirty: !u && (t.keepDirty ? a.isDirty : t.keepValues ? ec() : !!(t.keepDefaultValues && !R(e, m))),
                                isSubmitted: !!t.keepIsSubmitted && a.isSubmitted,
                                dirtyFields: u ? {} : t.keepDirtyValues ? t.keepDefaultValues && g ? H(m, g) : a.dirtyFields : t.keepDefaultValues && e ? H(m, e) : t.keepDirty ? a.dirtyFields : {},
                                touchedFields: t.keepTouched ? a.touchedFields : {},
                                errors: t.keepErrors ? a.errors : {},
                                isSubmitSuccessful: !!t.keepIsSubmitSuccessful && a.isSubmitSuccessful,
                                isSubmitting: !1,
                                defaultValues: m
                            })
                        }, eO = (e, t) => e_(k(e) ? e(g) : e, {
                            ...n.resetOptions,
                            ...t
                        }), eL = e => {
                            let {
                                name: t,
                                type: r,
                                values: o,
                                ...n
                            } = e;
                            a = {
                                ...a,
                                ...n
                            }
                        }, eR = {
                            control: {
                                register: ew,
                                unregister: eT,
                                getFieldState: eS,
                                handleSubmit: ej,
                                setError: eF,
                                _subscribe: ek,
                                _runSchema: J,
                                _updateIsValidating: Z,
                                _focusError: eD,
                                _getWatch: ep,
                                _getDirty: ec,
                                _setValid: P,
                                _setFieldArray: (e, t = [], r, o, u = !0, l = !0) => {
                                    if (o && r && !n.disabled) {
                                        if (b.action = !0, l && Array.isArray(F(f, e))) {
                                            let t = r(F(f, e), o.argA, o.argB);
                                            u && T(f, e, t)
                                        }
                                        if (l && Array.isArray(F(a.errors, e))) {
                                            let t, n = r(F(a.errors, e), o.argA, o.argB);
                                            u && T(a.errors, e, n), N(F(t = a.errors, e)).length || z(t, e)
                                        }
                                        if ((D.touchedFields || O.touchedFields) && l && Array.isArray(F(a.touchedFields, e))) {
                                            let t = r(F(a.touchedFields, e), o.argA, o.argB);
                                            u && T(a.touchedFields, e, t)
                                        }(D.dirtyFields || O.dirtyFields) && W(), L.state.next({
                                            name: e,
                                            isDirty: ec(e, t),
                                            dirtyFields: a.dirtyFields,
                                            errors: a.errors,
                                            isValid: a.isValid
                                        })
                                    } else T(g, e, t)
                                },
                                _setDisabledField: eE,
                                _setErrors: e => {
                                    a.errors = e, L.state.next({
                                        errors: a.errors,
                                        isValid: !1
                                    })
                                },
                                _getFieldArray: e => N(F(b.mount ? g : m, e, n.shouldUnregister ? F(m, e, []) : [])),
                                _reset: e_,
                                _resetDefaultValues: () => k(n.defaultValues) && n.defaultValues().then(e => {
                                    eO(e, n.resetOptions), L.state.next({
                                        isLoading: !1
                                    })
                                }),
                                _removeUnmounted: () => {
                                    for (let e of h.unMount) {
                                        let t = F(f, e);
                                        t && (t._f.refs ? t._f.refs.every(e => !K(e)) : !K(t._f.ref)) && eT(e)
                                    }
                                    h.unMount = new Set
                                },
                                _disableForm: e => {
                                    "boolean" == typeof e && (L.state.next({
                                        disabled: e
                                    }), ea(f, (t, r) => {
                                        let o = F(f, r);
                                        o && (t.disabled = o._f.disabled || e, Array.isArray(o._f.refs) && o._f.refs.forEach(t => {
                                            t.disabled = o._f.disabled || e
                                        }))
                                    }, 0, !1))
                                },
                                _subjects: L,
                                _proxyFormState: D,
                                get _fields() {
                                    return f
                                },
                                get _formValues() {
                                    return g
                                },
                                get _state() {
                                    return b
                                },
                                set _state(value) {
                                    b = value
                                },
                                get _defaultValues() {
                                    return m
                                },
                                get _names() {
                                    return h
                                },
                                set _names(value) {
                                    h = value
                                },
                                get _formState() {
                                    return a
                                },
                                get _options() {
                                    return n
                                },
                                set _options(value) {
                                    S = en((n = {
                                        ...n,
                                        ...value
                                    }).mode), E = en(n.reValidateMode)
                                }
                            },
                            subscribe: e => (b.mount = !0, O = {
                                ...O,
                                ...e.formState
                            }, ek({
                                ...e,
                                formState: {
                                    ...w,
                                    ...e.formState
                                }
                            })),
                            trigger: eA,
                            register: ew,
                            handleSubmit: ej,
                            watch: (e, t) => {
                                if (k(e)) {
                                    x++;
                                    let {
                                        unsubscribe: r
                                    } = L.state.subscribe({
                                        next: r => "values" in r && e(r.values || ep(void 0, t), r)
                                    }), o = !1;
                                    return {
                                        unsubscribe: () => {
                                            o || (o = !0, x--, r())
                                        }
                                    }
                                }
                                return ep(e, t, !0)
                            },
                            setValue: eC,
                            setValues: (e, t = {}) => {
                                let r = k(e) ? e(g) : e;
                                if (!R(g, r)) {
                                    g = {
                                        ...g,
                                        ...r
                                    };
                                    let e = I(r);
                                    for (let r of h.mount) r in e && ev(r, e[r], t, !0, !0);
                                    L.state.next({
                                        ...a,
                                        name: void 0,
                                        type: void 0,
                                        ...x ? {
                                            values: g
                                        } : {}
                                    }), t.shouldValidate && P()
                                }
                            },
                            getValues: (e, t) => {
                                let r = {
                                    ...b.mount ? g : m
                                };
                                return t && (r = function e(t, r) {
                                    let o = {};
                                    for (let n in t)
                                        if (t.hasOwnProperty(n)) {
                                            let l = t[n],
                                                i = r[n];
                                            if (l && u(l) && i) {
                                                let t = e(l, i);
                                                u(t) && (o[n] = t)
                                            } else t[n] && (o[n] = i)
                                        } return o
                                }(t.dirtyFields ? a.dirtyFields : a.touchedFields, r)), A(e) ? r : j(e) ? F(r, e) : e.map(e => F(r, e))
                            },
                            reset: eO,
                            resetField: (e, t = {}) => {
                                F(f, e) && (A(t.defaultValue) ? eC(e, d(F(m, e))) : (eC(e, t.defaultValue), T(m, e, d(t.defaultValue))), t.keepTouched || z(a.touchedFields, e), t.keepDirty || (z(a.dirtyFields, e), a.isDirty = t.defaultValue ? ec(e, d(F(m, e))) : ec()), !t.keepError && (z(a.errors, e), D.isValid && P()), L.state.next({
                                    ...a
                                }))
                            },
                            resetDefaultValues: (e, t = {}) => {
                                if (m = d(e), !t.keepDirty) {
                                    let e = H(m, g);
                                    a.dirtyFields = e, a.isDirty = !G(e)
                                }
                                t.keepIsValid || P(), L.state.next({
                                    ...a,
                                    defaultValues: m
                                })
                            },
                            clearErrors: eV,
                            unregister: eT,
                            setError: eF,
                            setFocus: (e, t = {}) => {
                                let r = F(f, e),
                                    o = r && r._f;
                                if (o) {
                                    let e = o.refs ? o.refs[0] : o.ref;
                                    e.focus && setTimeout(() => {
                                        e.focus(), t.shouldSelect && k(e.select) && e.select()
                                    })
                                }
                            },
                            getFieldState: eS
                        };
                    return {
                        ...eR,
                        formControl: eR
                    }
                }(e);
                n.current = {
                    ...a,
                    formState: m
                }
            } let b = n.current.control;
        return b._options = e, D(() => {
            let e = b._subscribe({
                formState: b._proxyFormState,
                callback: () => g({
                    ...b._formState,
                    defaultValues: b._defaultValues
                }),
                reRenderRoot: !0
            });
            return g(e => ({
                ...e,
                isReady: !0
            })), b._formState.isReady = !0, e
        }, [b]), t.default.useEffect(() => b._disableForm(e.disabled), [b, e.disabled]), t.default.useEffect(() => {
            e.mode && (b._options.mode = e.mode), e.reValidateMode && (b._options.reValidateMode = e.reValidateMode)
        }, [b, e.mode, e.reValidateMode]), t.default.useEffect(() => {
            e.errors && (b._setErrors(e.errors), b._focusError())
        }, [b, e.errors]), t.default.useEffect(() => {
            e.shouldUnregister && b._subjects.state.next({
                values: b._getWatch()
            })
        }, [b, e.shouldUnregister]), t.default.useEffect(() => {
            if (b._proxyFormState.isDirty) {
                let e = b._getDirty();
                e !== m.isDirty && b._subjects.state.next({
                    isDirty: e
                })
            }
        }, [b, m.isDirty]), t.default.useEffect(() => {
            var t;
            e.values && !R(e.values, a.current) ? (b._reset(e.values, {
                keepFieldsRef: !0,
                ...b._options.resetOptions
            }), (null == (t = b._options.resetOptions) ? void 0 : t.keepIsValid) || b._setValid(), a.current = e.values, g(e => ({
                ...e
            }))) : b._resetDefaultValues()
        }, [b, e.values]), t.default.useEffect(() => {
            b._state.mount || (b._setValid(), b._state.mount = !0), b._state.watch && (b._state.watch = !1, b._subjects.state.next({
                ...b._formState
            })), b._removeUnmounted()
        }), n.current.formState = t.default.useMemo(() => w(m, b), [b, m]), n.current
    }, "useWatch", 0, B])
}, 685740, 590553, e => {
    "use strict";
    e.i(203217);
    var t = e.i(679933),
        r = e.i(776050),
        o = e.i(429305),
        n = e.i(513485),
        u = e.i(869049),
        l = e.i(860700),
        i = e.i(629959),
        a = e.i(823512),
        s = e.i(185559),
        d = e.i(499531);

    function c(e = !0) {
        let t = (0, a.useId)(),
            [r, o] = function(e = !0) {
                let [t, r] = (0, d.useState)(e), o = (0, d.useRef)(!1), n = (0, d.useCallback)(e => {
                    o.current = !0, r(!!e)
                }, []);
                return (0, s.useLayoutEffect)(() => {
                    o.current || r(!1)
                }, []), [n, t]
            }(e);
        return {
            id: o ? t : void 0,
            ref: r
        }
    }
    var p = e.i(251635);
    e.s(["useCheckbox", 0, function(e, a, s) {
        let {
            labelProps: f,
            inputProps: m,
            descriptionProps: g,
            errorMessageProps: b,
            isSelected: h,
            isPressed: y,
            isDisabled: v,
            isReadOnly: C,
            isInvalid: x,
            validationErrors: $,
            validationDetails: A
        } = function(e, a, s) {
            let {
                isDisabled: f = !1,
                isReadOnly: m = !1,
                value: g,
                name: b,
                form: h,
                children: y,
                isRequired: v,
                validationBehavior: C = "aria",
                "aria-label": x,
                "aria-labelledby": $,
                "aria-describedby": A,
                onPressStart: S,
                onPressEnd: V,
                onPressChange: F,
                onPress: k,
                onPressUp: T,
                onClick: E
            } = e, w = (0, p.useFormValidationState)({
                ...e,
                value: a.isSelected
            }), {
                isInvalid: D,
                validationErrors: j,
                validationDetails: _
            } = w.displayValidation;
            (0, l.useFormValidation)(e, w, s);
            let {
                pressProps: O,
                isPressed: L
            } = (0, i.usePress)({
                onPressStart: S,
                onPressEnd: V,
                onPressChange: F,
                onPress: k,
                onPressUp: T,
                onClick: E,
                isDisabled: f
            }), [R, B] = (0, d.useState)(!1), {
                pressProps: I
            } = (0, i.usePress)({
                onPressStart(e) {
                    "keyboard" === e.pointerType || "virtual" === e.pointerType ? e.continuePropagation() : (S?.(e), F?.(!0), B(!0))
                },
                onPressEnd(e) {
                    "keyboard" === e.pointerType || "virtual" === e.pointerType ? e.continuePropagation() : (V?.(e), F?.(!1), B(!1))
                },
                onPressUp(e) {
                    "keyboard" === e.pointerType || "virtual" === e.pointerType ? e.continuePropagation() : T?.(e)
                },
                onClick: E,
                onPress(t) {
                    if ("keyboard" === t.pointerType || "virtual" === t.pointerType) return void t.continuePropagation();
                    k?.(t), a.toggle(), s.current?.focus();
                    let {
                        [p.privateValidationStateProp]: r
                    } = e, {
                        commitValidation: o
                    } = r || w;
                    o()
                },
                isDisabled: f || m
            }), {
                focusableProps: P
            } = (0, n.useFocusable)(e, s), N = (0, o.mergeProps)(O, P), M = (0, t.filterDOMProps)(e, {
                labelable: !0
            });
            (0, u.useFormReset)(s, a.defaultSelected, a.setSelected);
            let q = c(),
                G = c();
            return {
                labelProps: (0, o.mergeProps)(I, {
                    onClick: e => e.preventDefault()
                }),
                inputProps: (0, o.mergeProps)(M, {
                    checked: a.isSelected,
                    "aria-required": v && "aria" === C || void 0,
                    required: v && "native" === C,
                    "aria-invalid": D || "invalid" === e.validationState || void 0,
                    "aria-errormessage": e["aria-errormessage"],
                    "aria-controls": e["aria-controls"],
                    "aria-readonly": m || void 0,
                    "aria-describedby": [q.id, G.id, A].filter(Boolean).join(" ") || void 0,
                    onChange: e => {
                        e.stopPropagation(), a.setSelected((0, r.getEventTarget)(e).checked)
                    },
                    disabled: f,
                    ...null == g ? {} : {
                        value: g
                    },
                    name: b,
                    form: h,
                    type: "checkbox",
                    ...N
                }),
                descriptionProps: q,
                errorMessageProps: G,
                isSelected: a.isSelected,
                isPressed: L || R,
                isDisabled: f,
                isReadOnly: m,
                isInvalid: D || "invalid" === e.validationState,
                validationErrors: j,
                validationDetails: _
            }
        }(e, a, s), {
            isIndeterminate: S
        } = e;
        return (0, d.useEffect)(() => {
            s.current && (s.current.indeterminate = !!S)
        }), {
            labelProps: (0, o.mergeProps)(f, (0, d.useMemo)(() => ({
                onMouseDown: e => e.preventDefault()
            }), [])),
            inputProps: m,
            descriptionProps: g,
            errorMessageProps: b,
            isSelected: h,
            isPressed: y,
            isDisabled: v,
            isReadOnly: C,
            isInvalid: x,
            validationErrors: $,
            validationDetails: A
        }
    }], 685740);
    var f = e.i(803258);
    e.s(["useToggleState", 0, function(e = {}) {
        let {
            isReadOnly: t
        } = e, [r, o] = (0, f.useControlledState)(e.isSelected, e.defaultSelected || !1, e.onChange), [n] = (0, d.useState)(r);
        return {
            isSelected: r,
            defaultSelected: e.defaultSelected ?? n,
            setSelected: function(e) {
                t || o(e)
            },
            toggle: function() {
                t || o(!r)
            }
        }
    }], 590553)
}, 222061, 272351, 497492, 396241, 829483, 938822, 86703, 908390, 662380, e => {
    "use strict";
    var t, r, o, n = e.i(14666),
        u = e.i(499531),
        l = e.i(968651),
        i = e.i(620174),
        a = e.i(466673);

    function s(e, t, r) {
        return !e || 0 === e.length || e.every(({
            fieldId: e,
            value: o,
            operator: n
        }, u) => (function(e, t, r = "equals") {
            let o = (t ?? "").trim(),
                n = "string" == typeof e ? e.trim() : e,
                u = null != n && "" !== n;
            switch (r) {
                case "notEquals":
                    return u && n !== o;
                case "oneOf":
                    return o.split(",").some(e => e.trim() === n);
                case "notOneOf":
                    return u && !o.split(",").some(e => e.trim() === n);
                default:
                    return n === o
            }
        })(void 0 !== t[u] ? t[u] : r ? r(e) : void 0, o, n))
    }

    function d(e, t = !1) {
        let r = new URLSearchParams(window.location.search);
        return e.reduce((e, o) => {
            let n = r.get(o);
            return e[o] = n || (t ? function(e) {
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
                let n = e.countryRestriction && e.countryRestriction.length > 0 && !r || e.countryRestriction?.some(e => e.countryCode === r) || !c(e.visibleCountry, r),
                    u = t(e.formFieldId);
                n || !n && !0 === u ? o[e.formFieldId] = !0 : n || u || (o[e.formFieldId] = "")
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
            restrictedDomainsToggle: V,
            restrictedDomains: F,
            restrictedDomainErrorText: k
        } = e, T = {
            label: o,
            requiredText: v,
            className: m,
            placeholder: g,
            disabled: b,
            isRequired: y,
            for: r,
            name: r,
            id: r
        }, E = (0, a.useWatch)({
            control: C,
            name: x?.map(({
                fieldId: e
            }) => e) || []
        }), w = s(x, E, $);
        if ((0, u.useEffect)(() => {
                w || e.control.unregister(e.formFieldId)
            }, [w, e.control, e.formFieldId]), !c(A, e.countryCode) || !w) return null;
        switch (t) {
            case "text":
                return (0, n.jsx)(a.Controller, {
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
                    }) => (0, n.jsx)(i.default, {
                        ...T,
                        ...e,
                        value: e.value || "",
                        ...void 0 !== t.error && {
                            helperText: (0, l.default)(d, p, f, void 0 !== t.error, !1)
                        },
                        hasError: void 0 !== t.error
                    })
                });
            case "longtext":
                return (0, n.jsx)(a.Controller, {
                    name: r,
                    control: e.control,
                    rules: {
                        required: y
                    },
                    render: ({
                        field: e,
                        fieldState: t
                    }) => (0, n.jsx)(i.default, {
                        isTextArea: !0,
                        ...T,
                        ...e,
                        value: e.value || "",
                        ...void 0 !== t.error && {
                            helperText: (0, l.default)(d, p, f, void 0 !== t.error, !1)
                        },
                        hasError: void 0 !== t.error
                    })
                });
            case "email":
                return (0, n.jsx)(a.Controller, {
                    rules: {
                        required: y,
                        pattern: {
                            value: /^[\w.-]+@([\w-]+\.)+[\w-]{2,7}$/i,
                            message: p || "Invalid email format"
                        },
                        ...V && F && {
                            validate: e => !F.split(",").map(e => e.trim()).filter(e => e.length > 0).find(t => e.toLowerCase().includes(t.toLowerCase())) || k || "Input contains restricted domain"
                        }
                    },
                    name: r,
                    control: e.control,
                    render: ({
                        field: e,
                        fieldState: t
                    }) => (0, n.jsx)(i.default, {
                        ...T,
                        ...e,
                        value: e.value || "",
                        ...void 0 !== t.error && {
                            helperText: (0, l.default)(d, t.error.message || p, f, void 0 !== t.error, !1)
                        },
                        hasError: void 0 !== t.error
                    })
                });
            case "hidden":
                return (0, n.jsx)(a.Controller, {
                    defaultValue: h,
                    name: r,
                    control: e.control,
                    render: () => (0, n.jsx)("input", {
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
        b = e.i(458229),
        h = e.i(685740),
        y = e.i(590553),
        v = e.i(147333),
        C = e.i(838031);
    let x = (0, u.forwardRef)(function(e, t) {
        let {
            children: r,
            isIndeterminate: o = !1,
            isDisabled: l = !1,
            isSelected: i = !1,
            isRequired: a = !1,
            hasError: s = !1,
            requiredText: d = "Required"
        } = e, c = (0, y.useToggleState)(e), [p, f] = (0, u.useState)(o), m = (0, C.useObjectRef)(t), {
            inputProps: x
        } = (0, h.useCheckbox)(e, c, m), {
            isFocusVisible: $,
            focusProps: A
        } = (0, v.useFocusRing)();
        (0, u.useEffect)(() => {
            i && f(!1)
        }, [i]);
        let S = (0, g.default)("group flex text-small relative", {
                "pointer-events-none": l
            }, {
                "hover:cursor-pointer": !l
            }),
            V = (0, g.default)({
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
            F = (0, g.default)({
                "fill-white": i && !l,
                "fill-gray-400 dark:!fill-gray-500": l
            }),
            k = (0, g.default)({
                "fill-white": !l
            }, {
                "fill-gray-400 dark:fill-gray-500": l
            }),
            T = (0, g.default)("ml-1 text-sm", {
                "text-gray-400 dark:text-gray-400": i
            }, {
                "text-gray-400": s && !i
            }, {
                "text-gray-400": !s && !i
            });
        return (0, n.jsxs)("label", {
            className: S,
            children: [(0, n.jsx)(b.VisuallyHidden, {
                children: (0, n.jsx)("input", {
                    ...x,
                    ...A,
                    ref: m,
                    checked: i
                })
            }), (0, n.jsxs)("svg", {
                width: 24,
                height: 24,
                "aria-hidden": "true",
                className: "mr-2 min-w-[24px]",
                children: [(0, n.jsx)("rect", {
                    x: 4,
                    y: 4,
                    width: 16,
                    height: 16,
                    strokeWidth: 1,
                    rx: 4,
                    ry: 4,
                    className: V
                }), i && (0, n.jsx)("path", {
                    transform: "translate(7 7)",
                    d: `M3.788 9A.999.999 0 0 1 3 8.615l-2.288-3a1 1 0 1 1
            1.576-1.23l1.5 1.991 3.924-4.991a1 1 0 1 1 1.576 1.23l-4.712
            6A.999.999 0 0 1 3.788 9z`,
                    className: F
                }), p && (0, n.jsx)("rect", {
                    x: 7,
                    y: 11,
                    width: 10,
                    height: 2,
                    className: k
                }), $ && (0, n.jsx)("rect", {
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
            }), (0, n.jsxs)("div", {
                className: "flex w-full justify-between",
                children: [r, a && (0, n.jsx)("div", {
                    className: T,
                    children: d
                })]
            })]
        })
    });
    var $ = e.i(805518);
    e.s(["default", 0, e => {
        let t = e?.chained?.map(e => e.dependant) || [],
            r = e.formFieldId === f.TOS && e.isRequired || e.formFieldId === f.PRIVACY && e.isRequired || e.countryCode === p.CN && e.formFieldId === f.MARKETING_CN && e.isRequired || e.isRequired,
            [o, l] = (0, u.useState)(!1),
            {
                formFieldId: i,
                checkboxLabel: s,
                checkboxPlainTextLabel: d,
                countryRestriction: g,
                visibleCountry: b
            } = e;
        return g && g?.length > 0 && !e.countryCode || g?.find(t => t.countryCode === e.countryCode) || !c(b, e.countryCode) ? null : (0, n.jsx)(a.Controller, {
            name: i,
            control: e.control,
            rules: {
                required: r
            },
            render: ({
                field: {
                    onChange: r,
                    ...u
                },
                fieldState: a,
                formState: c
            }) => (0, n.jsxs)(n.Fragment, {
                children: [!t.some(t => t === e.formFieldId) && (0, n.jsx)(x, {
                    requiredText: e.requiredText,
                    hasError: void 0 !== a.error,
                    isRequired: e.isRequired,
                    ...u,
                    ...a,
                    ...c,
                    onChange: e => {
                        r(e), l(!o)
                    },
                    isSelected: o,
                    id: i,
                    name: i,
                    children: (0, n.jsxs)($.default, {
                        className: "font-medium [a]:underline",
                        children: [s && (0, n.jsx)(m.PortableText, {
                            value: s,
                            components: s
                        }), d && d?.checkboxLabelText]
                    })
                }), e.chained && e.chained.map((t, d) => {
                    if (t.value === e.countryCode && t.dependant === e.formFieldId) return (0, n.jsx)(x, {
                        requiredText: e.requiredText,
                        hasError: void 0 !== a.error,
                        ...u,
                        ...a,
                        ...c,
                        onChange: e => {
                            r(e), l(!o)
                        },
                        isSelected: o,
                        id: i,
                        name: i,
                        children: (0, n.jsx)($.default, {
                            className: "[a]:underline",
                            children: (0, n.jsx)(m.PortableText, {
                                value: s,
                                components: s
                            })
                        })
                    }, d)
                })]
            })
        })
    }], 829483);
    var A = e.i(481392),
        S = e.i(248708),
        V = e.i(666747),
        F = e.i(476090),
        k = e.i(664106),
        T = e.i(776050),
        E = e.i(888839),
        w = e.i(575414),
        D = {};
    D = {
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
    var j = e.i(904960),
        _ = e.i(455239),
        O = e.i(429305),
        L = e.i(964059),
        R = e.i(869049),
        B = e.i(823512),
        I = e.i(270170),
        P = e.i(501427),
        N = e.i(629080),
        M = e.i(97584),
        q = e.i(660063),
        G = e.i(117696),
        U = e.i(600939),
        K = e.i(419685),
        z = e.i(511607),
        Z = e.i(251635);

    function W(e, t) {
        var r, o, n;
        let l, i, a, {
                buttonRef: s,
                popoverRef: d,
                inputRef: c,
                listBoxRef: p,
                keyboardDelegate: f,
                layoutDelegate: m,
                shouldFocusWrap: g,
                isReadOnly: b,
                isDisabled: h
            } = e,
            y = (0, u.useRef)(null);
        s = s ?? y;
        let v = (0, P.useLocalizedStringFormatter)((r = D) && r.__esModule ? r.default : r, "@react-aria/combobox"),
            {
                menuTriggerProps: C,
                menuProps: x
            } = (0, N.useMenuTrigger)({
                type: "listbox",
                isDisabled: h || b
            }, t, s);
        E.listData.set(t, {
            id: x.id
        });
        let {
            collection: $
        } = t, {
            disabledKeys: A
        } = t.selectionManager, W = (0, u.useMemo)(() => f || new(0, _.ListKeyboardDelegate)({
            collection: $,
            disabledKeys: A,
            ref: p,
            layoutDelegate: m
        }), [f, m, $, A, p]), {
            collectionProps: H
        } = (0, q.useSelectableCollection)({
            selectionManager: t.selectionManager,
            keyboardDelegate: W,
            disallowTypeAhead: !0,
            disallowEmptySelection: !0,
            shouldFocusWrap: g,
            ref: c,
            isVirtualized: !0
        }), Q = (0, M.useRouter)(), Y = function(e = []) {
            let t = (0, B.useId)(),
                [r, o] = (0, u.useState)(!0),
                [n, l] = (0, u.useState)(e);
            return n.some((t, r) => !Object.is(t, e[r])) && (o(!0), l(e)), (0, u.useEffect)(() => {
                r && !document.getElementById(t) && o(!1)
            }, [t, r, n]), r ? t : void 0
        }([t.selectionManager.selectedKeys, t.selectionManager.selectionMode]), {
            isInvalid: J,
            validationErrors: X,
            validationDetails: ee
        } = t.displayValidation, {
            labelProps: et,
            inputProps: er,
            descriptionProps: eo,
            errorMessageProps: en
        } = (0, G.useTextField)({
            ...e,
            isRequired: "multiple" === e.selectionMode ? e.isRequired && t.selectionManager.isEmpty : e.isRequired,
            onChange: t.setInputValue,
            onKeyDown: b ? e.onKeyDown : (0, F.chain)(t.isOpen && H.onKeyDown, r => {
                if (!r.nativeEvent.isComposing) switch (r.key) {
                    case "Enter":
                    case "Tab":
                        if (t.isOpen && "Enter" === r.key && r.preventDefault(), t.isOpen && p.current && null != t.selectionManager.focusedKey) {
                            let e = t.collection.getItem(t.selectionManager.focusedKey);
                            if (e?.props.href) {
                                let o = p.current.querySelector(`[data-key="${CSS.escape(t.selectionManager.focusedKey.toString())}"]`);
                                "Enter" === r.key && o instanceof HTMLAnchorElement && Q.open(o, r, e.props.href, e.props.routerOptions), t.close();
                                break
                            }
                            if (e?.props.onAction) {
                                e.props.onAction(), t.close();
                                break
                            }
                        }("Enter" === r.key || t.isOpen) && t.commit(), "Tab" === r.key && r.continuePropagation();
                        break;
                    case "Escape":
                        (!t.selectionManager.isEmpty || "" === t.inputValue || e.allowsCustomValue) && r.continuePropagation(), t.revert();
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
                let o = s?.current && s.current === r.relatedTarget,
                    n = (0, T.nodeContains)(d.current, r.relatedTarget);
                o || n || (e.onBlur && e.onBlur(r), t.setFocused(!1))
            },
            value: t.inputValue,
            defaultValue: t.defaultInputValue,
            onFocus: r => {
                t.isFocused || (e.onFocus && e.onFocus(r), t.setFocused(!0))
            },
            autoComplete: "off",
            validate: void 0,
            [Z.privateValidationStateProp]: t,
            "aria-describedby": [Y, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }, c);
        (0, R.useFormReset)(c, t.defaultValue, t.setValue);
        let eu = (0, I.useLabels)({
                id: C.id,
                "aria-label": v.format("buttonLabel"),
                "aria-labelledby": e["aria-labelledby"] || et.id
            }),
            el = (0, I.useLabels)({
                id: x.id,
                "aria-label": v.format("listboxLabel"),
                "aria-labelledby": e["aria-labelledby"] || et.id
            }),
            ei = (0, u.useRef)(0),
            ea = null != t.selectionManager.focusedKey && t.isOpen ? t.collection.getItem(t.selectionManager.focusedKey) : void 0,
            es = ea?.parentKey ?? null,
            ed = t.selectionManager.focusedKey ?? null,
            ec = (0, u.useRef)(es),
            ep = (0, u.useRef)(ed);
        (0, u.useEffect)(() => {
            if ((0, j.isAppleDevice)() && null != ea && null != ed && ed !== ep.current) {
                let e = t.selectionManager.isSelected(ed),
                    r = null != es ? t.collection.getItem(es) : null,
                    o = r?.["aria-label"] || ("string" == typeof r?.rendered ? r.rendered : "") || "",
                    n = v.format("focusAnnouncement", {
                        isGroupChange: (r && es !== ec.current) ?? !1,
                        groupTitle: o,
                        groupCount: r ? [...(0, K.getChildNodes)(r, t.collection)].length : 0,
                        optionText: ea["aria-label"] || ea.textValue || "",
                        isSelected: e
                    });
                (0, S.announce)(n)
            }
            ec.current = es, ep.current = ed
        });
        let ef = (0, z.getItemCount)(t.collection),
            em = (0, u.useRef)(ef),
            eg = (0, u.useRef)(t.isOpen);
        (0, u.useEffect)(() => {
            let e = t.isOpen !== eg.current && (null == t.selectionManager.focusedKey || (0, j.isAppleDevice)());
            if (t.isOpen && (e || ef !== em.current)) {
                let e = v.format("countAnnouncement", {
                    optionCount: ef
                });
                (0, S.announce)(e)
            }
            em.current = ef, eg.current = t.isOpen
        });
        let eb = (0, u.useRef)(t.selectedKey);
        return (0, u.useEffect)(() => {
            if ((0, j.isAppleDevice)() && t.isFocused && t.selectedItem && t.selectedKey !== eb.current) {
                let e = t.selectedItem["aria-label"] || t.selectedItem.textValue || "",
                    r = v.format("selectedAnnouncement", {
                        optionText: e
                    });
                (0, S.announce)(r)
            }
            eb.current = t.selectedKey
        }), (0, u.useEffect)(() => {
            if (t.isOpen) return (0, V.ariaHideOutside)([c.current, d.current].filter(e => null != e))
        }, [t.isOpen, c, d]), o = () => {
            !ea && c.current && (0, T.getActiveElement)((0, w.getOwnerDocument)(c.current)) === c.current && (0, k.dispatchVirtualFocus)(c.current, null)
        }, n = [ea], l = (0, u.useRef)(!0), i = (0, u.useRef)(null), a = (0, U.useEffectEvent)(o), (0, u.useEffect)(() => (l.current = !0, () => {
            l.current = !1
        }), []), (0, u.useEffect)(() => {
            let e = i.current;
            l.current ? l.current = !1 : (!e || n.some((t, r) => !Object.is(t, e[r]))) && a(), i.current = n
        }, n), (0, L.useEvent)(p, "react-aria-item-action", t.isOpen ? () => {
            t.close()
        } : void 0), {
            labelProps: et,
            buttonProps: {
                ...C,
                ...eu,
                excludeFromTabOrder: !0,
                preventFocusOnPress: !0,
                onPress: e => {
                    "touch" === e.pointerType && (c.current?.focus(), t.toggle(null, "manual"))
                },
                onPressStart: e => {
                    "touch" !== e.pointerType && (c.current?.focus(), t.toggle("keyboard" === e.pointerType || "virtual" === e.pointerType ? "first" : null, "manual"))
                },
                isDisabled: h || b
            },
            inputProps: (0, O.mergeProps)(er, {
                role: "combobox",
                "aria-expanded": C["aria-expanded"],
                "aria-controls": t.isOpen ? x.id : void 0,
                "aria-autocomplete": "list",
                "aria-activedescendant": ea ? (0, E.getItemId)(t, ea.key) : void 0,
                onTouchEnd: e => {
                    if (h || b) return;
                    if (e.timeStamp - ei.current < 500) {
                        e.preventDefault(), c.current?.focus();
                        return
                    }
                    let r = (0, T.getEventTarget)(e).getBoundingClientRect(),
                        o = e.changedTouches[0],
                        n = Math.ceil(r.left + .5 * r.width),
                        u = Math.ceil(r.top + .5 * r.height);
                    o.clientX === n && o.clientY === u && (e.preventDefault(), c.current?.focus(), t.toggle(null, "manual"), ei.current = e.timeStamp)
                },
                autoCorrect: "off",
                spellCheck: "false"
            }),
            listBoxProps: (0, O.mergeProps)(x, el, {
                onAction: void 0,
                autoFocus: t.focusStrategy || !0,
                shouldUseVirtualFocus: !0,
                shouldSelectOnPressUp: !0,
                shouldFocusOnHover: !0,
                linkBehavior: "selection",
                UNSTABLE_itemBehavior: "action"
            }),
            valueProps: {
                id: Y
            },
            descriptionProps: eo,
            errorMessageProps: en,
            isInvalid: J,
            validationErrors: X,
            validationDetails: ee
        }
    }
    e.s(["useComboBox", 0, W], 938822);
    var H = e.i(702985);

    function Q(e) {
        let t = (0, H.useCollator)({
                usage: "search",
                ...e
            }),
            r = (0, u.useCallback)((e, r) => 0 === r.length || (e = e.normalize("NFC"), r = r.normalize("NFC"), 0 === t.compare(e.slice(0, r.length), r)), [t]),
            o = (0, u.useCallback)((e, r) => 0 === r.length || (e = e.normalize("NFC"), r = r.normalize("NFC"), 0 === t.compare(e.slice(-r.length), r)), [t]),
            n = (0, u.useCallback)((e, r) => {
                if (0 === r.length) return !0;
                e = e.normalize("NFC");
                let o = 0,
                    n = (r = r.normalize("NFC")).length;
                for (; o + n <= e.length; o++) {
                    let u = e.slice(o, o + n);
                    if (0 === t.compare(r, u)) return !0
                }
                return !1
            }, [t]);
        return (0, u.useMemo)(() => ({
            startsWith: r,
            endsWith: o,
            contains: n
        }), [r, o, n])
    }
    e.s(["useFilter", 0, Q], 86703);
    var Y = e.i(603360),
        J = e.i(997007),
        X = e.i(512985),
        ee = e.i(803258);

    function et(e) {
        let {
            defaultFilter: t,
            menuTrigger: r = "input",
            allowsEmptyCollection: o = !1,
            allowsCustomValue: n,
            shouldCloseOnBlur: l = !0,
            selectionMode: i = "single"
        } = e, [a, s] = (0, u.useState)(!1), [d, c] = (0, u.useState)(!1), [p, f] = (0, u.useState)(null), m = (0, u.useMemo)(() => void 0 !== e.defaultValue ? e.defaultValue : "single" === i ? e.defaultSelectedKey ?? null : [], [e.defaultValue, e.defaultSelectedKey, i]), g = (0, u.useMemo)(() => void 0 !== e.value ? e.value : "single" === i ? e.selectedKey : void 0, [e.value, e.selectedKey, i]), [b, h] = (0, ee.useControlledState)(g, m, e.onChange), y = "single" === i && Array.isArray(b) ? b[0] : b, v = t => {
            if ("single" === i) {
                let r = Array.isArray(t) ? t[0] ?? null : t;
                h(r), r !== y && e.onSelectionChange?.(r)
            } else {
                let e = [];
                Array.isArray(t) ? e = t : null != t && (e = [t]), h(e)
            }
        }, {
            collection: C,
            selectionManager: x,
            disabledKeys: $
        } = (0, J.useListState)({
            ...e,
            items: e.items ?? e.defaultItems,
            selectionMode: i,
            disallowEmptySelection: "single" === i,
            allowDuplicateSelectionEvents: !0,
            selectedKeys: (0, u.useMemo)(() => (function(e) {
                if (void 0 !== e) return null === e ? [] : Array.isArray(e) ? e : [e]
            })(y), [y]),
            onSelectionChange: t => {
                if ("all" !== t)
                    if ("single" === i) {
                        let r = t.values().next().value ?? null;
                        r === y ? (e.onSelectionChange?.(r), N(), B()) : v(r)
                    } else v([...t])
            }
        }), A = "single" === i ? x.firstSelectedKey : null, S = (0, u.useMemo)(() => [...x.selectedKeys].map(e => C.getItem(e)).filter(e => null != e), [x.selectedKeys, C]), [V, F] = (0, ee.useControlledState)(e.inputValue, er(e.defaultInputValue, A, C) || "", e.onInputChange), [k] = (0, u.useState)(y), [T] = (0, u.useState)(V), E = (0, u.useMemo)(() => {
            var r, o, n;
            return null == e.items && t ? (r = C, o = V, n = t, new(0, Y.ListCollection)(function e(t, r, o, n) {
                let u = [];
                for (let l of r)
                    if ("section" === l.type && l.hasChildNodes) {
                        let r = e(t, (0, K.getChildNodes)(l, t), o, n);
                        [...r].some(e => "item" === e.type) && u.push({
                            ...l,
                            childNodes: r
                        })
                    } else "item" === l.type && n(l.textValue, o) ? u.push({
                        ...l
                    }) : "item" !== l.type && u.push({
                        ...l
                    });
                return u
            }(r, r, o, n))) : C
        }, [C, V, t, e.items]), [w, D] = (0, u.useState)(E), j = (0, u.useRef)("focus"), _ = (0, X.useOverlayTriggerState)({
            ...e,
            onOpenChange: t => {
                e.onOpenChange && e.onOpenChange(t, t ? j.current : void 0), x.setFocused(t), t || x.setFocusedKey(null)
            },
            isOpen: void 0,
            defaultOpen: void 0
        }), O = (t = null, n) => {
            let u = "manual" === n || "focus" === n && "focus" === r;
            (o || E.size > 0 || u && C.size > 0 || e.items) && (u && !_.isOpen && void 0 === e.items && s(!0), j.current = n, f(t), _.open())
        }, L = (0, u.useCallback)(() => {
            D(a ? C : E)
        }, [a, C, E]), R = (0, u.useCallback)((e = null) => {
            _.isOpen && L(), f(e), _.toggle()
        }, [_, L]), B = (0, u.useCallback)(() => {
            _.isOpen && (L(), _.close())
        }, [_, L]), [I, P] = (0, u.useState)(V), N = () => {
            let e = null != A ? C.getItem(A)?.textValue ?? "" : "";
            P(e), F(e)
        }, M = (0, u.useRef)(y), q = (0, u.useRef)(null != A ? C.getItem(A)?.textValue ?? "" : "");
        (0, u.useEffect)(() => {
            d && (E.size > 0 || o) && !_.isOpen && V !== I && "manual" !== r && O(null, "input"), a || o || !_.isOpen || 0 !== E.size || B(), null != y && y !== M.current && "single" === i && B(), V !== I && (x.setFocusedKey(null), s(!1), "single" === i && "" === V && (void 0 === e.inputValue || void 0 === g) && v(null)), y !== M.current && (void 0 === e.inputValue || void 0 === g) ? N() : I !== V && P(V);
            let t = null != A ? C.getItem(A)?.textValue ?? "" : "";
            d || null == A || void 0 !== e.inputValue || A !== M.current || q.current === t || (P(t), F(t)), M.current = y, q.current = t
        });
        let G = (0, Z.useFormValidationState)({
                ...e,
                value: (0, u.useMemo)(() => Array.isArray(y) && 0 === y.length ? null : {
                    inputValue: V,
                    value: y,
                    selectedKey: A
                }, [V, A, y])
            }),
            U = () => {
                if ("multiple" === i) {
                    P(V), B();
                    return
                }
                M.current = null, v(null), B()
            },
            z = (t = !1) => {
                if (void 0 !== g && void 0 !== e.inputValue) {
                    let r = null != A ? C.getItem(A)?.textValue ?? "" : "";
                    (t || "multiple" === i || V !== r) && (e.onSelectionChange?.(A), e.onChange?.(y)), P(r), B()
                } else N(), B()
            },
            W = () => {
                n ? V === (null != A ? C.getItem(A)?.textValue ?? "" : "") ? z() : U() : z()
            },
            H = (0, u.useRef)([V, y]),
            Q = (0, u.useMemo)(() => _.isOpen ? a ? C : E : w, [_.isOpen, C, E, a, w]),
            et = e.defaultSelectedKey ?? ("single" === i ? k : null);
        return {
            ...G,
            ..._,
            focusStrategy: p,
            toggle: (t = null, n) => {
                let u = "manual" === n || "focus" === n && "focus" === r;
                (o || E.size > 0 || u && C.size > 0 || e.items || _.isOpen) && (u && !_.isOpen && void 0 === e.items && s(!0), _.isOpen || (j.current = n), R(t))
            },
            open: O,
            close: W,
            selectionManager: x,
            value: y,
            defaultValue: m ?? k,
            setValue: v,
            selectedKey: A,
            selectedItems: S,
            defaultSelectedKey: et,
            setSelectedKey: v,
            disabledKeys: $,
            isFocused: d,
            setFocused: t => {
                t ? (H.current = [V, y], "focus" !== r || e.isReadOnly || O(null, "focus")) : (l && W(), (V !== H.current[0] || y !== H.current[1]) && G.commitValidation()), c(t)
            },
            selectedItem: S[0] ?? null,
            collection: Q,
            inputValue: V,
            defaultInputValue: er(e.defaultInputValue, et, C) ?? T,
            setInputValue: F,
            commit: () => {
                _.isOpen && null != x.focusedKey ? x.isSelected(x.focusedKey) && "single" === i ? z(!0) : x.select(x.focusedKey) : W()
            },
            revert: () => {
                n && null == A ? U() : z()
            }
        }
    }

    function er(e, t, r) {
        return null == e && null != t ? r.getItem(t)?.textValue ?? "" : e
    }
    e.s(["useComboBoxState", 0, et], 908390);
    var eo = e.i(611017),
        en = e.i(661013),
        eu = e.i(441737),
        el = e.i(672451),
        ei = e.i(419476),
        ea = e.i(675815);
    let es = e => {
        let t = u.default.useRef(null),
            {
                popoverRef: r = t,
                isOpen: o,
                onClose: l,
                children: i
            } = e,
            {
                overlayProps: a
            } = (0, ei.useOverlay)({
                isOpen: o,
                onClose: l,
                shouldCloseOnBlur: !0,
                isDismissable: !0
            }, r);
        return (0, n.jsx)(ea.FocusScope, {
            restoreFocus: !0,
            children: (0, n.jsxs)("div", {
                className: "absolute z-10 mt-[6px] w-full rounded-xl bg-white drop-shadow-xl",
                ...a,
                ref: r,
                children: [i, (0, n.jsx)(el.DismissButton, {
                    onDismiss: l
                })]
            })
        })
    };
    var ed = e.i(360375),
        ec = e.i(6390);
    let ep = ({
            item: e,
            state: t
        }) => {
            let r = (0, u.useRef)(null),
                {
                    optionProps: o,
                    isSelected: l,
                    isFocused: i
                } = (0, ec.useOption)({
                    key: e.key
                }, t, r),
                a = (0, g.default)("m-1 select-none rounded-lg bg-gray-200 pb-1 pl-2 pr-2 pt-1 text-sm font-semibold text-black cursor-pointer", {
                    "bg-gray-200": l || i,
                    "bg-transparent": !l && !i
                });
            return (0, n.jsx)("li", {
                ...o,
                ref: r,
                className: a,
                children: e.rendered
            })
        },
        ef = e => {
            let t = u.default.useRef(null),
                {
                    listBoxRef: r = t,
                    state: o
                } = e,
                {
                    listBoxProps: l
                } = (0, ed.useListBox)(e, o, r);
            return (0, n.jsx)("ul", {
                ...l,
                ref: r,
                className: "m-0 max-h-40 list-none overflow-auto p-0",
                children: [...o.collection].map(e => (0, n.jsx)(ep, {
                    item: e,
                    state: o
                }, e.key))
            })
        };
    var em = e.i(66736);
    let eg = e => {
        let {
            isDisabled: t,
            hasError: r,
            hasWarning: o
        } = e, {
            contains: l
        } = Q({
            sensitivity: "base"
        }), i = et({
            ...e,
            defaultFilter: l
        }), a = (0, u.useRef)(null), s = (0, u.useRef)(null), d = (0, u.useRef)(null), c = (0, u.useRef)(null), {
            buttonProps: p,
            inputProps: f,
            listBoxProps: m,
            labelProps: b
        } = W({
            ...e,
            inputRef: s,
            buttonRef: a,
            listBoxRef: d,
            popoverRef: c
        }, i), {
            buttonProps: h
        } = (0, eo.useButton)(p, a), y = (0, g.default)("stroke-gray-900 group-hover/select:stroke-gray-800 dark:group-hover/select:stroke-gray-200 transition-all ease-out duration-400", {
            "rotate-180 stroke-gray-900 ": i.isOpen
        }), v = (0, g.default)("rounded-lg w-full border border-gray-200 outline-blue focus:ring-3 focus:ring-blue-dark focus:outline-blue focus:outline-offset-0 focus:border-none transition-all ease-out duration-400", "text-gray-900 dark:text-gray-400 dark:text-white", "placeholder-gray-600 dark:placeholder-gray-400", {
            "bg-gray-100 dark:bg-gray-800 cursor-not-allowed": t,
            "border-yellow-500 dark:border-yellow-500 border-2": o,
            "border-red-500 dark:border-red-500 border-2": r
        }, {
            "bg-gray-50 dark:bg-gray-900": !t,
            "border-gray-400 hover:border-gray-900 dark:border-gray-500 dark:hover:border-white": !r && !o
        });
        return (0, n.jsxs)("div", {
            className: "inline-flex w-full flex-col",
            children: [(0, n.jsxs)("div", {
                className: "flex justify-between",
                children: [(0, n.jsx)("label", {
                    ...b,
                    className: "inline-block pb-2",
                    children: e.label
                }), e.required && (0, n.jsx)("span", {
                    className: "text-sm text-gray-400",
                    children: e.requiredText
                })]
            }), (0, n.jsxs)("div", {
                className: "relative inline-block w-full",
                children: [(0, n.jsx)("input", {
                    ...f,
                    ref: s,
                    className: v
                }), (0, n.jsx)("button", {
                    className: "absolute top-0 right-0 bottom-0 h-10 px-2 text-gray-900",
                    ...h,
                    ref: a,
                    children: (0, n.jsx)("span", {
                        "aria-hidden": "true",
                        children: (0, n.jsx)(en.default, {
                            className: y
                        })
                    })
                }), e.helpText && (0, n.jsx)(eu.default, {
                    helperText: e.helpText,
                    hasError: e.hasError,
                    hasWarning: e.hasWarning
                }), i.isOpen && (0, n.jsx)(es, {
                    popoverRef: c,
                    isOpen: i.isOpen,
                    onClose: i.close,
                    children: (0, n.jsx)(ef, {
                        ...m,
                        listBoxRef: d,
                        state: i
                    })
                })]
            })]
        })
    };
    eg.Item = em.Item;
    var eb = e.i(475200);
    e.s(["default", 0, e => {
        let {
            visibleConditions: t,
            visibleCountry: r,
            countryCode: o
        } = e, i = (0, eb.default)(), d = e?.chained?.map(e => e.dependant) || [];
        (0, u.useEffect)(() => {
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
        (0, u.useEffect)(() => {
            f || e.control.unregister(e.formFieldId)
        }, [f, e.control, e.formFieldId]);
        let m = t => {
                e.setValue(e.formFieldId, t, {
                    shouldValidate: !0
                })
            },
            g = e => (0, n.jsx)(eg.Item, {
                children: e?.label || e?.option
            }, e.value),
            b = t => {
                e.setValue(e.formFieldId, t, {
                    shouldValidate: !0
                })
            },
            h = e => (0, n.jsx)(eg.Item, {
                children: e.label
            }, e.value);
        return f && c(r, o) ? (0, n.jsx)(a.Controller, {
            name: e.formFieldId,
            control: e.control,
            rules: {
                required: e.isRequired
            },
            render: ({
                fieldState: t
            }) => (0, n.jsxs)(n.Fragment, {
                children: [!d.some(t => t === e.formFieldId) && (i ? (0, n.jsxs)("div", {
                    className: "inline-flex w-full flex-col",
                    children: [(0, n.jsxs)("label", {
                        className: "flex items-center justify-between pb-2",
                        children: [(0, n.jsx)("span", {
                            children: e.label
                        }), e.isRequired && (0, n.jsx)("span", {
                            className: "text-sm text-gray-400",
                            children: e.requiredText
                        })]
                    }), (0, n.jsx)(A.default, {
                        isDisabled: e.isDisabled,
                        selectedKey: e.defaultValue,
                        label: e.label,
                        name: e.formFieldId,
                        placeholder: e.placeholder,
                        onSelectionChange: m,
                        className: t.error ? "rounded-lg border-2 border-red-500 bg-white p-2" : "rounded-lg border border-gray-300 bg-white p-2",
                        children: (e?.dropdownOptionsFromReference?.options || e?.dropdownOptions || []).map(t => {
                            let r, o;
                            return r = void 0 !== t.value ? t.value : t.key || t.toString(), (o = t.label || t.option || t.text || t.toString() || e.placeholder) && "string" != typeof o && (o = r), (0, n.jsx)(A.default.Item, {
                                children: o
                            }, r)
                        })
                    }), t.error && (0, n.jsx)(eu.default, {
                        helperText: (0, l.default)(e.helpText, e.errorText, e.warningText, void 0 !== t.error, !1),
                        hasError: void 0 !== t.error
                    })]
                }) : (0, n.jsx)(eg, {
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
                })), e.chained && e.chained.map((r, o) => r.value === e.countryCode && r.dependant === e.formFieldId ? i ? (0, n.jsxs)("div", {
                    className: "inline-flex w-full flex-col",
                    children: [(0, n.jsxs)("label", {
                        className: "flex items-center justify-between pb-2",
                        children: [(0, n.jsx)("span", {
                            children: e.label
                        }), e.isRequired && (0, n.jsx)("span", {
                            className: "text-sm text-gray-400",
                            children: e.requiredText
                        })]
                    }), (0, n.jsx)(A.default, {
                        isDisabled: e.isDisabled,
                        selectedKey: e.defaultValue,
                        label: e.label,
                        name: e.formFieldId,
                        placeholder: e.placeholder,
                        onSelectionChange: b,
                        className: t.error ? "rounded-lg border-2 border-red-500 bg-white p-2" : "rounded-lg border border-gray-300 bg-white p-2",
                        children: (e?.dropdownOptionsFromReference?.options || e?.dropdownOptions || []).map(t => {
                            let r, o;
                            return r = void 0 !== t.value ? t.value : t.key || t.toString(), o = t.label || t.text || t.toString() || e.placeholder, (0, n.jsx)(A.default.Item, {
                                children: o
                            }, r)
                        })
                    }), t.error && (0, n.jsx)(eu.default, {
                        helperText: (0, l.default)(e.helpText, e.errorText, e.warningText, void 0 !== t.error, !1),
                        hasError: void 0 !== t.error
                    })]
                }, o) : (0, n.jsx)(eg, {
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
    }], 662380)
}, 923747, e => {
    "use strict";
    var t = e.i(499531),
        r = e.i(848662);
    let o = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M116,132V80a12,12,0,0,1,24,0v52a12,12,0,0,1-24,0ZM236,91.55v72.9a19.86,19.86,0,0,1-5.86,14.14l-51.55,51.55A19.85,19.85,0,0,1,164.45,236H91.55a19.85,19.85,0,0,1-14.14-5.86L25.86,178.59A19.86,19.86,0,0,1,20,164.45V91.55a19.86,19.86,0,0,1,5.86-14.14L77.41,25.86A19.85,19.85,0,0,1,91.55,20h72.9a19.85,19.85,0,0,1,14.14,5.86l51.55,51.55A19.86,19.86,0,0,1,236,91.55Zm-24,1.66L162.79,44H93.21L44,93.21v69.58L93.21,212h69.58L212,162.79ZM128,156a16,16,0,1,0,16,16A16,16,0,0,0,128,156Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M224,91.55v72.9a8,8,0,0,1-2.34,5.66l-51.55,51.55a8,8,0,0,1-5.66,2.34H91.55a8,8,0,0,1-5.66-2.34L34.34,170.11A8,8,0,0,1,32,164.45V91.55a8,8,0,0,1,2.34-5.66L85.89,34.34A8,8,0,0,1,91.55,32h72.9a8,8,0,0,1,5.66,2.34l51.55,51.55A8,8,0,0,1,224,91.55Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M120,136V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0ZM232,91.55v72.9a15.86,15.86,0,0,1-4.69,11.31l-51.55,51.55A15.86,15.86,0,0,1,164.45,232H91.55a15.86,15.86,0,0,1-11.31-4.69L28.69,175.76A15.86,15.86,0,0,1,24,164.45V91.55a15.86,15.86,0,0,1,4.69-11.31L80.24,28.69A15.86,15.86,0,0,1,91.55,24h72.9a15.86,15.86,0,0,1,11.31,4.69l51.55,51.55A15.86,15.86,0,0,1,232,91.55Zm-16,0L164.45,40H91.55L40,91.55v72.9L91.55,216h72.9L216,164.45ZM128,160a12,12,0,1,0,12,12A12,12,0,0,0,128,160Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M227.31,80.23,175.77,28.69A16.13,16.13,0,0,0,164.45,24H91.55a16.13,16.13,0,0,0-11.32,4.69L28.69,80.23A16.13,16.13,0,0,0,24,91.55v72.9a16.13,16.13,0,0,0,4.69,11.32l51.54,51.54A16.13,16.13,0,0,0,91.55,232h72.9a16.13,16.13,0,0,0,11.32-4.69l51.54-51.54A16.13,16.13,0,0,0,232,164.45V91.55A16.13,16.13,0,0,0,227.31,80.23ZM120,80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M122,136V80a6,6,0,0,1,12,0v56a6,6,0,0,1-12,0ZM230,91.55v72.9a13.92,13.92,0,0,1-4.1,9.9L174.35,225.9a13.92,13.92,0,0,1-9.9,4.1H91.55a13.92,13.92,0,0,1-9.9-4.1L30.1,174.35a13.92,13.92,0,0,1-4.1-9.9V91.55a13.92,13.92,0,0,1,4.1-9.9L81.65,30.1a13.92,13.92,0,0,1,9.9-4.1h72.9a13.92,13.92,0,0,1,9.9,4.1L225.9,81.65A13.92,13.92,0,0,1,230,91.55Zm-12,0a2,2,0,0,0-.59-1.42L165.87,38.59a2,2,0,0,0-1.42-.59H91.55a2,2,0,0,0-1.41.59L38.58,90.13A2,2,0,0,0,38,91.55v72.9a2,2,0,0,0,.59,1.42l51.54,51.54a2,2,0,0,0,1.42.59h72.9a2,2,0,0,0,1.41-.59l51.56-51.54a2,2,0,0,0,.58-1.42ZM128,162a10,10,0,1,0,10,10A10,10,0,0,0,128,162Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M120,136V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0ZM232,91.55v72.9a15.86,15.86,0,0,1-4.69,11.31l-51.55,51.55A15.86,15.86,0,0,1,164.45,232H91.55a15.86,15.86,0,0,1-11.31-4.69L28.69,175.76A15.86,15.86,0,0,1,24,164.45V91.55a15.86,15.86,0,0,1,4.69-11.31L80.24,28.69A15.86,15.86,0,0,1,91.55,24h72.9a15.86,15.86,0,0,1,11.31,4.69l51.55,51.55A15.86,15.86,0,0,1,232,91.55Zm-16,0L164.45,40H91.55L40,91.55v72.9L91.55,216h72.9L216,164.45ZM128,160a12,12,0,1,0,12,12A12,12,0,0,0,128,160Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M124,136V80a4,4,0,0,1,8,0v56a4,4,0,0,1-8,0ZM228,91.55v72.9a12,12,0,0,1-3.51,8.49l-51.55,51.55a12,12,0,0,1-8.49,3.51H91.55a12,12,0,0,1-8.49-3.51L31.51,172.94A12,12,0,0,1,28,164.45V91.55a12,12,0,0,1,3.51-8.49L83.06,31.51A12,12,0,0,1,91.55,28h72.9a12,12,0,0,1,8.49,3.51l51.55,51.55A12,12,0,0,1,228,91.55Zm-8,0a4,4,0,0,0-1.17-2.83L167.28,37.17A4.06,4.06,0,0,0,164.45,36H91.55a4.06,4.06,0,0,0-2.83,1.17L37.17,88.72A4,4,0,0,0,36,91.55v72.9a4,4,0,0,0,1.17,2.83l51.55,51.55A4.06,4.06,0,0,0,91.55,220h72.9a4.06,4.06,0,0,0,2.83-1.17l51.55-51.55a4,4,0,0,0,1.17-2.83ZM128,164a8,8,0,1,0,8,8A8,8,0,0,0,128,164Z"
            }))]
        ]),
        n = t.forwardRef((e, n) => t.createElement(r.default, {
            ref: n,
            ...e,
            weights: o
        }));
    n.displayName = "WarningOctagonIcon", e.s(["WarningOctagon", 0, n], 923747)
}, 179695, e => {
    "use strict";
    var t = e.i(14666),
        r = e.i(805518),
        o = e.i(923747),
        n = e.i(722990),
        u = e.i(466673),
        l = e.i(272351),
        i = e.i(497492);
    let a = {
        marks: {
            link: ({
                children: e,
                value: r
            }) => {
                let o = r?.href || "#",
                    n = /^https?:\/\//i.test(o);
                return (0, t.jsx)("a", {
                    href: o,
                    ...n ? {
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
        richText: s,
        visibleConditions: d,
        visibleCountry: c,
        countryCode: p,
        className: f,
        formFieldId: m,
        blocksSubmission: g
    }) => {
        let b = (0, u.useWatch)({
            control: e,
            name: d?.map(({
                fieldId: e
            }) => e) || []
        });
        if (!(0, l.shouldRenderField)(d, b) || !(0, i.isCountryVisible)(c, p)) return null;
        let h = s?.text;
        return !h || Array.isArray(h) && 0 === h.length ? null : g ? (0, t.jsx)("div", {
            id: m,
            className: "rounded-lg bg-[#3B1213] p-4",
            children: (0, t.jsxs)("div", {
                className: "flex",
                children: [(0, t.jsx)("div", {
                    className: "pr-4",
                    children: (0, t.jsx)(o.WarningOctagon, {
                        color: "red",
                        weight: "fill",
                        size: 20
                    })
                }), (0, t.jsx)("div", {
                    className: "self-center text-[13px] text-white [&_a]:underline",
                    children: (0, t.jsx)(n.PortableText, {
                        value: h,
                        components: a
                    })
                })]
            })
        }) : (0, t.jsx)("div", {
            id: m,
            children: (0, t.jsx)(r.default, {
                className: f,
                children: (0, t.jsx)(n.PortableText, {
                    value: h,
                    components: a
                })
            })
        })
    }])
}, 613821, e => {
    "use strict";
    var t = e.i(14666);
    let r = (0, e.i(499531).forwardRef)(({
        onSubmit: e,
        children: r
    }, o) => (0, t.jsx)("form", {
        ref: o,
        onSubmit: e,
        className: "flex flex-col",
        children: r
    }));
    r.displayName = "Form", e.s(["default", 0, r], 613821)
}, 545487, e => {
    "use strict";
    var t = e.i(14666),
        r = e.i(499531);
    let o = (0, r.createContext)({
        isGated: !1,
        setIsGated: () => {},
        formSubmitted: !1,
        setFormSubmitted: () => {}
    });
    e.s(["ResourcesDetailContextProvider", 0, ({
        children: e
    }) => {
        let [n, u] = (0, r.useState)(!1), [l, i] = (0, r.useState)(!1);
        return (0, t.jsx)(o.Provider, {
            value: {
                isGated: l,
                setIsGated: i,
                formSubmitted: n,
                setFormSubmitted: u
            },
            children: e
        })
    }, "default", 0, o, "useResourcesDetailContext", 0, () => (0, r.useContext)(o)])
}, 537251, e => {
    "use strict";
    var t = e.i(499531),
        r = e.i(569959),
        o = e.i(239273),
        n = e.i(545487),
        u = e.i(869324),
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
            } = (0, n.useResourcesDetailContext)(),
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
        let V = (0, t.useCallback)(e => {
            if (s) return;
            let t = {};
            t.elqCustomerGUID = y?.split("&")[0]?.split("GUID=")[1] || "", t.emailAddress = e;
            let {
                emailConfirmation: o,
                gcid: n,
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
                    gcid: n,
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
                (0, u.default)({
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
        }, [g]), (0, t.useEffect)(() => (window.LogElqValue = V, window.SetElqContent = () => {
            let e = setInterval(() => {
                A.current++, window.GetElqContentPersonalizationValue && (V(window.GetElqContentPersonalizationValue("V_Email_Address")), clearInterval(e)), 50 === A.current && clearInterval(e)
            }, 100);
            $.current = e
        }, () => {
            clearInterval($.current)
        }), [V]), {
            extraFields: f,
            loading: g
        }
    }])
}]);