import { Suspense } from "react";
import "../globals.css";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import Loading from "./loading";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <main className="flex-grow">{children}</main>
      </Suspense>
      <Footer />
    </>
  );
}
