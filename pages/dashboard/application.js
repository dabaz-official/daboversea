import Head from "next/head";
import HeaderD from "../../components/HeaderD";
import Footer from "../../components/Footer"
import SidebarA from "../../components/dashboard/SidebarA";

export default function Application() {
  return (
    <div>
      <Head>
        <title>Application - DabOversea</title>
        <meta name="description" content="Designed and developed by DabAZ" />
        <link rel="icon" href="/dabaz.ico" />
      </Head>


      <HeaderD />

      <SidebarA />

      <Footer />
    </div>
  )
}