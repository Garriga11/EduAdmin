// pages/page/index.tsx
import Link from 'next/link';

export default function Page() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Welcome to Edu Admin Demo</h1>
      <p>Click on any of the links below to visit the corresponding component:</p>

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
                Go to Settings
              </a>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <a style={{ fontSize: '20px', color: 'blue', textDecoration: 'underline' }}>
                Go to Profile
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
