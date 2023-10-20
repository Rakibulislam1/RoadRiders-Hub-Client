import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Hook/AuthProvider";
import Swal from "sweetalert2";
import avatar from "../../assets/user.png"

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result);

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
          title: "Logged out successfully",
        });
      })
      .catch();
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#264da0] underline" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/addProduct"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#264da0] underline" : ""
        }
      >
        Add Product
      </NavLink>
      <NavLink
        to="/myCart"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#264da0] underline" : ""
        }
      >
        My Cart
      </NavLink>
    </>
  );

  return (
    <div className="bg-[#11285A]">
      <div className="flex justify-between items-center py-4 max-w-7xl mx-auto md:px-5 lg:px-0">
        <div className="z-10">
          <div className="dropdown">
            <label tabIndex={0} className="text-white block lg:hidden mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="text-xl font-bold text-[#264da0]">
            <span className="text-white">RoadRiders</span> Hub
          </a>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex gap-6 px-1 text-white">{navLinks}</ul>
        </div>
        <div className="flex gap-2 items-center">

          {
            user ? 
            <div className="avatar">
              <div className="w-8 rounded-full border-2 border-emerald-500">
                <img src={user.photoURL ? user.photoURL : avatar} />
              </div>
            </div>
            :
            ""
          }

          {
            user ? 
            <span className="text-white">{user.displayName}</span>
            :
            ""
          }

          {user ? (
            <button
              onClick={handleSignOut}
              className="btn btn-sm bg-[#11285A] border-none text-white normal-case hover:bg-[#264da0]"
            >
              Sign Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm bg-[#11285A] border-none text-white normal-case hover:bg-[#264da0]">
                Log In
              </button>
            </Link>
          )}

          {user ? (
            ""
          ) : (
            <Link
              to="/register"
              className="btn btn-sm bg-[#11285A] border-none text-white normal-case hover:bg-[#264da0]"
            >
              Register
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
