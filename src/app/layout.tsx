// Core imports
import { NextFont } from "next/dist/compiled/@next/font";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Montserrat } from "next/font/google";

// User imports
import "./globals.css";
import Spinner from "@/components/Spinner";
import ReduxProvider from "@/store/Provider";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header";
import { Container, Grid } from "@/components/utils";

// Font Configuration
const montserrat: NextFont = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

// Metadata for the app
export const metadata: Metadata = {
  title: "Techstack",
  description: "Dashbord for Techstack",
};

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {/*Redux setup for theme */}
        <ReduxProvider>
          <Suspense fallback={<Spinner />}>
            <Grid className="gap-3 px-3 py-4 lg:grid lg:h-screen lg:grid-cols-[minmax(300px,1fr)_6fr] lg:grid-rows-[minmax(90px,.1fr)_5fr] lg:gap-6">
              <Sidebar className="row-span-2" />
              <Header />
              <Container className="no-scrollbar overflow-y-scroll">
                {children}
              </Container>
            </Grid>
          </Suspense>
        </ReduxProvider>
      </body>
    </html>
  );
}
