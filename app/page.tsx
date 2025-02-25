// app/page.tsx
import Link from 'next/link';
import FormsPage from './forms/page';  // Import the forms page component

export default function HomePage() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to the Main Page</h1>
      <p>This is the main page where you can access the form.</p>
      
      {/* Render FormsPage inside the main page */}
      <FormsPage />

      <div style={{ marginTop: '20px' }}>
        {/* You can also add a link to navigate to the form */}
        <Link href="/forms">
          <a>Go to Form Page</a>
        </Link>
      </div>
    </div>
  );
}
