"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import { Shell } from "@/components/shell";
import { Icons } from "@/components/icons";
import { NavItem } from "@/types";
import { setTransition } from "@/lib/transition";

interface FooterProps {
  links: NavItem[];
}

export function Footer({ links }: FooterProps) {
  return (
    <footer className="w-full bg-background">
      <Shell as="div" className="pt-20">
        <motion.div
          className="w-full flex items-center"
          {...setTransition({
            delay: 0.5,
            typeIn: "spring",
            distanceX: -100,
          })}
        >
          <section className="grid gap-6 border p-6">
            {links.map((item) => {
              const Icon = Icons[item.icon ?? "rightArrow"];
              return (
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : ""}
                  key={item.title}
                >
                  <Icon className="w-8 h-8 hover:text-black dark:hover:text-primary transition-all duration-300 shadow-xl dark:shadow-glow" />
                </Link>
              );
            })}
          </section>
          <section className="w-full">
            <div className="relative w-full flex items-center justify-center">
              <div className="absolute inset-0 flex items-center w-full px-32">
                <span className="w-full border-b" />
              </div>
              <span className="relative bg-background px-10 text-muted-foreground">
                Rio F. &copy; 2023
              </span>
            </div>
          </section>
        </motion.div>
      </Shell>
    </footer>
  );
}
