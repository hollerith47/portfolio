import Hero from "./Hero";
import About from "./About";
import Skills from "./skills";

const Sections = ({myWorkRef, scrollTo, homeRef, aboutRef, skillsRef}) => {
    return (
        <>
            {/* Hero */}
            {/*<Hero*/}
            {/*    myWorkRef={myWorkRef}*/}
            {/*    scrollTo={scrollTo}*/}
            {/*    homeRef={homeRef}*/}
            {/*/>*/}

            {/* About */}
            <About aboutRef={aboutRef}/>

            {/*  Skills  */}
            <Skills
                skillsRef={skillsRef}
            />

        </>
    );
};

export default Sections;