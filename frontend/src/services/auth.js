const API_BASE = "/api/v1/auth";

async function request(url, options) {
  let res;
  try {
    res = await fetch(url, options);
  } catch {
    throw new Error(
      "Cannot connect to server. Make sure the backend is running.",
    );
  }
  let data;
  try {
    data = await res.json();
  } catch {
    throw new Error(`Server error (${res.status}). Please try again.`);
  }
  if (!data.success) throw new Error(data.message || "Request failed");
  return data;
}

export const loginUser = ({ email, password }) =>
  request(`${API_BASE}/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

export const signupUser = ({ username, email, password }) =>
  request(`${API_BASE}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });

export const saveAuth = ({ user, token }) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
};

export const clearAuth = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const getAuth = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  if (!token || !user) return null;
  return { token, user: JSON.parse(user) };
};
