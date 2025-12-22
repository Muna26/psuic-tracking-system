import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Washing Machine Shop - {router.pathname === "/" ? "Home" : router.pathname.slice(1)}</title>
        <meta name="description" content="Your go-to source for washing machines, repairs, and expert advice" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </>
  );
}