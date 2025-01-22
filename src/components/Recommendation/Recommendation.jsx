import { Link } from "@tanstack/react-router";
import { useState } from "react";

const Recommendations = ({ newsData, newsType }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const itemsPerPage = 8;

  if (!newsData.length)
    return (
      <div className="flex items-center justify-center">
        Tidak ada berita untuk ditampilkan.
      </div>
    );

  const filteredNews = newsData.filter((news) => {
    const keyword = searchKeyword.toLowerCase();
    return (
      news.title.toLowerCase().includes(keyword) ||
      news.description.toLowerCase().includes(keyword)
    );
  });

  const totalItems = newsData.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const currentItems = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 dark:bg-gray-900">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold border-l-4 border-blue-500 pl-2 dark:text-white">
          Rekomendasi Untuk Anda
        </h2>
        <div className="relative">
          <input
            type="text"
            value={searchKeyword}
            onChange={handleSearch}
            placeholder="Cari disini..."
            className="border border-gray-300 dark:text-white dark:bg-gray-700 dark:border-gray-600 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentItems?.map((news) => (
          <Link
            key={news.title}
            to="/news/$id"
            search={{
              title: news.title,
              thumbnail: news.thumbnail,
              pubDate: news.pubDate,
              description: news.description,
              newsType: newsType,
            }}
            className="block hover:shadow-lg transition-shadow duration-200"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-64 flex flex-col">
              <div className="w-full h-32 overflow-hidden">
                <img
                  src={news.thumbnail}
                  alt={news.title}
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow ">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-white line-clamp-2 leading-tight">
                  {news.title}
                </h3>
                <div className="flex space-x-2 items-center mt-auto">
                  <span className="text-sm font-bold text-blue-500">
                    {newsType.charAt(0).toUpperCase() + newsType.slice(1)}
                  </span>
                  <span>•</span>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(news.pubDate).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-between items-center mt-8 space-x-2">
        <div className="flex items-center">
          <p className="text-sm font-medium text-gray-400">
            Menampilkan {currentItems.length} dari {totalItems} berita
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 text-gray-600 hover:bg-gray-200 hover:text-blue-500 disabled:text-gray-400 dark:text-white dark:hover:text-white dark:hover:bg-gray-800 dark:disabled:text-gray-600"
          >
            ← Previous
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;

            if (
              totalPages > 7 &&
              pageNumber !== 1 &&
              pageNumber !== totalPages &&
              (pageNumber < currentPage - 1 || pageNumber > currentPage + 1)
            ) {
              if (pageNumber === 2 || pageNumber === totalPages - 1) {
                return <span key={pageNumber}>...</span>;
              }
              return null;
            }

            return (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`w-8 h-8 flex items-center justify-center rounded-md
                  ${
                    currentPage === pageNumber
                      ? "bg-blue-800 text-white dark:text-white dark:bg-gray-700"
                      : "text-gray-600 hover:text-blue-500 hover:bg-gray-200 dark:text-gray-600 dark:hover:text-gray-600 dark:hover:bg-gray-200"
                  }`}
              >
                {pageNumber}
              </button>
            );
          })}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-gray-600 hover:bg-gray-200 hover:text-blue-500 disabled:text-gray-400 dark:text-white dark:hover:text-white dark:hover:bg-gray-800 dark:disabled:text-gray-600"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
