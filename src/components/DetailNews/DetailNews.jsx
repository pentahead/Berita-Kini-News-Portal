import { Link } from "@tanstack/react-router";
import DetailPopularNews from "../Popular/DetailPopularNews";
import Comment from "../Comment/Comment";

function DetailNews({ newsData }) {
  if (!newsData)
    return (
      <div className="flex items-center justify-center dark:text-gray-200">
        Berita tidak ditemukan
      </div>
    );
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-2">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 flex space-x-2 items-center"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="size-4"
                  >
                    <path d="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z" />
                  </svg>
                </span>
                <span>Beranda</span>
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2 text-gray-400 dark:text-gray-600">/</span>
              <Link href="/" className="text-gray-600 dark:text-gray-600 hover:text-blue-500 dark:hover:text-blue-400">
                {newsData.newsType &&
                  newsData.newsType.charAt(0).toUpperCase() +
                    newsData.newsType.slice(1)}
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2 text-gray-400 dark:text-gray-600">/</span>
              <span className="text-gray-800 dark:text-gray-200">Detail</span>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <article>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {newsData.title}
              </h1>
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
                <span className="text-sm font-bold text-blue-500 dark:text-blue-400">
                  {newsData.newsType &&
                    newsData.newsType.charAt(0).toUpperCase() +
                      newsData.newsType.slice(1)}
                </span>

                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="size-4"
                  >
                    <path d="M5.75 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM5 10.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM10.25 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7.25 8.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM8 9.5A.75.75 0 1 0 8 11a.75.75 0 0 0 0-1.5Z" />
                    <path
                      fill-rule="evenodd"
                      d="M4.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-5V1.75A.75.75 0 0 0 4.75 1ZM3.5 7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span>
                  {new Date(newsData.pubDate).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <img
                src={newsData.thumbnail}
                alt={newsData.title}
                className="w-full h-[400px] object-cover rounded-lg mb-6"
              />
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {newsData.description}
                </p>
              </div>
            </article>
          </div>

          <div className="lg:col-span-1 w-full">
            <div className="max-w-sm">
              <DetailPopularNews />
            </div>
          </div>
        </div>
        <Comment />
      </div>
    </>
  );
}

export default DetailNews;
