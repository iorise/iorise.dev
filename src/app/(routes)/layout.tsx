import { Footer } from "@/components/layouts/footer";
import { SiteHeader } from "@/components/layouts/site-header";
import { siteConfig } from "@/config/site";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SiteHeader />
      <div className="min-h-[calc(100vh_-_3.6rem)]">{children}</div>
      <Footer links={siteConfig.footerLinks}/>
    </div>
  );
}
