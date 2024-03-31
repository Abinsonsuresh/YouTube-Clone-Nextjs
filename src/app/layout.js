import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YouTube V2.0",
  description: "YouTube 2.0",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>{children}</body>
    </html>
    </ThemeProvider>
  );
}
