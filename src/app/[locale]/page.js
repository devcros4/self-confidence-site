import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import FeaturesSection from '../../components/FeaturesSection';
import Footer from '../../components/Footer';

export default function Home({ params: { locale } }) {
  return (
    <main>
      <Navbar locale={locale} />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
