export default function Login() {
  return (
    <div className="w-full max-w-sm bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Login
      </h2>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Email"
      />

      <input
        className="border p-2 w-full mb-4"
        type="password"
        placeholder="Password"
      />

      <button className="w-full bg-black text-white py-2 rounded">
        Login
      </button>
    </div>
  )
}
