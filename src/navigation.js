import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'fr', 'es'];
export const localePrefix = 'always';

export const { Link, redirect, usePathname, useRouter } =
    createNavigation({ locales, localePrefix });
