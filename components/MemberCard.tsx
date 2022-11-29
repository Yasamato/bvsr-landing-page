import {Card, Text, Button, Group, useMantineTheme} from '@mantine/core';
import Image, {StaticImageData} from 'next/image'
import Link from "next/link";

interface MemberCardProps {
    img: StaticImageData,
    name: string,
    description: string,
    link: string
}

export default function MemberCard({img, name, description, link}: MemberCardProps) {
    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7]

    return (
        <div style={{margin: 'auto'}}>
            <Card shadow="sm" p="lg" style={{height: 400}}>
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
                        <Group position="apart" style={{marginBottom: 5, marginTop: theme.spacing.sm}}>
                            <Text weight={500}>{name}</Text>
                        </Group>

                        <Text size="sm" style={{color: secondaryColor, lineHeight: 1.5, flexGrow: 1}}>
                            {description}
                        </Text>
                    </div>

                    <Button component={"a"} href={link} target="_blank" variant="light" color="blue" fullWidth
                            style={{
                                marginTop: 14
                            }}>
                        Visit {name}
                    </Button>
                </div>
            </Card>
        </div>
    );
}
