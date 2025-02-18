import { Link } from "@tanstack/react-router";
import logo from "../../assets/logo-white.svg";

const Footer = ({ setNewsType }) => {
  const handleNavClick = (type) => {
    setNewsType(type);
  };
  return (
    <footer className="bg-slate-800 dark:bg-gray-800 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10">
                <img src={logo} alt="logo" />
              </div>
              <h2 className="text-2xl font-bold">Berita Kini</h2>
            </div>
            <p className="text-sm">© 2023 Berita Kini. All Rights Reserved.</p>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
              <div className="flex space-x-4">
                <a
                  href="youtube.com"
                  className="hover:text-blue-400"
                  alt="Yt"
                  aria-label="yt"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-youtube"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </a>
                <a
                  href="instagram.com"
                  className="hover:text-blue-400"
                  alt="IG"
                  aria-label="ig"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="facebook.com"
                  className="hover:text-blue-400"
                  alt="FB"
                  aria-label="fb"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Telusuri</h3>
            <ul className="space-y-2">
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
                    className="hover:text-blue-400"
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Bantuan</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/kontak" className="hover:text-blue-400">
                  Kontak Kami
                </Link>
              </li>
              <li>
                <Link to="/laporan" className="hover:text-blue-400">
                  Laporan Pembajakan
                </Link>
              </li>
              <li>
                <Link to="/kebijakan" className="hover:text-blue-400">
                  Kebijakan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Berlangganan Berita Terbaru
            </h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Masukan email"
                className="px-4 py-2 rounded-l-md text-gray-800 dark:text-white dark:bg-gray-700 w-full"
              />
              <button
                className="bg-blue-500 px-4 py-2 rounded-r-md hover:bg-blue-600"
                alt="langganan"
                id="langganan"
                aria-label="langganan"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
