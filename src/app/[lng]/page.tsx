import React from "react"
import {HeroContent} from "~/components/HeroContent/HeroContent"
import {Members} from "~/components/Member/Members";
import {History} from "~/components/History";

export default async function Page({params: {lng}}: { params: { lng: string } }) {
    return (
        <>
            <HeroContent lng={lng}/>

            <History lng={lng}/>

            <Members lng={lng}/>
        </>
    )
}
