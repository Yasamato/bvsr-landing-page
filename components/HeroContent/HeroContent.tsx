import React from "react";
import { Overlay, Title, Text, Center } from "@mantine/core";
import Image from "next/image";
import backgroundImage from "./background.jpg";
import { WithTranslation, withTranslation } from "next-i18next";
import classes from "./HeroContent.module.css";

function HeroContent({ t }: WithTranslation) {
  return (
    <div className={classes.hero}>
      <div>
        <Image
          src={backgroundImage}
          fill={true}
          alt={"Background image with stars"}
          placeholder={"blur"}
          style={{
            zIndex: 0,
            objectFit: "cover",
          }}
        />
        <Overlay
          gradient="linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 40%)"
          opacity={1}
          zIndex={1}
        />
      </div>

      <Center>
        <Image
          height={132}
          width={240}
          src={"/mini_color.svg"}
          alt={"BVSR logo"}
          priority={true}
          style={{
            zIndex: 1,
            objectFit: "cover",
          }}
        />
      </Center>
      <Title
        className={classes.title}
        style={{ textAlign: "center", position: "relative", zIndex: 1 }}
      >
        Bundesverband
        <br />
        studentischer Raumfahrt
      </Title>

      <Center>
        <Text
          className={classes.description}
          size="xl"
          mt="xl"
          style={{ textAlign: "center", zIndex: 1 }}
        >
          {t("hero_label")}
        </Text>
      </Center>
    </div>
  );
}

export default withTranslation("common")(HeroContent);
