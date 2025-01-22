import { Link } from "@tanstack/react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSection = ({ newsData, newsType }) => {
  const getRandomNews = () => {
    if (!newsData || !newsData) return [];
    const shuffled = [...newsData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  };
  const randomNews = getRandomNews();
  if (!randomNews.length) return <div>Tidak ada berita untuk ditampilkan.</div>;
  return (
    <section className="py-8 my-10 dark:bg-gray-900">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        pagination={{ clickable: true }}
        className="max-w-7xl mx-auto"
      >
        {randomNews.map((news, index) => (
          <SwiperSlide key={news.id}>
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
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center hover:bg-gray-100 dark:hover:bg-gray-800">
                <div className="p-6">
                  <h2 className="text-sm text-blue-500 dark:text-blue-400 font-small mb-2">
                    Headline
                  </h2>
                  <h2 className="text-2xl md:text-3xl font-medium mb-4 dark:text-white">
                    {news.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{news.description}</p>
                  <p className="text-gray-500 text-sm mb-4 flex items-center space-x-2">
                    <span className="text-sm font-bold text-blue-500">
                      {newsType.charAt(0).toUpperCase() + newsType.slice(1)}
                    </span>
                    <span>•</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="size-5"
                    >
                      <path d="M5.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V12ZM6 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H6ZM7.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75V12ZM8 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H8ZM9.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V10ZM10 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H10ZM9.25 14a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V14ZM12 9.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V10a.75.75 0 0 0-.75-.75H12ZM11.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75V12ZM12 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H12ZM13.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H14a.75.75 0 0 1-.75-.75V10ZM14 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H14Z" />
                      <path
                        fill-rule="evenodd"
                        d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <span className="dark:text-gray-300">
                      {new Date(news.pubDate).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 font-medium hover:underline flex items-center space-x-2"
                  >
                    <span>Baca Selengkapnya →</span>
                  </a>
                </div>
                <div className="p-6 mb-4">
                  <img
                    src={news.thumbnail}
                    alt={news.title}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Tombol Navigasi */}
      <div className="flex justify-center space-x-4 mt-0">
        <button
          className="custom-prev text-gray-700 bg-gray-300 hover:bg-gray-400 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-400 rounded-full w-8 h-8 flex items-center justify-center"
          aria-label="Previous Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="size-5"
          >
            <path
              fill-rule="evenodd"
              d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button
          className="custom-next text-gray-700 bg-gray-300 hover:bg-gray-400 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-400 rounded-full w-8 h-8 flex items-center justify-center"
          aria-label="Next Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="size-5"
          >
            <path
              fill-rule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
