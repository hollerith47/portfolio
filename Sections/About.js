import Image from "next/image";

const About = ({aboutRef}) => {
    return (
        <>
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
                                Herman Makiese is a web developer and entrepreneur from DRC actually living in
                                Rostov, Russia. He is a graduate in computer science, specializing in cybersecurity. He has a passion for
                                building web
                                applications that are both beautiful and functional, and he&apos;s always
                                looking for new
                                challenges
                                to push his skills to the next level.
                            </p>
                            <p className="text-lg">
                                In addition to his work as a web developer, Herman also owns and operates a web
                                hosting company.
                                Through this venture, he has gained valuable experience in server management,
                                website
                                optimization,
                                and security. He&apos;s proud to say that they&apos;ve helped hundreds of
                                businesses get their
                                websites online,
                                and they continue to provide top-notch service to their clients. Herman is
                                committed to delivering
                                the highest level of customer service and ensuring that his
                                clients&apos; websites are always up
                                and
                                running smoothly.
                            </p>
                            <p className="text-lg">
                                Herman is excited about the future of technology and the role that he can play
                                in shaping it. If
                                you
                                have any questions or are interested in working together, please don&apos;t
                                hesitate to reach out.
                                Take a look at his portfolio to see his work, and get in touch if you&apos;d
                                like to collaborate!
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
        </>
    );
};

export default About;