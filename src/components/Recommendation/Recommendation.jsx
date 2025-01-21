import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { getTerbaru } from "../../services/News/News";

const Recommendations = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ["getTerbaru"],
    queryFn: getTerbaru,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Terjadi kesalahan saat memuat data.</div>;
  }

  const totalItems = data?.data?.posts?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const currentItems = data?.data?.posts?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold border-l-4 border-blue-500 pl-2">
          Rekomendasi Untuk Anda
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Cari disini..."
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">
            🔍
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {isSuccess &&
          currentItems?.map((news) => (
            <Link
              key={news.title}
              to="/news/$id"
              search={{
                title: news.title,
                thumbnail: news.thumbnail,
                pubDate: news.pubDate,
                description: news.description,
              }} 
            >
              <div
                className="bg-white rounded-lg shadow-md overflow-hidden"
                key={news.title}
              >
                <img
                  src={news.thumbnail}
                  alt={news.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-800 leading-tight mt-1">
                    {news.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-2">
                    {new Date(news.pubDate).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-end items-center mt-8 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 text-gray-600 hover:text-blue-500 disabled:text-gray-400"
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
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 hover:text-blue-500"
                }`}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 text-gray-600 hover:text-blue-500 disabled:text-gray-400"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default Recommendations;
