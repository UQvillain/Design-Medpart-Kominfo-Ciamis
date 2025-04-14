import React, { useState } from "react";
import PageTitle from "../components/layouts/PageTitle";
import SearchBar from "../components/layouts/SearchBar";
import MediaCard from "../components/BeritaComponents/MediaCard";
import Pagination from "../components/layouts/Pagination";
import { mediaData } from "../Content";



export default function Berita() {
  const [searchTerm, setSearchTerm] = useState("");
    const [filteredMedia, setFilteredMedia] = useState(mediaData);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
  
    const handleSearch = () => {
      const filtered = mediaData.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredMedia(filtered);
      setCurrentPage(1);
    };
  
    const totalPages = Math.ceil(filteredMedia.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredMedia.slice(
      startIndex,
      startIndex + itemsPerPage
    );

  return (
    <main className="main-content">
      <PageTitle />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <div className="media-grid">
        {currentItems.length > 0 ? (
          currentItems.map((media) => (
            <MediaCard
              key={media.id}
              id={media.id}
              title={media.title}
              image={media.image}
              description={
                media.description.split(". ").slice(0, 1).join(". ") + "."
              }
              author={media.author}
              releaseDate={media.releaseDate}
            />
          ))
        ) : (
          <p className="Tidak">Kata kunci tidak ditemukan.</p>
        )}
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setPage={setCurrentPage}
        />
      )}
    </main>
  );
}
