import Link from "next/link";
import { useTranslation } from "../../app/i18n/i18n";
import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

export default async function BVSRFooter({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng, "footer");

  return (
    <Footer container>
      <FooterCopyright by="BVSR e. V." year={2024} />
      <FooterLinkGroup>
        <FooterLink as={Link} href={"/" + lng + "/privacy-policy"}>
          {t("privacy_policy")}
        </FooterLink>
        <FooterLink as={Link} href={"/" + lng + "/terms-of-use"}>
          {t("legal_notice")}
        </FooterLink>
        <FooterLink as={Link} href="mailto:vorstand@bvsr.space">
          {t("contact")}
        </FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}
