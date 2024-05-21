import SponsorCard from "./SponsorCard";
import ohbLogo from "./logos/OHB_RGB.jpg";
import { useTranslation } from "../../app/i18n/i18n";

export default async function Sponsors({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng, "sponsors");

  return (
    <div className="container flex flex-col gap-2">
      <h2 className="text-2xl">{t("title")}</h2>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <SponsorCard
          img={ohbLogo}
          name={"OHB Systems AG"}
          description={t("ohb")}
        />
      </div>
    </div>
  );
}
