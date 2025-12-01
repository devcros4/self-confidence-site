import { useTranslations } from 'next-intl';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { setRequestLocale } from 'next-intl/server';

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'fr' }, { locale: 'es' }];
}

export default function PrivacyPage({ params: { locale } }) {
    setRequestLocale(locale);
    const t = useTranslations('PrivacyPage');

    return (
        <main>
            <Navbar locale={locale} />
            <div className="container" style={{ paddingTop: '120px', minHeight: '80vh' }}>
                <h1 style={{ marginBottom: '24px' }}>{t('title')}</h1>
                <p style={{ lineHeight: '1.6', color: 'rgba(255,255,255,0.8)' }}>{t('content')}</p>
            </div>
            <Footer />
        </main>
    );
}
