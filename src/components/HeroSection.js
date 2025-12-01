import { useTranslations } from 'next-intl';
import styles from './HeroSection.module.css';

export default function HeroSection() {
    const t = useTranslations('HomePage');

    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>{t('title')}</h1>
                    <p className={styles.subtitle}>{t('subtitle')}</p>
                    <button className={`btn btn-primary ${styles.cta}`}>
                        {t('download')}
                    </button>
                </div>
                <div className={styles.visual}>
                    <div className={styles.circle}></div>
                    <div className={styles.iconWrapper}>
                        <img src="/self-confidence-site/icon.png" alt="App Icon" className={styles.appIcon} />
                    </div>
                </div>
            </div>
        </section>
    );
}
