"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { setTransition } from "@/lib/transition";

interface ErrorCardProps extends React.ComponentPropsWithoutRef<typeof Card> {
  icon?: keyof typeof Icons;
  title: string;
  description: string;
  retryLink?: string;
  retryLinkText?: string;
  reset?: () => void;
}

export function ErrorCard({
  icon,
  title,
  description,
  retryLink,
  retryLinkText = "Go back",
  reset,
  className,
  ...props
}: ErrorCardProps) {
  const Icon = Icons[icon ?? "warning"];

  return (
    <motion.section
      {...setTransition({
        typeIn: "spring",
        distanceY: -50,
      })}
    >
      <Card
        role="alert"
        className={cn("grid w-full place-items-center", className)}
        {...props}
      >
        <CardHeader>
          <div className="grid h-20 w-20 place-items-center rounded-full bg-muted">
            <Icon className="h-10 w-10" aria-hidden="true" />
          </div>
        </CardHeader>
        <CardContent className="flex min-h-[176px] flex-col items-center justify-center space-y-2.5 text-center">
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription className="line-clamp-4">
            {description}
          </CardDescription>
        </CardContent>
        {retryLink ? (
          <CardFooter>
            <Button size="xl" variant="outline" asChild>
              <Link href={retryLink}>
                {retryLinkText}
                <span className="sr-only">{retryLinkText}</span>
              </Link>
            </Button>
          </CardFooter>
        ) : null}
        {reset ? (
          <CardFooter>
            <Button variant="ghost" onClick={reset}>
              Retry
            </Button>
          </CardFooter>
        ) : null}
      </Card>
    </motion.section>
  );
}
