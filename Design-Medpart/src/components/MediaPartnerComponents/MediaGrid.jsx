import MediaCard from "./MediaCard";

export default function MediaGrid({ items }) {
  if (items.length === 0) {
    return <p className="Tidak">Media partner tidak ditemukan.</p>;
  }

  return (
    <div className="media-grid-medpart">
      {items.map((media) => (
        <MediaCard key={media.id} image={media.image} title={media.title} />
      ))}
    </div>
  );
}
