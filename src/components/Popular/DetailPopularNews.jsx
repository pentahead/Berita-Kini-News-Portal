import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getTerbaru } from "../../services/News/News";
import LoadingScreen from "../Loading/Loading";

const DetailPopularNews = () => {
  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ["getTerbaru"],
    queryFn: getTerbaru,
  });

  const getRandomNews = () => {
    if (!data || !data.data.posts) return [];
    const shuffled = [...data.data.posts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  if (isLoading) return <LoadingScreen />;

  if (isError) {
    return (
      <div className="flex items-center justify-center">
        Terjadi kesalahan saat memuat data.
      </div>
    );
  }
  const randomNews = getRandomNews();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-xl font-bold border-l-4 border-blue-500 pl-2 mb-6 text-gray-900 dark:text-white">
        Berita Terpopuler
      </h2>
      <div className="flex flex-col space-y-6">
        {randomNews.map((news, index) => (
          <Link
            key={news.title}
            to="/news/$id"
            params={{ id: index.toString() }}
            search={{
              title: news.title,
              thumbnail: news.thumbnail,
              pubDate: news.pubDate,
              description: news.description,
              category: news.category,
            }}
            className="block hover:shadow-lg transition-shadow duration-200"
          >
            <div key={news.id} className="flex items-start space-x-4">
              <div className="relative">
                <div className="aspect-w-1 aspect-h-1 w-20 h-20">
                  <img
                    src={news.thumbnail}
                    alt={news.title}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <span className="absolute top-1 left-1 bg-blue-900 text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
              <div>
                <span
                  className="text-blue-500 dark:text-blue-400 text-sm font-medium hover:underline"
                >
                  {news.category}
                </span>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-tight mt-1">
                  {news.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
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
    </div>
  );
};

export default DetailPopularNews;
