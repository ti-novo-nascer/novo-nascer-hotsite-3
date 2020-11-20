import Fade from 'react-reveal/Fade'
import Link from 'next/link'
import styles from './email-feedback.module.scss'

export default function EmailFeedback({ message }) {
  return (
    <div className={styles.emailFeedback}>
      <Fade duration={2000}>
        <div className={styles.head}>
          <img src='/novo-nascer-simbolo-azul.svg' alt='Logo da Novo Nascer'/>
        </div>
        <div className={styles.body}>
          <h1>{message}</h1>
          <Link href='/'>
            <button>Voltar ao site</button>
          </Link>
        </div>
      </Fade>
    </div>
  )
}
