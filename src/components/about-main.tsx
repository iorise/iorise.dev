"use client";

import { setTransition } from "@/lib/transition";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { NavItem } from "@/types";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface AboutMainProps {
  links: NavItem[];
}

export function AboutMain({ links }: AboutMainProps) {
  return (
    <div>
      <section>
        <motion.article
          {...setTransition({
            distanceY: -60,
            delay: 0.3,
            typeIn: "spring",
          })}
          className="text-lg md:text-xl grid gap-6 max-w-3xl"
        >
          <p>
            Hello there, my name is Rio Firmansyah. I&apos;m passionate about
            technology especially in website development and and I&apos;m always
            eager to adapt to new technologies. I am equally comfortable working
            as part of a team or as an individual contributor.
          </p>
          <p>
            My journey in the world of web development began with HTML, CSS, and
            JavaScript. Over time, I delved deeper into JavaScript and started
            using advanced tools like Next.js and TypeScript to create
            high-performance web applications for both the front end and back
            end.
          </p>
          <p>
            I enjoy solving complex problems and building user-friendly
            experiences. Whether it&apos;s crafting responsive user interfaces
            or optimizing server-side performance, I&apos;m dedicated to
            delivering top-notch solutions that meet both user needs and
            business goals.
          </p>
          <p>
            In every project, my goal is to exceed expectations and contribute
            to the success of the team. I look forward to taking on new
            challenges and continuing my journey in the ever-evolving world of
            web development.
          </p>
        </motion.article>
      </section>
      <section className="pt-12">
        <motion.div
          {...setTransition({
            distanceY: -60,
            delay: 0.4,
            typeIn: "spring",
          })}
        >
          <PageHeader className="py-6" title="Recent tech" />
          <div className="flex gap-6">
            <TooltipProvider delayDuration={100}>
              {links.map((item, i) => {
                const Icon = Icons[item.icon ?? "rightArrow"];

                return (
                  <Tooltip key={i}>
                    <TooltipTrigger>
                      <Link
                        href={item.href}
                        target={item.external ? "_blank" : ""}
                        key={i}
                      >
                        <Icon className="w-10 h-10 md:w-12 md:h-12 hover:scale-110 transition-transform duration-300" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>{item.description}</TooltipContent>
                  </Tooltip>
                );
              })}
            </TooltipProvider>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
