import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ReactTypingEffect from "react-typing-effect";

import Icon from "../components/Icon";
// Icons
import Html from "../components/icons/Html";
import Css from "../components/icons/Css";
import Javascript from "../components/icons/Javascript";
import Tailwind from "../components/icons/Tailwind";
import Bootstrap from "../components/icons/Bootstrap";
import Sass from "../components/icons/Sass";
import ReactJs from "../components/icons/ReactJs";
import NextJs from "../components/icons/NextJs";
import NodeJs from "../components/icons/NodeJs";
import Firebase from "../components/icons/Firebase";
import Java from "../components/icons/Java";
import Photoshop from "../components/icons/Photoshop";
import Csharp from "../components/icons/Csharp";
import Python from "../components/icons/python";
import Php from "../components/icons/Php";
// Project Card
import ProjectCard from "../components/ProjectCard";
import GitHubProfile from "../components/icons/GitHubProfile";
import TwitterProfile from "../components/icons/TwitterProfile";
import LinkedInProfile from "../components/icons/LinkedInProfile";
import FeaturedProjectCard from "../components/FeaturedProjectCard";

// Dark Mode
import { useTheme } from "next-themes";
import MongoDb from "../components/icons/MongoDb";
import Express from "../components/icons/Express";
import php from "../components/icons/Php";
import html from "../components/icons/Html";

