import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Hook/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [regError , setRegError] =useState()

  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");



    if (password.length < 6) {
      setRegError("Password is less than 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegError("Password don't have a capital letter");
      return;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setRegError("Password don't have a special character");
      return;
    }

    // create user
    createUser(email, password)
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
          title: "Signed up successfully",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div>
        <div className="flex justify-center flex-col items-center h-screen">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold my-6">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
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
              </div>
              <p className="text-red-700">{regError}</p>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <span className="text-center mb-10">
              Already have an account ? Please{" "}
              <Link to="/login" className="text-blue-700 font-bold">
                Login
              </Link>{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
