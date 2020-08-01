import React, { useState } from 'react'
import { Col, Row, Layout, Avatar, Drawer, Menu } from 'antd'
import { Link } from '@reach/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import useMobile from '../useMobile'
import { H3 } from '../Typography'
import styles from './style.module.css'

const { Header } = Layout

const HeaderCV = () => {
  const isMobile = useMobile()
  const [show, setShow] = useState(false)
  const [index, setIndex] = useState(0)
  const [current, setCurrent] = useState(0)

  const menu = [
    {
      id: 0,
      name: 'Home',
      link: '/',
    },
    {
      id: 1,
      name: 'About',
      link: '/about-me',
    },
    {
      id: 2,
      name: 'Resume',
      link: '/resume',
    },
    {
      id: 3,
      name: 'Technology',
      link: '/technology',
    },
    {
      id: 4,
      name: 'Project',
      link: '/project',
    },
    {
      id: 5,
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
              lg={{ span: 16 }}
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
                  selectedKeys={[`${current}`]}
                  theme='dark'
                  onSelect={(key) => {
                    setCurrent(+key?.key)
                  }}
                  style={menuStyle}
                >
                  {menu?.map((item) => (
                    <Menu.Item
                      key={`${item?.id}`}
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
                    selectedKeys={[`${index}`]}
                    mode='inline'
                    theme='dark'
                    onClick={() => {
                      onClose()
                    }}
                    onSelect={(key) => {
                      setIndex(+key?.key)
                    }}
                    style={menuResStyle}
                  >
                    {menu?.map((item) => (
                      <Menu.Item key={`${item?.id}`}>
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
