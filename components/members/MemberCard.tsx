import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useTranslation } from "../../app/i18n/i18n";
import { Button } from "flowbite-react";

export interface MemberInfo {
  img: StaticImageData;
  bdDarkImg?: boolean;
  name: string;
  desc: string;
  link?: string;
}

export default async function MemberCard({
  lng,
  img,
  bdDarkImg = false,
  name,
  desc,
  link,
}: {
  lng: string;
} & MemberInfo) {
  const { t } = await useTranslation(lng, "members");

  const image = (
    <div
      className={
        "rounded-lg px-2 py-1 " + (bdDarkImg ? "bg-gray-800" : "bg-white")
      }
    >
      <div className="relative h-[140px]">
        <Image src={img} fill={true} alt={name} className="object-contain" />
      </div>
    </div>
  );

  return (
    <div className="flex h-[410px] flex-col gap-2 rounded-lg bg-[#eee] p-2 shadow dark:bg-gray-800">
      {link ? (
        <Link href={link} target={"_blank"} className="cursor-pointer">
          {image}
        </Link>
      ) : (
        image
      )}

      <div className="mt-2 grow">
        <h3 className="text-2xl">{name}</h3>

        <div className="line-clamp-[6]">{desc}</div>
      </div>

      {link && (
        <Button
          as={Link}
          href={link}
          target="_blank"
          color="blue"
          className="w-full"
        >
          {t("visit")} {name}
        </Button>
      )}
    </div>
  );
}
