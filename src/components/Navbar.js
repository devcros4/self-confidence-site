import { useTranslations } from 'next-intl';
import { Link } from '../navigation';
import styles from './Navbar.module.css';

export default function Navbar({ locale }) {
    const t = useTranslations('Navigation');

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    Self-confidence
                </Link>
                <div className={styles.links}>
                    <Link href="/privacy" className={styles.link}>{t('privacy')}</Link>
                    <Link href="/support" className={styles.link}>{t('support')}</Link>
                    <div className={styles.langSwitcher}>
                        <Link href="/" locale="en" className={locale === 'en' ? styles.activeLang : ''}>EN</Link>
                        <span className={styles.separator}>|</span>
                        <Link href="/" locale="fr" className={locale === 'fr' ? styles.activeLang : ''}>FR</Link>
                        <span className={styles.separator}>|</span>
                        <Link href="/" locale="es" className={locale === 'es' ? styles.activeLang : ''}>ES</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
