import type {NextPage} from 'next'
import {HeroContentLeft} from "../components/HeroContentLeft";
import MemberCard from "../components/MemberCard";
import {Card, Container, Grid, Text, Timeline, Title} from "@mantine/core";
import React from "react";
import farLogo from "/public/logos/FAR.jpg"
import wueSpaceLogo from "/public/logos/wue_space.png"
import seeSatLogo from "/public/logos/SeeSat.png"
import starLogo from "/public/logos/STAR.png"
import hyendLogo from "/public/logos/HyEnd.png"
import tudsatLogo from "/public/logos/TUDSaT.svg"
import ksatLogo from "/public/logos/KSat.png"
import warrLogo from "/public/logos/WARR.svg"

const Home: NextPage = () => {
    return (
        <>
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

                        <Timeline.Item title="1st BVSR Conference">
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
                    <Grid.Col lg={4} sm={6}>
                        <MemberCard
                            img={warrLogo}
                            name={"WARR"}
                            description={"WARR e.V. was founded during the space race in the 1960s and is Germany's largest student space group. It is located in Munich."}
                            link={"https://warr.de"}/>
                    </Grid.Col>
                    <Grid.Col lg={4} sm={6}>
                        <MemberCard
                            img={ksatLogo}
                            name={"KSat"}
                            description={"KSat e.V. is a student space group at the University of Stuttgart, focusing on small Satellites and Experiments in Microgravity."}
                            link={"https://www.ksat-stuttgart.de"}/>
                    </Grid.Col>
                    <Grid.Col lg={4} sm={6}>
                        <MemberCard
                            img={tudsatLogo}
                            name={"TUDSaT"}
                            description={"TUDSaT e.V. is located at the University of Darmstadt and focus on satellites and rocketry."}
                            link={"https://tudsat.space"}/>
                    </Grid.Col>
                    <Grid.Col lg={4} sm={6}>
                        <MemberCard
                            img={hyendLogo}
                            name={"HyEnD"}
                            description={"HyEnD e.V. stands for Hybrid Engine Development. Like KSat it is located at the University of Stuttgart. Rocketry is the main focus of HyEnD."}
                            link={"https://hyend.de"}/>
                    </Grid.Col>
                    <Grid.Col lg={4} sm={6}>
                        <MemberCard
                            img={starLogo}
                            name={"STAR Dresden"}
                            description={"STAR Dresden e.V. is the student space group at TU Dresden and is working on all kinds of space related topics, including rocketry, rovers and space elevators!"}
                            link={"https://star-dresden.de"}/>
                    </Grid.Col>
                    <Grid.Col lg={4} sm={6}>
                        <MemberCard
                            img={seeSatLogo}
                            name={"SeeSat"}
                            description={"SeeSat e.V. is located at the DHBW in Friedrichshafen. They develop a satellite for wildfire detection."}
                            link={"https://seesat.eu"}/>
                    </Grid.Col>
                    <Grid.Col lg={4} sm={6}>
                        <MemberCard
                            img={wueSpaceLogo}
                            name={"WüSpace"}
                            description={"WüSpace e.V. is developing various Soft- and Hardware for space projects. It is located in Würzburg."}
                            link={"https://www.wuespace.de"}/>
                    </Grid.Col>
                    <Grid.Col lg={4} sm={6}>
                        <MemberCard
                            img={farLogo}
                            name={"FAR"}
                            description={"FAR e.V. is a nationwide association, that focuses mainly on rocketry. Unlike the other associations, they are not linked to a University."}
                            link={"https://alternative-raumfahrt.de"}/>
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    )
}

export default Home
