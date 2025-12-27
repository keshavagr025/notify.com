export default function Signup() {
  return (
    <div className="max-w-sm mx-auto bg-white p-6 rounded">
      <h2 className="text-xl font-semibold mb-4">Sign Up</h2>

      <input className="border p-2 w-full mb-3" placeholder="Name" />
      <input className="border p-2 w-full mb-3" placeholder="Email" />
      <input className="border p-2 w-full mb-3" placeholder="Password" type="password" />

      <button className="w-full bg-black text-white py-2 rounded">
        Create Account
      </button>
    </div>
  )
}
