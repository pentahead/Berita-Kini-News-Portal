import { useQuery } from "@tanstack/react-query";
import { getTerbaru } from "../../services/News/News";

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

  if (isLoading) return <div>Loading...</div>;

  if (isError) {
    return <div>Terjadi kesalahan saat memuat data.</div>;
  }
  const randomNews = getRandomNews();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-xl font-bold border-l-4 border-blue-500 pl-2 mb-6">
        Berita Terpopuler
      </h2>
      <div className="flex flex-col space-y-6">
        {randomNews.map((item, index) => (
          <div key={item.id} className="flex items-start space-x-4">
            <div className="relative">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="rounded-lg w-20 h-20 object-cover"
              />
              <span className="absolute top-0 left-0 bg-blue-900 text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">
                {index + 1}
              </span>
            </div>
            <div>
              <a
                href="#"
                className="text-blue-500 text-sm font-medium hover:underline"
              >
                {item.category}
              </a>
              <h3 className="text-sm font-semibold text-gray-800 leading-tight mt-1">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 mt-2">
                {new Date(item.pubDate).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailPopularNews;
