'use client'

import {Card, Text, Button, Group, useMantineTheme} from '@mantine/core'
import Image, {StaticImageData} from 'next/image'
import Link from "next/link"
import {useTranslation} from "src/i18n"

interface MemberCardProps {
    lng: string
    img: StaticImageData,
    name: string,
    description: string,
    link: string
}

export default async function MemberCard({lng, img, name, description, link}: MemberCardProps) {
    const {t} = await useTranslation(lng, "members")
    const theme = useMantineTheme();

    const secondaryColor = theme.colors.gray[7]

    return (
        <div style={{margin: 'auto'}}>
            <Card shadow="sm" p="lg" style={{height: 440}}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    height: "100%"
                }}>
                    <div>
                        <Card.Section p={"sm"}>
                            <Link href={link} target={'_blank'}>
                                <div style={{display: "block", position: "relative", height: 160, cursor: "pointer"}}>
                                    <Image src={img} fill={true} alt={name} style={{objectFit: "contain"}}/>
                                </div>
                            </Link>
                        </Card.Section>
                        <Group style={{marginBottom: 5, marginTop: theme.spacing.sm}}>
                            <Text>{name}</Text>
                        </Group>

                        <Text size="sm" style={{color: secondaryColor, lineHeight: 1.5, flexGrow: 1}} lineClamp={6}>
                            {description}
                        </Text>
                    </div>

                    <Button component={"a"} href={link} target="_blank" variant="light" color="blue" fullWidth
                            style={{
                                marginTop: 14
                            }}>
                        <>
                            {t('visit')} {name}
                        </>
                    </Button>
                </div>
            </Card>
        </div>
    )
}
