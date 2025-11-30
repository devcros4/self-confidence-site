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
                    <div className={styles.card}>
                        {/* Abstract UI representation */}
                        <div style={{ padding: '20px' }}>
                            <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.2)', borderRadius: '10px', marginBottom: '20px' }}></div>
                            <div style={{ width: '80%', height: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '5px', marginBottom: '10px' }}></div>
                            <div style={{ width: '60%', height: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '5px' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
