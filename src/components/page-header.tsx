"use client";

import { motion } from "framer-motion";
import { Balancer } from "react-wrap-balancer";

import { cn } from "@/lib/utils";
import { setTransition } from "@/lib/transition";

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  description?: string;
  title: string;
}

export function PageHeader({
  className,
  title,
  description,
  children,
  as: Comp = "section",
  ...props
}: PageHeaderProps) {
  return (
    <Comp className={cn("grid gap-3", className)} {...props}>
      <motion.h1
        {...setTransition({
          distanceY: -30,
          delay: 0.1,
          typeIn: "spring",
        })}
        className="font-bold tracking-tighter lg:leading-tight text-3xl md:text-4xl"
      >
        {title}
      </motion.h1>
      {description ? (
        <motion.p
          {...setTransition({
            distanceY: -40,
            delay: 0.2,
            typeIn: "spring",
          })}
          className="text-muted-foreground max-w-6xl text-lg md:text-xl"
        >
          <Balancer>{description}</Balancer>
        </motion.p>
      ) : null}
    </Comp>
  );
}
