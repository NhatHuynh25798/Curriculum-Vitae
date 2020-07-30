import React from 'react'
import { Row, Col, Form, Input, Button } from 'antd'

import useMobile from '../../components/common/useMobile'
import { H1, H4 } from '../../components/common/Typography'
import styles from './style.module.css'

const ContactPage = () => {
  const isMobile = useMobile()
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 24 },
  }

  const tailLayout = {
    wrapperCol: { span: 24 },
  }

  const Contact = () => (
    <Row justify='center' className={styles.contactPageContainer}>
      <Col
        lg={{ offset: 1, span: 22 }}
        xs={{ offset: 1, span: 22 }}
        style={{ margin: '0' }}
      >
        <Row className='title'>
          <H1>Contact</H1>
        </Row>
        <Row justify='space-between' gutter={[32, 0]}>
          {!isMobile && (
            <Col lg={{ span: 10 }}>
              <img
                className={styles.contactImage}
                src='./asset/images/contact.png'
                alt='contact'
              />
            </Col>
          )}
          <Col lg={{ span: 13 }} xs={{ span: 24 }}>
            <Row gutter={[0, 16]} justify='center'>
              <Col lg={{ span: 24 }} xs={{ span: 24 }}>
                <H4>Leave your contact information:</H4>
              </Col>
              <Col lg={{ span: 24 }} xs={{ span: 24 }}>
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
                    <Input
                      size={isMobile ? 'middle' : 'large'}
                      maxLength={48}
                      placeholder='Name'
                    />
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
                    <Input
                      size={isMobile ? 'middle' : 'large'}
                      placeholder='youremail@example.com'
                    />
                  </Form.Item>
                  <Form.Item name='message'>
                    <Input.TextArea
                      size='large'
                      placeholder='Message'
                      autoSize={
                        isMobile
                          ? { minRows: 3, maxRows: 3 }
                          : { minRows: 5, maxRows: 5 }
                      }
                    />
                  </Form.Item>
                  <Form.Item {...tailLayout}>
                    <Button
                      className={styles.contactButton}
                      size='large'
                      htmlType='submit'
                    >
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
      {!isMobile && (
        <iframe
          title='map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1282.652237665774!2d106.76617080160186!3d10.862071927726195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175279cc8ed15a1%3A0x960e1705cb6af8a2!2zTGluaCBUcnVuZywgVGjhu6cgxJDhu6ljLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1596015088127!5m2!1svi!2s'
          width='100%'
          height='100%'
          style={{
            zIndex: '1000',
            border: 0,
          }}
          aria-hidden={false}
          tabIndex={0}
          frameBorder={0}
        />
      )}
      <Row justify='center'>
        <Col
          lg={{ span: 24 }}
          xs={{ span: 24 }}
          className={styles.contactPageContainerWrapper}
        >
          <Contact />
        </Col>
      </Row>
    </div>
  )
}
export default React.memo(ContactPage)
