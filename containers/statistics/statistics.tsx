import Fade from 'react-reveal/Fade'
import { urlFor, ImageSource } from '../../utils/sanity'
import styles from './statistics.module.scss'

export interface StatisticsProps {
  title: string
  subtitle: string
  chart: ImageSource
}

export default function Statistics({
  title,
  subtitle,
  chart
}: StatisticsProps) {
  return (
    <Fade bottom duration={1000}>
      <div className={styles.statistics}>
        <div className={styles.wrapper}>
          <div className={styles.head}>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
          </div>
          <div className={styles.body}>
            <img src={urlFor(chart).width(720).url()} alt='Dados sobre a enfermidade' loading='lazy'/>
          </div>
        </div>
      </div>
    </Fade>
  )
}
