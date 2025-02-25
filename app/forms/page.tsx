// app/forms/page.tsx
'use client';

import { useState } from 'react';
import styles from './page.module.css'; // Import the CSS module for styling

export default function FormsPage() {
    // Set initial form state
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);

    // Handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // For now, just log the data and show a success message
        console.log('Form submitted:', formData);
        setFormSubmitted(true);

        // Reset form fields
        setFormData({ name: '', email: '' });
    };

    return (
        <div className={styles.formContainer}>
            <h1 className={styles.formTitle}>Contact Us</h1>

            {formSubmitted && (
                <div className={styles.successMessage}>
                    <p>Form submitted successfully!</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />
                </div>

                <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
        </div>
    );
}
