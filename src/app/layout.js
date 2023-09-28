import { SearchContextProvider } from "@/app/context/search";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MAHMUDUL HASAN",
  description: "staywithmoon",
};

export default function RootLayout({ children }) {
  return (
    <SearchContextProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header></Header>
          {children}
          <Footer></Footer>
        </body>
      </html>
    </SearchContextProvider>
  );
}
