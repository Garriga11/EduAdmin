'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AdminDashboard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Check if the user is logged in
        const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(loggedIn);

        if (!loggedIn) {
            router.push('/login'); // Redirect to login if not logged in
        }
    }, [router]);

    if (!isLoggedIn) {
        return null; // Optionally, show loading screen or nothing
    }

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <p>Welcome to the Admin Dashboard!</p>
        </div>
    );
};

export default AdminDashboard;
