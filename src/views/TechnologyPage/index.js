import React, { useState } from 'react'
import { Row, Col, Timeline } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faGit,
} from '@fortawesome/free-brands-svg-icons'
import { faRecycle } from '@fortawesome/free-solid-svg-icons'

import { H1, B1 } from '../../components/common/Typography'
import styles from './style.module.css'

const TechnologyPage = () => {
  const initialColor = '#595959'
  const [color, setColor] = useState(initialColor)
  const [changed, setChanged] = useState(null)

  const imagesTech = [
    {
      title: (
        <div style={{ padding: '0 1rem' }}>
          <B1 color={changed === 0 ? color : initialColor}>HTML</B1>
        </div>
      ),
      image: '/asset/images/html5.png',
      color: '#E44D26',
      icon: (
        <div
          className={styles.iconDotTimeline}
          style={{ background: changed === 0 ? color : initialColor }}
        >
          <FontAwesomeIcon icon={faHtml5} />
        </div>
      ),
    },
    {
      title: (
        <div style={{ padding: '0 1rem' }}>
          <B1 color={changed === 1 ? color : initialColor}>CSS</B1>
        </div>
      ),
      image: '/asset/images/css.png',
      color: '#379AD6',
      icon: (
        <div
          className={styles.iconDotTimeline}
          style={{ background: changed === 1 ? color : initialColor }}
        >
          <FontAwesomeIcon icon={faCss3} />
        </div>
      ),
    },
    {
      title: (
        <div style={{ padding: '0 1rem' }}>
          <B1 color={changed === 2 ? color : initialColor}>JAVASCRIPT</B1>
        </div>
      ),
      image: '/asset/images/javascript.png',
      color: '#F7DF1E',
      icon: (
        <div
          className={styles.iconDotTimeline}
          style={{ background: changed === 2 ? color : initialColor }}
        >
          <FontAwesomeIcon icon={faJs} />
        </div>
      ),
    },
    {
      title: (
        <div style={{ padding: '0 1rem' }}>
          <B1 color={changed === 3 ? color : initialColor}>REACT</B1>
        </div>
      ),
      image: '/asset/images/react.png',
      color: '#66E8FF',
      icon: (
        <div
          className={styles.iconDotTimeline}
          style={{ background: changed === 3 ? color : initialColor }}
        >
          <FontAwesomeIcon icon={faReact} />
        </div>
      ),
    },
    {
      title: (
        <div style={{ padding: '0 1rem' }}>
          <B1 color={changed === 4 ? color : initialColor}>REDUX</B1>
        </div>
      ),
      image: '/asset/images/redux.png',
      color: '#764BBB',
      icon: (
        <div
          className={styles.iconDotTimeline}
          style={{ background: changed === 4 ? color : initialColor }}
        >
          <FontAwesomeIcon icon={faRecycle} />
        </div>
      ),
    },
    {
      title: (
        <div style={{ padding: '0 1rem' }}>
          <B1 color={changed === 5 ? color : initialColor}>GIT</B1>
        </div>
      ),
      image: '/asset/images/git.png',
      color: '#F34F29',
      icon: (
        <div
          className={styles.iconDotTimeline}
          style={{ background: changed === 5 ? color : initialColor }}
        >
          <FontAwesomeIcon icon={faGit} />
        </div>
      ),
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
        <Col lg={{ offset: 2, span: 20 }} style={{ margin: '0' }}>
          <Row className='title'>
            <H1>Technology</H1>
          </Row>
          <Row justify='center' style={{ padding: '1rem' }}>
            <Timeline mode='alternate' className={styles.timelineContainer}>
              {imagesTech?.map((item, index) => (
                <Timeline.Item
                  key={index}
                  label={item?.title}
                  dot={item?.icon}
                  color={item?.color}
                  className={styles.timelineItem}
                >
                  <div
                    onMouseMove={() => {
                      setChanged(index)
                      setColor(item?.color)
                    }}
                    onMouseLeave={() => {
                      setChanged(null)
                      setColor(initialColor)
                    }}
                  >
                    <TechItem
                      color={item?.color}
                      data={item?.image}
                      title={item?.title}
                      margin={index % 2 === 0 ? false : true}
                    />
                  </div>
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
