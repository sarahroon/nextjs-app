import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Blog Posts",
  description:
    "Users can submit comments to express interest in different leisure activities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
