import Fade from 'react-reveal/Fade'
import ExternalLink from '../../components/external-link'
import TwentyFourHours from '../../components/24-hours'
import SendEmail from '../../components/send-email'
import { formatPhone } from '../../utils/functions'
import styles from './header.module.scss'

export interface HeaderProps {
  email: string
  phone: string
  title: string
  slogan: string
  credits: string
}

export default function Header({
  email,
  phone,
  title,
  slogan,
  credits
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <Fade duration={2000}>
        <div className={styles.wrapper}>
          <div className={styles.menu}>
            <a href='#contact-form'>
              <button>
                <SendEmail/>
                <span>{email}</span>
              </button>
            </a>
            <ExternalLink href='https://www.novonascer.com.br/'>
              <img src='/novo-nascer-logo.svg' alt='Logo da Clínica Hospitalar Novo Nascer'/>
            </ExternalLink>
            <ExternalLink href={`https://wa.me/${phone}`}>
              <button>
                <TwentyFourHours/>
                <span>{formatPhone(phone)}</span>
              </button>
            </ExternalLink>
          </div>
          <div className={styles.title}>
            <h1>{title}</h1>
            <h2>{slogan}</h2>
          </div>
          <div className={styles.credits}>
            <span>{credits}</span>
          </div>
        </div>
      </Fade>
    </header>
  )
}
