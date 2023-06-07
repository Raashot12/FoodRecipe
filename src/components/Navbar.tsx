import {Link} from "react-router-dom"
import logo from "../img/logo.png"
import {useState} from "react"
const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
  const toggleHamburger = () => {
    setShowNav(!showNav)
  }
  const isBlogPath = window.location.pathname === "/blog"
  return (
    <header>
      <nav
        className="flex flex-wrap
          items-center
          justify-between
          w-full
          base:py-5
          px-4
          text-lg text-white
          absolute
          top-0
          z-50"
        style={{backgroundColor: isBlogPath ? "black" : "none"}}
      >
        <div className="cursor-pointer">
          <Link to={"/"}>
            <img src={logo} alt="" className="h-9 w-auto" />
          </Link>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={toggleHamburger}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div
          className={`${
            !showNav ? "hidden" : ""
          } w-full md:flex md:items-center base:bg-white md:bg-transparent md:w-auto text-black mt-3 rounded-sm px-2 base:py-3 md:py-0`}
          id="menu"
        >
          <ul
            className="
              text-lg	
            text-white
             
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <Link
                to={"/"}
                className="md:p-4 py-2 block hover:text-white-950 hover:font-bold hover:underline transition-all ease-out 0.5s text-black md:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/recipes"}
                className="md:p-4 py-2 block hover:text-white-950 hover:font-bold hover:underline transition-all ease-out 0.5s text-black md:text-white"
              >
                Recipes
              </Link>
            </li>
            <li>
              <Link
                className="md:p-4 py-2 block hover:text-white-950 hover:font-bold hover:underline transition-all ease-out 0.5s text-black md:text-white"
                to="/blog"
              >
                Blog
              </Link>
            </li>

            <li className="border-white bg-green-900 rounded-md text-white text-center">
              <a className="md:p-4 py-2 block hover:text-white" href="#">
                Shop
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
