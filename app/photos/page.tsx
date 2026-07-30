import type { Metadata } from "next";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "photos",
};

export default function PhotosPage() {
  return (
    <div className="photo-page">
      <header className="photo-header">
        <h1 className="photo-heading titles">photos</h1>
        <p className="photo-sub">a few frames from around.</p>
      </header>

      <div className="photo-gallery">
        {photos.map((photo) => (
          <figure
            key={photo.file}
            className={`photo-item tooltip-container${photo.wide ? " photo-item--wide" : ""}`}
          >
            <div className="photo-frame">
              <img
                src={`/assets/photography/${photo.file}`}
                alt={photo.title}
              />
            </div>
            {photo.title !== "untitled" ? (
              <div className="tooltip">
                <strong>{photo.title}.</strong> {photo.place}. {photo.year}.
              </div>
            ) : null}
          </figure>
        ))}
      </div>
    </div>
  );
}
