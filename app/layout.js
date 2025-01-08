import { Inter } from "next/font/google";
import "./globals.css";
import useServerDarkMode from "@/hooks/use-server-dark-mode";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wealth IQ",
  description: "Smarter finances, brighter futures.",
};

export default function RootLayout({ children }) {
  const theme = useServerDarkMode()
  return (
    <html lang="en" className={theme}>
      <body className={`${inter.className} min-h-screen flex flex-col`}>{children}</body>
    </html>
  );
};
