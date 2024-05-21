import Image from "next/image";
import backgroundImage from "./background.jpg";
import bvsrLogo from "../members/logos/BVSR.svg";

export default async function HeroContent({ lng }: { lng: string }) {
  return (
    <div
      className={
        "relative h-[700px] bg-cover bg-center bg-no-repeat text-white"
      }
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
      }}
    >
      <div className="flex flex-col items-center px-32 py-16">
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
        <span className={"mt-16 text-center text-2xl"}>
          {lng == "de"
            ? "Der Bundesverband studentischer Raumfahrt (BVSR) repräsentiert deutsche Studentengruppen involviert in Weltraumprojekten auf einem nationalen Level"
            : "The Bundesverband studentischer Raumfahrt (BVSR) represents German student groups involved in space projects on a national level"}
        </span>
      </div>
    </div>
  );
}
