import "../public/global.css"
import type {AppProps} from 'next/app'
import {MantineProvider} from "@mantine/core"
import Head from "next/head";
import React from "react";
import {appWithTranslation} from 'next-i18next'
import Footer from "../components/Footer"
import nextI18NextConfig from '../next-i18next.config.js'

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <title>Bundesverband studentischer Raumfahrt</title>
            <meta name="robots" content="index,archive,follow"/>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>

            <meta property='og:title' content={"Bundesverband studentischer Raumfahrt"}/>
            <meta name='twitter:title' content={"Bundesverband studentischer Raumfahrt"}/>

            <meta name='description'
                  content={"The Bundesverband studentischer Raumfahrt (BVSR) represents German student groups involved in space projects on a national level."}/>
            <meta property='og:description'
                  content={"The Bundesverband studentischer Raumfahrt (BVSR) represents German student groups involved in space projects on a national level."}/>
            <meta name='twitter:description'
                  content={"The Bundesverband studentischer Raumfahrt (BVSR) represents German student groups involved in space projects on a national level."}/>

            <meta name='twitter:image' content={"/square_color_white.png"}/>
            <meta property='og:image' content={"/square_color_white.png"}/>
        </Head>
        <MantineProvider
            theme={{
                fontFamily: 'Maven Pro, sans-serif',
                headings: {fontFamily: 'Maven Pro, sans-serif'},
                colorScheme: 'light',
                colors: {
                    'akzent': ['#2142ab'],
                },
                primaryColor: 'akzent'
            }}
            withGlobalStyles
            withNormalizeCSS>
            <main style={{backgroundColor: "#eee", paddingBottom: "2rem", minHeight: "calc(100vh - 40px)"}}>
                <Component {...pageProps} />
            </main>

            <Footer/>
        </MantineProvider>
    </>
}

export default appWithTranslation(MyApp, nextI18NextConfig)
