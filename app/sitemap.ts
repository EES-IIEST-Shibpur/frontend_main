import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://eesiiests.org';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/events`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/initiatives`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/people`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/placements`,
      lastModified: new Date(),
    },
    // Subpages
    {
      url: `${baseUrl}/people/faculty`,
      lastModified: new Date(),
    },
     {
      url: `${baseUrl}/people/staff`,
      lastModified: new Date(),
    },
     {
      url: `${baseUrl}/people/society`,
      lastModified: new Date(),
    },
     {
      url: `${baseUrl}/people/web-team`,
      lastModified: new Date(),
    },
  ];
}
