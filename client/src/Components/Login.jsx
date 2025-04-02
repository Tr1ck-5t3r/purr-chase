import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

function Login() {
  const { setAuth, auth } = useAuth();
  const [showModal, setShowModal] = useState(false); // To control the visibility of the modal

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());

    console.log("Login Data:", data);
    console.log("Server URL:", import.meta.env.VITE_SERVER_URL); // Debugging

    try {
      const response = await fetch(`http://localhost:5000/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Login failed.");
      }

      const result = await response.json();
      console.log("Login successful:", result.user);
      const u = {
        username: result.user.username,
        email: result.user.email,
        phone: result.user.phone,
        profilePicture: result.user.profilePicture,
        address: result.user.address, // Include address if needed
      };
      console.log("User object:", u); // Debugging
      setAuth(u);
      console.log("User data:", auth); // Debugging
      localStorage.setItem("token", result.token); // Store token

      setShowModal(true); // Show the modal on successful login
    } catch (error) {
      console.error("Login error:", error.message);
      alert(error.message); // Show error to user
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-zinc-900 via-[#0d0d0d] to-zinc-900 text-white">
      {/* Modal for successful login */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
          <div className="bg-zinc-900 p-8 rounded-xl w-1/2">
            <h2 className="text-3xl text-center font-semibold">
              Login Successful!
            </h2>
            <p className="text-center mt-4">
              You have logged in successfully. Where would you like to go?
            </p>
            <div className="mt-5 flex justify-center space-x-4">
              <a
                href="/"
                className="bg-green-500 text-white px-4 py-2 rounded-md"
              >
                Go to Home
              </a>
              <a
                href="/dashboard"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Go to Dashboard
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="w-1/2 backdrop-blur-md bg-slate-400 rounded-3xl bg-opacity-10 px-8 py-12">
        <h1 className="text-4xl font-bold text-center mt-10">Login</h1>
        <p className="text-center mt-5">
          Welcome back! Please login to your account.
        </p>

        <form
          className="flex flex-col items-center mt-10"
          onSubmit={handleLogin}
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="text-black border border-gray-300 rounded-md p-2 mb-4 w-3/5"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="text-black border border-gray-300 rounded-md p-2 mb-4 w-3/5"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-2 w-1/3"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-5">
          Dont have an account?{" "}
          <Link to="/register" className="text-blue-500">
            Register here
          </Link>
        </p>
        <p className="text-center mt-5">
          Forgot your password?{" "}
          <button className="text-blue-500">Reset it here</button>
        </p>
      </div>
    </div>
  );
}

export default Login;
