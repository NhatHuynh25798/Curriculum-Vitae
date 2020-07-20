import React from 'react'
import { Col, Row, Layout } from 'antd'
import { Link } from '@reach/router'

import { H3 } from '../Typography'
import styles from './style.module.css'

const { Header } = Layout

const HeaderCV = () => {
  return (
    <Header className={styles.headerWrapper}>
      <Row>
        <Col lg={{ offset: 0, span: 24 }}>
          <Row type='flex' align='middle' justify='space-between'>
            <Col lg={{ offset: 0, span: 4 }}>
              <Link to='/' className={styles.headerTitle}>
                <H3 className={styles.logoTitle} color='var(--secondary)'>
                  Nhat Huynh
                </H3>
              </Link>
            </Col>

            <Col lg={{ offset: 0, span: 16 }}>
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
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  )
}

export default HeaderCV
