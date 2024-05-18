import { Text, Grid } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { Trans, withTranslation, WithTranslation } from "next-i18next";

const Footer = ({ t }: WithTranslation) => {
  return (
    <footer style={{ backgroundColor: "white" }}>
      <Grid justify={"space-between"} align={"center"} p={4}>
        <Grid.Col span={{ base: 12, sm: 5, md: 4 }}>
          <Text>
            <Trans t={t} i18nKey="contact_us" ns={"footer"}>
              Contact us per <a href={"mailto:vorstand@bvsr.space"}>mail</a>
            </Trans>
          </Text>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 5, md: 4 }}>
          <Text style={{ display: "flex", justifyContent: "end" }}>
            <Link href={"https://tudsat.space/impressum/"}>
              {t("legal_notice", { ns: "footer" })}
            </Link>
          </Text>
        </Grid.Col>
      </Grid>
    </footer>
  );
};

export default withTranslation("footer")(Footer);
