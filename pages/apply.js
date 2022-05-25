import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Apply() {
  return (
    <div>
      <Head>
        <title>Application Form - DabOversea</title>
        <meta name="description" content="Designed and developed by DabAZ" />
        <link rel="icon" href="/dabaz.ico" />
      </Head>

      <Header />

      <div className="bg-white text-black flex flex-col justify-center max-h-screen">
        <div className="flex-1 flex flex-col justify-center items-center pt-10 lg:pt-6">
          <div className="pb-10">
            <Image src="/img/logo.svg" width={30} height={30} alt="logo" />
          </div>
          <h2 className="text-4xl font-semibold">Application Form</h2>
          <form className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]">
            <input type="text" id="name" name="name" required maxLength={50} placeholder="Name" className="bg-white text-black outline-none border-2 border-black rounded-3xl px-8 py-2" />
            <input type="text" id="currentschool" name="currentschool" required maxLength={100} placeholder="Current school" className="bg-white text-black outline-none border-2 border-black rounded-3xl px-8 py-2" />
            <input type="email" id="email" name="email" required maxLength={250} placeholder="E-mail" className="bg-white text-black outline-none border-2 border-black rounded-3xl px-8 py-2" />
            <input type="text" id="appliedschool" name="appliedschool" required maxLength={100} placeholder="The school you will apply for" className="bg-white text-black outline-none border-2 border-black rounded-3xl px-8 py-2" />
            <input type="text" id="appliedschoolid" name="appliedschoolid" required maxLength={100} placeholder="The identification number of the school" className="bg-white text-black outline-none border-2 border-black rounded-3xl px-8 py-2" />
            <input type="text" id="appliedmajor" name="appliedmajor" required maxLength={100} placeholder="The major you will apply for" className="bg-white text-black outline-none border-2 border-black rounded-3xl px-8 py-2" />
            <input type="text" id="appliedmajorid" name="appliedmajorid" required maxLength={100} placeholder="The identification number of the major" className="bg-white text-black outline-none border-2 border-black rounded-3xl px-8 py-2" />
            <div className="text-center items-center mt-10">
              <button type="submit" className="bg-black text-white rounded-lg px-8 py-2">Submit</button>
            </div>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}