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
}, 466673, e => {
    "use strict";
    var t = e.i(499531),
        r = e => e instanceof Date,
        o = e => null == e;
    let u = e => "object" == typeof e;
    var n = e => !o(e) && !Array.isArray(e) && u(e) && !r(e),
        l = e => n(e) && e.target ? "checkbox" === e.target.type ? e.target.checked : e.target.value : e,
        i = (e, t) => t.split(".").some((t, r, o) => !isNaN(Number(t)) && e.has(o.slice(0, r).join("."))),
        a = e => {
            let t = e.constructor && e.constructor.prototype;
            return n(t) && t.hasOwnProperty("isPrototypeOf")
        },
        s = "u" > typeof window && void 0 !== window.HTMLElement && "u" > typeof document;

    function d(e) {
        if (e instanceof Date) return new Date(e);
        let t = "u" > typeof FileList && e instanceof FileList;
        if (s && (e instanceof Blob || t)) return e;
        let r = Array.isArray(e);
        if (!r && !(n(e) && a(e))) return e;
        let o = r ? [] : Object.create(Object.getPrototypeOf(e));
        for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (o[t] = d(e[t]));
        return o
    }
    let c = "blur",
        p = "trigger",
        f = "onChange",
        m = "onSubmit",
        b = "maxLength",
        g = "minLength",
        h = "pattern",
        y = "required",
        C = "validate",
        v = "root",
        x = ["__proto__", "constructor", "prototype"],
        $ = /^\w*$/;
    var A = e => void 0 === e;
    let F = /[.[\]'"]/;
    var k = e => e.split(F).filter(Boolean),
        V = (e, t, r) => {
            if (!t || !n(e)) return r;
            let u = $.test(t) ? [t] : k(t);
            if (u.some(e => x.includes(e))) return r;
            let l = u.reduce((e, t) => o(e) ? void 0 : e[t], e);
            return A(l) || l === e ? A(e[t]) ? r : e[t] : l
        },
        T = e => "function" == typeof e,
        S = (e, t, r) => {
            let o = -1,
                u = $.test(t) ? [t] : k(t),
                l = u.length,
                i = l - 1;
            for (; ++o < l;) {
                let t = u[o],
                    l = r;
                if (o !== i) {
                    let r = e[t];
                    l = n(r) || Array.isArray(r) ? r : isNaN(+u[o + 1]) ? {} : []
                }
                if (x.includes(t)) return;
                e[t] = l, e = e[t]
            }
        };
    let E = t.default.createContext(null);
    E.displayName = "HookFormControlContext";
    var w = (e, t, r, o = !0) => {
        let u = {};
        for (let n in e) Object.defineProperty(u, n, {
            get: () => ("all" !== t._proxyFormState[n] && (t._proxyFormState[n] = !o || "all"), r && (r[n] = !0), e[n])
        });
        return u
    };
    let D = s ? t.default.useLayoutEffect : t.default.useEffect;
    var j = e => "string" == typeof e,
        _ = (e, t, r, o, u) => j(e) ? (o && t.watch.add(e), V(r, e, u)) : Array.isArray(e) ? e.map(e => (o && t.watch.add(e), V(r, e))) : (o && (t.watchAll = !0), r),
        O = e => o(e) || !u(e);
    let B = (e, t) => 0 === t.length && !Array.isArray(e) && !a(e);

    function R(e, t, o = new WeakMap) {
        if (e === t) return !0;
        if (O(e) || O(t)) return Object.is(e, t);
        if (r(e) && r(t)) return Object.is(e.getTime(), t.getTime());
        let u = Object.keys(e),
            l = Object.keys(t);
        if (u.length !== l.length) return !1;
        if (B(e, u) || B(t, l)) return Object.is(e, t);
        if (!u.length && Array.isArray(e) !== Array.isArray(t)) return !1;
        let i = o.get(e);
        if (i && i.has(t)) return !0;
        if (i) i.add(t);
        else {
            let r = new WeakSet;
            r.add(t), o.set(e, r)
        }
        for (let l of u) {
            let u = e[l];
            if (!(l in t)) return !1;
            if ("ref" !== l) {
                let e = t[l];
                if (r(u) && r(e) || (n(u) || Array.isArray(u)) && (n(e) || Array.isArray(e)) ? !R(u, e, o) : !Object.is(u, e)) return !1
            }
        }
        return !0
    }

    function L(e) {
        let r = t.default.useContext(E),
            {
                control: o = r,
                name: u,
                defaultValue: n,
                disabled: l,
                exact: i,
                compute: a
            } = e || {},
            s = t.default.useRef(n),
            d = t.default.useRef(a),
            c = t.default.useRef(void 0),
            p = t.default.useRef(o),
            f = t.default.useRef(u);
        d.current = a;
        let [m, b] = t.default.useState(() => {
            let e = o._getWatch(u, s.current);
            return d.current ? d.current(e) : e
        }), g = t.default.useCallback(e => {
            let t = _(u, o._names, e || o._formValues, !1, s.current);
            return d.current ? d.current(t) : t
        }, [o._formValues, o._names, u]), h = t.default.useCallback(e => {
            if (!l) {
                let t = _(u, o._names, e || o._formValues, !1, s.current);
                if (d.current) {
                    let e = d.current(t);
                    R(e, c.current) || (b(e), c.current = e)
                } else b(t)
            }
        }, [o._formValues, o._names, l, u]);
        D(() => (p.current === o && R(f.current, u) || (p.current = o, f.current = u, h()), o._subscribe({
            name: u,
            formState: {
                values: !0
            },
            exact: i,
            callback: e => {
                h(e.values)
            }
        })), [o, i, u, h]), t.default.useEffect(() => o._removeUnmounted());
        let y = p.current !== o,
            C = f.current,
            v = t.default.useMemo(() => {
                if (l) return null;
                let e = !y && !R(C, u);
                return y || e ? g() : null
            }, [l, y, u, C, g]);
        return null !== v ? v : m
    }
    let I = e => {
        let t = {};
        for (let o of Object.keys(e))
            if (u(e[o]) && null !== e[o] && !r(e[o])) {
                let r = I(e[o]);
                for (let e of Object.keys(r)) t[`${o}.${e}`] = r[e]
            } else t[o] = e[o];
        return t
    };
    t.default.createContext(null).displayName = "HookFormContext";
    var N = (e, t, r, o, u) => t ? {
            ...r[e],
            types: {
                ...r[e] && r[e].types ? r[e].types : {},
                [o]: u || !0
            }
        } : {},
        M = e => Array.isArray(e) ? e.filter(Boolean) : [],
        P = e => Array.isArray(e) ? e : [e],
        G = () => {
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
        q = e => n(e) && !Object.keys(e).length,
        K = e => {
            if (!s) return !1;
            let t = e ? e.ownerDocument : 0;
            return e instanceof(t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
        },
        U = e => K(e) && e.isConnected;

    function z(e, t) {
        if (j(t) && Object.prototype.hasOwnProperty.call(e, t)) return delete e[t], e;
        let r = Array.isArray(t) ? t : $.test(t) ? [t] : k(t);
        if (r.some(e => x.includes(String(e)))) return e;
        let u = 1 === r.length ? e : function(e, t) {
                let r = t.slice(0, -1).length,
                    u = 0;
                for (; u < r;) {
                    if (o(e)) {
                        e = void 0;
                        break
                    }
                    e = e[t[u]], u++
                }
                return e
            }(e, r),
            l = r.length - 1,
            i = r[l];
        return u && delete u[i], 0 !== l && (n(u) && q(u) || Array.isArray(u) && function(e) {
            for (let t in e)
                if (e.hasOwnProperty(t) && !A(e[t])) return !1;
            return !0
        }(u)) && z(e, r.slice(0, -1)), e
    }

    function W(e) {
        return Array.isArray(e) || n(e) && !(e => {
            for (let t in e)
                if (T(e[t])) return !0;
            return !1
        })(e)
    }

    function H(e, t = {}) {
        for (let r in e) {
            let o = e[r];
            W(o) ? (t[r] = Array.isArray(o) ? [] : {}, H(o, t[r])) : A(o) || (t[r] = !0)
        }
        return t
    }

    function Q(e, t, r) {
        for (let u in r || (r = H(t)), e) {
            let n = e[u];
            if (W(n)) A(t) || O(r[u]) ? r[u] = H(n, Array.isArray(n) ? [] : {}) : Q(n, o(t) ? {} : t[u], r[u]);
            else {
                let e = t[u];
                r[u] = !R(n, e)
            }
        }
        return function e(t) {
            if (!1 !== t) {
                if (!0 === t) return !0;
                if (Array.isArray(t)) {
                    let r = t.map(t => e(t));
                    return r.some(e => void 0 !== e) ? r : void 0
                }
                if (n(t)) {
                    let r = {};
                    for (let o in t) {
                        let u = e(t[o]);
                        A(u) || (r[o] = u)
                    }
                    return Object.keys(r).length ? r : void 0
                }
            }
        }(r) || {}
    }
    let Y = {
            value: !1,
            isValid: !1
        },
        Z = {
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
                return e[0].checked && !e[0].disabled ? e[0].attributes && !A(e[0].attributes.value) ? A(e[0].value) || "" === e[0].value ? Z : {
                    value: e[0].value,
                    isValid: !0
                } : Z : Y
            }
            return Y
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
    var eo = e => A(e) ? e : e instanceof RegExp ? e.source : n(e) ? e.value instanceof RegExp ? e.value.source : e.value : e,
        eu = e => ({
            isOnSubmit: !e || e === m,
            isOnBlur: "onBlur" === e,
            isOnChange: e === f,
            isOnAll: "all" === e,
            isOnTouch: "onTouched" === e
        });
    let en = "AsyncFunction";
    var el = e => {
            if (!e || !e.validate) return !1;
            if (T(e.validate)) return e.validate.constructor.name === en;
            if (n(e.validate)) {
                for (let t in e.validate)
                    if (e.validate[t].constructor.name === en) return !0
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
        for (let u of r || Object.keys(e)) {
            let r = V(e, u);
            if (r) {
                let {
                    _f: e,
                    ...l
                } = r;
                if (e) {
                    if (e.refs && e.refs[0] && t(e.refs[0], u) && !o) return !0;
                    else if (e.ref && t(e.ref, e.name) && !o) return !0;
                    else if (ea(l, t)) break
                } else if (n(l) && ea(l, t)) break
            }
        }
    };

    function es(e, t, r) {
        let o = V(e, r);
        if (o || $.test(r)) return {
            error: o,
            name: r
        };
        let u = r.split(".");
        for (; u.length;) {
            let o = u.join("."),
                n = V(t, o),
                l = V(e, o);
            if (n && !Array.isArray(n) && r !== o) break;
            if (l && l.type) return {
                name: o,
                error: l
            };
            if (l && l.root && l.root.type) return {
                name: `${o}.root`,
                error: l.root
            };
            u.pop()
        }
        return {
            name: r
        }
    }
    var ed = (e, t, r) => {
        let o = V(e, r),
            u = Array.isArray(o) ? o : [];
        return S(u, v, t[r]), S(e, r, u), e
    };

    function ec(e, t, r = "validate") {
        if (j(e) || Array.isArray(e) && e.every(j) || "boolean" == typeof e && !e) return {
            type: r,
            message: j(e) ? e : "",
            ref: t
        }
    }
    var ep = e => !n(e) || e instanceof RegExp ? {
            value: e,
            message: ""
        } : e,
        ef = async (e, t, r, u, l, i) => {
            let {
                ref: a,
                refs: s,
                required: d,
                maxLength: c,
                minLength: p,
                min: f,
                max: m,
                pattern: v,
                validate: x,
                name: $,
                valueAsNumber: F,
                mount: k
            } = e._f, S = V(r, $);
            if (!k || t.has($)) return {};
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
                B = (F || "file" === a.type) && A(a.value) && A(S) || K(a) && "" === a.value || "" === S || Array.isArray(S) && !S.length,
                R = N.bind(null, $, u, D),
                L = (e, t, r, o = b, u = g) => {
                    let n = e ? t : r;
                    D[$] = {
                        type: e ? o : u,
                        message: n,
                        ref: a,
                        ...R(e ? o : u, n)
                    }
                };
            if (i ? !Array.isArray(S) || !S.length : d && (!(_ || O) && (B || o(S)) || "boolean" == typeof S && !S || O && !J(s).isValid || _ && !et(s).isValid)) {
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
                    }, !u)) return w(t), D
            }
            if (!B && (!o(f) || !o(m))) {
                let e, t, r = ep(m),
                    n = ep(f);
                if (o(S) || isNaN(S)) {
                    let o = a.valueAsDate || new Date(S),
                        u = e => new Date(new Date().toDateString() + " " + e),
                        l = "time" == a.type,
                        i = "week" == a.type;
                    j(r.value) && S && (e = l ? u(S) > u(r.value) : i ? S > r.value : o > new Date(r.value)), j(n.value) && S && (t = l ? u(S) < u(n.value) : i ? S < n.value : o < new Date(n.value))
                } else {
                    let u = a.valueAsNumber || (S ? +S : S);
                    o(r.value) || (e = u > r.value), o(n.value) || (t = u < n.value)
                }
                if ((e || t) && (L(!!e, r.message, n.message, "max", "min"), !u)) return w(D[$].message), D
            }
            if ((c || p) && !B && (j(S) || i && Array.isArray(S))) {
                let e = ep(c),
                    t = ep(p),
                    r = !o(e.value) && S.length > +e.value,
                    n = !o(t.value) && S.length < +t.value;
                if ((r || n) && (L(r, e.message, t.message), !u)) return w(D[$].message), D
            }
            if (v && !B && j(S)) {
                let {
                    value: e,
                    message: t
                } = ep(v);
                if (e instanceof RegExp && !S.match(e) && (D[$] = {
                        type: h,
                        message: t,
                        ref: a,
                        ...R(h, t)
                    }, !u)) return w(t), D
            }
            if (x) {
                if (T(x)) {
                    let e = ec(await x(S, r), E);
                    if (e && (D[$] = {
                            ...e,
                            ...R(C, e.message)
                        }, !u)) return w(e.message), D
                } else if (n(x)) {
                    let e = {};
                    for (let t in x) {
                        if (!q(e) && !u) break;
                        let o = ec(await x[t](S, r), E, t);
                        o && (e = {
                            ...o,
                            ...R(t, o.message)
                        }, w(o.message), u && (D[$] = e))
                    }
                    if (!q(e) && (D[$] = {
                            ref: E,
                            ...e
                        }, !u)) return D
                }
            }
            return w(!0), D
        };
    let em = {
            mode: m,
            reValidateMode: f,
            shouldFocusError: !0
        },
        eb = "form",
        eg = {
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
                disabled: u,
                control: n = r,
                shouldUnregister: a,
                defaultValue: s,
                exact: p = !0
            } = e,
            f = i(n._names.array, o),
            m = t.default.useMemo(() => V(n._formValues, o, V(n._defaultValues, o, s)), [n, o, s]),
            b = L({
                control: n,
                name: o,
                defaultValue: m,
                exact: p
            }),
            g = function(e) {
                let r = t.default.useContext(E),
                    {
                        control: o = r,
                        disabled: u,
                        name: n,
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
                    name: n,
                    formState: s.current,
                    exact: l,
                    callback: e => {
                        u || a({
                            ...o._formState,
                            ...e,
                            defaultValues: o._defaultValues
                        })
                    }
                }), [n, u, l]), t.default.useEffect(() => {
                    s.current.isValid && o._setValid(!0)
                }, [o]), t.default.useMemo(() => w(i, o, s.current, !1), [i, o])
            }({
                control: n,
                name: o,
                exact: p
            }),
            h = t.default.useRef(e),
            y = t.default.useRef(null),
            C = t.default.useRef(n.register(o, {
                ...e.rules,
                value: b,
                ..."boolean" == typeof e.disabled ? {
                    disabled: e.disabled
                } : {}
            }));
        h.current = e;
        let v = t.default.useMemo(() => Object.defineProperties({}, {
                invalid: {
                    enumerable: !0,
                    get: () => !!V(g.errors, o)
                },
                isDirty: {
                    enumerable: !0,
                    get: () => !!V(g.dirtyFields, o)
                },
                isTouched: {
                    enumerable: !0,
                    get: () => !!V(g.touchedFields, o)
                },
                isValidating: {
                    enumerable: !0,
                    get: () => !!V(g.validatingFields, o)
                },
                error: {
                    enumerable: !0,
                    get: () => V(g.errors, o)
                }
            }), [g, o]),
            x = t.default.useCallback(e => {
                let t = l(e);
                return V(n._fields, o) || (C.current = n.register(o, {
                    ...h.current.rules,
                    value: t
                })), C.current.onChange({
                    target: {
                        value: l(e),
                        name: o
                    },
                    type: "change"
                })
            }, [o, n]),
            $ = t.default.useCallback(() => C.current.onBlur({
                target: {
                    value: V(n._formValues, o),
                    name: o
                },
                type: c
            }), [o, n._formValues]),
            F = t.default.useCallback(e => {
                e && (y.current = {
                    focus: () => T(e.focus) && e.focus(),
                    select: () => T(e.select) && e.select(),
                    setCustomValidity: t => T(e.setCustomValidity) && e.setCustomValidity(t),
                    reportValidity: () => T(e.reportValidity) && e.reportValidity()
                });
                let t = V(n._fields, o);
                t && t._f && e && (t._f.ref = y.current)
            }, [n._fields, o]),
            k = t.default.useMemo(() => ({
                name: o,
                value: b,
                ..."boolean" == typeof u || g.disabled ? {
                    disabled: g.disabled || u
                } : {},
                onChange: x,
                onBlur: $,
                ref: F
            }), [o, u, g.disabled, x, $, F, b]);
        return t.default.useEffect(() => {
            let e = n._options.shouldUnregister || a;
            n.register(o, {
                ...h.current.rules,
                ..."boolean" == typeof h.current.disabled ? {
                    disabled: h.current.disabled
                } : {}
            });
            let t = (e, t) => {
                let r = V(n._fields, e);
                r && r._f && (r._f.mount = t)
            };
            if (t(o, !0), e) {
                let e = d(V(a ? n._defaultValues : n._options.values || n._defaultValues, o, V(n._options.defaultValues, o, h.current.defaultValue)));
                S(n._defaultValues, o, e), A(V(n._formValues, o)) && S(n._formValues, o, e)
            }
            if (f || n.register(o), y.current) {
                let e = V(n._fields, o);
                e && e._f && (e._f.ref = y.current)
            }
            return () => {
                (f ? e && !n._state.action : e) ? n.unregister(o): t(o, !1)
            }
        }, [o, n, f, a]), t.default.useEffect(() => {
            n._setDisabledField({
                disabled: u,
                name: o
            })
        }, [u, o, n]), t.default.useMemo(() => ({
            field: k,
            formState: g,
            fieldState: v
        }), [k, g, v])
    }(e)), "useForm", 0, function(e = {}) {
        let u = t.default.useRef(void 0),
            a = t.default.useRef(void 0),
            f = t.default.useRef(e.formControl),
            [m, b] = t.default.useState(() => ({
                ...d(eg),
                isLoading: T(e.defaultValues),
                errors: e.errors || {},
                disabled: e.disabled || !1,
                defaultValues: T(e.defaultValues) ? void 0 : e.defaultValues
            }));
        if (!u.current || e.formControl && f.current !== e.formControl)
            if (f.current = e.formControl, e.formControl) u.current = {
                ...e.formControl,
                formState: m
            }, e.defaultValues && !T(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions);
            else {
                let {
                    formControl: t,
                    ...a
                } = function(e = {}) {
                    let t, u = {
                            ...em,
                            ...e
                        },
                        a = {
                            ...d(eg),
                            isLoading: T(u.defaultValues),
                            errors: u.errors || {},
                            disabled: u.disabled || !1
                        },
                        f = {},
                        m = (n(u.defaultValues) || n(u.values)) && d(u.defaultValues || u.values) || {},
                        b = u.shouldUnregister ? {} : d(m),
                        g = {
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
                        F = eu(u.mode),
                        E = eu(u.reValidateMode),
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
                        B = {
                            array: G(),
                            state: G()
                        },
                        L = "all" === u.criteriaMode,
                        N = async e => {
                            if (!g.keepIsValid && !u.disabled && (D.isValid || O.isValid || e)) {
                                let e;
                                u.resolver ? (e = q((await J()).errors), W()) : e = await en({
                                    fields: f,
                                    onlyCheckValid: !0,
                                    eventType: "valid"
                                }), e !== a.isValid && B.state.next({
                                    isValid: e
                                })
                            }
                        }, W = (e, t) => {
                            !u.disabled && (D.isValidating || D.validatingFields || O.isValidating || O.validatingFields) && ((e || Array.from(h.mount)).forEach(e => {
                                e && (t ? S(a.validatingFields, e, t) : z(a.validatingFields, e))
                            }), B.state.next({
                                validatingFields: a.validatingFields,
                                isValidating: !q(a.validatingFields)
                            }))
                        }, H = () => {
                            a.dirtyFields = Q(m, b)
                        }, Y = (t, r, u, n) => {
                            let l = V(f, t);
                            if (l) {
                                if ((e => {
                                        let t = $.test(e) ? [e] : k(e),
                                            r = b,
                                            u = m;
                                        for (let e = 0; e < t.length - 1; e++) {
                                            let n = t[e];
                                            if (r = o(r) ? r : r[n], u = o(u) ? u : u[n], null === r && null !== u) return !0
                                        }
                                        return !1
                                    })(t)) return;
                                let i = A(V(b, t)),
                                    s = V(b, t, A(u) ? V(m, t) : u);
                                A(s) || n && n.defaultChecked || r ? S(b, t, r ? s : er(l._f)) : eh(t, s), g.mount && !g.action && (N(), i && a.isDirty && (D.isDirty || O.isDirty) && (ec() || (a.isDirty = !1, B.state.next({
                                    ...a
                                }))), e.shouldUnregister && i && !A(V(b, t)) && ei(t, h) && (g.watch = !0))
                            }
                        }, Z = (e, t, r, o, n) => {
                            let l = !1,
                                i = !1,
                                s = {
                                    name: e
                                };
                            if (!u.disabled) {
                                if (!r || o) {
                                    let r = R(V(m, e), t);
                                    (D.isDirty || O.isDirty) && (i = a.isDirty, a.isDirty = s.isDirty = !r || ec(), l = i !== s.isDirty), i = !!V(a.dirtyFields, e), r !== a.isDirty ? a.dirtyFields = Q(m, b) : r ? z(a.dirtyFields, e) : S(a.dirtyFields, e, !0), s.dirtyFields = a.dirtyFields, l = l || (D.dirtyFields || O.dirtyFields) && !r !== i
                                }
                                if (r) {
                                    let t = V(a.touchedFields, e);
                                    t || (S(a.touchedFields, e, r), s.touchedFields = a.touchedFields, l = l || (D.touchedFields || O.touchedFields) && t !== r)
                                }
                                l && n && B.state.next(s)
                            }
                            return l ? s : {}
                        }, J = async e => (W(e, !0), await u.resolver(b, u.context, ((e, t, r, o) => {
                            let u = {};
                            for (let r of e) {
                                let e = V(t, r);
                                e && S(u, r, e._f)
                            }
                            return {
                                criteriaMode: r,
                                names: [...e],
                                fields: u,
                                shouldUseNativeValidation: o
                            }
                        })(e || h.mount, f, u.criteriaMode, u.shouldUseNativeValidation))), ee = async e => {
                            let {
                                errors: t
                            } = await J(e);
                            if (W(e), e) {
                                for (let r of e) {
                                    let e = V(t, r);
                                    e ? h.array.has(r) && n(e) && !Object.keys(e).some(e => !Number.isNaN(Number(e))) ? ed(a.errors, {
                                        [r]: e
                                    }, r) : S(a.errors, r, e) : z(a.errors, r)
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
                                    formValues: b,
                                    formState: a,
                                    name: t,
                                    eventType: r
                                });
                                if (n(o))
                                    for (let e in o) {
                                        let t = o[e];
                                        t && eV(`${eb}.${e}`, {
                                            message: j(t.message) ? t.message : "",
                                            type: t.type || C
                                        })
                                    } else j(o) || !o ? eV(eb, {
                                        message: o || "",
                                        type: C
                                    }) : ek(eb);
                                return o
                            }
                            return !0
                        }, en = async ({
                            fields: t,
                            onlyCheckValid: r,
                            name: o,
                            eventType: n,
                            context: l = {
                                valid: !0,
                                runRootValidation: !1
                            }
                        }) => {
                            if (e.validate && (l.runRootValidation = !0, !await et({
                                    name: o,
                                    eventType: n
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
                                            n = i._f && el(i._f),
                                            s = D.validatingFields || D.isValidating || O.validatingFields || O.isValidating;
                                        n && s && W([t.name], !0);
                                        let d = await ef(i, h.disabled, b, L, u.shouldUseNativeValidation && !r, o);
                                        if (n && s && W([t.name]), d[t.name] && (l.valid = !1, r) || (r || (V(d, t.name) ? o ? ed(a.errors, d, t.name) : S(a.errors, t.name, d[t.name]) : z(a.errors, t.name)), e.shouldUseNativeValidation && d[t.name])) break
                                    }
                                    q(s) || await en({
                                        context: l,
                                        onlyCheckValid: r,
                                        fields: s,
                                        name: o,
                                        eventType: n
                                    })
                                }
                            }
                            return l.valid
                        }, ec = (e, t) => !u.disabled && (e && t && S(b, e, t), !R(g.mount ? b : m, m)), ep = (e, t, r) => _(e, h, {
                            ...g.mount ? b : A(t) ? m : j(e) ? {
                                [e]: t
                            } : t
                        }, r, t), eh = (e, t, r = {}, u = !1, n = !1) => {
                            let l = V(f, e),
                                i = t;
                            if (l) {
                                let r = l._f;
                                r && (r.disabled || S(b, e, X(t, r)), i = K(r.ref) && o(t) ? "" : t, "select-multiple" === r.ref.type ? [...r.ref.options].forEach(e => e.selected = i.includes(e.value)) : r.refs ? "checkbox" === r.ref.type ? r.refs.forEach(e => {
                                    e.defaultChecked && e.disabled || (Array.isArray(i) ? e.checked = !!i.find(t => t === e.value) : e.checked = i === e.value || !!i)
                                }) : r.refs.forEach(e => e.checked = e.value === i) : "file" === r.ref.type ? r.ref.value = "" : (r.ref.value = i, r.ref.type || n || B.state.next({
                                    name: e,
                                    values: u ? b : d(b)
                                })))
                            }(r.shouldDirty || r.shouldTouch) && Z(e, i, r.shouldTouch, r.shouldDirty, !n), r.shouldValidate && eA(e)
                        }, ey = (e, t, o, u = !1, l = !1) => {
                            for (let i in t) {
                                if (!t.hasOwnProperty(i)) return;
                                let a = t[i],
                                    s = e + "." + i,
                                    d = V(f, s);
                                (h.array.has(e) || n(a) || d && !d._f) && !r(a) ? ey(s, a, o, u, l) : eh(s, a, o, u, l)
                            }
                        }, eC = (e, t, r, u, n = !1) => {
                            let l = V(f, e),
                                i = h.array.has(e),
                                s = u ? t : d(t),
                                c = R(V(b, e), s);
                            if (c || S(b, e, s), i) B.array.next({
                                name: e,
                                values: u ? b : d(b)
                            }), (D.isDirty || D.dirtyFields || O.isDirty || O.dirtyFields) && r.shouldDirty && (H(), n || B.state.next({
                                name: e,
                                dirtyFields: a.dirtyFields,
                                isDirty: ec(e, s)
                            }));
                            else {
                                let t = Array.isArray(s) && !s.length || q(s);
                                !l || l._f || o(s) || t ? eh(e, s, r, u, n) : ey(e, s, r, u, n)
                            }
                            if (!c && !n) {
                                let t = ei(e, h),
                                    r = u ? b : d(b);
                                B.state.next({
                                    ...t && a,
                                    name: g.mount || t ? e : void 0,
                                    values: r
                                })
                            }
                        }, ev = (e, t, r = {}) => eC(e, t, r, !1), ex = async o => {
                            g.mount = !0;
                            let n = o.target,
                                i = n.name,
                                s = !0,
                                p = V(f, i),
                                m = e => {
                                    s = Number.isNaN(e) || r(e) && isNaN(e.getTime()) || R(e, V(b, i, e))
                                };
                            if (p) {
                                var C, v, $, A, k;
                                let r, g, _, I = n.type ? er(p._f) : l(o),
                                    M = o.type === c || "focusout" === o.type,
                                    P = !((_ = p._f).mount && (_.required || _.min || _.max || _.maxLength || _.minLength || _.pattern || _.validate)) && !e.validate && !u.resolver && !V(a.errors, i) && !p._f.deps,
                                    G = P || (C = M, v = V(a.touchedFields, i), $ = a.isSubmitted, A = E, !(k = F).isOnAll && (!$ && k.isOnTouch ? !(v || C) : ($ ? A.isOnBlur : k.isOnBlur) ? !C : ($ ? !A.isOnChange : !k.isOnChange) || C)),
                                    K = ei(i, h, M);
                                S(b, i, I), M ? n && n.readOnly || (p._f.onBlur && p._f.onBlur(o), t && t(0)) : p._f.onChange && p._f.onChange(o);
                                let U = Z(i, I, M),
                                    H = !q(U) || K;
                                if (M || B.state.next({
                                        name: i,
                                        type: o.type,
                                        ...x ? {
                                            values: d(b)
                                        } : {}
                                    }), G) return (!P || !a.isValid) && (D.isValid || O.isValid) && ("onBlur" === u.mode ? M && N() : M || N()), H && B.state.next({
                                    name: i,
                                    ...K ? {} : U
                                });
                                if (!u.resolver && e.validate && await et({
                                        name: i,
                                        eventType: o.type
                                    }), !M && K && B.state.next({
                                        ...a
                                    }), u.resolver) {
                                    let {
                                        errors: e
                                    } = await J([i]);
                                    if (W([i]), m(I), !s) {
                                        q(U) || B.state.next(U);
                                        return
                                    }
                                    let t = es(a.errors, f, i),
                                        o = es(e, f, t.name || i);
                                    r = o.error, i = o.name, g = q(e)
                                } else W([i], !0), r = (await ef(p, h.disabled, b, L, u.shouldUseNativeValidation))[i], W([i]), m(I), s && (r ? g = !1 : (D.isValid || O.isValid) && (g = await en({
                                    fields: f,
                                    onlyCheckValid: !0,
                                    name: i,
                                    eventType: o.type
                                })));
                                if (s) {
                                    p._f.deps && (!Array.isArray(p._f.deps) || p._f.deps.length > 0) && eA(p._f.deps);
                                    var T = i,
                                        w = g,
                                        j = r;
                                    let e = V(a.errors, T),
                                        o = (D.isValid || O.isValid) && "boolean" == typeof w && a.isValid !== w;
                                    if (u.delayError && j) {
                                        let e;
                                        e = () => {
                                            S(a.errors, T, j), a.errors = {
                                                ...a.errors
                                            }, B.state.next({
                                                errors: a.errors
                                            })
                                        }, (t = t => {
                                            clearTimeout(y), y = setTimeout(e, t)
                                        })(u.delayError)
                                    } else clearTimeout(y), t = null, j ? S(a.errors, T, j) : z(a.errors, T), a.errors = {
                                        ...a.errors
                                    };
                                    if ((j ? !R(e, j) : e) || !q(U) || o) {
                                        let e = {
                                            ...U,
                                            ...o && "boolean" == typeof w ? {
                                                isValid: w
                                            } : {},
                                            errors: a.errors,
                                            name: T
                                        };
                                        a = {
                                            ...a,
                                            ...e
                                        }, B.state.next(e)
                                    }
                                }
                            }
                        }, e$ = (e, t) => {
                            if (V(a.errors, t) && e.focus) return e.focus(), 1
                        }, eA = async (e, t = {}) => {
                            let r, o, n = P(e);
                            if (u.resolver) {
                                let t = await ee(A(e) ? e : n);
                                r = q(t), o = e ? !n.some(e => V(t, e)) : r
                            } else e ? ((o = (await Promise.all(n.map(async e => {
                                let t = V(f, e);
                                return await en({
                                    fields: t && t._f ? {
                                        [e]: t
                                    } : t,
                                    eventType: p
                                })
                            }))).every(Boolean)) || a.isValid) && N() : o = r = await en({
                                fields: f,
                                name: e,
                                eventType: p
                            });
                            return B.state.next({
                                ...!j(e) || (D.isValid || O.isValid) && r !== a.isValid ? {} : {
                                    name: e
                                },
                                ...u.resolver || !e ? {
                                    isValid: r
                                } : {},
                                errors: a.errors
                            }), t.shouldFocus && !o && ea(f, e$, e ? n : h.mount), o
                        }, eF = (e, t) => ({
                            invalid: !!V((t || a).errors, e),
                            isDirty: !!V((t || a).dirtyFields, e),
                            error: V((t || a).errors, e),
                            isValidating: !!V(a.validatingFields, e),
                            isTouched: !!V((t || a).touchedFields, e)
                        }), ek = e => {
                            let t = e ? P(e) : void 0;
                            null == t || t.forEach(e => z(a.errors, e)), t ? t.forEach(e => {
                                B.state.next({
                                    name: e,
                                    errors: a.errors
                                })
                            }) : B.state.next({
                                errors: {}
                            })
                        }, eV = (e, t, r) => {
                            let o = (V(f, e, {
                                    _f: {}
                                })._f || {}).ref,
                                {
                                    ref: u,
                                    message: n,
                                    type: l,
                                    ...i
                                } = V(a.errors, e) || {};
                            S(a.errors, e, {
                                ...i,
                                ...t,
                                ref: o
                            }), B.state.next({
                                name: e,
                                errors: a.errors,
                                isValid: !1
                            }), r && r.shouldFocus && o && o.focus && o.focus()
                        }, eT = e => {
                            var t;
                            let r = !!(null == (t = e.formState) ? void 0 : t.values);
                            r && x++;
                            let {
                                unsubscribe: o
                            } = B.state.subscribe({
                                next: t => {
                                    let r, o, u;
                                    if (r = e.name, o = t.name, u = e.exact, (!r || !o || r === o || P(r).some(e => e && (u ? e === o || e.startsWith(o + ".") : e.startsWith(o) || o.startsWith(e)))) && ((e, t, r, o) => {
                                            r(e);
                                            let {
                                                name: u,
                                                ...n
                                            } = e, l = Object.keys(n);
                                            return !l.length || o && l.length >= Object.keys(t).length || l.find(e => t[e] === (!o || "all"))
                                        })(t, e.formState || D, eB, e.reRenderRoot)) {
                                        let r = {
                                            ...b
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
                            let u = !1;
                            return () => {
                                u || (u = !0, x--, o())
                            }
                        }, eS = (e, t = {}) => {
                            for (let r of e ? P(e) : h.mount) h.mount.delete(r), h.array.delete(r), t.keepValue || (z(f, r), z(b, r)), t.keepError || z(a.errors, r), t.keepDirty || z(a.dirtyFields, r), t.keepTouched || z(a.touchedFields, r), t.keepIsValidating || z(a.validatingFields, r), u.shouldUnregister || t.keepDefaultValue || z(m, r);
                            B.state.next({
                                values: d(b)
                            }), B.state.next({
                                ...a,
                                ...!t.keepDirty ? {} : {
                                    isDirty: ec()
                                }
                            }), t.keepIsValid || N()
                        }, eE = ({
                            disabled: e,
                            name: t
                        }) => {
                            if ("boolean" == typeof e && g.mount || e || h.disabled.has(t)) {
                                let r = h.disabled.has(t);
                                e ? h.disabled.add(t) : h.disabled.delete(t), !!e !== r && g.mount && !g.action && N()
                            }
                        }, ew = (e, t = {}) => {
                            let r = V(f, e),
                                o = "boolean" == typeof t.disabled || "boolean" == typeof u.disabled,
                                n = !h.registerName.has(e) && r && r._f && !r._f.mount;
                            return (S(f, e, {
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
                            }), h.mount.add(e), r && !n) ? eE({
                                disabled: "boolean" == typeof t.disabled ? t.disabled : u.disabled,
                                name: e
                            }) : Y(e, !0, t.value), {
                                ...o ? {
                                    disabled: t.disabled || u.disabled
                                } : {},
                                ...u.progressive ? {
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
                                        let u;
                                        h.registerName.add(e), ew(e, t), h.registerName.delete(e), r = V(f, e);
                                        let n = A(o.value) && o.querySelectorAll && o.querySelectorAll("input,select,textarea")[0] || o,
                                            l = "radio" === (u = n).type || "checkbox" === u.type,
                                            i = r._f.refs || [];
                                        (l ? i.find(e => e === n) : n === r._f.ref) || (S(f, e, {
                                            _f: {
                                                ...r._f,
                                                ...l ? {
                                                    refs: [...i.filter(U), n, ...Array.isArray(V(m, e)) ? [{}] : []],
                                                    ref: {
                                                        type: n.type,
                                                        name: e
                                                    }
                                                } : {
                                                    ref: n
                                                }
                                            }
                                        }), Y(e, !1, void 0, n))
                                    } else(r = V(f, e, {}))._f && (r._f.mount = !1), (u.shouldUnregister || t.shouldUnregister) && !(i(h.array, e) && g.action) && h.unMount.add(e)
                                }
                            }
                        }, eD = () => u.shouldFocusError && !u.shouldUseNativeValidation && ea(f, e$, h.mount), ej = (e, t) => async r => {
                            let o;
                            r && (r.preventDefault && r.preventDefault(), r.persist && r.persist());
                            let n = d(b);
                            if (B.state.next({
                                    isSubmitting: !0
                                }), u.resolver) {
                                let {
                                    errors: e,
                                    values: t
                                } = await J();
                                W(), a.errors = e, n = d(t)
                            } else await en({
                                fields: f,
                                eventType: "submit"
                            });
                            if (h.disabled.size)
                                for (let e of h.disabled) z(n, e);
                            if (z(a.errors, v), q(a.errors)) {
                                B.state.next({
                                    errors: {}
                                });
                                try {
                                    await e(n, r)
                                } catch (e) {
                                    o = e
                                }
                            } else t && await t({
                                ...a.errors
                            }, r), eD(), setTimeout(eD);
                            if (B.state.next({
                                    isSubmitted: !0,
                                    isSubmitting: !1,
                                    isSubmitSuccessful: q(a.errors) && !o,
                                    submitCount: a.submitCount + 1,
                                    errors: a.errors
                                }), o) throw o
                        }, e_ = (e, t = {}) => {
                            let r = e ? d(e) : m,
                                o = d(r),
                                n = q(e);
                            if (t.keepDefaultValues || (m = r), !t.keepValues) {
                                if (t.keepDirtyValues)
                                    for (let e of Array.from(new Set([...h.mount, ...Object.keys(Q(m, b))]))) {
                                        let t = V(a.dirtyFields, e),
                                            r = V(b, e),
                                            u = V(o, e);
                                        t && !A(r) ? S(o, e, r) : t || A(u) || ev(e, u)
                                    } else {
                                        if (s && A(e))
                                            for (let e of h.mount) {
                                                let t = V(f, e);
                                                if (t && t._f) {
                                                    let e = Array.isArray(t._f.refs) ? t._f.refs[0] : t._f.ref;
                                                    if (K(e)) {
                                                        let t = e.closest("form");
                                                        if (t) {
                                                            t.reset();
                                                            break
                                                        }
                                                    }
                                                }
                                            }
                                        if (t.keepFieldsRef)
                                            for (let e of h.mount) ev(e, V(o, e));
                                        else f = {}
                                    }
                                if (u.shouldUnregister) {
                                    if (b = t.keepDefaultValues ? d(m) : {}, t.keepFieldsRef)
                                        for (let e of h.mount) S(b, e, V(o, e))
                                } else b = d(o);
                                B.array.next({
                                    values: {
                                        ...o
                                    }
                                }), B.state.next({
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
                            }, g.mount = !D.isValid || !!t.keepIsValid || !!t.keepDirtyValues || !u.shouldUnregister && !q(o), g.watch = !!u.shouldUnregister, g.keepIsValid = !!t.keepIsValid, g.action = !1, t.keepErrors || (a.errors = {}), B.state.next({
                                submitCount: t.keepSubmitCount ? a.submitCount : 0,
                                isDirty: !n && (t.keepDirty ? a.isDirty : t.keepValues ? ec() : !!(t.keepDefaultValues && !R(e, m))),
                                isSubmitted: !!t.keepIsSubmitted && a.isSubmitted,
                                dirtyFields: n ? {} : t.keepDirtyValues ? t.keepDefaultValues && b ? Q(m, b) : a.dirtyFields : t.keepDefaultValues && e ? Q(m, e) : t.keepDirty ? a.dirtyFields : {},
                                touchedFields: t.keepTouched ? a.touchedFields : {},
                                errors: t.keepErrors ? a.errors : {},
                                isSubmitSuccessful: !!t.keepIsSubmitSuccessful && a.isSubmitSuccessful,
                                isSubmitting: !1,
                                defaultValues: m
                            })
                        }, eO = (e, t) => e_(T(e) ? e(b) : e, {
                            ...u.resetOptions,
                            ...t
                        }), eB = e => {
                            let {
                                name: t,
                                type: r,
                                values: o,
                                ...u
                            } = e;
                            a = {
                                ...a,
                                ...u
                            }
                        }, eR = {
                            control: {
                                register: ew,
                                unregister: eS,
                                getFieldState: eF,
                                handleSubmit: ej,
                                setError: eV,
                                _subscribe: eT,
                                _runSchema: J,
                                _updateIsValidating: W,
                                _focusError: eD,
                                _getWatch: ep,
                                _getDirty: ec,
                                _setValid: N,
                                _setFieldArray: (e, t = [], r, o, n = !0, l = !0) => {
                                    if (o && r && !u.disabled) {
                                        if (g.action = !0, l && Array.isArray(V(f, e))) {
                                            let t = r(V(f, e), o.argA, o.argB);
                                            n && S(f, e, t)
                                        }
                                        if (l && Array.isArray(V(a.errors, e))) {
                                            let t, u = r(V(a.errors, e), o.argA, o.argB);
                                            n && S(a.errors, e, u), M(V(t = a.errors, e)).length || z(t, e)
                                        }
                                        if ((D.touchedFields || O.touchedFields) && l && Array.isArray(V(a.touchedFields, e))) {
                                            let t = r(V(a.touchedFields, e), o.argA, o.argB);
                                            n && S(a.touchedFields, e, t)
                                        }(D.dirtyFields || O.dirtyFields) && H(), B.state.next({
                                            name: e,
                                            isDirty: ec(e, t),
                                            dirtyFields: a.dirtyFields,
                                            errors: a.errors,
                                            isValid: a.isValid
                                        })
                                    } else S(b, e, t)
                                },
                                _setDisabledField: eE,
                                _setErrors: e => {
                                    a.errors = e, B.state.next({
                                        errors: a.errors,
                                        isValid: !1
                                    })
                                },
                                _getFieldArray: e => M(V(g.mount ? b : m, e, u.shouldUnregister ? V(m, e, []) : [])),
                                _reset: e_,
                                _resetDefaultValues: () => T(u.defaultValues) && u.defaultValues().then(e => {
                                    eO(e, u.resetOptions), B.state.next({
                                        isLoading: !1
                                    })
                                }),
                                _removeUnmounted: () => {
                                    for (let e of h.unMount) {
                                        let t = V(f, e);
                                        t && (t._f.refs ? t._f.refs.every(e => !U(e)) : !U(t._f.ref)) && eS(e)
                                    }
                                    h.unMount = new Set
                                },
                                _disableForm: e => {
                                    "boolean" == typeof e && (B.state.next({
                                        disabled: e
                                    }), ea(f, (t, r) => {
                                        let o = V(f, r);
                                        o && (t.disabled = o._f.disabled || e, Array.isArray(o._f.refs) && o._f.refs.forEach(t => {
                                            t.disabled = o._f.disabled || e
                                        }))
                                    }, 0, !1))
                                },
                                _subjects: B,
                                _proxyFormState: D,
                                get _fields() {
                                    return f
                                },
                                get _formValues() {
                                    return b
                                },
                                get _state() {
                                    return g
                                },
                                set _state(value) {
                                    g = value
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
                                    return u
                                },
                                set _options(value) {
                                    F = eu((u = {
                                        ...u,
                                        ...value
                                    }).mode), E = eu(u.reValidateMode)
                                }
                            },
                            subscribe: e => (g.mount = !0, O = {
                                ...O,
                                ...e.formState
                            }, eT({
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
                                if (T(e)) {
                                    x++;
                                    let {
                                        unsubscribe: r
                                    } = B.state.subscribe({
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
                            setValue: ev,
                            setValues: (e, t = {}) => {
                                let r = T(e) ? e(b) : e;
                                if (!R(b, r)) {
                                    b = {
                                        ...b,
                                        ...r
                                    };
                                    let e = I(r);
                                    for (let r of h.mount) r in e && eC(r, e[r], t, !0, !0);
                                    B.state.next({
                                        ...a,
                                        name: void 0,
                                        type: void 0,
                                        ...x ? {
                                            values: b
                                        } : {}
                                    }), t.shouldValidate && N()
                                }
                            },
                            getValues: (e, t) => {
                                let r = {
                                    ...g.mount ? b : m
                                };
                                return t && (r = function e(t, r) {
                                    let o = {};
                                    for (let u in t)
                                        if (t.hasOwnProperty(u)) {
                                            let l = t[u],
                                                i = r[u];
                                            if (l && n(l) && i) {
                                                let t = e(l, i);
                                                n(t) && (o[u] = t)
                                            } else t[u] && (o[u] = i)
                                        } return o
                                }(t.dirtyFields ? a.dirtyFields : a.touchedFields, r)), A(e) ? r : j(e) ? V(r, e) : e.map(e => V(r, e))
                            },
                            reset: eO,
                            resetField: (e, t = {}) => {
                                V(f, e) && (A(t.defaultValue) ? ev(e, d(V(m, e))) : (ev(e, t.defaultValue), S(m, e, d(t.defaultValue))), t.keepTouched || z(a.touchedFields, e), t.keepDirty || (z(a.dirtyFields, e), a.isDirty = t.defaultValue ? ec(e, d(V(m, e))) : ec()), !t.keepError && (z(a.errors, e), D.isValid && N()), B.state.next({
                                    ...a
                                }))
                            },
                            resetDefaultValues: (e, t = {}) => {
                                if (m = d(e), !t.keepDirty) {
                                    let e = Q(m, b);
                                    a.dirtyFields = e, a.isDirty = !q(e)
                                }
                                t.keepIsValid || N(), B.state.next({
                                    ...a,
                                    defaultValues: m
                                })
                            },
                            clearErrors: ek,
                            unregister: eS,
                            setError: eV,
                            setFocus: (e, t = {}) => {
                                let r = V(f, e),
                                    o = r && r._f;
                                if (o) {
                                    let e = o.refs ? o.refs[0] : o.ref;
                                    e.focus && setTimeout(() => {
                                        e.focus(), t.shouldSelect && T(e.select) && e.select()
                                    })
                                }
                            },
                            getFieldState: eF
                        };
                    return {
                        ...eR,
                        formControl: eR
                    }
                }(e);
                u.current = {
                    ...a,
                    formState: m
                }
            } let g = u.current.control;
        return g._options = e, D(() => {
            let e = g._subscribe({
                formState: g._proxyFormState,
                callback: () => b({
                    ...g._formState,
                    defaultValues: g._defaultValues
                }),
                reRenderRoot: !0
            });
            return b(e => ({
                ...e,
                isReady: !0
            })), g._formState.isReady = !0, e
        }, [g]), t.default.useEffect(() => g._disableForm(e.disabled), [g, e.disabled]), t.default.useEffect(() => {
            e.mode && (g._options.mode = e.mode), e.reValidateMode && (g._options.reValidateMode = e.reValidateMode)
        }, [g, e.mode, e.reValidateMode]), t.default.useEffect(() => {
            e.errors && (g._setErrors(e.errors), g._focusError())
        }, [g, e.errors]), t.default.useEffect(() => {
            e.shouldUnregister && g._subjects.state.next({
                values: g._getWatch()
            })
        }, [g, e.shouldUnregister]), t.default.useEffect(() => {
            if (g._proxyFormState.isDirty) {
                let e = g._getDirty();
                e !== m.isDirty && g._subjects.state.next({
                    isDirty: e
                })
            }
        }, [g, m.isDirty]), t.default.useEffect(() => {
            var t;
            e.values && !R(e.values, a.current) ? (g._reset(e.values, {
                keepFieldsRef: !0,
                ...g._options.resetOptions
            }), (null == (t = g._options.resetOptions) ? void 0 : t.keepIsValid) || g._setValid(), a.current = e.values, b(e => ({
                ...e
            }))) : g._resetDefaultValues()
        }, [g, e.values]), t.default.useEffect(() => {
            g._state.mount || (g._setValid(), g._state.mount = !0), g._state.watch && (g._state.watch = !1, g._subjects.state.next({
                ...g._formState
            })), g._removeUnmounted()
        }), u.current.formState = t.default.useMemo(() => w(m, g), [g, m]), u.current
    }, "useWatch", 0, L])
}, 222061, 272351, 497492, 396241, 829483, 938822, 86703, 908390, 662380, 179695, e => {
    "use strict";
    var t, r, o, u = e.i(14666),
        n = e.i(499531),
        l = e.i(968651),
        i = e.i(620174),
        a = e.i(466673);

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
            placeholder: b,
            disabled: g,
            defaultValue: h,
            isRequired: y,
            requiredText: C = "Required",
            control: v,
            visibleConditions: x,
            getValues: $,
            visibleCountry: A,
            isNumericalOnly: F,
            restrictedDomainsToggle: k,
            restrictedDomains: V,
            restrictedDomainErrorText: T
        } = e, S = {
            label: o,
            requiredText: C,
            className: m,
            placeholder: b,
            disabled: g,
            isRequired: y,
            for: r,
            name: r,
            id: r
        }, E = (0, a.useWatch)({
            control: v,
            name: x?.map(({
                fieldId: e
            }) => e) || []
        }), w = s(x, E, $);
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
                        ...F && {
                            pattern: /^(\+|[0-9])[0-9-]*$/
                        }
                    },
                    render: ({
                        field: e,
                        fieldState: t
                    }) => (0, u.jsx)(i.default, {
                        ...S,
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
                        ...S,
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
                        ...k && V && {
                            validate: e => !V.split(",").map(e => e.trim()).filter(e => e.length > 0).find(t => e.toLowerCase().includes(t.toLowerCase())) || T || "Input contains restricted domain"
                        }
                    },
                    name: r,
                    control: e.control,
                    render: ({
                        field: e,
                        fieldState: t
                    }) => (0, u.jsx)(i.default, {
                        ...S,
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
        b = e.i(722978),
        g = e.i(458229),
        h = e.i(685740),
        y = e.i(590553),
        C = e.i(147333),
        v = e.i(838031);
    let x = (0, n.forwardRef)(function(e, t) {
        let {
            children: r,
            isIndeterminate: o = !1,
            isDisabled: l = !1,
            isSelected: i = !1,
            isRequired: a = !1,
            hasError: s = !1,
            requiredText: d = "Required"
        } = e, c = (0, y.useToggleState)(e), [p, f] = (0, n.useState)(o), m = (0, v.useObjectRef)(t), {
            inputProps: x
        } = (0, h.useCheckbox)(e, c, m), {
            isFocusVisible: $,
            focusProps: A
        } = (0, C.useFocusRing)();
        (0, n.useEffect)(() => {
            i && f(!1)
        }, [i]);
        let F = (0, b.default)("group flex text-small relative", {
                "pointer-events-none": l
            }, {
                "hover:cursor-pointer": !l
            }),
            k = (0, b.default)({
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
            V = (0, b.default)({
                "fill-white": i && !l,
                "fill-gray-400 dark:!fill-gray-500": l
            }),
            T = (0, b.default)({
                "fill-white": !l
            }, {
                "fill-gray-400 dark:fill-gray-500": l
            }),
            S = (0, b.default)("ml-1 text-sm", {
                "text-gray-400 dark:text-gray-400": i
            }, {
                "text-gray-400": s && !i
            }, {
                "text-gray-400": !s && !i
            });
        return (0, u.jsxs)("label", {
            className: F,
            children: [(0, u.jsx)(g.VisuallyHidden, {
                children: (0, u.jsx)("input", {
                    ...x,
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
                    className: k
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
                    className: T
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
                    className: S,
                    children: d
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
                checkboxPlainTextLabel: d,
                countryRestriction: b,
                visibleCountry: g
            } = e;
        return b && b?.length > 0 && !e.countryCode || b?.find(t => t.countryCode === e.countryCode) || !c(g, e.countryCode) ? null : (0, u.jsx)(a.Controller, {
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
                children: [!t.some(t => t === e.formFieldId) && (0, u.jsx)(x, {
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
                    children: (0, u.jsxs)($.default, {
                        className: "font-medium [a]:underline",
                        children: [s && (0, u.jsx)(m.PortableText, {
                            value: s,
                            components: s
                        }), d && d?.checkboxLabelText]
                    })
                }), e.chained && e.chained.map((t, d) => {
                    if (t.value === e.countryCode && t.dependant === e.formFieldId) return (0, u.jsx)(x, {
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
                        children: (0, u.jsx)($.default, {
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
    var A = e.i(481392),
        F = e.i(248708),
        k = e.i(666747),
        V = e.i(476090),
        T = e.i(664106),
        S = e.i(776050),
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
        B = e.i(964059),
        R = e.i(869049),
        L = e.i(823512),
        I = e.i(270170),
        N = e.i(501427),
        M = e.i(629080),
        P = e.i(97584),
        G = e.i(660063),
        q = e.i(117696),
        K = e.i(600939),
        U = e.i(419685),
        z = e.i(511607),
        W = e.i(251635);

    function H(e, t) {
        var r, o, u;
        let l, i, a, {
                buttonRef: s,
                popoverRef: d,
                inputRef: c,
                listBoxRef: p,
                keyboardDelegate: f,
                layoutDelegate: m,
                shouldFocusWrap: b,
                isReadOnly: g,
                isDisabled: h
            } = e,
            y = (0, n.useRef)(null);
        s = s ?? y;
        let C = (0, N.useLocalizedStringFormatter)((r = D) && r.__esModule ? r.default : r, "@react-aria/combobox"),
            {
                menuTriggerProps: v,
                menuProps: x
            } = (0, M.useMenuTrigger)({
                type: "listbox",
                isDisabled: h || g
            }, t, s);
        E.listData.set(t, {
            id: x.id
        });
        let {
            collection: $
        } = t, {
            disabledKeys: A
        } = t.selectionManager, H = (0, n.useMemo)(() => f || new(0, _.ListKeyboardDelegate)({
            collection: $,
            disabledKeys: A,
            ref: p,
            layoutDelegate: m
        }), [f, m, $, A, p]), {
            collectionProps: Q
        } = (0, G.useSelectableCollection)({
            selectionManager: t.selectionManager,
            keyboardDelegate: H,
            disallowTypeAhead: !0,
            disallowEmptySelection: !0,
            shouldFocusWrap: b,
            ref: c,
            isVirtualized: !0
        }), Y = (0, P.useRouter)(), Z = function(e = []) {
            let t = (0, L.useId)(),
                [r, o] = (0, n.useState)(!0),
                [u, l] = (0, n.useState)(e);
            return u.some((t, r) => !Object.is(t, e[r])) && (o(!0), l(e)), (0, n.useEffect)(() => {
                r && !document.getElementById(t) && o(!1)
            }, [t, r, u]), r ? t : void 0
        }([t.selectionManager.selectedKeys, t.selectionManager.selectionMode]), {
            isInvalid: J,
            validationErrors: X,
            validationDetails: ee
        } = t.displayValidation, {
            labelProps: et,
            inputProps: er,
            descriptionProps: eo,
            errorMessageProps: eu
        } = (0, q.useTextField)({
            ...e,
            isRequired: "multiple" === e.selectionMode ? e.isRequired && t.selectionManager.isEmpty : e.isRequired,
            onChange: t.setInputValue,
            onKeyDown: g ? e.onKeyDown : (0, V.chain)(t.isOpen && Q.onKeyDown, r => {
                if (!r.nativeEvent.isComposing) switch (r.key) {
                    case "Enter":
                    case "Tab":
                        if (t.isOpen && "Enter" === r.key && r.preventDefault(), t.isOpen && p.current && null != t.selectionManager.focusedKey) {
                            let e = t.collection.getItem(t.selectionManager.focusedKey);
                            if (e?.props.href) {
                                let o = p.current.querySelector(`[data-key="${CSS.escape(t.selectionManager.focusedKey.toString())}"]`);
                                "Enter" === r.key && o instanceof HTMLAnchorElement && Y.open(o, r, e.props.href, e.props.routerOptions), t.close();
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
                    u = (0, S.nodeContains)(d.current, r.relatedTarget);
                o || u || (e.onBlur && e.onBlur(r), t.setFocused(!1))
            },
            value: t.inputValue,
            defaultValue: t.defaultInputValue,
            onFocus: r => {
                t.isFocused || (e.onFocus && e.onFocus(r), t.setFocused(!0))
            },
            autoComplete: "off",
            validate: void 0,
            [W.privateValidationStateProp]: t,
            "aria-describedby": [Z, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }, c);
        (0, R.useFormReset)(c, t.defaultValue, t.setValue);
        let en = (0, I.useLabels)({
                id: v.id,
                "aria-label": C.format("buttonLabel"),
                "aria-labelledby": e["aria-labelledby"] || et.id
            }),
            el = (0, I.useLabels)({
                id: x.id,
                "aria-label": C.format("listboxLabel"),
                "aria-labelledby": e["aria-labelledby"] || et.id
            }),
            ei = (0, n.useRef)(0),
            ea = null != t.selectionManager.focusedKey && t.isOpen ? t.collection.getItem(t.selectionManager.focusedKey) : void 0,
            es = ea?.parentKey ?? null,
            ed = t.selectionManager.focusedKey ?? null,
            ec = (0, n.useRef)(es),
            ep = (0, n.useRef)(ed);
        (0, n.useEffect)(() => {
            if ((0, j.isAppleDevice)() && null != ea && null != ed && ed !== ep.current) {
                let e = t.selectionManager.isSelected(ed),
                    r = null != es ? t.collection.getItem(es) : null,
                    o = r?.["aria-label"] || ("string" == typeof r?.rendered ? r.rendered : "") || "",
                    u = C.format("focusAnnouncement", {
                        isGroupChange: (r && es !== ec.current) ?? !1,
                        groupTitle: o,
                        groupCount: r ? [...(0, U.getChildNodes)(r, t.collection)].length : 0,
                        optionText: ea["aria-label"] || ea.textValue || "",
                        isSelected: e
                    });
                (0, F.announce)(u)
            }
            ec.current = es, ep.current = ed
        });
        let ef = (0, z.getItemCount)(t.collection),
            em = (0, n.useRef)(ef),
            eb = (0, n.useRef)(t.isOpen);
        (0, n.useEffect)(() => {
            let e = t.isOpen !== eb.current && (null == t.selectionManager.focusedKey || (0, j.isAppleDevice)());
            if (t.isOpen && (e || ef !== em.current)) {
                let e = C.format("countAnnouncement", {
                    optionCount: ef
                });
                (0, F.announce)(e)
            }
            em.current = ef, eb.current = t.isOpen
        });
        let eg = (0, n.useRef)(t.selectedKey);
        return (0, n.useEffect)(() => {
            if ((0, j.isAppleDevice)() && t.isFocused && t.selectedItem && t.selectedKey !== eg.current) {
                let e = t.selectedItem["aria-label"] || t.selectedItem.textValue || "",
                    r = C.format("selectedAnnouncement", {
                        optionText: e
                    });
                (0, F.announce)(r)
            }
            eg.current = t.selectedKey
        }), (0, n.useEffect)(() => {
            if (t.isOpen) return (0, k.ariaHideOutside)([c.current, d.current].filter(e => null != e))
        }, [t.isOpen, c, d]), o = () => {
            !ea && c.current && (0, S.getActiveElement)((0, w.getOwnerDocument)(c.current)) === c.current && (0, T.dispatchVirtualFocus)(c.current, null)
        }, u = [ea], l = (0, n.useRef)(!0), i = (0, n.useRef)(null), a = (0, K.useEffectEvent)(o), (0, n.useEffect)(() => (l.current = !0, () => {
            l.current = !1
        }), []), (0, n.useEffect)(() => {
            let e = i.current;
            l.current ? l.current = !1 : (!e || u.some((t, r) => !Object.is(t, e[r]))) && a(), i.current = u
        }, u), (0, B.useEvent)(p, "react-aria-item-action", t.isOpen ? () => {
            t.close()
        } : void 0), {
            labelProps: et,
            buttonProps: {
                ...v,
                ...en,
                excludeFromTabOrder: !0,
                preventFocusOnPress: !0,
                onPress: e => {
                    "touch" === e.pointerType && (c.current?.focus(), t.toggle(null, "manual"))
                },
                onPressStart: e => {
                    "touch" !== e.pointerType && (c.current?.focus(), t.toggle("keyboard" === e.pointerType || "virtual" === e.pointerType ? "first" : null, "manual"))
                },
                isDisabled: h || g
            },
            inputProps: (0, O.mergeProps)(er, {
                role: "combobox",
                "aria-expanded": v["aria-expanded"],
                "aria-controls": t.isOpen ? x.id : void 0,
                "aria-autocomplete": "list",
                "aria-activedescendant": ea ? (0, E.getItemId)(t, ea.key) : void 0,
                onTouchEnd: e => {
                    if (h || g) return;
                    if (e.timeStamp - ei.current < 500) {
                        e.preventDefault(), c.current?.focus();
                        return
                    }
                    let r = (0, S.getEventTarget)(e).getBoundingClientRect(),
                        o = e.changedTouches[0],
                        u = Math.ceil(r.left + .5 * r.width),
                        n = Math.ceil(r.top + .5 * r.height);
                    o.clientX === u && o.clientY === n && (e.preventDefault(), c.current?.focus(), t.toggle(null, "manual"), ei.current = e.timeStamp)
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
                id: Z
            },
            descriptionProps: eo,
            errorMessageProps: eu,
            isInvalid: J,
            validationErrors: X,
            validationDetails: ee
        }
    }
    e.s(["useComboBox", 0, H], 938822);
    var Q = e.i(702985);

    function Y(e) {
        let t = (0, Q.useCollator)({
                usage: "search",
                ...e
            }),
            r = (0, n.useCallback)((e, r) => 0 === r.length || (e = e.normalize("NFC"), r = r.normalize("NFC"), 0 === t.compare(e.slice(0, r.length), r)), [t]),
            o = (0, n.useCallback)((e, r) => 0 === r.length || (e = e.normalize("NFC"), r = r.normalize("NFC"), 0 === t.compare(e.slice(-r.length), r)), [t]),
            u = (0, n.useCallback)((e, r) => {
                if (0 === r.length) return !0;
                e = e.normalize("NFC");
                let o = 0,
                    u = (r = r.normalize("NFC")).length;
                for (; o + u <= e.length; o++) {
                    let n = e.slice(o, o + u);
                    if (0 === t.compare(r, n)) return !0
                }
                return !1
            }, [t]);
        return (0, n.useMemo)(() => ({
            startsWith: r,
            endsWith: o,
            contains: u
        }), [r, o, u])
    }
    e.s(["useFilter", 0, Y], 86703);
    var Z = e.i(603360),
        J = e.i(997007),
        X = e.i(512985),
        ee = e.i(803258);

    function et(e) {
        let {
            defaultFilter: t,
            menuTrigger: r = "input",
            allowsEmptyCollection: o = !1,
            allowsCustomValue: u,
            shouldCloseOnBlur: l = !0,
            selectionMode: i = "single"
        } = e, [a, s] = (0, n.useState)(!1), [d, c] = (0, n.useState)(!1), [p, f] = (0, n.useState)(null), m = (0, n.useMemo)(() => void 0 !== e.defaultValue ? e.defaultValue : "single" === i ? e.defaultSelectedKey ?? null : [], [e.defaultValue, e.defaultSelectedKey, i]), b = (0, n.useMemo)(() => void 0 !== e.value ? e.value : "single" === i ? e.selectedKey : void 0, [e.value, e.selectedKey, i]), [g, h] = (0, ee.useControlledState)(b, m, e.onChange), y = "single" === i && Array.isArray(g) ? g[0] : g, C = t => {
            if ("single" === i) {
                let r = Array.isArray(t) ? t[0] ?? null : t;
                h(r), r !== y && e.onSelectionChange?.(r)
            } else {
                let e = [];
                Array.isArray(t) ? e = t : null != t && (e = [t]), h(e)
            }
        }, {
            collection: v,
            selectionManager: x,
            disabledKeys: $
        } = (0, J.useListState)({
            ...e,
            items: e.items ?? e.defaultItems,
            selectionMode: i,
            disallowEmptySelection: "single" === i,
            allowDuplicateSelectionEvents: !0,
            selectedKeys: (0, n.useMemo)(() => (function(e) {
                if (void 0 !== e) return null === e ? [] : Array.isArray(e) ? e : [e]
            })(y), [y]),
            onSelectionChange: t => {
                if ("all" !== t)
                    if ("single" === i) {
                        let r = t.values().next().value ?? null;
                        r === y ? (e.onSelectionChange?.(r), M(), L()) : C(r)
                    } else C([...t])
            }
        }), A = "single" === i ? x.firstSelectedKey : null, F = (0, n.useMemo)(() => [...x.selectedKeys].map(e => v.getItem(e)).filter(e => null != e), [x.selectedKeys, v]), [k, V] = (0, ee.useControlledState)(e.inputValue, er(e.defaultInputValue, A, v) || "", e.onInputChange), [T] = (0, n.useState)(y), [S] = (0, n.useState)(k), E = (0, n.useMemo)(() => {
            var r, o, u;
            return null == e.items && t ? (r = v, o = k, u = t, new(0, Z.ListCollection)(function e(t, r, o, u) {
                let n = [];
                for (let l of r)
                    if ("section" === l.type && l.hasChildNodes) {
                        let r = e(t, (0, U.getChildNodes)(l, t), o, u);
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
            }(r, r, o, u))) : v
        }, [v, k, t, e.items]), [w, D] = (0, n.useState)(E), j = (0, n.useRef)("focus"), _ = (0, X.useOverlayTriggerState)({
            ...e,
            onOpenChange: t => {
                e.onOpenChange && e.onOpenChange(t, t ? j.current : void 0), x.setFocused(t), t || x.setFocusedKey(null)
            },
            isOpen: void 0,
            defaultOpen: void 0
        }), O = (t = null, u) => {
            let n = "manual" === u || "focus" === u && "focus" === r;
            (o || E.size > 0 || n && v.size > 0 || e.items) && (n && !_.isOpen && void 0 === e.items && s(!0), j.current = u, f(t), _.open())
        }, B = (0, n.useCallback)(() => {
            D(a ? v : E)
        }, [a, v, E]), R = (0, n.useCallback)((e = null) => {
            _.isOpen && B(), f(e), _.toggle()
        }, [_, B]), L = (0, n.useCallback)(() => {
            _.isOpen && (B(), _.close())
        }, [_, B]), [I, N] = (0, n.useState)(k), M = () => {
            let e = null != A ? v.getItem(A)?.textValue ?? "" : "";
            N(e), V(e)
        }, P = (0, n.useRef)(y), G = (0, n.useRef)(null != A ? v.getItem(A)?.textValue ?? "" : "");
        (0, n.useEffect)(() => {
            d && (E.size > 0 || o) && !_.isOpen && k !== I && "manual" !== r && O(null, "input"), a || o || !_.isOpen || 0 !== E.size || L(), null != y && y !== P.current && "single" === i && L(), k !== I && (x.setFocusedKey(null), s(!1), "single" === i && "" === k && (void 0 === e.inputValue || void 0 === b) && C(null)), y !== P.current && (void 0 === e.inputValue || void 0 === b) ? M() : I !== k && N(k);
            let t = null != A ? v.getItem(A)?.textValue ?? "" : "";
            d || null == A || void 0 !== e.inputValue || A !== P.current || G.current === t || (N(t), V(t)), P.current = y, G.current = t
        });
        let q = (0, W.useFormValidationState)({
                ...e,
                value: (0, n.useMemo)(() => Array.isArray(y) && 0 === y.length ? null : {
                    inputValue: k,
                    value: y,
                    selectedKey: A
                }, [k, A, y])
            }),
            K = () => {
                if ("multiple" === i) {
                    N(k), L();
                    return
                }
                P.current = null, C(null), L()
            },
            z = (t = !1) => {
                if (void 0 !== b && void 0 !== e.inputValue) {
                    let r = null != A ? v.getItem(A)?.textValue ?? "" : "";
                    (t || "multiple" === i || k !== r) && (e.onSelectionChange?.(A), e.onChange?.(y)), N(r), L()
                } else M(), L()
            },
            H = () => {
                u ? k === (null != A ? v.getItem(A)?.textValue ?? "" : "") ? z() : K() : z()
            },
            Q = (0, n.useRef)([k, y]),
            Y = (0, n.useMemo)(() => _.isOpen ? a ? v : E : w, [_.isOpen, v, E, a, w]),
            et = e.defaultSelectedKey ?? ("single" === i ? T : null);
        return {
            ...q,
            ..._,
            focusStrategy: p,
            toggle: (t = null, u) => {
                let n = "manual" === u || "focus" === u && "focus" === r;
                (o || E.size > 0 || n && v.size > 0 || e.items || _.isOpen) && (n && !_.isOpen && void 0 === e.items && s(!0), _.isOpen || (j.current = u), R(t))
            },
            open: O,
            close: H,
            selectionManager: x,
            value: y,
            defaultValue: m ?? T,
            setValue: C,
            selectedKey: A,
            selectedItems: F,
            defaultSelectedKey: et,
            setSelectedKey: C,
            disabledKeys: $,
            isFocused: d,
            setFocused: t => {
                t ? (Q.current = [k, y], "focus" !== r || e.isReadOnly || O(null, "focus")) : (l && H(), (k !== Q.current[0] || y !== Q.current[1]) && q.commitValidation()), c(t)
            },
            selectedItem: F[0] ?? null,
            collection: Y,
            inputValue: k,
            defaultInputValue: er(e.defaultInputValue, et, v) ?? S,
            setInputValue: V,
            commit: () => {
                _.isOpen && null != x.focusedKey ? x.isSelected(x.focusedKey) && "single" === i ? z(!0) : x.select(x.focusedKey) : H()
            },
            revert: () => {
                u && null == A ? K() : z()
            }
        }
    }

    function er(e, t, r) {
        return null == e && null != t ? r.getItem(t)?.textValue ?? "" : e
    }
    e.s(["useComboBoxState", 0, et], 908390);
    var eo = e.i(611017),
        eu = e.i(661013),
        en = e.i(441737),
        el = e.i(672451),
        ei = e.i(419476),
        ea = e.i(675815);
    let es = e => {
        let t = n.default.useRef(null),
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
        return (0, u.jsx)(ea.FocusScope, {
            restoreFocus: !0,
            children: (0, u.jsxs)("div", {
                className: "absolute z-10 mt-[6px] w-full rounded-xl bg-white drop-shadow-xl",
                ...a,
                ref: r,
                children: [i, (0, u.jsx)(el.DismissButton, {
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
            let r = (0, n.useRef)(null),
                {
                    optionProps: o,
                    isSelected: l,
                    isFocused: i
                } = (0, ec.useOption)({
                    key: e.key
                }, t, r),
                a = (0, b.default)("m-1 select-none rounded-lg bg-gray-200 pb-1 pl-2 pr-2 pt-1 text-sm font-semibold text-black cursor-pointer", {
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
        ef = e => {
            let t = n.default.useRef(null),
                {
                    listBoxRef: r = t,
                    state: o
                } = e,
                {
                    listBoxProps: l
                } = (0, ed.useListBox)(e, o, r);
            return (0, u.jsx)("ul", {
                ...l,
                ref: r,
                className: "m-0 max-h-40 list-none overflow-auto p-0",
                children: [...o.collection].map(e => (0, u.jsx)(ep, {
                    item: e,
                    state: o
                }, e.key))
            })
        };
    var em = e.i(66736);
    let eb = e => {
        let {
            isDisabled: t,
            hasError: r,
            hasWarning: o
        } = e, {
            contains: l
        } = Y({
            sensitivity: "base"
        }), i = et({
            ...e,
            defaultFilter: l
        }), a = (0, n.useRef)(null), s = (0, n.useRef)(null), d = (0, n.useRef)(null), c = (0, n.useRef)(null), {
            buttonProps: p,
            inputProps: f,
            listBoxProps: m,
            labelProps: g
        } = H({
            ...e,
            inputRef: s,
            buttonRef: a,
            listBoxRef: d,
            popoverRef: c
        }, i), {
            buttonProps: h
        } = (0, eo.useButton)(p, a), y = (0, b.default)("stroke-gray-900 group-hover/select:stroke-gray-800 dark:group-hover/select:stroke-gray-200 transition-all ease-out duration-400", {
            "rotate-180 stroke-gray-900 ": i.isOpen
        }), C = (0, b.default)("rounded-lg w-full border border-gray-200 outline-blue focus:ring-3 focus:ring-blue-dark focus:outline-blue focus:outline-offset-0 focus:border-none transition-all ease-out duration-400", "text-gray-900 dark:text-gray-400 dark:text-white", "placeholder-gray-600 dark:placeholder-gray-400", {
            "bg-gray-100 dark:bg-gray-800 cursor-not-allowed": t,
            "border-yellow-500 dark:border-yellow-500 border-2": o,
            "border-red-500 dark:border-red-500 border-2": r
        }, {
            "bg-gray-50 dark:bg-gray-900": !t,
            "border-gray-400 hover:border-gray-900 dark:border-gray-500 dark:hover:border-white": !r && !o
        });
        return (0, u.jsxs)("div", {
            className: "inline-flex w-full flex-col",
            children: [(0, u.jsxs)("div", {
                className: "flex justify-between",
                children: [(0, u.jsx)("label", {
                    ...g,
                    className: "inline-block pb-2",
                    children: e.label
                }), e.required && (0, u.jsx)("span", {
                    className: "text-sm text-gray-400",
                    children: e.requiredText
                })]
            }), (0, u.jsxs)("div", {
                className: "relative inline-block w-full",
                children: [(0, u.jsx)("input", {
                    ...f,
                    ref: s,
                    className: C
                }), (0, u.jsx)("button", {
                    className: "absolute top-0 right-0 bottom-0 h-10 px-2 text-gray-900",
                    ...h,
                    ref: a,
                    children: (0, u.jsx)("span", {
                        "aria-hidden": "true",
                        children: (0, u.jsx)(eu.default, {
                            className: y
                        })
                    })
                }), e.helpText && (0, u.jsx)(en.default, {
                    helperText: e.helpText,
                    hasError: e.hasError,
                    hasWarning: e.hasWarning
                }), i.isOpen && (0, u.jsx)(es, {
                    popoverRef: c,
                    isOpen: i.isOpen,
                    onClose: i.close,
                    children: (0, u.jsx)(ef, {
                        ...m,
                        listBoxRef: d,
                        state: i
                    })
                })]
            })]
        })
    };
    eb.Item = em.Item;
    var eg = e.i(475200);
    e.s(["default", 0, e => {
        let {
            visibleConditions: t,
            visibleCountry: r,
            countryCode: o
        } = e, i = (0, eg.default)(), d = e?.chained?.map(e => e.dependant) || [];
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
            b = e => (0, u.jsx)(eb.Item, {
                children: e?.label || e?.option
            }, e.value),
            g = t => {
                e.setValue(e.formFieldId, t, {
                    shouldValidate: !0
                })
            },
            h = e => (0, u.jsx)(eb.Item, {
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
                    }), t.error && (0, u.jsx)(en.default, {
                        helperText: (0, l.default)(e.helpText, e.errorText, e.warningText, void 0 !== t.error, !1),
                        hasError: void 0 !== t.error
                    })]
                }) : (0, u.jsx)(eb, {
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
                    children: b
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
                        onSelectionChange: g,
                        className: t.error ? "rounded-lg border-2 border-red-500 bg-white p-2" : "rounded-lg border border-gray-300 bg-white p-2",
                        children: (e?.dropdownOptionsFromReference?.options || e?.dropdownOptions || []).map(t => {
                            let r, o;
                            return r = void 0 !== t.value ? t.value : t.key || t.toString(), o = t.label || t.text || t.toString() || e.placeholder, (0, u.jsx)(A.default.Item, {
                                children: o
                            }, r)
                        })
                    }), t.error && (0, u.jsx)(en.default, {
                        helperText: (0, l.default)(e.helpText, e.errorText, e.warningText, void 0 !== t.error, !1),
                        hasError: void 0 !== t.error
                    })]
                }, o) : (0, u.jsx)(eb, {
                    isDisabled: e.isDisabled,
                    defaultSelectedKey: e.defaultValue,
                    required: e.isRequired,
                    requiredText: e.requiredText,
                    menuTrigger: "focus",
                    name: e.formFieldId,
                    placeholder: e.placeholder,
                    defaultItems: e?.dropdownOptionsFromReference?.options || e?.dropdownOptions,
                    label: e.label,
                    onSelectionChange: g,
                    ...void 0 !== t.error && {
                        helpText: (0, l.default)(e.helpText, e.errorText, e.warningText, void 0 !== t.error, !1)
                    },
                    hasError: void 0 !== t.error,
                    children: h
                }, o) : null)]
            })
        }) : null
    }], 662380);
    let eh = {
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
        return !d || Array.isArray(d) && 0 === d.length ? null : (0, u.jsx)($.default, {
            className: l,
            children: (0, u.jsx)(m.PortableText, {
                value: d,
                components: eh
            })
        })
    }], 179695)
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
    }, "default", 0, o, "useResourcesDetailContext", 0, () => (0, r.useContext)(o)])
}, 537251, e => {
    "use strict";
    var t = e.i(499531),
        r = e.i(569959),
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
            [b, g] = (0, t.useState)(!1),
            h = (c = ["elqCustomerGUID"], e ? e.filter(e => "hidden" === e.inputType && !c.includes(e.formFieldId)).reduce((e, t) => Object.assign(e, {
                [t.formFieldId]: t.defaultValue
            }), {}) : {}),
            [y] = (0, o.default)("ELOQUA"),
            {
                setFormSubmitted: C
            } = (0, u.useResourcesDetailContext)(),
            v = (0, t.useRef)(void 0),
            x = (0, t.useRef)(0),
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
                g(!0);
                let e = setInterval(() => {
                    x.current++, void 0 !== window._elqQ && (window._elqQ.push(["elqDataLookup", escape("7cd261a6ba06486b88648045c9069652"), ""]), clearInterval(e)), 50 === x.current && (g(!1), clearInterval(e))
                }, 100);
                v.current = e
            }
            return () => {
                clearInterval(v.current)
            }
        }, [y]);
        let k = (0, t.useCallback)(e => {
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
                }), C(!0)
            }).catch(e => r.captureException(e)).finally(() => {
                g(!1)
            })
        }, [s, C, y, h, p, f, a, d]);
        return (0, t.useEffect)(() => {
            let e;
            return b && (e = setTimeout(() => {
                g(!1)
            }, 2e3)), () => {
                clearTimeout(e)
            }
        }, [b]), (0, t.useEffect)(() => (window.LogElqValue = k, window.SetElqContent = () => {
            let e = setInterval(() => {
                A.current++, window.GetElqContentPersonalizationValue && (k(window.GetElqContentPersonalizationValue("V_Email_Address")), clearInterval(e)), 50 === A.current && clearInterval(e)
            }, 100);
            $.current = e
        }, () => {
            clearInterval($.current)
        }), [k]), {
            extraFields: f,
            loading: b
        }
    }])
}]);