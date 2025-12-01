import { useTranslations } from 'next-intl';
import styles from './FeaturesSection.module.css';

export default function FeaturesSection() {
    const t = useTranslations('Features');

    return (
        <section className={styles.features}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.title}>{t('title')}</h2>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.icon}>✨</div>
                        <div className={styles.cardTitle}>{t('feature1Title')}</div>
                        <div className={styles.cardDescription}>{t('feature1Desc')}</div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>📈</div>
                        <div className={styles.cardTitle}>{t('feature2Title')}</div>
                        <div className={styles.cardDescription}>{t('feature2Desc')}</div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>🔒</div>
                        <h3>{t('feature3Title')}</h3>
                        <p>{t('feature3Desc')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
