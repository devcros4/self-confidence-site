import { useTranslations } from 'next-intl';
import { Link } from '../navigation';
import styles from './Footer.module.css';

export default function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.links}>
                    <Link href="/privacy" className={styles.link}>{t('privacy')}</Link>
                    <Link href="/terms" className={styles.link}>{t('terms')}</Link>
                    <Link href="/support" className={styles.link}>{t('support')}</Link>
                </div>
                <p className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Self-confidence. {t('copyright')}
                </p>
            </div>
        </footer>
    );
}
