import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import ReduxProvider from "@/provider/ReduxProvider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YouTube V2.0",
  description: "YouTube 2.0",
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
    <ThemeProvider>
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
    </ThemeProvider>
    </ReduxProvider>
  );
}
