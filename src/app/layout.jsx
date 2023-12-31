import Header from '@/components/Header'
import './globals.scss'
import { Roboto } from 'next/font/google'
import Footer from '@/components/Footer'

const roboto = Roboto({ 
  subsets: ['latin'], 
  weight: ['400' , '900']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${roboto.className} bg-slate-100`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
