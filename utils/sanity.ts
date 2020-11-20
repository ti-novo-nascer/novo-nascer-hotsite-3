import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const clientOptions = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: process.env.NODE_ENV === 'production'
}

const client = sanityClient(clientOptions)

export const getPageData = async () => {
  const slug = process.env.SITE_SLUG
  const pageData = await client.fetch(`
    *[_type == 'pageData' && slug.current == $slug] {
      metadata,
      header,
      presentation,
      article,
      place,
      statistics,
      testimonials
    }
  `, { slug })
    .then(res => res[0])
  return pageData
}

const builder = imageUrlBuilder(client)

export interface ImageSource {
  _key?: string
  _type: 'image'
  asset: {
    _type: 'reference'
    _ref: string
  }
}

export function urlFor(src: ImageSource) {
  return builder.image(src)
}
