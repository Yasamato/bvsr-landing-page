import type {NextPage} from 'next'
import {HeroContentLeft} from "../components/HeroContentLeft";
import MemberCard from "../components/MemberCard";
import {Card, Container, Grid, Text, Timeline, Title} from "@mantine/core";
import React from "react";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>Bundesverband studentischer Raumfahrt e.V.</title>
                <meta name="robots" content="index,archive,follow"/>

                <meta property='og:title' content={"Bundesverband studentischer Raumfahrt e.V."}/>
                <meta name='twitter:title' content={"Bundesverband studentischer Raumfahrt e.V."}/>

                <meta name='description'
                      content={"The Bundesverband studentischer Raumfahrt (BVSR) is an association of german student groups representing them on a national level."}/>
                <meta property='og:description'
                      content={"The Bundesverband studentischer Raumfahrt (BVSR) is an association of german student groups representing them on a national level."}/>
                <meta name='twitter:description'
                      content={"The Bundesverband studentischer Raumfahrt (BVSR) is an association of german student groups representing them on a national level."}/>

                <meta name='twitter:image' content={"/square_color_white.png"}/>
                <meta property='og:image' content={"/square_color_white.png"}/>
                <link href={"https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap"} rel={"stylesheet"}/>
            </Head>

            <main style={{backgroundColor: "#eee"}}>

                <HeroContentLeft/>

                <Container pt={"xl"}>
                    <Card my={"xl"}>
                        <Title order={2} m={"xl"}>
                            History of the BVSR
                        </Title>
                        <Timeline active={4} bulletSize={24} lineWidth={2} color={"blue"} m={"xl"}>
                            <Timeline.Item title="Inital Talks">
                                <Text color="dimmed" size="sm">
                                    First talks between founding members in Darmstadt
                                </Text>
                                <Text size="xs" mt={4}>2019</Text>
                            </Timeline.Item>

                            <Timeline.Item title="Gaining members">
                                <Text color="dimmed" size="sm">
                                    Second meeting in Stuttgart
                                </Text>
                                <Text size="xs" mt={4}>2020</Text>
                            </Timeline.Item>

                            <Timeline.Item title="BVSR takes shape">
                                <Text color="dimmed" size="sm">
                                    Decision to found BVSR in Dresden
                                </Text>
                                <Text size="xs" mt={4}>2021</Text>
                            </Timeline.Item>

                            <Timeline.Item title="Founding of BVSR">
                                <Text color="dimmed" size="sm">
                                    BVSR has been founded in Darmstadt
                                </Text>
                                <Text size="xs" mt={4}>19. Dez. 2021</Text>
                            </Timeline.Item>

                            <Timeline.Item title="1st BVSR Conference" lineVariant="dashed">
                                <Text color="dimmed" size="sm">
                                    1st BVSR Conference in Munich
                                </Text>
                                <Text size="xs" mt={4}>16.-19. Jun. 2022</Text>
                            </Timeline.Item>

                            <Timeline.Item title="2nd BVSR Conference" lineVariant={"dashed"}>
                                <Text color="dimmed" size="sm">
                                    2nd BVSR Conference in Stuttgart
                                </Text>
                                <Text size="xs" mt={4}>2023</Text>
                            </Timeline.Item>

                            <Timeline.Item title="3rd BVSR Conference" lineVariant={"dashed"}>
                                <Text color="dimmed" size="sm">
                                    3rd BVSR Conference in Friedrichshafen
                                </Text>
                                <Text size="xs" mt={4}>2024</Text>
                            </Timeline.Item>
                        </Timeline>
                    </Card>

                    <Title order={2}>
                        Members are
                    </Title>

                    <Grid gutter={"sm"}>
                        <Grid.Col lg={4} md={6}>
                            <MemberCard
                                img={"/logos/LOGO_WARR_blue.svg"}
                                name={"WARR"}
                                description={"WARR e.V. was founded during the space race in the 1960s and is Germany's largest student space group. It is located in Munich."}
                                link={"https://warr.de"}/>
                        </Grid.Col>
                        <Grid.Col lg={4} md={6}>
                            <MemberCard
                                img={"/logos/KSat.png"}
                                name={"KSat"}
                                description={"KSat e.V. is a student space group at the University of Stuttgart, focusing on small Satellites and Experiments in Microgravity."}
                                link={"https://www.ksat-stuttgart.de"}/>
                        </Grid.Col>
                        <Grid.Col lg={4} md={6}>
                            <MemberCard
                                img={"/logos/TUDSaT.svg"}
                                name={"TUDSaT"}
                                description={"TUDSaT e.V. is located at the University of Darmstadt and focus on satellites and rocketry."}
                                link={"https://tudsat.space"}/>
                        </Grid.Col>
                        <Grid.Col lg={4} md={6}>
                            <MemberCard
                                img={"/logos/HyEnd_dark.png"}
                                name={"HyEnD"}
                                description={"HyEnD e.V. stands for Hybrid Engine Development. Like KSat it is located at the University of Stuttgart. Rocketry is the main focus of HyEnD."}
                                link={"https://hyend.de"}/>
                        </Grid.Col>
                        <Grid.Col lg={4} md={6}>
                            <MemberCard
                                img={"/logos/STAR.png"}
                                name={"STAR Dresden"}
                                description={"STAR Dresden e.V. is the student space group at TU Dresden and is working on all kinds of space related topics, including rocketry, rovers and space elevators!"}
                                link={"https://star-dresden.de"}/>
                        </Grid.Col>
                        <Grid.Col lg={4} md={6}>
                            <MemberCard
                                img={"/logos/SeeSat_Logo_freigestellt.png"}
                                name={"SeeSat"}
                                description={"SeeSat e.V. is located at the DHBW in Friedrichshafen. They develop a satellite for wildfire detection."}
                                link={"https://seesat.eu"}/>
                        </Grid.Col>
                        <Grid.Col lg={4} md={6}>
                            <MemberCard
                                img={"/logos/wue_space.png"}
                                name={"WüSpace"}
                                description={"WüSpace e.V. is developing various Soft- and Hardware for space projects. It is located in Würzburg."}
                                link={"https://www.wuespace.de"}/>
                        </Grid.Col>
                        <Grid.Col lg={4} md={6}>
                            <MemberCard
                                img={"/logos/FAR.jpg"}
                                name={"FAR"}
                                description={"FAR e.V. is a nationwide association, that focuses mainly on rocketry. Unlike the other associations, they are not linked to a University."}
                                link={"https://alternative-raumfahrt.de"}/>
                        </Grid.Col>
                    </Grid>
                </Container>
            </main>
        </>
    )
}

export default Home
