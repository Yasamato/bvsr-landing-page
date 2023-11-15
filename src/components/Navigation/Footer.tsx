import Link from "next/link"
import React from "react"
import {Trans} from 'react-i18next/TransWithoutContext'
import {useTranslation} from "src/i18n"

export const Footer = async ({lng}: { lng: string }) => {
    const {t} = await useTranslation(lng, "footer")

    return (
        <footer className={"bg-white flex flex-row justify-around items-center p-4"}>
            <div>
                <Trans t={t} i18nKey="contact_us">
                    Contact us per <a href={"mailto:vorstand@bvsr.space"}>mail</a>
                </Trans>
            </div>

            <div>
                <Link href={"https://tudsat.space/impressum/"}>
                    {t('legal_notice')}
                </Link>
            </div>
        </footer>
    )
}
