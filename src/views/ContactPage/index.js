import React, { useRef, useEffect } from 'react'
import { Row, Col } from 'antd'
import lottie from 'lottie-web'

import animation from '../../JsonFile/react-logo.json'

import { H1 } from '../../components/common/Typography'
// import styles from './style.module.css'

const ContactPage = () => {
  const element = useRef(null)

  useEffect(() => {
    if (element) {
      lottie.loadAnimation({
        container: element.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animation,
      })
    }
  }, [])

  return (
    <div className='container'>
      <Row justify='center'>
        <Col lg={{ offset: 2, span: 20 }} style={{ margin: '0' }}>
          <Row className='title'>
            <H1>Contact</H1>
          </Row>
          <Row justify='center' gutter={[0, 16]}>
            <div id='animation' ref={element} />
          </Row>
        </Col>
      </Row>
    </div>
  )
}
export default ContactPage
