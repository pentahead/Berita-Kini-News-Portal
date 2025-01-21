import { Link } from "@tanstack/react-router";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import logo from "../../assets/logo-white.svg";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12 px-6">
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
                <a href="#" className="hover:text-blue-400">
                  <FaYoutube size={24} />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <FaFacebook size={24} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Telusuri</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/kesehatan" className="hover:text-blue-400">
                  Kesehatan
                </Link>
              </li>
              <li>
                <Link to="/otomotif" className="hover:text-blue-400">
                  Otomotif
                </Link>
              </li>
              <li>
                <Link to="/politik" className="hover:text-blue-400">
                  Politik
                </Link>
              </li>
              <li>
                <Link to="/olahraga" className="hover:text-blue-400">
                  Olahraga
                </Link>
              </li>
              <li>
                <Link to="/nasional" className="hover:text-blue-400">
                  Nasional
                </Link>
              </li>
              <li>
                <Link to="/internasional" className="hover:text-blue-400">
                  Internasional
                </Link>
              </li>
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
                className="px-4 py-2 rounded-l-md text-gray-800 w-full"
              />
              <button className="bg-blue-500 px-4 py-2 rounded-r-md hover:bg-blue-600">
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
