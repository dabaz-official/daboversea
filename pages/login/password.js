import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Password() {
  return (
    <div className="2xl:container h-screen m-auto">
      <Head>
        <title>Change Your Password - DabOversea</title>
        <meta name="description" content="Designed and developed by DabAZ" />
        <link rel="icon" href="/dabaz.ico" />
      </Head>

      
      <div hidden className="fixed inset-0 w-7/12 lg:block">
        <Image src="/img/au.jpg" layout="fill" objectFit="cover" />
        <span className="absolute left-6 bottom-6 text-sm text-white">© 2018 Taras Vyshnya/Shutterstock</span>
      </div>

      <div hidden role="hidden" className="fixed inset-0 w-6/12 ml-auto bg-white bg-opacity-70 backdrop-blur-xl lg:block"></div>

      <div className="relative h-full ml-auto lg:w-6/12">
        <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
          <div className="space-y-1">
            <Link href="/">
              <a>
                <Image src="/img/daboversea.png" width={200} height={50} objectFit="contain" />
              </a>
            </Link>
            <p className="font-medium text-lg text-gray-9">Welcome to DabOversea!</p>
          </div>

          <form action="" className="space-y-6 py-6">
            <div>
              <input type="username" placeholder="Your username" className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none" />
            </div>
            <div>
              <input type="password" placeholder="Original password" className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none" />
            </div>
            <div className="flex flex-col items-end">
              <input type="password" placeholder="New password" className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none" />          
            </div>

            <div>
              <Link href="/login/">
                <a>
                  <button class="w-full px-6 py-3 rounded-xl bg-primary transition hover:bg-primary focus:bg-primary active:bg-primary-hover">
                    <span class="font-semibold text-white text-lg">Submit</span>
                  </button>
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}