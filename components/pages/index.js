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
        <div style={{ textAlign: "center" }}>
          <img
            src="/images/kayaking.jpg"
            alt="Kayaking"
            width={400}
            height={300}
            style={{ borderRadius: "12px", display: "block" }}
          />
          <h3>Kayaking</h3>
        </div>

        <div style={{ textAlign: "center" }}>
          <img
            src="/images/knitting.jpg"
            alt="Knitting"
            width={400}
            height={300}
            style={{ borderRadius: "12px", display: "block" }}
          />
          <h3>Knitting</h3>
        </div>

        <div style={{ textAlign: "center" }}>
          <img
            src="/images/paragliding.jpg"
            alt="Paragliding"
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
