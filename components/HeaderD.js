import Image from "next/image"
import { MenuIcon, TranslateIcon, UserCircleIcon } from "@heroicons/react/outline"
import Link from "next/link";

function HeaderD() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-2  bg-gray-1 bg-opacity-50 backdrop-blur-md shadow-md p-5 md:px-10">
      
      {/* left */}
      <div className="relative flex items-center h-8 cursor-pointer my-auto">
        <Link href="/">
          <a>
            <Image 
              src="/img/daboversea.png" 
              layout="fill"
              objectFit="contain"
              objectPosition="left"
            />
          </a>
        </Link>
      </div>
    </header>
  )
}

export default HeaderD;