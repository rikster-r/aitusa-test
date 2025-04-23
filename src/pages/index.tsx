import ClubCard from '@/components/ClubCard';
import Header from '@/components/Header';
import Head from 'next/head';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Clubs</title>
        <meta name="description" content="Clubs" />
      </Head>
      <div className="bg-white min-h-screen">
        <Header />
        <main className="h-full px-4 py-4 max-w-md mx-auto">
          <div className="relative mb-4">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-2.5 text-neutral-400" />
            <input
              type="search"
              placeholder="Поиск"
              className="w-full pl-10 pr-4 py-2 rounded-full bg-neutral-100 focus:outline-none placeholder:text-neutral-400 text-neutral-900"
            />
          </div>

          {/* Club Cards */}
          <div className="space-y-4">
            <ClubCard
              name="Sheksiz Production"
              description="Крутые челики создают афигенный контент, видосики там всякие, клипы, ну красавчики"
            />
            <ClubCard
              name="Music club"
              description="Песни суперски поют тралямтралала бамерианая капучинная ммммм..."
            />
            <ClubCard
              name="Charity club"
              description="Добряшные челики всем помогают, айда молодцы"
            />
            <ClubCard name="Art club" description="Палитры..." />
          </div>
        </main>
        <div className="flex flex-col ml-4">
          <Link href="/screen2" className="text-blue-500 text-xl">
            скрин 2
          </Link>
          <Link href="/screen3" className="text-blue-500 text-xl">
            скрин 3
          </Link>
        </div>
      </div>
    </>
  );
}
