(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 968651, 441737, 620174, e => {
    "use strict";
    e.s(["default", 0, (e, t, u, r, o) => r ? t : o ? u : e || ""], 968651);
    var t = e.i(615167),
        u = e.i(145158),
        r = e.i(722978),
        o = e.i(181492),
        n = e.i(191695);
    let l = u.default.forwardRef((e, u) => {
        let {
            disabled: l,
            hasError: i,
            inputSize: a,
            hasWarning: s,
            isTextArea: d
        } = e, c = (0, n.useObjectRef)(u), p = {
            ...e,
            autoCapitalize: "none"
        }, {
            inputProps: f
        } = (0, o.useTextField)({
            ...p,
            inputElementType: "input"
        }, c), m = (0, r.default)("rounded-lg w-full border border-gray-200 outline-blue focus:ring-3 focus:ring-blue-dark focus:outline-blue focus:outline-offset-0 transition-all ease-out duration-400", "text-gray-900 dark:text-gray-400 dark:text-white", "placeholder-gray-600 dark:placeholder-gray-400", {
            "h-10 py-2.5 px-2": "small" === a,
            "h-12 py-3.5 px-3": "medium" === a,
            "h-14 py-5 px-4": "large" === a
        }, {
            "bg-gray-100 dark:bg-gray-800 cursor-not-allowed": l,
            "border-yellow-500 dark:border-yellow-500 border-2": s,
            "border-red-500 dark:border-red-500 border-2": i
        }, {
            "bg-gray-50 dark:bg-gray-900": !l,
            "border-gray-400 hover:border-gray-900 dark:border-gray-500 dark:hover:border-white": !i && !s
        }, {
            "min-h-[6rem]": d
        });
        return d ? (0, t.jsx)("textarea", {
            ...f,
            "aria-labelledby": e["aria-labelledby"] || f["aria-labelledby"],
            ref: c,
            className: m,
            disabled: l
        }) : (0, t.jsx)("input", {
            ...f,
            "aria-labelledby": e["aria-labelledby"] || f["aria-labelledby"],
            ref: c,
            className: m,
            disabled: l
        })
    });
    l.displayName = "InputField";
    var i = e.i(976989);
    let a = ({
            className: e,
            width: u = 18,
            height: r = 18
        }) => (0, t.jsx)("svg", {
            className: e,
            width: u,
            height: r,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, t.jsx)("path", {
                d: "M7 0.5C5.71442 0.5 4.45772 0.881218 3.3888 1.59545C2.31988 2.30968 1.48676 3.32484 0.994786 4.51256C0.502816 5.70028 0.374095 7.00721 0.624899 8.26809C0.875703 9.52896 1.49477 10.6872 2.40381 11.5962C3.31285 12.5052 4.47104 13.1243 5.73192 13.3751C6.99279 13.6259 8.29973 13.4972 9.48744 13.0052C10.6752 12.5132 11.6903 11.6801 12.4046 10.6112C13.1188 9.54229 13.5 8.28558 13.5 7C13.4982 5.27665 12.8128 3.62441 11.5942 2.40582C10.3756 1.18722 8.72335 0.50182 7 0.5ZM9.35375 8.64625C9.40021 8.69271 9.43706 8.74786 9.4622 8.80855C9.48734 8.86925 9.50028 8.9343 9.50028 9C9.50028 9.0657 9.48734 9.13075 9.4622 9.19145C9.43706 9.25214 9.40021 9.30729 9.35375 9.35375C9.3073 9.40021 9.25215 9.43705 9.19145 9.4622C9.13075 9.48734 9.0657 9.50028 9 9.50028C8.93431 9.50028 8.86925 9.48734 8.80855 9.4622C8.74786 9.43705 8.69271 9.40021 8.64625 9.35375L7 7.70687L5.35375 9.35375C5.3073 9.40021 5.25215 9.43705 5.19145 9.4622C5.13075 9.48734 5.0657 9.50028 5 9.50028C4.93431 9.50028 4.86925 9.48734 4.80855 9.4622C4.74786 9.43705 4.69271 9.40021 4.64625 9.35375C4.5998 9.30729 4.56295 9.25214 4.53781 9.19145C4.51266 9.13075 4.49972 9.0657 4.49972 9C4.49972 8.9343 4.51266 8.86925 4.53781 8.80855C4.56295 8.74786 4.5998 8.69271 4.64625 8.64625L6.29313 7L4.64625 5.35375C4.55243 5.25993 4.49972 5.13268 4.49972 5C4.49972 4.86732 4.55243 4.74007 4.64625 4.64625C4.74007 4.55243 4.86732 4.49972 5 4.49972C5.13268 4.49972 5.25993 4.55243 5.35375 4.64625L7 6.29313L8.64625 4.64625C8.69271 4.59979 8.74786 4.56294 8.80855 4.5378C8.86925 4.51266 8.93431 4.49972 9 4.49972C9.0657 4.49972 9.13075 4.51266 9.19145 4.5378C9.25215 4.56294 9.3073 4.59979 9.35375 4.64625C9.40021 4.6927 9.43706 4.74786 9.4622 4.80855C9.48734 4.86925 9.50028 4.9343 9.50028 5C9.50028 5.0657 9.48734 5.13075 9.4622 5.19145C9.43706 5.25214 9.40021 5.3073 9.35375 5.35375L7.70688 7L9.35375 8.64625Z",
                fill: "currentColor"
            })
        }),
        s = ({
            className: e,
            width: u = 18,
            height: r = 18
        }) => (0, t.jsx)("svg", {
            className: e,
            width: u,
            height: r,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, t.jsx)("path", {
                d: "M8 1.5C6.71442 1.5 5.45772 1.88122 4.3888 2.59545C3.31988 3.30968 2.48676 4.32484 1.99479 5.51256C1.50282 6.70028 1.37409 8.00721 1.6249 9.26809C1.8757 10.529 2.49477 11.6872 3.40381 12.5962C4.31285 13.5052 5.47104 14.1243 6.73192 14.3751C7.99279 14.6259 9.29973 14.4972 10.4874 14.0052C11.6752 13.5132 12.6903 12.6801 13.4046 11.6112C14.1188 10.5423 14.5 9.28558 14.5 8C14.4982 6.27665 13.8128 4.62441 12.5942 3.40582C11.3756 2.18722 9.72335 1.50182 8 1.5ZM7.75 4.5C7.89834 4.5 8.04334 4.54399 8.16668 4.6264C8.29002 4.70881 8.38615 4.82594 8.44291 4.96299C8.49968 5.10003 8.51453 5.25083 8.48559 5.39632C8.45665 5.5418 8.38522 5.67544 8.28033 5.78033C8.17544 5.88522 8.04181 5.95665 7.89632 5.98559C7.75083 6.01453 7.60003 5.99968 7.46299 5.94291C7.32595 5.88614 7.20881 5.79001 7.1264 5.66668C7.04399 5.54334 7 5.39834 7 5.25C7 5.05109 7.07902 4.86032 7.21967 4.71967C7.36032 4.57902 7.55109 4.5 7.75 4.5ZM8.5 11.5C8.23479 11.5 7.98043 11.3946 7.7929 11.2071C7.60536 11.0196 7.5 10.7652 7.5 10.5V8C7.36739 8 7.24022 7.94732 7.14645 7.85355C7.05268 7.75979 7 7.63261 7 7.5C7 7.36739 7.05268 7.24021 7.14645 7.14645C7.24022 7.05268 7.36739 7 7.5 7C7.76522 7 8.01957 7.10536 8.20711 7.29289C8.39465 7.48043 8.5 7.73478 8.5 8V10.5C8.63261 10.5 8.75979 10.5527 8.85356 10.6464C8.94732 10.7402 9 10.8674 9 11C9 11.1326 8.94732 11.2598 8.85356 11.3536C8.75979 11.4473 8.63261 11.5 8.5 11.5Z",
                fill: "currentColor"
            })
        }),
        d = e => {
            let {
                helperText: r,
                hasError: n,
                hasWarning: l
            } = e, d = (0, u.useRef)(null), {
                descriptionProps: c
            } = (0, o.useTextField)(e, d);
            return (0, t.jsxs)("div", {
                ...c,
                className: "align-items flex pt-2 text-xs",
                children: [n && (0, t.jsx)(a, {
                    className: "inline pr-1 text-red-600"
                }), l && (0, t.jsx)(i.default, {
                    className: "inline pr-1 text-yellow-600"
                }), !l && !n && (0, t.jsx)(s, {
                    className: "inline pr-1 text-gray-600 dark:text-gray-100"
                }), r]
            })
        };
    e.s(["default", 0, d], 441737);
    let c = ({
            className: e,
            ...u
        }) => (0, t.jsxs)("label", {
            id: u.id,
            htmlFor: u.for,
            className: e ?? "flex justify-between pb-2",
            children: [u.label, u.isRequired && (0, t.jsx)("span", {
                className: "text-sm text-gray-400",
                children: u.requiredText
            })]
        }),
        p = (0, u.forwardRef)(({
            helperText: e,
            ...r
        }, o) => {
            let n = (0, u.useId)();
            return (0, t.jsxs)("div", {
                ref: o,
                children: [(0, t.jsx)(c, {
                    ...r,
                    id: n
                }), (0, t.jsx)(l, {
                    ...r,
                    "aria-labelledby": n
                }), e && (0, t.jsx)(d, {
                    helperText: e,
                    ...r
                })]
            })
        });
    p.displayName = "Input", e.s(["default", 0, p], 620174)
}, 512309, e => {
    "use strict";
    var t = e.i(145158),
        u = e => e instanceof Date,
        r = e => null == e,
        o = e => !r(e) && !Array.isArray(e) && "object" == typeof e && !u(e),
        n = e => o(e) && e.target ? "checkbox" === e.target.type ? e.target.checked : e.target.value : e,
        l = (e, t) => e.has(t.substring(0, t.search(/\.\d+(\.|$)/)) || t),
        i = "u" > typeof window && void 0 !== window.HTMLElement && "u" > typeof document;

    function a(e) {
        let t, u = Array.isArray(e);
        if (e instanceof Date) t = new Date(e);
        else if (e instanceof Set) t = new Set(e);
        else {
            let r;
            if (!(!(i && (e instanceof Blob || e instanceof FileList)) && (u || o(e)))) return e;
            if (t = u ? [] : {}, u || o(r = e.constructor && e.constructor.prototype) && r.hasOwnProperty("isPrototypeOf"))
                for (let u in e) e.hasOwnProperty(u) && (t[u] = a(e[u]));
            else t = e
        }
        return t
    }
    var s = e => Array.isArray(e) ? e.filter(Boolean) : [],
        d = e => void 0 === e,
        c = (e, t, u) => {
            if (!t || !o(e)) return u;
            let n = s(t.split(/[,[\].]+?/)).reduce((e, t) => r(e) ? e : e[t], e);
            return d(n) || n === e ? d(e[t]) ? u : e[t] : n
        },
        p = e => s(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
        f = (e, t, u) => {
            let r = -1,
                n = /^\w*$/.test(t) ? [t] : p(t),
                l = n.length,
                i = l - 1;
            for (; ++r < l;) {
                let t = n[r],
                    l = u;
                if (r !== i) {
                    let u = e[t];
                    l = o(u) || Array.isArray(u) ? u : isNaN(+n[r + 1]) ? {} : []
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
        C = "minLength",
        x = "pattern",
        y = "required",
        v = t.default.createContext(null);
    var $ = (e, t, u, r = !0) => {
            let o = {
                defaultValues: t._defaultValues
            };
            for (let n in e) Object.defineProperty(o, n, {
                get: () => ("all" !== t._proxyFormState[n] && (t._proxyFormState[n] = !r || "all"), u && (u[n] = !0), e[n])
            });
            return o
        },
        A = e => o(e) && !Object.keys(e).length,
        F = (e, t, u, r) => {
            u(e);
            let {
                name: o,
                ...n
            } = e;
            return A(n) || Object.keys(n).length >= Object.keys(t).length || Object.keys(n).find(e => t[e] === (!r || "all"))
        },
        E = e => Array.isArray(e) ? e : [e],
        D = (e, t, u) => !e || !t || e === t || E(e).some(e => e && (u ? e === t : e.startsWith(t) || t.startsWith(e)));

    function T(e) {
        let u = t.default.useRef(e);
        u.current = e, t.default.useEffect(() => {
            let t = !e.disabled && u.current.subject && u.current.subject.subscribe({
                next: u.current.next
            });
            return () => {
                t && t.unsubscribe()
            }
        }, [e.disabled])
    }
    var w = (e, t, u, r, o) => "string" == typeof e ? (r && t.watch.add(e), c(u, e, o)) : Array.isArray(e) ? e.map(e => (r && t.watch.add(e), c(u, e))) : (r && (t.watchAll = !0), u);

    function k(e) {
        let u = t.default.useContext(v),
            {
                control: r = u.control,
                name: o,
                defaultValue: n,
                disabled: l,
                exact: i
            } = e || {},
            s = t.default.useRef(o);
        s.current = o, T({
            disabled: l,
            subject: r._subjects.values,
            next: e => {
                D(s.current, e.name, i) && c(a(w(s.current, r._names, e.values || r._formValues, !1, n)))
            }
        });
        let [d, c] = t.default.useState(r._getWatch(o, n));
        return t.default.useEffect(() => r._removeUnmounted()), d
    }
    let S = e => e.render(function(e) {
        let u = t.default.useContext(v),
            {
                name: r,
                disabled: o,
                control: i = u.control,
                shouldUnregister: s
            } = e,
            p = l(i._names.array, r),
            g = k({
                control: i,
                name: r,
                defaultValue: c(i._formValues, r, c(i._defaultValues, r, e.defaultValue)),
                exact: !0
            }),
            b = function(e) {
                let u = t.default.useContext(v),
                    {
                        control: r = u.control,
                        disabled: o,
                        name: n,
                        exact: l
                    } = e || {},
                    [i, a] = t.default.useState(r._formState),
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
                return c.current = n, T({
                    disabled: o,
                    next: e => s.current && D(c.current, e.name, l) && F(e, d.current, r._updateFormState) && a({
                        ...r._formState,
                        ...e
                    }),
                    subject: r._subjects.state
                }), t.default.useEffect(() => (s.current = !0, d.current.isValid && r._updateValid(!0), () => {
                    s.current = !1
                }), [r]), $(i, r, d.current, !1)
            }({
                control: i,
                name: r,
                exact: !0
            }),
            h = t.default.useRef(i.register(r, {
                ...e.rules,
                value: g,
                ..."boolean" == typeof e.disabled ? {
                    disabled: e.disabled
                } : {}
            }));
        return t.default.useEffect(() => {
            let e = i._options.shouldUnregister || s,
                t = (e, t) => {
                    let u = c(i._fields, e);
                    u && u._f && (u._f.mount = t)
                };
            if (t(r, !0), e) {
                let e = a(c(i._options.defaultValues, r));
                f(i._defaultValues, r, e), d(c(i._formValues, r)) && f(i._formValues, r, e)
            }
            return () => {
                (p ? e && !i._state.action : e) ? i.unregister(r): t(r, !1)
            }
        }, [r, i, p, s]), t.default.useEffect(() => {
            c(i._fields, r) && i._updateDisabledField({
                disabled: o,
                fields: i._fields,
                name: r,
                value: c(i._fields, r)._f.value
            })
        }, [o, r, i]), {
            field: {
                name: r,
                value: g,
                ..."boolean" == typeof o || b.disabled ? {
                    disabled: b.disabled || o
                } : {},
                onChange: t.default.useCallback(e => h.current.onChange({
                    target: {
                        value: n(e),
                        name: r
                    },
                    type: "change"
                }), [r]),
                onBlur: t.default.useCallback(() => h.current.onBlur({
                    target: {
                        value: c(i._formValues, r),
                        name: r
                    },
                    type: m
                }), [r, i]),
                ref: t.default.useCallback(e => {
                    let t = c(i._fields, r);
                    t && e && (t._f.ref = {
                        focus: () => e.focus(),
                        select: () => e.select(),
                        setCustomValidity: t => e.setCustomValidity(t),
                        reportValidity: () => e.reportValidity()
                    })
                }, [i._fields, r])
            },
            formState: b,
            fieldState: Object.defineProperties({}, {
                invalid: {
                    enumerable: !0,
                    get: () => !!c(b.errors, r)
                },
                isDirty: {
                    enumerable: !0,
                    get: () => !!c(b.dirtyFields, r)
                },
                isTouched: {
                    enumerable: !0,
                    get: () => !!c(b.touchedFields, r)
                },
                isValidating: {
                    enumerable: !0,
                    get: () => !!c(b.validatingFields, r)
                },
                error: {
                    enumerable: !0,
                    get: () => c(b.errors, r)
                }
            })
        }
    }(e));
    var j = (e, t, u, r, o) => t ? {
            ...u[e],
            types: {
                ...u[e] && u[e].types ? u[e].types : {},
                [r]: o || !0
            }
        } : {},
        V = e => ({
            isOnSubmit: !e || e === b,
            isOnBlur: "onBlur" === e,
            isOnChange: e === g,
            isOnAll: "all" === e,
            isOnTouch: "onTouched" === e
        }),
        B = (e, t, u) => !u && (t.watchAll || t.watch.has(e) || [...t.watch].some(t => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length))));
    let _ = (e, t, u, r) => {
        for (let n of u || Object.keys(e)) {
            let u = c(e, n);
            if (u) {
                let {
                    _f: e,
                    ...l
                } = u;
                if (e) {
                    if (e.refs && e.refs[0] && t(e.refs[0], n) && !r) return !0;
                    else if (e.ref && t(e.ref, e.name) && !r) return !0;
                    else if (_(l, t)) break
                } else if (o(l) && _(l, t)) break
            }
        }
    };
    var L = (e, t, u) => {
            let r = E(c(e, u));
            return f(r, "root", t[u]), f(e, u, r), e
        },
        O = e => "function" == typeof e,
        R = e => {
            if (!i) return !1;
            let t = e ? e.ownerDocument : 0;
            return e instanceof(t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
        },
        I = e => "string" == typeof e;
    let N = {
            value: !1,
            isValid: !1
        },
        P = {
            value: !0,
            isValid: !0
        };
    var G = e => {
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
            } : P : N
        }
        return N
    };
    let q = {
        isValid: !1,
        value: null
    };
    var M = e => Array.isArray(e) ? e.reduce((e, t) => t && t.checked && !t.disabled ? {
        isValid: !0,
        value: t.value
    } : e, q) : q;

    function K(e, t, u = "validate") {
        if (I(e) || Array.isArray(e) && e.every(I) || "boolean" == typeof e && !e) return {
            type: u,
            message: I(e) ? e : "",
            ref: t
        }
    }
    var z = e => !o(e) || e instanceof RegExp ? {
            value: e,
            message: ""
        } : e,
        U = async (e, t, u, n, l) => {
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
                mount: E,
                disabled: D
            } = e._f, T = c(t, $);
            if (!E || D) return {};
            let w = a ? a[0] : i,
                k = e => {
                    n && w.reportValidity && (w.setCustomValidity("boolean" == typeof e ? "" : e || ""), w.reportValidity())
                },
                S = {},
                V = "radio" === i.type,
                B = "checkbox" === i.type,
                _ = (F || "file" === i.type) && d(i.value) && d(T) || R(i) && "" === i.value || "" === T || Array.isArray(T) && !T.length,
                L = j.bind(null, $, u, S),
                N = (e, t, u, r = h, o = C) => {
                    let n = e ? t : u;
                    S[$] = {
                        type: e ? r : o,
                        message: n,
                        ref: i,
                        ...L(e ? r : o, n)
                    }
                };
            if (l ? !Array.isArray(T) || !T.length : s && (!(V || B) && (_ || r(T)) || "boolean" == typeof T && !T || B && !G(a).isValid || V && !M(a).isValid)) {
                let {
                    value: e,
                    message: t
                } = I(s) ? {
                    value: !!s,
                    message: s
                } : z(s);
                if (e && (S[$] = {
                        type: y,
                        message: t,
                        ref: w,
                        ...L(y, t)
                    }, !u)) return k(t), S
            }
            if (!_ && (!r(m) || !r(g))) {
                let e, t, o = z(g),
                    n = z(m);
                if (r(T) || isNaN(T)) {
                    let u = i.valueAsDate || new Date(T),
                        r = e => new Date(new Date().toDateString() + " " + e),
                        l = "time" == i.type,
                        a = "week" == i.type;
                    "string" == typeof o.value && T && (e = l ? r(T) > r(o.value) : a ? T > o.value : u > new Date(o.value)), "string" == typeof n.value && T && (t = l ? r(T) < r(n.value) : a ? T < n.value : u < new Date(n.value))
                } else {
                    let u = i.valueAsNumber || (T ? +T : T);
                    r(o.value) || (e = u > o.value), r(n.value) || (t = u < n.value)
                }
                if ((e || t) && (N(!!e, o.message, n.message, "max", "min"), !u)) return k(S[$].message), S
            }
            if ((p || f) && !_ && ("string" == typeof T || l && Array.isArray(T))) {
                let e = z(p),
                    t = z(f),
                    o = !r(e.value) && T.length > +e.value,
                    n = !r(t.value) && T.length < +t.value;
                if ((o || n) && (N(o, e.message, t.message), !u)) return k(S[$].message), S
            }
            if (b && !_ && "string" == typeof T) {
                let {
                    value: e,
                    message: t
                } = z(b);
                if (e instanceof RegExp && !T.match(e) && (S[$] = {
                        type: x,
                        message: t,
                        ref: i,
                        ...L(x, t)
                    }, !u)) return k(t), S
            }
            if (v) {
                if (O(v)) {
                    let e = K(await v(T, t), w);
                    if (e && (S[$] = {
                            ...e,
                            ...L("validate", e.message)
                        }, !u)) return k(e.message), S
                } else if (o(v)) {
                    let e = {};
                    for (let r in v) {
                        if (!A(e) && !u) break;
                        let o = K(await v[r](T, t), w, r);
                        o && (e = {
                            ...o,
                            ...L(r, o.message)
                        }, k(o.message), u && (S[$] = e))
                    }
                    if (!A(e) && (S[$] = {
                            ref: w,
                            ...e
                        }, !u)) return S
                }
            }
            return k(!0), S
        };

    function W(e, t) {
        let u = Array.isArray(t) ? t : /^\w*$/.test(t) ? [t] : p(t),
            r = 1 === u.length ? e : function(e, t) {
                let u = t.slice(0, -1).length,
                    r = 0;
                for (; r < u;) e = d(e) ? r++ : e[t[r++]];
                return e
            }(e, u),
            n = u.length - 1,
            l = u[n];
        return r && delete r[l], 0 !== n && (o(r) && A(r) || Array.isArray(r) && function(e) {
            for (let t in e)
                if (e.hasOwnProperty(t) && !d(e[t])) return !1;
            return !0
        }(r)) && W(e, u.slice(0, -1)), e
    }
    var Z = () => {
            let e = [];
            return {
                get observers() {
                    return e
                },
                next: t => {
                    for (let u of e) u.next && u.next(t)
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
        H = e => r(e) || "object" != typeof e;

    function Q(e, t) {
        if (H(e) || H(t)) return e === t;
        if (u(e) && u(t)) return e.getTime() === t.getTime();
        let r = Object.keys(e),
            n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (let l of r) {
            let r = e[l];
            if (!n.includes(l)) return !1;
            if ("ref" !== l) {
                let e = t[l];
                if (u(r) && u(e) || o(r) && o(e) || Array.isArray(r) && Array.isArray(e) ? !Q(r, e) : r !== e) return !1
            }
        }
        return !0
    }
    var Y = e => R(e) && e.isConnected,
        J = e => {
            for (let t in e)
                if (O(e[t])) return !0;
            return !1
        };

    function X(e, t = {}) {
        let u = Array.isArray(e);
        if (o(e) || u)
            for (let u in e) Array.isArray(e[u]) || o(e[u]) && !J(e[u]) ? (t[u] = Array.isArray(e[u]) ? [] : {}, X(e[u], t[u])) : r(e[u]) || (t[u] = !0);
        return t
    }
    var ee = (e, t) => (function e(t, u, n) {
            let l = Array.isArray(t);
            if (o(t) || l)
                for (let l in t) Array.isArray(t[l]) || o(t[l]) && !J(t[l]) ? d(u) || H(n[l]) ? n[l] = Array.isArray(t[l]) ? X(t[l], []) : {
                    ...X(t[l])
                } : e(t[l], r(u) ? {} : u[l], n[l]) : n[l] = !Q(t[l], u[l]);
            return n
        })(e, t, X(t)),
        et = (e, {
            valueAsNumber: t,
            valueAsDate: u,
            setValueAs: r
        }) => d(e) ? e : t ? "" === e ? NaN : e ? +e : e : u && "string" == typeof e ? new Date(e) : r ? r(e) : e;

    function eu(e) {
        let t = e.ref;
        if (e.refs ? !e.refs.every(e => e.disabled) : !t.disabled) return "file" === t.type ? t.files : "radio" === t.type ? M(e.refs).value : "select-multiple" === t.type ? [...t.selectedOptions].map(({
            value: e
        }) => e) : "checkbox" === t.type ? G(e.refs).value : et(d(t.value) ? e.ref.value : t.value, e)
    }
    var er = e => d(e) ? e : e instanceof RegExp ? e.source : o(e) ? e.value instanceof RegExp ? e.value.source : e.value : e;
    let eo = "AsyncFunction";
    var en = e => (!e || !e.validate) && !!(O(e.validate) && e.validate.constructor.name === eo || o(e.validate) && Object.values(e.validate).find(e => e.constructor.name === eo));

    function el(e, t, u) {
        let r = c(e, u);
        if (r || /^\w*$/.test(u)) return {
            error: r,
            name: u
        };
        let o = u.split(".");
        for (; o.length;) {
            let r = o.join("."),
                n = c(t, r),
                l = c(e, r);
            if (n && !Array.isArray(n) && u !== r) break;
            if (l && l.type) return {
                name: r,
                error: l
            };
            o.pop()
        }
        return {
            name: u
        }
    }
    let ei = {
        mode: b,
        reValidateMode: g,
        shouldFocusError: !0
    };

    function ea(e = {}) {
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
                        ...ei,
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
                    h = (o(p.defaultValues) || o(p.values)) && a(p.defaultValues || p.values) || {},
                    C = p.shouldUnregister ? {} : a(h),
                    x = {
                        action: !1,
                        mount: !1,
                        watch: !1
                    },
                    y = {
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
                        values: Z(),
                        array: Z(),
                        state: Z()
                    },
                    D = V(p.mode),
                    T = V(p.reValidateMode),
                    k = "all" === p.criteriaMode,
                    S = async e => {
                        if ($.isValid || e) {
                            let e = p.resolver ? A((await P()).errors) : await q(b, !0);
                            e !== g.isValid && F.state.next({
                                isValid: e
                            })
                        }
                    }, j = (e, t) => {
                        ($.isValidating || $.validatingFields) && ((e || Array.from(y.mount)).forEach(e => {
                            e && (t ? f(g.validatingFields, e, t) : W(g.validatingFields, e))
                        }), F.state.next({
                            validatingFields: g.validatingFields,
                            isValidating: !A(g.validatingFields)
                        }))
                    }, I = (e, t, u, r) => {
                        let o = c(b, e);
                        if (o) {
                            let n = c(C, e, d(u) ? c(h, e) : u);
                            d(n) || r && r.defaultChecked || t ? f(C, e, t ? n : eu(o._f)) : z(e, n), x.mount && S()
                        }
                    }, N = (e, t, u, r, o) => {
                        let n = !1,
                            l = !1,
                            i = {
                                name: e
                            },
                            a = !!(c(b, e) && c(b, e)._f && c(b, e)._f.disabled);
                        if (!u || r) {
                            $.isDirty && (l = g.isDirty, g.isDirty = i.isDirty = M(), n = l !== i.isDirty);
                            let u = a || Q(c(h, e), t);
                            l = !!(!a && c(g.dirtyFields, e)), u || a ? W(g.dirtyFields, e) : f(g.dirtyFields, e, !0), i.dirtyFields = g.dirtyFields, n = n || $.dirtyFields && !u !== l
                        }
                        if (u) {
                            let t = c(g.touchedFields, e);
                            t || (f(g.touchedFields, e, u), i.touchedFields = g.touchedFields, n = n || $.touchedFields && t !== u)
                        }
                        return n && o && F.state.next(i), n ? i : {}
                    }, P = async e => {
                        j(e, !0);
                        let t = await p.resolver(C, p.context, ((e, t, u, r) => {
                            let o = {};
                            for (let u of e) {
                                let e = c(t, u);
                                e && f(o, u, e._f)
                            }
                            return {
                                criteriaMode: u,
                                names: [...e],
                                fields: o,
                                shouldUseNativeValidation: r
                            }
                        })(e || y.mount, b, p.criteriaMode, p.shouldUseNativeValidation));
                        return j(e), t
                    }, G = async e => {
                        let {
                            errors: t
                        } = await P(e);
                        if (e)
                            for (let u of e) {
                                let e = c(t, u);
                                e ? f(g.errors, u, e) : W(g.errors, u)
                            } else g.errors = t;
                        return t
                    }, q = async (e, t, u = {
                        valid: !0
                    }) => {
                        for (let r in e) {
                            let o = e[r];
                            if (o) {
                                let {
                                    _f: e,
                                    ...n
                                } = o;
                                if (e) {
                                    let n = y.array.has(e.name),
                                        l = o._f && en(o._f);
                                    l && $.validatingFields && j([r], !0);
                                    let i = await U(o, C, k, p.shouldUseNativeValidation && !t, n);
                                    if (l && $.validatingFields && j([r]), i[e.name] && (u.valid = !1, t)) break;
                                    t || (c(i, e.name) ? n ? L(g.errors, i, e.name) : f(g.errors, e.name, i[e.name]) : W(g.errors, e.name))
                                }
                                A(n) || await q(n, t, u)
                            }
                        }
                        return u.valid
                    }, M = (e, t) => (e && t && f(C, e, t), !Q(ed(), h)), K = (e, t, u) => w(e, y, {
                        ...x.mount ? C : d(t) ? h : "string" == typeof e ? {
                            [e]: t
                        } : t
                    }, u, t), z = (e, t, u = {}) => {
                        let o = c(b, e),
                            n = t;
                        if (o) {
                            let u = o._f;
                            u && (u.disabled || f(C, e, et(t, u)), n = R(u.ref) && r(t) ? "" : t, "select-multiple" === u.ref.type ? [...u.ref.options].forEach(e => e.selected = n.includes(e.value)) : u.refs ? "checkbox" === u.ref.type ? u.refs.length > 1 ? u.refs.forEach(e => (!e.defaultChecked || !e.disabled) && (e.checked = Array.isArray(n) ? !!n.find(t => t === e.value) : n === e.value)) : u.refs[0] && (u.refs[0].checked = !!n) : u.refs.forEach(e => e.checked = e.value === n) : "file" === u.ref.type ? u.ref.value = "" : (u.ref.value = n, u.ref.type || F.values.next({
                                name: e,
                                values: {
                                    ...C
                                }
                            })))
                        }(u.shouldDirty || u.shouldTouch) && N(e, n, u.shouldTouch, u.shouldDirty, !0), u.shouldValidate && es(e)
                    }, J = (e, t, r) => {
                        for (let o in t) {
                            let n = t[o],
                                l = `${e}.${o}`,
                                i = c(b, l);
                            !y.array.has(e) && H(n) && (!i || i._f) || u(n) ? z(l, n, r) : J(l, n, r)
                        }
                    }, X = (e, t, u = {}) => {
                        let o = c(b, e),
                            n = y.array.has(e),
                            l = a(t);
                        f(C, e, l), n ? (F.array.next({
                            name: e,
                            values: {
                                ...C
                            }
                        }), ($.isDirty || $.dirtyFields) && u.shouldDirty && F.state.next({
                            name: e,
                            dirtyFields: ee(h, C),
                            isDirty: M(e, l)
                        })) : !o || o._f || r(l) ? z(e, l, u) : J(e, l, u), B(e, y) && F.state.next({
                            ...g
                        }), F.values.next({
                            name: x.mount ? e : void 0,
                            values: {
                                ...C
                            }
                        })
                    }, eo = async u => {
                        x.mount = !0;
                        let r = u.target,
                            o = r.name,
                            l = !0,
                            i = c(b, o),
                            a = e => {
                                l = Number.isNaN(e) || Q(e, c(C, o, e))
                            };
                        if (i) {
                            var s, d, h, E, w;
                            let x, O, R, I = r.type ? eu(i._f) : n(u),
                                G = u.type === m || "focusout" === u.type,
                                M = !((R = i._f).mount && (R.required || R.min || R.max || R.maxLength || R.minLength || R.pattern || R.validate)) && !p.resolver && !c(g.errors, o) && !i._f.deps || (s = G, d = c(g.touchedFields, o), h = g.isSubmitted, E = T, !(w = D).isOnAll && (!h && w.isOnTouch ? !(d || s) : (h ? E.isOnBlur : w.isOnBlur) ? !s : (h ? !E.isOnChange : !w.isOnChange) || s)),
                                K = B(o, y, G);
                            f(C, o, I), G ? (i._f.onBlur && i._f.onBlur(u), t && t(0)) : i._f.onChange && i._f.onChange(u);
                            let z = N(o, I, G, !1),
                                Z = !A(z) || K;
                            if (G || F.values.next({
                                    name: o,
                                    type: u.type,
                                    values: {
                                        ...C
                                    }
                                }), M) return $.isValid && ("onBlur" === e.mode ? G && S() : S()), Z && F.state.next({
                                name: o,
                                ...K ? {} : z
                            });
                            if (!G && K && F.state.next({
                                    ...g
                                }), p.resolver) {
                                let {
                                    errors: e
                                } = await P([o]);
                                if (a(I), l) {
                                    let t = el(g.errors, b, o),
                                        u = el(e, b, t.name || o);
                                    x = u.error, o = u.name, O = A(e)
                                }
                            } else j([o], !0), x = (await U(i, C, k, p.shouldUseNativeValidation))[o], j([o]), a(I), l && (x ? O = !1 : $.isValid && (O = await q(b, !0)));
                            if (l) {
                                i._f.deps && es(i._f.deps);
                                var V = o,
                                    _ = O,
                                    L = x;
                                let u = c(g.errors, V),
                                    r = $.isValid && "boolean" == typeof _ && g.isValid !== _;
                                if (e.delayError && L) {
                                    let u;
                                    u = () => {
                                        f(g.errors, V, L), F.state.next({
                                            errors: g.errors
                                        })
                                    }, (t = e => {
                                        clearTimeout(v), v = setTimeout(u, e)
                                    })(e.delayError)
                                } else clearTimeout(v), t = null, L ? f(g.errors, V, L) : W(g.errors, V);
                                if ((L ? !Q(u, L) : u) || !A(z) || r) {
                                    let e = {
                                        ...z,
                                        ...r && "boolean" == typeof _ ? {
                                            isValid: _
                                        } : {},
                                        errors: g.errors,
                                        name: V
                                    };
                                    g = {
                                        ...g,
                                        ...e
                                    }, F.state.next(e)
                                }
                            }
                        }
                    }, ea = (e, t) => {
                        if (c(g.errors, t) && e.focus) return e.focus(), 1
                    }, es = async (e, t = {}) => {
                        let u, r, o = E(e);
                        if (p.resolver) {
                            let t = await G(d(e) ? e : o);
                            u = A(t), r = e ? !o.some(e => c(t, e)) : u
                        } else e ? ((r = (await Promise.all(o.map(async e => {
                            let t = c(b, e);
                            return await q(t && t._f ? {
                                [e]: t
                            } : t)
                        }))).every(Boolean)) || g.isValid) && S() : r = u = await q(b);
                        return F.state.next({
                            ..."string" != typeof e || $.isValid && u !== g.isValid ? {} : {
                                name: e
                            },
                            ...p.resolver || !e ? {
                                isValid: u
                            } : {},
                            errors: g.errors
                        }), t.shouldFocus && !r && _(b, ea, e ? o : y.mount), r
                    }, ed = e => {
                        let t = {
                            ...x.mount ? C : h
                        };
                        return d(e) ? t : "string" == typeof e ? c(t, e) : e.map(e => c(t, e))
                    }, ec = (e, t) => ({
                        invalid: !!c((t || g).errors, e),
                        isDirty: !!c((t || g).dirtyFields, e),
                        error: c((t || g).errors, e),
                        isValidating: !!c(g.validatingFields, e),
                        isTouched: !!c((t || g).touchedFields, e)
                    }), ep = (e, t, u) => {
                        let r = (c(b, e, {
                                _f: {}
                            })._f || {}).ref,
                            {
                                ref: o,
                                message: n,
                                type: l,
                                ...i
                            } = c(g.errors, e) || {};
                        f(g.errors, e, {
                            ...i,
                            ...t,
                            ref: r
                        }), F.state.next({
                            name: e,
                            errors: g.errors,
                            isValid: !1
                        }), u && u.shouldFocus && r && r.focus && r.focus()
                    }, ef = (e, t = {}) => {
                        for (let u of e ? E(e) : y.mount) y.mount.delete(u), y.array.delete(u), t.keepValue || (W(b, u), W(C, u)), t.keepError || W(g.errors, u), t.keepDirty || W(g.dirtyFields, u), t.keepTouched || W(g.touchedFields, u), t.keepIsValidating || W(g.validatingFields, u), p.shouldUnregister || t.keepDefaultValue || W(h, u);
                        F.values.next({
                            values: {
                                ...C
                            }
                        }), F.state.next({
                            ...g,
                            ...!t.keepDirty ? {} : {
                                isDirty: M()
                            }
                        }), t.keepIsValid || S()
                    }, em = ({
                        disabled: e,
                        name: t,
                        field: u,
                        fields: r,
                        value: o
                    }) => {
                        if ("boolean" == typeof e && x.mount || e) {
                            let n = e ? void 0 : d(o) ? eu(u ? u._f : c(r, t)._f) : o;
                            f(C, t, n), N(t, n, !1, !1, !0)
                        }
                    }, eg = (t, u = {}) => {
                        let r = c(b, t),
                            o = "boolean" == typeof u.disabled || "boolean" == typeof e.disabled;
                        return (f(b, t, {
                            ...r || {},
                            _f: {
                                ...r && r._f ? r._f : {
                                    ref: {
                                        name: t
                                    }
                                },
                                name: t,
                                mount: !0,
                                ...u
                            }
                        }), y.mount.add(t), r) ? em({
                            field: r,
                            disabled: "boolean" == typeof u.disabled ? u.disabled : e.disabled,
                            name: t,
                            value: u.value
                        }) : I(t, !0, u.value), {
                            ...o ? {
                                disabled: u.disabled || e.disabled
                            } : {},
                            ...p.progressive ? {
                                required: !!u.required,
                                min: er(u.min),
                                max: er(u.max),
                                minLength: er(u.minLength),
                                maxLength: er(u.maxLength),
                                pattern: er(u.pattern)
                            } : {},
                            name: t,
                            onChange: eo,
                            onBlur: eo,
                            ref: e => {
                                if (e) {
                                    let o;
                                    eg(t, u), r = c(b, t);
                                    let n = d(e.value) && e.querySelectorAll && e.querySelectorAll("input,select,textarea")[0] || e,
                                        l = "radio" === (o = n).type || "checkbox" === o.type,
                                        i = r._f.refs || [];
                                    (l ? i.find(e => e === n) : n === r._f.ref) || (f(b, t, {
                                        _f: {
                                            ...r._f,
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
                                } else(r = c(b, t, {}))._f && (r._f.mount = !1), (p.shouldUnregister || u.shouldUnregister) && !(l(y.array, t) && x.action) && y.unMount.add(t)
                            }
                        }
                    }, eb = () => p.shouldFocusError && _(b, ea, y.mount), eh = (e, t) => async u => {
                        let r;
                        u && (u.preventDefault && u.preventDefault(), u.persist && u.persist());
                        let o = a(C);
                        if (F.state.next({
                                isSubmitting: !0
                            }), p.resolver) {
                            let {
                                errors: e,
                                values: t
                            } = await P();
                            g.errors = e, o = t
                        } else await q(b);
                        if (W(g.errors, "root"), A(g.errors)) {
                            F.state.next({
                                errors: {}
                            });
                            try {
                                await e(o, u)
                            } catch (e) {
                                r = e
                            }
                        } else t && await t({
                            ...g.errors
                        }, u), eb(), setTimeout(eb);
                        if (F.state.next({
                                isSubmitted: !0,
                                isSubmitting: !1,
                                isSubmitSuccessful: A(g.errors) && !r,
                                submitCount: g.submitCount + 1,
                                errors: g.errors
                            }), r) throw r
                    }, eC = (t, u = {}) => {
                        let r = t ? a(t) : h,
                            o = a(r),
                            n = A(t),
                            l = n ? h : o;
                        if (u.keepDefaultValues || (h = r), !u.keepValues) {
                            if (u.keepDirtyValues)
                                for (let e of y.mount) c(g.dirtyFields, e) ? f(l, e, c(C, e)) : X(e, c(l, e));
                            else {
                                if (i && d(t))
                                    for (let e of y.mount) {
                                        let t = c(b, e);
                                        if (t && t._f) {
                                            let e = Array.isArray(t._f.refs) ? t._f.refs[0] : t._f.ref;
                                            if (R(e)) {
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
                            C = e.shouldUnregister ? u.keepDefaultValues ? a(h) : {} : a(l), F.array.next({
                                values: {
                                    ...l
                                }
                            }), F.values.next({
                                values: {
                                    ...l
                                }
                            })
                        }
                        y = {
                            mount: u.keepDirtyValues ? y.mount : new Set,
                            unMount: new Set,
                            array: new Set,
                            watch: new Set,
                            watchAll: !1,
                            focus: ""
                        }, x.mount = !$.isValid || !!u.keepIsValid || !!u.keepDirtyValues, x.watch = !!e.shouldUnregister, F.state.next({
                            submitCount: u.keepSubmitCount ? g.submitCount : 0,
                            isDirty: !n && (u.keepDirty ? g.isDirty : !!(u.keepDefaultValues && !Q(t, h))),
                            isSubmitted: !!u.keepIsSubmitted && g.isSubmitted,
                            dirtyFields: n ? {} : u.keepDirtyValues ? u.keepDefaultValues && C ? ee(h, C) : g.dirtyFields : u.keepDefaultValues && t ? ee(h, t) : u.keepDirty ? g.dirtyFields : {},
                            touchedFields: u.keepTouched ? g.touchedFields : {},
                            errors: u.keepErrors ? g.errors : {},
                            isSubmitSuccessful: !!u.keepIsSubmitSuccessful && g.isSubmitSuccessful,
                            isSubmitting: !1
                        })
                    }, ex = (e, t) => eC(O(e) ? e(C) : e, t);
                return {
                    control: {
                        register: eg,
                        unregister: ef,
                        getFieldState: ec,
                        handleSubmit: eh,
                        setError: ep,
                        _executeSchema: P,
                        _getWatch: K,
                        _getDirty: M,
                        _updateValid: S,
                        _removeUnmounted: () => {
                            for (let e of y.unMount) {
                                let t = c(b, e);
                                t && (t._f.refs ? t._f.refs.every(e => !Y(e)) : !Y(t._f.ref)) && ef(e)
                            }
                            y.unMount = new Set
                        },
                        _updateFieldArray: (e, t = [], u, r, o = !0, n = !0) => {
                            if (r && u) {
                                if (x.action = !0, n && Array.isArray(c(b, e))) {
                                    let t = u(c(b, e), r.argA, r.argB);
                                    o && f(b, e, t)
                                }
                                if (n && Array.isArray(c(g.errors, e))) {
                                    let t, n = u(c(g.errors, e), r.argA, r.argB);
                                    o && f(g.errors, e, n), s(c(t = g.errors, e)).length || W(t, e)
                                }
                                if ($.touchedFields && n && Array.isArray(c(g.touchedFields, e))) {
                                    let t = u(c(g.touchedFields, e), r.argA, r.argB);
                                    o && f(g.touchedFields, e, t)
                                }
                                $.dirtyFields && (g.dirtyFields = ee(h, C)), F.state.next({
                                    name: e,
                                    isDirty: M(e, t),
                                    dirtyFields: g.dirtyFields,
                                    errors: g.errors,
                                    isValid: g.isValid
                                })
                            } else f(C, e, t)
                        },
                        _updateDisabledField: em,
                        _getFieldArray: t => s(c(x.mount ? C : h, t, e.shouldUnregister ? c(h, t, []) : [])),
                        _reset: eC,
                        _resetDefaultValues: () => O(p.defaultValues) && p.defaultValues().then(e => {
                            ex(e, p.resetOptions), F.state.next({
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
                            }), _(b, (t, u) => {
                                let r = c(b, u);
                                r && (t.disabled = r._f.disabled || e, Array.isArray(r._f.refs) && r._f.refs.forEach(t => {
                                    t.disabled = r._f.disabled || e
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
                            return C
                        },
                        get _state() {
                            return x
                        },
                        set _state(value) {
                            x = value
                        },
                        get _defaultValues() {
                            return h
                        },
                        get _names() {
                            return y
                        },
                        set _names(value) {
                            y = value
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
                        next: u => e(K(void 0, t), u)
                    }) : K(e, t, !0),
                    setValue: X,
                    getValues: ed,
                    reset: ex,
                    resetField: (e, t = {}) => {
                        c(b, e) && (d(t.defaultValue) ? X(e, a(c(h, e))) : (X(e, t.defaultValue), f(h, e, a(t.defaultValue))), t.keepTouched || W(g.touchedFields, e), t.keepDirty || (W(g.dirtyFields, e), g.isDirty = t.defaultValue ? M(e, a(c(h, e))) : M()), !t.keepError && (W(g.errors, e), $.isValid && S()), F.state.next({
                            ...g
                        }))
                    },
                    clearErrors: e => {
                        e && E(e).forEach(e => W(g.errors, e)), F.state.next({
                            errors: e ? g.errors : {}
                        })
                    },
                    unregister: ef,
                    setError: ep,
                    setFocus: (e, t = {}) => {
                        let u = c(b, e),
                            r = u && u._f;
                        if (r) {
                            let e = r.refs ? r.refs[0] : r.ref;
                            e.focus && (e.focus(), t.shouldSelect && e.select())
                        }
                    },
                    getFieldState: ec
                }
            }(e),
            formState: b
        });
        let C = p.current.control;
        return C._options = e, T({
            subject: C._subjects.state,
            next: e => {
                F(e, C._proxyFormState, C._updateFormState, !0) && h({
                    ...C._formState
                })
            }
        }), t.default.useEffect(() => C._disableForm(e.disabled), [C, e.disabled]), t.default.useEffect(() => {
            if (C._proxyFormState.isDirty) {
                let e = C._getDirty();
                e !== b.isDirty && C._subjects.state.next({
                    isDirty: e
                })
            }
        }, [C, b.isDirty]), t.default.useEffect(() => {
            e.values && !Q(e.values, g.current) ? (C._reset(e.values, C._options.resetOptions), g.current = e.values, h(e => ({
                ...e
            }))) : C._resetDefaultValues()
        }, [e.values, C]), t.default.useEffect(() => {
            e.errors && C._setErrors(e.errors)
        }, [e.errors, C]), t.default.useEffect(() => {
            C._state.mount || (C._updateValid(), C._state.mount = !0), C._state.watch && (C._state.watch = !1, C._subjects.state.next({
                ...C._formState
            })), C._removeUnmounted()
        }), t.default.useEffect(() => {
            e.shouldUnregister && C._subjects.values.next({
                values: C._getWatch()
            })
        }, [e.shouldUnregister, C]), p.current.formState = $(b, C), p.current
    }
    e.s(["Controller", () => S, "useForm", () => ea, "useWatch", () => k])
}, 222061, 497492, 396241, 829483, 662380, 179695, e => {
    "use strict";
    var t, u, r, o = e.i(615167),
        n = e.i(145158),
        l = e.i(968651),
        i = e.i(620174),
        a = e.i(512309);

    function s(e, t, u) {
        return !e || 0 === e.length || e.every(({
            fieldId: e,
            value: r
        }, o) => (void 0 !== t[o] ? t[o] : u ? u(e) : void 0) === r)
    }

    function d() {
        return "true" === new URLSearchParams(window.location.search).get("isGrowForm")
    }

    function c(e, t = !1) {
        let u = new URLSearchParams(window.location.search);
        return e.reduce((e, r) => {
            let o = u.get(r);
            return e[r] = o || (t ? function(e) {
                if ("u" < typeof document) return "";
                let t = document.cookie.split("; ").find(t => t.startsWith(`${e}=`));
                return t ? decodeURIComponent(t.split("=")[1] ?? "") : ""
            }(r) : ""), e
        }, {})
    }

    function p(e, t) {
        return !e || 0 === e.length || !!t && e.some(e => e.countryCode === t)
    }

    function f(e = [], t = !1) {
        let u = c(Array.from(new URLSearchParams(window.location.search).keys()));
        return t ? Object.fromEntries(Object.entries(u).filter(([t]) => !e.includes(t))) : u
    }
    e.s(["checkIsGrowForm", () => d, "cleanData", 0, e => Object.entries(e).filter(([e, t]) => void 0 !== t).reduce((e, [t, u]) => (e[t] = u, e), {}), "getAlwaysSendOnData", 0, (e, t, u) => {
        let r = {};
        return e?.forEach(e => {
            if (e.alwaysSendOn) {
                let o = e.countryRestriction && e.countryRestriction.length > 0 && !u || e.countryRestriction?.some(e => e.countryCode === u) || !p(e.visibleCountry, u),
                    n = t(e.formFieldId);
                o || !o && !0 === n ? r[e.formFieldId] = !0 : o || n || (r[e.formFieldId] = "")
            }
        }), r
    }, "getFilteredQueryParams", () => f, "getQueryParams", () => c, "isCountryVisible", () => p], 497492), e.s(["default", 0, e => {
        let {
            inputType: t,
            formFieldId: u,
            label: r,
            helpText: d,
            errorText: c,
            warningText: f,
            className: m,
            placeholder: g,
            disabled: b,
            defaultValue: h,
            isRequired: C,
            requiredText: x = "Required",
            control: y,
            visibleConditions: v,
            getValues: $,
            visibleCountry: A,
            isNumericalOnly: F,
            restrictedDomainsToggle: E,
            restrictedDomains: D,
            restrictedDomainErrorText: T
        } = e, w = {
            label: r,
            requiredText: x,
            className: m,
            placeholder: g,
            disabled: b,
            isRequired: C,
            for: u,
            name: u,
            id: u
        }, k = (0, a.useWatch)({
            control: y,
            name: v?.map(({
                fieldId: e
            }) => e) || []
        }), S = s(v, k, $);
        if ((0, n.useEffect)(() => {
                S || e.control.unregister(e.formFieldId)
            }, [S, e.control, e.formFieldId]), !p(A, e.countryCode) || !S) return null;
        switch (t) {
            case "text":
                return (0, o.jsx)(a.Controller, {
                    name: u,
                    control: e.control,
                    rules: {
                        required: C,
                        ...F && {
                            pattern: /^(\+|[0-9])[0-9-]*$/
                        }
                    },
                    render: ({
                        field: e,
                        fieldState: t
                    }) => (0, o.jsx)(i.default, {
                        ...w,
                        ...e,
                        value: e.value || "",
                        ...void 0 !== t.error && {
                            helperText: (0, l.default)(d, c, f, void 0 !== t.error, !1)
                        },
                        hasError: void 0 !== t.error
                    })
                });
            case "longtext":
                return (0, o.jsx)(a.Controller, {
                    name: u,
                    control: e.control,
                    rules: {
                        required: C
                    },
                    render: ({
                        field: e,
                        fieldState: t
                    }) => (0, o.jsx)(i.default, {
                        isTextArea: !0,
                        ...w,
                        ...e,
                        value: e.value || "",
                        ...void 0 !== t.error && {
                            helperText: (0, l.default)(d, c, f, void 0 !== t.error, !1)
                        },
                        hasError: void 0 !== t.error
                    })
                });
            case "email":
                return (0, o.jsx)(a.Controller, {
                    rules: {
                        required: C,
                        pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,7}$/i,
                            message: c || "Invalid email format"
                        },
                        ...E && D && {
                            validate: e => !D.split(",").map(e => e.trim()).filter(e => e.length > 0).find(t => e.toLowerCase().includes(t.toLowerCase())) || T || "Input contains restricted domain"
                        }
                    },
                    name: u,
                    control: e.control,
                    render: ({
                        field: e,
                        fieldState: t
                    }) => (0, o.jsx)(i.default, {
                        ...w,
                        ...e,
                        value: e.value || "",
                        ...void 0 !== t.error && {
                            helperText: (0, l.default)(d, t.error.message || c, f, void 0 !== t.error, !1)
                        },
                        hasError: void 0 !== t.error
                    })
                });
            case "hidden":
                return (0, o.jsx)(a.Controller, {
                    defaultValue: h,
                    name: u,
                    control: e.control,
                    render: () => (0, o.jsx)("input", {
                        id: u,
                        type: t,
                        name: u,
                        value: h
                    })
                });
            default:
                return null
        }
    }], 222061);
    var m = ((t = {}).US = "US", t.CA = "CA", t.CN = "CN", t);
    (u = {}).US = "stateUS", u.CA = "stateCA";
    var g = ((r = {}).TOS = "legalToS", r.PRIVACY = "legalPP", r.MARKETING_CN = "legalCN", r);
    e.s(["COUNTRY_CODE", 0, "countryCode", "COUNTRY_CODES", () => m, "LEGAL", () => g], 396241);
    var b = e.i(78389),
        h = e.i(722978),
        C = e.i(398793),
        x = e.i(148102),
        y = e.i(284159),
        v = e.i(379394),
        $ = e.i(191695);
    let A = (0, n.forwardRef)(function(e, t) {
        let {
            children: u,
            isIndeterminate: r = !1,
            isDisabled: l = !1,
            isSelected: i = !1,
            isRequired: a = !1,
            hasError: s = !1,
            requiredText: d = "Required"
        } = e, c = (0, y.useToggleState)(e), [p, f] = (0, n.useState)(r), m = (0, $.useObjectRef)(t), {
            inputProps: g
        } = (0, x.useCheckbox)(e, c, m), {
            isFocusVisible: b,
            focusProps: A
        } = (0, v.useFocusRing)();
        (0, n.useEffect)(() => {
            i && f(!1)
        }, [i]);
        let F = (0, h.default)("group flex text-small relative", {
                "pointer-events-none": l
            }, {
                "hover:cursor-pointer": !l
            }),
            E = (0, h.default)({
                "stroke-gray-400 dark:stroke-gray-500 group-hover:stroke-gray-800 dark:group-hover:stroke-white fill-transparent transition-colors duration-100 group-hover:fill-gray-200 dark:group-hover:fill-gray-800": !i && !p && !l && !b
            }, {
                "stroke-blue-dark group-hover:fill-blue fill-blue": (i || p) && !l
            }, {
                "fill-gray-200 stroke-gray-400 dark:fill-gray-800 dark:stroke-gray-700": l
            }, {
                "fill-gray-200 dark:fill-gray-800 stroke-gray-800 dark:stroke-white": b && !i && !p
            }, {
                "stroke-gray-400 dark:stroke-gray-500": a && !i && !b
            }, {
                "stroke-red dark:stroke-red": a && s && !i && !b
            }),
            D = (0, h.default)({
                "fill-white": i && !l,
                "fill-gray-400 dark:!fill-gray-500": l
            }),
            T = (0, h.default)({
                "fill-white": !l
            }, {
                "fill-gray-400 dark:fill-gray-500": l
            }),
            w = (0, h.default)("ml-1 text-sm", {
                "text-gray-400 dark:text-gray-400": i
            }, {
                "text-gray-400": s && !i
            }, {
                "text-gray-400": !s && !i
            });
        return (0, o.jsxs)("label", {
            className: F,
            children: [(0, o.jsx)(C.VisuallyHidden, {
                children: (0, o.jsx)("input", {
                    ...g,
                    ...A,
                    ref: m,
                    checked: i
                })
            }), (0, o.jsxs)("svg", {
                width: 24,
                height: 24,
                "aria-hidden": "true",
                className: "mr-2 min-w-[24px]",
                children: [(0, o.jsx)("rect", {
                    x: 4,
                    y: 4,
                    width: 16,
                    height: 16,
                    strokeWidth: 1,
                    rx: 4,
                    ry: 4,
                    className: E
                }), i && (0, o.jsx)("path", {
                    transform: "translate(7 7)",
                    d: `M3.788 9A.999.999 0 0 1 3 8.615l-2.288-3a1 1 0 1 1
            1.576-1.23l1.5 1.991 3.924-4.991a1 1 0 1 1 1.576 1.23l-4.712
            6A.999.999 0 0 1 3.788 9z`,
                    className: D
                }), p && (0, o.jsx)("rect", {
                    x: 7,
                    y: 11,
                    width: 10,
                    height: 2,
                    className: T
                }), b && (0, o.jsx)("rect", {
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
            }), (0, o.jsxs)("div", {
                className: "flex w-full justify-between",
                children: [u, a && (0, o.jsx)("div", {
                    className: w,
                    children: d
                })]
            })]
        })
    });
    var F = e.i(954936);
    e.s(["default", 0, e => {
        let t = e?.chained?.map(e => e.dependant) || [],
            u = e.formFieldId === g.TOS && e.isRequired || e.formFieldId === g.PRIVACY && e.isRequired || e.countryCode === m.CN && e.formFieldId === g.MARKETING_CN && e.isRequired || e.isRequired,
            [r, l] = (0, n.useState)(!1),
            {
                formFieldId: i,
                checkboxLabel: s,
                checkboxPlainTextLabel: d,
                countryRestriction: c,
                visibleCountry: f
            } = e;
        return c && c?.length > 0 && !e.countryCode || c?.find(t => t.countryCode === e.countryCode) || !p(f, e.countryCode) ? null : (0, o.jsx)(a.Controller, {
            name: i,
            control: e.control,
            rules: {
                required: u
            },
            render: ({
                field: {
                    onChange: u,
                    ...n
                },
                fieldState: a,
                formState: c
            }) => (0, o.jsxs)(o.Fragment, {
                children: [!t.some(t => t === e.formFieldId) && (0, o.jsx)(A, {
                    requiredText: e.requiredText,
                    hasError: void 0 !== a.error,
                    isRequired: e.isRequired,
                    ...n,
                    ...a,
                    ...c,
                    onChange: e => {
                        u(e), l(!r)
                    },
                    isSelected: r,
                    id: i,
                    name: i,
                    children: (0, o.jsxs)(F.default, {
                        className: "font-medium [a]:underline",
                        children: [s && (0, o.jsx)(b.PortableText, {
                            value: s,
                            components: s
                        }), d && d?.checkboxLabelText]
                    })
                }), e.chained && e.chained.map((t, d) => {
                    if (t.value === e.countryCode && t.dependant === e.formFieldId) return (0, o.jsx)(A, {
                        requiredText: e.requiredText,
                        hasError: void 0 !== a.error,
                        ...n,
                        ...a,
                        ...c,
                        onChange: e => {
                            u(e), l(!r)
                        },
                        isSelected: r,
                        id: i,
                        name: i,
                        children: (0, o.jsx)(F.default, {
                            className: "[a]:underline",
                            children: (0, o.jsx)(b.PortableText, {
                                value: s,
                                components: s
                            })
                        })
                    }, d)
                })]
            })
        })
    }], 829483);
    var E = e.i(852485),
        D = {};
    D = {
        "ar-AE": {
            buttonLabel: `\u{639}\u{631}\u{636} \u{627}\u{644}\u{645}\u{642}\u{62A}\u{631}\u{62D}\u{627}\u{62A}`,
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{62E}\u{64A}\u{627}\u{631}`,other:()=>`${t.number(e.optionCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`})} \u{645}\u{62A}\u{627}\u{62D}\u{629}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{627}\u{644}\u{645}\u{62C}\u{645}\u{648}\u{639}\u{629} \u{627}\u{644}\u{645}\u{62F}\u{62E}\u{644}\u{629} ${e.groupTitle}, \u{645}\u{639} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{62E}\u{64A}\u{627}\u{631}`,other:()=>`${t.number(e.groupCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:`, \u{645}\u{62D}\u{62F}\u{62F}`,other:""},e.isSelected)}`,
            listboxLabel: `\u{645}\u{642}\u{62A}\u{631}\u{62D}\u{627}\u{62A}`,
            selectedAnnouncement: e => `${e.optionText}\u{60C} \u{645}\u{62D}\u{62F}\u{62F}`
        },
        "bg-BG": {
            buttonLabel: `\u{41F}\u{43E}\u{43A}\u{430}\u{436}\u{438} \u{43F}\u{440}\u{435}\u{434}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{44F}`,
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{43E}\u{43F}\u{446}\u{438}\u{44F}`,other:()=>`${t.number(e.optionCount)} \u{43E}\u{43F}\u{446}\u{438}\u{438}`})} \u{43D}\u{430} \u{440}\u{430}\u{437}\u{43F}\u{43E}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{435}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{412}\u{44A}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{430} \u{433}\u{440}\u{443}\u{43F}\u{430} ${e.groupTitle}, \u{441} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{43E}\u{43F}\u{446}\u{438}\u{44F}`,other:()=>`${t.number(e.groupCount)} \u{43E}\u{43F}\u{446}\u{438}\u{438}`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:`, \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`,other:""},e.isSelected)}`,
            listboxLabel: `\u{41F}\u{440}\u{435}\u{434}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{44F}`,
            selectedAnnouncement: e => `${e.optionText}, \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`
        },
        "cs-CZ": {
            buttonLabel: `Zobrazit doporu\u{10D}en\xed`,
            countAnnouncement: (e, t) => `K dispozici ${t.plural(e.optionCount,{one:()=>`je ${t.number(e.optionCount)} mo\u{17E}nost`,other:()=>`jsou/je ${t.number(e.optionCount)} mo\u{17E}nosti/-\xed`})}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Zadan\xe1 skupina \u{201E}${e.groupTitle}\u{201C} ${t.plural(e.groupCount,{one:()=>`s ${t.number(e.groupCount)} mo\u{17E}nost\xed`,other:()=>`se ${t.number(e.groupCount)} mo\u{17E}nostmi`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:` (vybr\xe1no)`,other:""},e.isSelected)}`,
            listboxLabel: `N\xe1vrhy`,
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
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Eingetretene Gruppe ${e.groupTitle}, mit ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} Option`,other:()=>`${t.number(e.groupCount)} Optionen`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:`, ausgew\xe4hlt`,other:""},e.isSelected)}`,
            listboxLabel: "Empfehlungen",
            selectedAnnouncement: e => `${e.optionText}, ausgew\xe4hlt`
        },
        "el-GR": {
            buttonLabel: `\u{3A0}\u{3C1}\u{3BF}\u{3B2}\u{3BF}\u{3BB}\u{3AE} \u{3C0}\u{3C1}\u{3BF}\u{3C4}\u{3AC}\u{3C3}\u{3B5}\u{3C9}\u{3BD}`,
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}`,other:()=>`${t.number(e.optionCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AD}\u{3C2} `})} \u{3B4}\u{3B9}\u{3B1}\u{3B8}\u{3AD}\u{3C3}\u{3B9}\u{3BC}\u{3B5}\u{3C2}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{395}\u{3B9}\u{3C3}\u{3B1}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3BF}\u{3BC}\u{3AC}\u{3B4}\u{3B1} ${e.groupTitle}, \u{3BC}\u{3B5} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}`,other:()=>`${t.number(e.groupCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AD}\u{3C2}`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:`, \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF}`,other:""},e.isSelected)}`,
            listboxLabel: `\u{3A0}\u{3C1}\u{3BF}\u{3C4}\u{3AC}\u{3C3}\u{3B5}\u{3B9}\u{3C2}`,
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
            buttonLabel: `N\xe4yt\xe4 ehdotukset`,
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} vaihtoehto`,other:()=>`${t.number(e.optionCount)} vaihtoehdot`})} saatavilla.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Mentiin ryhm\xe4\xe4n ${e.groupTitle}, ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} vaihtoehdon`,other:()=>`${t.number(e.groupCount)} vaihtoehdon`})} kanssa.`,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", valittu",other:""},e.isSelected)}`,
            listboxLabel: "Ehdotukset",
            selectedAnnouncement: e => `${e.optionText}, valittu`
        },
        "fr-FR": {
            buttonLabel: "Afficher les suggestions",
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} option`,other:()=>`${t.number(e.optionCount)} options`})} disponible(s).`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Groupe ${e.groupTitle} rejoint, avec ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} option`,other:()=>`${t.number(e.groupCount)} options`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:`, s\xe9lectionn\xe9(s)`,other:""},e.isSelected)}`,
            listboxLabel: "Suggestions",
            selectedAnnouncement: e => `${e.optionText}, s\xe9lectionn\xe9`
        },
        "he-IL": {
            buttonLabel: `\u{5D4}\u{5E6}\u{5D2} \u{5D4}\u{5E6}\u{5E2}\u{5D5}\u{5EA}`,
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`\u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5EA} ${t.number(e.optionCount)}`,other:()=>`${t.number(e.optionCount)} \u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5D9}\u{5D5}\u{5EA}`})} \u{5D1}\u{5DE}\u{5E6}\u{5D1} \u{5D6}\u{5DE}\u{5D9}\u{5DF}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{5E0}\u{5DB}\u{5E0}\u{5E1} \u{5DC}\u{5E7}\u{5D1}\u{5D5}\u{5E6}\u{5D4} ${e.groupTitle}, \u{5E2}\u{5DD} ${t.plural(e.groupCount,{one:()=>`\u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5EA} ${t.number(e.groupCount)}`,other:()=>`${t.number(e.groupCount)} \u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5D9}\u{5D5}\u{5EA}`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:`, \u{5E0}\u{5D1}\u{5D7}\u{5E8}`,other:""},e.isSelected)}`,
            listboxLabel: `\u{5D4}\u{5E6}\u{5E2}\u{5D5}\u{5EA}`,
            selectedAnnouncement: e => `${e.optionText}, \u{5E0}\u{5D1}\u{5D7}\u{5E8}`
        },
        "hr-HR": {
            buttonLabel: `Prika\u{17E}i prijedloge`,
            countAnnouncement: (e, t) => `Dostupno jo\u{161}: ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcija`,other:()=>`${t.number(e.optionCount)} opcije/a`})}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Unesena skupina ${e.groupTitle}, s ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opcijom`,other:()=>`${t.number(e.groupCount)} opcije/a`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", odabranih",other:""},e.isSelected)}`,
            listboxLabel: "Prijedlozi",
            selectedAnnouncement: e => `${e.optionText}, odabrano`
        },
        "hu-HU": {
            buttonLabel: `Javaslatok megjelen\xedt\xe9se`,
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} lehet\u{151}s\xe9g`,other:()=>`${t.number(e.optionCount)} lehet\u{151}s\xe9g`})} \xe1ll rendelkez\xe9sre.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Bel\xe9pett a(z) ${e.groupTitle} csoportba, amely ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} lehet\u{151}s\xe9get`,other:()=>`${t.number(e.groupCount)} lehet\u{151}s\xe9get`})} tartalmaz. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:`, kijel\xf6lve`,other:""},e.isSelected)}`,
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
            buttonLabel: `\u{5019}\u{88DC}\u{3092}\u{8868}\u{793A}`,
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`,other:()=>`${t.number(e.optionCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`})}\u{3092}\u{5229}\u{7528}\u{3067}\u{304D}\u{307E}\u{3059}\u{3002}`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{5165}\u{529B}\u{3055}\u{308C}\u{305F}\u{30B0}\u{30EB}\u{30FC}\u{30D7} ${e.groupTitle}\u{3001}${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`,other:()=>`${t.number(e.groupCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`})}\u{3092}\u{542B}\u{3080}\u{3002}`,other:""},e.isGroupChange)}${e.optionText}${t.select({true:`\u{3001}\u{9078}\u{629E}\u{6E08}\u{307F}`,other:""},e.isSelected)}`,
            listboxLabel: `\u{5019}\u{88DC}`,
            selectedAnnouncement: e => `${e.optionText}\u{3001}\u{9078}\u{629E}\u{6E08}\u{307F}`
        },
        "ko-KR": {
            buttonLabel: `\u{C81C}\u{C548} \u{C0AC}\u{D56D} \u{D45C}\u{C2DC}`,
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)}\u{AC1C} \u{C635}\u{C158}`,other:()=>`${t.number(e.optionCount)}\u{AC1C} \u{C635}\u{C158}`})}\u{C744} \u{C0AC}\u{C6A9}\u{D560} \u{C218} \u{C788}\u{C2B5}\u{B2C8}\u{B2E4}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{C785}\u{B825}\u{D55C} \u{ADF8}\u{B8F9} ${e.groupTitle}, ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)}\u{AC1C} \u{C635}\u{C158}`,other:()=>`${t.number(e.groupCount)}\u{AC1C} \u{C635}\u{C158}`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:`, \u{C120}\u{D0DD}\u{B428}`,other:""},e.isSelected)}`,
            listboxLabel: `\u{C81C}\u{C548}`,
            selectedAnnouncement: e => `${e.optionText}, \u{C120}\u{D0DD}\u{B428}`
        },
        "lt-LT": {
            buttonLabel: `Rodyti pasi\u{16B}lymus`,
            countAnnouncement: (e, t) => `Yra ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} parinktis`,other:()=>`${t.number(e.optionCount)} parinktys (-i\u{173})`})}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{12E}vesta grup\u{117} ${e.groupTitle}, su ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} parinktimi`,other:()=>`${t.number(e.groupCount)} parinktimis (-i\u{173})`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", pasirinkta",other:""},e.isSelected)}`,
            listboxLabel: `Pasi\u{16B}lymai`,
            selectedAnnouncement: e => `${e.optionText}, pasirinkta`
        },
        "lv-LV": {
            buttonLabel: `R\u{101}d\u{12B}t ieteikumus`,
            countAnnouncement: (e, t) => `Pieejamo opciju skaits: ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcija`,other:()=>`${t.number(e.optionCount)} opcijas`})}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Ievad\u{12B}ta grupa ${e.groupTitle}, ar ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opciju`,other:()=>`${t.number(e.groupCount)} opcij\u{101}m`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:`, atlas\u{12B}ta`,other:""},e.isSelected)}`,
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
            buttonLabel: `Wy\u{15B}wietlaj sugestie`,
            countAnnouncement: (e, t) => `dost\u{119}pna/dost\u{119}pne(-nych) ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcja`,other:()=>`${t.number(e.optionCount)} opcje(-i)`})}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Do\u{142}\u{105}czono do grupy ${e.groupTitle}, z ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opcj\u{105}`,other:()=>`${t.number(e.groupCount)} opcjami`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", wybrano",other:""},e.isSelected)}`,
            listboxLabel: "Sugestie",
            selectedAnnouncement: e => `${e.optionText}, wybrano`
        },
        "pt-BR": {
            buttonLabel: `Mostrar sugest\xf5es`,
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} op\xe7\xe3o`,other:()=>`${t.number(e.optionCount)} op\xe7\xf5es`})} dispon\xedvel.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Grupo inserido ${e.groupTitle}, com ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} op\xe7\xe3o`,other:()=>`${t.number(e.groupCount)} op\xe7\xf5es`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", selecionado",other:""},e.isSelected)}`,
            listboxLabel: `Sugest\xf5es`,
            selectedAnnouncement: e => `${e.optionText}, selecionado`
        },
        "pt-PT": {
            buttonLabel: `Apresentar sugest\xf5es`,
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} op\xe7\xe3o`,other:()=>`${t.number(e.optionCount)} op\xe7\xf5es`})} dispon\xedvel.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Grupo introduzido ${e.groupTitle}, com ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} op\xe7\xe3o`,other:()=>`${t.number(e.groupCount)} op\xe7\xf5es`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", selecionado",other:""},e.isSelected)}`,
            listboxLabel: `Sugest\xf5es`,
            selectedAnnouncement: e => `${e.optionText}, selecionado`
        },
        "ro-RO": {
            buttonLabel: `Afi\u{219}are sugestii`,
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} op\u{21B}iune`,other:()=>`${t.number(e.optionCount)} op\u{21B}iuni`})} disponibile.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Grup ${e.groupTitle} introdus, cu ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} op\u{21B}iune`,other:()=>`${t.number(e.groupCount)} op\u{21B}iuni`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", selectat",other:""},e.isSelected)}`,
            listboxLabel: "Sugestii",
            selectedAnnouncement: e => `${e.optionText}, selectat`
        },
        "ru-RU": {
            buttonLabel: `\u{41F}\u{43E}\u{43A}\u{430}\u{437}\u{430}\u{442}\u{44C} \u{43F}\u{440}\u{435}\u{434}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{44F}`,
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,other:()=>`${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{43E}\u{432}`})} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{412}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{43D}\u{430}\u{44F} \u{433}\u{440}\u{443}\u{43F}\u{43F}\u{430} ${e.groupTitle}, \u{441} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{43E}\u{43C}`,other:()=>`${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{430}\u{43C}\u{438}`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:`, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{43C}\u{438}`,other:""},e.isSelected)}`,
            listboxLabel: `\u{41F}\u{440}\u{435}\u{434}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{44F}`,
            selectedAnnouncement: e => `${e.optionText}, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E}`
        },
        "sk-SK": {
            buttonLabel: `Zobrazi\u{165} n\xe1vrhy`,
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} mo\u{17E}nos\u{165}`,other:()=>`${t.number(e.optionCount)} mo\u{17E}nosti/-\xed`})} k dispoz\xedcii.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Zadan\xe1 skupina ${e.groupTitle}, s ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} mo\u{17E}nos\u{165}ou`,other:()=>`${t.number(e.groupCount)} mo\u{17E}nos\u{165}ami`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:`, vybrat\xe9`,other:""},e.isSelected)}`,
            listboxLabel: `N\xe1vrhy`,
            selectedAnnouncement: e => `${e.optionText}, vybrat\xe9`
        },
        "sl-SI": {
            buttonLabel: `Prika\u{17E}i predloge`,
            countAnnouncement: (e, t) => `Na voljo je ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcija`,other:()=>`${t.number(e.optionCount)} opcije`})}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Vnesena skupina ${e.groupTitle}, z ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opcija`,other:()=>`${t.number(e.groupCount)} opcije`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", izbrano",other:""},e.isSelected)}`,
            listboxLabel: "Predlogi",
            selectedAnnouncement: e => `${e.optionText}, izbrano`
        },
        "sr-SP": {
            buttonLabel: `Prika\u{17E}i predloge`,
            countAnnouncement: (e, t) => `Dostupno jo\u{161}: ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcija`,other:()=>`${t.number(e.optionCount)} opcije/a`})}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Unesena grupa ${e.groupTitle}, s ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opcijom`,other:()=>`${t.number(e.groupCount)} optione/a`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", izabranih",other:""},e.isSelected)}`,
            listboxLabel: "Predlozi",
            selectedAnnouncement: e => `${e.optionText}, izabrano`
        },
        "sv-SE": {
            buttonLabel: `Visa f\xf6rslag`,
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} alternativ`,other:()=>`${t.number(e.optionCount)} alternativ`})} tillg\xe4ngliga.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Ingick i gruppen ${e.groupTitle} med ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} alternativ`,other:()=>`${t.number(e.groupCount)} alternativ`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", valda",other:""},e.isSelected)}`,
            listboxLabel: `F\xf6rslag`,
            selectedAnnouncement: e => `${e.optionText}, valda`
        },
        "tr-TR": {
            buttonLabel: `\xd6nerileri g\xf6ster`,
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} se\xe7enek`,other:()=>`${t.number(e.optionCount)} se\xe7enekler`})} kullan\u{131}labilir.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`Girilen grup ${e.groupTitle}, ile ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} se\xe7enek`,other:()=>`${t.number(e.groupCount)} se\xe7enekler`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:`, se\xe7ildi`,other:""},e.isSelected)}`,
            listboxLabel: `\xd6neriler`,
            selectedAnnouncement: e => `${e.optionText}, se\xe7ildi`
        },
        "uk-UA": {
            buttonLabel: `\u{41F}\u{43E}\u{43A}\u{430}\u{437}\u{430}\u{442}\u{438} \u{43F}\u{440}\u{43E}\u{43F}\u{43E}\u{437}\u{438}\u{446}\u{456}\u{457}`,
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,other:()=>`${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{438}(-\u{456}\u{432})`})} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}.`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{412}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{430} \u{433}\u{440}\u{443}\u{43F}\u{430} ${e.groupTitle}, \u{437} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,other:()=>`${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{438}(-\u{456}\u{432})`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:`, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}`,other:""},e.isSelected)}`,
            listboxLabel: `\u{41F}\u{440}\u{43E}\u{43F}\u{43E}\u{437}\u{438}\u{446}\u{456}\u{457}`,
            selectedAnnouncement: e => `${e.optionText}, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}`
        },
        "zh-CN": {
            buttonLabel: `\u{663E}\u{793A}\u{5EFA}\u{8BAE}`,
            countAnnouncement: (e, t) => `\u{6709} ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{4E2A}\u{9009}\u{9879}`,other:()=>`${t.number(e.optionCount)} \u{4E2A}\u{9009}\u{9879}`})}\u{53EF}\u{7528}\u{3002}`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{8FDB}\u{5165}\u{4E86} ${e.groupTitle} \u{7EC4}\u{FF0C}\u{5176}\u{4E2D}\u{6709} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{4E2A}\u{9009}\u{9879}`,other:()=>`${t.number(e.groupCount)} \u{4E2A}\u{9009}\u{9879}`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:`, \u{5DF2}\u{9009}\u{62E9}`,other:""},e.isSelected)}`,
            listboxLabel: `\u{5EFA}\u{8BAE}`,
            selectedAnnouncement: e => `${e.optionText}, \u{5DF2}\u{9009}\u{62E9}`
        },
        "zh-TW": {
            buttonLabel: `\u{986F}\u{793A}\u{5EFA}\u{8B70}`,
            countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{9078}\u{9805}`,other:()=>`${t.number(e.optionCount)} \u{9078}\u{9805}`})} \u{53EF}\u{7528}\u{3002}`,
            focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{8F38}\u{5165}\u{7684}\u{7FA4}\u{7D44} ${e.groupTitle}, \u{6709} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{9078}\u{9805}`,other:()=>`${t.number(e.groupCount)} \u{9078}\u{9805}`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:`, \u{5DF2}\u{9078}\u{53D6}`,other:""},e.isSelected)}`,
            listboxLabel: `\u{5EFA}\u{8B70}`,
            selectedAnnouncement: e => `${e.optionText}, \u{5DF2}\u{9078}\u{53D6}`
        }
    };
    var T = e.i(776955),
        w = e.i(110950),
        k = e.i(557653),
        S = e.i(99236),
        j = e.i(303909),
        V = e.i(841531),
        B = e.i(517522),
        _ = e.i(890894),
        L = e.i(317446),
        O = e.i(892164),
        R = e.i(397195),
        I = e.i(248009),
        N = e.i(663728),
        P = e.i(320201),
        G = e.i(287279),
        q = e.i(710186),
        M = e.i(922623),
        K = e.i(305040),
        z = e.i(181492),
        U = e.i(662519),
        W = e.i(891010),
        Z = e.i(30734),
        H = e.i(338842),
        Q = e.i(381225),
        Y = e.i(77999),
        J = e.i(661013),
        X = e.i(441737),
        ee = e.i(87695),
        et = e.i(962924),
        eu = e.i(499351);
    let er = e => {
        let t = n.default.useRef(null),
            {
                popoverRef: u = t,
                isOpen: r,
                onClose: l,
                children: i
            } = e,
            {
                overlayProps: a
            } = (0, et.useOverlay)({
                isOpen: r,
                onClose: l,
                shouldCloseOnBlur: !0,
                isDismissable: !0
            }, u);
        return (0, o.jsx)(eu.FocusScope, {
            restoreFocus: !0,
            children: (0, o.jsxs)("div", {
                className: "absolute z-10 mt-[6px] w-full rounded-xl bg-white drop-shadow-xl",
                ...a,
                ref: u,
                children: [i, (0, o.jsx)(ee.DismissButton, {
                    onDismiss: l
                })]
            })
        })
    };
    var eo = e.i(127943),
        en = e.i(675333);
    let el = ({
            item: e,
            state: t
        }) => {
            let u = (0, n.useRef)(null),
                {
                    optionProps: r,
                    isSelected: l,
                    isFocused: i
                } = (0, en.useOption)({
                    key: e.key
                }, t, u),
                a = (0, h.default)("m-1 select-none rounded-lg bg-gray-200 pb-1 pl-2 pr-2 pt-1 text-sm font-semibold text-black cursor-pointer", {
                    "bg-gray-200": l || i,
                    "bg-transparent": !l && !i
                });
            return (0, o.jsx)("li", {
                ...r,
                ref: u,
                className: a,
                children: e.rendered
            })
        },
        ei = e => {
            let t = n.default.useRef(null),
                {
                    listBoxRef: u = t,
                    state: r
                } = e,
                {
                    listBoxProps: l
                } = (0, eo.useListBox)(e, r, u);
            return (0, o.jsx)("ul", {
                ...l,
                ref: u,
                className: "m-0 max-h-40 list-none overflow-auto p-0",
                children: [...r.collection].map(e => (0, o.jsx)(el, {
                    item: e,
                    state: r
                }, e.key))
            })
        };
    var ea = e.i(816667);
    let es = e => {
        var t;
        let u, r, l, i, {
                isDisabled: a,
                hasError: s,
                hasWarning: d
            } = e,
            {
                contains: c
            } = (t = {
                sensitivity: "base"
            }, u = (0, U.useCollator)({
                usage: "search",
                ...t
            }), r = (0, n.useCallback)((e, t) => 0 === t.length || (e = e.normalize("NFC"), t = t.normalize("NFC"), 0 === u.compare(e.slice(0, t.length), t)), [u]), l = (0, n.useCallback)((e, t) => 0 === t.length || (e = e.normalize("NFC"), t = t.normalize("NFC"), 0 === u.compare(e.slice(-t.length), t)), [u]), i = (0, n.useCallback)((e, t) => {
                if (0 === t.length) return !0;
                e = e.normalize("NFC");
                let r = 0,
                    o = (t = t.normalize("NFC")).length;
                for (; r + o <= e.length; r++) {
                    let n = e.slice(r, r + o);
                    if (0 === u.compare(t, n)) return !0
                }
                return !1
            }, [u]), (0, n.useMemo)(() => ({
                startsWith: r,
                endsWith: l,
                contains: i
            }), [r, l, i])),
            p = function(e) {
                var t, u, r, o, l, i, a;
                let {
                    defaultFilter: s,
                    menuTrigger: d = "input",
                    allowsEmptyCollection: c = !1,
                    allowsCustomValue: p,
                    shouldCloseOnBlur: f = !0
                } = e, [m, g] = (0, n.useState)(!1), [b, h] = (0, n.useState)(!1), [C, x] = (0, n.useState)(null), {
                    collection: y,
                    selectionManager: v,
                    selectedKey: $,
                    setSelectedKey: A,
                    selectedItem: F,
                    disabledKeys: E
                } = (0, W.useSingleSelectListState)({
                    ...e,
                    onSelectionChange: t => {
                        e.onSelectionChange && e.onSelectionChange(t), t === $ && (G(), R())
                    },
                    items: null != (u = e.items) ? u : e.defaultItems
                }), D = e.defaultInputValue;
                null == D && (D = null == $ ? "" : null != (o = null == (r = y.getItem($)) ? void 0 : r.textValue) ? o : "");
                let [T, w] = (0, H.useControlledState)(e.inputValue, D, e.onInputChange), k = (0, n.useMemo)(() => {
                    var t, u, r;
                    return null == e.items && s ? (t = y, u = T, r = s, new(0, Z.ListCollection)(function e(t, u, r, o) {
                        let n = [];
                        for (let l of u)
                            if ("section" === l.type && l.hasChildNodes) {
                                let u = e(t, (0, I.getChildNodes)(l, t), r, o);
                                [...u].some(e => "item" === e.type) && n.push({
                                    ...l,
                                    childNodes: u
                                })
                            } else "item" === l.type && o(l.textValue, r) ? n.push({
                                ...l
                            }) : "item" !== l.type && n.push({
                                ...l
                            });
                        return n
                    }(t, t, u, r))) : y
                }, [y, T, s, e.items]), [S, j] = (0, n.useState)(k), V = (0, n.useRef)("focus"), B = (0, Q.useOverlayTriggerState)({
                    ...e,
                    onOpenChange: t => {
                        e.onOpenChange && e.onOpenChange(t, t ? V.current : void 0), v.setFocused(t), t || v.setFocusedKey(null)
                    },
                    isOpen: void 0,
                    defaultOpen: void 0
                }), _ = (t = null, u) => {
                    let r = "manual" === u || "focus" === u && "focus" === d;
                    (c || k.size > 0 || r && y.size > 0 || e.items) && (r && !B.isOpen && void 0 === e.items && g(!0), V.current = u, x(t), B.open())
                }, L = (0, n.useCallback)(() => {
                    j(m ? y : k)
                }, [m, y, k]), O = (0, n.useCallback)((e = null) => {
                    B.isOpen && L(), x(e), B.toggle()
                }, [B, L]), R = (0, n.useCallback)(() => {
                    B.isOpen && (L(), B.close())
                }, [B, L]), [N, P] = (0, n.useState)(T), G = () => {
                    var e, t;
                    let u = null != $ && null != (t = null == (e = y.getItem($)) ? void 0 : e.textValue) ? t : "";
                    P(u), w(u)
                }, M = (0, n.useRef)(null != (i = null != (l = e.selectedKey) ? l : e.defaultSelectedKey) ? i : null), K = (0, n.useRef)(null != $ && null != (a = null == (t = y.getItem($)) ? void 0 : t.textValue) ? a : "");
                (0, n.useEffect)(() => {
                    var t, u;
                    b && (k.size > 0 || c) && !B.isOpen && T !== N && "manual" !== d && _(null, "input"), m || c || !B.isOpen || 0 !== k.size || R(), null != $ && $ !== M.current && R(), T !== N && (v.setFocusedKey(null), g(!1), "" === T && (void 0 === e.inputValue || void 0 === e.selectedKey) && A(null)), $ !== M.current && (void 0 === e.inputValue || void 0 === e.selectedKey) ? G() : N !== T && P(T);
                    let r = null != $ && null != (u = null == (t = y.getItem($)) ? void 0 : t.textValue) ? u : "";
                    b || null == $ || void 0 !== e.inputValue || $ !== M.current || K.current === r || (P(r), w(r)), M.current = $, K.current = r
                });
                let z = (0, q.useFormValidationState)({
                        ...e,
                        value: (0, n.useMemo)(() => ({
                            inputValue: T,
                            selectedKey: $
                        }), [T, $])
                    }),
                    U = () => {
                        M.current = null, A(null), R()
                    },
                    Y = () => {
                        if (void 0 !== e.selectedKey && void 0 !== e.inputValue) {
                            var t, u, r;
                            null == (t = e.onSelectionChange) || t.call(e, $), P(null != $ && null != (r = null == (u = y.getItem($)) ? void 0 : u.textValue) ? r : ""), R()
                        } else G(), R()
                    },
                    J = () => {
                        if (p) {
                            var e, t;
                            T === (null != $ && null != (t = null == (e = y.getItem($)) ? void 0 : e.textValue) ? t : "") ? Y() : U()
                        } else Y()
                    },
                    X = (0, n.useRef)(T),
                    ee = (0, n.useMemo)(() => B.isOpen ? m ? y : k : S, [B.isOpen, y, k, m, S]);
                return {
                    ...z,
                    ...B,
                    focusStrategy: C,
                    toggle: (t = null, u) => {
                        let r = "manual" === u || "focus" === u && "focus" === d;
                        (c || k.size > 0 || r && y.size > 0 || e.items || B.isOpen) && (r && !B.isOpen && void 0 === e.items && g(!0), B.isOpen || (V.current = u), O(t))
                    },
                    open: _,
                    close: J,
                    selectionManager: v,
                    selectedKey: $,
                    setSelectedKey: A,
                    disabledKeys: E,
                    isFocused: b,
                    setFocused: t => {
                        t ? (X.current = T, "focus" !== d || e.isReadOnly || _(null, "focus")) : (f && J(), T !== X.current && z.commitValidation()), h(t)
                    },
                    selectedItem: F,
                    collection: ee,
                    inputValue: T,
                    setInputValue: w,
                    commit: () => {
                        B.isOpen && null != v.focusedKey ? $ === v.focusedKey ? Y() : A(v.focusedKey) : J()
                    },
                    revert: () => {
                        p && null == $ ? U() : Y()
                    }
                }
            }({
                ...e,
                defaultFilter: c
            }),
            f = (0, n.useRef)(null),
            m = (0, n.useRef)(null),
            g = (0, n.useRef)(null),
            b = (0, n.useRef)(null),
            {
                buttonProps: C,
                inputProps: x,
                listBoxProps: y,
                labelProps: v
            } = function(e, t) {
                var u, r, o, l, i;
                let a, s, {
                        buttonRef: d,
                        popoverRef: c,
                        inputRef: p,
                        listBoxRef: f,
                        keyboardDelegate: m,
                        layoutDelegate: g,
                        shouldFocusWrap: b,
                        isReadOnly: h,
                        isDisabled: C
                    } = e,
                    x = (0, n.useRef)(null);
                d = null != d ? d : x;
                let y = (0, M.useLocalizedStringFormatter)((o = D) && o.__esModule ? o.default : o, "@react-aria/combobox"),
                    {
                        menuTriggerProps: v,
                        menuProps: $
                    } = (0, K.useMenuTrigger)({
                        type: "listbox",
                        isDisabled: C || h
                    }, t, d);
                k.listData.set(t, {
                    id: $.id
                });
                let {
                    collection: A
                } = t, {
                    disabledKeys: F
                } = t.selectionManager, E = (0, n.useMemo)(() => m || new(0, P.ListKeyboardDelegate)({
                    collection: A,
                    disabledKeys: F,
                    ref: f,
                    layoutDelegate: g
                }), [m, g, A, F, f]), {
                    collectionProps: U
                } = (0, G.useSelectableCollection)({
                    selectionManager: t.selectionManager,
                    keyboardDelegate: E,
                    disallowTypeAhead: !0,
                    disallowEmptySelection: !0,
                    shouldFocusWrap: b,
                    ref: p,
                    isVirtualized: !0
                }), W = (0, S.useRouter)(), {
                    isInvalid: Z,
                    validationErrors: H,
                    validationDetails: Q
                } = t.displayValidation, {
                    labelProps: Y,
                    inputProps: J,
                    descriptionProps: X,
                    errorMessageProps: ee
                } = (0, z.useTextField)({
                    ...e,
                    onChange: t.setInputValue,
                    onKeyDown: h ? e.onKeyDown : (0, j.chain)(t.isOpen && U.onKeyDown, u => {
                        if (!u.nativeEvent.isComposing) switch (u.key) {
                            case "Enter":
                            case "Tab":
                                if (t.isOpen && "Enter" === u.key && u.preventDefault(), t.isOpen && f.current && null != t.selectionManager.focusedKey && t.selectionManager.isLink(t.selectionManager.focusedKey)) {
                                    let e = f.current.querySelector(`[data-key="${CSS.escape(t.selectionManager.focusedKey.toString())}"]`);
                                    if ("Enter" === u.key && e instanceof HTMLAnchorElement) {
                                        let r = t.collection.getItem(t.selectionManager.focusedKey);
                                        r && W.open(e, u, r.props.href, r.props.routerOptions)
                                    }
                                    t.close()
                                } else t.commit();
                                break;
                            case "Escape":
                                (null !== t.selectedKey || "" === t.inputValue || e.allowsCustomValue) && u.continuePropagation(), t.revert();
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
                    onBlur: u => {
                        var r;
                        let o = (null == d ? void 0 : d.current) && d.current === u.relatedTarget,
                            n = null == (r = c.current) ? void 0 : r.contains(u.relatedTarget);
                        o || n || (e.onBlur && e.onBlur(u), t.setFocused(!1))
                    },
                    value: t.inputValue,
                    onFocus: u => {
                        t.isFocused || (e.onFocus && e.onFocus(u), t.setFocused(!0))
                    },
                    autoComplete: "off",
                    validate: void 0,
                    [q.privateValidationStateProp]: t
                }, p), et = (0, V.useLabels)({
                    id: v.id,
                    "aria-label": y.format("buttonLabel"),
                    "aria-labelledby": e["aria-labelledby"] || Y.id
                }), eu = (0, V.useLabels)({
                    id: $.id,
                    "aria-label": y.format("listboxLabel"),
                    "aria-labelledby": e["aria-labelledby"] || Y.id
                }), er = (0, n.useRef)(0), eo = null != t.selectionManager.focusedKey && t.isOpen ? t.collection.getItem(t.selectionManager.focusedKey) : void 0, en = null != (u = null == eo ? void 0 : eo.parentKey) ? u : null, el = null != (r = t.selectionManager.focusedKey) ? r : null, ei = (0, n.useRef)(en), ea = (0, n.useRef)(el);
                (0, n.useEffect)(() => {
                    if ((0, B.isAppleDevice)() && null != eo && null != el && el !== ea.current) {
                        var e;
                        let u = t.selectionManager.isSelected(el),
                            r = null != en ? t.collection.getItem(en) : null,
                            o = (null == r ? void 0 : r["aria-label"]) || ("string" == typeof(null == r ? void 0 : r.rendered) ? r.rendered : "") || "",
                            n = y.format("focusAnnouncement", {
                                isGroupChange: null != (e = r && en !== ei.current) && e,
                                groupTitle: o,
                                groupCount: r ? [...(0, I.getChildNodes)(r, t.collection)].length : 0,
                                optionText: eo["aria-label"] || eo.textValue || "",
                                isSelected: u
                            });
                        (0, T.announce)(n)
                    }
                    ei.current = en, ea.current = el
                });
                let es = (0, N.getItemCount)(t.collection),
                    ed = (0, n.useRef)(es),
                    ec = (0, n.useRef)(t.isOpen);
                (0, n.useEffect)(() => {
                    let e = t.isOpen !== ec.current && (null == t.selectionManager.focusedKey || (0, B.isAppleDevice)());
                    if (t.isOpen && (e || es !== ed.current)) {
                        let e = y.format("countAnnouncement", {
                            optionCount: es
                        });
                        (0, T.announce)(e)
                    }
                    ed.current = es, ec.current = t.isOpen
                });
                let ep = (0, n.useRef)(t.selectedKey);
                return (0, n.useEffect)(() => {
                    if ((0, B.isAppleDevice)() && t.isFocused && t.selectedItem && t.selectedKey !== ep.current) {
                        let e = t.selectedItem["aria-label"] || t.selectedItem.textValue || "",
                            u = y.format("selectedAnnouncement", {
                                optionText: e
                            });
                        (0, T.announce)(u)
                    }
                    ep.current = t.selectedKey
                }), (0, n.useEffect)(() => {
                    if (t.isOpen) return (0, w.ariaHideOutside)([p.current, c.current].filter(e => null != e))
                }, [t.isOpen, p, c]), l = () => {
                    !eo && p.current && (0, _.getActiveElement)((0, L.getOwnerDocument)(p.current)) === p.current && (0, R.dispatchVirtualFocus)(p.current, null)
                }, i = [eo], a = (0, n.useRef)(!0), s = (0, n.useRef)(null), (0, n.useEffect)(() => (a.current = !0, () => {
                    a.current = !1
                }), []), (0, n.useEffect)(() => {
                    let e = s.current;
                    a.current ? a.current = !1 : (!e || i.some((t, u) => !Object.is(t, e[u]))) && l(), s.current = i
                }, i), {
                    labelProps: Y,
                    buttonProps: {
                        ...v,
                        ...et,
                        excludeFromTabOrder: !0,
                        preventFocusOnPress: !0,
                        onPress: e => {
                            if ("touch" === e.pointerType) {
                                var u;
                                null == (u = p.current) || u.focus(), t.toggle(null, "manual")
                            }
                        },
                        onPressStart: e => {
                            if ("touch" !== e.pointerType) {
                                var u;
                                null == (u = p.current) || u.focus(), t.toggle("keyboard" === e.pointerType || "virtual" === e.pointerType ? "first" : null, "manual")
                            }
                        },
                        isDisabled: C || h
                    },
                    inputProps: (0, O.mergeProps)(J, {
                        role: "combobox",
                        "aria-expanded": v["aria-expanded"],
                        "aria-controls": t.isOpen ? $.id : void 0,
                        "aria-autocomplete": "list",
                        "aria-activedescendant": eo ? (0, k.getItemId)(t, eo.key) : void 0,
                        onTouchEnd: e => {
                            var u, r;
                            if (C || h) return;
                            if (e.timeStamp - er.current < 500) {
                                e.preventDefault(), null == (u = p.current) || u.focus();
                                return
                            }
                            let o = e.target.getBoundingClientRect(),
                                n = e.changedTouches[0],
                                l = Math.ceil(o.left + .5 * o.width),
                                i = Math.ceil(o.top + .5 * o.height);
                            n.clientX === l && n.clientY === i && (e.preventDefault(), null == (r = p.current) || r.focus(), t.toggle(null, "manual"), er.current = e.timeStamp)
                        },
                        autoCorrect: "off",
                        spellCheck: "false"
                    }),
                    listBoxProps: (0, O.mergeProps)($, eu, {
                        autoFocus: t.focusStrategy || !0,
                        shouldUseVirtualFocus: !0,
                        shouldSelectOnPressUp: !0,
                        shouldFocusOnHover: !0,
                        linkBehavior: "selection"
                    }),
                    descriptionProps: X,
                    errorMessageProps: ee,
                    isInvalid: Z,
                    validationErrors: H,
                    validationDetails: Q
                }
            }({
                ...e,
                inputRef: m,
                buttonRef: f,
                listBoxRef: g,
                popoverRef: b
            }, p),
            {
                buttonProps: $
            } = (0, Y.useButton)(C, f),
            A = (0, h.default)("stroke-gray-900 group-hover/select:stroke-gray-800 dark:group-hover/select:stroke-gray-200 transition-all ease-out duration-400", {
                "rotate-180 stroke-gray-900 ": p.isOpen
            }),
            F = (0, h.default)("rounded-lg w-full border border-gray-200 outline-blue focus:ring-3 focus:ring-blue-dark focus:outline-blue focus:outline-offset-0 focus:border-none transition-all ease-out duration-400", "text-gray-900 dark:text-gray-400 dark:text-white", "placeholder-gray-600 dark:placeholder-gray-400", {
                "bg-gray-100 dark:bg-gray-800 cursor-not-allowed": a,
                "border-yellow-500 dark:border-yellow-500 border-2": d,
                "border-red-500 dark:border-red-500 border-2": s
            }, {
                "bg-gray-50 dark:bg-gray-900": !a,
                "border-gray-400 hover:border-gray-900 dark:border-gray-500 dark:hover:border-white": !s && !d
            });
        return (0, o.jsxs)("div", {
            className: "inline-flex w-full flex-col",
            children: [(0, o.jsxs)("div", {
                className: "flex justify-between",
                children: [(0, o.jsx)("label", {
                    ...v,
                    className: "inline-block pb-2",
                    children: e.label
                }), e.required && (0, o.jsx)("span", {
                    className: "text-sm text-gray-400",
                    children: e.requiredText
                })]
            }), (0, o.jsxs)("div", {
                className: "relative inline-block w-full",
                children: [(0, o.jsx)("input", {
                    ...x,
                    ref: m,
                    className: F
                }), (0, o.jsx)("button", {
                    className: "absolute top-0 right-0 bottom-0 h-10 px-2 text-gray-900",
                    ...$,
                    ref: f,
                    children: (0, o.jsx)("span", {
                        "aria-hidden": "true",
                        children: (0, o.jsx)(J.default, {
                            className: A
                        })
                    })
                }), e.helpText && (0, o.jsx)(X.default, {
                    helperText: e.helpText,
                    hasError: e.hasError,
                    hasWarning: e.hasWarning
                }), p.isOpen && (0, o.jsx)(er, {
                    popoverRef: b,
                    isOpen: p.isOpen,
                    onClose: p.close,
                    children: (0, o.jsx)(ei, {
                        ...y,
                        listBoxRef: g,
                        state: p
                    })
                })]
            })]
        })
    };
    es.Item = ea.Item;
    var ed = e.i(475200);
    e.s(["default", 0, e => {
        let {
            visibleConditions: t,
            visibleCountry: u,
            countryCode: r
        } = e, i = (0, ed.default)(), d = e?.chained?.map(e => e.dependant) || [];
        (0, n.useEffect)(() => {
            e.defaultValue && e.setValue(e.formFieldId, e.defaultValue, {
                shouldValidate: !0
            })
        }, [e.defaultValue, e.setValue, e.formFieldId]);
        let c = (0, a.useWatch)({
                control: e.control,
                name: t?.map(({
                    fieldId: e
                }) => e) || [],
                defaultValue: t?.reduce((t, {
                    fieldId: u
                }) => (t[u] = e.defaultValue, t), {})
            }),
            f = s(t, c);
        (0, n.useEffect)(() => {
            f || e.control.unregister(e.formFieldId)
        }, [f, e.control, e.formFieldId]);
        let m = t => {
                e.setValue(e.formFieldId, t, {
                    shouldValidate: !0
                })
            },
            g = e => (0, o.jsx)(es.Item, {
                children: e?.label || e?.option
            }, e.value),
            b = t => {
                e.setValue(e.formFieldId, t, {
                    shouldValidate: !0
                })
            },
            h = e => (0, o.jsx)(es.Item, {
                children: e.label
            }, e.value);
        return f && p(u, r) ? (0, o.jsx)(a.Controller, {
            name: e.formFieldId,
            control: e.control,
            rules: {
                required: e.isRequired
            },
            render: ({
                fieldState: t
            }) => (0, o.jsxs)(o.Fragment, {
                children: [!d.some(t => t === e.formFieldId) && (i ? (0, o.jsxs)("div", {
                    className: "inline-flex w-full flex-col",
                    children: [(0, o.jsxs)("label", {
                        className: "flex items-center justify-between pb-2",
                        children: [(0, o.jsx)("span", {
                            children: e.label
                        }), e.isRequired && (0, o.jsx)("span", {
                            className: "text-sm text-gray-400",
                            children: e.requiredText
                        })]
                    }), (0, o.jsx)(E.default, {
                        isDisabled: e.isDisabled,
                        selectedKey: e.defaultValue,
                        label: e.label,
                        name: e.formFieldId,
                        placeholder: e.placeholder,
                        onSelectionChange: m,
                        className: t.error ? "rounded-lg border-2 border-red-500 bg-white p-2" : "rounded-lg border border-gray-300 bg-white p-2",
                        children: (e?.dropdownOptionsFromReference?.options || e?.dropdownOptions || []).map(t => {
                            let u, r;
                            return u = void 0 !== t.value ? t.value : t.key || t.toString(), (r = t.label || t.option || t.text || t.toString() || e.placeholder) && "string" != typeof r && (r = u), (0, o.jsx)(E.default.Item, {
                                children: r
                            }, u)
                        })
                    }), t.error && (0, o.jsx)(X.default, {
                        helperText: (0, l.default)(e.helpText, e.errorText, e.warningText, void 0 !== t.error, !1),
                        hasError: void 0 !== t.error
                    })]
                }) : (0, o.jsx)(es, {
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
                })), e.chained && e.chained.map((u, r) => u.value === e.countryCode && u.dependant === e.formFieldId ? i ? (0, o.jsxs)("div", {
                    className: "inline-flex w-full flex-col",
                    children: [(0, o.jsxs)("label", {
                        className: "flex items-center justify-between pb-2",
                        children: [(0, o.jsx)("span", {
                            children: e.label
                        }), e.isRequired && (0, o.jsx)("span", {
                            className: "text-sm text-gray-400",
                            children: e.requiredText
                        })]
                    }), (0, o.jsx)(E.default, {
                        isDisabled: e.isDisabled,
                        selectedKey: e.defaultValue,
                        label: e.label,
                        name: e.formFieldId,
                        placeholder: e.placeholder,
                        onSelectionChange: b,
                        className: t.error ? "rounded-lg border-2 border-red-500 bg-white p-2" : "rounded-lg border border-gray-300 bg-white p-2",
                        children: (e?.dropdownOptionsFromReference?.options || e?.dropdownOptions || []).map(t => {
                            let u, r;
                            return u = void 0 !== t.value ? t.value : t.key || t.toString(), r = t.label || t.text || t.toString() || e.placeholder, (0, o.jsx)(E.default.Item, {
                                children: r
                            }, u)
                        })
                    }), t.error && (0, o.jsx)(X.default, {
                        helperText: (0, l.default)(e.helpText, e.errorText, e.warningText, void 0 !== t.error, !1),
                        hasError: void 0 !== t.error
                    })]
                }, r) : (0, o.jsx)(es, {
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
                }, r) : null)]
            })
        }) : null
    }], 662380);
    let ec = {
        marks: {
            link: ({
                children: e,
                value: t
            }) => {
                let u = t?.href || "#",
                    r = /^https?:\/\//i.test(u);
                return (0, o.jsx)("a", {
                    href: u,
                    ...r ? {
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
        visibleConditions: u,
        visibleCountry: r,
        countryCode: n,
        className: l
    }) => {
        let i = (0, a.useWatch)({
            control: e,
            name: u?.map(({
                fieldId: e
            }) => e) || []
        });
        if (!s(u, i) || !p(r, n)) return null;
        let d = t?.text;
        return !d || Array.isArray(d) && 0 === d.length ? null : (0, o.jsx)(F.default, {
            className: l,
            children: (0, o.jsx)(b.PortableText, {
                value: d,
                components: ec
            })
        })
    }], 179695)
}, 394261, e => {
    "use strict";
    var t = e.i(615167);
    let u = (0, e.i(145158).forwardRef)(({
        onSubmit: e,
        children: u
    }, r) => (0, t.jsx)("form", {
        ref: r,
        onSubmit: e,
        className: "flex flex-col",
        children: u
    }));
    u.displayName = "Form", e.s(["default", 0, u], 394261)
}, 545487, e => {
    "use strict";
    var t = e.i(615167),
        u = e.i(145158);
    let r = (0, u.createContext)({
        isGated: !1,
        setIsGated: () => {},
        formSubmitted: !1,
        setFormSubmitted: () => {}
    });
    e.s(["ResourcesDetailContextProvider", 0, ({
        children: e
    }) => {
        let [o, n] = (0, u.useState)(!1), [l, i] = (0, u.useState)(!1);
        return (0, t.jsx)(r.Provider, {
            value: {
                isGated: l,
                setIsGated: i,
                formSubmitted: o,
                setFormSubmitted: n
            },
            children: e
        })
    }, "useResourcesDetailContext", 0, () => (0, u.useContext)(r)])
}, 537251, e => {
    "use strict";
    var t = e.i(145158),
        u = e.i(677278),
        r = e.i(239273),
        o = e.i(545487),
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
            [C] = (0, r.default)("ELOQUA"),
            {
                setFormSubmitted: x
            } = (0, o.useResourcesDetailContext)(),
            y = (0, t.useRef)(void 0),
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
            if (C) {
                b(!0);
                let e = setInterval(() => {
                    v.current++, void 0 !== window._elqQ && (window._elqQ.push(["elqDataLookup", escape("7cd261a6ba06486b88648045c9069652"), ""]), clearInterval(e)), 50 === v.current && (b(!1), clearInterval(e))
                }, 100);
                y.current = e
            }
            return () => {
                clearInterval(y.current)
            }
        }, [C]);
        let E = (0, t.useCallback)(e => {
            if (s) return;
            let t = {};
            t.elqCustomerGUID = C?.split("&")[0]?.split("GUID=")[1] || "", t.emailAddress = e;
            let {
                emailConfirmation: r,
                gcid: o,
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
                    emailConfirmation: r,
                    grow: !0,
                    gcid: o,
                    ghandler: l,
                    growDivision: i,
                    growDepartment: c
                } : a
            }, fetch("https://create.unity.com/e/f2", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams(Object.entries(t).filter(([e, t]) => void 0 !== t).reduce((e, [t, u]) => (e[t] = u, e), {})).toString()
            }).then(() => {
                (0, n.default)({
                    properties: {
                        form_action: "submitted_blind",
                        form_id: t.elqFormID,
                        form_name: t.elqFormName,
                        form_customer_id: t.elqCustomerGUID
                    }
                }), x(!0)
            }).catch(e => u.captureException(e)).finally(() => {
                b(!1)
            })
        }, [s, x, C, h, p, f, a, d]);
        return (0, t.useEffect)(() => {
            let e;
            return g && (e = setTimeout(() => {
                b(!1)
            }, 2e3)), () => {
                clearTimeout(e)
            }
        }, [g]), (0, t.useEffect)(() => (window.LogElqValue = E, window.SetElqContent = () => {
            let e = setInterval(() => {
                A.current++, window.GetElqContentPersonalizationValue && (E(window.GetElqContentPersonalizationValue("V_Email_Address")), clearInterval(e)), 50 === A.current && clearInterval(e)
            }, 100);
            $.current = e
        }, () => {
            clearInterval($.current)
        }), [E]), {
            extraFields: f,
            loading: g
        }
    }])
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2385af26-3a76-5bfd-89ae-b3cb8c634506")
    } catch (e) {}
}();
//# debugId=2385af26-3a76-5bfd-89ae-b3cb8c634506