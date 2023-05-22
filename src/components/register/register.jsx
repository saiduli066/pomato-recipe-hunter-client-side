import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // const navigate = useNavigate();  //don't forget to import

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    console.log(name, email, password, photoUrl);

    //password validate
    if (password.length<6) {
        setError("must input at least six characters long password ");
      form.reset();
      return;
    }
    // createUser(email, password)
    //   .then((result) => {
    //     // console.log(result.user);
    //     const createdUser = result.user;
    //       setUser(createdUser);
    //       setSuccess('Registration Successful!')
    //     form.reset();
    //     setError("");
    //   })
    //   .catch((err) => {
    //     // console.log("error: ", err.message);
    //     setError(err.message);
    //     form.reset();
    //   });
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
          setUser(createdUser);
          setSuccess('Registration Successful!');
          // navigate("/");
          form.reset();
          setError("");
      })
      .catch((err) => {
        setError(err.message);
        form.reset();
      });
  };



  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-xl md:text-5xl font-bold">Please Register!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="Photo Url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <label className="label">
                <p>
                  <small> Already have an account?</small> {""}
                  <Link to="/login" className="label-text-alt link link-hover">
                    Login
                  </Link>
                </p>
              </label>
              {error && <p className="text-red-400">Error: {error} </p>}{" "}
              {success && <p className="text-green-400">{success} </p>}{" "}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
