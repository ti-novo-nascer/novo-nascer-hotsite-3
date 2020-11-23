import Fade from 'react-reveal/Fade'
import ExternalLink from '../../components/external-link'
import styles from './call-to-action.module.scss'

export interface CallToActionProps {
  phone: string
}

export default function CallToAction({
  phone
}: CallToActionProps) {
  return (
    <div className={styles.callToAction}>
      <Fade duration={2000}>
        <div className={styles.wrapper}>
          <div className={styles.head}>
            <h2>Está precisando de ajuda?</h2>
          </div>
          <div className={styles.body}>
            <ExternalLink href={`https://wa.me/${phone}`}>
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
