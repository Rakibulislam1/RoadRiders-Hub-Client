import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Hook/AuthProvider";


const Register = () => {
 
  const { createUser } = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    console.log(email, password);


    // create user
    createUser(email, password)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    })
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
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                <span className="mt-4 text-center">
                  Already have an account ? Please{" "}
                  <Link to="/login" className="text-blue-700 font-bold">
                    Login
                  </Link>{" "}
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
