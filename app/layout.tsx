import "./globals.css";
import { Open_Sans } from "next/font/google";
import Navbar from "app/(shared)/Navbar";
import Footer from "app/(shared)/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Knot for everyone",
  description: "Knot for everyone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={openSans.className} lang="en">
      <body className="bg-accent-blue">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
