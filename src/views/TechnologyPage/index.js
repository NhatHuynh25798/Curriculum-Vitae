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

  const TitleTech = ({ value, name }) => {
    return (
      <div style={{ padding: '0 1rem' }}>
        <B1 color={changed === value ? color : initialColor}>{name}</B1>
      </div>
    )
  }

  const IconTech = ({ value, icon }) => {
    return (
      <div
        className={styles.iconDotTimeline}
        style={{ background: changed === value ? color : initialColor }}
      >
        <FontAwesomeIcon icon={icon} />
      </div>
    )
  }

  const imagesTech = [
    {
      title: <TitleTech value={0} name='HTML' />,
      image: '/asset/images/html5.png',
      color: '#E44D26',
      icon: <IconTech value={0} icon={faHtml5} />,
    },
    {
      title: <TitleTech value={1} name='CSS' />,
      image: '/asset/images/css.png',
      color: '#379AD6',
      icon: <IconTech value={1} icon={faCss3} />,
    },
    {
      title: <TitleTech value={2} name='JAVASCRIPT' />,
      image: '/asset/images/javascript.png',
      color: '#F7DF1E',
      icon: <IconTech value={2} icon={faJs} />,
    },
    {
      title: <TitleTech value={3} name='REACT' />,
      image: '/asset/images/react.png',
      color: '#66E8FF',
      icon: <IconTech value={3} icon={faReact} />,
    },
    {
      title: <TitleTech value={4} name='REDUX' />,
      image: '/asset/images/redux.png',
      color: '#764BBB',
      icon: <IconTech value={4} icon={faRecycle} />,
    },
    {
      title: <TitleTech value={5} name='GIT' />,
      image: '/asset/images/git.png',
      color: '#F34F29',
      icon: <IconTech value={5} icon={faGit} />,
    },
  ]

  const TechItem = (props) => {
    const handleMouseMove = () => {
      setColor(props.color)
    }

    const handleMouseLeave = () => {
      setColor(initialColor)
    }

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
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Col sm={{ span: 24 }} className={styles.techItem}>
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
    <div className='container' style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Row justify='center'>
        <Col sm={{ offset: 2, span: 20 }} style={{ margin: '0' }}>
          <Row className='title'>
            <H1>Technology</H1>
          </Row>
          <Row justify='center' style={{ marginTop: '2rem' }}>
            <Col
              sm={{ span: 24 }}
              xs={{ offset: 1, span: 22 }}
              style={{ margin: 0 }}
            >
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
                      style={{ position: 'relative' }}
                      onMouseMove={() => {
                        setChanged(index)
                      }}
                      onMouseLeave={() => {
                        setChanged(null)
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
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
export default TechnologyPage
