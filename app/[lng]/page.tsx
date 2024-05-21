import Sponsors from "../../components/members/Sponsors";
import BVSRTimeline from "../../components/BVSRTimeline";
import HeroContent from "../../components/HeroContent/HeroContent";
import Members from "../../components/members/Members";

export async function generateMetadata({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return {
    title: "Bundesverband studentischer Raumfahrt",
    description:
      lng == "de"
        ? "Der Bundesverband studentischer Raumfahrt (BVSR) repräsentiert deutsche Studentengruppen involviert in Weltraumprojekten auf einem nationalen Level"
        : "The Bundesverband studentischer Raumfahrt (BVSR) represents German student groups involved in space projects on a national level",
  };
}

export default async function LandingPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return (
    <>
      <HeroContent lng={lng} />
      <BVSRTimeline lng={lng} />
      <Members lng={lng} />
      <Sponsors lng={lng} />
    </>
  );
}
