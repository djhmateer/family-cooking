import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { UserIcon, CookingPot, Info, Bug } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
  const currentYearX = new Date().getFullYear();
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* 
          h-screen: sets height to 100vh (full viewport height)
          flex-col: sets flex direction to column (stacks children vertically in columns) */}
        <div className="flex h-screen flex-col">
          {/* <Header /> */}
          <header className="w-full border-b">
            <div className="max-w-7xl lg:mx-auto p-5 md:px-10 w-full flex justify-between items-center">
              <div className="flex-start">
                <Link href="/" className="flex justify-start items-center">
                  <Image
                    priority={true}
                    src="/images/promo.jpg"
                    width={48}
                    height={48}
                    alt="Cooking logo"
                  />
                  <span className="hidden lg:block font-bold text-2xl ml-3">
                    Family-Cooking Recipes
                  </span>
                </Link>
              </div>

              <div className="space-x-2">
                {/* Just want a link inside the button, so not a click handler. 
              So use asChild. */}
                <Button asChild variant="ghost">
                  <Link href="/about">
                    <Info />
                    About
                  </Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/seedpage">
                    <Info />
                    SeedDB
                  </Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/cart">
                    <CookingPot />
                    Not Found
                  </Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/sample-error">
                    <Bug />
                    SampleError
                  </Link>
                </Button>
                {/* A darker button for login */}
                <Button asChild>
                  <Link href="/sign-in">
                    <UserIcon />
                    Sign In
                  </Link>
                </Button>
              </div>
            </div>
          </header>

          {/* flex-1: allows this element to grow and take up remaining space which creates a sticky footer */}
          <main className="flex-1 max-w-7xl lg:mx-auto p-5 md:px-10 w-full">
            {children}
          </main>

          {/* <Footer /> */}
          {/* border-t: adds a border grey line to the top of the footer */}
          <footer className="border-t">
            <div className="p-5 flex justify-center items-center">
              {currentYearX} Family-Cooking Recipes. All Rights reserved. Have a
              nice day!
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
