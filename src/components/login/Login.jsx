import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  console.log(signIn);

  const [error, setError] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
      const form = event.target;
      const name = form.name.value;
    const email = form.email.value;
      const password = form.password.value;
      const photoUrl = form.photoUrl.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
      })
      .catch((err) => {
        console.log(err.message);
        // setError(err.message);
        setError(err.message);
        form.reset();
      });
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
                <div className="flex gap-2 items-center border border-green-400 rounded-lg shadow-md px-3 cursor-pointer">
                  <FaGoogle  className='text-yellow-400'/> {""} <p>Google</p>
                </div>
                <div className="flex gap-2 items-center border border-green-400 rounded-lg shadow-md px-3 cursor-pointer">
                  {" "}
                  <FaGithub /> {""}
                  <p> Github</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;