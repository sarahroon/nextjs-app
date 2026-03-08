import "./globals.css";

export const metadata = {
  title: "Blog Posts",
  description:
    "Users can submit comments to express interest in different leisure activities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Load the font from Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bitcount+Grid+Double+Ink&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bitcount">{children}</body>
    </html>
  );
}
