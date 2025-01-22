import { createLazyFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { ThemeProvider } from "../context/ThemeContext";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/Hero/Hero";
import PopularNews from "../components/Popular/Popular";
import Recommendations from "../components/Recommendation/Recommendation";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import LoadingScreen from "../components/Loading/Loading";
import {
  getTerbaru,
  getNasional,
  getInternasional,
  getOlahraga,
  getTeknologi,
  getHiburan,
} from "../services/News/News";

export const Route = createLazyFileRoute("/")({
  component: () => (
    <ThemeProvider>
      <Index />
    </ThemeProvider>
  ),
});

function Index() {
  const [newsType, setNewsType] = useState("terbaru");

  const fetchNews = () => {
    switch (newsType) {
      case "nasional":
        return getNasional;
      case "internasional":
        return getInternasional;
      case "olahraga":
        return getOlahraga;
      case "teknologi":
        return getTeknologi;
      case "hiburan":
        return getHiburan;
      default:
        return getTerbaru;
    }
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["news", newsType],
    queryFn: fetchNews(),
  });

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center">
        Terjadi kesalahan saat memuat berita.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar setNewsType={setNewsType} newsType={newsType} />
      <HeroSection newsData={data?.data?.posts || []} newsType={newsType} />
      <PopularNews newsData={data?.data?.posts || []} newsType={newsType} />
      <Recommendations newsData={data?.data?.posts || []} newsType={newsType} />
      <Carousel />
      <Footer />
    </div>
  );
}

export default Index;
