'use client'

import {Popover, Transition} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import {Fragment} from "react";
import Link from "next/link";
import {DropdownData} from "~/components/Navigation/Header";

export const NavDropdown = ({data}: { data: DropdownData[] }) => {
    return (
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
            {data.map(menu => {
                if (typeof menu.dropdown === "undefined" || menu.dropdown.length < 1) {
                    return (
                        <Link href={menu.href} key={menu.href}
                              className="text-sm font-semibold leading-6 text-gray-900">
                            {menu.name}
                        </Link>
                    )
                }

                return (
                    <Popover className="relative" key={menu.href}>
                        <Popover.Button
                            className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            Product
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true"/>
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel
                                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {menu.dropdown.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex-auto">
                                                <Link href={menu.href + "/" + item.href}
                                                      className="block font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0"/>
                                                </Link>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="divide-x divide-gray-900/5 bg-gray-50">
                                    <a
                                        href={menu.href}
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                    >
                                        {menu.name}
                                    </a>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                )
            })}
        </Popover.Group>
    )
}
