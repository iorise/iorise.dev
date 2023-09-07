"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { setTransition } from "@/lib/transition";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ProjectCard() {
  return (
    <motion.div
      {...setTransition({
        distanceY: -60,
        delay: 0.3,
        typeIn: "spring",
      })}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      <Card>
        <CardHeader>
          <CardTitle>Facebook Clone</CardTitle>
          <CardDescription>
            Fullstack Facebook clone built with Next.js and typescript
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/fb-example.png"
            alt="Facebook"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </CardContent>
        <CardFooter className="flex gap-3">
          {links.map((item) => (
            <Button
              key={item.title}
              variant={item.title === "Demo" ? "hover" : "outline"}
              asChild
            >
              <Link target="_blank" href={item.href}>
                {item.title}
              </Link>
            </Button>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

const links = [
  {
    title: "Repository",
    href: "https://github.com/iorise/sociobook",
  },
  {
    title: "Demo",
    href: "https://sociobook-iorise.vercel.app/",
  },
];
