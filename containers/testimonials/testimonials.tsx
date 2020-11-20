import Fade from 'react-reveal/Fade'
import Carousel from 'react-bootstrap/Carousel'
import ExternalLink from '../../components/external-link'
import Prev from '../../components/prev'
import Next from '../../components/next'
import { addEllipsis } from '../../utils/functions'
import styles from './testimonials.module.scss'

export interface Statement {
  text: string
  author: string
}

export interface TestimonialsProps {
  title: string
  subtitle: string
  statements: Statement[]
}

export default function Testimonials({
  title,
  subtitle,
  statements
}: TestimonialsProps) {
  return (
    <Fade bottom duration={1000}>
      <div className={styles.testimonials}>
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
              {statements.map(({ text, author }, idx) => (
                <Carousel.Item key={idx} className={styles.carouselItem}>
                  <p>"{addEllipsis(text, 300)}"</p>
                  <span>{addEllipsis(author, 80)}</span>
                </Carousel.Item>
              ))}
            </Carousel>
            <ExternalLink href='https://www.novonascer.com.br/lista-de-depoimentos'>
              <button>Ver Mais</button>
            </ExternalLink>
          </div>
        </div>
      </div>
    </Fade>
  )
}
