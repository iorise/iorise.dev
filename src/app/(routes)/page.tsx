import { FeaturedProjects } from "@/components/featured-projects";
import { Hero } from "@/components/layouts/hero";
import { Shell } from "@/components/shell";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <Shell as="main" className="py-0 pb-20">
      <section id="hero">
        <Hero link={siteConfig.link} />
      </section>
      <section id="featured-projects">
        <FeaturedProjects />
      </section>
    </Shell>
  );
}
