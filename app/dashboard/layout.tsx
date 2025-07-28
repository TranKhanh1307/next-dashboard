import SideNav from "../ui/sidenav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="md:h-full space-y-8 p-2 md:flex md:gap-8">
      <SideNav />
      <div className="flex-1 md:overflow-y-auto">{children}</div>
    </div>
  );
}
