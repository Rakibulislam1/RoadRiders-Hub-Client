import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#F5C34B] underline" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/addProduct"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#F5C34B] underline" : ""
        }
      >
        Add Product
      </NavLink>
      <NavLink
        to="/myCart"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#F5C34B] underline" : ""
        }
      >
        My Cart
      </NavLink>
      
    </>
  );

  return (
    <div className="bg-[#11285A]">
      <div className="flex justify-between items-center py-4 max-w-7xl mx-auto">
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="text-white block px-4 lg:hidden">
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
          <a className="text-xl text-[#F5C34B]">RoadRiders Hub</a>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex gap-6 px-1 text-white">{navLinks}</ul>
        </div>
        <div className="flex gap-2">
          <Link to='/login' className="btn btn-sm bg-[#F5C34B] border-none text-white normal-case hover:bg-[#ddb24e]">Log in</Link>
          <Link to='/register' className="btn btn-sm bg-[#F5C34B] border-none text-white normal-case hover:bg-[#ddb24e]">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
