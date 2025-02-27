// pages/page/index.tsx
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to My Next.js App</h1>
      <p className="mt-4 text-lg text-gray-700">This is the main page styled with Tailwind CSS.</p>
    </div>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <Link href="/dashboard">
              <a style={{ fontSize: '20px', color: 'blue', textDecoration: 'underline' }}>
                Go to Dashboard
              </a>
            </Link>
          </li>
          <li>
            <Link href="/settings">
              <a style={{ fontSize: '20px', color: 'blue', textDecoration: 'underline' }}>
                Tickets
              </a>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <a style={{ fontSize: '20px', color: 'blue', textDecoration: 'underline' }}>
                Forms
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
