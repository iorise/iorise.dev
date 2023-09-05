import { MainNav } from "@/types";

export const siteConfig = {
  MainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "About",
      href: "/about",
    },
  ] satisfies MainNav[],
  link: [
    {
      title: "Resume",
      href: "https://docs.google.com/document/d/1RDtg3dmPAImwdZe_Gi_CLtFOAnn4G5DWVXbUtgihOOU/edit?hl=id",
      external: true,
    },
    {
      title: "See more about me",
      href: "/about",
      external: false,
    },
  ] satisfies MainNav[],
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
  ] satisfies MainNav[],
};
