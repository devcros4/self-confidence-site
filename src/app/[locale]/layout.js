import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "../globals.css";

export const metadata = {
  title: "Self-confidence",
  description: "Boost your self-esteem",
};

import { setRequestLocale } from 'next-intl/server';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }, { locale: 'es' }];
}

export default async function RootLayout({ children, params: { locale } }) {
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
