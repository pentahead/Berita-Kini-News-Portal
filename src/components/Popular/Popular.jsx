import { Link } from "@tanstack/react-router";

const PopularNews = ({ newsData, newsType }) => {
  const getRandomNews = () => {
    if (!newsData || !newsData) return [];
    const shuffled = [...newsData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const randomNews = getRandomNews();

  if (!randomNews.length)
    return (
      <div className="flex items-center justify-center">
        Tidak ada berita untuk ditampilkan.
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 dark:bg-gray-900">
      <h2 className="text-xl font-bold border-l-4 border-blue-500 pl-2 mb-6 dark:text-white">
        Berita Terpopuler
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {randomNews.map((news, index) => (
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
            <div
              key={news.id}
              className="flex items-start space-x-4 dark:bg-gray-800 bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative">
                <img
                  src={news.thumbnail}
                  alt={news.title}
                  className="rounded-lg w-48 h-32 object-cover"
                />
                <span className="absolute top-0 left-0 bg-blue-900 text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
              <div className="flex-1">
                <span className="text-blue-500 text-sm font-medium hover:underline">
                  {news.category}
                </span>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-white leading-tight mt-1">
                  {news.title}
                </h3>
                <div className="flex space-x-2 items-center inset-x-0 bottom-0 ">
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
    </div>
  );
};

export default PopularNews;
