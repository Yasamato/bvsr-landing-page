import "../public/global.css"
import type {AppProps} from 'next/app'
import {MantineProvider} from "@mantine/core";
import Head from "next/head";
import React from "react";

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <title>Bundesverband studentischer Raumfahrt</title>
            <meta name="robots" content="index,archive,follow"/>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>

            <meta property='og:title' content={"Bundesverband studentischer Raumfahrt"}/>
            <meta name='twitter:title' content={"Bundesverband studentischer Raumfahrt"}/>

            <meta name='description'
                  content={"The Bundesverband studentischer Raumfahrt (BVSR) is an association of german student groups representing them on a national level."}/>
            <meta property='og:description'
                  content={"The Bundesverband studentischer Raumfahrt (BVSR) is an association of german student groups representing them on a national level."}/>
            <meta name='twitter:description'
                  content={"The Bundesverband studentischer Raumfahrt (BVSR) is an association of german student groups representing them on a national level."}/>

            <meta name='twitter:image' content={"/square_color_white.png"}/>
            <meta property='og:image' content={"/square_color_white.png"}/>
        </Head>
        <MantineProvider
            theme={{
                fontFamily: 'Maven Pro',
                headings: {fontFamily: 'Maven Pro'},
                colorScheme: 'light',
                colors: {
                    'akzent': ['#2142ab'],
                },
                primaryColor: 'akzent'
            }}
            withGlobalStyles
            withNormalizeCSS>
            <Component {...pageProps} />
        </MantineProvider>
    </>
}

export default MyApp
