import Fade from 'react-reveal/Fade'
import ExternalLink from '../../components/external-link'
import styles from './call-to-action.module.scss'

export default function CallToAction() {
  return (
    <div className={styles.callToAction}>
      <Fade duration={2000}>
        <div className={styles.wrapper}>
          <div className={styles.head}>
            <h2>Está precisando de ajuda?</h2>
          </div>
          <div className={styles.body}>
            <ExternalLink href='https://wa.me/5581973163700'>
              <button>
                <span>Converse conosco agora!</span>
              </button>
            </ExternalLink>
          </div>
        </div>
      </Fade>
    </div>
  )
}
