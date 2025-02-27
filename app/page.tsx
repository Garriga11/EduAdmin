import Link from 'next/link';

export default function Page() {
  return (
      <div className="flex flex-col min-h-screen">
      <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
      <div className="flex items-center">
      <Link href="/" className="text-2xl font-bold">
      Edu Admin Demo
      </Link>
      </div>
      <div className="hidden md:flex space-x-6">
      <Link href="/dashboard">
      <a className="text-lg hover:text-gray-200">Dashboard</a>
      </Link>
      <Link href="/settings">
      <a className="text-lg hover:text-gray-200">Requests</a>
      </Link>
      <Link href="/profile">
      <a className="text-lg hover:text-gray-200">Forms</a>
      </Link>
      </div>
      </div>
      </div>
      </nav>
      <div className="flex flex-col items-center justify-center flex-grow bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Edu Admin Demo</h1>
      <p className="text-lg text-gray-700 mb-8">Click on any of the links below to visit the corresponding component:</p>
      <nav>
      <ul className="list-none p-0 space-y-4">
      <li>
      <Link href="/dashboard">
      <a className="text-xl text-blue-600 hover:underline">
          Go to Dashboard
      </a>
      </Link>
      </li>
      <li>
      <Link href="/settings">
      <a className="text-xl text-blue-600 hover:underline">
          Requests
      </a>
      </Link>
      </li>
      <li>
      <Link href="/profile">
      <a className="text-xl text-blue-600 hover:underline">
          Forms
      </a>
      </Link>
      </li>
      </ul>
      </nav>
      </div>
      </div>
  );
}
