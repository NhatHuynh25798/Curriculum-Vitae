import React from 'react'
import { Row, Col, Timeline } from 'antd'

import { H1, H2, T1 } from '../../components/common/Typography'
import styles from './style.module.css'

const TechnologyPage = () => {
  const imagesTech = [
    {
      title: 'html',
      image: '/asset/images/html5.png',
      color: '#F16528',
    },
    {
      title: 'css',
      image: '/asset/images/css.png',
      color: '#379AD6',
    },
    {
      title: 'javascript',
      image: '/asset/images/javascript.png',
      color: '#F7DF1E',
    },
    {
      title: 'react',
      image: '/asset/images/react.png',
      color: '#66E8FF',
    },
    {
      title: 'git',
      image: '/asset/images/git.png',
      color: '#F34F29',
    },
  ]

  const TechItem = (props) => {
    return (
      <Row
        justify='center'
        className={styles.techItemContainer}
        style={
          props?.margin === true
            ? {
                marginRight: '3rem',
                borderTopRightRadius: '0',
              }
            : {
                marginLeft: '3rem',
                borderTopLeftRadius: '0',
              }
        }
      >
        <Col lg={{ span: 24 }} className={styles.techItem}>
          <img
            src={props?.data}
            alt={props?.title}
            className={styles.techItemImage}
          />
        </Col>
      </Row>
    )
  }

  return (
    <div className='container'>
      <Row justify='center'>
        <Col lg={{ offset: 2, span: 20 }}>
          <Row className='title'>
            <H1>Technology</H1>
          </Row>
          <Row justify='center'>
            <Timeline mode='alternate'>
              {imagesTech?.map((item, index) => (
                <Timeline.Item color={item?.color} key={index}>
                  <TechItem
                    color={item?.color}
                    data={item?.image}
                    title={item?.title}
                    margin={index % 2 === 0 ? false : true}
                  />
                </Timeline.Item>
              ))}
            </Timeline>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
export default TechnologyPage
