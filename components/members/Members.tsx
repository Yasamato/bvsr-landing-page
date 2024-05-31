import MemberCard, { type MemberInfo } from "./MemberCard";

// member logos
import farLogo from "./logos/FAR.jpg";
import wueSpaceLogo from "./logos/wue_space.png";
import seeSatLogo from "./logos/SeeSat.png";
import starLogo from "./logos/STAR.svg";
import hyendLogo from "./logos/HyEnd.png";
import tudsatLogo from "./logos/TUDSaT.png";
import ksatLogo from "./logos/KSat.png";
import warrLogo from "./logos/WARR.svg";
import staLogo from "./logos/STA.svg";
import erigLogo from "./logos/ERIG.png";
import bearsLogo from "./logos/BEARS.png";
import auxLogo from "./logos/AUX.png";
import moonLogo from "./logos/Moon.png";
import sprogLogo from "./logos/SPROG.svg";

import { useTranslation } from "../../app/i18n/i18n";

export default async function Members({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng, "members");

  const members: MemberInfo[] = [
    {
      img: warrLogo,
      name: "WARR",
      desc: "warr_desc",
      link: "https://warr.de",
    },
    {
      img: ksatLogo,
      name: "KSat",
      desc: "ksat_desc",
      link: "https://www.ksat-stuttgart.de",
    },
    {
      img: tudsatLogo,
      name: "TUDSaT",
      desc: "tudsat_desc",
      link: "https://tudsat.space",
    },
    {
      img: hyendLogo,
      name: "HyEnD",
      desc: "hyend_desc",
      link: "https://hyend.de",
    },
    {
      img: starLogo,
      name: "STAR Dresden",
      desc: "star_desc",
      link: "https://star-dresden.de",
    },
    {
      img: seeSatLogo,
      name: "SeeSat",
      desc: "seesat_desc",
      link: "https://seesat.eu",
    },
    {
      img: wueSpaceLogo,
      name: "WüSpace",
      desc: "wuespace_desc",
      link: "https://www.wuespace.de",
    },
    {
      img: farLogo,
      name: "FAR",
      desc: "far_desc",
      link: "https://alternative-raumfahrt.de",
    },
    {
      img: staLogo,
      name: "STA",
      desc: "sta_desc",
      link: "https://www.spaceteamaachen.de",
    },
    {
      img: erigLogo,
      name: "ERIG",
      desc: "erig_desc",
      link: "https://er-ig.de",
    },
    {
      img: bearsLogo,
      name: "BEARS",
      desc: "bears_desc",
      link: "https://www.tu.berlin/raumfahrttechnik/studium-lehre/studentische-initiativen/bears",
    },
    {
      img: sprogLogo,
      name: "SPROG",
      desc: "sprog_desc",
      link: "https://spaceflight-rocketry-giessen.de",
    },
    {
      img: auxLogo,
      name: "Auxspace",
      desc: "aux_desc",
      link: "https://auxspace.de",
    },
    {
      img: moonLogo,
      name: "Moon Aixperts",
      desc: "moon_desc",
      link: "https://www.moonaixperts.de",
    },
  ];

  return (
    <div className="container flex flex-col gap-2 px-4">
      <h2 className="text-2xl">{t("title")}</h2>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <MemberCard
            key={member.name}
            img={member.img}
            bdDarkImg={member.bdDarkImg}
            name={member.name}
            desc={t(member.desc)}
            link={member.link}
            lng={lng}
          />
        ))}
      </div>
    </div>
  );
}
