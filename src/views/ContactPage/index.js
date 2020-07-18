import React from 'react'
import { Row, Col } from 'antd'

import { H1 } from '../../components/common/Typography'
import styles from './style.module.css'

const ContactPage = () => {
  return (
    <div className='container'>
      <Row justify='center'>
        <Col lg={{ offset: 2, span: 20 }} style={{ margin: '0' }}>
          <Row className='title'>
            <H1>Contact</H1>
          </Row>
          <Row justify='center' gutter={[0, 16]}></Row>
        </Col>
      </Row>
    </div>
  )
}
export default ContactPage
