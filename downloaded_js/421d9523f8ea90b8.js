(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 34734, e => {
    "use strict";
    var t = e.i(297124),
        n = e.i(472506);
    let i = {
            seo: {
                teaserImage: {
                    file: {
                        asset: {
                            url: "https://cdn.sanity.io/images/fuvbjjlp/production/fa8e822f74dc0dc469801f15ac53859e00318ee2-264x97.svg",
                            metadata: {
                                blurHash: "",
                                lqip: ""
                            }
                        }
                    },
                    alt: "Unity logo"
                }
            },
            headerConfig: {
                container: !0,
                sticky: !0
            },
            footerConfig: {
                container: !0
            }
        },
        a = {
            en: {
                pageTitle: "Page not found - Unity",
                pageDescription: "Unity is the ultimate game development platform. Use Unity to build high-quality 3D and 2D games, deploy them across mobile, desktop, VR/AR, consoles or the Web, and connect with loyal and enthusiastic players and customers.",
                title: "Not found / 404",
                statement1: "This page is no longer available.",
                statement2: "You might find the page you are looking for by browsing through the links in our top menu."
            },
            de: {
                pageTitle: "Die Seite wurde nicht gefunden - Unity",
                pageDescription: "Erstellen und erweitern Sie Echtzeit-3D-Spiele, Apps und Erfahrungen für Unterhaltung, Filme, die Automobilbranche, Architektur und mehr. Starten Sie noch heute mit Unity.",
                title: "Nicht gefunden / 404",
                statement1: "Diese Seite ist nicht mehr verfügbar",
                statement2: "Vielleicht finden Sie die gesuchte Seite unter den Links im oben angezeigten Menü."
            },
            ja: {
                pageTitle: "ページが見つかりません - Unity",
                pageDescription: "エンターテインメント、映像制作、自動車、建築設計などのさまざまな分野のリアルタイム 3D ゲーム、アプリケーション、体験を制作し、成長させましょう。",
                title: "ページが見つかりません / 404",
                statement1: "このページは存在しません。",
                statement2: "トップメニューのリンクから、お探しのページが見つかる可能性があります。"
            },
            fr: {
                pageTitle: "Page non trouvée - Unity",
                pageDescription: "Créez et développez des jeux, des applications et des expériences 3D en temps réel pour les secteurs du divertissement, du cinéma, de l'automobile, de l'architecture, etc. Démarrez avec Unity dès aujourd'hui.",
                title: "Page non trouvée / 404",
                statement1: "La page n'est plus disponible.",
                statement2: "Vous trouverez peut-être la page que vous cherchez via les liens de notre menu supérieur."
            },
            pt: {
                pageTitle: "A página não foi encontrada - Unity",
                pageDescription: "Crie e amplie jogos, apps e experiências 3D em tempo real para os setores de entretenimento, cinema, automotivo, arquitetura e muito mais. Comece a usar o Unity hoje mesmo.",
                title: "Não encontrado / 404",
                statement1: "Esta página não está mais disponível.",
                statement2: "Você pode encontrar a página que está procurando ao navegar pelos links em nosso menu principal."
            },
            cn: {
                pageTitle: "页面未找到 - Unity",
                pageDescription: "打造和拓展面向娱乐、电影、汽车、建筑等领域的实时 3D 游戏、应用程序和体验。",
                title: "未找到 / 404",
                statement1: "此页面已不存在。",
                statement2: "您可以通过页面顶部的菜单搜索您想查看的内容。"
            },
            es: {
                pageTitle: "Página no encontrada - Unity",
                pageDescription: "Crea y expande juegos, aplicaciones y experiencias 3D en tiempo real para proyectos de entretenimiento, películas, la industria automotriz, arquitectura y mucho más. Empieza a usar Unity hoy mismo.",
                title: "No encontrado / 404",
                statement1: "Esta página ya no se encuentra disponible.",
                statement2: "Es posible que encuentres la página que estás buscando si examinas los enlaces que aparecen en nuestro menú superior."
            },
            ru: {
                pageTitle: "Страница не найдена | Unity",
                pageDescription: "Создавайте и развивайте RT3D-игры, приложения и проекты для развлечений, фильмов, автомобильной, архитектурно-строительной и других отраслей.",
                title: "Не найдено / 404",
                statement1: "Эта страница больше не доступна.",
                statement2: "Возможно, в поисках вам помогут ссылки в верхнем меню."
            },
            kr: {
                pageTitle: "페이지를 찾을 수 없습니다 - Unity",
                pageDescription: "엔터테인먼트, 영화, 자동차, 건축 등의 분야에서 활용할 수 있는 실시간 3D 게임, 앱, 경험을 만들고 성장시켜 보세요.",
                title: "찾을 수 없음 / 404",
                statement1: "이 페이지를 더 이상 사용할 수 없습니다.",
                statement2: "상단 메뉴의 링크에서 원하는 페이지를 찾아보세요."
            }
        };

    function s() {
        let e = (0, n.usePathname)(),
            s = 2 === e.split("/")[1].length ? e.split("/")[1] : "en",
            {
                content: {
                    title: o,
                    statement1: r,
                    statement2: l
                }
            } = {
                ...i,
                title: a[s]?.pageTitle || a.en.pageTitle,
                pageUrl: {
                    link: {
                        href: {
                            current: e
                        },
                        target: "_self"
                    }
                },
                seo: {
                    ...i.seo,
                    title: a[s]?.pageTitle || a.en.pageTitle,
                    description: a[s]?.pageDescription || a.en.pageDescription
                },
                content: {
                    title: a[s]?.title || a.en.title,
                    statement1: a[s]?.statement1 || a.en.statement1,
                    statement2: a[s]?.statement2 || a.en.statement2
                }
            };
        return (0, t.jsxs)("section", {
            className: "container mt-2 flex flex-col items-center text-center",
            children: [(0, t.jsx)("h1", {
                className: "mango-text-heading-lg mt-36",
                children: o
            }), (0, t.jsx)("h4", {
                className: "mango-text-body-lg mt-16",
                children: r
            }), (0, t.jsx)("h4", {
                className: "mango-text-body-lg mt-2 mb-20",
                children: l
            })]
        })
    }
    e.s(["default", () => s], 34734)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e5088d2a-60d5-5058-8567-30d9776a9257")
    } catch (e) {}
}();
//# debugId=e5088d2a-60d5-5058-8567-30d9776a9257