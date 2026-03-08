import "./globals.css";
import { Bitcount_Prop_Double_Ink } from "next/font/google";

const bitcount = Bitcount_Prop_Double_Ink({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Blog Posts",
  description:
    "Users can submit comments to express interest in different leisure activities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bitcount.className}>{children}</body>
    </html>
  );
}
