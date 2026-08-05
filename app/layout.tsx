import type { Metadata } from "next";
import "./globals.css";

const title = "THE ECHO: The Plum Effect | AVC Ownership Intelligence";
const description = "A directional perception and sentiment read on how Kelsey Plum’s Phoenix Mercury debut landed across the basketball world.";

export const metadata: Metadata = {
  metadataBase: new URL("https://meltckr.github.io"),
  title,
  description,
  icons: { icon: "/the-echo/favicon.svg" },
  openGraph: {
    title,
    description,
    type: "article",
    images: [{ url: "/the-echo/og-image.png", width: 1200, height: 630, alt: "THE ECHO: The Plum Effect" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/the-echo/og-image.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
