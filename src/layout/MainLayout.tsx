import React from 'react'
import Header from '@/layout/Header.tsx'
import Sidebar from '@/layout/Sidebar.tsx'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <main className={'main-layout'}>
      <Header />
      <Sidebar />
      <div className={'main-layout-content'}>
        <Outlet />
      </div>
    </main>
  )
}

export default MainLayout
