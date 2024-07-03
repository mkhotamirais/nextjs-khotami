import { LiaHtml5 } from "react-icons/lia";
import { TbBrandTypescript } from "react-icons/tb";

export const menu = [
  {
    label: "Html",
    icon: LiaHtml5,
    description: "deskripsi",
    subMenus: [
      { href: "html", label: "Html" },
      { href: "svg-1", label: "Svg 1" },
      { href: "canvas-1", label: "Canvas-1" },
      { href: "css-background", label: "Css Background" },
    ],
  },
  {
    label: "Typescript",
    icon: TbBrandTypescript,
    description: "deskripsi",
    subMenus: [
      { href: "/typescript", label: "typescript" },
      { href: "/typescript/ts-1", label: "ts 1" },
      { href: "/typescript/ts-2", label: "ts 2" },
    ],
  },
];
