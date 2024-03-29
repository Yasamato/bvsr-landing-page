import { Alert, Button, Center, Container, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";
import bvsrLogo from "../public/mini_color.svg";
import Link from "next/link";
import Head from "next/head";

export default function error404() {
  return (
    <>
      <Head>
        <title>Page not found | Bundesverband studentischer Raumfahrt</title>
        <meta name="robots" content="noindex,noarchive,follow" />
      </Head>
      <Container>
        <Center>
          <Image height={132} width={240} src={bvsrLogo} alt={"BVSR logo"} />
        </Center>
        <Title style={{ textAlign: "center" }} mb={"xl"}>
          Bundesverband
          <br />
          studentischer Raumfahrt
        </Title>

        <Alert variant={"filled"} color={"red"} my={"xl"}>
          Error 404 | You seem to have visited an unknown page
        </Alert>

        <Center>
          <Link href={"/"}>
            <Button color="green">Go back</Button>
          </Link>
        </Center>
      </Container>
    </>
  );
}
