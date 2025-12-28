import { Outlet } from "react-router-dom"

export default function AuthLayout() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-50">
      <Outlet />
    </div>
  )
}
