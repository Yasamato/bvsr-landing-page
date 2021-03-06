import React from 'react';
import {createStyles, Overlay, Title, Text, Center} from '@mantine/core';
import Image from 'next/image'
import backgroundImage from "../public/background.jpg"

const useStyles = createStyles((theme) => ({
    hero: {
        position: 'relative',
        height: 700,
        padding: theme.spacing.xl * 2,
        paddingBottom: theme.spacing.xl * 6,

        [theme.fn.smallerThan('sm')]: {
            height: 500,
            paddingBottom: theme.spacing.xl * 3,
        },
    },

    container: {
        height: 700,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingBottom: theme.spacing.xl * 6,
        zIndex: 1,
        position: 'relative',

        [theme.fn.smallerThan('sm')]: {
            height: 500,
            paddingBottom: theme.spacing.xl * 3,
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
    },

    control: {
        marginTop: theme.spacing.xl * 1.5,

        [theme.fn.smallerThan('sm')]: {
            width: '100%',
        },
    },
}));

export function HeroContentLeft() {
    const {classes} = useStyles();

    return (
        <div className={classes.hero}>
            <Image src={backgroundImage} layout={"fill"} objectFit={"cover"} alt={"Background image with stars"} priority={true}/>
            <Overlay
                gradient="linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 40%)"
                opacity={1}
                zIndex={1}
            />

            <Center>
                <Image height={132} width={240} src={"/mini_color.svg"} alt={"BVSR logo"} priority={true}/>
            </Center>
            <Title className={classes.title} style={{textAlign: "center", position: "relative", zIndex: 1}}>
                Bundesverband<br/>studentischer Raumfahrt
            </Title>

            <Center>
                <Text className={classes.description} size="xl" mt="xl" style={{textAlign: "center", zIndex: 1}}>
                    The Bundesverband studentischer Raumfahrt (BVSR) represents German student groups involved in space
                    projects on a national level
                </Text>
            </Center>
        </div>
    );
}
