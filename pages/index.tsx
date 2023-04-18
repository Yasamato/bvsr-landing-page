import React from "react"
import {InferGetStaticPropsType} from "next"
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import Homepage from "../components/Homepage"
import nextI18NextConfig from '../next-i18next.config.js'


function Home(_props: InferGetStaticPropsType<typeof getStaticProps>) {
    return (<Homepage/>)
}

export const getStaticProps = async (
    {
        locale,
    }: {
        locale: string
    }) => ({
    props: {
        ...(
            await serverSideTranslations(
                locale,
                [
                    'common',
                    'footer',
                    'members',
                    'navbar'
                ],
                nextI18NextConfig,
                ['en', 'de']
            )
        ),
    },
})
export default Home
