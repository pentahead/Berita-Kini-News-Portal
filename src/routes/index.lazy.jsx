import { createLazyFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/Hero/Hero";
import PopularNews from "../components/Popular/Popular";
import Recommendations from "../components/Recommendation/Recommendation";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import {
  getTerbaru,
  getNasional,
  getInternasional,
  getOlahraga,
  getTeknologi,
  getHiburan,
} from "../services/News/News";

export const Route = createLazyFileRoute("/")({
  component: () => <Index />,
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
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Terjadi kesalahan saat memuat berita.</div>;
  }

  return (
    <>
      <Navbar setNewsType={setNewsType} newsType={newsType} />
      <HeroSection newsData={data?.data?.posts || []} />
      <PopularNews newsData={data?.data?.posts || []} />
      <Recommendations newsData={data?.data?.posts || []} />
      <Carousel />
      <Footer />
    </>
  );
}

export default Index;
