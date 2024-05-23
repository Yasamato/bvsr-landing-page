import Image from "next/image";
import backgroundImage from "./background.jpg";
import bvsrLogo from "../members/logos/BVSR.svg";

export default async function HeroContent({ lng }: { lng: string }) {
  return (
    <div
      className={
        "relative flex min-h-[700px] w-full flex-col items-center bg-cover bg-center bg-no-repeat text-white"
      }
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
      }}
    >
      <div className="container flex flex-col items-center px-8 py-16">
        <Image
          height={132}
          width={240}
          src={bvsrLogo}
          alt={"BVSR Logo"}
          priority={true}
          className="object-cover"
        />
        <h1 className="text-center text-4xl">
          Bundesverband
          <br />
          studentischer Raumfahrt
        </h1>
        <div className={"mt-8 text-center text-2xl"}>
          {lng == "de"
            ? "Der Bundesverband studentischer Raumfahrt (BVSR) repräsentiert deutsche Studentengruppen involviert in Weltraumprojekten auf einem nationalen Level"
            : "The Bundesverband studentischer Raumfahrt (BVSR) represents German student groups involved in space projects on a national level"}
        </div>
      </div>
    </div>
  );
}
