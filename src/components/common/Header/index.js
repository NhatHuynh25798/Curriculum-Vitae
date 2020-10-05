import React, { useState } from 'react'
import { Col, Row, Layout, Avatar, Drawer, Menu } from 'antd'
import { Link, globalHistory } from '@reach/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import useMobile from '../useMobile'
import { H3 } from '../Typography'
import styles from './style.module.css'
import 'antd/dist/antd.css'

const { Header } = Layout

const HeaderCV = () => {
  const isMobile = useMobile()
  const params =
    globalHistory.location.pathname === '/'
      ? '/home-page'
      : globalHistory.location.pathname
  const [show, setShow] = useState(false)

  const menu = [
    {
      name: 'Home',
      link: '/home-page',
    },
    {
      name: 'About',
      link: '/about-me',
    },
    {
      name: 'Resume',
      link: '/resume',
    },
    {
      name: 'Technology',
      link: '/technology',
    },
    {
      name: 'Project',
      link: '/project',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ]

  const showDrawer = () => {
    setShow(true)
  }

  const onClose = () => {
    setShow(false)
  }

  const menuStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    fontSize: '1.07rem',
    background: 'var(--primary)',
  }

  const menuResStyle = {
    height: '100%',
    fontSize: '1.5rem',
    color: 'var(--secondary)',
    background: 'var(--primary)',
  }

  const drawerStyle = {
    padding: '0',
  }

  return (
    <Header className={styles.headerWrapper}>
      <Row style={{ width: '100%', height: '100%' }}>
        <Col sm={{ span: 24 }} xs={{ span: 24 }}>
          <Row
            type='flex'
            align='middle'
            justify='space-between'
            style={{ height: '100%' }}
          >
            <Col sm={{ span: 4 }} xs={{ span: 3 }}>
              {!isMobile ? (
                <Link to='/' className={styles.headerTitle}>
                  <H3 color='var(--secondary)'>Nhat Huynh</H3>
                </Link>
              ) : (
                <Link to='/'>
                  <Avatar
                    src='asset/images/small-avatar.jpg'
                    style={{
                      width: '3rem',
                      height: '3rem',
                      marginBottom: '1rem',
                      border: '2px solid var(--secondary)',
                    }}
                  />
                </Link>
              )}
            </Col>

            <Col
              sm={{ span: 16 }}
              xs={{ span: 21 }}
              className={styles.headerNavContainer}
            >
              {isMobile && !show && (
                <FontAwesomeIcon
                  icon={faBars}
                  className={styles.hamburgerMenu}
                  onClick={() => showDrawer()}
                />
              )}

              {isMobile && show && (
                <FontAwesomeIcon
                  icon={faTimes}
                  className={styles.hamburgerMenu}
                  onClick={() => onClose()}
                />
              )}

              {!isMobile && (
                <Menu
                  mode='horizontal'
                  defaultSelectedKeys={[`${params}`]}
                  theme='dark'
                  className={styles.menuStyle}
                  style={menuStyle}
                >
                  {menu?.map((item) => (
                    <Menu.Item
                      key={`${item?.link}`}
                      style={{ width: '16%', textAlign: 'center' }}
                    >
                      <Link to={item?.link}>{item?.name}</Link>
                    </Menu.Item>
                  ))}
                </Menu>
              )}

              {isMobile && show && (
                <Drawer
                  placement='right'
                  closable={false}
                  onClose={onClose}
                  visible={show}
                  className={styles.drawer}
                  bodyStyle={drawerStyle}
                >
                  <Menu
                    defaultSelectedKeys={[`${params}`]}
                    mode='inline'
                    theme='dark'
                    onClick={() => {
                      onClose()
                    }}
                    style={menuResStyle}
                  >
                    {menu?.map((item) => (
                      <Menu.Item key={`${item?.link}`}>
                        <Link to={item?.link}>{item?.name}</Link>
                      </Menu.Item>
                    ))}
                  </Menu>
                </Drawer>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  )
}

export default HeaderCV
