import {createGetInitialProps} from '@mantine/next';
import Document, {Head, Html, Main, NextScript} from 'next/document';
import React from "react";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
    static getInitialProps = getInitialProps;

    render() {
        return (
            <Html lang={"en"}>
                <Head>
                    <meta charSet="utf-8"/>

                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                    <link rel="manifest" href="/site.webmanifest"/>
                    <meta name="apple-mobile-web-app-title" content="BVSR"/>
                    <meta name="application-name" content="BVSR"/>
                    <meta name="msapplication-TileColor" content="#da532c"/>
                    <meta name="theme-color" content="#ffffff"/>

                    <link href={"/maven_pro.woff"} rel={"stylesheet"}/>
                </Head>

                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}