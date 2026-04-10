import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

export default function SEO({ 
  title, 
  description, 
  canonical = 'https://huskeystreeservice.com', 
  ogType = 'website',
  ogImage = 'https://huskeystreeservice.com/og-image.jpg'
}: SEOProps) {
  const fullTitle = `${title} | Huskey's Tree Service Clarksville TN`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Huskey's Tree Service",
          "image": ogImage,
          "@id": "https://huskeystreeservice.com",
          "url": "https://huskeystreeservice.com",
          "telephone": "931-241-2515",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1730 Woodlawn Road",
            "addressLocality": "Woodlawn",
            "addressRegion": "TN",
            "postalCode": "37191",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 36.5167,
            "longitude": -87.4833
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "07:00",
            "closes": "18:00"
          },
          "sameAs": [
            "https://www.facebook.com/HuskeysTreeService"
          ]
        })}
      </script>
    </Helmet>
  );
}
