import { Card, Text, Group, useMantineTheme } from "@mantine/core";
import Image, { StaticImageData } from "next/image";

interface SponsorCardProps {
  img: StaticImageData;
  name: string;
  description: string;
}

export default function SponsorCard({
  img,
  name,
  description,
}: SponsorCardProps) {
  const theme = useMantineTheme();

  const secondaryColor = theme.colors.gray[7];

  return (
    <div style={{ margin: "auto" }}>
      <Card shadow="sm" p="lg" style={{ height: 440 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Card.Section p={"sm"}>
            <div
              style={{
                display: "block",
                position: "relative",
                height: 160,
                cursor: "pointer",
              }}
            >
              <Image
                src={img}
                fill={true}
                alt={name}
                style={{ objectFit: "contain" }}
              />
            </div>
          </Card.Section>

          <Group style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
            <Text>{name}</Text>
          </Group>

          <Text
            size="sm"
            style={{ color: secondaryColor, lineHeight: 1.5, flexGrow: 1 }}
            lineClamp={8}
          >
            {description}
          </Text>
        </div>
      </Card>
    </div>
  );
}
