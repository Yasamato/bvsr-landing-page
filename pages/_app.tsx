import "../public/global.css"
import type {AppProps} from 'next/app'
import {MantineProvider} from "@mantine/core";

function MyApp({Component, pageProps}: AppProps) {
    return <MantineProvider
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
}

export default MyApp
