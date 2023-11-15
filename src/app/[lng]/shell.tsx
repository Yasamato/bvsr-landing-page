'use client'
import React from "react";
import {Navbar} from "~/components/Navigation/Navbar"
import {Footer} from "~/components/Navigation/Footer"
import {AppShell} from "@mantine/core"

export const Shell = ({children, lng}: { children: React.ReactNode, lng: string }) => {
    return (
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
    )
}