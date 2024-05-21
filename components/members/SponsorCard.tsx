import Image, { type StaticImageData } from "next/image";

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
  return (
    <div className="space-between flex h-[440px] flex-col p-4 shadow">
      <div className="relative h-[160px]">
        <Image src={img} fill={true} alt={name} className="object-contain" />
      </div>

      <div className="my-4">{name}</div>

      <div className="line-clamp-[8] grow text-sm">{description}</div>
    </div>
  );
}
