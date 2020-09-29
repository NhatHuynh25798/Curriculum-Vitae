import React from 'react'
import { Row, Col } from 'antd'

import styles from './style.module.css'
import { H1, H3 } from '../../components/common/Typography'

const ProjectPage = () => {
  return (
    <div className='container'>
      <Col sm={{ offset: 2, span: 20 }} style={{ margin: '0' }}>
        <Row className='title'>
          <H1>Resume</H1>
        </Row>
        <Row gutter={[16, 0]}>
          <Col sm={{ span: 11 }}>
            <Row>
              <Col sm={{ offset: 9, span: 15 }}>
                <Row>
                  <H3>Project is progressing...</H3>
                  <Col sm={{ span: 24 }}>
                    <Row>
                      <span>
                        <strong>Link web:&nbsp;</strong>
                      </span>
                      <span
                        className={styles.linkProject}
                        onClick={() =>
                          window.open('https://cravefood.netlify.app')
                        }
                      >
                        https://cravefood.netlify.app
                      </span>
                    </Row>
                  </Col>

                  <Col sm={{ span: 24 }}>
                    <Row>
                      <span>
                        <strong>GitLab:&nbsp;</strong>
                        <span>Updating...</span>
                      </span>
                    </Row>
                  </Col>

                  <Col>
                    <Row>
                      <span>
                        <strong>Description:&nbsp;</strong>
                        Business website in the field of cuisine and online
                        restaurants.
                      </span>
                    </Row>
                  </Col>

                  <Col sm={{ span: 24 }}>
                    <Row>
                      <span>
                        <strong>Tech stack:&nbsp;</strong>
                        <span>ReactJS, Redux-Saga, Ant Design UI</span>
                      </span>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col
            sm={{ span: 11 }}
            style={{ padding: '0' }}
            className={styles.backgroundImage}
          >
            <img src='asset/images/background.jpg' alt='cravefood' />
            <span className={styles.titleProject}>CRAVEFOOD</span>
            <div className={styles.logoContainer}>
              <img
                src='asset/images/logo.png'
                alt='logo-cravefood'
                className={styles.logo}
                onClick={() => window.open('https://cravefood.netlify.app')}
              />
              <div style={{ marginLeft: '1rem', color: 'var(--secondary)' }}>
                <div>
                  <span
                    className={styles.linkProject}
                    style={{ color: 'var(--secondary)' }}
                    onClick={() => window.open('https://cravefood.netlify.app')}
                  >
                    <strong>Crave Food</strong>
                  </span>
                </div>
                <div>Phát huy truyền thống - Kết nối hiện đại</div>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </div>
  )
}
export default ProjectPage
