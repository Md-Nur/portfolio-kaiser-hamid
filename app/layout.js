import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Kaiser Hamid - Portfolio || Kaiser Hamid is a undergraduate student at Bangladesh University of Engineering and Technology.",
  description:
    "Welcome to the website of Kaiser Hamid, a undergraduate student at Bangladesh University of Engineering and Technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" id="mainHtml">
      <body
        className={`${inter.className} bg-color4 dark:bg-color1 text-color1 dark:text-color4`}
      >
        {children}
      </body>
    </html>
  );
}
