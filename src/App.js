import React, { Suspense } from 'react'
import { Layout, Spin } from 'antd'
import 'antd/dist/antd.css'

import Header from './components/common/Header'
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
        <Content
          style={{
            marginTop: '4rem',
            backgroundColor: 'var(--secondary)',
          }}
        >
          <Routes />
        </Content>
      </Layout>
    </Suspense>
  )
}

export default App
