import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <Image
        src="/images/background.jpg"
        alt="Background"
        fill
        priority
        style={{ objectFit: "cover" }}
      />

      <div className="backgroundContent">
        <h1>My Blog</h1>
        <p>Leisure activities such as paragliding, kayaking and knitting.</p>
      </div>
    </section>
  );
}
