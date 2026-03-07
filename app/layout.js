export const metadata = {
  title: "Blog Posts",
  description: "Blog posts about my favourite animals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
