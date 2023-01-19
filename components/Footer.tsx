import {Container, Text, Footer as MantineFooter} from "@mantine/core"
import Link from "next/link"
import React from "react"
import {Trans, useTranslation} from "next-i18next"

export default function Footer() {
    const {t} = useTranslation('footer')

    return (
        <MantineFooter height={40} p={"xs"}>
            <Container style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <Text>
                    <Trans t={t} i18nKey="contact_us">
                        Contact us per <a href={"mailto:bvsr@lucas-krempel.de"}>mail</a>
                    </Trans>
                </Text>
                <Link href={"https://tudsat.space/impressum/"}>
                    {t('legal_notice')}
                </Link>
            </Container>
        </MantineFooter>
    )
}
