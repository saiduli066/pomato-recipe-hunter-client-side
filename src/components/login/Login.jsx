import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { signIn, setUser, handleGoogleSignIn, handleGitSignIn } =
    useContext(AuthContext);
    console.log(signIn);
  const navigate = useNavigate();  
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // const handleLogin = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   console.log(email, password);

  //   signIn(email, password)
  //     .then((result) => {
  //       const loggedUser = result.user;
  //       setUser(loggedUser);
  //       setSuccess("Login successful!");
  //       // navigate("/");

  //       setError("");
  //       form.reset();
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //       // setError(err.message);
  //       setError(err.message);
  //       form.reset();
  //     });

  //   handleGoogleSignIn()
  //     .then((result) => {
  //       const loggedInUser = result.user;
  //       console.log(loggedInUser);
  //       setUser(loggedInUser);
  //     })
  //     .catch((err) => {
  //       console.log("error :", err.message);
  //       setError(err.message);
  //     });
  //   handleGitSignIn()
  //     .then((result) => {
  //       const loggedInUser = result.user;
  //       console.log(loggedInUser);
  //       setUser(loggedInUser);
  //     })
  //     .catch((err) => {
  //       console.log("error :", err.message);
  //       setError(err.message);
  //     });
  // };

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    try {
      const result = await signIn(email, password);
      const loggedUser = result.user;
      setUser(loggedUser);
      setSuccess("Login successful!");
      navigate("/");
      setError("");
      form.reset();

      try {
        const googleResult = await handleGoogleSignIn();
        const loggedInUser = googleResult.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
        navigate("/");
      } catch (err) {
        console.log("error :", err.message);
        setError(err.message);
      }

      try {
        const gitResult = await handleGitSignIn();
        const loggedInUser = gitResult.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
        navigate("/");
      } catch (err) {
        console.log("error :", err.message);
        setError(err.message);
      }
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      form.reset();
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-xl md:text-5xl font-bold">Please Login!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <p className="text-red-500">{error}</p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <label className="label">
                <p>
                  <small>New to Pomato?</small>{" "}
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover"
                  >
                    Register here
                  </Link>
                </p>
              </label>
              <p>or continue with</p>
              <div className="flex justify-around">
                <div
                  onClick={handleGoogleSignIn}
                  className="flex gap-2 items-center border border-green-400 rounded-lg shadow-md px-3 cursor-pointer"
                >
                  <FaGoogle className="text-yellow-400" /> {""} <p>Google</p>
                </div>
                <div
                  onClick={handleGitSignIn}
                  className="flex gap-2 items-center border border-green-400 rounded-lg shadow-md px-3 cursor-pointer"
                >
                  {" "}
                  <FaGithub /> {""}
                  <p> Github</p>
                </div>
              </div>
              {error && <p className="text-red-400">Error: {error} </p>}{" "}
              {success && <p className="text-green-400">{success} </p>}{" "}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
