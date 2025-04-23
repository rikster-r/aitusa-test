import Head from 'next/head';
import Header from '@/components/Header';
import {
  PhotoIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';

export default function screen3() {
  return (
    <>
      <Head>
        <title>Club Edit</title>
        <meta name="description" content="Club Edit" />
      </Head>
      <div className="bg-white min-h-screen">
        <Header />
        <main className="h-full px-4 py-4 space-y-4 max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Настройки Клуба
          </h2>

          <div className="flex space-x-4 mb-4">
            <div className="min-w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center bg-gray-200">
              <PhotoIcon className="h-8 w-8 text-gray-500" />
            </div>
            <div className="w-full h-28 rounded-md border border-gray-300 flex items-center justify-center bg-gray-200">
              <PhotoIcon className="h-8 w-8 text-gray-500" />
            </div>
          </div>

          <div className="mb-4">
            <input
              className="bg-neutral-100 rounded-xl p-3 text-sm text-neutral-900 resize-none w-full"
              placeholder="Название клуба..."
            />
          </div>

          <div className="mb-4">
            <textarea
              className="bg-neutral-100 rounded-xl p-3 text-sm text-neutral-900 resize-none w-full h-[150px]"
              placeholder="Описание..."
            ></textarea>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Редактировать участников (2)
            </h3>
            <div className="relative flex items-center mb-2">
              <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-2.5 text-neutral-400" />
              <input
                type="search"
                placeholder="Поиск"
                className="w-full pl-10 pr-4 py-2 rounded-full bg-neutral-100 focus:outline-none placeholder:text-neutral-400 text-neutral-900"
              />
              <button className="ml-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 p-2">
                <PlusIcon className="h-5 w-5 text-neutral-500" />
              </button>
            </div>
            <div className="space-y-2 font-medium text-neutral-900">
              <div className="bg-neutral-100 p-2 rounded-xl flex items-center space-x-3">
                <div className="w-6 h-6 bg-neutral-300 rounded-full" />
                <p className="text-sm">Имя Фамилия</p>
                <TrashIcon className="w-5 h-5 ml-auto text-neutral-500" />
              </div>
              <div className="bg-neutral-100 p-2 rounded-xl flex items-center space-x-3">
                <div className="w-6 h-6 bg-neutral-300 rounded-full" />
                <p className="text-sm">Имя Фамилия</p>
                <TrashIcon className="w-5 h-5 ml-auto text-neutral-500" />
              </div>
            </div>
          </div>

          <button
            className="bg-[#3e6390] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            Сохранить
          </button>
        </main>
      </div>
    </>
  );
}
