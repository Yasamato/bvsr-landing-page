import "~/app/globals.css"
import React from "react"
import * as fs from 'fs'
import path from "path"
import {fallbackLng, languages} from '~/i18n/settings'
import {Metadata} from "next"
import {maven} from "~/app/fonts"
import Header from "~/components/Navigation/Header";
import {Footer} from "~/components/Navigation/Footer";

export function generateStaticParams() {
    return languages.map((lng) => ({lng}))
}

export function generateMetadata({params}: { params: { lng: string } }): Metadata {
    console.log("Trying to load desc from locales", params.lng)
    const lng = languages.includes(params.lng) ? params.lng : fallbackLng
    console.log("At path", path.resolve(process.cwd(), "src/i18n/locales/" + lng + "/common.json"))
    const data = fs.readFileSync(path.resolve(process.cwd(), "app/i18n/locales/" + lng + "/common.json"), 'utf8');
    const {desc} = JSON.parse(data);

    // const file = Bun.file(path);
    // const {desc} = await file.json();

    console.log("Loaded desc from locales", params.lng, desc)
    return {
        metadataBase: new URL('https://bvsr.space'),
        title: {
            template: '%s | BVSR',
            default: 'Bundesverband studentischer Raumfahrt', // a default is required when creating a template
        },
        description: desc,
        robots: {
            index: true,
            noarchive: false,
            follow: true
        },
        icons: {
            icon: '/favicon-32x32.png',
            apple: '/apple-touch-icon.png',
        },
        manifest: "/site.webmanifest",
        twitter: {
            card: 'summary',
            images: ['https://bvsr.space/square_color_white.png'],
        },
        openGraph: {
            url: 'https://bvsr.space',
            siteName: 'BVSR',
            images: [
                {
                    url: 'https://bvsr.space/square_color_white.png',
                    width: 500,
                    height: 500,
                    alt: 'BVSR Logo'
                }
            ],
            locale: lng
        },
    }
}

export default function RootLayout({children, params: {lng}}: { children: React.ReactNode, params: { lng: string } }) {
    return (
        <html lang={lng} className={maven.className}>
        <body>
        <Header lng={lng}/>
        <main>
            {children}
        </main>
        <Footer lng={lng}/>
        </body>
        </html>
    )
}
