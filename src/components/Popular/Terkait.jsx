import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getTerbaru } from "../../services/News/News";

const Terkait = () => {
  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ["getTerbaru"],
    queryFn: getTerbaru,
  });

  const getRandomNews = () => {
    if (!data || !data.data.posts) return [];
    const shuffled = [...data.data.posts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  if (isLoading) return <div>Loading...</div>;

  if (isError) {
    return <div>Terjadi kesalahan saat memuat data.</div>;
  }
  const randomNews = getRandomNews();
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-xl font-bold border-l-4 border-blue-500 pl-2 mb-6">
        Berita Terkait
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
            <div className="flex items-start space-x-4 bg-white rounded-lg shadow-md overflow-hidden p-4">
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
                <span className="text-blue-500 text-sm font-medium">
                  {news.category}
                </span>
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
    </div>
  );
};

export default Terkait;
