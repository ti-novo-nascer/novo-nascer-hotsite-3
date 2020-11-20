import { useState, useEffect } from 'react'
import { GetStaticProps } from 'next'
import Seo from '../containers/seo'
import Header from '../containers/header'
import FixedHeader from '../containers/fixed-header'
import WhatsAppButton from '../components/whatsapp-button'
import Presentation from '../containers/presentation'
import CallToAction from '../containers/call-to-action'
import Content from '../containers/content'
import Motivational from '../containers/motivational'
import Place from '../containers/place'
import Statistics from '../containers/statistics'
import Service from '../containers/service'
import Testimonials from '../containers/testimonials'
import ContactForm from '../containers/contact-form'
import Footer from '../containers/footer'
import { getPageData } from '../utils/sanity'
import styles from '../styles/home.module.scss'

export default function Home({ pageData }) {
  const [showFixedHeader, setShowFixedHeader] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 600 && showFixedHeader === false) {
          setShowFixedHeader(true)
        } else if (window.pageYOffset <= 600 && showFixedHeader === true) {
          setShowFixedHeader(false)
        }
      })
    }
  }, [showFixedHeader, setShowFixedHeader])

  return (
    <>
      <Seo {...pageData.metadata}/>
      <Header
        email={pageData.metadata.email}
        phone={pageData.metadata.phone}
        {...pageData.header}
      />
      <FixedHeader
        className={styles.fixedHeader}
        show={showFixedHeader}
        email={pageData.metadata.email}
        phone={pageData.metadata.phone}
      />
      <WhatsAppButton
        className={styles.whatsAppButton}
        phone={pageData.metadata.phone}
      />
      <Presentation {...pageData.presentation}/>
      <CallToAction/>
      <Content {...pageData.article}/>
      <Motivational/>
      <Place {...pageData.place}/>
      <Statistics {...pageData.statistics}/>
      <Service/>
      <Testimonials {...pageData.testimonials}/>
      <ContactForm
        email={pageData.metadata.email}
        phone={pageData.metadata.phone}
      />
      <Footer/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getPageData()
  return {
    props: {
      pageData
    }
  }
}
