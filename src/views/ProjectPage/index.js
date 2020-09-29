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
          <Col sm={{ span: 11 }}>
            <div style={{ width: '100%' }}>
              <div
                className='fb-page'
                data-href='https://www.facebook.com/Crave-Food-101326401742632'
                data-tabs='D&#xf2;ng th&#x1edd;i gian, th&#xed;ch'
                data-width=''
                data-height=''
                data-small-header='false'
                data-adapt-container-width='false'
                data-hide-cover='false'
                data-show-facepile='true'
              >
                <blockquote
                  cite='https://www.facebook.com/Crave-Food-101326401742632'
                  className='fb-xfbml-parse-ignore'
                >
                  <a href='https://www.facebook.com/Crave-Food-101326401742632'>
                    CraveFood
                  </a>
                </blockquote>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </div>
  )
}
export default ProjectPage
