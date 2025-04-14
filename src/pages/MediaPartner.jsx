import React, { useState } from "react";
import PageTitle from "../components/layouts/PageTitle";
import SearchBar from "../components/layouts/SearchBar";
import MediaGrid from "../components/MediaPartnerComponents/MediaGrid";
import Pagination from "../components/layouts/Pagination";
import { mediaPartner } from "../Content.js"; // ⬅️ Import dari conten.js

export default function MediaPartner() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMedia, setFilteredMedia] = useState(mediaPartner);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handleSearch = () => {
    const filtered = mediaPartner.filter((item) =>
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
      <MediaGrid items={currentItems} />
      {filteredMedia.length > itemsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setPage={setCurrentPage}
        />
      )}
    </main>
  );
}
