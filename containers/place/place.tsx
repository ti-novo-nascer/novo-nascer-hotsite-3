import Fade from 'react-reveal/Fade'
import Carousel from 'react-bootstrap/Carousel'
import ExternalLink from '../../components/external-link'
import Prev from '../../components/prev'
import Next from '../../components/next'
import { urlFor, ImageSource } from '../../utils/sanity'
import styles from './place.module.scss'

export interface PlaceProps {
  title: string
  subtitle: string
  photos: ImageSource[]
}

export default function Place({
  title,
  subtitle,
  photos
}: PlaceProps) {
  return (
    <Fade bottom duration={1000}>
      <div className={styles.place}>
        <div className={styles.wrapper}>
          <div className={styles.head}>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
          </div>
          <div className={styles.body}>
            <Carousel
              prevIcon={<Prev/>}
              nextIcon={<Next/>}
              indicators={false}
            >
              {photos.map((photo, idx) => (
                <Carousel.Item key={idx} className={styles.carouselItem}>
                  <img src={urlFor(photo).width(720).url()} alt='Foto da Novo Nascer'/>
                </Carousel.Item>
              ))}
            </Carousel>
            <ExternalLink href='https://www.novonascer.com.br/hospitalidade'>
              <button>Ver Mais</button>
            </ExternalLink>
          </div>
        </div>
      </div>
    </Fade>
  )
}
