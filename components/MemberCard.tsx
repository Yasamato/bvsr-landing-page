import {Card, Image, Text, Badge, Button, Group, useMantineTheme, Anchor} from '@mantine/core';

interface MemberCardProps {
    img: string,
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
        <div style={{ margin: 'auto'}}>
            <Card shadow="sm" p="lg" style={{height: 413}}>
                <Card.Section p={"sm"}>
                    <Image fit="contain" src={img} height={160} alt={name}/>
                </Card.Section>

                <Group position="apart" style={{marginBottom: 5, marginTop: theme.spacing.sm}}>
                    <Text weight={500}>{name}</Text>
                </Group>

                <Text size="sm" style={{color: secondaryColor, lineHeight: 1.5}}>
                    {description}
                </Text>

                <Anchor href={link} target="_blank" mt={"auto"}>
                    <Button variant="light" color="blue" fullWidth style={{marginTop: 14}}>
                        Visit {name}
                    </Button>
                </Anchor>
            </Card>
        </div>
    );
}
