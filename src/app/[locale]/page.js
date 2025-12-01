import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import FeaturesSection from '../../components/FeaturesSection';
import Footer from '../../components/Footer';
import { setRequestLocale } from 'next-intl/server';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }, { locale: 'es' }];
}

export default function Home({ params: { locale } }) {
  setRequestLocale(locale);
  return (
    <main>
      <Navbar locale={locale} />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
