import {
    AppShell,
    SegmentedControl,
    Group, Menu, Center
} from "@mantine/core"
import Link from "next/link"
import React from "react"
import {WithTranslation, withTranslation} from "next-i18next"
import {IconChevronDown} from '@tabler/icons-react'
import {useRouter} from "next/router"
import Image from "next/image"
import classes from "./Navbar.module.css"

const Navbar = ({t}: WithTranslation) => {
    const router = useRouter()

    return (
        <AppShell.Header px={10}>
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

                    <Menu trigger="hover" transitionProps={{exitDuration: 0}} withinPortal>
                        <Menu.Target>
                            <a
                                className={classes.link}
                                onClick={(event) => event.preventDefault()}
                            >
                                <Center>
                                        <span className={classes.linkLabel}>
                                            {t('events', {ns: 'navbar'})}
                                        </span>
                                    <IconChevronDown size="0.9rem" stroke={1.5}/>
                                </Center>
                            </a>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item>
                                <Link href={"/event/liftoff"} className={classes.anchor}>
                                    {t('event.liftoff', {ns: 'navbar'})}
                                </Link>
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
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
        </AppShell.Header>
    )
}

export default withTranslation('navbar')(Navbar)
