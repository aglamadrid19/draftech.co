import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
// components

// import PagesDropdown from "components/Dropdowns/PagesDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-black fas fa-bars"></i>
            </button>
            <div className="ml-auto mx-auto">
              <Link 
                to="hero"
                spy={true}
                smooth={true}
              >
                <a href="">
                  <img src={require("assets/img/logo.svg")} width="100%"></img>
                </a>
              </Link>
            </div>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              {/* <li className="flex items-center">
                <Link href="/index.js">
                  <a>
                    <img src={require("assets/img/logo.svg")} width="100%"></img>
                  </a>
                </Link>
              </li> */}
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {/* <li className="flex items-center">
                <PagesDropdown />
              </li> */}
              <li className="flex nav-item">
                <Link 
                  to="hero"
                  spy={true}
                  smooth={true}
                >
                  <a
                    className="lg:text-black lg:hover:text-black text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href=""
                  >
                    Home
                  </a>
                </Link>
              </li>

              <li className="flex nav-item">
                <Link 
                  to="services"
                  spy={true}
                  smooth={true}
                >
                  <a
                    className="lg:text-black lg:hover:text-black text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href=""
                  >
                    Services
                  </a>
                </Link>
              </li>

              <li className="flex nav-item">
                <Link 
                  to="contact"
                  spy={true}
                  smooth={true}
                >
                  <a
                    className="lg:text-black text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href=""
                  >
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
