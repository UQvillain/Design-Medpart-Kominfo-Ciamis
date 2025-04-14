export default function MediaCard({ image, title }) {
    return (
      <div className="media-card-medpart">
        <img src={image} alt={title} className="media-image" />
        <div className="media-title">{title}</div>
      </div>
    );
  }
  