import React from 'react'
import { Row, Col, Button } from 'antd'
import Typical from 'react-typical'

import useMobile from '../../components/common/useMobile'
import Lottie from '../../components/common/Lottie'
import animation from '../../JsonFile/react-logo.json'
import earthAnimation from '../../JsonFile/earth.json'

import { raiseInvoiceClicked, loadAnimations } from '../../utils/helper'

import { H1 } from '../../components/common/Typography'
import styles from './style.module.css'

const HomPage = () => {
  const url = 'https://i.topcv.vn/huynhtrongnhat?ref=3223638'
  const isMobile = useMobile()

  return (
    <Row className={styles.starsContainerWrapper} justify='end'>
      {!isMobile && (
        <>
          <div
            style={{
              position: 'fixed',
              top: '35%',
              left: '27%',
            }}
          >
            <Lottie
              options={loadAnimations(earthAnimation)}
              height='8rem'
              width='8rem'
            />
          </div>
          <div
            style={{
              position: 'fixed',
              top: '10%',
              left: '5%',
            }}
          >
            <Lottie
              options={loadAnimations(animation, false)}
              height='10rem'
              width='10rem'
            />
          </div>
        </>
      )}
      <Col sm={{ offset: 1, span: 22 }}>
        <Row className={styles.startsContainer}>
          <div id={styles.stars}></div>
          <div id={styles.stars2}></div>
          <div id={styles.stars3}></div>
        </Row>
        <Row className={styles.homePageContainer}>
          {!isMobile && (
            <Col sm={{ span: 10 }} className={styles.homePageImageWrapper}>
              <img
                className={styles.homePageImage}
                src='./asset/images/moon.png'
                alt='Moon'
              />
            </Col>
          )}
          <Col
            sm={{ span: 14 }}
            xs={{ span: 24 }}
            className={styles.homePageGreeting}
          >
            <Row justify='center' style={{ minWidth: '100%' }}>
              <Col sm={{ offset: 1, span: 22 }}>
                <H1
                  fontSize={isMobile ? '3rem' : '4.5rem'}
                  color='var(--secondary)'
                >
                  I&nbsp;<span>&lt;3</span>&nbsp; people who code
                </H1>
              </Col>

              <Col sm={{ span: 24 }} className={styles.hello}>
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

              <Col sm={{ span: 24 }} className={styles.downloadButtonWrapper}>
                <Button
                  size='large'
                  type='primary'
                  className={styles.downloadButton}
                  onClick={() => {
                    raiseInvoiceClicked(url)
                  }}
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
