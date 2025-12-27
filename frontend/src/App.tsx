import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "./components/AppSidebar"
import Header from "./components/Header"
import AppRoutes from "./routes/AppRoutes"

export default function App() {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <AppSidebar />

        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1 p-6 bg-gray-50">
            <AppRoutes />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
