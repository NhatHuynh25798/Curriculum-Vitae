import React, { useState } from 'react'
import { Col, Row, Layout, Avatar } from 'antd'
import { Link } from '@reach/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import useMobile from '../useMobile'
import { H3 } from '../Typography'
import styles from './style.module.css'

const { Header } = Layout

const HeaderCV = () => {
  const isMobile = useMobile()
  const [show, setShow] = useState(isMobile)
  return (
    <Header className={styles.headerWrapper}>
      <Row style={{ width: '100%', height: '100%' }}>
        <Col lg={{ span: 24 }} xs={{ span: 24 }}>
          <Row
            type='flex'
            align='middle'
            justify='space-between'
            style={{ height: '100%' }}
          >
            <Col lg={{ span: 4 }} xs={{ span: 3 }}>
              {!isMobile ? (
                <Link to='/' className={styles.headerTitle}>
                  <H3 className={styles.logoTitle} color='var(--secondary)'>
                    Nhat Huynh
                  </H3>
                </Link>
              ) : (
                <Link to='/'>
                  <Avatar
                    src='asset/images/small-avatar.jpg'
                    style={{ border: '2px solid var(--secondary)' }}
                  />
                </Link>
              )}
            </Col>

            <Col
              lg={{ span: 16 }}
              xs={{ span: 21 }}
              className={styles.headerNavContainer}
            >
              {isMobile && show && (
                <FontAwesomeIcon
                  icon={faBars}
                  className={styles.hamburgerMenu}
                  onClick={() => setShow(false)}
                />
              )}

              {isMobile && !show && (
                <FontAwesomeIcon
                  icon={faTimes}
                  className={styles.hamburgerMenu}
                  onClick={() => setShow(true)}
                />
              )}

              {(!isMobile || (isMobile && !show)) && (
                <ul className={styles.headerNav}>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link to='/about-me'>About</Link>
                  </li>
                  <li>
                    <Link to='/resume'>Resume</Link>
                  </li>
                  <li>
                    <Link to='/technology'>Technology</Link>
                  </li>
                  <li>
                    <Link to='/project'>Project</Link>
                  </li>
                  <li>
                    <Link to='/contact'>Contact</Link>
                  </li>
                </ul>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  )
}

export default HeaderCV
