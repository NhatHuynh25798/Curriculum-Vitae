import React from 'react'
import { Row, Col, Form, Input, Button } from 'antd'

import { H1, H4 } from '../../components/common/Typography'
import styles from './style.module.css'

const ContactPage = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 24 },
  }

  const tailLayout = {
    wrapperCol: { span: 24 },
  }

  const Contact = () => (
    <Row justify='center' className={styles.contactPageContainer}>
      <Col lg={{ offset: 1, span: 22 }} style={{ margin: '0' }}>
        <Row className='title'>
          <H1>Contact</H1>
        </Row>
        <Row justify='space-between' gutter={[32, 0]}>
          <Col lg={{ span: 10 }}>
            <img src='./asset/images/contact.png' alt='contact' />
          </Col>
          <Col lg={{ span: 13 }}>
            <Row gutter={[0, 16]}>
              <Col lg={{ span: 24 }}>
                <H4>Leave your contact information:</H4>
              </Col>
              <Col lg={{ span: 24 }}>
                <Form {...layout} name='basic'>
                  <Form.Item
                    name='name'
                    rules={[
                      {
                        type: 'string',
                        message: 'Please input your name!',
                        required: true,
                      },
                    ]}
                  >
                    <Input size='large' maxLength={48} placeholder='Name' />
                  </Form.Item>
                  <Form.Item
                    name='email'
                    rules={[
                      {
                        type: 'email',
                        message: 'Please input your email!',
                        required: true,
                      },
                    ]}
                  >
                    <Input size='large' placeholder='youremail@example.com' />
                  </Form.Item>
                  <Form.Item name='message'>
                    <Input.TextArea
                      size='large'
                      placeholder='Message'
                      autoSize={{ minRows: 5, maxRows: 5 }}
                    />
                  </Form.Item>
                  <Form.Item {...tailLayout}>
                    <Button className={styles.contactButton} size='large'>
                      Send
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )

  return (
    <div className='container' style={{ padding: '0', overflowY: 'hidden' }}>
      <Row
        justify='center'
        style={{
          width: '100%',
          minHeight: '100%',
          backgroundImage: `url(${'./asset/images/map.png'})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
        }}
      >
        <Col lg={{ span: 24 }} className={styles.contactPageContainerWrapper}>
          <Contact />
        </Col>
      </Row>
    </div>
  )
}
export default React.memo(ContactPage)
