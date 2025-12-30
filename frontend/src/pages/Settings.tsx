import { useState } from "react"

export default function Settings() {
  const [name, setName] = useState("User Name")
  const [email, setEmail] = useState("user@example.com")
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)

  const saveSettings = () => {
    alert("Settings saved (frontend only)")
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Settings</h2>

      {/* Profile Section */}
      <div className="bg-white border rounded p-6 mb-6">
        <h3 className="text-lg font-medium mb-4">Profile</h3>

        <div className="mb-4">
          <label className="block text-sm mb-1">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
      </div>

      {/* Preferences Section */}
      <div className="bg-white border rounded p-6 mb-6">
        <h3 className="text-lg font-medium mb-4">Preferences</h3>

        <div className="flex items-center justify-between mb-4">
          <span>Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>

        <div className="flex items-center justify-between">
          <span>Notifications</span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </div>
      </div>

      {/* Save Button */}
      <button
        onClick={saveSettings}
        className="bg-black text-white px-6 py-2 rounded"
      >
        Save Changes
      </button>
    </div>
  )
}
