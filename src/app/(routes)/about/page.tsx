import { AboutMain } from "@/components/about-main";
import { PageHeader } from "@/components/page-header";
import { Shell } from "@/components/shell";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description: siteConfig.description,
};

export default function AboutPage() {
  return (
    <Shell as="div">
      <PageHeader
        title="About me"
        description="Here i will share a little about myself, Rio Firmansyah, and my interests and journey in the world of technology."
      />
      <AboutMain links={siteConfig.stack}/>
    </Shell>
  );
}
