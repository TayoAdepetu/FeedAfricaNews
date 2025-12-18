import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import DesktopDropdown from "@/components/navigation/DesktopDropdown";
import { NAV_ITEMS } from "@/config/nav.config";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <nav className="hidden md:block font-semibold py-4 px-8">
        <div className="max-w-screen-lg mx-auto flex justify-between items-center">
          <Link href="/">
            <Image
              src="/assets/logos/feedafrica.svg"
              alt="Feed Africa"
              width={150}
              height={64}
              className="w-[130px]"
              priority
            />
          </Link>

          <div className="flex gap-12 items-center text-gray-700">
            {NAV_ITEMS.map((item) => (
              <DesktopDropdown key={item.label} item={item} />
            ))}

            <a
              href="https://feedafrica.africa/tools"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary bg-primary hover:bg-green-700 text-white py-3 px-6 rounded-full"
            >
              Tools
            </a>
          </div>
        </div>
      </nav>

      <MobileMenu />
    </header>
  );
}
