import React from 'react'
import { Row, Col } from 'antd'

import ResumeContent from './components/ResumeContent'
import { H1 } from '../../components/common/Typography'
import styles from './style.module.css'

const ResumePage = () => {
  const experienceInformation = {
    title: 'My Experience',
    content: [
      {
        titleChildren: 'Web Developer',
        dateChildren: '11/2019 - 4/2020',
        contentChildren:
          'Design and implement Webapp on clean vegetable food named Farmfresh by JSP.',
      },
      {
        titleChildren: 'Front-end Developer',
        dateChildren: '4/2019 - 7/2020',
        contentChildren:
          'Collaborate with Vbros Solution Technology Team about creative and development on the execution of ideas software. Participate in the UI development of a sales WebApp named Real Football by React and Node.',
      },
    ],
  }

  const educationInformation = {
    title: 'My Education',
    content: [
      {
        titleChildren: 'University',
        dateChildren: '8/2016 - 8/2020',
        contentChildren:
          'Currently, I studying with a Software Engineer in Nong Lam University.',
      },
      {
        titleChildren: 'Team Programming',
        dateChildren: '4/2019 - 7/2020',
        contentChildren:
          'I self-educated Front-end Development and had over 6 months of working experience ReactJs with Vbros Solution Technology Team.',
      },
    ],
  }

  return (
    <div className='container'>
      <Row justify='center'>
        <Col lg={{ offset: 2, span: 20 }} style={{ margin: '0' }}>
          <Row className='title'>
            <H1>Resume</H1>
          </Row>
          <Row justify='center' gutter={[0, 16]}>
            <Col lg={{ span: 11 }} className={styles.colResume}>
              <ResumeContent data={experienceInformation} />
            </Col>
            <Col lg={{ span: 11 }} className={styles.colResume}>
              <ResumeContent data={educationInformation} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
export default ResumePage
