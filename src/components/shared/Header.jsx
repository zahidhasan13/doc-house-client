import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <header>
      <nav className="md:bg-transparent border-gray-200 px-4 lg:px-6 py-2.5 dark:md:bg-transparent md:fixed top-0 left-0 right-0 z-40">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Doc House Logo" />
          </Link>
          <div className="flex items-center">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#F7A582] block py-2 pr-4 pl-3 text-white md:py-2 md:px-4 dark:text-white"
                      : "block py-2 pr-4 pl-3 text-white md:py-2 md:px-4 dark:text-white"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#F7A582] block py-2 pr-4 pl-3 text-white md:py-2 md:px-4 dark:text-white"
                      : "block py-2 pr-4 pl-3 text-white md:py-2 md:px-4 dark:text-white"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/appointment"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#F7A582] block py-2 pr-4 pl-3 text-white md:py-2 md:px-4 dark:text-white"
                      : "block py-2 pr-4 pl-3 text-white md:py-2 md:px-4 dark:text-white"
                  }
                >
                  Appointment
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/reviews"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#F7A582] block py-2 pr-4 pl-3 text-white md:py-2 md:px-4 dark:text-white"
                      : "block py-2 pr-4 pl-3 text-white md:py-2 md:px-4 dark:text-white"
                  }
                >
                  Reviews
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#F7A582] block py-2 pr-4 pl-3 text-white md:py-2 md:px-4 dark:text-white"
                      : "block py-2 pr-4 pl-3 text-white md:py-2 md:px-4 dark:text-white"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#F7A582] block py-2 pr-4 pl-3 text-white md:py-2 md:px-4 dark:text-white"
                      : "block py-2 pr-4 pl-3 text-white md:py-2 md:px-4 dark:text-white"
                  }
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
