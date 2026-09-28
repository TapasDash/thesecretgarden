import React from 'react'

export interface TourItemData {
  name: string
  price: string | number
  duration: string
  description?: string
  currency?: string
  image?: string
  url?: string
  features?: string[]
}

export interface TourSchemaProps {
  /** Single tour data passed as individual props */
  name?: string
  price?: string | number
  duration?: string
  description?: string
  currency?: string
  image?: string
  url?: string
  /** Or pass a single tour object */
  tour?: TourItemData
  /** Or pass multiple tours to generate structured data for all of them */
  tours?: TourItemData[]
}

const cleanPrice = (val?: string | number): string => {
  if (val === undefined || val === null) return '0'
  const str = String(val).replace(/[^0-9.]/g, '')
  return str || '0'
}

export const TourSchema: React.FC<TourSchemaProps> = ({
  name,
  price,
  duration,
  description,
  currency = 'USD',
  image,
  url,
  tour,
  tours,
}) => {
  // Aggregate items into a normalized list
  const items: TourItemData[] = []

  if (tours && tours.length > 0) {
    items.push(...tours)
  } else if (tour) {
    items.push(tour)
  } else if (name && price !== undefined && duration) {
    items.push({
      name,
      price,
      duration,
      description,
      currency,
      image,
      url,
    })
  }

  if (items.length === 0) {
    return null
  }

  const baseUrl = 'https://secretgardenhostelcatba.com'

  const graph = items.flatMap((item, index) => {
    const numericPrice = cleanPrice(item.price)
    const itemCurrency = item.currency || 'USD'
    const itemUrl = item.url ? (item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`) : `${baseUrl}/#expeditions`
    const imageUrl = item.image ? (item.image.startsWith('http') ? item.image : `${baseUrl}${item.image}`) : `${baseUrl}/images/lan_ha_bay_kayak.jpg`
    const itemDesc = item.description || `${item.name} organized directly by Secret Garden Hostel Cat Ba.`

    const tripSchema = {
      '@type': 'TouristTrip',
      '@id': `${itemUrl}#touristtrip-${index}`,
      name: item.name,
      description: itemDesc,
      touristType: ['Backpacker', 'Adventure Traveler', 'Solo Traveler'],
      offers: {
        '@type': 'Offer',
        price: numericPrice,
        priceCurrency: itemCurrency,
        availability: 'https://schema.org/InStock',
        url: itemUrl,
        validFrom: '2024-01-01',
      },
      subTrip: {
        '@type': 'Trip',
        name: item.name,
        description: `Duration: ${item.duration}`,
      },
      provider: {
        '@type': 'Hostel',
        name: 'Secret Garden Hostel Cat Ba',
        url: baseUrl,
        telephone: '+919815002866',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '123 Nui Ngoc',
          addressLocality: 'Cat Ba Town',
          addressRegion: 'Hai Phong',
          addressCountry: 'VN',
        },
      },
    }

    const productSchema = {
      '@type': 'Product',
      '@id': `${itemUrl}#product-${index}`,
      name: item.name,
      image: imageUrl,
      description: itemDesc,
      brand: {
        '@type': 'Brand',
        name: 'Secret Garden Hostel',
      },
      offers: {
        '@type': 'Offer',
        price: numericPrice,
        priceCurrency: itemCurrency,
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: itemUrl,
        seller: {
          '@type': 'Hostel',
          name: 'Secret Garden Hostel Cat Ba',
          url: baseUrl,
        },
      },
    }

    return [tripSchema, productSchema]
  })

  const schema = {
    '@context': 'https://schema.org',
    '@graph': graph,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
