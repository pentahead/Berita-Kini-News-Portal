import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image from "../../assets/carousel.svg";

const Carousel = () => {
  const data = Array(3).fill(image);

  return (
    <section className="py-8 my-10 px-2 dark:bg-gray-900">
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
        {data.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-64 md:h-96">
              <img
                src={img}
                alt={`Carousel image ${index + 1}`}
                className="absolute w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center space-x-4 mt-4">
        <button
          className="custom-prev text-gray-700 bg-gray-300 hover:bg-gray-400 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-400 rounded-full w-8 h-8 flex items-center justify-center"
          aria-label="Previous Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
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
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
