import Head from "next/head";
import HeaderD from "../../components/HeaderD";
import Footer from "../../components/Footer"
import SidebarS from "../../components/dashboard/SidebarS";

export default function Security() {
  return (
    <div>
      <Head>
        <title>Security - DabOversea</title>
        <meta name="description" content="Designed and developed by DabAZ" />
        <link rel="icon" href="/dabaz.ico" />
      </Head>


      <HeaderD />

      <SidebarS />

      <Footer />
    </div>
  )
}