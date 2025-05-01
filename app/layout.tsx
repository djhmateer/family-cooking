import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";

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
   const currentYear = new Date().getFullYear();
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* 
          h-screen: sets height to 100vh (full viewport height)
          flex-col: sets flex direction to column (stacks children vertically) */}
        <div className="flex h-screen flex-col">

          {/* <Header /> */}
          <header className="w-full border-b">
            <div className="wrapper flex-between">
              <div className="flex-start">
                <Link href="/" className="flex-start">
                  <Image
                    // get a warning in console if don't set this.. I didn't.
                    // priority={true}
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
                  <Link href="/faq">
                    <Info />
                    FAQ (static pre fetched!)
                  </Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/seedpage">
                    <Info />
                    SeedPage (dynamic)
                  </Link>
                </Button>

                <Button asChild variant="ghost">
                  <Link href="/cart">
                    {/* Icon to the left of the text */}
                    {/* <ShoppingCart /> */}
                    <CookingPot />
                    {/* Text */}
                    {/* All Recipes */}
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

          {/* flex-1: allows this element to grow and take up remaining space which creates a sticky footer
            wrapper: custom class in globals.css, not a Tailwind class which does:
           <main className="flex-1 max-w-7xl lg:mx-auto p-5 md:px-10 w-full"> */}
          <main className="flex-1 wrapper">{children}</main>

          {/* <Footer /> */}
          <footer className='border-t'>
      <div className='p-5 flex-center'>
        {currentYear} Family-Cooking Recipes. All Rights reserved. Have a nice day!
      </div>
    </footer>

        </div>
      </body>
    </html>
  );
}
