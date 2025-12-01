import { useTranslations } from 'next-intl';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { setRequestLocale } from 'next-intl/server';

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'fr' }, { locale: 'es' }];
}

export default function SupportPage({ params: { locale } }) {
    setRequestLocale(locale);
    const t = useTranslations('SupportPage');

    return (
        <main>
            <Navbar locale={locale} />
            <div className="container" style={{ padding: '120px 20px 60px' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '40px', color: 'var(--primary)' }}>{t('title')}</h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', color: 'var(--foreground)' }}>
                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{t('contact.title')}</h2>
                        <p style={{ lineHeight: '1.6', opacity: 0.8 }}>{t('contact.content')}</p>
                        <a href="mailto:support@selfconfidence.app" style={{ color: 'var(--primary)', fontWeight: '600', marginTop: '10px', display: 'inline-block' }}>support@selfconfidence.app</a>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '2rem', marginBottom: '24px', marginTop: '20px' }}>{t('faq.title')}</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px' }}>{t('faq.q1')}</h3>
                                <p style={{ opacity: 0.8, lineHeight: '1.6' }}>{t('faq.a1')}</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px' }}>{t('faq.q2')}</h3>
                                <p style={{ opacity: 0.8, lineHeight: '1.6' }}>{t('faq.a2')}</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px' }}>{t('faq.q3')}</h3>
                                <p style={{ opacity: 0.8, lineHeight: '1.6' }}>{t('faq.a3')}</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
