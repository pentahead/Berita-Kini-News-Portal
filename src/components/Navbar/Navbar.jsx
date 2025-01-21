import { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import logowhite from "../../assets/logo-white.svg";
import { useNavigate, Link } from "@tanstack/react-router";

export default function Navbar({ setNewsType, newsType }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (type) => {
    setNewsType(type);
    navigate({ to: "/" });
  };

  const getLinkClassNames = (type) => {
    return `block py-2 pr-4 pl-3 rounded md:p-0 ${
      newsType === type
        ? `text-${isScrolled ? "gray-800" : "blue-500"} dark:text-${
            isScrolled ? "gray-400" : "blue-500"
          }`
        : `text-${isScrolled ? "white" : "gray-800"} dark:text-gray-400 hover:text-gray-900 dark:hover:text-white`
    }`;
  };

  return (
    <nav
      className={`${
        isScrolled ? "bg-blue-800" : "bg-white"
      } dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 transition-colors duration-300`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={isScrolled ? logowhite : logo}
            className="h-8"
            alt="Berita Kini Logo"
          />
          <span
            className={`${
              isScrolled
                ? "text-white md:text-white"
                : "md:text-gray-800 md:dark:text-blue-500"
            } self-center text-2xl font-semibold whitespace-nowrap`}
          >
            Berita Kini
          </span>
        </Link>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
            {[
              "terbaru",
              "hiburan",
              "teknologi",
              "ekonomi",
              "olahraga",
              "nasional",
              "internasional",
            ].map((type) => (
              <li key={type}>
                <Link
                  to="#"
                  onClick={() => handleNavClick(type)}
                  className={getLinkClassNames(type)}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
