import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setMessageType("");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setMessage("Please enter a valid email address.");
      setMessageType("error");
      return;
    }

    if (!password || password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      setMessageType("error");
      return;
    }

    setMessage("Signing you in…");
    setTimeout(() => {
      setMessage("Login successful! Redirecting…");
      setMessageType("success");
    }, 600);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-6">
      <main className="w-full max-w-md bg-slate-900/70 border border-slate-700 rounded-2xl p-8 shadow-xl">
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-extrabold text-xl shadow-lg">
            PL
          </div>
        </div>

        <h1 className="text-xl font-semibold text-center text-white mb-2">Welcome back</h1>
        <p className="text-slate-400 text-center mb-6 text-sm">Sign in to continue to your dashboard.</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label htmlFor="email" className="block text-slate-300 text-sm mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
              required
            />
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="password" className="text-slate-300 text-sm">
                Password
              </label>
              <a href="#" className="text-cyan-400 text-sm hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center gap-2 text-slate-300 text-sm">
              <input type="checkbox" className="w-4 h-4" /> Remember me
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 text-white font-semibold shadow hover:opacity-95"
          >
            Sign in
          </button>

          {message && (
            <div
              className={`mt-3 text-sm ${
                messageType === "error" ? "text-red-500" : "text-green-500"
              }`}
            >
              {message}
            </div>
          )}

          <p className="text-center text-slate-400 text-sm mt-4">
            Don’t have an account? <a href="#" className="text-cyan-400 hover:underline">Create one</a>
          </p>
        </form>
      </main>
    </div>
  );
}
export default LoginPage;