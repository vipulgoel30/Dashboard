"use client";

// Core Imports
import Image from "next/image";
import { useState } from "react";

// Third party imports
import clsx from "clsx";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

// User imports
import { BtnBlue, Container, Flex } from "../utils";
import NavigationItem, {
  NavigationItemData,
  NavigationItemsData,
} from "./NavigationItem";

// Sidebar component
export default function Sidebar({ className }: { className: string }) {
  // Handle nav state in mobile view
  const [navState, setNavState] = useState<boolean>(false);
  const toggleNavState = () => setNavState((prevState) => !prevState);

  return (
    <>
      <Container
        as="nav"
        className={clsx("h-fit min-h-full px-4 py-5", className)}
      >
        <Flex className="items-center justify-between px-1 lg:border-b-[1px] lg:border-b-light-grey lg:pb-3">
          {/* Image Container */}
          <div className="relative h-12 w-3/4 max-w-40">
            <Image
              src="/logo.png"
              alt="Techstack"
              fill={true}
              quality={100}
              priority={true}
              className="object-contain"
            />
          </div>
          {/* Menu Icon */}
          <HiOutlineMenuAlt3
            onClick={toggleNavState}
            className="text-4xl text-dark-grey transition-all duration-500 lg:hidden"
          />
        </Flex>

        {/* Navigation Items */}
        <div
          className={clsx(
            "overflow-hidden transition-all duration-500 lg:h-fit",
            navState ? "h-fit" : "h-0",
          )}
        >
          <div className="mt-6 grid grid-cols-[0.1fr_6fr] gap-y-2">
            {NavigationItemsData.map((item: NavigationItemData) => (
              <NavigationItem
                onClickHandler={toggleNavState}
                key={item.link}
                {...item}
              >
                {item.title === "Inbox" && (
                  <div className="rounded-full bg-[#d7f2ff] px-3 py-1 font-semibold text-sky-blue">
                    215
                  </div>
                )}
              </NavigationItem>
            ))}
          </div>

          {/* Upgrade button */}
          <BtnBlue className="mt-4 w-full rounded-md py-[.6rem]">
            Upgrade
          </BtnBlue>
        </div>
      </Container>
    </>
  );
}
