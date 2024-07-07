// Core imports
import Link from "next/link";

// Third party imports
import clsx from "clsx";
import { IconType } from "react-icons";
import { IoFlagOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { LuSettings } from "react-icons/lu";
import { RiHomeLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { HiOutlineStar } from "react-icons/hi";
import { LuUsers2 } from "react-icons/lu";

// User imports
import { Flex } from "../utils";

// Type for Navigation item data
export type NavigationItemData = {
  Icon: IconType;
  title: string;
  link: string;
};

// Navigation Items Data
export const NavigationItemsData: NavigationItemData[] = [
  {
    Icon: RiHomeLine,
    title: "Dashboard",
    link: "/",
  },
  {
    Icon: IoFlagOutline,
    title: "Campaigns",
    link: "/campaigns",
  },
  {
    Icon: IoChatbubbleEllipsesOutline,
    title: "Inbox",
    link: "/inbox",
  },
  {
    Icon: HiOutlineStar,
    title: "Leads",
    link: "/leads",
  },
  {
    Icon: LuUsers2,
    title: "Team",
    link: "/team",
  },
  {
    Icon: LuSettings,
    title: "Setting",
    link: "/setting",
  },
];

// Component Navigation Item
export default function NavigationItem({
  Icon,
  title,
  link,
  children,
  onClickHandler,
}: NavigationItemData & {
  children: React.ReactNode;
  onClickHandler: () => void;
}) {
  const pathname: string = usePathname();

  return (
    <Link
      scroll={false}
      onClick={onClickHandler}
      href={link}
      className={clsx(
        "col-span-2 grid grid-cols-subgrid items-center gap-x-3 rounded-lg p-[.6rem] text-dark-grey transition-all duration-200 ease-out",
        pathname === link && "bg-[#fcd971]",
      )}
    >
      <Icon className="text-2xl" />
      <Flex className="items-center justify-between">
        <span className="text-lg font-medium">{title}</span>
        {children}
      </Flex>
    </Link>
  );
}
