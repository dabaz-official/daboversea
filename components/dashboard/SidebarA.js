import Link from "next/link";
import { ChartPieIcon, DocumentTextIcon, ShieldCheckIcon } from "@heroicons/react/outline";

function SidebarA() {
  return (
    <div className="md:w-3/12 w-6/12 h-screen">
      <div className="p-4 space-y-14">
        <div className="space-y-4">
          <h1 className="text-primary text-lg font-semibold">Menu</h1>
          {/* dashboard */}
          <Link href="/dashboard">
            <a>
              <div className="flex p-3 text-black space-x-4 hover:bg-primary rounded-lg hover:text-white cursor-pointer transition duration-150 mt-2">
                <ChartPieIcon className="h-6 mr-4" />
              Dashboard
              </div>
            </a>
          </Link>
          
          {/* application */}
          <Link href="/dashboard/application">
            <a>
              <div className="flex p-3 text-primary space-x-4 hover:bg-primary rounded-lg hover:text-white cursor-pointer transition duration-150 mt-2">
                <DocumentTextIcon className="h-6 mr-4" />
                Application
              </div>
            </a>
          </Link>

          {/* user */}
          <Link href="/dashboard/security">
            <a>
              <div className="flex p-3 text-black space-x-4 hover:bg-primary rounded-lg hover:text-white cursor-pointer transition duration-150 mt-2">
                <ShieldCheckIcon className="h-6 mr-4" />
                Security
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SidebarA;