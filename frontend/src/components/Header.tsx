import { SidebarTrigger } from "@/components/ui/sidebar"

export default function Header() {
  return (
    <header className="grid grid-cols-6 items-center border-b bg-white px-6 h-14">
      
      {/* Left */}
      <div className="flex items-center">
        <SidebarTrigger />
      </div>

      {/* Center */}
      <h1 className="text-lg font-semibold text-center whitespace-nowrap">
        AI Smart Notebook
      </h1>

      {/* Right (future use) */}
      <div />
    </header>
  )
}
