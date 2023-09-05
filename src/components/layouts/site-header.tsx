"use client";

import * as React from "react";
import { siteConfig } from "@/config/site";
import { MainNav } from "@/components/layouts/main-nav";
import { ToggleTheme } from "@/components/ui/toggle-theme";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-14 items-center">
        <div className="flex w-full justify-between">
          <MainNav mainNav={siteConfig.MainNav} />
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
}
