import Image from "next/image";

// images
import imageConference from "./conference2023.jpg";
import imageSpeaker from "./speaker.jpg";
import imageTgz from "./tgz.jpg";
import {
  Table,
  TableHead,
  TableRow,
  TableHeadCell,
  TableBody,
  TableCell,
} from "flowbite-react";

export const metadata = {
  title: "BVSR Event Liftoff 2023",
};

export default function Liftoff() {
  return (
    <article className="container flex flex-col gap-4 py-8">
      <h1 className="text-4xl">BVSR-Liftoff</h1>

      <h2 className="text-2xl">
        Wer sind wir und was ist das Ziel von BVSR-Liftoff?
      </h2>
      <p>
        Willkommen beim BVSR-Liftoff, der bahnbrechenden Initiative des
        Bundesverbands Studentischer Raumfahrt (BVSR)! Wir sind eine dynamische
        Gruppe von Studierenden aus ganz Deutschland, deren gemeinsame
        Leidenschaft die Raumfahrt ist. Unsere Mission ist es, dich und
        Gleichgesinnte auf das aufregende Abenteuer der Startup-Gründung und den
        nahtlosen Einstieg in die berufliche Welt der Raumfahrt vorzubereiten.
        Unser ultimatives Ziel? Die Startup-Kultur in Deutschland auf Touren zu
        bringen, um eine fruchtbare Wirtschaftslandschaft für Gründerinnen und
        Gründer wie dich zu schaffen. Wir sind hier, um deinen Traum von der
        Raumfahrt Realität werden zu lassen!
      </p>
      <div className="relative">
        <Image
          src={imageConference}
          alt={"Gruppenbild der BVSR Konferenz 2023 in Stuttgart"}
          className="h-auto w-full"
        />
      </div>

      <h2 className="text-2xl">
        Die wichtigsten Infos zum Event am 3.11.2023 in Würzburg
      </h2>
      <p>
        Am 3. November 2023 öffnen wir die Türen zu einem unvergesslichen
        Ereignis im Herzen von Würzburg. Hier sind die Eckdaten, die du nicht
        verpassen darfst, sowie unsere Agenda:
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <ul>
            <li>
              <b>Wo:</b> Technologie- und Gründerzentrum Würzburg (TGZ) -
              Magdalene-Schoch-Straße 5.
            </li>
            <li>
              <b>Was:</b> Erwarte ein mit Spannung geladenes Programm mit
              Networking-Möglichkeiten, inspirierenden Workshops, fesselnden
              Vorträgen und einem köstlichen Buffet
            </li>
            <li>
              <b>Wie lange:</b> Der Tag beginnt um 12 Uhr und wird um 18 Uhr
              enden. Sei bereit für sechs Stunden voller Innovation und
              Raumfahrt-Expertise!
            </li>
          </ul>
        </div>
        <div className="relative lg:col-span-2">
          <Image
            src={imageTgz}
            alt={"Bild des Zentrum für Telematik Gebäudes"}
            className="h-auto w-full"
          />
        </div>
      </div>

      <h2 className="text-2xl">Agenda</h2>
      <Table striped hoverable>
        <TableHead>
          <TableHeadCell>Zeit</TableHeadCell>
          <TableHeadCell>Inhalt</TableHeadCell>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>12:00 - 12:35 Uhr</TableCell>
            <TableCell>
              <h5>Einführungsvorträge</h5>
              Vorträge zu Liftoff, dem TGZ und den ESA BIC im Bereich der
              Gründerszene.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>12:35 - 12:55 Uhr</TableCell>
            <TableCell>
              <h5>Intro zu den Workshops</h5>
              Einführung in die Workshopthemen im Bereich Gründung und
              Berufseinstieg.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>13:00 - 14:30 Uhr</TableCell>
            <TableCell>
              <h5>Start der Workshops</h5>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>14:30 - 14:45 Uhr</TableCell>
            <TableCell>
              <h5>Pause</h5>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>14:45 - 16:15 Uhr</TableCell>
            <TableCell>
              <h5>Workshops</h5>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>16:15 - 16:45 Uhr</TableCell>
            <TableCell>
              <h5>Workshop Ergebnisse Vorstellen</h5>
              Präsentation der Ergebnisse der einzelnen Workshops.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>16:45 - 17:15 Uhr</TableCell>
            <TableCell>
              <h5>Founder erzählen, Podiumsdiskussion</h5>
              Lokale Founder aus dem Bereich Technik und Raumfahrt erzählen und
              beantworten eure Fragen!
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Ab 17:15 Uhr</TableCell>
            <TableCell>
              <h5>Networking & Dinner</h5>
              Ein lockerer Ausklang und die Möglichkeit, mit Firmen, Inkubatoren
              und Gründern ins Gespräch zu kommen.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <p>
        Die BVSR-Liftoff Veranstaltung am 3. November 2023 bietet nicht nur die
        Gelegenheit, dich mit Gleichgesinnten zu vernetzen, sondern auch ein
        spannendes Programm, das dich in die Welt der Raumfahrt-Startups
        einführt und dir die Werkzeuge für deinen eigenen erfolgreichen Start in
        dieser aufregenden Branche an die Hand gibt. Wir freuen uns darauf, dich
        in Würzburg begrüßen zu dürfen, wo die Zukunft der Raumfahrt geschrieben
        wird!
      </p>

      <h2 className="text-2xl">Wer wird dabei sein?</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative">
          <Image
            src={imageSpeaker}
            alt={"A speaker during the BVSR conference 2023 in Stuttgart"}
            className="h-auto w-full"
          />
        </div>
        <div className="lg:col-span-2">
          Die Frage lautet nicht nur &ldquo;Wer wird dabei sein?&rdquo;, sondern
          &ldquo;Wirst du dabei sein?&rdquo; Du, als angehender
          Raumfahrtenthusiast oder visionärer Gründer, stehst im Mittelpunkt
          unserer Veranstaltung. Aber das ist noch nicht alles! Du wirst die
          Möglichkeit haben, etablierte Akteure und aufstrebende Startups aus
          der Raumfahrtbranche zu treffen, die bereits den Kosmos erobern. Diese
          einzigartige Gelegenheit zum Networking wird dir Einblicke und
          Verbindungen bieten, die deine Raumfahrtträume auf neue Höhen
          katapultieren können.
        </div>
      </div>

      <p>
        Lasst uns gemeinsam die Zukunft der Raumfahrt in Deutschland gestalten!
        Hier sind einige inspirierende Impressionen, um deine Vorfreude zu
        steigern.
      </p>

      <p>
        Mach dich bereit für BVSR-Liftoff am 3. November 2023 - ein Tag voller
        Innovation, Inspiration und Raumfahrtträumen! Wir freuen uns darauf,
        dich in Würzburg zu begrüßen.
      </p>
    </article>
  );
}
