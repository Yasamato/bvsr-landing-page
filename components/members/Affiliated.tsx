import MemberCard, { type MemberInfo } from "./MemberCard";

// member logos
import astgLogo from "./logos/ASTG.png";
import twstLogo from "./logos/TU-Wien-Space-Team.svg";

import { useTranslation } from "../../app/i18n/i18n";

export default async function Affiliated({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng, "affiliated");

  const members: MemberInfo[] = [
    {
      img: astgLogo,
      name: "ASTG",
      desc: "astg_desc",
      link: "https://astg.at",
    },
    {
      img: twstLogo,
      bdDarkImg: true,
      name: "TU Wien Space Team",
      desc: "tu_wien_spaceteam_desc",
      link: "https://spaceteam.at",
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
