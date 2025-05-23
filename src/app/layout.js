import { Lato } from "next/font/google";
import "./globals.css";

const font = Lato({ 
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "ZTI seminarium",
  description: "Projekt na seminarium z ZTI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
