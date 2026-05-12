import { useEffect } from "react";
import { useNavigate, Link } from "react-router";
import { getAuth, clearAuth } from "../services/auth";
import toast from "react-hot-toast";

const DashboardPage = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, [auth, navigate]);

  const handleLogout = () => {
    clearAuth();
    toast.success("Logged out successfully");
    navigate("/");
  };

  if (!auth) return null;

  return (
    <div className="min-h-screen bg-base-200">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
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
        <div className="navbar-end gap-2">
          <div className="flex items-center gap-2">
            <div className="avatar placeholder">
              <div className="w-8 h-8 bg-primary text-primary-content rounded-full text-xs flex items-center justify-center">
                <span>{auth.user.username[0].toUpperCase()}</span>
              </div>
            </div>
            <span className="text-sm font-medium hidden sm:inline">
              {auth.user.username}
            </span>
          </div>
          <button onClick={handleLogout} className="btn btn-ghost btn-sm">
            Logout
          </button>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-2">
              Welcome back, {auth.user.username}!
            </h2>
            <p className="text-base-content/60 mb-6">
              You are logged in as {auth.user.email}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="stat bg-base-200 rounded-box p-4">
                <div className="stat-title">Anime Watched</div>
                <div className="stat-value text-primary">0</div>
                <div className="stat-desc">Start exploring the catalog</div>
              </div>
              <div className="stat bg-base-200 rounded-box p-4">
                <div className="stat-title">Watchlist</div>
                <div className="stat-value text-secondary">0</div>
                <div className="stat-desc">Add your first anime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
