import React from 'react'
import {createStyles, Overlay, Title, Text, Center} from '@mantine/core'
import Image from 'next/image'
import backgroundImage from "../public/background.jpg"
import {WithTranslation, withTranslation} from "next-i18next"

const useStyles = createStyles((theme) => ({
    hero: {
        position: 'relative',
        height: 700,
        padding: `calc(${theme.spacing.xl} * 2)`,
        paddingBottom: `calc(${theme.spacing.xl} * 6)`,

        [theme.fn.smallerThan('sm')]: {
            height: 500,
            paddingBottom: `calc(${theme.spacing.xl} * 3)`,
        },
    },

    title: {
        color: theme.white,
        fontSize: 60,
        fontWeight: 900,
        lineHeight: 1.1,

        [theme.fn.smallerThan('sm')]: {
            fontSize: 40,
            lineHeight: 1.2,
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: 28,
            lineHeight: 1.3,
        },
    },

    description: {
        color: theme.white,
        maxWidth: 600,

        [theme.fn.smallerThan('sm')]: {
            maxWidth: '100%',
            fontSize: theme.fontSizes.sm,
        },
    }
}))

function HeroContent({t}: WithTranslation) {
    const {classes} = useStyles()

    return (
        <div className={classes.hero}>
            <div>
            <Image src={backgroundImage}
                   fill={true}
                   alt={"Background image with stars"}
                   placeholder={"blur"}
                   style={{
                       zIndex: 0,
                       objectFit: "cover"
                   }}
            />
            <Overlay
                gradient="linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 40%)"
                opacity={1}
                zIndex={1}
            />
            </div>

            <Center>
                <Image height={132} width={240}
                       src={"/square-pride.svg"}
                       alt={"BVSR logo"}
                       priority={true}
                       style={{
                           zIndex: 1,
                           objectFit: "cover"
                       }}
                />
            </Center>
            <Title className={classes.title} style={{textAlign: "center", position: "relative", zIndex: 1}}>
                Bundesverband<br/>studentischer Raumfahrt
            </Title>

            <Center>
                <Text className={classes.description} size="xl" mt="xl" style={{textAlign: "center", zIndex: 1}}>
                    {t('hero_label')}
                </Text>
            </Center>
        </div>
    )
}

export default withTranslation('common')(HeroContent)
