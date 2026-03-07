// components/ImageGallery.js
import Image from "next/image";

export default function ImageGallery({ images }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      {images.map((img) => (
        <div key={img} style={{ textAlign: "center" }}>
          <Image
            src={`/images/${img}`}
            alt={img.replace(/\.[^/.]+$/, "")} // remove extension for caption
            width={400}
            height={300}
            style={{ borderRadius: "12px", display: "block" }}
          />
          <h3>{img.replace(/\.[^/.]+$/, "")}</h3>
        </div>
      ))}
    </div>
  );
}
