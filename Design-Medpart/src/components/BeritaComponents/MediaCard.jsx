import React from "react";
import { useNavigate } from "react-router-dom";

export default function MediaCard({
  id,
  title,
  image,
  description,
  author,
  releaseDate,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/berita/${id}`);
  };

  return (
    <div className="media-card">
      <div className="media-image">
        <img src={image} alt={title} />
      </div>
      <div className="media-content">
        <h3>{title}</h3>
        <p className="release-date">Tanggal Rilis: {releaseDate}</p>
        <p>{description}</p>
        <p className="author">Penulis: {author}</p>
        <button className="media-btn" onClick={handleClick}>
          Baca Selengkapnya
        </button>
      </div>
    </div>
  );
}
