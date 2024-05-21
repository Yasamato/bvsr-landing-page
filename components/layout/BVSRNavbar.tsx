import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "../../app/i18n/i18n";
import Language from "./Language";
import bvsrLogo from "../members/logos/BVSR.svg";
import {
  NavbarBrand,
  Dropdown,
  DropdownItem,
  NavbarToggle,
  NavbarCollapse,
  NavbarLink,
  Navbar,
} from "flowbite-react";

export default async function BVSRNavbar({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng, "navbar");

  return (
    <Navbar fluid>
      <div className="flex items-center gap-8">
        <NavbarBrand href="https://bvsr.space">
          <Image
            src={bvsrLogo}
            className="mr-2 h-8 w-16 object-cover"
            alt="BVSR Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            BVSR
          </span>
        </NavbarBrand>
        <NavbarCollapse>
          <div className="relative flex items-center gap-4">
            <Dropdown
              inline
              label={
                <div className="rounded py-2 pl-2">{t("conferences")}</div>
              }
            >
              <DropdownItem
                as={Link}
                href="https://seesat.eu/bvsr_conference_2024/"
              >
                {t("conference.bvsr_2024")}
              </DropdownItem>
              <DropdownItem as={Link} href="/conference/2023">
                {t("conference.bvsr_2023")}
              </DropdownItem>
            </Dropdown>
            <Dropdown
              inline
              label={<div className="rounded py-2 pl-2">{t("events")}</div>}
            >
              <DropdownItem as={Link} href="/event/liftoff">
                {t("event.liftoff")}
              </DropdownItem>
            </Dropdown>
            <NavbarLink
              href="https://links.bvsr.space"
              as={Link}
              className="rounded py-2 pl-2"
            >
              {t("internal_services")}
            </NavbarLink>
          </div>
        </NavbarCollapse>
      </div>
      <div className="flex">
        <Language lng={lng} />
        <NavbarToggle />
      </div>
    </Navbar>
  );
}
