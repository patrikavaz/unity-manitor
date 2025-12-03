try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "23e91448-4398-4063-9e61-54832c311811", e._sentryDebugIdIdentifier = "sentry-dbid-23e91448-4398-4063-9e61-54832c311811")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [98450], {
        3561: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            var a = r(73723);
            r(7787);
            let n = ({
                className: e
            }) => (0, a.jsx)("svg", {
                width: 16,
                height: 16,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: e,
                "data-sentry-element": "svg",
                "data-sentry-component": "ArrowDown",
                "data-sentry-source-file": "ArrowDown.tsx",
                children: (0, a.jsx)("path", {
                    d: "m13 6-5 5-5-5",
                    "data-sentry-element": "path",
                    "data-sentry-source-file": "ArrowDown.tsx"
                })
            })
        },
        6158: (e, t, r) => {
            "use strict";
            r.d(t, {
                H: () => n
            });
            var a = r(73723);
            r(7787);
            let n = ({
                className: e = ""
            }) => (0, a.jsx)("svg", {
                width: "11",
                height: "11",
                viewBox: "0 0 11 11",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: e,
                "data-sentry-element": "svg",
                "data-sentry-component": "ArrowIcon",
                "data-sentry-source-file": "ArrowIcon.tsx",
                children: (0, a.jsx)("path", {
                    d: "M5.48038 10.3679L4.45623 9.35369L7.5237 6.28622H0.0712891V4.80469H7.5237L4.45623 1.74219L5.48038 0.723011L10.3028 5.54545L5.48038 10.3679Z",
                    "data-sentry-element": "path",
                    "data-sentry-source-file": "ArrowIcon.tsx"
                })
            })
        },
        7286: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => V
            });
            var a = r(73723),
                n = r(7787),
                s = r(7034),
                o = r(62318),
                i = r(6037),
                l = r(84344),
                d = r(22901),
                c = r(93868),
                u = r(96828);
            let m = () => (0, a.jsx)(u.N_, {
                href: "/",
                className: "inline-block p-2 -m-2 hover:opacity-80 transition-opacity",
                "data-sentry-element": "Link",
                "data-sentry-component": "HeaderLogo",
                "data-sentry-source-file": "HeaderLogo.tsx",
                children: (0, a.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "19",
                    height: "22",
                    viewBox: "0 0 19 22",
                    fill: "none",
                    "data-sentry-element": "svg",
                    "data-sentry-source-file": "HeaderLogo.tsx",
                    children: (0, a.jsx)("path", {
                        d: "M10.3305 3.93605L13.7281 5.94619C13.8503 6.01676 13.8547 6.21254 13.7281 6.28311L9.69098 8.67343C9.56884 8.74627 9.4245 8.74172 9.31124 8.67343L5.27408 6.28311C5.14972 6.21482 5.1475 6.01449 5.27408 5.94619L8.66947 3.93605V0L0 5.13121V15.3936L3.32433 13.4267V9.40646C3.32211 9.26304 3.48644 9.1606 3.60858 9.238L7.64575 11.6283C7.76788 11.7012 7.83672 11.8309 7.83672 11.9652V16.7436C7.83894 16.887 7.67461 16.9894 7.55248 16.912L4.15486 14.9019L0.830529 16.8688L9.5 22L18.1695 16.8688L14.8451 14.9019L11.4475 16.912C11.3276 16.9872 11.1588 16.8893 11.1633 16.7436V11.9652C11.1633 11.8218 11.241 11.6943 11.3543 11.6283L15.3914 9.238C15.5113 9.16287 15.6801 9.25849 15.6757 9.40646V13.4267L19 15.3936V5.13121L10.3305 0V3.93605Z",
                        fill: "white",
                        "data-sentry-element": "path",
                        "data-sentry-source-file": "HeaderLogo.tsx"
                    })
                })
            });
            var g = r(28511),
                h = r(20312);
            let x = {
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
                },
                f = ({
                    className: e,
                    variant: t = "default",
                    children: r
                }) => {
                    let n = x[t],
                        s = (0, g.A)("relative mango-text-caption-md rounded-lg px-2 py-1 uppercase animated-border", "text-black dark:text-white", e);
                    return (0, a.jsxs)("div", {
                        "aria-label": r,
                        style: {
                            "--color-accent": n.accent,
                            "--color-background": n.background,
                            "--color-accent-dark": n.accentDark,
                            "--color-background-dark": n.backgroundDark
                        },
                        className: s,
                        "data-sentry-component": "Tag",
                        "data-sentry-source-file": "Tag.tsx",
                        children: [(0, a.jsx)("span", {
                            className: "animated-border-glow"
                        }), (0, a.jsx)("span", {
                            className: "animated-border-background"
                        }), (0, a.jsx)("span", {
                            className: "animated-border-text",
                            children: r
                        })]
                    })
                },
                p = ({
                    children: e,
                    className: t
                }) => (0, a.jsx)(f, {
                    className: t,
                    "data-sentry-element": "Tag",
                    "data-sentry-component": "HeaderTag",
                    "data-sentry-source-file": "HeaderTag.tsx",
                    children: e
                }),
                y = ({
                    variant: e = "medium",
                    href: t,
                    title: r,
                    tag: n,
                    description: s,
                    image: o,
                    icon: i,
                    isExternal: l
                }) => {
                    let d = (0, g.A)("text-white flex items-baseline gap-2", {
                        "mango-text-heading-5xs": "medium" === e,
                        "mango-text-heading-2xs": "large" === e
                    });
                    return (0, a.jsxs)(u.N_, {
                        href: t,
                        className: "group block rounded-lg p-2 relative overflow-hidden",
                        "data-sentry-element": "Link",
                        "data-sentry-component": "HeaderNavigationLink",
                        "data-sentry-source-file": "HeaderNavigationLink.tsx",
                        children: [(0, a.jsx)("div", {
                            className: "absolute inset-0 bg-gray-700 rounded-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100"
                        }), (0, a.jsxs)("span", {
                            className: "flex items-center gap-4 relative z-10",
                            children: [(i || o) && (0, a.jsx)("span", {
                                className: "flex-shrink-0 flex items-center justify-center w-[2.5625rem] h-[2.625rem] bg-gray-800 rounded-lg",
                                children: i ? (0, a.jsx)(c.A, {
                                    icon: i,
                                    size: "1.5rem",
                                    className: "text-white"
                                }) : o && (0, a.jsx)(h.default, {
                                    src: o.src,
                                    alt: o.alt,
                                    width: 22,
                                    height: 22,
                                    placeholder: "blur",
                                    blurDataURL: o.placeholder
                                })
                            }), (0, a.jsxs)("div", {
                                className: "flex-1",
                                children: [(0, a.jsxs)("div", {
                                    className: d,
                                    children: [(0, a.jsx)("div", {
                                        children: r
                                    }), n && (0, a.jsx)(p, {
                                        children: n
                                    }), (0, a.jsx)("div", {
                                        className: "self-center",
                                        children: l && (0, a.jsx)(c.A, {
                                            icon: "arrow-up-right",
                                            size: "1rem"
                                        })
                                    })]
                                }), s && (0, a.jsx)("div", {
                                    className: "mango-text-body-sm text-gray-400",
                                    children: s
                                })]
                            })]
                        })]
                    })
                },
                b = ({
                    href: e,
                    title: t,
                    className: r,
                    icon: n
                }) => {
                    let s = (0, g.A)("group flex items-center gap-3 rounded p-1 hover:bg-gray-700 focus:bg-gray-700 transition-colors duration-200 ease-in-out", r);
                    return (0, a.jsxs)(u.N_, {
                        href: e,
                        className: s,
                        "data-sentry-element": "Link",
                        "data-sentry-component": "HeaderDropdownLink",
                        "data-sentry-source-file": "HeaderDropdownLink.tsx",
                        children: [n && (0, a.jsx)("span", {
                            className: "flex-shrink-0 flex items-center justify-center w-[2.5625rem] h-[2.625rem] text-gray-500 bg-gray-800 rounded-lg transition-all duration-700 ease-in-out group-hover:text-white",
                            children: (0, a.jsx)(c.A, {
                                icon: n
                            })
                        }), (0, a.jsx)("span", {
                            className: "mango-text-heading-5xs text-white",
                            children: t
                        })]
                    })
                },
                v = ({
                    title: e,
                    links: t = [],
                    actions: r = [],
                    variant: n = "default"
                }) => {
                    let s = (0, g.A)("mango-text-input text-gray-400", {
                            "mb-5": "compact" === n || "dropdown" === n,
                            "mb-6": "default" === n
                        }),
                        o = (0, g.A)("flex flex-col w-full", {
                            "gap-1": "compact" === n || "dropdown" === n,
                            "gap-5": "default" === n
                        }),
                        i = (0, g.A)("flex flex-wrap", {
                            "mt-3 gap-1": "compact" === n,
                            "mt-8 gap-2": "default" === n
                        });
                    return (0, a.jsxs)("div", {
                        className: "flex flex-col",
                        "data-sentry-component": "HeaderDropdownMenuSection",
                        "data-sentry-source-file": "HeaderDropdownMenuSection.tsx",
                        children: [(0, a.jsx)("div", {
                            className: s,
                            children: e
                        }), t.length > 0 && (0, a.jsx)("div", {
                            className: o,
                            children: t.map((e, t) => "dropdown" === n ? (0, a.jsx)(b, {
                                href: e.href,
                                icon: e.icon,
                                title: e.title
                            }, `header-dropdown-menu-link-${e.title}-${t}`) : (0, a.jsx)(y, {
                                variant: "medium",
                                href: e.href,
                                icon: e.icon,
                                title: e.title,
                                tag: e.tag,
                                description: e.description,
                                isExternal: e.isExternal,
                                image: e.image
                            }, `header-dropdown-menu-link-${e.title}-${t}`))
                        }), r.length > 0 && (0, a.jsx)("div", {
                            className: i,
                            children: r.map((e, t) => (0, a.jsx)(d.A, {
                                href: e.href,
                                size: "xs",
                                variant: e.variant || "secondary",
                                icon: e.icon,
                                iconDirection: e.iconDirection || "right",
                                children: e.title
                            }, `header-dropdown-menu-action-${e.title}-${t}`))
                        })]
                    })
                };
            var k = r(37271),
                j = r(44164),
                w = r(58013),
                N = r(22024);
            let L = n.forwardRef(({
                icon: e,
                isActive: t = !1,
                className: r,
                onClick: n,
                onMouseEnter: s,
                onFocus: o,
                onTouchStart: i
            }, l) => {
                let d = (0, g.A)("rounded-full transition-colors text-white", "border hover:border-gray-700 focus:border-gray-700", {
                    "border border-gray-700": t,
                    "border-transparent": !t
                }, r);
                return (0, a.jsx)(N.$, {
                    ref: l,
                    className: d,
                    onPress: n,
                    onHoverStart: s,
                    onFocus: o,
                    children: (0, a.jsx)("div", {
                        onTouchStart: i,
                        children: e
                    })
                })
            });
            L.displayName = "HeaderIconButton";
            let E = ({
                    icon: e,
                    children: t,
                    placement: r = "bottom end",
                    offset: s = 24,
                    className: o,
                    onOpen: l
                }) => {
                    let [d, c] = (0, n.useState)(!1), u = (0, i.usePathname)();
                    return (0, n.useEffect)(() => {
                        c(!1)
                    }, [u]), (0, a.jsxs)(a.Fragment, {
                        children: [d && (0, a.jsx)(w.m.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: .5,
                                ease: [.25, 1, .5, 1]
                            },
                            className: "fixed top-0 inset-0 bg-black/20"
                        }), (0, a.jsxs)(k.cQ, {
                            isOpen: d,
                            onOpenChange: e => {
                                c(e), l?.(e)
                            },
                            "data-sentry-element": "MenuTrigger",
                            "data-sentry-source-file": "HeaderDropdown.tsx",
                            children: [(0, a.jsx)(L, {
                                icon: e,
                                isActive: d,
                                "data-sentry-element": "HeaderIconButton",
                                "data-sentry-source-file": "HeaderDropdown.tsx"
                            }), (0, a.jsx)(j.A, {
                                placement: r,
                                offset: s,
                                className: "dark",
                                "data-sentry-element": "Popover",
                                "data-sentry-source-file": "HeaderDropdown.tsx",
                                children: (0, a.jsx)(w.m.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 10
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: 10
                                    },
                                    transition: {
                                        duration: .5,
                                        ease: [.25, 1, .5, 1]
                                    },
                                    className: (0, g.A)("fixed w-full max-lg:top-[4rem] max-lg:left-0 lg:static lg:w-80 bg-gradient-to-t from-[#262626] to-black lg:from-black/80 lg:to-gray-900/80 lg:backdrop-blur-[1.5rem]", "flex p-3 flex-col justify-center items-center gap-4 overflow-hidden outline-hidden max-lg:rounded-b-2xl lg:rounded-2xl", o),
                                    "data-sentry-element": "m.div",
                                    "data-sentry-source-file": "HeaderDropdown.tsx",
                                    children: t
                                })
                            })]
                        })]
                    })
                },
                F = ({
                    featuredLink: e,
                    menus: t
                }) => (0, a.jsx)(E, {
                    icon: (0, a.jsx)("div", {
                        className: "p-2.5",
                        children: (0, a.jsx)(c.A, {
                            icon: "storefront",
                            size: "0.875rem"
                        })
                    }),
                    "data-sentry-element": "HeaderDropdown",
                    "data-sentry-component": "HeaderStoreDropdown",
                    "data-sentry-source-file": "HeaderStoreDropdown.tsx",
                    children: (0, a.jsxs)("div", {
                        className: "flex flex-col gap-4 w-full",
                        children: [e && (0, a.jsx)(y, {
                            variant: "large",
                            href: e.href,
                            title: e.title,
                            description: e.description,
                            image: e.image,
                            icon: e.icon,
                            isExternal: e.isExternal
                        }), t.length > 0 && (0, a.jsx)("div", {
                            className: "pt-3 border-t border-gray-700",
                            children: t.map((e, t) => (0, a.jsx)(v, {
                                title: e.title,
                                links: e.links,
                                variant: "dropdown"
                            }, `header-dropdown-menu-${e.title}-${t}`))
                        })]
                    })
                }),
                R = ({
                    title: e,
                    description: t,
                    onLogout: r,
                    onAccount: n,
                    image: s,
                    accountText: o = "My Account"
                }) => (0, a.jsxs)("div", {
                    className: "w-full h-[11.75rem] p-3 rounded-xl shadow-md relative overflow-hidden",
                    "data-sentry-component": "HeaderUserSpotlight",
                    "data-sentry-source-file": "HeaderUserSpotlight.tsx",
                    children: [s && (0, a.jsx)(h.default, {
                        src: s.src,
                        alt: "",
                        fill: !0,
                        placeholder: "blur",
                        blurDataURL: s.placeholder,
                        sizes: "(max-width: 768px) 100vw, 20rem",
                        className: "absolute inset-0 z-0 object-cover object-center"
                    }), (0, a.jsx)("div", {
                        className: "absolute inset-0 z-10",
                        style: {
                            background: "linear-gradient(180deg, rgba(27, 27, 27, 0.50) 8.12%, rgba(0, 0, 0, 0.50) 59.95%)"
                        }
                    }), (0, a.jsxs)("div", {
                        className: "relative z-20 flex flex-col justify-between h-full",
                        children: [(0, a.jsxs)("div", {
                            className: "flex justify-between items-start",
                            children: [(0, a.jsxs)("div", {
                                className: "flex flex-col gap-1",
                                children: [(0, a.jsx)("div", {
                                    className: "mango-text-heading-xs text-mango-white",
                                    children: e
                                }), (0, a.jsx)("div", {
                                    className: "mango-text-body-sm text-mango-gray-400",
                                    children: t
                                })]
                            }), (0, a.jsx)(d.A, {
                                icon: "sign-out",
                                variant: "outline",
                                size: "xs",
                                onClick: r,
                                "aria-label": "Logout",
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "HeaderUserSpotlight.tsx"
                            })]
                        }), (0, a.jsx)("div", {
                            children: (0, a.jsx)(d.A, {
                                size: "sm",
                                variant: "secondary",
                                icon: "user",
                                iconDirection: "left",
                                onClick: n,
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "HeaderUserSpotlight.tsx",
                                children: o
                            })
                        })]
                    })]
                }),
                S = ({
                    menus: e,
                    userSpotlight: t,
                    signInText: r = "Sign in or create Unity ID",
                    onSignIn: n,
                    initials: s
                }) => (0, a.jsx)(E, {
                    icon: s ? (0, a.jsx)("div", {
                        className: "w-9 h-9 flex items-center justify-center mango-text-heading-5xs text-white capitalize",
                        children: s
                    }) : (0, a.jsx)("div", {
                        className: "p-2.5",
                        children: (0, a.jsx)(c.A, {
                            icon: "user",
                            size: "0.875rem"
                        })
                    }),
                    "data-sentry-element": "HeaderDropdown",
                    "data-sentry-component": "HeaderDropdownUser",
                    "data-sentry-source-file": "HeaderDropdownUser.tsx",
                    children: (0, a.jsxs)("div", {
                        className: "flex flex-col gap-4 w-full",
                        children: [t ? (0, a.jsx)(R, {
                            title: t.title,
                            description: t.description,
                            image: t.image,
                            onLogout: t.onLogout,
                            onAccount: t.onAccount,
                            accountText: t.accountText
                        }) : (0, a.jsx)(d.A, {
                            className: "w-full",
                            icon: "user",
                            iconDirection: "left",
                            onClick: n,
                            children: r
                        }), e.length > 0 && (0, a.jsx)("div", {
                            className: "pt-3 border-t border-gray-700",
                            children: e.map((e, t) => (0, a.jsx)(v, {
                                title: e.title,
                                links: e.links,
                                actions: e.actions,
                                variant: "compact"
                            }, `header-dropdown-menu-${e.title}-${t}`))
                        })]
                    })
                });
            var _ = r(18053);
            let A = ({
                    tag: e,
                    title: t,
                    description: r,
                    image: n,
                    link: s,
                    buttonText: o
                }) => (0, a.jsxs)(l.N_, {
                    className: "block relative h-80 bg-mango-black rounded-2xl p-5 overflow-hidden group shadow-[0_1px_0_0_#424242_inset]",
                    href: s.href,
                    target: s.target || "_self",
                    "data-sentry-element": "Link",
                    "data-sentry-component": "HeaderHighlightBox",
                    "data-sentry-source-file": "HeaderHighlightBox.tsx",
                    children: [n && (0, a.jsx)(h.default, {
                        src: n.src,
                        alt: "",
                        fill: !0,
                        sizes: "25vw",
                        placeholder: "blur",
                        blurDataURL: n.placeholder,
                        className: "rounded-2xl object-cover transition-transform duration-[400ms] ease-in-out group-hover:scale-125"
                    }), (0, a.jsxs)("div", {
                        className: "flex flex-col justify-between max-w-72 h-full",
                        children: [(0, a.jsxs)("div", {
                            className: "flex flex-col items-start",
                            children: [e && (0, a.jsx)(p, {
                                className: "mb-3",
                                children: e
                            }), (0, a.jsx)("div", {
                                className: "mango-text-heading-xs text-mango-white",
                                children: t
                            }), r && (0, a.jsx)("div", {
                                className: "mango-text-body-sm text-mango-gray-400 mt-1",
                                children: r
                            })]
                        }), o && (0, a.jsx)("div", {
                            className: "transform translate-y-[200%] group-hover:translate-y-0 transition-transform duration-[400ms] ease-in-out",
                            children: (0, a.jsx)(d.A, {
                                variant: "secondary",
                                size: "sm",
                                as: "div",
                                children: o
                            })
                        })]
                    })]
                }),
                C = n.forwardRef(({
                    isOpen: e,
                    active: t,
                    panels: r,
                    onKeyDown: n,
                    panelRefs: s
                }, o) => {
                    let i = {
                        hidden: {
                            opacity: 0,
                            y: -10,
                            transition: {
                                duration: .2,
                                ease: [.25, 1, .5, 1]
                            }
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: .3,
                                delay: .1,
                                ease: [.25, 1, .5, 1]
                            }
                        }
                    };
                    return (0, a.jsx)(_.Uu, {
                        ref: o,
                        variants: {
                            hidden: {
                                opacity: 0,
                                height: 0,
                                minHeight: 0,
                                paddingTop: 0,
                                paddingBottom: 0,
                                transition: {
                                    duration: .3,
                                    ease: [.25, 1, .5, 1]
                                }
                            },
                            visible: {
                                opacity: 1,
                                height: "auto",
                                minHeight: "27rem",
                                paddingTop: "2.5rem",
                                paddingBottom: "2.5rem",
                                transition: {
                                    duration: .3,
                                    ease: [.25, 1, .5, 1]
                                }
                            }
                        },
                        initial: "hidden",
                        animate: e ? "visible" : "hidden",
                        className: "absolute left-0 right-0 top-full z-40 w-full px-[4.625rem] rounded-b-[1rem] backdrop-blur-[24px] shadow-2xl overflow-hidden",
                        role: "menu",
                        "aria-hidden": !e,
                        onKeyDown: n,
                        style: {
                            background: "linear-gradient(0deg, rgba(38, 38, 38, 0.80) -53.45%, rgba(0, 0, 0, 0.80) 91.71%)",
                            pointerEvents: e ? "auto" : "none"
                        },
                        children: (0, a.jsx)("div", {
                            className: "relative w-full",
                            children: r.map((r, n) => {
                                let o = t === n && e,
                                    l = r.highlightBox;
                                return (0, a.jsxs)(_.Uu, {
                                    ref: e => {
                                        s && (s.current[n] = e)
                                    },
                                    variants: i,
                                    initial: "hidden",
                                    animate: o ? "visible" : "hidden",
                                    className: "grid grid-cols-12 gap-6 w-full",
                                    style: {
                                        position: o ? "relative" : "absolute",
                                        pointerEvents: o ? "auto" : "none"
                                    },
                                    "aria-hidden": !o,
                                    children: [r.sections.map((e, t) => (0, a.jsx)("div", {
                                        className: "md:col-span-4 xl:col-span-3",
                                        children: (0, a.jsx)(v, {
                                            ...e
                                        })
                                    }, `section-${e.title}-${t}`)), l && (0, a.jsx)("div", {
                                        className: "hidden xl:block xl:col-span-3",
                                        children: (0, a.jsx)(A, {
                                            ...l
                                        })
                                    })]
                                }, `mega-menu-panel-${n}`)
                            })
                        })
                    })
                });
            C.displayName = "HeaderMegaMenu";
            var I = r(53986),
                D = r(33577);

            function U({
                navigation: e,
                action: t
            }) {
                let [r, s] = (0, n.useState)(null), [o, l] = (0, n.useState)(!1), c = (0, i.usePathname)(), u = (0, n.useRef)(null), m = (0, n.useRef)(null);
                return (0, n.useEffect)(() => {
                    if (o) return document.body.style.overflow = "hidden", () => {
                        document.body.style.overflow = ""
                    }
                }, [o]), (0, n.useEffect)(() => {
                    l(!1)
                }, [c]), (0, n.useEffect)(() => {
                    let e = e => {
                        let t = e.target;
                        u.current && !u.current.contains(t) && m.current && !m.current.contains(t) && l(!1)
                    };
                    if (o) return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, [o]), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        ref: m,
                        children: (0, a.jsx)(d.A, {
                            className: "block lg:hidden",
                            variant: "secondary",
                            icon: o ? "x" : "list",
                            size: "sm",
                            onClick: () => l(!o),
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "HeaderMobile.tsx"
                        })
                    }), (0, a.jsx)(I.N, {
                        mode: "wait",
                        "data-sentry-element": "AnimatePresence",
                        "data-sentry-source-file": "HeaderMobile.tsx",
                        children: o && (0, a.jsx)(_.Uu, {
                            ref: u,
                            variants: {
                                initial: {
                                    y: 30,
                                    opacity: 0
                                },
                                enter: {
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        duration: .35,
                                        ease: [.25, 1, .5, 1]
                                    }
                                },
                                exit: {
                                    opacity: 0,
                                    transition: {
                                        duration: .35,
                                        ease: [.25, 1, .5, 1]
                                    }
                                }
                            },
                            initial: "initial",
                            animate: "enter",
                            exit: "exit",
                            className: "lg:hidden absolute top-[100%] left-0 bg-black w-full h-[calc(100svh-64px)] overflow-y-auto",
                            children: (0, a.jsxs)("div", {
                                className: "flex flex-col mt-10 mb-5 px-4",
                                children: [e.map((e, t) => (0, a.jsx)(H, {
                                    ...e,
                                    active: r === t,
                                    setActive: s,
                                    index: t
                                }, `search-modal-search-result-${e.title}-${t}`)), t && (0, a.jsx)(d.A, {
                                    className: "lg:hidden mt-12 w-full",
                                    size: "lg",
                                    href: t.href,
                                    target: t.target,
                                    onClick: t.onClick,
                                    children: t.label
                                })]
                            })
                        })
                    })]
                })
            }
            let H = ({
                    title: e,
                    link: t,
                    listingLabel: r,
                    panel: n,
                    active: s,
                    setActive: o,
                    index: i
                }) => (0, a.jsxs)("div", {
                    className: "relative py-1.5",
                    "data-sentry-component": "HeaderMobileItem",
                    "data-sentry-source-file": "HeaderMobile.tsx",
                    children: [(0, a.jsxs)("button", {
                        onClick: () => o(s ? null : i),
                        className: "relative flex justify-between items-center w-full z-10",
                        children: [(0, a.jsx)(_.rL, {
                            animate: {
                                x: 24 * !!s,
                                y: 6 * !!s,
                                scale: s ? 1.2 : 1
                            },
                            transition: {
                                duration: .5,
                                ease: [.25, 1, .5, 1]
                            },
                            className: "mango-text-heading-2xs text-white !leading-none",
                            "data-sentry-element": "m.p",
                            "data-sentry-source-file": "HeaderMobile.tsx",
                            children: e
                        }), (0, a.jsx)(_.hJ, {
                            animate: {
                                x: s ? -16 : 0,
                                y: 6 * !!s,
                                rotate: 90 * !!s
                            },
                            transition: {
                                duration: .5,
                                ease: [.25, 1, .5, 1]
                            },
                            className: "inline-block",
                            "data-sentry-element": "m.span",
                            "data-sentry-source-file": "HeaderMobile.tsx",
                            children: (0, a.jsx)(d.A, {
                                icon: "caret-right",
                                size: "sm",
                                iconWeight: "fill",
                                variant: s ? "secondary" : "ghost",
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "HeaderMobile.tsx"
                            })
                        })]
                    }), (0, a.jsxs)(I.N, {
                        mode: "wait",
                        "data-sentry-element": "AnimatePresence",
                        "data-sentry-source-file": "HeaderMobile.tsx",
                        children: [s && n && (0, a.jsx)(P, {
                            panel: n,
                            listingLabel: r,
                            link: t
                        }), s && (0, a.jsx)(_.hJ, {
                            variants: {
                                initial: {
                                    y: -10,
                                    opacity: 0
                                },
                                enter: {
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        duration: .75,
                                        ease: [.25, 1, .5, 1]
                                    }
                                },
                                exit: {
                                    opacity: 0,
                                    y: -10,
                                    transition: {
                                        duration: .75,
                                        ease: [.25, 1, .5, 1]
                                    }
                                }
                            },
                            initial: "initial",
                            animate: "enter",
                            exit: "exit",
                            "aria-hidden": !0,
                            className: "inline-block absolute bg-[#1B1B1B] w-full h-[calc(100%+.25rem)] top-[-.25rem] rounded-[1rem] z-1 shadow-[inset_0px_1px_0px_0px_#424242]"
                        })]
                    })]
                }),
                P = ({
                    panel: e,
                    listingLabel: t,
                    link: r
                }) => (0, a.jsxs)(_.Uu, {
                    variants: {
                        initial: {
                            height: 0,
                            y: -10
                        },
                        enter: {
                            height: "auto",
                            y: 0,
                            transition: {
                                duration: .75,
                                ease: [.25, 1, .5, 1]
                            }
                        },
                        exit: {
                            height: 0,
                            y: -10,
                            transition: {
                                duration: .75,
                                ease: [.25, 1, .5, 1]
                            }
                        }
                    },
                    initial: "initial",
                    animate: "enter",
                    exit: "exit",
                    className: "relative overflow-hidden z-10 px-4",
                    "data-sentry-element": "m.div",
                    "data-sentry-component": "HeaderMobilePanel",
                    "data-sentry-source-file": "HeaderMobile.tsx",
                    children: [(0, a.jsx)("span", {
                        "aria-hidden": !0,
                        className: "block h-[3.125rem]"
                    }), (0, a.jsx)("div", {
                        className: "flex flex-col gap-9",
                        children: e.sections.map(({
                            title: e,
                            actions: t,
                            mobileActions: r,
                            links: n
                        }, s) => (0, a.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [(0, a.jsx)("div", {
                                className: "border-b border-gray-700",
                                children: (0, a.jsx)("p", {
                                    className: "mango-text-input text-gray-400 mb-2",
                                    children: e
                                })
                            }), (0, a.jsxs)("div", {
                                className: "flex flex-col gap-3",
                                children: [n?.map(({
                                    title: e,
                                    href: t,
                                    icon: r,
                                    image: n,
                                    isExternal: s
                                }, o) => (0, a.jsxs)(l.N_, {
                                    href: t,
                                    className: "flex gap-3 items-center",
                                    children: [(0, a.jsxs)("div", {
                                        className: "w-[2.5rem] h-[2.5rem] flex items-center justify-center flex-shrink-0",
                                        children: [r && (0, a.jsx)(D.Ay, {
                                            icon: r,
                                            size: "1.5rem"
                                        }), n && (0, a.jsx)(h.default, {
                                            src: n.src,
                                            alt: n.alt,
                                            height: 24,
                                            width: 24,
                                            placeholder: "blur",
                                            blurDataURL: n.placeholder
                                        })]
                                    }), (0, a.jsxs)("p", {
                                        className: "mango-text-heading-3xs text-white flex items-center gap-2",
                                        children: [e, s && (0, a.jsx)(D.Ay, {
                                            icon: "arrow-up-right",
                                            size: "1rem"
                                        })]
                                    })]
                                }, `header-mobile-panel-section-links-${e}-${o}`)), (0, a.jsx)("div", {
                                    className: "flex flex-col gap-3 mt-1",
                                    children: (r || t)?.map(({
                                        title: e,
                                        href: t,
                                        variant: r,
                                        icon: n,
                                        iconDirection: s
                                    }, o) => (0, a.jsx)(d.A, {
                                        href: t,
                                        variant: r || "outline",
                                        icon: n || void 0,
                                        iconDirection: s || "right",
                                        size: "xs",
                                        children: e
                                    }, `header-mobile-panel-section-actions-${e}-${o}`))
                                })]
                            })]
                        }, `header-mobile-panel-section-${e}-${s}`))
                    }), (0, a.jsx)(d.A, {
                        href: r.href,
                        className: "mt-9 w-full",
                        variant: "secondary",
                        icon: "arrow-right",
                        size: "lg",
                        "data-sentry-element": "Button",
                        "data-sentry-source-file": "HeaderMobile.tsx",
                        children: t
                    }), (0, a.jsx)("span", {
                        "aria-hidden": !0,
                        className: "block h-[1.25rem]"
                    })]
                });
            var T = r(47289);
            let M = ({
                navigation: e = [],
                store: t,
                userMenu: s,
                onSearchOpen: o,
                onSearchHover: u,
                onSearchFocus: g,
                action: h,
                searchButtonRef: x
            }) => {
                let [f, p] = (0, n.useState)(null), [y, b] = (0, n.useState)(!1), v = (0, i.usePathname)(), k = (0, n.useRef)(null), j = (0, n.useRef)([]), w = (0, n.useRef)(null), N = (0, n.useRef)([]), E = e?.map(e => e.panel)?.filter(e => !!e) || [];
                (0, n.useEffect)(() => {
                    N.current.forEach((e, t) => {
                        if (!e) return;
                        let r = f === t && y;
                        e.querySelectorAll("a[href], button:not([disabled])").forEach(e => {
                            r ? e.removeAttribute("tabindex") : e.setAttribute("tabindex", "-1")
                        })
                    })
                }, [f, y]), (0, n.useEffect)(() => () => {
                    k.current && clearTimeout(k.current)
                }, []), (0, n.useEffect)(() => {
                    b(!1), p(null)
                }, [v]);
                let R = e => {
                    let t = N.current[e];
                    return t ? Array.from(t.querySelectorAll('a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"])')) : []
                };
                return (0, a.jsx)(T.F, {
                    features: () => Promise.all([r.e(6629), r.e(21170), r.e(9897)]).then(r.bind(r, 32278)).then(e => e.default),
                    "data-sentry-element": "LazyMotion",
                    "data-sentry-component": "Header",
                    "data-sentry-source-file": "Header.tsx",
                    children: (0, a.jsxs)("header", {
                        className: "dark sticky top-0 left-0 right-0 z-50 flex h-[4rem] lg:h-[3rem] items-center bg-black",
                        children: [y && (0, a.jsx)("div", {
                            className: "fixed inset-0 bg-black/10 z-10",
                            style: {
                                top: "3rem"
                            }
                        }), (0, a.jsxs)("div", {
                            className: "mango-container flex items-center px-6 py-1.5 justify-between",
                            children: [(0, a.jsxs)("div", {
                                className: "flex items-center gap-9",
                                children: [(0, a.jsx)(m, {
                                    "data-sentry-element": "HeaderLogo",
                                    "data-sentry-source-file": "Header.tsx"
                                }), (0, a.jsxs)("div", {
                                    className: "hidden lg:block",
                                    role: "menubar",
                                    tabIndex: -1,
                                    onBlurCapture: e => {
                                        k.current = setTimeout(() => {
                                            let t = e.currentTarget,
                                                r = document.activeElement;
                                            t && r && !t.contains(r) && (b(!1), p(null))
                                        }, 150)
                                    },
                                    onMouseEnter: () => {
                                        k.current && clearTimeout(k.current), b(!0)
                                    },
                                    onMouseLeave: () => {
                                        k.current = setTimeout(() => {
                                            b(!1), p(null)
                                        }, 150)
                                    },
                                    onKeyDown: e => {
                                        "Escape" === e.key && y && (e.preventDefault(), b(!1), p(null), null !== f && j.current[f]?.focus())
                                    },
                                    children: [(0, a.jsx)("nav", {
                                        children: (0, a.jsx)("ul", {
                                            className: "flex",
                                            children: e.map((t, r) => (0, a.jsx)("li", {
                                                children: (0, a.jsx)(l.N_, {
                                                    ref: e => {
                                                        j.current[r] = e
                                                    },
                                                    className: `block mango-text-heading-5xs px-3 py-2 rounded-xl text-mango-white hover:bg-mango-gray-950 ${f===r?"bg-mango-gray-950":""}`,
                                                    href: t.link?.href,
                                                    target: t.link.target,
                                                    onMouseEnter: () => p(r),
                                                    onKeyDown: t => ((t, r) => {
                                                        let a = e[r]?.panel;
                                                        "ArrowDown" === t.key && a && (t.preventDefault(), p(r), b(!0), setTimeout(() => {
                                                            let e = R(r);
                                                            e[0]?.focus()
                                                        }, 100))
                                                    })(t, r),
                                                    "aria-haspopup": t.panel ? "true" : void 0,
                                                    "aria-expanded": t.panel && f === r && y ? "true" : "false",
                                                    children: t.title
                                                })
                                            }, `navigationItem-${t.title}-${r}`))
                                        })
                                    }), (0, a.jsx)(C, {
                                        ref: w,
                                        isOpen: y,
                                        active: f,
                                        panels: E,
                                        panelRefs: N,
                                        onKeyDown: e => {
                                            if ("Escape" === e.key) {
                                                e.preventDefault(), e.stopPropagation(), b(!1), p(null), null !== f && j.current[f]?.focus();
                                                return
                                            }
                                            if ("Tab" === e.key && y && null !== f) {
                                                let t = null === f ? [] : R(f);
                                                if (0 === t.length) return;
                                                let r = t[0],
                                                    a = e.target,
                                                    n = t.indexOf(a);
                                                if (-1 === n) return;
                                                e.shiftKey ? 0 === n && (e.preventDefault(), b(!1), p(null), j.current[f]?.focus()) : n === t.length - 1 && (e.preventDefault(), r.focus())
                                            }
                                        },
                                        "data-sentry-element": "HeaderMegaMenu",
                                        "data-sentry-source-file": "Header.tsx"
                                    })]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [(0, a.jsx)(L, {
                                    ref: x,
                                    onClick: () => {
                                        o && o()
                                    },
                                    onMouseEnter: u,
                                    onFocus: g,
                                    onTouchStart: u,
                                    icon: (0, a.jsx)("div", {
                                        className: "p-2.5",
                                        children: (0, a.jsx)(c.A, {
                                            icon: "magnifying-glass",
                                            size: "0.875rem"
                                        })
                                    }),
                                    "data-sentry-element": "HeaderIconButton",
                                    "data-sentry-source-file": "Header.tsx"
                                }), (0, a.jsx)(I.N, {
                                    mode: "wait",
                                    "data-sentry-element": "AnimatePresence",
                                    "data-sentry-source-file": "Header.tsx",
                                    children: t && (0, a.jsx)(F, {
                                        ...t
                                    })
                                }), (0, a.jsx)(I.N, {
                                    mode: "wait",
                                    "data-sentry-element": "AnimatePresence",
                                    "data-sentry-source-file": "Header.tsx",
                                    children: s && (0, a.jsx)(S, {
                                        ...s
                                    })
                                }), h && (0, a.jsx)(d.A, {
                                    className: "hidden lg:flex",
                                    size: "xs",
                                    href: h.href,
                                    target: h.target,
                                    onClick: h.onClick,
                                    children: h.label
                                }), (0, a.jsx)(U, {
                                    navigation: e,
                                    action: h,
                                    "data-sentry-element": "HeaderMobile",
                                    "data-sentry-source-file": "Header.tsx"
                                })]
                            })]
                        })]
                    })
                })
            };
            var $ = r(42505),
                B = r(63079),
                z = r(46513),
                O = r(64007);
            let W = ({
                    action: e,
                    level: t,
                    pageDetails: r
                }) => ({
                    event: "userEvent",
                    event_name: "navigation_action",
                    properties: {
                        ...r,
                        navigation_action: e,
                        navigation_level: t || ""
                    }
                }),
                Y = e => {
                    let t = e.location;
                    return {
                        page_url: t.href,
                        page_hostname: t.hostname,
                        page_path: t.pathname,
                        page_query: t.search,
                        page_fragment: t.hash,
                        page_title: e.title
                    }
                },
                G = (0, s.default)(() => Promise.all([r.e(81578), r.e(99407), r.e(28410)]).then(r.bind(r, 28410)), {
                    loadableGenerated: {
                        webpack: () => [28410]
                    },
                    ssr: !1
                });

            function V({
                data: e,
                locale: t
            }) {
                let [r, s] = (0, n.useState)(!1), [l, d] = (0, n.useState)(!1), c = (0, n.useRef)(null), {
                    user: u,
                    signIn: m,
                    signOut: g,
                    signUp: h
                } = (({
                    locale: e
                } = {}) => {
                    let [t, r] = (0, n.useState)(null), [a, s] = (0, n.useState)(!1), {
                        genesisSession: o
                    } = (0, B.oQ)(), l = (0, i.usePathname)() || "/";
                    (0, n.useEffect)(() => {
                        (async () => {
                            s(!0);
                            try {
                                let {
                                    users: e
                                } = await (0, z.Y)();
                                if (e.length > 0) {
                                    let t = e[0] ?? {},
                                        a = t.name?.givenName,
                                        n = t.name?.familyName,
                                        o = t.name?.fullName;
                                    if (o && (!a || !n)) {
                                        let e = o.trim().split(/\s+/);
                                        a || (a = e[0] || ""), !n && e.length > 1 && (n = e[e.length - 1] || "")
                                    }
                                    r({
                                        initials: ((e, t, r) => {
                                            let a = t ?? "",
                                                n = r ?? "";
                                            if (e) {
                                                let t = e.split(" ");
                                                a = t[0], n = t.length > 1 ? t[t.length - 1] : ""
                                            }
                                            return `${a[0]??""}${n[0]??""}`
                                        })(o, a, n),
                                        ...t,
                                        name: {
                                            fullName: o || "",
                                            givenName: a || "",
                                            familyName: n || ""
                                        }
                                    }), s(!1)
                                }
                            } catch (e) {
                                console.error(e)
                            }
                        })()
                    }, []);
                    let d = new URLSearchParams({
                        client_id: "cms_unity",
                        response_type: "code",
                        redirect_uri: "https://unity.com/oauth",
                        ...e && {
                            locale: "en" === e ? "en_us" : e
                        }
                    }).toString();
                    return {
                        user: t,
                        loading: a,
                        signIn: () => {
                            sessionStorage.setItem("REDIRECT_PATH", l), window.location.href = `https://api.unity.com/v1/oauth2/authorize?${d}`
                        },
                        signOut: () => {
                            let e = new URLSearchParams({
                                access_token: o.access_token,
                                post_logout_redirect_uri: `https://unity.com${l}`
                            }).toString();
                            sessionStorage.clear(), window.location.href = `https://api.unity.com/v1/oauth2/end-session?${e}`
                        },
                        signUp: () => {
                            sessionStorage.setItem("REDIRECT_PATH", l), window.location.href = `https://api.unity.com/v1/oauth2/authorize?${d}&is_reg=true`
                        }
                    }
                })({
                    locale: t
                }), x = (0, n.useCallback)(() => {
                    d(!0)
                }, []), f = (0, n.useCallback)(() => {
                    s(!0);
                    let e = W({
                        action: "search modal open",
                        level: "header",
                        pageDetails: Y(document)
                    });
                    (0, O.A)(e)
                }, []), p = (0, n.useCallback)(e => {
                    if (s(e), !e) {
                        let e = W({
                            action: "search modal close",
                            level: "header",
                            pageDetails: Y(document)
                        });
                        (0, O.A)(e), requestAnimationFrame(() => {
                            c.current?.focus()
                        })
                    }
                }, []), y = e?.navigation?.map(e => {
                    let t = {
                        title: e.title,
                        link: e.fieldLink?.linkReference?.href?.current ? {
                            href: e.fieldLink.linkReference.href.current,
                            target: e.fieldLink.linkReference.target
                        } : {
                            href: ""
                        },
                        listingLabel: e.listingLabel
                    };
                    return e.panel && (t.panel = {
                        sections: e.panel.sections?.map(e => ({
                            title: e.title,
                            links: e.links?.map(e => {
                                let t = {
                                    title: e.title,
                                    description: e.description,
                                    tag: e.tag,
                                    isExternal: e.isExternal,
                                    href: e.fieldLink?.linkReference?.href?.current || ""
                                };
                                return "icon" === e.visualType ? e.icon && (t.icon = e.icon) : "image" === e.visualType && e.image && (t.image = {
                                    src: (0, $.i)(e.image)?.fit("crop").width(30).height(30).dpr(2).url() ?? "",
                                    alt: e.image.alt ?? "",
                                    placeholder: e.image.asset?.metadata?.lqip ?? ""
                                }), t
                            }) || [],
                            actions: e.actions?.map(e => ({
                                title: e.title,
                                href: e.fieldLink?.linkReference?.href?.current || "",
                                variant: e.variant,
                                icon: e.icon || void 0,
                                iconDirection: e.iconDirection || "right"
                            })) || [],
                            mobileActions: e.mobileActions?.map(e => ({
                                title: e.title,
                                href: e.fieldLink?.linkReference?.href?.current || "",
                                variant: e.variant,
                                icon: e.icon || void 0,
                                iconDirection: e.iconDirection || "right"
                            })) || void 0
                        })) || [],
                        highlightBox: e.panel.highlightBox ? {
                            tag: e.panel.highlightBox.tag,
                            title: e.panel.highlightBox.title,
                            description: e.panel.highlightBox.description,
                            image: e.panel.highlightBox.image ? {
                                src: (0, $.i)(e.panel.highlightBox.image)?.fit("crop").width(400).height(400).dpr(2).url() ?? "",
                                placeholder: e.panel.highlightBox.image.asset?.metadata?.lqip || ""
                            } : void 0,
                            link: e.panel.highlightBox.fieldLink?.linkReference?.href?.current ? {
                                href: e.panel.highlightBox.fieldLink.linkReference.href.current
                            } : {
                                href: ""
                            },
                            buttonText: e.panel.highlightBox.buttonText
                        } : void 0
                    }), t
                }), b = {
                    menus: e?.userMenu?.menus?.map(e => ({
                        title: e.title,
                        links: e.links?.map(e => ({
                            title: e.title,
                            href: e.fieldLink?.linkReference?.href?.current || "",
                            icon: e.icon || void 0
                        })) || [],
                        actions: e.actions?.map(e => ({
                            title: e.title,
                            href: e.fieldLink?.linkReference?.href?.current || ""
                        })) || []
                    })) || [],
                    signInText: e?.userMenu?.signInText || void 0,
                    onSignIn: m,
                    initials: u?.login ? u?.initials : void 0,
                    userSpotlight: u?.login ? {
                        title: e?.userMenu?.userGreeting ? o.A.render(e.userMenu.userGreeting, {
                            name: u?.name.givenName || "User"
                        }) : u?.name.givenName || "User",
                        description: u?.email || "",
                        onLogout: g,
                        onAccount: () => {
                            window.location.href = "https://cloud.unity.com/account/account-settings"
                        },
                        accountText: e?.userMenu?.accountText || "My Account",
                        image: e?.userMenu?.userSpotlightImage ? {
                            src: (0, $.i)(e.userMenu.userSpotlightImage)?.fit("crop").width(768).dpr(2).url() ?? "",
                            placeholder: e.userMenu.userSpotlightImage.asset?.metadata?.lqip ?? ""
                        } : void 0
                    } : void 0
                }, v = null;
                if (e?.store?.featuredLink) {
                    let t = e.store.featuredLink;
                    v = {
                        title: t.title,
                        description: t.description ?? void 0,
                        href: t.fieldLink?.linkReference?.href?.current || "",
                        isExternal: t.isExternal ?? void 0
                    }, "icon" === t.visualType && t.icon && (v.icon = t.icon), "image" === t.visualType && t.image && (v.image = {
                        src: (0, $.i)(t.image)?.fit("crop").width(30).height(30).dpr(2).url() ?? "",
                        alt: t.image.alt ?? "",
                        placeholder: t.image.asset?.metadata?.lqip ?? ""
                    })
                }
                let k = {
                        navigation: y,
                        store: {
                            featuredLink: v,
                            menus: e?.store?.menus?.map(e => ({
                                title: e.title,
                                links: e.links?.map(e => ({
                                    title: e.title,
                                    href: e.fieldLink?.linkReference?.href?.current || ""
                                })) || []
                            })) || []
                        },
                        userMenu: b,
                        onSearchOpen: f,
                        onSearchHover: x,
                        onSearchFocus: x,
                        searchButtonRef: c,
                        action: e?.action ? {
                            label: e.action.label || "",
                            href: e.action.fieldLink?.linkReference?.href?.current || void 0,
                            target: e.action.fieldLink?.linkReference?.target || void 0
                        } : void 0
                    },
                    j = e?.search?.filterTabs?.map(e => e) || [];
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(M, {
                        ...k,
                        "data-sentry-element": "Header",
                        "data-sentry-source-file": "MangoHeader.tsx"
                    }), (l || r) && (0, a.jsx)(G, {
                        isOpen: r,
                        onOpenChange: p,
                        placeholder: e?.search?.placeholder,
                        noResultsMessage: e?.search?.noResultsMessage,
                        filterTabs: j
                    })]
                })
            }
        },
        9162: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => j
            });
            var a = r(73723),
                n = r(7787),
                s = r(57798),
                o = r(20312),
                i = r(44524),
                l = r(92315),
                d = r(47248),
                c = r.n(d),
                u = r(93868),
                m = r(28511),
                g = r(64007);
            let h = ({
                children: e,
                hasContainer: t = !0
            }) => {
                let r = (0, m.$)("m-auto flex flex-col flex-wrap py-6", {
                        container: t
                    }, {
                        "px-3 md:px-6": !t
                    }),
                    n = e => {
                        e.stopPropagation(), (0, g.A)({
                            event: "userEvent",
                            event_name: "navigation_click",
                            properties: {
                                navigation_click_block: "Footer"
                            }
                        })
                    };
                return (0, a.jsx)("footer", {
                    className: "dark",
                    "data-sentry-component": "Footer",
                    "data-sentry-source-file": "Footer.tsx",
                    children: (0, a.jsx)("div", {
                        role: "button",
                        tabIndex: 0,
                        "aria-label": "Activate to engage with footer navigation",
                        onClick: n,
                        onKeyDown: e => {
                            ("Enter" === e.key || " " === e.key) && (e.preventDefault(), n(e))
                        },
                        className: "bg-gray-100 dark:bg-gray-900",
                        style: {
                            cursor: "auto"
                        },
                        children: (0, a.jsx)("div", {
                            className: r,
                            children: e
                        })
                    })
                })
            };
            h.Copyright = ({
                children: e
            }) => (0, a.jsx)("div", {
                className: "text-tiny text-gray-600 dark:text-gray-400",
                "data-sentry-component": "FooterCopyright",
                "data-sentry-source-file": "FooterCopyright.tsx",
                children: e
            }), h.Disclaimer = ({
                children: e
            }) => (0, a.jsx)("div", {
                className: "text-tiny w-auto text-gray-600 dark:text-gray-400 lg:w-2/4",
                "data-sentry-component": "FooterDisclaimer",
                "data-sentry-source-file": "FooterDisclaimer.tsx",
                children: e
            }), h.Language = ({
                children: e
            }) => (0, a.jsx)("div", {
                className: "flex flex-col xl:mt-6 xl:basis-2/4",
                "data-sentry-component": "FooterLanguage",
                "data-sentry-source-file": "FooterLanguage.tsx",
                children: e
            }), h.LanguageLink = ({
                children: e
            }) => (0, a.jsx)("li", {
                className: "text-tiny-bold mr-4 text-gray-800 dark:text-gray-200",
                "data-sentry-component": "FooterLanguageLink",
                "data-sentry-source-file": "FooterLanguageLink.tsx",
                children: e
            }), h.LanguageLinks = ({
                children: e
            }) => (0, a.jsx)("ul", {
                className: "flex flex-wrap gap-y-2 whitespace-nowrap",
                "data-sentry-component": "FooterLanguageLinks",
                "data-sentry-source-file": "FooterLanguageLinks.tsx",
                children: e
            }), h.LanguageSocialContainer = ({
                children: e
            }) => (0, a.jsx)("div", {
                className: "flex flex-col border-b border-gray-200 pb-6 dark:border-gray-800 xl:flex-row",
                "data-sentry-component": "FooterLanguageSocialContainer",
                "data-sentry-source-file": "FooterLanguageSocialContainer.tsx",
                children: e
            }), h.LegalContainer = ({
                children: e
            }) => (0, a.jsx)("div", {
                className: "flex basis-full flex-col",
                "data-sentry-component": "FooterLegalContainer",
                "data-sentry-source-file": "FooterLegalContainer.tsx",
                children: e
            }), h.LegalLink = ({
                children: e
            }) => (0, a.jsx)("li", {
                className: "text-tiny-bold mr-4 text-gray-800 dark:text-gray-200",
                "data-sentry-component": "FooterLegalLink",
                "data-sentry-source-file": "FooterLegalLink.tsx",
                children: e
            }), h.LegalLinks = ({
                children: e
            }) => (0, a.jsx)("ul", {
                className: "my-4 flex flex-wrap",
                "data-sentry-component": "FooterLegalLinks",
                "data-sentry-source-file": "FooterLegalLinks.tsx",
                children: e
            }), h.Navigation = ({
                children: e
            }) => (0, a.jsx)("div", {
                className: "mb-6 border-b border-gray-200 pb-6 dark:border-gray-800",
                "data-sentry-component": "FooterNavigation",
                "data-sentry-source-file": "FooterNavigation.tsx",
                children: e
            }), h.NavigationColumn = ({
                children: e,
                className: t = ""
            }) => {
                let r = (0, m.$)("mt-6 flex-[0_50%] md:flex-[0_25%] lg:flex-1", t);
                return (0, a.jsx)("div", {
                    className: r,
                    "data-sentry-component": "FooterNavigationColumn",
                    "data-sentry-source-file": "FooterNavigationColumn.tsx",
                    children: e
                })
            }, h.NavigationColumns = ({
                children: e
            }) => (0, a.jsx)("div", {
                className: "flex flex-wrap",
                "data-sentry-component": "FooterNavigationColumns",
                "data-sentry-source-file": "FooterNavigationColumns.tsx",
                children: e
            }), h.NavigationLink = ({
                children: e
            }) => (0, a.jsx)("li", {
                className: "mb-2",
                "data-sentry-component": "FooterNavigationLink",
                "data-sentry-source-file": "FooterNavigationLink.tsx",
                children: e
            }), h.NavigationLinks = ({
                children: e,
                className: t = ""
            }) => (0, a.jsx)("ul", {
                className: t,
                "data-sentry-component": "FooterNavigationLinks",
                "data-sentry-source-file": "FooterNavigationLinks.tsx",
                children: e
            }), h.Social = ({
                children: e
            }) => (0, a.jsx)("div", {
                className: "mt-6 flex-1",
                "data-sentry-component": "FooterSocial",
                "data-sentry-source-file": "FooterSocial.tsx",
                children: e
            }), h.SocialLogo = ({
                children: e
            }) => (0, a.jsx)("li", {
                className: "relative h-6 w-6 cursor-pointer transition-all duration-300 ease-out hover:opacity-80 dark:hover:opacity-70",
                "data-sentry-component": "FooterSocialLogo",
                "data-sentry-source-file": "FooterSocialLogo.tsx",
                children: e
            }), h.SocialLogos = ({
                children: e
            }) => (0, a.jsx)("ul", {
                className: "flex gap-x-2 xl:flex-1",
                "data-sentry-component": "FooterSocialLogos",
                "data-sentry-source-file": "FooterSocialLogos.tsx",
                children: e
            }), h.Title = ({
                children: e
            }) => (0, a.jsx)("div", {
                className: "text-small mb-2 text-gray-600 dark:text-gray-400",
                "data-sentry-component": "FooterTitle",
                "data-sentry-source-file": "FooterTitle.tsx",
                children: e
            }), h.SocialCurrencyContainer = ({
                children: e
            }) => (0, a.jsx)("div", {
                className: "flex basis-2/4 flex-col md:flex-row",
                "data-sentry-component": "FooterSocialCurrencyContainer",
                "data-sentry-source-file": "FooterSocialCurrencyContainer.tsx",
                children: e
            }), h.CurrencyContainer = ({
                children: e
            }) => (0, a.jsx)("div", {
                className: "mt-6 flex-1",
                "data-sentry-component": "FooterCurrencyContainer",
                "data-sentry-source-file": "FooterCurrencyContainer.tsx",
                children: e
            });
            var x = r(90515),
                f = r(69625);
            let p = ({
                className: e = "",
                width: t = 30,
                height: r = 14
            }) => (0, a.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: t,
                height: r,
                viewBox: "0 0 30 14",
                className: e,
                "data-sentry-element": "svg",
                "data-sentry-component": "PrivacyIcon",
                "data-sentry-source-file": "PrivacyIcon.tsx",
                children: (0, a.jsxs)("g", {
                    "data-sentry-element": "g",
                    "data-sentry-source-file": "PrivacyIcon.tsx",
                    children: [(0, a.jsx)("g", {
                        id: "final---dec.11-2020_1_",
                        "data-sentry-element": "g",
                        "data-sentry-source-file": "PrivacyIcon.tsx",
                        children: (0, a.jsx)("g", {
                            id: "_x30_208-our-toggle_2_",
                            transform: "translate(-1275.000000, -200.000000)",
                            "data-sentry-element": "g",
                            "data-sentry-source-file": "PrivacyIcon.tsx",
                            children: (0, a.jsx)("g", {
                                id: "Final-Copy-2_2_",
                                transform: "translate(1275.000000, 200.000000)",
                                "data-sentry-element": "g",
                                "data-sentry-source-file": "PrivacyIcon.tsx",
                                children: (0, a.jsx)("path", {
                                    style: {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        fill: "#FFFFFF"
                                    },
                                    d: "M7.4,12.8h6.8l3.1-11.6H7.4C4.2,1.2,1.6,3.8,1.6,7S4.2,12.8,7.4,12.8z",
                                    "data-sentry-element": "path",
                                    "data-sentry-source-file": "PrivacyIcon.tsx"
                                })
                            })
                        })
                    }), (0, a.jsx)("g", {
                        id: "final---dec.11-2020",
                        "data-sentry-element": "g",
                        "data-sentry-source-file": "PrivacyIcon.tsx",
                        children: (0, a.jsx)("g", {
                            id: "_x30_208-our-toggle",
                            transform: "translate(-1275.000000, -200.000000)",
                            "data-sentry-element": "g",
                            "data-sentry-source-file": "PrivacyIcon.tsx",
                            children: (0, a.jsxs)("g", {
                                id: "Final-Copy-2",
                                transform: "translate(1275.000000, 200.000000)",
                                "data-sentry-element": "g",
                                "data-sentry-source-file": "PrivacyIcon.tsx",
                                children: [(0, a.jsx)("path", {
                                    style: {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        fill: "#0066FF"
                                    },
                                    d: "M22.6,0H7.4c-3.9,0-7,3.1-7,7s3.1,7,7,7h15.2c3.9,0,7-3.1,7-7S26.4,0,22.6,0z M1.6,7c0-3.2,2.6-5.8,5.8-5.8 h9.9l-3.1,11.6H7.4C4.2,12.8,1.6,10.2,1.6,7z",
                                    "data-sentry-element": "path",
                                    "data-sentry-source-file": "PrivacyIcon.tsx"
                                }), (0, a.jsx)("path", {
                                    id: "x",
                                    style: {
                                        fill: "#FFFFFF"
                                    },
                                    d: "M24.6,4c0.2,0.2,0.2,0.6,0,0.8l0,0L22.5,7l2.2,2.2c0.2,0.2,0.2,0.6,0,0.8c-0.2,0.2-0.6,0.2-0.8,0 l0,0l-2.2-2.2L19.5,10c-0.2,0.2-0.6,0.2-0.8,0c-0.2-0.2-0.2-0.6,0-0.8l0,0L20.8,7l-2.2-2.2c-0.2-0.2-0.2-0.6,0-0.8 c0.2-0.2,0.6-0.2,0.8,0l0,0l2.2,2.2L23.8,4C24,3.8,24.4,3.8,24.6,4z",
                                    "data-sentry-element": "path",
                                    "data-sentry-source-file": "PrivacyIcon.tsx"
                                }), (0, a.jsx)("path", {
                                    id: "y",
                                    style: {
                                        fill: "#0066FF"
                                    },
                                    d: "M12.7,4.1c0.2,0.2,0.3,0.6,0.1,0.8l0,0L8.6,9.8C8.5,9.9,8.4,10,8.3,10c-0.2,0.1-0.5,0.1-0.7-0.1l0,0 L5.4,7.7c-0.2-0.2-0.2-0.6,0-0.8c0.2-0.2,0.6-0.2,0.8,0l0,0L8,8.6l3.8-4.5C12,3.9,12.4,3.9,12.7,4.1z",
                                    "data-sentry-element": "path",
                                    "data-sentry-source-file": "PrivacyIcon.tsx"
                                })]
                            })
                        })
                    })]
                })
            });
            var y = r(91895),
                b = r(96608);
            let v = {
                    EU: "EUR",
                    HR: "EUR",
                    CY: "EUR",
                    CZ: "EUR",
                    DK: "EUR",
                    EE: "EUR",
                    FI: "EUR",
                    GR: "EUR",
                    IE: "EUR",
                    IT: "EUR",
                    LV: "EUR",
                    LT: "EUR",
                    MT: "EUR",
                    NL: "EUR",
                    NO: "EUR",
                    PL: "EUR",
                    SK: "EUR",
                    SI: "EUR",
                    SE: "EUR",
                    BE: "EUR",
                    FR: "EUR",
                    LU: "EUR",
                    AT: "EUR",
                    DE: "EUR",
                    LI: "EUR",
                    CH: "EUR",
                    PT: "EUR",
                    ES: "EUR",
                    AD: "EUR",
                    ME: "EUR",
                    SM: "EUR",
                    VA: "EUR",
                    GF: "EUR",
                    GP: "EUR",
                    MQ: "EUR",
                    YT: "EUR",
                    MC: "EUR",
                    RE: "EUR",
                    BL: "EUR",
                    MF: "EUR",
                    PM: "EUR",
                    UA: "EUR",
                    BR: "BRL",
                    CN: "CNY",
                    JP: "JPY",
                    KR: "KRW",
                    US: "USD"
                },
                k = [{
                    title: "English",
                    locale: "en"
                }, {
                    title: "Deutsch",
                    locale: "de"
                }, {
                    title: "日本語",
                    locale: "ja"
                }, {
                    title: "Fran\xe7ais",
                    locale: "fr"
                }, {
                    title: "Portugu\xeas",
                    locale: "pt"
                }, {
                    title: "中文",
                    locale: "cn"
                }, {
                    title: "Espa\xf1ol",
                    locale: "es"
                }, {
                    title: "Русский",
                    locale: "ru"
                }, {
                    title: "한국어",
                    locale: "kr"
                }],
                j = ({
                    data: e
                }) => {
                    let [t] = (0, b.A)("location", "US"), [r, d] = (0, b.A)("currency", v[t] || "USD"), {
                        dispatch: m,
                        state: g
                    } = (0, y.Ay)(), {
                        social: j,
                        navigation: w,
                        legal: N,
                        currencyLabel: L,
                        languageLabel: E
                    } = e, [F, R] = (0, n.useState)(!1), S = (0, i.a8)(), [_] = (0, b.A)("experiment_exposure", "");
                    (0, n.useEffect)(() => {
                        R(!0)
                    }, []), (0, n.useEffect)(() => {
                        g.currency !== r && m({
                            type: y.LW.UPDATE,
                            currency: r
                        })
                    }, [r, g, m]);
                    let A = (e, t) => {
                        if (!e) return null;
                        let {
                            fieldLink: r,
                            title: n
                        } = e, s = r?.linkReference?.href?.current || "";
                        return (0, a.jsx)(h.NavigationLink, {
                            "data-sentry-element": "Footer.NavigationLink",
                            "data-sentry-component": "renderNavigationLinks",
                            "data-sentry-source-file": "Footer.tsx",
                            children: (0, a.jsx)(l.A, {
                                size: "tiny",
                                href: s,
                                target: r?.linkReference?.target === "_blank" || r?.linkReference?.target === "_parent" || r?.linkReference?.target === "_top" ? r?.linkReference?.target : "_self",
                                "data-sentry-element": "Link",
                                "data-sentry-source-file": "Footer.tsx",
                                children: n
                            })
                        }, `navigation-link-${n}-${t}`)
                    };
                    return (0, a.jsxs)(h, {
                        hasContainer: !0,
                        "data-sentry-element": "Footer",
                        "data-sentry-component": "LayoutFooter",
                        "data-sentry-source-file": "Footer.tsx",
                        children: [(0, a.jsxs)(h.LanguageSocialContainer, {
                            "data-sentry-element": "Footer.LanguageSocialContainer",
                            "data-sentry-source-file": "Footer.tsx",
                            children: [(0, a.jsxs)(h.Language, {
                                "data-sentry-element": "Footer.Language",
                                "data-sentry-source-file": "Footer.tsx",
                                children: [(0, a.jsx)(h.Title, {
                                    "data-sentry-element": "Footer.Title",
                                    "data-sentry-source-file": "Footer.tsx",
                                    children: E
                                }), (0, a.jsx)(h.LanguageLinks, {
                                    "data-sentry-element": "Footer.LanguageLinks",
                                    "data-sentry-source-file": "Footer.tsx",
                                    children: k.map((e, t) => (0, a.jsx)(h.LanguageLink, {
                                        "data-sentry-element": "Footer.LanguageLink",
                                        "data-sentry-component": "renderLanguages",
                                        "data-sentry-source-file": "Footer.tsx",
                                        children: (0, a.jsx)(c(), {
                                            href: `/${e.locale}${S}`,
                                            "data-testid": e.title,
                                            prefetch: !1,
                                            "data-sentry-element": "LanguageLink",
                                            "data-sentry-source-file": "Footer.tsx",
                                            children: e.title
                                        })
                                    }, `language-${e.title}-${t}`))
                                })]
                            }), (0, a.jsxs)(h.SocialCurrencyContainer, {
                                "data-sentry-element": "Footer.SocialCurrencyContainer",
                                "data-sentry-source-file": "Footer.tsx",
                                children: [j && (0, a.jsxs)(h.Social, {
                                    children: [(0, a.jsx)(h.Title, {
                                        children: j.socialLabel
                                    }), (0, a.jsx)(h.SocialLogos, {
                                        children: j.logos?.map((e, t) => {
                                            if (!e) return null;
                                            let {
                                                fieldLink: r,
                                                file: n,
                                                icon: s
                                            } = e, i = r?.linkReference?.href?.current || "";
                                            return (0, a.jsx)(h.SocialLogo, {
                                                "data-sentry-element": "Footer.SocialLogo",
                                                "data-sentry-component": "renderLogos",
                                                "data-sentry-source-file": "Footer.tsx",
                                                children: (0, a.jsx)("a", {
                                                    href: i,
                                                    target: r?.linkReference?.target === "_blank" || r?.linkReference?.target === "_parent" || r?.linkReference?.target === "_top" ? r?.linkReference?.target : "_self",
                                                    className: "focus-ring relative block h-full",
                                                    children: s ? (0, a.jsx)(u.A, {
                                                        icon: s
                                                    }) : (0, a.jsx)(o.default, {
                                                        src: n?.file?.asset.url || "",
                                                        fill: !0,
                                                        alt: n?.alt || "",
                                                        className: "dark:invert"
                                                    })
                                                })
                                            }, `social-logo-${t}`)
                                        })
                                    })]
                                }), (0, a.jsxs)(h.CurrencyContainer, {
                                    "data-sentry-element": "Footer.CurrencyContainer",
                                    "data-sentry-source-file": "Footer.tsx",
                                    children: [(0, a.jsx)("span", {
                                        id: "currency-label",
                                        children: (0, a.jsx)(h.Title, {
                                            "data-sentry-element": "Footer.Title",
                                            "data-sentry-source-file": "Footer.tsx",
                                            children: L
                                        })
                                    }), (0, a.jsxs)(x.A, {
                                        "aria-labelledby": "currency-label",
                                        className: "w-full",
                                        selectedKey: r,
                                        onSelectionChange: e => {
                                            e && (d(e.toString()), m({
                                                type: y.LW.UPDATE,
                                                currency: e.toString()
                                            }), ((e, t) => {
                                                try {
                                                    if (!e) return !1;
                                                    let r = JSON.parse(decodeURIComponent(e)) ?? {};
                                                    return !!r[t] && r[t].hasCurrency
                                                } catch (e) {
                                                    return console.warn("Error parsing experiment cookie"), !1
                                                }
                                            })(_, S) && window.location.reload())
                                        },
                                        "data-sentry-element": "Select",
                                        "data-sentry-source-file": "Footer.tsx",
                                        children: [(0, a.jsx)(x.A.Item, {
                                            "data-sentry-element": "Select.Item",
                                            "data-sentry-source-file": "Footer.tsx",
                                            children: "BRL"
                                        }, "BRL"), (0, a.jsx)(x.A.Item, {
                                            "data-sentry-element": "Select.Item",
                                            "data-sentry-source-file": "Footer.tsx",
                                            children: "CNY"
                                        }, "CNY"), (0, a.jsx)(x.A.Item, {
                                            "data-sentry-element": "Select.Item",
                                            "data-sentry-source-file": "Footer.tsx",
                                            children: "JPY"
                                        }, "JPY"), (0, a.jsx)(x.A.Item, {
                                            "data-sentry-element": "Select.Item",
                                            "data-sentry-source-file": "Footer.tsx",
                                            children: "KRW"
                                        }, "KRW"), (0, a.jsx)(x.A.Item, {
                                            "data-sentry-element": "Select.Item",
                                            "data-sentry-source-file": "Footer.tsx",
                                            children: "USD"
                                        }, "USD"), (0, a.jsx)(x.A.Item, {
                                            "data-sentry-element": "Select.Item",
                                            "data-sentry-source-file": "Footer.tsx",
                                            children: "EUR"
                                        }, "EUR")]
                                    })]
                                })]
                            })]
                        }), (0, a.jsx)(h.Navigation, {
                            "data-sentry-element": "Footer.Navigation",
                            "data-sentry-source-file": "Footer.tsx",
                            children: (0, a.jsx)(h.NavigationColumns, {
                                "data-sentry-element": "Footer.NavigationColumns",
                                "data-sentry-source-file": "Footer.tsx",
                                children: w?.map((e, t) => {
                                    if (!e) return null;
                                    let {
                                        navigationLinks: r,
                                        title: n
                                    } = e;
                                    return (0, a.jsxs)(h.NavigationColumn, {
                                        "data-sentry-element": "Footer.NavigationColumn",
                                        "data-sentry-component": "renderNavigation",
                                        "data-sentry-source-file": "Footer.tsx",
                                        children: [(0, a.jsx)(h.Title, {
                                            "data-sentry-element": "Footer.Title",
                                            "data-sentry-source-file": "Footer.tsx",
                                            children: n
                                        }), (0, a.jsx)(h.NavigationLinks, {
                                            className: "inline-block",
                                            "data-sentry-element": "Footer.NavigationLinks",
                                            "data-sentry-source-file": "Footer.tsx",
                                            children: r?.map(A)
                                        })]
                                    }, `navigation-column${n}-${t}`)
                                })
                            })
                        }), (0, a.jsxs)(h.LegalContainer, {
                            "data-sentry-element": "Footer.LegalContainer",
                            "data-sentry-source-file": "Footer.tsx",
                            children: [(0, a.jsx)(h.Copyright, {
                                "data-sentry-element": "Footer.Copyright",
                                "data-sentry-source-file": "Footer.tsx",
                                children: N?.copyright
                            }), (0, a.jsxs)(h.LegalLinks, {
                                "data-sentry-element": "Footer.LegalLinks",
                                "data-sentry-source-file": "Footer.tsx",
                                children: [N.legalLinks?.map((e, t) => {
                                    if (!e) return null;
                                    let {
                                        fieldLink: r,
                                        title: n
                                    } = e, s = r?.linkReference?.href?.current || "";
                                    return (0, a.jsx)(h.LegalLink, {
                                        "data-sentry-element": "Footer.LegalLink",
                                        "data-sentry-component": "renderLegalLinks",
                                        "data-sentry-source-file": "Footer.tsx",
                                        children: (0, a.jsx)(l.A, {
                                            size: "tiny",
                                            href: s,
                                            target: r?.linkReference?.target === "_blank" || r?.linkReference?.target === "_parent" || r?.linkReference?.target === "_top" ? r?.linkReference?.target : "_self",
                                            "data-sentry-element": "Link",
                                            "data-sentry-source-file": "Footer.tsx",
                                            children: n
                                        })
                                    }, `legal-link-${n}-${t}`)
                                }), F && (0, a.jsx)(h.LegalLink, {
                                    children: (0, a.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [(0, a.jsx)(p, {
                                            className: "mr-1"
                                        }), (0, a.jsx)("div", {
                                            id: "ot-sdk-btn",
                                            style: {
                                                fontSize: "inherit",
                                                lineHeight: "inherit"
                                            },
                                            className: "ot-sdk-show-settings hover:!text-blue focus:!text-blue dark:hover:!text-blue dark:focus:!text-blue focus-ring !border-none !bg-transparent !p-0 !text-gray-800 transition duration-200 hover:ease-in-out dark:!text-gray-200",
                                            tabIndex: 0,
                                            role: "button",
                                            children: e.legal.cookieSettings
                                        })]
                                    })
                                })]
                            }), (0, a.jsx)(h.Disclaimer, {
                                "data-sentry-element": "Footer.Disclaimer",
                                "data-sentry-source-file": "Footer.tsx",
                                children: (0, a.jsx)(f.A, {
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "Footer.tsx",
                                    children: (0, a.jsx)(s.RK, {
                                        value: N.disclaimer,
                                        "data-sentry-element": "PortableText",
                                        "data-sentry-source-file": "Footer.tsx"
                                    })
                                })
                            })]
                        })]
                    })
                }
        },
        14809: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => o
            });
            var a = r(73723),
                n = r(73641),
                s = r(6037);
            let o = () => {
                let e = (0, s.usePathname)();
                return (0, a.jsxs)("div", {
                    className: "fixed bottom-0 z-50 flex h-[60px] w-full items-center bg-[white] bg-orange-100 px-5",
                    "data-sentry-component": "PreviewExitBanner",
                    "data-sentry-source-file": "PreviewExitBanner.tsx",
                    children: [(0, a.jsx)("div", {
                        className: "flex flex-1 items-center",
                        children: (0, a.jsxs)("h4", {
                            className: "",
                            children: ["You are in ", (0, a.jsx)("b", {
                                children: "Draft Mode"
                            }), ", your changes will be live once you publish them, be cautious."]
                        })
                    }), (0, a.jsx)(n.A, {
                        className: "rounded text-white",
                        href: `/api/exit-draft?destination=${e}`,
                        prefetch: !1,
                        "data-sentry-element": "Button",
                        "data-sentry-source-file": "PreviewExitBanner.tsx",
                        children: "Exit Draft Mode"
                    })]
                })
            }
        },
        22901: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            let a = r(92584).A
        },
        26466: (e, t, r) => {
            "use strict";
            r.d(t, {
                IB: () => s,
                b: () => d,
                kI: () => o,
                q: () => l,
                yj: () => i
            });
            var a = r(6037),
                n = r(8517);
            let s = ["en", "fr", "es", "de", "pt", "ru", "cn", "ja", "kr"],
                o = {
                    en: "en",
                    fr: "fr",
                    es: "es",
                    de: "de",
                    pt: "pt",
                    ru: "ru",
                    cn: "zh",
                    ja: "ja",
                    kr: "ko"
                },
                i = o,
                l = "en",
                d = "as-needed";
            (0, n.M6)(async ({
                requestLocale: e
            }) => {
                let t = await e;
                return s.includes(t) || (0, a.notFound)(), {
                    locale: t,
                    messages: {}
                }
            })
        },
        38672: () => {},
        42505: (e, t, r) => {
            "use strict";
            r.d(t, {
                i: () => o
            });
            var a = r(90950),
                n = r(95176);
            let s = r.n(n)()(a.B9),
                o = e => e ? s.image(e) : null
        },
        44524: (e, t, r) => {
            "use strict";
            r.d(t, {
                N_: () => s,
                a8: () => i
            });
            var a = r(73926),
                n = r(26466);
            let {
                Link: s,
                redirect: o,
                usePathname: i,
                useRouter: l
            } = (0, a.xp)({
                locales: n.IB,
                localePrefix: n.b,
                defaultLocale: n.q
            })
        },
        46513: (e, t, r) => {
            "use strict";
            r.d(t, {
                Y: () => a
            });
            let a = async () => {
                let e = await fetch("https://api.unity.com/v1/oauth2/authorize/logined-users", {
                        credentials: "include"
                    }),
                    t = await e.json();
                if (!e.ok) throw Error(`Fetching user failed with status ${e.status}. Reason: ${JSON.stringify(t.details)}`);
                return t.model
            }
        },
        55951: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => o
            });
            var a = r(73723),
                n = r(63079),
                s = r(91895);

            function o({
                children: e
            }) {
                return (0, a.jsx)(n.A_, {
                    "data-sentry-element": "GenesisSessionProvider",
                    "data-sentry-component": "GlobalProviders",
                    "data-sentry-source-file": "GlobalProviders.tsx",
                    children: (0, a.jsx)(s.SO, {
                        "data-sentry-element": "CommerceContextProvider",
                        "data-sentry-source-file": "GlobalProviders.tsx",
                        children: e
                    })
                })
            }
        },
        63079: (e, t, r) => {
            "use strict";
            r.d(t, {
                A_: () => o,
                oQ: () => i
            });
            var a = r(73723),
                n = r(7787);
            let s = (0, n.createContext)({}),
                o = ({
                    children: e
                }) => {
                    let [t, r] = (0, n.useState)({
                        ...JSON.parse(sessionStorage.getItem("UNITY_SESSION") || "{}")
                    });
                    return (0, a.jsx)(s.Provider, {
                        value: {
                            genesisSession: t,
                            setGenesisSession: r
                        },
                        "data-sentry-element": "GenesisSessionContext.Provider",
                        "data-sentry-component": "GenesisSessionProvider",
                        "data-sentry-source-file": "genesis.tsx",
                        children: e
                    })
                },
                i = () => (0, n.useContext)(s)
        },
        64007: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let a = e => {
                let {
                    event: t = "userEvent",
                    event_name: r = "form_action",
                    properties: a
                } = e;
                {
                    let e = document.cookie?.split("; ").find(e => e.includes("ELOQUA"))?.split("&")[0]?.split("GUID=")[1] || "",
                        n = {
                            event: t,
                            event_name: r,
                            properties: {
                                ...a,
                                form_customer_id: a?.form_customer_id || e
                            }
                        };
                    window?.dataLayer?.push(n)
                }
            };
            a.pushBlockInteraction = (e, t, r) => {
                e.stopPropagation(), a({
                    event: "userEvent",
                    event_name: "navigation_click",
                    properties: {
                        navigation_click_block: t,
                        navigation_click_block_type: r
                    }
                })
            };
            let n = a
        },
        69625: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var a = r(73723),
                n = r(7787),
                s = r(28511),
                o = r(13073);
            let i = (0, n.forwardRef)(function({
                children: e,
                className: t = ""
            }, r) {
                let n = (0, o.U)(r),
                    i = (0, s.A)("text", t);
                return (0, a.jsx)("div", {
                    ref: n,
                    className: i,
                    children: e
                })
            })
        },
        70518: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 99061)), Promise.resolve().then(r.bind(r, 9162)), Promise.resolve().then(r.bind(r, 55951)), Promise.resolve().then(r.bind(r, 97629)), Promise.resolve().then(r.bind(r, 7286)), Promise.resolve().then(r.bind(r, 14809)), Promise.resolve().then(r.t.bind(r, 38672, 23)), Promise.resolve().then(r.bind(r, 13759)), Promise.resolve().then(r.bind(r, 2308)), Promise.resolve().then(r.bind(r, 58473)), Promise.resolve().then(r.t.bind(r, 63266, 23)), Promise.resolve().then(r.t.bind(r, 40569, 23))
        },
        73641: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => h
            });
            var a = r(73723),
                n = r(7787),
                s = r(96828),
                o = r(28511),
                i = r(36916),
                l = r(78269),
                d = r(4337),
                c = r(50816),
                u = r(13073),
                m = r(24566),
                g = r(6158);
            let h = (0, n.forwardRef)(function({
                children: e,
                active: t = !1,
                disabled: r = !1,
                variant: n = "primary",
                size: h = "medium",
                className: x = "",
                hasArrow: f = !1,
                href: p = "",
                rounded: y = !1,
                outlined: b = !1,
                tabIndex: v,
                tag: k = "button",
                localePrefix: j,
                locale: w,
                prefetch: N,
                onPress: L,
                ...E
            }, F) {
                let R = (0, u.U)(F),
                    {
                        buttonProps: S
                    } = (0, i.s)({
                        children: e,
                        active: t,
                        disabled: r,
                        variant: n,
                        size: h,
                        className: x,
                        hasArrow: f,
                        rounded: y,
                        outlined: b,
                        tabIndex: v,
                        elementType: p ? "a" : k,
                        onPress: L,
                        ...E
                    }, R),
                    {
                        hoverProps: _,
                        isHovered: A
                    } = (0, l.M)({
                        isDisabled: !1
                    }),
                    {
                        pressProps: C
                    } = (0, d.d)({
                        onPress: L,
                        isDisabled: r
                    }),
                    {
                        isFocusVisible: I,
                        focusProps: D
                    } = (0, c.o)(),
                    U = (0, o.$)("cursor-pointer inline-block items-center outline-none overflow-x-hidden", {
                        "btn-disabled": r
                    }, {
                        primary: "btn-primary",
                        secondary: "btn-secondary"
                    } [n], {
                        small: "btn-sm caption-xs-bold px-3 py-2",
                        medium: "btn-md caption-sm-bold px-3 py-2.5",
                        large: "btn-lg caption-bold px-4 py-3.5",
                        "x-large": "btn-xl caption-bold py-5 px-3"
                    } [h], {
                        "inline-flex": p
                    }, {
                        "rounded-full": y
                    }, {
                        "btn-outlined border-solid border-2": b
                    }, {
                        "btn-arrow": f
                    }, {
                        hovered: A || t
                    }, {
                        "focused a11y-ring ": I
                    }, x),
                    H = (0, o.$)("btn-label transition-spacing flex duration-300 ease-in-out", {
                        "btn-disabled": r
                    }),
                    P = (0, o.$)("right-arrow", "dark:fill-white", {
                        "fill-black": "secondary" === n && !r,
                        "fill-blue": "secondary" !== n && !r,
                        "btn-disabled": r
                    }),
                    T = "string" == typeof e ? e : "";
                return (delete S.onClick, p) ? (0, a.jsx)(s.N_, {
                    locale: w,
                    lang: w,
                    ...(0, m.v)(S, _, D),
                    ref: R,
                    className: U,
                    href: p,
                    tabIndex: v,
                    ...T && {
                        "aria-label": T
                    },
                    role: "button",
                    localePrefix: j,
                    prefetch: N,
                    children: (0, a.jsxs)("div", {
                        className: "btn-content flex items-center align-middle transition-transform duration-300",
                        children: [f && (0, a.jsx)(g.H, {
                            className: "left-arrow fill-white dark:fill-black"
                        }), (0, a.jsx)("span", {
                            className: H,
                            children: e
                        }), f && (0, a.jsx)(g.H, {
                            className: P
                        })]
                    })
                }) : (0, a.jsx)(k, {
                    ...(0, m.v)(S, _, D, C),
                    ref: R,
                    className: U,
                    ...T && {
                        "aria-label": T
                    },
                    tabIndex: v,
                    children: (0, a.jsxs)("div", {
                        className: "btn-content flex items-center align-middle transition-transform duration-300",
                        children: [f && (0, a.jsx)(g.H, {
                            className: "left-arrow fill-white dark:fill-black"
                        }), (0, a.jsx)("span", {
                            className: H,
                            children: e
                        }), f && (0, a.jsx)(g.H, {
                            className: P
                        })]
                    })
                })
            })
        },
        84344: (e, t, r) => {
            "use strict";
            r.d(t, {
                N_: () => a
            });
            let {
                Link: a,
                redirect: n,
                usePathname: s,
                useRouter: o
            } = (0, r(73926).xp)({
                locales: ["en", "fr", "es", "de", "pt", "ru", "cn", "ja", "kr"],
                localePrefix: "as-needed",
                defaultLocale: "en"
            })
        },
        90515: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => w
            });
            var a = r(73723),
                n = r(7787),
                s = r(28511),
                o = r(81990),
                i = r(29915),
                l = r(77271),
                d = r(36167),
                c = r(3561),
                u = r(16146),
                m = r(33064),
                g = r(15078);
            let h = ({
                children: e,
                state: t,
                width: r,
                offset: s = 0,
                ...o
            }) => {
                let i = (0, n.useRef)(null),
                    {
                        popoverProps: l,
                        underlayProps: d
                    } = (0, u.f)({
                        ...o,
                        offset: s,
                        popoverRef: i
                    }, t);
                return (0, a.jsxs)(m.hJ, {
                    portalContainer: document.body,
                    "data-sentry-element": "Overlay",
                    "data-sentry-component": "Popover",
                    "data-sentry-source-file": "Popover.tsx",
                    children: [(0, a.jsx)("div", {
                        ...d
                    }), (0, a.jsxs)("div", {
                        ...l,
                        ref: i,
                        className: "min-w-min overflow-auto rounded-xl bg-white p-1 shadow-[0px_4px_16px_rgba(0,0,0,0.16)] dark:bg-black",
                        style: {
                            ...l.style,
                            width: r
                        },
                        children: [(0, a.jsx)(g.R, {
                            onDismiss: t.close,
                            "data-sentry-element": "DismissButton",
                            "data-sentry-source-file": "Popover.tsx"
                        }), e, (0, a.jsx)(g.R, {
                            onDismiss: t.close,
                            "data-sentry-element": "DismissButton",
                            "data-sentry-source-file": "Popover.tsx"
                        })]
                    })]
                })
            };
            var x = r(13432),
                f = r(66572);
            let p = ({
                    item: e,
                    state: t
                }) => {
                    let r = (0, n.useRef)(null),
                        {
                            optionProps: o,
                            isSelected: i,
                            isFocused: l
                        } = (0, f.x)({
                            key: e.key
                        }, t, r),
                        d = (0, s.$)("text-tiny-bold cursor-pointer px-2 py-1 text-gray-700 focus:outline-0 dark:text-gray-300 outline-none break-words rounded-lg", {
                            "bg-gray-200 dark:bg-gray-800 dark:text-white": i
                        }, {
                            "bg-gray-200 dark:bg-gray-800 dark:text-white": l
                        });
                    return (0, a.jsx)("li", {
                        ...o,
                        className: d,
                        ref: r,
                        "data-sentry-component": "Option",
                        "data-sentry-source-file": "ListBox.tsx",
                        children: e.rendered
                    })
                },
                y = ({
                    state: e,
                    ...t
                }) => {
                    let r = (0, n.useRef)(null),
                        {
                            listBoxProps: s
                        } = (0, x.X)(t, e, r);
                    return (0, a.jsx)("ul", {
                        ...s,
                        ref: r,
                        className: "outline-none",
                        "data-sentry-component": "ListBox",
                        "data-sentry-source-file": "ListBox.tsx",
                        children: Array.from(e.collection).map(t => (0, a.jsx)(p, {
                            item: t,
                            state: e
                        }, t.key))
                    })
                };
            var b = r(36916),
                v = r(13073);
            let k = (0, n.forwardRef)(function({
                    children: e,
                    className: t = "",
                    isOpen: r,
                    ...n
                }, o) {
                    let i = (0, v.U)(o),
                        {
                            buttonProps: l
                        } = (0, b.s)({
                            children: e,
                            className: t,
                            isOpen: r,
                            ...n
                        }, i),
                        d = (0, s.$)("transition-all ease-out duration-400 flex py-2 items-center w-full focus:ring focus:ring-blue-dark focus:outline-blue focus:outline-offset-0 focus:border-none justify-between whitespace-nowrap rounded-lg border border-gray-400 bg-gray-50 px-3 text-gray-900 hover:border-gray-900 dark:border-gray-500 dark:bg-gray-900 dark:text-gray-400 dark:text-white dark:hover:border-white outline-none", {
                            "dark:bg-gray-900 dark:border-transparent": r,
                            "ring ring-blue-dark !outline-blue !outline-offset-0 !border-none": r
                        }, t);
                    return (0, a.jsx)("button", {
                        ...l,
                        ref: i,
                        type: "button",
                        className: d,
                        children: e
                    })
                }),
                j = e => {
                    let t = (0, n.useRef)(null),
                        r = (0, l.n)(e),
                        {
                            triggerProps: d,
                            valueProps: u,
                            menuProps: m
                        } = (0, o.W)(e, r, t),
                        g = t.current?.clientWidth ? t.current?.clientWidth : 0,
                        [x, f] = (0, n.useState)(g);
                    (0, n.useEffect)(() => {
                        f(g)
                    }, [g]);
                    let p = (0, s.$)("stroke-gray-900 group-hover/select:stroke-gray-800 dark:group-hover/select:stroke-gray-200", {
                            "rotate-180 stroke-gray-900 dark:stroke-gray-200": r.isOpen
                        }),
                        b = (0, s.$)("group/select", e.className);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(i.H, {
                            state: r,
                            triggerRef: t,
                            label: e.label,
                            name: e.name,
                            "data-sentry-element": "HiddenSelect",
                            "data-sentry-source-file": "Select.tsx"
                        }), (0, a.jsxs)(k, {
                            ...d,
                            ref: t,
                            isOpen: r.isOpen,
                            className: b,
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "Select.tsx",
                            children: [(0, a.jsx)("span", {
                                ...u,
                                className: (0, s.$)({
                                    "text-gray-600 dark:text-gray-400": !r.selectedItem
                                }),
                                children: r.selectedItem ? r.selectedItem.rendered : e.placeholder || e.label
                            }), (0, a.jsx)("span", {
                                className: "pl-2",
                                children: (0, a.jsx)(c.A, {
                                    className: p,
                                    "data-sentry-element": "ArrowDown",
                                    "data-sentry-source-file": "Select.tsx"
                                })
                            })]
                        }), r.isOpen && (0, a.jsx)(h, {
                            state: r,
                            triggerRef: t,
                            placement: "bottom start",
                            offset: 8,
                            width: x,
                            children: (0, a.jsx)(y, {
                                ...m,
                                state: r
                            })
                        })]
                    })
                };
            j.Item = d.q;
            let w = j
        },
        90950: (e, t, r) => {
            "use strict";
            r.d(t, {
                B9: () => o
            });
            var a = r(80187),
                n = r(37811);
            let s = (0, a.UU)({
                    projectId: n.env.SANITY_STUDIO_PROJECT_ID || "fuvbjjlp",
                    dataset: n.env.SANITY_STUDIO_DATASET || "production",
                    apiVersion: "2023-10-12",
                    useCdn: !1,
                    perspective: "published",
                    requestTagPrefix: "hexagon-web"
                }),
                o = s.withConfig({
                    token: n.env.SANITY_STUDIO_TOKEN || "skbmHHM41x7T83M45rdoQ5eDnIZvmSMtvNLDWgtqaMVk7iqH2LROZuyD9CfiQEWyi8W04C9ImPHWWK3q19ERi5XWv0L1GP2s4u1p3sUTbjuDdpmVWr3ZsI8vGIbwZRn43SWI9ZYeYzzNBHk2DknFUXEfxpLGSZsNwiv24EcAFisqkG7gVso6",
                    useCdn: !0,
                    perspective: "published"
                });
            s.withConfig({
                token: n.env.SANITY_STUDIO_REVALIDATION_TOKEN,
                useCdn: !1
            }), s.withConfig({
                useCdn: !1,
                token: n.env.SANITY_WRITE_TOKEN,
                perspective: "raw"
            })
        },
        91895: (e, t, r) => {
            "use strict";
            r.d(t, {
                Ay: () => c,
                LW: () => s,
                SO: () => d
            });
            var a = r(73723),
                n = r(7787),
                s = function(e) {
                    return e.UPDATE = "UPDATE", e
                }({});
            let o = {},
                i = (0, n.createContext)(o),
                l = (e, t) => {
                    if ("UPDATE" !== t.type) return e;
                    {
                        let {
                            type: r,
                            ...a
                        } = t;
                        return {
                            ...e,
                            ...a
                        }
                    }
                },
                d = ({
                    children: e
                }) => {
                    let [t, r] = (0, n.useReducer)(l, o), s = (0, n.useMemo)(() => ({
                        state: t,
                        dispatch: r
                    }), [t, r]);
                    return (0, a.jsx)(i.Provider, {
                        value: s,
                        "data-sentry-element": "CommerceContext.Provider",
                        "data-sentry-component": "CommerceContextProvider",
                        "data-sentry-source-file": "CommerceContext.tsx",
                        children: e
                    })
                },
                c = () => (0, n.useContext)(i)
        },
        92315: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => m
            });
            var a = r(73723),
                n = r(7787),
                s = r(96828),
                o = r(28511),
                i = r(13366),
                l = r(13073),
                d = r(24566),
                c = r(50816);
            let u = ({
                    className: e,
                    width: t = 16,
                    height: r = 16
                }) => (0, a.jsx)("button", {
                    "aria-label": "Open in new tab",
                    "data-sentry-component": "ExternalLinkIcon",
                    "data-sentry-source-file": "ExternalLinkIcon.tsx",
                    children: (0, a.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 15 14",
                        className: e,
                        height: r,
                        width: t,
                        "data-sentry-element": "svg",
                        "data-sentry-source-file": "ExternalLinkIcon.tsx",
                        children: (0, a.jsx)("path", {
                            d: "M12.969 5.688a.656.656 0 0 1-1.313 0V3.772L8.402 7.028a.657.657 0 0 1-.93-.93l3.255-3.254H8.812a.656.656 0 1 1 0-1.313h3.5a.656.656 0 0 1 .657.657v3.5ZM10.563 7a.656.656 0 0 0-.657.656v3.5H3.344V4.594h3.5a.656.656 0 1 0 0-1.313H3.125a1.094 1.094 0 0 0-1.094 1.094v7a1.094 1.094 0 0 0 1.094 1.094h7a1.094 1.094 0 0 0 1.094-1.094V7.656A.656.656 0 0 0 10.563 7Z",
                            "data-sentry-element": "path",
                            "data-sentry-source-file": "ExternalLinkIcon.tsx"
                        })
                    })
                }),
                m = (0, n.forwardRef)(function(e, t) {
                    let r = (0, l.U)(t),
                        {
                            linkProps: n
                        } = (0, i.i)(e, r),
                        {
                            isFocusVisible: m,
                            focusProps: g
                        } = (0, c.o)(),
                        {
                            href: h,
                            target: x = "_self",
                            locale: f,
                            localePrefix: p,
                            className: y,
                            children: b,
                            size: v = "small",
                            underline: k = !1,
                            icon: j = null,
                            onClick: w = () => {}
                        } = e,
                        N = {
                            regular: 18,
                            small: 16,
                            tiny: 14
                        },
                        L = (0, o.A)("group outline-none", y),
                        E = (0, o.A)("text-black dark:text-white group-hover:text-blue group-focus:text-blue dark:group-hover:text-blue transition duration-200", k && ({
                            regular: "shadow-underline group-hover:shadow-underline-lg",
                            small: "shadow-underline group-hover:shadow-underline-lg",
                            tiny: "shadow-underline-sm group-hover:shadow-underline"
                        })[v], {
                            regular: "text-body-bold",
                            small: "text-small",
                            tiny: "text-tiny"
                        } [v]),
                        F = (0, o.A)("group-hover:fill-blue ml-2 h-4 w-4 fill-black transition duration-200 dark:fill-white group-focus-outline group-focus-visible:fill-blue"),
                        R = "string" == typeof b ? b : "";
                    return (0, a.jsx)(s.N_, {
                        ...(0, d.v)(n, g),
                        ref: r,
                        href: h,
                        target: x,
                        locale: f,
                        className: L,
                        role: "button",
                        ...R && {
                            "aria-label": R
                        },
                        onClick: w,
                        localePrefix: p,
                        children: (0, a.jsxs)("div", {
                            className: (0, o.A)("flex items-center", {
                                "a11y-ring rounded-sm": m
                            }),
                            children: [j && (0, a.jsx)("span", {
                                className: "group-hover:fill-blue group-focus:fill-blue mr-2 transition duration-200",
                                children: j
                            }), (0, a.jsx)("span", {
                                className: E,
                                children: b
                            }), "_blank" === x && (0, a.jsx)(u, {
                                className: F,
                                height: N[v],
                                width: N[v]
                            })]
                        })
                    })
                })
        },
        92584: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => c
            });
            var a = r(73723),
                n = r(7787),
                s = r(28511),
                o = r(84344),
                i = r(33577);
            let l = ({
                    iconDirection: e
                }) => (0, a.jsx)(i.Ay, {
                    icon: "left" === e ? "arrow-left" : "arrow-right",
                    size: "12",
                    className: "transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover/button:opacity-100",
                    "data-sentry-element": "Icon",
                    "data-sentry-component": "DefaultIconOnHover",
                    "data-sentry-source-file": "Button.tsx"
                }),
                d = ({
                    icon: e,
                    iconWeight: t
                }) => (0, a.jsx)("span", {
                    className: "w-3 h-3 overflow-hidden",
                    "data-sentry-component": "IconOnHover",
                    "data-sentry-source-file": "Button.tsx",
                    children: (0, a.jsxs)("span", {
                        className: "flex items-center transition-all duration-300 justify-center w-[24px] -translate-x-3 group-hover:translate-x-0 group-hover/button:translate-x-0",
                        children: [(0, a.jsx)(i.Ay, {
                            icon: e ? `${e}` : "arrow-right",
                            size: "12",
                            className: "w-3 h-3 flex-shrink-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-hover/button:opacity-100",
                            weight: t,
                            "data-sentry-element": "Icon",
                            "data-sentry-source-file": "Button.tsx"
                        }), (0, a.jsx)(i.Ay, {
                            icon: e ? `${e}` : "arrow-right",
                            size: "12",
                            className: "w-3 h-3 flex-shrink-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0 group-hover/button:opacity-0",
                            weight: t,
                            "data-sentry-element": "Icon",
                            "data-sentry-source-file": "Button.tsx"
                        })]
                    })
                }),
                c = e => {
                    let [t, r] = (0, n.useState)(!1), {
                        target: c = "_self",
                        children: u,
                        variant: m = "primary",
                        href: g,
                        localePrefix: h,
                        icon: x,
                        iconWeight: f = "regular",
                        iconDirection: p = "right",
                        size: y = "md",
                        disabled: b,
                        disableAnimation: v = !1,
                        onClick: k,
                        type: j = "button",
                        ariaLabel: w,
                        as: N = "button",
                        role: L
                    } = e, E = w ?? ("string" == typeof u ? u : x ? `${m} button with ${x} icon` : `${m} button`), F = `
    focus-visible:before:content-['']
    focus-visible:before:absolute
    focus-visible:before:inset-[-0.25rem]
    focus-visible:before:rounded-full
    focus-visible:before:bg-transparent
    focus-visible:before:border
    focus-visible:before:border-2
    focus-visible:before:border-mango-blue-focus
    focus-visible:before:pointer-events-none
    focus-visible:before:z-10
    focus-visible:outline-none
  `, R = {
                        hasIcon: {
                            lg: `h-[3.125rem] ${!u?"aspect-square w-auto":"left"===p?"px-[2.25rem] pl-[2rem]":"px-[2.25rem] pr-[2rem]"}`,
                            md: `h-[2.875rem] ${!u?"aspect-square w-auto":"left"===p?"px-[1.875rem] pl-[1.625rem]":"px-[1.875rem] pr-[1.625rem]"}`,
                            sm: `h-[2.375rem] ${!u?"aspect-square w-auto":"left"===p?"px-[1.5rem] pl-[1.25rem]":"px-[1.5rem] pr-[1.25rem]"}`,
                            xs: `h-[2rem] ${!u?"aspect-square w-auto":"left"===p?"px-[1.25rem] pl-[1rem]":"px-[1.25rem] pr-[1rem]"}`
                        },
                        noIcon: {
                            lg: "h-[3.125rem] px-[2rem]",
                            md: "h-[2.875rem] px-[1.625rem]",
                            sm: "h-[2.375rem] px-[1.25rem]",
                            xs: "h-[2rem] px-[1rem]"
                        }
                    }, S = {
                        primary: {
                            default: "bg-mango-blue-500 text-white btn-primary-shadow-default",
                            hover: "hover:bg-mango-blue-600 hover:shadow-transparent",
                            groupHover: "group-hover/button:bg-mango-blue-600 group-hover/button:shadow-transparent",
                            pressed: "hover:bg-mango-blue-700 btn-primary-shadow-pressed"
                        },
                        secondary: {
                            default: "bg-mango-gray-50 dark:bg-mango-gray-800 text-mango-black dark:text-mango-white btn-secondary-shadow-default",
                            hover: "hover:bg-mango-gray-100 hover:dark:bg-mango-gray-900 hover:shadow-transparent",
                            groupHover: "group-hover/button:bg-mango-gray-100 group-hover/button:dark:bg-mango-gray-900 group-hover/button:shadow-transparent",
                            pressed: "hover:bg-mango-gray-200 dark:hover:bg-mango-gray-950 btn-secondary-shadow-pressed"
                        },
                        ghost: {
                            default: "bg-transparent text-mango-black dark:text-mango-white border border-transparent",
                            hover: "hover:border-mango-black hover:dark:border-mango-white hover:shadow-transparent",
                            groupHover: "group-hover/button:border-mango-black group-hover/button:dark:border-mango-white group-hover/button:shadow-transparent",
                            pressed: "hover:border-mango-gray-300 hover:dark:border-mango-gray-600"
                        },
                        outline: {
                            default: "bg-transparent text-mango-black border border-mango-gray-300 dark:border-mango-gray-700",
                            hover: "hover:border-mango-gray-400 dark:hover:border-mango-gray-600 hover:shadow-transparent",
                            groupHover: "group-hover/button:border-mango-gray-400 group-hover/button:dark:border-mango-gray-600 group-hover/button:shadow-transparent",
                            pressed: "hover:border-mango-gray-500 dark:hover:border-mango-gray-700"
                        },
                        customOutlineRed: {
                            default: "bg-transparent text-mango-black border border-red-300 dark:border-red-700",
                            hover: "hover:border-red-400 dark:hover:border-red-600 hover:shadow-transparent",
                            groupHover: "group-hover/button:border-red-400 group-hover/button:dark:border-red-600 group-hover/button:shadow-transparent",
                            pressed: "hover:border-red-500 dark:hover:border-red-700"
                        },
                        customOutlineGreen: {
                            default: "bg-transparent text-mango-black border border-green-400 dark:border-green-700",
                            hover: "hover:border-green-500 dark:hover:border-green-600 hover:shadow-transparent",
                            groupHover: "group-hover/button:border-green-500 group-hover/button:dark:border-green-600 group-hover/button:shadow-transparent",
                            pressed: "hover:border-green-600 dark:hover:border-green-700"
                        },
                        customOutlineYellow: {
                            default: "bg-transparent text-mango-black border border-yellow-300 dark:border-yellow-700",
                            hover: "hover:border-yellow-400 dark:hover:border-yellow-600 hover:shadow-transparent",
                            groupHover: "group-hover/button:border-yellow-400 group-hover/button:dark:border-yellow-600 group-hover/button:shadow-transparent",
                            pressed: "hover:border-yellow-500 dark:hover:border-yellow-700"
                        }
                    }, _ = (0, s.A)("relative flex items-center justify-center gap-2 rounded-full text-xs font-semibold font-sans tracking-[-0.01rem] whitespace-nowrap group w-fit transition-[box-shadow,background-color,color,border-color] duration-300 pointer-events-auto", F, "disabled:cursor-not-allowed disabled:opacity-40", R[x ? "hasIcon" : "noIcon"][y], S[m].default, !t && S[m].hover, !t && S[m].groupHover, t && S[m].pressed, e.className);
                    if (g) return (0, a.jsx)(o.N_, {
                        href: g,
                        role: "button",
                        onMouseDown: () => r(!0),
                        onMouseUp: () => r(!1),
                        ...E && {
                            "aria-label": E
                        },
                        target: c,
                        type: j,
                        className: _,
                        localePrefix: h,
                        children: (0, a.jsxs)("span", {
                            className: (0, s.A)("flex items-center justify-center gap-2", "left" === p && "flex-row-reverse", b || v || x ? "" : "left" === p ? "-translate-x-2 group-hover:translate-x-0 group-hover/button:translate-x-0" : "translate-x-2 group-hover:translate-x-0 group-hover/button:translate-x-0", "transition-all duration-300"),
                            children: [u, b || v ? x ? (0, a.jsx)(i.Ay, {
                                icon: x,
                                size: "12",
                                weight: f
                            }) : null : x ? (0, a.jsx)(d, {
                                icon: x,
                                iconWeight: f
                            }) : (0, a.jsx)(l, {
                                iconDirection: p
                            })]
                        })
                    });
                    let A = {
                        className: _,
                        disabled: b,
                        onMouseDown: () => r(!0),
                        onMouseUp: () => r(!1),
                        onClick: k,
                        role: L || ("div" === N ? "button" : void 0),
                        ...w && {
                            "aria-label": w
                        },
                        ...b && {
                            "aria-disabled": !0
                        }
                    };
                    return "button" === N && (A.type = j), (0, a.jsx)(N, {
                        ...A,
                        "data-sentry-element": "Element",
                        "data-sentry-component": "Button",
                        "data-sentry-source-file": "Button.tsx",
                        children: (0, a.jsxs)("span", {
                            className: (0, s.A)("flex items-center justify-center gap-2", "left" === p && "flex-row-reverse", b || v || x ? "" : "left" === p ? "-translate-x-2 group-hover:translate-x-0 group-hover/button:translate-x-0" : "translate-x-2 group-hover:translate-x-0 group-hover/button:translate-x-0", "transition-all duration-300"),
                            children: [u, b || v ? x ? (0, a.jsx)(i.Ay, {
                                icon: x,
                                size: "12",
                                weight: f
                            }) : null : x ? (0, a.jsx)(d, {
                                icon: x,
                                iconWeight: f
                            }) : (0, a.jsx)(l, {
                                iconDirection: p
                            })]
                        })
                    })
                }
        },
        93868: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            let a = r(33577).Ay
        },
        96608: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            var a = r(7787);
            let n = (e, t) => {
                let [r, n] = (0, a.useState)("");
                (0, a.useEffect)(() => {
                    n(document.cookie)
                }, []);
                let s = (0, a.useMemo)(() => r.split("; ").reduce((e, t) => {
                        let [r, a] = t.split("=");
                        return {
                            ...e,
                            [r]: a
                        }
                    }, {}), [r]),
                    o = (0, a.useCallback)(t => {
                        document.cookie = `${e}=${t};path=/`, n(document.cookie)
                    }, [e]);
                return [s[e] || t, o]
            }
        },
        96828: (e, t, r) => {
            "use strict";
            r.d(t, {
                IB: () => n,
                N_: () => s
            });
            var a = r(73926);
            let n = ["en", "fr", "es", "de", "pt", "ru", "cn", "ja", "kr"],
                {
                    Link: s,
                    redirect: o,
                    usePathname: i,
                    useRouter: l
                } = (0, a.xp)({
                    locales: n,
                    localePrefix: "as-needed",
                    defaultLocale: "en"
                })
        },
        97629: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => m
            });
            var a = r(73723),
                n = r(7787),
                s = r(49072),
                o = r(53379),
                i = r(26466),
                l = r(96608),
                d = r(46513);
            let c = "GTM-5V25JL6",
                u = "a9f5fcb3-4c7f-4bb7-93bf-7607ffbdabe0";

            function m({
                locale: e
            }) {
                let [t] = (0, l.A)("location", "US"), [r] = (0, l.A)("currency", "USD"), [m, g] = (0, n.useState)(null), h = (0, n.useCallback)(() => {
                    window.OneTrust && window.OneTrust.changeLanguage(i.yj[e || "en"])
                }, [e]), x = (0, n.useCallback)(async () => {
                    let e = sessionStorage.getItem("UNITY_SESSION"),
                        a = "";
                    if (e) a = JSON.parse(e)?.user;
                    else try {
                        let e = await (0, d.Y)();
                        a = e.users[0]?.userId
                    } catch (e) {
                        console.error("Error fetching user from Genesis:", e)
                    }
                    g({
                        event: "dataLayer-initialized",
                        user: {
                            user_unity_id: a,
                            user_logged_in: e ? "yes" : "no"
                        },
                        environment: {
                            environment_locale: t,
                            environment_currency: r
                        }
                    })
                }, [t, r]);
                return (0, n.useEffect)(() => {
                    x()
                }, [x]), (0, n.useEffect)(() => {
                    h()
                }, [h]), (0, a.jsxs)(a.Fragment, {
                    children: [u && (0, a.jsx)(s.default, {
                        src: "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js",
                        charSet: "UTF-8",
                        "data-domain-script": u,
                        "data-dLayer-ignore": "true",
                        strategy: "afterInteractive",
                        "data-document-language": "true",
                        onReady: h
                    }), u && (0, a.jsx)(s.default, {
                        id: "onetrust-optanon-wrapper",
                        strategy: "afterInteractive",
                        children: "function OptanonWrapper(){}"
                    }), c && m && (0, a.jsx)(o.GoogleTagManager, {
                        gtmId: c,
                        dataLayer: m
                    })]
                })
            }
        },
        99061: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                AMPLITUDE_ENDPOINT: () => s,
                default: () => o,
                getExperimentFromCookie: () => i,
                sendExposureEvent: () => d,
                trackExposureOnPageView: () => l
            });
            var a = r(7787),
                n = r(6037);
            let s = "https://api2.amplitude.com/2/httpapi";

            function o() {
                let e = (0, n.usePathname)();
                return (0, a.useEffect)(() => {
                    l(e)
                }, [e]), null
            }

            function i() {
                let e = document.cookie.split("; ").find(e => e.startsWith("experiment_exposure="));
                if (e) try {
                    return JSON.parse(decodeURIComponent(e.split("=")[1]))
                } catch (e) {
                    console.error("Error parsing experiment cookie:", e);
                    return
                }
            }

            function l(e) {
                let t = i();
                if (t)
                    for (let {
                            key: r,
                            variant: a,
                            deviceId: n,
                            userId: s
                        }
                        of t[e] || []) r && a && (n || s) && d(r, a, n, s)
            }

            function d(e, t, r, a) {
                e && t && (r || a) && fetch(s, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        api_key: "a331ddf18d0a0ba0070793c7e48f7a2a",
                        events: [{
                            event_type: "$exposure",
                            ...a && {
                                user_id: a
                            },
                            ...r && {
                                device_id: r
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
        }
    },
    e => {
        e.O(0, [5781, 36411, 37705, 3395, 5275, 88942, 80970, 80187, 42882, 95176, 94882, 10992, 33577, 82968, 21268, 77358], () => e(e.s = 70518)), _N_E = e.O()
    }
]);