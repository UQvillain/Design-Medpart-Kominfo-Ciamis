import { useParams, Link } from "react-router-dom";
import { mediaData } from "../Content";

export default function BeritaDetail() {
  const { id } = useParams();
  const beritaId = parseInt(id);
  const berita = mediaData.find((item) => item.id === beritaId);

  if (!berita) return <p className="not-found">Berita tidak ditemukan.</p>;

  // Ambil 4 berita selain berita yang sedang dilihat
  const related = mediaData.filter((item) => item.id !== beritaId).slice(0, 4);

  return (
    <div className="berita-detail-container">
      <div className="berita-main">
        <h1 className="berita-title">{berita.title}</h1>
        <img src={berita.image} alt={berita.title} className="berita-img" />
        <p className="berita-date">
          <strong>Tanggal Rilis:</strong> {berita.releaseDate}
        </p>
        <p className="penulis">
          <strong>Penulis:</strong> {berita.author}
        </p>
        <div className="deskripsiBerita">
          <p className="deskripsi">{berita.description}</p>
          <p className="deskripsi">{berita.description2}</p>
        </div>
      </div>

      <aside className="berita-side">
        <h3>Berita Lainnya</h3>
        {related.map((item) => (
          <Link
            to={`/berita/${item.id}`}
            key={item.id}
            className="related-card"
          >
            <img src={item.image} alt={item.title} />
            <div>
              <h4>{item.title}</h4>
              <p className="small">{item.releaseDate}</p>
            </div>
          </Link>
        ))}
      </aside>
    </div>
  );
}
