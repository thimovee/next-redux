import "../styles/globals.css";
import Header from "components/Header";
import Providers from "components/Providers";
import Footer from "components/Footer";
import { Quicksand } from '@next/font/google'
import Head from 'next/head'
import '../public/favicon.ico'
const quick = Quicksand({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={quick.className}>
      <head />
      <body className="bg-black">
        <Providers>
          <Head>
            <title>Next.js + TypeScript + Tailwind CSS</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}