import { SidebarTrigger } from "@/components/ui/sidebar"

export default function Header() {
  return (
    <header className="relative flex items-center border-b bg-white px-6 py-3">
      <SidebarTrigger />

      <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold">
        AI Smart Notebook
      </h1>
    </header>
  )
}
