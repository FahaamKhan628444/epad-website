import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "EastPoint Advertising",
  description:
    "Laser Cutting, ACP Boards, LED Acrylic Letters, Flex Printing & Signage Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        {/* <WhatsAppButton /> */}
      </body>
    </html>
  );
}