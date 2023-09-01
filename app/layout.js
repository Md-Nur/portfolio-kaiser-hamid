import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kayser Hamid',
  description: 'Kayser Hamid\'s personal website',
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
