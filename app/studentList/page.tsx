
import styles from './page.module.css';  // Import the CSS module

export default function students() {
    return (
        <div className={styles.studentsContainer}>
            <h1 className={styles.studentTitle}>student List </h1>
            <p className={styles.studentsText}>Student Lists.</p>        </div>
    );
}
