import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import MediumCard from '../components/MediumCard'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>DabOversea</title>
        <meta name="description" content="Designed and developed by DabAZ" />
        <link rel="icon" href="/dabaz.ico" />
      </Head>


      <Header />

      <Banner />

      <section className='max-w-7xl mx-auto px-4 sm:px-6'>
        <h2 className='text-4xl font-semibold py-8'>Explore</h2>

        <div className='flex space-x-3 justify-center'>
          <MediumCard url={'https://www.anu.edu.au/'} img={'/img/anu.jpg'} title={'Australian National University'} />
          <MediumCard url={'https://www.sydney.edu.au/'} img={'/img/usyd.png'} title={'University of Sydney'} />
          <MediumCard url={'https://www.unsw.edu.au/'} img={'/img/unsw.png'} title={'University of New South Wales'} />
        </div>
      </section>

      <Footer />

    </div>
  )
}
