import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Kaiser Hamid - Portfolio || Kaiser Hamid is a undergraduate student at Bangladesh University of Engineering and Technology.',
  description: 'Welcome to the website of Kaiser Hamid, a undergraduate student at Bangladesh University of Engineering and Technology.',
  url: 'https://github.com/Md-Nur/portfolio-kaiser-hamid',
  author: 'Kaiser Hamid',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" id="mainHtml">
      <body className={inter.className+ " dark:bg-color1 bg-color4 text-color1 dark:text-color4"}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
