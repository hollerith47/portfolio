import {Html, Main,Head, NextScript} from "next/document";
import {i18n} from "next-i18next";
import {useRouter} from "next/router";
import React from "react";
import { useEffect, useState } from 'react';


export default function Document() {
    const { locale } = useRouter();
    const [language, setLanguage] = useState(locale || 'en');

    useEffect(() => {
        setLanguage(locale || 'en');
    }, [locale]);

    return (
        <Html lang={language}>
            {/*<HeaderData/>*/}
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}

Document.getInitialProps = async (ctx) => {
    const initialProps = await ctx.defaultGetInitialProps(ctx);
    const initialLanguage = i18n.language || 'en';
    return { ...initialProps, initialLanguage };
};