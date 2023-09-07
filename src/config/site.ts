import { NavItem } from "@/types";

export const siteConfig = {
  name: "Rio Firmansyah",
  description: "Rio firmansyah personal portfolio website",
  url: "",
  navItem: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blog",
      href: "/blog",
      disabled: true,
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "About",
      href: "/about",
    },
  ] satisfies NavItem[],
  link: [
    {
      title: "Resume",
      href: "https://docs.google.com/document/d/1RDtg3dmPAImwdZe_Gi_CLtFOAnn4G5DWVXbUtgihOOU/edit?hl=id",
      external: true,
    },
    {
      title: "See more about me",
      href: "/about",
      icon: "rightArrow",
      external: false,
    },
  ] satisfies NavItem[],
  social: [
    {
      title: "Github",
      href: "https://github.com/iorise",
      external: true,
    },
    {
      title: "Linkedin",
      href: "https://www.linkedin.com/in/rio-firmansyah-193a17283/",
      external: true,
    },
  ],
  stack: [
    {
      title: "Next.js",
      href: "https://nextjs.org/",
      icon: "nextJs",
      description:
        "Next.js is a React framework for production that enables Server-Side Rendering (SSR) for improved performance and SEO.",
      external: true,
    },
    {
      title: "Typescript",
      href: "https://www.typescriptlang.org/",
      icon: "typeScript",
      description:
        "For developing web applications of a more robust and secure type.",
      external: true,
    },
    {
      title: "Prisma",
      href: "https://www.prisma.io/",
      icon: "prisma",
      description:
        "Prisma is a powerful database toolkit for Node.js that simplifies database access, data modeling, and query building.",
      external: true,
    },
    {
      title: "Node.js",
      href: "https://nodejs.org/",
      icon: "nodeJs",
      description:
        "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, designed for building scalable and efficient server-side applications.",
      external: true,
    },
    {
      title: "Tailwind",
      href: "https://tailwindcss.com/",
      icon: "tailwindCss",
      description:
        "Tailwind CSS is a utility-first CSS framework packed with classes that can be composed to build any design.",
      external: true,
    },
  ] satisfies NavItem[],
  footerLinks: [
    {
      title: "Github",
      href: "https://github.com/iorise",
      icon: "github",
      external: true,
    },
    {
      title: "Linkedin",
      href: "https://www.linkedin.com/in/rio-firmansyah-193a17283/",
      icon: "linkedin",
      external: true,
    },
  ] satisfies NavItem[],
};
