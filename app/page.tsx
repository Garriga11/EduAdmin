// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
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
            <Link href="/forms">
              <a style={{ fontSize: '20px', color: 'blue', textDecoration: 'underline' }}>
                Go to Settings
              </a>
            </Link>
          </li>
         
        </ul>
      </nav>
    </div>
  );
}
