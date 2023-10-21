/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Hook/AuthProvider";
import googleImg from "../../assets/google.png";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState()

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signIn(email, password)
      .then((result) => {
        console.log(result);

        const {
          user: { email },
        } = result;

        fetch("http://localhost:5000/create-user", {
          method: "POST",
          mode: "cors",
          body: JSON.stringify({
            email,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });

        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);

        
        const {
          user: { email },
        } = result;

        fetch("http://localhost:5000/create-user", {
          method: "POST",
          mode: "cors",
          body: JSON.stringify({
            email,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        navigate(location?.state ? location?.state : "/");

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div>
      <div>
        <div className="flex justify-center flex-col items-center h-screen">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-6">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
              </div>
              
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            
            <p className="text-red-700">{loginError}</p>
            </form>
            <Link>
              <span
                onClick={handleGoogleLogin}
                className="flex justify-center flex-wrap items-center text-blue-700 hover:text-purple-900 font-semibold"
              >
                <img className="w-10" src={googleImg} />
                Login With Google
              </span>
            </Link>
            
            <span className="mt-4 mb-10 text-center">
              Don't have account ? Please{" "}
              <Link to="/register" className="text-blue-700 font-bold">
                Register
              </Link>{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
