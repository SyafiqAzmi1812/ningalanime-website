import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { getAuth, clearAuth } from "../services/auth";

const HomePage = () => {
  const [auth, setAuth] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setAuth(getAuth());
  }, []);

  const handleLogout = () => {
    clearAuth();
    setAuth(null);
    navigate("/");
  };

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
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
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {auth ? (
            <>
              <Link to="/dashboard" className="btn btn-ghost">
                Dashboard
              </Link>
              <button onClick={handleLogout} className="btn btn-primary">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary">
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero min-h-[85vh] bg-linear-to-br from-base-200 to-base-300">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12 max-w-6xl">
          <div className="lg:w-1/2 flex justify-center">
            <div className="mockup-browser border border-base-300 bg-base-300 w-full max-w-md">
              <div className="mockup-browser-toolbar">
                <div className="input">https://ningalanime.app</div>
              </div>
              <div className="flex justify-center items-center bg-base-200 p-6">
                <div className="grid grid-cols-3 gap-2 w-full">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="aspect-3/4 rounded-box bg-linear-to-br from-primary/40 to-secondary/40 flex items-center justify-center"
                    >
                      <span className="text-2xl font-bold text-base-content/30">
                        {i}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="badge badge-primary badge-outline mb-4">
              Now in Early Access
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Stream Your
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary block">
                Favorite Anime
              </span>
              Without Limits
            </h1>
            <p className="py-6 text-lg text-base-content/70 max-w-lg">
              Discover thousands of anime titles in stunning HD quality. Curated
              collections, personalized recommendations, and a community of
              fellow fans — all in one place.
            </p>
            <div className="flex flex-wrap gap-3">
              {auth ? (
                <Link to="/dashboard" className="btn btn-primary btn-lg">
                  Go to Dashboard
                </Link>
              ) : (
                <Link to="/register" className="btn btn-primary btn-lg">
                  Start Watching Free
                </Link>
              )}
              <a href="#features" className="btn btn-outline btn-lg">
                Learn More
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-base-content/60">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="avatar placeholder">
                    <div className="w-8 h-8 bg-neutral text-neutral-content rounded-full text-xs">
                      <span>A</span>
                    </div>
                  </div>
                ))}
              </div>
              <span>
                Joined by <strong className="text-base-content">10,000+</strong>{" "}
                anime fans
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-base-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need</h2>
            <p className="text-base-content/60 max-w-xl mx-auto">
              From the latest simulcasts to classic masterpieces — we've built
              the ultimate anime streaming experience.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "HD Streaming",
                desc: "Crystal-clear 1080p streams with adaptive bitrate for smooth playback on any connection.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5"
                    />
                  </svg>
                ),
              },
              {
                title: "Personalized Watchlist",
                desc: "Build and organize your queue. We'll notify you when new episodes drop.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Ad-Free Experience",
                desc: "No interruptions, no pop-ups. Just pure anime enjoyment from start to finish.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                    />
                  </svg>
                ),
              },
              {
                title: "Community Reviews",
                desc: "Rate episodes, write reviews, and discussions with anime lovers worldwide.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>
                ),
              },
              {
                title: "Multi-Language Subs",
                desc: "Watch with subtitles in your preferred language. Multiple subtitle tracks available.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.78.147 2.653.255m-2.653-.255A47.926 47.926 0 0012 5.25m-3.666 2.364c-.467.367-1.11.864-1.833 1.5m3.666-1.5A46.56 46.56 0 0112 7.598m0 0a46.735 46.735 0 013.666 1.5m-3.666-1.5v.047"
                    />
                  </svg>
                ),
              },
              {
                title: "Offline Downloads",
                desc: "Download episodes to watch offline. Perfect for commutes and travel.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                ),
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="card bg-base-200 border border-base-300 hover:border-primary/30 transition-all duration-300"
              >
                <div className="card-body">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-2">
                    {feature.icon}
                  </div>
                  <h3 className="card-title text-lg">{feature.title}</h3>
                  <p className="text-base-content/60 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-base-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge badge-secondary mb-4">Simple Pricing</div>
            <h2 className="text-4xl font-bold mb-4">
              Plans That Fit Your Binge
            </h2>
            <p className="text-base-content/60 max-w-xl mx-auto">
              No hidden fees. No surprise charges. Cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="card bg-base-100 border border-base-300">
              <div className="card-body">
                <h3 className="card-title text-xl">Free</h3>
                <p className="text-base-content/60 text-sm">
                  Get started with basic access
                </p>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-base-content/60">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    "480p streaming quality",
                    "Limited catalog access",
                    "Ad-supported playback",
                    "1 device at a time",
                    "Basic search & browse",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 text-success shrink-0"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                {auth ? (
                  <Link to="/dashboard" className="btn btn-outline w-full">
                    Go to Dashboard
                  </Link>
                ) : (
                  <Link to="/register" className="btn btn-outline w-full">
                    Get Started
                  </Link>
                )}
              </div>
            </div>

            {/* Premium Plan (Featured) */}
            <div className="card bg-base-100 border-2 border-primary shadow-xl relative">
              <div className="badge badge-primary absolute -top-3 left-1/2 -translate-x-1/2">
                Most Popular
              </div>
              <div className="card-body">
                <h3 className="card-title text-xl">Premium</h3>
                <p className="text-base-content/60 text-sm">
                  The ultimate binge-watch experience
                </p>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold">$9.99</span>
                  <span className="text-base-content/60">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    "1080p Full HD streaming",
                    "Full catalog access",
                    "Completely ad-free",
                    "Up to 4 devices simultaneously",
                    "Offline downloads",
                    "Exclusive early access to simulcasts",
                    "Custom watchlists & recommendations",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 text-success shrink-0"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                {auth ? (
                  <Link to="/dashboard" className="btn btn-primary w-full">
                    Go to Dashboard
                  </Link>
                ) : (
                  <Link to="/register" className="btn btn-primary w-full">
                    Subscribe Now
                  </Link>
                )}
              </div>
            </div>

            {/* Family Plan */}
            <div className="card bg-base-100 border border-base-300">
              <div className="card-body">
                <h3 className="card-title text-xl">Family</h3>
                <p className="text-base-content/60 text-sm">
                  Share the anime love with family
                </p>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold">$14.99</span>
                  <span className="text-base-content/60">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    "Everything in Premium",
                    "Up to 6 devices simultaneously",
                    "Individual profiles (kids mode)",
                    "Parental controls",
                    "Family sharing hub",
                    "Priority customer support",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 text-success shrink-0"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                {auth ? (
                  <Link to="/dashboard" className="btn btn-outline w-full">
                    Go to Dashboard
                  </Link>
                ) : (
                  <Link to="/register" className="btn btn-outline w-full">
                    Subscribe Now
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-base-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base-content/60">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Can I cancel my subscription anytime?",
                a: "Absolutely! There's no long-term commitment. You can cancel your subscription at any time, and you'll retain access until the end of your current billing period.",
              },
              {
                q: "What devices are supported?",
                a: "NingalAnime works on all modern web browsers, plus dedicated apps for iOS, Android, Smart TVs, and gaming consoles. You can stream on virtually any device with an internet connection.",
              },
              {
                q: "Is there a free trial for paid plans?",
                a: "Yes! All paid plans come with a 7-day free trial. No credit card required to start. Experience the full Premium or Family features before committing.",
              },
              {
                q: "How often is new content added?",
                a: "We update our catalog daily with the latest simulcasts from Japan. Premium members get early access to new episodes within hours of their original broadcast.",
              },
              {
                q: "Can I download episodes for offline viewing?",
                a: "Yes, offline downloads are available on Premium and Family plans. Download your favorite episodes to watch anytime, anywhere — even without an internet connection.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="collapse collapse-plus bg-base-200 border border-base-300"
              >
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-base font-semibold">
                  {faq.q}
                </div>
                <div className="collapse-content text-sm text-base-content/70">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-linear-to-br from-primary to-secondary">
        <div className="max-w-3xl mx-auto text-center">
          {auth ? (
            <>
              <h2 className="text-4xl font-bold text-primary-content mb-4">
                Welcome Back!
              </h2>
              <p className="text-lg text-primary-content/80 mb-8 max-w-lg mx-auto">
                Continue watching where you left off. Your anime journey awaits.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/dashboard"
                  className="btn btn-accent btn-lg text-base"
                >
                  Go to Dashboard
                </Link>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-4xl font-bold text-primary-content mb-4">
                Ready to Start Watching?
              </h2>
              <p className="text-lg text-primary-content/80 mb-8 max-w-lg mx-auto">
                Join thousands of anime fans. Start your free trial today — no
                credit card required.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/register"
                  className="btn btn-accent btn-lg text-base"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/login"
                  className="btn btn-ghost btn-lg text-primary-content border border-primary-content/30"
                >
                  I Already Have an Account
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Anime Catalog</a>
          <a className="link link-hover">Simulcasts</a>
          <a className="link link-hover">Movies</a>
          <a className="link link-hover">Community</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press Kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="email"
                placeholder="anime@fan.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default HomePage;
