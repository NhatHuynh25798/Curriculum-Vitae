import React, { Suspense } from 'react'
import { Layout, Spin } from 'antd'
import 'antd/dist/antd.css'

import Header from './components/common/Header'
import ErrorBoundary from './components/common/ErrorBoundary'
import Routes from './routes.js'

import './App.css'

const { Content } = Layout

const App = () => {
  return (
    <Suspense
      fallback={
        <Spin
          size='large'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            color: '#000000',
          }}
        />
      }
    >
      <Layout>
        <Header />
        {/* <div
          id='animation'
          ref={element.current}
          style={{
            position: 'absolute',
            top: '4rem',
            left: '0',
            width: '4rem',
            height: '4rem',
            zIndex: '1000',
          }}
        /> */}
        <Content
          style={{
            marginTop: '4rem',
            backgroundColor: 'var(--secondary)',
          }}
        >
          <ErrorBoundary>
            <Routes />
          </ErrorBoundary>
        </Content>
      </Layout>
    </Suspense>
  )
}

export default App
