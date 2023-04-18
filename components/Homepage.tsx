import HeroContentLeft from "./HeroContent"
import MemberCard from "../components/MemberCard"
import {Alert, Card, Container, Grid, Text, Timeline, Title} from "@mantine/core"
import React from "react"
import farLogo from "/public/logos/FAR.jpg"
import wueSpaceLogo from "/public/logos/wue_space.png"
import seeSatLogo from "/public/logos/SeeSat.png"
import starLogo from "/public/logos/STAR.png"
import hyendLogo from "/public/logos/HyEnd.png"
import tudsatLogo from "/public/logos/TUDSaT.png"
import ksatLogo from "/public/logos/KSat.png"
import warrLogo from "/public/logos/WARR.svg"
import {Trans, withTranslation, WithTranslation} from 'next-i18next'
import Meta from "../components/Meta"
import Link from "next/link"


const Homepage = ({t}: WithTranslation) => {

    return (
        <>
            <Meta description={t("hero_label")} title={"Bundesverband studentischer Raumfahrt"}/>
            <HeroContentLeft/>

            <Container pt={"xl"}>
                <Alert title={"Save the date!"} color={"orange"}>
                    <Trans t={t} i18nKey="save_the_date" ns={'common'}>
                        The next <Link href={"/conference/2023"}>BVSR Conference</Link> is going to happen on 18.-21. May 2023 in Stuttgart.
                    </Trans>
                </Alert>

                <Card my={"xl"}>
                    <Title order={2} m={"xl"}>
                        {t('history')}
                    </Title>
                    <Timeline active={7} bulletSize={24} lineWidth={2} color={"blue"} m={"xl"}>
                        <Timeline.Item title={t('timeline.first_talks.title')}>
                            <Text color="dimmed" size="sm">
                                {t('timeline.first_talks.text')}
                            </Text>
                            <Text size="xs" mt={4}>2019</Text>
                        </Timeline.Item>

                        <Timeline.Item title={t('timeline.interested_groups.title')}>
                            <Text color="dimmed" size="sm">
                                {t('timeline.interested_groups.text')}
                            </Text>
                            <Text size="xs" mt={4}>2019</Text>
                        </Timeline.Item>

                        <Timeline.Item title={t('timeline.core_ideas.title')}>
                            <Text color="dimmed" size="sm">
                                {t('timeline.core_ideas.text')}
                            </Text>
                            <Text size="xs" mt={4}>2019</Text>
                        </Timeline.Item>

                        <Timeline.Item title={t('timeline.deepen_cooperation.title')}>
                            <Text color="dimmed" size="sm">
                                {t('timeline.deepen_cooperation.text')}
                            </Text>
                            <Text size="xs" mt={4}>2019</Text>
                        </Timeline.Item>

                        <Timeline.Item title={t('timeline.start_constitution.title')}>
                            <Text color="dimmed" size="sm">
                                {t('timeline.start_constitution.text')}
                            </Text>
                            <Text size="xs" mt={4}>2020</Text>
                        </Timeline.Item>

                        <Timeline.Item title={t('timeline.decision_founding.title')}>
                            <Text color="dimmed" size="sm">
                                {t('timeline.decision_founding.text')}
                            </Text>
                            <Text size="xs" mt={4}>2021</Text>
                        </Timeline.Item>

                        <Timeline.Item title={t('timeline.founding.title')}>
                            <Text color="dimmed" size="sm">
                                {t('timeline.founding.text')}
                            </Text>
                            <Text size="xs" mt={4}>19. Dec. 2021</Text>
                        </Timeline.Item>

                        <Timeline.Item title={t('timeline.1st_conference.title')}>
                            <Text color="dimmed" size="sm">
                                {t('timeline.1st_conference.text')}
                            </Text>
                            <Text size="xs" mt={4}>16.-19. Jun. 2022</Text>
                        </Timeline.Item>

                        <Timeline.Item title={t('timeline.2nd_conference.title')} lineVariant={"dashed"}>
                            <Text color="dimmed" size="sm">
                                {t('timeline.2nd_conference.text')}
                            </Text>
                            <Text size="xs" mt={4}>18.-21. May 2023</Text>
                        </Timeline.Item>

                        <Timeline.Item title={t('timeline.3rd_conference.title')} lineVariant={"dashed"}>
                            <Text color="dimmed" size="sm">
                                {t('timeline.3rd_conference.text')}
                            </Text>
                            <Text size="xs" mt={4}>2024</Text>
                        </Timeline.Item>
                    </Timeline>
                </Card>

                <Title order={2}>
                    {t('members', {ns: 'members'})}
                </Title>

                <Grid gutter={"sm"}>
                    <Grid.Col lg={4} sm={6}>
                        <MemberCard
                            img={warrLogo}
                            name={"WARR"}
                            description={t('warr_desc', {ns: 'members'})}
                            link={"https://warr.de"}/>
                    </Grid.Col>
                    <Grid.Col lg={4} sm={6}>
                        <MemberCard
                            img={ksatLogo}
                            name={"KSat"}
                            description={t('ksat_desc', {ns: 'members'})}
                            link={"https://www.ksat-stuttgart.de"}/>
                    </Grid.Col>
                    <Grid.Col lg={4} sm={6}>
                        <MemberCard
                            img={tudsatLogo}
                            name={"TUDSaT"}
                            description={t('tudsat_desc', {ns: 'members'})}
                            link={"https://tudsat.space"}/>
                    </Grid.Col>
                    <Grid.Col lg={4} sm={6}>
                        <MemberCard
                            img={hyendLogo}
                            name={"HyEnD"}
                            description={t('hyend_desc', {ns: 'members'})}
                            link={"https://hyend.de"}/>
                    </Grid.Col>
                    <Grid.Col lg={4} sm={6}>
                        <MemberCard
                            img={starLogo}
                            name={"STAR Dresden"}
                            description={t('star_desc', {ns: 'members'})}
                            link={"https://star-dresden.de"}/>
                    </Grid.Col>
                    <Grid.Col lg={4} sm={6}>
                        <MemberCard
                            img={seeSatLogo}
                            name={"SeeSat"}
                            description={t('seesat_desc', {ns: 'members'})}
                            link={"https://seesat.eu"}/>
                    </Grid.Col>
                    <Grid.Col lg={4} sm={6}>
                        <MemberCard
                            img={wueSpaceLogo}
                            name={"WüSpace"}
                            description={t('wuespace_desc', {ns: 'members'})}
                            link={"https://www.wuespace.de"}/>
                    </Grid.Col>
                    <Grid.Col lg={4} sm={6}>
                        <MemberCard
                            img={farLogo}
                            name={"FAR"}
                            description={t('far_desc', {ns: 'members'})}
                            link={"https://alternative-raumfahrt.de"}/>
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    )
}

export default withTranslation(['common', 'members'])(Homepage)
