import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import Link from "next/link";

export async function generateMetadata({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return {
    title: lng == "de" ? "BVSR Conference 2023" : "BVSR Konferenz 2023",
  };
}

export default function Conference2023({
  params: { lng },
}: {
  params: { lng: string };
}) {
  if (lng == "en") {
    return (
      <article className="container flex flex-col gap-4 py-8">
        <h1 className="text-4xl">Conference Teaser 2023</h1>

        <p>
          From Thursday, the 18th of May until Sunday, 21st of May 2023 the
          German National Student Space Flight Society (BVSR) will be hosting
          their second annual conference at the University of Stuttgart,
          Germany. The main objectives of the event will be connecting the many
          student space flight groups throughout Germany and increasing their
          visibility within the member groups on one hand and connecting them to
          important actors from the space sector on the other. Various keynotes
          and workshops will be giving the participants an insight into working
          environments and provide them opportunities for developing their own
          career plans through more experienced past members.
        </p>
        <p>
          The conference held by the BVSR is to provide knowledge transfer and
          development on the association’s internal methods. Additionally, the
          externally organized workshops will give supporters the opportunity of
          getting in touch with the students and communicating their issues.
        </p>
        <p>
          This year, the focus will be placed on the ever growing new-space
          sector and the start-up and founders scene. We are happy to announce
          not just a workshop by ESA Business Incubation Center Reutlingen
          addressing the first steps of founding for interested students and
          potential founders, but furthermore a talk from Airbus Ventures. At
          our start-up event students will have the possibility to get in touch
          with companies such as the ESA BIC start-up Sat:io.
        </p>
        <p>
          Content wise the conference offers various fields; further talks will
          be given by the Education Office of the European Space Agency (ESA) or
          Rocketfactory Augsburg. Furthermore, we will feature a keynote by the
          Institute of Space Systems from the University of Stuttgart.
        </p>
        <p>
          The workshops offered are held by ESA BIC Reutlingen, the University
          of Stuttgart or various partners from the space industry. However, the
          conference will feature a workshop by former members, who will talk on
          their experience in the working environment. The Institute for
          Aircraft Design at the University of Stuttgart will be offering a
          workshop on automated satellite system design using AI-supported
          technologies. Lastly, we are happy to see a workshop by TESAT.
        </p>
        <p>
          Besides the above-mentioned points, there will be an opportunity to
          learn more about the BVSR member groups and their activities.
        </p>
        <p>
          We are open for further workshops, if your company would be interested
          in offering one of these, please get in touch.
        </p>
        <p>
          Our conference is open to interested people, specifically from the
          German and European space flight sector. At this point it is to
          mention that the conference is still searching for support both on the
          financial and the content side. We would be happy to see our existing
          workshop offers expanded into fields, that could give the students
          valuable insights to the space sector and its procedures. By this, we
          not only hope to introduce the students to a realistic environment,
          but also connecting the participants with industry or research
          partners. If your company would be interested in supporting this,
          please get in touch with us.
        </p>

        <h2 className="text-2xl">Program</h2>
        <Link href={"/conference/BVSR_2023_Timeline_v2.pdf"}>
          View the poster of the timeline
        </Link>

        <h5>Thursday, 18th May 2023</h5>
        <Table striped hoverable>
          <TableHead>
            <TableHeadCell>Time</TableHeadCell>
            <TableHeadCell>Content</TableHeadCell>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>9:00AM – 13:00PM</TableCell>
              <TableCell>Annual general meeting (JHV)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2:00PM – 4:00PM</TableCell>
              <TableCell>Official greeting by Ms. Anna Christmann</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4:00PM – 4:30PM</TableCell>
              <TableCell>Coffee</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5:00PM – 7:30PM</TableCell>
              <TableCell>
                Club presentation & Welcoming of new members
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>7:30PM – 8:00PM</TableCell>
              <TableCell>Transit to City Center</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>8:00PM - ...</TableCell>
              <TableCell>Dinner at Brauhaus Stuttgart</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <h5>Friday, 19th May 2023</h5>
        <Table striped hoverable>
          <TableHead>
            <TableHeadCell>Time</TableHeadCell>
            <TableHeadCell>Content</TableHeadCell>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>8:00AM – 8:30AM</TableCell>
              <TableCell>IRS opens: Snacks</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>8:30AM – 10:00AM</TableCell>
              <TableCell>
                Keynote Institute of Space System, University of Stuttgart
                <br />
                Keynote Tesat
                <br />
                Keynote Edgar Milic, CEO LuxSpace
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>10:00AM – 10:30AM</TableCell>
              <TableCell>Coffee</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>10:30AM – 12:00PM</TableCell>
              <TableCell>
                Keynote Andreas Stamminger, OHB
                <br />
                Keynote ESA Education
                <br />
                Keynote Claas Carsten Kohl, Partner Airbus Ventures
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>12:00PM – 12:30PM</TableCell>
              <TableCell>Coffee</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>12:30PM – 2:00PM</TableCell>
              <TableCell>&quot;Space Up&quot;</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2:00PM – 3:00PM</TableCell>
              <TableCell>Lunch & Coffee</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3:00PM – 4:30PM</TableCell>
              <TableCell>Campus Tour</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4:30PM – 5:30PM</TableCell>
              <TableCell>Campus Tour</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5:30PM – 7:00PM</TableCell>
              <TableCell>Astronaut’s event</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>7:00PM – ...</TableCell>
              <TableCell>Free time</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <h5>Saturday, 20st May 2023</h5>
        <Table striped hoverable>
          <TableHead>
            <TableHeadCell>Time</TableHeadCell>
            <TableHeadCell>Content</TableHeadCell>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>8:00AM – 8:30AM</TableCell>
              <TableCell>IRS opens: Snacks</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>9:00AM – 12:00PM</TableCell>
              <TableCell>Workshop</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>12:00PM – 2:00PM</TableCell>
              <TableCell>Lunch & Coffee</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2:00PM – 4:30PM</TableCell>
              <TableCell>
                Workshop
                <br />
                Presentation on final results
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4:30PM – 5:30PM</TableCell>
              <TableCell>Coffee</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5:30PM – 7:00PM</TableCell>
              <TableCell>Workshop</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>7:00PM – ...</TableCell>
              <TableCell>Barbecue</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <h5>Sunday, 21st May 2023</h5>
        <Table striped hoverable>
          <TableHead>
            <TableHeadCell>Time</TableHeadCell>
            <TableHeadCell>Content</TableHeadCell>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>8:00AM – 9:30AM</TableCell>
              <TableCell>IRS opens: Snacks</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>9:30AM – 12:00AM</TableCell>
              <TableCell>Start-up introduction event</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>12:00PM – ...</TableCell>
              <TableCell>
                Conference recap
                <br />
                Feedback round & Coffee
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </article>
    );
  }

  return (
    <article className="container flex flex-col gap-4 py-8">
      <h1 className="text-4xl">Ausblick Konferenz 2023</h1>

      <p>
        Von Donnerstag, dem 18.05. bis Sonntag, den 21.05.2023, findet auf dem
        Gelände der Universität Stuttgart zum zweiten Mal die jährliche
        Konferenz des Bundesverbands studentischer Raumfahrt (BVSR) statt. Ziel
        der Konferenz ist zum einen, die verschiedenen Mitgliedsvereine aus der
        gesamten Bundesrepublik im persönlichen Austausch einander näher zu
        bringen und damit auch die Sichtbarkeit des neugegründeten Verbands in
        den einzelnen Mitgliedsvereinen zu stärken. Den anderen Kern der
        Konferenz stellt die Verbindung der einzelnen Vereine und Mitglieder mit
        verschiedensten Akteurinnen und Akteure der Raumfahrt dar. Verschiedene
        thematische Vorträge und Workshops sollen den Teilnehmenden der
        Konferenz ein Verständnis für die Arbeit in verschiedenen Bereichen der
        Raumfahrttechnik liefern und ihnen durch den Kontakt mit gestandenen
        Mitgliedern der deutschen und europäischen Raumfahrtindustrie
        ermöglichen, auch eigene Karrierepläne weiterzuentwickeln.
      </p>
      <p>
        Das vom BVSR organisierte Workshopangebot auf der Konferenz dient dem
        Informations- und Wissenstransfer sowie der Weiterentwicklung
        verwendeter Arbeitsmethoden innerhalb des Vereins. Gleichzeitig dient
        das extern organisierte Workshop Angebot auf der Konferenz, Förderern
        die Möglichkeit, mit den Studierenden des BVSR in Kontakt zu kommen und
        eigene Themen weiterzutragen.
      </p>
      <p>
        In diesem Jahr fällt der fachliche Schwerpunkt der Konferenz auf die
        stetig wachsende New-Space-Industrie sowie die Start-Up- und
        Gründendenszene. So freuen wir uns nicht nur, einen Workshop des ESA
        Business Incubation Center Reutlingen anbieten zu dürfen, in welchem die
        ersten Schritte der Selbstgründung an interessierte Studierende und
        potenzielle Gründende getragen werden sollen, sondern auch über einen
        Vortrag von Airbus Ventures. Auf einem Start-Up-Event haben die
        Studierenden die Möglichkeit, in den direkten Austausch mit Start-Ups
        wie unter anderem dem ESA BIC Start-Up Sat:io zu kommen.
      </p>
      <p>
        Das fachliche Angebot der Konferenz ist weit gefächert. Wir freuen uns,
        einen Vortrag des Education Offices der Europäischen Raumfahrtbehörde
        ESA anbieten zu dürfen. Mit einem Vertreter von Rocketfactory Augsburg
        dürfen wir einen weiteren Vortragenden begrüßen.
      </p>
      <p>
        Weiterhin wird es auch einen Vortrag durch das Stuttgarter Institut für
        Raumfahrtsysteme geben.
      </p>
      <p>
        Das Workshop-Angebot der Konferenz besteht, neben dem Workshop des ESA
        BIs Reutlingen, aus verschiedenen Workshops der Universität Stuttgart
        und aus der Industrie. So wird der BVSR selbst einen Workshop anbieten,
        auf welchem ehemalige studentische Mitglieder ihre Erfahrungen aus der
        Berufswelt mitteile. Das Institut für Flugzeugbau der Universität
        Stuttgart wird einen Workshop über automatische Satellitenauslegung
        durch KI-gestützte Systeme anbieten. Zudem freuen wir uns auf einen
        Workshop des Backnanger Unternehmens TESAT.
      </p>
      <p>
        Letztlich wird es ebenfalls die Möglichkeit geben, genaueres über die
        einzelnen Mitgliedsvereine im BVSR und deren Aktivitäten zu erfahren.
      </p>
      <p>
        Für weitere Workshops sind wir gerne offen, sollte Sie bzw. Ihr
        Unternehmen Interesse haben, einen solchen anzubieten, kontaktieren Sie
        uns gerne.
      </p>
      <p>
        Offen ist unsere Konferenz für interessierte Personen, insbesondere
        natürlich aus der deutschen und europäischen Raumfahrtbranche. Hierbei
        ist zu erwähnen, dass die Konferenz sowohl auf finanzieller sowie auf
        inhaltlicher Seite noch Unterstützung sucht. Wir würden uns darüber
        freuen, unser bisheriges Workshop Angebot gezielt um Themen zu
        erweitern, welche den teilnehmenden Studierenden auf der Konferenz
        verschiedene Prozessabläufe, Technologien und Arbeitsmethoden aus der
        Raumfahrt näherbringen. Wir erhoffen uns dadurch, den Teilnehmenden auf
        der Konferenz einen tieferen Einblick in die Abläufe der
        Raumfahrtbranche zu verleihen und gleichzeitig den bisherigen Kontakt
        und bisherige Projekt-Kooperationen einzelner Mitgliedsvereine des BVSR
        mit verschiedenen Akteurinnen und Akteure aus der Industrie zu fördern
        und in Zukunft ausbauen zu können. Sollte Ihr Unternehmen Interesse an
        einer Unterstützung haben, kontaktieren Sie uns gerne.
      </p>

      <h2 className="text-2xl">Program</h2>
      <Link href={"/assets/conference/BVSR_2023_Timeline_v2.pdf"}>
        Siehe dir das Poster zum Zeitablauf an
      </Link>

      <h5>Donnerstag, 18. Mai 2023</h5>
      <Table striped hoverable>
        <TableHead>
          <TableHeadCell>Zeit</TableHeadCell>
          <TableHeadCell>Inhalt</TableHeadCell>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>9:00 – 13:00 Uhr</TableCell>
            <TableCell>Jahreshauptversammlung</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>14:00 – 16:00 Uhr</TableCell>
            <TableCell>
              Offizielle Begrüßung durch Fr. Anna Christmann
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>16:00 – 16:30 Uhr</TableCell>
            <TableCell>Kaffee</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>17:00 – 19:30 Uhr</TableCell>
            <TableCell>
              Vorstellung der Vereine & Begrüßung neuer Mitglieder
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>19:30 – 20:00 Uhr</TableCell>
            <TableCell>
              Vorstellung der Vereine & Begrüßung neuer Mitglieder
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>20:00 - ... Uhr</TableCell>
            <TableCell>Gemeinsames Abendessen</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <h5>Freitag, 19. Mai 2023</h5>
      <Table striped hoverable>
        <TableHead>
          <TableHeadCell>Zeit</TableHeadCell>
          <TableHeadCell>Inhalt</TableHeadCell>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>8:00 - 8:30 Uhr</TableCell>
            <TableCell>IRS opens: Snacks</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>8:30 - 10:00 Uhr</TableCell>
            <TableCell>
              Keynote Institut für Raumfahrtsysteme, Universität Stuttgart
              <br />
              Keynote Tesat
              <br />
              Keynote Edgar Milic, CEO LuxSpace
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>10:00 - 10:30 Uhr</TableCell>
            <TableCell>Kaffee</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>10:30 - 12:00 Uhr</TableCell>
            <TableCell>
              Keynote Andreas Stamminger, OHB
              <br />
              Keynote ESA Education
              <br />
              Keynote Claas Carsten Kohl, Partner Airbus Ventures
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>12:00 - 12:30 Uhr</TableCell>
            <TableCell>Kaffee</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>12:30 - 14:00 Uhr</TableCell>
            <TableCell>&ldquo;Space Up&rdquo;</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>14:00 - 15:00 Uhr</TableCell>
            <TableCell>Mittagessen & Kaffee</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>15:00 - 16:30 Uhr</TableCell>
            <TableCell>Campus Führung</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>16:30 - 17:30 Uhr</TableCell>
            <TableCell>Transit</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>17:30 - 19:00 Uhr</TableCell>
            <TableCell>Astronautenevent</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>19:00 - ... Uhr</TableCell>
            <TableCell>Freizeit</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <h5>Samstag, 20. Mai 2023</h5>
      <Table striped hoverable>
        <TableHead>
          <TableHeadCell>Zeit</TableHeadCell>
          <TableHeadCell>Inhalt</TableHeadCell>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>8:00 - 8:30 Uhr</TableCell>
            <TableCell>IRS opens: Snacks</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>9:00 – 12:00 Uhr</TableCell>
            <TableCell>Workshop</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>12:00 – 14:00 Uhr</TableCell>
            <TableCell>Mittagessen & Kaffee</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>14:00 – 16:30 Uhr</TableCell>
            <TableCell>
              Workshop
              <br />
              Präsentation der finalen Ergebnisse
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>16:30 - 17:30 Uhr</TableCell>
            <TableCell>Kaffee</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>17:30 - 19:00 Uhr</TableCell>
            <TableCell>Workshop</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>19:00 - ... Uhr</TableCell>
            <TableCell>Gemeinsames Grillen</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <h5>Sonntag, 21. Mai 2023</h5>
      <Table striped hoverable>
        <TableHead>
          <TableHeadCell>Zeit</TableHeadCell>
          <TableHeadCell>Inhalt</TableHeadCell>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>8:00 - 9:30 Uhr</TableCell>
            <TableCell>IRS opens: Snacks</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>9:30-12:00 Uhr</TableCell>
            <TableCell>Start-Up Vorstellungsevent</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>12:00 - ... Uhr</TableCell>
            <TableCell>
              Abschlussrunde der Konferenz
              <br />
              Feedbackrunde & Kaffee
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </article>
  );
}
