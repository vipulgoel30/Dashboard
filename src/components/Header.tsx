"use client";
// Core imports
import React, { useState } from "react";
import Image from "next/image";

// Third party imports
import clsx from "clsx";
import { IoMoonOutline, IoSearchOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa";
import { GoBell, GoMail } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

// User imports
import { Container, Flex, FlexCenter } from "./utils";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "@/store/store";
import { setTheme, themes } from "@/store/theme";

// Element Container - adds padding, gap and border
function ElementsContainer({
  isLast = false,
  children,
}: {
  isLast?: boolean;
  readonly children: React.ReactNode;
}) {
  return (
    <FlexCenter
      className={clsx(
        "gap-5 px-3 sm:gap-6 md:gap-8 md:px-6",
        !isLast && "border-r-2 border-r-light-grey",
      )}
    >
      {children}
    </FlexCenter>
  );
}

// Search Component
function Search({
  inputState,
  toggleInput,
}: {
  inputState: boolean;
  toggleInput: () => void;
}) {
  return (
    <Flex className="w-full items-center gap-3">
      <IoSearchOutline
        className="shrink-0 text-2xl text-dark-grey"
        onClick={toggleInput}
      />
      <input
        type="text"
        placeholder="Search here..."
        className={clsx(
          "w-full font-semibold placeholder:text-lg placeholder:text-[#909aa1] focus:outline-none sm:block",
          inputState ? "block" : "hidden",
        )}
      />
      <RxCross2
        className={clsx(
          "mr-4 text-3xl text-dark-grey sm:hidden",
          inputState ? "block" : "hidden",
        )}
        onClick={toggleInput}
      />
    </Flex>
  );
}

// Theme Toggle Component along with redux setup
function ThemeToggle() {
  const theme: string = useSelector((state: IRootState) => state.theme.theme);
  const dispatch = useDispatch();

  const toggleTheme = () =>
    dispatch(
      setTheme({ theme: theme === themes.light ? themes.dark : themes.light }),
    );

  return (
    <Flex className="items-center gap-4 sm:gap-5">
      <FiSun className="text-xl text-dark-grey" />
      <div
        className="relative h-6 w-9 rounded-3xl bg-[#d6dadd]"
        onClick={toggleTheme}
      >
        <span
          className={clsx(
            "absolute top-1/2 aspect-square h-7 -translate-y-1/2 rounded-full border-2 border-white bg-sky-blue transition-all duration-300",
            theme === themes.light
              ? "left-0 -translate-x-1/2"
              : "right-0 translate-x-1/2",
          )}
        />
      </div>
      <IoMoonOutline className="text-xl text-dark-grey" />
    </Flex>
  );
}

// Notification Component
function Notification({ notifications }: { notifications: number }) {
  return (
    <div className="relative">
      <GoBell className="text-2xl text-dark-grey"></GoBell>
      <FlexCenter className="absolute left-[90%] top-0 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-blue text-[.6rem] font-medium text-white">
        {notifications}
      </FlexCenter>
    </div>
  );
}

// User Profile Component
function UserProfile() {
  return (
    <Flex className="items-center rounded-full bg-[#fafafa] p-2">
      <div className="relative aspect-square h-10">
        <Image
          src="/user.jpg"
          alt="Mahfuzul Nabil"
          className="rounded-full"
          fill={true}
        />
      </div>
      <h3 className="ml-3 hidden text-nowrap text-sm font-semibold text-[#1b212d] md:block">
        Mahfuzul Nabil
      </h3>
      <FaCaretDown className="ml-4 text-xl text-[#1b212d]" />
    </Flex>
  );
}

export default function Header() {
  const [inputState, setInputState] = useState<boolean>(false);
  const toggleInput = () => setInputState((prevState) => !prevState);

  return (
    <Container
      as="header"
      className="flex h-[90px] justify-between gap-4 py-4 pl-5 pr-2"
    >
      {/* Search Element */}
      <Search toggleInput={toggleInput} inputState={inputState} />
      <Flex className={clsx("sm:flex", inputState ? "hidden" : "flex")}>
        {/* Theme Toggle */}
        <ElementsContainer>
          <ThemeToggle />
        </ElementsContainer>

        {/* Notification and message Icon */}
        <ElementsContainer>
          <Notification notifications={1} />
          <GoMail className="text-2xl text-dark-grey" />
        </ElementsContainer>

        {/* User Profile */}
        <ElementsContainer isLast={true}>
          <UserProfile />
        </ElementsContainer>
      </Flex>
    </Container>
  );
}
