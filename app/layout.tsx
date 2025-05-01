import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Family-Cooking Recipes",
  description: "A modern family cooking site",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* 
          h-screen: sets height to 100vh (full viewport height)
          flex-col: sets flex direction to column (stacks children vertically) */}
        <div className="flex h-screen flex-col">
          {/* <Header /> */}

          {/* flex-1: allows this element to grow and take up remaining space
            which creates a sticky footer
            wrapper: custom class in globals.css, not a Tailwind class which does:
           <main className="flex-1 max-w-7xl lg:mx-auto p-5 md:px-10 w-full"> */}
          <main className="flex-1 wrapper">{children}</main>

          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
