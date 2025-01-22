import { useState, useEffect } from "react";
import { ThemeProvider } from "../../context/ThemeContext";
import {
  createFileRoute,
  useNavigate,
  useSearch,
} from "@tanstack/react-router";
import Navbar from "../../components/Navbar/Navbar";
import DetailNews from "../../components/DetailNews/DetailNews";
import Terkait from "../../components/Popular/Terkait";
import Footer from "../../components/Footer/Footer";

export const Route = createFileRoute("/news/$id")({
  validateSearch: (search) => {
    return {
      title: search.title,
      thumbnail: search.thumbnail,
      pubDate: search.pubDate,
      description: search.description,
      newsType: search.newsType,
    };
  },
  component: () => (
    <ThemeProvider>
      <RouteComponent />
    </ThemeProvider>
  ),
});

function RouteComponent() {
  // const [newsType, setNewsType] = useState("terbaru");
  const navigate = useNavigate();
  const search = useSearch({ from: "/news/$id" });

  if (!search.title) {
    navigate({ to: "/" });
    return null;
  }

  const newsData = {
    title: search.title,
    thumbnail: search.thumbnail,
    pubDate: search.pubDate,
    description: search.description,
    newsType: search.newsType || "Berita",
  };

  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar
        // setNewsType={setNewsType}
        newsType={newsData.newsType}
      />
      <DetailNews newsData={newsData} />
      <Terkait newsData={newsData} />
      <Footer />
    </div>
  );
}
