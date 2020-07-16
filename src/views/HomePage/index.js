import React from 'react'
import { Row, Col, Button } from 'antd'
import Typical from 'react-typical'

import { H1 } from '../../components/common/Typography'
import styles from './style.module.css'

const HomPage = () => {
  return (
    <Row className={styles.starsContainerWrapper} justify='end'>
      <Col lg={{ offset: 1, span: 22 }}>
        <Row className={styles.startsContainer}>
          <div id={styles.stars}></div>
          <div id={styles.stars2}></div>
          <div id={styles.stars3}></div>
        </Row>
        <Row className={styles.homePageContainer}>
          <Col lg={{ span: 10 }} className={styles.homePageImageWrapper}>
            <img
              className={styles.homePageImage}
              src='./asset/images/moon.png'
              alt='Moon'
            />
          </Col>
          <Col lg={{ span: 14 }} className={styles.homePageGreeting}>
            <Row justify='center'>
              <Col lg={{ span: 24 }}>
                <H1 fontSize={'4.5rem'}>
                  I&nbsp;<span>&lt;3</span>&nbsp; people who code
                </H1>
              </Col>

              <Col lg={{ span: 24 }} className={styles.hello}>
                <Typical
                  steps={[
                    'Hello,',
                    1000,
                    'Welcome to my CV!',
                    1500,
                    'My name is Huynh Trong Nhat!',
                    1500,
                    'I am a Frontend Developer!',
                    1500,
                  ]}
                  loop={Infinity}
                  wrapper='div'
                  className={styles.helloContent}
                />
              </Col>

              <Col lg={{ span: 24 }} className={styles.downloadButtonWrapper}>
                <Button
                  size='large'
                  type='primary'
                  className={styles.downloadButton}
                >
                  Download CV
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default HomPage
