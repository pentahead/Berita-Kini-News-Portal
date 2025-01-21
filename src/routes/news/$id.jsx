import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import DetailNews from "../../components/DetailNews/DetailNews";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export const Route = createFileRoute("/news/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const [newsType, setNewsType] = useState("terbaru");

  const search = new URLSearchParams(location.search);
  const title = search.get("title");
  if (!title) {
    return <div>Data tidak ditemukan</div>;
  }

  const newsData = {
    title: title,
    thumbnail: search.get("thumbnail"),
    pubDate: search.get("pubDate"),
    description: search.get("description"),
  };

  return (
    <>
      <Navbar setNewsType={setNewsType} newsType={newsType} />
      <DetailNews newsData={newsData} />
      <Footer />
    </>
  );
}
