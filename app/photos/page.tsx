import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "photos",
};

type Photo = {
  src: string;
  caption: React.ReactNode;
  wide?: boolean;
};

const photos: Photo[] = [
  {
    src: "/assets/photography/000020940011.jpg",
    caption: (
      <>
        <strong>my sister.</strong> stockholm, sweden. 2024.
      </>
    ),
    wide: true,
  },
  {
    src: "/assets/photography/19440001.JPG",
    caption: (
      <>
        <strong>the painted ladies.</strong> san francisco, ca. 2024.
      </>
    ),
  },
  {
    src: "/assets/photography/000020940036.jpg",
    caption: (
      <>
        <strong>snowy gamla stan.</strong> stockholm, sweden. 2024.
      </>
    ),
    wide: true,
  },
  {
    src: "/assets/photography/19450004.JPG",
    caption: (
      <>
        <strong>isa.</strong> yosemite, ca. 2024.
      </>
    ),
  },
  {
    src: "/assets/photography/19450006.JPG",
    caption: (
      <>
        <strong>trees.</strong> yosemite, ca. 2024.
      </>
    ),
  },
  {
    src: "/assets/photography/19450012.JPG",
    caption: (
      <>
        <strong>port.</strong> monterey, ca. 2024.
      </>
    ),
    wide: true,
  },
  {
    src: "/assets/photography/19450014.JPG",
    caption: (
      <>
        <strong>monterey ice cream.</strong> monterey, ca. 2024.
      </>
    ),
  },
  {
    src: "/assets/photography/19450018.JPG",
    caption: (
      <>
        <strong>golden gate bridge.</strong> san francisco, ca. 2024.
      </>
    ),
  },
  {
    src: "/assets/photography/19450024.JPG",
    caption: (
      <>
        <strong>italian parade.</strong> san francisco, ca. 2024.
      </>
    ),
    wide: true,
  },
  {
    src: "/assets/photography/19450025.JPG",
    caption: (
      <>
        <strong>fisherman&apos;s wharf.</strong> san francisco, ca. 2024.
      </>
    ),
  },
  {
    src: "/assets/photography/19450031.JPG",
    caption: (
      <>
        <strong>the actual painted ladies.</strong> san francisco, ca. 2024.
      </>
    ),
  },
  {
    src: "/assets/photography/19450032.JPG",
    caption: (
      <>
        <strong>chinatown.</strong> san francisco, ca. 2024.
      </>
    ),
    wide: true,
  },
  {
    src: "/assets/photography/19450034.JPG",
    caption: (
      <>
        <strong>alamo square.</strong> san francisco, ca. 2024.
      </>
    ),
  },
  {
    src: "/assets/photography/44800032.JPG",
    caption: (
      <>
        <strong>mirror lake.</strong> yosemite, ca. 2024.
      </>
    ),
    wide: true,
  },
];

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
            key={photo.src}
            className={`photo-item tooltip-container${photo.wide ? " photo-item--wide" : ""}`}
          >
            <div className="photo-frame">
              <img src={photo.src} alt="Photograph" />
            </div>
            <div className="tooltip">{photo.caption}</div>
          </figure>
        ))}
      </div>
    </div>
  );
}
