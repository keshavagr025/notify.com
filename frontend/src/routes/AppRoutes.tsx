import { Routes, Route } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Notes from "../pages/Notes"
import MindMap from "../pages/MindMap"
import Notifications from "../pages/Notifications"
import Settings from "../pages/Settings"
import Login from "../pages/Login"
import Signup from "../pages/Signup"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/mind-map" element={<MindMap />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}
