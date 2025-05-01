import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ddimov.dev"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Dimitar Dimov",
    template: "%s | Dimitar Dimov",
  },
  description:
    "Backend architect at Dreamshot, where we create online games and innovative products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased bg-background text-foreground`}
      >
        <Script
          defer
          data-domain="ddimov.dev"
          src="https://plausible.io/js/script.js"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 mt-16 mb-16 p-4">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
