import React from 'react'
import { Row, Col } from 'antd'

import { H3, B1, T3, T4 } from '../../../../components/common/Typography'
import styles from './style.module.css'

const ResumeContent = (props) => {
  const { data } = props

  return (
    <Row justify='center' className={styles.resumeContentContainerWrapper}>
      <Col lg={{ offset: 2, span: 20 }}>
        <Row style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <H3>{data?.title}</H3>
        </Row>
        <Row gutter={[0, 48]}>
          <Col lg={{ span: 24 }}>
            <Row className={styles.resumeContentContainer}>
              <Col lg={{ span: 24 }} className={styles.resumeContentItem}>
                {data?.content?.map((item, index) => (
                  <Row
                    key={index}
                    gutter={[0, 48]}
                    style={{
                      borderBottom:
                        index < data?.content.length - 1
                          ? '1px solid rgba(0, 0, 0, 0.19)'
                          : 'none',
                      padding: '1.875rem',
                    }}
                  >
                    <Col lg={{ span: 24 }}>
                      <Row
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-start',
                        }}
                      >
                        <B1>{item?.titleChildren}</B1>
                      </Row>
                      <Row>
                        <T4>{item?.dateChildren}</T4>
                      </Row>
                      <Row>
                        <T3>{item?.contentChildren}</T3>
                      </Row>
                    </Col>
                  </Row>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
export default ResumeContent
