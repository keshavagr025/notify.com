import {
  Sidebar,
  SidebarContent,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function AppLayout() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          {/* sidebar items */}
        </SidebarContent>
      </Sidebar>

      <SidebarInset>
        <header className="p-4">
          <SidebarTrigger />
        </header>

        <main className="p-4">
          Your page content
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
