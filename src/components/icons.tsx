import type { LucideProps } from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
  SiTailwindcss,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const Icons = {
  nextJs: SiNextdotjs,
  typeScript: SiTypescript,
  nodeJs: FaNodeJs,
  prisma: SiPrisma,
  tailwindCss: SiTailwindcss,
  github: AiFillGithub,
  linkedin: AiFillLinkedin,
  rightArrow: ({ ...props }: LucideProps) => (
    <svg
      fill="#000000"
      height="200px"
      width="200px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <polygon points="12,7 13,7 13,9 15,9 15,11 3,11 3,13 15,13 15,15 13,15 13,17 12,17 12,19 15,19 15,17 17,17 17,15 19,15 19,14 20,14 20,13 21,13 21,11 20,11 20,10 19,10 19,9 17,9 17,7 15,7 15,5 12,5 "></polygon>{" "}
      </g>
    </svg>
  ),
};
