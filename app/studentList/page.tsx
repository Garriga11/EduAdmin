
import styles from './page.module.css';  // Import the CSS module

export default function students() {
    return (
        <div className={styles.StudentContainer}>
            <h1 className={styles.StudentTitle}>Student Lists</h1>
            <p className={styles.studentsText}>Student Lists.</p>        </div>
    );
}