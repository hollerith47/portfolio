import ReactTypingEffect from "react-typing-effect";

const Hero = ({homeRef, myWorkRef, scrollTo}) => {
    return (
        <>
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

        </>
    );
};

export default Hero;