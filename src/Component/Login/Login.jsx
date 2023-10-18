/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center flex-col items-center h-screen">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold my-6">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
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
                <span className="mt-4 text-center">Don't have account ? Please <Link to='/register' className="text-blue-700 font-bold">Register</Link> </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
