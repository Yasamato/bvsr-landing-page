import HeroContentLeft from "../components/HeroContentLeft"
import MemberCard from "../components/MemberCard"
import {Card, Container, Grid, Text, Timeline, Title} from "@mantine/core"
import React from "react"
import farLogo from "/public/logos/FAR.jpg"
import wueSpaceLogo from "/public/logos/wue_space.png"
import seeSatLogo from "/public/logos/SeeSat.png"
import starLogo from "/public/logos/STAR.png"
import hyendLogo from "/public/logos/HyEnd.png"
import tudsatLogo from "/public/logos/TUDSaT.png"
import ksatLogo from "/public/logos/KSat.png"
import warrLogo from "/public/logos/WARR.svg"
import {useTranslation} from 'react-i18next'
import {GetStaticProps, InferGetStaticPropsType} from "next"
import {serverSideTranslations} from "next-i18next/serverSideTranslations"

interface Props {

}

function Home(_props: InferGetStaticPropsType<typeof getStaticProps>) {
    const {t} = useTranslation(['common', 'members'])

    return (
        <>
            <HeroContentLeft/>

            <Container pt={"xl"}>
                <Card my={"xl"}>
                    <Title order={2} m={"xl"}>
                        {t('common:history')}
                    </Title>
                    <Timeline active={7} bulletSize={24} lineWidth={2} color={"blue"} m={"xl"}>
                        <Timeline.Item title={t('common:timeline.first_talks.title')}>
                            <Text color="dimmed" size="sm">
                                {t('common:timeline.first_talks.text')}
                            </Text>
                            <Text size="xs" mt={4}>2019</Text>
                        </Timeline.Item>

                        <Timeline.Item title={t('common:timeline.interested_groups.title')}>
                            <Text color="dimmed" size="sm">
                                {t('common:timeline.interested_groups.text')}
                            </Text>
                            <Text size="xs" mt={4}>2019</Text>
                        </Timeline.Item>

                        <Timeline.Item title={t('common:timeline.core_ideas.title')}>
                            <Text color="dimmed" size="sm">
                                {t('common:timeline.core_ideas.text')}
                            </Text>
                            <Text size="xs" mt={4}>2019</Text>
                        </Timeline.Item>

                        <Timeline.Item title={t('common:timeline.deepen_cooperation.title')}>
                            <Text color="dimmed" size="sm">
                                {t('common:timeline.deepen_cooperation.text')}
                            </Text>
                            <Text size="xs" mt={4}>2019</Text>
                        </Timeline.Item>

                        <Timeline.Item title={t('common:timeline.start_constitution.title')}>
                            <Text color="dimmed" size="sm">
                                {t('common:timeline.start_constitution.text')}
                            </Text>
                            <Text size="xs" mt={4}>2020</Text>
                        </Timeline.Item>

                        <Timeline.Item title={t('common:timeline.decision_founding.title')}>
                            <Text color="dimmed" size="sm">
                                {t('common:timeline.decision_founding.text')}
                            </Text>
                            <Text size="xs" mt={4}>2021</Text>
                        </Timeline.Item>

                        <Timeline.Item title={t('common:timeline.founding.title')}>
                            <Text color="dimmed" size="sm">
                                {t('common:timeline.founding.text')}
                            </Text>
                            <Text size="xs" mt={4}>19. Dec. 2021</Text>
                        </Timeline.Item>

                        <Timeline.Item title={t('common:timeline.1st_conference.title')}>
                            <Text color="dimmed" size="sm">
                                {t('common:timeline.1st_conference.text')}
                            </Text>
                            <Text size="xs" mt={4}>16.-19. Jun. 2022</Text>
                        </Timeline.Item>

                        <Timeline.Item title={t('common:timeline.2nd_conference.title')} lineVariant={"dashed"}>
                            <Text color="dimmed" size="sm">
                                {t('common:timeline.2nd_conference.text')}
                            </Text>
                            <Text size="xs" mt={4}>18.-21. May 2023</Text>
                        </Timeline.Item>

                        <Timeline.Item title={t('common:timeline.3rd_conference.title')} lineVariant={"dashed"}>
                            <Text color="dimmed" size="sm">
                                {t('common:timeline.3rd_conference.text')}
                            </Text>
                            <Text size="xs" mt={4}>2024</Text>
                        </Timeline.Item>
                    </Timeline>
                </Card>

                <Title order={2}>
                    {t('members:Members are')}
                </Title>

                <Grid gutter={"sm"}>
                    <Grid.Col lg={4} sm={6}>
                        <MemberCard
                            img={warrLogo}
                            name={"WARR"}
                            description={t('members:warr_desc')}
                            link={"https://warr.de"}/>
                    </Grid.Col>
                    <Grid.Col lg={4} sm={6}>
                        <MemberCard
                            img={ksatLogo}
                            name={"KSat"}
                            description={t('members:ksat_desc')}
                            link={"https://www.ksat-stuttgart.de"}/>
                    </Grid.Col>
                    <Grid.Col lg={4} sm={6}>
                        <MemberCard
                            img={tudsatLogo}
                            name={"TUDSaT"}
                            description={t('members:tudsat_desc')}
                            link={"https://tudsat.space"}/>
                    </Grid.Col>
                    <Grid.Col lg={4} sm={6}>
                        <MemberCard
                            img={hyendLogo}
                            name={"HyEnD"}
                            description={t('members:hyend_desc')}
                            link={"https://hyend.de"}/>
                    </Grid.Col>
                    <Grid.Col lg={4} sm={6}>
                        <MemberCard
                            img={starLogo}
                            name={"STAR Dresden"}
                            description={t('members:star_desc')}
                            link={"https://star-dresden.de"}/>
                    </Grid.Col>
                    <Grid.Col lg={4} sm={6}>
                        <MemberCard
                            img={seeSatLogo}
                            name={"SeeSat"}
                            description={t('members:seesat_desc')}
                            link={"https://seesat.eu"}/>
                    </Grid.Col>
                    <Grid.Col lg={4} sm={6}>
                        <MemberCard
                            img={wueSpaceLogo}
                            name={"WüSpace"}
                            description={t('members:wuespace_desc')}
                            link={"https://www.wuespace.de"}/>
                    </Grid.Col>
                    <Grid.Col lg={4} sm={6}>
                        <MemberCard
                            img={farLogo}
                            name={"FAR"}
                            description={t('members:far_desc')}
                            link={"https://alternative-raumfahrt.de"}/>
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    )
}

export const getStaticProps: GetStaticProps<Props> = async (
    {
        locale,
    }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'de', [
            'common',
            'footer',
            'members'
        ])),
    },
})
export default Home
