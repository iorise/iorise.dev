import { FeaturedProjects } from "@/components/layouts/featured-projects";
import { Hero } from "@/components/layouts/hero";
import { Shell } from "@/components/shell";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <Shell as="main" className="pb-20">
      <section id="hero">
        <Hero link={siteConfig.link} />
      </section>
      <section id="featured-projects">
        <FeaturedProjects />
      </section>
    </Shell>
  );
}
