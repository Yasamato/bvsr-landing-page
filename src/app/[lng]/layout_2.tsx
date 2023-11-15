import {type ReactNode} from "react";
import {type Metadata, type Viewport} from 'next'
import {AppShell, MantineProvider} from "@mantine/core"
import {Navbar} from "~/components/Navigation/Navbar"
import {Footer} from "~/components/Navigation/Footer"
import {fallbackLng, languages} from '~/i18n/settings'

export async function generateStaticParams() {
    return languages.map((lng) => ({lng}))
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    themeColor: 'white',
}

export async function generateMetadata({params}: { params: { lng: string } }): Promise<Metadata> {
    const lng = languages.includes(params.lng) ? params.lng : fallbackLng
    const path = "../i18n/locales/" + lng + "/common.json";
    const file = Bun.file(path);
    const {desc} = await file.json();

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
            locale: params.lng,
            type: 'website',
        },
    }
}

export default function RootLayout({children, params: {lng}}: { children: ReactNode, params: { lng: string } }) {
    return (
        <html lang={lng}>
        <body>
        <MantineProvider
            theme={{
                fontFamily: 'Maven Pro, sans-serif'
            }}>
            <AppShell header={{height: 56}}>
                <Navbar lng={lng}/>

                <main style={{
                    backgroundColor: "#eee",
                    paddingBottom: "2rem",
                    paddingTop: "4rem",
                    minHeight: "calc(100vh - 40px)"
                }}>
                    {children}
                </main>

                <Footer lng={lng}/>
            </AppShell>
        </MantineProvider>
        </body>
        </html>
    )
}
