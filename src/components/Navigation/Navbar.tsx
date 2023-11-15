'use client'

import Link from "next/link"
import React, {useState} from "react"
import {useRouter, usePathname} from 'next/navigation'
import Image from "next/image"
import logo from "../../../public/square_color_white.png";
import {NavDropdown} from "~/components/Navigation/NavDropdown";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {Dialog} from "@headlessui/react";
import {NavMobileDropdown} from "~/components/Navigation/NavMobileDropdown";

export interface DropdownDataItem {
    name: string,
    description: string,
    href: string
}

export interface DropdownData {
    name: string,
    href: string,
    viewAll?: string,
    dropdown?: DropdownDataItem[]
}

export const Navbar = async ({data, lng}: { data: DropdownData[], lng: string }) => {
    const router = useRouter()
    const pathname = usePathname()

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div>
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <Image src={logo} alt={"BVSR Logo"} className={"h-8 w-auto"}/>
                            <span>BVSR</span>
                        </Link>
                    </div>

                    <NavDropdown data={data}/>
                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                </div>
                <div className={"hidden lg:flex"}>
                    <SegmentedControl
                        color={"blue"}
                        value={lng === "de" ? "de" : "en"}
                        onChange={(newLng) => {
                            console.log("Switching language to:", newLng)
                            pathname.replace(new RegExp("^/" + lng), "/" + newLng)
                            router.push(pathname)
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
            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10"/>
                <Dialog.Panel
                    className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <NavMobileDropdown data={data}/>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
