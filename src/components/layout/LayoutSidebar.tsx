import { SidebarHeader, SidebarProvider } from "@/components/ui/sidebar";

export default function LayoutSidebar() {
  return (
    <SidebarProvider>
      <SidebarHeader>Dashboard</SidebarHeader>
    </SidebarProvider>
  );
}
