import "../public/global.css"
import type {AppProps} from 'next/app'
import {MantineProvider, SegmentedControl} from "@mantine/core"
import Head from "next/head"
import React from "react"
import {appWithTranslation} from 'next-i18next'
import Footer from "../components/Footer"
import nextI18NextConfig from "../next-i18next.config.js"
import {useRouter} from "next/router"
import Navbar from "../components/Navbar";

function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter()

    return <>
        <Head>
            <meta name="robots" content="index,archive,follow"/>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>

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
            <Navbar useSuspense={false}/>
            <main style={{backgroundColor: "#eee", paddingBottom: "2rem", minHeight: "calc(100vh - 40px)"}}>
                <Component {...pageProps} />
            </main>

            <Footer useSuspense={false}/>
        </MantineProvider>
    </>
}

export default appWithTranslation(MyApp, nextI18NextConfig)
