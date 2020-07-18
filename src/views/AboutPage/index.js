import React, { useState } from 'react'
import { Row, Col, Avatar } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import {
  faMobileAlt,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'

import { raiseInvoiceClicked } from '../../utils/helper'

import { H1, H2, T1, T3 } from '../../components/common/Typography'
import styles from './style.module.css'

const AboutMe = () => {
  const [visible, setVisible] = useState(null)

  const information = [
    {
      title: 'Phone',
      content: '+84-343661688',
      icon: (
        <FontAwesomeIcon icon={faMobileAlt} className={styles.iconAwesome} />
      ),
    },
    {
      title: 'Email',
      content: 'nhathuynh25798@gmail.com',
      icon: (
        <FontAwesomeIcon icon={faEnvelope} className={styles.iconAwesome} />
      ),
    },
    {
      title: 'Address',
      content: 'Linh Trung ward, Thu Duc district, Ho Chi Minh City',
      icon: (
        <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.iconAwesome} />
      ),
    },
  ]

  const mySocialNetwork = [
    {
      name: 'Facebook',
      to: 'https://www.facebook.com/huynh.trongnhat',
      icon: <FontAwesomeIcon icon={faFacebook} />,
    },
    {
      name: 'Instagram',
      to: 'https://www.instagram.com/huynhtrongnhat/',
      icon: <FontAwesomeIcon icon={faInstagram} />,
    },
    {
      name: 'GitHub',
      to: 'https://github.com/NhatHuynh25798',
      icon: <FontAwesomeIcon icon={faGithub} />,
    },
  ]

  const PopoverHover = ({ name, id }) => (
    <div
      className={styles.popoverHoverWrapper}
      style={{ display: id === visible ? 'block' : 'none' }}
    >
      <div className={styles.popoverHover}>{name}</div>
    </div>
  )

  return (
    <div className='container'>
      <Row justify='space-between' className={styles.aboutMeWrapper}>
        <Col lg={{ offset: 2, span: 20 }} style={{ margin: '0' }}>
          <Row className='title'>
            <H1>About Me</H1>
          </Row>
          <Row justify='center'>
            <Col
              lg={{ span: 24 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '1rem 0',
              }}
            >
              <Avatar
                src='./asset/images/avatar.jpg'
                size={200}
                style={{
                  border: '0.1875rem solid #dfdfdf',
                }}
              />
            </Col>
          </Row>
          <Row justify='center' gutter={[0, 16]}>
            <Col lg={{ span: 24 }}>
              <T1>
                Hi! My name is Huynh Trong Nhat. I’m extremely passionate about
                web development especially Frontend Development, helping
                businesses and improve their online presence.{' '}
              </T1>
            </Col>
            <Col lg={{ span: 24 }}>
              <T1>
                Currently, I studying with a Software Engineer in Nong Lam
                University. Besides, I self-educated Front-end Development and
                had over 6 months of working experience ReactJs with Vbros
                Solution Technology Team. I currently aim to learn as much as I
                can in a work environment and to further my own abilities in a
                professional setting.
              </T1>
            </Col>
            <Col lg={{ span: 24 }}>
              <Row gutter={[16, 16]} justify='space-between'>
                {information.map((item, index) => (
                  <Col
                    lg={{ span: 7 }}
                    key={index}
                    style={{ display: 'flex', margin: '1rem 0' }}
                    className={styles.informationContainerWrapper}
                  >
                    <div
                      style={{
                        margin: '0 auto',
                        padding: '0.75rem',
                      }}
                    >
                      <div className={styles.informationContainer}>
                        {item?.icon}
                      </div>
                      <div className={styles.informationContent}>
                        <T3>
                          {item?.title}: &nbsp;
                          {item?.content}
                        </T3>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col
              lg={{ span: 24 }}
              style={{
                textAlign: 'center',
              }}
            >
              <H2>My Social Network</H2>
            </Col>
            <Col
              lg={{ span: 24 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ul className={styles.iconSocialWrapper}>
                {mySocialNetwork?.map((item, index) => (
                  <li
                    key={index}
                    className={styles.iconSocialItem}
                    onClick={() => {
                      raiseInvoiceClicked(item?.to)
                    }}
                  >
                    <span
                      className={styles.iconSocial}
                      onMouseMove={() => {
                        setVisible(index)
                      }}
                      onMouseLeave={() => {
                        setVisible(null)
                      }}
                    >
                      <div className={styles.iconSocialContainer}>
                        {item?.icon}
                      </div>
                      <PopoverHover name={item?.name} id={index} />
                    </span>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default AboutMe
