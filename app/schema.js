// schema.js
export const schema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Nifty Nitesh",
  url: "https://niftynitesh.com",
  logo: "https://www.niftynitesh.com/logo.png",
  description:
    "Learn share market, stock trading, technical analysis & fundamental analysis through online and offline classes by experts at Nifty Nitesh. Find the best share market classes near you in Delhi, Rajapuri & Uttam Nagar.",
  founders: [
    {
      "@type": "Person",
      name: "Nitesh Kumar",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "G-221, gali no 14, viswas park, Rajapuri, Uttam Nagar, Delhi",
    addressLocality: "Delhi",
    addressRegion: "Delhi",
    postalCode: "110059",
    addressCountry: "IN",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Share Market Classes",
    itemListElement: [
      {
        "@type": "EducationEvent",
        name: "Online Share Market Classes",
        description:
          "Learn share market trading, technical analysis, and fundamental analysis through online classes.",
        provider: {
          "@type": "EducationalOrganization",
          name: "Nifty Nitesh",
        },
      },
      {
        "@type": "EducationEvent",
        name: "Offline Share Market Classes",
        description:
          "Attend in-person share market classes in Delhi, Rajapuri, and Uttam Nagar.",
        provider: {
          "@type": "EducationalOrganization",
          name: "Nifty Nitesh",
        },
        location: {
          "@type": "Place",
          name: "Nifty Nitesh Classroom",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "G-221, gali no 14, viswas park, Rajapuri, Uttam Nagar, Delhi",
            addressLocality: "Delhi",
            addressRegion: "Delhi",
            postalCode: "110059",
            addressCountry: "IN",
          },
        },
      },
    ],
  },
};
