import { useLocation } from "react-router-dom";

export default function SearchBar({ searchTerm, setSearchTerm, handleSearch }) {
  const location = useLocation();

  const getPlaceholder = () => {
    switch (location.pathname) {
      case "/MediaPartner":
        return "Cari media partner";
      case "/Berita":
        return "Cari berita";
      default:
        return "Cari sesuatu";
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder={getPlaceholder()}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-btn" onClick={handleSearch}>
        Cari
      </button>
    </div>
  );
}
