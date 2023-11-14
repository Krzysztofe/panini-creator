import React from 'react';
import styles from "./LoadingPage.module.css"

const LoadingPage = () => {
    return (
        <main className={styles.main}>
            <div className={styles.spinner}></div>
        </main>
    );
};

export default LoadingPage;