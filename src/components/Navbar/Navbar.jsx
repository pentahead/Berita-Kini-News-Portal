import { useEffect, useState } from "react";
import { useNavigate, Link } from "@tanstack/react-router";
import { useTheme } from "../../context/ThemeContext";
import logo from "../../assets/logo.svg";
import logowhite from "../../assets/logo-white.svg";

export default function Navbar({ setNewsType, newsType }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

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
    setIsMobileMenuOpen(false);
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
        isScrolled
          ? "bg-blue-800 dark:bg-gray-900"
          : "bg-white dark:bg-gray-800"
      } fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 transition-colors duration-300`}
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

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-sticky"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Buka menu utama</span>
          <svg
            className={`w-5 h-5 ${isScrolled ? "text-white" : "text-gray-800"}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Menu Desktop dan Mobile */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col items-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
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
                  to={`#${type}`}
                  onClick={() => handleNavClick(type)}
                  className={getLinkClassNames(type)}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </Link>
              </li>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              aria-label="Toggle dark mode"
            >
              {theme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              )}
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
