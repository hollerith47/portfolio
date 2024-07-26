import {Html, Main, NextScript} from "next/document";
import HeaderData from "../components/Metadata/headerData";
import {i18n} from "next-i18next";
import {useRouter} from "next/router";
import React from "react";


export default function Document() {
    const {locale} = useRouter();
    const lang = locale || i18n.language;
    
    return (
        <Html lang={this.props.__NEXT_DATA__.props.initialLanguage}>
            <HeaderData/>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}

export async function getInitialProps(ctx) {
    const initialProps = await ctx.defaultGetInitialProps(ctx);
    return { ...initialProps };
}