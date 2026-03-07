// pages/index.js
export default function Home() {
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>My Blog</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {/* Kayaking */}
        <div style={{ textAlign: "center" }}>
          <img
            src="/images/kayaking.jpg"
            alt="kayaking"
            width={400}
            height={300}
            style={{ borderRadius: "12px", display: "block" }}
          />
          <h3>Kayaking</h3>
        </div>

        {/* Knitting */}
        <div style={{ textAlign: "center" }}>
          <img
            src="/images/knitting.jpg"
            alt="knitting"
            width={400}
            height={300}
            style={{ borderRadius: "12px", display: "block" }}
          />
          <h3>Knitting</h3>
        </div>

        {/* Paragliding */}
        <div style={{ textAlign: "center" }}>
          <img
            src="/images/paragliding.jpg"
            alt="paragliding"
            width={400}
            height={300}
            style={{ borderRadius: "12px", display: "block" }}
          />
          <h3>Paragliding</h3>
        </div>
      </div>
    </div>
  );
}
