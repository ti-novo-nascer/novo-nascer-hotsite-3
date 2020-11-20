import Head from 'next/head'
import { urlFor, ImageSource } from '../../utils/sanity'

export interface SeoProps {
  url: string
  name: string
  title: string
  description: string
  image: ImageSource
  locale: string
}

export default function Seo({
  url,
  name,
  title,
  description,
  image,
  locale
}: SeoProps) {
  return (
    <Head>
      <meta charSet='utf-8'/>
      <meta name='viewport' content='width=device-width, initial-scale=1'/>
      <meta name='author' content='Lucas Alves Costa'/>
      {/* SERP tags */}
      <title>{title}</title>
      <meta name='description' content={description}/>
      {/* Open Graph tags */}
      <meta property='og:url' content={url}/>
      <meta property='og:site_name' content={name}/>
      <meta property='og:title' content={title}/>
      <meta property='og:description' content={description}/>
      <meta property='og:type' content='website'/>
      <meta property='og:image' content={urlFor(image).width(720).url()}/>
      <meta property='og:locale' content={locale.replace('-', '_')}/>
      {/* Twitter Card tags */}
      <meta name='twitter:card' content='summary'/>
      <meta name='twitter:title' content={title}/>
      <meta name='twitter:description' content={description}/>
      <meta name='twitter:image' content={urlFor(image).width(720).url()}/>
    </Head>
  )
}
