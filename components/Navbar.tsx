import {
    Header,
    SegmentedControl,
    rem,
    createStyles,
    Group, Menu, Center
} from "@mantine/core"
import Link from "next/link"
import React from "react"
import {WithTranslation, withTranslation} from "next-i18next"
import {IconChevronDown} from '@tabler/icons-react'
import {useRouter} from "next/router"
import Image from "next/image"

const useStyles = createStyles((theme) => ({
    inner: {
        height: rem(56),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title: {
        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
        color: 'inherit',
        textDecoration: 'none'
    },

    anchor: {
        textDecoration: "none",
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        '&:hover': {
            textDecoration: "none",
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },

    linkLabel: {
        marginRight: rem(5),
    },
}))

const Navbar = ({t}: WithTranslation) => {
    const {classes} = useStyles()
    const router = useRouter()

    return (
        <Header height={56} px={10}>
            <div className={classes.inner}>
                <div className={classes.inner}>
                    <Link href={"/"} className={classes.link}>
                        <Image height={32} width={64}
                               src={"/mini_color.svg"}
                               alt={"BVSR logo"}
                               priority={true}
                               style={{
                                   zIndex: 1,
                                   objectFit: "cover"
                               }}
                        />
                        <span className={classes.title}>
                                BVSR
                            </span>
                    </Link>

                    <Group spacing={5} ml={3}>
                        <Menu trigger="hover" transitionProps={{exitDuration: 0}} withinPortal>
                            <Menu.Target>
                                <a
                                    className={classes.link}
                                    onClick={(event) => event.preventDefault()}
                                >
                                    <Center>
                                            <span className={classes.linkLabel}>
                                                {t('conferences', {ns: 'navbar'})}
                                            </span>
                                        <IconChevronDown size="0.9rem" stroke={1.5}/>
                                    </Center>
                                </a>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Item>
                                    <Link href={"/conference/2023"} className={classes.anchor}>
                                        {t('conference.bvsr_2023', {ns: 'navbar'})}
                                    </Link>
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    </Group>
                </div>

                <SegmentedControl
                    color={"blue"}
                    value={router.locale === "de" ? "de" : "en"}
                    onChange={(newValue) => {
                        const {pathname, asPath, query} = router
                        console.log("Switching language to:", newValue)
                        router.push({pathname, query}, asPath, {locale: newValue})
                            .then((r) => {
                                console.log("Successfully switched to", newValue, r)
                            })
                    }}
                    data={[
                        {
                            value: "en",
                            label: "EN"
                        },
                        {
                            value: "de",
                            label: "DE"
                        }
                    ]}/>
            </div>
        </Header>
    )
}

export default withTranslation('navbar')(Navbar)
