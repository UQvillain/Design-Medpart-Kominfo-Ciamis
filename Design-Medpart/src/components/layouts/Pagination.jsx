export default function Pagination({ currentPage, totalPages, setPage }) {
  const handlePrev = () => {
    if (currentPage > 1) setPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setPage(currentPage + 1);
  };

  return (
    <div className="pagination">
      <button onClick={handlePrev} disabled={currentPage === 1}>
        ←
      </button>
      <span>Halaman</span>
      <select
        value={currentPage}
        onChange={(e) => setPage(Number(e.target.value))}
      >
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <option key={page} value={page}>
            {page}
          </option>
        ))}
      </select>
      <span>dari {totalPages}</span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        →
      </button>
    </div>
  );
}
