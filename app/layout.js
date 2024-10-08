import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar/navbar";
import { DarkProvider } from "./providers/darkProvider";
import StairsClient from "./components/stairsNav/stairsClient";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

/* export const metadata = {
  title: "Ancient Asia Minor ",
  description: "Generated by create next app",
}; */
export const metadata = {
  title: "Ancient Asia Minor",
  description: "Ancient sites and cities of Türkiye",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
{/*       <head>

        <link rel="icon" href="/favicon.ico" />

        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head> */}
              <link rel="icon" href="/favicon.svg" sizes="any" />
      <body className={`${inter.className}  `}>
        <DarkProvider>
          <StairsClient />
          <Navbar />
          {children}
          <Footer />
        </DarkProvider>
      </body>
    </html>
  );
}
