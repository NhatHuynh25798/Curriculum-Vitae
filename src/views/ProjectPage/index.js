import React, { useEffect, useRef } from 'react'
// import { Row, Col } from 'antd'
import lottie from 'lottie-web'

import pageNotFoundAnimation from '../../JsonFile/404page.json'

// import { H1 } from '../../components/common/Typography'
// import styles from './style.module.css'

const ProjectPage = () => {
  const pageNotFoundElement = useRef(null)

  useEffect(() => {
    if (pageNotFoundElement) {
      lottie.loadAnimation({
        container: pageNotFoundElement.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: pageNotFoundAnimation,
      })
    }
  }, [])
  return (
    <div
      style={{
        overflowY: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '100vh',
        maxHeight: '100vh',
      }}
    >
      <div id='page-not-found-element' ref={pageNotFoundElement} />
    </div>
  )
}
export default ProjectPage
