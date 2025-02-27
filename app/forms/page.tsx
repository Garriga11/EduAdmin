
import styles from './page.module.css';  // Import the CSS module

export default function forms() {
    return (
        <div className={styles.formsContainer}>
            <h1 className={styles.formsTitle}>Dashboard</h1>
            <p className={styles.formsText}>Welcome to the dashboard.</p>
        </div>
    );
}