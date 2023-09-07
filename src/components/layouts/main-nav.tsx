"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "@/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MainNavProps {
  mainNav: NavItem[];
}

export function MainNav({ mainNav }: MainNavProps) {
  const pathname = usePathname();
  return (
    <div className="flex gap-5">
      {mainNav.length
        ? mainNav.map((item) => (
            <Button
              variant="none"
              key={item.title}
              className={cn(
                "font-bold text-base md:text-lg",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground",
                item.disabled && "pointer-events-none"
              )}
              asChild
            >
              <Link href={!item.disabled ? item.href : "#"}>{item.title}</Link>
            </Button>
          ))
        : null}
    </div>
  );
}