const projects = [
  {
    title: "Country App",
    overview:
      "Explorez le monde avec Country App ! Répertoriant les pays par continent avec des informations clés telles que " +
      "la superficie et la population, ce site web dynamique et convivial a été développé avec React, API Axios et Sass pour offrir une expérience utilisateur fluide et agréable.",
    stack: ["React", "Sass", "AXIOS"],
    link: "https://me.htech-cloud.com/myproject/country-app",
    repo: "https://github.com/hollerith47/Country-app",
    isSiteLive: true,
  },
  {
    title: "Clone Facebook",
    overview:
      "Découvrez mon projet de clone de la page d'accueil de Facebook ! Avec HTML5, CSS et JavaScript, j'ai créé une " +
      "version fidèle de cette interface emblématique. Explorez ses fonctionnalités et son design pour vous immerger dans l'univers de Facebook.",
    stack: ["Html", "Css", "Javascript"],
    link: "https://me.htech-cloud.com/myproject/country-app",
    repo: "https://github.com/hollerith47/clone-login-page-facebook",
    isSiteLive: true,
  },
  {
    title: "OuiTube",
    overview:
      "Découvrez OuiTube, mon projet de clone de la page YouTube ! Avec HTML5, CSS et JavaScript, j'ai recréé les " +
      "fonctionnalités et le design de cette célèbre plateforme de vidéo en ligne. Explorez ses différentes sections " +
      "et profitez d'une expérience immersive sur OuiTube.",
    stack: ["Html", "CSS3", "JavaScript"],
    link: "https://me.htech-cloud.com/myproject/ouitube",
    repo: "https://github.com/hollerith47/clone-youtube",
    isSiteLive: true,
  },
  {
    title: "Cooking App",
    overview:
      "Explorez le monde de la cuisine avec Cooking App ! Avec React, Axios et Sass, découvrez des recettes savoureuses " +
      "et trouvez facilement celle qui vous convient grâce à notre barre de recherche.",
    stack: ["React", "API Axios", "CSS3"],
    link: "https://me.htech-cloud.com/myproject/cooking-app",
    repo: "https://github.com/hollerith47/cooking-app",
    isSiteLive: true,
  },
  {
    title: "H Tech mini-portfolio",
    overview:
      "Mon mini portfolio est un projet web dynamique réalisé avec React et Sass. Il présente un design épuré avec des effets de souris interactifs et des animations qui le rendent vivant. Avec une mise en page claire et concise, ce mini portfolio met en valeur mes compétences et mon expertise de manière engageante et conviviale.",
    stack: ["React", "API Axios", "Sass"],
    link: "https://me.htech-cloud.com/myproject/mini-portfolio",
    repo: null,
    isSiteLive: true,
  },
];

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = (ele) => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default function Home({ publications }) {
  const [visibleSection, setVisibleSection] = useState();
  const [scrolling, setScrolling] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const handleResize = () => {
    if (window.innerWidth < 1024) {
    } else {
      setNavbarOpen(false);
    }
  };

  const headerRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const myWorkRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const sectionRefs = [
      { section: "home", ref: homeRef, id: 1 },
      { section: "about", ref: aboutRef, id: 2 },
      { section: "skills", ref: skillsRef, id: 3 },
      { section: "my-work", ref: myWorkRef, id: 4 },
      { section: "blog", ref: blogRef, id: 5 },
      { section: "contact", ref: contactRef, id: 6 },
    ];

    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition >= offsetTop && scrollPosition <= offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
        // console.log(visibleSection);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScrolling(window.pageYOffset > 110)
      );
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    console.log(currentTheme);
  }, [currentTheme]);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    if (currentTheme === "dark") {
      return (
        <svg
          className="w-6 h-6 transition-all duration-150 ease-in-out dark:flex dark:opacity-50 dark:group-hover:opacity-100 dark:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      );
    } else {
      return (
        <svg
          className="w-6 h-6 transition-all duration-150 ease-in-out flex text-mid/50 group-hover:text-dark"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      );
    }
  };

  return (
    <div className="bg-white dark:bg-darker transition-all duration-150 ease-in-out">
      <div
        className={`relative w-full dark:bg-dark/20 bg-light bg-opacity-10 overflow-auto min-h-screen transition-all duration-150 ease-in-out ${
          navbarOpen ? "overflow-hidden" : "overflow-auto"
        }`}
      >
        <Head>
          <title>Herman Makiese | Frontend Developer </title>
          <meta
            name="description"
            content="The portfolio of frontend developer, Herman Makiese"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Full-screen Menu */}
        <div
          className={`fixed w-full z-50 h-screen pt-24 bg-white dark:bg-darker bg-opacity-100 transform delay-100 transition-all duration-150 ${
            navbarOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="container relative mx-auto">
            <nav className="block ml-auto">
              <ul className="z-50 flex flex-col items-start">
                <li className="z-50 block py-2 list-none lg:inline-block">
                  <button
                    href="#"
                    className={`header_link text-xl font-semibold transition-all duration-150 ease-in-out ${
                      visibleSection === "home"
                        ? "selected delay-200"
                        : "dark:text-light dark:hover:text-white text-mid/50 hover:text-mid border-b-2 border-transparent"
                    }`}
                    onClick={() => {
                      setNavbarOpen(false);
                      scrollTo(homeRef.current);
                    }}
                  >
                    Home
                  </button>
                </li>
                <li className="z-50 block py-2 list-none lg:inline-block">
                  <button
                    className={`header_link text-xl font-semibold transition-all duration-150 ease-in-out ${
                      visibleSection === "about"
                        ? "selected delay-150"
                        : "dark:text-light dark:hover:text-white text-mid/50 hover:text-mid border-b-2 border-transparent"
                    }`}
                    onClick={() => {
                      setNavbarOpen(false);
                      scrollTo(aboutRef.current);
                    }}
                  >
                    About
                  </button>
                </li>
                <li className="z-50 block py-2 list-none lg:inline-block">
                  <button
                    className={`header_link text-xl font-semibold transition-all duration-150 ease-in-out ${
                      visibleSection === "skills"
                        ? "selected delay-150"
                        : "dark:text-light dark:hover:text-white text-mid/50 hover:text-mid border-b-2 border-transparent"
                    }`}
                    onClick={() => {
                      setNavbarOpen(false);
                      scrollTo(skillsRef.current);
                    }}
                  >
                    Skills
                  </button>
                </li>
                <li className="z-50 block py-2 list-none lg:inline-block">
                  <button
                    href="#"
                    className={`header_link text-xl font-semibold transition-all duration-150 ease-in-out ${
                      visibleSection === "my-work"
                        ? "selected delay-150"
                        : "dark:text-light dark:hover:text-white text-mid/50  hover:text-mid border-b-2 border-transparent"
                    }`}
                    onClick={() => {
                      setNavbarOpen(false);
                      scrollTo(myWorkRef.current);
                    }}
                  >
                    My Work
                  </button>
                </li>
                <li className="z-50 block py-2 list-none lg:inline-block">
                  <button
                    target="_blank"
                    rel="noreferrer"
                    className={`header_link text-xl font-semibold transition-all duration-150 ease-in-out ${
                      visibleSection === "blog"
                        ? "selected delay-150"
                        : "dark:text-light dark:hover:text-white text-mid/50 hover:text-mid border-b-2 border-transparent"
                    }`}
                    onClick={() => {
                      setNavbarOpen(false);
                      scrollTo(blogRef.current);
                    }}
                  >
                    Blog
                  </button>
                </li>
                <li className="z-50 block py-2 list-none lg:inline-block">
                  <button
                    className={`header_link text-xl font-semibold transition-all duration-150 ease-in-out ${
                      visibleSection === "contact"
                        ? "selected delay-150"
                        : "dark:text-light dark:hover:text-white text-mid/50 hover:text-mid border-b-2 border-transparent"
                    }`}
                    onClick={() => {
                      setNavbarOpen(false);
                      scrollTo(contactRef.current);
                    }}
                  >
                    Contact
                  </button>
                </li>
                <li className="z-40 block py-2 mt-6 list-none lg:inline-block">
                  <a
                    href={`mailto:makieseherman@gmail.com`}
                    className="text-lg btn-brand btn-lg group"
                  >
                    Need help?
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Header and Nav */}
        <header
          className={`header top-0 mx-auto flex items-center py-6 z-50 fixed w-full transition-all duration-150 h-20 ${
            scrolling && !navbarOpen
              ? "dark:bg-dark bg-white"
              : "dark:bg-darker bg-white"
          }`}
          ref={headerRef}
        >
          {/* Logo and Nav container */}
          <div className="container relative flex items-center mx-auto">
            {/* Logo */}
            <div className="z-50 w-9 sm:w-12 h-9 sm:h-12 flex items-center">
              <img src="Htech_favicon.svg" alt="H tech" />
            </div>
            {/* Text */}
            <div className="flex items-center ml-4">
              <p className="text-lg font-semibold font-display tracking-tight dark:text-white text-darker mb-0 transition-all duration-150 ease-in-out">
                Herman Makiese
              </p>
            </div>
            {/* Nav */}
            <nav className="block ml-auto h-full">
              <ul className="z-50 flex items-center">
                <li className="z-50 hidden mx-5 list-none lg:inline-block">
                  <button
                    className={`header_link font-semibold transition-all duration-150 ease-in-out ${
                      visibleSection === "home"
                        ? "selected delay-150"
                        : "opacity-50 hover:opacity-100 dark:text-white text-dark"
                    }`}
                    onClick={() => {
                      scrollTo(homeRef.current);
                    }}
                  >
                    Home
                  </button>
                </li>
                <li className="z-50 hidden mx-5 list-none lg:inline-block">
                  <button
                    className={`header_link font-semibold transition-all duration-150 ease-in-out ${
                      visibleSection === "about"
                        ? "selected delay-150"
                        : "opacity-50 hover:opacity-100 border-b-2 border-transparent  dark:text-white text-dark"
                    }`}
                    onClick={() => {
                      scrollTo(aboutRef.current);
                    }}
                  >
                    About
                  </button>
                </li>
                <li className="z-50 hidden mx-5 list-none lg:inline-block">
                  <button
                    className={`header_link font-semibold transition-all duration-150 ease-in-out ${
                      visibleSection === "skills"
                        ? "selected delay-150"
                        : "opacity-50 hover:opacity-100 border-b-2 border-transparent dark:text-white text-dark"
                    }`}
                    onClick={() => {
                      scrollTo(skillsRef.current);
                    }}
                  >
                    Skills
                  </button>
                </li>
                <li className="z-50 hidden mx-5 list-none lg:inline-block">
                  <button
                    className={`header_link font-semibold transition-all duration-150 ease-in-out ${
                      visibleSection === "my-work"
                        ? "selected delay-150"
                        : "opacity-50 hover:opacity-100 border-b-2 border-transparent dark:text-white text-dark"
                    }`}
                    onClick={() => {
                      scrollTo(myWorkRef.current);
                    }}
                  >
                    My Work
                  </button>
                </li>
                <li className="z-50 hidden mx-5 list-none lg:inline-block">
                  <button
                    target="_blank"
                    rel="noreferrer"
                    className={`header_link font-semibold transition-all duration-150 ease-in-out ${
                      visibleSection === "blog"
                        ? "selected delay-150"
                        : "opacity-50 hover:opacity-100 border-b-2 border-transparent dark:text-white text-dark"
                    }`}
                    onClick={() => {
                      scrollTo(blogRef.current);
                    }}
                  >
                    Blog
                  </button>
                </li>
                <li className="z-50 hidden mx-5 list-none lg:inline-block">
                  <button
                    className={`header_link font-semibold transition-all duration-150 ease-in-out ${
                      visibleSection === "contact"
                        ? "selected delay-150"
                        : "opacity-50 hover:opacity-100 border-b-2 border-transparent dark:text-white text-dark"
                    }`}
                    onClick={() => {
                      scrollTo(contactRef.current);
                    }}
                  >
                    Contact
                  </button>
                </li>
                <li className="z-50 hidden ml-5 list-none lg:inline-block">
                  <a
                    href={`mailto:makieseherman@gmail.com`}
                    className="btn-brand btn-md group"
                  >
                    Need help?
                  </a>
                </li>
                <li className="z-50 inline-block list-none lg:hidden group">
                  <button
                    className={`relative w-10 h-10 ${
                      navbarOpen
                        ? "dark:text-white text-dark"
                        : "text-mid/50 group-hover:text-mid dark:opacity-50 dark:group-hover:opacity-100 dark:text-white dark:group-hover:text-white"
                    } focus:outline-none`}
                    onClick={() => setNavbarOpen(!navbarOpen)}
                  >
                    <div className="absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                      <span
                        aria-hidden="true"
                        className={`block absolute h-0.5 w-5 bg-current transform transition duration-200 ease-in-out ${
                          navbarOpen ? "rotate-45" : "-translate-y-1.5"
                        }`}
                      ></span>
                      <span
                        aria-hidden="true"
                        className={`block absolute h-0.5 w-5 bg-current transform transition duration-200 ease-in-out ${
                          navbarOpen ? "opacity-0" : "opacity-100"
                        }`}
                      ></span>
                      <span
                        aria-hidden="true"
                        className={`block absolute h-0.5 w-5 bg-current transform transition duration-200 ease-in-out ${
                          navbarOpen ? "-rotate-45" : "translate-y-1.5"
                        }`}
                      ></span>
                    </div>
                  </button>
                </li>
              </ul>
            </nav>
            <div className="flex mt-auto ml-0 lg:ml-5">
              {/* Dark mode */}
              <button
                className="flex items-center justify-center w-7 h-12 transition-all duration-150 ease-in rounded-sm focus:outline-none group bg-transparent outline-none"
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                }}
              >
                {renderThemeChanger()}
              </button>
            </div>
          </div>
        </header>

        {/* Content Container */}
        <div className="container relative z-30 mx-auto">
          {/* Hero Content */}
          <main className={`flex-col flex h-screen`} id="home" ref={homeRef}>
            {/* Main */}
            <div className="container relative flex flex-col items-start justify-center flex-grow px-0 mx-auto md:px-20 lg:px-24 section">
              <div className="w-full">
                <span className="text-2xl font-semibold text-brand">
                  Hello! 👋 My name is
                </span>

                <h1 className="mb-4 text-5xl md:text-7xl dark:text-white text-dark">
                  Herman Makiese
                </h1>
                <h2 className="mb-4 text-2xl md:text-3xl dark:text-light text-mid">
                  <ReactTypingEffect
                    typingDelay={200}
                    speed={30}
                    eraseSpeed={30}
                    eraseDelay={1500}
                    text={[
                      `I'm a Frontend Developer`,
                      `I'm the H Tech Cloud Manager`,
                      `I have a strong interest in technology.`,
                      `My focus is on learning backend technologies.`,
                    ]}
                  />
                </h2>
                <p className="w-4/5 text-xl md:w-full">
                  I build and host websites that not only look great, but also perform at a high level.
                </p>
                <button
                  className="mt-4 btn-brand btn-lg group"
                  onClick={() => {
                    scrollTo(myWorkRef.current);
                  }}
                >
                  See my Work
                </button>
              </div>
            </div>
          </main>

          {/* About */}
          <section
            className="flex flex-col w-full px-0 md:px-20 lg:px-24 py-28 section"
            id="about"
            ref={aboutRef}
          >
            <div className="flex flex-col">
              <h2 className="text-5xl">Who is Herman Makiese?</h2>
              <hr className="bg-brand w-40 h-1.5 mt-4 mb-6 border-0"></hr>

              <div className="flex flex-col-reverse items-start w-full md:flex-row">
                <div className="flex flex-col w-full md:pr-8 md:w-3/5">
                  <p className="text-lg">
                    Herman Makiese is a web developer and entrepreneur from DRC actually living in Rostov, Russia. He is
                    a computer science student specializing in cyber security. He has a passion for building web
                    applications that are both beautiful and functional, and he&apos;s always looking for new challenges
                    to push his skills to the next level.
                  </p>
                  <p className="text-lg">
                    In addition to his work as a web developer, Herman also owns and operates a web hosting company.
                    Through this venture, he has gained valuable experience in server management, website optimization,
                    and security. He&apos;s proud to say that they&apos;ve helped hundreds of businesses get their websites online,
                    and they continue to provide top-notch service to their clients. Herman is committed to delivering
                    the highest level of customer service and ensuring that his clients&apos; websites are always up and
                    running smoothly.
                  </p>
                  <p className="text-lg">
                    Herman is excited about the future of technology and the role that he can play in shaping it. If you
                    have any questions or are interested in working together, please don&apos;t hesitate to reach out.
                    Take a look at his portfolio to see his work, and get in touch if you&apos;d like to collaborate!
                  </p>
                </div>
                <div className="flex w-full h-full mb-4 md:pl-8 md:w-2/5 md:mb-0">
                  <Image
                    src="/hmak.jpg"
                    className="overflow-hidden rounded-md"
                    width={880}
                    height={1200}
                    alt={"Herman headshot"}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section
            className="flex flex-col w-full px-0 md:px-20 lg:px-24 py-28 section"
            id="skills"
            ref={skillsRef}
          >
            <h2 className="text-5xl">Skills</h2>
            <hr className="bg-brand w-40 h-1.5 mt-4 mb-6 border-0"></hr>

            {/* Skills icons */}
            <div className="w-full grid gap-4 grid-cols-4 sm:grid-cols-4 md:grid-cols-7 mt-4">
              {/* HTML */}
              <Icon
                IconType={Html}
                title="HTML"
                width={"w-16 sm:w-20"}
                height={"h-16 sm:h-20"}
                padding={"p-0"}
                flexDirection={"flex-col"}
                titleMargins={"mt-4"}
                titleSize={"text-sm sm:text-sm"}
                marginBottom={"mb-4"}
                marginRight={"mr-0"}
                textTransform={"normal-case"}
                fixedHeight={"h-28"}
              />

              {/* CSS */}
              <Icon
                IconType={Css}
                title="CSS"
                width={"w-16 sm:w-20"}
                height={"h-16 sm:h-20"}
                padding={"p-0"}
                flexDirection={"flex-col"}
                titleMargins={"mt-4"}
                titleSize={"text-sm sm:text-sm"}
                marginBottom={"mb-4"}
                marginRight={"mr-0"}
                textTransform={"normal-case"}
                fixedHeight={"h-28"}
              />

              {/* Javascript */}
              <Icon
                IconType={Javascript}
                title="Javascript"
                width={"w-16 sm:w-20"}
                height={"h-16 sm:h-20"}
                padding={"p-0"}
                flexDirection={"flex-col"}
                titleMargins={"mt-4"}
                titleSize={"text-sm sm:text-sm"}
                marginBottom={"mb-4"}
                marginRight={"mr-0"}
                textTransform={"normal-case"}
                fixedHeight={"h-28"}
              />

              {/* React */}
              <Icon
                IconType={ReactJs}
                title="React"
                width={"w-16 sm:w-20"}
                height={"h-16 sm:h-20"}
                padding={"p-0"}
                flexDirection={"flex-col"}
                titleMargins={"mt-4"}
                titleSize={"text-sm sm:text-sm"}
                marginBottom={"mb-4"}
                marginRight={"mr-0"}
                textTransform={"normal-case"}
                fixedHeight={"h-28"}
              />

              {/* Next */}
              <Icon
                IconType={NextJs}
                title="Next"
                width={"w-16 sm:w-20"}
                height={"h-16 sm:h-20"}
                padding={"p-0"}
                flexDirection={"flex-col"}
                titleMargins={"mt-4"}
                titleSize={"text-sm sm:text-sm"}
                marginBottom={"mb-4"}
                marginRight={"mr-0"}
                textTransform={"normal-case"}
                fixedHeight={"h-28"}
              />

              {/* Node */}
              <Icon
                IconType={NodeJs}
                title="Node"
                width={"w-16 sm:w-20"}
                height={"h-16 sm:h-20"}
                padding={"p-0"}
                flexDirection={"flex-col"}
                titleMargins={"mt-4"}
                titleSize={"text-sm sm:text-sm"}
                marginBottom={"mb-4"}
                marginRight={"mr-0"}
                textTransform={"normal-case"}
                fixedHeight={"h-28"}
              />

              {/* Express */}
              <Icon
                IconType={Express}
                title="Express"
                width={"w-16 sm:w-20"}
                height={"h-16 sm:h-20"}
                padding={"p-0"}
                flexDirection={"flex-col"}
                titleMargins={"mt-4"}
                titleSize={"text-sm sm:text-sm"}
                marginBottom={"mb-4"}
                marginRight={"mr-0"}
                textTransform={"normal-case"}
                fixedHeight={"h-28"}
              />

              {/* MongoDb */}
              <Icon
                IconType={MongoDb}
                title="MongoDb"
                width={"w-16 sm:w-20"}
                height={"h-16 sm:h-20"}
                padding={"p-0"}
                flexDirection={"flex-col"}
                titleMargins={"mt-4"}
                titleSize={"text-sm sm:text-sm"}
                marginBottom={"mb-4"}
                marginRight={"mr-0"}
                textTransform={"normal-case"}
                fixedHeight={"h-28"}
              />

              {/* Sass */}
              <Icon
                IconType={Sass}
                title="Sass"
                width={"w-16 sm:w-20"}
                height={"h-16 sm:h-20"}
                padding={"p-0"}
                flexDirection={"flex-col"}
                titleMargins={"mt-4"}
                titleSize={"text-sm sm:text-sm"}
                marginBottom={"mb-4"}
                marginRight={"mr-0"}
                textTransform={"normal-case"}
                fixedHeight={"h-28"}
              />

              {/* Bootstrap */}
              <Icon
                IconType={Bootstrap}
                title="Bootstrap"
                width={"w-16 sm:w-20"}
                height={"h-16 sm:h-20"}
                padding={"p-0"}
                flexDirection={"flex-col"}
                titleMargins={"mt-4"}
                titleSize={"text-sm sm:text-sm"}
                marginBottom={"mb-4"}
                marginRight={"mr-0"}
                textTransform={"normal-case"}
                fixedHeight={"h-28"}
              />

              {/* Firebase */}
              <Icon
                IconType={Firebase}
                title="Firebase"
                width={"w-16 sm:w-20"}
                height={"h-16 sm:h-20"}
                padding={"p-0"}
                flexDirection={"flex-col"}
                titleMargins={"mt-4"}
                titleSize={"text-sm sm:text-sm"}
                marginBottom={"mb-4"}
                marginRight={"mr-0"}
                textTransform={"normal-case"}
                fixedHeight={"h-28"}
              />

              {/* Photoshop */}
              <Icon
                IconType={Photoshop}
                title="Photoshop"
                width={"w-16 sm:w-20"}
                height={"h-16 sm:h-20"}
                padding={"p-0"}
                flexDirection={"flex-col"}
                titleMargins={"mt-4"}
                titleSize={"text-sm sm:text-sm"}
                marginBottom={"mb-4"}
                marginRight={"mr-0"}
                textTransform={"normal-case"}
                fixedHeight={"h-28"}
              />

              {/* Python */}
              <Icon
                IconType={Python}
                title="Python"
                width={"w-16 sm:w-20"}
                height={"h-16 sm:h-20"}
                padding={"p-0"}
                flexDirection={"flex-col"}
                titleMargins={"mt-4"}
                titleSize={"text-sm sm:text-sm"}
                marginBottom={"mb-4"}
                marginRight={"mr-0"}
                textTransform={"normal-case"}
                fixedHeight={"h-28"}
              />

              {/* CSharp */}
              <Icon
                IconType={Csharp}
                title="C#"
                width={"w-16 sm:w-20"}
                height={"h-16 sm:h-20"}
                padding={"p-0"}
                flexDirection={"flex-col"}
                titleMargins={"mt-4"}
                titleSize={"text-sm sm:text-sm"}
                marginBottom={"mb-4"}
                marginRight={"mr-0"}
                textTransform={"normal-case"}
                fixedHeight={"h-28"}
              />

              {/* Php */}
              <Icon
                IconType={Php}
                title="Php"
                width={"w-16 sm:w-20"}
                height={"h-16 sm:h-20"}
                padding={"p-0"}
                flexDirection={"flex-col"}
                titleMargins={"mt-4"}
                titleSize={"text-sm sm:text-sm"}
                marginBottom={"mb-4"}
                marginRight={"mr-0"}
                textTransform={"normal-case"}
                fixedHeight={"h-28"}
              />

              {/* JAva */}
              <Icon
                IconType={Java}
                title="Java"
                width={"w-16 sm:w-20"}
                height={"h-16 sm:h-20"}
                padding={"p-0"}
                flexDirection={"flex-col"}
                titleMargins={"mt-4"}
                titleSize={"text-sm sm:text-sm"}
                marginBottom={"mb-4"}
                marginRight={"mr-0"}
                textTransform={"normal-case"}
                fixedHeight={"h-28"}
              />
            </div>
          </section>

          {/* My Work */}
          <section
            className="flex flex-col w-full px-0 md:px-20 lg:px-24 py-28 section"
            id="my-work"
            ref={myWorkRef}
          >
            {/* My Work header */}
            <h2 className="text-5xl">My Work</h2>
            <hr className="bg-brand w-40 h-1.5 mt-4 mb-6 border-0"></hr>

            {/* Featured Projects Container */}
            <div className="flex flex-col w-full mb-12">
              {/* Project One */}
              <FeaturedProjectCard
                title={"Country App"}
                status={""}
                description={`Explorez le monde avec Country App!`}
                float={`right-0`}
                flexDirection={`flex-col lg:flex-row`}
                imgWidth={"1366"}
                imgHeight={"665"}
                imgSrc={"/projects/countryApp.png"}
                liveLink={"https://me.htech-cloud.com/myproject/country-app"}
                repoLink={null}
                stack={
                  <>
                    <Icon
                      IconType={ReactJs}
                      title="React"
                      columnSizing={"w-auto"}
                      width={"w-6"}
                      height={"h-6"}
                      flexDirection={"flex-row"}
                      padding={"p-0"}
                      titleMargins={"my-0 ml-1"}
                      titleSize={"text-sm"}
                      marginBottom={"mb-4"}
                      marginRight={"mr-3"}
                      textTransform={"uppercase"}
                      fixedHeight={"h-auto"}
                    />

                    <Icon
                      IconType={Sass}
                      title="Sass"
                      columnSizing={"w-auto"}
                      width={"w-6"}
                      height={"h-6"}
                      flexDirection={"flex-row"}
                      padding={"p-0"}
                      titleMargins={"my-0 ml-1"}
                      titleSize={"text-sm"}
                      marginBottom={"mb-4"}
                      marginRight={"mr-3"}
                      textTransform={"uppercase"}
                      fixedHeight={"h-auto"}
                    />
                  </>
                }
              />
              {/* Project Two */}
              <FeaturedProjectCard
                title={"Clone Facebook"}
                status={""}
                description={`Découvrez mon projet de clone de la page d'accueil de Facebook!`}
                float={`right-0`}
                flexDirection={`flex-col lg:flex-row-reverse`}
                imgWidth={"1366"}
                imgHeight={"665"}
                imgSrc={"/projects/CloneFb.png"}
                liveLink={"https://me.htech-cloud.com/myproject/country-app"}
                repoLink={null}
                stack={
                  <>
                    <Icon
                      IconType={Html}
                      title="HTML"
                      columnSizing={"w-auto"}
                      width={"w-6"}
                      height={"h-6"}
                      flexDirection={"flex-row"}
                      padding={"p-0"}
                      titleMargins={"my-0 ml-1"}
                      titleSize={"text-sm"}
                      marginBottom={"mb-4"}
                      marginRight={"mr-3"}
                      textTransform={"uppercase"}
                      fixedHeight={"h-auto"}
                    />

                    <Icon
                      IconType={Css}
                      title="CSS3"
                      columnSizing={"w-auto"}
                      width={"w-6"}
                      height={"h-6"}
                      flexDirection={"flex-row"}
                      padding={"p-0"}
                      titleMargins={"my-0 ml-1"}
                      titleSize={"text-sm"}
                      marginBottom={"mb-4"}
                      marginRight={"mr-3"}
                      textTransform={"uppercase"}
                      fixedHeight={"h-auto"}
                    />

                    <Icon
                      IconType={Javascript}
                      title="JavaScript"
                      columnSizing={"w-auto"}
                      width={"w-6"}
                      height={"h-6"}
                      flexDirection={"flex-row"}
                      padding={"p-0"}
                      titleMargins={"my-0 ml-1"}
                      titleSize={"text-sm"}
                      marginBottom={"mb-4"}
                      marginRight={"mr-3"}
                      textTransform={"uppercase"}
                      fixedHeight={"h-auto"}
                    />
                  </>
                }
              />
              {/* Project Three */}
              <FeaturedProjectCard
                title={"OuiTube"}
                status={""}
                description={`Découvrez OuiTube, mon projet de clone de la page YouTube!`}
                float={`right-0`}
                flexDirection={`flex-col lg:flex-row`}
                imgWidth={"1366"}
                imgHeight={"665"}
                imgSrc={"/projects/CloneYtb.png"}
                liveLink={"https://me.htech-cloud.com/myproject/ouitube"}
                repoLink={"https://github.com/hollerith47/clone-youtube"}
                stack={
                  <>
                    <Icon
                      IconType={Html}
                      title="HTML"
                      columnSizing={"w-auto"}
                      width={"w-6"}
                      height={"h-6"}
                      flexDirection={"flex-row"}
                      padding={"p-0"}
                      titleMargins={"my-0 ml-1"}
                      titleSize={"text-sm"}
                      marginBottom={"mb-4"}
                      marginRight={"mr-3"}
                      textTransform={"uppercase"}
                      fixedHeight={"h-auto"}
                    />

                    <Icon
                      IconType={Css}
                      title="CSS3"
                      columnSizing={"w-auto"}
                      width={"w-6"}
                      height={"h-6"}
                      flexDirection={"flex-row"}
                      padding={"p-0"}
                      titleMargins={"my-0 ml-1"}
                      titleSize={"text-sm"}
                      marginBottom={"mb-4"}
                      marginRight={"mr-3"}
                      textTransform={"uppercase"}
                      fixedHeight={"h-auto"}
                    />

                    <Icon
                      IconType={Javascript}
                      title="Javascript"
                      columnSizing={"w-auto"}
                      width={"w-6"}
                      height={"h-6"}
                      flexDirection={"flex-row"}
                      padding={"p-0"}
                      titleMargins={"my-0 ml-1"}
                      titleSize={"text-sm"}
                      marginBottom={"mb-4"}
                      marginRight={"mr-3"}
                      textTransform={"uppercase"}
                      fixedHeight={"h-auto"}
                    />
                  </>
                }
              />
  
              {/* Project Four */}
              <FeaturedProjectCard
                  title={"Cooking App"}
                  status={""}
                  description={`Explorez le monde de la cuisine avec Cooking App ! Avec React, Axios et Sass, découvrez des recettes savoureuses`}
                  float={`right-0`}
                  flexDirection={`flex-col lg:flex-row-reverse`}
                  imgWidth={"1366"}
                  imgHeight={"665"}
                  imgSrc={"/projects/cookingApp.png"}
                  liveLink={"https://me.htech-cloud.com/myproject/cooking-app"}
                  repoLink={null}
                  stack={
                    <>
                      <Icon
                          IconType={Html}
                          title="HTML"
                          columnSizing={"w-auto"}
                          width={"w-6"}
                          height={"h-6"}
                          flexDirection={"flex-row"}
                          padding={"p-0"}
                          titleMargins={"my-0 ml-1"}
                          titleSize={"text-sm"}
                          marginBottom={"mb-4"}
                          marginRight={"mr-3"}
                          textTransform={"uppercase"}
                          fixedHeight={"h-auto"}
                      />
          
                      <Icon
                          IconType={Css}
                          title="CSS3"
                          columnSizing={"w-auto"}
                          width={"w-6"}
                          height={"h-6"}
                          flexDirection={"flex-row"}
                          padding={"p-0"}
                          titleMargins={"my-0 ml-1"}
                          titleSize={"text-sm"}
                          marginBottom={"mb-4"}
                          marginRight={"mr-3"}
                          textTransform={"uppercase"}
                          fixedHeight={"h-auto"}
                      />
          
                      <Icon
                          IconType={Javascript}
                          title="Javascript"
                          columnSizing={"w-auto"}
                          width={"w-6"}
                          height={"h-6"}
                          flexDirection={"flex-row"}
                          padding={"p-0"}
                          titleMargins={"my-0 ml-1"}
                          titleSize={"text-sm"}
                          marginBottom={"mb-4"}
                          marginRight={"mr-3"}
                          textTransform={"uppercase"}
                          fixedHeight={"h-auto"}
                      />
                    </>
                  }
              />
  
              {/* Project Five */}
              <FeaturedProjectCard
                  title={"H Tech mini-portfolio"}
                  status={"H Tech Landing page"}
                  description={`Mon projet web mini portfolio, conçu avec les technologies React et Sass, offre un design épuré et dynamique agrémenté d'effets interactifs captivants. Des animations soignées ajoutent une touche de vie et de mouvement à l'ensemble, pour une expérience utilisateur immersive et stimulante.`}
                  float={`right-0`}
                  flexDirection={`flex-col lg:flex-row`}
                  imgWidth={"1366"}
                  imgHeight={"665"}
                  imgSrc={"/projects/vitrine.png"}
                  liveLink={"https://me.htech-cloud.com/myproject/mini-portfolio"}
                  repoLink={null}
                  stack={
                    <>
                      <Icon
                          IconType={ReactJs}
                          title="React"
                          columnSizing={"w-auto"}
                          width={"w-6"}
                          height={"h-6"}
                          flexDirection={"flex-row"}
                          padding={"p-0"}
                          titleMargins={"my-0 ml-1"}
                          titleSize={"text-sm"}
                          marginBottom={"mb-4"}
                          marginRight={"mr-3"}
                          textTransform={"uppercase"}
                          fixedHeight={"h-auto"}
                      />
          
                      <Icon
                          IconType={Sass}
                          title="Sass"
                          columnSizing={"w-auto"}
                          width={"w-6"}
                          height={"h-6"}
                          flexDirection={"flex-row"}
                          padding={"p-0"}
                          titleMargins={"my-0 ml-1"}
                          titleSize={"text-sm"}
                          marginBottom={"mb-4"}
                          marginRight={"mr-3"}
                          textTransform={"uppercase"}
                          fixedHeight={"h-auto"}
                      />
          
                      <Icon
                          IconType={"n"}
                          title="Axios API"
                          columnSizing={"w-auto"}
                          width={"w-6"}
                          height={"h-6"}
                          flexDirection={"flex-row"}
                          padding={"p-0"}
                          titleMargins={"my-0 ml-1"}
                          titleSize={"text-sm"}
                          marginBottom={"mb-4"}
                          marginRight={"mr-3"}
                          textTransform={"uppercase"}
                          fixedHeight={"h-auto"}
                      />
                    </>
                  }
              />
  
              {/* Project Six */}
              <FeaturedProjectCard
                  title={"My Portfolio"}
                  status={"Herman Makiese's presentation"}
                  description={`Mon projet web mini portfolio, conçu avec les technologies React, NextJs, Tailwind et Sass, offre un design épuré et dynamique agrémenté d'effets interactifs captivants. Des animations soignées ajoutent une touche de vie et de mouvement à l'ensemble, pour une expérience utilisateur immersive et stimulante.`}
                  float={`right-0`}
                  flexDirection={`flex-col lg:flex-row-reverse`}
                  imgWidth={"1366"}
                  imgHeight={"665"}
                  imgSrc={"/projects/myportfolio.png"}
                  liveLink={"https://me.htech-cloud.com"}
                  repoLink={"https://github.com/hollerith47/portfolio"}
                  stack={
                    <>
                      <Icon
                          IconType={ReactJs}
                          title="React"
                          columnSizing={"w-auto"}
                          width={"w-6"}
                          height={"h-6"}
                          flexDirection={"flex-row"}
                          padding={"p-0"}
                          titleMargins={"my-0 ml-1"}
                          titleSize={"text-sm"}
                          marginBottom={"mb-4"}
                          marginRight={"mr-3"}
                          textTransform={"uppercase"}
                          fixedHeight={"h-auto"}
                      />
          
                      <Icon
                          IconType={NextJs}
                          title="Next"
                          columnSizing={"w-auto"}
                          width={"w-6"}
                          height={"h-6"}
                          flexDirection={"flex-row"}
                          padding={"p-0"}
                          titleMargins={"my-0 ml-1"}
                          titleSize={"text-sm"}
                          marginBottom={"mb-4"}
                          marginRight={"mr-3"}
                          textTransform={"uppercase"}
                          fixedHeight={"h-auto"}
                      />
          
                      <Icon
                          IconType={Tailwind}
                          title="Tailwind"
                          columnSizing={"w-auto"}
                          width={"w-6"}
                          height={"h-6"}
                          flexDirection={"flex-row"}
                          padding={"p-0"}
                          titleMargins={"my-0 ml-1"}
                          titleSize={"text-sm"}
                          marginBottom={"mb-4"}
                          marginRight={"mr-3"}
                          textTransform={"uppercase"}
                          fixedHeight={"h-auto"}
                      />
                    </>
                  }
              />
            </div>

            {/* Other Projects header */}
            <h2 className="text-4xl text-center">Projects Description </h2>
            <hr className="bg-brand w-40 h-1.5 mt-4 mb-6 mx-auto border-0"></hr>
            <p className="mb-16 text-lg text-center">
              Take a look at a few of the projects I&apos;ve contributed to...
            </p>

            {/* Projects Description Container */}
            <div className="grid grid-flow-row grid-rows-2 gap-4 grid-col-1 lg:grid-cols-3">
              {projects.map(function (project, i) {
                return <ProjectCard project={project} key={i} />;
              })}
            </div>
          </section>

          {/* Blog */}
          <section
            className="flex flex-col w-full px-0 md:px-20 lg:px-24 py-28 section"
            id="blog"
            ref={blogRef}
          >
            {/* Blog header */}
            <h2 className="text-5xl">Blog</h2>
            <hr className="bg-brand w-40 h-1.5 mt-4 mb-6 border-0"></hr>
            <div className="flex flex-col-reverse w-full md:flex-row">
              <div className="w-full mb-4 md:pl-0 md:mb-0">
                <p className="text-lg">
                  I&apos;m thrilled that you&apos;re here. As you browse through
                  my site, you&apos;ll discover more about me, my interests, and
                  what I have to offer. However, if you&apos;re looking for more
                  in-depth insights, tips, and ideas, I invite you to explore my
                  blog. From thought-provoking articles and inspiring stories to
                  helpful resources and practical advice, my blog is a treasure
                  trove of valuable information that can help you grow, learn,
                  and succeed. So why not grab a cup of coffee, sit back, and
                  enjoy some quality reading time on my blog? I promise you
                  won&apos;t be disappointed!{" "}
                  <Link href="https://blog.htech-cloud.com/">
                    <a className="underline-link">go to my blog</a>
                  </Link>
                </p>
              </div>
            </div>

            {/*<BlogList publications={publications} />*/}
          </section>

          {/* Contact */}
          <section
            className="flex flex-col w-full px-0 md:px-20 lg:px-24 py-28 section"
            id="contact"
            ref={contactRef}
          >
            <h2 className="text-5xl">Contact</h2>
            <hr className="bg-brand w-40 h-1.5 mt-4 mb-6 border-0"></hr>

            <div className="flex flex-col-reverse w-full md:flex-row">
              <div className="w-full mb-4 md:pl-0 md:mb-0">
                <p className="text-lg">
                  At present, I&apos;m open to participating in fresh ventures,
                  so don&apos;t hesitate to reach out if you&apos;re interested
                  in collaborating.
                </p>
                <p className="text-lg">
                  Please feel free to email me at{" "}
                  <Link href="mailto:makieseherman@gmail.com">
                    <a className="underline-link">makieseherman@gmail.com</a>
                  </Link>{" "}
                  and we can discuss the details of your project together!
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="flex flex-col w-full px-0 py-16 md:px-20 lg:px-24 section">
            <hr className="w-full h-1 mb-16 dark:bg-white bg-dark border-0 opacity-10"></hr>
            <div className="w-8 mb-4">
              <svg
                id="abbe8588-8b21-44fd-a605-eb7de7f82941"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 93.13 75.2"
              >
                <path
                  className="dark:opacity-50 dark:fill-current dark:text-light fill-brand"
                  d="M24.05,38.51,7.5,55.06a4.39,4.39,0,1,1-6.21-6.21L14.74,35.41,1.29,22A4.39,4.39,0,0,1,7.5,15.75L24.05,32.3A4.4,4.4,0,0,1,24.05,38.51Z"
                />
                <path
                  className="dark:opacity-50 dark:fill-current dark:text-light fill-brand"
                  d="M91.85,55.06a4.38,4.38,0,0,1-6.21,0L69.09,38.51a4.4,4.4,0,0,1,0-6.21L85.64,15.75A4.39,4.39,0,0,1,91.85,22L78.41,35.41,91.85,48.85A4.4,4.4,0,0,1,91.85,55.06Z"
                />
                <rect
                  className="dark:opacity-50 dark:fill-current dark:text-light fill-brand"
                  x="41.93"
                  y="-1.17"
                  width="8.78"
                  height="77.54"
                  rx="4.39"
                  transform="translate(11.31 -10.71) rotate(15)"
                />
              </svg>
            </div>

            <div className="flex flex-col items-start md:flex-row">
              <p className="w-auto mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} - Hmak47
              </p>

              <div className="flex md:hidden">
                <span className="mr-2">
                  <GitHubProfile marginBottom={"mb-0"} />
                </span>
                <span className="mr-2">
                  <TwitterProfile marginBottom={"mb-0"} />
                </span>
                <span className="mr-2">
                  <LinkedInProfile marginBottom={"mb-0"} />
                </span>
              </div>
            </div>
          </footer>
        </div>

        {/* Fixed Container */}
        <div className="fixed bottom-0 z-30 w-full">
          <div className="container relative flex h-full mx-auto">
            {/* Profile Icons */}
            <div className="absolute bottom-0 items-center hidden mt-auto mr-auto text-white left-8 md:flex md:flex-col">
              <GitHubProfile marginBottom={"mb-4"} />
              <TwitterProfile marginBottom={"mb-4"} />
              <LinkedInProfile marginBottom={"mb-4"} />
              <div className="w-0.5 dark:bg-white bg-dark h-24 opacity-20 mt-2"></div>
            </div>

            {/* Pagination */}
            <div className="absolute bottom-0 items-center hidden mt-auto ml-auto text-white right-8 md:flex md:flex-col">
              {/* Hero - Diamond 1 */}
              <button
                className="w-5 h-5 mb-4"
                onClick={() => {
                  scrollTo(homeRef.current);
                }}
              >
                <svg
                  id="e5c888e5-3206-4553-8f53-60ee93248ad9"
                  className={`group rounded-sm transform  transition duration-500 ease-in-out hover:rotate-45 hover:scale-110 ${
                    visibleSection === "home"
                      ? "rotate-45 scale-110"
                      : "rotate-0 scale-100"
                  }`}
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0
              0 24 24"
                >
                  {/* Fill */}
                  <path
                    className={`fill-current origin-center transform transition duration-200 ease-in-out group-hover:text-dark dark:group-hover:text-white group-hover:rotate-90 ${
                      visibleSection === "home"
                        ? "dark:text-white text-mid rotate-90"
                        : "dark:text-dark text-light rotate-0"
                    }`}
                    d="M5.64 5.64h12.73v12.73H5.64z"
                  />
                  {/* Border */}
                  <path
                    className={`fill-current origin-center transform transition duration-500 ease-in-out dark:group-hover:text-white group-hover:text-dark group-hover:rotate-45 group-hover:opacity-100 ${
                      visibleSection === "home"
                        ? "dark:text-white text-dark rotate-45 opacity-100"
                        : "dark:text-white text-light rotate-45"
                    }`}
                    d="M12 22.41L1.59 12 12 1.59 22.41 12zM4.41 12L12 19.59 19.59 12 12 4.41z"
                  />
                </svg>
              </button>
              {/* About - Diamond 2 */}
              <button
                className="w-5 h-5 mb-4"
                onClick={() => {
                  scrollTo(aboutRef.current);
                }}
              >
                <svg
                  id="e5c888e5-3206-4553-8f53-60ee93248ad9"
                  className={`group rounded-sm transform  transition duration-500 ease-in-out hover:rotate-45 hover:scale-110 ${
                    visibleSection === "about"
                      ? "rotate-45 scale-110"
                      : "rotate-0 scale-100"
                  }`}
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0
              0 24 24"
                >
                  {/* Fill */}
                  <path
                    className={`fill-current origin-center transform transition duration-200 ease-in-out group-hover:text-dark dark:group-hover:text-white group-hover:rotate-90 ${
                      visibleSection === "about"
                        ? "dark:text-white text-mid rotate-90"
                        : "dark:text-dark text-light rotate-0"
                    }`}
                    d="M5.64 5.64h12.73v12.73H5.64z"
                  />
                  {/* Border */}
                  <path
                    className={`fill-current origin-center transform transition duration-500 ease-in-out dark:group-hover:text-white group-hover:text-dark group-hover:rotate-45 group-hover:opacity-100 ${
                      visibleSection === "about"
                        ? "dark:text-white text-dark rotate-45 opacity-100"
                        : "dark:text-white text-light rotate-45"
                    }`}
                    d="M12 22.41L1.59 12 12 1.59 22.41 12zM4.41 12L12 19.59 19.59 12 12 4.41z"
                  />
                </svg>
              </button>
              {/* Skills - Diamond 3 */}
              <button
                className="w-5 h-5 mb-4"
                onClick={() => {
                  scrollTo(skillsRef.current);
                }}
              >
                <svg
                  id="e5c888e5-3206-4553-8f53-60ee93248ad9"
                  className={`group rounded-sm transform  transition duration-500 ease-in-out hover:rotate-45 hover:scale-110 ${
                    visibleSection === "skills"
                      ? "rotate-45 scale-110"
                      : "rotate-0 scale-100"
                  }`}
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0
              0 24 24"
                >
                  {/* Fill */}
                  <path
                    className={`fill-current origin-center transform transition duration-200 ease-in-out group-hover:text-dark dark:group-hover:text-white group-hover:rotate-90 ${
                      visibleSection === "skills"
                        ? "dark:text-white text-mid rotate-90"
                        : "dark:text-dark text-light rotate-0"
                    }`}
                    d="M5.64 5.64h12.73v12.73H5.64z"
                  />
                  {/* Border */}
                  <path
                    className={`fill-current origin-center transform transition duration-500 ease-in-out dark:group-hover:text-white group-hover:text-dark group-hover:rotate-45 group-hover:opacity-100 ${
                      visibleSection === "skills"
                        ? "dark:text-white text-dark rotate-45 opacity-100"
                        : "dark:text-white text-light rotate-45"
                    }`}
                    d="M12 22.41L1.59 12 12 1.59 22.41 12zM4.41 12L12 19.59 19.59 12 12 4.41z"
                  />
                </svg>
              </button>
              {/* My Work - Diamond 4 */}
              <button
                className="w-5 h-5 mb-4"
                onClick={() => {
                  scrollTo(myWorkRef.current);
                }}
              >
                <svg
                  id="e5c888e5-3206-4553-8f53-60ee93248ad9"
                  className={`group rounded-sm transform transition duration-500 ease-in-out hover:rotate-45 hover:scale-110 ${
                    visibleSection === "my-work"
                      ? "rotate-45 scale-110"
                      : "rotate-0 scale-100"
                  }`}
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0
              0 24 24"
                >
                  {/* Fill */}
                  <path
                    className={`fill-current origin-center transform transition duration-200 ease-in-out group-hover:text-dark dark:group-hover:text-white group-hover:rotate-90 ${
                      visibleSection === "my-work"
                        ? "dark:text-white text-mid rotate-90"
                        : "dark:text-dark text-light rotate-0"
                    }`}
                    d="M5.64 5.64h12.73v12.73H5.64z"
                  />
                  {/* Border */}
                  <path
                    className={`fill-current origin-center transform transition duration-500 ease-in-out dark:group-hover:text-white group-hover:text-dark group-hover:rotate-45 group-hover:opacity-100 ${
                      visibleSection === "my-work"
                        ? "dark:text-white text-dark rotate-45 opacity-100"
                        : "dark:text-white text-light rotate-45"
                    }`}
                    d="M12 22.41L1.59 12 12 1.59 22.41 12zM4.41 12L12 19.59 19.59 12 12 4.41z"
                  />
                </svg>
              </button>
              {/* Blog - Diamond 5 */}
              <button
                className="w-5 h-5 mb-4"
                onClick={() => {
                  scrollTo(blogRef.current);
                }}
              >
                <svg
                  id="e5c888e5-3206-4553-8f53-60ee93248ad9"
                  className={`group rounded-sm transform transition duration-500 ease-in-out hover:rotate-45 hover:scale-110 ${
                    visibleSection === "blog"
                      ? "rotate-45 scale-110"
                      : "rotate-0 scale-100"
                  }`}
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0
              0 24 24"
                >
                  {/* Fill */}
                  <path
                    className={`fill-current origin-center transform transition duration-200 ease-in-out group-hover:text-dark dark:group-hover:text-white group-hover:rotate-90 ${
                      visibleSection === "blog"
                        ? "dark:text-white text-mid rotate-90"
                        : "dark:text-dark text-light rotate-0"
                    }`}
                    d="M5.64 5.64h12.73v12.73H5.64z"
                  />
                  {/* Border */}
                  <path
                    className={`fill-current origin-center transform transition duration-500 ease-in-out dark:group-hover:text-white group-hover:text-dark group-hover:rotate-45 group-hover:opacity-100 ${
                      visibleSection === "blog"
                        ? "dark:text-white text-dark rotate-45 opacity-100"
                        : "dark:text-white text-light rotate-45"
                    }`}
                    d="M12 22.41L1.59 12 12 1.59 22.41 12zM4.41 12L12 19.59 19.59 12 12 4.41z"
                  />
                </svg>
              </button>
              {/* Contact - Diamond 6 */}
              <button
                className="w-5 h-5 mb-4"
                onClick={() => {
                  scrollTo(contactRef.current);
                }}
              >
                <svg
                  id="e5c888e5-3206-4553-8f53-60ee93248ad9"
                  className={`group rounded-sm transform  transition duration-500 ease-in-out hover:rotate-45 hover:scale-110 ${
                    visibleSection === "contact"
                      ? "rotate-45 scale-110"
                      : "rotate-0 scale-100"
                  }`}
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0
              0 24 24"
                >
                  {/* Fill */}
                  <path
                    className={`fill-current origin-center transform transition duration-200 ease-in-out group-hover:text-dark dark:group-hover:text-white group-hover:rotate-90 ${
                      visibleSection === "contact"
                        ? "dark:text-white text-mid rotate-90"
                        : "dark:text-dark text-light rotate-0"
                    }`}
                    d="M5.64 5.64h12.73v12.73H5.64z"
                  />
                  {/* Border */}
                  <path
                    className={`fill-current origin-center transform transition duration-500 ease-in-out dark:group-hover:text-white group-hover:text-dark group-hover:rotate-45 group-hover:opacity-100 ${
                      visibleSection === "contact"
                        ? "dark:text-white text-dark rotate-45 opacity-100"
                        : "dark:text-white text-light rotate-45"
                    }`}
                    d="M12 22.41L1.59 12 12 1.59 22.41 12zM4.41 12L12 19.59 19.59 12 12 4.41z"
                  />
                </svg>
              </button>

              {/* Line */}
              <div className="w-0.5 dark:bg-white bg-dark h-24 opacity-20 mt-2 z-30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Method used to fetch data from Hashnode.
 * @param {Object} context
 * @returns props
 */
export async function getServerSideProps(context) {
  const res = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "32ab9fe7-0331-4efc-bdb8-5a3e0bfdd9b9",
    },
    body: JSON.stringify({
      query:
        'query {user(username: "danielcranney") {publication {posts(page: 0) {title brief slug coverImage dateAdded}}}}',
    }),
  });
  const publications = await res.json();

  if (!publications) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      publications,
    },
  };
}
