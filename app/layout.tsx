import "./globals.css";
import type { Metadata } from "next";
import NavbarContainer from "@/components/navbar-container";

const title = "LinkLift | AI LinkedIn Content Automation Platform";
const description =
  "LinkLift helps consultants, founders, and B2B teams generate LinkedIn posts with AI, schedule campaigns, and automate engagement that wins clients.";
const keywords = [
  "LinkedIn automation",
  "AI LinkedIn post generator",
  "LinkedIn content scheduling",
  "LinkedIn engagement tool",
  "B2B social selling platform",
  "LinkedIn marketing automation",
];

export const metadata: Metadata = {
  title,
  description,
  keywords,
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%230a66c2'/></svg>" />
      </head>
      <body className="font-sans antialiased text-gray-900 bg-gray-50">
        <NavbarContainer />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
