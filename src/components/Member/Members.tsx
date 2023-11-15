'use client'

import React from "react";
import {Grid, Title} from "@mantine/core";
import MemberCard from "./MemberCard";
import farLogo from "/public/logos/FAR.jpg"
import wueSpaceLogo from "/public/logos/wue_space.png"
import seeSatLogo from "/public/logos/SeeSat.png"
import starLogo from "/public/logos/STAR.svg"
import hyendLogo from "/public/logos/HyEnd.png"
import tudsatLogo from "/public/logos/TUDSaT.png"
import ksatLogo from "/public/logos/KSat.png"
import warrLogo from "/public/logos/WARR.svg"
import staLogo from "/public/logos/STA.svg"
import erigLogo from "/public/logos/ERIG.png"
import bearsLogo from "/public/logos/BEARS.png"
import {useTranslation} from "src/i18n";

export const Members = async ({lng}: { lng: string }) => {
    const {t} = await useTranslation(lng, "members")

    return (
        <>
            <Title order={2}>
                {t('members')}
            </Title>

            <Grid gutter={"sm"}>
                <Grid.Col span={{base: 12, sm: 6, lg: 4}}>
                    <MemberCard
                        lng={lng}
                        img={warrLogo}
                        name={"WARR"}
                        description={t('warr_desc')}
                        link={"https://warr.de"}/>
                </Grid.Col>
                <Grid.Col span={{base: 12, sm: 6, lg: 4}}>
                    <MemberCard
                        lng={lng}
                        img={ksatLogo}
                        name={"KSat"}
                        description={t('ksat_desc')}
                        link={"https://www.ksat-stuttgart.de"}/>
                </Grid.Col>
                <Grid.Col span={{base: 12, sm: 6, lg: 4}}>
                    <MemberCard
                        lng={lng}
                        img={tudsatLogo}
                        name={"TUDSaT"}
                        description={t('tudsat_desc')}
                        link={"https://tudsat.space"}/>
                </Grid.Col>
                <Grid.Col span={{base: 12, sm: 6, lg: 4}}>
                    <MemberCard
                        lng={lng}
                        img={hyendLogo}
                        name={"HyEnD"}
                        description={t('hyend_desc')}
                        link={"https://hyend.de"}/>
                </Grid.Col>
                <Grid.Col span={{base: 12, sm: 6, lg: 4}}>
                    <MemberCard
                        lng={lng}
                        img={starLogo}
                        name={"STAR Dresden"}
                        description={t('star_desc')}
                        link={"https://star-dresden.de"}/>
                </Grid.Col>
                <Grid.Col span={{base: 12, sm: 6, lg: 4}}>
                    <MemberCard
                        lng={lng}
                        img={seeSatLogo}
                        name={"SeeSat"}
                        description={t('seesat_desc')}
                        link={"https://seesat.eu"}/>
                </Grid.Col>
                <Grid.Col span={{base: 12, sm: 6, lg: 4}}>
                    <MemberCard
                        lng={lng}
                        img={wueSpaceLogo}
                        name={"WüSpace"}
                        description={t('wuespace_desc')}
                        link={"https://www.wuespace.de"}/>
                </Grid.Col>
                <Grid.Col span={{base: 12, sm: 6, lg: 4}}>
                    <MemberCard
                        lng={lng}
                        img={farLogo}
                        name={"FAR"}
                        description={t('far_desc')}
                        link={"https://alternative-raumfahrt.de"}/>
                </Grid.Col>
                <Grid.Col span={{base: 12, sm: 6, lg: 4}}>
                    <MemberCard
                        lng={lng}
                        img={staLogo}
                        name={"STA"}
                        description={t('sta_desc')}
                        link={"https://www.spaceteamaachen.de"}/>
                </Grid.Col>
                <Grid.Col span={{base: 12, sm: 6, lg: 4}}>
                    <MemberCard
                        lng={lng}
                        img={erigLogo}
                        name={"ERIG"}
                        description={t('erig_desc')}
                        link={"https://er-ig.de/"}/>
                </Grid.Col>
                <Grid.Col span={{base: 12, sm: 6, lg: 4}}>
                    <MemberCard
                        lng={lng}
                        img={bearsLogo}
                        name={"BEARS"}
                        description={t('bears_desc')}
                        link={"https://www.tu.berlin/raumfahrttechnik/studium-lehre/studentische-initiativen/bears"}/>
                </Grid.Col>
            </Grid>
        </>
    )
}