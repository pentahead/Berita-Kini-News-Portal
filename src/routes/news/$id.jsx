import { useState, useEffect } from "react";
import { ThemeProvider } from "../../context/ThemeContext";
import {
  createFileRoute,
  useNavigate,
  useSearch,
} from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import Navbar from "../../components/Navbar/Navbar";
import DetailNews from "../../components/DetailNews/DetailNews";
import Terkait from "../../components/Popular/Terkait";
import Footer from "../../components/Footer/Footer";

export const Route = createFileRoute("/news/$id")({
  component: () => (
    <ThemeProvider>
      <RouteComponent />
    </ThemeProvider>
  ),
});

function RouteComponent() {
  const navigate = useNavigate();
  const search = useSearch({ from: "/news/$id" });
  const queryClient = useQueryClient();

  const [newsType, setNewsType] = useState(() => {
    return search.newsType && search.newsType !== ""
      ? search.newsType.toLowerCase()
      : "terbaru";
  });

  useEffect(() => {
    if (search.newsType && search.newsType !== "") {
      setNewsType(search.newsType.toLowerCase());
    }
  }, [search.newsType]);

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

  const handleNewsTypeChange = (type) => {
    const normalizedType = type.toLowerCase();
    setNewsType(normalizedType);

    queryClient.setQueryData(["activeNewsType"], normalizedType);

    navigate({
      to: "/",
      replace: true,
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar newsType={newsType} setNewsType={handleNewsTypeChange} />
      <DetailNews newsData={newsData} />
      <Terkait newsData={newsData} />
      <Footer setNewsType={handleNewsTypeChange} />
    </div>
  );
}
