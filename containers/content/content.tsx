import Fade from 'react-reveal/Fade'
import BlockContent from '@sanity/block-content-to-react'
import { urlFor } from '../../utils/sanity'
import styles from './content.module.scss'

const serializers = {
  types: {
    image: ({ node: { asset, caption }}) => (
      <figure>
        <img src={urlFor(asset).width(480).url()} alt={caption}/>
        <figcaption>{caption}</figcaption>
      </figure>
    )
  }
}

export interface ContentProps {
  title: string
  subtitle: string
  text: any
}

export default function Content({
  title,
  subtitle,
  text
}: ContentProps) {
  return (
    <Fade bottom duration={1000}>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <div className={styles.head}>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
          </div>
          <div className={styles.body}>
            <BlockContent blocks={text} serializers={serializers}/>
          </div>
        </div>
      </div>
    </Fade>
  )
}
