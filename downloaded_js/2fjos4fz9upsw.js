(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 108051, e => {
    "use strict";
    e.i(913836);
    var t = e.i(409781),
        a = e.i(393335);
    let r = "https://api2.amplitude.com/2/httpapi";

    function n() {
        let e = document.cookie.split("; ").find(e => e.startsWith("experiment_exposure="));
        if (e) try {
            return JSON.parse(decodeURIComponent(e.split("=")[1]))
        } catch (e) {
            console.error("Error parsing experiment cookie:", e);
            return
        }
    }

    function i(e) {
        let t = n();
        if (t)
            for (let {
                    key: a,
                    variant: r,
                    deviceId: n,
                    userId: i
                }
                of t[e] || []) a && r && (n || i) && s(a, r, n, i)
    }

    function s(e, t, a, n) {
        e && t && (a || n) && fetch(r, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                api_key: "a331ddf18d0a0ba0070793c7e48f7a2a",
                events: [{
                    event_type: "$exposure",
                    ...n && {
                        user_id: n
                    },
                    ...a && {
                        device_id: a
                    },
                    event_properties: {
                        flag_key: e,
                        variant: t
                    }
                }]
            })
        }).then(e => (e.ok || console.warn("Exposure event failed", e.statusText), e.json())).catch(e => {
            console.warn("Error setting exposure event", e)
        })
    }
    e.s(["AMPLITUDE_ENDPOINT", 0, r, "default", 0, function() {
        let e = (0, a.usePathname)();
        return (0, t.useEffect)(() => {
            i(e)
        }, [e]), null
    }, "getExperimentFromCookie", 0, n, "sendExposureEvent", 0, s, "trackExposureOnPageView", 0, i])
}, 321950, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(409781);
    let r = (0, a.createContext)({});
    e.s(["GenesisSessionProvider", 0, ({
        children: e
    }) => {
        let [n, i] = (0, a.useState)({
            ...JSON.parse(sessionStorage.getItem("UNITY_SESSION") || "{}")
        });
        return (0, t.jsx)(r.Provider, {
            value: {
                genesisSession: n,
                setGenesisSession: i
            },
            children: e
        })
    }, "useGenesisSession", 0, () => (0, a.useContext)(r)])
}, 849141, e => {
    "use strict";
    e.i(913836);
    let t = async () => {
        let e = await fetch("https://api.unity.com/v1/oauth2/authorize/logined-users", {
                credentials: "include"
            }),
            t = await e.json();
        if (!e.ok) throw Error(`Fetching user failed with status ${e.status}. Reason: ${JSON.stringify(t.details)}`);
        return t.model
    };
    e.s(["getUserFromGenesis", 0, t])
}, 294783, e => {
    "use strict";
    var t = e.i(409781),
        a = e.i(848662);
    let r = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M192,64V168L88,64Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M192,56H88a8,8,0,0,0-5.66,13.66L128.69,116,58.34,186.34a8,8,0,0,0,11.32,11.32L140,127.31l46.34,46.35A8,8,0,0,0,200,168V64A8,8,0,0,0,192,56Zm-8,92.69-38.34-38.34h0L107.31,72H184Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M200,64V168a8,8,0,0,1-13.66,5.66L140,127.31,69.66,197.66a8,8,0,0,1-11.32-11.32L128.69,116,82.34,69.66A8,8,0,0,1,88,56H192A8,8,0,0,1,200,64Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M196,64V168a4,4,0,0,1-8,0V73.66L66.83,194.83a4,4,0,0,1-5.66-5.66L182.34,68H88a4,4,0,0,1,0-8H192A4,4,0,0,1,196,64Z"
            }))]
        ]),
        n = t.forwardRef((e, n) => t.createElement(a.default, {
            ref: n,
            ...e,
            weights: r
        }));
    n.displayName = "ArrowUpRightIcon", e.s(["ArrowUpRight", 0, n, "ArrowUpRightIcon", 0, n], 294783)
}, 752873, e => {
    "use strict";
    var t = e.i(409781),
        a = e.i(848662);
    let r = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M176,128,96,208V48Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"
            }))]
        ]),
        n = t.forwardRef((e, n) => t.createElement(a.default, {
            ref: n,
            ...e,
            weights: r
        }));
    n.displayName = "CaretRightIcon", e.s(["CaretRight", 0, n, "CaretRightIcon", 0, n], 752873)
}, 978953, e => {
    "use strict";
    var t = e.i(409781),
        a = e.i(848662);
    let r = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M216,64V192H40V64Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM40,68H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z"
            }))]
        ]),
        n = t.forwardRef((e, n) => t.createElement(a.default, {
            ref: n,
            ...e,
            weights: r
        }));
    n.displayName = "ListIcon", e.s(["List", 0, n, "ListIcon", 0, n], 978953)
}, 935862, e => {
    "use strict";
    var t = e.i(409781),
        a = e.i(848662);
    let r = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z"
            }))]
        ]),
        n = t.forwardRef((e, n) => t.createElement(a.default, {
            ref: n,
            ...e,
            weights: r
        }));
    n.displayName = "MagnifyingGlassIcon", e.s(["MagnifyingGlass", 0, n, "MagnifyingGlassIcon", 0, n], 935862)
}, 686376, e => {
    "use strict";
    var t = e.i(409781),
        a = e.i(848662);
    let r = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M124,216a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V40A12,12,0,0,1,48,28h64a12,12,0,0,1,0,24H60V204h52A12,12,0,0,1,124,216Zm108.49-96.49-40-40a12,12,0,0,0-17,17L195,116H112a12,12,0,0,0,0,24h83l-19.52,19.51a12,12,0,0,0,17,17l40-40A12,12,0,0,0,232.49,119.51Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M224,56V200a16,16,0,0,1-16,16H48V40H208A16,16,0,0,1,224,56Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40A8,8,0,0,0,176,88v32H112a8,8,0,0,0,0,16h64v32a8,8,0,0,0,13.66,5.66l40-40A8,8,0,0,0,229.66,122.34Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M118,216a6,6,0,0,1-6,6H48a6,6,0,0,1-6-6V40a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H54V210h58A6,6,0,0,1,118,216Zm110.24-92.24-40-40a6,6,0,0,0-8.48,8.48L209.51,122H112a6,6,0,0,0,0,12h97.51l-29.75,29.76a6,6,0,1,0,8.48,8.48l40-40A6,6,0,0,0,228.24,123.76Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M116,216a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H52V212h60A4,4,0,0,1,116,216Zm110.83-90.83-40-40a4,4,0,0,0-5.66,5.66L214.34,124H112a4,4,0,0,0,0,8H214.34l-33.17,33.17a4,4,0,0,0,5.66,5.66l40-40A4,4,0,0,0,226.83,125.17Z"
            }))]
        ]),
        n = t.forwardRef((e, n) => t.createElement(a.default, {
            ref: n,
            ...e,
            weights: r
        }));
    n.displayName = "SignOutIcon", e.s(["SignOut", 0, n, "SignOutIcon", 0, n], 686376)
}, 134685, e => {
    "use strict";
    var t = e.i(409781),
        a = e.i(848662);
    let r = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M236,96a12,12,0,0,0-.44-3.3L221.2,42.51A20.08,20.08,0,0,0,202,28H54A20.08,20.08,0,0,0,34.8,42.51L20.46,92.7A12,12,0,0,0,20,96h0v16a43.94,43.94,0,0,0,16,33.92V216a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V145.92A43.94,43.94,0,0,0,236,112V96ZM57.05,52H199l9.14,32H47.91Zm91,56v4a20,20,0,0,1-40,0v-4ZM53,128.71A20,20,0,0,1,44,112v-4H84v4a20,20,0,0,1-20,20,19.76,19.76,0,0,1-9.07-2.2A11.54,11.54,0,0,0,53,128.71ZM196,204H60V155.81c1.32.12,2.65.19,4,.19a43.86,43.86,0,0,0,32-13.85,43.89,43.89,0,0,0,64,0A43.86,43.86,0,0,0,192,156c1.35,0,2.68-.07,4-.19Zm16-92a20,20,0,0,1-9,16.71,11.66,11.66,0,0,0-1.88,1.09A20,20,0,0,1,172,112v-4h40Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M224,96v16a32,32,0,0,1-64,0V96H96v16a32,32,0,0,1-64,0V96L46.34,45.8A8,8,0,0,1,54,40H202a8,8,0,0,1,7.69,5.8Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M231.69,93.81,217.35,43.6A16.07,16.07,0,0,0,202,32H54A16.07,16.07,0,0,0,38.65,43.6L24.31,93.81A7.94,7.94,0,0,0,24,96v16a40,40,0,0,0,16,32v72a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V144a40,40,0,0,0,16-32V96A7.94,7.94,0,0,0,231.69,93.81ZM54,48H202l11.42,40H42.61Zm98,56v8a24,24,0,0,1-48,0v-8ZM51.06,132.2A24,24,0,0,1,40,112v-8H88v8a24,24,0,0,1-35.12,21.26A7.88,7.88,0,0,0,51.06,132.2ZM200,208H56V151.2a40.57,40.57,0,0,0,8,.8,40,40,0,0,0,32-16,40,40,0,0,0,64,0,40,40,0,0,0,32,16,40.57,40.57,0,0,0,8-.8Zm16-96a24,24,0,0,1-11.07,20.2,8.08,8.08,0,0,0-1.8,1.05A24,24,0,0,1,168,112v-8h48Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M231.69,93.81,217.35,43.6A16.07,16.07,0,0,0,202,32H54A16.07,16.07,0,0,0,38.65,43.6L24.31,93.81A7.94,7.94,0,0,0,24,96v16a40,40,0,0,0,16,32v72a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V144a40,40,0,0,0,16-32V96A7.94,7.94,0,0,0,231.69,93.81ZM88,112a24,24,0,0,1-35.12,21.26,7.88,7.88,0,0,0-1.82-1.06A24,24,0,0,1,40,112v-8H88Zm64,0a24,24,0,0,1-48,0v-8h48Zm64,0a24,24,0,0,1-11.07,20.2,8.08,8.08,0,0,0-1.8,1.05A24,24,0,0,1,168,112v-8h48Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M26.22,94.41A6,6,0,0,0,26,96v16A38,38,0,0,0,42,143V216a6,6,0,0,0,6,6H208a6,6,0,0,0,6-6V143A38,38,0,0,0,230,112V96a5.91,5.91,0,0,0-.23-1.64L215.43,44.15A14.07,14.07,0,0,0,202,34H54A14.07,14.07,0,0,0,40.57,44.15Zm25.89-47A2,2,0,0,1,54,46H202a2,2,0,0,1,1.92,1.45L216.05,90H40ZM102,102h52v10a26,26,0,0,1-52,0Zm-64,0H90v10a26,26,0,0,1-38.18,23,6,6,0,0,0-1.65-1A26,26,0,0,1,38,112ZM202,210H54V148.66a38,38,0,0,0,42-16.21,37.95,37.95,0,0,0,64,0,38,38,0,0,0,42,16.21Zm3.83-76a6,6,0,0,0-1.65,1A26,26,0,0,1,166,112V102h52v10A26,26,0,0,1,205.83,134Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M232,96a7.89,7.89,0,0,0-.3-2.2L217.35,43.6A16.07,16.07,0,0,0,202,32H54A16.07,16.07,0,0,0,38.65,43.6L24.31,93.8A7.89,7.89,0,0,0,24,96h0v16a40,40,0,0,0,16,32v72a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V144a40,40,0,0,0,16-32V96ZM54,48H202l11.42,40H42.61Zm50,56h48v8a24,24,0,0,1-48,0Zm-16,0v8a24,24,0,0,1-35.12,21.26,7.88,7.88,0,0,0-1.82-1.06A24,24,0,0,1,40,112v-8ZM200,208H56V151.2a40.57,40.57,0,0,0,8,.8,40,40,0,0,0,32-16,40,40,0,0,0,64,0,40,40,0,0,0,32,16,40.57,40.57,0,0,0,8-.8Zm4.93-75.8a8.08,8.08,0,0,0-1.8,1.05A24,24,0,0,1,168,112v-8h48v8A24,24,0,0,1,204.93,132.2Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M28.15,95A3.81,3.81,0,0,0,28,96v16a36,36,0,0,0,16,29.92V216a4,4,0,0,0,4,4H208a4,4,0,0,0,4-4V141.92A36,36,0,0,0,228,112V96a3.81,3.81,0,0,0-.17-1.08L213.5,44.7A12,12,0,0,0,202,36H54A12,12,0,0,0,42.5,44.7Zm22-48.08A4,4,0,0,1,54,44H202a4,4,0,0,1,3.84,2.9L218.7,92H37.3ZM100,100h56v12a28,28,0,0,1-56,0ZM36,112V100H92v12a28,28,0,0,1-41.37,24.59,4,4,0,0,0-1.31-.76A28,28,0,0,1,36,112ZM204,212H52V145.94a36,36,0,0,0,44-17.48,36,36,0,0,0,64,0,36,36,0,0,0,44,17.48Zm2.68-76.17a3.94,3.94,0,0,0-1.3.76A28,28,0,0,1,164,112V100h56v12A28,28,0,0,1,206.68,135.83Z"
            }))]
        ]),
        n = t.forwardRef((e, n) => t.createElement(a.default, {
            ref: n,
            ...e,
            weights: r
        }));
    n.displayName = "StorefrontIcon", e.s(["Storefront", 0, n, "StorefrontIcon", 0, n], 134685)
}, 531834, e => {
    "use strict";
    var t = e.i(409781),
        a = e.i(848662);
    let r = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M227.46,214c-16.52-28.56-43-48.06-73.68-55.09a68,68,0,1,0-51.56,0c-30.64,7-57.16,26.53-73.68,55.09a4,4,0,0,0,6.92,4C55,184.19,89.62,164,128,164s73,20.19,92.54,54a4,4,0,0,0,3.46,2,3.93,3.93,0,0,0,2-.54A4,4,0,0,0,227.46,214ZM68,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,68,96Z"
            }))]
        ]),
        n = t.forwardRef((e, n) => t.createElement(a.default, {
            ref: n,
            ...e,
            weights: r
        }));
    n.displayName = "UserIcon", e.s(["User", 0, n, "UserIcon", 0, n], 531834)
}, 243306, e => {
    "use strict";
    var t = e.i(409781),
        a = e.i(848662);
    let r = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"
            }))]
        ]),
        n = t.forwardRef((e, n) => t.createElement(a.default, {
            ref: n,
            ...e,
            weights: r
        }));
    n.displayName = "XIcon", e.s(["X", 0, n, "XIcon", 0, n], 243306)
}, 689326, e => {
    "use strict";
    let t;
    var a = e.i(785690),
        r = (t = () => a.isServer, {
            isServer: () => t(),
            setIsServer(e) {
                t = e
            }
        });
    e.s(["environmentManager", 0, r])
}, 758059, 304780, e => {
    "use strict";
    var t = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), () => {
                this.listeners.delete(e), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    };
    e.s(["Subscribable", 0, t], 304780);
    var a = new class extends t {
        #e;
        #t;
        #a;
        constructor() {
            super(), this.#a = e => {
                if ("u" > typeof window && window.addEventListener) {
                    let t = () => e();
                    return window.addEventListener("visibilitychange", t, !1), () => {
                        window.removeEventListener("visibilitychange", t)
                    }
                }
            }
        }
        onSubscribe() {
            this.#t || this.setEventListener(this.#a)
        }
        onUnsubscribe() {
            this.hasListeners() || (this.#t?.(), this.#t = void 0)
        }
        setEventListener(e) {
            this.#a = e, this.#t?.(), this.#t = e(e => {
                "boolean" == typeof e ? this.setFocused(e) : this.onFocus()
            })
        }
        setFocused(e) {
            this.#e !== e && (this.#e = e, this.onFocus())
        }
        onFocus() {
            let e = this.isFocused();
            this.listeners.forEach(t => {
                t(e)
            })
        }
        isFocused() {
            return "boolean" == typeof this.#e ? this.#e : globalThis.document?.visibilityState !== "hidden"
        }
    };
    e.s(["focusManager", 0, a], 758059)
}, 317386, e => {
    "use strict";
    e.i(913836);
    var t = e.i(786459),
        a = e.i(785690);

    function r(e) {
        return e
    }
    e.s(["defaultShouldDehydrateQuery", 0, function(e) {
        return "success" === e.state.status
    }, "hydrate", 0, function(e, n, i) {
        if ("object" != typeof n || null === n) return;
        let s = e.getMutationCache(),
            l = e.getQueryCache(),
            o = i?.defaultOptions?.deserializeData ?? e.getDefaultOptions().hydrate?.deserializeData ?? r,
            c = n.mutations || [],
            u = n.queries || [];
        c.forEach(({
            state: t,
            ...a
        }) => {
            s.build(e, {
                ...e.getDefaultOptions().hydrate?.mutations,
                ...i?.defaultOptions?.mutations,
                ...a
            }, t)
        }), u.forEach(({
            queryKey: r,
            state: n,
            queryHash: s,
            meta: c,
            promise: u,
            dehydratedAt: h,
            queryType: d
        }) => {
            let p = u ? (0, t.tryResolveSync)(u) : void 0,
                m = void 0 === n.data ? p?.data : n.data,
                f = void 0 === m ? m : o(m),
                g = l.get(s),
                y = g?.state.status === "pending",
                v = g?.state.fetchStatus === "fetching";
            if (g) {
                let e = p && void 0 !== h && h > g.state.dataUpdatedAt;
                if (n.dataUpdatedAt > g.state.dataUpdatedAt || e) {
                    let {
                        fetchStatus: e,
                        ...t
                    } = n;
                    g.setState({
                        ...t,
                        data: f,
                        ..."pending" === n.status && void 0 !== f && {
                            status: "success",
                            ...!v && {
                                fetchStatus: "idle"
                            }
                        }
                    })
                }
            } else g = l.build(e, {
                ...e.getDefaultOptions().hydrate?.queries,
                ...i?.defaultOptions?.queries,
                queryKey: r,
                queryHash: s,
                meta: c,
                _type: d
            }, {
                ...n,
                data: f,
                fetchStatus: "idle",
                status: "pending" === n.status && void 0 !== f ? "success" : n.status
            });
            !u || p || y || v || void 0 !== h && !(h > g.state.dataUpdatedAt) || g.fetch(void 0, {
                initialPromise: Promise.resolve(u).then(o)
            }).catch(a.noop)
        })
    }])
}, 664300, e => {
    "use strict";
    let t, a, r, n, i, s;
    var l = e.i(137530).systemSetTimeoutZero,
        o = (t = [], a = 0, r = e => {
            e()
        }, n = e => {
            e()
        }, i = l, {
            batch: e => {
                let s;
                a++;
                try {
                    s = e()
                } finally {
                    let e;
                    --a || (e = t, t = [], e.length && i(() => {
                        n(() => {
                            e.forEach(e => {
                                r(e)
                            })
                        })
                    }))
                }
                return s
            },
            batchCalls: e => (...t) => {
                s(() => {
                    e(...t)
                })
            },
            schedule: s = e => {
                a ? t.push(e) : i(() => {
                    r(e)
                })
            },
            setNotifyFunction: e => {
                r = e
            },
            setBatchNotifyFunction: e => {
                n = e
            },
            setScheduler: e => {
                i = e
            }
        });
    e.s(["notifyManager", 0, o])
}, 655100, e => {
    "use strict";
    var t = e.i(304780),
        a = new class extends t.Subscribable {
            #r = !0;
            #t;
            #a;
            constructor() {
                super(), this.#a = e => {
                    if ("u" > typeof window && window.addEventListener) {
                        let t = () => e(!0),
                            a = () => e(!1);
                        return window.addEventListener("online", t, !1), window.addEventListener("offline", a, !1), () => {
                            window.removeEventListener("online", t), window.removeEventListener("offline", a)
                        }
                    }
                }
            }
            onSubscribe() {
                this.#t || this.setEventListener(this.#a)
            }
            onUnsubscribe() {
                this.hasListeners() || (this.#t?.(), this.#t = void 0)
            }
            setEventListener(e) {
                this.#a = e, this.#t?.(), this.#t = e(this.setOnline.bind(this))
            }
            setOnline(e) {
                this.#r !== e && (this.#r = e, this.listeners.forEach(t => {
                    t(e)
                }))
            }
            isOnline() {
                return this.#r
            }
        };
    e.s(["onlineManager", 0, a])
}, 213278, 404348, 343201, e => {
    "use strict";
    var t = e.i(785690),
        a = e.i(664300),
        r = e.i(758059),
        n = e.i(655100),
        i = e.i(786459),
        s = e.i(689326);

    function l(e) {
        return Math.min(1e3 * 2 ** e, 3e4)
    }

    function o(e) {
        return (e ?? "online") !== "online" || n.onlineManager.isOnline()
    }
    var c = class extends Error {
        constructor(e) {
            super("CancelledError"), this.revert = e?.revert, this.silent = e?.silent
        }
    };

    function u(e) {
        let a, u = !1,
            h = 0,
            d = (0, i.pendingThenable)(),
            p = () => r.focusManager.isFocused() && ("always" === e.networkMode || n.onlineManager.isOnline()) && e.canRun(),
            m = () => o(e.networkMode) && e.canRun(),
            f = e => {
                "pending" === d.status && (a?.(), d.resolve(e))
            },
            g = e => {
                "pending" === d.status && (a?.(), d.reject(e))
            },
            y = () => new Promise(t => {
                a = e => {
                    ("pending" !== d.status || p()) && t(e)
                }, e.onPause?.()
            }).then(() => {
                a = void 0, "pending" === d.status && e.onContinue?.()
            }),
            v = () => {
                let a;
                if ("pending" !== d.status) return;
                let r = 0 === h ? e.initialPromise : void 0;
                try {
                    a = r ?? e.fn()
                } catch (e) {
                    a = Promise.reject(e)
                }
                Promise.resolve(a).then(f).catch(a => {
                    if ("pending" !== d.status) return;
                    let r = e.retry ?? 3 * !s.environmentManager.isServer(),
                        n = e.retryDelay ?? l,
                        i = "function" == typeof n ? n(h, a) : n,
                        o = !0 === r || "number" == typeof r && h < r || "function" == typeof r && r(h, a);
                    u || !o ? g(a) : (h++, e.onFail?.(h, a), (0, t.sleep)(i).then(() => p() ? void 0 : y()).then(() => {
                        u ? g(a) : v()
                    }))
                })
            };
        return {
            promise: d,
            status: () => d.status,
            cancel: t => {
                if ("pending" === d.status) {
                    let a = new c(t);
                    g(a), e.onCancel?.(a)
                }
            },
            continue: () => (a?.(), d),
            cancelRetry: () => {
                u = !0
            },
            continueRetry: () => {
                u = !1
            },
            canStart: m,
            start: () => (m() ? v() : y().then(v), d)
        }
    }
    e.s(["CancelledError", 0, c, "canFetch", 0, o, "createRetryer", 0, u], 404348);
    var h = e.i(137530),
        d = class {
            #n;
            destroy() {
                this.clearGcTimeout()
            }
            scheduleGc() {
                this.clearGcTimeout(), (0, t.isValidTimeout)(this.gcTime) && (this.#n = h.timeoutManager.setTimeout(() => {
                    this.optionalRemove()
                }, this.gcTime))
            }
            updateGcTime(e) {
                this.gcTime = Math.max(this.gcTime || 0, e ?? (s.environmentManager.isServer() ? 1 / 0 : 3e5))
            }
            clearGcTimeout() {
                void 0 !== this.#n && (h.timeoutManager.clearTimeout(this.#n), this.#n = void 0)
            }
        };

    function p(e, {
        pages: t,
        pageParams: a
    }) {
        let r = t.length - 1;
        return t.length > 0 ? e.getNextPageParam(t[r], t, a[r], a) : void 0
    }
    e.s(["Removable", 0, d], 343201);
    var m = class extends d {
        #i;
        #s;
        #l;
        #o;
        #c;
        #u;
        #h;
        #d;
        constructor(e) {
            super(), this.#d = !1, this.#h = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#c = e.client, this.#o = this.#c.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#s = y(this.options), this.state = e.state ?? this.#s, this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get queryType() {
            return this.#i
        }
        get promise() {
            return this.#u?.promise
        }
        setOptions(e) {
            if (this.options = {
                    ...this.#h,
                    ...e
                }, e?._type && (this.#i = e._type), this.updateGcTime(this.options.gcTime), this.state && void 0 === this.state.data) {
                let e = y(this.options);
                void 0 !== e.data && (this.setState(g(e.data, e.dataUpdatedAt)), this.#s = e)
            }
        }
        optionalRemove() {
            this.observers.length || "idle" !== this.state.fetchStatus || this.#o.remove(this)
        }
        setData(e, a) {
            let r = (0, t.replaceData)(this.state.data, e, this.options);
            return this.#p({
                data: r,
                type: "success",
                dataUpdatedAt: a?.updatedAt,
                manual: a?.manual
            }), r
        }
        setState(e) {
            this.#p({
                type: "setState",
                state: e
            })
        }
        cancel(e) {
            let a = this.#u?.promise;
            return this.#u?.cancel(e), a ? a.then(t.noop).catch(t.noop) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        get resetState() {
            return this.#s
        }
        reset() {
            this.destroy(), this.setState(this.resetState)
        }
        isActive() {
            return this.observers.some(e => !1 !== (0, t.resolveQueryBoolean)(e.options.enabled, this))
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === t.skipToken || !this.isFetched()
        }
        isFetched() {
            return this.state.dataUpdateCount + this.state.errorUpdateCount > 0
        }
        isStatic() {
            return this.getObserversCount() > 0 && this.observers.some(e => "static" === (0, t.resolveStaleTime)(e.options.staleTime, this))
        }
        isStale() {
            return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : void 0 === this.state.data || this.state.isInvalidated
        }
        isStaleByTime(e = 0) {
            return void 0 === this.state.data || "static" !== e && (!!this.state.isInvalidated || !(0, t.timeUntilStale)(this.state.dataUpdatedAt, e))
        }
        onFocus() {
            let e = this.observers.find(e => e.shouldFetchOnWindowFocus());
            e?.refetch({
                cancelRefetch: !1
            }), this.#u?.continue()
        }
        onOnline() {
            let e = this.observers.find(e => e.shouldFetchOnReconnect());
            e?.refetch({
                cancelRefetch: !1
            }), this.#u?.continue()
        }
        addObserver(e) {
            this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.#o.notify({
                type: "observerAdded",
                query: this,
                observer: e
            }))
        }
        removeObserver(e) {
            this.observers.includes(e) && (this.observers = this.observers.filter(t => t !== e), this.observers.length || (this.#u && (this.#d || this.#m() ? this.#u.cancel({
                revert: !0
            }) : this.#u.cancelRetry()), this.scheduleGc()), this.#o.notify({
                type: "observerRemoved",
                query: this,
                observer: e
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        #m() {
            return "paused" === this.state.fetchStatus && "pending" === this.state.status
        }
        invalidate() {
            this.state.isInvalidated || this.#p({
                type: "invalidate"
            })
        }
        async fetch(e, a) {
            var r;
            let n;
            if ("idle" !== this.state.fetchStatus && this.#u?.status() !== "rejected") {
                if (void 0 !== this.state.data && a?.cancelRefetch) this.cancel({
                    silent: !0
                });
                else if (this.#u) return this.#u.continueRetry(), this.#u.promise
            }
            if (e && this.setOptions(e), !this.options.queryFn) {
                let e = this.observers.find(e => e.options.queryFn);
                e && this.setOptions(e.options)
            }
            let i = new AbortController,
                s = e => {
                    Object.defineProperty(e, "signal", {
                        enumerable: !0,
                        get: () => (this.#d = !0, i.signal)
                    })
                },
                l = () => {
                    let e, r = (0, t.ensureQueryFn)(this.options, a),
                        n = (s(e = {
                            client: this.#c,
                            queryKey: this.queryKey,
                            meta: this.meta
                        }), e);
                    return (this.#d = !1, this.options.persister) ? this.options.persister(r, n, this) : r(n)
                },
                o = (s(n = {
                    fetchOptions: a,
                    options: this.options,
                    queryKey: this.queryKey,
                    client: this.#c,
                    state: this.state,
                    fetchFn: l
                }), n),
                h = "infinite" === this.#i ? (r = this.options.pages, {
                    onFetch: (e, a) => {
                        let n = e.options,
                            i = e.fetchOptions?.meta?.fetchMore?.direction,
                            s = e.state.data?.pages || [],
                            l = e.state.data?.pageParams || [],
                            o = {
                                pages: [],
                                pageParams: []
                            },
                            c = 0,
                            u = async () => {
                                let a = !1,
                                    u = (0, t.ensureQueryFn)(e.options, e.fetchOptions),
                                    h = async (r, n, i) => {
                                        let s;
                                        if (a) return Promise.reject(e.signal.reason);
                                        if (null == n && r.pages.length) return Promise.resolve(r);
                                        let l = (s = {
                                                client: e.client,
                                                queryKey: e.queryKey,
                                                pageParam: n,
                                                direction: i ? "backward" : "forward",
                                                meta: e.options.meta
                                            }, (0, t.addConsumeAwareSignal)(s, () => e.signal, () => a = !0), s),
                                            o = await u(l),
                                            {
                                                maxPages: c
                                            } = e.options,
                                            h = i ? t.addToStart : t.addToEnd;
                                        return {
                                            pages: h(r.pages, o, c),
                                            pageParams: h(r.pageParams, n, c)
                                        }
                                    };
                                if (i && s.length) {
                                    let e = "backward" === i,
                                        t = {
                                            pages: s,
                                            pageParams: l
                                        },
                                        a = (e ? function(e, {
                                            pages: t,
                                            pageParams: a
                                        }) {
                                            return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, a[0], a) : void 0
                                        } : p)(n, t);
                                    o = await h(t, a, e)
                                } else {
                                    let e = r ?? s.length;
                                    do {
                                        let e = 0 === c ? l[0] ?? n.initialPageParam : p(n, o);
                                        if (c > 0 && null == e) break;
                                        o = await h(o, e), c++
                                    } while (c < e)
                                }
                                return o
                            };
                        e.options.persister ? e.fetchFn = () => e.options.persister?.(u, {
                            client: e.client,
                            queryKey: e.queryKey,
                            meta: e.options.meta,
                            signal: e.signal
                        }, a) : e.fetchFn = u
                    }
                }) : this.options.behavior;
            h?.onFetch(o, this), this.#l = this.state, ("idle" === this.state.fetchStatus || this.state.fetchMeta !== o.fetchOptions?.meta) && this.#p({
                type: "fetch",
                meta: o.fetchOptions?.meta
            }), this.#u = u({
                initialPromise: a?.initialPromise,
                fn: o.fetchFn,
                onCancel: e => {
                    e instanceof c && e.revert && this.setState({
                        ...this.#l,
                        fetchStatus: "idle"
                    }), i.abort()
                },
                onFail: (e, t) => {
                    this.#p({
                        type: "failed",
                        failureCount: e,
                        error: t
                    })
                },
                onPause: () => {
                    this.#p({
                        type: "pause"
                    })
                },
                onContinue: () => {
                    this.#p({
                        type: "continue"
                    })
                },
                retry: o.options.retry,
                retryDelay: o.options.retryDelay,
                networkMode: o.options.networkMode,
                canRun: () => !0
            });
            try {
                let e = await this.#u.start();
                if (void 0 === e) throw Error(`${this.queryHash} data is undefined`);
                return this.setData(e), this.#o.config.onSuccess?.(e, this), this.#o.config.onSettled?.(e, this.state.error, this), e
            } catch (e) {
                if (e instanceof c) {
                    if (e.silent) return this.#u.promise;
                    else if (e.revert) {
                        if (void 0 === this.state.data) throw e;
                        return this.state.data
                    }
                }
                throw this.#p({
                    type: "error",
                    error: e
                }), this.#o.config.onError?.(e, this), this.#o.config.onSettled?.(this.state.data, e, this), e
            } finally {
                this.scheduleGc()
            }
        }
        #p(e) {
            let t = t => {
                switch (e.type) {
                    case "failed":
                        return {
                            ...t, fetchFailureCount: e.failureCount, fetchFailureReason: e.error
                        };
                    case "pause":
                        return {
                            ...t, fetchStatus: "paused"
                        };
                    case "continue":
                        return {
                            ...t, fetchStatus: "fetching"
                        };
                    case "fetch":
                        return {
                            ...t, ...f(t.data, this.options), fetchMeta: e.meta ?? null
                        };
                    case "success":
                        let a = {
                            ...t,
                            ...g(e.data, e.dataUpdatedAt),
                            dataUpdateCount: t.dataUpdateCount + 1,
                            ...!e.manual && {
                                fetchStatus: "idle",
                                fetchFailureCount: 0,
                                fetchFailureReason: null
                            }
                        };
                        return this.#l = e.manual ? a : void 0, a;
                    case "error":
                        let r = e.error;
                        return {
                            ...t, error: r, errorUpdateCount: t.errorUpdateCount + 1, errorUpdatedAt: Date.now(), fetchFailureCount: t.fetchFailureCount + 1, fetchFailureReason: r, fetchStatus: "idle", status: "error", isInvalidated: !0
                        };
                    case "invalidate":
                        return {
                            ...t, isInvalidated: !0
                        };
                    case "setState":
                        return {
                            ...t, ...e.state
                        }
                }
            };
            this.state = t(this.state), a.notifyManager.batch(() => {
                this.observers.forEach(e => {
                    e.onQueryUpdate()
                }), this.#o.notify({
                    query: this,
                    type: "updated",
                    action: e
                })
            })
        }
    };

    function f(e, t) {
        return {
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchStatus: o(t.networkMode) ? "fetching" : "paused",
            ...void 0 === e && {
                error: null,
                status: "pending"
            }
        }
    }

    function g(e, t) {
        return {
            data: e,
            dataUpdatedAt: t ?? Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success"
        }
    }

    function y(e) {
        let t = "function" == typeof e.initialData ? e.initialData() : e.initialData,
            a = void 0 !== t,
            r = a ? "function" == typeof e.initialDataUpdatedAt ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
        return {
            data: t,
            dataUpdateCount: 0,
            dataUpdatedAt: a ? r ?? Date.now() : 0,
            error: null,
            errorUpdateCount: 0,
            errorUpdatedAt: 0,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: null,
            isInvalidated: !1,
            status: a ? "success" : "pending",
            fetchStatus: "idle"
        }
    }
    e.s(["Query", 0, m, "fetchState", 0, f], 213278)
}, 785690, 137530, 786459, e => {
    "use strict";
    var t = {
            setTimeout: (e, t) => setTimeout(e, t),
            clearTimeout: e => clearTimeout(e),
            setInterval: (e, t) => setInterval(e, t),
            clearInterval: e => clearInterval(e)
        },
        a = new class {
            #f = t;
            #g = !1;
            setTimeoutProvider(e) {
                this.#f = e
            }
            setTimeout(e, t) {
                return this.#f.setTimeout(e, t)
            }
            clearTimeout(e) {
                this.#f.clearTimeout(e)
            }
            setInterval(e, t) {
                return this.#f.setInterval(e, t)
            }
            clearInterval(e) {
                this.#f.clearInterval(e)
            }
        };
    e.s(["systemSetTimeoutZero", 0, function(e) {
        setTimeout(e, 0)
    }, "timeoutManager", 0, a], 137530);
    var r = "u" < typeof window || "Deno" in globalThis;

    function n() {}

    function i(e, t) {
        return (t?.queryKeyHashFn || s)(e)
    }

    function s(e) {
        return JSON.stringify(e, (e, t) => u(t) ? Object.keys(t).sort().reduce((e, a) => (e[a] = t[a], e), {}) : t)
    }

    function l(e, t) {
        return e === t || typeof e == typeof t && !!e && !!t && "object" == typeof e && "object" == typeof t && Object.keys(t).every(a => l(e[a], t[a]))
    }
    var o = Object.prototype.hasOwnProperty;

    function c(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length
    }

    function u(e) {
        if (!h(e)) return !1;
        let t = e.constructor;
        if (void 0 === t) return !0;
        let a = t.prototype;
        return !!h(a) && !!a.hasOwnProperty("isPrototypeOf") && Object.getPrototypeOf(e) === Object.prototype
    }

    function h(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }
    var d = Symbol();
    e.s(["addConsumeAwareSignal", 0, function(e, t, a) {
        let r, n = !1;
        return Object.defineProperty(e, "signal", {
            enumerable: !0,
            get: () => (r ??= t(), n || (n = !0, r.aborted ? a() : r.addEventListener("abort", a, {
                once: !0
            })), r)
        }), e
    }, "addToEnd", 0, function(e, t, a = 0) {
        let r = [...e, t];
        return a && r.length > a ? r.slice(1) : r
    }, "addToStart", 0, function(e, t, a = 0) {
        let r = [t, ...e];
        return a && r.length > a ? r.slice(0, -1) : r
    }, "ensureQueryFn", 0, function(e, t) {
        return !e.queryFn && t?.initialPromise ? () => t.initialPromise : e.queryFn && e.queryFn !== d ? e.queryFn : () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
    }, "functionalUpdate", 0, function(e, t) {
        return "function" == typeof e ? e(t) : e
    }, "hashKey", 0, s, "hashQueryKeyByOptions", 0, i, "isServer", 0, r, "isValidTimeout", 0, function(e) {
        return "number" == typeof e && e >= 0 && e !== 1 / 0
    }, "matchMutation", 0, function(e, t) {
        let {
            exact: a,
            status: r,
            predicate: n,
            mutationKey: i
        } = e;
        if (i) {
            if (!t.options.mutationKey) return !1;
            if (a) {
                if (s(t.options.mutationKey) !== s(i)) return !1
            } else if (!l(t.options.mutationKey, i)) return !1
        }
        return (!r || t.state.status === r) && (!n || !!n(t))
    }, "matchQuery", 0, function(e, t) {
        let {
            type: a = "all",
            exact: r,
            fetchStatus: n,
            predicate: s,
            queryKey: o,
            stale: c
        } = e;
        if (o) {
            if (r) {
                if (t.queryHash !== i(o, t.options)) return !1
            } else if (!l(t.queryKey, o)) return !1
        }
        if ("all" !== a) {
            let e = t.isActive();
            if ("active" === a && !e || "inactive" === a && e) return !1
        }
        return ("boolean" != typeof c || t.isStale() === c) && (!n || n === t.state.fetchStatus) && (!s || !!s(t))
    }, "noop", 0, n, "partialMatchKey", 0, l, "replaceData", 0, function(e, t, a) {
        return "function" == typeof a.structuralSharing ? a.structuralSharing(e, t) : !1 !== a.structuralSharing ? function e(t, a, r = 0) {
            if (t === a) return t;
            if (r > 500) return a;
            let n = c(t) && c(a);
            if (!n && !(u(t) && u(a))) return a;
            let i = (n ? t : Object.keys(t)).length,
                s = n ? a : Object.keys(a),
                l = s.length,
                h = n ? Array(l) : {},
                d = 0;
            for (let c = 0; c < l; c++) {
                let l = n ? c : s[c],
                    u = t[l],
                    p = a[l];
                if (u === p) {
                    h[l] = u, (n ? c < i : o.call(t, l)) && d++;
                    continue
                }
                if (null === u || null === p || "object" != typeof u || "object" != typeof p) {
                    h[l] = p;
                    continue
                }
                let m = e(u, p, r + 1);
                h[l] = m, m === u && d++
            }
            return i === l && d === i ? t : h
        }(e, t) : t
    }, "resolveQueryBoolean", 0, function(e, t) {
        return "function" == typeof e ? e(t) : e
    }, "resolveStaleTime", 0, function(e, t) {
        return "function" == typeof e ? e(t) : e
    }, "shallowEqualObjects", 0, function(e, t) {
        if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
        for (let a in e)
            if (e[a] !== t[a]) return !1;
        return !0
    }, "shouldThrowError", 0, function(e, t) {
        return "function" == typeof e ? e(...t) : !!e
    }, "skipToken", 0, d, "sleep", 0, function(e) {
        return new Promise(t => {
            a.setTimeout(t, e)
        })
    }, "timeUntilStale", 0, function(e, t) {
        return Math.max(e + (t || 0) - Date.now(), 0)
    }], 785690), e.s(["pendingThenable", 0, function() {
        let e, t, a = new Promise((a, r) => {
            e = a, t = r
        });

        function r(e) {
            Object.assign(a, e), delete a.resolve, delete a.reject
        }
        return a.status = "pending", a.catch(() => {}), a.resolve = t => {
            r({
                status: "fulfilled",
                value: t
            }), e(t)
        }, a.reject = e => {
            r({
                status: "rejected",
                reason: e
            }), t(e)
        }, a
    }, "tryResolveSync", 0, function(e) {
        let t;
        if (e.then(e => (t = e, e), n)?.catch(n), void 0 !== t) return {
            data: t
        }
    }], 786459)
}, 818897, e => {
    "use strict";
    var t = e.i(409781),
        a = e.i(785328),
        r = t.createContext(void 0);
    e.s(["QueryClientProvider", 0, ({
        client: e,
        children: n
    }) => (t.useEffect(() => (e.mount(), () => {
        e.unmount()
    }), [e]), (0, a.jsx)(r.Provider, {
        value: e,
        children: n
    })), "useQueryClient", 0, e => {
        let a = t.useContext(r);
        if (e) return e;
        if (!a) throw Error("No QueryClient set, use QueryClientProvider to set one");
        return a
    }])
}, 830146, 863304, e => {
    "use strict";
    var t = e.i(467211),
        a = e.i(679933),
        r = e.i(409781);
    let n = (0, r.createContext)({
            placement: "bottom"
        }),
        i = (0, r.forwardRef)(function(e, i) {
            [e, i] = (0, t.useContextProps)(e, i, n);
            let s = e.placement,
                l = {
                    position: "absolute",
                    transform: "top" === s || "bottom" === s ? "translateX(-50%)" : "translateY(-50%)"
                };
            null != s && (l[s] = "100%");
            let o = (0, t.useRenderProps)({
                ...e,
                defaultClassName: "react-aria-OverlayArrow",
                values: {
                    placement: s
                }
            });
            o.style && Object.keys(o.style).forEach(e => void 0 === o.style[e] && delete o.style[e]);
            let c = (0, a.filterDOMProps)(e);
            return r.default.createElement(t.dom.div, {
                ...c,
                ...o,
                style: {
                    ...l,
                    ...o.style
                },
                ref: i,
                "data-placement": s
            })
        });
    e.s(["OverlayArrow", 0, i, "OverlayArrowContext", 0, n], 830146);
    var s = e.i(185559),
        l = e.i(42246);

    function o(e, t, a) {
        (0, s.useLayoutEffect)(() => {
            if (t && e.current) {
                if (!("getAnimations" in e.current)) return void a();
                let t = e.current.getAnimations();
                if (0 === t.length) return void a();
                let r = !1;
                return Promise.allSettled(t.map(e => e.finished)).then(() => {
                    r || (0, l.flushSync)(() => {
                        a()
                    })
                }), () => {
                    r = !0
                }
            }
        }, [e, t, a])
    }
    e.s(["useEnterAnimation", 0, function(e, t = !0) {
        let [a, n] = (0, r.useState)(!0), i = a && t;
        return (0, s.useLayoutEffect)(() => {
            if (i && e.current && "getAnimations" in e.current)
                for (let t of e.current.getAnimations()) t instanceof CSSTransition && t.cancel()
        }, [e, i]), o(e, i, (0, r.useCallback)(() => n(!1), [])), i
    }, "useExitAnimation", 0, function(e, t) {
        let [a, n] = (0, r.useState)(t ? "open" : "closed");
        switch (a) {
            case "open":
                t || n("exiting");
                break;
            case "closed":
            case "exiting":
                t && n("open")
        }
        let i = "exiting" === a;
        return o(e, i, (0, r.useCallback)(() => {
            n(e => "exiting" === e ? "closed" : e)
        }, [])), i
    }], 863304)
}, 544789, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(722978);
    let r = {
        default: {
            accent: "rgb(0 0 0)",
            accentDark: "rgb(255 255 255)",
            background: "rgb(245 245 245)",
            backgroundDark: "rgb(38 38 38)"
        },
        red: {
            accent: "rgb(255 84 73)",
            accentDark: "rgb(255 84 73)",
            background: "rgb(245 245 245)",
            backgroundDark: "rgb(38 38 38)"
        },
        blue: {
            accent: "rgb(58 91 199)",
            accentDark: "rgb(58 91 199)",
            background: "rgb(245 245 245)",
            backgroundDark: "rgb(38 38 38)"
        },
        yellow: {
            accent: "rgb(255 176 23)",
            accentDark: "rgb(255 176 23)",
            background: "rgb(245 245 245)",
            backgroundDark: "rgb(38 38 38)"
        }
    };
    e.s(["default", 0, ({
        className: e,
        variant: n = "default",
        children: i
    }) => {
        let s = r[n],
            l = (0, a.default)("relative mango-text-caption-md rounded-lg px-2 py-1 uppercase animated-border", "text-black dark:text-white", e);
        return (0, t.jsxs)("div", {
            "aria-label": i,
            style: {
                "--color-accent": s.accent,
                "--color-background": s.background,
                "--color-accent-dark": s.accentDark,
                "--color-background-dark": s.backgroundDark
            },
            className: l,
            children: [(0, t.jsx)("span", {
                className: "animated-border-glow"
            }), (0, t.jsx)("span", {
                className: "animated-border-background"
            }), (0, t.jsx)("span", {
                className: "animated-border-text",
                children: i
            })]
        })
    }], 544789)
}]);