import Image from "next/image"
import { MenuIcon, TranslateIcon, UserCircleIcon } from "@heroicons/react/outline"

function Header () {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-2 bg-white shadow-md p-5 md:px-10">
      
      {/* left */}
      <div className="relative flex items-center h-8 cursor-pointer my-auto">
        <Image 
          src="/img/daboversea.png" 
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* right */}
      <div className="flex items-center space-x-4 justify-end text-gray-11">
        <TranslateIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-lg">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  )
}

export default Header;