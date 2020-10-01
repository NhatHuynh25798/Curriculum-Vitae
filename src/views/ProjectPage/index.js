import React from 'react'
import { Row, Col } from 'antd'

import useMobile from '../../components/common/useMobile'
import styles from './style.module.css'
import { H1, H3 } from '../../components/common/Typography'

const ProjectPage = () => {
  const isMobile = useMobile()

  const projects = [
    {
      id: 'cravefood',
      name: 'Crave Food',
      slogan: 'Phát huy truyền thống - Kết nối hiện đại',
      description:
        'Business website in the field of cuisine and online restaurants.',
      gitLab: 'Updating...',
      link: 'https://cravefood.netlify.app',
      logo: 'asset/images/logo.png',
      background: 'asset/images/background.jpg',
      techStack: 'Hooks, Redux-Saga, Ant Design UI',
      status: 'Project is progressing...',
      align: 'row',
    },
    {
      id: 'realfootball',
      name: 'Real Football',
      slogan: 'Chúng tôi cung cấp các loại giày bóng đá có chất lượng hàng đầu',
      description: 'Business website in the field of sport shoes.',
      gitLab: 'Updating...',
      link: 'https://realfootball.xyz',
      logo: 'asset/images/logo-realfootball.png',
      background: 'asset/images/40-off-Mutator-Desktop.jpg',
      techStack: 'Hooks, Redux-Saga, Ant Design UI',
      status: 'Project is progressing...',
      align: 'row-reverse',
    },
  ]

  return (
    <div className='container'>
      <Col sm={{ offset: 2, span: 20 }} style={{ margin: '0' }}>
        <Row className='title'>
          <H1>Resume</H1>
        </Row>
        {projects.map((item) => (
          <Row
            justify='center'
            gutter={isMobile ? [0, 32] : [32, 48]}
            key={item?.id}
            style={{
              flexDirection: isMobile ? 'column-reverse' : item?.align,
              padding: isMobile ? '3rem 0 0 0' : '3rem',
            }}
          >
            <Col sm={{ span: 12 }}>
              <Row>
                <Col sm={{ span: 24 }}>
                  <Row>
                    <H3>{item?.status}</H3>
                    <Col sm={{ span: 24 }}>
                      <Row>
                        <span>
                          <strong>Link web:&nbsp;</strong>
                        </span>
                        <span
                          className={styles.linkProject}
                          onClick={() => window.open(`${item?.link}`)}
                        >
                          {item?.link}
                        </span>
                      </Row>
                    </Col>

                    <Col sm={{ span: 24 }}>
                      <Row>
                        <span>
                          <strong>GitLab:&nbsp;</strong>
                          <span>{item?.gitLab}</span>
                        </span>
                      </Row>
                    </Col>

                    <Col>
                      <Row>
                        <span>
                          <strong>Description:&nbsp;</strong>
                          {item?.description}
                        </span>
                      </Row>
                    </Col>

                    <Col sm={{ span: 24 }}>
                      <Row>
                        <span>
                          <strong>Tech stack:&nbsp;</strong>
                          <span>{item?.techStack}</span>
                        </span>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col
              sm={{ span: 12 }}
              style={{ padding: '0' }}
              className={styles.backgroundImage}
            >
              <img src={item?.background} alt={item?.id} />
              <span className={styles.titleProject}>{item?.name}</span>
              <div className={styles.logoContainer}>
                <img
                  src={item?.logo}
                  alt={`logo-${item?.id}`}
                  className={styles.logo}
                  onClick={() => window.open(`${item?.link}`)}
                />
                <div style={{ marginLeft: '1rem', color: 'var(--secondary)' }}>
                  <div>
                    <span
                      className={styles.linkProject}
                      style={{ color: 'var(--secondary)' }}
                      onClick={() => window.open(`${item?.link}`)}
                    >
                      <strong>{item?.name}</strong>
                    </span>
                  </div>
                  {!isMobile && <div>{item?.slogan}</div>}
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </Col>
    </div>
  )
}
export default ProjectPage
