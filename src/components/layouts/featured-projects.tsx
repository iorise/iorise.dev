"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInWhenVisible } from "@/lib/transition";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function FeaturedProjects() {
  return (
    <motion.div className="grid gap-5" {...fadeInWhenVisible()}>
      <h1 className="text-2xl md:text-4xl font-bold text-primary">
        Featured Projects
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Facebook Clone</CardTitle>
            <CardDescription>Facebook clone build with Next.js</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </motion.div>
  );
}
