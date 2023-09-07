import { Metadata } from "next";
import React from "react";

import { ProjectCard } from "@/components/project-card";
import { PageHeader } from "@/components/page-header";
import { Shell } from "@/components/shell";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Projects | ${siteConfig.name}`,
  description: siteConfig.description,
};

export default function ProjectsPage() {
  return (
    <Shell as="div">
      <PageHeader
        title="Projects"
        description="Explore a curated collection of my latest and ongoing projects."
      ></PageHeader>
      <ProjectCard />
    </Shell>
  );
}
