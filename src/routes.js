import React, { lazy } from 'react'
import { Link, Router, Redirect } from '@reach/router'
import { Result } from 'antd'

const HomePage = lazy(() => import('./views/HomePage'))
const AboutPage = lazy(() => import('./views/AboutPage'))
const ResumePage = lazy(() => import('./views/ResumePage'))
const TechnologyPage = lazy(() => import('./views/TechnologyPage'))

const PageNotPound = () => (
  <Result
    status='404'
    title='404'
    subTitle='Sorry, the page you visited does not exist.'
    extra={<Link to='/'>Back Home</Link>}
  />
)

const Routes = () => (
  <Router style={{ backgroundColor: 'var(--secondary)' }}>
    <Redirect from='/' to='/home-page' noThrow />
    <HomePage path='/home-page' />
    <AboutPage path='/about-me' />
    <ResumePage path='/resume' />
    <TechnologyPage path='/technology' />
    <PageNotPound path='*' />
  </Router>
)

export default Routes
