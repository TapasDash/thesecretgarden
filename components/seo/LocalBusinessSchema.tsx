import React from 'react'

export const LocalBusinessSchema: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Hostel', 'LocalBusiness', 'LodgingBusiness'],
    '@id': 'https://secretgardenhostelcatba.com/#hostel',
    name: 'Secret Garden Hostel Cat Ba',
    alternateName: 'Secret Garden Hostel',
    url: 'https://secretgardenhostelcatba.com',
    logo: 'https://secretgardenhostelcatba.com/images/secret_garden_logo.jpg',
    image: [
      'https://secretgardenhostelcatba.com/images/secret_garden_entrance_arch.jpg',
      'https://secretgardenhostelcatba.com/images/secret_garden_social_night.jpg',
      'https://secretgardenhostelcatba.com/images/wooden_dorm_room.jpg',
      'https://secretgardenhostelcatba.com/images/private_balcony_room.jpg',
    ],
    description:
      'Host-centric courtyard in Cat Ba Island offering solid wooden bunks, private mountain-view rooms, cold AC, craft café & bar, nightly family dinners, and curated Lan Ha Bay & Ha Giang expeditions.',
    priceRange: '$8 - $38',
    currenciesAccepted: 'USD, VND',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    telephone: '+919815002866',
    email: 'hello@secretgardenhostelcatba.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Nui Ngoc, Cat Ba Town',
      addressLocality: 'Cat Ba',
      addressRegion: 'Hai Phong',
      postalCode: '180000',
      addressCountry: 'VN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 20.7275,
      longitude: 107.0467,
    },
    hasMap: 'https://maps.google.com/?q=20.7275,107.0467',
    checkinTime: '14:00',
    checkoutTime: '11:00',
    numberOfRooms: 18,
    petsAllowed: false,
    smokingAllowed: false,
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Free High-Speed Wi-Fi',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Air Conditioning',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Free Daily Breakfast',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Courtyard Garden Bar & Cafe',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Tour Desk & Motorbike Rental',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Free Communal Family Dinners',
        value: true,
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '9.8',
      bestRating: '10',
      worstRating: '1',
      ratingCount: '482',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
