import MemberCard, { type MemberInfo } from "./MemberCard";

// member logos
import ohbLogo from "./logos/OHB.jpg";

import { useTranslation } from "../../app/i18n/i18n";

export default async function Sponsors({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng, "sponsors");

  const members: MemberInfo[] = [
    {
      img: ohbLogo,
      name: "OHB Systems AG",
      desc: "ohb_desc",
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
