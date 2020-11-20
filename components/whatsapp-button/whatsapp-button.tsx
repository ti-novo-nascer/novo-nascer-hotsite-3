import ExternalLink from '../external-link'
import WhatsApp from '../whatsapp'
import styles from './whatsapp-button.module.scss'

export default function WhatsAppButton({ className, phone }) {
  return (
    <ExternalLink href={`https://wa.me/${phone}`}>
      <button className={[styles.whatsAppButton, className].join(' ')}>
        <WhatsApp/>
      </button>
    </ExternalLink>
  )
}
