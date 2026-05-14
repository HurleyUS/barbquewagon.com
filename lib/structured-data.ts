/**
 * JSON-LD structured data for Google rich results.
 * @see https://developers.google.com/search/docs/appearance/structured-data
 */

export const BUSINESS_INFO = {
  name: "Bar-B-Que Wagon",
  address: {
    street: "610 Main St",
    city: "Bryson City",
    state: "NC",
    zip: "28713",
  },
  phone: "+1-828-488-9521",
  email: "bbqwagon@gmail.com",
  url: "https://barbquewagon.com",
  geo: { lat: 35.4312, lng: -83.4488 },
  priceRange: "$$",
  cuisine: "Barbecue",
} as const;

/** Restaurant / LocalBusiness schema for the homepage */
export function getRestaurantSchema() {
  const b = BUSINESS_INFO;
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: b.name,
    image: `${b.url}/images/exterior/building-1.jpg`,
    url: b.url,
    telephone: b.phone,
    email: b.email,
    priceRange: b.priceRange,
    servesCuisine: b.cuisine,
    address: {
      "@type": "PostalAddress",
      streetAddress: b.address.street,
      addressLocality: b.address.city,
      addressRegion: b.address.state,
      postalCode: b.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: b.geo.lat,
      longitude: b.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "11:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "11:00",
        closes: "18:00",
      },
    ],
    menu: `${b.url}/menu`,
    acceptsReservations: "False",
    hasMap: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      `${b.address.street} ${b.address.city} ${b.address.state} ${b.address.zip}`,
    )}`,
  };
}

/** Menu items schema for /menu page */
export function getMenuSchema() {
  const b = BUSINESS_INFO;
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${b.name} Menu`,
    url: `${b.url}/menu`,
    mainEntity: {
      "@type": "MenuSection",
      name: "Smoked Meats",
      hasMenuItem: [
        menuItem("Smoked Brisket", "Slow-smoked 14 hours over hickory.", "14.99"),
        menuItem("Pulled Pork", "Hand-pulled Carolina-style with house vinegar sauce.", "12.99"),
        menuItem("Baby Back Ribs", "Fall-off-the-bone tender, dry rubbed, slow smoked.", "16.99"),
        menuItem(
          "Smoked Turkey",
          "Half pound of tender smoked turkey breast with two sides.",
          "13.99",
        ),
      ],
    },
  };
}

function menuItem(name: string, description: string, price: string) {
  return {
    "@type": "MenuItem",
    name,
    description,
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "USD",
    },
  };
}

/** Catering service schema */
export function getCateringSchema() {
  const b = BUSINESS_INFO;
  return {
    "@context": "https://schema.org",
    "@type": "FoodService",
    name: `${b.name} Catering`,
    url: `${b.url}/catering`,
    provider: {
      "@type": "Restaurant",
      name: b.name,
      url: b.url,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: b.geo.lat,
        longitude: b.geo.lng,
      },
      geoRadius: "80000",
    },
    description:
      "BBQ catering for weddings, corporate events, family reunions, and private parties in Western North Carolina and the Great Smoky Mountains.",
  };
}
