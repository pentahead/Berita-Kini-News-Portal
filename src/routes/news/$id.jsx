import { useState, useEffect } from "react";
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
      category: search.category,
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const [newsType, setNewsType] = useState("terbaru");
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
    category: search.category || "Berita",
  };

  
  return (
    <>
      <Navbar setNewsType={setNewsType} newsType={newsType} />
      <DetailNews newsData={newsData} />
      <Terkait newsData={newsData} />
      <Footer />
    </>
  );
}
