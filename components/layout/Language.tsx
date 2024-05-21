"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "flowbite-react";

export default function Language({ lng }: { lng: string }) {
  const router = useRouter();
  const path = usePathname();

  const switchLng = (newLng: string) => {
    console.log("Switching language to:", newLng);
    const newPath = "/" + newLng + path.substring(3);
    router.push(newPath);
  };

  return (
    <Button.Group>
      <Button
        size={"xs"}
        color={lng == "en" ? "blue" : "gray"}
        onClick={() => switchLng("en")}
      >
        EN
      </Button>
      <Button
        size={"xs"}
        color={lng == "de" ? "blue" : "gray"}
        onClick={() => switchLng("de")}
      >
        DE
      </Button>
    </Button.Group>
  );
}
