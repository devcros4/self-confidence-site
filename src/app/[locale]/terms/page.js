import { useTranslations } from 'next-intl';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { setRequestLocale } from 'next-intl/server';

export const dynamic = 'force-static';

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'fr' }, { locale: 'es' }];
}

export default function TermsPage({ params: { locale } }) {
    setRequestLocale(locale);
    const t = useTranslations('TermsPage');

    return (
        <main className="container" style={{ padding: '120px 20px 60px' }}>
            <Navbar locale={locale} />
            <h1 style={{ fontSize: '2.5rem', marginBottom: '40px', color: 'var(--primary)' }}>{t('title')}</h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', color: 'var(--foreground)' }}>
                <section>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{t('intro.title')}</h2>
                    <p style={{ lineHeight: '1.6', opacity: 0.8 }}>{t('intro.content')}</p>
                </section>

                <section>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{t('subscriptions.title')}</h2>
                    <p style={{ lineHeight: '1.6', opacity: 0.8 }}>{t('subscriptions.content')}</p>
                </section>

                <section>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{t('intellectual.title')}</h2>
                    <p style={{ lineHeight: '1.6', opacity: 0.8 }}>{t('intellectual.content')}</p>
                </section>

                <section>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{t('liability.title')}</h2>
                    <p style={{ lineHeight: '1.6', opacity: 0.8 }}>{t('liability.content')}</p>
                </section>
            </div>

            <Footer locale={locale} />
        </main>
    );
}
