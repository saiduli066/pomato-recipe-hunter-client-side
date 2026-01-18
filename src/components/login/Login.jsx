import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaEnvelope, FaLock } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, setUser, handleGoogleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSuccess = (user) => {
    setUser(user);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Welcome back!",
      text: "Login successful",
      showConfirmButton: false,
      timer: 1500,
      background: "#fff",
      iconColor: "#d97706",
    });
    navigate(from, { replace: true });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        handleSuccess(result.user);
        form.reset();
      })
      .catch((err) => {
        setError("Invalid email or password. Please try again.");
        setLoading(false);
      });
  };

  const handleSocialLogin = () => {
    handleGoogleSignIn()
      .then((result) => {
        handleSuccess(result.user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
        <div className="text-center">
          <h2 className="mt-2 text-3xl font-serif font-bold text-slate-900 tracking-tight">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Sign in to access your saved recipes and chefs.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <FaEnvelope />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors text-slate-700 placeholder-slate-400 bg-gray-50 hover:bg-white"
                placeholder="Email address"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <FaLock />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors text-slate-700 placeholder-slate-400 bg-gray-50 hover:bg-white"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-slate-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-amber-600 hover:text-amber-500"
              >
                Forgot password?
              </a>
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center bg-red-50 py-2 rounded-lg border border-red-100">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-slate-900 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-slate-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleSocialLogin}
              className="w-full inline-flex justify-center items-center py-3 px-4 rounded-lg shadow-sm bg-white text-sm font-medium text-slate-700 border border-gray-200 hover:bg-gray-50 hover:text-slate-900 transition-colors gap-2"
            >
              <FaGoogle className="h-5 w-5 text-red-500" />
              <span>Sign in with Google</span>
            </button>
          </div>
        </div>

        <div className="text-center text-sm">
          <p className="text-slate-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-amber-600 hover:text-amber-500 hover:underline"
            >
              Sign up for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
