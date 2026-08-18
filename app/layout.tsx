import type { Metadata } from "next";
import "./globals.css";

const title = "THE ECHO: The Number That Stayed | AVC Ownership Intelligence";
const description = "How Diana Taurasi’s Ring of Honor night turned 20 seasons into a statement about loyalty, memory and Phoenix.";

export const metadata: Metadata = {
  metadataBase: new URL("https://meltckr.github.io"),
  title,
  description,
  icons: { icon: "/the-echo/favicon.svg" },
  openGraph: {
    title,
    description,
    type: "article",
    images: [{ url: "/the-echo/og-the-number-that-stayed-v1.png", width: 1200, height: 630, alt: "The Number That Stayed — Diana Taurasi Ring of Honor ownership brief" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/the-echo/og-the-number-that-stayed-v1.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
