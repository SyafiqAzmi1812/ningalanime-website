import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { loginUser, saveAuth } from "../services/auth";
import toast from "react-hot-toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await loginUser(form);
      saveAuth(res.data);
      toast.success(res.message);
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card bg-base-100 w-full max-w-md shadow-xl">
        <div className="card-body p-8">
          <div className="text-center mb-6">
            <Link to="/" className="btn btn-ghost text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-6 w-6 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h6a2.25 2.25 0 002.25-2.25V7.5A2.25 2.25 0 0010.5 5.25h-6a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              NingalAnime
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-center mb-2">Welcome Back</h2>
          <p className="text-base-content/60 text-center text-sm mb-6">
            Sign in to continue watching
          </p>

          <form onSubmit={handleSubmit} className="space-y-0">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="anime@fan.com"
                className="input input-bordered w-full"
                required
              />
              <p className="label">Required</p>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="input input-bordered w-full"
                required
                minLength={6}
              />
              <p className="label">Required</p>
            </fieldset>

            <button
              type="submit"
              className={`btn btn-primary w-full mt-4 ${loading ? "btn-disabled" : ""}`}
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm" />
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <p className="text-center text-sm text-base-content/60 mt-6">
            Don't have an account?{" "}
            <Link to="/register" className="link link-primary">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
