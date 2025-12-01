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
            <div className="container" style={{ padding: '120px 20px 60px' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '40px', color: 'var(--primary)' }}>{t('title')}</h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', color: 'var(--foreground)' }}>
                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{t('collection.title')}</h2>
                        <p style={{ lineHeight: '1.6', opacity: 0.8 }}>{t('collection.content')}</p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{t('usage.title')}</h2>
                        <p style={{ lineHeight: '1.6', opacity: 0.8 }}>{t('usage.content')}</p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{t('security.title')}</h2>
                        <p style={{ lineHeight: '1.6', opacity: 0.8 }}>{t('security.content')}</p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{t('contact.title')}</h2>
                        <p style={{ lineHeight: '1.6', opacity: 0.8 }}>{t('contact.content')}</p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
