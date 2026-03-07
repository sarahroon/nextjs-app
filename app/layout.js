import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "My Blog",
  description: "Blog posts about leisure activities",
};

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
