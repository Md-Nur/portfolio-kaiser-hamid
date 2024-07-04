import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Md. Nur E Alam Siddiquee - Portfolio || Md. Nur E Alam Siddiquee is a undergraduate student at University of Rajshahi",
  description:
    "Welcome to the website of Md. Nur E Alam Siddiquee, a undergraduate student at University of Rajshahi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" id="mainHtml">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
