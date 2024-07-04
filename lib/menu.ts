import { IoLaptopOutline } from "react-icons/io5";
import { TbBrandTypescript, TbBrandNextjs } from "react-icons/tb";

export const menu = [
  {
    label: "Nextjs",
    icon: TbBrandNextjs,
    description: "",
    subMenus: [
      { href: "/routing-1", label: "routing 1" },
      { href: "/routing-2", label: "routing 2" },
    ],
  },
  {
    label: "Landing",
    icon: IoLaptopOutline,
    description: "Contains several landing page models from various types of websites.",
    subMenus: [
      { href: "/porto-1", label: "porto 1" },
      { href: "/porto-2", label: "porto 2" },
    ],
  },
  {
    label: "Typescript",
    icon: TbBrandTypescript,
    description: "deskripsi",
    subMenus: [
      { href: "/ts-1", label: "ts 1" },
      { href: "/ts-2", label: "ts 2" },
    ],
  },
];
