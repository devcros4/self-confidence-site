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
                        <h3>{t('feature1Title')}</h3>
                        <p>{t('feature1Desc')}</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>📈</div>
                        <h3>{t('feature2Title')}</h3>
                        <p>{t('feature2Desc')}</p>
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
