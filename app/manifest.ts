import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Electrical Engineers' Society | IIEST Shibpur",
    short_name: "EES IIEST",
    description: "Official website of the Electrical Engineers' Society (EES), IIEST Shibpur.",
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#be123c', // ees-700 hex code
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/images/home/ees-logo.png', // Fallback to logo if specific icons aren't generated yet
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/home/ees-logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
