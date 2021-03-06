import Head from "next/head";
import HeaderD from "../../components/HeaderD";
import SidebarD from "../../components/dashboard/SidebarD";
import Footer from "../../components/Footer"

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Dashboard - DabOversea</title>
        <meta name="description" content="Designed and developed by DabAZ" />
        <link rel="icon" href="/dabaz.ico" />
      </Head>


      <HeaderD />

      <SidebarD />

      <Footer />
    </div>
  )
}