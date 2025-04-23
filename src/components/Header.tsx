import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#3e6390] w-full flex px-4 py-3 items-center max-w-md mx-auto">
      <Link href="/">
        <ChevronLeftIcon className="w-5 h-5" />
      </Link>
      <span className="w-full text-center font-semibold">Clubs</span>
      <div className="w-5 h-5"></div>
    </header>
  );
}
