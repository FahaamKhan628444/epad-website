import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AppleLoader from "@/components/AppleLoader";

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
        <AppleLoader>
          <Navbar />
          {children}
          <Footer />
          {/* <WhatsAppButton /> */}
        </AppleLoader>
      </body>
    </html>
  );
}