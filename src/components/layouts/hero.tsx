"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { setTransition } from "@/lib/transition";
import { Button } from "@/components/ui/button";
import { NavItem } from "@/types";
import { Icons } from "@/components/icons";

interface HeroProps {
  link: NavItem[];
}
export function Hero({ link }: HeroProps) {
  return (
    <div className="w-full grid gap-2 md:gap-3 min-h-[calc(100vh_-_3.6rem)] content-center font-bold">
      <motion.h3
        {...setTransition({
          distanceX: -50,
          delay: 0.1,
          typeIn: "spring",
        })}
        className="text-xl md:text-3xl"
      >
        Hello, Its me
      </motion.h3>
      <motion.h1
        {...setTransition({
          distanceX: -70,
          delay: 0.2,
          typeIn: "spring",
        })}
        className="text-3xl md:text-5xl text-primary"
      >
        Rio Firmansyah.
      </motion.h1>
      <motion.p
        {...setTransition({
          distanceX: -90,
          delay: 0.3,
          typeIn: "spring",
        })}
        className="text-sm md:text-lg max-w-3xl text-muted-foreground leading-normal"
      >
        i'm a self-taught full stack web developer. As a tech enthusiast in
        website development, I strive to create intuitive, attractive and
        responsive user experiences through a combination of good design,
        powerful functionality and optimal performance in the frontend and
        scalable and secure infrastructure on the backend.
      </motion.p>
      <motion.div
        {...setTransition({ delay: 0.4, typeIn: "spring", distanceY: 30 })}
        className="flex gap-3 max-w-sm"
      >
        {link.map((item) => {
          const Icon = Icons[item.icon ?? "rightArrow"];
          return (
            <Button
              variant={item.title === "Resume" ? "outline" : "hover"}
              key={item.title}
              size="xl"
              className="font-bold group"
              asChild
            >
              <Link target={item.external ? "_blank" : ""} href={item.href}>
                <span className="w-full">{item.title}</span>
                {item.icon ? (
                  <Icon className="transition-transform fill-white dark:fill-black duration-300 translate-x-2 group-hover:translate-x-4 w-6 h-6" />
                ) : null}
              </Link>
            </Button>
          );
        })}
      </motion.div>
    </div>
  );
}
