import { SiteHeader } from "@/components/layouts/site-header";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SiteHeader />
      {children}
    </div>
  );
}
