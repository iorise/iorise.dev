"use client";

import { motion } from "framer-motion";
import { fadeInWhenVisible } from "@/lib/transition";
import { ProjectCard } from "@/components/project-card";

export function FeaturedProjects() {
  return (
    <motion.div className="grid gap-5" {...fadeInWhenVisible()}>
      <h1 className="text-3xl md:text-4xl font-bold text-primary">
        Featured Projects
      </h1>
      <ProjectCard />
    </motion.div>
  );
}
