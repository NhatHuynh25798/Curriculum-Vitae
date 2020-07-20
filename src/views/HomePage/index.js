import React, { useRef, useEffect } from 'react'
import { Row, Col, Button } from 'antd'
import Typical from 'react-typical'
import lottie from 'lottie-web'

import animation from '../../JsonFile/react-logo.json'
import earthAnimation from '../../JsonFile/earth.json'

import { raiseInvoiceClicked, loadAnimations } from '../../utils/helper'

import { H1 } from '../../components/common/Typography'
import styles from './style.module.css'

const HomPage = () => {
  const url = 'https://google.com'
  const element = useRef(null)
  const earthElement = useRef(null)

  useEffect(() => {
    loadAnimations(lottie, element, animation, false)
    loadAnimations(lottie, earthElement, earthAnimation)
  }, [])

  return (
    <Row className={styles.starsContainerWrapper} justify='end'>
      <div
        id='earthAnimation'
        ref={earthElement}
        style={{
          position: 'fixed',
          top: '35%',
          left: '27%',
          width: '8rem',
          height: '8rem',
        }}
      />
      <div
        id='animation'
        ref={element}
        style={{
          position: 'absolute',
          top: '5%',
          left: '5%',
          width: '10rem',
          height: '10rem',
        }}
      />
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
                <H1 fontSize={'4.5rem'} color='var(--secondary)'>
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
