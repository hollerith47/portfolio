import React, {useState, useEffect, useRef} from "react";
import Link from "next/link";

// Project Card
import ProjectCard from "../components/ProjectCard";
import GitHubProfile from "../components/icons/GitHubProfile";
import TwitterProfile from "../components/icons/TwitterProfile";
import ProjectCardContainer from "../components/ProjectCardContainer";
import Blog from "../components/Blog";
import LinkedInProfile from "../components/icons/LinkedInProfile";

// Dark Mode
import {useTheme} from "next-themes";

// Data
import {_Projects} from "../_data/_Projects";
import {blog} from "../_data/_Blog";
import ThemeModeIcon from "../components/themeModeIcon";
import HeaderData from "../components/Metadata/headerData";

// Images
import Logo from "../components/Logo";
import {navbarItems} from "../_data/_navbar";
import {skills} from "../_data/_Skills";
import MobileMenuButton from "../components/Navbar/MobileMenuButton";
import ThemeSwitcherButton from "../components/themeSwitcherButton";
import NeedHelpButton from "../components/NeedHelpButton";
import Sections from "../Sections";
import MobileNav from "../components/Navbar/MobileNav";
import DesktopItems from "../components/Navbar/DesktopItems";
import ReactTypingEffect from "react-typing-effect";


const getDimensions = (ele) => {
    const {height} = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
        height,
        offsetTop,
        offsetBottom,
    };
};

const scrollTo = (ele) => {
    ele?.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
};

export default function Home({publications}) {
    const [visibleSection, setVisibleSection] = useState();
    const [scrolling, setScrolling] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);
    const {systemTheme, theme, setTheme} = useTheme();

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
            {section: "home", ref: homeRef, id: 1},
            {section: "about", ref: aboutRef, id: 2},
            {section: "skills", ref: skillsRef, id: 3},
            {section: "my-work", ref: myWorkRef, id: 4},
            {section: "blog", ref: blogRef, id: 5},
            {section: "contact", ref: contactRef, id: 6},
        ];

        const handleScroll = () => {
            const {height: headerHeight} = getDimensions(headerRef.current);
            const scrollPosition = window.scrollY + headerHeight;

            const selected = sectionRefs.find(({section, ref}) => {
                const ele = ref.current;
                if (ele) {
                    const {offsetBottom, offsetTop} = getDimensions(ele);
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
                <ThemeModeIcon dark={true}/>
            )
        } else {
            return (
                <ThemeModeIcon dark={false}/>
            )
        }
    };

    const switchRef = (id) => {
        switch (id) {
            case 1:
                return homeRef.current
            case 2:
                return aboutRef.current
            case 3:
                return skillsRef.current
            case 4:
                return myWorkRef.current
            case 5:
                return blogRef.current
            case 6:
                return contactRef.current
        }
    }

    return (
        <div className="bg-white dark:bg-darker transition-all duration-150 ease-in-out">
            <div
                className={`relative w-full dark:bg-dark/20 bg-light bg-opacity-10 overflow-auto min-h-screen transition-all duration-150 ease-in-out ${
                    navbarOpen ? "overflow-hidden" : "overflow-auto"
                }`}
            >
                <HeaderData/>
                {/* mobile-screen Menu */}
                <MobileNav
                    scrollTo={scrollTo}
                    setNavbarOpen={setNavbarOpen}
                    switchRef={switchRef}
                    visibleSection={visibleSection}
                    navbarOpen={navbarOpen}
                />

                {/* fullScreen menu */}
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
                        <Logo/>
                        {/* Nav */}
                        <nav className="block ml-auto h-full">
                            <ul className="z-50 flex items-center">
                                <DesktopItems
                                    scrollTo={scrollTo}
                                    switchRef={switchRef}
                                    visibleSection={visibleSection}
                                />

                                <li className="z-50 hidden ml-5 list-none lg:inline-block">
                                    <NeedHelpButton/>
                                </li>
                                <li className="z-50 inline-block list-none lg:hidden group">
                                    <MobileMenuButton
                                        setNavbarOpen={setNavbarOpen}
                                        navbarOpen={navbarOpen}
                                    />
                                </li>
                            </ul>
                        </nav>
                        {/*    theme switcher*/}
                        <ThemeSwitcherButton
                            theme={theme}
                            renderThemeChanger={renderThemeChanger}
                            setTheme={setTheme}
                        />
                    </div>
                </header>

                {/* Content Container */}
                <div className="container relative z-30 mx-auto">
                    <main className={`flex-col flex h-screen`} id="home" ref={homeRef}>
                        {/* Main */}
                        <div
                            className="container relative flex flex-col items-start justify-center flex-grow px-0 mx-auto md:px-20 lg:px-24 section">
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
                                    I build and host websites that not only look great, but also perform at a high
                                    level.
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
                    <Sections
                        aboutRef={aboutRef}
                        scrollTo={scrollTo}
                        // homeRef={homeRef}
                        myWorkRef={myWorkRef}
                        skillsRef={skillsRef}
                    />
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
                            <ProjectCardContainer/>
                        </div>

                        {/* Projects descriptions header */}
                        <h2 className="text-4xl text-center">Projects Description </h2>
                        <hr className="bg-brand w-40 h-1.5 mt-4 mb-6 mx-auto border-0"></hr>
                        <p className="mb-16 text-lg text-center">
                            Take a look at a few of the projects I&apos;ve contributed to...
                        </p>

                        {/* Projects Description Container */}
                        <div className="grid grid-flow-row grid-rows-2 gap-4 grid-col-1 lg:grid-cols-3">
                            {_Projects.map(function (project, i) {
                                return <ProjectCard project={project} key={i}/>;
                            })}
                        </div>
                    </section>

                    {/* Blog */}
                    <section
                        className="flex flex-col w-full px-0 md:px-20 lg:px-24 py-28 section"
                        id="blog"
                        ref={blogRef}
                    >
                        <Blog
                            title={blog.title}
                            description={blog.description}
                            btnText={blog.btnText}
                            link={blog.link}
                        />

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
                                    <Link className="underline-link" href="mailto:makieseherman@gmail.com">
                                        makieseherman@gmail.com
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
                  <GitHubProfile marginBottom={"mb-0"}/>
                </span>
                                <span className="mr-2">
                  <TwitterProfile marginBottom={"mb-0"}/>
                </span>
                                <span className="mr-2">
                  <LinkedInProfile marginBottom={"mb-0"}/>
                </span>
                            </div>
                        </div>
                    </footer>
                </div>

                {/* Fixed Container */}
                <div className="fixed bottom-0 z-30 w-full">
                    <div className="container relative flex h-full mx-auto">
                        {/* Profile Icons */}
                        <div
                            className="absolute bottom-0 items-center hidden mt-auto mr-auto text-white left-8 md:flex md:flex-col">
                            <GitHubProfile marginBottom={"mb-4"}/>
                            <TwitterProfile marginBottom={"mb-4"}/>
                            <LinkedInProfile marginBottom={"mb-4"}/>
                            <div className="w-0.5 dark:bg-white bg-dark h-24 opacity-20 mt-2"></div>
                        </div>

                        {/* Pagination */}
                        <div
                            className="absolute bottom-0 items-center hidden mt-auto ml-auto text-white right-8 md:flex md:flex-col">
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
                            {/* Index - Diamond 3 */}
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
