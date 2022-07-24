import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Project from '../components/Project';
import Report from '../ReportPage/Report'
const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Project/>} />
            <Route path='/reports' element={<Report/>} />
        </Routes>
    </div>
  )
}

export default MainRoutes