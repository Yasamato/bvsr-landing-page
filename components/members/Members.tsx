import MemberCard from "./MemberCard";

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

import { useTranslation } from "../../app/i18n/i18n";

export default async function Members({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng, "members");
  /*
      <Container mb="xs">
        <Alert title={"Save the date!"} color={"orange"}>
          <Link href={"https://seesat.eu/bvsr_conference_2024/"}>
            {t("save_the_date")}
          </Link>
        </Alert>
      </Container>
     */

  return (
    <div className="container flex flex-col gap-2">
      <h2 className="text-2xl">{t("members")}</h2>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <MemberCard
          img={warrLogo}
          name={"WARR"}
          description={t("warr_desc")}
          link={"https://warr.de"}
          lng={lng}
        />
        <MemberCard
          img={ksatLogo}
          name={"KSat"}
          description={t("ksat_desc")}
          link={"https://www.ksat-stuttgart.de"}
          lng={lng}
        />
        <MemberCard
          img={tudsatLogo}
          name={"TUDSaT"}
          description={t("tudsat_desc")}
          link={"https://tudsat.space"}
          lng={lng}
        />
        <MemberCard
          img={hyendLogo}
          name={"HyEnD"}
          description={t("hyend_desc")}
          link={"https://hyend.de"}
          lng={lng}
        />
        <MemberCard
          img={starLogo}
          name={"STAR Dresden"}
          description={t("star_desc")}
          link={"https://star-dresden.de"}
          lng={lng}
        />
        <MemberCard
          img={seeSatLogo}
          name={"SeeSat"}
          description={t("seesat_desc")}
          link={"https://seesat.eu"}
          lng={lng}
        />
        <MemberCard
          img={wueSpaceLogo}
          name={"WüSpace"}
          description={t("wuespace_desc")}
          link={"https://www.wuespace.de"}
          lng={lng}
        />
        <MemberCard
          img={farLogo}
          name={"FAR"}
          description={t("far_desc")}
          link={"https://alternative-raumfahrt.de"}
          lng={lng}
        />
        <MemberCard
          img={staLogo}
          name={"STA"}
          description={t("sta_desc")}
          link={"https://www.spaceteamaachen.de"}
          lng={lng}
        />
        <MemberCard
          img={erigLogo}
          name={"ERIG"}
          description={t("erig_desc", { ns: "members" })}
          link={"https://er-ig.de/"}
          lng={lng}
        />
        <MemberCard
          img={bearsLogo}
          name={"BEARS"}
          description={t("bears_desc", { ns: "members" })}
          link={
            "https://www.tu.berlin/raumfahrttechnik/studium-lehre/studentische-initiativen/bears"
          }
          lng={lng}
        />
        <MemberCard
          img={auxLogo}
          name={"Auxspace"}
          description={t("aux_desc", { ns: "members" })}
          link={"https://auxspace.de"}
          lng={lng}
        />
        <MemberCard
          img={moonLogo}
          name={"Moon Aixperts"}
          description={t("moon_desc", { ns: "members" })}
          link={"https://www.moonaixperts.de"}
          lng={lng}
        />
      </div>
    </div>
  );
}
