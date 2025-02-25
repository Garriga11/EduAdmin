// app/dashboard/page.tsx
import styles from './page.module.css';  // Import the CSS module

export default function Dashboard() {
    return (
        <div className={styles.dashboardContainer}>
            <h1 className={styles.dashboardTitle}>Dashboard</h1>
            <p className={styles.dashboardText}>Welcome to the dashboard.</p>
        </div>
    );
}
