import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['it', 'en', 'de'],
  defaultLocale: 'it',
  localeDetection: true,
  localePrefix: 'always',
});

export const config = {
  matcher: ['/((?!api|_next|admin|.*\\..*).*)'],
};
