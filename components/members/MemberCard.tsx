import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useTranslation } from "../../app/i18n/i18n";
import { Button } from "flowbite-react";

interface MemberCardProps {
  lng: string;
  img: StaticImageData;
  name: string;
  description: string;
  link: string;
}

export default async function MemberCard({
  lng,
  img,
  name,
  description,
  link,
}: MemberCardProps) {
  const { t } = await useTranslation(lng, "members");

  return (
    <div className="space-between flex h-[440px] flex-col p-4 shadow">
      <Link href={link} target={"_blank"}>
        <div className="relative h-[160px] cursor-pointer">
          <Image src={img} fill={true} alt={name} className="object-contain" />
        </div>
      </Link>

      <div className="my-4">{name}</div>

      <div className="line-clamp-[8] grow text-sm">{description}</div>

      <Button
        as={Link}
        href={link}
        target="_blank"
        color="blue"
        className="mt-8 w-full"
      >
        {t("visit")} {name}
      </Button>
    </div>
  );
}
