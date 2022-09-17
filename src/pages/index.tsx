import Head from 'next/head';
import Header from '@/components/header';
import Hero from '@/components/hero';
import AboutUs from '@/components/about';
import Services from '@/components/services';
import Contact from '@/components/contact';
import ScrollToTop from '@/components/scroll-to-top';

export default function Home() {
  return (
    <>
      <Head>
        <title>SkyAlp Ltd</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
        />
      </Head>

      <Header />
      <main>
        <ScrollToTop />
        <Hero />
        <AboutUs />
        <Services />
        <Contact />
      </main>
    </>
  );
}
