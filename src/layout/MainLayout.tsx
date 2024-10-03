import React from 'react'
import Header from '@/layout/Header'
import Sidebar from '@/layout/Sidebar'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={'main-layout'}>
      <Header />
      <Sidebar />
      <div className={'main-layout-content'}>{children}</div>
    </main>
  )
}

export default MainLayout
