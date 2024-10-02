import MainLayout from '@/layout/MainLayout'
import MentorPage from '@/page/MentorPage'
import MessagePage from '@/page/MessagePage'
import OverviewPage from '@/page/OverviewPage'
import SettingPage from '@/page/SettingPage'
import TaskPage from '@/page/TaskPge'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/task" element={<TaskPage />} />
          <Route path="/mentor" element={<MentorPage />} />
          <Route path="/message" element={<MessagePage />} />
          <Route path="/setting" element={<SettingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
