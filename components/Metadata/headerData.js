import Head from "next/head";

const HeaderData = () => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <title>Herman Makiese | FullStack Web Developer, Application mobile native</title>
                <meta
                    name="description"
                    content="Portfolio de Herman Makiese deleloppeur web fullstack et application mobile"
                />
                <link rel="icon" href="/favicon.ico"/>
                {/*// <!-- Open Graph : sert à être plus visible sur les réseaux -->*/}
                <meta property="og:title" content="Herman Makiese developpeur fullstack portfolio" />
                <meta property="og:type" content="video.movie"/>
                <meta property="og:url" content="/projects/myportfolio.png"/>
                <meta name="og:description"
                      content="Portfolio de Herman Makiese deleloppeur web fullstack et application mobile"/>
                <meta property="og:image" content="/projects/myportfolio.png"/>
            </Head>
        </>
    );
};

export default HeaderData;