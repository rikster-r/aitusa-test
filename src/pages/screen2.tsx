import Header from '@/components/Header';
import Head from 'next/head';
import { PencilIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Screen2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Club Info</title>
        <meta name="description" content="Club Info" />
      </Head>
      <div className="bg-white min-h-screen">
        <Header />
        <main
          className={`${
            isOpen ? 'blur-[2px]' : ''
          } h-full px-4 py-4 space-y-4 text-neutral-900`}
        >
          {/* Club Image Placeholder */}
          <div className="bg-neutral-100 rounded-2xl h-24"></div>

          {/* Club Title + Edit */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <h2 className="font-bold text-lg">Название Клуба</h2>
              <PencilIcon className="w-5 h-5 text-neutral-900 cursor-pointer" />
            </div>
            <textarea
              className="bg-neutral-100 rounded-2xl p-3 text-sm text-neutral-900 resize-none w-full h-[200px]"
              placeholder="Описание"
            ></textarea>
          </div>

          {/* Club Description */}

          {/* Participants */}
          <div className="pt-4">
            <h3 className="font-semibold text-sm mb-2">Участники ( 2 )</h3>

            {/* Search */}
            <div className="relative mb-4">
              <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-2.5 text-neutral-400" />
              <input
                type="search"
                placeholder="Поиск"
                className="w-full pl-10 pr-4 py-2 rounded-full bg-neutral-100 focus:outline-none placeholder:text-neutral-400 text-neutral-900"
              />
            </div>

            {/* Participants List */}
            <div className="space-y-2 font-medium">
              <div className="bg-neutral-100 p-2 rounded-xl flex items-center space-x-3">
                <div className="w-6 h-6 bg-neutral-300 rounded-full" />
                <p className="text-sm">Имя Фамилия</p>
              </div>
              <div className="bg-neutral-100 p-2 rounded-xl flex items-center space-x-3">
                <div className="w-6 h-6 bg-neutral-300 rounded-full" />
                <p className="text-sm">Имя Фамилия</p>
              </div>
            </div>

            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={() => setIsOpen(true)}
            >
              Открыть слайдер (анимации нет)
            </button>
          </div>
        </main>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-800/70"
              onClick={() => setIsOpen(false)}
            >
              <div className="bg-white rounded-t-2xl shadow-lg w-full max-w-md px-4 py-6 fixed bottom-0">
                <h2 className="text-xl text-neutral-900 font-medium mb-6">
                  Имя Фамилия
                </h2>
                <p className="text-sm text-neutral-500 mb-2">Клубы</p>
                <div className="space-y-2 font-medium text-neutral-800">
                  <div className="bg-neutral-100 p-2 rounded-xl flex items-center space-x-3 ">
                    <div className="w-6 h-6 bg-neutral-300 rounded-full" />
                    <p className="text-sm">Название клуба</p>
                  </div>
                  <div className="bg-neutral-100 p-2 rounded-xl flex items-center space-x-3">
                    <div className="w-6 h-6 bg-neutral-300 rounded-full" />
                    <p className="text-sm">Название клуба</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
