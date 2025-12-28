import { Routes, Route } from "react-router-dom"

import DashboardLayout from "@/layouts/DashboardLayout"
import AuthLayout from "@/layouts/AuthLayout"

import Dashboard from "@/pages/Dashboard"
import Notes from "@/pages/Notes"
import MindMap from "@/pages/MindMap"
import Notifications from "@/pages/Notifications"
import Settings from "@/pages/Settings"
import Login from "@/pages/Login"
import Signup from "@/pages/Signup"

export default function AppRoutes() {
  return (
    <Routes>
      {/* Auth routes (NO sidebar, NO header) */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      {/* Dashboard routes */}
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/mind-map" element={<MindMap />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}
