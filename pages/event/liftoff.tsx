import React from "react"
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import nextI18NextConfig from '../../next-i18next.config.js'
import {Container, Grid, Table} from "@mantine/core";
import Meta from "../../components/Meta";
import Image from "next/image";
import imageConference from "../../public/event/liftoff/conference2023.jpg"
import imageSpeaker from "../../public/event/liftoff/speaker.jpg"
import imageTgz from "../../public/event/liftoff/tgz.jpg"


export default function Liftoff() {
    return (
        <Container pt={"xl"}>
            <Meta description={""} title={"BVSR Event Liftoff"}/>
            <article>
                <h1>
                    BVSR-Liftoff
                </h1>

                <h2>
                    Wer sind wir und was ist das Ziel von BVSR-Liftoff?
                </h2>
                <p>
                    Willkommen beim BVSR-Liftoff, der bahnbrechenden Initiative des Bundesverbands Studentischer
                    Raumfahrt (BVSR)! Wir sind eine dynamische Gruppe von Studierenden aus ganz Deutschland, deren
                    gemeinsame Leidenschaft die Raumfahrt ist. Unsere Mission ist es, dich und Gleichgesinnte auf das
                    aufregende Abenteuer der Startup-Gründung und den nahtlosen Einstieg in die berufliche Welt der
                    Raumfahrt vorzubereiten. Unser ultimatives Ziel? Die Startup-Kultur in Deutschland auf Touren zu
                    bringen, um eine fruchtbare Wirtschaftslandschaft für Gründerinnen und Gründer wie dich zu schaffen.
                    Wir sind hier, um deinen Traum von der Raumfahrt Realität werden zu lassen!
                </p>
                <div style={{
                    position: "relative",
                    minHeight: "500px"
                }}>
                    <Image src={imageConference} alt={"Gruppenbild der BVSR Konferenz 2023 in Stuttgart"} fill={true}
                           style={{
                               objectFit: "cover"
                           }}/>
                </div>

                <h2>
                    Die wichtigsten Infos zum Event am 3.11.2023 in Würzburg
                </h2>
                <p>
                    Am 3. November 2023 öffnen wir die Türen zu einem unvergesslichen Ereignis im Herzen von Würzburg.
                    Hier sind die Eckdaten, die du nicht verpassen darfst, sowie unsere Agenda:
                </p>
                <Grid justify="flex-start" align="stretch">
                    <Grid.Col span={{base: 12, md: 6, lg: 4}}>
                        <ul>
                            <li>
                                <b>Wo:</b> Technologie- und Gründerzentrum Würzburg (TGZ) - Magdalene-Schoch-Straße 5.
                            </li>
                            <li>
                                <b>Was:</b> Erwarte ein mit Spannung geladenes Programm mit Networking-Möglichkeiten,
                                inspirierenden Workshops, fesselnden Vorträgen und einem köstlichen Buffet
                            </li>
                            <li>
                                <b>Wie lange:</b> Der Tag beginnt um 12 Uhr und wird um 18 Uhr enden. Sei bereit für
                                sechs Stunden voller Innovation und Raumfahrt-Expertise!
                            </li>
                        </ul>
                    </Grid.Col>
                    <Grid.Col span={{base: 12, md: 6, lg: 8}}>
                        <div style={{
                            position: "relative",
                            minHeight: "300px"
                        }}>
                            <Image src={imageTgz} alt={"Bild des Zentrum für Telematik Gebäudes"} fill={true}
                                   style={{
                                       objectFit: "cover"
                                   }}/>
                        </div>
                    </Grid.Col>
                </Grid>

                <h2>
                    Agenda
                </h2>
                <Table striped highlightOnHover>
                    <thead>
                    <tr>
                        <th>
                            Zeit
                        </th>
                        <th>
                            Inhalt
                        </th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>
                            12:00 - 12:35 Uhr
                        </td>
                        <td>
                            <h5>Einführungsvorträge</h5>

                            Vorträge zu Liftoff, dem TGZ und den ESA BIC im Bereich der Gründerszene.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            12:35 - 12:55 Uhr
                        </td>
                        <td>
                            <h5>Intro zu den Workshops</h5>

                            Einführung in die Workshopthemen im Bereich Gründung und Berufseinstieg.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            13:00 - 14:30 Uhr
                        </td>
                        <td>
                            <h5>Start der Workshops</h5>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            14:30 - 14:45 Uhr
                        </td>
                        <td>
                            <h5>Pause</h5>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            14:45 - 16:15 Uhr
                        </td>
                        <td>
                            <h5>Workshops</h5>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            16:15 - 16:45 Uhr
                        </td>
                        <td>
                            <h5>Workshop Ergebnisse Vorstellen</h5>

                            Präsentation der Ergebnisse der einzelnen Workshops.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            16:45 - 17:15 Uhr
                        </td>
                        <td>
                            <h5>Founder erzählen, Podiumsdiskussion</h5>

                            Lokale Founder aus dem Bereich Technik und Raumfahrt erzählen und beantworten eure Fragen!
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Ab 17:15 Uhr
                        </td>
                        <td>
                            <h5>Networking & Dinner</h5>

                            Ein lockerer Ausklang und die Möglichkeit, mit Firmen, Inkubatoren und Gründern ins Gespräch
                            zu kommen.
                        </td>
                    </tr>
                    </tbody>
                </Table>

                <p>
                    Die BVSR-Liftoff Veranstaltung am 3. November 2023 bietet nicht nur die Gelegenheit, dich mit
                    Gleichgesinnten zu vernetzen, sondern auch ein spannendes Programm, das dich in die Welt der
                    Raumfahrt-Startups einführt und dir die Werkzeuge für deinen eigenen erfolgreichen Start in dieser
                    aufregenden Branche an die Hand gibt. Wir freuen uns darauf, dich in Würzburg begrüßen zu dürfen, wo
                    die Zukunft der Raumfahrt geschrieben wird!
                </p>

                <h2>
                    Wer wird dabei sein?
                </h2>

                <Grid justify="flex-start" align="stretch">
                    <Grid.Col span={{base: 12, md: 6, lg: 8}}>
                        <div style={{
                            position: "relative",
                            minHeight: "300px"
                        }}>
                            <Image src={imageSpeaker}
                                   alt={"A speaker during the BVSR conference 2023 in Stuttgart"} fill={true}
                                   style={{
                                       objectFit: "cover"
                                   }}/>
                        </div>
                    </Grid.Col>
                    <Grid.Col span={{base: 12, md: 6, lg: 4}}>
                        Die Frage lautet nicht nur &ldquo;Wer wird dabei sein?&rdquo;, sondern &ldquo;Wirst du dabei
                        sein?&rdquo; Du, als angehender Raumfahrtenthusiast oder visionärer Gründer, stehst im
                        Mittelpunkt unserer Veranstaltung. Aber das ist noch nicht alles! Du wirst die Möglichkeit
                        haben, etablierte Akteure und aufstrebende Startups aus der Raumfahrtbranche zu treffen, die
                        bereits den Kosmos erobern. Diese einzigartige Gelegenheit zum Networking wird dir Einblicke und
                        Verbindungen bieten, die deine Raumfahrtträume auf neue Höhen katapultieren können.
                    </Grid.Col>
                </Grid>

                <p>
                    Lasst uns gemeinsam die Zukunft der Raumfahrt in Deutschland gestalten! Hier sind einige
                    inspirierende Impressionen, um deine Vorfreude zu steigern.
                </p>

                <p>
                    Mach dich bereit für BVSR-Liftoff am 3. November 2023 - ein Tag voller Innovation, Inspiration und
                    Raumfahrtträumen! Wir freuen uns darauf, dich in Würzburg zu begrüßen.
                </p>
            </article>
        </Container>
    )
}

export const getStaticProps = async (
    {
        locale,
    }: {
        locale: string
    }) => ({
    props: {
        locale,
        ...
            (
                await serverSideTranslations(
                    locale,
                    [
                        'footer',
                        'navbar'
                    ],
                    nextI18NextConfig,
                    ['en', 'de']
                )
            ),
    }
})
