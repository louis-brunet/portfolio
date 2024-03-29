export default Object.freeze({
    java: [
        {
            id: "decac",
            featureIds: ["steps", "ima", "atari"],
            techIds: ["maven", "antlr"],
            src: "",
            imgs: [
                "decac-banner.png",
                "decac-usage.png",
                "decac-palmares-circled.png",
            ],
        },
        {
            id: "robotsPompiers",
            featureIds: ["dijkstra", "strategies"],
            techIds: ["ensimagGuiLib"],
            src: "",
            imgs: ["pompiers-simulation.gif"],
        },
        {
            id: "sudoku",
            featureIds: ["resolution", "io"],
            techIds: ["javaSwing"],
            src: "https://github.com/louis-brunet/iut/tree/main/PT21_APL2019",
            imgs: [
                "sudoku-resolution.png",
                "sudoku-menu.png",
                "sudoku-construction.png",
            ],
        },
        {
            id: "chess",
            featureIds: ["local"],
            techIds: ["javaSwing"],
            src: "https://github.com/louis-brunet/code/tree/master/JAVA/eclipse/Chess2/src",
            imgs: [
                "chess-start.JPG",
                "chess-promotion.JPG",
                "chess-check.JPG",
                "chess-captured-check.JPG",
                "chess-win.JPG",
            ],
        },
        {
            id: "zth",
            featureIds: ["genre", "generation"],
            techIds: ["libgdx"],
            src: "https://github.com/louis-brunet/iut/tree/main/Projet-Tutore",
            imgs: [
                "zth-pause.png",
                "zth-gameover.png",
                "zth-settings.png",
                "zth-start.png",
            ],
        },
        {
            id: "invaders",
            featureIds: ["classic", "scores"],
            techIds: ["javaSwing"],
            src: "https://github.com/louis-brunet/code/tree/master/JAVA/eclipse/SpaceInvaders/src",
            imgs: ["space-invaders.JPG"],
        },
    ],
    web: [
        {
            id: "site",
            featureIds: ["spa", "locale", "persistence"],
            techIds: ["vue", "quasar", "js", "htmlcss"],
            src: "https://github.com/louis-brunet/portfolio",
            view: "/",
        },
        {
            id: "covid",
            featureIds: ["api"],
            techIds: ["ajax", "js", "htmlcss"],
            src: "https://github.com/louis-brunet/iut/tree/main/covid19",
            imgs: ["covid19_home.png", "covid19_country.png"],
        },
        {
            id: "quiz",
            featureIds: ["persistance"],
            techIds: ["php", "mysql", "htmlcss"],
            src: "https://github.com/louis-brunet/iut/tree/main/projet_quiz_CI",
            imgs: ["quiz_login.png"],
        },
    ],
    c: [
        {
            id: "guiLib",
            featureIds: [],
            techIds: [],
            src: "",
            imgs: [],
        },
        {
            id: "snake",
            featureIds: [],
            techIds: ["iutGuiLib"],
            src: "https://github.com/louis-brunet/iut/tree/main/PT11_APL2019_snake",
            imgs: [
                "snake-start.png",
                "snake-pause.png",
                "snake-obstacles.png",
                "snake-records.png",
                "snake-perdu.png",
            ],
        },
    ],
    python: [
        {
            id: "pi",
            featureIds: ["ppm2gif"],
            techIds: ["python"],
            imgs: ["pi.gif"],
        },
    ],
    unity: [
        {
            id: "twinstick",
            featureIds: [],
            techIds: [],
            src: "",
            view: "https://louis-brunet.github.io/TwinstickShooter",
            imgs: [
                "twinstick-menu.png",
                "twinstick-playing.png",
                "twinstick-gameover.png",
            ],
        },
    ],
});
