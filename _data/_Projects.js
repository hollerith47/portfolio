import ReactJs from "../components/icons/ReactJs";
import Sass from "../components/icons/Sass";
import Html from "../components/icons/Html";
import Css from "../components/icons/Css";
import Javascript from "../components/icons/Javascript";
import NextJs from "../components/icons/NextJs";
import Tailwind from "../components/icons/Tailwind";

import minPortfolio from "../public/projects/vitrine.png";
import cookingApp from "../public/projects/cookingApp.png";
import countryApp from "../public/projects/countryApp.png";
import facebookClone from "../public/projects/CloneFb.png";
import youtubeClone from "../public/projects/CloneYtb.png";
import portfolio from "../public/projects/myportfolio.png";


export const _Projects = [
    {
        title: "Country App",
        overview:
            "Explorez le monde avec Country App ! Répertoriant les pays par continent avec des informations clés telles que " +
            "la superficie et la population, ce site web dynamique et convivial a été développé avec React, API Axios et Sass pour offrir une expérience utilisateur fluide et agréable.",
        stack: ["React", "Sass", "AXIOS"],
        description: "Explorez le monde avec Country App!",
        status: "",
        direction: "flex-col lg:flex-row",
        imgSrc: countryApp,
        link: "https://countryappr.netlify.app",
        repo: "https://github.com/hollerith47/Country-app",
        isSiteLive: true,
        icons: [
            {
                icon: ReactJs,
                title: "React"
            },
            {
                icon: Sass,
                title: "Sass"
            },
        ]
    },
    {
        title: "Clone Facebook",
        overview:
            "Découvrez mon projet de clone de la page d'accueil de Facebook ! Avec HTML5, CSS et JavaScript, j'ai créé une " +
            "version fidèle de cette interface emblématique. Explorez ses fonctionnalités et son design pour vous immerger dans l'univers de Facebook.",
        stack: ["Html", "Css", "Javascript"],
        description: "Découvrez mon projet de clone de la page d'accueil de Facebook!",
        status: "",
        direction: "flex-col lg:flex-row-reverse",
        imgSrc: facebookClone,
        link: "https://clonefb-by-hmak.netlify.app/",
        repo: "https://github.com/hollerith47/clone-login-page-facebook",
        isSiteLive: true,
        icons: [
            {
                icon: Html,
                title: "HTML"
            },
            {
                icon: Css,
                title: "CSS3"
            },
            {
                icon: Javascript,
                title: "JavaScript"
            },
        ]
    },
    {
        title: "OuiTube",
        overview:
            "Découvrez OuiTube, mon projet de clone de la page YouTube ! Avec HTML5, CSS et JavaScript, j'ai recréé les " +
            "fonctionnalités et le design de cette célèbre plateforme de vidéo en ligne. Explorez ses différentes sections " +
            "et profitez d'une expérience immersive sur OuiTube.",
        stack: ["Html", "CSS3", "JavaScript"],
        description: "Découvrez OuiTube, mon projet de clone de la page YouTube!",
        status: "",
        direction: "flex-col lg:flex-row",
        imgSrc: youtubeClone,
        link: "https://ouitube.netlify.app",
        repo: "https://github.com/hollerith47/clone-youtube",
        isSiteLive: true,
        icons: [
            {
                icon: Html,
                title: "HTML"
            },
            {
                icon: Css,
                title: "CSS3"
            },
            {
                icon: Javascript,
                title: "JavaScript"
            },
        ]
    },
    {
        title: "Cooking App",
        overview:
            "Explorez le monde de la cuisine avec Cooking App ! Avec React, Axios et Sass, découvrez des recettes savoureuses " +
            "et trouvez facilement celle qui vous convient grâce à notre barre de recherche.",
        stack: ["React", "API Axios", "CSS3"],
        description: "Explorez le monde de la cuisine avec Cooking App ! Avec React, Axios et Sass, découvrez des recettes savoureuses",
        status: "",
        direction: "lg:flex-row-reverse",
        imgSrc:cookingApp,
        link: "https://cookwithapi.netlify.app",
        repo: "https://github.com/hollerith47/cooking-app",
        isSiteLive: true,
        icons: [
            {
                icon: Html,
                title: "HTML"
            },
            {
                icon: Css,
                title: "CSS3"
            },
            {
                icon: Javascript,
                title: "JavaScript"
            },
        ]
    },
    {
        title: "H Tech mini-portfolio",
        overview:
            "Mon mini portfolio est un projet web dynamique réalisé avec React et Sass. Il présente un design épuré avec des effets de souris interactifs et des animations qui le rendent vivant. Avec une mise en page claire et concise, ce mini portfolio met en valeur mes compétences et mon expertise de manière engageante et conviviale.",
        stack: ["React", "API Axios", "Sass"],
        description: "Mon mini portfolio est un projet web dynamique réalisé avec React et Sass.",
        status: "H Tech Landing page",
        direction: "flex-col lg:flex-row",
        imgSrc: minPortfolio,
        link: "https://minportfoliohmak.netlify.app",
        repo: null,
        isSiteLive: true,
        icons: [
            {
                icon: ReactJs,
                title: "HTML"
            },
            {
                icon: Sass,
                title: "Sass"
            },
            {
                icon: "n",
                title: "Axios API"
            },
        ]
    },
    {
        title: "My portfolio",
        overview:
            "Mon mini portfolio est un projet web dynamique réalisé avec React et Sass. Il présente un design épuré avec des effets de souris interactifs et des animations qui le rendent vivant. Avec une mise en page claire et concise, ce mini portfolio met en valeur mes compétences et mon expertise de manière engageante et conviviale.",
        stack: ["React", "NextJs", "Tailwind"],
        description: "Mon projet web mini portfolio, conçu avec les technologies React, NextJs, Tailwind ... offre un design épuré et dynamique agrémenté d'effets interactifs captivants. Des animations soignées ajoutent une touche de vie et de mouvement à l'ensemble, pour une expérience utilisateur immersive et stimulante.",
        status: "Herman Makiese's presentation",
        direction: "flex-col lg:flex-row-reverse",
        imgSrc: portfolio,
        link: "https://me.htech-cloud.com/myproject/mini-portfolio",
        repo: "https://github.com/hollerith47/portfolio",
        isSiteLive: true,
        icons: [
            {
                icon: ReactJs,
                title: "HTML"
            },
            {
                icon: NextJs,
                title: "Next"
            },
            {
                icon: Tailwind,
                title: "Tailwind"
            },
        ]
    },
];