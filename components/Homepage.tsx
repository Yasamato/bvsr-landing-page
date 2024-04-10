import HeroContentLeft from "./HeroContent/HeroContent";
import MemberCard from "../components/MemberCard";
import {
  Alert,
  Card,
  Container,
  Grid,
  Text,
  Timeline,
  Title,
} from "@mantine/core";
import React from "react";
import { withTranslation, WithTranslation } from "next-i18next";
import Meta from "../components/Meta";
import Link from "next/link";
import SponsorCard from "./SponsorCard";

// member logos
import farLogo from "/public/logos/FAR.jpg";
import wueSpaceLogo from "/public/logos/wue_space.png";
import seeSatLogo from "/public/logos/SeeSat.png";
import starLogo from "/public/logos/STAR.svg";
import hyendLogo from "/public/logos/HyEnd.png";
import tudsatLogo from "/public/logos/TUDSaT.png";
import ksatLogo from "/public/logos/KSat.png";
import warrLogo from "/public/logos/WARR.svg";
import staLogo from "/public/logos/STA.svg";
import erigLogo from "/public/logos/ERIG.png";
import bearsLogo from "/public/logos/BEARS.png";

// sponsor logos
import ohbLogo from "/public/logos/OHB_RGB.jpg";

const Homepage = ({ t }: WithTranslation) => {
  /*
                <Alert title={"Save the date!"} color={"orange"}>
                    <Trans t={t} i18nKey="save_the_date" ns={'common'}>
                        The next <Link href={"/conference/2023"}>BVSR Conference</Link> is going to happen on 18.-21. May 2023 in Stuttgart.
                    </Trans>
                </Alert>
     */

  return (
    <>
      <Meta
        description={t("hero_label")}
        title={"Bundesverband studentischer Raumfahrt"}
      />

      <Container mb="xs">
        <Alert title={"Save the date!"} color={"orange"}>
          <Link href={"https://seesat.eu/bvsr_conference_2024/"}>
            {t("save_the_date")}
          </Link>
        </Alert>
      </Container>
      <HeroContentLeft />

      <Container>
        <Card my={"xl"}>
          <Title order={2} m={"xl"}>
            {t("history")}
          </Title>
          <Timeline
            active={9}
            reverseActive
            bulletSize={24}
            lineWidth={2}
            color={"blue"}
            m={"xl"}
          >
            <Timeline.Item
              title={t("timeline.4th_conference.title")}
              lineVariant={"dashed"}
            >
              <Text color="dimmed" size="sm">
                {t("timeline.4th_conference.text")}
              </Text>
              <Text size="xs" mt={4}>
                2025
              </Text>
            </Timeline.Item>

            <Timeline.Item title={t("timeline.3rd_conference.title")}>
              <Text color="dimmed" size="sm">
                {t("timeline.3rd_conference.text")}
              </Text>
              <Text size="xs" mt={4}>
                16.-19. May 2024
              </Text>
            </Timeline.Item>

            <Timeline.Item title={t("timeline.2nd_conference.title")}>
              <Text color="dimmed" size="sm">
                {t("timeline.2nd_conference.text")}
              </Text>
              <Text size="xs" mt={4}>
                18.-21. May 2023
              </Text>
            </Timeline.Item>

            <Timeline.Item title={t("timeline.join_erig_sta_bears.title")}>
              <Text color="dimmed" size="sm">
                {t("timeline.join_erig_sta_bears.text")}
              </Text>
              <Text size="xs" mt={4}>
                18. May 2023
              </Text>
            </Timeline.Item>

            <Timeline.Item title={t("timeline.1st_conference.title")}>
              <Text color="dimmed" size="sm">
                {t("timeline.1st_conference.text")}
              </Text>
              <Text size="xs" mt={4}>
                16.-19. Jun. 2022
              </Text>
            </Timeline.Item>

            <Timeline.Item title={t("timeline.founding.title")}>
              <Text color="dimmed" size="sm">
                {t("timeline.founding.text")}
              </Text>
              <Text size="xs" mt={4}>
                19. Dec. 2021
              </Text>
            </Timeline.Item>

            <Timeline.Item title={t("timeline.decision_founding.title")}>
              <Text color="dimmed" size="sm">
                {t("timeline.decision_founding.text")}
              </Text>
              <Text size="xs" mt={4}>
                2021
              </Text>
            </Timeline.Item>

            <Timeline.Item title={t("timeline.start_constitution.title")}>
              <Text color="dimmed" size="sm">
                {t("timeline.start_constitution.text")}
              </Text>
              <Text size="xs" mt={4}>
                2020
              </Text>
            </Timeline.Item>

            <Timeline.Item title={t("timeline.deepen_cooperation.title")}>
              <Text color="dimmed" size="sm">
                {t("timeline.deepen_cooperation.text")}
              </Text>
              <Text size="xs" mt={4}>
                2019
              </Text>
            </Timeline.Item>

            <Timeline.Item title={t("timeline.core_ideas.title")}>
              <Text color="dimmed" size="sm">
                {t("timeline.core_ideas.text")}
              </Text>
              <Text size="xs" mt={4}>
                2019
              </Text>
            </Timeline.Item>

            <Timeline.Item title={t("timeline.interested_groups.title")}>
              <Text color="dimmed" size="sm">
                {t("timeline.interested_groups.text")}
              </Text>
              <Text size="xs" mt={4}>
                2019
              </Text>
            </Timeline.Item>

            <Timeline.Item title={t("timeline.first_talks.title")}>
              <Text color="dimmed" size="sm">
                {t("timeline.first_talks.text")}
              </Text>
              <Text size="xs" mt={4}>
                2018
              </Text>
            </Timeline.Item>
          </Timeline>
        </Card>

        <Title order={2}>{t("members", { ns: "members" })}</Title>

        <Grid gutter={"sm"}>
          <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
            <MemberCard
              img={warrLogo}
              name={"WARR"}
              description={t("warr_desc", { ns: "members" })}
              link={"https://warr.de"}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
            <MemberCard
              img={ksatLogo}
              name={"KSat"}
              description={t("ksat_desc", { ns: "members" })}
              link={"https://www.ksat-stuttgart.de"}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
            <MemberCard
              img={tudsatLogo}
              name={"TUDSaT"}
              description={t("tudsat_desc", { ns: "members" })}
              link={"https://tudsat.space"}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
            <MemberCard
              img={hyendLogo}
              name={"HyEnD"}
              description={t("hyend_desc", { ns: "members" })}
              link={"https://hyend.de"}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
            <MemberCard
              img={starLogo}
              name={"STAR Dresden"}
              description={t("star_desc", { ns: "members" })}
              link={"https://star-dresden.de"}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
            <MemberCard
              img={seeSatLogo}
              name={"SeeSat"}
              description={t("seesat_desc", { ns: "members" })}
              link={"https://seesat.eu"}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
            <MemberCard
              img={wueSpaceLogo}
              name={"WüSpace"}
              description={t("wuespace_desc", { ns: "members" })}
              link={"https://www.wuespace.de"}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
            <MemberCard
              img={farLogo}
              name={"FAR"}
              description={t("far_desc", { ns: "members" })}
              link={"https://alternative-raumfahrt.de"}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
            <MemberCard
              img={staLogo}
              name={"STA"}
              description={t("sta_desc", { ns: "members" })}
              link={"https://www.spaceteamaachen.de"}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
            <MemberCard
              img={erigLogo}
              name={"ERIG"}
              description={t("erig_desc", { ns: "members" })}
              link={"https://er-ig.de/"}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
            <MemberCard
              img={bearsLogo}
              name={"BEARS"}
              description={t("bears_desc", { ns: "members" })}
              link={
                "https://www.tu.berlin/raumfahrttechnik/studium-lehre/studentische-initiativen/bears"
              }
            />
          </Grid.Col>
        </Grid>

        <Title mt="xl" order={2}>
          {t("title", { ns: "sponsors" })}
        </Title>

        <Grid gutter={"sm"}>
          <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
            <SponsorCard
              img={ohbLogo}
              name={"OHB Systems AG"}
              description={t("ohb", { ns: "sponsors" })}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};

export default withTranslation(["common", "members", "sponsors"])(Homepage);
