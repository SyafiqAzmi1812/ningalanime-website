import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { signupUser, saveAuth } from "../services/auth";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const res = await signupUser({
        username: form.username,
        email: form.email,
        password: form.password,
      });
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

          <h2 className="text-2xl font-bold text-center mb-2">
            Create Your Account
          </h2>
          <p className="text-base-content/60 text-center text-sm mb-6">
            Join the anime community today
          </p>

          <form onSubmit={handleSubmit} className="space-y-0">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Username</legend>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Your username"
                className="input input-bordered w-full"
                required
              />
            </fieldset>

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
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="At least 6 characters"
                className="input input-bordered w-full"
                required
                minLength={6}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Confirm Password</legend>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Repeat your password"
                className="input input-bordered w-full"
                required
                minLength={6}
              />
            </fieldset>

            <button
              type="submit"
              className={`btn btn-primary w-full mt-4 ${loading ? "btn-disabled" : ""}`}
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm" />
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <p className="text-center text-sm text-base-content/60 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="link link-primary">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
